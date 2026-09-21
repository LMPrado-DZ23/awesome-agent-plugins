# Code Intelligence

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Serena](#serena) — Semantic code retrieval and editing through language servers: find symbols and references, and edit at symbol …
- [Codebase knowledge graph](#codebase-memory-mcp) — Builds a codebase knowledge graph across 162 languages with sub-millisecond queries and reduced token usage.
- [Codebase intelligence for agents](#repowise-mcp) — Codebase intelligence for coding agents: dependency graph, git history, docs, decisions, and code health.
- [Entity-level semantic code diff](#sem-mcp) — Entity-level code intelligence: semantic diff, impact analysis, blame, and context for AI agents.
- [Token-efficient AST code exploration](#jcodemunch-mcp) — Token-efficient code exploration via tree-sitter AST parsing across 70+ languages, cutting tokens 86-99%.
- [Python code health analysis](#pyscn-mcp) — Python code analysis for AI agents: complexity, dead code, clones, coupling, and an overall health score.
- [GitHub code research platform](#octocode-mcp) — AI code research platform to search, analyze, and extract insights from any GitHub repository; needs a GITHUB_…
- [Layered code graph with SCIP](#claude-code-skills-mcp) — Deterministic layered code graph server with framework overlays and SCIP interoperability.
- [Local semantic code indexer](#muvon-octocode-mcp) — AI-powered code indexer for a local repository with semantic search and knowledge graphs.
- [Semantic search for files and code](#vexor-mcp) — A semantic search engine for files and code; needs a VEXOR_API_KEY (and optionally a rerank API key).

<a id="serena"></a>

### Serena

[Serena](https://github.com/oraios/serena) — `MCP server` · ★ 30k · License: see repo · Works with: All clients

Semantic code retrieval and editing through language servers: find symbols and references, and edit at symbol level instead of by text.

<details><summary>Install</summary>

**Claude Code**

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```bash
claude mcp add --transport stdio serena -- serena start-mcp-server --project-from-cwd
```

**Codex CLI**

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```bash
codex mcp add serena -- serena start-mcp-server --project-from-cwd
```

**Gemini CLI**

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```bash
gemini mcp add serena serena start-mcp-server --project-from-cwd
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "mcpServers": {
    "serena": {
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "servers": {
    "serena": {
      "type": "stdio",
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**OpenCode** — File: `opencode.json`

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "serena": {
      "type": "local",
      "command": [
        "serena",
        "start-mcp-server",
        "--project-from-cwd"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "mcpServers": {
    "serena": {
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "mcpServers": {
    "serena": {
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "context_servers": {
    "serena": {
      "source": "custom",
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```yaml
extensions:
  serena:
    type: stdio
    cmd: serena
    args: ["start-mcp-server","--project-from-cwd"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "mcpServers": {
    "serena": {
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "mcpServers": {
    "serena": {
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `serena.cordis.yml  →  dsh web --patch ./serena.cordis.yml`

Prerequisite: `uv tool install -p 3.13 serena-agent && serena init`

```yaml
- insert:
    - id: mcp-serena
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: serena
        transport: stdio
        command: serena
        args: ["start-mcp-server","--project-from-cwd"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="codebase-memory-mcp"></a>

### Codebase knowledge graph

[Codebase Memory](https://github.com/DeusData/codebase-memory-mcp) — `MCP server` · ★ 44k · License: MIT · Works with: All clients

Builds a codebase knowledge graph across 162 languages with sub-millisecond queries and reduced token usage.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio codebase-memory-mcp -- npx -y codebase-memory-mcp
```

**Codex CLI**

```bash
codex mcp add codebase-memory-mcp -- npx -y codebase-memory-mcp
```

**Gemini CLI**

```bash
gemini mcp add codebase-memory-mcp npx -y codebase-memory-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "codebase-memory-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "codebase-memory-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
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
    "codebase-memory-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "codebase-memory-mcp"
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
    "codebase-memory-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "codebase-memory-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "codebase-memory-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  codebase-memory-mcp:
    type: stdio
    cmd: npx
    args: ["-y","codebase-memory-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "codebase-memory-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "codebase-memory-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `codebase-memory-mcp.cordis.yml  →  dsh web --patch ./codebase-memory-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-codebase-memory-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: codebase-memory-mcp
        transport: stdio
        command: npx
        args: ["-y","codebase-memory-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="repowise-mcp"></a>

### Codebase intelligence for agents

[Repowise](https://github.com/repowise-dev/repowise) — `MCP server` · ★ 6.8k · License: AGPL-3.0 · Works with: All clients

Codebase intelligence for coding agents: dependency graph, git history, docs, decisions, and code health.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio repowise -- uvx repowise '<REPO_PATH>'
```

**Codex CLI**

```bash
codex mcp add repowise -- uvx repowise '<REPO_PATH>'
```

**Gemini CLI**

```bash
gemini mcp add repowise uvx repowise '<REPO_PATH>'
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "repowise": {
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "repowise": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
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
    "repowise": {
      "type": "local",
      "command": [
        "uvx",
        "repowise",
        "<REPO_PATH>"
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
    "repowise": {
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "repowise": {
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "repowise": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  repowise:
    type: stdio
    cmd: uvx
    args: ["repowise","<REPO_PATH>"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "repowise": {
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "repowise": {
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `repowise.cordis.yml  →  dsh web --patch ./repowise.cordis.yml`

```yaml
- insert:
    - id: mcp-repowise
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: repowise
        transport: stdio
        command: uvx
        args: ["repowise","<REPO_PATH>"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="sem-mcp"></a>

### Entity-level semantic code diff

[Ataraxy-Labs/sem](https://github.com/Ataraxy-Labs/sem) — `MCP server` · ★ 3.4k · License: Apache-2.0 · Works with: All clients

Entity-level code intelligence: semantic diff, impact analysis, blame, and context for AI agents.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio sem -- npx -y @ataraxy-labs/sem
```

**Codex CLI**

```bash
codex mcp add sem -- npx -y @ataraxy-labs/sem
```

**Gemini CLI**

```bash
gemini mcp add sem npx -y @ataraxy-labs/sem
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sem": {
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "sem": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
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
    "sem": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@ataraxy-labs/sem"
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
    "sem": {
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "sem": {
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "sem": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  sem:
    type: stdio
    cmd: npx
    args: ["-y","@ataraxy-labs/sem"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sem": {
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "sem": {
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `sem.cordis.yml  →  dsh web --patch ./sem.cordis.yml`

```yaml
- insert:
    - id: mcp-sem
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sem
        transport: stdio
        command: npx
        args: ["-y","@ataraxy-labs/sem"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="jcodemunch-mcp"></a>

### Token-efficient AST code exploration

[jCodemunch MCP](https://github.com/jgravelle/jcodemunch-mcp) — `MCP server` · ★ 2.7k · License: see repo · Works with: All clients

Token-efficient code exploration via tree-sitter AST parsing across 70+ languages, cutting tokens 86-99%.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio jcodemunch-mcp -- uvx jcodemunch-mcp
```

**Codex CLI**

```bash
codex mcp add jcodemunch-mcp -- uvx jcodemunch-mcp
```

**Gemini CLI**

```bash
gemini mcp add jcodemunch-mcp uvx jcodemunch-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "jcodemunch-mcp": {
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "jcodemunch-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
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
    "jcodemunch-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "jcodemunch-mcp"
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
    "jcodemunch-mcp": {
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "jcodemunch-mcp": {
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "jcodemunch-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  jcodemunch-mcp:
    type: stdio
    cmd: uvx
    args: ["jcodemunch-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "jcodemunch-mcp": {
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "jcodemunch-mcp": {
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `jcodemunch-mcp.cordis.yml  →  dsh web --patch ./jcodemunch-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-jcodemunch-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: jcodemunch-mcp
        transport: stdio
        command: uvx
        args: ["jcodemunch-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="pyscn-mcp"></a>

### Python code health analysis

[pyscn](https://github.com/ludo-technologies/pyscn) — `MCP server` · ★ 1.1k · License: MIT · Works with: All clients

Python code analysis for AI agents: complexity, dead code, clones, coupling, and an overall health score.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio pyscn -- uvx pyscn-mcp
```

**Codex CLI**

```bash
codex mcp add pyscn -- uvx pyscn-mcp
```

**Gemini CLI**

```bash
gemini mcp add pyscn uvx pyscn-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "pyscn": {
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "pyscn": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "pyscn-mcp"
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
    "pyscn": {
      "type": "local",
      "command": [
        "uvx",
        "pyscn-mcp"
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
    "pyscn": {
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "pyscn": {
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "pyscn": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  pyscn:
    type: stdio
    cmd: uvx
    args: ["pyscn-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "pyscn": {
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "pyscn": {
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `pyscn.cordis.yml  →  dsh web --patch ./pyscn.cordis.yml`

```yaml
- insert:
    - id: mcp-pyscn
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: pyscn
        transport: stdio
        command: uvx
        args: ["pyscn-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="octocode-mcp"></a>

### GitHub code research platform

[Octocode MCP - AI Context Platform](https://github.com/bgauryy/octocode-mcp) — `MCP server` · ★ 942 · License: MIT · Works with: All clients

AI code research platform to search, analyze, and extract insights from any GitHub repository; needs a GITHUB_TOKEN.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio octocode-mcp --env GITHUB_TOKEN='<GITHUB_TOKEN>' -- npx -y octocode-mcp
```

**Codex CLI**

```bash
codex mcp add octocode-mcp --env GITHUB_TOKEN='<GITHUB_TOKEN>' -- npx -y octocode-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e GITHUB_TOKEN='<GITHUB_TOKEN>' octocode-mcp npx -y octocode-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "octocode-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "octocode-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
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
    "octocode-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "octocode-mcp"
      ],
      "enabled": true,
      "environment": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "octocode-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "octocode-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "octocode-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  octocode-mcp:
    type: stdio
    cmd: npx
    args: ["-y","octocode-mcp"]
    envs:
      GITHUB_TOKEN: "<GITHUB_TOKEN>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "octocode-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "octocode-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `octocode-mcp.cordis.yml  →  dsh web --patch ./octocode-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-octocode-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: octocode-mcp
        transport: stdio
        command: npx
        args: ["-y","octocode-mcp"]
        env: {"GITHUB_TOKEN":"<GITHUB_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="claude-code-skills-mcp"></a>

### Layered code graph with SCIP

[Hex Graph](https://github.com/levnikolaevich/claude-code-skills) — `MCP server` · ★ 566 · License: MIT · Works with: All clients

Deterministic layered code graph server with framework overlays and SCIP interoperability.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio hex-graph-mcp -- npx -y @levnikolaevich/hex-graph-mcp
```

**Codex CLI**

```bash
codex mcp add hex-graph-mcp -- npx -y @levnikolaevich/hex-graph-mcp
```

**Gemini CLI**

```bash
gemini mcp add hex-graph-mcp npx -y @levnikolaevich/hex-graph-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "hex-graph-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "hex-graph-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
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
    "hex-graph-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@levnikolaevich/hex-graph-mcp"
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
    "hex-graph-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "hex-graph-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "hex-graph-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  hex-graph-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@levnikolaevich/hex-graph-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "hex-graph-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "hex-graph-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `hex-graph-mcp.cordis.yml  →  dsh web --patch ./hex-graph-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-hex-graph-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: hex-graph-mcp
        transport: stdio
        command: npx
        args: ["-y","@levnikolaevich/hex-graph-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="muvon-octocode-mcp"></a>

### Local semantic code indexer

[Octocode](https://github.com/muvon/octocode) — `MCP server` · ★ 477 · License: Apache-2.0 · Works with: All clients

AI-powered code indexer for a local repository with semantic search and knowledge graphs.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio octocode -- npx -y @muvon/octocode
```

**Codex CLI**

```bash
codex mcp add octocode -- npx -y @muvon/octocode
```

**Gemini CLI**

```bash
gemini mcp add octocode npx -y @muvon/octocode
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "octocode": {
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "octocode": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
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
    "octocode": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@muvon/octocode"
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
    "octocode": {
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "octocode": {
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "octocode": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  octocode:
    type: stdio
    cmd: npx
    args: ["-y","@muvon/octocode"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "octocode": {
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "octocode": {
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `octocode.cordis.yml  →  dsh web --patch ./octocode.cordis.yml`

```yaml
- insert:
    - id: mcp-octocode
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: octocode
        transport: stdio
        command: npx
        args: ["-y","@muvon/octocode"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="vexor-mcp"></a>

### Semantic search for files and code

[Vexor](https://github.com/scarletkc/vexor) — `MCP server` · ★ 241 · License: MIT · Works with: All clients

A semantic search engine for files and code; needs a VEXOR_API_KEY (and optionally a rerank API key).

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio vexor --env VEXOR_API_KEY='<VEXOR_API_KEY>' --env VEXOR_REMOTE_RERANK_API_KEY='<VEXOR_REMOTE_RERANK_API_KEY>' -- uvx vexor
```

**Codex CLI**

```bash
codex mcp add vexor --env VEXOR_API_KEY='<VEXOR_API_KEY>' --env VEXOR_REMOTE_RERANK_API_KEY='<VEXOR_REMOTE_RERANK_API_KEY>' -- uvx vexor
```

**Gemini CLI**

```bash
gemini mcp add -e VEXOR_API_KEY='<VEXOR_API_KEY>' -e VEXOR_REMOTE_RERANK_API_KEY='<VEXOR_REMOTE_RERANK_API_KEY>' vexor uvx vexor
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "vexor": {
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "vexor": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
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
    "vexor": {
      "type": "local",
      "command": [
        "uvx",
        "vexor"
      ],
      "enabled": true,
      "environment": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "vexor": {
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "vexor": {
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "vexor": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  vexor:
    type: stdio
    cmd: uvx
    args: ["vexor"]
    envs:
      VEXOR_API_KEY: "<VEXOR_API_KEY>"
      VEXOR_REMOTE_RERANK_API_KEY: "<VEXOR_REMOTE_RERANK_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "vexor": {
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "vexor": {
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `vexor.cordis.yml  →  dsh web --patch ./vexor.cordis.yml`

```yaml
- insert:
    - id: mcp-vexor
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: vexor
        transport: stdio
        command: uvx
        args: ["vexor"]
        env: {"VEXOR_API_KEY":"<VEXOR_API_KEY>","VEXOR_REMOTE_RERANK_API_KEY":"<VEXOR_REMOTE_RERANK_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>
