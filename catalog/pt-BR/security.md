# Segurança e permissões

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Read-only relay and config security audit](#dsh-api-relay-audit) — Executa auditorias locais de segurança em relays de API de IA e proxies de LLM, gerando relatórios em Markdown…
- [Authorized pentest and redteam toolkit](#dsh-dsh-redteam-model) — Kit de segurança autorizada com nove modos de trabalho (coordenação de redteam, pentest, auditoria de código, …
- [Second-model auto-approval review](#dsh-dsh-auto-review) — Adiciona um subagente revisor somente leitura à cadeia de aprovação, que retorna veredictos estruturados de pe…
- [Declarative permission rules engine](#dsh-dsh-permission-rules) — Regras declarativas e ordenadas de permitir/negar/perguntar que combinam nomes de ferramentas, argumentos, cam…
- [Web UI login and auth gate](#dsh-dsh-remote) — Protege a Web UI do harness atrás de um login: MFA/TOTP, cookies de sessão assinados, papéis opcionais de admi…
- [Multi-tenant server security platform](#dsh-dsh-passwords) — Transforma o harness em uma plataforma multi-tenant de nível servidor: acesso remoto com HTTPS automático, per…
- [Upstream compatibility monitoring](#dsh-upstream-radar) — Monitora lançamentos do núcleo do harness e de plugins, reteste os artefatos publicados exatos em runners desc…
- [Privacy-preserving audit receipts](#dsh-dsh-verification-receipt) — Grava resumos locais em JSONL de contagens de ferramentas por turno e sinais de verificação aproximados, sem a…
- [Third-party plugin vetting pipeline](#dsh-dsh-plugin-vet) — Pipeline de confiança para plugins de terceiros: varredura estática determinística com veredictos, guarda de r…
- [Deterministic commit security review](#dsh-dsh-code-security) — Revisão de segurança de código determinística com mais de 40 regras, detecção de entropia de segredos, revisão…
- [Runtime prompt-injection defense](#dsh-dsh-security-guard) — Guarda de segurança estática e em runtime: varreduras baseadas em regras para código malicioso, injeção de pro…
- [Passive risk-scored call blocking](#dsh-dsh-risk-guard) — Registra silenciosamente cada chamada de ferramenta com pontuação de risco determinística e cumulativa e limpe…

<a id="dsh-api-relay-audit"></a>

### Read-only relay and config security audit

[toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) — `Plugin nativo` · ★ 839 · Licença: AGPL-3.0 · Funciona com: DeepSeek Harness apenas

Executa auditorias locais de segurança em relays de API de IA e proxies de LLM, gerando relatórios em Markdown sobre injeção de prompt, sinais de substituição de modelo, reescrita de chamadas de ferramenta, vazamento de erros, integridade de stream e riscos Web3.

**Alternativas:**

- [PensiveFei/dsh-secure-audit](https://github.com/PensiveFei/dsh-secure-audit) (★ 86) — Também audita a configuração local e redige PII em chinês, gerando relatórios reprodutíveis sem tocar no tráfego do relay.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:toby-bridges/api-relay-audit
```

</details>

<a id="dsh-dsh-redteam-model"></a>

### Authorized pentest and redteam toolkit

[SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model) — `Plugin nativo` · ★ 511 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Kit de segurança autorizada com nove modos de trabalho (coordenação de redteam, pentest, auditoria de código, análise binária, ataque-defesa, evasão de AV, resposta a incidentes, segurança em nuvem, CTF) e quinze plugins em runtime, gerenciados por uma única página de configurações.

**Alternativas:**

- [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) (★ 504) — Adiciona uma cadeia de exploração que rastreia ativos e achados por meio de uma visualização web dedicada.
- [ADWMC/helm-d#helmd](https://github.com/ADWMC/helm-d/tree/main/packages/helmd) — Adiciona 33 ferramentas de engenharia reversa para APK, binários nativos, protocolos e amostras de malware, além de um fluxo de casos em disco com cadeias de evidência.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:SeaOf0/dsh-redteam-model
```

</details>

<a id="dsh-dsh-auto-review"></a>

### Second-model auto-approval review

[PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) — `Plugin nativo` · ★ 182 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Adiciona um subagente revisor somente leitura à cadeia de aprovação, que retorna veredictos estruturados de permitir/negar com justificativas, falhando de forma segura (nega) por padrão quando a revisão é inconclusiva.

**Alternativas:**

- [moon09300731/dsh-approval-gate](https://github.com/moon09300731/dsh-approval-gate) (★ 73) — Pré-classifica se uma ação é reversível, aprova automaticamente as seguras, escala as perigosas, com reversão em um clique via snapshots.
- [PAKIKNOWLEDGE/dsh-auto-classifier](https://github.com/PAKIKNOWLEDGE/dsh-auto-classifier) (★ 1) — Adiciona um juiz semântico via LLM e checkpoints de git para reverter sessões não supervisionadas.
- [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) (★ 161) — Nega diretamente caminhos críticos e concede apenas um acesso ampliado exato por pedido de escalonamento.
- [Alnita-M/dsh-Almost_Full_Access](https://github.com/Alnita-M/dsh-Almost_Full_Access) (★ 1) — Combina verificações de regras determinísticas com revisão por subagente antes de conceder acesso quase total.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-auto-review
```

</details>

<a id="dsh-dsh-permission-rules"></a>

### Declarative permission rules engine

[PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) — `Plugin nativo` · ★ 112 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Regras declarativas e ordenadas de permitir/negar/perguntar que combinam nomes de ferramentas, argumentos, caminhos do workspace e identidade do agente antes da execução, com auditoria completa de log de sessão, modo dry-run e recarga a quente.

**Alternativas:**

- [sjh9714/dsh-movein-permissions](https://github.com/sjh9714/dsh-movein/tree/main/plugin) — Usa diretamente a sintaxe de regras do Claude Code (ex.: Bash(rm -rf:*), Read(_secrets_)) e funciona sozinho, sem migração.
- [jilian-dsh/dsh-rule-engine](https://github.com/jilian-dsh/dsh-rule-engine) (★ 3) — Interpreta regras a partir do AGENTS.md e adiciona o comando /guard, proteção de versão para arquivos rastreados e isenções de zona livre.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PerryLink/dsh-permission-rules
```

</details>

<a id="dsh-dsh-remote"></a>

### Web UI login and auth gate

[xgone/dsh-remote](https://github.com/xgone/dsh-remote) — `Plugin nativo` · ★ 65 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Protege a Web UI do harness atrás de um login: MFA/TOTP, cookies de sessão assinados, papéis opcionais de admin, usuário e convidado, seleção de workspace no navegador e previews de arquivos remotos com lista de permissão.

**Alternativas:**

- [TecFancy/dsh-auth-gate](https://github.com/TecFancy/dsh-auth-gate) (★ 14) — Suporta autenticação por token compartilhado, limitação de taxa de requisições e uma CLI para gestão de usuários.
- [hxy91819/dsh-auth](https://github.com/hxy91819/dsh-auth) (★ 6) — Usa Caddy forward_auth com hashing de senha Argon2id, sessões revogáveis e interface bilíngue.
- [SummerSec/dsh-web-auth](https://github.com/SummerSec/dsh-web-auth) (★ 2) — Adiciona limitação de login por IP e uma CLI de hashing de senha com scrypt.
- [GDWhisper/dsh-web-startup-auth](https://github.com/GDWhisper/dsh-web-startup-auth) (★ 43) — Permite vincular a Web UI a 0.0.0.0 com segurança e inclui uma CLI para rotacionar a chave de assinatura e invalidar todas as sessões.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:xgone/dsh-remote
```

</details>

<a id="dsh-dsh-passwords"></a>

### Multi-tenant server security platform

[slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) — `Plugin nativo` · ★ 61 · Licença: GPL-3.0 · Funciona com: DeepSeek Harness apenas

Transforma o harness em uma plataforma multi-tenant de nível servidor: acesso remoto com HTTPS automático, permissões por subusuário com cotas de token e diárias, sandbox obrigatório, autenticação criptografada e log de auditoria.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:slywalker2006/dsh-passwords
```

</details>

<a id="dsh-upstream-radar"></a>

### Upstream compatibility monitoring

[MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) — `Plugin nativo` · ★ 12 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Monitora lançamentos do núcleo do harness e de plugins, reteste os artefatos publicados exatos em runners descartáveis, publica evidências de compatibilidade legíveis por máquina e reconcilia issues rastreadas após correções.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MicroMilo/upstream-radar
```

</details>

<a id="dsh-dsh-verification-receipt"></a>

### Privacy-preserving audit receipts

[030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) — `Plugin nativo` · ★ 4 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Grava resumos locais em JSONL de contagens de ferramentas por turno e sinais de verificação aproximados, sem armazenar prompts, argumentos de ferramentas ou texto de resultado.

**Alternativas:**

- [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) (★ 3) — Encadeia por hash os recibos JSONL de resultados de ferramentas e eventos de sessão, criando evidência à prova de adulteração.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:030611/dsh-verification-receipt
```

</details>

<a id="dsh-dsh-plugin-vet"></a>

### Third-party plugin vetting pipeline

[wulun811/dsh-plugin-vet](https://github.com/wulun811/dsh-plugin-vet) — `Plugin nativo` · ★ 3 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Pipeline de confiança para plugins de terceiros: varredura estática determinística com veredictos, guarda de runtime opcional com iscas honeypot, skill de protocolo de auditoria para agentes e um indicador de status de escudo no navegador. Apenas alerta, nunca bloqueia.

**Alternativas:**

- [truelove-dreamer/dsh-plugin-vetting](https://github.com/truelove-dreamer/dsh-plugin-vetting) (★ 4) — Adiciona cobertura de dependências transitivas e uma base de hash de pacotes oficiais para detectar adulteração na cadeia de suprimentos.
- [zoahdev/dsh-poison-guard](https://github.com/zoahdev/dsh-poison-guard) (★ 1) — Executa uma varredura de AST e desofuscação antes da instalação e retorna código de saída diferente de zero em achados, para bloqueio em CI.
- [Darren-Tang/dsh-provenance](https://github.com/Darren-Tang/dsh-provenance) (★ 1) — Verifica se o tarball do plugin corresponde ao código-fonte revisado antes que qualquer código seja executado.
- [pengxuding/dsh-plugin-judge](https://github.com/pengxuding/dsh-plugin-judge) (★ 0) — Combina varredura de código-fonte com um juiz LLM e lembra de reauditar plugins instalados após trocar de modelo.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wulun811/dsh-plugin-vet
```

</details>

<a id="dsh-dsh-code-security"></a>

### Deterministic commit security review

[STARDUSTLC666/dsh-code-security](https://github.com/STARDUSTLC666/dsh-code-security) — `Plugin nativo` · ★ 1 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Revisão de segurança de código determinística com mais de 40 regras, detecção de entropia de segredos, revisão do diff staged, exportação SARIF, aceitação de baseline e um inventário SBOM leve de dependências.

**Alternativas:**

- [KongFangXun/sofagent#cordis-plugin-sofagent-audit](https://github.com/KongFangXun/sofagent/tree/main/engine/dsh-plugins/cordis-plugin-sofagent-audit) — Adiciona uma trilha de auditoria assinada com HMAC, reversão por snapshot e um servidor MCP com 84 ferramentas para revisão no momento do commit.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:STARDUSTLC666/dsh-code-security
```

</details>

<a id="dsh-dsh-security-guard"></a>

### Runtime prompt-injection defense

[bigclawd/dsh-security-guard](https://github.com/bigclawd/dsh-security-guard) — `Plugin nativo` · ★ 1 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Guarda de segurança estática e em runtime: varreduras baseadas em regras para código malicioso, injeção de prompt e desperdício de tokens, interceptação em runtime de chamadas de ferramentas perigosas, comando /scan, ferramenta plugin_scan, painel web e lista de permissão.

**Alternativas:**

- [PerryLink/dsh-defend](https://github.com/PerryLink/dsh-defend) (★ 16) — Detecta padrões de injeção de prompt, jailbreak e vazamento de segredos em três pontos do pipeline com níveis de permitir/perguntar/bloquear e proteção contra exclusão destrutiva.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:bigclawd/dsh-security-guard
```

</details>

<a id="dsh-dsh-risk-guard"></a>

### Passive risk-scored call blocking

[shuxue6662-a11y/dsh-risk-guard](https://github.com/shuxue6662-a11y/dsh-risk-guard) — `Plugin nativo` · ★ 0 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Registra silenciosamente cada chamada de ferramenta com pontuação de risco determinística e cumulativa e limpeza baseada em retenção, bloqueando ações irreversíveis como exclusão de caminhos protegidos, apagamento de disco e force-push em branches protegidos.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:shuxue6662-a11y/dsh-risk-guard
```

</details>
