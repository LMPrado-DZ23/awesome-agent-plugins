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
- [Goal completion verification](#dsh-dsh-gungnir-dsh-plugin) — Trava um objetivo via /ultragoal e verifica sua conclusão com base nos códigos de saída dos comandos e nos art…
- [Profile-wide governance and routing](#dsh-odai-odai-dsh-plugin) — Governança e roteamento em todo o perfil com um centro de controle web para inspecionar responsabilidade e evi…
- [Sequential Thinking (reference)](#sequential-thinking) — Ferramenta de raciocínio passo a passo: o agente registra, revisa e ramifica pensamentos enquanto resolve um p…
- [Skill-driven loop engineering agent](#dsh-mstar-harness-dsh) — Plugin de agente de workflow orientado a habilidades e engenharia de loops para o harness.

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
