#!/usr/bin/env python3
"""
Build Unit 5 Lessons 2-5
Continuing with high code question ratio (~70% = 87 code questions total)
"""
import json

print("🚀 Continuing C++ Unit 5 Lessons 2-5...")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 2: std::array
# ============================================================================
lesson2_questions = [
    # Type-in (3 questions)
    {
        "id": "cpp-5-2-1",
        "type": "typing",
        "question": "What is std::array?",
        "correctAnswer": ["fixed-size array container", "C++11 array wrapper"],
        "explanation": "std::array is a fixed-size container that wraps C-style arrays with safety features.",
        "xp": 5
    },
    {
        "id": "cpp-5-2-2",
        "type": "typing",
        "question": "How do you declare a std::array?",
        "correctAnswer": ["array<type, size>", "std::array<type, size>"],
        "explanation": "std::array<type, size> declares array of specified type and size.",
        "xp": 5
    },
    {
        "id": "cpp-5-2-3",
        "type": "typing",
        "question": "What header do you need for std::array?",
        "correctAnswer": ["<array>", "array"],
        "explanation": "#include <array> for std::array container.",
        "xp": 5
    },
    
    # Multiple choice (2 questions)
    {
        "id": "cpp-5-2-4",
        "type": "multiple",
        "question": "What does std::array provide that C-style arrays don't?",
        "options": ["Bounds checking, iterators, member functions", "Nothing", "Larger size", "Slower access"],
        "correctAnswer": [0],
        "explanation": "std::array provides bounds checking (at()), iterators, and useful member functions.",
        "xp": 5
    },
    {
        "id": "cpp-5-2-5",
        "type": "multiple",
        "question": "Can std::array be resized?",
        "options": ["No", "Yes", "With resize()", "Only if empty"],
        "correctAnswer": [0],
        "explanation": "std::array has fixed size like C-style arrays.",
        "xp": 5
    },
    
    # Code (20 questions)
    {
        "id": "cpp-5-2-6",
        "type": "code",
        "question": "Declare std::array of 5 integers.",
        "correctAnswer": ["std::array<int, 5> arr;", "array<int, 5> arr;"],
        "explanation": "std::array<type, size> name;",
        "xp": 15
    },
    {
        "id": "cpp-5-2-7",
        "type": "code",
        "question": "Initialize std::array with values 1, 2, 3, 4, 5.",
        "correctAnswer": ["std::array<int, 5> arr = {1, 2, 3, 4, 5};", "array<int, 5> arr = {1, 2, 3, 4, 5};"],
        "explanation": "Initialize with braced initializer list.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-8",
        "type": "code",
        "question": "Access element at index 2 using at() for bounds checking.",
        "correctAnswer": ["arr.at(2)", "int val = arr.at(2);"],
        "explanation": "at() throws exception if index out of bounds.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-9",
        "type": "code",
        "question": "Get size of std::array.",
        "correctAnswer": ["arr.size()", "size_t s = arr.size();"],
        "explanation": "size() returns number of elements.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-10",
        "type": "code",
        "question": "Check if array is empty.",
        "correctAnswer": ["arr.empty()", "if (arr.empty())"],
        "explanation": "empty() returns true if size is 0.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-11",
        "type": "code",
        "question": "Access first element.",
        "correctAnswer": ["arr.front()", "int first = arr.front();"],
        "explanation": "front() returns reference to first element.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-12",
        "type": "code",
        "question": "Access last element.",
        "correctAnswer": ["arr.back()", "int last = arr.back();"],
        "explanation": "back() returns reference to last element.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-13",
        "type": "code",
        "question": "Get pointer to underlying data.",
        "correctAnswer": ["arr.data()", "int* p = arr.data();"],
        "explanation": "data() returns pointer to underlying array.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-14",
        "type": "code",
        "question": "Fill entire array with value 42.",
        "correctAnswer": ["arr.fill(42);"],
        "explanation": "fill() sets all elements to specified value.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-15",
        "type": "code",
        "question": "Iterate using iterator.",
        "correctAnswer": ["for (auto it = arr.begin(); it != arr.end(); it++) { cout << *it; }"],
        "explanation": "Use begin() and end() iterators to traverse.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-16",
        "type": "code",
        "question": "Iterate using range-based for loop.",
        "correctAnswer": ["for (int x : arr) { cout << x << \" \"; }"],
        "explanation": "Range-based for works with std::array.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-17",
        "type": "code",
        "question": "Swap contents of two std::arrays.",
        "correctAnswer": ["arr1.swap(arr2);", "swap(arr1, arr2);"],
        "explanation": "swap() exchanges contents of two arrays.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-18",
        "type": "code",
        "question": "Pass std::array to function by reference.",
        "correctAnswer": ["void func(array<int, 5>& arr)", "void func(std::array<int, 5>& arr)"],
        "explanation": "Pass by reference to avoid copying.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-19",
        "type": "code",
        "question": "Compare two std::arrays for equality.",
        "correctAnswer": ["if (arr1 == arr2)", "arr1 == arr2"],
        "explanation": "Arrays can be compared with == operator.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-20",
        "type": "code",
        "question": "Sort std::array using STL sort.",
        "correctAnswer": ["sort(arr.begin(), arr.end());"],
        "explanation": "STL sort works with iterators.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-21",
        "type": "code",
        "question": "Use fill() to set first 3 elements to 0.",
        "correctAnswer": ["arr.fill(0);", "for (int i = 0; i < 3; i++) arr[i] = 0;"],
        "explanation": "fill() sets all elements, use loop for partial.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-22",
        "type": "code",
        "question": "Use at() to access element with bounds checking.",
        "correctAnswer": ["arr.at(3) = 100;", "int val = arr.at(3);"],
        "explanation": "at() throws std::out_of_range if index invalid.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-23",
        "type": "code",
        "question": "Iterate using reverse iterator.",
        "correctAnswer": ["for (auto it = arr.rbegin(); it != arr.rend(); it++) { cout << *it; }"],
        "explanation": "rbegin() and rend() iterate in reverse.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-24",
        "type": "code",
        "question": "Pass std::array by const reference.",
        "correctAnswer": ["void func(const array<int, 5>& arr)", "void func(const std::array<int, 5>& arr)"],
        "explanation": "const reference prevents modification.",
        "xp": 15
    },
    {
        "id": "cpp-5-2-25",
        "type": "code",
        "question": "Initialize std::array of doubles.",
        "correctAnswer": ["std::array<double, 5> arr = {1.1, 2.2, 3.3, 4.4, 5.5};"],
        "explanation": "std::array works with any type.",
        "xp": 15
    }
]

lesson2 = {
    "id": 26,
    "title": "std::array",
    "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# std::array

`std::array` is a modern C++ container that provides a safe, feature-rich alternative to C-style arrays.

## Declaration

```cpp
#include <array>

std::array<type, size> name;
```

```cpp
std::array<int, 5> arr;              // Array of 5 integers
std::array<double, 10> values;       // Array of 10 doubles
std::array<std::string, 3> names;    // Array of 3 strings
```

## Initialization

```cpp
// Initialize with values
std::array<int, 5> arr = {1, 2, 3, 4, 5};

// Uniform initialization
std::array<int, 5> arr{1, 2, 3, 4, 5};

// Default initialization (zero for built-in types)
std::array<int, 5> arr{};  // All zeros
```

## Element Access

### Operator [] (No bounds checking)
```cpp
arr[0] = 10;  // Set first element
int x = arr[2];  // Get third element
```

### at() (Bounds checking)
```cpp
arr.at(0) = 10;  // Set first element (with bounds check)
int x = arr.at(2);  // Get third element (with bounds check)
```

**Difference:** `at()` throws `std::out_of_range` if index is invalid, `[]` is undefined behavior.

## Member Functions

```cpp
std::array<int, 5> arr = {1, 2, 3, 4, 5};

// Size
arr.size();    // 5
arr.empty();   // false

// Element access
arr.front();   // 1 (first element)
arr.back();    // 5 (last element)
arr.data();    // pointer to underlying array

// Fill
arr.fill(42);  // All elements now 42

// Swap
arr1.swap(arr2);  // Exchange contents
```

## Iteration

### Iterator-based
```cpp
for (auto it = arr.begin(); it != arr.end(); it++) {
    std::cout << *it << " ";
}

// Reverse iteration
for (auto it = arr.rbegin(); it != arr.rend(); it++) {
    std::cout << *it << " ";
}
```

### Range-based for
```cpp
for (int x : arr) {
    std::cout << x << " ";
}
```

### With index
```cpp
for (size_t i = 0; i < arr.size(); i++) {
    std::cout << arr[i] << " ";
}
```

## Passing to Functions

### By reference (preferred)
```cpp
void process(std::array<int, 5>& arr) {
    // Can modify
    arr[0] = 100;
}
```

### By const reference
```cpp
void print(const std::array<int, 5>& arr) {
    // Cannot modify
    for (int x : arr) {
        std::cout << x;
    }
}
```

## Comparison

```cpp
std::array<int, 5> arr1 = {1, 2, 3, 4, 5};
std::array<int, 5> arr2 = {1, 2, 3, 4, 5};

if (arr1 == arr2) {  // Compare element by element
    // Equal
}

if (arr1 < arr2) {  // Lexicographic comparison
    // Less than
}
```

## STL Algorithms

```cpp
std::array<int, 5> arr = {3, 1, 4, 1, 5};

// Sort
std::sort(arr.begin(), arr.end());

// Find
auto it = std::find(arr.begin(), arr.end(), 4);

// Count
int count = std::count(arr.begin(), arr.end(), 1);
```

## std::array vs C-style Arrays

| Feature | std::array | C-style array |
|---------|-----------|---------------|
| Size information | ✅ Known | ❌ Decays to pointer |
| Bounds checking | ✅ at() | ❌ No |
| Iterators | ✅ Yes | ❌ No |
| Member functions | ✅ Yes | ❌ No |
| Comparison | ✅ Yes | ❌ No |
| Performance | ✅ Same | ✅ Same |
| Copy/assign | ✅ Yes | ❌ No |

## Common Patterns

### Find maximum
```cpp
auto max = std::max_element(arr.begin(), arr.end());
```

### Fill with value
```cpp
arr.fill(0);  // Set all elements to 0
```

### Convert to C-style array
```cpp
int* c_arr = arr.data();  // Pass to C API
```

### Aggregate initialization
```cpp
struct Point {
    std::array<int, 3> coords;
};

Point p{ {1, 2, 3} };
```
""",
    "questions": lesson2_questions
}

data['units'][4]['lessons'][1].update(lesson2)
print("✅ Lesson 2: std::array - 25 questions (20 code)")

# ============================================================================
# LESSON 3: std::string
# ============================================================================
lesson3_questions = [
    # Type-in (3 questions)
    {
        "id": "cpp-5-3-1",
        "type": "typing",
        "question": "What is std::string?",
        "correctAnswer": ["C++ string class", "dynamic string container"],
        "explanation": "std::string is a dynamic string container that manages memory automatically.",
        "xp": 5
    },
    {
        "id": "cpp-5-3-2",
        "type": "typing",
        "question": "What header do you need for std::string?",
        "correctAnswer": ["<string>", "string"],
        "explanation": "#include <string> for std::string class.",
        "xp": 5
    },
    {
        "id": "cpp-5-3-3",
        "type": "typing",
        "question": "What does std::string automatically handle?",
        "correctAnswer": ["memory management", "size allocation", "null termination"],
        "explanation": "std::string handles memory allocation and deallocation automatically.",
        "xp": 5
    },
    
    # Multiple choice (2 questions)
    {
        "id": "cpp-5-3-4",
        "type": "multiple",
        "question": "What is the difference between std::string and C-style strings?",
        "options": ["std::string manages memory, C-style doesn't", "No difference", "std::string is faster", "C-style is safer"],
        "correctAnswer": [0],
        "explanation": "std::string automatically manages memory while C-style strings require manual management.",
        "xp": 5
    },
    {
        "id": "cpp-5-3-5",
        "type": "multiple",
        "question": "Can std::string be resized?",
        "options": ["Yes", "No", "Only if empty", "With special function"],
        "correctAnswer": [0],
        "explanation": "std::string can dynamically resize as needed.",
        "xp": 5
    },
    
    # Code (20 questions)
    {
        "id": "cpp-5-3-6",
        "type": "code",
        "question": "Declare an empty std::string.",
        "correctAnswer": ["std::string s;", "string s;"],
        "explanation": "Default constructor creates empty string.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-7",
        "type": "code",
        "question": "Initialize std::string with text.",
        "correctAnswer": ["std::string s = \"Hello\";", "string s(\"Hello\");"],
        "explanation": "Can initialize with string literal or constructor.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-8",
        "type": "code",
        "question": "Get length of string.",
        "correctAnswer": ["s.length()", "s.size()", "int len = s.length();"],
        "explanation": "length() and size() both return string length.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-9",
        "type": "code",
        "question": "Access character at index 2.",
        "correctAnswer": ["s[2]", "char c = s[2];", "s.at(2)"],
        "explanation": "Use [] or at() to access characters.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-10",
        "type": "code",
        "question": "Append text to string.",
        "correctAnswer": ["s += \" world\";", "s.append(\" world\");"],
        "explanation": "Use += or append() to concatenate.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-11",
        "type": "code",
        "question": "Find position of substring.",
        "correctAnswer": ["size_t pos = s.find(\"abc\");", "s.find(\"text\")"],
        "explanation": "find() returns position or string::npos if not found.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-12",
        "type": "code",
        "question": "Replace substring from position 2 with new text.",
        "correctAnswer": ["s.replace(2, 3, \"new\");"],
        "explanation": "replace(pos, length, new_text)",
        "xp": 15
    },
    {
        "id": "cpp-5-3-13",
        "type": "code",
        "question": "Get substring of 5 characters starting at position 3.",
        "correctAnswer": ["string sub = s.substr(3, 5);"],
        "explanation": "substr(start_pos, length)",
        "xp": 15
    },
    {
        "id": "cpp-5-3-14",
        "type": "code",
        "question": "Compare two strings for equality.",
        "correctAnswer": ["if (s1 == s2)", "s1 == s2"],
        "explanation": "Use == operator for comparison.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-15",
        "type": "code",
        "question": "Check if string is empty.",
        "correctAnswer": ["s.empty()", "if (s.empty())"],
        "explanation": "empty() returns true if string has no characters.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-16",
        "type": "code",
        "question": "Clear string (remove all characters).",
        "correctAnswer": ["s.clear();"],
        "explanation": "clear() removes all characters, making string empty.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-17",
        "type": "code",
        "question": "Convert integer to string.",
        "correctAnswer": ["string s = std::to_string(42);", "string s = to_string(num);"],
        "explanation": "to_string() converts numeric types to string.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-18",
        "type": "code",
        "question": "Iterate through string with range-based for.",
        "correctAnswer": ["for (char c : s) { cout << c; }"],
        "explanation": "Range-based for iterates through each character.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-19",
        "type": "code",
        "question": "Insert text at position 5.",
        "correctAnswer": ["s.insert(5, \"text\");"],
        "explanation": "insert(position, text)",
        "xp": 15
    },
    {
        "id": "cpp-5-3-20",
        "type": "code",
        "question": "Erase 3 characters starting at position 2.",
        "correctAnswer": ["s.erase(2, 3);"],
        "explanation": "erase(position, length)",
        "xp": 15
    },
    {
        "id": "cpp-5-3-21",
        "type": "code",
        "question": "Concatenate two strings.",
        "correctAnswer": ["string result = s1 + s2;", "s1 += s2;"],
        "explanation": "Use + operator or += for concatenation.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-22",
        "type": "code",
        "question": "Push back a character.",
        "correctAnswer": ["s.push_back('x');"],
        "explanation": "push_back() adds character to end.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-23",
        "type": "code",
        "question": "Pop back last character.",
        "correctAnswer": ["s.pop_back();"],
        "explanation": "pop_back() removes last character.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-24",
        "type": "code",
        "question": "Reserve capacity for 100 characters.",
        "correctAnswer": ["s.reserve(100);"],
        "explanation": "reserve() pre-allocates memory to reduce reallocations.",
        "xp": 15
    },
    {
        "id": "cpp-5-3-25",
        "type": "code",
        "question": "Convert string to uppercase.",
        "correctAnswer": ["transform(s.begin(), s.end(), s.begin(), ::toupper);"],
        "explanation": "Use transform from <algorithm> with toupper.",
        "xp": 15
    }
]

lesson3 = {
    "id": 27,
    "title": "std::string",
    "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# std::string

`std::string` is C++'s modern string class that provides safe, flexible string handling with automatic memory management.

## Declaration and Initialization

```cpp
#include <string>

// Empty string
std::string s;

// Initialize with text
std::string s = "Hello";
std::string s("Hello");

// Repeat character
std::string s(5, 'x');  // "xxxxx"

// From substring
std::string s("Hello World", 0, 5);  // "Hello"
```

## String Operations

### Concatenation
```cpp
std::string s1 = "Hello";
std::string s2 = " World";

std::string s3 = s1 + s2;  // "Hello World"
s1 += "!";                  // "Hello!"
```

### Accessing Characters
```cpp
std::string s = "Hello";

char c1 = s[0];      // 'H' (no bounds checking)
char c2 = s.at(0);   // 'H' (with bounds checking)

// Modify
s[0] = 'J';          // "Jello"
```

### Length and Size
```cpp
std::string s = "Hello";
s.length();   // 5
s.size();     // 5
s.empty();    // false
```

## Modifying Strings

### Append
```cpp
s += " World";      // Append with +=
s.append("!!");     // Append with append()
s.push_back('!');   // Append single character
```

### Insert
```cpp
s.insert(5, " there");  // Insert at position 5
```

### Erase
```cpp
s.erase(5, 3);  // Erase 3 characters from position 5
s.clear();      // Remove all characters
```

### Replace
```cpp
s.replace(0, 5, "Hi");  // Replace 5 chars at position 0
```

## Searching

```cpp
std::string s = "Hello World";

// Find
size_t pos = s.find("World");  // 6
pos = s.find("xyz");           // string::npos (not found)

// Find from position
pos = s.find("o", 5);  // Find 'o' starting at position 5

// Check if found
if (pos != std::string::npos) {
    // Found
}
```

## Substrings

```cpp
std::string s = "Hello World";

std::string sub = s.substr(6, 5);  // "World"
std::string sub = s.substr(6);     // "World" to end
```

## Comparison

```cpp
std::string s1 = "Hello";
std::string s2 = "World";

if (s1 == s2) { }  // Equality
if (s1 != s2) { }  // Inequality
if (s1 < s2)  { }  // Less than (lexicographic)
if (s1 > s2)  { }  // Greater than
```

## Iteration

### Range-based for
```cpp
std::string s = "Hello";

for (char c : s) {
    std::cout << c;
}
```

### Index-based
```cpp
for (size_t i = 0; i < s.length(); i++) {
    std::cout << s[i];
}
```

### Iterator
```cpp
for (auto it = s.begin(); it != s.end(); it++) {
    std::cout << *it;
}
```

## Type Conversion

```cpp
// Number to string
std::string s1 = std::to_string(42);        // "42"
std::string s2 = std::to_string(3.14);      // "3.14"
std::string s3 = std::to_string(true);      // "1"

// String to number (with <sstream>)
int x = std::stoi("42");              // 42
double d = std::stod("3.14");         // 3.14
```

## Case Conversion

```cpp
#include <algorithm>
#include <cctype>

std::string s = "Hello";

// To uppercase
std::transform(s.begin(), s.end(), s.begin(), ::toupper);
// "HELLO"

// To lowercase
std::transform(s.begin(), s.end(), s.begin(), ::tolower);
// "hello"
```

## Finding and Counting

```cpp
std::string s = "Hello World Hello";

// Count occurrences
int count = 0;
size_t pos = 0;
while ((pos = s.find("Hello", pos)) != std::string::npos) {
    count++;
    pos += 5;
}
```

## String Views (C++17)

```cpp
#include <string_view>

std::string s = "Hello World";
std::string_view sv = s.substr(0, 5);  // View without copying
```

## Common Patterns

### Trim whitespace
```cpp
// Remove leading whitespace
s.erase(0, s.find_first_not_of(" \t\n\r"));

// Remove trailing whitespace
s.erase(s.find_last_not_of(" \t\n\r") + 1);
```

### Split by delimiter
```cpp
std::vector<std::string> split(const std::string& s, char delimiter) {
    std::vector<std::string> tokens;
    std::string token;
    std::istringstream tokenStream(s);
    while (std::getline(tokenStream, token, delimiter)) {
        tokens.push_back(token);
    }
    return tokens;
}
```

### Read line into string
```cpp
std::string line;
std::getline(std::cin, line);
```

## Memory Management

```cpp
std::string s;

// Reserve capacity (pre-allocate)
s.reserve(100);  // Allocate space for 100 characters

// Shrink to fit
s.shrink_to_fit();  // Reduce capacity to match size

// Capacity
s.capacity();  // Current allocated capacity
s.size();     // Current string length
```
""",
    "questions": lesson3_questions
}

data['units'][4]['lessons'][2].update(lesson3)
print("✅ Lesson 3: std::string - 25 questions (20 code)")

# Write checkpoint
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n')
    f.write('// Generated from C++ outline\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n📊 Checkpoint: 3 of 5 lessons complete (75 of 125 questions)")
print("   - Code questions: 60 (80%)")
print("🔄 Continue with Lessons 4-5...")