# Documentação e conhecimento

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Context7](#context7) — Documentação de bibliotecas atualizada e por versão, com exemplos de código, trazida ao contexto do agente sob…
- [GitMCP](#git-mcp) — Servidor remoto gratuito que transforma qualquer repositório ou site Pages do GitHub em fonte de documentação …
- [Full office suite inside DSH](#dsh-dsh-univer-office) — Traz planilhas, documentos, slides, canvases e tabelas relacionais para um único runtime dentro do DeepSeek Ha…
- [Editable diagrams in conversations](#dsh-dsh-diagram) — Diagramas editáveis do Excalidraw renderizados diretamente dentro das conversas do DeepSeek Harness.
- [LaTeX paper workbench with review](#dsh-paperlab) — Bancada de trabalho LaTeX estilo Overleaf: anote qualquer texto no PDF renderizado e deixe um agente do DSH re…
- [Text-to-slideshow presentation skill](#dsh-dsh-ppt) — Transforma uma frase ou um documento em uma apresentação HTML mais um PPTX editável, com sete layouts (incluin…
- [In-chat preview for produced files](#dsh-dsh-markdown-preview) — Pré-visualização no chat para arquivos produzidos: clique em um chip de arquivo para renderizar Markdown (mark…
- [Auto-generate architecture diagrams](#dsh-archify-integrations-deepseek-harness) — Gera diagramas interativos e autocontidos, validados, de arquitetura, fluxo de trabalho, sequência, fluxo de d…
- [MarkItDown MCP](#markitdown-mcp) — Converte PDF, documentos Office, imagens, áudio, HTML e mais em Markdown para o agente, usando o Microsoft Mar…

<a id="context7"></a>

### Context7

[Context7](https://github.com/upstash/context7) — `Servidor MCP` · ★ 62k · Licença: MIT · Funciona com: Todos os clientes

Documentação de bibliotecas atualizada e por versão, com exemplos de código, trazida ao contexto do agente sob demanda. Alternativa local: `npx -y @upstash/context7-mcp`.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http context7 https://mcp.context7.com/mcp
```

**Codex CLI**

```bash
codex mcp add context7 --url https://mcp.context7.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http context7 https://mcp.context7.com/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "context7": {
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "context7": {
      "type": "http",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "context7": {
      "type": "streamableHttp",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "context7": {
      "serverUrl": "https://mcp.context7.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "context7": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.context7.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  context7:
    type: streamable_http
    uri: https://mcp.context7.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "context7": {
      "type": "streamable-http",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "context7": {
      "type": "streamable-http",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `context7.cordis.yml  →  dsh web --patch ./context7.cordis.yml`

```yaml
- insert:
    - id: mcp-context7
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: context7
        transport: streamable-http
        url: https://mcp.context7.com/mcp
```

</details>

<a id="git-mcp"></a>

### GitMCP

[GitMCP](https://github.com/idosal/git-mcp) — `Servidor MCP` · ★ 8.4k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor remoto gratuito que transforma qualquer repositório ou site Pages do GitHub em fonte de documentação (use https://gitmcp.io/OWNER/REPO para um repo).

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http gitmcp https://gitmcp.io/docs
```

**Codex CLI**

```bash
codex mcp add gitmcp --url https://gitmcp.io/docs
```

**Gemini CLI**

```bash
gemini mcp add --transport http gitmcp https://gitmcp.io/docs
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "gitmcp": {
      "url": "https://gitmcp.io/docs"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "gitmcp": {
      "type": "http",
      "url": "https://gitmcp.io/docs"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "gitmcp": {
      "type": "remote",
      "url": "https://gitmcp.io/docs",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "gitmcp": {
      "type": "streamableHttp",
      "url": "https://gitmcp.io/docs"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "gitmcp": {
      "serverUrl": "https://gitmcp.io/docs"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "gitmcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://gitmcp.io/docs"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  gitmcp:
    type: streamable_http
    uri: https://gitmcp.io/docs
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "gitmcp": {
      "type": "streamable-http",
      "url": "https://gitmcp.io/docs"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "gitmcp": {
      "type": "streamable-http",
      "url": "https://gitmcp.io/docs"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `gitmcp.cordis.yml  →  dsh web --patch ./gitmcp.cordis.yml`

```yaml
- insert:
    - id: mcp-gitmcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: gitmcp
        transport: streamable-http
        url: https://gitmcp.io/docs
```

</details>

<a id="dsh-dsh-univer-office"></a>

### Full office suite inside DSH

[dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) — `Plugin nativo` · ★ 365 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Traz planilhas, documentos, slides, canvases e tabelas relacionais para um único runtime dentro do DeepSeek Harness, com dados conectados, validação, mudanças versionadas e worktrees isolados para colaboração multiagente.

**Alternativas:**

- [kw78/dsh-office-tools](https://github.com/kw78/dsh-office-tools) (★ 20) — Oferece ferramentas mais simples para criar/ler Word, criar/ler/atualizar Excel e criar/ler PowerPoint com posicionamento de imagens
- [didclawapp-ai/DSH-Office](https://github.com/didclawapp-ai/DSH-Office) (★ 5) — Também lida com PDF, exposto como ferramentas office_schema/office_write/office_edit/office_read por uma CLI local

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dream-num/dsh-univer-office
```

</details>

<a id="dsh-dsh-diagram"></a>

### Editable diagrams in conversations

[hanzhangzzz/dsh-diagram](https://github.com/hanzhangzzz/dsh-diagram) — `Plugin nativo` · ★ 13 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Diagramas editáveis do Excalidraw renderizados diretamente dentro das conversas do DeepSeek Harness.

**Alternativas:**

- [MrmoLabs/dsh-mermaid](https://github.com/MrmoLabs/dsh-mermaid) (★ 11) — Renderiza blocos de código Mermaid como SVG, com streaming, zoom/pan em tela cheia e exportação SVG

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:hanzhangzzz/dsh-diagram
```

</details>

<a id="dsh-paperlab"></a>

### LaTeX paper workbench with review

[maple-pwn/paperlab](https://github.com/maple-pwn/paperlab) — `Plugin nativo` · ★ 7 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Bancada de trabalho LaTeX estilo Overleaf: anote qualquer texto no PDF renderizado e deixe um agente do DSH revisar as fontes, com checagem de compilação e histórico git.

**Alternativas:**

- [fly233338/dsh-overleaf](https://github.com/fly233338/dsh-overleaf) (★ 12) — Conecta múltiplos projetos existentes no Overleaf via OverleafMCP para navegação, análise e atualizações de arquivo via Git

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:maple-pwn/paperlab
```

</details>

<a id="dsh-dsh-ppt"></a>

### Text-to-slideshow presentation skill

[STARDUSTLC666/dsh-ppt](https://github.com/STARDUSTLC666/dsh-ppt) — `Plugin nativo` · ★ 6 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Transforma uma frase ou um documento em uma apresentação HTML mais um PPTX editável, com sete layouts (incluindo citações e tabelas PPTX nativas), notas do apresentador, cinco temas embutidos e suporte bilíngue.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:STARDUSTLC666/dsh-ppt
```

</details>

<a id="dsh-dsh-markdown-preview"></a>

### In-chat preview for produced files

[GitHubJiKe/dsh-markdown-preview](https://github.com/GitHubJiKe/dsh-markdown-preview) — `Plugin nativo` · ★ 2 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Pré-visualização no chat para arquivos produzidos: clique em um chip de arquivo para renderizar Markdown (markdown-it mais highlight.js no servidor), imagens ou texto simples direto na conversa, com abrir no app do sistema e mostrar na pasta a um clique.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:GitHubJiKe/dsh-markdown-preview
```

</details>

<a id="dsh-archify-integrations-deepseek-harness"></a>

### Auto-generate architecture diagrams

[tt-a1i/archify#integrations/deepseek-harness](https://github.com/tt-a1i/archify/tree/main/integrations/deepseek-harness) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Gera diagramas interativos e autocontidos, validados, de arquitetura, fluxo de trabalho, sequência, fluxo de dados e ciclo de vida diretamente a partir de repositórios ou descrições de sistema.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:tt-a1i/archify#path:/integrations/deepseek-harness
```

</details>

<a id="markitdown-mcp"></a>

### MarkItDown MCP

[MarkItDown MCP](https://github.com/microsoft/markitdown/tree/main/packages/markitdown-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Converte PDF, documentos Office, imagens, áudio, HTML e mais em Markdown para o agente, usando o Microsoft MarkItDown.

<details><summary>Instalar</summary>

**Claude Code**

Pré-requisito: `pip install markitdown-mcp`

```bash
claude mcp add --transport stdio markitdown -- markitdown-mcp
```

**Codex CLI**

Pré-requisito: `pip install markitdown-mcp`

```bash
codex mcp add markitdown -- markitdown-mcp
```

**Gemini CLI**

Pré-requisito: `pip install markitdown-mcp`

```bash
gemini mcp add markitdown markitdown-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Pré-requisito: `pip install markitdown-mcp`

```json
{
  "mcpServers": {
    "markitdown": {
      "command": "markitdown-mcp",
      "args": []
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

Pré-requisito: `pip install markitdown-mcp`

```json
{
  "servers": {
    "markitdown": {
      "type": "stdio",
      "command": "markitdown-mcp",
      "args": []
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

Pré-requisito: `pip install markitdown-mcp`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "markitdown": {
      "type": "local",
      "command": [
        "markitdown-mcp"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Pré-requisito: `pip install markitdown-mcp`

```json
{
  "mcpServers": {
    "markitdown": {
      "command": "markitdown-mcp",
      "args": []
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

Pré-requisito: `pip install markitdown-mcp`

```json
{
  "mcpServers": {
    "markitdown": {
      "command": "markitdown-mcp",
      "args": []
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

Pré-requisito: `pip install markitdown-mcp`

```json
{
  "context_servers": {
    "markitdown": {
      "source": "custom",
      "command": "markitdown-mcp",
      "args": []
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

Pré-requisito: `pip install markitdown-mcp`

```yaml
extensions:
  markitdown:
    type: stdio
    cmd: markitdown-mcp
    args: []
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Pré-requisito: `pip install markitdown-mcp`

```json
{
  "mcpServers": {
    "markitdown": {
      "command": "markitdown-mcp",
      "args": []
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

Pré-requisito: `pip install markitdown-mcp`

```json
{
  "mcpServers": {
    "markitdown": {
      "command": "markitdown-mcp",
      "args": []
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `markitdown.cordis.yml  →  dsh web --patch ./markitdown.cordis.yml`

Pré-requisito: `pip install markitdown-mcp`

```yaml
- insert:
    - id: mcp-markitdown
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: markitdown
        transport: stdio
        command: markitdown-mcp
        args: []
        env: {}
        cwd: !!js process.cwd()
```

</details>
