#!/usr/bin/env node
// aap — search the Awesome Agent Plugins catalog and install entries on any client.
import { spawnSync } from 'node:child_process';
import { loadCatalog, loadCollectionList } from '../lib/catalog.mjs';
import { CATEGORIES, TYPES } from '../lib/taxonomy.mjs';
import { CLIENTS, CLIENT_IDS, installFor, clientsFor } from '../lib/clients.mjs';
import { search } from '../lib/search.mjs';

const HELP = `aap — Awesome Agent Plugins CLI

Usage:
  aap search <words...> [--type T] [--category C] [--client ID] [--limit N]
  aap show <id> [--pt]
  aap install <id> --client <ID> [--run]
  aap list [--category C] [--type T] [--client ID]
  aap collection [<id> --client <ID>]
  aap clients | categories | help

Install prints the exact command or config snippet for the client.
--run executes it when it is a shell command without placeholders.
Clients: ${CLIENT_IDS.join(', ')}`;

export function parse(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--') || ['run', 'pt', 'json'].includes(key)) args[key] = true;
      else { args[key] = next; i++; }
    } else args._.push(a);
  }
  return args;
}

// --run only executes commands for known installers whose every token is free of
// shell metacharacters, so catalog text can never smuggle extra shell syntax.
const RUNNABLE = [/^claude mcp add /, /^codex mcp add /, /^gemini mcp add /, /^kiro-cli mcp add /, /^npx skills add /, /^dsh plugin /];
const SAFE_TOKEN = /^[\w@%+=:,./#-]+$/;
export function unsafeToRun(text) {
  if (/[\r\n]/.test(text)) return 'multi-line commands are never run';
  if (!RUNNABLE.some((re) => re.test(text))) return 'only claude/codex/gemini/kiro-cli "mcp add", "npx skills add" and "dsh plugin" commands can be run';
  const bad = text.split(/ +/).find((t) => !SAFE_TOKEN.test(t));
  return bad ? `token ${JSON.stringify(bad)} contains characters that need shell quoting` : null;
}

const pad = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s.padEnd(n));
const row = (e) => `${pad(e.id, 30)} ${pad(TYPES[e.type].en, 16)} ${pad(e.category, 12)} ${pad(e.description.en, 70)}`;

function filter(list, a) {
  return list.filter((e) =>
    (!a.type || e.type === a.type) &&
    (!a.category || e.category === a.category) &&
    (!a.client || clientsFor(e).includes(a.client)));
}

function show(e, lang, out) {
  out(`${e.title ?? e.name}  (${e.id})`);
  out(`${e.url}`);
  out(`${TYPES[e.type][lang]} · ${CATEGORIES[e.category][lang]} · license: ${e.license ?? 'see repo'}`);
  out('');
  out(e.description[lang]);
  const c = clientsFor(e);
  out('');
  out(`Works with: ${c.length ? c.map((id) => CLIENTS[id].name).join(', ') : '— (reference, not installable)'}`);
  if (e.alternatives?.length) {
    out('');
    out('Alternatives:');
    for (const a of e.alternatives) out(`  - ${a.name} — ${a.adds[lang]}\n    ${a.url}`);
  }
  if (c.length) out(`\nInstall: aap install ${e.id} --client <${c.length > 3 ? 'client' : c.join('|')}>`);
}

export function main(argv, { out = console.log, err = console.error, exec = spawnSync } = {}) {
  const a = parse(argv);
  const [cmd, ...rest] = a._;
  const catalog = loadCatalog();
  const byId = new Map(catalog.map((e) => [e.id, e]));
  const need = (id) => {
    const e = byId.get(id);
    if (!e) {
      const hint = search(catalog, id, 3).map((x) => x.id).join(', ');
      err(`unknown id "${id}"${hint ? ` — did you mean: ${hint}?` : ''}`);
    }
    return e;
  };

  switch (cmd) {
    case 'search': {
      if (!rest.length) { err('usage: aap search <words...>'); return 2; }
      const hits = filter(search(catalog, rest.join(' '), Number(a.limit) || 20), a);
      if (a.json) out(JSON.stringify(hits, null, 1));
      else if (!hits.length) out('no matches');
      else hits.forEach((e) => out(row(e)));
      return 0;
    }
    case 'list': {
      const list = filter(catalog, a).sort((x, y) => x.category.localeCompare(y.category) || x.id.localeCompare(y.id));
      if (a.json) out(JSON.stringify(list, null, 1));
      else list.forEach((e) => out(row(e)));
      return 0;
    }
    case 'show': {
      const e = need(rest[0]);
      if (!e) return 1;
      if (a.json) out(JSON.stringify(e, null, 1));
      else show(e, a.pt ? 'pt' : 'en', out);
      return 0;
    }
    case 'install': {
      const e = need(rest[0]);
      if (!e) return 1;
      const client = a.client;
      if (!CLIENTS[client]) { err(`--client is required: ${CLIENT_IDS.join(', ')}`); return 2; }
      const r = installFor(e, client);
      if (!r) {
        err(`${e.id} is not installable on ${CLIENTS[client].name} (works with: ${clientsFor(e).map((id) => CLIENTS[id].name).join(', ') || 'none — reference entry'})`);
        return 1;
      }
      if (r.prereq) out(`# prerequisite: ${r.prereq}`);
      if (r.kind === 'config') out(`# add to ${r.path}`);
      if (r.note) out(`# ${r.note}`);
      out(r.text);
      if (!a.run) return 0;
      if (r.kind !== 'cli' || r.lang === 'text') { err('\n--run only executes shell commands; merge the snippet above into the file shown.'); return 1; }
      if (/<[A-Z0-9_ -]+>/.test(r.text)) { err('\n--run refused: fill in the <PLACEHOLDERS> first and run the command yourself.'); return 1; }
      out('');
      const res = exec(r.text, { shell: true, stdio: 'inherit' });
      return res.status ?? 1;
    }
    case 'collection': {
      const cols = loadCollectionList();
      if (!rest[0]) { cols.forEach((c) => out(`${pad(c.id, 28)} ${c.title.en} — ${c.entries.length} entries`)); return 0; }
      const c = cols.find((x) => x.id === rest[0]);
      if (!c) { err(`unknown collection "${rest[0]}" — try: ${cols.map((x) => x.id).join(', ')}`); return 1; }
      if (!CLIENTS[a.client]) { err(`--client is required: ${CLIENT_IDS.join(', ')}`); return 2; }
      out(`# ${c.title.en} on ${CLIENTS[a.client].name}`);
      for (const id of c.entries) {
        const e = byId.get(id);
        const r = e && installFor(e, a.client);
        out('');
        if (!r) { out(`# ${id}: ${e ? 'not installable on this client (reference or other-client plugin)' : 'unknown entry'}`); continue; }
        out(`# ${e.title ?? e.name}${r.kind === 'config' ? ` → add to ${r.path}` : ''}`);
        if (r.prereq) out(`# prerequisite: ${r.prereq}`);
        out(r.text);
      }
      return 0;
    }
    case 'clients':
      for (const id of CLIENT_IDS) out(`${pad(id, 14)} ${pad(CLIENTS[id].name, 20)} ${CLIENTS[id].docs}`);
      return 0;
    case 'categories':
      for (const [id, c] of Object.entries(CATEGORIES)) out(`${pad(id, 14)} ${pad(c.en, 38)} ${catalog.filter((e) => e.category === id).length}`);
      return 0;
    case undefined:
    case 'help':
    case '--help':
      out(HELP);
      return 0;
    default:
      err(`unknown command "${cmd}"\n\n${HELP}`);
      return 2;
  }
}

if (process.argv[1] && /aap(\.mjs)?$/.test(process.argv[1].replace(/\\/g, '/'))) process.exitCode = main(process.argv.slice(2));
