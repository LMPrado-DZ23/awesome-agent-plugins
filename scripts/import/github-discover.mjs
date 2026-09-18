// Broad GitHub discovery for things MCP registries don't cover: Agent Skills
// packs, Claude Code plugin marketplaces, Gemini CLI extensions, subagent and
// rule collections. Classification is by files actually present in the repo
// (SKILL.md, .claude-plugin/marketplace.json, gemini-extension.json, …),
// never by description. Needs an authenticated `gh`.
//
//   node scripts/import/github-discover.mjs   → data/cache/gh-discover.json
import { execFileSync } from 'node:child_process';
import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { loadEntries } from '../../lib/catalog.mjs';
import { repoKey } from '../../lib/repo.mjs';

const OUT = 'data/cache/gh-discover.json';
const TREES = 'data/cache/gh-trees.json';
const QUERIES = [
  'topic:agent-skills', 'topic:claude-skills', 'topic:skills-md', 'topic:claude-code-skills', 'topic:codex-skills',
  'topic:claude-code-plugin', 'topic:claude-code-plugins', 'topic:claude-code-marketplace',
  'topic:gemini-cli-extension', 'topic:gemini-cli-extensions',
  'topic:claude-code-subagents', 'topic:subagents', 'topic:claude-code-agents', 'topic:claude-code-commands', 'topic:claude-code-hooks',
  'topic:cursor-rules', 'topic:agents-md', 'topic:opencode-plugin',
  'agent skills in:name,description', 'claude skills in:name', 'claude code plugins in:name,description',
  'subagents in:name', 'SKILL.md in:readme',
].map((q) => `${q} stars:>=150 archived:false`);

const gh = (args) => JSON.parse(execFileSync('gh', args, { encoding: 'utf8', maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'pipe'] }));

function search() {
  const repos = new Map();
  for (const q of QUERIES) {
    for (let page = 1; page <= 3; page++) {
      let r;
      try { r = gh(['api', '-X', 'GET', 'search/repositories', '-f', `q=${q}`, '-f', 'sort=stars', '-f', 'per_page=100', '-f', `page=${page}`]); }
      catch (e) { console.error(`search failed: ${q} p${page}: ${String(e.stderr).slice(0, 120)}`); break; }
      for (const it of r.items) {
        const prev = repos.get(it.full_name);
        repos.set(it.full_name, {
          key: it.full_name, url: it.html_url, stars: it.stargazers_count, description: it.description ?? '',
          topics: it.topics ?? [], license: it.license?.spdx_id && it.license.spdx_id !== 'NOASSERTION' ? it.license.spdx_id : null,
          pushed_at: it.pushed_at?.slice(0, 10), default_branch: it.default_branch, fork: it.fork,
          queries: [...(prev?.queries ?? []), q.split(' stars:')[0]],
        });
      }
      if (r.items.length < 100) break;
    }
    process.stdout.write(`\rsearch: ${repos.size} repos`);
  }
  console.log();
  return [...repos.values()].filter((r) => !r.fork);
}

// What does the repo actually contain? One recursive tree listing per repo (cached).
function scan(repos) {
  const cache = existsSync(TREES) ? JSON.parse(readFileSync(TREES, 'utf8')) : {};
  let n = 0;
  for (const r of repos) {
    if (!(r.key in cache)) {
      try {
        const t = gh(['api', `repos/${r.key}/git/trees/${r.default_branch}?recursive=1`]);
        const paths = t.tree.filter((x) => x.type === 'blob').map((x) => x.path);
        cache[r.key] = {
          skills: paths.filter((p) => /(^|\/)SKILL\.md$/.test(p)).map((p) => p.split('/').slice(-2, -1)[0] ?? '').filter(Boolean),
          claudeMarketplace: paths.includes('.claude-plugin/marketplace.json'),
          claudePlugin: paths.includes('.claude-plugin/plugin.json'),
          geminiExtension: paths.includes('gemini-extension.json'),
          agents: paths.filter((p) => /(^|\/)\.claude\/agents\/[^/]+\.md$|(^|\/)agents\/[^/]+\.md$/.test(p)).length,
          commands: paths.filter((p) => /(^|\/)commands\/[^/]+\.md$/.test(p)).length,
          cursorRules: paths.filter((p) => /\.mdc$|(^|\/)\.cursorrules$/.test(p)).length,
          truncated: !!t.truncated,
        };
      } catch { cache[r.key] = null; }
      if (++n % 25 === 0) { writeFileSync(TREES, JSON.stringify(cache)); process.stdout.write(`\rscan: ${n}`); }
    }
    r.contents = cache[r.key];
  }
  writeFileSync(TREES, JSON.stringify(cache));
  console.log();
  return repos;
}

function kind(c) {
  if (!c) return null;
  if (c.claudeMarketplace) return 'claude-marketplace';
  if (c.geminiExtension) return 'gemini-extension';
  if (c.skills.length) return 'skill-pack';
  if (c.claudePlugin) return 'claude-plugin';
  if (c.agents >= 5 || c.commands >= 5) return 'agents-collection';
  if (c.cursorRules >= 5) return 'rules-collection';
  return null;
}

const listed = new Set(loadEntries().flatMap(({ entry: e }) => [e.url, ...(e.alternatives ?? []).map((a) => a.url)]).map(repoKey));
const repos = scan(search().filter((r) => !listed.has(r.key)).sort((a, b) => b.stars - a.stars).slice(0, 600));
const out = repos.map((r) => ({ ...r, kind: kind(r.contents) })).filter((r) => r.kind);
writeFileSync(OUT, JSON.stringify(out, null, 1));
const by = out.reduce((m, r) => ((m[r.kind] = (m[r.kind] ?? 0) + 1), m), {});
console.log(`wrote ${OUT}: ${out.length} classified repos`, by);
