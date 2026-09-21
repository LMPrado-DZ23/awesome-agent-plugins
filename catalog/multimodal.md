# Vision & Voice

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [HyperFrames](#hyperframes-skills) — Skills and CLI for writing videos as HTML compositions and rendering them to MP4/WebM, built for agents.
- [Give Claude the ability to watch video](#claude-video) — Skill that lets Claude watch any video: it downloads it, extracts frames, transcribes the audio, and hands it …
- [Pipecat voice agent framework](#pipecat) — Open-source framework for building voice agents, multimodal apps and realtime AI, maintained by Daily and the …
- [Cinematic video shot skill](#video-shotcraft) — AI video skill for Claude Code and Codex that produces cinematic product videos with Remotion, backed by 152 s…
- [GPT Image prompt library & CLI](#gpt-image2-skill) — Prompt gallery, image prompt library, agentic skill and CLI for OpenAI's GPT Image 2/2.5 generation and editin…
- [Remotion official video skills](#remotion-dev-skills) — Official skill pack for Remotion (programmatic video with React), covering best practices, captions, interacti…
- [muapi generative media skills](#generative-media-skills) — 73 skills for high-quality multi-modal image, video and audio generation through the muapi API, covering ad cr…
- [Vision bridge for text-only models](#dsh-modlens) — Turns pasted images into structured JSON evidence — OCR, layout, and semantics — so text-only models can under…
- [Meeting bot and transcripts](#vexa-mcp) — Meeting bot and transcripts for Google Meet, Teams, and Zoom, live or after the fact, with speakers labelled; …
- [Local video understanding](#claude-real-video-mcp) — Lets an LLM watch a video locally and search everything it has ever watched.
- [Short-drama production skills](#drama-skills) — Open-source skill collection for AI short-drama and comic-drama creation: scripts, character assets, storyboar…
- [Arcads ad-video generation skills](#arcads-claude-code) — Official Arcads API skill pack for AI-generated ad creatives: cloning ads, building thumbnails, image ads and …
- [Natural voice conversations](#voicemode-mcp) — Natural voice conversations for AI assistants via speech-to-text and text-to-speech; needs an OPENAI_API_KEY.
- [ComfyUI workflow control](#comfyui-mcp) — Server and Claude Code plugin for ComfyUI: run workflows, generate images, and manage models and VRAM.
- [Adobe Photoshop automation](#photoshop-mcp) — 116 tools for controlling Adobe Photoshop, combining generative AI actions with recipes, plus a standalone web…
- [Gemini image generation and editing](#nanobanana-mcp-server) — Provides image generation and editing capabilities via Gemini; needs a GEMINI_API_KEY.
- [Drive Google Flow video generation](#gflow-cli-mcp) — Drives Google Flow from an agent for Veo video and Imagen image generation.
- [Glif's media-generation agent](#glif-mcp-server) — Generates images, video, and audio with Glif's media-generation agent.
- [AI image generation](#dsh-dsh-imagegen) — Adds text-to-image and image-to-image generation to the DSH Web GUI through a configurable OpenAI-compatible e…
- [Drive ComfyUI image/video workflows](#dsh-dsh-comfyui) — Drives a local or remote ComfyUI server: tools to run workflows, inspect nodes, and edit graphs, with a templa…
- [Design-fidelity visual QA](#dsh-dsh-design-qa) — Lets a text-only model judge whether an implementation matches its design mock, via a deepseek_vision tool tha…
- [Read replies aloud (TTS)](#dsh-dsh-speak) — Announces final replies, approvals, and questions with the system's built-in natural voice on Windows and macO…
- [Screenshot capture into composer](#dsh-dsh-plugin-appshot) — Captures the frontmost active window via a global shortcut and mounts it directly into the composer for agent …
- [UI sound effects and alerts](#dsh-dsh-plugin-uisfx) — Adds semantic UI sound effects for task start, success, and failure, plus per-button cues, with 12 sound packs…
- [Voice dictation and read-aloud](#dsh-dsh-chatvoice) — A free voice closed loop for the Web UI: browser speech recognition for mic input with live interim results, p…
- [TTS/ASR utility toolkit](#dsh-dsh-voice) — A voice utility toolkit: free edge-tts speech synthesis, OpenAI-compatible ASR transcription, a voice list, ba…
- [Unified text/vision/image-gen routing](#dsh-dsh-vision-mix) — Routes each request to the right modality inside one Mix model: text-only goes to the chat model, images go to…
- [Agent-initiated voice calls](#dsh-dsh-voice-call) — Lets the agent ring the human with an offer_call tool; if accepted, it synthesizes and plays speech locally vi…
- [On-device audio transcription](#funasr-mcp-server) — Transcribes local audio with FunASR and SenseVoice using private, on-device inference.
- [Part-aware 3D generation](#nova3d-mcp) — Structured, part-aware 3D generation for agents: named-part GLB, preview URL, and a Blender script; needs a NO…
- [Search local screen recordings](#screenpipe-screenpipe-mcp) — Searches local screen recordings, audio transcripts, and computer activity captured by screenpipe.

<a id="hyperframes-skills"></a>

### HyperFrames

[HyperFrames](https://github.com/heygen-com/hyperframes) — `Agent Skills` · ★ 52k · License: Apache-2.0 · Works with: All clients

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

<a id="claude-video"></a>

### Give Claude the ability to watch video

[bradautomates/claude-video](https://github.com/bradautomates/claude-video) — `Agent Skills` · ★ 17k · License: MIT · Works with: All clients

Skill that lets Claude watch any video: it downloads it, extracts frames, transcribes the audio, and hands it all back for analysis.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add bradautomates/claude-video -a claude-code -g
```

**Codex CLI**

```bash
npx skills add bradautomates/claude-video -a codex -g
```

**Gemini CLI**

```bash
npx skills add bradautomates/claude-video -a gemini-cli -g
```

**Cursor**

```bash
npx skills add bradautomates/claude-video -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add bradautomates/claude-video -a github-copilot -g
```

**OpenCode**

```bash
npx skills add bradautomates/claude-video -a opencode -g
```

**Cline**

```bash
npx skills add bradautomates/claude-video -a cline -g
```

**Windsurf**

```bash
npx skills add bradautomates/claude-video -a windsurf -g
```

**Zed**

```bash
npx skills add bradautomates/claude-video -a zed -g
```

**Goose**

```bash
npx skills add bradautomates/claude-video -a goose -g
```

**Kiro**

```bash
npx skills add bradautomates/claude-video -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add bradautomates/claude-video -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add bradautomates/claude-video -a universal
```

</details>

<a id="pipecat"></a>

### Pipecat voice agent framework

[pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat) — `Agent Skills` · ★ 16k · License: BSD-2-Clause · Works with: All clients

Open-source framework for building voice agents, multimodal apps and realtime AI, maintained by Daily and the community; ships agent skills.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add pipecat-ai/pipecat -a claude-code -g
```

**Codex CLI**

```bash
npx skills add pipecat-ai/pipecat -a codex -g
```

**Gemini CLI**

```bash
npx skills add pipecat-ai/pipecat -a gemini-cli -g
```

**Cursor**

```bash
npx skills add pipecat-ai/pipecat -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add pipecat-ai/pipecat -a github-copilot -g
```

**OpenCode**

```bash
npx skills add pipecat-ai/pipecat -a opencode -g
```

**Cline**

```bash
npx skills add pipecat-ai/pipecat -a cline -g
```

**Windsurf**

```bash
npx skills add pipecat-ai/pipecat -a windsurf -g
```

**Zed**

```bash
npx skills add pipecat-ai/pipecat -a zed -g
```

**Goose**

```bash
npx skills add pipecat-ai/pipecat -a goose -g
```

**Kiro**

```bash
npx skills add pipecat-ai/pipecat -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add pipecat-ai/pipecat -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add pipecat-ai/pipecat -a universal
```

</details>

<a id="video-shotcraft"></a>

### Cinematic video shot skill

[Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) — `Curated list / registry` · ★ 9.2k · License: Apache-2.0 · Works with: —

AI video skill for Claude Code and Codex that produces cinematic product videos with Remotion, backed by 152 shot-recipe cards and 209 motion previews.

<a id="gpt-image2-skill"></a>

### GPT Image prompt library & CLI

[wuyoscar/GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill) — `Agent Skills` · ★ 5.5k · License: MIT · Works with: All clients

Prompt gallery, image prompt library, agentic skill and CLI for OpenAI's GPT Image 2/2.5 generation and editing.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a claude-code -g
```

**Codex CLI**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a codex -g
```

**Gemini CLI**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a gemini-cli -g
```

**Cursor**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a github-copilot -g
```

**OpenCode**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a opencode -g
```

**Cline**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a cline -g
```

**Windsurf**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a windsurf -g
```

**Zed**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a zed -g
```

**Goose**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a goose -g
```

**Kiro**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add wuyoscar/GPT-Image2-Skill -a universal
```

</details>

<a id="remotion-dev-skills"></a>

### Remotion official video skills

[remotion-dev/skills](https://github.com/remotion-dev/skills) — `Agent Skills` · ★ 4.7k · License: see repo · Works with: All clients

Official skill pack for Remotion (programmatic video with React), covering best practices, captions, interactivity, maps, rendering and Remotion Studio usage.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add remotion-dev/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add remotion-dev/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add remotion-dev/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add remotion-dev/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add remotion-dev/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add remotion-dev/skills -a opencode -g
```

**Cline**

```bash
npx skills add remotion-dev/skills -a cline -g
```

**Windsurf**

```bash
npx skills add remotion-dev/skills -a windsurf -g
```

**Zed**

```bash
npx skills add remotion-dev/skills -a zed -g
```

**Goose**

```bash
npx skills add remotion-dev/skills -a goose -g
```

**Kiro**

```bash
npx skills add remotion-dev/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add remotion-dev/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add remotion-dev/skills -a universal
```

</details>

<a id="generative-media-skills"></a>

### muapi generative media skills

[SamurAIGPT/Generative-Media-Skills](https://github.com/SamurAIGPT/Generative-Media-Skills) — `Agent Skills` · ★ 4.3k · License: MIT · Works with: All clients

73 skills for high-quality multi-modal image, video and audio generation through the muapi API, covering ad creatives, social video, product ads and cinematic direction.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a opencode -g
```

**Cline**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a cline -g
```

**Windsurf**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a windsurf -g
```

**Zed**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a zed -g
```

**Goose**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a goose -g
```

**Kiro**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add SamurAIGPT/Generative-Media-Skills -a universal
```

</details>

<a id="dsh-modlens"></a>

### Vision bridge for text-only models

[liustack/modlens](https://github.com/liustack/modlens) — `Native plugin` · ★ 4.0k · License: MIT · Works with: DeepSeek Harness only

Turns pasted images into structured JSON evidence — OCR, layout, and semantics — so text-only models can understand and reason about screenshots and pictures.

**Alternatives:**

- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) (★ 1.1k) — Adds pixel-level tools: Q&A, grounding, cropping, pixel diff, colors, SVG tracing, and background cutout, via a free keyless chain.
- [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) (★ 883) — Adds multi-image comparison, long-screenshot OCR, and screenshot-to-UI reproduction, via a free hosted service capped at 100 images/day.
- [FuzzySoul/dsh-free-vision](https://github.com/FuzzySoul/dsh-free-vision) (★ 8) — Adds a settings GUI to choose between free-tier vision providers (Qwen3-VL-Flash, Doubao, DeepSeek-OCR).
- [54xkeee/dsh-youreyes](https://github.com/54xkeee/dsh-youreyes) (★ 2) — Adds evidence memory that survives context compaction, a content-hash cache, and a bilingual client panel.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:liustack/modlens
```

</details>

<a id="vexa-mcp"></a>

### Meeting bot and transcripts

[Vexa](https://github.com/Vexa-ai/vexa) — `MCP server` · ★ 2.8k · License: Apache-2.0 · Works with: All clients

Meeting bot and transcripts for Google Meet, Teams, and Zoom, live or after the fact, with speakers labelled; needs an Authorization token.

**Alternatives:**

- [silverstein/minutes](https://github.com/silverstein/minutes) (★ 1.5k) — Private, self-owned conversation memory layer that records, transcribes, and searches every meeting.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http vexa https://api.cloud.vexa.ai/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — File: `~/.codex/config.toml`

```toml
[mcp_servers.vexa]
url = "https://api.cloud.vexa.ai/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http vexa https://api.cloud.vexa.ai/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "vexa": {
      "url": "https://api.cloud.vexa.ai/mcp",
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
    "vexa": {
      "type": "http",
      "url": "https://api.cloud.vexa.ai/mcp",
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
    "vexa": {
      "type": "remote",
      "url": "https://api.cloud.vexa.ai/mcp",
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
    "vexa": {
      "type": "streamableHttp",
      "url": "https://api.cloud.vexa.ai/mcp",
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
    "vexa": {
      "serverUrl": "https://api.cloud.vexa.ai/mcp",
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
    "vexa": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.cloud.vexa.ai/mcp",
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
  vexa:
    type: streamable_http
    uri: https://api.cloud.vexa.ai/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "vexa": {
      "type": "streamable-http",
      "url": "https://api.cloud.vexa.ai/mcp",
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
    "vexa": {
      "type": "streamable-http",
      "url": "https://api.cloud.vexa.ai/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `vexa.cordis.yml  →  dsh web --patch ./vexa.cordis.yml`

```yaml
- insert:
    - id: mcp-vexa
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: vexa
        transport: streamable-http
        url: https://api.cloud.vexa.ai/mcp
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="claude-real-video-mcp"></a>

### Local video understanding

[HUANGCHIHHUNGLeo/claude-real-video](https://github.com/HUANGCHIHHUNGLeo/claude-real-video) — `MCP server` · ★ 2.2k · License: MIT · Works with: All clients

Lets an LLM watch a video locally and search everything it has ever watched.

**Alternatives:**

- [burningion/video-editing-mcp](https://github.com/burningion/video-editing-mcp) (★ 289) — Analyzes, searches, generates, and edits videos via Video Jungle; needs a VJ_API_KEY.
- [sonpiaz/watch-cli/tree/main/mcp-server](https://github.com/sonpiaz/watch-cli/tree/main/mcp-server) — Hands a social video, bundled with frames and transcript, to an agent; needs Kyma and Groq API keys.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio claude-real-video -- uvx claude-real-video
```

**Codex CLI**

```bash
codex mcp add claude-real-video -- uvx claude-real-video
```

**Gemini CLI**

```bash
gemini mcp add claude-real-video uvx claude-real-video
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "claude-real-video": {
      "command": "uvx",
      "args": [
        "claude-real-video"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "claude-real-video": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "claude-real-video"
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
    "claude-real-video": {
      "type": "local",
      "command": [
        "uvx",
        "claude-real-video"
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
    "claude-real-video": {
      "command": "uvx",
      "args": [
        "claude-real-video"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "claude-real-video": {
      "command": "uvx",
      "args": [
        "claude-real-video"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "claude-real-video": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "claude-real-video"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  claude-real-video:
    type: stdio
    cmd: uvx
    args: ["claude-real-video"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "claude-real-video": {
      "command": "uvx",
      "args": [
        "claude-real-video"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "claude-real-video": {
      "command": "uvx",
      "args": [
        "claude-real-video"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `claude-real-video.cordis.yml  →  dsh web --patch ./claude-real-video.cordis.yml`

```yaml
- insert:
    - id: mcp-claude-real-video
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: claude-real-video
        transport: stdio
        command: uvx
        args: ["claude-real-video"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="drama-skills"></a>

### Short-drama production skills

[zenstory-ai/drama-skills](https://github.com/zenstory-ai/drama-skills) — `Agent Skills` · ★ 2.1k · License: MIT · Works with: All clients

Open-source skill collection for AI short-drama and comic-drama creation: scripts, character assets, storyboards, image/video prompts and review, for Claude Code and Codex.

**Alternatives:**

- [eternityspring/shuohao-skills](https://github.com/eternityspring/shuohao-skills) (★ 3.7k) — Smaller, similarly scoped skill set for character breakdown, outlining and shot lists.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add zenstory-ai/drama-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add zenstory-ai/drama-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add zenstory-ai/drama-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add zenstory-ai/drama-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add zenstory-ai/drama-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add zenstory-ai/drama-skills -a opencode -g
```

**Cline**

```bash
npx skills add zenstory-ai/drama-skills -a cline -g
```

**Windsurf**

```bash
npx skills add zenstory-ai/drama-skills -a windsurf -g
```

**Zed**

```bash
npx skills add zenstory-ai/drama-skills -a zed -g
```

**Goose**

```bash
npx skills add zenstory-ai/drama-skills -a goose -g
```

**Kiro**

```bash
npx skills add zenstory-ai/drama-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add zenstory-ai/drama-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add zenstory-ai/drama-skills -a universal
```

</details>

<a id="arcads-claude-code"></a>

### Arcads ad-video generation skills

[krusemediallc/arcads-claude-code](https://github.com/krusemediallc/arcads-claude-code) — `Agent Skills` · ★ 1.5k · License: MIT · Works with: All clients

Official Arcads API skill pack for AI-generated ad creatives: cloning ads, building thumbnails, image ads and short marketing videos from a prompting library.

<details><summary>Install</summary>

**Claude Code**

```bash
npx skills add krusemediallc/arcads-claude-code -a claude-code -g
```

**Codex CLI**

```bash
npx skills add krusemediallc/arcads-claude-code -a codex -g
```

**Gemini CLI**

```bash
npx skills add krusemediallc/arcads-claude-code -a gemini-cli -g
```

**Cursor**

```bash
npx skills add krusemediallc/arcads-claude-code -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add krusemediallc/arcads-claude-code -a github-copilot -g
```

**OpenCode**

```bash
npx skills add krusemediallc/arcads-claude-code -a opencode -g
```

**Cline**

```bash
npx skills add krusemediallc/arcads-claude-code -a cline -g
```

**Windsurf**

```bash
npx skills add krusemediallc/arcads-claude-code -a windsurf -g
```

**Zed**

```bash
npx skills add krusemediallc/arcads-claude-code -a zed -g
```

**Goose**

```bash
npx skills add krusemediallc/arcads-claude-code -a goose -g
```

**Kiro**

```bash
npx skills add krusemediallc/arcads-claude-code -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add krusemediallc/arcads-claude-code -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add krusemediallc/arcads-claude-code -a universal
```

</details>

<a id="voicemode-mcp"></a>

### Natural voice conversations

[mbailey/voicemode](https://github.com/mbailey/voicemode) — `MCP server` · ★ 1.4k · License: MIT · Works with: All clients

Natural voice conversations for AI assistants via speech-to-text and text-to-speech; needs an OPENAI_API_KEY.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio voicemode --env OPENAI_API_KEY='<OPENAI_API_KEY>' -- uvx voice-mode
```

**Codex CLI**

```bash
codex mcp add voicemode --env OPENAI_API_KEY='<OPENAI_API_KEY>' -- uvx voice-mode
```

**Gemini CLI**

```bash
gemini mcp add -e OPENAI_API_KEY='<OPENAI_API_KEY>' voicemode uvx voice-mode
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "voicemode": {
      "command": "uvx",
      "args": [
        "voice-mode"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "voicemode": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "voice-mode"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>"
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
    "voicemode": {
      "type": "local",
      "command": [
        "uvx",
        "voice-mode"
      ],
      "enabled": true,
      "environment": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "voicemode": {
      "command": "uvx",
      "args": [
        "voice-mode"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "voicemode": {
      "command": "uvx",
      "args": [
        "voice-mode"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "voicemode": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "voice-mode"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  voicemode:
    type: stdio
    cmd: uvx
    args: ["voice-mode"]
    envs:
      OPENAI_API_KEY: "<OPENAI_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "voicemode": {
      "command": "uvx",
      "args": [
        "voice-mode"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "voicemode": {
      "command": "uvx",
      "args": [
        "voice-mode"
      ],
      "env": {
        "OPENAI_API_KEY": "<OPENAI_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `voicemode.cordis.yml  →  dsh web --patch ./voicemode.cordis.yml`

```yaml
- insert:
    - id: mcp-voicemode
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: voicemode
        transport: stdio
        command: uvx
        args: ["voice-mode"]
        env: {"OPENAI_API_KEY":"<OPENAI_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="comfyui-mcp"></a>

### ComfyUI workflow control

[artokun/comfyui-mcp](https://github.com/artokun/comfyui-mcp) — `MCP server` · ★ 759 · License: MIT · Works with: All clients

Server and Claude Code plugin for ComfyUI: run workflows, generate images, and manage models and VRAM.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio comfyui-mcp -- npx -y comfyui-mcp
```

**Codex CLI**

```bash
codex mcp add comfyui-mcp -- npx -y comfyui-mcp
```

**Gemini CLI**

```bash
gemini mcp add comfyui-mcp npx -y comfyui-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "comfyui-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "comfyui-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "comfyui-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "comfyui-mcp"
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
    "comfyui-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "comfyui-mcp"
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
    "comfyui-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "comfyui-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "comfyui-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "comfyui-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "comfyui-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "comfyui-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  comfyui-mcp:
    type: stdio
    cmd: npx
    args: ["-y","comfyui-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "comfyui-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "comfyui-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "comfyui-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "comfyui-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `comfyui-mcp.cordis.yml  →  dsh web --patch ./comfyui-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-comfyui-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: comfyui-mcp
        transport: stdio
        command: npx
        args: ["-y","comfyui-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="photoshop-mcp"></a>

### Adobe Photoshop automation

[alisaitteke/photoshop-mcp](https://github.com/alisaitteke/photoshop-mcp) — `MCP server` · ★ 491 · License: MIT · Works with: All clients

116 tools for controlling Adobe Photoshop, combining generative AI actions with recipes, plus a standalone web UI.

**Alternatives:**

- [MCP for Adobe Premiere Pro](https://github.com/leancoderkavy/premiere-pro-mcp) (★ 277) — Local-first server for supported Adobe Premiere Pro workflows, starting with a read-only connection check.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio photoshop-mcp -- npx -y @alisaitteke/photoshop-mcp
```

**Codex CLI**

```bash
codex mcp add photoshop-mcp -- npx -y @alisaitteke/photoshop-mcp
```

**Gemini CLI**

```bash
gemini mcp add photoshop-mcp npx -y @alisaitteke/photoshop-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "photoshop-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@alisaitteke/photoshop-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "photoshop-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@alisaitteke/photoshop-mcp"
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
    "photoshop-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@alisaitteke/photoshop-mcp"
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
    "photoshop-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@alisaitteke/photoshop-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "photoshop-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@alisaitteke/photoshop-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "photoshop-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@alisaitteke/photoshop-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  photoshop-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@alisaitteke/photoshop-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "photoshop-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@alisaitteke/photoshop-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "photoshop-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@alisaitteke/photoshop-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `photoshop-mcp.cordis.yml  →  dsh web --patch ./photoshop-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-photoshop-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: photoshop-mcp
        transport: stdio
        command: npx
        args: ["-y","@alisaitteke/photoshop-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="nanobanana-mcp-server"></a>

### Gemini image generation and editing

[zhongweili/nanobanana-mcp-server](https://github.com/zhongweili/nanobanana-mcp-server) — `MCP server` · ★ 399 · License: MIT · Works with: All clients

Provides image generation and editing capabilities via Gemini; needs a GEMINI_API_KEY.

**Alternatives:**

- [RLabs-Inc/gemini-mcp](https://github.com/RLabs-Inc/gemini-mcp) (★ 219) — Broader Gemini 3 toolkit with 30+ tools: images, video, research, TTS, and code execution; needs a GEMINI_API_KEY.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio nanobanana-mcp-server --env GEMINI_API_KEY='<GEMINI_API_KEY>' -- uvx nanobanana-mcp-server
```

**Codex CLI**

```bash
codex mcp add nanobanana-mcp-server --env GEMINI_API_KEY='<GEMINI_API_KEY>' -- uvx nanobanana-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e GEMINI_API_KEY='<GEMINI_API_KEY>' nanobanana-mcp-server uvx nanobanana-mcp-server
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "nanobanana-mcp-server": {
      "command": "uvx",
      "args": [
        "nanobanana-mcp-server"
      ],
      "env": {
        "GEMINI_API_KEY": "<GEMINI_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "nanobanana-mcp-server": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "nanobanana-mcp-server"
      ],
      "env": {
        "GEMINI_API_KEY": "<GEMINI_API_KEY>"
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
    "nanobanana-mcp-server": {
      "type": "local",
      "command": [
        "uvx",
        "nanobanana-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "GEMINI_API_KEY": "<GEMINI_API_KEY>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "nanobanana-mcp-server": {
      "command": "uvx",
      "args": [
        "nanobanana-mcp-server"
      ],
      "env": {
        "GEMINI_API_KEY": "<GEMINI_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "nanobanana-mcp-server": {
      "command": "uvx",
      "args": [
        "nanobanana-mcp-server"
      ],
      "env": {
        "GEMINI_API_KEY": "<GEMINI_API_KEY>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "nanobanana-mcp-server": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "nanobanana-mcp-server"
      ],
      "env": {
        "GEMINI_API_KEY": "<GEMINI_API_KEY>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  nanobanana-mcp-server:
    type: stdio
    cmd: uvx
    args: ["nanobanana-mcp-server"]
    envs:
      GEMINI_API_KEY: "<GEMINI_API_KEY>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "nanobanana-mcp-server": {
      "command": "uvx",
      "args": [
        "nanobanana-mcp-server"
      ],
      "env": {
        "GEMINI_API_KEY": "<GEMINI_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "nanobanana-mcp-server": {
      "command": "uvx",
      "args": [
        "nanobanana-mcp-server"
      ],
      "env": {
        "GEMINI_API_KEY": "<GEMINI_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `nanobanana-mcp-server.cordis.yml  →  dsh web --patch ./nanobanana-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-nanobanana-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: nanobanana-mcp-server
        transport: stdio
        command: uvx
        args: ["nanobanana-mcp-server"]
        env: {"GEMINI_API_KEY":"<GEMINI_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="gflow-cli-mcp"></a>

### Drive Google Flow video generation

[gflow-cli](https://github.com/ffroliva/gflow-cli) — `MCP server` · ★ 216 · License: MIT · Works with: All clients

Drives Google Flow from an agent for Veo video and Imagen image generation.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio gflow-cli -- uvx gflow-cli
```

**Codex CLI**

```bash
codex mcp add gflow-cli -- uvx gflow-cli
```

**Gemini CLI**

```bash
gemini mcp add gflow-cli uvx gflow-cli
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "gflow-cli": {
      "command": "uvx",
      "args": [
        "gflow-cli"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "gflow-cli": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "gflow-cli"
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
    "gflow-cli": {
      "type": "local",
      "command": [
        "uvx",
        "gflow-cli"
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
    "gflow-cli": {
      "command": "uvx",
      "args": [
        "gflow-cli"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "gflow-cli": {
      "command": "uvx",
      "args": [
        "gflow-cli"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "gflow-cli": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "gflow-cli"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  gflow-cli:
    type: stdio
    cmd: uvx
    args: ["gflow-cli"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "gflow-cli": {
      "command": "uvx",
      "args": [
        "gflow-cli"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "gflow-cli": {
      "command": "uvx",
      "args": [
        "gflow-cli"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `gflow-cli.cordis.yml  →  dsh web --patch ./gflow-cli.cordis.yml`

```yaml
- insert:
    - id: mcp-gflow-cli
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: gflow-cli
        transport: stdio
        command: uvx
        args: ["gflow-cli"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="glif-mcp-server"></a>

### Glif's media-generation agent

[Glif](https://github.com/glifxyz/glif-mcp-server) — `MCP server` · ★ 210 · License: MIT · Works with: All clients

Generates images, video, and audio with Glif's media-generation agent.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http glif https://glif.app/api/mcp
```

**Codex CLI**

```bash
codex mcp add glif --url https://glif.app/api/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http glif https://glif.app/api/mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "glif": {
      "url": "https://glif.app/api/mcp"
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "glif": {
      "type": "http",
      "url": "https://glif.app/api/mcp"
    }
  }
}
```

**OpenCode** — File: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "glif": {
      "type": "remote",
      "url": "https://glif.app/api/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "glif": {
      "type": "streamableHttp",
      "url": "https://glif.app/api/mcp"
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "glif": {
      "serverUrl": "https://glif.app/api/mcp"
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "glif": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://glif.app/api/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  glif:
    type: streamable_http
    uri: https://glif.app/api/mcp
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "glif": {
      "type": "streamable-http",
      "url": "https://glif.app/api/mcp"
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "glif": {
      "type": "streamable-http",
      "url": "https://glif.app/api/mcp"
    }
  }
}
```

**DeepSeek Harness** — File: `glif.cordis.yml  →  dsh web --patch ./glif.cordis.yml`

```yaml
- insert:
    - id: mcp-glif
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: glif
        transport: streamable-http
        url: https://glif.app/api/mcp
```

</details>

<a id="dsh-dsh-imagegen"></a>

### AI image generation

[dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) — `Native plugin` · ★ 82 · License: Apache-2.0 · Works with: DeepSeek Harness only

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

[fandc520/dsh-comfyui](https://github.com/fandc520/dsh-comfyui) — `Native plugin` · ★ 80 · License: MIT · Works with: DeepSeek Harness only

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

- [PolinniZhong/dsh-omi-voice](https://github.com/PolinniZhong/dsh-omi-voice) (★ 74) — Adds tap-to-read-aloud with natural Doubao TTS voices (bring your own key), filtering out code, tables, and diagrams from what gets read.
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
- [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) (★ 9) — Adds a native Windows notification alongside the completion sound, with debounce/throttle settings.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:XanthanL/dsh-plugin-uisfx
```

</details>

<a id="dsh-dsh-chatvoice"></a>

### Voice dictation and read-aloud

[FuzzySoul/dsh-chatvoice](https://github.com/FuzzySoul/dsh-chatvoice) — `Native plugin` · ★ 4 · License: MIT · Works with: DeepSeek Harness only

A free voice closed loop for the Web UI: browser speech recognition for mic input with live interim results, plus read-aloud speaker buttons and auto-read for assistant replies, with zero configuration and no API key.

**Alternatives:**

- [Zhangbo-cn/dsh-voice-input-plugin](https://github.com/Zhangbo-cn/dsh-voice-input-plugin) (★ 5) — Adds hold-to-talk dictation and Edge TTS reply reading that streams while the model generates, with echo-pause during playback.
- [qishuilalala/dsh-voice-mode#dsh-voice-mode](https://github.com/qishuilalala/dsh-voice-mode/tree/main/plugin/dsh-voice-mode) — Adds full-duplex, on-device streaming ASR with wake-word detection and true barge-in that interrupts playback when you start speaking.
- [PensiveFei/dsh-voice-scribe](https://github.com/PensiveFei/dsh-voice-scribe) (★ 33) — Adds a hotkey (Alt or Alt+Space) to start and stop dictation, with optional LLM polish of the transcript.
- [WizisCool/dsh-ears](https://github.com/WizisCool/dsh-ears) (★ 21) — Adds a choice of speech-recognition backends with a native settings page and optional polish through dsh's own LLM routes.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:FuzzySoul/dsh-chatvoice
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

<a id="funasr-mcp-server"></a>

### On-device audio transcription

[FunASR](https://github.com/modelscope/FunASR/tree/main/examples/mcp_server) — `MCP server` · License: MIT · Works with: All clients

Transcribes local audio with FunASR and SenseVoice using private, on-device inference.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio funasr-mcp -- docker run -i --rm ghcr.io/modelscope/funasr-mcp:0.1.2
```

**Codex CLI**

```bash
codex mcp add funasr-mcp -- docker run -i --rm ghcr.io/modelscope/funasr-mcp:0.1.2
```

**Gemini CLI**

```bash
gemini mcp add funasr-mcp docker run -i --rm ghcr.io/modelscope/funasr-mcp:0.1.2
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "funasr-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/modelscope/funasr-mcp:0.1.2"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "funasr-mcp": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/modelscope/funasr-mcp:0.1.2"
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
    "funasr-mcp": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/modelscope/funasr-mcp:0.1.2"
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
    "funasr-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/modelscope/funasr-mcp:0.1.2"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "funasr-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/modelscope/funasr-mcp:0.1.2"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "funasr-mcp": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/modelscope/funasr-mcp:0.1.2"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  funasr-mcp:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/modelscope/funasr-mcp:0.1.2"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "funasr-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/modelscope/funasr-mcp:0.1.2"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "funasr-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/modelscope/funasr-mcp:0.1.2"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `funasr-mcp.cordis.yml  →  dsh web --patch ./funasr-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-funasr-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: funasr-mcp
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/modelscope/funasr-mcp:0.1.2"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="nova3d-mcp"></a>

### Part-aware 3D generation

[Nova3D](https://github.com/RareSense/Nova3D/tree/main/mcp) — `MCP server` · License: MIT · Works with: All clients

Structured, part-aware 3D generation for agents: named-part GLB, preview URL, and a Blender script; needs a NOVA3D_TOKEN.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio nova3d --env NOVA3D_TOKEN='<NOVA3D_TOKEN>' -- uvx nova3d-mcp
```

**Codex CLI**

```bash
codex mcp add nova3d --env NOVA3D_TOKEN='<NOVA3D_TOKEN>' -- uvx nova3d-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e NOVA3D_TOKEN='<NOVA3D_TOKEN>' nova3d uvx nova3d-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "nova3d": {
      "command": "uvx",
      "args": [
        "nova3d-mcp"
      ],
      "env": {
        "NOVA3D_TOKEN": "<NOVA3D_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "nova3d": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "nova3d-mcp"
      ],
      "env": {
        "NOVA3D_TOKEN": "<NOVA3D_TOKEN>"
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
    "nova3d": {
      "type": "local",
      "command": [
        "uvx",
        "nova3d-mcp"
      ],
      "enabled": true,
      "environment": {
        "NOVA3D_TOKEN": "<NOVA3D_TOKEN>"
      }
    }
  }
}
```

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "nova3d": {
      "command": "uvx",
      "args": [
        "nova3d-mcp"
      ],
      "env": {
        "NOVA3D_TOKEN": "<NOVA3D_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "nova3d": {
      "command": "uvx",
      "args": [
        "nova3d-mcp"
      ],
      "env": {
        "NOVA3D_TOKEN": "<NOVA3D_TOKEN>"
      }
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "nova3d": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "nova3d-mcp"
      ],
      "env": {
        "NOVA3D_TOKEN": "<NOVA3D_TOKEN>"
      }
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  nova3d:
    type: stdio
    cmd: uvx
    args: ["nova3d-mcp"]
    envs:
      NOVA3D_TOKEN: "<NOVA3D_TOKEN>"
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "nova3d": {
      "command": "uvx",
      "args": [
        "nova3d-mcp"
      ],
      "env": {
        "NOVA3D_TOKEN": "<NOVA3D_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "nova3d": {
      "command": "uvx",
      "args": [
        "nova3d-mcp"
      ],
      "env": {
        "NOVA3D_TOKEN": "<NOVA3D_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — File: `nova3d.cordis.yml  →  dsh web --patch ./nova3d.cordis.yml`

```yaml
- insert:
    - id: mcp-nova3d
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: nova3d
        transport: stdio
        command: uvx
        args: ["nova3d-mcp"]
        env: {"NOVA3D_TOKEN":"<NOVA3D_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="screenpipe-screenpipe-mcp"></a>

### Search local screen recordings

[screenpipe](https://github.com/screenpipe/screenpipe/tree/main/packages/screenpipe-mcp) — `MCP server` · License: see repo · Works with: All clients

Searches local screen recordings, audio transcripts, and computer activity captured by screenpipe.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport stdio screenpipe-mcp -- npx -y screenpipe-mcp
```

**Codex CLI**

```bash
codex mcp add screenpipe-mcp -- npx -y screenpipe-mcp
```

**Gemini CLI**

```bash
gemini mcp add screenpipe-mcp npx -y screenpipe-mcp
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "screenpipe-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "screenpipe-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — File: `.vscode/mcp.json`

```json
{
  "servers": {
    "screenpipe-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "screenpipe-mcp"
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
    "screenpipe-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "screenpipe-mcp"
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
    "screenpipe-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "screenpipe-mcp"
      ]
    }
  }
}
```

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "screenpipe-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "screenpipe-mcp"
      ]
    }
  }
}
```

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "screenpipe-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "screenpipe-mcp"
      ]
    }
  }
}
```

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  screenpipe-mcp:
    type: stdio
    cmd: npx
    args: ["-y","screenpipe-mcp"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "screenpipe-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "screenpipe-mcp"
      ]
    }
  }
}
```

**Roo Code** — File: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "screenpipe-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "screenpipe-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — File: `screenpipe-mcp.cordis.yml  →  dsh web --patch ./screenpipe-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-screenpipe-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: screenpipe-mcp
        transport: stdio
        command: npx
        args: ["-y","screenpipe-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>
