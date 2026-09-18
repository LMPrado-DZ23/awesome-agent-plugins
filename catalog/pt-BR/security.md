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
- [CrowdStrike Falcon security analysis](#falcon-mcp) — Servidor oficial da CrowdStrike conectando agentes ao Falcon para análise de segurança e automação; exige cred…
- [Dead code and secrets detection](#skylos-mcp) — Detecção de código morto, segredos e problemas de qualidade para Python, TypeScript e Go; exige SKYLOS_API_KEY…
- [DMARC report parsing](#parse-dmarc-mcp) — Parser leve de DMARC que busca relatórios de e-mail automaticamente e visualiza a conformidade em um único app…
- [EVM bytecode analysis](#evmole-mcp) — Análise local e estruturada de bytecode de runtime EVM já implantado.
- [Governance layer for agent actions](#bernstein-mcp) — Camada de governança open-source para agentes de IA, com recibos de execução bit a bit, mais de 40 adaptadores…
- [Network analysis with tshark](#wireshark-mcp) — Análise de rede profissional com tshark para auditorias de segurança, investigações e detecção de ameaças.
- [OSINT recon agent](#openosint-mcp) — Agente de OSINT com IA e 16 ferramentas: e-mail, vazamentos, IP, WHOIS, DNS, Shodan e GitHub; exige várias cha…
- [Protect agents from malicious packages](#vet-mcp) — Protege agentes de IA e IDEs contra pacotes open-source maliciosos.
- [Reverse engineer from the CLI](#rea-mcp) — Faz engenharia reversa de alvos diversos a partir do terminal ou de um agente, com uma única CLI e servidor.
- [Reverse engineering and forensics](#reversecore-mcp) — Servidor voltado a segurança para engenharia reversa, análise de malware, forense e análise estática (SAST).
- [SonarQube code quality scans](#sonarqube-mcp-server) — Servidor oficial da SonarSource para analisar qualidade de código e segurança com SonarQube Server ou Cloud; e…
- [Threat hunting on Elasticsearch](#crowdsentinels-ai-mcp) — Caça a ameaças e resposta a incidentes com IA para Elasticsearch/OpenSearch, com forense de endpoint e rede; e…

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

<a id="falcon-mcp"></a>

### CrowdStrike Falcon security analysis

[CrowdStrike Falcon MCP Server](https://github.com/CrowdStrike/falcon-mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor oficial da CrowdStrike conectando agentes ao Falcon para análise de segurança e automação; exige credenciais de cliente do Falcon.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio falcon-mcp --env FALCON_CLIENT_ID='<FALCON_CLIENT_ID>' --env FALCON_CLIENT_SECRET='<FALCON_CLIENT_SECRET>' --env FALCON_MCP_API_KEY='<FALCON_MCP_API_KEY>' -- uvx falcon-mcp
```

**Codex CLI**

```bash
codex mcp add falcon-mcp --env FALCON_CLIENT_ID='<FALCON_CLIENT_ID>' --env FALCON_CLIENT_SECRET='<FALCON_CLIENT_SECRET>' --env FALCON_MCP_API_KEY='<FALCON_MCP_API_KEY>' -- uvx falcon-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e FALCON_CLIENT_ID='<FALCON_CLIENT_ID>' -e FALCON_CLIENT_SECRET='<FALCON_CLIENT_SECRET>' -e FALCON_MCP_API_KEY='<FALCON_MCP_API_KEY>' falcon-mcp uvx falcon-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "falcon-mcp": {
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "falcon-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "falcon-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "falcon-mcp"
      ],
      "enabled": true,
      "environment": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "falcon-mcp": {
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "falcon-mcp": {
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "falcon-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  falcon-mcp:
    type: stdio
    cmd: uvx
    args: ["falcon-mcp"]
    envs:
      FALCON_CLIENT_ID: "<FALCON_CLIENT_ID>"
      FALCON_CLIENT_SECRET: "<FALCON_CLIENT_SECRET>"
      FALCON_MCP_API_KEY: "<FALCON_MCP_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "falcon-mcp": {
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "falcon-mcp": {
      "command": "uvx",
      "args": [
        "falcon-mcp"
      ],
      "env": {
        "FALCON_CLIENT_ID": "<FALCON_CLIENT_ID>",
        "FALCON_CLIENT_SECRET": "<FALCON_CLIENT_SECRET>",
        "FALCON_MCP_API_KEY": "<FALCON_MCP_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `falcon-mcp.cordis.yml  →  dsh web --patch ./falcon-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-falcon-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: falcon-mcp
        transport: stdio
        command: uvx
        args: ["falcon-mcp"]
        env: {"FALCON_CLIENT_ID":"<FALCON_CLIENT_ID>","FALCON_CLIENT_SECRET":"<FALCON_CLIENT_SECRET>","FALCON_MCP_API_KEY":"<FALCON_MCP_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="skylos-mcp"></a>

### Dead code and secrets detection

[duriantaco/skylos](https://github.com/duriantaco/skylos) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Detecção de código morto, segredos e problemas de qualidade para Python, TypeScript e Go; exige SKYLOS_API_KEY.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio skylos --env SKYLOS_API_KEY='<SKYLOS_API_KEY>' -- uvx skylos
```

**Codex CLI**

```bash
codex mcp add skylos --env SKYLOS_API_KEY='<SKYLOS_API_KEY>' -- uvx skylos
```

**Gemini CLI**

```bash
gemini mcp add -e SKYLOS_API_KEY='<SKYLOS_API_KEY>' skylos uvx skylos
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "skylos": {
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "skylos": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "skylos": {
      "type": "local",
      "command": [
        "uvx",
        "skylos"
      ],
      "enabled": true,
      "environment": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "skylos": {
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "skylos": {
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "skylos": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  skylos:
    type: stdio
    cmd: uvx
    args: ["skylos"]
    envs:
      SKYLOS_API_KEY: "<SKYLOS_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "skylos": {
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "skylos": {
      "command": "uvx",
      "args": [
        "skylos"
      ],
      "env": {
        "SKYLOS_API_KEY": "<SKYLOS_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `skylos.cordis.yml  →  dsh web --patch ./skylos.cordis.yml`

```yaml
- insert:
    - id: mcp-skylos
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: skylos
        transport: stdio
        command: uvx
        args: ["skylos"]
        env: {"SKYLOS_API_KEY":"<SKYLOS_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="parse-dmarc-mcp"></a>

### DMARC report parsing

[Parse-DMARC MCP Server](https://github.com/meysam81/parse-dmarc) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Parser leve de DMARC que busca relatórios de e-mail automaticamente e visualiza a conformidade em um único app.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio parse-dmarc -- docker run -i --rm ghcr.io/meysam81/parse-dmarc:v1.4.7
```

**Codex CLI**

```bash
codex mcp add parse-dmarc -- docker run -i --rm ghcr.io/meysam81/parse-dmarc:v1.4.7
```

**Gemini CLI**

```bash
gemini mcp add parse-dmarc docker run -i --rm ghcr.io/meysam81/parse-dmarc:v1.4.7
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "parse-dmarc": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "parse-dmarc": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "parse-dmarc": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "parse-dmarc": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "parse-dmarc": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "parse-dmarc": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  parse-dmarc:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/meysam81/parse-dmarc:v1.4.7"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "parse-dmarc": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "parse-dmarc": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/meysam81/parse-dmarc:v1.4.7"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `parse-dmarc.cordis.yml  →  dsh web --patch ./parse-dmarc.cordis.yml`

```yaml
- insert:
    - id: mcp-parse-dmarc
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: parse-dmarc
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/meysam81/parse-dmarc:v1.4.7"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="evmole-mcp"></a>

### EVM bytecode analysis

[EVMole](https://github.com/cdump/evmole/tree/main/agent/mcp) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Análise local e estruturada de bytecode de runtime EVM já implantado.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio evmole -- npx -y evmole-mcp
```

**Codex CLI**

```bash
codex mcp add evmole -- npx -y evmole-mcp
```

**Gemini CLI**

```bash
gemini mcp add evmole npx -y evmole-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "evmole": {
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "evmole": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "evmole": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "evmole-mcp"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "evmole": {
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "evmole": {
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "evmole": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  evmole:
    type: stdio
    cmd: npx
    args: ["-y","evmole-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "evmole": {
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "evmole": {
      "command": "npx",
      "args": [
        "-y",
        "evmole-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `evmole.cordis.yml  →  dsh web --patch ./evmole.cordis.yml`

```yaml
- insert:
    - id: mcp-evmole
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: evmole
        transport: stdio
        command: npx
        args: ["-y","evmole-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="bernstein-mcp"></a>

### Governance layer for agent actions

[sipyourdrink-ltd/bernstein](https://github.com/sipyourdrink-ltd/bernstein) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Camada de governança open-source para agentes de IA, com recibos de execução bit a bit, mais de 40 adaptadores e suporte a air-gap.

**Alternativas:**

- [Emilia Protocol](https://github.com/emiliaprotocol/emilia-protocol) — Aprovação de ações exatas para ações relevantes de agentes, com recibos assinados; exige EP_API_KEY.
- [HOL Guard](https://github.com/hashgraph-online/hol-guard) — Evidências de segurança e workflows de aprovação local-first para as ações de um agente.
- [ucsandman/DashClaw/tree/main/mcp-server](https://github.com/ucsandman/DashClaw/tree/main/mcp-server) — Verificações de política, aprovações, registros e capacidades de HTTP governadas para agentes não supervisionados.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio bernstein -- uvx bernstein
```

**Codex CLI**

```bash
codex mcp add bernstein -- uvx bernstein
```

**Gemini CLI**

```bash
gemini mcp add bernstein uvx bernstein
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "bernstein": {
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "bernstein": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "bernstein": {
      "type": "local",
      "command": [
        "uvx",
        "bernstein"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "bernstein": {
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "bernstein": {
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "bernstein": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  bernstein:
    type: stdio
    cmd: uvx
    args: ["bernstein"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "bernstein": {
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "bernstein": {
      "command": "uvx",
      "args": [
        "bernstein"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `bernstein.cordis.yml  →  dsh web --patch ./bernstein.cordis.yml`

```yaml
- insert:
    - id: mcp-bernstein
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: bernstein
        transport: stdio
        command: uvx
        args: ["bernstein"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="wireshark-mcp"></a>

### Network analysis with tshark

[bx33661/Wireshark-MCP](https://github.com/bx33661/Wireshark-MCP) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Análise de rede profissional com tshark para auditorias de segurança, investigações e detecção de ameaças.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio wireshark-mcp -- uvx wireshark-mcp
```

**Codex CLI**

```bash
codex mcp add wireshark-mcp -- uvx wireshark-mcp
```

**Gemini CLI**

```bash
gemini mcp add wireshark-mcp uvx wireshark-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "wireshark-mcp": {
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "wireshark-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "wireshark-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "wireshark-mcp"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "wireshark-mcp": {
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "wireshark-mcp": {
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "wireshark-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  wireshark-mcp:
    type: stdio
    cmd: uvx
    args: ["wireshark-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "wireshark-mcp": {
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "wireshark-mcp": {
      "command": "uvx",
      "args": [
        "wireshark-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `wireshark-mcp.cordis.yml  →  dsh web --patch ./wireshark-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-wireshark-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: wireshark-mcp
        transport: stdio
        command: uvx
        args: ["wireshark-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="openosint-mcp"></a>

### OSINT recon agent

[OpenOSINT](https://github.com/OpenOSINT/OpenOSINT) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Agente de OSINT com IA e 16 ferramentas: e-mail, vazamentos, IP, WHOIS, DNS, Shodan e GitHub; exige várias chaves de provedores de OSINT.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio openosint --env ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' --env HIBP_API_KEY='<HIBP_API_KEY>' --env IPINFO_TOKEN='<IPINFO_TOKEN>' --env IP2LOCATION_API_KEY='<IP2LOCATION_API_KEY>' --env ABUSEIPDB_API_KEY='<ABUSEIPDB_API_KEY>' -- uvx openosint
```

**Codex CLI**

```bash
codex mcp add openosint --env ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' --env HIBP_API_KEY='<HIBP_API_KEY>' --env IPINFO_TOKEN='<IPINFO_TOKEN>' --env IP2LOCATION_API_KEY='<IP2LOCATION_API_KEY>' --env ABUSEIPDB_API_KEY='<ABUSEIPDB_API_KEY>' -- uvx openosint
```

**Gemini CLI**

```bash
gemini mcp add -e ANTHROPIC_API_KEY='<ANTHROPIC_API_KEY>' -e HIBP_API_KEY='<HIBP_API_KEY>' -e IPINFO_TOKEN='<IPINFO_TOKEN>' -e IP2LOCATION_API_KEY='<IP2LOCATION_API_KEY>' -e ABUSEIPDB_API_KEY='<ABUSEIPDB_API_KEY>' openosint uvx openosint
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "openosint": {
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "openosint": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "openosint": {
      "type": "local",
      "command": [
        "uvx",
        "openosint"
      ],
      "enabled": true,
      "environment": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "openosint": {
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "openosint": {
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "openosint": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  openosint:
    type: stdio
    cmd: uvx
    args: ["openosint"]
    envs:
      ANTHROPIC_API_KEY: "<ANTHROPIC_API_KEY>"
      HIBP_API_KEY: "<HIBP_API_KEY>"
      IPINFO_TOKEN: "<IPINFO_TOKEN>"
      IP2LOCATION_API_KEY: "<IP2LOCATION_API_KEY>"
      ABUSEIPDB_API_KEY: "<ABUSEIPDB_API_KEY>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "openosint": {
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "openosint": {
      "command": "uvx",
      "args": [
        "openosint"
      ],
      "env": {
        "ANTHROPIC_API_KEY": "<ANTHROPIC_API_KEY>",
        "HIBP_API_KEY": "<HIBP_API_KEY>",
        "IPINFO_TOKEN": "<IPINFO_TOKEN>",
        "IP2LOCATION_API_KEY": "<IP2LOCATION_API_KEY>",
        "ABUSEIPDB_API_KEY": "<ABUSEIPDB_API_KEY>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `openosint.cordis.yml  →  dsh web --patch ./openosint.cordis.yml`

```yaml
- insert:
    - id: mcp-openosint
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: openosint
        transport: stdio
        command: uvx
        args: ["openosint"]
        env: {"ANTHROPIC_API_KEY":"<ANTHROPIC_API_KEY>","HIBP_API_KEY":"<HIBP_API_KEY>","IPINFO_TOKEN":"<IPINFO_TOKEN>","IP2LOCATION_API_KEY":"<IP2LOCATION_API_KEY>","ABUSEIPDB_API_KEY":"<ABUSEIPDB_API_KEY>"}
        cwd: !!js process.cwd()
```

</details>

<a id="vet-mcp"></a>

### Protect agents from malicious packages

[SafeDep Vet MCP](https://github.com/safedep/vet) — `Servidor MCP` · Licença: Apache-2.0 · Funciona com: Todos os clientes

Protege agentes de IA e IDEs contra pacotes open-source maliciosos.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio vet-mcp -- docker run -i --rm ghcr.io/safedep/vet:v1.19.1
```

**Codex CLI**

```bash
codex mcp add vet-mcp -- docker run -i --rm ghcr.io/safedep/vet:v1.19.1
```

**Gemini CLI**

```bash
gemini mcp add vet-mcp docker run -i --rm ghcr.io/safedep/vet:v1.19.1
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "vet-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "vet-mcp": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "vet-mcp": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "vet-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "vet-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "vet-mcp": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  vet-mcp:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","ghcr.io/safedep/vet:v1.19.1"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "vet-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "vet-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/safedep/vet:v1.19.1"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `vet-mcp.cordis.yml  →  dsh web --patch ./vet-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-vet-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: vet-mcp
        transport: stdio
        command: docker
        args: ["run","-i","--rm","ghcr.io/safedep/vet:v1.19.1"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="rea-mcp"></a>

### Reverse engineer from the CLI

[REA](https://github.com/morluto/rea) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Faz engenharia reversa de alvos diversos a partir do terminal ou de um agente, com uma única CLI e servidor.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio rea -- npx -y rea-agents
```

**Codex CLI**

```bash
codex mcp add rea -- npx -y rea-agents
```

**Gemini CLI**

```bash
gemini mcp add rea npx -y rea-agents
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "rea": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "rea": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "rea-agents"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "rea": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  rea:
    type: stdio
    cmd: npx
    args: ["-y","rea-agents"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `rea.cordis.yml  →  dsh web --patch ./rea.cordis.yml`

```yaml
- insert:
    - id: mcp-rea
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: rea
        transport: stdio
        command: npx
        args: ["-y","rea-agents"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="reversecore-mcp"></a>

### Reverse engineering and forensics

[Reversecore MCP](https://github.com/sjkim1127/Reversecore_MCP) — `Servidor MCP` · Licença: MIT · Funciona com: Todos os clientes

Servidor voltado a segurança para engenharia reversa, análise de malware, forense e análise estática (SAST).

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio reversecore-mcp -- uvx reversecore-mcp
```

**Codex CLI**

```bash
codex mcp add reversecore-mcp -- uvx reversecore-mcp
```

**Gemini CLI**

```bash
gemini mcp add reversecore-mcp uvx reversecore-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "reversecore-mcp": {
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "reversecore-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "reversecore-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "reversecore-mcp"
      ],
      "enabled": true
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "reversecore-mcp": {
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "reversecore-mcp": {
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "reversecore-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  reversecore-mcp:
    type: stdio
    cmd: uvx
    args: ["reversecore-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "reversecore-mcp": {
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "reversecore-mcp": {
      "command": "uvx",
      "args": [
        "reversecore-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `reversecore-mcp.cordis.yml  →  dsh web --patch ./reversecore-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-reversecore-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: reversecore-mcp
        transport: stdio
        command: uvx
        args: ["reversecore-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="sonarqube-mcp-server"></a>

### SonarQube code quality scans

[SonarQube MCP Server](https://github.com/SonarSource/sonarqube-mcp-server) — `Servidor MCP` · Licença: ver repo · Funciona com: Todos os clientes

Servidor oficial da SonarSource para analisar qualidade de código e segurança com SonarQube Server ou Cloud; exige SONARQUBE_TOKEN.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio sonarqube-mcp-server --env SONARQUBE_TOKEN='<SONARQUBE_TOKEN>' --env SONARQUBE_ORG='<SONARQUBE_ORG>' --env SONARQUBE_URL='<SONARQUBE_URL>' -- docker run -i --rm -e SONARQUBE_TOKEN -e SONARQUBE_ORG -e SONARQUBE_URL docker.io/sonarsource/sonarqube-mcp
```

**Codex CLI**

```bash
codex mcp add sonarqube-mcp-server --env SONARQUBE_TOKEN='<SONARQUBE_TOKEN>' --env SONARQUBE_ORG='<SONARQUBE_ORG>' --env SONARQUBE_URL='<SONARQUBE_URL>' -- docker run -i --rm -e SONARQUBE_TOKEN -e SONARQUBE_ORG -e SONARQUBE_URL docker.io/sonarsource/sonarqube-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e SONARQUBE_TOKEN='<SONARQUBE_TOKEN>' -e SONARQUBE_ORG='<SONARQUBE_ORG>' -e SONARQUBE_URL='<SONARQUBE_URL>' sonarqube-mcp-server docker run -i --rm -e SONARQUBE_TOKEN -e SONARQUBE_ORG -e SONARQUBE_URL docker.io/sonarsource/sonarqube-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "sonarqube-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "sonarqube-mcp-server": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "sonarqube-mcp-server": {
      "type": "local",
      "command": [
        "docker",
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "enabled": true,
      "environment": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "sonarqube-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "sonarqube-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "sonarqube-mcp-server": {
      "source": "custom",
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  sonarqube-mcp-server:
    type: stdio
    cmd: docker
    args: ["run","-i","--rm","-e","SONARQUBE_TOKEN","-e","SONARQUBE_ORG","-e","SONARQUBE_URL","docker.io/sonarsource/sonarqube-mcp"]
    envs:
      SONARQUBE_TOKEN: "<SONARQUBE_TOKEN>"
      SONARQUBE_ORG: "<SONARQUBE_ORG>"
      SONARQUBE_URL: "<SONARQUBE_URL>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "sonarqube-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "sonarqube-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "SONARQUBE_TOKEN",
        "-e",
        "SONARQUBE_ORG",
        "-e",
        "SONARQUBE_URL",
        "docker.io/sonarsource/sonarqube-mcp"
      ],
      "env": {
        "SONARQUBE_TOKEN": "<SONARQUBE_TOKEN>",
        "SONARQUBE_ORG": "<SONARQUBE_ORG>",
        "SONARQUBE_URL": "<SONARQUBE_URL>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `sonarqube-mcp-server.cordis.yml  →  dsh web --patch ./sonarqube-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-sonarqube-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: sonarqube-mcp-server
        transport: stdio
        command: docker
        args: ["run","-i","--rm","-e","SONARQUBE_TOKEN","-e","SONARQUBE_ORG","-e","SONARQUBE_URL","docker.io/sonarsource/sonarqube-mcp"]
        env: {"SONARQUBE_TOKEN":"<SONARQUBE_TOKEN>","SONARQUBE_ORG":"<SONARQUBE_ORG>","SONARQUBE_URL":"<SONARQUBE_URL>"}
        cwd: !!js process.cwd()
```

</details>

<a id="crowdsentinels-ai-mcp"></a>

### Threat hunting on Elasticsearch

[thomasxm/CrowdSentinels-AI-MCP](https://github.com/thomasxm/CrowdSentinels-AI-MCP) — `Servidor MCP` · Licença: GPL-3.0 · Funciona com: Todos os clientes

Caça a ameaças e resposta a incidentes com IA para Elasticsearch/OpenSearch, com forense de endpoint e rede; exige credenciais do Elasticsearch.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio crowdsentinel-mcp-server --env ELASTICSEARCH_API_KEY='<ELASTICSEARCH_API_KEY>' --env ELASTICSEARCH_PASSWORD='<ELASTICSEARCH_PASSWORD>' --env ELASTICSEARCH_BEARER_TOKEN='<ELASTICSEARCH_BEARER_TOKEN>' -- uvx crowdsentinel-mcp-server
```

**Codex CLI**

```bash
codex mcp add crowdsentinel-mcp-server --env ELASTICSEARCH_API_KEY='<ELASTICSEARCH_API_KEY>' --env ELASTICSEARCH_PASSWORD='<ELASTICSEARCH_PASSWORD>' --env ELASTICSEARCH_BEARER_TOKEN='<ELASTICSEARCH_BEARER_TOKEN>' -- uvx crowdsentinel-mcp-server
```

**Gemini CLI**

```bash
gemini mcp add -e ELASTICSEARCH_API_KEY='<ELASTICSEARCH_API_KEY>' -e ELASTICSEARCH_PASSWORD='<ELASTICSEARCH_PASSWORD>' -e ELASTICSEARCH_BEARER_TOKEN='<ELASTICSEARCH_BEARER_TOKEN>' crowdsentinel-mcp-server uvx crowdsentinel-mcp-server
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "crowdsentinel-mcp-server": {
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "crowdsentinel-mcp-server": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**OpenCode** — Arquivo: `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "crowdsentinel-mcp-server": {
      "type": "local",
      "command": [
        "uvx",
        "crowdsentinel-mcp-server"
      ],
      "enabled": true,
      "environment": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "crowdsentinel-mcp-server": {
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "crowdsentinel-mcp-server": {
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "crowdsentinel-mcp-server": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  crowdsentinel-mcp-server:
    type: stdio
    cmd: uvx
    args: ["crowdsentinel-mcp-server"]
    envs:
      ELASTICSEARCH_API_KEY: "<ELASTICSEARCH_API_KEY>"
      ELASTICSEARCH_PASSWORD: "<ELASTICSEARCH_PASSWORD>"
      ELASTICSEARCH_BEARER_TOKEN: "<ELASTICSEARCH_BEARER_TOKEN>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "crowdsentinel-mcp-server": {
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "crowdsentinel-mcp-server": {
      "command": "uvx",
      "args": [
        "crowdsentinel-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_API_KEY": "<ELASTICSEARCH_API_KEY>",
        "ELASTICSEARCH_PASSWORD": "<ELASTICSEARCH_PASSWORD>",
        "ELASTICSEARCH_BEARER_TOKEN": "<ELASTICSEARCH_BEARER_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `crowdsentinel-mcp-server.cordis.yml  →  dsh web --patch ./crowdsentinel-mcp-server.cordis.yml`

```yaml
- insert:
    - id: mcp-crowdsentinel-mcp-server
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: crowdsentinel-mcp-server
        transport: stdio
        command: uvx
        args: ["crowdsentinel-mcp-server"]
        env: {"ELASTICSEARCH_API_KEY":"<ELASTICSEARCH_API_KEY>","ELASTICSEARCH_PASSWORD":"<ELASTICSEARCH_PASSWORD>","ELASTICSEARCH_BEARER_TOKEN":"<ELASTICSEARCH_BEARER_TOKEN>"}
        cwd: !!js process.cwd()
```

</details>
