// Turns reviewed merges (data/cache/dsh-merged/<category>.json, see MERGE_SPEC.md)
// into catalog entries under data/entries/dsh/. Re-running replaces that folder.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';
import { DSH_CATEGORY_MAP } from '../../lib/taxonomy.mjs';
import { loadEntries } from '../../lib/catalog.mjs';

const MERGED = 'data/cache/dsh-merged';
const CAND = 'data/cache/dsh-candidates';
const OUT = 'data/entries/dsh';
const REF = process.env.DSH_UPSTREAM_REF || 'unknown';

// Same rule awesome-dsh-plugin uses: prebuilt tarball, else build from GitHub
// (monorepo subpackages via #path:/<subdir>).
export function dshInstall(url, tarball) {
  if (tarball) return `dsh plugin --profile web add "${tarball}"`;
  const path = url.replace('https://github.com/', '');
  const repo = path.split('/').slice(0, 2).join('/');
  const sub = path.includes('/tree/') ? path.split('/tree/')[1].replace(/^[^/]+\//, '') : null;
  return sub ? `dsh plugin --profile web add github:${repo}#path:/${sub}` : `dsh plugin --profile web add github:${repo}`;
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

// `curated`: URLs already hand-curated elsewhere in the catalog — those groups are
// skipped (and reported) so a plugin is never listed twice.
export function toEntries(mergedByCat, candByCat, ref = REF, curated = new Set(), log = () => {}) {
  const out = [];
  const ids = new Set();
  for (const [cat, list] of Object.entries(mergedByCat)) {
    const byUrl = new Map((candByCat[cat] ?? []).map((c) => [c.url, c]));
    for (const m of list) {
      const p = byUrl.get(m.primary);
      if (!p) throw new Error(`${cat}: primary ${m.primary} not among candidates`);
      if (curated.has(p.url)) { log(`skip ${p.url}: already curated outside data/entries/dsh`); continue; }
      let id = slug(`dsh-${p.name.split('/')[1].replace(/#.*/, '')}${p.name.includes('#') ? '-' + p.name.split('#')[1] : ''}`);
      if (ids.has(id)) id = slug(`${id}-${p.name.split('/')[0]}`);
      ids.add(id);
      const alternatives = (m.alternatives ?? []).map((a) => {
        const c = byUrl.get(a.url);
        if (!c) throw new Error(`${cat}: alternative ${a.url} not among candidates`);
        return { name: c.name, url: c.url, adds: a.adds };
      });
      out.push({
        id,
        name: p.name,
        title: m.title,
        url: p.url,
        type: 'native-plugin',
        category: DSH_CATEGORY_MAP[cat],
        license: p.license ?? null,
        tags: m.tags,
        description: m.description,
        native: { client: 'dsh', install: dshInstall(p.url, p.tarball) },
        ...(alternatives.length ? { alternatives } : {}),
        origin: { list: 'awesome-dsh-plugin', ref },
      });
    }
  }
  return out;
}

if (process.argv[1]?.endsWith('dsh-write.mjs')) {
  // Only known upstream categories — stray files in the cache are ignored.
  const read = (dir) => Object.fromEntries(readdirSync(dir).filter((f) => f.endsWith('.json') && f.replace('.json', '') in DSH_CATEGORY_MAP)
    .map((f) => [f.replace('.json', ''), JSON.parse(readFileSync(join(dir, f), 'utf8'))]));
  const curated = new Set(loadEntries().filter((x) => !x.file.startsWith('data/entries/dsh/'))
    .flatMap((x) => [x.entry.url, ...(x.entry.alternatives ?? []).map((a) => a.url)]));
  const entries = toEntries(read(MERGED), read(CAND), REF, curated, console.log);
  if (existsSync(OUT)) rmSync(OUT, { recursive: true });
  mkdirSync(OUT, { recursive: true });
  for (const e of entries) {
    const header = '# yaml-language-server: $schema=../../../schema/entry.schema.json\n';
    writeFileSync(join(OUT, `${e.id}.yml`), header + yaml.dump(e, { lineWidth: 120, quotingType: '"' }));
  }
  const alts = entries.reduce((n, e) => n + (e.alternatives?.length ?? 0), 0);
  console.log(`wrote ${entries.length} dsh entries (${alts} alternatives folded in) to ${OUT}`);
}
