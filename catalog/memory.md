# Memory

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Typed knowledge-graph memory](#dsh-graph-memory) — Traceable, searchable cross-session memory that stores conversation knowledge as typed graph nodes (task/skill…
- [Failure-recovery lessons knowledge base](#dsh-misakanet) — Search and record failure-recovery lessons from real engineering sessions, with BM25 plus semantic RAG retriev…
- [Cross-agent shared long-term memory](#dsh-dsh-mnemon) — Local-first persistent memory shared across Mnemon-enabled agents: runtime memory, searchable project document…
- [Seven-layer SQLite project memory](#dsh-dsh-meow-memory) — Project-scoped cross-session memory in a seven-layer SQLite store (soul/user/project/fact/lesson/rules/topic),…
- [Approval-gated auditable memory](#dsh-dsh-memento) — Bounded, layered, approval-gated cross-session memory: a typed memory seam with a zero-dependency SQLite provi…
- [Six-layer time-decaying memory](#dsh-stratagate-agentmemory) — Six-layer, time-decaying memory: recent conversations stay vivid while older ones fade into summaries, and las…
- [Zero-prompt proactive memory recall](#dsh-dsh-auto-memory) — Proactive associative memory: zero-prompt recall injected at a fixed boundary, three-layer auto-consolidation,…
- [Markdown notes capture and sync](#dsh-dsh-md-notes) — Markdown notes manager and editor for DSH: quickly capture conversations into notes, keep them synced to Git r…
- [Auto-distilled hybrid-retrieval memory](#dsh-dsh-layered-memory) — Conversations auto-distilled into atomic facts, scene summaries, and a persona profile, injected before every …
- [Personal Obsidian vault memory](#dsh-dsh-client-ui-obsidian-memory) — Persistent AI memory backed by a local Obsidian/Codex vault, with five read/write/search tools and a sidebar v…
- [Local/remote knowledge base search](#dsh-dsh-knowledge) — Local and remote knowledge bases with project- and session-scoped recall, controlled write-back, and an embedd…
- [Multi-layer conversation history recall](#dsh-dsh-recall) — Conversation history recall via three-layer (literal, fuzzy, semantic) retrieval over every past session's ori…
- [Cross-tool session reader, no export](#dsh-deja-vu-extensions-dsh) — Reads the session files that other coding agents on the same machine already wrote (Claude Code, Codex, Cursor…
- [Memory (reference)](#mcp-memory) — Reference knowledge-graph memory: entities, relations and observations stored in a local JSONL file. No model …
- [Plaintext one-fact-per-file memory](#dsh-engramory-plugin) — Long-term memory stored as plain markdown, one fact per file. A size-capped MEMORY.md index blocks writes that…
- [Self-evolving team memory in git](#dsh-co-engram-dsh-plugin) — Self-evolving team memory kept as plain markdown in git: 38 bare-name memory tools plus a prompt-signals secti…

<a id="dsh-graph-memory"></a>

### Typed knowledge-graph memory

[adoresever/graph-memory](https://github.com/adoresever/graph-memory) — `Native plugin` · ★ 626 · License: MIT · Works with: DeepSeek Harness only

Traceable, searchable cross-session memory that stores conversation knowledge as typed graph nodes (task/skill/event) connected by typed edges.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:adoresever/graph-memory
```

</details>

<a id="dsh-misakanet"></a>

### Failure-recovery lessons knowledge base

[Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) — `Native plugin` · ★ 493 · License: Apache-2.0 · Works with: DeepSeek Harness only

Search and record failure-recovery lessons from real engineering sessions, with BM25 plus semantic RAG retrieval over a lessons knowledge base.

**Alternatives:**

- [akslcw/dsh-negative-ledger](https://github.com/akslcw/dsh-negative-ledger) (★ 3) — Persists disproven paths with outcome evidence and blocks repeat attempts until that evidence changes.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Ikalus1988/MisakaNet
```

</details>

<a id="dsh-dsh-mnemon"></a>

### Cross-agent shared long-term memory

[omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) — `Native plugin` · ★ 385 · License: MIT · Works with: DeepSeek Harness only

Local-first persistent memory shared across Mnemon-enabled agents: runtime memory, searchable project documents, semantic recall, a knowledge graph, and a sidebar UI.

**Alternatives:**

- [vectorize-io/hindsight#coding-agents](https://github.com/vectorize-io/hindsight/tree/main/hindsight-integrations/coding-agents) — Adds automatic recall/retain with deep reflection, knowledge pages, and per-repo memory banks.
- [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) (★ 128) — Adds import of memories from ten other AI coding tools plus a settings page.
- [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) (★ 112) — Adds sleep-time auto-consolidation, freezing of conflicting memories for review, and a replayable audit trail.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:omdsh-dev/dsh-mnemon
```

</details>

<a id="dsh-dsh-meow-memory"></a>

### Seven-layer SQLite project memory

[Phant0Meow/dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) — `Native plugin` · ★ 105 · License: MIT · Works with: DeepSeek Harness only

Project-scoped cross-session memory in a seven-layer SQLite store (soul/user/project/fact/lesson/rules/topic), with first-message injection, per-message keyword hits, and idle-window consolidation.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Phant0Meow/dsh-meow-memory
```

</details>

<a id="dsh-dsh-memento"></a>

### Approval-gated auditable memory

[PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) — `Native plugin` · ★ 103 · License: Apache-2.0 · Works with: DeepSeek Harness only

Bounded, layered, approval-gated cross-session memory: a typed memory seam with a zero-dependency SQLite provider, frozen snapshot injection, and a conformance suite for adapter compatibility.

**Alternatives:**

- [GIT121995/dsh-memory-gate](https://github.com/GIT121995/dsh-memory-gate) (★ 2) — Adds explainable use/verify/ignore decisions with a full audit trail and a per-call injection limit.
- [highland0971/dsh-native-memory](https://github.com/highland0971/dsh-native-memory) (★ 2) — Runs on the harness's own storage seam with no external server, citing session and sequence for each fact.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-memento
```

</details>

<a id="dsh-stratagate-agentmemory"></a>

### Six-layer time-decaying memory

[diqierjia/StrataGate-AgentMemory](https://github.com/diqierjia/StrataGate-AgentMemory) — `Native plugin` · ★ 92 · License: MIT · Works with: DeepSeek Harness only

Six-layer, time-decaying memory: recent conversations stay vivid while older ones fade into summaries, and lasting events and relationships settle into a knowledge graph. Supports bringing memories in from other AI tools.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add "https://github.com/diqierjia/StrataGate-AgentMemory/releases/latest/download/stratagate-dsh.tgz"
```

</details>

<a id="dsh-dsh-auto-memory"></a>

### Zero-prompt proactive memory recall

[Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) — `Native plugin` · ★ 71 · License: BSD-3-Clause · Works with: DeepSeek Harness only

Proactive associative memory: zero-prompt recall injected at a fixed boundary, three-layer auto-consolidation, skill crystallization, and handoff ledgers that survive context-window switches. Local markdown storage, model-agnostic, zero dependencies.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Aik358/dsh-auto-memory
```

</details>

<a id="dsh-dsh-md-notes"></a>

### Markdown notes capture and sync

[XieZongChen/dsh-md-notes](https://github.com/XieZongChen/dsh-md-notes) — `Native plugin` · ★ 17 · License: MIT · Works with: DeepSeek Harness only

Markdown notes manager and editor for DSH: quickly capture conversations into notes, keep them synced to Git repositories, and bring notes back into the conversation context.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:XieZongChen/dsh-md-notes
```

</details>

<a id="dsh-dsh-layered-memory"></a>

### Auto-distilled hybrid-retrieval memory

[JunNanLYS/dsh-layered-memory](https://github.com/JunNanLYS/dsh-layered-memory) — `Native plugin` · ★ 16 · License: MIT · Works with: DeepSeek Harness only

Conversations auto-distilled into atomic facts, scene summaries, and a persona profile, injected before every model step via hybrid BM25 plus vector retrieval. Zero-config, with optional offline local embeddings and chat/work separation.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:JunNanLYS/dsh-layered-memory
```

</details>

<a id="dsh-dsh-client-ui-obsidian-memory"></a>

### Personal Obsidian vault memory

[detongz/dsh-client-ui-obsidian-memory](https://github.com/detongz/dsh-client-ui-obsidian-memory) — `Native plugin` · ★ 14 · License: MIT · Works with: DeepSeek Harness only

Persistent AI memory backed by a local Obsidian/Codex vault, with five read/write/search tools and a sidebar vault browser.

**Alternatives:**

- [mingzeng21/dsh-obsidian](https://github.com/mingzeng21/dsh-obsidian) (★ 14) — Simpler tool set covering search, read, write, move, and trash on the vault.
- [Noelune/unified-agent-memory](https://github.com/Noelune/unified-agent-memory) (★ 7) — Shares one Obsidian vault across every agent, with a dependency-free promote/adjudicate/forget core.
- [398894496-arch/runtime36](https://github.com/398894496-arch/runtime36) (★ 39) — Read-only tools that route status, preference, and correction queries to the matching vault page.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:detongz/dsh-client-ui-obsidian-memory
```

</details>

<a id="dsh-dsh-knowledge"></a>

### Local/remote knowledge base search

[lemoncat7/dsh-knowledge](https://github.com/lemoncat7/dsh-knowledge) — `Native plugin` · ★ 11 · License: MIT · Works with: DeepSeek Harness only

Local and remote knowledge bases with project- and session-scoped recall, controlled write-back, and an embedded web management console.

**Alternatives:**

- [htcqp802/dsh-knowledge-base](https://github.com/htcqp802/dsh-knowledge-base) (★ 5) — Imports md/txt/json/yml/docx/pdf, adds folder management and FTS5 full-text search.
- [PerryLink/dsh-library](https://github.com/PerryLink/dsh-library) (★ 10) — Turns local documents into a queryable base with citation verification and source injection.
- [melandlabs/opencontext#dsh-opencontext](https://github.com/melandlabs/opencontext/tree/main/plugins/dsh-opencontext) — Adds automatic prompt capture, session summaries, and structured insights alongside document retrieval.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:lemoncat7/dsh-knowledge
```

</details>

<a id="dsh-dsh-recall"></a>

### Multi-layer conversation history recall

[Relistencode/dsh-recall](https://github.com/Relistencode/dsh-recall) — `Native plugin` · ★ 3 · License: MIT · Works with: DeepSeek Harness only

Conversation history recall via three-layer (literal, fuzzy, semantic) retrieval over every past session's original text, fully local and offline. One-command install, with the semantic layer running in a worker thread.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Relistencode/dsh-recall
```

</details>

<a id="dsh-deja-vu-extensions-dsh"></a>

### Cross-tool session reader, no export

[vshulcz/deja-vu#extensions/dsh](https://github.com/vshulcz/deja-vu/tree/main/extensions/dsh) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Reads the session files that other coding agents on the same machine already wrote (Claude Code, Codex, Cursor, VS Code Copilot Chat, opencode, and more), including sessions from before it was installed. Local BM25 index, no LLM, no embeddings, no network.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:vshulcz/deja-vu#path:/extensions/dsh
```

</details>

<a id="mcp-memory"></a>

### Memory (reference)

[Memory (reference)](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) — `MCP server` · License: see repo · Works with: All clients

Reference knowledge-graph memory: entities, relations and observations stored in a local JSONL file. No model or embedding service needed.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio memory -- npx -y @modelcontextprotocol/server-memory
```

**Codex CLI**

```bash
codex mcp add memory -- npx -y @modelcontextprotocol/server-memory
```

**Gemini CLI**

```bash
gemini mcp add memory npx -y @modelcontextprotocol/server-memory
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "memory": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
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
    "memory": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-memory"
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
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "memory": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  memory:
    type: stdio
    cmd: npx
    args: ["-y","@modelcontextprotocol/server-memory"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `memory.cordis.yml  →  dsh web --patch ./memory.cordis.yml`

```yaml
- insert:
    - id: mcp-memory
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: memory
        transport: stdio
        command: npx
        args: ["-y","@modelcontextprotocol/server-memory"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-engramory-plugin"></a>

### Plaintext one-fact-per-file memory

[tinqiao-oss/engramory#plugin](https://github.com/tinqiao-oss/engramory/tree/master/adapters/dsh/plugin) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Long-term memory stored as plain markdown, one fact per file. A size-capped MEMORY.md index blocks writes that would grow it past the limit; shrinking rewrites always pass. The same store is shared with Claude Code, Codex, Kiro and OpenClaw.

**Alternatives:**

- [gezi-wen/sage-mem](https://github.com/gezi-wen/sage-mem) (★ 6) — Uses a file format compatible with Claude Code's CLAUDE.md, so migrating is a manual file copy.
- [Max-Null/dsh-memory](https://github.com/Max-Null/dsh-memory) (★ 3) — Adds a human-confirm gate before saving and global plus git-tracked project-scoped JSON stores.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:tinqiao-oss/engramory#path:/adapters/dsh/plugin
```

</details>

<a id="dsh-co-engram-dsh-plugin"></a>

### Self-evolving team memory in git

[Co-Engram/Co-Engram#dsh-plugin](https://github.com/Co-Engram/Co-Engram/tree/main/packages/dsh-plugin) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Self-evolving team memory kept as plain markdown in git: 38 bare-name memory tools plus a prompt-signals section re-evaluated at every assembly, with reinforcement, decay, and sleep consolidation. Shares one data repo with Claude Code and OpenClaw hosts.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Co-Engram/Co-Engram#path:/packages/dsh-plugin
```

</details>
