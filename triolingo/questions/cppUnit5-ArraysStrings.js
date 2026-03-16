// C++ Unit 5 - Arrays, Strings, and Basic Data Structures
// Generated from cppCombined.js

window.cppUnit5 = {
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
};
