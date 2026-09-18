# Evidence classification and reporting

Read this reference after collecting findings, before writing the conclusion.

## Evidence levels

| Level | Meaning | Examples | Required wording |
|---|---|---|---|
| Direct | A provenance fact is recorded and verifiable | Disclosure, prompt log, agent log, bot/co-author commit, tied tool configuration | “AI use is documented by…” |
| Strongly corroborated | Independent signals across provenance, history, behavior, and artifacts reinforce one another | Logs plus generated artifacts plus autonomous commits plus consistent defects | “AI use is strongly corroborated, but the exact contribution is…” |
| Compatible | Patterns fit AI use but have plausible human explanations | Generic style, duplication, invented dependency, weak tests, template architecture | “The artifact has signals compatible with AI use; this is not proof.” |
| Objective problem without attribution | A real defect is verified, but origin is unknown | Security flaw, broken source, nonexistent package, bad test, incoherent docs | “The defect is verified; authorship remains inconclusive.” |
| Likely false alarm | A clue is better explained by non-AI causes | Translation, house style, formatter, template, ordinary human error | “The apparent signal is likely explained by…” |

Do not inflate the level because many clues are repetitions of the same underlying pattern. Record the source, location, independence, and alternative explanation for each finding.

## Minimum report template

# Analysis of possible AI origin

## Conclusion
State the strongest defensible claim and explicitly state what cannot be concluded. Distinguish “AI was used”, “a substantial contribution is likely”, and “the whole artifact was generated”.

## Scope and evidence preserved
Identify the artifact, version, date, access limits, and evidence reviewed. Note if logs, history, or original files were unavailable.

## Findings
For each finding, record:

- **Location:** passage, file, line, commit, URL, log, or runtime behavior.
- **Observation:** what is directly visible or reproducible.
- **Category:** provenance, style, structure, source, code, dependency, test, security, documentation, or process.
- **Level:** direct, corroborative, weak, or likely false alarm.
- **Alternative explanation:** the strongest plausible non-AI cause.
- **Impact:** whether it creates a correctness, security, maintenance, source, or governance problem.

## Independent verification
Describe fact checks, link resolution, dependency installation, test runs, static analysis, security checks, documentation comparison, and history inspection. Separate tests performed by the reviewer from tests supplied by the artifact.

## Limitations
State missing logs, inaccessible commits, language or translation effects, editing after generation, mixed human–AI authorship, detector limitations, and any uncertainty about the tool or model.

## Recommended actions
Prioritize concrete remediation: fix verified defects, review sensitive changes, constrain agent permissions, validate dependencies, improve tests, correct sources, update documentation, preserve provenance, and add governance.

## Safe language

Prefer:

- “The repository contains a commit explicitly attributed to an AI tool.”
- “The README includes an unremoved assistant instruction.”
- “The package name does not resolve, and the code fails independently reproduced installation.”
- “Several independent signals are compatible with AI-assisted development, but they do not establish total generation.”
- “The security issue is verified; its origin cannot be determined from the available evidence.”

Avoid:

- “This definitely came from ChatGPT” based on style;
- “The author cannot code” based on a bug or detector score;
- “AI wrote every line” when the record shows only assistance;
- numerical AI probabilities without a validated method and uncertainty bounds;
- naming or exposing a person based on stylistic resemblance.

## Final checklist

Before delivery, verify that the report:

1. states the object and claim precisely;
2. distinguishes provenance from quality;
3. cites concrete locations;
4. includes alternative explanations;
5. does not rely on a detector alone;
6. avoids invented evidence;
7. protects private data and credentials;
8. reports uncertainty proportionally;
9. recommends remediation of the concrete issue;
10. does not facilitate concealment or audit evasion.
