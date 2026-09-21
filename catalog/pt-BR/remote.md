# Remoto e mobile

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Control real Android and iOS devices](#mobilerun-mcp) — Controla dispositivos Android e iOS reais com agentes de LLM: tocar, deslizar, digitar e automatizar fluxos; e…
- [Computer-use automation for Windows](#windows-mcp) — Um servidor para automação estilo computer-use no Windows.
- [Policy-gated SSH access](#ssh-mcp) — SSH auditado e controlado por política para hosts Linux e Windows, com papéis, aprovações e log de auditoria; …
- [Live iOS device control](#dsh-dsh-ios) — Coloca um Simulador iOS ativo ou um iPhone conectado por USB dentro da conversa, com 22 ferramentas para inici…
- [Remote/mobile access to DSH](#dsh-dsh-mobile) — Acesse e controle uma sessão do DeepSeek Harness a partir de um app Android ou navegador móvel, via LAN ou con…
- [Drive DSH from chat apps](#dsh-dsh-bridge) — Adiciona acesso remoto e móvel via QR code na LAN e túneis Cloudflare ou personalizados, além de integrações d…
- [Live Android device control](#dsh-dsh-android) — Coloca um emulador Android ativo ou um telefone via USB dentro da conversa, controlado via adb, com 20 ferrame…
- [Full remote server administration](#dsh-dsh-full-remote) — Oferece acesso total à API do servidor (settings, credentials, host.listDirectory) via proxy reverso protegido…
- [LAN access for the Web UI](#dsh-dsh-web-lan-access) — Injeta um polyfill de crypto.randomUUID para que a Web UI do DSH continue funcionando ao ser aberta por endere…
- [Session events as MCP progress](#dsh-dsh-streaming-mcp-bridge) — Transmite eventos ao vivo de uma sessão do DeepSeek Harness como notificações de progresso MCP, com um adaptad…
- [SSH host management panel](#dsh-dsh-web-ui-packages-dsh-ssh) — Adiciona um painel de operações SSH ao DSH: terminal web, transferência de arquivos SFTP com progresso, encami…

<a id="mobilerun-mcp"></a>

### Control real Android and iOS devices

[droidrun/mobilerun](https://github.com/droidrun/mobilerun) — `Servidor MCP` · ★ 9.4k · Licença: MIT · Funciona com: Todos os clientes

Controla dispositivos Android e iOS reais com agentes de LLM: tocar, deslizar, digitar e automatizar fluxos; exige token de Authorization.

**Alternativas:**

- [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp) (★ 6.8k) — Servidor para desenvolvimento, automação e testes mobile em iOS e Android.
- [agent-device](https://github.com/callstack/agent-device) (★ 4.7k) — Verifica, controla e depura apps reais de iOS, Android, TV e desktop.
- [Argent](https://github.com/software-mansion/argent) (★ 2.9k) — Controla simuladores de iOS, emuladores de Android, TVs e apps Electron/web a partir de um agente de código.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport http mobilerun https://api.mobilerun.ai/v1/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Codex CLI** — Arquivo: `~/.codex/config.toml`

```toml
[mcp_servers.mobilerun]
url = "https://api.mobilerun.ai/v1/mcp"
bearer_token_env_var = "API_TOKEN"
```

**Gemini CLI**

```bash
gemini mcp add --transport http mobilerun https://api.mobilerun.ai/v1/mcp --header 'Authorization: Bearer <API_TOKEN>'
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "mobilerun": {
      "url": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "mobilerun": {
      "type": "http",
      "url": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
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
    "mobilerun": {
      "type": "remote",
      "url": "https://api.mobilerun.ai/v1/mcp",
      "enabled": true,
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "mobilerun": {
      "type": "streamableHttp",
      "url": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "mobilerun": {
      "serverUrl": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "mobilerun": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.mobilerun.ai/v1/mcp",
        "--header",
        "Authorization:Bearer <API_TOKEN>"
      ]
    }
  }
}
```
_Remote server bridged through the mcp-remote stdio proxy._

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  mobilerun:
    type: streamable_http
    uri: https://api.mobilerun.ai/v1/mcp
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "mobilerun": {
      "type": "streamable-http",
      "url": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "mobilerun": {
      "type": "streamable-http",
      "url": "https://api.mobilerun.ai/v1/mcp",
      "headers": {
        "Authorization": "Bearer <API_TOKEN>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `mobilerun.cordis.yml  →  dsh web --patch ./mobilerun.cordis.yml`

```yaml
- insert:
    - id: mcp-mobilerun
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: mobilerun
        transport: streamable-http
        url: https://api.mobilerun.ai/v1/mcp
        headers: {"Authorization":"Bearer <API_TOKEN>"}
```

</details>

<a id="windows-mcp"></a>

### Computer-use automation for Windows

[CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) — `Servidor MCP` · ★ 7.1k · Licença: MIT · Funciona com: Todos os clientes

Um servidor para automação estilo computer-use no Windows.

**Alternativas:**

- [Ui.Vision MCP](https://github.com/A9T9/RPA/tree/main/mcp) — Automação RPA de navegador e desktop com OCR, reconhecimento de imagem e controle real de mouse e teclado.
- [Computer Use](https://github.com/domdomegg/computer-use-mcp) (★ 376) — Controle de computador genérico e multiplataforma via capturas de tela, mouse e teclado.
- [jfarcand/mirroir-mcp](https://github.com/jfarcand/mirroir-mcp) (★ 222) — Controla um iPhone real via o iPhone Mirroring do macOS: captura de tela, toque, deslize e digitação.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio windows-mcp -- uvx windows-mcp
```

**Codex CLI**

```bash
codex mcp add windows-mcp -- uvx windows-mcp
```

**Gemini CLI**

```bash
gemini mcp add windows-mcp uvx windows-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "windows-mcp": {
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "windows-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "windows-mcp"
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
    "windows-mcp": {
      "type": "local",
      "command": [
        "uvx",
        "windows-mcp"
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
    "windows-mcp": {
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "windows-mcp": {
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "windows-mcp": {
      "source": "custom",
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  windows-mcp:
    type: stdio
    cmd: uvx
    args: ["windows-mcp"]
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "windows-mcp": {
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "windows-mcp": {
      "command": "uvx",
      "args": [
        "windows-mcp"
      ]
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `windows-mcp.cordis.yml  →  dsh web --patch ./windows-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-windows-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: windows-mcp
        transport: stdio
        command: uvx
        args: ["windows-mcp"]
        env: {}
        cwd: !!js process.cwd()
```

</details>

<a id="ssh-mcp"></a>

### Policy-gated SSH access

[SSH — policy-gated remote access](https://github.com/tufantunc/ssh-mcp) — `Servidor MCP` · ★ 751 · Licença: MIT · Funciona com: Todos os clientes

SSH auditado e controlado por política para hosts Linux e Windows, com papéis, aprovações e log de auditoria; exige senha ou passphrase de SSH.

**Alternativas:**

- [bvisible/mcp-ssh-manager](https://github.com/bvisible/mcp-ssh-manager) (★ 484) — Gestão de servidores SSH para agentes, com modos de segurança somente leitura e allowlist por servidor.
- [emisar](https://github.com/andrewdryga/emisar) (★ 336) — Permite que a IA opere servidores sem SSH, escolhendo e aprovando mudanças arriscadas com trilha de auditoria completa.
- [rhel-lightspeed/linux-mcp-server](https://github.com/rhel-lightspeed/linux-mcp-server) (★ 301) — Administração e diagnóstico de sistemas Linux, somente leitura.

<details><summary>Instalar</summary>

**Claude Code**

```bash
claude mcp add --transport stdio ssh-mcp --env SSH_MCP_PASSWORD='<SSH_MCP_PASSWORD>' --env SSH_MCP_PASSPHRASE='<SSH_MCP_PASSPHRASE>' --env SSH_MCP_SUDO_PASSWORD='<SSH_MCP_SUDO_PASSWORD>' -- npx -y ssh-mcp
```

**Codex CLI**

```bash
codex mcp add ssh-mcp --env SSH_MCP_PASSWORD='<SSH_MCP_PASSWORD>' --env SSH_MCP_PASSPHRASE='<SSH_MCP_PASSPHRASE>' --env SSH_MCP_SUDO_PASSWORD='<SSH_MCP_SUDO_PASSWORD>' -- npx -y ssh-mcp
```

**Gemini CLI**

```bash
gemini mcp add -e SSH_MCP_PASSWORD='<SSH_MCP_PASSWORD>' -e SSH_MCP_PASSPHRASE='<SSH_MCP_PASSPHRASE>' -e SSH_MCP_SUDO_PASSWORD='<SSH_MCP_SUDO_PASSWORD>' ssh-mcp npx -y ssh-mcp
```

**Cursor** — Arquivo: `.cursor/mcp.json (or ~/.cursor/mcp.json)`

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**VS Code (Copilot)** — Arquivo: `.vscode/mcp.json`

```json
{
  "servers": {
    "ssh-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
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
    "ssh-mcp": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "ssh-mcp"
      ],
      "enabled": true,
      "environment": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**Cline** — Arquivo: `cline_mcp_settings.json (Cline → MCP Servers → Configure)`

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**Windsurf** — Arquivo: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**Zed** — Arquivo: `~/.config/zed/settings.json (or .zed/settings.json)`

```json
{
  "context_servers": {
    "ssh-mcp": {
      "source": "custom",
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**Goose** — Arquivo: `~/.config/goose/config.yaml`

```yaml
extensions:
  ssh-mcp:
    type: stdio
    cmd: npx
    args: ["-y","ssh-mcp"]
    envs:
      SSH_MCP_PASSWORD: "<SSH_MCP_PASSWORD>"
      SSH_MCP_PASSPHRASE: "<SSH_MCP_PASSPHRASE>"
      SSH_MCP_SUDO_PASSWORD: "<SSH_MCP_SUDO_PASSWORD>"
    enabled: true
```

**Kiro** — Arquivo: `.kiro/settings/mcp.json (or ~/.kiro/settings/mcp.json)`

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**Roo Code** — Arquivo: `.roo/mcp.json`

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "ssh-mcp"
      ],
      "env": {
        "SSH_MCP_PASSWORD": "<SSH_MCP_PASSWORD>",
        "SSH_MCP_PASSPHRASE": "<SSH_MCP_PASSPHRASE>",
        "SSH_MCP_SUDO_PASSWORD": "<SSH_MCP_SUDO_PASSWORD>"
      }
    }
  }
}
```

**DeepSeek Harness** — Arquivo: `ssh-mcp.cordis.yml  →  dsh web --patch ./ssh-mcp.cordis.yml`

```yaml
- insert:
    - id: mcp-ssh-mcp
      name: '@deepseek-ai/dsh-mcp-client'
      config:
        serverName: ssh-mcp
        transport: stdio
        command: npx
        args: ["-y","ssh-mcp"]
        env: {"SSH_MCP_PASSWORD":"<SSH_MCP_PASSWORD>","SSH_MCP_PASSPHRASE":"<SSH_MCP_PASSPHRASE>","SSH_MCP_SUDO_PASSWORD":"<SSH_MCP_SUDO_PASSWORD>"}
        cwd: !!js process.cwd()
```

</details>

<a id="dsh-dsh-ios"></a>

### Live iOS device control

[ZSeven-W/dsh-ios](https://github.com/ZSeven-W/dsh-ios) — `Plugin nativo` · ★ 298 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Coloca um Simulador iOS ativo ou um iPhone conectado por USB dentro da conversa, com 22 ferramentas para inicializar, compilar, controlar a interface por identidade de acessibilidade ou texto via OCR, e hot-reload de previews SwiftUI.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ZSeven-W/dsh-ios
```

</details>

<a id="dsh-dsh-mobile"></a>

### Remote/mobile access to DSH

[saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) — `Plugin nativo` · ★ 288 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Acesse e controle uma sessão do DeepSeek Harness a partir de um app Android ou navegador móvel, via LAN ou conexão remota segura, com pareamento persistente de dispositivo e interface móvel personalizável.

**Alternativas:**

- [Blank-not-black/dsh-Remote#plugin](https://github.com/Blank-not-black/dsh-Remote/tree/main/packages/plugin) — Adiciona barra lateral/admin, gateway com token autorrecuperável, transferência /fs até 2GB e troca automática de servidor por latência.
- [Z-6354/dsh-mobile-hanui](https://github.com/Z-6354/dsh-mobile-hanui) (★ 15) — Adiciona PWA instalável com suporte offline, notificações push e gestos de toque como puxar para atualizar e deslizar da borda para voltar.
- [zhu1090093659/dsh-web#packages/dsh-remote-web-ui](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-remote-web-ui) — Adiciona pareamento por QR code em canal com token, com sync em tempo real via SSE entre os modos de interface móvel e desktop.
- [zexadev/dsh-tether](https://github.com/zexadev/dsh-tether) (★ 46) — Adiciona conexão ponto a ponto via iroh, sem necessidade de servidor, com fallback para um relay que só transporta dados cifrados.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:saya-ch/dsh-mobile
```

</details>

<a id="dsh-dsh-bridge"></a>

### Drive DSH from chat apps

[wenbin-wb/dsh-bridge](https://github.com/wenbin-wb/dsh-bridge) — `Plugin nativo` · ★ 170 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Adiciona acesso remoto e móvel via QR code na LAN e túneis Cloudflare ou personalizados, além de integrações de bot com WeChat, QQ, Feishu e Telegram, com autenticação embutida.

**Alternativas:**

- [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) (★ 47) — Agrega mais de 20 plataformas de chat, incluindo Discord e WhatsApp, em sessões unificadas com aprovações remotas e lista allowedUserIds.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wenbin-wb/dsh-bridge
```

</details>

<a id="dsh-dsh-android"></a>

### Live Android device control

[ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) — `Plugin nativo` · ★ 155 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Coloca um emulador Android ativo ou um telefone via USB dentro da conversa, controlado via adb, com 20 ferramentas para streaming, build/run com Gradle, interação por árvore de UI ou OCR, logcat e inspeção de processos/memória.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ZSeven-W/dsh-android
```

</details>

<a id="dsh-dsh-full-remote"></a>

### Full remote server administration

[JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) — `Plugin nativo` · ★ 43 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Oferece acesso total à API do servidor (settings, credentials, host.listDirectory) via proxy reverso protegido por token, com sessões por dispositivo, convites por QR, e aprovação, limite de CIDR, timeout de inatividade e TLS local opcionais.

**Alternativas:**

- [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) (★ 210) — Usa criptografia ponta a ponta (Noise IK + WebRTC/relay) e restringe clientes a pré-visualização somente leitura, sem shell ou área remota.
- [Buzzso/dsh-sev](https://github.com/Buzzso/dsh-sev) (★ 136) — Gerencia seu próprio host DSH remoto pela GUI local via túneis SSH que se autorrecuperam e uma lista combinada de sessões locais e remotas.
- [Linjiangxian0203/dsh-remote-tunnel](https://github.com/Linjiangxian0203/dsh-remote-tunnel) (★ 5) — Executa o dsh web em servidor Linux remoto via systemd (sem root), atrás de túnel SSH autorreconectável, com portas e auditoria.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:JUANWANG-BUAA/dsh-full-remote
```

</details>

<a id="dsh-dsh-web-lan-access"></a>

### LAN access for the Web UI

[AcidGr/dsh-web-lan-access](https://github.com/AcidGr/dsh-web-lan-access) — `Plugin nativo` · ★ 33 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Injeta um polyfill de crypto.randomUUID para que a Web UI do DSH continue funcionando ao ser aberta por endereços LAN ou Tailscale em HTTP puro, que os navegadores tratam como origens inseguras.

**Alternativas:**

- [wingsky-1/dsh-plugin-hub#packages/dsh-lan-proxy](https://github.com/wingsky-1/dsh-plugin-hub/tree/main/packages/dsh-lan-proxy) — Adiciona encaminhamento HTTP/HTTPS/WS com TLS, compressão adaptativa, proteção DNS rebinding e injeção automática do token para a LAN.
- [Leon0555/dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) (★ 14) — Adiciona uma opção de bind em 0.0.0.0 junto com o mesmo polyfill de randomUUID.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:AcidGr/dsh-web-lan-access
```

</details>

<a id="dsh-dsh-streaming-mcp-bridge"></a>

### Session events as MCP progress

[yabolee-kkk/dsh-streaming-mcp-bridge](https://github.com/yabolee-kkk/dsh-streaming-mcp-bridge) — `Plugin nativo` · ★ 0 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Transmite eventos ao vivo de uma sessão do DeepSeek Harness como notificações de progresso MCP, com um adaptador ACP para integração com cc-connect e Feishu.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:yabolee-kkk/dsh-streaming-mcp-bridge
```

</details>

<a id="dsh-dsh-web-ui-packages-dsh-ssh"></a>

### SSH host management panel

[zhu1090093659/dsh-web-ui#packages/dsh-ssh](https://github.com/zhu1090093659/dsh-web-ui/tree/main/packages/dsh-ssh) — `Plugin nativo` · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Adiciona um painel de operações SSH ao DSH: terminal web, transferência de arquivos SFTP com progresso, encaminhamento de porta local e execução de um comando em um cluster de hosts com a mesma configuração.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:zhu1090093659/dsh-web-ui#path:/packages/dsh-ssh
```

</details>
