# Remote & Mobile

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Live iOS device control](#dsh-dsh-ios) — Puts a live iOS Simulator or USB-connected iPhone inside the conversation, with 22 agent tools to boot, build,…
- [Remote/mobile access to DSH](#dsh-dsh-mobile) — Access and control a DeepSeek Harness session from an Android app or mobile browser, over LAN or a secure remo…
- [Drive DSH from chat apps](#dsh-dsh-bridge) — Adds remote and mobile access via LAN QR codes and Cloudflare or custom tunnels, plus bot integrations for WeC…
- [Live Android device control](#dsh-dsh-android) — Puts a live Android emulator or USB phone inside the conversation, driven via adb, with 20 agent tools for str…
- [Full remote server administration](#dsh-dsh-full-remote) — Gives full server-side API access (settings, credentials, host.listDirectory) through a token-gated reverse pr…
- [LAN access for the Web UI](#dsh-dsh-web-lan-access) — Injects a crypto.randomUUID polyfill so the DSH Web UI keeps working when opened over plain-HTTP LAN or Tailsc…
- [Session events as MCP progress](#dsh-dsh-streaming-mcp-bridge) — Streams live DeepSeek Harness session events out as MCP progress notifications, with an ACP adapter for bridgi…
- [SSH host management panel](#dsh-dsh-web-ui-packages-dsh-ssh) — Adds an SSH operations panel to DSH: a web terminal, SFTP file transfer with progress, local port forwarding, …

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
