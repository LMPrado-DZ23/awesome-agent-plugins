// Per-client install renderers. One canonical MCP spec per entry
// ({ stdio: {command,args,env}, http: {url,headers} }) becomes the exact CLI
// command or config snippet each client documents. Sources: docs/clients.md.
//
// A render returns { kind: 'cli' | 'config', lang, text, path? , note? } or null
// when the client cannot use that transport.

const q = (s) => (/^[\w@%+=:,./-]+$/.test(s) ? s : `'${s.replace(/'/g, `'\\''`)}'`);
const json = (o) => JSON.stringify(o, null, 2);
const argv = (s) => [s.command, ...(s.args ?? [])];
const envPairs = (env) => Object.entries(env ?? {});
const hdrPairs = (h) => Object.entries(h ?? {});

// Server names: most clients accept [A-Za-z0-9_-]; dsh caps at 32 chars.
export const serverName = (e) => (e.mcp?.name ?? e.id).replace(/[^A-Za-z0-9_-]/g, '-').slice(0, 32);

function mcpServersJson(e, { httpShape }) {
  const n = serverName(e);
  const s = e.mcp.stdio;
  if (s) {
    const o = { command: s.command, args: s.args ?? [] };
    if (envPairs(s.env).length) o.env = s.env;
    return { mcpServers: { [n]: o } };
  }
  return { mcpServers: { [n]: httpShape(e.mcp.http) } };
}

const withHeaders = (o, h) => (hdrPairs(h).length ? { ...o, headers: h } : o);

export const CLIENTS = {
  'claude-code': {
    name: 'Claude Code', docs: 'https://code.claude.com/docs/en/mcp', skillsAgent: 'claude-code', instructions: 'CLAUDE.md',
    mcp(e) {
      const n = serverName(e), { stdio: s, http: h } = e.mcp;
      if (s) {
        const env = envPairs(s.env).map(([k, v]) => `--env ${k}=${q(v)} `).join('');
        return { kind: 'cli', lang: 'bash', text: `claude mcp add --transport stdio ${env}${n} -- ${argv(s).map(q).join(' ')}` };
      }
      const hd = hdrPairs(h.headers).map(([k, v]) => ` --header ${q(`${k}: ${v}`)}`).join('');
      return { kind: 'cli', lang: 'bash', text: `claude mcp add --transport http ${n} ${q(h.url)}${hd}` };
    },
  },
  codex: {
    name: 'Codex CLI', docs: 'https://developers.openai.com/codex/mcp', skillsAgent: 'codex', instructions: 'AGENTS.md',
    mcp(e) {
      const n = serverName(e), { stdio: s, http: h } = e.mcp;
      if (s) {
        const env = envPairs(s.env).map(([k, v]) => `--env ${k}=${q(v)} `).join('');
        return { kind: 'cli', lang: 'bash', text: `codex mcp add ${n} ${env}-- ${argv(s).map(q).join(' ')}` };
      }
      const auth = h.headers?.Authorization;
      if (!auth) return { kind: 'cli', lang: 'bash', text: `codex mcp add ${n} --url ${q(h.url)}` };
      const envVar = (/<([A-Z0-9_]+)>/.exec(auth) ?? [])[1] ?? 'MCP_TOKEN';
      return {
        kind: 'config', lang: 'toml', path: '~/.codex/config.toml',
        text: `[mcp_servers.${n.replace(/-/g, '_')}]\nurl = "${h.url}"\nbearer_token_env_var = "${envVar}"`,
      };
    },
  },
  'gemini-cli': {
    name: 'Gemini CLI', docs: 'https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md', skillsAgent: 'gemini-cli', instructions: 'GEMINI.md',
    mcp(e) {
      const n = serverName(e), { stdio: s, http: h } = e.mcp;
      // Server args starting with "-" would be parsed as gemini's own flags,
      // so those servers get a settings.json snippet instead of the CLI form.
      if (s && (s.args ?? []).some((x) => x.startsWith('-')))
        return { kind: 'config', lang: 'json', path: '~/.gemini/settings.json (or .gemini/settings.json)', text: json(mcpServersJson(e, { httpShape: null })) };
      if (s) {
        const env = envPairs(s.env).map(([k, v]) => `-e ${k}=${q(v)} `).join('');
        return { kind: 'cli', lang: 'bash', text: `gemini mcp add ${env}${n} ${argv(s).map(q).join(' ')}` };
      }
      const hd = hdrPairs(h.headers).map(([k, v]) => ` --header ${q(`${k}: ${v}`)}`).join('');
      return { kind: 'cli', lang: 'bash', text: `gemini mcp add --transport http ${n} ${q(h.url)}${hd}` };
    },
  },
  cursor: {
    name: 'Cursor', docs: 'https://cursor.com/docs/context/mcp', skillsAgent: 'cursor', instructions: 'AGENTS.md / .cursor/rules',
    mcp: (e) => ({ kind: 'config', lang: 'json', path: '.cursor/mcp.json (or ~/.cursor/mcp.json)', text: json(mcpServersJson(e, { httpShape: (h) => withHeaders({ url: h.url }, h.headers) })) }),
  },
  vscode: {
    name: 'VS Code (Copilot)', docs: 'https://code.visualstudio.com/docs/copilot/customization/mcp-servers', skillsAgent: 'github-copilot', instructions: '.github/copilot-instructions.md',
    mcp(e) {
      const n = serverName(e), { stdio: s, http: h } = e.mcp;
      const o = s
        ? { type: 'stdio', command: s.command, args: s.args ?? [], ...(envPairs(s.env).length ? { env: s.env } : {}) }
        : withHeaders({ type: 'http', url: h.url }, h.headers);
      return { kind: 'config', lang: 'json', path: '.vscode/mcp.json', text: json({ servers: { [n]: o } }) };
    },
  },
  opencode: {
    name: 'OpenCode', docs: 'https://opencode.ai/docs/mcp-servers/', skillsAgent: 'opencode', instructions: 'AGENTS.md',
    mcp(e) {
      const n = serverName(e), { stdio: s, http: h } = e.mcp;
      const o = s
        ? { type: 'local', command: argv(s), enabled: true, ...(envPairs(s.env).length ? { environment: s.env } : {}) }
        : withHeaders({ type: 'remote', url: h.url, enabled: true }, h.headers);
      return { kind: 'config', lang: 'json', path: 'opencode.json', text: json({ $schema: 'https://opencode.ai/config.json', mcp: { [n]: o } }) };
    },
  },
  cline: {
    name: 'Cline', docs: 'https://docs.cline.bot/mcp/configuring-mcp-servers', skillsAgent: 'cline', instructions: '.clinerules',
    mcp: (e) => ({ kind: 'config', lang: 'json', path: 'cline_mcp_settings.json (Cline → MCP Servers → Configure)', text: json(mcpServersJson(e, { httpShape: (h) => withHeaders({ type: 'streamableHttp', url: h.url }, h.headers) })) }),
  },
  windsurf: {
    name: 'Windsurf', docs: 'https://docs.windsurf.com/windsurf/cascade/mcp', skillsAgent: 'windsurf', instructions: 'AGENTS.md',
    mcp: (e) => ({ kind: 'config', lang: 'json', path: '~/.codeium/windsurf/mcp_config.json', text: json(mcpServersJson(e, { httpShape: (h) => withHeaders({ serverUrl: h.url }, h.headers) })) }),
  },
  zed: {
    name: 'Zed', docs: 'https://zed.dev/docs/ai/mcp', skillsAgent: 'zed', instructions: 'AGENTS.md',
    mcp(e) {
      const n = serverName(e), { stdio: s, http: h } = e.mcp;
      const o = s
        ? { source: 'custom', command: s.command, args: s.args ?? [], ...(envPairs(s.env).length ? { env: s.env } : {}) }
        : { source: 'custom', command: 'npx', args: ['-y', 'mcp-remote', h.url, ...hdrPairs(h.headers).flatMap(([k, v]) => ['--header', `${k}:${v}`])] };
      return {
        kind: 'config', lang: 'json', path: '~/.config/zed/settings.json (or .zed/settings.json)', text: json({ context_servers: { [n]: o } }),
        ...(s ? {} : { note: 'Remote server bridged through the mcp-remote stdio proxy.' }),
      };
    },
  },
  goose: {
    name: 'Goose', docs: 'https://block.github.io/goose/docs/getting-started/using-extensions', skillsAgent: 'goose', instructions: '.goosehints',
    mcp(e) {
      const n = serverName(e), { stdio: s, http: h } = e.mcp;
      const lines = s
        ? [`    type: stdio`, `    cmd: ${s.command}`, `    args: ${JSON.stringify(s.args ?? [])}`,
          ...(envPairs(s.env).length ? ['    envs:', ...envPairs(s.env).map(([k, v]) => `      ${k}: "${v}"`)] : []), `    enabled: true`]
        : [`    type: streamable_http`, `    uri: ${h.url}`, `    enabled: true`];
      return { kind: 'config', lang: 'yaml', path: '~/.config/goose/config.yaml', text: ['extensions:', `  ${n}:`, ...lines].join('\n') };
    },
  },
  kiro: {
    name: 'Kiro', docs: 'https://kiro.dev/docs/mcp/configuration/', skillsAgent: 'kiro-cli', instructions: '.kiro/steering/',
    mcp: (e) => ({ kind: 'config', lang: 'json', path: '.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)', text: json(mcpServersJson(e, { httpShape: (h) => withHeaders({ type: 'streamable-http', url: h.url }, h.headers) })) }),
  },
  roo: {
    name: 'Roo Code', docs: 'https://docs.roocode.com/features/mcp/using-mcp-in-roo', skillsAgent: 'roo', instructions: '.roo/rules/ + AGENTS.md',
    mcp: (e) => ({ kind: 'config', lang: 'json', path: '.roo/mcp.json', text: json(mcpServersJson(e, { httpShape: (h) => withHeaders({ type: 'streamable-http', url: h.url }, h.headers) })) }),
  },
  dsh: {
    name: 'DeepSeek Harness', docs: 'https://github.com/deepseek-ai/deepseek-harness/blob/main/docs/user/guide/mcp-memory.md',
    // dsh scans the project `.agents/skills/` root; `universal` installs there.
    skillsAgent: 'universal', skillsProjectOnly: true, instructions: 'AGENTS.md',
    mcp(e) {
      const n = serverName(e), { stdio: s, http: h } = e.mcp;
      const cfg = s
        ? [`        transport: stdio`, `        command: ${s.command}`, `        args: ${JSON.stringify(s.args ?? [])}`,
          `        env: ${JSON.stringify(s.env ?? {})}`, `        cwd: !!js process.cwd()`]
        : [`        transport: streamable-http`, `        url: ${h.url}`, ...(hdrPairs(h.headers).length ? [`        headers: ${JSON.stringify(h.headers)}`] : [])];
      return {
        kind: 'config', lang: 'yaml', path: `${n}.cordis.yml  →  dsh web --patch ./${n}.cordis.yml`,
        text: ['- insert:', `    - id: mcp-${n}`, `      name: '@deepseek-ai/dsh-mcp-client'`, '      config:', `        serverName: ${n}`, ...cfg].join('\n'),
      };
    },
  },
};

export const CLIENT_IDS = Object.keys(CLIENTS);

// `npx skills add` (vercel-labs/skills) installs a skill pack into any supported agent.
export function skillInstall(e, clientId, { global = true } = {}) {
  const c = CLIENTS[clientId];
  if (!c?.skillsAgent) return null;
  const only = e.skill.skills?.length ? ` --skill ${e.skill.skills.map(q).join(' ')}` : '';
  const g = global && !c.skillsProjectOnly ? ' -g' : '';
  return { kind: 'cli', lang: 'bash', text: `npx skills add ${q(e.skill.source)}${only} -a ${c.skillsAgent}${g}` };
}

// Install instructions for an entry on one client, or null if not applicable.
export function installFor(e, clientId) {
  const c = CLIENTS[clientId];
  if (!c) return null;
  if (e.type === 'mcp-server') {
    const r = c.mcp(e);
    return r && e.mcp.prereq ? { ...r, prereq: e.mcp.prereq } : r;
  }
  if (e.type === 'skill-pack') return skillInstall(e, clientId);
  if ((e.type === 'native-plugin' || e.type === 'marketplace') && e.native.client === clientId)
    return { kind: 'cli', lang: e.native.lang ?? 'bash', text: e.native.install };
  return null;
}

// Which clients an entry works with (for the compatibility column).
export function clientsFor(e) {
  if (e.type === 'mcp-server' || e.type === 'skill-pack') return CLIENT_IDS;
  if (e.type === 'native-plugin' || e.type === 'marketplace') return [e.native.client];
  return [];
}
