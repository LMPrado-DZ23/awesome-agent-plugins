// Turns the reviewed GitHub discovery merge (data/cache/discover-merged.json, see
// DISCOVER_MERGE_SPEC.md) into entries under data/entries/github/. Install
// commands are derived from the detected `kind` and the repo slug only.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';
import { loadEntries } from '../../lib/catalog.mjs';
import { CATEGORIES } from '../../lib/taxonomy.mjs';

const OUT = 'data/entries/github';
const SLUG = /^[A-Za-z0-9][\w.-]*\/[\w.-]+$/;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

export function kindToEntry(kind, key) {
  if (!SLUG.test(key)) throw new Error(`unsafe repo slug ${key}`);
  switch (kind) {
    case 'skill-pack': return { type: 'skill-pack', skill: { source: key } };
    case 'claude-marketplace': return { type: 'marketplace', native: { client: 'claude-code', install: `/plugin marketplace add ${key}`, lang: 'text' } };
    case 'gemini-extension': return { type: 'native-plugin', native: { client: 'gemini-cli', install: `gemini extensions install https://github.com/${key}` } };
    case 'claude-plugin': case 'agents-collection': case 'rules-collection': return { type: 'list' };
    default: throw new Error(`unknown kind ${kind}`);
  }
}

export function toDiscoverEntries(merged, found, curated = new Set(), log = () => {}) {
  const byUrl = new Map(found.map((r) => [r.url, r]));
  const ids = new Set();
  const out = [];
  for (const m of merged) {
    const r = byUrl.get(m.primary);
    if (!r) throw new Error(`primary ${m.primary} not among discovered repos`);
    if (m.kind !== r.kind) throw new Error(`${m.primary}: kind changed ${r.kind} → ${m.kind}`);
    if (!CATEGORIES[m.category]) throw new Error(`${m.primary}: unknown category ${m.category}`);
    if (curated.has(r.url)) { log(`skip ${r.url}: already listed`); continue; }
    let id = slug(r.key.split('/')[1]);
    if (ids.has(id) || id.length < 3) id = slug(r.key.replace('/', '-'));
    ids.add(id);
    const alternatives = (m.alternatives ?? []).filter((a) => !curated.has(a.url)).map((a) => {
      const c = byUrl.get(a.url);
      if (!c) throw new Error(`alternative ${a.url} not among discovered repos`);
      return { name: c.key, url: c.url, adds: a.adds };
    });
    out.push({
      id, name: r.key, title: m.title, url: r.url, category: m.category, license: r.license ?? null,
      tags: m.tags, description: m.description, ...kindToEntry(r.kind, r.key),
      ...(alternatives.length ? { alternatives } : {}),
      origin: { list: 'github-discovery', ref: r.kind },
    });
  }
  return out;
}

if (process.argv[1]?.endsWith('discover-write.mjs')) {
  const merged = JSON.parse(readFileSync('data/cache/discover-merged.json', 'utf8'));
  const found = JSON.parse(readFileSync('data/cache/gh-discover.json', 'utf8'));
  const curated = new Set(loadEntries().filter((x) => !x.file.startsWith(`${OUT}/`))
    .flatMap((x) => [x.entry.url, ...(x.entry.alternatives ?? []).map((a) => a.url)]));
  const entries = toDiscoverEntries(merged, found, curated, console.log);
  if (existsSync(OUT)) rmSync(OUT, { recursive: true });
  mkdirSync(OUT, { recursive: true });
  const header = '# yaml-language-server: $schema=../../../schema/entry.schema.json\n';
  const order = ['id', 'name', 'title', 'url', 'type', 'category', 'license', 'tags', 'description', 'skill', 'native', 'alternatives', 'origin'];
  for (const e of entries) {
    const o = Object.fromEntries(order.filter((k) => e[k] !== undefined).map((k) => [k, e[k]]));
    writeFileSync(join(OUT, `${e.id}.yml`), header + yaml.dump(o, { lineWidth: 120, quotingType: '"' }));
  }
  console.log(`wrote ${entries.length} discovered entries to ${OUT}`);
}
