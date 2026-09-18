# Development & Runtime

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [FastMCP](#fastmcp) — Pythonic framework for building MCP servers and clients with decorators, auth, proxying and testing utilities.
- [MCP Inspector](#mcp-inspector) — Visual testing tool for MCP servers: connect over stdio or HTTP, list and call tools, resources and prompts. R…
- [Hot-reload plugins without restart](#dsh-dsh-routing-suite) — Runtime injector for DSH plugin packages: inject, hot-reload, unload, promote and self-heal routes, plus a set…
- [Sentry MCP](#sentry-mcp) — Query Sentry issues, events, traces and releases from the agent; OAuth sign-in on the remote endpoint.
- [All-in-one DSH distribution bundle](#dsh-oh-dsh) — Community distribution that bundles the TUI, desktop app and Web UI together as one package with layered insta…
- [MCP client runtime status panel](#dsh-dsh-mcp-panel) — Read-only runtime panel for the official DSH MCP client: shows connection status, registered tools, errors and…
- [Manage skills from a settings panel](#dsh-dsh-skills-manager) — Manages local DeepSeek Harness skills from the Settings screen and shows Agent skills shared by the team as re…
- [Diagnose and repair DSH installs](#dsh-dsh-win32) — Diagnoses and repairs DeepSeek Harness on native Windows around the official PowerShell and Workspace Write st…
- [Add WSL workspace from web GUI](#dsh-dsh-wsl-workspace) — Adds a WSL workspace from the web GUI without needing to install DSH or related tools again inside WSL. Bash c…
- [Export session traces to OTel](#dsh-dsh-plugin-loongsuite) — Converts session, agent-loop, LLM and tool lifecycle events into OpenTelemetry GenAI traces and metrics, expor…
- [Continual harness self-evolution](#dsh-dsh-continual-evolve) — Refines prompts, memory, skills and subagent specs from session trajectories into versioned, auditable, rollba…
- [Update DSH core and plugins safely](#dsh-dsh-update-checker) — Semver-aware update checks for DeepSeek Harness and every installed plugin from npm and GitHub, with a locale-…
- [Import Claude Code setup into DSH](#dsh-dsh-movein) — Imports a Claude Code setup into DeepSeek Harness via a settings screen or CLI, with dry-run previews for skil…
- [Edit global AGENTS.md from settings](#dsh-dsh-global-rules) — Edits the global ~/.dsh/AGENTS.md rules file directly from the web settings panel, saving live so every sessio…
- [Auto-log and dedupe failed calls](#dsh-dsh-fail-logger) — Automatically logs failed tool calls across native tools, PTC run_code and inline invocations, deduplicating a…
- [Search large MCP catalogs on demand](#dsh-dsh-mcp-lens) — Progressive-disclosure MCP gateway that searches large remote tool catalogs through mcp_search, then invokes t…
- [Inspect and gate builtin features](#dsh-dsh-builtin-toggles) — Evidence-backed inspector for DSH Web's built-in capabilities: reports runtime and config provenance, flags co…
- [Expose WSL web GUI over network](#dsh-dsh-wsl-expose) — Exposes the DSH Web GUI over IPv6 or IPv4 from WSL2 through a reverse proxy (Lucky). The /wan up command sets …
- [Find dead code in AI-written repos](#dsh-graphlint-integrations-dsh) — Builds a dependency graph of the codebase and finds code unreachable from any entry point, helping clean up AI…
- [Virtual sandboxed workspace mounts](#dsh-mirage-dsh) — Swaps the filesystem and shell providers for virtual mounts (RAM, S3, Redis, Slack, Gmail, Notion, Postgres) w…

<a id="fastmcp"></a>

### FastMCP

[FastMCP](https://github.com/PrefectHQ/fastmcp) — `Developer tool` · ★ 28k · License: Apache-2.0 · Works with: —

Pythonic framework for building MCP servers and clients with decorators, auth, proxying and testing utilities.

<a id="mcp-inspector"></a>

### MCP Inspector

[MCP Inspector](https://github.com/modelcontextprotocol/inspector) — `Developer tool` · ★ 11k · License: see repo · Works with: —

Visual testing tool for MCP servers: connect over stdio or HTTP, list and call tools, resources and prompts. Run with `npx @modelcontextprotocol/inspector`.

<a id="dsh-dsh-routing-suite"></a>

### Hot-reload plugins without restart

[yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) — `Native plugin` · ★ 7.2k · License: MIT · Works with: DeepSeek Harness only

Runtime injector for DSH plugin packages: inject, hot-reload, unload, promote and self-heal routes, plus a settings-page plugin manager, a reasoning-mode router preset, and a six-tool graded task-state protocol.

**Alternatives:**

- [stuarthu/dsh-hot-reload](https://github.com/stuarthu/dsh-hot-reload) (★ 1) — Reloads an upgraded plugin inside the running process and rolls back automatically if the reload fails

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:yjh051108/dsh-routing-suite
```

</details>

<a id="sentry-mcp"></a>

### Sentry MCP

[Sentry MCP](https://github.com/getsentry/sentry-mcp) — `MCP server` · ★ 858 · License: see repo · Works with: All clients

Query Sentry issues, events, traces and releases from the agent; OAuth sign-in on the remote endpoint.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp
```

**Codex CLI**

```bash
codex mcp add sentry --url https://mcp.sentry.dev/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http sentry https://mcp.sentry.dev/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sentry": {
      "url": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "sentry": {
      "type": "http",
      "url": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "sentry": {
      "type": "remote",
      "url": "https://mcp.sentry.dev/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "sentry": {
      "type": "streamableHttp",
      "url": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "sentry": {
      "serverUrl": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "sentry": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.sentry.dev/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  sentry:
    type: streamable_http
    uri: https://mcp.sentry.dev/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sentry": {
      "type": "streamable-http",
      "url": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "sentry": {
      "type": "streamable-http",
      "url": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `sentry.cordis.yml  →  dsh web --patch ./sentry.cordis.yml`

```yaml
- insert:
    - id: mcp-sentry
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sentry
        transport: streamable-http
        url: https://mcp.sentry.dev/mcp
```

</details>

<a id="dsh-oh-dsh"></a>

### All-in-one DSH distribution bundle

[hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) — `Native plugin` · ★ 317 · License: MIT · Works with: DeepSeek Harness only

Community distribution that bundles the TUI, desktop app and Web UI together as one package with layered installation.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:hust-open-atom-club/oh-dsh
```

</details>

<a id="dsh-dsh-mcp-panel"></a>

### MCP client runtime status panel

[PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) — `Native plugin` · ★ 61 · License: Apache-2.0 · Works with: DeepSeek Harness only

Read-only runtime panel for the official DSH MCP client: shows connection status, registered tools, errors and reconnect counts through the /mcp command and a Settings tab, with sanitized display and enable/disable patch suggestions.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-mcp-panel
```

</details>

<a id="dsh-dsh-skills-manager"></a>

### Manage skills from a settings panel

[MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) — `Native plugin` · ★ 57 · License: Apache-2.0 · Works with: DeepSeek Harness only

Manages local DeepSeek Harness skills from the Settings screen and shows Agent skills shared by the team as read-only entries.

**Alternatives:**

- [minivv/dsh-agent-skills](https://github.com/minivv/dsh-agent-skills) (★ 14) — Also browses and toggles skills sourced from Codex, OpenCode, Gemini and custom directories
- [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) (★ 133) — Adds MCP server CRUD (stdio/HTTP) with connection tests, secret redaction and batch migration

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MichengAI/dsh-skills-manager
```

</details>

<a id="dsh-dsh-win32"></a>

### Diagnose and repair DSH installs

[sjh9714/dsh-win32](https://github.com/sjh9714/dsh-win32) — `Native plugin` · ★ 52 · License: MIT · Works with: DeepSeek Harness only

Diagnoses and repairs DeepSeek Harness on native Windows around the official PowerShell and Workspace Write stack, creates a desktop shortcut, and keeps legacy Git Bash/BusyBox presets behind an explicit opt-in. No WSL required.

**Alternatives:**

- [moonquake2004/dsh-doctor#plugin](https://github.com/moonquake2004/dsh-doctor/tree/main/plugin) — Offline, read-only diagnostic with 19 checks across env, profile and session state plus a JSON API
- [jorinyang/dsh-doctor](https://github.com/jorinyang/dsh-doctor) (★ 4) — Graded automatic repair with one-click rollback and a runtime self-healing service
- [SaiSenBox/dsh-boot-guard](https://github.com/SaiSenBox/dsh-boot-guard) (★ 3) — Detects broken plugins at boot, skips them temporarily, and restores only its own managed changes

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:sjh9714/dsh-win32
```

</details>

<a id="dsh-dsh-wsl-workspace"></a>

### Add WSL workspace from web GUI

[6Mikao9/dsh-wsl-workspace](https://github.com/6Mikao9/dsh-wsl-workspace) — `Native plugin` · ★ 50 · License: MIT · Works with: DeepSeek Harness only

Adds a WSL workspace from the web GUI without needing to install DSH or related tools again inside WSL. Bash commands and file read/write operations run inside the local WSL distribution on the host machine, while Windows files stay accessible.

**Alternatives:**

- [WilliamShi666/dsh-wsl-workspace-picker](https://github.com/WilliamShi666/dsh-wsl-workspace-picker) (★ 0) — Adds one-click access to /mnt Windows drives, full breadcrumb ancestry, and an always-visible path input in the workspace picker

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:6Mikao9/dsh-wsl-workspace
```

</details>

<a id="dsh-dsh-plugin-loongsuite"></a>

### Export session traces to OTel

[loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) — `Native plugin` · ★ 23 · License: Apache-2.0 · Works with: DeepSeek Harness only

Converts session, agent-loop, LLM and tool lifecycle events into OpenTelemetry GenAI traces and metrics, exported over OTLP/HTTP to any compatible backend, with content capture off by default.

**Alternatives:**

- [PerryLink/dsh-observe](https://github.com/PerryLink/dsh-observe) (★ 7) — Also exports sanitized, buffered traces and metrics directly to Langfuse
- [xxiaoxiong/dsh-prometheus](https://github.com/xxiaoxiong/dsh-prometheus) (★ 1) — Exposes Prometheus metrics with a Grafana dashboard on a loopback-only endpoint by default

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:loongsuite/dsh-plugin
```

</details>

<a id="dsh-dsh-continual-evolve"></a>

### Continual harness self-evolution

[ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) — `Native plugin` · ★ 18 · License: MIT · Works with: DeepSeek Harness only

Refines prompts, memory, skills and subagent specs from session trajectories into versioned, auditable, rollback-safe harness state, with review gates and hot-reloaded skills.

**Alternatives:**

- [jasen215/dsh-continual-harness](https://github.com/jasen215/dsh-continual-harness) (★ 9) — Runs the refinement loop periodically and exposes it as a model-callable harness_refine tool

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ZK-Andy/dsh-continual-evolve
```

</details>

<a id="dsh-dsh-update-checker"></a>

### Update DSH core and plugins safely

[Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) — `Native plugin` · ★ 17 · License: MIT · Works with: DeepSeek Harness only

Semver-aware update checks for DeepSeek Harness and every installed plugin from npm and GitHub, with a locale-aware banner, one-click updates that back up and integrity-check the main program with rollback on failure, and a watchdog-guarded restart.

**Alternatives:**

- [hezhongtang/dsh-update-copilot](https://github.com/hezhongtang/dsh-update-copilot) (★ 1) — Explains what changed and how risky each update is before applying only the updates you confirm

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Airmetro/dsh-update-checker
```

</details>

<a id="dsh-dsh-movein"></a>

### Import Claude Code setup into DSH

[sjh9714/dsh-movein](https://github.com/sjh9714/dsh-movein) — `Native plugin` · ★ 13 · License: MIT · Works with: DeepSeek Harness only

Imports a Claude Code setup into DeepSeek Harness via a settings screen or CLI, with dry-run previews for skills, commands, agents, hooks, permissions and MCP config. Codex and OpenCode are supported as secondary sources with collision-safe apply.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:sjh9714/dsh-movein
```

</details>

<a id="dsh-dsh-global-rules"></a>

### Edit global AGENTS.md from settings

[badai147/dsh-global-rules](https://github.com/badai147/dsh-global-rules) — `Native plugin` · ★ 11 · License: MIT · Works with: DeepSeek Harness only

Edits the global ~/.dsh/AGENTS.md rules file directly from the web settings panel, saving live so every session on the machine picks up the change immediately.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:badai147/dsh-global-rules
```

</details>

<a id="dsh-dsh-fail-logger"></a>

### Auto-log and dedupe failed calls

[Areium/dsh-fail-logger](https://github.com/Areium/dsh-fail-logger) — `Native plugin` · ★ 9 · License: MIT · Works with: DeepSeek Harness only

Automatically logs failed tool calls across native tools, PTC run_code and inline invocations, deduplicating and counting root causes into a skill so repeated mistakes fade over time.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Areium/dsh-fail-logger
```

</details>

<a id="dsh-dsh-mcp-lens"></a>

### Search large MCP catalogs on demand

[labmimors/dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens) — `Native plugin` · ★ 9 · License: MIT · Works with: DeepSeek Harness only

Progressive-disclosure MCP gateway that searches large remote tool catalogs through mcp_search, then invokes the exact schema through mcp_call, using lazy connections and bounded caches to avoid loading every tool upfront.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:labmimors/dsh-mcp-lens
```

</details>

<a id="dsh-dsh-builtin-toggles"></a>

### Inspect and gate builtin features

[Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) — `Native plugin` · ★ 7 · License: MIT · Works with: DeepSeek Harness only

Evidence-backed inspector for DSH Web's built-in capabilities: reports runtime and config provenance, flags compatibility and drift issues, and applies fail-closed controls for nine reviewed UI features.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Starfie1d1272/dsh-builtin-toggles
```

</details>

<a id="dsh-dsh-wsl-expose"></a>

### Expose WSL web GUI over network

[jack-ranbo/dsh-wsl-expose](https://github.com/jack-ranbo/dsh-wsl-expose) — `Native plugin` · ★ 0 · License: MIT · Works with: DeepSeek Harness only

Exposes the DSH Web GUI over IPv6 or IPv4 from WSL2 through a reverse proxy (Lucky). The /wan up command sets up a socat relay, Windows portproxy, a firewall rule, and a trusted-host fence, with a Settings card and commands to configure the domain and ports.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jack-ranbo/dsh-wsl-expose
```

</details>

<a id="dsh-graphlint-integrations-dsh"></a>

### Find dead code in AI-written repos

[AngelosZou/graphlint#integrations/dsh](https://github.com/AngelosZou/graphlint/tree/main/integrations/dsh) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Builds a dependency graph of the codebase and finds code unreachable from any entry point, helping clean up AI-generated repositories; exposes graphlint_query, graphlint_build and graphlint_config tools plus a graphlint skill.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:AngelosZou/graphlint#path:/integrations/dsh
```

</details>

<a id="dsh-mirage-dsh"></a>

### Virtual sandboxed workspace mounts

[strukto-ai/mirage#dsh](https://github.com/strukto-ai/mirage/tree/main/typescript/packages/dsh) — `Native plugin` · License: Apache-2.0 · Works with: DeepSeek Harness only

Swaps the filesystem and shell providers for virtual mounts (RAM, S3, Redis, Slack, Gmail, Notion, Postgres) with per-mount read/write/exec permissions, routes commands to sandboxes (in-process or remote), and exposes installed CLIs like git and gh in the terminal.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:strukto-ai/mirage#path:/typescript/packages/dsh
```

</details>
