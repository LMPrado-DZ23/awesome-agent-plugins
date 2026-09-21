# Desenvolvimento e runtime

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Storybook agent skills](#storybook) — O Storybook, workshop padrão da indústria para construir e testar componentes de UI isoladamente, inclui Agent…
- [Front-End Checklist skills](#front-end-checklist) — Centenas de verificações granulares de boas práticas front-end (acessibilidade, performance, SEO, segurança) e…
- [CopilotKit frontend agent stack](#copilotkit) — Framework de frontend para construir interfaces voltadas a agentes e UI generativa em React, Angular, mobile e…
- [HeroUI React component skills](#heroui) — Skills oficiais da biblioteca de componentes React HeroUI (antes NextUI) cobrindo migração, uso em React Nativ…
- [FastMCP](#fastmcp) — Framework Python para criar servidores e clientes MCP com decorators, autenticação, proxy e utilitários de tes…
- [Google product skills](#google-skills) — Marketplace de Agent Skills sobre produtos e tecnologias do Google, para orientar agentes de código em APIs e …
- [Compile code and inspect assembly](#compiler-explorer-mcp) — Compila código com milhares de compiladores, inspeciona o assembly gerado e compartilha links do godbolt.org.
- [Generate API tests from traffic](#keploy-mcp) — Testes de API ponta a ponta: gera e executa testes a partir de OpenAPI, curl, Postman ou tráfego real; exige t…
- [Lightweight Charts skills](#lightweight-charts) — Skills oficiais da biblioteca de gráficos financeiros em canvas HTML5 da TradingView, cobrindo uso principal d…
- [GSAP animation skills](#gsap-skills) — Skills oficiais de IA para o GSAP (GreenSock Animation Platform), ensinando agentes de código padrões corretos…
- [Hugging Face ecosystem skills](#huggingface-skills) — Agent Skills que dão a agentes de código acesso ao ecossistema Hugging Face: modelos, datasets e fluxos do Hub…
- [MCP Inspector](#mcp-inspector) — Ferramenta visual para testar servidores MCP: conecta via stdio ou HTTP, lista e chama tools, resources e prom…
- [Google Stitch design skills](#stitch-skills) — Biblioteca oficial de Agent Skills para o servidor MCP Stitch do Google, cobrindo código-para-design, geração …
- [Hot-reload plugins without restart](#dsh-dsh-routing-suite) — Injetor em runtime para pacotes de plugins DSH: injeta, recarrega a quente, descarrega, promove e autocorrige …
- [Xcode project and simulator control](#xcodebuildmcp) — Fornece ferramentas para gestão de projetos Xcode, gestão de simuladores e utilitários de apps.
- [Anthony Fu's JS ecosystem skills](#antfu-skills) — Coleção curada de skills de um mantenedor open-source conhecido, cobrindo Vite, Vue, Nuxt, Pinia, Vitest, VueU…
- [.NET / C# agent skills](#dotnet-skills) — Repositório oficial de skills para ajudar agentes de código com convenções e ferramentas de desenvolvimento em…
- [SwiftUI agent skill](#swiftui-agent-skill) — Agent skill que ensina Claude Code, Codex e outras ferramentas de IA as boas práticas de SwiftUI para construi…
- [Anti-Slop TypeScript lint rules](#anti-slop) — Skill único que instala regras opinativas do Oxlint para rejeitar padrões de baixa qualidade em TypeScript e J…
- [Builder.io agent skills](#builderio-skills) — Agent Skills oficiais publicadas pela Builder.io para operar sua plataforma visual de CMS headless e construçã…
- [Gemini API & SDK skills](#gemini-skills) — Skills oficiais para a API do Gemini, o SDK e interações com modelos e agentes, mantidas sob a organização Goo…
- [NVIDIA agent skills](#nvidia-skills) — Agent Skills oficiais da NVIDIA para agentes de código, cobrindo IA física, robótica, simulação, CUDA e fluxos…
- [Go agentic skills collection](#cc-skills-golang) — Coleção de skills agênticas focadas em Golang para agentes de código, empacotada como extensão do Gemini CLI.
- [SwiftUI recipes for iOS apps](#shipswift-mcp) — Mais de 40 receitas SwiftUI prontas para produção, para construir apps de iOS full-stack.
- [Microsoft SDK skills & agents](#microsoft-skills) — Skills, servidores MCP, agentes personalizados e arquivos Agents.md que orientam agentes de código nos SDKs e …
- [Awesome design style skills](#awesome-design-skills) — 67 arquivos DESIGN.md/SKILL.md, cada um codificando um estilo visual distinto (brutalismo, claymorphism, cyber…
- [Vue 3 agent skills](#vuejs-ai-skills) — Agent skills oficiais para desenvolvimento em Vue 3, mantidas sob a organização do Vue.js.
- [Software design classics skills](#agent-rules-books) — Skills que destilam clássicos da engenharia de software em orientações para agentes: Clean Code, Clean Archite…
- [Expo agent skills](#expo-skills) — Coleção oficial de agent skills para trabalhar com projetos Expo e o Expo Application Services (EAS).
- [Apify agent skills](#apify-agent-skills) — Coleção oficial de agent skills da Apify para construir e executar actors de coleta de dados e automação web.
- [PortalJS data portal skills](#portaljs) — Framework nativo para IA da Datopian para construir portais de dados: monta um portal completo a partir de um …
- [WordPress official agent skills](#agent-skills) — Skills oficiais do WordPress que dão a assistentes de IA conhecimento em nível de especialista sobre blocos, t…
- [iOS/macOS dev control from a native app](#blitz-mac-mcp) — Dá a agentes de IA controle sobre o desenvolvimento iOS/macOS por meio de um app nativo de macOS com mais de 3…
- [Universal motion design skill](#motion-design-skill) — Skill oficial da LottieFiles que codifica princípios universais de motion design - timing, easing e coreografi…
- [Manage test workflows via Kubernetes](#testkube-mcp) — Gerencia workflows de teste, execuções e artefatos no Kubernetes via assistentes de IA; exige TK_ACCESS_TOKEN.
- [React Native agent skills](#callstackincubator-agent-skills) — Coleção de skills de React Native otimizadas para agentes de IA, mantida pela Callstack.
- [Windows crash dump analysis](#mcp-windbg) — Analisa crash dumps do Windows usando WinDbg/CDB.
- [Paper-to-code skill](#paper2code) — Skill de agente focada em transformar qualquer artigo do arXiv em uma implementação de código funcional.
- [Microsoft Hypervelocity Engineering](#hve-core) — Coleção oficial da Microsoft de skills, prompts e agentes de engenharia cobrindo acessibilidade, revisão de có…
- [Connect AI models to ROS robots](#ros-mcp-server) — Conecta modelos de IA a robôs ROS para desenvolvimento de robótica.
- [Nx monorepo tooling](#nx-console-mcp) — Implementação oficial de servidor para o Nx, trazendo o contexto das ferramentas de monorepo para agentes de I…
- [Sandboxed LLM code execution](#llm-sandbox-mcp) — Executa com segurança código gerado por LLM em contêineres isolados, em 7 linguagens e 3 backends de contêiner…
- [Unreal Engine 5 automation](#unreal-mcp) — 23 ferramentas para automação de desenvolvimento de jogos na Unreal Engine 5.
- [Sentry MCP](#sentry-mcp) — Consulte issues, eventos, traces e releases do Sentry pelo agente; login OAuth no endpoint remoto.
- [Next.js development tools](#next-devtools-mcp) — Servidor de ferramentas de desenvolvimento do Next.js com transporte stdio.
- [Public tunnels for localhost services](#rustunnel-mcp) — Dá a agentes URLs públicas HTTPS/TCP/UDP para qualquer serviço local; é open source e pode ser auto-hospedado.
- [Control TouchDesigner projects](#touchdesigner-mcp) — Controla e opera projetos do TouchDesigner por meio de agentes de IA.
- [Godot 4.x engine control](#godot-mcp) — Controle completo do motor Godot 4.x com 165 ferramentas para desenvolvimento de jogos guiado por IA.
- [Universal CPU profiler](#uniprof-mcp) — Um profiler de CPU universal, pensado tanto para humanos quanto para agentes de IA.
- [AI-powered E2E testing, 10 platforms](#flutter-skill-mcp) — Testes E2E com IA para 10 plataformas, com 253 ferramentas, sem exigir código de teste.
- [RStudio AI assistant connection](#clauder-mcp) — Conecta o RStudio a assistentes de IA para codificação interativa em R e análise de dados.
- [All-in-one DSH distribution bundle](#dsh-oh-dsh) — Distribuição da comunidade que empacota o TUI, o app desktop e a Web UI juntos em um único pacote com instalaç…
- [Full Postman platform access](#postman-mcp-server) — Servidor oficial que dá a agentes de IA acesso confiável a toda a plataforma Postman; exige POSTMAN_API_KEY.
- [Expose GraphQL operations as tools](#apollo-mcp-server) — Servidor oficial da Apollo que expõe operações GraphQL como ferramentas para modelos de IA.
- [Website QA audits](#squirrelscan-mcp) — QA de sites para agentes de código: audita SEO, performance, segurança e acessibilidade.
- [LLM app tracing and evaluation](#opik-mcp) — Interage com prompts, traces, datasets e métricas do Opik para depurar aplicações de LLM; exige OPIK_API_KEY.
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
- [Inspect and drive Flutter apps](#mcp-flutter-mcp-server-dart) — Inspeciona e controla apps e jogos Flutter em modo debug com snapshots semânticos, busca e ferramentas customi…
- [Inspect image buffers in debug sessions](#openimagedebugger-oidmcp) — Dá a agentes de IA visibilidade sobre buffers do OpenImageDebugger durante sessões ao vivo de gdb/lldb.
- [Mobile crash root-cause analysis](#measure-mcp) — Ajuda a encontrar a causa raiz de crashes, erros e traces lentos em apps móveis.
- [Sentry error monitoring](#sentry-mcp-mcp-server) — Monitoramento de erros, rastreamento de issues e depuração para assistentes de IA via Sentry; exige SENTRY_ACC…
- [Tauri v2 app development](#mcp-server-tauri-mcp-server) — Servidor para uso com aplicações desktop Tauri v2.
- [Unity Engine AI control](#unity-mcp-unity-mcp-server) — Servidor e plugin para criar jogos 3D na Unity Engine com IA, cobrindo o Editor Unity e os jogos.
- [Validate oh-my-posh configs](#oh-my-posh-mcp) — Valida configurações do oh-my-posh e trechos de segmentos contra o schema oficial.
- [Virtual sandboxed workspace mounts](#dsh-mirage-dsh) — Substitui os provedores de sistema de arquivos e shell por mounts virtuais (RAM, S3, Redis, Slack, Gmail, Noti…

<a id="storybook"></a>

### Storybook agent skills

[storybookjs/storybook](https://github.com/storybookjs/storybook) — `Agent Skills` · ★ 91k · Licença: MIT · Funciona com: Todos os clientes

O Storybook, workshop padrão da indústria para construir e testar componentes de UI isoladamente, inclui Agent Skills que ensinam agentes de código a usá-lo.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add storybookjs/storybook -a claude-code -g
```

**Codex CLI**

```bash
npx skills add storybookjs/storybook -a codex -g
```

**Gemini CLI**

```bash
npx skills add storybookjs/storybook -a gemini-cli -g
```

**Cursor**

```bash
npx skills add storybookjs/storybook -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add storybookjs/storybook -a github-copilot -g
```

**OpenCode**

```bash
npx skills add storybookjs/storybook -a opencode -g
```

**Cline**

```bash
npx skills add storybookjs/storybook -a cline -g
```

**Windsurf**

```bash
npx skills add storybookjs/storybook -a windsurf -g
```

**Zed**

```bash
npx skills add storybookjs/storybook -a zed -g
```

**Goose**

```bash
npx skills add storybookjs/storybook -a goose -g
```

**Kiro**

```bash
npx skills add storybookjs/storybook -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add storybookjs/storybook -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add storybookjs/storybook -a universal
```

</details>

<a id="front-end-checklist"></a>

### Front-End Checklist skills

[thedaviddias/Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist) — `Agent Skills` · ★ 74k · Licença: ver repo · Funciona com: Todos os clientes

Centenas de verificações granulares de boas práticas front-end (acessibilidade, performance, SEO, segurança) empacotadas como skills individuais para humanos e agentes de IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add thedaviddias/Front-End-Checklist -a claude-code -g
```

**Codex CLI**

```bash
npx skills add thedaviddias/Front-End-Checklist -a codex -g
```

**Gemini CLI**

```bash
npx skills add thedaviddias/Front-End-Checklist -a gemini-cli -g
```

**Cursor**

```bash
npx skills add thedaviddias/Front-End-Checklist -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add thedaviddias/Front-End-Checklist -a github-copilot -g
```

**OpenCode**

```bash
npx skills add thedaviddias/Front-End-Checklist -a opencode -g
```

**Cline**

```bash
npx skills add thedaviddias/Front-End-Checklist -a cline -g
```

**Windsurf**

```bash
npx skills add thedaviddias/Front-End-Checklist -a windsurf -g
```

**Zed**

```bash
npx skills add thedaviddias/Front-End-Checklist -a zed -g
```

**Goose**

```bash
npx skills add thedaviddias/Front-End-Checklist -a goose -g
```

**Kiro**

```bash
npx skills add thedaviddias/Front-End-Checklist -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add thedaviddias/Front-End-Checklist -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add thedaviddias/Front-End-Checklist -a universal
```

</details>

<a id="copilotkit"></a>

### CopilotKit frontend agent stack

[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) — `Agent Skills` · ★ 37k · Licença: MIT · Funciona com: Todos os clientes

Framework de frontend para construir interfaces voltadas a agentes e UI generativa em React, Angular, mobile e Slack, criador do protocolo AG-UI; inclui agent skills.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add CopilotKit/CopilotKit -a claude-code -g
```

**Codex CLI**

```bash
npx skills add CopilotKit/CopilotKit -a codex -g
```

**Gemini CLI**

```bash
npx skills add CopilotKit/CopilotKit -a gemini-cli -g
```

**Cursor**

```bash
npx skills add CopilotKit/CopilotKit -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add CopilotKit/CopilotKit -a github-copilot -g
```

**OpenCode**

```bash
npx skills add CopilotKit/CopilotKit -a opencode -g
```

**Cline**

```bash
npx skills add CopilotKit/CopilotKit -a cline -g
```

**Windsurf**

```bash
npx skills add CopilotKit/CopilotKit -a windsurf -g
```

**Zed**

```bash
npx skills add CopilotKit/CopilotKit -a zed -g
```

**Goose**

```bash
npx skills add CopilotKit/CopilotKit -a goose -g
```

**Kiro**

```bash
npx skills add CopilotKit/CopilotKit -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add CopilotKit/CopilotKit -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add CopilotKit/CopilotKit -a universal
```

</details>

<a id="heroui"></a>

### HeroUI React component skills

[heroui-inc/heroui](https://github.com/heroui-inc/heroui) — `Agent Skills` · ★ 31k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Skills oficiais da biblioteca de componentes React HeroUI (antes NextUI) cobrindo migração, uso em React Native e integração geral com React.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add heroui-inc/heroui -a claude-code -g
```

**Codex CLI**

```bash
npx skills add heroui-inc/heroui -a codex -g
```

**Gemini CLI**

```bash
npx skills add heroui-inc/heroui -a gemini-cli -g
```

**Cursor**

```bash
npx skills add heroui-inc/heroui -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add heroui-inc/heroui -a github-copilot -g
```

**OpenCode**

```bash
npx skills add heroui-inc/heroui -a opencode -g
```

**Cline**

```bash
npx skills add heroui-inc/heroui -a cline -g
```

**Windsurf**

```bash
npx skills add heroui-inc/heroui -a windsurf -g
```

**Zed**

```bash
npx skills add heroui-inc/heroui -a zed -g
```

**Goose**

```bash
npx skills add heroui-inc/heroui -a goose -g
```

**Kiro**

```bash
npx skills add heroui-inc/heroui -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add heroui-inc/heroui -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add heroui-inc/heroui -a universal
```

</details>

<a id="fastmcp"></a>

### FastMCP

[FastMCP](https://github.com/PrefectHQ/fastmcp) — `Ferramenta` · ★ 28k · Licença: Apache-2.0 · Funciona com: —

Framework Python para criar servidores e clientes MCP com decorators, autenticação, proxy e utilitários de teste.

<a id="google-skills"></a>

### Google product skills

[google/skills](https://github.com/google/skills) — `Agent Skills` · ★ 20k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Marketplace de Agent Skills sobre produtos e tecnologias do Google, para orientar agentes de código em APIs e fluxos específicos do Google.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add google/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add google/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add google/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add google/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add google/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add google/skills -a opencode -g
```

**Cline**

```bash
npx skills add google/skills -a cline -g
```

**Windsurf**

```bash
npx skills add google/skills -a windsurf -g
```

**Zed**

```bash
npx skills add google/skills -a zed -g
```

**Goose**

```bash
npx skills add google/skills -a goose -g
```

**Kiro**

```bash
npx skills add google/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add google/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add google/skills -a universal
```

</details>

<a id="compiler-explorer-mcp"></a>

### Compile code and inspect assembly

[Compiler Explorer](https://github.com/compiler-explorer/compiler-explorer) — `Servidor MCP` · ★ 19k · Licença: BSD-2-Clause · Funciona com: Todos os clientes

Compila código com milhares de compiladores, inspeciona o assembly gerado e compartilha links do godbolt.org.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http compiler-explorer https://godbolt.org/mcp
```

**Codex CLI**

```bash
codex mcp add compiler-explorer --url https://godbolt.org/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http compiler-explorer https://godbolt.org/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "compiler-explorer": {
      "url": "https://godbolt.org/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "compiler-explorer": {
      "type": "http",
      "url": "https://godbolt.org/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "compiler-explorer": {
      "type": "remote",
      "url": "https://godbolt.org/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "compiler-explorer": {
      "type": "streamableHttp",
      "url": "https://godbolt.org/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "compiler-explorer": {
      "serverUrl": "https://godbolt.org/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "compiler-explorer": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://godbolt.org/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  compiler-explorer:
    type: streamable_http
    uri: https://godbolt.org/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "compiler-explorer": {
      "type": "streamable-http",
      "url": "https://godbolt.org/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "compiler-explorer": {
      "type": "streamable-http",
      "url": "https://godbolt.org/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `compiler-explorer.cordis.yml  →  dsh web --patch ./compiler-explorer.cordis.yml`

```yaml
- insert:
    - id: mcp-compiler-explorer
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: compiler-explorer
        transport: streamable-http
        url: https://godbolt.org/mcp
```

</details>

<a id="keploy-mcp"></a>

### Generate API tests from traffic

[Keploy](https://github.com/keploy/keploy) — `Servidor MCP` · ★ 18k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Testes de API ponta a ponta: gera e executa testes a partir de OpenAPI, curl, Postman ou tráfego real; exige token de Authorization.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mcp https://api.keploy.io/client/v1/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — Arquivo: `~/.codex/config.toml`

```toml
[mcp_servers.mcp]
url = "https://api.keploy.io/client/v1/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http mcp https://api.keploy.io/client/v1/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "url": "https://api.keploy.io/client/v1/mcp",
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
      "url": "https://api.keploy.io/client/v1/mcp",
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
      "url": "https://api.keploy.io/client/v1/mcp",
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
      "url": "https://api.keploy.io/client/v1/mcp",
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
      "serverUrl": "https://api.keploy.io/client/v1/mcp",
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
        "https://api.keploy.io/client/v1/mcp",
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
    uri: https://api.keploy.io/client/v1/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp": {
      "type": "streamable-http",
      "url": "https://api.keploy.io/client/v1/mcp",
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
      "url": "https://api.keploy.io/client/v1/mcp",
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
        url: https://api.keploy.io/client/v1/mcp
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="lightweight-charts"></a>

### Lightweight Charts skills

[tradingview/lightweight-charts](https://github.com/tradingview/lightweight-charts) — `Agent Skills` · ★ 17k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Skills oficiais da biblioteca de gráficos financeiros em canvas HTML5 da TradingView, cobrindo uso principal de gráficos e criação de plugins de gráfico customizados.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add tradingview/lightweight-charts -a claude-code -g
```

**Codex CLI**

```bash
npx skills add tradingview/lightweight-charts -a codex -g
```

**Gemini CLI**

```bash
npx skills add tradingview/lightweight-charts -a gemini-cli -g
```

**Cursor**

```bash
npx skills add tradingview/lightweight-charts -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add tradingview/lightweight-charts -a github-copilot -g
```

**OpenCode**

```bash
npx skills add tradingview/lightweight-charts -a opencode -g
```

**Cline**

```bash
npx skills add tradingview/lightweight-charts -a cline -g
```

**Windsurf**

```bash
npx skills add tradingview/lightweight-charts -a windsurf -g
```

**Zed**

```bash
npx skills add tradingview/lightweight-charts -a zed -g
```

**Goose**

```bash
npx skills add tradingview/lightweight-charts -a goose -g
```

**Kiro**

```bash
npx skills add tradingview/lightweight-charts -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add tradingview/lightweight-charts -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add tradingview/lightweight-charts -a universal
```

</details>

<a id="gsap-skills"></a>

### GSAP animation skills

[greensock/gsap-skills](https://github.com/greensock/gsap-skills) — `Agent Skills` · ★ 16k · Licença: MIT · Funciona com: Todos os clientes

Skills oficiais de IA para o GSAP (GreenSock Animation Platform), ensinando agentes de código padrões corretos de animação, uso de plugins e boas práticas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add greensock/gsap-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add greensock/gsap-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add greensock/gsap-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add greensock/gsap-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add greensock/gsap-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add greensock/gsap-skills -a opencode -g
```

**Cline**

```bash
npx skills add greensock/gsap-skills -a cline -g
```

**Windsurf**

```bash
npx skills add greensock/gsap-skills -a windsurf -g
```

**Zed**

```bash
npx skills add greensock/gsap-skills -a zed -g
```

**Goose**

```bash
npx skills add greensock/gsap-skills -a goose -g
```

**Kiro**

```bash
npx skills add greensock/gsap-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add greensock/gsap-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add greensock/gsap-skills -a universal
```

</details>

<a id="huggingface-skills"></a>

### Hugging Face ecosystem skills

[huggingface/skills](https://github.com/huggingface/skills) — `Agent Skills` · ★ 11k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Agent Skills que dão a agentes de código acesso ao ecossistema Hugging Face: modelos, datasets e fluxos do Hub.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add huggingface/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add huggingface/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add huggingface/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add huggingface/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add huggingface/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add huggingface/skills -a opencode -g
```

**Cline**

```bash
npx skills add huggingface/skills -a cline -g
```

**Windsurf**

```bash
npx skills add huggingface/skills -a windsurf -g
```

**Zed**

```bash
npx skills add huggingface/skills -a zed -g
```

**Goose**

```bash
npx skills add huggingface/skills -a goose -g
```

**Kiro**

```bash
npx skills add huggingface/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add huggingface/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add huggingface/skills -a universal
```

</details>

<a id="mcp-inspector"></a>

### MCP Inspector

[MCP Inspector](https://github.com/modelcontextprotocol/inspector) — `Ferramenta` · ★ 11k · Licença: ver repo · Funciona com: —

Ferramenta visual para testar servidores MCP: conecta via stdio ou HTTP, lista e chama tools, resources e prompts. Rode com `npx @modelcontextprotocol/inspector`.

<a id="stitch-skills"></a>

### Google Stitch design skills

[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) — `Agent Skills` · ★ 8.3k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Biblioteca oficial de Agent Skills para o servidor MCP Stitch do Google, cobrindo código-para-design, geração de design, gestão de design systems e exportação de componentes React/shadcn.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add google-labs-code/stitch-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add google-labs-code/stitch-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add google-labs-code/stitch-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add google-labs-code/stitch-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add google-labs-code/stitch-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add google-labs-code/stitch-skills -a opencode -g
```

**Cline**

```bash
npx skills add google-labs-code/stitch-skills -a cline -g
```

**Windsurf**

```bash
npx skills add google-labs-code/stitch-skills -a windsurf -g
```

**Zed**

```bash
npx skills add google-labs-code/stitch-skills -a zed -g
```

**Goose**

```bash
npx skills add google-labs-code/stitch-skills -a goose -g
```

**Kiro**

```bash
npx skills add google-labs-code/stitch-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add google-labs-code/stitch-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add google-labs-code/stitch-skills -a universal
```

</details>

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

<a id="xcodebuildmcp"></a>

### Xcode project and simulator control

[cameroncooke/XcodeBuildMCP](https://github.com/cameroncooke/XcodeBuildMCP) — `Servidor MCP` · ★ 6.4k · Licença: MIT · Funciona com: Todos os clientes

Fornece ferramentas para gestão de projetos Xcode, gestão de simuladores e utilitários de apps.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio xcodebuildmcp -- npx -y xcodebuildmcp
```

**Codex CLI**

```bash
codex mcp add xcodebuildmcp -- npx -y xcodebuildmcp
```

**Gemini CLI**

```bash
gemini mcp add xcodebuildmcp npx -y xcodebuildmcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "xcodebuildmcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
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
    "xcodebuildmcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "xcodebuildmcp"
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
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "xcodebuildmcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  xcodebuildmcp:
    type: stdio
    cmd: npx
    args: ["-y","xcodebuildmcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "xcodebuildmcp": {
      "command": "npx",
      "args": [
        "-y",
        "xcodebuildmcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `xcodebuildmcp.cordis.yml  →  dsh web --patch ./xcodebuildmcp.cordis.yml`

```yaml
- insert:
    - id: mcp-xcodebuildmcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: xcodebuildmcp
        transport: stdio
        command: npx
        args: ["-y","xcodebuildmcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="antfu-skills"></a>

### Anthony Fu's JS ecosystem skills

[antfu/skills](https://github.com/antfu/skills) — `Agent Skills` · ★ 5.9k · Licença: MIT · Funciona com: Todos os clientes

Coleção curada de skills de um mantenedor open-source conhecido, cobrindo Vite, Vue, Nuxt, Pinia, Vitest, VueUse, UnoCSS, pnpm e outras ferramentas JS modernas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add antfu/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add antfu/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add antfu/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add antfu/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add antfu/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add antfu/skills -a opencode -g
```

**Cline**

```bash
npx skills add antfu/skills -a cline -g
```

**Windsurf**

```bash
npx skills add antfu/skills -a windsurf -g
```

**Zed**

```bash
npx skills add antfu/skills -a zed -g
```

**Goose**

```bash
npx skills add antfu/skills -a goose -g
```

**Kiro**

```bash
npx skills add antfu/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add antfu/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add antfu/skills -a universal
```

</details>

<a id="dotnet-skills"></a>

### .NET / C# agent skills

[dotnet/skills](https://github.com/dotnet/skills) — `Agent Skills` · ★ 5.5k · Licença: MIT · Funciona com: Todos os clientes

Repositório oficial de skills para ajudar agentes de código com convenções e ferramentas de desenvolvimento em .NET e C#.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add dotnet/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add dotnet/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add dotnet/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add dotnet/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add dotnet/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add dotnet/skills -a opencode -g
```

**Cline**

```bash
npx skills add dotnet/skills -a cline -g
```

**Windsurf**

```bash
npx skills add dotnet/skills -a windsurf -g
```

**Zed**

```bash
npx skills add dotnet/skills -a zed -g
```

**Goose**

```bash
npx skills add dotnet/skills -a goose -g
```

**Kiro**

```bash
npx skills add dotnet/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add dotnet/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add dotnet/skills -a universal
```

</details>

<a id="swiftui-agent-skill"></a>

### SwiftUI agent skill

[twostraws/SwiftUI-Agent-Skill](https://github.com/twostraws/SwiftUI-Agent-Skill) — `Agent Skills` · ★ 4.8k · Licença: MIT · Funciona com: Todos os clientes

Agent skill que ensina Claude Code, Codex e outras ferramentas de IA as boas práticas de SwiftUI para construir interfaces iOS/macOS.

**Alternativas:**

- [AvdLee/SwiftUI-Agent-Skill](https://github.com/AvdLee/SwiftUI-Agent-Skill) (★ 3.6k) — Mesma skill de boas práticas de SwiftUI, mantida de forma independente por outro autor.
- [AvdLee/Swift-Concurrency-Agent-Skill](https://github.com/AvdLee/Swift-Concurrency-Agent-Skill) (★ 1.7k) — Skill complementar focada em Swift Concurrency: padrões seguros de concorrência, performance e orientação para migração ao Swift 6.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a claude-code -g
```

**Codex CLI**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a codex -g
```

**Gemini CLI**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a gemini-cli -g
```

**Cursor**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a github-copilot -g
```

**OpenCode**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a opencode -g
```

**Cline**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a cline -g
```

**Windsurf**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a windsurf -g
```

**Zed**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a zed -g
```

**Goose**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a goose -g
```

**Kiro**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add twostraws/SwiftUI-Agent-Skill -a universal
```

</details>

<a id="anti-slop"></a>

### Anti-Slop TypeScript lint rules

[dmmulroy/anti-slop](https://github.com/dmmulroy/anti-slop) — `Agent Skills` · ★ 4.7k · Licença: MIT · Funciona com: Todos os clientes

Skill único que instala regras opinativas do Oxlint para rejeitar padrões de baixa qualidade em TypeScript e JavaScript, comuns em código gerado por IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add dmmulroy/anti-slop -a claude-code -g
```

**Codex CLI**

```bash
npx skills add dmmulroy/anti-slop -a codex -g
```

**Gemini CLI**

```bash
npx skills add dmmulroy/anti-slop -a gemini-cli -g
```

**Cursor**

```bash
npx skills add dmmulroy/anti-slop -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add dmmulroy/anti-slop -a github-copilot -g
```

**OpenCode**

```bash
npx skills add dmmulroy/anti-slop -a opencode -g
```

**Cline**

```bash
npx skills add dmmulroy/anti-slop -a cline -g
```

**Windsurf**

```bash
npx skills add dmmulroy/anti-slop -a windsurf -g
```

**Zed**

```bash
npx skills add dmmulroy/anti-slop -a zed -g
```

**Goose**

```bash
npx skills add dmmulroy/anti-slop -a goose -g
```

**Kiro**

```bash
npx skills add dmmulroy/anti-slop -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add dmmulroy/anti-slop -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add dmmulroy/anti-slop -a universal
```

</details>

<a id="builderio-skills"></a>

### Builder.io agent skills

[BuilderIO/skills](https://github.com/BuilderIO/skills) — `Agent Skills` · ★ 4.3k · Licença: MIT · Funciona com: Todos os clientes

Agent Skills oficiais publicadas pela Builder.io para operar sua plataforma visual de CMS headless e construção de sites a partir de um agente de código.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add BuilderIO/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add BuilderIO/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add BuilderIO/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add BuilderIO/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add BuilderIO/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add BuilderIO/skills -a opencode -g
```

**Cline**

```bash
npx skills add BuilderIO/skills -a cline -g
```

**Windsurf**

```bash
npx skills add BuilderIO/skills -a windsurf -g
```

**Zed**

```bash
npx skills add BuilderIO/skills -a zed -g
```

**Goose**

```bash
npx skills add BuilderIO/skills -a goose -g
```

**Kiro**

```bash
npx skills add BuilderIO/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add BuilderIO/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add BuilderIO/skills -a universal
```

</details>

<a id="gemini-skills"></a>

### Gemini API & SDK skills

[google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills) — `Agent Skills` · ★ 4.2k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Skills oficiais para a API do Gemini, o SDK e interações com modelos e agentes, mantidas sob a organização Google Gemini.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add google-gemini/gemini-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add google-gemini/gemini-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add google-gemini/gemini-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add google-gemini/gemini-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add google-gemini/gemini-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add google-gemini/gemini-skills -a opencode -g
```

**Cline**

```bash
npx skills add google-gemini/gemini-skills -a cline -g
```

**Windsurf**

```bash
npx skills add google-gemini/gemini-skills -a windsurf -g
```

**Zed**

```bash
npx skills add google-gemini/gemini-skills -a zed -g
```

**Goose**

```bash
npx skills add google-gemini/gemini-skills -a goose -g
```

**Kiro**

```bash
npx skills add google-gemini/gemini-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add google-gemini/gemini-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add google-gemini/gemini-skills -a universal
```

</details>

<a id="nvidia-skills"></a>

### NVIDIA agent skills

[NVIDIA/skills](https://github.com/NVIDIA/skills) — `Agent Skills` · ★ 3.4k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Agent Skills oficiais da NVIDIA para agentes de código, cobrindo IA física, robótica, simulação, CUDA e fluxos de RAG de ponta a ponta.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add NVIDIA/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add NVIDIA/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add NVIDIA/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add NVIDIA/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add NVIDIA/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add NVIDIA/skills -a opencode -g
```

**Cline**

```bash
npx skills add NVIDIA/skills -a cline -g
```

**Windsurf**

```bash
npx skills add NVIDIA/skills -a windsurf -g
```

**Zed**

```bash
npx skills add NVIDIA/skills -a zed -g
```

**Goose**

```bash
npx skills add NVIDIA/skills -a goose -g
```

**Kiro**

```bash
npx skills add NVIDIA/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add NVIDIA/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add NVIDIA/skills -a universal
```

</details>

<a id="cc-skills-golang"></a>

### Go agentic skills collection

[samber/cc-skills-golang](https://github.com/samber/cc-skills-golang) — `Plugin nativo` · ★ 3.3k · Licença: MIT · Funciona com: Gemini CLI apenas

Coleção de skills agênticas focadas em Golang para agentes de código, empacotada como extensão do Gemini CLI.

<details><summary>Instalar</summary>

**Gemini CLI**

```bash
gemini extensions install https://github.com/samber/cc-skills-golang
```

</details>

<a id="shipswift-mcp"></a>

### SwiftUI recipes for iOS apps

[ShipSwift](https://github.com/signerlabs/ShipSwift) — `Servidor MCP` · ★ 3.2k · Licença: MIT · Funciona com: Todos os clientes

Mais de 40 receitas SwiftUI prontas para produção, para construir apps de iOS full-stack.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http shipswift https://api.shipswift.app/mcp
```

**Codex CLI**

```bash
codex mcp add shipswift --url https://api.shipswift.app/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http shipswift https://api.shipswift.app/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "shipswift": {
      "url": "https://api.shipswift.app/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "shipswift": {
      "type": "http",
      "url": "https://api.shipswift.app/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "shipswift": {
      "type": "remote",
      "url": "https://api.shipswift.app/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "shipswift": {
      "type": "streamableHttp",
      "url": "https://api.shipswift.app/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "shipswift": {
      "serverUrl": "https://api.shipswift.app/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "shipswift": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.shipswift.app/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  shipswift:
    type: streamable_http
    uri: https://api.shipswift.app/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "shipswift": {
      "type": "streamable-http",
      "url": "https://api.shipswift.app/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "shipswift": {
      "type": "streamable-http",
      "url": "https://api.shipswift.app/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `shipswift.cordis.yml  →  dsh web --patch ./shipswift.cordis.yml`

```yaml
- insert:
    - id: mcp-shipswift
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: shipswift
        transport: streamable-http
        url: https://api.shipswift.app/mcp
```

</details>

<a id="microsoft-skills"></a>

### Microsoft SDK skills & agents

[microsoft/skills](https://github.com/microsoft/skills) — `Agent Skills` · ★ 3.0k · Licença: MIT · Funciona com: Todos os clientes

Skills, servidores MCP, agentes personalizados e arquivos Agents.md que orientam agentes de código nos SDKs e plataformas da Microsoft.

**Alternativas:**

- [microsoft/azure-skills](https://github.com/microsoft/azure-skills) (★ 1.5k) — Mesma ideia focada no Azure: skills e configurações de servidor MCP para cenários específicos do Azure.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add microsoft/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add microsoft/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add microsoft/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add microsoft/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add microsoft/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add microsoft/skills -a opencode -g
```

**Cline**

```bash
npx skills add microsoft/skills -a cline -g
```

**Windsurf**

```bash
npx skills add microsoft/skills -a windsurf -g
```

**Zed**

```bash
npx skills add microsoft/skills -a zed -g
```

**Goose**

```bash
npx skills add microsoft/skills -a goose -g
```

**Kiro**

```bash
npx skills add microsoft/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add microsoft/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add microsoft/skills -a universal
```

</details>

<a id="awesome-design-skills"></a>

### Awesome design style skills

[bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills) — `Agent Skills` · ★ 2.9k · Licença: MIT · Funciona com: Todos os clientes

67 arquivos DESIGN.md/SKILL.md, cada um codificando um estilo visual distinto (brutalismo, claymorphism, cyberpunk, corporativo e mais), para ferramentas agentic de geração de UI.

**Alternativas:**

- [MengTo/Skills](https://github.com/MengTo/Skills) (★ 6.2k) — Conjunto mais amplo de skills para designers/builders, incluindo assets 3D e gráficos procedurais.
- [Nutlope/hallmark](https://github.com/Nutlope/hallmark) (★ 29k) — Skill única e opinativa voltada especificamente a rejeitar o visual genérico de 'AI slop'.
- [JimLiu/baoyu-design](https://github.com/JimLiu/baoyu-design) (★ 4.1k) — Executa um fluxo local semelhante ao Claude Design para gerar mockups, decks e wireframes refinados.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add bergside/awesome-design-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add bergside/awesome-design-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add bergside/awesome-design-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add bergside/awesome-design-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add bergside/awesome-design-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add bergside/awesome-design-skills -a opencode -g
```

**Cline**

```bash
npx skills add bergside/awesome-design-skills -a cline -g
```

**Windsurf**

```bash
npx skills add bergside/awesome-design-skills -a windsurf -g
```

**Zed**

```bash
npx skills add bergside/awesome-design-skills -a zed -g
```

**Goose**

```bash
npx skills add bergside/awesome-design-skills -a goose -g
```

**Kiro**

```bash
npx skills add bergside/awesome-design-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add bergside/awesome-design-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add bergside/awesome-design-skills -a universal
```

</details>

<a id="vuejs-ai-skills"></a>

### Vue 3 agent skills

[vuejs-ai/skills](https://github.com/vuejs-ai/skills) — `Agent Skills` · ★ 2.9k · Licença: MIT · Funciona com: Todos os clientes

Agent skills oficiais para desenvolvimento em Vue 3, mantidas sob a organização do Vue.js.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add vuejs-ai/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add vuejs-ai/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add vuejs-ai/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add vuejs-ai/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add vuejs-ai/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add vuejs-ai/skills -a opencode -g
```

**Cline**

```bash
npx skills add vuejs-ai/skills -a cline -g
```

**Windsurf**

```bash
npx skills add vuejs-ai/skills -a windsurf -g
```

**Zed**

```bash
npx skills add vuejs-ai/skills -a zed -g
```

**Goose**

```bash
npx skills add vuejs-ai/skills -a goose -g
```

**Kiro**

```bash
npx skills add vuejs-ai/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add vuejs-ai/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add vuejs-ai/skills -a universal
```

</details>

<a id="agent-rules-books"></a>

### Software design classics skills

[ciembor/agent-rules-books](https://github.com/ciembor/agent-rules-books) — `Agent Skills` · ★ 2.8k · Licença: MIT · Funciona com: Todos os clientes

Skills que destilam clássicos da engenharia de software em orientações para agentes: Clean Code, Clean Architecture, Refactoring, Domain-Driven Design e Designing Data-Intensive Applications.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add ciembor/agent-rules-books -a claude-code -g
```

**Codex CLI**

```bash
npx skills add ciembor/agent-rules-books -a codex -g
```

**Gemini CLI**

```bash
npx skills add ciembor/agent-rules-books -a gemini-cli -g
```

**Cursor**

```bash
npx skills add ciembor/agent-rules-books -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add ciembor/agent-rules-books -a github-copilot -g
```

**OpenCode**

```bash
npx skills add ciembor/agent-rules-books -a opencode -g
```

**Cline**

```bash
npx skills add ciembor/agent-rules-books -a cline -g
```

**Windsurf**

```bash
npx skills add ciembor/agent-rules-books -a windsurf -g
```

**Zed**

```bash
npx skills add ciembor/agent-rules-books -a zed -g
```

**Goose**

```bash
npx skills add ciembor/agent-rules-books -a goose -g
```

**Kiro**

```bash
npx skills add ciembor/agent-rules-books -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add ciembor/agent-rules-books -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add ciembor/agent-rules-books -a universal
```

</details>

<a id="expo-skills"></a>

### Expo agent skills

[expo/skills](https://github.com/expo/skills) — `Agent Skills` · ★ 2.6k · Licença: MIT · Funciona com: Todos os clientes

Coleção oficial de agent skills para trabalhar com projetos Expo e o Expo Application Services (EAS).

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add expo/skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add expo/skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add expo/skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add expo/skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add expo/skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add expo/skills -a opencode -g
```

**Cline**

```bash
npx skills add expo/skills -a cline -g
```

**Windsurf**

```bash
npx skills add expo/skills -a windsurf -g
```

**Zed**

```bash
npx skills add expo/skills -a zed -g
```

**Goose**

```bash
npx skills add expo/skills -a goose -g
```

**Kiro**

```bash
npx skills add expo/skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add expo/skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add expo/skills -a universal
```

</details>

<a id="apify-agent-skills"></a>

### Apify agent skills

[apify/agent-skills](https://github.com/apify/agent-skills) — `Agent Skills` · ★ 2.4k · Licença: ver repo · Funciona com: Todos os clientes

Coleção oficial de agent skills da Apify para construir e executar actors de coleta de dados e automação web.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add apify/agent-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add apify/agent-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add apify/agent-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add apify/agent-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add apify/agent-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add apify/agent-skills -a opencode -g
```

**Cline**

```bash
npx skills add apify/agent-skills -a cline -g
```

**Windsurf**

```bash
npx skills add apify/agent-skills -a windsurf -g
```

**Zed**

```bash
npx skills add apify/agent-skills -a zed -g
```

**Goose**

```bash
npx skills add apify/agent-skills -a goose -g
```

**Kiro**

```bash
npx skills add apify/agent-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add apify/agent-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add apify/agent-skills -a universal
```

</details>

<a id="portaljs"></a>

### PortalJS data portal skills

[datopian/portaljs](https://github.com/datopian/portaljs) — `Agent Skills` · ★ 2.4k · Licença: MIT · Funciona com: Todos os clientes

Framework nativo para IA da Datopian para construir portais de dados: monta um portal completo a partir de um briefing e carrega datasets em minutos, com agent skills para os backends CKAN, GitHub ou Frictionless.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add datopian/portaljs -a claude-code -g
```

**Codex CLI**

```bash
npx skills add datopian/portaljs -a codex -g
```

**Gemini CLI**

```bash
npx skills add datopian/portaljs -a gemini-cli -g
```

**Cursor**

```bash
npx skills add datopian/portaljs -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add datopian/portaljs -a github-copilot -g
```

**OpenCode**

```bash
npx skills add datopian/portaljs -a opencode -g
```

**Cline**

```bash
npx skills add datopian/portaljs -a cline -g
```

**Windsurf**

```bash
npx skills add datopian/portaljs -a windsurf -g
```

**Zed**

```bash
npx skills add datopian/portaljs -a zed -g
```

**Goose**

```bash
npx skills add datopian/portaljs -a goose -g
```

**Kiro**

```bash
npx skills add datopian/portaljs -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add datopian/portaljs -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add datopian/portaljs -a universal
```

</details>

<a id="agent-skills"></a>

### WordPress official agent skills

[WordPress/agent-skills](https://github.com/WordPress/agent-skills) — `Agent Skills` · ★ 2.2k · Licença: ver repo · Funciona com: Todos os clientes

Skills oficiais do WordPress que dão a assistentes de IA conhecimento em nível de especialista sobre blocos, temas, plugins, a Abilities API e boas práticas de performance/segurança do WordPress.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add WordPress/agent-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add WordPress/agent-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add WordPress/agent-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add WordPress/agent-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add WordPress/agent-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add WordPress/agent-skills -a opencode -g
```

**Cline**

```bash
npx skills add WordPress/agent-skills -a cline -g
```

**Windsurf**

```bash
npx skills add WordPress/agent-skills -a windsurf -g
```

**Zed**

```bash
npx skills add WordPress/agent-skills -a zed -g
```

**Goose**

```bash
npx skills add WordPress/agent-skills -a goose -g
```

**Kiro**

```bash
npx skills add WordPress/agent-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add WordPress/agent-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add WordPress/agent-skills -a universal
```

</details>

<a id="blitz-mac-mcp"></a>

### iOS/macOS dev control from a native app

[blitzdotdev/blitz-mac](https://github.com/blitzdotdev/blitz-mac) — `Servidor MCP` · ★ 1.7k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Dá a agentes de IA controle sobre o desenvolvimento iOS/macOS por meio de um app nativo de macOS com mais de 30 ferramentas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio blitz -- npx -y @blitzdev/blitz-mcp
```

**Codex CLI**

```bash
codex mcp add blitz -- npx -y @blitzdev/blitz-mcp
```

**Gemini CLI**

```bash
gemini mcp add blitz npx -y @blitzdev/blitz-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "blitz": {
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "blitz": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
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
    "blitz": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@blitzdev/blitz-mcp"
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
    "blitz": {
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "blitz": {
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "blitz": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  blitz:
    type: stdio
    cmd: npx
    args: ["-y","@blitzdev/blitz-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "blitz": {
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "blitz": {
      "command": "npx",
      "args": [
        "-y",
        "@blitzdev/blitz-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `blitz.cordis.yml  →  dsh web --patch ./blitz.cordis.yml`

```yaml
- insert:
    - id: mcp-blitz
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: blitz
        transport: stdio
        command: npx
        args: ["-y","@blitzdev/blitz-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="motion-design-skill"></a>

### Universal motion design skill

[LottieFiles/motion-design-skill](https://github.com/LottieFiles/motion-design-skill) — `Agent Skills` · ★ 1.7k · Licença: MIT · Funciona com: Todos os clientes

Skill oficial da LottieFiles que codifica princípios universais de motion design - timing, easing e coreografia adaptados dos princípios de animação da Disney - para animações de UI.

**Alternativas:**

- [Jakubantalik/transitions.dev](https://github.com/Jakubantalik/transitions.dev) (★ 4.3k) — Coleção focada de transições prontas de página e componente para aplicações web.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add LottieFiles/motion-design-skill -a claude-code -g
```

**Codex CLI**

```bash
npx skills add LottieFiles/motion-design-skill -a codex -g
```

**Gemini CLI**

```bash
npx skills add LottieFiles/motion-design-skill -a gemini-cli -g
```

**Cursor**

```bash
npx skills add LottieFiles/motion-design-skill -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add LottieFiles/motion-design-skill -a github-copilot -g
```

**OpenCode**

```bash
npx skills add LottieFiles/motion-design-skill -a opencode -g
```

**Cline**

```bash
npx skills add LottieFiles/motion-design-skill -a cline -g
```

**Windsurf**

```bash
npx skills add LottieFiles/motion-design-skill -a windsurf -g
```

**Zed**

```bash
npx skills add LottieFiles/motion-design-skill -a zed -g
```

**Goose**

```bash
npx skills add LottieFiles/motion-design-skill -a goose -g
```

**Kiro**

```bash
npx skills add LottieFiles/motion-design-skill -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add LottieFiles/motion-design-skill -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add LottieFiles/motion-design-skill -a universal
```

</details>

<a id="testkube-mcp"></a>

### Manage test workflows via Kubernetes

[kubeshop/testkube](https://github.com/kubeshop/testkube) — `Servidor MCP` · ★ 1.7k · Licença: ver repo · Funciona com: Todos os clientes

Gerencia workflows de teste, execuções e artefatos no Kubernetes via assistentes de IA; exige TK_ACCESS_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio testkube-mcp --env TK_ACCESS_TOKEN='<TK_ACCESS_TOKEN>' --env TK_ORG_ID='<TK_ORG_ID>' --env TK_ENV_ID='<TK_ENV_ID>' -- docker run -i --rm -e TK_ACCESS_TOKEN -e TK_ORG_ID -e TK_ENV_ID docker.io/kubeshop/mcp-server:2.9.1
```

**Codex CLI**

```bash
codex mcp add testkube-mcp --env TK_ACCESS_TOKEN='<TK_ACCESS_TOKEN>' --env TK_ORG_ID='<TK_ORG_ID>' --env TK_ENV_ID='<TK_ENV_ID>' -- docker run -i --rm -e TK_ACCESS_TOKEN -e TK_ORG_ID -e TK_ENV_ID docker.io/kubeshop/mcp-server:2.9.1
```

**Gemini CLI**

```bash
gemini mcp add -e TK_ACCESS_TOKEN='<TK_ACCESS_TOKEN>' -e TK_ORG_ID='<TK_ORG_ID>' -e TK_ENV_ID='<TK_ENV_ID>' testkube-mcp docker run -i --rm -e TK_ACCESS_TOKEN -e TK_ORG_ID -e TK_ENV_ID docker.io/kubeshop/mcp-server:2.9.1
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "testkube-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "testkube-mcp": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
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
    "testkube-mcp": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "enabled": true,
      "environment": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "testkube-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "testkube-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "testkube-mcp": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  testkube-mcp:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","-e","TK_ACCESS_TOKEN","-e","TK_ORG_ID","-e","TK_ENV_ID","docker.io/kubeshop/mcp-server:2.9.1"]
    envs:
      TK_ACCESS_TOKEN: "<TK_ACCESS_TOKEN>"
      TK_ORG_ID: "<TK_ORG_ID>"
      TK_ENV_ID: "<TK_ENV_ID>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "testkube-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "testkube-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "TK_ACCESS_TOKEN",
        "-e",
        "TK_ORG_ID",
        "-e",
        "TK_ENV_ID",
        "docker.io/kubeshop/mcp-server:2.9.1"
      ],
      "env": {
        "TK_ACCESS_TOKEN": "<TK_ACCESS_TOKEN>",
        "TK_ORG_ID": "<TK_ORG_ID>",
        "TK_ENV_ID": "<TK_ENV_ID>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `testkube-mcp.cordis.yml  →  dsh web --patch ./testkube-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-testkube-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: testkube-mcp
        transport: stdio
        command: docker
        args: ["run","-i","--rm","-e","TK_ACCESS_TOKEN","-e","TK_ORG_ID","-e","TK_ENV_ID","docker.io/kubeshop/mcp-server:2.9.1"]
        env: {"TK_ACCESS_TOKEN":"<TK_ACCESS_TOKEN>","TK_ORG_ID":"<TK_ORG_ID>","TK_ENV_ID":"<TK_ENV_ID>"}
        cwd: !!js process.cwd()
```

</details>

<a id="callstackincubator-agent-skills"></a>

### React Native agent skills

[callstackincubator/agent-skills](https://github.com/callstackincubator/agent-skills) — `Agent Skills` · ★ 1.7k · Licença: MIT · Funciona com: Todos os clientes

Coleção de skills de React Native otimizadas para agentes de IA, mantida pela Callstack.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add callstackincubator/agent-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add callstackincubator/agent-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add callstackincubator/agent-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add callstackincubator/agent-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add callstackincubator/agent-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add callstackincubator/agent-skills -a opencode -g
```

**Cline**

```bash
npx skills add callstackincubator/agent-skills -a cline -g
```

**Windsurf**

```bash
npx skills add callstackincubator/agent-skills -a windsurf -g
```

**Zed**

```bash
npx skills add callstackincubator/agent-skills -a zed -g
```

**Goose**

```bash
npx skills add callstackincubator/agent-skills -a goose -g
```

**Kiro**

```bash
npx skills add callstackincubator/agent-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add callstackincubator/agent-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add callstackincubator/agent-skills -a universal
```

</details>

<a id="mcp-windbg"></a>

### Windows crash dump analysis

[MCP Server for WinDbg Crash Analysis](https://github.com/svnscha/mcp-windbg) — `Servidor MCP` · ★ 1.6k · Licença: MIT · Funciona com: Todos os clientes

Analisa crash dumps do Windows usando WinDbg/CDB.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-windbg -- uvx mcp-windbg
```

**Codex CLI**

```bash
codex mcp add mcp-windbg -- uvx mcp-windbg
```

**Gemini CLI**

```bash
gemini mcp add mcp-windbg uvx mcp-windbg
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-windbg": {
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-windbg": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "mcp-windbg"
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
    "mcp-windbg": {
      "type": "local",
      "command": [
        "uvx",
        "mcp-windbg"
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
    "mcp-windbg": {
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-windbg": {
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-windbg": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-windbg:
    type: stdio
    cmd: uvx
    args: ["mcp-windbg"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-windbg": {
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-windbg": {
      "command": "uvx",
      "args": [
        "mcp-windbg"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-windbg.cordis.yml  →  dsh web --patch ./mcp-windbg.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-windbg
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-windbg
        transport: stdio
        command: uvx
        args: ["mcp-windbg"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="paper2code"></a>

### Paper-to-code skill

[PrathamLearnsToCode/paper2code](https://github.com/PrathamLearnsToCode/paper2code) — `Agent Skills` · ★ 1.5k · Licença: MIT · Funciona com: Todos os clientes

Skill de agente focada em transformar qualquer artigo do arXiv em uma implementação de código funcional.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add PrathamLearnsToCode/paper2code -a claude-code -g
```

**Codex CLI**

```bash
npx skills add PrathamLearnsToCode/paper2code -a codex -g
```

**Gemini CLI**

```bash
npx skills add PrathamLearnsToCode/paper2code -a gemini-cli -g
```

**Cursor**

```bash
npx skills add PrathamLearnsToCode/paper2code -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add PrathamLearnsToCode/paper2code -a github-copilot -g
```

**OpenCode**

```bash
npx skills add PrathamLearnsToCode/paper2code -a opencode -g
```

**Cline**

```bash
npx skills add PrathamLearnsToCode/paper2code -a cline -g
```

**Windsurf**

```bash
npx skills add PrathamLearnsToCode/paper2code -a windsurf -g
```

**Zed**

```bash
npx skills add PrathamLearnsToCode/paper2code -a zed -g
```

**Goose**

```bash
npx skills add PrathamLearnsToCode/paper2code -a goose -g
```

**Kiro**

```bash
npx skills add PrathamLearnsToCode/paper2code -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add PrathamLearnsToCode/paper2code -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add PrathamLearnsToCode/paper2code -a universal
```

</details>

<a id="hve-core"></a>

### Microsoft Hypervelocity Engineering

[microsoft/hve-core](https://github.com/microsoft/hve-core) — `Agent Skills` · ★ 1.5k · Licença: MIT · Funciona com: Todos os clientes

Coleção oficial da Microsoft de skills, prompts e agentes de engenharia cobrindo acessibilidade, revisão de código, fundamentos de ciência de dados, DataOps e design de avaliação.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add microsoft/hve-core -a claude-code -g
```

**Codex CLI**

```bash
npx skills add microsoft/hve-core -a codex -g
```

**Gemini CLI**

```bash
npx skills add microsoft/hve-core -a gemini-cli -g
```

**Cursor**

```bash
npx skills add microsoft/hve-core -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add microsoft/hve-core -a github-copilot -g
```

**OpenCode**

```bash
npx skills add microsoft/hve-core -a opencode -g
```

**Cline**

```bash
npx skills add microsoft/hve-core -a cline -g
```

**Windsurf**

```bash
npx skills add microsoft/hve-core -a windsurf -g
```

**Zed**

```bash
npx skills add microsoft/hve-core -a zed -g
```

**Goose**

```bash
npx skills add microsoft/hve-core -a goose -g
```

**Kiro**

```bash
npx skills add microsoft/hve-core -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add microsoft/hve-core -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add microsoft/hve-core -a universal
```

</details>

<a id="ros-mcp-server"></a>

### Connect AI models to ROS robots

[robotmcp/ros-mcp-server](https://github.com/robotmcp/ros-mcp-server) — `Servidor MCP` · ★ 1.5k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Conecta modelos de IA a robôs ROS para desenvolvimento de robótica.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio ros-mcp-server -- uvx ros-mcp
```

**Codex CLI**

```bash
codex mcp add ros-mcp-server -- uvx ros-mcp
```

**Gemini CLI**

```bash
gemini mcp add ros-mcp-server uvx ros-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "ros-mcp-server": {
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "ros-mcp-server": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "ros-mcp"
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
    "ros-mcp-server": {
      "type": "local",
      "command": [
        "uvx",
        "ros-mcp"
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
    "ros-mcp-server": {
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "ros-mcp-server": {
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "ros-mcp-server": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  ros-mcp-server:
    type: stdio
    cmd: uvx
    args: ["ros-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "ros-mcp-server": {
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "ros-mcp-server": {
      "command": "uvx",
      "args": [
        "ros-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `ros-mcp-server.cordis.yml  →  dsh web --patch ./ros-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-ros-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: ros-mcp-server
        transport: stdio
        command: uvx
        args: ["ros-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="nx-console-mcp"></a>

### Nx monorepo tooling

[nrwl/nx-console](https://github.com/nrwl/nx-console) — `Servidor MCP` · ★ 1.4k · Licença: MIT · Funciona com: Todos os clientes

Implementação oficial de servidor para o Nx, trazendo o contexto das ferramentas de monorepo para agentes de IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio nx-console -- npx -y nx-mcp
```

**Codex CLI**

```bash
codex mcp add nx-console -- npx -y nx-mcp
```

**Gemini CLI**

```bash
gemini mcp add nx-console npx -y nx-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "nx-console": {
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "nx-console": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
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
    "nx-console": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "nx-mcp"
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
    "nx-console": {
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "nx-console": {
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "nx-console": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  nx-console:
    type: stdio
    cmd: npx
    args: ["-y","nx-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "nx-console": {
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "nx-console": {
      "command": "npx",
      "args": [
        "-y",
        "nx-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `nx-console.cordis.yml  →  dsh web --patch ./nx-console.cordis.yml`

```yaml
- insert:
    - id: mcp-nx-console
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: nx-console
        transport: stdio
        command: npx
        args: ["-y","nx-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="llm-sandbox-mcp"></a>

### Sandboxed LLM code execution

[LLM Sandbox](https://github.com/vndee/llm-sandbox) — `Servidor MCP` · ★ 1.1k · Licença: MIT · Funciona com: Todos os clientes

Executa com segurança código gerado por LLM em contêineres isolados, em 7 linguagens e 3 backends de contêiner.

**Alternativas:**

- [taybenlor/runno](https://github.com/taybenlor/runno) (★ 773) — Executa código em um sandbox WebAssembly no navegador, o Runno.
- [formulahendry/mcp-server-code-runner](https://github.com/formulahendry/mcp-server-code-runner) (★ 246) — Executa código em várias linguagens de programação via a extensão Code Runner.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio llm-sandbox -- uvx llm-sandbox
```

**Codex CLI**

```bash
codex mcp add llm-sandbox -- uvx llm-sandbox
```

**Gemini CLI**

```bash
gemini mcp add llm-sandbox uvx llm-sandbox
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "llm-sandbox": {
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "llm-sandbox": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "llm-sandbox"
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
    "llm-sandbox": {
      "type": "local",
      "command": [
        "uvx",
        "llm-sandbox"
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
    "llm-sandbox": {
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "llm-sandbox": {
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "llm-sandbox": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  llm-sandbox:
    type: stdio
    cmd: uvx
    args: ["llm-sandbox"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "llm-sandbox": {
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "llm-sandbox": {
      "command": "uvx",
      "args": [
        "llm-sandbox"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `llm-sandbox.cordis.yml  →  dsh web --patch ./llm-sandbox.cordis.yml`

```yaml
- insert:
    - id: mcp-llm-sandbox
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: llm-sandbox
        transport: stdio
        command: uvx
        args: ["llm-sandbox"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="unreal-mcp"></a>

### Unreal Engine 5 automation

[ChiR24/Unreal_mcp](https://github.com/ChiR24/Unreal_mcp) — `Servidor MCP` · ★ 880 · Licença: MIT · Funciona com: Todos os clientes

23 ferramentas para automação de desenvolvimento de jogos na Unreal Engine 5.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio unreal-engine-mcp -- npx -y unreal-engine-mcp-server
```

**Codex CLI**

```bash
codex mcp add unreal-engine-mcp -- npx -y unreal-engine-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add unreal-engine-mcp npx -y unreal-engine-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "unreal-engine-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "unreal-engine-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
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
    "unreal-engine-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "unreal-engine-mcp-server"
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
    "unreal-engine-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "unreal-engine-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "unreal-engine-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  unreal-engine-mcp:
    type: stdio
    cmd: npx
    args: ["-y","unreal-engine-mcp-server"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "unreal-engine-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "unreal-engine-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "unreal-engine-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `unreal-engine-mcp.cordis.yml  →  dsh web --patch ./unreal-engine-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-unreal-engine-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: unreal-engine-mcp
        transport: stdio
        command: npx
        args: ["-y","unreal-engine-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
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

<a id="next-devtools-mcp"></a>

### Next.js development tools

[vercel/next-devtools-mcp](https://github.com/vercel/next-devtools-mcp) — `Servidor MCP` · ★ 823 · Licença: ver repo · Funciona com: Todos os clientes

Servidor de ferramentas de desenvolvimento do Next.js com transporte stdio.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio next-devtools-mcp -- npx -y next-devtools-mcp
```

**Codex CLI**

```bash
codex mcp add next-devtools-mcp -- npx -y next-devtools-mcp
```

**Gemini CLI**

```bash
gemini mcp add next-devtools-mcp npx -y next-devtools-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "next-devtools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "next-devtools-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
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
    "next-devtools-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "next-devtools-mcp"
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
    "next-devtools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "next-devtools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "next-devtools-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  next-devtools-mcp:
    type: stdio
    cmd: npx
    args: ["-y","next-devtools-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "next-devtools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "next-devtools-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "next-devtools-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `next-devtools-mcp.cordis.yml  →  dsh web --patch ./next-devtools-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-next-devtools-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: next-devtools-mcp
        transport: stdio
        command: npx
        args: ["-y","next-devtools-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="rustunnel-mcp"></a>

### Public tunnels for localhost services

[rustunnel](https://github.com/joaoh82/rustunnel) — `Servidor MCP` · ★ 656 · Licença: AGPL-3.0 · Funciona com: Todos os clientes

Dá a agentes URLs públicas HTTPS/TCP/UDP para qualquer serviço local; é open source e pode ser auto-hospedado.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio rustunnel -- docker run -i --rm ghcr.io/joaoh82/rustunnel-mcp:0.8.5
```

**Codex CLI**

```bash
codex mcp add rustunnel -- docker run -i --rm ghcr.io/joaoh82/rustunnel-mcp:0.8.5
```

**Gemini CLI**

```bash
gemini mcp add rustunnel docker run -i --rm ghcr.io/joaoh82/rustunnel-mcp:0.8.5
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "rustunnel": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "rustunnel": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
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
    "rustunnel": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
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
    "rustunnel": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "rustunnel": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "rustunnel": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  rustunnel:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/joaoh82/rustunnel-mcp:0.8.5"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "rustunnel": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "rustunnel": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/joaoh82/rustunnel-mcp:0.8.5"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `rustunnel.cordis.yml  →  dsh web --patch ./rustunnel.cordis.yml`

```yaml
- insert:
    - id: mcp-rustunnel
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: rustunnel
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/joaoh82/rustunnel-mcp:0.8.5"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="touchdesigner-mcp"></a>

### Control TouchDesigner projects

[8beeeaaat/touchdesigner-mcp](https://github.com/8beeeaaat/touchdesigner-mcp) — `Servidor MCP` · ★ 544 · Licença: MIT · Funciona com: Todos os clientes

Controla e opera projetos do TouchDesigner por meio de agentes de IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio touchdesigner-mcp-server -- npx -y touchdesigner-mcp-server
```

**Codex CLI**

```bash
codex mcp add touchdesigner-mcp-server -- npx -y touchdesigner-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add touchdesigner-mcp-server npx -y touchdesigner-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "touchdesigner-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "touchdesigner-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
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
    "touchdesigner-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "touchdesigner-mcp-server"
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
    "touchdesigner-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "touchdesigner-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "touchdesigner-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  touchdesigner-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","touchdesigner-mcp-server"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "touchdesigner-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "touchdesigner-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "touchdesigner-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `touchdesigner-mcp-server.cordis.yml  →  dsh web --patch ./touchdesigner-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-touchdesigner-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: touchdesigner-mcp-server
        transport: stdio
        command: npx
        args: ["-y","touchdesigner-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="godot-mcp"></a>

### Godot 4.x engine control

[Godot MCP](https://github.com/tugcantopaloglu/godot-mcp) — `Servidor MCP` · ★ 465 · Licença: MIT · Funciona com: Todos os clientes

Controle completo do motor Godot 4.x com 165 ferramentas para desenvolvimento de jogos guiado por IA.

**Alternativas:**

- [tomyud1/godot-mcp/tree/main/mcp-server](https://github.com/tomyud1/godot-mcp/tree/main/mcp-server) — Controla o editor Godot a partir da IA para integração com o motor Godot.
- [HaD0Yun/godot-mcp](https://github.com/HaD0Yun/godot-mcp) (★ 259) — Mais de 95 ferramentas para o Godot Engine, com suporte a LSP, DAP e capturas de tela.
- [Glade-tool/glade-mcp](https://github.com/Glade-tool/glade-mcp) (★ 222) — Controla tanto o editor Unity quanto o Godot: cenas, scripts, física e materiais.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio godot-mcp -- npx -y @tugcantopaloglu/godot-mcp
```

**Codex CLI**

```bash
codex mcp add godot-mcp -- npx -y @tugcantopaloglu/godot-mcp
```

**Gemini CLI**

```bash
gemini mcp add godot-mcp npx -y @tugcantopaloglu/godot-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "godot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "godot-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
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
    "godot-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@tugcantopaloglu/godot-mcp"
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
    "godot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "godot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "godot-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  godot-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@tugcantopaloglu/godot-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "godot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "godot-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tugcantopaloglu/godot-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `godot-mcp.cordis.yml  →  dsh web --patch ./godot-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-godot-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: godot-mcp
        transport: stdio
        command: npx
        args: ["-y","@tugcantopaloglu/godot-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="uniprof-mcp"></a>

### Universal CPU profiler

[indragiek/uniprof](https://github.com/indragiek/uniprof) — `Servidor MCP` · ★ 407 · Licença: MIT · Funciona com: Todos os clientes

Um profiler de CPU universal, pensado tanto para humanos quanto para agentes de IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio uniprof -- npx -y uniprof
```

**Codex CLI**

```bash
codex mcp add uniprof -- npx -y uniprof
```

**Gemini CLI**

```bash
gemini mcp add uniprof npx -y uniprof
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "uniprof": {
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "uniprof": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
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
    "uniprof": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "uniprof"
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
    "uniprof": {
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "uniprof": {
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "uniprof": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  uniprof:
    type: stdio
    cmd: npx
    args: ["-y","uniprof"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "uniprof": {
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "uniprof": {
      "command": "npx",
      "args": [
        "-y",
        "uniprof"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `uniprof.cordis.yml  →  dsh web --patch ./uniprof.cordis.yml`

```yaml
- insert:
    - id: mcp-uniprof
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: uniprof
        transport: stdio
        command: npx
        args: ["-y","uniprof"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="flutter-skill-mcp"></a>

### AI-powered E2E testing, 10 platforms

[ai-dashboad/flutter-skill](https://github.com/ai-dashboad/flutter-skill) — `Servidor MCP` · ★ 375 · Licença: MIT · Funciona com: Todos os clientes

Testes E2E com IA para 10 plataformas, com 253 ferramentas, sem exigir código de teste.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio flutter-skill -- npx -y flutter-skill
```

**Codex CLI**

```bash
codex mcp add flutter-skill -- npx -y flutter-skill
```

**Gemini CLI**

```bash
gemini mcp add flutter-skill npx -y flutter-skill
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "flutter-skill": {
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "flutter-skill": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
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
    "flutter-skill": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "flutter-skill"
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
    "flutter-skill": {
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "flutter-skill": {
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "flutter-skill": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  flutter-skill:
    type: stdio
    cmd: npx
    args: ["-y","flutter-skill"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "flutter-skill": {
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "flutter-skill": {
      "command": "npx",
      "args": [
        "-y",
        "flutter-skill"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `flutter-skill.cordis.yml  →  dsh web --patch ./flutter-skill.cordis.yml`

```yaml
- insert:
    - id: mcp-flutter-skill
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: flutter-skill
        transport: stdio
        command: npx
        args: ["-y","flutter-skill"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="clauder-mcp"></a>

### RStudio AI assistant connection

[ClaudeR - RStudio MCP Server](https://github.com/IMNMV/ClaudeR) — `Servidor MCP` · ★ 344 · Licença: ver repo · Funciona com: Todos os clientes

Conecta o RStudio a assistentes de IA para codificação interativa em R e análise de dados.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio clauder -- uvx clauder-mcp
```

**Codex CLI**

```bash
codex mcp add clauder -- uvx clauder-mcp
```

**Gemini CLI**

```bash
gemini mcp add clauder uvx clauder-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "clauder": {
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "clauder": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "clauder-mcp"
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
    "clauder": {
      "type": "local",
      "command": [
        "uvx",
        "clauder-mcp"
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
    "clauder": {
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "clauder": {
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "clauder": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  clauder:
    type: stdio
    cmd: uvx
    args: ["clauder-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "clauder": {
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "clauder": {
      "command": "uvx",
      "args": [
        "clauder-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `clauder.cordis.yml  →  dsh web --patch ./clauder.cordis.yml`

```yaml
- insert:
    - id: mcp-clauder
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: clauder
        transport: stdio
        command: uvx
        args: ["clauder-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-oh-dsh"></a>

### All-in-one DSH distribution bundle

[hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) — `Plugin nativo` · ★ 320 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Distribuição da comunidade que empacota o TUI, o app desktop e a Web UI juntos em um único pacote com instalação em camadas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:hust-open-atom-club/oh-dsh
```

</details>

<a id="postman-mcp-server"></a>

### Full Postman platform access

[Postman MCP Server](https://github.com/postmanlabs/postman-mcp-server) — `Servidor MCP` · ★ 316 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor oficial que dá a agentes de IA acesso confiável a toda a plataforma Postman; exige POSTMAN_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio postman-mcp-server --env POSTMAN_API_KEY='<POSTMAN_API_KEY>' -- npx -y @postman/postman-mcp-server
```

**Codex CLI**

```bash
codex mcp add postman-mcp-server --env POSTMAN_API_KEY='<POSTMAN_API_KEY>' -- npx -y @postman/postman-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e POSTMAN_API_KEY='<POSTMAN_API_KEY>' postman-mcp-server npx -y @postman/postman-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "postman-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "postman-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
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
    "postman-mcp-server": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@postman/postman-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "postman-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "postman-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "postman-mcp-server": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  postman-mcp-server:
    type: stdio
    cmd: npx
    args: ["-y","@postman/postman-mcp-server"]
    envs:
      POSTMAN_API_KEY: "<POSTMAN_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "postman-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "postman-mcp-server": {
      "command": "npx",
      "args": [
        "-y",
        "@postman/postman-mcp-server"
      ],
      "env": {
        "POSTMAN_API_KEY": "<POSTMAN_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `postman-mcp-server.cordis.yml  →  dsh web --patch ./postman-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-postman-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: postman-mcp-server
        transport: stdio
        command: npx
        args: ["-y","@postman/postman-mcp-server"]
        env: {"POSTMAN_API_KEY":"<POSTMAN_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="apollo-mcp-server"></a>

### Expose GraphQL operations as tools

[Apollo MCP Server](https://github.com/apollographql/apollo-mcp-server) — `Servidor MCP` · ★ 309 · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial da Apollo que expõe operações GraphQL como ferramentas para modelos de IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio apollo-mcp-server -- docker run -i --rm ghcr.io/apollographql/apollo-mcp-server:v1.19.0
```

**Codex CLI**

```bash
codex mcp add apollo-mcp-server -- docker run -i --rm ghcr.io/apollographql/apollo-mcp-server:v1.19.0
```

**Gemini CLI**

```bash
gemini mcp add apollo-mcp-server docker run -i --rm ghcr.io/apollographql/apollo-mcp-server:v1.19.0
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "apollo-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "apollo-mcp-server": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
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
    "apollo-mcp-server": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
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
    "apollo-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "apollo-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "apollo-mcp-server": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  apollo-mcp-server:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/apollographql/apollo-mcp-server:v1.19.0"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "apollo-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "apollo-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/apollographql/apollo-mcp-server:v1.19.0"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `apollo-mcp-server.cordis.yml  →  dsh web --patch ./apollo-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-apollo-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: apollo-mcp-server
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/apollographql/apollo-mcp-server:v1.19.0"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="squirrelscan-mcp"></a>

### Website QA audits

[squirrelscan](https://github.com/squirrelscan/squirrelscan) — `Servidor MCP` · ★ 267 · Licença: MIT · Funciona com: Todos os clientes

QA de sites para agentes de código: audita SEO, performance, segurança e acessibilidade.

**Alternativas:**

- [priyankark/lighthouse-mcp](https://github.com/priyankark/lighthouse-mcp) (★ 209) — Métricas de performance do Google Lighthouse para uma página.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http squirrelscan https://mcp.squirrelscan.com/mcp
```

**Codex CLI**

```bash
codex mcp add squirrelscan --url https://mcp.squirrelscan.com/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http squirrelscan https://mcp.squirrelscan.com/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "squirrelscan": {
      "url": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "squirrelscan": {
      "type": "http",
      "url": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "squirrelscan": {
      "type": "remote",
      "url": "https://mcp.squirrelscan.com/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "squirrelscan": {
      "type": "streamableHttp",
      "url": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "squirrelscan": {
      "serverUrl": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "squirrelscan": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.squirrelscan.com/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  squirrelscan:
    type: streamable_http
    uri: https://mcp.squirrelscan.com/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "squirrelscan": {
      "type": "streamable-http",
      "url": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "squirrelscan": {
      "type": "streamable-http",
      "url": "https://mcp.squirrelscan.com/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `squirrelscan.cordis.yml  →  dsh web --patch ./squirrelscan.cordis.yml`

```yaml
- insert:
    - id: mcp-squirrelscan
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: squirrelscan
        transport: streamable-http
        url: https://mcp.squirrelscan.com/mcp
```

</details>

<a id="opik-mcp"></a>

### LLM app tracing and evaluation

[Opik MCP Server](https://github.com/comet-ml/opik-mcp) — `Servidor MCP` · ★ 221 · Licença: Apache-2.0 · Funciona com: Todos os clientes

Interage com prompts, traces, datasets e métricas do Opik para depurar aplicações de LLM; exige OPIK_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio opik-mcp --env OPIK_API_KEY='<OPIK_API_KEY>' -- npx -y opik-mcp
```

**Codex CLI**

```bash
codex mcp add opik-mcp --env OPIK_API_KEY='<OPIK_API_KEY>' -- npx -y opik-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e OPIK_API_KEY='<OPIK_API_KEY>' opik-mcp npx -y opik-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "opik-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "opik-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
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
    "opik-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "opik-mcp"
      ],
      "enabled": true,
      "environment": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "opik-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "opik-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "opik-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  opik-mcp:
    type: stdio
    cmd: npx
    args: ["-y","opik-mcp"]
    envs:
      OPIK_API_KEY: "<OPIK_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "opik-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "opik-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "opik-mcp"
      ],
      "env": {
        "OPIK_API_KEY": "<OPIK_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `opik-mcp.cordis.yml  →  dsh web --patch ./opik-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-opik-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: opik-mcp
        transport: stdio
        command: npx
        args: ["-y","opik-mcp"]
        env: {"OPIK_API_KEY":"<OPIK_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-mcp-panel"></a>

### MCP client runtime status panel

[PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) — `Plugin nativo` · ★ 62 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Painel de runtime somente leitura para o cliente MCP oficial do DSH: mostra status de conexão, ferramentas registradas, erros e contagem de reconexões pelo comando /mcp e por uma aba de Configurações, com exibição sanitizada e sugestões de patch para ativar/desativar.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-mcp-panel
```

</details>

<a id="dsh-dsh-skills-manager"></a>

### Manage skills from a settings panel

[MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) — `Plugin nativo` · ★ 60 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Gerencia skills locais do DeepSeek Harness pela tela de Configurações e exibe as skills de Agente compartilhadas pela equipe como itens somente leitura.

**Alternativas:**

- [minivv/dsh-agent-skills](https://github.com/minivv/dsh-agent-skills) (★ 14) — Também navega e ativa/desativa skills vindas de Codex, OpenCode, Gemini e diretórios personalizados
- [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) (★ 138) — Adiciona CRUD de servidores MCP (stdio/HTTP) com testes de conexão, ocultação de segredos e migração em lote

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MichengAI/dsh-skills-manager
```

</details>

<a id="dsh-dsh-win32"></a>

### Diagnose and repair DSH installs

[sjh9714/dsh-win32](https://github.com/sjh9714/dsh-win32) — `Plugin nativo` · ★ 57 · Licença: MIT · Funciona com: DeepSeek Harness apenas

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

[6Mikao9/dsh-wsl-workspace](https://github.com/6Mikao9/dsh-wsl-workspace) — `Plugin nativo` · ★ 51 · Licença: MIT · Funciona com: DeepSeek Harness apenas

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

- [PerryLink/dsh-observe](https://github.com/PerryLink/dsh-observe) (★ 8) — Também exporta traces e métricas sanitizados e bufferizados diretamente para o Langfuse
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

[Areium/dsh-fail-logger](https://github.com/Areium/dsh-fail-logger) — `Plugin nativo` · ★ 10 · Licença: MIT · Funciona com: DeepSeek Harness apenas

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

<a id="mcp-flutter-mcp-server-dart"></a>

### Inspect and drive Flutter apps

[Flutter MCP Toolkit](https://github.com/Arenukvern/mcp_flutter/tree/main/mcp_server_dart) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Inspeciona e controla apps e jogos Flutter em modo debug com snapshots semânticos, busca e ferramentas customizadas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio flutter-mcp-toolkit -- docker run -i --rm ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0
```

**Codex CLI**

```bash
codex mcp add flutter-mcp-toolkit -- docker run -i --rm ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0
```

**Gemini CLI**

```bash
gemini mcp add flutter-mcp-toolkit docker run -i --rm ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "flutter-mcp-toolkit": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "flutter-mcp-toolkit": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
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
    "flutter-mcp-toolkit": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
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
    "flutter-mcp-toolkit": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "flutter-mcp-toolkit": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "flutter-mcp-toolkit": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  flutter-mcp-toolkit:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "flutter-mcp-toolkit": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "flutter-mcp-toolkit": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `flutter-mcp-toolkit.cordis.yml  →  dsh web --patch ./flutter-mcp-toolkit.cordis.yml`

```yaml
- insert:
    - id: mcp-flutter-mcp-toolkit
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: flutter-mcp-toolkit
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/arenukvern/flutter-mcp-toolkit:5.1.0"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="openimagedebugger-oidmcp"></a>

### Inspect image buffers in debug sessions

[OpenImageDebugger MCP](https://github.com/OpenImageDebugger/OpenImageDebugger/tree/main/resources/oidmcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Dá a agentes de IA visibilidade sobre buffers do OpenImageDebugger durante sessões ao vivo de gdb/lldb.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio oid-mcp -- uvx oid-mcp
```

**Codex CLI**

```bash
codex mcp add oid-mcp -- uvx oid-mcp
```

**Gemini CLI**

```bash
gemini mcp add oid-mcp uvx oid-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "oid-mcp": {
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "oid-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "oid-mcp"
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
    "oid-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "oid-mcp"
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
    "oid-mcp": {
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "oid-mcp": {
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "oid-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  oid-mcp:
    type: stdio
    cmd: uvx
    args: ["oid-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "oid-mcp": {
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "oid-mcp": {
      "command": "uvx",
      "args": [
        "oid-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `oid-mcp.cordis.yml  →  dsh web --patch ./oid-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-oid-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: oid-mcp
        transport: stdio
        command: uvx
        args: ["oid-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="measure-mcp"></a>

### Mobile crash root-cause analysis

[Measure](https://github.com/measure-sh/measure/tree/main/backend/agent/mcp) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Ajuda a encontrar a causa raiz de crashes, erros e traces lentos em apps móveis.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http measure https://agent.measure.sh/mcp
```

**Codex CLI**

```bash
codex mcp add measure --url https://agent.measure.sh/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http measure https://agent.measure.sh/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "measure": {
      "url": "https://agent.measure.sh/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "measure": {
      "type": "http",
      "url": "https://agent.measure.sh/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "measure": {
      "type": "remote",
      "url": "https://agent.measure.sh/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "measure": {
      "type": "streamableHttp",
      "url": "https://agent.measure.sh/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "measure": {
      "serverUrl": "https://agent.measure.sh/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "measure": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://agent.measure.sh/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  measure:
    type: streamable_http
    uri: https://agent.measure.sh/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "measure": {
      "type": "streamable-http",
      "url": "https://agent.measure.sh/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "measure": {
      "type": "streamable-http",
      "url": "https://agent.measure.sh/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `measure.cordis.yml  →  dsh web --patch ./measure.cordis.yml`

```yaml
- insert:
    - id: mcp-measure
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: measure
        transport: streamable-http
        url: https://agent.measure.sh/mcp
```

</details>

<a id="sentry-mcp-mcp-server"></a>

### Sentry error monitoring

[getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp/tree/main/packages/mcp-server) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Monitoramento de erros, rastreamento de issues e depuração para assistentes de IA via Sentry; exige SENTRY_ACCESS_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio sentry-mcp --env SENTRY_ACCESS_TOKEN='<SENTRY_ACCESS_TOKEN>' -- npx -y @sentry/mcp-server
```

**Codex CLI**

```bash
codex mcp add sentry-mcp --env SENTRY_ACCESS_TOKEN='<SENTRY_ACCESS_TOKEN>' -- npx -y @sentry/mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e SENTRY_ACCESS_TOKEN='<SENTRY_ACCESS_TOKEN>' sentry-mcp npx -y @sentry/mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sentry-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "sentry-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
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
    "sentry-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@sentry/mcp-server"
      ],
      "enabled": true,
      "environment": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "sentry-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "sentry-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "sentry-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  sentry-mcp:
    type: stdio
    cmd: npx
    args: ["-y","@sentry/mcp-server"]
    envs:
      SENTRY_ACCESS_TOKEN: "<SENTRY_ACCESS_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sentry-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "sentry-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@sentry/mcp-server"
      ],
      "env": {
        "SENTRY_ACCESS_TOKEN": "<SENTRY_ACCESS_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `sentry-mcp.cordis.yml  →  dsh web --patch ./sentry-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-sentry-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sentry-mcp
        transport: stdio
        command: npx
        args: ["-y","@sentry/mcp-server"]
        env: {"SENTRY_ACCESS_TOKEN":"<SENTRY_ACCESS_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>

<a id="mcp-server-tauri-mcp-server"></a>

### Tauri v2 app development

[hypothesi/mcp-server-tauri](https://github.com/hypothesi/mcp-server-tauri/tree/main/packages/mcp-server) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor para uso com aplicações desktop Tauri v2.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio mcp-server-tauri -- npx -y @hypothesi/tauri-mcp-server
```

**Codex CLI**

```bash
codex mcp add mcp-server-tauri -- npx -y @hypothesi/tauri-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add mcp-server-tauri npx -y @hypothesi/tauri-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-tauri": {
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mcp-server-tauri": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
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
    "mcp-server-tauri": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@hypothesi/tauri-mcp-server"
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
    "mcp-server-tauri": {
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mcp-server-tauri": {
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mcp-server-tauri": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mcp-server-tauri:
    type: stdio
    cmd: npx
    args: ["-y","@hypothesi/tauri-mcp-server"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mcp-server-tauri": {
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mcp-server-tauri": {
      "command": "npx",
      "args": [
        "-y",
        "@hypothesi/tauri-mcp-server"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mcp-server-tauri.cordis.yml  →  dsh web --patch ./mcp-server-tauri.cordis.yml`

```yaml
- insert:
    - id: mcp-mcp-server-tauri
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mcp-server-tauri
        transport: stdio
        command: npx
        args: ["-y","@hypothesi/tauri-mcp-server"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="unity-mcp-unity-mcp-server"></a>

### Unity Engine AI control

[IvanMurzak/Unity-MCP](https://github.com/IvanMurzak/Unity-MCP/tree/main/Unity-MCP-Server) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Servidor e plugin para criar jogos 3D na Unity Engine com IA, cobrindo o Editor Unity e os jogos.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio unity-mcp -- docker run -i --rm docker.io/ivanmurzakdev/unity-mcp-server:0.17.1
```

**Codex CLI**

```bash
codex mcp add unity-mcp -- docker run -i --rm docker.io/ivanmurzakdev/unity-mcp-server:0.17.1
```

**Gemini CLI**

```bash
gemini mcp add unity-mcp docker run -i --rm docker.io/ivanmurzakdev/unity-mcp-server:0.17.1
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "unity-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "unity-mcp": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
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
    "unity-mcp": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
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
    "unity-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "unity-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "unity-mcp": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  unity-mcp:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "unity-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "unity-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `unity-mcp.cordis.yml  →  dsh web --patch ./unity-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-unity-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: unity-mcp
        transport: stdio
        command: docker
        args: ["run","-i","--rm","docker.io/ivanmurzakdev/unity-mcp-server:0.17.1"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="oh-my-posh-mcp"></a>

### Validate oh-my-posh configs

[Oh My Posh Validator](https://github.com/JanDeDobbeleer/oh-my-posh/tree/main/website/api/mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Valida configurações do oh-my-posh e trechos de segmentos contra o schema oficial.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http validator https://ohmyposh.dev/api/mcp
```

**Codex CLI**

```bash
codex mcp add validator --url https://ohmyposh.dev/api/mcp
```

**Gemini CLI**

```bash
gemini mcp add --transport http validator https://ohmyposh.dev/api/mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "validator": {
      "url": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "validator": {
      "type": "http",
      "url": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "validator": {
      "type": "remote",
      "url": "https://ohmyposh.dev/api/mcp",
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "validator": {
      "type": "streamableHttp",
      "url": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "validator": {
      "serverUrl": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "validator": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://ohmyposh.dev/api/mcp"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  validator:
    type: streamable_http
    uri: https://ohmyposh.dev/api/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "validator": {
      "type": "streamable-http",
      "url": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "validator": {
      "type": "streamable-http",
      "url": "https://ohmyposh.dev/api/mcp"
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `validator.cordis.yml  →  dsh web --patch ./validator.cordis.yml`

```yaml
- insert:
    - id: mcp-validator
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: validator
        transport: streamable-http
        url: https://ohmyposh.dev/api/mcp
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
