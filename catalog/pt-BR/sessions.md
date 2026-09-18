# Sessões e mensagens

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Visual non-linear conversation map](#dsh-dsh-synapse) — Espaço de conversa visual e não linear para o DeepSeek Harness: sessões, continuações e ramificações viram um …
- [Cross-tool session import and export](#dsh-dsh-chat-import) — Importa históricos de chat com fidelidade total de 13 agentes de codificação (Claude Code, Codex, ChatGPT, Cur…
- [Conversation rewind via change ledger](#dsh-dsh-turn-rewind) — Retrocede o estado da conversa e do workspace, com base em um Change Ledger persistente.
- [Archived-session management panel](#dsh-dsh-archive-manager) — Adiciona uma página de sessões arquivadas em Settings para buscar, restaurar e excluir sessões arquivadas do D…
- [Branch-based message editing and reroll](#dsh-dsh-message-edit) — Edição de mensagens baseada em ramificações, reroll, retry e uma linha do tempo de versões.
- [One-click conversation sharing](#dsh-dsh-share) — Compartilha suas conversas com um clique.
- [Full-session message history browser](#dsh-dsh-history) — Navega por todas as mensagens enviadas na sessão atual: listagem completa do histórico ordenada do mais novo, …
- [Bookmark and tag assistant replies](#dsh-dsh-bookmarks) — Marca respostas do assistente com notas e tags; navega por todos os marcadores em um centro entre sessões e ex…
- [Cross-workspace session manager](#dsh-dsh-session-manager) — Gerenciador de sessões para a Web UI do DeepSeek Harness: exclui sessões, arquiva sessões, move sessões entre …
- [Durable task state across tools](#dsh-task-passport) — Carrega estado durável de tarefas entre DeepSeek Harness, WorkBuddy, Claude Code e Codex com checkpoints legív…

<a id="dsh-dsh-synapse"></a>

### Visual non-linear conversation map

[liangmianya/dsh-synapse](https://github.com/liangmianya/dsh-synapse) — `Plugin nativo` · ★ 407 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Espaço de conversa visual e não linear para o DeepSeek Harness: sessões, continuações e ramificações viram um mapa de conversa navegável.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:liangmianya/dsh-synapse
```

</details>

<a id="dsh-dsh-chat-import"></a>

### Cross-tool session import and export

[Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) — `Plugin nativo` · ★ 177 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Importa históricos de chat com fidelidade total de 13 agentes de codificação (Claude Code, Codex, ChatGPT, Cursor, Gemini, opencode e outros) como sessões retomáveis do DeepSeek Harness, com exportação reversa de volta ao Claude Code.

**Alternativas:**

- [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) (★ 24) — Também migra memórias, habilidades, instruções e comandos de barra de quatro fontes, com um portão de aprovação.
- [huguangyu666/dsh-plugin-session-import](https://github.com/huguangyu666/dsh-plugin-session-import) (★ 7) — Preserva chamadas de ferramentas e adiciona proteção contra sessões grandes demais e restauração de compactação do zcode.
- [kirkchinese/claude2dsh](https://github.com/kirkchinese/claude2dsh) (★ 3) — Também importa habilidades e ativos de plugin, com sincronização bidirecional de volta para o JSONL do Claude Code.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Nwflower/dsh-chat-import
```

</details>

<a id="dsh-dsh-turn-rewind"></a>

### Conversation rewind via change ledger

[Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) — `Plugin nativo` · ★ 115 · Licença: BSD-3-Clause · Funciona com: DeepSeek Harness apenas

Retrocede o estado da conversa e do workspace, com base em um Change Ledger persistente.

**Alternativas:**

- [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind) (★ 76) — Retrocede no próprio lugar sem bifurcar a sessão, com restauração opcional de arquivos a partir do disco.
- [limbo947/dsh-recall-plugin](https://github.com/limbo947/dsh-recall-plugin) (★ 33) — Adiciona um painel de confirmação com prévia de diff antes de reverter a conversa e os arquivos do workspace.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Anionex/dsh-turn-rewind
```

</details>

<a id="dsh-dsh-archive-manager"></a>

### Archived-session management panel

[MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) — `Plugin nativo` · ★ 68 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Adiciona uma página de sessões arquivadas em Settings para buscar, restaurar e excluir sessões arquivadas do DeepSeek Harness por workspace.

**Alternativas:**

- [Ultronen/dsh-archived-chats](https://github.com/Ultronen/dsh-archived-chats) (★ 23) — Adiciona backup e restauração em ZIP, lixeira protegida por snapshot, contabilidade de armazenamento e tags/notas.
- [jasonrale/dsh-archive-manager](https://github.com/jasonrale/dsh-archive-manager) (★ 6) — Permite reabrir uma sessão arquivada e continuar conversando, ou excluí-la definitivamente, com busca de mensagens.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MichengAI/dsh-archive-manager
```

</details>

<a id="dsh-dsh-message-edit"></a>

### Branch-based message editing and reroll

[Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) — `Plugin nativo` · ★ 49 · Licença: ver repo · Funciona com: DeepSeek Harness apenas

Edição de mensagens baseada em ramificações, reroll, retry e uma linha do tempo de versões.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Moeblack/dsh-message-edit
```

</details>

<a id="dsh-dsh-share"></a>

### One-click conversation sharing

[hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) — `Plugin nativo` · ★ 34 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Compartilha suas conversas com um clique.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:hellodigua/dsh-share
```

</details>

<a id="dsh-dsh-history"></a>

### Full-session message history browser

[chenproton/dsh-history](https://github.com/chenproton/dsh-history) — `Plugin nativo` · ★ 14 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Navega por todas as mensagens enviadas na sessão atual: listagem completa do histórico ordenada do mais novo, filtro de texto, cópia com um clique e salto para uma mensagem.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:chenproton/dsh-history
```

</details>

<a id="dsh-dsh-bookmarks"></a>

### Bookmark and tag assistant replies

[penguin-oo/dsh-bookmarks](https://github.com/penguin-oo/dsh-bookmarks) — `Plugin nativo` · ★ 11 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Marca respostas do assistente com notas e tags; navega por todos os marcadores em um centro entre sessões e exporta para Markdown.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:penguin-oo/dsh-bookmarks
```

</details>

<a id="dsh-dsh-session-manager"></a>

### Cross-workspace session manager

[hkkz9522/dsh-session-manager](https://github.com/hkkz9522/dsh-session-manager) — `Plugin nativo` · ★ 11 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Gerenciador de sessões para a Web UI do DeepSeek Harness: exclui sessões, arquiva sessões, move sessões entre workspaces e migra o preset de agente de uma sessão.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:hkkz9522/dsh-session-manager
```

</details>

<a id="dsh-task-passport"></a>

### Durable task state across tools

[dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) — `Plugin nativo` · ★ 10 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Carrega estado durável de tarefas entre DeepSeek Harness, WorkBuddy, Claude Code e Codex com checkpoints legíveis por máquina e bloqueio otimista.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dongsheng123132/task-passport
```

</details>
