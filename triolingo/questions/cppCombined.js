// C++ - All Topics

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
          "id": 7,
          "title": "Functions and Scope",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Functions and Scope\n\nFunctions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.\n\n## Function Declaration and Definition\n\n```cpp\n// Declaration\nint add(int a, int b);\n\n// Definition\nint add(int a, int b) {\n    return a + b;\n}\n```\n\n## Parameters: Pass by Value vs Reference\n\n```cpp\nvoid byValue(int x) {\n    x = 10;  // Doesn't affect original\n}\n\nvoid byReference(int& x) {\n    x = 10;  // Modifies original\n}\n```\n\n## Default Parameters\n\n```cpp\nint greet(string name = \"World\") {\n    cout << \"Hello \" << name << endl;\n}\n```\n\n## Variable Scope\n\n- **Local:** Variables inside functions\n- **Global:** Variables outside all functions\n- **Block:** Variables inside any {} block",
          "questions": [
            {
              "id": "cpp-2-1-1",
              "type": "typing",
              "question": "What is a function?",
              "correctAnswer": [
                "reusable block of code",
                "named block of code"
              ],
              "explanation": "A function is a reusable block of code that performs a specific task.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-2",
              "type": "code",
              "question": "Write a function called 'square' that takes an int and returns its square.",
              "correctAnswer": [
                "int square(int x) { return x * x; }",
                "int square(int x) {\\n    return x * x;\\n}"
              ],
              "explanation": "A function with return type int, parameter int x, that returns x multiplied by itself.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-3",
              "type": "multiple",
              "question": "What is the difference between pass by value and pass by reference?",
              "options": [
                "Pass by value copies the data",
                "Pass by reference works with original data",
                "Both A and B",
                "Neither"
              ],
              "correctAnswer": [
                2
              ],
              "explanation": "Pass by value creates a copy, pass by reference works directly with the original data.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-4",
              "type": "code",
              "question": "Write a function that takes a string by reference and appends '!' to it.",
              "correctAnswer": [
                "void appendExclamation(string& s) { s += \"!\"; }",
                "void appendExclamation(string& s) {\\n    s += \"!\";\\n}"
              ],
              "explanation": "Use reference parameter to modify the original string.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-5",
              "type": "code",
              "question": "Create a function with a default parameter for name='Anonymous'.",
              "correctAnswer": [
                "void greet(string name = \"Anonymous\") { cout << name << endl; }"
              ],
              "explanation": "Default parameters are specified in function declaration with assignment operator.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-6",
              "type": "multiple",
              "question": "What happens to a local variable after the function returns?",
              "options": [
                "It's destroyed",
                "It becomes global",
                "It stays in memory",
                "None of the above"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Local variables are destroyed when the function returns.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-7",
              "type": "code",
              "question": "Write a function that returns the maximum of two integers.",
              "correctAnswer": [
                "int max(int a, int b) { return a > b ? a : b; }",
                "int max(int a, int b) {\\n    if (a > b) return a;\\n    return b;\\n}"
              ],
              "explanation": "Use conditional operator or if statement to return the larger value.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-8",
              "type": "typing",
              "question": "What is function overloading?",
              "correctAnswer": [
                "multiple functions with same name but different parameters",
                "same name different signatures"
              ],
              "explanation": "Function overloading is having multiple functions with the same name but different parameters.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-9",
              "type": "code",
              "question": "Create overloaded functions for print() that print int and string.",
              "correctAnswer": [
                "void print(int i) { cout << i; }\\nvoid print(string s) { cout << s; }"
              ],
              "explanation": "Overloaded functions have same name but different parameter types.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-10",
              "type": "multiple",
              "question": "Can a function call itself?",
              "options": [
                "Yes, that's recursion",
                "No, causes error",
                "Only with special keyword",
                "No, infinite loop"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "A function can call itself - this is called recursion.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-11",
              "type": "code",
              "question": "Write a recursive function to calculate factorial of n.",
              "correctAnswer": [
                "int factorial(int n) {\\n    if (n <= 1) return 1;\\n    return n * factorial(n - 1);\\n}"
              ],
              "explanation": "Recursive function calls itself with smaller input until base case.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-12",
              "type": "multiple",
              "question": "What is a global variable?",
              "options": [
                "Variable declared outside all functions",
                "Variable in main",
                "Variable with global keyword",
                "Public variable"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Global variables are declared outside all functions and accessible anywhere.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-13",
              "type": "code",
              "question": "Create a function that uses a global variable counter.",
              "correctAnswer": [
                "int counter = 0;\\nvoid increment() { counter++; }"
              ],
              "explanation": "Global variables are accessible inside functions without being passed as parameters.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-14",
              "type": "typing",
              "question": "What is a function prototype?",
              "correctAnswer": [
                "declaration of a function before its definition",
                "function signature without body"
              ],
              "explanation": "A function prototype declares the function before it's defined.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-15",
              "type": "code",
              "question": "Write a function prototype and definition for a function that adds two doubles.",
              "correctAnswer": [
                "double add(double a, double b);\\ndouble add(double a, double b) {\\n    return a + b;\\n}"
              ],
              "explanation": "Prototype declares function, definition provides implementation.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-16",
              "type": "multiple",
              "question": "What is void return type?",
              "options": [
                "Function returns nothing",
                "Function returns any type",
                "Function returns void type",
                "Error"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "void means the function returns nothing.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-17",
              "type": "code",
              "question": "Create a void function that prints a message multiple times.",
              "correctAnswer": [
                "void printMessage(string msg, int times) {\\n    for (int i = 0; i < times; i++)\\n        cout << msg << endl;\\n}"
              ],
              "explanation": "Void function doesn't return a value but performs an action.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-18",
              "type": "multiple",
              "question": "Can main() be overloaded?",
              "options": [
                "No",
                "Yes",
                "Only in special cases",
                "Only if static"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "main() cannot be overloaded - it's the program entry point.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-19",
              "type": "code",
              "question": "Write a function that takes two parameters and returns true if both are positive.",
              "correctAnswer": [
                "bool bothPositive(int a, int b) {\\n    return a > 0 && b > 0;\\n}"
              ],
              "explanation": "Function with bool return type and logical AND operator.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-20",
              "type": "typing",
              "question": "What is function signature?",
              "correctAnswer": [
                "function name, return type, and parameters",
                "declaration of a function"
              ],
              "explanation": "Function signature consists of name, return type, and parameter types.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-21",
              "type": "code",
              "question": "Create a function that returns a reference to a global variable.",
              "correctAnswer": [
                "int& getGlobal() {\\n    return globalVar;\\n}"
              ],
              "explanation": "Function can return reference to allow modification of returned value.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-22",
              "type": "multiple",
              "question": "What is the scope of a variable declared inside a loop?",
              "options": [
                "Limited to the loop block",
                "Global scope",
                "Function scope",
                "File scope"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Variables inside loops have block scope, accessible only within the loop.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-23",
              "type": "code",
              "question": "Write a function with const reference parameter for efficiency.",
              "correctAnswer": [
                "void process(const string& s) {\\n    // read s but not modify\\n}"
              ],
              "explanation": "const reference prevents modification while avoiding copy overhead.",
              "xp": 15
            },
            {
              "id": "cpp-2-1-24",
              "type": "typing",
              "question": "What is the purpose of default arguments?",
              "correctAnswer": [
                "provide default values for parameters",
                "make parameters optional"
              ],
              "explanation": "Default arguments allow parameters to be optional with fallback values.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-25",
              "type": "code",
              "question": "Create a function that can be called with 1, 2, or 3 arguments using default values.",
              "correctAnswer": [
                "void show(int a, int b = 0, int c = 0) {\\n    cout << a << b << c << endl;\\n}"
              ],
              "explanation": "Default arguments allow flexible number of arguments.",
              "xp": 15
            }
          ],
          "unitTitle": "2. Functions and Data Structures"
        },
        {
          "id": 8,
          "title": "Arrays and Vectors",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Arrays and Vectors in C++\n\nArrays and vectors are fundamental data structures for storing collections of values of the same type.\n\n## Arrays\n\nArrays are **fixed-size** collections of elements stored contiguously in memory.\n\n### Declaring Arrays\n\n**Syntax:**\n```cpp\ntype arrayName[size];\n```\n\n**Examples:**\n```cpp\nint numbers[5];              // Array of 5 integers\ndouble temperatures[10];     // Array of 10 doubles\nchar letters[26];            // Array of 26 characters\n```\n\n### Initializing Arrays\n\n**Initialize all to zero:**\n```cpp\nint arr[5] = {0};  // All elements are 0\n```\n\n**Initialize with values:**\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\n```\n\n**Initialize without specifying size (inferred):**\n```cpp\nint arr[] = {1, 2, 3, 4, 5};  // Size is 5\n```\n\n### Accessing Array Elements\n\nArray indices start at **0** (zero-based indexing):\n\n```cpp\nint arr[5] = {10, 20, 30, 40, 50};\nstd::cout << arr[0];  // Output: 10 (first element)\nstd::cout << arr[4];  // Output: 50 (last element)\narr[2] = 100;         // Change third element\n```\n\n### Array Bounds\n\n⚠️ **Important:** Arrays have fixed bounds. Accessing out-of-bounds causes **undefined behavior**:\n\n```cpp\nint arr[5];\narr[5] = 10;  // ERROR: Index 5 is out of bounds (valid: 0-4)\narr[-1] = 10; // ERROR: Negative index is invalid\n```\n\n### Iterating Through Arrays\n\n**Using index-based loop:**\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\nfor (int i = 0; i < 5; i++) {\n    std::cout << arr[i] << \" \";\n}\n// Output: 1 2 3 4 5\n```\n\n**Using range-based for loop (C++11):**\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\nfor (int x : arr) {\n    std::cout << x << \" \";\n}\n// Output: 1 2 3 4 5\n```\n\n### 2D Arrays\n\nArrays of arrays:\n\n```cpp\nint matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\n// Accessing elements\nstd::cout << matrix[0][0];  // Output: 1\nstd::cout << matrix[1][2];  // Output: 6\n```\n\n## Vectors\n\nVectors are **dynamic arrays** from the C++ Standard Template Library (STL). They can grow and shrink in size.\n\n### Declaring Vectors\n\n**Include header:**\n```cpp\n#include <vector>\n```\n\n**Create empty vector:**\n```cpp\nstd::vector<int> v;\n```\n\n**Initialize with values:**\n```cpp\nstd::vector<int> v = {1, 2, 3, 4, 5};\nstd::vector<double> v(10, 0.0);  // 10 elements, all 0.0\n```\n\n### Vector Operations\n\n```cpp\nstd::vector<int> v;\n\n// Add element to end\nv.push_back(10);\nv.push_back(20);\n// v = {10, 20}\n\n// Access elements\nstd::cout << v[0];  // Output: 10\nstd::cout << v.at(1);  // Output: 20 (with bounds checking)\n\n// Get size\nstd::cout << v.size();  // Output: 2\n\n// Remove last element\nv.pop_back();\n// v = {10}\n\n// Check if empty\nif (v.empty()) {\n    std::cout << \"Vector is empty\";\n}\n\n// Clear all elements\nv.clear();\n// v = {}\n```\n\n### Vector vs Array\n\n| Feature | Array | Vector |\n|---------|-------|--------|\n| Size | Fixed | Dynamic |\n| Memory | Stack | Heap |\n| Performance | Slightly faster | Slightly slower |\n| Safety | No bounds checking | Has bounds checking (at()) |\n| Methods | None | Many (push_back, size, etc.) |\n\n### Common Vector Methods\n\n```cpp\nv.size()          // Number of elements\nv.empty()         // True if empty\nv.capacity()      // Allocated memory (>= size)\nv.push_back(x)    // Add element at end\nv.pop_back()      // Remove last element\nv.clear()         // Remove all elements\nv.front()         // First element\nv.back()          // Last element\nv.at(i)           // Access with bounds check\nv.resize(n)       // Change size\nv.resize(n, val)  // Resize and fill with val\n```",
          "questions": [
            {
              "id": "cpp-2-2-1",
              "type": "typing",
              "question": "What is an array?",
              "correctAnswer": [
                "fixed-size collection of same-type elements",
                "collection of same type elements"
              ],
              "explanation": "An array is a fixed-size collection of elements of the same type.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-2",
              "type": "typing",
              "question": "How do you access array elements?",
              "correctAnswer": [
                "using index with square brackets",
                "array[index]"
              ],
              "explanation": "Array elements are accessed using square brackets with an index: arr[i]",
              "xp": 5
            },
            {
              "id": "cpp-2-2-3",
              "type": "typing",
              "question": "What is std::vector?",
              "correctAnswer": [
                "dynamic array that can grow and shrink",
                " resizable array"
              ],
              "explanation": "std::vector is a dynamic array that can automatically resize.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-4",
              "type": "typing",
              "question": "How do you add elements to a vector?",
              "correctAnswer": [
                "push_back",
                "using push_back method"
              ],
              "explanation": "Use push_back() to add elements to the end of a vector.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-5",
              "type": "typing",
              "question": "What happens if you access an array out of bounds?",
              "correctAnswer": [
                "undefined behavior",
                "may crash"
              ],
              "explanation": "Accessing arrays out of bounds results in undefined behavior.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-6",
              "type": "multiple",
              "question": "Which is a correct array declaration?",
              "options": [
                "int arr[5];",
                "int arr[];",
                "arr[5];",
                "Both A and B"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Array declaration must specify type, name, and size.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-7",
              "type": "multiple",
              "question": "What is the first index of a C++ array?",
              "options": [
                "0",
                "1",
                "-1",
                "Depends on declaration"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "C++ arrays are zero-indexed, so the first element is at index 0.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-8",
              "type": "multiple",
              "question": "What method gets the size of a vector?",
              "options": [
                "size()",
                "length()",
                "count()",
                "getSize()"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "size() returns the number of elements in a vector.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-9",
              "type": "multiple",
              "question": "Can vector change its size after creation?",
              "options": [
                "Yes",
                "No",
                "Only if declared dynamic",
                "Only with special functions"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Vectors can grow and shrink dynamically using push_back, pop_back, etc.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-10",
              "type": "multiple",
              "question": "What is a multidimensional array?",
              "options": [
                "Array of arrays",
                "Array with multiple types",
                "Vector of vectors",
                "Both A and D"
              ],
              "correctAnswer": [
                3
              ],
              "explanation": "Multidimensional arrays are arrays of arrays (or vectors of vectors).",
              "xp": 5
            },
            {
              "id": "cpp-2-2-11",
              "type": "code",
              "question": "Declare an array of 10 integers.",
              "correctAnswer": [
                "int arr[10];"
              ],
              "explanation": "Array declaration: type name[size];",
              "xp": 15
            },
            {
              "id": "cpp-2-2-12",
              "type": "code",
              "question": "Declare and initialize an array with values 1, 2, 3, 4, 5.",
              "correctAnswer": [
                "int arr[] = {1, 2, 3, 4, 5};",
                "int arr[5] = {1, 2, 3, 4, 5};"
              ],
              "explanation": "Arrays can be initialized with an initializer list.",
              "xp": 15
            },
            {
              "id": "cpp-2-2-13",
              "type": "code",
              "question": "Set the first element of array arr to 100.",
              "correctAnswer": [
                "arr[0] = 100;"
              ],
              "explanation": "Access array element with index and assign value.",
              "xp": 15
            },
            {
              "id": "cpp-2-2-14",
              "type": "code",
              "question": "Create a vector of integers.",
              "correctAnswer": [
                "vector<int> vec;",
                "#include <vector>"
              ],
              "explanation": "Vector is a template class: vector<type> name;",
              "xp": 15
            },
            {
              "id": "cpp-2-2-15",
              "type": "code",
              "question": "Add 5 to a vector named vec.",
              "correctAnswer": [
                "vec.push_back(5);"
              ],
              "explanation": "push_back adds element to the end of the vector.",
              "xp": 15
            },
            {
              "id": "cpp-2-2-16",
              "type": "code",
              "question": "Print all elements of an array arr of size 5 using a loop.",
              "correctAnswer": [
                "for (int i = 0; i < 5; i++) { cout << arr[i] << \" \"; }"
              ],
              "explanation": "Use for loop with index to iterate through array.",
              "xp": 15
            },
            {
              "id": "cpp-2-2-17",
              "type": "code",
              "question": "Print all elements of a vector using range-based for loop.",
              "correctAnswer": [
                "for (int x : vec) { cout << x << \" \"; }"
              ],
              "explanation": "Range-based for loop iterates through all elements.",
              "xp": 15
            },
            {
              "id": "cpp-2-2-18",
              "type": "code",
              "question": "Create a 2D array (3x3) of integers.",
              "correctAnswer": [
                "int arr[3][3];"
              ],
              "explanation": "2D array: type name[rows][cols];",
              "xp": 15
            },
            {
              "id": "cpp-2-2-19",
              "type": "code",
              "question": "Access element at row 2, column 3 of 2D array arr.",
              "correctAnswer": [
                "arr[1][2]",
                "arr[1][2];"
              ],
              "explanation": "2D array access: arr[row][col] (indices start at 0).",
              "xp": 15
            },
            {
              "id": "cpp-2-2-20",
              "type": "code",
              "question": "Remove the last element from a vector.",
              "correctAnswer": [
                "vec.pop_back();"
              ],
              "explanation": "pop_back removes the last element from the vector.",
              "xp": 15
            },
            {
              "id": "cpp-2-2-21",
              "type": "code",
              "question": "Check if a vector is empty.",
              "correctAnswer": [
                "if (vec.empty())",
                "vec.empty()"
              ],
              "explanation": "empty() returns true if vector has no elements.",
              "xp": 15
            },
            {
              "id": "cpp-2-2-22",
              "type": "code",
              "question": "Get the size of a vector and store it in a variable.",
              "correctAnswer": [
                "int size = vec.size();"
              ],
              "explanation": "size() returns number of elements as size_t.",
              "xp": 15
            },
            {
              "id": "cpp-2-2-23",
              "type": "code",
              "question": "Access the last element of a vector without removing it.",
              "correctAnswer": [
                "vec.back()",
                "int last = vec.back();"
              ],
              "explanation": "back() returns reference to the last element.",
              "xp": 15
            },
            {
              "id": "cpp-2-2-24",
              "type": "code",
              "question": "Clear all elements from a vector.",
              "correctAnswer": [
                "vec.clear();"
              ],
              "explanation": "clear() removes all elements, making size 0.",
              "xp": 15
            },
            {
              "id": "cpp-2-2-25",
              "type": "code",
              "question": "Find the sum of all elements in an array arr of size 5.",
              "correctAnswer": [
                "int sum = 0;\\nfor (int i = 0; i < 5; i++) {\\n    sum += arr[i];\\n}"
              ],
              "explanation": "Iterate through array and accumulate sum.",
              "xp": 15
            }
          ],
          "unitTitle": "2. Functions and Data Structures"
        },
        {
          "id": 9,
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
            },
            {
              "id": "cpp-2-3-21",
              "type": "code",
              "question": "Append a character to a string.",
              "correctAnswer": [
                "s += 'x';",
                "s.append('x');",
                "s.push_back('x');"
              ],
              "explanation": "Use +=, append(), or push_back() to add characters to string.",
              "xp": 15
            },
            {
              "id": "cpp-2-3-22",
              "type": "code",
              "question": "Convert string to uppercase.",
              "correctAnswer": [
                "transform(s.begin(), s.end(), s.begin(), ::toupper);"
              ],
              "explanation": "Use transform with toupper from <algorithm>.",
              "xp": 15
            },
            {
              "id": "cpp-2-3-23",
              "type": "code",
              "question": "Find position of substring in string.",
              "correctAnswer": [
                "size_t pos = s.find(substring);",
                "int pos = s.find(sub);"
              ],
              "explanation": "find() returns position of substring or string::npos if not found.",
              "xp": 15
            },
            {
              "id": "cpp-2-3-24",
              "type": "code",
              "question": "Replace all occurrences of 'a' with 'b' in string.",
              "correctAnswer": [
                "while (s.find('a') != string::npos) { s.replace(s.find('a'), 1, \"b\"); }"
              ],
              "explanation": "Find and replace in loop. (In practice, use replace() with appropriate parameters)",
              "xp": 15
            },
            {
              "id": "cpp-2-3-25",
              "type": "code",
              "question": "Convert integer to string.",
              "correctAnswer": [
                "string s = to_string(42);",
                "string s = std::to_string(num);"
              ],
              "explanation": "Use to_string() function to convert numeric types to string.",
              "xp": 15
            }
          ],
          "unitTitle": "2. Functions and Data Structures"
        },
        {
          "id": 10,
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
            },
            {
              "id": "cpp-2-4-21",
              "type": "code",
              "question": "Create reference to array element.",
              "correctAnswer": [
                "int& ref = arr[0];"
              ],
              "explanation": "Reference to array element allows modification.",
              "xp": 15
            },
            {
              "id": "cpp-2-4-22",
              "type": "code",
              "question": "Pass array to function using pointer.",
              "correctAnswer": [
                "void func(int* arr, int size)",
                "void func(int arr[], int size)"
              ],
              "explanation": "Arrays decay to pointers when passed to functions.",
              "xp": 15
            },
            {
              "id": "cpp-2-4-23",
              "type": "code",
              "question": "Increment value through pointer.",
              "correctAnswer": [
                "(*p)++;",
                "++(*p);"
              ],
              "explanation": "Dereference first with parentheses, then increment.",
              "xp": 15
            },
            {
              "id": "cpp-2-4-24",
              "type": "code",
              "question": "Check if pointer points to same location as another.",
              "correctAnswer": [
                "if (p1 == p2)",
                "p1 == p2"
              ],
              "explanation": "Compare pointers to check if they point to same location.",
              "xp": 15
            },
            {
              "id": "cpp-2-4-25",
              "type": "code",
              "question": "Create pointer to pointer (double pointer).",
              "correctAnswer": [
                "int** pp = &p;",
                "int **pp = &p;"
              ],
              "explanation": "Pointer to pointer: type** name",
              "xp": 15
            }
          ],
          "unitTitle": "2. Functions and Data Structures"
        },
        {
          "id": 11,
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
            },
            {
              "id": "cpp-2-5-21",
              "type": "code",
              "question": "Use STL sort to sort vector.",
              "correctAnswer": [
                "sort(vec.begin(), vec.end());"
              ],
              "explanation": "STL sort: sort(begin, end)",
              "xp": 15
            },
            {
              "id": "cpp-2-5-22",
              "type": "code",
              "question": "Use STL find to search vector.",
              "correctAnswer": [
                "auto it = find(vec.begin(), vec.end(), target);"
              ],
              "explanation": "find returns iterator to found element or end().",
              "xp": 15
            },
            {
              "id": "cpp-2-5-23",
              "type": "code",
              "question": "Use STL count to count occurrences.",
              "correctAnswer": [
                "int c = count(vec.begin(), vec.end(), value);"
              ],
              "explanation": "count returns number of occurrences of value.",
              "xp": 15
            },
            {
              "id": "cpp-2-5-24",
              "type": "code",
              "question": "Find max element using STL max_element.",
              "correctAnswer": [
                "auto it = max_element(vec.begin(), vec.end());"
              ],
              "explanation": "max_element returns iterator to maximum element.",
              "xp": 15
            },
            {
              "id": "cpp-2-5-25",
              "type": "code",
              "question": "Use reverse to reverse vector.",
              "correctAnswer": [
                "reverse(vec.begin(), vec.end());"
              ],
              "explanation": "reverse reverses elements in range.",
              "xp": 15
            }
          ],
          "unitTitle": "2. Functions and Data Structures"
        },
        {
          "id": 12,
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
            },
            {
              "id": "cpp-2-6-21",
              "type": "code",
              "question": "Use break to exit inner loop in nested loop.",
              "correctAnswer": [
                "for (int i = 0; i < 5; i++) {\\n    for (int j = 0; j < 5; j++) {\\n        if (found) break;\\n    }\\n}"
              ],
              "explanation": "break only exits the innermost loop.",
              "xp": 15
            },
            {
              "id": "cpp-2-6-22",
              "type": "code",
              "question": "Use labeled goto to exit nested loops.",
              "correctAnswer": [
                "outer: for (int i = 0; i < 5; i++) {\\n    for (int j = 0; j < 5; j++) {\\n        if (found) goto outer;\\n    }\\n}"
              ],
              "explanation": "goto with label can exit multiple loops (but avoid when possible).",
              "xp": 15
            },
            {
              "id": "cpp-2-6-23",
              "type": "code",
              "question": "Use continue to skip even numbers.",
              "correctAnswer": [
                "for (int i = 0; i < 10; i++) {\\n    if (i % 2 == 0) continue;\\n    cout << i;\\n}"
              ],
              "explanation": "continue skips to next iteration.",
              "xp": 15
            },
            {
              "id": "cpp-2-6-24",
              "type": "code",
              "question": "Use ternary operator for conditional assignment.",
              "correctAnswer": [
                "int max = (a > b) ? a : b;",
                "int max = a > b ? a : b;"
              ],
              "explanation": "Ternary: condition ? expr1 : expr2",
              "xp": 15
            },
            {
              "id": "cpp-2-6-25",
              "type": "code",
              "question": "Use switch with fall-through.",
              "correctAnswer": [
                "switch (x) {\\n    case 1:\\n    case 2:\\n        cout << \"1 or 2\";\\n        break;\\n    default:\\n        cout << \"other\";\\n}"
              ],
              "explanation": "Multiple cases can share same code (fall-through).",
              "xp": 15
            }
          ],
          "unitTitle": "2. Functions and Data Structures"
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
          "lessonText": "# Classes and Objects\n\nClasses are the fundamental building blocks of C++ object-oriented programming. A class is a user-defined data type that encapsulates data (attributes) and functions (methods) that operate on that data.\n\n## Class Definition\n\n```cpp\nclass MyClass {\npublic:\n    // Data members\n    int myNum;\n    string myString;\n};\n```\n\n## Creating Objects\n\n```cpp\nMyClass myObj;\nmyObj.myNum = 15;\nmyObj.myString = \"Hello\";\n```\n\nAn object is an instance of a class.",
          "questions": [
            {
              "id": "cpp-3-1-1",
              "type": "typing",
              "question": "What keyword is used to declare a class in C++?",
              "correctAnswer": [
                "class"
              ],
              "explanation": "The 'class' keyword is used to declare a class definition in C++.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-2",
              "type": "typing",
              "question": "What is an object?",
              "correctAnswer": [
                "instance",
                "instance of a class"
              ],
              "explanation": "An object is an instance of a class.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-3",
              "type": "multiple",
              "question": "Which of the following are components of a class?",
              "options": [
                "Data members",
                "Methods",
                "Class definition",
                "Object creation"
              ],
              "correctAnswer": [
                0,
                1
              ],
              "explanation": "A class contains data members (attributes) and methods (functions).",
              "xp": 5
            },
            {
              "id": "cpp-3-1-4",
              "type": "code",
              "question": "Create a class called 'Student' with a public integer member named 'age'.",
              "correctAnswer": [
                "class Student {\\npublic:\\n    int age;\\n};",
                "class Student{public: int age;};"
              ],
              "explanation": "A class declaration uses the 'class' keyword followed by the class name and braces.",
              "xp": 10
            },
            {
              "id": "cpp-3-1-5",
              "type": "code",
              "question": "Create an object of the Student class and set age to 20.",
              "correctAnswer": [
                "Student s;\\ns.age = 20;",
                "Student student;\\nstudent.age = 20;"
              ],
              "explanation": "First create an object using the class name, then access members using dot notation.",
              "xp": 10
            },
            {
              "id": "cpp-3-1-6",
              "type": "typing",
              "question": "What encapsulation means in OOP?",
              "correctAnswer": [
                "bundling data and methods together",
                "hiding internal details"
              ],
              "explanation": "Encapsulation is the bundling of data and the methods that operate on that data within a single unit (class).",
              "xp": 5
            },
            {
              "id": "cpp-3-1-7",
              "type": "multiple",
              "question": "Which of these are valid when declaring a class?",
              "options": [
                "class MyClass { };",
                "class MyClass { };",
                "class MyClass;",
                "Both A and B"
              ],
              "correctAnswer": [
                3
              ],
              "explanation": "Class declarations must have braces, but can optionally end with a semicolon.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-8",
              "type": "code",
              "question": "Create a class named 'Rectangle' with public double members 'width' and 'height'.",
              "correctAnswer": [
                "class Rectangle {\\npublic:\\n    double width, height;\\n};"
              ],
              "explanation": "Define class with public access and declare member variables.",
              "xp": 10
            },
            {
              "id": "cpp-3-1-9",
              "type": "code",
              "question": "Create two Rectangle objects and set their dimensions to (5, 3) and (10, 7).",
              "correctAnswer": [
                "Rectangle r1, r2;\\nr1.width = 5; r1.height = 3;\\nr2.width = 10; r2.height = 7;"
              ],
              "explanation": "Create objects then access members using dot notation.",
              "xp": 10
            },
            {
              "id": "cpp-3-1-10",
              "type": "multiple",
              "question": "What happens if you access a member of an uninitialized object?",
              "options": [
                "Undefined behavior",
                "Compile error",
                "Runtime error",
                "Nothing"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Accessing uninitialized object members leads to undefined behavior.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-11",
              "type": "code",
              "question": "Write a class 'Point' with x and y coordinates and a method to print them.",
              "correctAnswer": [
                "class Point {\\npublic:\\n    int x, y;\\n    void print() {\\n        cout << x << \",\" << y << endl;\\n    }\\n};"
              ],
              "explanation": "Class with member variables and a member function.",
              "xp": 15
            },
            {
              "id": "cpp-3-1-12",
              "type": "typing",
              "question": "What is a member function?",
              "correctAnswer": [
                "function defined inside a class",
                "method of a class"
              ],
              "explanation": "A member function (method) is a function defined within a class that operates on class data.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-13",
              "type": "code",
              "question": "Create a class 'Book' with title (string) and pages (int) members.",
              "correctAnswer": [
                "class Book {\\npublic:\\n    string title;\\n    int pages;\\n};"
              ],
              "explanation": "Class with string and int member variables.",
              "xp": 10
            },
            {
              "id": "cpp-3-1-14",
              "type": "multiple",
              "question": "How do you access a public member of an object?",
              "options": [
                "Using dot operator (.)",
                "Using arrow operator (->)",
                "Using colon (:)",
                "Both A and B"
              ],
              "correctAnswer": [
                0,
                1
              ],
              "explanation": "Use dot (.) for objects, arrow (->) for pointers to objects.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-15",
              "type": "code",
              "question": "Create a pointer to a Rectangle object and access its width member.",
              "correctAnswer": [
                "Rectangle r;\\nRectangle* ptr = &r;\\nptr->width = 10;"
              ],
              "explanation": "Use & to get address, arrow operator to access via pointer.",
              "xp": 15
            },
            {
              "id": "cpp-3-1-16",
              "type": "typing",
              "question": "What is the default access specifier for class members?",
              "correctAnswer": [
                "private"
              ],
              "explanation": "Class members are private by default. Struct members are public by default.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-17",
              "type": "code",
              "question": "Write a class 'Counter' with a public count variable and increment() method.",
              "correctAnswer": [
                "class Counter {\\npublic:\\n    int count;\\n    void increment() {\\n        count++;\\n    }\\n};"
              ],
              "explanation": "Class with member variable and member function.",
              "xp": 10
            },
            {
              "id": "cpp-3-1-18",
              "type": "multiple",
              "question": "What is the difference between class and struct?",
              "options": [
                "Default access is private for class, public for struct",
                "They are identical",
                "Structs cannot have methods",
                "Classes cannot have public members"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "The only difference is default access: private for class, public for struct.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-19",
              "type": "code",
              "question": "Create an array of 5 Rectangle objects and set the first one's width to 100.",
              "correctAnswer": [
                "Rectangle rects[5];\\nrects[0].width = 100;"
              ],
              "explanation": "Arrays of objects can be declared like any other array.",
              "xp": 15
            },
            {
              "id": "cpp-3-1-20",
              "type": "typing",
              "question": "What is an instance of a class called?",
              "correctAnswer": [
                "object"
              ],
              "explanation": "An object is an instance of a class.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-21",
              "type": "code",
              "question": "Create a class 'Person' with name and age, then create two Person objects.",
              "correctAnswer": [
                "class Person {\\npublic:\\n    string name;\\n    int age;\\n};\\nPerson p1, p2;"
              ],
              "explanation": "Define class then create multiple objects of that class.",
              "xp": 10
            },
            {
              "id": "cpp-3-1-22",
              "type": "multiple",
              "question": "Can you create an object of a class with only private members?",
              "options": [
                "Yes, but can't access members directly",
                "No, it's not allowed",
                "Only if you're a friend",
                "Yes, always"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "You can create objects of classes with private members, but can't access those members directly.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-23",
              "type": "code",
              "question": "Write a class 'Circle' with radius member and getArea() method returning πr².",
              "correctAnswer": [
                "class Circle {\\npublic:\\n    double radius;\\n    double getArea() {\\n        return 3.14159 * radius * radius;\\n    }\\n};"
              ],
              "explanation": "Member function can use class member variables.",
              "xp": 15
            },
            {
              "id": "cpp-3-1-24",
              "type": "typing",
              "question": "What is a data member?",
              "correctAnswer": [
                "variable declared inside a class",
                "member variable of a class"
              ],
              "explanation": "A data member is a variable declared within a class definition.",
              "xp": 5
            },
            {
              "id": "cpp-3-1-25",
              "type": "code",
              "question": "Create a class 'Vector3D' with x, y, z members and a magnitude() method.",
              "correctAnswer": [
                "class Vector3D {\\npublic:\\n    double x, y, z;\\n    double magnitude() {\\n        return sqrt(x*x + y*y + z*z);\\n    }\\n};"
              ],
              "explanation": "Class with member function that uses multiple members.",
              "xp": 15
            }
          ]
        },
        {
          "id": 14,
          "title": "Methods and Access Control",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Methods and Access Control\n\nMethods are member functions that operate on class data. Access control keywords determine who can access class members.\n\n## Access Specifiers\n\n- `public`: Accessible from outside the class\n- `private`: Accessible only within the class\n- `protected`: Accessible within the class and derived classes\n\n## Example\n\n```cpp\nclass Car {\npublic:\n    void drive() {\n        cout << \"Driving\" << endl;\n    }\nprivate:\n    int speed;\n};\n```\n\n## Constructors\n\nConstructors are special methods that initialize objects:\n\n```cpp\nclass Car {\npublic:\n    Car() {  // Constructor\n        speed = 0;\n    }\n};",
          "questions": [
            {
              "id": "cpp-3-2-1",
              "type": "typing",
              "question": "What are the three access specifiers in C++?",
              "correctAnswer": [
                "public, private, protected",
                "public private protected"
              ],
              "explanation": "The three access specifiers are public, private, and protected.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-2",
              "type": "multiple",
              "question": "Which access specifier allows members to be accessed from outside the class?",
              "options": [
                "public",
                "private",
                "protected",
                "internal"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "The 'public' access specifier allows members to be accessed from outside the class.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-3",
              "type": "multiple",
              "question": "What is the default access specifier for class members?",
              "options": [
                "public",
                "private",
                "protected",
                "none"
              ],
              "correctAnswer": [
                1
              ],
              "explanation": "The default access specifier for class members is 'private'.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-4",
              "type": "typing",
              "question": "What is a constructor?",
              "correctAnswer": [
                "special method that initializes objects",
                "method that creates objects"
              ],
              "explanation": "A constructor is a special member function that initializes objects of a class.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-5",
              "type": "code",
              "question": "Create a class with a public method called 'display' that prints 'Hello'.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    void display() {\\n        cout << \"Hello\" << endl;\\n    }\\n};"
              ],
              "explanation": "Methods are defined inside the class using the same syntax as regular functions.",
              "xp": 10
            },
            {
              "id": "cpp-3-2-6",
              "type": "code",
              "question": "Create a class 'BankAccount' with private balance and public deposit(amount) method.",
              "correctAnswer": [
                "class BankAccount {\\nprivate:\\n    double balance;\\npublic:\\n    void deposit(double amount) {\\n        balance += amount;\\n    }\\n};"
              ],
              "explanation": "Private member can only be accessed by member functions.",
              "xp": 15
            },
            {
              "id": "cpp-3-2-7",
              "type": "multiple",
              "question": "What happens if you try to access a private member from outside the class?",
              "options": [
                "Compile error",
                "Runtime error",
                "Undefined behavior",
                "Nothing"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Accessing private members from outside the class causes a compile error.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-8",
              "type": "code",
              "question": "Write a class 'Temperature' with private celsius and public getCelsius(), setCelsius().",
              "correctAnswer": [
                "class Temperature {\\nprivate:\\n    double celsius;\\npublic:\\n    double getCelsius() { return celsius; }\\n    void setCelsius(double c) { celsius = c; }\\n};"
              ],
              "explanation": "Getters and setters provide controlled access to private members.",
              "xp": 15
            },
            {
              "id": "cpp-3-2-9",
              "type": "typing",
              "question": "What is a getter method?",
              "correctAnswer": [
                "method that returns the value of a private member",
                "accessor method"
              ],
              "explanation": "A getter (accessor) is a method that returns the value of a private member.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-10",
              "type": "code",
              "question": "Create a parameterized constructor for Rectangle that takes width and height.",
              "correctAnswer": [
                "class Rectangle {\\npublic:\\n    double width, height;\\n    Rectangle(double w, double h) {\\n        width = w;\\n        height = h;\\n    }\\n};"
              ],
              "explanation": "Constructor with parameters to initialize member variables.",
              "xp": 15
            },
            {
              "id": "cpp-3-2-11",
              "type": "code",
              "question": "Create a Student class with constructor that takes name and age parameters.",
              "correctAnswer": [
                "class Student {\\npublic:\\n    string name;\\n    int age;\\n    Student(string n, int a) {\\n        name = n;\\n        age = a;\\n    }\\n};"
              ],
              "explanation": "Constructor initializes object with given values.",
              "xp": 15
            },
            {
              "id": "cpp-3-2-12",
              "type": "multiple",
              "question": "Can a constructor have a return type?",
              "options": [
                "No",
                "Yes, it returns void",
                "Yes, it returns the object",
                "Yes, it returns int"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Constructors have no return type, not even void.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-13",
              "type": "code",
              "question": "Create a destructor for a class that prints 'Object destroyed'.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    ~MyClass() {\\n        cout << \"Object destroyed\" << endl;\\n    }\\n};"
              ],
              "explanation": "Destructor name is ~ClassName, no parameters, called when object is destroyed.",
              "xp": 15
            },
            {
              "id": "cpp-3-2-14",
              "type": "typing",
              "question": "What is a destructor?",
              "correctAnswer": [
                "special method called when object is destroyed",
                "cleans up resources"
              ],
              "explanation": "A destructor is a special member function called when an object is destroyed.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-15",
              "type": "code",
              "question": "Write a class with both default and parameterized constructors.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    int value;\\n    MyClass() { value = 0; }\\n    MyClass(int v) { value = v; }\\n};"
              ],
              "explanation": "Multiple constructors with different parameters (constructor overloading).",
              "xp": 15
            },
            {
              "id": "cpp-3-2-16",
              "type": "multiple",
              "question": "What is the 'this' pointer?",
              "options": [
                "Pointer to the current object",
                "Pointer to the parent class",
                "Null pointer",
                "Reference to the object"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "The 'this' pointer is a pointer to the current object instance.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-17",
              "type": "code",
              "question": "Use 'this' pointer in a setter to distinguish between parameter and member.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    int value;\\n    void setValue(int value) {\\n        this->value = value;\\n    }\\n};"
              ],
              "explanation": "Use 'this->' to refer to member variable when parameter has same name.",
              "xp": 15
            },
            {
              "id": "cpp-3-2-18",
              "type": "code",
              "question": "Create a static member function that returns a constant value.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    static int getValue() {\\n        return 42;\\n    }\\n};"
              ],
              "explanation": "Static member functions use 'static' keyword, don't need object to call.",
              "xp": 15
            },
            {
              "id": "cpp-3-2-19",
              "type": "multiple",
              "question": "Can a static member function access non-static members?",
              "options": [
                "No",
                "Yes",
                "Only if they're public",
                "Only if they're private"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Static member functions cannot access non-static members because they don't have 'this' pointer.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-20",
              "type": "code",
              "question": "Create a const member function that doesn't modify any members.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    int getValue() const {\\n        return value;\\n    }\\n};"
              ],
              "explanation": "Const member functions promise not to modify object state.",
              "xp": 15
            },
            {
              "id": "cpp-3-2-21",
              "type": "typing",
              "question": "What does the 'const' keyword after a member function do?",
              "correctAnswer": [
                "promises not to modify object",
                "makes the function constant"
              ],
              "explanation": "A const member function promises not to modify any member variables.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-22",
              "type": "code",
              "question": "Write a class with private members and public getter/setter for each.",
              "correctAnswer": [
                "class Person {\\nprivate:\\n    string name;\\n    int age;\\npublic:\\n    string getName() { return name; }\\n    void setName(string n) { name = n; }\\n    int getAge() { return age; }\\n    void setAge(int a) { age = a; }\\n};"
              ],
              "explanation": "Encapsulation pattern: private data with public accessors.",
              "xp": 15
            },
            {
              "id": "cpp-3-2-23",
              "type": "multiple",
              "question": "What is method overloading?",
              "options": [
                "Multiple methods with same name different parameters",
                "Inheriting methods",
                "Hiding base class methods",
                "Creating virtual methods"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Method overloading is having multiple methods with the same name but different parameters.",
              "xp": 5
            },
            {
              "id": "cpp-3-2-24",
              "type": "code",
              "question": "Create overloaded print() methods that print int and string.",
              "correctAnswer": [
                "class Printer {\\npublic:\\n    void print(int i) {\\n        cout << \"Int: \" << i << endl;\\n    }\\n    void print(string s) {\\n        cout << \"String: \" << s << endl;\\n    }\\n};"
              ],
              "explanation": "Overloading allows same function name with different parameter types.",
              "xp": 15
            },
            {
              "id": "cpp-3-2-25",
              "type": "code",
              "question": "Write a class with a copy constructor that copies all members.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    int value;\\n    MyClass(const MyClass& other) {\\n        value = other.value;\\n    }\\n};"
              ],
              "explanation": "Copy constructor takes reference to object of same class and copies its members.",
              "xp": 15
            }
          ]
        },
        {
          "id": 15,
          "title": "Inheritance",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Inheritance\n\nInheritance allows a class to inherit properties and methods from another class. This promotes code reuse and creates a hierarchical relationship between classes.\n\n## Syntax\n\n```cpp\nclass DerivedClass : accessSpecifier BaseClass {\n    // Class body\n};\n```\n\n## Example\n\n```cpp\nclass Animal {\npublic:\n    void eat() {\n        cout << \"Eating\" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << \"Barking\" << endl;\n    }\n};\n```\n\n## Key Concepts\n\n- **Base Class (Parent):** The class being inherited from\n- **Derived Class (Child):** The class that inherits\n- **Public Inheritance:** Public members of base become public in derived",
          "questions": [
            {
              "id": "cpp-3-3-1",
              "type": "typing",
              "question": "What is inheritance?",
              "correctAnswer": [
                "creating a new class from an existing class",
                "deriving a class from another class"
              ],
              "explanation": "Inheritance is the process of creating a new class from an existing class, inheriting its properties and methods.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-2",
              "type": "multiple",
              "question": "What is the base class called?",
              "options": [
                "Parent class",
                "Child class",
                "Derived class",
                "Superclass"
              ],
              "correctAnswer": [
                0,
                3
              ],
              "explanation": "The base class is also known as the parent class or superclass.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-3",
              "type": "multiple",
              "question": "What does public inheritance do?",
              "options": [
                "Makes public members of base public in derived",
                "Makes all members public",
                "Hides base class members",
                "Makes members private"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Public inheritance makes the public members of the base class public in the derived class.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-4",
              "type": "code",
              "question": "Create a class 'Bird' that inherits publicly from 'Animal'.",
              "correctAnswer": [
                "class Bird : public Animal {\\npublic:\\n    // Bird-specific members\\n};"
              ],
              "explanation": "Use the colon ':' followed by 'public BaseClass' to inherit publicly.",
              "xp": 10
            },
            {
              "id": "cpp-3-3-5",
              "type": "typing",
              "question": "What is a derived class?",
              "correctAnswer": [
                "class that inherits from another class",
                "child class"
              ],
              "explanation": "A derived class (or child class) is a class that inherits properties and methods from a base class.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-6",
              "type": "code",
              "question": "Create a base class 'Vehicle' with speed member, and 'Car' that inherits from it.",
              "correctAnswer": [
                "class Vehicle {\\npublic:\\n    int speed;\\n};\\nclass Car : public Vehicle {\\npublic:\\n    string brand;\\n};"
              ],
              "explanation": "Use colon and 'public' keyword to inherit from base class.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-7",
              "type": "multiple",
              "question": "What members can a derived class access from a private base class?",
              "options": [
                "None",
                "Public and protected",
                "All members",
                "Only protected"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Derived classes cannot access private members of the base class, only public and protected.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-8",
              "type": "code",
              "question": "Create a class 'Cat' inheriting from 'Animal' with a new 'meow()' method.",
              "correctAnswer": [
                "class Cat : public Animal {\\npublic:\\n    void meow() {\\n        cout << \"Meow\" << endl;\\n    }\\n};"
              ],
              "explanation": "Derived class adds new members while inheriting base class members.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-9",
              "type": "code",
              "question": "Create 'FlyingCar' that inherits from both 'Car' and 'Airplane'.",
              "correctAnswer": [
                "class Car { public: void drive(); };\\nclass Airplane { public: void fly(); };\\nclass FlyingCar : public Car, public Airplane {\\n};"
              ],
              "explanation": "Multiple inheritance: list multiple base classes separated by commas.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-10",
              "type": "multiple",
              "question": "What is the diamond problem in multiple inheritance?",
              "options": [
                "Ambiguity when a class inherits from two classes that share a common base",
                "Diamond shape inheritance",
                "Both A and B",
                "Neither"
              ],
              "correctAnswer": [
                2
              ],
              "explanation": "The diamond problem occurs when a class inherits from two classes that share a common base class, causing ambiguity.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-11",
              "type": "code",
              "question": "Create a base class with protected member and derived class that accesses it.",
              "correctAnswer": [
                "class Base {\\nprotected:\\n    int value;\\n};\\nclass Derived : public Base {\\npublic:\\n    void setValue(int v) {\\n        value = v;\\n    }\\n};"
              ],
              "explanation": "Protected members are accessible by derived classes but not from outside.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-12",
              "type": "typing",
              "question": "What is protected inheritance?",
              "correctAnswer": [
                "public and protected members of base become protected in derived",
                "restricts access more than public"
              ],
              "explanation": "Protected inheritance makes public and protected base members protected in derived class.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-13",
              "type": "code",
              "question": "Write a derived class that overrides a base class method.",
              "correctAnswer": [
                "class Base {\\npublic:\\n    virtual void show() {\\n        cout << \"Base\" << endl;\\n    }\\n};\\nclass Derived : public Base {\\npublic:\\n    void show() override {\\n        cout << \"Derived\" << endl;\\n    }\\n};"
              ],
              "explanation": "Derived class can override virtual methods from base class.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-14",
              "type": "multiple",
              "question": "What is method overriding?",
              "options": [
                "Derived class provides new implementation of base class method",
                "Base class method is replaced",
                "Both A and B",
                "Neither"
              ],
              "correctAnswer": [
                2
              ],
              "explanation": "Method overriding is when derived class provides new implementation of base class virtual method.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-15",
              "type": "code",
              "question": "Create 'Student' and 'Teacher' classes both inheriting from 'Person'.",
              "correctAnswer": [
                "class Person {\\npublic:\\n    string name;\\n};\\nclass Student : public Person {\\npublic:\\n    int grade;\\n};\\nclass Teacher : public Person {\\npublic:\\n    string subject;\\n};"
              ],
              "explanation": "Multiple classes can inherit from the same base class.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-16",
              "type": "code",
              "question": "Write a derived class constructor that calls base class constructor.",
              "correctAnswer": [
                "class Base {\\npublic:\\n    Base(int x) {}\\n};\\nclass Derived : public Base {\\npublic:\\n    Derived(int x, int y) : Base(x) {}\\n};"
              ],
              "explanation": "Use initializer list to call base class constructor.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-17",
              "type": "typing",
              "question": "What is an initializer list?",
              "correctAnswer": [
                "syntax to initialize base class and member variables before constructor body",
                "list of initial values"
              ],
              "explanation": "Initializer list initializes base class and member variables before constructor body executes.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-18",
              "type": "code",
              "question": "Create 'ElectricCar' inheriting from 'Car' with batteryCapacity member.",
              "correctAnswer": [
                "class Car {\\npublic:\\n    string brand;\\n};\\nclass ElectricCar : public Car {\\npublic:\\n    int batteryCapacity;\\n};"
              ],
              "explanation": "Derived class extends base class with additional members.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-19",
              "type": "multiple",
              "question": "Can a derived class be a base class for another class?",
              "options": [
                "Yes",
                "No",
                "Only if virtual",
                "Only if public"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "A derived class can serve as a base class for another derived class (multilevel inheritance).",
              "xp": 5
            },
            {
              "id": "cpp-3-3-20",
              "type": "code",
              "question": "Create a 3-level inheritance: Animal -> Mammal -> Dog.",
              "correctAnswer": [
                "class Animal {\\npublic:\\n    void eat();\\n};\\nclass Mammal : public Animal {\\npublic:\\n    void breathe();\\n};\\nclass Dog : public Mammal {\\npublic:\\n    void bark();\\n};"
              ],
              "explanation": "Multilevel inheritance creates a chain of base-derived relationships.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-21",
              "type": "code",
              "question": "Use 'using' to bring a base class method into derived class scope.",
              "correctAnswer": [
                "class Base {\\npublic:\\n    void show();\\n};\\nclass Derived : private Base {\\npublic:\\n    using Base::show;\\n};"
              ],
              "explanation": "Using declaration changes access level of inherited members.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-22",
              "type": "typing",
              "question": "What is virtual inheritance?",
              "correctAnswer": [
                "prevents duplicate base class subobjects in multiple inheritance",
                "solves diamond problem"
              ],
              "explanation": "Virtual inheritance prevents duplicate instances of base class in diamond inheritance.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-23",
              "type": "code",
              "question": "Create 'SmartPhone' that inherits from 'Phone' and 'Computer'.",
              "correctAnswer": [
                "class Phone {\\npublic:\\n    void call();\\n};\\nclass Computer {\\npublic:\\n    void compute();\\n};\\nclass SmartPhone : public Phone, public Computer {\\n};"
              ],
              "explanation": "Multiple inheritance combining functionality from two base classes.",
              "xp": 15
            },
            {
              "id": "cpp-3-3-24",
              "type": "multiple",
              "question": "What happens if you don't specify access specifier in inheritance?",
              "options": [
                "Private for class, public for struct",
                "Public for class, private for struct",
                "Protected",
                "Error"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Default is private inheritance for class, public for struct.",
              "xp": 5
            },
            {
              "id": "cpp-3-3-25",
              "type": "code",
              "question": "Write a function that accepts any object derived from 'Animal' by reference.",
              "correctAnswer": [
                "void feedAnimal(Animal& animal) {\\n    // feed the animal\\n}"
              ],
              "explanation": "Base class reference can refer to any derived class object.",
              "xp": 15
            }
          ]
        },
        {
          "id": 16,
          "title": "Polymorphism",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Polymorphism\n\nPolymorphism allows objects of different classes to be treated as objects of a common base class. The two main types are compile-time (function overloading) and runtime (virtual functions).\n\n## Virtual Functions\n\n```cpp\nclass Animal {\npublic:\n    virtual void makeSound() {\n        cout << \"Some sound\" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void makeSound() override {\n        cout << \"Woof\" << endl;\n    }\n};\n```\n\n## Override Keyword\n\nThe `override` keyword ensures you're actually overriding a virtual function from the base class.\n\n## Pure Virtual Functions\n\n```cpp\nvirtual void makeSound() = 0;  // Pure virtual function\n```\n\nA class with pure virtual functions is an abstract class and cannot be instantiated.",
          "questions": [
            {
              "id": "cpp-3-4-1",
              "type": "typing",
              "question": "What is polymorphism?",
              "correctAnswer": [
                "ability of objects to take different forms",
                "objects of different classes treated as objects of a common base class"
              ],
              "explanation": "Polymorphism allows objects of different classes to be treated as objects of a common base class.",
              "xp": 5
            },
            {
              "id": "cpp-3-4-2",
              "type": "multiple",
              "question": "What keyword is used to declare a virtual function?",
              "options": [
                "virtual",
                "override",
                "abstract",
                "pure"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "The 'virtual' keyword is used to declare a virtual function in C++.",
              "xp": 5
            },
            {
              "id": "cpp-3-4-3",
              "type": "typing",
              "question": "What does the override keyword do?",
              "correctAnswer": [
                "ensures the function overrides a virtual function",
                "marks a function as overriding"
              ],
              "explanation": "The 'override' keyword ensures that a function actually overrides a virtual function from the base class.",
              "xp": 5
            },
            {
              "id": "cpp-3-4-4",
              "type": "multiple",
              "question": "What is a pure virtual function?",
              "options": [
                "A function with no implementation",
                "A function that must be overridden",
                "A virtual function set to zero",
                "All of the above"
              ],
              "correctAnswer": [
                3
              ],
              "explanation": "A pure virtual function is a virtual function with no implementation that must be overridden by derived classes.",
              "xp": 5
            },
            {
              "id": "cpp-3-4-5",
              "type": "code",
              "question": "Create a pure virtual function called 'fly' in a class named 'Bird'.",
              "correctAnswer": [
                "class Bird {\\npublic:\\n    virtual void fly() = 0;\\n};"
              ],
              "explanation": "A pure virtual function is declared with 'virtual' and assigned to zero (= 0).",
              "xp": 10
            },
            {
              "id": "cpp-3-4-6",
              "type": "code",
              "question": "Create an abstract class 'Shape' with pure virtual 'area()' method.",
              "correctAnswer": [
                "class Shape {\\npublic:\\n    virtual double area() = 0;\\n};"
              ],
              "explanation": "Pure virtual function creates abstract class that cannot be instantiated.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-7",
              "type": "multiple",
              "question": "Can you create an object of an abstract class?",
              "options": [
                "No",
                "Yes",
                "Only if it has no pure virtual functions",
                "Only if you're a friend"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Abstract classes with pure virtual functions cannot be instantiated.",
              "xp": 5
            },
            {
              "id": "cpp-3-4-8",
              "type": "code",
              "question": "Create 'Circle' and 'Rectangle' classes inheriting from 'Shape' and implementing area().",
              "correctAnswer": [
                "class Circle : public Shape {\\npublic:\\n    double radius;\\n    double area() override {\\n        return 3.14159 * radius * radius;\\n    }\\n};\\nclass Rectangle : public Shape {\\npublic:\\n    double width, height;\\n    double area() override {\\n        return width * height;\\n    }\\n};"
              ],
              "explanation": "Concrete classes must implement all pure virtual functions.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-9",
              "type": "code",
              "question": "Write a function that calculates area of any Shape object.",
              "correctAnswer": [
                "double calculateArea(Shape& shape) {\\n    return shape.area();\\n}"
              ],
              "explanation": "Polymorphism allows function to work with any derived class through base reference.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-10",
              "type": "multiple",
              "question": "What does virtual enable?",
              "options": [
                "Runtime polymorphism",
                "Compile-time polymorphism",
                "Both A and B",
                "Neither"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Virtual functions enable runtime polymorphism (dynamic binding).",
              "xp": 5
            },
            {
              "id": "cpp-3-4-11",
              "type": "code",
              "question": "Create base class with virtual destructor and derived class.",
              "correctAnswer": [
                "class Base {\\npublic:\\n    virtual ~Base() {}\\n};\\nclass Derived : public Base {\\npublic:\\n    ~Derived() {}\\n};"
              ],
              "explanation": "Virtual destructor ensures proper cleanup when deleting through base pointer.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-12",
              "type": "typing",
              "question": "What is dynamic binding?",
              "correctAnswer": [
                "selecting function to call at runtime based on object type",
                "late binding"
              ],
              "explanation": "Dynamic binding is selecting which function to call at runtime based on actual object type.",
              "xp": 5
            },
            {
              "id": "cpp-3-4-13",
              "type": "code",
              "question": "Use base pointer to call overridden method on derived class object.",
              "correctAnswer": [
                "Shape* shape = new Circle();\\nshape->area();"
              ],
              "explanation": "Base pointer calling virtual method uses derived class implementation.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-14",
              "type": "code",
              "question": "Create a function that prints different sounds for different animals using virtual.",
              "correctAnswer": [
                "class Animal {\\npublic:\\n    virtual void makeSound() = 0;\\n};\\nclass Dog : public Animal {\\npublic:\\n    void makeSound() override {\\n        cout << \"Woof\" << endl;\\n    }\\n};\\nclass Cat : public Animal {\\npublic:\\n    void makeSound() override {\\n        cout << \"Meow\" << endl;\\n    }\\n};\\nvoid playSound(Animal* animal) {\\n    animal->makeSound();\\n}"
              ],
              "explanation": "Virtual functions allow different behavior for different derived classes.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-15",
              "type": "multiple",
              "question": "What is the vtable?",
              "options": [
                "Table of virtual function pointers",
                "Virtual table",
                "Both A and B",
                "Neither"
              ],
              "correctAnswer": [
                2
              ],
              "explanation": "The vtable (virtual table) stores pointers to virtual functions for polymorphic behavior.",
              "xp": 5
            },
            {
              "id": "cpp-3-4-16",
              "type": "code",
              "question": "Write a class with both virtual and non-virtual methods.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    virtual void virtualMethod() {}\\n    void normalMethod() {}\\n};"
              ],
              "explanation": "Classes can have both virtual and non-virtual methods.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-17",
              "type": "code",
              "question": "Create 'Drawable' interface with draw() and create 'Circle' implementing it.",
              "correctAnswer": [
                "class Drawable {\\npublic:\\n    virtual void draw() = 0;\\n};\\nclass Circle : public Drawable {\\npublic:\\n    void draw() override {\\n        cout << \"Drawing circle\" << endl;\\n    }\\n};"
              ],
              "explanation": "Interface is abstract class with only pure virtual functions.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-18",
              "type": "typing",
              "question": "What is a vptr?",
              "correctAnswer": [
                "pointer to vtable stored in each object",
                "virtual pointer"
              ],
              "explanation": "The vptr (virtual pointer) is a hidden pointer in each object pointing to its class's vtable.",
              "xp": 5
            },
            {
              "id": "cpp-3-4-19",
              "type": "code",
              "question": "Write code that demonstrates early binding (non-virtual) vs late binding (virtual).",
              "correctAnswer": [
                "class Base {\\npublic:\\n    void early() { cout << \"Early\" << endl; }\\n    virtual void late() { cout << \"Late\" << endl; }\\n};\\nclass Derived : public Base {\\npublic:\\n    void early() { cout << \"Derived Early\" << endl; }\\n    void late() override { cout << \"Derived Late\" << endl; }\\n};\\nBase* b = new Derived();\\nb->early(); // Calls Base::early\\nb->late(); // Calls Derived::late"
              ],
              "explanation": "Non-virtual uses early binding (compile-time), virtual uses late binding (runtime).",
              "xp": 15
            },
            {
              "id": "cpp-3-4-20",
              "type": "multiple",
              "question": "When is the vtable created?",
              "options": [
                "At compile time",
                "At runtime",
                "When first object is created",
                "In the constructor"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "The vtable is created at compile time for each class with virtual functions.",
              "xp": 5
            },
            {
              "id": "cpp-3-4-21",
              "type": "code",
              "question": "Create a template class with virtual methods for type-specific behavior.",
              "correctAnswer": [
                "template<typename T>\\nclass Container {\\npublic:\\n    virtual void add(T item) = 0;\\n    virtual T get(int index) = 0;\\n};"
              ],
              "explanation": "Templates and polymorphism can be combined for flexible designs.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-22",
              "type": "code",
              "question": "Write 'final' keyword to prevent a class from being inherited.",
              "correctAnswer": [
                "class MyClass final {\\n    // class body\\n};"
              ],
              "explanation": "The 'final' keyword prevents a class from being used as a base class.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-23",
              "type": "typing",
              "question": "What does 'override' ensure?",
              "correctAnswer": [
                "the function actually overrides a virtual function",
                "prevents accidental new function creation"
              ],
              "explanation": "The 'override' keyword ensures the function is actually overriding a base class virtual function.",
              "xp": 5
            },
            {
              "id": "cpp-3-4-24",
              "type": "code",
              "question": "Create a class hierarchy with interface segregation using multiple pure virtual classes.",
              "correctAnswer": [
                "class Printable {\\npublic:\\n    virtual void print() = 0;\\n};\\nclass Serializable {\\npublic:\\n    virtual string serialize() = 0;\\n};\\nclass Document : public Printable, public Serializable {\\npublic:\\n    void print() override { /*...*/ }\\n    string serialize() override { /*...*/ }\\n};"
              ],
              "explanation": "Interface segregation principle: use multiple focused interfaces instead of one large one.",
              "xp": 15
            },
            {
              "id": "cpp-3-4-25",
              "type": "code",
              "question": "Write a function using dynamic_cast to safely convert base pointer to derived.",
              "correctAnswer": [
                "Derived* d = dynamic_cast<Derived*>(basePtr);\\nif (d) {\\n    // Use derived pointer\\n} else {\\n    // Not a Derived object\\n}"
              ],
              "explanation": "dynamic_cast safely converts between pointers in inheritance hierarchy.",
              "xp": 15
            }
          ]
        },
        {
          "id": 17,
          "title": "Operator Overloading",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Operator Overloading\n\nOperator overloading allows you to define custom behavior for operators when used with user-defined types.\n\n## Syntax\n\n```cpp\nreturnType operator op(parameters) {\n    // Implementation\n}\n```\n\n## Example\n\n```cpp\nclass Complex {\npublic:\n    double real, imag;\n    Complex operator+(const Complex& other) {\n        Complex result;\n        result.real = real + other.real;\n        result.imag = imag + other.imag;\n        return result;\n    }\n};\n```\n\n## Common Operators to Overload\n\n- Arithmetic: +, -, *, /, %\n- Comparison: ==, !=, <, >, <=, >=\n- I/O: <<, >>\n- Indexing: []\n- Function call: ()\n- Member access: ->\n\n## Restrictions\n\n- Cannot create new operators\n- Cannot change precedence\n- Cannot change arity (number of operands)\n- Cannot overload operators for built-in types",
          "questions": [
            {
              "id": "cpp-3-5-1",
              "type": "typing",
              "question": "What is operator overloading?",
              "correctAnswer": [
                "defining custom behavior for operators with user-defined types",
                "giving operators special meaning for classes"
              ],
              "explanation": "Operator overloading allows you to define custom behavior for operators when used with user-defined types.",
              "xp": 5
            },
            {
              "id": "cpp-3-5-2",
              "type": "multiple",
              "question": "Which of the following operators can be overloaded?",
              "options": [
                "+",
                "==",
                "[]",
                "All of the above"
              ],
              "correctAnswer": [
                3
              ],
              "explanation": "Most operators in C++ can be overloaded, including +, ==, [], and many others.",
              "xp": 5
            },
            {
              "id": "cpp-3-5-3",
              "type": "multiple",
              "question": "What is a restriction of operator overloading?",
              "options": [
                "Cannot create new operators",
                "Cannot change precedence",
                "Cannot overload for built-in types",
                "All of the above"
              ],
              "correctAnswer": [
                3
              ],
              "explanation": "You cannot create new operators, change precedence, or overload operators for built-in types.",
              "xp": 5
            },
            {
              "id": "cpp-3-5-4",
              "type": "typing",
              "question": "What keyword is used to declare an operator overload?",
              "correctAnswer": [
                "operator"
              ],
              "explanation": "The 'operator' keyword is used to declare an operator overload function.",
              "xp": 5
            },
            {
              "id": "cpp-3-5-5",
              "type": "code",
              "question": "Overload the '+' operator for a class named 'Vector' that adds two vectors.",
              "correctAnswer": [
                "Vector operator+(const Vector& other) {\\n    Vector result;\\n    result.x = x + other.x;\\n    result.y = y + other.y;\\n    return result;\\n}"
              ],
              "explanation": "Use 'operator+' followed by parameters to overload the + operator.",
              "xp": 10
            },
            {
              "id": "cpp-3-5-6",
              "type": "code",
              "question": "Overload the '++' prefix increment operator for a Counter class.",
              "correctAnswer": [
                "class Counter {\\npublic:\\n    int value;\\n    Counter& operator++() {\\n        ++value;\\n        return *this;\\n    }\\n};"
              ],
              "explanation": "Prefix ++ returns reference to modified object.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-7",
              "type": "code",
              "question": "Overload the '++' postfix increment operator for a Counter class.",
              "correctAnswer": [
                "class Counter {\\npublic:\\n    int value;\\n    Counter operator++(int) {\\n        Counter temp = *this;\\n        value++;\\n        return temp;\\n    }\\n};"
              ],
              "explanation": "Postfix ++ uses dummy int parameter, returns old value.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-8",
              "type": "multiple",
              "question": "How does postfix ++ differ from prefix ++ in overloading?",
              "options": [
                "Postfix has dummy int parameter",
                "Prefix has dummy int parameter",
                "They're identical",
                "Neither"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Postfix operators have a dummy int parameter to distinguish from prefix.",
              "xp": 5
            },
            {
              "id": "cpp-3-5-9",
              "type": "code",
              "question": "Overload the '==' operator to compare two Point objects.",
              "correctAnswer": [
                "class Point {\\npublic:\\n    int x, y;\\n    bool operator==(const Point& other) const {\\n        return x == other.x && y == other.y;\\n    }\\n};"
              ],
              "explanation": "Comparison operators return bool and are const member functions.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-10",
              "type": "code",
              "question": "Overload the '!=' operator to compare two Point objects.",
              "correctAnswer": [
                "bool operator!=(const Point& other) const {\\n    return !(*this == other);\\n}"
              ],
              "explanation": "!= can be implemented using == operator.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-11",
              "type": "code",
              "question": "Overload the '<<' operator to output a Point object.",
              "correctAnswer": [
                "class Point {\\npublic:\\n    int x, y;\\n    friend ostream& operator<<(ostream& os, const Point& p) {\\n        os << \"(\" << p.x << \",\" << p.y << \")\";\\n        return os;\\n    }\\n};"
              ],
              "explanation": "Stream operators are friend functions, return reference to stream.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-12",
              "type": "multiple",
              "question": "Why is '<<' operator implemented as a friend function?",
              "options": [
                "Left operand is ostream, not the class",
                "Better performance",
                "Required by language",
                "Convention"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "When left operand is not the class, operator must be implemented as non-member (friend).",
              "xp": 5
            },
            {
              "id": "cpp-3-5-13",
              "type": "code",
              "question": "Overload the '[]' operator to access elements in an Array class.",
              "correctAnswer": [
                "class Array {\\npublic:\\n    int arr[10];\\n    int& operator[](int index) {\\n        return arr[index];\\n    }\\n    const int& operator[](int index) const {\\n        return arr[index];\\n    }\\n};"
              ],
              "explanation": "Index operator returns reference to element, provide const version too.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-14",
              "type": "code",
              "question": "Overload the '->' operator for a smart pointer class.",
              "correctAnswer": [
                "template<typename T>\\nclass SmartPtr {\\nprivate:\\n    T* ptr;\\npublic:\\n    T* operator->() {\\n        return ptr;\\n    }\\n};"
              ],
              "explanation": "Arrow operator returns pointer to member, used for smart pointers.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-15",
              "type": "multiple",
              "question": "Can you overload the 'sizeof' operator?",
              "options": [
                "No",
                "Yes",
                "Only for classes",
                "Only if static"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "sizeof, ::, ., ?: cannot be overloaded.",
              "xp": 5
            },
            {
              "id": "cpp-3-5-16",
              "type": "code",
              "question": "Overload the '-' operator for a Vector class.",
              "correctAnswer": [
                "class Vector {\\npublic:\\n    double x, y;\\n    Vector operator-(const Vector& other) const {\\n        Vector result;\\n        result.x = x - other.x;\\n        result.y = y - other.y;\\n        return result;\\n    }\\n};"
              ],
              "explanation": "Binary operators are similar to +, just change the operation.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-17",
              "type": "code",
              "question": "Overload the '*' operator for scalar multiplication of Vector.",
              "correctAnswer": [
                "Vector operator*(double scalar) const {\\n    Vector result;\\n    result.x = x * scalar;\\n    result.y = y * scalar;\\n    return result;\\n}"
              ],
              "explanation": "Can overload with non-class types for useful operations like scalar multiplication.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-18",
              "type": "code",
              "question": "Overload the '()' function call operator for a Function class.",
              "correctAnswer": [
                "class Function {\\npublic:\\n    double operator()(double x) const {\\n        return x * x; // Example: square function\\n    }\\n};"
              ],
              "explanation": "Function call operator makes objects callable like functions (functors).",
              "xp": 15
            },
            {
              "id": "cpp-3-5-19",
              "type": "multiple",
              "question": "What is a functor?",
              "options": [
                "Object that can be called like a function",
                "Virtual function",
                "Friend function",
                "Static function"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "A functor is an object with overloaded () operator, making it callable like a function.",
              "xp": 5
            },
            {
              "id": "cpp-3-5-20",
              "type": "code",
              "question": "Overload assignment operator '=' for a class with dynamic memory.",
              "correctAnswer": [
                "class MyClass {\\nprivate:\\n    int* data;\\npublic:\\n    MyClass& operator=(const MyClass& other) {\\n        if (this != &other) {\\n            delete[] data;\\n            data = new int[10];\\n            for (int i = 0; i < 10; i++)\\n                data[i] = other.data[i];\\n        }\\n        return *this;\\n    }\\n};"
              ],
              "explanation": "Assignment operator must handle self-assignment and deep copy.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-21",
              "type": "typing",
              "question": "What should assignment operator return?",
              "correctAnswer": [
                "reference to *this",
                "*this",
                "the object itself"
              ],
              "explanation": "Assignment operators should return reference to the assigned object for chaining.",
              "xp": 5
            },
            {
              "id": "cpp-3-5-22",
              "type": "code",
              "question": "Overload the '<' operator to allow sorting of Person objects by age.",
              "correctAnswer": [
                "class Person {\\npublic:\\n    int age;\\n    bool operator<(const Person& other) const {\\n        return age < other.age;\\n    }\\n};"
              ],
              "explanation": "Comparison operators enable using objects with algorithms like sort.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-23",
              "type": "code",
              "question": "Overload the '>' operator using the '<' operator.",
              "correctAnswer": [
                "bool operator>(const Person& other) const {\\n    return other < *this;\\n}"
              ],
              "explanation": "Can implement some operators in terms of others to reduce code duplication.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-24",
              "type": "code",
              "question": "Overload the '+' operator as non-member friend function.",
              "correctAnswer": [
                "class Vector {\\npublic:\\n    double x, y;\\n    friend Vector operator+(const Vector& a, const Vector& b) {\\n        Vector result;\\n        result.x = a.x + b.x;\\n        result.y = a.y + b.y;\\n        return result;\\n    }\\n};"
              ],
              "explanation": "Non-member operators allow implicit conversion on left operand.",
              "xp": 15
            },
            {
              "id": "cpp-3-5-25",
              "type": "code",
              "question": "Overload conversion operator to convert MyString to std::string.",
              "correctAnswer": [
                "class MyString {\\nprivate:\\n    char* str;\\npublic:\\n    operator string() const {\\n        return string(str);\\n    }\\n};"
              ],
              "explanation": "Conversion operator allows implicit conversion to another type.",
              "xp": 15
            }
          ]
        },
        {
          "id": 18,
          "title": "Advanced OOP Concepts",
          "unitTitle": "3. Object-Oriented Programming",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Advanced OOP Concepts\n\nC++ provides several advanced object-oriented features beyond basic classes and inheritance.\n\n## Multiple Inheritance\n\n```cpp\nclass Derived : public Base1, public Base2 {\n    // Class body\n};\n```\n\n## Abstract Classes\n\nClasses with at least one pure virtual function cannot be instantiated:\n\n```cpp\nclass Shape {\npublic:\n    virtual double area() = 0;  // Pure virtual\n};\n```\n\n## Interfaces\n\nIn C++, interfaces are typically implemented as abstract classes with only pure virtual functions.\n\n## Friendship\n\nThe `friend` keyword allows a function or class to access private members:\n\n```cpp\nclass MyClass {\n    friend void myFunction();\nprivate:\n    int secret;\n};\n```\n\n## Static Members\n\n```cpp\nclass MyClass {\npublic:\n    static int count;  // Shared by all objects\n};\n```\n\nStatic members are shared across all instances of a class.",
          "questions": [
            {
              "id": "cpp-3-6-1",
              "type": "typing",
              "question": "What is multiple inheritance?",
              "correctAnswer": [
                "a class inheriting from more than one base class",
                "inheriting from multiple classes"
              ],
              "explanation": "Multiple inheritance allows a derived class to inherit from more than one base class.",
              "xp": 5
            },
            {
              "id": "cpp-3-6-2",
              "type": "multiple",
              "question": "What is an abstract class?",
              "options": [
                "A class with pure virtual functions",
                "A class that cannot be instantiated",
                "A base class for other classes",
                "All of the above"
              ],
              "correctAnswer": [
                3
              ],
              "explanation": "An abstract class has at least one pure virtual function and cannot be instantiated directly.",
              "xp": 5
            },
            {
              "id": "cpp-3-6-3",
              "type": "typing",
              "question": "What does the friend keyword do?",
              "correctAnswer": [
                "allows a function or class to access private members",
                "gives access to private members"
              ],
              "explanation": "The 'friend' keyword allows a function or class to access private and protected members of the class.",
              "xp": 5
            },
            {
              "id": "cpp-3-6-4",
              "type": "multiple",
              "question": "What is true about static members?",
              "options": [
                "Shared by all objects of the class",
                "Created once per class",
                "Can be accessed without an object",
                "All of the above"
              ],
              "correctAnswer": [
                3
              ],
              "explanation": "Static members are shared by all objects of a class, created once, and can be accessed without creating an object.",
              "xp": 5
            },
            {
              "id": "cpp-3-6-5",
              "type": "code",
              "question": "Create an abstract class 'Animal' with a pure virtual function 'speak'.",
              "correctAnswer": [
                "class Animal {\\npublic:\\n    virtual void speak() = 0;\\n};"
              ],
              "explanation": "An abstract class is created by adding at least one pure virtual function (assigned to 0).",
              "xp": 10
            },
            {
              "id": "cpp-3-6-6",
              "type": "code",
              "question": "Create a friend function that can access private members of a class.",
              "correctAnswer": [
                "class MyClass {\\nprivate:\\n    int secret;\\n    friend void revealSecret(const MyClass& obj);\\n};\\nvoid revealSecret(const MyClass& obj) {\\n    cout << obj.secret << endl;\\n}"
              ],
              "explanation": "Friend functions declared with 'friend' keyword can access private members.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-7",
              "type": "multiple",
              "question": "What is the main purpose of friend functions?",
              "options": [
                "Allow external functions to access private members",
                "Security",
                "Performance",
                "Memory efficiency"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Friend functions allow external functions or classes to access private members.",
              "xp": 5
            },
            {
              "id": "cpp-3-6-8",
              "type": "code",
              "question": "Make another class a friend to access private members.",
              "correctAnswer": [
                "class MyClass {\\nprivate:\\n    int secret;\\n    friend class FriendClass;\\n};\\nclass FriendClass {\\npublic:\\n    void access(MyClass& obj) {\\n        obj.secret = 42;\\n    }\\n};"
              ],
              "explanation": "Friend classes can access all private and protected members.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-9",
              "type": "code",
              "question": "Create a static member variable and static member function.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    static int count;\\n    static int getCount() {\\n        return count;\\n    }\\n};\\nint MyClass::count = 0;"
              ],
              "explanation": "Static members are shared across all instances and accessed with class name.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-10",
              "type": "multiple",
              "question": "Where are static member variables stored?",
              "options": [
                "In static storage (outside objects)",
                "In each object",
                "On the heap",
                "On the stack"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Static member variables are stored once in static storage, not in each object.",
              "xp": 5
            },
            {
              "id": "cpp-3-6-11",
              "type": "code",
              "question": "Create a static counter that increments each time an object is created.",
              "correctAnswer": [
                "class Counter {\\npublic:\\n    static int count;\\n    Counter() {\\n        count++;\\n    }\\n};\\nint Counter::count = 0;"
              ],
              "explanation": "Static counter can track total number of objects created.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-12",
              "type": "code",
              "question": "Create a class with const member and initialize it in constructor initializer list.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    const int value;\\n    MyClass(int v) : value(v) {}\\n};"
              ],
              "explanation": "Const members must be initialized in initializer list, not in constructor body.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-13",
              "type": "typing",
              "question": "What is a mutable member?",
              "correctAnswer": [
                "member that can be modified even in const member functions",
                "can be changed in const context"
              ],
              "explanation": "Mutable members can be modified even in const member functions (e.g., for caching).",
              "xp": 5
            },
            {
              "id": "cpp-3-6-14",
              "type": "code",
              "question": "Use mutable for a cache in const member function.",
              "correctAnswer": [
                "class Calculator {\\npublic:\\n    mutable double cachedResult;\\n    double calculate() const {\\n        cachedResult = compute();\\n        return cachedResult;\\n    }\\n};"
              ],
              "explanation": "Mutable allows modifying state in const functions for internal cache/optimization.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-15",
              "type": "code",
              "question": "Create a nested class inside another class.",
              "correctAnswer": [
                "class Outer {\\npublic:\\n    class Inner {\\n    public:\\n        void innerMethod() {}\\n    };\\n};"
              ],
              "explanation": "Nested classes are defined inside another class, have access to private members.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-16",
              "type": "multiple",
              "question": "What is the purpose of a nested class?",
              "options": [
                "Encapsulation and namespace control",
                "Performance",
                "Security",
                "None of the above"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Nested classes provide better encapsulation and help organize related types.",
              "xp": 5
            },
            {
              "id": "cpp-3-6-17",
              "type": "code",
              "question": "Use using declaration to bring a base class member into derived class.",
              "correctAnswer": [
                "class Base {\\npublic:\\n    void method();\\n};\\nclass Derived : private Base {\\npublic:\\n    using Base::method;\\n};"
              ],
              "explanation": "Using declaration can change access level of inherited members.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-18",
              "type": "code",
              "question": "Create a union with different member types.",
              "correctAnswer": [
                "union Data {\\n    int i;\\n    double d;\\n    char c[8];\\n};"
              ],
              "explanation": "Union stores different types in same memory location, only one active at a time.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-19",
              "type": "typing",
              "question": "What is a union?",
              "correctAnswer": [
                "special class where all members share same memory location",
                "stores multiple types in same memory"
              ],
              "explanation": "Union allows storing different types in same memory, only one valid at a time.",
              "xp": 5
            },
            {
              "id": "cpp-3-6-20",
              "type": "code",
              "question": "Create a class with both static and instance methods.",
              "correctAnswer": [
                "class MyClass {\\npublic:\\n    static void staticMethod() {}\\n    void instanceMethod() {}\\n};"
              ],
              "explanation": "Classes can have both static (shared) and instance methods.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-21",
              "type": "code",
              "question": "Write a class template with static member variable.",
              "correctAnswer": [
                "template<typename T>\\nclass MyClass {\\npublic:\\n    static T value;\\n};\\ntemplate<typename T>\\nT MyClass<T>::value = T();"
              ],
              "explanation": "Each template specialization gets its own static member variable.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-22",
              "type": "multiple",
              "question": "Does each template specialization have its own static members?",
              "options": [
                "Yes",
                "No",
                "Only if they're const",
                "Only if they're public"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Each template specialization (MyClass<int>, MyClass<double>) gets its own static members.",
              "xp": 5
            },
            {
              "id": "cpp-3-6-23",
              "type": "code",
              "question": "Create a class that can't be copied (delete copy constructor and assignment).",
              "correctAnswer": [
                "class NonCopyable {\\npublic:\\n    NonCopyable() = default;\\n    NonCopyable(const NonCopyable&) = delete;\\n    NonCopyable& operator=(const NonCopyable&) = delete;\\n};"
              ],
              "explanation": "=delete prevents copying, =default keeps default behavior.",
              "xp": 15
            },
            {
              "id": "cpp-3-6-24",
              "type": "typing",
              "question": "What does '= delete' do?",
              "correctAnswer": [
                "prevents a function from being used",
                "deletes a function",
                "removes from class"
              ],
              "explanation": "=delete prevents a special member function from being used (e.g., to prevent copying).",
              "xp": 5
            },
            {
              "id": "cpp-3-6-25",
              "type": "code",
              "question": "Write a class with virtual inheritance to solve diamond problem.",
              "correctAnswer": [
                "class A {\\npublic:\\n    int value;\\n};\\nclass B : virtual public A {};\\nclass C : virtual public A {};\\nclass D : public B, public C {\\npublic:\\n    D() : A() {}\\n};"
              ],
              "explanation": "Virtual inheritance ensures only one base A subobject in D.",
              "xp": 15
            }
          ]
        }
      ]
    },
    {
      "unitId": "4",
      "unitName": "4. Pointers and References",
      "lessons": [
        {
          "id": 19,
          "title": "Memory Model Overview",
          "unitTitle": "4. Pointers and References",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-4-1-1",
              "type": "typing",
              "question": "What is a memory address?",
              "correctAnswer": [
                "unique location in memory",
                "identifier for memory location",
                "hexadecimal number representing location"
              ],
              "explanation": "A memory address is a unique identifier for a specific location in computer memory.",
              "xp": 5
            },
            {
              "id": "cpp-4-1-2",
              "type": "typing",
              "question": "What operator gets the address of a variable?",
              "correctAnswer": [
                "&",
                "address-of operator",
                "ampersand"
              ],
              "explanation": "The & operator (address-of) returns the memory address of a variable.",
              "xp": 5
            },
            {
              "id": "cpp-4-1-3",
              "type": "typing",
              "question": "What is a pointer?",
              "correctAnswer": [
                "variable that stores a memory address",
                "variable containing address of another variable"
              ],
              "explanation": "A pointer is a variable that stores the memory address of another variable.",
              "xp": 5
            },
            {
              "id": "cpp-4-1-4",
              "type": "typing",
              "question": "What is the stack?",
              "correctAnswer": [
                "memory region for local variables",
                "automatic memory allocation",
                "LIFO structure"
              ],
              "explanation": "The stack is a memory region for local variables with automatic allocation and deallocation.",
              "xp": 5
            },
            {
              "id": "cpp-4-1-5",
              "type": "typing",
              "question": "What is the heap?",
              "correctAnswer": [
                "dynamic memory allocation region",
                "memory for manual allocation",
                "free store"
              ],
              "explanation": "The heap is a memory region for dynamic allocation using new/delete.",
              "xp": 5
            },
            {
              "id": "cpp-4-1-6",
              "type": "multiple",
              "question": "Where are local variables stored?",
              "options": [
                "Stack",
                "Heap",
                "Data segment",
                "Code segment"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Local variables are stored on the stack.",
              "xp": 5
            },
            {
              "id": "cpp-4-1-7",
              "type": "multiple",
              "question": "What is the size of a pointer on a 64-bit system?",
              "options": [
                "8 bytes",
                "4 bytes",
                "2 bytes",
                "16 bytes"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Pointers on 64-bit systems are 8 bytes (64 bits).",
              "xp": 5
            },
            {
              "id": "cpp-4-1-8",
              "type": "multiple",
              "question": "What happens to memory on the stack when a function returns?",
              "options": [
                "It's automatically freed",
                "It remains",
                "It becomes heap memory",
                "It needs manual deletion"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Stack memory is automatically freed when the function returns.",
              "xp": 5
            },
            {
              "id": "cpp-4-1-9",
              "type": "multiple",
              "question": "Which is true about heap memory?",
              "options": [
                "Requires manual management",
                "Automatic allocation",
                "Faster than stack",
                "Limited size"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Heap memory requires manual management with new/delete.",
              "xp": 5
            },
            {
              "id": "cpp-4-1-10",
              "type": "multiple",
              "question": "What is a null pointer?",
              "options": [
                "Pointer pointing to nothing",
                "Pointer to null value",
                "Zero pointer",
                "Invalid pointer"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "A null pointer is a pointer that doesn't point to any valid memory.",
              "xp": 5
            },
            {
              "id": "cpp-4-1-11",
              "type": "code",
              "question": "Get the address of integer variable x and store it in pointer p.",
              "correctAnswer": [
                "int* p = &x;",
                "int *p = &x;"
              ],
              "explanation": "Use & operator to get address: int* p = &x;",
              "xp": 15
            },
            {
              "id": "cpp-4-1-12",
              "type": "code",
              "question": "Declare a pointer to an integer.",
              "correctAnswer": [
                "int* p;",
                "int *p;"
              ],
              "explanation": "Pointer declaration: type* name; or type *name;",
              "xp": 15
            },
            {
              "id": "cpp-4-1-13",
              "type": "code",
              "question": "Initialize a pointer to nullptr.",
              "correctAnswer": [
                "int* p = nullptr;",
                "int *p = nullptr;"
              ],
              "explanation": "Initialize pointer with nullptr to ensure it doesn't point to invalid memory.",
              "xp": 15
            },
            {
              "id": "cpp-4-1-14",
              "type": "code",
              "question": "Access the value pointed to by pointer p.",
              "correctAnswer": [
                "*p",
                "int value = *p;"
              ],
              "explanation": "Dereference pointer with * operator to get the value.",
              "xp": 15
            },
            {
              "id": "cpp-4-1-15",
              "type": "code",
              "question": "Modify the value through pointer p (set it to 42).",
              "correctAnswer": [
                "*p = 42;"
              ],
              "explanation": "Dereference and assign: *p = 42;",
              "xp": 15
            },
            {
              "id": "cpp-4-1-16",
              "type": "code",
              "question": "Declare a pointer to double.",
              "correctAnswer": [
                "double* p;",
                "double *p;"
              ],
              "explanation": "Pointer type must match the type it points to.",
              "xp": 15
            },
            {
              "id": "cpp-4-1-17",
              "type": "code",
              "question": "Print the address of variable x.",
              "correctAnswer": [
                "cout << &x;",
                "cout << (void*)&x;"
              ],
              "explanation": "Use & operator to print address with cout.",
              "xp": 15
            },
            {
              "id": "cpp-4-1-18",
              "type": "code",
              "question": "Print the value pointed to by p.",
              "correctAnswer": [
                "cout << *p;"
              ],
              "explanation": "Dereference pointer to print the value.",
              "xp": 15
            },
            {
              "id": "cpp-4-1-19",
              "type": "code",
              "question": "Allocate memory for an integer on the heap.",
              "correctAnswer": [
                "int* p = new int;",
                "int *p = new int;"
              ],
              "explanation": "Use new to allocate heap memory.",
              "xp": 15
            },
            {
              "id": "cpp-4-1-20",
              "type": "code",
              "question": "Free heap memory pointed to by p.",
              "correctAnswer": [
                "delete p;"
              ],
              "explanation": "Use delete to free heap memory allocated with new.",
              "xp": 15
            },
            {
              "id": "cpp-4-1-21",
              "type": "code",
              "question": "Declare and initialize pointer p to point to variable x.",
              "correctAnswer": [
                "int x = 5;\\nint* p = &x;",
                "int x = 5; int *p = &x;"
              ],
              "explanation": "Initialize pointer with address of variable.",
              "xp": 15
            },
            {
              "id": "cpp-4-1-22",
              "type": "code",
              "question": "Check if pointer p is not null before dereferencing.",
              "correctAnswer": [
                "if (p != nullptr)",
                "if (p)",
                "if (p != nullptr) { *p = 10; }"
              ],
              "explanation": "Always check for null before dereferencing to avoid crashes.",
              "xp": 15
            },
            {
              "id": "cpp-4-1-23",
              "type": "code",
              "question": "Allocate array of 10 integers on heap.",
              "correctAnswer": [
                "int* arr = new int[10];",
                "int *arr = new int[10];"
              ],
              "explanation": "Use new[] for array allocation.",
              "xp": 15
            },
            {
              "id": "cpp-4-1-24",
              "type": "code",
              "question": "Delete array allocated with new[].",
              "correctAnswer": [
                "delete[] arr;"
              ],
              "explanation": "Use delete[] for arrays allocated with new[].",
              "xp": 15
            },
            {
              "id": "cpp-4-1-25",
              "type": "code",
              "question": "Assign the address of one pointer to another pointer.",
              "correctAnswer": [
                "int* p2 = p;",
                "int *p2 = p;"
              ],
              "explanation": "Pointers can be assigned, making them point to the same address.",
              "xp": 15
            }
          ],
          "lessonText": "# Memory Model Overview\n\nC++ gives you direct control over memory through pointers. Understanding how memory is organized is crucial for effective programming.\n\n## Memory Layout\n\nA running C++ program's memory is divided into regions:\n\n1. **Code Segment** - Stores program instructions (read-only)\n2. **Data Segment** - Global and static variables\n3. **Stack** - Local variables, function call frames (automatic)\n4. **Heap** - Dynamic memory allocation (manual)\n\n## Memory Addresses\n\nEvery variable in memory has a unique address. In C++, addresses are represented as hexadecimal numbers.\n\n```cpp\nint x = 42;\ncout << &x;  // Prints: 0x7fff1234abcd\n```\n\n## Pointers\n\nA pointer is a variable that stores a memory address. The pointer type indicates what kind of data it points to.\n\n```cpp\nint x = 10;\nint* p = &x;  // p holds address of x\n```\n\n**Declaration:** `type* pointerName;` or `type *pointerName;`\n\n## Stack vs Heap\n\n**Stack:**\n- Automatic allocation/deallocation\n- LIFO (Last In, First Out) structure\n- Limited size\n- Fast access\n- Used for: local variables, function calls\n\n**Heap:**\n- Manual allocation with `new`/`malloc`\n- Manual deallocation with `delete`/`free`\n- Larger size\n- Slightly slower\n- Used for: dynamic data structures, large arrays\n\n## Null Pointers\n\nA null pointer doesn't point to valid memory. Use `nullptr` (C++11) to represent this.\n\n```cpp\nint* p = nullptr;  // p doesn't point anywhere\nif (p != nullptr) {\n    // Safe to use p\n}\n```\n\n## Dynamic Memory Allocation\n\n```cpp\n// Allocate single value\nint* p = new int(42);\ndelete p;\n\n// Allocate array\nint* arr = new int[10];\ndelete[] arr;  // Note the brackets\n```\n\n**Warning:** Forgetting to `delete` causes memory leaks!\n"
        },
        {
          "id": 20,
          "title": "References vs Pointers",
          "unitTitle": "4. Pointers and References",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-4-2-1",
              "type": "typing",
              "question": "What is a reference?",
              "correctAnswer": [
                "alias for another variable",
                "alternative name for variable"
              ],
              "explanation": "A reference is an alias (another name) for an existing variable.",
              "xp": 5
            },
            {
              "id": "cpp-4-2-2",
              "type": "typing",
              "question": "Can a reference be reseated to point to a different variable?",
              "correctAnswer": [
                "no",
                "cannot"
              ],
              "explanation": "References cannot be reseated - they always refer to the same variable.",
              "xp": 5
            },
            {
              "id": "cpp-4-2-3",
              "type": "typing",
              "question": "What symbol declares a reference?",
              "correctAnswer": [
                "&",
                "ampersand"
              ],
              "explanation": "The & symbol declares a reference: int& ref = x;",
              "xp": 5
            },
            {
              "id": "cpp-4-2-4",
              "type": "typing",
              "question": "What must happen when a reference is declared?",
              "correctAnswer": [
                "must be initialized",
                "initialized immediately"
              ],
              "explanation": "References must be initialized when declared - they can't be null.",
              "xp": 5
            },
            {
              "id": "cpp-4-2-5",
              "type": "typing",
              "question": "What is the key difference between references and pointers?",
              "correctAnswer": [
                "references are aliases, pointers hold addresses",
                "references cannot be null"
              ],
              "explanation": "References are aliases to existing variables, while pointers hold memory addresses.",
              "xp": 5
            },
            {
              "id": "cpp-4-2-6",
              "type": "multiple",
              "question": "Which must be initialized at declaration?",
              "options": [
                "References",
                "Pointers",
                "Both",
                "Neither"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "References must be initialized when declared.",
              "xp": 5
            },
            {
              "id": "cpp-4-2-7",
              "type": "multiple",
              "question": "What does modifying a reference do?",
              "options": [
                "Modifies the referenced variable",
                "Modifies the reference itself",
                "Does nothing",
                "Creates a copy"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Modifying a reference modifies the variable it refers to.",
              "xp": 5
            },
            {
              "id": "cpp-4-2-8",
              "type": "multiple",
              "question": "Can you have a null reference?",
              "options": [
                "No",
                "Yes",
                "Only with nullptr",
                "Only with special syntax"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "References cannot be null - they must always refer to a valid object.",
              "xp": 5
            },
            {
              "id": "cpp-4-2-9",
              "type": "multiple",
              "question": "Which is safer: reference or pointer?",
              "options": [
                "Reference",
                "Pointer",
                "Equally safe",
                "Depends on context"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "References are generally safer because they can't be null and can't be reseated.",
              "xp": 5
            },
            {
              "id": "cpp-4-2-10",
              "type": "multiple",
              "question": "What happens when you assign one reference to another?",
              "options": [
                "The referenced variable's value is copied",
                "The reference is reseated",
                "Nothing",
                "Compilation error"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Assigning references copies the referenced value, it doesn't reseat the reference.",
              "xp": 5
            },
            {
              "id": "cpp-4-2-11",
              "type": "code",
              "question": "Create a reference to integer variable x.",
              "correctAnswer": [
                "int& ref = x;",
                "int &ref = x;"
              ],
              "explanation": "Reference declaration with & operator: int& ref = x;",
              "xp": 15
            },
            {
              "id": "cpp-4-2-12",
              "type": "code",
              "question": "Modify variable x through reference ref (set to 100).",
              "correctAnswer": [
                "ref = 100;"
              ],
              "explanation": "Use reference like the original variable: ref = 100;",
              "xp": 15
            },
            {
              "id": "cpp-4-2-13",
              "type": "code",
              "question": "Declare a function that takes an int by reference.",
              "correctAnswer": [
                "void modify(int& x)",
                "void modify(int& x) { }"
              ],
              "explanation": "Reference parameter: void func(type& param)",
              "xp": 15
            },
            {
              "id": "cpp-4-2-14",
              "type": "code",
              "question": "Return a reference from a function.",
              "correctAnswer": [
                "int& getRef() { return globalVar; }",
                "int& getRef() { return x; }"
              ],
              "explanation": "Function can return reference: int& func() { return var; }",
              "xp": 15
            },
            {
              "id": "cpp-4-2-15",
              "type": "code",
              "question": "Create a const reference to int x.",
              "correctAnswer": [
                "const int& ref = x;"
              ],
              "explanation": "const reference prevents modification: const type& ref = x;",
              "xp": 15
            },
            {
              "id": "cpp-4-2-16",
              "type": "code",
              "question": "Write a function that swaps two integers using references.",
              "correctAnswer": [
                "void swap(int& a, int& b) {\\n    int temp = a;\\n    a = b;\\n    b = temp;\\n}"
              ],
              "explanation": "Reference parameters allow function to modify original values.",
              "xp": 15
            },
            {
              "id": "cpp-4-2-17",
              "type": "code",
              "question": "Create a reference to a double variable d.",
              "correctAnswer": [
                "double& ref = d;",
                "double &ref = d;"
              ],
              "explanation": "Reference type must match the variable type.",
              "xp": 15
            },
            {
              "id": "cpp-4-2-18",
              "type": "code",
              "question": "Pass a string by const reference (efficient, no modification).",
              "correctAnswer": [
                "void print(const string& s)",
                "void print(const string& s) { }"
              ],
              "explanation": "const reference avoids copying while preventing modification.",
              "xp": 15
            },
            {
              "id": "cpp-4-2-19",
              "type": "code",
              "question": "Initialize a reference with an existing pointer's value.",
              "correctAnswer": [
                "int& ref = *p;",
                "int &ref = *p;"
              ],
              "explanation": "Dereference pointer to get value, then create reference.",
              "xp": 15
            },
            {
              "id": "cpp-4-2-20",
              "type": "code",
              "question": "Return reference to a global variable.",
              "correctAnswer": [
                "int& getGlobal() { return global; }"
              ],
              "explanation": "Function can return reference to global variable.",
              "xp": 15
            },
            {
              "id": "cpp-4-2-21",
              "type": "code",
              "question": "Use a reference to modify array element.",
              "correctAnswer": [
                "int& element = arr[5];\\nelement = 10;",
                "int& ref = arr[i]; ref = value;"
              ],
              "explanation": "Create reference to array element, then modify it.",
              "xp": 15
            },
            {
              "id": "cpp-4-2-22",
              "type": "code",
              "question": "Create a function that returns the larger of two references.",
              "correctAnswer": [
                "int& max(int& a, int& b) {\\n    return (a > b) ? a : b;\\n}"
              ],
              "explanation": "Return reference to the larger value.",
              "xp": 15
            },
            {
              "id": "cpp-4-2-23",
              "type": "code",
              "question": "Use range-based for loop with reference to modify vector.",
              "correctAnswer": [
                "for (int& x : vec) { x *= 2; }"
              ],
              "explanation": "Reference in range-based for allows modification.",
              "xp": 15
            },
            {
              "id": "cpp-4-2-24",
              "type": "code",
              "question": "Create a reference to pointer p (reference to pointer).",
              "correctAnswer": [
                "int*& ref = p;",
                "int *&ref = p;"
              ],
              "explanation": "Reference to pointer: type*& ref = ptr;",
              "xp": 15
            },
            {
              "id": "cpp-4-2-25",
              "type": "code",
              "question": "Pass a vector by reference to a function.",
              "correctAnswer": [
                "void process(vector<int>& v)",
                "void process(vector<int>& v) { }"
              ],
              "explanation": "Pass vector by reference to avoid copying.",
              "xp": 15
            }
          ],
          "lessonText": "# References vs Pointers\n\nBoth references and pointers allow indirect access to variables, but they have important differences.\n\n## References\n\nA reference is an **alias** for an existing variable.\n\n```cpp\nint x = 10;\nint& ref = x;  // ref is now an alias for x\nref = 20;      // This changes x to 20\n```\n\n**Key Characteristics:**\n- Must be initialized when declared\n- Cannot be null\n- Cannot be reseated (always refers to same variable)\n- No separate memory overhead\n- Used with `&` in declaration\n\n## Pointers\n\nA pointer holds a **memory address**.\n\n```cpp\nint x = 10;\nint* p = &x;    // p holds address of x\n*p = 20;        // Dereference to modify x\np = nullptr;    // p can be reseated\n```\n\n**Key Characteristics:**\n- Can be uninitialized (dangerous)\n- Can be null (`nullptr`)\n- Can be reseated to point elsewhere\n- Has its own memory address\n- Used with `*` in declaration\n\n## Comparison\n\n| Feature | Reference | Pointer |\n|---------|-----------|---------|\n| Initialization | Required | Optional |\n| Can be null | No | Yes |\n| Can be reseated | No | Yes |\n| Memory overhead | None | Size of address |\n| Syntax | `&` in declaration | `*` in declaration |\n| Dereference | Implicit (just use name) | Explicit (`*ptr`) |\n\n## When to Use References\n\n✅ **Use references when:**\n- Passing large objects to functions (avoid copy)\n- Function needs to modify parameters\n- Working with operators\n- Return values that can be modified\n\n```cpp\nvoid swap(int& a, int& b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n```\n\n## When to Use Pointers\n\n✅ **Use pointers when:**\n- Need optional values (can be null)\n- Need to change what's pointed to (reseat)\n- Working with arrays\n- Dynamic memory allocation\n- Implementing data structures\n\n```cpp\nint* p = nullptr;  // Optional value\np = new int(42);   // Can reseat\ndelete p;          // Manual management\n```\n\n## Reference Parameters\n\nPass by reference allows functions to modify original values:\n\n```cpp\nvoid increment(int& x) {\n    x++;  // Modifies caller's variable\n}\n\nint num = 5;\nincrement(num);  // num is now 6\n```\n\n## Const References\n\n`const` reference prevents modification while avoiding copy:\n\n```cpp\nvoid print(const string& s) {\n    cout << s;  // Can read but not modify s\n}\n```\n\n**Best Practice:** Use `const T&` for large objects you don't need to modify.\n"
        },
        {
          "id": 21,
          "title": "Pointer Arithmetic",
          "unitTitle": "4. Pointers and References",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-4-3-1",
              "type": "typing",
              "question": "What is pointer arithmetic?",
              "correctAnswer": [
                "mathematical operations on pointers",
                "adding/subtracting integers from pointers"
              ],
              "explanation": "Pointer arithmetic allows you to add or subtract integers from pointers to navigate memory.",
              "xp": 5
            },
            {
              "id": "cpp-4-3-2",
              "type": "typing",
              "question": "When you add 1 to an int pointer, how many bytes does it advance?",
              "correctAnswer": [
                "sizeof(int)",
                "4 bytes",
                "size of int"
              ],
              "explanation": "Pointer arithmetic advances by the size of the pointed-to type.",
              "xp": 5
            },
            {
              "id": "cpp-4-3-3",
              "type": "typing",
              "question": "What does p++ do to a pointer p?",
              "correctAnswer": [
                "moves to next element",
                "increments by sizeof type"
              ],
              "explanation": "p++ advances the pointer to point to the next element of that type.",
              "xp": 5
            },
            {
              "id": "cpp-4-3-4",
              "type": "typing",
              "question": "Can you subtract two pointers of the same type?",
              "correctAnswer": [
                "yes",
                "can subtract"
              ],
              "explanation": "You can subtract two pointers of the same type - the result is the number of elements between them.",
              "xp": 5
            },
            {
              "id": "cpp-4-3-5",
              "type": "typing",
              "question": "What is the result of subtracting two pointers?",
              "correctAnswer": [
                "number of elements between them",
                "difference in elements"
              ],
              "explanation": "Pointer subtraction returns the number of elements between the two pointers.",
              "xp": 5
            },
            {
              "id": "cpp-4-3-6",
              "type": "multiple",
              "question": "What does p + 1 do for an int* pointer?",
              "options": [
                "Moves 4 bytes ahead",
                "Moves 1 byte ahead",
                "Moves to next int",
                "Both A and C"
              ],
              "correctAnswer": [
                3
              ],
              "explanation": "p + 1 moves the pointer to the next int (4 bytes on most systems).",
              "xp": 5
            },
            {
              "id": "cpp-4-3-7",
              "type": "multiple",
              "question": "Can you multiply two pointers?",
              "options": [
                "No",
                "Yes",
                "Only if same type",
                "Only with special operators"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Pointer multiplication is not allowed.",
              "xp": 5
            },
            {
              "id": "cpp-4-3-8",
              "type": "multiple",
              "question": "What is *(p + 1) equivalent to?",
              "options": [
                "p[1]",
                "p + 1",
                "*p + 1",
                "p++"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "*(p + 1) is equivalent to p[1] - both access the next element.",
              "xp": 5
            },
            {
              "id": "cpp-4-3-9",
              "type": "multiple",
              "question": "Can you perform pointer arithmetic on void pointers?",
              "options": [
                "No",
                "Yes",
                "Only with cast",
                "Only in C"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Pointer arithmetic is not allowed on void* because the size is unknown.",
              "xp": 5
            },
            {
              "id": "cpp-4-3-10",
              "type": "multiple",
              "question": "What does p-- do?",
              "options": [
                "Moves to previous element",
                "Decrements pointed value",
                "Invalid",
                "Same as --*p"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "p-- moves the pointer to point to the previous element.",
              "xp": 5
            },
            {
              "id": "cpp-4-3-11",
              "type": "code",
              "question": "Increment pointer p to point to the next int.",
              "correctAnswer": [
                "p++;",
                "++p;"
              ],
              "explanation": "Use ++ to advance pointer to next element.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-12",
              "type": "code",
              "question": "Access the 5th element using pointer arithmetic.",
              "correctAnswer": [
                "*(p + 4)",
                "p[4]"
              ],
              "explanation": "*(p + 4) or p[4] accesses the 5th element (index 4).",
              "xp": 15
            },
            {
              "id": "cpp-4-3-13",
              "type": "code",
              "question": "Calculate difference between two int pointers p1 and p2.",
              "correctAnswer": [
                "int diff = p2 - p1;",
                "ptrdiff_t diff = p2 - p1;"
              ],
              "explanation": "Subtract pointers to get element count between them.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-14",
              "type": "code",
              "question": "Move pointer p back by 2 elements.",
              "correctAnswer": [
                "p -= 2;",
                "p = p - 2;"
              ],
              "explanation": "Subtract integer from pointer to move backward.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-15",
              "type": "code",
              "question": "Print value at index 3 using pointer p pointing to start of array.",
              "correctAnswer": [
                "cout << *(p + 3);",
                "cout << p[3];"
              ],
              "explanation": "Use *(p + 3) or p[3] to access element at index 3.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-16",
              "type": "code",
              "question": "Iterate through array of 5 ints using pointer arithmetic.",
              "correctAnswer": [
                "for (int* p = arr; p < arr + 5; p++) { *p = 0; }",
                "int* p = arr;\\nfor (int i = 0; i < 5; i++) {\\n    *(p + i) = 0;\\n}"
              ],
              "explanation": "Use pointer comparison to iterate through array.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-17",
              "type": "code",
              "question": "Add 3 to pointer p.",
              "correctAnswer": [
                "p += 3;",
                "p = p + 3;"
              ],
              "explanation": "p += 3 advances pointer by 3 elements.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-18",
              "type": "code",
              "question": "Compare two pointers p1 and p2 for equality.",
              "correctAnswer": [
                "if (p1 == p2)",
                "p1 == p2"
              ],
              "explanation": "Pointers can be compared using ==, !=, <, >, <=, >=",
              "xp": 15
            },
            {
              "id": "cpp-4-3-19",
              "type": "code",
              "question": "Find end of array using pointer arithmetic (5 elements).",
              "correctAnswer": [
                "int* end = arr + 5;",
                "int* end = arr + sizeof(arr)/sizeof(arr[0]);"
              ],
              "explanation": "arr + size gives pointer past last element.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-20",
              "type": "code",
              "question": "Access element using p[2] where p points to arr.",
              "correctAnswer": [
                "int value = p[2];",
                "p[2]"
              ],
              "explanation": "Pointer can be used like array with [] operator.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-21",
              "type": "code",
              "question": "Sum all array elements using pointer arithmetic (5 elements).",
              "correctAnswer": [
                "int sum = 0;\\nfor (int* p = arr; p < arr + 5; p++) {\\n    sum += *p;\\n}"
              ],
              "explanation": "Iterate with pointer, dereference each element.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-22",
              "type": "code",
              "question": "Check if pointer p is before pointer end.",
              "correctAnswer": [
                "if (p < end)",
                "p < end"
              ],
              "explanation": "Use < to check if pointer is before another.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-23",
              "type": "code",
              "question": "Decrement pointer p to previous element.",
              "correctAnswer": [
                "p--;",
                "--p;"
              ],
              "explanation": "Use -- to move pointer to previous element.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-24",
              "type": "code",
              "question": "Set value at *(p + 1) to 100.",
              "correctAnswer": [
                "*(p + 1) = 100;",
                "p[1] = 100;"
              ],
              "explanation": "Dereference and assign.",
              "xp": 15
            },
            {
              "id": "cpp-4-3-25",
              "type": "code",
              "question": "Iterate backwards through array using pointer arithmetic.",
              "correctAnswer": [
                "for (int* p = arr + 4; p >= arr; p--) { cout << *p; }",
                "int* end = arr + 4;\\nfor (int* p = end; p >= arr; p--) {\\n    cout << *p << \" \";\\n}"
              ],
              "explanation": "Start at last element, decrement pointer.",
              "xp": 15
            }
          ],
          "lessonText": "# Pointer Arithmetic\n\nPointer arithmetic allows you to perform mathematical operations on pointers to navigate through memory.\n\n## Basic Operations\n\n```cpp\nint arr[5] = {10, 20, 30, 40, 50};\nint* p = arr;  // p points to arr[0]\n\np++;      // p now points to arr[1]\np + 2;    // Points to arr[3]\np - 1;    // Points back to arr[0]\n```\n\n## How It Works\n\nWhen you add or subtract from a pointer, the operation advances by the size of the pointed-to type:\n\n```cpp\nint* p = arr;    // arr = 0x1000\np++;             // p = 0x1004 (4 bytes for int)\n*(p + 2);        // Accesses arr[2] at 0x1008\n```\n\n**Formula:** `new_address = old_address + (offset * sizeof(type))`\n\n## Array-Pointer Equivalence\n\n```cpp\narr[3]   // Array subscript\n*(arr + 3)  // Pointer arithmetic (equivalent)\n```\n\n## Pointer Subtraction\n\n```cpp\nint arr[10] = {0};\nint* p1 = &arr[0];\nint* p2 = &arr[7];\n\nptrdiff_t diff = p2 - p1;  // diff = 7\n```\n\nPointer subtraction returns the **number of elements** between the pointers, not the byte difference.\n\n## Looping with Pointers\n\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\n\n// Method 1: Pointer arithmetic\nfor (int* p = arr; p < arr + 5; p++) {\n    cout << *p << \" \";\n}\n\n// Method 2: Index notation\nfor (int* p = arr; p < arr + 5; p++) {\n    cout << p[0] << \" \";\n}\n```\n\n## Pointer Comparison\n\nYou can compare pointers using relational operators:\n\n```cpp\nint* p1 = &arr[0];\nint* p2 = &arr[4];\n\nif (p1 < p2)    // true - p1 points to earlier element\nif (p1 == p2)   // false - different addresses\nif (p1 != p2)   // true - different addresses\n```\n\n## Important Rules\n\n✅ **Allowed:**\n- Adding/subtracting integers from pointers\n- Subtracting two pointers of the same type\n- Comparing pointers of the same type\n- Using pointers as arrays with []\n\n❌ **Not Allowed:**\n- Adding two pointers\n- Multiplying pointers\n- Dividing pointers\n- Pointer arithmetic on `void*`\n\n## Common Patterns\n\n**Reverse iteration:**\n```cpp\nfor (int* p = arr + 4; p >= arr; p--) {\n    cout << *p << \" \";\n}\n```\n\n**Find array length with pointers:**\n```cpp\nint arr[] = {1, 2, 3, 4, 5};\nint* begin = arr;\nint* end = arr + 5;  // Pointer past last element\nsize_t len = end - begin;  // len = 5\n```\n"
        },
        {
          "id": 22,
          "title": "const Correctness",
          "unitTitle": "4. Pointers and References",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-4-4-1",
              "question": "What does const mean?",
              "type": "typing",
              "correctAnswer": [
                "cannot be modified",
                "read-only"
              ],
              "explanation": "const means the value cannot be modified after initialization.",
              "xp": 5
            },
            {
              "id": "cpp-4-4-2",
              "question": "What is const int* p?",
              "type": "typing",
              "correctAnswer": [
                "pointer to const int",
                "pointer to constant integer"
              ],
              "explanation": "const int* p is a pointer to a constant integer - you can't modify the value through p.",
              "xp": 5
            },
            {
              "id": "cpp-4-4-3",
              "question": "What is int* const p?",
              "type": "typing",
              "correctAnswer": [
                "const pointer to int",
                "pointer that cannot be reassigned"
              ],
              "explanation": "int* const p is a constant pointer - p itself cannot be changed to point elsewhere.",
              "xp": 5
            },
            {
              "id": "cpp-4-4-4",
              "question": "What does const in function parameters do?",
              "type": "typing",
              "correctAnswer": [
                "prevents modification",
                "read-only parameter"
              ],
              "explanation": "const parameters ensure the function won't modify the passed value.",
              "xp": 5
            },
            {
              "id": "cpp-4-4-5",
              "question": "Why use const references for large objects?",
              "type": "typing",
              "correctAnswer": [
                "avoid copying while preventing modification",
                "efficiency",
                "both"
              ],
              "explanation": "const references avoid copying large objects while preventing modification.",
              "xp": 5
            },
            {
              "id": "cpp-4-4-6",
              "question": "Which pointer declaration allows modifying the pointed value?",
              "options": [
                "int* p",
                "const int* p",
                "int* const p",
                "Both A and C"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "int* p allows modifying the value through the pointer.",
              "xp": 5
            },
            {
              "id": "cpp-4-4-7",
              "question": "Which pointer declaration allows changing what the pointer points to?",
              "options": [
                "int* p",
                "const int* p",
                "int* const p",
                "Both A and B"
              ],
              "correctAnswer": [
                2
              ],
              "explanation": "int* const p allows changing what's pointed to (but not p itself).",
              "xp": 5
            },
            {
              "id": "cpp-4-4-8",
              "question": "Can you modify a const variable?",
              "options": [
                "No",
                "Yes",
                "Only with cast",
                "Only if initialized"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "const variables cannot be modified.",
              "xp": 5
            },
            {
              "id": "cpp-4-4-9",
              "question": "What happens if you try to modify through const int*?",
              "options": [
                "Compilation error",
                "Runtime error",
                "Undefined behavior",
                "Nothing"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "The compiler will prevent modification through const pointers.",
              "xp": 5
            },
            {
              "id": "cpp-4-4-10",
              "question": "Where should const be placed: const int* p vs int* const p?",
              "options": [
                "Before *: value const, After *: pointer const",
                "Opposite",
                "Same meaning",
                "No difference"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Before *: value is const, After *: pointer is const.",
              "xp": 5
            },
            {
              "id": "cpp-4-4-11",
              "type": "code",
              "question": "Declare a pointer to constant int.",
              "correctAnswer": [
                "const int* p;",
                "int const* p;"
              ],
              "explanation": "const int* p prevents modification through the pointer.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-12",
              "type": "code",
              "question": "Declare a constant pointer to int.",
              "correctAnswer": [
                "int* const p = &x;"
              ],
              "explanation": "int* const p must be initialized and cannot be reassigned.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-13",
              "type": "code",
              "question": "Pass a string by const reference.",
              "correctAnswer": [
                "void func(const string& s)",
                "void func(const string& s) { }"
              ],
              "explanation": "const string& avoids copy and prevents modification.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-14",
              "type": "code",
              "question": "Declare a const member function.",
              "correctAnswer": [
                "int getValue() const",
                "int getValue() const { return value; }"
              ],
              "explanation": "const member function promises not to modify member variables.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-15",
              "type": "code",
              "question": "Create a const reference to int x.",
              "correctAnswer": [
                "const int& ref = x;",
                "const int &ref = x;"
              ],
              "explanation": "const reference prevents modification of x through ref.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-16",
              "type": "code",
              "question": "Return const reference from function.",
              "correctAnswer": [
                "const int& getRef() const",
                "const int& getRef() const { return val; }"
              ],
              "explanation": "const reference return prevents modification of returned value.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-17",
              "type": "code",
              "question": "Pass int pointer by const reference.",
              "correctAnswer": [
                "void func(const int*& p)",
                "void func(const int*& p) { }"
              ],
              "explanation": "const reference to pointer prevents modifying the pointer.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-18",
              "type": "code",
              "question": "Pass pointer to const int by value.",
              "correctAnswer": [
                "void func(const int* p)",
                "void func(const int* p) { }"
              ],
              "explanation": "Pointer to const prevents modifying pointed value.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-19",
              "type": "code",
              "question": "Create const int and pointer to it.",
              "correctAnswer": [
                "const int x = 10;\\nconst int* p = &x;",
                "const int x = 10; int const* p = &x;"
              ],
              "explanation": "Use const pointer to point to const value.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-20",
              "type": "code",
              "question": "Declare function that doesn't modify member variables.",
              "correctAnswer": [
                "int get() const",
                "void print() const",
                "int get() const { return value; }"
              ],
              "explanation": "Add const to member function declaration.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-21",
              "type": "code",
              "question": "Pass vector by const reference.",
              "correctAnswer": [
                "void func(const vector<int>& v)",
                "void func(const vector<int>& v) { }"
              ],
              "explanation": "const vector& avoids copy and prevents modification.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-22",
              "type": "code",
              "question": "Create const pointer to constant int.",
              "correctAnswer": [
                "const int* const p = &x;",
                "int const* const p = &x;"
              ],
              "explanation": "Both pointer and value are const.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-23",
              "type": "code",
              "question": "Read through pointer to const int (print value).",
              "correctAnswer": [
                "cout << *p;",
                "cout << *p << endl;"
              ],
              "explanation": "You can read through const pointer, just not write.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-24",
              "type": "code",
              "question": "Pass array by const pointer.",
              "correctAnswer": [
                "void func(const int* arr, int size)",
                "void func(const int* arr, int size) { }"
              ],
              "explanation": "const int* prevents modification of array elements.",
              "xp": 15
            },
            {
              "id": "cpp-4-4-25",
              "type": "code",
              "question": "Declare const member variable and const getter.",
              "correctAnswer": [
                "const int value;\\nint getValue() const { return value; }"
              ],
              "explanation": "const member variable with const getter function.",
              "xp": 15
            }
          ],
          "lessonText": "# const Correctness\n\n`const` is a powerful tool for writing safer, clearer code by making your intentions explicit.\n\n## const Variables\n\n```cpp\nconst int MAX = 100;  // Cannot be modified\nMAX = 200;  // Compilation error!\n```\n\n## Pointers and const\n\n### 1. Pointer to const: `const int* p`\n\nThe value cannot be modified through the pointer.\n\n```cpp\nint x = 10;\nconst int* p = &x;\n\n*p = 20;  // Error: cannot modify\np = &y;   // OK: pointer can be changed\n```\n\n**Memory aid:** \"const on the left protects the value\"\n\n### 2. Const pointer: `int* const p`\n\nThe pointer cannot be changed to point elsewhere.\n\n```cpp\nint x = 10;\nint* const p = &x;  // Must initialize!\n\np = &y;   // Error: cannot reseat pointer\n*p = 20;  // OK: value can be modified\n```\n\n**Memory aid:** \"const on the right protects the pointer\"\n\n### 3. Both: `const int* const p`\n\nNeither the pointer nor the value can be changed.\n\n```cpp\nint x = 10;\nconst int* const p = &x;\n\np = &y;   // Error: cannot reseat\n*p = 20;  // Error: cannot modify\n```\n\n## const in Function Parameters\n\n### const Reference (Best Practice)\n\n```cpp\nvoid print(const string& s) {\n    cout << s;  // Can read\n    // s = \"new\";  // Error: cannot modify\n}\n```\n\n**Benefits:**\n- Avoids copying large objects\n- Guarantees function won't modify\n- Makes intent clear to readers\n\n### const Pointer Parameter\n\n```cpp\nvoid process(const int* arr, int size) {\n    for (int i = 0; i < size; i++) {\n        cout << arr[i];  // Can read\n        // arr[i] = 10;  // Error: cannot modify\n    }\n}\n```\n\n## const Member Functions\n\nMember functions marked `const` promise not to modify the object.\n\n```cpp\nclass Point {\nprivate:\n    int x, y;\npublic:\n    int getX() const {  // Promises not to modify\n        return x;\n    }\n    \n    void move(int dx, int dy) {  // Not const - modifies object\n        x += dx;\n        y += dy;\n    }\n};\n```\n\n**When to use:**\n- Getter functions\n- Functions that only read member variables\n- Functions called on const objects\n\n## const Return Values\n\n```cpp\nconst int& getValue() const {\n    return value;  // Caller cannot modify\n}\n\n// This prevents:\nobj.getValue() = 42;  // Error!\n```\n\n## Best Practices\n\n✅ **DO:**\n- Use `const` for values that shouldn't change\n- Pass large objects by `const T&`\n- Mark getter functions as `const`\n- Use `const` to document intent\n\n❌ **DON'T:**\n- Use `const` when you need to modify\n- Overuse `const` to the point of confusion\n- Cast away const unless absolutely necessary\n\n## Summary Table\n\n| Declaration | Can modify value? | Can change pointer? |\n|-------------|-------------------|---------------------|\n| `int* p` | ✅ Yes | ✅ Yes |\n| `const int* p` | ❌ No | ✅ Yes |\n| `int* const p` | ✅ Yes | ❌ No |\n| `const int* const p` | ❌ No | ❌ No |\n\n## const and Performance\n\n`const` doesn't just prevent bugs - it can help the compiler optimize:\n\n```cpp\nconst int N = 100;\nint arr[N];  // Compiler knows size won't change\n```\n\nThe compiler can make assumptions and optimizations knowing `const` values won't change.\n"
        },
        {
          "id": 23,
          "title": "nullptr and Null Safety",
          "unitTitle": "4. Pointers and References",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-4-5-1",
              "type": "typing",
              "question": "What is nullptr?",
              "correctAnswer": [
                "C++ null pointer value",
                "null pointer literal"
              ],
              "explanation": "nullptr is a null pointer literal introduced in C++11, representing a pointer that points to nothing.",
              "xp": 5
            },
            {
              "id": "cpp-4-5-2",
              "type": "typing",
              "question": "What happens if you dereference a null pointer?",
              "correctAnswer": [
                "crash",
                "segmentation fault",
                "undefined behavior"
              ],
              "explanation": "Dereferencing a null pointer causes undefined behavior, typically a crash.",
              "xp": 5
            },
            {
              "id": "cpp-4-5-3",
              "type": "typing",
              "question": "How do you check if a pointer is null?",
              "correctAnswer": [
                "if (p == nullptr)",
                "if (!p)",
                "if (p == nullptr)"
              ],
              "explanation": "Check if pointer equals nullptr before using it.",
              "xp": 5
            },
            {
              "id": "cpp-4-5-4",
              "type": "typing",
              "question": "Why is nullptr preferred over NULL or 0?",
              "correctAnswer": [
                "type safe",
                "better type checking"
              ],
              "explanation": "nullptr is type-safe and avoids overload resolution issues.",
              "xp": 5
            },
            {
              "id": "cpp-4-5-5",
              "type": "typing",
              "question": "What is the ternary operator?",
              "correctAnswer": [
                "conditional operator",
                "?: operator"
              ],
              "explanation": "The ternary operator (?:) is a conditional expression: condition ? value1 : value2",
              "xp": 5
            },
            {
              "id": "cpp-4-5-6",
              "type": "multiple",
              "question": "What does nullptr evaluate to in boolean context?",
              "options": [
                "false",
                "true",
                "error",
                "depends"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "nullptr evaluates to false in boolean context.",
              "xp": 5
            },
            {
              "id": "cpp-4-5-7",
              "type": "multiple",
              "question": "What is wrong with this: int* p = NULL;",
              "options": [
                "NULL is not type-safe",
                "Nothing",
                "Should be 0",
                "Need to allocate"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "NULL is a macro, nullptr is type-safe and preferred in C++11+.",
              "xp": 5
            },
            {
              "id": "cpp-4-5-8",
              "type": "multiple",
              "question": "What is the ternary operator syntax?",
              "options": [
                "condition ? expr1 : expr2",
                "condition : expr1 ? expr2",
                "if ? then : else",
                "condition then : else"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Ternary operator: condition ? expr_if_true : expr_if_false",
              "xp": 5
            },
            {
              "id": "cpp-4-5-9",
              "type": "multiple",
              "question": "What is dangling pointer?",
              "options": [
                "Pointer to freed memory",
                "Null pointer",
                "Uninitialized pointer",
                "Const pointer"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "A dangling pointer points to memory that has been freed or gone out of scope.",
              "xp": 5
            },
            {
              "id": "cpp-4-5-10",
              "type": "multiple",
              "question": "What is memory leak?",
              "options": [
                "Allocated memory not freed",
                "Null pointer",
                "Stack overflow",
                "Segmentation fault"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Memory leak occurs when allocated memory is not freed.",
              "xp": 5
            },
            {
              "id": "cpp-4-5-11",
              "type": "code",
              "question": "Initialize a pointer to nullptr.",
              "correctAnswer": [
                "int* p = nullptr;",
                "int *p = nullptr;"
              ],
              "explanation": "Always initialize pointers to nullptr to avoid undefined behavior.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-12",
              "type": "code",
              "question": "Check if pointer p is not null before dereferencing.",
              "correctAnswer": [
                "if (p != nullptr)",
                "if (p)",
                "if (p != nullptr) { *p = 10; }"
              ],
              "explanation": "Always check for nullptr before dereferencing.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-13",
              "type": "code",
              "question": "Use ternary operator to return pointer or nullptr.",
              "correctAnswer": [
                "return (valid) ? p : nullptr;",
                "return valid ? p : nullptr;"
              ],
              "explanation": "Ternary: condition ? value_if_true : value_if_false",
              "xp": 15
            },
            {
              "id": "cpp-4-5-14",
              "type": "code",
              "question": "Safely delete a pointer if not null.",
              "correctAnswer": [
                "if (p != nullptr) { delete p; p = nullptr; }",
                "delete p; p = nullptr;"
              ],
              "explanation": "Check for nullptr, delete, then set to nullptr.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-15",
              "type": "code",
              "question": "Pass pointer that can be null (optional parameter).",
              "correctAnswer": [
                "void func(int* p = nullptr)",
                "void func(int* p = nullptr) { }"
              ],
              "explanation": "nullptr default allows optional pointer parameter.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-16",
              "type": "code",
              "question": "Return null pointer from function if condition fails.",
              "correctAnswer": [
                "if (error) return nullptr;",
                "return nullptr;"
              ],
              "explanation": "Return nullptr to indicate failure or no value.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-17",
              "type": "code",
              "question": "Set pointer to null after deleting.",
              "correctAnswer": [
                "delete p; p = nullptr;",
                "delete[] arr; arr = nullptr;"
              ],
              "explanation": "Set pointer to nullptr after deletion to avoid dangling pointer.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-18",
              "type": "code",
              "question": "Use ternary to assign value based on condition.",
              "correctAnswer": [
                "int x = (a > b) ? a : b;",
                "int x = a > b ? a : b;"
              ],
              "explanation": "Ternary operator for conditional assignment.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-19",
              "type": "code",
              "question": "Check pointer validity before use in function.",
              "correctAnswer": [
                "if (p == nullptr) return error;",
                "if (!p) return;"
              ],
              "explanation": "Check for nullptr at start of function.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-20",
              "type": "code",
              "question": "Create function that returns pointer or nullptr.",
              "correctAnswer": [
                "int* find(int key) {\\n    if (found) return &item;\\n    return nullptr;\\n}"
              ],
              "explanation": "Return nullptr when item not found.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-21",
              "type": "code",
              "question": "Initialize all pointers in an array to nullptr.",
              "correctAnswer": [
                "int* arr[5] = {nullptr, nullptr, nullptr, nullptr, nullptr};",
                "int* arr[5] = {};"
              ],
              "explanation": "Initialize array of pointers to nullptr.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-22",
              "type": "code",
              "question": "Use ternary in return statement.",
              "correctAnswer": [
                "return (x > 0) ? &x : nullptr;",
                "return x > 0 ? &x : nullptr;"
              ],
              "explanation": "Ternary can be used in return statements.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-23",
              "type": "code",
              "question": "Check multiple pointers for null before using.",
              "correctAnswer": [
                "if (p1 && p2 && p3)",
                "if (p1 != nullptr && p2 != nullptr)"
              ],
              "explanation": "Check all pointers are valid before using.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-24",
              "type": "code",
              "question": "Reset pointer to nullptr after processing.",
              "correctAnswer": [
                "p = nullptr;"
              ],
              "explanation": "Set pointer to nullptr to clear it.",
              "xp": 15
            },
            {
              "id": "cpp-4-5-25",
              "type": "code",
              "question": "Use nullptr in comparison with pointer.",
              "correctAnswer": [
                "if (p == nullptr)",
                "if (p != nullptr)",
                "p == nullptr"
              ],
              "explanation": "Compare pointer with nullptr to check validity.",
              "xp": 15
            }
          ],
          "lessonText": "# nullptr and Null Safety\n\nNull safety is crucial when working with pointers. A null pointer doesn't point to valid memory and dereferencing it causes crashes.\n\n## nullptr (C++11)\n\n`nullptr` is a null pointer literal, representing a pointer that points to nothing.\n\n```cpp\nint* p = nullptr;  // Modern C++ style\nint* p = NULL;     // Old style (macro)\nint* p = 0;        // Older style\n```\n\n**Why nullptr?**\n- Type-safe (has its own type: `std::nullptr_t`)\n- Better overload resolution\n- Clearer intent\n- No ambiguity with integers\n\n## Checking for Null\n\nAlways check before dereferencing:\n\n```cpp\nint* p = nullptr;\n// ... some code that may or may not set p ...\n\nif (p != nullptr) {  // Check for null\n    *p = 10;         // Safe to dereference\n}\n```\n\n**Boolean context:**\n```cpp\nif (p) {        // true if p is not nullptr\n    // Safe to use\n}\n\nif (!p) {       // true if p is nullptr\n    // Pointer is null\n}\n```\n\n## Ternary Operator\n\nThe ternary operator `?:` is useful for conditional expressions:\n\n```cpp\n// Syntax: condition ? expr_if_true : expr_if_false\n\nint max = (a > b) ? a : b;\n\n// With pointers:\nint* p = (isValid) ? &value : nullptr;\n```\n\n**Common patterns:**\n```cpp\n// Conditional return\nreturn (found) ? &item : nullptr;\n\n// Conditional assignment\nint* p = (ptr1 != nullptr) ? ptr1 : ptr2;\n```\n\n## Null Safety Best Practices\n\n### 1. Always Initialize\n\n```cpp\nint* p = nullptr;  // ✅ Good\nint* p;            // ❌ Bad - uninitialized\n```\n\n### 2. Always Check Before Use\n\n```cpp\nvoid process(int* p) {\n    if (p == nullptr) {  // Check at start\n        return;  // Handle null case\n    }\n    *p = 10;  // Safe to use\n}\n```\n\n### 3. Reset After Deletion\n\n```cpp\ndelete p;\np = nullptr;  // Prevent dangling pointer\n```\n\n### 4. Use nullptr for Optional Parameters\n\n```cpp\nvoid configure(int* p = nullptr) {\n    if (p != nullptr) {\n        *p = 10;\n    }\n    // Works with or without parameter\n}\n```\n\n## Common Pointer Problems\n\n### Dangling Pointer\n\n```cpp\nint* p = new int(10);\ndelete p;\n*p = 20;  // ❌ Undefined behavior - dangling pointer!\n\n// Fix:\ndelete p;\np = nullptr;  // ✅ Reset to prevent use\n```\n\n### Memory Leak\n\n```cpp\nvoid leak() {\n    int* p = new int(10);\n    // ❌ Forgot delete - memory leak!\n}\n\n// Fix:\nvoid noLeak() {\n    int* p = new int(10);\n    delete p;  // ✅ Free memory\n}\n```\n\n### Double Deletion\n\n```cpp\nint* p = new int(10);\ndelete p;\ndelete p;  // ❌ Undefined behavior!\n\n// Fix:\ndelete p;\np = nullptr;  // ✅ Safe to delete nullptr\n```\n\n## Null Pointer vs nullptr\n\n| Feature | nullptr | NULL |\n|---------|----------|------|\n| Type | `std::nullptr_t` | Macro (usually 0) |\n| Type-safe | ✅ Yes | ❌ No |\n| Overload resolution | ✅ Works | ❌ Issues |\n| C++ Standard | C++11+ | Pre-C++11 |\n\n## Summary\n\n✅ **Always:**\n- Initialize pointers to nullptr\n- Check for nullptr before dereferencing\n- Reset to nullptr after deletion\n- Use nullptr (not NULL or 0)\n\n❌ **Never:**\n- Dereference without checking\n- Use uninitialized pointers\n- Forget to delete allocated memory\n- Delete the same pointer twice\n"
        },
        {
          "id": 24,
          "title": "Pointer Pitfalls",
          "unitTitle": "4. Pointers and References",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-4-6-1",
              "type": "typing",
              "question": "What is a dangling pointer?",
              "correctAnswer": [
                "pointer to freed memory",
                "pointer to invalid memory"
              ],
              "explanation": "A dangling pointer points to memory that has been freed or gone out of scope.",
              "xp": 5
            },
            {
              "id": "cpp-4-6-2",
              "type": "typing",
              "question": "What causes memory leak?",
              "correctAnswer": [
                "forgetting to delete allocated memory",
                "not freeing heap memory"
              ],
              "explanation": "Memory leaks occur when heap memory allocated with new is not freed with delete.",
              "xp": 5
            },
            {
              "id": "cpp-4-6-3",
              "type": "typing",
              "question": "What is double deletion?",
              "correctAnswer": [
                "deleting the same memory twice",
                "calling delete twice on same pointer"
              ],
              "explanation": "Double deletion is calling delete twice on the same memory, causing undefined behavior.",
              "xp": 5
            },
            {
              "id": "cpp-4-6-4",
              "type": "typing",
              "question": "What is array-to-pointer decay?",
              "correctAnswer": [
                "array name becomes pointer to first element",
                "implicit conversion"
              ],
              "explanation": "Arrays decay to pointers when passed to functions, losing size information.",
              "xp": 5
            },
            {
              "id": "cpp-4-6-5",
              "type": "typing",
              "question": "What is the rule of three?",
              "correctAnswer": [
                "destructor, copy constructor, copy assignment",
                "manage resources properly"
              ],
              "explanation": "If you need any of destructor, copy constructor, or copy assignment, you need all three.",
              "xp": 5
            },
            {
              "id": "cpp-4-6-6",
              "type": "multiple",
              "question": "Which is safer: stack or heap allocation?",
              "options": [
                "Stack",
                "Heap",
                "Equally safe",
                "Depends on usage"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Stack allocation is safer because it's automatically managed.",
              "xp": 5
            },
            {
              "id": "cpp-4-6-7",
              "type": "multiple",
              "question": "What happens when you return pointer to local variable?",
              "options": [
                "Dangling pointer",
                "Works fine",
                "Compilation error",
                "Copy is made"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Returning pointer to local variable creates dangling pointer.",
              "xp": 5
            },
            {
              "id": "cpp-4-6-8",
              "type": "multiple",
              "question": "What is the best way to avoid memory leaks?",
              "options": [
                "Use smart pointers",
                "Manual delete",
                "Always use stack",
                "Ignore them"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Smart pointers automatically manage memory and prevent leaks.",
              "xp": 5
            },
            {
              "id": "cpp-4-6-9",
              "type": "multiple",
              "question": "What does delete[] do?",
              "options": [
                "Deletes array",
                "Deletes single value",
                "Does nothing",
                "Compiles to same"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "delete[] is for arrays allocated with new[], must match allocation.",
              "xp": 5
            },
            {
              "id": "cpp-4-6-10",
              "type": "multiple",
              "question": "Why prefer references over pointers?",
              "options": [
                "Safer, clearer, no null",
                "Always use pointers",
                "No difference",
                "References slower"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "References are safer (can't be null), clearer, and have no overhead.",
              "xp": 5
            },
            {
              "id": "cpp-4-6-11",
              "type": "code",
              "question": "Fix memory leak by adding delete.",
              "correctAnswer": [
                "int* p = new int(10);\\n// use p\\ndelete p;"
              ],
              "explanation": "Always delete memory allocated with new.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-12",
              "type": "code",
              "question": "Prevent dangling pointer after deletion.",
              "correctAnswer": [
                "delete p; p = nullptr;"
              ],
              "explanation": "Set pointer to nullptr after deletion.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-13",
              "type": "code",
              "question": "Safely delete pointer (check first).",
              "correctAnswer": [
                "if (p != nullptr) { delete p; p = nullptr; }"
              ],
              "explanation": "Check for nullptr before deleting.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-14",
              "type": "code",
              "question": "Use delete[] for array deletion.",
              "correctAnswer": [
                "delete[] arr;"
              ],
              "explanation": "Use delete[] for arrays allocated with new[].",
              "xp": 15
            },
            {
              "id": "cpp-4-6-15",
              "type": "code",
              "question": "Avoid returning pointer to local variable.",
              "correctAnswer": [
                "return &value;",
                "int* getP() { static int x = 10; return &x; }"
              ],
              "explanation": "Return pointer to static or heap, not stack local.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-16",
              "type": "code",
              "question": "Pass array with size to function.",
              "correctAnswer": [
                "void func(int* arr, int size)",
                "void func(int arr[], int size)"
              ],
              "explanation": "Pass size separately since arrays decay to pointers.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-17",
              "type": "code",
              "question": "Use smart pointer instead of raw pointer.",
              "correctAnswer": [
                "unique_ptr<int> p = make_unique<int>(10);",
                "shared_ptr<int> p = make_shared<int>(10);"
              ],
              "explanation": "Smart pointers automatically manage memory.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-18",
              "type": "code",
              "question": "Prevent double deletion in function.",
              "correctAnswer": [
                "delete p; p = nullptr;"
              ],
              "explanation": "Set to nullptr after delete to prevent double delete.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-19",
              "type": "code",
              "question": "Check bounds before array access.",
              "correctAnswer": [
                "if (index >= 0 && index < size) { arr[index] = value; }"
              ],
              "explanation": "Always check array bounds before access.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-20",
              "type": "code",
              "question": "Initialize pointer in member initialization list.",
              "correctAnswer": [
                "Class::Class() : p(new int(10)) {}",
                "Class::Class() : p(nullptr) {}"
              ],
              "explanation": "Initialize member pointer in constructor.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-21",
              "type": "code",
              "question": "Delete member pointer in destructor.",
              "correctAnswer": [
                "~Class() { delete p; }",
                "~Class() { delete[] arr; }"
              ],
              "explanation": "Always release resources in destructor.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-22",
              "type": "code",
              "question": "Implement copy constructor to manage pointer.",
              "correctAnswer": [
                "Class::Class(const Class& other) : p(new int(*other.p)) {}"
              ],
              "explanation": "Deep copy pointer in copy constructor.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-23",
              "type": "code",
              "question": "Implement copy assignment to manage pointer.",
              "correctAnswer": [
                "Class& Class::operator=(const Class& other) {\\n    if (this != &other) {\\n        delete p;\\n        p = new int(*other.p);\\n    }\\n    return *this;\\n}"
              ],
              "explanation": "Handle self-assignment and deep copy in assignment.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-24",
              "type": "code",
              "question": "Use vector instead of array for safety.",
              "correctAnswer": [
                "vector<int> vec = {1, 2, 3};",
                "vector<int> vec(10);"
              ],
              "explanation": "vector manages memory automatically and is safer.",
              "xp": 15
            },
            {
              "id": "cpp-4-6-25",
              "type": "code",
              "question": "Prefer reference over pointer when possible.",
              "correctAnswer": [
                "void func(int& x)",
                "void func(const string& s)"
              ],
              "explanation": "Use reference instead of pointer when null is not needed.",
              "xp": 15
            }
          ],
          "lessonText": "# Pointer Pitfalls\n\nPointers are powerful but dangerous. Understanding common pitfalls helps write safer code.\n\n## 1. Dangling Pointers\n\n**Problem:** Pointer points to freed/invalid memory.\n\n```cpp\nint* p = new int(10);\ndelete p;\n*p = 20;  // ❌ Undefined behavior!\n```\n\n**Solution:** Reset after deletion.\n\n```cpp\ndelete p;\np = nullptr;  // ✅ Safe\n```\n\n## 2. Memory Leaks\n\n**Problem:** Forget to free allocated memory.\n\n```cpp\nvoid leak() {\n    int* p = new int(10);\n    // ❌ Memory never freed!\n}\n```\n\n**Solution:** Always pair new with delete.\n\n```cpp\nvoid noLeak() {\n    int* p = new int(10);\n    delete p;  // ✅ Freed\n}\n```\n\n**Better Solution:** Use smart pointers.\n\n```cpp\nvoid autoManaged() {\n    auto p = make_unique<int>(10);\n    // ✅ Automatically freed\n}\n```\n\n## 3. Double Deletion\n\n**Problem:** Deleting the same memory twice.\n\n```cpp\nint* p = new int(10);\nint* q = p;\ndelete p;\ndelete q;  // ❌ Undefined behavior!\n```\n\n**Solution:** Set to nullptr after delete.\n\n```cpp\ndelete p;\np = nullptr;\ndelete p;  // ✅ Safe (deleting nullptr is OK)\n```\n\n## 4. Returning Pointer to Local\n\n**Problem:** Returning address of stack variable.\n\n```cpp\nint* bad() {\n    int x = 10;\n    return &x;  // ❌ Dangling pointer!\n}\n```\n\n**Solutions:**\n\n```cpp\n// Option 1: Return by value\nint good() {\n    int x = 10;\n    return x;  // ✅ Copy\n}\n\n// Option 2: Use static\nint* better() {\n    static int x = 10;\n    return &x;  // ✅ Static lifetime\n}\n\n// Option 3: Allocate on heap\nint* best() {\n    return new int(10);  // ✅ But caller must delete!\n}\n```\n\n## 5. Array-to-Pointer Decay\n\n**Problem:** Arrays lose size when passed to functions.\n\n```cpp\nvoid print(int arr[]) {  // Same as int* arr\n    // ❌ Cannot get size!\n}\n```\n\n**Solution:** Pass size separately.\n\n```cpp\nvoid print(int arr[], int size) {\n    for (int i = 0; i < size; i++) {\n        cout << arr[i];\n    }\n}\n\n// Better: Use vector\nvoid print(const vector<int>& v) {\n    for (int x : v) {\n        cout << x;\n    }\n}\n```\n\n## 6. Incorrect delete/delete[] Mismatch\n\n**Problem:** Using wrong delete operator.\n\n```cpp\nint* single = new int;\ndelete[] single;  // ❌ Undefined behavior!\n\nint* array = new int[10];\ndelete array;     // ❌ Undefined behavior!\n```\n\n**Solution:** Match allocation with correct deletion.\n\n```cpp\nint* single = new int;\ndelete single;    // ✅ Correct\n\nint* array = new int[10];\ndelete[] array;   // ✅ Correct\n```\n\n## 7. The Rule of Three\n\nIf your class manages a resource (like a raw pointer), you need all three:\n\n```cpp\nclass Buffer {\nprivate:\n    int* data;\n    int size;\npublic:\n    // 1. Destructor\n    ~Buffer() {\n        delete[] data;\n    }\n    \n    // 2. Copy constructor\n    Buffer(const Buffer& other) \n        : size(other.size) {\n        data = new int[size];\n        copy(other.data, other.data + size, data);\n    }\n    \n    // 3. Copy assignment\n    Buffer& operator=(const Buffer& other) {\n        if (this != &other) {\n            delete[] data;\n            size = other.size;\n            data = new int[size];\n            copy(other.data, other.data + size, data);\n        }\n        return *this;\n    }\n};\n```\n\n## 8. Stack Overflow from Large Arrays\n\n**Problem:** Large arrays on stack cause overflow.\n\n```cpp\nint huge[1000000];  // ❌ May cause stack overflow\n```\n\n**Solution:** Use heap or vector.\n\n```cpp\nvector<int> huge(1000000);  // ✅ Heap allocated\n\nint* huge = new int[1000000];  // ✅ Heap allocated\ndelete[] huge;\n```\n\n## Best Practices\n\n✅ **DO:**\n- Initialize pointers to nullptr\n- Always check before dereferencing\n- Pair new with delete\n- Use smart pointers when possible\n- Prefer vector over arrays\n- Follow the Rule of Three/Zero\n\n❌ **DON'T:**\n- Dereference null or uninitialized pointers\n- Forget to delete heap memory\n- Mix delete and delete[]\n- Return pointers to locals\n- Use raw pointers when smart pointers work\n- Assume array size is preserved\n\n## Smart Pointers to the Rescue\n\nModern C++ recommends smart pointers:\n\n```cpp\n#include <memory>\n\n// unique_ptr: Exclusive ownership\nauto p1 = make_unique<int>(10);\n\n// shared_ptr: Shared ownership\nauto p2 = make_shared<int>(10);\nauto p3 = p2;  // Both point to same memory\n\n// weak_ptr: Prevent cycles\nweak_ptr<int> p4(p2);\n```\n\n**Benefits:**\n- Automatic memory management\n- No memory leaks\n- Exception-safe\n- Clear ownership semantics\n"
        }
      ]
    },
    {
      "unitId": "5",
      "unitName": "5. Arrays, Strings, and Basic Data Structures",
      "lessons": [
        {
          "id": 25,
          "title": "C-style Arrays",
          "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-5-1-1",
              "type": "typing",
              "question": "What is a C-style array?",
              "correctAnswer": [
                "fixed-size contiguous memory block",
                "collection of same-type elements",
                "contiguous memory allocation"
              ],
              "explanation": "C-style arrays are fixed-size, contiguous blocks of memory storing same-type elements.",
              "xp": 5
            },
            {
              "id": "cpp-5-1-2",
              "type": "typing",
              "question": "How do arrays store elements?",
              "correctAnswer": [
                "contiguously in memory",
                "adjacent memory locations"
              ],
              "explanation": "Array elements are stored contiguously in memory for fast access.",
              "xp": 5
            },
            {
              "id": "cpp-5-1-3",
              "type": "typing",
              "question": "What is array index?",
              "correctAnswer": [
                "position of element starting from 0",
                "zero-based position"
              ],
              "explanation": "Array indices start at 0, so arr[0] is the first element.",
              "xp": 5
            },
            {
              "id": "cpp-5-1-4",
              "type": "multiple",
              "question": "What happens if you access an array out of bounds?",
              "options": [
                "Undefined behavior",
                "Error message",
                "Returns 0",
                "Wraps around"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Out-of-bounds access is undefined behavior - it may crash or corrupt memory.",
              "xp": 5
            },
            {
              "id": "cpp-5-1-5",
              "type": "multiple",
              "question": "Can you resize a C-style array after declaration?",
              "options": [
                "No",
                "Yes",
                "With special function",
                "Only if empty"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "C-style arrays have fixed size and cannot be resized.",
              "xp": 5
            },
            {
              "id": "cpp-5-1-6",
              "type": "code",
              "question": "Declare an array of 10 integers.",
              "correctAnswer": [
                "int arr[10];"
              ],
              "explanation": "Array declaration: type name[size];",
              "xp": 15
            },
            {
              "id": "cpp-5-1-7",
              "type": "code",
              "question": "Initialize array with values 1, 2, 3, 4, 5.",
              "correctAnswer": [
                "int arr[] = {1, 2, 3, 4, 5};",
                "int arr[5] = {1, 2, 3, 4, 5};"
              ],
              "explanation": "Arrays can be initialized with braced initializer list.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-8",
              "type": "code",
              "question": "Set first element of array to 100.",
              "correctAnswer": [
                "arr[0] = 100;"
              ],
              "explanation": "Array elements accessed with index operator [].",
              "xp": 15
            },
            {
              "id": "cpp-5-1-9",
              "type": "code",
              "question": "Access the last element of array arr with 10 elements.",
              "correctAnswer": [
                "arr[9]",
                "int last = arr[9];"
              ],
              "explanation": "Last element of size-N array is at index N-1.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-10",
              "type": "code",
              "question": "Print all elements of array arr[5] using for loop.",
              "correctAnswer": [
                "for (int i = 0; i < 5; i++) { cout << arr[i] << \" \"; }"
              ],
              "explanation": "Loop from 0 to size-1 and access each element.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-11",
              "type": "code",
              "question": "Find sum of all elements in array arr[5].",
              "correctAnswer": [
                "int sum = 0;\\nfor (int i = 0; i < 5; i++) {\\n    sum += arr[i];\\n}"
              ],
              "explanation": "Iterate through array and accumulate sum.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-12",
              "type": "code",
              "question": "Find maximum value in array arr[5].",
              "correctAnswer": [
                "int max = arr[0];\\nfor (int i = 1; i < 5; i++) {\\n    if (arr[i] > max) max = arr[i];\\n}"
              ],
              "explanation": "Initialize max to first element, then compare with rest.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-13",
              "type": "code",
              "question": "Reverse array arr[5] in place.",
              "correctAnswer": [
                "for (int i = 0; i < 2; i++) {\\n    int temp = arr[i];\\n    arr[i] = arr[4-i];\\n    arr[4-i] = temp;\\n}"
              ],
              "explanation": "Swap elements from outside in: arr[i] with arr[n-1-i].",
              "xp": 15
            },
            {
              "id": "cpp-5-1-14",
              "type": "code",
              "question": "Check if value exists in array arr[5].",
              "correctAnswer": [
                "bool found = false;\\nfor (int i = 0; i < 5; i++) {\\n    if (arr[i] == value) { found = true; break; }\\n}"
              ],
              "explanation": "Linear search: iterate through array looking for value.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-15",
              "type": "code",
              "question": "Initialize array with all zeros.",
              "correctAnswer": [
                "int arr[5] = {0};",
                "int arr[5] = {0, 0, 0, 0, 0};"
              ],
              "explanation": "= {0} initializes first element to 0, rest default to 0.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-16",
              "type": "code",
              "question": "Copy array src[5] to dest[5].",
              "correctAnswer": [
                "for (int i = 0; i < 5; i++) dest[i] = src[i];"
              ],
              "explanation": "Copy element by element in loop.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-17",
              "type": "code",
              "question": "Initialize 2D array 3x3 with zeros.",
              "correctAnswer": [
                "int arr[3][3] = {0};"
              ],
              "explanation": "2D array initialization: type name[rows][cols];",
              "xp": 15
            },
            {
              "id": "cpp-5-1-18",
              "type": "code",
              "question": "Access element at row 1, column 2 of 2D array arr[3][3].",
              "correctAnswer": [
                "arr[1][2]",
                "int val = arr[1][2];"
              ],
              "explanation": "2D array access: arr[row][col]",
              "xp": 15
            },
            {
              "id": "cpp-5-1-19",
              "type": "code",
              "question": "Initialize array with 1,2,3, rest default.",
              "correctAnswer": [
                "int arr[5] = {1, 2, 3};"
              ],
              "explanation": "Unspecified elements are zero-initialized.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-20",
              "type": "code",
              "question": "Pass array to function that calculates sum.",
              "correctAnswer": [
                "int sumArray(int arr[], int size)",
                "int sumArray(int* arr, int size)"
              ],
              "explanation": "Arrays decay to pointers when passed to functions.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-21",
              "type": "code",
              "question": "Count occurrences of value in array arr[5].",
              "correctAnswer": [
                "int count = 0;\\nfor (int i = 0; i < 5; i++) {\\n    if (arr[i] == value) count++;\\n}"
              ],
              "explanation": "Iterate and increment counter when value matches.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-22",
              "type": "code",
              "question": "Sort array arr[5] in ascending order.",
              "correctAnswer": [
                "for (int i = 0; i < 4; i++) {\\n    for (int j = i+1; j < 5; j++) {\\n        if (arr[i] > arr[j]) {\\n            int temp = arr[i];\\n            arr[i] = arr[j];\\n            arr[j] = temp;\\n        }\\n    }\\n}"
              ],
              "explanation": "Simple selection sort: compare each element with rest and swap if out of order.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-23",
              "type": "code",
              "question": "Initialize character array as string.",
              "correctAnswer": [
                "char str[] = \"hello\";",
                "char str[6] = {'h','e','l','l','o','\\0'};"
              ],
              "explanation": "Character arrays can be initialized with string literals.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-24",
              "type": "code",
              "question": "Get array size in bytes.",
              "correctAnswer": [
                "sizeof(arr)",
                "size_t size = sizeof(arr);"
              ],
              "explanation": "sizeof returns total bytes occupied by array.",
              "xp": 15
            },
            {
              "id": "cpp-5-1-25",
              "type": "code",
              "question": "Calculate number of elements in array.",
              "correctAnswer": [
                "int size = sizeof(arr) / sizeof(arr[0]);"
              ],
              "explanation": "Divide total size by size of one element.",
              "xp": 15
            }
          ],
          "lessonText": "# C-style Arrays\n\nC-style arrays are the most basic way to store collections of values in C++.\n\n## Array Declaration\n\n```cpp\ntype name[size];\n```\n\n```cpp\nint arr[5];           // Array of 5 integers\ndouble values[10];    // Array of 10 doubles\nchar name[20];        // Array of 20 characters\n```\n\n## Array Initialization\n\n```cpp\n// Initialize with values\nint arr[] = {1, 2, 3, 4, 5};        // Size inferred (5)\nint arr[5] = {10, 20, 30, 40, 50};  // Explicit size\n\n// Partial initialization (rest are zero)\nint arr[5] = {1, 2, 3};             // {1, 2, 3, 0, 0}\n\n// Zero initialization\nint arr[5] = {0};                   // All zeros\n```\n\n## Accessing Elements\n\n```cpp\nint arr[5] = {10, 20, 30, 40, 50};\n\narr[0]  // First element: 10\narr[4]  // Last element: 50\narr[2]  // Third element: 30\n```\n\n**Important:** Array indices are zero-based!\n\n## Iterating Through Arrays\n\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\n\n// Using index\nfor (int i = 0; i < 5; i++) {\n    cout << arr[i] << \" \";\n}\n\n// Using pointer\nfor (int* p = arr; p < arr + 5; p++) {\n    cout << *p << \" \";\n}\n\n// Range-based for (C++11)\nfor (int x : arr) {\n    cout << x << \" \";\n}\n```\n\n## Common Operations\n\n### Find Sum\n```cpp\nint sum = 0;\nfor (int i = 0; i < 5; i++) {\n    sum += arr[i];\n}\n```\n\n### Find Maximum\n```cpp\nint max = arr[0];\nfor (int i = 1; i < 5; i++) {\n    if (arr[i] > max) max = arr[i];\n}\n```\n\n### Linear Search\n```cpp\nbool found = false;\nfor (int i = 0; i < 5; i++) {\n    if (arr[i] == target) {\n        found = true;\n        break;\n    }\n}\n```\n\n## Multidimensional Arrays\n\n```cpp\n// 2D array\nint matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\n// Access\nmatrix[0][0]  // 1\nmatrix[2][2]  // 9\n\n// Nested loops to iterate\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        cout << matrix[i][j] << \" \";\n    }\n}\n```\n\n## Arrays and Functions\n\n```cpp\n// Arrays decay to pointers when passed\nvoid printArray(int arr[], int size) {\n    for (int i = 0; i < size; i++) {\n        cout << arr[i] << \" \";\n    }\n}\n\nint arr[5] = {1, 2, 3, 4, 5};\nprintArray(arr, 5);  // Note: must pass size separately\n```\n\n**Important:** Arrays lose their size information when passed to functions!\n\n## Array Size\n\n```cpp\nint arr[5];\n\n// Total bytes\nint bytes = sizeof(arr);  // 20 (5 * 4)\n\n// Number of elements\nint size = sizeof(arr) / sizeof(arr[0]);  // 5\n```\n\n## Character Arrays as Strings\n\n```cpp\nchar str[] = \"Hello\";  // {'H', 'e', 'l', 'l', 'o', '\\0'}\n\n// C-style strings are null-terminated\n```\n\n## Warnings\n\n❌ **Out of bounds access:**\n```cpp\nint arr[5];\narr[10] = 100;  // ❌ Undefined behavior!\n```\n\n❌ **No bounds checking:**\n```cpp\n// No automatic bounds checking - you're responsible!\nfor (int i = 0; i <= 5; i++) {  // Bug: should be < 5\n    arr[i] = i;  // Memory corruption!\n}\n```\n\n❌ **Cannot resize:**\n```cpp\nint arr[5];\n// arr cannot be resized! Use vector instead\n```\n\n## When to Use C-style Arrays\n\n✅ **Use when:**\n- You know the size at compile time\n- Performance is critical\n- You need fixed-size storage\n- Working with legacy code\n\n❌ **Avoid when:**\n- Size needs to change dynamically\n- You need bounds checking\n- Working with strings (use std::string)\n- Need flexible containers (use vector)\n"
        },
        {
          "id": 26,
          "title": "std::array",
          "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-5-2-1",
              "type": "typing",
              "question": "What is std::array?",
              "correctAnswer": [
                "fixed-size array container",
                "C++11 array wrapper"
              ],
              "explanation": "std::array is a fixed-size container that wraps C-style arrays with safety features.",
              "xp": 5
            },
            {
              "id": "cpp-5-2-2",
              "type": "typing",
              "question": "How do you declare a std::array?",
              "correctAnswer": [
                "array<type, size>",
                "std::array<type, size>"
              ],
              "explanation": "std::array<type, size> declares array of specified type and size.",
              "xp": 5
            },
            {
              "id": "cpp-5-2-3",
              "type": "typing",
              "question": "What header do you need for std::array?",
              "correctAnswer": [
                "<array>",
                "array"
              ],
              "explanation": "#include <array> for std::array container.",
              "xp": 5
            },
            {
              "id": "cpp-5-2-4",
              "type": "multiple",
              "question": "What does std::array provide that C-style arrays don't?",
              "options": [
                "Bounds checking, iterators, member functions",
                "Nothing",
                "Larger size",
                "Slower access"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "std::array provides bounds checking (at()), iterators, and useful member functions.",
              "xp": 5
            },
            {
              "id": "cpp-5-2-5",
              "type": "multiple",
              "question": "Can std::array be resized?",
              "options": [
                "No",
                "Yes",
                "With resize()",
                "Only if empty"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "std::array has fixed size like C-style arrays.",
              "xp": 5
            },
            {
              "id": "cpp-5-2-6",
              "type": "code",
              "question": "Declare std::array of 5 integers.",
              "correctAnswer": [
                "std::array<int, 5> arr;",
                "array<int, 5> arr;"
              ],
              "explanation": "std::array<type, size> name;",
              "xp": 15
            },
            {
              "id": "cpp-5-2-7",
              "type": "code",
              "question": "Initialize std::array with values 1, 2, 3, 4, 5.",
              "correctAnswer": [
                "std::array<int, 5> arr = {1, 2, 3, 4, 5};",
                "array<int, 5> arr = {1, 2, 3, 4, 5};"
              ],
              "explanation": "Initialize with braced initializer list.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-8",
              "type": "code",
              "question": "Access element at index 2 using at() for bounds checking.",
              "correctAnswer": [
                "arr.at(2)",
                "int val = arr.at(2);"
              ],
              "explanation": "at() throws exception if index out of bounds.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-9",
              "type": "code",
              "question": "Get size of std::array.",
              "correctAnswer": [
                "arr.size()",
                "size_t s = arr.size();"
              ],
              "explanation": "size() returns number of elements.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-10",
              "type": "code",
              "question": "Check if array is empty.",
              "correctAnswer": [
                "arr.empty()",
                "if (arr.empty())"
              ],
              "explanation": "empty() returns true if size is 0.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-11",
              "type": "code",
              "question": "Access first element.",
              "correctAnswer": [
                "arr.front()",
                "int first = arr.front();"
              ],
              "explanation": "front() returns reference to first element.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-12",
              "type": "code",
              "question": "Access last element.",
              "correctAnswer": [
                "arr.back()",
                "int last = arr.back();"
              ],
              "explanation": "back() returns reference to last element.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-13",
              "type": "code",
              "question": "Get pointer to underlying data.",
              "correctAnswer": [
                "arr.data()",
                "int* p = arr.data();"
              ],
              "explanation": "data() returns pointer to underlying array.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-14",
              "type": "code",
              "question": "Fill entire array with value 42.",
              "correctAnswer": [
                "arr.fill(42);"
              ],
              "explanation": "fill() sets all elements to specified value.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-15",
              "type": "code",
              "question": "Iterate using iterator.",
              "correctAnswer": [
                "for (auto it = arr.begin(); it != arr.end(); it++) { cout << *it; }"
              ],
              "explanation": "Use begin() and end() iterators to traverse.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-16",
              "type": "code",
              "question": "Iterate using range-based for loop.",
              "correctAnswer": [
                "for (int x : arr) { cout << x << \" \"; }"
              ],
              "explanation": "Range-based for works with std::array.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-17",
              "type": "code",
              "question": "Swap contents of two std::arrays.",
              "correctAnswer": [
                "arr1.swap(arr2);",
                "swap(arr1, arr2);"
              ],
              "explanation": "swap() exchanges contents of two arrays.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-18",
              "type": "code",
              "question": "Pass std::array to function by reference.",
              "correctAnswer": [
                "void func(array<int, 5>& arr)",
                "void func(std::array<int, 5>& arr)"
              ],
              "explanation": "Pass by reference to avoid copying.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-19",
              "type": "code",
              "question": "Compare two std::arrays for equality.",
              "correctAnswer": [
                "if (arr1 == arr2)",
                "arr1 == arr2"
              ],
              "explanation": "Arrays can be compared with == operator.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-20",
              "type": "code",
              "question": "Sort std::array using STL sort.",
              "correctAnswer": [
                "sort(arr.begin(), arr.end());"
              ],
              "explanation": "STL sort works with iterators.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-21",
              "type": "code",
              "question": "Use fill() to set first 3 elements to 0.",
              "correctAnswer": [
                "arr.fill(0);",
                "for (int i = 0; i < 3; i++) arr[i] = 0;"
              ],
              "explanation": "fill() sets all elements, use loop for partial.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-22",
              "type": "code",
              "question": "Use at() to access element with bounds checking.",
              "correctAnswer": [
                "arr.at(3) = 100;",
                "int val = arr.at(3);"
              ],
              "explanation": "at() throws std::out_of_range if index invalid.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-23",
              "type": "code",
              "question": "Iterate using reverse iterator.",
              "correctAnswer": [
                "for (auto it = arr.rbegin(); it != arr.rend(); it++) { cout << *it; }"
              ],
              "explanation": "rbegin() and rend() iterate in reverse.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-24",
              "type": "code",
              "question": "Pass std::array by const reference.",
              "correctAnswer": [
                "void func(const array<int, 5>& arr)",
                "void func(const std::array<int, 5>& arr)"
              ],
              "explanation": "const reference prevents modification.",
              "xp": 15
            },
            {
              "id": "cpp-5-2-25",
              "type": "code",
              "question": "Initialize std::array of doubles.",
              "correctAnswer": [
                "std::array<double, 5> arr = {1.1, 2.2, 3.3, 4.4, 5.5};"
              ],
              "explanation": "std::array works with any type.",
              "xp": 15
            }
          ],
          "lessonText": "# std::array\n\n`std::array` is a modern C++ container that provides a safe, feature-rich alternative to C-style arrays.\n\n## Declaration\n\n```cpp\n#include <array>\n\nstd::array<type, size> name;\n```\n\n```cpp\nstd::array<int, 5> arr;              // Array of 5 integers\nstd::array<double, 10> values;       // Array of 10 doubles\nstd::array<std::string, 3> names;    // Array of 3 strings\n```\n\n## Initialization\n\n```cpp\n// Initialize with values\nstd::array<int, 5> arr = {1, 2, 3, 4, 5};\n\n// Uniform initialization\nstd::array<int, 5> arr{1, 2, 3, 4, 5};\n\n// Default initialization (zero for built-in types)\nstd::array<int, 5> arr{};  // All zeros\n```\n\n## Element Access\n\n### Operator [] (No bounds checking)\n```cpp\narr[0] = 10;  // Set first element\nint x = arr[2];  // Get third element\n```\n\n### at() (Bounds checking)\n```cpp\narr.at(0) = 10;  // Set first element (with bounds check)\nint x = arr.at(2);  // Get third element (with bounds check)\n```\n\n**Difference:** `at()` throws `std::out_of_range` if index is invalid, `[]` is undefined behavior.\n\n## Member Functions\n\n```cpp\nstd::array<int, 5> arr = {1, 2, 3, 4, 5};\n\n// Size\narr.size();    // 5\narr.empty();   // false\n\n// Element access\narr.front();   // 1 (first element)\narr.back();    // 5 (last element)\narr.data();    // pointer to underlying array\n\n// Fill\narr.fill(42);  // All elements now 42\n\n// Swap\narr1.swap(arr2);  // Exchange contents\n```\n\n## Iteration\n\n### Iterator-based\n```cpp\nfor (auto it = arr.begin(); it != arr.end(); it++) {\n    std::cout << *it << \" \";\n}\n\n// Reverse iteration\nfor (auto it = arr.rbegin(); it != arr.rend(); it++) {\n    std::cout << *it << \" \";\n}\n```\n\n### Range-based for\n```cpp\nfor (int x : arr) {\n    std::cout << x << \" \";\n}\n```\n\n### With index\n```cpp\nfor (size_t i = 0; i < arr.size(); i++) {\n    std::cout << arr[i] << \" \";\n}\n```\n\n## Passing to Functions\n\n### By reference (preferred)\n```cpp\nvoid process(std::array<int, 5>& arr) {\n    // Can modify\n    arr[0] = 100;\n}\n```\n\n### By const reference\n```cpp\nvoid print(const std::array<int, 5>& arr) {\n    // Cannot modify\n    for (int x : arr) {\n        std::cout << x;\n    }\n}\n```\n\n## Comparison\n\n```cpp\nstd::array<int, 5> arr1 = {1, 2, 3, 4, 5};\nstd::array<int, 5> arr2 = {1, 2, 3, 4, 5};\n\nif (arr1 == arr2) {  // Compare element by element\n    // Equal\n}\n\nif (arr1 < arr2) {  // Lexicographic comparison\n    // Less than\n}\n```\n\n## STL Algorithms\n\n```cpp\nstd::array<int, 5> arr = {3, 1, 4, 1, 5};\n\n// Sort\nstd::sort(arr.begin(), arr.end());\n\n// Find\nauto it = std::find(arr.begin(), arr.end(), 4);\n\n// Count\nint count = std::count(arr.begin(), arr.end(), 1);\n```\n\n## std::array vs C-style Arrays\n\n| Feature | std::array | C-style array |\n|---------|-----------|---------------|\n| Size information | ✅ Known | ❌ Decays to pointer |\n| Bounds checking | ✅ at() | ❌ No |\n| Iterators | ✅ Yes | ❌ No |\n| Member functions | ✅ Yes | ❌ No |\n| Comparison | ✅ Yes | ❌ No |\n| Performance | ✅ Same | ✅ Same |\n| Copy/assign | ✅ Yes | ❌ No |\n\n## Common Patterns\n\n### Find maximum\n```cpp\nauto max = std::max_element(arr.begin(), arr.end());\n```\n\n### Fill with value\n```cpp\narr.fill(0);  // Set all elements to 0\n```\n\n### Convert to C-style array\n```cpp\nint* c_arr = arr.data();  // Pass to C API\n```\n\n### Aggregate initialization\n```cpp\nstruct Point {\n    std::array<int, 3> coords;\n};\n\nPoint p{ {1, 2, 3} };\n```\n"
        },
        {
          "id": 27,
          "title": "std::string",
          "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-5-3-1",
              "type": "typing",
              "question": "What is std::string?",
              "correctAnswer": [
                "C++ string class",
                "dynamic string container"
              ],
              "explanation": "std::string is a dynamic string container that manages memory automatically.",
              "xp": 5
            },
            {
              "id": "cpp-5-3-2",
              "type": "typing",
              "question": "What header do you need for std::string?",
              "correctAnswer": [
                "<string>",
                "string"
              ],
              "explanation": "#include <string> for std::string class.",
              "xp": 5
            },
            {
              "id": "cpp-5-3-3",
              "type": "typing",
              "question": "What does std::string automatically handle?",
              "correctAnswer": [
                "memory management",
                "size allocation",
                "null termination"
              ],
              "explanation": "std::string handles memory allocation and deallocation automatically.",
              "xp": 5
            },
            {
              "id": "cpp-5-3-4",
              "type": "multiple",
              "question": "What is the difference between std::string and C-style strings?",
              "options": [
                "std::string manages memory, C-style doesn't",
                "No difference",
                "std::string is faster",
                "C-style is safer"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "std::string automatically manages memory while C-style strings require manual management.",
              "xp": 5
            },
            {
              "id": "cpp-5-3-5",
              "type": "multiple",
              "question": "Can std::string be resized?",
              "options": [
                "Yes",
                "No",
                "Only if empty",
                "With special function"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "std::string can dynamically resize as needed.",
              "xp": 5
            },
            {
              "id": "cpp-5-3-6",
              "type": "code",
              "question": "Declare an empty std::string.",
              "correctAnswer": [
                "std::string s;",
                "string s;"
              ],
              "explanation": "Default constructor creates empty string.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-7",
              "type": "code",
              "question": "Initialize std::string with text.",
              "correctAnswer": [
                "std::string s = \"Hello\";",
                "string s(\"Hello\");"
              ],
              "explanation": "Can initialize with string literal or constructor.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-8",
              "type": "code",
              "question": "Get length of string.",
              "correctAnswer": [
                "s.length()",
                "s.size()",
                "int len = s.length();"
              ],
              "explanation": "length() and size() both return string length.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-9",
              "type": "code",
              "question": "Access character at index 2.",
              "correctAnswer": [
                "s[2]",
                "char c = s[2];",
                "s.at(2)"
              ],
              "explanation": "Use [] or at() to access characters.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-10",
              "type": "code",
              "question": "Append text to string.",
              "correctAnswer": [
                "s += \" world\";",
                "s.append(\" world\");"
              ],
              "explanation": "Use += or append() to concatenate.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-11",
              "type": "code",
              "question": "Find position of substring.",
              "correctAnswer": [
                "size_t pos = s.find(\"abc\");",
                "s.find(\"text\")"
              ],
              "explanation": "find() returns position or string::npos if not found.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-12",
              "type": "code",
              "question": "Replace substring from position 2 with new text.",
              "correctAnswer": [
                "s.replace(2, 3, \"new\");"
              ],
              "explanation": "replace(pos, length, new_text)",
              "xp": 15
            },
            {
              "id": "cpp-5-3-13",
              "type": "code",
              "question": "Get substring of 5 characters starting at position 3.",
              "correctAnswer": [
                "string sub = s.substr(3, 5);"
              ],
              "explanation": "substr(start_pos, length)",
              "xp": 15
            },
            {
              "id": "cpp-5-3-14",
              "type": "code",
              "question": "Compare two strings for equality.",
              "correctAnswer": [
                "if (s1 == s2)",
                "s1 == s2"
              ],
              "explanation": "Use == operator for comparison.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-15",
              "type": "code",
              "question": "Check if string is empty.",
              "correctAnswer": [
                "s.empty()",
                "if (s.empty())"
              ],
              "explanation": "empty() returns true if string has no characters.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-16",
              "type": "code",
              "question": "Clear string (remove all characters).",
              "correctAnswer": [
                "s.clear();"
              ],
              "explanation": "clear() removes all characters, making string empty.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-17",
              "type": "code",
              "question": "Convert integer to string.",
              "correctAnswer": [
                "string s = std::to_string(42);",
                "string s = to_string(num);"
              ],
              "explanation": "to_string() converts numeric types to string.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-18",
              "type": "code",
              "question": "Iterate through string with range-based for.",
              "correctAnswer": [
                "for (char c : s) { cout << c; }"
              ],
              "explanation": "Range-based for iterates through each character.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-19",
              "type": "code",
              "question": "Insert text at position 5.",
              "correctAnswer": [
                "s.insert(5, \"text\");"
              ],
              "explanation": "insert(position, text)",
              "xp": 15
            },
            {
              "id": "cpp-5-3-20",
              "type": "code",
              "question": "Erase 3 characters starting at position 2.",
              "correctAnswer": [
                "s.erase(2, 3);"
              ],
              "explanation": "erase(position, length)",
              "xp": 15
            },
            {
              "id": "cpp-5-3-21",
              "type": "code",
              "question": "Concatenate two strings.",
              "correctAnswer": [
                "string result = s1 + s2;",
                "s1 += s2;"
              ],
              "explanation": "Use + operator or += for concatenation.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-22",
              "type": "code",
              "question": "Push back a character.",
              "correctAnswer": [
                "s.push_back('x');"
              ],
              "explanation": "push_back() adds character to end.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-23",
              "type": "code",
              "question": "Pop back last character.",
              "correctAnswer": [
                "s.pop_back();"
              ],
              "explanation": "pop_back() removes last character.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-24",
              "type": "code",
              "question": "Reserve capacity for 100 characters.",
              "correctAnswer": [
                "s.reserve(100);"
              ],
              "explanation": "reserve() pre-allocates memory to reduce reallocations.",
              "xp": 15
            },
            {
              "id": "cpp-5-3-25",
              "type": "code",
              "question": "Convert string to uppercase.",
              "correctAnswer": [
                "transform(s.begin(), s.end(), s.begin(), ::toupper);"
              ],
              "explanation": "Use transform from <algorithm> with toupper.",
              "xp": 15
            }
          ],
          "lessonText": "# std::string\n\n`std::string` is C++'s modern string class that provides safe, flexible string handling with automatic memory management.\n\n## Declaration and Initialization\n\n```cpp\n#include <string>\n\n// Empty string\nstd::string s;\n\n// Initialize with text\nstd::string s = \"Hello\";\nstd::string s(\"Hello\");\n\n// Repeat character\nstd::string s(5, 'x');  // \"xxxxx\"\n\n// From substring\nstd::string s(\"Hello World\", 0, 5);  // \"Hello\"\n```\n\n## String Operations\n\n### Concatenation\n```cpp\nstd::string s1 = \"Hello\";\nstd::string s2 = \" World\";\n\nstd::string s3 = s1 + s2;  // \"Hello World\"\ns1 += \"!\";                  // \"Hello!\"\n```\n\n### Accessing Characters\n```cpp\nstd::string s = \"Hello\";\n\nchar c1 = s[0];      // 'H' (no bounds checking)\nchar c2 = s.at(0);   // 'H' (with bounds checking)\n\n// Modify\ns[0] = 'J';          // \"Jello\"\n```\n\n### Length and Size\n```cpp\nstd::string s = \"Hello\";\ns.length();   // 5\ns.size();     // 5\ns.empty();    // false\n```\n\n## Modifying Strings\n\n### Append\n```cpp\ns += \" World\";      // Append with +=\ns.append(\"!!\");     // Append with append()\ns.push_back('!');   // Append single character\n```\n\n### Insert\n```cpp\ns.insert(5, \" there\");  // Insert at position 5\n```\n\n### Erase\n```cpp\ns.erase(5, 3);  // Erase 3 characters from position 5\ns.clear();      // Remove all characters\n```\n\n### Replace\n```cpp\ns.replace(0, 5, \"Hi\");  // Replace 5 chars at position 0\n```\n\n## Searching\n\n```cpp\nstd::string s = \"Hello World\";\n\n// Find\nsize_t pos = s.find(\"World\");  // 6\npos = s.find(\"xyz\");           // string::npos (not found)\n\n// Find from position\npos = s.find(\"o\", 5);  // Find 'o' starting at position 5\n\n// Check if found\nif (pos != std::string::npos) {\n    // Found\n}\n```\n\n## Substrings\n\n```cpp\nstd::string s = \"Hello World\";\n\nstd::string sub = s.substr(6, 5);  // \"World\"\nstd::string sub = s.substr(6);     // \"World\" to end\n```\n\n## Comparison\n\n```cpp\nstd::string s1 = \"Hello\";\nstd::string s2 = \"World\";\n\nif (s1 == s2) { }  // Equality\nif (s1 != s2) { }  // Inequality\nif (s1 < s2)  { }  // Less than (lexicographic)\nif (s1 > s2)  { }  // Greater than\n```\n\n## Iteration\n\n### Range-based for\n```cpp\nstd::string s = \"Hello\";\n\nfor (char c : s) {\n    std::cout << c;\n}\n```\n\n### Index-based\n```cpp\nfor (size_t i = 0; i < s.length(); i++) {\n    std::cout << s[i];\n}\n```\n\n### Iterator\n```cpp\nfor (auto it = s.begin(); it != s.end(); it++) {\n    std::cout << *it;\n}\n```\n\n## Type Conversion\n\n```cpp\n// Number to string\nstd::string s1 = std::to_string(42);        // \"42\"\nstd::string s2 = std::to_string(3.14);      // \"3.14\"\nstd::string s3 = std::to_string(true);      // \"1\"\n\n// String to number (with <sstream>)\nint x = std::stoi(\"42\");              // 42\ndouble d = std::stod(\"3.14\");         // 3.14\n```\n\n## Case Conversion\n\n```cpp\n#include <algorithm>\n#include <cctype>\n\nstd::string s = \"Hello\";\n\n// To uppercase\nstd::transform(s.begin(), s.end(), s.begin(), ::toupper);\n// \"HELLO\"\n\n// To lowercase\nstd::transform(s.begin(), s.end(), s.begin(), ::tolower);\n// \"hello\"\n```\n\n## Finding and Counting\n\n```cpp\nstd::string s = \"Hello World Hello\";\n\n// Count occurrences\nint count = 0;\nsize_t pos = 0;\nwhile ((pos = s.find(\"Hello\", pos)) != std::string::npos) {\n    count++;\n    pos += 5;\n}\n```\n\n## String Views (C++17)\n\n```cpp\n#include <string_view>\n\nstd::string s = \"Hello World\";\nstd::string_view sv = s.substr(0, 5);  // View without copying\n```\n\n## Common Patterns\n\n### Trim whitespace\n```cpp\n// Remove leading whitespace\ns.erase(0, s.find_first_not_of(\" \t\n\r\"));\n\n// Remove trailing whitespace\ns.erase(s.find_last_not_of(\" \t\n\r\") + 1);\n```\n\n### Split by delimiter\n```cpp\nstd::vector<std::string> split(const std::string& s, char delimiter) {\n    std::vector<std::string> tokens;\n    std::string token;\n    std::istringstream tokenStream(s);\n    while (std::getline(tokenStream, token, delimiter)) {\n        tokens.push_back(token);\n    }\n    return tokens;\n}\n```\n\n### Read line into string\n```cpp\nstd::string line;\nstd::getline(std::cin, line);\n```\n\n## Memory Management\n\n```cpp\nstd::string s;\n\n// Reserve capacity (pre-allocate)\ns.reserve(100);  // Allocate space for 100 characters\n\n// Shrink to fit\ns.shrink_to_fit();  // Reduce capacity to match size\n\n// Capacity\ns.capacity();  // Current allocated capacity\ns.size();     // Current string length\n```\n"
        },
        {
          "id": 28,
          "title": "Multidimensional Arrays",
          "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-5-4-1",
              "type": "typing",
              "question": "What is a multidimensional array?",
              "correctAnswer": [
                "array of arrays",
                "nested arrays"
              ],
              "explanation": "Multidimensional arrays are arrays where each element is itself an array.",
              "xp": 5
            },
            {
              "id": "cpp-5-4-2",
              "type": "typing",
              "question": "How do you declare a 2D array?",
              "correctAnswer": [
                "type name[rows][cols]",
                "int arr[3][4]"
              ],
              "explanation": "2D array declaration: type name[rows][cols];",
              "xp": 5
            },
            {
              "id": "cpp-5-4-3",
              "type": "typing",
              "question": "How do you access element at row 2, column 3?",
              "correctAnswer": [
                "arr[2][3]",
                "array[row][column]"
              ],
              "explanation": "Access with row and column indices: arr[row][col]",
              "xp": 5
            },
            {
              "id": "cpp-5-4-4",
              "type": "multiple",
              "question": "How is a 2D array stored in memory?",
              "options": [
                "Row-major order",
                "Column-major order",
                "Random order",
                "Circular order"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "C++ uses row-major order: all elements of row 0, then row 1, etc.",
              "xp": 5
            },
            {
              "id": "cpp-5-4-5",
              "type": "multiple",
              "question": "What is the formula for 2D array index?",
              "options": [
                "row * cols + col",
                "col * rows + row",
                "row * col",
                "col + row"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Linear index = row * number_of_columns + column",
              "xp": 5
            },
            {
              "id": "cpp-5-4-6",
              "type": "code",
              "question": "Declare a 3x4 2D array of integers.",
              "correctAnswer": [
                "int arr[3][4];"
              ],
              "explanation": "2D array: type name[rows][cols];",
              "xp": 15
            },
            {
              "id": "cpp-5-4-7",
              "type": "code",
              "question": "Initialize 2x2 array with values.",
              "correctAnswer": [
                "int arr[2][2] = {{1, 2}, {3, 4}};"
              ],
              "explanation": "Initialize with nested braced lists.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-8",
              "type": "code",
              "question": "Set element at row 1, column 2 to 10.",
              "correctAnswer": [
                "arr[1][2] = 10;"
              ],
              "explanation": "Access with row and column indices.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-9",
              "type": "code",
              "question": "Print all elements of 3x3 array using nested loops.",
              "correctAnswer": [
                "for (int i = 0; i < 3; i++) {\\n    for (int j = 0; j < 3; j++) {\\n        cout << arr[i][j] << \" \";\\n    }\\n    cout << endl;\\n}"
              ],
              "explanation": "Use nested for loops to iterate rows and columns.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-10",
              "type": "code",
              "question": "Calculate sum of all elements in 3x3 array.",
              "correctAnswer": [
                "int sum = 0;\\nfor (int i = 0; i < 3; i++) {\\n    for (int j = 0; j < 3; j++) {\\n        sum += arr[i][j];\\n    }\\n}"
              ],
              "explanation": "Nested loops to iterate all elements and accumulate sum.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-11",
              "type": "code",
              "question": "Find maximum value in 2D array.",
              "correctAnswer": [
                "int max = arr[0][0];\\nfor (int i = 0; i < 3; i++) {\\n    for (int j = 0; j < 3; j++) {\\n        if (arr[i][j] > max) max = arr[i][j];\\n    }\\n}"
              ],
              "explanation": "Track maximum while iterating through all elements.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-12",
              "type": "code",
              "question": "Initialize 2D array with zeros.",
              "correctAnswer": [
                "int arr[3][3] = {0};"
              ],
              "explanation": "= {0} initializes all elements to 0.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-13",
              "type": "code",
              "question": "Print diagonal elements of square matrix.",
              "correctAnswer": [
                "for (int i = 0; i < n; i++) {\\n    cout << arr[i][i] << \" \";\\n}"
              ],
              "explanation": "Diagonal elements have equal row and column indices.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-14",
              "type": "code",
              "question": "Transpose a 2D array (swap rows and columns).",
              "correctAnswer": [
                "for (int i = 0; i < 3; i++) {\\n    for (int j = i + 1; j < 3; j++) {\\n        int temp = arr[i][j];\\n        arr[i][j] = arr[j][i];\\n        arr[j][i] = temp;\\n    }\\n}"
              ],
              "explanation": "Swap arr[i][j] with arr[j][i] for i < j.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-15",
              "type": "code",
              "question": "Initialize 3D array (2x3x4).",
              "correctAnswer": [
                "int arr[2][3][4];"
              ],
              "explanation": "3D array: type name[dims][rows][cols];",
              "xp": 15
            },
            {
              "id": "cpp-5-4-16",
              "type": "code",
              "question": "Access element in 3D array at [1][2][3].",
              "correctAnswer": [
                "arr[1][2][3]",
                "int val = arr[1][2][3];"
              ],
              "explanation": "3D array access: arr[dim][row][col]",
              "xp": 15
            },
            {
              "id": "cpp-5-4-17",
              "type": "code",
              "question": "Pass 2D array to function.",
              "correctAnswer": [
                "void func(int arr[][4], int rows)",
                "void func(int arr[3][4])"
              ],
              "explanation": "Must specify column dimension, rows can be omitted.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-18",
              "type": "code",
              "question": "Calculate sum of each row in 2D array.",
              "correctAnswer": [
                "for (int i = 0; i < 3; i++) {\\n    int rowSum = 0;\\n    for (int j = 0; j < 3; j++) {\\n        rowSum += arr[i][j];\\n    }\\n    cout << rowSum << endl;\\n}"
              ],
              "explanation": "Outer loop for rows, inner loop sums row elements.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-19",
              "type": "code",
              "question": "Calculate sum of each column in 2D array.",
              "correctAnswer": [
                "for (int j = 0; j < 3; j++) {\\n    int colSum = 0;\\n    for (int i = 0; i < 3; i++) {\\n        colSum += arr[i][j];\\n    }\\n    cout << colSum << endl;\\n}"
              ],
              "explanation": "Outer loop for columns, inner loop sums column elements.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-20",
              "type": "code",
              "question": "Check if 2D array is symmetric.",
              "correctAnswer": [
                "bool sym = true;\\nfor (int i = 0; i < n; i++) {\\n    for (int j = i + 1; j < n; j++) {\\n        if (arr[i][j] != arr[j][i]) sym = false;\\n    }\\n}"
              ],
              "explanation": "Check if arr[i][j] == arr[j][i] for all i, j.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-21",
              "type": "code",
              "question": "Rotate matrix 90 degrees clockwise.",
              "correctAnswer": [
                "for (int i = 0; i < n/2; i++) {\\n    for (int j = i; j < n-i-1; j++) {\\n        int temp = arr[i][j];\\n        arr[i][j] = arr[n-1-j][i];\\n        arr[n-1-j][i] = arr[n-1-i][n-1-j];\\n        arr[n-1-i][n-1-j] = arr[j][n-1-i];\\n        arr[j][n-1-i] = temp;\\n    }\\n}"
              ],
              "explanation": "Layer-by-layer rotation from outer to inner.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-22",
              "type": "code",
              "question": "Initialize row of 2D array with specific values.",
              "correctAnswer": [
                "int arr[3][3] = {{1, 2, 3}, {0}, {0}};",
                "int arr[3][3] = {};\\nfor (int j = 0; j < 3; j++) arr[0][j] = j + 1;"
              ],
              "explanation": "Initialize specific row, rest default to 0.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-23",
              "type": "code",
              "question": "Find element value in 2D array using linear index.",
              "correctAnswer": [
                "int row = index / cols;\\nint col = index % cols;\\nint value = arr[row][col];"
              ],
              "explanation": "Convert linear index to row and col using division and modulus.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-24",
              "type": "code",
              "question": "Copy 2D array to another array.",
              "correctAnswer": [
                "for (int i = 0; i < 3; i++) {\\n    for (int j = 0; j < 3; j++) {\\n        dest[i][j] = src[i][j];\\n    }\\n}"
              ],
              "explanation": "Copy element by element using nested loops.",
              "xp": 15
            },
            {
              "id": "cpp-5-4-25",
              "type": "code",
              "question": "Use std::array for 2D array (3x3).",
              "correctAnswer": [
                "std::array<std::array<int, 3>, 3> arr;"
              ],
              "explanation": "Nested std::array for multidimensional: array<array<type, cols>, rows>",
              "xp": 15
            }
          ],
          "lessonText": "# Multidimensional Arrays\n\nMultidimensional arrays allow you to store data in multiple dimensions (tables, matrices, 3D grids, etc.).\n\n## Declaration\n\n```cpp\n// 2D array (matrix)\ntype name[rows][cols];\n\nint matrix[3][4];    // 3 rows, 4 columns\ndouble grid[5][5];   // 5x5 grid\n\n// 3D array\nint cube[2][3][4];   // 2 layers, 3 rows, 4 columns\n```\n\n## Initialization\n\n```cpp\n// Complete initialization\nint matrix[2][3] = {\n    {1, 2, 3},\n    {4, 5, 6}\n};\n\n// Partial initialization (rest are zero)\nint matrix[2][3] = {\n    {1, 2, 3},\n    {4}  // {4, 0, 0}\n};\n\n// Zero initialization\nint matrix[3][4] = {0};  // All zeros\n```\n\n## Accessing Elements\n\n```cpp\nint matrix[3][4] = {\n    {1, 2, 3, 4},\n    {5, 6, 7, 8},\n    {9, 10, 11, 12}\n};\n\n// Access element\nmatrix[0][0]  // 1 (first row, first column)\nmatrix[2][3]  // 12 (last row, last column)\nmatrix[1][2]  // 7 (second row, third column)\n```\n\n## Memory Layout (Row-Major Order)\n\nC++ stores multidimensional arrays in **row-major order**:\n\n```\nmatrix[2][3] = {\n    {1, 2, 3},\n    {4, 5, 6}\n}\n\nMemory: [1, 2, 3, 4, 5, 6]\n        └─row 0──┘ └─row 1──┘\n```\n\n**Linear index formula:**\n```cpp\nint linear_index = row * num_columns + column;\n```\n\n## Iterating Through 2D Arrays\n\n```cpp\nint matrix[3][4] = {\n    {1, 2, 3, 4},\n    {5, 6, 7, 8},\n    {9, 10, 11, 12}\n};\n\n// Using nested loops\nfor (int i = 0; i < 3; i++) {      // Rows\n    for (int j = 0; j < 4; j++) {  // Columns\n        std::cout << matrix[i][j] << \" \";\n    }\n    std::cout << \"\\n\";\n}\n```\n\n## Common Operations\n\n### Sum of all elements\n```cpp\nint sum = 0;\nfor (int i = 0; i < rows; i++) {\n    for (int j = 0; j < cols; j++) {\n        sum += matrix[i][j];\n    }\n}\n```\n\n### Find maximum\n```cpp\nint max = matrix[0][0];\nfor (int i = 0; i < rows; i++) {\n    for (int j = 0; j < cols; j++) {\n        if (matrix[i][j] > max) {\n            max = matrix[i][j];\n        }\n    }\n}\n```\n\n### Sum of rows\n```cpp\nfor (int i = 0; i < rows; i++) {\n    int row_sum = 0;\n    for (int j = 0; j < cols; j++) {\n        row_sum += matrix[i][j];\n    }\n    std::cout << \"Row \" << i << \": \" << row_sum << \"\\n\";\n}\n```\n\n### Sum of columns\n```cpp\nfor (int j = 0; j < cols; j++) {\n    int col_sum = 0;\n    for (int i = 0; i < rows; i++) {\n        col_sum += matrix[i][j];\n    }\n    std::cout << \"Column \" << j << \": \" << col_sum << \"\\n\";\n}\n```\n\n## Diagonal Operations\n\n```cpp\nint matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\n// Main diagonal (top-left to bottom-right)\nfor (int i = 0; i < 3; i++) {\n    std::cout << matrix[i][i] << \" \";  // 1, 5, 9\n}\n\n// Anti-diagonal (top-right to bottom-left)\nfor (int i = 0; i < 3; i++) {\n    std::cout << matrix[i][2-i] << \" \";  // 3, 5, 7\n}\n```\n\n## Transpose\n\nSwap rows with columns:\n\n```cpp\nint matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\nfor (int i = 0; i < 3; i++) {\n    for (int j = i + 1; j < 3; j++) {\n        // Swap matrix[i][j] with matrix[j][i]\n        int temp = matrix[i][j];\n        matrix[i][j] = matrix[j][i];\n        matrix[j][i] = temp;\n    }\n}\n```\n\n## Passing to Functions\n\n```cpp\n// Function with 2D array parameter\nvoid processMatrix(int arr[][4], int rows) {\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < 4; j++) {\n            arr[i][j] *= 2;\n        }\n    }\n}\n\n// Call\nint matrix[3][4];\nprocessMatrix(matrix, 3);\n```\n\n**Important:** Column dimension must be specified in function parameter!\n\n## 3D Arrays\n\n```cpp\nint cube[2][3][4] = {\n    {\n        {1, 2, 3, 4},\n        {5, 6, 7, 8},\n        {9, 10, 11, 12}\n    },\n    {\n        {13, 14, 15, 16},\n        {17, 18, 19, 20},\n        {21, 22, 23, 24}\n    }\n};\n\n// Access\ncube[0][0][0]  // 1 (first layer, first row, first column)\ncube[1][2][3]  // 24\n\n// Iterate\nfor (int l = 0; l < 2; l++) {        // Layers\n    for (int i = 0; i < 3; i++) {    // Rows\n        for (int j = 0; j < 4; j++) {  // Columns\n            std::cout << cube[l][i][j] << \" \";\n        }\n        std::cout << \"\\n\";\n    }\n    std::cout << \"\\n\";\n}\n```\n\n## Using std::array for Multidimensional\n\n```cpp\n#include <array>\n\n// 2D array using std::array\nstd::array<std::array<int, 4>, 3> matrix = {{\n    {1, 2, 3, 4},\n    {5, 6, 7, 8},\n    {9, 10, 11, 12}\n}};\n\n// Access\nmatrix[0][0]  // 1\n\n// Size\nmatrix.size()     // 3 rows\nmatrix[0].size()  // 4 columns\n```\n\n## Jagged Arrays\n\nC++ doesn't support true jagged arrays natively, but you can simulate them:\n\n```cpp\nint* jagged[3];\njagged[0] = new int[2];\njagged[1] = new int[3];\njagged[2] = new int[4];\n\n// Better: use vector\nstd::vector<std::vector<int>> jagged = {\n    {1, 2},\n    {3, 4, 5},\n    {6, 7, 8, 9}\n};\n```\n"
        },
        {
          "id": 29,
          "title": "Iteration Patterns",
          "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-5-5-1",
              "type": "typing",
              "question": "What is range-based for loop?",
              "correctAnswer": [
                "for (element : container)",
                "for-each loop"
              ],
              "explanation": "Range-based for loop iterates through all elements of a container.",
              "xp": 5
            },
            {
              "id": "cpp-5-5-2",
              "type": "typing",
              "question": "What is iterator?",
              "correctAnswer": [
                "object that points to elements",
                "generalized pointer"
              ],
              "explanation": "Iterator is an object that traverses container elements.",
              "xp": 5
            },
            {
              "id": "cpp-5-5-3",
              "type": "typing",
              "question": "What is the advantage of iterators?",
              "correctAnswer": [
                "unified interface for all containers",
                "works with STL algorithms"
              ],
              "explanation": "Iterators provide consistent interface for different containers.",
              "xp": 5
            },
            {
              "id": "cpp-5-5-4",
              "type": "multiple",
              "question": "When should you use range-based for?",
              "options": [
                "Simple iteration through all elements",
                "Need index",
                "Need to delete",
                "Random access"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Use range-based for for simple iteration through all elements.",
              "xp": 5
            },
            {
              "id": "cpp-5-5-5",
              "type": "multiple",
              "question": "What does begin() return?",
              "options": [
                "Iterator to first element",
                "First element",
                "Last element",
                "Size"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "begin() returns iterator pointing to first element.",
              "xp": 5
            },
            {
              "id": "cpp-5-5-6",
              "type": "code",
              "question": "Use range-based for to print all elements in vector.",
              "correctAnswer": [
                "for (int x : vec) { cout << x << \" \"; }"
              ],
              "explanation": "Range-based for: for (element : container)",
              "xp": 15
            },
            {
              "id": "cpp-5-5-7",
              "type": "code",
              "question": "Use range-based for with reference to modify elements.",
              "correctAnswer": [
                "for (int& x : vec) { x *= 2; }"
              ],
              "explanation": "Use reference (&) to modify elements.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-8",
              "type": "code",
              "question": "Use iterator to traverse vector.",
              "correctAnswer": [
                "for (auto it = vec.begin(); it != vec.end(); it++) { cout << *it; }"
              ],
              "explanation": "begin() and end() provide iterators.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-9",
              "type": "code",
              "question": "Use iterator to modify element.",
              "correctAnswer": [
                "*it = 100;",
                "for (auto it = vec.begin(); it != vec.end(); it++) *it = 0;"
              ],
              "explanation": "Dereference iterator with * to access/modify element.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-10",
              "type": "code",
              "question": "Use reverse iterator to traverse in reverse.",
              "correctAnswer": [
                "for (auto it = vec.rbegin(); it != vec.rend(); it++) { cout << *it; }"
              ],
              "explanation": "rbegin() and rend() for reverse iteration.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-11",
              "type": "code",
              "question": "Use while loop with iterator.",
              "correctAnswer": [
                "auto it = vec.begin();\\nwhile (it != vec.end()) {\\n    cout << *it;\\n    it++;\\n}"
              ],
              "explanation": "While loop with iterator condition check.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-12",
              "type": "code",
              "question": "Find element using iterator and find.",
              "correctAnswer": [
                "auto it = find(vec.begin(), vec.end(), value);"
              ],
              "explanation": "find() returns iterator to found element or end().",
              "xp": 15
            },
            {
              "id": "cpp-5-5-13",
              "type": "code",
              "question": "Check if iterator is valid before dereferencing.",
              "correctAnswer": [
                "if (it != vec.end()) { cout << *it; }"
              ],
              "explanation": "Compare iterator with end() to check validity.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-14",
              "type": "code",
              "question": "Use iterator to erase element.",
              "correctAnswer": [
                "vec.erase(it);"
              ],
              "explanation": "erase() accepts iterator and removes element.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-15",
              "type": "code",
              "question": "Use iterator to insert at position.",
              "correctAnswer": [
                "vec.insert(it, 100);"
              ],
              "explanation": "insert() adds element at iterator position.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-16",
              "type": "code",
              "question": "Use const_iterator to read without modifying.",
              "correctAnswer": [
                "for (std::vector<int>::const_iterator it = vec.begin(); it != vec.end(); it++) { cout << *it; }"
              ],
              "explanation": "const_iterator prevents modification.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-17",
              "type": "code",
              "question": "Use auto with iterator for cleaner code.",
              "correctAnswer": [
                "for (auto it = vec.begin(); it != vec.end(); it++)",
                "auto it = vec.begin();"
              ],
              "explanation": "auto deduces iterator type automatically.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-18",
              "type": "code",
              "question": "Use range-based for with const reference.",
              "correctAnswer": [
                "for (const int& x : vec) { cout << x; }"
              ],
              "explanation": "const reference prevents modification and avoids copy.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-19",
              "type": "code",
              "question": "Use range-based for with index (C++17 initializer).",
              "correctAnswer": [
                "for (auto [index, value] : enumerate(vec))",
                "int index = 0; for (int x : vec) { cout << index << \":\" << x; index++; }"
              ],
              "explanation": "Traditional approach: track index separately.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-20",
              "type": "code",
              "question": "Iterate through map using iterator.",
              "correctAnswer": [
                "for (auto it = map.begin(); it != map.end(); it++) { cout << it->first << \":\" << it->second; }"
              ],
              "explanation": "Map iterator has ->first and ->second members.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-21",
              "type": "code",
              "question": "Use range-based for for map.",
              "correctAnswer": [
                "for (const auto& [key, value] : map) { cout << key << \":\" << value; }"
              ],
              "explanation": "Structured binding (C++17) for map iteration.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-22",
              "type": "code",
              "question": "Advance iterator by n positions.",
              "correctAnswer": [
                "std::advance(it, 5);",
                "it += 5;",
                "it = it + 5;"
              ],
              "explanation": "advance() moves iterator forward n positions.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-23",
              "type": "code",
              "question": "Calculate distance between two iterators.",
              "correctAnswer": [
                "auto dist = std::distance(it1, it2);"
              ],
              "explanation": "distance() returns number of elements between iterators.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-24",
              "type": "code",
              "question": "Use iterator to find and replace.",
              "correctAnswer": [
                "auto it = find(vec.begin(), vec.end(), old);\\nif (it != vec.end()) *it = new;"
              ],
              "explanation": "Find with iterator, then modify through dereferencing.",
              "xp": 15
            },
            {
              "id": "cpp-5-5-25",
              "type": "code",
              "question": "Use iterator to process first n elements.",
              "correctAnswer": [
                "for (auto it = vec.begin(); it != vec.begin() + 5; it++) { cout << *it; }"
              ],
              "explanation": "Use begin() + n to get iterator n positions from start.",
              "xp": 15
            }
          ],
          "lessonText": "# Iteration Patterns\n\nC++ provides multiple ways to iterate through containers, each with different use cases.\n\n## Range-Based For Loop (C++11)\n\nSimplest way to iterate through all elements:\n\n```cpp\nstd::vector<int> vec = {1, 2, 3, 4, 5};\n\n// Read-only\nfor (int x : vec) {\n    std::cout << x << \" \";\n}\n\n// Modify (use reference)\nfor (int& x : vec) {\n    x *= 2;\n}\n\n// Read-only (avoid copy with const reference)\nfor (const int& x : vec) {\n    std::cout << x << \" \";\n}\n```\n\n### When to use range-based for\n\n✅ **Use when:**\n- Iterating through all elements\n- Simple forward iteration\n- Don't need index\n- Don't need to modify container structure\n\n❌ **Don't use when:**\n- Need element index\n- Need to insert/delete elements\n- Need reverse iteration (use rbegin/rend)\n- Need complex iteration logic\n\n## Iterator-Based Loop\n\nMore flexible, works with all STL containers:\n\n```cpp\nstd::vector<int> vec = {1, 2, 3, 4, 5};\n\n// Forward iterator\nfor (std::vector<int>::iterator it = vec.begin(); it != vec.end(); it++) {\n    std::cout << *it << \" \";\n}\n\n// Using auto (C++11)\nfor (auto it = vec.begin(); it != vec.end(); it++) {\n    std::cout << *it << \" \";\n}\n\n// Const iterator (read-only)\nfor (std::vector<int>::const_iterator it = vec.cbegin(); it != vec.cend(); it++) {\n    std::cout << *it << \" \";\n}\n```\n\n### Iterator Operations\n\n```cpp\nstd::vector<int> vec = {1, 2, 3, 4, 5};\n\n// Get iterators\nauto it = vec.begin();       // First element\nauto end = vec.end();         // One past last\nauto rit = vec.rbegin();      // Last element (reverse)\nauto rend = vec.rend();       // One before first (reverse)\n\n// Dereference\nint value = *it;              // Get value\n*it = 100;                    // Modify value\n\n// Advance\nit++;                         // Next element\nit += 3;                      // Advance by 3\nstd::advance(it, 2);          // Advance by 2\n\n// Distance\nauto dist = std::distance(it1, it2);  // Elements between iterators\n\n// Comparison\nif (it != end) { }            // Not at end\nif (it < end) { }             // Before end (random access)\n```\n\n## Index-Based Loop\n\nTraditional approach, gives you direct index access:\n\n```cpp\nstd::vector<int> vec = {1, 2, 3, 4, 5};\n\nfor (size_t i = 0; i < vec.size(); i++) {\n    std::cout << \"Index \" << i << \": \" << vec[i] << \"\\n\";\n}\n\n// With range-based (track index manually)\nint index = 0;\nfor (int x : vec) {\n    std::cout << index << \": \" << x << \"\\n\";\n    index++;\n}\n```\n\n## While Loop with Iterator\n\n```cpp\nstd::vector<int> vec = {1, 2, 3, 4, 5};\n\nauto it = vec.begin();\nwhile (it != vec.end()) {\n    // Process element\n    std::cout << *it << \" \";\n    \n    // Check condition for early exit\n    if (*it == 3) break;\n    \n    it++;\n}\n```\n\n## Iteration with Modification\n\n### Erase while iterating\n```cpp\nstd::vector<int> vec = {1, 2, 3, 4, 5};\n\nfor (auto it = vec.begin(); it != vec.end(); ) {\n    if (*it % 2 == 0) {\n        it = vec.erase(it);  // Erase returns next iterator\n    } else {\n        it++;  // Only advance if not erased\n    }\n}\n```\n\n### Insert while iterating\n```cpp\nstd::vector<int> vec = {1, 2, 3};\n\nfor (auto it = vec.begin(); it != vec.end(); it++) {\n    if (*it == 2) {\n        it = vec.insert(it, 100);  // Insert returns iterator to new element\n        it++;  // Skip newly inserted element\n    }\n}\n```\n\n## Map Iteration\n\n```cpp\nstd::map<std::string, int> ages = {\n    {\"Alice\", 25},\n    {\"Bob\", 30},\n    {\"Charlie\", 35}\n};\n\n// Iterator-based\nfor (auto it = ages.begin(); it != ages.end(); it++) {\n    std::cout << it->first << \": \" << it->second << \"\\n\";\n}\n\n// Range-based for (C++17 structured binding)\nfor (const auto& [name, age] : ages) {\n    std::cout << name << \": \" << age << \"\\n\";\n}\n\n// Range-based for (pre-C++17)\nfor (const auto& pair : ages) {\n    std::cout << pair.first << \": \" << pair.second << \"\\n\";\n}\n```\n\n## Choosing Iteration Method\n\n| Method | Use Case | Index Access | Modification |\n|--------|----------|--------------|--------------|\n| Range-based for | Simple iteration | ❌ No | ✅ Yes (with &) |\n| Iterator | Flexibility | ❌ No | ✅ Yes |\n| Index-based | Need index | ✅ Yes | ✅ Yes |\n| While loop | Complex logic | ❌ No | ✅ Yes |\n\n## Common Patterns\n\n### Find element\n```cpp\nauto it = std::find(vec.begin(), vec.end(), target);\nif (it != vec.end()) {\n    // Found\n    std::cout << \"Found: \" << *it;\n}\n```\n\n### Find and replace\n```cpp\nfor (auto it = vec.begin(); it != vec.end(); it++) {\n    if (*it == old_value) {\n        *it = new_value;\n    }\n}\n```\n\n### Process first n elements\n```cpp\nfor (auto it = vec.begin(); it != vec.begin() + n && it != vec.end(); it++) {\n    std::cout << *it << \" \";\n}\n```\n\n### Reverse iteration\n```cpp\nfor (auto it = vec.rbegin(); it != vec.rend(); it++) {\n    std::cout << *it << \" \";\n}\n```\n\n### Iterate with step\n```cpp\nfor (auto it = vec.begin(); it != vec.end(); std::advance(it, step)) {\n    std::cout << *it << \" \";\n}\n```\n\n## Iterator Categories\n\n| Category | Operations | Containers |\n|----------|------------|------------|\n| Input | ++, *, -> | istream |\n| Output | ++, * | ostream |\n| Forward | ++, *, ==, != | forward_list |\n| Bidirectional | ++, --, *, ==, != | list, set, map |\n| Random Access | +, -, <, >, [], +=, -= | vector, deque, array |\n\n## Best Practices\n\n✅ **DO:**\n- Use range-based for for simple iteration\n- Use iterators when you need flexibility\n- Use const_iterator when not modifying\n- Check iterator validity before dereferencing\n\n❌ **DON'T:**\n- Dereference end() iterator\n- Forget to update iterator after erase()\n- Use random access on non-random-access iterators\n- Assume iterator ordering without checking\n"
        }
      ]
    },
    {
      "unitId": "6",
      "unitName": "6. Object-Oriented Programming in C++",
      "lessons": [
        {
          "id": 30,
          "title": "Structs vs Classes",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-6-1-1",
              "type": "typing",
              "question": "What is the main difference between struct and class in C++?",
              "correctAnswer": [
                "default access is public for struct, private for class",
                "access specifiers default differently"
              ],
              "explanation": "The only difference is default access: struct=public, class=private.",
              "xp": 5
            },
            {
              "id": "cpp-6-1-2",
              "type": "typing",
              "question": "What is a struct in C++?",
              "correctAnswer": [
                "user-defined type with members",
                "data structure"
              ],
              "explanation": "Struct is a user-defined type that groups related data members.",
              "xp": 5
            },
            {
              "id": "cpp-6-1-3",
              "type": "typing",
              "question": "When should you use struct vs class?",
              "correctAnswer": [
                "struct for data-only, class for objects with behavior",
                "use struct for POD types"
              ],
              "explanation": "Use struct for data structures (POD), class for objects with methods and invariants.",
              "xp": 5
            },
            {
              "id": "cpp-6-1-4",
              "type": "multiple",
              "question": "Can structs have member functions?",
              "options": [
                "Yes",
                "No",
                "Only in C++",
                "Only with special keyword"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "In C++, structs can have member functions just like classes.",
              "xp": 5
            },
            {
              "id": "cpp-6-1-5",
              "type": "multiple",
              "question": "What is the default inheritance for struct?",
              "options": [
                "public",
                "private",
                "protected",
                "No inheritance"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Structs default to public inheritance, classes to private.",
              "xp": 5
            },
            {
              "id": "cpp-6-1-6",
              "type": "code",
              "question": "Declare a struct Point with x and y members.",
              "correctAnswer": [
                "struct Point { int x; int y; };",
                "struct Point {\\n    int x;\\n    int y;\\n};"
              ],
              "explanation": "Struct declaration with public data members by default.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-7",
              "type": "code",
              "question": "Initialize a struct using brace initialization.",
              "correctAnswer": [
                "Point p = {10, 20};",
                "Point p{10, 20};"
              ],
              "explanation": "Structs can be initialized with braced lists.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-8",
              "type": "code",
              "question": "Access struct member x.",
              "correctAnswer": [
                "p.x",
                "int value = p.x;"
              ],
              "explanation": "Use dot operator to access struct members.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-9",
              "type": "code",
              "question": "Declare a struct with member function.",
              "correctAnswer": [
                "struct Point { int x; int y; void print() { cout << x << y; } };"
              ],
              "explanation": "Structs can have member functions.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-10",
              "type": "code",
              "question": "Declare a class with private data members.",
              "correctAnswer": [
                "class Point { private: int x; int y; };",
                "class Point {\\nprivate:\\n    int x;\\n    int y;\\n};"
              ],
              "explanation": "Classes have private members by default.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-11",
              "type": "code",
              "question": "Make struct member private.",
              "correctAnswer": [
                "struct Point { private: int x; int y; };"
              ],
              "explanation": "Use private: access specifier to make members private even in struct.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-12",
              "type": "code",
              "question": "Make class member public.",
              "correctAnswer": [
                "class Point { public: int x; int y; };"
              ],
              "explanation": "Use public: access specifier to make members public even in class.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-13",
              "type": "code",
              "question": "Create array of structs.",
              "correctAnswer": [
                "Point points[5];",
                "Point points[5] = {{0,0}, {1,1}};"
              ],
              "explanation": "Arrays work with structs just like built-in types.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-14",
              "type": "code",
              "question": "Pass struct by value to function.",
              "correctAnswer": [
                "void printPoint(Point p)",
                "void printPoint(Point p) { cout << p.x << p.y; }"
              ],
              "explanation": "Structs can be passed by value (copies all members).",
              "xp": 15
            },
            {
              "id": "cpp-6-1-15",
              "type": "code",
              "question": "Pass struct by reference to function.",
              "correctAnswer": [
                "void modifyPoint(Point& p)",
                "void modifyPoint(Point& p) { p.x = 10; }"
              ],
              "explanation": "Pass by reference to avoid copy and allow modification.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-16",
              "type": "code",
              "question": "Return struct from function.",
              "correctAnswer": [
                "Point createPoint() { return {10, 20}; }",
                "Point createPoint() { Point p{10, 20}; return p; }"
              ],
              "explanation": "Functions can return structs by value.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-17",
              "type": "code",
              "question": "Compare two structs for equality.",
              "correctAnswer": [
                "if (p1.x == p2.x && p1.y == p2.y)",
                "bool equal = (p1.x == p2.x && p1.y == p2.y);"
              ],
              "explanation": "Structs don't have built-in comparison, compare members manually.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-18",
              "type": "code",
              "question": "Copy struct to another.",
              "correctAnswer": [
                "Point p2 = p1;",
                "p2 = p1;"
              ],
              "explanation": "Structs can be copied with assignment operator.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-19",
              "type": "code",
              "question": "Use pointer to struct member with arrow operator.",
              "correctAnswer": [
                "p->x",
                "int value = p->x;"
              ],
              "explanation": "Use -> operator to access struct members through pointer.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-20",
              "type": "code",
              "question": "Declare struct with default values (C++11).",
              "correctAnswer": [
                "struct Point { int x = 0; int y = 0; };"
              ],
              "explanation": "C++11 allows default member initializers.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-21",
              "type": "code",
              "question": "Initialize struct with designated initializers (C++20).",
              "correctAnswer": [
                "Point p{.x = 10, .y = 20};"
              ],
              "explanation": "C++20 designated initializers specify member names.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-22",
              "type": "code",
              "question": "Create struct inside function and return it.",
              "correctAnswer": [
                "Point create() { Point p{1, 2}; return p; }"
              ],
              "explanation": "Return by value (RVO may optimize).",
              "xp": 15
            },
            {
              "id": "cpp-6-1-23",
              "type": "code",
              "question": "Use struct as map key.",
              "correctAnswer": [
                "map<Point, string> m;",
                "std::map<Point, int> points;"
              ],
              "explanation": "Structs can be used as keys if they have comparison operator.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-24",
              "type": "code",
              "question": "Define struct with constructor.",
              "correctAnswer": [
                "struct Point { Point(int x, int y) : x(x), y(y) {} int x, y; };"
              ],
              "explanation": "Structs can have constructors.",
              "xp": 15
            },
            {
              "id": "cpp-6-1-25",
              "type": "code",
              "question": "Make struct aggregate (no user-defined constructor).",
              "correctAnswer": [
                "struct Point { int x; int y; };",
                "struct Point { int x = 0; int y = 0; };"
              ],
              "explanation": "Aggregate struct allows brace initialization and no constructors.",
              "xp": 15
            }
          ],
          "lessonText": "# Structs vs Classes\n\nIn C++, `struct` and `class` are almost identical, with one key difference.\n\n## The Only Difference\n\n```cpp\nstruct MyStruct {\n    int x;        // public by default\n    void func() {} // public by default\n};\n\nclass MyClass {\n    int x;        // private by default\n    void func() {} // private by default\n};\n```\n\n- **struct:** Default access is **public**\n- **class:** Default access is **private**\n\n## When to Use struct\n\n✅ **Use struct for:**\n- Plain Old Data (POD) types\n- Data structures without invariants\n- Public interfaces\n- C interop\n- Simple data containers\n\n```cpp\nstruct Point {\n    double x, y;\n};\n\nstruct Color {\n    int r, g, b, a;\n};\n\nstruct Vertex {\n    Point position;\n    Color color;\n    Vector2 uv;\n};\n```\n\n## When to Use class\n\n✅ **Use class for:**\n- Objects with behavior\n- Encapsulation needed\n- Invariants to maintain\n- Complex types with constructors/destructors\n\n```cpp\nclass BankAccount {\nprivate:\n    double balance;\n    \npublic:\n    void deposit(double amount) {\n        balance += amount;\n    }\n    \n    void withdraw(double amount) {\n        if (amount <= balance) {\n            balance -= amount;\n        }\n    }\n    \n    double getBalance() const {\n        return balance;\n    }\n};\n```\n\n## Struct Features\n\n### Initialization\n```cpp\nstruct Point {\n    int x, y;\n};\n\n// Brace initialization\nPoint p1 = {10, 20};\nPoint p2{10, 20};\n\n// Default initialization (C++11)\nstruct Point2 {\n    int x = 0;\n    int y = 0;\n};\n\nPoint2 p3;  // {0, 0}\n```\n\n### Member Access\n```cpp\nPoint p = {10, 20};\n\n// Dot operator\np.x = 15;\nint y = p.y;\n\n// Pointer to struct\nPoint* ptr = &p;\nptr->x = 20;  // Arrow operator\n```\n\n### Member Functions\n```cpp\nstruct Point {\n    int x, y;\n    \n    void print() {\n        std::cout << \"(\" << x << \", \" << y << \")\";\n    }\n    \n    void move(int dx, int dy) {\n        x += dx;\n        y += dy;\n    }\n};\n```\n\n### Constructors\n```cpp\nstruct Point {\n    int x, y;\n    \n    // Default constructor\n    Point() : x(0), y(0) {}\n    \n    // Parameterized constructor\n    Point(int x, int y) : x(x), y(y) {}\n    \n    // Copy constructor\n    Point(const Point& other) : x(other.x), y(other.y) {}\n};\n```\n\n## Struct as Function Parameters\n\n```cpp\nstruct Point {\n    int x, y;\n};\n\n// By value (copy)\nvoid printPoint(Point p) {\n    std::cout << p.x << \", \" << p.y;\n}\n\n// By reference (no copy, can modify)\nvoid movePoint(Point& p, int dx, int dy) {\n    p.x += dx;\n    p.y += dy;\n}\n\n// By const reference (no copy, read-only)\nvoid readPoint(const Point& p) {\n    std::cout << p.x << \", \" << p.y;\n}\n```\n\n## Struct Return Values\n\n```cpp\nPoint createPoint(int x, int y) {\n    Point p{x, y};\n    return p;  // Return by value (may use RVO)\n}\n\n// Usage\nPoint p = createPoint(10, 20);\n```\n\n## Struct Arrays\n\n```cpp\nPoint points[5] = {\n    {0, 0},\n    {1, 1},\n    {2, 2},\n    {3, 3},\n    {4, 4}\n};\n\nfor (int i = 0; i < 5; i++) {\n    std::cout << points[i].x << \", \" << points[i].y << \"\\n\";\n}\n```\n\n## Struct Comparison\n\nStructs don't have built-in comparison operators:\n\n```cpp\nstruct Point {\n    int x, y;\n};\n\nPoint p1{1, 2};\nPoint p2{1, 2};\n\n// Manual comparison\nbool equal = (p1.x == p2.x && p1.y == p2.y);\n\n// Or define operator==\nbool operator==(const Point& lhs, const Point& rhs) {\n    return lhs.x == rhs.x && lhs.y == rhs.y;\n}\n\nif (p1 == p2) { }  // Now works\n```\n\n## Struct Inheritance\n\nStructs can inherit (public by default):\n\n```cpp\nstruct Shape {\n    int x, y;\n};\n\nstruct Circle : Shape {\n    int radius;\n};\n\nstruct Rectangle : Shape {\n    int width, height;\n};\n```\n\n## Best Practices\n\n✅ **DO:**\n- Use struct for simple data containers\n- Use class for objects with behavior and invariants\n- Initialize structs with braces\n- Pass large structs by const reference\n\n❌ **DON'T:**\n- Use struct when you need encapsulation\n- Assume structs are always simple\n- Forget that structs can have methods\n- Overuse structs for complex logic\n\n## Struct vs Class Summary\n\n| Feature | struct | class |\n|---------|--------|-------|\n| Default member access | public | private |\n| Default inheritance | public | private |\n| Can have methods | ✅ Yes | ✅ Yes |\n| Can have constructors | ✅ Yes | ✅ Yes |\n| Can have destructors | ✅ Yes | ✅ Yes |\n| Can inherit | ✅ Yes | ✅ Yes |\n| Use case | Data containers | Objects with behavior |\n"
        },
        {
          "id": 31,
          "title": "Encapsulation and Access Specifiers",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-6-2-1",
              "type": "typing",
              "question": "What is encapsulation?",
              "correctAnswer": [
                "hiding implementation details",
                "bundling data and methods"
              ],
              "explanation": "Encapsulation hides implementation and exposes only necessary interface.",
              "xp": 5
            },
            {
              "id": "cpp-6-2-2",
              "type": "typing",
              "question": "What are the three access specifiers?",
              "correctAnswer": [
                "public, private, protected"
              ],
              "explanation": "Public: accessible everywhere. Private: only class. Protected: class and derived.",
              "xp": 5
            },
            {
              "id": "cpp-6-2-3",
              "type": "typing",
              "question": "What is the default access for class members?",
              "correctAnswer": [
                "private"
              ],
              "explanation": "Class members are private by default.",
              "xp": 5
            },
            {
              "id": "cpp-6-2-4",
              "type": "multiple",
              "question": "What access specifier allows derived classes to access?",
              "options": [
                "protected",
                "private",
                "public",
                "internal"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Protected allows class and derived class access.",
              "xp": 5
            },
            {
              "id": "cpp-6-2-5",
              "type": "multiple",
              "question": "Can private members be accessed from outside the class?",
              "options": [
                "No",
                "Yes",
                "Only with friend",
                "Only if static"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Private members are only accessible within the class.",
              "xp": 5
            },
            {
              "id": "cpp-6-2-6",
              "type": "code",
              "question": "Create class with private member variable.",
              "correctAnswer": [
                "class MyClass { private: int x; };"
              ],
              "explanation": "Use private: specifier for private members.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-7",
              "type": "code",
              "question": "Add public getter for private member x.",
              "correctAnswer": [
                "class MyClass { private: int x; public: int getX() { return x; } };"
              ],
              "explanation": "Public getter provides read access to private member.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-8",
              "type": "code",
              "question": "Add public setter for private member x.",
              "correctAnswer": [
                "void setX(int val) { x = val; }"
              ],
              "explanation": "Public setter provides write access to private member.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-9",
              "type": "code",
              "question": "Create class with multiple access specifiers.",
              "correctAnswer": [
                "class MyClass { public: int a; private: int b; protected: int c; };"
              ],
              "explanation": "Access specifiers can be used multiple times.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-10",
              "type": "code",
              "question": "Create friend function to access private members.",
              "correctAnswer": [
                "class MyClass { private: int x; friend void friendFunc(MyClass& obj); };",
                "friend void friendFunc(MyClass& obj) { obj.x = 10; }"
              ],
              "explanation": "friend function can access private members.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-11",
              "type": "code",
              "question": "Create friend class.",
              "correctAnswer": [
                "class MyClass { private: int x; friend class FriendClass; };"
              ],
              "explanation": "Friend class can access all private members.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-12",
              "type": "code",
              "question": "Make method private.",
              "correctAnswer": [
                "class MyClass { private: void helper(); };"
              ],
              "explanation": "Use private: specifier before method declaration.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-13",
              "type": "code",
              "question": "Make method protected.",
              "correctAnswer": [
                "class MyClass { protected: void helper(); };"
              ],
              "explanation": "Protected methods accessible in derived classes.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-14",
              "type": "code",
              "question": "Create class with const public member.",
              "correctAnswer": [
                "class MyClass { public: const int MAX = 100; };"
              ],
              "explanation": "const public member cannot be modified.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-15",
              "type": "code",
              "question": "Create static private member.",
              "correctAnswer": [
                "class MyClass { private: static int count; };"
              ],
              "explanation": "Static member shared across all instances.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-16",
              "type": "code",
              "question": "Create class with read-only property.",
              "correctAnswer": [
                "class MyClass { private: int _x; public: int getX() const { return _x; } };"
              ],
              "explanation": "const getter provides read-only access.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-17",
              "type": "code",
              "question": "Create class with validation in setter.",
              "correctAnswer": [
                "void setX(int val) { if (val >= 0) x = val; }"
              ],
              "explanation": "Setters can validate input before assigning.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-18",
              "type": "code",
              "question": "Create class with constructor that sets private member.",
              "correctAnswer": [
                "class MyClass { private: int x; public: MyClass(int val) : x(val) {} };"
              ],
              "explanation": "Constructor initializes private members.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-19",
              "type": "code",
              "question": "Create class with mutable private member.",
              "correctAnswer": [
                "class MyClass { private: mutable int cache; public: int get() const { return cache; } };"
              ],
              "explanation": "mutable can be modified even in const methods.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-20",
              "type": "code",
              "question": "Create class with public static method.",
              "correctAnswer": [
                "class MyClass { public: static int getCount() { return count; } };"
              ],
              "explanation": "Static methods don't require object instance.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-21",
              "type": "code",
              "question": "Access protected member from derived class.",
              "correctAnswer": [
                "class Derived : public Base { public: void use() { protectedMember = 10; } };"
              ],
              "explanation": "Derived classes can access protected members.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-22",
              "type": "code",
              "question": "Create class with private nested class.",
              "correctAnswer": [
                "class Outer { private: class Inner {}; };"
              ],
              "explanation": "Nested class can have different access.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-23",
              "type": "code",
              "question": "Use using to make private type public.",
              "correctAnswer": [
                "class MyClass { private: using Value = int; };"
              ],
              "explanation": "using declarations can be controlled by access specifiers.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-24",
              "type": "code",
              "question": "Create class with private typedef.",
              "correctAnswer": [
                "class MyClass { private: typedef int ID; };"
              ],
              "explanation": "typedefs can be private.",
              "xp": 15
            },
            {
              "id": "cpp-6-2-25",
              "type": "code",
              "question": "Create class with explicit conversion operator.",
              "correctAnswer": [
                "explicit operator int() const { return value; }"
              ],
              "explanation": "explicit prevents implicit conversions.",
              "xp": 15
            }
          ],
          "lessonText": "# Encapsulation and Access Specifiers\n\nEncapsulation is bundling data and methods that operate on that data, restricting access to internal details.\n\n## Access Specifiers\n\n```cpp\nclass MyClass {\npublic:     // Accessible from anywhere\n    int publicVar;\n    void publicMethod();\n\nprivate:    // Only accessible within class\n    int privateVar;\n    void privateMethod();\n\nprotected:  // Class and derived classes\n    int protectedVar;\n    void protectedMethod();\n};\n```\n\n## Default Access\n\n- **class:** `private`\n- **struct:** `public`\n\n## Public Members\n\n```cpp\nclass BankAccount {\npublic:\n    void deposit(double amount) {\n        balance += amount;\n    }\n    \n    double getBalance() const {\n        return balance;\n    }\n\nprivate:\n    double balance;\n};\n```\n\n## Private Members\n\n```cpp\nclass Rectangle {\nprivate:\n    double width, height;\n    \n    double calculateArea() {\n        return width * height;\n    }\n\npublic:\n    void setDimensions(double w, double h) {\n        if (w > 0 && h > 0) {\n            width = w;\n            height = h;\n        }\n    }\n    \n    double getArea() {\n        return calculateArea();\n    }\n};\n```\n\n## Protected Members\n\n```cpp\nclass Animal {\nprotected:\n    std::string name;\n    \npublic:\n    Animal(const std::string& n) : name(n) {}\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(const std::string& n) : Animal(n) {}\n    \n    void bark() {\n        std::cout << name << \" says Woof!\";  // Can access protected name\n    }\n};\n```\n\n## Getters and Setters\n\n```cpp\nclass Person {\nprivate:\n    std::string name;\n    int age;\n\npublic:\n    // Getter\n    std::string getName() const { return name; }\n    int getAge() const { return age; }\n    \n    // Setter with validation\n    void setAge(int a) {\n        if (a >= 0 && a <= 150) {\n            age = a;\n        }\n    }\n};\n```\n\n## Friend Functions\n\n```cpp\nclass Vector {\nprivate:\n    double x, y;\n    \npublic:\n    Vector(double x, double y) : x(x), y(y) {}\n    \n    // Friend function can access private members\n    friend double dotProduct(const Vector& v1, const Vector& v2);\n};\n\ndouble dotProduct(const Vector& v1, const Vector& v2) {\n    return v1.x * v2.x + v1.y * v2.y;\n}\n```\n\n## Friend Classes\n\n```cpp\nclass Node {\nprivate:\n    int data;\n    \n    friend class BinaryTree;  // BinaryTree can access private members\n};\n\nclass BinaryTree {\n    // Can access Node::data\n};\n```\n\n## Mutable Members\n\n```cpp\nclass Cache {\nprivate:\n    mutable int accessCount;  // Can be modified in const methods\n    int cachedValue;\n    \npublic:\n    int getValue() const {\n        accessCount++;  // OK even though method is const\n        return cachedValue;\n    }\n};\n```\n\n## Best Practices\n\n✅ **DO:**\n- Make data members private\n- Provide getters/setters when needed\n- Use protected for inheritance\n- Keep public interface minimal\n- Validate in setters\n\n❌ **DON'T:**\n- Make everything public\n- Break encapsulation unnecessarily\n- Expose internal representation\n- Skip validation in setters\n"
        },
        {
          "id": 32,
          "title": "Constructors and Destructors",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-6-3-1",
              "type": "typing",
              "question": "What is a constructor?",
              "correctAnswer": [
                "special member function that initializes object",
                "initialization function"
              ],
              "explanation": "Constructor initializes object when created.",
              "xp": 5
            },
            {
              "id": "cpp-6-3-2",
              "type": "typing",
              "question": "What is a destructor?",
              "correctAnswer": [
                "special member function that cleans up object",
                "cleanup function"
              ],
              "explanation": "Destructor cleans up when object is destroyed.",
              "xp": 5
            },
            {
              "id": "cpp-6-3-3",
              "type": "typing",
              "question": "When is destructor called?",
              "correctAnswer": [
                "when object goes out of scope",
                "when delete is called"
              ],
              "explanation": "Destructor called automatically when object destroyed.",
              "xp": 5
            },
            {
              "id": "cpp-6-3-4",
              "type": "multiple",
              "question": "Can a constructor have a return type?",
              "options": [
                "No",
                "Yes",
                "Only void",
                "Only bool"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Constructors cannot have return type.",
              "xp": 5
            },
            {
              "id": "cpp-6-3-5",
              "type": "multiple",
              "question": "How many destructors can a class have?",
              "options": [
                "One",
                "Multiple",
                "Zero",
                "Two"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Each class has exactly one destructor.",
              "xp": 5
            },
            {
              "id": "cpp-6-3-6",
              "type": "code",
              "question": "Create default constructor.",
              "correctAnswer": [
                "class MyClass { public: MyClass() {} };",
                "MyClass() = default;"
              ],
              "explanation": "Default constructor takes no parameters.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-7",
              "type": "code",
              "question": "Create parameterized constructor.",
              "correctAnswer": [
                "class MyClass { public: MyClass(int x) : member(x) {} int member; };"
              ],
              "explanation": "Parameterized constructor takes arguments to initialize.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-8",
              "type": "code",
              "question": "Create copy constructor.",
              "correctAnswer": [
                "MyClass(const MyClass& other) : member(other.member) {}"
              ],
              "explanation": "Copy constructor initializes from another object.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-9",
              "type": "code",
              "question": "Create destructor.",
              "correctAnswer": [
                "~MyClass() {}"
              ],
              "explanation": "Destructor name is ~ClassName().",
              "xp": 15
            },
            {
              "id": "cpp-6-3-10",
              "type": "code",
              "question": "Use member initializer list.",
              "correctAnswer": [
                "MyClass(int x) : member(x) {}"
              ],
              "explanation": "Initialize members before constructor body.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-11",
              "type": "code",
              "question": "Delete default constructor.",
              "correctAnswer": [
                "MyClass() = delete;"
              ],
              "explanation": "= delete prevents default constructor.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-12",
              "type": "code",
              "question": "Make constructor explicit.",
              "correctAnswer": [
                "explicit MyClass(int x) : member(x) {}"
              ],
              "explanation": "explicit prevents implicit conversions.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-13",
              "type": "code",
              "question": "Delegate constructor to another.",
              "correctAnswer": [
                "MyClass(int x) : MyClass(x, 0) {}"
              ],
              "explanation": "Delegating constructor calls another constructor.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-14",
              "type": "code",
              "question": "Initialize const member in constructor.",
              "correctAnswer": [
                "class MyClass { public: MyClass(int x) : constMember(x) {} private: const int constMember; };"
              ],
              "explanation": "const members must be initialized in initializer list.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-15",
              "type": "code",
              "question": "Initialize reference member in constructor.",
              "correctAnswer": [
                "MyClass(int& ref) : refMember(ref) {} private: int& refMember;"
              ],
              "explanation": "Reference members must be initialized in initializer list.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-16",
              "type": "code",
              "question": "Create constructor with default parameters.",
              "correctAnswer": [
                "MyClass(int x = 0, int y = 0) : mx(x), my(y) {}"
              ],
              "explanation": "Default parameters make constructor flexible.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-17",
              "type": "code",
              "question": "Initialize array member in constructor.",
              "correctAnswer": [
                "MyClass() : arr{0, 1, 2, 3, 4} {} private: int arr[5];"
              ],
              "explanation": "Array members can be initialized with braces.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-18",
              "type": "code",
              "question": "Create constructor with move semantics.",
              "correctAnswer": [
                "MyClass(MyClass&& other) noexcept : member(std::move(other.member)) {}"
              ],
              "explanation": "Move constructor takes rvalue reference.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-19",
              "type": "code",
              "question": "Call parent class constructor.",
              "correctAnswer": [
                "class Derived : public Base { public: Derived(int x) : Base(x) {} };"
              ],
              "explanation": "Base constructor called in initializer list.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-20",
              "type": "code",
              "question": "Delete heap memory in destructor.",
              "correctAnswer": [
                "~MyClass() { delete ptr; ptr = nullptr; }"
              ],
              "explanation": "Clean up heap allocation in destructor.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-21",
              "type": "code",
              "question": "Delete array in destructor.",
              "correctAnswer": [
                "~MyClass() { delete[] arr; arr = nullptr; }"
              ],
              "explanation": "Use delete[] for array allocations.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-22",
              "type": "code",
              "question": "Use default constructor syntax.",
              "correctAnswer": [
                "MyClass() = default;"
              ],
              "explanation": "= default uses compiler-generated constructor.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-23",
              "type": "code",
              "question": "Make destructor virtual for inheritance.",
              "correctAnswer": [
                "virtual ~MyClass() {}"
              ],
              "explanation": "Virtual destructor ensures proper cleanup in inheritance.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-24",
              "type": "code",
              "question": "Initialize member variable order must match declaration order.",
              "correctAnswer": [
                "class MyClass { int a; int b; public: MyClass() : a(1), b(2) {} };"
              ],
              "explanation": "Members initialized in declaration order, not initializer list order.",
              "xp": 15
            },
            {
              "id": "cpp-6-3-25",
              "type": "code",
              "question": "Create noexcept destructor.",
              "correctAnswer": [
                "~MyClass() noexcept {}"
              ],
              "explanation": "noexcept indicates destructor won't throw.",
              "xp": 15
            }
          ],
          "lessonText": "# Constructors and Destructors\n\nConstructors initialize objects, destructors clean them up.\n\n## Constructors\n\n```cpp\nclass MyClass {\npublic:\n    // Default constructor\n    MyClass() : value(0) {}\n    \n    // Parameterized constructor\n    MyClass(int val) : value(val) {}\n    \n    // Copy constructor\n    MyClass(const MyClass& other) : value(other.value) {}\n    \n    // Move constructor (C++11)\n    MyClass(MyClass&& other) noexcept : value(std::move(other.value)) {}\n    \nprivate:\n    int value;\n};\n```\n\n## Member Initializer List\n\n```cpp\nclass Point {\nprivate:\n    double x, y;\n    \npublic:\n    // Using initializer list (preferred)\n    Point(double x, double y) : x(x), y(y) {}\n    \n    // Using assignment body (less efficient for some types)\n    Point(double x, double y) {\n        this->x = x;\n        this->y = y;\n    }\n};\n```\n\n**Why initializer lists?**\n- Required for const/reference members\n- More efficient for non-trivial types\n- Member initialization order is declaration order\n\n## Destructors\n\n```cpp\nclass Resource {\nprivate:\n    int* data;\n    \npublic:\n    Resource(size_t size) {\n        data = new int[size];\n    }\n    \n    ~Resource() {\n        delete[] data;  // Clean up\n        data = nullptr;\n    }\n};\n```\n\n## Constructor Features\n\n### Default Constructor\n```cpp\nclass MyClass {\npublic:\n    MyClass() = default;  // Compiler generates\n};\n```\n\n### Deleted Constructor\n```cpp\nclass MyClass {\npublic:\n    MyClass() = delete;  // Cannot create default instance\n};\n```\n\n### Explicit Constructor\n```cpp\nclass MyClass {\npublic:\n    explicit MyClass(int x) : value(x) {}  // Prevent implicit conversion\n};\n```\n\n### Constructor with Default Parameters\n```cpp\nclass MyClass {\npublic:\n    MyClass(int x = 0, int y = 0) : mx(x), my(y) {}\n};\n```\n\n### Delegating Constructor (C++11)\n```cpp\nclass MyClass {\npublic:\n    MyClass(int x) : MyClass(x, 0) {}  // Calls other constructor\n    \nprivate:\n    MyClass(int x, int y) : mx(x), my(y) {}\n};\n```\n\n## Virtual Destructors\n\n```cpp\nclass Base {\npublic:\n    virtual ~Base() {}  // Virtual for proper polymorphic cleanup\n};\n\nclass Derived : public Base {\npublic:\n    ~Derived() {}\n};\n```\n\n## Rule of Three/Five\n\nIf you need any of:\n- Destructor\n- Copy constructor\n- Copy assignment\n\nYou probably need all three (and in C++11: move constructor + move assignment).\n\n```cpp\nclass Resource {\nprivate:\n    int* data;\n    size_t size;\n    \npublic:\n    // Constructor\n    Resource(size_t s) : size(s) {\n        data = new int[size];\n    }\n    \n    // Destructor\n    ~Resource() {\n        delete[] data;\n    }\n    \n    // Copy constructor\n    Resource(const Resource& other) : size(other.size) {\n        data = new int[size];\n        std::copy(other.data, other.data + size, data);\n    }\n    \n    // Copy assignment\n    Resource& operator=(const Resource& other) {\n        if (this != &other) {\n            delete[] data;\n            size = other.size;\n            data = new int[size];\n            std::copy(other.data, other.data + size, data);\n        }\n        return *this;\n    }\n    \n    // Move constructor (C++11)\n    Resource(Resource&& other) noexcept : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n    }\n    \n    // Move assignment (C++11)\n    Resource& operator=(Resource&& other) noexcept {\n        if (this != &other) {\n            delete[] data;\n            data = other.data;\n            size = other.size;\n            other.data = nullptr;\n            other.size = 0;\n        }\n        return *this;\n    }\n};\n```\n"
        },
        {
          "id": 33,
          "title": "Member Functions",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-6-4-1",
              "type": "typing",
              "question": "What is a member function?",
              "correctAnswer": [
                "function that belongs to class",
                "method"
              ],
              "explanation": "Member function operates on class data.",
              "xp": 5
            },
            {
              "id": "cpp-6-4-2",
              "type": "typing",
              "question": "What is const member function?",
              "correctAnswer": [
                "function that cannot modify object",
                "read-only method"
              ],
              "explanation": "const member function promises not to modify member variables.",
              "xp": 5
            },
            {
              "id": "cpp-6-4-3",
              "type": "typing",
              "question": "What is static member function?",
              "correctAnswer": [
                "function that doesn't require object",
                "class method"
              ],
              "explanation": "Static member functions don't have `this` pointer.",
              "xp": 5
            },
            {
              "id": "cpp-6-4-4",
              "type": "multiple",
              "question": "Can static member function access non-static members?",
              "options": [
                "No",
                "Yes",
                "Only public",
                "Only with this pointer"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Static functions cannot access non-static members.",
              "xp": 5
            },
            {
              "id": "cpp-6-4-5",
              "type": "multiple",
              "question": "What does const at end of function mean?",
              "options": [
                "Cannot modify object",
                "Returns const",
                "Takes const parameter",
                "Const function"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "const qualifier means function cannot modify member variables.",
              "xp": 5
            },
            {
              "id": "cpp-6-4-6",
              "type": "code",
              "question": "Create public member function.",
              "correctAnswer": [
                "class MyClass { public: void myFunc() {} };"
              ],
              "explanation": "Public member function accessible from anywhere.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-7",
              "type": "code",
              "question": "Create const member function.",
              "correctAnswer": [
                "int getValue() const { return value; }"
              ],
              "explanation": "const member function cannot modify object.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-8",
              "type": "code",
              "question": "Create static member function.",
              "correctAnswer": [
                "static void staticFunc() {}",
                "static int getCount() { return count; }"
              ],
              "explanation": "Static member function doesn't need object instance.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-9",
              "type": "code",
              "question": "Use this pointer in member function.",
              "correctAnswer": [
                "void setX(int x) { this->x = x; }"
              ],
              "explanation": "this pointer points to current object.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-10",
              "type": "code",
              "question": "Create member function that returns member variable.",
              "correctAnswer": [
                "int getX() const { return x; }"
              ],
              "explanation": "Getter returns private member value.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-11",
              "type": "code",
              "question": "Create member function that modifies member variable.",
              "correctAnswer": [
                "void setX(int val) { x = val; }"
              ],
              "explanation": "Setter modifies private member value.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-12",
              "type": "code",
              "question": "Call one member function from another.",
              "correctAnswer": [
                "void func1() { func2(); } void func2() {}"
              ],
              "explanation": "Member functions can call other member functions.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-13",
              "type": "code",
              "question": "Define member function outside class.",
              "correctAnswer": [
                "class MyClass { public: void func(); }; void MyClass::func() {}"
              ],
              "explanation": "Use ClassName:: to define outside class.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-14",
              "type": "code",
              "question": "Create inline member function.",
              "correctAnswer": [
                "inline void func() {}",
                "void func() { /* defined in class */ }"
              ],
              "explanation": "Functions defined in class are implicitly inline.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-15",
              "type": "code",
              "question": "Create member function with default parameter.",
              "correctAnswer": [
                "void func(int x = 0) {}"
              ],
              "explanation": "Default parameters work in member functions.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-16",
              "type": "code",
              "question": "Create member function that returns reference.",
              "correctAnswer": [
                "int& getRef() { return value; }"
              ],
              "explanation": "Returning reference allows modification of returned value.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-17",
              "type": "code",
              "question": "Create const member function returning reference.",
              "correctAnswer": [
                "const int& getRef() const { return value; }"
              ],
              "explanation": "const reference prevents modification through returned reference.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-18",
              "type": "code",
              "question": "Create member function taking const reference.",
              "correctAnswer": [
                "void func(const string& s) {}"
              ],
              "explanation": "const reference parameter avoids copy and prevents modification.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-19",
              "type": "code",
              "question": "Override base class member function.",
              "correctAnswer": [
                "class Derived : public Base { public: void func() override {} };"
              ],
              "explanation": "override keyword ensures proper override.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-20",
              "type": "code",
              "question": "Make member function final.",
              "correctAnswer": [
                "void func() final {}",
                "class Base { virtual void func() final {} };"
              ],
              "explanation": "final prevents override in derived classes.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-21",
              "type": "code",
              "question": "Create virtual member function.",
              "correctAnswer": [
                "virtual void func() {}",
                "virtual void func() = 0;"
              ],
              "explanation": "virtual enables polymorphism.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-22",
              "type": "code",
              "question": "Create pure virtual member function.",
              "correctAnswer": [
                "virtual void func() = 0;"
              ],
              "explanation": "Pure virtual makes class abstract.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-23",
              "type": "code",
              "question": "Create member function that returns pointer.",
              "correctAnswer": [
                "int* getPtr() { return &value; }"
              ],
              "explanation": "Returning pointer allows direct access.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-24",
              "type": "code",
              "question": "Create member function with noexcept specifier.",
              "correctAnswer": [
                "void func() noexcept {}"
              ],
              "explanation": "noexcept indicates function won't throw exceptions.",
              "xp": 15
            },
            {
              "id": "cpp-6-4-25",
              "type": "code",
              "question": "Create member function taking lambda parameter.",
              "correctAnswer": [
                "void forEach(function<void(int)> func) { for (int i : vec) func(i); }"
              ],
              "explanation": "Member functions can take function objects.",
              "xp": 15
            }
          ],
          "lessonText": "# Member Functions\n\nMember functions (methods) operate on class data.\n\n## Basic Member Functions\n\n```cpp\nclass MyClass {\nprivate:\n    int value;\n    \npublic:\n    // Basic member function\n    void setValue(int v) {\n        value = v;\n    }\n    \n    // Const member function\n    int getValue() const {\n        return value;  // Cannot modify value here\n    }\n};\n```\n\n## Const Member Functions\n\n```cpp\nclass Point {\nprivate:\n    double x, y;\n    \npublic:\n    // Can modify object\n    void move(double dx, double dy) {\n        x += dx;\n        y += dy;\n    }\n    \n    // Cannot modify object (const)\n    double getX() const {\n        return x;  // Read-only access\n    }\n    \n    double getY() const {\n        return y;\n    }\n    \n    double distance() const {\n        return std::sqrt(x*x + y*y);  // Can compute but not modify\n    }\n};\n```\n\n## Static Member Functions\n\n```cpp\nclass Counter {\nprivate:\n    static int count;\n    \npublic:\n    Counter() {\n        count++;\n    }\n    \n    // Static member function\n    static int getCount() {\n        return count;  // Can only access static members\n    }\n    \n    // Non-static member function\n    int getInstanceCount() const {\n        return Counter::getCount();  // Can call static function\n    }\n};\n\nint Counter::count = 0;\n\n// Usage\nint c = Counter::getCount();  // Call without object\n```\n\n## Defining Functions Outside Class\n\n```cpp\n// Header\nclass MyClass {\npublic:\n    void func();\n    int getValue() const;\n};\n\n// Implementation\nvoid MyClass::func() {\n    // Implementation\n}\n\nint MyClass::getValue() const {\n    return value;\n}\n```\n\n## Inline Functions\n\n```cpp\nclass MyClass {\npublic:\n    // Implicitly inline (defined in class)\n    int getValue() const {\n        return value;\n    }\n};\n\n// Explicitly inline\ninline int MyClass::getValue() const {\n    return value;\n}\n```\n\n## Virtual Functions\n\n```cpp\nclass Shape {\npublic:\n    virtual double area() const = 0;  // Pure virtual\n    virtual void draw() const {\n        std::cout << \"Drawing shape\\n\";\n    }\n};\n\nclass Circle : public Shape {\npublic:\n    double area() const override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() const override {\n        std::cout << \"Drawing circle\\n\";\n    }\n    \nprivate:\n    double radius;\n};\n```\n\n## this Pointer\n\n```cpp\nclass MyClass {\nprivate:\n    int value;\n    \npublic:\n    void setValue(int value) {\n        this->value = value;  // this-> disambiguates\n    }\n    \n    MyClass& setValueAndReturn(int value) {\n        this->value = value;\n        return *this;  // Return reference to current object\n    }\n};\n\n// Chaining\nobj.setValue(10).setValue(20).setValue(30);\n```\n\n## Const Overloading\n\n```cpp\nclass MyClass {\npublic:\n    // Non-const version\n    int& operator[](int index) {\n        return data[index];  // Can modify\n    }\n    \n    // Const version\n    const int& operator[](int index) const {\n        return data[index];  // Cannot modify\n    }\n    \nprivate:\n    int data[10];\n};\n```\n\n## noexcept Member Functions\n\n```cpp\nclass MyClass {\npublic:\n    // Promises not to throw\n    int getValue() const noexcept {\n        return value;\n    }\n    \n    // May throw\n    void riskyOperation();\n};\n```\n"
        },
        {
          "id": 34,
          "title": "this Pointer",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-6-5-1",
              "type": "typing",
              "question": "What is this pointer?",
              "correctAnswer": [
                "pointer to current object"
              ],
              "explanation": "this pointer points to current object.",
              "xp": 5
            },
            {
              "id": "cpp-6-5-2",
              "type": "typing",
              "question": "What is the type of this pointer?",
              "correctAnswer": [
                "ClassName*"
              ],
              "explanation": "this is pointer to class type.",
              "xp": 5
            },
            {
              "id": "cpp-6-5-3",
              "type": "typing",
              "question": "Can this pointer be modified?",
              "correctAnswer": [
                "no"
              ],
              "explanation": "this pointer cannot be reassigned.",
              "xp": 5
            },
            {
              "id": "cpp-6-5-4",
              "type": "multiple",
              "question": "Can this pointer be null?",
              "options": [
                "No",
                "Yes"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "this is always valid.",
              "xp": 5
            },
            {
              "id": "cpp-6-5-5",
              "type": "multiple",
              "question": "What type in const member function?",
              "options": [
                "const ClassName*",
                "ClassName*"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "this is const pointer.",
              "xp": 5
            },
            {
              "id": "cpp-6-5-6",
              "type": "code",
              "question": "Use this pointer to access member variable.",
              "correctAnswer": [
                "this->x"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-7",
              "type": "code",
              "question": "Use this pointer to call member function.",
              "correctAnswer": [
                "this->func()"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-8",
              "type": "code",
              "question": "Return pointer to current object.",
              "correctAnswer": [
                "return this;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-9",
              "type": "code",
              "question": "Return reference for chaining.",
              "correctAnswer": [
                "return *this;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-10",
              "type": "code",
              "question": "Compare this pointer with another object.",
              "correctAnswer": [
                "if (this == &other)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-11",
              "type": "code",
              "question": "Pass this pointer to another function.",
              "correctAnswer": [
                "process(this);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-12",
              "type": "code",
              "question": "Use this to resolve name conflict.",
              "correctAnswer": [
                "void setX(int x) { this->x = x; }"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-13",
              "type": "code",
              "question": "Chain method calls using this.",
              "correctAnswer": [
                "return *this;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-14",
              "type": "code",
              "question": "Use this in copy assignment operator.",
              "correctAnswer": [
                "if (this != &other)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-15",
              "type": "code",
              "question": "Use this in constructor.",
              "correctAnswer": [
                "this->x = x;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-16",
              "type": "code",
              "question": "Get address of current object.",
              "correctAnswer": [
                "this"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-17",
              "type": "code",
              "question": "Access base class member.",
              "correctAnswer": [
                "Base::func();"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-18",
              "type": "code",
              "question": "Use this with same type parameter.",
              "correctAnswer": [
                "void merge(const MyClass& other) { this->x += other.x; }"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-19",
              "type": "code",
              "question": "Capture this in lambda.",
              "correctAnswer": [
                "[this]() { this->x = 10; }"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-20",
              "type": "code",
              "question": "Member pointer access.",
              "correctAnswer": [
                "(this->*memberPtr)()"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-21",
              "type": "code",
              "question": "Implement operator<<.",
              "correctAnswer": [
                "friend ostream& operator<<(ostream& os, const MyClass& obj)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-22",
              "type": "code",
              "question": "Implement binary operator.",
              "correctAnswer": [
                "MyClass operator+(const MyClass& other) const"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-23",
              "type": "code",
              "question": "Implement comparison operator.",
              "correctAnswer": [
                "bool operator==(const MyClass& other) const"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-24",
              "type": "code",
              "question": "Lambda call member function.",
              "correctAnswer": [
                "[this]() { this->method(); }();"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-5-25",
              "type": "code",
              "question": "Callback with this capture.",
              "correctAnswer": [
                "[this](int x) { this->handle(x); }"
              ],
              "xp": 15
            }
          ],
          "lessonText": "# this Pointer\n\nThe `this` pointer points to the current object.\n\n```cpp\nclass MyClass {\npublic:\n    void setX(int x) {\n        this->x = x;  // Use this pointer\n    }\n};\n```\n\n**Key Points:**\n- `this` is available in all non-static member functions\n- Cannot be modified\n- Used to resolve name conflicts\n- Return `*this` for method chaining"
        },
        {
          "id": 35,
          "title": "Operator Overloading",
          "unitTitle": "6. Object-Oriented Programming in C++",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-6-6-1",
              "type": "typing",
              "question": "What is operator overloading?",
              "correctAnswer": [
                "give custom behavior to operators"
              ],
              "explanation": "Operator overloading gives custom meaning.",
              "xp": 5
            },
            {
              "id": "cpp-6-6-2",
              "type": "typing",
              "question": "Can you overload all operators?",
              "correctAnswer": [
                "no"
              ],
              "explanation": "Some operators cannot be overloaded.",
              "xp": 5
            },
            {
              "id": "cpp-6-6-3",
              "type": "typing",
              "question": "What syntax for operator overloading?",
              "correctAnswer": [
                "operator@"
              ],
              "explanation": "Use operator keyword.",
              "xp": 5
            },
            {
              "id": "cpp-6-6-4",
              "type": "multiple",
              "question": "Which operator cannot be overloaded?",
              "options": [
                "::",
                "+",
                "*"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": ":: cannot be overloaded.",
              "xp": 5
            },
            {
              "id": "cpp-6-6-5",
              "type": "multiple",
              "question": "Can you create new operators?",
              "options": [
                "No",
                "Yes"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Cannot create new operators.",
              "xp": 5
            },
            {
              "id": "cpp-6-6-6",
              "type": "code",
              "question": "Overload + operator as member function.",
              "correctAnswer": [
                "MyClass operator+(const MyClass& other) const"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-7",
              "type": "code",
              "question": "Overload == operator.",
              "correctAnswer": [
                "bool operator==(const MyClass& other) const"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-8",
              "type": "code",
              "question": "Overload [] operator.",
              "correctAnswer": [
                "int& operator[](int index)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-9",
              "type": "code",
              "question": "Overload () operator.",
              "correctAnswer": [
                "int operator()(int x, int y) const"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-10",
              "type": "code",
              "question": "Overload << operator.",
              "correctAnswer": [
                "friend ostream& operator<<(ostream& os, const MyClass& obj)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-11",
              "type": "code",
              "question": "Overload >> operator.",
              "correctAnswer": [
                "friend istream& operator>>(istream& is, MyClass& obj)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-12",
              "type": "code",
              "question": "Overload prefix ++ operator.",
              "correctAnswer": [
                "MyClass& operator++()"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-13",
              "type": "code",
              "question": "Overload postfix ++ operator.",
              "correctAnswer": [
                "MyClass operator++(int)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-14",
              "type": "code",
              "question": "Overload = operator.",
              "correctAnswer": [
                "MyClass& operator=(const MyClass& other)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-15",
              "type": "code",
              "question": "Overload += operator.",
              "correctAnswer": [
                "MyClass& operator+=(const MyClass& other)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-16",
              "type": "code",
              "question": "Overload < operator.",
              "correctAnswer": [
                "bool operator<(const MyClass& other) const"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-17",
              "type": "code",
              "question": "Overload ! operator.",
              "correctAnswer": [
                "bool operator!() const"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-18",
              "type": "code",
              "question": "Overload * operator.",
              "correctAnswer": [
                "int& operator*()"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-19",
              "type": "code",
              "question": "Overload -> operator.",
              "correctAnswer": [
                "Type* operator->()"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-20",
              "type": "code",
              "question": "Overload conversion operator to int.",
              "correctAnswer": [
                "operator int() const"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-21",
              "type": "code",
              "question": "Overload new operator.",
              "correctAnswer": [
                "void* operator new(size_t size)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-22",
              "type": "code",
              "question": "Overload delete operator.",
              "correctAnswer": [
                "void operator delete(void* ptr)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-23",
              "type": "code",
              "question": "Overload comma operator.",
              "correctAnswer": [
                "MyClass operator,(const MyClass& other)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-24",
              "type": "code",
              "question": "Overload != using ==.",
              "correctAnswer": [
                "bool operator!=(const MyClass& other) const"
              ],
              "xp": 15
            },
            {
              "id": "cpp-6-6-25",
              "type": "code",
              "question": "Overload >= using <.",
              "correctAnswer": [
                "bool operator>=(const MyClass& other) const"
              ],
              "xp": 15
            }
          ],
          "lessonText": "# Operator Overloading\n\nOperator overloading gives custom behavior to operators.\n\n```cpp\nclass Vector {\npublic:\n    Vector operator+(const Vector& other) const {\n        return Vector{x + other.x, y + other.y};\n    }\n};\n```\n\n**Common Operators:**\n- Arithmetic: +, -, *, /\n- Comparison: ==, !=, <, >\n- Stream: <<, >>\n- Index: []\n- Function call: ()\n\n**Cannot overload:** ::, ., .*, ?:"
        }
      ]
    },
    {
      "unitId": "7",
      "unitName": "7. Resource Management",
      "lessons": [
        {
          "id": 36,
          "title": "RAII (Resource Acquisition Is Initialization)",
          "unitTitle": "7. Resource Management",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-7-1-1",
              "type": "typing",
              "question": "What does RAII stand for?",
              "correctAnswer": [
                "Resource Acquisition Is Initialization"
              ],
              "explanation": "RAII is a C++ idiom where resource acquisition is tied to object lifetime.",
              "xp": 5
            },
            {
              "id": "cpp-7-1-2",
              "type": "typing",
              "question": "When are resources released in RAII?",
              "correctAnswer": [
                "in destructor",
                "when object is destroyed",
                "out of scope"
              ],
              "explanation": "Resources are automatically released in destructor when object goes out of scope.",
              "xp": 5
            },
            {
              "id": "cpp-7-1-3",
              "type": "typing",
              "question": "What is the benefit of RAII?",
              "correctAnswer": [
                "automatic resource cleanup",
                "no memory leaks",
                "exception safety"
              ],
              "explanation": "RAII ensures automatic cleanup even when exceptions occur.",
              "xp": 5
            },
            {
              "id": "cpp-7-1-4",
              "type": "multiple",
              "question": "Does RAII work with exceptions?",
              "options": [
                "Yes",
                "No",
                "Only with try-catch",
                "Only with noexcept"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "RAII works correctly with exceptions - destructor is called during stack unwinding.",
              "xp": 5
            },
            {
              "id": "cpp-7-1-5",
              "type": "multiple",
              "question": "What happens when exception is thrown in RAII class?",
              "options": [
                "Destructor is called",
                "Resource is leaked",
                "Program crashes",
                "Undefined"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Destructor is automatically called during stack unwinding, releasing resources.",
              "xp": 5
            },
            {
              "id": "cpp-7-1-6",
              "type": "code",
              "question": "Create RAII class managing file handle.",
              "correctAnswer": [
                "class FileHandle { FILE* f; public: FileHandle(const char* path) { f = fopen(path, \"r\"); } ~FileHandle() { if (f) fclose(f); } };"
              ],
              "explanation": "RAII class acquires resource in constructor, releases in destructor.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-7",
              "type": "code",
              "question": "Create RAII class managing dynamic array.",
              "correctAnswer": [
                "class Array { int* data; size_t size; public: Array(size_t n) : size(n) { data = new int[n]; } ~Array() { delete[] data; } };"
              ],
              "explanation": "RAII ensures array is deleted when object goes out of scope.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-8",
              "type": "code",
              "question": "Create RAII class with lock using mutex.",
              "correctAnswer": [
                "class LockGuard { mutex& m; public: LockGuard(mutex& mtx) : m(mtx) { m.lock(); } ~LockGuard() { m.unlock(); } };"
              ],
              "explanation": "RAII lock guard ensures mutex is unlocked even with exceptions.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-9",
              "type": "code",
              "question": "Use RAII to open file and ensure it's closed.",
              "correctAnswer": [
                "{ FileHandle file(\"data.txt\"); /* use file */ } // file automatically closed"
              ],
              "explanation": "Scope-based RAII ensures resource cleanup.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-10",
              "type": "code",
              "question": "Create RAII wrapper for socket.",
              "correctAnswer": [
                "class Socket { int sock; public: Socket() { sock = socket(AF_INET, SOCK_STREAM, 0); } ~Socket() { close(sock); } };"
              ],
              "explanation": "RAII wrapper ensures socket is closed when object destroyed.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-11",
              "type": "code",
              "question": "Create RAII class managing database connection.",
              "correctAnswer": [
                "class DBConnection { Connection* conn; public: DBConnection() { conn = new Connection(); } ~DBConnection() { delete conn; } };"
              ],
              "explanation": "RAII ensures database connection is properly closed.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-12",
              "type": "code",
              "question": "Create RAII buffer with custom cleanup.",
              "correctAnswer": [
                "class Buffer { void* buf; public: Buffer(size_t size) { buf = malloc(size); } ~Buffer() { free(buf); } };"
              ],
              "explanation": "RAII can wrap any resource with cleanup function.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-13",
              "type": "code",
              "question": "Use RAII with std::unique_ptr.",
              "correctAnswer": [
                "std::unique_ptr<int, void(*)(int*)> ptr(malloc(sizeof(int)), free);"
              ],
              "explanation": "unique_ptr with custom deleter implements RAII for any resource.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-14",
              "type": "code",
              "question": "Create RAII timer measuring scope duration.",
              "correctAnswer": [
                "class Timer { clock_t start; public: Timer() : start(clock()) {} ~Timer() { cout << clock() - start << \" ms\" << endl; } };"
              ],
              "explanation": "RAII timer automatically prints duration when scope ends.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-15",
              "type": "code",
              "question": "Create RAII class with move-only semantics.",
              "correctAnswer": [
                "class Resource { int* data; public: Resource() { data = new int; } ~Resource() { delete data; } Resource(const Resource&) = delete; Resource& operator=(const Resource&) = delete; Resource(Resource&& other) noexcept; };"
              ],
              "explanation": "Move-only RAII prevents accidental copying of unique resources.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-16",
              "type": "code",
              "question": "Use RAII to manage temporary file.",
              "correctAnswer": [
                "class TempFile { string path; public: TempFile() { path = \"/tmp/\" + to_string(getpid()); } ~TempFile() { remove(path.c_str()); } const char* getPath() const { return path.c_str(); } };"
              ],
              "explanation": "RAII ensures temporary file is deleted when object destroyed.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-17",
              "type": "code",
              "question": "Create RAII class changing directory.",
              "correctAnswer": [
                "class DirGuard { string old; public: DirGuard(const string& newDir) { old = getcwd(nullptr, 0); chdir(newDir.c_str()); } ~DirGuard() { chdir(old.c_str()); } };"
              ],
              "explanation": "RAII directory guard restores original directory when scope ends.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-18",
              "type": "code",
              "question": "Implement RAII for OpenGL buffer.",
              "correctAnswer": [
                "class GLBuffer { GLuint id; public: GLBuffer() { glGenBuffers(1, &id); } ~GLBuffer() { glDeleteBuffers(1, &id); } GLuint get() const { return id; } };"
              ],
              "explanation": "RAII wrapper ensures OpenGL resources are released.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-19",
              "type": "code",
              "question": "Create RAII class with disabled copy and assignment.",
              "correctAnswer": [
                "class Resource { public: Resource(const Resource&) = delete; Resource& operator=(const Resource&) = delete; };"
              ],
              "explanation": "Delete copy constructor and assignment to prevent issues.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-20",
              "type": "code",
              "question": "Use RAII to measure function execution time.",
              "correctAnswer": [
                "void myFunc() { Timer timer; /* function code */ } // Timer destructor prints time"
              ],
              "explanation": "RAII timer automatically measures function duration.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-21",
              "type": "code",
              "question": "Create RAII wrapper for C library resource.",
              "correctAnswer": [
                "class CResource { void* handle; public: CResource() { handle = create_resource(); } ~CResource() { destroy_resource(handle); } };"
              ],
              "explanation": "RAII can wrap any C resource with create/destroy functions.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-22",
              "type": "code",
              "question": "Implement RAII with acquire/release functions.",
              "correctAnswer": [
                "class Resource { void* r; public: Resource() { r = acquire(); } ~Resource() { release(r); } };"
              ],
              "explanation": "RAII pattern works with any acquire/release pair.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-23",
              "type": "code",
              "question": "Create RAII class managing thread.",
              "correctAnswer": [
                "class ThreadGuard { thread t; public: ThreadGuard(thread&& th) : t(std::move(th)) {} ~ThreadGuard() { if (t.joinable()) t.join(); } };"
              ],
              "explanation": "RAII thread guard ensures thread is joined when destroyed.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-24",
              "type": "code",
              "question": "Use RAII to temporarily change state.",
              "correctAnswer": [
                "class StateGuard { int& state; int old; public: StateGuard(int& s, int val) : state(s), old(state) { state = val; } ~StateGuard() { state = old; } };"
              ],
              "explanation": "RAII state guard restores original state when scope ends.",
              "xp": 15
            },
            {
              "id": "cpp-7-1-25",
              "type": "code",
              "question": "Create RAII wrapper with custom deleter function.",
              "correctAnswer": [
                "class Resource { void* r; void(*del)(void*); public: Resource(void* p, void(*d)(void*)) : r(p), del(d) {} ~Resource() { del(r); } };"
              ],
              "explanation": "Custom deleter function allows RAII for any resource type.",
              "xp": 15
            }
          ],
          "lessonText": "# RAII: Resource Acquisition Is Initialization\n\nRAII is a C++ idiom that ties resource lifetime to object lifetime.\n\n## What is RAII?\n\nRAII stands for **Resource Acquisition Is Initialization**. The core idea:\n\n- Acquire resource in **constructor**\n- Release resource in **destructor**\n\n```cpp\nclass FileHandle {\nprivate:\n    FILE* file;\n    \npublic:\n    // Acquire resource\n    FileHandle(const char* filename) {\n        file = fopen(filename, \"r\");\n        if (!file) {\n            throw std::runtime_error(\"Failed to open file\");\n        }\n    }\n    \n    // Release resource\n    ~FileHandle() {\n        if (file) {\n            fclose(file);\n        }\n    }\n    \n    // Disable copying\n    FileHandle(const FileHandle&) = delete;\n    FileHandle& operator=(const FileHandle&) = delete;\n};\n\n// Usage\n{\n    FileHandle f(\"data.txt\");\n    // Use file...\n} // Automatically closed when f goes out of scope\n```\n\n## Exception Safety\n\nRAII provides strong exception safety:\n\n```cpp\nvoid processData() {\n    FileHandle input(\"input.txt\");\n    FileHandle output(\"output.txt\");\n    \n    // Process data...\n    \n    // Even if exception is thrown here,\n    // both files are automatically closed\n}\n```\n\n## Common RAII Patterns\n\n### 1. Smart Pointers\n\n```cpp\n// unique_ptr - exclusive ownership\nstd::unique_ptr<int> ptr(new int(42));\n\n// shared_ptr - shared ownership\nstd::shared_ptr<int> shared = std::make_shared<int>(42);\n```\n\n### 2. Lock Guard\n\n```cpp\nclass LockGuard {\nprivate:\n    std::mutex& mutex;\n    \npublic:\n    LockGuard(std::mutex& m) : mutex(m) {\n        mutex.lock();\n    }\n    \n    ~LockGuard() {\n        mutex.unlock();\n    }\n};\n\n// Or use std::lock_guard\nstd::mutex mtx;\n{\n    std::lock_guard<std::mutex> lock(mtx);\n    // Critical section...\n} // Automatically unlocked\n```\n\n### 3. Scope Timer\n\n```cpp\nclass Timer {\nprivate:\n    std::chrono::time_point<std::chrono::high_resolution_clock> start;\n    \npublic:\n    Timer() : start(std::chrono::high_resolution_clock::now()) {}\n    \n    ~Timer() {\n        auto end = std::chrono::high_resolution_clock::now();\n        auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(end - start);\n        std::cout << \"Time: \" << duration.count() << \"ms\\n\";\n    }\n};\n\n// Usage\nvoid myFunction() {\n    Timer timer;  // Starts timing\n    // Do work...\n} // Automatically prints time when function ends\n```\n\n## RAII Benefits\n\n✅ **Automatic cleanup** - No need to remember to free resources\n✅ **Exception safe** - Resources released even when exceptions occur\n✅ **Prevents leaks** - Guaranteed cleanup in all code paths\n✅ **Clear ownership** - Resource lifetime is explicit\n✅ **Thread safe** - Proper locking and unlocking\n\n## Move Semantics with RAII\n\n```cpp\nclass Resource {\nprivate:\n    int* data;\n    \npublic:\n    // Constructor\n    Resource(size_t size) : data(new int[size]) {}\n    \n    // Destructor\n    ~Resource() {\n        delete[] data;\n    }\n    \n    // Move constructor\n    Resource(Resource&& other) noexcept : data(other.data) {\n        other.data = nullptr;\n    }\n    \n    // Move assignment\n    Resource& operator=(Resource&& other) noexcept {\n        if (this != &other) {\n            delete[] data;\n            data = other.data;\n            other.data = nullptr;\n        }\n        return *this;\n    }\n    \n    // Disable copy\n    Resource(const Resource&) = delete;\n    Resource& operator=(const Resource&) = delete;\n};\n```\n\n## RAII for C Resources\n\n```cpp\nclass CResourceWrapper {\nprivate:\n    void* handle;\n    \npublic:\n    CResourceWrapper() {\n        handle = create_c_resource();\n    }\n    \n    ~CResourceWrapper() {\n        if (handle) {\n            destroy_c_resource(handle);\n        }\n    }\n    \n    // Prevent copying\n    CResourceWrapper(const CResourceWrapper&) = delete;\n    CResourceWrapper& operator=(const CResourceWrapper&) = delete;\n};\n```\n"
        },
        {
          "id": 37,
          "title": "Copy Constructor and Copy Assignment",
          "unitTitle": "7. Resource Management",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-7-2-1",
              "type": "typing",
              "question": "What is copy constructor?",
              "correctAnswer": [
                "creates new object from existing"
              ],
              "explanation": "Copy constructor initializes new object from existing one.",
              "xp": 5
            },
            {
              "id": "cpp-7-2-2",
              "type": "typing",
              "question": "When is copy constructor called?",
              "correctAnswer": [
                "when object is passed by value",
                "when object is copied"
              ],
              "explanation": "Copy constructor called when object is copied.",
              "xp": 5
            },
            {
              "id": "cpp-7-2-3",
              "type": "typing",
              "question": "What is copy assignment operator?",
              "correctAnswer": [
                "assigns values from one object to another",
                "operator="
              ],
              "explanation": "Copy assignment assigns one object's values to another.",
              "xp": 5
            },
            {
              "id": "cpp-7-2-4",
              "type": "multiple",
              "question": "Should copy assignment check for self-assignment?",
              "options": [
                "Yes",
                "No",
                "Only for pointers",
                "Only for references"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Always check for self-assignment to prevent issues.",
              "xp": 5
            },
            {
              "id": "cpp-7-2-5",
              "type": "multiple",
              "question": "What does copy assignment return?",
              "options": [
                "reference to *this",
                "void",
                "copy of object",
                "pointer"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Copy assignment should return reference to *this.",
              "xp": 5
            },
            {
              "id": "cpp-7-2-6",
              "type": "code",
              "question": "Define copy constructor.",
              "correctAnswer": [
                "MyClass(const MyClass& other) { /* copy */ }"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-7",
              "type": "code",
              "question": "Define copy assignment operator.",
              "correctAnswer": [
                "MyClass& operator=(const MyClass& other)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-8",
              "type": "code",
              "question": "Check self-assignment in copy assignment.",
              "correctAnswer": [
                "if (this != &other)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-9",
              "type": "code",
              "question": "Return *this from copy assignment.",
              "correctAnswer": [
                "return *this;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-10",
              "type": "code",
              "question": "Deep copy array in copy constructor.",
              "correctAnswer": [
                "data = new int[size]; std::copy(other.data, other.data + size, data);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-11",
              "type": "code",
              "question": "Delete old data before copy in assignment.",
              "correctAnswer": [
                "delete[] data; data = new int[size];"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-12",
              "type": "code",
              "question": "Use member initializer list in copy constructor.",
              "correctAnswer": [
                "MyClass(const MyClass& other) : size(other.size), data(new int[size]) {}"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-13",
              "type": "code",
              "question": "Delete copy constructor.",
              "correctAnswer": [
                "MyClass(const MyClass&) = delete;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-14",
              "type": "code",
              "question": "Delete copy assignment operator.",
              "correctAnswer": [
                "MyClass& operator=(const MyClass&) = delete;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-15",
              "type": "code",
              "question": "Copy string in copy constructor.",
              "correctAnswer": [
                "str = new char[strlen(other.str) + 1]; strcpy(str, other.str);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-16",
              "type": "code",
              "question": "Copy vector in copy constructor.",
              "correctAnswer": [
                "vec = other.vec;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-17",
              "type": "code",
              "question": "Handle nullptr in copy constructor.",
              "correctAnswer": [
                "if (other.data) { data = new int[size]; copy... } else { data = nullptr; }"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-18",
              "type": "code",
              "question": "Implement swap function for copy assignment.",
              "correctAnswer": [
                "void swap(MyClass& other) { std::swap(data, other.data); std::swap(size, other.size); }"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-19",
              "type": "code",
              "question": "Use copy-and-swap idiom.",
              "correctAnswer": [
                "MyClass& operator=(MyClass other) { swap(other); return *this; }"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-20",
              "type": "code",
              "question": "Copy constructor with exception safety.",
              "correctAnswer": [
                "MyClass(const MyClass& other) try : size(other.size) { data = new int[size]; } catch (...) { data = nullptr; size = 0; throw; }"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-21",
              "type": "code",
              "question": "Copy multiple members in copy constructor.",
              "correctAnswer": [
                "MyClass(const MyClass& other) : a(other.a), b(other.b), c(other.c) {}"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-22",
              "type": "code",
              "question": "Assign multiple members in copy assignment.",
              "correctAnswer": [
                "a = other.a; b = other.b; c = other.c; return *this;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-23",
              "type": "code",
              "question": "Make copy assignment noexcept.",
              "correctAnswer": [
                "MyClass& operator=(const MyClass& other) noexcept"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-24",
              "type": "code",
              "question": "Use std::copy for array copy.",
              "correctAnswer": [
                "std::copy(other.data, other.data + size, data);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-2-25",
              "type": "code",
              "question": "Copy with move semantics fallback.",
              "correctAnswer": [
                "MyClass(const MyClass& other) : data(new int[other.size]) {}"
              ],
              "xp": 15
            }
          ],
          "lessonText": "# Copy Constructor and Copy Assignment\n\nCopy operations control how objects are copied.\n\n```cpp\nclass MyClass {\nprivate:\n    int* data;\n    size_t size;\npublic:\n    // Copy constructor\n    MyClass(const MyClass& other) : size(other.size) {\n        data = new int[size];\n        std::copy(other.data, other.data + size, data);\n    }\n    \n    // Copy assignment\n    MyClass& operator=(const MyClass& other) {\n        if (this != &other) {\n            delete[] data;\n            size = other.size;\n            data = new int[size];\n            std::copy(other.data, other.data + size, data);\n        }\n        return *this;\n    }\n};\n```\n\n**Key points:**\n- Copy constructor: `ClassName(const ClassName& other)`\n- Copy assignment: `operator=(const ClassName& other)`\n- Check self-assignment: `if (this != &other)`\n- Return `*this` from assignment"
        },
        {
          "id": 38,
          "title": "Move Constructor and Move Assignment",
          "unitTitle": "7. Resource Management",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-7-3-1",
              "type": "typing",
              "question": "What is move constructor?",
              "correctAnswer": [
                "transfers ownership from temporary object"
              ],
              "explanation": "Move constructor transfers ownership from temporary.",
              "xp": 5
            },
            {
              "id": "cpp-7-3-2",
              "type": "typing",
              "question": "What parameter type for move constructor?",
              "correctAnswer": [
                "rvalue reference",
                "ClassName&&",
                "T&&"
              ],
              "explanation": "Move constructor takes rvalue reference.",
              "xp": 5
            },
            {
              "id": "cpp-7-3-3",
              "type": "typing",
              "question": "Why use move semantics?",
              "correctAnswer": [
                "avoid unnecessary copies",
                "transfer ownership",
                "performance"
              ],
              "explanation": "Move semantics avoid copying by transferring ownership.",
              "xp": 5
            },
            {
              "id": "cpp-7-3-4",
              "type": "multiple",
              "question": "Should move operations be noexcept?",
              "options": [
                "Yes",
                "No",
                "Only for simple types",
                "Only for built-in"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Move operations should be noexcept for optimal performance.",
              "xp": 5
            },
            {
              "id": "cpp-7-3-5",
              "type": "multiple",
              "question": "What happens to source after move?",
              "options": [
                "Left in valid but unspecified state",
                "Destroyed",
                "Null",
                "Unchanged"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Source is left in valid state but value is unspecified.",
              "xp": 5
            },
            {
              "id": "cpp-7-3-6",
              "type": "code",
              "question": "Define move constructor.",
              "correctAnswer": [
                "MyClass(MyClass&& other) noexcept"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-7",
              "type": "code",
              "question": "Define move assignment operator.",
              "correctAnswer": [
                "MyClass& operator=(MyClass&& other) noexcept"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-8",
              "type": "code",
              "question": "Transfer pointer in move constructor.",
              "correctAnswer": [
                "data = other.data; other.data = nullptr;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-9",
              "type": "code",
              "question": "Check self-assignment in move assignment.",
              "correctAnswer": [
                "if (this != &other)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-10",
              "type": "code",
              "question": "Return *this from move assignment.",
              "correctAnswer": [
                "return *this;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-11",
              "type": "code",
              "question": "Use std::move to force move.",
              "correctAnswer": [
                "obj2 = std::move(obj1);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-12",
              "type": "code",
              "question": "Move string in move constructor.",
              "correctAnswer": [
                "str = other.str; other.str = nullptr;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-13",
              "type": "code",
              "question": "Move vector in move constructor.",
              "correctAnswer": [
                "vec = std::move(other.vec);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-14",
              "type": "code",
              "question": "Delete move constructor.",
              "correctAnswer": [
                "MyClass(MyClass&&) = delete;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-15",
              "type": "code",
              "question": "Delete move assignment operator.",
              "correctAnswer": [
                "MyClass& operator=(MyClass&&) = delete;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-16",
              "type": "code",
              "question": "Move unique_ptr.",
              "correctAnswer": [
                "ptr = std::move(other.ptr);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-17",
              "type": "code",
              "question": "Set source to null after move.",
              "correctAnswer": [
                "other.data = nullptr;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-18",
              "type": "code",
              "question": "Use std::exchange in move.",
              "correctAnswer": [
                "data = std::exchange(other.data, nullptr);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-19",
              "type": "code",
              "question": "Move with member initializer list.",
              "correctAnswer": [
                "MyClass(MyClass&& other) noexcept : data(std::exchange(other.data, nullptr)) {}"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-20",
              "type": "code",
              "question": "Move assignment with self-check.",
              "correctAnswer": [
                "if (this != &other) { delete[] data; data = std::exchange(other.data, nullptr); } return *this;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-21",
              "type": "code",
              "question": "Pass by rvalue reference.",
              "correctAnswer": [
                "void func(MyClass&& obj)",
                "MyClass&& param"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-22",
              "type": "code",
              "question": "Return by move.",
              "correctAnswer": [
                "return std::move(*this);",
                "return std::move(result);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-23",
              "type": "code",
              "question": "Make move constructor noexcept.",
              "correctAnswer": [
                "MyClass(MyClass&& other) noexcept"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-24",
              "type": "code",
              "question": "Use std::move in return statement.",
              "correctAnswer": [
                "return std::move(local_obj);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-3-25",
              "type": "code",
              "question": "Implement both copy and move.",
              "correctAnswer": [
                "MyClass(const MyClass& other); MyClass(MyClass&& other) noexcept;"
              ],
              "xp": 15
            }
          ],
          "lessonText": "# Move Constructor and Move Assignment\n\nMove operations transfer ownership of resources.\n\n```cpp\nclass MyClass {\nprivate:\n    int* data;\npublic:\n    // Move constructor\n    MyClass(MyClass&& other) noexcept : data(other.data) {\n        other.data = nullptr;  // Leave source in valid state\n    }\n    \n    // Move assignment\n    MyClass& operator=(MyClass&& other) noexcept {\n        if (this != &other) {\n            delete[] data;\n            data = other.data;\n            other.data = nullptr;\n        }\n        return *this;\n    }\n};\n```\n\n**Key points:**\n- Takes rvalue reference: `ClassName(ClassName&& other)`\n- Transfer ownership, don't copy\n- Leave source in valid state\n- Mark noexcept when possible"
        },
        {
          "id": 39,
          "title": "Rule of Three / Five / Zero",
          "unitTitle": "7. Resource Management",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-7-4-1",
              "type": "typing",
              "question": "What is Rule of Three?",
              "correctAnswer": [
                "need destructor, copy constructor, copy assignment together"
              ],
              "explanation": "If you need one, you need all three.",
              "xp": 5
            },
            {
              "id": "cpp-7-4-2",
              "type": "typing",
              "question": "What is Rule of Five?",
              "correctAnswer": [
                "Rule of Three plus move constructor and move assignment"
              ],
              "explanation": "Rule of Five adds move operations to Rule of Three.",
              "xp": 5
            },
            {
              "id": "cpp-7-4-3",
              "type": "typing",
              "question": "What is Rule of Zero?",
              "correctAnswer": [
                "use smart pointers, avoid manual resource management"
              ],
              "explanation": "Rule of Zero prefers using smart pointers over manual management.",
              "xp": 5
            },
            {
              "id": "cpp-7-4-4",
              "type": "multiple",
              "question": "When should you follow Rule of Zero?",
              "options": [
                "When using smart pointers",
                "When using raw pointers",
                "Always",
                "Never"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Rule of Zero when using smart pointers or standard containers.",
              "xp": 5
            },
            {
              "id": "cpp-7-4-5",
              "type": "multiple",
              "question": "Which rule is preferred in modern C++?",
              "options": [
                "Rule of Zero",
                "Rule of Three",
                "Rule of Five",
                "All equal"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "Rule of Zero is preferred - use smart pointers.",
              "xp": 5
            },
            {
              "id": "cpp-7-4-6",
              "type": "code",
              "question": "Delete copy operations (Rule of Five).",
              "correctAnswer": [
                "MyClass(const MyClass&) = delete; MyClass& operator=(const MyClass&) = delete;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-7",
              "type": "code",
              "question": "Implement Rule of Five.",
              "correctAnswer": [
                "~MyClass(); MyClass(const MyClass&); MyClass& operator=(const MyClass&); MyClass(MyClass&&) noexcept; MyClass& operator=(MyClass&&) noexcept;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-8",
              "type": "code",
              "question": "Use Rule of Zero with unique_ptr.",
              "correctAnswer": [
                "class MyClass { unique_ptr<int> ptr; };"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-9",
              "type": "code",
              "question": "Use Rule of Zero with vector.",
              "correctAnswer": [
                "class MyClass { vector<int> vec; };"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-10",
              "type": "code",
              "question": "Make class move-only (Rule of Five).",
              "correctAnswer": [
                "MyClass(const MyClass&) = delete; MyClass& operator=(const MyClass&) = delete; MyClass(MyClass&&) noexcept; MyClass& operator=(MyClass&&) noexcept;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-11",
              "type": "code",
              "question": "Disable copy operations.",
              "correctAnswer": [
                "MyClass(const MyClass&) = delete; MyClass& operator=(const MyClass&) = delete;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-12",
              "type": "code",
              "question": "Use = default for copy operations.",
              "correctAnswer": [
                "MyClass(const MyClass&) = default; MyClass& operator=(const MyClass&) = default;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-13",
              "type": "code",
              "question": "Use = default for move operations.",
              "correctAnswer": [
                "MyClass(MyClass&&) noexcept = default; MyClass& operator=(MyClass&&) noexcept = default;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-14",
              "type": "code",
              "question": "Implement Rule of Three for raw pointer.",
              "correctAnswer": [
                "~MyClass() { delete ptr; } MyClass(const MyClass& other) : ptr(new int(*other.ptr)) {} MyClass& operator=(const MyClass& other) { if (this != &other) { delete ptr; ptr = new int(*other.ptr); } return *this; }"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-15",
              "type": "code",
              "question": "Replace Rule of Three with smart pointer.",
              "correctAnswer": [
                "class MyClass { unique_ptr<int> ptr; };"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-16",
              "type": "code",
              "question": "Make class copy-only (no moves).",
              "correctAnswer": [
                "MyClass(MyClass&&) = delete; MyClass& operator=(MyClass&&) = delete;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-17",
              "type": "code",
              "question": "Use shared_ptr in Rule of Zero.",
              "correctAnswer": [
                "class MyClass { shared_ptr<int> ptr; };"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-18",
              "type": "code",
              "question": "Implement destructor only (not Rule of Three).",
              "correctAnswer": [
                "~MyClass() { /* cleanup */ } MyClass(const MyClass&) = default; MyClass& operator=(const MyClass&) = default;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-19",
              "type": "code",
              "question": "Check if class needs Rule of Five.",
              "correctAnswer": [
                "// Needs if: has raw pointer, manages file/socket, new/delete used"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-20",
              "type": "code",
              "question": "Use std::string (Rule of Zero).",
              "correctAnswer": [
                "class MyClass { string str; };"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-21",
              "type": "code",
              "question": "Refactor raw pointer to unique_ptr.",
              "correctAnswer": [
                "// Old: int* ptr; // New: unique_ptr<int> ptr;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-22",
              "type": "code",
              "question": "Use std::array (Rule of Zero).",
              "correctAnswer": [
                "class MyClass { array<int, 10> arr; };"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-23",
              "type": "code",
              "question": "Mix Rule of Zero with custom destructor.",
              "correctAnswer": [
                "class MyClass { vector<int> vec; ~MyClass() { /* custom cleanup */ } };"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-24",
              "type": "code",
              "question": "Document Rule of Zero decision.",
              "correctAnswer": [
                "// Rule of Zero: uses smart pointers, no custom copy/move needed"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-4-25",
              "type": "code",
              "question": "Prefer composition over Rule of Five.",
              "correctAnswer": [
                "class MyClass { std::vector<Custom> items; }; // Composition handles copy/move"
              ],
              "xp": 15
            }
          ],
          "lessonText": "# Rule of Three/Five/Zero\n\nGuidelines for resource management.\n\n**Rule of Three:** If you need any of destructor, copy constructor, or copy assignment, you need all three.\n\n**Rule of Five:** Add move constructor and move assignment to Rule of Three.\n\n**Rule of Zero:** If you don't manage resources directly, use smart pointers and avoid manual management.\n\n```cpp\n// Rule of Zero (preferred)\nclass MyClass {\n    std::unique_ptr<int> data;  // Automatically managed\n    std::vector<int> vec;      // Automatically managed\n};\n```\n\n```cpp\n// Rule of Five (when needed)\nclass Resource {\npublic:\n    ~Resource();  // Destructor\n    Resource(const Resource&);  // Copy\n    Resource& operator=(const Resource&);\n    Resource(Resource&&) noexcept;  // Move\n    Resource& operator=(Resource&&) noexcept;\n};\n```"
        },
        {
          "id": 40,
          "title": "Managing Resources Safely",
          "unitTitle": "7. Resource Management",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "questions": [
            {
              "id": "cpp-7-5-1",
              "type": "typing",
              "question": "What is the safest way to manage memory?",
              "correctAnswer": [
                "smart pointers",
                "unique_ptr, shared_ptr",
                "RAII"
              ],
              "explanation": "Smart pointers provide automatic memory management.",
              "xp": 5
            },
            {
              "id": "cpp-7-5-2",
              "type": "typing",
              "question": "What is make_unique?",
              "correctAnswer": [
                "creates unique_ptr safely",
                "smart pointer factory function"
              ],
              "explanation": "make_unique is exception-safe way to create unique_ptr.",
              "xp": 5
            },
            {
              "id": "cpp-7-5-3",
              "type": "typing",
              "question": "What is make_shared?",
              "correctAnswer": [
                "creates shared_ptr efficiently",
                "shared_ptr factory function"
              ],
              "explanation": "make_shared allocates control block and object together.",
              "xp": 5
            },
            {
              "id": "cpp-7-5-4",
              "type": "multiple",
              "question": "Why prefer make_unique over new?",
              "options": [
                "Exception safety",
                "Faster",
                "Less code",
                "No difference"
              ],
              "correctAnswer": [
                0
              ],
              "explanation": "make_unique is exception-safe, doesn't leak on allocation failure.",
              "xp": 5
            },
            {
              "id": "cpp-7-5-5",
              "type": "multiple",
              "question": "When should you use raw pointer?",
              "options": [
                "Never",
                "Only with smart pointer ownership",
                "For everything",
                "For arrays only"
              ],
              "correctAnswer": [
                1
              ],
              "explanation": "Only use raw pointers as non-owning observers.",
              "xp": 5
            },
            {
              "id": "cpp-7-5-6",
              "type": "code",
              "question": "Create unique_ptr with make_unique.",
              "correctAnswer": [
                "auto ptr = std::make_unique<int>(42);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-7",
              "type": "code",
              "question": "Create shared_ptr with make_shared.",
              "correctAnswer": [
                "auto ptr = std::make_shared<int>(42);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-8",
              "type": "code",
              "question": "Use vector instead of array.",
              "correctAnswer": [
                "std::vector<int> vec(size);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-9",
              "type": "code",
              "question": "Use string instead of char*.",
              "correctAnswer": [
                "std::string str = \"text\";"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-10",
              "type": "code",
              "question": "Pass unique_ptr to function.",
              "correctAnswer": [
                "void func(std::unique_ptr<int> ptr)",
                "void func(unique_ptr<int>& ptr)"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-11",
              "type": "code",
              "question": "Create unique_ptr with custom deleter.",
              "correctAnswer": [
                "std::unique_ptr<int, void(*)(int*)> ptr(malloc(sizeof(int)), free);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-12",
              "type": "code",
              "question": "Reset unique_ptr.",
              "correctAnswer": [
                "ptr.reset();",
                "ptr.reset(new int(10));"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-13",
              "type": "code",
              "question": "Get raw pointer from unique_ptr.",
              "correctAnswer": [
                "ptr.get()",
                "int* raw = ptr.get();"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-14",
              "type": "code",
              "question": "Use unique_ptr for array.",
              "correctAnswer": [
                "std::unique_ptr<int[]> ptr(new int[10]);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-15",
              "type": "code",
              "question": "Move unique_ptr.",
              "correctAnswer": [
                "auto ptr2 = std::move(ptr1);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-16",
              "type": "code",
              "question": "Use weak_ptr to break cycle.",
              "correctAnswer": [
                "std::weak_ptr<Node> ptr;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-17",
              "type": "code",
              "question": "Lock weak_ptr to access.",
              "correctAnswer": [
                "if (auto locked = weak.lock()) { /* use */ }"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-18",
              "type": "code",
              "question": "Use lock_guard for mutex.",
              "correctAnswer": [
                "std::lock_guard<std::mutex> lock(mtx);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-19",
              "type": "code",
              "question": "Use unique_lock with timeout.",
              "correctAnswer": [
                "std::unique_lock<std::mutex> lock(mtx, std::defer_lock); lock.try_lock_for(ms);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-20",
              "type": "code",
              "question": "Use vector instead of new[].",
              "correctAnswer": [
                "std::vector<int> vec(10);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-21",
              "type": "code",
              "question": "Use shared_ptr for shared ownership.",
              "correctAnswer": [
                "auto ptr = std::make_shared<int>(42);"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-22",
              "type": "code",
              "question": "Check use_count of shared_ptr.",
              "correctAnswer": [
                "ptr.use_count()",
                "long count = ptr.use_count();"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-23",
              "type": "code",
              "question": "Use std::array for fixed-size array.",
              "correctAnswer": [
                "std::array<int, 10> arr;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-24",
              "type": "code",
              "question": "Use deque for front/back operations.",
              "correctAnswer": [
                "std::deque<int> dq;"
              ],
              "xp": 15
            },
            {
              "id": "cpp-7-5-25",
              "type": "code",
              "question": "Use map instead of manual key-value.",
              "correctAnswer": [
                "std::map<string, int> m;"
              ],
              "xp": 15
            }
          ],
          "lessonText": "# Managing Resources Safely\n\nBest practices for resource management in C++.\n\n**Use smart pointers:**\n```cpp\nstd::unique_ptr<int> ptr1(new int(42));\nstd::unique_ptr<int> ptr2 = std::make_unique<int>(42);  // Better\nstd::shared_ptr<int> shared = std::make_shared<int>(42);\n```\n\n**RAII for custom resources:**\n```cpp\nclass Resource {\n    void* handle;\npublic:\n    Resource() : handle(acquire()) {}\n    ~Resource() { release(handle); }\n    // Disable copy, enable move\n};\n```\n\n**Standard containers:**\n```cpp\nstd::vector<int> vec;  // Automatic memory management\nstd::string str;        // Automatic string management\n```"
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
