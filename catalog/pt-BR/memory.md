# Memória

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Reasoning memory for agents](#honcho-mcp) — Memória que raciocina: aprendizado contínuo para agentes com estado, buscando mais contexto com menos tokens; …
- [Markdown knowledge base for agents](#basic-memory-mcp) — Gestão de conhecimento local-first com sincronização bidirecional entre um LLM e arquivos Markdown.
- [Markdown notes as agent memory](#iwe-mcp) — Executa uma base de conhecimento em Markdown como memória do agente, sobre o diretório de notas em que é inici…
- [Obsidian notes access](#obsidian-mcp-server) — Lê, escreve, busca e edita notas, tags e frontmatter do Obsidian; exige OBSIDIAN_API_KEY.
- [Typed knowledge-graph memory](#dsh-graph-memory) — Memória entre sessões rastreável e pesquisável que guarda o conhecimento das conversas como nós de grafo tipad…
- [Local-first agentic RAG](#haiku-rag-mcp) — RAG agêntico local-first com citações: busca híbrida, reranking e recuperação de documentos multimodal.
- [Anytype encrypted wiki access](#anytype-mcp) — Servidor oficial da API do Anytype, um wiki criptografado, local e colaborativo; exige OPENAPI_MCP_HEADERS.
- [Failure-recovery lessons knowledge base](#dsh-misakanet) — Busca e registra lições de recuperação de falhas extraídas de sessões reais de engenharia, com recuperação BM2…
- [Team chat to knowledge graph](#beever-atlas-mcp) — Base de conhecimento open-source que transforma o chat da equipe em um grafo de conhecimento tipado e um wiki …
- [Cross-agent shared long-term memory](#dsh-dsh-mnemon) — Memória persistente local, compartilhada entre agentes habilitados para Mnemon: memória de runtime, documentos…
- [Air-gapped enterprise GraphRAG](#veritasgraph-mcp) — Servidor GraphRAG empresarial zero-trust e air-gapped, com respostas offline fundamentadas em citações.
- [Cross-session agent memory](#omega-memory-mcp) — Memória persistente, coordenação e aprendizado para agentes de IA, local-first, exposta em 25 ferramentas MCP.
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

<a id="honcho-mcp"></a>

### Reasoning memory for agents

[Honcho](https://github.com/plastic-labs/honcho) — `Servidor MCP` · ★ 7.3k · Licença: AGPL-3.0 · Funciona com: Todos os clientes

Memória que raciocina: aprendizado contínuo para agentes com estado, buscando mais contexto com menos tokens; exige token de Authorization.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http honcho https://mcp.honcho.dev --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — Arquivo: `~/.codex/config.toml`

```toml
[mcp_servers.honcho]
url = "https://mcp.honcho.dev"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http honcho https://mcp.honcho.dev --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "honcho": {
      "url": "https://mcp.honcho.dev",
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
    "honcho": {
      "type": "http",
      "url": "https://mcp.honcho.dev",
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
    "honcho": {
      "type": "remote",
      "url": "https://mcp.honcho.dev",
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
    "honcho": {
      "type": "streamableHttp",
      "url": "https://mcp.honcho.dev",
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
    "honcho": {
      "serverUrl": "https://mcp.honcho.dev",
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
    "honcho": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.honcho.dev",
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
  honcho:
    type: streamable_http
    uri: https://mcp.honcho.dev
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "honcho": {
      "type": "streamable-http",
      "url": "https://mcp.honcho.dev",
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
    "honcho": {
      "type": "streamable-http",
      "url": "https://mcp.honcho.dev",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `honcho.cordis.yml  →  dsh web --patch ./honcho.cordis.yml`

```yaml
- insert:
    - id: mcp-honcho
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: honcho
        transport: streamable-http
        url: https://mcp.honcho.dev
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="basic-memory-mcp"></a>

### Markdown knowledge base for agents

[basicmachines-co/basic-memory](https://github.com/basicmachines-co/basic-memory) — `Servidor MCP` · ★ 4.0k · Licença: AGPL-3.0 · Funciona com: Todos os clientes

Gestão de conhecimento local-first com sincronização bidirecional entre um LLM e arquivos Markdown.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio basic-memory -- uvx basic-memory
```

**Codex CLI**

```bash
codex mcp add basic-memory -- uvx basic-memory
```

**Gemini CLI**

```bash
gemini mcp add basic-memory uvx basic-memory
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "basic-memory": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "basic-memory"
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
    "basic-memory": {
      "type": "local",
      "command": [
        "uvx",
        "basic-memory"
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
    "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "basic-memory": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  basic-memory:
    type: stdio
    cmd: uvx
    args: ["basic-memory"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `basic-memory.cordis.yml  →  dsh web --patch ./basic-memory.cordis.yml`

```yaml
- insert:
    - id: mcp-basic-memory
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: basic-memory
        transport: stdio
        command: uvx
        args: ["basic-memory"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="iwe-mcp"></a>

### Markdown notes as agent memory

[IWE](https://github.com/iwe-org/iwe) — `Servidor MCP` · ★ 1.7k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Executa uma base de conhecimento em Markdown como memória do agente, sobre o diretório de notas em que é iniciado.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio iwe -- npx -y @iwe-org/mcp
```

**Codex CLI**

```bash
codex mcp add iwe -- npx -y @iwe-org/mcp
```

**Gemini CLI**

```bash
gemini mcp add iwe npx -y @iwe-org/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "iwe": {
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "iwe": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
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
    "iwe": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@iwe-org/mcp"
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
    "iwe": {
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "iwe": {
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "iwe": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  iwe:
    type: stdio
    cmd: npx
    args: ["-y","@iwe-org/mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "iwe": {
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "iwe": {
      "command": "npx",
      "args": [
        "-y",
        "@iwe-org/mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `iwe.cordis.yml  →  dsh web --patch ./iwe.cordis.yml`

```yaml
- insert:
    - id: mcp-iwe
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: iwe
        transport: stdio
        command: npx
        args: ["-y","@iwe-org/mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="obsidian-mcp-server"></a>

### Obsidian notes access

[cyanheads/obsidian-mcp-server](https://github.com/cyanheads/obsidian-mcp-server) — `Servidor MCP` · ★ 682 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Lê, escreve, busca e edita notas, tags e frontmatter do Obsidian; exige OBSIDIAN_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio obsidian-mcp-server --env OBSIDIAN_API_KEY='<OBSIDIAN_API_KEY>' -- npx -y obsidian-mcp-server
```

**Codex CLI**

```bash
codex mcp add obsidian-mcp-server --env OBSIDIAN_API_KEY='<OBSIDIAN_API_KEY>' -- npx -y obsidian-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e OBSIDIAN_API_KEY='<OBSIDIAN_API_KEY>' obsidian-mcp-server npx -y obsidian-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "obsidian-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "obsidian-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
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
    "obsidian-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "obsidian-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "obsidian-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "obsidian-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "obsidian-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  obsidian-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","obsidian-mcp-server"]
    envs:
      OBSIDIAN_API_KEY: "<OBSIDIAN_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "obsidian-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "obsidian-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<OBSIDIAN_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `obsidian-mcp-server.cordis.yml  →  dsh web --patch ./obsidian-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-obsidian-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: obsidian-mcp-server
        transport: stdio
        command: npx
        args: ["-y","obsidian-mcp-server"]
        env: {"OBSIDIAN_API_KEY":"<OBSIDIAN_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-graph-memory"></a>

### Typed knowledge-graph memory

[adoresever/graph-memory](https://github.com/adoresever/graph-memory) — `Plugin nativo` · ★ 627 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória entre sessões rastreável e pesquisável que guarda o conhecimento das conversas como nós de grafo tipados (tarefa/habilidade/evento) conectados por arestas tipadas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:adoresever/graph-memory
```

</details>

<a id="haiku-rag-mcp"></a>

### Local-first agentic RAG

[haiku.rag](https://github.com/ggozad/haiku.rag) — `Servidor MCP` · ★ 611 · Licença: MIT · Funciona com: Todos os clientes

RAG agêntico local-first com citações: busca híbrida, reranking e recuperação de documentos multimodal.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio haiku-rag -- uvx haiku-rag
```

**Codex CLI**

```bash
codex mcp add haiku-rag -- uvx haiku-rag
```

**Gemini CLI**

```bash
gemini mcp add haiku-rag uvx haiku-rag
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "haiku-rag": {
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "haiku-rag": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "haiku-rag"
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
    "haiku-rag": {
      "type": "local",
      "command": [
        "uvx",
        "haiku-rag"
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
    "haiku-rag": {
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "haiku-rag": {
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "haiku-rag": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  haiku-rag:
    type: stdio
    cmd: uvx
    args: ["haiku-rag"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "haiku-rag": {
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "haiku-rag": {
      "command": "uvx",
      "args": [
        "haiku-rag"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `haiku-rag.cordis.yml  →  dsh web --patch ./haiku-rag.cordis.yml`

```yaml
- insert:
    - id: mcp-haiku-rag
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: haiku-rag
        transport: stdio
        command: uvx
        args: ["haiku-rag"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="anytype-mcp"></a>

### Anytype encrypted wiki access

[anyproto/anytype-mcp](https://github.com/anyproto/anytype-mcp) — `Servidor MCP` · ★ 525 · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial da API do Anytype, um wiki criptografado, local e colaborativo; exige OPENAPI_MCP_HEADERS.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio anytype-mcp --env OPENAPI_MCP_HEADERS='<OPENAPI_MCP_HEADERS>' -- npx -y @anyproto/anytype-mcp
```

**Codex CLI**

```bash
codex mcp add anytype-mcp --env OPENAPI_MCP_HEADERS='<OPENAPI_MCP_HEADERS>' -- npx -y @anyproto/anytype-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e OPENAPI_MCP_HEADERS='<OPENAPI_MCP_HEADERS>' anytype-mcp npx -y @anyproto/anytype-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "anytype-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "anytype-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
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
    "anytype-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "enabled": true,
      "environment": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "anytype-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "anytype-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "anytype-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  anytype-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@anyproto/anytype-mcp"]
    envs:
      OPENAPI_MCP_HEADERS: "<OPENAPI_MCP_HEADERS>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "anytype-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "anytype-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anyproto/anytype-mcp"
      ],
      "env": {
        "OPENAPI_MCP_HEADERS": "<OPENAPI_MCP_HEADERS>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `anytype-mcp.cordis.yml  →  dsh web --patch ./anytype-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-anytype-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: anytype-mcp
        transport: stdio
        command: npx
        args: ["-y","@anyproto/anytype-mcp"]
        env: {"OPENAPI_MCP_HEADERS":"<OPENAPI_MCP_HEADERS>"}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-misakanet"></a>

### Failure-recovery lessons knowledge base

[Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) — `Plugin nativo` · ★ 495 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Busca e registra lições de recuperação de falhas extraídas de sessões reais de engenharia, com recuperação BM25 mais RAG semântico sobre uma base de lições.

**Alternativas:**

- [akslcw/dsh-negative-ledger](https://github.com/akslcw/dsh-negative-ledger) (★ 3) — Persiste caminhos já refutados com evidências do resultado e bloqueia tentativas repetidas até que essa evidência mude.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Ikalus1988/MisakaNet
```

</details>

<a id="beever-atlas-mcp"></a>

### Team chat to knowledge graph

[Beever-AI/beever-atlas](https://github.com/Beever-AI/beever-atlas) — `Servidor MCP` · ★ 446 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Base de conhecimento open-source que transforma o chat da equipe em um grafo de conhecimento tipado e um wiki gerado automaticamente.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio beever-atlas -- docker run -i --rm ghcr.io/beever-ai/beever-atlas:0.3.0
```

**Codex CLI**

```bash
codex mcp add beever-atlas -- docker run -i --rm ghcr.io/beever-ai/beever-atlas:0.3.0
```

**Gemini CLI**

```bash
gemini mcp add beever-atlas docker run -i --rm ghcr.io/beever-ai/beever-atlas:0.3.0
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "beever-atlas": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "beever-atlas": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
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
    "beever-atlas": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
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
    "beever-atlas": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "beever-atlas": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "beever-atlas": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  beever-atlas:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/beever-ai/beever-atlas:0.3.0"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "beever-atlas": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "beever-atlas": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/beever-ai/beever-atlas:0.3.0"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `beever-atlas.cordis.yml  →  dsh web --patch ./beever-atlas.cordis.yml`

```yaml
- insert:
    - id: mcp-beever-atlas
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: beever-atlas
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/beever-ai/beever-atlas:0.3.0"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-mnemon"></a>

### Cross-agent shared long-term memory

[omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) — `Plugin nativo` · ★ 391 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória persistente local, compartilhada entre agentes habilitados para Mnemon: memória de runtime, documentos de projeto pesquisáveis, recall semântico, grafo de conhecimento e UI lateral.

**Alternativas:**

- [vectorize-io/hindsight#coding-agents](https://github.com/vectorize-io/hindsight/tree/main/hindsight-integrations/coding-agents) — Adiciona recall/retenção automáticos com reflexão profunda, páginas de conhecimento e bancos de memória por repositório.
- [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) (★ 128) — Adiciona importação de memórias de dez outras ferramentas de IA, além de página de configurações.
- [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) (★ 115) — Adiciona auto-consolidação durante inatividade, congelamento de memórias conflitantes para revisão e trilha de auditoria reproduzível.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:omdsh-dev/dsh-mnemon
```

</details>

<a id="veritasgraph-mcp"></a>

### Air-gapped enterprise GraphRAG

[bibinprathap/VeritasGraph](https://github.com/bibinprathap/VeritasGraph) — `Servidor MCP` · ★ 324 · Licença: ver repo · Funciona com: Todos os clientes

Servidor GraphRAG empresarial zero-trust e air-gapped, com respostas offline fundamentadas em citações.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio veritasgraph -- uvx veritasgraph-mcp
```

**Codex CLI**

```bash
codex mcp add veritasgraph -- uvx veritasgraph-mcp
```

**Gemini CLI**

```bash
gemini mcp add veritasgraph uvx veritasgraph-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "veritasgraph": {
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "veritasgraph": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
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
    "veritasgraph": {
      "type": "local",
      "command": [
        "uvx",
        "veritasgraph-mcp"
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
    "veritasgraph": {
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "veritasgraph": {
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "veritasgraph": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  veritasgraph:
    type: stdio
    cmd: uvx
    args: ["veritasgraph-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "veritasgraph": {
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "veritasgraph": {
      "command": "uvx",
      "args": [
        "veritasgraph-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `veritasgraph.cordis.yml  →  dsh web --patch ./veritasgraph.cordis.yml`

```yaml
- insert:
    - id: mcp-veritasgraph
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: veritasgraph
        transport: stdio
        command: uvx
        args: ["veritasgraph-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="omega-memory-mcp"></a>

### Cross-session agent memory

[OMEGA Memory](https://github.com/omega-memory/omega-memory) — `Servidor MCP` · ★ 217 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Memória persistente, coordenação e aprendizado para agentes de IA, local-first, exposta em 25 ferramentas MCP.

**Alternativas:**

- [Vestige](https://github.com/samvallad33/vestige) (★ 628) — Memória local-first para agentes que retrocede para encontrar a causa raiz de uma falha.
- [Compartment](https://github.com/MaxFreedomPollard/Compartment) (★ 582) — Memória agêntica durável, criptografada em repouso, totalmente offline, sem rede nem chave de API.
- [TeleAI-UAGI/telemem](https://github.com/TeleAI-UAGI/telemem) (★ 492) — Memória multimodal de longo prazo, sensível a personagens, compatível com mem0, com opção totalmente local; exige OPENAI_API_KEY.
- [Lyellr88/marm-memory](https://github.com/Lyellr88/marm-memory) (★ 397) — Servidor universal que adiciona memória de IA com busca semântica.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio omega-memory -- uvx omega-memory
```

**Codex CLI**

```bash
codex mcp add omega-memory -- uvx omega-memory
```

**Gemini CLI**

```bash
gemini mcp add omega-memory uvx omega-memory
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "omega-memory": {
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "omega-memory": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "omega-memory"
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
    "omega-memory": {
      "type": "local",
      "command": [
        "uvx",
        "omega-memory"
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
    "omega-memory": {
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "omega-memory": {
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "omega-memory": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  omega-memory:
    type: stdio
    cmd: uvx
    args: ["omega-memory"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "omega-memory": {
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "omega-memory": {
      "command": "uvx",
      "args": [
        "omega-memory"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `omega-memory.cordis.yml  →  dsh web --patch ./omega-memory.cordis.yml`

```yaml
- insert:
    - id: mcp-omega-memory
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: omega-memory
        transport: stdio
        command: uvx
        args: ["omega-memory"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-meow-memory"></a>

### Seven-layer SQLite project memory

[Phant0Meow/dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) — `Plugin nativo` · ★ 111 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória entre sessões com escopo de projeto em um repositório SQLite de sete camadas (soul/user/project/fact/lesson/rules/topic), com injeção na primeira mensagem, buscas por palavra-chave por mensagem e consolidação em janelas ociosas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Phant0Meow/dsh-meow-memory
```

</details>

<a id="dsh-dsh-memento"></a>

### Approval-gated auditable memory

[PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) — `Plugin nativo` · ★ 108 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

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

[diqierjia/StrataGate-AgentMemory](https://github.com/diqierjia/StrataGate-AgentMemory) — `Plugin nativo` · ★ 96 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Memória de seis camadas com decaimento no tempo: conversas recentes permanecem vívidas enquanto as antigas se transformam em resumos, e eventos e relacionamentos duradouros se consolidam em um grafo de conhecimento. Suporta trazer memórias de outras ferramentas de IA.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add "https://github.com/diqierjia/StrataGate-AgentMemory/releases/latest/download/stratagate-dsh.tgz"
```

</details>

<a id="dsh-dsh-auto-memory"></a>

### Zero-prompt proactive memory recall

[Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) — `Plugin nativo` · ★ 74 · Licença: BSD-3-Clause · Funciona com: DeepSeek Harness apenas

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

- [htcqp802/dsh-knowledge-base](https://github.com/htcqp802/dsh-knowledge-base) (★ 6) — Importa md/txt/json/yml/docx/pdf, com gerenciamento de pastas e busca full-text FTS5.
- [PerryLink/dsh-library](https://github.com/PerryLink/dsh-library) (★ 12) — Transforma documentos locais em uma base consultável com verificação de citações e injeção de fontes.
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
