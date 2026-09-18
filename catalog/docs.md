# Docs & Knowledge

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Context7](#context7) — Up-to-date, version-specific library documentation and code examples pulled into the agent context on demand. …
- [Nature-style academic writing skills](#nature-skills) — 20 skills tailored to Nature-journal academic writing conventions and scientific figure design, including lite…
- [OfficeCLI agent office suite](#officecli) — Office suite purpose-built for AI agents to read, edit and automate Word, Excel and PowerPoint files, with ded…
- [AnyDoc document to Markdown](#anydoc) — Single skill that converts Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV and PDF files into clean Mark…
- [ADR authoring skills](#architecture-decision-record) — Small skill pack that teaches an agent to write and maintain Architecture Decision Records for software planni…
- [GitMCP](#git-mcp) — Free remote server that turns any GitHub repository or Pages site into a documentation source (use https://git…
- [Claude Code reference search](#claude-code-ultimate-guide-mcp) — Searches the Claude Code Ultimate Guide and machine-readable references from any MCP client.
- [Zotero research library access](#zotero-mcp) — Search, read, annotate, and add to a Zotero research library, local or web; needs a ZOTERO_API_KEY.
- [Simplified Technical English skill](#simpleenglish) — Agent skill that makes an LLM write documentation following ASD-STE100 Simplified Technical English, a control…
- [arXiv paper search and analysis](#arxiv-mcp-server) — Searches arXiv papers, downloads full text, and provides semantic search, citation graphs, and alerts.
- [Microsoft Learn documentation](#mcp) — Official Microsoft Learn server providing real-time, trusted docs and code samples for AI agents.
- [PostgreSQL docs and best practices](#pg-aiguide-mcp) — Comprehensive PostgreSQL documentation and best practices, including ecosystem tools; needs an OPENAI_API_KEY …
- [Academic econometrics research skills](#claude-code-my-workflow) — Fork-ready Claude Code template for academic researchers using LaTeX/Beamer and R, with multi-agent review, qu…
- [3D and AR SDK reference](#sceneview-mcp) — API docs, samples, validation, and code generation for the SceneView 3D and AR SDK on Android, iOS, and Web.
- [Token-efficient docs search](#ref-tools-mcp) — Token-efficient search for coding agents over public and private documentation; needs a REF_API_KEY.
- [PDF reading with page citations](#pdf-reader-mcp) — Evidence-first PDF server that returns citeable page and bounding-box evidence for documents.
- [Full office suite inside DSH](#dsh-dsh-univer-office) — Brings spreadsheets, docs, slides, canvases and relational tables into one runtime inside DeepSeek Harness, wi…
- [Yuque knowledge base access](#yuque-mcp-server) — Exposes a Yuque knowledge base to AI assistants; needs a Yuque personal, group, or general token.
- [Unified SAP documentation search](#mcp-sap-docs) — Fast unified search across SAP docs (SAPUI5, CAP, OpenUI5, wdi5) using BM25 full-text search.
- [Editable diagrams in conversations](#dsh-dsh-diagram) — Editable Excalidraw diagrams rendered directly inside DeepSeek Harness conversations.
- [LaTeX paper workbench with review](#dsh-paperlab) — Overleaf-style LaTeX paper workbench: annotate any text in the rendered PDF and have a DSH agent revise the so…
- [Text-to-slideshow presentation skill](#dsh-dsh-ppt) — Turns one sentence or a document into an HTML slideshow plus an editable PPTX, with seven layouts (including q…
- [In-chat preview for produced files](#dsh-dsh-markdown-preview) — In-chat preview for produced files: click a file chip to render Markdown (server-side markdown-it plus highlig…
- [Auto-generate architecture diagrams](#dsh-archify-integrations-deepseek-harness) — Generates validated, self-contained interactive architecture, workflow, sequence, data-flow and lifecycle diag…
- [Explore Claude Code source](#claude-code-mcp-server) — Explores the Claude Code CLI source code: browse tools, commands, and search the codebase.
- [MarkItDown MCP](#markitdown-mcp) — Converts PDF, Office documents, images, audio, HTML and more to Markdown for the agent, using Microsoft MarkIt…
- [Org's technical decisions log](#packmind-mcp-server) — Captures, scales, and enforces an organization's technical decisions as a searchable reference.
- [Svelte docs and autofixing](#ai-tools-mcp-stdio) — Official Svelte server providing documentation and autofixing tools for Svelte development.
- [UI5 Web Components for React docs](#webcomponents-react-mcp-server) — Official developer documentation and API assistance for UI5 Web Components for React.

<a id="context7"></a>

### Context7

[Context7](https://github.com/upstash/context7) — `MCP server` · ★ 62k · License: MIT · Works with: All clients

Up-to-date, version-specific library documentation and code examples pulled into the agent context on demand. Local alternative: `npx -y @upstash/context7-mcp`.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "context7": {
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "context7": {
      "serverUrl": "https://mcp.context7.com/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  context7:
    type: streamable_http
    uri: https://mcp.context7.com/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `context7.cordis.yml  →  dsh web --patch ./context7.cordis.yml`

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

[Yuan1z0825/nature-skills](https://github.com/Yuan1z0825/nature-skills) — `Agent Skills` · ★ 43k · License: Apache-2.0 · Works with: All clients

20 skills tailored to Nature-journal academic writing conventions and scientific figure design, including literature pipelines, citations and paper-to-slide conversion.

**Alternatives:**

- [zLanqing/codex-claude-academic-skills](https://github.com/zLanqing/codex-claude-academic-skills) (★ 4.0k) — Broader academic workflow covering literature review, writing polish and scientific computing tools.

<details><summary>Install</summary>

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

[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) — `Agent Skills` · ★ 31k · License: Apache-2.0 · Works with: All clients

Office suite purpose-built for AI agents to read, edit and automate Word, Excel and PowerPoint files, with dedicated skills for financial models, pitch decks and dashboards.

**Alternatives:**

- [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice) (★ 7.2k) — Free open-source alternative office suite (docs, sheets, slides, PDF) with its own CLI and skill.
- [OpenSenseNova/SenseNova-Skills](https://github.com/OpenSenseNova/SenseNova-Skills) (★ 5.6k) — Modular office-automation skills for Excel workflows: formatting, coloring and KPI reporting.

<details><summary>Install</summary>

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

[firecrawl/anydoc](https://github.com/firecrawl/anydoc) — `Agent Skills` · ★ 22k · License: MIT · Works with: All clients

Single skill that converts Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV and PDF files into clean Markdown, built on a Rust converter with Node.js and Python bindings.

**Alternatives:**

- [opendatalab/MinerU](https://github.com/opendatalab/MinerU) (★ 80k) — Adds OCR-heavy layout analysis for scanned PDFs and complex documents.

<details><summary>Install</summary>

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

[architecture-decision-record/architecture-decision-record](https://github.com/architecture-decision-record/architecture-decision-record) — `Agent Skills` · ★ 17k · License: see repo · Works with: All clients

Small skill pack that teaches an agent to write and maintain Architecture Decision Records for software planning and IT leadership documentation.

<details><summary>Install</summary>

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

[GitMCP](https://github.com/idosal/git-mcp) — `MCP server` · ★ 8.4k · License: Apache-2.0 · Works with: All clients

Free remote server that turns any GitHub repository or Pages site into a documentation source (use https://gitmcp.io/OWNER/REPO for one repo).

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "gitmcp": {
      "url": "https://gitmcp.io/docs"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "gitmcp": {
      "serverUrl": "https://gitmcp.io/docs"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  gitmcp:
    type: streamable_http
    uri: https://gitmcp.io/docs
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `gitmcp.cordis.yml  →  dsh web --patch ./gitmcp.cordis.yml`

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

[Claude Code Ultimate Guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) — `MCP server` · ★ 6.0k · License: CC-BY-SA-4.0 · Works with: All clients

Searches the Claude Code Ultimate Guide and machine-readable references from any MCP client.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  claude-code-guide:
    type: stdio
    cmd: npx
    args: ["-y","claude-code-ultimate-guide-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `claude-code-guide.cordis.yml  →  dsh web --patch ./claude-code-guide.cordis.yml`

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

[Zotero MCP](https://github.com/54yyyu/zotero-mcp) — `MCP server` · ★ 5.1k · License: MIT · Works with: All clients

Search, read, annotate, and add to a Zotero research library, local or web; needs a ZOTERO_API_KEY.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

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

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `zotero-mcp.cordis.yml  →  dsh web --patch ./zotero-mcp.cordis.yml`

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

[AminBlg/SimpleEnglish](https://github.com/AminBlg/SimpleEnglish) — `Agent Skills` · ★ 3.4k · License: MIT · Works with: All clients

Agent skill that makes an LLM write documentation following ASD-STE100 Simplified Technical English, a controlled-language standard.

<details><summary>Install</summary>

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

[blazickjp/arxiv-mcp-server](https://github.com/blazickjp/arxiv-mcp-server) — `MCP server` · ★ 3.2k · License: Apache-2.0 · Works with: All clients

Searches arXiv papers, downloads full text, and provides semantic search, citation graphs, and alerts.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  arxiv-mcp-server:
    type: stdio
    cmd: uvx
    args: ["arxiv-mcp-server"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `arxiv-mcp-server.cordis.yml  →  dsh web --patch ./arxiv-mcp-server.cordis.yml`

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

[Microsoft Learn MCP](https://github.com/MicrosoftDocs/mcp) — `MCP server` · ★ 1.9k · License: CC-BY-4.0 · Works with: All clients

Official Microsoft Learn server providing real-time, trusted docs and code samples for AI agents.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "microsoft-learn-mcp": {
      "url": "https://learn.microsoft.com/api/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "microsoft-learn-mcp": {
      "serverUrl": "https://learn.microsoft.com/api/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  microsoft-learn-mcp:
    type: streamable_http
    uri: https://learn.microsoft.com/api/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `microsoft-learn-mcp.cordis.yml  →  dsh web --patch ./microsoft-learn-mcp.cordis.yml`

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

[timescale/pg-aiguide](https://github.com/timescale/pg-aiguide) — `MCP server` · ★ 1.8k · License: Apache-2.0 · Works with: All clients

Comprehensive PostgreSQL documentation and best practices, including ecosystem tools; needs an OPENAI_API_KEY and PG connection settings.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

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

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `pg-aiguide.cordis.yml  →  dsh web --patch ./pg-aiguide.cordis.yml`

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

[pedrohcgs/claude-code-my-workflow](https://github.com/pedrohcgs/claude-code-my-workflow) — `Agent Skills` · ★ 1.6k · License: MIT · Works with: All clients

Fork-ready Claude Code template for academic researchers using LaTeX/Beamer and R, with multi-agent review, quality gates, adversarial QA and replication-protocol skills.

<details><summary>Install</summary>

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

[SceneView/sceneview](https://github.com/SceneView/sceneview) — `MCP server` · ★ 1.3k · License: Apache-2.0 · Works with: All clients

API docs, samples, validation, and code generation for the SceneView 3D and AR SDK on Android, iOS, and Web.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: stdio
    cmd: npx
    args: ["-y","sceneview-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `mcp.cordis.yml  →  dsh web --patch ./mcp.cordis.yml`

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

[ref-tools/ref-tools-mcp](https://github.com/ref-tools/ref-tools-mcp) — `MCP server` · ★ 1.2k · License: MIT · Works with: All clients

Token-efficient search for coding agents over public and private documentation; needs a REF_API_KEY.

**Alternatives:**

- [jDocmunch MCP](https://github.com/jgravelle/jdocmunch-mcp) (★ 203) — Section-level local search across .md, .rst, .adoc, .ipynb, .html, .yaml, .json, and OpenAPI files.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

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

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `ref-tools-mcp.cordis.yml  →  dsh web --patch ./ref-tools-mcp.cordis.yml`

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

[PDF Reader MCP](https://github.com/SylphxAI/pdf-reader-mcp) — `MCP server` · ★ 934 · License: MIT · Works with: All clients

Evidence-first PDF server that returns citeable page and bounding-box evidence for documents.

**Alternatives:**

- [Docling MCP](https://github.com/docling-project/docling-mcp) (★ 748) — Converts PDFs and other document formats to structured output via Docling; needs a Docling API key.
- [PageIndex MCP](https://github.com/VectifyAI/pageindex-mcp) (★ 388) — Reasoning-based RAG for chatting with long PDFs, local or online.
- [MinerU Open MCP](https://github.com/opendatalab/MinerU-Ecosystem) (★ 208) — Parses PDF, image, doc, ppt, and xls files into Markdown via the MinerU API; needs a MINERU_API_TOKEN.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  pdf-reader-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@sylphx/pdf-reader-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `pdf-reader-mcp.cordis.yml  →  dsh web --patch ./pdf-reader-mcp.cordis.yml`

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

[dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) — `Native plugin` · ★ 365 · License: Apache-2.0 · Works with: DeepSeek Harness only

Brings spreadsheets, docs, slides, canvases and relational tables into one runtime inside DeepSeek Harness, with connected data, validation, versioned changes and isolated worktrees for multi-agent collaboration.

**Alternatives:**

- [kw78/dsh-office-tools](https://github.com/kw78/dsh-office-tools) (★ 20) — Offers simpler standalone tools to create/read Word, create/read/update Excel, and create/read PowerPoint with image placement
- [didclawapp-ai/DSH-Office](https://github.com/didclawapp-ai/DSH-Office) (★ 5) — Also handles PDF, exposed as office_schema/office_write/office_edit/office_read tools through a local CLI

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dream-num/dsh-univer-office
```

</details>

<a id="yuque-mcp-server"></a>

### Yuque knowledge base access

[yuque/yuque-mcp-server](https://github.com/yuque/yuque-mcp-server) — `MCP server` · ★ 245 · License: MIT · Works with: All clients

Exposes a Yuque knowledge base to AI assistants; needs a Yuque personal, group, or general token.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

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

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `yuque-mcp.cordis.yml  →  dsh web --patch ./yuque-mcp.cordis.yml`

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

[marianfoo/mcp-sap-docs](https://github.com/marianfoo/mcp-sap-docs) — `MCP server` · ★ 230 · License: Apache-2.0 · Works with: All clients

Fast unified search across SAP docs (SAPUI5, CAP, OpenUI5, wdi5) using BM25 full-text search.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-sap-docs:
    type: stdio
    cmd: npx
    args: ["-y","mcp-sap-docs"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `mcp-sap-docs.cordis.yml  →  dsh web --patch ./mcp-sap-docs.cordis.yml`

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

[hanzhangzzz/dsh-diagram](https://github.com/hanzhangzzz/dsh-diagram) — `Native plugin` · ★ 13 · License: MIT · Works with: DeepSeek Harness only

Editable Excalidraw diagrams rendered directly inside DeepSeek Harness conversations.

**Alternatives:**

- [MrmoLabs/dsh-mermaid](https://github.com/MrmoLabs/dsh-mermaid) (★ 11) — Renders Mermaid code fences as SVG instead, with streaming, fullscreen zoom/pan and SVG export

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:hanzhangzzz/dsh-diagram
```

</details>

<a id="dsh-paperlab"></a>

### LaTeX paper workbench with review

[maple-pwn/paperlab](https://github.com/maple-pwn/paperlab) — `Native plugin` · ★ 7 · License: MIT · Works with: DeepSeek Harness only

Overleaf-style LaTeX paper workbench: annotate any text in the rendered PDF and have a DSH agent revise the sources, with compile checks and git history.

**Alternatives:**

- [fly233338/dsh-overleaf](https://github.com/fly233338/dsh-overleaf) (★ 12) — Connects multiple existing Overleaf cloud projects via OverleafMCP for browsing, analysis and Git-based file updates

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:maple-pwn/paperlab
```

</details>

<a id="dsh-dsh-ppt"></a>

### Text-to-slideshow presentation skill

[STARDUSTLC666/dsh-ppt](https://github.com/STARDUSTLC666/dsh-ppt) — `Native plugin` · ★ 6 · License: MIT · Works with: DeepSeek Harness only

Turns one sentence or a document into an HTML slideshow plus an editable PPTX, with seven layouts (including quotes and native PPTX tables), speaker notes, five built-in themes and bilingual support.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:STARDUSTLC666/dsh-ppt
```

</details>

<a id="dsh-dsh-markdown-preview"></a>

### In-chat preview for produced files

[GitHubJiKe/dsh-markdown-preview](https://github.com/GitHubJiKe/dsh-markdown-preview) — `Native plugin` · ★ 2 · License: MIT · Works with: DeepSeek Harness only

In-chat preview for produced files: click a file chip to render Markdown (server-side markdown-it plus highlight.js), images or plain text right in the conversation, with system-app open and reveal-in-folder one click away.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:GitHubJiKe/dsh-markdown-preview
```

</details>

<a id="dsh-archify-integrations-deepseek-harness"></a>

### Auto-generate architecture diagrams

[tt-a1i/archify#integrations/deepseek-harness](https://github.com/tt-a1i/archify/tree/main/integrations/deepseek-harness) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Generates validated, self-contained interactive architecture, workflow, sequence, data-flow and lifecycle diagrams directly from repositories or system descriptions.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:tt-a1i/archify#path:/integrations/deepseek-harness
```

</details>

<a id="claude-code-mcp-server"></a>

### Explore Claude Code source

[Claude Code Explorer MCP](https://github.com/nirholas/claude-code/tree/main/mcp-server) — `MCP server` · License: see repo · Works with: All clients

Explores the Claude Code CLI source code: browse tools, commands, and search the codebase.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  claude-code-explorer-mcp:
    type: stdio
    cmd: npx
    args: ["-y","claude-code-explorer-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `claude-code-explorer-mcp.cordis.yml  →  dsh web --patch ./claude-code-explorer-mcp.cordis.yml`

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

[MarkItDown MCP](https://github.com/microsoft/markitdown/tree/main/packages/markitdown-mcp) — `MCP server` · License: MIT · Works with: All clients

Converts PDF, Office documents, images, audio, HTML and more to Markdown for the agent, using Microsoft MarkItDown.

<details><summary>Install</summary>

**Claude Code**

Prerequisite: `pip install markitdown-mcp`

```bash
claude mcp add --transport stdio markitdown -- markitdown-mcp
```

**Codex CLI**

Prerequisite: `pip install markitdown-mcp`

```bash
codex mcp add markitdown -- markitdown-mcp
```

**Gemini CLI**

Prerequisite: `pip install markitdown-mcp`

```bash
gemini mcp add markitdown markitdown-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Prerequisite: `pip install markitdown-mcp`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

Prerequisite: `pip install markitdown-mcp`

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

**OpenCode** — File: `opencode.json`

Prerequisite: `pip install markitdown-mcp`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Prerequisite: `pip install markitdown-mcp`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

Prerequisite: `pip install markitdown-mcp`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

Prerequisite: `pip install markitdown-mcp`

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

**Goose** — File: `~/.config/goose/config.yaml`

Prerequisite: `pip install markitdown-mcp`

```yaml
extensions:
  markitdown:
    type: stdio
    cmd: markitdown-mcp
    args: []
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Prerequisite: `pip install markitdown-mcp`

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

**Roo Code** — File: `.roo/mcp.json`

Prerequisite: `pip install markitdown-mcp`

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

**DeepSeek Harness** — File: `markitdown.cordis.yml  →  dsh web --patch ./markitdown.cordis.yml`

Prerequisite: `pip install markitdown-mcp`

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

[PackmindHub/packmind](https://github.com/PackmindHub/packmind/tree/main/apps/mcp-server) — `MCP server` · License: Apache-2.0 · Works with: All clients

Captures, scales, and enforces an organization's technical decisions as a searchable reference.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "url": "https://app.packmind.ai/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "serverUrl": "https://app.packmind.ai/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server:
    type: streamable_http
    uri: https://app.packmind.ai/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `mcp-server.cordis.yml  →  dsh web --patch ./mcp-server.cordis.yml`

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

[Svelte MCP](https://github.com/sveltejs/ai-tools/tree/main/packages/mcp-stdio) — `MCP server` · License: MIT · Works with: All clients

Official Svelte server providing documentation and autofixing tools for Svelte development.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: stdio
    cmd: npx
    args: ["-y","@sveltejs/mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `mcp.cordis.yml  →  dsh web --patch ./mcp.cordis.yml`

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

[UI5/webcomponents-react](https://github.com/UI5/webcomponents-react/tree/main/packages/mcp-server) — `MCP server` · License: Apache-2.0 · Works with: All clients

Official developer documentation and API assistance for UI5 Web Components for React.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  webcomponents-react-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@ui5/webcomponents-react-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `webcomponents-react-mcp-server.cordis.yml  →  dsh web --patch ./webcomponents-react-mcp-server.cordis.yml`

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
