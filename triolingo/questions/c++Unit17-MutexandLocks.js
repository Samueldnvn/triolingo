// C++ - Mutex and Locks
// Generated: 2026-03-08 13:59:18

// Lesson 1: Mutex
{
  "lessonId": "mutex",
  "lessonName": "Mutex",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Mutex\n\n## Introduction\nThis lesson covers fundamental concepts of mutex in C++.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "cpp-17-1-1",
      "type": "typing",
      "question": "C++ compilation?",
      "correctAnswer": [
        "compile then link"
      ],
      "explanation": "Source → Object → Executable.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-2",
      "type": "typing",
      "question": "What is include?",
      "correctAnswer": [
        "header file"
      ],
      "explanation": "Include other files.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-3",
      "type": "typing",
      "question": "What is namespace?",
      "correctAnswer": [
        "avoid naming conflicts"
      ],
      "explanation": "Group identifiers.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-4",
      "type": "typing",
      "question": "std namespace?",
      "correctAnswer": [
        "standard library"
      ],
      "explanation": "C++ standard library.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-5",
      "type": "typing",
      "question": "Main function?",
      "correctAnswer": [
        "entry point"
      ],
      "explanation": "Program starts here.",
      "xp": 4
    },
    {
      "id": "cpp-17-1-6",
      "type": "typing",
      "question": "Return type?",
      "correctAnswer": [
        "function output type"
      ],
      "explanation": "Type of value returned.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-7",
      "type": "typing",
      "question": "Void return?",
      "correctAnswer": [
        "no return"
      ],
      "explanation": "Returns nothing.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-8",
      "type": "typing",
      "question": "What is int?",
      "correctAnswer": [
        "integer"
      ],
      "explanation": "Whole numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-9",
      "type": "typing",
      "question": "What is double?",
      "correctAnswer": [
        "floating point"
      ],
      "explanation": "Decimal numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-10",
      "type": "typing",
      "question": "What is string?",
      "correctAnswer": [
        "text"
      ],
      "explanation": "std::string for text.",
      "xp": 4
    },
    {
      "id": "cpp-17-1-11",
      "type": "typing",
      "question": "What is vector?",
      "correctAnswer": [
        "dynamic array"
      ],
      "explanation": "Resizable container.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-12",
      "type": "typing",
      "question": "What is auto?",
      "correctAnswer": [
        "type deduction"
      ],
      "explanation": "Compiler infers type.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-13",
      "type": "typing",
      "question": "Const variable?",
      "correctAnswer": [
        "cannot change"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-14",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-15",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "address"
      ],
      "explanation": "Memory address.",
      "xp": 4
    },
    {
      "id": "cpp-17-1-16",
      "type": "typing",
      "question": "For loop?",
      "correctAnswer": [
        "iteration"
      ],
      "explanation": "Repeated execution.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-17",
      "type": "typing",
      "question": "While loop?",
      "correctAnswer": [
        "conditional iteration"
      ],
      "explanation": "While condition true.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-18",
      "type": "typing",
      "question": "If statement?",
      "correctAnswer": [
        "conditional"
      ],
      "explanation": "Execute if true.",
      "xp": 5
    },
    {
      "id": "cpp-17-1-19",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    },
    {
      "id": "cpp-17-1-20",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    }
  ]
}

// Lesson 2: lock_guard
{
  "lessonId": "lock_guard",
  "lessonName": "lock_guard",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# lock_guard\n\n## Introduction\nThis lesson covers fundamental concepts of lock_guard in C++.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "cpp-17-2-1",
      "type": "typing",
      "question": "C++ compilation?",
      "correctAnswer": [
        "compile then link"
      ],
      "explanation": "Source → Object → Executable.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-2",
      "type": "typing",
      "question": "What is include?",
      "correctAnswer": [
        "header file"
      ],
      "explanation": "Include other files.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-3",
      "type": "typing",
      "question": "What is namespace?",
      "correctAnswer": [
        "avoid naming conflicts"
      ],
      "explanation": "Group identifiers.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-4",
      "type": "typing",
      "question": "std namespace?",
      "correctAnswer": [
        "standard library"
      ],
      "explanation": "C++ standard library.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-5",
      "type": "typing",
      "question": "Main function?",
      "correctAnswer": [
        "entry point"
      ],
      "explanation": "Program starts here.",
      "xp": 4
    },
    {
      "id": "cpp-17-2-6",
      "type": "typing",
      "question": "Return type?",
      "correctAnswer": [
        "function output type"
      ],
      "explanation": "Type of value returned.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-7",
      "type": "typing",
      "question": "Void return?",
      "correctAnswer": [
        "no return"
      ],
      "explanation": "Returns nothing.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-8",
      "type": "typing",
      "question": "What is int?",
      "correctAnswer": [
        "integer"
      ],
      "explanation": "Whole numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-9",
      "type": "typing",
      "question": "What is double?",
      "correctAnswer": [
        "floating point"
      ],
      "explanation": "Decimal numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-10",
      "type": "typing",
      "question": "What is string?",
      "correctAnswer": [
        "text"
      ],
      "explanation": "std::string for text.",
      "xp": 4
    },
    {
      "id": "cpp-17-2-11",
      "type": "typing",
      "question": "What is vector?",
      "correctAnswer": [
        "dynamic array"
      ],
      "explanation": "Resizable container.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-12",
      "type": "typing",
      "question": "What is auto?",
      "correctAnswer": [
        "type deduction"
      ],
      "explanation": "Compiler infers type.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-13",
      "type": "typing",
      "question": "Const variable?",
      "correctAnswer": [
        "cannot change"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-14",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-15",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "address"
      ],
      "explanation": "Memory address.",
      "xp": 4
    },
    {
      "id": "cpp-17-2-16",
      "type": "typing",
      "question": "For loop?",
      "correctAnswer": [
        "iteration"
      ],
      "explanation": "Repeated execution.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-17",
      "type": "typing",
      "question": "While loop?",
      "correctAnswer": [
        "conditional iteration"
      ],
      "explanation": "While condition true.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-18",
      "type": "typing",
      "question": "If statement?",
      "correctAnswer": [
        "conditional"
      ],
      "explanation": "Execute if true.",
      "xp": 5
    },
    {
      "id": "cpp-17-2-19",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    },
    {
      "id": "cpp-17-2-20",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    }
  ]
}

// Lesson 3: unique_lock
{
  "lessonId": "unique_lock",
  "lessonName": "unique_lock",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# unique_lock\n\n## Introduction\nThis lesson covers fundamental concepts of unique_lock in C++.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "cpp-17-3-1",
      "type": "typing",
      "question": "C++ compilation?",
      "correctAnswer": [
        "compile then link"
      ],
      "explanation": "Source → Object → Executable.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-2",
      "type": "typing",
      "question": "What is include?",
      "correctAnswer": [
        "header file"
      ],
      "explanation": "Include other files.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-3",
      "type": "typing",
      "question": "What is namespace?",
      "correctAnswer": [
        "avoid naming conflicts"
      ],
      "explanation": "Group identifiers.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-4",
      "type": "typing",
      "question": "std namespace?",
      "correctAnswer": [
        "standard library"
      ],
      "explanation": "C++ standard library.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-5",
      "type": "typing",
      "question": "Main function?",
      "correctAnswer": [
        "entry point"
      ],
      "explanation": "Program starts here.",
      "xp": 4
    },
    {
      "id": "cpp-17-3-6",
      "type": "typing",
      "question": "Return type?",
      "correctAnswer": [
        "function output type"
      ],
      "explanation": "Type of value returned.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-7",
      "type": "typing",
      "question": "Void return?",
      "correctAnswer": [
        "no return"
      ],
      "explanation": "Returns nothing.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-8",
      "type": "typing",
      "question": "What is int?",
      "correctAnswer": [
        "integer"
      ],
      "explanation": "Whole numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-9",
      "type": "typing",
      "question": "What is double?",
      "correctAnswer": [
        "floating point"
      ],
      "explanation": "Decimal numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-10",
      "type": "typing",
      "question": "What is string?",
      "correctAnswer": [
        "text"
      ],
      "explanation": "std::string for text.",
      "xp": 4
    },
    {
      "id": "cpp-17-3-11",
      "type": "typing",
      "question": "What is vector?",
      "correctAnswer": [
        "dynamic array"
      ],
      "explanation": "Resizable container.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-12",
      "type": "typing",
      "question": "What is auto?",
      "correctAnswer": [
        "type deduction"
      ],
      "explanation": "Compiler infers type.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-13",
      "type": "typing",
      "question": "Const variable?",
      "correctAnswer": [
        "cannot change"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-14",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-15",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "address"
      ],
      "explanation": "Memory address.",
      "xp": 4
    },
    {
      "id": "cpp-17-3-16",
      "type": "typing",
      "question": "For loop?",
      "correctAnswer": [
        "iteration"
      ],
      "explanation": "Repeated execution.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-17",
      "type": "typing",
      "question": "While loop?",
      "correctAnswer": [
        "conditional iteration"
      ],
      "explanation": "While condition true.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-18",
      "type": "typing",
      "question": "If statement?",
      "correctAnswer": [
        "conditional"
      ],
      "explanation": "Execute if true.",
      "xp": 5
    },
    {
      "id": "cpp-17-3-19",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    },
    {
      "id": "cpp-17-3-20",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    }
  ]
}

// Lesson 4: shared_mutex
{
  "lessonId": "shared_mutex",
  "lessonName": "shared_mutex",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# shared_mutex\n\n## Introduction\nThis lesson covers fundamental concepts of shared_mutex in C++.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "cpp-17-4-1",
      "type": "typing",
      "question": "C++ compilation?",
      "correctAnswer": [
        "compile then link"
      ],
      "explanation": "Source → Object → Executable.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-2",
      "type": "typing",
      "question": "What is include?",
      "correctAnswer": [
        "header file"
      ],
      "explanation": "Include other files.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-3",
      "type": "typing",
      "question": "What is namespace?",
      "correctAnswer": [
        "avoid naming conflicts"
      ],
      "explanation": "Group identifiers.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-4",
      "type": "typing",
      "question": "std namespace?",
      "correctAnswer": [
        "standard library"
      ],
      "explanation": "C++ standard library.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-5",
      "type": "typing",
      "question": "Main function?",
      "correctAnswer": [
        "entry point"
      ],
      "explanation": "Program starts here.",
      "xp": 4
    },
    {
      "id": "cpp-17-4-6",
      "type": "typing",
      "question": "Return type?",
      "correctAnswer": [
        "function output type"
      ],
      "explanation": "Type of value returned.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-7",
      "type": "typing",
      "question": "Void return?",
      "correctAnswer": [
        "no return"
      ],
      "explanation": "Returns nothing.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-8",
      "type": "typing",
      "question": "What is int?",
      "correctAnswer": [
        "integer"
      ],
      "explanation": "Whole numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-9",
      "type": "typing",
      "question": "What is double?",
      "correctAnswer": [
        "floating point"
      ],
      "explanation": "Decimal numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-10",
      "type": "typing",
      "question": "What is string?",
      "correctAnswer": [
        "text"
      ],
      "explanation": "std::string for text.",
      "xp": 4
    },
    {
      "id": "cpp-17-4-11",
      "type": "typing",
      "question": "What is vector?",
      "correctAnswer": [
        "dynamic array"
      ],
      "explanation": "Resizable container.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-12",
      "type": "typing",
      "question": "What is auto?",
      "correctAnswer": [
        "type deduction"
      ],
      "explanation": "Compiler infers type.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-13",
      "type": "typing",
      "question": "Const variable?",
      "correctAnswer": [
        "cannot change"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-14",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-15",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "address"
      ],
      "explanation": "Memory address.",
      "xp": 4
    },
    {
      "id": "cpp-17-4-16",
      "type": "typing",
      "question": "For loop?",
      "correctAnswer": [
        "iteration"
      ],
      "explanation": "Repeated execution.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-17",
      "type": "typing",
      "question": "While loop?",
      "correctAnswer": [
        "conditional iteration"
      ],
      "explanation": "While condition true.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-18",
      "type": "typing",
      "question": "If statement?",
      "correctAnswer": [
        "conditional"
      ],
      "explanation": "Execute if true.",
      "xp": 5
    },
    {
      "id": "cpp-17-4-19",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    },
    {
      "id": "cpp-17-4-20",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    }
  ]
}

// Lesson 5: Deadlocks
{
  "lessonId": "deadlocks",
  "lessonName": "Deadlocks",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Deadlocks\n\n## Introduction\nThis lesson covers fundamental concepts of deadlocks in C++.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "cpp-17-5-1",
      "type": "typing",
      "question": "C++ compilation?",
      "correctAnswer": [
        "compile then link"
      ],
      "explanation": "Source → Object → Executable.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-2",
      "type": "typing",
      "question": "What is include?",
      "correctAnswer": [
        "header file"
      ],
      "explanation": "Include other files.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-3",
      "type": "typing",
      "question": "What is namespace?",
      "correctAnswer": [
        "avoid naming conflicts"
      ],
      "explanation": "Group identifiers.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-4",
      "type": "typing",
      "question": "std namespace?",
      "correctAnswer": [
        "standard library"
      ],
      "explanation": "C++ standard library.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-5",
      "type": "typing",
      "question": "Main function?",
      "correctAnswer": [
        "entry point"
      ],
      "explanation": "Program starts here.",
      "xp": 4
    },
    {
      "id": "cpp-17-5-6",
      "type": "typing",
      "question": "Return type?",
      "correctAnswer": [
        "function output type"
      ],
      "explanation": "Type of value returned.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-7",
      "type": "typing",
      "question": "Void return?",
      "correctAnswer": [
        "no return"
      ],
      "explanation": "Returns nothing.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-8",
      "type": "typing",
      "question": "What is int?",
      "correctAnswer": [
        "integer"
      ],
      "explanation": "Whole numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-9",
      "type": "typing",
      "question": "What is double?",
      "correctAnswer": [
        "floating point"
      ],
      "explanation": "Decimal numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-10",
      "type": "typing",
      "question": "What is string?",
      "correctAnswer": [
        "text"
      ],
      "explanation": "std::string for text.",
      "xp": 4
    },
    {
      "id": "cpp-17-5-11",
      "type": "typing",
      "question": "What is vector?",
      "correctAnswer": [
        "dynamic array"
      ],
      "explanation": "Resizable container.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-12",
      "type": "typing",
      "question": "What is auto?",
      "correctAnswer": [
        "type deduction"
      ],
      "explanation": "Compiler infers type.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-13",
      "type": "typing",
      "question": "Const variable?",
      "correctAnswer": [
        "cannot change"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-14",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-15",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "address"
      ],
      "explanation": "Memory address.",
      "xp": 4
    },
    {
      "id": "cpp-17-5-16",
      "type": "typing",
      "question": "For loop?",
      "correctAnswer": [
        "iteration"
      ],
      "explanation": "Repeated execution.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-17",
      "type": "typing",
      "question": "While loop?",
      "correctAnswer": [
        "conditional iteration"
      ],
      "explanation": "While condition true.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-18",
      "type": "typing",
      "question": "If statement?",
      "correctAnswer": [
        "conditional"
      ],
      "explanation": "Execute if true.",
      "xp": 5
    },
    {
      "id": "cpp-17-5-19",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    },
    {
      "id": "cpp-17-5-20",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    }
  ]
}

// Lesson 6: Race Conditions
{
  "lessonId": "race-conditions",
  "lessonName": "Race Conditions",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Race Conditions\n\n## Introduction\nThis lesson covers fundamental concepts of race conditions in C++.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "cpp-17-6-1",
      "type": "typing",
      "question": "C++ compilation?",
      "correctAnswer": [
        "compile then link"
      ],
      "explanation": "Source → Object → Executable.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-2",
      "type": "typing",
      "question": "What is include?",
      "correctAnswer": [
        "header file"
      ],
      "explanation": "Include other files.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-3",
      "type": "typing",
      "question": "What is namespace?",
      "correctAnswer": [
        "avoid naming conflicts"
      ],
      "explanation": "Group identifiers.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-4",
      "type": "typing",
      "question": "std namespace?",
      "correctAnswer": [
        "standard library"
      ],
      "explanation": "C++ standard library.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-5",
      "type": "typing",
      "question": "Main function?",
      "correctAnswer": [
        "entry point"
      ],
      "explanation": "Program starts here.",
      "xp": 4
    },
    {
      "id": "cpp-17-6-6",
      "type": "typing",
      "question": "Return type?",
      "correctAnswer": [
        "function output type"
      ],
      "explanation": "Type of value returned.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-7",
      "type": "typing",
      "question": "Void return?",
      "correctAnswer": [
        "no return"
      ],
      "explanation": "Returns nothing.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-8",
      "type": "typing",
      "question": "What is int?",
      "correctAnswer": [
        "integer"
      ],
      "explanation": "Whole numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-9",
      "type": "typing",
      "question": "What is double?",
      "correctAnswer": [
        "floating point"
      ],
      "explanation": "Decimal numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-10",
      "type": "typing",
      "question": "What is string?",
      "correctAnswer": [
        "text"
      ],
      "explanation": "std::string for text.",
      "xp": 4
    },
    {
      "id": "cpp-17-6-11",
      "type": "typing",
      "question": "What is vector?",
      "correctAnswer": [
        "dynamic array"
      ],
      "explanation": "Resizable container.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-12",
      "type": "typing",
      "question": "What is auto?",
      "correctAnswer": [
        "type deduction"
      ],
      "explanation": "Compiler infers type.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-13",
      "type": "typing",
      "question": "Const variable?",
      "correctAnswer": [
        "cannot change"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-14",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-15",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "address"
      ],
      "explanation": "Memory address.",
      "xp": 4
    },
    {
      "id": "cpp-17-6-16",
      "type": "typing",
      "question": "For loop?",
      "correctAnswer": [
        "iteration"
      ],
      "explanation": "Repeated execution.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-17",
      "type": "typing",
      "question": "While loop?",
      "correctAnswer": [
        "conditional iteration"
      ],
      "explanation": "While condition true.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-18",
      "type": "typing",
      "question": "If statement?",
      "correctAnswer": [
        "conditional"
      ],
      "explanation": "Execute if true.",
      "xp": 5
    },
    {
      "id": "cpp-17-6-19",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    },
    {
      "id": "cpp-17-6-20",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    }
  ]
}

// Lesson 7: Atomic Operations
{
  "lessonId": "atomic-operations",
  "lessonName": "Atomic Operations",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Atomic Operations\n\n## Introduction\nThis lesson covers fundamental concepts of atomic operations in C++.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "cpp-17-7-1",
      "type": "typing",
      "question": "C++ compilation?",
      "correctAnswer": [
        "compile then link"
      ],
      "explanation": "Source → Object → Executable.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-2",
      "type": "typing",
      "question": "What is include?",
      "correctAnswer": [
        "header file"
      ],
      "explanation": "Include other files.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-3",
      "type": "typing",
      "question": "What is namespace?",
      "correctAnswer": [
        "avoid naming conflicts"
      ],
      "explanation": "Group identifiers.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-4",
      "type": "typing",
      "question": "std namespace?",
      "correctAnswer": [
        "standard library"
      ],
      "explanation": "C++ standard library.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-5",
      "type": "typing",
      "question": "Main function?",
      "correctAnswer": [
        "entry point"
      ],
      "explanation": "Program starts here.",
      "xp": 4
    },
    {
      "id": "cpp-17-7-6",
      "type": "typing",
      "question": "Return type?",
      "correctAnswer": [
        "function output type"
      ],
      "explanation": "Type of value returned.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-7",
      "type": "typing",
      "question": "Void return?",
      "correctAnswer": [
        "no return"
      ],
      "explanation": "Returns nothing.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-8",
      "type": "typing",
      "question": "What is int?",
      "correctAnswer": [
        "integer"
      ],
      "explanation": "Whole numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-9",
      "type": "typing",
      "question": "What is double?",
      "correctAnswer": [
        "floating point"
      ],
      "explanation": "Decimal numbers.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-10",
      "type": "typing",
      "question": "What is string?",
      "correctAnswer": [
        "text"
      ],
      "explanation": "std::string for text.",
      "xp": 4
    },
    {
      "id": "cpp-17-7-11",
      "type": "typing",
      "question": "What is vector?",
      "correctAnswer": [
        "dynamic array"
      ],
      "explanation": "Resizable container.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-12",
      "type": "typing",
      "question": "What is auto?",
      "correctAnswer": [
        "type deduction"
      ],
      "explanation": "Compiler infers type.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-13",
      "type": "typing",
      "question": "Const variable?",
      "correctAnswer": [
        "cannot change"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-14",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias"
      ],
      "explanation": "Alternative name.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-15",
      "type": "typing",
      "question": "What is pointer?",
      "correctAnswer": [
        "address"
      ],
      "explanation": "Memory address.",
      "xp": 4
    },
    {
      "id": "cpp-17-7-16",
      "type": "typing",
      "question": "For loop?",
      "correctAnswer": [
        "iteration"
      ],
      "explanation": "Repeated execution.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-17",
      "type": "typing",
      "question": "While loop?",
      "correctAnswer": [
        "conditional iteration"
      ],
      "explanation": "While condition true.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-18",
      "type": "typing",
      "question": "If statement?",
      "correctAnswer": [
        "conditional"
      ],
      "explanation": "Execute if true.",
      "xp": 5
    },
    {
      "id": "cpp-17-7-19",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    },
    {
      "id": "cpp-17-7-20",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    }
  ]
}

// Lesson 8: Memory Ordering
{
  "lessonId": "memory-ordering",
  "lessonName": "Memory Ordering",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Memory Ordering\n\n## Introduction\nThis lesson covers fundamental concepts of memory ordering in C++.\n\n## Key Concepts\n- Core principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples illustrating the main concepts.\n\n## Summary\nReview of key points and their significance.\n",
  "questions": [
    {
      "id": "cpp-17-8-1",
      "type": "typing",
      "question": "What is a pointer?",
      "correctAnswer": [
        "memory address"
      ],
      "explanation": "Stores address.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-2",
      "type": "typing",
      "question": "Dereference operator?",
      "correctAnswer": [
        "*",
        "asterisk"
      ],
      "explanation": "Access pointed value.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-3",
      "type": "typing",
      "question": "Address operator?",
      "correctAnswer": [
        "&",
        "ampersand"
      ],
      "explanation": "Get address of variable.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-4",
      "type": "typing",
      "question": "Null pointer?",
      "correctAnswer": [
        "nullptr",
        "0",
        "NULL"
      ],
      "explanation": "Points to nothing.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-5",
      "type": "typing",
      "question": "What is reference?",
      "correctAnswer": [
        "alias",
        "alternative name"
      ],
      "explanation": "Another name for variable.",
      "xp": 4
    },
    {
      "id": "cpp-17-8-6",
      "type": "typing",
      "question": "new operator?",
      "correctAnswer": [
        "dynamic allocation",
        "heap"
      ],
      "explanation": "Allocate memory.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-7",
      "type": "typing",
      "question": "delete operator?",
      "correctAnswer": [
        "free memory",
        "deallocate"
      ],
      "explanation": "Free allocated memory.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-8",
      "type": "typing",
      "question": "What is unique_ptr?",
      "correctAnswer": [
        "exclusive ownership"
      ],
      "explanation": "Owns pointer exclusively.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-9",
      "type": "typing",
      "question": "What is shared_ptr?",
      "correctAnswer": [
        "shared ownership"
      ],
      "explanation": "Multiple owners with reference counting.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-10",
      "type": "typing",
      "question": "What is weak_ptr?",
      "correctAnswer": [
        "non-owning"
      ],
      "explanation": "Observes shared_ptr without owning.",
      "xp": 4
    },
    {
      "id": "cpp-17-8-11",
      "type": "typing",
      "question": "Stack vs heap?",
      "correctAnswer": [
        "automatic vs manual",
        "scope vs lifetime"
      ],
      "explanation": "Stack automatic, heap manual.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-12",
      "type": "typing",
      "question": "What is RAII?",
      "correctAnswer": [
        "resource acquisition is initialization"
      ],
      "explanation": "Manage resources in constructors.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-13",
      "type": "typing",
      "question": "Move semantics?",
      "correctAnswer": [
        "transfer ownership"
      ],
      "explanation": "steal resources.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-14",
      "type": "typing",
      "question": "std::move?",
      "correctAnswer": [
        "cast to rvalue"
      ],
      "explanation": "Enable move.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-15",
      "type": "typing",
      "question": "What is dangling pointer?",
      "correctAnswer": [
        "points to freed memory"
      ],
      "explanation": "Invalid reference.",
      "xp": 4
    },
    {
      "id": "cpp-17-8-16",
      "type": "typing",
      "question": "Memory leak?",
      "correctAnswer": [
        "unfreed allocation"
      ],
      "explanation": "Lost memory.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-17",
      "type": "typing",
      "question": "What is smart pointer?",
      "correctAnswer": [
        "automatic memory management"
      ],
      "explanation": "RAII wrapper.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-18",
      "type": "typing",
      "question": "const correctness?",
      "correctAnswer": [
        "cannot modify"
      ],
      "explanation": "Read-only.",
      "xp": 5
    },
    {
      "id": "cpp-17-8-19",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    },
    {
      "id": "cpp-17-8-20",
      "type": "code",
      "question": "What is the output?",
      "codeTemplate": "int x = 10;\nstd::cout << x;",
      "expectedOutput": "10",
      "explanation": "Outputs the value of x.",
      "xp": 6
    }
  ]
}

