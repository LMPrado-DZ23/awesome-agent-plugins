# Browser & Web

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Chrome DevTools MCP](#chrome-devtools-mcp) — Gives agents Chrome DevTools: drive a live Chrome, inspect network and console, record performance traces and …
- [Playwright MCP](#playwright-mcp) — Browser automation for agents via Playwright accessibility snapshots: navigate, click, fill forms, take screen…
- [Firecrawl MCP](#firecrawl-mcp) — Web scraping, crawling, search and structured extraction for agents via the Firecrawl API (API key required).
- [Exa MCP](#exa-mcp) — Web search and crawling through the Exa search engine, including code-context search.
- [Web search for text-only agents](#dsh-modsearch) — Bridges live web and X (Twitter) search into text-only agents, returning structured JSON evidence with search …
- [Control the Tabbit Browser](#dsh-dsh-plugin) — Gives the agent control of the Tabbit Browser: auto-loads a companion skill, detects qualifying Tabbit release…
- [Real browser automation and control](#dsh-dsh-browser) — Gives the agent a shared, native Electron browser window driven over CDP with 20 tools for opening pages, snap…
- [Fetch pages as clean readable text](#dsh-dsh-read-url) — Reads any web page as clean main content: automatic charset detection (GBK/GB2312/UTF-8/Big5), noise stripping…
- [Headless browser acceptance testing](#dsh-dsh-verify) — Runs independent acceptance tests on agent-built deliverables: takes a JSON spec and returns a pass/fail verdi…
- [Control the Jiey Browser via MCP](#dsh-dsh-jiey-browser) — Drives the Jiey Browser from DeepSeek Harness over MCP: navigate, snapshot, act on elements, read content, tak…
- [Fetch (reference)](#mcp-fetch) — Reference server that fetches a URL and converts the page to Markdown for the agent.

<a id="chrome-devtools-mcp"></a>

### Chrome DevTools MCP

[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) — `MCP server` · ★ 52k · License: Apache-2.0 · Works with: All clients

Gives agents Chrome DevTools: drive a live Chrome, inspect network and console, record performance traces and debug pages.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio chrome-devtools -- npx -y chrome-devtools-mcp@latest
```

**Codex CLI**

```bash
codex mcp add chrome-devtools -- npx -y chrome-devtools-mcp@latest
```

**Gemini CLI** — File: `~/.gemini/settings.json (or .gemini/settings.json)`

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest"
      ]
    }
  }
}
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "chrome-devtools": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest"
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
    "chrome-devtools": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "chrome-devtools-mcp@latest"
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
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "chrome-devtools": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  chrome-devtools:
    type: stdio
    cmd: npx
    args: ["-y","chrome-devtools-mcp@latest"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `chrome-devtools.cordis.yml  →  dsh web --patch ./chrome-devtools.cordis.yml`

```yaml
- insert:
    - id: mcp-chrome-devtools
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: chrome-devtools
        transport: stdio
        command: npx
        args: ["-y","chrome-devtools-mcp@latest"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="playwright-mcp"></a>

### Playwright MCP

[Playwright MCP](https://github.com/microsoft/playwright-mcp) — `MCP server` · ★ 37k · License: Apache-2.0 · Works with: All clients

Browser automation for agents via Playwright accessibility snapshots: navigate, click, fill forms, take screenshots, without needing a vision model.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio playwright -- npx @playwright/mcp@latest
```

**Codex CLI**

```bash
codex mcp add playwright -- npx @playwright/mcp@latest
```

**Gemini CLI**

```bash
gemini mcp add playwright npx @playwright/mcp@latest
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
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
    "playwright": {
      "type": "local",
      "command": [
        "npx",
        "@playwright/mcp@latest"
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
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "playwright": {
      "source": "custom",
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  playwright:
    type: stdio
    cmd: npx
    args: ["@playwright/mcp@latest"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `playwright.cordis.yml  →  dsh web --patch ./playwright.cordis.yml`

```yaml
- insert:
    - id: mcp-playwright
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: playwright
        transport: stdio
        command: npx
        args: ["@playwright/mcp@latest"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="firecrawl-mcp"></a>

### Firecrawl MCP

[Firecrawl MCP](https://github.com/firecrawl/firecrawl-mcp-server) — `MCP server` · ★ 7.5k · License: MIT · Works with: All clients

Web scraping, crawling, search and structured extraction for agents via the Firecrawl API (API key required).

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio --env FIRECRAWL_API_KEY='<FIRECRAWL_API_KEY>' firecrawl -- npx -y firecrawl-mcp
```

**Codex CLI**

```bash
codex mcp add firecrawl --env FIRECRAWL_API_KEY='<FIRECRAWL_API_KEY>' -- npx -y firecrawl-mcp
```

**Gemini CLI** — File: `~/.gemini/settings.json (or .gemini/settings.json)`

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": [
        "-y",
        "firecrawl-mcp"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "<FIRECRAWL_API_KEY>"
      }
    }
  }
}
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": [
        "-y",
        "firecrawl-mcp"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "<FIRECRAWL_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "firecrawl": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "firecrawl-mcp"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "<FIRECRAWL_API_KEY>"
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
    "firecrawl": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "firecrawl-mcp"
      ],
      "enabled": true,
      "environment": {
        "FIRECRAWL_API_KEY": "<FIRECRAWL_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": [
        "-y",
        "firecrawl-mcp"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "<FIRECRAWL_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": [
        "-y",
        "firecrawl-mcp"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "<FIRECRAWL_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "firecrawl": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "firecrawl-mcp"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "<FIRECRAWL_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  firecrawl:
    type: stdio
    cmd: npx
    args: ["-y","firecrawl-mcp"]
    envs:
      FIRECRAWL_API_KEY: "<FIRECRAWL_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": [
        "-y",
        "firecrawl-mcp"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "<FIRECRAWL_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": [
        "-y",
        "firecrawl-mcp"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "<FIRECRAWL_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `firecrawl.cordis.yml  →  dsh web --patch ./firecrawl.cordis.yml`

```yaml
- insert:
    - id: mcp-firecrawl
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: firecrawl
        transport: stdio
        command: npx
        args: ["-y","firecrawl-mcp"]
        env: {"FIRECRAWL_API_KEY":"<FIRECRAWL_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="exa-mcp"></a>

### Exa MCP

[Exa MCP](https://github.com/exa-labs/exa-mcp-server) — `MCP server` · ★ 5.0k · License: MIT · Works with: All clients

Web search and crawling through the Exa search engine, including code-context search.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http exa https://mcp.exa.ai/mcp
```

**Codex CLI**

```bash
codex mcp add exa --url https://mcp.exa.ai/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http exa https://mcp.exa.ai/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "exa": {
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "exa": {
      "type": "http",
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "exa": {
      "type": "remote",
      "url": "https://mcp.exa.ai/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "exa": {
      "type": "streamableHttp",
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "exa": {
      "serverUrl": "https://mcp.exa.ai/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "exa": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.exa.ai/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  exa:
    type: streamable_http
    uri: https://mcp.exa.ai/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "exa": {
      "type": "streamable-http",
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "exa": {
      "type": "streamable-http",
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `exa.cordis.yml  →  dsh web --patch ./exa.cordis.yml`

```yaml
- insert:
    - id: mcp-exa
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: exa
        transport: streamable-http
        url: https://mcp.exa.ai/mcp
```

</details>

<a id="dsh-modsearch"></a>

### Web search for text-only agents

[liustack/modsearch](https://github.com/liustack/modsearch) — `Native plugin` · ★ 506 · License: MIT · Works with: DeepSeek Harness only

Bridges live web and X (Twitter) search into text-only agents, returning structured JSON evidence with search results, page fetches, and citations.

**Alternatives:**

- [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) (★ 204) — Adds 7 free/paid search engines (DuckDuckGo, Bing, SearXNG, Exa, Perplexity, DeepSeek) with auto failover and a settings UI for API keys.
- [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) (★ 67) — Adds SQLite+LRU result caching and routes searches to site-specific engines like GitHub, Bilibili, YouTube, and Reddit.
- [A3Boy/dsh-web-tools](https://github.com/A3Boy/dsh-web-tools) (★ 28) — Adds bring-your-own-key pools across multiple search providers with health monitoring and deterministic fallback.
- [yinnho/aginxbrowser#dsh-aginxbrowser](https://github.com/yinnho/aginxbrowser/tree/main/dsh-aginxbrowser) — Adds aggregated search across 14 engines and a live view URL so a human can watch and take over browsing.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:liustack/modsearch
```

</details>

<a id="dsh-dsh-plugin"></a>

### Control the Tabbit Browser

[Tabbit-Browser/dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) — `Native plugin` · ★ 101 · License: MIT · Works with: DeepSeek Harness only

Gives the agent control of the Tabbit Browser: auto-loads a companion skill, detects qualifying Tabbit releases (1.9.0+), checks the tabbit-cli runtime, and downloads the matching official installer when needed.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Tabbit-Browser/dsh-plugin
```

</details>

<a id="dsh-dsh-browser"></a>

### Real browser automation and control

[wqty123/dsh-browser](https://github.com/wqty123/dsh-browser) — `Native plugin` · ★ 68 · License: MIT · Works with: DeepSeek Harness only

Gives the agent a shared, native Electron browser window driven over CDP with 20 tools for opening pages, snapshotting, filling forms, screenshots, downloads, and CAPTCHA detection, while a human can watch and take over.

**Alternatives:**

- [anweat/dsh-browser](https://github.com/anweat/dsh-browser) (★ 21) — Bundles Playwright and Chromium as plugin-local dependencies with a global-reuse fallback and 9 browser tools.
- [stuarthu/dsh-chrome](https://github.com/stuarthu/dsh-chrome) (★ 9) — Adds a Chrome side panel that lets the agent read the current page and capture HTTP traffic.
- [Tencent/BrowserSkill#dsh-plugin-browserskill](https://github.com/Tencent/BrowserSkill/tree/main/packages/dsh-plugin-browserskill) — Controls visible Chrome/Edge windows with accessibility and VOM observations plus a live Web UI overlay for multi-session control.
- [Viger1/dsh-pilot](https://github.com/Viger1/dsh-pilot) (★ 0) — Navigates and acts on elements using accessibility refs, enforcing the origin policy via the session's approval stance.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wqty123/dsh-browser
```

</details>

<a id="dsh-dsh-read-url"></a>

### Fetch pages as clean readable text

[2672243194/dsh-read-url](https://github.com/2672243194/dsh-read-url) — `Native plugin` · ★ 18 · License: MIT · Works with: DeepSeek Harness only

Reads any web page as clean main content: automatic charset detection (GBK/GB2312/UTF-8/Big5), noise stripping, offset continuation, optional SPA rendering, batch reads, and site crawling.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:2672243194/dsh-read-url
```

</details>

<a id="dsh-dsh-verify"></a>

### Headless browser acceptance testing

[263311487-ux/dsh-verify](https://github.com/263311487-ux/dsh-verify) — `Native plugin` · ★ 2 · License: MIT · Works with: DeepSeek Harness only

Runs independent acceptance tests on agent-built deliverables: takes a JSON spec and returns a pass/fail verdict from a real Chromium instance.

**Alternatives:**

- [Viger1/dsh-preview](https://github.com/Viger1/dsh-preview) (★ 0) — Opens the page the agent just built and reads the rendered DOM, computed styles, console output, and a screenshot, via a bundled skill.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:263311487-ux/dsh-verify
```

</details>

<a id="dsh-dsh-jiey-browser"></a>

### Control the Jiey Browser via MCP

[jiewaigongxing/dsh-jiey-browser](https://github.com/jiewaigongxing/dsh-jiey-browser) — `Native plugin` · ★ 1 · License: MIT · Works with: DeepSeek Harness only

Drives the Jiey Browser from DeepSeek Harness over MCP: navigate, snapshot, act on elements, read content, take screenshots, and manage tabs in a real Chromium profile.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jiewaigongxing/dsh-jiey-browser
```

</details>

<a id="mcp-fetch"></a>

### Fetch (reference)

[Fetch (reference)](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) — `MCP server` · License: see repo · Works with: All clients

Reference server that fetches a URL and converts the page to Markdown for the agent.

<details><summary>Install</summary>

**Claude Code**

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```bash
claude mcp add --transport stdio fetch -- uvx mcp-server-fetch
```

**Codex CLI**

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```bash
codex mcp add fetch -- uvx mcp-server-fetch
```

**Gemini CLI**

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```bash
gemini mcp add fetch uvx mcp-server-fetch
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": [
        "mcp-server-fetch"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "servers": {
    "fetch": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "mcp-server-fetch"
      ]
    }
  }
}
```

**OpenCode** — File: `opencode.json`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "fetch": {
      "type": "local",
      "command": [
        "uvx",
        "mcp-server-fetch"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": [
        "mcp-server-fetch"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": [
        "mcp-server-fetch"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "context_servers": {
    "fetch": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "mcp-server-fetch"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```yaml
extensions:
  fetch:
    type: stdio
    cmd: uvx
    args: ["mcp-server-fetch"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": [
        "mcp-server-fetch"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": [
        "mcp-server-fetch"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `fetch.cordis.yml  →  dsh web --patch ./fetch.cordis.yml`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```yaml
- insert:
    - id: mcp-fetch
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: fetch
        transport: stdio
        command: uvx
        args: ["mcp-server-fetch"]
        env: {}
        cwd: !!js process.cwd()
```

</details>
