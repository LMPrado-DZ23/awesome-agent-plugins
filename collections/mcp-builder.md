# Building your own MCP servers and skills · Criando seus próprios servidores MCP e skills

[← README](../README.md) · [← README pt-BR](../README.pt-BR.md)

> The specs, an inspector to debug servers, a Python framework, and the CLI to publish/install skills.
>
> As especificações, um inspetor para depurar servidores, um framework Python e o CLI para publicar/instalar skills.

```bash
npx github:LMPrado-DZ23/awesome-agent-plugins collection mcp-builder --client <client-id>
```

| Entry | Type | EN | PT |
|---|---|---|---|
| [Model Context Protocol](../catalog/standards.md#model-context-protocol) | Standard / spec | Specification and documentation for MCP, the open protocol every client in this list uses to connect agents to tools, data and prompts. | Especificação e documentação do MCP, o protocolo aberto que todos os clientes desta lista usam para conectar agentes a ferramentas, dados e prompts. |
| [Agent Skills](../catalog/standards.md#agent-skills-spec) | Standard / spec | Specification for Agent Skills: a folder with a SKILL.md (name, description, instructions) plus optional scripts and resources that an agent loads on demand. | Especificação das Agent Skills: uma pasta com SKILL.md (nome, descrição, instruções) e scripts/recursos opcionais que o agente carrega sob demanda. |
| [AGENTS.md](../catalog/standards.md#agents-md) | Standard / spec | Open Markdown format for project instructions to coding agents (setup, build, test, conventions). Read by Codex, Cursor, OpenCode, Zed, Windsurf, DeepSeek Harness and others. | Formato Markdown aberto para instruções de projeto a agentes de código (setup, build, testes, convenções). Lido por Codex, Cursor, OpenCode, Zed, Windsurf, DeepSeek Harness e outros. |
| [MCP Inspector](../catalog/dev.md#mcp-inspector) | Developer tool | Visual testing tool for MCP servers: connect over stdio or HTTP, list and call tools, resources and prompts. Run with `npx @modelcontextprotocol/inspector`. | Ferramenta visual para testar servidores MCP: conecta via stdio ou HTTP, lista e chama tools, resources e prompts. Rode com `npx @modelcontextprotocol/inspector`. |
| [FastMCP](../catalog/dev.md#fastmcp) | Developer tool | Pythonic framework for building MCP servers and clients with decorators, auth, proxying and testing utilities. | Framework Python para criar servidores e clientes MCP com decorators, autenticação, proxy e utilitários de teste. |
| [skills (npx skills)](../catalog/meta.md#skills-cli) | Developer tool | CLI that installs, updates, lists and removes Agent Skills from any Git source into 75+ agents (Claude Code, Codex, Cursor, Gemini CLI, OpenCode…). Used by this catalog for skill installs. | CLI que instala, atualiza, lista e remove Agent Skills de qualquer fonte Git em mais de 75 agentes (Claude Code, Codex, Cursor, Gemini CLI, OpenCode…). Usado por este catálogo para instalar skills. |
| [MCP Registry](../catalog/meta.md#mcp-registry) | Curated list / registry | Official community-driven registry service for MCP servers, with a public API for discovering published servers and their install metadata. | Serviço de registro oficial e comunitário de servidores MCP, com API pública para descobrir servidores publicados e seus metadados de instalação. |
