// AI - All Topics
// Generated from lessons.json

window.aiAllTopics = {
  "courseName": "AI",
  "units": [
    {
      "unitId": "1",
      "unitName": "Probability Foundations",
      "lessons": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 1,
          "title": "Discrete variables",
          "unitTitle": "Random Variables",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Discrete Random Variables\n\n## What is a Discrete Random Variable?\n\nA **discrete random variable** is a variable that can only take on a countable set of distinct values. \"Countable\" means you can list all possible values, even if the list is infinite.\n\n### Examples of Discrete Random Variables\n\n**1. Coin Flips**\n- Number of heads in 3 coin flips: {0, 1, 2, 3}\n- Each value is a distinct integer\n\n**2. Dice Rolls**\n- Value when rolling a die: {1, 2, 3, 4, 5, 6}\n- Only 6 possible outcomes\n\n**3. Daily Sales**\n- Number of items sold in a day: {0, 1, 2, 3, ...}\n- Can be any non-negative integer (countably infinite)\n\n**4. Email Count**\n- Number of emails received per hour: {0, 1, 2, ...}\n- Discrete counts\n\n### Key Characteristics\n\n\u2713 **Countable outcomes** - Can be listed (1, 2, 3...)\n\u2713 **Gaps between values** - You can't have 2.5 emails\n\u2713 **Integer or categorical** - Often whole numbers or categories\n\u2713 **Finite or infinite** - Can have finite set (die) or infinite (sales)\n\n### Not Discrete (Continuous Contrast)\n\nThese are **NOT** discrete:\n- Height (can be 170.5 cm, 170.53 cm, ...)\n- Weight (continuous values)\n- Temperature (any real number)\n- Time (any real number)\n\n## Probability Mass Function (PMF)\n\nFor discrete random variables, we use the **Probability Mass Function**:\n\n$$p(x) = P(X = x)$$\n\nThis gives the probability that X takes exactly the value x.\n\n### Properties of PMF\n\n1. **Non-negative**: $p(x) \\geq 0$ for all x\n2. **Sum to 1**: $\\sum_x p(x) = 1$\n\n### Example: Number of Heads in 3 Coin Flips\n\nLooking at `diagrams/discrete-vs-continuous-examples.png`, we see:\n\n| X (heads) | P(X=x) | Calculation |\n|-----------|--------|------------|\n| 0 | 1/8 = 0.125 | TTT (1 outcome) |\n| 1 | 3/8 = 0.375 | HTT, THT, TTH (3 outcomes) |\n| 2 | 3/8 = 0.375 | HHT, HTH, THH (3 outcomes) |\n| 3 | 1/8 = 0.125 | HHH (1 outcome) |\n\n**Check:** $\\frac{1}{8} + \\frac{3}{8} + \\frac{3}{8} + \\frac{1}{8} = 1$ \u2713\n\n## Cumulative Distribution Function (CDF)\n\nThe CDF gives the probability that X is **less than or equal to** x:\n\n$$F(x) = P(X \\leq x)$$\n\nFor the coin flip example:\n\n| x | F(x) = P(X \u2264 x) |\n|---|------------------|\n| 0 | 1/8 = 0.125 |\n| 1 | 4/8 = 0.5 |\n| 2 | 7/8 = 0.875 |\n| 3 | 8/8 = 1.0 |\n\nThe CDF is shown in the right panel of `diagrams/discrete-vs-continuous-examples.png`.\n\n## Expected Value (Mean)\n\nFor discrete random variables:\n\n$$E[X] = \\sum_x x \\cdot p(x)$$\n\nThis is the weighted average of all possible values.\n\n**Example (coin flips):**\n\n$$E[X] = 0 \\cdot \\frac{1}{8} + 1 \\cdot \\frac{3}{8} + 2 \\cdot \\frac{3}{8} + 3 \\cdot \\frac{1}{8}$$\n$$= 0 + \\frac{3}{8} + \\frac{6}{8} + \\frac{3}{8}$$\n$$= \\frac{12}{8} = 1.5$$\n\nIntuitive: In 3 coin flips, you expect 1.5 heads on average.\n\n## Variance\n\n$$\\text{Var}(X) = E[(X - \\mu)^2] = E[X^2] - (E[X])^2$$\n\nFirst compute $E[X^2]$:\n\n$$E[X^2] = 0^2 \\cdot \\frac{1}{8} + 1^2 \\cdot \\frac{3}{8} + 2^2 \\cdot \\frac{3}{8} + 3^2 \\cdot \\frac{1}{8}$$\n$$= 0 + \\frac{3}{8} + \\frac{12}{8} + \\frac{9}{8}$$\n$$= \\frac{24}{8} = 3$$\n\nThen variance:\n\n$$\\text{Var}(X) = E[X^2] - (E[X])^2 = 3 - (1.5)^2 = 3 - 2.25 = 0.75$$\n\n## Applications in AI and ML\n\nDiscrete random variables appear frequently:\n\n1. **Classification**: Predicting class labels (0, 1, 2...)\n2. **Count Data**: Number of occurrences in text\n3. **Binary Decisions**: Yes/no outcomes\n4. **Categorical Data**: Categories as numbers\n\n## Common Discrete Distributions\n\n1. **Bernoulli**: Single trial, two outcomes (success/failure)\n2. **Binomial**: Number of successes in n trials\n3. **Poisson**: Count events in fixed interval\n4. **Geometric**: Trials until first success\n5. **Uniform**: All outcomes equally likely",
          "questions": [
            {
              "type": "typing",
              "question": "What is a discrete random variable?",
              "correctAnswer": [
                "variable that takes countable distinct values",
                "a variable with countable distinct values",
                "countable distinct values",
                "countable set of distinct values"
              ],
              "xp": 3,
              "explanation": "A discrete random variable can only take on a countable set of distinct values - meaning you can list all possible outcomes (like 0, 1, 2, 3...)"
            },
            {
              "type": "typing",
              "question": "In the context of discrete random variables, what does PMF stand for?",
              "correctAnswer": [
                "Probability Mass Function",
                "probability mass function"
              ],
              "xp": 3,
              "explanation": "PMF stands for Probability Mass Function, which gives the probability P(X = x) that a discrete random variable takes a specific value"
            },
            {
              "type": "typing",
              "question": "What is the formula for the PMF of a discrete random variable X?",
              "correctAnswer": [
                "p(x) = P(X = x)",
                "P(X = x)",
                "p(x)",
                "Probability Mass Function"
              ],
              "xp": 3,
              "explanation": "The PMF is defined as p(x) = P(X = x), giving the probability that X equals exactly x"
            },
            {
              "type": "multiple-choice",
              "question": "Which of these is a discrete random variable?",
              "options": [
                "Height of a person in centimeters",
                "Time to complete a task in seconds",
                "Number of heads in 3 coin flips",
                "Temperature in degrees Celsius"
              ],
              "correct": 2,
              "xp": 2,
              "explanation": "Number of heads in 3 coin flips is discrete because it can only take values {0, 1, 2, 3} - a countable set with gaps between values"
            },
            {
              "type": "typing",
              "question": "Looking at the PMF in `diagrams/discrete-variable-types.png`, what is P(X=1) for the number of heads in 3 coin flips?",
              "correctAnswer": [
                "0.375",
                "3/8",
                ".375"
              ],
              "xp": 4,
              "explanation": "In the PMF diagram, the bar at X=1 has height 0.375 (or 3/8). This represents the probability of getting exactly 1 head in 3 coin flips"
            },
            {
              "type": "typing",
              "question": "If a fair die is rolled, what is P(X = 3)?",
              "correctAnswer": [
                "1/6",
                "0.167",
                ".167",
                "1/6th",
                "one sixth"
              ],
              "xp": 4,
              "explanation": "For a fair die, each face has equal probability of 1/6, so P(X=3) = 1/6"
            },
            {
              "type": "typing",
              "question": "What is P(X \u2264 2) if X can be {0, 1, 2, 3} with PMF p(0)=0.2, p(1)=0.3, p(2)=0.4, p(3)=0.1?",
              "correctAnswer": [
                "0.9",
                "0.90",
                ".9"
              ],
              "xp": 4,
              "explanation": "P(X \u2264 2) = p(0) + p(1) + p(2) = 0.2 + 0.3 + 0.4 = 0.9"
            },
            {
              "type": "typing",
              "question": "What must the sum of all PMF values equal?",
              "correctAnswer": [
                "1",
                "one",
                "1.0",
                "100%",
                "100 percent"
              ],
              "xp": 4,
              "explanation": "The sum of all PMF values must equal 1 because the probabilities of all possible outcomes must sum to 1"
            },
            {
              "type": "multiple-choice",
              "question": "Which distribution models the number of successes in n independent trials?",
              "options": [
                "Poisson distribution",
                "Binomial distribution",
                "Geometric distribution",
                "Uniform distribution"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "The Binomial distribution models the number of successes in n independent Bernoulli trials"
            },
            {
              "type": "multiple-choice",
              "question": "Which statement about discrete random variables is FALSE?",
              "options": [
                "They take values from a countable set",
                "They can have gaps between possible values",
                "P(X=a) > 0 for any value a in their sample space",
                "They can be represented by a PMF"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "This statement is false because P(X=a) > 0 ONLY for values in the sample space S. For discrete variables outside their sample space, P(X=a) = 0"
            },
            {
              "type": "multiple-choice",
              "question": "When flipping a fair coin 3 times, what is the probability of getting exactly 2 heads?",
              "options": [
                "1/8",
                "2/8",
                "3/8",
                "4/8"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "The outcomes with exactly 2 heads are HHT, HTH, THH - that's 3 outcomes out of 8 total, so P(X=2) = 3/8"
            },
            {
              "type": "multiple-choice",
              "question": "What is E[X] (expected value) if X has PMF: p(0)=0.5, p(1)=0.3, p(2)=0.2?",
              "options": [
                "0.7",
                "1.0",
                "1.5",
                "2.0"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "E[X] = 0(0.5) + 1(0.3) + 2(0.2) = 0 + 0.3 + 0.4 = 0.7"
            },
            {
              "type": "multiple-choice",
              "question": "Which scenario uses a discrete random variable?",
              "options": [
                "Measuring rainfall in inches",
                "Recording temperature in degrees",
                "Counting website visitors per hour",
                "Measuring time to download a file"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Counting website visitors per hour is discrete because it results in integer counts (0, 1, 2, 3...) with gaps between values"
            },
            {
              "type": "typing",
              "question": "What is the relationship between PMF and CDF for discrete variables?",
              "correctAnswer": [
                "CDF is the cumulative sum of PMF",
                "cumulative sum",
                "sum of PMF",
                "CDF = sum of PMF"
              ],
              "xp": 5,
              "explanation": "For discrete random variables, the CDF F(x) = P(X \u2264 x) is the cumulative sum of the PMF values: F(x) = \u03a3 p(k) for all k \u2264 x"
            },
            {
              "type": "typing",
              "question": "If E[X] = 2 and E[X\u00b2] = 5, what is Var(X)?",
              "correctAnswer": [
                "1",
                "one",
                "1.0"
              ],
              "xp": 4,
              "explanation": "Var(X) = E[X\u00b2] - (E[X])\u00b2 = 5 - (2)\u00b2 = 5 - 4 = 1"
            },
            {
              "type": "typing",
              "question": "Looking at `diagrams/discrete-variable-types.png`, what type of graph represents the CDF for discrete variables?",
              "correctAnswer": [
                "step function",
                "step function",
                "steps",
                "step graph"
              ],
              "xp": 5,
              "explanation": "The CDF for discrete random variables is a step function - it jumps at each possible value and stays flat between values"
            },
            {
              "type": "typing",
              "question": "What is the first step in finding the expected value of a discrete random variable?",
              "correctAnswer": [
                "list all possible values and their probabilities",
                "list all possible values",
                "list probabilities",
                "create PMF table"
              ],
              "xp": 5,
              "explanation": "To find E[X], first list all possible values of X and their corresponding probabilities from the PMF, then calculate the weighted sum"
            },
            {
              "type": "multiple-choice",
              "question": "A discrete random variable X has values {1, 2, 3, 4} with equal probabilities. What is the probability that X > 2?",
              "options": [
                "0.25",
                "0.5",
                "0.75",
                "1.0"
              ],
              "correct": 1,
              "xp": 4,
              "explanation": "Each value has probability 1/4. P(X > 2) = P(X=3) + P(X=4) = 1/4 + 1/4 = 0.5"
            }
          ]
        },
        {
          "id": 2,
          "title": "Continuous variables",
          "unitTitle": "Random Variables",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Continuous Random Variables\n\n## What is a Continuous Random Variable?\n\nA **continuous random variable** can take any value within a range (interval). Between any two values, there are infinitely many other possible values.\n\n### Examples of Continuous Random Variables\n\n**1. Height**\n- Human height: Can be 170.5 cm, 170.53 cm, 170.537 cm...\n- Any real number in a reasonable range\n\n**2. Time**\n- Time to complete a task: 5.2 seconds, 5.23 seconds, 5.231 seconds...\n- Infinitely precise measurement\n\n**3. Temperature**\n- Room temperature: 22.5\u00b0C, 22.53\u00b0C, 22.537\u00b0C...\n- Continuous scale\n\n**4. Weight**\n- Object weight: Any real number > 0\n\n**5. Voltage**\n- Electrical signal: Any real value within range\n\n### Key Characteristics\n\n\u2713 **Uncountable outcomes** - Cannot list all values\n\u2713 **No gaps** - Between any two values, infinitely many more\n\u2713 **Real numbers** - Takes values from intervals\n\u2713 **Precision depends on measurement** - Theoretically infinite precision\n\n### Not Continuous (Discrete Contrast)\n\nThese are **NOT** continuous:\n- Number of children (can't have 2.5 children)\n- Die roll results (only 1, 2, 3, 4, 5, 6)\n- Number of website visitors (integer counts)\n\n## Probability Density Function (PDF)\n\nFor continuous random variables, we use the **Probability Density Function**:\n\n$$f(x) = \\frac{d}{dx}F(x)$$\n\n**CRITICAL DIFFERENCE:** For continuous variables:\n\n$$P(X = a) = 0$$\n\nThe probability of any exact value is **zero** because a point has zero width.\n\n### Properties of PDF\n\n1. **Non-negative**: $f(x) \\geq 0$ for all x\n2. **Integrates to 1**: $\\int_{-\\infty}^{\\infty} f(x) dx = 1$\n\n### Probability of Intervals\n\nFor continuous variables, we calculate probabilities over **intervals**:\n\n$$P(a \\leq X \\leq b) = \\int_a^b f(x) dx$$\n\nThis is the **area under the curve** between a and b.\n\n**Visual interpretation:**\n\nLooking at `diagrams/continuous-uncountable.png`, the left panel shows the PDF (the bell curve). The area under the curve between any two x-values equals the probability of X falling in that interval.\n\n### Example: Normal Distribution\n\nLooking at `diagrams/continuous-uncountable.png`:\n\n$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$\n\nFor standard normal ($\\mu = 0, \\sigma = 1$):\n\n$$f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}}$$\n\n**Probability that X is between -1 and 1:**\n\n$$P(-1 \\leq X \\leq 1) = \\int_{-1}^{1} f(x) dx \\approx 0.68$$\n\nAbout 68% of values fall within 1 standard deviation!\n\n## Cumulative Distribution Function (CDF)\n\n$$F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f(t) dt$$\n\nThe CDF is the area under the PDF from negative infinity to x.\n\n**Relationship:**\n$$f(x) = F'(x)$$\n\n**Properties:**\n- $F(x)$ is non-decreasing\n- $\\lim_{x \\to -\\infty} F(x) = 0$\n- $\\lim_{x \\to \\infty} F(x) = 1$\n\nThe right panel of `diagrams/continuous-uncountable.png` shows the CDF as an S-shaped curve.\n\n## Expected Value (Mean)\n\nFor continuous random variables:\n\n$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x) dx$$\n\n**Example: Uniform distribution on [0, 1]**\n\n$$f(x) = 1 \\text{ for } 0 \\leq x \\leq 1$$\n\n$$E[X] = \\int_0^1 x \\cdot 1 dx = \\left[\\frac{x^2}{2}\\right]_0^1 = \\frac{1}{2}$$\n\nIntuitive: The average of all numbers between 0 and 1 is 0.5.\n\n## Variance\n\n$$\\text{Var}(X) = E[(X - \\mu)^2] = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 f(x) dx$$\n\n**Also:** $\\text{Var}(X) = E[X^2] - (E[X])^2$\n\n## Key Difference: PMF vs PDF\n\nLooking at `diagrams/rv-pmf-vs-pdf.png`:\n\n### PMF (Discrete)\n- Uses **bars** (histogram-like)\n- P(X = x) directly readable (height of bar)\n- Sum of all bars = 1\n- Non-zero at specific points\n\n### PDF (Continuous)\n- Uses **smooth curve**\n- Area under curve = 1\n- P(X = x) = 0 for any specific x\n- f(x) can be > 1 (density, not probability!)\n\n**Important:** PDF values can exceed 1 because they're **densities**, not probabilities. Only the area under the curve has probabilistic meaning.\n\n## Applications in AI and ML\n\nContinuous random variables are everywhere:\n\n1. **Neural Network Outputs**: Continuous predictions (prices, temperatures)\n2. **Loss Values**: Always continuous (MSE, cross-entropy)\n3. **Gradients**: Continuous values during backpropagation\n4. **Parameters**: Weights and biases are continuous\n5. **Regression**: Predicting continuous targets\n\n## Common Continuous Distributions\n\n1. **Normal (Gaussian)**: Bell curve, ubiquitous in nature\n2. **Uniform**: All values equally likely\n3. **Exponential**: Time between events\n4. **Beta**: Probabilities and proportions\n5. **Gamma**: Waiting times, sum of exponentials\n6. **Chi-square**: Test statistics",
          "questions": [
            {
              "type": "typing",
              "question": "What is a continuous random variable?",
              "correctAnswer": [
                "variable that can take any value in a range",
                "takes any value within an interval",
                "can take any value in an interval",
                "uncountable values in a range"
              ],
              "xp": 3,
              "explanation": "A continuous random variable can take any value within a range - between any two values, there are infinitely many possible values"
            },
            {
              "type": "typing",
              "question": "What does PDF stand for in the context of continuous random variables?",
              "correctAnswer": [
                "Probability Density Function",
                "probability density function"
              ],
              "xp": 3,
              "explanation": "PDF stands for Probability Density Function, which describes the density of probability at each point for continuous variables"
            },
            {
              "type": "typing",
              "question": "For a continuous random variable, what is P(X = a) for any specific value a?",
              "correctAnswer": [
                "0",
                "zero"
              ],
              "xp": 3,
              "explanation": "For continuous random variables, P(X = a) = 0 for any specific value because a single point has zero width. Probabilities are only meaningful over intervals."
            },
            {
              "type": "multiple-choice",
              "question": "Which of these is a continuous random variable?",
              "options": [
                "Number of children in a family",
                "Die roll result",
                "Time to complete a task",
                "Number of website visitors"
              ],
              "correct": 2,
              "xp": 2,
              "explanation": "Time to complete a task is continuous because it can take any value within a range (e.g., 5.2 seconds, 5.23 seconds, 5.231 seconds...)"
            },
            {
              "type": "typing",
              "question": "How do you calculate P(a \u2264 X \u2264 b) for a continuous random variable?",
              "correctAnswer": [
                "integrate the PDF from a to b",
                "integral of PDF",
                "area under PDF curve",
                "\u222bf(x)dx from a to b"
              ],
              "xp": 4,
              "explanation": "P(a \u2264 X \u2264 b) = \u222b from a to b of f(x) dx - this is the area under the PDF curve between a and b"
            },
            {
              "type": "typing",
              "question": "If f(x) = 2 for 0 \u2264 x \u2264 0.5 and f(x) = 0 otherwise, what is P(0.2 \u2264 X \u2264 0.4)?",
              "correctAnswer": [
                "0.4",
                ".4"
              ],
              "xp": 4,
              "explanation": "P(0.2 \u2264 X \u2264 0.4) = \u222b from 0.2 to 0.4 of 2 dx = 2 \u00d7 (0.4 - 0.2) = 2 \u00d7 0.2 = 0.4"
            },
            {
              "type": "typing",
              "question": "What must the integral of a PDF over its entire domain equal?",
              "correctAnswer": [
                "1",
                "one",
                "1.0",
                "100%"
              ],
              "xp": 4,
              "explanation": "The integral of the PDF over its entire domain must equal 1 because the total probability of all possible outcomes must be 1"
            },
            {
              "type": "typing",
              "question": "Looking at `diagrams/continuous-variable-types.png`, approximately what percentage of values fall within 1 standard deviation of the mean?",
              "correctAnswer": [
                "68%",
                "68 percent",
                "0.68",
                ".68"
              ],
              "xp": 4,
              "explanation": "For a normal distribution, about 68% of values fall within 1 standard deviation of the mean (between -1 and 1 for standard normal)"
            },
            {
              "type": "multiple-choice",
              "question": "Which distribution is bell-shaped and symmetric around its mean?",
              "options": [
                "Uniform distribution",
                "Exponential distribution",
                "Normal distribution",
                "Chi-square distribution"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "The Normal (Gaussian) distribution is bell-shaped and symmetric around its mean, as shown in the PDF diagram"
            },
            {
              "type": "multiple-choice",
              "question": "Which statement about PDF values is FALSE?",
              "options": [
                "PDF values can be greater than 1",
                "PDF values can be less than 1",
                "PDF values represent probabilities",
                "PDF must integrate to 1"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "This statement is false because PDF values are densities, not probabilities. A PDF value can be > 1, but P(X=a) = 0 always"
            },
            {
              "type": "multiple-choice",
              "question": "What is E[X] for a uniform distribution on [0, 2]?",
              "options": [
                "0.5",
                "1.0",
                "1.5",
                "2.0"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "For uniform distribution on [a, b], E[X] = (a + b)/2. For [0, 2]: E[X] = (0 + 2)/2 = 1.0"
            },
            {
              "type": "multiple-choice",
              "question": "Looking at `diagrams/rv-pmf-vs-pdf.png`, what is the visual difference between PMF and PDF?",
              "options": [
                "PMF uses bars, PDF uses smooth curve",
                "PMF uses smooth curve, PDF uses bars",
                "PMF and PDF look the same",
                "PMF shows cumulative probability, PDF shows point probability"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "The PMF uses bars (histogram-like) for discrete values, while the PDF uses a smooth continuous curve for continuous values"
            },
            {
              "type": "multiple-choice",
              "question": "Which scenario uses a continuous random variable?",
              "options": [
                "Number of students in a class",
                "Result of rolling a die",
                "Recording temperature in degrees",
                "Counting defective items"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Recording temperature in degrees is continuous because temperature can take any real value within a range with infinitely many possible values"
            },
            {
              "type": "typing",
              "question": "What is the relationship between PDF and CDF for continuous variables?",
              "correctAnswer": [
                "CDF is the integral of PDF",
                "integral of PDF",
                "CDF = \u222bPDF",
                "PDF is derivative of CDF"
              ],
              "xp": 5,
              "explanation": "For continuous variables, F(x) = \u222b from -\u221e to x of f(t) dt - the CDF is the integral (area under curve) of the PDF"
            },
            {
              "type": "typing",
              "question": "For a standard normal distribution, what is P(X \u2264 0)?",
              "correctAnswer": [
                "0.5",
                "0.50",
                ".5",
                "1/2",
                "one half"
              ],
              "xp": 4,
              "explanation": "For a symmetric distribution like standard normal, P(X \u2264 0) = P(X \u2265 0) = 0.5 because 0 is the median"
            },
            {
              "type": "typing",
              "question": "Why can PDF values exceed 1?",
              "correctAnswer": [
                "PDF is a density not a probability",
                "density not probability",
                "it's a density",
                "PDF represents density"
              ],
              "xp": 5,
              "explanation": "PDF values can exceed 1 because they represent probability density, not probability. Only the area under the curve must equal 1"
            },
            {
              "type": "typing",
              "question": "What is the first step in calculating E[X] for a continuous random variable?",
              "correctAnswer": [
                "integrate x times f(x) over all x",
                "integrate x*f(x)",
                "set up the integral",
                "find the PDF"
              ],
              "xp": 5,
              "explanation": "To find E[X] for a continuous variable, set up and evaluate the integral: E[X] = \u222b x\u00b7f(x) dx over the domain"
            },
            {
              "type": "multiple-choice",
              "question": "For a continuous random variable X with PDF f(x) = 1 on [0, 1], what is P(X > 0.5)?",
              "options": [
                "0.25",
                "0.5",
                "0.75",
                "1.0"
              ],
              "correct": 1,
              "xp": 4,
              "explanation": "P(X > 0.5) = \u222b from 0.5 to 1 of 1 dx = 1 - 0.5 = 0.5"
            }
          ]
        },
        {
          "id": 3,
          "title": "Probability mass function",
          "unitTitle": "Random Variables",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Probability Mass Function (PMF)\n\n## Definition\n\nThe **Probability Mass Function** of a discrete random variable X is a function that gives the probability that X equals a specific value:\n\n$$p(x) = P(X = x)$$\n\nThe PMF assigns probabilities to each possible value in the sample space.\n\n## Formal Definition\n\nFor a discrete random variable X with sample space S:\n\n$$p: S \\rightarrow [0, 1]$$\n\n$$p(x) = P(X = x)$$\n\n## Properties of PMF\n\n### Property 1: Non-negativity\n\n$$p(x) \\geq 0 \\text{ for all } x \\in S$$\n\nAll probabilities must be non-negative.\n\n### Property 2: Sum to One\n\n$$\\sum_{x \\in S} p(x) = 1$$\n\nThe sum of all probabilities must equal 1 (some outcome must occur).\n\n### Property 3: Domain\n\np(x) is only defined for values x in the sample space S.\n\n## Example: Rolling a Fair Die\n\n**Sample Space:** S = {1, 2, 3, 4, 5, 6}\n\n**PMF:**\n\n$$p(x) = \\frac{1}{6} \\text{ for } x \\in \\{1, 2, 3, 4, 5, 6\\}$$\n\n| x | p(x) |\n|---|------|\n| 1 | 1/6 |\n| 2 | 1/6 |\n| 3 | 1/6 |\n| 4 | 1/6 |\n| 5 | 1/6 |\n| 6 | 1/6 |\n\n**Verification:**\n\n$$\\sum_{x=1}^{6} p(x) = \\frac{1}{6} \\times 6 = 1$$ \u2713\n\n## Example: Biased Coin\n\n**Sample Space:** S = {Heads, Tails}\n\n**PMF (biased, P(H) = 0.7):**\n\n$$p(\\text{Heads}) = 0.7$$\n$$p(\\text{Tails}) = 0.3$$\n\n**Verification:**\n\n$$p(\\text{Heads}) + p(\\text{Tails}) = 0.7 + 0.3 = 1$$ \u2713\n\n## Example: Number of Heads in 2 Coin Flips\n\n**Sample Space:** S = {0, 1, 2}\n\n**Outcomes:**\n- 0 heads: TT (1 outcome)\n- 1 head: HT, TH (2 outcomes)\n- 2 heads: HH (1 outcome)\n\nTotal outcomes: 4\n\n**PMF:**\n\n| x (heads) | p(x) | Calculation |\n|-----------|------|-------------|\n| 0 | 1/4 = 0.25 | 1/4 |\n| 1 | 2/4 = 0.5 | 2/4 |\n| 2 | 1/4 = 0.25 | 1/4 |\n\n**Verification:**\n\n$$\\sum p(x) = 0.25 + 0.5 + 0.25 = 1$$ \u2713\n\n## PMF as a Table\n\nPMFs are often represented as tables:\n\n### Example: Number of Children\n\n| x (children) | p(x) |\n|--------------|------|\n| 0 | 0.20 |\n| 1 | 0.40 |\n| 2 | 0.30 |\n| 3 | 0.07 |\n| 4 | 0.03 |\n\n**Verification:**\n\n$$0.20 + 0.40 + 0.30 + 0.07 + 0.03 = 1.00$$ \u2713\n\n## PMF as a Graph\n\nThe PMF can be visualized as a bar chart (histogram).\n\nLooking at `diagrams/pmf-die-roll.png`, the left panel shows the PMF for the number of heads in 3 coin flips.\n\n**Key visual features:**\n- **Bars**: Each bar represents p(x) for a specific x\n- **Height**: Bar height equals probability\n- **Gaps**: No connection between bars (discrete)\n- **Non-negative**: All bars at or above x-axis\n\n## Calculating Probabilities from PMF\n\n### Single Value\n\n$$P(X = x) = p(x)$$\n\nFrom PMF table: P(X = 1) = p(1) = 0.5\n\n### Multiple Values\n\n$$P(X \\in A) = \\sum_{x \\in A} p(x)$$\n\n**Example:** What is P(X \u2264 1)?\n\n$$P(X \\leq 1) = P(X = 0) + P(X = 1) = p(0) + p(1)$$\n\nFrom PMF table: 0.25 + 0.5 = 0.75\n\n### Complement Rule\n\n$$P(X \\neq x) = 1 - p(x)$$\n\n**Example:** P(X \u2260 1) = 1 - p(1) = 1 - 0.5 = 0.5\n\n## Expected Value from PMF\n\n$$E[X] = \\sum_x x \\cdot p(x)$$\n\nThe expected value is the weighted average.\n\n**Example:**\n\n| x | p(x) | x\u00b7p(x) |\n|---|------|--------|\n| 0 | 0.25 | 0 |\n| 1 | 0.50 | 0.5 |\n| 2 | 0.25 | 0.5 |\n\n$$E[X] = 0 + 0.5 + 0.5 = 1.0$$\n\n## Variance from PMF\n\n$$\\text{Var}(X) = \\sum_x (x - \\mu)^2 \\cdot p(x)$$\n\nWhere $\\mu = E[X]$.\n\n## Common PMFs in AI\n\n### Bernoulli Distribution\n\n$$p(x) = p^x (1-p)^{1-x} \\text{ for } x \\in \\{0, 1\\}$$\n\nUsed for binary outcomes: success/failure, yes/no.\n\n### Binomial Distribution\n\n$$p(x) = \\binom{n}{x} p^x (1-p)^{n-x} \\text{ for } x \\in \\{0, 1, ..., n\\}$$\n\nUsed for: Number of successes in n independent trials.\n\n### Poisson Distribution\n\n$$p(x) = \\frac{e^{-\\lambda} \\lambda^x}{x!} \\text{ for } x \\in \\{0, 1, 2, ...\\}$$\n\nUsed for: Count events in fixed interval.\n\n## Key Takeaways\n\n1. **PMF only for discrete variables** - Not for continuous\n2. **p(x) = P(X = x)** - Direct probability\n3. **Must sum to 1** - Normalization\n4. **Visualized as bars** - Not smooth curves\n5. **Used to calculate expectations** - Weighted averages\n\n## Not to Confuse\n\n\u274c PMF (Probability Mass Function) - For **discrete** variables\n\u274c PDF (Probability Density Function) - For **continuous** variables\n\nLooking at `diagrams/rv-pmf-vs-pdf.png`, the key difference is clear:\n- PMF: Bars with direct probability reading\n- PDF: Smooth curve with area = probability",
          "questions": [
            {
              "type": "typing",
              "question": "What does PMF stand for?",
              "correctAnswer": [
                "Probability Mass Function",
                "probability mass function"
              ],
              "xp": 3,
              "explanation": "PMF stands for Probability Mass Function, which assigns probabilities to discrete values"
            },
            {
              "type": "typing",
              "question": "What is the definition of PMF?",
              "correctAnswer": [
                "p(x) = P(X = x)",
                "P(X = x)",
                "probability that X equals x"
              ],
              "xp": 3,
              "explanation": "The PMF is defined as p(x) = P(X = x), giving the probability that X takes exactly the value x"
            },
            {
              "type": "typing",
              "question": "What must the sum of all PMF values equal?",
              "correctAnswer": [
                "1",
                "one",
                "1.0"
              ],
              "xp": 3,
              "explanation": "The sum of all PMF values must equal 1 because the probabilities of all possible outcomes must sum to 1"
            },
            {
              "type": "multiple-choice",
              "question": "PMF is used for which type of random variable?",
              "options": [
                "Continuous random variables",
                "Discrete random variables",
                "Both discrete and continuous",
                "Neither"
              ],
              "correct": 1,
              "xp": 2,
              "explanation": "PMF (Probability Mass Function) is used only for discrete random variables"
            },
            {
              "type": "typing",
              "question": "For a fair die, what is p(3)?",
              "correctAnswer": [
                "1/6",
                "0.167",
                ".167",
                "one sixth"
              ],
              "xp": 4,
              "explanation": "For a fair die, each face has equal probability of 1/6, so p(3) = P(X=3) = 1/6"
            },
            {
              "type": "typing",
              "question": "If p(0)=0.2, p(1)=0.5, p(2)=0.3, what is P(X \u2264 1)?",
              "correctAnswer": [
                "0.7",
                "0.70",
                ".7"
              ],
              "xp": 4,
              "explanation": "P(X \u2264 1) = p(0) + p(1) = 0.2 + 0.5 = 0.7"
            },
            {
              "type": "typing",
              "question": "Looking at `diagrams/discrete-variable-types.png`, what shape represents the PMF?",
              "correctAnswer": [
                "bars",
                "bar chart",
                "histogram",
                "discrete bars"
              ],
              "xp": 4,
              "explanation": "The PMF is visualized as bars (a bar chart), with each bar's height representing p(x) for that value"
            },
            {
              "type": "typing",
              "question": "What is E[X] if p(0)=0.3, p(1)=0.5, p(2)=0.2?",
              "correctAnswer": [
                "0.9",
                ".9",
                "0.90"
              ],
              "xp": 4,
              "explanation": "E[X] = 0(0.3) + 1(0.5) + 2(0.2) = 0 + 0.5 + 0.4 = 0.9"
            },
            {
              "type": "multiple-choice",
              "question": "Which distribution models the number of successes in n independent trials?",
              "options": [
                "Bernoulli distribution",
                "Binomial distribution",
                "Poisson distribution",
                "Geometric distribution"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "The Binomial distribution models the number of successes in n independent Bernoulli trials"
            },
            {
              "type": "multiple-choice",
              "question": "Which statement about PMF is FALSE?",
              "options": [
                "PMF values must be non-negative",
                "PMF values can be greater than 1",
                "Sum of PMF values equals 1",
                "PMF is defined for discrete variables"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "This statement is false because PMF values are probabilities, which cannot exceed 1. They must be in [0, 1]"
            },
            {
              "type": "multiple-choice",
              "question": "What is P(X \u2260 1) if p(1) = 0.3?",
              "options": [
                "0.3",
                "0.5",
                "0.7",
                "1.0"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "P(X \u2260 1) = 1 - P(X = 1) = 1 - p(1) = 1 - 0.3 = 0.7"
            },
            {
              "type": "multiple-choice",
              "question": "For a Bernoulli trial with success probability p, what is p(1)?",
              "options": [
                "1-p",
                "p",
                "p(1-p)",
                "1"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "For a Bernoulli distribution, p(1) represents P(success) = p"
            },
            {
              "type": "multiple-choice",
              "question": "Looking at `diagrams/rv-pmf-vs-pdf.png`, how can you tell which graph is the PMF?",
              "options": [
                "It has a smooth curve",
                "It has bars with gaps",
                "It's always below 1",
                "It shows cumulative probability"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "The PMF is the graph with bars and gaps between them (discrete), unlike the PDF which has a smooth continuous curve"
            },
            {
              "type": "typing",
              "question": "How do you calculate E[X] from a PMF?",
              "correctAnswer": [
                "sum of x times p(x)",
                "\u03a3x\u00b7p(x)",
                "weighted sum",
                "multiply each value by its probability and sum"
              ],
              "xp": 5,
              "explanation": "E[X] = \u03a3 x \u00b7 p(x) - multiply each possible value by its probability and sum all products"
            },
            {
              "type": "typing",
              "question": "What is the Poisson PMF for x events with rate \u03bb?",
              "correctAnswer": [
                "e^(-\u03bb) * \u03bb^x / x!",
                "\u03bb^x e^(-\u03bb) / x!",
                "e to the negative lambda times lambda to the x over x factorial"
              ],
              "xp": 5,
              "explanation": "The Poisson PMF is p(x) = (e^(-\u03bb) \u00d7 \u03bb^x) / x! for x = 0, 1, 2, ..."
            },
            {
              "type": "typing",
              "question": "In PMF visualization, why are there gaps between bars?",
              "correctAnswer": [
                "discrete values with no intermediate values",
                "discrete variable",
                "gaps show discrete nature",
                "no values exist between points"
              ],
              "xp": 5,
              "explanation": "Gaps between bars exist because PMF is for discrete variables - there are no possible values between the discrete points"
            },
            {
              "type": "typing",
              "question": "What is the first step in verifying a PMF?",
              "correctAnswer": [
                "check all values sum to 1",
                "sum equals 1",
                "verify normalization",
                "check sum is 1"
              ],
              "xp": 5,
              "explanation": "The first verification step is to check that the sum of all PMF values equals 1 (normalization)"
            },
            {
              "type": "multiple-choice",
              "question": "If PMF has values p(0)=0.1, p(1)=0.2, p(2)=0.3, p(3)=0.4, what is P(X \u2265 2)?",
              "options": [
                "0.3",
                "0.4",
                "0.7",
                "0.9"
              ],
              "correct": 2,
              "xp": 4,
              "explanation": "P(X \u2265 2) = p(2) + p(3) = 0.3 + 0.4 = 0.7"
            }
          ]
        },
        {
          "id": 4,
          "title": "Probability density function",
          "unitTitle": "Random Variables",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Probability Density Function (PDF)\n\n## Definition\n\nThe **Probability Density Function** of a continuous random variable X is a function f(x) that describes the relative likelihood of X taking on different values.\n\n**CRITICAL DISTINCTION:**\n\nFor continuous random variables:\n\n$$P(X = a) = 0$$\n\nThe probability of any exact value is **zero**.\n\nInstead, we work with **intervals**:\n\n$$P(a \\leq X \\leq b) = \\int_a^b f(x) dx$$\n\nThis is the **area under the curve** between a and b.\n\n## Formal Definition\n\nA function f: \u211d \u2192 [0, \u221e) is a PDF if:\n\n1. $f(x) \\geq 0$ for all x (non-negative)\n2. $\\int_{-\\infty}^{\\infty} f(x) dx = 1$ (integrates to 1)\n\n## Properties of PDF\n\n### Property 1: Non-negativity\n\n$$f(x) \\geq 0 \\text{ for all } x$$\n\nThe density can never be negative.\n\n### Property 2: Integrates to One\n\n$$\\int_{-\\infty}^{\\infty} f(x) dx = 1$$\n\nThe total area under the curve equals 1.\n\n### Property 3: Not a Probability\n\n**IMPORTANT:** f(x) is NOT a probability!\n\n- f(x) can be > 1 (it's a **density**)\n- Only the **area** under f(x) represents probability\n\n### Property 4: Relationship to CDF\n\n$$F(x) = \\int_{-\\infty}^{x} f(t) dt$$\n\nThe CDF is the integral of the PDF.\n\nConversely:\n\n$$f(x) = F'(x)$$\n\nThe PDF is the derivative of the CDF.\n\n## Why P(X = a) = 0?\n\nFor continuous variables, a single point has **zero width**:\n\n$$P(X = a) = \\int_a^a f(x) dx = 0$$\n\nThe integral from a to a is zero.\n\n**Intuition:** What's the probability of picking exactly 3.141592653589793...?\n- The set of all real numbers is uncountably infinite\n- Each specific value has zero probability\n- We only have positive probability over **intervals**\n\n## Calculating Probabilities with PDF\n\n### Probability of an Interval\n\n$$P(a \\leq X \\leq b) = \\int_a^b f(x) dx$$\n\nThis is the **area under the curve** from a to b.\n\n### Probability of One-Sided Intervals\n\n$$P(X \\leq a) = \\int_{-\\infty}^{a} f(x) dx = F(a)$$\n\n$$P(X > a) = 1 - P(X \\leq a) = 1 - F(a)$$\n\n### Probability of Complement\n\n$$P(X \\neq a) = 1 - P(X = a) = 1 - 0 = 1$$\n\nFor continuous variables, the probability of NOT being exactly a is 1.\n\n## Example: Uniform Distribution on [0, 2]\n\n**PDF:**\n\n$$f(x) = \\begin{cases}\n\\frac{1}{2} & \\text{if } 0 \\leq x \\leq 2 \\\\\n0 & \\text{otherwise}\n\\end{cases}$$\n\n**Verification:**\n\n$$\\int_{-\\infty}^{\\infty} f(x) dx = \\int_0^2 \\frac{1}{2} dx = \\left[\\frac{x}{2}\\right]_0^2 = 1$$ \u2713\n\n**Probability Questions:**\n\n1. P(0.5 \u2264 X \u2264 1.5)?\n\n$$P(0.5 \\leq X \\leq 1.5) = \\int_{0.5}^{1.5} \\frac{1}{2} dx = \\frac{1.5 - 0.5}{2} = 0.5$$\n\n2. P(X > 1.5)?\n\n$$P(X > 1.5) = \\int_{1.5}^{2} \\frac{1}{2} dx = \\frac{2 - 1.5}{2} = 0.25$$\n\n## Example: Normal Distribution\n\nLooking at `diagrams/pdf-area-under-curve.png`:\n\n**Standard Normal PDF:**\n\n$$f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}}$$\n\n**Key properties:**\n- Bell-shaped curve\n- Symmetric around x = 0\n- Maximum at x = 0: $f(0) = \\frac{1}{\\sqrt{2\\pi}} \\approx 0.399$\n- Area under entire curve = 1\n\n**Probability Questions:**\n\n1. P(-1 \u2264 X \u2264 1)?\n\nLooking at the PDF in `diagrams/pdf-area-under-curve.png`:\n$$P(-1 \\leq X \\leq 1) \\approx 0.68$$\n\nAbout 68% of values fall within 1 standard deviation.\n\n2. P(-2 \u2264 X \u2264 2)?\n\n$$P(-2 \\leq X \\leq 2) \\approx 0.95$$\n\nAbout 95% of values fall within 2 standard deviations.\n\n3. P(-3 \u2264 X \u2264 3)?\n\n$$P(-3 \\leq X \\leq 3) \\approx 0.997$$\n\nAbout 99.7% of values fall within 3 standard deviations.\n\n## Visual Interpretation\n\nLooking at `diagrams/rv-pmf-vs-pdf.png`:\n\n### PDF Panel (Right - continuous)\n- **Smooth curve**: Continuous function\n- **Area under curve**: Represents probability\n- **Height**: Density (not probability!)\n- **Can exceed 1**: Density > 1 is possible\n- **No gaps**: Curve is continuous\n\n### PMF vs PDF Comparison\n\n| Feature | PMF (Discrete) | PDF (Continuous) |\n|---------|----------------|------------------|\n| P(X = x) | p(x) > 0 | = 0 |\n| Visualization | Bars | Smooth curve |\n| Probability sum | $\\sum p(x) = 1$ | $\\int f(x) dx = 1$ |\n| Can value > 1? | No | Yes (density) |\n| Domain | Countable set | Real numbers |\n\n## Expected Value from PDF\n\n$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x) dx$$\n\nFor standard normal:\n\n$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}} dx = 0$$\n\n(Integrand is odd, integral over symmetric range is 0)\n\n## Variance from PDF\n\n$$\\text{Var}(X) = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 \\cdot f(x) dx$$\n\nFor standard normal (\u03bc = 0):\n\n$$\\text{Var}(X) = \\int_{-\\infty}^{\\infty} x^2 \\cdot \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}} dx = 1$$\n\n## Common PDFs in AI\n\n### Normal (Gaussian)\n\n$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$\n\nUsed for: Natural phenomena, measurement errors, neural network weights initialization.\n\n### Exponential\n\n$$f(x) = \\lambda e^{-\\lambda x} \\text{ for } x \\geq 0$$\n\nUsed for: Time between events, waiting times.\n\n### Uniform\n\n$$f(x) = \\frac{1}{b-a} \\text{ for } a \\leq x \\leq b$$\n\nUsed for: Random sampling, equal probability intervals.\n\n### Beta\n\n$$f(x) = \\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{B(\\alpha, \\beta)} \\text{ for } 0 \\leq x \\leq 1$$\n\nUsed for: Probabilities, proportions, Bayesian priors.\n\n## Key Takeaways\n\n1. **PDF only for continuous variables** - Not for discrete\n2. **f(x) \u2260 P(X = x)** - f(x) is density, not probability\n3. **P(X = a) = 0** - Only intervals have probability\n4. **Area = probability** - $\\int_a^b f(x) dx$\n5. **f(x) can > 1** - It's a density, not probability\n\n## Common Mistakes\n\n\u274c **Thinking f(x) = P(X = x)**\n- f(x) is a density, not a probability\n- For continuous, P(X = x) = 0 always\n\n\u274c **Thinking f(x) \u2264 1**\n- PDF values can exceed 1\n- Only the area must equal 1\n\n\u274c **Calculating P(X = a) with PDF**\n- Cannot do this for continuous variables\n- Must use intervals or CDF\n\n\u2705 **Correct approach:**\n- Use CDF for cumulative probabilities\n- Use PDF for interval probabilities (area under curve)\n- Remember: density \u2260 probability",
          "questions": [
            {
              "type": "typing",
              "question": "What does PDF stand for?",
              "correctAnswer": [
                "Probability Density Function",
                "probability density function"
              ],
              "xp": 3,
              "explanation": "PDF stands for Probability Density Function, which describes probability density for continuous variables"
            },
            {
              "type": "typing",
              "question": "For a continuous random variable, what is P(X = a)?",
              "correctAnswer": [
                "0",
                "zero"
              ],
              "xp": 3,
              "explanation": "For continuous random variables, P(X = a) = 0 for any specific value because a point has zero width"
            },
            {
              "type": "typing",
              "question": "What is the relationship between PDF and CDF?",
              "correctAnswer": [
                "CDF is integral of PDF",
                "integral",
                "CDF = \u222bPDF",
                "PDF is derivative of CDF"
              ],
              "xp": 3,
              "explanation": "The CDF is the integral of the PDF: F(x) = \u222b from -\u221e to x of f(t) dt. Conversely, f(x) = F'(x)"
            },
            {
              "type": "multiple-choice",
              "question": "PDF is used for which type of random variable?",
              "options": [
                "Discrete random variables",
                "Continuous random variables",
                "Both discrete and continuous",
                "Neither"
              ],
              "correct": 1,
              "xp": 2,
              "explanation": "PDF (Probability Density Function) is used only for continuous random variables"
            },
            {
              "type": "typing",
              "question": "How do you calculate P(a \u2264 X \u2264 b) using a PDF?",
              "correctAnswer": [
                "integrate PDF from a to b",
                "\u222bf(x)dx",
                "area under PDF curve",
                "integral of PDF"
              ],
              "xp": 4,
              "explanation": "P(a \u2264 X \u2264 b) = \u222b from a to b of f(x) dx - this is the area under the PDF curve between a and b"
            },
            {
              "type": "typing",
              "question": "If f(x) = 3 for 0 \u2264 x \u2264 1/3 and 0 otherwise, what is P(0 \u2264 X \u2264 1/3)?",
              "correctAnswer": [
                "1",
                "1.0",
                "one"
              ],
              "xp": 4,
              "explanation": "P(0 \u2264 X \u2264 1/3) = \u222b from 0 to 1/3 of 3 dx = 3 \u00d7 (1/3 - 0) = 1. This is the entire distribution, so probability is 1"
            },
            {
              "type": "typing",
              "question": "What must the integral of a PDF over its entire domain equal?",
              "correctAnswer": [
                "1",
                "one",
                "1.0"
              ],
              "xp": 4,
              "explanation": "The integral of the PDF over its entire domain must equal 1 because total probability must be 1"
            },
            {
              "type": "typing",
              "question": "Looking at `diagrams/continuous-variable-types.png`, what is the maximum value of the standard normal PDF?",
              "correctAnswer": [
                "0.399",
                "approximately 0.4",
                "0.4",
                "1/sqrt(2pi)"
              ],
              "xp": 4,
              "explanation": "The standard normal PDF at x=0 is 1/\u221a(2\u03c0) \u2248 0.399"
            },
            {
              "type": "multiple-choice",
              "question": "Which of these is FALSE about PDF values?",
              "options": [
                "PDF values can be negative",
                "PDF values can be greater than 1",
                "PDF represents density not probability",
                "PDF must integrate to 1"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "This statement is false because PDF values must be non-negative: f(x) \u2265 0 for all x"
            },
            {
              "type": "multiple-choice",
              "question": "For uniform distribution on [0, 2], what is the PDF value f(1)?",
              "options": [
                "0",
                "0.5",
                "1",
                "2"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "For uniform on [a, b], f(x) = 1/(b-a) = 1/2 = 0.5 for any x in [0, 2]"
            },
            {
              "type": "multiple-choice",
              "question": "What is P(X > a) in terms of the CDF?",
              "options": [
                "F(a)",
                "1 - F(a)",
                "F'(a)",
                "F(a) - 1"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "P(X > a) = 1 - P(X \u2264 a) = 1 - F(a)"
            },
            {
              "type": "multiple-choice",
              "question": "Looking at `diagrams/rv-pmf-vs-pdf.png`, what visual difference identifies the PDF?",
              "options": [
                "Bars with gaps",
                "Smooth continuous curve",
                "Step function",
                "Discrete points"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "The PDF is visualized as a smooth continuous curve, unlike the PMF which uses bars with gaps"
            },
            {
              "type": "multiple-choice",
              "question": "For standard normal distribution, approximately what is P(-1 \u2264 X \u2264 1)?",
              "options": [
                "50%",
                "68%",
                "95%",
                "99.7%"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "For a normal distribution, about 68% of values fall within 1 standard deviation of the mean"
            },
            {
              "type": "typing",
              "question": "Why can PDF values exceed 1?",
              "correctAnswer": [
                "PDF is density not probability",
                "density not probability",
                "it's a density"
              ],
              "xp": 5,
              "explanation": "PDF values can exceed 1 because they represent probability density, not probability. Only the area under the curve must equal 1"
            },
            {
              "type": "typing",
              "question": "What is E[X] for continuous random variable?",
              "correctAnswer": [
                "integral of x times f(x)",
                "\u222bx\u00b7f(x)dx",
                "weighted integral"
              ],
              "xp": 5,
              "explanation": "E[X] = \u222b from -\u221e to \u221e of x\u00b7f(x) dx for continuous random variables"
            },
            {
              "type": "typing",
              "question": "What is the exponential PDF with rate \u03bb?",
              "correctAnswer": [
                "\u03bbe^(-\u03bbx)",
                "lambda e to the negative lambda x",
                "\u03bb * e^(-\u03bbx)"
              ],
              "xp": 5,
              "explanation": "The exponential PDF is f(x) = \u03bbe^(-\u03bbx) for x \u2265 0"
            },
            {
              "type": "typing",
              "question": "What is the first step in finding probability with a PDF?",
              "correctAnswer": [
                "set up the integral over the interval",
                "set up integral",
                "determine integration limits"
              ],
              "xp": 5,
              "explanation": "First, set up the integral of f(x) over the desired interval to find the area (probability)"
            },
            {
              "type": "multiple-choice",
              "question": "If f(x) = 1 on [0, 1], what is P(X < 0.5)?",
              "options": [
                "0",
                "0.25",
                "0.5",
                "1"
              ],
              "correct": 2,
              "xp": 4,
              "explanation": "P(X < 0.5) = \u222b from 0 to 0.5 of 1 dx = 0.5 - 0 = 0.5"
            }
          ]
        },
        {
          "id": 5,
          "title": "Cumulative distribution function",
          "unitTitle": "Random Variables",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Cumulative Distribution Function (CDF)\n\n## Definition\n\nThe **Cumulative Distribution Function** F(x) of a random variable X is defined as:\n\n$$F(x) = P(X \\leq x)$$\n\nIt gives the probability that X is **less than or equal to** x.\n\n## Universal Definition\n\nThe CDF works for **both** discrete and continuous random variables:\n\n**Discrete:**\n$$F(x) = P(X \\leq x) = \\sum_{k \\leq x} p(k)$$\n\n**Continuous:**\n$$F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f(t) dt$$\n\n## Properties of CDF\n\n### Property 1: Monotonic Non-decreasing\n\nIf $x_1 < x_2$, then $F(x_1) \\leq F(x_2)$\n\nThe CDF never decreases.\n\n### Property 2: Limits\n\n$$\\lim_{x \\to -\\infty} F(x) = 0$$\n\n$$\\lim_{x \\to \\infty} F(x) = 1$$\n\nAs x approaches negative infinity, probability \u2192 0.\nAs x approaches positive infinity, probability \u2192 1.\n\n### Property 3: Right-continuous\n$\\lim_{h \\to 0^+} F(x + h) = F(x)$\n\nThe CDF is continuous from the right.\n\n### Property 4: 0 \u2264 F(x) \u2264 1\n\n$$0 \\leq F(x) \\leq 1$$ for all x.\n\n## Calculating Probabilities with CDF\n\n### One-Sided Intervals\n\n$$P(X \\leq x) = F(x)$$\n\nDirectly from definition.\n\n### Probability Greater Than x\n\n$$P(X > x) = 1 - P(X \\leq x) = 1 - F(x)$$\n\n### Probability of Interval\n\n$$P(a < X \\leq b) = F(b) - F(a)$$\n\n**Note:** P(a < X \u2264 b) = F(b) - F(a), not F(b) - F(a-1)!\n\n### Probability of Range\n\n$$P(a \\leq X \\leq b) = F(b) - F(a) + P(X = a)$$\n\nFor continuous: $P(a \\leq X \\leq b) = F(b) - F(a)$ (since P(X=a) = 0)\n\n## CDF for Discrete Variables\n\n**Example:** Number of heads in 3 coin flips\n\n**PMF:**\n\n| x | p(x) |\n|---|------|\n| 0 | 1/8 = 0.125 |\n| 1 | 3/8 = 0.375 |\n| 2 | 3/8 = 0.375 |\n| 3 | 1/8 = 0.125 |\n\n**CDF:**\n\n$$F(x) = \\sum_{k \\leq x} p(k)$$\n\n| x | F(x) = P(X \u2264 x) | Calculation |\n|---|------------------|-------------|\n| x < 0 | 0 | No outcomes \u2264 x |\n| 0 \u2264 x < 1 | 0.125 | p(0) = 1/8 |\n| 1 \u2264 x < 2 | 0.5 | p(0) + p(1) = 4/8 |\n| 2 \u2264 x < 3 | 0.875 | p(0) + p(1) + p(2) = 7/8 |\n| x \u2265 3 | 1.0 | All outcomes |\n\n**Visualization:**\nLooking at `diagrams/cdf-distributions-comparison.png`, the right panel shows the CDF as a step function.\n\n**Key features:**\n- **Step function**: Discrete jumps at each x\n- **Flat between values**: No change in probability\n- **Right-continuous**: Jumps at x, then flat until next x\n\n**Probability calculations:**\n\n1. P(X \u2264 1)?\n\n$$F(1) = 0.5$$\n\n2. P(X > 1)?\n\n$$1 - F(1) = 1 - 0.5 = 0.5$$\n\n3. P(1 < X \u2264 2)?\n\n$$F(2) - F(1) = 0.875 - 0.5 = 0.375$$\n\n## CDF for Continuous Variables\n\n**Example:** Standard normal distribution\n\n**PDF:**\n$$f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}}$$\n\n**CDF:**\n$$F(x) = \\int_{-\\infty}^{x} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{t^2}{2}} dt$$\n\n**Common values (from standard normal table or calculator):**\n\n| x | F(x) = P(X \u2264 x) |\n|---|------------------|\n| -3 | 0.0013 |\n| -2 | 0.0228 |\n| -1 | 0.1587 |\n| 0 | 0.5 |\n| 1 | 0.8413 |\n| 2 | 0.9772 |\n| 3 | 0.9987 |\n\n**Visualization:**\nLooking at `diagrams/cdf-properties.png`, the right panel shows the CDF as an S-shaped curve.\n\n**Key features:**\n- **Smooth curve**: Continuous, not stepped\n- **Sigmoid shape**: Starts at 0, ends at 1\n- **Symmetric at 0**: F(-x) = 1 - F(x)\n- **Monotonic**: Always increasing\n\n**Probability calculations:**\n\n1. P(X \u2264 1)?\n\n$$F(1) = 0.8413$$\n\n2. P(X > 1)?\n\n$$1 - F(1) = 1 - 0.8413 = 0.1587$$\n\n3. P(-1 < X \u2264 1)?\n\n$$F(1) - F(-1) = 0.8413 - 0.1587 = 0.6826$$\n\nAbout 68% of values fall between -1 and 1.\n\n## Relationship Between PMF/PDF and CDF\n\n### Discrete: PMF \u2192 CDF\n\n$$F(x) = \\sum_{k \\leq x} p(k)$$\n\nThe CDF is the **cumulative sum** of the PMF.\n\n### Discrete: CDF \u2192 PMF\n\n$$p(x) = F(x) - F(x-1)$$\n\nThe PMF is the **jump** in the CDF at x.\n\n### Continuous: PDF \u2192 CDF\n\n$$F(x) = \\int_{-\\infty}^{x} f(t) dt$$\n\nThe CDF is the **integral** of the PDF.\n\n### Continuous: CDF \u2192 PDF\n\n$$f(x) = F'(x) = \\frac{d}{dx}F(x)$$\n\nThe PDF is the **derivative** of the CDF.\n\n## Quantile Function (Inverse CDF)\n\nThe **quantile function** Q(p) is the inverse of the CDF:\n\n$$Q(p) = F^{-1}(p)$$\n\nWhere $p \\in [0, 1]$ is a probability.\n\n**Interpretation:** Q(p) is the value x such that P(X \u2264 x) = p.\n\n**Example (standard normal):**\n- Q(0.5) = 0 (median, where F(x) = 0.5)\n- Q(0.975) \u2248 1.96 (97.5th percentile)\n\n## Applications in AI and ML\n\nCDFs are used extensively:\n\n1. **Percentile calculations**: Find top-k items\n2. **Threshold selection**: Choose cutoffs for classification\n3. **Normalization**: Transform data to uniform distribution\n4. **Statistical tests**: Compare distributions using CDFs\n5. **Probability intervals**: Find confidence intervals\n\n## Empirical CDF\n\nGiven data samples $x_1, x_2, ..., x_n$, the empirical CDF is:\n\n$$\\hat{F}_n(x) = \\frac{1}{n} \\sum_{i=1}^{n} I(x_i \\leq x)$$\n\nWhere I is the indicator function.\n\n**Steps:**\n1. Sort the data: $x_{(1)} \\leq x_{(2)} \\leq ... \\leq x_{(n)}$\n2. $\\hat{F}_n(x_{(k)}) = k/n$\n3. Interpolate between points\n\nThe empirical CDF converges to the true CDF as n increases.\n\n## Key Takeaways\n\n1. **Universal definition**: $F(x) = P(X \\leq x)$ works for all random variables\n2. **Monotonic**: CDF never decreases\n3. **Limits**: F(x) \u2192 0 as x \u2192 -\u221e, F(x) \u2192 1 as x \u2192 +\u221e\n4. **Probability calculations**: Easy with CDF (subtract values)\n5. **Relationship to PMF/PDF**:\n   - Discrete: Sum/integrate PMF\n   - Continuous: Integrate PDF\n   - Inverse: PDF/PMF is derivative/difference of CDF\n\n## Common Mistakes\n\n\u274c **Using P(X < x) instead of P(X \u2264 x)**\n- CDF is P(X \u2264 x), not P(X < x)\n- For continuous: P(X < x) = P(X \u2264 x) = F(x)\n- For discrete: P(X < x) = F(x-1), not F(x)\n\n\u274c **Subtracting wrong way in intervals**\n- P(a < X \u2264 b) = F(b) - F(a)\n- NOT F(a) - F(b)\n\n\u274c **Forgetting CDF is universal**\n- CDF works for both discrete and continuous\n- Use CDF for probability calculations\n\n\u2705 **Correct approach:**\n- Remember: F(x) = P(X \u2264 x)\n- Use: P(a < X \u2264 b) = F(b) - F(a)\n- Check limits: F(-\u221e) = 0, F(\u221e) = 1\n- Use for both discrete and continuous",
          "questions": [
            {
              "type": "typing",
              "question": "What does CDF stand for?",
              "correctAnswer": [
                "Cumulative Distribution Function",
                "cumulative distribution function"
              ],
              "xp": 3,
              "explanation": "CDF stands for Cumulative Distribution Function, defined as F(x) = P(X \u2264 x)"
            },
            {
              "type": "typing",
              "question": "What is the definition of CDF?",
              "correctAnswer": [
                "F(x) = P(X \u2264 x)",
                "P(X less than or equal to x)",
                "probability X is less than or equal to x"
              ],
              "xp": 3,
              "explanation": "The CDF is defined as F(x) = P(X \u2264 x), the probability that X is less than or equal to x"
            },
            {
              "type": "typing",
              "question": "What is the limit of F(x) as x approaches infinity?",
              "correctAnswer": [
                "1",
                "one",
                "1.0"
              ],
              "xp": 3,
              "explanation": "As x approaches infinity, F(x) \u2192 1 because eventually all outcomes will be included"
            },
            {
              "type": "multiple-choice",
              "question": "Which property of CDF is always true?",
              "options": [
                "CDF can decrease",
                "CDF is always non-decreasing",
                "CDF can be negative",
                "CDF equals PMF"
              ],
              "correct": 1,
              "xp": 2,
              "explanation": "CDF is always non-decreasing (monotonic): as x increases, F(x) never decreases"
            },
            {
              "type": "typing",
              "question": "How do you calculate P(X > x) using the CDF?",
              "correctAnswer": [
                "1 - F(x)",
                "one minus F(x)",
                "subtract from 1"
              ],
              "xp": 4,
              "explanation": "P(X > x) = 1 - P(X \u2264 x) = 1 - F(x)"
            },
            {
              "type": "typing",
              "question": "What is P(a < X \u2264 b) in terms of CDF?",
              "correctAnswer": [
                "F(b) - F(a)",
                "F(b) minus F(a)"
              ],
              "xp": 4,
              "explanation": "P(a < X \u2264 b) = F(b) - F(a) - subtract the CDF values"
            },
            {
              "type": "typing",
              "question": "For a standard normal distribution, what is F(0)?",
              "correctAnswer": [
                "0.5",
                ".5",
                "1/2",
                "one half"
              ],
              "xp": 4,
              "explanation": "For standard normal, F(0) = 0.5 because the distribution is symmetric around 0"
            },
            {
              "type": "typing",
              "question": "Looking at `diagrams/discrete-variable-types.png`, what shape represents the CDF for discrete variables?",
              "correctAnswer": [
                "step function",
                "steps",
                "step graph",
                "staircase"
              ],
              "xp": 4,
              "explanation": "The CDF for discrete variables is a step function - it jumps at each possible value"
            },
            {
              "type": "multiple-choice",
              "question": "Does CDF work for both discrete and continuous variables?",
              "options": [
                "Only discrete",
                "Only continuous",
                "Yes, for both",
                "Neither"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "CDF is universal - it works for both discrete and continuous random variables"
            },
            {
              "type": "multiple-choice",
              "question": "Which statement about CDF is FALSE?",
              "options": [
                "CDF is always between 0 and 1",
                "CDF is always non-decreasing",
                "CDF can have values > 1",
                "CDF approaches 0 as x \u2192 -\u221e"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "This statement is false because CDF values are always between 0 and 1 inclusive: 0 \u2264 F(x) \u2264 1"
            },
            {
              "type": "multiple-choice",
              "question": "What is F(1) for standard normal distribution?",
              "options": [
                "0.1587",
                "0.5",
                "0.8413",
                "0.9772"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "For standard normal, F(1) \u2248 0.8413 - about 84% of values fall below 1 standard deviation"
            },
            {
              "type": "multiple-choice",
              "question": "How do you get PMF from CDF for discrete variables?",
              "options": [
                "Integrate CDF",
                "Differentiate CDF",
                "F(x) - F(x-1)",
                "F(x+1) - F(x)"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "For discrete variables, p(x) = F(x) - F(x-1) - the PMF is the jump at x"
            },
            {
              "type": "multiple-choice",
              "question": "What is the inverse of the CDF called?",
              "options": [
                "PMF",
                "PDF",
                "Quantile function",
                "Moment function"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "The inverse of the CDF is called the quantile function: Q(p) = F^(-1)(p)"
            },
            {
              "type": "typing",
              "question": "For continuous variables, how do you get PDF from CDF?",
              "correctAnswer": [
                "differentiate CDF",
                "derivative",
                "F'(x)",
                "d/dx of F(x)"
              ],
              "xp": 5,
              "explanation": "For continuous variables, f(x) = F'(x) - the PDF is the derivative of the CDF"
            },
            {
              "type": "typing",
              "question": "What is Q(0.5) for a symmetric distribution like the normal?",
              "correctAnswer": [
                "median",
                "the median",
                "center of distribution"
              ],
              "xp": 5,
              "explanation": "Q(0.5) gives the median - the value where F(x) = 0.5, meaning 50% of values are below"
            },
            {
              "type": "typing",
              "question": "What is the first property to check when verifying a CDF?",
              "correctAnswer": [
                "it is non-decreasing",
                "never decreases",
                "monotonic",
                "increases or stays same"
              ],
              "xp": 5,
              "explanation": "First verify that the CDF is non-decreasing (monotonic): F(x\u2081) \u2264 F(x\u2082) whenever x\u2081 < x\u2082"
            },
            {
              "type": "typing",
              "question": "For discrete variables, why does CDF have flat regions?",
              "correctAnswer": [
                "no probability between discrete values",
                "gaps between possible values",
                "discrete nature"
              ],
              "xp": 5,
              "explanation": "CDF has flat regions between discrete values because there's no probability mass between them"
            },
            {
              "type": "multiple-choice",
              "question": "If F(2) = 0.7 and F(1) = 0.3, what is P(1 < X \u2264 2)?",
              "options": [
                "0.3",
                "0.4",
                "0.7",
                "1.0"
              ],
              "correct": 1,
              "xp": 4,
              "explanation": "P(1 < X \u2264 2) = F(2) - F(1) = 0.7 - 0.3 = 0.4"
            }
          ]
        }
      ]
    },
    {
      "unitId": "3",
      "unitName": "Important Distributions",
      "lessons": [
        {
          "id": 1,
          "title": "Bernoulli",
          "unitTitle": "Important Distributions",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Bernoulli Distribution\n\n## What is a Bernoulli Trial?\n\nA **Bernoulli trial** is a random experiment with exactly two possible outcomes:\n\n- **Success** (coded as 1)\n- **Failure** (coded as 0)\n\n### Examples of Bernoulli Trials\n\n1. **Coin Flip**: Heads (success) or Tails (failure)\n2. **Email Classification**: Spam (success) or Not Spam (failure)\n3. **Medical Test**: Positive (success) or Negative (failure)\n4. **Customer Purchase**: Purchase (success) or No Purchase (failure)\n5. **Binary Classification**: Class 1 (success) or Class 0 (failure)\n\n## Bernoulli Random Variable\n\nLet X be a Bernoulli random variable:\n\n$$X = \\begin{cases}\n1 & \\text{with probability } p \\\\ 0 & \\text{with probability } 1-p\n\\end{cases}$$\n\nWhere:\n- **p** is the probability of success\n- **1-p** is the probability of failure\n\nLooking at `diagrams/bernoulli-pmf.png`, you can see the Bernoulli PMF for p=0.7.\n\n## Probability Mass Function (PMF)\n\nThe PMF of a Bernoulli distribution is:\n\n$$P(X = x) = p^x (1-p)^{1-x} \\text{ for } x \\in \\{0, 1\\}$$\n\n**Verification:**\n\nFor x = 0 (failure): $P(X=0) = p^0(1-p)^{1-0} = 1 \\cdot (1-p) = 1-p$\n\nFor x = 1 (success): $P(X=1) = p^1(1-p)^{1-1} = p \\cdot 1 = p$\n\nCheck: $P(X=0) + P(X=1) = (1-p) + p = 1$ \u2713\n\n## Applications in AI\n\nLooking at `diagrams/bernoulli-applications.png`, Bernoulli distributions are ubiquitous in AI:\n\n1. **Binary Classification**: Spam detection, fraud detection, medical diagnosis\n2. **Neural Networks**: Sigmoid output represents probability of class 1\n3. **Decision Trees**: Binary splits at each node\n4. **Recommender Systems**: Click or don't click\n5. **A/B Testing**: Control (0) vs Treatment (1) group assignment\n\n## Expected Value (Mean)\n\n$$E[X] = \\sum_x x \\cdot P(X=x) = 0 \\cdot (1-p) + 1 \\cdot p = p$$\n\nThe expected value of a Bernoulli random variable is simply the probability of success.\n\n**Intuitive:** If you repeat a Bernoulli trial many times, the proportion of successes approaches p.\n\n## Variance\n\n$$\\text{Var}(X) = E[X^2] - (E[X])^2$$\n\nFirst, calculate $E[X^2]$:\n\n$$E[X^2] = 0^2 \\cdot (1-p) + 1^2 \\cdot p = p$$\n\nThen variance:\n\n$$\\text{Var}(X) = p - p^2 = p(1-p)$$\n\nThe variance is maximized when p = 0.5 (maximum uncertainty), and minimized when p approaches 0 or 1 (certainty).\n\nLooking at `diagrams/bernoulli-mean-variance.png`:\n- Expected value increases linearly with p\n- Variance is maximized at p=0.5 (Var=0.25)\n- Variance approaches 0 as p approaches 0 or 1\n\n## Standard Deviation\n\n$$\\sigma = \\sqrt{\\text{Var}(X)} = \\sqrt{p(1-p)}$$\n\n## Properties\n\n1. **Single trial**: Bernoulli models one trial\n2. **Two outcomes**: Exactly two possible results\n3. **Independent trials**: Multiple Bernoulli trials are assumed independent\n4. **Fixed probability**: p is constant across trials\n\n## Relationship to Other Distributions\n\n**Bernoulli as special case of Binomial:**\n- Binomial(n=1, p) = Bernoulli(p)\n\n**Sum of Bernoulli trials:**\n- Sum of n independent Bernoulli(p) trials ~ Binomial(n, p)\n\n## Example: Email Spam Detection\n\nAn email filter classifies emails as spam or not spam:\n\n- **Success (X=1)**: Email is spam\n- **Failure (X=0)**: Email is not spam\n- **p = 0.05**: 5% of emails are spam\n\n**PMF:**\n- $P(X=0) = 1 - 0.05 = 0.95$ (95% not spam)\n- $P(X=1) = 0.05$ (5% spam)\n\n**Expected value:** $E[X] = p = 0.05$\n\n**Variance:** $\\text{Var}(X) = p(1-p) = 0.05 \\times 0.95 = 0.0475$\n\n**Interpretation:** On average, 5% of emails are spam. The variance is low because most emails are not spam.",
          "questions": [
            {
              "id": "bernoulli-3-1-1",
              "type": "typing",
              "question": "What is a Bernoulli trial?",
              "correctAnswer": [
                "random experiment with two possible outcomes",
                "experiment with two outcomes",
                "two possible outcomes",
                "success or failure"
              ],
              "xp": 3,
              "explanation": "A Bernoulli trial is a random experiment with exactly two possible outcomes: success (coded as 1) or failure (coded as 0)"
            },
            {
              "id": "bernoulli-3-1-2",
              "type": "typing",
              "question": "In a Bernoulli distribution, what does the parameter p represent?",
              "correctAnswer": [
                "probability of success",
                "success probability",
                "P(X=1)"
              ],
              "xp": 3,
              "explanation": "The parameter p in a Bernoulli distribution represents the probability of success, i.e., P(X=1) = p"
            },
            {
              "id": "bernoulli-3-1-3",
              "type": "typing",
              "question": "What is the PMF formula for a Bernoulli distribution?",
              "correctAnswer": [
                "P(X=x) = p^x (1-p)^(1-x)",
                "p^x (1-p)^(1-x)",
                "p to the x times (1-p) to the (1-x)"
              ],
              "xp": 3,
              "explanation": "The Bernoulli PMF is P(X=x) = p^x (1-p)^(1-x) for x \u2208 {0, 1}"
            },
            {
              "id": "bernoulli-3-1-4",
              "type": "multiple-choice",
              "question": "Which of these is NOT a Bernoulli trial?",
              "options": [
                "Coin flip (heads/tails)",
                "Rolling a die",
                "Email spam detection (spam/not spam)",
                "Medical test (positive/negative)"
              ],
              "correct": 1,
              "xp": 2,
              "explanation": "Rolling a die has 6 possible outcomes, not 2. A Bernoulli trial must have exactly two outcomes"
            },
            {
              "id": "bernoulli-3-1-5",
              "type": "typing",
              "question": "If p = 0.7, what is P(X=0) for a Bernoulli random variable?",
              "correctAnswer": [
                "0.3",
                ".3",
                "1 - p"
              ],
              "xp": 4,
              "explanation": "P(X=0) = 1 - p = 1 - 0.7 = 0.3. This represents the probability of failure"
            },
            {
              "id": "bernoulli-3-1-6",
              "type": "typing",
              "question": "Looking at `diagrams/bernoulli-pmf.png`, what is the expected value E[X] for a Bernoulli distribution with p=0.7?",
              "correctAnswer": [
                "0.7",
                ".7",
                "p"
              ],
              "xp": 4,
              "explanation": "For a Bernoulli distribution, E[X] = p. So with p=0.7, the expected value is 0.7"
            },
            {
              "id": "bernoulli-3-1-7",
              "type": "typing",
              "question": "What is the variance of a Bernoulli distribution?",
              "correctAnswer": [
                "p(1-p)",
                "p times (1-p)",
                "p(1 minus p)"
              ],
              "xp": 4,
              "explanation": "The variance of a Bernoulli distribution is Var(X) = p(1-p)"
            },
            {
              "id": "bernoulli-3-1-8",
              "type": "typing",
              "question": "For a Bernoulli distribution with p=0.5, what is the variance?",
              "correctAnswer": [
                "0.25",
                ".25",
                "0.5*0.5",
                "0.5 times 0.5"
              ],
              "xp": 4,
              "explanation": "Var(X) = p(1-p) = 0.5 \u00d7 0.5 = 0.25. This is the maximum possible variance for a Bernoulli distribution"
            },
            {
              "id": "bernoulli-3-1-9",
              "type": "multiple-choice",
              "question": "When is the variance of a Bernoulli distribution maximized?",
              "options": [
                "When p = 0",
                "When p = 1",
                "When p = 0.5",
                "Variance is constant"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "The variance p(1-p) is maximized when p=0.5, giving Var(X) = 0.25. This represents maximum uncertainty"
            },
            {
              "id": "bernoulli-3-1-10",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/bernoulli-applications.png`, which application has p=0.05?",
              "options": [
                "Coin flip",
                "Email spam detection",
                "Customer purchase",
                "Medical test"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Email spam detection shows p=0.05 (5% spam rate) - rare events have low p values"
            },
            {
              "id": "bernoulli-3-1-11",
              "type": "multiple-choice",
              "question": "How are outcomes coded in a Bernoulli distribution?",
              "options": [
                "Success = 0, Failure = 1",
                "Success = 1, Failure = 0",
                "Both outcomes are positive",
                "No specific coding"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "In a Bernoulli distribution, success is coded as 1 and failure is coded as 0"
            },
            {
              "id": "bernoulli-3-1-12",
              "type": "multiple-choice",
              "question": "What distribution is a sum of n independent Bernoulli trials?",
              "options": [
                "Poisson distribution",
                "Binomial distribution",
                "Normal distribution",
                "Uniform distribution"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "The sum of n independent Bernoulli(p) trials follows a Binomial(n, p) distribution"
            },
            {
              "id": "bernoulli-3-1-13",
              "type": "typing",
              "question": "What is the relationship between Bernoulli and Binomial distributions?",
              "correctAnswer": [
                "Bernoulli is Binomial with n=1",
                "Binomial with n equals 1",
                "special case"
              ],
              "xp": 5,
              "explanation": "A Bernoulli distribution is a special case of the Binomial distribution where n=1: Binomial(n=1, p) = Bernoulli(p)"
            },
            {
              "id": "bernoulli-3-1-14",
              "type": "typing",
              "question": "Looking at `diagrams/bernoulli-mean-variance.png`, what happens to variance as p approaches 0 or 1?",
              "correctAnswer": [
                "variance approaches 0",
                "approaches zero",
                "decreases to 0"
              ],
              "xp": 5,
              "explanation": "As p approaches 0 or 1, variance p(1-p) approaches 0. This represents certainty - when outcomes are predictable, there's no variance"
            },
            {
              "id": "bernoulli-3-1-15",
              "type": "typing",
              "question": "What is the standard deviation of a Bernoulli distribution?",
              "correctAnswer": [
                "sqrt(p(1-p))",
                "square root of p(1-p)",
                "\u221a(p(1-p))"
              ],
              "xp": 5,
              "explanation": "The standard deviation is the square root of the variance: \u03c3 = \u221a(p(1-p))"
            },
            {
              "id": "bernoulli-3-1-16",
              "type": "typing",
              "question": "In a spam filter, if 3% of emails are spam, what is p?",
              "correctAnswer": [
                "0.03",
                ".03",
                "3%"
              ],
              "xp": 4,
              "explanation": "If 3% of emails are spam, then p = 0.03 (the probability of success/spam)"
            },
            {
              "id": "bernoulli-3-1-17",
              "type": "multiple-choice",
              "question": "If a coin is fair (p=0.5), what is E[X] where X=1 for heads?",
              "options": [
                "0",
                "0.5",
                "1",
                "2"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "For a Bernoulli distribution, E[X] = p. With a fair coin, p=0.5, so E[X] = 0.5"
            },
            {
              "id": "bernoulli-3-1-18",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/bernoulli-pmf.png`, which bar represents success when p=0.7?",
              "options": [
                "The shorter bar (0.3)",
                "The taller bar (0.7)",
                "Both bars",
                "Neither bar"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "The taller bar shows P(X=1) = 0.7, which represents success in the Bernoulli distribution"
            }
          ]
        },
        {
          "id": 2,
          "title": "Binomial",
          "unitTitle": "Important Distributions",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Binomial Distribution\n\n## What is the Binomial Distribution?\n\nThe **Binomial distribution** models the number of successes in **n independent Bernoulli trials**, each with the same probability of success **p**.\n\n### Key Components\n\n1. **n**: Number of independent trials\n2. **p**: Probability of success on each trial (constant)\n3. **X**: Number of successes (random variable)\n\n### When to Use Binomial\n\nUse the Binomial distribution when:\n- \u2713 Fixed number of trials (n)\n- \u2713 Each trial has two outcomes (success/failure)\n- \u2713 Trials are independent\n- \u2713 Probability of success is constant (p)\n\n### Examples of Binomial Experiments\n\n1. **Coin Flips**: Number of heads in 10 coin flips\n2. **Quality Control**: Number of defective items in 100 produced\n3. **Marketing**: Number of conversions from 1000 ad clicks\n4. **Survey**: Number of yes responses from 50 people\n5. **Machine Learning**: Number of correct predictions from 100 test samples\n\n## Probability Mass Function (PMF)\n\n$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$\n\nWhere:\n- $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ is the binomial coefficient\n- k is the number of successes (0 \u2264 k \u2264 n)\n\n### Understanding the Formula\n\n1. **$\\binom{n}{k}$**: Number of ways to choose k successes from n trials\n2. **$p^k$**: Probability of k successes\n3. **$(1-p)^{n-k}$**: Probability of n-k failures\n\n**Example**: Probability of exactly 2 heads in 3 coin flips (p=0.5):\n\n$$P(X=2) = \\binom{3}{2} (0.5)^2 (0.5)^{3-2} = 3 \\times 0.25 \\times 0.5 = 0.375$$\n\nThere are 3 ways to get 2 heads: HHT, HTH, THH\n\nLooking at `diagrams/binomial-bernoulli-relationship.png`, you can see how Binomial relates to Bernoulli trials.\n\n## Relationship to Bernoulli\n\nThe Binomial distribution is the sum of n independent Bernoulli trials:\n\n$$X = X_1 + X_2 + ... + X_n$$\n\nWhere each $X_i$ is a Bernoulli(p) random variable.\n\n**Special case**: Binomial(n=1, p) = Bernoulli(p)\n\n## Expected Value (Mean)\n\n$$E[X] = n \\cdot p$$\n\nThis makes intuitive sense: if each trial has probability p of success, and you do n trials, you expect np successes on average.\n\n**Example**: Expected number of heads in 10 fair coin flips:\n$$E[X] = 10 \\times 0.5 = 5$$\n\n## Variance\n\n$$\\text{Var}(X) = n \\cdot p \\cdot (1-p)$$\n\nSince trials are independent, the variance of the sum equals the sum of variances:\n\n$$\\text{Var}(X) = n \\cdot \\text{Var}(\\text{Bernoulli}) = n \\cdot p \\cdot (1-p)$$\n\n**Example**: Variance of heads in 10 fair coin flips:\n$$\\text{Var}(X) = 10 \\times 0.5 \\times 0.5 = 2.5$$\n\n## Standard Deviation\n\n$$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$$\n\n## Visualizing the Binomial Distribution\n\nLooking at `diagrams/binomial-varying-n.png`:\n- As n increases, the distribution becomes more symmetric\n- The distribution approaches a bell shape for large n\n- The expected value np is marked with a dashed line\n\nLooking at `diagrams/binomial-varying-p.png`:\n- When p = 0.5: Symmetric distribution\n- When p < 0.5: Skewed right (more failures)\n- When p > 0.5: Skewed left (more successes)\n- The expected value np shifts with p\n\n## Shape of the Distribution\n\nThe shape depends on p:\n\n- **p = 0.5**: Symmetric (like a normal distribution)\n- **p < 0.5**: Right-skewed (tail extends to the right)\n- **p > 0.5**: Left-skewed (tail extends to the left)\n\n## Example: Quality Control\n\nA factory produces items with a defect rate of 2%. In a batch of 100 items:\n\n- n = 100\n- p = 0.02\n\n**Expected defects:** $E[X] = 100 \\times 0.02 = 2$\n\n**Variance:** $\\text{Var}(X) = 100 \\times 0.02 \\times 0.98 = 1.96$\n\n**Probability of exactly 0 defects:**\n$$P(X=0) = \\binom{100}{0} (0.02)^0 (0.98)^{100} = 1 \\times 1 \\times 0.98^{100} \\approx 0.133$$\n\n**Probability of exactly 1 defect:**\n$$P(X=1) = \\binom{100}{1} (0.02)^1 (0.98)^{99} = 100 \\times 0.02 \\times 0.98^{99} \\approx 0.271$$\n\n## Applications in AI and ML\n\n1. **Classification Accuracy**: Number of correct predictions in n test cases\n2. **Binary Classification**: Count of positive predictions\n3. **A/B Testing**: Number of conversions in treatment group\n4. **Neural Network Training**: Count of training samples where loss < threshold\n5. **Sentiment Analysis**: Number of positive sentiments in n reviews",
          "questions": [
            {
              "id": "binomial-3-2-1",
              "type": "typing",
              "question": "What does the Binomial distribution model?",
              "correctAnswer": [
                "number of successes in n independent Bernoulli trials",
                "number of successes in n trials",
                "successes in independent trials"
              ],
              "xp": 3,
              "explanation": "The Binomial distribution models the number of successes in n independent Bernoulli trials, each with the same success probability p"
            },
            {
              "id": "binomial-3-2-2",
              "type": "typing",
              "question": "What are the two parameters of a Binomial distribution?",
              "correctAnswer": [
                "n and p",
                "n, p",
                "number of trials and probability of success"
              ],
              "xp": 3,
              "explanation": "The Binomial distribution has two parameters: n (number of trials) and p (probability of success on each trial)"
            },
            {
              "id": "binomial-3-2-3",
              "type": "typing",
              "question": "What is the PMF formula for the Binomial distribution?",
              "correctAnswer": [
                "P(X=k) = C(n,k) p^k (1-p)^(n-k)",
                "binom(n,k) p^k (1-p)^(n-k)",
                "n choose k times p^k times (1-p)^(n-k)"
              ],
              "xp": 3,
              "explanation": "The Binomial PMF is P(X=k) = C(n,k) \u00d7 p^k \u00d7 (1-p)^(n-k), where C(n,k) is the binomial coefficient"
            },
            {
              "id": "binomial-3-2-4",
              "type": "multiple-choice",
              "question": "Which of these is NOT required for a Binomial experiment?",
              "options": [
                "Fixed number of trials",
                "Independent trials",
                "Constant probability of success",
                "Varying probability between trials"
              ],
              "correct": 3,
              "xp": 2,
              "explanation": "A Binomial experiment requires constant probability p across all trials. Varying probability would violate this assumption"
            },
            {
              "id": "binomial-3-2-5",
              "type": "typing",
              "question": "What is the expected value of a Binomial distribution?",
              "correctAnswer": [
                "n * p",
                "n times p",
                "np"
              ],
              "xp": 4,
              "explanation": "The expected value of a Binomial distribution is E[X] = n \u00d7 p. On average, you get np successes in n trials"
            },
            {
              "id": "binomial-3-2-6",
              "type": "typing",
              "question": "What is the variance of a Binomial distribution?",
              "correctAnswer": [
                "n * p * (1-p)",
                "n p (1-p)",
                "n times p times (1-p)"
              ],
              "xp": 4,
              "explanation": "The variance of a Binomial distribution is Var(X) = n \u00d7 p \u00d7 (1-p). This comes from summing n independent Bernoulli variances"
            },
            {
              "id": "binomial-3-2-7",
              "type": "typing",
              "question": "In a Binomial distribution with n=10 and p=0.5, what is E[X]?",
              "correctAnswer": [
                "5",
                "five",
                "10*0.5"
              ],
              "xp": 4,
              "explanation": "E[X] = n \u00d7 p = 10 \u00d7 0.5 = 5. On average, you get 5 successes in 10 trials with a 50% success rate"
            },
            {
              "id": "binomial-3-2-8",
              "type": "typing",
              "question": "What is C(5,2) (5 choose 2)?",
              "correctAnswer": [
                "10",
                "ten",
                "5!/(2!3!)"
              ],
              "xp": 4,
              "explanation": "C(5,2) = 5!/(2!\u00d73!) = (5\u00d74\u00d73\u00d72\u00d71)/(2\u00d71\u00d73\u00d72\u00d71) = 20/2 = 10. There are 10 ways to choose 2 items from 5"
            },
            {
              "id": "binomial-3-2-9",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/binomial-varying-n.png`, what happens to the shape as n increases?",
              "options": [
                "Becomes more symmetric",
                "Becomes more skewed",
                "Stays the same",
                "Becomes narrower"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "As n increases, the Binomial distribution becomes more symmetric and approaches a bell shape (normal distribution)"
            },
            {
              "id": "binomial-3-2-10",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/binomial-varying-p.png`, when is the Binomial distribution symmetric?",
              "options": [
                "When p = 0.5",
                "When p < 0.5",
                "When p > 0.5",
                "Always symmetric"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "The Binomial distribution is symmetric when p = 0.5, right-skewed when p < 0.5, and left-skewed when p > 0.5"
            },
            {
              "id": "binomial-3-2-11",
              "type": "multiple-choice",
              "question": "What is the sum of n independent Bernoulli(p) trials?",
              "options": [
                "Poisson distribution",
                "Binomial distribution",
                "Normal distribution",
                "Exponential distribution"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "The sum of n independent Bernoulli(p) trials follows a Binomial(n, p) distribution"
            },
            {
              "id": "binomial-3-2-12",
              "type": "multiple-choice",
              "question": "If n=1, what distribution does the Binomial become?",
              "options": [
                "Poisson",
                "Normal",
                "Bernoulli",
                "Uniform"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "When n=1, the Binomial(n=1, p) distribution is equivalent to the Bernoulli(p) distribution"
            },
            {
              "id": "binomial-3-2-13",
              "type": "typing",
              "question": "Looking at `diagrams/binomial-bernoulli-relationship.png`, how does Binomial relate to Bernoulli?",
              "correctAnswer": [
                "Binomial is sum of n independent Bernoulli trials",
                "sum of Bernoulli",
                "n Bernoulli trials summed"
              ],
              "xp": 5,
              "explanation": "The Binomial distribution represents the sum of n independent Bernoulli trials. This is why it's used for counting successes"
            },
            {
              "id": "binomial-3-2-14",
              "type": "typing",
              "question": "In 20 coin flips with a fair coin, what is the expected number of heads?",
              "correctAnswer": [
                "10",
                "ten",
                "20*0.5"
              ],
              "xp": 4,
              "explanation": "E[X] = n \u00d7 p = 20 \u00d7 0.5 = 10. You expect 10 heads in 20 fair coin flips"
            },
            {
              "id": "binomial-3-2-15",
              "type": "typing",
              "question": "What is the probability of exactly 3 heads in 5 coin flips (p=0.5)?",
              "correctAnswer": [
                "0.3125",
                "10/32",
                "C(5,3) * 0.5^5"
              ],
              "xp": 5,
              "explanation": "P(X=3) = C(5,3) \u00d7 0.5^3 \u00d7 0.5^2 = 10 \u00d7 0.125 \u00d7 0.25 = 0.3125 = 10/32"
            },
            {
              "id": "binomial-3-2-16",
              "type": "typing",
              "question": "When is a Binomial distribution right-skewed?",
              "correctAnswer": [
                "when p < 0.5",
                "p less than 0.5",
                "p is small"
              ],
              "xp": 5,
              "explanation": "A Binomial distribution is right-skewed when p < 0.5 because most outcomes are failures (0), with a tail extending to the right for successes"
            },
            {
              "id": "binomial-3-2-17",
              "type": "multiple-choice",
              "question": "If the probability of success increases, what happens to the expected value?",
              "options": [
                "Decreases",
                "Stays the same",
                "Increases",
                "Unpredictable"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Expected value E[X] = n \u00d7 p, so as p increases, E[X] increases linearly"
            },
            {
              "id": "binomial-3-2-18",
              "type": "multiple-choice",
              "question": "What does C(n,k) represent in the Binomial formula?",
              "options": [
                "Expected value",
                "Number of ways to choose k successes from n trials",
                "Variance",
                "Probability"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "C(n,k) = n!/(k!(n-k)!) represents the binomial coefficient - the number of ways to choose k successes from n trials"
            }
          ]
        },
        {
          "id": 3,
          "title": "Poisson",
          "unitTitle": "Important Distributions",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Poisson Distribution\n\n## What is the Poisson Distribution?\n\nThe **Poisson distribution** models the number of events occurring in a fixed interval of time or space, given that:\n\n1. Events occur independently\n2. The average rate (\u03bb) of events is constant\n3. Two events cannot occur at the exact same instant\n\n### Key Parameter\n\n**\u03bb (lambda)**: The average rate of events per interval\n\n### Examples of Poisson Processes\n\n1. **Customer arrivals**: Number of customers arriving per hour\n2. **Website clicks**: Number of clicks per minute\n3. **Call center**: Number of calls per hour\n4. **Defects**: Number of defects per square meter of fabric\n5. **Typos**: Number of typos per page of text\n6. **Radioactive decay**: Number of particles emitted per second\n\n## Probability Mass Function (PMF)\n\n$$P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$$\n\nWhere:\n- **\u03bb**: Average rate of events\n- **k**: Number of events (k = 0, 1, 2, ...)\n- **e**: Euler's number (\u2248 2.71828)\n\n### Understanding the Formula\n\n1. **$e^{-\\lambda}$**: Normalization constant\n2. **$\\lambda^k$**: Accounts for the rate and number of events\n3. **$k!$**: Accounts for the number of ways events can occur\n\n**Example**: Average 3 emails per hour (\u03bb=3). Probability of exactly 2 emails:\n\n$$P(X=2) = \\frac{e^{-3} \\cdot 3^2}{2!} = \\frac{0.0498 \\cdot 9}{2} = \\frac{0.448}{2} = 0.224$$\n\nLooking at `diagrams/poisson-varying-lambda.png`, you can see how \u03bb affects the distribution shape.\n\n## Expected Value and Variance\n\n$$E[X] = \\lambda$$\n\n$$\\text{Var}(X) = \\lambda$$\n\n**Key property**: For Poisson distribution, mean = variance = \u03bb!\n\nLooking at `diagrams/poisson-properties.png`, the mean and variance curves overlap perfectly.\n\n**Intuition**: If you average \u03bb events per interval, you expect \u03bb events. The variance also equals \u03bb.\n\n## Shape of the Distribution\n\nLooking at `diagrams/poisson-varying-lambda.png`:\n\n- **\u03bb < 1**: Skewed right (many zeros, tail to the right)\n- **\u03bb = 1**: Moderately skewed\n- **\u03bb > 1**: Approaches symmetry as \u03bb increases\n- **\u03bb is large**: Approaches normal distribution\n\n## Poisson Approximation to Binomial\n\nWhen:\n- n is large (n \u2265 20)\n- p is small (p \u2264 0.05)\n- np is moderate (np \u2264 10)\n\nThen Binomial(n, p) \u2248 Poisson(\u03bb = np)\n\n**Example**: n=100, p=0.02\n\n- Binomial: Bin(100, 0.02)\n- Approximation: Poisson(\u03bb = 100 \u00d7 0.02 = 2)\n\nLooking at `diagrams/poisson-properties.png`, the Binomial and Poisson distributions nearly overlap when conditions are met.\n\n## Why Mean = Variance?\n\nThe Poisson distribution has a unique property where mean = variance = \u03bb.\n\n**Intuitive explanation**:\n- The spread of events (variance) depends on the average rate\n- Higher average rate \u2192 more spread\n- The spread equals the average rate\n\n**Mathematical derivation**:\n- E[X] = \u03bb (by definition of \u03bb as average rate)\n- Var(X) = \u03bb (derived from PMF)\n\n## Applications in AI and ML\n\nLooking at `diagrams/poisson-applications.png`:\n\n1. **Natural Language Processing**: Word frequency in documents\n2. **Network Traffic**: Packet arrivals per time unit\n3. **Customer Service**: Request arrivals\n4. **Anomaly Detection**: Unusual event counts trigger alerts\n5. **Queueing Theory**: Modeling service systems\n\n## Example: Customer Arrivals\n\nA store averages 4 customers per hour (\u03bb=4).\n\n**Expected customers per hour:** E[X] = 4\n\n**Variance:** Var(X) = 4\n\n**Standard deviation:** \u03c3 = \u221a4 = 2\n\n**Probability of exactly 0 customers:**\n$$P(X=0) = \\frac{e^{-4} \\cdot 4^0}{0!} = e^{-4} \\cdot 1 \\cdot 1 \\approx 0.018$$\n\n**Probability of exactly 4 customers:**\n$$P(X=4) = \\frac{e^{-4} \\cdot 4^4}{4!} = \\frac{0.018 \\cdot 256}{24} \\approx 0.195$$\n\n**Probability of more than 6 customers:**\n$$P(X > 6) = 1 - P(X \\leq 6) = 1 - \\sum_{k=0}^{6} \\frac{e^{-4} 4^k}{k!}$$\n\n## Sum of Independent Poisson Variables\n\nIf X ~ Poisson(\u03bb\u2081) and Y ~ Poisson(\u03bb\u2082) are independent:\n\n$$X + Y \\sim \\text{Poisson}(\\lambda_1 + \\lambda_2)$$\n\n**Example**: If one process averages 2 events/hour and another averages 3 events/hour, the combined process averages 5 events/hour.\n\n## Poisson Process\n\nA Poisson process is a continuous-time stochastic process where events occur continuously and independently at a constant average rate \u03bb.\n\n**Properties**:\n- Number of events in interval t follows Poisson(\u03bbt)\n- Time between events follows Exponential(\u03bb)\n\n## When NOT to Use Poisson\n\n\u274c Don't use Poisson when:\n- Events are not independent\n- Rate varies over time\n- Events can occur simultaneously\n- Rate is not constant\n\n\u2705 Do use Poisson when:\n- Counting rare events in fixed intervals\n- Events occur independently\n- Constant average rate",
          "questions": [
            {
              "id": "poisson-3-3-1",
              "type": "typing",
              "question": "What does the Poisson distribution model?",
              "correctAnswer": [
                "number of events in a fixed interval",
                "events in time or space",
                "count of events"
              ],
              "xp": 3,
              "explanation": "The Poisson distribution models the number of events occurring in a fixed interval of time or space given a constant average rate \u03bb"
            },
            {
              "id": "poisson-3-3-2",
              "type": "typing",
              "question": "What is the parameter \u03bb in a Poisson distribution?",
              "correctAnswer": [
                "average rate of events",
                "average events per interval",
                "mean number of events"
              ],
              "xp": 3,
              "explanation": "\u03bb (lambda) is the average rate of events per interval in a Poisson distribution"
            },
            {
              "id": "poisson-3-3-3",
              "type": "typing",
              "question": "What is the PMF formula for the Poisson distribution?",
              "correctAnswer": [
                "P(X=k) = e^(-\u03bb) \u03bb^k / k!",
                "e to the negative lambda times lambda to the k over k factorial"
              ],
              "xp": 3,
              "explanation": "The Poisson PMF is P(X=k) = (e^(-\u03bb) \u00d7 \u03bb^k) / k! for k = 0, 1, 2, ..."
            },
            {
              "id": "poisson-3-3-4",
              "type": "multiple-choice",
              "question": "Which of these is a valid Poisson process example?",
              "options": [
                "Rolling a die",
                "Customer arrivals per hour",
                "Height of people",
                "Flipping a coin"
              ],
              "correct": 1,
              "xp": 2,
              "explanation": "Customer arrivals per hour is a Poisson process - events occur continuously at an average rate \u03bb"
            },
            {
              "id": "poisson-3-3-5",
              "type": "typing",
              "question": "What is the expected value of a Poisson distribution?",
              "correctAnswer": [
                "\u03bb",
                "lambda",
                "average rate"
              ],
              "xp": 4,
              "explanation": "For a Poisson distribution, E[X] = \u03bb. The expected value equals the average rate parameter"
            },
            {
              "id": "poisson-3-3-6",
              "type": "typing",
              "question": "What is the variance of a Poisson distribution?",
              "correctAnswer": [
                "\u03bb",
                "lambda",
                "same as mean"
              ],
              "xp": 4,
              "explanation": "For a Poisson distribution, Var(X) = \u03bb. The unique property is that mean = variance = \u03bb"
            },
            {
              "id": "poisson-3-3-7",
              "type": "typing",
              "question": "If \u03bb=5, what is the standard deviation of a Poisson distribution?",
              "correctAnswer": [
                "sqrt(5)",
                "square root of 5",
                "\u221a5"
              ],
              "xp": 4,
              "explanation": "Standard deviation = \u221aVar(X) = \u221a\u03bb = \u221a5 \u2248 2.236"
            },
            {
              "id": "poisson-3-3-8",
              "type": "typing",
              "question": "Looking at `diagrams/poisson-varying-lambda.png`, what happens to the shape as \u03bb increases?",
              "correctAnswer": [
                "becomes more symmetric",
                "more symmetric",
                "approaches normal"
              ],
              "xp": 4,
              "explanation": "As \u03bb increases, the Poisson distribution becomes more symmetric and approaches a normal distribution"
            },
            {
              "id": "poisson-3-3-9",
              "type": "multiple-choice",
              "question": "When can Poisson approximate Binomial?",
              "options": [
                "When n is small and p is large",
                "When n is large and p is small",
                "When n and p are both large",
                "Never"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Poisson can approximate Binomial when n is large (\u226520), p is small (\u22640.05), and np is moderate (\u226410)"
            },
            {
              "id": "poisson-3-3-10",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/poisson-applications.png`, which is NOT a Poisson application?",
              "options": [
                "Website clicks per minute",
                "Call center calls per hour",
                "Height of a person",
                "Typos per page"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Height is a continuous measurement, not a count of events. Poisson models counts of events in intervals"
            },
            {
              "id": "poisson-3-3-11",
              "type": "multiple-choice",
              "question": "What is P(X=0) for a Poisson distribution with \u03bb=2?",
              "options": [
                "0",
                "e^-2",
                "2",
                "2e^-2"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "P(X=0) = (e^(-\u03bb) \u00d7 \u03bb^0) / 0! = e^(-\u03bb) \u00d7 1 / 1 = e^(-2) \u2248 0.135"
            },
            {
              "id": "poisson-3-3-12",
              "type": "multiple-choice",
              "question": "If X ~ Poisson(3) and Y ~ Poisson(4) are independent, what is X+Y distributed as?",
              "options": [
                "Poisson(3)",
                "Poisson(4)",
                "Poisson(7)",
                "Poisson(12)"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "The sum of independent Poisson variables is Poisson with rate equal to the sum: X+Y ~ Poisson(3+4) = Poisson(7)"
            },
            {
              "id": "poisson-3-3-13",
              "type": "typing",
              "question": "Looking at `diagrams/poisson-properties.png`, what is unique about Poisson mean and variance?",
              "correctAnswer": [
                "they are equal",
                "mean equals variance",
                "both equal \u03bb"
              ],
              "xp": 5,
              "explanation": "The Poisson distribution has the unique property that E[X] = Var(X) = \u03bb. The mean and variance are equal!"
            },
            {
              "id": "poisson-3-3-14",
              "type": "typing",
              "question": "If \u03bb=3, what is P(X=3) for a Poisson distribution?",
              "correctAnswer": [
                "e^-3 * 27 / 6",
                "(e^-3 * 3^3) / 3!",
                "approximately 0.224"
              ],
              "xp": 5,
              "explanation": "P(X=3) = (e^(-3) \u00d7 3^3) / 3! = (e^(-3) \u00d7 27) / 6 \u2248 0.224"
            },
            {
              "id": "poisson-3-3-15",
              "type": "typing",
              "question": "What does e represent in the Poisson PMF?",
              "correctAnswer": [
                "Euler's number",
                "2.71828",
                "natural number"
              ],
              "xp": 5,
              "explanation": "e is Euler's number, approximately 2.71828. It's the base of natural logarithms"
            },
            {
              "id": "poisson-3-3-16",
              "type": "typing",
              "question": "When is a Poisson distribution right-skewed?",
              "correctAnswer": [
                "when \u03bb < 1",
                "lambda less than 1",
                "small lambda"
              ],
              "xp": 5,
              "explanation": "A Poisson distribution is right-skewed when \u03bb < 1 because there are many zeros and few higher values"
            },
            {
              "id": "poisson-3-3-17",
              "type": "multiple-choice",
              "question": "In a Poisson process, what distribution does the time between events follow?",
              "options": [
                "Poisson",
                "Exponential",
                "Normal",
                "Uniform"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "In a Poisson process, the time between events follows an Exponential distribution with rate \u03bb"
            },
            {
              "id": "poisson-3-3-18",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/poisson-properties.png`, what condition allows Poisson to approximate Binomial?",
              "options": [
                "n small, p large",
                "n large, p small",
                "n small, p small",
                "n large, p large"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "Poisson approximates Binomial when n is large (\u226520) and p is small (\u22640.05), with \u03bb = np"
            }
          ]
        },
        {
          "id": 4,
          "title": "Uniform",
          "unitTitle": "Important Distributions",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Uniform Distribution\n\n## What is the Uniform Distribution?\n\nThe **Uniform distribution** is the simplest probability distribution where all outcomes are **equally likely**.\n\nThere are two types:\n\n1. **Discrete Uniform**: Countable outcomes, each equally likely\n2. **Continuous Uniform**: Continuous outcomes, equal probability density over an interval\n\n## Discrete Uniform Distribution\n\n### Definition\n\nA discrete random variable X has a discrete uniform distribution on {a, a+1, ..., b} if:\n\n$$P(X = k) = \\frac{1}{b - a + 1} \\text{ for } k = a, a+1, ..., b$$\n\n### Examples\n\n1. **Die Roll**: Each face {1, 2, 3, 4, 5, 6} has probability 1/6\n2. **Coin Flip**: Each outcome {Heads, Tails} has probability 1/2\n3. **Day of Week**: Each day {Mon, Tue, ..., Sun} has probability 1/7\n4. **Card Suit**: Each suit {Hearts, Diamonds, Clubs, Spades} has probability 1/4\n\nLooking at `diagrams/uniform-discrete-continuous.png`, the left panel shows a discrete uniform (die roll).\n\n### Expected Value (Mean)\n\n$$E[X] = \\frac{a + b}{2}$$\n\nThis is the midpoint of the range.\n\n**Example**: Die roll (a=1, b=6)\n$$E[X] = \\frac{1 + 6}{2} = 3.5$$\n\n### Variance\n\n$$\\text{Var}(X) = \\frac{(b - a + 1)^2 - 1}{12}$$\n\n**Example**: Die roll\n$$\\text{Var}(X) = \\frac{(6 - 1 + 1)^2 - 1}{12} = \\frac{36 - 1}{12} = \\frac{35}{12} \\approx 2.92$$\n\n## Continuous Uniform Distribution\n\n### Definition\n\nA continuous random variable X has a uniform distribution on [a, b] if:\n\n$$f(x) = \\begin{cases}\n\\frac{1}{b - a} & \\text{if } a \\leq x \\leq b \\\\ 0 & \\text{otherwise}\n\\end{cases}$$\n\n### PDF Visualization\n\nLooking at `diagrams/uniform-discrete-continuous.png`, the right panel shows a continuous uniform:\n- Rectangle from a to b\n- Height = 1/(b-a)\n- Area under curve = 1\n\n### CDF\n\n$$F(x) = \\begin{cases}\n0 & \\text{if } x < a \\\\\n\\frac{x - a}{b - a} & \\text{if } a \\leq x \\leq b \\\\\n1 & \\text{if } x > b\n\\end{cases}$$\n\nLooking at `diagrams/uniform-intervals-cdf.png`, the right panel shows the CDF as a linear function increasing from 0 to 1.\n\n### Expected Value (Mean)\n\n$$E[X] = \\frac{a + b}{2}$$\n\nSame formula as discrete! The midpoint of the interval.\n\nLooking at `diagrams/uniform-mean-variance.png`, the left panel shows the expected value.\n\n**Example**: Uniform(0, 10)\n$$E[X] = \\frac{0 + 10}{2} = 5$$\n\n### Variance\n\n$$\\text{Var}(X) = \\frac{(b - a)^2}{12}$$\n\nLooking at `diagrams/uniform-mean-variance.png`, the right panel shows how variance increases with interval width.\n\n**Example**: Uniform(0, 10)\n$$\\text{Var}(X) = \\frac{(10 - 0)^2}{12} = \\frac{100}{12} \\approx 8.33$$\n\n### Standard Deviation\n\n$$\\sigma = \\sqrt{\\text{Var}(X)} = \\frac{b - a}{2\\sqrt{3}}$$\n\n## Applications in AI and ML\n\n1. **Random Sampling**: Generating random numbers uniformly\n2. **Data Augmentation**: Random transformations with uniform parameters\n3. **Bayesian Priors**: Uninformative prior (all values equally likely)\n4. **Monte Carlo Methods**: Sampling from uniform distribution\n5. **Initialization**: Weight initialization in neural networks\n\n## Properties\n\n### Key Properties of Uniform Distribution\n\n1. **Equal probability**: All outcomes equally likely\n2. **Maximum entropy**: Among all distributions with given range, uniform has maximum uncertainty\n3. **Flat PDF**: Constant density over the support\n4. **Linear CDF**: Straight line from 0 to 1 (continuous case)\n\n## Example: Random Number Generator\n\nA random number generator produces uniform values in [0, 1].\n\n- a = 0, b = 1\n- f(x) = 1 for 0 \u2264 x \u2264 1\n- E[X] = 0.5\n- Var(X) = 1/12 \u2248 0.0833\n\n**Probability questions:**\n\nP(X < 0.3) = 0.3\n\nP(X > 0.7) = 0.3\n\nP(0.2 < X < 0.8) = 0.6\n\n## Example: Waiting Time\n\nSuppose a bus arrives uniformly between 0 and 10 minutes after you arrive at the stop.\n\n**Expected wait time:** E[X] = (0 + 10)/2 = 5 minutes\n\n**Variance:** Var(X) = (10 - 0)\u00b2/12 = 100/12 \u2248 8.33\n\n**Probability of waiting less than 3 minutes:**\n$$P(X < 3) = F(3) = \\frac{3 - 0}{10 - 0} = 0.3$$\n\n**Probability of waiting more than 7 minutes:**\n$$P(X > 7) = 1 - F(7) = 1 - \\frac{7 - 0}{10 - 0} = 1 - 0.7 = 0.3$$",
          "questions": [
            {
              "id": "uniform-3-4-1",
              "type": "typing",
              "question": "What is the key characteristic of a uniform distribution?",
              "correctAnswer": [
                "all outcomes are equally likely",
                "equal probability",
                "every outcome has same chance"
              ],
              "xp": 3,
              "explanation": "The key characteristic of a uniform distribution is that all outcomes are equally likely - each has the same probability"
            },
            {
              "id": "uniform-3-4-2",
              "type": "typing",
              "question": "What are the two types of uniform distributions?",
              "correctAnswer": [
                "discrete and continuous",
                "discrete uniform and continuous uniform"
              ],
              "xp": 3,
              "explanation": "There are two types of uniform distributions: discrete uniform (countable outcomes) and continuous uniform (continuous interval)"
            },
            {
              "id": "uniform-3-4-3",
              "type": "typing",
              "question": "For a continuous uniform distribution on [a, b], what is the PDF f(x)?",
              "correctAnswer": [
                "1/(b-a)",
                "1 divided by (b-a)",
                "1 over (b minus a)"
              ],
              "xp": 3,
              "explanation": "For continuous uniform on [a, b], the PDF is f(x) = 1/(b-a) for a \u2264 x \u2264 b, and 0 otherwise"
            },
            {
              "id": "uniform-3-4-4",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/uniform-discrete-continuous.png`, which side shows discrete uniform?",
              "options": [
                "Left side (die roll)",
                "Right side (continuous)",
                "Both sides",
                "Neither side"
              ],
              "correct": 0,
              "xp": 2,
              "explanation": "The left panel shows a discrete uniform distribution (die roll), while the right panel shows a continuous uniform distribution"
            },
            {
              "id": "uniform-3-4-5",
              "type": "typing",
              "question": "What is the expected value of a uniform distribution?",
              "correctAnswer": [
                "(a+b)/2",
                "midpoint",
                "average of endpoints"
              ],
              "xp": 4,
              "explanation": "For both discrete and continuous uniform, E[X] = (a + b)/2, the midpoint of the range"
            },
            {
              "id": "uniform-3-4-6",
              "type": "typing",
              "question": "For a continuous uniform on [0, 10], what is the expected value?",
              "correctAnswer": [
                "5",
                "five",
                "(0+10)/2"
              ],
              "xp": 4,
              "explanation": "E[X] = (a + b)/2 = (0 + 10)/2 = 5"
            },
            {
              "id": "uniform-3-4-7",
              "type": "typing",
              "question": "What is the variance of a continuous uniform distribution?",
              "correctAnswer": [
                "(b-a)^2 / 12",
                "(b minus a) squared over 12",
                "width squared over 12"
              ],
              "xp": 4,
              "explanation": "For continuous uniform on [a, b], Var(X) = (b - a)\u00b2 / 12"
            },
            {
              "id": "uniform-3-4-8",
              "type": "typing",
              "question": "For a fair die roll (uniform on {1,2,3,4,5,6}), what is P(X=3)?",
              "correctAnswer": [
                "1/6",
                "one sixth",
                "0.167"
              ],
              "xp": 4,
              "explanation": "For a fair die, each face has equal probability: P(X=3) = 1/6"
            },
            {
              "id": "uniform-3-4-9",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/uniform-mean-variance.png`, what happens to variance as the interval width increases?",
              "options": [
                "Decreases",
                "Stays the same",
                "Increases",
                "Unpredictable"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Variance increases with interval width: Var(X) = (b-a)\u00b2/12. Wider intervals have more spread"
            },
            {
              "id": "uniform-3-4-10",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/uniform-intervals-cdf.png`, what is the shape of the CDF for continuous uniform?",
              "options": [
                "Exponential curve",
                "Straight line",
                "Step function",
                "Bell curve"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "The CDF for continuous uniform is a straight line increasing linearly from 0 to 1 over the interval"
            },
            {
              "id": "uniform-3-4-11",
              "type": "multiple-choice",
              "question": "For Uniform(0, 1), what is P(X < 0.5)?",
              "options": [
                "0",
                "0.25",
                "0.5",
                "1"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "For Uniform(0, 1), the CDF is F(x) = x, so P(X < 0.5) = 0.5"
            },
            {
              "id": "uniform-3-4-12",
              "type": "multiple-choice",
              "question": "Which distribution has maximum entropy for a given range?",
              "options": [
                "Normal",
                "Uniform",
                "Exponential",
                "Poisson"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "The uniform distribution has maximum entropy among all distributions with a given range, representing maximum uncertainty"
            },
            {
              "id": "uniform-3-4-13",
              "type": "typing",
              "question": "Looking at `diagrams/uniform-discrete-continuous.png`, what is the height of the PDF for Uniform(0, 5)?",
              "correctAnswer": [
                "0.2",
                "1/5",
                "one fifth"
              ],
              "xp": 5,
              "explanation": "For Uniform(0, 5), the height is 1/(b-a) = 1/5 = 0.2"
            },
            {
              "id": "uniform-3-4-14",
              "type": "typing",
              "question": "For a uniform distribution, where is the mean located?",
              "correctAnswer": [
                "at the midpoint",
                "in the middle",
                "at (a+b)/2"
              ],
              "xp": 5,
              "explanation": "The mean of a uniform distribution is always at the midpoint of the range: (a+b)/2"
            },
            {
              "id": "uniform-3-4-15",
              "type": "typing",
              "question": "What is the standard deviation formula for continuous uniform?",
              "correctAnswer": [
                "(b-a) / (2*sqrt(3))",
                "(b-a)/(2\u221a3)",
                "width over 2 root 3"
              ],
              "xp": 5,
              "explanation": "Standard deviation = \u221aVar(X) = (b-a)/(2\u221a3)"
            },
            {
              "id": "uniform-3-4-16",
              "type": "typing",
              "question": "For Uniform(2, 8), what is the variance?",
              "correctAnswer": [
                "3",
                "36/12",
                "(8-2)^2/12"
              ],
              "xp": 4,
              "explanation": "Var(X) = (b-a)\u00b2/12 = (8-2)\u00b2/12 = 36/12 = 3"
            },
            {
              "id": "uniform-3-4-17",
              "type": "multiple-choice",
              "question": "If X ~ Uniform(0, 1), what is P(X > 0.8)?",
              "options": [
                "0.2",
                "0.5",
                "0.8",
                "0.02"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "P(X > 0.8) = 1 - F(0.8) = 1 - 0.8 = 0.2"
            },
            {
              "id": "uniform-3-4-18",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/uniform-mean-variance.png`, which interval has the largest variance?",
              "options": [
                "(0, 2)",
                "(0, 5)",
                "(0, 10)",
                "All have same variance"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "Variance increases with interval width: (0,10) has largest variance at 100/12 \u2248 8.33"
            }
          ]
        },
        {
          "id": 5,
          "title": "Gaussian",
          "unitTitle": "Important Distributions",
          "xp": 92,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Gaussian (Normal) Distribution\n\n## What is the Gaussian Distribution?\n\nThe **Gaussian distribution**, also called the **Normal distribution**, is the most important probability distribution in statistics and machine learning. It's defined by two parameters:\n\n- **\u03bc (mu)**: Mean (center of the distribution)\n- **\u03c3 (sigma)**: Standard deviation (spread of the distribution)\n\n### Notation\n\n$$X \\sim \\mathcal{N}(\\mu, \\sigma^2)$$\n\nRead as \"X follows a normal distribution with mean \u03bc and variance \u03c3\u00b2\"\n\n## Probability Density Function (PDF)\n\n$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$$\n\n### Understanding the Formula\n\n1. **$\\frac{1}{\\sigma\\sqrt{2\\pi}}$**: Normalization constant (ensures total area = 1)\n2. **$\\mu$**: Mean, shifts the distribution left/right\n3. **$\\sigma$**: Standard deviation, controls spread\n4. **$\\frac{x-\\mu}{\\sigma}$**: Standardized z-score\n5. **$e^{-(x-\\mu)^2/(2\\sigma^2)}$**: Bell curve shape\n\n### Standard Normal Distribution\n\nWhen \u03bc = 0 and \u03c3 = 1:\n\n$$f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}}$$\n\nLooking at `diagrams/normal-varying-params.png`, you can see how \u03bc and \u03c3 affect the distribution.\n\n## Visualizing the Normal Distribution\n\nLooking at `diagrams/normal-varying-params.png`:\n\n**Effect of \u03bc (mean):**\n- Shifts the curve left or right\n- Does not change the shape\n- \u03bc = -2: Shifted left\n- \u03bc = 0: Centered\n- \u03bc = 2: Shifted right\n\n**Effect of \u03c3 (standard deviation):**\n- Controls the spread/width of the curve\n- \u03c3 = 0.5: Tall and narrow\n- \u03c3 = 1: Standard spread\n- \u03c3 = 3: Short and wide\n- Larger \u03c3 = wider distribution\n\n## Empirical Rule (68-95-99.7 Rule)\n\nLooking at `diagrams/normal-empirical-rule.png`:\n\n- **68%** of values fall within 1\u03c3 of \u03bc: P(\u03bc - \u03c3 < X < \u03bc + \u03c3) \u2248 0.68\n- **95%** of values fall within 2\u03c3 of \u03bc: P(\u03bc - 2\u03c3 < X < \u03bc + 2\u03c3) \u2248 0.95\n- **99.7%** of values fall within 3\u03c3 of \u03bc: P(\u03bc - 3\u03c3 < X < \u03bc + 3\u03c3) \u2248 0.997\n\n**For standard normal (\u03bc=0, \u03c3=1):**\n- P(-1 < X < 1) \u2248 0.68\n- P(-2 < X < 2) \u2248 0.95\n- P(-3 < X < 3) \u2248 0.997\n\n## Expected Value and Variance\n\n$$E[X] = \\mu$$\n\n$$\\text{Var}(X) = \\sigma^2$$\n\nThe mean \u03bc is at the center, and the variance \u03c3\u00b2 controls the spread.\n\n## Cumulative Distribution Function (CDF)\n\n$$F(x) = \\Phi\\left(\\frac{x - \\mu}{\\sigma}\\right)$$\n\nWhere \u03a6 is the standard normal CDF (no closed-form expression).\n\nLooking at `diagrams/normal-applications-cdf.png`, the right panel shows the CDF as an S-shaped curve.\n\n**Key values for standard normal:**\n- \u03a6(-2) \u2248 0.0228\n- \u03a6(-1) \u2248 0.1587\n- \u03a6(0) = 0.5\n- \u03a6(1) \u2248 0.8413\n- \u03a6(2) \u2248 0.9772\n\n## Z-Score (Standardization)\n\nTo find probabilities, convert to z-score:\n\n$$Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$$\n\n**Example**: X ~ N(100, 15\u00b2). Find P(X < 115):\n\n$$Z = \\frac{115 - 100}{15} = 1$$\n$$P(X < 115) = P(Z < 1) = \\Phi(1) \\approx 0.8413$$\n\n## Why is the Normal Distribution So Important?\n\n### 1. Central Limit Theorem\n\nThe sum of many independent random variables approaches a normal distribution, regardless of their original distributions.\n\n### 2. Natural Phenomena\n\nMany natural processes follow normal distribution:\n- Height, weight, blood pressure\n- Measurement errors\n- Test scores\n\n### 3. Machine Learning\n\nLooking at `diagrams/normal-applications-cdf.png`:\n\n- **Neural Networks**: Weights initialized from normal distribution\n- **Gaussian Processes**: Bayesian non-parametric models\n- **Gaussian Naive Bayes**: Classification algorithm\n- **Linear Regression**: Assumes normally distributed errors\n\n## Properties of the Normal Distribution\n\n1. **Symmetric**: Bell-shaped, symmetric around \u03bc\n2. **Unimodal**: Single peak at \u03bc\n3. **Asymptotic**: Approaches 0 as x \u2192 \u00b1\u221e\n4. **Inflection Points**: At \u03bc \u00b1 \u03c3\n5. **Total Area**: Area under PDF = 1\n6. **Defined for all real numbers**: Support is (-\u221e, \u221e)\n\n## Applications\n\n### Example 1: Human Heights\n\nAdult male heights ~ N(170cm, 10\u00b2)\n\n- Mean height: 170 cm\n- Standard deviation: 10 cm\n- P(X > 180cm) = P(Z > 1) = 1 - 0.8413 = 0.1587\n- P(160cm < X < 180cm) = P(-1 < Z < 1) \u2248 0.68\n\n### Example 2: Test Scores\n\nTest scores ~ N(75, 10\u00b2)\n\n- Mean score: 75\n- Standard deviation: 10\n- P(X > 85) = P(Z > 1) \u2248 0.1587\n- P(X < 55) = P(Z < -2) \u2248 0.0228\n\n### Example 3: Quality Control\n\nPart lengths ~ N(10mm, 0.1\u00b2)\n\n- Mean length: 10mm\n- Standard deviation: 0.1mm\n- P(9.9 < X < 10.1) = P(-1 < Z < 1) \u2248 0.68",
          "questions": [
            {
              "id": "normal-3-5-1",
              "type": "typing",
              "question": "What are the two parameters of a Gaussian distribution?",
              "correctAnswer": [
                "\u03bc and \u03c3",
                "mean and standard deviation",
                "mu and sigma"
              ],
              "xp": 3,
              "explanation": "The Gaussian (Normal) distribution has two parameters: \u03bc (mu) for the mean and \u03c3 (sigma) for the standard deviation"
            },
            {
              "id": "normal-3-5-2",
              "type": "typing",
              "question": "What is another name for the Gaussian distribution?",
              "correctAnswer": [
                "normal distribution",
                "Normal",
                "Normal distribution"
              ],
              "xp": 3,
              "explanation": "The Gaussian distribution is also commonly called the Normal distribution"
            },
            {
              "id": "normal-3-5-3",
              "type": "typing",
              "question": "What is the Empirical Rule (68-95-99.7 rule)?",
              "correctAnswer": [
                "68% within 1\u03c3, 95% within 2\u03c3, 99.7% within 3\u03c3",
                "68-95-99.7",
                "percentages within standard deviations"
              ],
              "xp": 3,
              "explanation": "The Empirical Rule states: 68% within 1\u03c3, 95% within 2\u03c3, and 99.7% within 3\u03c3 of the mean"
            },
            {
              "id": "normal-3-5-4",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/normal-varying-params.png`, what does \u03bc control?",
              "options": [
                "Spread of the distribution",
                "Center/position of the distribution",
                "Height of the curve",
                "Number of peaks"
              ],
              "correct": 1,
              "xp": 2,
              "explanation": "The mean \u03bc controls the center/position of the distribution, shifting it left or right without changing the shape"
            },
            {
              "id": "normal-3-5-5",
              "type": "typing",
              "question": "What is the expected value of a normal distribution?",
              "correctAnswer": [
                "\u03bc",
                "mu",
                "mean"
              ],
              "xp": 4,
              "explanation": "For a normal distribution N(\u03bc, \u03c3\u00b2), the expected value E[X] = \u03bc, the mean parameter"
            },
            {
              "id": "normal-3-5-6",
              "type": "typing",
              "question": "What is the variance of a normal distribution?",
              "correctAnswer": [
                "\u03c3^2",
                "sigma squared",
                "standard deviation squared"
              ],
              "xp": 4,
              "explanation": "For a normal distribution N(\u03bc, \u03c3\u00b2), the variance Var(X) = \u03c3\u00b2"
            },
            {
              "id": "normal-3-5-7",
              "type": "typing",
              "question": "Looking at `diagrams/normal-empirical-rule.png`, what percentage falls within 1 standard deviation?",
              "correctAnswer": [
                "68%",
                "68 percent",
                "0.68"
              ],
              "xp": 4,
              "explanation": "According to the Empirical Rule, approximately 68% of values fall within 1 standard deviation of the mean"
            },
            {
              "id": "normal-3-5-8",
              "type": "typing",
              "question": "What is the standard normal distribution?",
              "correctAnswer": [
                "N(0, 1)",
                "normal with mean 0 and variance 1",
                "\u03bc=0, \u03c3=1"
              ],
              "xp": 4,
              "explanation": "The standard normal distribution is N(0, 1), with mean \u03bc=0 and standard deviation \u03c3=1"
            },
            {
              "id": "normal-3-5-9",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/normal-varying-params.png`, what happens when \u03c3 increases?",
              "options": [
                "Curve becomes taller and narrower",
                "Curve becomes shorter and wider",
                "Curve shifts left",
                "Curve becomes asymmetric"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "When \u03c3 increases, the distribution becomes more spread out: shorter and wider"
            },
            {
              "id": "normal-3-5-10",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/normal-empirical-rule.png`, what percentage falls within 3 standard deviations?",
              "options": [
                "68%",
                "95%",
                "99.7%",
                "100%"
              ],
              "correct": 2,
              "xp": 3,
              "explanation": "According to the Empirical Rule, 99.7% of values fall within 3 standard deviations of the mean"
            },
            {
              "id": "normal-3-5-11",
              "type": "multiple-choice",
              "question": "What is the z-score formula?",
              "options": [
                "z = (x - \u03bc)/\u03c3",
                "z = x/\u03bc",
                "z = \u03c3/x",
                "z = \u03bc/\u03c3"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "The z-score standardizes a value: z = (x - \u03bc)/\u03c3"
            },
            {
              "id": "normal-3-5-12",
              "type": "multiple-choice",
              "question": "For X ~ N(100, 25), what is the standard deviation?",
              "options": [
                "25",
                "5",
                "10",
                "2.5"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "For N(\u03bc, \u03c3\u00b2), variance = \u03c3\u00b2 = 25, so standard deviation \u03c3 = \u221a25 = 5"
            },
            {
              "id": "normal-3-5-13",
              "type": "typing",
              "question": "Looking at `diagrams/normal-applications-cdf.png`, what is \u03a6(0) for standard normal?",
              "correctAnswer": [
                "0.5",
                "one half",
                "0.50"
              ],
              "xp": 5,
              "explanation": "For the standard normal distribution, \u03a6(0) = 0.5 because the distribution is symmetric around 0"
            },
            {
              "id": "normal-3-5-14",
              "type": "typing",
              "question": "What is P(X > \u03bc + 2\u03c3) for a normal distribution?",
              "correctAnswer": [
                "about 0.0228",
                "2.28%",
                "1 - \u03a6(2)"
              ],
              "xp": 5,
              "explanation": "P(X > \u03bc + 2\u03c3) = 1 - \u03a6(2) \u2248 1 - 0.9772 = 0.0228"
            },
            {
              "id": "normal-3-5-15",
              "type": "typing",
              "question": "Why is the normal distribution important in machine learning?",
              "correctAnswer": [
                "central limit theorem and natural phenomena",
                "CLT",
                "many natural processes"
              ],
              "xp": 5,
              "explanation": "The normal distribution is important because of the Central Limit Theorem and because many natural phenomena follow it"
            },
            {
              "id": "normal-3-5-16",
              "type": "typing",
              "question": "For X ~ N(50, 9), what is P(X < 53)?",
              "correctAnswer": [
                "P(Z < 1)",
                "\u03a6(1)",
                "about 0.8413"
              ],
              "xp": 4,
              "explanation": "z = (53-50)/3 = 1, so P(X < 53) = P(Z < 1) = \u03a6(1) \u2248 0.8413"
            },
            {
              "id": "normal-3-5-17",
              "type": "multiple-choice",
              "question": "What theorem states that the sum of many random variables approaches normal?",
              "options": [
                "Bayes' Theorem",
                "Central Limit Theorem",
                "Law of Large Numbers",
                "Pythagorean Theorem"
              ],
              "correct": 1,
              "xp": 3,
              "explanation": "The Central Limit Theorem states that the sum of many independent random variables approaches a normal distribution"
            },
            {
              "id": "normal-3-5-18",
              "type": "multiple-choice",
              "question": "Looking at `diagrams/normal-varying-params.png`, which curve has the smallest spread?",
              "options": [
                "\u03bc=-2, \u03c3=0.5",
                "\u03bc=0, \u03c3=1",
                "\u03bc=2, \u03c3=3",
                "All have same spread"
              ],
              "correct": 0,
              "xp": 3,
              "explanation": "\u03c3=0.5 gives the smallest spread - the curve is tall and narrow"
            }
          ]
        },
        {
          "id": 6,
          "title": "Exponential",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 7,
          "title": "Gamma",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 8,
          "title": "Beta",
          "unitTitle": "Important Distributions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 9,
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
          "id": 1,
          "title": "Expected value",
          "unitTitle": "Expectations",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Variance",
          "unitTitle": "Expectations",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Covariance",
          "unitTitle": "Expectations",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Multivariate Gaussian",
          "unitTitle": "Multivariate Probability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Covariance matrices",
          "unitTitle": "Multivariate Probability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Entropy",
          "unitTitle": "Information Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Cross entropy",
          "unitTitle": "Information Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "KL divergence",
          "unitTitle": "Information Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Mean",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Median",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Mode",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Variance",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "Standard deviation",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
          "title": "Skewness",
          "unitTitle": "Descriptive Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 7,
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
          "id": 1,
          "title": "Sampling",
          "unitTitle": "Statistical Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Confidence intervals",
          "unitTitle": "Statistical Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Hypothesis testing",
          "unitTitle": "Statistical Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Maximum likelihood estimation (MLE)",
          "unitTitle": "Estimation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Prior distributions",
          "unitTitle": "Bayesian Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Posterior distributions",
          "unitTitle": "Bayesian Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Bayesian inference",
          "unitTitle": "Bayesian Statistics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Linear regression",
          "unitTitle": "Regression Analysis",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Logistic regression",
          "unitTitle": "Regression Analysis",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Ridge regression",
          "unitTitle": "Regression Analysis",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Gradient descent",
          "unitTitle": "Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Stochastic gradient descent",
          "unitTitle": "Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Momentum",
          "unitTitle": "Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Adam optimizer",
          "unitTitle": "Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Lagrange multipliers",
          "unitTitle": "Constrained Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Parallel computing",
          "unitTitle": "Systems for ML",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "GPU programming",
          "unitTitle": "Systems for ML",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "CUDA",
          "unitTitle": "Systems for ML",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Data cleaning",
          "unitTitle": "Data Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Handling missing data",
          "unitTitle": "Data Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Feature scaling",
          "unitTitle": "Data Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "ETL pipelines",
          "unitTitle": "Data Pipelines",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Streaming data",
          "unitTitle": "Data Pipelines",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "SQL",
          "unitTitle": "Databases",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "NoSQL",
          "unitTitle": "Databases",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Data lakes",
          "unitTitle": "Databases",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Data warehouses",
          "unitTitle": "Databases",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Linear regression",
          "unitTitle": "Linear Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Logistic regression",
          "unitTitle": "Linear Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Maximum margin classifier",
          "unitTitle": "Support Vector Machines",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Kernel trick",
          "unitTitle": "Support Vector Machines",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Information gain",
          "unitTitle": "Decision Trees",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Gini impurity",
          "unitTitle": "Decision Trees",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Bagging",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Random forests",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Boosting",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Gradient boosting",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "XGBoost",
          "unitTitle": "Ensemble Methods",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
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
          "id": 1,
          "title": "K-means",
          "unitTitle": "Clustering",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Hierarchical clustering",
          "unitTitle": "Clustering",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "DBSCAN",
          "unitTitle": "Clustering",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "PCA",
          "unitTitle": "Dimensionality Reduction",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "t-SNE",
          "unitTitle": "Dimensionality Reduction",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "UMAP",
          "unitTitle": "Dimensionality Reduction",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Kernel density estimation",
          "unitTitle": "Density Estimation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Self-training",
          "unitTitle": "Semi-Supervised Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Label propagation",
          "unitTitle": "Semi-Supervised Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Markov Decision Processes",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Bellman equations",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Value iteration",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Policy iteration",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "Q-learning",
          "unitTitle": "Reinforcement Learning Basics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
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
          "id": 1,
          "title": "Perceptrons",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Activation functions",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Backpropagation",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Loss functions",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "Activation Functions",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
          "title": "ReLU",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 7,
          "title": "Leaky ReLU",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 8,
          "title": "Sigmoid",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 9,
          "title": "Tanh",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 10,
          "title": "GELU",
          "unitTitle": "Neural Network Fundamentals",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 11,
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
          "id": 1,
          "title": "Initialization",
          "unitTitle": "Neural Network Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Batch normalization",
          "unitTitle": "Neural Network Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Dropout",
          "unitTitle": "Neural Network Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Core Concepts",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Convolutions",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Filters",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Padding",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "Stride",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
          "title": "Architectures",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 7,
          "title": "LeNet",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 8,
          "title": "AlexNet",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 9,
          "title": "VGGNet",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 10,
          "title": "ResNet",
          "unitTitle": "Convolutional Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 11,
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
          "id": 1,
          "title": "Core Concepts",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Sequence modeling",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Hidden states",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Vanishing gradients",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "Architectures",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
          "title": "Long Short-Term Memory",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 7,
          "title": "Gated Recurrent Unit",
          "unitTitle": "Recurrent Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 8,
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
          "id": 1,
          "title": "Tokenization",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Stemming",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Lemmatization",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Stopword removal",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "Word Representations",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
          "title": "Bag of Words",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 7,
          "title": "TF-IDF",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 8,
          "title": "Word2Vec",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 9,
          "title": "GloVe",
          "unitTitle": "Text Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 10,
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
          "id": 1,
          "title": "RNNs",
          "unitTitle": "Sequence Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "LSTMs",
          "unitTitle": "Sequence Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Seq2Seq models",
          "unitTitle": "Sequence Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Attention mechanisms",
          "unitTitle": "Sequence Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Self-attention",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Multi-head attention",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Positional encoding",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Feed-forward layers",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "Layer normalization",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
          "title": "Residual connections",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 7,
          "title": "Core Paper",
          "unitTitle": "Transformer Architecture",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 8,
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
          "id": 1,
          "title": "BERT",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "GPT",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "T5",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "RoBERTa",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "PaLM",
          "unitTitle": "Transformer Variants",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
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
          "id": 1,
          "title": "Sparse attention",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Linear attention",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Retrieval-augmented generation (RAG)",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Mixture of experts",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "Long-context transformers",
          "unitTitle": "Advanced Transformer Topics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
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
          "id": 1,
          "title": "Latent variables",
          "unitTitle": "Variational Autoencoders",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "ELBO objective",
          "unitTitle": "Variational Autoencoders",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Generator",
          "unitTitle": "Generative Adversarial Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Discriminator",
          "unitTitle": "Generative Adversarial Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Denoising diffusion",
          "unitTitle": "Diffusion Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Forward diffusion",
          "unitTitle": "Diffusion Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Reverse diffusion",
          "unitTitle": "Diffusion Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Score matching",
          "unitTitle": "Diffusion Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Deep Q Networks",
          "unitTitle": "Deep RL",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Policy gradient methods",
          "unitTitle": "Deep RL",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "PPO",
          "unitTitle": "Advanced RL",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "TRPO",
          "unitTitle": "Advanced RL",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Reward models",
          "unitTitle": "RLHF",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Preference learning",
          "unitTitle": "RLHF",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Human feedback training",
          "unitTitle": "RLHF",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Distributed training",
          "unitTitle": "Model Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Mixed precision training",
          "unitTitle": "Model Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Model versioning",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Experiment tracking",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Deployment pipelines",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Tools",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "TensorFlow",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
          "title": "PyTorch",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 7,
          "title": "Kubeflow",
          "unitTitle": "MLOps",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 8,
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
          "id": 1,
          "title": "Vision-language models",
          "unitTitle": "Multimodal AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Audio-language models",
          "unitTitle": "Multimodal AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Interpretability",
          "unitTitle": "Alignment and Safety",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Mechanistic interpretability",
          "unitTitle": "Alignment and Safety",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "AI alignment",
          "unitTitle": "Alignment and Safety",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Parameter scaling",
          "unitTitle": "Scaling Laws",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Data scaling",
          "unitTitle": "Scaling Laws",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Compute scaling",
          "unitTitle": "Scaling Laws",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Understanding methodology",
          "unitTitle": "Reading Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Experimental design",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Statistical validation",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Key Conference Venues",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "NeurIPS",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "ICML",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
          "title": "ICLR",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 7,
          "title": "CVPR",
          "unitTitle": "Writing Papers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 8,
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
          "id": 1,
          "title": "Convex combinations",
          "unitTitle": "Convex Sets",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Affine sets",
          "unitTitle": "Convex Sets",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Jensen's inequality",
          "unitTitle": "Convex Functions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Convex conjugates",
          "unitTitle": "Convex Functions",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Linear programming",
          "unitTitle": "Optimization Problems",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Quadratic programming",
          "unitTitle": "Optimization Problems",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Lagrangian duality",
          "unitTitle": "Duality Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Strong vs weak duality",
          "unitTitle": "Duality Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Saddle points",
          "unitTitle": "Non-Convex Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Local minima vs global minima",
          "unitTitle": "Non-Convex Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Loss landscapes",
          "unitTitle": "Non-Convex Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Gradient flow",
          "unitTitle": "Non-Convex Optimization",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Nesterov momentum",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Adagrad",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Adadelta",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "AdamW",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "LAMB optimizer",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
          "title": "Lion optimizer",
          "unitTitle": "Advanced Optimizers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 7,
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
          "id": 1,
          "title": "Iterative solvers",
          "unitTitle": "Numerical Linear Algebra",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Conjugate gradient",
          "unitTitle": "Numerical Linear Algebra",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Reverse mode AD",
          "unitTitle": "Automatic Differentiation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Forward mode AD",
          "unitTitle": "Automatic Differentiation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Floating-point precision",
          "unitTitle": "Numerical Stability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Overflow/underflow",
          "unitTitle": "Numerical Stability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Gradient clipping",
          "unitTitle": "Numerical Stability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Probably Approximately Correct framework",
          "unitTitle": "PAC Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Sample complexity",
          "unitTitle": "PAC Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Underfitting vs overfitting",
          "unitTitle": "Bias-Variance Tradeoff",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Rademacher complexity",
          "unitTitle": "Generalization Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Minimum description length",
          "unitTitle": "Information-Theoretic Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Information bottleneck principle",
          "unitTitle": "Information-Theoretic Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Directed vs undirected graphs",
          "unitTitle": "Graph Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Adjacency matrices",
          "unitTitle": "Graph Theory",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "PageRank",
          "unitTitle": "Graph Algorithms",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Shortest path algorithms",
          "unitTitle": "Graph Algorithms",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Graph convolution networks",
          "unitTitle": "Graph Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Graph attention networks",
          "unitTitle": "Graph Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Message passing neural networks",
          "unitTitle": "Graph Neural Networks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Edge detection",
          "unitTitle": "Image Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Image filtering",
          "unitTitle": "Image Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Region proposal networks",
          "unitTitle": "Object Detection",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Bounding box regression",
          "unitTitle": "Object Detection",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Architectures",
          "unitTitle": "Object Detection",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "YOLO",
          "unitTitle": "Object Detection",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Semantic segmentation",
          "unitTitle": "Image Segmentation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Instance segmentation",
          "unitTitle": "Image Segmentation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Models:",
          "unitTitle": "Image Segmentation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "U-Net",
          "unitTitle": "Image Segmentation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Patch embeddings",
          "unitTitle": "Vision Transformers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Attention over patches",
          "unitTitle": "Vision Transformers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Example:",
          "unitTitle": "Vision Transformers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "Vision Transformer",
          "unitTitle": "Vision Transformers",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Spectrograms",
          "unitTitle": "Speech Processing",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Acoustic models",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Language models",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Example models:",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "DeepSpeech",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
          "title": "Whisper",
          "unitTitle": "Speech Recognition",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 6,
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
          "id": 1,
          "title": "Autoregressive models (AR)",
          "unitTitle": "Classical Time Series",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Moving average models (MA)",
          "unitTitle": "Classical Time Series",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Temporal convolution networks",
          "unitTitle": "Deep Learning for Time Series",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Transformers for time series",
          "unitTitle": "Deep Learning for Time Series",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Cross-modal embeddings",
          "unitTitle": "Vision-Language Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Contrastive learning",
          "unitTitle": "Vision-Language Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Example models:",
          "unitTitle": "Vision-Language Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "CLIP",
          "unitTitle": "Vision-Language Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Spatiotemporal CNNs",
          "unitTitle": "Video Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Video transformers",
          "unitTitle": "Video Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "InfoNCE loss",
          "unitTitle": "Contrastive Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Positive/negative pairs",
          "unitTitle": "Contrastive Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Methods:",
          "unitTitle": "Contrastive Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "SimCLR",
          "unitTitle": "Contrastive Learning",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Masked language modeling",
          "unitTitle": "Masked Modeling",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Masked image modeling",
          "unitTitle": "Masked Modeling",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Example:",
          "unitTitle": "Masked Modeling",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
          "title": "BERT",
          "unitTitle": "Masked Modeling",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 5,
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
          "id": 1,
          "title": "Confounders",
          "unitTitle": "Causal Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Interventions",
          "unitTitle": "Causal Inference",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Bayesian networks",
          "unitTitle": "Graphical Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Markov random fields",
          "unitTitle": "Graphical Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Adversarial examples",
          "unitTitle": "Adversarial Attacks",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Data poisoning",
          "unitTitle": "Model Security",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Backdoor attacks",
          "unitTitle": "Model Security",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Feature attribution",
          "unitTitle": "Explainable AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "SHAP values",
          "unitTitle": "Explainable AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Circuit analysis in transformers",
          "unitTitle": "Mechanistic Interpretability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Attention head roles",
          "unitTitle": "Mechanistic Interpretability",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "GPUs",
          "unitTitle": "AI Accelerators",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "TPUs",
          "unitTitle": "AI Accelerators",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Example hardware:",
          "unitTitle": "AI Accelerators",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Data parallelism",
          "unitTitle": "Distributed Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Model parallelism",
          "unitTitle": "Distributed Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "Pipeline parallelism",
          "unitTitle": "Distributed Training",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Model serving",
          "unitTitle": "Deployment",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Model drift detection",
          "unitTitle": "Monitoring",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Data drift detection",
          "unitTitle": "Monitoring",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Bias and fairness",
          "unitTitle": "AI Ethics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "AI governance",
          "unitTitle": "Regulation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Safety standards",
          "unitTitle": "Regulation",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
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
          "id": 1,
          "title": "Motion planning",
          "unitTitle": "Robotics",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Protein folding",
          "unitTitle": "Scientific AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
          "title": "Example:",
          "unitTitle": "Scientific AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 3,
          "title": "AlphaFold",
          "unitTitle": "Scientific AI",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 4,
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
          "id": 1,
          "title": "Compute optimal scaling",
          "unitTitle": "Scaling Laws",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Memory mechanisms",
          "unitTitle": "Long Context Models",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
          "id": 1,
          "title": "Tool use",
          "unitTitle": "Autonomous AI Agents",
          "xp": 20,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "",
          "questions": []
        },
        {
          "id": 2,
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
