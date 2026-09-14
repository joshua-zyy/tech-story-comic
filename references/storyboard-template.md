# Storyboard Template

Story-driven storyboard for technical explainer comics. The storyboard is the contract between story, teaching, and image generation.

## Story Spine

Pages follow the dilemma, not a table of contents:

```
Dilemma & stakes
  → attempt with what the characters already know
  → limitation exposed (the attempt fails or falls short)
  → concept arrives (because the story needs it NOW)
  → mechanism SHOWN in action (state change / spatial relation / visible consequence)
  → applied (characters act differently because they understood)
  → new constraint or new requirement appears
  → (repeat for the next concept)
  → resolution: the opening problem is solved
  → understanding validated (the learner handles a small variation correctly)
```

Rules:

- Page N+1 must depend on page N. If a page can be deleted or swapped without breaking the story, it is a knowledge card, not a story page.
- One new concept per page arrival.
- Knowledge must change action: after understanding, characters do something differently.
- Never resolve a beat with luck, a miracle, or the mentor fixing it off-screen.

## Storyboard Document Format

```markdown
---
title: "[Comic Title]"
topic: "[topic description]"
learning_goal: "[one sentence from analysis.md]"
narrative_approach: "dilemma-driven"
recommended_style: "[style name]"
recommended_layout: "[layout name or varies]"
aspect_ratio: "3:4"    # 3:4 (portrait), 4:3 (landscape), 16:9 (widescreen)
language: "[zh/en/ja/etc.]"
page_count: [N]
generated: "YYYY-MM-DD HH:mm"
---

# [Comic Title] - Story-Driven Technical Comic Storyboard

**Character Reference**: characters/characters.png

---

## Cover

**Filename**: 00-cover-[slug].png
**Core Message**: [one-liner]

**Visual Design**:
- Tease the DILEMMA: a character + the problem + the key visual metaphor — not a knowledge poster
- **Single unified poster composition** — one full-frame scene, never stacked panels or split frames
- Title typography style
- Color scheme

**Visual Prompt**:
[Detailed image generation prompt]

---

## Page 1 / N

**Filename**: 01-page-[slug].png
**Layout**: [standard/cinematic/dense/splash/mixed]
**Narrative Title**: [sentence-style title, e.g. "小满的报名系统下午就要演示了"] — never "Introduction to X"

### Story Layer

**Story Beat**: [what changes on this page — the page's job in the spine]
**Concept Job**: [which chain step this page serves and why the concept arrives NOW; "—" on pure story pages]
**Mechanism Visualization**: [how the mechanism is SHOWN: action / state change / spatial relation. Talking-heads panels are not acceptable on concept pages]
**Misconception Beat**: [if any: the wrong intuition the learner acts on, and the visible consequence; else "—"]

### Dialogue Plan (image contract)

Bind every line to its panel — a flat list of lines lets the storyboard collapse into summary form:

- Panel N — [Speaker]: "exact line" — every line here must appear in the rendered image VERBATIM in that panel
- Panel N — Narrator box: "exact text" (if any)
- Panel N — First-appearance term labels (bold)

**Metaphor Boundary**: [on concept pages: what this page's metaphor maps, and what it must NOT be read as]

### Panel Layout

⛔ **The Story Layer fields above are SUMMARIES — they do NOT replace the per-panel blocks.** Every page entry MUST contain a filled `#### Panel N` block for EVERY panel. A page whose panel blocks are missing or compressed to one line (`Panel Layout: 3 panels, lower half dominant`) is INCOMPLETE — the image prompt inherits exactly this compression, and the rendered page comes out sparse. See the Worked Example below for the target density.

**Panel Count**: X (4-6)
**Layout Type**: [grid/irregular/splash]

#### Panel 1 (Size: 1/3 page, Position: Top)

**Scene**: [Time, location]
**Image Description**:
- Camera angle: [bird's eye / low angle / eye level / close-up / wide shot]
- Characters: [pose, expression, action — a DOING verb, not standing/pointing]
- Environment: [≥3 named background objects]
- Props: [the concrete objects characters interact with]
- Lighting / color tone: [atmosphere, palette reference]
**Text Elements**: [the lines/labels bound to this panel from the Dialogue Plan]

#### Panel 2...

**Page Hook**: [what makes the reader need the next page]

**Visual Prompt**:
[Full page image generation prompt]

---

## Page 2 / N
...
```

## Worked Example — Target Density

A filled page entry (5 panels, every panel doing work). Match this level of visual specificity; the storyboard is the visual spec, not a summary.

```markdown
## Page 3 / 8：快照相机按下快门的那一刻

**Filename**: 03-page-snapshot-moment.png
**Story Beat**: 大雄第一次见证 RDB 快照——内存数据被“拍”成可持久保存的照片。
**Concept Job**: 链条第 1 步（RDB）。Why now：上一页系统重启，数据全消失。
**Mechanism Visualization**: 哆啦A梦掏出“快照相机”对准内存世界按快门，悬浮数据方块被定形成拍立得照片。
**Misconception Beat**: 大雄以为“拍了照就永远不丢”——页尾断电爆炸打脸：新写入没进照片。
**Metaphor Boundary**: 相机映射“某一时刻的全量快照”；不表示每次写入都实时同步进照片。

**Dialogue Plan (bound to panels)**
- Panel 1 — 大雄：「重启一次全没了，得想办法把数据留下！」
- Panel 2 — 哆啦A梦：「RDB：在某个时刻拍一张全量照片。」
- Panel 3 — 哆啦A梦：「拍完之后的新写入，可不会自己跑进照片里。」
- Panel 5 — 旁白框：「两次快照之间宕机，这期间的写入就丢了。」
- Term labels: RDB、快照、dump.rdb

#### Panel 1 (1/6 page, top)
**Scene**: 深夜卧室书桌，重启后的空荡终端
**Image Description**:
- Camera angle: 中景，略低角度
- Characters: 大雄抓着空空的键盘惊愕地后仰；哆啦A梦从门口探头
- Environment: 熄灭的台灯、贴墙的面试倒计时海报、地上散落的作业本、半开的窗
- Props: 空荡的终端屏幕、掉在地上的便利贴
- Lighting: 冷蓝色夜光，屏幕光映在大雄脸上
**Text Elements**: 大雄气泡：「重启一次全没了，得想办法把数据留下！」

#### Panel 2 (1/6 page)
**Scene**: 书桌另一侧，道具揭示
**Image Description**:
- Camera angle: 特写 + 斜角
- Characters: 哆啦A梦从四次元口袋高举“快照相机”，眼睛发光；大雄扶着桌沿凑近
- Environment: 书架上排满的技术书、窗台的多肉盆栽、墙上的课程表
- Props: 快照相机（银白色、镜头泛光）、口袋喷出的星点
- Lighting: 暖黄灯光 + 道具高光星点
**Text Elements**: 哆啦A梦气泡：「RDB：在某个时刻拍一张全量照片。」

#### Panel 3 (1/3 page, mechanism — largest)
**Scene**: 内存世界——数据城市
**Image Description**:
- Camera angle: 广角建立镜头
- Characters: 哆啦A梦举相机对准城市；大雄在旁边扶梯子踮脚观望
- Environment: 五栋发光高楼、环城高架桥、悬浮云朵、路牌「内存世界」
- Props: 悬浮数据方块 user:1 / score:100 / cart:1 / online:1 / counter、快门闪光
- Lighting: 城市霓虹 + 快门白光瞬间过曝
**Text Elements**: 哆啦A梦气泡：「拍完之后的新写入，可不会自己跑进照片里。」

#### Panel 4 (1/6 page)
**Scene**: 桌面上照片成像的特写
**Image Description**:
- Camera angle: 极近景
- Characters: 大雄与哆啦A梦各捏照片一角，两边向镜头展示
- Environment: 桌面木纹、摊开的笔袋、半杯牛奶
- Props: 拍立得照片（照片上是缩小版五栋楼与键值缩略图，底部手写 dump.rdb）
- Lighting: 桌面暖光，照片白边反光
**Text Elements**: 标签：dump.rdb

#### Panel 5 (1/6 page, bottom)
**Scene**: 时间线上的断电事故
**Image Description**:
- Camera angle: 横向时间线构图
- Characters: 大雄抱头蹲下；一台服务器爆出火花
- Environment: 时间线刻度、旧照片缩略图、爆炸红叉、蔓延的浓烟
- Props: 服务器机箱、漂浮的新写入卡片 msg:1
- Lighting: 红色警报光 + 浓烟阴影
**Text Elements**: 旁白框：「两次快照之间宕机，这期间的写入就丢了。」

**Page Hook**: 大雄盯着照片与新消息之间的空隙——“那这段时间怎么办？”
```

## Image-Text Consistency Contract

Before a page's prompt is saved, verify:

1. Every dialogue line in the Dialogue Plan appears in the Visual Prompt as exact text (speaker + verbatim line + placement).
2. Numbers, arrows, formulas, labels, and code identifiers are specified exactly — the prompt must never leave them for the image model to invent.
3. What the image SHOWS agrees with what the dialogue CLAIMS. If a bubble says "each pipe carries at most 3", the drawn pipes must be consistent with that.
4. Simplifications from `analysis.md` keep their recorded boundary: dialogue may simplify only as far as the boundary allows.
5. Technical terms render in the comic's language; code identifiers stay as-is.

## Panel Composition Guidelines

| Panel Type | Count | Usage |
|-----------|-------|-------|
| Main narrative | 3-4 per page | Story progression, stakes, reactions |
| Mechanism panel (large) | 1 per concept page | The mechanism shown in action — dominant, up to half the page |
| Narrator panel | 0-1 per page | Commentary, transition |
| Splash (full/half) | Occasional | Major moments: concept arrival, resolution |

**Panel floor**: every page carries **4-6 panels**. A 3-panel page is under-budget — add panels, not emptiness. Every panel changes shot type (close-up / wide / bird's-eye / dynamic angle); no two consecutive panels share a camera.

**Density rule**: concept density and visual density are different budgets. Concept density stays LOW — one new concept per page arrival; complexity earns more pages, never more concepts per page. Visual density stays HIGH — every page is born dense (see Visual Density Requirements below). A concept step that cannot fit becomes two pages; a page that feels empty gains elements, not concepts.

## Visual Density Requirements (hard rules)

Per panel:
- Characters **DO things** — carrying, operating, running, jumping, reacting. "Standing and pointing" is not an action.
- At least **2 concrete props** the characters physically interact with.
- At least **3 named background objects** (book spines, machines, street details — not "blurred background").
- Technical metaphors are **operable objects** (a camera, a tape, a scale, a physical route to run through) — never signposts or floating labels.

Per page:
- At least **15 countable visual elements** (characters, props, background objects, diagram parts, effects). A page below 10 is under-designed — revise the storyboard before generating prompts.
- **No unchanged reuse**: the same background or prop may not appear in two panels without a visible change — something must happen, not just a new angle.

⛔ Panel-count caps must NEVER appear in an Avoid list (e.g. "more than 3 panels") — Avoid lists quality negatives, not structural floors.

## Panel Size Reference

- **Full page (Splash)**: concept arrival, resolution
- **Half page**: the mechanism panel on dense pages
- **1/3 page**: standard narrative panels
- **1/4 or smaller**: quick reactions, sequential action

## Concept Visualization Techniques

Transform abstract concepts into concrete visuals:

| Abstract Concept | Visual Approach |
|-----------------|----------------|
| Capacity / limit | Pipe width, container size, blocked passage |
| Cost / trade-off | Price tags, receipts, weighing scales |
| Iteration / refinement | Ascending spiral staircase, successive drafts |
| State change | Transformation visible in the environment |
| Search space | Forking paths, fog, multiple shadows |
| Breakthrough | Shattering barrier, piercing light |
| Data flow | Luminous particles flowing through pipes |
| Network / topology | Glowing nodes with connecting lines |
| Optimization | Ball rolling down valley terrain |
| Snapshot / checkpoint | Camera + photo printout of the captured moment |
| Log / history | Video tape, film reel, scroll unrolling |
| Logical dependency | Building blocks assembling |

Each visualization must respect its Metaphor Boundary — record what it maps and what it must not be read as.

## Text Element Design

| Text Type | Style | Usage |
|-----------|-------|-------|
| Character dialogue | Oval speech bubble | Story speech — exact lines from the Dialogue Plan |
| Narrator commentary | Rectangular box | Transition, context — use sparingly |
| Caption bar | Edge-mounted rectangle | Time, place, "Meanwhile..." |
| Thought bubble | Cloud shape | The learner's (wrong) intuition before the consequence |
| Term label | Bold / special color | First appearance of technical terms |

## Ending Requirements

- The opening dilemma is resolved BY the learned concepts, on-screen.
- Understanding is validated: the learner handles a small variation of the problem correctly — not a recap quiz, not "thanks for reading".
- Visual callback to the opening problem.

## Prompt Structure for Consistency

Each page prompt must include:

```
[CHARACTER REFERENCE]
(Key details from characters.md for characters on this page)

[PAGE CONTENT]
(Scene, panel layout, visual elements)

[EXACT TEXT CONTRACT]
- Bubble 1 (speaker, placement): "verbatim line"
- Bubble 2 (speaker, placement): "verbatim line"
- Term labels: ...
- Numbers / arrows / formulas: exact values as specified

[RENDERING ANCHOR]
Cel-shaded manga illustration with soft gradients and light screentone texture;
bright saturated palette; never flat vector or clip-art style.

[AVOID]
Flat vector / clip-art style; plastic overexposed highlights; panel-less crammed
composition; characters cropped at frame edges; off-model faces; dark dramatic
lighting; watermark; any text beyond the Exact Text Contract.

[CONSISTENCY REMINDER]
Maintain exact character appearances as defined in the character reference.
- [Character A]: [key identifying features]
- [Character B]: [key identifying features]
All dialogue text must be rendered EXACTLY as written in the exact text contract —
no rewording, no translation, no invented glyphs.
```
