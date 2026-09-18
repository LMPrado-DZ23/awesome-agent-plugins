# Feature Spec — [Nome da feature]

- **Brief relacionado:**
- **Nível de rigor:**
- **Status:** rascunho / aprovado / implementado

## 1. Resumo

O que a feature faz, para quem e qual critério de aceite principal ela satisfaz.

## 2. Modelo de dados

| Entidade/tabela | Campos novos/alterados | Constraints e índices | Dados pessoais? | Retenção |
|---|---|---|---|---|
| | | | | |

**Migração (expand/contract):**

1. Expand:
2. Backfill/dupla escrita:
3. Migrar leitura:
4. Contract (deploy posterior):

**Reversão da migração:**

## 3. Contrato de API

| Método e rota | Entrada (validação) | Saída | Erros (status + type) | Idempotência | Paginação |
|---|---|---|---|---|---|
| | | | | | |

## 4. Matriz de autorização

| Ação | Anônimo | Usuário | Dono | Admin do tenant | Outro tenant | Suporte |
|---|---|---|---|---|---|---|
| | | | | | | |

Campos graváveis e legíveis por papel:

## 5. Ameaças e controles

| Ameaça/abuso | Impacto | Controle | Teste que prova |
|---|---|---|---|
| | | | |

## 6. Estados de interface

| Tela/componente | Loading | Empty | Error | Success | Sem permissão | Outros |
|---|---|---|---|---|---|---|
| | | | | | | |

Microcopy principal (botões, erros, estado vazio):

## 7. Acessibilidade

- Padrões APG usados:
- Teclado e foco:
- Mensagens de status:
- Critérios WCAG com atenção especial:

## 8. Observabilidade e analytics

- Logs (eventos, sem PII):
- Métricas/SLI afetados:
- Alertas:
- Eventos de analytics (`objeto_ação`, propriedades):

## 9. Testes

- Unit:
- Integração:
- Contrato:
- Autorização negativa:
- E2E:
- Acessibilidade:
- Performance/carga (se aplicável):

## 10. Rollout e rollback

- Feature flag:
- Estratégia de rollout:
- Critério para abortar:
- Plano de rollback:

## 11. Questões em aberto

- 
