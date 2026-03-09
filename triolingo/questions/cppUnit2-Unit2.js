// C++ - Unit2
// Generated: 2026-03-08 14:01:27

const Unit2 = {
  "unitId": "2",
  "unitName": "Core Language Fundamentals",
  "unitDescription": "Master primitive types, operators, control flow, and basic error handling",
  "subunits": [
    {
      "subunitId": "2.1",
      "subunitName": "Types and Constants",
      "lessons": [
        {
          "lessonId": "primitive-types",
          "lessonName": "Primitive Types and Type Modifiers",
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Primitive Types in C++\n\nC++ provides several fundamental data types:\n\n**Integer Types:**\n- int: 4 bytes, typically -2\u00b3\u00b9 to 2\u00b3\u00b9-1\n- short: 2 bytes\n- long: 4 or 8 bytes\n- long long: 8 bytes\n\n**Unsigned variants:**\n- unsigned int, unsigned short, etc.\n\n**Floating-point:**\n- float: 4 bytes, ~7 decimal digits\n- double: 8 bytes, ~15 decimal digits\n- long double: 10+ bytes\n\n**Character:**\n- char: 1 byte\n- wchar_t: wide character\n- char8_t, char16_t, char32_t: Unicode\n\n**Boolean:**\n- bool: true or false\n",
          "questions": [
            {
              "id": "cpp-2-1-1",
              "type": "typing",
              "question": "What is the size of int (typically)?",
              "correctAnswer": [
                "4 bytes",
                "4",
                "four bytes"
              ],
              "explanation": "int is typically 4 bytes.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-2",
              "type": "typing",
              "question": "What is the range of int (32-bit)?",
              "correctAnswer": [
                "-2147483648 to 2147483647",
                "-2^31 to 2^31-1"
              ],
              "explanation": "32-bit signed integer range.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-3",
              "type": "code",
              "question": "Declare an int variable named x.",
              "codeTemplate": "int x;",
              "expectedOutput": "int x;",
              "explanation": "Basic variable declaration.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-4",
              "type": "typing",
              "question": "What is float size?",
              "correctAnswer": [
                "4 bytes",
                "4"
              ],
              "explanation": "float is 4 bytes.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-5",
              "type": "typing",
              "question": "What type for true/false?",
              "correctAnswer": [
                "bool",
                "boolean"
              ],
              "explanation": "bool for boolean values.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-6",
              "type": "code",
              "question": "Declare a double variable named pi.",
              "codeTemplate": "double pi;",
              "expectedOutput": "double pi;",
              "explanation": "Floating-point declaration.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-7",
              "type": "typing",
              "question": "What is char size?",
              "correctAnswer": [
                "1 byte",
                "1"
              ],
              "explanation": "char is 1 byte.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-8",
              "type": "code",
              "question": "Declare an unsigned int named count.",
              "codeTemplate": "unsigned int count;",
              "expectedOutput": "unsigned int count;",
              "explanation": "Unsigned integer.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-9",
              "type": "typing",
              "question": "What is long long size?",
              "correctAnswer": [
                "8 bytes",
                "8"
              ],
              "explanation": "long long is 8 bytes.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-10",
              "type": "code",
              "question": "Initialize an int with value 42.",
              "codeTemplate": "int x = 42;",
              "expectedOutput": "int x = 42;",
              "explanation": "Initialization with value.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-11",
              "type": "typing",
              "question": "What is double precision?",
              "correctAnswer": [
                "~15 decimal digits",
                "15 digits"
              ],
              "explanation": "double has ~15 decimal digits.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-12",
              "type": "code",
              "question": "Declare a char named letter.",
              "codeTemplate": "char letter;",
              "expectedOutput": "char letter;",
              "explanation": "Character declaration.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-13",
              "type": "typing",
              "question": "Unsigned range vs signed?",
              "correctAnswer": [
                "0 to 2^n-1",
                "non-negative"
              ],
              "explanation": "Unsigned is 0 to 2^n-1.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-14",
              "type": "code",
              "question": "Declare a bool named isValid.",
              "codeTemplate": "bool isValid;",
              "expectedOutput": "bool isValid;",
              "explanation": "Boolean declaration.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-15",
              "type": "typing",
              "question": "What is short size?",
              "correctAnswer": [
                "2 bytes",
                "2"
              ],
              "explanation": "short is typically 2 bytes.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-16",
              "type": "code",
              "question": "Initialize float with 3.14.",
              "codeTemplate": "float f = 3.14f;",
              "expectedOutput": "float f = 3.14f;",
              "explanation": "Float with f suffix.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-17",
              "type": "typing",
              "question": "What does unsigned mean?",
              "correctAnswer": [
                "non-negative",
                "no sign"
              ],
              "explanation": "Only non-negative values.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-18",
              "type": "code",
              "question": "Declare long long named big.",
              "codeTemplate": "long long big;",
              "expectedOutput": "long long big;",
              "explanation": "Long long integer.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-19",
              "type": "typing",
              "question": "float vs double precision?",
              "correctAnswer": [
                "double more precise",
                "double > float"
              ],
              "explanation": "double has more precision.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-20",
              "type": "code",
              "question": "Initialize bool with true.",
              "codeTemplate": "bool flag = true;",
              "expectedOutput": "bool flag = true;",
              "explanation": "Boolean initialization.",
              "xp": 5
            }
          ]
        },
        {
          "lessonId": "constants",
          "lessonName": "Constants and constexpr",
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Constants in C++\n\n**const:**\nRuntime constant - value cannot be modified\n```cpp\nconst int MAX_SIZE = 100;\nconst double PI = 3.14159;\n```\n\n**constexpr:**\nCompile-time constant - must be computable at compile time\n```cpp\nconstexpr int SQUARE(int x) { return x * x; }\nconstexpr int result = SQUARE(5); // Computed at compile time\n```\n\n**#define:**\nPreprocessor macro (avoid in modern C++)\n```cpp\n#define PI 3.14159  // Old style, not recommended\n```\n\n**Best practices:**\n- Use constexpr for compile-time constants\n- Use const for runtime constants\n- Prefer const over #define\n",
          "questions": [
            {
              "id": "cpp-2-1-21",
              "type": "code",
              "question": "Declare a const int MAX.",
              "codeTemplate": "const int MAX = 100;",
              "expectedOutput": "const int MAX = 100;",
              "explanation": "Const declaration.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-22",
              "type": "code",
              "question": "Declare a constexpr int square.",
              "codeTemplate": "constexpr int square = 25;",
              "expectedOutput": "constexpr int square = 25;",
              "explanation": "Constexpr variable.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-23",
              "type": "typing",
              "question": "When is constexpr evaluated?",
              "correctAnswer": [
                "compile time",
                "compilation"
              ],
              "explanation": "Evaluated at compile time.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-24",
              "type": "code",
              "question": "Can you modify MAX?",
              "codeTemplate": "No",
              "expectedOutput": "MAX = 50;  // Error",
              "explanation": "const cannot be modified.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-25",
              "type": "typing",
              "question": "const vs constexpr?",
              "correctAnswer": [
                "compile time vs runtime",
                "when evaluated"
              ],
              "explanation": "constexpr is compile-time, const is runtime.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-26",
              "type": "code",
              "question": "Const double for pi.",
              "codeTemplate": "const double PI = 3.14159;",
              "expectedOutput": "const double PI = 3.14159;",
              "explanation": "Const floating point.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-27",
              "type": "typing",
              "question": "Can constexpr call functions?",
              "correctAnswer": [
                "yes",
                "Yes"
              ],
              "explanation": "If function is also constexpr.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-28",
              "type": "code",
              "question": "constexpr int cube(int x).",
              "codeTemplate": "constexpr int cube(int x) { return x*x*x; }",
              "expectedOutput": "constexpr int cube(int x) { return x*x*x; }",
              "explanation": "Constexpr function.",
              "xp": 6
            },
            {
              "id": "cpp-2-1-29",
              "type": "typing",
              "question": "Why avoid #define?",
              "correctAnswer": [
                "no type safety",
                "preprocessor"
              ],
              "explanation": "Preprocessor has no type checking.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-30",
              "type": "code",
              "question": "constexpr array size.",
              "codeTemplate": "constexpr int SIZE = 10; int arr[SIZE];",
              "expectedOutput": "constexpr int SIZE = 10; int arr[SIZE];",
              "explanation": "Constexpr for array size.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-31",
              "type": "typing",
              "question": "Can const be initialized later?",
              "correctAnswer": [
                "no",
                "No"
              ],
              "explanation": "Must be initialized at declaration.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-32",
              "type": "code",
              "question": "Const reference parameter.",
              "codeTemplate": "void func(const int& x);",
              "expectedOutput": "void func(const int& x);",
              "explanation": "Const reference.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-33",
              "type": "typing",
              "question": "constexpr benefit?",
              "correctAnswer": [
                "performance",
                "compile-time optimization"
              ],
              "explanation": "Computed at compile time.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-34",
              "type": "code",
              "question": "Const member function.",
              "codeTemplate": "int getValue() const;",
              "expectedOutput": "int getValue() const;",
              "explanation": "Const member function.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-35",
              "type": "typing",
              "question": "What does const guarantee?",
              "correctAnswer": [
                "won't modify",
                "immutable"
              ],
              "explanation": "Object won't be modified.",
              "xp": 5
            }
          ]
        }
      ]
    },
    {
      "subunitId": "2.2",
      "subunitName": "Operators and Control Flow",
      "lessons": [
        {
          "lessonId": "operators-expressions",
          "lessonName": "Operators and Expressions",
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Operators in C++\n\n**Arithmetic Operators:**\n+ - * / % (modulo)\n\n**Relational Operators:**\n== != < > <= >=\n\n**Logical Operators:**\n&& (AND) || (OR) ! (NOT)\n\n**Bitwise Operators:**\n& | ^ ~ << >>\n\n**Assignment Operators:**\n= += -= *= /= %=\n\n**Increment/Decrement:**\n++x (pre-increment)\nx++ (post-increment)\n--x (pre-decrement)\nx-- (post-decrement)\n\n**Operator Precedence:**\n1. Parentheses ()\n2. Postfix ++ --\n3. Prefix ++ -- ! -\n4. * / %\n5. + -\n6. << >>\n7. < <= > >=\n8. == !=\n9. &&\n10. ||\n11. = += -= etc.\n",
          "questions": [
            {
              "id": "cpp-2-2-1",
              "type": "code",
              "question": "5 % 2 equals?",
              "codeTemplate": "int x = 5 % 2;",
              "expectedOutput": "1",
              "explanation": "Modulo gives remainder.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-2",
              "type": "code",
              "question": "10 / 3 (integer)?",
              "codeTemplate": "int x = 10 / 3;",
              "expectedOutput": "3",
              "explanation": "Integer division truncates.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-3",
              "type": "typing",
              "question": "What is x++?",
              "correctAnswer": [
                "post-increment",
                "increment after use"
              ],
              "explanation": "Returns value, then increments.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-4",
              "type": "code",
              "question": "What is ++x?",
              "codeTemplate": "int y = ++x;",
              "expectedOutput": "Increments first",
              "explanation": "Pre-increment.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-5",
              "type": "code",
              "question": "10.0 / 3.0 equals?",
              "codeTemplate": "double x = 10.0 / 3.0;",
              "expectedOutput": "3.333...",
              "explanation": "Floating division.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-6",
              "type": "typing",
              "question": "What is &&?",
              "correctAnswer": [
                "logical AND",
                "AND"
              ],
              "explanation": "Logical AND operator.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-7",
              "type": "code",
              "question": "What is ||?",
              "codeTemplate": "bool b = true || false;",
              "expectedOutput": "true",
              "explanation": "Logical OR.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-8",
              "type": "typing",
              "question": "What is !true?",
              "correctAnswer": [
                "false"
              ],
              "explanation": "Logical NOT.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-9",
              "type": "code",
              "question": "What is 5 & 3?",
              "codeTemplate": "int x = 5 & 3;",
              "expectedOutput": "1",
              "explanation": "Bitwise AND: 101 & 011 = 001.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-10",
              "type": "code",
              "question": "What is 5 | 3?",
              "codeTemplate": "int x = 5 | 3;",
              "expectedOutput": "7",
              "explanation": "Bitwise OR: 101 | 011 = 111.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-11",
              "type": "typing",
              "question": "What is <<?",
              "correctAnswer": [
                "left shift",
                "shift left"
              ],
              "explanation": "Bitwise left shift.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-12",
              "type": "code",
              "question": "1 << 2 equals?",
              "codeTemplate": "int x = 1 << 2;",
              "expectedOutput": "4",
              "explanation": "1 shifted left by 2: 100 binary = 4.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-13",
              "type": "code",
              "question": "What is x += 5?",
              "codeTemplate": "x += 5;",
              "expectedOutput": "x = x + 5",
              "explanation": "Add and assign.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-14",
              "type": "typing",
              "question": "Highest precedence?",
              "correctAnswer": [
                "parentheses",
                "()"
              ],
              "explanation": "Parentheses have highest.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-15",
              "type": "code",
              "question": "What is ~1?",
              "codeTemplate": "int x = ~1;",
              "expectedOutput": "-2",
              "explanation": "Bitwise NOT flips all bits.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-16",
              "type": "code",
              "question": "5 ^ 3 equals?",
              "codeTemplate": "int x = 5 ^ 3;",
              "expectedOutput": "6",
              "explanation": "Bitwise XOR: 101 ^ 011 = 110.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-17",
              "type": "typing",
              "question": "What is ==?",
              "correctAnswer": [
                "equality",
                "equals"
              ],
              "explanation": "Equality comparison.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-18",
              "type": "code",
              "question": "5 == 5 is?",
              "codeTemplate": "bool b = (5 == 5);",
              "expectedOutput": "true",
              "explanation": "Equality check.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-19",
              "type": "typing",
              "question": "What is !=?",
              "correctAnswer": [
                "not equal",
                "inequality"
              ],
              "explanation": "Not equal operator.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-20",
              "type": "code",
              "question": "5 != 3 is?",
              "codeTemplate": "bool b = (5 != 3);",
              "expectedOutput": "true",
              "explanation": "Not equal check.",
              "xp": 4
            }
          ]
        },
        {
          "lessonId": "control-flow",
          "lessonName": "Control Flow",
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Control Flow in C++\n\n**if-else:**\n```cpp\nif (condition) {\n    // code if true\n} else if (other_condition) {\n    // code if other_condition true\n} else {\n    // code if all false\n}\n```\n\n**switch:**\n```cpp\nswitch (value) {\n    case 1:\n        // code for value 1\n        break;\n    case 2:\n        // code for value 2\n        break;\n    default:\n        // code for other values\n}\n```\n\n**for loop:**\n```cpp\nfor (int i = 0; i < n; ++i) {\n    // loop body\n}\n```\n\n**while loop:**\n```cpp\nwhile (condition) {\n    // loop body\n}\n```\n\n**do-while loop:**\n```cpp\ndo {\n    // loop body\n} while (condition);\n```\n\n**break and continue:**\n- break: exit loop/switch\n- continue: skip to next iteration\n",
          "questions": [
            {
              "id": "cpp-2-2-21",
              "type": "code",
              "question": "if statement syntax.",
              "codeTemplate": "if (x > 0) { }",
              "expectedOutput": "if (x > 0) { }",
              "explanation": "Basic if statement.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-22",
              "type": "code",
              "question": "else if syntax.",
              "codeTemplate": "else if (x < 0) { }",
              "expectedOutput": "else if (x < 0) { }",
              "explanation": "Else if clause.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-23",
              "type": "code",
              "question": "switch case 1.",
              "codeTemplate": "switch(x) { case 1: break; }",
              "expectedOutput": "switch(x) { case 1: break; }",
              "explanation": "Switch case.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-24",
              "type": "typing",
              "question": "What does break do?",
              "correctAnswer": [
                "exit loop",
                "break out"
              ],
              "explanation": "Exits the loop.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-25",
              "type": "code",
              "question": "What does continue do?",
              "codeTemplate": "continue;",
              "expectedOutput": "Skip to next iteration",
              "explanation": "Skips current iteration.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-26",
              "type": "code",
              "question": "for loop 0 to 9.",
              "codeTemplate": "for (int i = 0; i < 10; ++i) { }",
              "expectedOutput": "for (int i = 0; i < 10; ++i) { }",
              "explanation": "For loop.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-27",
              "type": "code",
              "question": "while loop.",
              "codeTemplate": "while (x > 0) { --x; }",
              "expectedOutput": "while (x > 0) { --x; }",
              "explanation": "While loop.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-28",
              "type": "code",
              "question": "do-while loop.",
              "codeTemplate": "do { --x; } while (x > 0);",
              "expectedOutput": "do { --x; } while (x > 0);",
              "explanation": "Do-while loop.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-29",
              "type": "typing",
              "question": "do-while runs how many times?",
              "correctAnswer": [
                "at least once",
                "minimum 1"
              ],
              "explanation": "Always runs at least once.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-30",
              "type": "code",
              "question": "switch default.",
              "codeTemplate": "default: break;",
              "expectedOutput": "default: break;",
              "explanation": "Default case.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-31",
              "type": "typing",
              "question": "Need break in switch?",
              "correctAnswer": [
                "yes",
                "Yes"
              ],
              "explanation": "To avoid fall-through.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-32",
              "type": "code",
              "question": "nested if example.",
              "codeTemplate": "if (a > 0) { if (b > 0) { } }",
              "expectedOutput": "if (a > 0) { if (b > 0) { } }",
              "explanation": "Nested if.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-33",
              "type": "code",
              "question": "for each (range-based).",
              "codeTemplate": "for (int x : arr) { }",
              "expectedOutput": "for (int x : arr) { }",
              "explanation": "Range-based for.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-34",
              "type": "typing",
              "question": "switch vs if-else?",
              "correctAnswer": [
                "switch for discrete values",
                "integers"
              ],
              "explanation": "Switch for specific values.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-35",
              "type": "code",
              "question": "break from nested loops?",
              "codeTemplate": "break;",
              "expectedOutput": "Exits innermost loop",
              "explanation": "Exits current loop only.",
              "xp": 5
            }
          ]
        }
      ]
    }
  ]
};

