# Placeholder Lesson Behavior Fix - 2026-03-10

## What Was Changed

### Problem
1. Lessons without content (placeholders) were clickable but would start the wrong lesson or fail
2. Sequential locking prevented users from starting any lesson except the first one

User wanted:
- Lessons WITH content: Clickable ✓ (any of them, not sequential)
- Lessons WITHOUT content: Visible but NOT clickable (locked) ✓

### Solution Implemented

#### 1. Added `lessonHasContent()` function
```javascript
function lessonHasContent(lesson) {
  // A lesson has content if it has questions
  return lesson.questions && lesson.questions.length > 0;
}
```

#### 2. Simplified `isLessonLocked()` function (v2 - 2026-03-10 15:50)
```javascript
function isLessonLocked(courseId, lessonId) {
  if (courseId === 'calculus') return false;

  const course = courses[courseId];
  let currentLesson = null;

  // Find the lesson
  for (const unit of course.units) {
    const lesson = unit.lessons.find(l => l.id == lessonId);
    if (lesson) {
      currentLesson = lesson;
      break;
    }
  }

  if (!currentLesson) return true;

  // CRITICAL: Lessons without content are ALWAYS locked
  // Lessons WITH content are ALWAYS unlocked (no sequential requirement)
  if (!lessonHasContent(currentLesson)) {
    return true;
  }

  return false;
}
```

This ensures that:
- All lessons with questions are ALWAYS unlocked (clickable)
- All lessons with 0 questions are ALWAYS locked (disabled)
- **No sequential progression requirement** - can start any lesson with content
- They appear in the UI with 🔒 icon if locked
- They are `disabled` (not clickable) if no content
- They remain VISIBLE in the course roadmap

#### 3. Updated `startLesson()` function
Added safety check:
```javascript
// CRITICAL: Don't start lessons without content
if (!lessonHasContent(lesson)) {
  console.error('Lesson has no content:', lessonId);
  alert('This lesson does not have content yet. Please try a different lesson.');
  return;
}
```

This prevents:
- Starting a lesson with no content
- Showing an empty question list
- Confusion for users

## Current State (as of 2026-03-10 15:50)

### Statistics
- **Total lessons**: 380
- **Lessons WITH content (clickable)**: 4 (all in Unit 1)
- **Lessons WITHOUT content (locked)**: 376

### Behavior
- ✓ **Any** lesson with questions is clickable (no sequential requirement)
- ✓ Lessons without questions are visible but locked with 🔒 icon
- ✓ All lessons appear in the course roadmap (nothing is hidden)
- ✓ Locked lessons cannot be clicked (disabled button)
- ✓ Attempting to start locked lesson shows alert message

### What This Preserves
- The complete course skeleton (all 93 units, 380 lessons)
- The course roadmap and progression structure
- Future lesson titles and organization
- The ability to add content to any lesson later

## Testing

To verify the fix:
1. Refresh the browser
2. Navigate to AI course
3. Check Unit 1 (Probability Foundations):
   - Lessons 1-4 should be clickable (📚 icon)
   - **All 4 should be clickable at any time** (not sequential)
   - Each has 18 questions
4. Check Unit 2+ (Random Variables onwards):
   - All lessons should show 🔒 icon
   - All should be disabled (not clickable)
   - All should still be visible

## Files Modified

1. `/home/samueldnvn4/.openclaw/workspace/triolingo/app.js`
   - Added `lessonHasContent()` function
   - Updated `isLessonLocked()` to only check for content (removed sequential logic)
   - Updated `startLesson()` to prevent starting empty lessons

## Notes

This is the intended behavior:
- **All lessons with content are immediately clickable** - no need to complete previous lessons
- Placeholders remain VISIBLE in the course (not deleted/hidden)
- Placeholders are LOCKED (not clickable) until they have content
- Only lessons with actual content can be started
- This preserves the course roadmap while preventing confusion

## Changelog

- **2026-03-10 15:50**: Removed sequential locking requirement. Any lesson with content is now clickable.
- **2026-03-10 12:18**: Initial implementation with sequential locking (caused issue)