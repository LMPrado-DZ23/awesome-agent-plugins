# Docs & Knowledge

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Context7](#context7) — Up-to-date, version-specific library documentation and code examples pulled into the agent context on demand. …
- [GitMCP](#git-mcp) — Free remote server that turns any GitHub repository or Pages site into a documentation source (use https://git…
- [Full office suite inside DSH](#dsh-dsh-univer-office) — Brings spreadsheets, docs, slides, canvases and relational tables into one runtime inside DeepSeek Harness, wi…
- [Editable diagrams in conversations](#dsh-dsh-diagram) — Editable Excalidraw diagrams rendered directly inside DeepSeek Harness conversations.
- [LaTeX paper workbench with review](#dsh-paperlab) — Overleaf-style LaTeX paper workbench: annotate any text in the rendered PDF and have a DSH agent revise the so…
- [Text-to-slideshow presentation skill](#dsh-dsh-ppt) — Turns one sentence or a document into an HTML slideshow plus an editable PPTX, with seven layouts (including q…
- [In-chat preview for produced files](#dsh-dsh-markdown-preview) — In-chat preview for produced files: click a file chip to render Markdown (server-side markdown-it plus highlig…
- [Auto-generate architecture diagrams](#dsh-archify-integrations-deepseek-harness) — Generates validated, self-contained interactive architecture, workflow, sequence, data-flow and lifecycle diag…
- [MarkItDown MCP](#markitdown-mcp) — Converts PDF, Office documents, images, audio, HTML and more to Markdown for the agent, using Microsoft MarkIt…

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
