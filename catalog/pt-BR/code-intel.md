# Inteligência de código

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Serena](#serena) — Busca e edição semântica de código via language servers: encontra símbolos e referências e edita no nível de s…
- [Codebase knowledge graph](#codebase-memory-mcp) — Constrói um grafo de conhecimento do código em 162 linguagens, com consultas em sub-milissegundos e menos toke…
- [Codebase intelligence for agents](#repowise-mcp) — Inteligência de código para agentes: grafo de dependências, histórico do git, documentação, decisões e saúde d…
- [Entity-level semantic code diff](#sem-mcp) — Inteligência de código no nível de entidade: diff semântico, análise de impacto, blame e contexto para agentes…
- [Token-efficient AST code exploration](#jcodemunch-mcp) — Exploração de código eficiente em tokens via parsing AST com tree-sitter em 70+ linguagens, reduzindo tokens e…
- [Python code health analysis](#pyscn-mcp) — Análise de código Python para agentes de IA: complexidade, código morto, clones, acoplamento e um índice geral…
- [GitHub code research platform](#octocode-mcp) — Plataforma de pesquisa de código com IA para buscar, analisar e extrair informações de qualquer repositório do…
- [Layered code graph with SCIP](#claude-code-skills-mcp) — Servidor de grafo de código determinístico em camadas, com overlays de frameworks e interoperabilidade SCIP.
- [Local semantic code indexer](#muvon-octocode-mcp) — Indexador de código com IA para um repositório local, com busca semântica e grafos de conhecimento.
- [Semantic search for files and code](#vexor-mcp) — Um motor de busca semântica para arquivos e código; exige VEXOR_API_KEY (e opcionalmente uma chave de rerank).

<a id="serena"></a>

### Serena

[Serena](https://github.com/oraios/serena) — `Servidor MCP` · ★ 30k · Licença: ver repo · Funciona com: Todos os clientes

Busca e edição semântica de código via language servers: encontra símbolos e referências e edita no nível de símbolo em vez de texto.

<details><summary>Instalar</summary>

**Claude Code**

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```bash
claude mcp add --transport stdio serena -- serena start-mcp-server --project-from-cwd
```

**Codex CLI**

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```bash
codex mcp add serena -- serena start-mcp-server --project-from-cwd
```

**Gemini CLI**

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```bash
gemini mcp add serena serena start-mcp-server --project-from-cwd
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "mcpServers": {
    "serena": {
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "servers": {
    "serena": {
      "type": "stdio",
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "serena": {
      "type": "local",
      "command": [
        "serena",
        "start-mcp-server",
        "--project-from-cwd"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "mcpServers": {
    "serena": {
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "mcpServers": {
    "serena": {
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "context_servers": {
    "serena": {
      "source": "custom",
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```yaml
extensions:
  serena:
    type: stdio
    cmd: serena
    args: ["start-mcp-server","--project-from-cwd"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "mcpServers": {
    "serena": {
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```json
{
  "mcpServers": {
    "serena": {
      "command": "serena",
      "args": [
        "start-mcp-server",
        "--project-from-cwd"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `serena.cordis.yml  →  dsh web --patch ./serena.cordis.yml`

Pré-requisito: `uv tool install -p 3.13 serena-agent && serena init`

```yaml
- insert:
    - id: mcp-serena
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: serena
        transport: stdio
        command: serena
        args: ["start-mcp-server","--project-from-cwd"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="codebase-memory-mcp"></a>

### Codebase knowledge graph

[Codebase Memory](https://github.com/DeusData/codebase-memory-mcp) — `Servidor MCP` · ★ 44k · Licença: MIT · Funciona com: Todos os clientes

Constrói um grafo de conhecimento do código em 162 linguagens, com consultas em sub-milissegundos e menos tokens.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio codebase-memory-mcp -- npx -y codebase-memory-mcp
```

**Codex CLI**

```bash
codex mcp add codebase-memory-mcp -- npx -y codebase-memory-mcp
```

**Gemini CLI**

```bash
gemini mcp add codebase-memory-mcp npx -y codebase-memory-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "codebase-memory-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "codebase-memory-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
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
    "codebase-memory-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "codebase-memory-mcp"
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
    "codebase-memory-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "codebase-memory-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "codebase-memory-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  codebase-memory-mcp:
    type: stdio
    cmd: npx
    args: ["-y","codebase-memory-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "codebase-memory-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "codebase-memory-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "codebase-memory-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `codebase-memory-mcp.cordis.yml  →  dsh web --patch ./codebase-memory-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-codebase-memory-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: codebase-memory-mcp
        transport: stdio
        command: npx
        args: ["-y","codebase-memory-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="repowise-mcp"></a>

### Codebase intelligence for agents

[Repowise](https://github.com/repowise-dev/repowise) — `Servidor MCP` · ★ 6.8k · Licença: AGPL-3.0 · Funciona com: Todos os clientes

Inteligência de código para agentes: grafo de dependências, histórico do git, documentação, decisões e saúde do código.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio repowise -- uvx repowise '<REPO_PATH>'
```

**Codex CLI**

```bash
codex mcp add repowise -- uvx repowise '<REPO_PATH>'
```

**Gemini CLI**

```bash
gemini mcp add repowise uvx repowise '<REPO_PATH>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "repowise": {
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "repowise": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
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
    "repowise": {
      "type": "local",
      "command": [
        "uvx",
        "repowise",
        "<REPO_PATH>"
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
    "repowise": {
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "repowise": {
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "repowise": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  repowise:
    type: stdio
    cmd: uvx
    args: ["repowise","<REPO_PATH>"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "repowise": {
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "repowise": {
      "command": "uvx",
      "args": [
        "repowise",
        "<REPO_PATH>"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `repowise.cordis.yml  →  dsh web --patch ./repowise.cordis.yml`

```yaml
- insert:
    - id: mcp-repowise
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: repowise
        transport: stdio
        command: uvx
        args: ["repowise","<REPO_PATH>"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="sem-mcp"></a>

### Entity-level semantic code diff

[Ataraxy-Labs/sem](https://github.com/Ataraxy-Labs/sem) — `Servidor MCP` · ★ 3.4k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Inteligência de código no nível de entidade: diff semântico, análise de impacto, blame e contexto para agentes de IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio sem -- npx -y @ataraxy-labs/sem
```

**Codex CLI**

```bash
codex mcp add sem -- npx -y @ataraxy-labs/sem
```

**Gemini CLI**

```bash
gemini mcp add sem npx -y @ataraxy-labs/sem
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sem": {
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "sem": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
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
    "sem": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@ataraxy-labs/sem"
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
    "sem": {
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "sem": {
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "sem": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  sem:
    type: stdio
    cmd: npx
    args: ["-y","@ataraxy-labs/sem"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sem": {
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "sem": {
      "command": "npx",
      "args": [
        "-y",
        "@ataraxy-labs/sem"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `sem.cordis.yml  →  dsh web --patch ./sem.cordis.yml`

```yaml
- insert:
    - id: mcp-sem
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sem
        transport: stdio
        command: npx
        args: ["-y","@ataraxy-labs/sem"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="jcodemunch-mcp"></a>

### Token-efficient AST code exploration

[jCodemunch MCP](https://github.com/jgravelle/jcodemunch-mcp) — `Servidor MCP` · ★ 2.7k · Licença: ver repo · Funciona com: Todos os clientes

Exploração de código eficiente em tokens via parsing AST com tree-sitter em 70+ linguagens, reduzindo tokens em 86-99%.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio jcodemunch-mcp -- uvx jcodemunch-mcp
```

**Codex CLI**

```bash
codex mcp add jcodemunch-mcp -- uvx jcodemunch-mcp
```

**Gemini CLI**

```bash
gemini mcp add jcodemunch-mcp uvx jcodemunch-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "jcodemunch-mcp": {
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "jcodemunch-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
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
    "jcodemunch-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "jcodemunch-mcp"
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
    "jcodemunch-mcp": {
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "jcodemunch-mcp": {
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "jcodemunch-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  jcodemunch-mcp:
    type: stdio
    cmd: uvx
    args: ["jcodemunch-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "jcodemunch-mcp": {
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "jcodemunch-mcp": {
      "command": "uvx",
      "args": [
        "jcodemunch-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `jcodemunch-mcp.cordis.yml  →  dsh web --patch ./jcodemunch-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-jcodemunch-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: jcodemunch-mcp
        transport: stdio
        command: uvx
        args: ["jcodemunch-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="pyscn-mcp"></a>

### Python code health analysis

[pyscn](https://github.com/ludo-technologies/pyscn) — `Servidor MCP` · ★ 1.1k · Licença: MIT · Funciona com: Todos os clientes

Análise de código Python para agentes de IA: complexidade, código morto, clones, acoplamento e um índice geral de saúde.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio pyscn -- uvx pyscn-mcp
```

**Codex CLI**

```bash
codex mcp add pyscn -- uvx pyscn-mcp
```

**Gemini CLI**

```bash
gemini mcp add pyscn uvx pyscn-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "pyscn": {
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "pyscn": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "pyscn-mcp"
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
    "pyscn": {
      "type": "local",
      "command": [
        "uvx",
        "pyscn-mcp"
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
    "pyscn": {
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "pyscn": {
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "pyscn": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  pyscn:
    type: stdio
    cmd: uvx
    args: ["pyscn-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "pyscn": {
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "pyscn": {
      "command": "uvx",
      "args": [
        "pyscn-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `pyscn.cordis.yml  →  dsh web --patch ./pyscn.cordis.yml`

```yaml
- insert:
    - id: mcp-pyscn
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: pyscn
        transport: stdio
        command: uvx
        args: ["pyscn-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="octocode-mcp"></a>

### GitHub code research platform

[Octocode MCP - AI Context Platform](https://github.com/bgauryy/octocode-mcp) — `Servidor MCP` · ★ 942 · Licença: MIT · Funciona com: Todos os clientes

Plataforma de pesquisa de código com IA para buscar, analisar e extrair informações de qualquer repositório do GitHub; exige GITHUB_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio octocode-mcp --env GITHUB_TOKEN='<GITHUB_TOKEN>' -- npx -y octocode-mcp
```

**Codex CLI**

```bash
codex mcp add octocode-mcp --env GITHUB_TOKEN='<GITHUB_TOKEN>' -- npx -y octocode-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e GITHUB_TOKEN='<GITHUB_TOKEN>' octocode-mcp npx -y octocode-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "octocode-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "octocode-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
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
    "octocode-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "octocode-mcp"
      ],
      "enabled": true,
      "environment": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "octocode-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "octocode-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "octocode-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  octocode-mcp:
    type: stdio
    cmd: npx
    args: ["-y","octocode-mcp"]
    envs:
      GITHUB_TOKEN: "<GITHUB_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "octocode-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "octocode-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "octocode-mcp"
      ],
      "env": {
        "GITHUB_TOKEN": "<GITHUB_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `octocode-mcp.cordis.yml  →  dsh web --patch ./octocode-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-octocode-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: octocode-mcp
        transport: stdio
        command: npx
        args: ["-y","octocode-mcp"]
        env: {"GITHUB_TOKEN":"<GITHUB_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="claude-code-skills-mcp"></a>

### Layered code graph with SCIP

[Hex Graph](https://github.com/levnikolaevich/claude-code-skills) — `Servidor MCP` · ★ 566 · Licença: MIT · Funciona com: Todos os clientes

Servidor de grafo de código determinístico em camadas, com overlays de frameworks e interoperabilidade SCIP.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio hex-graph-mcp -- npx -y @levnikolaevich/hex-graph-mcp
```

**Codex CLI**

```bash
codex mcp add hex-graph-mcp -- npx -y @levnikolaevich/hex-graph-mcp
```

**Gemini CLI**

```bash
gemini mcp add hex-graph-mcp npx -y @levnikolaevich/hex-graph-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "hex-graph-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "hex-graph-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
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
    "hex-graph-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@levnikolaevich/hex-graph-mcp"
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
    "hex-graph-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "hex-graph-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "hex-graph-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  hex-graph-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@levnikolaevich/hex-graph-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "hex-graph-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "hex-graph-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@levnikolaevich/hex-graph-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `hex-graph-mcp.cordis.yml  →  dsh web --patch ./hex-graph-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-hex-graph-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: hex-graph-mcp
        transport: stdio
        command: npx
        args: ["-y","@levnikolaevich/hex-graph-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="muvon-octocode-mcp"></a>

### Local semantic code indexer

[Octocode](https://github.com/muvon/octocode) — `Servidor MCP` · ★ 477 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Indexador de código com IA para um repositório local, com busca semântica e grafos de conhecimento.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio octocode -- npx -y @muvon/octocode
```

**Codex CLI**

```bash
codex mcp add octocode -- npx -y @muvon/octocode
```

**Gemini CLI**

```bash
gemini mcp add octocode npx -y @muvon/octocode
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "octocode": {
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "octocode": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
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
    "octocode": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@muvon/octocode"
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
    "octocode": {
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "octocode": {
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "octocode": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  octocode:
    type: stdio
    cmd: npx
    args: ["-y","@muvon/octocode"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "octocode": {
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "octocode": {
      "command": "npx",
      "args": [
        "-y",
        "@muvon/octocode"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `octocode.cordis.yml  →  dsh web --patch ./octocode.cordis.yml`

```yaml
- insert:
    - id: mcp-octocode
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: octocode
        transport: stdio
        command: npx
        args: ["-y","@muvon/octocode"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="vexor-mcp"></a>

### Semantic search for files and code

[Vexor](https://github.com/scarletkc/vexor) — `Servidor MCP` · ★ 241 · Licença: MIT · Funciona com: Todos os clientes

Um motor de busca semântica para arquivos e código; exige VEXOR_API_KEY (e opcionalmente uma chave de rerank).

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio vexor --env VEXOR_API_KEY='<VEXOR_API_KEY>' --env VEXOR_REMOTE_RERANK_API_KEY='<VEXOR_REMOTE_RERANK_API_KEY>' -- uvx vexor
```

**Codex CLI**

```bash
codex mcp add vexor --env VEXOR_API_KEY='<VEXOR_API_KEY>' --env VEXOR_REMOTE_RERANK_API_KEY='<VEXOR_REMOTE_RERANK_API_KEY>' -- uvx vexor
```

**Gemini CLI**

```bash
gemini mcp add -e VEXOR_API_KEY='<VEXOR_API_KEY>' -e VEXOR_REMOTE_RERANK_API_KEY='<VEXOR_REMOTE_RERANK_API_KEY>' vexor uvx vexor
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "vexor": {
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "vexor": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
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
    "vexor": {
      "type": "local",
      "command": [
        "uvx",
        "vexor"
      ],
      "enabled": true,
      "environment": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "vexor": {
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "vexor": {
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "vexor": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  vexor:
    type: stdio
    cmd: uvx
    args: ["vexor"]
    envs:
      VEXOR_API_KEY: "<VEXOR_API_KEY>"
      VEXOR_REMOTE_RERANK_API_KEY: "<VEXOR_REMOTE_RERANK_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "vexor": {
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "vexor": {
      "command": "uvx",
      "args": [
        "vexor"
      ],
      "env": {
        "VEXOR_API_KEY": "<VEXOR_API_KEY>",
        "VEXOR_REMOTE_RERANK_API_KEY": "<VEXOR_REMOTE_RERANK_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `vexor.cordis.yml  →  dsh web --patch ./vexor.cordis.yml`

```yaml
- insert:
    - id: mcp-vexor
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: vexor
        transport: stdio
        command: uvx
        args: ["vexor"]
        env: {"VEXOR_API_KEY":"<VEXOR_API_KEY>","VEXOR_REMOTE_RERANK_API_KEY":"<VEXOR_REMOTE_RERANK_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>
