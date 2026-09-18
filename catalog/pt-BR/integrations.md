# Integrações e notificações

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Notion MCP](#notion-mcp) — Servidor oficial do Notion: busca, lê, cria e atualiza páginas e bancos de dados com um token de integração.
- [Stripe MCP](#stripe-mcp) — Acesso à API e à base de conhecimento da Stripe para agentes: clientes, pagamentos, assinaturas e busca na doc…
- [Multi-channel IM bot bridge](#dsh-dsh-im) — Conecta bots de mensageria ao harness via QR codes ou credenciais de bot, em nove canais: Feishu, WeChat, Ding…
- [Remote phone access to Web UI](#dsh-dsh-pocket) — Acesso remoto pelo celular à Web UI: escaneie um QR code para acesso via LAN ou público (túnel cloudflared), c…
- [Multi-channel notify API and phone control](#dsh-dsh-notifier) — Uma única API notify() para 27 canais com envios orientados por evento, aprovações e perguntas pelo celular, r…
- [Feishu/Lark agent bridge](#dsh-dsh-lark-bot) — Ponte para Feishu/Lark com vinculação de agente por escaneamento, cartões em streaming, workspaces de projeto …
- [ACP bridge for editor clients](#dsh-deepseek-harness-acp) — Plugin de perfil ACP e servidor stdio independente para usar o agente completo do harness a partir do Zed e de…
- [Email inbox tools and alerts](#dsh-dsh-email) — Ferramentas de email IMAP/SMTP para listar, ler, buscar, enviar e responder com threading, filtros de interval…
- [Two-way iMessage channel](#dsh-dsh-imessage) — Canal bidirecional de iMessage via Photon: lista de permissão de remetentes, comandos de sessão, aprovações e …
- [200+ financial metrics](#financetoolkit-mcp) — Calcula mais de 200 métricas financeiras transparentes a partir de demonstrações brutas, sem depender de endpo…
- [Adyen checkout for LatAm](#mcp-dev-latam-adyen) — Servidor da API Adyen Checkout v71 para pagamentos corporativos na América Latina; exige ADYEN_API_KEY.
- [Agent-native product analytics](#agent-native-mcp) — Analytics agent-native similar a Amplitude/Mixpanel: conecta fontes de dados e gera gráficos a partir de promp…
- [Airtable read/write access](#airtable-mcp-server) — Lê e escreve schemas, tabelas e registros de bases do Airtable; exige AIRTABLE_API_KEY.
- [Anki flashcard management](#anki-mcp-server) — Gerencia flashcards do Anki: revisão adaptativa, notas, mídia e decks via AnkiConnect.
- [Atlassian Jira and Confluence](#atlassian-mcp-server) — Servidor oficial da Atlassian, conectando a Jira, Confluence e Loom para buscar, criar e gerenciar trabalho.
- [Brazilian tax data tools](#mcp-fiscal-brasil) — Ferramentas fiscais brasileiras: consultas de CNPJ, NF-e, IBS/CBS, ICMS, Simples Nacional e NCM/CFOP, sem exig…
- [Build walkerOS event pipelines](#walkeros-mcp) — Constrói, valida, simula e implanta pipelines de eventos do walkerOS; exige WALKEROS_TOKEN.
- [Canvas LMS access](#canvas-mcp) — Integração com o Canvas LMS para estudantes e educadores, com controles de privacidade opcionais.
- [Commerce preflight checks](#agent-safe-pipeline-commerce-mcp) — Verificações prévias de comércio, autorização D365 e evidências e relatórios assinados, sem escritas em market…
- [Desktop pet status bridge](#dsh-openpets-dsh) — Conecta o status do ciclo de vida do harness, erros e pedidos de aprovação a um companheiro de desktop OpenPet…
- [Google Ads, Meta Ads and GA4](#google-meta-ads-ga4-mcp) — Mais de 250 ferramentas para gerenciar campanhas, criativos, audiências e relatórios do Google Ads, Meta Ads e…
- [Google Drive, Docs, and Sheets](#google-drive-mcp) — Acesso seguro a Google Drive, Docs, Sheets, Slides e Calendar; exige credenciais OAuth do Google Drive.
- [Google Maps tools](#mcp-google-map) — 18 ferramentas do Google Maps para agentes: geocode, busca, rotas e clima; exige GOOGLE_MAPS_API_KEY.
- [Grow a YouTube channel](#yutu-mcp) — Kit com IA para fazer crescer um canal do YouTube; exige YUTU_CREDENTIAL e YUTU_CACHE_TOKEN.
- [Hevy workout tracking](#hevy-mcp) — Gerencia treinos, rotinas e dados de exercícios via a API do Hevy; exige HEVY_API_KEY.
- [Home Assistant control](#ha-mcp) — Servidor abrangente para gerenciar o Home Assistant por meio de assistentes de IA.
- [Kaneo task and project management](#kaneo-mcp) — Servidor oficial do Kaneo: gerencia tarefas, projetos e labels; exige KANEO_API_KEY.
- [Lean Gmail access](#gmail-mcp-server) — Servidor enxuto para o Gmail, com suporte a autenticação automática.
- [Live Microsoft Word editing](#word-mcp-live) — Edição do Microsoft Word ao vivo, com controle de alterações, desfazer e comentários, em mais de 40 ferramenta…
- [Mapbox geospatial APIs](#mapbox-mcp-server) — Inteligência geoespacial com APIs do Mapbox: geocoding, busca de POI, rotas e isócronas; exige MAPBOX_ACCESS_T…
- [Market data across 100+ exchanges](#ccxt-mcp) — Servidor oficial do CCXT para dados de mercado e negociação em mais de 100 exchanges de cripto e mercados de p…
- [Market screeners and backtesting](#tradingview-mcp) — Dados de mercado em tempo real, screeners, análise técnica e backtesting para ações, cripto e forex.
- [Microsoft 365 and Graph API](#ms-365-mcp-server) — Interage com o Microsoft 365 e serviços do Office por meio da Microsoft Graph API.
- [MikroTik router management](#mikrotik-mcp) — Gerencia roteadores MikroTik via SSH: firewall, NAT, roteamento, DHCP, DNS e WireGuard; exige a senha do Mikro…
- [Mindwtr task automation](#mindwtr-mcp-server) — Automação de tarefas e projetos para dados locais e auto-hospedados do Mindwtr Cloud, somente leitura por padr…
- [monday.com boards and items](#mondaycom-mcp) — Servidor oficial de integração com o monday.com; exige token de Authorization.
- [OAuth for many marketing platforms](#notfair-plugin-mcp) — Servidor OAuth para Google, Meta, X, LinkedIn, Reddit, TikTok, Google Search Console, GA4, WordPress e GoHighL…
- [Odoo ERP access](#mcp-odoo) — Servidor para o Odoo com escritas controladas e suporte multi-instância; exige URL, banco e credenciais do Odo…
- [Phone numbers for verification](#mcp-server) — Compra um número de telefone privado para um agente e devolve o código de verificação por SMS; exige SVN_API_K…
- [PostHog product analytics](#posthog-mcp) — Servidor oficial do PostHog para analytics de produto, feature flags e experimentos; exige token de Authorizat…
- [Power BI semantic modeling](#powerbi-modeling-mcp) — Servidor oficial que traz recursos de modelagem semântica do Power BI para agentes de IA.
- [Programmable inbox for agents](#atomic-mail-agentic-mcp) — Caixa de e-mail programável para agentes de IA via JMAP com autenticação por prova de trabalho; exige ATOMIC_M…
- [Query Apple Health exports](#apple-health-mcp) — Consulta e analisa exportações CSV do Apple Health usando DuckDB; exige HEALTH_DATA_DIR.
- [reMarkable document management](#remarkable-mcp) — Lê, renderiza, busca e gerencia documentos do tablet reMarkable; exige REMARKABLE_TOKEN.
- [SEC EDGAR filings toolkit](#edgartools-mcp) — Kit open-source para o SEC EDGAR, com 11 ferramentas e 7 prompts cobrindo todos os tipos de filing; não exige …
- [Self-hosted media suite control](#mcp-arr) — Servidor para o conjunto *arr de mídia: Sonarr, Radarr, Lidarr, Readarr e Prowlarr.
- [ServiceNow platform access](#servicenow-mcp) — Mais de 450 ferramentas para o ServiceNow, somente leitura por padrão.
- [Strava activity access](#strava-mcp) — Acessa a API do Strava para atividades e estatísticas; exige credenciais de cliente do Strava.
- [Stripe payments for agents](#agent-toolkit-mcp) — Servidor oficial da Stripe com ferramentas para clientes, produtos, pagamentos e mais.
- [Tolgee translation management](#tolgee-platform-mcp) — Busca chaves, cria traduções e aciona tradução automática em um projeto Tolgee de um app; exige X-API-Key.
- [Trello board management](#mcp-server-trello) — Servidor para o Trello, com limitação de taxa, tipagem segura e integração completa com a API; exige TRELLO_AP…
- [UniFi Access door control](#unifi-mcp-access) — Gerencia portas, credenciais, políticas, visitantes e eventos do UniFi Access; exige host e credenciais do Uni…
- [Unified SEO intelligence](#search-console-mcp) — Google Search Console, Bing, GA4 e AdSense combinados em inteligência de SEO unificada; exige credenciais do G…
- [Usertour onboarding flows](#usertour-mcp) — Servidor oficial do Usertour para onboarding dentro do app: fluxos, checklists, pesquisas e analytics.
- [Zapier apps and actions](#zapier-mcp) — Servidor hospedado que conecta assistentes de IA a mais de 9.000 apps e 40.000 ações via Zapier.

<a id="notion-mcp"></a>

### Notion MCP

[Notion MCP](https://github.com/makenotion/notion-mcp-server) — `Servidor MCP` · ★ 4.6k · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial do Notion: busca, lê, cria e atualiza páginas e bancos de dados com um token de integração.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio notion --env NOTION_TOKEN='<NOTION_TOKEN>' -- npx -y @notionhq/notion-mcp-server
```

**Codex CLI**

```bash
codex mcp add notion --env NOTION_TOKEN='<NOTION_TOKEN>' -- npx -y @notionhq/notion-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e NOTION_TOKEN='<NOTION_TOKEN>' notion npx -y @notionhq/notion-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": [
        "-y",
        "@notionhq/notion-mcp-server"
      ],
      "env": {
        "NOTION_TOKEN": "<NOTION_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "notion": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@notionhq/notion-mcp-server"
      ],
      "env": {
        "NOTION_TOKEN": "<NOTION_TOKEN>"
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
    "notion": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@notionhq/notion-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "NOTION_TOKEN": "<NOTION_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": [
        "-y",
        "@notionhq/notion-mcp-server"
      ],
      "env": {
        "NOTION_TOKEN": "<NOTION_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": [
        "-y",
        "@notionhq/notion-mcp-server"
      ],
      "env": {
        "NOTION_TOKEN": "<NOTION_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "notion": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@notionhq/notion-mcp-server"
      ],
      "env": {
        "NOTION_TOKEN": "<NOTION_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  notion:
    type: stdio
    cmd: npx
    args: ["-y","@notionhq/notion-mcp-server"]
    envs:
      NOTION_TOKEN: "<NOTION_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": [
        "-y",
        "@notionhq/notion-mcp-server"
      ],
      "env": {
        "NOTION_TOKEN": "<NOTION_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": [
        "-y",
        "@notionhq/notion-mcp-server"
      ],
      "env": {
        "NOTION_TOKEN": "<NOTION_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `notion.cordis.yml  →  dsh web --patch ./notion.cordis.yml`

```yaml
- insert:
    - id: mcp-notion
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: notion
        transport: stdio
        command: npx
        args: ["-y","@notionhq/notion-mcp-server"]
        env: {"NOTION_TOKEN":"<NOTION_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="stripe-mcp"></a>

### Stripe MCP

[Stripe MCP](https://github.com/stripe/ai) — `Servidor MCP` · ★ 1.8k · Licença: MIT · Funciona com: Todos os clientes

Acesso à API e à base de conhecimento da Stripe para agentes: clientes, pagamentos, assinaturas e busca na documentação.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http stripe https://mcp.stripe.com
```

**Codex CLI**

```bash
codex mcp add stripe --url https://mcp.stripe.com
```

**Gemini CLI**

```bash
gemini mcp add --transport http stripe https://mcp.stripe.com
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "stripe": {
      "url": "https://mcp.stripe.com"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "stripe": {
      "type": "http",
      "url": "https://mcp.stripe.com"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "stripe": {
      "type": "remote",
      "url": "https://mcp.stripe.com",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "stripe": {
      "type": "streamableHttp",
      "url": "https://mcp.stripe.com"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "stripe": {
      "serverUrl": "https://mcp.stripe.com"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "stripe": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.stripe.com"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  stripe:
    type: streamable_http
    uri: https://mcp.stripe.com
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "stripe": {
      "type": "streamable-http",
      "url": "https://mcp.stripe.com"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "stripe": {
      "type": "streamable-http",
      "url": "https://mcp.stripe.com"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `stripe.cordis.yml  →  dsh web --patch ./stripe.cordis.yml`

```yaml
- insert:
    - id: mcp-stripe
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: stripe
        transport: streamable-http
        url: https://mcp.stripe.com
```

</details>

<a id="dsh-dsh-im"></a>

### Multi-channel IM bot bridge

[xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) — `Plugin nativo` · ★ 1.4k · Licença: MIT · Funciona com: DeepSeek Harness apenas

Conecta bots de mensageria ao harness via QR codes ou credenciais de bot, em nove canais: Feishu, WeChat, DingTalk, WeCom, QQ, Slack, Telegram, Discord e WhatsApp.

**Alternativas:**

- [MichengAI/dsh-im-connect](https://github.com/MichengAI/dsh-im-connect) (★ 16) — Dá a cada conversa de mensageria seu próprio workspace como canal separado.
- [AbcdefgXW/dsh-msg-hub](https://github.com/AbcdefgXW/dsh-msg-hub) (★ 4) — Acorda o bot do canal a partir de tarefas agendadas para enviar respostas da IA proativamente ao seu celular.
- [ThreeBody6666/dsh-im-hub](https://github.com/ThreeBody6666/dsh-im-hub) (★ 3) — Usa callbacks criptografados com AES no WeCom e long polling no Telegram, sem precisar de URL pública.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xmanrui/dsh-im
```

</details>

<a id="dsh-dsh-pocket"></a>

### Remote phone access to Web UI

[shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) — `Plugin nativo` · ★ 1.2k · Licença: GPL-2.0 · Funciona com: DeepSeek Harness apenas

Acesso remoto pelo celular à Web UI: escaneie um QR code para acesso via LAN ou público (túnel cloudflared), com sincronização em tempo real, layout adaptado a celular e uma aba de configurações.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:shaobeichen/dsh-pocket
```

</details>

<a id="dsh-dsh-notifier"></a>

### Multi-channel notify API and phone control

[THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) — `Plugin nativo` · ★ 50 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Uma única API notify() para 27 canais com envios orientados por evento, aprovações e perguntas pelo celular, retomada de tarefas pelo celular, imagens enviadas para a sessão, seis canais de controle de entrada, um console web loopback e mensagens bilíngues, sem dependências em runtime.

**Alternativas:**

- [wingsky-1/dsh-plugin-hub#packages/dsh-notifier](https://github.com/wingsky-1/dsh-plugin-hub/tree/main/packages/dsh-notifier) — Adiciona horário silencioso com exceções urgentes, novos lembretes por timeout de aprovação e agregação de rajadas de conclusão.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:THEWOLFWALKER/dsh-notifier
```

</details>

<a id="dsh-dsh-lark-bot"></a>

### Feishu/Lark agent bridge

[PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) — `Plugin nativo` · ★ 39 · Licença: AGPL-3.0 · Funciona com: DeepSeek Harness apenas

Ponte para Feishu/Lark com vinculação de agente por escaneamento, cartões em streaming, workspaces de projeto via git-worktree, tarefas paralelas por escopo, agentes multi-papel, notificação entre sessões, gestão de modelo e chaves pelo chat, e um guardião que continua respondendo no Feishu após uma falha.

**Alternativas:**

- [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) (★ 54) — Executa vários bots que mantêm sessões separadas e podem passar a vez entre si dentro de um mesmo grupo.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PlutoKeating/dsh-lark-bot
```

</details>

<a id="dsh-deepseek-harness-acp"></a>

### ACP bridge for editor clients

[openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) — `Plugin nativo` · ★ 32 · Licença: ver repo · Funciona com: DeepSeek Harness apenas

Plugin de perfil ACP e servidor stdio independente para usar o agente completo do harness a partir do Zed e de outros clientes ACP, compartilhando credenciais e sessões do harness.

**Alternativas:**

- [grunmin/dsh-acp-enhanced](https://github.com/grunmin/dsh-acp-enhanced) (★ 6) — Adiciona streaming de raciocínio por bloco, telemetria de uso, predefinições de permissão, retomada/arquivamento de sessão e encaminhamento de arquivo/terminal do Zed.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:openma-ai/deepseek-harness-acp
```

</details>

<a id="dsh-dsh-email"></a>

### Email inbox tools and alerts

[STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) — `Plugin nativo` · ★ 14 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Ferramentas de email IMAP/SMTP para listar, ler, buscar, enviar e responder com threading, filtros de intervalo de data, múltiplas contas e predefinições de provedores comuns, um portão de aprovação de envio, uma página de configurações e um popup ao chegar novo email.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:STARDUSTLC666/dsh-email
```

</details>

<a id="dsh-dsh-imessage"></a>

### Two-way iMessage channel

[photon-hq/dsh-imessage](https://github.com/photon-hq/dsh-imessage) — `Plugin nativo` · ★ 11 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Canal bidirecional de iMessage via Photon: lista de permissão de remetentes, comandos de sessão, aprovações e perguntas dentro do chat, e uma página de configurações para autorização de dispositivo e configuração de linha hospedada.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:photon-hq/dsh-imessage
```

</details>

<a id="financetoolkit-mcp"></a>

### 200+ financial metrics

[Finance Toolkit](https://github.com/JerBouma/FinanceToolkit) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Calcula mais de 200 métricas financeiras transparentes a partir de demonstrações brutas, sem depender de endpoints de terceiros; exige FINANCIAL_MODELING_PREP_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio financetoolkit --env FINANCIAL_MODELING_PREP_API_KEY='<FINANCIAL_MODELING_PREP_API_KEY>' -- uvx financetoolkit
```

**Codex CLI**

```bash
codex mcp add financetoolkit --env FINANCIAL_MODELING_PREP_API_KEY='<FINANCIAL_MODELING_PREP_API_KEY>' -- uvx financetoolkit
```

**Gemini CLI**

```bash
gemini mcp add -e FINANCIAL_MODELING_PREP_API_KEY='<FINANCIAL_MODELING_PREP_API_KEY>' financetoolkit uvx financetoolkit
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "financetoolkit": {
      "command": "uvx",
      "args": [
        "financetoolkit"
      ],
      "env": {
        "FINANCIAL_MODELING_PREP_API_KEY": "<FINANCIAL_MODELING_PREP_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "financetoolkit": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "financetoolkit"
      ],
      "env": {
        "FINANCIAL_MODELING_PREP_API_KEY": "<FINANCIAL_MODELING_PREP_API_KEY>"
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
    "financetoolkit": {
      "type": "local",
      "command": [
        "uvx",
        "financetoolkit"
      ],
      "enabled": true,
      "environment": {
        "FINANCIAL_MODELING_PREP_API_KEY": "<FINANCIAL_MODELING_PREP_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "financetoolkit": {
      "command": "uvx",
      "args": [
        "financetoolkit"
      ],
      "env": {
        "FINANCIAL_MODELING_PREP_API_KEY": "<FINANCIAL_MODELING_PREP_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "financetoolkit": {
      "command": "uvx",
      "args": [
        "financetoolkit"
      ],
      "env": {
        "FINANCIAL_MODELING_PREP_API_KEY": "<FINANCIAL_MODELING_PREP_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "financetoolkit": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "financetoolkit"
      ],
      "env": {
        "FINANCIAL_MODELING_PREP_API_KEY": "<FINANCIAL_MODELING_PREP_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  financetoolkit:
    type: stdio
    cmd: uvx
    args: ["financetoolkit"]
    envs:
      FINANCIAL_MODELING_PREP_API_KEY: "<FINANCIAL_MODELING_PREP_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "financetoolkit": {
      "command": "uvx",
      "args": [
        "financetoolkit"
      ],
      "env": {
        "FINANCIAL_MODELING_PREP_API_KEY": "<FINANCIAL_MODELING_PREP_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "financetoolkit": {
      "command": "uvx",
      "args": [
        "financetoolkit"
      ],
      "env": {
        "FINANCIAL_MODELING_PREP_API_KEY": "<FINANCIAL_MODELING_PREP_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `financetoolkit.cordis.yml  →  dsh web --patch ./financetoolkit.cordis.yml`

```yaml
- insert:
    - id: mcp-financetoolkit
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: financetoolkit
        transport: stdio
        command: uvx
        args: ["financetoolkit"]
        env: {"FINANCIAL_MODELING_PREP_API_KEY":"<FINANCIAL_MODELING_PREP_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-dev-latam-adyen"></a>

### Adyen checkout for LatAm

[codespar/mcp-dev-latam](https://github.com/codespar/mcp-dev-latam/tree/main/packages/payments/adyen) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor da API Adyen Checkout v71 para pagamentos corporativos na América Latina; exige ADYEN_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-adyen --env ADYEN_API_KEY='<ADYEN_API_KEY>' --env ADYEN_MERCHANT_ACCOUNT='<ADYEN_MERCHANT_ACCOUNT>' -- npx -y @codespar/mcp-adyen
```

**Codex CLI**

```bash
codex mcp add mcp-adyen --env ADYEN_API_KEY='<ADYEN_API_KEY>' --env ADYEN_MERCHANT_ACCOUNT='<ADYEN_MERCHANT_ACCOUNT>' -- npx -y @codespar/mcp-adyen
```

**Gemini CLI**

```bash
gemini mcp add -e ADYEN_API_KEY='<ADYEN_API_KEY>' -e ADYEN_MERCHANT_ACCOUNT='<ADYEN_MERCHANT_ACCOUNT>' mcp-adyen npx -y @codespar/mcp-adyen
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-adyen": {
      "command": "npx",
      "args": [
        "-y",
        "@codespar/mcp-adyen"
      ],
      "env": {
        "ADYEN_API_KEY": "<ADYEN_API_KEY>",
        "ADYEN_MERCHANT_ACCOUNT": "<ADYEN_MERCHANT_ACCOUNT>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-adyen": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@codespar/mcp-adyen"
      ],
      "env": {
        "ADYEN_API_KEY": "<ADYEN_API_KEY>",
        "ADYEN_MERCHANT_ACCOUNT": "<ADYEN_MERCHANT_ACCOUNT>"
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
    "mcp-adyen": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@codespar/mcp-adyen"
      ],
      "enabled": true,
      "environment": {
        "ADYEN_API_KEY": "<ADYEN_API_KEY>",
        "ADYEN_MERCHANT_ACCOUNT": "<ADYEN_MERCHANT_ACCOUNT>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-adyen": {
      "command": "npx",
      "args": [
        "-y",
        "@codespar/mcp-adyen"
      ],
      "env": {
        "ADYEN_API_KEY": "<ADYEN_API_KEY>",
        "ADYEN_MERCHANT_ACCOUNT": "<ADYEN_MERCHANT_ACCOUNT>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-adyen": {
      "command": "npx",
      "args": [
        "-y",
        "@codespar/mcp-adyen"
      ],
      "env": {
        "ADYEN_API_KEY": "<ADYEN_API_KEY>",
        "ADYEN_MERCHANT_ACCOUNT": "<ADYEN_MERCHANT_ACCOUNT>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-adyen": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@codespar/mcp-adyen"
      ],
      "env": {
        "ADYEN_API_KEY": "<ADYEN_API_KEY>",
        "ADYEN_MERCHANT_ACCOUNT": "<ADYEN_MERCHANT_ACCOUNT>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-adyen:
    type: stdio
    cmd: npx
    args: ["-y","@codespar/mcp-adyen"]
    envs:
      ADYEN_API_KEY: "<ADYEN_API_KEY>"
      ADYEN_MERCHANT_ACCOUNT: "<ADYEN_MERCHANT_ACCOUNT>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-adyen": {
      "command": "npx",
      "args": [
        "-y",
        "@codespar/mcp-adyen"
      ],
      "env": {
        "ADYEN_API_KEY": "<ADYEN_API_KEY>",
        "ADYEN_MERCHANT_ACCOUNT": "<ADYEN_MERCHANT_ACCOUNT>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-adyen": {
      "command": "npx",
      "args": [
        "-y",
        "@codespar/mcp-adyen"
      ],
      "env": {
        "ADYEN_API_KEY": "<ADYEN_API_KEY>",
        "ADYEN_MERCHANT_ACCOUNT": "<ADYEN_MERCHANT_ACCOUNT>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-adyen.cordis.yml  →  dsh web --patch ./mcp-adyen.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-adyen
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-adyen
        transport: stdio
        command: npx
        args: ["-y","@codespar/mcp-adyen"]
        env: {"ADYEN_API_KEY":"<ADYEN_API_KEY>","ADYEN_MERCHANT_ACCOUNT":"<ADYEN_MERCHANT_ACCOUNT>"}
        cwd: !!js process.cwd()
```

</details>

<a id="agent-native-mcp"></a>

### Agent-native product analytics

[Agent-Native Analytics](https://github.com/BuilderIO/agent-native) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Analytics agent-native similar a Amplitude/Mixpanel: conecta fontes de dados e gera gráficos a partir de prompts.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http agent-native-analytics https://analytics.agent-native.com/mcp
```

**Codex CLI**

```bash
codex mcp add agent-native-analytics --url https://analytics.agent-native.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http agent-native-analytics https://analytics.agent-native.com/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "agent-native-analytics": {
      "url": "https://analytics.agent-native.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "agent-native-analytics": {
      "type": "http",
      "url": "https://analytics.agent-native.com/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "agent-native-analytics": {
      "type": "remote",
      "url": "https://analytics.agent-native.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "agent-native-analytics": {
      "type": "streamableHttp",
      "url": "https://analytics.agent-native.com/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "agent-native-analytics": {
      "serverUrl": "https://analytics.agent-native.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "agent-native-analytics": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://analytics.agent-native.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  agent-native-analytics:
    type: streamable_http
    uri: https://analytics.agent-native.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "agent-native-analytics": {
      "type": "streamable-http",
      "url": "https://analytics.agent-native.com/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "agent-native-analytics": {
      "type": "streamable-http",
      "url": "https://analytics.agent-native.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `agent-native-analytics.cordis.yml  →  dsh web --patch ./agent-native-analytics.cordis.yml`

```yaml
- insert:
    - id: mcp-agent-native-analytics
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: agent-native-analytics
        transport: streamable-http
        url: https://analytics.agent-native.com/mcp
```

</details>

<a id="airtable-mcp-server"></a>

### Airtable read/write access

[Airtable](https://github.com/domdomegg/airtable-mcp-server) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Lê e escreve schemas, tabelas e registros de bases do Airtable; exige AIRTABLE_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio airtable-mcp-server --env AIRTABLE_API_KEY='<AIRTABLE_API_KEY>' -- npx -y airtable-mcp-server
```

**Codex CLI**

```bash
codex mcp add airtable-mcp-server --env AIRTABLE_API_KEY='<AIRTABLE_API_KEY>' -- npx -y airtable-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e AIRTABLE_API_KEY='<AIRTABLE_API_KEY>' airtable-mcp-server npx -y airtable-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "airtable-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "airtable-mcp-server"
      ],
      "env": {
        "AIRTABLE_API_KEY": "<AIRTABLE_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "airtable-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "airtable-mcp-server"
      ],
      "env": {
        "AIRTABLE_API_KEY": "<AIRTABLE_API_KEY>"
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
    "airtable-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "airtable-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "AIRTABLE_API_KEY": "<AIRTABLE_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "airtable-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "airtable-mcp-server"
      ],
      "env": {
        "AIRTABLE_API_KEY": "<AIRTABLE_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "airtable-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "airtable-mcp-server"
      ],
      "env": {
        "AIRTABLE_API_KEY": "<AIRTABLE_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "airtable-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "airtable-mcp-server"
      ],
      "env": {
        "AIRTABLE_API_KEY": "<AIRTABLE_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  airtable-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","airtable-mcp-server"]
    envs:
      AIRTABLE_API_KEY: "<AIRTABLE_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "airtable-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "airtable-mcp-server"
      ],
      "env": {
        "AIRTABLE_API_KEY": "<AIRTABLE_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "airtable-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "airtable-mcp-server"
      ],
      "env": {
        "AIRTABLE_API_KEY": "<AIRTABLE_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `airtable-mcp-server.cordis.yml  →  dsh web --patch ./airtable-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-airtable-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: airtable-mcp-server
        transport: stdio
        command: npx
        args: ["-y","airtable-mcp-server"]
        env: {"AIRTABLE_API_KEY":"<AIRTABLE_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="anki-mcp-server"></a>

### Anki flashcard management

[Anki MCP Server](https://github.com/ankimcp/anki-mcp-server) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Gerencia flashcards do Anki: revisão adaptativa, notas, mídia e decks via AnkiConnect.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio anki-mcp-server -- npx -y @ankimcp/anki-mcp-server
```

**Codex CLI**

```bash
codex mcp add anki-mcp-server -- npx -y @ankimcp/anki-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add anki-mcp-server npx -y @ankimcp/anki-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "anki-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@ankimcp/anki-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "anki-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@ankimcp/anki-mcp-server"
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
    "anki-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@ankimcp/anki-mcp-server"
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
    "anki-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@ankimcp/anki-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "anki-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@ankimcp/anki-mcp-server"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "anki-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@ankimcp/anki-mcp-server"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  anki-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@ankimcp/anki-mcp-server"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "anki-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@ankimcp/anki-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "anki-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@ankimcp/anki-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `anki-mcp-server.cordis.yml  →  dsh web --patch ./anki-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-anki-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: anki-mcp-server
        transport: stdio
        command: npx
        args: ["-y","@ankimcp/anki-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="atlassian-mcp-server"></a>

### Atlassian Jira and Confluence

[Atlassian Rovo MCP Server](https://github.com/atlassian/atlassian-mcp-server) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor oficial da Atlassian, conectando a Jira, Confluence e Loom para buscar, criar e gerenciar trabalho.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http atlassian-mcp-server https://mcp.atlassian.com/v2/mcp
```

**Codex CLI**

```bash
codex mcp add atlassian-mcp-server --url https://mcp.atlassian.com/v2/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http atlassian-mcp-server https://mcp.atlassian.com/v2/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "atlassian-mcp-server": {
      "url": "https://mcp.atlassian.com/v2/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "atlassian-mcp-server": {
      "type": "http",
      "url": "https://mcp.atlassian.com/v2/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "atlassian-mcp-server": {
      "type": "remote",
      "url": "https://mcp.atlassian.com/v2/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "atlassian-mcp-server": {
      "type": "streamableHttp",
      "url": "https://mcp.atlassian.com/v2/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "atlassian-mcp-server": {
      "serverUrl": "https://mcp.atlassian.com/v2/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "atlassian-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.atlassian.com/v2/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  atlassian-mcp-server:
    type: streamable_http
    uri: https://mcp.atlassian.com/v2/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "atlassian-mcp-server": {
      "type": "streamable-http",
      "url": "https://mcp.atlassian.com/v2/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "atlassian-mcp-server": {
      "type": "streamable-http",
      "url": "https://mcp.atlassian.com/v2/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `atlassian-mcp-server.cordis.yml  →  dsh web --patch ./atlassian-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-atlassian-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: atlassian-mcp-server
        transport: streamable-http
        url: https://mcp.atlassian.com/v2/mcp
```

</details>

<a id="mcp-fiscal-brasil"></a>

### Brazilian tax data tools

[MCP Fiscal Brasil](https://github.com/DeHor-Labs/mcp-fiscal-brasil) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Ferramentas fiscais brasileiras: consultas de CNPJ, NF-e, IBS/CBS, ICMS, Simples Nacional e NCM/CFOP, sem exigir chave de API.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-fiscal-brasil -- uvx mcp-fiscal-brasil
```

**Codex CLI**

```bash
codex mcp add mcp-fiscal-brasil -- uvx mcp-fiscal-brasil
```

**Gemini CLI**

```bash
gemini mcp add mcp-fiscal-brasil uvx mcp-fiscal-brasil
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-fiscal-brasil": {
      "command": "uvx",
      "args": [
        "mcp-fiscal-brasil"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-fiscal-brasil": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "mcp-fiscal-brasil"
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
    "mcp-fiscal-brasil": {
      "type": "local",
      "command": [
        "uvx",
        "mcp-fiscal-brasil"
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
    "mcp-fiscal-brasil": {
      "command": "uvx",
      "args": [
        "mcp-fiscal-brasil"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-fiscal-brasil": {
      "command": "uvx",
      "args": [
        "mcp-fiscal-brasil"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-fiscal-brasil": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "mcp-fiscal-brasil"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-fiscal-brasil:
    type: stdio
    cmd: uvx
    args: ["mcp-fiscal-brasil"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-fiscal-brasil": {
      "command": "uvx",
      "args": [
        "mcp-fiscal-brasil"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-fiscal-brasil": {
      "command": "uvx",
      "args": [
        "mcp-fiscal-brasil"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-fiscal-brasil.cordis.yml  →  dsh web --patch ./mcp-fiscal-brasil.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-fiscal-brasil
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-fiscal-brasil
        transport: stdio
        command: uvx
        args: ["mcp-fiscal-brasil"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="walkeros-mcp"></a>

### Build walkerOS event pipelines

[walkerOS Flow](https://github.com/elbwalker/walkerOS/tree/main/packages/mcps/mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Constrói, valida, simula e implanta pipelines de eventos do walkerOS; exige WALKEROS_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio flow --env WALKEROS_TOKEN='<WALKEROS_TOKEN>' -- npx -y @walkeros/mcp
```

**Codex CLI**

```bash
codex mcp add flow --env WALKEROS_TOKEN='<WALKEROS_TOKEN>' -- npx -y @walkeros/mcp
```

**Gemini CLI**

```bash
gemini mcp add -e WALKEROS_TOKEN='<WALKEROS_TOKEN>' flow npx -y @walkeros/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "flow": {
      "command": "npx",
      "args": [
        "-y",
        "@walkeros/mcp"
      ],
      "env": {
        "WALKEROS_TOKEN": "<WALKEROS_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "flow": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@walkeros/mcp"
      ],
      "env": {
        "WALKEROS_TOKEN": "<WALKEROS_TOKEN>"
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
    "flow": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@walkeros/mcp"
      ],
      "enabled": true,
      "environment": {
        "WALKEROS_TOKEN": "<WALKEROS_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "flow": {
      "command": "npx",
      "args": [
        "-y",
        "@walkeros/mcp"
      ],
      "env": {
        "WALKEROS_TOKEN": "<WALKEROS_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "flow": {
      "command": "npx",
      "args": [
        "-y",
        "@walkeros/mcp"
      ],
      "env": {
        "WALKEROS_TOKEN": "<WALKEROS_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "flow": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@walkeros/mcp"
      ],
      "env": {
        "WALKEROS_TOKEN": "<WALKEROS_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  flow:
    type: stdio
    cmd: npx
    args: ["-y","@walkeros/mcp"]
    envs:
      WALKEROS_TOKEN: "<WALKEROS_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "flow": {
      "command": "npx",
      "args": [
        "-y",
        "@walkeros/mcp"
      ],
      "env": {
        "WALKEROS_TOKEN": "<WALKEROS_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "flow": {
      "command": "npx",
      "args": [
        "-y",
        "@walkeros/mcp"
      ],
      "env": {
        "WALKEROS_TOKEN": "<WALKEROS_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `flow.cordis.yml  →  dsh web --patch ./flow.cordis.yml`

```yaml
- insert:
    - id: mcp-flow
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: flow
        transport: stdio
        command: npx
        args: ["-y","@walkeros/mcp"]
        env: {"WALKEROS_TOKEN":"<WALKEROS_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="canvas-mcp"></a>

### Canvas LMS access

[vishalsachdev/canvas-mcp](https://github.com/vishalsachdev/canvas-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Integração com o Canvas LMS para estudantes e educadores, com controles de privacidade opcionais.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio canvas-mcp -- uvx canvas-mcp
```

**Codex CLI**

```bash
codex mcp add canvas-mcp -- uvx canvas-mcp
```

**Gemini CLI**

```bash
gemini mcp add canvas-mcp uvx canvas-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "canvas-mcp": {
      "command": "uvx",
      "args": [
        "canvas-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "canvas-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "canvas-mcp"
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
    "canvas-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "canvas-mcp"
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
    "canvas-mcp": {
      "command": "uvx",
      "args": [
        "canvas-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "canvas-mcp": {
      "command": "uvx",
      "args": [
        "canvas-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "canvas-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "canvas-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  canvas-mcp:
    type: stdio
    cmd: uvx
    args: ["canvas-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "canvas-mcp": {
      "command": "uvx",
      "args": [
        "canvas-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "canvas-mcp": {
      "command": "uvx",
      "args": [
        "canvas-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `canvas-mcp.cordis.yml  →  dsh web --patch ./canvas-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-canvas-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: canvas-mcp
        transport: stdio
        command: uvx
        args: ["canvas-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="agent-safe-pipeline-commerce-mcp"></a>

### Commerce preflight checks

[Decionis CommerceGate MCP](https://github.com/decionis/agent-safe-pipeline/tree/main/packages/commerce-mcp) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Verificações prévias de comércio, autorização D365 e evidências e relatórios assinados, sem escritas em marketplace ou ERP; exige DECIONIS_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio commerce-gate --env DECIONIS_API_KEY='<DECIONIS_API_KEY>' -- npx -y @decionis/commerce
```

**Codex CLI**

```bash
codex mcp add commerce-gate --env DECIONIS_API_KEY='<DECIONIS_API_KEY>' -- npx -y @decionis/commerce
```

**Gemini CLI**

```bash
gemini mcp add -e DECIONIS_API_KEY='<DECIONIS_API_KEY>' commerce-gate npx -y @decionis/commerce
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "commerce-gate": {
      "command": "npx",
      "args": [
        "-y",
        "@decionis/commerce"
      ],
      "env": {
        "DECIONIS_API_KEY": "<DECIONIS_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "commerce-gate": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@decionis/commerce"
      ],
      "env": {
        "DECIONIS_API_KEY": "<DECIONIS_API_KEY>"
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
    "commerce-gate": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@decionis/commerce"
      ],
      "enabled": true,
      "environment": {
        "DECIONIS_API_KEY": "<DECIONIS_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "commerce-gate": {
      "command": "npx",
      "args": [
        "-y",
        "@decionis/commerce"
      ],
      "env": {
        "DECIONIS_API_KEY": "<DECIONIS_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "commerce-gate": {
      "command": "npx",
      "args": [
        "-y",
        "@decionis/commerce"
      ],
      "env": {
        "DECIONIS_API_KEY": "<DECIONIS_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "commerce-gate": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@decionis/commerce"
      ],
      "env": {
        "DECIONIS_API_KEY": "<DECIONIS_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  commerce-gate:
    type: stdio
    cmd: npx
    args: ["-y","@decionis/commerce"]
    envs:
      DECIONIS_API_KEY: "<DECIONIS_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "commerce-gate": {
      "command": "npx",
      "args": [
        "-y",
        "@decionis/commerce"
      ],
      "env": {
        "DECIONIS_API_KEY": "<DECIONIS_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "commerce-gate": {
      "command": "npx",
      "args": [
        "-y",
        "@decionis/commerce"
      ],
      "env": {
        "DECIONIS_API_KEY": "<DECIONIS_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `commerce-gate.cordis.yml  →  dsh web --patch ./commerce-gate.cordis.yml`

```yaml
- insert:
    - id: mcp-commerce-gate
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: commerce-gate
        transport: stdio
        command: npx
        args: ["-y","@decionis/commerce"]
        env: {"DECIONIS_API_KEY":"<DECIONIS_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-openpets-dsh"></a>

### Desktop pet status bridge

[alvinunreal/openpets#dsh](https://github.com/alvinunreal/openpets/tree/main/packages/dsh) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Conecta o status do ciclo de vida do harness, erros e pedidos de aprovação a um companheiro de desktop OpenPets rodando localmente.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:alvinunreal/openpets#path:/packages/dsh
```

</details>

<a id="google-meta-ads-ga4-mcp"></a>

### Google Ads, Meta Ads and GA4

[Google Ads + Meta Ads + GA4 MCP](https://github.com/irinabuht12-oss/google-meta-ads-ga4-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Mais de 250 ferramentas para gerenciar campanhas, criativos, audiências e relatórios do Google Ads, Meta Ads e GA4.

**Alternativas:**

- [AdLoop](https://github.com/kLOsk/adloop) — Gerencia Google Ads, GA4 e Tag Manager com uma prévia mostrada antes de cada alteração.
- [surendranb/google-analytics-mcp](https://github.com/surendranb/google-analytics-mcp) — Servidor específico para GA4, com descoberta de schema e agregação no servidor; exige GOOGLE_APPLICATION_CREDENTIALS.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http google-meta-ads-ga4-mcp https://connector.get-ryze.ai/mcp
```

**Codex CLI**

```bash
codex mcp add google-meta-ads-ga4-mcp --url https://connector.get-ryze.ai/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http google-meta-ads-ga4-mcp https://connector.get-ryze.ai/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "google-meta-ads-ga4-mcp": {
      "url": "https://connector.get-ryze.ai/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "google-meta-ads-ga4-mcp": {
      "type": "http",
      "url": "https://connector.get-ryze.ai/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "google-meta-ads-ga4-mcp": {
      "type": "remote",
      "url": "https://connector.get-ryze.ai/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "google-meta-ads-ga4-mcp": {
      "type": "streamableHttp",
      "url": "https://connector.get-ryze.ai/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "google-meta-ads-ga4-mcp": {
      "serverUrl": "https://connector.get-ryze.ai/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "google-meta-ads-ga4-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://connector.get-ryze.ai/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  google-meta-ads-ga4-mcp:
    type: streamable_http
    uri: https://connector.get-ryze.ai/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "google-meta-ads-ga4-mcp": {
      "type": "streamable-http",
      "url": "https://connector.get-ryze.ai/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "google-meta-ads-ga4-mcp": {
      "type": "streamable-http",
      "url": "https://connector.get-ryze.ai/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `google-meta-ads-ga4-mcp.cordis.yml  →  dsh web --patch ./google-meta-ads-ga4-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-google-meta-ads-ga4-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: google-meta-ads-ga4-mcp
        transport: streamable-http
        url: https://connector.get-ryze.ai/mcp
```

</details>

<a id="google-drive-mcp"></a>

### Google Drive, Docs, and Sheets

[Google Drive MCP](https://github.com/piotr-agier/google-drive-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Acesso seguro a Google Drive, Docs, Sheets, Slides e Calendar; exige credenciais OAuth do Google Drive.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio google-drive-mcp --env GOOGLE_DRIVE_OAUTH_CREDENTIALS='<GOOGLE_DRIVE_OAUTH_CREDENTIALS>' -- npx -y @piotr-agier/google-drive-mcp
```

**Codex CLI**

```bash
codex mcp add google-drive-mcp --env GOOGLE_DRIVE_OAUTH_CREDENTIALS='<GOOGLE_DRIVE_OAUTH_CREDENTIALS>' -- npx -y @piotr-agier/google-drive-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e GOOGLE_DRIVE_OAUTH_CREDENTIALS='<GOOGLE_DRIVE_OAUTH_CREDENTIALS>' google-drive-mcp npx -y @piotr-agier/google-drive-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "google-drive-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@piotr-agier/google-drive-mcp"
      ],
      "env": {
        "GOOGLE_DRIVE_OAUTH_CREDENTIALS": "<GOOGLE_DRIVE_OAUTH_CREDENTIALS>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "google-drive-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@piotr-agier/google-drive-mcp"
      ],
      "env": {
        "GOOGLE_DRIVE_OAUTH_CREDENTIALS": "<GOOGLE_DRIVE_OAUTH_CREDENTIALS>"
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
    "google-drive-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@piotr-agier/google-drive-mcp"
      ],
      "enabled": true,
      "environment": {
        "GOOGLE_DRIVE_OAUTH_CREDENTIALS": "<GOOGLE_DRIVE_OAUTH_CREDENTIALS>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "google-drive-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@piotr-agier/google-drive-mcp"
      ],
      "env": {
        "GOOGLE_DRIVE_OAUTH_CREDENTIALS": "<GOOGLE_DRIVE_OAUTH_CREDENTIALS>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "google-drive-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@piotr-agier/google-drive-mcp"
      ],
      "env": {
        "GOOGLE_DRIVE_OAUTH_CREDENTIALS": "<GOOGLE_DRIVE_OAUTH_CREDENTIALS>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "google-drive-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@piotr-agier/google-drive-mcp"
      ],
      "env": {
        "GOOGLE_DRIVE_OAUTH_CREDENTIALS": "<GOOGLE_DRIVE_OAUTH_CREDENTIALS>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  google-drive-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@piotr-agier/google-drive-mcp"]
    envs:
      GOOGLE_DRIVE_OAUTH_CREDENTIALS: "<GOOGLE_DRIVE_OAUTH_CREDENTIALS>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "google-drive-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@piotr-agier/google-drive-mcp"
      ],
      "env": {
        "GOOGLE_DRIVE_OAUTH_CREDENTIALS": "<GOOGLE_DRIVE_OAUTH_CREDENTIALS>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "google-drive-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@piotr-agier/google-drive-mcp"
      ],
      "env": {
        "GOOGLE_DRIVE_OAUTH_CREDENTIALS": "<GOOGLE_DRIVE_OAUTH_CREDENTIALS>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `google-drive-mcp.cordis.yml  →  dsh web --patch ./google-drive-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-google-drive-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: google-drive-mcp
        transport: stdio
        command: npx
        args: ["-y","@piotr-agier/google-drive-mcp"]
        env: {"GOOGLE_DRIVE_OAUTH_CREDENTIALS":"<GOOGLE_DRIVE_OAUTH_CREDENTIALS>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-google-map"></a>

### Google Maps tools

[Google Maps MCP Server](https://github.com/cablate/mcp-google-map) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

18 ferramentas do Google Maps para agentes: geocode, busca, rotas e clima; exige GOOGLE_MAPS_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio google-map --env GOOGLE_MAPS_API_KEY='<GOOGLE_MAPS_API_KEY>' -- npx -y @cablate/mcp-google-map
```

**Codex CLI**

```bash
codex mcp add google-map --env GOOGLE_MAPS_API_KEY='<GOOGLE_MAPS_API_KEY>' -- npx -y @cablate/mcp-google-map
```

**Gemini CLI**

```bash
gemini mcp add -e GOOGLE_MAPS_API_KEY='<GOOGLE_MAPS_API_KEY>' google-map npx -y @cablate/mcp-google-map
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "google-map": {
      "command": "npx",
      "args": [
        "-y",
        "@cablate/mcp-google-map"
      ],
      "env": {
        "GOOGLE_MAPS_API_KEY": "<GOOGLE_MAPS_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "google-map": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@cablate/mcp-google-map"
      ],
      "env": {
        "GOOGLE_MAPS_API_KEY": "<GOOGLE_MAPS_API_KEY>"
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
    "google-map": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@cablate/mcp-google-map"
      ],
      "enabled": true,
      "environment": {
        "GOOGLE_MAPS_API_KEY": "<GOOGLE_MAPS_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "google-map": {
      "command": "npx",
      "args": [
        "-y",
        "@cablate/mcp-google-map"
      ],
      "env": {
        "GOOGLE_MAPS_API_KEY": "<GOOGLE_MAPS_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "google-map": {
      "command": "npx",
      "args": [
        "-y",
        "@cablate/mcp-google-map"
      ],
      "env": {
        "GOOGLE_MAPS_API_KEY": "<GOOGLE_MAPS_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "google-map": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@cablate/mcp-google-map"
      ],
      "env": {
        "GOOGLE_MAPS_API_KEY": "<GOOGLE_MAPS_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  google-map:
    type: stdio
    cmd: npx
    args: ["-y","@cablate/mcp-google-map"]
    envs:
      GOOGLE_MAPS_API_KEY: "<GOOGLE_MAPS_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "google-map": {
      "command": "npx",
      "args": [
        "-y",
        "@cablate/mcp-google-map"
      ],
      "env": {
        "GOOGLE_MAPS_API_KEY": "<GOOGLE_MAPS_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "google-map": {
      "command": "npx",
      "args": [
        "-y",
        "@cablate/mcp-google-map"
      ],
      "env": {
        "GOOGLE_MAPS_API_KEY": "<GOOGLE_MAPS_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `google-map.cordis.yml  →  dsh web --patch ./google-map.cordis.yml`

```yaml
- insert:
    - id: mcp-google-map
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: google-map
        transport: stdio
        command: npx
        args: ["-y","@cablate/mcp-google-map"]
        env: {"GOOGLE_MAPS_API_KEY":"<GOOGLE_MAPS_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="yutu-mcp"></a>

### Grow a YouTube channel

[yutu](https://github.com/eat-pray-ai/yutu) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Kit com IA para fazer crescer um canal do YouTube; exige YUTU_CREDENTIAL e YUTU_CACHE_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio yutu --env YUTU_CREDENTIAL='<YUTU_CREDENTIAL>' --env YUTU_CACHE_TOKEN='<YUTU_CACHE_TOKEN>' -- npx -y @eat-pray-ai/yutu
```

**Codex CLI**

```bash
codex mcp add yutu --env YUTU_CREDENTIAL='<YUTU_CREDENTIAL>' --env YUTU_CACHE_TOKEN='<YUTU_CACHE_TOKEN>' -- npx -y @eat-pray-ai/yutu
```

**Gemini CLI**

```bash
gemini mcp add -e YUTU_CREDENTIAL='<YUTU_CREDENTIAL>' -e YUTU_CACHE_TOKEN='<YUTU_CACHE_TOKEN>' yutu npx -y @eat-pray-ai/yutu
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "yutu": {
      "command": "npx",
      "args": [
        "-y",
        "@eat-pray-ai/yutu"
      ],
      "env": {
        "YUTU_CREDENTIAL": "<YUTU_CREDENTIAL>",
        "YUTU_CACHE_TOKEN": "<YUTU_CACHE_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "yutu": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@eat-pray-ai/yutu"
      ],
      "env": {
        "YUTU_CREDENTIAL": "<YUTU_CREDENTIAL>",
        "YUTU_CACHE_TOKEN": "<YUTU_CACHE_TOKEN>"
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
    "yutu": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@eat-pray-ai/yutu"
      ],
      "enabled": true,
      "environment": {
        "YUTU_CREDENTIAL": "<YUTU_CREDENTIAL>",
        "YUTU_CACHE_TOKEN": "<YUTU_CACHE_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "yutu": {
      "command": "npx",
      "args": [
        "-y",
        "@eat-pray-ai/yutu"
      ],
      "env": {
        "YUTU_CREDENTIAL": "<YUTU_CREDENTIAL>",
        "YUTU_CACHE_TOKEN": "<YUTU_CACHE_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "yutu": {
      "command": "npx",
      "args": [
        "-y",
        "@eat-pray-ai/yutu"
      ],
      "env": {
        "YUTU_CREDENTIAL": "<YUTU_CREDENTIAL>",
        "YUTU_CACHE_TOKEN": "<YUTU_CACHE_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "yutu": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@eat-pray-ai/yutu"
      ],
      "env": {
        "YUTU_CREDENTIAL": "<YUTU_CREDENTIAL>",
        "YUTU_CACHE_TOKEN": "<YUTU_CACHE_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  yutu:
    type: stdio
    cmd: npx
    args: ["-y","@eat-pray-ai/yutu"]
    envs:
      YUTU_CREDENTIAL: "<YUTU_CREDENTIAL>"
      YUTU_CACHE_TOKEN: "<YUTU_CACHE_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "yutu": {
      "command": "npx",
      "args": [
        "-y",
        "@eat-pray-ai/yutu"
      ],
      "env": {
        "YUTU_CREDENTIAL": "<YUTU_CREDENTIAL>",
        "YUTU_CACHE_TOKEN": "<YUTU_CACHE_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "yutu": {
      "command": "npx",
      "args": [
        "-y",
        "@eat-pray-ai/yutu"
      ],
      "env": {
        "YUTU_CREDENTIAL": "<YUTU_CREDENTIAL>",
        "YUTU_CACHE_TOKEN": "<YUTU_CACHE_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `yutu.cordis.yml  →  dsh web --patch ./yutu.cordis.yml`

```yaml
- insert:
    - id: mcp-yutu
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: yutu
        transport: stdio
        command: npx
        args: ["-y","@eat-pray-ai/yutu"]
        env: {"YUTU_CREDENTIAL":"<YUTU_CREDENTIAL>","YUTU_CACHE_TOKEN":"<YUTU_CACHE_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="hevy-mcp"></a>

### Hevy workout tracking

[Hevy MCP Server](https://github.com/chrisdoc/hevy-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Gerencia treinos, rotinas e dados de exercícios via a API do Hevy; exige HEVY_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio hevy-mcp --env HEVY_API_KEY='<HEVY_API_KEY>' -- npx -y hevy-mcp
```

**Codex CLI**

```bash
codex mcp add hevy-mcp --env HEVY_API_KEY='<HEVY_API_KEY>' -- npx -y hevy-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e HEVY_API_KEY='<HEVY_API_KEY>' hevy-mcp npx -y hevy-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "hevy-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "hevy-mcp"
      ],
      "env": {
        "HEVY_API_KEY": "<HEVY_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "hevy-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "hevy-mcp"
      ],
      "env": {
        "HEVY_API_KEY": "<HEVY_API_KEY>"
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
    "hevy-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "hevy-mcp"
      ],
      "enabled": true,
      "environment": {
        "HEVY_API_KEY": "<HEVY_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "hevy-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "hevy-mcp"
      ],
      "env": {
        "HEVY_API_KEY": "<HEVY_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "hevy-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "hevy-mcp"
      ],
      "env": {
        "HEVY_API_KEY": "<HEVY_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "hevy-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "hevy-mcp"
      ],
      "env": {
        "HEVY_API_KEY": "<HEVY_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  hevy-mcp:
    type: stdio
    cmd: npx
    args: ["-y","hevy-mcp"]
    envs:
      HEVY_API_KEY: "<HEVY_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "hevy-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "hevy-mcp"
      ],
      "env": {
        "HEVY_API_KEY": "<HEVY_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "hevy-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "hevy-mcp"
      ],
      "env": {
        "HEVY_API_KEY": "<HEVY_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `hevy-mcp.cordis.yml  →  dsh web --patch ./hevy-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-hevy-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: hevy-mcp
        transport: stdio
        command: npx
        args: ["-y","hevy-mcp"]
        env: {"HEVY_API_KEY":"<HEVY_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="ha-mcp"></a>

### Home Assistant control

[homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor abrangente para gerenciar o Home Assistant por meio de assistentes de IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio ha-mcp -- uvx ha-mcp
```

**Codex CLI**

```bash
codex mcp add ha-mcp -- uvx ha-mcp
```

**Gemini CLI**

```bash
gemini mcp add ha-mcp uvx ha-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "ha-mcp": {
      "command": "uvx",
      "args": [
        "ha-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "ha-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "ha-mcp"
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
    "ha-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "ha-mcp"
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
    "ha-mcp": {
      "command": "uvx",
      "args": [
        "ha-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "ha-mcp": {
      "command": "uvx",
      "args": [
        "ha-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "ha-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "ha-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  ha-mcp:
    type: stdio
    cmd: uvx
    args: ["ha-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "ha-mcp": {
      "command": "uvx",
      "args": [
        "ha-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "ha-mcp": {
      "command": "uvx",
      "args": [
        "ha-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `ha-mcp.cordis.yml  →  dsh web --patch ./ha-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-ha-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: ha-mcp
        transport: stdio
        command: uvx
        args: ["ha-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="kaneo-mcp"></a>

### Kaneo task and project management

[usekaneo/kaneo](https://github.com/usekaneo/kaneo) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial do Kaneo: gerencia tarefas, projetos e labels; exige KANEO_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio kaneo --env KANEO_API_KEY='<KANEO_API_KEY>' -- npx -y @kaneo/mcp
```

**Codex CLI**

```bash
codex mcp add kaneo --env KANEO_API_KEY='<KANEO_API_KEY>' -- npx -y @kaneo/mcp
```

**Gemini CLI**

```bash
gemini mcp add -e KANEO_API_KEY='<KANEO_API_KEY>' kaneo npx -y @kaneo/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "kaneo": {
      "command": "npx",
      "args": [
        "-y",
        "@kaneo/mcp"
      ],
      "env": {
        "KANEO_API_KEY": "<KANEO_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "kaneo": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@kaneo/mcp"
      ],
      "env": {
        "KANEO_API_KEY": "<KANEO_API_KEY>"
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
    "kaneo": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@kaneo/mcp"
      ],
      "enabled": true,
      "environment": {
        "KANEO_API_KEY": "<KANEO_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "kaneo": {
      "command": "npx",
      "args": [
        "-y",
        "@kaneo/mcp"
      ],
      "env": {
        "KANEO_API_KEY": "<KANEO_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "kaneo": {
      "command": "npx",
      "args": [
        "-y",
        "@kaneo/mcp"
      ],
      "env": {
        "KANEO_API_KEY": "<KANEO_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "kaneo": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@kaneo/mcp"
      ],
      "env": {
        "KANEO_API_KEY": "<KANEO_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  kaneo:
    type: stdio
    cmd: npx
    args: ["-y","@kaneo/mcp"]
    envs:
      KANEO_API_KEY: "<KANEO_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "kaneo": {
      "command": "npx",
      "args": [
        "-y",
        "@kaneo/mcp"
      ],
      "env": {
        "KANEO_API_KEY": "<KANEO_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "kaneo": {
      "command": "npx",
      "args": [
        "-y",
        "@kaneo/mcp"
      ],
      "env": {
        "KANEO_API_KEY": "<KANEO_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `kaneo.cordis.yml  →  dsh web --patch ./kaneo.cordis.yml`

```yaml
- insert:
    - id: mcp-kaneo
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: kaneo
        transport: stdio
        command: npx
        args: ["-y","@kaneo/mcp"]
        env: {"KANEO_API_KEY":"<KANEO_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="gmail-mcp-server"></a>

### Lean Gmail access

[ArtyMcLabin/Gmail-MCP-Server](https://github.com/ArtyMcLabin/Gmail-MCP-Server) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor enxuto para o Gmail, com suporte a autenticação automática.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio gmail-mcp-server -- npx -y @artymclabin/gmail-mcp
```

**Codex CLI**

```bash
codex mcp add gmail-mcp-server -- npx -y @artymclabin/gmail-mcp
```

**Gemini CLI**

```bash
gemini mcp add gmail-mcp-server npx -y @artymclabin/gmail-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "gmail-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@artymclabin/gmail-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "gmail-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@artymclabin/gmail-mcp"
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
    "gmail-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@artymclabin/gmail-mcp"
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
    "gmail-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@artymclabin/gmail-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "gmail-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@artymclabin/gmail-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "gmail-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@artymclabin/gmail-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  gmail-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@artymclabin/gmail-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "gmail-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@artymclabin/gmail-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "gmail-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@artymclabin/gmail-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `gmail-mcp-server.cordis.yml  →  dsh web --patch ./gmail-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-gmail-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: gmail-mcp-server
        transport: stdio
        command: npx
        args: ["-y","@artymclabin/gmail-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="word-mcp-live"></a>

### Live Microsoft Word editing

[Word MCP Live](https://github.com/ykarapazar/word-mcp-live) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Edição do Microsoft Word ao vivo, com controle de alterações, desfazer e comentários, em mais de 40 ferramentas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio word-mcp-live -- uvx word-mcp-live
```

**Codex CLI**

```bash
codex mcp add word-mcp-live -- uvx word-mcp-live
```

**Gemini CLI**

```bash
gemini mcp add word-mcp-live uvx word-mcp-live
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "word-mcp-live": {
      "command": "uvx",
      "args": [
        "word-mcp-live"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "word-mcp-live": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "word-mcp-live"
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
    "word-mcp-live": {
      "type": "local",
      "command": [
        "uvx",
        "word-mcp-live"
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
    "word-mcp-live": {
      "command": "uvx",
      "args": [
        "word-mcp-live"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "word-mcp-live": {
      "command": "uvx",
      "args": [
        "word-mcp-live"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "word-mcp-live": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "word-mcp-live"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  word-mcp-live:
    type: stdio
    cmd: uvx
    args: ["word-mcp-live"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "word-mcp-live": {
      "command": "uvx",
      "args": [
        "word-mcp-live"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "word-mcp-live": {
      "command": "uvx",
      "args": [
        "word-mcp-live"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `word-mcp-live.cordis.yml  →  dsh web --patch ./word-mcp-live.cordis.yml`

```yaml
- insert:
    - id: mcp-word-mcp-live
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: word-mcp-live
        transport: stdio
        command: uvx
        args: ["word-mcp-live"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="mapbox-mcp-server"></a>

### Mapbox geospatial APIs

[mapbox/mcp-server](https://github.com/mapbox/mcp-server) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Inteligência geoespacial com APIs do Mapbox: geocoding, busca de POI, rotas e isócronas; exige MAPBOX_ACCESS_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-server --env MAPBOX_ACCESS_TOKEN='<MAPBOX_ACCESS_TOKEN>' -- npx -y @mapbox/mcp-server
```

**Codex CLI**

```bash
codex mcp add mcp-server --env MAPBOX_ACCESS_TOKEN='<MAPBOX_ACCESS_TOKEN>' -- npx -y @mapbox/mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e MAPBOX_ACCESS_TOKEN='<MAPBOX_ACCESS_TOKEN>' mcp-server npx -y @mapbox/mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@mapbox/mcp-server"
      ],
      "env": {
        "MAPBOX_ACCESS_TOKEN": "<MAPBOX_ACCESS_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@mapbox/mcp-server"
      ],
      "env": {
        "MAPBOX_ACCESS_TOKEN": "<MAPBOX_ACCESS_TOKEN>"
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
    "mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@mapbox/mcp-server"
      ],
      "enabled": true,
      "environment": {
        "MAPBOX_ACCESS_TOKEN": "<MAPBOX_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@mapbox/mcp-server"
      ],
      "env": {
        "MAPBOX_ACCESS_TOKEN": "<MAPBOX_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@mapbox/mcp-server"
      ],
      "env": {
        "MAPBOX_ACCESS_TOKEN": "<MAPBOX_ACCESS_TOKEN>"
      }
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
        "@mapbox/mcp-server"
      ],
      "env": {
        "MAPBOX_ACCESS_TOKEN": "<MAPBOX_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@mapbox/mcp-server"]
    envs:
      MAPBOX_ACCESS_TOKEN: "<MAPBOX_ACCESS_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@mapbox/mcp-server"
      ],
      "env": {
        "MAPBOX_ACCESS_TOKEN": "<MAPBOX_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@mapbox/mcp-server"
      ],
      "env": {
        "MAPBOX_ACCESS_TOKEN": "<MAPBOX_ACCESS_TOKEN>"
      }
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
        transport: stdio
        command: npx
        args: ["-y","@mapbox/mcp-server"]
        env: {"MAPBOX_ACCESS_TOKEN":"<MAPBOX_ACCESS_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="ccxt-mcp"></a>

### Market data across 100+ exchanges

[CCXT](https://github.com/ccxt/ccxt/tree/main/mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial do CCXT para dados de mercado e negociação em mais de 100 exchanges de cripto e mercados de previsão.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio ccxt-mcp -- npx -y ccxt-mcp
```

**Codex CLI**

```bash
codex mcp add ccxt-mcp -- npx -y ccxt-mcp
```

**Gemini CLI**

```bash
gemini mcp add ccxt-mcp npx -y ccxt-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "ccxt-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ccxt-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "ccxt-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "ccxt-mcp"
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
    "ccxt-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "ccxt-mcp"
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
    "ccxt-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ccxt-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "ccxt-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ccxt-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "ccxt-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "ccxt-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  ccxt-mcp:
    type: stdio
    cmd: npx
    args: ["-y","ccxt-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "ccxt-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ccxt-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "ccxt-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ccxt-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `ccxt-mcp.cordis.yml  →  dsh web --patch ./ccxt-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-ccxt-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: ccxt-mcp
        transport: stdio
        command: npx
        args: ["-y","ccxt-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="tradingview-mcp"></a>

### Market screeners and backtesting

[atilaahmettaner/tradingview-mcp](https://github.com/atilaahmettaner/tradingview-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Dados de mercado em tempo real, screeners, análise técnica e backtesting para ações, cripto e forex.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http tradingview-mcp https://mcp.cryptosieve.com/mcp
```

**Codex CLI**

```bash
codex mcp add tradingview-mcp --url https://mcp.cryptosieve.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http tradingview-mcp https://mcp.cryptosieve.com/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "tradingview-mcp": {
      "url": "https://mcp.cryptosieve.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "tradingview-mcp": {
      "type": "http",
      "url": "https://mcp.cryptosieve.com/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "tradingview-mcp": {
      "type": "remote",
      "url": "https://mcp.cryptosieve.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "tradingview-mcp": {
      "type": "streamableHttp",
      "url": "https://mcp.cryptosieve.com/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "tradingview-mcp": {
      "serverUrl": "https://mcp.cryptosieve.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "tradingview-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.cryptosieve.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  tradingview-mcp:
    type: streamable_http
    uri: https://mcp.cryptosieve.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "tradingview-mcp": {
      "type": "streamable-http",
      "url": "https://mcp.cryptosieve.com/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "tradingview-mcp": {
      "type": "streamable-http",
      "url": "https://mcp.cryptosieve.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `tradingview-mcp.cordis.yml  →  dsh web --patch ./tradingview-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-tradingview-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: tradingview-mcp
        transport: streamable-http
        url: https://mcp.cryptosieve.com/mcp
```

</details>

<a id="ms-365-mcp-server"></a>

### Microsoft 365 and Graph API

[Microsoft 365 MCP Server](https://github.com/Softeria/ms-365-mcp-server) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Interage com o Microsoft 365 e serviços do Office por meio da Microsoft Graph API.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio ms-365-mcp-server -- npx -y @softeria/ms-365-mcp-server
```

**Codex CLI**

```bash
codex mcp add ms-365-mcp-server -- npx -y @softeria/ms-365-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add ms-365-mcp-server npx -y @softeria/ms-365-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "ms-365-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@softeria/ms-365-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "ms-365-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@softeria/ms-365-mcp-server"
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
    "ms-365-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@softeria/ms-365-mcp-server"
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
    "ms-365-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@softeria/ms-365-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "ms-365-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@softeria/ms-365-mcp-server"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "ms-365-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@softeria/ms-365-mcp-server"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  ms-365-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@softeria/ms-365-mcp-server"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "ms-365-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@softeria/ms-365-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "ms-365-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@softeria/ms-365-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `ms-365-mcp-server.cordis.yml  →  dsh web --patch ./ms-365-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-ms-365-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: ms-365-mcp-server
        transport: stdio
        command: npx
        args: ["-y","@softeria/ms-365-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="mikrotik-mcp"></a>

### MikroTik router management

[jeff-nasseri/mikrotik-mcp](https://github.com/jeff-nasseri/mikrotik-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Gerencia roteadores MikroTik via SSH: firewall, NAT, roteamento, DHCP, DNS e WireGuard; exige a senha do MikroTik.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mikrotik-mcp --env MIKROTIK_PASSWORD='<MIKROTIK_PASSWORD>' --env MIKROTIK_INVENTORY='<MIKROTIK_INVENTORY>' -- uvx mcp-server-mikrotik
```

**Codex CLI**

```bash
codex mcp add mikrotik-mcp --env MIKROTIK_PASSWORD='<MIKROTIK_PASSWORD>' --env MIKROTIK_INVENTORY='<MIKROTIK_INVENTORY>' -- uvx mcp-server-mikrotik
```

**Gemini CLI**

```bash
gemini mcp add -e MIKROTIK_PASSWORD='<MIKROTIK_PASSWORD>' -e MIKROTIK_INVENTORY='<MIKROTIK_INVENTORY>' mikrotik-mcp uvx mcp-server-mikrotik
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mikrotik-mcp": {
      "command": "uvx",
      "args": [
        "mcp-server-mikrotik"
      ],
      "env": {
        "MIKROTIK_PASSWORD": "<MIKROTIK_PASSWORD>",
        "MIKROTIK_INVENTORY": "<MIKROTIK_INVENTORY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mikrotik-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "mcp-server-mikrotik"
      ],
      "env": {
        "MIKROTIK_PASSWORD": "<MIKROTIK_PASSWORD>",
        "MIKROTIK_INVENTORY": "<MIKROTIK_INVENTORY>"
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
    "mikrotik-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "mcp-server-mikrotik"
      ],
      "enabled": true,
      "environment": {
        "MIKROTIK_PASSWORD": "<MIKROTIK_PASSWORD>",
        "MIKROTIK_INVENTORY": "<MIKROTIK_INVENTORY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mikrotik-mcp": {
      "command": "uvx",
      "args": [
        "mcp-server-mikrotik"
      ],
      "env": {
        "MIKROTIK_PASSWORD": "<MIKROTIK_PASSWORD>",
        "MIKROTIK_INVENTORY": "<MIKROTIK_INVENTORY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mikrotik-mcp": {
      "command": "uvx",
      "args": [
        "mcp-server-mikrotik"
      ],
      "env": {
        "MIKROTIK_PASSWORD": "<MIKROTIK_PASSWORD>",
        "MIKROTIK_INVENTORY": "<MIKROTIK_INVENTORY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mikrotik-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "mcp-server-mikrotik"
      ],
      "env": {
        "MIKROTIK_PASSWORD": "<MIKROTIK_PASSWORD>",
        "MIKROTIK_INVENTORY": "<MIKROTIK_INVENTORY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mikrotik-mcp:
    type: stdio
    cmd: uvx
    args: ["mcp-server-mikrotik"]
    envs:
      MIKROTIK_PASSWORD: "<MIKROTIK_PASSWORD>"
      MIKROTIK_INVENTORY: "<MIKROTIK_INVENTORY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mikrotik-mcp": {
      "command": "uvx",
      "args": [
        "mcp-server-mikrotik"
      ],
      "env": {
        "MIKROTIK_PASSWORD": "<MIKROTIK_PASSWORD>",
        "MIKROTIK_INVENTORY": "<MIKROTIK_INVENTORY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mikrotik-mcp": {
      "command": "uvx",
      "args": [
        "mcp-server-mikrotik"
      ],
      "env": {
        "MIKROTIK_PASSWORD": "<MIKROTIK_PASSWORD>",
        "MIKROTIK_INVENTORY": "<MIKROTIK_INVENTORY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mikrotik-mcp.cordis.yml  →  dsh web --patch ./mikrotik-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-mikrotik-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mikrotik-mcp
        transport: stdio
        command: uvx
        args: ["mcp-server-mikrotik"]
        env: {"MIKROTIK_PASSWORD":"<MIKROTIK_PASSWORD>","MIKROTIK_INVENTORY":"<MIKROTIK_INVENTORY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mindwtr-mcp-server"></a>

### Mindwtr task automation

[Mindwtr](https://github.com/dongdongbh/Mindwtr/tree/main/apps/mcp-server) — `Servidor MCP` · Licença: AGPL-3.0 · Funciona com: Todos os clientes

Automação de tarefas e projetos para dados locais e auto-hospedados do Mindwtr Cloud, somente leitura por padrão.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mindwtr -- npx -y mindwtr-mcp
```

**Codex CLI**

```bash
codex mcp add mindwtr -- npx -y mindwtr-mcp
```

**Gemini CLI**

```bash
gemini mcp add mindwtr npx -y mindwtr-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mindwtr": {
      "command": "npx",
      "args": [
        "-y",
        "mindwtr-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mindwtr": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "mindwtr-mcp"
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
    "mindwtr": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "mindwtr-mcp"
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
    "mindwtr": {
      "command": "npx",
      "args": [
        "-y",
        "mindwtr-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mindwtr": {
      "command": "npx",
      "args": [
        "-y",
        "mindwtr-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mindwtr": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mindwtr-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mindwtr:
    type: stdio
    cmd: npx
    args: ["-y","mindwtr-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mindwtr": {
      "command": "npx",
      "args": [
        "-y",
        "mindwtr-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mindwtr": {
      "command": "npx",
      "args": [
        "-y",
        "mindwtr-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mindwtr.cordis.yml  →  dsh web --patch ./mindwtr.cordis.yml`

```yaml
- insert:
    - id: mcp-mindwtr
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mindwtr
        transport: stdio
        command: npx
        args: ["-y","mindwtr-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="mondaycom-mcp"></a>

### monday.com boards and items

[mondaycom/mcp](https://github.com/mondaycom/mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial de integração com o monday.com; exige token de Authorization.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http monday-com https://mcp.monday.com/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — Arquivo: `~/.codex/config.toml`

```toml
[mcp_servers.monday_com]
url = "https://mcp.monday.com/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http monday-com https://mcp.monday.com/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "monday-com": {
      "url": "https://mcp.monday.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "monday-com": {
      "type": "http",
      "url": "https://mcp.monday.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
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
    "monday-com": {
      "type": "remote",
      "url": "https://mcp.monday.com/mcp",
      "enabled": true,
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "monday-com": {
      "type": "streamableHttp",
      "url": "https://mcp.monday.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "monday-com": {
      "serverUrl": "https://mcp.monday.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "monday-com": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.monday.com/mcp",
        "--header",
        "Authorization:Bearer <API_TOKEN>"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  monday-com:
    type: streamable_http
    uri: https://mcp.monday.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "monday-com": {
      "type": "streamable-http",
      "url": "https://mcp.monday.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "monday-com": {
      "type": "streamable-http",
      "url": "https://mcp.monday.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `monday-com.cordis.yml  →  dsh web --patch ./monday-com.cordis.yml`

```yaml
- insert:
    - id: mcp-monday-com
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: monday-com
        transport: streamable-http
        url: https://mcp.monday.com/mcp
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="notfair-plugin-mcp"></a>

### OAuth for many marketing platforms

[NotFair](https://github.com/nowork-studio/notfair-plugin) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor OAuth para Google, Meta, X, LinkedIn, Reddit, TikTok, Google Search Console, GA4, WordPress e GoHighLevel.

**Alternativas:**

- [NotFair-MetaAds](https://github.com/nowork-studio/toprank) — Servidor dedicado ao Meta Ads (Facebook e Instagram) para analisar performance, gerenciar orçamentos e pausar campanhas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http notfair https://notfair.co/api/mcp/notfair
```

**Codex CLI**

```bash
codex mcp add notfair --url https://notfair.co/api/mcp/notfair
```

**Gemini CLI**

```bash
gemini mcp add --transport http notfair https://notfair.co/api/mcp/notfair
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "notfair": {
      "url": "https://notfair.co/api/mcp/notfair"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "notfair": {
      "type": "http",
      "url": "https://notfair.co/api/mcp/notfair"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "notfair": {
      "type": "remote",
      "url": "https://notfair.co/api/mcp/notfair",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "notfair": {
      "type": "streamableHttp",
      "url": "https://notfair.co/api/mcp/notfair"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "notfair": {
      "serverUrl": "https://notfair.co/api/mcp/notfair"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "notfair": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://notfair.co/api/mcp/notfair"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  notfair:
    type: streamable_http
    uri: https://notfair.co/api/mcp/notfair
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "notfair": {
      "type": "streamable-http",
      "url": "https://notfair.co/api/mcp/notfair"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "notfair": {
      "type": "streamable-http",
      "url": "https://notfair.co/api/mcp/notfair"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `notfair.cordis.yml  →  dsh web --patch ./notfair.cordis.yml`

```yaml
- insert:
    - id: mcp-notfair
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: notfair
        transport: streamable-http
        url: https://notfair.co/api/mcp/notfair
```

</details>

<a id="mcp-odoo"></a>

### Odoo ERP access

[erpipe-org/mcp-odoo](https://github.com/erpipe-org/mcp-odoo) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor para o Odoo com escritas controladas e suporte multi-instância; exige URL, banco e credenciais do Odoo.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-odoo --env ODOO_URL='<ODOO_URL>' --env ODOO_DB='<ODOO_DB>' --env ODOO_USERNAME='<ODOO_USERNAME>' --env ODOO_PASSWORD='<ODOO_PASSWORD>' -- uvx odoo-mcp
```

**Codex CLI**

```bash
codex mcp add mcp-odoo --env ODOO_URL='<ODOO_URL>' --env ODOO_DB='<ODOO_DB>' --env ODOO_USERNAME='<ODOO_USERNAME>' --env ODOO_PASSWORD='<ODOO_PASSWORD>' -- uvx odoo-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e ODOO_URL='<ODOO_URL>' -e ODOO_DB='<ODOO_DB>' -e ODOO_USERNAME='<ODOO_USERNAME>' -e ODOO_PASSWORD='<ODOO_PASSWORD>' mcp-odoo uvx odoo-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-odoo": {
      "command": "uvx",
      "args": [
        "odoo-mcp"
      ],
      "env": {
        "ODOO_URL": "<ODOO_URL>",
        "ODOO_DB": "<ODOO_DB>",
        "ODOO_USERNAME": "<ODOO_USERNAME>",
        "ODOO_PASSWORD": "<ODOO_PASSWORD>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-odoo": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "odoo-mcp"
      ],
      "env": {
        "ODOO_URL": "<ODOO_URL>",
        "ODOO_DB": "<ODOO_DB>",
        "ODOO_USERNAME": "<ODOO_USERNAME>",
        "ODOO_PASSWORD": "<ODOO_PASSWORD>"
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
    "mcp-odoo": {
      "type": "local",
      "command": [
        "uvx",
        "odoo-mcp"
      ],
      "enabled": true,
      "environment": {
        "ODOO_URL": "<ODOO_URL>",
        "ODOO_DB": "<ODOO_DB>",
        "ODOO_USERNAME": "<ODOO_USERNAME>",
        "ODOO_PASSWORD": "<ODOO_PASSWORD>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-odoo": {
      "command": "uvx",
      "args": [
        "odoo-mcp"
      ],
      "env": {
        "ODOO_URL": "<ODOO_URL>",
        "ODOO_DB": "<ODOO_DB>",
        "ODOO_USERNAME": "<ODOO_USERNAME>",
        "ODOO_PASSWORD": "<ODOO_PASSWORD>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-odoo": {
      "command": "uvx",
      "args": [
        "odoo-mcp"
      ],
      "env": {
        "ODOO_URL": "<ODOO_URL>",
        "ODOO_DB": "<ODOO_DB>",
        "ODOO_USERNAME": "<ODOO_USERNAME>",
        "ODOO_PASSWORD": "<ODOO_PASSWORD>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-odoo": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "odoo-mcp"
      ],
      "env": {
        "ODOO_URL": "<ODOO_URL>",
        "ODOO_DB": "<ODOO_DB>",
        "ODOO_USERNAME": "<ODOO_USERNAME>",
        "ODOO_PASSWORD": "<ODOO_PASSWORD>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-odoo:
    type: stdio
    cmd: uvx
    args: ["odoo-mcp"]
    envs:
      ODOO_URL: "<ODOO_URL>"
      ODOO_DB: "<ODOO_DB>"
      ODOO_USERNAME: "<ODOO_USERNAME>"
      ODOO_PASSWORD: "<ODOO_PASSWORD>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-odoo": {
      "command": "uvx",
      "args": [
        "odoo-mcp"
      ],
      "env": {
        "ODOO_URL": "<ODOO_URL>",
        "ODOO_DB": "<ODOO_DB>",
        "ODOO_USERNAME": "<ODOO_USERNAME>",
        "ODOO_PASSWORD": "<ODOO_PASSWORD>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-odoo": {
      "command": "uvx",
      "args": [
        "odoo-mcp"
      ],
      "env": {
        "ODOO_URL": "<ODOO_URL>",
        "ODOO_DB": "<ODOO_DB>",
        "ODOO_USERNAME": "<ODOO_USERNAME>",
        "ODOO_PASSWORD": "<ODOO_PASSWORD>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-odoo.cordis.yml  →  dsh web --patch ./mcp-odoo.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-odoo
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-odoo
        transport: stdio
        command: uvx
        args: ["odoo-mcp"]
        env: {"ODOO_URL":"<ODOO_URL>","ODOO_DB":"<ODOO_DB>","ODOO_USERNAME":"<ODOO_USERNAME>","ODOO_PASSWORD":"<ODOO_PASSWORD>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-server"></a>

### Phone numbers for verification

[sv-number/mcp-server](https://github.com/sv-number/mcp-server) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Compra um número de telefone privado para um agente e devolve o código de verificação por SMS; exige SVN_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-server --env SVN_API_KEY='<SVN_API_KEY>' -- npx -y sv-number-mcp
```

**Codex CLI**

```bash
codex mcp add mcp-server --env SVN_API_KEY='<SVN_API_KEY>' -- npx -y sv-number-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e SVN_API_KEY='<SVN_API_KEY>' mcp-server npx -y sv-number-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "sv-number-mcp"
      ],
      "env": {
        "SVN_API_KEY": "<SVN_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "sv-number-mcp"
      ],
      "env": {
        "SVN_API_KEY": "<SVN_API_KEY>"
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
    "mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "sv-number-mcp"
      ],
      "enabled": true,
      "environment": {
        "SVN_API_KEY": "<SVN_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "sv-number-mcp"
      ],
      "env": {
        "SVN_API_KEY": "<SVN_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "sv-number-mcp"
      ],
      "env": {
        "SVN_API_KEY": "<SVN_API_KEY>"
      }
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
        "sv-number-mcp"
      ],
      "env": {
        "SVN_API_KEY": "<SVN_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","sv-number-mcp"]
    envs:
      SVN_API_KEY: "<SVN_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "sv-number-mcp"
      ],
      "env": {
        "SVN_API_KEY": "<SVN_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "sv-number-mcp"
      ],
      "env": {
        "SVN_API_KEY": "<SVN_API_KEY>"
      }
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
        transport: stdio
        command: npx
        args: ["-y","sv-number-mcp"]
        env: {"SVN_API_KEY":"<SVN_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="posthog-mcp"></a>

### PostHog product analytics

[PostHog MCP Server](https://github.com/PostHog/posthog/tree/main/services/mcp) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Servidor oficial do PostHog para analytics de produto, feature flags e experimentos; exige token de Authorization.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://mcp.posthog.com/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — Arquivo: `~/.codex/config.toml`

```toml
[mcp_servers.mcp]
url = "https://mcp.posthog.com/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://mcp.posthog.com/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://mcp.posthog.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "http",
      "url": "https://mcp.posthog.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
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
    "mcp": {
      "type": "remote",
      "url": "https://mcp.posthog.com/mcp",
      "enabled": true,
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamableHttp",
      "url": "https://mcp.posthog.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://mcp.posthog.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
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
        "mcp-remote",
        "https://mcp.posthog.com/mcp",
        "--header",
        "Authorization:Bearer <API_TOKEN>"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: streamable_http
    uri: https://mcp.posthog.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.posthog.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.posthog.com/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
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
        transport: streamable-http
        url: https://mcp.posthog.com/mcp
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="powerbi-modeling-mcp"></a>

### Power BI semantic modeling

[Power BI Modeling MCP Server](https://github.com/microsoft/powerbi-modeling-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial que traz recursos de modelagem semântica do Power BI para agentes de IA.

**Alternativas:**

- [SemanticOps MCP (for Power BI)](https://github.com/maxanatsko/mcp-engine-public) — Servidor não oficial para Power BI que também roda em macOS.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio powerbi-modeling-mcp -- npx -y @microsoft/powerbi-modeling-mcp
```

**Codex CLI**

```bash
codex mcp add powerbi-modeling-mcp -- npx -y @microsoft/powerbi-modeling-mcp
```

**Gemini CLI**

```bash
gemini mcp add powerbi-modeling-mcp npx -y @microsoft/powerbi-modeling-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "powerbi-modeling-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@microsoft/powerbi-modeling-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "powerbi-modeling-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@microsoft/powerbi-modeling-mcp"
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
    "powerbi-modeling-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@microsoft/powerbi-modeling-mcp"
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
    "powerbi-modeling-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@microsoft/powerbi-modeling-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "powerbi-modeling-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@microsoft/powerbi-modeling-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "powerbi-modeling-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@microsoft/powerbi-modeling-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  powerbi-modeling-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@microsoft/powerbi-modeling-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "powerbi-modeling-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@microsoft/powerbi-modeling-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "powerbi-modeling-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@microsoft/powerbi-modeling-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `powerbi-modeling-mcp.cordis.yml  →  dsh web --patch ./powerbi-modeling-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-powerbi-modeling-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: powerbi-modeling-mcp
        transport: stdio
        command: npx
        args: ["-y","@microsoft/powerbi-modeling-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="atomic-mail-agentic-mcp"></a>

### Programmable inbox for agents

[Atomic Mail](https://github.com/Atomic-Mail/atomic-mail-agentic) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Caixa de e-mail programável para agentes de IA via JMAP com autenticação por prova de trabalho; exige ATOMIC_MAIL_API_KEY.

**Alternativas:**

- [agenticmail/agenticmail/tree/main/packages/mcp](https://github.com/agenticmail/agenticmail/tree/main/packages/mcp) — E-mail e SMS reais para agentes, incluindo o recebimento de códigos de verificação; exige AGENTICMAIL_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp --env ATOMIC_MAIL_API_KEY='<ATOMIC_MAIL_API_KEY>' -- npx -y @atomicmail/mcp-modelcontextprotocol
```

**Codex CLI**

```bash
codex mcp add mcp --env ATOMIC_MAIL_API_KEY='<ATOMIC_MAIL_API_KEY>' -- npx -y @atomicmail/mcp-modelcontextprotocol
```

**Gemini CLI**

```bash
gemini mcp add -e ATOMIC_MAIL_API_KEY='<ATOMIC_MAIL_API_KEY>' mcp npx -y @atomicmail/mcp-modelcontextprotocol
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@atomicmail/mcp-modelcontextprotocol"
      ],
      "env": {
        "ATOMIC_MAIL_API_KEY": "<ATOMIC_MAIL_API_KEY>"
      }
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
        "@atomicmail/mcp-modelcontextprotocol"
      ],
      "env": {
        "ATOMIC_MAIL_API_KEY": "<ATOMIC_MAIL_API_KEY>"
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
    "mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@atomicmail/mcp-modelcontextprotocol"
      ],
      "enabled": true,
      "environment": {
        "ATOMIC_MAIL_API_KEY": "<ATOMIC_MAIL_API_KEY>"
      }
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
        "@atomicmail/mcp-modelcontextprotocol"
      ],
      "env": {
        "ATOMIC_MAIL_API_KEY": "<ATOMIC_MAIL_API_KEY>"
      }
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
        "@atomicmail/mcp-modelcontextprotocol"
      ],
      "env": {
        "ATOMIC_MAIL_API_KEY": "<ATOMIC_MAIL_API_KEY>"
      }
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
        "@atomicmail/mcp-modelcontextprotocol"
      ],
      "env": {
        "ATOMIC_MAIL_API_KEY": "<ATOMIC_MAIL_API_KEY>"
      }
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
    args: ["-y","@atomicmail/mcp-modelcontextprotocol"]
    envs:
      ATOMIC_MAIL_API_KEY: "<ATOMIC_MAIL_API_KEY>"
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
        "@atomicmail/mcp-modelcontextprotocol"
      ],
      "env": {
        "ATOMIC_MAIL_API_KEY": "<ATOMIC_MAIL_API_KEY>"
      }
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
        "@atomicmail/mcp-modelcontextprotocol"
      ],
      "env": {
        "ATOMIC_MAIL_API_KEY": "<ATOMIC_MAIL_API_KEY>"
      }
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
        args: ["-y","@atomicmail/mcp-modelcontextprotocol"]
        env: {"ATOMIC_MAIL_API_KEY":"<ATOMIC_MAIL_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="apple-health-mcp"></a>

### Query Apple Health exports

[Apple Health](https://github.com/neiltron/apple-health-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Consulta e analisa exportações CSV do Apple Health usando DuckDB; exige HEALTH_DATA_DIR.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio apple-health-mcp --env HEALTH_DATA_DIR='<HEALTH_DATA_DIR>' -- npx -y @neiltron/apple-health-mcp
```

**Codex CLI**

```bash
codex mcp add apple-health-mcp --env HEALTH_DATA_DIR='<HEALTH_DATA_DIR>' -- npx -y @neiltron/apple-health-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e HEALTH_DATA_DIR='<HEALTH_DATA_DIR>' apple-health-mcp npx -y @neiltron/apple-health-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "apple-health-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@neiltron/apple-health-mcp"
      ],
      "env": {
        "HEALTH_DATA_DIR": "<HEALTH_DATA_DIR>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "apple-health-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@neiltron/apple-health-mcp"
      ],
      "env": {
        "HEALTH_DATA_DIR": "<HEALTH_DATA_DIR>"
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
    "apple-health-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@neiltron/apple-health-mcp"
      ],
      "enabled": true,
      "environment": {
        "HEALTH_DATA_DIR": "<HEALTH_DATA_DIR>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "apple-health-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@neiltron/apple-health-mcp"
      ],
      "env": {
        "HEALTH_DATA_DIR": "<HEALTH_DATA_DIR>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "apple-health-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@neiltron/apple-health-mcp"
      ],
      "env": {
        "HEALTH_DATA_DIR": "<HEALTH_DATA_DIR>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "apple-health-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@neiltron/apple-health-mcp"
      ],
      "env": {
        "HEALTH_DATA_DIR": "<HEALTH_DATA_DIR>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  apple-health-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@neiltron/apple-health-mcp"]
    envs:
      HEALTH_DATA_DIR: "<HEALTH_DATA_DIR>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "apple-health-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@neiltron/apple-health-mcp"
      ],
      "env": {
        "HEALTH_DATA_DIR": "<HEALTH_DATA_DIR>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "apple-health-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@neiltron/apple-health-mcp"
      ],
      "env": {
        "HEALTH_DATA_DIR": "<HEALTH_DATA_DIR>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `apple-health-mcp.cordis.yml  →  dsh web --patch ./apple-health-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-apple-health-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: apple-health-mcp
        transport: stdio
        command: npx
        args: ["-y","@neiltron/apple-health-mcp"]
        env: {"HEALTH_DATA_DIR":"<HEALTH_DATA_DIR>"}
        cwd: !!js process.cwd()
```

</details>

<a id="remarkable-mcp"></a>

### reMarkable document management

[reMarkable MCP Server](https://github.com/SamMorrowDrums/remarkable-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Lê, renderiza, busca e gerencia documentos do tablet reMarkable; exige REMARKABLE_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio remarkable --env REMARKABLE_TOKEN='<REMARKABLE_TOKEN>' -- uvx remarkable-mcp
```

**Codex CLI**

```bash
codex mcp add remarkable --env REMARKABLE_TOKEN='<REMARKABLE_TOKEN>' -- uvx remarkable-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e REMARKABLE_TOKEN='<REMARKABLE_TOKEN>' remarkable uvx remarkable-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "remarkable": {
      "command": "uvx",
      "args": [
        "remarkable-mcp"
      ],
      "env": {
        "REMARKABLE_TOKEN": "<REMARKABLE_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "remarkable": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "remarkable-mcp"
      ],
      "env": {
        "REMARKABLE_TOKEN": "<REMARKABLE_TOKEN>"
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
    "remarkable": {
      "type": "local",
      "command": [
        "uvx",
        "remarkable-mcp"
      ],
      "enabled": true,
      "environment": {
        "REMARKABLE_TOKEN": "<REMARKABLE_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "remarkable": {
      "command": "uvx",
      "args": [
        "remarkable-mcp"
      ],
      "env": {
        "REMARKABLE_TOKEN": "<REMARKABLE_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "remarkable": {
      "command": "uvx",
      "args": [
        "remarkable-mcp"
      ],
      "env": {
        "REMARKABLE_TOKEN": "<REMARKABLE_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "remarkable": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "remarkable-mcp"
      ],
      "env": {
        "REMARKABLE_TOKEN": "<REMARKABLE_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  remarkable:
    type: stdio
    cmd: uvx
    args: ["remarkable-mcp"]
    envs:
      REMARKABLE_TOKEN: "<REMARKABLE_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "remarkable": {
      "command": "uvx",
      "args": [
        "remarkable-mcp"
      ],
      "env": {
        "REMARKABLE_TOKEN": "<REMARKABLE_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "remarkable": {
      "command": "uvx",
      "args": [
        "remarkable-mcp"
      ],
      "env": {
        "REMARKABLE_TOKEN": "<REMARKABLE_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `remarkable.cordis.yml  →  dsh web --patch ./remarkable.cordis.yml`

```yaml
- insert:
    - id: mcp-remarkable
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: remarkable
        transport: stdio
        command: uvx
        args: ["remarkable-mcp"]
        env: {"REMARKABLE_TOKEN":"<REMARKABLE_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="edgartools-mcp"></a>

### SEC EDGAR filings toolkit

[EdgarTools](https://github.com/dgunning/edgartools) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Kit open-source para o SEC EDGAR, com 11 ferramentas e 7 prompts cobrindo todos os tipos de filing; não exige chave de API.

**Alternativas:**

- [stefanoamorelli/sec-edgar-mcp](https://github.com/stefanoamorelli/sec-edgar-mcp) — Acessa filings públicos dos EUA via a API do SEC EDGAR; exige um cabeçalho SEC_EDGAR_USER_AGENT.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio edgartools --env EDGAR_IDENTITY='<EDGAR_IDENTITY>' -- uvx edgartools
```

**Codex CLI**

```bash
codex mcp add edgartools --env EDGAR_IDENTITY='<EDGAR_IDENTITY>' -- uvx edgartools
```

**Gemini CLI**

```bash
gemini mcp add -e EDGAR_IDENTITY='<EDGAR_IDENTITY>' edgartools uvx edgartools
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "edgartools": {
      "command": "uvx",
      "args": [
        "edgartools"
      ],
      "env": {
        "EDGAR_IDENTITY": "<EDGAR_IDENTITY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "edgartools": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "edgartools"
      ],
      "env": {
        "EDGAR_IDENTITY": "<EDGAR_IDENTITY>"
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
    "edgartools": {
      "type": "local",
      "command": [
        "uvx",
        "edgartools"
      ],
      "enabled": true,
      "environment": {
        "EDGAR_IDENTITY": "<EDGAR_IDENTITY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "edgartools": {
      "command": "uvx",
      "args": [
        "edgartools"
      ],
      "env": {
        "EDGAR_IDENTITY": "<EDGAR_IDENTITY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "edgartools": {
      "command": "uvx",
      "args": [
        "edgartools"
      ],
      "env": {
        "EDGAR_IDENTITY": "<EDGAR_IDENTITY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "edgartools": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "edgartools"
      ],
      "env": {
        "EDGAR_IDENTITY": "<EDGAR_IDENTITY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  edgartools:
    type: stdio
    cmd: uvx
    args: ["edgartools"]
    envs:
      EDGAR_IDENTITY: "<EDGAR_IDENTITY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "edgartools": {
      "command": "uvx",
      "args": [
        "edgartools"
      ],
      "env": {
        "EDGAR_IDENTITY": "<EDGAR_IDENTITY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "edgartools": {
      "command": "uvx",
      "args": [
        "edgartools"
      ],
      "env": {
        "EDGAR_IDENTITY": "<EDGAR_IDENTITY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `edgartools.cordis.yml  →  dsh web --patch ./edgartools.cordis.yml`

```yaml
- insert:
    - id: mcp-edgartools
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: edgartools
        transport: stdio
        command: uvx
        args: ["edgartools"]
        env: {"EDGAR_IDENTITY":"<EDGAR_IDENTITY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-arr"></a>

### Self-hosted media suite control

[aplaceforallmystuff/mcp-arr](https://github.com/aplaceforallmystuff/mcp-arr) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor para o conjunto *arr de mídia: Sonarr, Radarr, Lidarr, Readarr e Prowlarr.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-arr --env SONARR_API_KEY='<SONARR_API_KEY>' --env RADARR_API_KEY='<RADARR_API_KEY>' --env LIDARR_API_KEY='<LIDARR_API_KEY>' --env READARR_API_KEY='<READARR_API_KEY>' --env PROWLARR_API_KEY='<PROWLARR_API_KEY>' -- npx -y mcp-arr-server
```

**Codex CLI**

```bash
codex mcp add mcp-arr --env SONARR_API_KEY='<SONARR_API_KEY>' --env RADARR_API_KEY='<RADARR_API_KEY>' --env LIDARR_API_KEY='<LIDARR_API_KEY>' --env READARR_API_KEY='<READARR_API_KEY>' --env PROWLARR_API_KEY='<PROWLARR_API_KEY>' -- npx -y mcp-arr-server
```

**Gemini CLI**

```bash
gemini mcp add -e SONARR_API_KEY='<SONARR_API_KEY>' -e RADARR_API_KEY='<RADARR_API_KEY>' -e LIDARR_API_KEY='<LIDARR_API_KEY>' -e READARR_API_KEY='<READARR_API_KEY>' -e PROWLARR_API_KEY='<PROWLARR_API_KEY>' mcp-arr npx -y mcp-arr-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-arr": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-arr-server"
      ],
      "env": {
        "SONARR_API_KEY": "<SONARR_API_KEY>",
        "RADARR_API_KEY": "<RADARR_API_KEY>",
        "LIDARR_API_KEY": "<LIDARR_API_KEY>",
        "READARR_API_KEY": "<READARR_API_KEY>",
        "PROWLARR_API_KEY": "<PROWLARR_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-arr": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "mcp-arr-server"
      ],
      "env": {
        "SONARR_API_KEY": "<SONARR_API_KEY>",
        "RADARR_API_KEY": "<RADARR_API_KEY>",
        "LIDARR_API_KEY": "<LIDARR_API_KEY>",
        "READARR_API_KEY": "<READARR_API_KEY>",
        "PROWLARR_API_KEY": "<PROWLARR_API_KEY>"
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
    "mcp-arr": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "mcp-arr-server"
      ],
      "enabled": true,
      "environment": {
        "SONARR_API_KEY": "<SONARR_API_KEY>",
        "RADARR_API_KEY": "<RADARR_API_KEY>",
        "LIDARR_API_KEY": "<LIDARR_API_KEY>",
        "READARR_API_KEY": "<READARR_API_KEY>",
        "PROWLARR_API_KEY": "<PROWLARR_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-arr": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-arr-server"
      ],
      "env": {
        "SONARR_API_KEY": "<SONARR_API_KEY>",
        "RADARR_API_KEY": "<RADARR_API_KEY>",
        "LIDARR_API_KEY": "<LIDARR_API_KEY>",
        "READARR_API_KEY": "<READARR_API_KEY>",
        "PROWLARR_API_KEY": "<PROWLARR_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-arr": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-arr-server"
      ],
      "env": {
        "SONARR_API_KEY": "<SONARR_API_KEY>",
        "RADARR_API_KEY": "<RADARR_API_KEY>",
        "LIDARR_API_KEY": "<LIDARR_API_KEY>",
        "READARR_API_KEY": "<READARR_API_KEY>",
        "PROWLARR_API_KEY": "<PROWLARR_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-arr": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-arr-server"
      ],
      "env": {
        "SONARR_API_KEY": "<SONARR_API_KEY>",
        "RADARR_API_KEY": "<RADARR_API_KEY>",
        "LIDARR_API_KEY": "<LIDARR_API_KEY>",
        "READARR_API_KEY": "<READARR_API_KEY>",
        "PROWLARR_API_KEY": "<PROWLARR_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-arr:
    type: stdio
    cmd: npx
    args: ["-y","mcp-arr-server"]
    envs:
      SONARR_API_KEY: "<SONARR_API_KEY>"
      RADARR_API_KEY: "<RADARR_API_KEY>"
      LIDARR_API_KEY: "<LIDARR_API_KEY>"
      READARR_API_KEY: "<READARR_API_KEY>"
      PROWLARR_API_KEY: "<PROWLARR_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-arr": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-arr-server"
      ],
      "env": {
        "SONARR_API_KEY": "<SONARR_API_KEY>",
        "RADARR_API_KEY": "<RADARR_API_KEY>",
        "LIDARR_API_KEY": "<LIDARR_API_KEY>",
        "READARR_API_KEY": "<READARR_API_KEY>",
        "PROWLARR_API_KEY": "<PROWLARR_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-arr": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-arr-server"
      ],
      "env": {
        "SONARR_API_KEY": "<SONARR_API_KEY>",
        "RADARR_API_KEY": "<RADARR_API_KEY>",
        "LIDARR_API_KEY": "<LIDARR_API_KEY>",
        "READARR_API_KEY": "<READARR_API_KEY>",
        "PROWLARR_API_KEY": "<PROWLARR_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-arr.cordis.yml  →  dsh web --patch ./mcp-arr.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-arr
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-arr
        transport: stdio
        command: npx
        args: ["-y","mcp-arr-server"]
        env: {"SONARR_API_KEY":"<SONARR_API_KEY>","RADARR_API_KEY":"<RADARR_API_KEY>","LIDARR_API_KEY":"<LIDARR_API_KEY>","READARR_API_KEY":"<READARR_API_KEY>","PROWLARR_API_KEY":"<PROWLARR_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="servicenow-mcp"></a>

### ServiceNow platform access

[ServiceNow MCP Server (NowAIKit)](https://github.com/aartiq/servicenow-mcp) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Mais de 450 ferramentas para o ServiceNow, somente leitura por padrão.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio nowaikit -- npx -y nowaikit
```

**Codex CLI**

```bash
codex mcp add nowaikit -- npx -y nowaikit
```

**Gemini CLI**

```bash
gemini mcp add nowaikit npx -y nowaikit
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "nowaikit": {
      "command": "npx",
      "args": [
        "-y",
        "nowaikit"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "nowaikit": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "nowaikit"
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
    "nowaikit": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "nowaikit"
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
    "nowaikit": {
      "command": "npx",
      "args": [
        "-y",
        "nowaikit"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "nowaikit": {
      "command": "npx",
      "args": [
        "-y",
        "nowaikit"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "nowaikit": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "nowaikit"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  nowaikit:
    type: stdio
    cmd: npx
    args: ["-y","nowaikit"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "nowaikit": {
      "command": "npx",
      "args": [
        "-y",
        "nowaikit"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "nowaikit": {
      "command": "npx",
      "args": [
        "-y",
        "nowaikit"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `nowaikit.cordis.yml  →  dsh web --patch ./nowaikit.cordis.yml`

```yaml
- insert:
    - id: mcp-nowaikit
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: nowaikit
        transport: stdio
        command: npx
        args: ["-y","nowaikit"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="strava-mcp"></a>

### Strava activity access

[r-huijts/strava-mcp](https://github.com/r-huijts/strava-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Acessa a API do Strava para atividades e estatísticas; exige credenciais de cliente do Strava.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio strava-mcp --env STRAVA_CLIENT_ID='<STRAVA_CLIENT_ID>' --env STRAVA_CLIENT_SECRET='<STRAVA_CLIENT_SECRET>' --env STRAVA_ACCESS_TOKEN='<STRAVA_ACCESS_TOKEN>' -- npx -y strava-mcp-server
```

**Codex CLI**

```bash
codex mcp add strava-mcp --env STRAVA_CLIENT_ID='<STRAVA_CLIENT_ID>' --env STRAVA_CLIENT_SECRET='<STRAVA_CLIENT_SECRET>' --env STRAVA_ACCESS_TOKEN='<STRAVA_ACCESS_TOKEN>' -- npx -y strava-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e STRAVA_CLIENT_ID='<STRAVA_CLIENT_ID>' -e STRAVA_CLIENT_SECRET='<STRAVA_CLIENT_SECRET>' -e STRAVA_ACCESS_TOKEN='<STRAVA_ACCESS_TOKEN>' strava-mcp npx -y strava-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "strava-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "strava-mcp-server"
      ],
      "env": {
        "STRAVA_CLIENT_ID": "<STRAVA_CLIENT_ID>",
        "STRAVA_CLIENT_SECRET": "<STRAVA_CLIENT_SECRET>",
        "STRAVA_ACCESS_TOKEN": "<STRAVA_ACCESS_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "strava-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "strava-mcp-server"
      ],
      "env": {
        "STRAVA_CLIENT_ID": "<STRAVA_CLIENT_ID>",
        "STRAVA_CLIENT_SECRET": "<STRAVA_CLIENT_SECRET>",
        "STRAVA_ACCESS_TOKEN": "<STRAVA_ACCESS_TOKEN>"
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
    "strava-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "strava-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "STRAVA_CLIENT_ID": "<STRAVA_CLIENT_ID>",
        "STRAVA_CLIENT_SECRET": "<STRAVA_CLIENT_SECRET>",
        "STRAVA_ACCESS_TOKEN": "<STRAVA_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "strava-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "strava-mcp-server"
      ],
      "env": {
        "STRAVA_CLIENT_ID": "<STRAVA_CLIENT_ID>",
        "STRAVA_CLIENT_SECRET": "<STRAVA_CLIENT_SECRET>",
        "STRAVA_ACCESS_TOKEN": "<STRAVA_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "strava-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "strava-mcp-server"
      ],
      "env": {
        "STRAVA_CLIENT_ID": "<STRAVA_CLIENT_ID>",
        "STRAVA_CLIENT_SECRET": "<STRAVA_CLIENT_SECRET>",
        "STRAVA_ACCESS_TOKEN": "<STRAVA_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "strava-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "strava-mcp-server"
      ],
      "env": {
        "STRAVA_CLIENT_ID": "<STRAVA_CLIENT_ID>",
        "STRAVA_CLIENT_SECRET": "<STRAVA_CLIENT_SECRET>",
        "STRAVA_ACCESS_TOKEN": "<STRAVA_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  strava-mcp:
    type: stdio
    cmd: npx
    args: ["-y","strava-mcp-server"]
    envs:
      STRAVA_CLIENT_ID: "<STRAVA_CLIENT_ID>"
      STRAVA_CLIENT_SECRET: "<STRAVA_CLIENT_SECRET>"
      STRAVA_ACCESS_TOKEN: "<STRAVA_ACCESS_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "strava-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "strava-mcp-server"
      ],
      "env": {
        "STRAVA_CLIENT_ID": "<STRAVA_CLIENT_ID>",
        "STRAVA_CLIENT_SECRET": "<STRAVA_CLIENT_SECRET>",
        "STRAVA_ACCESS_TOKEN": "<STRAVA_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "strava-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "strava-mcp-server"
      ],
      "env": {
        "STRAVA_CLIENT_ID": "<STRAVA_CLIENT_ID>",
        "STRAVA_CLIENT_SECRET": "<STRAVA_CLIENT_SECRET>",
        "STRAVA_ACCESS_TOKEN": "<STRAVA_ACCESS_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `strava-mcp.cordis.yml  →  dsh web --patch ./strava-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-strava-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: strava-mcp
        transport: stdio
        command: npx
        args: ["-y","strava-mcp-server"]
        env: {"STRAVA_CLIENT_ID":"<STRAVA_CLIENT_ID>","STRAVA_CLIENT_SECRET":"<STRAVA_CLIENT_SECRET>","STRAVA_ACCESS_TOKEN":"<STRAVA_ACCESS_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="agent-toolkit-mcp"></a>

### Stripe payments for agents

[stripe/agent-toolkit](https://github.com/stripe/agent-toolkit) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial da Stripe com ferramentas para clientes, produtos, pagamentos e mais.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://mcp.stripe.com
```

**Codex CLI**

```bash
codex mcp add mcp --url https://mcp.stripe.com
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://mcp.stripe.com
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://mcp.stripe.com"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "http",
      "url": "https://mcp.stripe.com"
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
      "type": "remote",
      "url": "https://mcp.stripe.com",
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
      "type": "streamableHttp",
      "url": "https://mcp.stripe.com"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://mcp.stripe.com"
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
        "mcp-remote",
        "https://mcp.stripe.com"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: streamable_http
    uri: https://mcp.stripe.com
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.stripe.com"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.stripe.com"
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
        transport: streamable-http
        url: https://mcp.stripe.com
```

</details>

<a id="tolgee-platform-mcp"></a>

### Tolgee translation management

[Tolgee](https://github.com/tolgee/tolgee-platform) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Busca chaves, cria traduções e aciona tradução automática em um projeto Tolgee de um app; exige X-API-Key.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http tolgee https://app.tolgee.io/mcp/developer --header 'X-API-Key: <X_API_KEY>'
```

**Codex CLI**

```bash
codex mcp add tolgee --url https://app.tolgee.io/mcp/developer
```

**Gemini CLI**

```bash
gemini mcp add --transport http tolgee https://app.tolgee.io/mcp/developer --header 'X-API-Key: <X_API_KEY>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "tolgee": {
      "url": "https://app.tolgee.io/mcp/developer",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "tolgee": {
      "type": "http",
      "url": "https://app.tolgee.io/mcp/developer",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
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
    "tolgee": {
      "type": "remote",
      "url": "https://app.tolgee.io/mcp/developer",
      "enabled": true,
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "tolgee": {
      "type": "streamableHttp",
      "url": "https://app.tolgee.io/mcp/developer",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "tolgee": {
      "serverUrl": "https://app.tolgee.io/mcp/developer",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "tolgee": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://app.tolgee.io/mcp/developer",
        "--header",
        "X-API-Key:<X_API_KEY>"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  tolgee:
    type: streamable_http
    uri: https://app.tolgee.io/mcp/developer
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "tolgee": {
      "type": "streamable-http",
      "url": "https://app.tolgee.io/mcp/developer",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "tolgee": {
      "type": "streamable-http",
      "url": "https://app.tolgee.io/mcp/developer",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `tolgee.cordis.yml  →  dsh web --patch ./tolgee.cordis.yml`

```yaml
- insert:
    - id: mcp-tolgee
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: tolgee
        transport: streamable-http
        url: https://app.tolgee.io/mcp/developer
        headers: {"X-API-Key":"<X_API_KEY>"}
```

</details>

<a id="mcp-server-trello"></a>

### Trello board management

[delorenj/mcp-server-trello](https://github.com/delorenj/mcp-server-trello) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor para o Trello, com limitação de taxa, tipagem segura e integração completa com a API; exige TRELLO_API_KEY e token.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-server-trello --env TRELLO_API_KEY='<TRELLO_API_KEY>' --env TRELLO_TOKEN='<TRELLO_TOKEN>' -- npx -y @delorenj/mcp-server-trello
```

**Codex CLI**

```bash
codex mcp add mcp-server-trello --env TRELLO_API_KEY='<TRELLO_API_KEY>' --env TRELLO_TOKEN='<TRELLO_TOKEN>' -- npx -y @delorenj/mcp-server-trello
```

**Gemini CLI**

```bash
gemini mcp add -e TRELLO_API_KEY='<TRELLO_API_KEY>' -e TRELLO_TOKEN='<TRELLO_TOKEN>' mcp-server-trello npx -y @delorenj/mcp-server-trello
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-trello": {
      "command": "npx",
      "args": [
        "-y",
        "@delorenj/mcp-server-trello"
      ],
      "env": {
        "TRELLO_API_KEY": "<TRELLO_API_KEY>",
        "TRELLO_TOKEN": "<TRELLO_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server-trello": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@delorenj/mcp-server-trello"
      ],
      "env": {
        "TRELLO_API_KEY": "<TRELLO_API_KEY>",
        "TRELLO_TOKEN": "<TRELLO_TOKEN>"
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
    "mcp-server-trello": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@delorenj/mcp-server-trello"
      ],
      "enabled": true,
      "environment": {
        "TRELLO_API_KEY": "<TRELLO_API_KEY>",
        "TRELLO_TOKEN": "<TRELLO_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-server-trello": {
      "command": "npx",
      "args": [
        "-y",
        "@delorenj/mcp-server-trello"
      ],
      "env": {
        "TRELLO_API_KEY": "<TRELLO_API_KEY>",
        "TRELLO_TOKEN": "<TRELLO_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server-trello": {
      "command": "npx",
      "args": [
        "-y",
        "@delorenj/mcp-server-trello"
      ],
      "env": {
        "TRELLO_API_KEY": "<TRELLO_API_KEY>",
        "TRELLO_TOKEN": "<TRELLO_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-server-trello": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@delorenj/mcp-server-trello"
      ],
      "env": {
        "TRELLO_API_KEY": "<TRELLO_API_KEY>",
        "TRELLO_TOKEN": "<TRELLO_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server-trello:
    type: stdio
    cmd: npx
    args: ["-y","@delorenj/mcp-server-trello"]
    envs:
      TRELLO_API_KEY: "<TRELLO_API_KEY>"
      TRELLO_TOKEN: "<TRELLO_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-trello": {
      "command": "npx",
      "args": [
        "-y",
        "@delorenj/mcp-server-trello"
      ],
      "env": {
        "TRELLO_API_KEY": "<TRELLO_API_KEY>",
        "TRELLO_TOKEN": "<TRELLO_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server-trello": {
      "command": "npx",
      "args": [
        "-y",
        "@delorenj/mcp-server-trello"
      ],
      "env": {
        "TRELLO_API_KEY": "<TRELLO_API_KEY>",
        "TRELLO_TOKEN": "<TRELLO_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-server-trello.cordis.yml  →  dsh web --patch ./mcp-server-trello.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-server-trello
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-server-trello
        transport: stdio
        command: npx
        args: ["-y","@delorenj/mcp-server-trello"]
        env: {"TRELLO_API_KEY":"<TRELLO_API_KEY>","TRELLO_TOKEN":"<TRELLO_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="unifi-mcp-access"></a>

### UniFi Access door control

[UniFi Access MCP](https://github.com/sirkirby/unifi-mcp/tree/main/apps/access) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Gerencia portas, credenciais, políticas, visitantes e eventos do UniFi Access; exige host e credenciais do UniFi.

**Alternativas:**

- [enuno/unifi-mcp-server](https://github.com/enuno/unifi-mcp-server) — Gestão geral da rede UniFi via a API oficial do UniFi.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio unifi-access-mcp --env UNIFI_HOST='<UNIFI_HOST>' --env UNIFI_USERNAME='<UNIFI_USERNAME>' --env UNIFI_PASSWORD='<UNIFI_PASSWORD>' --env UNIFI_API_KEY='<UNIFI_API_KEY>' -- uvx unifi-access-mcp
```

**Codex CLI**

```bash
codex mcp add unifi-access-mcp --env UNIFI_HOST='<UNIFI_HOST>' --env UNIFI_USERNAME='<UNIFI_USERNAME>' --env UNIFI_PASSWORD='<UNIFI_PASSWORD>' --env UNIFI_API_KEY='<UNIFI_API_KEY>' -- uvx unifi-access-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e UNIFI_HOST='<UNIFI_HOST>' -e UNIFI_USERNAME='<UNIFI_USERNAME>' -e UNIFI_PASSWORD='<UNIFI_PASSWORD>' -e UNIFI_API_KEY='<UNIFI_API_KEY>' unifi-access-mcp uvx unifi-access-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "unifi-access-mcp": {
      "command": "uvx",
      "args": [
        "unifi-access-mcp"
      ],
      "env": {
        "UNIFI_HOST": "<UNIFI_HOST>",
        "UNIFI_USERNAME": "<UNIFI_USERNAME>",
        "UNIFI_PASSWORD": "<UNIFI_PASSWORD>",
        "UNIFI_API_KEY": "<UNIFI_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "unifi-access-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "unifi-access-mcp"
      ],
      "env": {
        "UNIFI_HOST": "<UNIFI_HOST>",
        "UNIFI_USERNAME": "<UNIFI_USERNAME>",
        "UNIFI_PASSWORD": "<UNIFI_PASSWORD>",
        "UNIFI_API_KEY": "<UNIFI_API_KEY>"
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
    "unifi-access-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "unifi-access-mcp"
      ],
      "enabled": true,
      "environment": {
        "UNIFI_HOST": "<UNIFI_HOST>",
        "UNIFI_USERNAME": "<UNIFI_USERNAME>",
        "UNIFI_PASSWORD": "<UNIFI_PASSWORD>",
        "UNIFI_API_KEY": "<UNIFI_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "unifi-access-mcp": {
      "command": "uvx",
      "args": [
        "unifi-access-mcp"
      ],
      "env": {
        "UNIFI_HOST": "<UNIFI_HOST>",
        "UNIFI_USERNAME": "<UNIFI_USERNAME>",
        "UNIFI_PASSWORD": "<UNIFI_PASSWORD>",
        "UNIFI_API_KEY": "<UNIFI_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "unifi-access-mcp": {
      "command": "uvx",
      "args": [
        "unifi-access-mcp"
      ],
      "env": {
        "UNIFI_HOST": "<UNIFI_HOST>",
        "UNIFI_USERNAME": "<UNIFI_USERNAME>",
        "UNIFI_PASSWORD": "<UNIFI_PASSWORD>",
        "UNIFI_API_KEY": "<UNIFI_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "unifi-access-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "unifi-access-mcp"
      ],
      "env": {
        "UNIFI_HOST": "<UNIFI_HOST>",
        "UNIFI_USERNAME": "<UNIFI_USERNAME>",
        "UNIFI_PASSWORD": "<UNIFI_PASSWORD>",
        "UNIFI_API_KEY": "<UNIFI_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  unifi-access-mcp:
    type: stdio
    cmd: uvx
    args: ["unifi-access-mcp"]
    envs:
      UNIFI_HOST: "<UNIFI_HOST>"
      UNIFI_USERNAME: "<UNIFI_USERNAME>"
      UNIFI_PASSWORD: "<UNIFI_PASSWORD>"
      UNIFI_API_KEY: "<UNIFI_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "unifi-access-mcp": {
      "command": "uvx",
      "args": [
        "unifi-access-mcp"
      ],
      "env": {
        "UNIFI_HOST": "<UNIFI_HOST>",
        "UNIFI_USERNAME": "<UNIFI_USERNAME>",
        "UNIFI_PASSWORD": "<UNIFI_PASSWORD>",
        "UNIFI_API_KEY": "<UNIFI_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "unifi-access-mcp": {
      "command": "uvx",
      "args": [
        "unifi-access-mcp"
      ],
      "env": {
        "UNIFI_HOST": "<UNIFI_HOST>",
        "UNIFI_USERNAME": "<UNIFI_USERNAME>",
        "UNIFI_PASSWORD": "<UNIFI_PASSWORD>",
        "UNIFI_API_KEY": "<UNIFI_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `unifi-access-mcp.cordis.yml  →  dsh web --patch ./unifi-access-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-unifi-access-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: unifi-access-mcp
        transport: stdio
        command: uvx
        args: ["unifi-access-mcp"]
        env: {"UNIFI_HOST":"<UNIFI_HOST>","UNIFI_USERNAME":"<UNIFI_USERNAME>","UNIFI_PASSWORD":"<UNIFI_PASSWORD>","UNIFI_API_KEY":"<UNIFI_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="search-console-mcp"></a>

### Unified SEO intelligence

[Search Console MCP](https://github.com/saurabhsharma2u/search-console-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Google Search Console, Bing, GA4 e AdSense combinados em inteligência de SEO unificada; exige credenciais do Google e chaves opcionais de Bing/PageSpeed.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio search-console-mcp --env GOOGLE_APPLICATION_CREDENTIALS='<GOOGLE_APPLICATION_CREDENTIALS>' --env BING_API_KEY='<BING_API_KEY>' --env PAGESPEED_API_KEY='<PAGESPEED_API_KEY>' -- npx -y search-console-mcp
```

**Codex CLI**

```bash
codex mcp add search-console-mcp --env GOOGLE_APPLICATION_CREDENTIALS='<GOOGLE_APPLICATION_CREDENTIALS>' --env BING_API_KEY='<BING_API_KEY>' --env PAGESPEED_API_KEY='<PAGESPEED_API_KEY>' -- npx -y search-console-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e GOOGLE_APPLICATION_CREDENTIALS='<GOOGLE_APPLICATION_CREDENTIALS>' -e BING_API_KEY='<BING_API_KEY>' -e PAGESPEED_API_KEY='<PAGESPEED_API_KEY>' search-console-mcp npx -y search-console-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "search-console-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "search-console-mcp"
      ],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "<GOOGLE_APPLICATION_CREDENTIALS>",
        "BING_API_KEY": "<BING_API_KEY>",
        "PAGESPEED_API_KEY": "<PAGESPEED_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "search-console-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "search-console-mcp"
      ],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "<GOOGLE_APPLICATION_CREDENTIALS>",
        "BING_API_KEY": "<BING_API_KEY>",
        "PAGESPEED_API_KEY": "<PAGESPEED_API_KEY>"
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
    "search-console-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "search-console-mcp"
      ],
      "enabled": true,
      "environment": {
        "GOOGLE_APPLICATION_CREDENTIALS": "<GOOGLE_APPLICATION_CREDENTIALS>",
        "BING_API_KEY": "<BING_API_KEY>",
        "PAGESPEED_API_KEY": "<PAGESPEED_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "search-console-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "search-console-mcp"
      ],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "<GOOGLE_APPLICATION_CREDENTIALS>",
        "BING_API_KEY": "<BING_API_KEY>",
        "PAGESPEED_API_KEY": "<PAGESPEED_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "search-console-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "search-console-mcp"
      ],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "<GOOGLE_APPLICATION_CREDENTIALS>",
        "BING_API_KEY": "<BING_API_KEY>",
        "PAGESPEED_API_KEY": "<PAGESPEED_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "search-console-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "search-console-mcp"
      ],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "<GOOGLE_APPLICATION_CREDENTIALS>",
        "BING_API_KEY": "<BING_API_KEY>",
        "PAGESPEED_API_KEY": "<PAGESPEED_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  search-console-mcp:
    type: stdio
    cmd: npx
    args: ["-y","search-console-mcp"]
    envs:
      GOOGLE_APPLICATION_CREDENTIALS: "<GOOGLE_APPLICATION_CREDENTIALS>"
      BING_API_KEY: "<BING_API_KEY>"
      PAGESPEED_API_KEY: "<PAGESPEED_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "search-console-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "search-console-mcp"
      ],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "<GOOGLE_APPLICATION_CREDENTIALS>",
        "BING_API_KEY": "<BING_API_KEY>",
        "PAGESPEED_API_KEY": "<PAGESPEED_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "search-console-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "search-console-mcp"
      ],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "<GOOGLE_APPLICATION_CREDENTIALS>",
        "BING_API_KEY": "<BING_API_KEY>",
        "PAGESPEED_API_KEY": "<PAGESPEED_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `search-console-mcp.cordis.yml  →  dsh web --patch ./search-console-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-search-console-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: search-console-mcp
        transport: stdio
        command: npx
        args: ["-y","search-console-mcp"]
        env: {"GOOGLE_APPLICATION_CREDENTIALS":"<GOOGLE_APPLICATION_CREDENTIALS>","BING_API_KEY":"<BING_API_KEY>","PAGESPEED_API_KEY":"<PAGESPEED_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="usertour-mcp"></a>

### Usertour onboarding flows

[Usertour MCP Server](https://github.com/usertour/usertour/tree/main/apps/server/src/mcp) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Servidor oficial do Usertour para onboarding dentro do app: fluxos, checklists, pesquisas e analytics.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://mcp.usertour.io/mcp
```

**Codex CLI**

```bash
codex mcp add mcp --url https://mcp.usertour.io/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://mcp.usertour.io/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://mcp.usertour.io/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "http",
      "url": "https://mcp.usertour.io/mcp"
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
      "type": "remote",
      "url": "https://mcp.usertour.io/mcp",
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
      "type": "streamableHttp",
      "url": "https://mcp.usertour.io/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://mcp.usertour.io/mcp"
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
        "mcp-remote",
        "https://mcp.usertour.io/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: streamable_http
    uri: https://mcp.usertour.io/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.usertour.io/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.usertour.io/mcp"
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
        transport: streamable-http
        url: https://mcp.usertour.io/mcp
```

</details>

<a id="zapier-mcp"></a>

### Zapier apps and actions

[Zapier](https://github.com/zapier/zapier-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor hospedado que conecta assistentes de IA a mais de 9.000 apps e 40.000 ações via Zapier.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://mcp.zapier.com/api/v1/connect
```

**Codex CLI**

```bash
codex mcp add mcp --url https://mcp.zapier.com/api/v1/connect
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://mcp.zapier.com/api/v1/connect
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://mcp.zapier.com/api/v1/connect"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "http",
      "url": "https://mcp.zapier.com/api/v1/connect"
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
      "type": "remote",
      "url": "https://mcp.zapier.com/api/v1/connect",
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
      "type": "streamableHttp",
      "url": "https://mcp.zapier.com/api/v1/connect"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://mcp.zapier.com/api/v1/connect"
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
        "mcp-remote",
        "https://mcp.zapier.com/api/v1/connect"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: streamable_http
    uri: https://mcp.zapier.com/api/v1/connect
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.zapier.com/api/v1/connect"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.zapier.com/api/v1/connect"
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
        transport: streamable-http
        url: https://mcp.zapier.com/api/v1/connect
```

</details>
