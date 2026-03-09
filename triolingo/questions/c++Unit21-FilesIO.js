// C++ - Files IO
// Generated: 2026-03-08 16:01:44

// Lesson 1: fstream
{
  "lessonId": "fstream",
  "lessonName": "fstream",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# fstream\n\n## Introduction\nThis lesson covers fstream in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-21-1-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-21-1-2",
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
      "id": "c++-21-1-3",
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
      "id": "c++-21-1-4",
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
      "id": "c++-21-1-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-21-1-6",
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
      "id": "c++-21-1-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-21-1-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-21-1-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-21-1-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-21-1-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-21-1-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-21-1-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-21-1-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-21-1-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-21-1-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-21-1-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-21-1-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-21-1-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-21-1-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-21-1-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-21-1-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 2: ifstream
{
  "lessonId": "ifstream",
  "lessonName": "ifstream",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# ifstream\n\n## Introduction\nThis lesson covers ifstream in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-21-2-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-21-2-2",
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
      "id": "c++-21-2-3",
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
      "id": "c++-21-2-4",
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
      "id": "c++-21-2-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-21-2-6",
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
      "id": "c++-21-2-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-21-2-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-21-2-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-21-2-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-21-2-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-21-2-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-21-2-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-21-2-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-21-2-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-21-2-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-21-2-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-21-2-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-21-2-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-21-2-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-21-2-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-21-2-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 3: ofstream
{
  "lessonId": "ofstream",
  "lessonName": "ofstream",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# ofstream\n\n## Introduction\nThis lesson covers ofstream in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-21-3-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-21-3-2",
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
      "id": "c++-21-3-3",
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
      "id": "c++-21-3-4",
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
      "id": "c++-21-3-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-21-3-6",
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
      "id": "c++-21-3-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-21-3-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-21-3-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-21-3-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-21-3-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-21-3-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-21-3-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-21-3-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-21-3-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-21-3-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-21-3-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-21-3-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-21-3-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-21-3-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-21-3-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-21-3-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 4: file modes
{
  "lessonId": "file-modes",
  "lessonName": "file modes",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# file modes\n\n## Introduction\nThis lesson covers file modes in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-21-4-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-21-4-2",
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
      "id": "c++-21-4-3",
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
      "id": "c++-21-4-4",
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
      "id": "c++-21-4-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-21-4-6",
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
      "id": "c++-21-4-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-21-4-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-21-4-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-21-4-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-21-4-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-21-4-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-21-4-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-21-4-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-21-4-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-21-4-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-21-4-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-21-4-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-21-4-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-21-4-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-21-4-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-21-4-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 5: Text vs Binary
{
  "lessonId": "text-vs-binary",
  "lessonName": "Text vs Binary",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Text vs Binary\n\n## Introduction\nThis lesson covers text vs binary in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-21-5-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-21-5-2",
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
      "id": "c++-21-5-3",
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
      "id": "c++-21-5-4",
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
      "id": "c++-21-5-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-21-5-6",
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
      "id": "c++-21-5-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-21-5-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-21-5-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-21-5-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-21-5-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-21-5-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-21-5-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-21-5-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-21-5-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-21-5-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-21-5-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-21-5-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-21-5-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-21-5-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-21-5-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-21-5-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 6: File Positioning
{
  "lessonId": "file-positioning",
  "lessonName": "File Positioning",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# File Positioning\n\n## Introduction\nThis lesson covers file positioning in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-21-6-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-21-6-2",
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
      "id": "c++-21-6-3",
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
      "id": "c++-21-6-4",
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
      "id": "c++-21-6-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-21-6-6",
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
      "id": "c++-21-6-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-21-6-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-21-6-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-21-6-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-21-6-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-21-6-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-21-6-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-21-6-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-21-6-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-21-6-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-21-6-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-21-6-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-21-6-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-21-6-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-21-6-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-21-6-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

// Lesson 7: Filesystem
{
  "lessonId": "filesystem",
  "lessonName": "Filesystem",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Filesystem\n\n## Introduction\nThis lesson covers filesystem in C++.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "c++-21-7-1",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "c++-21-7-2",
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
      "id": "c++-21-7-3",
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
      "id": "c++-21-7-4",
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
      "id": "c++-21-7-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 4
    },
    {
      "id": "c++-21-7-6",
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
      "id": "c++-21-7-7",
      "type": "typing",
      "question": "delete?",
      "correctAnswer": [
        "free memory"
      ],
      "explanation": "Deallocate.",
      "xp": 5
    },
    {
      "id": "c++-21-7-8",
      "type": "typing",
      "question": "unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns exclusively.",
      "xp": 5
    },
    {
      "id": "c++-21-7-9",
      "type": "typing",
      "question": "shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Reference counted.",
      "xp": 5
    },
    {
      "id": "c++-21-7-10",
      "type": "typing",
      "question": "weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes without owning.",
      "xp": 4
    },
    {
      "id": "c++-21-7-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual"
      ],
      "explanation": "Scope vs lifetime.",
      "xp": 5
    },
    {
      "id": "c++-21-7-12",
      "type": "typing",
      "question": "RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage in constructors.",
      "xp": 5
    },
    {
      "id": "c++-21-7-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "Steal resources.",
      "xp": 5
    },
    {
      "id": "c++-21-7-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "c++-21-7-15",
      "type": "typing",
      "question": "Dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid.",
      "xp": 4
    },
    {
      "id": "c++-21-7-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "c++-21-7-17",
      "type": "typing",
      "question": "Smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "c++-21-7-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "c++-21-7-19",
      "type": "typing",
      "question": "nullptr?",
      "correctAnswer": [
        "modern null pointer"
      ],
      "explanation": "Type-safe.",
      "xp": 5
    },
    {
      "id": "c++-21-7-20",
      "type": "typing",
      "question": "Array decay?",
      "correctAnswer": [
        "pointer to first element"
      ],
      "explanation": "Arrays become pointers.",
      "xp": 4
    },
    {
      "id": "c++-21-7-21",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    },
    {
      "id": "c++-21-7-22",
      "type": "code",
      "question": "What does this output?",
      "codeTemplate": "int x = 5;\nstd::cout << x;",
      "expectedOutput": "5",
      "explanation": "Outputs value of x.",
      "xp": 6
    }
  ]
}

