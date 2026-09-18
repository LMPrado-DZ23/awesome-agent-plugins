# Fluxo de trabalho e agentes

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [DZ23 Subagents Universal MCP](#dz23-subagents) — Roteador MCP self-hosted que delega tarefas de texto/código a vários modelos com failover automático, subagent…
- [Multi-agent team orchestration](#dsh-dsh-agent-teams) — AgentTeams: coordena vários agentes trabalhando juntos como uma equipe em uma tarefa compartilhada.
- [Manage agent instruction rule files](#dsh-dsh-purge) — Adiciona uma interface em Configurações para editar o prompt-inject.md e gerenciar conjuntos de regras AGENTS.…
- [Novel-writing production workbench](#dsh-openwrite) — Bancada de escrita de romances para o DSH com um preset de autoria, gerenciamento de esboço e personagens, ano…
- [External agent runtime connector](#dsh-sandbase-harness) — Conecta o DSH a um runtime local do SandBase Harness via MCP por stdio para gerenciar agentes e sessões, trans…
- [Native conversational image generation](#dsh-dsh-image-gen) — Geração nativa de imagens por conversa no DeepSeek Harness: peça ao agente para criar uma imagem e ele cuida d…
- [Auditable AGI self-improvement loop](#dsh-dsh-memory) — Explora uma arquitetura AGI caixa-branca: loop metacognitivo, aprendizado contínuo via flywheel de conheciment…
- [Cron-scheduled task board](#dsh-dsh-taskboard) — Quadro de tarefas para o DSH: cria tarefas com atribuição de projeto e modelo, executando manualmente ou em cr…
- [Research workbench with provenance](#dsh-dsh-science) — Bancada de pesquisa ao estilo Claude Science: um motor de loop de pesquisa ReAct, artefatos versionados com ra…
- [Requirements and test-evidence guard](#dsh-dsh-doublecheck) — Guarda de disciplina de engenharia: um interrogatório de requisitos antes da primeira edição, portões de evidê…
- [Multi-agent math verification framework](#dsh-vibe-mathematics) — Framework multiagente de resolução e verificação de problemas matemáticos: brainstorm, iteração do solver, deb…
- [Scheduled headless coding runs](#dsh-dsh-automation) — Executa tarefas de codificação agendadas em sessões isoladas do DeepSeek Harness, gerenciadas pelo Settings ou…
- [Agent network identity (ANP)](#dsh-dsh-awiki) — Dá aos agentes do DSH identidades nativas baseadas no protocolo aberto Agent Network Protocol (ANP), permitind…
- [Durable background child agents](#dsh-dsh-background-agents) — Agentes-filho de fundo duráveis sobre a interface oficial de subagentes: iniciam a partir de qualquer sessão, …
- [Agent governance and role bindings](#dsh-dsh-kingdom) — Governança de agentes para o DeepSeek Harness: territórios, vínculos de papel com identidade de modelo ou agen…
- [Requirements-drift runtime guard](#dsh-dsh-requirements-alignment) — Guarda de desvio de requisitos em tempo de execução que mantém agentes DSH de longa duração alinhados com o ob…
- [Model failover and agent orchestration](#dsh-dsh-ha-orchestrator) — Failover de alta disponibilidade de modelos (quarentena, circuit breaking, recuperação por sondagem) e orquest…
- [ChatGPT account sign-in for DSH](#dsh-fn-os-apps-dsh-codex-auth-plugin) — Autentica o DSH com uma conta ChatGPT via OAuth do Codex, sem chave de API. Associa o login ao provedor Codex,…
- [Deploy durable managed agents](#omnara-mcp) — Implanta agentes de IA duráveis com o Omnara, uma plataforma open-source de agentes gerenciados.
- [Enforced workflow discipline for agents](#task-orchestrator-mcp) — Disciplina de workflow imposta pelo servidor para agentes de IA: itens de trabalho, grafos de dependência e po…
- [Execution engine with 412 modules](#flyto-core-mcp) — Motor de execução para agentes de IA com 412 módulos, cobrindo navegador, arquivos, Docker, dados e cripto.
- [Generate project plans from prompts](#planexe-mcp) — Gera rascunhos de planos de projeto a partir de prompts em linguagem natural; exige X-API-Key.
- [Goal completion verification](#dsh-dsh-gungnir-dsh-plugin) — Trava um objetivo via /ultragoal e verifica sua conclusão com base nos códigos de saída dos comandos e nos art…
- [Metacognitive agent oversight](#vibe-check-mcp-server) — Supervisão metacognitiva de agentes de IA: interrupções adaptativas para alinhamento, reflexão e segurança; ex…
- [Multi-agent orchestration with swarms](#claude-flow-mcp) — Orquestração de IA com enxames hive-mind, redes neurais e 87 ferramentas para desenvolvimento corporativo; exi…
- [Profile-wide governance and routing](#dsh-odai-odai-dsh-plugin) — Governança e roteamento em todo o perfil com um centro de controle web para inspecionar responsabilidade e evi…
- [Replay recorded agent runs](#orcareplay-mcp) — Lê, reproduz e bifurca execuções gravadas de agentes de código.
- [Route work across coding agents](#claudexor-mcp) — Roteia trabalho de codificação entre Claude Code, Codex, Cursor e OpenCode com contexto compartilhado.
- [Self-reflecting agent framework](#praisonai-mcp) — Framework de agentes de IA com autorreflexão e suporte a MCP.
- [Sequential Thinking (reference)](#sequential-thinking) — Ferramenta de raciocínio passo a passo: o agente registra, revisa e ramifica pensamentos enquanto resolve um p…
- [Skill-driven loop engineering agent](#dsh-mstar-harness-dsh) — Plugin de agente de workflow orientado a habilidades e engenharia de loops para o harness.
- [Spec-driven development workflow](#mcp-server-spec-driven-development) — Facilita workflows de desenvolvimento orientado a especificação, como alternativa ao vibe coding sem estrutura…

<a id="dz23-subagents"></a>

### DZ23 Subagents Universal MCP

[DZ23 Subagents Universal MCP](https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Roteador MCP self-hosted que delega tarefas de texto/código a vários modelos com failover automático, subagentes paralelos por papel (architect, backend, security, QA…), consenso e memória de missão compartilhada entre harnesses. Node.js 22+, sem dependências de runtime.

<details><summary>Instalar</summary>

**Claude Code**

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```bash
claude mcp add --transport stdio dz23-subagents -- node '<DZ23_DIR>/src/index.js' --stdio
```

**Codex CLI**

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```bash
codex mcp add dz23-subagents -- node '<DZ23_DIR>/src/index.js' --stdio
```

**Gemini CLI**

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```bash
gemini mcp add dz23-subagents node '<DZ23_DIR>/src/index.js' --stdio
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "mcpServers": {
    "dz23-subagents": {
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "servers": {
    "dz23-subagents": {
      "type": "stdio",
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "dz23-subagents": {
      "type": "local",
      "command": [
        "node",
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "mcpServers": {
    "dz23-subagents": {
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "mcpServers": {
    "dz23-subagents": {
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "context_servers": {
    "dz23-subagents": {
      "source": "custom",
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```yaml
extensions:
  dz23-subagents:
    type: stdio
    cmd: node
    args: ["<DZ23_DIR>/src/index.js","--stdio"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "mcpServers": {
    "dz23-subagents": {
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```json
{
  "mcpServers": {
    "dz23-subagents": {
      "command": "node",
      "args": [
        "<DZ23_DIR>/src/index.js",
        "--stdio"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `dz23-subagents.cordis.yml  →  dsh web --patch ./dz23-subagents.cordis.yml`

Pré-requisito: `git clone https://github.com/LMPrado-DZ23/dz23-subagents-universal-mcp <DZ23_DIR> && cd <DZ23_DIR> && cp .env.example .env (add your provider keys) && node src/index.js doctor`

```yaml
- insert:
    - id: mcp-dz23-subagents
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: dz23-subagents
        transport: stdio
        command: node
        args: ["<DZ23_DIR>/src/index.js","--stdio"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-agent-teams"></a>

### Multi-agent team orchestration

[NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — `Plugin nativo` · ★ 1.7k · Licença: MIT · Funciona com: DeepSeek Harness apenas

AgentTeams: coordena vários agentes trabalhando juntos como uma equipe em uma tarefa compartilhada.

**Alternativas:**

- [stuarthu/dsh-crew](https://github.com/stuarthu/dsh-crew) (★ 6) — Adiciona um portão de PRD escrito pelo PM, seguido por conjuntos de ferramentas fixos por papel para arquiteto, engenheiro, QA e revisores.
- [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) (★ 176) — Adiciona esquadrões persistentes configurados em Settings, com políticas de modelo por membro e um planejador DAG limitado.
- [limuyang2/agent-team](https://github.com/limuyang2/agent-team) (★ 35) — Adiciona contextos independentes e workspaces compartilhados por assistente, com modelos e habilidades por assistente.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:NanmiCoder/dsh-agent-teams
```

</details>

<a id="dsh-dsh-purge"></a>

### Manage agent instruction rule files

[YuJunZhiXue/dsh-purge](https://github.com/YuJunZhiXue/dsh-purge) — `Plugin nativo` · ★ 1.4k · Licença: MIT · Funciona com: DeepSeek Harness apenas

Adiciona uma interface em Configurações para editar o prompt-inject.md e gerenciar conjuntos de regras AGENTS.md ou CLAUDE.md, verificar atualizações de plugins e aplicar ou restaurar atualizações locais reversíveis de pacotes.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:YuJunZhiXue/dsh-purge
```

</details>

<a id="dsh-openwrite"></a>

### Novel-writing production workbench

[LiPu-jpg/Openwrite](https://github.com/LiPu-jpg/Openwrite) — `Plugin nativo` · ★ 742 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Bancada de escrita de romances para o DSH com um preset de autoria, gerenciamento de esboço e personagens, anotações no manuscrito, fluxos de revisão e um backend Python local gerenciado.

**Alternativas:**

- [EthanYoQ/AI-Novel-Writer#dsh-ai-novel-writer](https://github.com/EthanYoQ/AI-Novel-Writer/tree/master/plugins/dsh-ai-novel-writer) — Adiciona uma gaveta lateral compacta e alterações em arquivo único sujeitas a aprovação sobre ativos de projeto versionados.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add "https://github.com/LiPu-jpg/Openwrite/releases/download/v0.2.8/dsh-openwrite-0.2.8.tgz"
```

</details>

<a id="dsh-sandbase-harness"></a>

### External agent runtime connector

[sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) — `Plugin nativo` · ★ 646 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Conecta o DSH a um runtime local do SandBase Harness via MCP por stdio para gerenciar agentes e sessões, transmitir turnos, inspecionar artefatos e cancelar trabalhos.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:sandbaseai/sandbase-harness
```

</details>

<a id="dsh-dsh-image-gen"></a>

### Native conversational image generation

[shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) — `Plugin nativo` · ★ 438 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Geração nativa de imagens por conversa no DeepSeek Harness: peça ao agente para criar uma imagem e ele cuida da geração, mantendo o resultado direto na conversa.

**Alternativas:**

- [zclDragon/dsh-tool-generate-image](https://github.com/zclDragon/dsh-tool-generate-image) (★ 2) — Adiciona uma ferramenta generate_image para modelos apenas de texto, desenhando via Gemini pela Antigravity CLI.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:shanliuling/dsh-image-gen
```

</details>

<a id="dsh-dsh-memory"></a>

### Auditable AGI self-improvement loop

[FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) — `Plugin nativo` · ★ 221 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Explora uma arquitetura AGI caixa-branca: loop metacognitivo, aprendizado contínuo via flywheel de conhecimento, modelo de mundo com grafo de memória espaço-temporal, auto-aperfeiçoamento bootstrap e guardrails de confiança auditáveis, sem depender de LLM.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:FuRongJun-1999/dsh-memory
```

</details>

<a id="dsh-dsh-taskboard"></a>

### Cron-scheduled task board

[cloader/dsh-taskboard](https://github.com/cloader/dsh-taskboard) — `Plugin nativo` · ★ 48 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Quadro de tarefas para o DSH: cria tarefas com atribuição de projeto e modelo, executando manualmente ou em cron; novas sessões em um projeto pegam automaticamente as tarefas pendentes e as movem para em-revisão ao concluir.

**Alternativas:**

- [whyihaveyou/dsh-suite#plugin-team-board](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-team-board) — Adiciona um quadro multiagente compartilhado com operações explícitas de criar/reivindicar/transicionar/consultar sobre uma chave de serviço.
- [StruggleYang/dsh-project-kanban](https://github.com/StruggleYang/dsh-project-kanban) (★ 5) — Adiciona um quadro kanban no navegador com desfazer, modelos e arquivamento, além de nove ferramentas de planejamento para o modelo.
- [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) (★ 325) — Adiciona um pipeline SQLite de backlog até concluído em que ferramentas do agente só podem submeter trabalho para revisão, além de uma CLI headless.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:cloader/dsh-taskboard
```

</details>

<a id="dsh-dsh-science"></a>

### Research workbench with provenance

[biociao/dsh-science](https://github.com/biociao/dsh-science) — `Plugin nativo` · ★ 39 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Bancada de pesquisa ao estilo Claude Science: um motor de loop de pesquisa ReAct, artefatos versionados com rastreamento de proveniência e dez habilidades científicas para genômica, patógenos e bioinformática.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:biociao/dsh-science
```

</details>

<a id="dsh-dsh-doublecheck"></a>

### Requirements and test-evidence guard

[PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) — `Plugin nativo` · ★ 34 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Guarda de disciplina de engenharia: um interrogatório de requisitos antes da primeira edição, portões de evidência de teste red/green, uma revisão adversária bifurcada e um relatório de entrega com verificação por dimensão.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-doublecheck
```

</details>

<a id="dsh-vibe-mathematics"></a>

### Multi-agent math verification framework

[ChongCyrus/Vibe-Mathematics](https://github.com/ChongCyrus/Vibe-Mathematics) — `Plugin nativo` · ★ 28 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Framework multiagente de resolução e verificação de problemas matemáticos: brainstorm, iteração do solver, debate entre múltiplos verificadores e uma base de conhecimento verificada, com retomada por checkpoint e intervenção manual ou automática.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ChongCyrus/Vibe-Mathematics
```

</details>

<a id="dsh-dsh-automation"></a>

### Scheduled headless coding runs

[MichengAI/dsh-automation](https://github.com/MichengAI/dsh-automation) — `Plugin nativo` · ★ 19 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Executa tarefas de codificação agendadas em sessões isoladas do DeepSeek Harness, gerenciadas pelo Settings ou pelo próprio agente.

**Alternativas:**

- [Ceelog/dsh-plugins#dsh-plugin-scheduled-tasks](https://github.com/Ceelog/dsh-plugins/tree/main/src/plugins/dsh-plugin-scheduled-tasks) — Adiciona agendamentos únicos, por intervalo e cron por projeto, com histórico de execução durável.
- [KelaoHu/dsh-lowtide#dsh-lowtide](https://github.com/KelaoHu/dsh-lowtide/tree/main/packages/dsh-lowtide) — Executa lotes de tarefas automaticamente em horários de baixo uso, com quatro estratégias de execução e adjudicação L1-L3.
- [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) (★ 95) — Execuções agendadas mais simples em sessões novas do agente, com histórico auditável.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MichengAI/dsh-automation
```

</details>

<a id="dsh-dsh-awiki"></a>

### Agent network identity (ANP)

[AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) — `Plugin nativo` · ★ 17 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Dá aos agentes do DSH identidades nativas baseadas no protocolo aberto Agent Network Protocol (ANP), permitindo comunicação direta, em grupo, por mensagem e agente-a-agente baseada em identidade.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:AgentConnect/dsh-awiki
```

</details>

<a id="dsh-dsh-background-agents"></a>

### Durable background child agents

[PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) — `Plugin nativo` · ★ 16 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Agentes-filho de fundo duráveis sobre a interface oficial de subagentes: iniciam a partir de qualquer sessão, com progresso visível na barra lateral, mensagens e interrupção a qualquer momento, escopo de ferramentas por filho e limites de profundidade de delegação.

**Alternativas:**

- [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) (★ 148) — Adiciona o despacho de trabalho para agentes DSH direto do Claude Code ou Codex, além de uma ponte multimodal.
- [hongyue0721/dsh-kimicode-swarm](https://github.com/hongyue0721/dsh-kimicode-swarm) (★ 4) — Adiciona despacho de subagentes em lote paralelo com agendamento adaptativo e um comando /swarm.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-background-agents
```

</details>

<a id="dsh-dsh-kingdom"></a>

### Agent governance and role bindings

[lusblead/dsh-Kingdom](https://github.com/lusblead/dsh-Kingdom) — `Plugin nativo` · ★ 15 · Licença: AGPL-3.0 · Funciona com: DeepSeek Harness apenas

Governança de agentes para o DeepSeek Harness: territórios, vínculos de papel com identidade de modelo ou agente, e um loop de tarefas planejar-atribuir-executar-revisar em que reivindicações do worker nunca se concluem sozinhas, além de um console de operações GUI local.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:lusblead/dsh-Kingdom
```

</details>

<a id="dsh-dsh-requirements-alignment"></a>

### Requirements-drift runtime guard

[jiezeng2004-design/dsh-requirements-alignment](https://github.com/jiezeng2004-design/dsh-requirements-alignment) — `Plugin nativo` · ★ 8 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Guarda de desvio de requisitos em tempo de execução que mantém agentes DSH de longa duração alinhados com o objetivo, as restrições e as decisões aprovados pelo usuário.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jiezeng2004-design/dsh-requirements-alignment
```

</details>

<a id="dsh-dsh-ha-orchestrator"></a>

### Model failover and agent orchestration

[Saktawdi/dsh-ha-orchestrator](https://github.com/Saktawdi/dsh-ha-orchestrator) — `Plugin nativo` · ★ 6 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Failover de alta disponibilidade de modelos (quarentena, circuit breaking, recuperação por sondagem) e orquestração de subagentes (fanout, pipeline, supervisor), com UI de configurações bilíngue.

**Alternativas:**

- [Letter2025/dsh-model-failover](https://github.com/Letter2025/dsh-model-failover) (★ 4) — Circuit breaker mais simples de dois níveis que desativa um modelo ou provedor após falhas repetidas e roteia para um fallback configurado.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Saktawdi/dsh-ha-orchestrator
```

</details>

<a id="dsh-fn-os-apps-dsh-codex-auth-plugin"></a>

### ChatGPT account sign-in for DSH

[tnnevol/fn-os-apps#dsh-codex-auth-plugin](https://github.com/tnnevol/fn-os-apps/tree/main/plugins/dsh-codex-auth-plugin) — `Plugin nativo` · Licença: AGPL-3.0 · Funciona com: DeepSeek Harness apenas

Autentica o DSH com uma conta ChatGPT via OAuth do Codex, sem chave de API. Associa o login ao provedor Codex, define modelo padrão e esforço de raciocínio, atualiza a lista de modelos do catálogo da conta e mostra janelas de uso no compositor.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:tnnevol/fn-os-apps#path:/plugins/dsh-codex-auth-plugin
```

</details>

<a id="omnara-mcp"></a>

### Deploy durable managed agents

[Omnara](https://github.com/omnara-ai/omnara) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Implanta agentes de IA duráveis com o Omnara, uma plataforma open-source de agentes gerenciados.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http omnara https://app.omnara.com/mcp
```

**Codex CLI**

```bash
codex mcp add omnara --url https://app.omnara.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http omnara https://app.omnara.com/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "omnara": {
      "url": "https://app.omnara.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "omnara": {
      "type": "http",
      "url": "https://app.omnara.com/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "omnara": {
      "type": "remote",
      "url": "https://app.omnara.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "omnara": {
      "type": "streamableHttp",
      "url": "https://app.omnara.com/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "omnara": {
      "serverUrl": "https://app.omnara.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "omnara": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://app.omnara.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  omnara:
    type: streamable_http
    uri: https://app.omnara.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "omnara": {
      "type": "streamable-http",
      "url": "https://app.omnara.com/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "omnara": {
      "type": "streamable-http",
      "url": "https://app.omnara.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `omnara.cordis.yml  →  dsh web --patch ./omnara.cordis.yml`

```yaml
- insert:
    - id: mcp-omnara
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: omnara
        transport: streamable-http
        url: https://app.omnara.com/mcp
```

</details>

<a id="task-orchestrator-mcp"></a>

### Enforced workflow discipline for agents

[MCP Task Orchestrator](https://github.com/jpicklyk/task-orchestrator) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Disciplina de workflow imposta pelo servidor para agentes de IA: itens de trabalho, grafos de dependência e portões de qualidade.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio task-orchestrator -- docker run -i --rm ghcr.io/jpicklyk/task-orchestrator:3.14.0
```

**Codex CLI**

```bash
codex mcp add task-orchestrator -- docker run -i --rm ghcr.io/jpicklyk/task-orchestrator:3.14.0
```

**Gemini CLI**

```bash
gemini mcp add task-orchestrator docker run -i --rm ghcr.io/jpicklyk/task-orchestrator:3.14.0
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "task-orchestrator": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "task-orchestrator": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
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
    "task-orchestrator": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
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
    "task-orchestrator": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "task-orchestrator": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "task-orchestrator": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  task-orchestrator:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/jpicklyk/task-orchestrator:3.14.0"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "task-orchestrator": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "task-orchestrator": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/jpicklyk/task-orchestrator:3.14.0"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `task-orchestrator.cordis.yml  →  dsh web --patch ./task-orchestrator.cordis.yml`

```yaml
- insert:
    - id: mcp-task-orchestrator
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: task-orchestrator
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/jpicklyk/task-orchestrator:3.14.0"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="flyto-core-mcp"></a>

### Execution engine with 412 modules

[Flyto Core](https://github.com/flytohub/flyto-core) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Motor de execução para agentes de IA com 412 módulos, cobrindo navegador, arquivos, Docker, dados e cripto.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio flyto-core -- uvx flyto-core
```

**Codex CLI**

```bash
codex mcp add flyto-core -- uvx flyto-core
```

**Gemini CLI**

```bash
gemini mcp add flyto-core uvx flyto-core
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "flyto-core": {
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "flyto-core": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "flyto-core"
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
    "flyto-core": {
      "type": "local",
      "command": [
        "uvx",
        "flyto-core"
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
    "flyto-core": {
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "flyto-core": {
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "flyto-core": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  flyto-core:
    type: stdio
    cmd: uvx
    args: ["flyto-core"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "flyto-core": {
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "flyto-core": {
      "command": "uvx",
      "args": [
        "flyto-core"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `flyto-core.cordis.yml  →  dsh web --patch ./flyto-core.cordis.yml`

```yaml
- insert:
    - id: mcp-flyto-core
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: flyto-core
        transport: stdio
        command: uvx
        args: ["flyto-core"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="planexe-mcp"></a>

### Generate project plans from prompts

[PlanExe](https://github.com/PlanExeOrg/PlanExe) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Gera rascunhos de planos de projeto a partir de prompts em linguagem natural; exige X-API-Key.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http planexe https://mcp.planexe.org/mcp --header 'X-API-Key: <X_API_KEY>'
```

**Codex CLI**

```bash
codex mcp add planexe --url https://mcp.planexe.org/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http planexe https://mcp.planexe.org/mcp --header 'X-API-Key: <X_API_KEY>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "planexe": {
      "url": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "planexe": {
      "type": "http",
      "url": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
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
    "planexe": {
      "type": "remote",
      "url": "https://mcp.planexe.org/mcp",
      "enabled": true,
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "planexe": {
      "type": "streamableHttp",
      "url": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "planexe": {
      "serverUrl": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "planexe": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.planexe.org/mcp",
        "--header",
        "X-API-Key:<X_API_KEY>"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  planexe:
    type: streamable_http
    uri: https://mcp.planexe.org/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "planexe": {
      "type": "streamable-http",
      "url": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "planexe": {
      "type": "streamable-http",
      "url": "https://mcp.planexe.org/mcp",
      "headers": {
        "X-API-Key": "<X_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `planexe.cordis.yml  →  dsh web --patch ./planexe.cordis.yml`

```yaml
- insert:
    - id: mcp-planexe
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: planexe
        transport: streamable-http
        url: https://mcp.planexe.org/mcp
        headers: {"X-API-Key":"<X_API_KEY>"}
```

</details>

<a id="dsh-dsh-gungnir-dsh-plugin"></a>

### Goal completion verification

[Jonah-Wu23/dsh-gungnir#dsh-plugin](https://github.com/Jonah-Wu23/dsh-gungnir/tree/main/packages/dsh-plugin) — `Plugin nativo` · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Trava um objetivo via /ultragoal e verifica sua conclusão com base nos códigos de saída dos comandos e nos artefatos gerados, impedindo que o agente reporte falsamente uma tarefa como concluída.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Jonah-Wu23/dsh-gungnir#path:/packages/dsh-plugin
```

</details>

<a id="vibe-check-mcp-server"></a>

### Metacognitive agent oversight

[PV-Bhat/vibe-check-mcp-server](https://github.com/PV-Bhat/vibe-check-mcp-server) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Supervisão metacognitiva de agentes de IA: interrupções adaptativas para alinhamento, reflexão e segurança; exige uma chave de API.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio vibe-check-mcp-server --env YOUR_API_KEY='<YOUR_API_KEY>' -- npx -y @pv-bhat/vibe-check-mcp
```

**Codex CLI**

```bash
codex mcp add vibe-check-mcp-server --env YOUR_API_KEY='<YOUR_API_KEY>' -- npx -y @pv-bhat/vibe-check-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e YOUR_API_KEY='<YOUR_API_KEY>' vibe-check-mcp-server npx -y @pv-bhat/vibe-check-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "vibe-check-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "vibe-check-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
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
    "vibe-check-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "enabled": true,
      "environment": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "vibe-check-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "vibe-check-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "vibe-check-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  vibe-check-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@pv-bhat/vibe-check-mcp"]
    envs:
      YOUR_API_KEY: "<YOUR_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "vibe-check-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "vibe-check-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@pv-bhat/vibe-check-mcp"
      ],
      "env": {
        "YOUR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `vibe-check-mcp-server.cordis.yml  →  dsh web --patch ./vibe-check-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-vibe-check-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: vibe-check-mcp-server
        transport: stdio
        command: npx
        args: ["-y","@pv-bhat/vibe-check-mcp"]
        env: {"YOUR_API_KEY":"<YOUR_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="claude-flow-mcp"></a>

### Multi-agent orchestration with swarms

[ruvnet/claude-flow](https://github.com/ruvnet/claude-flow) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Orquestração de IA com enxames hive-mind, redes neurais e 87 ferramentas para desenvolvimento corporativo; exige ANTHROPIC_API_KEY, GITHUB_TOKEN e FLOW_NEXUS_API_KEY.

**Alternativas:**

- [ruvnet/ruv-FANN/tree/main/ruv-swarm](https://github.com/ruvnet/ruv-FANN/tree/main/ruv-swarm) — Orquestração de enxames de redes neurais com aceleração WebAssembly.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio claude-flow --env ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' --env GITHUB_TOKEN='<GITHUB_TOKEN>' --env FLOW_NEXUS_API_KEY='<FLOW_NEXUS_API_KEY>' -- npx -y claude-flow
```

**Codex CLI**

```bash
codex mcp add claude-flow --env ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' --env GITHUB_TOKEN='<GITHUB_TOKEN>' --env FLOW_NEXUS_API_KEY='<FLOW_NEXUS_API_KEY>' -- npx -y claude-flow
```

**Gemini CLI**

```bash
gemini mcp add -e ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' -e GITHUB_TOKEN='<GITHUB_TOKEN>' -e FLOW_NEXUS_API_KEY='<FLOW_NEXUS_API_KEY>' claude-flow npx -y claude-flow
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "claude-flow": {
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "claude-flow": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
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
    "claude-flow": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "claude-flow"
      ],
      "enabled": true,
      "environment": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "claude-flow": {
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "claude-flow": {
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "claude-flow": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  claude-flow:
    type: stdio
    cmd: npx
    args: ["-y","claude-flow"]
    envs:
      ANTHROPIC_API_KEY: "<ANTHROPIC_API_KEY>"
      GITHUB_TOKEN: "<GITHUB_TOKEN>"
      FLOW_NEXUS_API_KEY: "<FLOW_NEXUS_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "claude-flow": {
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "claude-flow": {
      "command": "npx",
      "args": [
        "-y",
        "claude-flow"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "GITHUB_TOKEN": "<GITHUB_TOKEN>",
        "FLOW_NEXUS_API_KEY": "<FLOW_NEXUS_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `claude-flow.cordis.yml  →  dsh web --patch ./claude-flow.cordis.yml`

```yaml
- insert:
    - id: mcp-claude-flow
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: claude-flow
        transport: stdio
        command: npx
        args: ["-y","claude-flow"]
        env: {"ANTHROPIC_API_KEY":"<ANTHROPIC_API_KEY>","GITHUB_TOKEN":"<GITHUB_TOKEN>","FLOW_NEXUS_API_KEY":"<FLOW_NEXUS_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-odai-odai-dsh-plugin"></a>

### Profile-wide governance and routing

[orziz/odai#odai-dsh-plugin](https://github.com/orziz/odai/tree/main/dsh/plugin) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Governança e roteamento em todo o perfil com um centro de controle web para inspecionar responsabilidade e evidências, além de compactação, memória semântica com escopo, continuidade de segurança e entrega verificada.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:orziz/odai#path:/dsh/plugin
```

</details>

<a id="orcareplay-mcp"></a>

### Replay recorded agent runs

[Continuum-AI-Corp/OrcaReplay](https://github.com/Continuum-AI-Corp/OrcaReplay) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Lê, reproduz e bifurca execuções gravadas de agentes de código.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio orcareplay -- npx -y orcareplay
```

**Codex CLI**

```bash
codex mcp add orcareplay -- npx -y orcareplay
```

**Gemini CLI**

```bash
gemini mcp add orcareplay npx -y orcareplay
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "orcareplay": {
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "orcareplay": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
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
    "orcareplay": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "orcareplay"
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
    "orcareplay": {
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "orcareplay": {
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "orcareplay": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  orcareplay:
    type: stdio
    cmd: npx
    args: ["-y","orcareplay"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "orcareplay": {
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "orcareplay": {
      "command": "npx",
      "args": [
        "-y",
        "orcareplay"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `orcareplay.cordis.yml  →  dsh web --patch ./orcareplay.cordis.yml`

```yaml
- insert:
    - id: mcp-orcareplay
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: orcareplay
        transport: stdio
        command: npx
        args: ["-y","orcareplay"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="claudexor-mcp"></a>

### Route work across coding agents

[Claudexor](https://github.com/razzant/claudexor) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Roteia trabalho de codificação entre Claude Code, Codex, Cursor e OpenCode com contexto compartilhado.

**Alternativas:**

- [Concord MCP](https://github.com/Get-Concord-AI/concord-mcp) — Comunicação entre harnesses e estado de trabalho compartilhado para agentes de código.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio claudexor -- npx -y claudexor
```

**Codex CLI**

```bash
codex mcp add claudexor -- npx -y claudexor
```

**Gemini CLI**

```bash
gemini mcp add claudexor npx -y claudexor
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "claudexor": {
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "claudexor": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
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
    "claudexor": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "claudexor"
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
    "claudexor": {
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "claudexor": {
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "claudexor": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  claudexor:
    type: stdio
    cmd: npx
    args: ["-y","claudexor"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "claudexor": {
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "claudexor": {
      "command": "npx",
      "args": [
        "-y",
        "claudexor"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `claudexor.cordis.yml  →  dsh web --patch ./claudexor.cordis.yml`

```yaml
- insert:
    - id: mcp-claudexor
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: claudexor
        transport: stdio
        command: npx
        args: ["-y","claudexor"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="praisonai-mcp"></a>

### Self-reflecting agent framework

[PraisonAI](https://github.com/MervinPraison/PraisonAI) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Framework de agentes de IA com autorreflexão e suporte a MCP.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio praisonai -- uvx praisonai
```

**Codex CLI**

```bash
codex mcp add praisonai -- uvx praisonai
```

**Gemini CLI**

```bash
gemini mcp add praisonai uvx praisonai
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "praisonai": {
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "praisonai": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "praisonai"
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
    "praisonai": {
      "type": "local",
      "command": [
        "uvx",
        "praisonai"
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
    "praisonai": {
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "praisonai": {
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "praisonai": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  praisonai:
    type: stdio
    cmd: uvx
    args: ["praisonai"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "praisonai": {
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "praisonai": {
      "command": "uvx",
      "args": [
        "praisonai"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `praisonai.cordis.yml  →  dsh web --patch ./praisonai.cordis.yml`

```yaml
- insert:
    - id: mcp-praisonai
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: praisonai
        transport: stdio
        command: uvx
        args: ["praisonai"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="sequential-thinking"></a>

### Sequential Thinking (reference)

[Sequential Thinking (reference)](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Ferramenta de raciocínio passo a passo: o agente registra, revisa e ramifica pensamentos enquanto resolve um problema.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking
```

**Codex CLI**

```bash
codex mcp add sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking
```

**Gemini CLI**

```bash
gemini mcp add sequential-thinking npx -y @modelcontextprotocol/server-sequential-thinking
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "sequential-thinking": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
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
    "sequential-thinking": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
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
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "sequential-thinking": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  sequential-thinking:
    type: stdio
    cmd: npx
    args: ["-y","@modelcontextprotocol/server-sequential-thinking"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `sequential-thinking.cordis.yml  →  dsh web --patch ./sequential-thinking.cordis.yml`

```yaml
- insert:
    - id: mcp-sequential-thinking
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sequential-thinking
        transport: stdio
        command: npx
        args: ["-y","@modelcontextprotocol/server-sequential-thinking"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-mstar-harness-dsh"></a>

### Skill-driven loop engineering agent

[btspoony/mstar-harness#dsh](https://github.com/btspoony/mstar-harness/tree/main/packages/dsh) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Plugin de agente de workflow orientado a habilidades e engenharia de loops para o harness.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:btspoony/mstar-harness#path:/packages/dsh
```

</details>

<a id="mcp-server-spec-driven-development"></a>

### Spec-driven development workflow

[formulahendry/mcp-server-spec-driven-development](https://github.com/formulahendry/mcp-server-spec-driven-development) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Facilita workflows de desenvolvimento orientado a especificação, como alternativa ao vibe coding sem estrutura.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio spec-driven-development -- npx -y mcp-server-spec-driven-development
```

**Codex CLI**

```bash
codex mcp add spec-driven-development -- npx -y mcp-server-spec-driven-development
```

**Gemini CLI**

```bash
gemini mcp add spec-driven-development npx -y mcp-server-spec-driven-development
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "spec-driven-development": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "spec-driven-development": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
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
    "spec-driven-development": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "mcp-server-spec-driven-development"
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
    "spec-driven-development": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "spec-driven-development": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "spec-driven-development": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  spec-driven-development:
    type: stdio
    cmd: npx
    args: ["-y","mcp-server-spec-driven-development"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "spec-driven-development": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "spec-driven-development": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-server-spec-driven-development"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `spec-driven-development.cordis.yml  →  dsh web --patch ./spec-driven-development.cordis.yml`

```yaml
- insert:
    - id: mcp-spec-driven-development
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: spec-driven-development
        transport: stdio
        command: npx
        args: ["-y","mcp-server-spec-driven-development"]
        env: {}
        cwd: !!js process.cwd()
```

</details>
