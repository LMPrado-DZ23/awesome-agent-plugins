# Memória

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Typed knowledge-graph memory](#dsh-graph-memory) — Memória entre sessões rastreável e pesquisável que guarda o conhecimento das conversas como nós de grafo tipad…
- [Failure-recovery lessons knowledge base](#dsh-misakanet) — Busca e registra lições de recuperação de falhas extraídas de sessões reais de engenharia, com recuperação BM2…
- [Cross-agent shared long-term memory](#dsh-dsh-mnemon) — Memória persistente local, compartilhada entre agentes habilitados para Mnemon: memória de runtime, documentos…
- [Seven-layer SQLite project memory](#dsh-dsh-meow-memory) — Memória entre sessões com escopo de projeto em um repositório SQLite de sete camadas (soul/user/project/fact/l…
- [Approval-gated auditable memory](#dsh-dsh-memento) — Memória entre sessões limitada, em camadas e sujeita a aprovação: uma interface de memória tipada com um prove…
- [Six-layer time-decaying memory](#dsh-stratagate-agentmemory) — Memória de seis camadas com decaimento no tempo: conversas recentes permanecem vívidas enquanto as antigas se …
- [Zero-prompt proactive memory recall](#dsh-dsh-auto-memory) — Memória associativa proativa: recall sem prompt injetado em um ponto fixo, auto-consolidação em três camadas, …
- [Markdown notes capture and sync](#dsh-dsh-md-notes) — Gerenciador e editor de notas em markdown para o DSH: captura rápida de conversas em notas, sincronização com …
- [Auto-distilled hybrid-retrieval memory](#dsh-dsh-layered-memory) — Conversas destiladas automaticamente em fatos atômicos, resumos de cena e um perfil de persona, injetados ante…
- [Personal Obsidian vault memory](#dsh-dsh-client-ui-obsidian-memory) — Memória de IA persistente apoiada em um vault local do Obsidian/Codex, com cinco ferramentas de leitura/escrit…
- [Local/remote knowledge base search](#dsh-dsh-knowledge) — Bases de conhecimento locais e remotas com recall por projeto e por sessão, escrita controlada e um console we…
- [Multi-layer conversation history recall](#dsh-dsh-recall) — Recall do histórico de conversas via recuperação em três camadas (literal, aproximada, semântica) sobre o text…
- [Cross-tool session reader, no export](#dsh-deja-vu-extensions-dsh) — Lê os arquivos de sessão que outros agentes de codificação na mesma máquina já escreveram (Claude Code, Codex,…
- [Memory (reference)](#mcp-memory) — Memória de referência em grafo de conhecimento: entidades, relações e observações num arquivo JSONL local. Não…
- [Plaintext one-fact-per-file memory](#dsh-engramory-plugin) — Memória de longo prazo guardada em markdown puro, um fato por arquivo. Um índice MEMORY.md com limite de taman…
- [Self-evolving team memory in git](#dsh-co-engram-dsh-plugin) — Memória de equipe autoevolutiva mantida como markdown puro no git: 38 ferramentas de memória sem prefixo, além…

<a id="dsh-graph-memory"></a>

### Typed knowledge-graph memory

[adoresever/graph-memory](https://github.com/adoresever/graph-memory) — `Plugin nativo` · ★ 626 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória entre sessões rastreável e pesquisável que guarda o conhecimento das conversas como nós de grafo tipados (tarefa/habilidade/evento) conectados por arestas tipadas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:adoresever/graph-memory
```

</details>

<a id="dsh-misakanet"></a>

### Failure-recovery lessons knowledge base

[Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) — `Plugin nativo` · ★ 493 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Busca e registra lições de recuperação de falhas extraídas de sessões reais de engenharia, com recuperação BM25 mais RAG semântico sobre uma base de lições.

**Alternativas:**

- [akslcw/dsh-negative-ledger](https://github.com/akslcw/dsh-negative-ledger) (★ 3) — Persiste caminhos já refutados com evidências do resultado e bloqueia tentativas repetidas até que essa evidência mude.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Ikalus1988/MisakaNet
```

</details>

<a id="dsh-dsh-mnemon"></a>

### Cross-agent shared long-term memory

[omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) — `Plugin nativo` · ★ 385 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória persistente local, compartilhada entre agentes habilitados para Mnemon: memória de runtime, documentos de projeto pesquisáveis, recall semântico, grafo de conhecimento e UI lateral.

**Alternativas:**

- [vectorize-io/hindsight#coding-agents](https://github.com/vectorize-io/hindsight/tree/main/hindsight-integrations/coding-agents) — Adiciona recall/retenção automáticos com reflexão profunda, páginas de conhecimento e bancos de memória por repositório.
- [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) (★ 128) — Adiciona importação de memórias de dez outras ferramentas de IA, além de página de configurações.
- [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) (★ 112) — Adiciona auto-consolidação durante inatividade, congelamento de memórias conflitantes para revisão e trilha de auditoria reproduzível.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:omdsh-dev/dsh-mnemon
```

</details>

<a id="dsh-dsh-meow-memory"></a>

### Seven-layer SQLite project memory

[Phant0Meow/dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) — `Plugin nativo` · ★ 105 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória entre sessões com escopo de projeto em um repositório SQLite de sete camadas (soul/user/project/fact/lesson/rules/topic), com injeção na primeira mensagem, buscas por palavra-chave por mensagem e consolidação em janelas ociosas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Phant0Meow/dsh-meow-memory
```

</details>

<a id="dsh-dsh-memento"></a>

### Approval-gated auditable memory

[PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) — `Plugin nativo` · ★ 103 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Memória entre sessões limitada, em camadas e sujeita a aprovação: uma interface de memória tipada com um provedor SQLite sem dependências, injeção de snapshots congelados e um conjunto de testes de conformidade para adaptadores.

**Alternativas:**

- [GIT121995/dsh-memory-gate](https://github.com/GIT121995/dsh-memory-gate) (★ 2) — Adiciona decisões explicáveis de usar/verificar/ignorar com trilha de auditoria completa e limite de injeção por chamada.
- [highland0971/dsh-native-memory](https://github.com/highland0971/dsh-native-memory) (★ 2) — Roda na própria camada de armazenamento do harness, sem servidor externo, citando sessão e sequência de cada fato.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-memento
```

</details>

<a id="dsh-stratagate-agentmemory"></a>

### Six-layer time-decaying memory

[diqierjia/StrataGate-AgentMemory](https://github.com/diqierjia/StrataGate-AgentMemory) — `Plugin nativo` · ★ 92 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória de seis camadas com decaimento no tempo: conversas recentes permanecem vívidas enquanto as antigas se transformam em resumos, e eventos e relacionamentos duradouros se consolidam em um grafo de conhecimento. Suporta trazer memórias de outras ferramentas de IA.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add "https://github.com/diqierjia/StrataGate-AgentMemory/releases/latest/download/stratagate-dsh.tgz"
```

</details>

<a id="dsh-dsh-auto-memory"></a>

### Zero-prompt proactive memory recall

[Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) — `Plugin nativo` · ★ 71 · Licença: BSD-3-Clause · Funciona com: DeepSeek Harness apenas

Memória associativa proativa: recall sem prompt injetado em um ponto fixo, auto-consolidação em três camadas, cristalização de habilidades e registros de handoff que sobrevivem a trocas de janela de contexto. Armazenamento local em markdown, agnóstico de modelo, sem dependências.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Aik358/dsh-auto-memory
```

</details>

<a id="dsh-dsh-md-notes"></a>

### Markdown notes capture and sync

[XieZongChen/dsh-md-notes](https://github.com/XieZongChen/dsh-md-notes) — `Plugin nativo` · ★ 17 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Gerenciador e editor de notas em markdown para o DSH: captura rápida de conversas em notas, sincronização com repositórios Git e reinserção das notas no contexto da conversa.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:XieZongChen/dsh-md-notes
```

</details>

<a id="dsh-dsh-layered-memory"></a>

### Auto-distilled hybrid-retrieval memory

[JunNanLYS/dsh-layered-memory](https://github.com/JunNanLYS/dsh-layered-memory) — `Plugin nativo` · ★ 16 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Conversas destiladas automaticamente em fatos atômicos, resumos de cena e um perfil de persona, injetados antes de cada passo do modelo via recuperação híbrida BM25 mais vetorial. Sem configuração, com embeddings locais offline opcionais e separação entre chat e trabalho.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:JunNanLYS/dsh-layered-memory
```

</details>

<a id="dsh-dsh-client-ui-obsidian-memory"></a>

### Personal Obsidian vault memory

[detongz/dsh-client-ui-obsidian-memory](https://github.com/detongz/dsh-client-ui-obsidian-memory) — `Plugin nativo` · ★ 14 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória de IA persistente apoiada em um vault local do Obsidian/Codex, com cinco ferramentas de leitura/escrita/busca e um navegador de vault na barra lateral.

**Alternativas:**

- [mingzeng21/dsh-obsidian](https://github.com/mingzeng21/dsh-obsidian) (★ 14) — Conjunto de ferramentas mais simples cobrindo busca, leitura, escrita, mover e lixeira no vault.
- [Noelune/unified-agent-memory](https://github.com/Noelune/unified-agent-memory) (★ 7) — Compartilha um único vault do Obsidian entre todos os agentes, com núcleo sem dependências para promover/julgar/esquecer.
- [398894496-arch/runtime36](https://github.com/398894496-arch/runtime36) (★ 39) — Ferramentas somente leitura que roteiam consultas de status, preferência e correção para a página correspondente do vault.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:detongz/dsh-client-ui-obsidian-memory
```

</details>

<a id="dsh-dsh-knowledge"></a>

### Local/remote knowledge base search

[lemoncat7/dsh-knowledge](https://github.com/lemoncat7/dsh-knowledge) — `Plugin nativo` · ★ 11 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Bases de conhecimento locais e remotas com recall por projeto e por sessão, escrita controlada e um console web de gerenciamento embutido.

**Alternativas:**

- [htcqp802/dsh-knowledge-base](https://github.com/htcqp802/dsh-knowledge-base) (★ 5) — Importa md/txt/json/yml/docx/pdf, com gerenciamento de pastas e busca full-text FTS5.
- [PerryLink/dsh-library](https://github.com/PerryLink/dsh-library) (★ 10) — Transforma documentos locais em uma base consultável com verificação de citações e injeção de fontes.
- [melandlabs/opencontext#dsh-opencontext](https://github.com/melandlabs/opencontext/tree/main/plugins/dsh-opencontext) — Adiciona captura automática de prompts, resumos de sessão e insights estruturados junto com a recuperação de documentos.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:lemoncat7/dsh-knowledge
```

</details>

<a id="dsh-dsh-recall"></a>

### Multi-layer conversation history recall

[Relistencode/dsh-recall](https://github.com/Relistencode/dsh-recall) — `Plugin nativo` · ★ 3 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Recall do histórico de conversas via recuperação em três camadas (literal, aproximada, semântica) sobre o texto original de cada sessão anterior, totalmente local e offline. Instalação em um comando, com a camada semântica rodando em thread separada.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Relistencode/dsh-recall
```

</details>

<a id="dsh-deja-vu-extensions-dsh"></a>

### Cross-tool session reader, no export

[vshulcz/deja-vu#extensions/dsh](https://github.com/vshulcz/deja-vu/tree/main/extensions/dsh) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Lê os arquivos de sessão que outros agentes de codificação na mesma máquina já escreveram (Claude Code, Codex, Cursor, VS Code Copilot Chat, opencode e outros), incluindo sessões anteriores à sua instalação. Índice BM25 local, sem LLM, sem embeddings, sem rede.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:vshulcz/deja-vu#path:/extensions/dsh
```

</details>

<a id="mcp-memory"></a>

### Memory (reference)

[Memory (reference)](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Memória de referência em grafo de conhecimento: entidades, relações e observações num arquivo JSONL local. Não precisa de modelo nem embeddings.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio memory -- npx -y @modelcontextprotocol/server-memory
```

**Codex CLI**

```bash
codex mcp add memory -- npx -y @modelcontextprotocol/server-memory
```

**Gemini CLI**

```bash
gemini mcp add memory npx -y @modelcontextprotocol/server-memory
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "memory": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
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
    "memory": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-memory"
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
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "memory": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  memory:
    type: stdio
    cmd: npx
    args: ["-y","@modelcontextprotocol/server-memory"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `memory.cordis.yml  →  dsh web --patch ./memory.cordis.yml`

```yaml
- insert:
    - id: mcp-memory
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: memory
        transport: stdio
        command: npx
        args: ["-y","@modelcontextprotocol/server-memory"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-engramory-plugin"></a>

### Plaintext one-fact-per-file memory

[tinqiao-oss/engramory#plugin](https://github.com/tinqiao-oss/engramory/tree/master/adapters/dsh/plugin) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória de longo prazo guardada em markdown puro, um fato por arquivo. Um índice MEMORY.md com limite de tamanho bloqueia gravações que o fariam crescer além do limite; reescritas que o reduzem sempre passam. O mesmo repositório é compartilhado com Claude Code, Codex, Kiro e OpenClaw.

**Alternativas:**

- [gezi-wen/sage-mem](https://github.com/gezi-wen/sage-mem) (★ 6) — Usa formato de arquivo compatível com o CLAUDE.md do Claude Code, tornando a migração uma simples cópia de arquivo.
- [Max-Null/dsh-memory](https://github.com/Max-Null/dsh-memory) (★ 3) — Adiciona uma confirmação humana antes de salvar e repositórios JSON globais e por projeto rastreados pelo git.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:tinqiao-oss/engramory#path:/adapters/dsh/plugin
```

</details>

<a id="dsh-co-engram-dsh-plugin"></a>

### Self-evolving team memory in git

[Co-Engram/Co-Engram#dsh-plugin](https://github.com/Co-Engram/Co-Engram/tree/main/packages/dsh-plugin) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória de equipe autoevolutiva mantida como markdown puro no git: 38 ferramentas de memória sem prefixo, além de uma seção de sinais de prompt reavaliada a cada montagem, com reforço, decaimento e consolidação durante inatividade. Compartilha um único repositório de dados com Claude Code e OpenClaw.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Co-Engram/Co-Engram#path:/packages/dsh-plugin
```

</details>
