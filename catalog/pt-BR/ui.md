# Melhorias de interface

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Extensible sidebar workbench](#dsh-dsh-better-sidebar) — Um workbench completo na barra lateral do DeepSeek Harness com renderização e edição de arquivos, terminal emb…
- [Full-screen terminal UI](#dsh-dsh-tui) — Uma interface de terminal em tela cheia no estilo Claude Code para o DeepSeek Harness, com cabeçalho pixelizad…
- [Balance and cost widget](#dsh-deepseek-balance-whale-widget) — Um widget fixo no canto da interface web do DSH mostrando saldo, uso do dia e custo por turno com preços de pi…
- [At-file composer mentions](#dsh-dsh-at-file) — Menções @arquivo estilo Codex: busque arquivos do workspace direto do compositor e anexe seu conteúdo aos prom…
- [Design preview and editing](#dsh-dsh-openpencil) — Plugin de pré-visualização e edição de designs OpenPencil para o DeepSeek Harness.
- [Inline generative UI apps](#dsh-deepseek-harness-genui) — Renderiza aplicativos de tarefa em React e TypeScript baseados em código, inline, no Canvas, em tela cheia ou …
- [Auto-resume interrupted requests](#dsh-dsh-auto-continue) — Retoma automaticamente requisições interrompidas do DSH Web enviando uma mensagem de continuação enfileirada a…
- [Turn-status indicator widget](#dsh-dsh-status-rotator) — Alterna o rótulo de status do turno entre 1059 frases bilíngues com efeito de máquina de escrever, gradiente a…
- [Smooth streaming text rendering](#dsh-dsh-smooth-stream) — Renderização de streaming fluida e rolagem suave para a interface web do DeepSeek Harness.
- [Conversation navigation rail](#dsh-dsh-chat-timeline) — Uma portagem fiel (1:1) da barra oficial de navegação lateral direita do chat web do DeepSeek: uma barra expan…
- [Searchable skill picker](#dsh-dsh-skill-picker) — Um seletor de skills no estilo WorkBuddy: um botão ao lado do compositor abre uma lista pesquisável de skills …
- [Web UI localization and tweaks](#dsh-deepseek-harness-zh-pro) — Suíte de melhorias de interface para o cliente web do DSH: locale chinês completo, estatísticas de uso em uma …
- [Live subagent run monitor](#dsh-dsh-subagent-monitor) — Um monitor ao vivo de execuções de subagentes para a interface web: um gatilho no rodapé da barra lateral e um…
- [Drag-and-drop file upload](#dsh-dsh-file-upload) — Upload de arquivos por arrastar-e-soltar ou clipe, no estilo Claude, com detecção de conteúdo, conversão de do…
- [Windows tray desktop shell](#dsh-dsh-desktop-windowos) — Um shell de desktop na bandeja do Windows para o DeepSeek Harness que instala e atualiza automaticamente seu e…
- [Composer input history](#dsh-dsh-composer-history) — Histórico de entrada estilo terminal para o compositor web: recall com as setas priorizando as bordas, restaur…
- [Reasoning-drift watchdog](#dsh-dsh-anchored-monitor) — Observa a impressão digital do raciocínio em cada bloco de pensamento e traz o modelo de volta ao foco quando …
- [Embedded terminal panel](#dsh-dsh-plugin-terminal) — Um painel de terminal multi-abas na parte inferior, construído com node-pty e xterm.js, fixado no rodapé da vi…
- [Multi-window conversation wall](#dsh-dsh-multi-chat) — Um painel de múltiplas janelas para a interface web do DSH: execute e monitore várias conversas lado a lado em…
- [Composer autocomplete and fill-ins](#dsh-opencues-integrations-dsh) — Oferece alternativas de palavras e preenchimentos disparados por sublinhado no compositor: termine uma linha c…

<a id="dsh-dsh-better-sidebar"></a>

### Extensible sidebar workbench

[omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — `Plugin nativo` · ★ 3.7k · Licença: MIT · Funciona com: DeepSeek Harness apenas

Um workbench completo na barra lateral do DeepSeek Harness com renderização e edição de arquivos, terminal embutido, integração com Git e uma visão de subagentes; plugins de terceiros podem registrar suas próprias abas nele.

**Alternativas:**

- [MichengAI/dsh-codex-ui](https://github.com/MichengAI/dsh-codex-ui) (★ 81) — Reconstrói a barra lateral, a árvore do workspace, a busca e a navegação de turnos em um layout estilo Codex, em vez de um workbench com abas.
- [Jiyr0119/dsh-workspace-explorer](https://github.com/Jiyr0119/dsh-workspace-explorer) (★ 29) — Adiciona um popup animado e de propósito único com a árvore de arquivos do workspace, com busca e arrastar arquivos direto para o compositor.
- [openAGFS/dsh-agfs](https://github.com/openAGFS/dsh-agfs) (★ 2) — Serve um aplicativo web independente de navegador de arquivos em React, além de uma ferramenta browse_files que o modelo pode chamar.
- [2nd1st/dsh-plugin-open-app](https://github.com/2nd1st/dsh-plugin-open-app) (★ 7) — Dá a cada aplicativo MCP instalado seu próprio container na barra lateral com workspace e sessão separados, além de renderização inline nos chats.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:omdsh-dev/DSH-better-sidebar
```

</details>

<a id="dsh-dsh-tui"></a>

### Full-screen terminal UI

[ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) — `Plugin nativo` · ★ 3.1k · Licença: MIT · Funciona com: DeepSeek Harness apenas

Uma interface de terminal em tela cheia no estilo Claude Code para o DeepSeek Harness, com cabeçalho pixelizado de baleia, linha de status ao vivo e expansão de pensamento em streaming.

**Alternativas:**

- [lk251066/dsh-tui-pro](https://github.com/lk251066/dsh-tui-pro) (★ 2) — Agrupa sessões por projeto de workspace e adiciona um painel de assistente persistente, além de visões estruturadas de raciocínio, ferramentas, diffs e planos.
- [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) (★ 198) — Importa temas de cores JSON/JSONC do VS Code local e adiciona seleção de texto com o mouse, além de painéis de navegação de Skills/MCP.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ccch1mneyyy/dsh-TUI
```

</details>

<a id="dsh-deepseek-balance-whale-widget"></a>

### Balance and cost widget

[MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) — `Plugin nativo` · ★ 2.7k · Licença: MIT · Funciona com: DeepSeek Harness apenas

Um widget fixo no canto da interface web do DSH mostrando saldo, uso do dia e custo por turno com preços de pico/fora de pico, bolhas de alerta editáveis, mais de 30 templates de provedores com saldo e cota por modelo, e sons ao fim das tarefas. Somente local, sem telemetria.

**Alternativas:**

- [future007s/dsh-peak-indicator](https://github.com/future007s/dsh-peak-indicator) (★ 4) — Mostra o status de pico/fora de pico diretamente no cabeçalho da sessão, com preços de tokens por modelo ao passar o mouse.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MeteorNOX/DeepSeek-Balance-Whale-Widget
```

</details>

<a id="dsh-dsh-at-file"></a>

### At-file composer mentions

[omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) — `Plugin nativo` · ★ 512 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Menções @arquivo estilo Codex: busque arquivos do workspace direto do compositor e anexe seu conteúdo aos prompts.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:omdsh-dev/dsh-at-file
```

</details>

<a id="dsh-dsh-openpencil"></a>

### Design preview and editing

[ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) — `Plugin nativo` · ★ 174 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Plugin de pré-visualização e edição de designs OpenPencil para o DeepSeek Harness.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ZSeven-W/dsh-openpencil
```

</details>

<a id="dsh-deepseek-harness-genui"></a>

### Inline generative UI apps

[pengyue-polaron/deepseek-harness-genui](https://github.com/pengyue-polaron/deepseek-harness-genui) — `Plugin nativo` · ★ 112 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Renderiza aplicativos de tarefa em React e TypeScript baseados em código, inline, no Canvas, em tela cheia ou em localhost, mantendo o estado de interação disponível para turnos posteriores do agente, com acesso a MCP e API sujeito a aprovação.

**Alternativas:**

- [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) (★ 464) — Renderiza tipos de widgets prontos — layout, gráficos, formulários, quizzes, diagramas mermaid, cenas 3D — com um loop de eventos de ação de volta ao modelo.
- [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) (★ 262) — Transmite cartões HTML interativos em sandbox diretamente no chat com pré-visualização em streaming, em vez de aplicativos React completos.
- [jiuyuechuwuhao/dsh-canvas-preview](https://github.com/jiuyuechuwuhao/dsh-canvas-preview) (★ 3) — Adiciona uma aba Canvas que pré-visualiza ao vivo artefatos HTML do workspace e os exporta localmente como PNG, JPG ou SVG.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:pengyue-polaron/deepseek-harness-genui
```

</details>

<a id="dsh-dsh-auto-continue"></a>

### Auto-resume interrupted requests

[HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) — `Plugin nativo` · ★ 103 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Retoma automaticamente requisições interrompidas do DSH Web enviando uma mensagem de continuação enfileirada após falhas de rede, timeout ou travamento do host, com classificação de erros, backoff adaptativo, texto de continuação personalizável e notificações do navegador.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:HsiangNianian/dsh-auto-continue
```

</details>

<a id="dsh-dsh-status-rotator"></a>

### Turn-status indicator widget

[01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) — `Plugin nativo` · ★ 86 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Alterna o rótulo de status do turno entre 1059 frases bilíngues com efeito de máquina de escrever, gradiente arco-íris animado, danmaku, 12 pacotes de tema alternáveis, placeholders dinâmicos e rotação do título da aba.

**Alternativas:**

- [Yuuhann1999/dsh-bloub-mood](https://github.com/Yuuhann1999/dsh-bloub-mood) (★ 16) — Substitui o favicon, o logotipo da barra lateral e o título de destaque por formas animadas de ícone de humor que seguem o estado da sessão.
- [Luaphes/dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) (★ 5) — Pisca um selo na moldura, uma contagem no título da aba e um favicon colorido conforme o status quando uma sessão precisa de atenção ou acabou de terminar.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:01Virex/dsh-status-rotator
```

</details>

<a id="dsh-dsh-smooth-stream"></a>

### Smooth streaming text rendering

[Laplace-bit/dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) — `Plugin nativo` · ★ 74 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Renderização de streaming fluida e rolagem suave para a interface web do DeepSeek Harness.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Laplace-bit/dsh-smooth-stream
```

</details>

<a id="dsh-dsh-chat-timeline"></a>

### Conversation navigation rail

[jjxjjjjiik-bot/dsh-chat-timeline](https://github.com/jjxjjjjiik-bot/dsh-chat-timeline) — `Plugin nativo` · ★ 31 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Uma portagem fiel (1:1) da barra oficial de navegação lateral direita do chat web do DeepSeek: uma barra expansível ao passar o mouse, com destaque da posição de leitura e clique para saltar entre turnos.

**Alternativas:**

- [Wine-Red/dsh-codex-timeline](https://github.com/Wine-Red/dsh-codex-timeline) (★ 8) — Adiciona pré-visualizações ao passar o mouse com métricas por turno e trechos das respostas do modelo, além de busca local na conversa.
- [liliuCourier/dsh-chat-outline](https://github.com/liliuCourier/dsh-chat-outline) (★ 8) — Adiciona um filtro por palavra-chave entre turnos e permite saltar a mesma posição para a visão de Trajetória.
- [kelearns/dsh-navigation-bar](https://github.com/kelearns/dsh-navigation-bar) (★ 7) — Usa um layout em teclas de piano com uma escada ao passar o mouse e um tooltip de pré-visualização da mensagem, em vez de uma barra simples.
- [houyanchao/dsh-timeline](https://github.com/houyanchao/dsh-timeline) (★ 37) — Reúne a barra de linha do tempo com uma biblioteca de prompts, exportação de conversas e notas rápidas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jjxjjjjiik-bot/dsh-chat-timeline
```

</details>

<a id="dsh-dsh-skill-picker"></a>

### Searchable skill picker

[a735624258/dsh-skill-picker](https://github.com/a735624258/dsh-skill-picker) — `Plugin nativo` · ★ 29 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Um seletor de skills no estilo WorkBuddy: um botão ao lado do compositor abre uma lista pesquisável de skills instaladas, e escolher uma insere o comando oficial /nome-da-skill para que ela carregue junto com a mensagem.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:a735624258/dsh-skill-picker
```

</details>

<a id="dsh-deepseek-harness-zh-pro"></a>

### Web UI localization and tweaks

[magian1127/deepseek-harness-zh_pro](https://github.com/magian1127/deepseek-harness-zh_pro) — `Plugin nativo` · ★ 28 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Suíte de melhorias de interface para o cliente web do DSH: locale chinês completo, estatísticas de uso em uma linha, expansão automática do raciocínio, largura de chat ajustável, arquivamento e exclusão de sessões, além de um interruptor opcional de injeção de prompt desativado por padrão.

**Alternativas:**

- [wlj521/dsh-ui-tweaks](https://github.com/wlj521/dsh-ui-tweaks) (★ 18) — Adiciona uma GitBar com gerenciamento de branches, diffs por arquivo e commit-e-push direto da interface de conversa.
- [AcidGr/dsh-web-mobile-fix](https://github.com/AcidGr/dsh-web-mobile-fix) (★ 8) — Corrige o layout para telas estreitas: configurações e barra lateral em tela cheia, navegação de plugins em uma linha, popups centralizados.
- [dsh-niao/dsh-niao-quick-open](https://github.com/dsh-niao/dsh-niao-quick-open) (★ 6) — Adiciona abertura do workspace em um clique (copiar caminho, revelar no Finder, abrir em um editor detectado automaticamente) e um botão de reinício forçado.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:magian1127/deepseek-harness-zh_pro
```

</details>

<a id="dsh-dsh-subagent-monitor"></a>

### Live subagent run monitor

[Mombrane/dsh-subagent-monitor](https://github.com/Mombrane/dsh-subagent-monitor) — `Plugin nativo` · ★ 25 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Um monitor ao vivo de execuções de subagentes para a interface web: um gatilho no rodapé da barra lateral e um painel fixo no canto superior direito mostram cada subagente da sessão atual em tempo real (em execução/tempo decorrido, resultados finais, indentação em árvore), com salto em um clique para a conversa filha.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Mombrane/dsh-subagent-monitor
```

</details>

<a id="dsh-dsh-file-upload"></a>

### Drag-and-drop file upload

[HongMing-Huang/dsh-file-upload](https://github.com/HongMing-Huang/dsh-file-upload) — `Plugin nativo` · ★ 24 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Upload de arquivos por arrastar-e-soltar ou clipe, no estilo Claude, com detecção de conteúdo, conversão de documentos para Markdown via Microsoft MarkItDown (com fallback em JS embutido), inserção de texto e uma ferramenta read_document para agentes.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:HongMing-Huang/dsh-file-upload
```

</details>

<a id="dsh-dsh-desktop-windowos"></a>

### Windows tray desktop shell

[RAFOLIE/dsh-desktop-windowos](https://github.com/RAFOLIE/dsh-desktop-windowos) — `Plugin nativo` · ★ 22 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Um shell de desktop na bandeja do Windows para o DeepSeek Harness que instala e atualiza automaticamente seu executável a partir dos GitHub Releases, cria atalhos de desktop para o app e a interface web, e expõe uma ferramenta desktop_launch para iniciá-lo a partir da conversa.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:RAFOLIE/dsh-desktop-windowos
```

</details>

<a id="dsh-dsh-composer-history"></a>

### Composer input history

[PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) — `Plugin nativo` · ★ 15 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Histórico de entrada estilo terminal para o compositor web: recall com as setas priorizando as bordas, restauração exata do rascunho e do cursor, histórico persistido localmente no navegador, busca reversa com Ctrl+R, trechos entre sessões e templates de prompt com variáveis.

**Alternativas:**

- [13071301808/dsh-composer-expand](https://github.com/13071301808/dsh-composer-expand) (★ 6) — Adiciona um alternador de expandir/recolher que aumenta o compositor para uma visão de escrita alta (70vh) para rascunhos longos.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-composer-history
```

</details>

<a id="dsh-dsh-anchored-monitor"></a>

### Reasoning-drift watchdog

[Aik358/dsh-anchored-monitor](https://github.com/Aik358/dsh-anchored-monitor) — `Plugin nativo` · ★ 10 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Observa a impressão digital do raciocínio em cada bloco de pensamento e traz o modelo de volta ao foco quando ele escorrega do modo concentrado 'Nós vamos / eu vou' para o modo disperso 'deixa eu'.

**Alternativas:**

- [Yuer6327/NoLetMe](https://github.com/Yuer6327/NoLetMe) (★ 8) — Mostra estatísticas ao vivo da frequência das palavras-chave 'we need' e 'let me', em vez de intervir automaticamente no modelo.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Aik358/dsh-anchored-monitor
```

</details>

<a id="dsh-dsh-plugin-terminal"></a>

### Embedded terminal panel

[siberiah2o/dsh-plugin-terminal](https://github.com/siberiah2o/dsh-plugin-terminal) — `Plugin nativo` · ★ 7 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Um painel de terminal multi-abas na parte inferior, construído com node-pty e xterm.js, fixado no rodapé da viewport e sempre exibido abaixo da caixa de entrada do compositor.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:siberiah2o/dsh-plugin-terminal
```

</details>

<a id="dsh-dsh-multi-chat"></a>

### Multi-window conversation wall

[daetz-coder/dsh-multi-chat](https://github.com/daetz-coder/dsh-multi-chat) — `Plugin nativo` · ★ 5 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Um painel de múltiplas janelas para a interface web do DSH: execute e monitore várias conversas lado a lado em uma única tela, com descoberta automática, controles por janela e um gateway LAN autenticado para acesso via celular ou tablet.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:daetz-coder/dsh-multi-chat
```

</details>

<a id="dsh-opencues-integrations-dsh"></a>

### Composer autocomplete and fill-ins

[opencues/opencues#integrations-dsh](https://github.com/opencues/opencues/tree/master/integrations/dsh) — `Plugin nativo` · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Oferece alternativas de palavras e preenchimentos disparados por sublinhado no compositor: termine uma linha com um sublinhado para que ela seja preenchida, e erros de digitação são sinalizados enquanto você digita. Usa o mesmo modelo já configurado no DSH, sem precisar de uma chave de API separada.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:opencues/opencues#path:/integrations/dsh
```

</details>
