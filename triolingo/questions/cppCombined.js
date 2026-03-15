// C++ - All Topics
// Generated from C++ outline

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
    },
    {
      "unitId": "2",
      "unitName": "2. Functions and Data Structures",
      "lessons": [
        {
          "id": "2-1",
          "title": "Functions and Scope",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Functions and Scope in C++\n\nFunctions are reusable blocks of code that perform specific tasks. They help organize code, avoid repetition, and make programs easier to maintain.\n\n## Declaring Functions\n\nA function has three main parts:\n1. **Return type**: What value the function returns (use `void` if no return)\n2. **Function name**: Identifier to call the function\n3. **Parameters**: Input values (optional)\n\n**Syntax:**\n```cpp\nreturnType functionName(parameters) {\n    // Function body\n    return value;  // if returnType is not void\n}\n```\n\n## Example: Return Type Function\n\n```cpp\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(5, 3);\n    std::cout << result;  // Output: 8\n    return 0;\n}\n```\n\n## Example: Void Function\n\nVoid functions don't return a value:\n```cpp\nvoid greet(std::string name) {\n    std::cout << \"Hello, \" << name << \"!\" << std::endl;\n}\n\nint main() {\n    greet(\"Alice\");  // Output: Hello, Alice!\n    return 0;\n}\n```\n\n## Function Parameters\n\nC++ supports three ways to pass parameters:\n\n### 1. Pass by Value (Default)\nCreates a **copy** of the value. Changes inside the function don't affect the original.\n\n```cpp\nvoid increment(int x) {\n    x++;  // Only modifies the copy\n}\nint main() {\n    int num = 5;\n    increment(num);\n    std::cout << num;  // Output: 5 (unchanged)\n}\n```\n\n### 2. Pass by Reference\nPasses the **original variable** using `&`. Changes affect the original.\n\n```cpp\nvoid increment(int& x) {\n    x++;  // Modifies the original\n}\nint main() {\n    int num = 5;\n    increment(num);\n    std::cout << num;  // Output: 6 (changed)\n}\n```\n\n### 3. Pass by Pointer\nPasses the **memory address** using `*`. Changes affect the original.\n\n```cpp\nvoid increment(int* x) {\n    (*x)++;  // Dereference and modify\n}\nint main() {\n    int num = 5;\n    increment(&num);  // Pass address\n    std::cout << num;  // Output: 6 (changed)\n}\n```\n\n## Scope\n\nScope determines where variables can be accessed:\n\n### Local Scope\nVariables declared inside a function are **local** - only accessible within that function.\n\n```cpp\nvoid myFunction() {\n    int x = 10;  // Local variable\n    std::cout << x;  // OK\n}\nint main() {\n    myFunction();\n    std::cout << x;  // ERROR: x not accessible here\n}\n```\n\n### Global Scope\nVariables declared **outside** all functions are **global** - accessible everywhere.\n\n```cpp\nint globalVar = 100;  // Global variable\n\nvoid myFunction() {\n    std::cout << globalVar;  // OK\n}\nint main() {\n    std::cout << globalVar;  // OK\n}\n```\n\n## Default Parameters\n\nFunctions can have default values for parameters:\n```cpp\nint power(int base, int exp = 2) {\n    int result = 1;\n    for (int i = 0; i < exp; i++) {\n        result *= base;\n    }\n    return result;\n}\npower(3);     // 3^2 = 9\npower(3, 3);  // 3^3 = 27\n```",
          "questions": [
            {
              "id": "cpp-2-1-1",
              "type": "typing",
              "question": "What keyword is used for functions that don't return a value?",
              "correctAnswer": [
                "void"
              ],
              "explanation": "The void keyword is used for functions that don't return a value. They can still perform actions like printing to the console.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-2",
              "type": "typing",
              "question": "What is the entry point of a C++ program?",
              "correctAnswer": [
                "main()",
                "int main()"
              ],
              "explanation": "The main() function is the entry point where program execution begins. Every C++ program must have exactly one main() function.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-3",
              "type": "typing",
              "question": "What does pass by value mean?",
              "correctAnswer": [
                "copy of value",
                "copies the value"
              ],
              "explanation": "Pass by value means a copy of the parameter is passed to the function. Changes made to the copy don't affect the original variable.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-4",
              "type": "typing",
              "question": "What symbol is used to pass by reference?",
              "correctAnswer": [
                "&",
                "ampersand"
              ],
              "explanation": "The & symbol after the type indicates pass by reference. This allows the function to modify the original variable.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-5",
              "type": "typing",
              "question": "What is local scope?",
              "correctAnswer": [
                "variables inside function",
                "function local variables"
              ],
              "explanation": "Local scope refers to variables declared inside a function. These variables are only accessible within that function.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-6",
              "type": "typing",
              "question": "What is global scope?",
              "correctAnswer": [
                "variables outside all functions",
                "accessible everywhere"
              ],
              "explanation": "Global scope refers to variables declared outside all functions. These variables can be accessed anywhere in the program.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-7",
              "type": "typing",
              "question": "What is the default parameter passing method?",
              "correctAnswer": [
                "pass by value",
                "value"
              ],
              "explanation": "C++ defaults to pass by value, which creates a copy of the parameter.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-8",
              "type": "typing",
              "question": "Can a function have multiple return statements?",
              "correctAnswer": [
                "yes",
                "Yes"
              ],
              "explanation": "Yes, functions can have multiple return statements in different branches or conditions. The function exits when it encounters the first return statement that executes.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-9",
              "type": "typing",
              "question": "What is a function prototype?",
              "correctAnswer": [
                "declaration without body",
                "function declaration"
              ],
              "explanation": "A function prototype declares the function's name, return type, and parameters without providing the function body. It allows you to use the function before it's defined.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-10",
              "type": "typing",
              "question": "What happens if you don't return a value from a non-void function?",
              "correctAnswer": [
                "undefined behavior",
                "error"
              ],
              "explanation": "Not returning a value from a non-void function results in undefined behavior. The program may compile but produce unpredictable results.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-11",
              "type": "typing",
              "question": "What is function overloading?",
              "correctAnswer": [
                "same name different parameters",
                "multiple functions same name"
              ],
              "explanation": "Function overloading allows multiple functions with the same name but different parameters (different number or type). The compiler chooses the right one based on arguments.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-12",
              "type": "typing",
              "question": "What is recursion?",
              "correctAnswer": [
                "function calls itself",
                "self-calling function"
              ],
              "explanation": "Recursion is when a function calls itself. It requires a base case to stop the recursion, otherwise it creates infinite recursion.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-13",
              "type": "multiple-choice",
              "question": "Which parameter passing method can modify the original variable?",
              "options": [
                "Pass by value",
                "Pass by reference",
                "Pass by constant",
                "Pass by copy"
              ],
              "correct": 1,
              "explanation": "Pass by reference (using &) allows the function to modify the original variable because it passes a reference to the original, not a copy.",
              "xp": 3
            },
            {
              "id": "cpp-2-1-14",
              "type": "multiple-choice",
              "question": "What is the purpose of the return statement?",
              "options": [
                "Print to console",
                "Exit function and return value",
                "Create variable",
                "Declare function"
              ],
              "correct": 1,
              "explanation": "The return statement exits the function and optionally returns a value. For void functions, return exits without returning a value.",
              "xp": 3
            },
            {
              "id": "cpp-2-1-15",
              "type": "multiple-choice",
              "question": "Can a function call another function?",
              "options": [
                "No",
                "Yes",
                "Only if they have same return type",
                "Only if both are void"
              ],
              "correct": 1,
              "explanation": "Yes, functions can call other functions. This is called function composition and is a common practice in programming.",
              "xp": 3
            },
            {
              "id": "cpp-2-1-16",
              "type": "multiple-choice",
              "question": "What is the base case in recursion?",
              "options": [
                "First call",
                "Termination condition",
                "Last call",
                "Error condition"
              ],
              "correct": 1,
              "explanation": "The base case is the termination condition that stops the recursion. Without a base case, recursive functions would create infinite recursion and crash.",
              "xp": 3
            },
            {
              "id": "cpp-2-1-17",
              "type": "multiple-choice",
              "question": "Which symbol is used to get the address of a variable?",
              "options": [
                "*",
                "&",
                "#",
                "@"
              ],
              "correct": 1,
              "explanation": "The & operator (address-of operator) is used to get the memory address of a variable. This is used when passing parameters by pointer.",
              "xp": 3
            },
            {
              "id": "cpp-2-1-18",
              "type": "code",
              "question": "Write a function called 'square' that takes an integer and returns its square.",
              "codeTemplate": "#include <iostream>\n\nint square(int x) {\n    // Write your code here\n    return 0;\n}\n\nint main() {\n    std::cout << square(5) << std::endl;\n    return 0;\n}\n",
              "expectedOutput": "25",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Return x * x or return pow(x, 2). For example: return x * x;",
              "xp": 10
            },
            {
              "id": "cpp-2-1-19",
              "type": "code",
              "question": "Write a void function 'printMessage' that prints 'Hello World!'",
              "codeTemplate": "#include <iostream>\n\nvoid printMessage() {\n    // Write your code here\n}\n\nint main() {\n    printMessage();\n    return 0;\n}\n",
              "expectedOutput": "Hello World!",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use std::cout with the message and std::endl. For example: std::cout << \"Hello World!\" << std::endl;",
              "xp": 10
            },
            {
              "id": "cpp-2-1-20",
              "type": "code",
              "question": "Write a function 'max' that takes two integers and returns the larger one.",
              "codeTemplate": "#include <iostream>\n\nint max(int a, int b) {\n    // Write your code here\n    return 0;\n}\n\nint main() {\n    std::cout << max(10, 5) << std::endl;\n    return 0;\n}\n",
              "expectedOutput": "10",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "Use if-else or ternary operator. For example: return a > b ? a : b; or if (a > b) return a; else return b;",
              "xp": 10
            }
          ]
        },
        {
          "id": "2-2",
          "title": "Arrays and Vectors",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Arrays and Vectors in C++\n\nArrays and vectors are fundamental data structures for storing collections of values of the same type.\n\n## Arrays\n\nArrays are **fixed-size** collections of elements stored contiguously in memory.\n\n### Declaring Arrays\n\n**Syntax:**\n```cpp\ntype arrayName[size];\n```\n\n**Examples:**\n```cpp\nint numbers[5];              // Array of 5 integers\ndouble temperatures[10];     // Array of 10 doubles\nchar letters[26];            // Array of 26 characters\n```\n\n### Initializing Arrays\n\n**Initialize all to zero:**\n```cpp\nint arr[5] = {0};  // All elements are 0\n```\n\n**Initialize with values:**\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\n```\n\n**Initialize without specifying size (inferred):**\n```cpp\nint arr[] = {1, 2, 3, 4, 5};  // Size is 5\n```\n\n### Accessing Array Elements\n\nArray indices start at **0** (zero-based indexing):\n\n```cpp\nint arr[5] = {10, 20, 30, 40, 50};\nstd::cout << arr[0];  // Output: 10 (first element)\nstd::cout << arr[4];  // Output: 50 (last element)\narr[2] = 100;         // Change third element\n```\n\n### Array Bounds\n\n⚠️ **Important:** Arrays have fixed bounds. Accessing out-of-bounds causes **undefined behavior**:\n\n```cpp\nint arr[5];\narr[5] = 10;  // ERROR: Index 5 is out of bounds (valid: 0-4)\narr[-1] = 10; // ERROR: Negative index is invalid\n```\n\n### Iterating Through Arrays\n\n**Using index-based loop:**\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\nfor (int i = 0; i < 5; i++) {\n    std::cout << arr[i] << \" \";\n}\n// Output: 1 2 3 4 5\n```\n\n**Using range-based for loop (C++11):**\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\nfor (int x : arr) {\n    std::cout << x << \" \";\n}\n// Output: 1 2 3 4 5\n```\n\n### 2D Arrays\n\nArrays of arrays:\n\n```cpp\nint matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\n// Accessing elements\nstd::cout << matrix[0][0];  // Output: 1\nstd::cout << matrix[1][2];  // Output: 6\n```\n\n## Vectors\n\nVectors are **dynamic arrays** from the C++ Standard Template Library (STL). They can grow and shrink in size.\n\n### Declaring Vectors\n\n**Include header:**\n```cpp\n#include <vector>\n```\n\n**Create empty vector:**\n```cpp\nstd::vector<int> v;\n```\n\n**Initialize with values:**\n```cpp\nstd::vector<int> v = {1, 2, 3, 4, 5};\nstd::vector<double> v(10, 0.0);  // 10 elements, all 0.0\n```\n\n### Vector Operations\n\n```cpp\nstd::vector<int> v;\n\n// Add element to end\nv.push_back(10);\nv.push_back(20);\n// v = {10, 20}\n\n// Access elements\nstd::cout << v[0];  // Output: 10\nstd::cout << v.at(1);  // Output: 20 (with bounds checking)\n\n// Get size\nstd::cout << v.size();  // Output: 2\n\n// Remove last element\nv.pop_back();\n// v = {10}\n\n// Check if empty\nif (v.empty()) {\n    std::cout << \"Vector is empty\";\n}\n\n// Clear all elements\nv.clear();\n// v = {}\n```\n\n### Vector vs Array\n\n| Feature | Array | Vector |\n|---------|-------|--------|\n| Size | Fixed | Dynamic |\n| Memory | Stack | Heap |\n| Performance | Slightly faster | Slightly slower |\n| Safety | No bounds checking | Has bounds checking (at()) |\n| Methods | None | Many (push_back, size, etc.) |\n\n### Common Vector Methods\n\n```cpp\nv.size()          // Number of elements\nv.empty()         // True if empty\nv.capacity()      // Allocated memory (>= size)\nv.push_back(x)    // Add element at end\nv.pop_back()      // Remove last element\nv.clear()         // Remove all elements\nv.front()         // First element\nv.back()          // Last element\nv.at(i)           // Access with bounds check\nv.resize(n)       // Change size\nv.resize(n, val)  // Resize and fill with val\n```",
          "questions": [
            {
              "id": "cpp-2-2-1",
              "type": "typing",
              "question": "What is the first array index in C++?",
              "correctAnswer": [
                "0",
                "zero"
              ],
              "explanation": "Array indices in C++ start at 0 (zero-based indexing). The first element is at index 0.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-2",
              "type": "typing",
              "question": "What header do you need to use vectors?",
              "correctAnswer": [
                "<vector>"
              ],
              "explanation": "You must include #include <vector> to use std::vector from the C++ Standard Template Library.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-3",
              "type": "typing",
              "question": "What method adds an element to the end of a vector?",
              "correctAnswer": [
                "push_back()",
                "push_back"
              ],
              "explanation": "push_back() adds a new element to the end of the vector, increasing its size by 1.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-4",
              "type": "typing",
              "question": "What method returns the number of elements in a vector?",
              "correctAnswer": [
                "size()",
                "size"
              ],
              "explanation": "The size() method returns the number of elements currently in the vector.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-5",
              "type": "typing",
              "question": "What happens when you access an array index out of bounds?",
              "correctAnswer": [
                "undefined behavior",
                "error",
                "crash"
              ],
              "explanation": "Accessing an array out of bounds causes undefined behavior, which may result in incorrect values, crashes, or security vulnerabilities.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-6",
              "type": "typing",
              "question": "What is the key difference between arrays and vectors?",
              "correctAnswer": [
                "arrays fixed size vectors dynamic",
                "vectors dynamic arrays fixed"
              ],
              "explanation": "Arrays have fixed size that cannot change, while vectors are dynamic arrays that can grow or shrink at runtime.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-7",
              "type": "typing",
              "question": "What method removes the last element from a vector?",
              "correctAnswer": [
                "pop_back()",
                "pop_back"
              ],
              "explanation": "pop_back() removes the last element from the vector, reducing its size by 1.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-8",
              "type": "typing",
              "question": "What does the at() method do for vectors?",
              "correctAnswer": [
                "access with bounds checking",
                "checks bounds"
              ],
              "explanation": "at() accesses an element and throws an exception if the index is out of bounds, providing safer access than the [] operator.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-9",
              "type": "typing",
              "question": "What loop construct iterates through elements without index?",
              "correctAnswer": [
                "range-based for loop",
                "for-each loop",
                "for each"
              ],
              "explanation": "The range-based for loop (for (type var : container)) iterates through each element without needing to manage an index.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-10",
              "type": "typing",
              "question": "What is a 2D array?",
              "correctAnswer": [
                "array of arrays",
                "matrix",
                "nested array"
              ],
              "explanation": "A 2D array is an array of arrays, used to represent tabular data or matrices. Accessed with two indices: array[row][col].",
              "xp": 4
            },
            {
              "id": "cpp-2-2-11",
              "type": "typing",
              "question": "What method clears all elements from a vector?",
              "correctAnswer": [
                "clear()",
                "clear"
              ],
              "explanation": "clear() removes all elements from the vector, making its size zero (but capacity may remain the same).",
              "xp": 5
            },
            {
              "id": "cpp-2-2-12",
              "type": "typing",
              "question": "What is vector capacity?",
              "correctAnswer": [
                "allocated memory",
                "total allocated space"
              ],
              "explanation": "Capacity is the amount of memory allocated by the vector, which is always >= the size. Capacity can grow larger than size to avoid frequent reallocations.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-13",
              "type": "multiple-choice",
              "question": "Which is a valid way to initialize an array with 5 zeros?",
              "options": [
                "int arr[5];",
                "int arr[5] = {0};",
                "int arr = {0, 0, 0, 0, 0};",
                "int arr(5) = 0;"
              ],
              "correct": 1,
              "explanation": "int arr[5] = {0}; initializes all 5 elements to 0. The first element is 0, and all remaining elements are also initialized to 0.",
              "xp": 3
            },
            {
              "id": "cpp-2-2-14",
              "type": "multiple-choice",
              "question": "Which is TRUE about vectors?",
              "options": [
                "Vectors cannot grow after creation",
                "Vectors store elements of different types",
                "Vectors provide bounds checking with at()",
                "Vectors are faster than arrays"
              ],
              "correct": 2,
              "explanation": "Vectors provide bounds checking through the at() method, which throws an exception for invalid indices. Vectors can grow, store elements of the same type, and are slightly slower than arrays.",
              "xp": 3
            },
            {
              "id": "cpp-2-2-15",
              "type": "multiple-choice",
              "question": "What is the last index in an array of size 10?",
              "options": [
                "10",
                "9",
                "11",
                "0"
              ],
              "correct": 1,
              "explanation": "Array indices are zero-based, so for an array of size 10, valid indices are 0 through 9. The last index is size-1 = 9.",
              "xp": 3
            },
            {
              "id": "cpp-2-2-16",
              "type": "multiple-choice",
              "question": "Which method checks if a vector is empty?",
              "options": [
                "size() == 0",
                "isEmpty()",
                "empty()",
                "length() == 0"
              ],
              "correct": 2,
              "explanation": "The empty() method returns true if the vector contains no elements (size is 0).",
              "xp": 3
            },
            {
              "id": "cpp-2-2-17",
              "type": "multiple-choice",
              "question": "Where are arrays stored in memory?",
              "options": [
                "Heap",
                "Stack",
                "Cache",
                "Register"
              ],
              "correct": 1,
              "explanation": "Arrays are stored on the stack by default, while vectors store their data on the heap (dynamic allocation).",
              "xp": 3
            },
            {
              "id": "cpp-2-2-18",
              "type": "code",
              "question": "Declare an array of 5 integers initialized to 0 and print all elements.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    // Declare and initialize array here\n    \n    // Print all elements using a loop\n    \n    return 0;\n}\n",
              "expectedOutput": "0 0 0 0 0",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "int arr[5] = {0}; then for (int i = 0; i < 5; i++) std::cout << arr[i] << \" \";",
              "xp": 10
            },
            {
              "id": "cpp-2-2-19",
              "type": "code",
              "question": "Create a vector, add numbers 1, 2, 3 using push_back, then print all elements.",
              "codeTemplate": "#include <iostream>\n#include <vector>\n\nint main() {\n    // Create vector\n    \n    // Add elements\n    \n    // Print all elements\n    \n    return 0;\n}\n",
              "expectedOutput": "1 2 3",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "std::vector<int> v; v.push_back(1); v.push_back(2); v.push_back(3); for (int x : v) std::cout << x << \" \";",
              "xp": 10
            },
            {
              "id": "cpp-2-2-20",
              "type": "code",
              "question": "Find and print the sum of array elements {1, 2, 3, 4, 5}.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int sum = 0;\n    // Calculate sum here\n    \n    std::cout << sum << std::endl;\n    return 0;\n}\n",
              "expectedOutput": "15",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "for (int i = 0; i < 5; i++) sum += arr[i];",
              "xp": 10
            }
          ]
        },
        {
          "id": "2-3",
          "title": "Strings and String Manipulation",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Strings and String Manipulation in C++\n\nC++ provides `std::string` from the Standard Template Library for working with text.\n\n## Creating Strings\n\n**Include the string header:**\n```cpp\n#include <string>\n```\n\n**Different ways to create strings:**\n```cpp\nstd::string s1 = \"Hello\";                    // Direct initialization\nstd::string s2(\"World\");                     // Constructor\nstd::string s3(5, 'a');                      // \"aaaaa\" (5 'a' characters)\nstd::string s4 = s1 + \" \" + s2;              // \"Hello World\" (concatenation)\n```\n\n## String Operations\n\n### Length and Size\n\n```cpp\nstd::string s = \"Hello\";\nstd::cout << s.length();  // Output: 5\nstd::cout << s.size();    // Output: 5 (same as length())\n```\n\n### Concatenation\n\n```cpp\nstd::string s1 = \"Hello\";\nstd::string s2 = \"World\";\nstd::string s3 = s1 + \" \" + s2;  // \"Hello World\"\n```\n\n### Accessing Characters\n\n```cpp\nstd::string s = \"Hello\";\nstd::cout << s[0];     // Output: H (first character)\nstd::cout << s[4];     // Output: o (last character)\ns[0] = 'J';            // Change: \"Jello\"\nstd::cout << s.at(0);  // Output: J (with bounds checking)\n```\n\n### Substring\n\nExtract a portion of the string:\n```cpp\nstd::string s = \"Hello World\";\nstd::string sub = s.substr(0, 5);  // \"Hello\" (start at 0, length 5)\nstd::string sub2 = s.substr(6);    // \"World\" (from 6 to end)\n```\n\n### Finding Characters and Substrings\n\n```cpp\nstd::string s = \"Hello World\";\n\n// Find position of substring\nint pos = s.find(\"World\");          // Returns: 6\nint pos2 = s.find(\"xyz\");           // Returns: -1 (not found)\n\n// Check if found\nif (s.find(\"World\") != std::string::npos) {\n    std::cout << \"Found!\";\n}\n```\n\n**Note:** `std::string::npos` is a special value returned when find() doesn't find the substring.\n\n### Comparison\n\n```cpp\nstd::string s1 = \"hello\";\nstd::string s2 = \"hello\";\nstd::string s3 = \"Hello\";\n\nif (s1 == s2) {\n    std::cout << \"Equal\";  // Output: Equal\n}\n```\n\n### Modification\n\n```cpp\nstd::string s = \"Hello World\";\n\n// Replace part of string\ns.replace(6, 5, \"C++\");  // \"Hello C++\"\n\n// Erase characters\ns.erase(5);  // Erase from index 5 to end: \"Hello\"\n\n// Add character to end\ns.push_back('!');  // \"Hello!\"\n```\n\n## Useful String Methods\n\n```cpp\ns.empty()              // True if string is empty\ns.clear()              // Remove all characters\ns.front()              // First character\ns.back()               // Last character\ns.append(str)          // Add string to end\ns.find(str, pos)       // Find substring starting at pos\ns.rfind(str)           // Find from right (last occurrence)\n```",
          "questions": [
            {
              "id": "cpp-2-3-1",
              "type": "typing",
              "question": "What header do you need to use std::string?",
              "correctAnswer": [
                "<string>"
              ],
              "explanation": "You must include #include <string> to use std::string from the C++ Standard Library.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-2",
              "type": "typing",
              "question": "What method returns the length of a string?",
              "correctAnswer": [
                "length()",
                "size()"
              ],
              "explanation": "Both length() and size() return the number of characters in the string. They are equivalent.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-3",
              "type": "typing",
              "question": "How do you concatenate two strings?",
              "correctAnswer": [
                "+",
                "plus operator"
              ],
              "explanation": "Use the + operator to concatenate strings: s1 + s2 combines them into a new string.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-4",
              "type": "typing",
              "question": "What method extracts a substring?",
              "correctAnswer": [
                "substr()",
                "substr"
              ],
              "explanation": "substr(start, length) extracts a substring starting at the given position with the specified length.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-5",
              "type": "typing",
              "question": "What does find() return if the substring is not found?",
              "correctAnswer": [
                "npos",
                "std::string::npos",
                "-1"
              ],
              "explanation": "find() returns std::string::npos (which equals -1) when the substring is not found.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-6",
              "type": "typing",
              "question": "What method adds a single character to the end of a string?",
              "correctAnswer": [
                "push_back()",
                "push_back"
              ],
              "explanation": "push_back() adds a single character to the end of the string, increasing its length by 1.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-7",
              "type": "typing",
              "question": "What method removes all characters from a string?",
              "correctAnswer": [
                "clear()",
                "clear"
              ],
              "explanation": "clear() removes all characters from the string, making it empty (length = 0).",
              "xp": 5
            },
            {
              "id": "cpp-2-3-8",
              "type": "typing",
              "question": "What is the difference between [] and at() for accessing characters?",
              "correctAnswer": [
                "at checks bounds",
                "at has bounds checking"
              ],
              "explanation": "at() provides bounds checking and throws an exception for invalid indices, while [] has no bounds checking (undefined behavior for invalid indices).",
              "xp": 4
            },
            {
              "id": "cpp-2-3-9",
              "type": "typing",
              "question": "What method replaces a portion of a string?",
              "correctAnswer": [
                "replace()",
                "replace"
              ],
              "explanation": "replace(pos, len, newStr) replaces len characters starting at position pos with newStr.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-10",
              "type": "typing",
              "question": "What method removes characters from a string?",
              "correctAnswer": [
                "erase()",
                "erase"
              ],
              "explanation": "erase(pos, len) removes len characters starting at position pos. If len is omitted, removes to end.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-11",
              "type": "typing",
              "question": "What header provides character classification functions like isdigit()?",
              "correctAnswer": [
                "<cctype>"
              ],
              "explanation": "#include <cctype> provides functions like isdigit(), isalpha(), isupper(), islower(), toupper(), tolower(), etc.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-12",
              "type": "typing",
              "question": "How do you convert a character to uppercase?",
              "correctAnswer": [
                "toupper()",
                "std::toupper()"
              ],
              "explanation": "Use toupper() from <cctype> to convert characters to uppercase.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-13",
              "type": "multiple-choice",
              "question": "Which string comparison is TRUE?",
              "options": [
                "\"hello\" == \"Hello\"",
                "\"hello\" != \"Hello\"",
                "\"Hello\" > \"hello\"",
                "\"abc\" == \"AB C\""
              ],
              "correct": 1,
              "explanation": "String comparison is case-sensitive. \"hello\" != \"Hello\" because lowercase and uppercase letters have different ASCII values.",
              "xp": 3
            },
            {
              "id": "cpp-2-3-14",
              "type": "multiple-choice",
              "question": "What is the result of \"Hello\".substr(1, 3)?",
              "options": [
                "\"ell\"",
                "\"Hel\"",
                "'llo'",
                "\"e\""
              ],
              "correct": 0,
              "explanation": "substr(1, 3) starts at index 1 (e) and takes 3 characters, resulting in \"ell\".",
              "xp": 3
            },
            {
              "id": "cpp-2-3-15",
              "type": "multiple-choice",
              "question": "What is the index of the first character in a string?",
              "options": [
                "1",
                "0",
                "-1",
                "length-1"
              ],
              "correct": 1,
              "explanation": "Strings use zero-based indexing. The first character is at index 0.",
              "xp": 3
            },
            {
              "id": "cpp-2-3-16",
              "type": "multiple-choice",
              "question": "Which method checks if a string is empty?",
              "options": [
                "length() == 0",
                "isEmpty()",
                "empty()",
                "size() == 0"
              ],
              "correct": 2,
              "explanation": "The empty() method returns true if the string has no characters. Other methods work too but empty() is the standard approach.",
              "xp": 3
            },
            {
              "id": "cpp-2-3-17",
              "type": "multiple-choice",
              "question": "What does rfind() do compared to find()?",
              "options": [
                "Finds from the right (last occurrence)",
                "Finds from the left (first occurrence)",
                "Finds only one character",
                "Finds digits only"
              ],
              "correct": 0,
              "explanation": "rfind() searches from the end of the string and returns the position of the last occurrence of the substring.",
              "xp": 3
            },
            {
              "id": "cpp-2-3-18",
              "type": "code",
              "question": "Create a string \"Hello World\" and print its length.",
              "codeTemplate": "#include <iostream>\n#include <string>\n\nint main() {\n    // Create string and print length\n    \n    return 0;\n}\n",
              "expectedOutput": "11",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "std::string s = \"Hello World\"; std::cout << s.length();",
              "xp": 10
            },
            {
              "id": "cpp-2-3-19",
              "type": "code",
              "question": "Convert string \"hello\" to uppercase and print it.",
              "codeTemplate": "#include <iostream>\n#include <string>\n#include <cctype>\n\nint main() {\n    std::string s = \"hello\";\n    // Convert to uppercase and print\n    \n    return 0;\n}\n",
              "expectedOutput": "HELLO",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "for (char& c : s) c = std::toupper(c); std::cout << s;",
              "xp": 10
            },
            {
              "id": "cpp-2-3-20",
              "type": "code",
              "question": "Check if \"cat\" is in \"concatenation\" and print found or not found.",
              "codeTemplate": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string s = \"concatenation\";\n    // Check if \"cat\" is in s\n    \n    return 0;\n}\n",
              "expectedOutput": "found",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "if (s.find(\"cat\") != std::string::npos) std::cout << \"found\"; else std::cout << \"not found\";",
              "xp": 10
            }
          ]
        },
        {
          "id": "2-4",
          "title": "References and Pointers",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# References and Pointers in C++\n\nReferences and pointers are powerful features that allow you to work with memory addresses and pass variables by reference.\n\n## References\n\nA reference is an **alias** for an existing variable. It refers to the same memory location.\n\n### Declaring References\n\n**Syntax:**\n```cpp\ntype& referenceName = variableName;\n```\n\n**Example:**\n```cpp\nint x = 10;\nint& ref = x;  // ref is now an alias for x\nref = 20;      // x is now 20 (both refer to same memory)\nstd::cout << x;  // Output: 20\n```\n\n### Reference Parameters in Functions\n\nPassing by reference allows functions to modify the original variable:\n\n```cpp\nvoid increment(int& num) {\n    num++;  // Modifies the original variable\n}\n\nint main() {\n    int x = 5;\n    increment(x);\n    std::cout << x;  // Output: 6\n}\n```\n\n### Reference Rules\n\n⚠️ **Important:**\n- References **must** be initialized when declared\n- References **cannot** be reassigned\n- References cannot be null\n- References are essentially const pointers\n\n```cpp\nint x = 5;\nint y = 10;\nint& ref = x;\nref = y;     // This assigns y's value to x, doesn't reassign ref\n// ref still refers to x, x now equals 10\n```\n\n## Pointers\n\nA pointer is a variable that **stores a memory address**.\n\n### Declaring Pointers\n\n**Syntax:**\n```cpp\ntype* pointerName;\n```\n\n**Example:**\n```cpp\nint x = 10;\nint* ptr = &x;  // ptr stores the address of x\n```\n\n### Address-Of Operator (&)\n\nThe `&` operator gets the address of a variable:\n```cpp\nint x = 10;\nstd::cout << &x;  // Prints memory address: e.g., 0x7fff5fbff8ac\nint* ptr = &x;    // ptr now holds that address\n```\n\n### Dereference Operator (*)\n\nThe `*` operator accesses the value at the address stored in a pointer:\n```cpp\nint x = 10;\nint* ptr = &x;\nstd::cout << *ptr;  // Output: 10 (the value at the address)\n*ptr = 20;          // x is now 20 (modify through pointer)\nstd::cout << x;     // Output: 20\n```\n\n### Null Pointers\n\nA pointer that doesn't point to any valid memory is a **null pointer**:\n\n```cpp\nint* ptr = nullptr;  // C++11 style (preferred)\nint* ptr2 = NULL;    // Old C style (not recommended)\n\nif (ptr == nullptr) {\n    std::cout << \"Pointer is null\";\n}\n```\n\n**Warning:** Dereferencing a null pointer causes undefined behavior (crash).\n\n### Pointer Parameters in Functions\n\nPassing by pointer is another way to modify the original variable:\n\n```cpp\nvoid increment(int* num) {\n    (*num)++;  // Dereference and increment\n}\n\nint main() {\n    int x = 5;\n    increment(&x);  // Pass address of x\n    std::cout << x;  // Output: 6\n}\n```\n\n### Pointer Arithmetic\n\nYou can perform arithmetic on pointers:\n\n```cpp\nint arr[] = {10, 20, 30, 40, 50};\nint* ptr = arr;     // ptr points to arr[0]\n\nptr++;              // ptr now points to arr[1]\nstd::cout << *ptr;  // Output: 20\n\nptr = ptr + 2;      // ptr now points to arr[3]\nstd::cout << *ptr;  // Output: 40\n```\n\n**Note:** Pointer arithmetic moves by the size of the type (not bytes).\n\n### Pointers and Arrays\n\nArray names act like pointers to the first element:\n\n```cpp\nint arr[] = {10, 20, 30};\nint* ptr = arr;     // Same as &arr[0]\n\nstd::cout << arr[0];    // Output: 10\nstd::cout << *arr;      // Output: 10 (same)\nstd::cout << *(ptr+1);  // Output: 20 (same as arr[1])\n```\n\n## References vs Pointers\n\n| Feature | References | Pointers |\n|---------|-----------|----------|\n| Must be initialized | Yes | No |\n| Can be null | No | Yes (nullptr) |\n| Can be reassigned | No | Yes |\n| Syntax | `type&` | `type*` |\n| Use for | Pass by reference | Dynamic memory, algorithms |\n\n## Dynamic Memory Allocation\n\n### new and delete Operators\n\nAllocate memory on the heap:\n\n```cpp\nint* ptr = new int;    // Allocate single int\n*ptr = 42;\nstd::cout << *ptr;     // Output: 42\ndelete ptr;            // Free memory\n\nint* arr = new int[5]; // Allocate array of 5 ints\narr[0] = 1;\narr[1] = 2;\ndelete[] arr;          // Free array memory (use delete[])\n```\n\n**Warning:** Always pair `new` with `delete` and `new[]` with `delete[]`. Forgetting causes memory leaks!\n\n### Memory Management Rules\n\n1. Every `new` needs a `delete`\n2. Delete before reassigning (or you leak memory)\n3. Delete only once (double delete = crash)\n4. Don't delete stack variables\n5. Use `delete[]` for arrays\n\n```cpp\n// WRONG - Memory leak\nint* ptr = new int;\nptr = new int;  // Lost the first allocation!\n\n// CORRECT\nint* ptr = new int;\ndelete ptr;\nptr = new int;\ndelete ptr;\n```",
          "questions": [
            {
              "id": "cpp-2-4-1",
              "type": "typing",
              "question": "What symbol declares a reference?",
              "correctAnswer": [
                "&",
                "ampersand"
              ],
              "explanation": "The & symbol after the type declares a reference. For example: int& ref = x;",
              "xp": 5
            },
            {
              "id": "cpp-2-4-2",
              "type": "typing",
              "question": "What symbol gets the address of a variable?",
              "correctAnswer": [
                "&",
                "address-of operator"
              ],
              "explanation": "The & operator (address-of) gets the memory address of a variable. For example: &x returns the address of x.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-3",
              "type": "typing",
              "question": "What symbol declares a pointer?",
              "correctAnswer": [
                "*",
                "asterisk"
              ],
              "explanation": "The * symbol after the type declares a pointer. For example: int* ptr;",
              "xp": 5
            },
            {
              "id": "cpp-2-4-4",
              "type": "typing",
              "question": "What operator dereferences a pointer?",
              "correctAnswer": [
                "*",
                "dereference operator"
              ],
              "explanation": "The * operator dereferences a pointer to access the value at the stored address. For example: *ptr accesses the value.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-5",
              "type": "typing",
              "question": "What keyword represents a null pointer in modern C++?",
              "correctAnswer": [
                "nullptr"
              ],
              "explanation": "nullptr is the C++11 keyword for null pointers. It is type-safe and preferred over NULL or 0.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-6",
              "type": "typing",
              "question": "Can references be reassigned?",
              "correctAnswer": [
                "no",
                "No"
              ],
              "explanation": "References cannot be reassigned. Once initialized, they always refer to the same variable.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-7",
              "type": "typing",
              "question": "Can pointers be null?",
              "correctAnswer": [
                "yes",
                "Yes"
              ],
              "explanation": "Yes, pointers can be null (nullptr) to indicate they don't point to any valid memory. References cannot be null.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-8",
              "type": "typing",
              "question": "What does new operator do?",
              "correctAnswer": [
                "allocates memory",
                "allocates dynamic memory"
              ],
              "explanation": "The new operator allocates memory on the heap dynamically. It returns a pointer to the allocated memory.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-9",
              "type": "typing",
              "question": "What does delete operator do?",
              "correctAnswer": [
                "frees memory",
                "deallocates memory",
                "frees allocated memory"
              ],
              "explanation": "The delete operator frees memory that was allocated with new. It returns the memory to the system.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-10",
              "type": "typing",
              "question": "What is a memory leak?",
              "correctAnswer": [
                "unfreed memory",
                "allocated memory not freed",
                "memory not deleted"
              ],
              "explanation": "A memory leak occurs when allocated memory is not freed (deleted), causing the program to use increasing amounts of memory over time.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-11",
              "type": "typing",
              "question": "What is a dangling pointer?",
              "correctAnswer": [
                "pointer to freed memory",
                "pointer to invalid memory"
              ],
              "explanation": "A dangling pointer points to memory that has been freed. Using it causes undefined behavior.",
              "xp": 4
            },
            {
              "id": "cpp-2-4-12",
              "type": "typing",
              "question": "What does ptr++ do for an int pointer?",
              "correctAnswer": [
                "points to next int",
                "moves to next element"
              ],
              "explanation": "ptr++ advances the pointer to the next int in memory (not just one byte, but sizeof(int) bytes).",
              "xp": 5
            },
            {
              "id": "cpp-2-4-13",
              "type": "multiple-choice",
              "question": "Which is TRUE about references?",
              "options": [
                "References must be initialized when declared",
                "References can be null",
                "References can be reassigned",
                "References use more memory than pointers"
              ],
              "correct": 0,
              "explanation": "References MUST be initialized when declared. They cannot be null, cannot be reassigned, and typically use the same memory as pointers (implementation detail).",
              "xp": 3
            },
            {
              "id": "cpp-2-4-14",
              "type": "multiple-choice",
              "question": "What happens if you dereference a null pointer?",
              "options": [
                "Nothing",
                "Returns 0",
                "Undefined behavior (crash)",
                "Compile error"
              ],
              "correct": 2,
              "explanation": "Dereferencing a null pointer causes undefined behavior, which usually results in a crash (segmentation fault).",
              "xp": 3
            },
            {
              "id": "cpp-2-4-15",
              "type": "multiple-choice",
              "question": "Which operator should you use to delete an array?",
              "options": [
                "delete",
                "delete[]",
                "free",
                "remove"
              ],
              "correct": 1,
              "explanation": "Use delete[] (with brackets) to free arrays allocated with new[]. Using plain delete for arrays is undefined behavior.",
              "xp": 3
            },
            {
              "id": "cpp-2-4-16",
              "type": "multiple-choice",
              "question": "What is the difference between pass by value and pass by reference?",
              "options": [
                "Reference creates copy, value modifies original",
                "Value creates copy, reference modifies original",
                "Both modify original",
                "Both create copies"
              ],
              "correct": 1,
              "explanation": "Pass by value creates a copy (original unchanged), pass by reference allows modification of the original variable.",
              "xp": 3
            },
            {
              "id": "cpp-2-4-17",
              "type": "multiple-choice",
              "question": "What does &x return?",
              "options": [
                "The value of x",
                "The address of x",
                "A pointer to x",
                "A reference to x"
              ],
              "correct": 1,
              "explanation": "&x returns the memory address of variable x. This address can be stored in a pointer.",
              "xp": 3
            },
            {
              "id": "cpp-2-4-18",
              "type": "code",
              "question": "Create a reference to int x, set x to 10, modify through reference to 20, print x.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 10;\n    // Create reference and modify through it\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
              "expectedOutput": "20",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "int& ref = x; ref = 20;",
              "xp": 10
            },
            {
              "id": "cpp-2-4-19",
              "type": "code",
              "question": "Create pointer to x, use dereference to double the value, print result.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int x = 5;\n    // Create pointer and use dereference to double x\n    \n    std::cout << x << std::endl;\n    return 0;\n}\n",
              "expectedOutput": "10",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "int* ptr = &x; *ptr = *ptr * 2;",
              "xp": 10
            },
            {
              "id": "cpp-2-4-20",
              "type": "code",
              "question": "Allocate int dynamically with new, set to 42, print, then delete.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    // Allocate int dynamically, set to 42, print, delete\n    \n    return 0;\n}\n",
              "expectedOutput": "42",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "int* ptr = new int(42); std::cout << *ptr; delete ptr;",
              "xp": 10
            }
          ]
        },
        {
          "id": "2-5",
          "title": "Basic Algorithms",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Basic Algorithms in C++\n\nAlgorithms are step-by-step procedures to solve problems efficiently.\n\n## Linear Search\n\nSearch through elements one by one until finding the target.\n\n### Algorithm\n\n```cpp\nint linearSearch(int arr[], int size, int target) {\n    for (int i = 0; i < size; i++) {\n        if (arr[i] == target) {\n            return i;  // Found at index i\n        }\n    }\n    return -1;  // Not found\n}\n```\n\n### Example\n\n```cpp\nint arr[] = {5, 3, 8, 1, 9};\nint index = linearSearch(arr, 5, 8);  // Returns: 2\n```\n\n**Time Complexity:** O(n) - may need to check every element\n\n## Binary Search\n\nSearch in a **sorted** array by repeatedly dividing in half.\n\n### Algorithm\n\n```cpp\nint binarySearch(int arr[], int size, int target) {\n    int left = 0;\n    int right = size - 1;\n    \n    while (left <= right) {\n        int mid = (left + right) / 2;\n        \n        if (arr[mid] == target) {\n            return mid;  // Found\n        } else if (arr[mid] < target) {\n            left = mid + 1;  // Search right half\n        } else {\n            right = mid - 1;  // Search left half\n        }\n    }\n    return -1;  // Not found\n}\n```\n\n### Example\n\n```cpp\nint arr[] = {1, 3, 5, 7, 9};  // Must be sorted!\nint index = binarySearch(arr, 5, 7);  // Returns: 3\n```\n\n**Time Complexity:** O(log n) - much faster than linear search for large arrays\n\n## Sorting Algorithms\n\n### Bubble Sort\n\nRepeatedly swap adjacent elements if they're in wrong order.\n\n```cpp\nvoid bubbleSort(int arr[], int size) {\n    for (int i = 0; i < size - 1; i++) {\n        for (int j = 0; j < size - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                // Swap\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n}\n```\n\n**Time Complexity:** O(n²) - slow for large arrays\n\n### Selection Sort\n\nFind minimum and move to beginning, repeat for remaining.\n\n```cpp\nvoid selectionSort(int arr[], int size) {\n    for (int i = 0; i < size - 1; i++) {\n        int minIndex = i;\n        for (int j = i + 1; j < size; j++) {\n            if (arr[j] < arr[minIndex]) {\n                minIndex = j;\n            }\n        }\n        // Swap\n        int temp = arr[i];\n        arr[i] = arr[minIndex];\n        arr[minIndex] = temp;\n    }\n}\n```\n\n**Time Complexity:** O(n²) - similar to bubble sort\n\n### Using std::sort\n\nIn practice, use the STL sort (much faster):\n\n```cpp\n#include <algorithm>\n\nint arr[] = {5, 2, 8, 1, 9};\nstd::sort(arr, arr + 5);  // Sorts entire array\n// arr = {1, 2, 5, 8, 9}\n```\n\n**Time Complexity:** O(n log n) - fast!\n\n## Finding Minimum/Maximum\n\n```cpp\nint findMin(int arr[], int size) {\n    int min = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] < min) {\n            min = arr[i];\n        }\n    }\n    return min;\n}\n\nint findMax(int arr[], int size) {\n    int max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    return max;\n}\n```\n\n## Recursion\n\nA function that calls itself. Requires a **base case** to stop.\n\n### Factorial\n\n```cpp\nint factorial(int n) {\n    if (n <= 1) {  // Base case\n        return 1;\n    }\n    return n * factorial(n - 1);  // Recursive case\n}\n```\n\n**Example:** factorial(5) = 5 × 4 × 3 × 2 × 1 = 120\n\n### Fibonacci\n\n```cpp\nint fibonacci(int n) {\n    if (n <= 1) {  // Base case\n        return n;\n    }\n    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case\n}\n```\n\n**Example:** fibonacci(6) = 8\n\n**⚠️ Warning:** This is inefficient (exponential time). Use iteration or memoization in practice.\n\n## Common Patterns\n\n### Sum Array\n\n```cpp\nint sumArray(int arr[], int size) {\n    int sum = 0;\n    for (int i = 0; i < size; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}\n```\n\n### Count Occurrences\n\n```cpp\nint countOccurrences(int arr[], int size, int target) {\n    int count = 0;\n    for (int i = 0; i < size; i++) {\n        if (arr[i] == target) {\n            count++;\n        }\n    }\n    return count;\n}\n```\n\n### Reverse Array\n\n```cpp\nvoid reverseArray(int arr[], int size) {\n    int left = 0;\n    int right = size - 1;\n    while (left < right) {\n        // Swap\n        int temp = arr[left];\n        arr[left] = arr[right];\n        arr[right] = temp;\n        left++;\n        right--;\n    }\n}\n```\n\n## Algorithm Complexity\n\n| Algorithm | Time Complexity | Notes |\n|-----------|----------------|-------|\n| Linear Search | O(n) | Checks each element |\n| Binary Search | O(log n) | Requires sorted array |\n| Bubble Sort | O(n²) | Slow, educational |\n| Selection Sort | O(n²) | Slow, educational |\n| std::sort | O(n log n) | Fast, use in practice |\n| Linear Scan (min/max) | O(n) | Checks each element |\n| Simple Recursion | O(n) or O(2ⁿ) | Depends on algorithm |",
          "questions": [
            {
              "id": "cpp-2-5-1",
              "type": "typing",
              "question": "What is the time complexity of linear search?",
              "correctAnswer": [
                "O(n)",
                "n"
              ],
              "explanation": "Linear search has O(n) time complexity because it may need to check every element in the worst case.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-2",
              "type": "typing",
              "question": "What is a requirement for binary search?",
              "correctAnswer": [
                "sorted array",
                "array must be sorted"
              ],
              "explanation": "Binary search requires the array to be sorted in ascending order to work correctly.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-3",
              "type": "typing",
              "question": "What is the time complexity of binary search?",
              "correctAnswer": [
                "O(log n)",
                "log n"
              ],
              "explanation": "Binary search has O(log n) time complexity because it repeatedly halves the search space.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-4",
              "type": "typing",
              "question": "What is the time complexity of bubble sort?",
              "correctAnswer": [
                "O(n^2)",
                "O(n2)",
                "n squared"
              ],
              "explanation": "Bubble sort has O(n²) time complexity because of the nested loops comparing each pair of elements.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-5",
              "type": "typing",
              "question": "What is recursion?",
              "correctAnswer": [
                "function calls itself",
                "self-calling function"
              ],
              "explanation": "Recursion is when a function calls itself to solve a smaller instance of the problem.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-6",
              "type": "typing",
              "question": "What is a base case in recursion?",
              "correctAnswer": [
                "termination condition",
                "stops recursion",
                "exit condition"
              ],
              "explanation": "The base case is the condition that stops the recursion. Without it, you get infinite recursion.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-7",
              "type": "typing",
              "question": "What header provides std::sort?",
              "correctAnswer": [
                "<algorithm>"
              ],
              "explanation": "#include <algorithm> provides std::sort and many other useful algorithms.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-8",
              "type": "typing",
              "question": "What is the time complexity of std::sort?",
              "correctAnswer": [
                "O(n log n)",
                "n log n"
              ],
              "explanation": "std::sort has O(n log n) time complexity, making it much faster than bubble or selection sort.",
              "xp": 4
            },
            {
              "id": "cpp-2-5-9",
              "type": "typing",
              "question": "What does selection sort do?",
              "correctAnswer": [
                "finds minimum and moves to beginning",
                "selects smallest element"
              ],
              "explanation": "Selection sort finds the minimum element in the unsorted portion and moves it to the beginning.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-10",
              "type": "typing",
              "question": "What does bubble sort do?",
              "correctAnswer": [
                "swaps adjacent elements",
                "bubbles largest to end"
              ],
              "explanation": "Bubble sort repeatedly swaps adjacent elements if they're in wrong order, \"bubbling\" the largest to the end.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-11",
              "type": "typing",
              "question": "What is the factorial of 5?",
              "correctAnswer": [
                "120"
              ],
              "explanation": "5! = 5 × 4 × 3 × 2 × 1 = 120",
              "xp": 3
            },
            {
              "id": "cpp-2-5-12",
              "type": "typing",
              "question": "What is the 6th Fibonacci number?",
              "correctAnswer": [
                "8"
              ],
              "explanation": "Fibonacci: 0, 1, 1, 2, 3, 5, 8... The 6th number (index 6, starting from 0) is 8.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-13",
              "type": "multiple-choice",
              "question": "Which search algorithm is faster for large sorted arrays?",
              "options": [
                "Linear Search",
                "Binary Search",
                "Both are equal",
                "Neither works"
              ],
              "correct": 1,
              "explanation": "Binary Search (O(log n)) is much faster than Linear Search (O(n)) for large sorted arrays.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-14",
              "type": "multiple-choice",
              "question": "What happens without a base case in recursion?",
              "options": [
                "Works normally",
                "Returns 0",
                "Infinite recursion (stack overflow)",
                "Compilation error"
              ],
              "correct": 2,
              "explanation": "Without a base case, recursion never stops, causing infinite recursion and a stack overflow error.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-15",
              "type": "multiple-choice",
              "question": "Which sorting algorithm should you use in practice?",
              "options": [
                "Bubble Sort",
                "Selection Sort",
                "std::sort",
                "Write your own"
              ],
              "correct": 2,
              "explanation": "Use std::sort in practice. It is highly optimized, has O(n log n) complexity, and is much faster than bubble or selection sort.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-16",
              "type": "multiple-choice",
              "question": "What is the main disadvantage of the recursive Fibonacci algorithm?",
              "options": [
                "Too simple",
                "Exponential time complexity",
                "Doesn't work",
                "Too fast"
              ],
              "correct": 1,
              "explanation": "The recursive Fibonacci algorithm has exponential time complexity O(2ⁿ), making it very slow for larger numbers.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-17",
              "type": "multiple-choice",
              "question": "What does linear search return if not found?",
              "options": [
                "0",
                "-1",
                "null",
                "false"
              ],
              "correct": 1,
              "explanation": "Linear search returns -1 (or sometimes a special value) when the target is not found in the array.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-18",
              "type": "code",
              "question": "Find the minimum value in array {5, 2, 8, 1, 9} and print it.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int arr[] = {5, 2, 8, 1, 9};\n    int min = arr[0];\n    // Find minimum and print\n    \n    return 0;\n}\n",
              "expectedOutput": "1",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "for (int i = 1; i < 5; i++) { if (arr[i] < min) min = arr[i]; } std::cout << min;",
              "xp": 10
            },
            {
              "id": "cpp-2-5-19",
              "type": "code",
              "question": "Calculate the sum of array {1, 2, 3, 4, 5} and print it.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int sum = 0;\n    // Calculate sum and print\n    \n    return 0;\n}\n",
              "expectedOutput": "15",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "for (int i = 0; i < 5; i++) sum += arr[i]; std::cout << sum;",
              "xp": 10
            },
            {
              "id": "cpp-2-5-20",
              "type": "code",
              "question": "Sort array {5, 1, 4, 2, 3} using std::sort and print elements.",
              "codeTemplate": "#include <iostream>\n#include <algorithm>\n\nint main() {\n    int arr[] = {5, 1, 4, 2, 3};\n    // Sort and print\n    \n    return 0;\n}\n",
              "expectedOutput": "1 2 3 4 5",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "std::sort(arr, arr + 5); for (int i = 0; i < 5; i++) std::cout << arr[i] << \" \";",
              "xp": 10
            }
          ]
        },
        {
          "id": "2-6",
          "title": "Advanced Control Flow",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Advanced Control Flow in C++\n\nControl flow determines the order in which statements are executed.\n\n## Nested Loops\n\nA loop inside another loop. Each iteration of the outer loop triggers the entire inner loop.\n\n### Basic Nested Loop\n\n```cpp\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        std::cout << i << \",\" << j << \" \";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n// 0,0 0,1 0,2\n// 1,0 1,1 1,2\n// 2,0 2,1 2,2\n```\n\n### Printing Patterns\n\n**Right Triangle:**\n```cpp\nfor (int i = 1; i <= 5; i++) {\n    for (int j = 1; j <= i; j++) {\n        std::cout << \"*\";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n// *\n// **\n// ***\n// ****\n// *****\n```\n\n**Square:**\n```cpp\nfor (int i = 0; i < 4; i++) {\n    for (int j = 0; j < 4; j++) {\n        std::cout << \"*\";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n// ****\n// ****\n// ****\n// ****\n```\n\n**Pyramid:**\n```cpp\nint n = 5;\nfor (int i = 0; i < n; i++) {\n    // Print spaces\n    for (int j = 0; j < n - i - 1; j++) {\n        std::cout << \" \";\n    }\n    // Print stars\n    for (int k = 0; k < 2 * i + 1; k++) {\n        std::cout << \"*\";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n//     *\n//    ***\n//   *****\n//  *******\n// *********\n```\n\n### 2D Array Traversal\n\n```cpp\nint matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        std::cout << matrix[i][j] << \" \";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n// 1 2 3\n// 4 5 6\n// 7 8 9\n```\n\n## Switch Statement\n\nA cleaner alternative to multiple if-else statements for comparing against multiple values.\n\n### Basic Switch\n\n```cpp\nint grade = 85;\nchar letter;\n\nswitch (grade / 10) {\n    case 10:\n    case 9:\n        letter = 'A';\n        break;\n    case 8:\n        letter = 'B';\n        break;\n    case 7:\n        letter = 'C';\n        break;\n    case 6:\n        letter = 'D';\n        break;\n    default:\n        letter = 'F';\n}\n\nstd::cout << letter;  // Output: B\n```\n\n### Switch Rules\n\n1. **break** is crucial - without it, execution \"falls through\" to next case\n2. **default** handles cases not matched by any case\n3. Cases must be constant expressions (can't use variables)\n4. Works with integers, chars, and enums\n\n### Fall-Through\n\n```cpp\nint day = 6;\n\nswitch (day) {\n    case 1:\n        std::cout << \"Monday\" << std::endl;\n        break;\n    case 6:\n    case 7:  // Fall-through from case 6\n        std::cout << \"Weekend!\" << std::endl;\n        break;\n    default:\n        std::cout << \"Weekday\" << std::endl;\n}\n\n// Output: Weekend!\n```\n\n## goto Statement\n\nJumps to a labeled statement. Use sparingly - makes code hard to follow!\n\n### Basic goto\n\n```cpp\nint i = 0;\n\nstart:\nstd::cout << i << \" \";\ni++;\n\nif (i < 5) {\n    goto start;\n}\n\n// Output: 0 1 2 3 4\n```\n\n### goto for Error Handling\n\n```cpp\nFILE* file = fopen(\"data.txt\", \"r\");\n\nif (file == nullptr) {\n    goto error;  // Jump to error handling\n}\n\n// ... process file ...\n\nif (error_occurred) {\n    goto error;\n}\n\n// Normal cleanup\nfclose(file);\nreturn 0;\n\nerror:\n    if (file) fclose(file);\n    return -1;\n```\n\n**⚠️ Warning:** Avoid goto in most cases. Use loops, functions, or exceptions instead.\n\n## break and continue\n\n### break\n\nExits the innermost loop or switch immediately:\n\n```cpp\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) {\n        break;  // Exit loop\n    }\n    std::cout << i << \" \";\n}\n\n// Output: 0 1 2 3 4\n```\n\n**In nested loops, break only exits the innermost loop:**\n\n```cpp\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (j == 1) {\n            break;  // Only exits inner loop\n        }\n        std::cout << i << \",\" << j << \" \";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n// 0,0\n// 1,0\n// 2,0\n```\n\n### continue\n\nSkips the rest of the current iteration and starts the next:\n\n```cpp\nfor (int i = 0; i < 5; i++) {\n    if (i == 2) {\n        continue;  // Skip this iteration\n    }\n    std::cout << i << \" \";\n}\n\n// Output: 0 1 3 4\n```\n\n## Common Patterns\n\n### Checking Sorted Array\n\n```cpp\nbool isSorted(int arr[], int size) {\n    for (int i = 0; i < size - 1; i++) {\n        if (arr[i] > arr[i + 1]) {\n            return false;\n        }\n    }\n    return true;\n}\n```\n\n### Finding Primes\n\n```cpp\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\n// Print primes up to 50\nfor (int i = 2; i <= 50; i++) {\n    if (isPrime(i)) {\n        std::cout << i << \" \";\n    }\n}\n```\n\n### Matrix Transpose\n\n```cpp\nint matrix[2][3] = {\n    {1, 2, 3},\n    {4, 5, 6}\n};\n\n// Transpose to 3x2\nint transpose[3][2];\nfor (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 3; j++) {\n        transpose[j][i] = matrix[i][j];\n    }\n}\n```",
          "questions": [
            {
              "id": "cpp-2-6-1",
              "type": "typing",
              "question": "What is a nested loop?",
              "correctAnswer": [
                "loop inside another loop",
                "loop within loop"
              ],
              "explanation": "A nested loop is a loop inside another loop. The inner loop runs completely for each iteration of the outer loop.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-2",
              "type": "typing",
              "question": "What statement exits a switch case?",
              "correctAnswer": [
                "break"
              ],
              "explanation": "The break statement exits the switch case. Without it, execution falls through to the next case.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-3",
              "type": "typing",
              "question": "What is the default case in switch?",
              "correctAnswer": [
                "when no case matches",
                "matches nothing else"
              ],
              "explanation": "The default case executes when no other case matches. It's optional but recommended for error handling.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-4",
              "type": "typing",
              "question": "What does goto do?",
              "correctAnswer": [
                "jumps to labeled statement",
                "jumps to label"
              ],
              "explanation": "goto jumps execution to a labeled statement in the same function. It should be used sparingly.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-5",
              "type": "typing",
              "question": "What does break do in a loop?",
              "correctAnswer": [
                "exits loop",
                "terminates loop"
              ],
              "explanation": "break immediately exits the innermost loop or switch statement, transferring control to after the loop.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-6",
              "type": "typing",
              "question": "What does continue do in a loop?",
              "correctAnswer": [
                "skips to next iteration",
                "skips rest of iteration"
              ],
              "explanation": "continue skips the rest of the current iteration and immediately starts the next iteration of the loop.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-7",
              "type": "typing",
              "question": "What happens without break in switch?",
              "correctAnswer": [
                "falls through",
                "executes next case"
              ],
              "explanation": "Without break, execution \"falls through\" to the next case, executing it as well. This can be intentional or a bug.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-8",
              "type": "typing",
              "question": "How do you access 2D array elements?",
              "correctAnswer": [
                "arr[row][col]",
                "two indices"
              ],
              "explanation": "2D arrays are accessed with two indices: array[row][column]. The first index is the row, second is the column.",
              "xp": 4
            },
            {
              "id": "cpp-2-6-9",
              "type": "typing",
              "question": "What is a label?",
              "correctAnswer": [
                "identifier followed by colon",
                "name:"
              ],
              "explanation": "A label is an identifier followed by a colon (e.g., start:). It marks a location that goto can jump to.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-10",
              "type": "typing",
              "question": "Can you nest more than 2 loops?",
              "correctAnswer": [
                "yes",
                "Yes"
              ],
              "explanation": "Yes, you can nest any number of loops. However, deep nesting can make code hard to read.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-11",
              "type": "typing",
              "question": "What does break do in nested loops?",
              "correctAnswer": [
                "exits innermost loop",
                "only inner loop"
              ],
              "explanation": "In nested loops, break only exits the innermost loop, not all loops.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-12",
              "type": "typing",
              "question": "Why is goto generally discouraged?",
              "correctAnswer": [
                "hard to follow",
                "spaghetti code",
                "hard to maintain"
              ],
              "explanation": "goto makes code hard to follow and maintain (spaghetti code). Use structured programming constructs instead.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-13",
              "type": "multiple-choice",
              "question": "Which is TRUE about switch statements?",
              "options": [
                "Case values can be variables",
                "Cases need break to prevent fall-through",
                "Multiple values can be in one case",
                "default is required"
              ],
              "correct": 1,
              "explanation": "Cases need break to prevent fall-through. Case values must be constant expressions (not variables), each case has one value, and default is optional.",
              "xp": 3
            },
            {
              "id": "cpp-2-6-14",
              "type": "multiple-choice",
              "question": "How many times does the inner loop run for outer(3) and inner(4)?",
              "options": [
                "3 times",
                "4 times",
                "7 times",
                "12 times"
              ],
              "correct": 3,
              "explanation": "The inner loop runs 4 times for each of the 3 outer iterations, so 3 × 4 = 12 times total.",
              "xp": 3
            },
            {
              "id": "cpp-2-6-15",
              "type": "multiple-choice",
              "question": "What types can switch use?",
              "options": [
                "Strings only",
                "Integers and chars only",
                "Any type",
                "Floats only"
              ],
              "correct": 1,
              "explanation": "Switch works with integers (including bool, char, short, int, long) and enums. It does NOT work with strings or floats.",
              "xp": 3
            },
            {
              "id": "cpp-2-6-16",
              "type": "multiple-choice",
              "question": "What is the output after continue executes?",
              "options": [
                "Loop exits",
                "Next iteration starts",
                "Program ends",
                "Nothing happens"
              ],
              "correct": 1,
              "explanation": "After continue executes, the loop skips to the next iteration immediately, not executing any code below continue in the current iteration.",
              "xp": 3
            },
            {
              "id": "cpp-2-6-17",
              "type": "multiple-choice",
              "question": "Which is a good use case for goto?",
              "options": [
                "Replacing loops",
                "Jumping out of deeply nested loops",
                "Normal program flow",
                "Skip code sections"
              ],
              "correct": 1,
              "explanation": "goto can be useful for jumping out of deeply nested loops (like error handling). Avoid using it to replace loops or for normal flow.",
              "xp": 3
            },
            {
              "id": "cpp-2-6-18",
              "type": "code",
              "question": "Print a right triangle pattern with 5 rows using * characters.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    // Print right triangle pattern (5 rows)\n    \n    return 0;\n}\n",
              "expectedOutput": "*\n**\n***\n****\n*****",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "for (int i = 1; i <= 5; i++) { for (int j = 1; j <= i; j++) std::cout << \"*\"; std::cout << std::endl; }",
              "xp": 10
            },
            {
              "id": "cpp-2-6-19",
              "type": "code",
              "question": "Use switch to print day name for day=3 (0=Sun, 1=Mon, 2=Tue, 3=Wed).",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int day = 3;\n    // Use switch to print day name\n    \n    return 0;\n}\n",
              "expectedOutput": "Wednesday",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "switch (day) { case 0: std::cout << \"Sunday\"; break; case 1: std::cout << \"Monday\"; break; case 2: std::cout << \"Tuesday\"; break; case 3: std::cout << \"Wednesday\"; break; }",
              "xp": 10
            },
            {
              "id": "cpp-2-6-20",
              "type": "code",
              "question": "Sum all elements of 2x3 matrix {1,2,3,4,5,6} using nested loops.",
              "codeTemplate": "#include <iostream>\n\nint main() {\n    int matrix[2][3] = {{1,2,3},{4,5,6}};\n    int sum = 0;\n    // Calculate sum using nested loops\n    \n    std::cout << sum << std::endl;\n    return 0;\n}\n",
              "expectedOutput": "21",
              "language": "cpp",
              "localLLMGrade": true,
              "explanation": "for (int i = 0; i < 2; i++) { for (int j = 0; j < 3; j++) { sum += matrix[i][j]; } }",
              "xp": 10
            }
          ]
        }
      ]
    },
    {
      "unitId": "3",
      "unitName": "3. Object-Oriented Programming",
      "lessons": [
        {
          "id": 13,
          "title": "Classes and Objects",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 14,
          "title": "Methods and Access Control",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 15,
          "title": "Inheritance",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 16,
          "title": "Polymorphism",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 17,
          "title": "Operator Overloading",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": []
        },
        {
          "id": 18,
          "title": "Advanced OOP Concepts",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
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
          "title": "Noneptr and Null Safety",
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
 
