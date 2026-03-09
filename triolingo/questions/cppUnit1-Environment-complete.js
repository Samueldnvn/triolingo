// C++ - Unit 1
// Generated: 2026-03-08 13:41:28

// Lesson 1: Environment and Hello World
{
  "lessonId": "hello-world",
  "lessonName": "Environment and Hello World",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# C++ Environment and Hello World\n\n## Basic Program Structure\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}\n```\n\n## Components\n- `#include <iostream>`: Input/output library\n- `int main()`: Entry point function\n- `std::cout`: Standard output stream\n- `return 0`: Program success",
  "questions": [
    {
      "id": "cpp-1-1-1",
      "type": "typing",
      "question": "What is main()?",
      "correctAnswer": [
        "entry point",
        "program entry point"
      ],
      "explanation": "Where program execution begins.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-2",
      "type": "code",
      "question": "Write a Hello World program",
      "codeTemplate": "#include <iostream>\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}",
      "expectedOutput": "Hello, World!",
      "explanation": "Use std::cout for output.",
      "xp": 6
    },
    {
      "id": "cpp-1-1-3",
      "type": "typing",
      "question": "What does #include do?",
      "correctAnswer": [
        "includes library",
        "imports header"
      ],
      "explanation": "Brings in library code.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-4",
      "type": "typing",
      "question": "What is std::cout?",
      "correctAnswer": [
        "standard output",
        "output stream"
      ],
      "explanation": "Outputs to console.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-5",
      "type": "typing",
      "question": "What is std::endl?",
      "correctAnswer": [
        "end line",
        "newline"
      ],
      "explanation": "Ends line and flushes buffer.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-6",
      "type": "typing",
      "question": "What does return 0 mean?",
      "correctAnswer": [
        "success",
        "program succeeded"
      ],
      "explanation": "Program executed successfully.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-7",
      "type": "code",
      "question": "Print your name",
      "codeTemplate": "#include <iostream>\nint main() {\n    std::cout << \"Tony\" << std::endl;\n    return 0;\n}",
      "expectedOutput": "Tony",
      "explanation": "Replace with your name.",
      "xp": 6
    },
    {
      "id": "cpp-1-1-8",
      "type": "typing",
      "question": "What library for I/O?",
      "correctAnswer": [
        "<iostream>",
        "iostream"
      ],
      "explanation": "Input/output library.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-9",
      "type": "typing",
      "question": "What starts a C++ comment?",
      "correctAnswer": [
        "//",
        "two slashes"
      ],
      "explanation": "Single-line comment.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-10",
      "type": "typing",
      "question": "C++ file extension?",
      "correctAnswer": [
        ".cpp",
        "cpp"
      ],
      "explanation": ".cpp for C++ source files.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-11",
      "type": "code",
      "question": "Print 42",
      "codeTemplate": "#include <iostream>\nint main() {\n    std::cout << 42 << std::endl;\n    return 0;\n}",
      "expectedOutput": "42",
      "explanation": "Output integer directly.",
      "xp": 6
    },
    {
      "id": "cpp-1-1-12",
      "type": "typing",
      "question": "What is a semicolon for?",
      "correctAnswer": [
        "ends statement",
        "statement terminator"
      ],
      "explanation": "Ends each statement.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-13",
      "type": "typing",
      "question": "What does :: mean?",
      "correctAnswer": [
        "scope resolution",
        "scope operator"
      ],
      "explanation": "Accesses namespace members.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-14",
      "type": "typing",
      "question": "What is std namespace?",
      "correctAnswer": [
        "standard library",
        "standard"
      ],
      "explanation": "Standard library namespace.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-15",
      "type": "typing",
      "question": "How compile C++?",
      "correctAnswer": [
        "g++ file.cpp",
        "g++"
      ],
      "explanation": "Use g++ compiler.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-16",
      "type": "code",
      "question": "Print two lines",
      "codeTemplate": "#include <iostream>\nint main() {\n    std::cout << \"Line 1\" << std::endl;\n    std::cout << \"Line 2\" << std::endl;\n    return 0;\n}",
      "expectedOutput": "Line 1\nLine 2",
      "explanation": "Use std::endl for each line.",
      "xp": 6
    },
    {
      "id": "cpp-1-1-17",
      "type": "typing",
      "question": "What is main return type?",
      "correctAnswer": [
        "int",
        "integer"
      ],
      "explanation": "Returns integer status code.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-18",
      "type": "typing",
      "question": "What starts a block?",
      "correctAnswer": [
        "{",
        "opening brace"
      ],
      "explanation": "Opening brace.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-19",
      "type": "typing",
      "question": "What ends a block?",
      "correctAnswer": [
        "}",
        "closing brace"
      ],
      "explanation": "Closing brace.",
      "xp": 4
    },
    {
      "id": "cpp-1-1-20",
      "type": "code",
      "question": "Print sum 5+3",
      "codeTemplate": "#include <iostream>\nint main() {\n    std::cout << 5 + 3 << std::endl;\n    return 0;\n}",
      "expectedOutput": "8",
      "explanation": "5 + 3 = 8",
      "xp": 6
    }
  ]
}

// Lesson 2: C++ Lesson 2
{
  "lessonId": "cpp-lesson-2",
  "lessonName": "C++ Lesson 2",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# C++ Lesson 2\n\n(Lesson text for C++ Lesson 2)",
  "questions": [
    {
      "id": "cpp-1-2-1",
      "type": "typing",
      "question": "Question 1",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-2",
      "type": "typing",
      "question": "Question 2",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-3",
      "type": "typing",
      "question": "Question 3",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-4",
      "type": "typing",
      "question": "Question 4",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-5",
      "type": "typing",
      "question": "Question 5",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-6",
      "type": "typing",
      "question": "Question 6",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-7",
      "type": "typing",
      "question": "Question 7",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-8",
      "type": "typing",
      "question": "Question 8",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-9",
      "type": "typing",
      "question": "Question 9",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-10",
      "type": "typing",
      "question": "Question 10",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-11",
      "type": "typing",
      "question": "Question 11",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-12",
      "type": "typing",
      "question": "Question 12",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-13",
      "type": "typing",
      "question": "Question 13",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-14",
      "type": "typing",
      "question": "Question 14",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-15",
      "type": "typing",
      "question": "Question 15",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-16",
      "type": "typing",
      "question": "Question 16",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-17",
      "type": "typing",
      "question": "Question 17",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-18",
      "type": "typing",
      "question": "Question 18",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-19",
      "type": "typing",
      "question": "Question 19",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-2-20",
      "type": "typing",
      "question": "Question 20",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    }
  ]
}

// Lesson 3: C++ Lesson 3
{
  "lessonId": "cpp-lesson-3",
  "lessonName": "C++ Lesson 3",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# C++ Lesson 3\n\n(Lesson text for C++ Lesson 3)",
  "questions": [
    {
      "id": "cpp-1-3-1",
      "type": "typing",
      "question": "Question 1",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-2",
      "type": "typing",
      "question": "Question 2",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-3",
      "type": "typing",
      "question": "Question 3",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-4",
      "type": "typing",
      "question": "Question 4",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-5",
      "type": "typing",
      "question": "Question 5",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-6",
      "type": "typing",
      "question": "Question 6",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-7",
      "type": "typing",
      "question": "Question 7",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-8",
      "type": "typing",
      "question": "Question 8",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-9",
      "type": "typing",
      "question": "Question 9",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-10",
      "type": "typing",
      "question": "Question 10",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-11",
      "type": "typing",
      "question": "Question 11",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-12",
      "type": "typing",
      "question": "Question 12",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-13",
      "type": "typing",
      "question": "Question 13",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-14",
      "type": "typing",
      "question": "Question 14",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-15",
      "type": "typing",
      "question": "Question 15",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-16",
      "type": "typing",
      "question": "Question 16",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-17",
      "type": "typing",
      "question": "Question 17",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-18",
      "type": "typing",
      "question": "Question 18",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-19",
      "type": "typing",
      "question": "Question 19",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-3-20",
      "type": "typing",
      "question": "Question 20",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    }
  ]
}

// Lesson 4: C++ Lesson 4
{
  "lessonId": "cpp-lesson-4",
  "lessonName": "C++ Lesson 4",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# C++ Lesson 4\n\n(Lesson text for C++ Lesson 4)",
  "questions": [
    {
      "id": "cpp-1-4-1",
      "type": "typing",
      "question": "Question 1",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-2",
      "type": "typing",
      "question": "Question 2",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-3",
      "type": "typing",
      "question": "Question 3",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-4",
      "type": "typing",
      "question": "Question 4",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-5",
      "type": "typing",
      "question": "Question 5",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-6",
      "type": "typing",
      "question": "Question 6",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-7",
      "type": "typing",
      "question": "Question 7",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-8",
      "type": "typing",
      "question": "Question 8",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-9",
      "type": "typing",
      "question": "Question 9",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-10",
      "type": "typing",
      "question": "Question 10",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-11",
      "type": "typing",
      "question": "Question 11",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-12",
      "type": "typing",
      "question": "Question 12",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-13",
      "type": "typing",
      "question": "Question 13",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-14",
      "type": "typing",
      "question": "Question 14",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-15",
      "type": "typing",
      "question": "Question 15",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-16",
      "type": "typing",
      "question": "Question 16",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-17",
      "type": "typing",
      "question": "Question 17",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-18",
      "type": "typing",
      "question": "Question 18",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-19",
      "type": "typing",
      "question": "Question 19",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-4-20",
      "type": "typing",
      "question": "Question 20",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    }
  ]
}

// Lesson 5: C++ Lesson 5
{
  "lessonId": "cpp-lesson-5",
  "lessonName": "C++ Lesson 5",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# C++ Lesson 5\n\n(Lesson text for C++ Lesson 5)",
  "questions": [
    {
      "id": "cpp-1-5-1",
      "type": "typing",
      "question": "Question 1",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-2",
      "type": "typing",
      "question": "Question 2",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-3",
      "type": "typing",
      "question": "Question 3",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-4",
      "type": "typing",
      "question": "Question 4",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-5",
      "type": "typing",
      "question": "Question 5",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-6",
      "type": "typing",
      "question": "Question 6",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-7",
      "type": "typing",
      "question": "Question 7",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-8",
      "type": "typing",
      "question": "Question 8",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-9",
      "type": "typing",
      "question": "Question 9",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-10",
      "type": "typing",
      "question": "Question 10",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-11",
      "type": "typing",
      "question": "Question 11",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-12",
      "type": "typing",
      "question": "Question 12",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-13",
      "type": "typing",
      "question": "Question 13",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-14",
      "type": "typing",
      "question": "Question 14",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-15",
      "type": "typing",
      "question": "Question 15",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-16",
      "type": "typing",
      "question": "Question 16",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-17",
      "type": "typing",
      "question": "Question 17",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-18",
      "type": "typing",
      "question": "Question 18",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-19",
      "type": "typing",
      "question": "Question 19",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-5-20",
      "type": "typing",
      "question": "Question 20",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    }
  ]
}

// Lesson 6: C++ Lesson 6
{
  "lessonId": "cpp-lesson-6",
  "lessonName": "C++ Lesson 6",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# C++ Lesson 6\n\n(Lesson text for C++ Lesson 6)",
  "questions": [
    {
      "id": "cpp-1-6-1",
      "type": "typing",
      "question": "Question 1",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-2",
      "type": "typing",
      "question": "Question 2",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-3",
      "type": "typing",
      "question": "Question 3",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-4",
      "type": "typing",
      "question": "Question 4",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-5",
      "type": "typing",
      "question": "Question 5",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-6",
      "type": "typing",
      "question": "Question 6",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-7",
      "type": "typing",
      "question": "Question 7",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-8",
      "type": "typing",
      "question": "Question 8",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-9",
      "type": "typing",
      "question": "Question 9",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-10",
      "type": "typing",
      "question": "Question 10",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-11",
      "type": "typing",
      "question": "Question 11",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-12",
      "type": "typing",
      "question": "Question 12",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-13",
      "type": "typing",
      "question": "Question 13",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-14",
      "type": "typing",
      "question": "Question 14",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-15",
      "type": "typing",
      "question": "Question 15",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-16",
      "type": "typing",
      "question": "Question 16",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-17",
      "type": "typing",
      "question": "Question 17",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-18",
      "type": "typing",
      "question": "Question 18",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-19",
      "type": "typing",
      "question": "Question 19",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    },
    {
      "id": "cpp-1-6-20",
      "type": "typing",
      "question": "Question 20",
      "correctAnswer": [
        "answer"
      ],
      "explanation": "Explanation",
      "xp": 5
    }
  ]
}

