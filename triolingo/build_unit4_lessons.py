#!/usr/bin/env python3
"""
Build Unit 4: Pointers and References
Creates 6 lessons with 25 questions each (150 total)
"""
import json

print("🚀 Building C++ Unit 4: Pointers and References")
print("=" * 60)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: Memory Model Overview
# ============================================================================
lesson1_questions = [
    # Type-in (5 questions)
    {
        "id": "cpp-4-1-1",
        "type": "typing",
        "question": "What is a memory address?",
        "correctAnswer": ["unique location in memory", "identifier for memory location", "hexadecimal number representing location"],
        "explanation": "A memory address is a unique identifier for a specific location in computer memory.",
        "xp": 5
    },
    {
        "id": "cpp-4-1-2",
        "type": "typing",
        "question": "What operator gets the address of a variable?",
        "correctAnswer": ["&", "address-of operator", "ampersand"],
        "explanation": "The & operator (address-of) returns the memory address of a variable.",
        "xp": 5
    },
    {
        "id": "cpp-4-1-3",
        "type": "typing",
        "question": "What is a pointer?",
        "correctAnswer": ["variable that stores a memory address", "variable containing address of another variable"],
        "explanation": "A pointer is a variable that stores the memory address of another variable.",
        "xp": 5
    },
    {
        "id": "cpp-4-1-4",
        "type": "typing",
        "question": "What is the stack?",
        "correctAnswer": ["memory region for local variables", "automatic memory allocation", "LIFO structure"],
        "explanation": "The stack is a memory region for local variables with automatic allocation and deallocation.",
        "xp": 5
    },
    {
        "id": "cpp-4-1-5",
        "type": "typing",
        "question": "What is the heap?",
        "correctAnswer": ["dynamic memory allocation region", "memory for manual allocation", "free store"],
        "explanation": "The heap is a memory region for dynamic allocation using new/delete.",
        "xp": 5
    },
    
    # Multiple choice (5 questions)
    {
        "id": "cpp-4-1-6",
        "type": "multiple",
        "question": "Where are local variables stored?",
        "options": ["Stack", "Heap", "Data segment", "Code segment"],
        "correctAnswer": [0],
        "explanation": "Local variables are stored on the stack.",
        "xp": 5
    },
    {
        "id": "cpp-4-1-7",
        "type": "multiple",
        "question": "What is the size of a pointer on a 64-bit system?",
        "options": ["8 bytes", "4 bytes", "2 bytes", "16 bytes"],
        "correctAnswer": [0],
        "explanation": "Pointers on 64-bit systems are 8 bytes (64 bits).",
        "xp": 5
    },
    {
        "id": "cpp-4-1-8",
        "type": "multiple",
        "question": "What happens to memory on the stack when a function returns?",
        "options": ["It's automatically freed", "It remains", "It becomes heap memory", "It needs manual deletion"],
        "correctAnswer": [0],
        "explanation": "Stack memory is automatically freed when the function returns.",
        "xp": 5
    },
    {
        "id": "cpp-4-1-9",
        "type": "multiple",
        "question": "Which is true about heap memory?",
        "options": ["Requires manual management", "Automatic allocation", "Faster than stack", "Limited size"],
        "correctAnswer": [0],
        "explanation": "Heap memory requires manual management with new/delete.",
        "xp": 5
    },
    {
        "id": "cpp-4-1-10",
        "type": "multiple",
        "question": "What is a null pointer?",
        "options": ["Pointer pointing to nothing", "Pointer to null value", "Zero pointer", "Invalid pointer"],
        "correctAnswer": [0],
        "explanation": "A null pointer is a pointer that doesn't point to any valid memory.",
        "xp": 5
    },
    
    # Code (15 questions)
    {
        "id": "cpp-4-1-11",
        "type": "code",
        "question": "Get the address of integer variable x and store it in pointer p.",
        "correctAnswer": ["int* p = &x;", "int *p = &x;"],
        "explanation": "Use & operator to get address: int* p = &x;",
        "xp": 15
    },
    {
        "id": "cpp-4-1-12",
        "type": "code",
        "question": "Declare a pointer to an integer.",
        "correctAnswer": ["int* p;", "int *p;"],
        "explanation": "Pointer declaration: type* name; or type *name;",
        "xp": 15
    },
    {
        "id": "cpp-4-1-13",
        "type": "code",
        "question": "Initialize a pointer to nullptr.",
        "correctAnswer": ["int* p = nullptr;", "int *p = nullptr;"],
        "explanation": "Initialize pointer with nullptr to ensure it doesn't point to invalid memory.",
        "xp": 15
    },
    {
        "id": "cpp-4-1-14",
        "type": "code",
        "question": "Access the value pointed to by pointer p.",
        "correctAnswer": ["*p", "int value = *p;"],
        "explanation": "Dereference pointer with * operator to get the value.",
        "xp": 15
    },
    {
        "id": "cpp-4-1-15",
        "type": "code",
        "question": "Modify the value through pointer p (set it to 42).",
        "correctAnswer": ["*p = 42;"],
        "explanation": "Dereference and assign: *p = 42;",
        "xp": 15
    },
    {
        "id": "cpp-4-1-16",
        "type": "code",
        "question": "Declare a pointer to double.",
        "correctAnswer": ["double* p;", "double *p;"],
        "explanation": "Pointer type must match the type it points to.",
        "xp": 15
    },
    {
        "id": "cpp-4-1-17",
        "type": "code",
        "question": "Print the address of variable x.",
        "correctAnswer": ["cout << &x;", "cout << (void*)&x;"],
        "explanation": "Use & operator to print address with cout.",
        "xp": 15
    },
    {
        "id": "cpp-4-1-18",
        "type": "code",
        "question": "Print the value pointed to by p.",
        "correctAnswer": ["cout << *p;"],
        "explanation": "Dereference pointer to print the value.",
        "xp": 15
    },
    {
        "id": "cpp-4-1-19",
        "type": "code",
        "question": "Allocate memory for an integer on the heap.",
        "correctAnswer": ["int* p = new int;", "int *p = new int;"],
        "explanation": "Use new to allocate heap memory.",
        "xp": 15
    },
    {
        "id": "cpp-4-1-20",
        "type": "code",
        "question": "Free heap memory pointed to by p.",
        "correctAnswer": ["delete p;"],
        "explanation": "Use delete to free heap memory allocated with new.",
        "xp": 15
    },
    {
        "id": "cpp-4-1-21",
        "type": "code",
        "question": "Declare and initialize pointer p to point to variable x.",
        "correctAnswer": ["int x = 5;\\nint* p = &x;", "int x = 5; int *p = &x;"],
        "explanation": "Initialize pointer with address of variable.",
        "xp": 15
    },
    {
        "id": "cpp-4-1-22",
        "type": "code",
        "question": "Check if pointer p is not null before dereferencing.",
        "correctAnswer": ["if (p != nullptr)", "if (p)", "if (p != nullptr) { *p = 10; }"],
        "explanation": "Always check for null before dereferencing to avoid crashes.",
        "xp": 15
    },
    {
        "id": "cpp-4-1-23",
        "type": "code",
        "question": "Allocate array of 10 integers on heap.",
        "correctAnswer": ["int* arr = new int[10];", "int *arr = new int[10];"],
        "explanation": "Use new[] for array allocation.",
        "xp": 15
    },
    {
        "id": "cpp-4-1-24",
        "type": "code",
        "question": "Delete array allocated with new[].",
        "correctAnswer": ["delete[] arr;"],
        "explanation": "Use delete[] for arrays allocated with new[].",
        "xp": 15
    },
    {
        "id": "cpp-4-1-25",
        "type": "code",
        "question": "Assign the address of one pointer to another pointer.",
        "correctAnswer": ["int* p2 = p;", "int *p2 = p;"],
        "explanation": "Pointers can be assigned, making them point to the same address.",
        "xp": 15
    }
]

lesson1 = {
    "id": 19,
    "title": "Memory Model Overview",
    "unitTitle": "4. Pointers and References",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Memory Model Overview

C++ gives you direct control over memory through pointers. Understanding how memory is organized is crucial for effective programming.

## Memory Layout

A running C++ program's memory is divided into regions:

1. **Code Segment** - Stores program instructions (read-only)
2. **Data Segment** - Global and static variables
3. **Stack** - Local variables, function call frames (automatic)
4. **Heap** - Dynamic memory allocation (manual)

## Memory Addresses

Every variable in memory has a unique address. In C++, addresses are represented as hexadecimal numbers.

```cpp
int x = 42;
cout << &x;  // Prints: 0x7fff1234abcd
```

## Pointers

A pointer is a variable that stores a memory address. The pointer type indicates what kind of data it points to.

```cpp
int x = 10;
int* p = &x;  // p holds address of x
```

**Declaration:** `type* pointerName;` or `type *pointerName;`

## Stack vs Heap

**Stack:**
- Automatic allocation/deallocation
- LIFO (Last In, First Out) structure
- Limited size
- Fast access
- Used for: local variables, function calls

**Heap:**
- Manual allocation with `new`/`malloc`
- Manual deallocation with `delete`/`free`
- Larger size
- Slightly slower
- Used for: dynamic data structures, large arrays

## Null Pointers

A null pointer doesn't point to valid memory. Use `nullptr` (C++11) to represent this.

```cpp
int* p = nullptr;  // p doesn't point anywhere
if (p != nullptr) {
    // Safe to use p
}
```

## Dynamic Memory Allocation

```cpp
// Allocate single value
int* p = new int(42);
delete p;

// Allocate array
int* arr = new int[10];
delete[] arr;  // Note the brackets
```

**Warning:** Forgetting to `delete` causes memory leaks!
""",
    "questions": lesson1_questions
}

data['units'][3]['lessons'][0].update(lesson1)
print("✅ Lesson 1: Memory Model Overview - 25 questions complete")

# ============================================================================
# LESSON 2: References vs Pointers
# ============================================================================
lesson2_questions = [
    # Type-in (5 questions)
    {
        "id": "cpp-4-2-1",
        "type": "typing",
        "question": "What is a reference?",
        "correctAnswer": ["alias for another variable", "alternative name for variable"],
        "explanation": "A reference is an alias (another name) for an existing variable.",
        "xp": 5
    },
    {
        "id": "cpp-4-2-2",
        "type": "typing",
        "question": "Can a reference be reseated to point to a different variable?",
        "correctAnswer": ["no", "cannot"],
        "explanation": "References cannot be reseated - they always refer to the same variable.",
        "xp": 5
    },
    {
        "id": "cpp-4-2-3",
        "type": "typing",
        "question": "What symbol declares a reference?",
        "correctAnswer": ["&", "ampersand"],
        "explanation": "The & symbol declares a reference: int& ref = x;",
        "xp": 5
    },
    {
        "id": "cpp-4-2-4",
        "type": "typing",
        "question": "What must happen when a reference is declared?",
        "correctAnswer": ["must be initialized", "initialized immediately"],
        "explanation": "References must be initialized when declared - they can't be null.",
        "xp": 5
    },
    {
        "id": "cpp-4-2-5",
        "type": "typing",
        "question": "What is the key difference between references and pointers?",
        "correctAnswer": ["references are aliases, pointers hold addresses", "references cannot be null"],
        "explanation": "References are aliases to existing variables, while pointers hold memory addresses.",
        "xp": 5
    },
    
    # Multiple choice (5 questions)
    {
        "id": "cpp-4-2-6",
        "type": "multiple",
        "question": "Which must be initialized at declaration?",
        "options": ["References", "Pointers", "Both", "Neither"],
        "correctAnswer": [0],
        "explanation": "References must be initialized when declared.",
        "xp": 5
    },
    {
        "id": "cpp-4-2-7",
        "type": "multiple",
        "question": "What does modifying a reference do?",
        "options": ["Modifies the referenced variable", "Modifies the reference itself", "Does nothing", "Creates a copy"],
        "correctAnswer": [0],
        "explanation": "Modifying a reference modifies the variable it refers to.",
        "xp": 5
    },
    {
        "id": "cpp-4-2-8",
        "type": "multiple",
        "question": "Can you have a null reference?",
        "options": ["No", "Yes", "Only with nullptr", "Only with special syntax"],
        "correctAnswer": [0],
        "explanation": "References cannot be null - they must always refer to a valid object.",
        "xp": 5
    },
    {
        "id": "cpp-4-2-9",
        "type": "multiple",
        "question": "Which is safer: reference or pointer?",
        "options": ["Reference", "Pointer", "Equally safe", "Depends on context"],
        "correctAnswer": [0],
        "explanation": "References are generally safer because they can't be null and can't be reseated.",
        "xp": 5
    },
    {
        "id": "cpp-4-2-10",
        "type": "multiple",
        "question": "What happens when you assign one reference to another?",
        "options": ["The referenced variable's value is copied", "The reference is reseated", "Nothing", "Compilation error"],
        "correctAnswer": [0],
        "explanation": "Assigning references copies the referenced value, it doesn't reseat the reference.",
        "xp": 5
    },
    
    # Code (15 questions)
    {
        "id": "cpp-4-2-11",
        "type": "code",
        "question": "Create a reference to integer variable x.",
        "correctAnswer": ["int& ref = x;", "int &ref = x;"],
        "explanation": "Reference declaration with & operator: int& ref = x;",
        "xp": 15
    },
    {
        "id": "cpp-4-2-12",
        "type": "code",
        "question": "Modify variable x through reference ref (set to 100).",
        "correctAnswer": ["ref = 100;"],
        "explanation": "Use reference like the original variable: ref = 100;",
        "xp": 15
    },
    {
        "id": "cpp-4-2-13",
        "type": "code",
        "question": "Declare a function that takes an int by reference.",
        "correctAnswer": ["void modify(int& x)", "void modify(int& x) { }"],
        "explanation": "Reference parameter: void func(type& param)",
        "xp": 15
    },
    {
        "id": "cpp-4-2-14",
        "type": "code",
        "question": "Return a reference from a function.",
        "correctAnswer": ["int& getRef() { return globalVar; }", "int& getRef() { return x; }"],
        "explanation": "Function can return reference: int& func() { return var; }",
        "xp": 15
    },
    {
        "id": "cpp-4-2-15",
        "type": "code",
        "question": "Create a const reference to int x.",
        "correctAnswer": ["const int& ref = x;"],
        "explanation": "const reference prevents modification: const type& ref = x;",
        "xp": 15
    },
    {
        "id": "cpp-4-2-16",
        "type": "code",
        "question": "Write a function that swaps two integers using references.",
        "correctAnswer": ["void swap(int& a, int& b) {\\n    int temp = a;\\n    a = b;\\n    b = temp;\\n}"],
        "explanation": "Reference parameters allow function to modify original values.",
        "xp": 15
    },
    {
        "id": "cpp-4-2-17",
        "type": "code",
        "question": "Create a reference to a double variable d.",
        "correctAnswer": ["double& ref = d;", "double &ref = d;"],
        "explanation": "Reference type must match the variable type.",
        "xp": 15
    },
    {
        "id": "cpp-4-2-18",
        "type": "code",
        "question": "Pass a string by const reference (efficient, no modification).",
        "correctAnswer": ["void print(const string& s)", "void print(const string& s) { }"],
        "explanation": "const reference avoids copying while preventing modification.",
        "xp": 15
    },
    {
        "id": "cpp-4-2-19",
        "type": "code",
        "question": "Initialize a reference with an existing pointer's value.",
        "correctAnswer": ["int& ref = *p;", "int &ref = *p;"],
        "explanation": "Dereference pointer to get value, then create reference.",
        "xp": 15
    },
    {
        "id": "cpp-4-2-20",
        "type": "code",
        "question": "Return reference to a global variable.",
        "correctAnswer": ["int& getGlobal() { return global; }"],
        "explanation": "Function can return reference to global variable.",
        "xp": 15
    },
    {
        "id": "cpp-4-2-21",
        "type": "code",
        "question": "Use a reference to modify array element.",
        "correctAnswer": ["int& element = arr[5];\\nelement = 10;", "int& ref = arr[i]; ref = value;"],
        "explanation": "Create reference to array element, then modify it.",
        "xp": 15
    },
    {
        "id": "cpp-4-2-22",
        "type": "code",
        "question": "Create a function that returns the larger of two references.",
        "correctAnswer": ["int& max(int& a, int& b) {\\n    return (a > b) ? a : b;\\n}"],
        "explanation": "Return reference to the larger value.",
        "xp": 15
    },
    {
        "id": "cpp-4-2-23",
        "type": "code",
        "question": "Use range-based for loop with reference to modify vector.",
        "correctAnswer": ["for (int& x : vec) { x *= 2; }"],
        "explanation": "Reference in range-based for allows modification.",
        "xp": 15
    },
    {
        "id": "cpp-4-2-24",
        "type": "code",
        "question": "Create a reference to pointer p (reference to pointer).",
        "correctAnswer": ["int*& ref = p;", "int *&ref = p;"],
        "explanation": "Reference to pointer: type*& ref = ptr;",
        "xp": 15
    },
    {
        "id": "cpp-4-2-25",
        "type": "code",
        "question": "Pass a vector by reference to a function.",
        "correctAnswer": ["void process(vector<int>& v)", "void process(vector<int>& v) { }"],
        "explanation": "Pass vector by reference to avoid copying.",
        "xp": 15
    }
]

lesson2 = {
    "id": 20,
    "title": "References vs Pointers",
    "unitTitle": "4. Pointers and References",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# References vs Pointers

Both references and pointers allow indirect access to variables, but they have important differences.

## References

A reference is an **alias** for an existing variable.

```cpp
int x = 10;
int& ref = x;  // ref is now an alias for x
ref = 20;      // This changes x to 20
```

**Key Characteristics:**
- Must be initialized when declared
- Cannot be null
- Cannot be reseated (always refers to same variable)
- No separate memory overhead
- Used with `&` in declaration

## Pointers

A pointer holds a **memory address**.

```cpp
int x = 10;
int* p = &x;    // p holds address of x
*p = 20;        // Dereference to modify x
p = nullptr;    // p can be reseated
```

**Key Characteristics:**
- Can be uninitialized (dangerous)
- Can be null (`nullptr`)
- Can be reseated to point elsewhere
- Has its own memory address
- Used with `*` in declaration

## Comparison

| Feature | Reference | Pointer |
|---------|-----------|---------|
| Initialization | Required | Optional |
| Can be null | No | Yes |
| Can be reseated | No | Yes |
| Memory overhead | None | Size of address |
| Syntax | `&` in declaration | `*` in declaration |
| Dereference | Implicit (just use name) | Explicit (`*ptr`) |

## When to Use References

✅ **Use references when:**
- Passing large objects to functions (avoid copy)
- Function needs to modify parameters
- Working with operators
- Return values that can be modified

```cpp
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}
```

## When to Use Pointers

✅ **Use pointers when:**
- Need optional values (can be null)
- Need to change what's pointed to (reseat)
- Working with arrays
- Dynamic memory allocation
- Implementing data structures

```cpp
int* p = nullptr;  // Optional value
p = new int(42);   // Can reseat
delete p;          // Manual management
```

## Reference Parameters

Pass by reference allows functions to modify original values:

```cpp
void increment(int& x) {
    x++;  // Modifies caller's variable
}

int num = 5;
increment(num);  // num is now 6
```

## Const References

`const` reference prevents modification while avoiding copy:

```cpp
void print(const string& s) {
    cout << s;  // Can read but not modify s
}
```

**Best Practice:** Use `const T&` for large objects you don't need to modify.
""",
    "questions": lesson2_questions
}

data['units'][3]['lessons'][1].update(lesson2)
print("✅ Lesson 2: References vs Pointers - 25 questions complete")

# Write progress
print(f"\n📊 Progress: 2 of 6 lessons complete ({50} of 150 questions)")
print(f"   - Code questions: {30} (60%)")
print(f"   - Type-in questions: {10} (20%)")
print(f"   - Multiple choice: {10} (20%)")

# Write to file
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n')
    f.write('// Generated from C++ outline\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n✅ Written to questions/cppCombined.js")
print("\n🔄 Continue with Lessons 3-6...")