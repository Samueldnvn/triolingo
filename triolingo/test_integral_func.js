// Test integralTyping function directly
try {
  const CalculusQuestionGenerator = require('./calculusGenerators_v3.js').CalculusQuestionGenerator;
  
  console.log('Testing integralTyping function...\n');
  
  console.log('1. Basic difficulty:');
  const basicQs = CalculusQuestionGenerator.integralTyping(3, 'basic');
  console.log(`   Returned:`, basicQs);
  console.log(`   Length: ${basicQs?.length || 'undefined'}`);
  console.log(`   Type: ${typeof basicQs}`);
  
  if (Array.isArray(basicQs)) {
    basicQs.forEach((q, i) => {
      console.log(`   Q${i + 1}:`, q);
    });
  }
  
  console.log('\n2. Intermediate difficulty:');
  const interQs = CalculusQuestionGenerator.integralTyping(2, 'intermediate');
  console.log(`   Returned:`, interQs);
  console.log(`   Length: ${interQs?.length || 'undefined'}`);
  
  if (Array.isArray(interQs)) {
    interQs.forEach((q, i) => {
      console.log(`   Q${i + 1}:`, q);
    });
  }
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}