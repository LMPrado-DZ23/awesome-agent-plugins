# Sessions & Messages

[← Back to the index](../README.md)

> This page is generated from `data/entries/` — do not edit by hand.

- [Visual non-linear conversation map](#dsh-dsh-synapse) — Visual, non-linear conversation workspace for DeepSeek Harness: sessions, follow-ups, and branches become a br…
- [Cross-tool session import and export](#dsh-dsh-chat-import) — Import full-fidelity chat histories from 13 coding agents (Claude Code, Codex, ChatGPT, Cursor, Gemini, openco…
- [Conversation rewind via change ledger](#dsh-dsh-turn-rewind) — Rewind conversation and workspace state, powered by a persistent Change Ledger.
- [Archived-session management panel](#dsh-dsh-archive-manager) — Adds an archived-sessions page in Settings to search, restore, and delete archived DeepSeek Harness sessions b…
- [Branch-based message editing and reroll](#dsh-dsh-message-edit) — Branch-based message editing, reroll, retry, and a version timeline.
- [One-click conversation sharing](#dsh-dsh-share) — Share your conversations with one click.
- [Full-session message history browser](#dsh-dsh-history) — Browse every message you sent in the current session: full-history listing with newest-first sort, text filter…
- [Bookmark and tag assistant replies](#dsh-dsh-bookmarks) — Bookmark assistant replies with notes and tags; browse every bookmark in one cross-session center and export t…
- [Cross-workspace session manager](#dsh-dsh-session-manager) — Session manager for the DeepSeek Harness Web UI: delete sessions, archive sessions, move sessions across works…
- [Durable task state across tools](#dsh-task-passport) — Carry durable task state across DeepSeek Harness, WorkBuddy, Claude Code, and Codex with machine-readable chec…

<a id="dsh-dsh-synapse"></a>

### Visual non-linear conversation map

[liangmianya/dsh-synapse](https://github.com/liangmianya/dsh-synapse) — `Native plugin` · ★ 407 · License: MIT · Works with: DeepSeek Harness only

Visual, non-linear conversation workspace for DeepSeek Harness: sessions, follow-ups, and branches become a browsable conversation map.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:liangmianya/dsh-synapse
```

</details>

<a id="dsh-dsh-chat-import"></a>

### Cross-tool session import and export

[Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) — `Native plugin` · ★ 177 · License: MIT · Works with: DeepSeek Harness only

Import full-fidelity chat histories from 13 coding agents (Claude Code, Codex, ChatGPT, Cursor, Gemini, opencode, and more) as resumable DeepSeek Harness sessions, with reverse export back to Claude Code.

**Alternatives:**

- [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) (★ 24) — Also migrates memories, skills, instructions, and slash commands from four sources, with an approval gate.
- [huguangyu666/dsh-plugin-session-import](https://github.com/huguangyu666/dsh-plugin-session-import) (★ 7) — Preserves tool calls and adds oversized-session protection plus zcode compaction restore.
- [kirkchinese/claude2dsh](https://github.com/kirkchinese/claude2dsh) (★ 3) — Also imports skills and plugin assets, with bidirectional sync back to Claude Code JSONL.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Nwflower/dsh-chat-import
```

</details>

<a id="dsh-dsh-turn-rewind"></a>

### Conversation rewind via change ledger

[Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) — `Native plugin` · ★ 115 · License: BSD-3-Clause · Works with: DeepSeek Harness only

Rewind conversation and workspace state, powered by a persistent Change Ledger.

**Alternatives:**

- [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind) (★ 76) — Rewinds in place without forking the session, with an optional disk-backed file restore.
- [limbo947/dsh-recall-plugin](https://github.com/limbo947/dsh-recall-plugin) (★ 33) — Adds a diff-preview confirmation panel before rolling back the conversation and workspace files.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Anionex/dsh-turn-rewind
```

</details>

<a id="dsh-dsh-archive-manager"></a>

### Archived-session management panel

[MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) — `Native plugin` · ★ 68 · License: Apache-2.0 · Works with: DeepSeek Harness only

Adds an archived-sessions page in Settings to search, restore, and delete archived DeepSeek Harness sessions by workspace.

**Alternatives:**

- [Ultronen/dsh-archived-chats](https://github.com/Ultronen/dsh-archived-chats) (★ 23) — Adds ZIP backup and restore, a snapshot-protected recycle bin, storage accounting, and tags/notes.
- [jasonrale/dsh-archive-manager](https://github.com/jasonrale/dsh-archive-manager) (★ 6) — Lets you reopen an archived session and keep chatting, or hard-delete it, with message search.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:MichengAI/dsh-archive-manager
```

</details>

<a id="dsh-dsh-message-edit"></a>

### Branch-based message editing and reroll

[Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) — `Native plugin` · ★ 49 · License: see repo · Works with: DeepSeek Harness only

Branch-based message editing, reroll, retry, and a version timeline.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:Moeblack/dsh-message-edit
```

</details>

<a id="dsh-dsh-share"></a>

### One-click conversation sharing

[hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) — `Native plugin` · ★ 34 · License: MIT · Works with: DeepSeek Harness only

Share your conversations with one click.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:hellodigua/dsh-share
```

</details>

<a id="dsh-dsh-history"></a>

### Full-session message history browser

[chenproton/dsh-history](https://github.com/chenproton/dsh-history) — `Native plugin` · ★ 14 · License: MIT · Works with: DeepSeek Harness only

Browse every message you sent in the current session: full-history listing with newest-first sort, text filter, one-click copy, and jump to a message.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:chenproton/dsh-history
```

</details>

<a id="dsh-dsh-bookmarks"></a>

### Bookmark and tag assistant replies

[penguin-oo/dsh-bookmarks](https://github.com/penguin-oo/dsh-bookmarks) — `Native plugin` · ★ 11 · License: MIT · Works with: DeepSeek Harness only

Bookmark assistant replies with notes and tags; browse every bookmark in one cross-session center and export to Markdown.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:penguin-oo/dsh-bookmarks
```

</details>

<a id="dsh-dsh-session-manager"></a>

### Cross-workspace session manager

[hkkz9522/dsh-session-manager](https://github.com/hkkz9522/dsh-session-manager) — `Native plugin` · ★ 11 · License: MIT · Works with: DeepSeek Harness only

Session manager for the DeepSeek Harness Web UI: delete sessions, archive sessions, move sessions across workspaces, and migrate a session's agent preset.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:hkkz9522/dsh-session-manager
```

</details>

<a id="dsh-task-passport"></a>

### Durable task state across tools

[dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) — `Native plugin` · ★ 10 · License: MIT · Works with: DeepSeek Harness only

Carry durable task state across DeepSeek Harness, WorkBuddy, Claude Code, and Codex with machine-readable checkpoints and optimistic locking.

<details><summary>Install</summary>

**DeepSeek Harness**

```bash
dsh plugin --profile web add github:dongsheng123132/task-passport
```

</details>
