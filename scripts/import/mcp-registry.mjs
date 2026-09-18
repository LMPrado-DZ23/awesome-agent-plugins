// Imports candidates from the official MCP Registry (registry.modelcontextprotocol.io).
//
//   node scripts/import/mcp-registry.mjs fetch       → data/cache/mcp-registry.json (latest versions)
//   node scripts/import/mcp-registry.mjs candidates  → data/cache/mcp-candidates.json (ranked, with
//                                                       GitHub stars and a canonical `mcp` spec)
//
// Candidates are then reviewed/merged (scripts/import/MERGE_SPEC.md) and written
// with mcp-write.mjs. Registry text is untrusted data.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { repoKey } from '../../lib/repo.mjs';

const API = 'https://registry.modelcontextprotocol.io/v0/servers';
const RAW = 'data/cache/mcp-registry.json';
const OUT = 'data/cache/mcp-candidates.json';
const PLACEHOLDER_NAME = (n) => `<${n.toUpperCase().replace(/[^A-Z0-9_]/g, '_')}>`;
const SAFE_ARG = /^[\w@%+=:,./-]+$/;

async function fetchAll() {
  const latest = new Map();
  let cursor = null;
  let pages = 0;
  do {
    const url = `${API}?limit=100${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
    const body = await res.json();
    for (const { server, _meta } of body.servers) {
      const m = _meta?.['io.modelcontextprotocol.registry/official'];
      if (m?.status && m.status !== 'active') continue;
      if (m?.isLatest || !latest.has(server.name)) latest.set(server.name, server);
    }
    cursor = body.metadata?.nextCursor ?? null;
    if (++pages % 20 === 0) process.stdout.write(`\r${pages} pages, ${latest.size} servers`);
  } while (cursor);
  const list = [...latest.values()];
  writeFileSync(RAW, JSON.stringify(list));
  console.log(`\nwrote ${RAW}: ${list.length} servers`);
}

// Registry package/remote → our canonical { stdio | http } spec, or null when it
// cannot be expressed safely (unknown registry type, templated args, etc.).
export function toSpec(s) {
  const env = (vars) => Object.fromEntries((vars ?? []).filter((v) => v?.name && /^[A-Z][A-Z0-9_]*$/.test(v.name) && (v.isRequired || v.isSecret))
    .map((v) => [v.name, PLACEHOLDER_NAME(v.name)]));
  const remote = (s.remotes ?? []).find((r) => r.type === 'streamable-http' && /^https:\/\/[A-Za-z0-9._~:/?#@!+,=%-]+$/.test(r.url ?? '') && !/[{}]/.test(r.url));
  const headers = remote ? Object.fromEntries((remote.headers ?? []).filter((h) => h?.name && /^[A-Za-z0-9-]+$/.test(h.name) && (h.isRequired || h.isSecret))
    .map((h) => [h.name, h.name.toLowerCase() === 'authorization' ? 'Bearer <API_TOKEN>' : PLACEHOLDER_NAME(h.name)])) : {};
  const http = remote ? { url: remote.url, ...(Object.keys(headers).length ? { headers } : {}) } : null;

  let stdio = null;
  for (const p of s.packages ?? []) {
    if (p.transport?.type && p.transport.type !== 'stdio') continue;
    const id = p.identifier;
    if (!id || !SAFE_ARG.test(id)) continue;
    const extra = (p.packageArguments ?? []).filter((a) => a.type === 'positional' && a.isRequired).map((a) => PLACEHOLDER_NAME(a.valueHint ?? a.name ?? 'ARG'));
    if (p.registryType === 'npm') stdio = { command: 'npx', args: ['-y', id, ...extra] };
    else if (p.registryType === 'pypi') stdio = { command: 'uvx', args: [id, ...extra] };
    else if (p.registryType === 'oci') stdio = { command: 'docker', args: ['run', '-i', '--rm', ...Object.keys(env(p.environmentVariables)).flatMap((k) => ['-e', k]), id, ...extra] };
    else continue;
    const e = env(p.environmentVariables);
    if (Object.keys(e).length) stdio.env = e;
    break;
  }
  if (!stdio && !http) return null;
  // Both may be present; renderers prefer stdio and fall back to http.
  return { ...(stdio ? { stdio } : {}), ...(http ? { http } : {}) };
}

// Cached in data/cache/mcp-stars.json so an interrupted run resumes.
const STARS = 'data/cache/mcp-stars.json';
function stars(all) {
  const out = existsSync(STARS) ? JSON.parse(readFileSync(STARS, 'utf8')) : {};
  const keys = all.filter((k) => !(k in out));
  for (let i = 0; i < keys.length; i += 60) {
    const batch = keys.slice(i, i + 60);
    const q = batch.map((k, j) => {
      const [o, n] = k.split('/');
      return `r${j}: repository(owner: ${JSON.stringify(o)}, name: ${JSON.stringify(n)}) { stargazerCount isArchived pushedAt licenseInfo { spdxId } }`;
    }).join('\n');
    let raw;
    try { raw = execFileSync('gh', ['api', 'graphql', '-f', `query=query { ${q} }`], { encoding: 'utf8', maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'pipe'] }); }
    catch (e) { raw = e.stdout; if (!raw) throw e; }
    const { data } = JSON.parse(raw);
    batch.forEach((k, j) => { out[k] = data?.[`r${j}`] ?? null; });
    writeFileSync(STARS, JSON.stringify(out));
    process.stdout.write(`\rstars ${Math.min(i + 60, keys.length)}/${keys.length}`);
  }
  console.log();
  return out;
}

// The registry verifies the *namespace* (io.github.<user>/ via GitHub auth,
// reverse-DNS names via DNS) but not the `repository` link, so anyone can point
// an entry at a famous repo. Trust an entry only when its io.github namespace is
// the repository owner, or a distinctive label of its reverse-DNS namespace
// matches the repository owner or name.
export function trust(s, key) {
  const owner = key.split('/')[0].toLowerCase();
  const ns = s.name.split('/')[0].toLowerCase();
  if (ns.startsWith('io.github.')) return ns.slice('io.github.'.length) === owner ? 'github-namespace' : null;
  // A verified domain proves who published the entry, not who owns the repo:
  // require a distinctive domain label to match the repo owner or name.
  const flat = (x) => x.toLowerCase().replace(/[^a-z0-9]/g, '');
  const repo = flat(key.split('/')[1]);
  const GENERIC = new Set(['com', 'org', 'net', 'io', 'ai', 'app', 'dev', 'www', 'mcp', 'api', 'co', 'cloud', 'tech', 'run']);
  const labels = ns.split('.').map(flat).filter((l) => l.length > 2 && !GENERIC.has(l));
  return labels.some((l) => flat(owner).includes(l) || repo.includes(l) || (repo.length > 3 && l.includes(repo))) ? 'domain-namespace' : null;
}

function candidates() {
  const list = JSON.parse(readFileSync(RAW, 'utf8'));
  const byRepo = new Map();
  let untrusted = 0;
  for (const s of list) {
    const key = repoKey(s.repository?.url ?? '');
    const spec = toSpec(s);
    if (!key || !spec) continue;
    if (!trust(s, key)) { untrusted++; continue; }
    // One candidate per repository: prefer a spec with stdio + remote, then the shortest name.
    const prev = byRepo.get(key);
    if (!prev || (!prev.spec.stdio && spec.stdio)) byRepo.set(key, { key, server: s, spec });
  }
  const st = stars([...byRepo.keys()]);
  const out = [...byRepo.values()]
    .map(({ key, server: s, spec }) => ({ key, g: st[key], s, spec }))
    .filter((x) => x.g && !x.g.isArchived && x.g.stargazerCount >= 50)
    .sort((a, b) => b.g.stargazerCount - a.g.stargazerCount)
    .map(({ key, g, s, spec }) => ({
      url: s.repository.subfolder ? `https://github.com/${key}/tree/main/${s.repository.subfolder}` : `https://github.com/${key}`,
      registry_name: s.name, trust: trust(s, key), title: s.title ?? null, description: s.description ?? '', website: s.websiteUrl ?? null,
      stars: g.stargazerCount, pushed_at: g.pushedAt?.slice(0, 10), license: g.licenseInfo?.spdxId && g.licenseInfo.spdxId !== 'NOASSERTION' ? g.licenseInfo.spdxId : null,
      mcp: spec,
    }));
  writeFileSync(OUT, JSON.stringify(out, null, 1));
  console.log(`wrote ${OUT}: ${out.length} candidates (≥50★, active, installable, namespace-verified); ${untrusted} registry entries skipped for namespace/repository mismatch`);
}

const cmd = process.argv[2];
if (cmd === 'fetch') await fetchAll();
else if (cmd === 'candidates') candidates();
else if (process.argv[1]?.endsWith('mcp-registry.mjs')) console.log('usage: mcp-registry.mjs fetch|candidates');
