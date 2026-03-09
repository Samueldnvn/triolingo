// C++ - Concurrency Basics
// Generated: 2026-03-08 16:01:44

// Lesson 1: Threads
{
  "lessonId": "threads",
  "lessonName": "Threads",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Threads\n\n## Introduction\nThis lesson covers threads in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-16-1-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-16-1-2",
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
      "id": "c++-16-1-3",
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
      "id": "c++-16-1-4",
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
      "id": "c++-16-1-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-16-1-6",
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
      "id": "c++-16-1-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-16-1-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-16-1-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-16-1-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-16-1-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-16-1-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-16-1-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-16-1-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-16-1-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-16-1-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-16-1-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-16-1-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-16-1-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-16-1-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-16-1-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-16-1-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 2: std::thread
{
  "lessonId": "std::thread",
  "lessonName": "std::thread",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# std::thread\n\n## Introduction\nThis lesson covers std::thread in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-16-2-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-16-2-2",
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
      "id": "c++-16-2-3",
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
      "id": "c++-16-2-4",
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
      "id": "c++-16-2-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-16-2-6",
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
      "id": "c++-16-2-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-16-2-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-16-2-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-16-2-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-16-2-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-16-2-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-16-2-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-16-2-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-16-2-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-16-2-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-16-2-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-16-2-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-16-2-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-16-2-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-16-2-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-16-2-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 3: Joining
{
  "lessonId": "joining",
  "lessonName": "Joining",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Joining\n\n## Introduction\nThis lesson covers joining in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-16-3-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-16-3-2",
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
      "id": "c++-16-3-3",
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
      "id": "c++-16-3-4",
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
      "id": "c++-16-3-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-16-3-6",
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
      "id": "c++-16-3-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-16-3-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-16-3-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-16-3-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-16-3-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-16-3-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-16-3-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-16-3-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-16-3-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-16-3-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-16-3-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-16-3-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-16-3-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-16-3-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-16-3-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-16-3-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 4: Detaching
{
  "lessonId": "detaching",
  "lessonName": "Detaching",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Detaching\n\n## Introduction\nThis lesson covers detaching in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-16-4-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-16-4-2",
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
      "id": "c++-16-4-3",
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
      "id": "c++-16-4-4",
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
      "id": "c++-16-4-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-16-4-6",
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
      "id": "c++-16-4-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-16-4-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-16-4-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-16-4-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-16-4-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-16-4-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-16-4-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-16-4-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-16-4-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-16-4-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-16-4-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-16-4-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-16-4-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-16-4-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-16-4-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-16-4-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 5: Thread IDs
{
  "lessonId": "thread-ids",
  "lessonName": "Thread IDs",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Thread IDs\n\n## Introduction\nThis lesson covers thread ids in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-16-5-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-16-5-2",
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
      "id": "c++-16-5-3",
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
      "id": "c++-16-5-4",
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
      "id": "c++-16-5-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-16-5-6",
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
      "id": "c++-16-5-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-16-5-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-16-5-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-16-5-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-16-5-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-16-5-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-16-5-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-16-5-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-16-5-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-16-5-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-16-5-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-16-5-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-16-5-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-16-5-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-16-5-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-16-5-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 6: this_thread
{
  "lessonId": "this_thread",
  "lessonName": "this_thread",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# this_thread\n\n## Introduction\nThis lesson covers this_thread in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-16-6-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-16-6-2",
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
      "id": "c++-16-6-3",
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
      "id": "c++-16-6-4",
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
      "id": "c++-16-6-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-16-6-6",
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
      "id": "c++-16-6-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-16-6-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-16-6-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-16-6-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-16-6-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-16-6-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-16-6-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-16-6-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-16-6-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-16-6-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-16-6-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-16-6-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-16-6-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-16-6-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-16-6-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-16-6-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

