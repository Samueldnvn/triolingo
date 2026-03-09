/**
 * TEST FILE - Verify Calculus Databases Load Correctly
 * Run this in browser console to check if Unit 2 lessons are loading
 */

console.log("=== Calculus Database Test ===\n");

// Test Unit 1 Database
console.log("Testing Unit 1 Database...");
if (window.CalculusUnit1Database) {
  console.log("✅ CalculusUnit1Database loaded");
  console.log("   Lessons:", Object.keys(window.CalculusUnit1Database.lessons).length);
  console.log("   Lesson IDs:", Object.keys(window.CalculusUnit1Database.lessons));
} else {
  console.log("❌ CalculusUnit1Database NOT loaded");
}

// Test Unit 2 Database
console.log("\nTesting Unit 2 Database...");
if (window.CalculusUnit2Database) {
  console.log("✅ CalculusUnit2Database loaded");
  console.log("   Lessons:", Object.keys(window.CalculusUnit2Database.lessons).length);
  console.log("   Lesson IDs:", Object.keys(window.CalculusUnit2Database.lessons));

  // Check first lesson
  const firstLesson = window.CalculusUnit2Database.lessons['u2_l1'];
  if (firstLesson) {
    console.log("\n   First Lesson (u2_l1):");
    console.log("   - Title:", firstLesson.title);
    console.log("   - Questions:", firstLesson.questions.length);
    console.log("   - XP:", firstLesson.xp);
    console.log("   - First question type:", firstLesson.questions[0].type);
  }
} else {
  console.log("❌ CalculusUnit2Database NOT loaded");
}

// Test Lesson Loader
console.log("\nTesting CalculusLessonLoader...");
if (window.CalculusLessonLoader) {
  console.log("✅ CalculusLessonLoader loaded");

  // Test getting Unit 1 lessons
  const unit1Lessons = window.CalculusLessonLoader.getAllUnit1Lessons();
  console.log("   Unit 1 lessons:", unit1Lessons.length);

  // Test getting Unit 2 lessons
  const unit2Lessons = window.CalculusLessonLoader.getAllUnit2Lessons();
  console.log("   Unit 2 lessons:", unit2Lessons.length);

  if (unit2Lessons.length > 0) {
    console.log("\n   First Unit 2 lesson:");
    console.log("   - ID:", unit2Lessons[0].id);
    console.log("   - Title:", unit2Lessons[0].title);
    console.log("   - Questions:", unit2Lessons[0].questions.length);
    console.log("   - First question type:", unit2Lessons[0].questions[0].type);
  }
} else {
  console.log("❌ CalculusLessonLoader NOT loaded");
}

console.log("\n=== Test Complete ===");