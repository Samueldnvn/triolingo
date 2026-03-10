// AI - All Topics
// Complete course structure from provided outline
// Lesson IDs are globally unique (unitId-lessonNumber format)
// Unit 1 has actual content for 4 lessons

window.aiAllTopics = {
  "courseName": "AI",
  "units": [
    {
      "unitId": "1",
      "unitName": "Probability Foundations",
      "lessons": [
        {
          "id": "1-1",
          "title": "Probability axioms",
          "unitTitle": "Probability Foundations",
          "xp": 88,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Basic Probability Concepts\n\nProbability is the study of uncertainty and quantifies the likelihood of events occurring. In AI and machine learning, probability is foundational for:\n- Handling noisy or incomplete data\n- Making predictions with confidence\n- Building probabilistic models\n- Understanding uncertainty in decisions\n\n## Sample Space and Events\n\n**Sample Space (S)**: The set of all possible outcomes of an experiment.\n\nExample: Rolling a die\n- Sample Space: S = {1, 2, 3, 4, 5, 6}\n\n**Event**: A subset of the sample space.\n\nExample: Rolling an even number\n- Event E = {2, 4, 6}\n\n## Definition of Probability\n\nFor equally likely outcomes:\n$$P(E) = \\frac{\\text{Number of outcomes in E}}{\\text{Total number of outcomes}}$$\n\n**Example**: Probability of rolling an even number\n$$P(\\text{even}) = \\frac{3}{6} = \\frac{1}{2} = 0.5$$\n\n## Basic Properties of Probability\n\n1. **Non-negativity**: $0 \\leq P(E) \\leq 1$ for any event E\n2. **Sample Space**: $P(S) = 1$ (something must happen)\n3. **Impossible Event**: $P(\\emptyset) = 0$ (nothing can't happen)\n4. **Complement Rule**: $P(E^c) = 1 - P(E)$\n\n## Complement of an Event\n\nThe complement $E^c$ (or $\\overline{E}$ or $E'$) contains all outcomes NOT in E.\n\n**Example**: If E = {even numbers}, then $E^c$ = {odd numbers}\n$$P(\\text{odd}) = 1 - P(\\text{even}) = 1 - 0.5 = 0.5$$\n\n## Mutually Exclusive Events\n\nTwo events A and B are mutually exclusive (disjoint) if they cannot occur simultaneously.\n\n**Example**: Rolling a die\n- A = {roll 1 or 2}\n- B = {roll 3}\n- A and B are mutually exclusive (you can't roll 1,2 AND 3 at the same time)\n\nFor mutually exclusive events:\n$$P(A \\cup B) = P(A) + P(B)$$\n\n## Independent Events\n\nTwo events are independent if the occurrence of one does NOT affect the probability of the other.\n\n**Example**: Rolling two dice\n- The result of the first die doesn't affect the second die\n\nFor independent events:\n$$P(A \\cap B) = P(A) \\cdot P(B)$$\n\n## Probability in AI\n\nProbability is used in AI for:\n- **Classification**: Predicting class probabilities (e.g., 80% dog, 20% cat)\n- **Bayesian inference**: Updating beliefs with new evidence\n- **Random forests**: Ensemble of decision trees with stochastic elements\n- **Reinforcement learning**: Probability of taking actions\n- **Language models**: Predicting next words probabilistically",
          "questions": [
            {
              "id": "prob-2-1-1",
              "type": "typing",
              "question": "What is the sample space when rolling a standard six-sided die?",
              "correctAnswer": [
                "{1,2,3,4,5,6}",
                "1,2,3,4,5,6",
                "S = {1,2,3,4,5,6}"
              ],
              "explanation": "A standard die has 6 faces numbered 1 through 6, so the sample space is S = {1, 2, 3, 4, 5, 6}",
              "xp": 5
            },
            {
              "id": "prob-2-1-2",
              "type": "typing",
              "question": "What is P(rolling a 6) on a fair six-sided die?",
              "correctAnswer": [
                "1/6",
                "0.166",
                "0.167"
              ],
              "explanation": "There is 1 favorable outcome (rolling 6) out of 6 total outcomes, so P = 1/6 \u2248 0.167",
              "xp": 5
            },
            {
              "id": "prob-2-1-3",
              "type": "multiple-choice",
              "question": "Looking at the diagram `diagrams/prob-die-distribution.png`, what is the probability of each outcome?",
              "options": [
                "0.1",
                "0.167",
                "0.2",
                "0.25"
              ],
              "correct": 1,
              "explanation": "The diagram shows a fair die where each outcome has probability 1/6 \u2248 0.167",
              "xp": 3
            },
            {
              "id": "prob-2-1-4",
              "type": "typing",
              "question": "If P(E) = 0.3, what is P(E^c) (the complement)?",
              "correctAnswer": [
                "0.7",
                "7/10"
              ],
              "explanation": "Using the complement rule: P(E^c) = 1 - P(E) = 1 - 0.3 = 0.7",
              "xp": 4
            },
            {
              "id": "prob-2-1-5",
              "type": "typing",
              "question": "What is the probability of rolling an even number on a fair die?",
              "correctAnswer": [
                "1/2",
                "0.5",
                "50%"
              ],
              "explanation": "Even numbers are {2, 4, 6}, which is 3 out of 6 outcomes. P = 3/6 = 1/2 = 0.5",
              "xp": 4
            },
            {
              "id": "prob-2-1-6",
              "type": "multiple-choice",
              "question": "Two events are mutually exclusive if:",
              "options": [
                "They always occur together",
                "They cannot occur simultaneously",
                "One depends on the other",
                "They have equal probability"
              ],
              "correct": 1,
              "explanation": "Mutually exclusive (disjoint) events cannot occur at the same time, like rolling 1 OR 2 on one die",
              "xp": 3
            },
            {
              "id": "prob-2-1-7",
              "type": "typing",
              "question": "For two independent events A and B, what is P(A \u2229 B)?",
              "correctAnswer": [
                "P(A) * P(B)",
                "P(A)\u00b7P(B)",
                "product of probabilities"
              ],
              "explanation": "For independent events, P(A \u2229 B) = P(A) \u00b7 P(B). The probability of both happening is the product of individual probabilities",
              "xp": 5
            },
            {
              "id": "prob-2-1-8",
              "type": "multiple-choice",
              "question": "What is the minimum possible value of a probability?",
              "options": [
                "-1",
                "0",
                "0.5",
                "1"
              ],
              "correct": 1,
              "explanation": "Probabilities range from 0 (impossible event) to 1 (certain event)",
              "xp": 2
            },
            {
              "id": "prob-2-1-9",
              "type": "typing",
              "question": "If P(A) = 0.4 and P(B) = 0.5, and A and B are independent, what is P(A and B)?",
              "correctAnswer": [
                "0.2",
                "0.20",
                "20%"
              ],
              "explanation": "P(A \u2229 B) = P(A) \u00b7 P(B) = 0.4 \u00d7 0.5 = 0.2",
              "xp": 5
            },
            {
              "id": "prob-2-1-10",
              "type": "multiple-choice",
              "question": "In AI, probability is used for:",
              "options": [
                "Only for random number generation",
                "Handling uncertainty and making predictions with confidence",
                "Just for classification tasks",
                "Only in reinforcement learning"
              ],
              "correct": 1,
              "explanation": "Probability is fundamental in AI for handling noisy data, making predictions with confidence, building probabilistic models, and understanding uncertainty",
              "xp": 3
            },
            {
              "id": "prob-2-1-11",
              "type": "typing",
              "question": "What does P(S) = 1 represent?",
              "correctAnswer": [
                "sample space",
                "all outcomes",
                "something must happen",
                "certainty"
              ],
              "explanation": "P(S) = 1 means the probability of the sample space is 1 - something from the sample space must occur",
              "xp": 4
            },
            {
              "id": "prob-2-1-12",
              "type": "multiple-choice",
              "question": "If you flip a fair coin twice, what is P(heads on both flips)?",
              "options": [
                "1/4",
                "1/2",
                "2/3",
                "3/4"
              ],
              "correct": 0,
              "explanation": "Each flip is independent with P(H) = 1/2. P(HH) = (1/2) \u00d7 (1/2) = 1/4",
              "xp": 3
            },
            {
              "id": "prob-2-1-13",
              "type": "typing",
              "question": "What is the probability of an impossible event?",
              "correctAnswer": [
                "0",
                "zero",
                "0%",
                "impossible"
              ],
              "explanation": "The probability of an impossible event (empty set) is 0",
              "xp": 3
            },
            {
              "id": "prob-2-1-14",
              "type": "multiple-choice",
              "question": "Rolling two dice are independent because:",
              "options": [
                "They always show the same number",
                "One die affects the other",
                "The result of one doesn't affect the other",
                "They have the same probability"
              ],
              "correct": 2,
              "explanation": "Independent events are those where the occurrence of one doesn't affect the probability of the other",
              "xp": 3
            },
            {
              "id": "prob-2-1-15",
              "type": "typing",
              "question": "For mutually exclusive events, P(A \u222a B) equals:",
              "correctAnswer": [
                "P(A) + P(B)",
                "sum of probabilities"
              ],
              "explanation": "For mutually exclusive events, the probability of either occurring is the sum of their individual probabilities",
              "xp": 4
            },
            {
              "id": "prob-2-1-16",
              "type": "multiple-choice",
              "question": "In language models, what is predicted probabilistically?",
              "options": [
                "Only the first word",
                "The next word in a sequence",
                "Nothing is probabilistic",
                "Only the last word"
              ],
              "correct": 1,
              "explanation": "Language models predict the next word in a sequence probabilistically, assigning probabilities to possible next words",
              "xp": 3
            },
            {
              "id": "prob-2-1-17",
              "type": "typing",
              "question": "If P(rain) = 0.3, what is the probability of no rain?",
              "correctAnswer": [
                "0.7",
                "70%"
              ],
              "explanation": "Using complement: P(no rain) = 1 - P(rain) = 1 - 0.3 = 0.7",
              "xp": 4
            },
            {
              "id": "prob-2-1-18",
              "type": "multiple-choice",
              "question": "What is the maximum possible value of a probability?",
              "options": [
                "0",
                "0.5",
                "1",
                "\u221e"
              ],
              "correct": 2,
              "explanation": "The maximum probability is 1 (100%), representing a certain event",
              "xp": 2
            }
          ]
        },
        {
          "id": "1-2",
          "title": "Conditional probability",
          "unitTitle": "Probability Foundations",
          "xp": 88,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Conditional Probability\n\nConditional probability is the probability of an event occurring given that another event has already occurred. This is crucial in AI for:\n- Making predictions based on evidence\n- Bayesian inference\n- Hidden Markov models\n- Sequence modeling\n\n## Definition\n\nThe conditional probability of event B given event A is:\n$$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$$\n\nwhere:\n- $P(B|A)$ = probability of B given A occurred\n- $P(A \\cap B)$ = probability of both A and B occurring\n- $P(A)$ = probability of A occurring\n\n## Intuitive Understanding\n\n\"Given that A has occurred, what is the probability that B also occurs?\"\n\n**Example**: Disease testing\n- P(disease) = 0.01 (1% of population has the disease)\n- P(test positive | disease) = 0.99 (99% accurate if you have it)\n- P(test positive | healthy) = 0.05 (5% false positive rate)\n\nWe can find P(test positive) using the total probability rule (covered in next lesson).\n\n## Tree Diagram for Conditional Probability\n\nLooking at `diagrams/prob-conditional-tree.png`:\n- Start at the root\n- Branch to A or not A\n- From each branch, branch to B or not B\n- Each path shows a conditional probability\n\n## Key Properties\n\n1. **Order matters**: $P(A|B) \\neq P(B|A)$ generally\n2. **Cannot divide by zero**: $P(A)$ must be > 0 for $P(B|A)$ to exist\n3. **If B depends on A**: $P(B|A)$ may differ from $P(B)$\n4. **If B independent of A**: $P(B|A) = P(B)$\n\n## Conditional Probability Formula Variations\n\n$$P(A \\cap B) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)$$\n\nThis is the multiplication rule.\n\n## Example: Drawing Cards\n\nDraw a card from a standard deck (52 cards).\n\nGiven that you drew a heart (P(heart) = 13/52 = 1/4), what is the probability it's a King?\n\n$$P(\\text{King}|\\text{Heart}) = \\frac{P(\\text{King} \\cap \\text{Heart})}{P(\\text{Heart})} = \\frac{1/52}{1/4} = \\frac{1}{13}$$\n\nThere's 1 King of hearts out of 52 total cards, and 13 hearts total.\n\n## Independence Revisited\n\nEvents A and B are independent if:\n$$P(B|A) = P(B)$$\n\nor equivalently:\n$$P(A|B) = P(A)$$\n\nThe occurrence of one doesn't change the probability of the other.\n\n## Applications in AI\n\n**1. Markov Models**\n- $P(\\text{next state}|\\text{current state})\n- Used in speech recognition, part-of-speech tagging\n\n**2. Bayesian Networks**\n- Represent dependencies between variables\n- $P(\\text{symptom}|\\text{disease})\n\n**3. Language Models**\n- $P(\\text{next word}|\\text{previous words})\n- n-gram models use conditional probability\n\n**4. Spam Detection**\n- $P(\\text{spam}|\\text{contains word})$\n- Naive Bayes classifier\n\n## Common Mistakes\n\n\u274c Don't confuse $P(A|B)$ with $P(B|A)$ - they're usually different\n\u274c Don't forget that $P(A)$ must be > 0\n\u274c Don't assume independence without justification\n\u274c Don't use $P(A \\cap B)$ when you need $P(A|B)$ or vice versa",
          "questions": [
            {
              "id": "prob-2-2-1",
              "type": "typing",
              "question": "What is the formula for conditional probability P(B|A)?",
              "correctAnswer": [
                "P(A\u2229B)/P(A)",
                "P(A intersect B)/P(A)",
                "intersection over A"
              ],
              "explanation": "P(B|A) = P(A \u2229 B) / P(A) - the probability of both occurring divided by the probability of the given event",
              "xp": 5
            },
            {
              "id": "prob-2-2-2",
              "type": "typing",
              "question": "If P(A) = 0.4 and P(A \u2229 B) = 0.2, what is P(B|A)?",
              "correctAnswer": [
                "0.5",
                "1/2",
                "50%"
              ],
              "explanation": "P(B|A) = P(A \u2229 B) / P(A) = 0.2 / 0.4 = 0.5",
              "xp": 5
            },
            {
              "id": "prob-2-2-3",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/prob-conditional-tree.png`, what does P(B|A) represent?",
              "options": [
                "Probability of A given B",
                "Probability of B given A occurred",
                "Probability of both A and B",
                "Probability of neither A nor B"
              ],
              "correct": 1,
              "explanation": "P(B|A) is the probability that B occurs given that we know A has occurred (the branch labeled 'P(B|A)' on the tree)",
              "xp": 3
            },
            {
              "id": "prob-2-2-4",
              "type": "typing",
              "question": "For independent events A and B, what is P(B|A) equal to?",
              "correctAnswer": [
                "P(B)",
                "same as P(B)"
              ],
              "explanation": "If A and B are independent, P(B|A) = P(B) - knowing A occurred doesn't change the probability of B",
              "xp": 4
            },
            {
              "id": "prob-2-2-5",
              "type": "multiple-choice",
              "question": "Can P(B|A) be calculated if P(A) = 0?",
              "options": [
                "Yes, always",
                "No, division by zero",
                "Only if B is certain",
                "Depends on B"
              ],
              "correct": 1,
              "explanation": "P(B|A) = P(A \u2229 B) / P(A). If P(A) = 0, we cannot divide by zero, so P(B|A) is undefined",
              "xp": 3
            },
            {
              "id": "prob-2-2-6",
              "type": "typing",
              "question": "What is P(A \u2229 B) using the multiplication rule with P(B|A)?",
              "correctAnswer": [
                "P(A) * P(B|A)",
                "P(A)P(B|A)",
                "P(A) times P(B|A)"
              ],
              "explanation": "P(A \u2229 B) = P(A) \u00b7 P(B|A) - probability of A times probability of B given A",
              "xp": 5
            },
            {
              "id": "prob-2-2-7",
              "type": "multiple-choice",
              "question": "In Markov models, what is modeled using conditional probability?",
              "options": [
                "Only the initial state",
                "The next state given the current state",
                "All states independently",
                "The previous states only"
              ],
              "correct": 1,
              "explanation": "Markov models use P(next state | current state) - the probability of transitioning to the next state given the current state",
              "xp": 3
            },
            {
              "id": "prob-2-2-8",
              "type": "typing",
              "question": "In a deck of 52 cards, given you drew a heart, what's P(King|Heart)?",
              "correctAnswer": [
                "1/13",
                "0.077"
              ],
              "explanation": "There's 1 King of hearts out of 13 hearts total. P(King|Heart) = 1/13",
              "xp": 5
            },
            {
              "id": "prob-2-2-9",
              "type": "multiple-choice",
              "question": "Which statement is TRUE about conditional probability?",
              "options": [
                "P(A|B) always equals P(B|A)",
                "P(A|B) can differ from P(B|A)",
                "P(A|B) is always greater than P(B)",
                "P(A|B) requires P(B) = 1"
              ],
              "correct": 1,
              "explanation": "P(A|B) and P(B|A) are generally different - order matters in conditional probability",
              "xp": 3
            },
            {
              "id": "prob-2-2-10",
              "type": "typing",
              "question": "What is spam detection based on?",
              "correctAnswer": [
                "P(spam|word)",
                "probability of spam given contains word",
                "conditional probability"
              ],
              "explanation": "Spam detection uses Naive Bayes with P(spam | contains word) - the probability an email is spam given it contains certain words",
              "xp": 4
            },
            {
              "id": "prob-2-2-11",
              "type": "multiple-choice",
              "question": "Language models predict what probabilistically?",
              "options": [
                "Only the first word",
                "The next word given previous words",
                "Nothing - they're deterministic",
                "Only punctuation"
              ],
              "correct": 1,
              "explanation": "Language models use P(next word | previous words) - conditional probability of the next word given what came before",
              "xp": 3
            },
            {
              "id": "prob-2-2-12",
              "type": "typing",
              "question": "If P(A) = 0.6, P(B) = 0.5, and P(A \u2229 B) = 0.3, what is P(A|B)?",
              "correctAnswer": [
                "0.6",
                "60%"
              ],
              "explanation": "P(A|B) = P(A \u2229 B) / P(B) = 0.3 / 0.5 = 0.6",
              "xp": 5
            },
            {
              "id": "prob-2-2-13",
              "type": "multiple-choice",
              "question": "A common mistake is confusing:",
              "options": [
                "P(A) with P(B)",
                "P(A|B) with P(B|A)",
                "P(A \u2229 B) with P(A \u222a B)",
                "All of the above"
              ],
              "correct": 3,
              "explanation": "All these are common mistakes - but P(A|B) with P(B|A) is particularly important because order matters in conditional probability",
              "xp": 2
            },
            {
              "id": "prob-2-2-14",
              "type": "typing",
              "question": "What does Bayesian networking represent?",
              "correctAnswer": [
                "dependencies between variables",
                "variable relationships",
                "conditional dependencies"
              ],
              "explanation": "Bayesian networks represent conditional dependencies between variables using directed graphs with conditional probabilities",
              "xp": 4
            },
            {
              "id": "prob-2-2-15",
              "type": "multiple-choice",
              "question": "The multiplication rule states P(A \u2229 B) equals:",
              "options": [
                "P(A) + P(B)",
                "P(A) \u00b7 P(B|A)",
                "P(A) / P(B)",
                "P(A) - P(B)"
              ],
              "correct": 1,
              "explanation": "P(A \u2229 B) = P(A) \u00b7 P(B|A) - the product of probability of A and probability of B given A",
              "xp": 3
            },
            {
              "id": "prob-2-2-16",
              "type": "typing",
              "question": "If A and B are independent and P(A) = 0.4, P(B) = 0.5, what is P(B|A)?",
              "correctAnswer": [
                "0.5",
                "50%"
              ],
              "explanation": "For independent events, P(B|A) = P(B) = 0.5 - knowing A occurred doesn't affect B",
              "xp": 4
            },
            {
              "id": "prob-2-2-17",
              "type": "multiple-choice",
              "question": "Conditional probability requires P(A) to be:",
              "options": [
                "0",
                "greater than 0",
                "less than 0",
                "equal to P(B)"
              ],
              "correct": 1,
              "explanation": "P(A) must be > 0 because we divide by P(A) in the formula P(B|A) = P(A \u2229 B) / P(A)",
              "xp": 3
            },
            {
              "id": "prob-2-2-18",
              "type": "typing",
              "question": "In the disease testing example, P(test positive | disease) represents:",
              "correctAnswer": [
                "probability test is positive given you have disease",
                "sensitivity",
                "true positive rate"
              ],
              "explanation": "P(test positive | disease) is the sensitivity - the probability the test is positive given you actually have the disease",
              "xp": 5
            }
          ]
        },
        {
          "id": "1-3",
          "title": "Bayes theorem",
          "unitTitle": "Probability Foundations",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Bayes' Theorem\n\nBayes' Theorem is one of the most important results in probability theory. It allows us to update our beliefs about hypotheses based on new evidence. This is fundamental to:\n- Bayesian inference in AI\n- Spam filtering\n- Medical diagnosis\n- Machine learning classifiers\n- Probabilistic reasoning systems\n\n## The Theorem\n\nBayes' Theorem states:\n$$P(H|E) = \\frac{P(E|H) \\cdot P(H)}{P(E)}$$\n\nwhere:\n- $H$ = hypothesis (what we believe)\n- $E$ = evidence (what we observed)\n- $P(H|E)$ = posterior (belief after seeing evidence)\n- $P(H)$ = prior (initial belief)\n- $P(E|H)$ = likelihood (probability of evidence if hypothesis is true)\n- $P(E)$ = marginal likelihood (total probability of evidence)\n\n## Intuitive Understanding\n\nLooking at `diagrams/prob-bayes-theorem.png`:\n\n**Before evidence**: We have prior probabilities P(H) and P(\u00acH)\n\n**After evidence**: We update to posterior probabilities P(H|E) and P(\u00acH|E)\n\nThe evidence E changes how likely we think H is true.\n\n## Computing P(E)\n\nWe often use the law of total probability:\n$$P(E) = P(E|H) \\cdot P(H) + P(E|\\neg H) \\cdot P(\\neg H)$$\n\nThis considers all ways evidence E could occur.\n\n## Complete Bayes' Theorem\n\nSubstituting P(E):\n$$P(H|E) = \\frac{P(E|H) \\cdot P(H)}{P(E|H) \\cdot P(H) + P(E|\\neg H) \\cdot P(\\neg H)}$$\n\n## Example: Disease Testing\n\n**Given**:\n- P(disease) = 0.01 (1% prior)\n- P(test positive | disease) = 0.99 (sensitivity)\n- P(test positive | healthy) = 0.05 (false positive rate)\n\n**Find**: P(disease | test positive)\n\n**Step 1**: Compute P(test positive)\n$$P(E) = 0.99 \\times 0.01 + 0.05 \\times 0.99 = 0.0099 + 0.0495 = 0.0594$$\n\n**Step 2**: Apply Bayes\n$$P(H|E) = \\frac{0.99 \\times 0.01}{0.0594} = \\frac{0.0099}{0.0594} \\approx 0.167$$\n\n**Interpretation**: Even with a positive test, there's only ~16.7% chance you have the disease! This is because false positives are common when the disease is rare.\n\n## Naive Bayes Classifier\n\nIn machine learning, Naive Bayes uses Bayes' theorem with the \"naive\" assumption that features are independent.\n\n**For spam classification**:\n$$P(\\text{spam}|\\text{words}) = \\frac{P(\\text{words}|\\text{spam}) \\cdot P(\\text{spam})}{P(\\text{words})}$$\n\nAssuming word independence:\n$$P(\\text{words}|\\text{spam}) = \\prod_{i} P(\\text{word}_i|\\text{spam})$$\n\n## Applications in AI\n\n**1. Spam Filtering**\n- P(spam | email content)\n- Updates based on user feedback\n\n**2. Medical Diagnosis**\n- P(disease | symptoms)\n- Incorporates prevalence and test accuracy\n\n**3. Machine Learning**\n- Bayesian regression\n- Probabilistic neural networks\n- Variational inference\n\n**4. Robotics**\n- P(location | sensor readings)\n- Probabilistic localization\n\n**5. Natural Language Processing**\n- P(topic | document)\n- P(sentiment | text)\n\n## Key Insights\n\n1. **Prior matters**: Different priors lead to different posteriors\n2. **Evidence strength**: Strong evidence overwhelms weak priors\n3. **Multiple hypotheses**: Can compare P(H\u2081|E), P(H\u2082|E), etc.\n4. **Sequential updating**: Can update beliefs with multiple pieces of evidence\n\n## Bayesian vs Frequentist\n\n**Bayesian**: Treats parameters as random variables with probabilities\n**Frequentist**: Parameters are fixed, data is random\n\nIn AI, Bayesian methods are popular because they:\n- Naturally handle uncertainty\n- Allow incorporating prior knowledge\n- Provide probabilistic predictions\n- Update beliefs with new data",
          "questions": [
            {
              "id": "prob-2-3-1",
              "type": "typing",
              "question": "What is Bayes' Theorem formula for P(H|E)?",
              "correctAnswer": [
                "P(E|H) * P(H) / P(E)",
                "P(E|H)P(H)/P(E)",
                "likelihood times prior over evidence"
              ],
              "explanation": "P(H|E) = [P(E|H) \u00d7 P(H)] / P(E) - posterior equals likelihood times prior divided by evidence",
              "xp": 5
            },
            {
              "id": "prob-2-3-2",
              "type": "typing",
              "question": "In Bayes' Theorem, P(H) is called the:",
              "correctAnswer": [
                "prior",
                "prior probability",
                "initial belief"
              ],
              "explanation": "P(H) is the prior - our initial belief about hypothesis H before seeing evidence",
              "xp": 4
            },
            {
              "id": "prob-2-3-3",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/prob-bayes-theorem.png`, what does the left diagram show?",
              "options": [
                "Posterior probabilities after evidence",
                "Prior probabilities before evidence",
                "Only the evidence",
                "The likelihood function"
              ],
              "correct": 1,
              "explanation": "The left diagram shows P(H) and P(\u00acH) - the prior probabilities before observing any evidence",
              "xp": 3
            },
            {
              "id": "prob-2-3-4",
              "type": "typing",
              "question": "What is P(H|E) called in Bayes' Theorem?",
              "correctAnswer": [
                "posterior",
                "posterior probability",
                "updated belief"
              ],
              "explanation": "P(H|E) is the posterior - our updated belief about hypothesis H after seeing evidence E",
              "xp": 4
            },
            {
              "id": "prob-2-3-5",
              "type": "multiple-choice",
              "question": "What does P(E|H) represent in Bayes' Theorem?",
              "options": [
                "Prior probability",
                "Posterior probability",
                "Likelihood of evidence given hypothesis",
                "Marginal likelihood"
              ],
              "correct": 2,
              "explanation": "P(E|H) is the likelihood - how likely the evidence is if our hypothesis is true",
              "xp": 3
            },
            {
              "id": "prob-2-3-6",
              "type": "typing",
              "question": "Using total probability, P(E) equals:",
              "correctAnswer": [
                "P(E|H)P(H) + P(E|\u00acH)P(\u00acH)",
                "sum of likelihoods times priors"
              ],
              "explanation": "P(E) = P(E|H)\u00d7P(H) + P(E|\u00acH)\u00d7P(\u00acH) - evidence can occur whether H is true or false",
              "xp": 5
            },
            {
              "id": "prob-2-3-7",
              "type": "multiple-choice",
              "question": "If P(H) = 0.01, P(E|H) = 0.99, P(E|\u00acH) = 0.05, what is P(E)?",
              "options": [
                "0.01",
                "0.05",
                "0.0594",
                "0.99"
              ],
              "correct": 2,
              "explanation": "P(E) = 0.99\u00d70.01 + 0.05\u00d70.99 = 0.0099 + 0.0495 = 0.0594",
              "xp": 4
            },
            {
              "id": "prob-2-3-8",
              "type": "typing",
              "question": "In the disease example, with a positive test, P(disease|test) \u2248",
              "correctAnswer": [
                "0.167",
                "16.7%",
                "0.17"
              ],
              "explanation": "Even with a positive test, P(disease|test) \u2248 0.167 (16.7%) because false positives are common when disease is rare",
              "xp": 5
            },
            {
              "id": "prob-2-3-9",
              "type": "multiple-choice",
              "question": "Naive Bayes assumes features are:",
              "options": [
                "Dependent on each other",
                "Independent of each other",
                "Always equal",
                "Never present"
              ],
              "correct": 1,
              "explanation": "Naive Bayes assumes feature independence - this is the 'naive' assumption that makes calculations tractable",
              "xp": 3
            },
            {
              "id": "prob-2-3-10",
              "type": "typing",
              "question": "Bayesian methods treat parameters as:",
              "correctAnswer": [
                "random variables",
                "uncertain",
                "having probabilities"
              ],
              "explanation": "Bayesian methods treat parameters as random variables with probability distributions, unlike frequentist methods where parameters are fixed",
              "xp": 4
            },
            {
              "id": "prob-2-3-11",
              "type": "multiple-choice",
              "question": "Spam filtering uses Bayes to compute:",
              "options": [
                "P(spam) only",
                "P(spam | email content)",
                "P(email | spam) only",
                "P(words) only"
              ],
              "correct": 1,
              "explanation": "Spam filtering computes P(spam | email content) - the probability an email is spam given its words and features",
              "xp": 3
            },
            {
              "id": "prob-2-3-12",
              "type": "typing",
              "question": "What happens to posterior when strong evidence contradicts prior?",
              "correctAnswer": [
                "prior is overwhelmed",
                "posterior reflects evidence",
                "evidence dominates"
              ],
              "explanation": "Strong evidence can overwhelm a weak prior - the posterior will reflect the evidence more than the prior",
              "xp": 5
            },
            {
              "id": "prob-2-3-13",
              "type": "multiple-choice",
              "question": "Bayesian methods are popular in AI because they:",
              "options": [
                "Always give exact answers",
                "Never require computation",
                "Naturally handle uncertainty",
                "Ignore prior knowledge"
              ],
              "correct": 2,
              "explanation": "Bayesian methods naturally handle uncertainty, allow incorporating prior knowledge, and provide probabilistic predictions",
              "xp": 3
            },
            {
              "id": "prob-2-3-14",
              "type": "typing",
              "question": "What can we compute with Bayes for multiple hypotheses?",
              "correctAnswer": [
                "P(H\u2081|E), P(H\u2082|E), etc.",
                "posteriors for all hypotheses"
              ],
              "explanation": "We can compute posterior probabilities for multiple hypotheses H\u2081, H\u2082, H\u2083... given the same evidence E",
              "xp": 4
            },
            {
              "id": "prob-2-3-15",
              "type": "multiple-choice",
              "question": "Sequential Bayesian updating means:",
              "options": [
                "Starting over each time",
                "Using posterior as new prior",
                "Ignoring new evidence",
                "Never updating beliefs"
              ],
              "correct": 1,
              "explanation": "Sequential updating uses the posterior from previous evidence as the prior for new evidence - beliefs are updated incrementally",
              "xp": 3
            },
            {
              "id": "prob-2-3-16",
              "type": "typing",
              "question": "In Naive Bayes for spam, P(words|spam) assumes:",
              "correctAnswer": [
                "words are independent",
                "word independence"
              ],
              "explanation": "Naive Bayes assumes words in an email are independent given the class (spam/not spam), which is a strong but useful simplification",
              "xp": 4
            },
            {
              "id": "prob-2-3-17",
              "type": "multiple-choice",
              "question": "Frequentist methods treat parameters as:",
              "options": [
                "Random variables",
                "Fixed unknown constants",
                "Always zero",
                "Always one"
              ],
              "correct": 1,
              "explanation": "Frequentist methods treat parameters as fixed unknown constants, unlike Bayesian methods where parameters have probability distributions",
              "xp": 3
            },
            {
              "id": "prob-2-3-18",
              "type": "typing",
              "question": "What is the key insight about priors in Bayes' Theorem?",
              "correctAnswer": [
                "different priors lead to different posteriors",
                "priors affect posterior"
              ],
              "explanation": "Different prior beliefs (priors) will lead to different posterior beliefs after seeing the same evidence - your starting point matters",
              "xp": 5
            }
          ]
        },
        {
          "id": "1-4",
          "title": "Independence",
          "unitTitle": "Probability Foundations",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Random Variables and Probability Distributions\n\nRandom variables are fundamental to AI and machine learning. They represent uncertain quantities that can take different values based on random experiments.\n\n## Random Variables\n\nA **random variable X** is a function that assigns a numerical value to each outcome in the sample space.\n\n**Types**:\n1. **Discrete**: Takes countable values (e.g., number of heads in 10 coin flips)\n2. **Continuous**: Takes any value in a range (e.g., height, weight, time)\n\n## Probability Mass Function (PMF)\n\nFor discrete random variables:\n$$p(x) = P(X = x)$$\n\n**Properties**:\n- $p(x) \\geq 0$ for all x\n- $\\sum_x p(x) = 1$ (total probability = 1)\n\n**Example**: Rolling a die\nX = value rolled\np(1) = p(2) = p(3) = p(4) = p(5) = p(6) = 1/6\n\n## Probability Density Function (PDF)\n\nFor continuous random variables:\n$$f(x) \\text{ where } P(a \\leq X \\leq b) = \\int_a^b f(x) dx$$\n\n**Properties**:\n- $f(x) \\geq 0$ for all x\n- $\\int_{-\\infty}^{\\infty} f(x) dx = 1$\n\n**Important**: For continuous variables, P(X = a) = 0 (point probability is zero)\n\n## Expected Value (Mean)\n\n**Discrete**:\n$$E[X] = \\sum_x x \\cdot p(x)$$\n\n**Continuous**:\n$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x) dx$$\n\nThe expected value is the weighted average of all possible values.\n\n## Variance and Standard Deviation\n\n**Variance**:\n$$\\text{Var}(X) = E[(X - \\mu)^2] = E[X^2] - (E[X])^2$$\n\n**Standard Deviation**:\n$$\\sigma = \\sqrt{\\text{Var}(X)}$$\n\nVariance measures spread. Larger variance = more spread out.\n\n## Common Distributions\n\n### Bernoulli Distribution\n**Use**: Single trial with two outcomes (success/failure)\n\n**PMF**: $P(X = 1) = p$, $P(X = 0) = 1 - p$\n\n**Mean**: $E[X] = p$\n**Variance**: $\\text{Var}(X) = p(1-p)$\n\n### Binomial Distribution\n**Use**: Number of successes in n independent Bernoulli trials\n\n**PMF**: $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$\n\n**Mean**: $E[X] = np$\n**Variance**: $\\text{Var}(X) = np(1-p)$\n\n**Example**: Number of heads in 10 coin flips\n### Normal (Gaussian) Distribution\n**Use**: Continuous data, central limit theorem\n\n**PDF**: $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$\n\n**Notation**: $X \\sim N(\\mu, \\sigma^2)$\n\n**Mean**: $E[X] = \\mu$\n**Variance**: $\\text{Var}(X) = \\sigma^2$\n\n**Properties**:\n- Symmetric about \u03bc\n- About 68% within \u03bc \u00b1 \u03c3\n- About 95% within \u03bc \u00b1 2\u03c3\n- About 99.7% within \u03bc \u00b1 3\u03c3\n\n## Applications in AI\n\n**1. Machine Learning Models**\n- Errors often assumed normally distributed\n- Model parameters learned as expected values\n\n**2. Bayesian Inference**\n- Prior and posterior distributions\n- Updating beliefs about parameters\n\n**3. Neural Networks**\n- Weight initialization (often normal)\n- Dropout probability\n\n**4. Reinforcement Learning**\n- Reward distributions\n- Policy probabilities\n\n**5. Natural Language Processing**\n- Word frequencies (often follow power law, not normal)\n- Topic distributions (Dirichlet)\n\n## Sampling from Distributions\n\n**Monte Carlo Methods**: Generate samples to approximate distributions\n- Used in: MCMC, particle filters, reinforcement learning\n\n**Random Number Generation**: Computers generate pseudo-random numbers\n- Important for: simulations, stochastic algorithms, initialization\n\n## Joint and Marginal Distributions\n\n**Joint**: $p(x, y) = P(X = x \\text{ and } Y = y)$\n\n**Marginal**: $p(x) = \\sum_y p(x, y)$ (discrete)\n\n**Conditional**: $p(y|x) = \\frac{p(x, y)}{p(x)}$",
          "questions": [
            {
              "id": "prob-2-4-1",
              "type": "typing",
              "question": "What are the two types of random variables?",
              "correctAnswer": [
                "discrete and continuous",
                "discrete, continuous"
              ],
              "explanation": "Random variables are either discrete (countable values) or continuous (any value in a range)",
              "xp": 4
            },
            {
              "id": "prob-2-4-2",
              "type": "typing",
              "question": "For a discrete random variable, what is the PMF?",
              "correctAnswer": [
                "P(X = x)",
                "probability mass function",
                "p(x)"
              ],
              "explanation": "The PMF (Probability Mass Function) gives p(x) = P(X = x) - the probability the random variable equals a specific value",
              "xp": 5
            },
            {
              "id": "prob-2-4-3",
              "type": "multiple-choice",
              "question": "For a continuous random variable, what is P(X = a)?",
              "options": [
                "Always positive",
                "Always zero",
                "Always 1",
                "Depends on distribution"
              ],
              "correct": 1,
              "explanation": "For continuous random variables, the probability of any exact point is 0. We only talk about probabilities over intervals.",
              "xp": 3
            },
            {
              "id": "prob-2-4-4",
              "type": "typing",
              "question": "What is the expected value E[X] for a discrete random variable?",
              "correctAnswer": [
                "sum of x * p(x)",
                "\u03a3x\u00b7p(x)",
                "weighted average"
              ],
              "explanation": "E[X] = \u03a3 x\u00b7p(x) - the weighted average of all possible values, weighted by their probabilities",
              "xp": 5
            },
            {
              "id": "prob-2-4-5",
              "type": "multiple-choice",
              "question": "What does variance measure?",
              "options": [
                "Central tendency",
                "Spread or dispersion",
                "Skewness",
                "Kurtosis"
              ],
              "correct": 1,
              "explanation": "Variance measures spread - how spread out the values are around the mean",
              "xp": 3
            },
            {
              "id": "prob-2-4-6",
              "type": "typing",
              "question": "For a normal distribution, about what percentage is within \u03bc \u00b1 2\u03c3?",
              "correctAnswer": [
                "95%",
                "95 percent"
              ],
              "explanation": "For a normal distribution, about 95% of values fall within \u03bc \u00b1 2\u03c3 (two standard deviations)",
              "xp": 4
            },
            {
              "id": "prob-2-4-7",
              "type": "multiple-choice",
              "question": "The Bernoulli distribution has how many possible outcomes?",
              "options": [
                "1",
                "2",
                "3",
                "Infinite"
              ],
              "correct": 1,
              "explanation": "Bernoulli is for single trials with two outcomes: success (1) or failure (0)",
              "xp": 3
            },
            {
              "id": "prob-2-4-8",
              "type": "typing",
              "question": "For a Binomial(n, p) distribution, what is the mean E[X]?",
              "correctAnswer": [
                "np",
                "n times p"
              ],
              "explanation": "For Binomial(n, p), E[X] = np - the expected number of successes in n trials",
              "xp": 5
            },
            {
              "id": "prob-2-4-9",
              "type": "multiple-choice",
              "question": "What distribution is often used for error terms in machine learning?",
              "options": [
                "Bernoulli",
                "Binomial",
                "Normal (Gaussian)",
                "Exponential"
              ],
              "correct": 2,
              "explanation": "Errors in machine learning models are often assumed to follow a normal distribution",
              "xp": 3
            },
            {
              "id": "prob-2-4-10",
              "type": "typing",
              "question": "What is standard deviation in terms of variance?",
              "correctAnswer": [
                "square root of variance",
                "sqrt(variance)",
                "\u221aVar(X)"
              ],
              "explanation": "Standard deviation \u03c3 = \u221aVar(X) - the square root of variance",
              "xp": 4
            },
            {
              "id": "prob-2-4-11",
              "type": "multiple-choice",
              "question": "The PDF for a continuous random variable gives:",
              "options": [
                "Probability at a point",
                "Density, integrated over ranges",
                "Only the mean",
                "Only the variance"
              ],
              "correct": 1,
              "explanation": "For continuous variables, the PDF gives density. We integrate it over ranges to get probabilities.",
              "xp": 3
            },
            {
              "id": "prob-2-4-12",
              "type": "typing",
              "question": "What notation represents a normal distribution with mean \u03bc and variance \u03c3\u00b2?",
              "correctAnswer": [
                "N(\u03bc, \u03c3\u00b2)",
                "N(mu, sigma^2)",
                "normal distribution"
              ],
              "explanation": "X \u223c N(\u03bc, \u03c3\u00b2) means X follows a normal distribution with mean \u03bc and variance \u03c3\u00b2",
              "xp": 5
            },
            {
              "id": "prob-2-4-13",
              "type": "multiple-choice",
              "question": "Monte Carlo methods are used to:",
              "options": [
                "Always give exact answers",
                "Generate samples to approximate distributions",
                "Only for discrete variables",
                "Only for normal distributions"
              ],
              "correct": 1,
              "explanation": "Monte Carlo methods generate random samples to approximate distributions and compute quantities that are hard to calculate analytically",
              "xp": 3
            },
            {
              "id": "prob-2-4-14",
              "type": "typing",
              "question": "For a discrete joint distribution p(x, y), what is the marginal p(x)?",
              "correctAnswer": [
                "sum over y of p(x,y)",
                "\u03a3p(x,y)",
                "sum over y"
              ],
              "explanation": "The marginal p(x) = \u03a3\u1d67 p(x, y) - sum over all y to get distribution of x alone",
              "xp": 5
            },
            {
              "id": "prob-2-4-15",
              "type": "multiple-choice",
              "question": "In reinforcement learning, what is probabilistic?",
              "options": [
                "Only the initial state",
                "Nothing is probabilistic",
                "Reward distributions and policies",
                "Only the terminal state"
              ],
              "correct": 2,
              "explanation": "In RL, rewards follow distributions and policies define probabilities of taking actions",
              "xp": 3
            },
            {
              "id": "prob-2-4-16",
              "type": "typing",
              "question": "What is the variance formula in terms of expectations?",
              "correctAnswer": [
                "E[X\u00b2] - (E[X])\u00b2",
                "E[X^2] - E[X]^2",
                "second moment minus square of first"
              ],
              "explanation": "Var(X) = E[X\u00b2] - (E[X])\u00b2 - the expected value of X squared minus the square of the expected value",
              "xp": 5
            },
            {
              "id": "prob-2-4-17",
              "type": "multiple-choice",
              "question": "Larger variance means values are:",
              "options": [
                "More clustered around the mean",
                "More spread out",
                "Always positive",
                "Always negative"
              ],
              "correct": 1,
              "explanation": "Larger variance means values are more spread out from the mean - there's more variability",
              "xp": 3
            },
            {
              "id": "prob-2-4-18",
              "type": "typing",
              "question": "What is the central limit theorem about?",
              "correctAnswer": [
                "sum of many random variables approaches normal",
                "many independent variables sum to normal"
              ],
              "explanation": "The central limit theorem states that the sum of many independent random variables approaches a normal distribution",
              "xp": 5
            }
          ]
        }
      ]
    },
    {
      "unitId": "2",
      "unitName": "Random Variables",
      "lessons": [
        {
          "id": "2-1",
          "title": "Discrete variables",
          "unitTitle": "Random Variables",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "2-2",
          "title": "Continuous variables",
          "unitTitle": "Random Variables",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "2-3",
          "title": "Probability mass function",
          "unitTitle": "Random Variables",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "2-4",
          "title": "Probability density function",
          "unitTitle": "Random Variables",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "2-5",
          "title": "Cumulative distribution function",
          "unitTitle": "Random Variables",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "3",
      "unitName": "Important Distributions",
      "lessons": [
        {
          "id": "3-1",
          "title": "Bernoulli",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "3-2",
          "title": "Binomial",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "3-3",
          "title": "Poisson",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "3-4",
          "title": "Uniform",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "3-5",
          "title": "Gaussian",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "3-6",
          "title": "Exponential",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "3-7",
          "title": "Gamma",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "3-8",
          "title": "Beta",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "3-9",
          "title": "Dirichlet",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "4",
      "unitName": "Expectations",
      "lessons": [
        {
          "id": "4-1",
          "title": "Expected value",
          "unitTitle": "Expectations",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "4-2",
          "title": "Variance",
          "unitTitle": "Expectations",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "4-3",
          "title": "Covariance",
          "unitTitle": "Expectations",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "4-4",
          "title": "Correlation",
          "unitTitle": "Expectations",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "5",
      "unitName": "Multivariate Probability",
      "lessons": [
        {
          "id": "5-1",
          "title": "Multivariate Gaussian",
          "unitTitle": "Multivariate Probability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "5-2",
          "title": "Covariance matrices",
          "unitTitle": "Multivariate Probability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "5-3",
          "title": "Independence vs uncorrelated",
          "unitTitle": "Multivariate Probability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "6",
      "unitName": "Information Theory",
      "lessons": [
        {
          "id": "6-1",
          "title": "Entropy",
          "unitTitle": "Information Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "6-2",
          "title": "Cross entropy",
          "unitTitle": "Information Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "6-3",
          "title": "KL divergence",
          "unitTitle": "Information Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "6-4",
          "title": "Mutual information",
          "unitTitle": "Information Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "7",
      "unitName": "Descriptive Statistics",
      "lessons": [
        {
          "id": "7-1",
          "title": "Mean",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-2",
          "title": "Median",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-3",
          "title": "Mode",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-4",
          "title": "Variance",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-5",
          "title": "Standard deviation",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-6",
          "title": "Skewness",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "7-7",
          "title": "Kurtosis",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "8",
      "unitName": "Statistical Inference",
      "lessons": [
        {
          "id": "8-1",
          "title": "Sampling",
          "unitTitle": "Statistical Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "8-2",
          "title": "Confidence intervals",
          "unitTitle": "Statistical Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "8-3",
          "title": "Hypothesis testing",
          "unitTitle": "Statistical Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "8-4",
          "title": "p-values",
          "unitTitle": "Statistical Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "9",
      "unitName": "Estimation",
      "lessons": [
        {
          "id": "9-1",
          "title": "Maximum likelihood estimation (MLE)",
          "unitTitle": "Estimation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "9-2",
          "title": "Maximum a posteriori (MAP)",
          "unitTitle": "Estimation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "10",
      "unitName": "Bayesian Statistics",
      "lessons": [
        {
          "id": "10-1",
          "title": "Prior distributions",
          "unitTitle": "Bayesian Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "10-2",
          "title": "Posterior distributions",
          "unitTitle": "Bayesian Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "10-3",
          "title": "Bayesian inference",
          "unitTitle": "Bayesian Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "10-4",
          "title": "Conjugate priors",
          "unitTitle": "Bayesian Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "11",
      "unitName": "Regression Analysis",
      "lessons": [
        {
          "id": "11-1",
          "title": "Linear regression",
          "unitTitle": "Regression Analysis",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "11-2",
          "title": "Logistic regression",
          "unitTitle": "Regression Analysis",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "11-3",
          "title": "Ridge regression",
          "unitTitle": "Regression Analysis",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "11-4",
          "title": "Lasso regression",
          "unitTitle": "Regression Analysis",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "12",
      "unitName": "Optimization",
      "lessons": [
        {
          "id": "12-1",
          "title": "Gradient descent",
          "unitTitle": "Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "12-2",
          "title": "Stochastic gradient descent",
          "unitTitle": "Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "12-3",
          "title": "Momentum",
          "unitTitle": "Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "12-4",
          "title": "Adam optimizer",
          "unitTitle": "Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "12-5",
          "title": "RMSProp",
          "unitTitle": "Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "13",
      "unitName": "Constrained Optimization",
      "lessons": [
        {
          "id": "13-1",
          "title": "Lagrange multipliers",
          "unitTitle": "Constrained Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "13-2",
          "title": "Karush\u2013Kuhn\u2013Tucker conditions",
          "unitTitle": "Constrained Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "14",
      "unitName": "Systems for ML",
      "lessons": [
        {
          "id": "14-1",
          "title": "Parallel computing",
          "unitTitle": "Systems for ML",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "14-2",
          "title": "GPU programming",
          "unitTitle": "Systems for ML",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "14-3",
          "title": "CUDA",
          "unitTitle": "Systems for ML",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "14-4",
          "title": "Distributed systems",
          "unitTitle": "Systems for ML",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "15",
      "unitName": "Data Processing",
      "lessons": [
        {
          "id": "15-1",
          "title": "Data cleaning",
          "unitTitle": "Data Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "15-2",
          "title": "Handling missing data",
          "unitTitle": "Data Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "15-3",
          "title": "Feature scaling",
          "unitTitle": "Data Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "15-4",
          "title": "Encoding categorical variables",
          "unitTitle": "Data Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "16",
      "unitName": "Data Pipelines",
      "lessons": [
        {
          "id": "16-1",
          "title": "ETL pipelines",
          "unitTitle": "Data Pipelines",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "16-2",
          "title": "Streaming data",
          "unitTitle": "Data Pipelines",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "16-3",
          "title": "Batch processing",
          "unitTitle": "Data Pipelines",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "17",
      "unitName": "Databases",
      "lessons": [
        {
          "id": "17-1",
          "title": "SQL",
          "unitTitle": "Databases",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "17-2",
          "title": "NoSQL",
          "unitTitle": "Databases",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "17-3",
          "title": "Data lakes",
          "unitTitle": "Databases",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "17-4",
          "title": "Data warehouses",
          "unitTitle": "Databases",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "17-5",
          "title": "4. Classical Machine Learning",
          "unitTitle": "Databases",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "18",
      "unitName": "Linear Models",
      "lessons": [
        {
          "id": "18-1",
          "title": "Linear regression",
          "unitTitle": "Linear Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "18-2",
          "title": "Logistic regression",
          "unitTitle": "Linear Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "18-3",
          "title": "Perceptron",
          "unitTitle": "Linear Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "19",
      "unitName": "Support Vector Machines",
      "lessons": [
        {
          "id": "19-1",
          "title": "Maximum margin classifier",
          "unitTitle": "Support Vector Machines",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "19-2",
          "title": "Kernel trick",
          "unitTitle": "Support Vector Machines",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "19-3",
          "title": "Soft margins",
          "unitTitle": "Support Vector Machines",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "20",
      "unitName": "Decision Trees",
      "lessons": [
        {
          "id": "20-1",
          "title": "Information gain",
          "unitTitle": "Decision Trees",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "20-2",
          "title": "Gini impurity",
          "unitTitle": "Decision Trees",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "20-3",
          "title": "Tree pruning",
          "unitTitle": "Decision Trees",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "21",
      "unitName": "Ensemble Methods",
      "lessons": [
        {
          "id": "21-1",
          "title": "Bagging",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "21-2",
          "title": "Random forests",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "21-3",
          "title": "Boosting",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "21-4",
          "title": "Gradient boosting",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "21-5",
          "title": "XGBoost",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "21-6",
          "title": "LightGBM",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "22",
      "unitName": "Clustering",
      "lessons": [
        {
          "id": "22-1",
          "title": "K-means",
          "unitTitle": "Clustering",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "22-2",
          "title": "Hierarchical clustering",
          "unitTitle": "Clustering",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "22-3",
          "title": "DBSCAN",
          "unitTitle": "Clustering",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "22-4",
          "title": "Gaussian mixture models",
          "unitTitle": "Clustering",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "23",
      "unitName": "Dimensionality Reduction",
      "lessons": [
        {
          "id": "23-1",
          "title": "PCA",
          "unitTitle": "Dimensionality Reduction",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "23-2",
          "title": "t-SNE",
          "unitTitle": "Dimensionality Reduction",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "23-3",
          "title": "UMAP",
          "unitTitle": "Dimensionality Reduction",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "23-4",
          "title": "ICA",
          "unitTitle": "Dimensionality Reduction",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "24",
      "unitName": "Density Estimation",
      "lessons": [
        {
          "id": "24-1",
          "title": "Kernel density estimation",
          "unitTitle": "Density Estimation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "24-2",
          "title": "Gaussian mixtures",
          "unitTitle": "Density Estimation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "25",
      "unitName": "Semi-Supervised Learning",
      "lessons": [
        {
          "id": "25-1",
          "title": "Self-training",
          "unitTitle": "Semi-Supervised Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "25-2",
          "title": "Label propagation",
          "unitTitle": "Semi-Supervised Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "25-3",
          "title": "Pseudo labeling",
          "unitTitle": "Semi-Supervised Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "26",
      "unitName": "Reinforcement Learning Basics",
      "lessons": [
        {
          "id": "26-1",
          "title": "Markov Decision Processes",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "26-2",
          "title": "Bellman equations",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "26-3",
          "title": "Value iteration",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "26-4",
          "title": "Policy iteration",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "26-5",
          "title": "Q-learning",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "26-6",
          "title": "5. Deep Learning",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "27",
      "unitName": "Neural Network Fundamentals",
      "lessons": [
        {
          "id": "27-1",
          "title": "Perceptrons",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "27-2",
          "title": "Activation functions",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "27-3",
          "title": "Backpropagation",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "27-4",
          "title": "Loss functions",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "27-5",
          "title": "Activation Functions",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "27-6",
          "title": "ReLU",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "27-7",
          "title": "Leaky ReLU",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "27-8",
          "title": "Sigmoid",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "27-9",
          "title": "Tanh",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "27-10",
          "title": "GELU",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "27-11",
          "title": "Softmax",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "28",
      "unitName": "Neural Network Training",
      "lessons": [
        {
          "id": "28-1",
          "title": "Initialization",
          "unitTitle": "Neural Network Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "28-2",
          "title": "Batch normalization",
          "unitTitle": "Neural Network Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "28-3",
          "title": "Dropout",
          "unitTitle": "Neural Network Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "28-4",
          "title": "Regularization",
          "unitTitle": "Neural Network Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "29",
      "unitName": "Convolutional Neural Networks",
      "lessons": [
        {
          "id": "29-1",
          "title": "Core Concepts",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "29-2",
          "title": "Convolutions",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "29-3",
          "title": "Filters",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "29-4",
          "title": "Padding",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "29-5",
          "title": "Stride",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "29-6",
          "title": "Architectures",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "29-7",
          "title": "LeNet",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "29-8",
          "title": "AlexNet",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "29-9",
          "title": "VGGNet",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "29-10",
          "title": "ResNet",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "29-11",
          "title": "EfficientNet",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "30",
      "unitName": "Recurrent Neural Networks",
      "lessons": [
        {
          "id": "30-1",
          "title": "Core Concepts",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "30-2",
          "title": "Sequence modeling",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "30-3",
          "title": "Hidden states",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "30-4",
          "title": "Vanishing gradients",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "30-5",
          "title": "Architectures",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "30-6",
          "title": "Long Short-Term Memory",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "30-7",
          "title": "Gated Recurrent Unit",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "30-8",
          "title": "6. Natural Language Processing",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "31",
      "unitName": "Text Processing",
      "lessons": [
        {
          "id": "31-1",
          "title": "Tokenization",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "31-2",
          "title": "Stemming",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "31-3",
          "title": "Lemmatization",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "31-4",
          "title": "Stopword removal",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "31-5",
          "title": "Word Representations",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "31-6",
          "title": "Bag of Words",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "31-7",
          "title": "TF-IDF",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "31-8",
          "title": "Word2Vec",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "31-9",
          "title": "GloVe",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "31-10",
          "title": "FastText",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "32",
      "unitName": "Sequence Models",
      "lessons": [
        {
          "id": "32-1",
          "title": "RNNs",
          "unitTitle": "Sequence Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "32-2",
          "title": "LSTMs",
          "unitTitle": "Sequence Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "32-3",
          "title": "Seq2Seq models",
          "unitTitle": "Sequence Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "32-4",
          "title": "Attention mechanisms",
          "unitTitle": "Sequence Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "32-5",
          "title": "7. Transformers and Modern LLMs",
          "unitTitle": "Sequence Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "33",
      "unitName": "Transformer Architecture",
      "lessons": [
        {
          "id": "33-1",
          "title": "Self-attention",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "33-2",
          "title": "Multi-head attention",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "33-3",
          "title": "Positional encoding",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "33-4",
          "title": "Feed-forward layers",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "33-5",
          "title": "Layer normalization",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "33-6",
          "title": "Residual connections",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "33-7",
          "title": "Core Paper",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "33-8",
          "title": "Attention Is All You Need",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "34",
      "unitName": "Transformer Variants",
      "lessons": [
        {
          "id": "34-1",
          "title": "BERT",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "34-2",
          "title": "GPT",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "34-3",
          "title": "T5",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "34-4",
          "title": "RoBERTa",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "34-5",
          "title": "PaLM",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "34-6",
          "title": "LLaMA",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "35",
      "unitName": "Advanced Transformer Topics",
      "lessons": [
        {
          "id": "35-1",
          "title": "Sparse attention",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "35-2",
          "title": "Linear attention",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "35-3",
          "title": "Retrieval-augmented generation (RAG)",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "35-4",
          "title": "Mixture of experts",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "35-5",
          "title": "Long-context transformers",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "35-6",
          "title": "8. Generative Models",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "36",
      "unitName": "Variational Autoencoders",
      "lessons": [
        {
          "id": "36-1",
          "title": "Latent variables",
          "unitTitle": "Variational Autoencoders",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "36-2",
          "title": "ELBO objective",
          "unitTitle": "Variational Autoencoders",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "36-3",
          "title": "Encoder-decoder networks",
          "unitTitle": "Variational Autoencoders",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "37",
      "unitName": "Generative Adversarial Networks",
      "lessons": [
        {
          "id": "37-1",
          "title": "Generator",
          "unitTitle": "Generative Adversarial Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "37-2",
          "title": "Discriminator",
          "unitTitle": "Generative Adversarial Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "37-3",
          "title": "Nash equilibrium",
          "unitTitle": "Generative Adversarial Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "38",
      "unitName": "Diffusion Models",
      "lessons": [
        {
          "id": "38-1",
          "title": "Denoising diffusion",
          "unitTitle": "Diffusion Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "38-2",
          "title": "Forward diffusion",
          "unitTitle": "Diffusion Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "38-3",
          "title": "Reverse diffusion",
          "unitTitle": "Diffusion Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "38-4",
          "title": "Score matching",
          "unitTitle": "Diffusion Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "38-5",
          "title": "9. Reinforcement Learning (Advanced)",
          "unitTitle": "Diffusion Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "39",
      "unitName": "Deep RL",
      "lessons": [
        {
          "id": "39-1",
          "title": "Deep Q Networks",
          "unitTitle": "Deep RL",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "39-2",
          "title": "Policy gradient methods",
          "unitTitle": "Deep RL",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "39-3",
          "title": "Actor-critic methods",
          "unitTitle": "Deep RL",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "40",
      "unitName": "Advanced RL",
      "lessons": [
        {
          "id": "40-1",
          "title": "PPO",
          "unitTitle": "Advanced RL",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "40-2",
          "title": "TRPO",
          "unitTitle": "Advanced RL",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "40-3",
          "title": "Soft actor-critic",
          "unitTitle": "Advanced RL",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "41",
      "unitName": "RLHF",
      "lessons": [
        {
          "id": "41-1",
          "title": "Reward models",
          "unitTitle": "RLHF",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "41-2",
          "title": "Preference learning",
          "unitTitle": "RLHF",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "41-3",
          "title": "Human feedback training",
          "unitTitle": "RLHF",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "41-4",
          "title": "10. AI Systems Engineering",
          "unitTitle": "RLHF",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "42",
      "unitName": "Model Training",
      "lessons": [
        {
          "id": "42-1",
          "title": "Distributed training",
          "unitTitle": "Model Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "42-2",
          "title": "Mixed precision training",
          "unitTitle": "Model Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "42-3",
          "title": "Gradient checkpointing",
          "unitTitle": "Model Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "43",
      "unitName": "MLOps",
      "lessons": [
        {
          "id": "43-1",
          "title": "Model versioning",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "43-2",
          "title": "Experiment tracking",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "43-3",
          "title": "Deployment pipelines",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "43-4",
          "title": "Tools",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "43-5",
          "title": "TensorFlow",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "43-6",
          "title": "PyTorch",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "43-7",
          "title": "Kubeflow",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "43-8",
          "title": "11. Frontier AI Topics",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "44",
      "unitName": "Multimodal AI",
      "lessons": [
        {
          "id": "44-1",
          "title": "Vision-language models",
          "unitTitle": "Multimodal AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "44-2",
          "title": "Audio-language models",
          "unitTitle": "Multimodal AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "44-3",
          "title": "Image generation",
          "unitTitle": "Multimodal AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "45",
      "unitName": "Alignment and Safety",
      "lessons": [
        {
          "id": "45-1",
          "title": "Interpretability",
          "unitTitle": "Alignment and Safety",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "45-2",
          "title": "Mechanistic interpretability",
          "unitTitle": "Alignment and Safety",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "45-3",
          "title": "AI alignment",
          "unitTitle": "Alignment and Safety",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "45-4",
          "title": "Constitutional AI",
          "unitTitle": "Alignment and Safety",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "46",
      "unitName": "Scaling Laws",
      "lessons": [
        {
          "id": "46-1",
          "title": "Parameter scaling",
          "unitTitle": "Scaling Laws",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "46-2",
          "title": "Data scaling",
          "unitTitle": "Scaling Laws",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "46-3",
          "title": "Compute scaling",
          "unitTitle": "Scaling Laws",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "46-4",
          "title": "12. Research Skills",
          "unitTitle": "Scaling Laws",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "47",
      "unitName": "Reading Papers",
      "lessons": [
        {
          "id": "47-1",
          "title": "Understanding methodology",
          "unitTitle": "Reading Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "47-2",
          "title": "Reproducing experiments",
          "unitTitle": "Reading Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "48",
      "unitName": "Writing Papers",
      "lessons": [
        {
          "id": "48-1",
          "title": "Experimental design",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "48-2",
          "title": "Statistical validation",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "48-3",
          "title": "Key Conference Venues",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "48-4",
          "title": "NeurIPS",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "48-5",
          "title": "ICML",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "48-6",
          "title": "ICLR",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "48-7",
          "title": "CVPR",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "48-8",
          "title": "13. Optimization Theory (Deeper)",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "49",
      "unitName": "Convex Sets",
      "lessons": [
        {
          "id": "49-1",
          "title": "Convex combinations",
          "unitTitle": "Convex Sets",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "49-2",
          "title": "Affine sets",
          "unitTitle": "Convex Sets",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "49-3",
          "title": "Convex hull",
          "unitTitle": "Convex Sets",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "50",
      "unitName": "Convex Functions",
      "lessons": [
        {
          "id": "50-1",
          "title": "Jensen's inequality",
          "unitTitle": "Convex Functions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "50-2",
          "title": "Convex conjugates",
          "unitTitle": "Convex Functions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "50-3",
          "title": "Fenchel duality",
          "unitTitle": "Convex Functions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "51",
      "unitName": "Optimization Problems",
      "lessons": [
        {
          "id": "51-1",
          "title": "Linear programming",
          "unitTitle": "Optimization Problems",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "51-2",
          "title": "Quadratic programming",
          "unitTitle": "Optimization Problems",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "51-3",
          "title": "Semidefinite programming",
          "unitTitle": "Optimization Problems",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "52",
      "unitName": "Duality Theory",
      "lessons": [
        {
          "id": "52-1",
          "title": "Lagrangian duality",
          "unitTitle": "Duality Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "52-2",
          "title": "Strong vs weak duality",
          "unitTitle": "Duality Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "52-3",
          "title": "Karush\u2013Kuhn\u2013Tucker conditions",
          "unitTitle": "Duality Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "53",
      "unitName": "Non-Convex Optimization",
      "lessons": [
        {
          "id": "53-1",
          "title": "Saddle points",
          "unitTitle": "Non-Convex Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "53-2",
          "title": "Local minima vs global minima",
          "unitTitle": "Non-Convex Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "53-3",
          "title": "Loss landscapes",
          "unitTitle": "Non-Convex Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "53-4",
          "title": "Gradient flow",
          "unitTitle": "Non-Convex Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "53-5",
          "title": "Implicit bias of gradient descent",
          "unitTitle": "Non-Convex Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "54",
      "unitName": "Advanced Optimizers",
      "lessons": [
        {
          "id": "54-1",
          "title": "Nesterov momentum",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "54-2",
          "title": "Adagrad",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "54-3",
          "title": "Adadelta",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "54-4",
          "title": "AdamW",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "54-5",
          "title": "LAMB optimizer",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "54-6",
          "title": "Lion optimizer",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "54-7",
          "title": "14. Numerical Methods",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "55",
      "unitName": "Numerical Linear Algebra",
      "lessons": [
        {
          "id": "55-1",
          "title": "Iterative solvers",
          "unitTitle": "Numerical Linear Algebra",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "55-2",
          "title": "Conjugate gradient",
          "unitTitle": "Numerical Linear Algebra",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "55-3",
          "title": "Lanczos algorithm",
          "unitTitle": "Numerical Linear Algebra",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "56",
      "unitName": "Automatic Differentiation",
      "lessons": [
        {
          "id": "56-1",
          "title": "Reverse mode AD",
          "unitTitle": "Automatic Differentiation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "56-2",
          "title": "Forward mode AD",
          "unitTitle": "Automatic Differentiation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "56-3",
          "title": "Computational graphs",
          "unitTitle": "Automatic Differentiation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "57",
      "unitName": "Numerical Stability",
      "lessons": [
        {
          "id": "57-1",
          "title": "Floating-point precision",
          "unitTitle": "Numerical Stability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "57-2",
          "title": "Overflow/underflow",
          "unitTitle": "Numerical Stability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "57-3",
          "title": "Gradient clipping",
          "unitTitle": "Numerical Stability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "57-4",
          "title": "15. Learning Theory",
          "unitTitle": "Numerical Stability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "58",
      "unitName": "PAC Learning",
      "lessons": [
        {
          "id": "58-1",
          "title": "Probably Approximately Correct framework",
          "unitTitle": "PAC Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "58-2",
          "title": "Sample complexity",
          "unitTitle": "PAC Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "58-3",
          "title": "VC dimension",
          "unitTitle": "PAC Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "59",
      "unitName": "Bias-Variance Tradeoff",
      "lessons": [
        {
          "id": "59-1",
          "title": "Underfitting vs overfitting",
          "unitTitle": "Bias-Variance Tradeoff",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "59-2",
          "title": "Model capacity",
          "unitTitle": "Bias-Variance Tradeoff",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "60",
      "unitName": "Generalization Theory",
      "lessons": [
        {
          "id": "60-1",
          "title": "Rademacher complexity",
          "unitTitle": "Generalization Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "60-2",
          "title": "Uniform convergence",
          "unitTitle": "Generalization Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "61",
      "unitName": "Information-Theoretic Learning",
      "lessons": [
        {
          "id": "61-1",
          "title": "Minimum description length",
          "unitTitle": "Information-Theoretic Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "61-2",
          "title": "Information bottleneck principle",
          "unitTitle": "Information-Theoretic Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "61-3",
          "title": "16. Graph Machine Learning",
          "unitTitle": "Information-Theoretic Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "62",
      "unitName": "Graph Theory",
      "lessons": [
        {
          "id": "62-1",
          "title": "Directed vs undirected graphs",
          "unitTitle": "Graph Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "62-2",
          "title": "Adjacency matrices",
          "unitTitle": "Graph Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "62-3",
          "title": "Laplacian matrices",
          "unitTitle": "Graph Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "63",
      "unitName": "Graph Algorithms",
      "lessons": [
        {
          "id": "63-1",
          "title": "PageRank",
          "unitTitle": "Graph Algorithms",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "63-2",
          "title": "Shortest path algorithms",
          "unitTitle": "Graph Algorithms",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "63-3",
          "title": "Community detection",
          "unitTitle": "Graph Algorithms",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "64",
      "unitName": "Graph Neural Networks",
      "lessons": [
        {
          "id": "64-1",
          "title": "Graph convolution networks",
          "unitTitle": "Graph Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "64-2",
          "title": "Graph attention networks",
          "unitTitle": "Graph Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "64-3",
          "title": "Message passing neural networks",
          "unitTitle": "Graph Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "64-4",
          "title": "17. Computer Vision (Full Subfield)",
          "unitTitle": "Graph Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "65",
      "unitName": "Image Processing",
      "lessons": [
        {
          "id": "65-1",
          "title": "Edge detection",
          "unitTitle": "Image Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "65-2",
          "title": "Image filtering",
          "unitTitle": "Image Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "65-3",
          "title": "Fourier transforms",
          "unitTitle": "Image Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "66",
      "unitName": "Object Detection",
      "lessons": [
        {
          "id": "66-1",
          "title": "Region proposal networks",
          "unitTitle": "Object Detection",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "66-2",
          "title": "Bounding box regression",
          "unitTitle": "Object Detection",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "66-3",
          "title": "Architectures",
          "unitTitle": "Object Detection",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "66-4",
          "title": "YOLO",
          "unitTitle": "Object Detection",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "66-5",
          "title": "Faster R-CNN",
          "unitTitle": "Object Detection",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "67",
      "unitName": "Image Segmentation",
      "lessons": [
        {
          "id": "67-1",
          "title": "Semantic segmentation",
          "unitTitle": "Image Segmentation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "67-2",
          "title": "Instance segmentation",
          "unitTitle": "Image Segmentation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "67-3",
          "title": "Models:",
          "unitTitle": "Image Segmentation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "67-4",
          "title": "U-Net",
          "unitTitle": "Image Segmentation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "67-5",
          "title": "Mask R-CNN",
          "unitTitle": "Image Segmentation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "68",
      "unitName": "Vision Transformers",
      "lessons": [
        {
          "id": "68-1",
          "title": "Patch embeddings",
          "unitTitle": "Vision Transformers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "68-2",
          "title": "Attention over patches",
          "unitTitle": "Vision Transformers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "68-3",
          "title": "Example:",
          "unitTitle": "Vision Transformers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "68-4",
          "title": "Vision Transformer",
          "unitTitle": "Vision Transformers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "68-5",
          "title": "18. Speech and Audio AI",
          "unitTitle": "Vision Transformers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "69",
      "unitName": "Speech Processing",
      "lessons": [
        {
          "id": "69-1",
          "title": "Spectrograms",
          "unitTitle": "Speech Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "69-2",
          "title": "Mel-frequency cepstral coefficients",
          "unitTitle": "Speech Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "70",
      "unitName": "Speech Recognition",
      "lessons": [
        {
          "id": "70-1",
          "title": "Acoustic models",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "70-2",
          "title": "Language models",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "70-3",
          "title": "Example models:",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "70-4",
          "title": "DeepSpeech",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "70-5",
          "title": "Whisper",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "70-6",
          "title": "19. Time Series & Sequential Modeling",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "71",
      "unitName": "Classical Time Series",
      "lessons": [
        {
          "id": "71-1",
          "title": "Autoregressive models (AR)",
          "unitTitle": "Classical Time Series",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "71-2",
          "title": "Moving average models (MA)",
          "unitTitle": "Classical Time Series",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "71-3",
          "title": "ARIMA",
          "unitTitle": "Classical Time Series",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "72",
      "unitName": "Deep Learning for Time Series",
      "lessons": [
        {
          "id": "72-1",
          "title": "Temporal convolution networks",
          "unitTitle": "Deep Learning for Time Series",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "72-2",
          "title": "Transformers for time series",
          "unitTitle": "Deep Learning for Time Series",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "72-3",
          "title": "20. Multimodal AI",
          "unitTitle": "Deep Learning for Time Series",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "73",
      "unitName": "Vision-Language Models",
      "lessons": [
        {
          "id": "73-1",
          "title": "Cross-modal embeddings",
          "unitTitle": "Vision-Language Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "73-2",
          "title": "Contrastive learning",
          "unitTitle": "Vision-Language Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "73-3",
          "title": "Example models:",
          "unitTitle": "Vision-Language Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "73-4",
          "title": "CLIP",
          "unitTitle": "Vision-Language Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "73-5",
          "title": "DALL\u00b7E",
          "unitTitle": "Vision-Language Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "74",
      "unitName": "Video Models",
      "lessons": [
        {
          "id": "74-1",
          "title": "Spatiotemporal CNNs",
          "unitTitle": "Video Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "74-2",
          "title": "Video transformers",
          "unitTitle": "Video Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "74-3",
          "title": "21. Self-Supervised Learning",
          "unitTitle": "Video Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "75",
      "unitName": "Contrastive Learning",
      "lessons": [
        {
          "id": "75-1",
          "title": "InfoNCE loss",
          "unitTitle": "Contrastive Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "75-2",
          "title": "Positive/negative pairs",
          "unitTitle": "Contrastive Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "75-3",
          "title": "Methods:",
          "unitTitle": "Contrastive Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "75-4",
          "title": "SimCLR",
          "unitTitle": "Contrastive Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "75-5",
          "title": "MoCo",
          "unitTitle": "Contrastive Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "76",
      "unitName": "Masked Modeling",
      "lessons": [
        {
          "id": "76-1",
          "title": "Masked language modeling",
          "unitTitle": "Masked Modeling",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "76-2",
          "title": "Masked image modeling",
          "unitTitle": "Masked Modeling",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "76-3",
          "title": "Example:",
          "unitTitle": "Masked Modeling",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "76-4",
          "title": "BERT",
          "unitTitle": "Masked Modeling",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "76-5",
          "title": "22. Causal Machine Learning",
          "unitTitle": "Masked Modeling",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "77",
      "unitName": "Causal Inference",
      "lessons": [
        {
          "id": "77-1",
          "title": "Confounders",
          "unitTitle": "Causal Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "77-2",
          "title": "Interventions",
          "unitTitle": "Causal Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "77-3",
          "title": "Counterfactuals",
          "unitTitle": "Causal Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "78",
      "unitName": "Graphical Models",
      "lessons": [
        {
          "id": "78-1",
          "title": "Bayesian networks",
          "unitTitle": "Graphical Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "78-2",
          "title": "Markov random fields",
          "unitTitle": "Graphical Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "78-3",
          "title": "23. AI Security",
          "unitTitle": "Graphical Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "79",
      "unitName": "Adversarial Attacks",
      "lessons": [
        {
          "id": "79-1",
          "title": "Adversarial examples",
          "unitTitle": "Adversarial Attacks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "79-2",
          "title": "Gradient-based attacks",
          "unitTitle": "Adversarial Attacks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "80",
      "unitName": "Model Security",
      "lessons": [
        {
          "id": "80-1",
          "title": "Data poisoning",
          "unitTitle": "Model Security",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "80-2",
          "title": "Backdoor attacks",
          "unitTitle": "Model Security",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "80-3",
          "title": "24. AI Alignment and Interpretability",
          "unitTitle": "Model Security",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "81",
      "unitName": "Explainable AI",
      "lessons": [
        {
          "id": "81-1",
          "title": "Feature attribution",
          "unitTitle": "Explainable AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "81-2",
          "title": "SHAP values",
          "unitTitle": "Explainable AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "81-3",
          "title": "LIME",
          "unitTitle": "Explainable AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "82",
      "unitName": "Mechanistic Interpretability",
      "lessons": [
        {
          "id": "82-1",
          "title": "Circuit analysis in transformers",
          "unitTitle": "Mechanistic Interpretability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "82-2",
          "title": "Attention head roles",
          "unitTitle": "Mechanistic Interpretability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "82-3",
          "title": "25. Hardware and Compute for AI",
          "unitTitle": "Mechanistic Interpretability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "83",
      "unitName": "AI Accelerators",
      "lessons": [
        {
          "id": "83-1",
          "title": "GPUs",
          "unitTitle": "AI Accelerators",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "83-2",
          "title": "TPUs",
          "unitTitle": "AI Accelerators",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "83-3",
          "title": "Example hardware:",
          "unitTitle": "AI Accelerators",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "83-4",
          "title": "NVIDIA A100",
          "unitTitle": "AI Accelerators",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "84",
      "unitName": "Distributed Training",
      "lessons": [
        {
          "id": "84-1",
          "title": "Data parallelism",
          "unitTitle": "Distributed Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "84-2",
          "title": "Model parallelism",
          "unitTitle": "Distributed Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "84-3",
          "title": "Pipeline parallelism",
          "unitTitle": "Distributed Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "84-4",
          "title": "26. AI Product Engineering",
          "unitTitle": "Distributed Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "85",
      "unitName": "Deployment",
      "lessons": [
        {
          "id": "85-1",
          "title": "Model serving",
          "unitTitle": "Deployment",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "85-2",
          "title": "REST APIs",
          "unitTitle": "Deployment",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "86",
      "unitName": "Monitoring",
      "lessons": [
        {
          "id": "86-1",
          "title": "Model drift detection",
          "unitTitle": "Monitoring",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "86-2",
          "title": "Data drift detection",
          "unitTitle": "Monitoring",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "86-3",
          "title": "27. Ethics, Policy, and Society",
          "unitTitle": "Monitoring",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "87",
      "unitName": "AI Ethics",
      "lessons": [
        {
          "id": "87-1",
          "title": "Bias and fairness",
          "unitTitle": "AI Ethics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "87-2",
          "title": "Responsible AI",
          "unitTitle": "AI Ethics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "88",
      "unitName": "Regulation",
      "lessons": [
        {
          "id": "88-1",
          "title": "AI governance",
          "unitTitle": "Regulation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "88-2",
          "title": "Safety standards",
          "unitTitle": "Regulation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "88-3",
          "title": "28. Specialized Domains",
          "unitTitle": "Regulation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "89",
      "unitName": "Robotics",
      "lessons": [
        {
          "id": "89-1",
          "title": "Motion planning",
          "unitTitle": "Robotics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "89-2",
          "title": "Sim-to-real transfer",
          "unitTitle": "Robotics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "90",
      "unitName": "Scientific AI",
      "lessons": [
        {
          "id": "90-1",
          "title": "Protein folding",
          "unitTitle": "Scientific AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "90-2",
          "title": "Example:",
          "unitTitle": "Scientific AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "90-3",
          "title": "AlphaFold",
          "unitTitle": "Scientific AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "90-4",
          "title": "29. Frontier Research Areas (2024\u20132030)",
          "unitTitle": "Scientific AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "91",
      "unitName": "Scaling Laws",
      "lessons": [
        {
          "id": "91-1",
          "title": "Compute optimal scaling",
          "unitTitle": "Scaling Laws",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "91-2",
          "title": "Data scaling laws",
          "unitTitle": "Scaling Laws",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "92",
      "unitName": "Long Context Models",
      "lessons": [
        {
          "id": "92-1",
          "title": "Memory mechanisms",
          "unitTitle": "Long Context Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "92-2",
          "title": "Attention scaling",
          "unitTitle": "Long Context Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    },
    {
      "unitId": "93",
      "unitName": "Autonomous AI Agents",
      "lessons": [
        {
          "id": "93-1",
          "title": "Tool use",
          "unitTitle": "Autonomous AI Agents",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": "93-2",
          "title": "Planning systems",
          "unitTitle": "Autonomous AI Agents",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        }
      ]
    }
  ]
};
