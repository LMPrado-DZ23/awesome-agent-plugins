# Mission State Template

Copiar e adaptar para `audit/AUTONOMOUS_MISSION_STATE.md` (ou `.agent/AUTONOMOUS_MISSION_STATE.md`).

```yaml
mission_id: "YYYYMMDD-HHMM-slug"
objective: ""
scope:
  in: []
  out: []
acceptance_criteria: []
gates:            # lint/typecheck/unit/integration/security/build/functional_acceptance/final_audit
  required: []
  not_applicable: []   # cada item com justificativa
delivery_destination: ""   # branch/remote/registry/ambiente autorizado
approvals_required: []
budget:
  max_equivalent_attempts: 3
  max_attempts_without_progress: 5
  max_parallel_agents: 0
  task_timeout: ""
  no_progress_timeout: ""
  api_or_cost_limit: ""
rollback_plan: ""

state: MISSION_CREATED
iteration: 0
started_at: ""
heartbeat_at: ""
last_progress_at: ""

repository:
  path: ""
  branch: ""
  upstream: ""
  remotes: []
  head: ""
  uncommitted_changes: false

watchdog:
  executor_pid: null
  restarts: 0
  last_exit_status: null

current_task: ""
current_failure: ""
current_strategy: ""
plan: []
completed_tasks: []
pending_tasks: []
dependencies: []
blockers: []            # BLOCKED_BY_EXTERNAL_DEPENDENCY: tarefa, motivo, evidência, informação necessária, impacto
approvals_pending: []
hypotheses: []
decisions: []           # decisão + motivo
strategies_tried: []
discarded_hypotheses: []

attempt_count: 0
same_failure_count: 0
tests_passed_delta: 0
tests_failed_delta: 0
completed_tasks_delta: 0
files_changed: []
commands_and_tests: []
evidence: []
commits: []
artifacts: []
delegated_agents: []    # papel, objetivo, arquivos permitidos, resultado, evidência
audits: []
risks: []

context_summary: ""     # resumo factual para retomada após compactação/troca de sessão
next_action: ""
resume_instructions: ""
```

## Atualização

Atualizar o arquivo:

- após cada mudança significativa;
- ao detectar falha;
- ao trocar estratégia;
- antes de delegar;
- antes de push, merge ou release;
- quando o contexto estiver crescendo ou antes de encerrar a sessão.

Não registrar secrets nem dados sensíveis; referenciar caminhos e identificadores seguros (ex.: `env:NOME`, alias de credencial).

## Evidência mínima

Cada item relevante deve registrar `claim`, `command_or_observation`, `result`, `timestamp` e `artifact_or_log` quando houver. Diferenciar claramente **fato observado**, **hipótese** e **decisão**.
