// Refreshes GitHub stats for every entry and alternative into data/stats.json
// and reports repos that are gone or archived (non-zero exit with --strict).
// Needs an authenticated `gh` (GITHUB_TOKEN in CI).
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { loadEntries } from '../lib/catalog.mjs';
import { repoKey } from '../lib/repo.mjs';

const BATCH = 60;
const entries = loadEntries().map((x) => x.entry);
const keys = [...new Set(entries.flatMap((e) => [e.url, ...(e.alternatives ?? []).map((a) => a.url)]).map(repoKey).filter(Boolean))];

function fetch(batch) {
  const q = batch.map((k, i) => {
    const [o, n] = k.split('/');
    return `r${i}: repository(owner: ${JSON.stringify(o)}, name: ${JSON.stringify(n)}) { stargazerCount pushedAt isArchived licenseInfo { spdxId } }`;
  }).join('\n');
  let out;
  try {
    out = execFileSync('gh', ['api', 'graphql', '-f', `query=query { ${q} }`], { encoding: 'utf8', maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) {
    out = e.stdout;
    if (!out) throw e;
  }
  const { data } = JSON.parse(out);
  return Object.fromEntries(batch.map((k, i) => {
    const r = data?.[`r${i}`];
    return [k, r ? { stars: r.stargazerCount, pushed_at: r.pushedAt?.slice(0, 10), archived: r.isArchived, license: r.licenseInfo?.spdxId ?? null } : { missing: true }];
  }));
}

const stats = {};
for (let i = 0; i < keys.length; i += BATCH) Object.assign(stats, fetch(keys.slice(i, i + BATCH)));
const sorted = Object.fromEntries(Object.entries(stats).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync('data/stats.json', JSON.stringify({ checked_at: new Date().toISOString().slice(0, 10), repos: sorted }, null, 1) + '\n');

const bad = Object.entries(stats).filter(([, s]) => s.missing || s.archived);
console.log(`stats for ${keys.length} repos · ${bad.length} missing/archived`);
for (const [k, s] of bad) console.log(`  ${s.missing ? 'MISSING ' : 'ARCHIVED'} ${k}`);
if (bad.length && process.argv.includes('--strict')) process.exit(1);
