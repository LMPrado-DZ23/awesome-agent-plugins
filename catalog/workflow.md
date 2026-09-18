# Workflow & Agents

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Multi-agent team orchestration](#dsh-dsh-agent-teams) — AgentTeams: coordinates multiple agents working together as a team on a shared task.
- [Manage agent instruction rule files](#dsh-dsh-purge) — Adds a Settings UI to edit prompt-inject.md and manage AGENTS.md or CLAUDE.md rule sets, check for plugin upda…
- [Novel-writing production workbench](#dsh-openwrite) — Novel-writing workbench for DSH with an authoring preset, outline and character management, manuscript annotat…
- [External agent runtime connector](#dsh-sandbase-harness) — Connects DSH to a local SandBase Harness runtime over stdio MCP for managing agents and sessions, streaming tu…
- [Native conversational image generation](#dsh-dsh-image-gen) — Native conversational image generation for DeepSeek Harness: ask the agent to create an image, and it handles …
- [Auditable AGI self-improvement loop](#dsh-dsh-memory) — Explores a white-box AGI architecture: a metacognitive self-cognition loop, continual learning via a knowledge…
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

**Gemini CLI** — File: `~/.gemini/settings.json (or .gemini/settings.json)`

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
