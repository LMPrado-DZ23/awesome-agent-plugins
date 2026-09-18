# Development & Runtime

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Storybook agent skills](#storybook) — Storybook, the industry-standard workshop for building and testing UI components in isolation, ships Agent Ski…
- [Front-End Checklist skills](#front-end-checklist) — Hundreds of granular front-end best-practice checks (accessibility, performance, SEO, security) packaged as in…
- [CopilotKit frontend agent stack](#copilotkit) — Frontend framework for building agent-facing UIs and generative UI across React, Angular, mobile and Slack, ma…
- [HeroUI React component skills](#heroui) — Official skills from the HeroUI (formerly NextUI) React component library covering migration, React Native usa…
- [FastMCP](#fastmcp) — Pythonic framework for building MCP servers and clients with decorators, auth, proxying and testing utilities.
- [Google product skills](#google-skills) — Marketplace of Agent Skills covering Google products and technologies, for grounding coding agents in Google-s…
- [Compile code and inspect assembly](#compiler-explorer-mcp) — Compiles code with thousands of compilers, inspects the generated assembly, and shares godbolt.org links.
- [Generate API tests from traffic](#keploy-mcp) — End-to-end API testing: generates and runs tests from OpenAPI, curl, Postman, or real user traffic; needs an A…
- [Lightweight Charts skills](#lightweight-charts) — Official skills for TradingView's HTML5-canvas financial charting library, covering core chart usage and autho…
- [GSAP animation skills](#gsap-skills) — Official AI skills for GSAP (GreenSock Animation Platform) teaching coding agents correct animation patterns, …
- [Hugging Face ecosystem skills](#huggingface-skills) — Agent Skills that give coding agents access to the Hugging Face ecosystem: models, datasets and Hub workflows.
- [MCP Inspector](#mcp-inspector) — Visual testing tool for MCP servers: connect over stdio or HTTP, list and call tools, resources and prompts. R…
- [Google Stitch design skills](#stitch-skills) — Official Agent Skills library for Google's Stitch MCP server, covering code-to-design, design generation, desi…
- [Hot-reload plugins without restart](#dsh-dsh-routing-suite) — Runtime injector for DSH plugin packages: inject, hot-reload, unload, promote and self-heal routes, plus a set…
- [Xcode project and simulator control](#xcodebuildmcp) — Provides tools for Xcode project management, simulator management, and app utilities.
- [Anthony Fu's JS ecosystem skills](#antfu-skills) — Curated skill collection from a well-known open-source maintainer covering Vite, Vue, Nuxt, Pinia, Vitest, Vue…
- [.NET / C# agent skills](#dotnet-skills) — Official skills repository to assist AI coding agents with .NET and C# development conventions and tooling.
- [SwiftUI agent skill](#swiftui-agent-skill) — Agent skill that teaches Claude Code, Codex and other AI tools SwiftUI best practices for building iOS/macOS i…
- [Anti-Slop TypeScript lint rules](#anti-slop) — Single skill installing opinionated Oxlint rules that reject low-evidence, low-quality TypeScript and JavaScri…
- [Builder.io agent skills](#builderio-skills) — Official Agent Skills published by Builder.io for driving its visual headless CMS and site-building platform f…
- [Gemini API & SDK skills](#gemini-skills) — Official skills for the Gemini API, SDK and model/agent interactions, maintained under the Google Gemini organ…
- [NVIDIA agent skills](#nvidia-skills) — Official NVIDIA Agent Skills for coding agents covering physical AI, robotics, simulation, CUDA and RAG workfl…
- [Go agentic skills collection](#cc-skills-golang) — Collection of Golang-focused agentic skills for coding agents, packaged as a Gemini CLI extension.
- [SwiftUI recipes for iOS apps](#shipswift-mcp) — 40+ production-ready SwiftUI recipes for building full-stack iOS apps.
- [Microsoft SDK skills & agents](#microsoft-skills) — Skills, MCP servers, custom agents and Agents.md files that ground coding agents in Microsoft SDKs and platfor…
- [Vue 3 agent skills](#vuejs-ai-skills) — Official agent skills for Vue 3 development, maintained under the Vue.js organization.
- [Awesome design style skills](#awesome-design-skills) — 67 DESIGN.md/SKILL.md files, each encoding a distinct visual design style (brutalism, claymorphism, cyberpunk,…
- [Software design classics skills](#agent-rules-books) — Skills distilling classic software engineering books into agent guidance: Clean Code, Clean Architecture, Refa…
- [Expo agent skills](#expo-skills) — Official collection of AI agent skills for working with Expo projects and Expo Application Services (EAS).
- [Apify agent skills](#apify-agent-skills) — Official collection of Apify agent skills for building and running web scraping and automation actors.
- [PortalJS data portal skills](#portaljs) — AI-native framework by Datopian for building data portals: scaffold a full portal from a brief and load datase…
- [WordPress official agent skills](#agent-skills) — Official WordPress skills giving AI coding assistants expert-level knowledge of blocks, themes, plugins, the A…
- [iOS/macOS dev control from a native app](#blitz-mac-mcp) — Gives AI agents control over iOS/macOS development through a native macOS app with 30+ tools.
- [Universal motion design skill](#motion-design-skill) — Official LottieFiles skill encoding universal motion design principles - timing, easing and choreography adapt…
- [Manage test workflows via Kubernetes](#testkube-mcp) — Manages test workflows, executions, and artifacts on Kubernetes via AI assistants; needs a TK_ACCESS_TOKEN.
- [React Native agent skills](#callstackincubator-agent-skills) — Collection of agent-optimized React Native skills for AI coding assistants, maintained by Callstack.
- [Windows crash dump analysis](#mcp-windbg) — Analyzes Windows crash dumps using WinDbg/CDB.
- [Paper-to-code skill](#paper2code) — Focused agent skill that turns any arXiv paper into a working code implementation.
- [Microsoft Hypervelocity Engineering](#hve-core) — Microsoft's own collection of engineering skills, prompts and agents covering accessibility, code review, data…
- [Connect AI models to ROS robots](#ros-mcp-server) — Connects AI models to ROS robots for robotics development.
- [Nx monorepo tooling](#nx-console-mcp) — Official server implementation for Nx, bringing monorepo tooling context to AI agents.
- [Sandboxed LLM code execution](#llm-sandbox-mcp) — Securely runs LLM-generated code in isolated containers, across 7 languages and 3 container backends.
- [Unreal Engine 5 automation](#unreal-mcp) — 23 tools for Unreal Engine 5 game development automation.
- [Sentry MCP](#sentry-mcp) — Query Sentry issues, events, traces and releases from the agent; OAuth sign-in on the remote endpoint.
- [Next.js development tools](#next-devtools-mcp) — Next.js development tools server with stdio transport.
- [Public tunnels for localhost services](#rustunnel-mcp) — Gives agents public HTTPS/TCP/UDP URLs for any localhost service; open source and self-hostable.
- [Control TouchDesigner projects](#touchdesigner-mcp) — Controls and operates TouchDesigner projects through AI agents.
- [Godot 4.x engine control](#godot-mcp) — Full Godot 4.x engine control with 165 tools for AI-driven game development.
- [Universal CPU profiler](#uniprof-mcp) — A universal CPU profiler designed to be used by both humans and AI agents.
- [AI-powered E2E testing, 10 platforms](#flutter-skill-mcp) — AI-powered end-to-end testing for 10 platforms with 253 tools, requiring no test code.
- [RStudio AI assistant connection](#clauder-mcp) — Connects RStudio to AI assistants for interactive R coding and data analysis.
- [All-in-one DSH distribution bundle](#dsh-oh-dsh) — Community distribution that bundles the TUI, desktop app and Web UI together as one package with layered insta…
- [Full Postman platform access](#postman-mcp-server) — Official server giving AI agents trusted access to the full Postman platform; needs a POSTMAN_API_KEY.
- [Expose GraphQL operations as tools](#apollo-mcp-server) — Official Apollo server that exposes GraphQL operations as tools for AI models.
- [Website QA audits](#squirrelscan-mcp) — Website QA for coding agents: audits SEO, performance, security, and accessibility.
- [LLM app tracing and evaluation](#opik-mcp) — Interacts with Opik prompts, traces, datasets, and metrics for LLM application debugging; needs an OPIK_API_KE…
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
- [Inspect and drive Flutter apps](#mcp-flutter-mcp-server-dart) — Inspects and drives Flutter debug apps and games with semantic snapshots, search, and custom client tools.
- [Inspect image buffers in debug sessions](#openimagedebugger-oidmcp) — Gives AI agents visibility into OpenImageDebugger buffers during live gdb/lldb sessions.
- [Mobile crash root-cause analysis](#measure-mcp) — Helps get to the root cause of mobile app crashes, errors, and slow traces.
- [Sentry error monitoring](#sentry-mcp-mcp-server) — Error monitoring, issue tracking, and debugging for AI assistants via Sentry; needs a SENTRY_ACCESS_TOKEN.
- [Tauri v2 app development](#mcp-server-tauri-mcp-server) — Server for use with Tauri v2 desktop applications.
- [Unity Engine AI control](#unity-mcp-unity-mcp-server) — Server and plugin for making 3D games in Unity Engine with AI, covering the Unity Editor and Unity games.
- [Validate oh-my-posh configs](#oh-my-posh-mcp) — Validates oh-my-posh configurations and segment snippets against the official schema.
- [Virtual sandboxed workspace mounts](#dsh-mirage-dsh) — Swaps the filesystem and shell providers for virtual mounts (RAM, S3, Redis, Slack, Gmail, Notion, Postgres) w…

<a id="storybook"></a>

### Storybook agent skills

[storybookjs/storybook](https://github.com/storybookjs/storybook) — `Agent Skills` · ★ 91k · License: MIT · Works with: All clients

Storybook, the industry-standard workshop for building and testing UI components in isolation, ships Agent Skills that teach coding agents to use it.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add storybookjs/storybook -a claude-code -g
```

**Codex CLI**

```bash
npx skills add storybookjs/storybook -a codex -g
```

**Gemini CLI**

```bash
npx skills add storybookjs/storybook -a gemini-cli -g
```

**Cursor**

```bash
npx skills add storybookjs/storybook -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add storybookjs/storybook -a github-copilot -g
```

**OpenCode**

```bash
npx skills add storybookjs/storybook -a opencode -g
```

**Cline**

```bash
npx skills add storybookjs/storybook -a cline -g
```

**Windsurf**

```bash
npx skills add storybookjs/storybook -a windsurf -g
```

**Zed**

```bash
npx skills add storybookjs/storybook -a zed -g
```

**Goose**

```bash
npx skills add storybookjs/storybook -a goose -g
```

**Kiro**

```bash
npx skills add storybookjs/storybook -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add storybookjs/storybook -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add storybookjs/storybook -a universal
```

</details>

<a id="front-end-checklist"></a>

### Front-End Checklist skills

[thedaviddias/Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist) — `Agent Skills` · ★ 74k · License: see repo · Works with: All clients

Hundreds of granular front-end best-practice checks (accessibility, performance, SEO, security) packaged as individual skills for humans and AI coding agents.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add thedaviddias/Front-End-Checklist -a claude-code -g
```

**Codex CLI**

```bash
npx skills add thedaviddias/Front-End-Checklist -a codex -g
```

**Gemini CLI**

```bash
npx skills add thedaviddias/Front-End-Checklist -a gemini-cli -g
```

**Cursor**

```bash
npx skills add thedaviddias/Front-End-Checklist -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add thedaviddias/Front-End-Checklist -a github-copilot -g
```

**OpenCode**

```bash
npx skills add thedaviddias/Front-End-Checklist -a opencode -g
```

**Cline**

```bash
npx skills add thedaviddias/Front-End-Checklist -a cline -g
```

**Windsurf**

```bash
npx skills add thedaviddias/Front-End-Checklist -a windsurf -g
```

**Zed**

```bash
npx skills add thedaviddias/Front-End-Checklist -a zed -g
```

**Goose**

```bash
npx skills add thedaviddias/Front-End-Checklist -a goose -g
```

**Kiro**

```bash
npx skills add thedaviddias/Front-End-Checklist -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add thedaviddias/Front-End-Checklist -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add thedaviddias/Front-End-Checklist -a universal
```

</details>

<a id="copilotkit"></a>

### CopilotKit frontend agent stack

[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) — `Agent Skills` · ★ 37k · License: MIT · Works with: All clients

Frontend framework for building agent-facing UIs and generative UI across React, Angular, mobile and Slack, maker of the AG-UI protocol; ships with agent skills.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add CopilotKit/CopilotKit -a claude-code -g
```

**Codex CLI**

```bash
npx skills add CopilotKit/CopilotKit -a codex -g
```

**Gemini CLI**

```bash
npx skills add CopilotKit/CopilotKit -a gemini-cli -g
```

**Cursor**

```bash
npx skills add CopilotKit/CopilotKit -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add CopilotKit/CopilotKit -a github-copilot -g
```

**OpenCode**

```bash
npx skills add CopilotKit/CopilotKit -a opencode -g
```

**Cline**

```bash
npx skills add CopilotKit/CopilotKit -a cline -g
```

**Windsurf**

```bash
npx skills add CopilotKit/CopilotKit -a windsurf -g
```

**Zed**

```bash
npx skills add CopilotKit/CopilotKit -a zed -g
```

**Goose**

```bash
npx skills add CopilotKit/CopilotKit -a goose -g
```

**Kiro**

```bash
npx skills add CopilotKit/CopilotKit -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add CopilotKit/CopilotKit -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add CopilotKit/CopilotKit -a universal
```

</details>

<a id="heroui"></a>

### HeroUI React component skills

[heroui-inc/heroui](https://github.com/heroui-inc/heroui) — `Agent Skills` · ★ 31k · License: Apache-2.0 · Works with: All clients

Official skills from the HeroUI (formerly NextUI) React component library covering migration, React Native usage and general React integration.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add heroui-inc/heroui -a claude-code -g
```

**Codex CLI**

```bash
npx skills add heroui-inc/heroui -a codex -g
```

**Gemini CLI**

```bash
npx skills add heroui-inc/heroui -a gemini-cli -g
```

**Cursor**

```bash
npx skills add heroui-inc/heroui -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add heroui-inc/heroui -a github-copilot -g
```

**OpenCode**

```bash
npx skills add heroui-inc/heroui -a opencode -g
```

**Cline**

```bash
npx skills add heroui-inc/heroui -a cline -g
```

**Windsurf**

```bash
npx skills add heroui-inc/heroui -a windsurf -g
```

**Zed**

```bash
npx skills add heroui-inc/heroui -a zed -g
```

**Goose**

```bash
npx skills add heroui-inc/heroui -a goose -g
```

**Kiro**

```bash
npx skills add heroui-inc/heroui -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add heroui-inc/heroui -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add heroui-inc/heroui -a universal
```

</details>

<a id="fastmcp"></a>

### FastMCP

[FastMCP](https://github.com/PrefectHQ/fastmcp) — `Developer tool` · ★ 28k · License: Apache-2.0 · Works with: —

Pythonic framework for building MCP servers and clients with decorators, auth, proxying and testing utilities.

<a id="google-skills"></a>

### Google product skills

[google/skills](https://github.com/google/skills) — `Agent Skills` · ★ 20k · License: Apache-2.0 · Works with: All clients

Marketplace of Agent Skills covering Google products and technologies, for grounding coding agents in Google-specific APIs and workflows.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add google/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add google/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add google/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add google/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add google/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add google/skills -a opencode -g
```

**Cline**

```bash
npx skills add google/skills -a cline -g
```

**Windsurf**

```bash
npx skills add google/skills -a windsurf -g
```

**Zed**

```bash
npx skills add google/skills -a zed -g
```

**Goose**

```bash
npx skills add google/skills -a goose -g
```

**Kiro**

```bash
npx skills add google/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add google/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add google/skills -a universal
```

</details>

<a id="compiler-explorer-mcp"></a>

### Compile code and inspect assembly

[Compiler Explorer](https://github.com/compiler-explorer/compiler-explorer) — `MCP server` · ★ 19k · License: BSD-2-Clause · Works with: All clients

Compiles code with thousands of compilers, inspects the generated assembly, and shares godbolt.org links.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http compiler-explorer https://godbolt.org/mcp
```

**Codex CLI**

```bash
codex mcp add compiler-explorer --url https://godbolt.org/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http compiler-explorer https://godbolt.org/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "compiler-explorer": {
      "url": "https://godbolt.org/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "compiler-explorer": {
      "type": "http",
      "url": "https://godbolt.org/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "compiler-explorer": {
      "type": "remote",
      "url": "https://godbolt.org/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "compiler-explorer": {
      "type": "streamableHttp",
      "url": "https://godbolt.org/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "compiler-explorer": {
      "serverUrl": "https://godbolt.org/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "compiler-explorer": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://godbolt.org/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  compiler-explorer:
    type: streamable_http
    uri: https://godbolt.org/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "compiler-explorer": {
      "type": "streamable-http",
      "url": "https://godbolt.org/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "compiler-explorer": {
      "type": "streamable-http",
      "url": "https://godbolt.org/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `compiler-explorer.cordis.yml  →  dsh web --patch ./compiler-explorer.cordis.yml`

```yaml
- insert:
    - id: mcp-compiler-explorer
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: compiler-explorer
        transport: streamable-http
        url: https://godbolt.org/mcp
```

</details>

<a id="keploy-mcp"></a>

### Generate API tests from traffic

[Keploy](https://github.com/keploy/keploy) — `MCP server` · ★ 18k · License: Apache-2.0 · Works with: All clients

End-to-end API testing: generates and runs tests from OpenAPI, curl, Postman, or real user traffic; needs an Authorization token.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://api.keploy.io/client/v1/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — File: `~/.codex/config.toml`

```toml
[mcp_servers.mcp]
url = "https://api.keploy.io/client/v1/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://api.keploy.io/client/v1/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://api.keploy.io/client/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
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
      "url": "https://api.keploy.io/client/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
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
    "mcp": {
      "type": "remote",
      "url": "https://api.keploy.io/client/v1/mcp",
      "enabled": true,
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
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
      "url": "https://api.keploy.io/client/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://api.keploy.io/client/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
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
        "https://api.keploy.io/client/v1/mcp",
        "--header",
        "Authorization:Bearer <API_TOKEN>"
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
    uri: https://api.keploy.io/client/v1/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://api.keploy.io/client/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
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
      "url": "https://api.keploy.io/client/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
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
        url: https://api.keploy.io/client/v1/mcp
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="lightweight-charts"></a>

### Lightweight Charts skills

[tradingview/lightweight-charts](https://github.com/tradingview/lightweight-charts) — `Agent Skills` · ★ 17k · License: Apache-2.0 · Works with: All clients

Official skills for TradingView's HTML5-canvas financial charting library, covering core chart usage and authoring custom chart plugins.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add tradingview/lightweight-charts -a claude-code -g
```

**Codex CLI**

```bash
npx skills add tradingview/lightweight-charts -a codex -g
```

**Gemini CLI**

```bash
npx skills add tradingview/lightweight-charts -a gemini-cli -g
```

**Cursor**

```bash
npx skills add tradingview/lightweight-charts -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add tradingview/lightweight-charts -a github-copilot -g
```

**OpenCode**

```bash
npx skills add tradingview/lightweight-charts -a opencode -g
```

**Cline**

```bash
npx skills add tradingview/lightweight-charts -a cline -g
```

**Windsurf**

```bash
npx skills add tradingview/lightweight-charts -a windsurf -g
```

**Zed**

```bash
npx skills add tradingview/lightweight-charts -a zed -g
```

**Goose**

```bash
npx skills add tradingview/lightweight-charts -a goose -g
```

**Kiro**

```bash
npx skills add tradingview/lightweight-charts -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add tradingview/lightweight-charts -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add tradingview/lightweight-charts -a universal
```

</details>

<a id="gsap-skills"></a>

### GSAP animation skills

[greensock/gsap-skills](https://github.com/greensock/gsap-skills) — `Agent Skills` · ★ 15k · License: MIT · Works with: All clients

Official AI skills for GSAP (GreenSock Animation Platform) teaching coding agents correct animation patterns, plugin usage and best practices.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add greensock/gsap-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add greensock/gsap-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add greensock/gsap-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add greensock/gsap-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add greensock/gsap-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add greensock/gsap-skills -a opencode -g
```

**Cline**

```bash
npx skills add greensock/gsap-skills -a cline -g
```

**Windsurf**

```bash
npx skills add greensock/gsap-skills -a windsurf -g
```

**Zed**

```bash
npx skills add greensock/gsap-skills -a zed -g
```

**Goose**

```bash
npx skills add greensock/gsap-skills -a goose -g
```

**Kiro**

```bash
npx skills add greensock/gsap-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add greensock/gsap-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add greensock/gsap-skills -a universal
```

</details>

<a id="huggingface-skills"></a>

### Hugging Face ecosystem skills

[huggingface/skills](https://github.com/huggingface/skills) — `Agent Skills` · ★ 11k · License: Apache-2.0 · Works with: All clients

Agent Skills that give coding agents access to the Hugging Face ecosystem: models, datasets and Hub workflows.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add huggingface/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add huggingface/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add huggingface/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add huggingface/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add huggingface/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add huggingface/skills -a opencode -g
```

**Cline**

```bash
npx skills add huggingface/skills -a cline -g
```

**Windsurf**

```bash
npx skills add huggingface/skills -a windsurf -g
```

**Zed**

```bash
npx skills add huggingface/skills -a zed -g
```

**Goose**

```bash
npx skills add huggingface/skills -a goose -g
```

**Kiro**

```bash
npx skills add huggingface/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add huggingface/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add huggingface/skills -a universal
```

</details>

<a id="mcp-inspector"></a>

### MCP Inspector

[MCP Inspector](https://github.com/modelcontextprotocol/inspector) — `Developer tool` · ★ 11k · License: see repo · Works with: —

Visual testing tool for MCP servers: connect over stdio or HTTP, list and call tools, resources and prompts. Run with `npx @modelcontextprotocol/inspector`.

<a id="stitch-skills"></a>

### Google Stitch design skills

[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) — `Agent Skills` · ★ 8.3k · License: Apache-2.0 · Works with: All clients

Official Agent Skills library for Google's Stitch MCP server, covering code-to-design, design generation, design-system management and React/shadcn component export.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add google-labs-code/stitch-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add google-labs-code/stitch-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add google-labs-code/stitch-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add google-labs-code/stitch-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add google-labs-code/stitch-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add google-labs-code/stitch-skills -a opencode -g
```

**Cline**

```bash
npx skills add google-labs-code/stitch-skills -a cline -g
```

**Windsurf**

```bash
npx skills add google-labs-code/stitch-skills -a windsurf -g
```

**Zed**

```bash
npx skills add google-labs-code/stitch-skills -a zed -g
```

**Goose**

```bash
npx skills add google-labs-code/stitch-skills -a goose -g
```

**Kiro**

```bash
npx skills add google-labs-code/stitch-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add google-labs-code/stitch-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add google-labs-code/stitch-skills -a universal
```

</details>

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

<a id="xcodebuildmcp"></a>

### Xcode project and simulator control

[cameroncooke/XcodeBuildMCP](https://github.com/cameroncooke/XcodeBuildMCP) — `MCP server` · ★ 6.4k · License: MIT · Works with: All clients

Provides tools for Xcode project management, simulator management, and app utilities.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio xcodebuildmcp -- npx -y xcodebuildmcp
```

**Codex CLI**

```bash
codex mcp add xcodebuildmcp -- npx -y xcodebuildmcp
```

**Gemini CLI**

```bash
gemini mcp add xcodebuildmcp npx -y xcodebuildmcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "xcodebuildmcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
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
    "xcodebuildmcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "xcodebuildmcp"
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
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "xcodebuildmcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  xcodebuildmcp:
    type: stdio
    cmd: npx
    args: ["-y","xcodebuildmcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `xcodebuildmcp.cordis.yml  →  dsh web --patch ./xcodebuildmcp.cordis.yml`

```yaml
- insert:
    - id: mcp-xcodebuildmcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: xcodebuildmcp
        transport: stdio
        command: npx
        args: ["-y","xcodebuildmcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="antfu-skills"></a>

### Anthony Fu's JS ecosystem skills

[antfu/skills](https://github.com/antfu/skills) — `Agent Skills` · ★ 5.9k · License: MIT · Works with: All clients

Curated skill collection from a well-known open-source maintainer covering Vite, Vue, Nuxt, Pinia, Vitest, VueUse, UnoCSS, pnpm and other modern JS tooling.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add antfu/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add antfu/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add antfu/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add antfu/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add antfu/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add antfu/skills -a opencode -g
```

**Cline**

```bash
npx skills add antfu/skills -a cline -g
```

**Windsurf**

```bash
npx skills add antfu/skills -a windsurf -g
```

**Zed**

```bash
npx skills add antfu/skills -a zed -g
```

**Goose**

```bash
npx skills add antfu/skills -a goose -g
```

**Kiro**

```bash
npx skills add antfu/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add antfu/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add antfu/skills -a universal
```

</details>

<a id="dotnet-skills"></a>

### .NET / C# agent skills

[dotnet/skills](https://github.com/dotnet/skills) — `Agent Skills` · ★ 5.4k · License: MIT · Works with: All clients

Official skills repository to assist AI coding agents with .NET and C# development conventions and tooling.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add dotnet/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add dotnet/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add dotnet/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add dotnet/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add dotnet/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add dotnet/skills -a opencode -g
```

**Cline**

```bash
npx skills add dotnet/skills -a cline -g
```

**Windsurf**

```bash
npx skills add dotnet/skills -a windsurf -g
```

**Zed**

```bash
npx skills add dotnet/skills -a zed -g
```

**Goose**

```bash
npx skills add dotnet/skills -a goose -g
```

**Kiro**

```bash
npx skills add dotnet/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add dotnet/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add dotnet/skills -a universal
```

</details>

<a id="swiftui-agent-skill"></a>

### SwiftUI agent skill

[twostraws/SwiftUI-Agent-Skill](https://github.com/twostraws/SwiftUI-Agent-Skill) — `Agent Skills` · ★ 4.8k · License: MIT · Works with: All clients

Agent skill that teaches Claude Code, Codex and other AI tools SwiftUI best practices for building iOS/macOS interfaces.

**Alternatives:**

- [AvdLee/SwiftUI-Agent-Skill](https://github.com/AvdLee/SwiftUI-Agent-Skill) (★ 3.6k) — Same SwiftUI best-practices skill, maintained independently by a different author.
- [AvdLee/Swift-Concurrency-Agent-Skill](https://github.com/AvdLee/Swift-Concurrency-Agent-Skill) (★ 1.7k) — Companion skill focused on Swift Concurrency: safe concurrency patterns, performance and Swift 6 migration guidance.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a claude-code -g
```

**Codex CLI**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a codex -g
```

**Gemini CLI**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a gemini-cli -g
```

**Cursor**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a github-copilot -g
```

**OpenCode**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a opencode -g
```

**Cline**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a cline -g
```

**Windsurf**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a windsurf -g
```

**Zed**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a zed -g
```

**Goose**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a goose -g
```

**Kiro**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a universal
```

</details>

<a id="anti-slop"></a>

### Anti-Slop TypeScript lint rules

[dmmulroy/anti-slop](https://github.com/dmmulroy/anti-slop) — `Agent Skills` · ★ 4.6k · License: MIT · Works with: All clients

Single skill installing opinionated Oxlint rules that reject low-evidence, low-quality TypeScript and JavaScript patterns commonly produced by AI code generation.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add dmmulroy/anti-slop -a claude-code -g
```

**Codex CLI**

```bash
npx skills add dmmulroy/anti-slop -a codex -g
```

**Gemini CLI**

```bash
npx skills add dmmulroy/anti-slop -a gemini-cli -g
```

**Cursor**

```bash
npx skills add dmmulroy/anti-slop -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add dmmulroy/anti-slop -a github-copilot -g
```

**OpenCode**

```bash
npx skills add dmmulroy/anti-slop -a opencode -g
```

**Cline**

```bash
npx skills add dmmulroy/anti-slop -a cline -g
```

**Windsurf**

```bash
npx skills add dmmulroy/anti-slop -a windsurf -g
```

**Zed**

```bash
npx skills add dmmulroy/anti-slop -a zed -g
```

**Goose**

```bash
npx skills add dmmulroy/anti-slop -a goose -g
```

**Kiro**

```bash
npx skills add dmmulroy/anti-slop -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add dmmulroy/anti-slop -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add dmmulroy/anti-slop -a universal
```

</details>

<a id="builderio-skills"></a>

### Builder.io agent skills

[BuilderIO/skills](https://github.com/BuilderIO/skills) — `Agent Skills` · ★ 4.3k · License: MIT · Works with: All clients

Official Agent Skills published by Builder.io for driving its visual headless CMS and site-building platform from a coding agent.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add BuilderIO/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add BuilderIO/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add BuilderIO/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add BuilderIO/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add BuilderIO/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add BuilderIO/skills -a opencode -g
```

**Cline**

```bash
npx skills add BuilderIO/skills -a cline -g
```

**Windsurf**

```bash
npx skills add BuilderIO/skills -a windsurf -g
```

**Zed**

```bash
npx skills add BuilderIO/skills -a zed -g
```

**Goose**

```bash
npx skills add BuilderIO/skills -a goose -g
```

**Kiro**

```bash
npx skills add BuilderIO/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add BuilderIO/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add BuilderIO/skills -a universal
```

</details>

<a id="gemini-skills"></a>

### Gemini API & SDK skills

[google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills) — `Agent Skills` · ★ 4.2k · License: Apache-2.0 · Works with: All clients

Official skills for the Gemini API, SDK and model/agent interactions, maintained under the Google Gemini organization.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add google-gemini/gemini-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add google-gemini/gemini-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add google-gemini/gemini-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add google-gemini/gemini-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add google-gemini/gemini-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add google-gemini/gemini-skills -a opencode -g
```

**Cline**

```bash
npx skills add google-gemini/gemini-skills -a cline -g
```

**Windsurf**

```bash
npx skills add google-gemini/gemini-skills -a windsurf -g
```

**Zed**

```bash
npx skills add google-gemini/gemini-skills -a zed -g
```

**Goose**

```bash
npx skills add google-gemini/gemini-skills -a goose -g
```

**Kiro**

```bash
npx skills add google-gemini/gemini-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add google-gemini/gemini-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add google-gemini/gemini-skills -a universal
```

</details>

<a id="nvidia-skills"></a>

### NVIDIA agent skills

[NVIDIA/skills](https://github.com/NVIDIA/skills) — `Agent Skills` · ★ 3.3k · License: Apache-2.0 · Works with: All clients

Official NVIDIA Agent Skills for coding agents covering physical AI, robotics, simulation, CUDA and RAG workflows end to end.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add NVIDIA/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add NVIDIA/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add NVIDIA/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add NVIDIA/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add NVIDIA/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add NVIDIA/skills -a opencode -g
```

**Cline**

```bash
npx skills add NVIDIA/skills -a cline -g
```

**Windsurf**

```bash
npx skills add NVIDIA/skills -a windsurf -g
```

**Zed**

```bash
npx skills add NVIDIA/skills -a zed -g
```

**Goose**

```bash
npx skills add NVIDIA/skills -a goose -g
```

**Kiro**

```bash
npx skills add NVIDIA/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add NVIDIA/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add NVIDIA/skills -a universal
```

</details>

<a id="cc-skills-golang"></a>

### Go agentic skills collection

[samber/cc-skills-golang](https://github.com/samber/cc-skills-golang) — `Native plugin` · ★ 3.3k · License: MIT · Works with: Gemini CLI only

Collection of Golang-focused agentic skills for coding agents, packaged as a Gemini CLI extension.

<details><summary>Install</summary>

**Gemini CLI**

```bash
gemini extensions install https://github.com/samber/cc-skills-golang
```

</details>

<a id="shipswift-mcp"></a>

### SwiftUI recipes for iOS apps

[ShipSwift](https://github.com/signerlabs/ShipSwift) — `MCP server` · ★ 3.2k · License: MIT · Works with: All clients

40+ production-ready SwiftUI recipes for building full-stack iOS apps.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http shipswift https://api.shipswift.app/mcp
```

**Codex CLI**

```bash
codex mcp add shipswift --url https://api.shipswift.app/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http shipswift https://api.shipswift.app/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "shipswift": {
      "url": "https://api.shipswift.app/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "shipswift": {
      "type": "http",
      "url": "https://api.shipswift.app/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "shipswift": {
      "type": "remote",
      "url": "https://api.shipswift.app/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "shipswift": {
      "type": "streamableHttp",
      "url": "https://api.shipswift.app/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "shipswift": {
      "serverUrl": "https://api.shipswift.app/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "shipswift": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.shipswift.app/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  shipswift:
    type: streamable_http
    uri: https://api.shipswift.app/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "shipswift": {
      "type": "streamable-http",
      "url": "https://api.shipswift.app/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "shipswift": {
      "type": "streamable-http",
      "url": "https://api.shipswift.app/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `shipswift.cordis.yml  →  dsh web --patch ./shipswift.cordis.yml`

```yaml
- insert:
    - id: mcp-shipswift
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: shipswift
        transport: streamable-http
        url: https://api.shipswift.app/mcp
```

</details>

<a id="microsoft-skills"></a>

### Microsoft SDK skills & agents

[microsoft/skills](https://github.com/microsoft/skills) — `Agent Skills` · ★ 3.0k · License: MIT · Works with: All clients

Skills, MCP servers, custom agents and Agents.md files that ground coding agents in Microsoft SDKs and platforms.

**Alternatives:**

- [microsoft/azure-skills](https://github.com/microsoft/azure-skills) (★ 1.5k) — Same idea narrowed to Azure: skills plus MCP server configs for Azure-specific scenarios.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add microsoft/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add microsoft/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add microsoft/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add microsoft/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add microsoft/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add microsoft/skills -a opencode -g
```

**Cline**

```bash
npx skills add microsoft/skills -a cline -g
```

**Windsurf**

```bash
npx skills add microsoft/skills -a windsurf -g
```

**Zed**

```bash
npx skills add microsoft/skills -a zed -g
```

**Goose**

```bash
npx skills add microsoft/skills -a goose -g
```

**Kiro**

```bash
npx skills add microsoft/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add microsoft/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add microsoft/skills -a universal
```

</details>

<a id="vuejs-ai-skills"></a>

### Vue 3 agent skills

[vuejs-ai/skills](https://github.com/vuejs-ai/skills) — `Agent Skills` · ★ 2.9k · License: MIT · Works with: All clients

Official agent skills for Vue 3 development, maintained under the Vue.js organization.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add vuejs-ai/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add vuejs-ai/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add vuejs-ai/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add vuejs-ai/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add vuejs-ai/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add vuejs-ai/skills -a opencode -g
```

**Cline**

```bash
npx skills add vuejs-ai/skills -a cline -g
```

**Windsurf**

```bash
npx skills add vuejs-ai/skills -a windsurf -g
```

**Zed**

```bash
npx skills add vuejs-ai/skills -a zed -g
```

**Goose**

```bash
npx skills add vuejs-ai/skills -a goose -g
```

**Kiro**

```bash
npx skills add vuejs-ai/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add vuejs-ai/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add vuejs-ai/skills -a universal
```

</details>

<a id="awesome-design-skills"></a>

### Awesome design style skills

[bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills) — `Agent Skills` · ★ 2.8k · License: MIT · Works with: All clients

67 DESIGN.md/SKILL.md files, each encoding a distinct visual design style (brutalism, claymorphism, cyberpunk, corporate, and more), for agentic UI generation tools.

**Alternatives:**

- [MengTo/Skills](https://github.com/MengTo/Skills) (★ 6.1k) — Broader designer/builder skill set adding 3D asset and procedural-graphics skills.
- [Nutlope/hallmark](https://github.com/Nutlope/hallmark) (★ 29k) — Single opinionated skill specifically aimed at rejecting generic 'AI slop' visual design.
- [JimLiu/baoyu-design](https://github.com/JimLiu/baoyu-design) (★ 4.1k) — Runs a Claude-Design-like flow locally to produce polished mockups, decks and wireframes.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add bergside/awesome-design-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add bergside/awesome-design-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add bergside/awesome-design-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add bergside/awesome-design-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add bergside/awesome-design-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add bergside/awesome-design-skills -a opencode -g
```

**Cline**

```bash
npx skills add bergside/awesome-design-skills -a cline -g
```

**Windsurf**

```bash
npx skills add bergside/awesome-design-skills -a windsurf -g
```

**Zed**

```bash
npx skills add bergside/awesome-design-skills -a zed -g
```

**Goose**

```bash
npx skills add bergside/awesome-design-skills -a goose -g
```

**Kiro**

```bash
npx skills add bergside/awesome-design-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add bergside/awesome-design-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add bergside/awesome-design-skills -a universal
```

</details>

<a id="agent-rules-books"></a>

### Software design classics skills

[ciembor/agent-rules-books](https://github.com/ciembor/agent-rules-books) — `Agent Skills` · ★ 2.8k · License: MIT · Works with: All clients

Skills distilling classic software engineering books into agent guidance: Clean Code, Clean Architecture, Refactoring, Domain-Driven Design and Designing Data-Intensive Applications.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add ciembor/agent-rules-books -a claude-code -g
```

**Codex CLI**

```bash
npx skills add ciembor/agent-rules-books -a codex -g
```

**Gemini CLI**

```bash
npx skills add ciembor/agent-rules-books -a gemini-cli -g
```

**Cursor**

```bash
npx skills add ciembor/agent-rules-books -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add ciembor/agent-rules-books -a github-copilot -g
```

**OpenCode**

```bash
npx skills add ciembor/agent-rules-books -a opencode -g
```

**Cline**

```bash
npx skills add ciembor/agent-rules-books -a cline -g
```

**Windsurf**

```bash
npx skills add ciembor/agent-rules-books -a windsurf -g
```

**Zed**

```bash
npx skills add ciembor/agent-rules-books -a zed -g
```

**Goose**

```bash
npx skills add ciembor/agent-rules-books -a goose -g
```

**Kiro**

```bash
npx skills add ciembor/agent-rules-books -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add ciembor/agent-rules-books -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add ciembor/agent-rules-books -a universal
```

</details>

<a id="expo-skills"></a>

### Expo agent skills

[expo/skills](https://github.com/expo/skills) — `Agent Skills` · ★ 2.6k · License: MIT · Works with: All clients

Official collection of AI agent skills for working with Expo projects and Expo Application Services (EAS).

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add expo/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add expo/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add expo/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add expo/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add expo/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add expo/skills -a opencode -g
```

**Cline**

```bash
npx skills add expo/skills -a cline -g
```

**Windsurf**

```bash
npx skills add expo/skills -a windsurf -g
```

**Zed**

```bash
npx skills add expo/skills -a zed -g
```

**Goose**

```bash
npx skills add expo/skills -a goose -g
```

**Kiro**

```bash
npx skills add expo/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add expo/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add expo/skills -a universal
```

</details>

<a id="apify-agent-skills"></a>

### Apify agent skills

[apify/agent-skills](https://github.com/apify/agent-skills) — `Agent Skills` · ★ 2.4k · License: see repo · Works with: All clients

Official collection of Apify agent skills for building and running web scraping and automation actors.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add apify/agent-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add apify/agent-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add apify/agent-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add apify/agent-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add apify/agent-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add apify/agent-skills -a opencode -g
```

**Cline**

```bash
npx skills add apify/agent-skills -a cline -g
```

**Windsurf**

```bash
npx skills add apify/agent-skills -a windsurf -g
```

**Zed**

```bash
npx skills add apify/agent-skills -a zed -g
```

**Goose**

```bash
npx skills add apify/agent-skills -a goose -g
```

**Kiro**

```bash
npx skills add apify/agent-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add apify/agent-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add apify/agent-skills -a universal
```

</details>

<a id="portaljs"></a>

### PortalJS data portal skills

[datopian/portaljs](https://github.com/datopian/portaljs) — `Agent Skills` · ★ 2.4k · License: MIT · Works with: All clients

AI-native framework by Datopian for building data portals: scaffold a full portal from a brief and load datasets in minutes, with agentic skills for CKAN, GitHub or Frictionless backends.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add datopian/portaljs -a claude-code -g
```

**Codex CLI**

```bash
npx skills add datopian/portaljs -a codex -g
```

**Gemini CLI**

```bash
npx skills add datopian/portaljs -a gemini-cli -g
```

**Cursor**

```bash
npx skills add datopian/portaljs -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add datopian/portaljs -a github-copilot -g
```

**OpenCode**

```bash
npx skills add datopian/portaljs -a opencode -g
```

**Cline**

```bash
npx skills add datopian/portaljs -a cline -g
```

**Windsurf**

```bash
npx skills add datopian/portaljs -a windsurf -g
```

**Zed**

```bash
npx skills add datopian/portaljs -a zed -g
```

**Goose**

```bash
npx skills add datopian/portaljs -a goose -g
```

**Kiro**

```bash
npx skills add datopian/portaljs -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add datopian/portaljs -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add datopian/portaljs -a universal
```

</details>

<a id="agent-skills"></a>

### WordPress official agent skills

[WordPress/agent-skills](https://github.com/WordPress/agent-skills) — `Agent Skills` · ★ 2.2k · License: see repo · Works with: All clients

Official WordPress skills giving AI coding assistants expert-level knowledge of blocks, themes, plugins, the Abilities API and WordPress performance/security best practices.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add WordPress/agent-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add WordPress/agent-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add WordPress/agent-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add WordPress/agent-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add WordPress/agent-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add WordPress/agent-skills -a opencode -g
```

**Cline**

```bash
npx skills add WordPress/agent-skills -a cline -g
```

**Windsurf**

```bash
npx skills add WordPress/agent-skills -a windsurf -g
```

**Zed**

```bash
npx skills add WordPress/agent-skills -a zed -g
```

**Goose**

```bash
npx skills add WordPress/agent-skills -a goose -g
```

**Kiro**

```bash
npx skills add WordPress/agent-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add WordPress/agent-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add WordPress/agent-skills -a universal
```

</details>

<a id="blitz-mac-mcp"></a>

### iOS/macOS dev control from a native app

[blitzdotdev/blitz-mac](https://github.com/blitzdotdev/blitz-mac) — `MCP server` · ★ 1.7k · License: Apache-2.0 · Works with: All clients

Gives AI agents control over iOS/macOS development through a native macOS app with 30+ tools.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio blitz -- npx -y @blitzdev/blitz-mcp
```

**Codex CLI**

```bash
codex mcp add blitz -- npx -y @blitzdev/blitz-mcp
```

**Gemini CLI**

```bash
gemini mcp add blitz npx -y @blitzdev/blitz-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "blitz": {
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "blitz": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
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
    "blitz": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@blitzdev/blitz-mcp"
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
    "blitz": {
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "blitz": {
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "blitz": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  blitz:
    type: stdio
    cmd: npx
    args: ["-y","@blitzdev/blitz-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "blitz": {
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "blitz": {
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `blitz.cordis.yml  →  dsh web --patch ./blitz.cordis.yml`

```yaml
- insert:
    - id: mcp-blitz
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: blitz
        transport: stdio
        command: npx
        args: ["-y","@blitzdev/blitz-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="motion-design-skill"></a>

### Universal motion design skill

[LottieFiles/motion-design-skill](https://github.com/LottieFiles/motion-design-skill) — `Agent Skills` · ★ 1.7k · License: MIT · Works with: All clients

Official LottieFiles skill encoding universal motion design principles - timing, easing and choreography adapted from Disney animation principles - for UI animation work.

**Alternatives:**

- [Jakubantalik/transitions.dev](https://github.com/Jakubantalik/transitions.dev) (★ 4.2k) — Focused collection of ready-made page and component transitions for web apps.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add LottieFiles/motion-design-skill -a claude-code -g
```

**Codex CLI**

```bash
npx skills add LottieFiles/motion-design-skill -a codex -g
```

**Gemini CLI**

```bash
npx skills add LottieFiles/motion-design-skill -a gemini-cli -g
```

**Cursor**

```bash
npx skills add LottieFiles/motion-design-skill -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add LottieFiles/motion-design-skill -a github-copilot -g
```

**OpenCode**

```bash
npx skills add LottieFiles/motion-design-skill -a opencode -g
```

**Cline**

```bash
npx skills add LottieFiles/motion-design-skill -a cline -g
```

**Windsurf**

```bash
npx skills add LottieFiles/motion-design-skill -a windsurf -g
```

**Zed**

```bash
npx skills add LottieFiles/motion-design-skill -a zed -g
```

**Goose**

```bash
npx skills add LottieFiles/motion-design-skill -a goose -g
```

**Kiro**

```bash
npx skills add LottieFiles/motion-design-skill -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add LottieFiles/motion-design-skill -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add LottieFiles/motion-design-skill -a universal
```

</details>

<a id="testkube-mcp"></a>

### Manage test workflows via Kubernetes

[kubeshop/testkube](https://github.com/kubeshop/testkube) — `MCP server` · ★ 1.7k · License: see repo · Works with: All clients

Manages test workflows, executions, and artifacts on Kubernetes via AI assistants; needs a TK_ACCESS_TOKEN.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio testkube-mcp --env TK_ACCESS_TOKEN='<TK_ACCESS_TOKEN>' --env TK_ORG_ID='<TK_ORG_ID>' --env TK_ENV_ID='<TK_ENV_ID>' -- docker run -i --rm -e TK_ACCESS_TOKEN -e TK_ORG_ID -e TK_ENV_ID docker.io/kubeshop/mcp-server:2.9.1
```

**Codex CLI**

```bash
codex mcp add testkube-mcp --env TK_ACCESS_TOKEN='<TK_ACCESS_TOKEN>' --env TK_ORG_ID='<TK_ORG_ID>' --env TK_ENV_ID='<TK_ENV_ID>' -- docker run -i --rm -e TK_ACCESS_TOKEN -e TK_ORG_ID -e TK_ENV_ID docker.io/kubeshop/mcp-server:2.9.1
```

**Gemini CLI**

```bash
gemini mcp add -e TK_ACCESS_TOKEN='<TK_ACCESS_TOKEN>' -e TK_ORG_ID='<TK_ORG_ID>' -e TK_ENV_ID='<TK_ENV_ID>' testkube-mcp docker run -i --rm -e TK_ACCESS_TOKEN -e TK_ORG_ID -e TK_ENV_ID docker.io/kubeshop/mcp-server:2.9.1
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "testkube-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "testkube-mcp": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
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
    "testkube-mcp": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "enabled": true,
      "environment": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "testkube-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "testkube-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "testkube-mcp": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  testkube-mcp:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","-e","TK_ACCESS_TOKEN","-e","TK_ORG_ID","-e","TK_ENV_ID","docker.io/kubeshop/mcp-server:2.9.1"]
    envs:
      TK_ACCESS_TOKEN: "<TK_ACCESS_TOKEN>"
      TK_ORG_ID: "<TK_ORG_ID>"
      TK_ENV_ID: "<TK_ENV_ID>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "testkube-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "testkube-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `testkube-mcp.cordis.yml  →  dsh web --patch ./testkube-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-testkube-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: testkube-mcp
        transport: stdio
        command: docker
        args: ["run","-i","--rm","-e","TK_ACCESS_TOKEN","-e","TK_ORG_ID","-e","TK_ENV_ID","docker.io/kubeshop/mcp-server:2.9.1"]
        env: {"TK_ACCESS_TOKEN":"<TK_ACCESS_TOKEN>","TK_ORG_ID":"<TK_ORG_ID>","TK_ENV_ID":"<TK_ENV_ID>"}
        cwd: !!js process.cwd()
```

</details>

<a id="callstackincubator-agent-skills"></a>

### React Native agent skills

[callstackincubator/agent-skills](https://github.com/callstackincubator/agent-skills) — `Agent Skills` · ★ 1.7k · License: MIT · Works with: All clients

Collection of agent-optimized React Native skills for AI coding assistants, maintained by Callstack.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add callstackincubator/agent-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add callstackincubator/agent-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add callstackincubator/agent-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add callstackincubator/agent-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add callstackincubator/agent-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add callstackincubator/agent-skills -a opencode -g
```

**Cline**

```bash
npx skills add callstackincubator/agent-skills -a cline -g
```

**Windsurf**

```bash
npx skills add callstackincubator/agent-skills -a windsurf -g
```

**Zed**

```bash
npx skills add callstackincubator/agent-skills -a zed -g
```

**Goose**

```bash
npx skills add callstackincubator/agent-skills -a goose -g
```

**Kiro**

```bash
npx skills add callstackincubator/agent-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add callstackincubator/agent-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add callstackincubator/agent-skills -a universal
```

</details>

<a id="mcp-windbg"></a>

### Windows crash dump analysis

[MCP Server for WinDbg Crash Analysis](https://github.com/svnscha/mcp-windbg) — `MCP server` · ★ 1.6k · License: MIT · Works with: All clients

Analyzes Windows crash dumps using WinDbg/CDB.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-windbg -- uvx mcp-windbg
```

**Codex CLI**

```bash
codex mcp add mcp-windbg -- uvx mcp-windbg
```

**Gemini CLI**

```bash
gemini mcp add mcp-windbg uvx mcp-windbg
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-windbg": {
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-windbg": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "mcp-windbg"
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
    "mcp-windbg": {
      "type": "local",
      "command": [
        "uvx",
        "mcp-windbg"
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
    "mcp-windbg": {
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-windbg": {
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-windbg": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-windbg:
    type: stdio
    cmd: uvx
    args: ["mcp-windbg"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-windbg": {
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-windbg": {
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `mcp-windbg.cordis.yml  →  dsh web --patch ./mcp-windbg.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-windbg
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-windbg
        transport: stdio
        command: uvx
        args: ["mcp-windbg"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="paper2code"></a>

### Paper-to-code skill

[PrathamLearnsToCode/paper2code](https://github.com/PrathamLearnsToCode/paper2code) — `Agent Skills` · ★ 1.5k · License: MIT · Works with: All clients

Focused agent skill that turns any arXiv paper into a working code implementation.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add PrathamLearnsToCode/paper2code -a claude-code -g
```

**Codex CLI**

```bash
npx skills add PrathamLearnsToCode/paper2code -a codex -g
```

**Gemini CLI**

```bash
npx skills add PrathamLearnsToCode/paper2code -a gemini-cli -g
```

**Cursor**

```bash
npx skills add PrathamLearnsToCode/paper2code -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add PrathamLearnsToCode/paper2code -a github-copilot -g
```

**OpenCode**

```bash
npx skills add PrathamLearnsToCode/paper2code -a opencode -g
```

**Cline**

```bash
npx skills add PrathamLearnsToCode/paper2code -a cline -g
```

**Windsurf**

```bash
npx skills add PrathamLearnsToCode/paper2code -a windsurf -g
```

**Zed**

```bash
npx skills add PrathamLearnsToCode/paper2code -a zed -g
```

**Goose**

```bash
npx skills add PrathamLearnsToCode/paper2code -a goose -g
```

**Kiro**

```bash
npx skills add PrathamLearnsToCode/paper2code -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add PrathamLearnsToCode/paper2code -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add PrathamLearnsToCode/paper2code -a universal
```

</details>

<a id="hve-core"></a>

### Microsoft Hypervelocity Engineering

[microsoft/hve-core](https://github.com/microsoft/hve-core) — `Agent Skills` · ★ 1.5k · License: MIT · Works with: All clients

Microsoft's own collection of engineering skills, prompts and agents covering accessibility, code review, data science foundations, DataOps and evaluation design.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add microsoft/hve-core -a claude-code -g
```

**Codex CLI**

```bash
npx skills add microsoft/hve-core -a codex -g
```

**Gemini CLI**

```bash
npx skills add microsoft/hve-core -a gemini-cli -g
```

**Cursor**

```bash
npx skills add microsoft/hve-core -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add microsoft/hve-core -a github-copilot -g
```

**OpenCode**

```bash
npx skills add microsoft/hve-core -a opencode -g
```

**Cline**

```bash
npx skills add microsoft/hve-core -a cline -g
```

**Windsurf**

```bash
npx skills add microsoft/hve-core -a windsurf -g
```

**Zed**

```bash
npx skills add microsoft/hve-core -a zed -g
```

**Goose**

```bash
npx skills add microsoft/hve-core -a goose -g
```

**Kiro**

```bash
npx skills add microsoft/hve-core -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add microsoft/hve-core -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add microsoft/hve-core -a universal
```

</details>

<a id="ros-mcp-server"></a>

### Connect AI models to ROS robots

[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server) — `MCP server` · ★ 1.5k · License: Apache-2.0 · Works with: All clients

Connects AI models to ROS robots for robotics development.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio ros-mcp-server -- uvx ros-mcp
```

**Codex CLI**

```bash
codex mcp add ros-mcp-server -- uvx ros-mcp
```

**Gemini CLI**

```bash
gemini mcp add ros-mcp-server uvx ros-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "ros-mcp-server": {
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "ros-mcp-server": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "ros-mcp"
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
    "ros-mcp-server": {
      "type": "local",
      "command": [
        "uvx",
        "ros-mcp"
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
    "ros-mcp-server": {
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "ros-mcp-server": {
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "ros-mcp-server": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  ros-mcp-server:
    type: stdio
    cmd: uvx
    args: ["ros-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "ros-mcp-server": {
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "ros-mcp-server": {
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `ros-mcp-server.cordis.yml  →  dsh web --patch ./ros-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-ros-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: ros-mcp-server
        transport: stdio
        command: uvx
        args: ["ros-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="nx-console-mcp"></a>

### Nx monorepo tooling

[nrwl/nx-console](https://github.com/nrwl/nx-console) — `MCP server` · ★ 1.4k · License: MIT · Works with: All clients

Official server implementation for Nx, bringing monorepo tooling context to AI agents.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio nx-console -- npx -y nx-mcp
```

**Codex CLI**

```bash
codex mcp add nx-console -- npx -y nx-mcp
```

**Gemini CLI**

```bash
gemini mcp add nx-console npx -y nx-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "nx-console": {
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "nx-console": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
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
    "nx-console": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "nx-mcp"
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
    "nx-console": {
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "nx-console": {
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "nx-console": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  nx-console:
    type: stdio
    cmd: npx
    args: ["-y","nx-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "nx-console": {
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "nx-console": {
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `nx-console.cordis.yml  →  dsh web --patch ./nx-console.cordis.yml`

```yaml
- insert:
    - id: mcp-nx-console
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: nx-console
        transport: stdio
        command: npx
        args: ["-y","nx-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="llm-sandbox-mcp"></a>

### Sandboxed LLM code execution

[LLM Sandbox](https://github.com/vndee/llm-sandbox) — `MCP server` · ★ 1.1k · License: MIT · Works with: All clients

Securely runs LLM-generated code in isolated containers, across 7 languages and 3 container backends.

**Alternatives:**

- [taybenlor/runno](https://github.com/taybenlor/runno) (★ 773) — Runs code in the browser-based Runno WebAssembly sandbox.
- [formulahendry/mcp-server-code-runner](https://github.com/formulahendry/mcp-server-code-runner) (★ 246) — Runs code in various programming languages via the Code Runner extension.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio llm-sandbox -- uvx llm-sandbox
```

**Codex CLI**

```bash
codex mcp add llm-sandbox -- uvx llm-sandbox
```

**Gemini CLI**

```bash
gemini mcp add llm-sandbox uvx llm-sandbox
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "llm-sandbox": {
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "llm-sandbox": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "llm-sandbox"
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
    "llm-sandbox": {
      "type": "local",
      "command": [
        "uvx",
        "llm-sandbox"
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
    "llm-sandbox": {
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "llm-sandbox": {
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "llm-sandbox": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  llm-sandbox:
    type: stdio
    cmd: uvx
    args: ["llm-sandbox"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "llm-sandbox": {
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "llm-sandbox": {
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `llm-sandbox.cordis.yml  →  dsh web --patch ./llm-sandbox.cordis.yml`

```yaml
- insert:
    - id: mcp-llm-sandbox
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: llm-sandbox
        transport: stdio
        command: uvx
        args: ["llm-sandbox"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="unreal-mcp"></a>

### Unreal Engine 5 automation

[ChiR24/Unreal_mcp](https://github.com/ChiR24/Unreal_mcp) — `MCP server` · ★ 876 · License: MIT · Works with: All clients

23 tools for Unreal Engine 5 game development automation.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio unreal-engine-mcp -- npx -y unreal-engine-mcp-server
```

**Codex CLI**

```bash
codex mcp add unreal-engine-mcp -- npx -y unreal-engine-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add unreal-engine-mcp npx -y unreal-engine-mcp-server
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "unreal-engine-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "unreal-engine-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
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
    "unreal-engine-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "unreal-engine-mcp-server"
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
    "unreal-engine-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "unreal-engine-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "unreal-engine-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  unreal-engine-mcp:
    type: stdio
    cmd: npx
    args: ["-y","unreal-engine-mcp-server"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "unreal-engine-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "unreal-engine-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `unreal-engine-mcp.cordis.yml  →  dsh web --patch ./unreal-engine-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-unreal-engine-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: unreal-engine-mcp
        transport: stdio
        command: npx
        args: ["-y","unreal-engine-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
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

<a id="next-devtools-mcp"></a>

### Next.js development tools

[vercel/next-devtools-mcp](https://github.com/vercel/next-devtools-mcp) — `MCP server` · ★ 821 · License: see repo · Works with: All clients

Next.js development tools server with stdio transport.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio next-devtools-mcp -- npx -y next-devtools-mcp
```

**Codex CLI**

```bash
codex mcp add next-devtools-mcp -- npx -y next-devtools-mcp
```

**Gemini CLI**

```bash
gemini mcp add next-devtools-mcp npx -y next-devtools-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "next-devtools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "next-devtools-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
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
    "next-devtools-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "next-devtools-mcp"
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
    "next-devtools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "next-devtools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "next-devtools-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  next-devtools-mcp:
    type: stdio
    cmd: npx
    args: ["-y","next-devtools-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "next-devtools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "next-devtools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `next-devtools-mcp.cordis.yml  →  dsh web --patch ./next-devtools-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-next-devtools-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: next-devtools-mcp
        transport: stdio
        command: npx
        args: ["-y","next-devtools-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="rustunnel-mcp"></a>

### Public tunnels for localhost services

[rustunnel](https://github.com/joaoh82/rustunnel) — `MCP server` · ★ 656 · License: AGPL-3.0 · Works with: All clients

Gives agents public HTTPS/TCP/UDP URLs for any localhost service; open source and self-hostable.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio rustunnel -- docker run -i --rm ghcr.io/joaoh82/rustunnel-mcp:0.8.5
```

**Codex CLI**

```bash
codex mcp add rustunnel -- docker run -i --rm ghcr.io/joaoh82/rustunnel-mcp:0.8.5
```

**Gemini CLI**

```bash
gemini mcp add rustunnel docker run -i --rm ghcr.io/joaoh82/rustunnel-mcp:0.8.5
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "rustunnel": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "rustunnel": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
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
    "rustunnel": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
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
    "rustunnel": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "rustunnel": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "rustunnel": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  rustunnel:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/joaoh82/rustunnel-mcp:0.8.5"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "rustunnel": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "rustunnel": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `rustunnel.cordis.yml  →  dsh web --patch ./rustunnel.cordis.yml`

```yaml
- insert:
    - id: mcp-rustunnel
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: rustunnel
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/joaoh82/rustunnel-mcp:0.8.5"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="touchdesigner-mcp"></a>

### Control TouchDesigner projects

[8beeeaaat/touchdesigner-mcp](https://github.com/8beeeaaat/touchdesigner-mcp) — `MCP server` · ★ 539 · License: MIT · Works with: All clients

Controls and operates TouchDesigner projects through AI agents.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio touchdesigner-mcp-server -- npx -y touchdesigner-mcp-server
```

**Codex CLI**

```bash
codex mcp add touchdesigner-mcp-server -- npx -y touchdesigner-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add touchdesigner-mcp-server npx -y touchdesigner-mcp-server
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "touchdesigner-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "touchdesigner-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
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
    "touchdesigner-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "touchdesigner-mcp-server"
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
    "touchdesigner-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "touchdesigner-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "touchdesigner-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  touchdesigner-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","touchdesigner-mcp-server"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "touchdesigner-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "touchdesigner-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `touchdesigner-mcp-server.cordis.yml  →  dsh web --patch ./touchdesigner-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-touchdesigner-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: touchdesigner-mcp-server
        transport: stdio
        command: npx
        args: ["-y","touchdesigner-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="godot-mcp"></a>

### Godot 4.x engine control

[Godot MCP](https://github.com/tugcantopaloglu/godot-mcp) — `MCP server` · ★ 461 · License: MIT · Works with: All clients

Full Godot 4.x engine control with 165 tools for AI-driven game development.

**Alternatives:**

- [tomyud1/godot-mcp/tree/main/mcp-server](https://github.com/tomyud1/godot-mcp/tree/main/mcp-server) — Controls the Godot editor from AI for Godot game engine integration.
- [HaD0Yun/godot-mcp](https://github.com/HaD0Yun/godot-mcp) (★ 257) — 95+ Godot Engine tools with LSP, DAP, and screenshot support.
- [Glade-tool/glade-mcp](https://github.com/Glade-tool/glade-mcp) (★ 219) — Controls both the Unity and Godot editors: scenes, scripts, physics, and materials.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio godot-mcp -- npx -y @tugcantopaloglu/godot-mcp
```

**Codex CLI**

```bash
codex mcp add godot-mcp -- npx -y @tugcantopaloglu/godot-mcp
```

**Gemini CLI**

```bash
gemini mcp add godot-mcp npx -y @tugcantopaloglu/godot-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "godot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "godot-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
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
    "godot-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@tugcantopaloglu/godot-mcp"
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
    "godot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "godot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "godot-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  godot-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@tugcantopaloglu/godot-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "godot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "godot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `godot-mcp.cordis.yml  →  dsh web --patch ./godot-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-godot-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: godot-mcp
        transport: stdio
        command: npx
        args: ["-y","@tugcantopaloglu/godot-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="uniprof-mcp"></a>

### Universal CPU profiler

[indragiek/uniprof](https://github.com/indragiek/uniprof) — `MCP server` · ★ 407 · License: MIT · Works with: All clients

A universal CPU profiler designed to be used by both humans and AI agents.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio uniprof -- npx -y uniprof
```

**Codex CLI**

```bash
codex mcp add uniprof -- npx -y uniprof
```

**Gemini CLI**

```bash
gemini mcp add uniprof npx -y uniprof
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "uniprof": {
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "uniprof": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
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
    "uniprof": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "uniprof"
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
    "uniprof": {
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "uniprof": {
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "uniprof": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  uniprof:
    type: stdio
    cmd: npx
    args: ["-y","uniprof"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "uniprof": {
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "uniprof": {
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `uniprof.cordis.yml  →  dsh web --patch ./uniprof.cordis.yml`

```yaml
- insert:
    - id: mcp-uniprof
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: uniprof
        transport: stdio
        command: npx
        args: ["-y","uniprof"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="flutter-skill-mcp"></a>

### AI-powered E2E testing, 10 platforms

[ai-dashboad/flutter-skill](https://github.com/ai-dashboad/flutter-skill) — `MCP server` · ★ 376 · License: MIT · Works with: All clients

AI-powered end-to-end testing for 10 platforms with 253 tools, requiring no test code.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio flutter-skill -- npx -y flutter-skill
```

**Codex CLI**

```bash
codex mcp add flutter-skill -- npx -y flutter-skill
```

**Gemini CLI**

```bash
gemini mcp add flutter-skill npx -y flutter-skill
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "flutter-skill": {
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "flutter-skill": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
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
    "flutter-skill": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "flutter-skill"
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
    "flutter-skill": {
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "flutter-skill": {
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "flutter-skill": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  flutter-skill:
    type: stdio
    cmd: npx
    args: ["-y","flutter-skill"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "flutter-skill": {
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "flutter-skill": {
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `flutter-skill.cordis.yml  →  dsh web --patch ./flutter-skill.cordis.yml`

```yaml
- insert:
    - id: mcp-flutter-skill
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: flutter-skill
        transport: stdio
        command: npx
        args: ["-y","flutter-skill"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="clauder-mcp"></a>

### RStudio AI assistant connection

[ClaudeR - RStudio MCP Server](https://github.com/IMNMV/ClaudeR) — `MCP server` · ★ 342 · License: see repo · Works with: All clients

Connects RStudio to AI assistants for interactive R coding and data analysis.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio clauder -- uvx clauder-mcp
```

**Codex CLI**

```bash
codex mcp add clauder -- uvx clauder-mcp
```

**Gemini CLI**

```bash
gemini mcp add clauder uvx clauder-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "clauder": {
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "clauder": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "clauder-mcp"
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
    "clauder": {
      "type": "local",
      "command": [
        "uvx",
        "clauder-mcp"
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
    "clauder": {
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "clauder": {
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "clauder": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  clauder:
    type: stdio
    cmd: uvx
    args: ["clauder-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "clauder": {
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "clauder": {
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `clauder.cordis.yml  →  dsh web --patch ./clauder.cordis.yml`

```yaml
- insert:
    - id: mcp-clauder
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: clauder
        transport: stdio
        command: uvx
        args: ["clauder-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-oh-dsh"></a>

### All-in-one DSH distribution bundle

[hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) — `Native plugin` · ★ 318 · License: MIT · Works with: DeepSeek Harness only

Community distribution that bundles the TUI, desktop app and Web UI together as one package with layered installation.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:hust-open-atom-club/oh-dsh
```

</details>

<a id="postman-mcp-server"></a>

### Full Postman platform access

[Postman MCP Server](https://github.com/postmanlabs/postman-mcp-server) — `MCP server` · ★ 316 · License: Apache-2.0 · Works with: All clients

Official server giving AI agents trusted access to the full Postman platform; needs a POSTMAN_API_KEY.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio postman-mcp-server --env POSTMAN_API_KEY='<POSTMAN_API_KEY>' -- npx -y @postman/postman-mcp-server
```

**Codex CLI**

```bash
codex mcp add postman-mcp-server --env POSTMAN_API_KEY='<POSTMAN_API_KEY>' -- npx -y @postman/postman-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e POSTMAN_API_KEY='<POSTMAN_API_KEY>' postman-mcp-server npx -y @postman/postman-mcp-server
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "postman-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "postman-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
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
    "postman-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@postman/postman-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "postman-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "postman-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "postman-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  postman-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@postman/postman-mcp-server"]
    envs:
      POSTMAN_API_KEY: "<POSTMAN_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "postman-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "postman-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `postman-mcp-server.cordis.yml  →  dsh web --patch ./postman-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-postman-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: postman-mcp-server
        transport: stdio
        command: npx
        args: ["-y","@postman/postman-mcp-server"]
        env: {"POSTMAN_API_KEY":"<POSTMAN_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="apollo-mcp-server"></a>

### Expose GraphQL operations as tools

[Apollo MCP Server](https://github.com/apollographql/apollo-mcp-server) — `MCP server` · ★ 309 · License: MIT · Works with: All clients

Official Apollo server that exposes GraphQL operations as tools for AI models.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio apollo-mcp-server -- docker run -i --rm ghcr.io/apollographql/apollo-mcp-server:v1.19.0
```

**Codex CLI**

```bash
codex mcp add apollo-mcp-server -- docker run -i --rm ghcr.io/apollographql/apollo-mcp-server:v1.19.0
```

**Gemini CLI**

```bash
gemini mcp add apollo-mcp-server docker run -i --rm ghcr.io/apollographql/apollo-mcp-server:v1.19.0
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "apollo-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "apollo-mcp-server": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
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
    "apollo-mcp-server": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
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
    "apollo-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "apollo-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "apollo-mcp-server": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  apollo-mcp-server:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/apollographql/apollo-mcp-server:v1.19.0"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "apollo-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "apollo-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `apollo-mcp-server.cordis.yml  →  dsh web --patch ./apollo-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-apollo-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: apollo-mcp-server
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/apollographql/apollo-mcp-server:v1.19.0"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="squirrelscan-mcp"></a>

### Website QA audits

[squirrelscan](https://github.com/squirrelscan/squirrelscan) — `MCP server` · ★ 268 · License: MIT · Works with: All clients

Website QA for coding agents: audits SEO, performance, security, and accessibility.

**Alternatives:**

- [priyankark/lighthouse-mcp](https://github.com/priyankark/lighthouse-mcp) (★ 208) — Google Lighthouse performance metrics for a page.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http squirrelscan https://mcp.squirrelscan.com/mcp
```

**Codex CLI**

```bash
codex mcp add squirrelscan --url https://mcp.squirrelscan.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http squirrelscan https://mcp.squirrelscan.com/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "squirrelscan": {
      "url": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "squirrelscan": {
      "type": "http",
      "url": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "squirrelscan": {
      "type": "remote",
      "url": "https://mcp.squirrelscan.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "squirrelscan": {
      "type": "streamableHttp",
      "url": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "squirrelscan": {
      "serverUrl": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "squirrelscan": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.squirrelscan.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  squirrelscan:
    type: streamable_http
    uri: https://mcp.squirrelscan.com/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "squirrelscan": {
      "type": "streamable-http",
      "url": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "squirrelscan": {
      "type": "streamable-http",
      "url": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `squirrelscan.cordis.yml  →  dsh web --patch ./squirrelscan.cordis.yml`

```yaml
- insert:
    - id: mcp-squirrelscan
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: squirrelscan
        transport: streamable-http
        url: https://mcp.squirrelscan.com/mcp
```

</details>

<a id="opik-mcp"></a>

### LLM app tracing and evaluation

[Opik MCP Server](https://github.com/comet-ml/opik-mcp) — `MCP server` · ★ 220 · License: Apache-2.0 · Works with: All clients

Interacts with Opik prompts, traces, datasets, and metrics for LLM application debugging; needs an OPIK_API_KEY.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio opik-mcp --env OPIK_API_KEY='<OPIK_API_KEY>' -- npx -y opik-mcp
```

**Codex CLI**

```bash
codex mcp add opik-mcp --env OPIK_API_KEY='<OPIK_API_KEY>' -- npx -y opik-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e OPIK_API_KEY='<OPIK_API_KEY>' opik-mcp npx -y opik-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "opik-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "opik-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
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
    "opik-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "opik-mcp"
      ],
      "enabled": true,
      "environment": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "opik-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "opik-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "opik-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  opik-mcp:
    type: stdio
    cmd: npx
    args: ["-y","opik-mcp"]
    envs:
      OPIK_API_KEY: "<OPIK_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "opik-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "opik-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `opik-mcp.cordis.yml  →  dsh web --patch ./opik-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-opik-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: opik-mcp
        transport: stdio
        command: npx
        args: ["-y","opik-mcp"]
        env: {"OPIK_API_KEY":"<OPIK_API_KEY>"}
        cwd: !!js process.cwd()
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
- [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) (★ 134) — Adds MCP server CRUD (stdio/HTTP) with connection tests, secret redaction and batch migration

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

<a id="mcp-flutter-mcp-server-dart"></a>

### Inspect and drive Flutter apps

[Flutter MCP Toolkit](https://github.com/Arenukvern/mcp_flutter/tree/main/mcp_server_dart) — `MCP server` · License: MIT · Works with: All clients

Inspects and drives Flutter debug apps and games with semantic snapshots, search, and custom client tools.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio flutter-mcp-toolkit -- docker run -i --rm ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0
```

**Codex CLI**

```bash
codex mcp add flutter-mcp-toolkit -- docker run -i --rm ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0
```

**Gemini CLI**

```bash
gemini mcp add flutter-mcp-toolkit docker run -i --rm ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "flutter-mcp-toolkit": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "flutter-mcp-toolkit": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
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
    "flutter-mcp-toolkit": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
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
    "flutter-mcp-toolkit": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "flutter-mcp-toolkit": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "flutter-mcp-toolkit": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  flutter-mcp-toolkit:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "flutter-mcp-toolkit": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "flutter-mcp-toolkit": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `flutter-mcp-toolkit.cordis.yml  →  dsh web --patch ./flutter-mcp-toolkit.cordis.yml`

```yaml
- insert:
    - id: mcp-flutter-mcp-toolkit
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: flutter-mcp-toolkit
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="openimagedebugger-oidmcp"></a>

### Inspect image buffers in debug sessions

[OpenImageDebugger MCP](https://github.com/OpenImageDebugger/OpenImageDebugger/tree/main/resources/oidmcp) — `MCP server` · License: MIT · Works with: All clients

Gives AI agents visibility into OpenImageDebugger buffers during live gdb/lldb sessions.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio oid-mcp -- uvx oid-mcp
```

**Codex CLI**

```bash
codex mcp add oid-mcp -- uvx oid-mcp
```

**Gemini CLI**

```bash
gemini mcp add oid-mcp uvx oid-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "oid-mcp": {
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "oid-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "oid-mcp"
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
    "oid-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "oid-mcp"
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
    "oid-mcp": {
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "oid-mcp": {
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "oid-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  oid-mcp:
    type: stdio
    cmd: uvx
    args: ["oid-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "oid-mcp": {
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "oid-mcp": {
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `oid-mcp.cordis.yml  →  dsh web --patch ./oid-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-oid-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: oid-mcp
        transport: stdio
        command: uvx
        args: ["oid-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="measure-mcp"></a>

### Mobile crash root-cause analysis

[Measure](https://github.com/measure-sh/measure/tree/main/backend/agent/mcp) — `MCP server` · License: Apache-2.0 · Works with: All clients

Helps get to the root cause of mobile app crashes, errors, and slow traces.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http measure https://agent.measure.sh/mcp
```

**Codex CLI**

```bash
codex mcp add measure --url https://agent.measure.sh/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http measure https://agent.measure.sh/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "measure": {
      "url": "https://agent.measure.sh/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "measure": {
      "type": "http",
      "url": "https://agent.measure.sh/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "measure": {
      "type": "remote",
      "url": "https://agent.measure.sh/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "measure": {
      "type": "streamableHttp",
      "url": "https://agent.measure.sh/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "measure": {
      "serverUrl": "https://agent.measure.sh/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "measure": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://agent.measure.sh/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  measure:
    type: streamable_http
    uri: https://agent.measure.sh/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "measure": {
      "type": "streamable-http",
      "url": "https://agent.measure.sh/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "measure": {
      "type": "streamable-http",
      "url": "https://agent.measure.sh/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `measure.cordis.yml  →  dsh web --patch ./measure.cordis.yml`

```yaml
- insert:
    - id: mcp-measure
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: measure
        transport: streamable-http
        url: https://agent.measure.sh/mcp
```

</details>

<a id="sentry-mcp-mcp-server"></a>

### Sentry error monitoring

[getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp/tree/main/packages/mcp-server) — `MCP server` · License: see repo · Works with: All clients

Error monitoring, issue tracking, and debugging for AI assistants via Sentry; needs a SENTRY_ACCESS_TOKEN.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio sentry-mcp --env SENTRY_ACCESS_TOKEN='<SENTRY_ACCESS_TOKEN>' -- npx -y @sentry/mcp-server
```

**Codex CLI**

```bash
codex mcp add sentry-mcp --env SENTRY_ACCESS_TOKEN='<SENTRY_ACCESS_TOKEN>' -- npx -y @sentry/mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e SENTRY_ACCESS_TOKEN='<SENTRY_ACCESS_TOKEN>' sentry-mcp npx -y @sentry/mcp-server
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sentry-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "sentry-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
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
    "sentry-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@sentry/mcp-server"
      ],
      "enabled": true,
      "environment": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "sentry-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "sentry-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "sentry-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  sentry-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@sentry/mcp-server"]
    envs:
      SENTRY_ACCESS_TOKEN: "<SENTRY_ACCESS_TOKEN>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sentry-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "sentry-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `sentry-mcp.cordis.yml  →  dsh web --patch ./sentry-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-sentry-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sentry-mcp
        transport: stdio
        command: npx
        args: ["-y","@sentry/mcp-server"]
        env: {"SENTRY_ACCESS_TOKEN":"<SENTRY_ACCESS_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-server-tauri-mcp-server"></a>

### Tauri v2 app development

[hypothesi/mcp-server-tauri](https://github.com/hypothesi/mcp-server-tauri/tree/main/packages/mcp-server) — `MCP server` · License: MIT · Works with: All clients

Server for use with Tauri v2 desktop applications.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-server-tauri -- npx -y @hypothesi/tauri-mcp-server
```

**Codex CLI**

```bash
codex mcp add mcp-server-tauri -- npx -y @hypothesi/tauri-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add mcp-server-tauri npx -y @hypothesi/tauri-mcp-server
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-tauri": {
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server-tauri": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
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
    "mcp-server-tauri": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@hypothesi/tauri-mcp-server"
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
    "mcp-server-tauri": {
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server-tauri": {
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-server-tauri": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server-tauri:
    type: stdio
    cmd: npx
    args: ["-y","@hypothesi/tauri-mcp-server"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-tauri": {
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server-tauri": {
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `mcp-server-tauri.cordis.yml  →  dsh web --patch ./mcp-server-tauri.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-server-tauri
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-server-tauri
        transport: stdio
        command: npx
        args: ["-y","@hypothesi/tauri-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="unity-mcp-unity-mcp-server"></a>

### Unity Engine AI control

[IvanMurzak/Unity-MCP](https://github.com/IvanMurzak/Unity-MCP/tree/main/Unity-MCP-Server) — `MCP server` · License: Apache-2.0 · Works with: All clients

Server and plugin for making 3D games in Unity Engine with AI, covering the Unity Editor and Unity games.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio unity-mcp -- docker run -i --rm docker.io/ivanmurzakdev/unity-mcp-server:0.17.1
```

**Codex CLI**

```bash
codex mcp add unity-mcp -- docker run -i --rm docker.io/ivanmurzakdev/unity-mcp-server:0.17.1
```

**Gemini CLI**

```bash
gemini mcp add unity-mcp docker run -i --rm docker.io/ivanmurzakdev/unity-mcp-server:0.17.1
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "unity-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "unity-mcp": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
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
    "unity-mcp": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
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
    "unity-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "unity-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "unity-mcp": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  unity-mcp:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "unity-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "unity-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `unity-mcp.cordis.yml  →  dsh web --patch ./unity-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-unity-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: unity-mcp
        transport: stdio
        command: docker
        args: ["run","-i","--rm","docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="oh-my-posh-mcp"></a>

### Validate oh-my-posh configs

[Oh My Posh Validator](https://github.com/JanDeDobbeleer/oh-my-posh/tree/main/website/api/mcp) — `MCP server` · License: MIT · Works with: All clients

Validates oh-my-posh configurations and segment snippets against the official schema.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http validator https://ohmyposh.dev/api/mcp
```

**Codex CLI**

```bash
codex mcp add validator --url https://ohmyposh.dev/api/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http validator https://ohmyposh.dev/api/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "validator": {
      "url": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "validator": {
      "type": "http",
      "url": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "validator": {
      "type": "remote",
      "url": "https://ohmyposh.dev/api/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "validator": {
      "type": "streamableHttp",
      "url": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "validator": {
      "serverUrl": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "validator": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://ohmyposh.dev/api/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  validator:
    type: streamable_http
    uri: https://ohmyposh.dev/api/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "validator": {
      "type": "streamable-http",
      "url": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "validator": {
      "type": "streamable-http",
      "url": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `validator.cordis.yml  →  dsh web --patch ./validator.cordis.yml`

```yaml
- insert:
    - id: mcp-validator
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: validator
        transport: streamable-http
        url: https://ohmyposh.dev/api/mcp
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
