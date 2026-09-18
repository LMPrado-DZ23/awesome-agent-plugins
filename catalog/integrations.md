# Integrations & Notifications

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Notion MCP](#notion-mcp) — Official Notion server: search, read, create and update pages and databases with an integration token.
- [Stripe MCP](#stripe-mcp) — Stripe API and knowledge-base access for agents: customers, payments, subscriptions and docs search.
- [Multi-channel IM bot bridge](#dsh-dsh-im) — Connects IM bots to the harness via QR codes or bot credentials, across nine channels: Feishu, WeChat, DingTal…
- [Remote phone access to Web UI](#dsh-dsh-pocket) — Remote phone access to the Web UI: scan a QR code for LAN or public (cloudflared tunnel) access, with real-tim…
- [Multi-channel notify API and phone control](#dsh-dsh-notifier) — One notify() API across 27 channels with event-driven pushes, phone approvals and questions, phone task takeov…
- [Feishu/Lark agent bridge](#dsh-dsh-lark-bot) — Feishu/Lark bridge with scan-to-connect agent binding, streaming cards, git-worktree project workspaces, paral…
- [ACP bridge for editor clients](#dsh-deepseek-harness-acp) — ACP profile plugin and standalone stdio server for using the full harness agent from Zed and other ACP clients…
- [Email inbox tools and alerts](#dsh-dsh-email) — IMAP/SMTP email tools to list, read, search, send, and reply with threading, date-range filters, multi-account…
- [Two-way iMessage channel](#dsh-dsh-imessage) — Two-way iMessage channel over Photon: sender allowlisting, session commands, in-chat approvals and questions, …
- [Desktop pet status bridge](#dsh-openpets-dsh) — Bridges harness lifecycle status, errors, and approval requests to a locally running OpenPets desktop companio…

<a id="notion-mcp"></a>

### Notion MCP

[Notion MCP](https://github.com/makenotion/notion-mcp-server) — `MCP server` · ★ 4.6k · License: MIT · Works with: All clients

Official Notion server: search, read, create and update pages and databases with an integration token.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

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

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `notion.cordis.yml  →  dsh web --patch ./notion.cordis.yml`

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

[Stripe MCP](https://github.com/stripe/ai) — `MCP server` · ★ 1.8k · License: MIT · Works with: All clients

Stripe API and knowledge-base access for agents: customers, payments, subscriptions and docs search.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "stripe": {
      "url": "https://mcp.stripe.com"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "stripe": {
      "serverUrl": "https://mcp.stripe.com"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  stripe:
    type: streamable_http
    uri: https://mcp.stripe.com
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `stripe.cordis.yml  →  dsh web --patch ./stripe.cordis.yml`

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

[xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) — `Native plugin` · ★ 1.4k · License: MIT · Works with: DeepSeek Harness only

Connects IM bots to the harness via QR codes or bot credentials, across nine channels: Feishu, WeChat, DingTalk, WeCom, QQ, Slack, Telegram, Discord, and WhatsApp.

**Alternatives:**

- [MichengAI/dsh-im-connect](https://github.com/MichengAI/dsh-im-connect) (★ 16) — Gives each IM chat its own workspace as a separate channel.
- [AbcdefgXW/dsh-msg-hub](https://github.com/AbcdefgXW/dsh-msg-hub) (★ 4) — Wakes the channel bot from scheduled tasks to proactively push AI replies to your phone.
- [ThreeBody6666/dsh-im-hub](https://github.com/ThreeBody6666/dsh-im-hub) (★ 3) — Uses WeCom AES-encrypted callbacks and Telegram long polling without needing a public URL.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xmanrui/dsh-im
```

</details>

<a id="dsh-dsh-pocket"></a>

### Remote phone access to Web UI

[shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) — `Native plugin` · ★ 1.2k · License: GPL-2.0 · Works with: DeepSeek Harness only

Remote phone access to the Web UI: scan a QR code for LAN or public (cloudflared tunnel) access, with real-time sync, a mobile-adaptive layout, and a settings tab.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:shaobeichen/dsh-pocket
```

</details>

<a id="dsh-dsh-notifier"></a>

### Multi-channel notify API and phone control

[THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) — `Native plugin` · ★ 50 · License: MIT · Works with: DeepSeek Harness only

One notify() API across 27 channels with event-driven pushes, phone approvals and questions, phone task takeover, images sent into the session, six inbound control channels, a loopback web console, and bilingual messages, with zero runtime dependencies.

**Alternatives:**

- [wingsky-1/dsh-plugin-hub#packages/dsh-notifier](https://github.com/wingsky-1/dsh-plugin-hub/tree/main/packages/dsh-notifier) — Adds quiet hours with urgent exceptions, approval-timeout re-reminders, and completion-storm aggregation.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:THEWOLFWALKER/dsh-notifier
```

</details>

<a id="dsh-dsh-lark-bot"></a>

### Feishu/Lark agent bridge

[PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) — `Native plugin` · ★ 39 · License: AGPL-3.0 · Works with: DeepSeek Harness only

Feishu/Lark bridge with scan-to-connect agent binding, streaming cards, git-worktree project workspaces, parallel per-scope tasks, multi-role agents, cross-session notify, in-chat model and key management, and a guardian that keeps answering in Feishu after a crash.

**Alternatives:**

- [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) (★ 54) — Runs several bots that keep separate sessions and can hand turns to each other within one group chat.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PlutoKeating/dsh-lark-bot
```

</details>

<a id="dsh-deepseek-harness-acp"></a>

### ACP bridge for editor clients

[openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) — `Native plugin` · ★ 32 · License: see repo · Works with: DeepSeek Harness only

ACP profile plugin and standalone stdio server for using the full harness agent from Zed and other ACP clients, sharing the harness's credentials and sessions.

**Alternatives:**

- [grunmin/dsh-acp-enhanced](https://github.com/grunmin/dsh-acp-enhanced) (★ 6) — Adds block-level reasoning streaming, usage telemetry, permission presets, session resume/archive, and Zed file/terminal forwarding.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:openma-ai/deepseek-harness-acp
```

</details>

<a id="dsh-dsh-email"></a>

### Email inbox tools and alerts

[STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) — `Native plugin` · ★ 14 · License: MIT · Works with: DeepSeek Harness only

IMAP/SMTP email tools to list, read, search, send, and reply with threading, date-range filters, multi-account and common provider presets, a send-approval gate, a settings page, and a popup on new mail.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:STARDUSTLC666/dsh-email
```

</details>

<a id="dsh-dsh-imessage"></a>

### Two-way iMessage channel

[photon-hq/dsh-imessage](https://github.com/photon-hq/dsh-imessage) — `Native plugin` · ★ 11 · License: MIT · Works with: DeepSeek Harness only

Two-way iMessage channel over Photon: sender allowlisting, session commands, in-chat approvals and questions, and a settings page for device authorization and hosted-line setup.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:photon-hq/dsh-imessage
```

</details>

<a id="dsh-openpets-dsh"></a>

### Desktop pet status bridge

[alvinunreal/openpets#dsh](https://github.com/alvinunreal/openpets/tree/main/packages/dsh) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Bridges harness lifecycle status, errors, and approval requests to a locally running OpenPets desktop companion.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:alvinunreal/openpets#path:/packages/dsh
```

</details>
