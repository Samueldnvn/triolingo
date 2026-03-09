// Artificial Intelligence Course - Unit 1: Probability Theory (FULL LESSONS)
// All placeholders replaced with complete lessons

const aiUnit1 = {
  unitId: "1",
  unitName: "Probability Theory",
  unitDescription: "Master probability fundamentals including axioms, random variables, distributions, expectations, multivariate probability, and information theory",
  subunits: [
    {
      subunitId: "1.1",
      subunitName: "Probability Foundations",
      lessons: [
        {
          lessonId: "probability-axioms",
          lessonName: "Probability Axioms",
          type: "lesson",
          difficulty: "beginner",
          lessonText: `
# Probability Axioms

## Sample Space
A sample space Ω is the set of all possible outcomes. Example: Coin flip → Ω = {H, T}

## Three Axioms
1. **Non-negativity**: P(A) ≥ 0
   Probability is never negative.

2. **Normalization**: P(Ω) = 1
   The probability of the entire sample space is 1.

3. **Additivity**: P(A ∪ B) = P(A) + P(B) for mutually exclusive events
   If events cannot both occur, add their probabilities.

## Key Properties
- P(∅) = 0 (probability of empty set is 0)
- P(A^c) = 1 - P(A) (probability of complement)
- If A ⊆ B, then P(A) ≤ P(B)

## Example
For a fair coin:
- P(heads) = 0.5
- P(tails) = 0.5
- P(heads ∪ tails) = 0.5 + 0.5 = 1
`,
          questions: [
            { id: "ai-1-1-1", type: "typing", question: "What is the sample space for a coin flip?", correctAnswer: ["{H, T}", "{heads, tails}"], explanation: "Ω = {H, T} for a coin flip.", xp: 4 },
            { id: "ai-1-1-2", type: "typing", question: "What is P(Ω)?", correctAnswer: ["1"], explanation: "By normalization, P(Ω) = 1.", xp: 4 },
            { id: "ai-1-1-3", type: "typing", question: "Can probability be negative?", correctAnswer: ["no", "No"], explanation: "No, P(A) ≥ 0 for all events.", xp: 4 },
            { id: "ai-1-1-4", type: "typing", question: "What is P(∅)?", correctAnswer: ["0"], explanation: "Probability of empty set is 0.", xp: 4 },
            { id: "ai-1-1-5", type: "typing", question: "If P(A) = 0.7, what is P(A^c)?", correctAnswer: ["0.3", ".3"], explanation: "P(A^c) = 1 - P(A) = 1 - 0.7 = 0.3.", xp: 5 },
            { id: "ai-1-1-6", type: "typing", question: "If P(A) = 0.3 and P(B) = 0.4 (mutually exclusive), what is P(A ∪ B)?", correctAnswer: ["0.7", ".7"], explanation: "P(A ∪ B) = 0.3 + 0.4 = 0.7.", xp: 5 },
            { id: "ai-1-1-7", type: "typing", question: "What is the maximum possible probability?", correctAnswer: ["1"], explanation: "Probability is always ≤ 1.", xp: 4 },
            { id: "ai-1-1-8", type: "typing", question: "What is the minimum possible probability?", correctAnswer: ["0"], explanation: "Probability is always ≥ 0.", xp: 4 },
            { id: "ai-1-1-9", type: "typing", question: "Sample space for rolling a die?", correctAnswer: ["{1,2,3,4,5,6}", "{1, 2, 3, 4, 5, 6}"], explanation: "Ω = {1, 2, 3, 4, 5, 6}.", xp: 4 },
            { id: "ai-1-1-10", type: "typing", question: "P(rolling a 6 on a fair die)?", correctAnswer: ["1/6"], explanation: "P(6) = 1/6 for a fair die.", xp: 5 },
            { id: "ai-1-1-11", type: "typing", question: "What does Ω represent?", correctAnswer: ["sample space", "the sample space"], explanation: "Ω (Omega) is the sample space.", xp: 4 },
            { id: "ai-1-1-12", type: "typing", question: "What does ∅ represent?", correctAnswer: ["empty set", "the empty set"], explanation: "∅ (empty set) is the empty set.", xp: 4 },
            { id: "ai-1-1-13", type: "typing", question: "What is A^c?", correctAnswer: ["complement of A", "not A"], explanation: "A^c is the complement of A.", xp: 4 },
            { id: "ai-1-1-14", type: "typing", question: "What does mutually exclusive mean?", correctAnswer: ["cannot both occur", "cannot happen together"], explanation: "Mutually exclusive events cannot occur simultaneously.", xp: 5 },
            { id: "ai-1-1-15", type: "typing", question: "If A ⊆ B, what's the relationship between P(A) and P(B)?", correctAnswer: ["P(A) ≤ P(B)"], explanation: "If A ⊆ B, then P(A) ≤ P(B).", xp: 5 }
          ]
        },
        {
          lessonId: "conditional-probability",
          lessonName: "Conditional Probability",
          type: "lesson",
          difficulty: "intermediate",
          lessonText: `
# Conditional Probability

## Definition
P(A|B) = P(A ∩ B) / P(B)

This is the probability of A given that B has occurred.

## Example
From a standard deck:
- P(Ace) = 4/52 = 1/13
- P(Spade) = 13/52 = 1/4
- P(Ace|Spade) = (1/52)/(13/52) = 1/13

## Multiplication Rule
P(A ∩ B) = P(A|B) × P(B)

This is useful for finding the probability of two events both occurring.
`,
          questions: [
            { id: "ai-1-2-1", type: "typing", question: "What is P(A|B)?", correctAnswer: ["P(A ∩ B) / P(B)", "P(A and B) / P(B)"], explanation: "Conditional probability formula.", xp: 5 },
            { id: "ai-1-2-2", type: "typing", question: "If P(A) = 0.5, P(B) = 0.4, P(A∩B) = 0.2, what is P(A|B)?", correctAnswer: ["0.5", ".5"], explanation: "P(A|B) = 0.2/0.4 = 0.5.", xp: 5 },
            { id: "ai-1-2-3", type: "typing", question: "Can P(B) be zero in conditional probability?", correctAnswer: ["no"], explanation: "No, division by zero is undefined.", xp: 4 },
            { id: "ai-1-2-4", type: "typing", question: "What is P(A ∩ B)?", correctAnswer: ["probability of both A and B", "joint probability"], explanation: "Intersection is both events occurring.", xp: 4 },
            { id: "ai-1-2-5", type: "typing", question: "Multiplication rule formula?", correctAnswer: ["P(A ∩ B) = P(A|B) × P(B)"], explanation: "P(A ∩ B) = P(A|B) × P(B).", xp: 5 },
            { id: "ai-1-2-6", type: "typing", question: "If P(A|B) = 0.3 and P(B) = 0.5, what is P(A ∩ B)?", correctAnswer: ["0.15", ".15"], explanation: "0.3 × 0.5 = 0.15.", xp: 5 },
            { id: "ai-1-2-7", type: "typing", question: "If A and B are independent, what is P(A|B)?", correctAnswer: ["P(A)"], explanation: "For independent events, P(A|B) = P(A).", xp: 5 },
            { id: "ai-1-2-8", type: "typing", question: "If P(A) = 0.4, P(B) = 0.3, independent, what is P(A ∩ B)?", correctAnswer: ["0.12", ".12"], explanation: "0.4 × 0.3 = 0.12.", xp: 5 },
            { id: "ai-1-2-9", type: "typing", question: "What does P(A|B) mean?", correctAnswer: ["probability of A given B", "A given B"], explanation: "Probability of A occurring given B has occurred.", xp: 4 },
            { id: "ai-1-2-10", type: "typing", question: "Symbol for intersection?", correctAnswer: ["∩"], explanation: "∩ (cap) symbolizes intersection.", xp: 4 },
            { id: "ai-1-2-11", type: "typing", question: "If P(A) = 0.6, what is max P(A ∩ B) if P(B) = 0.5?", correctAnswer: ["0.5"], explanation: "Max is min(P(A), P(B)) = 0.5.", xp: 5 },
            { id: "ai-1-2-12", type: "typing", question: "In a deck of 52, P(Ace)?", correctAnswer: ["1/13", "4/52"], explanation: "4 aces / 52 cards = 1/13.", xp: 4 },
            { id: "ai-1-2-13", type: "typing", question: "In a deck of 52, P(Spade)?", correctAnswer: ["1/4", "13/52"], explanation: "13 spades / 52 cards = 1/4.", xp: 4 },
            { id: "ai-1-2-14", type: "typing", question: "P(Ace ∩ Spade)?", correctAnswer: ["1/52"], explanation: "Only Ace of Spades: 1/52.", xp: 4 },
            { id: "ai-1-2-15", type: "typing", question: "P(Ace|Spade)?", correctAnswer: ["1/13"], explanation: "(1/52)/(13/52) = 1/13.", xp: 5 }
          ]
        },
        {
          lessonId: "bayes-theorem",
          lessonName: "Bayes Theorem",
          type: "lesson",
          difficulty: "intermediate",
          lessonText: `
# Bayes' Theorem

## Formula
P(A|B) = P(B|A) × P(A) / P(B)

This lets us "reverse" conditional probabilities.

## Intuition
P(A|B) = [How likely B is if A is true] × [How likely A is] / [How likely B is overall]

## Example: Medical Test
- P(Disease) = 0.01 (1% have disease)
- P(Positive|Disease) = 0.99 (99% accurate)
- P(Positive|No Disease) = 0.05 (5% false positive)

P(Disease|Positive) = 0.99×0.01 / (0.99×0.01 + 0.05×0.99) ≈ 0.167

Even with a positive test, only ~17% chance of having the disease!

## Key Terms
- **Prior**: P(A) - probability before evidence
- **Posterior**: P(A|B) - probability after evidence
- **Likelihood**: P(B|A) - how likely evidence if A is true
- **Evidence**: P(B) - overall probability of evidence
`,
          questions: [
            { id: "ai-1-3-1", type: "typing", question: "Bayes' Theorem formula?", correctAnswer: ["P(A|B) = P(B|A) × P(A) / P(B)"], explanation: "P(A|B) = P(B|A)P(A)/P(B).", xp: 5 },
            { id: "ai-1-3-2", type: "typing", question: "What does Bayes' Theorem allow us to do?", correctAnswer: ["reverse conditional probabilities", "invert probabilities"], explanation: "It reverses P(A|B) to find P(B|A).", xp: 5 },
            { id: "ai-1-3-3", type: "typing", question: "If P(A|B) = 0.5, P(A) = 0.4, P(B) = 0.6, what is P(B|A)?", correctAnswer: ["0.75", ".75"], explanation: "0.5×0.6/0.4 = 0.75.", xp: 5 },
            { id: "ai-1-3-4", type: "typing", question: "What is P(B) in terms of A?", correctAnswer: ["P(B|A)P(A) + P(B|A^c)P(A^c)"], explanation: "Total probability of B.", xp: 5 },
            { id: "ai-1-3-5", type: "typing", question: "What is the prior probability?", correctAnswer: ["P(A)", "probability before evidence"], explanation: "P(A) is the prior - probability before seeing evidence.", xp: 5 },
            { id: "ai-1-3-6", type: "typing", question: "What is the posterior probability?", correctAnswer: ["P(A|B)", "probability after evidence"], explanation: "P(A|B) is the posterior - after seeing evidence B.", xp: 5 },
            { id: "ai-1-3-7", type: "typing", question: "What is the likelihood?", correctAnswer: ["P(B|A)"], explanation: "P(B|A) is the likelihood.", xp: 4 },
            { id: "ai-1-3-8", type: "typing", question: "What is the evidence?", correctAnswer: ["P(B)", "marginal probability"], explanation: "P(B) is the evidence/marginal probability.", xp: 4 },
            { id: "ai-1-3-9", type: "typing", question: "If P(A) = P(B), what is P(A|B) / P(B|A)?", correctAnswer: ["1"], explanation: "They're equal when priors are equal.", xp: 5 },
            { id: "ai-1-3-10", type: "typing", question: "What does Bayes' Theorem update?", correctAnswer: ["beliefs", "prior beliefs", "prior to posterior"], explanation: "Updates prior beliefs with evidence to get posterior.", xp: 5 },
            { id: "ai-1-3-11", type: "typing", question: "In the medical test example, what is the false positive rate?", correctAnswer: ["5%", "0.05", "5 percent"], explanation: "5% false positive rate.", xp: 4 },
            { id: "ai-1-3-12", type: "typing", question: "What is the sensitivity of a test?", correctAnswer: ["P(Positive|Disease)", "true positive rate"], explanation: "Sensitivity = P(Positive|Disease).", xp: 5 },
            { id: "ai-1-3-13", type: "typing", question: "What is the specificity of a test?", correctAnswer: ["P(Negative|No Disease)", "true negative rate"], explanation: "Specificity = P(Negative|No Disease).", xp: 5 },
            { id: "ai-1-3-14", type: "typing", question: "If P(Disease) = 0.01, what is P(No Disease)?", correctAnswer: ["0.99", ".99"], explanation: "1 - 0.01 = 0.99.", xp: 4 },
            { id: "ai-1-3-15", type: "typing", question: "Why might P(Disease|Positive) be low even with accurate test?", correctAnswer: ["disease is rare", "low prior probability"], explanation: "Rare disease means many false positives even with accurate test.", xp: 5 }
          ]
        },
        {
          lessonId: "independence",
          lessonName: "Independence",
          type: "lesson",
          difficulty: "beginner",
          lessonText: `
# Independence

## Definition
Two events A and B are independent if:
P(A ∩ B) = P(A) × P(B)

This means knowing about one event tells us nothing about the other.

## Equivalent Conditions
Events A and B are independent if ANY of these hold:
1. P(A ∩ B) = P(A) × P(B)
2. P(A|B) = P(A) (assuming P(B) > 0)
3. P(B|A) = P(B) (assuming P(A) > 0)

## Example
Rolling a die twice:
- P(first roll = 6) = 1/6
- P(second roll = 6) = 1/6
- P(both = 6) = 1/36 = (1/6) × (1/6)

The outcomes are independent!

## Common Misconception
Independent events are NOT the same as mutually exclusive events!
- Independent: P(A|B) = P(A)
- Mutually exclusive: P(A|B) = 0
`,
          questions: [
            { id: "ai-1-4-1", type: "typing", question: "When are two events independent?", correctAnswer: ["P(A ∩ B) = P(A) × P(B)", "P(A) × P(B)"], explanation: "P(A ∩ B) = P(A) × P(B)", xp: 5 },
            { id: "ai-1-4-2", type: "typing", question: "If A and B are independent, what is P(A|B)?", correctAnswer: ["P(A)"], explanation: "P(A|B) = P(A) for independent events.", xp: 5 },
            { id: "ai-1-4-3", type: "typing", question: "If P(A) = 0.5, P(B) = 0.4, independent, what is P(A ∩ B)?", correctAnswer: ["0.2", ".2"], explanation: "0.5 × 0.4 = 0.2", xp: 5 },
            { id: "ai-1-4-4", type: "typing", question: "What does independence mean intuitively?", correctAnswer: ["knowing one gives no info about the other", "no information"], explanation: "Knowing about one event tells us nothing about the other.", xp: 5 },
            { id: "ai-1-4-5", type: "typing", question: "Are rolling a die twice independent?", correctAnswer: ["yes", "Yes"], explanation: "Yes, die rolls are independent.", xp: 4 },
            { id: "ai-1-4-6", type: "typing", question: "If P(A|B) = P(A), what does this mean?", correctAnswer: ["A and B are independent"], explanation: "This means A and B are independent.", xp: 5 },
            { id: "ai-1-4-7", type: "typing", question: "Are independent and mutually exclusive the same?", correctAnswer: ["no", "No"], explanation: "No, they're different concepts.", xp: 4 },
            { id: "ai-1-4-8", type: "typing", question: "For mutually exclusive events, what is P(A|B)?", correctAnswer: ["0"], explanation: "If mutually exclusive, P(A|B) = 0.", xp: 5 },
            { id: "ai-1-4-9", type: "typing", question: "Can two independent events both have non-zero probability and be mutually exclusive?", correctAnswer: ["no"], explanation: "No, if P(A) > 0 and P(B) > 0 and independent, they can't be mutually exclusive.", xp: 5 },
            { id: "ai-1-4-10", type: "typing", question: "If P(A) = 0, is A independent of B?", correctAnswer: ["yes"], explanation: "If P(A) = 0, A is independent of any B.", xp: 5 },
            { id: "ai-1-4-11", type: "typing", question: "If A and B are independent, are A^c and B independent?", correctAnswer: ["yes"], explanation: "Yes, if A and B are independent, so are A^c and B.", xp: 5 },
            { id: "ai-1-4-12", type: "typing", question: "P(A|B) = P(A|B^c) for independent events?", correctAnswer: ["yes"], explanation: "Yes, this is true for independent events.", xp: 5 },
            { id: "ai-1-4-13", type: "typing", question: "If P(A ∩ B) = P(A)P(B), what can we conclude?", correctAnswer: ["A and B are independent"], explanation: "This is the definition of independence.", xp: 5 },
            { id: "ai-1-4-14", type: "typing", question: "What is P(A|A^c)?", correctAnswer: ["0"], explanation: "A and A^c are mutually exclusive.", xp: 4 },
            { id: "ai-1-4-15", type: "typing", question: "If P(A) = 0.3 and P(A|B) = 0.3, what can we say?", correctAnswer: ["A and B are independent"], explanation: "P(A|B) = P(A) means independence.", xp: 5 }
          ]
        }
      ]
    }
  ]
};