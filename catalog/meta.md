# Registries, Lists & Plugin Managers

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Claude Code official plugin directory](#claude-plugins-official) — Anthropic-managed directory of Claude Code plugins (commands, agents, skills, hooks, MCP servers) installable …
- [skills (npx skills)](#skills-cli) — CLI that installs, updates, lists and removes Agent Skills from any Git source into 75+ agents (Claude Code, C…
- [MCP Registry](#mcp-registry) — Official community-driven registry service for MCP servers, with a public API for discovering published server…
- [dsh-market](#dsh-market) — Plugin market inside DeepSeek Harness Settings: search, one-click install/upgrade and theme switching for ever…
- [ECC agent harness optimizer](#ecc) — Performance-optimization system for coding-agent harnesses bundling skills, instincts, memory, security and re…
- [awesome-mcp-servers](#awesome-mcp-servers) — Large community list of MCP servers grouped by domain. Broader than this catalog; no per-client install data.
- [awesome-claude-code](#awesome-claude-code) — Curated resources for Claude Code: slash commands, CLAUDE.md files, hooks, workflows and tooling.
- [awesome-dsh-plugin](#awesome-dsh-plugin) — The full list of ~3,900 DeepSeek Harness plugins. This catalog imports its best entries and folds near-duplica…
- [Skill-Seekers skill generator](#skill-seekers) — Toolkit that converts documentation sites, GitHub repositories, PDFs and other sources into installable Claude…
- [Validated skill registry](#tech-leads-club-agent-skills) — Secure, validated skill registry for professional AI coding agents, extending Antigravity, Claude Code, Cursor…
- [Official community plugin mirror](#claude-plugins-community) — Read-only mirror of the official community plugin marketplace for Claude Cowork and Claude Code, maintained by…
- [Claude ecosystem discovery hub](#buildwithclaude) — Single hub for finding Claude skills, agents, commands, hooks, plugins and marketplace collections in one plac…
- [Everything Claude Code toolkit](#everything-claude-code) — Single-repo Claude Code toolkit bundling agents, commands, skills, rules and hooks for productive AI-assisted …
- [Cross-agent skill portability kit](#skillkit) — Tool and skill set that installs, translates and shares agent skills across Claude Code, Cursor, Codex, Copilo…
- [Native skin marketplace](#dsh-dsh-skin-market) — Discovers community skins, shows previews and compatibility status, and provides verified one-click or manual …
- [Chat-based plugin discovery](#dsh-dsh-find-plugin) — Searches a curated plugin registry by keyword or category from inside the agent conversation and returns ready…
- [Curated research plugin store](#dsh-dsh-research) — Adds a Research plugins page to Settings with hand-reviewed plugins for literature search, reference managemen…
- [MCP server marketplace](#dsh-dsh-mcp-market) — Browses a curated, npm-verified catalog of MCP servers and installs them into the current profile with one cli…

<a id="claude-plugins-official"></a>

### Claude Code official plugin directory

[Claude Code official plugin directory](https://github.com/anthropics/claude-plugins-official) — `Plugin marketplace` · ★ 37k · License: Apache-2.0 · Works with: Claude Code only

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

[dsh-market](https://github.com/dsh-market/dsh-market) — `Plugin marketplace` · ★ 4.3k · License: MIT · Works with: DeepSeek Harness only

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

<a id="ecc"></a>

### ECC agent harness optimizer

[affaan-m/ECC](https://github.com/affaan-m/ECC) — `Agent Skills` · ★ 264k · License: MIT · Works with: All clients

Performance-optimization system for coding-agent harnesses bundling skills, instincts, memory, security and research-first development across Claude Code, Codex, OpenCode and Cursor.

**Alternatives:**

- [ruvnet/ruflo](https://github.com/ruvnet/ruflo) (★ 73k) — Long-running multi-agent harness that deploys swarms, coordinates autonomous workflows and adds adaptive memory and vector RAG.
- [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (★ 26k) — Very large bundle of 846 skills, 198 agents and 282 commands spanning engineering, marketing, product, compliance and research.
- [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) (★ 47k) — Local, agent-first control plane over a catalog of 2,000+ skills, with its own CLI, MCP server and validation workbench.
- [wshobson/agents](https://github.com/wshobson/agents) (★ 40k) — Multi-harness plugin marketplace bundling 183 skills, 202 agents and 105 commands for Claude Code, Codex, Cursor and more.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add affaan-m/ECC -a claude-code -g
```

**Codex CLI**

```bash
npx skills add affaan-m/ECC -a codex -g
```

**Gemini CLI**

```bash
npx skills add affaan-m/ECC -a gemini-cli -g
```

**Cursor**

```bash
npx skills add affaan-m/ECC -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add affaan-m/ECC -a github-copilot -g
```

**OpenCode**

```bash
npx skills add affaan-m/ECC -a opencode -g
```

**Cline**

```bash
npx skills add affaan-m/ECC -a cline -g
```

**Windsurf**

```bash
npx skills add affaan-m/ECC -a windsurf -g
```

**Zed**

```bash
npx skills add affaan-m/ECC -a zed -g
```

**Goose**

```bash
npx skills add affaan-m/ECC -a goose -g
```

**Kiro**

```bash
npx skills add affaan-m/ECC -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add affaan-m/ECC -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add affaan-m/ECC -a universal
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

<a id="skill-seekers"></a>

### Skill-Seekers skill generator

[yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) — `Agent Skills` · ★ 15k · License: MIT · Works with: All clients

Toolkit that converts documentation sites, GitHub repositories, PDFs and other sources into installable Claude AI skills, with automatic conflict detection.

**Alternatives:**

- [mgechev/skills-best-practices](https://github.com/mgechev/skills-best-practices) (★ 2.3k) — Adds a methodology skill for writing and LLM-validating professional-grade skills.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a claude-code -g
```

**Codex CLI**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a codex -g
```

**Gemini CLI**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a gemini-cli -g
```

**Cursor**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a github-copilot -g
```

**OpenCode**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a opencode -g
```

**Cline**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a cline -g
```

**Windsurf**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a windsurf -g
```

**Zed**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a zed -g
```

**Goose**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a goose -g
```

**Kiro**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a universal
```

</details>

<a id="tech-leads-club-agent-skills"></a>

### Validated skill registry

[tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) — `Agent Skills` · ★ 6.6k · License: see repo · Works with: All clients

Secure, validated skill registry for professional AI coding agents, extending Antigravity, Claude Code, Cursor, Copilot and more.

**Alternatives:**

- [FrancyJGLisboa/agent-skills-platform](https://github.com/FrancyJGLisboa/agent-skills-platform) (★ 2.4k) — Similar idea covering the full skill lifecycle: evidence, discovery, updates, rollback and quarantine across 17 platforms.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add tech-leads-club/agent-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add tech-leads-club/agent-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add tech-leads-club/agent-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add tech-leads-club/agent-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add tech-leads-club/agent-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add tech-leads-club/agent-skills -a opencode -g
```

**Cline**

```bash
npx skills add tech-leads-club/agent-skills -a cline -g
```

**Windsurf**

```bash
npx skills add tech-leads-club/agent-skills -a windsurf -g
```

**Zed**

```bash
npx skills add tech-leads-club/agent-skills -a zed -g
```

**Goose**

```bash
npx skills add tech-leads-club/agent-skills -a goose -g
```

**Kiro**

```bash
npx skills add tech-leads-club/agent-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add tech-leads-club/agent-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add tech-leads-club/agent-skills -a universal
```

</details>

<a id="claude-plugins-community"></a>

### Official community plugin mirror

[anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) — `Agent Skills` · ★ 4.3k · License: Apache-2.0 · Works with: All clients

Read-only mirror of the official community plugin marketplace for Claude Cowork and Claude Code, maintained by Anthropic.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add anthropics/claude-plugins-community -a claude-code -g
```

**Codex CLI**

```bash
npx skills add anthropics/claude-plugins-community -a codex -g
```

**Gemini CLI**

```bash
npx skills add anthropics/claude-plugins-community -a gemini-cli -g
```

**Cursor**

```bash
npx skills add anthropics/claude-plugins-community -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add anthropics/claude-plugins-community -a github-copilot -g
```

**OpenCode**

```bash
npx skills add anthropics/claude-plugins-community -a opencode -g
```

**Cline**

```bash
npx skills add anthropics/claude-plugins-community -a cline -g
```

**Windsurf**

```bash
npx skills add anthropics/claude-plugins-community -a windsurf -g
```

**Zed**

```bash
npx skills add anthropics/claude-plugins-community -a zed -g
```

**Goose**

```bash
npx skills add anthropics/claude-plugins-community -a goose -g
```

**Kiro**

```bash
npx skills add anthropics/claude-plugins-community -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add anthropics/claude-plugins-community -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add anthropics/claude-plugins-community -a universal
```

</details>

<a id="buildwithclaude"></a>

### Claude ecosystem discovery hub

[davepoon/buildwithclaude](https://github.com/davepoon/buildwithclaude) — `Agent Skills` · ★ 3.5k · License: MIT · Works with: All clients

Single hub for finding Claude skills, agents, commands, hooks, plugins and marketplace collections in one place.

**Alternatives:**

- [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit) (★ 2.6k) — Comprehensive index claiming 135 agents, 35 skills, 42 commands, 176+ plugins, 20 hooks and more in one toolkit.
- [jeremylongshore/tons-of-skills-marketplace](https://github.com/jeremylongshore/tons-of-skills-marketplace) (★ 2.8k) — Model-agnostic skills platform with its own package manager (ccpi) and a canonical layer over 6,000+ skills.
- [composio-community/awesome-claude-plugins](https://github.com/composio-community/awesome-claude-plugins) (★ 2.0k) — Curated list of plugins that extend Claude Code with custom commands, agents, hooks and MCP servers.
- [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) (★ 25k) — Focused collection of 100+ specialized Claude Code subagents covering a wide range of development use cases.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add davepoon/buildwithclaude -a claude-code -g
```

**Codex CLI**

```bash
npx skills add davepoon/buildwithclaude -a codex -g
```

**Gemini CLI**

```bash
npx skills add davepoon/buildwithclaude -a gemini-cli -g
```

**Cursor**

```bash
npx skills add davepoon/buildwithclaude -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add davepoon/buildwithclaude -a github-copilot -g
```

**OpenCode**

```bash
npx skills add davepoon/buildwithclaude -a opencode -g
```

**Cline**

```bash
npx skills add davepoon/buildwithclaude -a cline -g
```

**Windsurf**

```bash
npx skills add davepoon/buildwithclaude -a windsurf -g
```

**Zed**

```bash
npx skills add davepoon/buildwithclaude -a zed -g
```

**Goose**

```bash
npx skills add davepoon/buildwithclaude -a goose -g
```

**Kiro**

```bash
npx skills add davepoon/buildwithclaude -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add davepoon/buildwithclaude -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add davepoon/buildwithclaude -a universal
```

</details>

<a id="everything-claude-code"></a>

### Everything Claude Code toolkit

[WorldFlowAI/everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) — `Agent Skills` · ★ 3.4k · License: see repo · Works with: All clients

Single-repo Claude Code toolkit bundling agents, commands, skills, rules and hooks for productive AI-assisted development.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add WorldFlowAI/everything-claude-code -a claude-code -g
```

**Codex CLI**

```bash
npx skills add WorldFlowAI/everything-claude-code -a codex -g
```

**Gemini CLI**

```bash
npx skills add WorldFlowAI/everything-claude-code -a gemini-cli -g
```

**Cursor**

```bash
npx skills add WorldFlowAI/everything-claude-code -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add WorldFlowAI/everything-claude-code -a github-copilot -g
```

**OpenCode**

```bash
npx skills add WorldFlowAI/everything-claude-code -a opencode -g
```

**Cline**

```bash
npx skills add WorldFlowAI/everything-claude-code -a cline -g
```

**Windsurf**

```bash
npx skills add WorldFlowAI/everything-claude-code -a windsurf -g
```

**Zed**

```bash
npx skills add WorldFlowAI/everything-claude-code -a zed -g
```

**Goose**

```bash
npx skills add WorldFlowAI/everything-claude-code -a goose -g
```

**Kiro**

```bash
npx skills add WorldFlowAI/everything-claude-code -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add WorldFlowAI/everything-claude-code -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add WorldFlowAI/everything-claude-code -a universal
```

</details>

<a id="skillkit"></a>

### Cross-agent skill portability kit

[rohitg00/skillkit](https://github.com/rohitg00/skillkit) — `Agent Skills` · ★ 1.5k · License: Apache-2.0 · Works with: All clients

Tool and skill set that installs, translates and shares agent skills across Claude Code, Cursor, Codex, Copilot and 40+ other coding agents from one source.

**Alternatives:**

- [runkids/skillshare](https://github.com/runkids/skillshare) (★ 2.7k) — Focuses on one-command syncing and team sharing of skills across CLI tools.
- [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager) (★ 4.9k) — Desktop GUI app for browsing and organizing skills across 50+ coding tools.
- [numman-ali/openskills](https://github.com/numman-ali/openskills) (★ 11k) — Lightweight universal skills loader distributed as an npm package.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add rohitg00/skillkit -a claude-code -g
```

**Codex CLI**

```bash
npx skills add rohitg00/skillkit -a codex -g
```

**Gemini CLI**

```bash
npx skills add rohitg00/skillkit -a gemini-cli -g
```

**Cursor**

```bash
npx skills add rohitg00/skillkit -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add rohitg00/skillkit -a github-copilot -g
```

**OpenCode**

```bash
npx skills add rohitg00/skillkit -a opencode -g
```

**Cline**

```bash
npx skills add rohitg00/skillkit -a cline -g
```

**Windsurf**

```bash
npx skills add rohitg00/skillkit -a windsurf -g
```

**Zed**

```bash
npx skills add rohitg00/skillkit -a zed -g
```

**Goose**

```bash
npx skills add rohitg00/skillkit -a goose -g
```

**Kiro**

```bash
npx skills add rohitg00/skillkit -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add rohitg00/skillkit -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add rohitg00/skillkit -a universal
```

</details>

<a id="dsh-dsh-skin-market"></a>

### Native skin marketplace

[kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) — `Native plugin` · ★ 153 · License: MIT · Works with: DeepSeek Harness only

Discovers community skins, shows previews and compatibility status, and provides verified one-click or manual installation paths.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:kingOfSoySauce/dsh-skin-market
```

</details>

<a id="dsh-dsh-find-plugin"></a>

### Chat-based plugin discovery

[awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) — `Native plugin` · ★ 141 · License: MIT · Works with: DeepSeek Harness only

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
