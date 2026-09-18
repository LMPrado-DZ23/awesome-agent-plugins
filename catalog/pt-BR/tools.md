# Ferramentas e capacidades

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Desktop Commander](#desktop-commander) — Controle de terminal, gestão de processos longos, busca no sistema de arquivos e edição de arquivos por diff p…
- [Paid API catalog for agents](#dsh-treg) — Catálogo de ferramentas para agentes: pesquisa cerca de 2.600 endpoints externos (SEO/SERP, backlinks, social,…
- [AI database connection and SQL](#dsh-dsh-data-agent) — Permite que o agente se conecte a bancos de dados e escreva consultas SQL em seu nome.
- [Backup and migrate DSH config](#dsh-dsh-config-manager) — Faz backup, exporta, importa e migra toda a config do DSH: definições, plugins, MCP, skills, workspaces. Segre…
- [Manage multiple SSH workspaces](#dsh-dsh-remote-flymysql) — Gerencia vários hosts SSH como workspaces: escolha um workspace local ou remoto no fluxo Add-workspace, espelh…
- [Deep-read books and articles](#dsh-dsh-deepread) — Lê livros e artigos em profundidade em cinco modos (rápido, profundo, mapa de conhecimento, Feynman, livro com…
- [Accessibility-first computer use](#dsh-dsh-computer-use) — Uso de computador para macOS baseado em acessibilidade: faz observações atualizadas antes de agir, rejeita est…
- [Academic writing polish guard](#dsh-dsh-plugin-writing-guard) — Guarda de escrita acadêmica bilíngue (EN/ZH): remove escrita defensiva de estilo IA, protege evidências cientí…
- [Hash-anchored file editing](#dsh-dsh-better-edit) — Ferramentas read / edit / batch_edit / undo_last_edit ancoradas em hash: cada linha recebe um hash de conteúdo…
- [Blender 3D production plugin](#dsh-blender) — Plugin de produção 3D para Blender com 30 skills de modelagem/reconstrução, 13 ferramentas em tempo de execuçã…
- [Cross-platform academic search](#dsh-dsh-ai4scholar) — Busca acadêmica AI4Scholar: 38 ferramentas sobre Semantic Scholar, PubMed, Google Scholar, arXiv, bioRxiv/medR…
- [Two-way Codex-DSH skill sync](#dsh-dsh-codex-sync) — Ponte bidirecional entre Codex e DSH: importa skills de ~/.codex/skills, importa sessões com anexo de workspac…
- [Cross-shell terminal tool](#dsh-dsh-bash-terminal) — Uma única ferramenta de shell cobrindo PowerShell, Git Bash e WSL no Windows, além de um terminal PTY interati…
- [Language server actions](#dsh-dsh-lsp-actions) — Superfície de ações LSP para o DSH: diagnósticos, formatação, autocompletar, ações de código, símbolos, ajuda …
- [Zotero evidence store for agents](#dsh-dsh-zotero) — Usa o Zotero como repositório de evidências para agentes: pesquisa sua biblioteca, inspeciona metadados e nota…
- [Git-based session rewind](#dsh-dsh-checkpoint-rewind) — Um /rewind ao estilo Claude Code para o DeepSeek Harness: tira snapshots do workspace via git antes de cada fe…
- [HarmonyOS device automation](#dsh-dsh-hdc-bridge) — Ponte para dispositivos HarmonyOS: um loop de automação hdc para captura de tela/instalação/log/crash/UI com u…
- [One-click prompt optimizer](#dsh-oss-prompt-optimizer) — Otimiza uma instrução bruta em um prompt profissional com um clique: três estilos de saída, perfil de papel/ta…
- [Connect DSH to OOMOL apps](#dsh-dsh-oomol) — Conecta o DeepSeek Harness a aplicativos e serviços gerenciados pela OOMOL, com descoberta e execução progress…
- [MiniMax multimodal bridge](#dsh-dsh-mmx-bridge) — Uma única ferramenta mmx_bridge cobrindo compreensão/geração de imagens da MiniMax, vídeo, TTS, música, capas,…
- [Web-novel writing engine](#dsh-dsh-tool-writing) — Motor de escrita de web-novels para o DeepSeek Harness: rascunho, esboço e brainstorming em paralelo com chave…
- [Auxiliary model routing tools](#dsh-dsh-auxiliary) — Fornece rotas de modelo dedicadas, ferramentas e orientações de sistema para visão, compactação, revisões, sub…
- [Deterministic code graph tool](#dsh-dsh-tool-lens) — Ferramenta determinística de grafo de código AST e inteligência de arquitetura para hierarquias de chamadas, r…
- [Export chats as styled notes](#dsh-notes-dsh-plugin) — Exporta conversas do DSH como imagens PNG no estilo Smartisan Notes, ou cria e atualiza notas em Markdown em u…
- [Filesystem (reference)](#mcp-filesystem) — Servidor de referência para ler, escrever, buscar e mover arquivos, restrito aos diretórios passados como argu…
- [Hacker News feeds and search](#dsh-hn-cli-hacker-news) — Ferramentas do Hacker News para feeds, threads de discussão, busca e perfis de usuário.
- [MCP server config manager](#dsh-dsh-plugin-hub-packages-dsh-mcp-manager) — Gerenciador de servidores MCP (stdio / streamable-http) com níveis de config por projeto e global: o MCP do pr…

<a id="desktop-commander"></a>

### Desktop Commander

[Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP) — `Servidor MCP` · ★ 9.6k · Licença: MIT · Funciona com: Todos os clientes

Controle de terminal, gestão de processos longos, busca no sistema de arquivos e edição de arquivos por diff para agentes.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio desktop-commander -- npx -y @wonderwhy-er/desktop-commander@latest
```

**Codex CLI**

```bash
codex mcp add desktop-commander -- npx -y @wonderwhy-er/desktop-commander@latest
```

**Gemini CLI**

```bash
gemini mcp add desktop-commander npx -y @wonderwhy-er/desktop-commander@latest
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "desktop-commander": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
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
    "desktop-commander": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
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
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "desktop-commander": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  desktop-commander:
    type: stdio
    cmd: npx
    args: ["-y","@wonderwhy-er/desktop-commander@latest"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": [
        "-y",
        "@wonderwhy-er/desktop-commander@latest"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `desktop-commander.cordis.yml  →  dsh web --patch ./desktop-commander.cordis.yml`

```yaml
- insert:
    - id: mcp-desktop-commander
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: desktop-commander
        transport: stdio
        command: npx
        args: ["-y","@wonderwhy-er/desktop-commander@latest"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-treg"></a>

### Paid API catalog for agents

[superdesigndev/treg](https://github.com/superdesigndev/treg) — `Plugin nativo` · ★ 1.6k · Licença: ver repo · Funciona com: DeepSeek Harness apenas

Catálogo de ferramentas para agentes: pesquisa cerca de 2.600 endpoints externos (SEO/SERP, backlinks, social, enriquecimento de pessoas/empresas, anúncios, scraping) pela tarefa, lê parâmetros e preço, e chama com a credencial injetada no servidor.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:superdesigndev/treg
```

</details>

<a id="dsh-dsh-data-agent"></a>

### AI database connection and SQL

[omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) — `Plugin nativo` · ★ 194 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Permite que o agente se conecte a bancos de dados e escreva consultas SQL em seu nome.

**Alternativas:**

- [STARDUSTLC666/dsh-sql](https://github.com/STARDUSTLC666/dsh-sql) (★ 8) — Adiciona proteção somente leitura, limites de linhas, saída CSV/JSON e escrita com aprovação para SQLite, MySQL e PostgreSQL

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:omdsh-dev/dsh-data-agent
```

</details>

<a id="dsh-dsh-config-manager"></a>

### Backup and migrate DSH config

[xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) — `Plugin nativo` · ★ 116 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Faz backup, exporta, importa e migra toda a config do DSH: definições, plugins, MCP, skills, workspaces. Segredos ficam excluídos por padrão ou cifrados em AES-256-GCM se ativado. Importações mostram prévia com rollback; perfis guardam várias config; sync remota via repo Git.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xiajiajun516/dsh-config-manager
```

</details>

<a id="dsh-dsh-remote-flymysql"></a>

### Manage multiple SSH workspaces

[flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) — `Plugin nativo` · ★ 85 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Gerencia vários hosts SSH como workspaces: escolha um workspace local ou remoto no fluxo Add-workspace, espelhe um workspace remoto numa pasta local real e opere-o com ferramentas rw_*; um modal centralizado preenche / para caminhos remotos com autocompletar de diretórios.

**Alternativas:**

- [caoyiwei850/dsh-ssh-ops](https://github.com/caoyiwei850/dsh-ssh-ops) (★ 20) — Adiciona um terminal de operações SSH que controla um servidor a partir da conversa, com um terminal xterm.js interativo ao lado

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:flymysql/dsh-remote
```

</details>

<a id="dsh-dsh-deepread"></a>

### Deep-read books and articles

[xiehuan123/dsh-deepread](https://github.com/xiehuan123/dsh-deepread) — `Plugin nativo` · ★ 53 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Lê livros e artigos em profundidade em cinco modos (rápido, profundo, mapa de conhecimento, Feynman, livro completo), com relatórios de afirmação-evidência-dado, mapas Mermaid/XMind, comparação em lote, pré-checagem de orçamento e exportação MD/HTML de URLs, arquivos ou texto.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xiehuan123/dsh-deepread
```

</details>

<a id="dsh-dsh-computer-use"></a>

### Accessibility-first computer use

[Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) — `Plugin nativo` · ★ 46 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Uso de computador para macOS baseado em acessibilidade: faz observações atualizadas antes de agir, rejeita estados desatualizados, restringe permissões e garante entradas seguras.

**Alternativas:**

- [mrpulor-gh/dsh-nuphus-mcp](https://github.com/mrpulor-gh/dsh-nuphus-mcp) (★ 4) — Cobre automação de desktop e navegador (38 ferramentas) com PaddleOCR e navegação Chrome CDP, sem se limitar ao macOS

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Anionex/dsh-computer-use
```

</details>

<a id="dsh-dsh-plugin-writing-guard"></a>

### Academic writing polish guard

[xmutfyh/dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) — `Plugin nativo` · ★ 40 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Guarda de escrita acadêmica bilíngue (EN/ZH): remove escrita defensiva de estilo IA, protege evidências científicas (números, citações, força das afirmações, escopo) ao polir, e calibra para uma revista alvo. Regex local determinístico, sem rede ou LLM, com auditoria automática.

**Alternativas:**

- [863683348/dsh-plugin-academic-writing](https://github.com/863683348/dsh-plugin-academic-writing) (★ 2) — Adiciona geração de esqueleto de artigo, título e resumo, formatação de citações em vários estilos e uma checklist pré-submissão

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xmutfyh/dsh-plugin-writing-guard
```

</details>

<a id="dsh-dsh-better-edit"></a>

### Hash-anchored file editing

[Rianico/dsh-better-edit](https://github.com/Rianico/dsh-better-edit) — `Plugin nativo` · ★ 33 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Ferramentas read / edit / batch_edit / undo_last_edit ancoradas em hash: cada linha recebe um hash de conteúdo único de 3 caracteres, as edições miram hashes em vez de números de linha, e a verificação do estado servido rejeita intervalos desatualizados com novas âncoras.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Rianico/dsh-better-edit
```

</details>

<a id="dsh-blender"></a>

### Blender 3D production plugin

[CheshireJCat/blender](https://github.com/CheshireJCat/blender) — `Plugin nativo` · ★ 31 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Plugin de produção 3D para Blender com 30 skills de modelagem/reconstrução, 13 ferramentas em tempo de execução e 26 auxiliares determinísticos para ajuste de referência, renderização, validação, animação e exportação portável; instalável como dsh-blender.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:CheshireJCat/blender
```

</details>

<a id="dsh-dsh-ai4scholar"></a>

### Cross-platform academic search

[literaf/dsh-ai4scholar](https://github.com/literaf/dsh-ai4scholar) — `Plugin nativo` · ★ 26 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Busca acadêmica AI4Scholar: 38 ferramentas sobre Semantic Scholar, PubMed, Google Scholar, arXiv, bioRxiv/medRxiv e DOI, cobrindo busca, grafos de citação, autores, recomendações, PDF em fatias, auto-citação e figuras, com busca sem duplicatas e créditos por chamada.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:literaf/dsh-ai4scholar
```

</details>

<a id="dsh-dsh-codex-sync"></a>

### Two-way Codex-DSH skill sync

[Walvez/dsh-codex-sync](https://github.com/Walvez/dsh-codex-sync) — `Plugin nativo` · ★ 26 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Ponte bidirecional entre Codex e DSH: importa skills de ~/.codex/skills, importa sessões com anexo de workspace, espelha em tempo real os servidores MCP (mcp_servers) e instala um instalador MCP reverso do lado do Codex para a outra direção.

**Alternativas:**

- [STARDUSTLC666/dsh-codex-port](https://github.com/STARDUSTLC666/dsh-codex-port) (★ 9) — Porta em lote os plugins oficiais do Codex para skills do DSH (186 plugins, 583 skills, 577 com sucesso) em vez de sync ao vivo

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Walvez/dsh-codex-sync
```

</details>

<a id="dsh-dsh-bash-terminal"></a>

### Cross-shell terminal tool

[MAXeaglet/dsh-bash-terminal](https://github.com/MAXeaglet/dsh-bash-terminal) — `Plugin nativo` · ★ 20 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Uma única ferramenta de shell cobrindo PowerShell, Git Bash e WSL no Windows, além de um terminal PTY interativo; o terminal padrão é escolhido nas configurações do DSH.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MAXeaglet/dsh-bash-terminal
```

</details>

<a id="dsh-dsh-lsp-actions"></a>

### Language server actions

[PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) — `Plugin nativo` · ★ 20 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Superfície de ações LSP para o DSH: diagnósticos, formatação, autocompletar, ações de código, símbolos, ajuda de assinatura, inlay hints e renomeação, todos apoiados por language servers reais.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-lsp-actions
```

</details>

<a id="dsh-dsh-zotero"></a>

### Zotero evidence store for agents

[Vncntvx/dsh-zotero](https://github.com/Vncntvx/dsh-zotero) — `Plugin nativo` · ★ 20 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Usa o Zotero como repositório de evidências para agentes: pesquisa sua biblioteca, inspeciona metadados e notas, recupera trechos de evidência, abre os PDFs de origem e gera citações e bibliografias.

**Alternativas:**

- [STARDUSTLC666/dsh-cite](https://github.com/STARDUSTLC666/dsh-cite) (★ 2) — Funciona sem biblioteca Zotero: busca exata por DOI, pesquisa no Crossref, citações em vários estilos, BibTeX e validação de DOI

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Vncntvx/dsh-zotero
```

</details>

<a id="dsh-dsh-checkpoint-rewind"></a>

### Git-based session rewind

[PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) — `Plugin nativo` · ★ 18 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Um /rewind ao estilo Claude Code para o DeepSeek Harness: tira snapshots do workspace via git antes de cada ferramenta que altera arquivos, bifurca a sessão a cada turno e restaura arquivos ao bifurcar de volta a um checkpoint com um comando.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-checkpoint-rewind
```

</details>

<a id="dsh-dsh-hdc-bridge"></a>

### HarmonyOS device automation

[1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) — `Plugin nativo` · ★ 18 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Ponte para dispositivos HarmonyOS: um loop de automação hdc para captura de tela/instalação/log/crash/UI com uma ferramenta read_image, conhecimento de API versionado com prioridade oficial (SDK .d.ts e docs empacotados) e uma esteira de build/assinatura/lint via DevEco CLI.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:1na-ko/dsh-hdc-bridge
```

</details>

<a id="dsh-oss-prompt-optimizer"></a>

### One-click prompt optimizer

[seven282/oss-prompt-optimizer](https://github.com/seven282/oss-prompt-optimizer) — `Plugin nativo` · ★ 16 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Otimiza uma instrução bruta em um prompt profissional com um clique: três estilos de saída, perfil de papel/tarefa/objetivo, aprendizado auto-iterativo via memória de sessão, um comando /template para 21 subcenários sem modelo, e um controle de otimizar/desfazer.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:seven282/oss-prompt-optimizer
```

</details>

<a id="dsh-dsh-oomol"></a>

### Connect DSH to OOMOL apps

[oomol-lab/dsh-oomol](https://github.com/oomol-lab/dsh-oomol) — `Plugin nativo` · ★ 12 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Conecta o DeepSeek Harness a aplicativos e serviços gerenciados pela OOMOL, com descoberta e execução progressiva de Connector Actions, além de um painel no próprio app para gerenciar conexões de Provider.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:oomol-lab/dsh-oomol
```

</details>

<a id="dsh-dsh-mmx-bridge"></a>

### MiniMax multimodal bridge

[welsione/dsh-mmx-bridge](https://github.com/welsione/dsh-mmx-bridge) — `Plugin nativo` · ★ 10 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Uma única ferramenta mmx_bridge cobrindo compreensão/geração de imagens da MiniMax, vídeo, TTS, música, capas, busca na web e cota, com substituição opcional de web_search/read_image e players e prévias de imagem embutidos na interface web.

**Alternativas:**

- [SPYQWER1/dsh-codex-tools](https://github.com/SPYQWER1/dsh-codex-tools) (★ 4) — Reaproveita seu login OAuth existente do ChatGPT em vez de uma chave MiniMax, para as ferramentas web_search, image_gen e image_vision

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:welsione/dsh-mmx-bridge
```

</details>

<a id="dsh-dsh-tool-writing"></a>

### Web-novel writing engine

[x2802490130-prog/dsh-tool-writing](https://github.com/x2802490130-prog/dsh-tool-writing) — `Plugin nativo` · ★ 10 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Motor de escrita de web-novels para o DeepSeek Harness: rascunho, esboço e brainstorming em paralelo com chave DeepSeek separada, gestão de lore e pistas, recuperação vetorial semântica, biblioteca de corpus, livro-razão de uso, revisão mecânica e plano de serialização.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:x2802490130-prog/dsh-tool-writing
```

</details>

<a id="dsh-dsh-auxiliary"></a>

### Auxiliary model routing tools

[dsh-plugins/dsh-auxiliary](https://github.com/dsh-plugins/dsh-auxiliary) — `Plugin nativo` · ★ 9 · Licença: LGPL-3.0 · Funciona com: DeepSeek Harness apenas

Fornece rotas de modelo dedicadas, ferramentas e orientações de sistema para visão, compactação, revisões, subagentes, títulos e geração de imagens.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dsh-plugins/dsh-auxiliary
```

</details>

<a id="dsh-dsh-tool-lens"></a>

### Deterministic code graph tool

[trench-xinxin/dsh-tool-lens](https://github.com/trench-xinxin/dsh-tool-lens) — `Plugin nativo` · ★ 5 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Ferramenta determinística de grafo de código AST e inteligência de arquitetura para hierarquias de chamadas, raio de impacto, dependências circulares, fatias de domínio e contratos de API full-stack.

**Alternativas:**

- [wulun811/LiuHe#bundle](https://github.com/wulun811/LiuHe/tree/master/malong/dsh/bundle) — Adiciona 44 ferramentas de edição (repo_map, busca de símbolos, edit_batch com jornal de undo) além da análise de grafo de código

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:trench-xinxin/dsh-tool-lens
```

</details>

<a id="dsh-notes-dsh-plugin"></a>

### Export chats as styled notes

[zhaoolee/notes#dsh-plugin](https://github.com/zhaoolee/notes/tree/main/dsh-plugin) — `Plugin nativo` · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Exporta conversas do DSH como imagens PNG no estilo Smartisan Notes, ou cria e atualiza notas em Markdown em um workspace configurado por conta.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:zhaoolee/notes#path:/dsh-plugin
```

</details>

<a id="mcp-filesystem"></a>

### Filesystem (reference)

[Filesystem (reference)](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Servidor de referência para ler, escrever, buscar e mover arquivos, restrito aos diretórios passados como argumento.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio filesystem -- npx -y @modelcontextprotocol/server-filesystem '<ALLOWED_DIR>'
```

**Codex CLI**

```bash
codex mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem '<ALLOWED_DIR>'
```

**Gemini CLI**

```bash
gemini mcp add filesystem npx -y @modelcontextprotocol/server-filesystem '<ALLOWED_DIR>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "filesystem": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
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
    "filesystem": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
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
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "filesystem": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  filesystem:
    type: stdio
    cmd: npx
    args: ["-y","@modelcontextprotocol/server-filesystem","<ALLOWED_DIR>"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ALLOWED_DIR>"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `filesystem.cordis.yml  →  dsh web --patch ./filesystem.cordis.yml`

```yaml
- insert:
    - id: mcp-filesystem
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: filesystem
        transport: stdio
        command: npx
        args: ["-y","@modelcontextprotocol/server-filesystem","<ALLOWED_DIR>"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-hn-cli-hacker-news"></a>

### Hacker News feeds and search

[heartleo/hn-cli#hacker-news](https://github.com/heartleo/hn-cli/tree/main/plugins/hacker-news) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Ferramentas do Hacker News para feeds, threads de discussão, busca e perfis de usuário.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:heartleo/hn-cli#path:/plugins/hacker-news
```

</details>

<a id="dsh-dsh-plugin-hub-packages-dsh-mcp-manager"></a>

### MCP server config manager

[wingsky-1/dsh-plugin-hub#packages/dsh-mcp-manager](https://github.com/wingsky-1/dsh-plugin-hub/tree/main/packages/dsh-mcp-manager) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Gerenciador de servidores MCP (stdio / streamable-http) com níveis de config por projeto e global: o MCP do projeto vira 4 ferramentas atômicas por padrão, isolamento evita interferência entre projetos, configs guardam só ${ENV} e uma API deixa plugins registrarem servidores.

**Alternativas:**

- [Edge-Echo/dsh-mcp-bridge](https://github.com/Edge-Echo/dsh-mcp-bridge) (★ 5) — Traz um pacote pronto com servidores MCP de demo, memória, arquivos, GitHub, Playwright e HTTP remoto, com um verificador de conectividade

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wingsky-1/dsh-plugin-hub#path:/packages/dsh-mcp-manager
```

</details>
