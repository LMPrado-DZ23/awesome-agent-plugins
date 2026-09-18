# Remote & Mobile

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Control real Android and iOS devices](#mobilerun-mcp) — Controls real Android and iOS devices with LLM agents: tap, swipe, type, and automate flows; needs an Authoriz…
- [Computer-use automation for Windows](#windows-mcp) — A server for computer-use style automation on Windows OS.
- [Policy-gated SSH access](#ssh-mcp) — Policy-gated, audited SSH for Linux and Windows hosts, with roles, approvals, and an audit log; needs SSH pass…
- [Live iOS device control](#dsh-dsh-ios) — Puts a live iOS Simulator or USB-connected iPhone inside the conversation, with 22 agent tools to boot, build,…
- [Remote/mobile access to DSH](#dsh-dsh-mobile) — Access and control a DeepSeek Harness session from an Android app or mobile browser, over LAN or a secure remo…
- [Drive DSH from chat apps](#dsh-dsh-bridge) — Adds remote and mobile access via LAN QR codes and Cloudflare or custom tunnels, plus bot integrations for WeC…
- [Live Android device control](#dsh-dsh-android) — Puts a live Android emulator or USB phone inside the conversation, driven via adb, with 20 agent tools for str…
- [Full remote server administration](#dsh-dsh-full-remote) — Gives full server-side API access (settings, credentials, host.listDirectory) through a token-gated reverse pr…
- [LAN access for the Web UI](#dsh-dsh-web-lan-access) — Injects a crypto.randomUUID polyfill so the DSH Web UI keeps working when opened over plain-HTTP LAN or Tailsc…
- [Session events as MCP progress](#dsh-dsh-streaming-mcp-bridge) — Streams live DeepSeek Harness session events out as MCP progress notifications, with an ACP adapter for bridgi…
- [SSH host management panel](#dsh-dsh-web-ui-packages-dsh-ssh) — Adds an SSH operations panel to DSH: a web terminal, SFTP file transfer with progress, local port forwarding, …

<a id="mobilerun-mcp"></a>

### Control real Android and iOS devices

[droidrun/mobilerun](https://github.com/droidrun/mobilerun) — `MCP server` · ★ 9.4k · License: MIT · Works with: All clients

Controls real Android and iOS devices with LLM agents: tap, swipe, type, and automate flows; needs an Authorization token.

**Alternatives:**

- [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp) (★ 6.8k) — Server for iOS and Android mobile development, automation, and testing.
- [agent-device](https://github.com/callstack/agent-device) (★ 4.7k) — Verifies, controls, and debugs real iOS, Android, TV, and desktop apps.
- [Argent](https://github.com/software-mansion/argent) (★ 2.8k) — Drives iOS simulators, Android emulators, TVs, and Electron/web apps from a coding agent.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http mobilerun https://api.mobilerun.ai/v1/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — File: `~/.codex/config.toml`

```toml
[mcp_servers.mobilerun]
url = "https://api.mobilerun.ai/v1/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http mobilerun https://api.mobilerun.ai/v1/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mobilerun": {
      "url": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "mobilerun": {
      "type": "http",
      "url": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
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
    "mobilerun": {
      "type": "remote",
      "url": "https://api.mobilerun.ai/v1/mcp",
      "enabled": true,
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mobilerun": {
      "type": "streamableHttp",
      "url": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mobilerun": {
      "serverUrl": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mobilerun": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.mobilerun.ai/v1/mcp",
        "--header",
        "Authorization:Bearer <API_TOKEN>"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  mobilerun:
    type: streamable_http
    uri: https://api.mobilerun.ai/v1/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mobilerun": {
      "type": "streamable-http",
      "url": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mobilerun": {
      "type": "streamable-http",
      "url": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `mobilerun.cordis.yml  →  dsh web --patch ./mobilerun.cordis.yml`

```yaml
- insert:
    - id: mcp-mobilerun
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mobilerun
        transport: streamable-http
        url: https://api.mobilerun.ai/v1/mcp
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="windows-mcp"></a>

### Computer-use automation for Windows

[CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) — `MCP server` · ★ 7.0k · License: MIT · Works with: All clients

A server for computer-use style automation on Windows OS.

**Alternatives:**

- [Ui.Vision MCP](https://github.com/A9T9/RPA/tree/main/mcp) — Browser and desktop RPA automation with OCR, image recognition, and real mouse and keyboard input.
- [Computer Use](https://github.com/domdomegg/computer-use-mcp) (★ 373) — Generic, cross-platform computer control via screenshots, mouse, and keyboard.
- [jfarcand/mirroir-mcp](https://github.com/jfarcand/mirroir-mcp) (★ 220) — Controls a real iPhone through macOS iPhone Mirroring: screenshot, tap, swipe, and type.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio windows-mcp -- uvx windows-mcp
```

**Codex CLI**

```bash
codex mcp add windows-mcp -- uvx windows-mcp
```

**Gemini CLI**

```bash
gemini mcp add windows-mcp uvx windows-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "windows-mcp": {
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "windows-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "windows-mcp"
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
    "windows-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "windows-mcp"
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
    "windows-mcp": {
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "windows-mcp": {
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "windows-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  windows-mcp:
    type: stdio
    cmd: uvx
    args: ["windows-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "windows-mcp": {
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "windows-mcp": {
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `windows-mcp.cordis.yml  →  dsh web --patch ./windows-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-windows-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: windows-mcp
        transport: stdio
        command: uvx
        args: ["windows-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="ssh-mcp"></a>

### Policy-gated SSH access

[SSH — policy-gated remote access](https://github.com/tufantunc/ssh-mcp) — `MCP server` · ★ 745 · License: MIT · Works with: All clients

Policy-gated, audited SSH for Linux and Windows hosts, with roles, approvals, and an audit log; needs SSH password or passphrase.

**Alternatives:**

- [bvisible/mcp-ssh-manager](https://github.com/bvisible/mcp-ssh-manager) (★ 483) — SSH server management for agents, with per-server read-only and allowlist security modes.
- [emisar](https://github.com/andrewdryga/emisar) (★ 334) — Lets AI operate servers without SSH, choosing and approving risky changes with a full audit trail.
- [rhel-lightspeed/linux-mcp-server](https://github.com/rhel-lightspeed/linux-mcp-server) (★ 299) — Read-only Linux system administration and diagnostics.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio ssh-mcp --env SSH_MCP_PASSWORD='<SSH_MCP_PASSWORD>' --env SSH_MCP_PASSPHRASE='<SSH_MCP_PASSPHRASE>' --env SSH_MCP_SUDO_PASSWORD='<SSH_MCP_SUDO_PASSWORD>' -- npx -y ssh-mcp
```

**Codex CLI**

```bash
codex mcp add ssh-mcp --env SSH_MCP_PASSWORD='<SSH_MCP_PASSWORD>' --env SSH_MCP_PASSPHRASE='<SSH_MCP_PASSPHRASE>' --env SSH_MCP_SUDO_PASSWORD='<SSH_MCP_SUDO_PASSWORD>' -- npx -y ssh-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e SSH_MCP_PASSWORD='<SSH_MCP_PASSWORD>' -e SSH_MCP_PASSPHRASE='<SSH_MCP_PASSPHRASE>' -e SSH_MCP_SUDO_PASSWORD='<SSH_MCP_SUDO_PASSWORD>' ssh-mcp npx -y ssh-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "ssh-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
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
    "ssh-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "ssh-mcp"
      ],
      "enabled": true,
      "environment": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "ssh-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  ssh-mcp:
    type: stdio
    cmd: npx
    args: ["-y","ssh-mcp"]
    envs:
      SSH_MCP_PASSWORD: "<SSH_MCP_PASSWORD>"
      SSH_MCP_PASSPHRASE: "<SSH_MCP_PASSPHRASE>"
      SSH_MCP_SUDO_PASSWORD: "<SSH_MCP_SUDO_PASSWORD>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `ssh-mcp.cordis.yml  →  dsh web --patch ./ssh-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-ssh-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: ssh-mcp
        transport: stdio
        command: npx
        args: ["-y","ssh-mcp"]
        env: {"SSH_MCP_PASSWORD":"<SSH_MCP_PASSWORD>","SSH_MCP_PASSPHRASE":"<SSH_MCP_PASSPHRASE>","SSH_MCP_SUDO_PASSWORD":"<SSH_MCP_SUDO_PASSWORD>"}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-ios"></a>

### Live iOS device control

[ZSeven-W/dsh-ios](https://github.com/ZSeven-W/dsh-ios) — `Native plugin` · ★ 295 · License: MIT · Works with: DeepSeek Harness only

Puts a live iOS Simulator or USB-connected iPhone inside the conversation, with 22 agent tools to boot, build, drive the UI by accessibility identity or OCR text, and hot-reload SwiftUI previews.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ZSeven-W/dsh-ios
```

</details>

<a id="dsh-dsh-mobile"></a>

### Remote/mobile access to DSH

[saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) — `Native plugin` · ★ 273 · License: Apache-2.0 · Works with: DeepSeek Harness only

Access and control a DeepSeek Harness session from an Android app or mobile browser, over LAN or a secure remote connection, with persistent device pairing and a customizable mobile interface.

**Alternatives:**

- [Blank-not-black/dsh-Remote#plugin](https://github.com/Blank-not-black/dsh-Remote/tree/main/packages/plugin) — Adds a native sidebar/admin drawer, a self-healing token gateway, resumable /fs transfer up to 2GB, and latency-based server auto-switching.
- [Z-6354/dsh-mobile-hanui](https://github.com/Z-6354/dsh-mobile-hanui) (★ 16) — Adds an installable PWA with offline support, push notifications, and touch gestures like pull-to-refresh and edge-swipe back.
- [zhu1090093659/dsh-web#packages/dsh-remote-web-ui](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-remote-web-ui) — Adds QR-code pairing over a token-gated channel with SSE real-time sync between separate mobile and desktop GUI modes.
- [zexadev/dsh-tether](https://github.com/zexadev/dsh-tether) (★ 45) — Adds pure peer-to-peer connection via iroh with no server to set up, falling back to a relay that only carries ciphertext.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:saya-ch/dsh-mobile
```

</details>

<a id="dsh-dsh-bridge"></a>

### Drive DSH from chat apps

[wenbin-wb/dsh-bridge](https://github.com/wenbin-wb/dsh-bridge) — `Native plugin` · ★ 166 · License: MIT · Works with: DeepSeek Harness only

Adds remote and mobile access via LAN QR codes and Cloudflare or custom tunnels, plus bot integrations for WeChat, QQ, Feishu, and Telegram, with built-in authentication.

**Alternatives:**

- [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) (★ 47) — Aggregates 20+ chat platforms, including Discord and WhatsApp, into unified sessions with remote approvals and an allowedUserIds list.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wenbin-wb/dsh-bridge
```

</details>

<a id="dsh-dsh-android"></a>

### Live Android device control

[ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) — `Native plugin` · ★ 148 · License: MIT · Works with: DeepSeek Harness only

Puts a live Android emulator or USB phone inside the conversation, driven via adb, with 20 agent tools for streaming, Gradle build/run, UI-tree or OCR interaction, logcat, and process/memory inspection.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ZSeven-W/dsh-android
```

</details>

<a id="dsh-dsh-full-remote"></a>

### Full remote server administration

[JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) — `Native plugin` · ★ 42 · License: MIT · Works with: DeepSeek Harness only

Gives full server-side API access (settings, credentials, host.listDirectory) through a token-gated reverse proxy, with per-device sessions, QR phone invites, and optional approval, CIDR limits, idle timeout, and local TLS.

**Alternatives:**

- [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) (★ 204) — Uses end-to-end encryption (Noise IK plus WebRTC/relay) and limits clients to read-only file preview, no shell or remote-desktop access.
- [Buzzso/dsh-sev](https://github.com/Buzzso/dsh-sev) (★ 137) — Manages your own remote DSH host from the local GUI via auto-healing SSH tunnels and a combined local/remote session list.
- [Linjiangxian0203/dsh-remote-tunnel](https://github.com/Linjiangxian0203/dsh-remote-tunnel) (★ 5) — Runs dsh web on a remote Linux server via systemd (no root) behind an auto-reconnecting SSH tunnel, with port allocation and an audit view.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:JUANWANG-BUAA/dsh-full-remote
```

</details>

<a id="dsh-dsh-web-lan-access"></a>

### LAN access for the Web UI

[AcidGr/dsh-web-lan-access](https://github.com/AcidGr/dsh-web-lan-access) — `Native plugin` · ★ 31 · License: MIT · Works with: DeepSeek Harness only

Injects a crypto.randomUUID polyfill so the DSH Web UI keeps working when opened over plain-HTTP LAN or Tailscale IP addresses, which browsers otherwise treat as insecure origins.

**Alternatives:**

- [wingsky-1/dsh-plugin-hub#packages/dsh-lan-proxy](https://github.com/wingsky-1/dsh-plugin-hub/tree/main/packages/dsh-lan-proxy) — Adds full HTTP/HTTPS/WS forwarding with TLS, adaptive compression, DNS-rebinding protection, and auto launch-token injection for LAN.
- [Leon0555/dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) (★ 14) — Adds a 0.0.0.0 bind option alongside the same randomUUID polyfill.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:AcidGr/dsh-web-lan-access
```

</details>

<a id="dsh-dsh-streaming-mcp-bridge"></a>

### Session events as MCP progress

[yabolee-kkk/dsh-streaming-mcp-bridge](https://github.com/yabolee-kkk/dsh-streaming-mcp-bridge) — `Native plugin` · ★ 0 · License: MIT · Works with: DeepSeek Harness only

Streams live DeepSeek Harness session events out as MCP progress notifications, with an ACP adapter for bridging into cc-connect and Feishu.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:yabolee-kkk/dsh-streaming-mcp-bridge
```

</details>

<a id="dsh-dsh-web-ui-packages-dsh-ssh"></a>

### SSH host management panel

[zhu1090093659/dsh-web-ui#packages/dsh-ssh](https://github.com/zhu1090093659/dsh-web-ui/tree/main/packages/dsh-ssh) — `Native plugin` · License: Apache-2.0 · Works with: DeepSeek Harness only

Adds an SSH operations panel to DSH: a web terminal, SFTP file transfer with progress, local port forwarding, and one-command execution across a cluster of hosts sharing the same config.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:zhu1090093659/dsh-web-ui#path:/packages/dsh-ssh
```

</details>
