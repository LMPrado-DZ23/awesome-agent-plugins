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

<a id="dsh-api-relay-audit"></a>

### Read-only relay and config security audit

[toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) — `Native plugin` · ★ 838 · License: AGPL-3.0 · Works with: DeepSeek Harness only

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
