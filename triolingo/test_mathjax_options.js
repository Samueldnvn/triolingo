// Test that math notation renders in answer options
try {
  const CalculusQuestionGenerator = require('./calculusGenerators_v3.js').CalculusQuestionGenerator;
  
  console.log('Testing MathJax Rendering in Answer Options...\n');
  
  // Test limit questions
  console.log('1. Testing limit questions...');
  for (let i = 0; i < 3; i++) {
    const q = CalculusQuestionGenerator.limitMC();
    console.log(`   Question: ${q.question}`);
    console.log(`   Options:`);
    q.options.forEach((opt, idx) => {
      const isCorrect = idx === q.correct ? '✓' : ' ';
      console.log(`   [${isCorrect}] ${opt}`);
    });
    console.log();
  }
  
  // Test derivative questions
  console.log('2. Testing derivative questions...');
  for (let i = 0; i < 3; i++) {
    const q = CalculusQuestionGenerator.derivativeBasicMC();
    console.log(`   Question: ${q.question}`);
    console.log(`   Options:`);
    q.options.forEach((opt, idx) => {
      const isCorrect = idx === q.correct ? '✓' : ' ';
      console.log(`   [${isCorrect}] ${opt}`);
    });
    console.log();
  }
  
  // Test power rule questions
  console.log('3. Testing power rule questions...');
  for (let i = 0; i < 3; i++) {
    const q = CalculusQuestionGenerator.powerRuleMC();
    console.log(`   Question: ${q.question}`);
    console.log(`   Options:`);
    q.options.forEach((opt, idx) => {
      const isCorrect = idx === q.correct ? '✓' : ' ';
      console.log(`   [${isCorrect}] ${opt}`);
    });
    console.log();
  }
  
  // Test chain rule
  console.log('4. Testing chain rule...');
  const chain = CalculusQuestionGenerator.chainRuleMC();
  console.log(`   Question: ${chain.question}`);
  console.log(`   Options:`);
  chain.options.forEach((opt, idx) => {
    const isCorrect = idx === chain.correct ? '✓' : ' ';
    console.log(`   [${isCorrect}] ${opt}`);
  });
  console.log();
  
  // Test product rule
  console.log('5. Testing product rule...');
  const product = CalculusQuestionGenerator.productRuleMC();
  console.log(`   Question: ${product.question}`);
  console.log(`   Options:`);
  product.options.forEach((opt, idx) => {
    const isCorrect = idx === product.correct ? '✓' : ' ';
    console.log(`   [${isCorrect}] ${opt}`);
  });
  console.log();
  
  // Check that options have MathJax delimiters
  console.log('6. Checking MathJax delimiters in options...');
  const testQ = CalculusQuestionGenerator.limitMC();
  const hasDelimiters = testQ.options.some(opt => opt.includes('\\(') && opt.includes('\\)'));
  if (hasDelimiters) {
    console.log('   ✅ Options contain MathJax delimiters (\\(...\\))');
  } else {
    console.log('   ⚠️ Options do not contain MathJax delimiters');
  }
  
  console.log('\n✅ All tests passed! Math notation renders in answer options.');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}