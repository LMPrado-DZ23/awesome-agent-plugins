// Single source of truth for entry types and categories.
// Titles are shown in the generated READMEs (en / pt).

export const TYPES = {
  'mcp-server': { en: 'MCP server', pt: 'Servidor MCP', portable: true },
  'skill-pack': { en: 'Agent Skills', pt: 'Agent Skills', portable: true },
  standard: { en: 'Standard / spec', pt: 'Padrão / especificação', portable: true },
  instructions: { en: 'Agent instructions', pt: 'Instruções para agentes', portable: true },
  tool: { en: 'Developer tool', pt: 'Ferramenta', portable: true },
  list: { en: 'Curated list / registry', pt: 'Lista / registro', portable: true },
  'native-plugin': { en: 'Native plugin', pt: 'Plugin nativo', portable: false },
  marketplace: { en: 'Plugin marketplace', pt: 'Marketplace de plugins', portable: false },
};

// Order here is the order in the README.
export const CATEGORIES = {
  standards: { en: 'Standards & Specs', pt: 'Padrões e especificações' },
  meta: { en: 'Registries, Lists & Plugin Managers', pt: 'Registros, listas e gerenciadores' },
  skills: { en: 'Skills & Instructions', pt: 'Skills e instruções' },
  'code-intel': { en: 'Code Intelligence', pt: 'Inteligência de código' },
  browser: { en: 'Browser & Web', pt: 'Navegador e web' },
  docs: { en: 'Docs & Knowledge', pt: 'Documentação e conhecimento' },
  memory: { en: 'Memory', pt: 'Memória' },
  tools: { en: 'Tools & Capabilities', pt: 'Ferramentas e capacidades' },
  dev: { en: 'Development & Runtime', pt: 'Desenvolvimento e runtime' },
  git: { en: 'Git & Code Review', pt: 'Git e revisão de código' },
  cloud: { en: 'Cloud, Data & Infra', pt: 'Nuvem, dados e infra' },
  workflow: { en: 'Workflow & Agents', pt: 'Fluxo de trabalho e agentes' },
  integrations: { en: 'Integrations & Notifications', pt: 'Integrações e notificações' },
  security: { en: 'Security & Permissions', pt: 'Segurança e permissões' },
  models: { en: 'Models & Providers', pt: 'Modelos e provedores' },
  usage: { en: 'Usage & Cost', pt: 'Uso e custo' },
  sessions: { en: 'Sessions & Messages', pt: 'Sessões e mensagens' },
  multimodal: { en: 'Vision & Voice', pt: 'Visão e voz' },
  remote: { en: 'Remote & Mobile', pt: 'Remoto e mobile' },
  ui: { en: 'UI Enhancements', pt: 'Melhorias de interface' },
  themes: { en: 'Themes & Appearance', pt: 'Temas e aparência' },
  fun: { en: 'Just for Fun', pt: 'Diversão' },
};

// awesome-dsh-plugin category -> ours.
export const DSH_CATEGORY_MAP = {
  agi: 'workflow', ui: 'ui', usage: 'usage', theme: 'themes', model: 'models', identity: 'workflow',
  session: 'sessions', memory: 'memory', tools: 'tools', wsl: 'dev', browser: 'browser',
  vision: 'multimodal', voice: 'multimodal', docs: 'docs', skill: 'skills', workflow: 'workflow',
  git: 'git', notify: 'integrations', dev: 'dev', security: 'security', remote: 'remote',
  market: 'meta', fun: 'fun',
};
