# tech-story-comic

**Turn one technical topic into a story readers can follow.** Characters face a concrete problem, and each concept arrives because the story needs it.

[中文说明 (Chinese)](./README.zh-CN.md)

`tech-story-comic` is an Agent Skill for Codex (using its built-in image generation) that creates story-driven technical explainer comics — multi-page, character-consistent, with verbatim dialogue rendered on the page.

## What it does

- **Problem-driven storyline** — the comic starts from a concrete dilemma (a deadline, a failing system), not a table of contents. Concepts arrive one by one, each answering a limitation the previous step exposed.
- **Mechanism over recitation** — every concept is shown in action (state changes, spatial relations, visible consequences), never as two characters talking heads. Misconceptions are acted out and visibly corrected.
- **Technical accuracy built in** — key claims are bound to sources during analysis; simplifications declare their boundaries; metaphors record what they map and what they must not be read as.
- **Verbatim text contract** — dialogue lines, commands, numbers, and labels are specified exactly in per-page prompts, so the rendered page shows the scripted text, not invented glyphs.
- **Character consistency** — a character reference sheet is generated first and passed to every page; the default cast is this project's original characters (小满 Xiaoman, 奇普 Chip, 乱码精 Glitch, 艾达 Ada). Users may supply any characters they like, including well-known ones.
- **Flexible visual system** — 6 art styles × 7 tones × 7 layouts, plus 5 presets with special rules (`ohmsha` teaching manga is the default recommendation for technical topics).
- **Incremental production** — generate storyboard only, prompts only, or images only; regenerate specific pages without touching the rest; final output merged into a PDF.

## Workflow

```
Preferences → Topic analysis → Confirm plan → Storyboard + characters
→ [outline review] → Per-page prompts → [prompt review]
→ Character sheet → Page images (batched) → PDF → Report
```

Topic analysis produces a **concept progression chain**: learning goal → concrete dilemma → ordered concepts, each with a "why does the story need it NOW" link, plus scope boundary, misconception inventory, and source-bound claims. The storyboard follows the story spine: dilemma → attempt → limitation exposed → concept arrives → mechanism shown → applied → new constraint → … → resolution + understanding validation.

## Skill structure

```
tech-story-comic/
├── SKILL.md                    # Entry point: trigger, image backend rule, batch policy,
│                               #   workflow overview, preferences
├── references/
│   ├── analysis-framework.md   # Topic → dilemma → concept chain, source binding
│   ├── storyboard-template.md  # Story spine, per-page story layer, image-text contract
│   ├── character-template.md   # Character definition format
│   ├── base-prompt.md          # Base prompt for page rendering (text/accuracy rules)
│   ├── workflow.md             # Full step-by-step workflow with review gates
│   ├── auto-selection.md       # Content signals → style/preset recommendation
│   ├── partial-workflows.md    # --storyboard-only / --prompts-only / --images-only / --regenerate
│   ├── ohmsha-guide.md         # Teaching-preset specifics
│   ├── art-styles/             # ligne-claire, manga, realistic, ink-brush, chalk, minimalist
│   ├── tones/                  # neutral, warm, dramatic, romantic, energetic, vintage, action
│   ├── layouts/                # standard, cinematic, dense, splash, mixed, webtoon, four-panel
│   ├── presets/                # ohmsha, wuxia, shoujo, concept-story, four-panel
│   └── config/                 # first-time setup, preferences schema, watermark guide
└── scripts/
    └── merge-to-pdf.ts         # Merge page images into a PDF (bun or npx)
```

## Installation

Clone or copy this repository into your Codex skills directory:

```bash
# project-level (current project only)
<your-project>/.codex/skills/tech-story-comic

# user-level (all projects)
~/.codex/skills/tech-story-comic
```

The skill becomes available on the next conversation turn.

**Requirements**: a Codex runtime with the built-in `imagegen` skill (this is the only supported image backend); `bun` or `npx` for the optional PDF merge step.

## Usage

Ask in your own words:

```
把 Redis 分布式锁做成 8 页技术讲解漫画，面向准备秋招的 Java 学生
```

```
Create an 8-page comic explaining how TLS handshakes work, for beginners
```

Partial runs and page edits:

```
/tech-story-comic content.md --storyboard-only
/tech-story-comic comic/my-topic/ --regenerate 3,5
```

## Output

```
<your-project>/comic/{topic-slug}/
├── analysis.md          # learning goal, dilemma, concept chain
├── storyboard.md        # per-page story layer + dialogue plan
├── characters/          # character definitions + reference sheet
├── prompts/NN-page-*.md # per-page prompts (reproducibility record)
├── NN-page-*.png        # rendered pages
└── {topic-slug}.pdf     # final comic
```

## Configuration

First use asks a few defaults (watermark, art/tone preference, language) and saves them to `.tech-story-comic/EXTEND.md` (project) or `~/.tech-story-comic/EXTEND.md` (user). See `references/config/preferences-schema.md` for the full schema.

## Source, attribution & license

This project is reworked from the `baoyu-comic` skill in [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills/tree/main/skills/baoyu-comic) (MIT). The original copyright notice and MIT license are preserved — see [LICENSE](./LICENSE).
