# Awesome Agent Plugins [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.md) | [Português](README.pt-BR.md)

> One catalog of **MCP servers, Agent Skills and native plugins** for AI coding agents — with the exact install command for *your* client.

![entries](https://img.shields.io/badge/entries-589-blue) ![projects](https://img.shields.io/badge/projects-945-blue) ![clients](https://img.shields.io/badge/clients-13-green)

Most lists are tied to one client. Here every entry says which agents it works with, and install instructions are generated per client from a single canonical spec, so they stay consistent. Near-duplicate plugins are folded into one entry that points to the best option and lists what each alternative adds.

## Supported clients

| Client | MCP | Skills | Native plugins | Project instructions | Install commands |
|---|---|---|---|---|---|
| [Claude Code](https://code.claude.com/docs/en/mcp) | ✅ | ✅ | ✅ 3 | `CLAUDE.md` | ✅ tested end-to-end |
| [Codex CLI](https://developers.openai.com/codex/mcp) | ✅ | ✅ | — | `AGENTS.md` | ✅ tested end-to-end |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md) | ✅ | ✅ | ✅ 3 | `GEMINI.md` | ✅ tested end-to-end |
| [Cursor](https://cursor.com/docs/context/mcp) | ✅ | ✅ | — | `AGENTS.md / .cursor/rules` | from official docs |
| [VS Code (Copilot)](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) | ✅ | ✅ | — | `.github/copilot-instructions.md` | from official docs |
| [OpenCode](https://opencode.ai/docs/mcp-servers/) | ✅ | ✅ | — | `AGENTS.md` | from official docs |
| [Cline](https://docs.cline.bot/mcp/configuring-mcp-servers) | ✅ | ✅ | — | `.clinerules` | from official docs |
| [Windsurf](https://docs.windsurf.com/windsurf/cascade/mcp) | ✅ | ✅ | — | `AGENTS.md` | from official docs |
| [Zed](https://zed.dev/docs/ai/mcp) | ✅ | ✅ | — | `AGENTS.md` | from official docs |
| [Goose](https://block.github.io/goose/docs/getting-started/using-extensions) | ✅ | ✅ | — | `.goosehints` | from official docs |
| [Kiro](https://kiro.dev/docs/mcp/configuration/) | ✅ | ✅ | — | `.kiro/steering/` | from official docs |
| [Roo Code](https://docs.roocode.com/features/mcp/using-mcp-in-roo) | ✅ | ✅ | — | `.roo/rules/ + AGENTS.md` | from official docs |
| [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness/blob/main/docs/user/guide/mcp-memory.md) | ✅ | ✅ | ✅ 221 | `AGENTS.md` | from official docs |

_“Tested end-to-end” means `npm run e2e` runs the generated MCP and skill install commands against the real CLI in a throwaway directory. Other clients follow their official documentation ([sources](docs/clients.md))._

## Quick start (CLI)

Search the catalog and get (or run) the install command for your agent:

```bash
npx github:LMPrado-DZ23/awesome-agent-plugins search browser
npx github:LMPrado-DZ23/awesome-agent-plugins show playwright-mcp
npx github:LMPrado-DZ23/awesome-agent-plugins install playwright-mcp --client codex        # print the command/config
npx github:LMPrado-DZ23/awesome-agent-plugins install anthropic-skills --client claude-code --run
```

## Featured

| Name | Type | What it does | Works with |
|---|---|---|---|
| [Superpowers](catalog/skills.md#superpowers) ★289k | Agent Skills | Skills library and development methodology: brainstorming, planning, TDD, systematic debugging, code review and subagent-driven execution. | All clients |
| [Anthropic Skills](catalog/skills.md#anthropic-skills) ★177k | Agent Skills | Reference Agent Skills from Anthropic: PDF, DOCX, XLSX and PPTX handling, skill-creator, MCP builder, frontend design, web-app testing and more. | All clients |
| [Context7](catalog/docs.md#context7) ★62k | MCP server | Up-to-date, version-specific library documentation and code examples pulled into the agent context on demand. Local alternative: `npx -y @upstash/context7-mcp`. | All clients |
| [Chrome DevTools MCP](catalog/browser.md#chrome-devtools-mcp) ★52k | MCP server | Gives agents Chrome DevTools: drive a live Chrome, inspect network and console, record performance traces and debug pages. | All clients |
| [Playwright MCP](catalog/browser.md#playwright-mcp) ★37k | MCP server | Browser automation for agents via Playwright accessibility snapshots: navigate, click, fill forms, take screenshots, without needing a vision model. | All clients |
| [Claude Code official plugin directory](catalog/meta.md#claude-plugins-official) ★36k | Plugin marketplace | Anthropic-managed directory of Claude Code plugins (commands, agents, skills, hooks, MCP servers) installable with /plugin. | Claude Code only |
| [GitHub MCP Server](catalog/git.md#github-mcp-server) ★33k | MCP server | GitHub's official server: repositories, issues, pull requests, Actions, code scanning and more. Remote endpoint shown; a Docker image (ghcr.io/github/github-mcp-server) runs it locally. | All clients |
| [skills (npx skills)](catalog/meta.md#skills-cli) ★32k | Developer tool | CLI that installs, updates, lists and removes Agent Skills from any Git source into 75+ agents (Claude Code, Codex, Cursor, Gemini CLI, OpenCode…). Used by this catalog for skill installs. | — |
| [Serena](catalog/code-intel.md#serena) ★30k | MCP server | Semantic code retrieval and editing through language servers: find symbols and references, and edit at symbol level instead of by text. | All clients |
| [Agent Skills](catalog/standards.md#agent-skills-spec) ★25k | Standard / spec | Specification for Agent Skills: a folder with a SKILL.md (name, description, instructions) plus optional scripts and resources that an agent loads on demand. | — |
| [AGENTS.md](catalog/standards.md#agents-md) ★24k | Standard / spec | Open Markdown format for project instructions to coding agents (setup, build, test, conventions). Read by Codex, Cursor, OpenCode, Zed, Windsurf, DeepSeek Harness and others. | — |
| [Model Context Protocol](catalog/standards.md#model-context-protocol) ★9.3k | Standard / spec | Specification and documentation for MCP, the open protocol every client in this list uses to connect agents to tools, data and prompts. | — |
| [MCP Registry](catalog/meta.md#mcp-registry) ★7.3k | Curated list / registry | Official community-driven registry service for MCP servers, with a public API for discovering published servers and their install metadata. | — |
| [dsh-market](catalog/meta.md#dsh-market) ★4.1k | Plugin marketplace | Plugin market inside DeepSeek Harness Settings: search, one-click install/upgrade and theme switching for every plugin in awesome-dsh-plugin. | DeepSeek Harness only |
| [DZ23 Subagents Universal MCP](catalog/workflow.md#dz23-subagents) ★0 | MCP server | Self-hosted MCP router that delegates text/code tasks to many models with automatic failover, parallel role-based subagents (architect, backend, security, QA…), consensus and mission memory shared across harnesses. Node.js 22+, no runtime dependencies. | All clients |
| [Enterprise Product Builder](catalog/skills.md#enterprise-product-builder) | Agent Skills | Skill for building web products to mature-company standards: discovery and metrics, ADRs, API/data contracts, design system, OWASP ASVS security, LGPD/GDPR privacy, WCAG 2.2 AA, i18n, SLOs, CI/CD with rollback and release review, plus templates. | All clients |
| [Super Autonomous Mission Loop](catalog/skills.md#super-autonomous-mission-loop) | Agent Skills | Skill for long engineering missions that run until objective completion criteria: bounded autonomy, on-disk checkpoints, recovery after crash or context compaction, anti-loop rules, Git discipline, three independent audits and verified release. | All clients |

## Collections

Ready-made kits for common setups — install a whole kit on one client with a single command.

- [Autonomous engineering (DZ23 stack)](collections/autonomous-engineering.md) — Multi-model subagents with shared mission memory, long-mission and product-quality skills, responsible AI-origin review, and GitHub access. (`aap collection autonomous-engineering --client <id>`)
- [DeepSeek Harness starter kit](collections/deepseek-harness-starter.md) — The plugin market, the most-used native dsh plugins (sidebar, context dashboard, agent teams, memory, auto-review) and portable MCP servers and skills that also work in dsh. (`aap collection deepseek-harness-starter --client <id>`)
- [Full-stack web development](collections/fullstack-dev.md) — Up-to-date docs, a real browser for testing, semantic code navigation, GitHub and error tracking. (`aap collection fullstack-dev --client <id>`)
- [Building your own MCP servers and skills](collections/mcp-builder.md) — The specs, an inspector to debug servers, a Python framework, and the CLI to publish/install skills. (`aap collection mcp-builder --client <id>`)
- [Research and documents](collections/research-docs.md) — Web search and scraping, converting files to Markdown, and skills for PDF/Office documents. (`aap collection research-docs --client <id>`)

## Contents

- [Standards & Specs](catalog/standards.md) — 3 entries
- [Registries, Lists & Plugin Managers](catalog/meta.md) — 18 entries + 17 alternatives folded in
- [Skills & Instructions](catalog/skills.md) — 46 entries + 49 alternatives folded in
- [Code Intelligence](catalog/code-intel.md) — 10 entries
- [Browser & Web](catalog/browser.md) — 17 entries + 22 alternatives folded in
- [Docs & Knowledge](catalog/docs.md) — 29 entries + 12 alternatives folded in
- [Memory](catalog/memory.md) — 25 entries + 18 alternatives folded in
- [Tools & Capabilities](catalog/tools.md) — 61 entries + 33 alternatives folded in
- [Development & Runtime](catalog/dev.md) — 78 entries + 24 alternatives folded in
- [Git & Code Review](catalog/git.md) — 16 entries + 11 alternatives folded in
- [Cloud, Data & Infra](catalog/cloud.md) — 40 entries + 1 alternatives folded in
- [Workflow & Agents](catalog/workflow.md) — 46 entries + 24 alternatives folded in
- [Integrations & Notifications](catalog/integrations.md) — 61 entries + 13 alternatives folded in
- [Security & Permissions](catalog/security.md) — 33 entries + 28 alternatives folded in
- [Models & Providers](catalog/models.md) — 13 entries + 18 alternatives folded in
- [Usage & Cost](catalog/usage.md) — 8 entries + 8 alternatives folded in
- [Sessions & Messages](catalog/sessions.md) — 10 entries + 7 alternatives folded in
- [Vision & Voice](catalog/multimodal.md) — 31 entries + 21 alternatives folded in
- [Remote & Mobile](catalog/remote.md) — 11 entries + 19 alternatives folded in
- [UI Enhancements](catalog/ui.md) — 20 entries + 21 alternatives folded in
- [Themes & Appearance](catalog/themes.md) — 8 entries + 6 alternatives folded in
- [Just for Fun](catalog/fun.md) — 5 entries + 4 alternatives folded in

## Where entries come from

Every import is reproducible (`scripts/import/`) and every entry passes the same validator. Importers only produce candidates; a review step groups duplicates and writes the descriptions.

| Source | Entries | How it is selected |
|---|---|---|
| Hand-curated | 44 | Official servers, specs and skill packs checked against their READMEs. |
| [MCP Registry](https://registry.modelcontextprotocol.io) | 198 | Servers from the official registry with ≥200★, whose registry namespace matches the GitHub owner (anti-impersonation); install spec taken from the registry package data. |
| GitHub discovery | 127 | Topic/keyword search, classified by files actually present (SKILL.md, plugin marketplace, Gemini extension manifest). |
| [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | 220 | Top plugins by stars and npm downloads; near-duplicates folded into alternatives. |

### DeepSeek Harness plugins

Imported from [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin): the 220 strongest of ~3,900 plugins (ranked by GitHub stars and npm downloads, archived/missing repos dropped), with 193 similar plugins folded in as alternatives. Install with `dsh plugin add`; browse the original list for everything else.

## How entries are chosen

- It works: installs as described on at least one client, and the description matches the code.
- It is maintained: archived or deleted repos are flagged by a weekly health check and removed.
- No duplicates: when several projects solve the same problem, the best one gets the entry and the others appear as *alternatives* with what they add.
- No secrets: configs only contain placeholders such as `<GITHUB_PAT>`.
- Listing is not a security review — third-party code runs with your permissions. Read the source first.

## Contributing

Anyone can contribute — no permission needed. Add one YAML file under `data/entries/` and open a PR (READMEs and catalog pages are generated; see [CONTRIBUTING.md](CONTRIBUTING.md)), pick a [good first issue](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), or ask and suggest in [Discussions](../../discussions).

## License

Catalog data: [CC0-1.0](LICENSE-DATA). Code (CLI and scripts) and the skills/instructions hosted in [`skills/`](skills) and [`instructions/`](instructions): [MIT](LICENSE). Each listed project keeps its own license.
