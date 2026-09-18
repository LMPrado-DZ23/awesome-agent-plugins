# Entrega, Confiabilidade, Operação e Privacidade

## Ambientes e configuração

- Ambientes separados (desenvolvimento, teste/staging, produção) com dados e segredos distintos.
- Configuração somente por variáveis de ambiente ou serviço de configuração; nada de caminho absoluto ou valor hardcoded.
- `.env.example` versionado e atualizado a cada nova variável, sem valores reais.
- Staging o mais parecido possível com produção em versão de runtime, banco e integrações (sandbox oficial).
- Dados de produção não copiados para ambientes inferiores sem anonimização.

## CI/CD

Pipeline mínima por mudança:

1. instalação limpa com lockfile;
2. lint e format check;
3. typecheck;
4. testes unitários e de integração;
5. build de produção;
6. auditoria de dependências e secret scan;
7. testes de acessibilidade e E2E dos fluxos críticos quando o projeto tiver;
8. artefato imutável e versionado (hash/tag);
9. deploy em staging + smoke;
10. promoção do **mesmo** artefato para produção.

Regras: branch principal protegida, revisão obrigatória conforme o projeto, CI verde antes do merge, sem deploy manual fora do pipeline em L3+.

## Rollout e rollback

- Feature flags para mudanças arriscadas, com dono e data de remoção.
- Rollout gradual (percentual, grupo interno primeiro, canário ou blue/green) quando a infraestrutura permitir.
- Migrações expand/contract para que versão nova e antiga convivam durante o deploy.
- Rollback definido **antes** do deploy: artefato anterior disponível, flag para desligar, migração reversível ou compatível.
- Critérios objetivos para abortar rollout (taxa de erro, latência, métrica de negócio).
- Smoke pós-deploy automatizado nos fluxos críticos.

## Backup e recuperação de desastre

- Backups automáticos, criptografados, com cópia fora da mesma conta/região quando o nível exigir.
- **Restauração testada** periodicamente; backup nunca testado não conta como backup.
- Definir RPO (quanto dado pode ser perdido) e RTO (quanto tempo fora do ar) em L3+.
- Procedimento de restauração documentado passo a passo.
- Nunca sobrescrever ou remover backup como parte de deploy ou limpeza.

## SLIs, SLOs e alertas

- SLIs dos fluxos críticos: disponibilidade (requisições bem-sucedidas / total), latência (p95/p99 abaixo de limite), correção (jobs concluídos sem erro), frescor de dados quando aplicável.
- SLOs realistas por jornada (ex.: 99,5% dos logins em menos de 1 s por 28 dias); orçamento de erro usado para decidir entre velocidade de entrega e estabilidade.
- Alertas acionáveis baseados em sintomas percebidos pelo usuário e consumo acelerado do orçamento de erro, não em cada métrica interna.
- Todo alerta tem dono, severidade e runbook.
- Dashboards por serviço: tráfego, erros, latência, saturação (sinais dourados).

## Incidentes e runbooks

- Runbook por falha previsível: sintoma, impacto, diagnóstico, mitigação, rollback, comunicação e escalonamento.
- Incidente: estabilizar primeiro, investigar depois; registrar linha do tempo.
- Pós-incidente sem culpados com causa raiz, fatores contribuintes e ações com dono e prazo.
- Página de status ou comunicação ao cliente definida para L3+.

## Custo e capacidade

- Estimar custo por usuário/tenant/requisição para infraestrutura e APIs pagas.
- Limites, quotas e alertas de gasto para serviços pagos e de IA.
- Testes de carga proporcionais ao risco antes de lançamentos grandes.
- Escalar com base em métricas observadas, não em suposição.

## Privacidade e proteção de dados (LGPD/GDPR)

Aplicar sempre que houver dados pessoais. Não é aconselhamento jurídico: em L3/L4 envolver o responsável jurídico/DPO.

### Mapeamento

- Inventário de dados pessoais: quais dados, de quem, para qual finalidade, onde ficam, quem acessa, por quanto tempo, com quem são compartilhados.
- Identificar dados sensíveis (saúde, biometria, origem racial ou étnica, religião, opinião política, vida sexual, dados genéticos) e dados de crianças e adolescentes: exigem cuidado reforçado.
- Registrar a base legal de cada tratamento (consentimento, execução de contrato, obrigação legal, legítimo interesse etc.).

### Por design

- Minimização: coletar só o necessário para a finalidade declarada.
- Retenção definida por tipo de dado e descarte automático ao fim do prazo.
- Pseudonimização/anonimização para analytics, testes e relatórios.
- Criptografia em trânsito e em repouso; controle de acesso por necessidade.
- PII fora de logs, URLs, mensagens de erro, analytics e ferramentas de terceiros não autorizadas.
- Consentimento granular, registrado, revogável e tão fácil de retirar quanto de dar, quando for a base legal.
- Cookies e rastreadores não essenciais só com consentimento quando exigido.

### Direitos do titular

Implementar ou ter processo para: confirmação e acesso, correção, anonimização/bloqueio/eliminação, portabilidade, informação sobre compartilhamento, revogação de consentimento e revisão de decisões automatizadas quando aplicável. Exclusão precisa alcançar backups e terceiros conforme política de retenção documentada.

### Governança

- Operadores e fornecedores com contrato e avaliação de segurança; transferência internacional avaliada.
- Relatório de impacto (RIPD/DPIA) para tratamentos de alto risco (L4 e dados sensíveis em escala).
- Plano de resposta a incidente de segurança com dados pessoais, incluindo avaliação de comunicação à autoridade e aos titulares nos prazos aplicáveis.
- Política de privacidade clara, atualizada e coerente com o que o sistema realmente faz.
