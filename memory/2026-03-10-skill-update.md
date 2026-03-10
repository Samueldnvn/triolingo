# Updated TRIOlingO Lesson Builder Skill - Diagram Variety

## What Was Changed

Updated `/home/samueldnvn4/.openclaw/workspace/skills/public/triolingo-lesson-builder/SKILL.md` to emphasize the importance of diagram variety and uniqueness.

## Key Additions

### 1. Critical Rule: Diagram Variety

Added a prominent section stating:
- **DO NOT reuse diagrams across lessons**
- Each lesson should have its own unique diagrams
- Explain why variety matters (learning, professionalism, concept-specific)

### 2. Diagram Variety Example

Added a concrete example showing proper diagram distribution:

| Lesson | Diagrams (unique to lesson) |
|--------|----------------------------|
| Discrete Variables | discrete-vs-continuous-examples.png<br>discrete-variable-types.png<br>discrete-countable-explanation.png |
| Continuous Variables | continuous-uncountable.png<br>continuous-variable-types.png<br>continuous-point-vs-interval.png |
| PMF | pmf-die-roll.png<br>pmf-poisson-comparison.png<br>pmf-binomial-comparison.png |
| PDF | pdf-exponential.png<br>pdf-uniform.png<br>pdf-area-under-curve.png |
| CDF | cdf-distributions-comparison.png<br>cdf-properties.png<br>cdf-quantile-function.png |

### 3. Diagram Creation Strategies

Added guidance on how to create varied diagrams:
- Illustrate key concepts directly
- Use different examples for each lesson
- Vary visualization types (bar charts, line plots, step functions, etc.)
- Include mathematical notation
- Reference diagrams strategically

### 4. Updated Workflow

Modified the workflow to explicitly include diagram planning:
- Step 3: Plan diagram strategy (2-4 unique diagrams)
- Step 4: Create lesson-specific diagrams (no reuse)
- Added guidance on diagram filenames (lesson-specific)

### 5. Updated Common Pitfalls

Added to "Don't" list:
- ❌ **Don't reuse diagrams across lessons** - Each lesson needs unique diagrams

### 6. Diagram Verification Checklist

Added a comprehensive checklist for verifying diagrams:
- **Diagram uniqueness** - No reuse across lessons
- **Diagram quality** - Resolution, styling, readability
- **Diagram content** - Concept-specific, notation consistent
- **Diagram references** - Correct files referenced in content
- **No diagram reuse** - Each lesson has unique set

Includes verification command:
```bash
# Check for reuse (should have unique prefixes per lesson)
ls -1 diagrams/*.png | cut -d'-' -f1 | sort | uniq -c
```

## Why This Update Matters

1. **Prevents diagram reuse** - Explicitly states not to reuse diagrams
2. **Provides concrete examples** - Shows what good diagram variety looks like
3. **Guides creation process** - Strategies for creating varied diagrams
4. **Enables verification** - Checklist and commands to verify compliance
5. **Documents best practices** - Future lessons will follow these guidelines

## Impact on Future Lessons

When creating future lessons, the skill now provides:
- Clear rule against diagram reuse
- Examples of good diagram variety
- Strategies for creating diverse visualizations
- Verification methods to ensure compliance

This ensures that the Unit 2 example of 15 unique diagrams (3 per lesson) becomes the standard for all TRIOlingO lessons.

---

**Status:** ✅ SKILL.md updated with diagram variety guidelines. Future lessons will not reuse diagrams.