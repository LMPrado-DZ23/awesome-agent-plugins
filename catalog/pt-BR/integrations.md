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
- [Desktop pet status bridge](#dsh-openpets-dsh) — Conecta o status do ciclo de vida do harness, erros e pedidos de aprovação a um companheiro de desktop OpenPet…

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
