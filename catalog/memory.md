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
- [Air-gapped enterprise GraphRAG](#veritasgraph-mcp) — Zero-trust, air-gapped enterprise GraphRAG server with offline, citation-grounded answers.
- [Anytype encrypted wiki access](#anytype-mcp) — Official server for the Anytype API, an encrypted, local, and collaborative wiki; needs OPENAPI_MCP_HEADERS.
- [Cross-session agent memory](#omega-memory-mcp) — Persistent memory, coordination, and learning for AI agents, local-first, exposed as 25 MCP tools.
- [Cross-tool session reader, no export](#dsh-deja-vu-extensions-dsh) — Reads the session files that other coding agents on the same machine already wrote (Claude Code, Codex, Cursor…
- [Local-first agentic RAG](#haiku-rag-mcp) — Local-first agentic RAG with citations: hybrid search, reranking, and multimodal document retrieval.
- [Markdown knowledge base for agents](#basic-memory-mcp) — Local-first knowledge management with bi-directional sync between an LLM and Markdown files.
- [Markdown notes as agent memory](#iwe-mcp) — Runs a Markdown knowledge base as agent memory against the notes directory it is started in.
- [Memory (reference)](#mcp-memory) — Reference knowledge-graph memory: entities, relations and observations stored in a local JSONL file. No model …
- [Obsidian notes access](#obsidian-mcp-server) — Reads, writes, searches, and edits Obsidian notes, tags, and frontmatter; needs an OBSIDIAN_API_KEY.
- [Plaintext one-fact-per-file memory](#dsh-engramory-plugin) — Long-term memory stored as plain markdown, one fact per file. A size-capped MEMORY.md index blocks writes that…
- [Reasoning memory for agents](#honcho-mcp) — Memory that reasons: continual learning for stateful agents, aiming for better context with fewer tokens; need…
- [Self-evolving team memory in git](#dsh-co-engram-dsh-plugin) — Self-evolving team memory kept as plain markdown in git: 38 bare-name memory tools plus a prompt-signals secti…
- [Team chat to knowledge graph](#beever-atlas-mcp) — Open-source knowledge base that turns team chat into a typed knowledge graph and an auto-generated wiki.

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

<a id="veritasgraph-mcp"></a>

### Air-gapped enterprise GraphRAG

[bibinprathap/VeritasGraph](https://github.com/bibinprathap/VeritasGraph) — `MCP server` · License: see repo · Works with: All clients

Zero-trust, air-gapped enterprise GraphRAG server with offline, citation-grounded answers.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio veritasgraph -- uvx veritasgraph-mcp
```

**Codex CLI**

```bash
codex mcp add veritasgraph -- uvx veritasgraph-mcp
```

**Gemini CLI**

```bash
gemini mcp add veritasgraph uvx veritasgraph-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "veritasgraph": {
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "veritasgraph": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
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
    "veritasgraph": {
      "type": "local",
      "command": [
        "uvx",
        "veritasgraph-mcp"
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
    "veritasgraph": {
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "veritasgraph": {
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "veritasgraph": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  veritasgraph:
    type: stdio
    cmd: uvx
    args: ["veritasgraph-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "veritasgraph": {
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "veritasgraph": {
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `veritasgraph.cordis.yml  →  dsh web --patch ./veritasgraph.cordis.yml`

```yaml
- insert:
    - id: mcp-veritasgraph
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: veritasgraph
        transport: stdio
        command: uvx
        args: ["veritasgraph-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="anytype-mcp"></a>

### Anytype encrypted wiki access

[anyproto/anytype-mcp](https://github.com/anyproto/anytype-mcp) — `MCP server` · License: MIT · Works with: All clients

Official server for the Anytype API, an encrypted, local, and collaborative wiki; needs OPENAPI_MCP_HEADERS.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio anytype-mcp --env OPENAPI_MCP_HEADERS='<OPENAPI_MCP_HEADERS>' -- npx -y @anyproto/anytype-mcp
```

**Codex CLI**

```bash
codex mcp add anytype-mcp --env OPENAPI_MCP_HEADERS='<OPENAPI_MCP_HEADERS>' -- npx -y @anyproto/anytype-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e OPENAPI_MCP_HEADERS='<OPENAPI_MCP_HEADERS>' anytype-mcp npx -y @anyproto/anytype-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "anytype-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "anytype-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
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
    "anytype-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "enabled": true,
      "environment": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "anytype-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "anytype-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "anytype-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  anytype-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@anyproto/anytype-mcp"]
    envs:
      OPENAPI_MCP_HEADERS: "<OPENAPI_MCP_HEADERS>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "anytype-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "anytype-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `anytype-mcp.cordis.yml  →  dsh web --patch ./anytype-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-anytype-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: anytype-mcp
        transport: stdio
        command: npx
        args: ["-y","@anyproto/anytype-mcp"]
        env: {"OPENAPI_MCP_HEADERS":"<OPENAPI_MCP_HEADERS>"}
        cwd: !!js process.cwd()
```

</details>

<a id="omega-memory-mcp"></a>

### Cross-session agent memory

[OMEGA Memory](https://github.com/omega-memory/omega-memory) — `MCP server` · License: Apache-2.0 · Works with: All clients

Persistent memory, coordination, and learning for AI agents, local-first, exposed as 25 MCP tools.

**Alternatives:**

- [Vestige](https://github.com/samvallad33/vestige) — Local-first agent memory that reaches backward to find a failure's root cause.
- [Compartment](https://github.com/MaxFreedomPollard/Compartment) — Durable agentic memory encrypted at rest, fully offline with no network or API key.
- [TeleAI-UAGI/telemem](https://github.com/TeleAI-UAGI/telemem) — Long-term multimodal, character-aware memory, mem0-compatible, with a fully-local option; needs an OPENAI_API_KEY.
- [Lyellr88/marm-memory](https://github.com/Lyellr88/marm-memory) — Universal server adding AI memory with semantic search.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio omega-memory -- uvx omega-memory
```

**Codex CLI**

```bash
codex mcp add omega-memory -- uvx omega-memory
```

**Gemini CLI**

```bash
gemini mcp add omega-memory uvx omega-memory
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "omega-memory": {
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "omega-memory": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "omega-memory"
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
    "omega-memory": {
      "type": "local",
      "command": [
        "uvx",
        "omega-memory"
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
    "omega-memory": {
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "omega-memory": {
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "omega-memory": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  omega-memory:
    type: stdio
    cmd: uvx
    args: ["omega-memory"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "omega-memory": {
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "omega-memory": {
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `omega-memory.cordis.yml  →  dsh web --patch ./omega-memory.cordis.yml`

```yaml
- insert:
    - id: mcp-omega-memory
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: omega-memory
        transport: stdio
        command: uvx
        args: ["omega-memory"]
        env: {}
        cwd: !!js process.cwd()
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

<a id="haiku-rag-mcp"></a>

### Local-first agentic RAG

[haiku.rag](https://github.com/ggozad/haiku.rag) — `MCP server` · License: MIT · Works with: All clients

Local-first agentic RAG with citations: hybrid search, reranking, and multimodal document retrieval.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio haiku-rag -- uvx haiku-rag
```

**Codex CLI**

```bash
codex mcp add haiku-rag -- uvx haiku-rag
```

**Gemini CLI**

```bash
gemini mcp add haiku-rag uvx haiku-rag
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "haiku-rag": {
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "haiku-rag": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "haiku-rag"
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
    "haiku-rag": {
      "type": "local",
      "command": [
        "uvx",
        "haiku-rag"
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
    "haiku-rag": {
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "haiku-rag": {
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "haiku-rag": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  haiku-rag:
    type: stdio
    cmd: uvx
    args: ["haiku-rag"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "haiku-rag": {
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "haiku-rag": {
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `haiku-rag.cordis.yml  →  dsh web --patch ./haiku-rag.cordis.yml`

```yaml
- insert:
    - id: mcp-haiku-rag
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: haiku-rag
        transport: stdio
        command: uvx
        args: ["haiku-rag"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="basic-memory-mcp"></a>

### Markdown knowledge base for agents

[basicmachines-co/basic-memory](https://github.com/basicmachines-co/basic-memory) — `MCP server` · License: AGPL-3.0 · Works with: All clients

Local-first knowledge management with bi-directional sync between an LLM and Markdown files.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio basic-memory -- uvx basic-memory
```

**Codex CLI**

```bash
codex mcp add basic-memory -- uvx basic-memory
```

**Gemini CLI**

```bash
gemini mcp add basic-memory uvx basic-memory
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "basic-memory": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "basic-memory"
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
    "basic-memory": {
      "type": "local",
      "command": [
        "uvx",
        "basic-memory"
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
    "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "basic-memory": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  basic-memory:
    type: stdio
    cmd: uvx
    args: ["basic-memory"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `basic-memory.cordis.yml  →  dsh web --patch ./basic-memory.cordis.yml`

```yaml
- insert:
    - id: mcp-basic-memory
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: basic-memory
        transport: stdio
        command: uvx
        args: ["basic-memory"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="iwe-mcp"></a>

### Markdown notes as agent memory

[IWE](https://github.com/iwe-org/iwe) — `MCP server` · License: Apache-2.0 · Works with: All clients

Runs a Markdown knowledge base as agent memory against the notes directory it is started in.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio iwe -- npx -y @iwe-org/mcp
```

**Codex CLI**

```bash
codex mcp add iwe -- npx -y @iwe-org/mcp
```

**Gemini CLI**

```bash
gemini mcp add iwe npx -y @iwe-org/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "iwe": {
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "iwe": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
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
    "iwe": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@iwe-org/mcp"
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
    "iwe": {
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "iwe": {
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "iwe": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  iwe:
    type: stdio
    cmd: npx
    args: ["-y","@iwe-org/mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "iwe": {
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "iwe": {
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `iwe.cordis.yml  →  dsh web --patch ./iwe.cordis.yml`

```yaml
- insert:
    - id: mcp-iwe
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: iwe
        transport: stdio
        command: npx
        args: ["-y","@iwe-org/mcp"]
        env: {}
        cwd: !!js process.cwd()
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

<a id="obsidian-mcp-server"></a>

### Obsidian notes access

[cyanheads/obsidian-mcp-server](https://github.com/cyanheads/obsidian-mcp-server) — `MCP server` · License: Apache-2.0 · Works with: All clients

Reads, writes, searches, and edits Obsidian notes, tags, and frontmatter; needs an OBSIDIAN_API_KEY.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio obsidian-mcp-server --env OBSIDIAN_API_KEY='<OBSIDIAN_API_KEY>' -- npx -y obsidian-mcp-server
```

**Codex CLI**

```bash
codex mcp add obsidian-mcp-server --env OBSIDIAN_API_KEY='<OBSIDIAN_API_KEY>' -- npx -y obsidian-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e OBSIDIAN_API_KEY='<OBSIDIAN_API_KEY>' obsidian-mcp-server npx -y obsidian-mcp-server
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "obsidian-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "obsidian-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
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
    "obsidian-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "obsidian-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "obsidian-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "obsidian-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "obsidian-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  obsidian-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","obsidian-mcp-server"]
    envs:
      OBSIDIAN_API_KEY: "<OBSIDIAN_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "obsidian-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "obsidian-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `obsidian-mcp-server.cordis.yml  →  dsh web --patch ./obsidian-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-obsidian-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: obsidian-mcp-server
        transport: stdio
        command: npx
        args: ["-y","obsidian-mcp-server"]
        env: {"OBSIDIAN_API_KEY":"<OBSIDIAN_API_KEY>"}
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

<a id="honcho-mcp"></a>

### Reasoning memory for agents

[Honcho](https://github.com/plastic-labs/honcho) — `MCP server` · License: AGPL-3.0 · Works with: All clients

Memory that reasons: continual learning for stateful agents, aiming for better context with fewer tokens; needs an Authorization token.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http honcho https://mcp.honcho.dev --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — File: `~/.codex/config.toml`

```toml
[mcp_servers.honcho]
url = "https://mcp.honcho.dev"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http honcho https://mcp.honcho.dev --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "honcho": {
      "url": "https://mcp.honcho.dev",
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
    "honcho": {
      "type": "http",
      "url": "https://mcp.honcho.dev",
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
    "honcho": {
      "type": "remote",
      "url": "https://mcp.honcho.dev",
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
    "honcho": {
      "type": "streamableHttp",
      "url": "https://mcp.honcho.dev",
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
    "honcho": {
      "serverUrl": "https://mcp.honcho.dev",
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
    "honcho": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.honcho.dev",
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
  honcho:
    type: streamable_http
    uri: https://mcp.honcho.dev
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "honcho": {
      "type": "streamable-http",
      "url": "https://mcp.honcho.dev",
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
    "honcho": {
      "type": "streamable-http",
      "url": "https://mcp.honcho.dev",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `honcho.cordis.yml  →  dsh web --patch ./honcho.cordis.yml`

```yaml
- insert:
    - id: mcp-honcho
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: honcho
        transport: streamable-http
        url: https://mcp.honcho.dev
        headers: {"Authorization":"Bearer <API_TOKEN>"}
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

<a id="beever-atlas-mcp"></a>

### Team chat to knowledge graph

[Beever-AI/beever-atlas](https://github.com/Beever-AI/beever-atlas) — `MCP server` · License: Apache-2.0 · Works with: All clients

Open-source knowledge base that turns team chat into a typed knowledge graph and an auto-generated wiki.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio beever-atlas -- docker run -i --rm ghcr.io/beever-ai/beever-atlas:0.3.0
```

**Codex CLI**

```bash
codex mcp add beever-atlas -- docker run -i --rm ghcr.io/beever-ai/beever-atlas:0.3.0
```

**Gemini CLI**

```bash
gemini mcp add beever-atlas docker run -i --rm ghcr.io/beever-ai/beever-atlas:0.3.0
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "beever-atlas": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "beever-atlas": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
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
    "beever-atlas": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
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
    "beever-atlas": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "beever-atlas": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "beever-atlas": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  beever-atlas:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/beever-ai/beever-atlas:0.3.0"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "beever-atlas": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "beever-atlas": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `beever-atlas.cordis.yml  →  dsh web --patch ./beever-atlas.cordis.yml`

```yaml
- insert:
    - id: mcp-beever-atlas
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: beever-atlas
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/beever-ai/beever-atlas:0.3.0"]
        env: {}
        cwd: !!js process.cwd()
```

</details>
