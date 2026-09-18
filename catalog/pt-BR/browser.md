# Navegador e web

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Chrome DevTools MCP](#chrome-devtools-mcp) — Dá ao agente o Chrome DevTools: controla um Chrome real, inspeciona rede e console, grava traces de performanc…
- [Playwright MCP](#playwright-mcp) — Automação de navegador para agentes via snapshots de acessibilidade do Playwright: navegar, clicar, preencher …
- [Firecrawl MCP](#firecrawl-mcp) — Scraping, crawling, busca e extração estruturada da web para agentes via API Firecrawl (requer chave de API).
- [Exa MCP](#exa-mcp) — Busca e crawling na web pelo mecanismo Exa, incluindo busca de contexto de código.
- [Web search for text-only agents](#dsh-modsearch) — Conecta buscas ao vivo na web e no X (Twitter) a agentes somente texto, retornando evidências estruturadas em …
- [Control the Tabbit Browser](#dsh-dsh-plugin) — Dá ao agente controle do Tabbit Browser: carrega automaticamente uma skill complementar, detecta versões quali…
- [Real browser automation and control](#dsh-dsh-browser) — Dá ao agente uma janela Electron nativa e compartilhada, controlada via CDP com 20 ferramentas (abrir páginas,…
- [Fetch pages as clean readable text](#dsh-dsh-read-url) — Lê qualquer página da web extraindo apenas o conteúdo principal: detecção automática de charset (GBK/GB2312/UT…
- [Headless browser acceptance testing](#dsh-dsh-verify) — Executa testes de aceitação independentes sobre entregas feitas pelo agente: recebe uma especificação em JSON …
- [Control the Jiey Browser via MCP](#dsh-dsh-jiey-browser) — Controla o Jiey Browser a partir do DeepSeek Harness via MCP: navegar, capturar snapshots, agir sobre elemento…
- [Fetch (reference)](#mcp-fetch) — Servidor de referência que busca uma URL e converte a página em Markdown para o agente.

<a id="chrome-devtools-mcp"></a>

### Chrome DevTools MCP

[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) — `Servidor MCP` · ★ 52k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Dá ao agente o Chrome DevTools: controla um Chrome real, inspeciona rede e console, grava traces de performance e depura páginas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio chrome-devtools -- npx -y chrome-devtools-mcp@latest
```

**Codex CLI**

```bash
codex mcp add chrome-devtools -- npx -y chrome-devtools-mcp@latest
```

**Gemini CLI**

```bash
gemini mcp add chrome-devtools npx -y chrome-devtools-mcp@latest
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  chrome-devtools:
    type: stdio
    cmd: npx
    args: ["-y","chrome-devtools-mcp@latest"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `chrome-devtools.cordis.yml  →  dsh web --patch ./chrome-devtools.cordis.yml`

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

[Playwright MCP](https://github.com/microsoft/playwright-mcp) — `Servidor MCP` · ★ 37k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Automação de navegador para agentes via snapshots de acessibilidade do Playwright: navegar, clicar, preencher formulários e capturar telas sem modelo de visão.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  playwright:
    type: stdio
    cmd: npx
    args: ["@playwright/mcp@latest"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `playwright.cordis.yml  →  dsh web --patch ./playwright.cordis.yml`

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

[Firecrawl MCP](https://github.com/firecrawl/firecrawl-mcp-server) — `Servidor MCP` · ★ 7.5k · Licença: MIT · Funciona com: Todos os clientes

Scraping, crawling, busca e extração estruturada da web para agentes via API Firecrawl (requer chave de API).

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio firecrawl --env FIRECRAWL_API_KEY='<FIRECRAWL_API_KEY>' -- npx -y firecrawl-mcp
```

**Codex CLI**

```bash
codex mcp add firecrawl --env FIRECRAWL_API_KEY='<FIRECRAWL_API_KEY>' -- npx -y firecrawl-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e FIRECRAWL_API_KEY='<FIRECRAWL_API_KEY>' firecrawl npx -y firecrawl-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

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

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `firecrawl.cordis.yml  →  dsh web --patch ./firecrawl.cordis.yml`

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

[Exa MCP](https://github.com/exa-labs/exa-mcp-server) — `Servidor MCP` · ★ 5.0k · Licença: MIT · Funciona com: Todos os clientes

Busca e crawling na web pelo mecanismo Exa, incluindo busca de contexto de código.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "exa": {
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "exa": {
      "serverUrl": "https://mcp.exa.ai/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  exa:
    type: streamable_http
    uri: https://mcp.exa.ai/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `exa.cordis.yml  →  dsh web --patch ./exa.cordis.yml`

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

[liustack/modsearch](https://github.com/liustack/modsearch) — `Plugin nativo` · ★ 506 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Conecta buscas ao vivo na web e no X (Twitter) a agentes somente texto, retornando evidências estruturadas em JSON com resultados de busca, conteúdo de páginas e citações.

**Alternativas:**

- [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) (★ 204) — Adiciona 7 motores gratuitos/pagos (DuckDuckGo, Bing, SearXNG, Exa, Perplexity, DeepSeek) com failover automático e UI para chaves de API.
- [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) (★ 67) — Adiciona cache de resultados SQLite+LRU e roteia buscas para mecanismos específicos de sites como GitHub, Bilibili, YouTube e Reddit.
- [A3Boy/dsh-web-tools](https://github.com/A3Boy/dsh-web-tools) (★ 28) — Adiciona pools de chaves próprias (BYOK) entre múltiplos provedores de busca, com monitoramento de saúde e fallback determinístico.
- [yinnho/aginxbrowser#dsh-aginxbrowser](https://github.com/yinnho/aginxbrowser/tree/main/dsh-aginxbrowser) — Adiciona busca agregada em 14 motores e uma URL de visualização ao vivo para que um humano acompanhe e assuma a navegação.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:liustack/modsearch
```

</details>

<a id="dsh-dsh-plugin"></a>

### Control the Tabbit Browser

[Tabbit-Browser/dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) — `Plugin nativo` · ★ 101 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Dá ao agente controle do Tabbit Browser: carrega automaticamente uma skill complementar, detecta versões qualificadas do Tabbit (1.9.0+), verifica o runtime tabbit-cli e baixa o instalador oficial correspondente quando necessário.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Tabbit-Browser/dsh-plugin
```

</details>

<a id="dsh-dsh-browser"></a>

### Real browser automation and control

[wqty123/dsh-browser](https://github.com/wqty123/dsh-browser) — `Plugin nativo` · ★ 68 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Dá ao agente uma janela Electron nativa e compartilhada, controlada via CDP com 20 ferramentas (abrir páginas, snapshots, formulários, screenshots, downloads, detecção de CAPTCHA), enquanto um humano pode acompanhar e assumir o controle.

**Alternativas:**

- [anweat/dsh-browser](https://github.com/anweat/dsh-browser) (★ 21) — Empacota Playwright e Chromium como dependências locais do plugin, com fallback de reuso global e 9 ferramentas de navegador.
- [stuarthu/dsh-chrome](https://github.com/stuarthu/dsh-chrome) (★ 9) — Adiciona um painel lateral no Chrome que permite ao agente ler a página atual e capturar tráfego HTTP.
- [Tencent/BrowserSkill#dsh-plugin-browserskill](https://github.com/Tencent/BrowserSkill/tree/main/packages/dsh-plugin-browserskill) — Controla janelas do Chrome/Edge com observações de acessibilidade e VOM, e sobreposição ao vivo na Web UI para controlar várias sessões.
- [Viger1/dsh-pilot](https://github.com/Viger1/dsh-pilot) (★ 0) — Navega e age sobre elementos usando referências de acessibilidade, aplicando a política de origem conforme a postura de aprovação da sessão.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wqty123/dsh-browser
```

</details>

<a id="dsh-dsh-read-url"></a>

### Fetch pages as clean readable text

[2672243194/dsh-read-url](https://github.com/2672243194/dsh-read-url) — `Plugin nativo` · ★ 18 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Lê qualquer página da web extraindo apenas o conteúdo principal: detecção automática de charset (GBK/GB2312/UTF-8/Big5), remoção de ruído, continuação por offset, renderização opcional de SPA, leituras em lote e rastreamento de sites.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:2672243194/dsh-read-url
```

</details>

<a id="dsh-dsh-verify"></a>

### Headless browser acceptance testing

[263311487-ux/dsh-verify](https://github.com/263311487-ux/dsh-verify) — `Plugin nativo` · ★ 2 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Executa testes de aceitação independentes sobre entregas feitas pelo agente: recebe uma especificação em JSON e retorna um veredito de aprovação/reprovação a partir de uma instância real do Chromium.

**Alternativas:**

- [Viger1/dsh-preview](https://github.com/Viger1/dsh-preview) (★ 0) — Abre a página recém-construída e lê o DOM renderizado, estilos computados, saída do console e uma captura de tela, via skill inclusa.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:263311487-ux/dsh-verify
```

</details>

<a id="dsh-dsh-jiey-browser"></a>

### Control the Jiey Browser via MCP

[jiewaigongxing/dsh-jiey-browser](https://github.com/jiewaigongxing/dsh-jiey-browser) — `Plugin nativo` · ★ 1 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Controla o Jiey Browser a partir do DeepSeek Harness via MCP: navegar, capturar snapshots, agir sobre elementos, ler conteúdo, tirar screenshots e gerenciar abas em um perfil real do Chromium.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jiewaigongxing/dsh-jiey-browser
```

</details>

<a id="mcp-fetch"></a>

### Fetch (reference)

[Fetch (reference)](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Servidor de referência que busca uma URL e converte a página em Markdown para o agente.

<details><summary>Instalar</summary>

**Claude Code**

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```bash
claude mcp add --transport stdio fetch -- uvx mcp-server-fetch
```

**Codex CLI**

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```bash
codex mcp add fetch -- uvx mcp-server-fetch
```

**Gemini CLI**

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```bash
gemini mcp add fetch uvx mcp-server-fetch
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

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

**OpenCode** — Arquivo: `opencode.json`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```yaml
extensions:
  fetch:
    type: stdio
    cmd: uvx
    args: ["mcp-server-fetch"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

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

**DeepSeek Harness** — Arquivo: `fetch.cordis.yml  →  dsh web --patch ./fetch.cordis.yml`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

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
