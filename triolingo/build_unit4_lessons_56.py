#!/usr/bin/env python3
"""
Build Unit 4 Lessons 5-6: nullptr and Null Safety, Pointer Pitfalls
"""
import json

print("🚀 Building C++ Unit 4 Lessons 5-6...")
print("=" * 60)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 5: nullptr and Null Safety
# ============================================================================
lesson5_questions = [
    # Type-in (5 questions)
    {
        "id": "cpp-4-5-1",
        "type": "typing",
        "question": "What is nullptr?",
        "correctAnswer": ["C++ null pointer value", "null pointer literal"],
        "explanation": "nullptr is a null pointer literal introduced in C++11, representing a pointer that points to nothing.",
        "xp": 5
    },
    {
        "id": "cpp-4-5-2",
        "type": "typing",
        "question": "What happens if you dereference a null pointer?",
        "correctAnswer": ["crash", "segmentation fault", "undefined behavior"],
        "explanation": "Dereferencing a null pointer causes undefined behavior, typically a crash.",
        "xp": 5
    },
    {
        "id": "cpp-4-5-3",
        "type": "typing",
        "question": "How do you check if a pointer is null?",
        "correctAnswer": ["if (p == nullptr)", "if (!p)", "if (p == nullptr)"],
        "explanation": "Check if pointer equals nullptr before using it.",
        "xp": 5
    },
    {
        "id": "cpp-4-5-4",
        "type": "typing",
        "question": "Why is nullptr preferred over NULL or 0?",
        "correctAnswer": ["type safe", "better type checking"],
        "explanation": "nullptr is type-safe and avoids overload resolution issues.",
        "xp": 5
    },
    {
        "id": "cpp-4-5-5",
        "type": "typing",
        "question": "What is the ternary operator?",
        "correctAnswer": ["conditional operator", "?: operator"],
        "explanation": "The ternary operator (?:) is a conditional expression: condition ? value1 : value2",
        "xp": 5
    },
    
    # Multiple choice (5 questions)
    {
        "id": "cpp-4-5-6",
        "type": "multiple",
        "question": "What does nullptr evaluate to in boolean context?",
        "options": ["false", "true", "error", "depends"],
        "correctAnswer": [0],
        "explanation": "nullptr evaluates to false in boolean context.",
        "xp": 5
    },
    {
        "id": "cpp-4-5-7",
        "type": "multiple",
        "question": "What is wrong with this: int* p = NULL;",
        "options": ["NULL is not type-safe", "Nothing", "Should be 0", "Need to allocate"],
        "correctAnswer": [0],
        "explanation": "NULL is a macro, nullptr is type-safe and preferred in C++11+.",
        "xp": 5
    },
    {
        "id": "cpp-4-5-8",
        "type": "multiple",
        "question": "What is the ternary operator syntax?",
        "options": ["condition ? expr1 : expr2", "condition : expr1 ? expr2", "if ? then : else", "condition then : else"],
        "correctAnswer": [0],
        "explanation": "Ternary operator: condition ? expr_if_true : expr_if_false",
        "xp": 5
    },
    {
        "id": "cpp-4-5-9",
        "type": "multiple",
        "question": "What is dangling pointer?",
        "options": ["Pointer to freed memory", "Null pointer", "Uninitialized pointer", "Const pointer"],
        "correctAnswer": [0],
        "explanation": "A dangling pointer points to memory that has been freed or gone out of scope.",
        "xp": 5
    },
    {
        "id": "cpp-4-5-10",
        "type": "multiple",
        "question": "What is memory leak?",
        "options": ["Allocated memory not freed", "Null pointer", "Stack overflow", "Segmentation fault"],
        "correctAnswer": [0],
        "explanation": "Memory leak occurs when allocated memory is not freed.",
        "xp": 5
    },
    
    # Code (15 questions)
    {
        "id": "cpp-4-5-11",
        "type": "code",
        "question": "Initialize a pointer to nullptr.",
        "correctAnswer": ["int* p = nullptr;", "int *p = nullptr;"],
        "explanation": "Always initialize pointers to nullptr to avoid undefined behavior.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-12",
        "type": "code",
        "question": "Check if pointer p is not null before dereferencing.",
        "correctAnswer": ["if (p != nullptr)", "if (p)", "if (p != nullptr) { *p = 10; }"],
        "explanation": "Always check for nullptr before dereferencing.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-13",
        "type": "code",
        "question": "Use ternary operator to return pointer or nullptr.",
        "correctAnswer": ["return (valid) ? p : nullptr;", "return valid ? p : nullptr;"],
        "explanation": "Ternary: condition ? value_if_true : value_if_false",
        "xp": 15
    },
    {
        "id": "cpp-4-5-14",
        "type": "code",
        "question": "Safely delete a pointer if not null.",
        "correctAnswer": ["if (p != nullptr) { delete p; p = nullptr; }", "delete p; p = nullptr;"],
        "explanation": "Check for nullptr, delete, then set to nullptr.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-15",
        "type": "code",
        "question": "Pass pointer that can be null (optional parameter).",
        "correctAnswer": ["void func(int* p = nullptr)", "void func(int* p = nullptr) { }"],
        "explanation": "nullptr default allows optional pointer parameter.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-16",
        "type": "code",
        "question": "Return null pointer from function if condition fails.",
        "correctAnswer": ["if (error) return nullptr;", "return nullptr;"],
        "explanation": "Return nullptr to indicate failure or no value.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-17",
        "type": "code",
        "question": "Set pointer to null after deleting.",
        "correctAnswer": ["delete p; p = nullptr;", "delete[] arr; arr = nullptr;"],
        "explanation": "Set pointer to nullptr after deletion to avoid dangling pointer.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-18",
        "type": "code",
        "question": "Use ternary to assign value based on condition.",
        "correctAnswer": ["int x = (a > b) ? a : b;", "int x = a > b ? a : b;"],
        "explanation": "Ternary operator for conditional assignment.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-19",
        "type": "code",
        "question": "Check pointer validity before use in function.",
        "correctAnswer": ["if (p == nullptr) return error;", "if (!p) return;"],
        "explanation": "Check for nullptr at start of function.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-20",
        "type": "code",
        "question": "Create function that returns pointer or nullptr.",
        "correctAnswer": ["int* find(int key) {\\n    if (found) return &item;\\n    return nullptr;\\n}"],
        "explanation": "Return nullptr when item not found.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-21",
        "type": "code",
        "question": "Initialize all pointers in an array to nullptr.",
        "correctAnswer": ["int* arr[5] = {nullptr, nullptr, nullptr, nullptr, nullptr};", "int* arr[5] = {};"],
        "explanation": "Initialize array of pointers to nullptr.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-22",
        "type": "code",
        "question": "Use ternary in return statement.",
        "correctAnswer": ["return (x > 0) ? &x : nullptr;", "return x > 0 ? &x : nullptr;"],
        "explanation": "Ternary can be used in return statements.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-23",
        "type": "code",
        "question": "Check multiple pointers for null before using.",
        "correctAnswer": ["if (p1 && p2 && p3)", "if (p1 != nullptr && p2 != nullptr)"],
        "explanation": "Check all pointers are valid before using.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-24",
        "type": "code",
        "question": "Reset pointer to nullptr after processing.",
        "correctAnswer": ["p = nullptr;"],
        "explanation": "Set pointer to nullptr to clear it.",
        "xp": 15
    },
    {
        "id": "cpp-4-5-25",
        "type": "code",
        "question": "Use nullptr in comparison with pointer.",
        "correctAnswer": ["if (p == nullptr)", "if (p != nullptr)", "p == nullptr"],
        "explanation": "Compare pointer with nullptr to check validity.",
        "xp": 15
    }
]

lesson5 = {
    "id": 23,
    "title": "nullptr and Null Safety",
    "unitTitle": "4. Pointers and References",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# nullptr and Null Safety

Null safety is crucial when working with pointers. A null pointer doesn't point to valid memory and dereferencing it causes crashes.

## nullptr (C++11)

`nullptr` is a null pointer literal, representing a pointer that points to nothing.

```cpp
int* p = nullptr;  // Modern C++ style
int* p = NULL;     // Old style (macro)
int* p = 0;        // Older style
```

**Why nullptr?**
- Type-safe (has its own type: `std::nullptr_t`)
- Better overload resolution
- Clearer intent
- No ambiguity with integers

## Checking for Null

Always check before dereferencing:

```cpp
int* p = nullptr;
// ... some code that may or may not set p ...

if (p != nullptr) {  // Check for null
    *p = 10;         // Safe to dereference
}
```

**Boolean context:**
```cpp
if (p) {        // true if p is not nullptr
    // Safe to use
}

if (!p) {       // true if p is nullptr
    // Pointer is null
}
```

## Ternary Operator

The ternary operator `?:` is useful for conditional expressions:

```cpp
// Syntax: condition ? expr_if_true : expr_if_false

int max = (a > b) ? a : b;

// With pointers:
int* p = (isValid) ? &value : nullptr;
```

**Common patterns:**
```cpp
// Conditional return
return (found) ? &item : nullptr;

// Conditional assignment
int* p = (ptr1 != nullptr) ? ptr1 : ptr2;
```

## Null Safety Best Practices

### 1. Always Initialize

```cpp
int* p = nullptr;  // ✅ Good
int* p;            // ❌ Bad - uninitialized
```

### 2. Always Check Before Use

```cpp
void process(int* p) {
    if (p == nullptr) {  // Check at start
        return;  // Handle null case
    }
    *p = 10;  // Safe to use
}
```

### 3. Reset After Deletion

```cpp
delete p;
p = nullptr;  // Prevent dangling pointer
```

### 4. Use nullptr for Optional Parameters

```cpp
void configure(int* p = nullptr) {
    if (p != nullptr) {
        *p = 10;
    }
    // Works with or without parameter
}
```

## Common Pointer Problems

### Dangling Pointer

```cpp
int* p = new int(10);
delete p;
*p = 20;  // ❌ Undefined behavior - dangling pointer!

// Fix:
delete p;
p = nullptr;  // ✅ Reset to prevent use
```

### Memory Leak

```cpp
void leak() {
    int* p = new int(10);
    // ❌ Forgot delete - memory leak!
}

// Fix:
void noLeak() {
    int* p = new int(10);
    delete p;  // ✅ Free memory
}
```

### Double Deletion

```cpp
int* p = new int(10);
delete p;
delete p;  // ❌ Undefined behavior!

// Fix:
delete p;
p = nullptr;  // ✅ Safe to delete nullptr
```

## Null Pointer vs nullptr

| Feature | nullptr | NULL |
|---------|----------|------|
| Type | `std::nullptr_t` | Macro (usually 0) |
| Type-safe | ✅ Yes | ❌ No |
| Overload resolution | ✅ Works | ❌ Issues |
| C++ Standard | C++11+ | Pre-C++11 |

## Summary

✅ **Always:**
- Initialize pointers to nullptr
- Check for nullptr before dereferencing
- Reset to nullptr after deletion
- Use nullptr (not NULL or 0)

❌ **Never:**
- Dereference without checking
- Use uninitialized pointers
- Forget to delete allocated memory
- Delete the same pointer twice
""",
    "questions": lesson5_questions
}

data['units'][3]['lessons'][4].update(lesson5)
print("✅ Lesson 5: nullptr and Null Safety - 25 questions complete")

# ============================================================================
# LESSON 6: Pointer Pitfalls
# ============================================================================
lesson6_questions = [
    # Type-in (5 questions)
    {
        "id": "cpp-4-6-1",
        "type": "typing",
        "question": "What is a dangling pointer?",
        "correctAnswer": ["pointer to freed memory", "pointer to invalid memory"],
        "explanation": "A dangling pointer points to memory that has been freed or gone out of scope.",
        "xp": 5
    },
    {
        "id": "cpp-4-6-2",
        "type": "typing",
        "question": "What causes memory leak?",
        "correctAnswer": ["forgetting to delete allocated memory", "not freeing heap memory"],
        "explanation": "Memory leaks occur when heap memory allocated with new is not freed with delete.",
        "xp": 5
    },
    {
        "id": "cpp-4-6-3",
        "type": "typing",
        "question": "What is double deletion?",
        "correctAnswer": ["deleting the same memory twice", "calling delete twice on same pointer"],
        "explanation": "Double deletion is calling delete twice on the same memory, causing undefined behavior.",
        "xp": 5
    },
    {
        "id": "cpp-4-6-4",
        "type": "typing",
        "question": "What is array-to-pointer decay?",
        "correctAnswer": ["array name becomes pointer to first element", "implicit conversion"],
        "explanation": "Arrays decay to pointers when passed to functions, losing size information.",
        "xp": 5
    },
    {
        "id": "cpp-4-6-5",
        "type": "typing",
        "question": "What is the rule of three?",
        "correctAnswer": ["destructor, copy constructor, copy assignment", "manage resources properly"],
        "explanation": "If you need any of destructor, copy constructor, or copy assignment, you need all three.",
        "xp": 5
    },
    
    # Multiple choice (5 questions)
    {
        "id": "cpp-4-6-6",
        "type": "multiple",
        "question": "Which is safer: stack or heap allocation?",
        "options": ["Stack", "Heap", "Equally safe", "Depends on usage"],
        "correctAnswer": [0],
        "explanation": "Stack allocation is safer because it's automatically managed.",
        "xp": 5
    },
    {
        "id": "cpp-4-6-7",
        "type": "multiple",
        "question": "What happens when you return pointer to local variable?",
        "options": ["Dangling pointer", "Works fine", "Compilation error", "Copy is made"],
        "correctAnswer": [0],
        "explanation": "Returning pointer to local variable creates dangling pointer.",
        "xp": 5
    },
    {
        "id": "cpp-4-6-8",
        "type": "multiple",
        "question": "What is the best way to avoid memory leaks?",
        "options": ["Use smart pointers", "Manual delete", "Always use stack", "Ignore them"],
        "correctAnswer": [0],
        "explanation": "Smart pointers automatically manage memory and prevent leaks.",
        "xp": 5
    },
    {
        "id": "cpp-4-6-9",
        "type": "multiple",
        "question": "What does delete[] do?",
        "options": ["Deletes array", "Deletes single value", "Does nothing", "Compiles to same"],
        "correctAnswer": [0],
        "explanation": "delete[] is for arrays allocated with new[], must match allocation.",
        "xp": 5
    },
    {
        "id": "cpp-4-6-10",
        "type": "multiple",
        "question": "Why prefer references over pointers?",
        "options": ["Safer, clearer, no null", "Always use pointers", "No difference", "References slower"],
        "correctAnswer": [0],
        "explanation": "References are safer (can't be null), clearer, and have no overhead.",
        "xp": 5
    },
    
    # Code (15 questions)
    {
        "id": "cpp-4-6-11",
        "type": "code",
        "question": "Fix memory leak by adding delete.",
        "correctAnswer": ["int* p = new int(10);\\n// use p\\ndelete p;"],
        "explanation": "Always delete memory allocated with new.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-12",
        "type": "code",
        "question": "Prevent dangling pointer after deletion.",
        "correctAnswer": ["delete p; p = nullptr;"],
        "explanation": "Set pointer to nullptr after deletion.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-13",
        "type": "code",
        "question": "Safely delete pointer (check first).",
        "correctAnswer": ["if (p != nullptr) { delete p; p = nullptr; }"],
        "explanation": "Check for nullptr before deleting.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-14",
        "type": "code",
        "question": "Use delete[] for array deletion.",
        "correctAnswer": ["delete[] arr;"],
        "explanation": "Use delete[] for arrays allocated with new[].",
        "xp": 15
    },
    {
        "id": "cpp-4-6-15",
        "type": "code",
        "question": "Avoid returning pointer to local variable.",
        "correctAnswer": ["return &value;", "int* getP() { static int x = 10; return &x; }"],
        "explanation": "Return pointer to static or heap, not stack local.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-16",
        "type": "code",
        "question": "Pass array with size to function.",
        "correctAnswer": ["void func(int* arr, int size)", "void func(int arr[], int size)"],
        "explanation": "Pass size separately since arrays decay to pointers.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-17",
        "type": "code",
        "question": "Use smart pointer instead of raw pointer.",
        "correctAnswer": ["unique_ptr<int> p = make_unique<int>(10);", "shared_ptr<int> p = make_shared<int>(10);"],
        "explanation": "Smart pointers automatically manage memory.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-18",
        "type": "code",
        "question": "Prevent double deletion in function.",
        "correctAnswer": ["delete p; p = nullptr;"],
        "explanation": "Set to nullptr after delete to prevent double delete.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-19",
        "type": "code",
        "question": "Check bounds before array access.",
        "correctAnswer": ["if (index >= 0 && index < size) { arr[index] = value; }"],
        "explanation": "Always check array bounds before access.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-20",
        "type": "code",
        "question": "Initialize pointer in member initialization list.",
        "correctAnswer": ["Class::Class() : p(new int(10)) {}", "Class::Class() : p(nullptr) {}"],
        "explanation": "Initialize member pointer in constructor.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-21",
        "type": "code",
        "question": "Delete member pointer in destructor.",
        "correctAnswer": ["~Class() { delete p; }", "~Class() { delete[] arr; }"],
        "explanation": "Always release resources in destructor.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-22",
        "type": "code",
        "question": "Implement copy constructor to manage pointer.",
        "correctAnswer": ["Class::Class(const Class& other) : p(new int(*other.p)) {}"],
        "explanation": "Deep copy pointer in copy constructor.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-23",
        "type": "code",
        "question": "Implement copy assignment to manage pointer.",
        "correctAnswer": ["Class& Class::operator=(const Class& other) {\\n    if (this != &other) {\\n        delete p;\\n        p = new int(*other.p);\\n    }\\n    return *this;\\n}"],
        "explanation": "Handle self-assignment and deep copy in assignment.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-24",
        "type": "code",
        "question": "Use vector instead of array for safety.",
        "correctAnswer": ["vector<int> vec = {1, 2, 3};", "vector<int> vec(10);"],
        "explanation": "vector manages memory automatically and is safer.",
        "xp": 15
    },
    {
        "id": "cpp-4-6-25",
        "type": "code",
        "question": "Prefer reference over pointer when possible.",
        "correctAnswer": ["void func(int& x)", "void func(const string& s)"],
        "explanation": "Use reference instead of pointer when null is not needed.",
        "xp": 15
    }
]

lesson6 = {
    "id": 24,
    "title": "Pointer Pitfalls",
    "unitTitle": "4. Pointers and References",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Pointer Pitfalls

Pointers are powerful but dangerous. Understanding common pitfalls helps write safer code.

## 1. Dangling Pointers

**Problem:** Pointer points to freed/invalid memory.

```cpp
int* p = new int(10);
delete p;
*p = 20;  // ❌ Undefined behavior!
```

**Solution:** Reset after deletion.

```cpp
delete p;
p = nullptr;  // ✅ Safe
```

## 2. Memory Leaks

**Problem:** Forget to free allocated memory.

```cpp
void leak() {
    int* p = new int(10);
    // ❌ Memory never freed!
}
```

**Solution:** Always pair new with delete.

```cpp
void noLeak() {
    int* p = new int(10);
    delete p;  // ✅ Freed
}
```

**Better Solution:** Use smart pointers.

```cpp
void autoManaged() {
    auto p = make_unique<int>(10);
    // ✅ Automatically freed
}
```

## 3. Double Deletion

**Problem:** Deleting the same memory twice.

```cpp
int* p = new int(10);
int* q = p;
delete p;
delete q;  // ❌ Undefined behavior!
```

**Solution:** Set to nullptr after delete.

```cpp
delete p;
p = nullptr;
delete p;  // ✅ Safe (deleting nullptr is OK)
```

## 4. Returning Pointer to Local

**Problem:** Returning address of stack variable.

```cpp
int* bad() {
    int x = 10;
    return &x;  // ❌ Dangling pointer!
}
```

**Solutions:**

```cpp
// Option 1: Return by value
int good() {
    int x = 10;
    return x;  // ✅ Copy
}

// Option 2: Use static
int* better() {
    static int x = 10;
    return &x;  // ✅ Static lifetime
}

// Option 3: Allocate on heap
int* best() {
    return new int(10);  // ✅ But caller must delete!
}
```

## 5. Array-to-Pointer Decay

**Problem:** Arrays lose size when passed to functions.

```cpp
void print(int arr[]) {  // Same as int* arr
    // ❌ Cannot get size!
}
```

**Solution:** Pass size separately.

```cpp
void print(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i];
    }
}

// Better: Use vector
void print(const vector<int>& v) {
    for (int x : v) {
        cout << x;
    }
}
```

## 6. Incorrect delete/delete[] Mismatch

**Problem:** Using wrong delete operator.

```cpp
int* single = new int;
delete[] single;  // ❌ Undefined behavior!

int* array = new int[10];
delete array;     // ❌ Undefined behavior!
```

**Solution:** Match allocation with correct deletion.

```cpp
int* single = new int;
delete single;    // ✅ Correct

int* array = new int[10];
delete[] array;   // ✅ Correct
```

## 7. The Rule of Three

If your class manages a resource (like a raw pointer), you need all three:

```cpp
class Buffer {
private:
    int* data;
    int size;
public:
    // 1. Destructor
    ~Buffer() {
        delete[] data;
    }
    
    // 2. Copy constructor
    Buffer(const Buffer& other) 
        : size(other.size) {
        data = new int[size];
        copy(other.data, other.data + size, data);
    }
    
    // 3. Copy assignment
    Buffer& operator=(const Buffer& other) {
        if (this != &other) {
            delete[] data;
            size = other.size;
            data = new int[size];
            copy(other.data, other.data + size, data);
        }
        return *this;
    }
};
```

## 8. Stack Overflow from Large Arrays

**Problem:** Large arrays on stack cause overflow.

```cpp
int huge[1000000];  // ❌ May cause stack overflow
```

**Solution:** Use heap or vector.

```cpp
vector<int> huge(1000000);  // ✅ Heap allocated

int* huge = new int[1000000];  // ✅ Heap allocated
delete[] huge;
```

## Best Practices

✅ **DO:**
- Initialize pointers to nullptr
- Always check before dereferencing
- Pair new with delete
- Use smart pointers when possible
- Prefer vector over arrays
- Follow the Rule of Three/Zero

❌ **DON'T:**
- Dereference null or uninitialized pointers
- Forget to delete heap memory
- Mix delete and delete[]
- Return pointers to locals
- Use raw pointers when smart pointers work
- Assume array size is preserved

## Smart Pointers to the Rescue

Modern C++ recommends smart pointers:

```cpp
#include <memory>

// unique_ptr: Exclusive ownership
auto p1 = make_unique<int>(10);

// shared_ptr: Shared ownership
auto p2 = make_shared<int>(10);
auto p3 = p2;  // Both point to same memory

// weak_ptr: Prevent cycles
weak_ptr<int> p4(p2);
```

**Benefits:**
- Automatic memory management
- No memory leaks
- Exception-safe
- Clear ownership semantics
""",
    "questions": lesson6_questions
}

data['units'][3]['lessons'][5].update(lesson6)
print("✅ Lesson 6: Pointer Pitfalls - 25 questions complete")

# Write progress
print(f"\n📊 Progress: 6 of 6 lessons complete ({150} of 150 questions)")
print(f"   - Code questions: {90} (60%)")
print(f"   - Type-in questions: {30} (20%)")
print(f"   - Multiple choice: {30} (20%)")

# Write to file
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n')
    f.write('// Generated from C++ outline\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n✅ Written to questions/cppCombined.js")
print("\n🎉 Unit 4 Complete! All 6 lessons with 25 questions each (150 total)")
print("\n📋 Unit 4 Lessons:")
print("   1. Memory Model Overview - 25 questions")
print("   2. References vs Pointers - 25 questions")
print("   3. Pointer Arithmetic - 25 questions")
print("   4. const Correctness - 25 questions")
print("   5. nullptr and Null Safety - 25 questions")
print("   6. Pointer Pitfalls - 25 questions")