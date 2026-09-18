# Code Intelligence

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Serena](#serena) — Semantic code retrieval and editing through language servers: find symbols and references, and edit at symbol …

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
