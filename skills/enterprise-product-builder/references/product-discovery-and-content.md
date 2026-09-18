# Discovery, Métricas e Conteúdo

## Enquadramento do problema

Responder antes de desenhar telas:

1. **Quem** é o usuário principal e quem mais é afetado (admin, suporte, cliente final, auditor)?
2. **Qual job** a pessoa quer realizar? Formato: *Quando [situação], quero [motivação], para [resultado esperado].*
3. **Como resolve hoje** e o que dói (tempo, erro, custo, risco, retrabalho)?
4. **O que muda** se der certo, em números?
5. **O que não vamos fazer** nesta versão?
6. **Qual o menor fluxo** que entrega valor real e pode ser medido?

Quando não houver acesso a usuários, registrar hipóteses explicitamente e como serão validadas depois do lançamento.

## Métricas de sucesso

- Uma métrica principal ligada ao valor para o usuário/negócio (ex.: tarefas concluídas, horas economizadas por semana, conversão de trial, tempo até primeiro valor).
- Métricas de apoio: ativação, retenção, tempo de tarefa, taxa de erro, abandono por etapa.
- **Métricas de proteção (guardrails):** o que não pode piorar (latência, taxa de erro, tickets de suporte, cancelamento).
- Definir linha de base, meta e janela de avaliação.

## Critérios de aceite

- Observáveis e testáveis; evitar "deve ser rápido" ou "intuitivo".
- Formato Dado/Quando/Então quando ajudar:
  - *Dado* um usuário com papel Editor no tenant A,
  - *Quando* tenta abrir um documento do tenant B pela URL,
  - *Então* recebe 404 e nenhum dado do documento é exposto.
- Incluir caminhos de erro, permissão negada, estado vazio e limites, não só o caminho feliz.
- Incluir critérios não funcionais relevantes: acessibilidade, performance, privacidade, auditoria.

## Fluxos e estados

- Mapear o fluxo principal passo a passo, incluindo entrada (link, notificação, busca) e saída (confirmação, próximo passo).
- Para cada tela: objetivo, dados exibidos, ações, permissões e estados (carregando, vazio, parcial, erro, sucesso, sem permissão, offline quando aplicável).
- Identificar pontos de decisão, ações destrutivas e onde o usuário pode se perder.

## Escopo e fatiamento

- Fatiar verticalmente: cada fatia entrega um fluxo utilizável ponta a ponta.
- Priorizar pelo valor e risco: primeiro o que valida a hipótese principal ou reduz o maior risco técnico.
- Registrar explicitamente o que ficou para depois e por quê.

## Analytics com privacidade

- Taxonomia de eventos consistente: `objeto_ação` no passado (`contrato_criado`, `convite_enviado`), com propriedades documentadas.
- Instrumentar apenas o necessário para as métricas definidas.
- Não enviar PII, conteúdo de formulários, tokens ou IDs sensíveis para ferramentas de analytics.
- Respeitar consentimento quando exigido e oferecer opt-out quando aplicável.
- Validar em ambiente de teste que os eventos disparam uma única vez e com as propriedades corretas.

## Content design

- Escrever o conteúdo real cedo; layout desenhado com lorem ipsum quebra com texto real.
- Hierarquia: o mais importante primeiro; frases curtas; um assunto por parágrafo.
- Rótulos e botões com verbo e objeto; consistência de termos em todo o produto (glossário).
- Mensagens de erro: o que aconteceu + o que fazer; linguagem neutra, sem culpa, sem código técnico.
- Estados vazios: explicar o valor, mostrar a primeira ação, não parecer quebrado.
- Onboarding: levar ao primeiro valor rápido; evitar tour longo antes de a pessoa fazer algo.
- Notificações e e-mails: assunto claro, uma ação principal, preferência de frequência respeitada.
- Termos legais e de privacidade linkados onde a decisão acontece, em linguagem compreensível.
