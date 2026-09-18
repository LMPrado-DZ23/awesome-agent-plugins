# Awesome Agent Plugins [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[Português](README.pt-BR.md) | [English](README.md)

> Um catálogo de **servidores MCP, Agent Skills e plugins nativos** para agentes de IA de programação — com o comando de instalação exato para o *seu* cliente.

![entries](https://img.shields.io/badge/itens-264-blue) ![projects](https://img.shields.io/badge/projects-461-blue) ![clients](https://img.shields.io/badge/clients-13-green)

A maioria das listas é presa a um cliente. Aqui cada item diz com quais agentes funciona, e as instruções de instalação são geradas por cliente a partir de uma única especificação, então ficam consistentes. Plugins quase duplicados são juntados numa entrada que aponta a melhor opção e lista o que cada alternativa acrescenta.

## Clientes suportados

| Cliente | MCP | Skills | Plugins nativos | Instruções de projeto |
|---|---|---|---|---|
| [Claude Code](https://code.claude.com/docs/en/mcp) | ✅ | ✅ | ✅ 1 | `CLAUDE.md` |
| [Codex CLI](https://developers.openai.com/codex/mcp) | ✅ | ✅ | — | `AGENTS.md` |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md) | ✅ | ✅ | — | `GEMINI.md` |
| [Cursor](https://cursor.com/docs/context/mcp) | ✅ | ✅ | — | `AGENTS.md / .cursor/rules` |
| [VS Code (Copilot)](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) | ✅ | ✅ | — | `.github/copilot-instructions.md` |
| [OpenCode](https://opencode.ai/docs/mcp-servers/) | ✅ | ✅ | — | `AGENTS.md` |
| [Cline](https://docs.cline.bot/mcp/configuring-mcp-servers) | ✅ | ✅ | — | `.clinerules` |
| [Windsurf](https://docs.windsurf.com/windsurf/cascade/mcp) | ✅ | ✅ | — | `AGENTS.md` |
| [Zed](https://zed.dev/docs/ai/mcp) | ✅ | ✅ | — | `AGENTS.md` |
| [Goose](https://block.github.io/goose/docs/getting-started/using-extensions) | ✅ | ✅ | — | `.goosehints` |
| [Kiro](https://kiro.dev/docs/mcp/configuration/) | ✅ | ✅ | — | `.kiro/steering/` |
| [Roo Code](https://docs.roocode.com/features/mcp/using-mcp-in-roo) | ✅ | ✅ | — | `.roo/rules/ + AGENTS.md` |
| [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness/blob/main/docs/user/guide/mcp-memory.md) | ✅ | ✅ | ✅ 221 | `AGENTS.md` |

## Início rápido (CLI)

Busque no catálogo e obtenha (ou execute) o comando de instalação para o seu agente:

```bash
npx github:LMPrado-DZ23/awesome-agent-plugins search browser
npx github:LMPrado-DZ23/awesome-agent-plugins show playwright-mcp
npx github:LMPrado-DZ23/awesome-agent-plugins install playwright-mcp --client codex        # mostra o comando/config
npx github:LMPrado-DZ23/awesome-agent-plugins install anthropic-skills --client claude-code --run
```

## Destaques

| Nome | Tipo | O que faz | Funciona com |
|---|---|---|---|
| [Superpowers](catalog/pt-BR/skills.md#superpowers) ★289k | Agent Skills | Biblioteca de skills e metodologia de desenvolvimento: brainstorming, planejamento, TDD, depuração sistemática, code review e execução com subagentes. | Todos os clientes |
| [Anthropic Skills](catalog/pt-BR/skills.md#anthropic-skills) ★177k | Agent Skills | Agent Skills de referência da Anthropic: PDF, DOCX, XLSX e PPTX, skill-creator, construtor de MCP, design de frontend, testes de web app e mais. | Todos os clientes |
| [Context7](catalog/pt-BR/docs.md#context7) ★62k | Servidor MCP | Documentação de bibliotecas atualizada e por versão, com exemplos de código, trazida ao contexto do agente sob demanda. Alternativa local: `npx -y @upstash/context7-mcp`. | Todos os clientes |
| [Chrome DevTools MCP](catalog/pt-BR/browser.md#chrome-devtools-mcp) ★52k | Servidor MCP | Dá ao agente o Chrome DevTools: controla um Chrome real, inspeciona rede e console, grava traces de performance e depura páginas. | Todos os clientes |
| [Playwright MCP](catalog/pt-BR/browser.md#playwright-mcp) ★37k | Servidor MCP | Automação de navegador para agentes via snapshots de acessibilidade do Playwright: navegar, clicar, preencher formulários e capturar telas sem modelo de visão. | Todos os clientes |
| [Claude Code official plugin directory](catalog/pt-BR/meta.md#claude-plugins-official) ★36k | Marketplace de plugins | Diretório de plugins do Claude Code mantido pela Anthropic (comandos, agentes, skills, hooks, servidores MCP) instaláveis com /plugin. | Claude Code apenas |
| [GitHub MCP Server](catalog/pt-BR/git.md#github-mcp-server) ★33k | Servidor MCP | Servidor oficial do GitHub: repositórios, issues, pull requests, Actions, code scanning e mais. Mostrado o endpoint remoto; a imagem Docker (ghcr.io/github/github-mcp-server) roda localmente. | Todos os clientes |
| [skills (npx skills)](catalog/pt-BR/meta.md#skills-cli) ★32k | Ferramenta | CLI que instala, atualiza, lista e remove Agent Skills de qualquer fonte Git em mais de 75 agentes (Claude Code, Codex, Cursor, Gemini CLI, OpenCode…). Usado por este catálogo para instalar skills. | — |
| [Serena](catalog/pt-BR/code-intel.md#serena) ★30k | Servidor MCP | Busca e edição semântica de código via language servers: encontra símbolos e referências e edita no nível de símbolo em vez de texto. | Todos os clientes |
| [Agent Skills](catalog/pt-BR/standards.md#agent-skills-spec) ★25k | Padrão / especificação | Especificação das Agent Skills: uma pasta com SKILL.md (nome, descrição, instruções) e scripts/recursos opcionais que o agente carrega sob demanda. | — |
| [AGENTS.md](catalog/pt-BR/standards.md#agents-md) ★24k | Padrão / especificação | Formato Markdown aberto para instruções de projeto a agentes de código (setup, build, testes, convenções). Lido por Codex, Cursor, OpenCode, Zed, Windsurf, DeepSeek Harness e outros. | — |
| [Model Context Protocol](catalog/pt-BR/standards.md#model-context-protocol) ★9.3k | Padrão / especificação | Especificação e documentação do MCP, o protocolo aberto que todos os clientes desta lista usam para conectar agentes a ferramentas, dados e prompts. | — |
| [MCP Registry](catalog/pt-BR/meta.md#mcp-registry) ★7.3k | Lista / registro | Serviço de registro oficial e comunitário de servidores MCP, com API pública para descobrir servidores publicados e seus metadados de instalação. | — |
| [dsh-market](catalog/pt-BR/meta.md#dsh-market) ★4.1k | Marketplace de plugins | Loja de plugins dentro das Configurações do DeepSeek Harness: busca, instalação/atualização em um clique e troca de temas para todos os plugins do awesome-dsh-plugin. | DeepSeek Harness apenas |
| [DZ23 Subagents Universal MCP](catalog/pt-BR/workflow.md#dz23-subagents) | Servidor MCP | Roteador MCP self-hosted que delega tarefas de texto/código a vários modelos com failover automático, subagentes paralelos por papel (architect, backend, security, QA…), consenso e memória de missão compartilhada entre harnesses. Node.js 22+, sem dependências de runtime. | Todos os clientes |
| [Enterprise Product Builder](catalog/pt-BR/skills.md#enterprise-product-builder) | Agent Skills | Skill para construir produtos web com padrão de empresa madura: discovery e métricas, ADRs, contratos de API/dados, design system, segurança OWASP ASVS, privacidade LGPD/GDPR, WCAG 2.2 AA, i18n, SLOs, CI/CD com rollback e revisão de release, com templates. | Todos os clientes |
| [Super Autonomous Mission Loop](catalog/pt-BR/skills.md#super-autonomous-mission-loop) | Agent Skills | Skill para missões longas de engenharia que rodam até critérios objetivos de conclusão: autonomia delimitada, checkpoint em disco, recuperação após crash ou compactação de contexto, anti-loop, disciplina de Git, três auditorias independentes e release verificado. | Todos os clientes |

## Coleções

Kits prontos para cenários comuns — instale o kit inteiro em um cliente com um único comando.

- [Engenharia autônoma (stack DZ23)](collections/autonomous-engineering.md) — Subagentes multi-modelo com memória de missão compartilhada, skills de missão longa e de qualidade de produto, revisão responsável de origem por IA e acesso ao GitHub. (`aap collection autonomous-engineering --client <id>`)
- [Kit inicial do DeepSeek Harness](collections/deepseek-harness-starter.md) — A loja de plugins, os plugins nativos mais usados do dsh (sidebar, painel de contexto, times de agentes, memória, auto-revisão) e servidores MCP e skills portáveis que também funcionam no dsh. (`aap collection deepseek-harness-starter --client <id>`)
- [Desenvolvimento web full-stack](collections/fullstack-dev.md) — Documentação atualizada, navegador real para testes, navegação semântica de código, GitHub e rastreamento de erros. (`aap collection fullstack-dev --client <id>`)
- [Criando seus próprios servidores MCP e skills](collections/mcp-builder.md) — As especificações, um inspetor para depurar servidores, um framework Python e o CLI para publicar/instalar skills. (`aap collection mcp-builder --client <id>`)
- [Pesquisa e documentos](collections/research-docs.md) — Busca e scraping na web, conversão de arquivos para Markdown e skills para PDF/Office. (`aap collection research-docs --client <id>`)

## Conteúdo

- [Padrões e especificações](catalog/pt-BR/standards.md) — 3 itens
- [Registros, listas e gerenciadores](catalog/pt-BR/meta.md) — 11 itens + 4 alternativas incorporadas
- [Skills e instruções](catalog/pt-BR/skills.md) — 23 itens + 7 alternativas incorporadas
- [Inteligência de código](catalog/pt-BR/code-intel.md) — 1 itens
- [Navegador e web](catalog/pt-BR/browser.md) — 11 itens + 9 alternativas incorporadas
- [Documentação e conhecimento](catalog/pt-BR/docs.md) — 9 itens + 4 alternativas incorporadas
- [Memória](catalog/pt-BR/memory.md) — 16 itens + 14 alternativas incorporadas
- [Ferramentas e capacidades](catalog/pt-BR/tools.md) — 27 itens + 9 alternativas incorporadas
- [Desenvolvimento e runtime](catalog/pt-BR/dev.md) — 20 itens + 11 alternativas incorporadas
- [Git e revisão de código](catalog/pt-BR/git.md) — 12 itens + 10 alternativas incorporadas
- [Nuvem, dados e infra](catalog/pt-BR/cloud.md) — 4 itens
- [Fluxo de trabalho e agentes](catalog/pt-BR/workflow.md) — 22 itens + 14 alternativas incorporadas
- [Integrações e notificações](catalog/pt-BR/integrations.md) — 10 itens + 6 alternativas incorporadas
- [Segurança e permissões](catalog/pt-BR/security.md) — 12 itens + 20 alternativas incorporadas
- [Modelos e provedores](catalog/pt-BR/models.md) — 12 itens + 18 alternativas incorporadas
- [Uso e custo](catalog/pt-BR/usage.md) — 8 itens + 8 alternativas incorporadas
- [Sessões e mensagens](catalog/pt-BR/sessions.md) — 10 itens + 7 alternativas incorporadas
- [Visão e voz](catalog/pt-BR/multimodal.md) — 12 itens + 15 alternativas incorporadas
- [Remoto e mobile](catalog/pt-BR/remote.md) — 8 itens + 10 alternativas incorporadas
- [Melhorias de interface](catalog/pt-BR/ui.md) — 20 itens + 21 alternativas incorporadas
- [Temas e aparência](catalog/pt-BR/themes.md) — 8 itens + 6 alternativas incorporadas
- [Diversão](catalog/pt-BR/fun.md) — 5 itens + 4 alternativas incorporadas

## Plugins do DeepSeek Harness

Importados do [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin): os 220 mais fortes de ~3.900 plugins (ranqueados por estrelas no GitHub e downloads no npm, repositórios arquivados/removidos descartados), com 193 plugins parecidos incorporados como alternativas. Instale com `dsh plugin add`; veja a lista original para o restante.

## Como os itens são escolhidos

- Funciona: instala como descrito em pelo menos um cliente, e a descrição bate com o código.
- É mantido: repositórios arquivados ou removidos são sinalizados por uma checagem semanal e retirados.
- Sem duplicatas: quando vários projetos resolvem o mesmo problema, o melhor fica com a entrada e os outros aparecem como *alternativas*, com o que acrescentam.
- Sem segredos: as configurações só têm placeholders como `<GITHUB_PAT>`.
- Estar listado não é auditoria de segurança — código de terceiros roda com as suas permissões. Leia o código antes.

## Como contribuir

Adicione um arquivo YAML em `data/entries/` e abra um PR — os READMEs e as páginas do catálogo são gerados. Veja o [CONTRIBUTING.md](CONTRIBUTING.md).

## Licença

Dados do catálogo: [CC0-1.0](LICENSE-DATA). Código (CLI e scripts) e as skills/instruções hospedadas em [`skills/`](skills) e [`instructions/`](instructions): [MIT](LICENSE). Cada projeto listado mantém a própria licença.
