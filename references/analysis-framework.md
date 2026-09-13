# Technical Topic Analysis Framework

Deep analysis framework for turning ONE technical topic into a problem-driven storyline.

## Purpose

Before creating the storyboard, analyze the topic to answer four questions:

1. What should the reader **understand** (not just recognize) after reading?
2. What concrete dilemma makes that knowledge necessary?
3. In what order do concepts arrive, and why does the story need each one NOW?
4. Which claims are source-bound, and where does each simplification stop being true?

The comic is a story first: characters pursue a goal, hit real limitations, and each concept arrives because the previous step made it necessary. A topic that cannot answer question 2 produces a poster, not a story.

## The Core Test

Every concept in the outline must pass:

> **"Why does the story need this concept NOW?"**

- Valid answer: the previous step exposed a limitation, question, or new constraint that this concept resolves.
- Invalid answer: "it's the next item in the textbook" / "it's related".

If a concept has no "why now", either remove it or design the limitation that earns it.

## Analysis Dimensions

### 1. Learning Goal (Mechanism Level)

- What should the reader be able to **explain** after reading: why the mechanism exists, how it works, where its boundary is?
- Depth target: mechanism understanding — not a poster ("X exists and is useful"), not source-code internals.
- State the goal in one sentence.
  - Example: "Reader can explain why the problem occurs, how the mechanism resolves it, and what happens when the default is overridden."

### 2. The Dilemma (Story Engine)

- Who needs what, concretely? A character, a deadline, a visible stake.
- What goes wrong or gets blocked **without** this knowledge?
- The dilemma must be resolvable **by understanding the topic** — not by luck, and not by the mentor fixing it off-screen.
- Real-life situations with accurate technical mapping work as well as literal coding scenes.
  - Reference pattern: being late → shortest path; delivering more goods → max flow; shipping costs too high → min-cost flow; already chose a wrong route → residual network.

### 3. Concept Progression Chain

Order concepts as a chain. For each step record:

| Field | Meaning |
|-------|---------|
| Limitation / question exposed | What the previous step cannot do or left unclear |
| Concept | The concept that resolves it |
| Why now | One sentence linking limitation → concept |
| What it unlocks | What the characters can now do or understand |
| Visual mechanism | How the mechanism will be SHOWN (action, state change, spatial relation) — not explained |

Chain rules:

- One concept per step. If a step needs two concepts, split it or defer one.
- The FIRST concept is the one the dilemma immediately demands — not the most basic one in the textbook.
- The LAST step returns to the opening dilemma and resolves it.

### 4. Scope Boundary

- List adjacent concepts explicitly OUT of scope. One comic tells one topic's main line; it does not sweep the whole ecosystem.
- A term may APPEAR as a labeled prop without being TAUGHT.
- If the user asks for more concepts than the storyline can carry, say so and propose splitting into multiple comics.

### 5. Misconception Inventory

- List common wrong intuitions about the topic (from real FAQs, interview failures, documentation pitfalls).
- Each misconception becomes a learner-character beat: state it, act on it, SEE the consequence, correct it.
- Misconceptions must be technically instructive — not slapstick errors.

### 6. Source Binding & Simplification Boundaries

- Every key technical claim carries a source (official docs, spec, standard, authoritative book — record title + URL).
- Claims that cannot be bound to a source are marked `unverified` and must be verified or cut.
- Every simplification declares its boundary: "true under X, not true when Y".
- Metaphors are claims too: for each, record what it maps and what it must NOT be read as.

### 7. Audience & Prior Knowledge

- Who reads this, what do they already know, what vocabulary can appear unexplained?
- Audience determines dialogue density and how much the mentor explains vs. shows.

## Page Budget

- Opening (dilemma + stakes): 1-2 pages
- Per concept step (arrival + mechanism + application): 1-2.5 pages
- Resolution + understanding validation: 1 page
- Rule of thumb: `pages ≈ 2 × concept_count + 3`, then clamp to the user's requested page count.
- If the budget cannot carry the chain, cut concepts (update Scope Boundary) — never dilute pages into summaries.

## Output Format

Save to `analysis.md`:

1. **YAML front matter**: title, topic, learning_goal, source_language, user_language, aspect_ratio, recommended_page_count, recommended_art, recommended_tone
2. **Audience & Prior Knowledge**
3. **The Dilemma**
4. **Concept Progression Chain** (one table row per step)
5. **Scope Boundary** (out-of-scope list)
6. **Misconception Inventory**
7. **Source-Bound Claims** (claim / source / simplification boundary)
8. **Content Signals** (style recommendations)
9. **Recommended Approaches**

## Analysis Checklist

Before proceeding to storyboard:

- [ ] Learning goal is one sentence, mechanism-level
- [ ] Dilemma is concrete, has stakes, and is resolvable by understanding the topic
- [ ] Every concept has a "why now" linked to a previous limitation
- [ ] Removing any concept breaks the chain (if not, it is off the main line — cut it or move it to Scope Boundary)
- [ ] Adjacent-but-unneeded concepts are listed out of scope
- [ ] Every key claim is source-bound or marked unverified
- [ ] Every simplification and metaphor declares its boundary
- [ ] Misconceptions are real, common, and pedagogically useful
- [ ] Page budget fits the chain (or scope was cut, not diluted)
