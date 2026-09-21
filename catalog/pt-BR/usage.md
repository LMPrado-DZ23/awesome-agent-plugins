# Uso e custo

[← Voltar ao índice](../../README.pt-BR.md)

> Esta página é gerada a partir de `data/entries/` — não edite à mão.

- [Context lifecycle dashboard](#dsh-dsh-context) — Painel, comando /context e navegador para gerenciar todo o ciclo de vida do contexto: composição categorizada,…
- [Session and daily cost dashboard](#dsh-dsh-cost-meter) — Acompanha o custo de API por sessão e diário contra um orçamento com percentual de uso, mostra o saldo oficial…
- [Relay-attributed usage tracking](#dsh-tokenledger) — Painel lateral que atribui tokens ao site de relay que atendeu cada requisição, lido da sua configuração de pr…
- [Cross-session personal usage center](#dsh-dsh-personal-center) — Central pessoal local e offline: estatísticas de uso entre sessões, estimativa de custo por modelo, instruções…
- [Gamified usage tier ranking](#dsh-dsh-whale-meter) — Classifica o consumo mensal de tokens em níveis compartilháveis com emojis, com estimativa de percentil calcul…
- [Multi-provider quota auto-discovery](#dsh-dsh-quota-panel) — Cápsula no canto inferior direito que descobre automaticamente cada provedor configurado (DeepSeek, OpenRouter…
- [Per-session usage and cost dashboard](#dsh-dsh-usage-dashboard-plus) — Mostra o saldo do DeepSeek e o gasto diário estimado, mescla registros externos de chamadas de visão e adicion…
- [Proactive per-provider rate limiting](#dsh-dsh-rate-limiter) — Enfileira requisições que excederiam um limite de taxa por token-bucket de cada provedor antes de serem enviad…

<a id="dsh-dsh-context"></a>

### Context lifecycle dashboard

[bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) — `Plugin nativo` · ★ 1.5k · Licença: Apache-2.0 · Funciona com: DeepSeek Harness apenas

Painel, comando /context e navegador para gerenciar todo o ciclo de vida do contexto: composição categorizada, detalhes de conteúdo, tendências de evolução ao longo do tempo e eventos de compactação e injeção.

**Alternativas:**

- [GooodWei/context-vista](https://github.com/GooodWei/context-vista) (★ 11) — Mostra um gráfico de rosca ao vivo da alocação de tokens de contexto e custo estimado em um painel flutuante menor.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:bowenliang123/dsh-context
```

</details>

<a id="dsh-dsh-cost-meter"></a>

### Session and daily cost dashboard

[Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) — `Plugin nativo` · ★ 320 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Acompanha o custo de API por sessão e diário contra um orçamento com percentual de uso, mostra o saldo oficial da conta, mantém um painel de histórico e sincroniza preços oficiais de horário de pico/fora de pico com um clique.

**Alternativas:**

- [feibi-mochi/deepseek-harness-control-center](https://github.com/feibi-mochi/deepseek-harness-control-center) (★ 73) — Adiciona recarga oficial, alertas de conclusão, layouts flexíveis e controles de sessão assistidos por agente.
- [kenz1117/dsh-ui-usage-billing](https://github.com/kenz1117/dsh-ui-usage-billing) (★ 56) — Estima o custo em CNY a partir de um catálogo de preços multi-provedor atualizado e isenta rotas de planos por assinatura do total.
- [nonewind/dsh-spend](https://github.com/nonewind/dsh-spend) (★ 8) — Mostra um painel flutuante com estatísticas de tokens por modelo, por dia e por sessão.
- [Max-Samson/dsh-usage-chart](https://github.com/Max-Samson/dsh-usage-chart) (★ 9) — Adiciona gráficos SVG sem dependências para uso e custo por turno, direto abaixo do campo de composição.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Han-1413141/dsh-cost-meter
```

</details>

<a id="dsh-tokenledger"></a>

### Relay-attributed usage tracking

[zh667/TokenLedger](https://github.com/zh667/TokenLedger) — `Plugin nativo` · ★ 202 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Painel lateral que atribui tokens ao site de relay que atendeu cada requisição, lido da sua configuração de provedor existente: totais de hoje/mês/geral, detalhamento por site e por modelo, um mapa de calor anual de atividade e saldos de New API/Sub2API/DeepSeek.

**Alternativas:**

- [Jannchie/dsh-bill](https://github.com/Jannchie/dsh-bill) (★ 3) — Precifica cada chamada a partir de um catálogo online com mais de 8000 modelos e atribui o gasto por saída de ferramenta, saída de modelo ou prompt de sistema.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:zh667/TokenLedger
```

</details>

<a id="dsh-dsh-personal-center"></a>

### Cross-session personal usage center

[PolinniZhong/dsh-personal-center](https://github.com/PolinniZhong/dsh-personal-center) — `Plugin nativo` · ★ 120 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Central pessoal local e offline: estatísticas de uso entre sessões, estimativa de custo por modelo, instruções globais personalizadas, ajuste de tamanho de fonte, um bichinho de estimação de desktop orientado a dados e uma visão geral do status das conversas.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:PolinniZhong/dsh-personal-center
```

</details>

<a id="dsh-dsh-whale-meter"></a>

### Gamified usage tier ranking

[Shiye-10Pages/dsh-whale-meter](https://github.com/Shiye-10Pages/dsh-whale-meter) — `Plugin nativo` · ★ 11 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Classifica o consumo mensal de tokens em níveis compartilháveis com emojis, com estimativa de percentil calculada localmente, preços precisos para 46 modelos de 6 fornecedores, preenchimento de sessões anteriores à instalação e comparação de preços antigo versus novo. Somente local, sem telemetria.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Shiye-10Pages/dsh-whale-meter
```

</details>

<a id="dsh-dsh-quota-panel"></a>

### Multi-provider quota auto-discovery

[wenzetan/dsh-quota-panel](https://github.com/wenzetan/dsh-quota-panel) — `Plugin nativo` · ★ 9 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Cápsula no canto inferior direito que descobre automaticamente cada provedor configurado (DeepSeek, OpenRouter, SiliconFlow, GLM, one-api/new-api, planos de codificação) e mostra saldo ou uso rolante de 5 horas e semanal, com limiares de alerta e suporte a proxy.

**Alternativas:**

- [FengHuoLinShan/dsh-plugin-llm-balance](https://github.com/FengHuoLinShan/dsh-plugin-llm-balance) (★ 3) — Mostra até 3 provedores usados recentemente com janelas de cota coloridas e horários de reset em um cartão arrastável.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:wenzetan/dsh-quota-panel
```

</details>

<a id="dsh-dsh-usage-dashboard-plus"></a>

### Per-session usage and cost dashboard

[1HelloMan1/dsh-usage-dashboard-plus](https://github.com/1HelloMan1/dsh-usage-dashboard-plus) — `Plugin nativo` · ★ 3 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Mostra o saldo do DeepSeek e o gasto diário estimado, mescla registros externos de chamadas de visão e adiciona um painel por sessão com estatísticas de modelo, tempo até o primeiro token, taxa de cache, logs de chamadas, estimativas de custo, filtros e exportação CSV.

**Alternativas:**

- [yokesky/dsh-usage-lens](https://github.com/yokesky/dsh-usage-lens) (★ 2) — Adiciona um mapa de calor de atividade de 280 dias no estilo GitHub e um gráfico de rosca de uso por modelo.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:1HelloMan1/dsh-usage-dashboard-plus
```

</details>

<a id="dsh-dsh-rate-limiter"></a>

### Proactive per-provider rate limiting

[Xidong-AI/dsh-rate-limiter](https://github.com/Xidong-AI/dsh-rate-limiter) — `Plugin nativo` · ★ 3 · Licença: MIT · Funciona com: DeepSeek Harness apenas

Enfileira requisições que excederiam um limite de taxa por token-bucket de cada provedor antes de serem enviadas, evitando erros 429 do provedor.

<details><summary>Instalar</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Xidong-AI/dsh-rate-limiter
```

</details>
