# Nuvem, dados e infra

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [AWS MCP servers](#aws-mcp) — Servidores MCP open source para AWS (documentação, CDK, análise de custo, bancos de dados, Lambda e mais), cad…
- [Cloudflare MCP servers](#cloudflare-mcp) — Servidores MCP remotos da Cloudflare (bindings de Workers, builds, renderização de navegador, DNS analytics, a…
- [Microsoft MCP catalog](#microsoft-mcp) — Catálogo dos servidores MCP oficiais da Microsoft (Azure, Microsoft 365, ferramentas de dev) com links para ca…
- [Supabase MCP](#supabase-mcp) — Gerencie projetos Supabase pelo agente: tabelas, SQL, migrations, edge functions, logs e docs. Modos somente l…

<a id="aws-mcp"></a>

### AWS MCP servers

[AWS MCP servers](https://github.com/awslabs/mcp) — `Lista / registro` · ★ 9.7k · Licença: Apache-2.0 · Funciona com: —

Servidores MCP open source para AWS (documentação, CDK, análise de custo, bancos de dados, Lambda e mais), cada um com suas instruções de instalação.

<a id="cloudflare-mcp"></a>

### Cloudflare MCP servers

[Cloudflare MCP servers](https://github.com/cloudflare/mcp-server-cloudflare) — `Servidor MCP` · ★ 4.2k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidores MCP remotos da Cloudflare (bindings de Workers, builds, renderização de navegador, DNS analytics, audit logs…). A configuração mostrada conecta o servidor de Workers Bindings.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "serverUrl": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  cloudflare-bindings:
    type: streamable_http
    uri: https://bindings.mcp.cloudflare.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `cloudflare-bindings.cordis.yml  →  dsh web --patch ./cloudflare-bindings.cordis.yml`

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

[Microsoft MCP catalog](https://github.com/microsoft/mcp) — `Lista / registro` · ★ 3.7k · Licença: MIT · Funciona com: —

Catálogo dos servidores MCP oficiais da Microsoft (Azure, Microsoft 365, ferramentas de dev) com links para cada implementação.

<a id="supabase-mcp"></a>

### Supabase MCP

[Supabase MCP](https://github.com/supabase/mcp) — `Servidor MCP` · ★ 2.9k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Gerencie projetos Supabase pelo agente: tabelas, SQL, migrations, edge functions, logs e docs. Modos somente leitura e por projeto via parâmetros na URL.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "supabase": {
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "supabase": {
      "serverUrl": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  supabase:
    type: streamable_http
    uri: https://mcp.supabase.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `supabase.cordis.yml  →  dsh web --patch ./supabase.cordis.yml`

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
