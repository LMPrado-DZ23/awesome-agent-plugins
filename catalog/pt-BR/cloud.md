# Nuvem, dados e infra

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Cloud OS files, sites, and workers](#puter-mcp) — Permite que ferramentas de IA interajam com o Puter para gerenciar arquivos, sites e workers no cloud OS do Pu…
- [Query databases via saved connections](#dbx-mcp) — Consulta bancos de dados a partir de agentes de IA usando conexões já configuradas no DBX.
- [AWS MCP servers](#aws-mcp) — Servidores MCP open source para AWS (documentação, CDK, análise de custo, bancos de dados, Lambda e mais), cad…
- [Manage status pages and monitors](#openstatus-mcp) — Gerencia monitores, status pages, incidentes e janelas de manutenção em um workspace do openstatus.
- [Google Cloud agent development CLI](#agents-cli) — CLI e skills que transformam qualquer assistente de código em especialista em criar, avaliar e implantar agent…
- [Cloudflare MCP servers](#cloudflare-mcp) — Servidores MCP remotos da Cloudflare (bindings de Workers, builds, renderização de navegador, DNS analytics, a…
- [Microsoft MCP catalog](#microsoft-mcp) — Catálogo dos servidores MCP oficiais da Microsoft (Azure, Microsoft 365, ferramentas de dev) com links para ca…
- [Grafana dashboards and data](#mcp-grafana) — Servidor oficial que dá acesso a dashboards, fontes de dados e mais recursos do Grafana.
- [Supabase MCP](#supabase-mcp) — Gerencie projetos Supabase pelo agente: tabelas, SQL, migrations, edge functions, logs e docs. Modos somente l…
- [Cloudflare agent skills](#cloudflare-skills) — Skills que ensinam agentes de código a construir aplicações e infraestrutura na plataforma da Cloudflare.
- [FHIR healthcare data platform](#medplum-mcp) — Acessa e gerencia com segurança dados de saúde no formato FHIR armazenados no Medplum.
- [AWS agent toolkit](#agent-toolkit-for-aws) — Servidores MCP, skills e plugins com suporte oficial da AWS para ajudar agentes de IA a construir e operar na …
- [Terraform & OpenTofu skill](#terraform-skill) — Skill de um mantenedor conhecido de módulos Terraform cobrindo testes, estrutura de módulos, CI/CD e padrões d…
- [Kubernetes and OpenShift access](#kubernetes-mcp-server) — Servidor para interagir com clusters Kubernetes e OpenShift.
- [Terraform workflow automation](#terraform-mcp-server) — Servidor oficial da Hashicorp para geração de Terraform mais precisa e workflows automatizados para HCP e Terr…
- [Application observability agent](#superlog-mcp) — Agente open-source que observa e ajuda a corrigir uma aplicação: consulta logs, traces, métricas e incidentes.
- [Multi-model database access](#arcadedb-mcp) — Servidor embutido do banco multi-modelo ArcadeDB: grafo, documento, vetor e séries temporais.
- [MongoDB database access](#mongodb-mcp-server) — Servidor oficial do MongoDB para operações de banco de dados a partir de agentes de IA.
- [SQL-native cloud provisioning](#stackql-mcp) — Motor de consulta e provisionamento nativo em SQL para infraestrutura de nuvem.
- [Amazon SES observability](#sessy-mcp) — Observabilidade somente leitura do Amazon SES: busca eventos, inspeciona bounces e traz estatísticas de entreg…
- [Query ClickHouse clusters](#mcp-clickhouse) — Servidor oficial para consultar e explorar clusters ClickHouse e o chDB.
- [Neon serverless Postgres management](#mcp-server-neon) — Servidor oficial para gerenciar projetos Neon e bancos Postgres Lakebase; exige token de Authorization.
- [Coolify infrastructure management](#coolify-mcp) — 45 ferramentas para gerenciar a infraestrutura Coolify, diagnósticos e busca na documentação; exige COOLIFY_AC…
- [Proxmox VE management](#proxmoxmcp-plus) — Gerencia VMs, LXCs, snapshots, backups, storage e operações de cluster no Proxmox VE.
- [MotherDuck SQL analytics](#mcp-server-motherduck) — Analytics em SQL e engenharia de dados para assistentes de IA e IDEs via MotherDuck; exige MOTHERDUCK_TOKEN.
- [Prometheus metrics and PromQL](#prometheus-mcp-server) — Dá acesso a métricas do Prometheus e execução de consultas PromQL para assistentes de IA.
- [AI-driven Kubernetes deployment](#dot-ai-mcp) — Plataforma de desenvolvimento com IA para deployments no Kubernetes e automação inteligente.
- [Elasticsearch queries](#elasticsearch-mcp-server) — Interage com o Elasticsearch para busca e analytics; exige ELASTICSEARCH_API_KEY ou senha.
- [Snowflake data platform](#snowflake-labs-mcp) — Servidor para o Snowflake, da Snowflake Labs.
- [VictoriaMetrics integration](#mcp-victoriametrics) — Integra com a API e a documentação do VictoriaMetrics; exige um bearer token do VictoriaMetrics.
- [Enterprise PostgreSQL with hybrid search](#pgedge-postgres-mcp) — Servidor PostgreSQL empresarial com consultas em linguagem natural, busca híbrida (pgvector e BM25) e uma inte…
- [Azure services access](#mcp-azure-mcp-server) — Servidor oficial do Azure conectando agentes de IA aos serviços do Azure.
- [Backend platform management](#butterbase-oss-mcp-server) — Gerencia uma plataforma de backend: schemas, auth, funções, storage, RAG e deploys; exige BUTTERBASE_API_KEY.
- [Firecracker microVM sandboxes](#superserve-mcp) — Cria, executa em e gerencia sandboxes microVM Firecracker; exige SUPERSERVE_API_KEY.
- [Neo4j Aura instance management](#mcp-neo4j-mcp-neo4j-cloud-aura-api) — Servidor para gerenciar uma instância do Neo4j Aura Database; exige NEO4J_AURA_CLIENT_ID e secret.
- [Real-time infrastructure monitoring](#netdata-mcp) — Monitoramento de infraestrutura em tempo real com métricas, logs, alertas e detecção de anomalias por ML; exig…
- [Self-hosted spatial data catalog](#geolens-mcp) — Acesso somente leitura a um catálogo espacial GeoLens auto-hospedado: datasets, features, mapas e SQL isolado;…
- [Supabase platform management](#mcp-mcp-server-supabase) — Servidor oficial para interagir com a plataforma Supabase; exige SUPABASE_ACCESS_TOKEN.
- [Tencent CloudBase management](#cloudbase-ai-toolkit-mcp) — Servidor oficial do CloudBase da Tencent para banco de dados, funções, storage e hospedagem.
- [Valkey observability](#monitor-mcp) — Servidor da BetterDB para observabilidade do Valkey; exige BETTERDB_TOKEN.

<a id="puter-mcp"></a>

### Cloud OS files, sites, and workers

[HeyPuter/puter](https://github.com/HeyPuter/puter) — `Servidor MCP` · ★ 44k · Licença: AGPL-3.0 · Funciona com: Todos os clientes

Permite que ferramentas de IA interajam com o Puter para gerenciar arquivos, sites e workers no cloud OS do Puter.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp-server https://mcp.puter.com/
```

**Codex CLI**

```bash
codex mcp add mcp-server --url https://mcp.puter.com/
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp-server https://mcp.puter.com/
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "url": "https://mcp.puter.com/"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server": {
      "type": "http",
      "url": "https://mcp.puter.com/"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp-server": {
      "type": "remote",
      "url": "https://mcp.puter.com/",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "type": "streamableHttp",
      "url": "https://mcp.puter.com/"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "serverUrl": "https://mcp.puter.com/"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.puter.com/"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server:
    type: streamable_http
    uri: https://mcp.puter.com/
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "type": "streamable-http",
      "url": "https://mcp.puter.com/"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "type": "streamable-http",
      "url": "https://mcp.puter.com/"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-server.cordis.yml  →  dsh web --patch ./mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-server
        transport: streamable-http
        url: https://mcp.puter.com/
```

</details>

<a id="dbx-mcp"></a>

### Query databases via saved connections

[t8y2/dbx](https://github.com/t8y2/dbx) — `Servidor MCP` · ★ 20k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Consulta bancos de dados a partir de agentes de IA usando conexões já configuradas no DBX.

**Alternativas:**

- [DBHub](https://github.com/bytebase/dbhub) (★ 3.5k) — Servidor mínimo e eficiente em tokens para PostgreSQL, MySQL, SQL Server, SQLite e MariaDB.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio dbx -- npx -y @dbx-app/mcp-server
```

**Codex CLI**

```bash
codex mcp add dbx -- npx -y @dbx-app/mcp-server
```

**Gemini CLI**

```bash
gemini mcp add dbx npx -y @dbx-app/mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "dbx": {
      "command": "npx",
      "args": [
        "-y",
        "@dbx-app/mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "dbx": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@dbx-app/mcp-server"
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
    "dbx": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@dbx-app/mcp-server"
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
    "dbx": {
      "command": "npx",
      "args": [
        "-y",
        "@dbx-app/mcp-server"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "dbx": {
      "command": "npx",
      "args": [
        "-y",
        "@dbx-app/mcp-server"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "dbx": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@dbx-app/mcp-server"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  dbx:
    type: stdio
    cmd: npx
    args: ["-y","@dbx-app/mcp-server"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "dbx": {
      "command": "npx",
      "args": [
        "-y",
        "@dbx-app/mcp-server"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "dbx": {
      "command": "npx",
      "args": [
        "-y",
        "@dbx-app/mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `dbx.cordis.yml  →  dsh web --patch ./dbx.cordis.yml`

```yaml
- insert:
    - id: mcp-dbx
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: dbx
        transport: stdio
        command: npx
        args: ["-y","@dbx-app/mcp-server"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="aws-mcp"></a>

### AWS MCP servers

[AWS MCP servers](https://github.com/awslabs/mcp) — `Lista / registro` · ★ 9.7k · Licença: Apache-2.0 · Funciona com: —

Servidores MCP open source para AWS (documentação, CDK, análise de custo, bancos de dados, Lambda e mais), cada um com suas instruções de instalação.

<a id="openstatus-mcp"></a>

### Manage status pages and monitors

[openstatus](https://github.com/openstatusHQ/openstatus) — `Servidor MCP` · ★ 9.1k · Licença: AGPL-3.0 · Funciona com: Todos os clientes

Gerencia monitores, status pages, incidentes e janelas de manutenção em um workspace do openstatus.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://api.openstatus.dev/mcp
```

**Codex CLI**

```bash
codex mcp add mcp --url https://api.openstatus.dev/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://api.openstatus.dev/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://api.openstatus.dev/mcp"
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
      "url": "https://api.openstatus.dev/mcp"
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
      "url": "https://api.openstatus.dev/mcp",
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
      "url": "https://api.openstatus.dev/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://api.openstatus.dev/mcp"
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
        "https://api.openstatus.dev/mcp"
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
    uri: https://api.openstatus.dev/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://api.openstatus.dev/mcp"
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
      "url": "https://api.openstatus.dev/mcp"
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
        url: https://api.openstatus.dev/mcp
```

</details>

<a id="agents-cli"></a>

### Google Cloud agent development CLI

[google/agents-cli](https://github.com/google/agents-cli) — `Plugin nativo` · ★ 6.0k · Licença: Apache-2.0 · Funciona com: Gemini CLI apenas

CLI e skills que transformam qualquer assistente de código em especialista em criar, avaliar e implantar agentes de IA no Agent Development Kit do Google Cloud.

<details><summary>Instalar</summary>

**Gemini CLI**

```bash
gemini extensions install https://github.com/google/agents-cli
```

</details>

<a id="cloudflare-mcp"></a>

### Cloudflare MCP servers

[Cloudflare MCP servers](https://github.com/cloudflare/mcp-server-cloudflare) — `Servidor MCP` · ★ 4.3k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidores MCP remotos da Cloudflare (bindings de Workers, builds, renderização de navegador, DNS analytics, audit logs…). A configuração mostrada conecta o servidor de Workers Bindings.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http cloudflare-bindings https://bindings.mcp.cloudflare.com/mcp
```

**Codex CLI**

```bash
codex mcp add cloudflare-bindings --url https://bindings.mcp.cloudflare.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http cloudflare-bindings https://bindings.mcp.cloudflare.com/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "cloudflare-bindings": {
      "type": "http",
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "cloudflare-bindings": {
      "type": "remote",
      "url": "https://bindings.mcp.cloudflare.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "type": "streamableHttp",
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "serverUrl": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "cloudflare-bindings": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://bindings.mcp.cloudflare.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  cloudflare-bindings:
    type: streamable_http
    uri: https://bindings.mcp.cloudflare.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "type": "streamable-http",
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "cloudflare-bindings": {
      "type": "streamable-http",
      "url": "https://bindings.mcp.cloudflare.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `cloudflare-bindings.cordis.yml  →  dsh web --patch ./cloudflare-bindings.cordis.yml`

```yaml
- insert:
    - id: mcp-cloudflare-bindings
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: cloudflare-bindings
        transport: streamable-http
        url: https://bindings.mcp.cloudflare.com/mcp
```

</details>

<a id="microsoft-mcp"></a>

### Microsoft MCP catalog

[Microsoft MCP catalog](https://github.com/microsoft/mcp) — `Lista / registro` · ★ 3.7k · Licença: MIT · Funciona com: —

Catálogo dos servidores MCP oficiais da Microsoft (Azure, Microsoft 365, ferramentas de dev) com links para cada implementação.

<a id="mcp-grafana"></a>

### Grafana dashboards and data

[grafana/mcp-grafana](https://github.com/grafana/mcp-grafana) — `Servidor MCP` · ★ 3.5k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor oficial que dá acesso a dashboards, fontes de dados e mais recursos do Grafana.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-grafana --env GRAFANA_URL='<GRAFANA_URL>' --env GRAFANA_SERVICE_ACCOUNT_TOKEN='<GRAFANA_SERVICE_ACCOUNT_TOKEN>' --env GRAFANA_PASSWORD='<GRAFANA_PASSWORD>' -- docker run -i --rm -e GRAFANA_URL -e GRAFANA_SERVICE_ACCOUNT_TOKEN -e GRAFANA_PASSWORD docker.io/grafana/mcp-grafana:1.5.1
```

**Codex CLI**

```bash
codex mcp add mcp-grafana --env GRAFANA_URL='<GRAFANA_URL>' --env GRAFANA_SERVICE_ACCOUNT_TOKEN='<GRAFANA_SERVICE_ACCOUNT_TOKEN>' --env GRAFANA_PASSWORD='<GRAFANA_PASSWORD>' -- docker run -i --rm -e GRAFANA_URL -e GRAFANA_SERVICE_ACCOUNT_TOKEN -e GRAFANA_PASSWORD docker.io/grafana/mcp-grafana:1.5.1
```

**Gemini CLI**

```bash
gemini mcp add -e GRAFANA_URL='<GRAFANA_URL>' -e GRAFANA_SERVICE_ACCOUNT_TOKEN='<GRAFANA_SERVICE_ACCOUNT_TOKEN>' -e GRAFANA_PASSWORD='<GRAFANA_PASSWORD>' mcp-grafana docker run -i --rm -e GRAFANA_URL -e GRAFANA_SERVICE_ACCOUNT_TOKEN -e GRAFANA_PASSWORD docker.io/grafana/mcp-grafana:1.5.1
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-grafana": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GRAFANA_URL",
        "-e",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN",
        "-e",
        "GRAFANA_PASSWORD",
        "docker.io/grafana/mcp-grafana:1.5.1"
      ],
      "env": {
        "GRAFANA_URL": "<GRAFANA_URL>",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN": "<GRAFANA_SERVICE_ACCOUNT_TOKEN>",
        "GRAFANA_PASSWORD": "<GRAFANA_PASSWORD>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-grafana": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GRAFANA_URL",
        "-e",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN",
        "-e",
        "GRAFANA_PASSWORD",
        "docker.io/grafana/mcp-grafana:1.5.1"
      ],
      "env": {
        "GRAFANA_URL": "<GRAFANA_URL>",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN": "<GRAFANA_SERVICE_ACCOUNT_TOKEN>",
        "GRAFANA_PASSWORD": "<GRAFANA_PASSWORD>"
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
    "mcp-grafana": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "-e",
        "GRAFANA_URL",
        "-e",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN",
        "-e",
        "GRAFANA_PASSWORD",
        "docker.io/grafana/mcp-grafana:1.5.1"
      ],
      "enabled": true,
      "environment": {
        "GRAFANA_URL": "<GRAFANA_URL>",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN": "<GRAFANA_SERVICE_ACCOUNT_TOKEN>",
        "GRAFANA_PASSWORD": "<GRAFANA_PASSWORD>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-grafana": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GRAFANA_URL",
        "-e",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN",
        "-e",
        "GRAFANA_PASSWORD",
        "docker.io/grafana/mcp-grafana:1.5.1"
      ],
      "env": {
        "GRAFANA_URL": "<GRAFANA_URL>",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN": "<GRAFANA_SERVICE_ACCOUNT_TOKEN>",
        "GRAFANA_PASSWORD": "<GRAFANA_PASSWORD>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-grafana": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GRAFANA_URL",
        "-e",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN",
        "-e",
        "GRAFANA_PASSWORD",
        "docker.io/grafana/mcp-grafana:1.5.1"
      ],
      "env": {
        "GRAFANA_URL": "<GRAFANA_URL>",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN": "<GRAFANA_SERVICE_ACCOUNT_TOKEN>",
        "GRAFANA_PASSWORD": "<GRAFANA_PASSWORD>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-grafana": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GRAFANA_URL",
        "-e",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN",
        "-e",
        "GRAFANA_PASSWORD",
        "docker.io/grafana/mcp-grafana:1.5.1"
      ],
      "env": {
        "GRAFANA_URL": "<GRAFANA_URL>",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN": "<GRAFANA_SERVICE_ACCOUNT_TOKEN>",
        "GRAFANA_PASSWORD": "<GRAFANA_PASSWORD>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-grafana:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","-e","GRAFANA_URL","-e","GRAFANA_SERVICE_ACCOUNT_TOKEN","-e","GRAFANA_PASSWORD","docker.io/grafana/mcp-grafana:1.5.1"]
    envs:
      GRAFANA_URL: "<GRAFANA_URL>"
      GRAFANA_SERVICE_ACCOUNT_TOKEN: "<GRAFANA_SERVICE_ACCOUNT_TOKEN>"
      GRAFANA_PASSWORD: "<GRAFANA_PASSWORD>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-grafana": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GRAFANA_URL",
        "-e",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN",
        "-e",
        "GRAFANA_PASSWORD",
        "docker.io/grafana/mcp-grafana:1.5.1"
      ],
      "env": {
        "GRAFANA_URL": "<GRAFANA_URL>",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN": "<GRAFANA_SERVICE_ACCOUNT_TOKEN>",
        "GRAFANA_PASSWORD": "<GRAFANA_PASSWORD>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-grafana": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GRAFANA_URL",
        "-e",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN",
        "-e",
        "GRAFANA_PASSWORD",
        "docker.io/grafana/mcp-grafana:1.5.1"
      ],
      "env": {
        "GRAFANA_URL": "<GRAFANA_URL>",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN": "<GRAFANA_SERVICE_ACCOUNT_TOKEN>",
        "GRAFANA_PASSWORD": "<GRAFANA_PASSWORD>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-grafana.cordis.yml  →  dsh web --patch ./mcp-grafana.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-grafana
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-grafana
        transport: stdio
        command: docker
        args: ["run","-i","--rm","-e","GRAFANA_URL","-e","GRAFANA_SERVICE_ACCOUNT_TOKEN","-e","GRAFANA_PASSWORD","docker.io/grafana/mcp-grafana:1.5.1"]
        env: {"GRAFANA_URL":"<GRAFANA_URL>","GRAFANA_SERVICE_ACCOUNT_TOKEN":"<GRAFANA_SERVICE_ACCOUNT_TOKEN>","GRAFANA_PASSWORD":"<GRAFANA_PASSWORD>"}
        cwd: !!js process.cwd()
```

</details>

<a id="supabase-mcp"></a>

### Supabase MCP

[Supabase MCP](https://github.com/supabase/mcp) — `Servidor MCP` · ★ 2.9k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Gerencie projetos Supabase pelo agente: tabelas, SQL, migrations, edge functions, logs e docs. Modos somente leitura e por projeto via parâmetros na URL.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http supabase https://mcp.supabase.com/mcp
```

**Codex CLI**

```bash
codex mcp add supabase --url https://mcp.supabase.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http supabase https://mcp.supabase.com/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "supabase": {
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "supabase": {
      "type": "http",
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "supabase": {
      "type": "remote",
      "url": "https://mcp.supabase.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "supabase": {
      "type": "streamableHttp",
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "supabase": {
      "serverUrl": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "supabase": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.supabase.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  supabase:
    type: streamable_http
    uri: https://mcp.supabase.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "supabase": {
      "type": "streamable-http",
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "supabase": {
      "type": "streamable-http",
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `supabase.cordis.yml  →  dsh web --patch ./supabase.cordis.yml`

```yaml
- insert:
    - id: mcp-supabase
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: supabase
        transport: streamable-http
        url: https://mcp.supabase.com/mcp
```

</details>

<a id="cloudflare-skills"></a>

### Cloudflare agent skills

[cloudflare/skills](https://github.com/cloudflare/skills) — `Agent Skills` · ★ 2.9k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Skills que ensinam agentes de código a construir aplicações e infraestrutura na plataforma da Cloudflare.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add cloudflare/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add cloudflare/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add cloudflare/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add cloudflare/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add cloudflare/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add cloudflare/skills -a opencode -g
```

**Cline**

```bash
npx skills add cloudflare/skills -a cline -g
```

**Windsurf**

```bash
npx skills add cloudflare/skills -a windsurf -g
```

**Zed**

```bash
npx skills add cloudflare/skills -a zed -g
```

**Goose**

```bash
npx skills add cloudflare/skills -a goose -g
```

**Kiro**

```bash
npx skills add cloudflare/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add cloudflare/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add cloudflare/skills -a universal
```

</details>

<a id="medplum-mcp"></a>

### FHIR healthcare data platform

[medplum/medplum](https://github.com/medplum/medplum) — `Servidor MCP` · ★ 2.7k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Acessa e gerencia com segurança dados de saúde no formato FHIR armazenados no Medplum.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://api.medplum.com/mcp/stream
```

**Codex CLI**

```bash
codex mcp add mcp --url https://api.medplum.com/mcp/stream
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://api.medplum.com/mcp/stream
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://api.medplum.com/mcp/stream"
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
      "url": "https://api.medplum.com/mcp/stream"
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
      "url": "https://api.medplum.com/mcp/stream",
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
      "url": "https://api.medplum.com/mcp/stream"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "serverUrl": "https://api.medplum.com/mcp/stream"
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
        "https://api.medplum.com/mcp/stream"
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
    uri: https://api.medplum.com/mcp/stream
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://api.medplum.com/mcp/stream"
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
      "url": "https://api.medplum.com/mcp/stream"
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
        url: https://api.medplum.com/mcp/stream
```

</details>

<a id="agent-toolkit-for-aws"></a>

### AWS agent toolkit

[aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws) — `Agent Skills` · ★ 2.7k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidores MCP, skills e plugins com suporte oficial da AWS para ajudar agentes de IA a construir e operar na AWS.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add aws/agent-toolkit-for-aws -a claude-code -g
```

**Codex CLI**

```bash
npx skills add aws/agent-toolkit-for-aws -a codex -g
```

**Gemini CLI**

```bash
npx skills add aws/agent-toolkit-for-aws -a gemini-cli -g
```

**Cursor**

```bash
npx skills add aws/agent-toolkit-for-aws -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add aws/agent-toolkit-for-aws -a github-copilot -g
```

**OpenCode**

```bash
npx skills add aws/agent-toolkit-for-aws -a opencode -g
```

**Cline**

```bash
npx skills add aws/agent-toolkit-for-aws -a cline -g
```

**Windsurf**

```bash
npx skills add aws/agent-toolkit-for-aws -a windsurf -g
```

**Zed**

```bash
npx skills add aws/agent-toolkit-for-aws -a zed -g
```

**Goose**

```bash
npx skills add aws/agent-toolkit-for-aws -a goose -g
```

**Kiro**

```bash
npx skills add aws/agent-toolkit-for-aws -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add aws/agent-toolkit-for-aws -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add aws/agent-toolkit-for-aws -a universal
```

</details>

<a id="terraform-skill"></a>

### Terraform & OpenTofu skill

[antonbabenko/terraform-skill](https://github.com/antonbabenko/terraform-skill) — `Agent Skills` · ★ 2.4k · Licença: ver repo · Funciona com: Todos os clientes

Skill de um mantenedor conhecido de módulos Terraform cobrindo testes, estrutura de módulos, CI/CD e padrões de infraestrutura como código em produção para Terraform e OpenTofu.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add antonbabenko/terraform-skill -a claude-code -g
```

**Codex CLI**

```bash
npx skills add antonbabenko/terraform-skill -a codex -g
```

**Gemini CLI**

```bash
npx skills add antonbabenko/terraform-skill -a gemini-cli -g
```

**Cursor**

```bash
npx skills add antonbabenko/terraform-skill -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add antonbabenko/terraform-skill -a github-copilot -g
```

**OpenCode**

```bash
npx skills add antonbabenko/terraform-skill -a opencode -g
```

**Cline**

```bash
npx skills add antonbabenko/terraform-skill -a cline -g
```

**Windsurf**

```bash
npx skills add antonbabenko/terraform-skill -a windsurf -g
```

**Zed**

```bash
npx skills add antonbabenko/terraform-skill -a zed -g
```

**Goose**

```bash
npx skills add antonbabenko/terraform-skill -a goose -g
```

**Kiro**

```bash
npx skills add antonbabenko/terraform-skill -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add antonbabenko/terraform-skill -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add antonbabenko/terraform-skill -a universal
```

</details>

<a id="kubernetes-mcp-server"></a>

### Kubernetes and OpenShift access

[containers/kubernetes-mcp-server](https://github.com/containers/kubernetes-mcp-server) — `Servidor MCP` · ★ 2.1k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor para interagir com clusters Kubernetes e OpenShift.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio kubernetes-mcp-server -- npx -y kubernetes-mcp-server
```

**Codex CLI**

```bash
codex mcp add kubernetes-mcp-server -- npx -y kubernetes-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add kubernetes-mcp-server npx -y kubernetes-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "kubernetes-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "kubernetes-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "kubernetes-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "kubernetes-mcp-server"
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
    "kubernetes-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "kubernetes-mcp-server"
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
    "kubernetes-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "kubernetes-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "kubernetes-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "kubernetes-mcp-server"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "kubernetes-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "kubernetes-mcp-server"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  kubernetes-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","kubernetes-mcp-server"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "kubernetes-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "kubernetes-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "kubernetes-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "kubernetes-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `kubernetes-mcp-server.cordis.yml  →  dsh web --patch ./kubernetes-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-kubernetes-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: kubernetes-mcp-server
        transport: stdio
        command: npx
        args: ["-y","kubernetes-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="terraform-mcp-server"></a>

### Terraform workflow automation

[Terraform](https://github.com/hashicorp/terraform-mcp-server) — `Servidor MCP` · ★ 1.5k · Licença: MPL-2.0 · Funciona com: Todos os clientes

Servidor oficial da Hashicorp para geração de Terraform mais precisa e workflows automatizados para HCP e Terraform Enterprise.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio terraform-mcp-server -- docker run -i --rm docker.io/hashicorp/terraform-mcp-server:1.0.0
```

**Codex CLI**

```bash
codex mcp add terraform-mcp-server -- docker run -i --rm docker.io/hashicorp/terraform-mcp-server:1.0.0
```

**Gemini CLI**

```bash
gemini mcp add terraform-mcp-server docker run -i --rm docker.io/hashicorp/terraform-mcp-server:1.0.0
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "terraform-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/hashicorp/terraform-mcp-server:1.0.0"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "terraform-mcp-server": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/hashicorp/terraform-mcp-server:1.0.0"
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
    "terraform-mcp-server": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "docker.io/hashicorp/terraform-mcp-server:1.0.0"
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
    "terraform-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/hashicorp/terraform-mcp-server:1.0.0"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "terraform-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/hashicorp/terraform-mcp-server:1.0.0"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "terraform-mcp-server": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/hashicorp/terraform-mcp-server:1.0.0"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  terraform-mcp-server:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","docker.io/hashicorp/terraform-mcp-server:1.0.0"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "terraform-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/hashicorp/terraform-mcp-server:1.0.0"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "terraform-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/hashicorp/terraform-mcp-server:1.0.0"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `terraform-mcp-server.cordis.yml  →  dsh web --patch ./terraform-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-terraform-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: terraform-mcp-server
        transport: stdio
        command: docker
        args: ["run","-i","--rm","docker.io/hashicorp/terraform-mcp-server:1.0.0"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="superlog-mcp"></a>

### Application observability agent

[Superlog](https://github.com/superloglabs/superlog) — `Servidor MCP` · ★ 1.5k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Agente open-source que observa e ajuda a corrigir uma aplicação: consulta logs, traces, métricas e incidentes.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http superlog https://api.superlog.sh/mcp
```

**Codex CLI**

```bash
codex mcp add superlog --url https://api.superlog.sh/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http superlog https://api.superlog.sh/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "superlog": {
      "url": "https://api.superlog.sh/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "superlog": {
      "type": "http",
      "url": "https://api.superlog.sh/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "superlog": {
      "type": "remote",
      "url": "https://api.superlog.sh/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "superlog": {
      "type": "streamableHttp",
      "url": "https://api.superlog.sh/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "superlog": {
      "serverUrl": "https://api.superlog.sh/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "superlog": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.superlog.sh/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  superlog:
    type: streamable_http
    uri: https://api.superlog.sh/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "superlog": {
      "type": "streamable-http",
      "url": "https://api.superlog.sh/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "superlog": {
      "type": "streamable-http",
      "url": "https://api.superlog.sh/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `superlog.cordis.yml  →  dsh web --patch ./superlog.cordis.yml`

```yaml
- insert:
    - id: mcp-superlog
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: superlog
        transport: streamable-http
        url: https://api.superlog.sh/mcp
```

</details>

<a id="arcadedb-mcp"></a>

### Multi-model database access

[ArcadeDB MCP Server](https://github.com/ArcadeData/arcadedb) — `Servidor MCP` · ★ 1.2k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor embutido do banco multi-modelo ArcadeDB: grafo, documento, vetor e séries temporais.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-server -- docker run -i --rm docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT
```

**Codex CLI**

```bash
codex mcp add mcp-server -- docker run -i --rm docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT
```

**Gemini CLI**

```bash
gemini mcp add mcp-server docker run -i --rm docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT"
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
    "mcp-server": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT"
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
    "mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-server": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-server.cordis.yml  →  dsh web --patch ./mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-server
        transport: stdio
        command: docker
        args: ["run","-i","--rm","docker.io/arcadedata/arcadedb:26.4.1-SNAPSHOT"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="mongodb-mcp-server"></a>

### MongoDB database access

[mongodb-js/mongodb-mcp-server](https://github.com/mongodb-js/mongodb-mcp-server) — `Servidor MCP` · ★ 1.1k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor oficial do MongoDB para operações de banco de dados a partir de agentes de IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mongodb-mcp-server --env MDB_MCP_API_CLIENT_ID='<MDB_MCP_API_CLIENT_ID>' --env MDB_MCP_API_CLIENT_SECRET='<MDB_MCP_API_CLIENT_SECRET>' --env MDB_MCP_CONNECTION_STRING='<MDB_MCP_CONNECTION_STRING>' --env MDB_MCP_VOYAGE_API_KEY='<MDB_MCP_VOYAGE_API_KEY>' -- npx -y mongodb-mcp-server
```

**Codex CLI**

```bash
codex mcp add mongodb-mcp-server --env MDB_MCP_API_CLIENT_ID='<MDB_MCP_API_CLIENT_ID>' --env MDB_MCP_API_CLIENT_SECRET='<MDB_MCP_API_CLIENT_SECRET>' --env MDB_MCP_CONNECTION_STRING='<MDB_MCP_CONNECTION_STRING>' --env MDB_MCP_VOYAGE_API_KEY='<MDB_MCP_VOYAGE_API_KEY>' -- npx -y mongodb-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e MDB_MCP_API_CLIENT_ID='<MDB_MCP_API_CLIENT_ID>' -e MDB_MCP_API_CLIENT_SECRET='<MDB_MCP_API_CLIENT_SECRET>' -e MDB_MCP_CONNECTION_STRING='<MDB_MCP_CONNECTION_STRING>' -e MDB_MCP_VOYAGE_API_KEY='<MDB_MCP_VOYAGE_API_KEY>' mongodb-mcp-server npx -y mongodb-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mongodb-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "mongodb-mcp-server"
      ],
      "env": {
        "MDB_MCP_API_CLIENT_ID": "<MDB_MCP_API_CLIENT_ID>",
        "MDB_MCP_API_CLIENT_SECRET": "<MDB_MCP_API_CLIENT_SECRET>",
        "MDB_MCP_CONNECTION_STRING": "<MDB_MCP_CONNECTION_STRING>",
        "MDB_MCP_VOYAGE_API_KEY": "<MDB_MCP_VOYAGE_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mongodb-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "mongodb-mcp-server"
      ],
      "env": {
        "MDB_MCP_API_CLIENT_ID": "<MDB_MCP_API_CLIENT_ID>",
        "MDB_MCP_API_CLIENT_SECRET": "<MDB_MCP_API_CLIENT_SECRET>",
        "MDB_MCP_CONNECTION_STRING": "<MDB_MCP_CONNECTION_STRING>",
        "MDB_MCP_VOYAGE_API_KEY": "<MDB_MCP_VOYAGE_API_KEY>"
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
    "mongodb-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "mongodb-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "MDB_MCP_API_CLIENT_ID": "<MDB_MCP_API_CLIENT_ID>",
        "MDB_MCP_API_CLIENT_SECRET": "<MDB_MCP_API_CLIENT_SECRET>",
        "MDB_MCP_CONNECTION_STRING": "<MDB_MCP_CONNECTION_STRING>",
        "MDB_MCP_VOYAGE_API_KEY": "<MDB_MCP_VOYAGE_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mongodb-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "mongodb-mcp-server"
      ],
      "env": {
        "MDB_MCP_API_CLIENT_ID": "<MDB_MCP_API_CLIENT_ID>",
        "MDB_MCP_API_CLIENT_SECRET": "<MDB_MCP_API_CLIENT_SECRET>",
        "MDB_MCP_CONNECTION_STRING": "<MDB_MCP_CONNECTION_STRING>",
        "MDB_MCP_VOYAGE_API_KEY": "<MDB_MCP_VOYAGE_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mongodb-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "mongodb-mcp-server"
      ],
      "env": {
        "MDB_MCP_API_CLIENT_ID": "<MDB_MCP_API_CLIENT_ID>",
        "MDB_MCP_API_CLIENT_SECRET": "<MDB_MCP_API_CLIENT_SECRET>",
        "MDB_MCP_CONNECTION_STRING": "<MDB_MCP_CONNECTION_STRING>",
        "MDB_MCP_VOYAGE_API_KEY": "<MDB_MCP_VOYAGE_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mongodb-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mongodb-mcp-server"
      ],
      "env": {
        "MDB_MCP_API_CLIENT_ID": "<MDB_MCP_API_CLIENT_ID>",
        "MDB_MCP_API_CLIENT_SECRET": "<MDB_MCP_API_CLIENT_SECRET>",
        "MDB_MCP_CONNECTION_STRING": "<MDB_MCP_CONNECTION_STRING>",
        "MDB_MCP_VOYAGE_API_KEY": "<MDB_MCP_VOYAGE_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mongodb-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","mongodb-mcp-server"]
    envs:
      MDB_MCP_API_CLIENT_ID: "<MDB_MCP_API_CLIENT_ID>"
      MDB_MCP_API_CLIENT_SECRET: "<MDB_MCP_API_CLIENT_SECRET>"
      MDB_MCP_CONNECTION_STRING: "<MDB_MCP_CONNECTION_STRING>"
      MDB_MCP_VOYAGE_API_KEY: "<MDB_MCP_VOYAGE_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mongodb-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "mongodb-mcp-server"
      ],
      "env": {
        "MDB_MCP_API_CLIENT_ID": "<MDB_MCP_API_CLIENT_ID>",
        "MDB_MCP_API_CLIENT_SECRET": "<MDB_MCP_API_CLIENT_SECRET>",
        "MDB_MCP_CONNECTION_STRING": "<MDB_MCP_CONNECTION_STRING>",
        "MDB_MCP_VOYAGE_API_KEY": "<MDB_MCP_VOYAGE_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mongodb-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "mongodb-mcp-server"
      ],
      "env": {
        "MDB_MCP_API_CLIENT_ID": "<MDB_MCP_API_CLIENT_ID>",
        "MDB_MCP_API_CLIENT_SECRET": "<MDB_MCP_API_CLIENT_SECRET>",
        "MDB_MCP_CONNECTION_STRING": "<MDB_MCP_CONNECTION_STRING>",
        "MDB_MCP_VOYAGE_API_KEY": "<MDB_MCP_VOYAGE_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mongodb-mcp-server.cordis.yml  →  dsh web --patch ./mongodb-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-mongodb-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mongodb-mcp-server
        transport: stdio
        command: npx
        args: ["-y","mongodb-mcp-server"]
        env: {"MDB_MCP_API_CLIENT_ID":"<MDB_MCP_API_CLIENT_ID>","MDB_MCP_API_CLIENT_SECRET":"<MDB_MCP_API_CLIENT_SECRET>","MDB_MCP_CONNECTION_STRING":"<MDB_MCP_CONNECTION_STRING>","MDB_MCP_VOYAGE_API_KEY":"<MDB_MCP_VOYAGE_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="stackql-mcp"></a>

### SQL-native cloud provisioning

[StackQL MCP Server](https://github.com/stackql/stackql) — `Servidor MCP` · ★ 991 · Licença: MIT · Funciona com: Todos os clientes

Motor de consulta e provisionamento nativo em SQL para infraestrutura de nuvem.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio stackql-mcp -- docker run -i --rm docker.io/stackql/stackql-mcp:0.11.669
```

**Codex CLI**

```bash
codex mcp add stackql-mcp -- docker run -i --rm docker.io/stackql/stackql-mcp:0.11.669
```

**Gemini CLI**

```bash
gemini mcp add stackql-mcp docker run -i --rm docker.io/stackql/stackql-mcp:0.11.669
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "stackql-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/stackql/stackql-mcp:0.11.669"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "stackql-mcp": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/stackql/stackql-mcp:0.11.669"
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
    "stackql-mcp": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "docker.io/stackql/stackql-mcp:0.11.669"
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
    "stackql-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/stackql/stackql-mcp:0.11.669"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "stackql-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/stackql/stackql-mcp:0.11.669"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "stackql-mcp": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/stackql/stackql-mcp:0.11.669"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  stackql-mcp:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","docker.io/stackql/stackql-mcp:0.11.669"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "stackql-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/stackql/stackql-mcp:0.11.669"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "stackql-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/stackql/stackql-mcp:0.11.669"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `stackql-mcp.cordis.yml  →  dsh web --patch ./stackql-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-stackql-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: stackql-mcp
        transport: stdio
        command: docker
        args: ["run","-i","--rm","docker.io/stackql/stackql-mcp:0.11.669"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="sessy-mcp"></a>

### Amazon SES observability

[Sessy — Amazon SES observability](https://github.com/marckohlbrugge/sessy) — `Servidor MCP` · ★ 932 · Licença: ver repo · Funciona com: Todos os clientes

Observabilidade somente leitura do Amazon SES: busca eventos, inspeciona bounces e traz estatísticas de entrega; exige token de Authorization.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http sessy https://api.sessy.do/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — Arquivo: `~/.codex/config.toml`

```toml
[mcp_servers.sessy]
url = "https://api.sessy.do/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http sessy https://api.sessy.do/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sessy": {
      "url": "https://api.sessy.do/mcp",
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
    "sessy": {
      "type": "http",
      "url": "https://api.sessy.do/mcp",
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
    "sessy": {
      "type": "remote",
      "url": "https://api.sessy.do/mcp",
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
    "sessy": {
      "type": "streamableHttp",
      "url": "https://api.sessy.do/mcp",
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
    "sessy": {
      "serverUrl": "https://api.sessy.do/mcp",
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
    "sessy": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.sessy.do/mcp",
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
  sessy:
    type: streamable_http
    uri: https://api.sessy.do/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sessy": {
      "type": "streamable-http",
      "url": "https://api.sessy.do/mcp",
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
    "sessy": {
      "type": "streamable-http",
      "url": "https://api.sessy.do/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `sessy.cordis.yml  →  dsh web --patch ./sessy.cordis.yml`

```yaml
- insert:
    - id: mcp-sessy
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sessy
        transport: streamable-http
        url: https://api.sessy.do/mcp
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="mcp-clickhouse"></a>

### Query ClickHouse clusters

[ClickHouse](https://github.com/ClickHouse/mcp-clickhouse) — `Servidor MCP` · ★ 877 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor oficial para consultar e explorar clusters ClickHouse e o chDB.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-clickhouse --env CLICKHOUSE_HOST='<CLICKHOUSE_HOST>' --env CLICKHOUSE_USER='<CLICKHOUSE_USER>' --env CLICKHOUSE_PASSWORD='<CLICKHOUSE_PASSWORD>' -- uvx mcp-clickhouse
```

**Codex CLI**

```bash
codex mcp add mcp-clickhouse --env CLICKHOUSE_HOST='<CLICKHOUSE_HOST>' --env CLICKHOUSE_USER='<CLICKHOUSE_USER>' --env CLICKHOUSE_PASSWORD='<CLICKHOUSE_PASSWORD>' -- uvx mcp-clickhouse
```

**Gemini CLI**

```bash
gemini mcp add -e CLICKHOUSE_HOST='<CLICKHOUSE_HOST>' -e CLICKHOUSE_USER='<CLICKHOUSE_USER>' -e CLICKHOUSE_PASSWORD='<CLICKHOUSE_PASSWORD>' mcp-clickhouse uvx mcp-clickhouse
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uvx",
      "args": [
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<CLICKHOUSE_HOST>",
        "CLICKHOUSE_USER": "<CLICKHOUSE_USER>",
        "CLICKHOUSE_PASSWORD": "<CLICKHOUSE_PASSWORD>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-clickhouse": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<CLICKHOUSE_HOST>",
        "CLICKHOUSE_USER": "<CLICKHOUSE_USER>",
        "CLICKHOUSE_PASSWORD": "<CLICKHOUSE_PASSWORD>"
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
    "mcp-clickhouse": {
      "type": "local",
      "command": [
        "uvx",
        "mcp-clickhouse"
      ],
      "enabled": true,
      "environment": {
        "CLICKHOUSE_HOST": "<CLICKHOUSE_HOST>",
        "CLICKHOUSE_USER": "<CLICKHOUSE_USER>",
        "CLICKHOUSE_PASSWORD": "<CLICKHOUSE_PASSWORD>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uvx",
      "args": [
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<CLICKHOUSE_HOST>",
        "CLICKHOUSE_USER": "<CLICKHOUSE_USER>",
        "CLICKHOUSE_PASSWORD": "<CLICKHOUSE_PASSWORD>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uvx",
      "args": [
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<CLICKHOUSE_HOST>",
        "CLICKHOUSE_USER": "<CLICKHOUSE_USER>",
        "CLICKHOUSE_PASSWORD": "<CLICKHOUSE_PASSWORD>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-clickhouse": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<CLICKHOUSE_HOST>",
        "CLICKHOUSE_USER": "<CLICKHOUSE_USER>",
        "CLICKHOUSE_PASSWORD": "<CLICKHOUSE_PASSWORD>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-clickhouse:
    type: stdio
    cmd: uvx
    args: ["mcp-clickhouse"]
    envs:
      CLICKHOUSE_HOST: "<CLICKHOUSE_HOST>"
      CLICKHOUSE_USER: "<CLICKHOUSE_USER>"
      CLICKHOUSE_PASSWORD: "<CLICKHOUSE_PASSWORD>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uvx",
      "args": [
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<CLICKHOUSE_HOST>",
        "CLICKHOUSE_USER": "<CLICKHOUSE_USER>",
        "CLICKHOUSE_PASSWORD": "<CLICKHOUSE_PASSWORD>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uvx",
      "args": [
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<CLICKHOUSE_HOST>",
        "CLICKHOUSE_USER": "<CLICKHOUSE_USER>",
        "CLICKHOUSE_PASSWORD": "<CLICKHOUSE_PASSWORD>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-clickhouse.cordis.yml  →  dsh web --patch ./mcp-clickhouse.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-clickhouse
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-clickhouse
        transport: stdio
        command: uvx
        args: ["mcp-clickhouse"]
        env: {"CLICKHOUSE_HOST":"<CLICKHOUSE_HOST>","CLICKHOUSE_USER":"<CLICKHOUSE_USER>","CLICKHOUSE_PASSWORD":"<CLICKHOUSE_PASSWORD>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-server-neon"></a>

### Neon serverless Postgres management

[Neon](https://github.com/neondatabase/mcp-server-neon) — `Servidor MCP` · ★ 649 · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial para gerenciar projetos Neon e bancos Postgres Lakebase; exige token de Authorization.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://mcp.neon.tech/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — Arquivo: `~/.codex/config.toml`

```toml
[mcp_servers.mcp]
url = "https://mcp.neon.tech/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://mcp.neon.tech/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://mcp.neon.tech/mcp",
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
    "mcp": {
      "type": "http",
      "url": "https://mcp.neon.tech/mcp",
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
    "mcp": {
      "type": "remote",
      "url": "https://mcp.neon.tech/mcp",
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
    "mcp": {
      "type": "streamableHttp",
      "url": "https://mcp.neon.tech/mcp",
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
    "mcp": {
      "serverUrl": "https://mcp.neon.tech/mcp",
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
    "mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.neon.tech/mcp",
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
  mcp:
    type: streamable_http
    uri: https://mcp.neon.tech/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.neon.tech/mcp",
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
    "mcp": {
      "type": "streamable-http",
      "url": "https://mcp.neon.tech/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
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
        url: https://mcp.neon.tech/mcp
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="coolify-mcp"></a>

### Coolify infrastructure management

[StuMason/coolify-mcp](https://github.com/StuMason/coolify-mcp) — `Servidor MCP` · ★ 601 · Licença: MIT · Funciona com: Todos os clientes

45 ferramentas para gerenciar a infraestrutura Coolify, diagnósticos e busca na documentação; exige COOLIFY_ACCESS_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio coolify --env COOLIFY_ACCESS_TOKEN='<COOLIFY_ACCESS_TOKEN>' -- npx -y @masonator/coolify-mcp
```

**Codex CLI**

```bash
codex mcp add coolify --env COOLIFY_ACCESS_TOKEN='<COOLIFY_ACCESS_TOKEN>' -- npx -y @masonator/coolify-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e COOLIFY_ACCESS_TOKEN='<COOLIFY_ACCESS_TOKEN>' coolify npx -y @masonator/coolify-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "coolify": {
      "command": "npx",
      "args": [
        "-y",
        "@masonator/coolify-mcp"
      ],
      "env": {
        "COOLIFY_ACCESS_TOKEN": "<COOLIFY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "coolify": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@masonator/coolify-mcp"
      ],
      "env": {
        "COOLIFY_ACCESS_TOKEN": "<COOLIFY_ACCESS_TOKEN>"
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
    "coolify": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@masonator/coolify-mcp"
      ],
      "enabled": true,
      "environment": {
        "COOLIFY_ACCESS_TOKEN": "<COOLIFY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "coolify": {
      "command": "npx",
      "args": [
        "-y",
        "@masonator/coolify-mcp"
      ],
      "env": {
        "COOLIFY_ACCESS_TOKEN": "<COOLIFY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "coolify": {
      "command": "npx",
      "args": [
        "-y",
        "@masonator/coolify-mcp"
      ],
      "env": {
        "COOLIFY_ACCESS_TOKEN": "<COOLIFY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "coolify": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@masonator/coolify-mcp"
      ],
      "env": {
        "COOLIFY_ACCESS_TOKEN": "<COOLIFY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  coolify:
    type: stdio
    cmd: npx
    args: ["-y","@masonator/coolify-mcp"]
    envs:
      COOLIFY_ACCESS_TOKEN: "<COOLIFY_ACCESS_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "coolify": {
      "command": "npx",
      "args": [
        "-y",
        "@masonator/coolify-mcp"
      ],
      "env": {
        "COOLIFY_ACCESS_TOKEN": "<COOLIFY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "coolify": {
      "command": "npx",
      "args": [
        "-y",
        "@masonator/coolify-mcp"
      ],
      "env": {
        "COOLIFY_ACCESS_TOKEN": "<COOLIFY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `coolify.cordis.yml  →  dsh web --patch ./coolify.cordis.yml`

```yaml
- insert:
    - id: mcp-coolify
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: coolify
        transport: stdio
        command: npx
        args: ["-y","@masonator/coolify-mcp"]
        env: {"COOLIFY_ACCESS_TOKEN":"<COOLIFY_ACCESS_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="proxmoxmcp-plus"></a>

### Proxmox VE management

[ProxmoxMCP-Plus](https://github.com/RekklesNA/ProxmoxMCP-Plus) — `Servidor MCP` · ★ 546 · Licença: MIT · Funciona com: Todos os clientes

Gerencia VMs, LXCs, snapshots, backups, storage e operações de cluster no Proxmox VE.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio proxmox-mcp-plus --env PROXMOX_HOST='<PROXMOX_HOST>' --env PROXMOX_USER='<PROXMOX_USER>' --env PROXMOX_TOKEN_NAME='<PROXMOX_TOKEN_NAME>' --env PROXMOX_TOKEN_VALUE='<PROXMOX_TOKEN_VALUE>' -- uvx proxmox-mcp-plus
```

**Codex CLI**

```bash
codex mcp add proxmox-mcp-plus --env PROXMOX_HOST='<PROXMOX_HOST>' --env PROXMOX_USER='<PROXMOX_USER>' --env PROXMOX_TOKEN_NAME='<PROXMOX_TOKEN_NAME>' --env PROXMOX_TOKEN_VALUE='<PROXMOX_TOKEN_VALUE>' -- uvx proxmox-mcp-plus
```

**Gemini CLI**

```bash
gemini mcp add -e PROXMOX_HOST='<PROXMOX_HOST>' -e PROXMOX_USER='<PROXMOX_USER>' -e PROXMOX_TOKEN_NAME='<PROXMOX_TOKEN_NAME>' -e PROXMOX_TOKEN_VALUE='<PROXMOX_TOKEN_VALUE>' proxmox-mcp-plus uvx proxmox-mcp-plus
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "proxmox-mcp-plus": {
      "command": "uvx",
      "args": [
        "proxmox-mcp-plus"
      ],
      "env": {
        "PROXMOX_HOST": "<PROXMOX_HOST>",
        "PROXMOX_USER": "<PROXMOX_USER>",
        "PROXMOX_TOKEN_NAME": "<PROXMOX_TOKEN_NAME>",
        "PROXMOX_TOKEN_VALUE": "<PROXMOX_TOKEN_VALUE>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "proxmox-mcp-plus": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "proxmox-mcp-plus"
      ],
      "env": {
        "PROXMOX_HOST": "<PROXMOX_HOST>",
        "PROXMOX_USER": "<PROXMOX_USER>",
        "PROXMOX_TOKEN_NAME": "<PROXMOX_TOKEN_NAME>",
        "PROXMOX_TOKEN_VALUE": "<PROXMOX_TOKEN_VALUE>"
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
    "proxmox-mcp-plus": {
      "type": "local",
      "command": [
        "uvx",
        "proxmox-mcp-plus"
      ],
      "enabled": true,
      "environment": {
        "PROXMOX_HOST": "<PROXMOX_HOST>",
        "PROXMOX_USER": "<PROXMOX_USER>",
        "PROXMOX_TOKEN_NAME": "<PROXMOX_TOKEN_NAME>",
        "PROXMOX_TOKEN_VALUE": "<PROXMOX_TOKEN_VALUE>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "proxmox-mcp-plus": {
      "command": "uvx",
      "args": [
        "proxmox-mcp-plus"
      ],
      "env": {
        "PROXMOX_HOST": "<PROXMOX_HOST>",
        "PROXMOX_USER": "<PROXMOX_USER>",
        "PROXMOX_TOKEN_NAME": "<PROXMOX_TOKEN_NAME>",
        "PROXMOX_TOKEN_VALUE": "<PROXMOX_TOKEN_VALUE>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "proxmox-mcp-plus": {
      "command": "uvx",
      "args": [
        "proxmox-mcp-plus"
      ],
      "env": {
        "PROXMOX_HOST": "<PROXMOX_HOST>",
        "PROXMOX_USER": "<PROXMOX_USER>",
        "PROXMOX_TOKEN_NAME": "<PROXMOX_TOKEN_NAME>",
        "PROXMOX_TOKEN_VALUE": "<PROXMOX_TOKEN_VALUE>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "proxmox-mcp-plus": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "proxmox-mcp-plus"
      ],
      "env": {
        "PROXMOX_HOST": "<PROXMOX_HOST>",
        "PROXMOX_USER": "<PROXMOX_USER>",
        "PROXMOX_TOKEN_NAME": "<PROXMOX_TOKEN_NAME>",
        "PROXMOX_TOKEN_VALUE": "<PROXMOX_TOKEN_VALUE>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  proxmox-mcp-plus:
    type: stdio
    cmd: uvx
    args: ["proxmox-mcp-plus"]
    envs:
      PROXMOX_HOST: "<PROXMOX_HOST>"
      PROXMOX_USER: "<PROXMOX_USER>"
      PROXMOX_TOKEN_NAME: "<PROXMOX_TOKEN_NAME>"
      PROXMOX_TOKEN_VALUE: "<PROXMOX_TOKEN_VALUE>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "proxmox-mcp-plus": {
      "command": "uvx",
      "args": [
        "proxmox-mcp-plus"
      ],
      "env": {
        "PROXMOX_HOST": "<PROXMOX_HOST>",
        "PROXMOX_USER": "<PROXMOX_USER>",
        "PROXMOX_TOKEN_NAME": "<PROXMOX_TOKEN_NAME>",
        "PROXMOX_TOKEN_VALUE": "<PROXMOX_TOKEN_VALUE>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "proxmox-mcp-plus": {
      "command": "uvx",
      "args": [
        "proxmox-mcp-plus"
      ],
      "env": {
        "PROXMOX_HOST": "<PROXMOX_HOST>",
        "PROXMOX_USER": "<PROXMOX_USER>",
        "PROXMOX_TOKEN_NAME": "<PROXMOX_TOKEN_NAME>",
        "PROXMOX_TOKEN_VALUE": "<PROXMOX_TOKEN_VALUE>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `proxmox-mcp-plus.cordis.yml  →  dsh web --patch ./proxmox-mcp-plus.cordis.yml`

```yaml
- insert:
    - id: mcp-proxmox-mcp-plus
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: proxmox-mcp-plus
        transport: stdio
        command: uvx
        args: ["proxmox-mcp-plus"]
        env: {"PROXMOX_HOST":"<PROXMOX_HOST>","PROXMOX_USER":"<PROXMOX_USER>","PROXMOX_TOKEN_NAME":"<PROXMOX_TOKEN_NAME>","PROXMOX_TOKEN_VALUE":"<PROXMOX_TOKEN_VALUE>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-server-motherduck"></a>

### MotherDuck SQL analytics

[motherduckdb/mcp-server-motherduck](https://github.com/motherduckdb/mcp-server-motherduck) — `Servidor MCP` · ★ 523 · Licença: MIT · Funciona com: Todos os clientes

Analytics em SQL e engenharia de dados para assistentes de IA e IDEs via MotherDuck; exige MOTHERDUCK_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-server-motherduck --env MOTHERDUCK_TOKEN='<MOTHERDUCK_TOKEN>' --env AWS_ACCESS_KEY_ID='<AWS_ACCESS_KEY_ID>' --env AWS_SECRET_ACCESS_KEY='<AWS_SECRET_ACCESS_KEY>' --env AWS_SESSION_TOKEN='<AWS_SESSION_TOKEN>' -- uvx mcp-server-motherduck
```

**Codex CLI**

```bash
codex mcp add mcp-server-motherduck --env MOTHERDUCK_TOKEN='<MOTHERDUCK_TOKEN>' --env AWS_ACCESS_KEY_ID='<AWS_ACCESS_KEY_ID>' --env AWS_SECRET_ACCESS_KEY='<AWS_SECRET_ACCESS_KEY>' --env AWS_SESSION_TOKEN='<AWS_SESSION_TOKEN>' -- uvx mcp-server-motherduck
```

**Gemini CLI**

```bash
gemini mcp add -e MOTHERDUCK_TOKEN='<MOTHERDUCK_TOKEN>' -e AWS_ACCESS_KEY_ID='<AWS_ACCESS_KEY_ID>' -e AWS_SECRET_ACCESS_KEY='<AWS_SECRET_ACCESS_KEY>' -e AWS_SESSION_TOKEN='<AWS_SESSION_TOKEN>' mcp-server-motherduck uvx mcp-server-motherduck
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-motherduck": {
      "command": "uvx",
      "args": [
        "mcp-server-motherduck"
      ],
      "env": {
        "MOTHERDUCK_TOKEN": "<MOTHERDUCK_TOKEN>",
        "AWS_ACCESS_KEY_ID": "<AWS_ACCESS_KEY_ID>",
        "AWS_SECRET_ACCESS_KEY": "<AWS_SECRET_ACCESS_KEY>",
        "AWS_SESSION_TOKEN": "<AWS_SESSION_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server-motherduck": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "mcp-server-motherduck"
      ],
      "env": {
        "MOTHERDUCK_TOKEN": "<MOTHERDUCK_TOKEN>",
        "AWS_ACCESS_KEY_ID": "<AWS_ACCESS_KEY_ID>",
        "AWS_SECRET_ACCESS_KEY": "<AWS_SECRET_ACCESS_KEY>",
        "AWS_SESSION_TOKEN": "<AWS_SESSION_TOKEN>"
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
    "mcp-server-motherduck": {
      "type": "local",
      "command": [
        "uvx",
        "mcp-server-motherduck"
      ],
      "enabled": true,
      "environment": {
        "MOTHERDUCK_TOKEN": "<MOTHERDUCK_TOKEN>",
        "AWS_ACCESS_KEY_ID": "<AWS_ACCESS_KEY_ID>",
        "AWS_SECRET_ACCESS_KEY": "<AWS_SECRET_ACCESS_KEY>",
        "AWS_SESSION_TOKEN": "<AWS_SESSION_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-server-motherduck": {
      "command": "uvx",
      "args": [
        "mcp-server-motherduck"
      ],
      "env": {
        "MOTHERDUCK_TOKEN": "<MOTHERDUCK_TOKEN>",
        "AWS_ACCESS_KEY_ID": "<AWS_ACCESS_KEY_ID>",
        "AWS_SECRET_ACCESS_KEY": "<AWS_SECRET_ACCESS_KEY>",
        "AWS_SESSION_TOKEN": "<AWS_SESSION_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server-motherduck": {
      "command": "uvx",
      "args": [
        "mcp-server-motherduck"
      ],
      "env": {
        "MOTHERDUCK_TOKEN": "<MOTHERDUCK_TOKEN>",
        "AWS_ACCESS_KEY_ID": "<AWS_ACCESS_KEY_ID>",
        "AWS_SECRET_ACCESS_KEY": "<AWS_SECRET_ACCESS_KEY>",
        "AWS_SESSION_TOKEN": "<AWS_SESSION_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-server-motherduck": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "mcp-server-motherduck"
      ],
      "env": {
        "MOTHERDUCK_TOKEN": "<MOTHERDUCK_TOKEN>",
        "AWS_ACCESS_KEY_ID": "<AWS_ACCESS_KEY_ID>",
        "AWS_SECRET_ACCESS_KEY": "<AWS_SECRET_ACCESS_KEY>",
        "AWS_SESSION_TOKEN": "<AWS_SESSION_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server-motherduck:
    type: stdio
    cmd: uvx
    args: ["mcp-server-motherduck"]
    envs:
      MOTHERDUCK_TOKEN: "<MOTHERDUCK_TOKEN>"
      AWS_ACCESS_KEY_ID: "<AWS_ACCESS_KEY_ID>"
      AWS_SECRET_ACCESS_KEY: "<AWS_SECRET_ACCESS_KEY>"
      AWS_SESSION_TOKEN: "<AWS_SESSION_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-motherduck": {
      "command": "uvx",
      "args": [
        "mcp-server-motherduck"
      ],
      "env": {
        "MOTHERDUCK_TOKEN": "<MOTHERDUCK_TOKEN>",
        "AWS_ACCESS_KEY_ID": "<AWS_ACCESS_KEY_ID>",
        "AWS_SECRET_ACCESS_KEY": "<AWS_SECRET_ACCESS_KEY>",
        "AWS_SESSION_TOKEN": "<AWS_SESSION_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server-motherduck": {
      "command": "uvx",
      "args": [
        "mcp-server-motherduck"
      ],
      "env": {
        "MOTHERDUCK_TOKEN": "<MOTHERDUCK_TOKEN>",
        "AWS_ACCESS_KEY_ID": "<AWS_ACCESS_KEY_ID>",
        "AWS_SECRET_ACCESS_KEY": "<AWS_SECRET_ACCESS_KEY>",
        "AWS_SESSION_TOKEN": "<AWS_SESSION_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-server-motherduck.cordis.yml  →  dsh web --patch ./mcp-server-motherduck.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-server-motherduck
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-server-motherduck
        transport: stdio
        command: uvx
        args: ["mcp-server-motherduck"]
        env: {"MOTHERDUCK_TOKEN":"<MOTHERDUCK_TOKEN>","AWS_ACCESS_KEY_ID":"<AWS_ACCESS_KEY_ID>","AWS_SECRET_ACCESS_KEY":"<AWS_SECRET_ACCESS_KEY>","AWS_SESSION_TOKEN":"<AWS_SESSION_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="prometheus-mcp-server"></a>

### Prometheus metrics and PromQL

[Prometheus MCP Server](https://github.com/pab1it0/prometheus-mcp-server) — `Servidor MCP` · ★ 517 · Licença: MIT · Funciona com: Todos os clientes

Dá acesso a métricas do Prometheus e execução de consultas PromQL para assistentes de IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio prometheus-mcp-server --env PROMETHEUS_URL='<PROMETHEUS_URL>' --env PROMETHEUS_PASSWORD='<PROMETHEUS_PASSWORD>' --env PROMETHEUS_TOKEN='<PROMETHEUS_TOKEN>' -- docker run -i --rm -e PROMETHEUS_URL -e PROMETHEUS_PASSWORD -e PROMETHEUS_TOKEN ghcr.io/pab1it0/prometheus-mcp-server:1.6.2
```

**Codex CLI**

```bash
codex mcp add prometheus-mcp-server --env PROMETHEUS_URL='<PROMETHEUS_URL>' --env PROMETHEUS_PASSWORD='<PROMETHEUS_PASSWORD>' --env PROMETHEUS_TOKEN='<PROMETHEUS_TOKEN>' -- docker run -i --rm -e PROMETHEUS_URL -e PROMETHEUS_PASSWORD -e PROMETHEUS_TOKEN ghcr.io/pab1it0/prometheus-mcp-server:1.6.2
```

**Gemini CLI**

```bash
gemini mcp add -e PROMETHEUS_URL='<PROMETHEUS_URL>' -e PROMETHEUS_PASSWORD='<PROMETHEUS_PASSWORD>' -e PROMETHEUS_TOKEN='<PROMETHEUS_TOKEN>' prometheus-mcp-server docker run -i --rm -e PROMETHEUS_URL -e PROMETHEUS_PASSWORD -e PROMETHEUS_TOKEN ghcr.io/pab1it0/prometheus-mcp-server:1.6.2
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "prometheus-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PROMETHEUS_URL",
        "-e",
        "PROMETHEUS_PASSWORD",
        "-e",
        "PROMETHEUS_TOKEN",
        "ghcr.io/pab1it0/prometheus-mcp-server:1.6.2"
      ],
      "env": {
        "PROMETHEUS_URL": "<PROMETHEUS_URL>",
        "PROMETHEUS_PASSWORD": "<PROMETHEUS_PASSWORD>",
        "PROMETHEUS_TOKEN": "<PROMETHEUS_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "prometheus-mcp-server": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PROMETHEUS_URL",
        "-e",
        "PROMETHEUS_PASSWORD",
        "-e",
        "PROMETHEUS_TOKEN",
        "ghcr.io/pab1it0/prometheus-mcp-server:1.6.2"
      ],
      "env": {
        "PROMETHEUS_URL": "<PROMETHEUS_URL>",
        "PROMETHEUS_PASSWORD": "<PROMETHEUS_PASSWORD>",
        "PROMETHEUS_TOKEN": "<PROMETHEUS_TOKEN>"
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
    "prometheus-mcp-server": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "-e",
        "PROMETHEUS_URL",
        "-e",
        "PROMETHEUS_PASSWORD",
        "-e",
        "PROMETHEUS_TOKEN",
        "ghcr.io/pab1it0/prometheus-mcp-server:1.6.2"
      ],
      "enabled": true,
      "environment": {
        "PROMETHEUS_URL": "<PROMETHEUS_URL>",
        "PROMETHEUS_PASSWORD": "<PROMETHEUS_PASSWORD>",
        "PROMETHEUS_TOKEN": "<PROMETHEUS_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "prometheus-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PROMETHEUS_URL",
        "-e",
        "PROMETHEUS_PASSWORD",
        "-e",
        "PROMETHEUS_TOKEN",
        "ghcr.io/pab1it0/prometheus-mcp-server:1.6.2"
      ],
      "env": {
        "PROMETHEUS_URL": "<PROMETHEUS_URL>",
        "PROMETHEUS_PASSWORD": "<PROMETHEUS_PASSWORD>",
        "PROMETHEUS_TOKEN": "<PROMETHEUS_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "prometheus-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PROMETHEUS_URL",
        "-e",
        "PROMETHEUS_PASSWORD",
        "-e",
        "PROMETHEUS_TOKEN",
        "ghcr.io/pab1it0/prometheus-mcp-server:1.6.2"
      ],
      "env": {
        "PROMETHEUS_URL": "<PROMETHEUS_URL>",
        "PROMETHEUS_PASSWORD": "<PROMETHEUS_PASSWORD>",
        "PROMETHEUS_TOKEN": "<PROMETHEUS_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "prometheus-mcp-server": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PROMETHEUS_URL",
        "-e",
        "PROMETHEUS_PASSWORD",
        "-e",
        "PROMETHEUS_TOKEN",
        "ghcr.io/pab1it0/prometheus-mcp-server:1.6.2"
      ],
      "env": {
        "PROMETHEUS_URL": "<PROMETHEUS_URL>",
        "PROMETHEUS_PASSWORD": "<PROMETHEUS_PASSWORD>",
        "PROMETHEUS_TOKEN": "<PROMETHEUS_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  prometheus-mcp-server:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","-e","PROMETHEUS_URL","-e","PROMETHEUS_PASSWORD","-e","PROMETHEUS_TOKEN","ghcr.io/pab1it0/prometheus-mcp-server:1.6.2"]
    envs:
      PROMETHEUS_URL: "<PROMETHEUS_URL>"
      PROMETHEUS_PASSWORD: "<PROMETHEUS_PASSWORD>"
      PROMETHEUS_TOKEN: "<PROMETHEUS_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "prometheus-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PROMETHEUS_URL",
        "-e",
        "PROMETHEUS_PASSWORD",
        "-e",
        "PROMETHEUS_TOKEN",
        "ghcr.io/pab1it0/prometheus-mcp-server:1.6.2"
      ],
      "env": {
        "PROMETHEUS_URL": "<PROMETHEUS_URL>",
        "PROMETHEUS_PASSWORD": "<PROMETHEUS_PASSWORD>",
        "PROMETHEUS_TOKEN": "<PROMETHEUS_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "prometheus-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PROMETHEUS_URL",
        "-e",
        "PROMETHEUS_PASSWORD",
        "-e",
        "PROMETHEUS_TOKEN",
        "ghcr.io/pab1it0/prometheus-mcp-server:1.6.2"
      ],
      "env": {
        "PROMETHEUS_URL": "<PROMETHEUS_URL>",
        "PROMETHEUS_PASSWORD": "<PROMETHEUS_PASSWORD>",
        "PROMETHEUS_TOKEN": "<PROMETHEUS_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `prometheus-mcp-server.cordis.yml  →  dsh web --patch ./prometheus-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-prometheus-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: prometheus-mcp-server
        transport: stdio
        command: docker
        args: ["run","-i","--rm","-e","PROMETHEUS_URL","-e","PROMETHEUS_PASSWORD","-e","PROMETHEUS_TOKEN","ghcr.io/pab1it0/prometheus-mcp-server:1.6.2"]
        env: {"PROMETHEUS_URL":"<PROMETHEUS_URL>","PROMETHEUS_PASSWORD":"<PROMETHEUS_PASSWORD>","PROMETHEUS_TOKEN":"<PROMETHEUS_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="dot-ai-mcp"></a>

### AI-driven Kubernetes deployment

[vfarcic/dot-ai](https://github.com/vfarcic/dot-ai) — `Servidor MCP` · ★ 335 · Licença: MIT · Funciona com: Todos os clientes

Plataforma de desenvolvimento com IA para deployments no Kubernetes e automação inteligente.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio dot-ai -- npx -y @vfarcic/dot-ai
```

**Codex CLI**

```bash
codex mcp add dot-ai -- npx -y @vfarcic/dot-ai
```

**Gemini CLI**

```bash
gemini mcp add dot-ai npx -y @vfarcic/dot-ai
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "dot-ai": {
      "command": "npx",
      "args": [
        "-y",
        "@vfarcic/dot-ai"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "dot-ai": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@vfarcic/dot-ai"
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
    "dot-ai": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@vfarcic/dot-ai"
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
    "dot-ai": {
      "command": "npx",
      "args": [
        "-y",
        "@vfarcic/dot-ai"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "dot-ai": {
      "command": "npx",
      "args": [
        "-y",
        "@vfarcic/dot-ai"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "dot-ai": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@vfarcic/dot-ai"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  dot-ai:
    type: stdio
    cmd: npx
    args: ["-y","@vfarcic/dot-ai"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "dot-ai": {
      "command": "npx",
      "args": [
        "-y",
        "@vfarcic/dot-ai"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "dot-ai": {
      "command": "npx",
      "args": [
        "-y",
        "@vfarcic/dot-ai"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `dot-ai.cordis.yml  →  dsh web --patch ./dot-ai.cordis.yml`

```yaml
- insert:
    - id: mcp-dot-ai
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: dot-ai
        transport: stdio
        command: npx
        args: ["-y","@vfarcic/dot-ai"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="elasticsearch-mcp-server"></a>

### Elasticsearch queries

[cr7258/elasticsearch-mcp-server](https://github.com/cr7258/elasticsearch-mcp-server) — `Servidor MCP` · ★ 307 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Interage com o Elasticsearch para busca e analytics; exige ELASTICSEARCH_API_KEY ou senha.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio elasticsearch-mcp-server --env ELASTICSEARCH_API_KEY='<ELASTICSEARCH_API_KEY>' --env ELASTICSEARCH_PASSWORD='<ELASTICSEARCH_PASSWORD>' -- uvx elasticsearch-mcp-server
```

**Codex CLI**

```bash
codex mcp add elasticsearch-mcp-server --env ELASTICSEARCH_API_KEY='<ELASTICSEARCH_API_KEY>' --env ELASTICSEARCH_PASSWORD='<ELASTICSEARCH_PASSWORD>' -- uvx elasticsearch-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e ELASTICSEARCH_API_KEY='<ELASTICSEARCH_API_KEY>' -e ELASTICSEARCH_PASSWORD='<ELASTICSEARCH_PASSWORD>' elasticsearch-mcp-server uvx elasticsearch-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "elasticsearch-mcp-server": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>"
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
    "elasticsearch-mcp-server": {
      "type": "local",
      "command": [
        "uvx",
        "elasticsearch-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "elasticsearch-mcp-server": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  elasticsearch-mcp-server:
    type: stdio
    cmd: uvx
    args: ["elasticsearch-mcp-server"]
    envs:
      ELASTICSEARCH_API_KEY: "<ELASTICSEARCH_API_KEY>"
      ELASTICSEARCH_PASSWORD: "<ELASTICSEARCH_PASSWORD>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `elasticsearch-mcp-server.cordis.yml  →  dsh web --patch ./elasticsearch-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-elasticsearch-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: elasticsearch-mcp-server
        transport: stdio
        command: uvx
        args: ["elasticsearch-mcp-server"]
        env: {"ELASTICSEARCH_API_KEY":"<ELASTICSEARCH_API_KEY>","ELASTICSEARCH_PASSWORD":"<ELASTICSEARCH_PASSWORD>"}
        cwd: !!js process.cwd()
```

</details>

<a id="snowflake-labs-mcp"></a>

### Snowflake data platform

[OSS Snowflake MCP Server](https://github.com/Snowflake-Labs/mcp) — `Servidor MCP` · ★ 299 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor para o Snowflake, da Snowflake Labs.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp --env SNOWFLAKE_PASSWORD='<SNOWFLAKE_PASSWORD>' --env SNOWFLAKE_PRIVATE_KEY='<SNOWFLAKE_PRIVATE_KEY>' -- uvx snowflake-labs-mcp
```

**Codex CLI**

```bash
codex mcp add mcp --env SNOWFLAKE_PASSWORD='<SNOWFLAKE_PASSWORD>' --env SNOWFLAKE_PRIVATE_KEY='<SNOWFLAKE_PRIVATE_KEY>' -- uvx snowflake-labs-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e SNOWFLAKE_PASSWORD='<SNOWFLAKE_PASSWORD>' -e SNOWFLAKE_PRIVATE_KEY='<SNOWFLAKE_PRIVATE_KEY>' mcp uvx snowflake-labs-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "uvx",
      "args": [
        "snowflake-labs-mcp"
      ],
      "env": {
        "SNOWFLAKE_PASSWORD": "<SNOWFLAKE_PASSWORD>",
        "SNOWFLAKE_PRIVATE_KEY": "<SNOWFLAKE_PRIVATE_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "snowflake-labs-mcp"
      ],
      "env": {
        "SNOWFLAKE_PASSWORD": "<SNOWFLAKE_PASSWORD>",
        "SNOWFLAKE_PRIVATE_KEY": "<SNOWFLAKE_PRIVATE_KEY>"
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
    "mcp": {
      "type": "local",
      "command": [
        "uvx",
        "snowflake-labs-mcp"
      ],
      "enabled": true,
      "environment": {
        "SNOWFLAKE_PASSWORD": "<SNOWFLAKE_PASSWORD>",
        "SNOWFLAKE_PRIVATE_KEY": "<SNOWFLAKE_PRIVATE_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "uvx",
      "args": [
        "snowflake-labs-mcp"
      ],
      "env": {
        "SNOWFLAKE_PASSWORD": "<SNOWFLAKE_PASSWORD>",
        "SNOWFLAKE_PRIVATE_KEY": "<SNOWFLAKE_PRIVATE_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "uvx",
      "args": [
        "snowflake-labs-mcp"
      ],
      "env": {
        "SNOWFLAKE_PASSWORD": "<SNOWFLAKE_PASSWORD>",
        "SNOWFLAKE_PRIVATE_KEY": "<SNOWFLAKE_PRIVATE_KEY>"
      }
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
      "command": "uvx",
      "args": [
        "snowflake-labs-mcp"
      ],
      "env": {
        "SNOWFLAKE_PASSWORD": "<SNOWFLAKE_PASSWORD>",
        "SNOWFLAKE_PRIVATE_KEY": "<SNOWFLAKE_PRIVATE_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: stdio
    cmd: uvx
    args: ["snowflake-labs-mcp"]
    envs:
      SNOWFLAKE_PASSWORD: "<SNOWFLAKE_PASSWORD>"
      SNOWFLAKE_PRIVATE_KEY: "<SNOWFLAKE_PRIVATE_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "uvx",
      "args": [
        "snowflake-labs-mcp"
      ],
      "env": {
        "SNOWFLAKE_PASSWORD": "<SNOWFLAKE_PASSWORD>",
        "SNOWFLAKE_PRIVATE_KEY": "<SNOWFLAKE_PRIVATE_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "uvx",
      "args": [
        "snowflake-labs-mcp"
      ],
      "env": {
        "SNOWFLAKE_PASSWORD": "<SNOWFLAKE_PASSWORD>",
        "SNOWFLAKE_PRIVATE_KEY": "<SNOWFLAKE_PRIVATE_KEY>"
      }
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
        transport: stdio
        command: uvx
        args: ["snowflake-labs-mcp"]
        env: {"SNOWFLAKE_PASSWORD":"<SNOWFLAKE_PASSWORD>","SNOWFLAKE_PRIVATE_KEY":"<SNOWFLAKE_PRIVATE_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-victoriametrics"></a>

### VictoriaMetrics integration

[VictoriaMetrics/mcp-victoriametrics](https://github.com/VictoriaMetrics/mcp-victoriametrics) — `Servidor MCP` · ★ 234 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Integra com a API e a documentação do VictoriaMetrics; exige um bearer token do VictoriaMetrics.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-victoriametrics --env VM_INSTANCE_ENTRYPOINT='<VM_INSTANCE_ENTRYPOINT>' --env VM_INSTANCE_TYPE='<VM_INSTANCE_TYPE>' --env VM_INSTANCE_BEARER_TOKEN='<VM_INSTANCE_BEARER_TOKEN>' --env VMC_API_KEY='<VMC_API_KEY>' -- docker run -i --rm -e VM_INSTANCE_ENTRYPOINT -e VM_INSTANCE_TYPE -e VM_INSTANCE_BEARER_TOKEN -e VMC_API_KEY ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1
```

**Codex CLI**

```bash
codex mcp add mcp-victoriametrics --env VM_INSTANCE_ENTRYPOINT='<VM_INSTANCE_ENTRYPOINT>' --env VM_INSTANCE_TYPE='<VM_INSTANCE_TYPE>' --env VM_INSTANCE_BEARER_TOKEN='<VM_INSTANCE_BEARER_TOKEN>' --env VMC_API_KEY='<VMC_API_KEY>' -- docker run -i --rm -e VM_INSTANCE_ENTRYPOINT -e VM_INSTANCE_TYPE -e VM_INSTANCE_BEARER_TOKEN -e VMC_API_KEY ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1
```

**Gemini CLI**

```bash
gemini mcp add -e VM_INSTANCE_ENTRYPOINT='<VM_INSTANCE_ENTRYPOINT>' -e VM_INSTANCE_TYPE='<VM_INSTANCE_TYPE>' -e VM_INSTANCE_BEARER_TOKEN='<VM_INSTANCE_BEARER_TOKEN>' -e VMC_API_KEY='<VMC_API_KEY>' mcp-victoriametrics docker run -i --rm -e VM_INSTANCE_ENTRYPOINT -e VM_INSTANCE_TYPE -e VM_INSTANCE_BEARER_TOKEN -e VMC_API_KEY ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-victoriametrics": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "VM_INSTANCE_ENTRYPOINT",
        "-e",
        "VM_INSTANCE_TYPE",
        "-e",
        "VM_INSTANCE_BEARER_TOKEN",
        "-e",
        "VMC_API_KEY",
        "ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1"
      ],
      "env": {
        "VM_INSTANCE_ENTRYPOINT": "<VM_INSTANCE_ENTRYPOINT>",
        "VM_INSTANCE_TYPE": "<VM_INSTANCE_TYPE>",
        "VM_INSTANCE_BEARER_TOKEN": "<VM_INSTANCE_BEARER_TOKEN>",
        "VMC_API_KEY": "<VMC_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-victoriametrics": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "VM_INSTANCE_ENTRYPOINT",
        "-e",
        "VM_INSTANCE_TYPE",
        "-e",
        "VM_INSTANCE_BEARER_TOKEN",
        "-e",
        "VMC_API_KEY",
        "ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1"
      ],
      "env": {
        "VM_INSTANCE_ENTRYPOINT": "<VM_INSTANCE_ENTRYPOINT>",
        "VM_INSTANCE_TYPE": "<VM_INSTANCE_TYPE>",
        "VM_INSTANCE_BEARER_TOKEN": "<VM_INSTANCE_BEARER_TOKEN>",
        "VMC_API_KEY": "<VMC_API_KEY>"
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
    "mcp-victoriametrics": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "-e",
        "VM_INSTANCE_ENTRYPOINT",
        "-e",
        "VM_INSTANCE_TYPE",
        "-e",
        "VM_INSTANCE_BEARER_TOKEN",
        "-e",
        "VMC_API_KEY",
        "ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1"
      ],
      "enabled": true,
      "environment": {
        "VM_INSTANCE_ENTRYPOINT": "<VM_INSTANCE_ENTRYPOINT>",
        "VM_INSTANCE_TYPE": "<VM_INSTANCE_TYPE>",
        "VM_INSTANCE_BEARER_TOKEN": "<VM_INSTANCE_BEARER_TOKEN>",
        "VMC_API_KEY": "<VMC_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-victoriametrics": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "VM_INSTANCE_ENTRYPOINT",
        "-e",
        "VM_INSTANCE_TYPE",
        "-e",
        "VM_INSTANCE_BEARER_TOKEN",
        "-e",
        "VMC_API_KEY",
        "ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1"
      ],
      "env": {
        "VM_INSTANCE_ENTRYPOINT": "<VM_INSTANCE_ENTRYPOINT>",
        "VM_INSTANCE_TYPE": "<VM_INSTANCE_TYPE>",
        "VM_INSTANCE_BEARER_TOKEN": "<VM_INSTANCE_BEARER_TOKEN>",
        "VMC_API_KEY": "<VMC_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-victoriametrics": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "VM_INSTANCE_ENTRYPOINT",
        "-e",
        "VM_INSTANCE_TYPE",
        "-e",
        "VM_INSTANCE_BEARER_TOKEN",
        "-e",
        "VMC_API_KEY",
        "ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1"
      ],
      "env": {
        "VM_INSTANCE_ENTRYPOINT": "<VM_INSTANCE_ENTRYPOINT>",
        "VM_INSTANCE_TYPE": "<VM_INSTANCE_TYPE>",
        "VM_INSTANCE_BEARER_TOKEN": "<VM_INSTANCE_BEARER_TOKEN>",
        "VMC_API_KEY": "<VMC_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-victoriametrics": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "VM_INSTANCE_ENTRYPOINT",
        "-e",
        "VM_INSTANCE_TYPE",
        "-e",
        "VM_INSTANCE_BEARER_TOKEN",
        "-e",
        "VMC_API_KEY",
        "ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1"
      ],
      "env": {
        "VM_INSTANCE_ENTRYPOINT": "<VM_INSTANCE_ENTRYPOINT>",
        "VM_INSTANCE_TYPE": "<VM_INSTANCE_TYPE>",
        "VM_INSTANCE_BEARER_TOKEN": "<VM_INSTANCE_BEARER_TOKEN>",
        "VMC_API_KEY": "<VMC_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-victoriametrics:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","-e","VM_INSTANCE_ENTRYPOINT","-e","VM_INSTANCE_TYPE","-e","VM_INSTANCE_BEARER_TOKEN","-e","VMC_API_KEY","ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1"]
    envs:
      VM_INSTANCE_ENTRYPOINT: "<VM_INSTANCE_ENTRYPOINT>"
      VM_INSTANCE_TYPE: "<VM_INSTANCE_TYPE>"
      VM_INSTANCE_BEARER_TOKEN: "<VM_INSTANCE_BEARER_TOKEN>"
      VMC_API_KEY: "<VMC_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-victoriametrics": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "VM_INSTANCE_ENTRYPOINT",
        "-e",
        "VM_INSTANCE_TYPE",
        "-e",
        "VM_INSTANCE_BEARER_TOKEN",
        "-e",
        "VMC_API_KEY",
        "ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1"
      ],
      "env": {
        "VM_INSTANCE_ENTRYPOINT": "<VM_INSTANCE_ENTRYPOINT>",
        "VM_INSTANCE_TYPE": "<VM_INSTANCE_TYPE>",
        "VM_INSTANCE_BEARER_TOKEN": "<VM_INSTANCE_BEARER_TOKEN>",
        "VMC_API_KEY": "<VMC_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-victoriametrics": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "VM_INSTANCE_ENTRYPOINT",
        "-e",
        "VM_INSTANCE_TYPE",
        "-e",
        "VM_INSTANCE_BEARER_TOKEN",
        "-e",
        "VMC_API_KEY",
        "ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1"
      ],
      "env": {
        "VM_INSTANCE_ENTRYPOINT": "<VM_INSTANCE_ENTRYPOINT>",
        "VM_INSTANCE_TYPE": "<VM_INSTANCE_TYPE>",
        "VM_INSTANCE_BEARER_TOKEN": "<VM_INSTANCE_BEARER_TOKEN>",
        "VMC_API_KEY": "<VMC_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-victoriametrics.cordis.yml  →  dsh web --patch ./mcp-victoriametrics.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-victoriametrics
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-victoriametrics
        transport: stdio
        command: docker
        args: ["run","-i","--rm","-e","VM_INSTANCE_ENTRYPOINT","-e","VM_INSTANCE_TYPE","-e","VM_INSTANCE_BEARER_TOKEN","-e","VMC_API_KEY","ghcr.io/victoriametrics/mcp-victoriametrics:1.120.1"]
        env: {"VM_INSTANCE_ENTRYPOINT":"<VM_INSTANCE_ENTRYPOINT>","VM_INSTANCE_TYPE":"<VM_INSTANCE_TYPE>","VM_INSTANCE_BEARER_TOKEN":"<VM_INSTANCE_BEARER_TOKEN>","VMC_API_KEY":"<VMC_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="pgedge-postgres-mcp"></a>

### Enterprise PostgreSQL with hybrid search

[pgEdge/pgedge-postgres-mcp](https://github.com/pgEdge/pgedge-postgres-mcp) — `Servidor MCP` · ★ 228 · Licença: PostgreSQL · Funciona com: Todos os clientes

Servidor PostgreSQL empresarial com consultas em linguagem natural, busca híbrida (pgvector e BM25) e uma interface web.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio postgres-mcp -- docker run -i --rm ghcr.io/pgedge/postgres-mcp:latest
```

**Codex CLI**

```bash
codex mcp add postgres-mcp -- docker run -i --rm ghcr.io/pgedge/postgres-mcp:latest
```

**Gemini CLI**

```bash
gemini mcp add postgres-mcp docker run -i --rm ghcr.io/pgedge/postgres-mcp:latest
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "postgres-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/pgedge/postgres-mcp:latest"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "postgres-mcp": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/pgedge/postgres-mcp:latest"
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
    "postgres-mcp": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/pgedge/postgres-mcp:latest"
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
    "postgres-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/pgedge/postgres-mcp:latest"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "postgres-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/pgedge/postgres-mcp:latest"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "postgres-mcp": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/pgedge/postgres-mcp:latest"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  postgres-mcp:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/pgedge/postgres-mcp:latest"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "postgres-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/pgedge/postgres-mcp:latest"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "postgres-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/pgedge/postgres-mcp:latest"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `postgres-mcp.cordis.yml  →  dsh web --patch ./postgres-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-postgres-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: postgres-mcp
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/pgedge/postgres-mcp:latest"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-azure-mcp-server"></a>

### Azure services access

[Azure MCP Server](https://github.com/microsoft/mcp/tree/main/servers/Azure.Mcp.Server) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial do Azure conectando agentes de IA aos serviços do Azure.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio azure -- npx -y @azure/mcp
```

**Codex CLI**

```bash
codex mcp add azure -- npx -y @azure/mcp
```

**Gemini CLI**

```bash
gemini mcp add azure npx -y @azure/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "azure": {
      "command": "npx",
      "args": [
        "-y",
        "@azure/mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "azure": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@azure/mcp"
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
    "azure": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@azure/mcp"
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
    "azure": {
      "command": "npx",
      "args": [
        "-y",
        "@azure/mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "azure": {
      "command": "npx",
      "args": [
        "-y",
        "@azure/mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "azure": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@azure/mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  azure:
    type: stdio
    cmd: npx
    args: ["-y","@azure/mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "azure": {
      "command": "npx",
      "args": [
        "-y",
        "@azure/mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "azure": {
      "command": "npx",
      "args": [
        "-y",
        "@azure/mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `azure.cordis.yml  →  dsh web --patch ./azure.cordis.yml`

```yaml
- insert:
    - id: mcp-azure
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: azure
        transport: stdio
        command: npx
        args: ["-y","@azure/mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="butterbase-oss-mcp-server"></a>

### Backend platform management

[butterbase-ai/butterbase-oss](https://github.com/butterbase-ai/butterbase-oss/tree/main/services/mcp-server) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Gerencia uma plataforma de backend: schemas, auth, funções, storage, RAG e deploys; exige BUTTERBASE_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp --env BUTTERBASE_API_KEY='<BUTTERBASE_API_KEY>' -- npx -y @butterbase/mcp
```

**Codex CLI**

```bash
codex mcp add mcp --env BUTTERBASE_API_KEY='<BUTTERBASE_API_KEY>' -- npx -y @butterbase/mcp
```

**Gemini CLI**

```bash
gemini mcp add -e BUTTERBASE_API_KEY='<BUTTERBASE_API_KEY>' mcp npx -y @butterbase/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@butterbase/mcp"
      ],
      "env": {
        "BUTTERBASE_API_KEY": "<BUTTERBASE_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@butterbase/mcp"
      ],
      "env": {
        "BUTTERBASE_API_KEY": "<BUTTERBASE_API_KEY>"
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
    "mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@butterbase/mcp"
      ],
      "enabled": true,
      "environment": {
        "BUTTERBASE_API_KEY": "<BUTTERBASE_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@butterbase/mcp"
      ],
      "env": {
        "BUTTERBASE_API_KEY": "<BUTTERBASE_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@butterbase/mcp"
      ],
      "env": {
        "BUTTERBASE_API_KEY": "<BUTTERBASE_API_KEY>"
      }
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
        "@butterbase/mcp"
      ],
      "env": {
        "BUTTERBASE_API_KEY": "<BUTTERBASE_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: stdio
    cmd: npx
    args: ["-y","@butterbase/mcp"]
    envs:
      BUTTERBASE_API_KEY: "<BUTTERBASE_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@butterbase/mcp"
      ],
      "env": {
        "BUTTERBASE_API_KEY": "<BUTTERBASE_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@butterbase/mcp"
      ],
      "env": {
        "BUTTERBASE_API_KEY": "<BUTTERBASE_API_KEY>"
      }
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
        transport: stdio
        command: npx
        args: ["-y","@butterbase/mcp"]
        env: {"BUTTERBASE_API_KEY":"<BUTTERBASE_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="superserve-mcp"></a>

### Firecracker microVM sandboxes

[Superserve](https://github.com/superserve-ai/superserve/tree/main/packages/mcp) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Cria, executa em e gerencia sandboxes microVM Firecracker; exige SUPERSERVE_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp --env SUPERSERVE_API_KEY='<SUPERSERVE_API_KEY>' -- npx -y @superserve/mcp
```

**Codex CLI**

```bash
codex mcp add mcp --env SUPERSERVE_API_KEY='<SUPERSERVE_API_KEY>' -- npx -y @superserve/mcp
```

**Gemini CLI**

```bash
gemini mcp add -e SUPERSERVE_API_KEY='<SUPERSERVE_API_KEY>' mcp npx -y @superserve/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@superserve/mcp"
      ],
      "env": {
        "SUPERSERVE_API_KEY": "<SUPERSERVE_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@superserve/mcp"
      ],
      "env": {
        "SUPERSERVE_API_KEY": "<SUPERSERVE_API_KEY>"
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
    "mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@superserve/mcp"
      ],
      "enabled": true,
      "environment": {
        "SUPERSERVE_API_KEY": "<SUPERSERVE_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@superserve/mcp"
      ],
      "env": {
        "SUPERSERVE_API_KEY": "<SUPERSERVE_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@superserve/mcp"
      ],
      "env": {
        "SUPERSERVE_API_KEY": "<SUPERSERVE_API_KEY>"
      }
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
        "@superserve/mcp"
      ],
      "env": {
        "SUPERSERVE_API_KEY": "<SUPERSERVE_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: stdio
    cmd: npx
    args: ["-y","@superserve/mcp"]
    envs:
      SUPERSERVE_API_KEY: "<SUPERSERVE_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@superserve/mcp"
      ],
      "env": {
        "SUPERSERVE_API_KEY": "<SUPERSERVE_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@superserve/mcp"
      ],
      "env": {
        "SUPERSERVE_API_KEY": "<SUPERSERVE_API_KEY>"
      }
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
        transport: stdio
        command: npx
        args: ["-y","@superserve/mcp"]
        env: {"SUPERSERVE_API_KEY":"<SUPERSERVE_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-neo4j-mcp-neo4j-cloud-aura-api"></a>

### Neo4j Aura instance management

[neo4j-contrib/mcp-neo4j](https://github.com/neo4j-contrib/mcp-neo4j/tree/main/servers/mcp-neo4j-cloud-aura-api) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor para gerenciar uma instância do Neo4j Aura Database; exige NEO4J_AURA_CLIENT_ID e secret.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-neo4j-aura-manager --env NEO4J_AURA_CLIENT_ID='<NEO4J_AURA_CLIENT_ID>' --env NEO4J_AURA_CLIENT_SECRET='<NEO4J_AURA_CLIENT_SECRET>' -- uvx mcp-neo4j-aura-manager
```

**Codex CLI**

```bash
codex mcp add mcp-neo4j-aura-manager --env NEO4J_AURA_CLIENT_ID='<NEO4J_AURA_CLIENT_ID>' --env NEO4J_AURA_CLIENT_SECRET='<NEO4J_AURA_CLIENT_SECRET>' -- uvx mcp-neo4j-aura-manager
```

**Gemini CLI**

```bash
gemini mcp add -e NEO4J_AURA_CLIENT_ID='<NEO4J_AURA_CLIENT_ID>' -e NEO4J_AURA_CLIENT_SECRET='<NEO4J_AURA_CLIENT_SECRET>' mcp-neo4j-aura-manager uvx mcp-neo4j-aura-manager
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-neo4j-aura-manager": {
      "command": "uvx",
      "args": [
        "mcp-neo4j-aura-manager"
      ],
      "env": {
        "NEO4J_AURA_CLIENT_ID": "<NEO4J_AURA_CLIENT_ID>",
        "NEO4J_AURA_CLIENT_SECRET": "<NEO4J_AURA_CLIENT_SECRET>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-neo4j-aura-manager": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "mcp-neo4j-aura-manager"
      ],
      "env": {
        "NEO4J_AURA_CLIENT_ID": "<NEO4J_AURA_CLIENT_ID>",
        "NEO4J_AURA_CLIENT_SECRET": "<NEO4J_AURA_CLIENT_SECRET>"
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
    "mcp-neo4j-aura-manager": {
      "type": "local",
      "command": [
        "uvx",
        "mcp-neo4j-aura-manager"
      ],
      "enabled": true,
      "environment": {
        "NEO4J_AURA_CLIENT_ID": "<NEO4J_AURA_CLIENT_ID>",
        "NEO4J_AURA_CLIENT_SECRET": "<NEO4J_AURA_CLIENT_SECRET>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp-neo4j-aura-manager": {
      "command": "uvx",
      "args": [
        "mcp-neo4j-aura-manager"
      ],
      "env": {
        "NEO4J_AURA_CLIENT_ID": "<NEO4J_AURA_CLIENT_ID>",
        "NEO4J_AURA_CLIENT_SECRET": "<NEO4J_AURA_CLIENT_SECRET>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-neo4j-aura-manager": {
      "command": "uvx",
      "args": [
        "mcp-neo4j-aura-manager"
      ],
      "env": {
        "NEO4J_AURA_CLIENT_ID": "<NEO4J_AURA_CLIENT_ID>",
        "NEO4J_AURA_CLIENT_SECRET": "<NEO4J_AURA_CLIENT_SECRET>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-neo4j-aura-manager": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "mcp-neo4j-aura-manager"
      ],
      "env": {
        "NEO4J_AURA_CLIENT_ID": "<NEO4J_AURA_CLIENT_ID>",
        "NEO4J_AURA_CLIENT_SECRET": "<NEO4J_AURA_CLIENT_SECRET>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-neo4j-aura-manager:
    type: stdio
    cmd: uvx
    args: ["mcp-neo4j-aura-manager"]
    envs:
      NEO4J_AURA_CLIENT_ID: "<NEO4J_AURA_CLIENT_ID>"
      NEO4J_AURA_CLIENT_SECRET: "<NEO4J_AURA_CLIENT_SECRET>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-neo4j-aura-manager": {
      "command": "uvx",
      "args": [
        "mcp-neo4j-aura-manager"
      ],
      "env": {
        "NEO4J_AURA_CLIENT_ID": "<NEO4J_AURA_CLIENT_ID>",
        "NEO4J_AURA_CLIENT_SECRET": "<NEO4J_AURA_CLIENT_SECRET>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-neo4j-aura-manager": {
      "command": "uvx",
      "args": [
        "mcp-neo4j-aura-manager"
      ],
      "env": {
        "NEO4J_AURA_CLIENT_ID": "<NEO4J_AURA_CLIENT_ID>",
        "NEO4J_AURA_CLIENT_SECRET": "<NEO4J_AURA_CLIENT_SECRET>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-neo4j-aura-manager.cordis.yml  →  dsh web --patch ./mcp-neo4j-aura-manager.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-neo4j-aura-manager
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-neo4j-aura-manager
        transport: stdio
        command: uvx
        args: ["mcp-neo4j-aura-manager"]
        env: {"NEO4J_AURA_CLIENT_ID":"<NEO4J_AURA_CLIENT_ID>","NEO4J_AURA_CLIENT_SECRET":"<NEO4J_AURA_CLIENT_SECRET>"}
        cwd: !!js process.cwd()
```

</details>

<a id="netdata-mcp"></a>

### Real-time infrastructure monitoring

[Netdata](https://github.com/netdata/netdata/tree/main/docs/netdata-ai/mcp) — `Servidor MCP` · Licença: GPL-3.0 · Funciona com: Todos os clientes

Monitoramento de infraestrutura em tempo real com métricas, logs, alertas e detecção de anomalias por ML; exige token de Authorization.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp-server https://app.netdata.cloud/api/v1/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — Arquivo: `~/.codex/config.toml`

```toml
[mcp_servers.mcp_server]
url = "https://app.netdata.cloud/api/v1/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp-server https://app.netdata.cloud/api/v1/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "url": "https://app.netdata.cloud/api/v1/mcp",
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
    "mcp-server": {
      "type": "http",
      "url": "https://app.netdata.cloud/api/v1/mcp",
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
    "mcp-server": {
      "type": "remote",
      "url": "https://app.netdata.cloud/api/v1/mcp",
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
    "mcp-server": {
      "type": "streamableHttp",
      "url": "https://app.netdata.cloud/api/v1/mcp",
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
    "mcp-server": {
      "serverUrl": "https://app.netdata.cloud/api/v1/mcp",
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
    "mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://app.netdata.cloud/api/v1/mcp",
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
  mcp-server:
    type: streamable_http
    uri: https://app.netdata.cloud/api/v1/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server": {
      "type": "streamable-http",
      "url": "https://app.netdata.cloud/api/v1/mcp",
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
    "mcp-server": {
      "type": "streamable-http",
      "url": "https://app.netdata.cloud/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-server.cordis.yml  →  dsh web --patch ./mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-server
        transport: streamable-http
        url: https://app.netdata.cloud/api/v1/mcp
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="geolens-mcp"></a>

### Self-hosted spatial data catalog

[GeoLens](https://github.com/geolens-io/geolens/tree/main/mcp) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Acesso somente leitura a um catálogo espacial GeoLens auto-hospedado: datasets, features, mapas e SQL isolado; exige um token do GeoLens.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio geolens --env GEOLENS_INSTANCE='<GEOLENS_INSTANCE>' --env GEOLENS_API_KEY='<GEOLENS_API_KEY>' --env GEOLENS_TOKEN='<GEOLENS_TOKEN>' -- uvx geolens-mcp
```

**Codex CLI**

```bash
codex mcp add geolens --env GEOLENS_INSTANCE='<GEOLENS_INSTANCE>' --env GEOLENS_API_KEY='<GEOLENS_API_KEY>' --env GEOLENS_TOKEN='<GEOLENS_TOKEN>' -- uvx geolens-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e GEOLENS_INSTANCE='<GEOLENS_INSTANCE>' -e GEOLENS_API_KEY='<GEOLENS_API_KEY>' -e GEOLENS_TOKEN='<GEOLENS_TOKEN>' geolens uvx geolens-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "geolens": {
      "command": "uvx",
      "args": [
        "geolens-mcp"
      ],
      "env": {
        "GEOLENS_INSTANCE": "<GEOLENS_INSTANCE>",
        "GEOLENS_API_KEY": "<GEOLENS_API_KEY>",
        "GEOLENS_TOKEN": "<GEOLENS_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "geolens": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "geolens-mcp"
      ],
      "env": {
        "GEOLENS_INSTANCE": "<GEOLENS_INSTANCE>",
        "GEOLENS_API_KEY": "<GEOLENS_API_KEY>",
        "GEOLENS_TOKEN": "<GEOLENS_TOKEN>"
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
    "geolens": {
      "type": "local",
      "command": [
        "uvx",
        "geolens-mcp"
      ],
      "enabled": true,
      "environment": {
        "GEOLENS_INSTANCE": "<GEOLENS_INSTANCE>",
        "GEOLENS_API_KEY": "<GEOLENS_API_KEY>",
        "GEOLENS_TOKEN": "<GEOLENS_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "geolens": {
      "command": "uvx",
      "args": [
        "geolens-mcp"
      ],
      "env": {
        "GEOLENS_INSTANCE": "<GEOLENS_INSTANCE>",
        "GEOLENS_API_KEY": "<GEOLENS_API_KEY>",
        "GEOLENS_TOKEN": "<GEOLENS_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "geolens": {
      "command": "uvx",
      "args": [
        "geolens-mcp"
      ],
      "env": {
        "GEOLENS_INSTANCE": "<GEOLENS_INSTANCE>",
        "GEOLENS_API_KEY": "<GEOLENS_API_KEY>",
        "GEOLENS_TOKEN": "<GEOLENS_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "geolens": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "geolens-mcp"
      ],
      "env": {
        "GEOLENS_INSTANCE": "<GEOLENS_INSTANCE>",
        "GEOLENS_API_KEY": "<GEOLENS_API_KEY>",
        "GEOLENS_TOKEN": "<GEOLENS_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  geolens:
    type: stdio
    cmd: uvx
    args: ["geolens-mcp"]
    envs:
      GEOLENS_INSTANCE: "<GEOLENS_INSTANCE>"
      GEOLENS_API_KEY: "<GEOLENS_API_KEY>"
      GEOLENS_TOKEN: "<GEOLENS_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "geolens": {
      "command": "uvx",
      "args": [
        "geolens-mcp"
      ],
      "env": {
        "GEOLENS_INSTANCE": "<GEOLENS_INSTANCE>",
        "GEOLENS_API_KEY": "<GEOLENS_API_KEY>",
        "GEOLENS_TOKEN": "<GEOLENS_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "geolens": {
      "command": "uvx",
      "args": [
        "geolens-mcp"
      ],
      "env": {
        "GEOLENS_INSTANCE": "<GEOLENS_INSTANCE>",
        "GEOLENS_API_KEY": "<GEOLENS_API_KEY>",
        "GEOLENS_TOKEN": "<GEOLENS_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `geolens.cordis.yml  →  dsh web --patch ./geolens.cordis.yml`

```yaml
- insert:
    - id: mcp-geolens
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: geolens
        transport: stdio
        command: uvx
        args: ["geolens-mcp"]
        env: {"GEOLENS_INSTANCE":"<GEOLENS_INSTANCE>","GEOLENS_API_KEY":"<GEOLENS_API_KEY>","GEOLENS_TOKEN":"<GEOLENS_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-mcp-server-supabase"></a>

### Supabase platform management

[Supabase](https://github.com/supabase/mcp/tree/main/packages/mcp-server-supabase) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor oficial para interagir com a plataforma Supabase; exige SUPABASE_ACCESS_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp --env SUPABASE_ACCESS_TOKEN='<SUPABASE_ACCESS_TOKEN>' -- npx -y @supabase/mcp-server-supabase
```

**Codex CLI**

```bash
codex mcp add mcp --env SUPABASE_ACCESS_TOKEN='<SUPABASE_ACCESS_TOKEN>' -- npx -y @supabase/mcp-server-supabase
```

**Gemini CLI**

```bash
gemini mcp add -e SUPABASE_ACCESS_TOKEN='<SUPABASE_ACCESS_TOKEN>' mcp npx -y @supabase/mcp-server-supabase
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "<SUPABASE_ACCESS_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "<SUPABASE_ACCESS_TOKEN>"
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
    "mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@supabase/mcp-server-supabase"
      ],
      "enabled": true,
      "environment": {
        "SUPABASE_ACCESS_TOKEN": "<SUPABASE_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "<SUPABASE_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "<SUPABASE_ACCESS_TOKEN>"
      }
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
        "@supabase/mcp-server-supabase"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "<SUPABASE_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp:
    type: stdio
    cmd: npx
    args: ["-y","@supabase/mcp-server-supabase"]
    envs:
      SUPABASE_ACCESS_TOKEN: "<SUPABASE_ACCESS_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "<SUPABASE_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "<SUPABASE_ACCESS_TOKEN>"
      }
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
        transport: stdio
        command: npx
        args: ["-y","@supabase/mcp-server-supabase"]
        env: {"SUPABASE_ACCESS_TOKEN":"<SUPABASE_ACCESS_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="cloudbase-ai-toolkit-mcp"></a>

### Tencent CloudBase management

[CloudBase](https://github.com/TencentCloudBase/CloudBase-AI-Toolkit/tree/main/mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial do CloudBase da Tencent para banco de dados, funções, storage e hospedagem.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio cloudbase-mcp -- npx -y @cloudbase/cloudbase-mcp
```

**Codex CLI**

```bash
codex mcp add cloudbase-mcp -- npx -y @cloudbase/cloudbase-mcp
```

**Gemini CLI**

```bash
gemini mcp add cloudbase-mcp npx -y @cloudbase/cloudbase-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "cloudbase-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@cloudbase/cloudbase-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "cloudbase-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@cloudbase/cloudbase-mcp"
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
    "cloudbase-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@cloudbase/cloudbase-mcp"
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
    "cloudbase-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@cloudbase/cloudbase-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "cloudbase-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@cloudbase/cloudbase-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "cloudbase-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@cloudbase/cloudbase-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  cloudbase-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@cloudbase/cloudbase-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "cloudbase-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@cloudbase/cloudbase-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "cloudbase-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@cloudbase/cloudbase-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `cloudbase-mcp.cordis.yml  →  dsh web --patch ./cloudbase-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-cloudbase-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: cloudbase-mcp
        transport: stdio
        command: npx
        args: ["-y","@cloudbase/cloudbase-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="monitor-mcp"></a>

### Valkey observability

[BetterDB-inc/monitor](https://github.com/BetterDB-inc/monitor/tree/main/packages/mcp) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Servidor da BetterDB para observabilidade do Valkey; exige BETTERDB_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio monitor --env BETTERDB_TOKEN='<BETTERDB_TOKEN>' -- npx -y @betterdb/mcp
```

**Codex CLI**

```bash
codex mcp add monitor --env BETTERDB_TOKEN='<BETTERDB_TOKEN>' -- npx -y @betterdb/mcp
```

**Gemini CLI**

```bash
gemini mcp add -e BETTERDB_TOKEN='<BETTERDB_TOKEN>' monitor npx -y @betterdb/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "monitor": {
      "command": "npx",
      "args": [
        "-y",
        "@betterdb/mcp"
      ],
      "env": {
        "BETTERDB_TOKEN": "<BETTERDB_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "monitor": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@betterdb/mcp"
      ],
      "env": {
        "BETTERDB_TOKEN": "<BETTERDB_TOKEN>"
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
    "monitor": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@betterdb/mcp"
      ],
      "enabled": true,
      "environment": {
        "BETTERDB_TOKEN": "<BETTERDB_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "monitor": {
      "command": "npx",
      "args": [
        "-y",
        "@betterdb/mcp"
      ],
      "env": {
        "BETTERDB_TOKEN": "<BETTERDB_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "monitor": {
      "command": "npx",
      "args": [
        "-y",
        "@betterdb/mcp"
      ],
      "env": {
        "BETTERDB_TOKEN": "<BETTERDB_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "monitor": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@betterdb/mcp"
      ],
      "env": {
        "BETTERDB_TOKEN": "<BETTERDB_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  monitor:
    type: stdio
    cmd: npx
    args: ["-y","@betterdb/mcp"]
    envs:
      BETTERDB_TOKEN: "<BETTERDB_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "monitor": {
      "command": "npx",
      "args": [
        "-y",
        "@betterdb/mcp"
      ],
      "env": {
        "BETTERDB_TOKEN": "<BETTERDB_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "monitor": {
      "command": "npx",
      "args": [
        "-y",
        "@betterdb/mcp"
      ],
      "env": {
        "BETTERDB_TOKEN": "<BETTERDB_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `monitor.cordis.yml  →  dsh web --patch ./monitor.cordis.yml`

```yaml
- insert:
    - id: mcp-monitor
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: monitor
        transport: stdio
        command: npx
        args: ["-y","@betterdb/mcp"]
        env: {"BETTERDB_TOKEN":"<BETTERDB_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>
