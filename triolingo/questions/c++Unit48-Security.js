// C++ - Security
// Generated: 2026-03-08 16:01:44

// Lesson 1: Buffer Overflows
{
  "lessonId": "buffer-overflows",
  "lessonName": "Buffer Overflows",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Buffer Overflows\n\n## Introduction\nThis lesson covers buffer overflows in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-48-1-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-48-1-2",
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
      "id": "c++-48-1-3",
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
      "id": "c++-48-1-4",
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
      "id": "c++-48-1-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-48-1-6",
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
      "id": "c++-48-1-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-48-1-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-48-1-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-48-1-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-48-1-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-48-1-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-48-1-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-48-1-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-48-1-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-48-1-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-48-1-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-48-1-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-48-1-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-48-1-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-48-1-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-48-1-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 2: Input Validation
{
  "lessonId": "input-validation",
  "lessonName": "Input Validation",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Input Validation\n\n## Introduction\nThis lesson covers input validation in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-48-2-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-48-2-2",
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
      "id": "c++-48-2-3",
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
      "id": "c++-48-2-4",
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
      "id": "c++-48-2-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-48-2-6",
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
      "id": "c++-48-2-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-48-2-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-48-2-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-48-2-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-48-2-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-48-2-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-48-2-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-48-2-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-48-2-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-48-2-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-48-2-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-48-2-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-48-2-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-48-2-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-48-2-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-48-2-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 3: Secure Coding
{
  "lessonId": "secure-coding",
  "lessonName": "Secure Coding",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Secure Coding\n\n## Introduction\nThis lesson covers secure coding in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-48-3-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-48-3-2",
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
      "id": "c++-48-3-3",
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
      "id": "c++-48-3-4",
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
      "id": "c++-48-3-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-48-3-6",
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
      "id": "c++-48-3-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-48-3-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-48-3-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-48-3-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-48-3-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-48-3-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-48-3-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-48-3-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-48-3-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-48-3-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-48-3-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-48-3-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-48-3-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-48-3-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-48-3-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-48-3-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 4: Cryptography
{
  "lessonId": "cryptography",
  "lessonName": "Cryptography",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Cryptography\n\n## Introduction\nThis lesson covers cryptography in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-48-4-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-48-4-2",
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
      "id": "c++-48-4-3",
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
      "id": "c++-48-4-4",
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
      "id": "c++-48-4-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-48-4-6",
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
      "id": "c++-48-4-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-48-4-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-48-4-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-48-4-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-48-4-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-48-4-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-48-4-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-48-4-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-48-4-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-48-4-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-48-4-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-48-4-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-48-4-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-48-4-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-48-4-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-48-4-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 5: Hashing
{
  "lessonId": "hashing",
  "lessonName": "Hashing",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Hashing\n\n## Introduction\nThis lesson covers hashing in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-48-5-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-48-5-2",
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
      "id": "c++-48-5-3",
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
      "id": "c++-48-5-4",
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
      "id": "c++-48-5-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-48-5-6",
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
      "id": "c++-48-5-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-48-5-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-48-5-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-48-5-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-48-5-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-48-5-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-48-5-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-48-5-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-48-5-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-48-5-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-48-5-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-48-5-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-48-5-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-48-5-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-48-5-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-48-5-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 6: Encryption
{
  "lessonId": "encryption",
  "lessonName": "Encryption",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Encryption\n\n## Introduction\nThis lesson covers encryption in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-48-6-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-48-6-2",
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
      "id": "c++-48-6-3",
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
      "id": "c++-48-6-4",
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
      "id": "c++-48-6-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-48-6-6",
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
      "id": "c++-48-6-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-48-6-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-48-6-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-48-6-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-48-6-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-48-6-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-48-6-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-48-6-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-48-6-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-48-6-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-48-6-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-48-6-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-48-6-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-48-6-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-48-6-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-48-6-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 7: Authentication
{
  "lessonId": "authentication",
  "lessonName": "Authentication",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Authentication\n\n## Introduction\nThis lesson covers authentication in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-48-7-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-48-7-2",
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
      "id": "c++-48-7-3",
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
      "id": "c++-48-7-4",
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
      "id": "c++-48-7-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-48-7-6",
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
      "id": "c++-48-7-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-48-7-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-48-7-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-48-7-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-48-7-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-48-7-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-48-7-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-48-7-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-48-7-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-48-7-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-48-7-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-48-7-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-48-7-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-48-7-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-48-7-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-48-7-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

