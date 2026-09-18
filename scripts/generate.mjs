// Generates README.md, README.pt-BR.md, catalog/<category>.md (+ pt-BR) and
// catalog.json from data/entries/**. `--check` fails if outputs are stale (CI).
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { loadEntries, loadCollections, ROOT } from '../lib/catalog.mjs';
import { CATEGORIES, TYPES } from '../lib/taxonomy.mjs';
import { CLIENTS, CLIENT_IDS, installFor, clientsFor } from '../lib/clients.mjs';
import { T, REPO } from '../lib/i18n.mjs';
import { repoKey } from '../lib/repo.mjs';

const CHECK = process.argv.includes('--check');
const DSH_UPSTREAM_TOTAL = 3900;
const statsFile = join(ROOT, 'data', 'stats.json');
const STATS = existsSync(statsFile) ? JSON.parse(readFileSync(statsFile, 'utf8')).repos : {};

const entries = loadEntries().map((x) => x.entry);
// Subdirectory entries (monorepos) would show the whole repo's stars — omit them.
const stars = (url) => (url.includes('/tree/') ? undefined : STATS[repoKey(url)]?.stars);
const k = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : String(n));
const esc = (s) => s.replace(/\|/g, '\\|').replace(/\n/g, ' ');
const anchor = (e) => e.id;
const title = (e) => e.title ?? e.name;

// Stable order: featured first, then stars, then name.
const rank = (a, b) => (b.featured === true) - (a.featured === true) || (stars(b.url) ?? -1) - (stars(a.url) ?? -1) || title(a).localeCompare(title(b));

function worksWith(e, t) {
  const c = clientsFor(e);
  if (c.length === CLIENT_IDS.length) return t.all;
  if (!c.length) return t.no;
  return c.map((id) => CLIENTS[id].name).join(', ') + (c.length === 1 ? ` ${t.only}` : '');
}

function installBlock(e, t) {
  const out = [];
  for (const id of clientsFor(e)) {
    const r = installFor(e, id);
    if (!r) continue;
    out.push(`**${CLIENTS[id].name}**${r.path ? ` — ${t.file}: \`${r.path}\`` : ''}\n`);
    if (r.prereq) out.push(`${t.prereq}: \`${r.prereq}\`\n`);
    out.push('```' + r.lang + '\n' + r.text + '\n```');
    if (r.note) out.push(`_${r.note}_`);
    out.push('');
  }
  return out.join('\n');
}

function entryMd(e, lang) {
  const t = T[lang];
  const s = stars(e.url);
  const meta = [
    `\`${TYPES[e.type][lang]}\``,
    s !== undefined ? `★ ${k(s)}` : null,
    `${t.license1}: ${e.license ?? t.unknown}`,
    `${t.works}: ${worksWith(e, t)}`,
  ].filter(Boolean).join(' · ');
  const lines = [`### ${title(e)}`, '', `[${e.name}](${e.url}) — ${meta}`, '', e.description[lang], ''];
  if (e.alternatives?.length) {
    lines.push(`**${t.alternatives}:**`, '');
    for (const a of e.alternatives) {
      const as = stars(a.url);
      lines.push(`- [${a.name}](${a.url})${as !== undefined ? ` (★ ${k(as)})` : ''} — ${a.adds[lang]}`);
    }
    lines.push('');
  }
  const inst = installBlock(e, t);
  if (inst) lines.push(`<details><summary>${t.install}</summary>`, '', inst, '</details>', '');
  return lines.join('\n');
}

function categoryPage(cat, list, lang) {
  const t = T[lang];
  const up = lang === 'en' ? '../README.md' : '../../README.pt-BR.md';
  return [
    `# ${CATEGORIES[cat][lang]}`, '', `[${t.back}](${up})`, '', `> ${t.catalogNote}`, '',
    ...list.map((e) => `- [${title(e)}](#${anchor(e)}) — ${esc(e.description[lang]).slice(0, 110)}${e.description[lang].length > 110 ? '…' : ''}`),
    '',
    ...list.map((e) => `<a id="${anchor(e)}"></a>\n\n${entryMd(e, lang)}`),
  ].join('\n');
}

function readme(lang, byCat) {
  const t = T[lang];
  const featured = entries.filter((e) => e.featured).sort(rank);
  const dsh = entries.filter((e) => e.origin?.list === 'awesome-dsh-plugin');
  const dshAlts = dsh.reduce((n, e) => n + (e.alternatives?.length ?? 0), 0);
  const total = entries.length + entries.reduce((n, e) => n + (e.alternatives?.length ?? 0), 0);
  const L = [];
  L.push(`# Awesome Agent Plugins [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)`, '');
  L.push(`[${t.selfLabel}](${t.readme}) | [${t.otherLabel}](${t.other})`, '');
  L.push(`> ${t.tagline}`, '');
  L.push(`![entries](https://img.shields.io/badge/${t.entries.replace(/ /g, '%20')}-${entries.length}-blue) ![projects](https://img.shields.io/badge/projects-${total}-blue) ![clients](https://img.shields.io/badge/clients-${CLIENT_IDS.length}-green)`, '');
  L.push(t.why, '');
  L.push(`## ${t.clients}`, '');
  L.push(`| ${t.client} | ${t.mcp} | ${t.skills} | ${t.native} | ${t.instr} |`, '|---|---|---|---|---|');
  for (const id of CLIENT_IDS) {
    const c = CLIENTS[id];
    const nat = entries.filter((e) => e.native?.client === id).length;
    L.push(`| [${c.name}](${c.docs}) | ✅ | ✅ | ${nat ? `✅ ${nat}` : t.no} | \`${c.instructions}\` |`);
  }
  L.push('');
  L.push(`## ${t.quick}`, '', t.quickText, '', '```bash',
    `npx github:${REPO} search browser`,
    `npx github:${REPO} show playwright-mcp`,
    `npx github:${REPO} install playwright-mcp --client codex        # ${lang === 'en' ? 'print the command/config' : 'mostra o comando/config'}`,
    `npx github:${REPO} install anthropic-skills --client claude-code --run`,
    '```', '');
  L.push(`## ${t.featured}`, '', `| ${t.name} | ${t.typeCol} | ${t.what} | ${t.works} |`, '|---|---|---|---|');
  for (const e of featured) {
    const s = stars(e.url);
    L.push(`| [${title(e)}](${t.catDir}/${e.category}.md#${anchor(e)})${s !== undefined ? ` ★${k(s)}` : ''} | ${TYPES[e.type][lang]} | ${esc(e.description[lang])} | ${worksWith(e, t)} |`);
  }
  L.push('');
  if (collections.length) {
    L.push(`## ${t.collections}`, '', t.collectionsText, '');
    for (const c of collections) L.push(`- [${c.title[lang]}](collections/${c.id}.md) — ${c.description[lang]} (\`aap collection ${c.id} --client <id>\`)`);
    L.push('');
  }
  L.push(`## ${t.contents}`, '');
  for (const cat of Object.keys(CATEGORIES)) {
    const list = byCat.get(cat);
    if (!list?.length) continue;
    const a = list.reduce((n, e) => n + (e.alternatives?.length ?? 0), 0);
    L.push(`- [${CATEGORIES[cat][lang]}](${t.catDir}/${cat}.md) — ${list.length} ${t.entries}${a ? ` + ${a} ${t.alts}` : ''}`);
  }
  L.push('');
  if (dsh.length) L.push(`## ${t.dshTitle}`, '', t.dshText(dsh.length, dshAlts, DSH_UPSTREAM_TOTAL.toLocaleString(lang === 'en' ? 'en-US' : 'pt-BR')), '');
  L.push(`## ${t.criteria}`, '', ...t.criteriaList.map((c) => `- ${c}`), '');
  L.push(`## ${t.contributing}`, '', t.contribText, '');
  L.push(`## ${t.license}`, '', t.licenseText, '');
  return L.join('\n');
}

const collections = loadCollections().map((x) => x.collection);
const byId = new Map(entries.map((e) => [e.id, e]));

// One bilingual page per collection: what's inside and how to install it all.
function collectionPage(c) {
  const L = [`# ${c.title.en} · ${c.title.pt}`, '', `[← README](../README.md) · [← README pt-BR](../README.pt-BR.md)`, '',
    `> ${c.description.en}`, '>', `> ${c.description.pt}`, '',
    '```bash', `npx github:${REPO} collection ${c.id} --client <client-id>`, '```', '',
    `| Entry | Type | EN | PT |`, '|---|---|---|---|'];
  for (const id of c.entries) {
    const e = byId.get(id);
    L.push(`| [${title(e)}](../catalog/${e.category}.md#${anchor(e)}) | ${TYPES[e.type].en} | ${esc(e.description.en)} | ${esc(e.description.pt)} |`);
  }
  return L.join('\n') + '\n';
}

const outputs = new Map();
for (const c of collections) outputs.set(`collections/${c.id}.md`, collectionPage(c));
const byCat = Map.groupBy(entries, (e) => e.category);
for (const list of byCat.values()) list.sort(rank);
for (const lang of ['en', 'pt']) {
  outputs.set(T[lang].readme, readme(lang, byCat));
  for (const [cat, list] of byCat) outputs.set(`${T[lang].catDir}/${cat}.md`, categoryPage(cat, list, lang));
}
const catalog = {
  schema: 1,
  count: entries.length,
  clients: Object.fromEntries(CLIENT_IDS.map((id) => [id, { name: CLIENTS[id].name, docs: CLIENTS[id].docs }])),
  entries: [...entries].sort((a, b) => a.id.localeCompare(b.id)),
  collections,
};
outputs.set('catalog.json', JSON.stringify(catalog, null, 1) + '\n');

let stale = 0;
for (const [rel, content] of outputs) {
  const p = join(ROOT, rel);
  const cur = existsSync(p) ? readFileSync(p, 'utf8') : null;
  if (cur === content) continue;
  stale++;
  if (CHECK) console.error(`stale: ${rel}`);
  else { mkdirSync(join(p, '..'), { recursive: true }); writeFileSync(p, content); }
}
// Remove category/collection pages that no longer have a source.
for (const rel of [T.en.catDir, T.pt.catDir, 'collections']) {
  const dir = join(ROOT, rel);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    if (outputs.has(`${rel}/${f}`)) continue;
    stale++;
    if (CHECK) console.error(`orphan: ${rel}/${f}`);
    else rmSync(join(dir, f));
  }
}
if (CHECK && stale) { console.error(`${stale} generated file(s) out of date — run: npm run generate`); process.exit(1); }
console.log(CHECK ? 'generated files are up to date' : `generated ${outputs.size} files (${stale} changed) for ${entries.length} entries`);
