// End-to-end check: runs the install commands this catalog generates against the
// real CLIs, each inside a throwaway directory (project scope / temporary
// CODEX_HOME), and asserts the resulting config. Never touches user config.
//
//   npm run e2e            # clients found on PATH or runnable via npx
//
// Needs network (npx). Not part of `npm test`.
import { execSync, execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { installFor } from '../lib/clients.mjs';

const stdio = { id: 'e2e-memory', type: 'mcp-server', mcp: { name: 'e2e-memory', stdio: { command: 'npx', args: ['-y', '@modelcontextprotocol/server-memory'], env: { E2E_KEY: 'x' } } } };
// Use a neutral HTTPS URL: real hosted MCP endpoints may trigger OAuth during
// `codex mcp add`, which would make this non-interactive check hang.
const http = { id: 'e2e-http', type: 'mcp-server', mcp: { name: 'e2e-http', http: { url: 'https://example.com/mcp' } } };
const skill = { id: 'e2e-skill', type: 'skill-pack', skill: { source: 'anthropics/skills', skills: ['pdf'] } };

// Project-scoped variants of the generated commands (same syntax, isolated target).
const CASES = {
  'claude-code': {
    run: (cmd) => cmd.replace(/^claude mcp add/, 'npx -y @anthropic-ai/claude-code mcp add --scope project'),
    read: (dir) => JSON.parse(readFileSync(join(dir, '.mcp.json'), 'utf8')).mcpServers,
  },
  codex: {
    run: (cmd) => cmd.replace(/^codex mcp add/, 'npx -y @openai/codex mcp add'),
    env: (dir) => ({ CODEX_HOME: dir }),
    read: (dir) => readFileSync(join(dir, 'config.toml'), 'utf8'),
  },
  'gemini-cli': {
    run: (cmd) => cmd.replace(/^gemini mcp add/, 'gemini mcp add -s project'),
    read: (dir) => JSON.parse(readFileSync(join(dir, '.gemini', 'settings.json'), 'utf8')).mcpServers,
  },
};

// The env value placeholder must be concrete for the CLI to accept it.
const concrete = (s) => s.replace(/'?<([A-Z0-9_]+)>'?/g, 'x');
const commandExists = (name) => {
  try { execFileSync('which', [name], { stdio: 'ignore' }); return true; } catch { return false; }
};
let failed = 0;

for (const [client, c] of Object.entries(CASES)) {
  // Codex refuses to create helper binaries under /tmp. Keep all e2e state in
  // the checkout instead, then remove it in finally just like the /tmp case.
  const parent = client === 'codex' ? process.cwd() : tmpdir();
  const dir = mkdtempSync(join(parent, `.aap-e2e-${client}-`));
  try {
    if (client === 'gemini-cli' && !commandExists('gemini')) {
      console.log('⊘ gemini-cli: skipped (gemini executable not installed)');
      continue;
    }
    for (const e of [stdio, http]) {
      execSync(c.run(concrete(installFor(e, client).text)), {
        cwd: dir, stdio: 'pipe', timeout: 240_000, env: { ...process.env, ...(c.env?.(dir) ?? {}) },
      });
    }
    const cfg = JSON.stringify(c.read(dir));
    for (const n of ['e2e-memory', 'e2e-http'])
      if (!cfg.includes(n)) throw new Error(`${n} missing from config: ${cfg.slice(0, 300)}`);
    console.log(`✓ ${client}: stdio + http servers registered`);
  } catch (err) {
    failed++;
    console.error(`✗ ${client}: ${String(err.stderr ?? err.message).trim().split('\n').slice(-3).join(' | ')}`);
  } finally {
    try { rmSync(dir, { recursive: true, force: true }); } catch { // Windows may keep a lock (codex helpers); the OS temp dir is cleaned later.
    }
  }
}

const sdir = mkdtempSync(join(tmpdir(), 'aap-e2e-skills-'));
try {
  for (const client of ['claude-code', 'dsh']) {
    // Project scope (drop -g) and non-interactive (-y) so it lands in the temp dir.
    const cmd = installFor(skill, client).text.replace(/ -g$/, '') + ' -y';
    execSync(cmd, { cwd: sdir, stdio: 'pipe', timeout: 240_000 });
  }
  for (const p of ['.claude/skills/pdf/SKILL.md', '.agents/skills/pdf/SKILL.md'])
    if (!existsSync(join(sdir, p))) throw new Error(`${p} not created`);
  console.log('✓ skills: claude-code (.claude/skills) and dsh/universal (.agents/skills)');
} catch (err) {
  failed++;
  console.error(`✗ skills: ${String(err.stderr ?? err.message).trim().split('\n').slice(-3).join(' | ')}`);
} finally {
  try { rmSync(sdir, { recursive: true, force: true }); } catch { // same as above
  }
}

process.exit(failed ? 1 : 0);
