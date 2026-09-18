# Tools & Capabilities

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Desktop Commander](#desktop-commander) — Terminal control, long-running process management, file-system search and diff-based file editing for agents.
- [Paid API catalog for agents](#dsh-treg) — Tool catalog for agents: searches about 2,600 external endpoints (SEO/SERP, backlinks, social, people/company …
- [AI database connection and SQL](#dsh-dsh-data-agent) — Lets the agent connect to databases and write SQL queries on your behalf.
- [Backup and migrate DSH config](#dsh-dsh-config-manager) — Backs up, exports, imports, and migrates a whole DSH config: settings, plugins, MCP, skills, workspaces. Secre…
- [Manage multiple SSH workspaces](#dsh-dsh-remote-flymysql) — Manages many SSH hosts as workspaces: pick a local or remote workspace from the native Add-workspace flow, mir…
- [Deep-read books and articles](#dsh-dsh-deepread) — Deep-reads books and articles in five modes (quick, deep, knowledge map, Feynman, full book), producing claim-…
- [Accessibility-first computer use](#dsh-dsh-computer-use) — Accessibility-first macOS computer use: takes fresh observations before acting, rejects stale state, scopes pe…
- [Academic writing polish guard](#dsh-dsh-plugin-writing-guard) — Bilingual (EN/ZH) academic writing guard: removes AI-style defensive writing, protects scientific evidence (nu…
- [Hash-anchored file editing](#dsh-dsh-better-edit) — Hash-anchored read / edit / batch_edit / undo_last_edit tools: every line gets a unique 3-character content ha…
- [Blender 3D production plugin](#dsh-blender) — Blender 3D production plugin with 30 modeling/reconstruction skills, 13 runtime tools, and 26 deterministic he…
- [Cross-platform academic search](#dsh-dsh-ai4scholar) — AI4Scholar academic search: 38 tools over Semantic Scholar, PubMed, Google Scholar, arXiv, bioRxiv/medRxiv, an…
- [Two-way Codex-DSH skill sync](#dsh-dsh-codex-sync) — Two-way Codex to DSH bridge: imports skills from ~/.codex/skills, imports sessions with workspace attach, live…
- [Cross-shell terminal tool](#dsh-dsh-bash-terminal) — One shell tool covering PowerShell, Git Bash, and WSL on Windows, plus an interactive PTY terminal; the defaul…
- [Language server actions](#dsh-dsh-lsp-actions) — LSP action surface for DSH: diagnostics, formatting, completion, code actions, symbols, signature help, inlay …
- [Zotero evidence store for agents](#dsh-dsh-zotero) — Uses Zotero as an evidence store for agents: searches your library, inspects metadata and notes, retrieves evi…
- [Git-based session rewind](#dsh-dsh-checkpoint-rewind) — Claude Code style /rewind for DeepSeek Harness: takes git-first workspace snapshots before every mutating tool…
- [HarmonyOS device automation](#dsh-dsh-hdc-bridge) — HarmonyOS device bridge: an hdc screenshot/install/log/crash/UI automation loop with a read_image tool, offici…
- [One-click prompt optimizer](#dsh-oss-prompt-optimizer) — Optimizes a raw instruction into a professional prompt in one click: three output styles, situation-aware role…
- [Connect DSH to OOMOL apps](#dsh-dsh-oomol) — Connects DeepSeek Harness to OOMOL-managed apps and services, with progressive Connector Action discovery and …
- [MiniMax multimodal bridge](#dsh-dsh-mmx-bridge) — One mmx_bridge tool covering MiniMax image understanding/generation, video, TTS, music, cover art, web search,…
- [Web-novel writing engine](#dsh-dsh-tool-writing) — A web-novel writing engine for DeepSeek Harness: parallel drafting, outlining, and brainstorming with a separa…
- [Auxiliary model routing tools](#dsh-dsh-auxiliary) — Provides dedicated model routes, tools, and system guidance for vision, compaction, reviews, subagents, titles…
- [Deterministic code graph tool](#dsh-dsh-tool-lens) — Deterministic AST code graph and architecture intelligence tool for call hierarchies, blast radius, circular d…
- [Export chats as styled notes](#dsh-notes-dsh-plugin) — Exports DSH conversations as Smartisan Notes-style PNGs, or creates and updates Markdown notes in a configured…
- [Filesystem (reference)](#mcp-filesystem) — Reference server for reading, writing, searching and moving files, restricted to the directories you pass as a…
- [Hacker News feeds and search](#dsh-hn-cli-hacker-news) — Hacker News tools for feeds, discussion threads, search, and user profiles.
- [MCP server config manager](#dsh-dsh-plugin-hub-packages-dsh-mcp-manager) — MCP server manager (stdio / streamable-http) with per-project and global config tiers: project MCP collapses i…

<a id="desktop-commander"></a>

### Desktop Commander

[Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP) — `MCP server` · ★ 9.6k · License: MIT · Works with: All clients

Terminal control, long-running process management, file-system search and diff-based file editing for agents.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio desktop-commander -- npx -y @wonderwhy-er/desktop-commander@latest
```

**Codex CLI**

```bash
codex mcp add desktop-commander -- npx -y @wonderwhy-er/desktop-commander@latest
```

**Gemini CLI**

```bash
gemini mcp add desktop-commander npx -y @wonderwhy-er/desktop-commander@latest
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "desktop-commander": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "desktop-commander": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "desktop-commander": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  desktop-commander:
    type: stdio
    cmd: npx
    args: ["-y","@wonderwhy-er/desktop-commander@latest"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `desktop-commander.cordis.yml  →  dsh web --patch ./desktop-commander.cordis.yml`

```yaml
- insert:
    - id: mcp-desktop-commander
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: desktop-commander
        transport: stdio
        command: npx
        args: ["-y","@wonderwhy-er/desktop-commander@latest"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-treg"></a>

### Paid API catalog for agents

[superdesigndev/treg](https://github.com/superdesigndev/treg) — `Native plugin` · ★ 1.6k · License: see repo · Works with: DeepSeek Harness only

Tool catalog for agents: searches about 2,600 external endpoints (SEO/SERP, backlinks, social, people/company enrichment, ad libraries, scraping) by task, reads each one's parameters and price, then calls it with the credential injected server-side.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:superdesigndev/treg
```

</details>

<a id="dsh-dsh-data-agent"></a>

### AI database connection and SQL

[omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) — `Native plugin` · ★ 194 · License: MIT · Works with: DeepSeek Harness only

Lets the agent connect to databases and write SQL queries on your behalf.

**Alternatives:**

- [STARDUSTLC666/dsh-sql](https://github.com/STARDUSTLC666/dsh-sql) (★ 8) — Adds read-only protection, row caps, CSV/JSON output, and an approval-gated write path across SQLite, MySQL, and PostgreSQL

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:omdsh-dev/dsh-data-agent
```

</details>

<a id="dsh-dsh-config-manager"></a>

### Backup and migrate DSH config

[xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) — `Native plugin` · ★ 116 · License: MIT · Works with: DeepSeek Harness only

Backs up, exports, imports, and migrates a whole DSH config: settings, plugins, MCP, skills, workspaces. Secrets are excluded by default or AES-256-GCM encrypted if enabled. Imports preview first with rollback; profiles hold multiple setups; remote sync via a Git repo.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xiajiajun516/dsh-config-manager
```

</details>

<a id="dsh-dsh-remote-flymysql"></a>

### Manage multiple SSH workspaces

[flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) — `Native plugin` · ★ 85 · License: MIT · Works with: DeepSeek Harness only

Manages many SSH hosts as workspaces: pick a local or remote workspace from the native Add-workspace flow, mirror a remote workspace to a real local folder, and operate it with rw_* tools; a centered picker modal auto-fills / for remote paths with live directory completion.

**Alternatives:**

- [caoyiwei850/dsh-ssh-ops](https://github.com/caoyiwei850/dsh-ssh-ops) (★ 20) — Adds an SSH ops terminal that drives a connected server from the main conversation, with an interactive xterm.js terminal alongside it

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:flymysql/dsh-remote
```

</details>

<a id="dsh-dsh-deepread"></a>

### Deep-read books and articles

[xiehuan123/dsh-deepread](https://github.com/xiehuan123/dsh-deepread) — `Native plugin` · ★ 53 · License: MIT · Works with: DeepSeek Harness only

Deep-reads books and articles in five modes (quick, deep, knowledge map, Feynman, full book), producing claim-evidence-data reports and Mermaid/XMind mindmaps, with batch comparison, budget preflight, background-job progress, and MD/HTML export from URLs, files, or pasted text.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xiehuan123/dsh-deepread
```

</details>

<a id="dsh-dsh-computer-use"></a>

### Accessibility-first computer use

[Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) — `Native plugin` · ★ 46 · License: MIT · Works with: DeepSeek Harness only

Accessibility-first macOS computer use: takes fresh observations before acting, rejects stale state, scopes permissions, and enforces safe input.

**Alternatives:**

- [mrpulor-gh/dsh-nuphus-mcp](https://github.com/mrpulor-gh/dsh-nuphus-mcp) (★ 4) — Covers desktop and browser automation (38 tools) with PaddleOCR element perception and Chrome CDP browsing, not limited to macOS

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Anionex/dsh-computer-use
```

</details>

<a id="dsh-dsh-plugin-writing-guard"></a>

### Academic writing polish guard

[xmutfyh/dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) — `Native plugin` · ★ 40 · License: MIT · Works with: DeepSeek Harness only

Bilingual (EN/ZH) academic writing guard: removes AI-style defensive writing, protects scientific evidence (numbers, citations, claim strength, scope) while polishing, and calibrates toward a target journal profile. Deterministic local regex, no network or LLM, with auto-audit.

**Alternatives:**

- [863683348/dsh-plugin-academic-writing](https://github.com/863683348/dsh-plugin-academic-writing) (★ 2) — Adds paper outline, title, and abstract skeleton generation, multi-style citation formatting, and a pre-submission checklist

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xmutfyh/dsh-plugin-writing-guard
```

</details>

<a id="dsh-dsh-better-edit"></a>

### Hash-anchored file editing

[Rianico/dsh-better-edit](https://github.com/Rianico/dsh-better-edit) — `Native plugin` · ★ 33 · License: MIT · Works with: DeepSeek Harness only

Hash-anchored read / edit / batch_edit / undo_last_edit tools: every line gets a unique 3-character content hash, edits target hashes instead of line numbers, and served-state verification rejects stale ranges with fresh anchors.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Rianico/dsh-better-edit
```

</details>

<a id="dsh-blender"></a>

### Blender 3D production plugin

[CheshireJCat/blender](https://github.com/CheshireJCat/blender) — `Native plugin` · ★ 31 · License: MIT · Works with: DeepSeek Harness only

Blender 3D production plugin with 30 modeling/reconstruction skills, 13 runtime tools, and 26 deterministic helpers for reference fitting, rendering, validation, animation, and portable export; installable as dsh-blender.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:CheshireJCat/blender
```

</details>

<a id="dsh-dsh-ai4scholar"></a>

### Cross-platform academic search

[literaf/dsh-ai4scholar](https://github.com/literaf/dsh-ai4scholar) — `Native plugin` · ★ 26 · License: MIT · Works with: DeepSeek Harness only

AI4Scholar academic search: 38 tools over Semantic Scholar, PubMed, Google Scholar, arXiv, bioRxiv/medRxiv, and DOI resolution, covering search, citation graphs, recommendations, sliced PDF text, auto-cite, and figures, with de-duplicated search and per-call credit accounting.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:literaf/dsh-ai4scholar
```

</details>

<a id="dsh-dsh-codex-sync"></a>

### Two-way Codex-DSH skill sync

[Walvez/dsh-codex-sync](https://github.com/Walvez/dsh-codex-sync) — `Native plugin` · ★ 26 · License: MIT · Works with: DeepSeek Harness only

Two-way Codex to DSH bridge: imports skills from ~/.codex/skills, imports sessions with workspace attach, live-mirrors MCP servers (mcp_servers), and installs a Codex-side reverse MCP installer for the other direction.

**Alternatives:**

- [STARDUSTLC666/dsh-codex-port](https://github.com/STARDUSTLC666/dsh-codex-port) (★ 9) — Batch-ports official Codex plugins into DSH skills once (186 plugins, 583 skills, 577 succeeded) instead of live sync

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Walvez/dsh-codex-sync
```

</details>

<a id="dsh-dsh-bash-terminal"></a>

### Cross-shell terminal tool

[MAXeaglet/dsh-bash-terminal](https://github.com/MAXeaglet/dsh-bash-terminal) — `Native plugin` · ★ 20 · License: MIT · Works with: DeepSeek Harness only

One shell tool covering PowerShell, Git Bash, and WSL on Windows, plus an interactive PTY terminal; the default terminal is chosen in DSH settings.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MAXeaglet/dsh-bash-terminal
```

</details>

<a id="dsh-dsh-lsp-actions"></a>

### Language server actions

[PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) — `Native plugin` · ★ 20 · License: Apache-2.0 · Works with: DeepSeek Harness only

LSP action surface for DSH: diagnostics, formatting, completion, code actions, symbols, signature help, inlay hints, and rename, all backed by real language servers.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-lsp-actions
```

</details>

<a id="dsh-dsh-zotero"></a>

### Zotero evidence store for agents

[Vncntvx/dsh-zotero](https://github.com/Vncntvx/dsh-zotero) — `Native plugin` · ★ 20 · License: MIT · Works with: DeepSeek Harness only

Uses Zotero as an evidence store for agents: searches your library, inspects metadata and notes, retrieves evidence passages, opens source PDFs, and generates citations and bibliographies.

**Alternatives:**

- [STARDUSTLC666/dsh-cite](https://github.com/STARDUSTLC666/dsh-cite) (★ 2) — Works without a Zotero library: exact DOI lookup, Crossref search, multi-style citation formatting, BibTeX generation, and DOI validation

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Vncntvx/dsh-zotero
```

</details>

<a id="dsh-dsh-checkpoint-rewind"></a>

### Git-based session rewind

[PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) — `Native plugin` · ★ 18 · License: Apache-2.0 · Works with: DeepSeek Harness only

Claude Code style /rewind for DeepSeek Harness: takes git-first workspace snapshots before every mutating tool execution, forks the session at each turn boundary, and restores files while forking the session back to a chosen checkpoint with one command.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-checkpoint-rewind
```

</details>

<a id="dsh-dsh-hdc-bridge"></a>

### HarmonyOS device automation

[1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) — `Native plugin` · ★ 18 · License: MIT · Works with: DeepSeek Harness only

HarmonyOS device bridge: an hdc screenshot/install/log/crash/UI automation loop with a read_image tool, official-first versioned API knowledge (bundled SDK .d.ts and docs), and a DevEco CLI build/sign/lint lane.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:1na-ko/dsh-hdc-bridge
```

</details>

<a id="dsh-oss-prompt-optimizer"></a>

### One-click prompt optimizer

[seven282/oss-prompt-optimizer](https://github.com/seven282/oss-prompt-optimizer) — `Native plugin` · ★ 16 · License: MIT · Works with: DeepSeek Harness only

Optimizes a raw instruction into a professional prompt in one click: three output styles, situation-aware role/task/goal profiling, self-iterating learning via session memory, a /template command for 21 sub-scenes with zero model calls, and a one-click optimize/undo control.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:seven282/oss-prompt-optimizer
```

</details>

<a id="dsh-dsh-oomol"></a>

### Connect DSH to OOMOL apps

[oomol-lab/dsh-oomol](https://github.com/oomol-lab/dsh-oomol) — `Native plugin` · ★ 12 · License: MIT · Works with: DeepSeek Harness only

Connects DeepSeek Harness to OOMOL-managed apps and services, with progressive Connector Action discovery and execution plus an in-app panel for managing Provider connections.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:oomol-lab/dsh-oomol
```

</details>

<a id="dsh-dsh-mmx-bridge"></a>

### MiniMax multimodal bridge

[welsione/dsh-mmx-bridge](https://github.com/welsione/dsh-mmx-bridge) — `Native plugin` · ★ 10 · License: MIT · Works with: DeepSeek Harness only

One mmx_bridge tool covering MiniMax image understanding/generation, video, TTS, music, cover art, web search, and quota, with optional web_search/read_image takeover and inline players and image previews in the Web GUI.

**Alternatives:**

- [SPYQWER1/dsh-codex-tools](https://github.com/SPYQWER1/dsh-codex-tools) (★ 4) — Reuses your existing ChatGPT OAuth login instead of a MiniMax key, for web_search, image_gen, and image_vision tools

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:welsione/dsh-mmx-bridge
```

</details>

<a id="dsh-dsh-tool-writing"></a>

### Web-novel writing engine

[x2802490130-prog/dsh-tool-writing](https://github.com/x2802490130-prog/dsh-tool-writing) — `Native plugin` · ★ 10 · License: MIT · Works with: DeepSeek Harness only

A web-novel writing engine for DeepSeek Harness: parallel drafting, outlining, and brainstorming with a separate DeepSeek key, lore and foreshadowing management, semantic vector retrieval, a corpus library, a usage ledger, mechanical proofreading, and a local serialization plan.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:x2802490130-prog/dsh-tool-writing
```

</details>

<a id="dsh-dsh-auxiliary"></a>

### Auxiliary model routing tools

[dsh-plugins/dsh-auxiliary](https://github.com/dsh-plugins/dsh-auxiliary) — `Native plugin` · ★ 9 · License: LGPL-3.0 · Works with: DeepSeek Harness only

Provides dedicated model routes, tools, and system guidance for vision, compaction, reviews, subagents, titles, and image generation.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dsh-plugins/dsh-auxiliary
```

</details>

<a id="dsh-dsh-tool-lens"></a>

### Deterministic code graph tool

[trench-xinxin/dsh-tool-lens](https://github.com/trench-xinxin/dsh-tool-lens) — `Native plugin` · ★ 5 · License: MIT · Works with: DeepSeek Harness only

Deterministic AST code graph and architecture intelligence tool for call hierarchies, blast radius, circular dependencies, domain slices, and full-stack API contracts.

**Alternatives:**

- [wulun811/LiuHe#bundle](https://github.com/wulun811/LiuHe/tree/master/malong/dsh/bundle) — Adds a 44-tool edit surface (repo_map, symbol search, edit_batch with a transactional undo journal) on top of code graph analysis

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:trench-xinxin/dsh-tool-lens
```

</details>

<a id="dsh-notes-dsh-plugin"></a>

### Export chats as styled notes

[zhaoolee/notes#dsh-plugin](https://github.com/zhaoolee/notes/tree/main/dsh-plugin) — `Native plugin` · License: Apache-2.0 · Works with: DeepSeek Harness only

Exports DSH conversations as Smartisan Notes-style PNGs, or creates and updates Markdown notes in a configured account-scoped workspace.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:zhaoolee/notes#path:/dsh-plugin
```

</details>

<a id="mcp-filesystem"></a>

### Filesystem (reference)

[Filesystem (reference)](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) — `MCP server` · License: see repo · Works with: All clients

Reference server for reading, writing, searching and moving files, restricted to the directories you pass as arguments.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio filesystem -- npx -y @modelcontextprotocol/server-filesystem '<ALLOWED_DIR>'
```

**Codex CLI**

```bash
codex mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem '<ALLOWED_DIR>'
```

**Gemini CLI**

```bash
gemini mcp add filesystem npx -y @modelcontextprotocol/server-filesystem '<ALLOWED_DIR>'
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "filesystem": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "filesystem": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "filesystem": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  filesystem:
    type: stdio
    cmd: npx
    args: ["-y","@modelcontextprotocol/server-filesystem","<ALLOWED_DIR>"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `filesystem.cordis.yml  →  dsh web --patch ./filesystem.cordis.yml`

```yaml
- insert:
    - id: mcp-filesystem
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: filesystem
        transport: stdio
        command: npx
        args: ["-y","@modelcontextprotocol/server-filesystem","<ALLOWED_DIR>"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-hn-cli-hacker-news"></a>

### Hacker News feeds and search

[heartleo/hn-cli#hacker-news](https://github.com/heartleo/hn-cli/tree/main/plugins/hacker-news) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Hacker News tools for feeds, discussion threads, search, and user profiles.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:heartleo/hn-cli#path:/plugins/hacker-news
```

</details>

<a id="dsh-dsh-plugin-hub-packages-dsh-mcp-manager"></a>

### MCP server config manager

[wingsky-1/dsh-plugin-hub#packages/dsh-mcp-manager](https://github.com/wingsky-1/dsh-plugin-hub/tree/main/packages/dsh-mcp-manager) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

MCP server manager (stdio / streamable-http) with per-project and global config tiers: project MCP collapses into 4 atomic tools by default, workspace isolation prevents cross-project interference, configs keep only ${ENV} refs, and a runtime API lets plugins register servers.

**Alternatives:**

- [Edge-Echo/dsh-mcp-bridge](https://github.com/Edge-Echo/dsh-mcp-bridge) (★ 5) — Ships a ready-made bundle of demo, memory, filesystem, GitHub, Playwright, and remote HTTP MCP servers with a connectivity verifier

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wingsky-1/dsh-plugin-hub#path:/packages/dsh-mcp-manager
```

</details>
