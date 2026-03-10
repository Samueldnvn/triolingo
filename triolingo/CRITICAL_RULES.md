# CRITICAL RULES FOR TRIOLINGO LESSON DEVELOPMENT

## 🛑 RULE #1: NEVER REMOVE PLACEHOLDER LESSONS

**THIS IS NON-NEGOTIABLE.**

When working with Triolingo lessons:

✅ DO:
- Add content to existing placeholder lessons
- Update lessonText, questions, explanations
- Enhance existing structure
- Keep ALL placeholder units and lessons intact

❌ NEVER:
- Delete placeholder units
- Remove placeholder lessons
- Replace the skeleton structure
- Clear out lessons array

## Why This Matters

Placeholder lessons serve as:
1. **Course skeleton** - Shows the full course roadmap
2. **Planning tool** - Outlines what topics will be covered
3. **Progress tracking** - Users can see the complete journey
4. **Future development** - Structure for lessons to come

## How to Work Correctly

### When Adding Content to a Lesson

```javascript
// CORRECT: Update existing lesson
lesson.lessonText = "New content here...";
lesson.questions = [...questions];

// INCORRECT: Don't do this
delete unit.lessons;  // ❌ WRONG
```

### When Creating New Lessons

```python
# CORRECT: Find and update the placeholder
for lesson in unit['lessons']:
    if lesson['title'] == "Target Lesson":
        lesson['lessonText'] = new_content
        lesson['questions'] = new_questions

# INCORRECT: Don't do this
unit['lessons'] = [new_lesson]  # ❌ WRONG - this deletes placeholders
```

## Current Course Structure

**AI Course**: 29 Units total
- Unit 1: Introduction ✓ CONTENT
- Unit 2: Probability Foundations ✓ CONTENT
- Units 3-29: ○ PLACEHOLDERS (must remain!)

## Error That Must Never Repeat

On 2026-03-10, I removed all placeholder lessons and only kept Unit 2.
This caused:
- Loss of course roadmap
- User frustration
- Wasted time restoring structure

**THIS MISTAKE MUST NEVER HAPPEN AGAIN.**

## Verification Checklist

Before committing any lesson changes:

- [ ] All 29 AI units are still present
- [ ] All placeholder lessons still have their titles
- [ ] No lessons have been deleted
- [ ] Only content has been ADDED, not removed
- [ ] Course skeleton is intact

## Penalty for Violation

If you violate this rule, you must:
1. Immediately restore all placeholders
2. Apologize to the user
3. Document what went wrong
4. Update this file with lessons learned

---

Created: 2026-03-10
Status: PERMANENT RULE - NEVER VIOLATE