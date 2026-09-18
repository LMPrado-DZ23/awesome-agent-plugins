# Modelos e provedores

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [WorkBuddy model bridge](#dsh-dsh-workbuddy-connect) — Traz os modelos do aplicativo desktop WorkBuddy, já logado localmente, para o harness sem configuração adicion…
- [ChatGPT/Codex OAuth model bridge](#dsh-dsh-codex-connect) — Conecta uma conta ChatGPT e os modelos Codex da OpenAI ao harness via OAuth, com ferramentas opcionais de busc…
- [DeepSeek web session models](#dsh-dsh-deepseek-web-login) — Adiciona um provedor que usa diretamente os modelos web de chat.deepseek.com, com captura de login pelo navega…
- [Google Antigravity model provider](#dsh-dsh-agy-link) — Conecta os modelos do Google Antigravity (agy CLI) com chat em streaming para assinaturas Gemini, Claude e GPT…
- [Multi-provider coding subscriptions](#dsh-dsh-coding-subscription-oauth) — Faz login local nas assinaturas SuperGrok/Grok Build, ChatGPT Plus Codex, Kimi Code e Claude Code sem colar to…
- [Per-subagent model routing](#dsh-dsh-plugin-subagent-director) — Permite que cada subagente use seu próprio provedor e modelo de LLM por meio de modelos de papel configuráveis…
- [GitHub Copilot model adapter](#dsh-dsh-llm-github-copilot) — Adiciona o GitHub Copilot como provedor de modelos: login via OAuth device-flow, descoberta ao vivo de modelos…
- [Live model catalog and plan usage](#dsh-dsh-model-sync) — Grava listas de modelos dos provedores ao vivo nas configurações e mostra a janela de plano de 5h/7d ou o sald…
- [Weak-network model retries](#dsh-dsh-plugin-weaknet-adaptor) — Mantém as chamadas de modelo funcionando em conexões instáveis com retentativas de stream com backoff longo, c…
- [OpenAI-compatible gateway bridge](#dsh-dsh-sub2api) — Conecta um gateway sub2api para que OpenAI, Claude, Grok e Gemini sejam roteados por uma única base URL, com d…
- [Free OpenCode model access](#dsh-opencode2dsh) — Expõe os modelos gratuitos do OpenCode Zen para o harness, sem necessidade de chave de API.
- [Volcengine Ark plan routes](#dsh-ark-cli-ark-plan-api) — Registra as rotas do Volcengine Ark Agent Plan, Coding Plan e modelos pós-pagos diretamente no seletor de mode…

<a id="dsh-dsh-workbuddy-connect"></a>

### WorkBuddy model bridge

[corrinehu/dsh-workbuddy-connect](https://github.com/corrinehu/dsh-workbuddy-connect) — `Plugin nativo` · ★ 130 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Traz os modelos do aplicativo desktop WorkBuddy, já logado localmente, para o harness sem configuração adicional.

**Alternativas:**

- [dingminhua/dsh-connect-workbuddy](https://github.com/dingminhua/dsh-connect-workbuddy) (★ 26) — Adiciona entrada de imagem opcional por modelo, troca de conta e uma visão geral de créditos somente leitura com check-in diário.
- [aosi526/dsh-workbuddy-xdpool](https://github.com/aosi526/dsh-workbuddy-xdpool) (★ 9) — Mescla todas as contas WorkBuddy logadas em um único pool com failover automático, mostrando multiplicadores de crédito por modelo.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:corrinehu/dsh-workbuddy-connect
```

</details>

<a id="dsh-dsh-codex-connect"></a>

### ChatGPT/Codex OAuth model bridge

[franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) — `Plugin nativo` · ★ 113 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Conecta uma conta ChatGPT e os modelos Codex da OpenAI ao harness via OAuth, com ferramentas opcionais de busca e imagem.

**Alternativas:**

- [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) (★ 76) — Adiciona busca web por assinatura, controle de cota com reset seguro, ferramentas de imagem e um modo rápido, sem precisar de chave de API ou do Codex CLI.
- [WNJXYK/dsh-codex-oauth](https://github.com/WNJXYK/dsh-codex-oauth) (★ 13) — Adiciona geração de imagens, relatório de cota da assinatura e login OAuth via navegador ou código de dispositivo.
- [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) (★ 15) — Reaproveita um login ChatGPT já feito no Codex CLI, em vez de rodar um fluxo OAuth separado.
- [stoneface10/dsh-codex-connect-plus](https://github.com/stoneface10/dsh-codex-connect-plus) (★ 3) — Adiciona geração e edição de imagens com gpt-image-2 junto do acesso aos modelos Codex.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:franksong2702/dsh-codex-connect
```

</details>

<a id="dsh-dsh-deepseek-web-login"></a>

### DeepSeek web session models

[cv-superding/dsh-deepseek-web-login](https://github.com/cv-superding/dsh-deepseek-web-login) — `Plugin nativo` · ★ 84 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Adiciona um provedor que usa diretamente os modelos web de chat.deepseek.com, com captura de login pelo navegador, assinatura de requisições por prova de trabalho, streaming SSE e chamadas de ferramenta baseadas em prompt.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:cv-superding/dsh-deepseek-web-login
```

</details>

<a id="dsh-dsh-agy-link"></a>

### Google Antigravity model provider

[amlyczz/dsh-agy-link](https://github.com/amlyczz/dsh-agy-link) — `Plugin nativo` · ★ 70 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Conecta os modelos do Google Antigravity (agy CLI) com chat em streaming para assinaturas Gemini, Claude e GPT-OSS, cartões nativos de ferramentas, turnos de raciocínio e login OAuth do Google direto na interface.

**Alternativas:**

- [LiZhenNet/dsh-antigravity](https://github.com/LiZhenNet/dsh-antigravity) (★ 22) — Adiciona gestão explícita de cota e uma interface dedicada para seleção de modelos.
- [suntianc/dsh-antigravity-auth](https://github.com/suntianc/dsh-antigravity-auth) (★ 15) — Adiciona geração/edição de imagens, compreensão de vídeo e busca web à rota do Antigravity.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:amlyczz/dsh-agy-link
```

</details>

<a id="dsh-dsh-coding-subscription-oauth"></a>

### Multi-provider coding subscriptions

[lninghaha/dsh-coding-subscription-oauth](https://github.com/lninghaha/dsh-coding-subscription-oauth) — `Plugin nativo` · ★ 23 · Licença: ver repo · Funciona com: DeepSeek Harness apenas

Faz login local nas assinaturas SuperGrok/Grok Build, ChatGPT Plus Codex, Kimi Code e Claude Code sem colar tokens, com um gateway loopback opcional para OpenAI/Anthropic.

**Alternativas:**

- [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) (★ 371) — Também expõe as ferramentas image_generate, video_generate e x_search junto das rotas de assinatura Claude, Codex e Grok.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:lninghaha/dsh-coding-subscription-oauth
```

</details>

<a id="dsh-dsh-plugin-subagent-director"></a>

### Per-subagent model routing

[SeverusZh/dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) — `Plugin nativo` · ★ 15 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Permite que cada subagente use seu próprio provedor e modelo de LLM por meio de modelos de papel configuráveis.

**Alternativas:**

- [SnowAmberX/dsh-role-router](https://github.com/SnowAmberX/dsh-role-router) (★ 4) — Alterna automaticamente para um modelo planejador no modo de plano e expõe o esforço de raciocínio por papel na Web UI.
- [hytime/dsh-thinking-effort](https://github.com/hytime/dsh-thinking-effort) (★ 32) — Define níveis de esforço de raciocínio e padrões de subagente especificamente para modelos customizados ou de terceiros.
- [HaoyueQin/dsh-better-reasoning-effort](https://github.com/HaoyueQin/dsh-better-reasoning-effort) (★ 26) — Sugere configurações de esforço de raciocínio e modalidade de entrada por modelo, combinadas de uma base de conhecimento com rótulos de confiança.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:SeverusZh/dsh-plugin-subagent-director
```

</details>

<a id="dsh-dsh-llm-github-copilot"></a>

### GitHub Copilot model adapter

[lujianjun19/dsh-llm-github-copilot](https://github.com/lujianjun19/dsh-llm-github-copilot) — `Plugin nativo` · ★ 8 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Adiciona o GitHub Copilot como provedor de modelos: login via OAuth device-flow, descoberta ao vivo de modelos pela API do Copilot, suporte a visão para modelos com capacidade de imagem, e roteamento automático entre os protocolos Chat Completions e Responses API.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:lujianjun19/dsh-llm-github-copilot
```

</details>

<a id="dsh-dsh-model-sync"></a>

### Live model catalog and plan usage

[jiay98528-dev/dsh-model-sync](https://github.com/jiay98528-dev/dsh-model-sync) — `Plugin nativo` · ★ 3 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Grava listas de modelos dos provedores ao vivo nas configurações e mostra a janela de plano de 5h/7d ou o saldo medido do modelo da sessão atual.

**Alternativas:**

- [HOWILLMAKEIT/dsh-model-context-catalog](https://github.com/HOWILLMAKEIT/dsh-model-context-catalog) (★ 34) — Configura o tamanho da janela de contexto para modelos registrados, evitando que sessões longas sejam julgadas erroneamente como estouradas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jiay98528-dev/dsh-model-sync
```

</details>

<a id="dsh-dsh-plugin-weaknet-adaptor"></a>

### Weak-network model retries

[jiay98528-dev/dsh-plugin-weaknet-adaptor](https://github.com/jiay98528-dev/dsh-plugin-weaknet-adaptor) — `Plugin nativo` · ★ 3 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Mantém as chamadas de modelo funcionando em conexões instáveis com retentativas de stream com backoff longo, cache local de resposta para replay, reconexão automática por heartbeat e uma economia de tokens em modo degradado.

**Alternativas:**

- [HB00/dsh-llm-failover](https://github.com/HB00/dsh-llm-failover) (★ 0) — Troca automaticamente de provedor em limites de taxa ou esgotamento de cota, com um cooldown e um fallback permanente de último recurso.
- [btspoony/dsh-llm-fallbacks](https://github.com/btspoony/dsh-llm-fallbacks) (★ 20) — Aplica estratégias separadas de retentativa e fallback por papel de agente.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jiay98528-dev/dsh-plugin-weaknet-adaptor
```

</details>

<a id="dsh-dsh-sub2api"></a>

### OpenAI-compatible gateway bridge

[GodD6366/dsh-sub2api](https://github.com/GodD6366/dsh-sub2api) — `Plugin nativo` · ★ 1 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Conecta um gateway sub2api para que OpenAI, Claude, Grok e Gemini sejam roteados por uma única base URL, com descoberta de modelos por chave, consulta de uso e ferramentas de visão/imagem.

**Alternativas:**

- [cuboteam/dsh-plugin-dit](https://github.com/cuboteam/dsh-plugin-dit) (★ 1) — Instala 29 modelos OpenAI Chat Completions e 10 modelos Anthropic Messages a partir de uma única DIT_API_KEY.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:GodD6366/dsh-sub2api
```

</details>

<a id="dsh-opencode2dsh"></a>

### Free OpenCode model access

[FishBottle7/opencode2dsh](https://github.com/FishBottle7/opencode2dsh/tree/master/packages/plugin) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Expõe os modelos gratuitos do OpenCode Zen para o harness, sem necessidade de chave de API.

**Alternativas:**

- [xiaozhe7772222/dsh-opencode-zen](https://github.com/xiaozhe7772222/dsh-opencode-zen) (★ 22) — Reúne 6 modelos gratuitos com rotação de múltiplas chaves e recuo automático em limites de taxa.
- [Duskriver/dsh-opencode-go](https://github.com/Duskriver/dsh-opencode-go) (★ 15) — Adiciona descoberta ao vivo de modelos no gateway, metadados de capacidade online e roteamento ciente de sessão para o OpenCode Go.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:FishBottle7/opencode2dsh#path:/packages/plugin
```

</details>

<a id="dsh-ark-cli-ark-plan-api"></a>

### Volcengine Ark plan routes

[volcengine/ark-cli#ark-plan-api](https://github.com/volcengine/ark-cli/tree/main/dsh-plugins/ark-plan-api) — `Plugin nativo` · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Registra as rotas do Volcengine Ark Agent Plan, Coding Plan e modelos pós-pagos diretamente no seletor de modelos nativo.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add "https://github.com/volcengine/ark-cli/releases/download/dsh-plugins%2Fv0.1.0/ark-plan-api.tgz"
```

</details>
