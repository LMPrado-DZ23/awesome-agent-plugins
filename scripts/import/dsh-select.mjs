// Selects the best DeepSeek Harness plugins from awesome-dsh-plugin and folds
// near-duplicates into one entry with alternatives.
//
//   1. Rank: log(stars) + 0.6·log(npm downloads), minus penalties
//      (no licence, archived/missing repos are dropped).
//   2. Cluster within a category: TF-IDF cosine over the English description
//      and repo name; a plugin joins the best-ranked leader it resembles.
//   3. Keep the top leaders per category (QUOTA) with up to MAX_ALTS members.
//
// Output: data/cache/dsh-groups.json — consumed by dsh-write.mjs, which writes
// data/entries/dsh/*.yml once merged descriptions exist.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const fs_mkdir = (d) => mkdirSync(d, { recursive: true });
import { join } from 'node:path';
import yaml from 'js-yaml';
import { repoKey } from '../../lib/repo.mjs';

const UPSTREAM = process.env.DSH_UPSTREAM_DIR || 'data/cache/dsh-upstream';
const META = JSON.parse(readFileSync('data/cache/dsh-meta.json', 'utf8'));
const DL = JSON.parse(readFileSync(join(UPSTREAM, 'downloads.json'), 'utf8'));
const SIM = Number(process.env.SIM || 0.32);
const MAX_ALTS = 4;
const MIN_STARS = 5;
const MIN_DL = 100;

// Portable/high-leverage categories get more slots than cosmetic ones.
export const QUOTA = {
  tools: 25, memory: 15, skill: 15, workflow: 15, dev: 15, security: 12, model: 12,
  session: 10, git: 10, browser: 10, ui: 20, vision: 8, usage: 8, notify: 8, remote: 8,
  theme: 8, voice: 6, docs: 6, market: 5, fun: 5, wsl: 4, identity: 3, agi: 3,
};

const STOP = new Set(('a an and the of for to in on with without by from via into as or at is are be it its this that ' +
  'dsh deepseek harness plugin plugins web ui adds add support supports using use based one each every all any ' +
  'your you can when then also more new like style native built panel view').split(' '));

const tokens = (s) =>
  (s || '').toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/[\s-]+/)
    .filter((w) => w.length > 2 && !STOP.has(w));

// Monorepo subpackages inherit the whole project's stars; cap them so a
// plugin inside a famous repo does not outrank dedicated, used plugins.
export function score(p) {
  const s = p.url.includes('/tree/') ? Math.min(p.stars, 300) : p.stars;
  const d = p.downloads;
  let v = Math.log1p(s) + 0.6 * Math.log1p(d);
  if (!p.license) v -= 0.75;
  return v;
}

export function load() {
  return readdirSync(join(UPSTREAM, 'plugins')).filter((f) => f.endsWith('.yml')).map((f) => {
    const y = yaml.load(readFileSync(join(UPSTREAM, 'plugins', f), 'utf8'));
    const key = repoKey(y.url);
    const m = META[key] || { missing: true };
    return {
      file: f, url: y.url, name: y.name, category: y.category, key,
      description: y.description?.en ?? '', tarball: y.tarball ?? null,
      stars: m.stars ?? 0, downloads: DL[y.url]?.downloads ?? 0,
      pushedAt: m.pushedAt ?? null, license: m.license && m.license !== 'NOASSERTION' ? m.license : null,
      dead: !!(m.missing || m.archived),
    };
  });
}

function vectorize(list) {
  const df = new Map();
  const docs = list.map((p) => {
    const t = [...tokens(p.description), ...tokens(p.name.split('/')[1]), ...tokens(p.name.split('/')[1])];
    new Set(t).forEach((w) => df.set(w, (df.get(w) || 0) + 1));
    return t;
  });
  const n = list.length;
  return docs.map((t) => {
    const tf = new Map();
    t.forEach((w) => tf.set(w, (tf.get(w) || 0) + 1));
    const v = new Map();
    let norm = 0;
    for (const [w, c] of tf) {
      const x = c * Math.log((n + 1) / (df.get(w) + 1));
      v.set(w, x);
      norm += x * x;
    }
    norm = Math.sqrt(norm) || 1;
    for (const [w, x] of v) v.set(w, x / norm);
    return v;
  });
}

const cos = (a, b) => {
  let s = 0;
  const [x, y] = a.size < b.size ? [a, b] : [b, a];
  for (const [w, v] of x) if (y.has(w)) s += v * y.get(w);
  return s;
};

export function select(all) {
  const out = [];
  const byCat = Map.groupBy(all.filter((p) => !p.dead), (p) => p.category);
  for (const [cat, list] of byCat) {
    list.forEach((p) => (p.score = score(p)));
    list.sort((a, b) => b.score - a.score);
    const vecs = vectorize(list);
    const groups = [];
    list.forEach((p, i) => {
      let best = null, bestSim = SIM;
      for (const g of groups) {
        const s = cos(vecs[i], vecs[g.idx]);
        if (s >= bestSim) { best = g; bestSim = s; }
      }
      if (best) best.members.push({ ...p, similarity: +bestSim.toFixed(2) });
      else groups.push({ idx: i, leader: p, members: [] });
    });
    const eligible = groups.filter((g) => g.leader.stars >= MIN_STARS || g.leader.downloads >= MIN_DL);
    for (const g of eligible.slice(0, QUOTA[cat] ?? 5)) {
      const alts = g.members
        .filter((m) => m.stars >= MIN_STARS || m.downloads >= MIN_DL)
        .slice(0, MAX_ALTS);
      out.push({ category: cat, leader: strip(g.leader), alternatives: alts.map(strip), folded: g.members.length });
    }
  }
  return out;
}

const strip = ({ file, url, name, category, description, tarball, stars, downloads, pushedAt, license, score, similarity }) =>
  ({ file, url, name, category, description, tarball, stars, downloads, pushedAt, license, score: +score.toFixed(2), similarity });

// Candidates for functional merging: top N per category, written one file per
// category so each can be reviewed/merged independently.
export function candidates(all, factor = 3) {
  const byCat = Map.groupBy(all.filter((p) => !p.dead), (p) => p.category);
  const out = {};
  for (const [cat, list] of byCat) {
    list.forEach((p) => (p.score = score(p)));
    out[cat] = list
      .filter((p) => p.stars >= MIN_STARS || p.downloads >= MIN_DL)
      .sort((a, b) => b.score - a.score)
      .slice(0, (QUOTA[cat] ?? 5) * factor)
      .map(({ url, name, stars, downloads, license, score, description, tarball }) =>
        ({ url, name, stars, downloads, license, score: +score.toFixed(2), tarball, description }));
  }
  return out;
}

if (process.argv[1]?.endsWith('dsh-select.mjs') && process.argv.includes('--candidates')) {
  const c = candidates(load());
  fs_mkdir('data/cache/dsh-candidates');
  for (const [cat, list] of Object.entries(c)) writeFileSync(`data/cache/dsh-candidates/${cat}.json`, JSON.stringify(list, null, 1));
  console.log(Object.entries(c).map(([k, v]) => `${k}:${v.length}`).join(' '));
} else if (process.argv[1]?.endsWith('dsh-select.mjs')) {
  const all = load();
  const groups = select(all);
  writeFileSync('data/cache/dsh-groups.json', JSON.stringify(groups, null, 1));
  const alts = groups.reduce((n, g) => n + g.alternatives.length, 0);
  const folded = groups.reduce((n, g) => n + g.folded, 0);
  console.log(`upstream ${all.length} · dead ${all.filter((p) => p.dead).length} · selected ${groups.length} entries · ${alts} alternatives shown · ${folded} similar plugins folded`);
}
