# tech-story-comic

**Story-driven technical explainer comics** — a thin story layer over the proven [baoyu-comic](https://github.com/JimLiu/baoyu-skills) engine.

[中文说明](README.zh-CN.md)

## What This Is

A coding agent skill that turns a technical topic into a multi-page manga that *teaches through a story*: characters hit a concrete dilemma, concepts arrive one by one as the story needs them, and the ending resolves the problem with what was learned.

The visual engine — art styles, storyboard structure, prompt format, density, character sheets, batch image generation — is upstream baoyu-comic, carried over **unchanged**. What this project adds is one thing: the story line.

```
baoyu-comic engine  (unchanged: styles, storyboards, prompts, rendering, density)
        +
story layer         (dilemma → concept chain → validation ending)
        =
a comic that explains a mechanism, and is remembered
```

## Why A Thin Layer

Earlier attempts rewrote the engine's templates to make the story method explicit. Every rewrite round ended with quality regressions that had to be repaired by restoring upstream behavior — measured directly:

| | engine-rich baseline | rewritten engine |
|---|---|---|
| Pages per comic | 7 | 9–13 |
| Visible elements per page | 20–30 | 7–18 |
| Reviewer score (same model, same agent) | 8.6–9.5 / 10 | 5–8 / 10 |

The engine is the quality; the story layer is the teaching. Keeping them separate keeps both.

**Verification**: every file except the entries listed below is byte-identical to the upstream import (commit `40c52af`). Confirm with `git diff 40c52af --stat`.

## What Differs From Upstream

| File | Change |
|------|--------|
| `SKILL.md` | Renamed to `tech-story-comic`; added the **Story Line Layer** section (points to `story-analysis.md`) |
| `references/story-analysis.md` | **New** — the story layer: dilemma, concept chain, scope, misconceptions, sources, page budget, narrative rhythm (three-beat pages, show-then-name, expectation-collapse), ending check |
| `references/workflow.md` | Step 1.2 gains one item: fix the story line before the general analysis |
| `references/character-template.md` | One line: `clean lines, flat colors` → `clean lines, bright saturated colors` (the old phrasing had been observed to produce washed-out sheets) |
| `README*.md` | Project documentation (this file) |

Notes on inherited upstream details, kept deliberately:

- Preference files still live in the `.baoyu-skills/` namespace so this skill and baoyu-comic share one configuration.
- Invocation examples inside `references/partial-workflows.md` are upstream text and remain illustrative only.

## The Story Rule

> Characters hit a concrete dilemma first, concepts arrive one by one as the story needs them, and the ending resolves the opening dilemma with what was learned.

In practice this means:

- **A dilemma with stakes**, from the reader's world — "the server restarted and the data was gone", not "persistence has several approaches".
- **One new concept per page**, each introduced because the previous step failed or ran out — never front-loaded as a glossary.
- **An ending that applies the knowledge** — the characters answer the interview question, fix the system, run the command. Not a summary recital.

### Page Craft

The story layer also sets the **target rhythm** for each page — the properties a Codex run should land, described from a reference series that teaches network flow in eight pages. A craft target, not a formula:

- **Three beats per page** — the learner's want or wrong belief (small panel) → the concept named and shown as one large visual metaphor (largest panel, ≥ half the page, fewest words) → a plain-words landing (small panel). Talking-head pages and blackboard-only pages read as a lecture.
- **Show the mistake, then name the concept** — the learner performs the wrong intuition first; the mentor names it after.
- **A turn per page, where the topic allows** — wish → slap → new tool: what makes a constraint memorable.
- **Every page ends on an open limitation** the next page picks up: "I get [A]. But what if [B]?"
- **Problem pages pair with solution pages**; avoid two theory-heavy pages in a row; about one pure-spectacle page per four.
- **The final chapter closes on a wide, quiet shot** plus a return-to-daily-life joke — never on a formula.

## Page Budget

If you don't specify a page count, it is derived from the topic's concept chain (≈ 2 × concepts + 3) and confirmed before generation: roughly 5–8 pages for 1–2 concepts, 9–13 for 3–4. Complexity earns *pages*, never density — a concept-heavy topic gets more pages, not pages crammed with more elements.

## Install

Copy or clone this directory into your agent's skills folder, e.g. for Codex:

```bash
git clone https://github.com/joshua-zyy/tech-story-comic.git ~/.codex/skills/tech-story-comic
```

Then ask for a comic, in one sentence:

> 画一套技术讲解漫画：给正在准备秋招的学生讲清楚数据库索引为什么能让查询变快，用哆啦A梦和大雄。

The skill runs its analysis, confirms style and page count, then generates the character sheet, page prompts, and images in one pass.

## Requirements

- An agent with skill support (tested with Codex) and an image generation tool
- Node/bun for the optional PDF merge script (`scripts/merge-to-pdf.ts`)

## Credits And License

Built on [baoyu-skills · baoyu-comic](https://github.com/JimLiu/baoyu-skills) v1.117.4 (MIT). This project keeps the upstream MIT license and credits the original engine in every file it inherits. The story layer is the only original contribution.
