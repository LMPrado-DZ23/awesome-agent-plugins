# Models & Providers

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [DeepSeek chat and completion](#deepseek-mcp-server) — Official DeepSeek server for chat, completion, model listing, and balance endpoints; needs a DEEPSEEK_API_KEY.
- [WorkBuddy model bridge](#dsh-dsh-workbuddy-connect) — Brings models from the locally signed-in WorkBuddy desktop app into the harness with zero extra configuration.
- [ChatGPT/Codex OAuth model bridge](#dsh-dsh-codex-connect) — Connects a ChatGPT account and OpenAI Codex models to the harness via OAuth, with opt-in search and image tool…
- [DeepSeek web session models](#dsh-dsh-deepseek-web-login) — Adds a provider that uses chat.deepseek.com web models directly, with browser login capture, proof-of-work req…
- [Google Antigravity model provider](#dsh-dsh-agy-link) — Connects Google Antigravity (agy CLI) models with streaming chat for Gemini, Claude, and GPT-OSS subscriptions…
- [Multi-provider coding subscriptions](#dsh-dsh-coding-subscription-oauth) — Signs in locally to SuperGrok/Grok Build, ChatGPT Plus Codex, Kimi Code, and Claude Code subscriptions without…
- [Per-subagent model routing](#dsh-dsh-plugin-subagent-director) — Lets each subagent use its own LLM provider and model through configurable role templates.
- [GitHub Copilot model adapter](#dsh-dsh-llm-github-copilot) — Adds GitHub Copilot as a model provider: OAuth device-flow sign-in, live model discovery from the Copilot API,…
- [Live model catalog and plan usage](#dsh-dsh-model-sync) — Writes live provider model lists into settings and shows the 5h/7d plan window or metered balance for the curr…
- [Weak-network model retries](#dsh-dsh-plugin-weaknet-adaptor) — Keeps model calls alive over unreliable connections with long-backoff stream retries, a local response replay …
- [OpenAI-compatible gateway bridge](#dsh-dsh-sub2api) — Connects a sub2api gateway so OpenAI, Claude, Grok, and Gemini all route through one base URL, with per-key mo…
- [Free OpenCode model access](#dsh-opencode2dsh) — Exposes OpenCode Zen's free models to the harness with no API key required.
- [Volcengine Ark plan routes](#dsh-ark-cli-ark-plan-api) — Registers Volcengine Ark Agent Plan, Coding Plan, and postpaid model routes directly in the native model picke…

<a id="deepseek-mcp-server"></a>

### DeepSeek chat and completion

[DeepSeek MCP Server](https://github.com/DMontgomery40/deepseek-mcp-server) — `MCP server` · ★ 352 · License: MIT · Works with: All clients

Official DeepSeek server for chat, completion, model listing, and balance endpoints; needs a DEEPSEEK_API_KEY.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio deepseek --env DEEPSEEK_API_KEY='<DEEPSEEK_API_KEY>' -- npx -y deepseek-mcp-server
```

**Codex CLI**

```bash
codex mcp add deepseek --env DEEPSEEK_API_KEY='<DEEPSEEK_API_KEY>' -- npx -y deepseek-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e DEEPSEEK_API_KEY='<DEEPSEEK_API_KEY>' deepseek npx -y deepseek-mcp-server
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "deepseek": {
      "command": "npx",
      "args": [
        "-y",
        "deepseek-mcp-server"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "<DEEPSEEK_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "deepseek": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "deepseek-mcp-server"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "<DEEPSEEK_API_KEY>"
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
    "deepseek": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "deepseek-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "DEEPSEEK_API_KEY": "<DEEPSEEK_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "deepseek": {
      "command": "npx",
      "args": [
        "-y",
        "deepseek-mcp-server"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "<DEEPSEEK_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "deepseek": {
      "command": "npx",
      "args": [
        "-y",
        "deepseek-mcp-server"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "<DEEPSEEK_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "deepseek": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "deepseek-mcp-server"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "<DEEPSEEK_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  deepseek:
    type: stdio
    cmd: npx
    args: ["-y","deepseek-mcp-server"]
    envs:
      DEEPSEEK_API_KEY: "<DEEPSEEK_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "deepseek": {
      "command": "npx",
      "args": [
        "-y",
        "deepseek-mcp-server"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "<DEEPSEEK_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "deepseek": {
      "command": "npx",
      "args": [
        "-y",
        "deepseek-mcp-server"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "<DEEPSEEK_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `deepseek.cordis.yml  →  dsh web --patch ./deepseek.cordis.yml`

```yaml
- insert:
    - id: mcp-deepseek
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: deepseek
        transport: stdio
        command: npx
        args: ["-y","deepseek-mcp-server"]
        env: {"DEEPSEEK_API_KEY":"<DEEPSEEK_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-workbuddy-connect"></a>

### WorkBuddy model bridge

[corrinehu/dsh-workbuddy-connect](https://github.com/corrinehu/dsh-workbuddy-connect) — `Native plugin` · ★ 131 · License: MIT · Works with: DeepSeek Harness only

Brings models from the locally signed-in WorkBuddy desktop app into the harness with zero extra configuration.

**Alternatives:**

- [dingminhua/dsh-connect-workbuddy](https://github.com/dingminhua/dsh-connect-workbuddy) (★ 26) — Adds per-model image-input opt-in, account switching, and a read-only credits overview with daily check-in.
- [aosi526/dsh-workbuddy-xdpool](https://github.com/aosi526/dsh-workbuddy-xdpool) (★ 9) — Merges every signed-in WorkBuddy account into one auto-failover pool with per-model credit multipliers shown.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:corrinehu/dsh-workbuddy-connect
```

</details>

<a id="dsh-dsh-codex-connect"></a>

### ChatGPT/Codex OAuth model bridge

[franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) — `Native plugin` · ★ 113 · License: Apache-2.0 · Works with: DeepSeek Harness only

Connects a ChatGPT account and OpenAI Codex models to the harness via OAuth, with opt-in search and image tools.

**Alternatives:**

- [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) (★ 76) — Adds subscription web search, quota tracking with a safe reset, image tools, and a Fast mode, with no API key or Codex CLI needed.
- [WNJXYK/dsh-codex-oauth](https://github.com/WNJXYK/dsh-codex-oauth) (★ 13) — Adds image generation, subscription quota reporting, and both browser and device-code OAuth sign-in.
- [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) (★ 15) — Reuses an existing Codex CLI ChatGPT login instead of running a separate OAuth flow.
- [stoneface10/dsh-codex-connect-plus](https://github.com/stoneface10/dsh-codex-connect-plus) (★ 3) — Adds gpt-image-2 image generation and editing alongside Codex model access.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:franksong2702/dsh-codex-connect
```

</details>

<a id="dsh-dsh-deepseek-web-login"></a>

### DeepSeek web session models

[cv-superding/dsh-deepseek-web-login](https://github.com/cv-superding/dsh-deepseek-web-login) — `Native plugin` · ★ 84 · License: Apache-2.0 · Works with: DeepSeek Harness only

Adds a provider that uses chat.deepseek.com web models directly, with browser login capture, proof-of-work request signing, SSE streaming, and prompting-based tool calls.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:cv-superding/dsh-deepseek-web-login
```

</details>

<a id="dsh-dsh-agy-link"></a>

### Google Antigravity model provider

[amlyczz/dsh-agy-link](https://github.com/amlyczz/dsh-agy-link) — `Native plugin` · ★ 70 · License: MIT · Works with: DeepSeek Harness only

Connects Google Antigravity (agy CLI) models with streaming chat for Gemini, Claude, and GPT-OSS subscriptions, native tool cards, thinking turns, and in-GUI Google OAuth login.

**Alternatives:**

- [LiZhenNet/dsh-antigravity](https://github.com/LiZhenNet/dsh-antigravity) (★ 22) — Adds explicit quota management and a dedicated model-selector UI.
- [suntianc/dsh-antigravity-auth](https://github.com/suntianc/dsh-antigravity-auth) (★ 15) — Adds image generation/editing, video understanding, and web search to the Antigravity route.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:amlyczz/dsh-agy-link
```

</details>

<a id="dsh-dsh-coding-subscription-oauth"></a>

### Multi-provider coding subscriptions

[lninghaha/dsh-coding-subscription-oauth](https://github.com/lninghaha/dsh-coding-subscription-oauth) — `Native plugin` · ★ 23 · License: see repo · Works with: DeepSeek Harness only

Signs in locally to SuperGrok/Grok Build, ChatGPT Plus Codex, Kimi Code, and Claude Code subscriptions without pasting tokens, with an opt-in loopback OpenAI/Anthropic gateway.

**Alternatives:**

- [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) (★ 371) — Also exposes image_generate, video_generate, and x_search tools alongside the Claude, Codex, and Grok subscription routes.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:lninghaha/dsh-coding-subscription-oauth
```

</details>

<a id="dsh-dsh-plugin-subagent-director"></a>

### Per-subagent model routing

[SeverusZh/dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) — `Native plugin` · ★ 15 · License: MIT · Works with: DeepSeek Harness only

Lets each subagent use its own LLM provider and model through configurable role templates.

**Alternatives:**

- [SnowAmberX/dsh-role-router](https://github.com/SnowAmberX/dsh-role-router) (★ 4) — Automatically switches to a planner model in plan mode and exposes per-role reasoning effort in the Web UI.
- [hytime/dsh-thinking-effort](https://github.com/hytime/dsh-thinking-effort) (★ 32) — Sets reasoning-effort levels and sub-agent defaults specifically for custom or third-party models.
- [HaoyueQin/dsh-better-reasoning-effort](https://github.com/HaoyueQin/dsh-better-reasoning-effort) (★ 26) — Suggests reasoning-effort and input-modality settings per model, fused from a knowledge base with confidence labels.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:SeverusZh/dsh-plugin-subagent-director
```

</details>

<a id="dsh-dsh-llm-github-copilot"></a>

### GitHub Copilot model adapter

[lujianjun19/dsh-llm-github-copilot](https://github.com/lujianjun19/dsh-llm-github-copilot) — `Native plugin` · ★ 8 · License: MIT · Works with: DeepSeek Harness only

Adds GitHub Copilot as a model provider: OAuth device-flow sign-in, live model discovery from the Copilot API, vision support for image-capable models, and automatic routing between the Chat Completions and Responses API protocols.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:lujianjun19/dsh-llm-github-copilot
```

</details>

<a id="dsh-dsh-model-sync"></a>

### Live model catalog and plan usage

[jiay98528-dev/dsh-model-sync](https://github.com/jiay98528-dev/dsh-model-sync) — `Native plugin` · ★ 3 · License: MIT · Works with: DeepSeek Harness only

Writes live provider model lists into settings and shows the 5h/7d plan window or metered balance for the current session model.

**Alternatives:**

- [HOWILLMAKEIT/dsh-model-context-catalog](https://github.com/HOWILLMAKEIT/dsh-model-context-catalog) (★ 34) — Configures the context-window size for registered models so long sessions aren't misjudged as overflowing.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jiay98528-dev/dsh-model-sync
```

</details>

<a id="dsh-dsh-plugin-weaknet-adaptor"></a>

### Weak-network model retries

[jiay98528-dev/dsh-plugin-weaknet-adaptor](https://github.com/jiay98528-dev/dsh-plugin-weaknet-adaptor) — `Native plugin` · ★ 3 · License: MIT · Works with: DeepSeek Harness only

Keeps model calls alive over unreliable connections with long-backoff stream retries, a local response replay cache, heartbeat auto-reconnect, and a degraded-mode token economy.

**Alternatives:**

- [HB00/dsh-llm-failover](https://github.com/HB00/dsh-llm-failover) (★ 0) — Automatically switches providers on rate limits or quota exhaustion, with a cooldown and a permanent last-resort fallback.
- [btspoony/dsh-llm-fallbacks](https://github.com/btspoony/dsh-llm-fallbacks) (★ 20) — Applies separate retry and fallback strategies per agent role.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jiay98528-dev/dsh-plugin-weaknet-adaptor
```

</details>

<a id="dsh-dsh-sub2api"></a>

### OpenAI-compatible gateway bridge

[GodD6366/dsh-sub2api](https://github.com/GodD6366/dsh-sub2api) — `Native plugin` · ★ 1 · License: MIT · Works with: DeepSeek Harness only

Connects a sub2api gateway so OpenAI, Claude, Grok, and Gemini all route through one base URL, with per-key model discovery, usage lookup, and vision/image tools.

**Alternatives:**

- [cuboteam/dsh-plugin-dit](https://github.com/cuboteam/dsh-plugin-dit) (★ 1) — Installs 29 OpenAI Chat Completions and 10 Anthropic Messages models from a single DIT_API_KEY.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:GodD6366/dsh-sub2api
```

</details>

<a id="dsh-opencode2dsh"></a>

### Free OpenCode model access

[FishBottle7/opencode2dsh](https://github.com/FishBottle7/opencode2dsh/tree/master/packages/plugin) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Exposes OpenCode Zen's free models to the harness with no API key required.

**Alternatives:**

- [xiaozhe7772222/dsh-opencode-zen](https://github.com/xiaozhe7772222/dsh-opencode-zen) (★ 22) — Bundles 6 free models with multi-key rotation and automatic rate-limit backoff.
- [Duskriver/dsh-opencode-go](https://github.com/Duskriver/dsh-opencode-go) (★ 15) — Adds live gateway model discovery, online capability metadata, and session-aware routing for OpenCode Go.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:FishBottle7/opencode2dsh#path:/packages/plugin
```

</details>

<a id="dsh-ark-cli-ark-plan-api"></a>

### Volcengine Ark plan routes

[volcengine/ark-cli#ark-plan-api](https://github.com/volcengine/ark-cli/tree/main/dsh-plugins/ark-plan-api) — `Native plugin` · License: Apache-2.0 · Works with: DeepSeek Harness only

Registers Volcengine Ark Agent Plan, Coding Plan, and postpaid model routes directly in the native model picker.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add "https://github.com/volcengine/ark-cli/releases/download/dsh-plugins%2Fv0.1.0/ark-plan-api.tgz"
```

</details>
