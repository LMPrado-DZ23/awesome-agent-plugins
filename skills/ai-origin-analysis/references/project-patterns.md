# Software and project patterns

Read this reference when reviewing source code, repositories, applications, websites, games, APIs, infrastructure, CI/CD, or agentic development workflows.

## Provenance and workflow

The strongest project signals are explicit disclosure, preserved prompts, agent or IDE logs, bot/co-author commits, tool configuration tied to the repository, and reproducible generation records. Other workflow clues include:

- an entire application or module created from natural-language prompts;
- acceptance of broad diffs without meaningful human review;
- vague automated commit messages despite large changes;
- repeated prompt–error–patch cycles and random changes until a bug disappears;
- autonomous edits across code, tests, docs, Git, APIs, databases, or deployment;
- multiple agents with analyst, architect, coder, reviewer, tester, or documenter roles;
- LangGraph, AutoGen, CrewAI, MCP, or equivalent orchestration configuration;
- automated branches, commits, pull requests, deployments, or rollbacks.

These show process or tool use. They do not prove that every line was machine-generated.

## Code and dependencies

Inspect for patterns that are common in poorly reviewed generated code:

- nonexistent packages, misspelled libraries, incompatible versions, invented methods, endpoints, parameters, or APIs;
- code that passes a superficial path but mishandles nulls, bounds, states, concurrency, transactions, async work, or failure recovery;
- nested conditionals, generic exception handlers, duplicated flags, and patches that hide rather than fix a root cause;
- configuration values, ports, URLs, tables, services, or environment assumptions that do not exist;
- inconsistent naming, formatting, types, validation, error handling, or design conventions;
- comments and docstrings that merely restate code, generic abstractions, or functions too long for their responsibility;
- duplicated components, validators, wrappers, and near-identical modules;
- architecture copied from a popular template or tutorial without domain-specific trade-offs;
- high churn, reversions, and immediate rewrites of the same blocks.

A human can produce every one of these patterns. Treat them as corroboration only, and verify the actual defect.

## Security and operations

Audit authentication, authorization, input validation, file isolation, command construction, secrets, tokens, cryptography, error disclosure, dependencies, and permissions. Look for development mode in production, open CORS, excessive privileges, exposed secrets, unsafe uploads, and unreviewed changes to Docker, Terraform, Kubernetes, CI/CD, or production.

For agentic projects, check whether untrusted README files, issues, documents, or web pages can inject instructions; whether an agent can exfiltrate secrets or execute commands without approval; and whether logs show out-of-scope actions. Destructive database or file changes, fabricated demo data, and logs that claim success after failure are serious governance signals.

## Tests and quality

Review whether generated or automated tests:

- cover only the happy path;
- restate the implementation instead of independently checking behavior;
- omit edge, failure, authorization, security, concurrency, recovery, and regression cases;
- achieve high coverage without covering business risk;
- exist in large numbers but fail to detect real defects;
- are not paired with static analysis and meaningful human review.

Compare simple features with multi-file integrations, poorly documented libraries, persistence, concurrency, security, and safety-critical behavior. A sharp gap between easy functionality and complex reliability is a useful risk signal, not an authorship proof.

## Documentation and coherence

Compare requirements, architecture diagrams, API descriptions, source code, tests, and deployment. Look for generic README text, commands or services that do not exist, diagrams that do not match implementation, unsupported claims about production readiness or scalability, forgotten placeholders, and documentation generated in bulk without decisions or trade-offs.

## Investigation commands and artifacts

Use ordinary repository evidence where authorized: commit history, diff size and churn, branch and PR review, dependency manifests and lockfiles, CI logs, agent sessions, configuration, test reports, static-analysis results, deployment records, and runtime logs. Preserve originals, minimize exposure of secrets, and redact personal or private information in the report.

## Corrective priority

Fix the concrete risk first: remove invented dependencies, repair logic, patch vulnerabilities, constrain agent permissions, improve tests, align documentation, and add human review or governance. Do not infer that the project is machine-built merely because it has bugs or a familiar architecture.
