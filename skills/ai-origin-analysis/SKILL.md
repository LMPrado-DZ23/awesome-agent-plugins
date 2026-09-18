---
name: ai-origin-analysis
description: Analyze whether text, documentation, code, software projects, repositories, or digital artifacts may have been generated or modified by AI without treating stylistic clues as proof. Use for AI-authorship assessment, content provenance review, vibe-coding analysis, code-quality investigation, source validation, and responsible reporting of AI-related evidence.
---

# AI origin analysis

Use this skill to investigate possible AI generation or modification of text, documentation, code, applications, repositories, infrastructure, and related artifacts. Treat it as a forensic-review workflow, not as an authorship accusation tool.

## Non-negotiable principles

1. **Never treat one pattern as proof.** A word, sentence, bug, dependency, README, formatting choice, detector score, or coding style is only an indication.
2. **Separate AI use from total generation.** Copilot assistance, translation, test generation, review, search, or editing does not mean the whole artifact was machine-produced.
3. **Prioritize verifiable defects.** Find incorrect claims, broken sources, nonexistent dependencies, vulnerabilities, bad tests, incoherent documentation, or governance failures before discussing authorship.
4. **Never invent evidence.** Do not fabricate prompts, logs, commits, model names, percentages, dates, authors, or tool provenance.
5. **Never use a detector as the sole verdict.** Explain false positives, false negatives, language effects, editing, templates, and human collaboration.
6. **Preserve uncertainty.** Use “documented AI use”, “strongly corroborated”, “compatible with AI use”, “objective problem without conclusive attribution”, or “insufficient evidence”.
7. **Offer alternative explanations.** Consider translation, proofreading, beginner code, team conventions, popular templates, formatting tools, accessibility style, and ordinary human error.
8. **Do not identify or expose a person from style alone.** Protect private prompts, credentials, personal data, and repository information not needed for the review.
9. **Do not help conceal provenance or bypass audits.** The skill is for responsible assessment and remediation, not evasion.

## Workflow

1. **Define the object and claim.** Decide whether the target is prose, documentation, source code, a repository, a running application, infrastructure, or the development process. State whether the question concerns any AI use, substantial AI contribution, or near-total generation.
2. **Preserve evidence.** Save the relevant version, URL, file path, commit, pull request, CI log, agent log, metadata, and timestamp. Do not alter the original before recording it.
3. **Inspect direct provenance first.** Look for explicit disclosure, prompt/session logs, bot or co-author commits, IDE/agent configuration, generation records, and reproducible tool traces.
4. **Select the reference guide.** For prose or documentation, read [references/text-patterns.md](references/text-patterns.md). For software or projects, read [references/project-patterns.md](references/project-patterns.md). For confidence, alternatives, and reporting, read [references/evidence-and-reporting.md](references/evidence-and-reporting.md). Read both domain references when the target is a full project with documentation.
5. **Collect independent signals.** Compare style, structure, history, behavior, sources, dependencies, tests, security, documentation, and process. Do not count repeated manifestations of the same clue as independent evidence.
6. **Test the artifact independently.** Verify claims and citations; resolve dependencies; run tests; add edge, failure, authorization, security, and regression cases; compare docs with implementation; inspect Git history and configuration.
7. **Classify each finding.** Label it as direct evidence, corroborative evidence, weak indication, or likely false alarm. Record the observed location and an alternative explanation.
8. **Classify the overall conclusion.** Use the levels in [references/evidence-and-reporting.md](references/evidence-and-reporting.md), and never overstate what the evidence supports.
9. **Recommend remediation.** Address the concrete issue: fix the vulnerability, source, dependency, test, documentation, review, or governance gap. Do not make an authorship accusation the remedy.

## Evidence hierarchy

- **Direct:** explicit disclosure; preserved prompt or agent log; identifiable bot/co-author commit; tool configuration tied to the artifact; reproducible generation record.
- **Corroborative:** multiple independent signals across provenance, history, behavior, and artifacts that reinforce one another.
- **Weak:** vocabulary, polish, verbosity, generic structure, duplication, a common bug, popular architecture, or detector output.
- **Likely false alarm:** a clue adequately explained by translation, human editing, a template, formatter, team convention, language variety, or normal human error.

## Required response format

When reporting an analysis, use this structure unless the user requests another format:

1. **Conclusion:** what can and cannot be claimed.
2. **Observed evidence:** concrete facts with file, passage, commit, log, or URL locations.
3. **Corroborating signals:** independent patterns that reinforce the finding.
4. **Alternative explanations:** plausible non-AI causes.
5. **Objective problems:** content, source, code, security, tests, documentation, or process defects.
6. **Confidence:** direct, strongly corroborated, compatible, inconclusive, or likely false alarm.
7. **Next checks:** the smallest useful set of additional verifications.
8. **Remediation:** specific corrective action.

## Final gate

Before concluding, ask: **Have I proved a provenance fact, or only noticed a resemblance? Have I separated AI use from authorship? Have I verified the concrete defect independently? Have I stated what remains uncertain?** If any answer is no, lower the confidence and do not present the result as proof.

## Reference navigation

- [Text and documentation patterns](references/text-patterns.md): read for prose, README files, documentation, comments, citations, formatting, and tool residues.
- [Software and project patterns](references/project-patterns.md): read for source code, repositories, dependencies, tests, security, infrastructure, agents, and project coherence.
- [Evidence classification and reporting](references/evidence-and-reporting.md): read before drafting findings, confidence, limitations, and recommendations.

## Base references

- [Wikipédia: Sinais de texto gerado por inteligência artificial](https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Sinais_de_texto_gerado_por_intelig%C3%AAncia_artificial)
- [Vibe coding — Wikipédia](https://pt.wikipedia.org/wiki/Vibe_coding)
- [Vibe coding — Wikipedia](https://en.wikipedia.org/wiki/Vibe_coding)
- [AI-assisted software development — Wikipedia](https://en.wikipedia.org/wiki/AI-assisted_software_development)
- [Ciclo de Desenvolvimento de Software Aumentado por IA — Wikipédia](https://pt.wikipedia.org/wiki/Ciclo_de_Desenvolvimento_de_Software_Aumentado_por_IA)
