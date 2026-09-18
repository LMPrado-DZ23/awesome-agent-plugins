# Documentação e conhecimento

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Context7](#context7) — Documentação de bibliotecas atualizada e por versão, com exemplos de código, trazida ao contexto do agente sob…
- [Nature-style academic writing skills](#nature-skills) — 20 skills adaptadas às convenções de escrita acadêmica da revista Nature e ao design de figuras científicas, i…
- [OfficeCLI agent office suite](#officecli) — Suíte de escritório feita para agentes de IA lerem, editarem e automatizarem arquivos Word, Excel e PowerPoint…
- [AnyDoc document to Markdown](#anydoc) — Skill único que converte arquivos Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV e PDF em Markdown limp…
- [ADR authoring skills](#architecture-decision-record) — Pequeno pacote de skills que ensina um agente a escrever e manter Architecture Decision Records para planejame…
- [GitMCP](#git-mcp) — Servidor remoto gratuito que transforma qualquer repositório ou site Pages do GitHub em fonte de documentação …
- [Claude Code reference search](#claude-code-ultimate-guide-mcp) — Busca no Claude Code Ultimate Guide e em referências legíveis por máquina, a partir de qualquer cliente MCP.
- [Zotero research library access](#zotero-mcp) — Busca, leitura, anotação e adição de itens na biblioteca de pesquisa do Zotero, local ou web; exige ZOTERO_API…
- [Simplified Technical English skill](#simpleenglish) — Agent skill que faz um LLM escrever documentação seguindo o ASD-STE100 Simplified Technical English, um padrão…
- [arXiv paper search and analysis](#arxiv-mcp-server) — Busca artigos no arXiv, baixa o texto completo e oferece busca semântica, grafos de citação e alertas.
- [Microsoft Learn documentation](#mcp) — Servidor oficial do Microsoft Learn com documentação confiável em tempo real e exemplos de código para agentes…
- [PostgreSQL docs and best practices](#pg-aiguide-mcp) — Documentação e boas práticas abrangentes de PostgreSQL, incluindo ferramentas do ecossistema; exige OPENAI_API…
- [Academic econometrics research skills](#claude-code-my-workflow) — Template pronto para fork do Claude Code para pesquisadores acadêmicos usando LaTeX/Beamer e R, com revisão mu…
- [3D and AR SDK reference](#sceneview-mcp) — Documentação de API, exemplos, validação e geração de código para o SDK 3D e AR SceneView em Android, iOS e We…
- [Token-efficient docs search](#ref-tools-mcp) — Busca eficiente em tokens para agentes de código sobre documentação pública e privada; exige REF_API_KEY.
- [PDF reading with page citations](#pdf-reader-mcp) — Servidor de PDF com foco em evidências, retornando página e coordenadas citáveis dos trechos do documento.
- [Full office suite inside DSH](#dsh-dsh-univer-office) — Traz planilhas, documentos, slides, canvases e tabelas relacionais para um único runtime dentro do DeepSeek Ha…
- [Yuque knowledge base access](#yuque-mcp-server) — Expõe uma base de conhecimento do Yuque a assistentes de IA; exige um token pessoal, de grupo ou geral do Yuqu…
- [Unified SAP documentation search](#mcp-sap-docs) — Busca unificada e rápida na documentação SAP (SAPUI5, CAP, OpenUI5, wdi5) usando busca full-text BM25.
- [Editable diagrams in conversations](#dsh-dsh-diagram) — Diagramas editáveis do Excalidraw renderizados diretamente dentro das conversas do DeepSeek Harness.
- [LaTeX paper workbench with review](#dsh-paperlab) — Bancada de trabalho LaTeX estilo Overleaf: anote qualquer texto no PDF renderizado e deixe um agente do DSH re…
- [Text-to-slideshow presentation skill](#dsh-dsh-ppt) — Transforma uma frase ou um documento em uma apresentação HTML mais um PPTX editável, com sete layouts (incluin…
- [In-chat preview for produced files](#dsh-dsh-markdown-preview) — Pré-visualização no chat para arquivos produzidos: clique em um chip de arquivo para renderizar Markdown (mark…
- [Auto-generate architecture diagrams](#dsh-archify-integrations-deepseek-harness) — Gera diagramas interativos e autocontidos, validados, de arquitetura, fluxo de trabalho, sequência, fluxo de d…
- [Explore Claude Code source](#claude-code-mcp-server) — Explora o código-fonte do CLI do Claude Code: navega por ferramentas, comandos e faz busca no código.
- [MarkItDown MCP](#markitdown-mcp) — Converte PDF, documentos Office, imagens, áudio, HTML e mais em Markdown para o agente, usando o Microsoft Mar…
- [Org's technical decisions log](#packmind-mcp-server) — Captura, escala e reforça as decisões técnicas de uma organização como referência pesquisável.
- [Svelte docs and autofixing](#ai-tools-mcp-stdio) — Servidor oficial do Svelte com documentação e ferramentas de correção automática para desenvolvimento em Svelt…
- [UI5 Web Components for React docs](#webcomponents-react-mcp-server) — Documentação oficial para desenvolvedores e assistência de API para UI5 Web Components for React.

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

<a id="nature-skills"></a>

### Nature-style academic writing skills

[Yuan1z0825/nature-skills](https://github.com/Yuan1z0825/nature-skills) — `Agent Skills` · ★ 43k · Licença: Apache-2.0 · Funciona com: Todos os clientes

20 skills adaptadas às convenções de escrita acadêmica da revista Nature e ao design de figuras científicas, incluindo pipelines de literatura, citações e conversão de artigo para slides.

**Alternativas:**

- [zLanqing/codex-claude-academic-skills](https://github.com/zLanqing/codex-claude-academic-skills) (★ 4.0k) — Fluxo acadêmico mais amplo cobrindo revisão de literatura, polimento de texto e ferramentas de computação científica.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add Yuan1z0825/nature-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Yuan1z0825/nature-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add Yuan1z0825/nature-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Yuan1z0825/nature-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Yuan1z0825/nature-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Yuan1z0825/nature-skills -a opencode -g
```

**Cline**

```bash
npx skills add Yuan1z0825/nature-skills -a cline -g
```

**Windsurf**

```bash
npx skills add Yuan1z0825/nature-skills -a windsurf -g
```

**Zed**

```bash
npx skills add Yuan1z0825/nature-skills -a zed -g
```

**Goose**

```bash
npx skills add Yuan1z0825/nature-skills -a goose -g
```

**Kiro**

```bash
npx skills add Yuan1z0825/nature-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Yuan1z0825/nature-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Yuan1z0825/nature-skills -a universal
```

</details>

<a id="officecli"></a>

### OfficeCLI agent office suite

[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) — `Agent Skills` · ★ 31k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Suíte de escritório feita para agentes de IA lerem, editarem e automatizarem arquivos Word, Excel e PowerPoint, com skills dedicadas para modelos financeiros, pitch decks e dashboards.

**Alternativas:**

- [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) (★ 7.2k) — Suíte de escritório alternativa e gratuita (docs, planilhas, slides, PDF) com CLI e skill próprios.
- [OpenSenseNova/SenseNova-Skills](https://github.com/OpenSenseNova/SenseNova-Skills) (★ 5.6k) — Skills modulares de automação de escritório para fluxos de Excel: formatação, coloração e relatórios de KPI.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add iOfficeAI/OfficeCLI -a claude-code -g
```

**Codex CLI**

```bash
npx skills add iOfficeAI/OfficeCLI -a codex -g
```

**Gemini CLI**

```bash
npx skills add iOfficeAI/OfficeCLI -a gemini-cli -g
```

**Cursor**

```bash
npx skills add iOfficeAI/OfficeCLI -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add iOfficeAI/OfficeCLI -a github-copilot -g
```

**OpenCode**

```bash
npx skills add iOfficeAI/OfficeCLI -a opencode -g
```

**Cline**

```bash
npx skills add iOfficeAI/OfficeCLI -a cline -g
```

**Windsurf**

```bash
npx skills add iOfficeAI/OfficeCLI -a windsurf -g
```

**Zed**

```bash
npx skills add iOfficeAI/OfficeCLI -a zed -g
```

**Goose**

```bash
npx skills add iOfficeAI/OfficeCLI -a goose -g
```

**Kiro**

```bash
npx skills add iOfficeAI/OfficeCLI -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add iOfficeAI/OfficeCLI -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add iOfficeAI/OfficeCLI -a universal
```

</details>

<a id="anydoc"></a>

### AnyDoc document to Markdown

[firecrawl/anydoc](https://github.com/firecrawl/anydoc) — `Agent Skills` · ★ 22k · Licença: MIT · Funciona com: Todos os clientes

Skill único que converte arquivos Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV e PDF em Markdown limpo, usando um conversor em Rust com bindings para Node.js e Python.

**Alternativas:**

- [opendatalab/MinerU](https://github.com/opendatalab/MinerU) (★ 80k) — Adiciona análise de layout com OCR para PDFs escaneados e documentos complexos.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add firecrawl/anydoc -a claude-code -g
```

**Codex CLI**

```bash
npx skills add firecrawl/anydoc -a codex -g
```

**Gemini CLI**

```bash
npx skills add firecrawl/anydoc -a gemini-cli -g
```

**Cursor**

```bash
npx skills add firecrawl/anydoc -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add firecrawl/anydoc -a github-copilot -g
```

**OpenCode**

```bash
npx skills add firecrawl/anydoc -a opencode -g
```

**Cline**

```bash
npx skills add firecrawl/anydoc -a cline -g
```

**Windsurf**

```bash
npx skills add firecrawl/anydoc -a windsurf -g
```

**Zed**

```bash
npx skills add firecrawl/anydoc -a zed -g
```

**Goose**

```bash
npx skills add firecrawl/anydoc -a goose -g
```

**Kiro**

```bash
npx skills add firecrawl/anydoc -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add firecrawl/anydoc -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add firecrawl/anydoc -a universal
```

</details>

<a id="architecture-decision-record"></a>

### ADR authoring skills

[architecture-decision-record/architecture-decision-record](https://github.com/architecture-decision-record/architecture-decision-record) — `Agent Skills` · ★ 17k · Licença: ver repo · Funciona com: Todos os clientes

Pequeno pacote de skills que ensina um agente a escrever e manter Architecture Decision Records para planejamento de software e documentação de liderança de TI.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a claude-code -g
```

**Codex CLI**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a codex -g
```

**Gemini CLI**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a gemini-cli -g
```

**Cursor**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a github-copilot -g
```

**OpenCode**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a opencode -g
```

**Cline**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a cline -g
```

**Windsurf**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a windsurf -g
```

**Zed**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a zed -g
```

**Goose**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a goose -g
```

**Kiro**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add architecture-decision-record/architecture-decision-record -a universal
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

<a id="claude-code-ultimate-guide-mcp"></a>

### Claude Code reference search

[Claude Code Ultimate Guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) — `Servidor MCP` · ★ 6.0k · Licença: CC-BY-SA-4.0 · Funciona com: Todos os clientes

Busca no Claude Code Ultimate Guide e em referências legíveis por máquina, a partir de qualquer cliente MCP.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio claude-code-guide -- npx -y claude-code-ultimate-guide-mcp
```

**Codex CLI**

```bash
codex mcp add claude-code-guide -- npx -y claude-code-ultimate-guide-mcp
```

**Gemini CLI**

```bash
gemini mcp add claude-code-guide npx -y claude-code-ultimate-guide-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "claude-code-guide": {
      "command": "npx",
      "args": [
        "-y",
        "claude-code-ultimate-guide-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "claude-code-guide": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "claude-code-ultimate-guide-mcp"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "claude-code-guide": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "claude-code-ultimate-guide-mcp"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "claude-code-guide": {
      "command": "npx",
      "args": [
        "-y",
        "claude-code-ultimate-guide-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "claude-code-guide": {
      "command": "npx",
      "args": [
        "-y",
        "claude-code-ultimate-guide-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "claude-code-guide": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "claude-code-ultimate-guide-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  claude-code-guide:
    type: stdio
    cmd: npx
    args: ["-y","claude-code-ultimate-guide-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "claude-code-guide": {
      "command": "npx",
      "args": [
        "-y",
        "claude-code-ultimate-guide-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "claude-code-guide": {
      "command": "npx",
      "args": [
        "-y",
        "claude-code-ultimate-guide-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `claude-code-guide.cordis.yml  →  dsh web --patch ./claude-code-guide.cordis.yml`

```yaml
- insert:
    - id: mcp-claude-code-guide
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: claude-code-guide
        transport: stdio
        command: npx
        args: ["-y","claude-code-ultimate-guide-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="zotero-mcp"></a>

### Zotero research library access

[Zotero MCP](https://github.com/54yyyu/zotero-mcp) — `Servidor MCP` · ★ 5.1k · Licença: MIT · Funciona com: Todos os clientes

Busca, leitura, anotação e adição de itens na biblioteca de pesquisa do Zotero, local ou web; exige ZOTERO_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio zotero-mcp --env ZOTERO_API_KEY='<ZOTERO_API_KEY>' -- uvx zotero-mcp-server
```

**Codex CLI**

```bash
codex mcp add zotero-mcp --env ZOTERO_API_KEY='<ZOTERO_API_KEY>' -- uvx zotero-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e ZOTERO_API_KEY='<ZOTERO_API_KEY>' zotero-mcp uvx zotero-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "zotero-mcp": {
      "command": "uvx",
      "args": [
        "zotero-mcp-server"
      ],
      "env": {
        "ZOTERO_API_KEY": "<ZOTERO_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "zotero-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "zotero-mcp-server"
      ],
      "env": {
        "ZOTERO_API_KEY": "<ZOTERO_API_KEY>"
      }
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "zotero-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "zotero-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "ZOTERO_API_KEY": "<ZOTERO_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "zotero-mcp": {
      "command": "uvx",
      "args": [
        "zotero-mcp-server"
      ],
      "env": {
        "ZOTERO_API_KEY": "<ZOTERO_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "zotero-mcp": {
      "command": "uvx",
      "args": [
        "zotero-mcp-server"
      ],
      "env": {
        "ZOTERO_API_KEY": "<ZOTERO_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "zotero-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "zotero-mcp-server"
      ],
      "env": {
        "ZOTERO_API_KEY": "<ZOTERO_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  zotero-mcp:
    type: stdio
    cmd: uvx
    args: ["zotero-mcp-server"]
    envs:
      ZOTERO_API_KEY: "<ZOTERO_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "zotero-mcp": {
      "command": "uvx",
      "args": [
        "zotero-mcp-server"
      ],
      "env": {
        "ZOTERO_API_KEY": "<ZOTERO_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "zotero-mcp": {
      "command": "uvx",
      "args": [
        "zotero-mcp-server"
      ],
      "env": {
        "ZOTERO_API_KEY": "<ZOTERO_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `zotero-mcp.cordis.yml  →  dsh web --patch ./zotero-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-zotero-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: zotero-mcp
        transport: stdio
        command: uvx
        args: ["zotero-mcp-server"]
        env: {"ZOTERO_API_KEY":"<ZOTERO_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="simpleenglish"></a>

### Simplified Technical English skill

[AminBlg/SimpleEnglish](https://github.com/AminBlg/SimpleEnglish) — `Agent Skills` · ★ 3.4k · Licença: MIT · Funciona com: Todos os clientes

Agent skill que faz um LLM escrever documentação seguindo o ASD-STE100 Simplified Technical English, um padrão de linguagem controlada.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add AminBlg/SimpleEnglish -a claude-code -g
```

**Codex CLI**

```bash
npx skills add AminBlg/SimpleEnglish -a codex -g
```

**Gemini CLI**

```bash
npx skills add AminBlg/SimpleEnglish -a gemini-cli -g
```

**Cursor**

```bash
npx skills add AminBlg/SimpleEnglish -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add AminBlg/SimpleEnglish -a github-copilot -g
```

**OpenCode**

```bash
npx skills add AminBlg/SimpleEnglish -a opencode -g
```

**Cline**

```bash
npx skills add AminBlg/SimpleEnglish -a cline -g
```

**Windsurf**

```bash
npx skills add AminBlg/SimpleEnglish -a windsurf -g
```

**Zed**

```bash
npx skills add AminBlg/SimpleEnglish -a zed -g
```

**Goose**

```bash
npx skills add AminBlg/SimpleEnglish -a goose -g
```

**Kiro**

```bash
npx skills add AminBlg/SimpleEnglish -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add AminBlg/SimpleEnglish -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add AminBlg/SimpleEnglish -a universal
```

</details>

<a id="arxiv-mcp-server"></a>

### arXiv paper search and analysis

[blazickjp/arxiv-mcp-server](https://github.com/blazickjp/arxiv-mcp-server) — `Servidor MCP` · ★ 3.2k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Busca artigos no arXiv, baixa o texto completo e oferece busca semântica, grafos de citação e alertas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio arxiv-mcp-server -- uvx arxiv-mcp-server
```

**Codex CLI**

```bash
codex mcp add arxiv-mcp-server -- uvx arxiv-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add arxiv-mcp-server uvx arxiv-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "arxiv-mcp-server": {
      "command": "uvx",
      "args": [
        "arxiv-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "arxiv-mcp-server": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "arxiv-mcp-server"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "arxiv-mcp-server": {
      "type": "local",
      "command": [
        "uvx",
        "arxiv-mcp-server"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "arxiv-mcp-server": {
      "command": "uvx",
      "args": [
        "arxiv-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "arxiv-mcp-server": {
      "command": "uvx",
      "args": [
        "arxiv-mcp-server"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "arxiv-mcp-server": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "arxiv-mcp-server"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  arxiv-mcp-server:
    type: stdio
    cmd: uvx
    args: ["arxiv-mcp-server"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "arxiv-mcp-server": {
      "command": "uvx",
      "args": [
        "arxiv-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "arxiv-mcp-server": {
      "command": "uvx",
      "args": [
        "arxiv-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `arxiv-mcp-server.cordis.yml  →  dsh web --patch ./arxiv-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-arxiv-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: arxiv-mcp-server
        transport: stdio
        command: uvx
        args: ["arxiv-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp"></a>

### Microsoft Learn documentation

[Microsoft Learn MCP](https://github.com/MicrosoftDocs/mcp) — `Servidor MCP` · ★ 1.9k · Licença: CC-BY-4.0 · Funciona com: Todos os clientes

Servidor oficial do Microsoft Learn com documentação confiável em tempo real e exemplos de código para agentes de IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http microsoft-learn-mcp https://learn.microsoft.com/api/mcp
```

**Codex CLI**

```bash
codex mcp add microsoft-learn-mcp --url https://learn.microsoft.com/api/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http microsoft-learn-mcp https://learn.microsoft.com/api/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "microsoft-learn-mcp": {
      "url": "https://learn.microsoft.com/api/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "microsoft-learn-mcp": {
      "type": "http",
      "url": "https://learn.microsoft.com/api/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "microsoft-learn-mcp": {
      "type": "remote",
      "url": "https://learn.microsoft.com/api/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "microsoft-learn-mcp": {
      "type": "streamableHttp",
      "url": "https://learn.microsoft.com/api/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "microsoft-learn-mcp": {
      "serverUrl": "https://learn.microsoft.com/api/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "microsoft-learn-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://learn.microsoft.com/api/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  microsoft-learn-mcp:
    type: streamable_http
    uri: https://learn.microsoft.com/api/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "microsoft-learn-mcp": {
      "type": "streamable-http",
      "url": "https://learn.microsoft.com/api/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "microsoft-learn-mcp": {
      "type": "streamable-http",
      "url": "https://learn.microsoft.com/api/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `microsoft-learn-mcp.cordis.yml  →  dsh web --patch ./microsoft-learn-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-microsoft-learn-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: microsoft-learn-mcp
        transport: streamable-http
        url: https://learn.microsoft.com/api/mcp
```

</details>

<a id="pg-aiguide-mcp"></a>

### PostgreSQL docs and best practices

[timescale/pg-aiguide](https://github.com/timescale/pg-aiguide) — `Servidor MCP` · ★ 1.8k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Documentação e boas práticas abrangentes de PostgreSQL, incluindo ferramentas do ecossistema; exige OPENAI_API_KEY e parâmetros de conexão PG.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio pg-aiguide --env OPENAI_API_KEY='<OPENAI_API_KEY>' --env PGHOST='<PGHOST>' --env PGPORT='<PGPORT>' --env PGUSER='<PGUSER>' --env PGPASSWORD='<PGPASSWORD>' --env PGDATABASE='<PGDATABASE>' --env DB_SCHEMA='<DB_SCHEMA>' -- npx -y @tigerdata/pg-aiguide
```

**Codex CLI**

```bash
codex mcp add pg-aiguide --env OPENAI_API_KEY='<OPENAI_API_KEY>' --env PGHOST='<PGHOST>' --env PGPORT='<PGPORT>' --env PGUSER='<PGUSER>' --env PGPASSWORD='<PGPASSWORD>' --env PGDATABASE='<PGDATABASE>' --env DB_SCHEMA='<DB_SCHEMA>' -- npx -y @tigerdata/pg-aiguide
```

**Gemini CLI**

```bash
gemini mcp add -e OPENAI_API_KEY='<OPENAI_API_KEY>' -e PGHOST='<PGHOST>' -e PGPORT='<PGPORT>' -e PGUSER='<PGUSER>' -e PGPASSWORD='<PGPASSWORD>' -e PGDATABASE='<PGDATABASE>' -e DB_SCHEMA='<DB_SCHEMA>' pg-aiguide npx -y @tigerdata/pg-aiguide
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "pg-aiguide": {
      "command": "npx",
      "args": [
        "-y",
        "@tigerdata/pg-aiguide"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>",
        "PGHOST": "<PGHOST>",
        "PGPORT": "<PGPORT>",
        "PGUSER": "<PGUSER>",
        "PGPASSWORD": "<PGPASSWORD>",
        "PGDATABASE": "<PGDATABASE>",
        "DB_SCHEMA": "<DB_SCHEMA>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "pg-aiguide": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@tigerdata/pg-aiguide"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>",
        "PGHOST": "<PGHOST>",
        "PGPORT": "<PGPORT>",
        "PGUSER": "<PGUSER>",
        "PGPASSWORD": "<PGPASSWORD>",
        "PGDATABASE": "<PGDATABASE>",
        "DB_SCHEMA": "<DB_SCHEMA>"
      }
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "pg-aiguide": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@tigerdata/pg-aiguide"
      ],
      "enabled": true,
      "environment": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>",
        "PGHOST": "<PGHOST>",
        "PGPORT": "<PGPORT>",
        "PGUSER": "<PGUSER>",
        "PGPASSWORD": "<PGPASSWORD>",
        "PGDATABASE": "<PGDATABASE>",
        "DB_SCHEMA": "<DB_SCHEMA>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "pg-aiguide": {
      "command": "npx",
      "args": [
        "-y",
        "@tigerdata/pg-aiguide"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>",
        "PGHOST": "<PGHOST>",
        "PGPORT": "<PGPORT>",
        "PGUSER": "<PGUSER>",
        "PGPASSWORD": "<PGPASSWORD>",
        "PGDATABASE": "<PGDATABASE>",
        "DB_SCHEMA": "<DB_SCHEMA>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "pg-aiguide": {
      "command": "npx",
      "args": [
        "-y",
        "@tigerdata/pg-aiguide"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>",
        "PGHOST": "<PGHOST>",
        "PGPORT": "<PGPORT>",
        "PGUSER": "<PGUSER>",
        "PGPASSWORD": "<PGPASSWORD>",
        "PGDATABASE": "<PGDATABASE>",
        "DB_SCHEMA": "<DB_SCHEMA>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "pg-aiguide": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@tigerdata/pg-aiguide"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>",
        "PGHOST": "<PGHOST>",
        "PGPORT": "<PGPORT>",
        "PGUSER": "<PGUSER>",
        "PGPASSWORD": "<PGPASSWORD>",
        "PGDATABASE": "<PGDATABASE>",
        "DB_SCHEMA": "<DB_SCHEMA>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  pg-aiguide:
    type: stdio
    cmd: npx
    args: ["-y","@tigerdata/pg-aiguide"]
    envs:
      OPENAI_API_KEY: "<OPENAI_API_KEY>"
      PGHOST: "<PGHOST>"
      PGPORT: "<PGPORT>"
      PGUSER: "<PGUSER>"
      PGPASSWORD: "<PGPASSWORD>"
      PGDATABASE: "<PGDATABASE>"
      DB_SCHEMA: "<DB_SCHEMA>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "pg-aiguide": {
      "command": "npx",
      "args": [
        "-y",
        "@tigerdata/pg-aiguide"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>",
        "PGHOST": "<PGHOST>",
        "PGPORT": "<PGPORT>",
        "PGUSER": "<PGUSER>",
        "PGPASSWORD": "<PGPASSWORD>",
        "PGDATABASE": "<PGDATABASE>",
        "DB_SCHEMA": "<DB_SCHEMA>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "pg-aiguide": {
      "command": "npx",
      "args": [
        "-y",
        "@tigerdata/pg-aiguide"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>",
        "PGHOST": "<PGHOST>",
        "PGPORT": "<PGPORT>",
        "PGUSER": "<PGUSER>",
        "PGPASSWORD": "<PGPASSWORD>",
        "PGDATABASE": "<PGDATABASE>",
        "DB_SCHEMA": "<DB_SCHEMA>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `pg-aiguide.cordis.yml  →  dsh web --patch ./pg-aiguide.cordis.yml`

```yaml
- insert:
    - id: mcp-pg-aiguide
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: pg-aiguide
        transport: stdio
        command: npx
        args: ["-y","@tigerdata/pg-aiguide"]
        env: {"OPENAI_API_KEY":"<OPENAI_API_KEY>","PGHOST":"<PGHOST>","PGPORT":"<PGPORT>","PGUSER":"<PGUSER>","PGPASSWORD":"<PGPASSWORD>","PGDATABASE":"<PGDATABASE>","DB_SCHEMA":"<DB_SCHEMA>"}
        cwd: !!js process.cwd()
```

</details>

<a id="claude-code-my-workflow"></a>

### Academic econometrics research skills

[pedrohcgs/claude-code-my-workflow](https://github.com/pedrohcgs/claude-code-my-workflow) — `Agent Skills` · ★ 1.6k · Licença: MIT · Funciona com: Todos os clientes

Template pronto para fork do Claude Code para pesquisadores acadêmicos usando LaTeX/Beamer e R, com revisão multi-agente, gates de qualidade, QA adversarial e skills de protocolo de replicação.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a claude-code -g
```

**Codex CLI**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a codex -g
```

**Gemini CLI**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a gemini-cli -g
```

**Cursor**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a github-copilot -g
```

**OpenCode**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a opencode -g
```

**Cline**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a cline -g
```

**Windsurf**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a windsurf -g
```

**Zed**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a zed -g
```

**Goose**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a goose -g
```

**Kiro**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add pedrohcgs/claude-code-my-workflow -a universal
```

</details>

<a id="sceneview-mcp"></a>

### 3D and AR SDK reference

[SceneView/sceneview](https://github.com/SceneView/sceneview) — `Servidor MCP` · ★ 1.3k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Documentação de API, exemplos, validação e geração de código para o SDK 3D e AR SceneView em Android, iOS e Web.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp -- npx -y sceneview-mcp
```

**Codex CLI**

```bash
codex mcp add mcp -- npx -y sceneview-mcp
```

**Gemini CLI**

```bash
gemini mcp add mcp npx -y sceneview-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "sceneview-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "sceneview-mcp"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "sceneview-mcp"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "sceneview-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "sceneview-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "sceneview-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: stdio
    cmd: npx
    args: ["-y","sceneview-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "sceneview-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "sceneview-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp.cordis.yml  →  dsh web --patch ./mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp
        transport: stdio
        command: npx
        args: ["-y","sceneview-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="ref-tools-mcp"></a>

### Token-efficient docs search

[ref-tools/ref-tools-mcp](https://github.com/ref-tools/ref-tools-mcp) — `Servidor MCP` · ★ 1.2k · Licença: MIT · Funciona com: Todos os clientes

Busca eficiente em tokens para agentes de código sobre documentação pública e privada; exige REF_API_KEY.

**Alternativas:**

- [jDocmunch MCP](https://github.com/jgravelle/jdocmunch-mcp) (★ 203) — Busca local no nível de seção em arquivos .md, .rst, .adoc, .ipynb, .html, .yaml, .json e OpenAPI.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio ref-tools-mcp --env REF_API_KEY='<REF_API_KEY>' -- npx -y ref-tools-mcp
```

**Codex CLI**

```bash
codex mcp add ref-tools-mcp --env REF_API_KEY='<REF_API_KEY>' -- npx -y ref-tools-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e REF_API_KEY='<REF_API_KEY>' ref-tools-mcp npx -y ref-tools-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "ref-tools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ref-tools-mcp"
      ],
      "env": {
        "REF_API_KEY": "<REF_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "ref-tools-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "ref-tools-mcp"
      ],
      "env": {
        "REF_API_KEY": "<REF_API_KEY>"
      }
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "ref-tools-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "ref-tools-mcp"
      ],
      "enabled": true,
      "environment": {
        "REF_API_KEY": "<REF_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "ref-tools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ref-tools-mcp"
      ],
      "env": {
        "REF_API_KEY": "<REF_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "ref-tools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ref-tools-mcp"
      ],
      "env": {
        "REF_API_KEY": "<REF_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "ref-tools-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "ref-tools-mcp"
      ],
      "env": {
        "REF_API_KEY": "<REF_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  ref-tools-mcp:
    type: stdio
    cmd: npx
    args: ["-y","ref-tools-mcp"]
    envs:
      REF_API_KEY: "<REF_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "ref-tools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ref-tools-mcp"
      ],
      "env": {
        "REF_API_KEY": "<REF_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "ref-tools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ref-tools-mcp"
      ],
      "env": {
        "REF_API_KEY": "<REF_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `ref-tools-mcp.cordis.yml  →  dsh web --patch ./ref-tools-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-ref-tools-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: ref-tools-mcp
        transport: stdio
        command: npx
        args: ["-y","ref-tools-mcp"]
        env: {"REF_API_KEY":"<REF_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="pdf-reader-mcp"></a>

### PDF reading with page citations

[PDF Reader MCP](https://github.com/SylphxAI/pdf-reader-mcp) — `Servidor MCP` · ★ 934 · Licença: MIT · Funciona com: Todos os clientes

Servidor de PDF com foco em evidências, retornando página e coordenadas citáveis dos trechos do documento.

**Alternativas:**

- [Docling MCP](https://github.com/docling-project/docling-mcp) (★ 748) — Converte PDFs e outros formatos de documento em saída estruturada via Docling; exige uma chave de API do Docling.
- [PageIndex MCP](https://github.com/VectifyAI/pageindex-mcp) (★ 388) — RAG baseado em raciocínio para conversar com PDFs longos, locais ou online.
- [MinerU Open MCP](https://github.com/opendatalab/MinerU-Ecosystem) (★ 208) — Converte PDF, imagem, doc, ppt e xls em Markdown via a API do MinerU; exige MINERU_API_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio pdf-reader-mcp -- npx -y @sylphx/pdf-reader-mcp
```

**Codex CLI**

```bash
codex mcp add pdf-reader-mcp -- npx -y @sylphx/pdf-reader-mcp
```

**Gemini CLI**

```bash
gemini mcp add pdf-reader-mcp npx -y @sylphx/pdf-reader-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "pdf-reader-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sylphx/pdf-reader-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "pdf-reader-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@sylphx/pdf-reader-mcp"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "pdf-reader-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@sylphx/pdf-reader-mcp"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "pdf-reader-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sylphx/pdf-reader-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "pdf-reader-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sylphx/pdf-reader-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "pdf-reader-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@sylphx/pdf-reader-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  pdf-reader-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@sylphx/pdf-reader-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "pdf-reader-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sylphx/pdf-reader-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "pdf-reader-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sylphx/pdf-reader-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `pdf-reader-mcp.cordis.yml  →  dsh web --patch ./pdf-reader-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-pdf-reader-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: pdf-reader-mcp
        transport: stdio
        command: npx
        args: ["-y","@sylphx/pdf-reader-mcp"]
        env: {}
        cwd: !!js process.cwd()
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

<a id="yuque-mcp-server"></a>

### Yuque knowledge base access

[yuque/yuque-mcp-server](https://github.com/yuque/yuque-mcp-server) — `Servidor MCP` · ★ 245 · Licença: MIT · Funciona com: Todos os clientes

Expõe uma base de conhecimento do Yuque a assistentes de IA; exige um token pessoal, de grupo ou geral do Yuque.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio yuque-mcp --env YUQUE_PERSONAL_TOKEN='<YUQUE_PERSONAL_TOKEN>' --env YUQUE_GROUP_TOKEN='<YUQUE_GROUP_TOKEN>' --env YUQUE_TOKEN='<YUQUE_TOKEN>' -- npx -y yuque-mcp
```

**Codex CLI**

```bash
codex mcp add yuque-mcp --env YUQUE_PERSONAL_TOKEN='<YUQUE_PERSONAL_TOKEN>' --env YUQUE_GROUP_TOKEN='<YUQUE_GROUP_TOKEN>' --env YUQUE_TOKEN='<YUQUE_TOKEN>' -- npx -y yuque-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e YUQUE_PERSONAL_TOKEN='<YUQUE_PERSONAL_TOKEN>' -e YUQUE_GROUP_TOKEN='<YUQUE_GROUP_TOKEN>' -e YUQUE_TOKEN='<YUQUE_TOKEN>' yuque-mcp npx -y yuque-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "yuque-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "yuque-mcp"
      ],
      "env": {
        "YUQUE_PERSONAL_TOKEN": "<YUQUE_PERSONAL_TOKEN>",
        "YUQUE_GROUP_TOKEN": "<YUQUE_GROUP_TOKEN>",
        "YUQUE_TOKEN": "<YUQUE_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "yuque-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "yuque-mcp"
      ],
      "env": {
        "YUQUE_PERSONAL_TOKEN": "<YUQUE_PERSONAL_TOKEN>",
        "YUQUE_GROUP_TOKEN": "<YUQUE_GROUP_TOKEN>",
        "YUQUE_TOKEN": "<YUQUE_TOKEN>"
      }
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "yuque-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "yuque-mcp"
      ],
      "enabled": true,
      "environment": {
        "YUQUE_PERSONAL_TOKEN": "<YUQUE_PERSONAL_TOKEN>",
        "YUQUE_GROUP_TOKEN": "<YUQUE_GROUP_TOKEN>",
        "YUQUE_TOKEN": "<YUQUE_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "yuque-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "yuque-mcp"
      ],
      "env": {
        "YUQUE_PERSONAL_TOKEN": "<YUQUE_PERSONAL_TOKEN>",
        "YUQUE_GROUP_TOKEN": "<YUQUE_GROUP_TOKEN>",
        "YUQUE_TOKEN": "<YUQUE_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "yuque-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "yuque-mcp"
      ],
      "env": {
        "YUQUE_PERSONAL_TOKEN": "<YUQUE_PERSONAL_TOKEN>",
        "YUQUE_GROUP_TOKEN": "<YUQUE_GROUP_TOKEN>",
        "YUQUE_TOKEN": "<YUQUE_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "yuque-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "yuque-mcp"
      ],
      "env": {
        "YUQUE_PERSONAL_TOKEN": "<YUQUE_PERSONAL_TOKEN>",
        "YUQUE_GROUP_TOKEN": "<YUQUE_GROUP_TOKEN>",
        "YUQUE_TOKEN": "<YUQUE_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  yuque-mcp:
    type: stdio
    cmd: npx
    args: ["-y","yuque-mcp"]
    envs:
      YUQUE_PERSONAL_TOKEN: "<YUQUE_PERSONAL_TOKEN>"
      YUQUE_GROUP_TOKEN: "<YUQUE_GROUP_TOKEN>"
      YUQUE_TOKEN: "<YUQUE_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "yuque-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "yuque-mcp"
      ],
      "env": {
        "YUQUE_PERSONAL_TOKEN": "<YUQUE_PERSONAL_TOKEN>",
        "YUQUE_GROUP_TOKEN": "<YUQUE_GROUP_TOKEN>",
        "YUQUE_TOKEN": "<YUQUE_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "yuque-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "yuque-mcp"
      ],
      "env": {
        "YUQUE_PERSONAL_TOKEN": "<YUQUE_PERSONAL_TOKEN>",
        "YUQUE_GROUP_TOKEN": "<YUQUE_GROUP_TOKEN>",
        "YUQUE_TOKEN": "<YUQUE_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `yuque-mcp.cordis.yml  →  dsh web --patch ./yuque-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-yuque-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: yuque-mcp
        transport: stdio
        command: npx
        args: ["-y","yuque-mcp"]
        env: {"YUQUE_PERSONAL_TOKEN":"<YUQUE_PERSONAL_TOKEN>","YUQUE_GROUP_TOKEN":"<YUQUE_GROUP_TOKEN>","YUQUE_TOKEN":"<YUQUE_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-sap-docs"></a>

### Unified SAP documentation search

[marianfoo/mcp-sap-docs](https://github.com/marianfoo/mcp-sap-docs) — `Servidor MCP` · ★ 230 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Busca unificada e rápida na documentação SAP (SAPUI5, CAP, OpenUI5, wdi5) usando busca full-text BM25.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-sap-docs -- npx -y mcp-sap-docs
```

**Codex CLI**

```bash
codex mcp add mcp-sap-docs -- npx -y mcp-sap-docs
```

**Gemini CLI**

```bash
gemini mcp add mcp-sap-docs npx -y mcp-sap-docs
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-sap-docs": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-sap-docs"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-sap-docs": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "mcp-sap-docs"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp-sap-docs": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "mcp-sap-docs"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-sap-docs": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-sap-docs"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-sap-docs": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-sap-docs"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-sap-docs": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-sap-docs"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-sap-docs:
    type: stdio
    cmd: npx
    args: ["-y","mcp-sap-docs"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-sap-docs": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-sap-docs"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-sap-docs": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-sap-docs"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-sap-docs.cordis.yml  →  dsh web --patch ./mcp-sap-docs.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-sap-docs
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-sap-docs
        transport: stdio
        command: npx
        args: ["-y","mcp-sap-docs"]
        env: {}
        cwd: !!js process.cwd()
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

<a id="claude-code-mcp-server"></a>

### Explore Claude Code source

[Claude Code Explorer MCP](https://github.com/nirholas/claude-code/tree/main/mcp-server) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Explora o código-fonte do CLI do Claude Code: navega por ferramentas, comandos e faz busca no código.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio claude-code-explorer-mcp -- npx -y claude-code-explorer-mcp
```

**Codex CLI**

```bash
codex mcp add claude-code-explorer-mcp -- npx -y claude-code-explorer-mcp
```

**Gemini CLI**

```bash
gemini mcp add claude-code-explorer-mcp npx -y claude-code-explorer-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "claude-code-explorer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "claude-code-explorer-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "claude-code-explorer-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "claude-code-explorer-mcp"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "claude-code-explorer-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "claude-code-explorer-mcp"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "claude-code-explorer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "claude-code-explorer-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "claude-code-explorer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "claude-code-explorer-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "claude-code-explorer-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "claude-code-explorer-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  claude-code-explorer-mcp:
    type: stdio
    cmd: npx
    args: ["-y","claude-code-explorer-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "claude-code-explorer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "claude-code-explorer-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "claude-code-explorer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "claude-code-explorer-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `claude-code-explorer-mcp.cordis.yml  →  dsh web --patch ./claude-code-explorer-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-claude-code-explorer-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: claude-code-explorer-mcp
        transport: stdio
        command: npx
        args: ["-y","claude-code-explorer-mcp"]
        env: {}
        cwd: !!js process.cwd()
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

<a id="packmind-mcp-server"></a>

### Org's technical decisions log

[PackmindHub/packmind](https://github.com/PackmindHub/packmind/tree/main/apps/mcp-server) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Captura, escala e reforça as decisões técnicas de uma organização como referência pesquisável.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp-server https://app.packmind.ai/mcp
```

**Codex CLI**

```bash
codex mcp add mcp-server --url https://app.packmind.ai/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp-server https://app.packmind.ai/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "url": "https://app.packmind.ai/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server": {
      "type": "http",
      "url": "https://app.packmind.ai/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp-server": {
      "type": "remote",
      "url": "https://app.packmind.ai/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "type": "streamableHttp",
      "url": "https://app.packmind.ai/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "serverUrl": "https://app.packmind.ai/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://app.packmind.ai/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server:
    type: streamable_http
    uri: https://app.packmind.ai/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "type": "streamable-http",
      "url": "https://app.packmind.ai/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "type": "streamable-http",
      "url": "https://app.packmind.ai/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-server.cordis.yml  →  dsh web --patch ./mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-server
        transport: streamable-http
        url: https://app.packmind.ai/mcp
```

</details>

<a id="ai-tools-mcp-stdio"></a>

### Svelte docs and autofixing

[Svelte MCP](https://github.com/sveltejs/ai-tools/tree/main/packages/mcp-stdio) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial do Svelte com documentação e ferramentas de correção automática para desenvolvimento em Svelte.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp -- npx -y @sveltejs/mcp
```

**Codex CLI**

```bash
codex mcp add mcp -- npx -y @sveltejs/mcp
```

**Gemini CLI**

```bash
gemini mcp add mcp npx -y @sveltejs/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sveltejs/mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@sveltejs/mcp"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@sveltejs/mcp"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sveltejs/mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sveltejs/mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@sveltejs/mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: stdio
    cmd: npx
    args: ["-y","@sveltejs/mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sveltejs/mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sveltejs/mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp.cordis.yml  →  dsh web --patch ./mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp
        transport: stdio
        command: npx
        args: ["-y","@sveltejs/mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="webcomponents-react-mcp-server"></a>

### UI5 Web Components for React docs

[UI5/webcomponents-react](https://github.com/UI5/webcomponents-react/tree/main/packages/mcp-server) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Documentação oficial para desenvolvedores e assistência de API para UI5 Web Components for React.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio webcomponents-react-mcp-server -- npx -y @ui5/webcomponents-react-mcp
```

**Codex CLI**

```bash
codex mcp add webcomponents-react-mcp-server -- npx -y @ui5/webcomponents-react-mcp
```

**Gemini CLI**

```bash
gemini mcp add webcomponents-react-mcp-server npx -y @ui5/webcomponents-react-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "webcomponents-react-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@ui5/webcomponents-react-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "webcomponents-react-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@ui5/webcomponents-react-mcp"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "webcomponents-react-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@ui5/webcomponents-react-mcp"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "webcomponents-react-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@ui5/webcomponents-react-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "webcomponents-react-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@ui5/webcomponents-react-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "webcomponents-react-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@ui5/webcomponents-react-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  webcomponents-react-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@ui5/webcomponents-react-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "webcomponents-react-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@ui5/webcomponents-react-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "webcomponents-react-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@ui5/webcomponents-react-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `webcomponents-react-mcp-server.cordis.yml  →  dsh web --patch ./webcomponents-react-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-webcomponents-react-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: webcomponents-react-mcp-server
        transport: stdio
        command: npx
        args: ["-y","@ui5/webcomponents-react-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>
