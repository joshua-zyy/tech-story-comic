# Story Analysis — The Added Layer

Run this before the standard content analysis in Step 1.2 and fold the results into `analysis.md`. The upstream engine decides how the comic *looks*; this layer decides what story it *tells*.

## The Story Rule

> **Characters hit a concrete dilemma first, concepts arrive one by one as the story needs them, and the ending resolves the opening dilemma with what was learned.**

This is not decoration. Readers remember mechanisms they watched characters struggle with, and forget mechanisms they were lectured about. A tour of a topic ("here are five things about X") produces pretty pages that teach nothing; a story produces the same page count with a reader who can answer questions at the end.

## 1. Learning Goal

One sentence, mechanism-level, testable:

- Bad: "Understand Redis persistence"
- Good: "Know that RDB snapshots a point in time and AOF logs every write, and can say which one loses less data on a crash"

If you cannot write a question the reader should be able to answer afterward, the goal is too vague.

## 2. The Dilemma

A concrete situation with stakes, drawn from the reader's world — not from the topic's taxonomy:

- **Who**: the character (default cast, or the user's cast)
- **Wants**: the concrete outcome
- **Blocked by**: what fails without the knowledge
- **Stakes**: what it costs — an interview answer, a production incident, a lost evening

"The server restarted and the data was gone" beats "persistence is a complex topic with several approaches". Put the stakes on the first story page, not in a preface.

## 3. Concept Chain

The concepts the reader must acquire, in dependency order:

| # | Concept | Introduced because (why now) | Reader question it answers |
|---|---------|------------------------------|----------------------------|
| 1 | ... | the opening dilemma | ... |
| 2 | ... | the limit or failure of concept 1 | ... |

Rules:

- **One new concept per page.** Combine two only when inseparable (e.g. "snapshot + copy-on-write").
- **Every concept needs a "why now"**: the story event that makes the reader want it — normally the failure or limit of the previous step. Front-loaded concepts read as a glossary.
- Anything not on the chain is out of scope (§4).
- The chain's length drives the page budget (§7).

## 4. Scope Boundary

Write it explicitly — unnamed scope is how a story turns back into a tour:

- **In scope**: the mechanisms the chain covers
- **Out of scope**: adjacent topics the reader might expect, named so the storyboard does not wander into them
- **Depth per concept**: definition-level, mechanism-level, or deep-dive-level

## 5. Misconception Inventory

For each concept, the plausible wrong belief the story should visibly defeat:

| Concept | Plausible wrong belief | Story beat that refutes it on the page |
|---------|------------------------|----------------------------------------|
| ... | ... | ... |

The character who pays the cost holds the misconception — not a narrator stating it. Refutation should be shown (something breaks, a measurement fails), not asserted.

## 6. Sources

Bind the claims that matter:

| Claim | Source |
|-------|--------|

Prefer primary sources — official docs, specs, source code, papers — over blog summaries. If a claim cannot be sourced, soften it or cut it: a confidently wrong comic is worse than a narrow one.

## 7. Page Budget

- **User specified a page count** → clamp the chain and depth to fit; if fitting would cut a chain concept or a misconception beat, say so in Step 2 and ask.
- **Not specified** → derive from the chain: **≈ 2 × concepts + 3** (cover + dilemma + per-concept pages + comparison/validation + closing). Typical: 1–2 concepts → 5–8 pages; 3–4 concepts → 9–13 pages; more than ~16 → ask the user first.
- **Complexity earns pages, not density.** A concept-heavy topic gets more pages; it never gets more elements crammed into the same page.

Confirm the landing count in Step 2 alongside style choices.

## 8. Ending Check (before generating images)

Read the final pages of `storyboard.md` and confirm:

- [ ] The opening dilemma is explicitly resolved on-page
- [ ] Characters **apply** the knowledge (answer the question, fix the thing, run the command) rather than reciting a summary
- [ ] Every chain concept is used at least once after its introduction
- [ ] The §5 misconception was visibly defeated

If any box is unchecked, revise the storyboard before generating images.
