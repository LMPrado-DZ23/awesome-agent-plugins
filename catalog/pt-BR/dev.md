# Desenvolvimento e runtime

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [FastMCP](#fastmcp) — Framework Python para criar servidores e clientes MCP com decorators, autenticação, proxy e utilitários de tes…
- [MCP Inspector](#mcp-inspector) — Ferramenta visual para testar servidores MCP: conecta via stdio ou HTTP, lista e chama tools, resources e prom…
- [Hot-reload plugins without restart](#dsh-dsh-routing-suite) — Injetor em runtime para pacotes de plugins DSH: injeta, recarrega a quente, descarrega, promove e autocorrige …
- [Sentry MCP](#sentry-mcp) — Consulte issues, eventos, traces e releases do Sentry pelo agente; login OAuth no endpoint remoto.
- [All-in-one DSH distribution bundle](#dsh-oh-dsh) — Distribuição da comunidade que empacota o TUI, o app desktop e a Web UI juntos em um único pacote com instalaç…
- [MCP client runtime status panel](#dsh-dsh-mcp-panel) — Painel de runtime somente leitura para o cliente MCP oficial do DSH: mostra status de conexão, ferramentas reg…
- [Manage skills from a settings panel](#dsh-dsh-skills-manager) — Gerencia skills locais do DeepSeek Harness pela tela de Configurações e exibe as skills de Agente compartilhad…
- [Diagnose and repair DSH installs](#dsh-dsh-win32) — Diagnostica e repara o DeepSeek Harness no Windows nativo em torno da stack oficial de PowerShell e Workspace …
- [Add WSL workspace from web GUI](#dsh-dsh-wsl-workspace) — Adiciona um workspace WSL pela interface web sem precisar reinstalar o DSH ou ferramentas relacionadas dentro …
- [Export session traces to OTel](#dsh-dsh-plugin-loongsuite) — Converte eventos de sessão, loop do agente, LLM e ciclo de vida de ferramentas em traces e métricas OpenTeleme…
- [Continual harness self-evolution](#dsh-dsh-continual-evolve) — Refina prompts, memória, skills e especificações de subagentes a partir das trajetórias de sessão, gerando um …
- [Update DSH core and plugins safely](#dsh-dsh-update-checker) — Verificações de atualização com semver para o DeepSeek Harness e cada plugin, via npm e GitHub, com banner por…
- [Import Claude Code setup into DSH](#dsh-dsh-movein) — Importa uma configuração do Claude Code para o DeepSeek Harness via tela de configurações ou CLI, com preview …
- [Edit global AGENTS.md from settings](#dsh-dsh-global-rules) — Edita o arquivo global de regras ~/.dsh/AGENTS.md diretamente pelo painel de configurações web, salvando ao vi…
- [Auto-log and dedupe failed calls](#dsh-dsh-fail-logger) — Registra automaticamente chamadas de ferramentas que falharam em ferramentas nativas, PTC run_code e invocaçõe…
- [Search large MCP catalogs on demand](#dsh-dsh-mcp-lens) — Gateway MCP de divulgação progressiva que busca em grandes catálogos remotos de ferramentas via mcp_search, de…
- [Inspect and gate builtin features](#dsh-dsh-builtin-toggles) — Inspetor baseado em evidências para os recursos embutidos do DSH Web: relata a proveniência de runtime e confi…
- [Expose WSL web GUI over network](#dsh-dsh-wsl-expose) — Expõe a interface web do DSH via IPv6 ou IPv4 a partir do WSL2 por um proxy reverso (Lucky). O comando /wan up…
- [Find dead code in AI-written repos](#dsh-graphlint-integrations-dsh) — Constrói um grafo de dependências do código e encontra trechos inalcançáveis a partir de qualquer ponto de ent…
- [Virtual sandboxed workspace mounts](#dsh-mirage-dsh) — Substitui os provedores de sistema de arquivos e shell por mounts virtuais (RAM, S3, Redis, Slack, Gmail, Noti…

<a id="fastmcp"></a>

### FastMCP

[FastMCP](https://github.com/PrefectHQ/fastmcp) — `Ferramenta` · ★ 28k · Licença: Apache-2.0 · Funciona com: —

Framework Python para criar servidores e clientes MCP com decorators, autenticação, proxy e utilitários de teste.

<a id="mcp-inspector"></a>

### MCP Inspector

[MCP Inspector](https://github.com/modelcontextprotocol/inspector) — `Ferramenta` · ★ 11k · Licença: ver repo · Funciona com: —

Ferramenta visual para testar servidores MCP: conecta via stdio ou HTTP, lista e chama tools, resources e prompts. Rode com `npx @modelcontextprotocol/inspector`.

<a id="dsh-dsh-routing-suite"></a>

### Hot-reload plugins without restart

[yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) — `Plugin nativo` · ★ 7.2k · Licença: MIT · Funciona com: DeepSeek Harness apenas

Injetor em runtime para pacotes de plugins DSH: injeta, recarrega a quente, descarrega, promove e autocorrige rotas, com um gerenciador de plugins nas configurações, um preset de roteador por modo de raciocínio e um protocolo de estado de tarefa com seis ferramentas.

**Alternativas:**

- [stuarthu/dsh-hot-reload](https://github.com/stuarthu/dsh-hot-reload) (★ 1) — Recarrega um plugin atualizado dentro do processo em execução e reverte automaticamente se a recarga falhar

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:yjh051108/dsh-routing-suite
```

</details>

<a id="sentry-mcp"></a>

### Sentry MCP

[Sentry MCP](https://github.com/getsentry/sentry-mcp) — `Servidor MCP` · ★ 858 · Licença: ver repo · Funciona com: Todos os clientes

Consulte issues, eventos, traces e releases do Sentry pelo agente; login OAuth no endpoint remoto.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp
```

**Codex CLI**

```bash
codex mcp add sentry --url https://mcp.sentry.dev/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http sentry https://mcp.sentry.dev/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sentry": {
      "url": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "sentry": {
      "type": "http",
      "url": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "sentry": {
      "type": "remote",
      "url": "https://mcp.sentry.dev/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "sentry": {
      "type": "streamableHttp",
      "url": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "sentry": {
      "serverUrl": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "sentry": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.sentry.dev/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  sentry:
    type: streamable_http
    uri: https://mcp.sentry.dev/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sentry": {
      "type": "streamable-http",
      "url": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "sentry": {
      "type": "streamable-http",
      "url": "https://mcp.sentry.dev/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `sentry.cordis.yml  →  dsh web --patch ./sentry.cordis.yml`

```yaml
- insert:
    - id: mcp-sentry
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sentry
        transport: streamable-http
        url: https://mcp.sentry.dev/mcp
```

</details>

<a id="dsh-oh-dsh"></a>

### All-in-one DSH distribution bundle

[hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) — `Plugin nativo` · ★ 317 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Distribuição da comunidade que empacota o TUI, o app desktop e a Web UI juntos em um único pacote com instalação em camadas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:hust-open-atom-club/oh-dsh
```

</details>

<a id="dsh-dsh-mcp-panel"></a>

### MCP client runtime status panel

[PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) — `Plugin nativo` · ★ 61 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Painel de runtime somente leitura para o cliente MCP oficial do DSH: mostra status de conexão, ferramentas registradas, erros e contagem de reconexões pelo comando /mcp e por uma aba de Configurações, com exibição sanitizada e sugestões de patch para ativar/desativar.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-mcp-panel
```

</details>

<a id="dsh-dsh-skills-manager"></a>

### Manage skills from a settings panel

[MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) — `Plugin nativo` · ★ 57 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Gerencia skills locais do DeepSeek Harness pela tela de Configurações e exibe as skills de Agente compartilhadas pela equipe como itens somente leitura.

**Alternativas:**

- [minivv/dsh-agent-skills](https://github.com/minivv/dsh-agent-skills) (★ 14) — Também navega e ativa/desativa skills vindas de Codex, OpenCode, Gemini e diretórios personalizados
- [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) (★ 133) — Adiciona CRUD de servidores MCP (stdio/HTTP) com testes de conexão, ocultação de segredos e migração em lote

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MichengAI/dsh-skills-manager
```

</details>

<a id="dsh-dsh-win32"></a>

### Diagnose and repair DSH installs

[sjh9714/dsh-win32](https://github.com/sjh9714/dsh-win32) — `Plugin nativo` · ★ 52 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Diagnostica e repara o DeepSeek Harness no Windows nativo em torno da stack oficial de PowerShell e Workspace Write, cria um atalho na área de trabalho e mantém os presets legados de Git Bash/BusyBox atrás de uma ativação explícita. Sem WSL.

**Alternativas:**

- [moonquake2004/dsh-doctor#plugin](https://github.com/moonquake2004/dsh-doctor/tree/main/plugin) — Diagnóstico offline e somente leitura com 19 verificações de ambiente, perfil e estado de sessão, além de uma API JSON
- [jorinyang/dsh-doctor](https://github.com/jorinyang/dsh-doctor) (★ 4) — Reparo automático graduado com rollback de um clique e um serviço de autocorreção em tempo de execução
- [SaiSenBox/dsh-boot-guard](https://github.com/SaiSenBox/dsh-boot-guard) (★ 3) — Detecta plugins quebrados na inicialização, os ignora temporariamente e restaura apenas as mudanças que ele mesmo gerencia

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:sjh9714/dsh-win32
```

</details>

<a id="dsh-dsh-wsl-workspace"></a>

### Add WSL workspace from web GUI

[6Mikao9/dsh-wsl-workspace](https://github.com/6Mikao9/dsh-wsl-workspace) — `Plugin nativo` · ★ 50 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Adiciona um workspace WSL pela interface web sem precisar reinstalar o DSH ou ferramentas relacionadas dentro do WSL. Comandos bash e operações de leitura/escrita de arquivos rodam na distribuição WSL local da máquina host, enquanto os arquivos do Windows continuam acessíveis.

**Alternativas:**

- [WilliamShi666/dsh-wsl-workspace-picker](https://github.com/WilliamShi666/dsh-wsl-workspace-picker) (★ 0) — Adiciona acesso em um clique às unidades Windows em /mnt, breadcrumbs completos e um campo de caminho sempre visível no seletor

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:6Mikao9/dsh-wsl-workspace
```

</details>

<a id="dsh-dsh-plugin-loongsuite"></a>

### Export session traces to OTel

[loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) — `Plugin nativo` · ★ 23 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Converte eventos de sessão, loop do agente, LLM e ciclo de vida de ferramentas em traces e métricas OpenTelemetry GenAI, exportados via OTLP/HTTP para qualquer backend compatível, com captura de conteúdo desativada por padrão.

**Alternativas:**

- [PerryLink/dsh-observe](https://github.com/PerryLink/dsh-observe) (★ 7) — Também exporta traces e métricas sanitizados e bufferizados diretamente para o Langfuse
- [xxiaoxiong/dsh-prometheus](https://github.com/xxiaoxiong/dsh-prometheus) (★ 1) — Expõe métricas Prometheus com um dashboard Grafana em um endpoint restrito a loopback por padrão

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:loongsuite/dsh-plugin
```

</details>

<a id="dsh-dsh-continual-evolve"></a>

### Continual harness self-evolution

[ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) — `Plugin nativo` · ★ 18 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Refina prompts, memória, skills e especificações de subagentes a partir das trajetórias de sessão, gerando um estado do harness versionado, auditável e seguro para rollback, com portões de revisão e skills recarregadas a quente.

**Alternativas:**

- [jasen215/dsh-continual-harness](https://github.com/jasen215/dsh-continual-harness) (★ 9) — Executa o loop de refinamento periodicamente e o expõe como uma ferramenta harness_refine chamável pelo modelo

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ZK-Andy/dsh-continual-evolve
```

</details>

<a id="dsh-dsh-update-checker"></a>

### Update DSH core and plugins safely

[Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) — `Plugin nativo` · ★ 17 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Verificações de atualização com semver para o DeepSeek Harness e cada plugin, via npm e GitHub, com banner por idioma, atualizações de um clique com backup e checagem de integridade, rollback em falha, e reinício protegido por watchdog.

**Alternativas:**

- [hezhongtang/dsh-update-copilot](https://github.com/hezhongtang/dsh-update-copilot) (★ 1) — Explica o que mudou e o risco de cada atualização antes de aplicar somente as que você confirmar

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Airmetro/dsh-update-checker
```

</details>

<a id="dsh-dsh-movein"></a>

### Import Claude Code setup into DSH

[sjh9714/dsh-movein](https://github.com/sjh9714/dsh-movein) — `Plugin nativo` · ★ 13 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Importa uma configuração do Claude Code para o DeepSeek Harness via tela de configurações ou CLI, com preview dry-run de skills, comandos, agentes, hooks, permissões e config MCP. Codex e OpenCode são fontes secundárias, com aplicação segura contra colisões.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:sjh9714/dsh-movein
```

</details>

<a id="dsh-dsh-global-rules"></a>

### Edit global AGENTS.md from settings

[badai147/dsh-global-rules](https://github.com/badai147/dsh-global-rules) — `Plugin nativo` · ★ 11 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Edita o arquivo global de regras ~/.dsh/AGENTS.md diretamente pelo painel de configurações web, salvando ao vivo para que toda sessão na máquina receba a mudança imediatamente.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:badai147/dsh-global-rules
```

</details>

<a id="dsh-dsh-fail-logger"></a>

### Auto-log and dedupe failed calls

[Areium/dsh-fail-logger](https://github.com/Areium/dsh-fail-logger) — `Plugin nativo` · ★ 9 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Registra automaticamente chamadas de ferramentas que falharam em ferramentas nativas, PTC run_code e invocações inline, deduplicando e contando as causas-raiz em uma skill para que erros repetidos diminuam com o tempo.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Areium/dsh-fail-logger
```

</details>

<a id="dsh-dsh-mcp-lens"></a>

### Search large MCP catalogs on demand

[labmimors/dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens) — `Plugin nativo` · ★ 9 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Gateway MCP de divulgação progressiva que busca em grandes catálogos remotos de ferramentas via mcp_search, depois invoca o schema exato via mcp_call, usando conexões preguiçosas e caches limitados para evitar carregar todas as ferramentas de uma vez.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:labmimors/dsh-mcp-lens
```

</details>

<a id="dsh-dsh-builtin-toggles"></a>

### Inspect and gate builtin features

[Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) — `Plugin nativo` · ★ 7 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Inspetor baseado em evidências para os recursos embutidos do DSH Web: relata a proveniência de runtime e configuração, sinaliza problemas de compatibilidade e desvio, e aplica controles fail-closed para nove recursos de UI revisados.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Starfie1d1272/dsh-builtin-toggles
```

</details>

<a id="dsh-dsh-wsl-expose"></a>

### Expose WSL web GUI over network

[jack-ranbo/dsh-wsl-expose](https://github.com/jack-ranbo/dsh-wsl-expose) — `Plugin nativo` · ★ 0 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Expõe a interface web do DSH via IPv6 ou IPv4 a partir do WSL2 por um proxy reverso (Lucky). O comando /wan up configura relay socat, portproxy do Windows, regra de firewall e barreira de hosts confiáveis, com cartão de Configurações e comandos para domínio e portas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:jack-ranbo/dsh-wsl-expose
```

</details>

<a id="dsh-graphlint-integrations-dsh"></a>

### Find dead code in AI-written repos

[AngelosZou/graphlint#integrations/dsh](https://github.com/AngelosZou/graphlint/tree/main/integrations/dsh) — `Plugin nativo` · Licença: MIT · Funciona com: DeepSeek Harness apenas

Constrói um grafo de dependências do código e encontra trechos inalcançáveis a partir de qualquer ponto de entrada, ajudando a limpar repositórios gerados por IA; expõe as ferramentas graphlint_query, graphlint_build e graphlint_config, além de uma skill graphlint.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:AngelosZou/graphlint#path:/integrations/dsh
```

</details>

<a id="dsh-mirage-dsh"></a>

### Virtual sandboxed workspace mounts

[strukto-ai/mirage#dsh](https://github.com/strukto-ai/mirage/tree/main/typescript/packages/dsh) — `Plugin nativo` · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Substitui os provedores de sistema de arquivos e shell por mounts virtuais (RAM, S3, Redis, Slack, Gmail, Notion, Postgres) com permissões de leitura/escrita/execução por mount, roteia comandos para sandboxes e expõe CLIs como git e gh no terminal.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:strukto-ai/mirage#path:/typescript/packages/dsh
```

</details>
