# Visão e voz

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [HyperFrames](#hyperframes-skills) — Skills e CLI para escrever vídeos como composições HTML e renderizá-los em MP4/WebM, feitos para agentes.
- [Give Claude the ability to watch video](#claude-video) — Skill que permite ao Claude assistir a qualquer vídeo: baixa o arquivo, extrai quadros, transcreve o áudio e d…
- [Pipecat voice agent framework](#pipecat) — Framework open-source para construir agentes de voz, aplicativos multimodais e IA em tempo real, mantido pela …
- [Cinematic video shot skill](#video-shotcraft) — Skill de vídeo com IA para Claude Code e Codex que produz vídeos cinematográficos de produto com Remotion, apo…
- [GPT Image prompt library & CLI](#gpt-image2-skill) — Galeria de prompts, biblioteca de prompts de imagem, skill agêntica e CLI para geração e edição de imagens com…
- [Remotion official video skills](#remotion-dev-skills) — Pacote oficial de skills para o Remotion (vídeo programático com React), cobrindo boas práticas, legendas, int…
- [muapi generative media skills](#generative-media-skills) — 73 skills para geração multimodal de imagem, vídeo e áudio de alta qualidade via API muapi, cobrindo criativos…
- [Vision bridge for text-only models](#dsh-modlens) — Transforma imagens coladas em evidências estruturadas em JSON — OCR, layout e semântica — para que modelos som…
- [Meeting bot and transcripts](#vexa-mcp) — Bot de reunião e transcrições para Google Meet, Teams e Zoom, ao vivo ou depois, com falantes identificados; e…
- [Local video understanding](#claude-real-video-mcp) — Permite que um LLM assista a um vídeo localmente e busque em tudo que já assistiu.
- [Short-drama production skills](#drama-skills) — Coleção open-source de skills para criação de curtas dramas e drama em quadrinhos por IA: roteiros, assets de …
- [Arcads ad-video generation skills](#arcads-claude-code) — Pacote oficial de skills da API Arcads para criativos de anúncio gerados por IA: clonar anúncios, criar thumbn…
- [Natural voice conversations](#voicemode-mcp) — Conversas de voz naturais para assistentes de IA via speech-to-text e text-to-speech; exige OPENAI_API_KEY.
- [ComfyUI workflow control](#comfyui-mcp) — Servidor e plugin de Claude Code para ComfyUI: roda workflows, gera imagens e gerencia modelos e VRAM.
- [Adobe Photoshop automation](#photoshop-mcp) — 116 ferramentas para controlar o Adobe Photoshop, combinando ações de IA generativa com receitas, além de uma …
- [Gemini image generation and editing](#nanobanana-mcp-server) — Oferece geração e edição de imagens via Gemini; exige GEMINI_API_KEY.
- [Drive Google Flow video generation](#gflow-cli-mcp) — Aciona o Google Flow a partir de um agente para gerar vídeos com Veo e imagens com Imagen.
- [Glif's media-generation agent](#glif-mcp-server) — Gera imagens, vídeo e áudio com o agente de geração de mídia do Glif.
- [AI image generation](#dsh-dsh-imagegen) — Adiciona geração de imagem a partir de texto e imagem para imagem à Web GUI do DSH via um endpoint compatível …
- [Drive ComfyUI image/video workflows](#dsh-dsh-comfyui) — Controla um servidor ComfyUI local ou remoto: ferramentas para executar workflows, inspecionar nós e editar gr…
- [Design-fidelity visual QA](#dsh-dsh-design-qa) — Permite que um modelo somente texto julgue se uma implementação corresponde ao mock de design, via uma ferrame…
- [Read replies aloud (TTS)](#dsh-dsh-speak) — Anuncia respostas finais, aprovações e perguntas com a voz natural nativa do sistema no Windows e macOS, sem c…
- [Screenshot capture into composer](#dsh-dsh-plugin-appshot) — Captura a janela ativa em primeiro plano por um atalho global e a insere diretamente no composer para consulta…
- [UI sound effects and alerts](#dsh-dsh-plugin-uisfx) — Adiciona efeitos sonoros semânticos de UI para início, sucesso e falha de tarefas, além de sinais por botão, c…
- [Voice dictation and read-aloud](#dsh-dsh-chatvoice) — Um ciclo de voz gratuito e completo para a Web UI: reconhecimento de fala do navegador para entrada por microf…
- [TTS/ASR utility toolkit](#dsh-dsh-voice) — Um kit de ferramentas de voz: síntese de fala gratuita via edge-tts, transcrição ASR compatível com OpenAI, li…
- [Unified text/vision/image-gen routing](#dsh-dsh-vision-mix) — Roteia cada requisição para a modalidade certa dentro de um único modelo Mix: texto vai para o modelo de chat,…
- [Agent-initiated voice calls](#dsh-dsh-voice-call) — Permite que o agente ligue para o humano com uma ferramenta offer_call; se aceita, sintetiza e reproduz a fala…
- [On-device audio transcription](#funasr-mcp-server) — Transcreve áudio local com FunASR e SenseVoice usando inferência privada, no próprio dispositivo.
- [Part-aware 3D generation](#nova3d-mcp) — Geração de 3D estruturada e ciente de partes para agentes: GLB com partes nomeadas, URL de prévia e script de …
- [Search local screen recordings](#screenpipe-screenpipe-mcp) — Busca em gravações de tela locais, transcrições de áudio e atividade do computador capturadas pelo screenpipe.

<a id="hyperframes-skills"></a>

### HyperFrames

[HyperFrames](https://github.com/heygen-com/hyperframes) — `Agent Skills` · ★ 52k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Skills e CLI para escrever vídeos como composições HTML e renderizá-los em MP4/WebM, feitos para agentes.

<details><summary>Instalar</summary>

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

[bradautomates/claude-video](https://github.com/bradautomates/claude-video) — `Agent Skills` · ★ 17k · Licença: MIT · Funciona com: Todos os clientes

Skill que permite ao Claude assistir a qualquer vídeo: baixa o arquivo, extrai quadros, transcreve o áudio e devolve tudo para análise.

<details><summary>Instalar</summary>

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

[pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat) — `Agent Skills` · ★ 16k · Licença: BSD-2-Clause · Funciona com: Todos os clientes

Framework open-source para construir agentes de voz, aplicativos multimodais e IA em tempo real, mantido pela Daily e pela comunidade; inclui agent skills.

<details><summary>Instalar</summary>

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

[Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) — `Lista / registro` · ★ 9.2k · Licença: Apache-2.0 · Funciona com: —

Skill de vídeo com IA para Claude Code e Codex que produz vídeos cinematográficos de produto com Remotion, apoiada em 152 cartões de receita de plano e 209 previews de movimento.

<a id="gpt-image2-skill"></a>

### GPT Image prompt library & CLI

[wuyoscar/GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill) — `Agent Skills` · ★ 5.5k · Licença: MIT · Funciona com: Todos os clientes

Galeria de prompts, biblioteca de prompts de imagem, skill agêntica e CLI para geração e edição de imagens com o GPT Image 2/2.5 da OpenAI.

<details><summary>Instalar</summary>

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

[remotion-dev/skills](https://github.com/remotion-dev/skills) — `Agent Skills` · ★ 4.7k · Licença: ver repo · Funciona com: Todos os clientes

Pacote oficial de skills para o Remotion (vídeo programático com React), cobrindo boas práticas, legendas, interatividade, mapas, renderização e uso do Remotion Studio.

<details><summary>Instalar</summary>

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

[SamurAIGPT/Generative-Media-Skills](https://github.com/SamurAIGPT/Generative-Media-Skills) — `Agent Skills` · ★ 4.3k · Licença: MIT · Funciona com: Todos os clientes

73 skills para geração multimodal de imagem, vídeo e áudio de alta qualidade via API muapi, cobrindo criativos de anúncio, vídeo social, anúncios de produto e direção cinematográfica.

<details><summary>Instalar</summary>

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

[liustack/modlens](https://github.com/liustack/modlens) — `Plugin nativo` · ★ 4.0k · Licença: MIT · Funciona com: DeepSeek Harness apenas

Transforma imagens coladas em evidências estruturadas em JSON — OCR, layout e semântica — para que modelos somente texto entendam e raciocinem sobre capturas de tela e imagens.

**Alternativas:**

- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) (★ 1.1k) — Adiciona ferramentas de pixel: perguntas, grounding, recorte, diff de pixels, cores, SVG e remoção de fundo, via cadeia gratuita sem chave.
- [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) (★ 883) — Adiciona comparação de imagens, OCR de capturas longas e reprodução de screenshot para UI, via serviço gratuito limitado a 100 imagens/dia.
- [FuzzySoul/dsh-free-vision](https://github.com/FuzzySoul/dsh-free-vision) (★ 8) — Adiciona uma GUI de configurações para escolher entre provedores de visão gratuitos (Qwen3-VL-Flash, Doubao, DeepSeek-OCR).
- [54xkeee/dsh-youreyes](https://github.com/54xkeee/dsh-youreyes) (★ 2) — Adiciona memória de evidências que sobrevive à compactação de contexto, cache por hash de conteúdo e um painel bilíngue no cliente.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:liustack/modlens
```

</details>

<a id="vexa-mcp"></a>

### Meeting bot and transcripts

[Vexa](https://github.com/Vexa-ai/vexa) — `Servidor MCP` · ★ 2.8k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Bot de reunião e transcrições para Google Meet, Teams e Zoom, ao vivo ou depois, com falantes identificados; exige token de Authorization.

**Alternativas:**

- [silverstein/minutes](https://github.com/silverstein/minutes) (★ 1.5k) — Camada privada e própria de memória de conversas que grava, transcreve e busca todas as reuniões.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http vexa https://api.cloud.vexa.ai/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — Arquivo: `~/.codex/config.toml`

```toml
[mcp_servers.vexa]
url = "https://api.cloud.vexa.ai/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http vexa https://api.cloud.vexa.ai/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  vexa:
    type: streamable_http
    uri: https://api.cloud.vexa.ai/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `vexa.cordis.yml  →  dsh web --patch ./vexa.cordis.yml`

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

[HUANGCHIHHUNGLeo/claude-real-video](https://github.com/HUANGCHIHHUNGLeo/claude-real-video) — `Servidor MCP` · ★ 2.2k · Licença: MIT · Funciona com: Todos os clientes

Permite que um LLM assista a um vídeo localmente e busque em tudo que já assistiu.

**Alternativas:**

- [burningion/video-editing-mcp](https://github.com/burningion/video-editing-mcp) (★ 289) — Analisa, busca, gera e edita vídeos via Video Jungle; exige VJ_API_KEY.
- [sonpiaz/watch-cli/tree/main/mcp-server](https://github.com/sonpiaz/watch-cli/tree/main/mcp-server) — Entrega um vídeo social, com frames e transcrição já preparados, a um agente; exige chaves de API do Kyma e do Groq.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  claude-real-video:
    type: stdio
    cmd: uvx
    args: ["claude-real-video"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `claude-real-video.cordis.yml  →  dsh web --patch ./claude-real-video.cordis.yml`

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

[zenstory-ai/drama-skills](https://github.com/zenstory-ai/drama-skills) — `Agent Skills` · ★ 2.1k · Licença: MIT · Funciona com: Todos os clientes

Coleção open-source de skills para criação de curtas dramas e drama em quadrinhos por IA: roteiros, assets de personagens, storyboards, prompts de imagem/vídeo e revisão, para Claude Code e Codex.

**Alternativas:**

- [eternityspring/shuohao-skills](https://github.com/eternityspring/shuohao-skills) (★ 3.7k) — Conjunto menor e com escopo parecido para quebra de personagens, roteiro e lista de planos.

<details><summary>Instalar</summary>

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

[krusemediallc/arcads-claude-code](https://github.com/krusemediallc/arcads-claude-code) — `Agent Skills` · ★ 1.5k · Licença: MIT · Funciona com: Todos os clientes

Pacote oficial de skills da API Arcads para criativos de anúncio gerados por IA: clonar anúncios, criar thumbnails, anúncios em imagem e vídeos curtos de marketing a partir de uma biblioteca de prompts.

<details><summary>Instalar</summary>

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

[mbailey/voicemode](https://github.com/mbailey/voicemode) — `Servidor MCP` · ★ 1.4k · Licença: MIT · Funciona com: Todos os clientes

Conversas de voz naturais para assistentes de IA via speech-to-text e text-to-speech; exige OPENAI_API_KEY.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

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

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `voicemode.cordis.yml  →  dsh web --patch ./voicemode.cordis.yml`

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

[artokun/comfyui-mcp](https://github.com/artokun/comfyui-mcp) — `Servidor MCP` · ★ 759 · Licença: MIT · Funciona com: Todos os clientes

Servidor e plugin de Claude Code para ComfyUI: roda workflows, gera imagens e gerencia modelos e VRAM.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  comfyui-mcp:
    type: stdio
    cmd: npx
    args: ["-y","comfyui-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `comfyui-mcp.cordis.yml  →  dsh web --patch ./comfyui-mcp.cordis.yml`

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

[alisaitteke/photoshop-mcp](https://github.com/alisaitteke/photoshop-mcp) — `Servidor MCP` · ★ 491 · Licença: MIT · Funciona com: Todos os clientes

116 ferramentas para controlar o Adobe Photoshop, combinando ações de IA generativa com receitas, além de uma interface web própria.

**Alternativas:**

- [MCP for Adobe Premiere Pro](https://github.com/leancoderkavy/premiere-pro-mcp) (★ 277) — Servidor local-first para workflows suportados do Adobe Premiere Pro, começando com uma verificação de conexão somente leitura.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  photoshop-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@alisaitteke/photoshop-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `photoshop-mcp.cordis.yml  →  dsh web --patch ./photoshop-mcp.cordis.yml`

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

[zhongweili/nanobanana-mcp-server](https://github.com/zhongweili/nanobanana-mcp-server) — `Servidor MCP` · ★ 399 · Licença: MIT · Funciona com: Todos os clientes

Oferece geração e edição de imagens via Gemini; exige GEMINI_API_KEY.

**Alternativas:**

- [RLabs-Inc/gemini-mcp](https://github.com/RLabs-Inc/gemini-mcp) (★ 219) — Kit mais amplo do Gemini 3, com mais de 30 ferramentas: imagens, vídeo, pesquisa, TTS e execução de código; exige GEMINI_API_KEY.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

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

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `nanobanana-mcp-server.cordis.yml  →  dsh web --patch ./nanobanana-mcp-server.cordis.yml`

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

[gflow-cli](https://github.com/ffroliva/gflow-cli) — `Servidor MCP` · ★ 216 · Licença: MIT · Funciona com: Todos os clientes

Aciona o Google Flow a partir de um agente para gerar vídeos com Veo e imagens com Imagen.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  gflow-cli:
    type: stdio
    cmd: uvx
    args: ["gflow-cli"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `gflow-cli.cordis.yml  →  dsh web --patch ./gflow-cli.cordis.yml`

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

[Glif](https://github.com/glifxyz/glif-mcp-server) — `Servidor MCP` · ★ 210 · Licença: MIT · Funciona com: Todos os clientes

Gera imagens, vídeo e áudio com o agente de geração de mídia do Glif.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "glif": {
      "url": "https://glif.app/api/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "glif": {
      "serverUrl": "https://glif.app/api/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  glif:
    type: streamable_http
    uri: https://glif.app/api/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `glif.cordis.yml  →  dsh web --patch ./glif.cordis.yml`

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

[dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) — `Plugin nativo` · ★ 82 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Adiciona geração de imagem a partir de texto e imagem para imagem à Web GUI do DSH via um endpoint compatível com OpenAI configurável (gpt-image ou dall-e-3), com um cartão de configurações e um estúdio de geração na barra lateral.

**Alternativas:**

- [lsjspl/dsh-plugin-grok2api-media-tool](https://github.com/lsjspl/dsh-plugin-grok2api-media-tool) (★ 3) — Gera imagens e vídeos através da API grok2api, em vez de um endpoint compatível com OpenAI.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dickpy/dsh-imagegen
```

</details>

<a id="dsh-dsh-comfyui"></a>

### Drive ComfyUI image/video workflows

[fandc520/dsh-comfyui](https://github.com/fandc520/dsh-comfyui) — `Plugin nativo` · ★ 80 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Controla um servidor ComfyUI local ou remoto: ferramentas para executar workflows, inspecionar nós e editar grafos, com biblioteca de templates, fila ao vivo, templates SDXL e Wan 2.1, e um proxy de mídia de mesma origem.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:fandc520/dsh-comfyui
```

</details>

<a id="dsh-dsh-design-qa"></a>

### Design-fidelity visual QA

[sunxin-ai/dsh-design-qa](https://github.com/sunxin-ai/dsh-design-qa) — `Plugin nativo` · ★ 44 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Permite que um modelo somente texto julgue se uma implementação corresponde ao mock de design, via uma ferramenta deepseek_vision que usa qualquer rota de visão compatível com OpenAI, acompanhada de um benchmark com fixtures e defeitos injetados.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:sunxin-ai/dsh-design-qa
```

</details>

<a id="dsh-dsh-speak"></a>

### Read replies aloud (TTS)

[Alan2Z/dsh-speak](https://github.com/Alan2Z/dsh-speak) — `Plugin nativo` · ★ 11 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Anuncia respostas finais, aprovações e perguntas com a voz natural nativa do sistema no Windows e macOS, sem custo extra de modelo ou tokens, com anúncios de eventos opcionais e uma página de configurações bilíngue.

**Alternativas:**

- [PolinniZhong/dsh-omi-voice](https://github.com/PolinniZhong/dsh-omi-voice) (★ 74) — Adiciona leitura em voz alta ao toque com vozes naturais Doubao TTS (chave própria), filtrando código, tabelas e diagramas do que é lido.
- [1624318455/dsh-plugin-tts](https://github.com/1624318455/dsh-plugin-tts) (★ 19) — Adiciona modelos de voz personalizados RVC com instalação de pacotes de voz em um clique a partir de um registro, além do Edge TTS gratuito.
- [ppy-web/dsh-plugin-xiaomi-mimo-tts](https://github.com/ppy-web/dsh-plugin-xiaomi-mimo-tts) (★ 7) — Adiciona texto para fala Xiaomi MiMo com vozes predefinidas e design de voz personalizado.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Alan2Z/dsh-speak
```

</details>

<a id="dsh-dsh-plugin-appshot"></a>

### Screenshot capture into composer

[TaurusWood/dsh-plugin-appshot](https://github.com/TaurusWood/dsh-plugin-appshot) — `Plugin nativo` · ★ 5 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Captura a janela ativa em primeiro plano por um atalho global e a insere diretamente no composer para consultas ao agente, de forma semelhante aos Appshots do Codex.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:TaurusWood/dsh-plugin-appshot
```

</details>

<a id="dsh-dsh-plugin-uisfx"></a>

### UI sound effects and alerts

[XanthanL/dsh-plugin-uisfx](https://github.com/XanthanL/dsh-plugin-uisfx) — `Plugin nativo` · ★ 5 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Adiciona efeitos sonoros semânticos de UI para início, sucesso e falha de tarefas, além de sinais por botão, com 12 pacotes de som, preferências persistidas pelo host e um serviço ctx.uisfx que outros plugins podem usar.

**Alternativas:**

- [huguangyu666/dsh-plugin-notify](https://github.com/huguangyu666/dsh-plugin-notify) (★ 3) — Adiciona janela de confirmação de 60s em que o agente liga de volta por voz se você não responder, além de anúncios em TTS chinês.
- [AI-Galaxy-GPU/dsh-sound](https://github.com/AI-Galaxy-GPU/dsh-sound) (★ 9) — Adiciona sons configuráveis separados para conclusão de turno, aprovação, pergunta, revisão de plano, meta bloqueada e falha de tarefa.
- [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) (★ 9) — Adiciona uma notificação nativa do Windows junto com o som de conclusão, com configurações de debounce/throttle.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:XanthanL/dsh-plugin-uisfx
```

</details>

<a id="dsh-dsh-chatvoice"></a>

### Voice dictation and read-aloud

[FuzzySoul/dsh-chatvoice](https://github.com/FuzzySoul/dsh-chatvoice) — `Plugin nativo` · ★ 4 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Um ciclo de voz gratuito e completo para a Web UI: reconhecimento de fala do navegador para entrada por microfone com resultados parciais ao vivo, além de botões de leitura em voz alta e leitura automática das respostas, sem configuração e sem chave de API.

**Alternativas:**

- [Zhangbo-cn/dsh-voice-input-plugin](https://github.com/Zhangbo-cn/dsh-voice-input-plugin) (★ 5) — Adiciona ditado por pressionar-e-falar e leitura via Edge TTS que transmite enquanto o modelo gera, com pausa de eco na reprodução.
- [qishuilalala/dsh-voice-mode#dsh-voice-mode](https://github.com/qishuilalala/dsh-voice-mode/tree/main/plugin/dsh-voice-mode) — Adiciona ASR full-duplex no dispositivo, com palavra de ativação e barge-in real que interrompe a reprodução ao começar a falar.
- [PensiveFei/dsh-voice-scribe](https://github.com/PensiveFei/dsh-voice-scribe) (★ 33) — Adiciona um atalho (Alt ou Alt+Espaço) para iniciar e parar o ditado, com polimento opcional da transcrição por LLM.
- [WizisCool/dsh-ears](https://github.com/WizisCool/dsh-ears) (★ 21) — Adiciona escolha entre back-ends de reconhecimento de fala, com página de configurações nativa e polimento opcional via LLM do dsh.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:FuzzySoul/dsh-chatvoice
```

</details>

<a id="dsh-dsh-voice"></a>

### TTS/ASR utility toolkit

[STARDUSTLC666/dsh-voice](https://github.com/STARDUSTLC666/dsh-voice) — `Plugin nativo` · ★ 3 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Um kit de ferramentas de voz: síntese de fala gratuita via edge-tts, transcrição ASR compatível com OpenAI, lista de vozes, pré-visualização de vozes em lote e autoverificação de saúde.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:STARDUSTLC666/dsh-voice
```

</details>

<a id="dsh-dsh-vision-mix"></a>

### Unified text/vision/image-gen routing

[haiziyao/dsh-vision-mix](https://github.com/haiziyao/dsh-vision-mix) — `Plugin nativo` · ★ 3 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Roteia cada requisição para a modalidade certa dentro de um único modelo Mix: texto vai para o modelo de chat, imagens vão para o modelo de visão, e o agente também pode gerar ou editar imagens, tudo com histórico de chamadas por sessão.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:haiziyao/dsh-vision-mix
```

</details>

<a id="dsh-dsh-voice-call"></a>

### Agent-initiated voice calls

[PandaPolo/dsh-voice-call](https://github.com/PandaPolo/dsh-voice-call) — `Plugin nativo` · ★ 2 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Permite que o agente ligue para o humano com uma ferramenta offer_call; se aceita, sintetiza e reproduz a fala localmente via CrispASR e Qwen3-TTS (9 vozes, 2 dialetos chineses), e retorna a decisão caso seja recusada.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PandaPolo/dsh-voice-call
```

</details>

<a id="funasr-mcp-server"></a>

### On-device audio transcription

[FunASR](https://github.com/modelscope/FunASR/tree/main/examples/mcp_server) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Transcreve áudio local com FunASR e SenseVoice usando inferência privada, no próprio dispositivo.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  funasr-mcp:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/modelscope/funasr-mcp:0.1.2"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `funasr-mcp.cordis.yml  →  dsh web --patch ./funasr-mcp.cordis.yml`

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

[Nova3D](https://github.com/RareSense/Nova3D/tree/main/mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Geração de 3D estruturada e ciente de partes para agentes: GLB com partes nomeadas, URL de prévia e script de Blender; exige NOVA3D_TOKEN.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

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

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `nova3d.cordis.yml  →  dsh web --patch ./nova3d.cordis.yml`

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

[screenpipe](https://github.com/screenpipe/screenpipe/tree/main/packages/screenpipe-mcp) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Busca em gravações de tela locais, transcrições de áudio e atividade do computador capturadas pelo screenpipe.

<details><summary>Instalar</summary>

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

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

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

**OpenCode** — Arquivo: `opencode.json`

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

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  screenpipe-mcp:
    type: stdio
    cmd: npx
    args: ["-y","screenpipe-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — Arquivo: `.roo/mcp.json`

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

**DeepSeek Harness** — Arquivo: `screenpipe-mcp.cordis.yml  →  dsh web --patch ./screenpipe-mcp.cordis.yml`

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
