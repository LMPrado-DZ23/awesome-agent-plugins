# Tools & Capabilities

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Claude Mem persistent context](#claude-mem) — Captures what an agent does during a session, compresses it with AI, and injects the relevant memories back in…
- [Codebase knowledge graphs](#understand-anything) — Turns any codebase into an interactive knowledge graph that agents (and humans) can explore, search and query,…
- [Last-30-days research skill](#last30days-skill) — Agent skill that researches a topic across Reddit, X, YouTube, Hacker News, Polymarket and the wider web, then…
- [AI PowerPoint generation skill](#ppt-master) — Turns documents or topics into native, editable PowerPoint decks with real shapes, transitions, data-backed ch…
- [CLI-Anything agent-native CLIs](#cli-anything) — Makes any command-line software agent-native, via a CLI hub and a large library of skills that describe how to…
- [Obsidian agent skills](#obsidian-skills) — Agent skills that teach a coding agent to use the Obsidian CLI and open formats such as Markdown, Bases and JS…
- [Editorial diagram design skill](#diagram-design) — Skill for generating clean, editorial-style diagrams as self-contained HTML and SVG, without shadows or generi…
- [Repomix repo packer](#repomix) — Packs an entire repository into a single AI-friendly file, ready to feed to Claude, ChatGPT, Gemini or other L…
- [Claude Code HUD](#claude-hud) — Claude Code plugin that shows a live heads-up display of context usage, active tools, running agents and todo …
- [DeepEval LLM evaluation](#deepeval) — Open-source LLM evaluation framework for testing and scoring the outputs of language models and agent pipeline…
- [Quarkdown markup compiler skill](#quarkdown) — Skill for a Markdown-superset compiler that turns marked-up text into papers, presentations, websites, books a…
- [Desktop Commander](#desktop-commander) — Terminal control, long-running process management, file-system search and diff-based file editing for agents.
- [Diagrams-as-code (draw.io) skill](#drawio-skill) — Skill that turns natural language, code, Terraform/Kubernetes manifests, SQL, OpenAPI, AsyncAPI, Protobuf and …
- [Progressive MCP tool exposure](#klavis-mcp) — Server for progressive tool usage at scale, exposing large MCP tool sets incrementally to agents.
- [Interactive draw.io diagrams](#drawio-mcp) — Creates diagrams in chat rendered as live, interactive draw.io diagrams, with over 10,000 searchable shapes.
- [Vibe Tools CLI for Cursor Agent](#vibe-tools) — Command-line toolkit that gives Cursor Agent an extended AI team and advanced skills through external tool int…
- [AntV chart generation](#mcp-server-chart) — Generates charts using the AntV visualization library; needs a SERVICE_ID.
- [Website design-system extractor](#design-extract) — Extracts a website's full design system into DTCG design tokens, with emitters for iOS SwiftUI, Android Compos…
- [Multi-model consensus runner](#claude-octopus) — Runs the same research, design or coding task against multiple AI models in parallel and surfaces where they d…
- [Obsidian agent memory framework](#obsidian-wiki) — Skill framework letting AI agents build and maintain a personal knowledge base ('digital brain') inside Obsidi…
- [Academic diagram generation](#paperbanana-mcp) — Generates academic diagrams and statistical plots from text using multi-agent AI.
- [Figma design context for agents](#mcp-server-guide) — Official Figma server bringing Figma design context directly into an AI coding workflow.
- [Design system prompts for coding agents](#typeui-mcp) — Design systems, UI prompts, and layout variations for AI coding tools.
- [Study top app screens and paywalls](#appllama-skills-mcp) — Studies screens, flows, and paywalls from top-earning iOS apps to inform new app designs.
- [Paid API catalog for agents](#dsh-treg) — Tool catalog for agents: searches about 2,600 external endpoints (SEO/SERP, backlinks, social, people/company …
- [Real website design references](#inspo-mcp) — Real production websites for coding agents: color palettes, fonts, fold layouts, and reference JSX; needs a TO…
- [Context-window token optimization](#token-optimizer-mcp) — Context-window optimization with caching, compression, and smart file tools, cutting tokens 60-90%.
- [Interactive equation graphing](#equation-io-mcp) — Creates interactive 2D and 3D graphs from validated equations, with shareable links and PNG previews.
- [Verify agent work from video evidence](#watch-skill-mcp) — Watches video and live sessions, keeps timestamped evidence, and verifies an agent's own work.
- [Organize Claude Code configuration](#claude-code-organizer-mcp) — Organizes Claude Code memories, skills, MCP servers, commands, and agents via drag-and-drop.
- [PyTorch architecture diagrams](#visualtorch-mcp) — Renders PyTorch model architecture diagrams and animated GIF reveals from a trusted model source.
- [Stata regression analysis](#stata-mcp) — Lets an LLM help run regression analysis with Stata.
- [shadcn/ui components for Laravel Blade](#blatui-mcp) — shadcn/ui for Laravel Blade: discover, read, and install BlatUI components, blocks, and charts.
- [Build presentations with Demo Time](#vscode-demo-time-mcp) — Lets AI assistants interact with the Demo Time VS Code extension to help build presentations and demos.
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
- [Zotero evidence store for agents](#dsh-dsh-zotero) — Uses Zotero as an evidence store for agents: searches your library, inspects metadata and notes, retrieves evi…
- [Cross-shell terminal tool](#dsh-dsh-bash-terminal) — One shell tool covering PowerShell, Git Bash, and WSL on Windows, plus an interactive PTY terminal; the defaul…
- [Language server actions](#dsh-dsh-lsp-actions) — LSP action surface for DSH: diagnostics, formatting, completion, code actions, symbols, signature help, inlay …
- [Git-based session rewind](#dsh-dsh-checkpoint-rewind) — Claude Code style /rewind for DeepSeek Harness: takes git-first workspace snapshots before every mutating tool…
- [HarmonyOS device automation](#dsh-dsh-hdc-bridge) — HarmonyOS device bridge: an hdc screenshot/install/log/crash/UI automation loop with a read_image tool, offici…
- [One-click prompt optimizer](#dsh-oss-prompt-optimizer) — Optimizes a raw instruction into a professional prompt in one click: three output styles, situation-aware role…
- [Connect DSH to OOMOL apps](#dsh-dsh-oomol) — Connects DeepSeek Harness to OOMOL-managed apps and services, with progressive Connector Action discovery and …
- [Auxiliary model routing tools](#dsh-dsh-auxiliary) — Provides dedicated model routes, tools, and system guidance for vision, compaction, reviews, subagents, titles…
- [MiniMax multimodal bridge](#dsh-dsh-mmx-bridge) — One mmx_bridge tool covering MiniMax image understanding/generation, video, TTS, music, cover art, web search,…
- [Web-novel writing engine](#dsh-dsh-tool-writing) — A web-novel writing engine for DeepSeek Harness: parallel drafting, outlining, and brainstorming with a separa…
- [Deterministic code graph tool](#dsh-dsh-tool-lens) — Deterministic AST code graph and architecture intelligence tool for call hierarchies, blast radius, circular d…
- [Brand asset extraction](#openbrand-mcp) — Extracts brand assets (logos, colors, backdrop images, brand name) from any website URL; needs an OPENBRAND_AP…
- [Collaborative drawing canvas](#tldraw-mcp-app) — Draws and visually collaborates with agents on tldraw's shared canvas.
- [Export chats as styled notes](#dsh-notes-dsh-plugin) — Exports DSH conversations as Smartisan Notes-style PNGs, or creates and updates Markdown notes in a configured…
- [Filesystem (reference)](#mcp-filesystem) — Reference server for reading, writing, searching and moving files, restricted to the directories you pass as a…
- [Hacker News feeds and search](#dsh-hn-cli-hacker-news) — Hacker News tools for feeds, discussion threads, search, and user profiles.
- [MCP server config manager](#dsh-dsh-plugin-hub-packages-dsh-mcp-manager) — MCP server manager (stdio / streamable-http) with per-project and global config tiers: project MCP collapses i…

<a id="claude-mem"></a>

### Claude Mem persistent context

[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — `Agent Skills` · ★ 94k · License: Apache-2.0 · Works with: All clients

Captures what an agent does during a session, compresses it with AI, and injects the relevant memories back into future sessions across Claude Code, Codex, Gemini and more.

**Alternatives:**

- [MemPalace/mempalace](https://github.com/MemPalace/mempalace) (★ 59k) — Alternative persistent AI memory system marketed as the best-benchmarked open-source option, and free.
- [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) (★ 29k) — Persistent memory layer for coding agents built around published real-world benchmarks.
- [volcengine/OpenViking](https://github.com/volcengine/OpenViking) (★ 38k) — Self-evolving context database that unifies agent memory, knowledge RAG and skills in one store.
- [memodb-io/Acontext](https://github.com/memodb-io/Acontext) (★ 3.7k) — Treats Agent Skills themselves as the memory layer, rather than a separate database.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add thedotmack/claude-mem -a claude-code -g
```

**Codex CLI**

```bash
npx skills add thedotmack/claude-mem -a codex -g
```

**Gemini CLI**

```bash
npx skills add thedotmack/claude-mem -a gemini-cli -g
```

**Cursor**

```bash
npx skills add thedotmack/claude-mem -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add thedotmack/claude-mem -a github-copilot -g
```

**OpenCode**

```bash
npx skills add thedotmack/claude-mem -a opencode -g
```

**Cline**

```bash
npx skills add thedotmack/claude-mem -a cline -g
```

**Windsurf**

```bash
npx skills add thedotmack/claude-mem -a windsurf -g
```

**Zed**

```bash
npx skills add thedotmack/claude-mem -a zed -g
```

**Goose**

```bash
npx skills add thedotmack/claude-mem -a goose -g
```

**Kiro**

```bash
npx skills add thedotmack/claude-mem -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add thedotmack/claude-mem -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add thedotmack/claude-mem -a universal
```

</details>

<a id="understand-anything"></a>

### Codebase knowledge graphs

[Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) — `Agent Skills` · ★ 84k · License: MIT · Works with: All clients

Turns any codebase into an interactive knowledge graph that agents (and humans) can explore, search and query, across Claude Code, Codex, Cursor and more.

**Alternatives:**

- [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) (★ 47k) — Zero-server code intelligence engine that builds a similar graph representation without any backend infrastructure.
- [giancarloerra/SocratiCode](https://github.com/giancarloerra/SocratiCode) (★ 3.3k) — Enterprise-scale codebase intelligence (tested on 40M+ lines) with hybrid semantic search, dependency graphs and an interactive HTML viewer.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add Egonex-AI/Understand-Anything -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Egonex-AI/Understand-Anything -a codex -g
```

**Gemini CLI**

```bash
npx skills add Egonex-AI/Understand-Anything -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Egonex-AI/Understand-Anything -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Egonex-AI/Understand-Anything -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Egonex-AI/Understand-Anything -a opencode -g
```

**Cline**

```bash
npx skills add Egonex-AI/Understand-Anything -a cline -g
```

**Windsurf**

```bash
npx skills add Egonex-AI/Understand-Anything -a windsurf -g
```

**Zed**

```bash
npx skills add Egonex-AI/Understand-Anything -a zed -g
```

**Goose**

```bash
npx skills add Egonex-AI/Understand-Anything -a goose -g
```

**Kiro**

```bash
npx skills add Egonex-AI/Understand-Anything -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Egonex-AI/Understand-Anything -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Egonex-AI/Understand-Anything -a universal
```

</details>

<a id="last30days-skill"></a>

### Last-30-days research skill

[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) — `Agent Skills` · ★ 63k · License: MIT · Works with: All clients

Agent skill that researches a topic across Reddit, X, YouTube, Hacker News, Polymarket and the wider web, then synthesizes a grounded summary.

**Alternatives:**

- [Jesseovo/last30days-skill-cn](https://github.com/Jesseovo/last30days-skill-cn) (★ 1.8k) — Same idea adapted to mainland Chinese platforms: searches eight major Chinese sites from the last 30 days.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add mvanhorn/last30days-skill -a claude-code -g
```

**Codex CLI**

```bash
npx skills add mvanhorn/last30days-skill -a codex -g
```

**Gemini CLI**

```bash
npx skills add mvanhorn/last30days-skill -a gemini-cli -g
```

**Cursor**

```bash
npx skills add mvanhorn/last30days-skill -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add mvanhorn/last30days-skill -a github-copilot -g
```

**OpenCode**

```bash
npx skills add mvanhorn/last30days-skill -a opencode -g
```

**Cline**

```bash
npx skills add mvanhorn/last30days-skill -a cline -g
```

**Windsurf**

```bash
npx skills add mvanhorn/last30days-skill -a windsurf -g
```

**Zed**

```bash
npx skills add mvanhorn/last30days-skill -a zed -g
```

**Goose**

```bash
npx skills add mvanhorn/last30days-skill -a goose -g
```

**Kiro**

```bash
npx skills add mvanhorn/last30days-skill -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add mvanhorn/last30days-skill -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add mvanhorn/last30days-skill -a universal
```

</details>

<a id="ppt-master"></a>

### AI PowerPoint generation skill

[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — `Agent Skills` · ★ 56k · License: MIT · Works with: All clients

Turns documents or topics into native, editable PowerPoint decks with real shapes, transitions, data-backed charts, tables and optional narration.

**Alternatives:**

- [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) (★ 30k) — Creates web-based slide decks using the coding agent's own frontend skills instead of native PowerPoint files.
- [chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) (★ 8.6k) — Generates browser-editable presentations from multiple visual themes, exportable to HTML, PDF and PPTX.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add hugohe3/ppt-master -a claude-code -g
```

**Codex CLI**

```bash
npx skills add hugohe3/ppt-master -a codex -g
```

**Gemini CLI**

```bash
npx skills add hugohe3/ppt-master -a gemini-cli -g
```

**Cursor**

```bash
npx skills add hugohe3/ppt-master -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add hugohe3/ppt-master -a github-copilot -g
```

**OpenCode**

```bash
npx skills add hugohe3/ppt-master -a opencode -g
```

**Cline**

```bash
npx skills add hugohe3/ppt-master -a cline -g
```

**Windsurf**

```bash
npx skills add hugohe3/ppt-master -a windsurf -g
```

**Zed**

```bash
npx skills add hugohe3/ppt-master -a zed -g
```

**Goose**

```bash
npx skills add hugohe3/ppt-master -a goose -g
```

**Kiro**

```bash
npx skills add hugohe3/ppt-master -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add hugohe3/ppt-master -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add hugohe3/ppt-master -a universal
```

</details>

<a id="cli-anything"></a>

### CLI-Anything agent-native CLIs

[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) — `Agent Skills` · ★ 50k · License: Apache-2.0 · Works with: All clients

Makes any command-line software agent-native, via a CLI hub and a large library of skills that describe how to drive each tool.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add HKUDS/CLI-Anything -a claude-code -g
```

**Codex CLI**

```bash
npx skills add HKUDS/CLI-Anything -a codex -g
```

**Gemini CLI**

```bash
npx skills add HKUDS/CLI-Anything -a gemini-cli -g
```

**Cursor**

```bash
npx skills add HKUDS/CLI-Anything -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add HKUDS/CLI-Anything -a github-copilot -g
```

**OpenCode**

```bash
npx skills add HKUDS/CLI-Anything -a opencode -g
```

**Cline**

```bash
npx skills add HKUDS/CLI-Anything -a cline -g
```

**Windsurf**

```bash
npx skills add HKUDS/CLI-Anything -a windsurf -g
```

**Zed**

```bash
npx skills add HKUDS/CLI-Anything -a zed -g
```

**Goose**

```bash
npx skills add HKUDS/CLI-Anything -a goose -g
```

**Kiro**

```bash
npx skills add HKUDS/CLI-Anything -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add HKUDS/CLI-Anything -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add HKUDS/CLI-Anything -a universal
```

</details>

<a id="obsidian-skills"></a>

### Obsidian agent skills

[kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) — `Agent Skills` · ★ 49k · License: MIT · Works with: All clients

Agent skills that teach a coding agent to use the Obsidian CLI and open formats such as Markdown, Bases and JSON Canvas.

**Alternatives:**

- [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) (★ 15k) — Turns Obsidian plus Claude Code into a self-organizing second brain, filing any dropped source into a connected knowledge graph.
- [eugeniughelbur/obsidian-second-brain](https://github.com/eugeniughelbur/obsidian-second-brain) (★ 4.6k) — Persistent memory for Claude Code and 6 other CLI agents, stored as markdown in an Obsidian vault, with 45+ commands.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add kepano/obsidian-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add kepano/obsidian-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add kepano/obsidian-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add kepano/obsidian-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add kepano/obsidian-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add kepano/obsidian-skills -a opencode -g
```

**Cline**

```bash
npx skills add kepano/obsidian-skills -a cline -g
```

**Windsurf**

```bash
npx skills add kepano/obsidian-skills -a windsurf -g
```

**Zed**

```bash
npx skills add kepano/obsidian-skills -a zed -g
```

**Goose**

```bash
npx skills add kepano/obsidian-skills -a goose -g
```

**Kiro**

```bash
npx skills add kepano/obsidian-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add kepano/obsidian-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add kepano/obsidian-skills -a universal
```

</details>

<a id="diagram-design"></a>

### Editorial diagram design skill

[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) — `Agent Skills` · ★ 42k · License: MIT · Works with: All clients

Skill for generating clean, editorial-style diagrams as self-contained HTML and SVG, without shadows or generic Mermaid output.

**Alternatives:**

- [nicobailon/visual-explainer](https://github.com/nicobailon/visual-explainer) (★ 9.9k) — Generates rich HTML pages or slide decks for diagrams, diff reviews, plan audits, data tables and project recaps.
- [plannotator/effective-html](https://github.com/plannotator/effective-html) (★ 3.2k) — Broader set of skills for HTML artifacts: wireframes, interactive prototypes, plans and diagrams.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add cathrynlavery/diagram-design -a claude-code -g
```

**Codex CLI**

```bash
npx skills add cathrynlavery/diagram-design -a codex -g
```

**Gemini CLI**

```bash
npx skills add cathrynlavery/diagram-design -a gemini-cli -g
```

**Cursor**

```bash
npx skills add cathrynlavery/diagram-design -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add cathrynlavery/diagram-design -a github-copilot -g
```

**OpenCode**

```bash
npx skills add cathrynlavery/diagram-design -a opencode -g
```

**Cline**

```bash
npx skills add cathrynlavery/diagram-design -a cline -g
```

**Windsurf**

```bash
npx skills add cathrynlavery/diagram-design -a windsurf -g
```

**Zed**

```bash
npx skills add cathrynlavery/diagram-design -a zed -g
```

**Goose**

```bash
npx skills add cathrynlavery/diagram-design -a goose -g
```

**Kiro**

```bash
npx skills add cathrynlavery/diagram-design -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add cathrynlavery/diagram-design -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add cathrynlavery/diagram-design -a universal
```

</details>

<a id="repomix"></a>

### Repomix repo packer

[yamadashy/repomix](https://github.com/yamadashy/repomix) — `Agent Skills` · ★ 28k · License: MIT · Works with: All clients

Packs an entire repository into a single AI-friendly file, ready to feed to Claude, ChatGPT, Gemini or other LLM tools.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add yamadashy/repomix -a claude-code -g
```

**Codex CLI**

```bash
npx skills add yamadashy/repomix -a codex -g
```

**Gemini CLI**

```bash
npx skills add yamadashy/repomix -a gemini-cli -g
```

**Cursor**

```bash
npx skills add yamadashy/repomix -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add yamadashy/repomix -a github-copilot -g
```

**OpenCode**

```bash
npx skills add yamadashy/repomix -a opencode -g
```

**Cline**

```bash
npx skills add yamadashy/repomix -a cline -g
```

**Windsurf**

```bash
npx skills add yamadashy/repomix -a windsurf -g
```

**Zed**

```bash
npx skills add yamadashy/repomix -a zed -g
```

**Goose**

```bash
npx skills add yamadashy/repomix -a goose -g
```

**Kiro**

```bash
npx skills add yamadashy/repomix -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add yamadashy/repomix -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add yamadashy/repomix -a universal
```

</details>

<a id="claude-hud"></a>

### Claude Code HUD

[jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) — `Plugin marketplace` · ★ 28k · License: MIT · Works with: Claude Code only

Claude Code plugin that shows a live heads-up display of context usage, active tools, running agents and todo progress.

<details><summary>Install</summary>

**Claude Code**

```text
/plugin marketplace add jarrodwatts/claude-hud
```

</details>

<a id="deepeval"></a>

### DeepEval LLM evaluation

[confident-ai/deepeval](https://github.com/confident-ai/deepeval) — `Agent Skills` · ★ 18k · License: Apache-2.0 · Works with: All clients

Open-source LLM evaluation framework for testing and scoring the outputs of language models and agent pipelines.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add confident-ai/deepeval -a claude-code -g
```

**Codex CLI**

```bash
npx skills add confident-ai/deepeval -a codex -g
```

**Gemini CLI**

```bash
npx skills add confident-ai/deepeval -a gemini-cli -g
```

**Cursor**

```bash
npx skills add confident-ai/deepeval -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add confident-ai/deepeval -a github-copilot -g
```

**OpenCode**

```bash
npx skills add confident-ai/deepeval -a opencode -g
```

**Cline**

```bash
npx skills add confident-ai/deepeval -a cline -g
```

**Windsurf**

```bash
npx skills add confident-ai/deepeval -a windsurf -g
```

**Zed**

```bash
npx skills add confident-ai/deepeval -a zed -g
```

**Goose**

```bash
npx skills add confident-ai/deepeval -a goose -g
```

**Kiro**

```bash
npx skills add confident-ai/deepeval -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add confident-ai/deepeval -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add confident-ai/deepeval -a universal
```

</details>

<a id="quarkdown"></a>

### Quarkdown markup compiler skill

[iamgio/quarkdown](https://github.com/iamgio/quarkdown) — `Agent Skills` · ★ 16k · License: GPL-3.0 · Works with: All clients

Skill for a Markdown-superset compiler that turns marked-up text into papers, presentations, websites, books and knowledge bases from a single source.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add iamgio/quarkdown -a claude-code -g
```

**Codex CLI**

```bash
npx skills add iamgio/quarkdown -a codex -g
```

**Gemini CLI**

```bash
npx skills add iamgio/quarkdown -a gemini-cli -g
```

**Cursor**

```bash
npx skills add iamgio/quarkdown -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add iamgio/quarkdown -a github-copilot -g
```

**OpenCode**

```bash
npx skills add iamgio/quarkdown -a opencode -g
```

**Cline**

```bash
npx skills add iamgio/quarkdown -a cline -g
```

**Windsurf**

```bash
npx skills add iamgio/quarkdown -a windsurf -g
```

**Zed**

```bash
npx skills add iamgio/quarkdown -a zed -g
```

**Goose**

```bash
npx skills add iamgio/quarkdown -a goose -g
```

**Kiro**

```bash
npx skills add iamgio/quarkdown -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add iamgio/quarkdown -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add iamgio/quarkdown -a universal
```

</details>

<a id="desktop-commander"></a>

### Desktop Commander

[Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP) — `MCP server` · ★ 9.7k · License: MIT · Works with: All clients

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

<a id="drawio-skill"></a>

### Diagrams-as-code (draw.io) skill

[Agents365-ai/drawio-skill](https://github.com/Agents365-ai/drawio-skill) — `Agent Skills` · ★ 9.5k · License: MIT · Works with: All clients

Skill that turns natural language, code, Terraform/Kubernetes manifests, SQL, OpenAPI, AsyncAPI, Protobuf and GraphQL into editable, tested draw.io architecture diagrams.

**Alternatives:**

- [markdown-viewer/skills](https://github.com/markdown-viewer/skills) (★ 3.3k) — Generates architecture, network, BPMN, UML and mindmap diagrams natively inside Markdown.
- [yctimlin/mcp_excalidraw](https://github.com/yctimlin/mcp_excalidraw) (★ 2.5k) — MCP server plus skill for programmatic, real-time Excalidraw canvas diagrams.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add Agents365-ai/drawio-skill -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Agents365-ai/drawio-skill -a codex -g
```

**Gemini CLI**

```bash
npx skills add Agents365-ai/drawio-skill -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Agents365-ai/drawio-skill -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Agents365-ai/drawio-skill -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Agents365-ai/drawio-skill -a opencode -g
```

**Cline**

```bash
npx skills add Agents365-ai/drawio-skill -a cline -g
```

**Windsurf**

```bash
npx skills add Agents365-ai/drawio-skill -a windsurf -g
```

**Zed**

```bash
npx skills add Agents365-ai/drawio-skill -a zed -g
```

**Goose**

```bash
npx skills add Agents365-ai/drawio-skill -a goose -g
```

**Kiro**

```bash
npx skills add Agents365-ai/drawio-skill -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Agents365-ai/drawio-skill -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Agents365-ai/drawio-skill -a universal
```

</details>

<a id="klavis-mcp"></a>

### Progressive MCP tool exposure

[Klavis-AI/klavis](https://github.com/Klavis-AI/klavis) — `MCP server` · ★ 5.8k · License: Apache-2.0 · Works with: All clients

Server for progressive tool usage at scale, exposing large MCP tool sets incrementally to agents.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http strata https://strata.klavis.ai/mcp/
```

**Codex CLI**

```bash
codex mcp add strata --url https://strata.klavis.ai/mcp/
```

**Gemini CLI**

```bash
gemini mcp add --transport http strata https://strata.klavis.ai/mcp/
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "strata": {
      "url": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "strata": {
      "type": "http",
      "url": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "strata": {
      "type": "remote",
      "url": "https://strata.klavis.ai/mcp/",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "strata": {
      "type": "streamableHttp",
      "url": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "strata": {
      "serverUrl": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "strata": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://strata.klavis.ai/mcp/"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  strata:
    type: streamable_http
    uri: https://strata.klavis.ai/mcp/
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "strata": {
      "type": "streamable-http",
      "url": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "strata": {
      "type": "streamable-http",
      "url": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**DeepSeek Harness** — File: `strata.cordis.yml  →  dsh web --patch ./strata.cordis.yml`

```yaml
- insert:
    - id: mcp-strata
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: strata
        transport: streamable-http
        url: https://strata.klavis.ai/mcp/
```

</details>

<a id="drawio-mcp"></a>

### Interactive draw.io diagrams

[draw.io](https://github.com/jgraph/drawio-mcp) — `MCP server` · ★ 5.5k · License: Apache-2.0 · Works with: All clients

Creates diagrams in chat rendered as live, interactive draw.io diagrams, with over 10,000 searchable shapes.

**Alternatives:**

- [TerraVision](https://github.com/patrickchugh/terravision) (★ 1.6k) — Generates cloud architecture diagrams from a terraform plan, with official AWS, Azure, and GCP icons.
- [Vrun-design/openflowkit](https://github.com/Vrun-design/openflowkit) (★ 790) — Local-first node-based flow diagramming tools for MCP clients.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://mcp.draw.io/mcp
```

**Codex CLI**

```bash
codex mcp add mcp --url https://mcp.draw.io/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://mcp.draw.io/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://mcp.draw.io/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "http",
      "url": "https://mcp.draw.io/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp": {
      "type": "remote",
      "url": "https://mcp.draw.io/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamableHttp",
      "url": "https://mcp.draw.io/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://mcp.draw.io/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.draw.io/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: streamable_http
    uri: https://mcp.draw.io/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.draw.io/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.draw.io/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `mcp.cordis.yml  →  dsh web --patch ./mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp
        transport: streamable-http
        url: https://mcp.draw.io/mcp
```

</details>

<a id="vibe-tools"></a>

### Vibe Tools CLI for Cursor Agent

[eastlondoner/vibe-tools](https://github.com/eastlondoner/vibe-tools) — `Curated list / registry` · ★ 4.8k · License: MIT · Works with: —

Command-line toolkit that gives Cursor Agent an extended AI team and advanced skills through external tool integrations.

<a id="mcp-server-chart"></a>

### AntV chart generation

[antvis/mcp-server-chart](https://github.com/antvis/mcp-server-chart) — `MCP server` · ★ 4.4k · License: MIT · Works with: All clients

Generates charts using the AntV visualization library; needs a SERVICE_ID.

**Alternatives:**

- [Semiotic](https://github.com/nteract/semiotic) (★ 2.7k) — Verified React chart generation: select, validate, repair, render, and inspect charts.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-server-chart --env SERVICE_ID='<SERVICE_ID>' -- npx -y @antv/mcp-server-chart
```

**Codex CLI**

```bash
codex mcp add mcp-server-chart --env SERVICE_ID='<SERVICE_ID>' -- npx -y @antv/mcp-server-chart
```

**Gemini CLI**

```bash
gemini mcp add -e SERVICE_ID='<SERVICE_ID>' mcp-server-chart npx -y @antv/mcp-server-chart
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server-chart": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp-server-chart": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@antv/mcp-server-chart"
      ],
      "enabled": true,
      "environment": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-server-chart": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server-chart:
    type: stdio
    cmd: npx
    args: ["-y","@antv/mcp-server-chart"]
    envs:
      SERVICE_ID: "<SERVICE_ID>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `mcp-server-chart.cordis.yml  →  dsh web --patch ./mcp-server-chart.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-server-chart
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-server-chart
        transport: stdio
        command: npx
        args: ["-y","@antv/mcp-server-chart"]
        env: {"SERVICE_ID":"<SERVICE_ID>"}
        cwd: !!js process.cwd()
```

</details>

<a id="design-extract"></a>

### Website design-system extractor

[Manavarya09/design-extract](https://github.com/Manavarya09/design-extract) — `Agent Skills` · ★ 4.1k · License: MIT · Works with: All clients

Extracts a website's full design system into DTCG design tokens, with emitters for iOS SwiftUI, Android Compose, Flutter, Tailwind v4 and Figma variables, plus a CSS/accessibility audit.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add Manavarya09/design-extract -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Manavarya09/design-extract -a codex -g
```

**Gemini CLI**

```bash
npx skills add Manavarya09/design-extract -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Manavarya09/design-extract -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Manavarya09/design-extract -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Manavarya09/design-extract -a opencode -g
```

**Cline**

```bash
npx skills add Manavarya09/design-extract -a cline -g
```

**Windsurf**

```bash
npx skills add Manavarya09/design-extract -a windsurf -g
```

**Zed**

```bash
npx skills add Manavarya09/design-extract -a zed -g
```

**Goose**

```bash
npx skills add Manavarya09/design-extract -a goose -g
```

**Kiro**

```bash
npx skills add Manavarya09/design-extract -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Manavarya09/design-extract -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Manavarya09/design-extract -a universal
```

</details>

<a id="claude-octopus"></a>

### Multi-model consensus runner

[nyldn/claude-octopus](https://github.com/nyldn/claude-octopus) — `Agent Skills` · ★ 4.1k · License: MIT · Works with: All clients

Runs the same research, design or coding task against multiple AI models in parallel and surfaces where they disagree before you ship.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add nyldn/claude-octopus -a claude-code -g
```

**Codex CLI**

```bash
npx skills add nyldn/claude-octopus -a codex -g
```

**Gemini CLI**

```bash
npx skills add nyldn/claude-octopus -a gemini-cli -g
```

**Cursor**

```bash
npx skills add nyldn/claude-octopus -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add nyldn/claude-octopus -a github-copilot -g
```

**OpenCode**

```bash
npx skills add nyldn/claude-octopus -a opencode -g
```

**Cline**

```bash
npx skills add nyldn/claude-octopus -a cline -g
```

**Windsurf**

```bash
npx skills add nyldn/claude-octopus -a windsurf -g
```

**Zed**

```bash
npx skills add nyldn/claude-octopus -a zed -g
```

**Goose**

```bash
npx skills add nyldn/claude-octopus -a goose -g
```

**Kiro**

```bash
npx skills add nyldn/claude-octopus -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add nyldn/claude-octopus -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add nyldn/claude-octopus -a universal
```

</details>

<a id="obsidian-wiki"></a>

### Obsidian agent memory framework

[Ar9av/obsidian-wiki](https://github.com/Ar9av/obsidian-wiki) — `Agent Skills` · ★ 3.4k · License: MIT · Works with: All clients

Skill framework letting AI agents build and maintain a personal knowledge base ('digital brain') inside Obsidian, with cross-linking, graph coloring and history ingestion.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add Ar9av/obsidian-wiki -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Ar9av/obsidian-wiki -a codex -g
```

**Gemini CLI**

```bash
npx skills add Ar9av/obsidian-wiki -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Ar9av/obsidian-wiki -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Ar9av/obsidian-wiki -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Ar9av/obsidian-wiki -a opencode -g
```

**Cline**

```bash
npx skills add Ar9av/obsidian-wiki -a cline -g
```

**Windsurf**

```bash
npx skills add Ar9av/obsidian-wiki -a windsurf -g
```

**Zed**

```bash
npx skills add Ar9av/obsidian-wiki -a zed -g
```

**Goose**

```bash
npx skills add Ar9av/obsidian-wiki -a goose -g
```

**Kiro**

```bash
npx skills add Ar9av/obsidian-wiki -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Ar9av/obsidian-wiki -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Ar9av/obsidian-wiki -a universal
```

</details>

<a id="paperbanana-mcp"></a>

### Academic diagram generation

[PaperBanana](https://github.com/llmsresearch/paperbanana) — `MCP server` · ★ 2.4k · License: MIT · Works with: All clients

Generates academic diagrams and statistical plots from text using multi-agent AI.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio paperbanana -- uvx paperbanana
```

**Codex CLI**

```bash
codex mcp add paperbanana -- uvx paperbanana
```

**Gemini CLI**

```bash
gemini mcp add paperbanana uvx paperbanana
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "paperbanana": {
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "paperbanana": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "paperbanana"
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
    "paperbanana": {
      "type": "local",
      "command": [
        "uvx",
        "paperbanana"
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
    "paperbanana": {
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "paperbanana": {
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "paperbanana": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  paperbanana:
    type: stdio
    cmd: uvx
    args: ["paperbanana"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "paperbanana": {
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "paperbanana": {
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `paperbanana.cordis.yml  →  dsh web --patch ./paperbanana.cordis.yml`

```yaml
- insert:
    - id: mcp-paperbanana
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: paperbanana
        transport: stdio
        command: uvx
        args: ["paperbanana"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-server-guide"></a>

### Figma design context for agents

[Figma MCP Server](https://github.com/figma/mcp-server-guide) — `MCP server` · ★ 2.0k · License: see repo · Works with: All clients

Official Figma server bringing Figma design context directly into an AI coding workflow.

**Alternatives:**

- [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) (★ 16k) — Gives a coding agent access to Figma data to implement designs in any framework in one shot; needs a FIGMA_API_KEY.
- [TranHoaiHung/figma-ui-mcp](https://github.com/TranHoaiHung/figma-ui-mcp) (★ 242) — Bidirectional Figma server: an agent draws UI on the Figma canvas and reads designs back.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://mcp.figma.com/mcp
```

**Codex CLI**

```bash
codex mcp add mcp --url https://mcp.figma.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://mcp.figma.com/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp": {
      "type": "remote",
      "url": "https://mcp.figma.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamableHttp",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://mcp.figma.com/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.figma.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: streamable_http
    uri: https://mcp.figma.com/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `mcp.cordis.yml  →  dsh web --patch ./mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp
        transport: streamable-http
        url: https://mcp.figma.com/mcp
```

</details>

<a id="typeui-mcp"></a>

### Design system prompts for coding agents

[TypeUI](https://github.com/bergside/typeui) — `MCP server` · ★ 2.0k · License: see repo · Works with: All clients

Design systems, UI prompts, and layout variations for AI coding tools.

**Alternatives:**

- [StyleKit](https://github.com/AnxForever/stylekit/tree/main/packages/mcp) — Searches 148 curated design styles and pulls tokens, recipes, and shadcn commands.
- [UI Beats](https://github.com/nikhils4/ui-beats/tree/main/packages/mcp) — Lets an agent search, read, and install animated React components.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http typeui https://mcp.typeui.sh/mcp
```

**Codex CLI**

```bash
codex mcp add typeui --url https://mcp.typeui.sh/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http typeui https://mcp.typeui.sh/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "typeui": {
      "url": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "typeui": {
      "type": "http",
      "url": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "typeui": {
      "type": "remote",
      "url": "https://mcp.typeui.sh/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "typeui": {
      "type": "streamableHttp",
      "url": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "typeui": {
      "serverUrl": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "typeui": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.typeui.sh/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  typeui:
    type: streamable_http
    uri: https://mcp.typeui.sh/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "typeui": {
      "type": "streamable-http",
      "url": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "typeui": {
      "type": "streamable-http",
      "url": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `typeui.cordis.yml  →  dsh web --patch ./typeui.cordis.yml`

```yaml
- insert:
    - id: mcp-typeui
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: typeui
        transport: streamable-http
        url: https://mcp.typeui.sh/mcp
```

</details>

<a id="appllama-skills-mcp"></a>

### Study top app screens and paywalls

[Appllama](https://github.com/Appllama/appllama-skills) — `MCP server` · ★ 1.9k · License: MIT · Works with: All clients

Studies screens, flows, and paywalls from top-earning iOS apps to inform new app designs.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http appllama https://mcp.appllama.io/mcp
```

**Codex CLI**

```bash
codex mcp add appllama --url https://mcp.appllama.io/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http appllama https://mcp.appllama.io/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "appllama": {
      "url": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "appllama": {
      "type": "http",
      "url": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "appllama": {
      "type": "remote",
      "url": "https://mcp.appllama.io/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "appllama": {
      "type": "streamableHttp",
      "url": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "appllama": {
      "serverUrl": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "appllama": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.appllama.io/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  appllama:
    type: streamable_http
    uri: https://mcp.appllama.io/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "appllama": {
      "type": "streamable-http",
      "url": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "appllama": {
      "type": "streamable-http",
      "url": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `appllama.cordis.yml  →  dsh web --patch ./appllama.cordis.yml`

```yaml
- insert:
    - id: mcp-appllama
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: appllama
        transport: streamable-http
        url: https://mcp.appllama.io/mcp
```

</details>

<a id="dsh-treg"></a>

### Paid API catalog for agents

[superdesigndev/treg](https://github.com/superdesigndev/treg) — `Native plugin` · ★ 1.8k · License: see repo · Works with: DeepSeek Harness only

Tool catalog for agents: searches about 2,600 external endpoints (SEO/SERP, backlinks, social, people/company enrichment, ad libraries, scraping) by task, reads each one's parameters and price, then calls it with the credential injected server-side.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:superdesigndev/treg
```

</details>

<a id="inspo-mcp"></a>

### Real website design references

[Nutlope/inspo](https://github.com/Nutlope/inspo) — `MCP server` · ★ 661 · License: MIT · Works with: All clients

Real production websites for coding agents: color palettes, fonts, fold layouts, and reference JSX; needs a TOGETHER_API_KEY.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio inspo --env TOGETHER_API_KEY='<TOGETHER_API_KEY>' -- npx -y inspo-mcp
```

**Codex CLI**

```bash
codex mcp add inspo --env TOGETHER_API_KEY='<TOGETHER_API_KEY>' -- npx -y inspo-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e TOGETHER_API_KEY='<TOGETHER_API_KEY>' inspo npx -y inspo-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "inspo": {
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "inspo": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "inspo": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "inspo-mcp"
      ],
      "enabled": true,
      "environment": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "inspo": {
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "inspo": {
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "inspo": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  inspo:
    type: stdio
    cmd: npx
    args: ["-y","inspo-mcp"]
    envs:
      TOGETHER_API_KEY: "<TOGETHER_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "inspo": {
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "inspo": {
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `inspo.cordis.yml  →  dsh web --patch ./inspo.cordis.yml`

```yaml
- insert:
    - id: mcp-inspo
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: inspo
        transport: stdio
        command: npx
        args: ["-y","inspo-mcp"]
        env: {"TOGETHER_API_KEY":"<TOGETHER_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="token-optimizer-mcp"></a>

### Context-window token optimization

[ooples/token-optimizer-mcp](https://github.com/ooples/token-optimizer-mcp) — `MCP server` · ★ 531 · License: MIT · Works with: All clients

Context-window optimization with caching, compression, and smart file tools, cutting tokens 60-90%.

**Alternatives:**

- [llmtrim](https://github.com/fkiene/llmtrim) (★ 236) — Proxy server that compresses LLM prompts, tool output, and replies to cut token cost.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio token-optimizer-mcp -- npx -y @ooples/token-optimizer-mcp
```

**Codex CLI**

```bash
codex mcp add token-optimizer-mcp -- npx -y @ooples/token-optimizer-mcp
```

**Gemini CLI**

```bash
gemini mcp add token-optimizer-mcp npx -y @ooples/token-optimizer-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "token-optimizer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "token-optimizer-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
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
    "token-optimizer-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@ooples/token-optimizer-mcp"
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
    "token-optimizer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "token-optimizer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "token-optimizer-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  token-optimizer-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@ooples/token-optimizer-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "token-optimizer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "token-optimizer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `token-optimizer-mcp.cordis.yml  →  dsh web --patch ./token-optimizer-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-token-optimizer-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: token-optimizer-mcp
        transport: stdio
        command: npx
        args: ["-y","@ooples/token-optimizer-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="equation-io-mcp"></a>

### Interactive equation graphing

[Equation.io](https://github.com/aantthony/equation.io) — `MCP server` · ★ 406 · License: MIT · Works with: All clients

Creates interactive 2D and 3D graphs from validated equations, with shareable links and PNG previews.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http equation https://equation.io/mcp
```

**Codex CLI**

```bash
codex mcp add equation --url https://equation.io/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http equation https://equation.io/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "equation": {
      "url": "https://equation.io/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "equation": {
      "type": "http",
      "url": "https://equation.io/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "equation": {
      "type": "remote",
      "url": "https://equation.io/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "equation": {
      "type": "streamableHttp",
      "url": "https://equation.io/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "equation": {
      "serverUrl": "https://equation.io/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "equation": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://equation.io/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  equation:
    type: streamable_http
    uri: https://equation.io/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "equation": {
      "type": "streamable-http",
      "url": "https://equation.io/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "equation": {
      "type": "streamable-http",
      "url": "https://equation.io/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `equation.cordis.yml  →  dsh web --patch ./equation.cordis.yml`

```yaml
- insert:
    - id: mcp-equation
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: equation
        transport: streamable-http
        url: https://equation.io/mcp
```

</details>

<a id="watch-skill-mcp"></a>

### Verify agent work from video evidence

[oxbshw/watch-skill](https://github.com/oxbshw/watch-skill) — `MCP server` · ★ 384 · License: MIT · Works with: All clients

Watches video and live sessions, keeps timestamped evidence, and verifies an agent's own work.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio watch-skill -- uvx watch-skill
```

**Codex CLI**

```bash
codex mcp add watch-skill -- uvx watch-skill
```

**Gemini CLI**

```bash
gemini mcp add watch-skill uvx watch-skill
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "watch-skill": {
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "watch-skill": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "watch-skill"
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
    "watch-skill": {
      "type": "local",
      "command": [
        "uvx",
        "watch-skill"
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
    "watch-skill": {
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "watch-skill": {
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "watch-skill": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  watch-skill:
    type: stdio
    cmd: uvx
    args: ["watch-skill"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "watch-skill": {
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "watch-skill": {
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `watch-skill.cordis.yml  →  dsh web --patch ./watch-skill.cordis.yml`

```yaml
- insert:
    - id: mcp-watch-skill
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: watch-skill
        transport: stdio
        command: uvx
        args: ["watch-skill"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="claude-code-organizer-mcp"></a>

### Organize Claude Code configuration

[mcpware/claude-code-organizer](https://github.com/mcpware/claude-code-organizer) — `MCP server` · ★ 379 · License: MIT · Works with: All clients

Organizes Claude Code memories, skills, MCP servers, commands, and agents via drag-and-drop.

**Alternatives:**

- [mcptoon](https://github.com/activeing123/mcptoon) (★ 202) — Zero-dependency MCP client keeping one synced config across agents, with compact tool listings.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio claude-code-organizer -- npx -y @mcpware/claude-code-organizer
```

**Codex CLI**

```bash
codex mcp add claude-code-organizer -- npx -y @mcpware/claude-code-organizer
```

**Gemini CLI**

```bash
gemini mcp add claude-code-organizer npx -y @mcpware/claude-code-organizer
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "claude-code-organizer": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "claude-code-organizer": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
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
    "claude-code-organizer": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@mcpware/claude-code-organizer"
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
    "claude-code-organizer": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "claude-code-organizer": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "claude-code-organizer": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  claude-code-organizer:
    type: stdio
    cmd: npx
    args: ["-y","@mcpware/claude-code-organizer"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "claude-code-organizer": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "claude-code-organizer": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `claude-code-organizer.cordis.yml  →  dsh web --patch ./claude-code-organizer.cordis.yml`

```yaml
- insert:
    - id: mcp-claude-code-organizer
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: claude-code-organizer
        transport: stdio
        command: npx
        args: ["-y","@mcpware/claude-code-organizer"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="visualtorch-mcp"></a>

### PyTorch architecture diagrams

[VisualTorch](https://github.com/willyfh/visualtorch) — `MCP server` · ★ 332 · License: MIT · Works with: All clients

Renders PyTorch model architecture diagrams and animated GIF reveals from a trusted model source.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio visualtorch -- uvx visualtorch
```

**Codex CLI**

```bash
codex mcp add visualtorch -- uvx visualtorch
```

**Gemini CLI**

```bash
gemini mcp add visualtorch uvx visualtorch
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "visualtorch": {
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "visualtorch": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "visualtorch"
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
    "visualtorch": {
      "type": "local",
      "command": [
        "uvx",
        "visualtorch"
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
    "visualtorch": {
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "visualtorch": {
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "visualtorch": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  visualtorch:
    type: stdio
    cmd: uvx
    args: ["visualtorch"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "visualtorch": {
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "visualtorch": {
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `visualtorch.cordis.yml  →  dsh web --patch ./visualtorch.cordis.yml`

```yaml
- insert:
    - id: mcp-visualtorch
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: visualtorch
        transport: stdio
        command: uvx
        args: ["visualtorch"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="stata-mcp"></a>

### Stata regression analysis

[SepineTam/stata-mcp](https://github.com/SepineTam/stata-mcp) — `MCP server` · ★ 260 · License: AGPL-3.0 · Works with: All clients

Lets an LLM help run regression analysis with Stata.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio stata-mcp -- uvx stata-mcp
```

**Codex CLI**

```bash
codex mcp add stata-mcp -- uvx stata-mcp
```

**Gemini CLI**

```bash
gemini mcp add stata-mcp uvx stata-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "stata-mcp": {
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "stata-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "stata-mcp"
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
    "stata-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "stata-mcp"
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
    "stata-mcp": {
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "stata-mcp": {
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "stata-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  stata-mcp:
    type: stdio
    cmd: uvx
    args: ["stata-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "stata-mcp": {
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "stata-mcp": {
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `stata-mcp.cordis.yml  →  dsh web --patch ./stata-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-stata-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: stata-mcp
        transport: stdio
        command: uvx
        args: ["stata-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="blatui-mcp"></a>

### shadcn/ui components for Laravel Blade

[anousss007/blatui](https://github.com/anousss007/blatui) — `MCP server` · ★ 252 · License: see repo · Works with: All clients

shadcn/ui for Laravel Blade: discover, read, and install BlatUI components, blocks, and charts.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http blatui https://blatui.remix-it.com/mcp
```

**Codex CLI**

```bash
codex mcp add blatui --url https://blatui.remix-it.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http blatui https://blatui.remix-it.com/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "blatui": {
      "url": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "blatui": {
      "type": "http",
      "url": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "blatui": {
      "type": "remote",
      "url": "https://blatui.remix-it.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "blatui": {
      "type": "streamableHttp",
      "url": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "blatui": {
      "serverUrl": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "blatui": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://blatui.remix-it.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  blatui:
    type: streamable_http
    uri: https://blatui.remix-it.com/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "blatui": {
      "type": "streamable-http",
      "url": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "blatui": {
      "type": "streamable-http",
      "url": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `blatui.cordis.yml  →  dsh web --patch ./blatui.cordis.yml`

```yaml
- insert:
    - id: mcp-blatui
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: blatui
        transport: streamable-http
        url: https://blatui.remix-it.com/mcp
```

</details>

<a id="vscode-demo-time-mcp"></a>

### Build presentations with Demo Time

[estruyf/vscode-demo-time](https://github.com/estruyf/vscode-demo-time) — `MCP server` · ★ 246 · License: see repo · Works with: All clients

Lets AI assistants interact with the Demo Time VS Code extension to help build presentations and demos.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio vscode-demo-time -- npx -y @demotime/mcp
```

**Codex CLI**

```bash
codex mcp add vscode-demo-time -- npx -y @demotime/mcp
```

**Gemini CLI**

```bash
gemini mcp add vscode-demo-time npx -y @demotime/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "vscode-demo-time": {
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "vscode-demo-time": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
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
    "vscode-demo-time": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@demotime/mcp"
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
    "vscode-demo-time": {
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "vscode-demo-time": {
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "vscode-demo-time": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  vscode-demo-time:
    type: stdio
    cmd: npx
    args: ["-y","@demotime/mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "vscode-demo-time": {
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "vscode-demo-time": {
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `vscode-demo-time.cordis.yml  →  dsh web --patch ./vscode-demo-time.cordis.yml`

```yaml
- insert:
    - id: mcp-vscode-demo-time
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: vscode-demo-time
        transport: stdio
        command: npx
        args: ["-y","@demotime/mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-data-agent"></a>

### AI database connection and SQL

[omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) — `Native plugin` · ★ 196 · License: MIT · Works with: DeepSeek Harness only

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

[xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) — `Native plugin` · ★ 117 · License: MIT · Works with: DeepSeek Harness only

Backs up, exports, imports, and migrates a whole DSH config: settings, plugins, MCP, skills, workspaces. Secrets are excluded by default or AES-256-GCM encrypted if enabled. Imports preview first with rollback; profiles hold multiple setups; remote sync via a Git repo.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xiajiajun516/dsh-config-manager
```

</details>

<a id="dsh-dsh-remote-flymysql"></a>

### Manage multiple SSH workspaces

[flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) — `Native plugin` · ★ 90 · License: MIT · Works with: DeepSeek Harness only

Manages many SSH hosts as workspaces: pick a local or remote workspace from the native Add-workspace flow, mirror a remote workspace to a real local folder, and operate it with rw_* tools; a centered picker modal auto-fills / for remote paths with live directory completion.

**Alternatives:**

- [caoyiwei850/dsh-ssh-ops](https://github.com/caoyiwei850/dsh-ssh-ops) (★ 21) — Adds an SSH ops terminal that drives a connected server from the main conversation, with an interactive xterm.js terminal alongside it

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

[literaf/dsh-ai4scholar](https://github.com/literaf/dsh-ai4scholar) — `Native plugin` · ★ 27 · License: MIT · Works with: DeepSeek Harness only

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

<a id="dsh-dsh-zotero"></a>

### Zotero evidence store for agents

[Vncntvx/dsh-zotero](https://github.com/Vncntvx/dsh-zotero) — `Native plugin` · ★ 21 · License: MIT · Works with: DeepSeek Harness only

Uses Zotero as an evidence store for agents: searches your library, inspects metadata and notes, retrieves evidence passages, opens source PDFs, and generates citations and bibliographies.

**Alternatives:**

- [STARDUSTLC666/dsh-cite](https://github.com/STARDUSTLC666/dsh-cite) (★ 2) — Works without a Zotero library: exact DOI lookup, Crossref search, multi-style citation formatting, BibTeX generation, and DOI validation

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Vncntvx/dsh-zotero
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

[PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) — `Native plugin` · ★ 19 · License: Apache-2.0 · Works with: DeepSeek Harness only

LSP action surface for DSH: diagnostics, formatting, completion, code actions, symbols, signature help, inlay hints, and rename, all backed by real language servers.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-lsp-actions
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

<a id="dsh-dsh-auxiliary"></a>

### Auxiliary model routing tools

[dsh-plugins/dsh-auxiliary](https://github.com/dsh-plugins/dsh-auxiliary) — `Native plugin` · ★ 10 · License: LGPL-3.0 · Works with: DeepSeek Harness only

Provides dedicated model routes, tools, and system guidance for vision, compaction, reviews, subagents, titles, and image generation.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dsh-plugins/dsh-auxiliary
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

<a id="openbrand-mcp"></a>

### Brand asset extraction

[OpenBrand](https://github.com/ethanjyx/openbrand/tree/main/mcp) — `MCP server` · License: MIT · Works with: All clients

Extracts brand assets (logos, colors, backdrop images, brand name) from any website URL; needs an OPENBRAND_API_KEY.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio openbrand --env OPENBRAND_API_KEY='<OPENBRAND_API_KEY>' -- npx -y openbrand-mcp
```

**Codex CLI**

```bash
codex mcp add openbrand --env OPENBRAND_API_KEY='<OPENBRAND_API_KEY>' -- npx -y openbrand-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e OPENBRAND_API_KEY='<OPENBRAND_API_KEY>' openbrand npx -y openbrand-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "openbrand": {
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "openbrand": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "openbrand": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "openbrand-mcp"
      ],
      "enabled": true,
      "environment": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "openbrand": {
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "openbrand": {
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "openbrand": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  openbrand:
    type: stdio
    cmd: npx
    args: ["-y","openbrand-mcp"]
    envs:
      OPENBRAND_API_KEY: "<OPENBRAND_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "openbrand": {
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "openbrand": {
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `openbrand.cordis.yml  →  dsh web --patch ./openbrand.cordis.yml`

```yaml
- insert:
    - id: mcp-openbrand
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: openbrand
        transport: stdio
        command: npx
        args: ["-y","openbrand-mcp"]
        env: {"OPENBRAND_API_KEY":"<OPENBRAND_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="tldraw-mcp-app"></a>

### Collaborative drawing canvas

[tldraw/tldraw](https://github.com/tldraw/tldraw/tree/main/apps/mcp-app) — `MCP server` · License: see repo · Works with: All clients

Draws and visually collaborates with agents on tldraw's shared canvas.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http tldraw https://tldraw-mcp-app.tldraw.workers.dev/mcp
```

**Codex CLI**

```bash
codex mcp add tldraw --url https://tldraw-mcp-app.tldraw.workers.dev/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http tldraw https://tldraw-mcp-app.tldraw.workers.dev/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "tldraw": {
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "tldraw": {
      "type": "http",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "tldraw": {
      "type": "remote",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "tldraw": {
      "type": "streamableHttp",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "tldraw": {
      "serverUrl": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "tldraw": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  tldraw:
    type: streamable_http
    uri: https://tldraw-mcp-app.tldraw.workers.dev/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "tldraw": {
      "type": "streamable-http",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "tldraw": {
      "type": "streamable-http",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `tldraw.cordis.yml  →  dsh web --patch ./tldraw.cordis.yml`

```yaml
- insert:
    - id: mcp-tldraw
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: tldraw
        transport: streamable-http
        url: https://tldraw-mcp-app.tldraw.workers.dev/mcp
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
