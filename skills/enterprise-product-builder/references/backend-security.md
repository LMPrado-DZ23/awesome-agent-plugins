# Backend, Dados, Segurança e Gates

## Design de API

- **Contrato primeiro:** definir o contrato (OpenAPI, schema tipado compartilhado ou equivalente) antes de implementar; gerar tipos e validação a partir dele quando possível.
- Recursos e verbos consistentes; nomes do domínio; `Content-Type` explícito.
- **Modelo único de erro** em toda a API, preferencialmente Problem Details (RFC 9457): `type`, `title`, `status`, `detail`, `instance` + campos de validação por campo. Mensagens seguras para o cliente; detalhes técnicos só no log, ligados por `correlation_id`.
- Códigos HTTP corretos: 400 validação, 401 não autenticado, 403 sem permissão, 404 inexistente ou oculto por autorização, 409 conflito, 422 regra de negócio quando o projeto adotar, 429 limite, 5xx falha do servidor.
- **Paginação:** cursor para listas grandes ou mutáveis; limite máximo imposto pelo servidor; ordenação estável.
- **Idempotência:** operações de criação/pagamento/efeito externo aceitam chave de idempotência (ex.: cabeçalho `Idempotency-Key`) e retornam o mesmo resultado em repetição.
- **Concorrência:** controle otimista (`ETag`/`If-Match` ou coluna de versão) para edição concorrente.
- **Versionamento:** mudanças compatíveis por padrão (adicionar campo opcional); breaking change só com nova versão e período de depreciação comunicado.
- Limites no servidor: tamanho de body, profundidade, número de itens, tempo de execução.
- Timeouts em toda chamada externa; retry com backoff e jitter só para operações idempotentes; circuit breaker quando o risco justificar.

## Dados e migrações

- Modelagem a partir do domínio; constraints no banco (`NOT NULL`, `UNIQUE`, `FOREIGN KEY`, `CHECK`) como última linha de defesa.
- Chaves não sequenciais expostas externamente (UUID/ULID) ou checagem de dono sempre; nunca confiar em ID "difícil de adivinhar" como autorização.
- Índices para consultas reais; verificar plano de execução e N+1.
- Transações para invariantes; isolamento adequado; evitar transação longa com chamada externa dentro.
- **Migrações não destrutivas e compatíveis com deploy gradual (expand/contract):** 1) adicionar estrutura nova; 2) escrever em ambas/backfill; 3) migrar leitura; 4) remover o antigo em deploy posterior, após backup.
- Toda migração revisável, testada em cópia realista e com plano de reversão.
- Soft delete apenas quando houver necessidade de negócio; respeitar retenção e direito de exclusão.
- Timestamps em UTC com fuso explícito; dinheiro em tipo decimal/inteiro de centavos, nunca float.
- Seeds e fixtures sem dados pessoais reais.

## Autenticação

- Preferir provedor de identidade maduro ou biblioteca consolidada; não inventar criptografia nem fluxo de login.
- Senhas com hash lento e salgado (Argon2id, scrypt ou bcrypt conforme OWASP), política baseada em tamanho e verificação contra senhas vazadas.
- MFA ou passkeys (WebAuthn) para contas administrativas e ações sensíveis; reautenticação antes de trocar e-mail, senha, MFA ou dados de pagamento.
- Sessão: cookies `Secure`, `HttpOnly`, `SameSite` adequado, expiração absoluta e por inatividade, rotação após login/elevação, logout que invalida no servidor.
- Tokens: vida curta, escopo mínimo, refresh com rotação e detecção de reuso; nunca em `localStorage` quando cookie seguro for viável.
- Proteção contra enumeração de usuários e força bruta (respostas uniformes, rate limit, bloqueio progressivo).
- Recuperação de conta com token de uso único, expiração curta e notificação ao titular.

## Autorização e multitenancy

- **Deny by default** e menor privilégio; checagem no servidor em cada endpoint, objeto, propriedade e ação.
- Escolher o modelo: RBAC (papéis), ABAC (atributos/políticas) ou autorização relacional (dono, membro, compartilhamento). Centralizar a política em código testável, não espalhada por handlers.
- Allowlist de campos graváveis e legíveis por papel (evita mass assignment e exposição excessiva).
- Multitenancy: `tenant_id` em toda tabela multi-tenant, filtro obrigatório aplicado em camada central (repositório, RLS do banco ou middleware), índice por tenant e testes que provem isolamento entre tenants.
- Ações administrativas e de suporte ("entrar como usuário") auditadas e com justificativa.
- Testar: acesso horizontal (outro usuário/tenant), elevação vertical, campos proibidos, workflow fora de ordem, sessão expirada e recurso excluído.

## Jobs, filas, webhooks e integrações

- Jobs idempotentes, com retry limitado, backoff, dead-letter e visibilidade de falhas.
- Efeitos colaterais após commit (padrão outbox transacional) para não perder nem duplicar eventos.
- Webhooks recebidos: verificar assinatura HMAC com timestamp e tolerância, rejeitar replay, responder rápido e processar assíncrono, deduplicar por ID do evento.
- Webhooks enviados: assinar, reenviar com backoff, permitir rotação de segredo e expor histórico de entregas.
- Integrações atrás de interface própria (ex.: `PaymentGateway.charge()`), com timeout, tratamento de erro e modo degradado definido.
- Custos: limites e alertas para APIs pagas; nunca loop sem limite chamando serviço pago.

## Uploads e arquivos

- Validar tipo real (assinatura do arquivo), extensão permitida, tamanho e quantidade no servidor.
- Renomear no armazenamento; nunca usar nome enviado como caminho.
- Armazenar fora do webroot, em storage dedicado, com URLs assinadas de expiração curta para conteúdo privado.
- Servir com `Content-Type` correto, `Content-Disposition` adequado e `X-Content-Type-Options: nosniff`.
- Varredura de malware quando o risco justificar; remover metadados sensíveis de imagens quando aplicável.
- Processamento pesado (thumbnails, OCR, conversão) em job isolado com limites de CPU/memória/tempo.

## Segurança de aplicação

Usar OWASP ASVS (versão vigente) como contrato de segurança no nível compatível com o rigor do produto. Cobrir:

- HTTPS/HSTS e redirecionamento seguro;
- injeções (SQL/NoSQL/comando/template/LDAP) com queries parametrizadas e APIs seguras;
- XSS com escape contextual do framework, sanitização de HTML permitido e CSP;
- CSRF com tokens ou `SameSite` + verificação de origem para mutações;
- SSRF: allowlist de esquema/destino, bloqueio de redes internas e endpoints de metadados, controle de redirects e egress filtering;
- path traversal e deserialização insegura;
- CORS restrito a origens conhecidas, sem `*` com credenciais;
- CSP: começar em `Report-Only`, depois enforcement com nonces/hashes, sem `unsafe-inline`/`unsafe-eval` quando possível;
- headers: `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, proteção de framing;
- rate limit em login, recuperação, cadastro, operações sensíveis e endpoints caros;
- cache: nunca cachear resposta autenticada em cache compartilhado.

## Secrets e supply chain

- Secrets só em gerenciador de segredos ou variáveis de ambiente do ambiente de execução; `.env` fora do Git; `.env.example` sem valores reais.
- Referenciar segredos por nome/alias; rotação documentada; segredos diferentes por ambiente.
- Secret scan em pre-commit e CI.
- Dependências: lockfile versionado, versões fixadas, auditoria no CI, atualização regular, remoção do que não é usado.
- Nova dependência: fonte oficial, manutenção ativa, licença compatível, checksum/assinatura quando publicados.
- Em L3+: SBOM (CycloneDX ou SPDX) gerado no build e proveniência de artefatos (SLSA) quando a cadeia permitir.
- Imagens de container mínimas, sem root, com scan de vulnerabilidades.

## Logging e auditoria

- Logs estruturados (JSON) com timestamp, nível, evento, `correlation_id`/`trace_id`, ator, recurso, resultado e duração.
- Nunca registrar senha, token, segredo, número completo de cartão, documento ou PII desnecessária; mascarar quando inevitável.
- Trilha de auditoria append-only para ações sensíveis: quem, o quê, quando, onde, antes/depois, resultado.
- Alertas para picos de falha de login, erros 5xx, negações de autorização incomuns e mudanças de permissão.

## Gates

Executar conforme o risco:

- testes de contrato e schema;
- autenticação (login, expiração, logout, recuperação, MFA);
- autorização negativa horizontal, vertical e entre tenants;
- validação e limites (body, paginação, upload, rate limit);
- injeção, XSS, CSRF/CORS, SSRF e path traversal nos pontos aplicáveis;
- idempotência e concorrência nas operações críticas;
- migrações aplicadas e revertidas em ambiente descartável;
- auditoria de dependências, secret scan e verificação de headers/CSP;
- cache de dados autenticados;
- backup e restauração quando aplicável;
- smoke pós-deploy.
