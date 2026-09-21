# Usage & Cost

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Context lifecycle dashboard](#dsh-dsh-context) — Dashboard, /context command, and browser for one-stop context lifecycle management: categorized composition, c…
- [Session and daily cost dashboard](#dsh-dsh-cost-meter) — Tracks per-session and daily API cost against a budget with usage percentage, shows the official account balan…
- [Relay-attributed usage tracking](#dsh-tokenledger) — Sidebar panel that attributes tokens to the relay site that served each request, read from your existing provi…
- [Cross-session personal usage center](#dsh-dsh-personal-center) — Local, offline personal center: cross-session usage statistics, per-model cost estimation, global custom instr…
- [Gamified usage tier ranking](#dsh-dsh-whale-meter) — Ranks monthly token burn into shareable emoji tiers with a locally computed percentile estimate, precise prici…
- [Multi-provider quota auto-discovery](#dsh-dsh-quota-panel) — Bottom-right capsule that auto-discovers every configured provider (DeepSeek, OpenRouter, SiliconFlow, GLM, on…
- [Per-session usage and cost dashboard](#dsh-dsh-usage-dashboard-plus) — Shows DeepSeek balance and estimated daily spend, merges external vision-call records, and adds a per-session …
- [Proactive per-provider rate limiting](#dsh-dsh-rate-limiter) — Queues requests that would exceed a per-provider token-bucket rate limit before they are sent, preventing upst…

<a id="dsh-dsh-context"></a>

### Context lifecycle dashboard

[bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) — `Native plugin` · ★ 1.5k · License: Apache-2.0 · Works with: DeepSeek Harness only

Dashboard, /context command, and browser for one-stop context lifecycle management: categorized composition, content details, evolution trends over time, and compaction and injection events.

**Alternatives:**

- [GooodWei/context-vista](https://github.com/GooodWei/context-vista) (★ 11) — Shows a live donut chart of context token allocation and estimated cost in a smaller floating panel.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:bowenliang123/dsh-context
```

</details>

<a id="dsh-dsh-cost-meter"></a>

### Session and daily cost dashboard

[Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) — `Native plugin` · ★ 320 · License: MIT · Works with: DeepSeek Harness only

Tracks per-session and daily API cost against a budget with usage percentage, shows the official account balance, keeps a history dashboard, and syncs official peak/off-peak pricing with one click.

**Alternatives:**

- [feibi-mochi/deepseek-harness-control-center](https://github.com/feibi-mochi/deepseek-harness-control-center) (★ 73) — Adds official recharge, completion alerts, flexible layouts, and agent-assisted session controls.
- [kenz1117/dsh-ui-usage-billing](https://github.com/kenz1117/dsh-ui-usage-billing) (★ 56) — Estimates cost in CNY from a current multi-provider pricing catalog and exempts subscription-plan routes from the total.
- [nonewind/dsh-spend](https://github.com/nonewind/dsh-spend) (★ 8) — Shows a floating panel with per-model, per-day, and per-session token stats.
- [Max-Samson/dsh-usage-chart](https://github.com/Max-Samson/dsh-usage-chart) (★ 9) — Adds zero-dependency SVG charts for per-turn usage and cost directly under the composer.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Han-1413141/dsh-cost-meter
```

</details>

<a id="dsh-tokenledger"></a>

### Relay-attributed usage tracking

[zh667/TokenLedger](https://github.com/zh667/TokenLedger) — `Native plugin` · ★ 202 · License: MIT · Works with: DeepSeek Harness only

Sidebar panel that attributes tokens to the relay site that served each request, read from your existing provider config: today/month/all-time totals, per-site and per-model breakdowns, a year activity heatmap, and New API/Sub2API/DeepSeek balances.

**Alternatives:**

- [Jannchie/dsh-bill](https://github.com/Jannchie/dsh-bill) (★ 3) — Prices every call from an online catalogue of 8000+ models and attributes spend by tool output, model output, or system prompt.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:zh667/TokenLedger
```

</details>

<a id="dsh-dsh-personal-center"></a>

### Cross-session personal usage center

[PolinniZhong/dsh-personal-center](https://github.com/PolinniZhong/dsh-personal-center) — `Native plugin` · ★ 120 · License: MIT · Works with: DeepSeek Harness only

Local, offline personal center: cross-session usage statistics, per-model cost estimation, global custom instructions, a font-size adjuster, a data-driven desktop pet, and a conversation status overview.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PolinniZhong/dsh-personal-center
```

</details>

<a id="dsh-dsh-whale-meter"></a>

### Gamified usage tier ranking

[Shiye-10Pages/dsh-whale-meter](https://github.com/Shiye-10Pages/dsh-whale-meter) — `Native plugin` · ★ 11 · License: MIT · Works with: DeepSeek Harness only

Ranks monthly token burn into shareable emoji tiers with a locally computed percentile estimate, precise pricing for 46 models across 6 vendors, backfilled pre-install sessions, and old-vs-new pricing comparison. Local-only, no telemetry.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Shiye-10Pages/dsh-whale-meter
```

</details>

<a id="dsh-dsh-quota-panel"></a>

### Multi-provider quota auto-discovery

[wenzetan/dsh-quota-panel](https://github.com/wenzetan/dsh-quota-panel) — `Native plugin` · ★ 9 · License: MIT · Works with: DeepSeek Harness only

Bottom-right capsule that auto-discovers every configured provider (DeepSeek, OpenRouter, SiliconFlow, GLM, one-api/new-api, coding plans) and shows balance or rolling 5-hour and weekly usage, with alert thresholds and proxy support.

**Alternatives:**

- [FengHuoLinShan/dsh-plugin-llm-balance](https://github.com/FengHuoLinShan/dsh-plugin-llm-balance) (★ 3) — Shows up to 3 recently used providers with color-coded quota windows and reset times in a draggable card.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wenzetan/dsh-quota-panel
```

</details>

<a id="dsh-dsh-usage-dashboard-plus"></a>

### Per-session usage and cost dashboard

[1HelloMan1/dsh-usage-dashboard-plus](https://github.com/1HelloMan1/dsh-usage-dashboard-plus) — `Native plugin` · ★ 3 · License: MIT · Works with: DeepSeek Harness only

Shows DeepSeek balance and estimated daily spend, merges external vision-call records, and adds a per-session dashboard with model statistics, time-to-first-token, cache rate, call logs, cost estimates, filters, and CSV export.

**Alternatives:**

- [yokesky/dsh-usage-lens](https://github.com/yokesky/dsh-usage-lens) (★ 2) — Adds a 280-day GitHub-style activity heatmap and a model-usage donut chart.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:1HelloMan1/dsh-usage-dashboard-plus
```

</details>

<a id="dsh-dsh-rate-limiter"></a>

### Proactive per-provider rate limiting

[Xidong-AI/dsh-rate-limiter](https://github.com/Xidong-AI/dsh-rate-limiter) — `Native plugin` · ★ 3 · License: MIT · Works with: DeepSeek Harness only

Queues requests that would exceed a per-provider token-bucket rate limit before they are sent, preventing upstream 429 errors.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Xidong-AI/dsh-rate-limiter
```

</details>
