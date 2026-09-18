# Security

**Installing anything from this catalog runs third-party code with your permissions.**
MCP servers, skills and plugins can read files, use credentials and reach the network.
Tool-approval prompts in your agent do not sandbox that code. Being listed here is not a
security review — read the source and prefer read-only or scoped modes where offered.

What this repository does to reduce risk:

- Entries never contain secrets; the validator only accepts placeholders such as `<API_KEY>`.
- `aap install --run` refuses to execute commands that still contain placeholders and never
  edits your config files — config snippets are printed for you to merge.
- A weekly job flags archived or deleted repositories.

## Reporting

- A problem **in a listed project** → report it to that project.
- A malicious or compromised entry, or a vulnerability in this repository's CLI/scripts →
  open a [private security advisory](../../security/advisories/new) (preferred) or an issue
  without exploit details. We aim to respond within 7 days and remove confirmed malicious
  entries immediately.
