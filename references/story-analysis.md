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
- **Every concept needs a "why now"**: the story event that makes the reader want it — normally the failure or limit of the previous step. Front-loaded concepts read as a glossary. A page that breaks the previous tool introduces no new concept — it is the setup half of a pair (§8.5).
- **Prefer chains where each concept adds a dimension to the last** rather than replacing it. The reference chain runs cost → capacity → cost + capacity → dynamic correction → generalized/competing flows, so every earlier concept is still in play at the end. A chain of unrelated topics cannot build on itself, and its early pages become forgettable.
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

## 8. Narrative Rhythm (page craft)

The rhythm below is a **craft target**, described from a reference series that teaches network flow in eight pages — not a formula to copy. Adapt it to the topic: a comparison or architecture page has its own beat. What must survive adaptation: the learner carries the page rather than the mentor, the largest panel *shows* the concept instead of telling it, and every page hands the reader a reason to turn. Casting assumed: mentor + learner (keep the roles, not the names, if the cast differs).

### 8.1 Every page has the same three-beat shape

| Beat | Panel | Content | Share of page |
|------|-------|---------|---------------|
| Want or wrong belief | 1st (small) | The learner's concrete desire or misconception, played with the body — grabbing, drooling, panicking, counting money | ~1/6 |
| Named and shown | largest | The mentor names the concept while it appears as ONE large visual metaphor; almost no argument text — let the picture carry it | ≥ 1/2 |
| Plain-words landing | last (small) | A life-size analogy (the shortest stave of a bucket, a relay race, a returns desk) + the term + the learner restating it or reeling | ~1/6–1/3 |

Never a page of talking heads and never a blackboard-only page: if the largest panel on a page is a character explaining, the page is wrong.

### 8.2 Show the mistake, then name the concept

Never open a concept with a definition. The learner first *performs* the wrong intuition (takes the shortcut, walks onto the negative edge, forces too much through the pipe), then the mentor names it. The learner asks, errs, and pays; the mentor names, supplies the tool, and corrects.

Add one **confirmation beat** per page: the learner guesses the rule in their own words ("so going around that loop lowers the cost?") and the mentor stamps it. This is how the reader's understanding gets checked.

### 8.3 One expectation-collapse per page

Wish → slap → new tool: "Great, I'll take the negative edge!" → "Idiot — you'll loop forever." → hands over the tool.

Roughly once per page, and not as decoration: this turn is what makes the constraint memorable. A page with no expectation-collapse is usually a page that teaches nothing new.

### 8.4 Page hooks: leave one limitation open

End each page on an unresolved limit the reader can name in one word — negative, expensive, wrong, mixed, too slow. Open the next page with the learner's hand-off: "I get [A]. But what if [B]?" The reader should always be one breath short of the answer.

### 8.5 Pair problem pages with solution pages

Give each step of the concept chain a pair: a page where the current tool breaks (paid for in tears, a bill, an exploded pipe), then a page that names the fix and lets the learner use it. Never run two theory-heavy pages back to back — put a lighter page between heavy ones.

### 8.6 Panel count carries the tempo

- **3 panels** is the base shape (§8.1).
- **4 small panels** speed up banter and panic.
- **2–3 panels with one full-width panel** slow the reader down. Use the slowdown only when a world-view changes (the modeling view, the flow view, the residual view), and make that panel the brightest, largest block on the page with the fewest words. The theorem or rule you most want remembered belongs there.
- Every ~4 pages, allow one **pure spectacle page** — text halved, no new theorem, the same world seen at a larger scale.

### 8.7 Close the final chapter properly

End in two moves: a wide, quiet elevation shot, then a return-to-daily-life joke that reuses the knowledge for something petty (arguing over the last pork bun, hiding a test paper). Never end on a formula.

### 8.8 Rhythm self-check

Signals that a page is under-cooked. Fix them, or knowingly justify an alternative that serves the topic better:

- [ ] Does every page carry the three beats, with the largest panel showing rather than talking?
- [ ] Does each page have a turn — something hoped for that then costs something?
- [ ] Are two theory-heavy pages adjacent? (separate them)
- [ ] Does each page end on an open limitation that the next page picks up?
- [ ] Is there a change of tempo roughly every four pages? Does the final chapter close on a wide shot plus a daily-life joke?

## 9. Ending Check (before generating images)

Read the final pages of `storyboard.md` and confirm:

- [ ] The opening dilemma is explicitly resolved on-page
- [ ] Characters **apply** the knowledge (answer the question, fix the thing, run the command) rather than reciting a summary
- [ ] Every chain concept is used at least once after its introduction
- [ ] The §5 misconception was visibly defeated

If any box is unchecked, revise the storyboard before generating images.
