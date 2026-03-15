// CPP - Combined Course
// C++ for Python Programmers + Algorithms

window.cppCombined = {
  "courseName": "C++",
  "units": [
    {
      "unitId": "1",
      "unitName": "1. C++ Environment and Language Basics",
      "lessons": [
        {
          "id": "1-1",
          "title": "Introduction to C++",
          "unitTitle": "1. C++ Environment and Language Basics",
          "xp": 32,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Introduction to C++\n\nC++ is a powerful, high-performance programming language created by Bjarne Stroustrup in 1979 as an extension of C. It's used in game development, systems programming, embedded systems, and competitive programming.\n\n## Your First C++ Program\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}\n```\n\n**Explanation:**\n- `#include <iostream>`: Includes input/output library\n- `int main()`: Entry point of the program\n- `std::cout`: Standard output stream\n- `<<`: Stream insertion operator\n- `std::endl`: End line (flushes buffer)\n- `return 0`: Indicates successful execution",
          "questions": [
            {
              "id": "cpp-1-1-1",
              "type": "typing",
              "question": "Who created C++?",
              "correctAnswer": [
                "Bjarne Stroustrup",
                "Stroustrup"
              ],
              "explanation": "Bjarne Stroustrup created C++ in 1979 as an extension of C.",
              "xp": 5
            },
            {
              "id": "cpp-1-1-2",
              "type": "typing",
              "question": "What is the entry point of a C++ program?",
              "correctAnswer": [
                "main()",
                "int main()"
              ],
              "explanation": "The main() function is the entry point where program execution begins.",
              "xp": 5
            },
            {
              "id": "cpp-1-1-3",
              "type": "typing",
              "question": "What library do you include for input/output?",
              "correctAnswer": [
                "iostream",
                "<iostream>"
              ],
              "explanation": "The iostream library provides std::cout for output and std::cin for input.",
              "xp": 5
            },
            {
              "id": "cpp-1-1-4",
              "type": "code",
              "question": "Write a C++ program that prints 'Hello, World!' to the console.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    // Your code here\n    \n    return 0;\n}\n",
              "expectedOutput": "Hello, World!",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use std::cout << \"Hello, World!\" << std::endl; to print the message.",
              "xp": 12
            },
            {
              "id": "cpp-1-1-5",
              "type": "typing",
              "question": "What operator is used with std::cout?",
              "correctAnswer": [
                "<<",
                "insertion operator"
              ],
              "explanation": "The << operator (stream insertion) sends data to the output stream.",
              "xp": 5
            }
          ]
        },
        {
          "id": "1-2",
          "title": "Variables and Data Types",
          "xp": 88,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Variables and Data Types in C++\n\nVariables are containers for storing data values. Each variable has a specific data type that determines what kind of data it can hold.\n\n## Declaring Variables\n\n```cpp\ntype variableName = value;\n```\n\n**Examples:**\n```cpp\nint age = 25;\ndouble price = 19.99;\nchar grade = 'A';\nbool passed = true;\n```\n\n## Basic Data Types\n\n- `int`: Whole numbers (e.g., 42, -10)\n- `double`: Decimal numbers (e.g., 3.14, -0.5)\n- `char`: Single character (e.g., 'A', '7')\n- `bool`: true or false\n- `std::string`: Text (requires #include <string>)",
          "questions": [
            {
              "id": "cpp-1-2-1",
              "type": "typing",
              "question": "What data type stores whole numbers?",
              "correctAnswer": [
                "int",
                "integer"
              ],
              "explanation": "The int type is used to store whole numbers (integers) in C++.",
              "xp": 5
            },
            {
              "id": "cpp-1-2-2",
              "type": "typing",
              "question": "What data type stores decimal numbers?",
              "correctAnswer": [
                "double"
              ],
              "explanation": "double is used for decimal numbers with high precision.",
              "xp": 5
            },
            {
              "id": "cpp-1-2-3",
              "type": "code",
              "question": "Declare an integer variable named 'count' and set it to 5.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    // Declare count here\n    \n    std::cout << count << std::endl;\n    return 0;\n}\n",
              "expectedOutput": "5",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use int count = 5; to declare and initialize the variable.",
              "xp": 12
            },
            {
              "id": "cpp-1-2-4",
              "type": "typing",
              "question": "What type stores a single character?",
              "correctAnswer": [
                "char",
                "character"
              ],
              "explanation": "The char type stores a single character (1 byte).",
              "xp": 5
            },
            {
              "id": "cpp-1-2-5",
              "type": "code",
              "question": "Declare a string variable named 'name' with value 'C++'.",
              "codeTemplate": "#include <iostream>\n#include <string>\n\nint main() {\n    // Declare name here\n    \n    std::cout << name << std::endl;\n    return 0;\n}\n",
              "expectedOutput": "C++",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use std::string name = \"C++\"; to declare a string.",
              "xp": 12
            }
          ]
        },
        {
          "id": "1-3",
          "title": "Input and Output",
          "xp": 88,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Input and Output in C++\n\nC++ uses the iostream library for input and output operations.\n\n## Standard Output (std::cout)\n\n```cpp\nstd::cout << \"Hello\" << std::endl;\n```\n\n## Standard Input (std::cin)\n\n```cpp\nint age;\nstd::cin >> age;\n```\n\n## Complete Example\n\n```cpp\n#include <iostream>\n#include <string>\n\nint main() {\n    std::string name;\n    int age;\n    \n    std::cout << \"Enter your name: \";\n    std::cin >> name;\n    \n    std::cout << \"Enter your age: \";\n    std::cin >> age;\n    \n    std::cout << \"Hello \" << name << \"! You are \" << age << \" years old.\" << std::endl;\n    \n    return 0;\n}\n```",
          "questions": [
            {
              "id": "cpp-1-3-1",
              "type": "typing",
              "question": "What object is used for standard output?",
              "correctAnswer": [
                "std::cout",
                "cout"
              ],
              "explanation": "std::cout (character output) is used to print to the console.",
              "xp": 5
            },
            {
              "id": "cpp-1-3-2",
              "type": "typing",
              "question": "What object is used for standard input?",
              "correctAnswer": [
                "std::cin",
                "cin"
              ],
              "explanation": "std::cin (character input) is used to read from the keyboard.",
              "xp": 5
            },
            {
              "id": "cpp-1-3-3",
              "type": "code",
              "question": "Read an integer from input and store it in variable 'x'.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int x;\n    // Read x from input here\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
              "expectedOutput": "User input value",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use std::cin >> x; to read an integer from input.",
              "xp": 12
            },
            {
              "id": "cpp-1-3-4",
              "type": "multiple-choice",
              "question": "What operator does std::cin use?",
              "options": [
                "<<",
                ">>",
                "->",
                "::"
              ],
              "correct": 1,
              "explanation": "std::cin uses the >> operator (stream extraction) to read input.",
              "xp": 3
            },
            {
              "id": "cpp-1-3-5",
              "type": "code",
              "question": "Read two integers a and b, then print their sum.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int a, b;\n    // Read a and b\n    // Print their sum\n    \n    return 0;\n}\n",
              "expectedOutput": "Sum of a and b",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use std::cin >> a >> b; then std::cout << a + b << std::endl;",
              "xp": 12
            }
          ]
        },
        {
          "id": "1-4",
          "title": "Basic Operators",
          "xp": 88,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Basic Operators in C++\n\n## Arithmetic Operators\n\n- `+`: Addition\n- `-`: Subtraction\n- `*`: Multiplication\n- `/`: Division\n- `%`: Modulo (remainder)\n\n**Example:**\n```cpp\nint a = 10, b = 3;\nstd::cout << a + b;  // 13\nstd::cout << a % b;  // 1 (remainder)\n```\n\n## Assignment Operators\n\n```cpp\n+=  // Add and assign\n-=  // Subtract and assign\n*=  // Multiply and assign\n/=  // Divide and assign\n%=  // Modulo and assign\n```\n\n## Comparison Operators\n\n- `==`: Equal to\n- `!=`: Not equal to\n- `>`: Greater than\n- `<`: Less than\n\nThese return `true` or `false`.",
          "questions": [
            {
              "id": "cpp-1-4-1",
              "type": "typing",
              "question": "What operator gives the remainder?",
              "correctAnswer": [
                "%",
                "modulo"
              ],
              "explanation": "The % operator (modulo) returns the remainder of division.",
              "xp": 5
            },
            {
              "id": "cpp-1-4-2",
              "type": "typing",
              "question": "What is 10 % 3?",
              "correctAnswer": [
                "1"
              ],
              "explanation": "10 divided by 3 is 3 with remainder 1, so 10 % 3 = 1.",
              "xp": 5
            },
            {
              "id": "cpp-1-4-3",
              "type": "code",
              "question": "Add 5 to variable 'x' using += operator.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 10;\n    // Add 5 to x using +=\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
              "expectedOutput": "15",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use x += 5; to add 5 to x.",
              "xp": 12
            },
            {
              "id": "cpp-1-4-4",
              "type": "multiple-choice",
              "question": "What operator checks if two values are equal?",
              "options": [
                "=",
                "==",
                "===",
                "equals"
              ],
              "correct": 1,
              "explanation": "== is the equality operator. = is assignment.",
              "xp": 3
            },
            {
              "id": "cpp-1-4-5",
              "type": "code",
              "question": "Check if x is greater than 5 and print 'true' or 'false'.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 7;\n    // Check if x > 5 and print result\n    \n    return 0;\n}\n",
              "expectedOutput": "true",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use std::cout << std::boolalpha << (x > 5) << std::endl;",
              "xp": 12
            }
          ]
        },
        {
          "id": "1-5",
          "title": "Control Flow: If Statements",
          "xp": 88,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Control Flow: If Statements in C++\n\n## If Statement\n\n```cpp\nif (condition) {\n    // Code to execute if condition is true\n}\n```\n\n## If-Else Statement\n\n```cpp\nif (condition) {\n    // Code if true\n} else {\n    // Code if false\n}\n```\n\n## If-Else If-Else\n\n```cpp\nif (condition1) {\n    // Code if condition1 is true\n} else if (condition2) {\n    // Code if condition1 is false and condition2 is true\n} else {\n    // Code if all conditions are false\n}\n```\n\n**Example:**\n```cpp\nint score = 85;\n\nif (score >= 90) {\n    std::cout << \"Grade: A\";\n} else if (score >= 80) {\n    std::cout << \"Grade: B\";\n} else {\n    std::cout << \"Grade: C\";\n}\n```",
          "questions": [
            {
              "id": "cpp-1-5-1",
              "type": "typing",
              "question": "What keyword is used for conditional statements?",
              "correctAnswer": [
                "if",
                "if statement"
              ],
              "explanation": "The 'if' keyword is used to create conditional statements in C++.",
              "xp": 5
            },
            {
              "id": "cpp-1-5-2",
              "type": "typing",
              "question": "What does the else block execute?",
              "correctAnswer": [
                "When if condition is false",
                "Otherwise"
              ],
              "explanation": "The else block executes when the if condition is false.",
              "xp": 5
            },
            {
              "id": "cpp-1-5-3",
              "type": "code",
              "question": "Write an if statement that checks if x is positive and prints 'Positive'.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 5;\n    // Check if x is positive\n    \n    return 0;\n}\n",
              "expectedOutput": "Positive",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use if (x > 0) { std::cout << \"Positive\" << std::endl; }",
              "xp": 12
            },
            {
              "id": "cpp-1-5-4",
              "type": "multiple-choice",
              "question": "What does else if do?",
              "options": [
                "Always runs",
                "Checks another condition",
                "Runs if if is true",
                "Same as else"
              ],
              "correct": 1,
              "explanation": "else if checks another condition if the previous if was false.",
              "xp": 3
            },
            {
              "id": "cpp-1-5-5",
              "type": "code",
              "question": "Write if-else to print 'Even' if x is even, 'Odd' otherwise.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 4;\n    // Check even or odd\n    \n    return 0;\n}\n",
              "expectedOutput": "Even",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use if (x % 2 == 0) { ... } else { ... } with modulo operator.",
              "xp": 12
            }
          ]
        },
        {
          "id": "1-6",
          "title": "Control Flow: Loops",
          "xp": 88,
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Control Flow: Loops in C++\n\n## For Loop\n\n```cpp\nfor (initialization; condition; update) {\n    // Code to repeat\n}\n```\n\n**Example:**\n```cpp\nfor (int i = 0; i < 5; i++) {\n    std::cout << i << \" \";\n}\n// Output: 0 1 2 3 4\n```\n\n## While Loop\n\n```cpp\nwhile (condition) {\n    // Code to repeat\n}\n```\n\n## Break and Continue\n\n- **break**: Exit the loop immediately\n- **continue**: Skip to next iteration\n\n```cpp\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) break;  // Exit when i equals 5\n    std::cout << i << \" \";\n}\n// Output: 0 1 2 3 4\n```",
          "questions": [
            {
              "id": "cpp-1-6-1",
              "type": "typing",
              "question": "What loop is best when you know the number of iterations?",
              "correctAnswer": [
                "for loop",
                "for"
              ],
              "explanation": "The for loop is best when you know how many times to iterate.",
              "xp": 5
            },
            {
              "id": "cpp-1-6-2",
              "type": "typing",
              "question": "What does break do in a loop?",
              "correctAnswer": [
                "Exits the loop",
                "Stops",
                "Terminates"
              ],
              "explanation": "The break statement exits the loop immediately.",
              "xp": 5
            },
            {
              "id": "cpp-1-6-3",
              "type": "code",
              "question": "Write a for loop that prints numbers 1 to 5.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    // Write for loop here\n    \n    return 0;\n}\n",
              "expectedOutput": "1 2 3 4 5",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "for (int i = 1; i <= 5; i++) { std::cout << i << \" \"; }",
              "xp": 12
            },
            {
              "id": "cpp-1-6-4",
              "type": "multiple-choice",
              "question": "What does continue do?",
              "options": [
                "Exits loop",
                "Skips to next iteration",
                "Stops program",
                "No effect"
              ],
              "correct": 1,
              "explanation": "The continue statement skips the rest of the current iteration and moves to the next.",
              "xp": 3
            },
            {
              "id": "cpp-1-6-5",
              "type": "code",
              "question": "Write a while loop that prints even numbers from 0 to 10.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    // Write while loop here\n    \n    return 0;\n}\n",
              "expectedOutput": "0 2 4 6 8 10",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "int i = 0; while (i <= 10) { std::cout << i << \" \"; i += 2; }",
              "xp": 12
            }
          ]
        }
      ]
    },
    {
      "unitId": "2",
      "unitName": "2. Core Language Fundamentals",
      "lessons": [
        {
          "id": 8,
          "title": "Primitive Types and Type Modifiers",
          "unitTitle": "2. Core Language Fundamentals",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 9,
          "title": "Constants and constexpr",
          "unitTitle": "2. Core Language Fundamentals",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 10,
          "title": "Operators and Expressions",
          "unitTitle": "2. Core Language Fundamentals",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 11,
          "title": "Control Flow (if, switch, loops)",
          "unitTitle": "2. Core Language Fundamentals",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 12,
          "title": "Scope and Lifetime Basics",
          "unitTitle": "2. Core Language Fundamentals",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 13,
          "title": "Basic Error Handling",
          "unitTitle": "2. Core Language Fundamentals",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "3",
      "unitName": "3. Functions and Modularity",
      "lessons": [
        {
          "id": 14,
          "title": "Function Declarations vs Definitions",
          "unitTitle": "3. Functions and Modularity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 15,
          "title": "Pass by Value vs Reference",
          "unitTitle": "3. Functions and Modularity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 16,
          "title": "Function Overloading",
          "unitTitle": "3. Functions and Modularity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 17,
          "title": "Default Arguments",
          "unitTitle": "3. Functions and Modularity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 18,
          "title": "Inline Functions",
          "unitTitle": "3. Functions and Modularity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 19,
          "title": "Header Files and Code Organization",
          "unitTitle": "3. Functions and Modularity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "4",
      "unitName": "4. Pointers and References",
      "lessons": [
        {
          "id": 20,
          "title": "Memory Model Overview",
          "unitTitle": "4. Pointers and References",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 21,
          "title": "References vs Pointers",
          "unitTitle": "4. Pointers and References",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 22,
          "title": "Pointer Arithmetic",
          "unitTitle": "4. Pointers and References",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 23,
          "title": "const Correctness",
          "unitTitle": "4. Pointers and References",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 24,
          "title": "nullptr and Null Safety",
          "unitTitle": "4. Pointers and References",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 25,
          "title": "Pointer Pitfalls",
          "unitTitle": "4. Pointers and References",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "5",
      "unitName": "5. Arrays, Strings, and Basic Data Structures",
      "lessons": [
        {
          "id": 26,
          "title": "C-style Arrays",
          "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 27,
          "title": "std::array",
          "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 28,
          "title": "std::string",
          "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 29,
          "title": "Multidimensional Arrays",
          "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 30,
          "title": "Iteration Patterns",
          "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "6",
      "unitName": "6. Object-Oriented Programming in C++",
      "lessons": [
        {
          "id": 31,
          "title": "Structs vs Classes",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 32,
          "title": "Encapsulation and Access Specifiers",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 33,
          "title": "Constructors and Destructors",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 34,
          "title": "Member Functions",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 35,
          "title": "this Pointer",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 36,
          "title": "Operator Overloading",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "7",
      "unitName": "7. Resource Management",
      "lessons": [
        {
          "id": 37,
          "title": "RAII (Resource Acquisition Is Initialization)",
          "unitTitle": "7. Resource Management",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 38,
          "title": "Copy Constructor and Copy Assignment",
          "unitTitle": "7. Resource Management",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 39,
          "title": "Move Constructor and Move Assignment",
          "unitTitle": "7. Resource Management",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 40,
          "title": "Rule of Three / Five / Zero",
          "unitTitle": "7. Resource Management",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 41,
          "title": "Managing Resources Safely",
          "unitTitle": "7. Resource Management",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "8",
      "unitName": "8. Dynamic Memory",
      "lessons": [
        {
          "id": 42,
          "title": "Stack vs Heap",
          "unitTitle": "8. Dynamic Memory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 43,
          "title": "new and delete",
          "unitTitle": "8. Dynamic Memory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 44,
          "title": "Common Memory Errors",
          "unitTitle": "8. Dynamic Memory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 45,
          "title": "Smart Pointers Overview",
          "unitTitle": "8. Dynamic Memory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 46,
          "title": "unique_ptr, shared_ptr, weak_ptr",
          "unitTitle": "8. Dynamic Memory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "9",
      "unitName": "9. Standard Template Library (STL)",
      "lessons": [
        {
          "id": 47,
          "title": "Overview of STL Components",
          "unitTitle": "9. Standard Template Library (STL)",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 48,
          "title": "Iterators",
          "unitTitle": "9. Standard Template Library (STL)",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 49,
          "title": "Sequence Containers (vector, deque, list)",
          "unitTitle": "9. Standard Template Library (STL)",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 50,
          "title": "Associative Containers (map, set)",
          "unitTitle": "9. Standard Template Library (STL)",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 51,
          "title": "Container Adaptors (stack, queue)",
          "unitTitle": "9. Standard Template Library (STL)",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 52,
          "title": "STL Algorithms",
          "unitTitle": "9. Standard Template Library (STL)",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "10",
      "unitName": "10. Templates and Generic Programming",
      "lessons": [
        {
          "id": 53,
          "title": "Function Templates",
          "unitTitle": "10. Templates and Generic Programming",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 54,
          "title": "Class Templates",
          "unitTitle": "10. Templates and Generic Programming",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 55,
          "title": "Template Specialization",
          "unitTitle": "10. Templates and Generic Programming",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 56,
          "title": "Variadic Templates",
          "unitTitle": "10. Templates and Generic Programming",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 57,
          "title": "Template Type Deduction",
          "unitTitle": "10. Templates and Generic Programming",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "11",
      "unitName": "11. Advanced Object-Oriented Programming",
      "lessons": [
        {
          "id": 58,
          "title": "Inheritance",
          "unitTitle": "11. Advanced Object-Oriented Programming",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 59,
          "title": "Virtual Functions and Polymorphism",
          "unitTitle": "11. Advanced Object-Oriented Programming",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 60,
          "title": "Abstract Classes and Interfaces",
          "unitTitle": "11. Advanced Object-Oriented Programming",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 61,
          "title": "Multiple Inheritance",
          "unitTitle": "11. Advanced Object-Oriented Programming",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 62,
          "title": "Composition vs Inheritance",
          "unitTitle": "11. Advanced Object-Oriented Programming",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "12",
      "unitName": "12. Modern C++ Features",
      "lessons": [
        {
          "id": 63,
          "title": "auto and Type Deduction",
          "unitTitle": "12. Modern C++ Features",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 64,
          "title": "Range-Based Loops",
          "unitTitle": "12. Modern C++ Features",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 65,
          "title": "Lambda Functions",
          "unitTitle": "12. Modern C++ Features",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 66,
          "title": "enum class",
          "unitTitle": "12. Modern C++ Features",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 67,
          "title": "Structured Bindings",
          "unitTitle": "12. Modern C++ Features",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 68,
          "title": "std::optional, std::variant, std::any",
          "unitTitle": "12. Modern C++ Features",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "13",
      "unitName": "13. Exception Handling",
      "lessons": [
        {
          "id": 69,
          "title": "try, catch, throw",
          "unitTitle": "13. Exception Handling",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 70,
          "title": "Exception Safety Levels",
          "unitTitle": "13. Exception Handling",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 71,
          "title": "Custom Exceptions",
          "unitTitle": "13. Exception Handling",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 72,
          "title": "Alternatives to Exceptions",
          "unitTitle": "13. Exception Handling",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "14",
      "unitName": "14. Concurrency",
      "lessons": [
        {
          "id": 73,
          "title": "Threads (std::thread)",
          "unitTitle": "14. Concurrency",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 74,
          "title": "Mutexes and Locks",
          "unitTitle": "14. Concurrency",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 75,
          "title": "Condition Variables",
          "unitTitle": "14. Concurrency",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 76,
          "title": "Futures and Promises",
          "unitTitle": "14. Concurrency",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 77,
          "title": "Parallel Algorithms",
          "unitTitle": "14. Concurrency",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "15",
      "unitName": "15. File I/O and Serialization",
      "lessons": [
        {
          "id": 78,
          "title": "File Streams",
          "unitTitle": "15. File I/O and Serialization",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 79,
          "title": "Binary vs Text Files",
          "unitTitle": "15. File I/O and Serialization",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 80,
          "title": "Parsing Structured Data",
          "unitTitle": "15. File I/O and Serialization",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 81,
          "title": "Basic Serialization Patterns",
          "unitTitle": "15. File I/O and Serialization",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "16",
      "unitName": "16. Performance and Low-Level Concepts",
      "lessons": [
        {
          "id": 82,
          "title": "Value vs Reference Semantics",
          "unitTitle": "16. Performance and Low-Level Concepts",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 83,
          "title": "Cache and Memory Layout",
          "unitTitle": "16. Performance and Low-Level Concepts",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 84,
          "title": "Inline vs Virtual Costs",
          "unitTitle": "16. Performance and Low-Level Concepts",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 85,
          "title": "Move Semantics and Performance",
          "unitTitle": "16. Performance and Low-Level Concepts",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 86,
          "title": "Profiling and Optimization",
          "unitTitle": "16. Performance and Low-Level Concepts",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "17",
      "unitName": "17. Build Systems and Tooling",
      "lessons": [
        {
          "id": 87,
          "title": "Makefiles",
          "unitTitle": "17. Build Systems and Tooling",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 88,
          "title": "CMake Basics",
          "unitTitle": "17. Build Systems and Tooling",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 89,
          "title": "Dependency Management",
          "unitTitle": "17. Build Systems and Tooling",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 90,
          "title": "Static vs Dynamic Linking",
          "unitTitle": "17. Build Systems and Tooling",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 91,
          "title": "Debugging Tools (gdb, sanitizers)",
          "unitTitle": "17. Build Systems and Tooling",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "18",
      "unitName": "18. Best Practices and Idioms",
      "lessons": [
        {
          "id": 92,
          "title": "C++ Coding Guidelines",
          "unitTitle": "18. Best Practices and Idioms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 93,
          "title": "Idiomatic STL Usage",
          "unitTitle": "18. Best Practices and Idioms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 94,
          "title": "Avoiding Raw Pointers",
          "unitTitle": "18. Best Practices and Idioms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 95,
          "title": "Header Design Best Practices",
          "unitTitle": "18. Best Practices and Idioms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 96,
          "title": "Writing Maintainable C++",
          "unitTitle": "18. Best Practices and Idioms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "19",
      "unitName": "19. Interoperability",
      "lessons": [
        {
          "id": 97,
          "title": "C and C++ Interoperability",
          "unitTitle": "19. Interoperability",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 98,
          "title": "Calling Native Libraries",
          "unitTitle": "19. Interoperability",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        },
        {
          "id": 99,
          "title": "ABI and Binary Compatibility",
          "unitTitle": "19. Interoperability",
          "xp": 15,
          "type": "lesson",
          "difficulty": "beginner",
          "questions": []
        }
      ]
    },
    {
      "unitId": "20",
      "unitName": "20. Foundations of Algorithm Analysis",
      "lessons": [
        {
          "id": 1,
          "title": "Algorithm correctness",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 2,
          "title": "Asymptotic notation (Big O, Big Θ, Big Ω)",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 3,
          "title": "Amortized analysis",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 4,
          "title": "Average vs worst vs best case",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 5,
          "title": "Recurrence relations",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 6,
          "title": "Master theorem",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 7,
          "title": "Recursion tree analysis",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 8,
          "title": "Proof by induction",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 9,
          "title": "Lower bounds",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 10,
          "title": "Decision tree complexity",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 11,
          "title": "Time-space tradeoffs",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 12,
          "title": "Cache complexity",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 13,
          "title": "External memory model",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 14,
          "title": "Parallel complexity",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 15,
          "title": "Basic Data Structures",
          "unitTitle": "20. Foundations of Algorithm Analysis",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "21",
      "unitName": "21. Arrays and Variants",
      "lessons": [
        {
          "id": 16,
          "title": "Static arrays",
          "unitTitle": "21. Arrays and Variants",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 17,
          "title": "Dynamic arrays",
          "unitTitle": "21. Arrays and Variants",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 18,
          "title": "Multidimensional arrays",
          "unitTitle": "21. Arrays and Variants",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 19,
          "title": "Circular arrays",
          "unitTitle": "21. Arrays and Variants",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 20,
          "title": "Sparse arrays",
          "unitTitle": "21. Arrays and Variants",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 21,
          "title": "Bit arrays",
          "unitTitle": "21. Arrays and Variants",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 22,
          "title": "Difference arrays",
          "unitTitle": "21. Arrays and Variants",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 23,
          "title": "Prefix arrays",
          "unitTitle": "21. Arrays and Variants",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 24,
          "title": "Sliding window arrays",
          "unitTitle": "21. Arrays and Variants",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 25,
          "title": "Cache-aware arrays",
          "unitTitle": "21. Arrays and Variants",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "22",
      "unitName": "22. Linked Structures",
      "lessons": [
        {
          "id": 26,
          "title": "Singly linked list",
          "unitTitle": "22. Linked Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 27,
          "title": "Doubly linked list",
          "unitTitle": "22. Linked Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 28,
          "title": "Circular linked list",
          "unitTitle": "22. Linked Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 29,
          "title": "XOR linked list",
          "unitTitle": "22. Linked Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 30,
          "title": "Skip list",
          "unitTitle": "22. Linked Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 31,
          "title": "Unrolled linked list",
          "unitTitle": "22. Linked Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 32,
          "title": "Self-organizing list",
          "unitTitle": "22. Linked Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 33,
          "title": "Intrusive lists",
          "unitTitle": "22. Linked Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "23",
      "unitName": "23. Stack Structures",
      "lessons": [
        {
          "id": 34,
          "title": "Array stack",
          "unitTitle": "23. Stack Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 35,
          "title": "Linked stack",
          "unitTitle": "23. Stack Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 36,
          "title": "Min stack",
          "unitTitle": "23. Stack Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 37,
          "title": "Max stack",
          "unitTitle": "23. Stack Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 38,
          "title": "Persistent stack",
          "unitTitle": "23. Stack Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 39,
          "title": "Multi-stack structures",
          "unitTitle": "23. Stack Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "24",
      "unitName": "24. Queue Structures",
      "lessons": [
        {
          "id": 40,
          "title": "Array queue",
          "unitTitle": "24. Queue Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 41,
          "title": "Circular queue",
          "unitTitle": "24. Queue Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 42,
          "title": "Deque",
          "unitTitle": "24. Queue Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 43,
          "title": "Monotonic queue",
          "unitTitle": "24. Queue Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 44,
          "title": "Priority queue",
          "unitTitle": "24. Queue Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 45,
          "title": "Double-ended priority queue",
          "unitTitle": "24. Queue Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 46,
          "title": "Persistent queue",
          "unitTitle": "24. Queue Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 47,
          "title": "Hashing",
          "unitTitle": "24. Queue Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "25",
      "unitName": "25. Hash Tables",
      "lessons": [
        {
          "id": 48,
          "title": "Direct addressing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 49,
          "title": "Hash functions",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 50,
          "title": "Polynomial hashing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 51,
          "title": "Rolling hash",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 52,
          "title": "Perfect hashing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 53,
          "title": "Universal hashing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 54,
          "title": "Open addressing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 55,
          "title": "Linear probing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 56,
          "title": "Quadratic probing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 57,
          "title": "Double hashing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 58,
          "title": "Separate chaining",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 59,
          "title": "Cuckoo hashing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 60,
          "title": "Robin Hood hashing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 61,
          "title": "Hopscotch hashing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 62,
          "title": "Extendible hashing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 63,
          "title": "Dynamic hashing",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 64,
          "title": "Bloom filter",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 65,
          "title": "Counting Bloom filter",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 66,
          "title": "Cuckoo filter",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 67,
          "title": "HyperLogLog",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 68,
          "title": "Tree Data Structures",
          "unitTitle": "25. Hash Tables",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "26",
      "unitName": "26. Binary Trees",
      "lessons": [
        {
          "id": 69,
          "title": "Binary tree traversal",
          "unitTitle": "26. Binary Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 70,
          "title": "Threaded binary tree",
          "unitTitle": "26. Binary Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 71,
          "title": "Binary search tree",
          "unitTitle": "26. Binary Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 72,
          "title": "Balanced BST",
          "unitTitle": "26. Binary Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 73,
          "title": "Order statistic tree",
          "unitTitle": "26. Binary Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 74,
          "title": "Augmented trees",
          "unitTitle": "26. Binary Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "27",
      "unitName": "27. Self-Balancing Trees",
      "lessons": [
        {
          "id": 75,
          "title": "AVL tree",
          "unitTitle": "27. Self-Balancing Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 76,
          "title": "Red-black tree",
          "unitTitle": "27. Self-Balancing Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 77,
          "title": "AA tree",
          "unitTitle": "27. Self-Balancing Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 78,
          "title": "Treap",
          "unitTitle": "27. Self-Balancing Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 79,
          "title": "Splay tree",
          "unitTitle": "27. Self-Balancing Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 80,
          "title": "Scapegoat tree",
          "unitTitle": "27. Self-Balancing Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 81,
          "title": "Tango tree",
          "unitTitle": "27. Self-Balancing Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 82,
          "title": "Weight-balanced tree",
          "unitTitle": "27. Self-Balancing Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 83,
          "title": "Randomized BST",
          "unitTitle": "27. Self-Balancing Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "28",
      "unitName": "28. Multiway Trees",
      "lessons": [
        {
          "id": 84,
          "title": "B-tree",
          "unitTitle": "28. Multiway Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 85,
          "title": "B+ tree",
          "unitTitle": "28. Multiway Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 86,
          "title": "B* tree",
          "unitTitle": "28. Multiway Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 87,
          "title": "2-3 tree",
          "unitTitle": "28. Multiway Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 88,
          "title": "2-3-4 tree",
          "unitTitle": "28. Multiway Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 89,
          "title": "Fusion tree",
          "unitTitle": "28. Multiway Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 90,
          "title": "Cache-oblivious tree",
          "unitTitle": "28. Multiway Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "29",
      "unitName": "29. Specialized Trees",
      "lessons": [
        {
          "id": 91,
          "title": "Segment tree",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 92,
          "title": "Lazy propagation segment tree",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 93,
          "title": "Persistent segment tree",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 94,
          "title": "Dynamic segment tree",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 95,
          "title": "Merge sort tree",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 96,
          "title": "Fenwick tree (Binary Indexed Tree)",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 97,
          "title": "Range tree",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 98,
          "title": "Interval tree",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 99,
          "title": "Order statistic tree",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 100,
          "title": "Cartesian tree",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 101,
          "title": "Tournament tree",
          "unitTitle": "29. Specialized Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "30",
      "unitName": "30. String Trees",
      "lessons": [
        {
          "id": 102,
          "title": "Trie",
          "unitTitle": "30. String Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 103,
          "title": "Compressed trie",
          "unitTitle": "30. String Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 104,
          "title": "Radix tree",
          "unitTitle": "30. String Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 105,
          "title": "Patricia trie",
          "unitTitle": "30. String Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 106,
          "title": "Suffix tree",
          "unitTitle": "30. String Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 107,
          "title": "Suffix automaton",
          "unitTitle": "30. String Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 108,
          "title": "DAWG",
          "unitTitle": "30. String Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 109,
          "title": "Aho–Corasick automaton",
          "unitTitle": "30. String Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 110,
          "title": "Heaps and Priority Structures",
          "unitTitle": "30. String Trees",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "31",
      "unitName": "31. Heap Structures",
      "lessons": [
        {
          "id": 111,
          "title": "Binary heap",
          "unitTitle": "31. Heap Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 112,
          "title": "d-ary heap",
          "unitTitle": "31. Heap Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 113,
          "title": "Binomial heap",
          "unitTitle": "31. Heap Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 114,
          "title": "Fibonacci heap",
          "unitTitle": "31. Heap Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 115,
          "title": "Pairing heap",
          "unitTitle": "31. Heap Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 116,
          "title": "Skew heap",
          "unitTitle": "31. Heap Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 117,
          "title": "Leftist heap",
          "unitTitle": "31. Heap Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 118,
          "title": "Soft heap",
          "unitTitle": "31. Heap Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 119,
          "title": "Brodal queue",
          "unitTitle": "31. Heap Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 120,
          "title": "Graph Data Structures",
          "unitTitle": "31. Heap Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "32",
      "unitName": "32. Graph Representations",
      "lessons": [
        {
          "id": 121,
          "title": "Adjacency matrix",
          "unitTitle": "32. Graph Representations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 122,
          "title": "Adjacency list",
          "unitTitle": "32. Graph Representations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 123,
          "title": "Edge list",
          "unitTitle": "32. Graph Representations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 124,
          "title": "Incidence matrix",
          "unitTitle": "32. Graph Representations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 125,
          "title": "Compressed sparse row",
          "unitTitle": "32. Graph Representations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 126,
          "title": "Compressed sparse column",
          "unitTitle": "32. Graph Representations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "33",
      "unitName": "33. Graph Traversal",
      "lessons": [
        {
          "id": 127,
          "title": "Breadth-first search",
          "unitTitle": "33. Graph Traversal",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 128,
          "title": "Depth-first search",
          "unitTitle": "33. Graph Traversal",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 129,
          "title": "Iterative deepening DFS",
          "unitTitle": "33. Graph Traversal",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 130,
          "title": "Bidirectional search",
          "unitTitle": "33. Graph Traversal",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 131,
          "title": "Graph Algorithms",
          "unitTitle": "33. Graph Traversal",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "34",
      "unitName": "34. Connectivity",
      "lessons": [
        {
          "id": 132,
          "title": "Connected components",
          "unitTitle": "34. Connectivity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 133,
          "title": "Strongly connected components",
          "unitTitle": "34. Connectivity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 134,
          "title": "Kosaraju algorithm",
          "unitTitle": "34. Connectivity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 135,
          "title": "Tarjan algorithm",
          "unitTitle": "34. Connectivity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 136,
          "title": "Bridge finding",
          "unitTitle": "34. Connectivity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 137,
          "title": "Articulation points",
          "unitTitle": "34. Connectivity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 138,
          "title": "Biconnected components",
          "unitTitle": "34. Connectivity",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "35",
      "unitName": "35. Shortest Path",
      "lessons": [
        {
          "id": 139,
          "title": "Dijkstra algorithm",
          "unitTitle": "35. Shortest Path",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 140,
          "title": "Bellman–Ford",
          "unitTitle": "35. Shortest Path",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 141,
          "title": "Floyd–Warshall",
          "unitTitle": "35. Shortest Path",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 142,
          "title": "Johnson algorithm",
          "unitTitle": "35. Shortest Path",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 143,
          "title": "A* search",
          "unitTitle": "35. Shortest Path",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 144,
          "title": "Dial’s algorithm",
          "unitTitle": "35. Shortest Path",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 145,
          "title": "SPFA",
          "unitTitle": "35. Shortest Path",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 146,
          "title": "Multi-source BFS",
          "unitTitle": "35. Shortest Path",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "36",
      "unitName": "36. Minimum Spanning Tree",
      "lessons": [
        {
          "id": 147,
          "title": "Kruskal algorithm",
          "unitTitle": "36. Minimum Spanning Tree",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 148,
          "title": "Prim algorithm",
          "unitTitle": "36. Minimum Spanning Tree",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 149,
          "title": "Borůvka algorithm",
          "unitTitle": "36. Minimum Spanning Tree",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 150,
          "title": "Reverse-delete algorithm",
          "unitTitle": "36. Minimum Spanning Tree",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "37",
      "unitName": "37. Flow Algorithms",
      "lessons": [
        {
          "id": 151,
          "title": "Ford–Fulkerson",
          "unitTitle": "37. Flow Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 152,
          "title": "Edmonds–Karp",
          "unitTitle": "37. Flow Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 153,
          "title": "Dinic algorithm",
          "unitTitle": "37. Flow Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 154,
          "title": "Push-relabel",
          "unitTitle": "37. Flow Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 155,
          "title": "Min-cost max-flow",
          "unitTitle": "37. Flow Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 156,
          "title": "Circulation with demands",
          "unitTitle": "37. Flow Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "38",
      "unitName": "38. Matching Algorithms",
      "lessons": [
        {
          "id": 157,
          "title": "Bipartite matching",
          "unitTitle": "38. Matching Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 158,
          "title": "Hungarian algorithm",
          "unitTitle": "38. Matching Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 159,
          "title": "Hopcroft–Karp",
          "unitTitle": "38. Matching Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 160,
          "title": "Blossom algorithm",
          "unitTitle": "38. Matching Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "39",
      "unitName": "39. Graph Theory Algorithms",
      "lessons": [
        {
          "id": 161,
          "title": "Topological sorting",
          "unitTitle": "39. Graph Theory Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 162,
          "title": "Transitive closure",
          "unitTitle": "39. Graph Theory Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 163,
          "title": "Eulerian paths",
          "unitTitle": "39. Graph Theory Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 164,
          "title": "Hamiltonian paths",
          "unitTitle": "39. Graph Theory Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 165,
          "title": "Graph coloring",
          "unitTitle": "39. Graph Theory Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 166,
          "title": "Planarity testing",
          "unitTitle": "39. Graph Theory Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 167,
          "title": "String Algorithms",
          "unitTitle": "39. Graph Theory Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "40",
      "unitName": "40. Pattern Matching",
      "lessons": [
        {
          "id": 168,
          "title": "Naive search",
          "unitTitle": "40. Pattern Matching",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 169,
          "title": "Knuth–Morris–Pratt",
          "unitTitle": "40. Pattern Matching",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 170,
          "title": "Boyer–Moore",
          "unitTitle": "40. Pattern Matching",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 171,
          "title": "Rabin–Karp",
          "unitTitle": "40. Pattern Matching",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 172,
          "title": "Z-algorithm",
          "unitTitle": "40. Pattern Matching",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 173,
          "title": "Aho–Corasick",
          "unitTitle": "40. Pattern Matching",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "41",
      "unitName": "41. String Processing",
      "lessons": [
        {
          "id": 174,
          "title": "Longest common prefix",
          "unitTitle": "41. String Processing",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 175,
          "title": "Longest repeated substring",
          "unitTitle": "41. String Processing",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 176,
          "title": "Suffix arrays",
          "unitTitle": "41. String Processing",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 177,
          "title": "LCP arrays",
          "unitTitle": "41. String Processing",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 178,
          "title": "Burrows–Wheeler transform",
          "unitTitle": "41. String Processing",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 179,
          "title": "Range Query Structures",
          "unitTitle": "41. String Processing",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "42",
      "unitName": "42. Range Query Techniques",
      "lessons": [
        {
          "id": 180,
          "title": "Prefix sums",
          "unitTitle": "42. Range Query Techniques",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 181,
          "title": "Difference arrays",
          "unitTitle": "42. Range Query Techniques",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 182,
          "title": "Sparse tables",
          "unitTitle": "42. Range Query Techniques",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 183,
          "title": "Segment trees",
          "unitTitle": "42. Range Query Techniques",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 184,
          "title": "Fenwick trees",
          "unitTitle": "42. Range Query Techniques",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 185,
          "title": "Mo’s algorithm",
          "unitTitle": "42. Range Query Techniques",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 186,
          "title": "Wavelet tree",
          "unitTitle": "42. Range Query Techniques",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 187,
          "title": "Dynamic Programming",
          "unitTitle": "42. Range Query Techniques",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "43",
      "unitName": "43. Core DP",
      "lessons": [
        {
          "id": 188,
          "title": "Memoization",
          "unitTitle": "43. Core DP",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 189,
          "title": "Tabulation",
          "unitTitle": "43. Core DP",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 190,
          "title": "Bitmask DP",
          "unitTitle": "43. Core DP",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 191,
          "title": "Tree DP",
          "unitTitle": "43. Core DP",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 192,
          "title": "Digit DP",
          "unitTitle": "43. Core DP",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 193,
          "title": "Interval DP",
          "unitTitle": "43. Core DP",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 194,
          "title": "DP on graphs",
          "unitTitle": "43. Core DP",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "44",
      "unitName": "44. Advanced DP Optimizations",
      "lessons": [
        {
          "id": 195,
          "title": "Divide and conquer DP",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 196,
          "title": "Knuth optimization",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 197,
          "title": "Convex hull trick",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 198,
          "title": "Li Chao tree",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 199,
          "title": "Monotonic queue optimization",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 200,
          "title": "Alien trick",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 201,
          "title": "SMAWK algorithm",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 202,
          "title": "Greedy Algorithms",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 203,
          "title": "Activity selection",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 204,
          "title": "Huffman coding",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 205,
          "title": "Interval scheduling",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 206,
          "title": "Matroid theory",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 207,
          "title": "Divide and Conquer",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 208,
          "title": "Binary search",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 209,
          "title": "Merge sort",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 210,
          "title": "Quick sort",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 211,
          "title": "Karatsuba multiplication",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 212,
          "title": "Strassen algorithm",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 213,
          "title": "FFT",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 214,
          "title": "NTT",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 215,
          "title": "Computational Geometry",
          "unitTitle": "44. Advanced DP Optimizations",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "45",
      "unitName": "45. Geometry Structures",
      "lessons": [
        {
          "id": 216,
          "title": "KD-tree",
          "unitTitle": "45. Geometry Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 217,
          "title": "Range tree",
          "unitTitle": "45. Geometry Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 218,
          "title": "BSP tree",
          "unitTitle": "45. Geometry Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 219,
          "title": "Quad tree",
          "unitTitle": "45. Geometry Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 220,
          "title": "R-tree",
          "unitTitle": "45. Geometry Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "46",
      "unitName": "46. Geometry Algorithms",
      "lessons": [
        {
          "id": 221,
          "title": "Convex hull",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 222,
          "title": "Graham scan",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 223,
          "title": "Jarvis march",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 224,
          "title": "Line sweep",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 225,
          "title": "Closest pair of points",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 226,
          "title": "Delaunay triangulation",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 227,
          "title": "Voronoi diagrams",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 228,
          "title": "Randomized Algorithms",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 229,
          "title": "Randomized quicksort",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 230,
          "title": "Randomized selection",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 231,
          "title": "Reservoir sampling",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 232,
          "title": "Skip lists",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 233,
          "title": "Monte Carlo algorithms",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 234,
          "title": "Las Vegas algorithms",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 235,
          "title": "Approximation Algorithms",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 236,
          "title": "Greedy approximation",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 237,
          "title": "Local search",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 238,
          "title": "PTAS",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 239,
          "title": "FPTAS",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 240,
          "title": "Advanced Topics",
          "unitTitle": "46. Geometry Algorithms",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "47",
      "unitName": "47. Advanced Data Structures",
      "lessons": [
        {
          "id": 241,
          "title": "Persistent data structures",
          "unitTitle": "47. Advanced Data Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 242,
          "title": "Retroactive data structures",
          "unitTitle": "47. Advanced Data Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 243,
          "title": "Functional data structures",
          "unitTitle": "47. Advanced Data Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 244,
          "title": "Succinct data structures",
          "unitTitle": "47. Advanced Data Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 245,
          "title": "Compressed data structures",
          "unitTitle": "47. Advanced Data Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "48",
      "unitName": "48. Advanced Graph Theory",
      "lessons": [
        {
          "id": 246,
          "title": "Tree decomposition",
          "unitTitle": "48. Advanced Graph Theory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 247,
          "title": "Centroid decomposition",
          "unitTitle": "48. Advanced Graph Theory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 248,
          "title": "Heavy-light decomposition",
          "unitTitle": "48. Advanced Graph Theory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 249,
          "title": "Dynamic connectivity",
          "unitTitle": "48. Advanced Graph Theory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 250,
          "title": "Link-cut trees",
          "unitTitle": "48. Advanced Graph Theory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 251,
          "title": "Euler tour trees",
          "unitTitle": "48. Advanced Graph Theory",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    },
    {
      "unitId": "49",
      "unitName": "49. Advanced String Structures",
      "lessons": [
        {
          "id": 252,
          "title": "Palindromic tree (Eertree)",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 253,
          "title": "Rope",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 254,
          "title": "Piece table",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 255,
          "title": "Gap buffer",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 256,
          "title": "Parallel and External Algorithms",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 257,
          "title": "Parallel prefix sum",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 258,
          "title": "Parallel BFS",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 259,
          "title": "External merge sort",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 260,
          "title": "Cache-oblivious algorithms",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 261,
          "title": "Specialized Algorithmic Paradigms",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 262,
          "title": "Branch and bound",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 263,
          "title": "Meet in the middle",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 264,
          "title": "Backtracking",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 265,
          "title": "Simulated annealing",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 266,
          "title": "Genetic algorithms",
          "unitTitle": "49. Advanced String Structures",
          "xp": 15,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        }
      ]
    }
  ],
  "totalLessons": 365
};
