#!/usr/bin/env python3
"""
Build Unit 5: Arrays, Strings, and Basic Data Structures
5 lessons with 25 questions each (125 total)
Emphasis on code questions (~70% = 87 code questions)
"""
import json

print("🚀 Building C++ Unit 5: Arrays, Strings, and Basic Data Structures")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: C-style Arrays
# ============================================================================
lesson1_questions = [
    # Type-in (3 questions)
    {
        "id": "cpp-5-1-1",
        "type": "typing",
        "question": "What is a C-style array?",
        "correctAnswer": ["fixed-size contiguous memory block", "collection of same-type elements", "contiguous memory allocation"],
        "explanation": "C-style arrays are fixed-size, contiguous blocks of memory storing same-type elements.",
        "xp": 5
    },
    {
        "id": "cpp-5-1-2",
        "type": "typing",
        "question": "How do arrays store elements?",
        "correctAnswer": ["contiguously in memory", "adjacent memory locations"],
        "explanation": "Array elements are stored contiguously in memory for fast access.",
        "xp": 5
    },
    {
        "id": "cpp-5-1-3",
        "type": "typing",
        "question": "What is array index?",
        "correctAnswer": ["position of element starting from 0", "zero-based position"],
        "explanation": "Array indices start at 0, so arr[0] is the first element.",
        "xp": 5
    },
    
    # Multiple choice (2 questions)
    {
        "id": "cpp-5-1-4",
        "type": "multiple",
        "question": "What happens if you access an array out of bounds?",
        "options": ["Undefined behavior", "Error message", "Returns 0", "Wraps around"],
        "correctAnswer": [0],
        "explanation": "Out-of-bounds access is undefined behavior - it may crash or corrupt memory.",
        "xp": 5
    },
    {
        "id": "cpp-5-1-5",
        "type": "multiple",
        "question": "Can you resize a C-style array after declaration?",
        "options": ["No", "Yes", "With special function", "Only if empty"],
        "correctAnswer": [0],
        "explanation": "C-style arrays have fixed size and cannot be resized.",
        "xp": 5
    },
    
    # Code (20 questions)
    {
        "id": "cpp-5-1-6",
        "type": "code",
        "question": "Declare an array of 10 integers.",
        "correctAnswer": ["int arr[10];"],
        "explanation": "Array declaration: type name[size];",
        "xp": 15
    },
    {
        "id": "cpp-5-1-7",
        "type": "code",
        "question": "Initialize array with values 1, 2, 3, 4, 5.",
        "correctAnswer": ["int arr[] = {1, 2, 3, 4, 5};", "int arr[5] = {1, 2, 3, 4, 5};"],
        "explanation": "Arrays can be initialized with braced initializer list.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-8",
        "type": "code",
        "question": "Set first element of array to 100.",
        "correctAnswer": ["arr[0] = 100;"],
        "explanation": "Array elements accessed with index operator [].",
        "xp": 15
    },
    {
        "id": "cpp-5-1-9",
        "type": "code",
        "question": "Access the last element of array arr with 10 elements.",
        "correctAnswer": ["arr[9]", "int last = arr[9];"],
        "explanation": "Last element of size-N array is at index N-1.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-10",
        "type": "code",
        "question": "Print all elements of array arr[5] using for loop.",
        "correctAnswer": ["for (int i = 0; i < 5; i++) { cout << arr[i] << \" \"; }"],
        "explanation": "Loop from 0 to size-1 and access each element.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-11",
        "type": "code",
        "question": "Find sum of all elements in array arr[5].",
        "correctAnswer": ["int sum = 0;\\nfor (int i = 0; i < 5; i++) {\\n    sum += arr[i];\\n}"],
        "explanation": "Iterate through array and accumulate sum.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-12",
        "type": "code",
        "question": "Find maximum value in array arr[5].",
        "correctAnswer": ["int max = arr[0];\\nfor (int i = 1; i < 5; i++) {\\n    if (arr[i] > max) max = arr[i];\\n}"],
        "explanation": "Initialize max to first element, then compare with rest.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-13",
        "type": "code",
        "question": "Reverse array arr[5] in place.",
        "correctAnswer": ["for (int i = 0; i < 2; i++) {\\n    int temp = arr[i];\\n    arr[i] = arr[4-i];\\n    arr[4-i] = temp;\\n}"],
        "explanation": "Swap elements from outside in: arr[i] with arr[n-1-i].",
        "xp": 15
    },
    {
        "id": "cpp-5-1-14",
        "type": "code",
        "question": "Check if value exists in array arr[5].",
        "correctAnswer": ["bool found = false;\\nfor (int i = 0; i < 5; i++) {\\n    if (arr[i] == value) { found = true; break; }\\n}"],
        "explanation": "Linear search: iterate through array looking for value.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-15",
        "type": "code",
        "question": "Initialize array with all zeros.",
        "correctAnswer": ["int arr[5] = {0};", "int arr[5] = {0, 0, 0, 0, 0};"],
        "explanation": "= {0} initializes first element to 0, rest default to 0.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-16",
        "type": "code",
        "question": "Copy array src[5] to dest[5].",
        "correctAnswer": ["for (int i = 0; i < 5; i++) dest[i] = src[i];"],
        "explanation": "Copy element by element in loop.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-17",
        "type": "code",
        "question": "Initialize 2D array 3x3 with zeros.",
        "correctAnswer": ["int arr[3][3] = {0};"],
        "explanation": "2D array initialization: type name[rows][cols];",
        "xp": 15
    },
    {
        "id": "cpp-5-1-18",
        "type": "code",
        "question": "Access element at row 1, column 2 of 2D array arr[3][3].",
        "correctAnswer": ["arr[1][2]", "int val = arr[1][2];"],
        "explanation": "2D array access: arr[row][col]",
        "xp": 15
    },
    {
        "id": "cpp-5-1-19",
        "type": "code",
        "question": "Initialize array with 1,2,3, rest default.",
        "correctAnswer": ["int arr[5] = {1, 2, 3};"],
        "explanation": "Unspecified elements are zero-initialized.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-20",
        "type": "code",
        "question": "Pass array to function that calculates sum.",
        "correctAnswer": ["int sumArray(int arr[], int size)", "int sumArray(int* arr, int size)"],
        "explanation": "Arrays decay to pointers when passed to functions.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-21",
        "type": "code",
        "question": "Count occurrences of value in array arr[5].",
        "correctAnswer": ["int count = 0;\\nfor (int i = 0; i < 5; i++) {\\n    if (arr[i] == value) count++;\\n}"],
        "explanation": "Iterate and increment counter when value matches.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-22",
        "type": "code",
        "question": "Sort array arr[5] in ascending order.",
        "correctAnswer": ["for (int i = 0; i < 4; i++) {\\n    for (int j = i+1; j < 5; j++) {\\n        if (arr[i] > arr[j]) {\\n            int temp = arr[i];\\n            arr[i] = arr[j];\\n            arr[j] = temp;\\n        }\\n    }\\n}"],
        "explanation": "Simple selection sort: compare each element with rest and swap if out of order.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-23",
        "type": "code",
        "question": "Initialize character array as string.",
        "correctAnswer": ["char str[] = \"hello\";", "char str[6] = {'h','e','l','l','o','\\0'};"],
        "explanation": "Character arrays can be initialized with string literals.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-24",
        "type": "code",
        "question": "Get array size in bytes.",
        "correctAnswer": ["sizeof(arr)", "size_t size = sizeof(arr);"],
        "explanation": "sizeof returns total bytes occupied by array.",
        "xp": 15
    },
    {
        "id": "cpp-5-1-25",
        "type": "code",
        "question": "Calculate number of elements in array.",
        "correctAnswer": ["int size = sizeof(arr) / sizeof(arr[0]);"],
        "explanation": "Divide total size by size of one element.",
        "xp": 15
    }
]

lesson1 = {
    "id": 25,
    "title": "C-style Arrays",
    "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# C-style Arrays

C-style arrays are the most basic way to store collections of values in C++.

## Array Declaration

```cpp
type name[size];
```

```cpp
int arr[5];           // Array of 5 integers
double values[10];    // Array of 10 doubles
char name[20];        // Array of 20 characters
```

## Array Initialization

```cpp
// Initialize with values
int arr[] = {1, 2, 3, 4, 5};        // Size inferred (5)
int arr[5] = {10, 20, 30, 40, 50};  // Explicit size

// Partial initialization (rest are zero)
int arr[5] = {1, 2, 3};             // {1, 2, 3, 0, 0}

// Zero initialization
int arr[5] = {0};                   // All zeros
```

## Accessing Elements

```cpp
int arr[5] = {10, 20, 30, 40, 50};

arr[0]  // First element: 10
arr[4]  // Last element: 50
arr[2]  // Third element: 30
```

**Important:** Array indices are zero-based!

## Iterating Through Arrays

```cpp
int arr[5] = {1, 2, 3, 4, 5};

// Using index
for (int i = 0; i < 5; i++) {
    cout << arr[i] << " ";
}

// Using pointer
for (int* p = arr; p < arr + 5; p++) {
    cout << *p << " ";
}

// Range-based for (C++11)
for (int x : arr) {
    cout << x << " ";
}
```

## Common Operations

### Find Sum
```cpp
int sum = 0;
for (int i = 0; i < 5; i++) {
    sum += arr[i];
}
```

### Find Maximum
```cpp
int max = arr[0];
for (int i = 1; i < 5; i++) {
    if (arr[i] > max) max = arr[i];
}
```

### Linear Search
```cpp
bool found = false;
for (int i = 0; i < 5; i++) {
    if (arr[i] == target) {
        found = true;
        break;
    }
}
```

## Multidimensional Arrays

```cpp
// 2D array
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Access
matrix[0][0]  // 1
matrix[2][2]  // 9

// Nested loops to iterate
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        cout << matrix[i][j] << " ";
    }
}
```

## Arrays and Functions

```cpp
// Arrays decay to pointers when passed
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
}

int arr[5] = {1, 2, 3, 4, 5};
printArray(arr, 5);  // Note: must pass size separately
```

**Important:** Arrays lose their size information when passed to functions!

## Array Size

```cpp
int arr[5];

// Total bytes
int bytes = sizeof(arr);  // 20 (5 * 4)

// Number of elements
int size = sizeof(arr) / sizeof(arr[0]);  // 5
```

## Character Arrays as Strings

```cpp
char str[] = "Hello";  // {'H', 'e', 'l', 'l', 'o', '\\0'}

// C-style strings are null-terminated
```

## Warnings

❌ **Out of bounds access:**
```cpp
int arr[5];
arr[10] = 100;  // ❌ Undefined behavior!
```

❌ **No bounds checking:**
```cpp
// No automatic bounds checking - you're responsible!
for (int i = 0; i <= 5; i++) {  // Bug: should be < 5
    arr[i] = i;  // Memory corruption!
}
```

❌ **Cannot resize:**
```cpp
int arr[5];
// arr cannot be resized! Use vector instead
```

## When to Use C-style Arrays

✅ **Use when:**
- You know the size at compile time
- Performance is critical
- You need fixed-size storage
- Working with legacy code

❌ **Avoid when:**
- Size needs to change dynamically
- You need bounds checking
- Working with strings (use std::string)
- Need flexible containers (use vector)
""",
    "questions": lesson1_questions
}

data['units'][4]['lessons'][0].update(lesson1)
print("✅ Lesson 1: C-style Arrays - 25 questions (20 code)")

# Write checkpoint
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n')
    f.write('// Generated from C++ outline\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n📊 Checkpoint: 1 of 5 lessons complete (25 of 125 questions)")
print("   - Code questions: 20 (80%)")
print("🔄 Continue with Lessons 2-5...")