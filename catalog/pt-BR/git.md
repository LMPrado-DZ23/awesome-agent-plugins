# Git e revisão de código

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [GitHub MCP Server](#github-mcp-server) — Servidor oficial do GitHub: repositórios, issues, pull requests, Actions, code scanning e mais. Mostrado o end…
- [Alibaba open code review](#open-code-review) — Ferramenta híbrida de revisão de código testada em produção na escala da Alibaba, combinando pipelines determi…
- [GitLab projects and merge requests](#gitlab-mcp) — Servidor GitLab para projetos, merge requests, issues, pipelines, wikis e releases; exige GITLAB_PERSONAL_ACCE…
- [Manage repos across Git hosts](#gk-cli-mcp) — Servidor da GitKraken para gerenciar repositórios, pull requests e issues no GitHub, GitLab e Bitbucket.
- [Native git operations](#git-mcp-server) — Servidor git abrangente com ferramentas nativas como clone, commit e gestão de worktrees.
- [Find UX issues in React code](#dsh-dsh-user-experience) — Encontra possíveis problemas de UX em um projeto revisando automaticamente código React/TypeScript, apontando …
- [GitHub CI and PR review bot](#dsh-dsh-github) — Integração de CI com o GitHub de nível oficial: um action.yml composto, um bot de revisão de PR por polling co…
- [Git worktree session targets](#dsh-dsh-git-worktree) — Session Targets baseados em git worktree com sessões de tarefa isoladas, status pronto-para-revisão, preview l…
- [Explore and audit GitHub via gh CLI](#dsh-github-explore) — Scripts de busca, descoberta e auditoria do GitHub empacotados como uma skill em torno da gh CLI: busca de rep…
- [Review files changed this session](#dsh-dsh-session-review) — Uma faixa acima do campo de composição lista os arquivos modificados na sessão atual (recolhida por padrão), c…
- [First-class git tools for the model](#dsh-dsh-plugin-git-workflow) — Dá ao modelo ferramentas Git de primeira classe para status, diff, log, commit e branch, com mensagens e camin…
- [Adversarial multi-lens code review](#dsh-dsh-review) — Revisão de código adversarial: buscadores paralelos inspecionam um diff por lentes separadas (correção, ciclo …
- [Connect a GitHub account to DSH](#dsh-dsh-github-connector-github) — Conexão via GitHub Device Flow mais um fluxo de PR dentro da conversa: uma barra de status acima do campo de c…
- [Git (reference)](#mcp-git) — Servidor de referência para ler, buscar e manipular repositórios Git locais (status, diff, log, commit, branch…
- [Git branch graph in web GUI](#dsh-dsh-web-packages-dsh-git-graph) — Seletor de branch e grafo Git para a GUI web do dsh: troca de branches e exploração do histórico de commits e …
- [Pre-submit PR hygiene checks](#dsh-codex-guard-dsh) — Verificações de higiene pré-envio de pull request dentro do DeepSeek Harness: varre o diff atual em busca de T…

<a id="github-mcp-server"></a>

### GitHub MCP Server

[GitHub MCP Server](https://github.com/github/github-mcp-server) — `Servidor MCP` · ★ 33k · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial do GitHub: repositórios, issues, pull requests, Actions, code scanning e mais. Mostrado o endpoint remoto; a imagem Docker (ghcr.io/github/github-mcp-server) roda localmente.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http github https://api.githubcopilot.com/mcp/ --header 'Authorization: Bearer <GITHUB_PAT>'
```

**Codex CLI** — Arquivo: `~/.codex/config.toml`

```toml
[mcp_servers.github]
url = "https://api.githubcopilot.com/mcp/"
bearer_token_env_var = "GITHUB_PAT"
```

**Gemini CLI**

```bash
gemini mcp add --transport http github https://api.githubcopilot.com/mcp/ --header 'Authorization: Bearer <GITHUB_PAT>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer <GITHUB_PAT>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer <GITHUB_PAT>"
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
    "github": {
      "type": "remote",
      "url": "https://api.githubcopilot.com/mcp/",
      "enabled": true,
      "headers": {
        "Authorization": "Bearer <GITHUB_PAT>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "github": {
      "type": "streamableHttp",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer <GITHUB_PAT>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "github": {
      "serverUrl": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer <GITHUB_PAT>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "github": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.githubcopilot.com/mcp/",
        "--header",
        "Authorization:Bearer <GITHUB_PAT>"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  github:
    type: streamable_http
    uri: https://api.githubcopilot.com/mcp/
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "github": {
      "type": "streamable-http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer <GITHUB_PAT>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "github": {
      "type": "streamable-http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer <GITHUB_PAT>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `github.cordis.yml  →  dsh web --patch ./github.cordis.yml`

```yaml
- insert:
    - id: mcp-github
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: github
        transport: streamable-http
        url: https://api.githubcopilot.com/mcp/
        headers: {"Authorization":"Bearer <GITHUB_PAT>"}
```

</details>

<a id="open-code-review"></a>

### Alibaba open code review

[alibaba/open-code-review](https://github.com/alibaba/open-code-review) — `Agent Skills` · ★ 39k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Ferramenta híbrida de revisão de código testada em produção na escala da Alibaba, combinando pipelines determinísticos com um agente LLM para comentários precisos linha a linha e um conjunto de regras de segurança multilíngue.

**Alternativas:**

- [hyhmrright/brooks-lint](https://github.com/hyhmrright/brooks-lint) (★ 1.5k) — Skill menor de revisão de código com IA, fundamentada em 12 livros clássicos de engenharia, com rótulos de severidade e citações.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add alibaba/open-code-review -a claude-code -g
```

**Codex CLI**

```bash
npx skills add alibaba/open-code-review -a codex -g
```

**Gemini CLI**

```bash
npx skills add alibaba/open-code-review -a gemini-cli -g
```

**Cursor**

```bash
npx skills add alibaba/open-code-review -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add alibaba/open-code-review -a github-copilot -g
```

**OpenCode**

```bash
npx skills add alibaba/open-code-review -a opencode -g
```

**Cline**

```bash
npx skills add alibaba/open-code-review -a cline -g
```

**Windsurf**

```bash
npx skills add alibaba/open-code-review -a windsurf -g
```

**Zed**

```bash
npx skills add alibaba/open-code-review -a zed -g
```

**Goose**

```bash
npx skills add alibaba/open-code-review -a goose -g
```

**Kiro**

```bash
npx skills add alibaba/open-code-review -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add alibaba/open-code-review -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add alibaba/open-code-review -a universal
```

</details>

<a id="gitlab-mcp"></a>

### GitLab projects and merge requests

[zereight/gitlab-mcp](https://github.com/zereight/gitlab-mcp) — `Servidor MCP` · ★ 2.0k · Licença: MIT · Funciona com: Todos os clientes

Servidor GitLab para projetos, merge requests, issues, pipelines, wikis e releases; exige GITLAB_PERSONAL_ACCESS_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio gitlab-mcp --env GITLAB_PERSONAL_ACCESS_TOKEN='<GITLAB_PERSONAL_ACCESS_TOKEN>' --env GITLAB_JOB_TOKEN='<GITLAB_JOB_TOKEN>' -- npx -y @zereight/mcp-gitlab
```

**Codex CLI**

```bash
codex mcp add gitlab-mcp --env GITLAB_PERSONAL_ACCESS_TOKEN='<GITLAB_PERSONAL_ACCESS_TOKEN>' --env GITLAB_JOB_TOKEN='<GITLAB_JOB_TOKEN>' -- npx -y @zereight/mcp-gitlab
```

**Gemini CLI**

```bash
gemini mcp add -e GITLAB_PERSONAL_ACCESS_TOKEN='<GITLAB_PERSONAL_ACCESS_TOKEN>' -e GITLAB_JOB_TOKEN='<GITLAB_JOB_TOKEN>' gitlab-mcp npx -y @zereight/mcp-gitlab
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "gitlab-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@zereight/mcp-gitlab"
      ],
      "env": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "<GITLAB_PERSONAL_ACCESS_TOKEN>",
        "GITLAB_JOB_TOKEN": "<GITLAB_JOB_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "gitlab-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@zereight/mcp-gitlab"
      ],
      "env": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "<GITLAB_PERSONAL_ACCESS_TOKEN>",
        "GITLAB_JOB_TOKEN": "<GITLAB_JOB_TOKEN>"
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
    "gitlab-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@zereight/mcp-gitlab"
      ],
      "enabled": true,
      "environment": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "<GITLAB_PERSONAL_ACCESS_TOKEN>",
        "GITLAB_JOB_TOKEN": "<GITLAB_JOB_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "gitlab-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@zereight/mcp-gitlab"
      ],
      "env": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "<GITLAB_PERSONAL_ACCESS_TOKEN>",
        "GITLAB_JOB_TOKEN": "<GITLAB_JOB_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "gitlab-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@zereight/mcp-gitlab"
      ],
      "env": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "<GITLAB_PERSONAL_ACCESS_TOKEN>",
        "GITLAB_JOB_TOKEN": "<GITLAB_JOB_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "gitlab-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@zereight/mcp-gitlab"
      ],
      "env": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "<GITLAB_PERSONAL_ACCESS_TOKEN>",
        "GITLAB_JOB_TOKEN": "<GITLAB_JOB_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  gitlab-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@zereight/mcp-gitlab"]
    envs:
      GITLAB_PERSONAL_ACCESS_TOKEN: "<GITLAB_PERSONAL_ACCESS_TOKEN>"
      GITLAB_JOB_TOKEN: "<GITLAB_JOB_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "gitlab-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@zereight/mcp-gitlab"
      ],
      "env": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "<GITLAB_PERSONAL_ACCESS_TOKEN>",
        "GITLAB_JOB_TOKEN": "<GITLAB_JOB_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "gitlab-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@zereight/mcp-gitlab"
      ],
      "env": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "<GITLAB_PERSONAL_ACCESS_TOKEN>",
        "GITLAB_JOB_TOKEN": "<GITLAB_JOB_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `gitlab-mcp.cordis.yml  →  dsh web --patch ./gitlab-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-gitlab-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: gitlab-mcp
        transport: stdio
        command: npx
        args: ["-y","@zereight/mcp-gitlab"]
        env: {"GITLAB_PERSONAL_ACCESS_TOKEN":"<GITLAB_PERSONAL_ACCESS_TOKEN>","GITLAB_JOB_TOKEN":"<GITLAB_JOB_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="gk-cli-mcp"></a>

### Manage repos across Git hosts

[gitkraken/gk-cli](https://github.com/gitkraken/gk-cli) — `Servidor MCP` · ★ 459 · Licença: ver repo · Funciona com: Todos os clientes

Servidor da GitKraken para gerenciar repositórios, pull requests e issues no GitHub, GitLab e Bitbucket.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio gk-cli -- npx -y @gitkraken/gk
```

**Codex CLI**

```bash
codex mcp add gk-cli -- npx -y @gitkraken/gk
```

**Gemini CLI**

```bash
gemini mcp add gk-cli npx -y @gitkraken/gk
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "gk-cli": {
      "command": "npx",
      "args": [
        "-y",
        "@gitkraken/gk"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "gk-cli": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@gitkraken/gk"
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
    "gk-cli": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@gitkraken/gk"
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
    "gk-cli": {
      "command": "npx",
      "args": [
        "-y",
        "@gitkraken/gk"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "gk-cli": {
      "command": "npx",
      "args": [
        "-y",
        "@gitkraken/gk"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "gk-cli": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@gitkraken/gk"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  gk-cli:
    type: stdio
    cmd: npx
    args: ["-y","@gitkraken/gk"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "gk-cli": {
      "command": "npx",
      "args": [
        "-y",
        "@gitkraken/gk"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "gk-cli": {
      "command": "npx",
      "args": [
        "-y",
        "@gitkraken/gk"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `gk-cli.cordis.yml  →  dsh web --patch ./gk-cli.cordis.yml`

```yaml
- insert:
    - id: mcp-gk-cli
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: gk-cli
        transport: stdio
        command: npx
        args: ["-y","@gitkraken/gk"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="git-mcp-server"></a>

### Native git operations

[cyanheads/git-mcp-server](https://github.com/cyanheads/git-mcp-server) — `Servidor MCP` · ★ 241 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor git abrangente com ferramentas nativas como clone, commit e gestão de worktrees.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio git-mcp-server -- npx -y @cyanheads/git-mcp-server
```

**Codex CLI**

```bash
codex mcp add git-mcp-server -- npx -y @cyanheads/git-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add git-mcp-server npx -y @cyanheads/git-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "git-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@cyanheads/git-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "git-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@cyanheads/git-mcp-server"
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
    "git-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@cyanheads/git-mcp-server"
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
    "git-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@cyanheads/git-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "git-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@cyanheads/git-mcp-server"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "git-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@cyanheads/git-mcp-server"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  git-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@cyanheads/git-mcp-server"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "git-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@cyanheads/git-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "git-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@cyanheads/git-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `git-mcp-server.cordis.yml  →  dsh web --patch ./git-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-git-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: git-mcp-server
        transport: stdio
        command: npx
        args: ["-y","@cyanheads/git-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-user-experience"></a>

### Find UX issues in React code

[DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) — `Plugin nativo` · ★ 19 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Encontra possíveis problemas de UX em um projeto revisando automaticamente código React/TypeScript, apontando cada problema e dando sugestões concretas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:DietCokewithSugar/dsh-user-experience
```

</details>

<a id="dsh-dsh-github"></a>

### GitHub CI and PR review bot

[PerryLink/dsh-github](https://github.com/PerryLink/dsh-github) — `Plugin nativo` · ★ 15 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Integração de CI com o GitHub de nível oficial: um action.yml composto, um bot de revisão de PR por polling com comentários inline idempotentes e um gate de status-check, além de ferramentas de PR e issues em que toda escrita é aprovada por um humano.

**Alternativas:**

- [Starfie1d1272/dsh-github-skills](https://github.com/Starfie1d1272/dsh-github-skills) (★ 5) — Empacota o fluxo em quatro skills: triagem de PR, feedback de revisão, diagnóstico de Actions e publicação segura de draft-PR, via gh/git

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-github
```

</details>

<a id="dsh-dsh-git-worktree"></a>

### Git worktree session targets

[wloops/dsh-git-worktree](https://github.com/wloops/dsh-git-worktree) — `Plugin nativo` · ★ 14 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Session Targets baseados em git worktree com sessões de tarefa isoladas, status pronto-para-revisão, preview local reversível, entrega confirmada por humano, retenção e recuperação de ambiente, e iteração na mesma sessão.

**Alternativas:**

- [Cerbur/clutch-dsh#clutch-dsh-worktree](https://github.com/Cerbur/clutch-dsh/tree/main/packages/clutch-dsh-worktree) — Adiciona uma visão de Worktree na Web UI que agrupa as Sessions existentes por worktree git, mantendo o DSH como fonte da verdade
- [HeathHe/dsh-worktree-panel](https://github.com/HeathHe/dsh-worktree-panel) (★ 8) — Substitui a barra lateral por uma hierarquia projeto-worktree-sessão, com criação/remoção de worktree e proteção de migração

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wloops/dsh-git-worktree
```

</details>

<a id="dsh-github-explore"></a>

### Explore and audit GitHub via gh CLI

[Fectivnfy112357/github-explore](https://github.com/Fectivnfy112357/github-explore) — `Plugin nativo` · ★ 6 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Scripts de busca, descoberta e auditoria do GitHub empacotados como uma skill em torno da gh CLI: busca de repositórios, exploração multieixo, trending, resumos de repositório, projetos similares, busca de código e auditorias de issues/PRs e organizações.

**Alternativas:**

- [zoahdev/dsh-github-intelligence](https://github.com/zoahdev/dsh-github-intelligence) (★ 13) — Adiciona releases, issues, PRs e dados de contribuidores, além de um relatório detalhado com cache TTL, sem chave de API

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Fectivnfy112357/github-explore
```

</details>

<a id="dsh-dsh-session-review"></a>

### Review files changed this session

[sunshaobei/dsh-session-review](https://github.com/sunshaobei/dsh-session-review) — `Plugin nativo` · ★ 3 · Licença: ver repo · Funciona com: DeepSeek Harness apenas

Uma faixa acima do campo de composição lista os arquivos modificados na sessão atual (recolhida por padrão), com um botão Revisar que abre um painel mostrando trechos antes/depois dos resultados de edit/write da sessão; não requer git.

**Alternativas:**

- [cirelir/dsh-change-review](https://github.com/cirelir/dsh-change-review) (★ 14) — Rastreia write/edit com isolamento por sessão, agregação de subagentes e atualizações ao vivo via SSE, sem precisar de git
- [9087/dsh-diff-approval](https://github.com/9087/dsh-diff-approval) (★ 7) — Permite manter ou reverter cada bloco de mudança individualmente, oferece desfazer/refazer e mantém a revisão persistente entre reinícios
- [Tlyer233/dsh-vscode-review#dsh-review](https://github.com/Tlyer233/dsh-vscode-review/tree/main/dsh-review) — Registra write, edit e rm de shell num repositório git sombra, revisável trecho a trecho numa extensão companheira do VS Code

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:sunshaobei/dsh-session-review
```

</details>

<a id="dsh-dsh-plugin-git-workflow"></a>

### First-class git tools for the model

[truelove-dreamer/dsh-plugin-git-workflow](https://github.com/truelove-dreamer/dsh-plugin-git-workflow) — `Plugin nativo` · ★ 2 · Licença: ver repo · Funciona com: DeepSeek Harness apenas

Dá ao modelo ferramentas Git de primeira classe para status, diff, log, commit e branch, com mensagens e caminhos validados, em vez de depender de chamadas git de shell puras.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:truelove-dreamer/dsh-plugin-git-workflow
```

</details>

<a id="dsh-dsh-review"></a>

### Adversarial multi-lens code review

[Viger1/dsh-review](https://github.com/Viger1/dsh-review) — `Plugin nativo` · ★ 0 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Revisão de código adversarial: buscadores paralelos inspecionam um diff por lentes separadas (correção, ciclo de vida, contrato, segurança) e verificadores independentes tentam refutar cada achado; uma refutação já o descarta.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Viger1/dsh-review
```

</details>

<a id="dsh-dsh-github-connector-github"></a>

### Connect a GitHub account to DSH

[kaziii/dsh-github-connector#github](https://github.com/kaziii/dsh-github-connector/tree/main/packages/github/github) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Conexão via GitHub Device Flow mais um fluxo de PR dentro da conversa: uma barra de status acima do campo de composição para criar/revisar com IA/mesclar, e ferramentas github_* para busca, leitura e escrita de issues e PRs.

**Alternativas:**

- [Moon-shiyue/dsh-github-connect](https://github.com/Moon-shiyue/dsh-github-connect) (★ 5) — Conecta via OAuth device flow ou um personal access token e chama a API do GitHub diretamente por uma ferramenta github_api
- [Noob-stupid/dsh-github-login](https://github.com/Noob-stupid/dsh-github-login) (★ 5) — Adiciona login por device flow dentro da janela, sem precisar de terminal, sincronizando o token com a gh CLI e endpoints de status do host

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:kaziii/dsh-github-connector#path:/packages/github/github
```

</details>

<a id="mcp-git"></a>

### Git (reference)

[Git (reference)](https://github.com/modelcontextprotocol/servers/tree/main/src/git) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Servidor de referência para ler, buscar e manipular repositórios Git locais (status, diff, log, commit, branch).

<details><summary>Instalar</summary>

**Claude Code**

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```bash
claude mcp add --transport stdio git -- uvx mcp-server-git
```

**Codex CLI**

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```bash
codex mcp add git -- uvx mcp-server-git
```

**Gemini CLI**

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```bash
gemini mcp add git uvx mcp-server-git
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "mcpServers": {
    "git": {
      "command": "uvx",
      "args": [
        "mcp-server-git"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "servers": {
    "git": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "mcp-server-git"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "git": {
      "type": "local",
      "command": [
        "uvx",
        "mcp-server-git"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "mcpServers": {
    "git": {
      "command": "uvx",
      "args": [
        "mcp-server-git"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "mcpServers": {
    "git": {
      "command": "uvx",
      "args": [
        "mcp-server-git"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "context_servers": {
    "git": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "mcp-server-git"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```yaml
extensions:
  git:
    type: stdio
    cmd: uvx
    args: ["mcp-server-git"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "mcpServers": {
    "git": {
      "command": "uvx",
      "args": [
        "mcp-server-git"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```json
{
  "mcpServers": {
    "git": {
      "command": "uvx",
      "args": [
        "mcp-server-git"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `git.cordis.yml  →  dsh web --patch ./git.cordis.yml`

Pré-requisito: `Requires uv (https://docs.astral.sh/uv/).`

```yaml
- insert:
    - id: mcp-git
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: git
        transport: stdio
        command: uvx
        args: ["mcp-server-git"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-web-packages-dsh-git-graph"></a>

### Git branch graph in web GUI

[zhu1090093659/dsh-web#packages/dsh-git-graph](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-git-graph) — `Plugin nativo` · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Seletor de branch e grafo Git para a GUI web do dsh: troca de branches e exploração do histórico de commits e faixas de branch pelo cabeçalho da conversa.

**Alternativas:**

- [Wongzexu/dsh-git-status](https://github.com/Wongzexu/dsh-git-status) (★ 3) — Adiciona uma gaveta de status com grafo DAG de commits, linhas de stash/alterações não commitadas, diffs inline e fetch de todos os remotes

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:zhu1090093659/dsh-web#path:/packages/dsh-git-graph
```

</details>

<a id="dsh-codex-guard-dsh"></a>

### Pre-submit PR hygiene checks

[Akimiya-z/codex-guard#dsh](https://github.com/Akimiya-z/codex-guard/tree/main/dsh) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Verificações de higiene pré-envio de pull request dentro do DeepSeek Harness: varre o diff atual em busca de TODOs esquecidos, segredos hardcoded e assuntos de commit fora do padrão convencional.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Akimiya-z/codex-guard#path:/dsh
```

</details>
