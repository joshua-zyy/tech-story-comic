# ohmsha

Ohmsha预设 - Educational manga with visual metaphors

## Base Configuration

| Dimension | Value |
|-----------|-------|
| Art Style | manga |
| Tone | neutral |
| Layout | webtoon (default) |

Equivalent to: `--art manga --tone neutral`

## Unique Rules

This preset includes special rules beyond the art+tone combination. When `--style ohmsha` is used, ALL rules below must be applied.

### Visual Metaphor Requirements (CRITICAL)

Every technical concept MUST be visualized as a metaphor:

| Concept Type | Visualization Approach |
|-------------|----------------------|
| Algorithm | Gadget/machine that demonstrates the process |
| Data structure | Physical space characters can enter/explore |
| Mathematical formula | Transformation visible in environment |
| Abstract process | Tangible flow of particles/objects |

**Wrong approach**: Character points at blackboard explaining
**Right approach**: Character uses "Concept Visualizer" gadget, steps into metaphorical space

### Visual Metaphor Examples

| Concept | Wrong (Talking Head) | Right (Visual Metaphor) |
|---------|---------------------|------------------------|
| Attention mechanism | Character points at formula on blackboard | "Attention Flashlight" gadget illuminates key words in dark room |
| Gradient descent | "The algorithm minimizes loss" | Character rides ball rolling down mountain valley |
| Neural network | Diagram with arrows | Living network of glowing creatures passing messages |
| Overfitting | "The model memorized the data" | Character wearing clothes that fit only one specific pose |

### Character Roles (Required)

**DEFAULT: Use the tech-story-comic original cast** unless the user explicitly specifies `--characters` or has character presets in EXTEND.md.

| Role | Default Character | Visual | Traits |
|------|-------------------|--------|--------|
| Learner (Role A) | 小满 (Xiaoman) | Student intern, ~20yo, round glasses, navy hoodie, backpack | Confused, asks basic but crucial questions, represents reader |
| Mentor (Role B) | 奇普 (Chip) | Small silver dome-shaped explainer robot, single glowing eye, chest gadget compartment | Knowledgeable, patient, uses gadgets as technical metaphors |
| Challenge (Role C, optional) | 乱码精 (Glitch) | Small imp made of scrambled code fragments | Represents misunderstanding, or "noise" in the data |
| Support (Role D, optional) | 艾达 (Ada) | Short-haired senior student, lab coat over hoodie | Asks clarifying questions, provides alternative perspectives |

**IMPORTANT**: This original cast IS the default for the ohmsha preset. Generate character definitions using these exact characters unless user requests otherwise.

**Rights note**: Do NOT substitute third-party characters (e.g., Doraemon) as defaults. If the user explicitly supplies such characters via `--characters` or EXTEND.md, the user is responsible for holding the rights to use them.

To use custom characters: `--characters "Learner:小明,Mentor:教授"` or define in EXTEND.md.

### Page Title Convention

Every page MUST have a narrative title (not section header):

**Wrong**: "Chapter 1: Introduction to Transformers"
**Right**: "The Day Xiaoman Couldn't Understand Anyone"

### Gadget Reveal Pattern

When introducing a concept:

1. Student expresses confusion with visual indicator (？, spiral eyes)
2. Mentor dramatically produces gadget with sparkle effects
3. Gadget name announced in bold with explanation
4. Demonstration begins - student enters metaphorical space

### Ending Requirements

Final page MUST include:

1. Student demonstrating understanding (applying the concept)
2. Callback to opening problem (now resolved)
3. Mentor's satisfied expression
4. Optional: hint at next topic

### NO Talking Heads Rule

**Critical**: Characters must DO things, not just explain.

Every panel should show:
- Action being performed
- Metaphor being demonstrated
- Character interaction with concept-space
- NOT: two characters facing each other talking

### Special Visual Elements

| Element | Usage |
|---------|-------|
| Gadget reveals | Dramatic unveiling with sparkle effects |
| Concept spaces | Rounded borders, glowing edges for "imagination mode" |
| Information displays | Holographic UI style for technical details |
| Aha moments | Radial lines, light burst effects |
| Confusion | Spiral eyes, question marks floating above head |

## Quality Markers

- ✓ Every concept is a visual metaphor
- ✓ Characters are DOING things, not just talking
- ✓ Clear student/mentor dynamic
- ✓ Gadgets and props drive the explanation
- ✓ Expressive manga-style emotions
- ✓ Information density through visual design, not text walls
- ✓ Narrative page titles

## Reference

For complete guidelines, see `references/ohmsha-guide.md`
