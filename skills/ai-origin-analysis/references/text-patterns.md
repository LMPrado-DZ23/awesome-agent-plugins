# Text and documentation patterns

Read this reference when reviewing prose, README files, documentation, comments, issues, wiki pages, reports, or other language-heavy artifacts.

## Content and reasoning

Treat these as corroborative clues only:

- grandiose generalizations about importance, legacy, impact, trends, milestones, or “crucial roles”;
- promotional, institutional, tourist-guide, or marketing tone in material expected to be neutral;
- dense praise without attribution or evidence;
- vague attributions such as “experts say”, “observers note”, or “reports indicate”;
- one or two opinions presented as broad consensus;
- formulaic sections on challenges, legacy, recognition, or future perspectives that end in unsupported optimism;
- generic analysis appended to factual sentences, especially gerund chains equivalent to “highlighting”, “reflecting”, or “strengthening”;
- claims of notability supported by lists of outlet types, awards, social presence, or “independent coverage” without source-specific substance;
- categories or lists treated as if they were independent entities;
- repetition of the same conclusion in introduction, headings, bullets, and summary.

## Vocabulary and syntax

Look for repeated clusters, not isolated words:

- unusually dense LLM-associated vocabulary equivalent to “additionally”, “crucial”, “robust”, “meticulous”, “vibrant”, “foster”, “enhance”, “landscape”, “testament”, “tapestry”, or “valuable”;
- systematic replacement of simple verbs such as “is”, “has”, or “does” with “serves as”, “acts as”, “represents”, “constitutes”, “offers”, or “features”;
- vague relationship verbs such as “connected”, “associated”, or “related” without describing the actual relationship;
- repeated negative parallelism such as “not only X but also Y” or “not X, but Y”;
- mechanical rule-of-three lists;
- excessive discourse fillers equivalent to “it is important to note”, “in this sense”, “moreover”, “therefore”, and “in conclusion”;
- long sentences adding abstract context without verifiable facts;
- literal translation, unnatural collocations, mixed language varieties, or abrupt shifts in register;
- artificial synonym variation used to avoid normal repetition.

## Structure and formatting

Check for:

- a heading that merely repeats the title;
- English-style title capitalization in a language that normally uses sentence case;
- headings containing only more headings;
- mechanical bold, italics, quotation marks, em dashes, or capitals;
- bullets where continuous prose would be more natural;
- every bullet beginning with a bold label and colon;
- decorative emojis, repeated horizontal rules, or skipped heading levels;
- tiny artificial tables or boilerplate section sequences;
- mixed Markdown and other markup systems;
- abrupt unfinished sections or sentences.

## User-facing leakage

Treat these as strong evidence of copied assistant output, while still distinguishing tool use from authorship:

- “I hope this helps”, “let me know”, “certainly”, or “I can adjust” inside the artifact;
- instructions to replace, delete, verify, or complete a section;
- hidden draft notes addressed to an editor or client;
- model disclaimers followed by speculation;
- placeholders such as `[name]`, `YOUR_API_KEY`, `INSERT_SOURCE_URL`, or incomplete dates;
- old chatbot refusals such as “as an AI language model”;
- citation syntax, tool messages, or interface artifacts left in the final text.

## Sources and citations

Verify every important claim independently. Pay special attention to broken links, nonexistent domains, unresolved DOIs, invalid ISBNs, real sources that do not support the attached claim, generic citations at the end of long paragraphs, commercial pages presented as independent coverage, and citations named but never used.

Tracking parameters such as `utm_source=chatgpt.com`, `utm_source=openai`, `utm_source=copilot.com`, or `referrer=grok.com` show at most that a tool helped locate or copy a source. They do not prove that the tool wrote the text.

## Tool residues

Look for interface-specific markers such as `contentReference`, `oaicite`, `turn0search0`, `attributableIndex`, Gemini-style `[cite: 1]`, `span_1`, Grok `grok-card`, DeepSeek bracket artifacts, Perplexity `[attached_file:1]` or `[web:1]`, and `:::writing{variant="document" id="..."}`. Preserve the exact artifact and source context before interpreting it. These markers strongly suggest copying or tool use, but do not prove that the same tool generated every sentence.

## False-positive checks

Before attributing these patterns to AI, test whether they are explained by translation, proofreading, a house style, a template, a formatter, accessibility requirements, a formal genre, a non-native writer, collaborative editing, or ordinary human boilerplate. Apply patterns to the artifact’s context and history, not to language identity or writing ability.
