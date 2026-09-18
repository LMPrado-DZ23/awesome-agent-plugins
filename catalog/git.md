# Git & Code Review

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [GitHub MCP Server](#github-mcp-server) — GitHub's official server: repositories, issues, pull requests, Actions, code scanning and more. Remote endpoin…
- [Find UX issues in React code](#dsh-dsh-user-experience) — Finds potential UX issues in a project by automatically reviewing React/TypeScript code, pinpointing each prob…
- [Git worktree session targets](#dsh-dsh-git-worktree) — Git-worktree Session Targets with isolated task sessions, ready-for-review status, reversible local preview, h…
- [GitHub CI and PR review bot](#dsh-dsh-github) — Official-grade GitHub CI integration: a composite action.yml, a polling PR review bot with idempotent inline c…
- [Explore and audit GitHub via gh CLI](#dsh-github-explore) — GitHub search, discovery and audit scripts wrapped as a SKILL.md pack around the gh CLI: repo search, multi-ax…
- [Review files changed this session](#dsh-dsh-session-review) — A strip above the composer lists files modified in the current session (collapsed by default), with a Review b…
- [First-class git tools for the model](#dsh-dsh-plugin-git-workflow) — Gives the model first-class Git tools for status, diff, log, commit and branch, with validated messages and pa…
- [Adversarial multi-lens code review](#dsh-dsh-review) — Adversarial code review: parallel finders inspect a diff through separate lenses (correctness, lifecycle, cont…
- [Connect a GitHub account to DSH](#dsh-dsh-github-connector-github) — GitHub Device Flow connection plus an in-conversation PR workflow: a status bar above the composer for create/…
- [Git (reference)](#mcp-git) — Reference server to read, search and manipulate local Git repositories (status, diff, log, commit, branch).
- [Git branch graph in web GUI](#dsh-dsh-web-packages-dsh-git-graph) — Git branch selector and Git graph for the dsh web GUI: switch branches and explore branch-lane and commit hist…
- [GitLab projects and merge requests](#gitlab-mcp) — GitLab server for projects, merge requests, issues, pipelines, wikis, and releases; needs a GITLAB_PERSONAL_AC…
- [Manage repos across Git hosts](#gk-cli-mcp) — The GitKraken server for managing repos, pull requests, and issues across GitHub, GitLab, and Bitbucket.
- [Native git operations](#git-mcp-server) — Comprehensive git server enabling native git tools including clone, commit, and worktree management.
- [Pre-submit PR hygiene checks](#dsh-codex-guard-dsh) — Pre-submit pull-request hygiene checks inside DeepSeek Harness: scans the current diff for TODO leftovers, har…

<a id="github-mcp-server"></a>

### GitHub MCP Server

[GitHub MCP Server](https://github.com/github/github-mcp-server) — `MCP server` · ★ 33k · License: MIT · Works with: All clients

GitHub's official server: repositories, issues, pull requests, Actions, code scanning and more. Remote endpoint shown; a Docker image (ghcr.io/github/github-mcp-server) runs it locally.

<details><summary>Install</summary>

**Claude Code**

```bash
claude mcp add --transport http github https://api.githubcopilot.com/mcp/ --header 'Authorization: Bearer <GITHUB_PAT>'
```

**Codex CLI** — File: `~/.codex/config.toml`

```toml
[mcp_servers.github]
url = "https://api.githubcopilot.com/mcp/"
bearer_token_env_var = "GITHUB_PAT"
```

**Gemini CLI**

```bash
gemini mcp add --transport http github https://api.githubcopilot.com/mcp/ --header 'Authorization: Bearer <GITHUB_PAT>'
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  github:
    type: streamable_http
    uri: https://api.githubcopilot.com/mcp/
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `github.cordis.yml  →  dsh web --patch ./github.cordis.yml`

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

<a id="dsh-dsh-user-experience"></a>

### Find UX issues in React code

[DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) — `Native plugin` · ★ 19 · License: MIT · Works with: DeepSeek Harness only

Finds potential UX issues in a project by automatically reviewing React/TypeScript code, pinpointing each problem and giving concrete suggestions.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:DietCokewithSugar/dsh-user-experience
```

</details>

<a id="dsh-dsh-git-worktree"></a>

### Git worktree session targets

[wloops/dsh-git-worktree](https://github.com/wloops/dsh-git-worktree) — `Native plugin` · ★ 14 · License: MIT · Works with: DeepSeek Harness only

Git-worktree Session Targets with isolated task sessions, ready-for-review status, reversible local preview, human-confirmed delivery, environment retention and recovery, and same-session iteration.

**Alternatives:**

- [Cerbur/clutch-dsh#clutch-dsh-worktree](https://github.com/Cerbur/clutch-dsh/tree/main/packages/clutch-dsh-worktree) — Adds a Worktree view in the Web UI that groups existing Sessions by git worktree while keeping DSH as the source of truth
- [HeathHe/dsh-worktree-panel](https://github.com/HeathHe/dsh-worktree-panel) (★ 8) — Replaces the workspace sidebar with a project-worktree-session hierarchy, with worktree create/remove and storage-migration safeguards

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wloops/dsh-git-worktree
```

</details>

<a id="dsh-dsh-github"></a>

### GitHub CI and PR review bot

[PerryLink/dsh-github](https://github.com/PerryLink/dsh-github) — `Native plugin` · ★ 14 · License: Apache-2.0 · Works with: DeepSeek Harness only

Official-grade GitHub CI integration: a composite action.yml, a polling PR review bot with idempotent inline comments and a status-check gate, plus PR and issue tools where every write is gated by human approval.

**Alternatives:**

- [Starfie1d1272/dsh-github-skills](https://github.com/Starfie1d1272/dsh-github-skills) (★ 5) — Packages the workflow as four skills: PR triage, review feedback, Actions diagnosis and safe draft-PR publishing, via gh/git fallbacks

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-github
```

</details>

<a id="dsh-github-explore"></a>

### Explore and audit GitHub via gh CLI

[Fectivnfy112357/github-explore](https://github.com/Fectivnfy112357/github-explore) — `Native plugin` · ★ 6 · License: MIT · Works with: DeepSeek Harness only

GitHub search, discovery and audit scripts wrapped as a SKILL.md pack around the gh CLI: repo search, multi-axis exploration, trending, repo summaries, similar projects, code search, and issue/PR search and org audits.

**Alternatives:**

- [zoahdev/dsh-github-intelligence](https://github.com/zoahdev/dsh-github-intelligence) (★ 13) — Adds repo releases, issues, pull requests and contributor data plus a deep repo report with TTL caching, no API key needed

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Fectivnfy112357/github-explore
```

</details>

<a id="dsh-dsh-session-review"></a>

### Review files changed this session

[sunshaobei/dsh-session-review](https://github.com/sunshaobei/dsh-session-review) — `Native plugin` · ★ 3 · License: see repo · Works with: DeepSeek Harness only

A strip above the composer lists files modified in the current session (collapsed by default), with a Review button opening a panel showing before/after hunks from the session's own edit/write results; no git required.

**Alternatives:**

- [cirelir/dsh-change-review](https://github.com/cirelir/dsh-change-review) (★ 14) — Tracks write/edit calls with session isolation, subagent aggregation and SSE live updates, also without needing git
- [9087/dsh-diff-approval](https://github.com/9087/dsh-diff-approval) (★ 6) — Lets each change block be kept or reverted individually, supports undo/redo, and persists the review across restarts
- [Tlyer233/dsh-vscode-review#dsh-review](https://github.com/Tlyer233/dsh-vscode-review/tree/main/dsh-review) — Records every write, edit and shell rm into a shadow git repo, reviewable hunk-by-hunk inside a companion VS Code extension

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:sunshaobei/dsh-session-review
```

</details>

<a id="dsh-dsh-plugin-git-workflow"></a>

### First-class git tools for the model

[truelove-dreamer/dsh-plugin-git-workflow](https://github.com/truelove-dreamer/dsh-plugin-git-workflow) — `Native plugin` · ★ 2 · License: see repo · Works with: DeepSeek Harness only

Gives the model first-class Git tools for status, diff, log, commit and branch, with validated messages and paths, instead of relying on bare shell git calls.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:truelove-dreamer/dsh-plugin-git-workflow
```

</details>

<a id="dsh-dsh-review"></a>

### Adversarial multi-lens code review

[Viger1/dsh-review](https://github.com/Viger1/dsh-review) — `Native plugin` · ★ 0 · License: MIT · Works with: DeepSeek Harness only

Adversarial code review: parallel finders inspect a diff through separate lenses (correctness, lifecycle, contract, security), then independent verifiers try to refute each finding, and one refutation drops it.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Viger1/dsh-review
```

</details>

<a id="dsh-dsh-github-connector-github"></a>

### Connect a GitHub account to DSH

[kaziii/dsh-github-connector#github](https://github.com/kaziii/dsh-github-connector/tree/main/packages/github/github) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

GitHub Device Flow connection plus an in-conversation PR workflow: a status bar above the composer for create/AI-review/merge, and github_* tools for search, issue and PR read and write.

**Alternatives:**

- [Moon-shiyue/dsh-github-connect](https://github.com/Moon-shiyue/dsh-github-connect) (★ 5) — Connects via OAuth device flow or a personal access token and calls the GitHub API directly through a github_api tool
- [Noob-stupid/dsh-github-login](https://github.com/Noob-stupid/dsh-github-login) (★ 5) — Adds an in-window device-flow login with no terminal needed, syncing the token into the gh CLI plus host status endpoints

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:kaziii/dsh-github-connector#path:/packages/github/github
```

</details>

<a id="mcp-git"></a>

### Git (reference)

[Git (reference)](https://github.com/modelcontextprotocol/servers/tree/main/src/git) — `MCP server` · License: see repo · Works with: All clients

Reference server to read, search and manipulate local Git repositories (status, diff, log, commit, branch).

<details><summary>Install</summary>

**Claude Code**

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```bash
claude mcp add --transport stdio git -- uvx mcp-server-git
```

**Codex CLI**

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```bash
codex mcp add git -- uvx mcp-server-git
```

**Gemini CLI**

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```bash
gemini mcp add git uvx mcp-server-git
```

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

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

**OpenCode** — File: `opencode.json`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

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

**Goose** — File: `~/.config/goose/config.yaml`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

```yaml
extensions:
  git:
    type: stdio
    cmd: uvx
    args: ["mcp-server-git"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

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

**Roo Code** — File: `.roo/mcp.json`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

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

**DeepSeek Harness** — File: `git.cordis.yml  →  dsh web --patch ./git.cordis.yml`

Prerequisite: `Requires uv (https://docs.astral.sh/uv/).`

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

[zhu1090093659/dsh-web#packages/dsh-git-graph](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-git-graph) — `Native plugin` · License: Apache-2.0 · Works with: DeepSeek Harness only

Git branch selector and Git graph for the dsh web GUI: switch branches and explore branch-lane and commit history from the conversation header.

**Alternatives:**

- [Wongzexu/dsh-git-status](https://github.com/Wongzexu/dsh-git-status) (★ 3) — Adds a full status drawer with a commit DAG lane graph, uncommitted/stash rows, inline diffs, and fetch from all remotes

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:zhu1090093659/dsh-web#path:/packages/dsh-git-graph
```

</details>

<a id="gitlab-mcp"></a>

### GitLab projects and merge requests

[zereight/gitlab-mcp](https://github.com/zereight/gitlab-mcp) — `MCP server` · License: MIT · Works with: All clients

GitLab server for projects, merge requests, issues, pipelines, wikis, and releases; needs a GITLAB_PERSONAL_ACCESS_TOKEN.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

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

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `gitlab-mcp.cordis.yml  →  dsh web --patch ./gitlab-mcp.cordis.yml`

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

[gitkraken/gk-cli](https://github.com/gitkraken/gk-cli) — `MCP server` · License: see repo · Works with: All clients

The GitKraken server for managing repos, pull requests, and issues across GitHub, GitLab, and Bitbucket.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  gk-cli:
    type: stdio
    cmd: npx
    args: ["-y","@gitkraken/gk"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `gk-cli.cordis.yml  →  dsh web --patch ./gk-cli.cordis.yml`

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

[cyanheads/git-mcp-server](https://github.com/cyanheads/git-mcp-server) — `MCP server` · License: Apache-2.0 · Works with: All clients

Comprehensive git server enabling native git tools including clone, commit, and worktree management.

<details><summary>Install</summary>

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

**Cursor** — File: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

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

**VS Code (Copilot)** — File: `.vscode/mcp.json`

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

**OpenCode** — File: `opencode.json`

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

**Cline** — File: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

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

**Windsurf** — File: `~/.codeium/windsurf/mcp_config.json`

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

**Zed** — File: `~/.config/zed/settings.json (or .zed/settings.json)`

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

**Goose** — File: `~/.config/goose/config.yaml`

```yaml
extensions:
  git-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@cyanheads/git-mcp-server"]
    enabled: true
```

**Kiro** — File: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

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

**Roo Code** — File: `.roo/mcp.json`

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

**DeepSeek Harness** — File: `git-mcp-server.cordis.yml  →  dsh web --patch ./git-mcp-server.cordis.yml`

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

<a id="dsh-codex-guard-dsh"></a>

### Pre-submit PR hygiene checks

[Akimiya-z/codex-guard#dsh](https://github.com/Akimiya-z/codex-guard/tree/main/dsh) — `Native plugin` · License: MIT · Works with: DeepSeek Harness only

Pre-submit pull-request hygiene checks inside DeepSeek Harness: scans the current diff for TODO leftovers, hardcoded secrets and non-conventional commit subjects.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Akimiya-z/codex-guard#path:/dsh
```

</details>
