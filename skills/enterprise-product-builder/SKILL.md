---
name: enterprise-product-builder
description: "Constrói e evolui produtos digitais frontend, backend e fullstack com padrão de empresa madura: discovery e métricas, arquitetura com ADRs, contratos de API e dados, design system e content design, UX humana, ativos visuais e motion acessível, segurança OWASP ASVS, privacidade LGPD/GDPR, acessibilidade WCAG 2.2 AA, i18n, performance medida, observabilidade com SLOs, CI/CD, rollback e revisão de release. Use para criar ou melhorar aplicações web, SaaS, dashboards, portais, marketplaces, painéis internos e APIs com qualidade profissional e evidência real."
---

# Enterprise Product Builder

## Objetivo

Construir produtos que pareçam feitos por uma equipe experiente de produto, design, engenharia, segurança e operação — não apenas interfaces bonitas. Tratar **clareza, confiança, acessibilidade, segurança, privacidade, performance, consistência, operabilidade e comportamento real** como requisitos de primeira classe.

Para missões com várias etapas, checkpoints, delegação ou auditoria final, executar esta skill **dentro** do `super-autonomous-mission-loop`: esta skill define *o que é qualidade de produto*; o loop define *como convergir até ela com evidência*.

## Princípios não negociáveis

1. **Produto antes de código:** entender usuário, problema, fluxo crítico, conteúdo, estados e métrica de sucesso antes de implementar.
2. **Contexto do projeto manda:** stack, arquitetura e regras fixadas em `CLAUDE.md`, `AGENTS.md`, ADRs e README não se reabrem sem evidência nova.
3. **Menor sistema que resolve:** nada de microserviços, filas ou abstrações "de empresa" sem necessidade medida.
4. **Frontend e backend são um sistema:** contrato, validação, autorização, estados de erro e observabilidade são definidos juntos.
5. **Segurança e privacidade no servidor:** nunca confiar em botão oculto, ID do cliente, role no front ou validação só no navegador. Coletar o mínimo de dados pessoais.
6. **Acessível por padrão:** HTML semântico, teclado, foco, nomes acessíveis e WCAG 2.2 AA; ARIA só quando o HTML nativo não resolve.
7. **Design com intenção:** tokens, tipografia, hierarquia e linguagem visual definidas antes de espalhar estilo; motion comunica, não enfeita.
8. **Evidência antes de afirmação:** verificar no navegador, API, banco, logs e testes; build verde ou tela bonita não provam nada.
9. **Operável desde o primeiro deploy:** logs, métricas, alertas, rollback e runbook fazem parte da feature.
10. **Humanidade sem aleatoriedade:** decisões específicas do domínio, microcopy útil, estados vazios honestos; evitar o "template genérico de IA".

## Níveis de rigor

Escolher e registrar o nível no início. Ele calibra profundidade, não permite pular segurança básica.

| Nível | Quando | Exigência mínima |
|---|---|---|
| **L1 — Protótipo/validação** | Prova de conceito, uso descartável, sem dados reais | Fluxo principal funcional, estados básicos, sem secrets no código, sem dados pessoais reais |
| **L2 — Produto interno/MVP** | Usuários reais limitados, dados reais | L1 + autenticação/autorização server-side, validação, testes dos fluxos críticos, logs estruturados, backup, WCAG AA nos fluxos principais |
| **L3 — Produção/cliente externo** | Clientes pagantes, dados sensíveis, SLA | L2 + ASVS aplicável, privacidade/LGPD, SLOs e alertas, CI/CD com gates, rollback testado, auditoria de acessibilidade e segurança, runbooks |
| **L4 — Regulado/crítico** | Saúde, finanças, jurídico, alto impacto | L3 + DPIA/RIPD, trilha de auditoria imutável, revisão de segurança independente, testes de restauração e DR periódicos, controle de mudança formal |

Na dúvida entre dois níveis, usar o mais alto para segurança e privacidade e o mais baixo para cerimônia de processo.

## Workflow

Cada fase tem entregável. Em L1 os entregáveis podem ser curtos; nunca inexistentes. Templates em [`templates/`](templates/).

### Fase 0 — Contexto e restrições

Ler `CLAUDE.md`, `AGENTS.md`, ADRs, README, `package.json`/lockfiles, CI, `.env.example` e estrutura do repositório. Identificar stack fixada, convenções, design system existente, componentes e endpoints reutilizáveis, regras de segurança e de deploy. Não reimplementar o que existe.

**Entregável:** resumo de contexto com stack, restrições, o que reaproveitar e o nível de rigor.

### Fase 1 — Discovery e brief

Definir problema, público e job-to-be-done, tarefas principais, fora de escopo, modelo de negócio, plataformas, permissões, conteúdo, integrações, dados sensíveis, ações de alto impacto e **métrica de sucesso** (ativação, conversão, tempo de tarefa, horas economizadas, erro evitado). Escrever critérios de aceite observáveis (formato Dado/Quando/Então quando útil). Ambiguidade de baixo risco: decidir e documentar.

**Entregável:** [`templates/product-brief.md`](templates/product-brief.md). Detalhes em [`references/product-discovery-and-content.md`](references/product-discovery-and-content.md).

### Fase 2 — Arquitetura e decisões

Escolher a menor arquitetura que atende o produto. Documentar fronteiras frontend/backend, modelo de domínio, contratos, autenticação, modelo de autorização (RBAC/ABAC/relacional), multitenancy, estados de workflow, uploads, jobs, cache, integrações externas, observabilidade e estratégia de evolução. Registrar cada decisão relevante e irreversível como ADR.

**Entregável:** diagrama simples + ADRs ([`templates/adr.md`](templates/adr.md)).

### Fase 3 — Especificação de feature (antes do código)

Para cada feature relevante, produzir: modelo de dados e migração, contrato de entrada/saída e erros, matriz de autorização, ameaças (STRIDE leve ou abuse cases), estados de UI, critérios WCAG, eventos de analytics e logs, testes, flag/rollout e plano de rollback.

**Entregável:** [`templates/feature-spec.md`](templates/feature-spec.md). Contratos, dados e segurança em [`references/backend-security.md`](references/backend-security.md).

### Fase 4 — Direção visual, design system e conteúdo

Escolher uma direção deliberada conforme o domínio (editorial, técnico, premium, utilitário, acolhedor, industrial…). Registrar:

- paleta semântica para superfície, texto, borda, ação, foco, sucesso, aviso e erro, com contraste verificado;
- tokens em camadas (referência → semânticos → componente) para cor, tipografia, espaço, radius, sombra, grid, breakpoints, foco, densidade, tema claro/escuro e RTL quando aplicável;
- estados de componente: default, hover, active, focus-visible, disabled, loading, empty, error, success, read-only;
- padrões de formulário, tabela/dados, navegação, feedback e confirmação de ação destrutiva;
- regras de imagem, ícone, ilustração, fotografia e recorte;
- voz e tom, labels, mensagens de erro acionáveis, chamadas para ação e textos de estado vazio.

Reaproveitar o design system do projeto quando existir; estender em vez de criar paralelo.

**Entregável:** tokens + inventário de componentes + guia de conteúdo. Detalhes em [`references/frontend-design-system.md`](references/frontend-design-system.md).

### Fase 5 — Implementação vertical

Implementar primeiro **um fluxo completo de alto valor**: rota/tela, loading, empty, error, success, autorização, API, persistência, logs, métricas e teste. Só depois extrair padrões e escalar para outras telas. Não construir dez telas estáticas sem provar um fluxo real.

Frontend: componentes pequenos, estado mínimo, dados unidirecionais, fronteira clara servidor/cliente, formulários com validação no cliente **e** no servidor. Backend: validar todo input, autorizar em cada requisição e objeto, limitar recursos, transações e idempotência em operações críticas, erros úteis sem vazar detalhes internos.

### Fase 6 — Imagens, ícones e ativos

Escolher o ativo pelo trabalho que ele faz: conversão, explicação, confiança, identidade ou hierarquia. Geração visual para conceitos, mockups e ilustração; assets oficiais/licenciados quando a marca exige precisão; SVG/CSS/dados determinísticos para ícones, diagramas e gráficos.

Para cada imagem: propósito, composição, proporção, safe area, estilo, paleta, texto exato, variações responsivas, `alt` (ou `alt=""` se decorativa), formato moderno, dimensões reservadas, lazy loading fora da dobra, fallback e armazenamento correto (storage/CDN em vez de mídia pesada no repositório). Respeitar direitos de uso.

### Fase 7 — Motion e sensação de qualidade

Definir motion tokens por intenção (feedback, entrada/saída, continuidade espacial). Transições curtas, interrompíveis e consistentes; `transform`/`opacity`; nada de animar layout. Respeitar `prefers-reduced-motion: reduce`: remover parallax, zoom, slide e loops decorativos. Nenhum conteúdo pode depender só da animação. Proibido autoplay, loop infinito ou piscar sem necessidade e controle.

### Fase 8 — Segurança e privacidade

Usar OWASP ASVS (versão vigente) como contrato de requisitos no nível compatível com o rigor, e OWASP API Security Top 10 e WSTG para riscos e testes. Cobrir HTTPS/HSTS, sessão, MFA/passkeys e reautenticação em ações sensíveis, cookies seguros, autorização por objeto/propriedade/função/tenant, allowlist de campos, validação, queries parametrizadas, XSS, CSRF, SSRF, uploads, CORS, CSP, headers, rate limit, secrets, dependências, supply chain e logs sem dados sensíveis.

Privacidade (LGPD/GDPR quando aplicável): mapear dados pessoais e finalidade, base legal, minimização, retenção e descarte, consentimento quando necessário, direitos do titular (acesso, correção, exclusão, portabilidade), dados sensíveis, transferência internacional, operadores/terceiros e PII fora de logs, analytics e ambientes de teste.

**Entregável:** ameaças e controles por feature; inventário de dados pessoais em L2+. Detalhes em [`references/backend-security.md`](references/backend-security.md) e [`references/reliability-delivery-privacy.md`](references/reliability-delivery-privacy.md).

### Fase 9 — Acessibilidade e internacionalização

WCAG 2.2 AA como baseline operacional: semântica, headings, landmarks, labels, nome/papel/estado/valor, foco visível e não obstruído, ordem de teclado, skip link, alvos de toque adequados, padrões WAI-ARIA APG para modais, tabs, menus, comboboxes e grids, erros associados ao campo, mensagens de status, contraste, zoom/reflow e reduced motion. Automação (axe, Lighthouse) é gate de regressão, não prova de conformidade: complementar com teclado, leitor de tela e revisão humana.

i18n: nenhum texto de interface hardcoded quando houver mais de um idioma previsto; formatos de data, número, moeda e fuso via APIs de locale; plural e gênero corretos; layout tolerante a expansão de texto; `lang` correto; RTL quando aplicável. Mesmo em produto de um idioma, usar formatação por locale (`pt-BR`) e fuso explícito.

### Fase 10 — Performance e observabilidade

Medir em laboratório e em campo. Metas iniciais no percentil 75, segmentadas por dispositivo: **LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1**; ajustar ao negócio. Definir orçamento de bundle, imagens e fontes. Backend: latência p50/p95/p99, taxa de erro, saturação, filas, consultas lentas e custo.

Otimizar somente após observar: imagens, fontes, code splitting, SSR/streaming, cache, paginação, payloads, índices e N+1. Instrumentar com logs estruturados e correlacionados, métricas e traces (OpenTelemetry quando possível). Em L3+, definir SLIs/SLOs dos fluxos críticos com alertas acionáveis e runbooks.

### Fase 11 — Qualidade e testes

Pirâmide proporcional ao risco: unit para lógica pura (regras, validadores, state machines, políticas), integração com banco/serviços reais ou containers, contrato de API, autorização negativa (horizontal, vertical, tenant), E2E apenas dos fluxos críticos, acessibilidade automatizada nas telas principais, regressão visual quando o design system for crítico, testes de migração e de carga quando houver risco de escala. Toda feature nova nasce com teste. Nada de mock em código de produção.

### Fase 12 — Entrega e operação

CI com lint, typecheck, testes, build, auditoria de dependências e secret scan. Ambientes separados com configuração por variáveis de ambiente e `.env.example` versionado. Migrações compatíveis com deploy gradual (expand/contract). Feature flags para mudanças arriscadas; rollout gradual quando possível; rollback testado. Backup com restauração testada, RPO/RTO definidos em L3+. Runbook para incidentes previsíveis. Smoke pós-deploy.

**Entregável:** pipeline, plano de rollout/rollback e runbook. Detalhes em [`references/reliability-delivery-privacy.md`](references/reliability-delivery-privacy.md).

### Fase 13 — Revisão humana e release

Abrir o produto e usá-lo como uma pessoa real, em desktop e mobile, com teclado, rede lenta e dados realistas. Fazer três revisões independentes antes do release:

- **Produto/UX/Conteúdo:** clareza, fluxos, navegação, estados, confiança, microcopy e acabamento visual.
- **Engenharia/Operação:** arquitetura, contratos, dados, erros, testes, performance, observabilidade, rollback e manutenção.
- **Segurança/Privacidade/Acessibilidade:** ameaças, autorização, secrets, dependências, dados pessoais, teclado, foco, semântica e WCAG.

Registrar cada achado com evidência, severidade, impacto, reprodução, correção e teste de regressão. Corrigir causa raiz. Consolidar em [`templates/release-review.md`](templates/release-review.md).

## Anti-padrões proibidos

- Tela bonita sem fluxo real funcionando ponta a ponta.
- Gradiente genérico, glassmorphism, ícones e ilustrações aleatórias sem relação com o domínio.
- Lorem ipsum, dados falsos ou botões sem função entregues como produto.
- Autorização só no frontend; ID sequencial exposto sem checagem de dono.
- Mensagem de erro técnica para o usuário ou erro engolido em silêncio.
- Spinner infinito sem timeout, retry ou estado de erro.
- `div` clicável no lugar de `button`/`a`; foco removido; contraste insuficiente.
- Secrets no cliente, no repositório, em URL ou em log.
- Dados pessoais em analytics, logs ou ambiente de teste sem necessidade.
- Migração destrutiva sem plano de expand/contract e backup.
- Otimização "de performance" sem medição antes e depois.

## Checklist de pronto

- [ ] Nível de rigor registrado e exigências mínimas atendidas.
- [ ] Brief, critérios de aceite e métrica de sucesso definidos.
- [ ] Fluxos críticos funcionam com dados reais e estados loading/empty/error/success.
- [ ] Frontend e backend têm contratos, validação e tratamento de falhas coerentes; erros seguem um modelo único.
- [ ] Autorização testada negativamente por objeto, propriedade, função e tenant quando aplicável.
- [ ] Secrets fora do código, cliente, logs, URLs e repositório; `.env.example` atualizado.
- [ ] Dados pessoais mapeados, minimizados, com retenção definida e fora de logs/analytics (L2+).
- [ ] Design tokens e componentes do sistema usados; sem hardcodes visuais soltos.
- [ ] Imagens com propósito, responsividade, alt/fallback, dimensões reservadas e armazenamento correto.
- [ ] Motion com fallback sem movimento e sem jank.
- [ ] Teclado, foco, contraste, zoom/reflow, leitor de tela e mensagens de status verificados.
- [ ] Textos e formatos por locale; sem strings hardcoded quando houver i18n previsto.
- [ ] Lint, tipos, testes relevantes, segurança e build passaram; `N/A` justificado.
- [ ] Core Web Vitals e métricas de backend com orçamento ou plano de medição; SLOs em L3+.
- [ ] Logs estruturados, métricas, alertas e runbook dos fluxos críticos.
- [ ] Migrações reversíveis/compatíveis, rollback e backup/restauração verificados.
- [ ] Três revisões sem achados `CRITICAL` ou `HIGH` abertos.
- [ ] Release, artefatos, configuração e destino verificados; smoke pós-deploy executado.

## Integração com o super-autonomous-mission-loop

| Gate do loop | Evidência exigida por esta skill |
|---|---|
| `lint` / `typecheck` | Saída real dos comandos do projeto |
| `unit` / `integration` | Lógica pura, banco/serviços reais, autorização negativa |
| `security` | Ameaças por feature, ASVS aplicável, dependências, secrets, privacidade |
| `build` | Build de produção limpo e reproduzível |
| `functional_acceptance` | Fluxo vertical executado no navegador/API com dados reais + a11y + responsivo |
| `final_audit` | `templates/release-review.md` com as três revisões |

## Referências

Ler quando a fase exigir:

- [`references/product-discovery-and-content.md`](references/product-discovery-and-content.md): brief, JTBD, métricas, critérios de aceite, analytics e content design.
- [`references/frontend-design-system.md`](references/frontend-design-system.md): tokens, temas, componentes, formulários, dados, imagens, motion, acessibilidade, i18n e performance visual.
- [`references/backend-security.md`](references/backend-security.md): API e erros, dados e migrações, autenticação, autorização, multitenancy, jobs, webhooks, uploads, segurança e gates.
- [`references/reliability-delivery-privacy.md`](references/reliability-delivery-privacy.md): CI/CD, ambientes, rollout, rollback, backup/DR, SLOs, incidentes, custos e LGPD/GDPR.
- [`references/official-sources.md`](references/official-sources.md): fontes primárias dos critérios.

## Templates

- [`templates/product-brief.md`](templates/product-brief.md)
- [`templates/feature-spec.md`](templates/feature-spec.md)
- [`templates/adr.md`](templates/adr.md)
- [`templates/release-review.md`](templates/release-review.md)

## Skills complementares (quando instaladas)

- `super-autonomous-mission-loop`: execução persistente, checkpoints, anti-loop, delegação, auditoria final e release.
- MCP `dz23-subagents` (4.0.0), quando conectado: `swarm_run` com papéis `architect`, `backend`, `frontend`, `security` e `qa` para revisar brief, especificação ou diff; `consensus` para ADRs e decisões de stack; `memory_checkpoint` para registrar decisões e critérios de aceite na missão. As respostas são propostas em texto: a evidência dos gates continua sendo o que o harness executa.
- `anthropic-skills:frontend-design` / `design` / `anthropic-skills:ui-ux-pro-max`: direção visual, mockups e interfaces.
- `anthropic-skills:web-design-guidelines` e `design:accessibility-review`: revisão de UI e acessibilidade.
- `dataviz` / `data:analyze`: gráficos, dashboards e análise de métricas.
- `engineering:system-design` / `engineering:architecture`: arquitetura e ADRs.
- `security-review`: revisão de segurança do diff.

Se uma skill listada não existir no ambiente, seguir esta skill e as referências normalmente.

<!-- v2 (2026-09-15): níveis de rigor, discovery, especificação de feature, dados/API, privacidade LGPD, i18n, SLOs, CI/CD e rollout, anti-padrões, templates e integração com o loop. 2026-09-16: uso do DZ23 Subagents MCP 4.0.0. Base original criada a partir de fontes oficiais em 2026-09-15. -->
