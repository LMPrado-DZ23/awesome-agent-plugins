# Frontend, Design System e Experiência Visual

## Tokens

Organizar em três camadas:

1. **Referência (primitivos):** paleta bruta, escala tipográfica, escala de espaço, radius, sombras, durações. Ex.: `blue-600`, `space-4`.
2. **Semânticos (sistema):** intenção, não aparência. Ex.: `color.surface`, `color.surface-raised`, `color.text`, `color.text-muted`, `color.border`, `color.action`, `color.action-hover`, `color.focus`, `color.success`, `color.warning`, `color.danger`, `motion.duration.fast`.
3. **Componente:** quando um componente precisa divergir. Ex.: `button.primary.bg`.

Regras:

- Componentes consomem tokens semânticos, nunca valores soltos (`#3b82f6`, `13px`).
- Tema claro/escuro troca apenas tokens semânticos; contraste verificado em **ambos**.
- Versionar tokens; mudanças de token são mudanças de API do design system.
- Escalas previsíveis (ex.: espaço em múltiplos de 4; tipografia com razão consistente).
- Densidade (confortável/compacta) como token quando o produto tiver tabelas e painéis.

## Tipografia e layout

- Definir papéis: display, título, corpo, rótulo, dado tabular (números monoespaçados/tabulares), código.
- Largura de leitura confortável para texto corrido (~60–80 caracteres).
- Grid e breakpoints baseados em conteúdo, não em modelos de aparelho.
- Layout mobile-first; testar 320 px de largura, 200% de zoom e reflow a 400%.
- Fontes: poucas famílias e pesos, `font-display` adequado, subset quando possível.

## Componentes

Para cada componente documentar: propósito, anatomia, props, composição, variantes, estados (default, hover, active, focus-visible, disabled, loading, read-only, error, success), comportamento de teclado, foco, mensagens, responsividade, tema, RTL, limites e exemplos bons/ruins.

- Começar do elemento HTML nativo equivalente (`button`, `a`, `input`, `select`, `dialog`, `details`).
- ARIA complementa semântica; nunca a substitui nem esconde.
- Seguir WAI-ARIA APG para modal, tabs, menu, combobox, listbox, grid, tooltip e disclosure.
- Em React, usar `useId` para relações label/descrição e preservar a estrutura na hidratação.

## Formulários

- Label visível e persistente para todo campo; placeholder não é label.
- Indicar obrigatórios e formato esperado antes do erro.
- Validar no cliente para feedback rápido **e** no servidor como fonte de verdade.
- Erro junto ao campo, associado por `aria-describedby`, com texto que explique como corrigir; resumo de erros no topo em formulários longos, com foco movido para ele.
- Não apagar o que o usuário digitou após erro.
- `autocomplete` correto, tipos de input adequados (`email`, `tel`, `numeric`) e teclado móvel certo.
- Botão de envio com estado de carregamento e proteção contra envio duplo; resultado anunciado.
- Ação destrutiva: confirmação proporcional ao impacto, texto específico ("Excluir 3 contratos") e, quando possível, desfazer.

## Dados, tabelas e dashboards

- Tabela semântica (`table`, `th`, `scope`, `caption`) para dados tabulares.
- Ordenação, filtro e paginação refletidos na URL quando fizer sentido compartilhar.
- Paginação ou virtualização para listas grandes; nunca carregar tudo.
- Números alinhados à direita, com unidade, formato de locale e precisão consistente.
- Estados: carregando (skeleton com dimensões reais), vazio (com próxima ação), filtro sem resultado (com limpar filtro), erro (com tentar novamente), permissão negada.
- Dashboards: cada gráfico responde a uma pergunta; título diz a conclusão ou o que medir; cor não é o único canal de informação; tabela ou texto alternativo para os dados.

## Content design e microcopy

- Voz consistente com a marca; tom ajustado ao momento (erro, sucesso, alerta, onboarding).
- Botões com verbo + objeto ("Salvar contrato", não "OK").
- Erro diz o que aconteceu, por quê (se útil) e o que fazer; nunca culpar o usuário nem expor stack trace.
- Estado vazio explica o valor e oferece a primeira ação.
- Termos do domínio do usuário, não jargão interno ou técnico.
- Datas relativas ("há 5 min") com data absoluta acessível no hover/título.

## Acessibilidade verificável

Baseline WCAG 2.2 AA. Verificar:

- nomes acessíveis, labels, headings em ordem, landmarks;
- foco visível e não obstruído por elementos fixos; ordem de teclado lógica; skip link;
- alvos de toque/clique com tamanho adequado;
- contraste de texto e de componentes não textuais;
- zoom/reflow sem perda de conteúdo;
- mensagens de status anunciadas (`role="status"`/`aria-live`) sem roubar foco;
- modais que prendem e devolvem foco;
- operação completa sem mouse;
- `prefers-reduced-motion` e `prefers-color-scheme` respeitados.

Automação com axe/Lighthouse é gate de regressão, não prova de conformidade. Complementar com teclado, leitor de tela (NVDA/VoiceOver/TalkBack), navegador real, revisão de conteúdo e, quando possível, pessoas com deficiência.

## Internacionalização

- Strings em catálogo de mensagens quando houver mais de um idioma previsto; nunca concatenar frases.
- Plural, gênero e ordem de palavras tratados pelo formatador (ICU MessageFormat ou equivalente).
- Datas, números, moedas e listas via `Intl`/biblioteca de locale; fuso horário explícito e armazenado em UTC no backend.
- Layout tolerante a textos até ~40% maiores; sem largura fixa para rótulos.
- `lang` no documento e em trechos de outro idioma; RTL com propriedades lógicas (`margin-inline-start`).

## Imagens e ativos

Antes de criar um ativo, definir trabalho, público, contexto, proporção, safe area, estilo, paleta, conteúdo exato e falhas aceitáveis. Para imagens geradas por IA, brief com composição, sujeito, iluminação, restrições e elementos a evitar; revisar mãos, texto, marcas e vieses. Para gráficos, diagramas e ícones de precisão, renderização determinística (SVG/código). Preservar direitos, identidade de marca e acessibilidade.

Implementação: dimensões reservadas (`width`/`height` ou `aspect-ratio`), `alt` útil quando informativa, `alt=""` quando decorativa, `srcset`/`sizes`, formatos modernos (AVIF/WebP com fallback), lazy loading fora da dobra, imagem principal acima da dobra sem lazy e com prioridade, ícones como SVG com `aria-hidden` quando acompanhados de texto.

## Motion

Tokens sugeridos (ajustar ao produto):

| Intenção | Duração típica | Uso |
|---|---|---|
| Micro feedback | 100–150 ms | hover, press, toggle |
| Transição de componente | 150–250 ms | abrir menu, expandir, tooltip |
| Transição de contexto | 250–400 ms | modal, painel lateral, troca de rota |

- Preferir `transform` e `opacity`; evitar animar `width`, `height`, `top`, `left`.
- Transições interrompíveis e reversíveis; easing de saída mais rápido que o de entrada.
- Cancelar loops quando invisíveis ou desmontados; medir long tasks, layout, paint e frames.
- `prefers-reduced-motion: reduce`: remover parallax, zoom, slide e loops decorativos; manter só feedback essencial ou fade curto.
- Nenhum conteúdo depende exclusivamente de animação.

## Performance

- Medir LCP, INP e CLS no percentil 75, segmentado por mobile/desktop; metas iniciais LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1.
- Orçamentos: JS inicial, CSS, fontes, imagem principal e número de requisições por rota.
- Otimizar TTFB, imagens, fontes, bundle, code splitting por rota, tarefas longas e hidratação.
- Reservar espaço para mídia, anúncios e conteúdo assíncrono para evitar CLS.
- Testar em aparelho modesto, CPU limitada, rede lenta e build de produção; comparar antes e depois de cada otimização.
