// Fetches fresh GitHub metadata (stars, last push, archived, license) for every
// plugin listed upstream in awesome-dsh-plugin. Requires an authenticated `gh`.
// Output: data/cache/dsh-meta.json  (keyed by "owner/repo")
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';
import { repoKey } from '../../lib/repo.mjs';

const UPSTREAM = process.env.DSH_UPSTREAM_DIR || 'data/cache/dsh-upstream';
const OUT = 'data/cache/dsh-meta.json';
const BATCH = 60;


function query(keys) {
  const parts = keys.map((k, i) => {
    const [owner, name] = k.split('/');
    return `r${i}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) {
      nameWithOwner stargazerCount pushedAt isArchived isFork isDisabled
      licenseInfo { spdxId } }`;
  });
  return `query { ${parts.join('\n')} }`;
}

function run(keys) {
  let out;
  try {
    out = execFileSync('gh', ['api', 'graphql', '-f', `query=${query(keys)}`], {
      encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'],
    });
  } catch (e) {
    // GraphQL returns partial data + errors for missing repos; gh exits non-zero.
    out = e.stdout;
    if (!out) throw e;
  }
  const { data } = JSON.parse(out);
  const res = {};
  keys.forEach((k, i) => {
    const r = data?.[`r${i}`];
    res[k] = r
      ? {
          stars: r.stargazerCount,
          pushedAt: r.pushedAt,
          archived: r.isArchived || r.isDisabled,
          fork: r.isFork,
          license: r.licenseInfo?.spdxId ?? null,
        }
      : { missing: true };
  });
  return res;
}

const files = readdirSync(join(UPSTREAM, 'plugins')).filter((f) => f.endsWith('.yml'));
const keys = [...new Set(files.map((f) => repoKey(yaml.load(readFileSync(join(UPSTREAM, 'plugins', f), 'utf8')).url)).filter(Boolean))];
const meta = existsSync(OUT) && process.argv.includes('--resume') ? JSON.parse(readFileSync(OUT, 'utf8')) : {};
const todo = keys.filter((k) => !meta[k]);
console.log(`${keys.length} repos, ${todo.length} to fetch`);
for (let i = 0; i < todo.length; i += BATCH) {
  Object.assign(meta, run(todo.slice(i, i + BATCH)));
  writeFileSync(OUT, JSON.stringify(meta, null, 1));
  process.stdout.write(`\r${Math.min(i + BATCH, todo.length)}/${todo.length}`);
}
console.log(`\nwrote ${OUT}`);
