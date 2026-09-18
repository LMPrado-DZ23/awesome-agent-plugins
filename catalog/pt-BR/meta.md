# Registros, listas e gerenciadores

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Claude Code official plugin directory](#claude-plugins-official) — Diretório de plugins do Claude Code mantido pela Anthropic (comandos, agentes, skills, hooks, servidores MCP) …
- [skills (npx skills)](#skills-cli) — CLI que instala, atualiza, lista e remove Agent Skills de qualquer fonte Git em mais de 75 agentes (Claude Cod…
- [MCP Registry](#mcp-registry) — Serviço de registro oficial e comunitário de servidores MCP, com API pública para descobrir servidores publica…
- [dsh-market](#dsh-market) — Loja de plugins dentro das Configurações do DeepSeek Harness: busca, instalação/atualização em um clique e tro…
- [awesome-mcp-servers](#awesome-mcp-servers) — Grande lista comunitária de servidores MCP agrupados por domínio. Mais ampla que este catálogo; sem instruções…
- [awesome-claude-code](#awesome-claude-code) — Recursos curados para Claude Code: slash commands, arquivos CLAUDE.md, hooks, fluxos e ferramentas.
- [awesome-dsh-plugin](#awesome-dsh-plugin) — A lista completa de ~3.900 plugins do DeepSeek Harness. Este catálogo importa os melhores e junta os quase dup…
- [Native skin marketplace](#dsh-dsh-skin-market) — Descobre skins da comunidade, mostra pré-visualizações e status de compatibilidade, e oferece caminhos de inst…
- [Chat-based plugin discovery](#dsh-dsh-find-plugin) — Pesquisa um registro curado de plugins por palavra-chave ou categoria diretamente na conversa com o agente e r…
- [Curated research plugin store](#dsh-dsh-research) — Adiciona uma página de plugins de Pesquisa às Configurações com plugins revisados manualmente para busca de li…
- [MCP server marketplace](#dsh-dsh-mcp-market) — Navega por um catálogo curado e verificado via npm de servidores MCP e os instala no perfil atual com um cliqu…

<a id="claude-plugins-official"></a>

### Claude Code official plugin directory

[Claude Code official plugin directory](https://github.com/anthropics/claude-plugins-official) — `Marketplace de plugins` · ★ 36k · Licença: Apache-2.0 · Funciona com: Claude Code apenas

Diretório de plugins do Claude Code mantido pela Anthropic (comandos, agentes, skills, hooks, servidores MCP) instaláveis com /plugin.

<details><summary>Instalar</summary>

**Claude Code**

```text
/plugin install <plugin-name>@claude-plugins-official
```

</details>

<a id="skills-cli"></a>

### skills (npx skills)

[skills (npx skills)](https://github.com/vercel-labs/skills) — `Ferramenta` · ★ 32k · Licença: MIT · Funciona com: —

CLI que instala, atualiza, lista e remove Agent Skills de qualquer fonte Git em mais de 75 agentes (Claude Code, Codex, Cursor, Gemini CLI, OpenCode…). Usado por este catálogo para instalar skills.

<a id="mcp-registry"></a>

### MCP Registry

[MCP Registry](https://github.com/modelcontextprotocol/registry) — `Lista / registro` · ★ 7.3k · Licença: ver repo · Funciona com: —

Serviço de registro oficial e comunitário de servidores MCP, com API pública para descobrir servidores publicados e seus metadados de instalação.

<a id="dsh-market"></a>

### dsh-market

[dsh-market](https://github.com/dsh-market/dsh-market) — `Marketplace de plugins` · ★ 4.1k · Licença: MIT · Funciona com: DeepSeek Harness apenas

Loja de plugins dentro das Configurações do DeepSeek Harness: busca, instalação/atualização em um clique e troca de temas para todos os plugins do awesome-dsh-plugin.

**Alternativas:**

- [Relistencode/dsh-extension-hub](https://github.com/Relistencode/dsh-extension-hub) (★ 8) — Também gerencia skills e servidores MCP junto com plugins, além de busca curada e via GitHub com instalação npm em um clique.
- [1e0zj/dsh-plugin-mall](https://github.com/1e0zj/dsh-plugin-mall) (★ 4) — Verifica plugins por checagens de manifesto no package.json e proteção antissquatting, além de cinco ferramentas para uso headless por agentes.
- [DshMarketPlace/dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store) (★ 6) — Mostra uma etapa de aprovação listando os sinais de risco detectados de cada plugin antes de instalar.
- [zhu1090093659/dsh-web#packages/dsh-plugin-manager](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-plugin-manager) — Instala a partir de npm ou git com reconciliação de conflitos, desfazer e transferência para uma sessão de correção.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add dshmarket
```

</details>

<a id="awesome-mcp-servers"></a>

### awesome-mcp-servers

[awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) — `Lista / registro` · ★ 95k · Licença: MIT · Funciona com: —

Grande lista comunitária de servidores MCP agrupados por domínio. Mais ampla que este catálogo; sem instruções de instalação por cliente.

<a id="awesome-claude-code"></a>

### awesome-claude-code

[awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — `Lista / registro` · ★ 54k · Licença: ver repo · Funciona com: —

Recursos curados para Claude Code: slash commands, arquivos CLAUDE.md, hooks, fluxos e ferramentas.

<a id="awesome-dsh-plugin"></a>

### awesome-dsh-plugin

[awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) — `Lista / registro` · ★ 16k · Licença: CC0-1.0 · Funciona com: —

A lista completa de ~3.900 plugins do DeepSeek Harness. Este catálogo importa os melhores e junta os quase duplicados; consulte a original para o restante.

<a id="dsh-dsh-skin-market"></a>

### Native skin marketplace

[kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) — `Plugin nativo` · ★ 150 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Descobre skins da comunidade, mostra pré-visualizações e status de compatibilidade, e oferece caminhos de instalação verificados, com um clique ou manuais.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:kingOfSoySauce/dsh-skin-market
```

</details>

<a id="dsh-dsh-find-plugin"></a>

### Chat-based plugin discovery

[awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) — `Plugin nativo` · ★ 139 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Pesquisa um registro curado de plugins por palavra-chave ou categoria diretamente na conversa com o agente e retorna comandos de instalação prontos, sem abrir a interface de Configurações.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:awesome-dsh-plugin/dsh-find-plugin
```

</details>

<a id="dsh-dsh-research"></a>

### Curated research plugin store

[dsh-research/dsh-research](https://github.com/dsh-research/dsh-research) — `Plugin nativo` · ★ 5 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Adiciona uma página de plugins de Pesquisa às Configurações com plugins revisados manualmente para busca de literatura, gerenciamento de referências, escrita e workbenches; instala versões fixadas em um clique e faz exatamente uma requisição de rede ao próprio catálogo.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dsh-research/dsh-research
```

</details>

<a id="dsh-dsh-mcp-market"></a>

### MCP server marketplace

[LKMeng2001/dsh-mcp-market](https://github.com/LKMeng2001/dsh-mcp-market) — `Plugin nativo` · ★ 1 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Navega por um catálogo curado e verificado via npm de servidores MCP e os instala no perfil atual com um clique, ao vivo, sem reiniciar.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:LKMeng2001/dsh-mcp-market
```

</details>
