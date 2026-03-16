#!/usr/bin/env python3
"""
Build Unit 4 Lessons 3-4: Pointer Arithmetic and const Correctness
"""
import json

print("🚀 Building C++ Unit 4 Lessons 3-4...")
print("=" * 60)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 3: Pointer Arithmetic
# ============================================================================
lesson3_questions = [
    # Type-in (5 questions)
    {
        "id": "cpp-4-3-1",
        "type": "typing",
        "question": "What is pointer arithmetic?",
        "correctAnswer": ["mathematical operations on pointers", "adding/subtracting integers from pointers"],
        "explanation": "Pointer arithmetic allows you to add or subtract integers from pointers to navigate memory.",
        "xp": 5
    },
    {
        "id": "cpp-4-3-2",
        "type": "typing",
        "question": "When you add 1 to an int pointer, how many bytes does it advance?",
        "correctAnswer": ["sizeof(int)", "4 bytes", "size of int"],
        "explanation": "Pointer arithmetic advances by the size of the pointed-to type.",
        "xp": 5
    },
    {
        "id": "cpp-4-3-3",
        "type": "typing",
        "question": "What does p++ do to a pointer p?",
        "correctAnswer": ["moves to next element", "increments by sizeof type"],
        "explanation": "p++ advances the pointer to point to the next element of that type.",
        "xp": 5
    },
    {
        "id": "cpp-4-3-4",
        "type": "typing",
        "question": "Can you subtract two pointers of the same type?",
        "correctAnswer": ["yes", "can subtract"],
        "explanation": "You can subtract two pointers of the same type - the result is the number of elements between them.",
        "xp": 5
    },
    {
        "id": "cpp-4-3-5",
        "type": "typing",
        "question": "What is the result of subtracting two pointers?",
        "correctAnswer": ["number of elements between them", "difference in elements"],
        "explanation": "Pointer subtraction returns the number of elements between the two pointers.",
        "xp": 5
    },
    
    # Multiple choice (5 questions)
    {
        "id": "cpp-4-3-6",
        "type": "multiple",
        "question": "What does p + 1 do for an int* pointer?",
        "options": ["Moves 4 bytes ahead", "Moves 1 byte ahead", "Moves to next int", "Both A and C"],
        "correctAnswer": [3],
        "explanation": "p + 1 moves the pointer to the next int (4 bytes on most systems).",
        "xp": 5
    },
    {
        "id": "cpp-4-3-7",
        "type": "multiple",
        "question": "Can you multiply two pointers?",
        "options": ["No", "Yes", "Only if same type", "Only with special operators"],
        "correctAnswer": [0],
        "explanation": "Pointer multiplication is not allowed.",
        "xp": 5
    },
    {
        "id": "cpp-4-3-8",
        "type": "multiple",
        "question": "What is *(p + 1) equivalent to?",
        "options": ["p[1]", "p + 1", "*p + 1", "p++"],
        "correctAnswer": [0],
        "explanation": "*(p + 1) is equivalent to p[1] - both access the next element.",
        "xp": 5
    },
    {
        "id": "cpp-4-3-9",
        "type": "multiple",
        "question": "Can you perform pointer arithmetic on void pointers?",
        "options": ["No", "Yes", "Only with cast", "Only in C"],
        "correctAnswer": [0],
        "explanation": "Pointer arithmetic is not allowed on void* because the size is unknown.",
        "xp": 5
    },
    {
        "id": "cpp-4-3-10",
        "type": "multiple",
        "question": "What does p-- do?",
        "options": ["Moves to previous element", "Decrements pointed value", "Invalid", "Same as --*p"],
        "correctAnswer": [0],
        "explanation": "p-- moves the pointer to point to the previous element.",
        "xp": 5
    },
    
    # Code (15 questions)
    {
        "id": "cpp-4-3-11",
        "type": "code",
        "question": "Increment pointer p to point to the next int.",
        "correctAnswer": ["p++;", "++p;"],
        "explanation": "Use ++ to advance pointer to next element.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-12",
        "type": "code",
        "question": "Access the 5th element using pointer arithmetic.",
        "correctAnswer": ["*(p + 4)", "p[4]"],
        "explanation": "*(p + 4) or p[4] accesses the 5th element (index 4).",
        "xp": 15
    },
    {
        "id": "cpp-4-3-13",
        "type": "code",
        "question": "Calculate difference between two int pointers p1 and p2.",
        "correctAnswer": ["int diff = p2 - p1;", "ptrdiff_t diff = p2 - p1;"],
        "explanation": "Subtract pointers to get element count between them.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-14",
        "type": "code",
        "question": "Move pointer p back by 2 elements.",
        "correctAnswer": ["p -= 2;", "p = p - 2;"],
        "explanation": "Subtract integer from pointer to move backward.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-15",
        "type": "code",
        "question": "Print value at index 3 using pointer p pointing to start of array.",
        "correctAnswer": ["cout << *(p + 3);", "cout << p[3];"],
        "explanation": "Use *(p + 3) or p[3] to access element at index 3.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-16",
        "type": "code",
        "question": "Iterate through array of 5 ints using pointer arithmetic.",
        "correctAnswer": ["for (int* p = arr; p < arr + 5; p++) { *p = 0; }", "int* p = arr;\\nfor (int i = 0; i < 5; i++) {\\n    *(p + i) = 0;\\n}"],
        "explanation": "Use pointer comparison to iterate through array.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-17",
        "type": "code",
        "question": "Add 3 to pointer p.",
        "correctAnswer": ["p += 3;", "p = p + 3;"],
        "explanation": "p += 3 advances pointer by 3 elements.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-18",
        "type": "code",
        "question": "Compare two pointers p1 and p2 for equality.",
        "correctAnswer": ["if (p1 == p2)", "p1 == p2"],
        "explanation": "Pointers can be compared using ==, !=, <, >, <=, >=",
        "xp": 15
    },
    {
        "id": "cpp-4-3-19",
        "type": "code",
        "question": "Find end of array using pointer arithmetic (5 elements).",
        "correctAnswer": ["int* end = arr + 5;", "int* end = arr + sizeof(arr)/sizeof(arr[0]);"],
        "explanation": "arr + size gives pointer past last element.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-20",
        "type": "code",
        "question": "Access element using p[2] where p points to arr.",
        "correctAnswer": ["int value = p[2];", "p[2]"],
        "explanation": "Pointer can be used like array with [] operator.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-21",
        "type": "code",
        "question": "Sum all array elements using pointer arithmetic (5 elements).",
        "correctAnswer": ["int sum = 0;\\nfor (int* p = arr; p < arr + 5; p++) {\\n    sum += *p;\\n}"],
        "explanation": "Iterate with pointer, dereference each element.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-22",
        "type": "code",
        "question": "Check if pointer p is before pointer end.",
        "correctAnswer": ["if (p < end)", "p < end"],
        "explanation": "Use < to check if pointer is before another.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-23",
        "type": "code",
        "question": "Decrement pointer p to previous element.",
        "correctAnswer": ["p--;", "--p;"],
        "explanation": "Use -- to move pointer to previous element.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-24",
        "type": "code",
        "question": "Set value at *(p + 1) to 100.",
        "correctAnswer": ["*(p + 1) = 100;", "p[1] = 100;"],
        "explanation": "Dereference and assign.",
        "xp": 15
    },
    {
        "id": "cpp-4-3-25",
        "type": "code",
        "question": "Iterate backwards through array using pointer arithmetic.",
        "correctAnswer": ["for (int* p = arr + 4; p >= arr; p--) { cout << *p; }", "int* end = arr + 4;\\nfor (int* p = end; p >= arr; p--) {\\n    cout << *p << \" \";\\n}"],
        "explanation": "Start at last element, decrement pointer.",
        "xp": 15
    }
]

lesson3 = {
    "id": 21,
    "title": "Pointer Arithmetic",
    "unitTitle": "4. Pointers and References",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Pointer Arithmetic

Pointer arithmetic allows you to perform mathematical operations on pointers to navigate through memory.

## Basic Operations

```cpp
int arr[5] = {10, 20, 30, 40, 50};
int* p = arr;  // p points to arr[0]

p++;      // p now points to arr[1]
p + 2;    // Points to arr[3]
p - 1;    // Points back to arr[0]
```

## How It Works

When you add or subtract from a pointer, the operation advances by the size of the pointed-to type:

```cpp
int* p = arr;    // arr = 0x1000
p++;             // p = 0x1004 (4 bytes for int)
*(p + 2);        // Accesses arr[2] at 0x1008
```

**Formula:** `new_address = old_address + (offset * sizeof(type))`

## Array-Pointer Equivalence

```cpp
arr[3]   // Array subscript
*(arr + 3)  // Pointer arithmetic (equivalent)
```

## Pointer Subtraction

```cpp
int arr[10] = {0};
int* p1 = &arr[0];
int* p2 = &arr[7];

ptrdiff_t diff = p2 - p1;  // diff = 7
```

Pointer subtraction returns the **number of elements** between the pointers, not the byte difference.

## Looping with Pointers

```cpp
int arr[5] = {1, 2, 3, 4, 5};

// Method 1: Pointer arithmetic
for (int* p = arr; p < arr + 5; p++) {
    cout << *p << " ";
}

// Method 2: Index notation
for (int* p = arr; p < arr + 5; p++) {
    cout << p[0] << " ";
}
```

## Pointer Comparison

You can compare pointers using relational operators:

```cpp
int* p1 = &arr[0];
int* p2 = &arr[4];

if (p1 < p2)    // true - p1 points to earlier element
if (p1 == p2)   // false - different addresses
if (p1 != p2)   // true - different addresses
```

## Important Rules

✅ **Allowed:**
- Adding/subtracting integers from pointers
- Subtracting two pointers of the same type
- Comparing pointers of the same type
- Using pointers as arrays with []

❌ **Not Allowed:**
- Adding two pointers
- Multiplying pointers
- Dividing pointers
- Pointer arithmetic on `void*`

## Common Patterns

**Reverse iteration:**
```cpp
for (int* p = arr + 4; p >= arr; p--) {
    cout << *p << " ";
}
```

**Find array length with pointers:**
```cpp
int arr[] = {1, 2, 3, 4, 5};
int* begin = arr;
int* end = arr + 5;  // Pointer past last element
size_t len = end - begin;  // len = 5
```
""",
    "questions": lesson3_questions
}

data['units'][3]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Pointer Arithmetic - 25 questions complete")

# ============================================================================
# LESSON 4: const Correctness
# ============================================================================
lesson4_questions = [
    # Type-in (5 questions)
    {
        "id": "cpp-4-4-1",
        "question": "What does const mean?",
        "type": "typing",
        "correctAnswer": ["cannot be modified", "read-only"],
        "explanation": "const means the value cannot be modified after initialization.",
        "xp": 5
    },
    {
        "id": "cpp-4-4-2",
        "question": "What is const int* p?",
        "type": "typing",
        "correctAnswer": ["pointer to const int", "pointer to constant integer"],
        "explanation": "const int* p is a pointer to a constant integer - you can't modify the value through p.",
        "xp": 5
    },
    {
        "id": "cpp-4-4-3",
        "question": "What is int* const p?",
        "type": "typing",
        "correctAnswer": ["const pointer to int", "pointer that cannot be reassigned"],
        "explanation": "int* const p is a constant pointer - p itself cannot be changed to point elsewhere.",
        "xp": 5
    },
    {
        "id": "cpp-4-4-4",
        "question": "What does const in function parameters do?",
        "type": "typing",
        "correctAnswer": ["prevents modification", "read-only parameter"],
        "explanation": "const parameters ensure the function won't modify the passed value.",
        "xp": 5
    },
    {
        "id": "cpp-4-4-5",
        "question": "Why use const references for large objects?",
        "type": "typing",
        "correctAnswer": ["avoid copying while preventing modification", "efficiency", "both"],
        "explanation": "const references avoid copying large objects while preventing modification.",
        "xp": 5
    },
    
    # Multiple choice (5 questions)
    {
        "id": "cpp-4-4-6",
        "question": "Which pointer declaration allows modifying the pointed value?",
        "options": ["int* p", "const int* p", "int* const p", "Both A and C"],
        "correctAnswer": [0],
        "explanation": "int* p allows modifying the value through the pointer.",
        "xp": 5
    },
    {
        "id": "cpp-4-4-7",
        "question": "Which pointer declaration allows changing what the pointer points to?",
        "options": ["int* p", "const int* p", "int* const p", "Both A and B"],
        "correctAnswer": [2],
        "explanation": "int* const p allows changing what's pointed to (but not p itself).",
        "xp": 5
    },
    {
        "id": "cpp-4-4-8",
        "question": "Can you modify a const variable?",
        "options": ["No", "Yes", "Only with cast", "Only if initialized"],
        "correctAnswer": [0],
        "explanation": "const variables cannot be modified.",
        "xp": 5
    },
    {
        "id": "cpp-4-4-9",
        "question": "What happens if you try to modify through const int*?",
        "options": ["Compilation error", "Runtime error", "Undefined behavior", "Nothing"],
        "correctAnswer": [0],
        "explanation": "The compiler will prevent modification through const pointers.",
        "xp": 5
    },
    {
        "id": "cpp-4-4-10",
        "question": "Where should const be placed: const int* p vs int* const p?",
        "options": ["Before *: value const, After *: pointer const", "Opposite", "Same meaning", "No difference"],
        "correctAnswer": [0],
        "explanation": "Before *: value is const, After *: pointer is const.",
        "xp": 5
    },
    
    # Code (15 questions)
    {
        "id": "cpp-4-4-11",
        "type": "code",
        "question": "Declare a pointer to constant int.",
        "correctAnswer": ["const int* p;", "int const* p;"],
        "explanation": "const int* p prevents modification through the pointer.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-12",
        "type": "code",
        "question": "Declare a constant pointer to int.",
        "correctAnswer": ["int* const p = &x;"],
        "explanation": "int* const p must be initialized and cannot be reassigned.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-13",
        "type": "code",
        "question": "Pass a string by const reference.",
        "correctAnswer": ["void func(const string& s)", "void func(const string& s) { }"],
        "explanation": "const string& avoids copy and prevents modification.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-14",
        "type": "code",
        "question": "Declare a const member function.",
        "correctAnswer": ["int getValue() const", "int getValue() const { return value; }"],
        "explanation": "const member function promises not to modify member variables.",
        "xp": 15
    },
    {
                "id": "cpp-4-4-15",
        "type": "code",
        "question": "Create a const reference to int x.",
        "correctAnswer": ["const int& ref = x;", "const int &ref = x;"],
        "explanation": "const reference prevents modification of x through ref.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-16",
        "type": "code",
        "question": "Return const reference from function.",
        "correctAnswer": ["const int& getRef() const", "const int& getRef() const { return val; }"],
        "explanation": "const reference return prevents modification of returned value.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-17",
        "type": "code",
        "question": "Pass int pointer by const reference.",
        "correctAnswer": ["void func(const int*& p)", "void func(const int*& p) { }"],
        "explanation": "const reference to pointer prevents modifying the pointer.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-18",
        "type": "code",
        "question": "Pass pointer to const int by value.",
        "correctAnswer": ["void func(const int* p)", "void func(const int* p) { }"],
        "explanation": "Pointer to const prevents modifying pointed value.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-19",
        "type": "code",
        "question": "Create const int and pointer to it.",
        "correctAnswer": ["const int x = 10;\\nconst int* p = &x;", "const int x = 10; int const* p = &x;"],
        "explanation": "Use const pointer to point to const value.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-20",
        "type": "code",
        "question": "Declare function that doesn't modify member variables.",
        "correctAnswer": ["int get() const", "void print() const", "int get() const { return value; }"],
        "explanation": "Add const to member function declaration.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-21",
        "type": "code",
        "question": "Pass vector by const reference.",
        "correctAnswer": ["void func(const vector<int>& v)", "void func(const vector<int>& v) { }"],
        "explanation": "const vector& avoids copy and prevents modification.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-22",
        "type": "code",
        "question": "Create const pointer to constant int.",
        "correctAnswer": ["const int* const p = &x;", "int const* const p = &x;"],
        "explanation": "Both pointer and value are const.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-23",
        "type": "code",
        "question": "Read through pointer to const int (print value).",
        "correctAnswer": ["cout << *p;", "cout << *p << endl;"],
        "explanation": "You can read through const pointer, just not write.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-24",
        "type": "code",
        "question": "Pass array by const pointer.",
        "correctAnswer": ["void func(const int* arr, int size)", "void func(const int* arr, int size) { }"],
        "explanation": "const int* prevents modification of array elements.",
        "xp": 15
    },
    {
        "id": "cpp-4-4-25",
        "type": "code",
        "question": "Declare const member variable and const getter.",
        "correctAnswer": ["const int value;\\nint getValue() const { return value; }"],
        "explanation": "const member variable with const getter function.",
        "xp": 15
    }
]

lesson4 = {
    "id": 22,
    "title": "const Correctness",
    "unitTitle": "4. Pointers and References",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# const Correctness

`const` is a powerful tool for writing safer, clearer code by making your intentions explicit.

## const Variables

```cpp
const int MAX = 100;  // Cannot be modified
MAX = 200;  // Compilation error!
```

## Pointers and const

### 1. Pointer to const: `const int* p`

The value cannot be modified through the pointer.

```cpp
int x = 10;
const int* p = &x;

*p = 20;  // Error: cannot modify
p = &y;   // OK: pointer can be changed
```

**Memory aid:** "const on the left protects the value"

### 2. Const pointer: `int* const p`

The pointer cannot be changed to point elsewhere.

```cpp
int x = 10;
int* const p = &x;  // Must initialize!

p = &y;   // Error: cannot reseat pointer
*p = 20;  // OK: value can be modified
```

**Memory aid:** "const on the right protects the pointer"

### 3. Both: `const int* const p`

Neither the pointer nor the value can be changed.

```cpp
int x = 10;
const int* const p = &x;

p = &y;   // Error: cannot reseat
*p = 20;  // Error: cannot modify
```

## const in Function Parameters

### const Reference (Best Practice)

```cpp
void print(const string& s) {
    cout << s;  // Can read
    // s = "new";  // Error: cannot modify
}
```

**Benefits:**
- Avoids copying large objects
- Guarantees function won't modify
- Makes intent clear to readers

### const Pointer Parameter

```cpp
void process(const int* arr, int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i];  // Can read
        // arr[i] = 10;  // Error: cannot modify
    }
}
```

## const Member Functions

Member functions marked `const` promise not to modify the object.

```cpp
class Point {
private:
    int x, y;
public:
    int getX() const {  // Promises not to modify
        return x;
    }
    
    void move(int dx, int dy) {  // Not const - modifies object
        x += dx;
        y += dy;
    }
};
```

**When to use:**
- Getter functions
- Functions that only read member variables
- Functions called on const objects

## const Return Values

```cpp
const int& getValue() const {
    return value;  // Caller cannot modify
}

// This prevents:
obj.getValue() = 42;  // Error!
```

## Best Practices

✅ **DO:**
- Use `const` for values that shouldn't change
- Pass large objects by `const T&`
- Mark getter functions as `const`
- Use `const` to document intent

❌ **DON'T:**
- Use `const` when you need to modify
- Overuse `const` to the point of confusion
- Cast away const unless absolutely necessary

## Summary Table

| Declaration | Can modify value? | Can change pointer? |
|-------------|-------------------|---------------------|
| `int* p` | ✅ Yes | ✅ Yes |
| `const int* p` | ❌ No | ✅ Yes |
| `int* const p` | ✅ Yes | ❌ No |
| `const int* const p` | ❌ No | ❌ No |

## const and Performance

`const` doesn't just prevent bugs - it can help the compiler optimize:

```cpp
const int N = 100;
int arr[N];  // Compiler knows size won't change
```

The compiler can make assumptions and optimizations knowing `const` values won't change.
""",
    "questions": lesson4_questions
}

data['units'][3]['lessons'][3].update(lesson4)
print("✅ Lesson 4: const Correctness - 25 questions complete")

# Write progress
print(f"\n📊 Progress: 4 of 6 lessons complete ({100} of 150 questions)")
print(f"   - Code questions: {60} (60%)")
print(f"   - Type-in questions: {20} (20%)")
print(f"   - Multiple choice: {20} (20%)")

# Write to file
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n')
    f.write('// Generated from C++ outline\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n✅ Written to questions/cppCombined.js")
print("\n🔄 Continue with Lessons 5-6...")