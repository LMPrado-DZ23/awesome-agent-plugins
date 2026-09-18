// Verifies that every npm/PyPI package referenced by an MCP entry exists
// (npx -y <pkg> / uvx <pkg>). Exit 1 with --strict when any is missing.
import { loadEntries } from '../lib/catalog.mjs';

const strip = (spec) => spec.replace(/^(@?[^@]+)@.*$/, '$1'); // drop @version
const pkgs = new Map();
for (const { file, entry: e } of loadEntries()) {
  const s = e.mcp?.stdio;
  if (!s) continue;
  if (s.command === 'npx') {
    const p = (s.args ?? []).find((a) => !a.startsWith('-'));
    if (p && !p.startsWith('<')) pkgs.set(`npm:${strip(p)}`, file);
  } else if (s.command === 'uvx') {
    const p = (s.args ?? []).find((a) => !a.startsWith('-'));
    if (p && !p.startsWith('<')) pkgs.set(`pypi:${strip(p).replace(/\[.*\]$/, '')}`, file);
  }
}

async function exists(key) {
  const [reg, name] = key.split(/:(.*)/s);
  const url = reg === 'npm' ? `https://registry.npmjs.org/${name.replace('/', '%2F')}` : `https://pypi.org/pypi/${name}/json`;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { method: 'GET', headers: { accept: 'application/json' } });
      if (r.status === 404) return false;
      if (r.ok) return true;
    } catch { /* retry */ }
    await new Promise((res) => setTimeout(res, 1000 * (i + 1)));
  }
  return null; // unknown (network)
}

const missing = [];
const unknown = [];
const list = [...pkgs.keys()];
for (let i = 0; i < list.length; i += 16) {
  const batch = list.slice(i, i + 16);
  const res = await Promise.all(batch.map(exists));
  batch.forEach((k, j) => { if (res[j] === false) missing.push(k); else if (res[j] === null) unknown.push(k); });
}
console.log(`checked ${list.length} packages · ${missing.length} missing · ${unknown.length} unknown`);
for (const k of missing) console.log(`  MISSING ${k}  (${pkgs.get(k)})`);
for (const k of unknown) console.log(`  UNKNOWN ${k}  (${pkgs.get(k)})`);
if (missing.length && process.argv.includes('--strict')) process.exit(1);
