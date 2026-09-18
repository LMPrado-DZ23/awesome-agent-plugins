// Turns the reviewed MCP merge (data/cache/mcp-merged.json, see MCP_MERGE_SPEC.md)
// into catalog entries under data/entries/mcp/, taking each install spec from the
// registry candidate (never from free text). Re-running replaces that folder.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';
import { loadEntries } from '../../lib/catalog.mjs';
import { CATEGORIES } from '../../lib/taxonomy.mjs';

const OUT = 'data/entries/mcp';
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

export function toMcpEntries(merged, candidates, curated = new Set(), log = () => {}) {
  const byUrl = new Map(candidates.map((c) => [c.url, c]));
  const ids = new Set();
  const out = [];
  for (const m of merged) {
    const p = byUrl.get(m.primary);
    if (!p) throw new Error(`primary ${m.primary} not among candidates`);
    if (!CATEGORIES[m.category]) throw new Error(`${m.primary}: unknown category ${m.category}`);
    if (curated.has(p.url)) { log(`skip ${p.url}: already curated`); continue; }
    const [, owner, repo, , , ...sub] = p.url.replace('https://github.com/', '/').split('/');
    let id = slug(sub.length ? `${repo}-${sub.at(-1)}` : repo);
    if (!id.includes('mcp')) id = slug(`${id}-mcp`);
    if (ids.has(id)) id = slug(`${owner}-${id}`);
    ids.add(id);
    const alternatives = (m.alternatives ?? []).filter((a) => !curated.has(a.url)).map((a) => {
      const c = byUrl.get(a.url);
      if (!c) throw new Error(`alternative ${a.url} not among candidates`);
      return { name: c.title ?? c.url.replace('https://github.com/', ''), url: c.url, adds: a.adds };
    });
    out.push({
      id,
      name: p.title ?? `${owner}/${repo}`,
      title: m.title,
      url: p.url,
      type: 'mcp-server',
      category: m.category,
      license: p.license ?? null,
      tags: m.tags,
      description: m.description,
      mcp: { name: slug(p.registry_name.split('/').pop()).slice(0, 32) || id.slice(0, 32), ...p.mcp },
      ...(alternatives.length ? { alternatives } : {}),
      origin: { list: 'mcp-registry', ref: p.registry_name },
    });
  }
  return out;
}

if (process.argv[1]?.endsWith('mcp-write.mjs')) {
  const merged = JSON.parse(readFileSync('data/cache/mcp-merged.json', 'utf8'));
  const cands = JSON.parse(readFileSync('data/cache/mcp-candidates.json', 'utf8'));
  const curated = new Set(loadEntries().filter((x) => !x.file.startsWith(`${OUT}/`))
    .flatMap((x) => [x.entry.url, ...(x.entry.alternatives ?? []).map((a) => a.url)]));
  const entries = toMcpEntries(merged, cands, curated, console.log);
  if (existsSync(OUT)) rmSync(OUT, { recursive: true });
  mkdirSync(OUT, { recursive: true });
  const header = '# yaml-language-server: $schema=../../../schema/entry.schema.json\n';
  for (const e of entries) writeFileSync(join(OUT, `${e.id}.yml`), header + yaml.dump(e, { lineWidth: 120, quotingType: '"' }));
  console.log(`wrote ${entries.length} MCP entries (${entries.reduce((n, e) => n + (e.alternatives?.length ?? 0), 0)} alternatives) to ${OUT}`);
}
