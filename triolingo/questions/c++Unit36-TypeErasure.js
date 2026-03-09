// C++ - Type Erasure
// Generated: 2026-03-08 16:01:44

// Lesson 1: Type Erasure Basics
{
  "lessonId": "type-erasure-basics",
  "lessonName": "Type Erasure Basics",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Type Erasure Basics\n\n## Introduction\nThis lesson covers type erasure basics in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-36-1-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-36-1-2",
      "type": "typing",
      "question": "Dereference?",
      "correctAnswer": [
        "*",
        "asterisk"
      ],
      "explanation": "Access value.",
      "xp": 5
    },
    {
      "id": "c++-36-1-3",
      "type": "typing",
      "question": "Address operator?",
      "correctAnswer": [
        "&",
        "ampersand"
      ],
      "explanation": "Get address.",
      "xp": 5
    },
    {
      "id": "c++-36-1-4",
      "type": "typing",
      "question": "Null pointer?",
      "correctAnswer": [
        "nullptr",
        "0"
      ],
      "explanation": "Points to nothing.",
      "xp": 5
    },
    {
      "id": "c++-36-1-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-36-1-6",
      "type": "typing",
      "question": "new?",
      "correctAnswer": [
        "dynamic allocation",
        "heap"
      ],
      "explanation": "Allocate memory.",
      "xp": 5
    },
    {
      "id": "c++-36-1-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-36-1-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-36-1-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-36-1-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-36-1-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-36-1-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-36-1-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-36-1-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-36-1-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-36-1-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-36-1-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-36-1-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-36-1-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-36-1-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-36-1-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-36-1-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 2: std::function
{
  "lessonId": "std::function",
  "lessonName": "std::function",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# std::function\n\n## Introduction\nThis lesson covers std::function in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-36-2-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-36-2-2",
      "type": "typing",
      "question": "Dereference?",
      "correctAnswer": [
        "*",
        "asterisk"
      ],
      "explanation": "Access value.",
      "xp": 5
    },
    {
      "id": "c++-36-2-3",
      "type": "typing",
      "question": "Address operator?",
      "correctAnswer": [
        "&",
        "ampersand"
      ],
      "explanation": "Get address.",
      "xp": 5
    },
    {
      "id": "c++-36-2-4",
      "type": "typing",
      "question": "Null pointer?",
      "correctAnswer": [
        "nullptr",
        "0"
      ],
      "explanation": "Points to nothing.",
      "xp": 5
    },
    {
      "id": "c++-36-2-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-36-2-6",
      "type": "typing",
      "question": "new?",
      "correctAnswer": [
        "dynamic allocation",
        "heap"
      ],
      "explanation": "Allocate memory.",
      "xp": 5
    },
    {
      "id": "c++-36-2-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-36-2-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-36-2-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-36-2-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-36-2-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-36-2-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-36-2-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-36-2-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-36-2-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-36-2-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-36-2-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-36-2-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-36-2-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-36-2-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-36-2-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-36-2-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 3: any
{
  "lessonId": "any",
  "lessonName": "any",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# any\n\n## Introduction\nThis lesson covers any in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-36-3-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-36-3-2",
      "type": "typing",
      "question": "Dereference?",
      "correctAnswer": [
        "*",
        "asterisk"
      ],
      "explanation": "Access value.",
      "xp": 5
    },
    {
      "id": "c++-36-3-3",
      "type": "typing",
      "question": "Address operator?",
      "correctAnswer": [
        "&",
        "ampersand"
      ],
      "explanation": "Get address.",
      "xp": 5
    },
    {
      "id": "c++-36-3-4",
      "type": "typing",
      "question": "Null pointer?",
      "correctAnswer": [
        "nullptr",
        "0"
      ],
      "explanation": "Points to nothing.",
      "xp": 5
    },
    {
      "id": "c++-36-3-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-36-3-6",
      "type": "typing",
      "question": "new?",
      "correctAnswer": [
        "dynamic allocation",
        "heap"
      ],
      "explanation": "Allocate memory.",
      "xp": 5
    },
    {
      "id": "c++-36-3-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-36-3-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-36-3-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-36-3-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-36-3-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-36-3-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-36-3-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-36-3-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-36-3-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-36-3-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-36-3-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-36-3-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-36-3-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-36-3-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-36-3-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-36-3-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 4: variant
{
  "lessonId": "variant",
  "lessonName": "variant",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# variant\n\n## Introduction\nThis lesson covers variant in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-36-4-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-36-4-2",
      "type": "typing",
      "question": "Dereference?",
      "correctAnswer": [
        "*",
        "asterisk"
      ],
      "explanation": "Access value.",
      "xp": 5
    },
    {
      "id": "c++-36-4-3",
      "type": "typing",
      "question": "Address operator?",
      "correctAnswer": [
        "&",
        "ampersand"
      ],
      "explanation": "Get address.",
      "xp": 5
    },
    {
      "id": "c++-36-4-4",
      "type": "typing",
      "question": "Null pointer?",
      "correctAnswer": [
        "nullptr",
        "0"
      ],
      "explanation": "Points to nothing.",
      "xp": 5
    },
    {
      "id": "c++-36-4-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-36-4-6",
      "type": "typing",
      "question": "new?",
      "correctAnswer": [
        "dynamic allocation",
        "heap"
      ],
      "explanation": "Allocate memory.",
      "xp": 5
    },
    {
      "id": "c++-36-4-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-36-4-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-36-4-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-36-4-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-36-4-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-36-4-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-36-4-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-36-4-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-36-4-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-36-4-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-36-4-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-36-4-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-36-4-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-36-4-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-36-4-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-36-4-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 5: Custom Type Erasure
{
  "lessonId": "custom-type-erasure",
  "lessonName": "Custom Type Erasure",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Custom Type Erasure\n\n## Introduction\nThis lesson covers custom type erasure in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-36-5-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-36-5-2",
      "type": "typing",
      "question": "Dereference?",
      "correctAnswer": [
        "*",
        "asterisk"
      ],
      "explanation": "Access value.",
      "xp": 5
    },
    {
      "id": "c++-36-5-3",
      "type": "typing",
      "question": "Address operator?",
      "correctAnswer": [
        "&",
        "ampersand"
      ],
      "explanation": "Get address.",
      "xp": 5
    },
    {
      "id": "c++-36-5-4",
      "type": "typing",
      "question": "Null pointer?",
      "correctAnswer": [
        "nullptr",
        "0"
      ],
      "explanation": "Points to nothing.",
      "xp": 5
    },
    {
      "id": "c++-36-5-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-36-5-6",
      "type": "typing",
      "question": "new?",
      "correctAnswer": [
        "dynamic allocation",
        "heap"
      ],
      "explanation": "Allocate memory.",
      "xp": 5
    },
    {
      "id": "c++-36-5-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-36-5-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-36-5-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-36-5-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-36-5-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-36-5-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-36-5-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-36-5-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-36-5-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-36-5-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-36-5-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-36-5-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-36-5-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-36-5-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-36-5-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-36-5-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 6: SOO
{
  "lessonId": "soo",
  "lessonName": "SOO",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# SOO\n\n## Introduction\nThis lesson covers soo in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-36-6-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-36-6-2",
      "type": "typing",
      "question": "Dereference?",
      "correctAnswer": [
        "*",
        "asterisk"
      ],
      "explanation": "Access value.",
      "xp": 5
    },
    {
      "id": "c++-36-6-3",
      "type": "typing",
      "question": "Address operator?",
      "correctAnswer": [
        "&",
        "ampersand"
      ],
      "explanation": "Get address.",
      "xp": 5
    },
    {
      "id": "c++-36-6-4",
      "type": "typing",
      "question": "Null pointer?",
      "correctAnswer": [
        "nullptr",
        "0"
      ],
      "explanation": "Points to nothing.",
      "xp": 5
    },
    {
      "id": "c++-36-6-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-36-6-6",
      "type": "typing",
      "question": "new?",
      "correctAnswer": [
        "dynamic allocation",
        "heap"
      ],
      "explanation": "Allocate memory.",
      "xp": 5
    },
    {
      "id": "c++-36-6-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-36-6-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-36-6-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-36-6-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-36-6-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-36-6-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-36-6-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-36-6-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-36-6-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-36-6-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-36-6-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-36-6-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-36-6-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-36-6-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-36-6-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-36-6-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 7: Applications
{
  "lessonId": "applications",
  "lessonName": "Applications",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Applications\n\n## Introduction\nThis lesson covers applications in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-36-7-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-36-7-2",
      "type": "typing",
      "question": "Dereference?",
      "correctAnswer": [
        "*",
        "asterisk"
      ],
      "explanation": "Access value.",
      "xp": 5
    },
    {
      "id": "c++-36-7-3",
      "type": "typing",
      "question": "Address operator?",
      "correctAnswer": [
        "&",
        "ampersand"
      ],
      "explanation": "Get address.",
      "xp": 5
    },
    {
      "id": "c++-36-7-4",
      "type": "typing",
      "question": "Null pointer?",
      "correctAnswer": [
        "nullptr",
        "0"
      ],
      "explanation": "Points to nothing.",
      "xp": 5
    },
    {
      "id": "c++-36-7-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-36-7-6",
      "type": "typing",
      "question": "new?",
      "correctAnswer": [
        "dynamic allocation",
        "heap"
      ],
      "explanation": "Allocate memory.",
      "xp": 5
    },
    {
      "id": "c++-36-7-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-36-7-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-36-7-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-36-7-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-36-7-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-36-7-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-36-7-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-36-7-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-36-7-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-36-7-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-36-7-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-36-7-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-36-7-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-36-7-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-36-7-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-36-7-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

