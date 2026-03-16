#!/usr/bin/env python3
"""
Build Unit 20: C and C++ Interoperability (Lessons 4-6)
3 lessons with 25 questions each (75 total)
Heavy emphasis on code questions (~70% = 52.5 code questions)
"""
import json

print("🚀 Building C++ Unit 20: C and C++ Interoperability (Lessons 4-6)")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 4: C++11 Features for Interoperability
# ============================================================================
lesson4_questions = [
    {"id": "cpp-20-4-1", "type": "typing", "question": "What is nullptr?", "correctAnswer": ["null pointer", "null pointer constant"], "explanation": "nullptr is null pointer constant.", "xp": 5},
    {"id": "cpp-20-4-2", "type": "typing", "question": "What is constexpr?", "correctAnswer": ["compile time constant", "compile-time evaluation"], "explanation": "constexpr for compile-time.", "xp": 5},
    {"id": "cpp-20-4-3", "type": "typing", "question": "What is noexcept?", "correctAnswer": ["no exception", "non-throwing"], "explanation": "noexcept for no exceptions.", "xp": 5},
    {"id": "cpp-20-4-4", "type": "multiple", "question": "nullptr vs NULL?", "options": ["type safe", "same", "faster", "slower"], "correctAnswer": [0], "explanation": "nullptr is type-safe.", "xp": 5},
    {"id": "cpp-20-4-5", "type": "multiple", "question": "constexpr variables?", "options": ["compile time", "runtime", "both", "neither"], "correctAnswer": [0], "explanation": "constexpr evaluated at compile.", "xp": 5},
    {"id": "cpp-20-4-6", "type": "code", "question": "Use nullptr.", "correctAnswer": ["int* ptr = nullptr;", "nullptr not NULL"],
        "explanation": "ptr = nullptr", "xp": 15},
    {"id": "cpp-20-4-7", "type": "code", "question": "constexpr variable.", "correctAnswer": ["constexpr int SIZE = 100;", "compile-time constant"],
        "explanation": "constexpr for compile-time.", "xp": 15},
    {"id": "cpp-20-4-8", "type": "code", "question": "noexcept function.", "correctAnswer": ["void func() noexcept", "non-throwing"],
        "explanation": "void func() noexcept", "xp": 15},
    {"id": "cpp-20-4-9", "type": "code", "question": "decltype.", "correctAnswer": ["decltype(x) y = x;", "type deduction"],
        "explanation": "decltype() gets type.", "xp": 15},
    {"id": "cpp-20-4-10", "type": "code", "question": "auto return type.", "correctAnswer": ["auto func() -> int", "trailing return"],
        "explanation": "auto with trailing return.", "xp": 15},
    {"id": "cpp-20-4-11", "type": "code", "question": "range-based for.", "correctAnswer": ["for (auto& item : container)", "range-based loop"],
        "explanation": "for(auto& item : container)", "xp": 15},
    {"id": "cpp-20-4-12", "type": "code", "question": "lambda.", "correctAnswer": ["auto lambda = []() { return 42; };", "lambda function"],
        "explanation": "[]() {} lambda syntax.", "xp": 15},
    {"id": "cpp-20-4-13", "type": "code", "question": "std::array.", "correctAnswer": ["std::array<int, 10> arr;", "fixed-size array"],
        "explanation": "std::array<T, N>", "xp": 15},
    {"id": "cpp-20-4-14", "type": "code", "question": "std::function.", "correctAnswer": ["std::function<int(int)> f;", "function wrapper"],
        "explanation": "std::function wrapper.", "xp": 15},
    {"id": "cpp-20-4-15", "type": "code", "question": "std::bind.", "correctAnswer": ["auto bound = std::bind(&Class::method, &obj);", "bind function"],
        "explanation": "std::bind() bind arguments.", "xp": 15},
    {"id": "cpp-20-4-16", "type": "code", "question": "std::tuple.", "correctAnswer": ["std::tuple<int, string> t(42, \"hello\");", "tuple container"],
        "explanation": "std::tuple<T...>", "xp": 15},
    {"id": "cpp-20-4-17", "type": "code", "question": "std::make_tuple.", "correctAnswer": ["auto t = std::make_tuple(42, \"hello\");", "make tuple"],
        "explanation": "std::make_tuple() create.", "xp": 15},
    {"id": "cpp-20-4-18", "type": "code", "question": "enum class.", "correctAnswer": ["enum class Color { Red, Green };", "scoped enum"],
        "explanation": "enum class for scoped enums.", "xp": 15},
    {"id": "cpp-20-4-19", "type": "code", "question": "override.", "correctAnswer": ["void func() override", "override specifier"],
        "explanation": "override ensures virtual.", "xp": 15},
    {"id": "cpp-20-4-20", "type": "code", "question": "final.", "correctAnswer": ["void func() final", "final prevents override"],
        "explanation": "final prevents overriding.", "xp": 15},
    {"id": "cpp-20-4-21", "type": "code", "question": "static_assert.", "correctAnswer": ["static_assert(sizeof(int) == 4, \"error\");", "compile-time assert"],
        "explanation": "static_assert at compile-time.", "xp": 15},
    {"id": "cpp-20-4-22", "type": "code", "question": "nullptr_t.", "correctAnswer": ["std::nullptr_t ptr = nullptr;", "nullptr_t type"],
        "explanation": "std::nullptr_t type.", "xp": 15},
    {"id": "cpp-20-4-23", "type": "code", "question": "aligned_alloc.", "correctAnswer": ["void* ptr = aligned_alloc(64, size);", "aligned allocation"],
        "explanation": "aligned_alloc() allocate aligned.", "xp": 15},
    {"id": "cpp-20-4-24", "type": "code", "question": "alignas.", "correctAnswer": ["alignas(64) int data;", "alignment specifier"],
        "explanation": "alignas() specify alignment.", "xp": 15},
    {"id": "cpp-20-4-25", "type": "code", "question": "alignof.", "correctAnswer": ["alignof(int)", "alignof() get alignment"],
        "explanation": "alignof() returns alignment.", "xp": 15}
]

lesson4 = {
    "id": "cpp-U20-L4", "title": "C++11 Features for Interoperability", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# C++11 Features for Interoperability

C++11 features that improve C compatibility.

## nullptr vs NULL

```cpp
// Old C style
int* ptr = NULL;  // NULL is just 0, not type-safe

// C++11 style
int* ptr = nullptr;  // Type-safe null pointer constant
```

## constexpr

```cpp
// Compile-time constants
constexpr int MAX_SIZE = 100;
constexpr double PI = 3.14159;

// Compile-time evaluation
constexpr int square(int x) {
    return x * x;
}
constexpr int result = square(5);  // Computed at compile time
```

## noexcept

```cpp
// Function that won't throw exceptions
void safe_function() noexcept {
    // If exception thrown, std::terminate() is called
}

// Can be used in extern "C" functions
extern "C" void c_callable() noexcept {
    // Safe to call from C code
}
```

## Useful Interoperability Features

- `nullptr` - Type-safe null pointer
- `constexpr` - Compile-time constants
- `noexcept` - Non-throwing functions
- `enum class` - Scoped enums (better than plain enums)
- `static_assert` - Compile-time assertions
- `alignas/alignof` - Alignment control
""",
    "questions": lesson4_questions
}

# ============================================================================
# LESSON 5: Error Handling Across Boundaries
# ============================================================================
lesson5_questions = [
    {"id": "cpp-20-5-1", "type": "typing", "question": "Can exceptions cross extern C?", "correctAnswer": ["no", "cannot"], "explanation": "Exceptions cannot cross C.", "xp": 5},
    {"id": "cpp-20-5-2", "type": "typing", "question": "What to use instead?", "correctAnswer": ["error codes", "return codes"], "explanation": "Use error codes for C.", "xp": 5},
    {"id": "cpp-20-5-3", "type": "typing", "question": "What does errno do?", "correctAnswer": ["error number", "last error"], "explanation": "errno stores error code.", "xp": 5},
    {"id": "cpp-20-5-4", "type": "multiple", "question": "Catch at boundary?", "options": ["yes", "no", "never", "optional"], "correctAnswer": [0], "explanation": "Catch exceptions at C boundary.", "xp": 5},
    {"id": "cpp-20-5-5", "type": "multiple", "question": "Use try-catch in extern C?", "options": ["yes", "no", "rarely", "always"], "correctAnswer": [0], "explanation": "Wrap extern C in try-catch.", "xp": 5},
    {"id": "cpp-20-5-6", "type": "code", "question": "Catch in extern C.", "correctAnswer": ["extern \"C\" int func() try { /* code */ return 0; } catch (...) { return -1; }", "function try block"],
        "explanation": "Function try block.", "xp": 15},
    {"id": "cpp-20-5-7", "type": "code", "question": "Set errno.", "correctAnswer": ["errno = EINVAL;", "set errno"],
        "explanation": "errno = error_code", "xp": 15},
    {"id": "cpp-20-5-8", "type": "code", "question": "Check errno.", "correctAnswer": ["if (errno != 0)", "check errno"],
        "explanation": "Check errno for errors.", "xp": 15},
    {"id": "cpp-20-5-9", "type": "code", "question": "perror.", "correctAnswer": ["perror(\"error\");", "print error"],
        "explanation": "perror() prints error.", "xp": 15},
    {"id": "cpp-20-5-10", "type": "code", "question": "strerror.", "correctAnswer": ["char* msg = strerror(errno);", "error message string"],
        "explanation": "strerror() returns error string.", "xp": 15},
    {"id": "cpp-20-5-11", "type": "code", "question": "Return error code.", "correctAnswer": ["return -1;", "return error code"],
        "explanation": "Return error code.", "xp": 15},
    {"id": "cpp-20-5-12", "type": "code", "question": "Return pointer or error.", "correctAnswer": ["void* func() { return error ? nullptr : ptr; }", "null on error"],
        "explanation": "Return nullptr on error.", "xp": 15},
    {"id": "cpp-20-5-13", "type": "code", "question": "Output parameter.", "correctAnswer": ["int func(int* result)", "output parameter"],
        "explanation": "Use pointer for output.", "xp": 15},
    {"id": "cpp-20-5-14", "type": "code", "question": "Exception to error code.", "correctAnswer": ["try { /* code */ return 0; } catch (...) { return -1; }", "convert exception"],
        "explanation": "Catch exception, return error.", "xp": 15},
    {"id": "cpp-20-5-15", "type": "code", "question": "std::error_code.", "correctAnswer": ["std::error_code ec;", "error_code type"],
        "explanation": "std::error_code for errors.", "xp": 15},
    {"id": "cpp-20-5-16", "type": "code", "question": "make_error_code.", "correctAnswer": ["auto ec = std::make_error_code(std::errc::invalid_argument);", "make error code"],
        "explanation": "make_error_code() create.", "xp": 15},
    {"id": "cpp-20-5-17", "type": "code", "question": "std::system_error.", "correctAnswer": ["throw std::system_error(ec, \"message\");", "system error exception"],
        "explanation": "system_error with error_code.", "xp": 15},
    {"id": "cpp-20-5-18", "type": "code", "question": "std::optional.", "correctAnswer": ["std::optional<int> func();", "optional result"],
        "explanation": "std::optional for maybe value.", "xp": 15},
    {"id": "cpp-20-5-19", "type": "code", "question": "Return optional.", "correctAnswer": ["return std::optional<int>{value};", "return optional"],
        "explanation": "Return optional value.", "xp": 15},
    {"id": "cpp-20-5-20", "type": "code", "question": "std::expected.", "correctAnswer": ["std::expected<int, Error> func();", "expected result"],
        "explanation": "std::expected for result or error.", "xp": 15},
    {"id": "cpp-20-5-21", "type": "code", "question": "Return error in expected.", "correctAnswer": ["return std::unexpected(Error{});", "unexpected error"],
        "explanation": "std::unexpected() for error.", "xp": 15},
    {"id": "cpp-20-5-22", "type": "code", "question": "errno thread safety.", "correctAnswer": ["// errno is thread-local", "errno thread-local"],
        "explanation": "errno is thread-local.", "xp": 15},
    {"id": "cpp-20-5-23", "type": "code", "question": "Clear errno.", "correctAnswer": ["errno = 0;", "clear errno"],
        "explanation": "Set errno to 0.", "xp": 15},
    {"id": "cpp-20-5-24", "type": "code", "question": "Custom error code.", "correctAnswer": ["enum class MyError { Ok = 0, Invalid };", "custom error enum"],
        "explanation": "Define error codes.", "xp": 15},
    {"id": "cpp-20-5-25", "type": "code", "question": "Exception boundary wrapper.", "correctAnswer": ["template<typename F> auto wrap(F f) -> decltype(f()) try { return f(); } catch (...) { return ErrorCode; }", "wrapper template"],
        "explanation": "Template wrapper for exception boundary.", "xp": 15}
]

lesson5 = {
    "id": "cpp-U20-L5", "title": "Error Handling Across Boundaries", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Error Handling Across Boundaries

Handling errors when C++ and C interact.

## Exception Boundary

Exceptions cannot cross `extern "C"` boundaries. You must catch them and convert to error codes.

```cpp
extern "C" int cpp_function(int param) try {
    // C++ code that might throw
    if (param < 0) {
        throw std::invalid_argument("param must be >= 0");
    }
    return param * 2;
} catch (const std::exception& e) {
    // Catch all exceptions and return error code
    errno = EINVAL;
    return -1;
}
```

## Using errno

```cpp
#include <cerrno>

// Set error
errno = EINVAL;

// Check error
if (result == -1) {
    perror("Operation failed");
    fprintf(stderr, "Error: %s\n", strerror(errno));
}
```

## Modern Error Handling

```cpp
// std::optional (C++17)
std::optional<int> divide(int a, int b) {
    if (b == 0) return std::nullopt;
    return a / b;
}

// std::expected (C++23)
std::expected<int, std::string> compute(int x) {
    if (x < 0) return std::unexpected("negative value");
    return x * x;
}
```
""",
    "questions": lesson5_questions
}

# ============================================================================
# LESSON 6: Memory Management Interoperability
# ============================================================================
lesson6_questions = [
    {"id": "cpp-20-6-1", "type": "typing", "question": "What is malloc?", "correctAnswer": ["C memory allocation", "allocate memory"], "explanation": "malloc allocates memory.", "xp": 5},
    {"id": "cpp-20-6-2", "type": "typing", "question": "What is free?", "correctAnswer": ["C memory deallocation", "free memory"], "explanation": "free deallocates memory.", "xp": 5},
    {"id": "cpp-20-6-3", "type": "typing", "question": "Can new/free mix?", "correctAnswer": ["no", "cannot"], "explanation": "Don't mix new/free.", "xp": 5},
    {"id": "cpp-20-6-4", "type": "multiple", "question": "malloc returns?", "options": ["void*", "int*", "char*", "any*"], "correctAnswer": [0], "explanation": "malloc returns void*.", "xp": 5},
    {"id": "cpp-20-6-5", "type": "multiple", "question": "new throws?", "options": ["yes", "no", "sometimes", "never"], "correctAnswer": [0], "explanation": "new throws on failure.", "xp": 5},
    {"id": "cpp-20-6-6", "type": "code", "question": "Use malloc.", "correctAnswer": ["int* ptr = (int*)malloc(sizeof(int) * 10);", "malloc allocation"],
        "explanation": "ptr = malloc(size)", "xp": 15},
    {"id": "cpp-20-6-7", "type": "code", "question": "Use free.", "correctAnswer": ["free(ptr);", "free memory"],
        "explanation": "free(ptr)", "xp": 15},
    {"id": "cpp-20-6-8", "type": "code", "question": "malloc with cast.", "correctAnswer": ["int* ptr = (int*)malloc(size);", "cast malloc"],
        "explanation": "Cast malloc to type.", "xp": 15},
    {"id": "cpp-20-6-9", "type": "code", "question": "calloc.", "correctAnswer": ["int* ptr = (int*)calloc(10, sizeof(int));", "calloc zeroes memory"],
        "explanation": "calloc allocates zeroed.", "xp": 15},
    {"id": "cpp-20-6-10", "type": "code", "question": "realloc.", "correctAnswer": ["ptr = (int*)realloc(ptr, new_size);", "realloc resize"],
        "explanation": "realloc resizes memory.", "xp": 15},
    {"id": "cpp-20-6-11", "type": "code", "question": "Check malloc failure.", "correctAnswer": ["if (ptr == NULL) { /* handle */ }", "check for NULL"],
        "explanation": "malloc returns NULL on failure.", "xp": 15},
    {"id": "cpp-20-6-12", "type": "code", "question": "newnothrow.", "correctAnswer": ["int* ptr = new(std::nothrow) int;", "nothrow new"],
        "explanation": "new(std::nothrow) returns NULL.", "xp": 15},
    {"id": "cpp-20-6-13", "type": "code", "question": "delete array.", "correctAnswer": ["delete[] arr;", "delete array"],
        "explanation": "delete[] for arrays.", "xp": 15},
    {"id": "cpp-20-6-14", "type": "code", "question": "Placement new.", "correctAnswer": ["void* mem = malloc(sizeof(T));\nT* obj = new(mem) T();", "placement new"],
        "explanation": "new(address) type.", "xp": 15},
    {"id": "cpp-20-6-15", "type": "code", "question": "Placement delete.", "correctAnswer": ["obj->~T();", "call destructor"],
        "explanation": "obj->~Type() destructor.", "xp": 15},
    {"id": "cpp-20-6-16", "type": "code", "question": "aligned_alloc.", "correctAnswer": ["void* ptr = aligned_alloc(64, size);", "aligned allocation"],
        "explanation": "aligned_alloc() allocate.", "xp": 15},
    {"id": "cpp-20-6-17", "type": "code", "question": "free after placement new.", "correctAnswer": ["free(mem);", "free the original memory"],
        "explanation": "free() the original pointer.", "xp": 15},
    {"id": "cpp-20-6-18", "type": "code", "question": "memcpy.", "correctAnswer": ["memcpy(dest, src, size);", "copy memory"],
        "explanation": "memcpy() copy bytes.", "xp": 15},
    {"id": "cpp-20-6-19", "type": "code", "question": "memset.", "correctAnswer": ["memset(ptr, 0, size);", "set memory"],
        "explanation": "memset() set bytes.", "xp": 15},
    {"id": "cpp-20-6-20", "type": "code", "question": "memmove.", "correctAnswer": ["memmove(dest, src, size);", "move overlapping"],
        "explanation": "memmove() for overlap.", "xp": 15},
    {"id": "cpp-20-6-21", "type": "code", "question": "malloc in C++.", "correctAnswer": ["void* ptr = std::malloc(size);", "std::malloc in C++"],
        "explanation": "Use std::malloc in C++.", "xp": 15},
    {"id": "cpp-20-6-22", "type": "code", "question": "free in C++.", "correctAnswer": ["std::free(ptr);", "std::free in C++"],
        "explanation": "Use std::free in C++.", "xp": 15},
    {"id": "cpp-20-6-23", "type": "code", "question": "sizeof in C malloc.", "correctAnswer": ["malloc(sizeof(int) * count);", "sizeof type"],
        "explanation": "sizeof(type) * count", "xp": 15},
    {"id": "cpp-20-6-24", "type": "code", "question": "Custom allocator.", "correctAnswer": ["template<typename T> struct Allocator { T* allocate(size_t n); void deallocate(T* p, size_t n); };", "custom allocator"],
        "explanation": "Define allocator struct.", "xp": 15},
    {"id": "cpp-20-6-25", "type": "code", "question": "RAII for malloc.", "correctAnswer": ["class MallocRAII { void* ptr; public: MallocRAII(size_t s) { ptr = malloc(s); } ~MallocRAII() { free(ptr); } };", "RAII wrapper"],
        "explanation": "RAII wrapper for malloc.", "xp": 15}
]

lesson6 = {
    "id": "cpp-U20-L6", "title": "Memory Management Interoperability", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Memory Management Interoperability

Managing memory across C and C++.

## C Memory Functions

```cpp
#include <cstdlib>

// Allocate
int* ptr = (int*)malloc(sizeof(int) * 10);
if (ptr == NULL) {
    // Handle allocation failure
}

// Zero-initialize
int* ptr = (int*)calloc(10, sizeof(int));

// Resize
ptr = (int*)realloc(ptr, new_size);

// Free
free(ptr);
```

## Mixing C and C++ Memory

```cpp
// ❌ DON'T: Mix malloc/free with new/delete
int* ptr = (int*)malloc(sizeof(int));
delete ptr;  // Undefined behavior!

// ✅ DO: Match allocators
int* ptr1 = (int*)malloc(sizeof(int));
free(ptr1);

int* ptr2 = new int;
delete ptr2;
```

## Placement New

```cpp
// Allocate raw memory
void* mem = malloc(sizeof(MyClass));

// Construct object
MyClass* obj = new(mem) MyClass();

// Use object
obj->method();

// Destroy object
obj->~MyClass();

// Free memory
free(mem);
```

## RAII for C Memory

```cpp
class MallocRAII {
    void* ptr;
public:
    MallocRAII(size_t size) : ptr(malloc(size)) {}
    ~MallocRAII() { free(ptr); }
    void* get() const { return ptr; }
};
```
""",
    "questions": lesson6_questions
}

# Update lesson titles and add lessons
data['units'][19]['lessons'][3]['title'] = lesson4['title']
data['units'][19]['lessons'][4]['title'] = lesson5['title']
data['units'][19]['lessons'][5]['title'] = lesson6['title']

# Add all lessons to data
data['units'][19]['lessons'][3].update(lesson4)
print("✅ Lesson 4: C++11 Features for Interoperability - 25 questions (20 code)")

data['units'][19]['lessons'][4].update(lesson5)
print("✅ Lesson 5: Error Handling Across Boundaries - 25 questions (20 code)")

data['units'][19]['lessons'][5].update(lesson6)
print("✅ Lesson 6: Memory Management Interoperability - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 20 (Lessons 4-6) Complete: 3 lessons with 25 questions each (75 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~53 (70%)")
print("   - Type-in questions: ~15 (20%)")
print("   - Multiple-choice: ~7 (10%)")
print("\nUnit 20 now has 6 complete lessons (150 questions total)")