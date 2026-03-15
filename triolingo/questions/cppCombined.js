// CPP - Combined Course
// Generated from lessons.json

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
          "xp": 88,
          "type": "lesson",
          "lessonText": "# Introduction to C++\n\nC++ is a powerful, high-performance programming language created by Bjarne Stroustrup in 1979 as an extension of C. It's used in game development, systems programming, embedded systems, and competitive programming.\n\n## Your First C++ Program\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}\n```",
          "questions": [
            {
              "id": "cpp-1-1-1",
              "type": "typing",
              "question": "Who created C++?",
              "correctAnswer": ["Bjarne Stroustrup", "Stroustrup"],
              "explanation": "Bjarne Stroustrup created C++ in 1979 as an extension of C.",
              "xp": 5
            },
            {
              "id": "cpp-1-1-2",
              "type": "typing",
              "question": "What is the entry point of a C++ program?",
              "correctAnswer": ["main()", "int main()"],
              "explanation": "The main() function is the entry point where program execution begins.",
              "xp": 5
            },
            {
              "id": "cpp-1-1-3",
              "type": "typing",
              "question": "What library do you include for input/output?",
              "correctAnswer": ["iostream", "<iostream>"],
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
              "correctAnswer": ["<<", "insertion operator"],
              "explanation": "The << operator (stream insertion) sends data to the output stream.",
              "xp": 5
            },
          ]
        },
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
              "correctAnswer": ["void"],
              "explanation": "The void keyword is used for functions that don't return a value. They can still perform actions like printing to the console.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-2",
              "type": "typing",
              "question": "What is the entry point of a C++ program?",
              "correctAnswer": ["main()", "int main()"],
              "explanation": "The main() function is the entry point where program execution begins. Every C++ program must have exactly one main() function.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-3",
              "type": "typing",
              "question": "What does pass by value mean?",
              "correctAnswer": ["copy of value", "copies the value"],
              "explanation": "Pass by value means a copy of the parameter is passed to the function. Changes made to the copy don't affect the original variable.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-4",
              "type": "typing",
              "question": "What symbol is used to pass by reference?",
              "correctAnswer": ["&", "ampersand"],
              "explanation": "The & symbol after the type indicates pass by reference. This allows the function to modify the original variable.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-5",
              "type": "typing",
              "question": "What is local scope?",
              "correctAnswer": ["variables inside function", "function local variables"],
              "explanation": "Local scope refers to variables declared inside a function. These variables are only accessible within that function.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-6",
              "type": "typing",
              "question": "What is global scope?",
              "correctAnswer": ["variables outside all functions", "accessible everywhere"],
              "explanation": "Global scope refers to variables declared outside all functions. These variables can be accessed anywhere in the program.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-7",
              "type": "typing",
              "question": "What is the default parameter passing method?",
              "correctAnswer": ["pass by value", "value"],
              "explanation": "C++ defaults to pass by value, which creates a copy of the parameter.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-8",
              "type": "typing",
              "question": "Can a function have multiple return statements?",
              "correctAnswer": ["yes", "Yes"],
              "explanation": "Yes, functions can have multiple return statements in different branches or conditions. The function exits when it encounters the first return statement that executes.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-9",
              "type": "typing",
              "question": "What is a function prototype?",
              "correctAnswer": ["declaration without body", "function declaration"],
              "explanation": "A function prototype declares the function's name, return type, and parameters without providing the function body. It allows you to use the function before it's defined.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-10",
              "type": "typing",
              "question": "What happens if you don't return a value from a non-void function?",
              "correctAnswer": ["undefined behavior", "error"],
              "explanation": "Not returning a value from a non-void function results in undefined behavior. The program may compile but produce unpredictable results.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-11",
              "type": "typing",
              "question": "What is function overloading?",
              "correctAnswer": ["same name different parameters", "multiple functions same name"],
              "explanation": "Function overloading allows multiple functions with the same name but different parameters (different number or type). The compiler chooses the right one based on arguments.",
              "xp": 4
            },
            {
              "id": "cpp-2-1-12",
              "type": "typing",
              "question": "What is recursion?",
              "correctAnswer": ["function calls itself", "self-calling function"],
              "explanation": "Recursion is when a function calls itself. It requires a base case to stop the recursion, otherwise it creates infinite recursion.",
              "xp": 5
            },
            {
              "id": "cpp-2-1-13",
              "type": "multiple-choice",
              "question": "Which parameter passing method can modify the original variable?",
              "options": ["Pass by value", "Pass by reference", "Pass by constant", "Pass by copy"],
              "correct": 1,
              "explanation": "Pass by reference (using &) allows the function to modify the original variable because it passes a reference to the original, not a copy.",
              "xp": 3
            },
            {
              "id": "cpp-2-1-14",
              "type": "multiple-choice",
              "question": "What is the purpose of the return statement?",
              "options": ["Print to console", "Exit function and return value", "Create variable", "Declare function"],
              "correct": 1,
              "explanation": "The return statement exits the function and optionally returns a value. For void functions, return exits without returning a value.",
              "xp": 3
            },
            {
              "id": "cpp-2-1-15",
              "type": "multiple-choice",
              "question": "Can a function call another function?",
              "options": ["No", "Yes", "Only if they have same return type", "Only if both are void"],
              "correct": 1,
              "explanation": "Yes, functions can call other functions. This is called function composition and is a common practice in programming.",
              "xp": 3
            },
            {
              "id": "cpp-2-1-16",
              "type": "multiple-choice",
              "question": "What is the base case in recursion?",
              "options": ["First call", "Termination condition", "Last call", "Error condition"],
              "correct": 1,
              "explanation": "The base case is the termination condition that stops the recursion. Without a base case, recursive functions would create infinite recursion and crash.",
              "xp": 3
            },
            {
              "id": "cpp-2-1-17",
              "type": "multiple-choice",
              "question": "Which symbol is used to get the address of a variable?",
              "options": ["*", "&", "#", "@"],
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
            },
          ]
        },
        {
          "id": "2-2",
          "title": "Arrays and Vectors",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Arrays and Vectors in C++\n\nArrays and vectors are fundamental data structures for storing collections of values of the same type.\n\n## Arrays\n\nArrays are **fixed-size** collections of elements stored contiguously in memory.\n\n### Declaring Arrays\n\n**Syntax:**\n```cpp\ntype arrayName[size];\n```\n\n**Examples:**\n```cpp\nint numbers[5];              // Array of 5 integers\ndouble temperatures[10];     // Array of 10 doubles\nchar letters[26];            // Array of 26 characters\n```\n\n### Initializing Arrays\n\n**Initialize all to zero:**\n```cpp\nint arr[5] = {0};  // All elements are 0\n```\n\n**Initialize with values:**\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\n```\n\n**Initialize without specifying size (inferred):**\n```cpp\nint arr[] = {1, 2, 3, 4, 5};  // Size is 5\n```\n\n### Accessing Array Elements\n\nArray indices start at **0** (zero-based indexing):\n\n```cpp\nint arr[5] = {10, 20, 30, 40, 50};\nstd::cout << arr[0];  // Output: 10 (first element)\nstd::cout << arr[4];  // Output: 50 (last element)\narr[2] = 100;         // Change third element\n```\n\n### Array Bounds\n\n\u26a0\ufe0f **Important:** Arrays have fixed bounds. Accessing out-of-bounds causes **undefined behavior**:\n\n```cpp\nint arr[5];\narr[5] = 10;  // ERROR: Index 5 is out of bounds (valid: 0-4)\narr[-1] = 10; // ERROR: Negative index is invalid\n```\n\n### Iterating Through Arrays\n\n**Using index-based loop:**\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\nfor (int i = 0; i < 5; i++) {\n    std::cout << arr[i] << \" \";\n}\n// Output: 1 2 3 4 5\n```\n\n**Using range-based for loop (C++11):**\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\nfor (int x : arr) {\n    std::cout << x << \" \";\n}\n// Output: 1 2 3 4 5\n```\n\n### 2D Arrays\n\nArrays of arrays:\n\n```cpp\nint matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\n// Accessing elements\nstd::cout << matrix[0][0];  // Output: 1\nstd::cout << matrix[1][2];  // Output: 6\n```\n\n## Vectors\n\nVectors are **dynamic arrays** from the C++ Standard Template Library (STL). They can grow and shrink in size.\n\n### Declaring Vectors\n\n**Include header:**\n```cpp\n#include <vector>\n```\n\n**Create empty vector:**\n```cpp\nstd::vector<int> v;\n```\n\n**Initialize with values:**\n```cpp\nstd::vector<int> v = {1, 2, 3, 4, 5};\nstd::vector<double> v(10, 0.0);  // 10 elements, all 0.0\n```\n\n### Vector Operations\n\n```cpp\nstd::vector<int> v;\n\n// Add element to end\nv.push_back(10);\nv.push_back(20);\n// v = {10, 20}\n\n// Access elements\nstd::cout << v[0];  // Output: 10\nstd::cout << v.at(1);  // Output: 20 (with bounds checking)\n\n// Get size\nstd::cout << v.size();  // Output: 2\n\n// Remove last element\nv.pop_back();\n// v = {10}\n\n// Check if empty\nif (v.empty()) {\n    std::cout << \"Vector is empty\";\n}\n\n// Clear all elements\nv.clear();\n// v = {}\n```\n\n### Vector vs Array\n\n| Feature | Array | Vector |\n|---------|-------|--------|\n| Size | Fixed | Dynamic |\n| Memory | Stack | Heap |\n| Performance | Slightly faster | Slightly slower |\n| Safety | No bounds checking | Has bounds checking (at()) |\n| Methods | None | Many (push_back, size, etc.) |\n\n### Common Vector Methods\n\n```cpp\nv.size()          // Number of elements\nv.empty()         // True if empty\nv.capacity()      // Allocated memory (>= size)\nv.push_back(x)    // Add element at end\nv.pop_back()      // Remove last element\nv.clear()         // Remove all elements\nv.front()         // First element\nv.back()          // Last element\nv.at(i)           // Access with bounds check\nv.resize(n)       // Change size\nv.resize(n, val)  // Resize and fill with val\n```",
          "questions": [
            {
              "id": "cpp-2-2-1",
              "type": "typing",
              "question": "What is the first array index in C++?",
              "correctAnswer": ["0", "zero"],
              "explanation": "Array indices in C++ start at 0 (zero-based indexing). The first element is at index 0.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-2",
              "type": "typing",
              "question": "What header do you need to use vectors?",
              "correctAnswer": ["<vector>"],
              "explanation": "You must include #include <vector> to use std::vector from the C++ Standard Template Library.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-3",
              "type": "typing",
              "question": "What method adds an element to the end of a vector?",
              "correctAnswer": ["push_back()", "push_back"],
              "explanation": "push_back() adds a new element to the end of the vector, increasing its size by 1.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-4",
              "type": "typing",
              "question": "What method returns the number of elements in a vector?",
              "correctAnswer": ["size()", "size"],
              "explanation": "The size() method returns the number of elements currently in the vector.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-5",
              "type": "typing",
              "question": "What happens when you access an array index out of bounds?",
              "correctAnswer": ["undefined behavior", "error", "crash"],
              "explanation": "Accessing an array out of bounds causes undefined behavior, which may result in incorrect values, crashes, or security vulnerabilities.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-6",
              "type": "typing",
              "question": "What is the key difference between arrays and vectors?",
              "correctAnswer": ["arrays fixed size vectors dynamic", "vectors dynamic arrays fixed"],
              "explanation": "Arrays have fixed size that cannot change, while vectors are dynamic arrays that can grow or shrink at runtime.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-7",
              "type": "typing",
              "question": "What method removes the last element from a vector?",
              "correctAnswer": ["pop_back()", "pop_back"],
              "explanation": "pop_back() removes the last element from the vector, reducing its size by 1.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-8",
              "type": "typing",
              "question": "What does the at() method do for vectors?",
              "correctAnswer": ["access with bounds checking", "checks bounds"],
              "explanation": "at() accesses an element and throws an exception if the index is out of bounds, providing safer access than the [] operator.",
              "xp": 4
            },
            {
              "id": "cpp-2-2-9",
              "type": "typing",
              "question": "What loop construct iterates through elements without index?",
              "correctAnswer": ["range-based for loop", "for-each loop", "for each"],
              "explanation": "The range-based for loop (for (type var : container)) iterates through each element without needing to manage an index.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-10",
              "type": "typing",
              "question": "What is a 2D array?",
              "correctAnswer": ["array of arrays", "matrix", "nested array"],
              "explanation": "A 2D array is an array of arrays, used to represent tabular data or matrices. Accessed with two indices: array[row][col].",
              "xp": 4
            },
            {
              "id": "cpp-2-2-11",
              "type": "typing",
              "question": "What method clears all elements from a vector?",
              "correctAnswer": ["clear()", "clear"],
              "explanation": "clear() removes all elements from the vector, making its size zero (but capacity may remain the same).",
              "xp": 5
            },
            {
              "id": "cpp-2-2-12",
              "type": "typing",
              "question": "What is vector capacity?",
              "correctAnswer": ["allocated memory", "total allocated space"],
              "explanation": "Capacity is the amount of memory allocated by the vector, which is always >= the size. Capacity can grow larger than size to avoid frequent reallocations.",
              "xp": 5
            },
            {
              "id": "cpp-2-2-13",
              "type": "multiple-choice",
              "question": "Which is a valid way to initialize an array with 5 zeros?",
              "options": ["int arr[5];", "int arr[5] = {0};", "int arr = {0, 0, 0, 0, 0};", "int arr(5) = 0;"],
              "correct": 1,
              "explanation": "int arr[5] = {0}; initializes all 5 elements to 0. The first element is 0, and all remaining elements are also initialized to 0.",
              "xp": 3
            },
            {
              "id": "cpp-2-2-14",
              "type": "multiple-choice",
              "question": "Which is TRUE about vectors?",
              "options": ["Vectors cannot grow after creation", "Vectors store elements of different types", "Vectors provide bounds checking with at()", "Vectors are faster than arrays"],
              "correct": 2,
              "explanation": "Vectors provide bounds checking through the at() method, which throws an exception for invalid indices. Vectors can grow, store elements of the same type, and are slightly slower than arrays.",
              "xp": 3
            },
            {
              "id": "cpp-2-2-15",
              "type": "multiple-choice",
              "question": "What is the last index in an array of size 10?",
              "options": ["10", "9", "11", "0"],
              "correct": 1,
              "explanation": "Array indices are zero-based, so for an array of size 10, valid indices are 0 through 9. The last index is size-1 = 9.",
              "xp": 3
            },
            {
              "id": "cpp-2-2-16",
              "type": "multiple-choice",
              "question": "Which method checks if a vector is empty?",
              "options": ["size() == 0", "isEmpty()", "empty()", "length() == 0"],
              "correct": 2,
              "explanation": "The empty() method returns true if the vector contains no elements (size is 0).",
              "xp": 3
            },
            {
              "id": "cpp-2-2-17",
              "type": "multiple-choice",
              "question": "Where are arrays stored in memory?",
              "options": ["Heap", "Stack", "Cache", "Register"],
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
            },
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
              "correctAnswer": ["<string>"],
              "explanation": "You must include #include <string> to use std::string from the C++ Standard Library.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-2",
              "type": "typing",
              "question": "What method returns the length of a string?",
              "correctAnswer": ["length()", "size()"],
              "explanation": "Both length() and size() return the number of characters in the string. They are equivalent.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-3",
              "type": "typing",
              "question": "How do you concatenate two strings?",
              "correctAnswer": ["+", "plus operator"],
              "explanation": "Use the + operator to concatenate strings: s1 + s2 combines them into a new string.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-4",
              "type": "typing",
              "question": "What method extracts a substring?",
              "correctAnswer": ["substr()", "substr"],
              "explanation": "substr(start, length) extracts a substring starting at the given position with the specified length.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-5",
              "type": "typing",
              "question": "What does find() return if the substring is not found?",
              "correctAnswer": ["npos", "std::string::npos", "-1"],
              "explanation": "find() returns std::string::npos (which equals -1) when the substring is not found.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-6",
              "type": "typing",
              "question": "What method adds a single character to the end of a string?",
              "correctAnswer": ["push_back()", "push_back"],
              "explanation": "push_back() adds a single character to the end of the string, increasing its length by 1.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-7",
              "type": "typing",
              "question": "What method removes all characters from a string?",
              "correctAnswer": ["clear()", "clear"],
              "explanation": "clear() removes all characters from the string, making it empty (length = 0).",
              "xp": 5
            },
            {
              "id": "cpp-2-3-8",
              "type": "typing",
              "question": "What is the difference between [] and at() for accessing characters?",
              "correctAnswer": ["at checks bounds", "at has bounds checking"],
              "explanation": "at() provides bounds checking and throws an exception for invalid indices, while [] has no bounds checking (undefined behavior for invalid indices).",
              "xp": 4
            },
            {
              "id": "cpp-2-3-9",
              "type": "typing",
              "question": "What method replaces a portion of a string?",
              "correctAnswer": ["replace()", "replace"],
              "explanation": "replace(pos, len, newStr) replaces len characters starting at position pos with newStr.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-10",
              "type": "typing",
              "question": "What method removes characters from a string?",
              "correctAnswer": ["erase()", "erase"],
              "explanation": "erase(pos, len) removes len characters starting at position pos. If len is omitted, removes to end.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-11",
              "type": "typing",
              "question": "What header provides character classification functions like isdigit()?",
              "correctAnswer": ["<cctype>"],
              "explanation": "#include <cctype> provides functions like isdigit(), isalpha(), isupper(), islower(), toupper(), tolower(), etc.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-12",
              "type": "typing",
              "question": "How do you convert a character to uppercase?",
              "correctAnswer": ["toupper()", "std::toupper()"],
              "explanation": "Use toupper() from <cctype> to convert characters to uppercase.",
              "xp": 5
            },
            {
              "id": "cpp-2-3-13",
              "type": "multiple-choice",
              "question": "Which string comparison is TRUE?",
              "options": ["\"hello\" == \"Hello\"", "\"hello\" != \"Hello\"", "\"Hello\" > \"hello\"", "\"abc\" == \"AB C\""],
              "correct": 1,
              "explanation": "String comparison is case-sensitive. \"hello\" != \"Hello\" because lowercase and uppercase letters have different ASCII values.",
              "xp": 3
            },
            {
              "id": "cpp-2-3-14",
              "type": "multiple-choice",
              "question": "What is the result of \"Hello\".substr(1, 3)?",
              "options": ["\"ell\"", "\"Hel\"", "'llo'", "\"e\""],
              "correct": 0,
              "explanation": "substr(1, 3) starts at index 1 (e) and takes 3 characters, resulting in \"ell\".",
              "xp": 3
            },
            {
              "id": "cpp-2-3-15",
              "type": "multiple-choice",
              "question": "What is the index of the first character in a string?",
              "options": ["1", "0", "-1", "length-1"],
              "correct": 1,
              "explanation": "Strings use zero-based indexing. The first character is at index 0.",
              "xp": 3
            },
            {
              "id": "cpp-2-3-16",
              "type": "multiple-choice",
              "question": "Which method checks if a string is empty?",
              "options": ["length() == 0", "isEmpty()", "empty()", "size() == 0"],
              "correct": 2,
              "explanation": "The empty() method returns true if the string has no characters. Other methods work too but empty() is the standard approach.",
              "xp": 3
            },
            {
              "id": "cpp-2-3-17",
              "type": "multiple-choice",
              "question": "What does rfind() do compared to find()?",
              "options": ["Finds from the right (last occurrence)", "Finds from the left (first occurrence)", "Finds only one character", "Finds digits only"],
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
          ]
        },
        {
          "id": "2-4",
          "title": "References and Pointers",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# References and Pointers in C++\n\nReferences and pointers are powerful features that allow you to work with memory addresses and pass variables by reference.\n\n## References\n\nA reference is an **alias** for an existing variable. It refers to the same memory location.\n\n### Declaring References\n\n**Syntax:**\n```cpp\ntype& referenceName = variableName;\n```\n\n**Example:**\n```cpp\nint x = 10;\nint& ref = x;  // ref is now an alias for x\nref = 20;      // x is now 20 (both refer to same memory)\nstd::cout << x;  // Output: 20\n```\n\n### Reference Parameters in Functions\n\nPassing by reference allows functions to modify the original variable:\n\n```cpp\nvoid increment(int& num) {\n    num++;  // Modifies the original variable\n}\n\nint main() {\n    int x = 5;\n    increment(x);\n    std::cout << x;  // Output: 6\n}\n```\n\n### Reference Rules\n\n\u26a0\ufe0f **Important:**\n- References **must** be initialized when declared\n- References **cannot** be reassigned\n- References cannot be null\n- References are essentially const pointers\n\n```cpp\nint x = 5;\nint y = 10;\nint& ref = x;\nref = y;     // This assigns y's value to x, doesn't reassign ref\n// ref still refers to x, x now equals 10\n```\n\n## Pointers\n\nA pointer is a variable that **stores a memory address**.\n\n### Declaring Pointers\n\n**Syntax:**\n```cpp\ntype* pointerName;\n```\n\n**Example:**\n```cpp\nint x = 10;\nint* ptr = &x;  // ptr stores the address of x\n```\n\n### Address-Of Operator (&)\n\nThe `&` operator gets the address of a variable:\n```cpp\nint x = 10;\nstd::cout << &x;  // Prints memory address: e.g., 0x7fff5fbff8ac\nint* ptr = &x;    // ptr now holds that address\n```\n\n### Dereference Operator (*)\n\nThe `*` operator accesses the value at the address stored in a pointer:\n```cpp\nint x = 10;\nint* ptr = &x;\nstd::cout << *ptr;  // Output: 10 (the value at the address)\n*ptr = 20;          // x is now 20 (modify through pointer)\nstd::cout << x;     // Output: 20\n```\n\n### Null Pointers\n\nA pointer that doesn't point to any valid memory is a **null pointer**:\n\n```cpp\nint* ptr = nullptr;  // C++11 style (preferred)\nint* ptr2 = NULL;    // Old C style (not recommended)\n\nif (ptr == nullptr) {\n    std::cout << \"Pointer is null\";\n}\n```\n\n**Warning:** Dereferencing a null pointer causes undefined behavior (crash).\n\n### Pointer Parameters in Functions\n\nPassing by pointer is another way to modify the original variable:\n\n```cpp\nvoid increment(int* num) {\n    (*num)++;  // Dereference and increment\n}\n\nint main() {\n    int x = 5;\n    increment(&x);  // Pass address of x\n    std::cout << x;  // Output: 6\n}\n```\n\n### Pointer Arithmetic\n\nYou can perform arithmetic on pointers:\n\n```cpp\nint arr[] = {10, 20, 30, 40, 50};\nint* ptr = arr;     // ptr points to arr[0]\n\nptr++;              // ptr now points to arr[1]\nstd::cout << *ptr;  // Output: 20\n\nptr = ptr + 2;      // ptr now points to arr[3]\nstd::cout << *ptr;  // Output: 40\n```\n\n**Note:** Pointer arithmetic moves by the size of the type (not bytes).\n\n### Pointers and Arrays\n\nArray names act like pointers to the first element:\n\n```cpp\nint arr[] = {10, 20, 30};\nint* ptr = arr;     // Same as &arr[0]\n\nstd::cout << arr[0];    // Output: 10\nstd::cout << *arr;      // Output: 10 (same)\nstd::cout << *(ptr+1);  // Output: 20 (same as arr[1])\n```\n\n## References vs Pointers\n\n| Feature | References | Pointers |\n|---------|-----------|----------|\n| Must be initialized | Yes | No |\n| Can be null | No | Yes (nullptr) |\n| Can be reassigned | No | Yes |\n| Syntax | `type&` | `type*` |\n| Use for | Pass by reference | Dynamic memory, algorithms |\n\n## Dynamic Memory Allocation\n\n### new and delete Operators\n\nAllocate memory on the heap:\n\n```cpp\nint* ptr = new int;    // Allocate single int\n*ptr = 42;\nstd::cout << *ptr;     // Output: 42\ndelete ptr;            // Free memory\n\nint* arr = new int[5]; // Allocate array of 5 ints\narr[0] = 1;\narr[1] = 2;\ndelete[] arr;          // Free array memory (use delete[])\n```\n\n**Warning:** Always pair `new` with `delete` and `new[]` with `delete[]`. Forgetting causes memory leaks!\n\n### Memory Management Rules\n\n1. Every `new` needs a `delete`\n2. Delete before reassigning (or you leak memory)\n3. Delete only once (double delete = crash)\n4. Don't delete stack variables\n5. Use `delete[]` for arrays\n\n```cpp\n// WRONG - Memory leak\nint* ptr = new int;\nptr = new int;  // Lost the first allocation!\n\n// CORRECT\nint* ptr = new int;\ndelete ptr;\nptr = new int;\ndelete ptr;\n```",
          "questions": [
            {
              "id": "cpp-2-4-1",
              "type": "typing",
              "question": "What symbol declares a reference?",
              "correctAnswer": ["&", "ampersand"],
              "explanation": "The & symbol after the type declares a reference. For example: int& ref = x;",
              "xp": 5
            },
            {
              "id": "cpp-2-4-2",
              "type": "typing",
              "question": "What symbol gets the address of a variable?",
              "correctAnswer": ["&", "address-of operator"],
              "explanation": "The & operator (address-of) gets the memory address of a variable. For example: &x returns the address of x.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-3",
              "type": "typing",
              "question": "What symbol declares a pointer?",
              "correctAnswer": ["*", "asterisk"],
              "explanation": "The * symbol after the type declares a pointer. For example: int* ptr;",
              "xp": 5
            },
            {
              "id": "cpp-2-4-4",
              "type": "typing",
              "question": "What operator dereferences a pointer?",
              "correctAnswer": ["*", "dereference operator"],
              "explanation": "The * operator dereferences a pointer to access the value at the stored address. For example: *ptr accesses the value.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-5",
              "type": "typing",
              "question": "What keyword represents a null pointer in modern C++?",
              "correctAnswer": ["nullptr"],
              "explanation": "nullptr is the C++11 keyword for null pointers. It is type-safe and preferred over NULL or 0.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-6",
              "type": "typing",
              "question": "Can references be reassigned?",
              "correctAnswer": ["no", "No"],
              "explanation": "References cannot be reassigned. Once initialized, they always refer to the same variable.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-7",
              "type": "typing",
              "question": "Can pointers be null?",
              "correctAnswer": ["yes", "Yes"],
              "explanation": "Yes, pointers can be null (nullptr) to indicate they don't point to any valid memory. References cannot be null.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-8",
              "type": "typing",
              "question": "What does new operator do?",
              "correctAnswer": ["allocates memory", "allocates dynamic memory"],
              "explanation": "The new operator allocates memory on the heap dynamically. It returns a pointer to the allocated memory.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-9",
              "type": "typing",
              "question": "What does delete operator do?",
              "correctAnswer": ["frees memory", "deallocates memory", "frees allocated memory"],
              "explanation": "The delete operator frees memory that was allocated with new. It returns the memory to the system.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-10",
              "type": "typing",
              "question": "What is a memory leak?",
              "correctAnswer": ["unfreed memory", "allocated memory not freed", "memory not deleted"],
              "explanation": "A memory leak occurs when allocated memory is not freed (deleted), causing the program to use increasing amounts of memory over time.",
              "xp": 5
            },
            {
              "id": "cpp-2-4-11",
              "type": "typing",
              "question": "What is a dangling pointer?",
              "correctAnswer": ["pointer to freed memory", "pointer to invalid memory"],
              "explanation": "A dangling pointer points to memory that has been freed. Using it causes undefined behavior.",
              "xp": 4
            },
            {
              "id": "cpp-2-4-12",
              "type": "typing",
              "question": "What does ptr++ do for an int pointer?",
              "correctAnswer": ["points to next int", "moves to next element"],
              "explanation": "ptr++ advances the pointer to the next int in memory (not just one byte, but sizeof(int) bytes).",
              "xp": 5
            },
            {
              "id": "cpp-2-4-13",
              "type": "multiple-choice",
              "question": "Which is TRUE about references?",
              "options": ["References must be initialized when declared", "References can be null", "References can be reassigned", "References use more memory than pointers"],
              "correct": 0,
              "explanation": "References MUST be initialized when declared. They cannot be null, cannot be reassigned, and typically use the same memory as pointers (implementation detail).",
              "xp": 3
            },
            {
              "id": "cpp-2-4-14",
              "type": "multiple-choice",
              "question": "What happens if you dereference a null pointer?",
              "options": ["Nothing", "Returns 0", "Undefined behavior (crash)", "Compile error"],
              "correct": 2,
              "explanation": "Dereferencing a null pointer causes undefined behavior, which usually results in a crash (segmentation fault).",
              "xp": 3
            },
            {
              "id": "cpp-2-4-15",
              "type": "multiple-choice",
              "question": "Which operator should you use to delete an array?",
              "options": ["delete", "delete[]", "free", "remove"],
              "correct": 1,
              "explanation": "Use delete[] (with brackets) to free arrays allocated with new[]. Using plain delete for arrays is undefined behavior.",
              "xp": 3
            },
            {
              "id": "cpp-2-4-16",
              "type": "multiple-choice",
              "question": "What is the difference between pass by value and pass by reference?",
              "options": ["Reference creates copy, value modifies original", "Value creates copy, reference modifies original", "Both modify original", "Both create copies"],
              "correct": 1,
              "explanation": "Pass by value creates a copy (original unchanged), pass by reference allows modification of the original variable.",
              "xp": 3
            },
            {
              "id": "cpp-2-4-17",
              "type": "multiple-choice",
              "question": "What does &x return?",
              "options": ["The value of x", "The address of x", "A pointer to x", "A reference to x"],
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
          ]
        },
        {
          "id": "2-5",
          "title": "Basic Algorithms",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Basic Algorithms in C++\n\nAlgorithms are step-by-step procedures to solve problems efficiently.\n\n## Linear Search\n\nSearch through elements one by one until finding the target.\n\n### Algorithm\n\n```cpp\nint linearSearch(int arr[], int size, int target) {\n    for (int i = 0; i < size; i++) {\n        if (arr[i] == target) {\n            return i;  // Found at index i\n        }\n    }\n    return -1;  // Not found\n}\n```\n\n### Example\n\n```cpp\nint arr[] = {5, 3, 8, 1, 9};\nint index = linearSearch(arr, 5, 8);  // Returns: 2\n```\n\n**Time Complexity:** O(n) - may need to check every element\n\n## Binary Search\n\nSearch in a **sorted** array by repeatedly dividing in half.\n\n### Algorithm\n\n```cpp\nint binarySearch(int arr[], int size, int target) {\n    int left = 0;\n    int right = size - 1;\n    \n    while (left <= right) {\n        int mid = (left + right) / 2;\n        \n        if (arr[mid] == target) {\n            return mid;  // Found\n        } else if (arr[mid] < target) {\n            left = mid + 1;  // Search right half\n        } else {\n            right = mid - 1;  // Search left half\n        }\n    }\n    return -1;  // Not found\n}\n```\n\n### Example\n\n```cpp\nint arr[] = {1, 3, 5, 7, 9};  // Must be sorted!\nint index = binarySearch(arr, 5, 7);  // Returns: 3\n```\n\n**Time Complexity:** O(log n) - much faster than linear search for large arrays\n\n## Sorting Algorithms\n\n### Bubble Sort\n\nRepeatedly swap adjacent elements if they're in wrong order.\n\n```cpp\nvoid bubbleSort(int arr[], int size) {\n    for (int i = 0; i < size - 1; i++) {\n        for (int j = 0; j < size - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                // Swap\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n}\n```\n\n**Time Complexity:** O(n\u00b2) - slow for large arrays\n\n### Selection Sort\n\nFind minimum and move to beginning, repeat for remaining.\n\n```cpp\nvoid selectionSort(int arr[], int size) {\n    for (int i = 0; i < size - 1; i++) {\n        int minIndex = i;\n        for (int j = i + 1; j < size; j++) {\n            if (arr[j] < arr[minIndex]) {\n                minIndex = j;\n            }\n        }\n        // Swap\n        int temp = arr[i];\n        arr[i] = arr[minIndex];\n        arr[minIndex] = temp;\n    }\n}\n```\n\n**Time Complexity:** O(n\u00b2) - similar to bubble sort\n\n### Using std::sort\n\nIn practice, use the STL sort (much faster):\n\n```cpp\n#include <algorithm>\n\nint arr[] = {5, 2, 8, 1, 9};\nstd::sort(arr, arr + 5);  // Sorts entire array\n// arr = {1, 2, 5, 8, 9}\n```\n\n**Time Complexity:** O(n log n) - fast!\n\n## Finding Minimum/Maximum\n\n```cpp\nint findMin(int arr[], int size) {\n    int min = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] < min) {\n            min = arr[i];\n        }\n    }\n    return min;\n}\n\nint findMax(int arr[], int size) {\n    int max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    return max;\n}\n```\n\n## Recursion\n\nA function that calls itself. Requires a **base case** to stop.\n\n### Factorial\n\n```cpp\nint factorial(int n) {\n    if (n <= 1) {  // Base case\n        return 1;\n    }\n    return n * factorial(n - 1);  // Recursive case\n}\n```\n\n**Example:** factorial(5) = 5 \u00d7 4 \u00d7 3 \u00d7 2 \u00d7 1 = 120\n\n### Fibonacci\n\n```cpp\nint fibonacci(int n) {\n    if (n <= 1) {  // Base case\n        return n;\n    }\n    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case\n}\n```\n\n**Example:** fibonacci(6) = 8\n\n**\u26a0\ufe0f Warning:** This is inefficient (exponential time). Use iteration or memoization in practice.\n\n## Common Patterns\n\n### Sum Array\n\n```cpp\nint sumArray(int arr[], int size) {\n    int sum = 0;\n    for (int i = 0; i < size; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}\n```\n\n### Count Occurrences\n\n```cpp\nint countOccurrences(int arr[], int size, int target) {\n    int count = 0;\n    for (int i = 0; i < size; i++) {\n        if (arr[i] == target) {\n            count++;\n        }\n    }\n    return count;\n}\n```\n\n### Reverse Array\n\n```cpp\nvoid reverseArray(int arr[], int size) {\n    int left = 0;\n    int right = size - 1;\n    while (left < right) {\n        // Swap\n        int temp = arr[left];\n        arr[left] = arr[right];\n        arr[right] = temp;\n        left++;\n        right--;\n    }\n}\n```\n\n## Algorithm Complexity\n\n| Algorithm | Time Complexity | Notes |\n|-----------|----------------|-------|\n| Linear Search | O(n) | Checks each element |\n| Binary Search | O(log n) | Requires sorted array |\n| Bubble Sort | O(n\u00b2) | Slow, educational |\n| Selection Sort | O(n\u00b2) | Slow, educational |\n| std::sort | O(n log n) | Fast, use in practice |\n| Linear Scan (min/max) | O(n) | Checks each element |\n| Simple Recursion | O(n) or O(2\u207f) | Depends on algorithm |",
          "questions": [
            {
              "id": "cpp-2-5-1",
              "type": "typing",
              "question": "What is the time complexity of linear search?",
              "correctAnswer": ["O(n)", "n"],
              "explanation": "Linear search has O(n) time complexity because it may need to check every element in the worst case.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-2",
              "type": "typing",
              "question": "What is a requirement for binary search?",
              "correctAnswer": ["sorted array", "array must be sorted"],
              "explanation": "Binary search requires the array to be sorted in ascending order to work correctly.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-3",
              "type": "typing",
              "question": "What is the time complexity of binary search?",
              "correctAnswer": ["O(log n)", "log n"],
              "explanation": "Binary search has O(log n) time complexity because it repeatedly halves the search space.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-4",
              "type": "typing",
              "question": "What is the time complexity of bubble sort?",
              "correctAnswer": ["O(n^2)", "O(n2)", "n squared"],
              "explanation": "Bubble sort has O(n\u00b2) time complexity because of the nested loops comparing each pair of elements.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-5",
              "type": "typing",
              "question": "What is recursion?",
              "correctAnswer": ["function calls itself", "self-calling function"],
              "explanation": "Recursion is when a function calls itself to solve a smaller instance of the problem.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-6",
              "type": "typing",
              "question": "What is a base case in recursion?",
              "correctAnswer": ["termination condition", "stops recursion", "exit condition"],
              "explanation": "The base case is the condition that stops the recursion. Without it, you get infinite recursion.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-7",
              "type": "typing",
              "question": "What header provides std::sort?",
              "correctAnswer": ["<algorithm>"],
              "explanation": "#include <algorithm> provides std::sort and many other useful algorithms.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-8",
              "type": "typing",
              "question": "What is the time complexity of std::sort?",
              "correctAnswer": ["O(n log n)", "n log n"],
              "explanation": "std::sort has O(n log n) time complexity, making it much faster than bubble or selection sort.",
              "xp": 4
            },
            {
              "id": "cpp-2-5-9",
              "type": "typing",
              "question": "What does selection sort do?",
              "correctAnswer": ["finds minimum and moves to beginning", "selects smallest element"],
              "explanation": "Selection sort finds the minimum element in the unsorted portion and moves it to the beginning.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-10",
              "type": "typing",
              "question": "What does bubble sort do?",
              "correctAnswer": ["swaps adjacent elements", "bubbles largest to end"],
              "explanation": "Bubble sort repeatedly swaps adjacent elements if they're in wrong order, \"bubbling\" the largest to the end.",
              "xp": 5
            },
            {
              "id": "cpp-2-5-11",
              "type": "typing",
              "question": "What is the factorial of 5?",
              "correctAnswer": ["120"],
              "explanation": "5! = 5 \u00d7 4 \u00d7 3 \u00d7 2 \u00d7 1 = 120",
              "xp": 3
            },
            {
              "id": "cpp-2-5-12",
              "type": "typing",
              "question": "What is the 6th Fibonacci number?",
              "correctAnswer": ["8"],
              "explanation": "Fibonacci: 0, 1, 1, 2, 3, 5, 8... The 6th number (index 6, starting from 0) is 8.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-13",
              "type": "multiple-choice",
              "question": "Which search algorithm is faster for large sorted arrays?",
              "options": ["Linear Search", "Binary Search", "Both are equal", "Neither works"],
              "correct": 1,
              "explanation": "Binary Search (O(log n)) is much faster than Linear Search (O(n)) for large sorted arrays.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-14",
              "type": "multiple-choice",
              "question": "What happens without a base case in recursion?",
              "options": ["Works normally", "Returns 0", "Infinite recursion (stack overflow)", "Compilation error"],
              "correct": 2,
              "explanation": "Without a base case, recursion never stops, causing infinite recursion and a stack overflow error.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-15",
              "type": "multiple-choice",
              "question": "Which sorting algorithm should you use in practice?",
              "options": ["Bubble Sort", "Selection Sort", "std::sort", "Write your own"],
              "correct": 2,
              "explanation": "Use std::sort in practice. It is highly optimized, has O(n log n) complexity, and is much faster than bubble or selection sort.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-16",
              "type": "multiple-choice",
              "question": "What is the main disadvantage of the recursive Fibonacci algorithm?",
              "options": ["Too simple", "Exponential time complexity", "Doesn't work", "Too fast"],
              "correct": 1,
              "explanation": "The recursive Fibonacci algorithm has exponential time complexity O(2\u207f), making it very slow for larger numbers.",
              "xp": 3
            },
            {
              "id": "cpp-2-5-17",
              "type": "multiple-choice",
              "question": "What does linear search return if not found?",
              "options": ["0", "-1", "null", "false"],
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
          ]
        },
        {
          "id": "2-6",
          "title": "Advanced Control Flow",
          "xp": 85,
          "type": "lesson",
          "difficulty": "intermediate",
          "lessonText": "# Advanced Control Flow in C++\n\nControl flow determines the order in which statements are executed.\n\n## Nested Loops\n\nA loop inside another loop. Each iteration of the outer loop triggers the entire inner loop.\n\n### Basic Nested Loop\n\n```cpp\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        std::cout << i << \",\" << j << \" \";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n// 0,0 0,1 0,2\n// 1,0 1,1 1,2\n// 2,0 2,1 2,2\n```\n\n### Printing Patterns\n\n**Right Triangle:**\n```cpp\nfor (int i = 1; i <= 5; i++) {\n    for (int j = 1; j <= i; j++) {\n        std::cout << \"*\";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n// *\n// **\n// ***\n// ****\n// *****\n```\n\n**Square:**\n```cpp\nfor (int i = 0; i < 4; i++) {\n    for (int j = 0; j < 4; j++) {\n        std::cout << \"*\";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n// ****\n// ****\n// ****\n// ****\n```\n\n**Pyramid:**\n```cpp\nint n = 5;\nfor (int i = 0; i < n; i++) {\n    // Print spaces\n    for (int j = 0; j < n - i - 1; j++) {\n        std::cout << \" \";\n    }\n    // Print stars\n    for (int k = 0; k < 2 * i + 1; k++) {\n        std::cout << \"*\";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n//     *\n//    ***\n//   *****\n//  *******\n// *********\n```\n\n### 2D Array Traversal\n\n```cpp\nint matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        std::cout << matrix[i][j] << \" \";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n// 1 2 3\n// 4 5 6\n// 7 8 9\n```\n\n## Switch Statement\n\nA cleaner alternative to multiple if-else statements for comparing against multiple values.\n\n### Basic Switch\n\n```cpp\nint grade = 85;\nchar letter;\n\nswitch (grade / 10) {\n    case 10:\n    case 9:\n        letter = 'A';\n        break;\n    case 8:\n        letter = 'B';\n        break;\n    case 7:\n        letter = 'C';\n        break;\n    case 6:\n        letter = 'D';\n        break;\n    default:\n        letter = 'F';\n}\n\nstd::cout << letter;  // Output: B\n```\n\n### Switch Rules\n\n1. **break** is crucial - without it, execution \"falls through\" to next case\n2. **default** handles cases not matched by any case\n3. Cases must be constant expressions (can't use variables)\n4. Works with integers, chars, and enums\n\n### Fall-Through\n\n```cpp\nint day = 6;\n\nswitch (day) {\n    case 1:\n        std::cout << \"Monday\" << std::endl;\n        break;\n    case 6:\n    case 7:  // Fall-through from case 6\n        std::cout << \"Weekend!\" << std::endl;\n        break;\n    default:\n        std::cout << \"Weekday\" << std::endl;\n}\n\n// Output: Weekend!\n```\n\n## goto Statement\n\nJumps to a labeled statement. Use sparingly - makes code hard to follow!\n\n### Basic goto\n\n```cpp\nint i = 0;\n\nstart:\nstd::cout << i << \" \";\ni++;\n\nif (i < 5) {\n    goto start;\n}\n\n// Output: 0 1 2 3 4\n```\n\n### goto for Error Handling\n\n```cpp\nFILE* file = fopen(\"data.txt\", \"r\");\n\nif (file == nullptr) {\n    goto error;  // Jump to error handling\n}\n\n// ... process file ...\n\nif (error_occurred) {\n    goto error;\n}\n\n// Normal cleanup\nfclose(file);\nreturn 0;\n\nerror:\n    if (file) fclose(file);\n    return -1;\n```\n\n**\u26a0\ufe0f Warning:** Avoid goto in most cases. Use loops, functions, or exceptions instead.\n\n## break and continue\n\n### break\n\nExits the innermost loop or switch immediately:\n\n```cpp\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) {\n        break;  // Exit loop\n    }\n    std::cout << i << \" \";\n}\n\n// Output: 0 1 2 3 4\n```\n\n**In nested loops, break only exits the innermost loop:**\n\n```cpp\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (j == 1) {\n            break;  // Only exits inner loop\n        }\n        std::cout << i << \",\" << j << \" \";\n    }\n    std::cout << std::endl;\n}\n\n// Output:\n// 0,0\n// 1,0\n// 2,0\n```\n\n### continue\n\nSkips the rest of the current iteration and starts the next:\n\n```cpp\nfor (int i = 0; i < 5; i++) {\n    if (i == 2) {\n        continue;  // Skip this iteration\n    }\n    std::cout << i << \" \";\n}\n\n// Output: 0 1 3 4\n```\n\n## Common Patterns\n\n### Checking Sorted Array\n\n```cpp\nbool isSorted(int arr[], int size) {\n    for (int i = 0; i < size - 1; i++) {\n        if (arr[i] > arr[i + 1]) {\n            return false;\n        }\n    }\n    return true;\n}\n```\n\n### Finding Primes\n\n```cpp\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\n// Print primes up to 50\nfor (int i = 2; i <= 50; i++) {\n    if (isPrime(i)) {\n        std::cout << i << \" \";\n    }\n}\n```\n\n### Matrix Transpose\n\n```cpp\nint matrix[2][3] = {\n    {1, 2, 3},\n    {4, 5, 6}\n};\n\n// Transpose to 3x2\nint transpose[3][2];\nfor (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 3; j++) {\n        transpose[j][i] = matrix[i][j];\n    }\n}\n```",
          "questions": [
            {
              "id": "cpp-2-6-1",
              "type": "typing",
              "question": "What is a nested loop?",
              "correctAnswer": ["loop inside another loop", "loop within loop"],
              "explanation": "A nested loop is a loop inside another loop. The inner loop runs completely for each iteration of the outer loop.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-2",
              "type": "typing",
              "question": "What statement exits a switch case?",
              "correctAnswer": ["break"],
              "explanation": "The break statement exits the switch case. Without it, execution falls through to the next case.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-3",
              "type": "typing",
              "question": "What is the default case in switch?",
              "correctAnswer": ["when no case matches", "matches nothing else"],
              "explanation": "The default case executes when no other case matches. It's optional but recommended for error handling.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-4",
              "type": "typing",
              "question": "What does goto do?",
              "correctAnswer": ["jumps to labeled statement", "jumps to label"],
              "explanation": "goto jumps execution to a labeled statement in the same function. It should be used sparingly.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-5",
              "type": "typing",
              "question": "What does break do in a loop?",
              "correctAnswer": ["exits loop", "terminates loop"],
              "explanation": "break immediately exits the innermost loop or switch statement, transferring control to after the loop.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-6",
              "type": "typing",
              "question": "What does continue do in a loop?",
              "correctAnswer": ["skips to next iteration", "skips rest of iteration"],
              "explanation": "continue skips the rest of the current iteration and immediately starts the next iteration of the loop.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-7",
              "type": "typing",
              "question": "What happens without break in switch?",
              "correctAnswer": ["falls through", "executes next case"],
              "explanation": "Without break, execution \"falls through\" to the next case, executing it as well. This can be intentional or a bug.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-8",
              "type": "typing",
              "question": "How do you access 2D array elements?",
              "correctAnswer": ["arr[row][col]", "two indices"],
              "explanation": "2D arrays are accessed with two indices: array[row][column]. The first index is the row, second is the column.",
              "xp": 4
            },
            {
              "id": "cpp-2-6-9",
              "type": "typing",
              "question": "What is a label?",
              "correctAnswer": ["identifier followed by colon", "name:"],
              "explanation": "A label is an identifier followed by a colon (e.g., start:). It marks a location that goto can jump to.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-10",
              "type": "typing",
              "question": "Can you nest more than 2 loops?",
              "correctAnswer": ["yes", "Yes"],
              "explanation": "Yes, you can nest any number of loops. However, deep nesting can make code hard to read.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-11",
              "type": "typing",
              "question": "What does break do in nested loops?",
              "correctAnswer": ["exits innermost loop", "only inner loop"],
              "explanation": "In nested loops, break only exits the innermost loop, not all loops.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-12",
              "type": "typing",
              "question": "Why is goto generally discouraged?",
              "correctAnswer": ["hard to follow", "spaghetti code", "hard to maintain"],
              "explanation": "goto makes code hard to follow and maintain (spaghetti code). Use structured programming constructs instead.",
              "xp": 5
            },
            {
              "id": "cpp-2-6-13",
              "type": "multiple-choice",
              "question": "Which is TRUE about switch statements?",
              "options": ["Case values can be variables", "Cases need break to prevent fall-through", "Multiple values can be in one case", "default is required"],
              "correct": 1,
              "explanation": "Cases need break to prevent fall-through. Case values must be constant expressions (not variables), each case has one value, and default is optional.",
              "xp": 3
            },
            {
              "id": "cpp-2-6-14",
              "type": "multiple-choice",
              "question": "How many times does the inner loop run for outer(3) and inner(4)?",
              "options": ["3 times", "4 times", "7 times", "12 times"],
              "correct": 3,
              "explanation": "The inner loop runs 4 times for each of the 3 outer iterations, so 3 \u00d7 4 = 12 times total.",
              "xp": 3
            },
            {
              "id": "cpp-2-6-15",
              "type": "multiple-choice",
              "question": "What types can switch use?",
              "options": ["Strings only", "Integers and chars only", "Any type", "Floats only"],
              "correct": 1,
              "explanation": "Switch works with integers (including bool, char, short, int, long) and enums. It does NOT work with strings or floats.",
              "xp": 3
            },
            {
              "id": "cpp-2-6-16",
              "type": "multiple-choice",
              "question": "What is the output after continue executes?",
              "options": ["Loop exits", "Next iteration starts", "Program ends", "Nothing happens"],
              "correct": 1,
              "explanation": "After continue executes, the loop skips to the next iteration immediately, not executing any code below continue in the current iteration.",
              "xp": 3
            },
            {
              "id": "cpp-2-6-17",
              "type": "multiple-choice",
              "question": "Which is a good use case for goto?",
              "options": ["Replacing loops", "Jumping out of deeply nested loops", "Normal program flow", "Skip code sections"],
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
          ]
        },
      ]
    }
  ]
};