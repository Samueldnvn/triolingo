// Test script to verify Linear Algebra course is loaded correctly
console.log('=== Linear Algebra Course Test ===');

// Test 1: Check if linearAlgebraUnit1 exists
if (typeof linearAlgebraUnit1 !== 'undefined') {
  console.log('✅ linearAlgebraUnit1 loaded successfully');
  console.log(`   Unit ID: ${linearAlgebraUnit1.unitId}`);
  console.log(`   Unit Name: ${linearAlgebraUnit1.unitName}`);
  console.log(`   Subunits: ${linearAlgebraUnit1.subunits.length}`);

  // Test 2: Count total lessons
  let totalLessons = 0;
  let totalQuestions = 0;
  linearAlgebraUnit1.subunits.forEach((subunit, idx) => {
    console.log(`\n   Subunit ${idx + 1}: ${subunit.subunitName}`);
    console.log(`     Lessons: ${subunit.lessons.length}`);
    totalLessons += subunit.lessons.length;
    subunit.lessons.forEach(lesson => {
      console.log(`       - ${lesson.lessonName} (${lesson.questions.length} questions)`);
      totalQuestions += lesson.questions.length;
    });
  });

  console.log(`\n✅ Total Lessons: ${totalLessons}`);
  console.log(`✅ Total Questions: ${totalQuestions}`);
} else {
  console.error('❌ linearAlgebraUnit1 NOT loaded!');
}

// Test 3: Check if courses object has Linear Algebra
if (typeof courses !== 'undefined' && courses.linearAlgebra) {
  console.log('\n✅ Linear Algebra course exists in courses object');
  console.log(`   Course ID: ${courses.linearAlgebra.id}`);
  console.log(`   Course Name: ${courses.linearAlgebra.name}`);
  console.log(`   Units: ${courses.linearAlgebra.units.length}`);

  if (courses.linearAlgebra.units[0]) {
    const lessons = courses.linearAlgebra.units[0].lessons;
    console.log(`   Lessons in Unit 1: ${lessons.length}`);
    if (lessons.length > 0) {
      console.log('   ✅ Lessons loaded successfully!');
      console.log(`   First lesson: ${lessons[0].title}`);
    } else {
      console.warn('   ⚠️ No lessons loaded (may need to call loadLinearAlgebraLessons())');
    }
  }
} else {
  console.error('\n❌ Linear Algebra course NOT found in courses object!');
}

// Test 4: Check vocab
if (typeof linearAlgebraVocab !== 'undefined') {
  console.log('\n✅ linearAlgebraVocab loaded');
  console.log(`   Vocabulary terms: ${Object.keys(linearAlgebraVocab).length}`);
} else {
  console.error('\n❌ linearAlgebraVocab NOT loaded!');
}

// Test 5: Check icons
if (typeof linearAlgebraIcons !== 'undefined') {
  console.log('✅ linearAlgebraIcons loaded');
  console.log(`   Icons: ${Object.keys(linearAlgebraIcons).length}`);
} else {
  console.error('❌ linearAlgebraIcons NOT loaded!');
}

console.log('\n=== Test Complete ===');