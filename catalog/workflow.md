# Workflow & Agents

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [DZ23 Subagents Universal MCP](#dz23-subagents) — Self-hosted MCP router that delegates text/code tasks to many models with automatic failover, parallel role-ba…
- [Multi-agent orchestration with swarms](#claude-flow-mcp) — AI orchestration with hive-mind swarms, neural networks, and 87 tools for enterprise development; needs ANTHRO…
- [AI job search operations](#career-ops) — Open-source AI job search skill: scans job portals, scores listings into a structured A-H report, tailors your…
- [OpenSpec spec-driven dev](#openspec) — Spec-driven development skill set for AI coding assistants: draft, verify, apply and archive change specs so i…
- [AI job search toolkit](#ai-job-search) — Job-search skill pack built on Claude Code: evaluates postings, tailors CVs and cover letters, searches multip…
- [OpenHuman agent harness](#openhuman) — Open-source agent harness with local-first memory, multi-agent orchestration and workflow tooling for personal…
- [Teams-first multi-agent orchestration](#oh-my-claudecode) — Teams-first multi-agent orchestration layer for Claude Code, coordinating groups of agents on a shared task.
- [Beads agent memory & task tracking](#beads) — A combined memory and task-tracking upgrade for coding agents, giving them durable state across long-running w…
- [Crash-proof file-based planning](#planning-with-files) — Persistent, file-based planning for AI coding agents and long-running tasks: crash-proof markdown plans, sessi…
- [Claude game dev studio skills](#claude-code-game-studios) — Turns Claude Code into a full game-development studio with 72 workflow skills covering design, balance checks,…
- [Compound Engineering plugin](#compound-engineering-plugin) — Official Compound Engineering plugin for Claude Code, Codex and Cursor: a methodology for agent work that comp…
- [Ralph autonomous agent loop](#ralph) — Autonomous AI agent loop that runs repeatedly against a PRD until every item on it is complete.
- [Self-reflecting agent framework](#praisonai-mcp) — AI agents framework with self-reflection and MCP support.
- [CCPM project management skill](#ccpm) — Well-known project-management skill system for coding agents that uses GitHub Issues and Git worktrees to coor…
- [Spec-driven development plugin](#conductor) — Plugin for coding agents (Antigravity, Claude Code) that enables spec-driven development: specify, plan and im…
- [Deploy durable managed agents](#omnara-mcp) — Deploys durable AI agents with Omnara, an open-source managed-agent platform.
- [Structured deep research skill](#deep-research-skills) — Structured deep-research skill for Claude Code, OpenCode and Codex with explicit human-in-the-loop control ove…
- [Multi-agent delegation skills](#delegate-skills) — Skill set for delegating a coding task to a separate coding-agent CLI (Aider, Cline, Codex, Cursor, Copilot an…
- [Multi-agent team orchestration](#dsh-dsh-agent-teams) — AgentTeams: coordinates multiple agents working together as a team on a shared task.
- [Manage agent instruction rule files](#dsh-dsh-purge) — Adds a Settings UI to edit prompt-inject.md and manage AGENTS.md or CLAUDE.md rule sets, check for plugin upda…
- [Novel-writing production workbench](#dsh-openwrite) — Novel-writing workbench for DSH with an authoring preset, outline and character management, manuscript annotat…
- [External agent runtime connector](#dsh-sandbase-harness) — Connects DSH to a local SandBase Harness runtime over stdio MCP for managing agents and sessions, streaming tu…
- [Metacognitive agent oversight](#vibe-check-mcp-server) — Metacognitive oversight for AI agents: adaptive interrupts for alignment, reflection, and safety; needs an API…
- [Execution engine with 412 modules](#flyto-core-mcp) — Execution engine for AI agents with 412 modules covering browser, file, Docker, data, and crypto tasks.
- [Route work across coding agents](#claudexor-mcp) — Routes coding work across Claude Code, Codex, Cursor, and OpenCode with shared context.
- [Native conversational image generation](#dsh-dsh-image-gen) — Native conversational image generation for DeepSeek Harness: ask the agent to create an image, and it handles …
- [Spec-driven development workflow](#mcp-server-spec-driven-development) — Facilitates spec-driven development workflows, as an alternative to unstructured vibe coding.
- [Generate project plans from prompts](#planexe-mcp) — Generates rough-draft project plans from natural-language prompts; needs an X-API-Key.
- [Replay recorded agent runs](#orcareplay-mcp) — Reads, replays, and forks recorded coding-agent runs.
- [Auditable AGI self-improvement loop](#dsh-dsh-memory) — Explores a white-box AGI architecture: a metacognitive self-cognition loop, continual learning via a knowledge…
- [Enforced workflow discipline for agents](#task-orchestrator-mcp) — Server-enforced workflow discipline for AI agents: work items, dependency graphs, and quality gates.
- [Cron-scheduled task board](#dsh-dsh-taskboard) — Task board for DSH: create tasks with project and model assignment, run them manually or on cron schedules; ne…
- [Research workbench with provenance](#dsh-dsh-science) — Claude Science-style research workbench: a ReAct research-loop engine, versioned artifacts with provenance tra…
- [Requirements and test-evidence guard](#dsh-dsh-doublecheck) — Engineering-discipline guard: a requirements grill before the first edit, red/green test-evidence gates, a for…
- [Multi-agent math verification framework](#dsh-vibe-mathematics) — Multi-agent math problem-solving and verification framework: brainstorm, solver iteration, multi-verifier deba…
- [Scheduled headless coding runs](#dsh-dsh-automation) — Runs scheduled coding tasks in isolated DeepSeek Harness sessions, managed from Settings or the agent.
- [Agent network identity (ANP)](#dsh-dsh-awiki) — Gives DSH agents native identities based on the open Agent Network Protocol (ANP), enabling identity-based dir…
- [Durable background child agents](#dsh-dsh-background-agents) — Durable background child agents on the official subagent seam: start from any session, watch progress in the w…
- [Agent governance and role bindings](#dsh-dsh-kingdom) — Agent governance for DeepSeek Harness: territories, role bindings with model or agent identity, and a plan-ass…
- [Requirements-drift runtime guard](#dsh-dsh-requirements-alignment) — Runtime requirement drift guard that keeps long-running DSH agents aligned with the user's approved goal, cons…
- [Model failover and agent orchestration](#dsh-dsh-ha-orchestrator) — Model high-availability failover (quarantine, circuit breaking, probe recovery) and subagent orchestration (fa…
- [ChatGPT account sign-in for DSH](#dsh-fn-os-apps-dsh-codex-auth-plugin) — Signs DSH in with a ChatGPT account via Codex browser OAuth, no API key needed. Subscribes the login to the Co…
- [Goal completion verification](#dsh-dsh-gungnir-dsh-plugin) — Locks a goal via /ultragoal and verifies its completion against command exit codes and generated artifacts, pr…
- [Profile-wide governance and routing](#dsh-odai-odai-dsh-plugin) — Profile-wide governance and routing with a web control center for responsibility and evidence inspection, plus…
- [Sequential Thinking (reference)](#sequential-thinking) — Structured step-by-step thinking tool: the agent records, revises and branches thoughts while solving a proble…
- [Skill-driven loop engineering agent](#dsh-mstar-harness-dsh) — Skill-driven harness and loop-engineering workflow agent plugin.

<a id="dz23-subagents"></a>

### DZ23 Subagents Universal MCP

[DZ23 Subagents Universal MCP](https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp) — `MCP server` · ★ 0 · License: MIT · Works with: All clients

Self-hosted MCP router that delegates text/code tasks to many models with automatic failover, parallel role-based subagents (architect, backend, security, QA…), consensus and mission memory shared across harnesses. Node.js 22+, no runtime dependencies.

<details><summary>Install</summary>

**Claude Code**

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```bash
claude mcp add --transport stdio dz23-subagents -- node '<DZ23_DIR>/src/index.js' --stdio
```

**Codex CLI**

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```bash
codex mcp add dz23-subagents -- node '<DZ23_DIR>/src/index.js' --stdio
```

**Gemini CLI**

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```bash
gemini mcp add dz23-subagents node '<DZ23_DIR>/src/index.js' --stdio
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "mcpServers": {
    "dz23-subagents": {
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "servers": {
    "dz23-subagents": {
      "type": "stdio",
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**OpenCode** — File: `opencode.json`

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "dz23-subagents": {
      "type": "local",
      "command": [
        "node",
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "mcpServers": {
    "dz23-subagents": {
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "mcpServers": {
    "dz23-subagents": {
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "context_servers": {
    "dz23-subagents": {
      "source": "custom",
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```yaml
extensions:
  dz23-subagents:
    type: stdio
    cmd: node
    args: ["<DZ23_DIR>/src/index.js","--stdio"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "mcpServers": {
    "dz23-subagents": {
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "mcpServers": {
    "dz23-subagents": {
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `dz23-subagents.cordis.yml  →  dsh web --patch ./dz23-subagents.cordis.yml`

Prerequisite: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```yaml
- insert:
    - id: mcp-dz23-subagents
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: dz23-subagents
        transport: stdio
        command: node
        args: ["<DZ23_DIR>/src/index.js","--stdio"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="claude-flow-mcp"></a>

### Multi-agent orchestration with swarms

[ruvnet/claude-flow](https://github.com/ruvnet/claude-flow) — `MCP server` · ★ 73k · License: MIT · Works with: All clients

AI orchestration with hive-mind swarms, neural networks, and 87 tools for enterprise development; needs ANTHROPIC_API_KEY, GITHUB_TOKEN, and FLOW_NEXUS_API_KEY.

**Alternatives:**

- [ruvnet/ruv-FANN/tree/main/ruv-swarm](https://github.com/ruvnet/ruv-FANN/tree/main/ruv-swarm) — Neural network swarm orchestration with WebAssembly acceleration.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio claude-flow --env ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' --env GITHUB_TOKEN='<GITHUB_TOKEN>' --env FLOW_NEXUS_API_KEY='<FLOW_NEXUS_API_KEY>' -- npx -y claude-flow
```

**Codex CLI**

```bash
codex mcp add claude-flow --env ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' --env GITHUB_TOKEN='<GITHUB_TOKEN>' --env FLOW_NEXUS_API_KEY='<FLOW_NEXUS_API_KEY>' -- npx -y claude-flow
```

**Gemini CLI**

```bash
gemini mcp add -e ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' -e GITHUB_TOKEN='<GITHUB_TOKEN>' -e FLOW_NEXUS_API_KEY='<FLOW_NEXUS_API_KEY>' claude-flow npx -y claude-flow
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "claude-flow": {
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "claude-flow": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
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
    "claude-flow": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "claude-flow"
      ],
      "enabled": true,
      "environment": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "claude-flow": {
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "claude-flow": {
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "claude-flow": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  claude-flow:
    type: stdio
    cmd: npx
    args: ["-y","claude-flow"]
    envs:
      ANTHROPIC_API_KEY: "<ANTHROPIC_API_KEY>"
      GITHUB_TOKEN: "<GITHUB_TOKEN>"
      FLOW_NEXUS_API_KEY: "<FLOW_NEXUS_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "claude-flow": {
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "claude-flow": {
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `claude-flow.cordis.yml  →  dsh web --patch ./claude-flow.cordis.yml`

```yaml
- insert:
    - id: mcp-claude-flow
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: claude-flow
        transport: stdio
        command: npx
        args: ["-y","claude-flow"]
        env: {"ANTHROPIC_API_KEY":"<ANTHROPIC_API_KEY>","GITHUB_TOKEN":"<GITHUB_TOKEN>","FLOW_NEXUS_API_KEY":"<FLOW_NEXUS_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="career-ops"></a>

### AI job search operations

[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) — `Agent Skills` · ★ 72k · License: MIT · Works with: All clients

Open-source AI job search skill: scans job portals, scores listings into a structured A-H report, tailors your CV and tracks applications from your coding CLI.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add career-ops-hq/career-ops -a claude-code -g
```

**Codex CLI**

```bash
npx skills add career-ops-hq/career-ops -a codex -g
```

**Gemini CLI**

```bash
npx skills add career-ops-hq/career-ops -a gemini-cli -g
```

**Cursor**

```bash
npx skills add career-ops-hq/career-ops -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add career-ops-hq/career-ops -a github-copilot -g
```

**OpenCode**

```bash
npx skills add career-ops-hq/career-ops -a opencode -g
```

**Cline**

```bash
npx skills add career-ops-hq/career-ops -a cline -g
```

**Windsurf**

```bash
npx skills add career-ops-hq/career-ops -a windsurf -g
```

**Zed**

```bash
npx skills add career-ops-hq/career-ops -a zed -g
```

**Goose**

```bash
npx skills add career-ops-hq/career-ops -a goose -g
```

**Kiro**

```bash
npx skills add career-ops-hq/career-ops -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add career-ops-hq/career-ops -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add career-ops-hq/career-ops -a universal
```

</details>

<a id="openspec"></a>

### OpenSpec spec-driven dev

[Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) — `Agent Skills` · ★ 69k · License: MIT · Works with: All clients

Spec-driven development skill set for AI coding assistants: draft, verify, apply and archive change specs so implementation always follows an approved written spec.

**Alternatives:**

- [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) (★ 53k) — Broader agile-flavored methodology with role-based agents (analyst, architect, PM, dev, UX).
- [gotalab/cc-sdd](https://github.com/gotalab/cc-sdd) (★ 3.7k) — Minimal SDD harness with per-phase skills (spec, design, tasks, review) across multiple CLI agents.
- [Gentleman-Programming/gentle-ai](https://github.com/Gentleman-Programming/gentle-ai) (★ 7.0k) — Bundles SDD alongside persistent-memory and code-review skills for several coding agents at once.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add Fission-AI/OpenSpec -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Fission-AI/OpenSpec -a codex -g
```

**Gemini CLI**

```bash
npx skills add Fission-AI/OpenSpec -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Fission-AI/OpenSpec -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Fission-AI/OpenSpec -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Fission-AI/OpenSpec -a opencode -g
```

**Cline**

```bash
npx skills add Fission-AI/OpenSpec -a cline -g
```

**Windsurf**

```bash
npx skills add Fission-AI/OpenSpec -a windsurf -g
```

**Zed**

```bash
npx skills add Fission-AI/OpenSpec -a zed -g
```

**Goose**

```bash
npx skills add Fission-AI/OpenSpec -a goose -g
```

**Kiro**

```bash
npx skills add Fission-AI/OpenSpec -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Fission-AI/OpenSpec -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Fission-AI/OpenSpec -a universal
```

</details>

<a id="ai-job-search"></a>

### AI job search toolkit

[MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) — `Agent Skills` · ★ 43k · License: MIT · Works with: All clients

Job-search skill pack built on Claude Code: evaluates postings, tailors CVs and cover letters, searches multiple job boards, and preps for interviews, all running locally.

**Alternatives:**

- [Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills) (★ 2.3k) — Adds dedicated skills for resume writing, LinkedIn optimization and offer comparison.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add MadsLorentzen/ai-job-search -a claude-code -g
```

**Codex CLI**

```bash
npx skills add MadsLorentzen/ai-job-search -a codex -g
```

**Gemini CLI**

```bash
npx skills add MadsLorentzen/ai-job-search -a gemini-cli -g
```

**Cursor**

```bash
npx skills add MadsLorentzen/ai-job-search -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add MadsLorentzen/ai-job-search -a github-copilot -g
```

**OpenCode**

```bash
npx skills add MadsLorentzen/ai-job-search -a opencode -g
```

**Cline**

```bash
npx skills add MadsLorentzen/ai-job-search -a cline -g
```

**Windsurf**

```bash
npx skills add MadsLorentzen/ai-job-search -a windsurf -g
```

**Zed**

```bash
npx skills add MadsLorentzen/ai-job-search -a zed -g
```

**Goose**

```bash
npx skills add MadsLorentzen/ai-job-search -a goose -g
```

**Kiro**

```bash
npx skills add MadsLorentzen/ai-job-search -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add MadsLorentzen/ai-job-search -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add MadsLorentzen/ai-job-search -a universal
```

</details>

<a id="openhuman"></a>

### OpenHuman agent harness

[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) — `Curated list / registry` · ★ 40k · License: GPL-3.0 · Works with: —

Open-source agent harness with local-first memory, multi-agent orchestration and workflow tooling for personal AI assistants.

<a id="oh-my-claudecode"></a>

### Teams-first multi-agent orchestration

[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) — `Agent Skills` · ★ 39k · License: MIT · Works with: All clients

Teams-first multi-agent orchestration layer for Claude Code, coordinating groups of agents on a shared task.

**Alternatives:**

- [superset-sh/superset](https://github.com/superset-sh/superset) (★ 14k) — Agentic IDE that orchestrates 100+ coding agents in parallel, each running under your own subscriptions.
- [a5c-ai/babysitter](https://github.com/a5c-ai/babysitter) (★ 1.8k) — Enforces deterministic, hallucination-resistant self-orchestration so agent workforces can manage very complex, long workflows.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a codex -g
```

**Gemini CLI**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a opencode -g
```

**Cline**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a cline -g
```

**Windsurf**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a windsurf -g
```

**Zed**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a zed -g
```

**Goose**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a goose -g
```

**Kiro**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Yeachan-Heo/oh-my-claudecode -a universal
```

</details>

<a id="beads"></a>

### Beads agent memory & task tracking

[gastownhall/beads](https://github.com/gastownhall/beads) — `Agent Skills` · ★ 27k · License: MIT · Works with: All clients

A combined memory and task-tracking upgrade for coding agents, giving them durable state across long-running work.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add gastownhall/beads -a claude-code -g
```

**Codex CLI**

```bash
npx skills add gastownhall/beads -a codex -g
```

**Gemini CLI**

```bash
npx skills add gastownhall/beads -a gemini-cli -g
```

**Cursor**

```bash
npx skills add gastownhall/beads -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add gastownhall/beads -a github-copilot -g
```

**OpenCode**

```bash
npx skills add gastownhall/beads -a opencode -g
```

**Cline**

```bash
npx skills add gastownhall/beads -a cline -g
```

**Windsurf**

```bash
npx skills add gastownhall/beads -a windsurf -g
```

**Zed**

```bash
npx skills add gastownhall/beads -a zed -g
```

**Goose**

```bash
npx skills add gastownhall/beads -a goose -g
```

**Kiro**

```bash
npx skills add gastownhall/beads -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add gastownhall/beads -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add gastownhall/beads -a universal
```

</details>

<a id="planning-with-files"></a>

### Crash-proof file-based planning

[OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) — `Agent Skills` · ★ 27k · License: MIT · Works with: All clients

Persistent, file-based planning for AI coding agents and long-running tasks: crash-proof markdown plans, session recovery after /clear or compaction, and a deterministic completion gate.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add OthmanAdi/planning-with-files -a claude-code -g
```

**Codex CLI**

```bash
npx skills add OthmanAdi/planning-with-files -a codex -g
```

**Gemini CLI**

```bash
npx skills add OthmanAdi/planning-with-files -a gemini-cli -g
```

**Cursor**

```bash
npx skills add OthmanAdi/planning-with-files -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add OthmanAdi/planning-with-files -a github-copilot -g
```

**OpenCode**

```bash
npx skills add OthmanAdi/planning-with-files -a opencode -g
```

**Cline**

```bash
npx skills add OthmanAdi/planning-with-files -a cline -g
```

**Windsurf**

```bash
npx skills add OthmanAdi/planning-with-files -a windsurf -g
```

**Zed**

```bash
npx skills add OthmanAdi/planning-with-files -a zed -g
```

**Goose**

```bash
npx skills add OthmanAdi/planning-with-files -a goose -g
```

**Kiro**

```bash
npx skills add OthmanAdi/planning-with-files -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add OthmanAdi/planning-with-files -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add OthmanAdi/planning-with-files -a universal
```

</details>

<a id="claude-code-game-studios"></a>

### Claude game dev studio skills

[Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) — `Agent Skills` · ★ 25k · License: MIT · Works with: All clients

Turns Claude Code into a full game-development studio with 72 workflow skills covering design, balance checks, asset specs, art bibles and QA, mirroring a real studio's hierarchy.

**Alternatives:**

- [majidmanzarpour/threejs-game-skills](https://github.com/majidmanzarpour/threejs-game-skills) (★ 2.1k) — Focused specifically on building playable Three.js browser games with AAA-style graphics.
- [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) (★ 4.1k) — Narrow skill for generating 2D sprite sheets, tile maps and animated GIFs from prompts.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a codex -g
```

**Gemini CLI**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a opencode -g
```

**Cline**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a cline -g
```

**Windsurf**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a windsurf -g
```

**Zed**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a zed -g
```

**Goose**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a goose -g
```

**Kiro**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Donchitos/Claude-Code-Game-Studios -a universal
```

</details>

<a id="compound-engineering-plugin"></a>

### Compound Engineering plugin

[EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) — `Agent Skills` · ★ 25k · License: MIT · Works with: All clients

Official Compound Engineering plugin for Claude Code, Codex and Cursor: a methodology for agent work that compounds gains across sessions.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add EveryInc/compound-engineering-plugin -a claude-code -g
```

**Codex CLI**

```bash
npx skills add EveryInc/compound-engineering-plugin -a codex -g
```

**Gemini CLI**

```bash
npx skills add EveryInc/compound-engineering-plugin -a gemini-cli -g
```

**Cursor**

```bash
npx skills add EveryInc/compound-engineering-plugin -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add EveryInc/compound-engineering-plugin -a github-copilot -g
```

**OpenCode**

```bash
npx skills add EveryInc/compound-engineering-plugin -a opencode -g
```

**Cline**

```bash
npx skills add EveryInc/compound-engineering-plugin -a cline -g
```

**Windsurf**

```bash
npx skills add EveryInc/compound-engineering-plugin -a windsurf -g
```

**Zed**

```bash
npx skills add EveryInc/compound-engineering-plugin -a zed -g
```

**Goose**

```bash
npx skills add EveryInc/compound-engineering-plugin -a goose -g
```

**Kiro**

```bash
npx skills add EveryInc/compound-engineering-plugin -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add EveryInc/compound-engineering-plugin -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add EveryInc/compound-engineering-plugin -a universal
```

</details>

<a id="ralph"></a>

### Ralph autonomous agent loop

[snarktank/ralph](https://github.com/snarktank/ralph) — `Agent Skills` · ★ 22k · License: MIT · Works with: All clients

Autonomous AI agent loop that runs repeatedly against a PRD until every item on it is complete.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add snarktank/ralph -a claude-code -g
```

**Codex CLI**

```bash
npx skills add snarktank/ralph -a codex -g
```

**Gemini CLI**

```bash
npx skills add snarktank/ralph -a gemini-cli -g
```

**Cursor**

```bash
npx skills add snarktank/ralph -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add snarktank/ralph -a github-copilot -g
```

**OpenCode**

```bash
npx skills add snarktank/ralph -a opencode -g
```

**Cline**

```bash
npx skills add snarktank/ralph -a cline -g
```

**Windsurf**

```bash
npx skills add snarktank/ralph -a windsurf -g
```

**Zed**

```bash
npx skills add snarktank/ralph -a zed -g
```

**Goose**

```bash
npx skills add snarktank/ralph -a goose -g
```

**Kiro**

```bash
npx skills add snarktank/ralph -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add snarktank/ralph -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add snarktank/ralph -a universal
```

</details>

<a id="praisonai-mcp"></a>

### Self-reflecting agent framework

[PraisonAI](https://github.com/MervinPraison/PraisonAI) — `MCP server` · ★ 9.1k · License: MIT · Works with: All clients

AI agents framework with self-reflection and MCP support.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio praisonai -- uvx praisonai
```

**Codex CLI**

```bash
codex mcp add praisonai -- uvx praisonai
```

**Gemini CLI**

```bash
gemini mcp add praisonai uvx praisonai
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "praisonai": {
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "praisonai": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "praisonai"
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
    "praisonai": {
      "type": "local",
      "command": [
        "uvx",
        "praisonai"
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
    "praisonai": {
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "praisonai": {
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "praisonai": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  praisonai:
    type: stdio
    cmd: uvx
    args: ["praisonai"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "praisonai": {
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "praisonai": {
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `praisonai.cordis.yml  →  dsh web --patch ./praisonai.cordis.yml`

```yaml
- insert:
    - id: mcp-praisonai
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: praisonai
        transport: stdio
        command: uvx
        args: ["praisonai"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="ccpm"></a>

### CCPM project management skill

[automazeio/ccpm](https://github.com/automazeio/ccpm) — `Agent Skills` · ★ 8.4k · License: MIT · Works with: All clients

Well-known project-management skill system for coding agents that uses GitHub Issues and Git worktrees to coordinate parallel agent execution.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add automazeio/ccpm -a claude-code -g
```

**Codex CLI**

```bash
npx skills add automazeio/ccpm -a codex -g
```

**Gemini CLI**

```bash
npx skills add automazeio/ccpm -a gemini-cli -g
```

**Cursor**

```bash
npx skills add automazeio/ccpm -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add automazeio/ccpm -a github-copilot -g
```

**OpenCode**

```bash
npx skills add automazeio/ccpm -a opencode -g
```

**Cline**

```bash
npx skills add automazeio/ccpm -a cline -g
```

**Windsurf**

```bash
npx skills add automazeio/ccpm -a windsurf -g
```

**Zed**

```bash
npx skills add automazeio/ccpm -a zed -g
```

**Goose**

```bash
npx skills add automazeio/ccpm -a goose -g
```

**Kiro**

```bash
npx skills add automazeio/ccpm -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add automazeio/ccpm -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add automazeio/ccpm -a universal
```

</details>

<a id="conductor"></a>

### Spec-driven development plugin

[gemini-cli-extensions/conductor](https://github.com/gemini-cli-extensions/conductor) — `Agent Skills` · ★ 3.7k · License: Apache-2.0 · Works with: All clients

Plugin for coding agents (Antigravity, Claude Code) that enables spec-driven development: specify, plan and implement a feature in structured steps.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add gemini-cli-extensions/conductor -a claude-code -g
```

**Codex CLI**

```bash
npx skills add gemini-cli-extensions/conductor -a codex -g
```

**Gemini CLI**

```bash
npx skills add gemini-cli-extensions/conductor -a gemini-cli -g
```

**Cursor**

```bash
npx skills add gemini-cli-extensions/conductor -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add gemini-cli-extensions/conductor -a github-copilot -g
```

**OpenCode**

```bash
npx skills add gemini-cli-extensions/conductor -a opencode -g
```

**Cline**

```bash
npx skills add gemini-cli-extensions/conductor -a cline -g
```

**Windsurf**

```bash
npx skills add gemini-cli-extensions/conductor -a windsurf -g
```

**Zed**

```bash
npx skills add gemini-cli-extensions/conductor -a zed -g
```

**Goose**

```bash
npx skills add gemini-cli-extensions/conductor -a goose -g
```

**Kiro**

```bash
npx skills add gemini-cli-extensions/conductor -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add gemini-cli-extensions/conductor -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add gemini-cli-extensions/conductor -a universal
```

</details>

<a id="omnara-mcp"></a>

### Deploy durable managed agents

[Omnara](https://github.com/omnara-ai/omnara) — `MCP server` · ★ 2.9k · License: Apache-2.0 · Works with: All clients

Deploys durable AI agents with Omnara, an open-source managed-agent platform.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http omnara https://app.omnara.com/mcp
```

**Codex CLI**

```bash
codex mcp add omnara --url https://app.omnara.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http omnara https://app.omnara.com/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "omnara": {
      "url": "https://app.omnara.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "omnara": {
      "type": "http",
      "url": "https://app.omnara.com/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "omnara": {
      "type": "remote",
      "url": "https://app.omnara.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "omnara": {
      "type": "streamableHttp",
      "url": "https://app.omnara.com/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "omnara": {
      "serverUrl": "https://app.omnara.com/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "omnara": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://app.omnara.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  omnara:
    type: streamable_http
    uri: https://app.omnara.com/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "omnara": {
      "type": "streamable-http",
      "url": "https://app.omnara.com/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "omnara": {
      "type": "streamable-http",
      "url": "https://app.omnara.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `omnara.cordis.yml  →  dsh web --patch ./omnara.cordis.yml`

```yaml
- insert:
    - id: mcp-omnara
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: omnara
        transport: streamable-http
        url: https://app.omnara.com/mcp
```

</details>

<a id="deep-research-skills"></a>

### Structured deep research skill

[Weizhena/Deep-Research-skills](https://github.com/Weizhena/Deep-Research-skills) — `Agent Skills` · ★ 2.2k · License: MIT · Works with: All clients

Structured deep-research skill for Claude Code, OpenCode and Codex with explicit human-in-the-loop control over adding fields, adding items and generating the final report.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add Weizhena/Deep-Research-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Weizhena/Deep-Research-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add Weizhena/Deep-Research-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Weizhena/Deep-Research-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Weizhena/Deep-Research-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Weizhena/Deep-Research-skills -a opencode -g
```

**Cline**

```bash
npx skills add Weizhena/Deep-Research-skills -a cline -g
```

**Windsurf**

```bash
npx skills add Weizhena/Deep-Research-skills -a windsurf -g
```

**Zed**

```bash
npx skills add Weizhena/Deep-Research-skills -a zed -g
```

**Goose**

```bash
npx skills add Weizhena/Deep-Research-skills -a goose -g
```

**Kiro**

```bash
npx skills add Weizhena/Deep-Research-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Weizhena/Deep-Research-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Weizhena/Deep-Research-skills -a universal
```

</details>

<a id="delegate-skills"></a>

### Multi-agent delegation skills

[amElnagdy/delegate-skills](https://github.com/amElnagdy/delegate-skills) — `Agent Skills` · ★ 2.1k · License: MIT · Works with: All clients

Skill set for delegating a coding task to a separate coding-agent CLI (Aider, Cline, Codex, Cursor, Copilot and more), then reviewing the diff and landing the commit yourself.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add amElnagdy/delegate-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add amElnagdy/delegate-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add amElnagdy/delegate-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add amElnagdy/delegate-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add amElnagdy/delegate-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add amElnagdy/delegate-skills -a opencode -g
```

**Cline**

```bash
npx skills add amElnagdy/delegate-skills -a cline -g
```

**Windsurf**

```bash
npx skills add amElnagdy/delegate-skills -a windsurf -g
```

**Zed**

```bash
npx skills add amElnagdy/delegate-skills -a zed -g
```

**Goose**

```bash
npx skills add amElnagdy/delegate-skills -a goose -g
```

**Kiro**

```bash
npx skills add amElnagdy/delegate-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add amElnagdy/delegate-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add amElnagdy/delegate-skills -a universal
```

</details>

<a id="dsh-dsh-agent-teams"></a>

### Multi-agent team orchestration

[NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — `Native plugin` · ★ 1.7k · License: MIT · Works with: DeepSeek Harness only

AgentTeams: coordinates multiple agents working together as a team on a shared task.

**Alternatives:**

- [stuarthu/dsh-crew](https://github.com/stuarthu/dsh-crew) (★ 6) — Adds a PM-authored PRD gate, then locked per-role tool sets for architect, engineer, QA and reviewers.
- [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) (★ 176) — Adds Settings-configured persistent squads with per-member model policies and a bounded DAG planner.
- [limuyang2/agent-team](https://github.com/limuyang2/agent-team) (★ 35) — Adds independent contexts and shared workspaces per assistant, with per-assistant models and skills.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:NanmiCoder/dsh-agent-teams
```

</details>

<a id="dsh-dsh-purge"></a>

### Manage agent instruction rule files

[YuJunZhiXue/dsh-purge](https://github.com/YuJunZhiXue/dsh-purge) — `Native plugin` · ★ 1.4k · License: MIT · Works with: DeepSeek Harness only

Adds a Settings UI to edit prompt-inject.md and manage AGENTS.md or CLAUDE.md rule sets, check for plugin updates, and apply or restore reversible local package updates.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:YuJunZhiXue/dsh-purge
```

</details>

<a id="dsh-openwrite"></a>

### Novel-writing production workbench

[LiPu-jpg/Openwrite](https://github.com/LiPu-jpg/Openwrite) — `Native plugin` · ★ 742 · License: Apache-2.0 · Works with: DeepSeek Harness only

Novel-writing workbench for DSH with an authoring preset, outline and character management, manuscript annotations, review workflows, and a managed local Python backend.

**Alternatives:**

- [EthanYoQ/AI-Novel-Writer#dsh-ai-novel-writer](https://github.com/EthanYoQ/AI-Novel-Writer/tree/master/plugins/dsh-ai-novel-writer) — Adds a compact side drawer and native approval-gated single-file changes to revisioned project assets.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add "https://github.com/LiPu-jpg/Openwrite/releases/download/v0.2.8/dsh-openwrite-0.2.8.tgz"
```

</details>

<a id="dsh-sandbase-harness"></a>

### External agent runtime connector

[sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) — `Native plugin` · ★ 646 · License: Apache-2.0 · Works with: DeepSeek Harness only

Connects DSH to a local SandBase Harness runtime over stdio MCP for managing agents and sessions, streaming turns, inspecting artifacts, and cancelling work.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:sandbaseai/sandbase-harness
```

</details>

<a id="vibe-check-mcp-server"></a>

### Metacognitive agent oversight

[PV-Bhat/vibe-check-mcp-server](https://github.com/PV-Bhat/vibe-check-mcp-server) — `MCP server` · ★ 504 · License: MIT · Works with: All clients

Metacognitive oversight for AI agents: adaptive interrupts for alignment, reflection, and safety; needs an API key.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio vibe-check-mcp-server --env YOUR_API_KEY='<YOUR_API_KEY>' -- npx -y @pv-bhat/vibe-check-mcp
```

**Codex CLI**

```bash
codex mcp add vibe-check-mcp-server --env YOUR_API_KEY='<YOUR_API_KEY>' -- npx -y @pv-bhat/vibe-check-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e YOUR_API_KEY='<YOUR_API_KEY>' vibe-check-mcp-server npx -y @pv-bhat/vibe-check-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "vibe-check-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "vibe-check-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
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
    "vibe-check-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "enabled": true,
      "environment": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "vibe-check-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "vibe-check-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "vibe-check-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  vibe-check-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@pv-bhat/vibe-check-mcp"]
    envs:
      YOUR_API_KEY: "<YOUR_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "vibe-check-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "vibe-check-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `vibe-check-mcp-server.cordis.yml  →  dsh web --patch ./vibe-check-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-vibe-check-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: vibe-check-mcp-server
        transport: stdio
        command: npx
        args: ["-y","@pv-bhat/vibe-check-mcp"]
        env: {"YOUR_API_KEY":"<YOUR_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="flyto-core-mcp"></a>

### Execution engine with 412 modules

[Flyto Core](https://github.com/flytohub/flyto-core) — `MCP server` · ★ 481 · License: Apache-2.0 · Works with: All clients

Execution engine for AI agents with 412 modules covering browser, file, Docker, data, and crypto tasks.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio flyto-core -- uvx flyto-core
```

**Codex CLI**

```bash
codex mcp add flyto-core -- uvx flyto-core
```

**Gemini CLI**

```bash
gemini mcp add flyto-core uvx flyto-core
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "flyto-core": {
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "flyto-core": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "flyto-core"
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
    "flyto-core": {
      "type": "local",
      "command": [
        "uvx",
        "flyto-core"
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
    "flyto-core": {
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "flyto-core": {
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "flyto-core": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  flyto-core:
    type: stdio
    cmd: uvx
    args: ["flyto-core"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "flyto-core": {
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "flyto-core": {
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `flyto-core.cordis.yml  →  dsh web --patch ./flyto-core.cordis.yml`

```yaml
- insert:
    - id: mcp-flyto-core
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: flyto-core
        transport: stdio
        command: uvx
        args: ["flyto-core"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="claudexor-mcp"></a>

### Route work across coding agents

[Claudexor](https://github.com/razzant/claudexor) — `MCP server` · ★ 471 · License: MIT · Works with: All clients

Routes coding work across Claude Code, Codex, Cursor, and OpenCode with shared context.

**Alternatives:**

- [Concord MCP](https://github.com/Get-Concord-AI/concord-mcp) (★ 322) — Cross-harness communication and shared work-state for coding agents.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio claudexor -- npx -y claudexor
```

**Codex CLI**

```bash
codex mcp add claudexor -- npx -y claudexor
```

**Gemini CLI**

```bash
gemini mcp add claudexor npx -y claudexor
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "claudexor": {
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "claudexor": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
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
    "claudexor": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "claudexor"
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
    "claudexor": {
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "claudexor": {
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "claudexor": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  claudexor:
    type: stdio
    cmd: npx
    args: ["-y","claudexor"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "claudexor": {
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "claudexor": {
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `claudexor.cordis.yml  →  dsh web --patch ./claudexor.cordis.yml`

```yaml
- insert:
    - id: mcp-claudexor
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: claudexor
        transport: stdio
        command: npx
        args: ["-y","claudexor"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-image-gen"></a>

### Native conversational image generation

[shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) — `Native plugin` · ★ 438 · License: Apache-2.0 · Works with: DeepSeek Harness only

Native conversational image generation for DeepSeek Harness: ask the agent to create an image, and it handles generation and keeps the result directly in the conversation.

**Alternatives:**

- [zclDragon/dsh-tool-generate-image](https://github.com/zclDragon/dsh-tool-generate-image) (★ 2) — Adds a generate_image tool for text-only models, drawing via Gemini through the Antigravity CLI.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:shanliuling/dsh-image-gen
```

</details>

<a id="mcp-server-spec-driven-development"></a>

### Spec-driven development workflow

[formulahendry/mcp-server-spec-driven-development](https://github.com/formulahendry/mcp-server-spec-driven-development) — `MCP server` · ★ 437 · License: MIT · Works with: All clients

Facilitates spec-driven development workflows, as an alternative to unstructured vibe coding.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio spec-driven-development -- npx -y mcp-server-spec-driven-development
```

**Codex CLI**

```bash
codex mcp add spec-driven-development -- npx -y mcp-server-spec-driven-development
```

**Gemini CLI**

```bash
gemini mcp add spec-driven-development npx -y mcp-server-spec-driven-development
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "spec-driven-development": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "spec-driven-development": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
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
    "spec-driven-development": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "mcp-server-spec-driven-development"
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
    "spec-driven-development": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "spec-driven-development": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "spec-driven-development": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  spec-driven-development:
    type: stdio
    cmd: npx
    args: ["-y","mcp-server-spec-driven-development"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "spec-driven-development": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "spec-driven-development": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `spec-driven-development.cordis.yml  →  dsh web --patch ./spec-driven-development.cordis.yml`

```yaml
- insert:
    - id: mcp-spec-driven-development
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: spec-driven-development
        transport: stdio
        command: npx
        args: ["-y","mcp-server-spec-driven-development"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="planexe-mcp"></a>

### Generate project plans from prompts

[PlanExe](https://github.com/PlanExeOrg/PlanExe) — `MCP server` · ★ 401 · License: MIT · Works with: All clients

Generates rough-draft project plans from natural-language prompts; needs an X-API-Key.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http planexe https://mcp.planexe.org/mcp --header 'X-API-Key: <X_API_KEY>'
```

**Codex CLI**

```bash
codex mcp add planexe --url https://mcp.planexe.org/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http planexe https://mcp.planexe.org/mcp --header 'X-API-Key: <X_API_KEY>'
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "planexe": {
      "url": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "planexe": {
      "type": "http",
      "url": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
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
    "planexe": {
      "type": "remote",
      "url": "https://mcp.planexe.org/mcp",
      "enabled": true,
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "planexe": {
      "type": "streamableHttp",
      "url": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "planexe": {
      "serverUrl": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "planexe": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.planexe.org/mcp",
        "--header",
        "X-API-Key:<X_API_KEY>"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  planexe:
    type: streamable_http
    uri: https://mcp.planexe.org/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "planexe": {
      "type": "streamable-http",
      "url": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "planexe": {
      "type": "streamable-http",
      "url": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `planexe.cordis.yml  →  dsh web --patch ./planexe.cordis.yml`

```yaml
- insert:
    - id: mcp-planexe
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: planexe
        transport: streamable-http
        url: https://mcp.planexe.org/mcp
        headers: {"X-API-Key":"<X_API_KEY>"}
```

</details>

<a id="orcareplay-mcp"></a>

### Replay recorded agent runs

[Continuum-AI-Corp/OrcaReplay](https://github.com/Continuum-AI-Corp/OrcaReplay) — `MCP server` · ★ 255 · License: Apache-2.0 · Works with: All clients

Reads, replays, and forks recorded coding-agent runs.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio orcareplay -- npx -y orcareplay
```

**Codex CLI**

```bash
codex mcp add orcareplay -- npx -y orcareplay
```

**Gemini CLI**

```bash
gemini mcp add orcareplay npx -y orcareplay
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "orcareplay": {
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "orcareplay": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
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
    "orcareplay": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "orcareplay"
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
    "orcareplay": {
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "orcareplay": {
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "orcareplay": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  orcareplay:
    type: stdio
    cmd: npx
    args: ["-y","orcareplay"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "orcareplay": {
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "orcareplay": {
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `orcareplay.cordis.yml  →  dsh web --patch ./orcareplay.cordis.yml`

```yaml
- insert:
    - id: mcp-orcareplay
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: orcareplay
        transport: stdio
        command: npx
        args: ["-y","orcareplay"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-memory"></a>

### Auditable AGI self-improvement loop

[FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) — `Native plugin` · ★ 221 · License: MIT · Works with: DeepSeek Harness only

Explores a white-box AGI architecture: a metacognitive self-cognition loop, continual learning via a knowledge flywheel, a world model with condition space and spatiotemporal memory graph, bootstrap self-improvement, and auditable trust guardrails, without relying on an LLM.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:FuRongJun-1999/dsh-memory
```

</details>

<a id="task-orchestrator-mcp"></a>

### Enforced workflow discipline for agents

[MCP Task Orchestrator](https://github.com/jpicklyk/task-orchestrator) — `MCP server` · ★ 204 · License: MIT · Works with: All clients

Server-enforced workflow discipline for AI agents: work items, dependency graphs, and quality gates.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio task-orchestrator -- docker run -i --rm ghcr.io/jpicklyk/task-orchestrator:3.14.0
```

**Codex CLI**

```bash
codex mcp add task-orchestrator -- docker run -i --rm ghcr.io/jpicklyk/task-orchestrator:3.14.0
```

**Gemini CLI**

```bash
gemini mcp add task-orchestrator docker run -i --rm ghcr.io/jpicklyk/task-orchestrator:3.14.0
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "task-orchestrator": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "task-orchestrator": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
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
    "task-orchestrator": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
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
    "task-orchestrator": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "task-orchestrator": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "task-orchestrator": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  task-orchestrator:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/jpicklyk/task-orchestrator:3.14.0"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "task-orchestrator": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "task-orchestrator": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `task-orchestrator.cordis.yml  →  dsh web --patch ./task-orchestrator.cordis.yml`

```yaml
- insert:
    - id: mcp-task-orchestrator
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: task-orchestrator
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/jpicklyk/task-orchestrator:3.14.0"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-taskboard"></a>

### Cron-scheduled task board

[cloader/dsh-taskboard](https://github.com/cloader/dsh-taskboard) — `Native plugin` · ★ 48 · License: Apache-2.0 · Works with: DeepSeek Harness only

Task board for DSH: create tasks with project and model assignment, run them manually or on cron schedules; new sessions in a project automatically pick up its todo tasks and move them to in-review when done.

**Alternatives:**

- [whyihaveyou/dsh-suite#plugin-team-board](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-team-board) — Adds a shared multi-agent board with explicit create/claim/transition/query operations over a service key.
- [StruggleYang/dsh-project-kanban](https://github.com/StruggleYang/dsh-project-kanban) (★ 5) — Adds a browser kanban board with undo, templates, and archiving, plus nine model-facing planning tools.
- [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) (★ 325) — Adds a SQLite backlog-to-done pipeline where agent tools can only submit work to in-review, plus a headless CLI.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:cloader/dsh-taskboard
```

</details>

<a id="dsh-dsh-science"></a>

### Research workbench with provenance

[biociao/dsh-science](https://github.com/biociao/dsh-science) — `Native plugin` · ★ 39 · License: MIT · Works with: DeepSeek Harness only

Claude Science-style research workbench: a ReAct research-loop engine, versioned artifacts with provenance tracking, and ten science skills for genomics, pathogens, and bioinformatics.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:biociao/dsh-science
```

</details>

<a id="dsh-dsh-doublecheck"></a>

### Requirements and test-evidence guard

[PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) — `Native plugin` · ★ 34 · License: Apache-2.0 · Works with: DeepSeek Harness only

Engineering-discipline guard: a requirements grill before the first edit, red/green test-evidence gates, a forked adversary review, and a delivery report with per-dimension verification.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-doublecheck
```

</details>

<a id="dsh-vibe-mathematics"></a>

### Multi-agent math verification framework

[ChongCyrus/Vibe-Mathematics](https://github.com/ChongCyrus/Vibe-Mathematics) — `Native plugin` · ★ 28 · License: MIT · Works with: DeepSeek Harness only

Multi-agent math problem-solving and verification framework: brainstorm, solver iteration, multi-verifier debate, and a verified knowledge base, with checkpoint resume and manual or automatic intervention.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ChongCyrus/Vibe-Mathematics
```

</details>

<a id="dsh-dsh-automation"></a>

### Scheduled headless coding runs

[MichengAI/dsh-automation](https://github.com/MichengAI/dsh-automation) — `Native plugin` · ★ 19 · License: Apache-2.0 · Works with: DeepSeek Harness only

Runs scheduled coding tasks in isolated DeepSeek Harness sessions, managed from Settings or the agent.

**Alternatives:**

- [Ceelog/dsh-plugins#dsh-plugin-scheduled-tasks](https://github.com/Ceelog/dsh-plugins/tree/main/src/plugins/dsh-plugin-scheduled-tasks) — Adds one-time, interval, and cron schedules per project with durable run history.
- [KelaoHu/dsh-lowtide#dsh-lowtide](https://github.com/KelaoHu/dsh-lowtide/tree/main/packages/dsh-lowtide) — Runs task batches automatically in off-peak hours with four execution strategies and L1-L3 adjudication.
- [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) (★ 95) — Simpler scheduled runs in fresh agent sessions with an auditable history.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MichengAI/dsh-automation
```

</details>

<a id="dsh-dsh-awiki"></a>

### Agent network identity (ANP)

[AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) — `Native plugin` · ★ 17 · License: MIT · Works with: DeepSeek Harness only

Gives DSH agents native identities based on the open Agent Network Protocol (ANP), enabling identity-based direct, group, mail, and agent-to-agent communication.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:AgentConnect/dsh-awiki
```

</details>

<a id="dsh-dsh-background-agents"></a>

### Durable background child agents

[PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) — `Native plugin` · ★ 16 · License: Apache-2.0 · Works with: DeepSeek Harness only

Durable background child agents on the official subagent seam: start from any session, watch progress in the web UI sidebar, message and interrupt at any time, with per-child tool scoping and delegation-depth caps.

**Alternatives:**

- [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) (★ 148) — Adds dispatching work to DSH agents directly from Claude Code or Codex, plus a multimodal bridge.
- [hongyue0721/dsh-kimicode-swarm](https://github.com/hongyue0721/dsh-kimicode-swarm) (★ 4) — Adds batch-parallel subagent dispatch with adaptive scheduling and a /swarm command.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-background-agents
```

</details>

<a id="dsh-dsh-kingdom"></a>

### Agent governance and role bindings

[lusblead/dsh-Kingdom](https://github.com/lusblead/dsh-Kingdom) — `Native plugin` · ★ 15 · License: AGPL-3.0 · Works with: DeepSeek Harness only

Agent governance for DeepSeek Harness: territories, role bindings with model or agent identity, and a plan-assign-execute-review task loop where worker claims never auto-complete, plus a local GUI operations console.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:lusblead/dsh-Kingdom
```

</details>

<a id="dsh-dsh-requirements-alignment"></a>

### Requirements-drift runtime guard

[jiezeng2004-design/dsh-requirements-alignment](https://github.com/jiezeng2004-design/dsh-requirements-alignment) — `Native plugin` · ★ 8 · License: MIT · Works with: DeepSeek Harness only

Runtime requirement drift guard that keeps long-running DSH agents aligned with the user's approved goal, constraints, and decisions.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jiezeng2004-design/dsh-requirements-alignment
```

</details>

<a id="dsh-dsh-ha-orchestrator"></a>

### Model failover and agent orchestration

[Saktawdi/dsh-ha-orchestrator](https://github.com/Saktawdi/dsh-ha-orchestrator) — `Native plugin` · ★ 6 · License: MIT · Works with: DeepSeek Harness only

Model high-availability failover (quarantine, circuit breaking, probe recovery) and subagent orchestration (fanout, pipeline, supervisor), with a bilingual settings UI.

**Alternatives:**

- [Letter2025/dsh-model-failover](https://github.com/Letter2025/dsh-model-failover) (★ 4) — Simpler two-level circuit breaker that trips a model or provider after repeated failures and routes to a fallback.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Saktawdi/dsh-ha-orchestrator
```

</details>

<a id="dsh-fn-os-apps-dsh-codex-auth-plugin"></a>

### ChatGPT account sign-in for DSH

[tnnevol/fn-os-apps#dsh-codex-auth-plugin](https://github.com/tnnevol/fn-os-apps/tree/main/plugins/dsh-codex-auth-plugin) — `Native plugin` · License: AGPL-3.0 · Works with: DeepSeek Harness only

Signs DSH in with a ChatGPT account via Codex browser OAuth, no API key needed. Subscribes the login to the Codex provider, sets a default model and reasoning effort, refreshes the model list from the account catalog, and shows usage windows in the composer.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:tnnevol/fn-os-apps#path:/plugins/dsh-codex-auth-plugin
```

</details>

<a id="dsh-dsh-gungnir-dsh-plugin"></a>

### Goal completion verification

[Jonah-Wu23/dsh-gungnir#dsh-plugin](https://github.com/Jonah-Wu23/dsh-gungnir/tree/main/packages/dsh-plugin) — `Native plugin` · License: Apache-2.0 · Works with: DeepSeek Harness only

Locks a goal via /ultragoal and verifies its completion against command exit codes and generated artifacts, preventing the agent from falsely reporting a task as done.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Jonah-Wu23/dsh-gungnir#path:/packages/dsh-plugin
```

</details>

<a id="dsh-odai-odai-dsh-plugin"></a>

### Profile-wide governance and routing

[orziz/odai#odai-dsh-plugin](https://github.com/orziz/odai/tree/main/dsh/plugin) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Profile-wide governance and routing with a web control center for responsibility and evidence inspection, plus compaction, scoped semantic memory, safety continuity, and verified delivery.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:orziz/odai#path:/dsh/plugin
```

</details>

<a id="sequential-thinking"></a>

### Sequential Thinking (reference)

[Sequential Thinking (reference)](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) — `MCP server` · License: see repo · Works with: All clients

Structured step-by-step thinking tool: the agent records, revises and branches thoughts while solving a problem.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking
```

**Codex CLI**

```bash
codex mcp add sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking
```

**Gemini CLI**

```bash
gemini mcp add sequential-thinking npx -y @modelcontextprotocol/server-sequential-thinking
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "sequential-thinking": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
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
    "sequential-thinking": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
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
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "sequential-thinking": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  sequential-thinking:
    type: stdio
    cmd: npx
    args: ["-y","@modelcontextprotocol/server-sequential-thinking"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `sequential-thinking.cordis.yml  →  dsh web --patch ./sequential-thinking.cordis.yml`

```yaml
- insert:
    - id: mcp-sequential-thinking
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sequential-thinking
        transport: stdio
        command: npx
        args: ["-y","@modelcontextprotocol/server-sequential-thinking"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-mstar-harness-dsh"></a>

### Skill-driven loop engineering agent

[btspoony/mstar-harness#dsh](https://github.com/btspoony/mstar-harness/tree/main/packages/dsh) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Skill-driven harness and loop-engineering workflow agent plugin.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:btspoony/mstar-harness#path:/packages/dsh
```

</details>
