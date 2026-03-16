// C++ Unit 1 - Environment and Language Basics
// Generated from cppCombined.js

window.cppUnit1 = {
  "unitId": "1",
  "unitName": "1. C++ Environment and Language Basics",
  "lessons": [
    {
      "id": "1-1",
      "title": "Introduction to C++",
      "xp": 200,
      "type": "lesson",
      "difficulty": "beginner",
      "lessonText": "# Introduction to C++\n\nC++ is a powerful, high-performance programming language created by Bjarne Stroustrup in 1979 as an extension of C. It's used in game development, systems programming, embedded systems, and competitive programming.\n\n## Your First C++ Program\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}\n```",
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
        },
        {
          "id": "cpp-1-1-6",
          "type": "code",
          "question": "Write a C++ program that prints your name to the console.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Print your name here\n    \n    return 0;\n}\n",
          "expectedOutput": "Your Name",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << \"Your Name\" << std::endl; (replace with your actual name).",
          "xp": 12
        },
        {
          "id": "cpp-1-1-7",
          "type": "typing",
          "question": "What does return 0 indicate in main()?",
          "correctAnswer": [
            "Program succeeded",
            "Success",
            "Successful execution"
          ],
          "explanation": "Returning 0 from main() indicates successful program execution.",
          "xp": 5
        },
        {
          "id": "cpp-1-1-8",
          "type": "code",
          "question": "Write a C++ program that prints two separate lines: 'Line 1' and 'Line 2'.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Your code here\n    \n    return 0;\n}\n",
          "expectedOutput": "Line 1\nLine 2",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use two std::cout statements, each with std::endl to create new lines.",
          "xp": 12
        },
        {
          "id": "cpp-1-1-9",
          "type": "typing",
          "question": "What is the file extension for C++ source files?",
          "correctAnswer": [
            ".cpp",
            "cpp"
          ],
          "explanation": "C++ source files use the .cpp extension (other options: .cc, .cxx, .C).",
          "xp": 5
        },
        {
          "id": "cpp-1-1-10",
          "type": "code",
          "question": "Write a C++ program that prints 'C++' followed by a newline.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Your code here\n    \n    return 0;\n}\n",
          "expectedOutput": "C++",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << \"C++\" << std::endl; to print C++ with a newline.",
          "xp": 12
        },
        {
          "id": "cpp-1-1-11",
          "type": "typing",
          "question": "What does std stand for in std::cout?",
          "correctAnswer": [
            "standard",
            "Standard Library"
          ],
          "explanation": "std is the namespace for the C++ Standard Library.",
          "xp": 5
        },
        {
          "id": "cpp-1-1-12",
          "type": "code",
          "question": "Write a C++ program that prints 'C++ is awesome!' three times.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Your code here\n    \n    return 0;\n}\n",
          "expectedOutput": "C++ is awesome!\nC++ is awesome!\nC++ is awesome!",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "You can use a loop or three separate std::cout statements.",
          "xp": 12
        },
        {
          "id": "cpp-1-1-13",
          "type": "typing",
          "question": "What type does main() return?",
          "correctAnswer": [
            "int",
            "integer"
          ],
          "explanation": "The main() function returns an int (integer), typically 0 for success.",
          "xp": 5
        },
        {
          "id": "cpp-1-1-14",
          "type": "code",
          "question": "Write a C++ program that prints the number 42.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Your code here\n    \n    return 0;\n}\n",
          "expectedOutput": "42",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << 42 << std::endl; to print the number.",
          "xp": 12
        },
        {
          "id": "cpp-1-1-15",
          "type": "typing",
          "question": "What year was C++ created?",
          "correctAnswer": [
            "1979"
          ],
          "explanation": "C++ was created by Bjarne Stroustrup in 1979 as an extension of C.",
          "xp": 5
        },
        {
          "id": "cpp-1-1-16",
          "type": "code",
          "question": "Write a C++ program that prints 'Programming is fun!'",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Your code here\n    \n    return 0;\n}\n",
          "expectedOutput": "Programming is fun!",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << \"Programming is fun!\" << std::endl;",
          "xp": 12
        },
        {
          "id": "cpp-1-1-17",
          "type": "typing",
          "question": "What does std::endl do?",
          "correctAnswer": [
            "Ends line and flushes buffer",
            "Newline",
            "Line break"
          ],
          "explanation": "std::endl inserts a newline character and flushes the output buffer.",
          "xp": 5
        },
        {
          "id": "cpp-1-1-18",
          "type": "code",
          "question": "Write a C++ program that prints your age (use any number).",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Print your age here\n    \n    return 0;\n}\n",
          "expectedOutput": "Any age number",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << your_age << std::endl; with any number.",
          "xp": 12
        },
        {
          "id": "cpp-1-1-19",
          "type": "typing",
          "question": "What command compiles a C++ file named program.cpp?",
          "correctAnswer": [
            "g++ -o program program.cpp",
            "g++ program.cpp",
            "g++ program.cpp -o program"
          ],
          "explanation": "g++ -o program program.cpp compiles program.cpp and creates executable named 'program'.",
          "xp": 5
        },
        {
          "id": "cpp-1-1-20",
          "type": "code",
          "question": "Write a C++ program that prints 'Welcome to C++!'",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Your code here\n    \n    return 0;\n}\n",
          "expectedOutput": "Welcome to C++!",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << \"Welcome to C++!\" << std::endl;",
          "xp": 12
        },
        {
          "id": "cpp-1-1-21",
          "type": "code",
          "question": "Create a simple C++ program that prints 'Hello, World!'",
          "correctAnswer": [
            "#include <iostream>\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-1-1-22",
          "type": "code",
          "question": "Write a C++ comment on a single line.",
          "correctAnswer": [
            "// This is a comment",
            "// comment"
          ],
          "xp": 10
        },
        {
          "id": "cpp-1-1-23",
          "type": "code",
          "question": "Write a multi-line C++ comment.",
          "correctAnswer": [
            "/* This is a\n   multi-line comment */",
            "/* comment */"
          ],
          "xp": 10
        },
        {
          "id": "cpp-1-1-24",
          "type": "code",
          "question": "Include the iostream header.",
          "correctAnswer": [
            "#include <iostream>"
          ],
          "xp": 10
        }
      ]
    },
    {
      "id": "1-2",
      "title": "Variables and Data Types",
      "xp": 220,
      "type": "lesson",
      "difficulty": "beginner",
      "lessonText": "# Variables and Data Types in C++\n\nVariables are containers for storing data values. Each variable has a specific data type that determines what kind of data it can hold.\n\n## Declaring Variables\n\n```cpp\ntype variableName = value;\n```\n\n## Basic Data Types\n\n- `int`: Whole numbers (e.g., 42, -10)\n- `double`: Decimal numbers (e.g., 3.14, -0.5)\n- `char`: Single character (e.g., 'A', '7')\n- `bool`: True or False\n- `std::string`: Text (requires #include <string>)",
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
          "type": "code",
          "question": "Declare an integer variable named 'age' and set it to 25.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Declare age here\n    \n    std::cout << age << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "25",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use int age = 25; to declare and initialize the variable.",
          "xp": 10
        },
        {
          "id": "cpp-1-2-3",
          "type": "typing",
          "question": "What data type stores decimal numbers?",
          "correctAnswer": [
            "double",
            "float"
          ],
          "explanation": "double is used for decimal numbers with high precision.",
          "xp": 5
        },
        {
          "id": "cpp-1-2-4",
          "type": "code",
          "question": "Declare a double variable named 'price' and set it to 19.99.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Declare price here\n    \n    std::cout << price << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "19.99",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use double price = 19.99; to declare a decimal number.",
          "xp": 10
        },
        {
          "id": "cpp-1-2-5",
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
          "id": "cpp-1-2-6",
          "type": "code",
          "question": "Declare a char variable named 'grade' and set it to 'A'.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Declare grade here\n    \n    std::cout << grade << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "A",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use char grade = 'A'; with single quotes for characters.",
          "xp": 10
        },
        {
          "id": "cpp-1-2-7",
          "type": "typing",
          "question": "What type stores True or False values?",
          "correctAnswer": [
            "bool",
            "boolean"
          ],
          "explanation": "The bool type stores boolean values: True or False.",
          "xp": 5
        },
        {
          "id": "cpp-1-2-8",
          "type": "code",
          "question": "Declare a bool variable named 'passed' and set it to True.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Declare passed here\n    \n    if (passed) {\n        std::cout << \"True\" << std::endl;\n    } else {\n        std::cout << \"False\" << std::endl;\n    }\n    return 0;\n}\n",
          "expectedOutput": "True",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use bool passed = True; to declare a boolean variable.",
          "xp": 10
        },
        {
          "id": "cpp-1-2-9",
          "type": "typing",
          "question": "What type stores text strings?",
          "correctAnswer": [
            "string",
            "std::string"
          ],
          "explanation": "std::string (from <string> header) stores text strings.",
          "xp": 5
        },
        {
          "id": "cpp-1-2-10",
          "type": "code",
          "question": "Declare a string variable named 'name' with value 'C++'.",
          "codeTemplate": "#include <iostream>\n#include <string>\n\nint main() {\n    // Declare name here\n    \n    std::cout << name << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "C++",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::string name = \"C++\"; with double quotes for strings.",
          "xp": 10
        },
        {
          "id": "cpp-1-2-11",
          "type": "typing",
          "question": "Do you use single or double quotes for strings?",
          "correctAnswer": [
            "double",
            "double quotes",
            "\""
          ],
          "explanation": "Strings use double quotes (\"). Characters use single quotes (').",
          "xp": 5
        },
        {
          "id": "cpp-1-2-12",
          "type": "code",
          "question": "Declare two integers 'x' and 'y' and print their sum.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Declare x and y\n    // Print their sum\n    \n    return 0;\n}\n",
          "expectedOutput": "13",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use int x = 5, y = 8; then std::cout << x + y << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-2-13",
          "type": "typing",
          "question": "What is the default value of an uninitialized int variable?",
          "correctAnswer": [
            "undefined",
            "garbage value",
            "random"
          ],
          "explanation": "Uninitialized variables contain undefined garbage values.",
          "xp": 5
        },
        {
          "id": "cpp-1-2-14",
          "type": "code",
          "question": "Declare an integer and initialize it later with value 100.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int count;\n    // Initialize count to 100\n    \n    std::cout << count << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "100",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use count = 100; to assign a value to an existing variable.",
          "xp": 10
        },
        {
          "id": "cpp-1-2-15",
          "type": "typing",
          "question": "How do you initialize a variable with value 0?",
          "correctAnswer": [
            "int x = 0;",
            "= 0"
          ],
          "explanation": "Use int x = 0; to initialize a variable with zero.",
          "xp": 5
        },
        {
          "id": "cpp-1-2-16",
          "type": "code",
          "question": "Declare a string variable with your name (any name is fine).",
          "codeTemplate": "#include <iostream>\n#include <string>\n\nint main() {\n    // Declare a string with a name\n    \n    std::cout << \"Hello, \" << name << \"!\" << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "Hello, name!",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::string name = \"YourName\"; with any name.",
          "xp": 10
        },
        {
          "id": "cpp-1-2-17",
          "type": "typing",
          "question": "What happens if you assign a decimal to an int variable?",
          "correctAnswer": [
            "It truncates",
            "Removes decimal",
            "Truncates decimal"
          ],
          "explanation": "Assigning a decimal to int truncates (removes) the decimal part.",
          "xp": 5
        },
        {
          "id": "cpp-1-2-18",
          "type": "code",
          "question": "Assign 3.99 to an int variable and print it.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x;\n    // Assign 3.99 to x\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "3",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use x = 3.99; The int will store 3 (truncates the decimal).",
          "xp": 10
        },
        {
          "id": "cpp-1-2-19",
          "type": "typing",
          "question": "What header do you need for std::string?",
          "correctAnswer": [
            "<string>",
            "string"
          ],
          "explanation": "You need #include <string> to use std::string.",
          "xp": 5
        },
        {
          "id": "cpp-1-2-20",
          "type": "code",
          "question": "Declare and print three variables: int, double, and string.",
          "codeTemplate": "#include <iostream>\n#include <string>\n\nint main() {\n    // Declare int, double, and string variables\n    // Print them all\n    \n    return 0;\n}\n",
          "expectedOutput": "Numbers and text",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Declare three different types and print each with std::cout.",
          "xp": 10
        },
        {
          "id": "cpp-1-2-21",
          "type": "typing",
          "question": "Can variable names start with numbers?",
          "correctAnswer": [
            "No",
            "Cannot"
          ],
          "explanation": "Variable names cannot start with numbers, but can contain them after the first character.",
          "xp": 5
        },
        {
          "id": "cpp-1-2-22",
          "type": "code",
          "question": "Create an integer variable called 'count' and increment it by 1.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int count = 10;\n    // Increment count by 1\n    \n    std::cout << count << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "11",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use count = count + 1; or count++; to increment.",
          "xp": 10
        },
        {
          "id": "cpp-1-2-23",
          "type": "code",
          "question": "Declare a const integer variable.",
          "correctAnswer": [
            "const int MAX_VALUE = 100;",
            "const int x = 42;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-1-2-24",
          "type": "code",
          "question": "Use auto to deduce variable type.",
          "correctAnswer": [
            "auto x = 42;",
            "auto name = \"Hello\";"
          ],
          "xp": 15
        },
        {
          "id": "cpp-1-2-25",
          "type": "code",
          "question": "Declare an unsigned integer.",
          "correctAnswer": [
            "unsigned int count;",
            "unsigned int x = 0;"
          ],
          "xp": 10
        },
        {
          "id": "cpp-1-2-26",
          "type": "code",
          "question": "Use sizeof operator.",
          "correctAnswer": [
            "sizeof(int)",
            "size_t size = sizeof(double);"
          ],
          "xp": 10
        }
      ]
    },
    {
      "id": "1-3",
      "title": "Input and Output",
      "xp": 220,
      "type": "lesson",
      "difficulty": "beginner",
      "lessonText": "# Input and Output in C++\n\nC++ uses the iostream library for input and output operations.\n\n## Standard Output (std::cout)\n\n```cpp\nstd::cout << \"Hello\" << std::endl;\n```\n\n## Standard Input (std::cin)\n\n```cpp\nint age;\nstd::cin >> age;\n```",
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
          "type": "code",
          "question": "Print the message 'Hello C++!' to the console.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Print message here\n    \n    return 0;\n}\n",
          "expectedOutput": "Hello C++!",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << \"Hello C++!\" << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-3-3",
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
          "id": "cpp-1-3-4",
          "type": "code",
          "question": "Read an integer from input and store it in variable 'x'.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x;\n    // Read x from input\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "User input value",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cin >> x; to read an integer from input.",
          "xp": 10
        },
        {
          "id": "cpp-1-3-5",
          "type": "typing",
          "question": "What operator does std::cout use?",
          "correctAnswer": [
            "<<",
            "insertion operator"
          ],
          "explanation": "std::cout uses the << operator (stream insertion) to output.",
          "xp": 5
        },
        {
          "id": "cpp-1-3-6",
          "type": "code",
          "question": "Read two integers a and b, then print their sum.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int a, b;\n    // Read a and b\n    // Print their sum\n    \n    return 0;\n}\n",
          "expectedOutput": "Sum of a and b",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cin >> a >> b; then std::cout << a + b << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-3-7",
          "type": "typing",
          "question": "What operator does std::cin use?",
          "correctAnswer": [
            ">>",
            "extraction operator"
          ],
          "explanation": "std::cin uses the >> operator (stream extraction) to read input.",
          "xp": 5
        },
        {
          "id": "cpp-1-3-8",
          "type": "code",
          "question": "Prompt user to enter their name, then greet them.",
          "codeTemplate": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string name;\n    // Ask for name and read it\n    // Print greeting\n    \n    return 0;\n}\n",
          "expectedOutput": "Hello name!",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << \"Enter name: \"; std::cin >> name; std::cout << \"Hello \" << name << \"!\";",
          "xp": 10
        },
        {
          "id": "cpp-1-3-9",
          "type": "typing",
          "question": "What does std::endl do?",
          "correctAnswer": [
            "Newline and flush buffer",
            "End line"
          ],
          "explanation": "std::endl adds a newline and flushes the output buffer.",
          "xp": 5
        },
        {
          "id": "cpp-1-3-10",
          "type": "code",
          "question": "Read a string and print it three times.",
          "codeTemplate": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string word;\n    // Read word and print it 3 times\n    \n    return 0;\n}\n",
          "expectedOutput": "word word word",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Read word then print it three times with std::cout.",
          "xp": 10
        },
        {
          "id": "cpp-1-3-11",
          "type": "typing",
          "question": "What header do you need for std::cin and std::cout?",
          "correctAnswer": [
            "<iostream>",
            "iostream"
          ],
          "explanation": "You need #include <iostream> for input/output operations.",
          "xp": 5
        },
        {
          "id": "cpp-1-3-12",
          "type": "code",
          "question": "Read an integer and double, then print both values.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int a;\n    double b;\n    // Read a and b\n    // Print both\n    \n    return 0;\n}\n",
          "expectedOutput": "Integer and double values",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cin >> a >> b; then std::cout << a << \" \" << b << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-3-13",
          "type": "typing",
          "question": "What namespace are cout and cin in?",
          "correctAnswer": [
            "std",
            "standard"
          ],
          "explanation": "cout and cin are in the std (standard) namespace.",
          "xp": 5
        },
        {
          "id": "cpp-1-3-14",
          "type": "code",
          "question": "Read a single character and print it.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    char ch;\n    // Read character and print it\n    \n    return 0;\n}\n",
          "expectedOutput": "Character",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cin >> ch; then std::cout << ch << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-3-15",
          "type": "typing",
          "question": "How do you chain multiple outputs?",
          "correctAnswer": [
            "Use <<",
            "Chain <<"
          ],
          "explanation": "Chain outputs using multiple << operators: cout << a << b;",
          "xp": 5
        },
        {
          "id": "cpp-1-3-16",
          "type": "code",
          "question": "Print 'The sum is: ' followed by a variable value.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int sum = 10;\n    // Print \"The sum is: \" with the value\n    \n    return 0;\n}\n",
          "expectedOutput": "The sum is: 10",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << \"The sum is: \" << sum << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-3-17",
          "type": "typing",
          "question": "Can you read multiple inputs on one line?",
          "correctAnswer": [
            "Yes",
            "Yes you can"
          ],
          "explanation": "Yes, use cin >> a >> b >> c; to read multiple inputs.",
          "xp": 5
        },
        {
          "id": "cpp-1-3-18",
          "type": "code",
          "question": "Read three integers and print them in reverse order.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int a, b, c;\n    // Read a, b, c\n    // Print them in reverse order (c, b, a)\n    \n    return 0;\n}\n",
          "expectedOutput": "c b a",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Read all three then print c, b, a in that order.",
          "xp": 10
        },
        {
          "id": "cpp-1-3-19",
          "type": "typing",
          "question": "What happens if user enters wrong type for cin?",
          "correctAnswer": [
            "Error",
            "Fail",
            "Fails"
          ],
          "explanation": "cin will fail and the stream will enter an error state.",
          "xp": 5
        },
        {
          "id": "cpp-1-3-20",
          "type": "code",
          "question": "Read user's age and print 'Age: ' followed by the age.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int age;\n    // Read age and print with label\n    \n    return 0;\n}\n",
          "expectedOutput": "Age: [value]",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << \"Age: \" << age << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-3-21",
          "type": "typing",
          "question": "What is newline character in C++?",
          "correctAnswer": [
            "'\\n'",
            "\\n"
          ],
          "explanation": "'\\n' is the newline character. std::endl also works.",
          "xp": 5
        },
        {
          "id": "cpp-1-3-22",
          "type": "code",
          "question": "Read a number and print it with both std::endl and \\n.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int num;\n    // Read num\n    // Print with std::endl\n    // Print with \\n\n    return 0;\n}\n",
          "expectedOutput": "Number printed with two different newlines",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use both std::cout << num << std::endl; and std::cout << num << '\\n';",
          "xp": 10
        },
        {
          "id": "cpp-1-3-23",
          "type": "code",
          "question": "Read an integer from stdin.",
          "correctAnswer": [
            "int x; std::cin >> x;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-1-3-24",
          "type": "code",
          "question": "Read a string with spaces.",
          "correctAnswer": [
            "std::string name; std::getline(std::cin, name);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-1-3-25",
          "type": "code",
          "question": "Set precision for floating point output.",
          "correctAnswer": [
            "std::cout << std::setprecision(2);",
            "std::cout << std::fixed << std::setprecision(2);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-1-3-26",
          "type": "code",
          "question": "Flush the output stream.",
          "correctAnswer": [
            "std::cout << std::flush;",
            "std::cout.flush();"
          ],
          "xp": 10
        }
      ]
    },
    {
      "id": "1-4",
      "title": "Basic Operators",
      "xp": 220,
      "type": "lesson",
      "difficulty": "beginner",
      "lessonText": "# Basic Operators in C++\n\n## Arithmetic Operators\n\n- `+`: Addition\n- `-`: Subtraction\n- `*`: Multiplication\n- `/`: Division\n- `%`: Modulo (remainder)",
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
          "type": "code",
          "question": "Add 5 to variable 'x' using the + operator.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 10;\n    // Add 5 to x\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "15",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use x = x + 5; or x += 5; to add 5 to x.",
          "xp": 10
        },
        {
          "id": "cpp-1-4-3",
          "type": "typing",
          "question": "What is 10 % 3?",
          "correctAnswer": [
            "1"
          ],
          "explanation": "10 divided by 3 is 3 with remainder 1, so 10 % 3 = 1.",
          "xp": 5
        },
        {
          "id": "cpp-1-4-4",
          "type": "code",
          "question": "Calculate and print 10 divided by 3.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Print 10 / 3\n    \n    return 0;\n}\n",
          "expectedOutput": "3",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << 10 / 3 << std::endl; Integer division gives 3.",
          "xp": 10
        },
        {
          "id": "cpp-1-4-5",
          "type": "typing",
          "question": "What is 10 / 3 (integer division)?",
          "correctAnswer": [
            "3"
          ],
          "explanation": "Integer division truncates, so 10 / 3 = 3.",
          "xp": 5
        },
        {
          "id": "cpp-1-4-6",
          "type": "code",
          "question": "Add 5 to variable 'x' using += operator.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 10;\n    // Add 5 using +=\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "15",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use x += 5; to add 5 to x.",
          "xp": 10
        },
        {
          "id": "cpp-1-4-7",
          "type": "typing",
          "question": "What operator checks if two values are equal?",
          "correctAnswer": [
            "==",
            "equals"
          ],
          "explanation": "== is the equality operator. = is assignment.",
          "xp": 5
        },
        {
          "id": "cpp-1-4-8",
          "type": "code",
          "question": "Check if x is greater than 5 and print 'True' or 'False'.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 7;\n    // Check if x > 5 and print result\n    \n    return 0;\n}\n",
          "expectedOutput": "True",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << std::boolalpha << (x > 5) << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-4-9",
          "type": "typing",
          "question": "What does x *= 2 do?",
          "correctAnswer": [
            "Multiplies x by 2",
            "Double x"
          ],
          "explanation": "x *= 2 multiplies x by 2 and stores the result back in x.",
          "xp": 5
        },
        {
          "id": "cpp-1-4-10",
          "type": "code",
          "question": "Multiply x by 3 using *= operator.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 5;\n    // Multiply by 3 using *=\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "15",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use x *= 3; to multiply x by 3.",
          "xp": 10
        },
        {
          "id": "cpp-1-4-11",
          "type": "typing",
          "question": "What is 5 % 2?",
          "correctAnswer": [
            "1"
          ],
          "explanation": "5 divided by 2 is 2 with remainder 1, so 5 % 2 = 1.",
          "xp": 5
        },
        {
          "id": "cpp-1-4-12",
          "type": "code",
          "question": "Calculate a - b and print the result.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int a = 10, b = 3;\n    // Print a - b\n    \n    return 0;\n}\n",
          "expectedOutput": "7",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << a - b << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-4-13",
          "type": "typing",
          "question": "What operator checks if values are not equal?",
          "correctAnswer": [
            "!=",
            "not equal"
          ],
          "explanation": "!= checks if two values are not equal.",
          "xp": 5
        },
        {
          "id": "cpp-1-4-14",
          "type": "code",
          "question": "Subtract 3 from x using -= operator.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 10;\n    // Subtract 3 using -=\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "7",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use x -= 3; to subtract 3 from x.",
          "xp": 10
        },
        {
          "id": "cpp-1-4-15",
          "type": "typing",
          "question": "What is the result of 3 * 4?",
          "correctAnswer": [
            "12"
          ],
          "explanation": "3 multiplied by 4 equals 12.",
          "xp": 5
        },
        {
          "id": "cpp-1-4-16",
          "type": "code",
          "question": "Check if x equals 10 and print True or False.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 10;\n    // Check if x equals 10\n    \n    return 0;\n}\n",
          "expectedOutput": "True",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << std::boolalpha << (x == 10) << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-4-17",
          "type": "typing",
          "question": "What does x++ do?",
          "correctAnswer": [
            "Increments x",
            "Adds 1 to x"
          ],
          "explanation": "x++ increments x by 1 (post-increment).",
          "xp": 5
        },
        {
          "id": "cpp-1-4-18",
          "type": "code",
          "question": "Increment x using ++ operator and print it.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 5;\n    // Increment x using ++\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "6",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use x++; or ++x; to increment x.",
          "xp": 10
        },
        {
          "id": "cpp-1-4-19",
          "type": "typing",
          "question": "What does x-- do?",
          "correctAnswer": [
            "Decrements x",
            "Subtracts 1 from x"
          ],
          "explanation": "x-- decrements x by 1 (post-decrement).",
          "xp": 5
        },
        {
          "id": "cpp-1-4-20",
          "type": "code",
          "question": "Divide x by 2 using /= operator.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 10;\n    // Divide by 2 using /=\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
          "expectedOutput": "5",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use x /= 2; to divide x by 2.",
          "xp": 10
        },
        {
          "id": "cpp-1-4-21",
          "type": "typing",
          "question": "What is 10.0 / 3.0?",
          "correctAnswer": [
            "3.333...",
            "3.33",
            "3.333333"
          ],
          "explanation": "Floating-point division gives decimal result: 10.0 / 3.0 ≈ 3.333.",
          "xp": 5
        },
        {
          "id": "cpp-1-4-22",
          "type": "code",
          "question": "Calculate modulus of 17 and 5 and print result.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Print 17 % 5\n    \n    return 0;\n}\n",
          "expectedOutput": "2",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use std::cout << 17 % 5 << std::endl;",
          "xp": 10
        },
        {
          "id": "cpp-1-4-23",
          "type": "code",
          "question": "Use modulo operator.",
          "correctAnswer": [
            "int remainder = a % b;",
            "x % 2"
          ],
          "xp": 10
        },
        {
          "id": "cpp-1-4-24",
          "type": "code",
          "question": "Use compound assignment operator.",
          "correctAnswer": [
            "x += 5;",
            "x *= 2;",
            "x /= 3;"
          ],
          "xp": 10
        },
        {
          "id": "cpp-1-4-25",
          "type": "code",
          "question": "Use increment operator (prefix).",
          "correctAnswer": [
            "++x;",
            "int y = ++x;"
          ],
          "xp": 10
        },
        {
          "id": "cpp-1-4-26",
          "type": "code",
          "question": "Use bitwise AND operator.",
          "correctAnswer": [
            "result = a & b;",
            "int flags = FLAG_A & FLAG_B;"
          ],
          "xp": 15
        }
      ]
    },
    {
      "id": "1-5",
      "title": "Control Flow: If Statements",
      "xp": 220,
      "type": "lesson",
      "difficulty": "beginner",
      "lessonText": "# Control Flow: If Statements in C++\n\n## If Statement\n\n```cpp\nif (condition) {\n    // Code to execute if condition is True\n}\n```",
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
          "type": "code",
          "question": "Write an if statement that checks if x is positive and prints 'Positive'.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 5;\n    // Check if x is positive\n    \n    return 0;\n}\n",
          "expectedOutput": "Positive",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (x > 0) { std::cout << \"Positive\" << std::endl; }",
          "xp": 10
        },
        {
          "id": "cpp-1-5-3",
          "type": "typing",
          "question": "What does the else block execute?",
          "correctAnswer": [
            "When if condition is False",
            "Otherwise"
          ],
          "explanation": "The else block executes when the if condition is False.",
          "xp": 5
        },
        {
          "id": "cpp-1-5-4",
          "type": "code",
          "question": "Write if-else to print 'Even' if x is even, 'Odd' otherwise.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 4;\n    // Check even or odd\n    \n    return 0;\n}\n",
          "expectedOutput": "Even",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (x % 2 == 0) { ... } else { ... } with modulo operator.",
          "xp": 10
        },
        {
          "id": "cpp-1-5-5",
          "type": "typing",
          "question": "What is the condition for a number to be even?",
          "correctAnswer": [
            "x % 2 == 0",
            "Divisible by 2"
          ],
          "explanation": "A number is even if x % 2 equals 0.",
          "xp": 5
        },
        {
          "id": "cpp-1-5-6",
          "type": "code",
          "question": "Check if x is greater than 10 and print 'Big', else 'Small'.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 15;\n    // Check if x > 10\n    \n    return 0;\n}\n",
          "expectedOutput": "Big",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (x > 10) { std::cout << \"Big\"; } else { std::cout << \"Small\"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-5-7",
          "type": "typing",
          "question": "What does else if do?",
          "correctAnswer": [
            "Checks another condition",
            "Multiple conditions"
          ],
          "explanation": "else if checks another condition if the previous if was False.",
          "xp": 5
        },
        {
          "id": "cpp-1-5-8",
          "type": "code",
          "question": "Check if x is positive, negative, or zero and print message.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = -5;\n    // Check if x is positive, negative, or zero\n    \n    return 0;\n}\n",
          "expectedOutput": "Negative",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (x > 0), else if (x < 0), else for zero.",
          "xp": 10
        },
        {
          "id": "cpp-1-5-9",
          "type": "typing",
          "question": "What operator means 'and' in conditions?",
          "correctAnswer": [
            "&&",
            "and"
          ],
          "explanation": "&& is the logical AND operator.",
          "xp": 5
        },
        {
          "id": "cpp-1-5-10",
          "type": "code",
          "question": "Check if x is between 10 and 20 (inclusive).",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 15;\n    // Check if x is between 10 and 20\n    \n    return 0;\n}\n",
          "expectedOutput": "Between 10 and 20",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (x >= 10 && x <= 20) { ... }",
          "xp": 10
        },
        {
          "id": "cpp-1-5-11",
          "type": "typing",
          "question": "What operator means 'or' in conditions?",
          "correctAnswer": [
            "||",
            "or"
          ],
          "explanation": "|| is the logical OR operator.",
          "xp": 5
        },
        {
          "id": "cpp-1-5-12",
          "type": "code",
          "question": "Check if x is less than 0 OR greater than 100.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 150;\n    // Check if x < 0 or x > 100\n    \n    return 0;\n}\n",
          "expectedOutput": "Out of range",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (x < 0 || x > 100) { std::cout << \"Out of range\"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-5-13",
          "type": "typing",
          "question": "What operator means 'not' in conditions?",
          "correctAnswer": [
            "!",
            "not"
          ],
          "explanation": "! is the logical NOT operator.",
          "xp": 5
        },
        {
          "id": "cpp-1-5-14",
          "type": "code",
          "question": "Check if x is NOT equal to 0 and print 'Non-zero'.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 5;\n    // Check if x is not zero\n    \n    return 0;\n}\n",
          "expectedOutput": "Non-zero",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (x != 0) { std::cout << \"Non-zero\"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-5-15",
          "type": "typing",
          "question": "Can you have multiple else if blocks?",
          "correctAnswer": [
            "Yes",
            "Yes you can"
          ],
          "explanation": "Yes, you can chain multiple else if blocks.",
          "xp": 5
        },
        {
          "id": "cpp-1-5-16",
          "type": "code",
          "question": "Grade: Print 'A' if score >= 90, 'B' if >= 80, else 'C'.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int score = 85;\n    // Grade the score\n    \n    return 0;\n}\n",
          "expectedOutput": "B",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (score >= 90) { cout << \"A\"; } else if (score >= 80) { cout << \"B\"; } else { cout << \"C\"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-5-17",
          "type": "typing",
          "question": "What is True && False?",
          "correctAnswer": [
            "False"
          ],
          "explanation": "True AND False equals False.",
          "xp": 5
        },
        {
          "id": "cpp-1-5-18",
          "type": "code",
          "question": "Check if password is 'secret' and print 'Access granted'.",
          "codeTemplate": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string password = \"secret\";\n    // Check if password is correct\n    \n    return 0;\n}\n",
          "expectedOutput": "Access granted",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (password == \"secret\") { std::cout << \"Access granted\"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-5-19",
          "type": "typing",
          "question": "What is True || False?",
          "correctAnswer": [
            "True"
          ],
          "explanation": "True OR False equals True.",
          "xp": 5
        },
        {
          "id": "cpp-1-5-20",
          "type": "code",
          "question": "Check if x equals y and print 'Equal', else 'Not equal'.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 10, y = 10;\n    // Check if x equals y\n    \n    return 0;\n}\n",
          "expectedOutput": "Equal",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (x == y) { std::cout << \"Equal\"; } else { std::cout << \"Not equal\"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-5-21",
          "type": "typing",
          "question": "What is !True?",
          "correctAnswer": [
            "False"
          ],
          "explanation": "NOT True equals False.",
          "xp": 5
        },
        {
          "id": "cpp-1-5-22",
          "type": "code",
          "question": "Check if x is divisible by both 2 AND 3.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 12;\n    // Check if x is divisible by 2 and 3\n    \n    return 0;\n}\n",
          "expectedOutput": "Divisible by 2 and 3",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (x % 2 == 0 && x % 3 == 0) { ... }",
          "xp": 10
        },
        {
          "id": "cpp-1-5-23",
          "type": "code",
          "question": "Write if-else statement.",
          "correctAnswer": [
            "if (condition) { } else { }",
            "if (x > 0) { } else { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-1-5-24",
          "type": "code",
          "question": "Write else-if chain.",
          "correctAnswer": [
            "if (x > 0) { } else if (x < 0) { } else { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-1-5-25",
          "type": "code",
          "question": "Use ternary operator.",
          "correctAnswer": [
            "int max = (a > b) ? a : b;",
            "result = (condition) ? true : false;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-1-5-26",
          "type": "code",
          "question": "Use logical AND in condition.",
          "correctAnswer": [
            "if (x > 0 && x < 100)",
            "if (a && b)"
          ],
          "xp": 10
        }
      ]
    },
    {
      "id": "1-6",
      "title": "Control Flow: Loops",
      "xp": 220,
      "type": "lesson",
      "difficulty": "beginner",
      "lessonText": "# Control Flow: Loops in C++\n\n## For Loop\n\n```cpp\nfor (initialization; condition; update) {\n    // Code to repeat\n}\n```",
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
          "type": "code",
          "question": "Write a for loop that prints numbers 1 to 5.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Write for loop here\n    \n    return 0;\n}\n",
          "expectedOutput": "1 2 3 4 5",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "for (int i = 1; i <= 5; i++) { std::cout << i << \" \"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-6-3",
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
          "id": "cpp-1-6-4",
          "type": "code",
          "question": "Write a while loop that prints even numbers from 0 to 10.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Write while loop here\n    \n    return 0;\n}\n",
          "expectedOutput": "0 2 4 6 8 10",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "int i = 0; while (i <= 10) { std::cout << i << \" \"; i += 2; }",
          "xp": 10
        },
        {
          "id": "cpp-1-6-5",
          "type": "typing",
          "question": "What does continue do?",
          "correctAnswer": [
            "Skips to next iteration",
            "Skip"
          ],
          "explanation": "The continue statement skips the rest of the current iteration and moves to the next.",
          "xp": 5
        },
        {
          "id": "cpp-1-6-6",
          "type": "code",
          "question": "Write a for loop that prints numbers 5 to 1 (descending).",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Write for loop here\n    \n    return 0;\n}\n",
          "expectedOutput": "5 4 3 2 1",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "for (int i = 5; i >= 1; i--) { std::cout << i << \" \"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-6-7",
          "type": "typing",
          "question": "What is the three parts of a for loop?",
          "correctAnswer": [
            "init, condition, update",
            "initialization condition update"
          ],
          "explanation": "for (initialization; condition; update) - three parts separated by semicolons.",
          "xp": 5
        },
        {
          "id": "cpp-1-6-8",
          "type": "code",
          "question": "Write a loop that prints 'Hello' 5 times using for.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Print 'Hello' 5 times\n    \n    return 0;\n}\n",
          "expectedOutput": "Hello Hello Hello Hello Hello",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "for (int i = 0; i < 5; i++) { std::cout << \"Hello \"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-6-9",
          "type": "typing",
          "question": "When does a while loop stop?",
          "correctAnswer": [
            "When condition is False",
            "Condition False"
          ],
          "explanation": "A while loop stops when its condition becomes False.",
          "xp": 5
        },
        {
          "id": "cpp-1-6-10",
          "type": "code",
          "question": "Write a while loop that counts from 0 to 4.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Write while loop here\n    \n    return 0;\n}\n",
          "expectedOutput": "0 1 2 3 4",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "int i = 0; while (i < 5) { std::cout << i << \" \"; i++; }",
          "xp": 10
        },
        {
          "id": "cpp-1-6-11",
          "type": "typing",
          "question": "What does i++ do in a for loop?",
          "correctAnswer": [
            "Increments i",
            "Adds 1",
            "Increase i"
          ],
          "explanation": "i++ increments the loop counter by 1 after each iteration.",
          "xp": 5
        },
        {
          "id": "cpp-1-6-12",
          "type": "code",
          "question": "Write a for loop that prints squares 1, 4, 9, 16, 25.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Print squares 1 to 25\n    \n    return 0;\n}\n",
          "expectedOutput": "1 4 9 16 25",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "for (int i = 1; i <= 5; i++) { std::cout << i * i << \" \"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-6-13",
          "type": "typing",
          "question": "What loop is best when you don't know iterations?",
          "correctAnswer": [
            "while loop",
            "while"
          ],
          "explanation": "The while loop is best when you don't know how many iterations.",
          "xp": 5
        },
        {
          "id": "cpp-1-6-14",
          "type": "code",
          "question": "Use break to exit loop when i equals 3.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Use break when i == 3\n    for (int i = 1; i <= 10; i++) {\n        std::cout << i << \" \";\n    }\n    return 0;\n}\n",
          "expectedOutput": "1 2",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Add: if (i == 3) break; inside the loop.",
          "xp": 10
        },
        {
          "id": "cpp-1-6-15",
          "type": "typing",
          "question": "What happens if loop condition is always True?",
          "correctAnswer": [
            "Infinite loop",
            "Never stops"
          ],
          "explanation": "If the condition is always True, the loop never ends (infinite loop).",
          "xp": 5
        },
        {
          "id": "cpp-1-6-16",
          "type": "code",
          "question": "Use continue to skip printing 3.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Skip printing 3 using continue\n    for (int i = 1; i <= 5; i++) {\n        std::cout << i << \" \";\n    }\n    return 0;\n}\n",
          "expectedOutput": "1 2 4 5",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Add: if (i == 3) continue; before printing.",
          "xp": 10
        },
        {
          "id": "cpp-1-6-17",
          "type": "typing",
          "question": "How do you increment by 2 in a loop?",
          "correctAnswer": [
            "i += 2",
            "i = i + 2"
          ],
          "explanation": "Use i += 2 to increment by 2 in a loop.",
          "xp": 5
        },
        {
          "id": "cpp-1-6-18",
          "type": "code",
          "question": "Write a for loop that counts by 3: 0, 3, 6, 9.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Count by 3s\n    \n    return 0;\n}\n",
          "expectedOutput": "0 3 6 9",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "for (int i = 0; i < 10; i += 3) { std::cout << i << \" \"; }",
          "xp": 10
        },
        {
          "id": "cpp-1-6-19",
          "type": "typing",
          "question": "Can you nest loops inside loops?",
          "correctAnswer": [
            "Yes",
            "Yes you can"
          ],
          "explanation": "Yes, you can nest loops inside other loops.",
          "xp": 5
        },
        {
          "id": "cpp-1-6-20",
          "type": "code",
          "question": "Write a while loop that runs until user enters 0.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    int num = 1;\n    // Loop while num != 0, read num in loop\n    \n    return 0;\n}\n",
          "expectedOutput": "Loops until 0 is entered",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "while (num != 0) { std::cin >> num; }",
          "xp": 10
        },
        {
          "id": "cpp-1-6-21",
          "type": "typing",
          "question": "What is an infinite loop?",
          "correctAnswer": [
            "Loop that never ends",
            "Endless loop"
          ],
          "explanation": "An infinite loop is a loop that never terminates (condition never False).",
          "xp": 5
        },
        {
          "id": "cpp-1-6-22",
          "type": "code",
          "question": "Print numbers 1-10 but skip 5 and stop at 8.",
          "codeTemplate": "#include <iostream>\n\nint main() {\n    // Use continue to skip 5, break to stop at 8\n    for (int i = 1; i <= 10; i++) {\n        // Your code here\n    }\n    return 0;\n}\n",
          "expectedOutput": "1 2 3 4 6 7 8",
          "language": "cpp",
          "localLLMGrade": true,
          "explanation": "Use if (i == 5) continue; if (i > 8) break; in the loop.",
          "xp": 10
        }
      ]
    }
  ]
};
