# Registros, listas e gerenciadores

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Claude Code official plugin directory](#claude-plugins-official) — Diretório de plugins do Claude Code mantido pela Anthropic (comandos, agentes, skills, hooks, servidores MCP) …
- [skills (npx skills)](#skills-cli) — CLI que instala, atualiza, lista e remove Agent Skills de qualquer fonte Git em mais de 75 agentes (Claude Cod…
- [MCP Registry](#mcp-registry) — Serviço de registro oficial e comunitário de servidores MCP, com API pública para descobrir servidores publica…
- [dsh-market](#dsh-market) — Loja de plugins dentro das Configurações do DeepSeek Harness: busca, instalação/atualização em um clique e tro…
- [ECC agent harness optimizer](#ecc) — Sistema de otimização de performance para harnesses de agentes de código, reunindo skills, instintos, memória,…
- [awesome-mcp-servers](#awesome-mcp-servers) — Grande lista comunitária de servidores MCP agrupados por domínio. Mais ampla que este catálogo; sem instruções…
- [awesome-claude-code](#awesome-claude-code) — Recursos curados para Claude Code: slash commands, arquivos CLAUDE.md, hooks, fluxos e ferramentas.
- [awesome-dsh-plugin](#awesome-dsh-plugin) — A lista completa de ~3.900 plugins do DeepSeek Harness. Este catálogo importa os melhores e junta os quase dup…
- [Skill-Seekers skill generator](#skill-seekers) — Kit de ferramentas que converte sites de documentação, repositórios do GitHub, PDFs e outras fontes em skills …
- [Validated skill registry](#tech-leads-club-agent-skills) — Registro seguro e validado de skills para agentes de código profissionais, estendendo Antigravity, Claude Code…
- [Official community plugin mirror](#claude-plugins-community) — Espelho somente leitura do marketplace oficial de plugins da comunidade para Claude Cowork e Claude Code, mant…
- [Claude ecosystem discovery hub](#buildwithclaude) — Hub único para encontrar skills, agentes, comandos, hooks, plugins e coleções de marketplace do ecossistema Cl…
- [Everything Claude Code toolkit](#everything-claude-code) — Toolkit para Claude Code em um único repositório, reunindo agentes, comandos, skills, regras e hooks para dese…
- [Cross-agent skill portability kit](#skillkit) — Ferramenta e conjunto de skills que instala, traduz e compartilha skills de agentes entre Claude Code, Cursor,…
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

<a id="ecc"></a>

### ECC agent harness optimizer

[affaan-m/ECC](https://github.com/affaan-m/ECC) — `Agent Skills` · ★ 262k · Licença: MIT · Funciona com: Todos os clientes

Sistema de otimização de performance para harnesses de agentes de código, reunindo skills, instintos, memória, segurança e desenvolvimento orientado a pesquisa, para Claude Code, Codex, OpenCode e Cursor.

**Alternativas:**

- [ruvnet/ruflo](https://github.com/ruvnet/ruflo) (★ 73k) — Harness multiagente de longa duração que implanta enxames, coordena fluxos autônomos e adiciona memória adaptativa e RAG vetorial.
- [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (★ 26k) — Pacote muito grande com 846 skills, 198 agentes e 282 comandos, cobrindo engenharia, marketing, produto, compliance e pesquisa.
- [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) (★ 47k) — Plano de controle local e agent-first sobre um catálogo com mais de 2.000 skills, com CLI, servidor MCP e workbench de validação próprios.
- [wshobson/agents](https://github.com/wshobson/agents) (★ 40k) — Marketplace de plugins multi-harness reunindo 183 skills, 202 agentes e 105 comandos para Claude Code, Codex, Cursor e outros.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add affaan-m/ECC -a claude-code -g
```

**Codex CLI**

```bash
npx skills add affaan-m/ECC -a codex -g
```

**Gemini CLI**

```bash
npx skills add affaan-m/ECC -a gemini-cli -g
```

**Cursor**

```bash
npx skills add affaan-m/ECC -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add affaan-m/ECC -a github-copilot -g
```

**OpenCode**

```bash
npx skills add affaan-m/ECC -a opencode -g
```

**Cline**

```bash
npx skills add affaan-m/ECC -a cline -g
```

**Windsurf**

```bash
npx skills add affaan-m/ECC -a windsurf -g
```

**Zed**

```bash
npx skills add affaan-m/ECC -a zed -g
```

**Goose**

```bash
npx skills add affaan-m/ECC -a goose -g
```

**Kiro**

```bash
npx skills add affaan-m/ECC -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add affaan-m/ECC -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add affaan-m/ECC -a universal
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

<a id="skill-seekers"></a>

### Skill-Seekers skill generator

[yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) — `Agent Skills` · ★ 15k · Licença: MIT · Funciona com: Todos os clientes

Kit de ferramentas que converte sites de documentação, repositórios do GitHub, PDFs e outras fontes em skills instaláveis para o Claude AI, com detecção automática de conflitos.

**Alternativas:**

- [mgechev/skills-best-practices](https://github.com/mgechev/skills-best-practices) (★ 2.3k) — Adiciona uma skill de metodologia para escrever e validar com LLM skills de nível profissional.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a claude-code -g
```

**Codex CLI**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a codex -g
```

**Gemini CLI**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a gemini-cli -g
```

**Cursor**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a github-copilot -g
```

**OpenCode**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a opencode -g
```

**Cline**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a cline -g
```

**Windsurf**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a windsurf -g
```

**Zed**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a zed -g
```

**Goose**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a goose -g
```

**Kiro**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add yusufkaraaslan/Skill_Seekers -a universal
```

</details>

<a id="tech-leads-club-agent-skills"></a>

### Validated skill registry

[tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) — `Agent Skills` · ★ 6.4k · Licença: ver repo · Funciona com: Todos os clientes

Registro seguro e validado de skills para agentes de código profissionais, estendendo Antigravity, Claude Code, Cursor, Copilot e outros.

**Alternativas:**

- [FrancyJGLisboa/agent-skills-platform](https://github.com/FrancyJGLisboa/agent-skills-platform) (★ 2.4k) — Ideia semelhante cobrindo todo o ciclo de vida da skill: evidência, descoberta, atualizações, rollback e quarentena em 17 plataformas.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add tech-leads-club/agent-skills -a claude-code -g
```

**Codex CLI**

```bash
npx skills add tech-leads-club/agent-skills -a codex -g
```

**Gemini CLI**

```bash
npx skills add tech-leads-club/agent-skills -a gemini-cli -g
```

**Cursor**

```bash
npx skills add tech-leads-club/agent-skills -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add tech-leads-club/agent-skills -a github-copilot -g
```

**OpenCode**

```bash
npx skills add tech-leads-club/agent-skills -a opencode -g
```

**Cline**

```bash
npx skills add tech-leads-club/agent-skills -a cline -g
```

**Windsurf**

```bash
npx skills add tech-leads-club/agent-skills -a windsurf -g
```

**Zed**

```bash
npx skills add tech-leads-club/agent-skills -a zed -g
```

**Goose**

```bash
npx skills add tech-leads-club/agent-skills -a goose -g
```

**Kiro**

```bash
npx skills add tech-leads-club/agent-skills -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add tech-leads-club/agent-skills -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add tech-leads-club/agent-skills -a universal
```

</details>

<a id="claude-plugins-community"></a>

### Official community plugin mirror

[anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) — `Agent Skills` · ★ 4.2k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Espelho somente leitura do marketplace oficial de plugins da comunidade para Claude Cowork e Claude Code, mantido pela Anthropic.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add anthropics/claude-plugins-community -a claude-code -g
```

**Codex CLI**

```bash
npx skills add anthropics/claude-plugins-community -a codex -g
```

**Gemini CLI**

```bash
npx skills add anthropics/claude-plugins-community -a gemini-cli -g
```

**Cursor**

```bash
npx skills add anthropics/claude-plugins-community -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add anthropics/claude-plugins-community -a github-copilot -g
```

**OpenCode**

```bash
npx skills add anthropics/claude-plugins-community -a opencode -g
```

**Cline**

```bash
npx skills add anthropics/claude-plugins-community -a cline -g
```

**Windsurf**

```bash
npx skills add anthropics/claude-plugins-community -a windsurf -g
```

**Zed**

```bash
npx skills add anthropics/claude-plugins-community -a zed -g
```

**Goose**

```bash
npx skills add anthropics/claude-plugins-community -a goose -g
```

**Kiro**

```bash
npx skills add anthropics/claude-plugins-community -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add anthropics/claude-plugins-community -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add anthropics/claude-plugins-community -a universal
```

</details>

<a id="buildwithclaude"></a>

### Claude ecosystem discovery hub

[davepoon/buildwithclaude](https://github.com/davepoon/buildwithclaude) — `Agent Skills` · ★ 3.5k · Licença: MIT · Funciona com: Todos os clientes

Hub único para encontrar skills, agentes, comandos, hooks, plugins e coleções de marketplace do ecossistema Claude em um só lugar.

**Alternativas:**

- [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit) (★ 2.6k) — Índice abrangente reunindo 135 agentes, 35 skills, 42 comandos, mais de 176 plugins, 20 hooks e outros itens em um só toolkit.
- [jeremylongshore/tons-of-skills-marketplace](https://github.com/jeremylongshore/tons-of-skills-marketplace) (★ 2.8k) — Plataforma de skills agnóstica a modelo, com gerenciador de pacotes próprio (ccpi) e uma camada canônica sobre mais de 6.000 skills.
- [composio-community/awesome-claude-plugins](https://github.com/composio-community/awesome-claude-plugins) (★ 2.0k) — Lista curada de plugins que estendem o Claude Code com comandos, agentes, hooks e servidores MCP personalizados.
- [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) (★ 25k) — Coleção focada com mais de 100 subagentes especializados para o Claude Code, cobrindo uma ampla gama de casos de uso de desenvolvimento.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add davepoon/buildwithclaude -a claude-code -g
```

**Codex CLI**

```bash
npx skills add davepoon/buildwithclaude -a codex -g
```

**Gemini CLI**

```bash
npx skills add davepoon/buildwithclaude -a gemini-cli -g
```

**Cursor**

```bash
npx skills add davepoon/buildwithclaude -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add davepoon/buildwithclaude -a github-copilot -g
```

**OpenCode**

```bash
npx skills add davepoon/buildwithclaude -a opencode -g
```

**Cline**

```bash
npx skills add davepoon/buildwithclaude -a cline -g
```

**Windsurf**

```bash
npx skills add davepoon/buildwithclaude -a windsurf -g
```

**Zed**

```bash
npx skills add davepoon/buildwithclaude -a zed -g
```

**Goose**

```bash
npx skills add davepoon/buildwithclaude -a goose -g
```

**Kiro**

```bash
npx skills add davepoon/buildwithclaude -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add davepoon/buildwithclaude -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add davepoon/buildwithclaude -a universal
```

</details>

<a id="everything-claude-code"></a>

### Everything Claude Code toolkit

[WorldFlowAI/everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) — `Agent Skills` · ★ 3.2k · Licença: ver repo · Funciona com: Todos os clientes

Toolkit para Claude Code em um único repositório, reunindo agentes, comandos, skills, regras e hooks para desenvolvimento produtivo assistido por IA.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add WorldFlowAI/everything-claude-code -a claude-code -g
```

**Codex CLI**

```bash
npx skills add WorldFlowAI/everything-claude-code -a codex -g
```

**Gemini CLI**

```bash
npx skills add WorldFlowAI/everything-claude-code -a gemini-cli -g
```

**Cursor**

```bash
npx skills add WorldFlowAI/everything-claude-code -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add WorldFlowAI/everything-claude-code -a github-copilot -g
```

**OpenCode**

```bash
npx skills add WorldFlowAI/everything-claude-code -a opencode -g
```

**Cline**

```bash
npx skills add WorldFlowAI/everything-claude-code -a cline -g
```

**Windsurf**

```bash
npx skills add WorldFlowAI/everything-claude-code -a windsurf -g
```

**Zed**

```bash
npx skills add WorldFlowAI/everything-claude-code -a zed -g
```

**Goose**

```bash
npx skills add WorldFlowAI/everything-claude-code -a goose -g
```

**Kiro**

```bash
npx skills add WorldFlowAI/everything-claude-code -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add WorldFlowAI/everything-claude-code -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add WorldFlowAI/everything-claude-code -a universal
```

</details>

<a id="skillkit"></a>

### Cross-agent skill portability kit

[rohitg00/skillkit](https://github.com/rohitg00/skillkit) — `Agent Skills` · ★ 1.5k · Licença: Apache-2.0 · Funciona com: Todos os clientes

Ferramenta e conjunto de skills que instala, traduz e compartilha skills de agentes entre Claude Code, Cursor, Codex, Copilot e mais de 40 outros agentes a partir de uma única fonte.

**Alternativas:**

- [runkids/skillshare](https://github.com/runkids/skillshare) (★ 2.7k) — Foca em sincronizar com um comando só e compartilhar skills em equipe entre ferramentas de CLI.
- [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager) (★ 4.8k) — Aplicativo desktop com GUI para navegar e organizar skills em mais de 50 ferramentas de código.
- [numman-ali/openskills](https://github.com/numman-ali/openskills) (★ 11k) — Carregador universal e leve de skills, distribuído como pacote npm.

<details><summary>Instalar</summary>

**Claude Code**

```bash
npx skills add rohitg00/skillkit -a claude-code -g
```

**Codex CLI**

```bash
npx skills add rohitg00/skillkit -a codex -g
```

**Gemini CLI**

```bash
npx skills add rohitg00/skillkit -a gemini-cli -g
```

**Cursor**

```bash
npx skills add rohitg00/skillkit -a cursor -g
```

**VS Code (Copilot)**

```bash
npx skills add rohitg00/skillkit -a github-copilot -g
```

**OpenCode**

```bash
npx skills add rohitg00/skillkit -a opencode -g
```

**Cline**

```bash
npx skills add rohitg00/skillkit -a cline -g
```

**Windsurf**

```bash
npx skills add rohitg00/skillkit -a windsurf -g
```

**Zed**

```bash
npx skills add rohitg00/skillkit -a zed -g
```

**Goose**

```bash
npx skills add rohitg00/skillkit -a goose -g
```

**Kiro**

```bash
npx skills add rohitg00/skillkit -a kiro-cli -g
```

**Roo Code**

```bash
npx skills add rohitg00/skillkit -a roo -g
```

**DeepSeek Harness**

```bash
npx skills add rohitg00/skillkit -a universal
```

</details>

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
