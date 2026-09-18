# Client reference

How each supported client installs MCP servers and Agent Skills. The renderers in
[`lib/clients.mjs`](../lib/clients.mjs) follow these official documents (checked 2026-09-18).
Clients change fast — if a command drifts, fix the renderer, add a test and link the doc in the PR.

Skills are installed with [`npx skills`](https://github.com/vercel-labs/skills), which knows each
client's skills directory (`-a <agent>`, `-g` for user scope).

| Client | Add a stdio MCP server | Remote (HTTP) | Config file | Skills (user · project) | Instructions | Confidence |
|---|---|---|---|---|---|---|
| [Claude Code](https://code.claude.com/docs/en/mcp) | `claude mcp add --transport stdio [--env K=V] <name> -- <cmd> [args]` | `claude mcp add --transport http <name> <url> [--header …]` | `.mcp.json` · `~/.claude.json` | `~/.claude/skills` · `.claude/skills` | `CLAUDE.md` | high |
| [Codex CLI](https://developers.openai.com/codex/mcp) | `codex mcp add <name> [--env K=V] -- <cmd> [args]` | `codex mcp add <name> --url <url>`; tokens via `bearer_token_env_var` | `~/.codex/config.toml` (`[mcp_servers.<name>]`) | `~/.agents/skills` · `.agents/skills` | `AGENTS.md` | high |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md) | `gemini mcp add [-e K=V] <name> <cmd> [args]` | `gemini mcp add --transport http <name> <url>` | `~/.gemini/settings.json` · `.gemini/settings.json` | `~/.gemini/skills` · `.gemini/skills` (`.agents/skills` alias) | `GEMINI.md` | high |
| [Cursor](https://cursor.com/docs/context/mcp) | config only | config only (`url`, `headers`) | `.cursor/mcp.json` · `~/.cursor/mcp.json` | `~/.cursor/skills` · `.cursor/skills` | `AGENTS.md`, `.cursor/rules/` | high |
| [VS Code (Copilot)](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) | Command Palette → *MCP: Add Server*, or config | config (`type: http`) | `.vscode/mcp.json` (`servers`) | `~/.copilot/skills` · `.github/skills` | `.github/copilot-instructions.md` | medium |
| [OpenCode](https://opencode.ai/docs/mcp-servers/) | `opencode mcp add` (interactive) or config | config (`type: remote`) | `opencode.json` (`mcp`, `type: local`, `command: [...]`) | `~/.config/opencode/skills` · `.opencode/skills` | `AGENTS.md` | medium |
| [Cline](https://docs.cline.bot/mcp/configuring-mcp-servers) | config only (MCP Servers panel) | config (`type: streamableHttp`) | `cline_mcp_settings.json` | `~/.cline/skills` · `.cline/skills` | `.clinerules` | medium |
| [Windsurf](https://docs.windsurf.com/windsurf/cascade/mcp) | config only | config (`serverUrl`) | `~/.codeium/windsurf/mcp_config.json` | `~/.codeium/windsurf/skills` · `.windsurf/skills` | `AGENTS.md` | medium |
| [Zed](https://zed.dev/docs/ai/mcp) | config only (`context_servers`) | via `mcp-remote` stdio proxy | `~/.config/zed/settings.json` · `.zed/settings.json` | `~/.agents/skills` · `.agents/skills` | `AGENTS.md` | medium |
| [Goose](https://block.github.io/goose/docs/getting-started/using-extensions) | `goose configure` or config | config (`type: streamable_http`, `uri`) | `~/.config/goose/config.yaml` (`extensions`) | `~/.config/goose/skills` · `.goose/skills` | `.goosehints` | medium |
| [Kiro](https://kiro.dev/docs/mcp/configuration/) | `kiro-cli mcp add --name … --command …` or config | config (`type: streamable-http`) | `.kiro/settings/mcp.json` · `~/.kiro/settings/mcp.json` | `~/.kiro/skills` · `.kiro/skills` | `.kiro/steering/` | medium |
| [Roo Code](https://docs.roocode.com/features/mcp/using-mcp-in-roo) | config only | config (`type: streamable-http`) | `.roo/mcp.json` · global `mcp_settings.json` | `~/.roo/skills` · `.roo/skills` | `.roo/rules/`, `AGENTS.md` | medium |
| [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness/blob/main/docs/user/guide/mcp-memory.md) | Cordis patch inserting `@deepseek-ai/dsh-mcp-client`, then `dsh web --patch <file>.cordis.yml` | same, `transport: streamable-http` | any `*.cordis.yml` | `~/.agents` · `.agents/skills` (`npx skills -a universal`) | `AGENTS.md` | high (source) |

Native plugins: Claude Code uses `/plugin install <name>@<marketplace>`; DeepSeek Harness uses
`dsh plugin --profile web add github:<owner>/<repo>` (or an npm name / release tarball).
