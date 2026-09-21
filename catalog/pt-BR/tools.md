# Ferramentas e capacidades

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Claude Mem persistent context](#claude-mem) — Captura o que um agente faz durante a sessão, comprime com IA e reinjeta as memórias relevantes em sessões fut…
- [Codebase knowledge graphs](#understand-anything) — Transforma qualquer codebase em um grafo de conhecimento interativo que agentes (e humanos) podem explorar, bu…
- [Last-30-days research skill](#last30days-skill) — Agent skill que pesquisa um tema no Reddit, X, YouTube, Hacker News, Polymarket e na web em geral, sintetizand…
- [AI PowerPoint generation skill](#ppt-master) — Transforma documentos ou temas em apresentações PowerPoint nativas e editáveis, com formas reais, transições, …
- [CLI-Anything agent-native CLIs](#cli-anything) — Torna qualquer software de linha de comando nativo para agentes, por meio de um hub de CLIs e uma grande bibli…
- [Obsidian agent skills](#obsidian-skills) — Agent skills que ensinam um agente a usar o CLI do Obsidian e formatos abertos como Markdown, Bases e JSON Can…
- [Editorial diagram design skill](#diagram-design) — Skill para gerar diagramas limpos em estilo editorial, como HTML e SVG autocontidos, sem sombras nem a aparênc…
- [Repomix repo packer](#repomix) — Empacota um repositório inteiro em um único arquivo amigável para IA, pronto para alimentar Claude, ChatGPT, G…
- [Claude Code HUD](#claude-hud) — Plugin de Claude Code que mostra um painel ao vivo com uso de contexto, ferramentas ativas, agentes em execuçã…
- [DeepEval LLM evaluation](#deepeval) — Framework open-source de avaliação de LLMs para testar e pontuar as saídas de modelos de linguagem e pipelines…
- [Quarkdown markup compiler skill](#quarkdown) — Skill para um compilador de superset de Markdown que transforma texto marcado em artigos, apresentações, sites…
- [Desktop Commander](#desktop-commander) — Controle de terminal, gestão de processos longos, busca no sistema de arquivos e edição de arquivos por diff p…
- [Diagrams-as-code (draw.io) skill](#drawio-skill) — Skill que transforma linguagem natural, código, manifestos Terraform/Kubernetes, SQL, OpenAPI, AsyncAPI, Proto…
- [Progressive MCP tool exposure](#klavis-mcp) — Servidor para uso progressivo de ferramentas em escala, expondo grandes conjuntos de ferramentas MCP de forma …
- [Interactive draw.io diagrams](#drawio-mcp) — Cria diagramas no chat renderizados como diagramas draw.io interativos, com mais de 10.000 formas pesquisáveis…
- [Vibe Tools CLI for Cursor Agent](#vibe-tools) — Toolkit de linha de comando que dá ao Cursor Agent uma equipe de IA estendida e skills avançadas por meio de i…
- [AntV chart generation](#mcp-server-chart) — Gera gráficos usando a biblioteca de visualização AntV; exige um SERVICE_ID.
- [Website design-system extractor](#design-extract) — Extrai o sistema de design completo de um site em tokens DTCG, com geradores para iOS SwiftUI, Android Compose…
- [Multi-model consensus runner](#claude-octopus) — Executa a mesma tarefa de pesquisa, design ou código em paralelo em vários modelos de IA e evidencia onde eles…
- [Obsidian agent memory framework](#obsidian-wiki) — Framework de skills que permite a agentes de IA construir e manter uma base de conhecimento pessoal ('cérebro …
- [Academic diagram generation](#paperbanana-mcp) — Gera diagramas acadêmicos e gráficos estatísticos a partir de texto usando IA multiagente.
- [Figma design context for agents](#mcp-server-guide) — Servidor oficial do Figma que traz o contexto de design do Figma diretamente para o fluxo de trabalho de um ag…
- [Design system prompts for coding agents](#typeui-mcp) — Sistemas de design, prompts de UI e variações de layout para ferramentas de codificação com IA.
- [Study top app screens and paywalls](#appllama-skills-mcp) — Estuda telas, fluxos e paywalls de apps de iOS com maior faturamento para embasar o design de novos apps.
- [Paid API catalog for agents](#dsh-treg) — Catálogo de ferramentas para agentes: pesquisa cerca de 2.600 endpoints externos (SEO/SERP, backlinks, social,…
- [Real website design references](#inspo-mcp) — Sites reais em produção para agentes de código: paletas de cores, fontes, layouts de dobra e JSX de referência…
- [Context-window token optimization](#token-optimizer-mcp) — Otimização da janela de contexto com cache, compressão e ferramentas inteligentes de arquivos, reduzindo token…
- [Interactive equation graphing](#equation-io-mcp) — Cria gráficos 2D e 3D interativos a partir de equações validadas, com links compartilháveis e prévias em PNG.
- [Verify agent work from video evidence](#watch-skill-mcp) — Assiste a vídeos e sessões ao vivo, guarda evidências com timestamp e verifica o próprio trabalho de um agente…
- [Organize Claude Code configuration](#claude-code-organizer-mcp) — Organiza memórias, skills, servidores MCP, comandos e agentes do Claude Code por arrastar e soltar.
- [PyTorch architecture diagrams](#visualtorch-mcp) — Renderiza diagramas de arquitetura de modelos PyTorch e revelações em GIF animado a partir de uma fonte de mod…
- [Stata regression analysis](#stata-mcp) — Permite que um LLM ajude a rodar análises de regressão no Stata.
- [shadcn/ui components for Laravel Blade](#blatui-mcp) — shadcn/ui para Laravel Blade: descubra, leia e instale componentes, blocos e gráficos do BlatUI.
- [Build presentations with Demo Time](#vscode-demo-time-mcp) — Permite que assistentes de IA interajam com a extensão Demo Time do VS Code para ajudar a montar apresentações…
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
- [Zotero evidence store for agents](#dsh-dsh-zotero) — Usa o Zotero como repositório de evidências para agentes: pesquisa sua biblioteca, inspeciona metadados e nota…
- [Cross-shell terminal tool](#dsh-dsh-bash-terminal) — Uma única ferramenta de shell cobrindo PowerShell, Git Bash e WSL no Windows, além de um terminal PTY interati…
- [Language server actions](#dsh-dsh-lsp-actions) — Superfície de ações LSP para o DSH: diagnósticos, formatação, autocompletar, ações de código, símbolos, ajuda …
- [Git-based session rewind](#dsh-dsh-checkpoint-rewind) — Um /rewind ao estilo Claude Code para o DeepSeek Harness: tira snapshots do workspace via git antes de cada fe…
- [HarmonyOS device automation](#dsh-dsh-hdc-bridge) — Ponte para dispositivos HarmonyOS: um loop de automação hdc para captura de tela/instalação/log/crash/UI com u…
- [One-click prompt optimizer](#dsh-oss-prompt-optimizer) — Otimiza uma instrução bruta em um prompt profissional com um clique: três estilos de saída, perfil de papel/ta…
- [Connect DSH to OOMOL apps](#dsh-dsh-oomol) — Conecta o DeepSeek Harness a aplicativos e serviços gerenciados pela OOMOL, com descoberta e execução progress…
- [Auxiliary model routing tools](#dsh-dsh-auxiliary) — Fornece rotas de modelo dedicadas, ferramentas e orientações de sistema para visão, compactação, revisões, sub…
- [MiniMax multimodal bridge](#dsh-dsh-mmx-bridge) — Uma única ferramenta mmx_bridge cobrindo compreensão/geração de imagens da MiniMax, vídeo, TTS, música, capas,…
- [Web-novel writing engine](#dsh-dsh-tool-writing) — Motor de escrita de web-novels para o DeepSeek Harness: rascunho, esboço e brainstorming em paralelo com chave…
- [Deterministic code graph tool](#dsh-dsh-tool-lens) — Ferramenta determinística de grafo de código AST e inteligência de arquitetura para hierarquias de chamadas, r…
- [Brand asset extraction](#openbrand-mcp) — Extrai ativos de marca (logos, cores, imagens de fundo, nome da marca) a partir de qualquer URL de site; exige…
- [Collaborative drawing canvas](#tldraw-mcp-app) — Desenha e colabora visualmente com agentes na tela compartilhada do tldraw.
- [Export chats as styled notes](#dsh-notes-dsh-plugin) — Exporta conversas do DSH como imagens PNG no estilo Smartisan Notes, ou cria e atualiza notas em Markdown em u…
- [Filesystem (reference)](#mcp-filesystem) — Servidor de referência para ler, escrever, buscar e mover arquivos, restrito aos diretórios passados como argu…
- [Hacker News feeds and search](#dsh-hn-cli-hacker-news) — Ferramentas do Hacker News para feeds, threads de discussão, busca e perfis de usuário.
- [MCP server config manager](#dsh-dsh-plugin-hub-packages-dsh-mcp-manager) — Gerenciador de servidores MCP (stdio / streamable-http) com níveis de config por projeto e global: o MCP do pr…

<a id="claude-mem"></a>

### Claude Mem persistent context

[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — `Agent Skills` · ★ 94k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Captura o que um agente faz durante a sessão, comprime com IA e reinjeta as memórias relevantes em sessões futuras, funcionando com Claude Code, Codex, Gemini e outros.

**Alternativas:**

- [MemPalace/mempalace](https://github.com/MemPalace/mempalace) (★ 59k) — Sistema alternativo de memória persistente para IA, divulgado como a opção open-source mais avaliada em benchmarks, e gratuita.
- [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) (★ 29k) — Camada de memória persistente para agentes de código construída com base em benchmarks reais publicados.
- [volcengine/OpenViking](https://github.com/volcengine/OpenViking) (★ 38k) — Banco de contexto autoevolutivo que unifica memória de agente, RAG de conhecimento e skills em um só repositório.
- [memodb-io/Acontext](https://github.com/memodb-io/Acontext) (★ 3.7k) — Trata as próprias Agent Skills como a camada de memória, em vez de usar um banco de dados separado.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add thedotmack/claude-mem -a claude-code -g
```

**Codex CLI**

```bash
npx skills add thedotmack/claude-mem -a codex -g
```

**Gemini CLI**

```bash
npx skills add thedotmack/claude-mem -a gemini-cli -g
```

**Cursor**

```bash
npx skills add thedotmack/claude-mem -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add thedotmack/claude-mem -a github-copilot -g
```

**OpenCode**

```bash
npx skills add thedotmack/claude-mem -a opencode -g
```

**Cline**

```bash
npx skills add thedotmack/claude-mem -a cline -g
```

**Windsurf**

```bash
npx skills add thedotmack/claude-mem -a windsurf -g
```

**Zed**

```bash
npx skills add thedotmack/claude-mem -a zed -g
```

**Goose**

```bash
npx skills add thedotmack/claude-mem -a goose -g
```

**Kiro**

```bash
npx skills add thedotmack/claude-mem -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add thedotmack/claude-mem -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add thedotmack/claude-mem -a universal
```

</details>

<a id="understand-anything"></a>

### Codebase knowledge graphs

[Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) — `Agent Skills` · ★ 84k · Licença: MIT · Funciona com: Todos os clientes

Transforma qualquer codebase em um grafo de conhecimento interativo que agentes (e humanos) podem explorar, buscar e consultar, funcionando com Claude Code, Codex, Cursor e outros.

**Alternativas:**

- [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) (★ 47k) — Motor de inteligência de código sem servidor que constrói uma representação em grafo semelhante sem infraestrutura de backend.
- [giancarloerra/SocratiCode](https://github.com/giancarloerra/SocratiCode) (★ 3.3k) — Inteligência de codebase em escala empresarial (40M+ linhas), busca semântica híbrida, grafos de dependência e visualizador HTML interativo.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add Egonex-AI/Understand-Anything -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Egonex-AI/Understand-Anything -a codex -g
```

**Gemini CLI**

```bash
npx skills add Egonex-AI/Understand-Anything -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Egonex-AI/Understand-Anything -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Egonex-AI/Understand-Anything -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Egonex-AI/Understand-Anything -a opencode -g
```

**Cline**

```bash
npx skills add Egonex-AI/Understand-Anything -a cline -g
```

**Windsurf**

```bash
npx skills add Egonex-AI/Understand-Anything -a windsurf -g
```

**Zed**

```bash
npx skills add Egonex-AI/Understand-Anything -a zed -g
```

**Goose**

```bash
npx skills add Egonex-AI/Understand-Anything -a goose -g
```

**Kiro**

```bash
npx skills add Egonex-AI/Understand-Anything -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Egonex-AI/Understand-Anything -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Egonex-AI/Understand-Anything -a universal
```

</details>

<a id="last30days-skill"></a>

### Last-30-days research skill

[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) — `Agent Skills` · ★ 63k · Licença: MIT · Funciona com: Todos os clientes

Agent skill que pesquisa um tema no Reddit, X, YouTube, Hacker News, Polymarket e na web em geral, sintetizando um resumo com fontes.

**Alternativas:**

- [Jesseovo/last30days-skill-cn](https://github.com/Jesseovo/last30days-skill-cn) (★ 1.8k) — Mesma ideia adaptada às plataformas chinesas: pesquisa em oito grandes sites da China dos últimos 30 dias.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add mvanhorn/last30days-skill -a claude-code -g
```

**Codex CLI**

```bash
npx skills add mvanhorn/last30days-skill -a codex -g
```

**Gemini CLI**

```bash
npx skills add mvanhorn/last30days-skill -a gemini-cli -g
```

**Cursor**

```bash
npx skills add mvanhorn/last30days-skill -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add mvanhorn/last30days-skill -a github-copilot -g
```

**OpenCode**

```bash
npx skills add mvanhorn/last30days-skill -a opencode -g
```

**Cline**

```bash
npx skills add mvanhorn/last30days-skill -a cline -g
```

**Windsurf**

```bash
npx skills add mvanhorn/last30days-skill -a windsurf -g
```

**Zed**

```bash
npx skills add mvanhorn/last30days-skill -a zed -g
```

**Goose**

```bash
npx skills add mvanhorn/last30days-skill -a goose -g
```

**Kiro**

```bash
npx skills add mvanhorn/last30days-skill -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add mvanhorn/last30days-skill -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add mvanhorn/last30days-skill -a universal
```

</details>

<a id="ppt-master"></a>

### AI PowerPoint generation skill

[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — `Agent Skills` · ★ 56k · Licença: MIT · Funciona com: Todos os clientes

Transforma documentos ou temas em apresentações PowerPoint nativas e editáveis, com formas reais, transições, gráficos e tabelas com dados e narração opcional.

**Alternativas:**

- [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) (★ 30k) — Cria apresentações baseadas na web usando as próprias skills de frontend do agente de código, em vez de arquivos PowerPoint nativos.
- [chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) (★ 8.6k) — Gera apresentações editáveis no navegador a partir de vários temas visuais, exportáveis para HTML, PDF e PPTX.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add hugohe3/ppt-master -a claude-code -g
```

**Codex CLI**

```bash
npx skills add hugohe3/ppt-master -a codex -g
```

**Gemini CLI**

```bash
npx skills add hugohe3/ppt-master -a gemini-cli -g
```

**Cursor**

```bash
npx skills add hugohe3/ppt-master -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add hugohe3/ppt-master -a github-copilot -g
```

**OpenCode**

```bash
npx skills add hugohe3/ppt-master -a opencode -g
```

**Cline**

```bash
npx skills add hugohe3/ppt-master -a cline -g
```

**Windsurf**

```bash
npx skills add hugohe3/ppt-master -a windsurf -g
```

**Zed**

```bash
npx skills add hugohe3/ppt-master -a zed -g
```

**Goose**

```bash
npx skills add hugohe3/ppt-master -a goose -g
```

**Kiro**

```bash
npx skills add hugohe3/ppt-master -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add hugohe3/ppt-master -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add hugohe3/ppt-master -a universal
```

</details>

<a id="cli-anything"></a>

### CLI-Anything agent-native CLIs

[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) — `Agent Skills` · ★ 50k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Torna qualquer software de linha de comando nativo para agentes, por meio de um hub de CLIs e uma grande biblioteca de skills que descrevem como operar cada ferramenta.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add HKUDS/CLI-Anything -a claude-code -g
```

**Codex CLI**

```bash
npx skills add HKUDS/CLI-Anything -a codex -g
```

**Gemini CLI**

```bash
npx skills add HKUDS/CLI-Anything -a gemini-cli -g
```

**Cursor**

```bash
npx skills add HKUDS/CLI-Anything -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add HKUDS/CLI-Anything -a github-copilot -g
```

**OpenCode**

```bash
npx skills add HKUDS/CLI-Anything -a opencode -g
```

**Cline**

```bash
npx skills add HKUDS/CLI-Anything -a cline -g
```

**Windsurf**

```bash
npx skills add HKUDS/CLI-Anything -a windsurf -g
```

**Zed**

```bash
npx skills add HKUDS/CLI-Anything -a zed -g
```

**Goose**

```bash
npx skills add HKUDS/CLI-Anything -a goose -g
```

**Kiro**

```bash
npx skills add HKUDS/CLI-Anything -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add HKUDS/CLI-Anything -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add HKUDS/CLI-Anything -a universal
```

</details>

<a id="obsidian-skills"></a>

### Obsidian agent skills

[kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) — `Agent Skills` · ★ 49k · Licença: MIT · Funciona com: Todos os clientes

Agent skills que ensinam um agente a usar o CLI do Obsidian e formatos abertos como Markdown, Bases e JSON Canvas.

**Alternativas:**

- [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) (★ 15k) — Transforma Obsidian mais Claude Code em um segundo cérebro autoorganizável, arquivando qualquer fonte em um grafo de conhecimento conectado.
- [eugeniughelbur/obsidian-second-brain](https://github.com/eugeniughelbur/obsidian-second-brain) (★ 4.6k) — Memória persistente para Claude Code e outros 6 agentes de CLI, guardada como markdown num cofre do Obsidian, com mais de 45 comandos.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add kepano/obsidian-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add kepano/obsidian-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add kepano/obsidian-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add kepano/obsidian-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add kepano/obsidian-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add kepano/obsidian-skills -a opencode -g
```

**Cline**

```bash
npx skills add kepano/obsidian-skills -a cline -g
```

**Windsurf**

```bash
npx skills add kepano/obsidian-skills -a windsurf -g
```

**Zed**

```bash
npx skills add kepano/obsidian-skills -a zed -g
```

**Goose**

```bash
npx skills add kepano/obsidian-skills -a goose -g
```

**Kiro**

```bash
npx skills add kepano/obsidian-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add kepano/obsidian-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add kepano/obsidian-skills -a universal
```

</details>

<a id="diagram-design"></a>

### Editorial diagram design skill

[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) — `Agent Skills` · ★ 42k · Licença: MIT · Funciona com: Todos os clientes

Skill para gerar diagramas limpos em estilo editorial, como HTML e SVG autocontidos, sem sombras nem a aparência genérica do Mermaid.

**Alternativas:**

- [nicobailon/visual-explainer](https://github.com/nicobailon/visual-explainer) (★ 9.9k) — Gera páginas HTML ricas ou apresentações para diagramas, revisões de diff, auditorias de plano, tabelas de dados e resumos de projeto.
- [plannotator/effective-html](https://github.com/plannotator/effective-html) (★ 3.2k) — Conjunto mais amplo de skills para artefatos HTML: wireframes, protótipos interativos, planos e diagramas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add cathrynlavery/diagram-design -a claude-code -g
```

**Codex CLI**

```bash
npx skills add cathrynlavery/diagram-design -a codex -g
```

**Gemini CLI**

```bash
npx skills add cathrynlavery/diagram-design -a gemini-cli -g
```

**Cursor**

```bash
npx skills add cathrynlavery/diagram-design -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add cathrynlavery/diagram-design -a github-copilot -g
```

**OpenCode**

```bash
npx skills add cathrynlavery/diagram-design -a opencode -g
```

**Cline**

```bash
npx skills add cathrynlavery/diagram-design -a cline -g
```

**Windsurf**

```bash
npx skills add cathrynlavery/diagram-design -a windsurf -g
```

**Zed**

```bash
npx skills add cathrynlavery/diagram-design -a zed -g
```

**Goose**

```bash
npx skills add cathrynlavery/diagram-design -a goose -g
```

**Kiro**

```bash
npx skills add cathrynlavery/diagram-design -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add cathrynlavery/diagram-design -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add cathrynlavery/diagram-design -a universal
```

</details>

<a id="repomix"></a>

### Repomix repo packer

[yamadashy/repomix](https://github.com/yamadashy/repomix) — `Agent Skills` · ★ 28k · Licença: MIT · Funciona com: Todos os clientes

Empacota um repositório inteiro em um único arquivo amigável para IA, pronto para alimentar Claude, ChatGPT, Gemini ou outras ferramentas de LLM.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add yamadashy/repomix -a claude-code -g
```

**Codex CLI**

```bash
npx skills add yamadashy/repomix -a codex -g
```

**Gemini CLI**

```bash
npx skills add yamadashy/repomix -a gemini-cli -g
```

**Cursor**

```bash
npx skills add yamadashy/repomix -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add yamadashy/repomix -a github-copilot -g
```

**OpenCode**

```bash
npx skills add yamadashy/repomix -a opencode -g
```

**Cline**

```bash
npx skills add yamadashy/repomix -a cline -g
```

**Windsurf**

```bash
npx skills add yamadashy/repomix -a windsurf -g
```

**Zed**

```bash
npx skills add yamadashy/repomix -a zed -g
```

**Goose**

```bash
npx skills add yamadashy/repomix -a goose -g
```

**Kiro**

```bash
npx skills add yamadashy/repomix -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add yamadashy/repomix -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add yamadashy/repomix -a universal
```

</details>

<a id="claude-hud"></a>

### Claude Code HUD

[jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) — `Marketplace de plugins` · ★ 28k · Licença: MIT · Funciona com: Claude Code apenas

Plugin de Claude Code que mostra um painel ao vivo com uso de contexto, ferramentas ativas, agentes em execução e progresso das tarefas.

<details><summary>Instalar</summary>

**Claude Code**

```text
/plugin marketplace add jarrodwatts/claude-hud
```

</details>

<a id="deepeval"></a>

### DeepEval LLM evaluation

[confident-ai/deepeval](https://github.com/confident-ai/deepeval) — `Agent Skills` · ★ 18k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Framework open-source de avaliação de LLMs para testar e pontuar as saídas de modelos de linguagem e pipelines de agentes.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add confident-ai/deepeval -a claude-code -g
```

**Codex CLI**

```bash
npx skills add confident-ai/deepeval -a codex -g
```

**Gemini CLI**

```bash
npx skills add confident-ai/deepeval -a gemini-cli -g
```

**Cursor**

```bash
npx skills add confident-ai/deepeval -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add confident-ai/deepeval -a github-copilot -g
```

**OpenCode**

```bash
npx skills add confident-ai/deepeval -a opencode -g
```

**Cline**

```bash
npx skills add confident-ai/deepeval -a cline -g
```

**Windsurf**

```bash
npx skills add confident-ai/deepeval -a windsurf -g
```

**Zed**

```bash
npx skills add confident-ai/deepeval -a zed -g
```

**Goose**

```bash
npx skills add confident-ai/deepeval -a goose -g
```

**Kiro**

```bash
npx skills add confident-ai/deepeval -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add confident-ai/deepeval -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add confident-ai/deepeval -a universal
```

</details>

<a id="quarkdown"></a>

### Quarkdown markup compiler skill

[iamgio/quarkdown](https://github.com/iamgio/quarkdown) — `Agent Skills` · ★ 16k · Licença: GPL-3.0 · Funciona com: Todos os clientes

Skill para um compilador de superset de Markdown que transforma texto marcado em artigos, apresentações, sites, livros e bases de conhecimento a partir de uma única fonte.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add iamgio/quarkdown -a claude-code -g
```

**Codex CLI**

```bash
npx skills add iamgio/quarkdown -a codex -g
```

**Gemini CLI**

```bash
npx skills add iamgio/quarkdown -a gemini-cli -g
```

**Cursor**

```bash
npx skills add iamgio/quarkdown -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add iamgio/quarkdown -a github-copilot -g
```

**OpenCode**

```bash
npx skills add iamgio/quarkdown -a opencode -g
```

**Cline**

```bash
npx skills add iamgio/quarkdown -a cline -g
```

**Windsurf**

```bash
npx skills add iamgio/quarkdown -a windsurf -g
```

**Zed**

```bash
npx skills add iamgio/quarkdown -a zed -g
```

**Goose**

```bash
npx skills add iamgio/quarkdown -a goose -g
```

**Kiro**

```bash
npx skills add iamgio/quarkdown -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add iamgio/quarkdown -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add iamgio/quarkdown -a universal
```

</details>

<a id="desktop-commander"></a>

### Desktop Commander

[Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP) — `Servidor MCP` · ★ 9.7k · Licença: MIT · Funciona com: Todos os clientes

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

<a id="drawio-skill"></a>

### Diagrams-as-code (draw.io) skill

[Agents365-ai/drawio-skill](https://github.com/Agents365-ai/drawio-skill) — `Agent Skills` · ★ 9.5k · Licença: MIT · Funciona com: Todos os clientes

Skill que transforma linguagem natural, código, manifestos Terraform/Kubernetes, SQL, OpenAPI, AsyncAPI, Protobuf e GraphQL em diagramas de arquitetura draw.io editáveis e testados.

**Alternativas:**

- [markdown-viewer/skills](https://github.com/markdown-viewer/skills) (★ 3.3k) — Gera diagramas de arquitetura, rede, BPMN, UML e mapas mentais nativamente dentro do Markdown.
- [yctimlin/mcp_excalidraw](https://github.com/yctimlin/mcp_excalidraw) (★ 2.5k) — Servidor MCP e skill para diagramas programáticos em tempo real no canvas do Excalidraw.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add Agents365-ai/drawio-skill -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Agents365-ai/drawio-skill -a codex -g
```

**Gemini CLI**

```bash
npx skills add Agents365-ai/drawio-skill -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Agents365-ai/drawio-skill -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Agents365-ai/drawio-skill -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Agents365-ai/drawio-skill -a opencode -g
```

**Cline**

```bash
npx skills add Agents365-ai/drawio-skill -a cline -g
```

**Windsurf**

```bash
npx skills add Agents365-ai/drawio-skill -a windsurf -g
```

**Zed**

```bash
npx skills add Agents365-ai/drawio-skill -a zed -g
```

**Goose**

```bash
npx skills add Agents365-ai/drawio-skill -a goose -g
```

**Kiro**

```bash
npx skills add Agents365-ai/drawio-skill -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Agents365-ai/drawio-skill -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Agents365-ai/drawio-skill -a universal
```

</details>

<a id="klavis-mcp"></a>

### Progressive MCP tool exposure

[Klavis-AI/klavis](https://github.com/Klavis-AI/klavis) — `Servidor MCP` · ★ 5.8k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor para uso progressivo de ferramentas em escala, expondo grandes conjuntos de ferramentas MCP de forma incremental.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http strata https://strata.klavis.ai/mcp/
```

**Codex CLI**

```bash
codex mcp add strata --url https://strata.klavis.ai/mcp/
```

**Gemini CLI**

```bash
gemini mcp add --transport http strata https://strata.klavis.ai/mcp/
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "strata": {
      "url": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "strata": {
      "type": "http",
      "url": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "strata": {
      "type": "remote",
      "url": "https://strata.klavis.ai/mcp/",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "strata": {
      "type": "streamableHttp",
      "url": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "strata": {
      "serverUrl": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "strata": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://strata.klavis.ai/mcp/"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  strata:
    type: streamable_http
    uri: https://strata.klavis.ai/mcp/
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "strata": {
      "type": "streamable-http",
      "url": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "strata": {
      "type": "streamable-http",
      "url": "https://strata.klavis.ai/mcp/"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `strata.cordis.yml  →  dsh web --patch ./strata.cordis.yml`

```yaml
- insert:
    - id: mcp-strata
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: strata
        transport: streamable-http
        url: https://strata.klavis.ai/mcp/
```

</details>

<a id="drawio-mcp"></a>

### Interactive draw.io diagrams

[draw.io](https://github.com/jgraph/drawio-mcp) — `Servidor MCP` · ★ 5.5k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Cria diagramas no chat renderizados como diagramas draw.io interativos, com mais de 10.000 formas pesquisáveis.

**Alternativas:**

- [TerraVision](https://github.com/patrickchugh/terravision) (★ 1.6k) — Gera diagramas de arquitetura de nuvem a partir de um terraform plan, com ícones oficiais de AWS, Azure e GCP.
- [Vrun-design/openflowkit](https://github.com/Vrun-design/openflowkit) (★ 790) — Ferramentas locais de diagramação de fluxo baseadas em nós para clientes MCP.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://mcp.draw.io/mcp
```

**Codex CLI**

```bash
codex mcp add mcp --url https://mcp.draw.io/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://mcp.draw.io/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://mcp.draw.io/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "http",
      "url": "https://mcp.draw.io/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp": {
      "type": "remote",
      "url": "https://mcp.draw.io/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamableHttp",
      "url": "https://mcp.draw.io/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://mcp.draw.io/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.draw.io/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: streamable_http
    uri: https://mcp.draw.io/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.draw.io/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.draw.io/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp.cordis.yml  →  dsh web --patch ./mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp
        transport: streamable-http
        url: https://mcp.draw.io/mcp
```

</details>

<a id="vibe-tools"></a>

### Vibe Tools CLI for Cursor Agent

[eastlondoner/vibe-tools](https://github.com/eastlondoner/vibe-tools) — `Lista / registro` · ★ 4.8k · Licença: MIT · Funciona com: —

Toolkit de linha de comando que dá ao Cursor Agent uma equipe de IA estendida e skills avançadas por meio de integrações com ferramentas externas.

<a id="mcp-server-chart"></a>

### AntV chart generation

[antvis/mcp-server-chart](https://github.com/antvis/mcp-server-chart) — `Servidor MCP` · ★ 4.4k · Licença: MIT · Funciona com: Todos os clientes

Gera gráficos usando a biblioteca de visualização AntV; exige um SERVICE_ID.

**Alternativas:**

- [Semiotic](https://github.com/nteract/semiotic) (★ 2.7k) — Geração verificada de gráficos React: seleciona, valida, corrige, renderiza e inspeciona gráficos.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-server-chart --env SERVICE_ID='<SERVICE_ID>' -- npx -y @antv/mcp-server-chart
```

**Codex CLI**

```bash
codex mcp add mcp-server-chart --env SERVICE_ID='<SERVICE_ID>' -- npx -y @antv/mcp-server-chart
```

**Gemini CLI**

```bash
gemini mcp add -e SERVICE_ID='<SERVICE_ID>' mcp-server-chart npx -y @antv/mcp-server-chart
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server-chart": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
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
    "mcp-server-chart": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@antv/mcp-server-chart"
      ],
      "enabled": true,
      "environment": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-server-chart": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server-chart:
    type: stdio
    cmd: npx
    args: ["-y","@antv/mcp-server-chart"]
    envs:
      SERVICE_ID: "<SERVICE_ID>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@antv/mcp-server-chart"
      ],
      "env": {
        "SERVICE_ID": "<SERVICE_ID>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-server-chart.cordis.yml  →  dsh web --patch ./mcp-server-chart.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-server-chart
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-server-chart
        transport: stdio
        command: npx
        args: ["-y","@antv/mcp-server-chart"]
        env: {"SERVICE_ID":"<SERVICE_ID>"}
        cwd: !!js process.cwd()
```

</details>

<a id="design-extract"></a>

### Website design-system extractor

[Manavarya09/design-extract](https://github.com/Manavarya09/design-extract) — `Agent Skills` · ★ 4.1k · Licença: MIT · Funciona com: Todos os clientes

Extrai o sistema de design completo de um site em tokens DTCG, com geradores para iOS SwiftUI, Android Compose, Flutter, Tailwind v4 e variáveis do Figma, além de auditoria de CSS e acessibilidade.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add Manavarya09/design-extract -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Manavarya09/design-extract -a codex -g
```

**Gemini CLI**

```bash
npx skills add Manavarya09/design-extract -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Manavarya09/design-extract -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Manavarya09/design-extract -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Manavarya09/design-extract -a opencode -g
```

**Cline**

```bash
npx skills add Manavarya09/design-extract -a cline -g
```

**Windsurf**

```bash
npx skills add Manavarya09/design-extract -a windsurf -g
```

**Zed**

```bash
npx skills add Manavarya09/design-extract -a zed -g
```

**Goose**

```bash
npx skills add Manavarya09/design-extract -a goose -g
```

**Kiro**

```bash
npx skills add Manavarya09/design-extract -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Manavarya09/design-extract -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Manavarya09/design-extract -a universal
```

</details>

<a id="claude-octopus"></a>

### Multi-model consensus runner

[nyldn/claude-octopus](https://github.com/nyldn/claude-octopus) — `Agent Skills` · ★ 4.1k · Licença: MIT · Funciona com: Todos os clientes

Executa a mesma tarefa de pesquisa, design ou código em paralelo em vários modelos de IA e evidencia onde eles discordam antes de você publicar.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add nyldn/claude-octopus -a claude-code -g
```

**Codex CLI**

```bash
npx skills add nyldn/claude-octopus -a codex -g
```

**Gemini CLI**

```bash
npx skills add nyldn/claude-octopus -a gemini-cli -g
```

**Cursor**

```bash
npx skills add nyldn/claude-octopus -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add nyldn/claude-octopus -a github-copilot -g
```

**OpenCode**

```bash
npx skills add nyldn/claude-octopus -a opencode -g
```

**Cline**

```bash
npx skills add nyldn/claude-octopus -a cline -g
```

**Windsurf**

```bash
npx skills add nyldn/claude-octopus -a windsurf -g
```

**Zed**

```bash
npx skills add nyldn/claude-octopus -a zed -g
```

**Goose**

```bash
npx skills add nyldn/claude-octopus -a goose -g
```

**Kiro**

```bash
npx skills add nyldn/claude-octopus -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add nyldn/claude-octopus -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add nyldn/claude-octopus -a universal
```

</details>

<a id="obsidian-wiki"></a>

### Obsidian agent memory framework

[Ar9av/obsidian-wiki](https://github.com/Ar9av/obsidian-wiki) — `Agent Skills` · ★ 3.4k · Licença: MIT · Funciona com: Todos os clientes

Framework de skills que permite a agentes de IA construir e manter uma base de conhecimento pessoal ('cérebro digital') dentro do Obsidian, com cross-linking, coloração de grafo e ingestão de histórico.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add Ar9av/obsidian-wiki -a claude-code -g
```

**Codex CLI**

```bash
npx skills add Ar9av/obsidian-wiki -a codex -g
```

**Gemini CLI**

```bash
npx skills add Ar9av/obsidian-wiki -a gemini-cli -g
```

**Cursor**

```bash
npx skills add Ar9av/obsidian-wiki -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add Ar9av/obsidian-wiki -a github-copilot -g
```

**OpenCode**

```bash
npx skills add Ar9av/obsidian-wiki -a opencode -g
```

**Cline**

```bash
npx skills add Ar9av/obsidian-wiki -a cline -g
```

**Windsurf**

```bash
npx skills add Ar9av/obsidian-wiki -a windsurf -g
```

**Zed**

```bash
npx skills add Ar9av/obsidian-wiki -a zed -g
```

**Goose**

```bash
npx skills add Ar9av/obsidian-wiki -a goose -g
```

**Kiro**

```bash
npx skills add Ar9av/obsidian-wiki -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add Ar9av/obsidian-wiki -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add Ar9av/obsidian-wiki -a universal
```

</details>

<a id="paperbanana-mcp"></a>

### Academic diagram generation

[PaperBanana](https://github.com/llmsresearch/paperbanana) — `Servidor MCP` · ★ 2.4k · Licença: MIT · Funciona com: Todos os clientes

Gera diagramas acadêmicos e gráficos estatísticos a partir de texto usando IA multiagente.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio paperbanana -- uvx paperbanana
```

**Codex CLI**

```bash
codex mcp add paperbanana -- uvx paperbanana
```

**Gemini CLI**

```bash
gemini mcp add paperbanana uvx paperbanana
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "paperbanana": {
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "paperbanana": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "paperbanana"
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
    "paperbanana": {
      "type": "local",
      "command": [
        "uvx",
        "paperbanana"
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
    "paperbanana": {
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "paperbanana": {
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "paperbanana": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  paperbanana:
    type: stdio
    cmd: uvx
    args: ["paperbanana"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "paperbanana": {
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "paperbanana": {
      "command": "uvx",
      "args": [
        "paperbanana"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `paperbanana.cordis.yml  →  dsh web --patch ./paperbanana.cordis.yml`

```yaml
- insert:
    - id: mcp-paperbanana
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: paperbanana
        transport: stdio
        command: uvx
        args: ["paperbanana"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-server-guide"></a>

### Figma design context for agents

[Figma MCP Server](https://github.com/figma/mcp-server-guide) — `Servidor MCP` · ★ 2.0k · Licença: ver repo · Funciona com: Todos os clientes

Servidor oficial do Figma que traz o contexto de design do Figma diretamente para o fluxo de trabalho de um agente de IA.

**Alternativas:**

- [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) (★ 16k) — Dá a um agente de código acesso aos dados do Figma para implementar designs em qualquer framework de uma vez; exige FIGMA_API_KEY.
- [TranHoaiHung/figma-ui-mcp](https://github.com/TranHoaiHung/figma-ui-mcp) (★ 242) — Servidor Figma bidirecional: um agente desenha UI na tela do Figma e também lê os designs de volta.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://mcp.figma.com/mcp
```

**Codex CLI**

```bash
codex mcp add mcp --url https://mcp.figma.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://mcp.figma.com/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp": {
      "type": "remote",
      "url": "https://mcp.figma.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamableHttp",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://mcp.figma.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.figma.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: streamable_http
    uri: https://mcp.figma.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp.cordis.yml  →  dsh web --patch ./mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp
        transport: streamable-http
        url: https://mcp.figma.com/mcp
```

</details>

<a id="typeui-mcp"></a>

### Design system prompts for coding agents

[TypeUI](https://github.com/bergside/typeui) — `Servidor MCP` · ★ 2.0k · Licença: ver repo · Funciona com: Todos os clientes

Sistemas de design, prompts de UI e variações de layout para ferramentas de codificação com IA.

**Alternativas:**

- [StyleKit](https://github.com/AnxForever/stylekit/tree/main/packages/mcp) — Busca em 148 estilos de design selecionados e traz tokens, receitas e comandos shadcn.
- [UI Beats](https://github.com/nikhils4/ui-beats/tree/main/packages/mcp) — Permite que um agente busque, leia e instale componentes React animados.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http typeui https://mcp.typeui.sh/mcp
```

**Codex CLI**

```bash
codex mcp add typeui --url https://mcp.typeui.sh/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http typeui https://mcp.typeui.sh/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "typeui": {
      "url": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "typeui": {
      "type": "http",
      "url": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "typeui": {
      "type": "remote",
      "url": "https://mcp.typeui.sh/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "typeui": {
      "type": "streamableHttp",
      "url": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "typeui": {
      "serverUrl": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "typeui": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.typeui.sh/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  typeui:
    type: streamable_http
    uri: https://mcp.typeui.sh/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "typeui": {
      "type": "streamable-http",
      "url": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "typeui": {
      "type": "streamable-http",
      "url": "https://mcp.typeui.sh/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `typeui.cordis.yml  →  dsh web --patch ./typeui.cordis.yml`

```yaml
- insert:
    - id: mcp-typeui
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: typeui
        transport: streamable-http
        url: https://mcp.typeui.sh/mcp
```

</details>

<a id="appllama-skills-mcp"></a>

### Study top app screens and paywalls

[Appllama](https://github.com/Appllama/appllama-skills) — `Servidor MCP` · ★ 1.9k · Licença: MIT · Funciona com: Todos os clientes

Estuda telas, fluxos e paywalls de apps de iOS com maior faturamento para embasar o design de novos apps.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http appllama https://mcp.appllama.io/mcp
```

**Codex CLI**

```bash
codex mcp add appllama --url https://mcp.appllama.io/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http appllama https://mcp.appllama.io/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "appllama": {
      "url": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "appllama": {
      "type": "http",
      "url": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "appllama": {
      "type": "remote",
      "url": "https://mcp.appllama.io/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "appllama": {
      "type": "streamableHttp",
      "url": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "appllama": {
      "serverUrl": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "appllama": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.appllama.io/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  appllama:
    type: streamable_http
    uri: https://mcp.appllama.io/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "appllama": {
      "type": "streamable-http",
      "url": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "appllama": {
      "type": "streamable-http",
      "url": "https://mcp.appllama.io/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `appllama.cordis.yml  →  dsh web --patch ./appllama.cordis.yml`

```yaml
- insert:
    - id: mcp-appllama
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: appllama
        transport: streamable-http
        url: https://mcp.appllama.io/mcp
```

</details>

<a id="dsh-treg"></a>

### Paid API catalog for agents

[superdesigndev/treg](https://github.com/superdesigndev/treg) — `Plugin nativo` · ★ 1.8k · Licença: ver repo · Funciona com: DeepSeek Harness apenas

Catálogo de ferramentas para agentes: pesquisa cerca de 2.600 endpoints externos (SEO/SERP, backlinks, social, enriquecimento de pessoas/empresas, anúncios, scraping) pela tarefa, lê parâmetros e preço, e chama com a credencial injetada no servidor.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:superdesigndev/treg
```

</details>

<a id="inspo-mcp"></a>

### Real website design references

[Nutlope/inspo](https://github.com/Nutlope/inspo) — `Servidor MCP` · ★ 661 · Licença: MIT · Funciona com: Todos os clientes

Sites reais em produção para agentes de código: paletas de cores, fontes, layouts de dobra e JSX de referência; exige TOGETHER_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio inspo --env TOGETHER_API_KEY='<TOGETHER_API_KEY>' -- npx -y inspo-mcp
```

**Codex CLI**

```bash
codex mcp add inspo --env TOGETHER_API_KEY='<TOGETHER_API_KEY>' -- npx -y inspo-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e TOGETHER_API_KEY='<TOGETHER_API_KEY>' inspo npx -y inspo-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "inspo": {
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "inspo": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
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
    "inspo": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "inspo-mcp"
      ],
      "enabled": true,
      "environment": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "inspo": {
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "inspo": {
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "inspo": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  inspo:
    type: stdio
    cmd: npx
    args: ["-y","inspo-mcp"]
    envs:
      TOGETHER_API_KEY: "<TOGETHER_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "inspo": {
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "inspo": {
      "command": "npx",
      "args": [
        "-y",
        "inspo-mcp"
      ],
      "env": {
        "TOGETHER_API_KEY": "<TOGETHER_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `inspo.cordis.yml  →  dsh web --patch ./inspo.cordis.yml`

```yaml
- insert:
    - id: mcp-inspo
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: inspo
        transport: stdio
        command: npx
        args: ["-y","inspo-mcp"]
        env: {"TOGETHER_API_KEY":"<TOGETHER_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="token-optimizer-mcp"></a>

### Context-window token optimization

[ooples/token-optimizer-mcp](https://github.com/ooples/token-optimizer-mcp) — `Servidor MCP` · ★ 531 · Licença: MIT · Funciona com: Todos os clientes

Otimização da janela de contexto com cache, compressão e ferramentas inteligentes de arquivos, reduzindo tokens em 60-90%.

**Alternativas:**

- [llmtrim](https://github.com/fkiene/llmtrim) (★ 236) — Servidor proxy que comprime prompts, saídas de ferramentas e respostas de LLM para reduzir o custo em tokens.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio token-optimizer-mcp -- npx -y @ooples/token-optimizer-mcp
```

**Codex CLI**

```bash
codex mcp add token-optimizer-mcp -- npx -y @ooples/token-optimizer-mcp
```

**Gemini CLI**

```bash
gemini mcp add token-optimizer-mcp npx -y @ooples/token-optimizer-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "token-optimizer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "token-optimizer-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
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
    "token-optimizer-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@ooples/token-optimizer-mcp"
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
    "token-optimizer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "token-optimizer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "token-optimizer-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  token-optimizer-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@ooples/token-optimizer-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "token-optimizer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "token-optimizer-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@ooples/token-optimizer-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `token-optimizer-mcp.cordis.yml  →  dsh web --patch ./token-optimizer-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-token-optimizer-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: token-optimizer-mcp
        transport: stdio
        command: npx
        args: ["-y","@ooples/token-optimizer-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="equation-io-mcp"></a>

### Interactive equation graphing

[Equation.io](https://github.com/aantthony/equation.io) — `Servidor MCP` · ★ 406 · Licença: MIT · Funciona com: Todos os clientes

Cria gráficos 2D e 3D interativos a partir de equações validadas, com links compartilháveis e prévias em PNG.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http equation https://equation.io/mcp
```

**Codex CLI**

```bash
codex mcp add equation --url https://equation.io/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http equation https://equation.io/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "equation": {
      "url": "https://equation.io/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "equation": {
      "type": "http",
      "url": "https://equation.io/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "equation": {
      "type": "remote",
      "url": "https://equation.io/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "equation": {
      "type": "streamableHttp",
      "url": "https://equation.io/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "equation": {
      "serverUrl": "https://equation.io/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "equation": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://equation.io/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  equation:
    type: streamable_http
    uri: https://equation.io/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "equation": {
      "type": "streamable-http",
      "url": "https://equation.io/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "equation": {
      "type": "streamable-http",
      "url": "https://equation.io/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `equation.cordis.yml  →  dsh web --patch ./equation.cordis.yml`

```yaml
- insert:
    - id: mcp-equation
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: equation
        transport: streamable-http
        url: https://equation.io/mcp
```

</details>

<a id="watch-skill-mcp"></a>

### Verify agent work from video evidence

[oxbshw/watch-skill](https://github.com/oxbshw/watch-skill) — `Servidor MCP` · ★ 384 · Licença: MIT · Funciona com: Todos os clientes

Assiste a vídeos e sessões ao vivo, guarda evidências com timestamp e verifica o próprio trabalho de um agente.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio watch-skill -- uvx watch-skill
```

**Codex CLI**

```bash
codex mcp add watch-skill -- uvx watch-skill
```

**Gemini CLI**

```bash
gemini mcp add watch-skill uvx watch-skill
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "watch-skill": {
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "watch-skill": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "watch-skill"
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
    "watch-skill": {
      "type": "local",
      "command": [
        "uvx",
        "watch-skill"
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
    "watch-skill": {
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "watch-skill": {
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "watch-skill": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  watch-skill:
    type: stdio
    cmd: uvx
    args: ["watch-skill"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "watch-skill": {
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "watch-skill": {
      "command": "uvx",
      "args": [
        "watch-skill"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `watch-skill.cordis.yml  →  dsh web --patch ./watch-skill.cordis.yml`

```yaml
- insert:
    - id: mcp-watch-skill
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: watch-skill
        transport: stdio
        command: uvx
        args: ["watch-skill"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="claude-code-organizer-mcp"></a>

### Organize Claude Code configuration

[mcpware/claude-code-organizer](https://github.com/mcpware/claude-code-organizer) — `Servidor MCP` · ★ 379 · Licença: MIT · Funciona com: Todos os clientes

Organiza memórias, skills, servidores MCP, comandos e agentes do Claude Code por arrastar e soltar.

**Alternativas:**

- [mcptoon](https://github.com/activeing123/mcptoon) (★ 202) — Cliente MCP sem dependências que mantém uma config sincronizada entre agentes, com listas de ferramentas compactas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio claude-code-organizer -- npx -y @mcpware/claude-code-organizer
```

**Codex CLI**

```bash
codex mcp add claude-code-organizer -- npx -y @mcpware/claude-code-organizer
```

**Gemini CLI**

```bash
gemini mcp add claude-code-organizer npx -y @mcpware/claude-code-organizer
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "claude-code-organizer": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "claude-code-organizer": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
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
    "claude-code-organizer": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@mcpware/claude-code-organizer"
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
    "claude-code-organizer": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "claude-code-organizer": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "claude-code-organizer": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  claude-code-organizer:
    type: stdio
    cmd: npx
    args: ["-y","@mcpware/claude-code-organizer"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "claude-code-organizer": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "claude-code-organizer": {
      "command": "npx",
      "args": [
        "-y",
        "@mcpware/claude-code-organizer"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `claude-code-organizer.cordis.yml  →  dsh web --patch ./claude-code-organizer.cordis.yml`

```yaml
- insert:
    - id: mcp-claude-code-organizer
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: claude-code-organizer
        transport: stdio
        command: npx
        args: ["-y","@mcpware/claude-code-organizer"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="visualtorch-mcp"></a>

### PyTorch architecture diagrams

[VisualTorch](https://github.com/willyfh/visualtorch) — `Servidor MCP` · ★ 332 · Licença: MIT · Funciona com: Todos os clientes

Renderiza diagramas de arquitetura de modelos PyTorch e revelações em GIF animado a partir de uma fonte de modelo confiável.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio visualtorch -- uvx visualtorch
```

**Codex CLI**

```bash
codex mcp add visualtorch -- uvx visualtorch
```

**Gemini CLI**

```bash
gemini mcp add visualtorch uvx visualtorch
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "visualtorch": {
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "visualtorch": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "visualtorch"
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
    "visualtorch": {
      "type": "local",
      "command": [
        "uvx",
        "visualtorch"
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
    "visualtorch": {
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "visualtorch": {
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "visualtorch": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  visualtorch:
    type: stdio
    cmd: uvx
    args: ["visualtorch"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "visualtorch": {
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "visualtorch": {
      "command": "uvx",
      "args": [
        "visualtorch"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `visualtorch.cordis.yml  →  dsh web --patch ./visualtorch.cordis.yml`

```yaml
- insert:
    - id: mcp-visualtorch
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: visualtorch
        transport: stdio
        command: uvx
        args: ["visualtorch"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="stata-mcp"></a>

### Stata regression analysis

[SepineTam/stata-mcp](https://github.com/SepineTam/stata-mcp) — `Servidor MCP` · ★ 260 · Licença: AGPL-3.0 · Funciona com: Todos os clientes

Permite que um LLM ajude a rodar análises de regressão no Stata.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio stata-mcp -- uvx stata-mcp
```

**Codex CLI**

```bash
codex mcp add stata-mcp -- uvx stata-mcp
```

**Gemini CLI**

```bash
gemini mcp add stata-mcp uvx stata-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "stata-mcp": {
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "stata-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "stata-mcp"
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
    "stata-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "stata-mcp"
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
    "stata-mcp": {
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "stata-mcp": {
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "stata-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  stata-mcp:
    type: stdio
    cmd: uvx
    args: ["stata-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "stata-mcp": {
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "stata-mcp": {
      "command": "uvx",
      "args": [
        "stata-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `stata-mcp.cordis.yml  →  dsh web --patch ./stata-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-stata-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: stata-mcp
        transport: stdio
        command: uvx
        args: ["stata-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="blatui-mcp"></a>

### shadcn/ui components for Laravel Blade

[anousss007/blatui](https://github.com/anousss007/blatui) — `Servidor MCP` · ★ 252 · Licença: ver repo · Funciona com: Todos os clientes

shadcn/ui para Laravel Blade: descubra, leia e instale componentes, blocos e gráficos do BlatUI.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http blatui https://blatui.remix-it.com/mcp
```

**Codex CLI**

```bash
codex mcp add blatui --url https://blatui.remix-it.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http blatui https://blatui.remix-it.com/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "blatui": {
      "url": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "blatui": {
      "type": "http",
      "url": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "blatui": {
      "type": "remote",
      "url": "https://blatui.remix-it.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "blatui": {
      "type": "streamableHttp",
      "url": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "blatui": {
      "serverUrl": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "blatui": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://blatui.remix-it.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  blatui:
    type: streamable_http
    uri: https://blatui.remix-it.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "blatui": {
      "type": "streamable-http",
      "url": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "blatui": {
      "type": "streamable-http",
      "url": "https://blatui.remix-it.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `blatui.cordis.yml  →  dsh web --patch ./blatui.cordis.yml`

```yaml
- insert:
    - id: mcp-blatui
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: blatui
        transport: streamable-http
        url: https://blatui.remix-it.com/mcp
```

</details>

<a id="vscode-demo-time-mcp"></a>

### Build presentations with Demo Time

[estruyf/vscode-demo-time](https://github.com/estruyf/vscode-demo-time) — `Servidor MCP` · ★ 246 · Licença: ver repo · Funciona com: Todos os clientes

Permite que assistentes de IA interajam com a extensão Demo Time do VS Code para ajudar a montar apresentações e demos.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio vscode-demo-time -- npx -y @demotime/mcp
```

**Codex CLI**

```bash
codex mcp add vscode-demo-time -- npx -y @demotime/mcp
```

**Gemini CLI**

```bash
gemini mcp add vscode-demo-time npx -y @demotime/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "vscode-demo-time": {
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "vscode-demo-time": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
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
    "vscode-demo-time": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@demotime/mcp"
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
    "vscode-demo-time": {
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "vscode-demo-time": {
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "vscode-demo-time": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  vscode-demo-time:
    type: stdio
    cmd: npx
    args: ["-y","@demotime/mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "vscode-demo-time": {
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "vscode-demo-time": {
      "command": "npx",
      "args": [
        "-y",
        "@demotime/mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `vscode-demo-time.cordis.yml  →  dsh web --patch ./vscode-demo-time.cordis.yml`

```yaml
- insert:
    - id: mcp-vscode-demo-time
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: vscode-demo-time
        transport: stdio
        command: npx
        args: ["-y","@demotime/mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-data-agent"></a>

### AI database connection and SQL

[omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) — `Plugin nativo` · ★ 196 · Licença: MIT · Funciona com: DeepSeek Harness apenas

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

[xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) — `Plugin nativo` · ★ 117 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Faz backup, exporta, importa e migra toda a config do DSH: definições, plugins, MCP, skills, workspaces. Segredos ficam excluídos por padrão ou cifrados em AES-256-GCM se ativado. Importações mostram prévia com rollback; perfis guardam várias config; sync remota via repo Git.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xiajiajun516/dsh-config-manager
```

</details>

<a id="dsh-dsh-remote-flymysql"></a>

### Manage multiple SSH workspaces

[flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) — `Plugin nativo` · ★ 90 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Gerencia vários hosts SSH como workspaces: escolha um workspace local ou remoto no fluxo Add-workspace, espelhe um workspace remoto numa pasta local real e opere-o com ferramentas rw_*; um modal centralizado preenche / para caminhos remotos com autocompletar de diretórios.

**Alternativas:**

- [caoyiwei850/dsh-ssh-ops](https://github.com/caoyiwei850/dsh-ssh-ops) (★ 21) — Adiciona um terminal de operações SSH que controla um servidor a partir da conversa, com um terminal xterm.js interativo ao lado

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

[literaf/dsh-ai4scholar](https://github.com/literaf/dsh-ai4scholar) — `Plugin nativo` · ★ 27 · Licença: MIT · Funciona com: DeepSeek Harness apenas

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

<a id="dsh-dsh-zotero"></a>

### Zotero evidence store for agents

[Vncntvx/dsh-zotero](https://github.com/Vncntvx/dsh-zotero) — `Plugin nativo` · ★ 21 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Usa o Zotero como repositório de evidências para agentes: pesquisa sua biblioteca, inspeciona metadados e notas, recupera trechos de evidência, abre os PDFs de origem e gera citações e bibliografias.

**Alternativas:**

- [STARDUSTLC666/dsh-cite](https://github.com/STARDUSTLC666/dsh-cite) (★ 2) — Funciona sem biblioteca Zotero: busca exata por DOI, pesquisa no Crossref, citações em vários estilos, BibTeX e validação de DOI

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Vncntvx/dsh-zotero
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

[PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) — `Plugin nativo` · ★ 19 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Superfície de ações LSP para o DSH: diagnósticos, formatação, autocompletar, ações de código, símbolos, ajuda de assinatura, inlay hints e renomeação, todos apoiados por language servers reais.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-lsp-actions
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

<a id="dsh-dsh-auxiliary"></a>

### Auxiliary model routing tools

[dsh-plugins/dsh-auxiliary](https://github.com/dsh-plugins/dsh-auxiliary) — `Plugin nativo` · ★ 10 · Licença: LGPL-3.0 · Funciona com: DeepSeek Harness apenas

Fornece rotas de modelo dedicadas, ferramentas e orientações de sistema para visão, compactação, revisões, subagentes, títulos e geração de imagens.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dsh-plugins/dsh-auxiliary
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

<a id="openbrand-mcp"></a>

### Brand asset extraction

[OpenBrand](https://github.com/ethanjyx/openbrand/tree/main/mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Extrai ativos de marca (logos, cores, imagens de fundo, nome da marca) a partir de qualquer URL de site; exige OPENBRAND_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio openbrand --env OPENBRAND_API_KEY='<OPENBRAND_API_KEY>' -- npx -y openbrand-mcp
```

**Codex CLI**

```bash
codex mcp add openbrand --env OPENBRAND_API_KEY='<OPENBRAND_API_KEY>' -- npx -y openbrand-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e OPENBRAND_API_KEY='<OPENBRAND_API_KEY>' openbrand npx -y openbrand-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "openbrand": {
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "openbrand": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
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
    "openbrand": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "openbrand-mcp"
      ],
      "enabled": true,
      "environment": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "openbrand": {
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "openbrand": {
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "openbrand": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  openbrand:
    type: stdio
    cmd: npx
    args: ["-y","openbrand-mcp"]
    envs:
      OPENBRAND_API_KEY: "<OPENBRAND_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "openbrand": {
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "openbrand": {
      "command": "npx",
      "args": [
        "-y",
        "openbrand-mcp"
      ],
      "env": {
        "OPENBRAND_API_KEY": "<OPENBRAND_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `openbrand.cordis.yml  →  dsh web --patch ./openbrand.cordis.yml`

```yaml
- insert:
    - id: mcp-openbrand
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: openbrand
        transport: stdio
        command: npx
        args: ["-y","openbrand-mcp"]
        env: {"OPENBRAND_API_KEY":"<OPENBRAND_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="tldraw-mcp-app"></a>

### Collaborative drawing canvas

[tldraw/tldraw](https://github.com/tldraw/tldraw/tree/main/apps/mcp-app) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Desenha e colabora visualmente com agentes na tela compartilhada do tldraw.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http tldraw https://tldraw-mcp-app.tldraw.workers.dev/mcp
```

**Codex CLI**

```bash
codex mcp add tldraw --url https://tldraw-mcp-app.tldraw.workers.dev/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http tldraw https://tldraw-mcp-app.tldraw.workers.dev/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "tldraw": {
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "tldraw": {
      "type": "http",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "tldraw": {
      "type": "remote",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "tldraw": {
      "type": "streamableHttp",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "tldraw": {
      "serverUrl": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "tldraw": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  tldraw:
    type: streamable_http
    uri: https://tldraw-mcp-app.tldraw.workers.dev/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "tldraw": {
      "type": "streamable-http",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "tldraw": {
      "type": "streamable-http",
      "url": "https://tldraw-mcp-app.tldraw.workers.dev/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `tldraw.cordis.yml  →  dsh web --patch ./tldraw.cordis.yml`

```yaml
- insert:
    - id: mcp-tldraw
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: tldraw
        transport: streamable-http
        url: https://tldraw-mcp-app.tldraw.workers.dev/mcp
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
