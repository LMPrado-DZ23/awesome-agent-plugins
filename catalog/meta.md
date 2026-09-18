# Registries, Lists & Plugin Managers

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Claude Code official plugin directory](#claude-plugins-official) — Anthropic-managed directory of Claude Code plugins (commands, agents, skills, hooks, MCP servers) installable …
- [skills (npx skills)](#skills-cli) — CLI that installs, updates, lists and removes Agent Skills from any Git source into 75+ agents (Claude Code, C…
- [MCP Registry](#mcp-registry) — Official community-driven registry service for MCP servers, with a public API for discovering published server…
- [dsh-market](#dsh-market) — Plugin market inside DeepSeek Harness Settings: search, one-click install/upgrade and theme switching for ever…
- [awesome-mcp-servers](#awesome-mcp-servers) — Large community list of MCP servers grouped by domain. Broader than this catalog; no per-client install data.
- [awesome-claude-code](#awesome-claude-code) — Curated resources for Claude Code: slash commands, CLAUDE.md files, hooks, workflows and tooling.
- [awesome-dsh-plugin](#awesome-dsh-plugin) — The full list of ~3,900 DeepSeek Harness plugins. This catalog imports its best entries and folds near-duplica…
- [Native skin marketplace](#dsh-dsh-skin-market) — Discovers community skins, shows previews and compatibility status, and provides verified one-click or manual …
- [Chat-based plugin discovery](#dsh-dsh-find-plugin) — Searches a curated plugin registry by keyword or category from inside the agent conversation and returns ready…
- [Curated research plugin store](#dsh-dsh-research) — Adds a Research plugins page to Settings with hand-reviewed plugins for literature search, reference managemen…
- [MCP server marketplace](#dsh-dsh-mcp-market) — Browses a curated, npm-verified catalog of MCP servers and installs them into the current profile with one cli…

<a id="claude-plugins-official"></a>

### Claude Code official plugin directory

[Claude Code official plugin directory](https://github.com/anthropics/claude-plugins-official) — `Plugin marketplace` · ★ 36k · License: Apache-2.0 · Works with: Claude Code only

Anthropic-managed directory of Claude Code plugins (commands, agents, skills, hooks, MCP servers) installable with /plugin.

<details><summary>Install</summary>

**Claude Code**

```text
/plugin install <plugin-name>@claude-plugins-official
```

</details>

<a id="skills-cli"></a>

### skills (npx skills)

[skills (npx skills)](https://github.com/vercel-labs/skills) — `Developer tool` · ★ 32k · License: MIT · Works with: —

CLI that installs, updates, lists and removes Agent Skills from any Git source into 75+ agents (Claude Code, Codex, Cursor, Gemini CLI, OpenCode…). Used by this catalog for skill installs.

<a id="mcp-registry"></a>

### MCP Registry

[MCP Registry](https://github.com/modelcontextprotocol/registry) — `Curated list / registry` · ★ 7.3k · License: see repo · Works with: —

Official community-driven registry service for MCP servers, with a public API for discovering published servers and their install metadata.

<a id="dsh-market"></a>

### dsh-market

[dsh-market](https://github.com/dsh-market/dsh-market) — `Plugin marketplace` · ★ 4.1k · License: MIT · Works with: DeepSeek Harness only

Plugin market inside DeepSeek Harness Settings: search, one-click install/upgrade and theme switching for every plugin in awesome-dsh-plugin.

**Alternatives:**

- [Relistencode/dsh-extension-hub](https://github.com/Relistencode/dsh-extension-hub) (★ 8) — Also manages skills and MCP servers alongside plugins, plus curated and GitHub-based search with npm one-click install.
- [1e0zj/dsh-plugin-mall](https://github.com/1e0zj/dsh-plugin-mall) (★ 4) — Verifies plugins via package.json manifest checks and anti-squatting protection, plus five tools for headless agent use.
- [DshMarketPlace/dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store) (★ 6) — Shows an approval gate listing each plugin's detected risk flags before installing.
- [zhu1090093659/dsh-web#packages/dsh-plugin-manager](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-plugin-manager) — Installs from npm or git with conflict reconciliation, undo, and hand-off to a fix session.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add dshmarket
```

</details>

<a id="awesome-mcp-servers"></a>

### awesome-mcp-servers

[awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) — `Curated list / registry` · ★ 95k · License: MIT · Works with: —

Large community list of MCP servers grouped by domain. Broader than this catalog; no per-client install data.

<a id="awesome-claude-code"></a>

### awesome-claude-code

[awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — `Curated list / registry` · ★ 54k · License: see repo · Works with: —

Curated resources for Claude Code: slash commands, CLAUDE.md files, hooks, workflows and tooling.

<a id="awesome-dsh-plugin"></a>

### awesome-dsh-plugin

[awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) — `Curated list / registry` · ★ 16k · License: CC0-1.0 · Works with: —

The full list of ~3,900 DeepSeek Harness plugins. This catalog imports its best entries and folds near-duplicates; browse the original for everything else.

<a id="dsh-dsh-skin-market"></a>

### Native skin marketplace

[kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) — `Native plugin` · ★ 150 · License: MIT · Works with: DeepSeek Harness only

Discovers community skins, shows previews and compatibility status, and provides verified one-click or manual installation paths.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:kingOfSoySauce/dsh-skin-market
```

</details>

<a id="dsh-dsh-find-plugin"></a>

### Chat-based plugin discovery

[awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) — `Native plugin` · ★ 139 · License: MIT · Works with: DeepSeek Harness only

Searches a curated plugin registry by keyword or category from inside the agent conversation and returns ready-to-run install commands, without opening the Settings UI.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:awesome-dsh-plugin/dsh-find-plugin
```

</details>

<a id="dsh-dsh-research"></a>

### Curated research plugin store

[dsh-research/dsh-research](https://github.com/dsh-research/dsh-research) — `Native plugin` · ★ 5 · License: MIT · Works with: DeepSeek Harness only

Adds a Research plugins page to Settings with hand-reviewed plugins for literature search, reference management, writing, and workbenches; installs pinned versions with one click and makes exactly one network request to its own catalog.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dsh-research/dsh-research
```

</details>

<a id="dsh-dsh-mcp-market"></a>

### MCP server marketplace

[LKMeng2001/dsh-mcp-market](https://github.com/LKMeng2001/dsh-mcp-market) — `Native plugin` · ★ 1 · License: MIT · Works with: DeepSeek Harness only

Browses a curated, npm-verified catalog of MCP servers and installs them into the current profile with one click, live, without restarting.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:LKMeng2001/dsh-mcp-market
```

</details>
