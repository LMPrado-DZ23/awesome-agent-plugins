# UI Enhancements

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Extensible sidebar workbench](#dsh-dsh-better-sidebar) — A full sidebar workbench for DeepSeek Harness with file rendering and editing, an embedded terminal, Git integ…
- [Full-screen terminal UI](#dsh-dsh-tui) — A Claude Code-style full-screen terminal UI for DeepSeek Harness, with a pixel-whale header, a live status lin…
- [Balance and cost widget](#dsh-deepseek-balance-whale-widget) — A fixed-corner widget for the DSH web GUI showing balance, today's usage, and per-turn cost with peak/off-peak…
- [At-file composer mentions](#dsh-dsh-at-file) — Codex-style @file mentions: search workspace files from the composer and attach their contents to prompts.
- [Design preview and editing](#dsh-dsh-openpencil) — OpenPencil design preview and editing plugin for DeepSeek Harness.
- [Inline generative UI apps](#dsh-deepseek-harness-genui) — Renders code-first React and TypeScript task apps inline, in Canvas, full screen, or on localhost, keeping int…
- [Auto-resume interrupted requests](#dsh-dsh-auto-continue) — Automatically resumes interrupted DSH Web requests by sending a queued continue message after network, timeout…
- [Turn-status indicator widget](#dsh-dsh-status-rotator) — Rotates the turn-status label through 1059 bilingual phrases with typewriter output, an animated rainbow gradi…
- [Smooth streaming text rendering](#dsh-dsh-smooth-stream) — Fluid streaming rendering and smooth scrolling for the DeepSeek Harness Web UI.
- [Conversation navigation rail](#dsh-dsh-chat-timeline) — A 1:1 port of DeepSeek's official web right-side chat navigation rail: a hover-expandable rail with reading-po…
- [Searchable skill picker](#dsh-dsh-skill-picker) — A WorkBuddy-style skill picker: a button beside the composer opens a searchable list of installed skills, and …
- [Web UI localization and tweaks](#dsh-deepseek-harness-zh-pro) — UI enhancement suite for the DSH web client: completed Chinese locale, one-row usage stats, auto-expanded thin…
- [Live subagent run monitor](#dsh-dsh-subagent-monitor) — A live subagent run monitor for the Web UI: a sidebar footer trigger and a fixed top-right panel show each sub…
- [Drag-and-drop file upload](#dsh-dsh-file-upload) — Claude-style drag-and-drop and paperclip file upload with content sniffing, document-to-Markdown conversion vi…
- [Windows tray desktop shell](#dsh-dsh-desktop-windowos) — A Windows tray desktop shell for DeepSeek Harness that auto-installs and auto-updates its executable from GitH…
- [Composer input history](#dsh-dsh-composer-history) — Terminal-style input history for the web composer: edge-first arrow-key recall with exact draft and caret rest…
- [Reasoning-drift watchdog](#dsh-dsh-anchored-monitor) — Watches the reasoning fingerprint of every thinking block and pulls the model back when it slips from focused …
- [Embedded terminal panel](#dsh-dsh-plugin-terminal) — A bottom multi-tab terminal panel built with node-pty and xterm.js, pinned to the viewport bottom and always s…
- [Multi-window conversation wall](#dsh-dsh-multi-chat) — A multi-window wall for the DSH Web UI: run and monitor several conversations side by side in one screen, with…
- [Composer autocomplete and fill-ins](#dsh-opencues-integrations-dsh) — Offers word alternatives and underscore-gated fill-ins in the composer: end a line with an underscore to have …

<a id="dsh-dsh-better-sidebar"></a>

### Extensible sidebar workbench

[omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — `Native plugin` · ★ 3.7k · License: MIT · Works with: DeepSeek Harness only

A full sidebar workbench for DeepSeek Harness with file rendering and editing, an embedded terminal, Git integration, and a subagents view; third-party plugins can register their own tabs into it.

**Alternatives:**

- [MichengAI/dsh-codex-ui](https://github.com/MichengAI/dsh-codex-ui) (★ 81) — Rebuilds the sidebar, workspace tree, search, and turn navigation in a Codex-style layout instead of a tabbed workbench.
- [Jiyr0119/dsh-workspace-explorer](https://github.com/Jiyr0119/dsh-workspace-explorer) (★ 29) — Adds a single-purpose animated workspace file-tree popup you can search and drag files from directly into the composer.
- [openAGFS/dsh-agfs](https://github.com/openAGFS/dsh-agfs) (★ 2) — Serves a standalone React file-browser web app plus a browse_files tool the model can call.
- [2nd1st/dsh-plugin-open-app](https://github.com/2nd1st/dsh-plugin-open-app) (★ 7) — Gives each installed MCP app its own sidebar container with a separate workspace and session, plus inline rendering in chats.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:omdsh-dev/DSH-better-sidebar
```

</details>

<a id="dsh-dsh-tui"></a>

### Full-screen terminal UI

[ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) — `Native plugin` · ★ 3.1k · License: MIT · Works with: DeepSeek Harness only

A Claude Code-style full-screen terminal UI for DeepSeek Harness, with a pixel-whale header, a live status line, and streaming thought expansion.

**Alternatives:**

- [lk251066/dsh-tui-pro](https://github.com/lk251066/dsh-tui-pro) (★ 2) — Groups sessions by workspace project and adds a durable assistant panel plus structured thinking, tool, diff, and plan views.
- [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) (★ 198) — Imports local VS Code JSON/JSONC color themes and adds mouse text selection plus Skill/MCP browser panels.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ccch1mneyyy/dsh-TUI
```

</details>

<a id="dsh-deepseek-balance-whale-widget"></a>

### Balance and cost widget

[MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) — `Native plugin` · ★ 2.7k · License: MIT · Works with: DeepSeek Harness only

A fixed-corner widget for the DSH web GUI showing balance, today's usage, and per-turn cost with peak/off-peak pricing, editable alert bubbles, over 30 vendor templates with per-model balance and quota, and task-end sounds. Local-only, no telemetry.

**Alternatives:**

- [future007s/dsh-peak-indicator](https://github.com/future007s/dsh-peak-indicator) (★ 4) — Shows peak/off-peak status directly in the session header, with per-model token prices on hover.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MeteorNOX/DeepSeek-Balance-Whale-Widget
```

</details>

<a id="dsh-dsh-at-file"></a>

### At-file composer mentions

[omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) — `Native plugin` · ★ 512 · License: MIT · Works with: DeepSeek Harness only

Codex-style @file mentions: search workspace files from the composer and attach their contents to prompts.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:omdsh-dev/dsh-at-file
```

</details>

<a id="dsh-dsh-openpencil"></a>

### Design preview and editing

[ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) — `Native plugin` · ★ 174 · License: MIT · Works with: DeepSeek Harness only

OpenPencil design preview and editing plugin for DeepSeek Harness.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ZSeven-W/dsh-openpencil
```

</details>

<a id="dsh-deepseek-harness-genui"></a>

### Inline generative UI apps

[pengyue-polaron/deepseek-harness-genui](https://github.com/pengyue-polaron/deepseek-harness-genui) — `Native plugin` · ★ 112 · License: MIT · Works with: DeepSeek Harness only

Renders code-first React and TypeScript task apps inline, in Canvas, full screen, or on localhost, keeping interaction state available to later agent turns, with approval-gated MCP and API access.

**Alternatives:**

- [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) (★ 464) — Renders built-in widget types — layout, charts, forms, quizzes, mermaid diagrams, 3D scenes — with an action event loop back to the model.
- [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) (★ 262) — Streams sandboxed interactive HTML cards directly into the chat with a live streaming preview, instead of full React apps.
- [jiuyuechuwuhao/dsh-canvas-preview](https://github.com/jiuyuechuwuhao/dsh-canvas-preview) (★ 3) — Adds a Canvas tab that live-previews workspace HTML artifacts and exports them locally as PNG, JPG, or SVG.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:pengyue-polaron/deepseek-harness-genui
```

</details>

<a id="dsh-dsh-auto-continue"></a>

### Auto-resume interrupted requests

[HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) — `Native plugin` · ★ 103 · License: MIT · Works with: DeepSeek Harness only

Automatically resumes interrupted DSH Web requests by sending a queued continue message after network, timeout, or host-crash failures, with error classification, adaptive backoff, templated continue text, and browser notifications.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:HsiangNianian/dsh-auto-continue
```

</details>

<a id="dsh-dsh-status-rotator"></a>

### Turn-status indicator widget

[01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) — `Native plugin` · ★ 86 · License: MIT · Works with: DeepSeek Harness only

Rotates the turn-status label through 1059 bilingual phrases with typewriter output, an animated rainbow gradient, danmaku, 12 toggleable theme packs, live placeholders, and tab-title rotation.

**Alternatives:**

- [Yuuhann1999/dsh-bloub-mood](https://github.com/Yuuhann1999/dsh-bloub-mood) (★ 16) — Swaps the favicon, sidebar wordmark, and hero headline for animated mood-icon shapes that follow session state.
- [Luaphes/dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) (★ 5) — Flashes a frame badge, tab-title count, and status-colored favicon when a session needs input or just finished.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:01Virex/dsh-status-rotator
```

</details>

<a id="dsh-dsh-smooth-stream"></a>

### Smooth streaming text rendering

[Laplace-bit/dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) — `Native plugin` · ★ 74 · License: MIT · Works with: DeepSeek Harness only

Fluid streaming rendering and smooth scrolling for the DeepSeek Harness Web UI.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Laplace-bit/dsh-smooth-stream
```

</details>

<a id="dsh-dsh-chat-timeline"></a>

### Conversation navigation rail

[jjxjjjjiik-bot/dsh-chat-timeline](https://github.com/jjxjjjjiik-bot/dsh-chat-timeline) — `Native plugin` · ★ 31 · License: MIT · Works with: DeepSeek Harness only

A 1:1 port of DeepSeek's official web right-side chat navigation rail: a hover-expandable rail with reading-position highlight and click-to-jump between turns.

**Alternatives:**

- [Wine-Red/dsh-codex-timeline](https://github.com/Wine-Red/dsh-codex-timeline) (★ 8) — Adds hover previews of per-turn metrics and model-answer excerpts, plus local conversation search.
- [liliuCourier/dsh-chat-outline](https://github.com/liliuCourier/dsh-chat-outline) (★ 8) — Adds a keyword filter across turns and can jump the same position into the Trajectory view.
- [kelearns/dsh-navigation-bar](https://github.com/kelearns/dsh-navigation-bar) (★ 7) — Uses a piano-key layout with a hover ladder and message-preview tooltip instead of a plain rail.
- [houyanchao/dsh-timeline](https://github.com/houyanchao/dsh-timeline) (★ 37) — Bundles the timeline rail together with a prompt library, conversation export, and quick notes.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jjxjjjjiik-bot/dsh-chat-timeline
```

</details>

<a id="dsh-dsh-skill-picker"></a>

### Searchable skill picker

[a735624258/dsh-skill-picker](https://github.com/a735624258/dsh-skill-picker) — `Native plugin` · ★ 29 · License: MIT · Works with: DeepSeek Harness only

A WorkBuddy-style skill picker: a button beside the composer opens a searchable list of installed skills, and picking one inserts the official /skill-name gesture so the skill loads with the message.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:a735624258/dsh-skill-picker
```

</details>

<a id="dsh-deepseek-harness-zh-pro"></a>

### Web UI localization and tweaks

[magian1127/deepseek-harness-zh_pro](https://github.com/magian1127/deepseek-harness-zh_pro) — `Native plugin` · ★ 28 · License: MIT · Works with: DeepSeek Harness only

UI enhancement suite for the DSH web client: completed Chinese locale, one-row usage stats, auto-expanded thinking, adjustable chat width, session archiving and deletion, plus an optional prompt-injection switch that is off by default.

**Alternatives:**

- [wlj521/dsh-ui-tweaks](https://github.com/wlj521/dsh-ui-tweaks) (★ 18) — Adds a GitBar with branch management, per-file diffs, and commit-and-push directly from the conversation UI.
- [AcidGr/dsh-web-mobile-fix](https://github.com/AcidGr/dsh-web-mobile-fix) (★ 8) — Fixes the layout for narrow screens: full-screen settings and sidebar, one-row plugin navigation, centered popups.
- [dsh-niao/dsh-niao-quick-open](https://github.com/dsh-niao/dsh-niao-quick-open) (★ 6) — Adds one-click workspace opening (copy path, reveal in Finder, open in an auto-detected editor) and a hard-restart button.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:magian1127/deepseek-harness-zh_pro
```

</details>

<a id="dsh-dsh-subagent-monitor"></a>

### Live subagent run monitor

[Mombrane/dsh-subagent-monitor](https://github.com/Mombrane/dsh-subagent-monitor) — `Native plugin` · ★ 25 · License: MIT · Works with: DeepSeek Harness only

A live subagent run monitor for the Web UI: a sidebar footer trigger and a fixed top-right panel show each subagent of the current session in real time (running/elapsed, terminal outcomes, tree indent), with one-click jump into the child conversation.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Mombrane/dsh-subagent-monitor
```

</details>

<a id="dsh-dsh-file-upload"></a>

### Drag-and-drop file upload

[HongMing-Huang/dsh-file-upload](https://github.com/HongMing-Huang/dsh-file-upload) — `Native plugin` · ★ 24 · License: MIT · Works with: DeepSeek Harness only

Claude-style drag-and-drop and paperclip file upload with content sniffing, document-to-Markdown conversion via Microsoft MarkItDown (with a built-in JS fallback), text inlining, and a read_document tool for agents.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:HongMing-Huang/dsh-file-upload
```

</details>

<a id="dsh-dsh-desktop-windowos"></a>

### Windows tray desktop shell

[RAFOLIE/dsh-desktop-windowos](https://github.com/RAFOLIE/dsh-desktop-windowos) — `Native plugin` · ★ 22 · License: MIT · Works with: DeepSeek Harness only

A Windows tray desktop shell for DeepSeek Harness that auto-installs and auto-updates its executable from GitHub Releases, creates desktop shortcuts for the app and the web UI, and exposes a desktop_launch tool to start it from the conversation.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:RAFOLIE/dsh-desktop-windowos
```

</details>

<a id="dsh-dsh-composer-history"></a>

### Composer input history

[PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) — `Native plugin` · ★ 15 · License: Apache-2.0 · Works with: DeepSeek Harness only

Terminal-style input history for the web composer: edge-first arrow-key recall with exact draft and caret restore, browser-local persisted history, Ctrl+R reverse search, cross-session snippets, and prompt templates with variables.

**Alternatives:**

- [13071301808/dsh-composer-expand](https://github.com/13071301808/dsh-composer-expand) (★ 6) — Adds an expand/collapse toggle that grows the composer into a tall 70vh writing view for long drafts.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-composer-history
```

</details>

<a id="dsh-dsh-anchored-monitor"></a>

### Reasoning-drift watchdog

[Aik358/dsh-anchored-monitor](https://github.com/Aik358/dsh-anchored-monitor) — `Native plugin` · ★ 10 · License: MIT · Works with: DeepSeek Harness only

Watches the reasoning fingerprint of every thinking block and pulls the model back when it slips from focused 'We will / I will' mode into scattered 'let me' mode.

**Alternatives:**

- [Yuer6327/NoLetMe](https://github.com/Yuer6327/NoLetMe) (★ 8) — Shows live 'we need' versus 'let me' keyword frequency stats instead of automatically intervening on the model.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Aik358/dsh-anchored-monitor
```

</details>

<a id="dsh-dsh-plugin-terminal"></a>

### Embedded terminal panel

[siberiah2o/dsh-plugin-terminal](https://github.com/siberiah2o/dsh-plugin-terminal) — `Native plugin` · ★ 7 · License: MIT · Works with: DeepSeek Harness only

A bottom multi-tab terminal panel built with node-pty and xterm.js, pinned to the viewport bottom and always shown below the composer input box.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:siberiah2o/dsh-plugin-terminal
```

</details>

<a id="dsh-dsh-multi-chat"></a>

### Multi-window conversation wall

[daetz-coder/dsh-multi-chat](https://github.com/daetz-coder/dsh-multi-chat) — `Native plugin` · ★ 5 · License: MIT · Works with: DeepSeek Harness only

A multi-window wall for the DSH Web UI: run and monitor several conversations side by side in one screen, with auto-discovery, per-window controls, and an authenticated LAN gateway for phone or tablet access.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:daetz-coder/dsh-multi-chat
```

</details>

<a id="dsh-opencues-integrations-dsh"></a>

### Composer autocomplete and fill-ins

[opencues/opencues#integrations-dsh](https://github.com/opencues/opencues/tree/master/integrations/dsh) — `Native plugin` · License: Apache-2.0 · Works with: DeepSeek Harness only

Offers word alternatives and underscore-gated fill-ins in the composer: end a line with an underscore to have it filled, and misspellings are flagged as you type. Routes through the model DSH is already configured with, so no separate API key is needed.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:opencues/opencues#path:/integrations/dsh
```

</details>
