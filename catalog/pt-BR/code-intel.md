# Inteligência de código

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Serena](#serena) — Busca e edição semântica de código via language servers: encontra símbolos e referências e edita no nível de s…

<a id="serena"></a>

### Serena

[Serena](https://github.com/oraios/serena) — `Servidor MCP` · ★ 30k · Licença: ver repo · Funciona com: Todos os clientes

Busca e edição semântica de código via language servers: encontra símbolos e referências e edita no nível de símbolo em vez de texto.

<details><summary>Instalar</summary>

**Claude Code**

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```bash
claude mcp add --transport stdio serena -- serena start-mcp-server --project-from-cwd
```

**Codex CLI**

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```bash
codex mcp add serena -- serena start-mcp-server --project-from-cwd
```

**Gemini CLI**

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```bash
gemini mcp add serena serena start-mcp-server --project-from-cwd
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

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

**OpenCode** — Arquivo: `opencode.json`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```yaml
extensions:
  serena:
    type: stdio
    cmd: serena
    args: ["start-mcp-server","--project-from-cwd"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

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

**DeepSeek Harness** — Arquivo: `serena.cordis.yml  →  dsh web --patch ./serena.cordis.yml`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

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
