# Contributing

[English](#english) | [Português](#português)

## English

The READMEs and everything in `catalog/` are **generated** — never edit them by hand.
The catalog lives in `data/entries/`, one YAML file per entry.

### Add an entry

1. Create `data/entries/portable/<id>.yml` (MCP servers, skills, standards, tools, lists)
   or `data/entries/native/<client>/<id>.yml` (plugins for one client).
2. Run `npm ci && npm run build && npm test` and commit the regenerated files
   (CI fails if they are stale).
3. Open a PR with **at most 3 entries**.

```yaml
id: playwright-mcp                 # unique lowercase slug
name: Playwright MCP
url: https://github.com/microsoft/playwright-mcp
type: mcp-server                   # mcp-server | skill-pack | native-plugin | marketplace | standard | tool | list
category: browser                  # see lib/taxonomy.mjs
license: Apache-2.0                # SPDX id, or null
tags: [browser, automation]
description:
  en: One factual sentence about what it does. No marketing.
  pt: A mesma frase em português.
mcp:                               # mcp-server only — ONE canonical spec, rendered for every client
  name: playwright                 # server name used in configs (optional, defaults to id)
  prereq: pip install something    # optional, shown before the install step
  stdio: { command: npx, args: ["@playwright/mcp@latest"], env: { API_KEY: "<API_KEY>" } }
  # http: { url: https://example.com/mcp, headers: { Authorization: "Bearer <TOKEN>" } }
```

Other types:

```yaml
skill: { source: owner/repo }                    # skill-pack — anything `npx skills add` accepts
native: { client: dsh, install: "dsh plugin --profile web add github:owner/repo" }   # native-plugin / marketplace
alternatives:                                     # up to 4 projects that solve the same problem
  - name: owner/other
    url: https://github.com/owner/other
    adds: { en: What it does that the main entry does not., pt: … }
```

### Rules

- **It works** and the description matches the code. Numbers and command names are checked.
- **No duplicates.** If an entry already solves the problem, add your project as an
  `alternative` with what it *adds*, or argue in the PR why it should replace the current pick.
- **No secrets.** `env` and `headers` values must be placeholders like `<GITHUB_PAT>` — the
  validator rejects anything else.
- **Maintained.** A weekly job flags archived or deleted repositories; they are removed.
- Listing is not a security review. Obfuscated code, credential exfiltration or surprising
  install-time behaviour gets an entry rejected or removed.

### Adding a client

Clients are defined in [`lib/clients.mjs`](lib/clients.mjs): one renderer that turns the
canonical MCP spec into that client's documented command or config, plus its `npx skills`
agent id. Link the official docs in the PR and add a test in `test/`.

### Re-importing DeepSeek Harness plugins

```bash
git clone --depth 1 https://github.com/awesome-dsh-plugin/awesome-dsh-plugin data/cache/src
cp -r data/cache/src/data data/cache/dsh-upstream
npm run import:dsh:meta                                      # GitHub stats via gh
node scripts/import/dsh-select.mjs --candidates              # top candidates per category
# merge candidates following scripts/import/MERGE_SPEC.md → data/cache/dsh-merged/*.json
DSH_UPSTREAM_REF=<commit> node scripts/import/dsh-write.mjs  # writes data/entries/dsh/
npm run build && npm test
```

## Português

Os READMEs e tudo em `catalog/` são **gerados** — nunca edite à mão. O catálogo fica em
`data/entries/`, um arquivo YAML por item.

1. Crie `data/entries/portable/<id>.yml` (MCP, skills, padrões, ferramentas, listas) ou
   `data/entries/native/<cliente>/<id>.yml` (plugins de um cliente só). O formato está acima.
2. Rode `npm ci && npm run build && npm test` e faça commit dos arquivos gerados.
3. Abra um PR com **no máximo 3 itens**.

Regras: precisa funcionar e a descrição tem que bater com o código; sem duplicatas (projetos
parecidos entram como `alternatives`, dizendo o que acrescentam); sem segredos (só placeholders
como `<GITHUB_PAT>`); repositórios arquivados ou removidos saem na checagem semanal. Estar
listado não é auditoria de segurança.
