# Visão e voz

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [HyperFrames](#hyperframes-skills) — Skills e CLI para escrever vídeos como composições HTML e renderizá-los em MP4/WebM, feitos para agentes.
- [Vision bridge for text-only models](#dsh-modlens) — Transforma imagens coladas em evidências estruturadas em JSON — OCR, layout e semântica — para que modelos som…
- [AI image generation](#dsh-dsh-imagegen) — Adiciona geração de imagem a partir de texto e imagem para imagem à Web GUI do DSH via um endpoint compatível …
- [Drive ComfyUI image/video workflows](#dsh-dsh-comfyui) — Controla um servidor ComfyUI local ou remoto: ferramentas para executar workflows, inspecionar nós e editar gr…
- [Design-fidelity visual QA](#dsh-dsh-design-qa) — Permite que um modelo somente texto julgue se uma implementação corresponde ao mock de design, via uma ferrame…
- [Read replies aloud (TTS)](#dsh-dsh-speak) — Anuncia respostas finais, aprovações e perguntas com a voz natural nativa do sistema no Windows e macOS, sem c…
- [Screenshot capture into composer](#dsh-dsh-plugin-appshot) — Captura a janela ativa em primeiro plano por um atalho global e a insere diretamente no composer para consulta…
- [UI sound effects and alerts](#dsh-dsh-plugin-uisfx) — Adiciona efeitos sonoros semânticos de UI para início, sucesso e falha de tarefas, além de sinais por botão, c…
- [TTS/ASR utility toolkit](#dsh-dsh-voice) — Um kit de ferramentas de voz: síntese de fala gratuita via edge-tts, transcrição ASR compatível com OpenAI, li…
- [Unified text/vision/image-gen routing](#dsh-dsh-vision-mix) — Roteia cada requisição para a modalidade certa dentro de um único modelo Mix: texto vai para o modelo de chat,…
- [Voice dictation and read-aloud](#dsh-dsh-chatvoice) — Um ciclo de voz gratuito e completo para a Web UI: reconhecimento de fala do navegador para entrada por microf…
- [Agent-initiated voice calls](#dsh-dsh-voice-call) — Permite que o agente ligue para o humano com uma ferramenta offer_call; se aceita, sintetiza e reproduz a fala…

<a id="hyperframes-skills"></a>

### HyperFrames

[HyperFrames](https://github.com/heygen-com/hyperframes) — `Agent Skills` · ★ 51k · Licença: Apache-2.0 · Funciona com: Todos os clientes

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

<a id="dsh-modlens"></a>

### Vision bridge for text-only models

[liustack/modlens](https://github.com/liustack/modlens) — `Plugin nativo` · ★ 4.0k · Licença: MIT · Funciona com: DeepSeek Harness apenas

Transforma imagens coladas em evidências estruturadas em JSON — OCR, layout e semântica — para que modelos somente texto entendam e raciocinem sobre capturas de tela e imagens.

**Alternativas:**

- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) (★ 1.1k) — Adiciona ferramentas de pixel: perguntas, grounding, recorte, diff de pixels, cores, SVG e remoção de fundo, via cadeia gratuita sem chave.
- [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) (★ 882) — Adiciona comparação de imagens, OCR de capturas longas e reprodução de screenshot para UI, via serviço gratuito limitado a 100 imagens/dia.
- [FuzzySoul/dsh-free-vision](https://github.com/FuzzySoul/dsh-free-vision) (★ 7) — Adiciona uma GUI de configurações para escolher entre provedores de visão gratuitos (Qwen3-VL-Flash, Doubao, DeepSeek-OCR).
- [54xkeee/dsh-youreyes](https://github.com/54xkeee/dsh-youreyes) (★ 2) — Adiciona memória de evidências que sobrevive à compactação de contexto, cache por hash de conteúdo e um painel bilíngue no cliente.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:liustack/modlens
```

</details>

<a id="dsh-dsh-imagegen"></a>

### AI image generation

[dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) — `Plugin nativo` · ★ 78 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

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

[fandc520/dsh-comfyui](https://github.com/fandc520/dsh-comfyui) — `Plugin nativo` · ★ 73 · Licença: MIT · Funciona com: DeepSeek Harness apenas

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

- [PolinniZhong/dsh-omi-voice](https://github.com/PolinniZhong/dsh-omi-voice) (★ 73) — Adiciona leitura em voz alta ao toque com vozes naturais Doubao TTS (chave própria), filtrando código, tabelas e diagramas do que é lido.
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
- [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) (★ 8) — Adiciona uma notificação nativa do Windows junto com o som de conclusão, com configurações de debounce/throttle.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:XanthanL/dsh-plugin-uisfx
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

<a id="dsh-dsh-chatvoice"></a>

### Voice dictation and read-aloud

[FuzzySoul/dsh-chatvoice](https://github.com/FuzzySoul/dsh-chatvoice) — `Plugin nativo` · ★ 3 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Um ciclo de voz gratuito e completo para a Web UI: reconhecimento de fala do navegador para entrada por microfone com resultados parciais ao vivo, além de botões de leitura em voz alta e leitura automática das respostas, sem configuração e sem chave de API.

**Alternativas:**

- [Zhangbo-cn/dsh-voice-input-plugin](https://github.com/Zhangbo-cn/dsh-voice-input-plugin) (★ 5) — Adiciona ditado por pressionar-e-falar e leitura via Edge TTS que transmite enquanto o modelo gera, com pausa de eco na reprodução.
- [qishuilalala/dsh-voice-mode#dsh-voice-mode](https://github.com/qishuilalala/dsh-voice-mode/tree/main/plugin/dsh-voice-mode) — Adiciona ASR full-duplex no dispositivo, com palavra de ativação e barge-in real que interrompe a reprodução ao começar a falar.
- [PensiveFei/dsh-voice-scribe](https://github.com/PensiveFei/dsh-voice-scribe) (★ 32) — Adiciona um atalho (Alt ou Alt+Espaço) para iniciar e parar o ditado, com polimento opcional da transcrição por LLM.
- [WizisCool/dsh-ears](https://github.com/WizisCool/dsh-ears) (★ 20) — Adiciona escolha entre back-ends de reconhecimento de fala, com página de configurações nativa e polimento opcional via LLM do dsh.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:FuzzySoul/dsh-chatvoice
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
