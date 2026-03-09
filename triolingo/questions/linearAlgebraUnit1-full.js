// Linear Algebra Unit 1 Questions - COMPLETE
// Vector Spaces through Tensor Algebra

window.linearAlgebraUnit1 = {
  unitId: "linearAlgebra1",
  unitName: "1.1 Linear Algebra",
  subunits: [
    {
      subunitId: "1.1.1",
      subunitName: "Vector Spaces",
      lessons: [
        {
          lessonId: "vectorSpaces-intro",
          lessonName: "Introduction to Vector Spaces",
          type: "lesson",
          difficulty: "beginner",
          lessonText: `
# Introduction to Vector Spaces

## Scalars and Vectors

A **scalar** is a single number (real or complex) that can multiply vectors. Examples: 3, -2.5, π, i.

A **vector** is an array of numbers that has both magnitude and direction. We write vectors as column arrays:
```
v = [3]
    [4]
```
This represents a vector with components 3 in the x-direction and 4 in the y-direction.

## Vector Notation

- ℝ²: The set of all 2-dimensional real vectors: vectors with 2 components
- ℝ³: The set of all 3-dimensional real vectors
- ℝⁿ: The set of all n-dimensional real vectors

## Vector Components

A vector v in ℝ³ has 3 elements: v₁, v₂, v₃. These are called the **components** of the vector.

Example: v = [1, 2, 3] has components v₁ = 1, v₂ = 2, v₃ = 3.

## Zero Vector

The zero vector 0 has all components equal to zero: 0 = [0, 0, 0] in ℝ³.
          `,
          questions: [
            {
              id: "la-1-1-1-1",
              type: "typing",
              question: "What do we call a single number that can multiply vectors?",
              correctAnswer: ["scalar", "a scalar"],
              explanation: "A scalar is a single number (real or complex) that can multiply vectors.",
              xp: 5
            },
            {
              id: "la-1-1-1-2",
              type: "typing",
              question: "How many components does a vector in ℝ² have?",
              correctAnswer: ["2", "two"],
              explanation: "A vector in ℝ² has 2 components, representing two-dimensional space.",
              xp: 5
            },
            {
              id: "la-1-1-1-3",
              type: "typing",
              question: "What is the first component of the vector v = [5, 7, 9]?",
              correctAnswer: ["5"],
              explanation: "The first component of [5, 7, 9] is 5. Components are indexed starting from 1.",
              xp: 4
            },
            {
              id: "la-1-1-1-4",
              type: "typing",
              question: "What is the second component of the vector v = [1, 4, 2, 8]?",
              correctAnswer: ["4"],
              explanation: "The second component of [1, 4, 2, 8] is 4.",
              xp: 4
            },
            {
              id: "la-1-1-1-5",
              type: "typing",
              question: "What is the zero vector in ℝ²?",
              correctAnswer: ["[0, 0]", "[0,0]", "[0, 0]"],
              explanation: "The zero vector in ℝ² is [0, 0] - all components are zero.",
              xp: 5
            },
            {
              id: "la-1-1-1-6",
              type: "typing",
              question: "How many components does a vector in ℝ⁵ have?",
              correctAnswer: ["5", "five"],
              explanation: "A vector in ℝ⁵ has 5 components.",
              xp: 4
            },
            {
              id: "la-1-1-1-7",
              type: "typing",
              question: "What do we call an array of numbers that has magnitude and direction?",
              correctAnswer: ["vector", "a vector"],
              explanation: "A vector is an array of numbers that has both magnitude and direction.",
              xp: 5
            },
            {
              id: "la-1-1-1-8",
              type: "typing",
              question: "What is the last component of the vector v = [3, 1, 4]?",
              correctAnswer: ["4"],
              explanation: "The last (third) component of [3, 1, 4] is 4.",
              xp: 4
            },
            {
              id: "la-1-1-1-9",
              type: "typing",
              question: "Is the number π a scalar or a vector?",
              correctAnswer: ["scalar", "a scalar"],
              explanation: "π is a scalar - it's a single number.",
              xp: 4
            },
            {
              id: "la-1-1-1-10",
              type: "typing",
              question: "What is the zero vector in ℝ³?",
              correctAnswer: ["[0, 0, 0]", "[0,0,0]", "[0, 0, 0]"],
              explanation: "The zero vector in ℝ³ is [0, 0, 0].",
              xp: 5
            },
            {
              id: "la-1-1-1-11",
              type: "typing",
              question: "What does ℝ stand for in the notation ℝ²?",
              correctAnswer: ["real numbers", "the real numbers", "Real numbers"],
              explanation: "ℝ stands for the real numbers. ℝ² means the set of all 2-dimensional real vectors.",
              xp: 5
            },
            {
              id: "la-1-1-1-12",
              type: "typing",
              question: "What do we call the individual numbers that make up a vector?",
              correctAnswer: ["components", "the components", "the components of a vector"],
              explanation: "The individual numbers that make up a vector are called its components.",
              xp: 5
            },
            {
              id: "la-1-1-1-13",
              type: "typing",
              question: "If v = [a, b, c], what is v₂?",
              correctAnswer: ["b"],
              explanation: "v₂ = b, the second component of the vector.",
              xp: 4
            },
            {
              id: "la-1-1-1-14",
              type: "typing",
              question: "Is -2.5 a scalar or a vector?",
              correctAnswer: ["scalar", "a scalar"],
              explanation: "-2.5 is a scalar - it's a single number.",
              xp: 4
            },
            {
              id: "la-1-1-1-15",
              type: "typing",
              question: "How do we represent the vector with components 3, 4, 5?",
              correctAnswer: ["[3, 4, 5]", "[3,4,5]", "[3, 4, 5]"],
              explanation: "A vector is represented as [3, 4, 5] with components listed in order.",
              xp: 5
            },
            {
              id: "la-1-1-1-16",
              type: "multiple-choice",
              question: "What does the notation ℝⁿ represent?",
              options: [
                "A single real number",
                "The set of all n-dimensional real vectors",
                "The set of all complex numbers",
                "A specific n×n matrix"
              ],
              correctAnswer: 1,
              explanation: "ℝⁿ represents the set of all n-dimensional real vectors.",
              xp: 4
            },
            {
              id: "la-1-1-1-17",
              type: "typing",
              question: "If a vector has 7 components, what space is it in?",
              correctAnswer: ["R7", "ℝ7", "R^7", "ℝ^7", "R 7", "ℝ 7", "R 7", "ℝ 7"],
              explanation: "A vector with 7 components is in ℝ⁷ (7-dimensional space).",
              xp: 5
            },
            {
              id: "la-1-1-1-18",
              type: "typing",
              question: "What is v₁ if v = [x, y, z]?",
              correctAnswer: ["x"],
              explanation: "v₁ = x, the first component of the vector.",
              xp: 4
            }
          ]
        },
        {
          lessonId: "vectorOperations",
          lessonName: "Vector Operations",
          type: "lesson",
          difficulty: "beginner",
          lessonText: `
# Vector Operations

## Vector Addition

Vectors of the same dimension can be added by adding their corresponding components:
```
[a]   [e]   [a+e]
[b] + [f] = [b+f]
[c]   [g]   [c+g]
```

Example: [1, 2] + [3, 4] = [1+3, 2+4] = [4, 6]

## Scalar Multiplication

A vector can be multiplied by a scalar by multiplying each component:
```
k [a] = [k·a]
  [b]   [k·b]
  [c]   [k·c]
```

Example: 3 · [1, 2] = [3·1, 3·2] = [3, 6]

## Dot Product

The dot product of two vectors is the sum of the products of corresponding components:
```
[a] · [e] = a·e + b·f + c·g
[b]   [f]
[c]   [g]
```

Example: [1, 2] · [3, 4] = 1·3 + 2·4 = 3 + 8 = 11

Note: The dot product produces a scalar (single number), not a vector.

## Properties

- Addition is commutative: v + w = w + v
- Scalar multiplication is distributive: k(v + w) = kv + kw
- The dot product is commutative: v · w = w · v
          `,
          questions: [
            {
              id: "la-1-1-1-19",
              type: "typing",
              question: "What is [1, 2] + [3, 4]?",
              correctAnswer: ["[4, 6]", "[4,6]", "[4, 6]"],
              explanation: "Vector addition is component-wise: [1, 2] + [3, 4] = [1+3, 2+4] = [4, 6].",
              xp: 5
            },
            {
              id: "la-1-1-1-20",
              type: "typing",
              question: "What is [5, 1] + [2, 3]?",
              correctAnswer: ["[7, 4]", "[7,4]", "[7, 4]"],
              explanation: "[5, 1] + [2, 3] = [5+2, 1+3] = [7, 4].",
              xp: 4
            },
            {
              id: "la-1-1-1-21",
              type: "typing",
              question: "What is 2 · [1, 3]?",
              correctAnswer: ["[2, 6]", "[2,6]", "[2, 6]"],
              explanation: "Scalar multiplication: 2·[1, 3] = [2·1, 2·3] = [2, 6].",
              xp: 5
            },
            {
              id: "la-1-1-1-22",
              type: "typing",
              question: "What is 3 · [2, 4, 6]?",
              correctAnswer: ["[6, 12, 18]", "[6,12,18]", "[6, 12, 18]"],
              explanation: "3·[2, 4, 6] = [3·2, 3·4, 3·6] = [6, 12, 18].",
              xp: 5
            },
            {
              id: "la-1-1-1-23",
              type: "typing",
              question: "What is [1, 2] · [3, 4]? (dot product)",
              correctAnswer: ["11"],
              explanation: "Dot product: [1, 2]·[3, 4] = 1·3 + 2·4 = 3 + 8 = 11.",
              xp: 5
            },
            {
              id: "la-1-1-1-24",
              type: "typing",
              question: "What is [2, 5] · [3, 1]?",
              correctAnswer: ["11"],
              explanation: "[2, 5]·[3, 1] = 2·3 + 5·1 = 6 + 5 = 11.",
              xp: 5
            },
            {
              id: "la-1-1-1-25",
              type: "typing",
              question: "What is [0, 1] + [1, 0]?",
              correctAnswer: ["[1, 1]", "[1,1]", "[1, 1]"],
              explanation: "[0, 1] + [1, 0] = [0+1, 1+0] = [1, 1].",
              xp: 4
            },
            {
              id: "la-1-1-1-26",
              type: "typing",
              question: "What is -1 · [3, 4]?",
              correctAnswer: ["[-3, -4]", "[-3,-4]", "[-3, -4]"],
              explanation: "-1·[3, 4] = [-1·3, -1·4] = [-3, -4].",
              xp: 5
            },
            {
              id: "la-1-1-1-27",
              type: "typing",
              question: "What is [1, 0, 0] · [0, 1, 0]?",
              correctAnswer: ["0"],
              explanation: "[1, 0, 0]·[0, 1, 0] = 1·0 + 0·1 + 0·0 = 0 + 0 + 0 = 0.",
              xp: 4
            },
            {
              id: "la-1-1-1-28",
              type: "typing",
              question: "What is [3, 7] + [-3, -7]?",
              correctAnswer: ["[0, 0]", "[0,0]", "[0, 0]"],
              explanation: "[3, 7] + [-3, -7] = [3+(-3), 7+(-7)] = [0, 0].",
              xp: 5
            },
            {
              id: "la-1-1-1-29",
              type: "typing",
              question: "What does the dot product of two vectors produce?",
              correctAnswer: ["a scalar", "a number", "scalar", "number"],
              explanation: "The dot product produces a scalar (a single number), not a vector.",
              xp: 5
            },
            {
              id: "la-1-1-1-30",
              type: "typing",
              question: "Is vector addition commutative? (Does v + w = w + v?)",
              correctAnswer: ["yes", "Yes", "YES"],
              explanation: "Yes, vector addition is commutative: v + w = w + v.",
              xp: 4
            },
            {
              id: "la-1-1-1-31",
              type: "typing",
              question: "What is [2, 2] · [2, 2]?",
              correctAnswer: ["8"],
              explanation: "[2, 2]·[2, 2] = 2·2 + 2·2 = 4 + 4 = 8.",
              xp: 4
            },
            {
              id: "la-1-1-1-32",
              type: "typing",
              question: "What is 0 · [5, 10]?",
              correctAnswer: ["[0, 0]", "[0,0]", "[0, 0]"],
              explanation: "0·[5, 10] = [0·5, 0·10] = [0, 0].",
              xp: 4
            },
            {
              id: "la-1-1-1-33",
              type: "typing",
              question: "What is [1, 2, 3] + [0, 0, 0]?",
              correctAnswer: ["[1, 2, 3]", "[1,2,3]", "[1, 2, 3]"],
              explanation: "Adding the zero vector doesn't change anything: [1, 2, 3] + [0, 0, 0] = [1, 2, 3].",
              xp: 4
            },
            {
              id: "la-1-1-1-34",
              type: "typing",
              question: "What is [3, 4] · [3, 4]?",
              correctAnswer: ["25"],
              explanation: "[3, 4]·[3, 4] = 3·3 + 4·4 = 9 + 16 = 25.",
              xp: 5
            },
            {
              id: "la-1-1-1-35",
              type: "typing",
              question: "What is [1, 1, 1] · [2, 2, 2]?",
              correctAnswer: ["6"],
              explanation: "[1, 1, 1]·[2, 2, 2] = 1·2 + 1·2 + 1·2 = 2 + 2 + 2 = 6.",
              xp: 5
            }
          ]
        }
      ]
    }
  ]
};