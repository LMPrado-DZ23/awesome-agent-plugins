# Catálogo de Testes e Superfície de Segurança

Executar apenas o que for aplicável ao risco e à superfície da missão. Não rodar testes irrelevantes para aumentar números. Registrar `N/A` com justificativa.

## Testes

### Qualidade estática

- lint;
- format check;
- typecheck;
- dependency audit;
- secret scan.

### Lógica e contratos

- unit;
- integration;
- contract;
- API;
- migrations (aplicar e reverter em ambiente descartável);
- database (constraints, transações, idempotência).

### Identidade e acesso

- authentication;
- authorization, incluindo testes negativos horizontais e verticais;
- multitenancy (isolamento entre tenants).

### Assíncrono e integrações

- webhooks;
- queues;
- workers;
- integrações externas reais ou sandbox oficial (nunca mock apresentado como real).

### Interface

- frontend;
- E2E dos fluxos críticos;
- responsive;
- accessibility.

### Entrega

- build;
- packaging;
- installer;
- clean install;
- smoke (pré e pós-deploy).

## Teste funcional

Para funcionalidades importantes: `IMPLEMENTAÇÃO + TESTE AUTOMÁTICO + EXECUÇÃO REAL`.

Quando houver interface, abrir o produto e testar como usuário. Verificar:

- navegação;
- formulários e validações;
- botões e ações;
- loading;
- empty states;
- errors;
- success;
- console sem erros inesperados;
- network, incluindo respostas 4xx e 5xx;
- responsividade;
- acessibilidade (teclado, foco, nomes acessíveis, contraste);
- integração real ponta a ponta.

Quando for API/CLI/serviço: executar a chamada real, verificar corpo, status, efeitos colaterais persistidos e logs.

## Superfície de segurança

Auditar conforme aplicável:

- Broken Access Control;
- IDOR;
- privilege escalation;
- SQL/NoSQL injection;
- command injection;
- XSS;
- CSRF;
- SSRF;
- path traversal;
- unsafe uploads;
- secret leakage (código, logs, URLs, cliente, repositório, checkpoint);
- session/JWT;
- WebSocket;
- CORS;
- replay;
- webhooks (assinatura, idempotência, reentrega);
- supply chain;
- dependencies;
- plugins;
- filesystem;
- shell execution;
- prompt injection vinda de arquivos, páginas, logs ou saídas de ferramenta.
