# Remoto e mobile

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Live iOS device control](#dsh-dsh-ios) — Coloca um Simulador iOS ativo ou um iPhone conectado por USB dentro da conversa, com 22 ferramentas para inici…
- [Remote/mobile access to DSH](#dsh-dsh-mobile) — Acesse e controle uma sessão do DeepSeek Harness a partir de um app Android ou navegador móvel, via LAN ou con…
- [Drive DSH from chat apps](#dsh-dsh-bridge) — Adiciona acesso remoto e móvel via QR code na LAN e túneis Cloudflare ou personalizados, além de integrações d…
- [Live Android device control](#dsh-dsh-android) — Coloca um emulador Android ativo ou um telefone via USB dentro da conversa, controlado via adb, com 20 ferrame…
- [Full remote server administration](#dsh-dsh-full-remote) — Oferece acesso total à API do servidor (settings, credentials, host.listDirectory) via proxy reverso protegido…
- [LAN access for the Web UI](#dsh-dsh-web-lan-access) — Injeta um polyfill de crypto.randomUUID para que a Web UI do DSH continue funcionando ao ser aberta por endere…
- [Session events as MCP progress](#dsh-dsh-streaming-mcp-bridge) — Transmite eventos ao vivo de uma sessão do DeepSeek Harness como notificações de progresso MCP, com um adaptad…
- [SSH host management panel](#dsh-dsh-web-ui-packages-dsh-ssh) — Adiciona um painel de operações SSH ao DSH: terminal web, transferência de arquivos SFTP com progresso, encami…

<a id="dsh-dsh-ios"></a>

### Live iOS device control

[ZSeven-W/dsh-ios](https://github.com/ZSeven-W/dsh-ios) — `Plugin nativo` · ★ 295 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Coloca um Simulador iOS ativo ou um iPhone conectado por USB dentro da conversa, com 22 ferramentas para inicializar, compilar, controlar a interface por identidade de acessibilidade ou texto via OCR, e hot-reload de previews SwiftUI.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ZSeven-W/dsh-ios
```

</details>

<a id="dsh-dsh-mobile"></a>

### Remote/mobile access to DSH

[saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) — `Plugin nativo` · ★ 273 · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Acesse e controle uma sessão do DeepSeek Harness a partir de um app Android ou navegador móvel, via LAN ou conexão remota segura, com pareamento persistente de dispositivo e interface móvel personalizável.

**Alternativas:**

- [Blank-not-black/dsh-Remote#plugin](https://github.com/Blank-not-black/dsh-Remote/tree/main/packages/plugin) — Adiciona barra lateral/admin, gateway com token autorrecuperável, transferência /fs até 2GB e troca automática de servidor por latência.
- [Z-6354/dsh-mobile-hanui](https://github.com/Z-6354/dsh-mobile-hanui) (★ 16) — Adiciona PWA instalável com suporte offline, notificações push e gestos de toque como puxar para atualizar e deslizar da borda para voltar.
- [zhu1090093659/dsh-web#packages/dsh-remote-web-ui](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-remote-web-ui) — Adiciona pareamento por QR code em canal com token, com sync em tempo real via SSE entre os modos de interface móvel e desktop.
- [zexadev/dsh-tether](https://github.com/zexadev/dsh-tether) (★ 45) — Adiciona conexão ponto a ponto via iroh, sem necessidade de servidor, com fallback para um relay que só transporta dados cifrados.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:saya-ch/dsh-mobile
```

</details>

<a id="dsh-dsh-bridge"></a>

### Drive DSH from chat apps

[wenbin-wb/dsh-bridge](https://github.com/wenbin-wb/dsh-bridge) — `Plugin nativo` · ★ 166 · Licença: MIT · Funciona com: DeepSeek Harness apenas

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

[ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) — `Plugin nativo` · ★ 148 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Coloca um emulador Android ativo ou um telefone via USB dentro da conversa, controlado via adb, com 20 ferramentas para streaming, build/run com Gradle, interação por árvore de UI ou OCR, logcat e inspeção de processos/memória.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:ZSeven-W/dsh-android
```

</details>

<a id="dsh-dsh-full-remote"></a>

### Full remote server administration

[JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) — `Plugin nativo` · ★ 42 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Oferece acesso total à API do servidor (settings, credentials, host.listDirectory) via proxy reverso protegido por token, com sessões por dispositivo, convites por QR, e aprovação, limite de CIDR, timeout de inatividade e TLS local opcionais.

**Alternativas:**

- [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) (★ 204) — Usa criptografia ponta a ponta (Noise IK + WebRTC/relay) e restringe clientes a pré-visualização somente leitura, sem shell ou área remota.
- [Buzzso/dsh-sev](https://github.com/Buzzso/dsh-sev) (★ 137) — Gerencia seu próprio host DSH remoto pela GUI local via túneis SSH que se autorrecuperam e uma lista combinada de sessões locais e remotas.
- [Linjiangxian0203/dsh-remote-tunnel](https://github.com/Linjiangxian0203/dsh-remote-tunnel) (★ 5) — Executa o dsh web em servidor Linux remoto via systemd (sem root), atrás de túnel SSH autorreconectável, com portas e auditoria.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:JUANWANG-BUAA/dsh-full-remote
```

</details>

<a id="dsh-dsh-web-lan-access"></a>

### LAN access for the Web UI

[AcidGr/dsh-web-lan-access](https://github.com/AcidGr/dsh-web-lan-access) — `Plugin nativo` · ★ 31 · Licença: MIT · Funciona com: DeepSeek Harness apenas

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
