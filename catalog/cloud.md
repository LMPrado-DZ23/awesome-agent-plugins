# Cloud, Data & Infra

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [AWS MCP servers](#aws-mcp) — Open-source MCP servers for AWS (documentation, CDK, cost analysis, databases, Lambda and more), each with its…
- [Cloudflare MCP servers](#cloudflare-mcp) — Cloudflare's remote MCP servers (Workers bindings, builds, browser rendering, DNS analytics, audit logs…). The…
- [Microsoft MCP catalog](#microsoft-mcp) — Catalog of official Microsoft MCP servers (Azure, Microsoft 365, dev tools) with links to each implementation.
- [Supabase MCP](#supabase-mcp) — Manage Supabase projects from the agent: tables, SQL, migrations, edge functions, logs and docs. Supports read…

<a id="aws-mcp"></a>

### AWS MCP servers

[AWS MCP servers](https://github.com/awslabs/mcp) — `Curated list / registry` · ★ 9.7k · License: Apache-2.0 · Works with: —

Open-source MCP servers for AWS (documentation, CDK, cost analysis, databases, Lambda and more), each with its own install instructions.

<a id="cloudflare-mcp"></a>

### Cloudflare MCP servers

[Cloudflare MCP servers](https://github.com/cloudflare/mcp-server-cloudflare) — `MCP server` · ★ 4.2k · License: Apache-2.0 · Works with: All clients

Cloudflare's remote MCP servers (Workers bindings, builds, browser rendering, DNS analytics, audit logs…). The config shown connects the Workers Bindings server.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http cloudflare-bindings https://bindings.mcp.cloudflare.com/mcp
```

**Codex CLI**

```bash
codex mcp add cloudflare-bindings --url https://bindings.mcp.cloudflare.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http cloudflare-bindings https://bindings.mcp.cloudflare.com/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "cloudflare-bindings": {
      "type": "http",
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "cloudflare-bindings": {
      "type": "remote",
      "url": "https://bindings.mcp.cloudflare.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "type": "streamableHttp",
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "serverUrl": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "cloudflare-bindings": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://bindings.mcp.cloudflare.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  cloudflare-bindings:
    type: streamable_http
    uri: https://bindings.mcp.cloudflare.com/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "type": "streamable-http",
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "type": "streamable-http",
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `cloudflare-bindings.cordis.yml  →  dsh web --patch ./cloudflare-bindings.cordis.yml`

```yaml
- insert:
    - id: mcp-cloudflare-bindings
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: cloudflare-bindings
        transport: streamable-http
        url: https://bindings.mcp.cloudflare.com/mcp
```

</details>

<a id="microsoft-mcp"></a>

### Microsoft MCP catalog

[Microsoft MCP catalog](https://github.com/microsoft/mcp) — `Curated list / registry` · ★ 3.7k · License: MIT · Works with: —

Catalog of official Microsoft MCP servers (Azure, Microsoft 365, dev tools) with links to each implementation.

<a id="supabase-mcp"></a>

### Supabase MCP

[Supabase MCP](https://github.com/supabase/mcp) — `MCP server` · ★ 2.9k · License: Apache-2.0 · Works with: All clients

Manage Supabase projects from the agent: tables, SQL, migrations, edge functions, logs and docs. Supports read-only and project-scoped modes via URL parameters.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http supabase https://mcp.supabase.com/mcp
```

**Codex CLI**

```bash
codex mcp add supabase --url https://mcp.supabase.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http supabase https://mcp.supabase.com/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "supabase": {
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "supabase": {
      "type": "http",
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "supabase": {
      "type": "remote",
      "url": "https://mcp.supabase.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "supabase": {
      "type": "streamableHttp",
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "supabase": {
      "serverUrl": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "supabase": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.supabase.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  supabase:
    type: streamable_http
    uri: https://mcp.supabase.com/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "supabase": {
      "type": "streamable-http",
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "supabase": {
      "type": "streamable-http",
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `supabase.cordis.yml  →  dsh web --patch ./supabase.cordis.yml`

```yaml
- insert:
    - id: mcp-supabase
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: supabase
        transport: streamable-http
        url: https://mcp.supabase.com/mcp
```

</details>
