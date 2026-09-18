# Vision & Voice

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [HyperFrames](#hyperframes-skills) — Skills and CLI for writing videos as HTML compositions and rendering them to MP4/WebM, built for agents.
- [Vision bridge for text-only models](#dsh-modlens) — Turns pasted images into structured JSON evidence — OCR, layout, and semantics — so text-only models can under…
- [AI image generation](#dsh-dsh-imagegen) — Adds text-to-image and image-to-image generation to the DSH Web GUI through a configurable OpenAI-compatible e…
- [Drive ComfyUI image/video workflows](#dsh-dsh-comfyui) — Drives a local or remote ComfyUI server: tools to run workflows, inspect nodes, and edit graphs, with a templa…
- [Design-fidelity visual QA](#dsh-dsh-design-qa) — Lets a text-only model judge whether an implementation matches its design mock, via a deepseek_vision tool tha…
- [Read replies aloud (TTS)](#dsh-dsh-speak) — Announces final replies, approvals, and questions with the system's built-in natural voice on Windows and macO…
- [Screenshot capture into composer](#dsh-dsh-plugin-appshot) — Captures the frontmost active window via a global shortcut and mounts it directly into the composer for agent …
- [UI sound effects and alerts](#dsh-dsh-plugin-uisfx) — Adds semantic UI sound effects for task start, success, and failure, plus per-button cues, with 12 sound packs…
- [TTS/ASR utility toolkit](#dsh-dsh-voice) — A voice utility toolkit: free edge-tts speech synthesis, OpenAI-compatible ASR transcription, a voice list, ba…
- [Unified text/vision/image-gen routing](#dsh-dsh-vision-mix) — Routes each request to the right modality inside one Mix model: text-only goes to the chat model, images go to…
- [Voice dictation and read-aloud](#dsh-dsh-chatvoice) — A free voice closed loop for the Web UI: browser speech recognition for mic input with live interim results, p…
- [Agent-initiated voice calls](#dsh-dsh-voice-call) — Lets the agent ring the human with an offer_call tool; if accepted, it synthesizes and plays speech locally vi…

<a id="hyperframes-skills"></a>

### HyperFrames

[HyperFrames](https://github.com/heygen-com/hyperframes) — `Agent Skills` · ★ 51k · License: Apache-2.0 · Works with: All clients

Skills and CLI for writing videos as HTML compositions and rendering them to MP4/WebM, built for agents.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add heygen-com/hyperframes -a claude-code -g
```

**Codex CLI**

```bash
npx skills add heygen-com/hyperframes -a codex -g
```

**Gemini CLI**

```bash
npx skills add heygen-com/hyperframes -a gemini-cli -g
```

**Cursor**

```bash
npx skills add heygen-com/hyperframes -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add heygen-com/hyperframes -a github-copilot -g
```

**OpenCode**

```bash
npx skills add heygen-com/hyperframes -a opencode -g
```

**Cline**

```bash
npx skills add heygen-com/hyperframes -a cline -g
```

**Windsurf**

```bash
npx skills add heygen-com/hyperframes -a windsurf -g
```

**Zed**

```bash
npx skills add heygen-com/hyperframes -a zed -g
```

**Goose**

```bash
npx skills add heygen-com/hyperframes -a goose -g
```

**Kiro**

```bash
npx skills add heygen-com/hyperframes -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add heygen-com/hyperframes -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add heygen-com/hyperframes -a universal
```

</details>

<a id="dsh-modlens"></a>

### Vision bridge for text-only models

[liustack/modlens](https://github.com/liustack/modlens) — `Native plugin` · ★ 4.0k · License: MIT · Works with: DeepSeek Harness only

Turns pasted images into structured JSON evidence — OCR, layout, and semantics — so text-only models can understand and reason about screenshots and pictures.

**Alternatives:**

- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) (★ 1.1k) — Adds pixel-level tools: Q&A, grounding, cropping, pixel diff, colors, SVG tracing, and background cutout, via a free keyless chain.
- [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) (★ 882) — Adds multi-image comparison, long-screenshot OCR, and screenshot-to-UI reproduction, via a free hosted service capped at 100 images/day.
- [FuzzySoul/dsh-free-vision](https://github.com/FuzzySoul/dsh-free-vision) (★ 7) — Adds a settings GUI to choose between free-tier vision providers (Qwen3-VL-Flash, Doubao, DeepSeek-OCR).
- [54xkeee/dsh-youreyes](https://github.com/54xkeee/dsh-youreyes) (★ 2) — Adds evidence memory that survives context compaction, a content-hash cache, and a bilingual client panel.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:liustack/modlens
```

</details>

<a id="dsh-dsh-imagegen"></a>

### AI image generation

[dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) — `Native plugin` · ★ 78 · License: Apache-2.0 · Works with: DeepSeek Harness only

Adds text-to-image and image-to-image generation to the DSH Web GUI through a configurable OpenAI-compatible endpoint (gpt-image or dall-e-3), with a settings card and a sidebar generation studio.

**Alternatives:**

- [lsjspl/dsh-plugin-grok2api-media-tool](https://github.com/lsjspl/dsh-plugin-grok2api-media-tool) (★ 3) — Generates images and videos through the grok2api API instead of an OpenAI-compatible endpoint.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dickpy/dsh-imagegen
```

</details>

<a id="dsh-dsh-comfyui"></a>

### Drive ComfyUI image/video workflows

[fandc520/dsh-comfyui](https://github.com/fandc520/dsh-comfyui) — `Native plugin` · ★ 73 · License: MIT · Works with: DeepSeek Harness only

Drives a local or remote ComfyUI server: tools to run workflows, inspect nodes, and edit graphs, with a template library, live queue, SDXL and Wan 2.1 templates, and a same-origin media proxy.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:fandc520/dsh-comfyui
```

</details>

<a id="dsh-dsh-design-qa"></a>

### Design-fidelity visual QA

[sunxin-ai/dsh-design-qa](https://github.com/sunxin-ai/dsh-design-qa) — `Native plugin` · ★ 44 · License: MIT · Works with: DeepSeek Harness only

Lets a text-only model judge whether an implementation matches its design mock, via a deepseek_vision tool that borrows any OpenAI-compatible vision route, shipped with a benchmark of fixtures and injected defects.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:sunxin-ai/dsh-design-qa
```

</details>

<a id="dsh-dsh-speak"></a>

### Read replies aloud (TTS)

[Alan2Z/dsh-speak](https://github.com/Alan2Z/dsh-speak) — `Native plugin` · ★ 11 · License: MIT · Works with: DeepSeek Harness only

Announces final replies, approvals, and questions with the system's built-in natural voice on Windows and macOS, at zero extra model or token cost, with optional event announcements and a bilingual settings page.

**Alternatives:**

- [PolinniZhong/dsh-omi-voice](https://github.com/PolinniZhong/dsh-omi-voice) (★ 73) — Adds tap-to-read-aloud with natural Doubao TTS voices (bring your own key), filtering out code, tables, and diagrams from what gets read.
- [1624318455/dsh-plugin-tts](https://github.com/1624318455/dsh-plugin-tts) (★ 19) — Adds RVC custom voice models with one-click voice-pack installs from a registry, alongside free Edge TTS.
- [ppy-web/dsh-plugin-xiaomi-mimo-tts](https://github.com/ppy-web/dsh-plugin-xiaomi-mimo-tts) (★ 7) — Adds Xiaomi MiMo text-to-speech with preset voices and custom voice design.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Alan2Z/dsh-speak
```

</details>

<a id="dsh-dsh-plugin-appshot"></a>

### Screenshot capture into composer

[TaurusWood/dsh-plugin-appshot](https://github.com/TaurusWood/dsh-plugin-appshot) — `Native plugin` · ★ 5 · License: MIT · Works with: DeepSeek Harness only

Captures the frontmost active window via a global shortcut and mounts it directly into the composer for agent queries, similar to Codex Appshots.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:TaurusWood/dsh-plugin-appshot
```

</details>

<a id="dsh-dsh-plugin-uisfx"></a>

### UI sound effects and alerts

[XanthanL/dsh-plugin-uisfx](https://github.com/XanthanL/dsh-plugin-uisfx) — `Native plugin` · ★ 5 · License: MIT · Works with: DeepSeek Harness only

Adds semantic UI sound effects for task start, success, and failure, plus per-button cues, with 12 sound packs, host-persisted preferences, and a ctx.uisfx service other plugins can call.

**Alternatives:**

- [huguangyu666/dsh-plugin-notify](https://github.com/huguangyu666/dsh-plugin-notify) (★ 3) — Adds a 60-second confirmation window where the agent voice-calls you back if you do not respond, plus Chinese TTS announcements.
- [AI-Galaxy-GPU/dsh-sound](https://github.com/AI-Galaxy-GPU/dsh-sound) (★ 9) — Adds separate configurable sounds for turn completion, approval, question, plan-review, goal-blocked, and task-failure events.
- [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) (★ 8) — Adds a native Windows notification alongside the completion sound, with debounce/throttle settings.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:XanthanL/dsh-plugin-uisfx
```

</details>

<a id="dsh-dsh-voice"></a>

### TTS/ASR utility toolkit

[STARDUSTLC666/dsh-voice](https://github.com/STARDUSTLC666/dsh-voice) — `Native plugin` · ★ 3 · License: MIT · Works with: DeepSeek Harness only

A voice utility toolkit: free edge-tts speech synthesis, OpenAI-compatible ASR transcription, a voice list, batch voice preview, and a health self-check.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:STARDUSTLC666/dsh-voice
```

</details>

<a id="dsh-dsh-vision-mix"></a>

### Unified text/vision/image-gen routing

[haiziyao/dsh-vision-mix](https://github.com/haiziyao/dsh-vision-mix) — `Native plugin` · ★ 3 · License: MIT · Works with: DeepSeek Harness only

Routes each request to the right modality inside one Mix model: text-only goes to the chat model, images go to the vision model, and the agent can also generate or edit images, all with session-scoped call history.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:haiziyao/dsh-vision-mix
```

</details>

<a id="dsh-dsh-chatvoice"></a>

### Voice dictation and read-aloud

[FuzzySoul/dsh-chatvoice](https://github.com/FuzzySoul/dsh-chatvoice) — `Native plugin` · ★ 3 · License: MIT · Works with: DeepSeek Harness only

A free voice closed loop for the Web UI: browser speech recognition for mic input with live interim results, plus read-aloud speaker buttons and auto-read for assistant replies, with zero configuration and no API key.

**Alternatives:**

- [Zhangbo-cn/dsh-voice-input-plugin](https://github.com/Zhangbo-cn/dsh-voice-input-plugin) (★ 5) — Adds hold-to-talk dictation and Edge TTS reply reading that streams while the model generates, with echo-pause during playback.
- [qishuilalala/dsh-voice-mode#dsh-voice-mode](https://github.com/qishuilalala/dsh-voice-mode/tree/main/plugin/dsh-voice-mode) — Adds full-duplex, on-device streaming ASR with wake-word detection and true barge-in that interrupts playback when you start speaking.
- [PensiveFei/dsh-voice-scribe](https://github.com/PensiveFei/dsh-voice-scribe) (★ 32) — Adds a hotkey (Alt or Alt+Space) to start and stop dictation, with optional LLM polish of the transcript.
- [WizisCool/dsh-ears](https://github.com/WizisCool/dsh-ears) (★ 20) — Adds a choice of speech-recognition backends with a native settings page and optional polish through dsh's own LLM routes.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:FuzzySoul/dsh-chatvoice
```

</details>

<a id="dsh-dsh-voice-call"></a>

### Agent-initiated voice calls

[PandaPolo/dsh-voice-call](https://github.com/PandaPolo/dsh-voice-call) — `Native plugin` · ★ 2 · License: MIT · Works with: DeepSeek Harness only

Lets the agent ring the human with an offer_call tool; if accepted, it synthesizes and plays speech locally via CrispASR and Qwen3-TTS (9 speakers, 2 Chinese dialects), and returns the decision if rejected.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PandaPolo/dsh-voice-call
```

</details>
