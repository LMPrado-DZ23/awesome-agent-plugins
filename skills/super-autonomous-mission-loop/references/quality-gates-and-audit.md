# Quality Gates and Audit

## Registro de gate

Usar uma tabela ou lista com estes campos:

| Gate | Status | Evidência | Escopo | Observações |
|---|---|---|---|---|
| lint | PASS/FAIL/N/A | comando e saída | arquivos relevantes | justificativa |
| typecheck | PASS/FAIL/N/A | comando e saída | pacote/projeto | justificativa |
| unit | PASS/FAIL/N/A | comando e relatório | suíte | cobertura não substitui relevância |
| integration | PASS/FAIL/N/A | comando e relatório | serviços envolvidos | ambiente usado |
| security | PASS/FAIL/N/A | ferramenta/revisão | superfície | riscos residuais |
| build | PASS/FAIL/N/A | artefato/hash | ambiente | reprodutibilidade |
| functional_acceptance | PASS/FAIL/N/A | fluxo executado | usuário/rota/API | evidência real |
| final_audit | PASS/FAIL/N/A | relatório | missão inteira | achados |

`N/A` exige justificativa específica. Não usar contagem de testes como prova isolada de qualidade. Vincular cada resultado ao commit exato ou a um snapshot identificável da worktree.

## Três auditores independentes

Executar as três revisões sem que um auditor veja as conclusões dos outros antes de terminar.

### Auditor A — Architect / Engineering

Arquitetura, código, contratos e integrações, concorrência, performance, manutenção, testes, observabilidade, recovery, packaging e instalação.

### Auditor B — Security / DevSecOps

Revisão ofensiva de autenticação, autorização (horizontal e vertical), multitenancy, secrets, filesystem, execução de comandos, injection, rede e gateway, CORS/CSRF/SSRF, uploads, plugins, dependências, CI/CD, instaladores e supply chain.

### Auditor C — Product / QA / UX

Usar o produto de verdade: fluxos principais, clareza da interface, acessibilidade, responsividade, estados de loading/vazio/erro/sucesso, mensagens, integrações reais, funcionalidades incompletas e qualidade visual.

## Achado de auditoria

Consolidar em `audit/FINAL_THREE_AGENT_REVIEW.md`. Para cada achado, registrar:

- origem: Auditor A, B ou C;
- severidade: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `IMPROVEMENT` ou `FALSE_POSITIVE`;
- claim e evidência reproduzível;
- causa provável e impacto;
- pré-condições e passos de reprodução;
- correção proposta/aplicada;
- teste de regressão;
- resultado após correção;
- risco residual e responsável, se aplicável.

## Fix loop final

`CANDIDATE_COMPLETED → FIXING → RETESTING → FINAL_AUDIT`

1. Corrigir pela causa raiz, começando por `CRITICAL` e `HIGH`.
2. Executar regression testing dos pontos afetados.
3. Pedir ao auditor que encontrou o problema para verificar a correção.
4. Repetir até atingir os gates. Aplicar os limites anti-loop da missão também aqui.

## Critério de aprovação

Aprovar somente com critérios de aceite satisfeitos, sem blockers internos, sem `CRITICAL` ou `HIGH`, e com os gates aplicáveis passando. Um achado `MEDIUM` ou `LOW` pode permanecer apenas se não violar critério de aceite, estiver documentado como risco aceito por autoridade apropriada e não mascarar um problema maior.

## Checklist de release

Quando publicação fizer parte da missão:

1. verificar source tree, branch, remote de destino e diff;
2. executar todos os gates aplicáveis;
3. gerar build limpo;
4. gerar artefatos esperados;
5. verificar artefatos (conteúdo, tamanho, configuração sem secrets);
6. executar smoke e clean install quando aplicável;
7. calcular hashes quando úteis;
8. publicar **somente** no destino autorizado e com autorização válida para aquele escopo;
9. verificar a publicação (download/instalação/endpoint/versão efetivamente servida);
10. registrar horário, versão/commit, hashes, destino e resultado da verificação pós-release.

Publicação sem verificação não é conclusão.
