# tech-story-comic

**Turn one technical topic into a story readers can follow.** Characters face a concrete problem, and each concept arrives because the story needs it.

[中文说明 (Chinese)](./README.zh-CN.md)

`tech-story-comic` is an Agent Skill for Codex (using its built-in image generation) that creates story-driven technical explainer comics. It is an independent project reworked from the `baoyu-comic` skill in [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills).

## Current status

Work in progress. The first commit preserves the unmodified `baoyu-comic 1.117.4` baseline; subsequent commits reworked it in two rounds:

**Round 1 — rename and scope narrowing**

- Renamed to `tech-story-comic`; description now targets technical explainer comics.
- Image generation targets Codex's built-in `imagegen` only (Cursor / `codex exec` / `baoyu-image-gen` fallbacks removed; fails loudly when unavailable).
- Preferences rebound to `.tech-story-comic/` and `~/.tech-story-comic/`.
- The `ohmsha` teaching preset keeps its style rules; the default cast is now this project's original characters (小满 Xiaoman, 奇普 Chip, 乱码精 Glitch, 艾达 Ada), with a note that rights for user-supplied third-party characters rest with the user.

**Round 2 — story-driven creative method**

One topic, one problem-driven storyline, concepts arriving as the story needs them:

- `references/analysis-framework.md`: learning goal (mechanism level) → concrete dilemma → concept progression chain where every concept must answer *"why does the story need it NOW?"*; scope boundary, misconception inventory, source-bound claims with simplification boundaries; page budget derived from concept count — cut scope, never dilute pages.
- `references/storyboard-template.md`: story spine (dilemma → attempt → limitation exposed → concept arrives → mechanism shown → applied → new constraint → resolution + understanding validation); per-page Story Layer (story beat, concept job, mechanism visualization, misconception beat); Dialogue Plan as a verbatim image contract; metaphor boundaries; five-rule Image-Text Consistency Contract.
- `references/base-prompt.md`: biography-style "Historical Accuracy" replaced with "Technical & Visual Accuracy" (verbatim dialogue, no invented values, metaphor bounds).

A script-level comparison against the original method (same topic, same page count) has been completed; live image-generation testing in Codex is the next step.

## Source & attribution

- Upstream project: [JimLiu/baoyu-skills · skills/baoyu-comic](https://github.com/JimLiu/baoyu-skills/tree/main/skills/baoyu-comic)
- Baseline upstream commit: `1567581c26ec29f4216c6e6835415bf30343b0e3` (`main` branch)
- Upstream skill version at baseline: `1.117.4` (see `SKILL.md` frontmatter)
- The baseline was verified file-by-file identical to upstream (39 files, line endings aside)
- License: MIT — see [LICENSE](./LICENSE); copyright belongs to the original author (Jim Liu) and is preserved as required
