# Security & Permissions

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Read-only relay and config security audit](#dsh-api-relay-audit) — Runs local security audits of AI API relays and LLM proxies, producing Markdown reports on prompt injection, m…
- [Authorized pentest and redteam toolkit](#dsh-dsh-redteam-model) — Authorized-security toolkit with nine work modes (redteam coordination, pentest, code audit, binary analysis, …
- [Second-model auto-approval review](#dsh-dsh-auto-review) — Adds a read-only reviewer subagent to the approval chain that returns structured allow/deny verdicts with reas…
- [Declarative permission rules engine](#dsh-dsh-permission-rules) — Declarative, ordered allow/deny/ask rules matching tool names, arguments, workspace paths, and agent identity …
- [Web UI login and auth gate](#dsh-dsh-remote) — Secures the harness Web UI behind a login gate: MFA/TOTP, signed session cookies, optional admin, user and gue…
- [Multi-tenant server security platform](#dsh-dsh-passwords) — Turns the harness into a server-grade multi-tenant platform: remote access with automatic HTTPS, per-subuser p…
- [Upstream compatibility monitoring](#dsh-upstream-radar) — Watches harness core and plugin releases, retests the exact published artifacts in disposable runners, publish…
- [Privacy-preserving audit receipts](#dsh-dsh-verification-receipt) — Writes local JSONL summaries of per-turn tool counts and coarse verification signals, without storing prompts,…
- [Third-party plugin vetting pipeline](#dsh-dsh-plugin-vet) — Trust pipeline for third-party plugins: a deterministic static scan with verdicts, an opt-in runtime guard wit…
- [Deterministic commit security review](#dsh-dsh-code-security) — Deterministic code security review with 40+ rules, secret entropy detection, staged-diff review, SARIF export,…
- [Runtime prompt-injection defense](#dsh-dsh-security-guard) — Static and runtime security guard: rule-based scans for malicious code, prompt injection, and token waste, run…
- [Passive risk-scored call blocking](#dsh-dsh-risk-guard) — Silently records every tool call with deterministic, cumulative risk scoring and retention-based cleanup, bloc…
- [CrowdStrike Falcon security analysis](#falcon-mcp) — Official CrowdStrike server connecting agents to Falcon for security analysis and automation; needs Falcon cli…
- [Dead code and secrets detection](#skylos-mcp) — Dead code, security, secrets detection, and code quality for Python, TypeScript, and Go; needs a SKYLOS_API_KE…
- [DMARC report parsing](#parse-dmarc-mcp) — Lightweight DMARC parser that auto-fetches email reports and visualizes compliance in one app.
- [EVM bytecode analysis](#evmole-mcp) — Local structured analysis of deployed EVM runtime bytecode.
- [Governance layer for agent actions](#bernstein-mcp) — Open-source governance layer for AI agents with byte-identical run receipts, 40+ adapters, and air-gap support…
- [Network analysis with tshark](#wireshark-mcp) — Professional network analysis with tshark for security audits, deep-dives, and threat detection.
- [OSINT recon agent](#openosint-mcp) — AI-powered OSINT agent with 16 tools: email, breach, IP, WHOIS, DNS, Shodan, and GitHub lookups; needs several…
- [Protect agents from malicious packages](#vet-mcp) — Protects AI agents and IDEs from malicious open-source packages.
- [Reverse engineer from the CLI](#rea-mcp) — Reverse engineers arbitrary targets from the terminal or an agent, via one CLI and server.
- [Reverse engineering and forensics](#reversecore-mcp) — Security-first server for reverse engineering, malware analysis, forensics, and static analysis (SAST).
- [SonarQube code quality scans](#sonarqube-mcp-server) — Official SonarSource server for analyzing code quality and security with SonarQube Server or Cloud; needs a SO…
- [Threat hunting on Elasticsearch](#crowdsentinels-ai-mcp) — AI threat hunting and incident response for Elasticsearch/OpenSearch with endpoint and network forensics; need…

<a id="dsh-api-relay-audit"></a>

### Read-only relay and config security audit

[toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) — `Native plugin` · ★ 839 · License: AGPL-3.0 · Works with: DeepSeek Harness only

Runs local security audits of AI API relays and LLM proxies, producing Markdown reports on prompt injection, model substitution signals, tool-call rewriting, error leakage, stream integrity, and Web3 risks.

**Alternatives:**

- [PensiveFei/dsh-secure-audit](https://github.com/PensiveFei/dsh-secure-audit) (★ 86) — Also audits the local configuration and redacts Chinese PII, producing reproducible reports without touching relay traffic.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:toby-bridges/api-relay-audit
```

</details>

<a id="dsh-dsh-redteam-model"></a>

### Authorized pentest and redteam toolkit

[SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model) — `Native plugin` · ★ 511 · License: MIT · Works with: DeepSeek Harness only

Authorized-security toolkit with nine work modes (redteam coordination, pentest, code audit, binary analysis, attack-defense, AV evasion, incident response, cloud security, CTF) and fifteen runtime plugins, managed from one settings page.

**Alternatives:**

- [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) (★ 504) — Adds an exploration chain that tracks assets and findings through a dedicated web view.
- [ADWMC/helm-d#helmd](https://github.com/ADWMC/helm-d/tree/main/packages/helmd) — Adds 33 reverse-engineering tools for APK, native binary, protocol and malware samples, plus an on-disk case workflow with evidence chains.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:SeaOf0/dsh-redteam-model
```

</details>

<a id="dsh-dsh-auto-review"></a>

### Second-model auto-approval review

[PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) — `Native plugin` · ★ 182 · License: Apache-2.0 · Works with: DeepSeek Harness only

Adds a read-only reviewer subagent to the approval chain that returns structured allow/deny verdicts with reasons, and fails closed by default when the review is inconclusive.

**Alternatives:**

- [moon09300731/dsh-approval-gate](https://github.com/moon09300731/dsh-approval-gate) (★ 73) — Pre-classifies whether an action is reversible, auto-approves safe ones, escalates dangerous ones, with one-click revert via snapshots.
- [PAKIKNOWLEDGE/dsh-auto-classifier](https://github.com/PAKIKNOWLEDGE/dsh-auto-classifier) (★ 1) — Adds an LLM semantic judge plus git checkpointing so unattended sessions can be rolled back.
- [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) (★ 161) — Denies critical paths outright and grants only one exact wider access per escalation request.
- [Alnita-M/dsh-Almost_Full_Access](https://github.com/Alnita-M/dsh-Almost_Full_Access) (★ 1) — Combines deterministic rule checks with a subagent review before granting near-full access.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-auto-review
```

</details>

<a id="dsh-dsh-permission-rules"></a>

### Declarative permission rules engine

[PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) — `Native plugin` · ★ 112 · License: Apache-2.0 · Works with: DeepSeek Harness only

Declarative, ordered allow/deny/ask rules matching tool names, arguments, workspace paths, and agent identity at the pre-execute stage, with full session-log audit, dry-run mode, and hot reload.

**Alternatives:**

- [sjh9714/dsh-movein-permissions](https://github.com/sjh9714/dsh-movein/tree/main/plugin) — Uses Claude Code rule syntax directly (e.g. Bash(rm -rf:*), Read(_secrets_)) and works standalone without migration.
- [jilian-dsh/dsh-rule-engine](https://github.com/jilian-dsh/dsh-rule-engine) (★ 3) — Parses rules from AGENTS.md and adds a /guard command, version-guard for tracked files, and free-zone exemptions.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-permission-rules
```

</details>

<a id="dsh-dsh-remote"></a>

### Web UI login and auth gate

[xgone/dsh-remote](https://github.com/xgone/dsh-remote) — `Native plugin` · ★ 65 · License: MIT · Works with: DeepSeek Harness only

Secures the harness Web UI behind a login gate: MFA/TOTP, signed session cookies, optional admin, user and guest roles, in-browser workspace selection, and allowlisted remote file previews.

**Alternatives:**

- [TecFancy/dsh-auth-gate](https://github.com/TecFancy/dsh-auth-gate) (★ 14) — Supports shared-token authentication, request rate limiting, and a CLI for user management.
- [hxy91819/dsh-auth](https://github.com/hxy91819/dsh-auth) (★ 6) — Uses Caddy forward_auth with Argon2id password hashing, revocable sessions, and a bilingual UI.
- [SummerSec/dsh-web-auth](https://github.com/SummerSec/dsh-web-auth) (★ 2) — Adds IP-based login throttling and an scrypt password-hashing CLI.
- [GDWhisper/dsh-web-startup-auth](https://github.com/GDWhisper/dsh-web-startup-auth) (★ 43) — Lets the Web UI bind to 0.0.0.0 safely and includes a CLI to rotate the signing key and invalidate all sessions.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xgone/dsh-remote
```

</details>

<a id="dsh-dsh-passwords"></a>

### Multi-tenant server security platform

[slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) — `Native plugin` · ★ 61 · License: GPL-3.0 · Works with: DeepSeek Harness only

Turns the harness into a server-grade multi-tenant platform: remote access with automatic HTTPS, per-subuser permissions with token and daily quotas, sandbox enforcement, encrypted authentication, and an audit log.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:slywalker2006/dsh-passwords
```

</details>

<a id="dsh-upstream-radar"></a>

### Upstream compatibility monitoring

[MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) — `Native plugin` · ★ 12 · License: Apache-2.0 · Works with: DeepSeek Harness only

Watches harness core and plugin releases, retests the exact published artifacts in disposable runners, publishes machine-readable compatibility evidence, and reconciles tracked issues once fixes land.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MicroMilo/upstream-radar
```

</details>

<a id="dsh-dsh-verification-receipt"></a>

### Privacy-preserving audit receipts

[030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) — `Native plugin` · ★ 4 · License: MIT · Works with: DeepSeek Harness only

Writes local JSONL summaries of per-turn tool counts and coarse verification signals, without storing prompts, tool arguments, or result text.

**Alternatives:**

- [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) (★ 3) — Hash-chains the JSONL receipts for tool results and session events for tamper-evident evidence.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:030611/dsh-verification-receipt
```

</details>

<a id="dsh-dsh-plugin-vet"></a>

### Third-party plugin vetting pipeline

[wulun811/dsh-plugin-vet](https://github.com/wulun811/dsh-plugin-vet) — `Native plugin` · ★ 3 · License: MIT · Works with: DeepSeek Harness only

Trust pipeline for third-party plugins: a deterministic static scan with verdicts, an opt-in runtime guard with honeypot lures, an agent audit-protocol skill, and a browser shield status light. Alarm-only, never an enforcer.

**Alternatives:**

- [truelove-dreamer/dsh-plugin-vetting](https://github.com/truelove-dreamer/dsh-plugin-vetting) (★ 4) — Adds transitive-dependency coverage and an official-package hash baseline to catch supply-chain tampering.
- [zoahdev/dsh-poison-guard](https://github.com/zoahdev/dsh-poison-guard) (★ 1) — Runs an AST and deobfuscation scan before install and exits non-zero on findings for CI gating.
- [Darren-Tang/dsh-provenance](https://github.com/Darren-Tang/dsh-provenance) (★ 1) — Verifies the plugin tarball matches the source you reviewed before any of its code runs.
- [pengxuding/dsh-plugin-judge](https://github.com/pengxuding/dsh-plugin-judge) (★ 0) — Combines a source scan with an LLM judge and reminds you to re-audit installed plugins after a model switch.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wulun811/dsh-plugin-vet
```

</details>

<a id="dsh-dsh-code-security"></a>

### Deterministic commit security review

[STARDUSTLC666/dsh-code-security](https://github.com/STARDUSTLC666/dsh-code-security) — `Native plugin` · ★ 1 · License: MIT · Works with: DeepSeek Harness only

Deterministic code security review with 40+ rules, secret entropy detection, staged-diff review, SARIF export, baseline acceptance, and a lightweight SBOM dependency inventory.

**Alternatives:**

- [KongFangXun/sofagent#cordis-plugin-sofagent-audit](https://github.com/KongFangXun/sofagent/tree/main/engine/dsh-plugins/cordis-plugin-sofagent-audit) — Adds an HMAC-signed audit trail, snapshot rollback, and an MCP server with 84 tools for commit-time review.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:STARDUSTLC666/dsh-code-security
```

</details>

<a id="dsh-dsh-security-guard"></a>

### Runtime prompt-injection defense

[bigclawd/dsh-security-guard](https://github.com/bigclawd/dsh-security-guard) — `Native plugin` · ★ 1 · License: MIT · Works with: DeepSeek Harness only

Static and runtime security guard: rule-based scans for malicious code, prompt injection, and token waste, runtime interception of dangerous tool calls, a /scan command, a plugin_scan tool, a web panel, and an allowlist.

**Alternatives:**

- [PerryLink/dsh-defend](https://github.com/PerryLink/dsh-defend) (★ 16) — Detects prompt-injection, jailbreak and secret-leak patterns at three pipeline seams with allow/ask/block tiers and a destructive-delete guard.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:bigclawd/dsh-security-guard
```

</details>

<a id="dsh-dsh-risk-guard"></a>

### Passive risk-scored call blocking

[shuxue6662-a11y/dsh-risk-guard](https://github.com/shuxue6662-a11y/dsh-risk-guard) — `Native plugin` · ★ 0 · License: MIT · Works with: DeepSeek Harness only

Silently records every tool call with deterministic, cumulative risk scoring and retention-based cleanup, blocking irreversible actions like protected-path deletion, disk wipes, and force-pushes to protected branches.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:shuxue6662-a11y/dsh-risk-guard
```

</details>

<a id="falcon-mcp"></a>

### CrowdStrike Falcon security analysis

[CrowdStrike Falcon MCP Server](https://github.com/CrowdStrike/falcon-mcp) — `MCP server` · License: MIT · Works with: All clients

Official CrowdStrike server connecting agents to Falcon for security analysis and automation; needs Falcon client credentials.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio falcon-mcp --env FALCON_CLIENT_ID='<FALCON_CLIENT_ID>' --env FALCON_CLIENT_SECRET='<FALCON_CLIENT_SECRET>' --env FALCON_MCP_API_KEY='<FALCON_MCP_API_KEY>' -- uvx falcon-mcp
```

**Codex CLI**

```bash
codex mcp add falcon-mcp --env FALCON_CLIENT_ID='<FALCON_CLIENT_ID>' --env FALCON_CLIENT_SECRET='<FALCON_CLIENT_SECRET>' --env FALCON_MCP_API_KEY='<FALCON_MCP_API_KEY>' -- uvx falcon-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e FALCON_CLIENT_ID='<FALCON_CLIENT_ID>' -e FALCON_CLIENT_SECRET='<FALCON_CLIENT_SECRET>' -e FALCON_MCP_API_KEY='<FALCON_MCP_API_KEY>' falcon-mcp uvx falcon-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "falcon-mcp": {
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "falcon-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
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
    "falcon-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "falcon-mcp"
      ],
      "enabled": true,
      "environment": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "falcon-mcp": {
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "falcon-mcp": {
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "falcon-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  falcon-mcp:
    type: stdio
    cmd: uvx
    args: ["falcon-mcp"]
    envs:
      FALCON_CLIENT_ID: "<FALCON_CLIENT_ID>"
      FALCON_CLIENT_SECRET: "<FALCON_CLIENT_SECRET>"
      FALCON_MCP_API_KEY: "<FALCON_MCP_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "falcon-mcp": {
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "falcon-mcp": {
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `falcon-mcp.cordis.yml  →  dsh web --patch ./falcon-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-falcon-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: falcon-mcp
        transport: stdio
        command: uvx
        args: ["falcon-mcp"]
        env: {"FALCON_CLIENT_ID":"<FALCON_CLIENT_ID>","FALCON_CLIENT_SECRET":"<FALCON_CLIENT_SECRET>","FALCON_MCP_API_KEY":"<FALCON_MCP_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="skylos-mcp"></a>

### Dead code and secrets detection

[duriantaco/skylos](https://github.com/duriantaco/skylos) — `MCP server` · License: Apache-2.0 · Works with: All clients

Dead code, security, secrets detection, and code quality for Python, TypeScript, and Go; needs a SKYLOS_API_KEY.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio skylos --env SKYLOS_API_KEY='<SKYLOS_API_KEY>' -- uvx skylos
```

**Codex CLI**

```bash
codex mcp add skylos --env SKYLOS_API_KEY='<SKYLOS_API_KEY>' -- uvx skylos
```

**Gemini CLI**

```bash
gemini mcp add -e SKYLOS_API_KEY='<SKYLOS_API_KEY>' skylos uvx skylos
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "skylos": {
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "skylos": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
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
    "skylos": {
      "type": "local",
      "command": [
        "uvx",
        "skylos"
      ],
      "enabled": true,
      "environment": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "skylos": {
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "skylos": {
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "skylos": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  skylos:
    type: stdio
    cmd: uvx
    args: ["skylos"]
    envs:
      SKYLOS_API_KEY: "<SKYLOS_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "skylos": {
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "skylos": {
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `skylos.cordis.yml  →  dsh web --patch ./skylos.cordis.yml`

```yaml
- insert:
    - id: mcp-skylos
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: skylos
        transport: stdio
        command: uvx
        args: ["skylos"]
        env: {"SKYLOS_API_KEY":"<SKYLOS_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="parse-dmarc-mcp"></a>

### DMARC report parsing

[Parse-DMARC MCP Server](https://github.com/meysam81/parse-dmarc) — `MCP server` · License: Apache-2.0 · Works with: All clients

Lightweight DMARC parser that auto-fetches email reports and visualizes compliance in one app.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio parse-dmarc -- docker run -i --rm ghcr.io/meysam81/parse-dmarc:v1.4.7
```

**Codex CLI**

```bash
codex mcp add parse-dmarc -- docker run -i --rm ghcr.io/meysam81/parse-dmarc:v1.4.7
```

**Gemini CLI**

```bash
gemini mcp add parse-dmarc docker run -i --rm ghcr.io/meysam81/parse-dmarc:v1.4.7
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "parse-dmarc": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "parse-dmarc": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
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
    "parse-dmarc": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
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
    "parse-dmarc": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "parse-dmarc": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "parse-dmarc": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  parse-dmarc:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/meysam81/parse-dmarc:v1.4.7"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "parse-dmarc": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "parse-dmarc": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `parse-dmarc.cordis.yml  →  dsh web --patch ./parse-dmarc.cordis.yml`

```yaml
- insert:
    - id: mcp-parse-dmarc
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: parse-dmarc
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/meysam81/parse-dmarc:v1.4.7"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="evmole-mcp"></a>

### EVM bytecode analysis

[EVMole](https://github.com/cdump/evmole/tree/main/agent/mcp) — `MCP server` · License: MIT · Works with: All clients

Local structured analysis of deployed EVM runtime bytecode.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio evmole -- npx -y evmole-mcp
```

**Codex CLI**

```bash
codex mcp add evmole -- npx -y evmole-mcp
```

**Gemini CLI**

```bash
gemini mcp add evmole npx -y evmole-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "evmole": {
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "evmole": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
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
    "evmole": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "evmole-mcp"
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
    "evmole": {
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "evmole": {
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "evmole": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  evmole:
    type: stdio
    cmd: npx
    args: ["-y","evmole-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "evmole": {
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "evmole": {
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `evmole.cordis.yml  →  dsh web --patch ./evmole.cordis.yml`

```yaml
- insert:
    - id: mcp-evmole
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: evmole
        transport: stdio
        command: npx
        args: ["-y","evmole-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="bernstein-mcp"></a>

### Governance layer for agent actions

[sipyourdrink-ltd/bernstein](https://github.com/sipyourdrink-ltd/bernstein) — `MCP server` · License: Apache-2.0 · Works with: All clients

Open-source governance layer for AI agents with byte-identical run receipts, 40+ adapters, and air-gap support.

**Alternatives:**

- [Emilia Protocol](https://github.com/emiliaprotocol/emilia-protocol) — Exact-action approval for consequential agent actions, with signed receipts; needs an EP_API_KEY.
- [HOL Guard](https://github.com/hashgraph-online/hol-guard) — Local-first security evidence and approval workflows for an agent's actions.
- [ucsandman/DashClaw/tree/main/mcp-server](https://github.com/ucsandman/DashClaw/tree/main/mcp-server) — Policy checks, approvals, records, and governed HTTP capabilities for unattended agents.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio bernstein -- uvx bernstein
```

**Codex CLI**

```bash
codex mcp add bernstein -- uvx bernstein
```

**Gemini CLI**

```bash
gemini mcp add bernstein uvx bernstein
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "bernstein": {
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "bernstein": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "bernstein"
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
    "bernstein": {
      "type": "local",
      "command": [
        "uvx",
        "bernstein"
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
    "bernstein": {
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "bernstein": {
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "bernstein": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  bernstein:
    type: stdio
    cmd: uvx
    args: ["bernstein"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "bernstein": {
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "bernstein": {
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `bernstein.cordis.yml  →  dsh web --patch ./bernstein.cordis.yml`

```yaml
- insert:
    - id: mcp-bernstein
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: bernstein
        transport: stdio
        command: uvx
        args: ["bernstein"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="wireshark-mcp"></a>

### Network analysis with tshark

[bx33661/Wireshark-MCP](https://github.com/bx33661/Wireshark-MCP) — `MCP server` · License: MIT · Works with: All clients

Professional network analysis with tshark for security audits, deep-dives, and threat detection.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio wireshark-mcp -- uvx wireshark-mcp
```

**Codex CLI**

```bash
codex mcp add wireshark-mcp -- uvx wireshark-mcp
```

**Gemini CLI**

```bash
gemini mcp add wireshark-mcp uvx wireshark-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "wireshark-mcp": {
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "wireshark-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "wireshark-mcp"
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
    "wireshark-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "wireshark-mcp"
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
    "wireshark-mcp": {
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "wireshark-mcp": {
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "wireshark-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  wireshark-mcp:
    type: stdio
    cmd: uvx
    args: ["wireshark-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "wireshark-mcp": {
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "wireshark-mcp": {
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `wireshark-mcp.cordis.yml  →  dsh web --patch ./wireshark-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-wireshark-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: wireshark-mcp
        transport: stdio
        command: uvx
        args: ["wireshark-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="openosint-mcp"></a>

### OSINT recon agent

[OpenOSINT](https://github.com/OpenOSINT/OpenOSINT) — `MCP server` · License: MIT · Works with: All clients

AI-powered OSINT agent with 16 tools: email, breach, IP, WHOIS, DNS, Shodan, and GitHub lookups; needs several OSINT provider keys.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio openosint --env ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' --env HIBP_API_KEY='<HIBP_API_KEY>' --env IPINFO_TOKEN='<IPINFO_TOKEN>' --env IP2LOCATION_API_KEY='<IP2LOCATION_API_KEY>' --env ABUSEIPDB_API_KEY='<ABUSEIPDB_API_KEY>' -- uvx openosint
```

**Codex CLI**

```bash
codex mcp add openosint --env ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' --env HIBP_API_KEY='<HIBP_API_KEY>' --env IPINFO_TOKEN='<IPINFO_TOKEN>' --env IP2LOCATION_API_KEY='<IP2LOCATION_API_KEY>' --env ABUSEIPDB_API_KEY='<ABUSEIPDB_API_KEY>' -- uvx openosint
```

**Gemini CLI**

```bash
gemini mcp add -e ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' -e HIBP_API_KEY='<HIBP_API_KEY>' -e IPINFO_TOKEN='<IPINFO_TOKEN>' -e IP2LOCATION_API_KEY='<IP2LOCATION_API_KEY>' -e ABUSEIPDB_API_KEY='<ABUSEIPDB_API_KEY>' openosint uvx openosint
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "openosint": {
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "openosint": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
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
    "openosint": {
      "type": "local",
      "command": [
        "uvx",
        "openosint"
      ],
      "enabled": true,
      "environment": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "openosint": {
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "openosint": {
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "openosint": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  openosint:
    type: stdio
    cmd: uvx
    args: ["openosint"]
    envs:
      ANTHROPIC_API_KEY: "<ANTHROPIC_API_KEY>"
      HIBP_API_KEY: "<HIBP_API_KEY>"
      IPINFO_TOKEN: "<IPINFO_TOKEN>"
      IP2LOCATION_API_KEY: "<IP2LOCATION_API_KEY>"
      ABUSEIPDB_API_KEY: "<ABUSEIPDB_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "openosint": {
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "openosint": {
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `openosint.cordis.yml  →  dsh web --patch ./openosint.cordis.yml`

```yaml
- insert:
    - id: mcp-openosint
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: openosint
        transport: stdio
        command: uvx
        args: ["openosint"]
        env: {"ANTHROPIC_API_KEY":"<ANTHROPIC_API_KEY>","HIBP_API_KEY":"<HIBP_API_KEY>","IPINFO_TOKEN":"<IPINFO_TOKEN>","IP2LOCATION_API_KEY":"<IP2LOCATION_API_KEY>","ABUSEIPDB_API_KEY":"<ABUSEIPDB_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="vet-mcp"></a>

### Protect agents from malicious packages

[SafeDep Vet MCP](https://github.com/safedep/vet) — `MCP server` · License: Apache-2.0 · Works with: All clients

Protects AI agents and IDEs from malicious open-source packages.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio vet-mcp -- docker run -i --rm ghcr.io/safedep/vet:v1.19.1
```

**Codex CLI**

```bash
codex mcp add vet-mcp -- docker run -i --rm ghcr.io/safedep/vet:v1.19.1
```

**Gemini CLI**

```bash
gemini mcp add vet-mcp docker run -i --rm ghcr.io/safedep/vet:v1.19.1
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "vet-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "vet-mcp": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
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
    "vet-mcp": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
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
    "vet-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "vet-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "vet-mcp": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  vet-mcp:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/safedep/vet:v1.19.1"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "vet-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "vet-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `vet-mcp.cordis.yml  →  dsh web --patch ./vet-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-vet-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: vet-mcp
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/safedep/vet:v1.19.1"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="rea-mcp"></a>

### Reverse engineer from the CLI

[REA](https://github.com/morluto/rea) — `MCP server` · License: MIT · Works with: All clients

Reverse engineers arbitrary targets from the terminal or an agent, via one CLI and server.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio rea -- npx -y rea-agents
```

**Codex CLI**

```bash
codex mcp add rea -- npx -y rea-agents
```

**Gemini CLI**

```bash
gemini mcp add rea npx -y rea-agents
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "rea": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
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
    "rea": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "rea-agents"
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
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "rea": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  rea:
    type: stdio
    cmd: npx
    args: ["-y","rea-agents"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `rea.cordis.yml  →  dsh web --patch ./rea.cordis.yml`

```yaml
- insert:
    - id: mcp-rea
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: rea
        transport: stdio
        command: npx
        args: ["-y","rea-agents"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="reversecore-mcp"></a>

### Reverse engineering and forensics

[Reversecore MCP](https://github.com/sjkim1127/Reversecore_MCP) — `MCP server` · License: MIT · Works with: All clients

Security-first server for reverse engineering, malware analysis, forensics, and static analysis (SAST).

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio reversecore-mcp -- uvx reversecore-mcp
```

**Codex CLI**

```bash
codex mcp add reversecore-mcp -- uvx reversecore-mcp
```

**Gemini CLI**

```bash
gemini mcp add reversecore-mcp uvx reversecore-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "reversecore-mcp": {
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "reversecore-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "reversecore-mcp"
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
    "reversecore-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "reversecore-mcp"
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
    "reversecore-mcp": {
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "reversecore-mcp": {
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "reversecore-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  reversecore-mcp:
    type: stdio
    cmd: uvx
    args: ["reversecore-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "reversecore-mcp": {
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "reversecore-mcp": {
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `reversecore-mcp.cordis.yml  →  dsh web --patch ./reversecore-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-reversecore-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: reversecore-mcp
        transport: stdio
        command: uvx
        args: ["reversecore-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="sonarqube-mcp-server"></a>

### SonarQube code quality scans

[SonarQube MCP Server](https://github.com/SonarSource/sonarqube-mcp-server) — `MCP server` · License: see repo · Works with: All clients

Official SonarSource server for analyzing code quality and security with SonarQube Server or Cloud; needs a SONARQUBE_TOKEN.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio sonarqube-mcp-server --env SONARQUBE_TOKEN='<SONARQUBE_TOKEN>' --env SONARQUBE_ORG='<SONARQUBE_ORG>' --env SONARQUBE_URL='<SONARQUBE_URL>' -- docker run -i --rm -e SONARQUBE_TOKEN -e SONARQUBE_ORG -e SONARQUBE_URL docker.io/sonarsource/sonarqube-mcp
```

**Codex CLI**

```bash
codex mcp add sonarqube-mcp-server --env SONARQUBE_TOKEN='<SONARQUBE_TOKEN>' --env SONARQUBE_ORG='<SONARQUBE_ORG>' --env SONARQUBE_URL='<SONARQUBE_URL>' -- docker run -i --rm -e SONARQUBE_TOKEN -e SONARQUBE_ORG -e SONARQUBE_URL docker.io/sonarsource/sonarqube-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e SONARQUBE_TOKEN='<SONARQUBE_TOKEN>' -e SONARQUBE_ORG='<SONARQUBE_ORG>' -e SONARQUBE_URL='<SONARQUBE_URL>' sonarqube-mcp-server docker run -i --rm -e SONARQUBE_TOKEN -e SONARQUBE_ORG -e SONARQUBE_URL docker.io/sonarsource/sonarqube-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sonarqube-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "sonarqube-mcp-server": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
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
    "sonarqube-mcp-server": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "enabled": true,
      "environment": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "sonarqube-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "sonarqube-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "sonarqube-mcp-server": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  sonarqube-mcp-server:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","-e","SONARQUBE_TOKEN","-e","SONARQUBE_ORG","-e","SONARQUBE_URL","docker.io/sonarsource/sonarqube-mcp"]
    envs:
      SONARQUBE_TOKEN: "<SONARQUBE_TOKEN>"
      SONARQUBE_ORG: "<SONARQUBE_ORG>"
      SONARQUBE_URL: "<SONARQUBE_URL>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sonarqube-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "sonarqube-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `sonarqube-mcp-server.cordis.yml  →  dsh web --patch ./sonarqube-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-sonarqube-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sonarqube-mcp-server
        transport: stdio
        command: docker
        args: ["run","-i","--rm","-e","SONARQUBE_TOKEN","-e","SONARQUBE_ORG","-e","SONARQUBE_URL","docker.io/sonarsource/sonarqube-mcp"]
        env: {"SONARQUBE_TOKEN":"<SONARQUBE_TOKEN>","SONARQUBE_ORG":"<SONARQUBE_ORG>","SONARQUBE_URL":"<SONARQUBE_URL>"}
        cwd: !!js process.cwd()
```

</details>

<a id="crowdsentinels-ai-mcp"></a>

### Threat hunting on Elasticsearch

[thomasxm/CrowdSentinels-AI-MCP](https://github.com/thomasxm/CrowdSentinels-AI-MCP) — `MCP server` · License: GPL-3.0 · Works with: All clients

AI threat hunting and incident response for Elasticsearch/OpenSearch with endpoint and network forensics; needs Elasticsearch credentials.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio crowdsentinel-mcp-server --env ELASTICSEARCH_API_KEY='<ELASTICSEARCH_API_KEY>' --env ELASTICSEARCH_PASSWORD='<ELASTICSEARCH_PASSWORD>' --env ELASTICSEARCH_BEARER_TOKEN='<ELASTICSEARCH_BEARER_TOKEN>' -- uvx crowdsentinel-mcp-server
```

**Codex CLI**

```bash
codex mcp add crowdsentinel-mcp-server --env ELASTICSEARCH_API_KEY='<ELASTICSEARCH_API_KEY>' --env ELASTICSEARCH_PASSWORD='<ELASTICSEARCH_PASSWORD>' --env ELASTICSEARCH_BEARER_TOKEN='<ELASTICSEARCH_BEARER_TOKEN>' -- uvx crowdsentinel-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e ELASTICSEARCH_API_KEY='<ELASTICSEARCH_API_KEY>' -e ELASTICSEARCH_PASSWORD='<ELASTICSEARCH_PASSWORD>' -e ELASTICSEARCH_BEARER_TOKEN='<ELASTICSEARCH_BEARER_TOKEN>' crowdsentinel-mcp-server uvx crowdsentinel-mcp-server
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "crowdsentinel-mcp-server": {
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "crowdsentinel-mcp-server": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
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
    "crowdsentinel-mcp-server": {
      "type": "local",
      "command": [
        "uvx",
        "crowdsentinel-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "crowdsentinel-mcp-server": {
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "crowdsentinel-mcp-server": {
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "crowdsentinel-mcp-server": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  crowdsentinel-mcp-server:
    type: stdio
    cmd: uvx
    args: ["crowdsentinel-mcp-server"]
    envs:
      ELASTICSEARCH_API_KEY: "<ELASTICSEARCH_API_KEY>"
      ELASTICSEARCH_PASSWORD: "<ELASTICSEARCH_PASSWORD>"
      ELASTICSEARCH_BEARER_TOKEN: "<ELASTICSEARCH_BEARER_TOKEN>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "crowdsentinel-mcp-server": {
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "crowdsentinel-mcp-server": {
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `crowdsentinel-mcp-server.cordis.yml  →  dsh web --patch ./crowdsentinel-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-crowdsentinel-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: crowdsentinel-mcp-server
        transport: stdio
        command: uvx
        args: ["crowdsentinel-mcp-server"]
        env: {"ELASTICSEARCH_API_KEY":"<ELASTICSEARCH_API_KEY>","ELASTICSEARCH_PASSWORD":"<ELASTICSEARCH_PASSWORD>","ELASTICSEARCH_BEARER_TOKEN":"<ELASTICSEARCH_BEARER_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>
