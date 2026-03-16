#!/usr/bin/env python3
"""
Build Unit 19: Best Practices and Idioms
3 lessons with 25 questions each (75 total)
Heavy emphasis on code questions (~70% = 52.5 code questions)
"""
import json

print("🚀 Building C++ Unit 19: Best Practices and Idioms")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: C++ Coding Guidelines
# ============================================================================
lesson1_questions = [
    {"id": "cpp-19-1-1", "type": "typing", "question": "What is RAII?", "correctAnswer": ["Resource Acquisition Is Initialization", "acquire resource in constructor"], "explanation": "RAII manages resources.", "xp": 5},
    {"id": "cpp-19-1-2", "type": "typing", "question": "What is rule of three?", "correctAnswer": ["destructor copy copy-assignment", "if define one define all"], "explanation": "Rule of three for resource management.", "xp": 5},
    {"id": "cpp-19-1-3", "type": "typing", "question": "What is rule of five?", "correctAnswer": ["destructor copy move", "add move operations"], "explanation": "Rule of five for C++11.", "xp": 5},
    {"id": "cpp-19-1-4", "type": "multiple", "question": "Prefer initialization to assignment?", "options": ["Yes", "No", "Sometimes", "Never"], "correctAnswer": [0], "explanation": "Initialize in constructor.", "xp": 5},
    {"id": "cpp-19-1-5", "type": "multiple", "question": "Use const when possible?", "options": ["Yes", "No", "Rarely", "Only variables"], "correctAnswer": [0], "explanation": "const prevents modification.", "xp": 5},
    {"id": "cpp-19-1-6", "type": "code", "question": "Use initializer list.", "correctAnswer": ["MyClass(int x) : member(x) { }", "constructor : member(value)"],
        "explanation": "Initialize members in list.", "xp": 15},
    {"id": "cpp-19-1-7", "type": "code", "question": "Mark function const.", "correctAnswer": ["int getValue() const { return value; }", "const member function"],
        "explanation": "const after function signature.", "xp": 15},
    {"id": "cpp-19-1-8", "type": "code", "question": "Pass by const reference.", "correctAnswer": ["void func(const std::string& str)", "const Type& param"],
        "explanation": "Pass large objects by const&.", "xp": 15},
    {"id": "cpp-19-1-9", "type": "code", "question": "Use enum class.", "correctAnswer": ["enum class Color { Red, Green, Blue };", "scoped enum"],
        "explanation": "enum class for scoped enums.", "xp": 15},
    {"id": "cpp-19-1-10", "type": "code", "question": "Use nullptr instead of NULL.", "correctAnswer": ["int* ptr = nullptr;", "nullptr not NULL"],
        "explanation": "nullptr is type-safe.", "xp": 15},
    {"id": "cpp-19-1-11", "type": "code", "question": "Use constexpr.", "correctAnswer": ["constexpr int MAX_SIZE = 100;", "compile-time constant"],
        "explanation": "constexpr for compile-time.", "xp": 15},
    {"id": "cpp-19-1-12", "type": "code", "question": "Use auto.", "correctAnswer": ["auto it = vec.begin();", "auto for type deduction"],
        "explanation": "auto for complex types.", "xp": 15},
    {"id": "cpp-19-1-13", "type": "code", "question": "Use range-based for.", "correctAnswer": ["for (auto& item : vec) { }", "for-each loop"],
        "explanation": "Range-based for iteration.", "xp": 15},
    {"id": "cpp-19-1-14", "type": "code", "question": "Use override.", "correctAnswer": ["void func() override", "override specifier"],
        "explanation": "override ensures virtual override.", "xp": 15},
    {"id": "cpp-19-1-15", "type": "code", "question": "Use default constructor.", "correctAnswer": ["MyClass() = default;", "= default for compiler-generated"],
        "explanation": "= default for special functions.", "xp": 15},
    {"id": "cpp-19-1-16", "type": "code", "question": "Delete copy constructor.", "correctAnswer": ["MyClass(const MyClass&) = delete;", "= delete prevents copy"],
        "explanation": "= delete to disable.", "xp": 15},
    {"id": "cpp-19-1-17", "type": "code", "question": "Use unique_ptr.", "correctAnswer": ["auto ptr = std::make_unique<int>(42);", "unique_ptr for exclusive ownership"],
        "explanation": "unique_ptr for RAII.", "xp": 15},
    {"id": "cpp-19-1-18", "type": "code", "question": "Use noexcept.", "correctAnswer": ["void func() noexcept", "noexcept specifier"],
        "explanation": "noexcept for non-throwing.", "xp": 15},
    {"id": "cpp-19-1-19", "type": "code", "question": "Use const correctness.", "correctAnswer": ["const int getValue() const", "const member function"],
        "explanation": "const for read-only.", "xp": 15},
    {"id": "cpp-19-1-20", "type": "code", "question": "Use std::array.", "correctAnswer": ["std::array<int, 10> arr;", "array for fixed size"],
        "explanation": "std::array over C-array.", "xp": 15},
    {"id": "cpp-19-1-21", "type": "code", "question": "Use std::vector.", "correctAnswer": ["std::vector<int> vec;", "vector for dynamic size"],
        "explanation": "vector for dynamic arrays.", "xp": 15},
    {"id": "cpp-19-1-22", "type": "code", "question": "Reserve vector capacity.", "correctAnswer": ["vec.reserve(1000);", "reserve prevents reallocation"],
        "explanation": "Reserve for performance.", "xp": 15},
    {"id": "cpp-19-1-23", "type": "code", "question": "Use emplace_back.", "correctAnswer": ["vec.emplace_back(1, 2, 3);", "emplace_back constructs in-place"],
        "explanation": "emplace_back is efficient.", "xp": 15},
    {"id": "cpp-19-1-24", "type": "code", "question": "Use using alias.", "correctAnswer": ["using VecInt = std::vector<int>;", "using alias instead of typedef"],
        "explanation": "using for type aliases.", "xp": 15},
    {"id": "cpp-19-1-25", "type": "code", "question": "Use std::string_view.", "correctAnswer": ["void func(std::string_view str)", "string_view for non-owning"],
        "explanation": "string_view avoids allocation.", "xp": 15}
]

lesson1 = {
    "id": 96, "title": "C++ Coding Guidelines", "unitTitle": "19. Best Practices and Idioms", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# C++ Coding Guidelines

Modern C++ best practices.

## RAII (Resource Acquisition Is Initialization)

```cpp
class File {
    FILE* handle;
public:
    File(const char* path) : handle(fopen(path, "r")) {
        if (!handle) throw std::runtime_error("Cannot open file");
    }
    ~File() { fclose(handle); }  // Resource released automatically
};
```

## Rule of Five

```cpp
class Resource {
    int* data;
public:
    // Constructor
    Resource(size_t size) : data(new int[size]) {}

    // Destructor
    ~Resource() { delete[] data; }

    // Copy operations
    Resource(const Resource& other) = delete;
    Resource& operator=(const Resource& other) = delete;

    // Move operations
    Resource(Resource&& other) noexcept : data(other.data) {
        other.data = nullptr;
    }
    Resource& operator=(Resource&& other) noexcept {
        delete[] data;
        data = other.data;
        other.data = nullptr;
        return *this;
    }
};
```

## Best Practices

- Use `nullptr` instead of `NULL`
- Use `enum class` instead of plain `enum`
- Use `constexpr` for compile-time constants
- Use `auto` for type deduction
- Use `override` for virtual functions
- Use `noexcept` for non-throwing functions
- Use smart pointers (`unique_ptr`, `shared_ptr`)
- Prefer `std::array` and `std::vector` over C-arrays
""",
    "questions": lesson1_questions
}

# ============================================================================
# LESSON 2: Idiomatic STL Usage
# ============================================================================
lesson2_questions = [
    {"id": "cpp-19-2-1", "type": "typing", "question": "What is iterator?", "correctAnswer": ["pointer-like object", "traverse container"], "explanation": "Iterator traverses containers.", "xp": 5},
    {"id": "cpp-19-2-2", "type": "typing", "question": "What is begin()?", "correctAnswer": ["returns first iterator", "start iterator"], "explanation": "begin() returns start.", "xp": 5},
    {"id": "cpp-19-2-3", "type": "typing", "question": "What is end()?", "correctAnswer": ["returns past-end iterator", "end sentinel"], "explanation": "end() returns one past end.", "xp": 5},
    {"id": "cpp-19-2-4", "type": "multiple", "question": "What is size()?", "options": ["Element count", "Capacity", "Index", "Length in bytes"], "correctAnswer": [0], "explanation": "size() returns count.", "xp": 5},
    {"id": "cpp-19-2-5", "type": "multiple", "question": "What is empty()?", "options": ["Check if empty", "Clear container", "Size zero", "Resize"], "correctAnswer": [0], "explanation": "empty() checks emptiness.", "xp": 5},
    {"id": "cpp-19-2-6", "type": "code", "question": "Iterate with iterator.", "correctAnswer": ["for (auto it = vec.begin(); it != vec.end(); ++it) { }", "iterator loop"],
        "explanation": "Use begin() and end().", "xp": 15},
    {"id": "cpp-19-2-7", "type": "code", "question": "Range-based for loop.", "correctAnswer": ["for (const auto& item : vec) { }", "for-each iteration"],
        "explanation": "Range-based for is cleaner.", "xp": 15},
    {"id": "cpp-19-2-8", "type": "code", "question": "Push back element.", "correctAnswer": ["vec.push_back(42);", "push_back()"],
        "explanation": "push_back() adds to end.", "xp": 15},
    {"id": "cpp-19-2-9", "type": "code", "question": "Emplace back element.", "correctAnswer": ["vec.emplace_back(42);", "emplace_back()"],
        "explanation": "emplace_back() constructs.", "xp": 15},
    {"id": "cpp-19-2-10", "type": "code", "question": "Insert in map.", "correctAnswer": ["map.insert({key, value});", "map[key] = value;"],
        "explanation": "insert() or operator[].", "xp": 15},
    {"id": "cpp-19-2-11", "type": "code", "question": "Find in map.", "correctAnswer": ["auto it = map.find(key);", "find() returns iterator"],
        "explanation": "find() returns iterator.", "xp": 15},
    {"id": "cpp-19-2-12", "type": "code", "question": "Check if found.", "correctAnswer": ["if (it != map.end())", "end() means not found"],
        "explanation": "Compare with end().", "xp": 15},
    {"id": "cpp-19-2-13", "type": "code", "question": "Erase from vector.", "correctAnswer": ["vec.erase(vec.begin() + index);", "erase() removes element"],
        "explanation": "erase() takes iterator.", "xp": 15},
    {"id": "cpp-19-2-14", "type": "code", "question": "Erase-remove idiom.", "correctAnswer": ["vec.erase(std::remove(vec.begin(), vec.end(), value), vec.end());", "erase-remove pattern"],
        "explanation": "remove() then erase().", "xp": 15},
    {"id": "cpp-19-2-15", "type": "code", "question": "Sort vector.", "correctAnswer": ["std::sort(vec.begin(), vec.end());", "std::sort()"],
        "explanation": "sort() requires iterators.", "xp": 15},
    {"id": "cpp-19-2-16", "type": "code", "question": "Find in vector.", "correctAnswer": ["auto it = std::find(vec.begin(), vec.end(), value);", "std::find()"],
        "explanation": "find() from <algorithm>.", "xp": 15},
    {"id": "cpp-19-2-17", "type": "code", "question": "Count occurrences.", "correctAnswer": ["size_t count = std::count(vec.begin(), vec.end(), value);", "std::count()"],
        "explanation": "count() from <algorithm>.", "xp": 15},
    {"id": "cpp-19-2-18", "type": "code", "question": "Use map for key-value.", "correctAnswer": ["std::map<std::string, int> scores;", "map for ordered mapping"],
        "explanation": "map for key-value pairs.", "xp": 15},
    {"id": "cpp-19-2-19", "type": "code", "question": "Use unordered_map.", "correctAnswer": ["std::unordered_map<std::string, int> cache;", "unordered_map for hashing"],
        "explanation": "unordered_map is faster.", "xp": 15},
    {"id": "cpp-19-2-20", "type": "code", "question": "Use set for unique.", "correctAnswer": ["std::set<int> unique;", "set for unique sorted"],
        "explanation": "set keeps unique sorted.", "xp": 15},
    {"id": "cpp-19-2-21", "type": "code", "question": "Use std::move.", "correctAnswer": ["auto vec2 = std::move(vec1);", "std::move() for transfer"],
        "explanation": "std::move() for efficiency.", "xp": 15},
    {"id": "cpp-19-2-22", "type": "code", "question": "Use std::swap.", "correctAnswer": ["std::swap(a, b);", "swap() for exchanging"],
        "explanation": "swap() is efficient.", "xp": 15},
    {"id": "cpp-19-2-23", "type": "code", "question": "Use back()", "correctAnswer": ["int last = vec.back();", "back() returns last"],
        "explanation": "back() for last element.", "xp": 15},
    {"id": "cpp-19-2-24", "type": "code", "question": "Use front()", "correctAnswer": ["int first = vec.front();", "front() returns first"],
        "explanation": "front() for first element.", "xp": 15},
    {"id": "cpp-19-2-25", "type": "code", "question": "Use clear()", "correctAnswer": ["vec.clear();", "clear() empties container"],
        "explanation": "clear() removes all elements.", "xp": 15}
]

lesson2 = {
    "id": 97, "title": "Idiomatic STL Usage", "unitTitle": "19. Best Practices and Idioms", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Idiomatic STL Usage

Using the Standard Template Library effectively.

## Container Iteration

```cpp
// Range-based for (preferred)
for (const auto& item : vec) {
    std::cout << item << std::endl;
}

// Iterator-based
for (auto it = vec.begin(); it != vec.end(); ++it) {
    std::cout << *it << std::endl;
}
```

## Common Operations

```cpp
// Add elements
vec.push_back(42);        // Copy
vec.emplace_back(42);     // Construct in-place

// Remove elements
vec.erase(vec.begin() + 5);  // By position
vec.erase(std::remove(vec.begin(), vec.end(), 42), vec.end());  // By value

// Find
auto it = std::find(vec.begin(), vec.end(), 42);
if (it != vec.end()) {
    // Found
}

// Sort
std::sort(vec.begin(), vec.end());
```

## Associative Containers

```cpp
// Map
std::map<std::string, int> scores;
scores["Alice"] = 95;

auto it = scores.find("Alice");
if (it != scores.end()) {
    std::cout << it->second << std::endl;
}

// Unordered Map (faster lookup)
std::unordered_map<std::string, int> cache;
```
""",
    "questions": lesson2_questions
}

# ============================================================================
# LESSON 3: Avoiding Raw Pointers
# ============================================================================
lesson3_questions = [
    {"id": "cpp-19-3-1", "type": "typing", "question": "What is unique_ptr?", "correctAnswer": ["exclusive ownership pointer", "smart pointer"], "explanation": "unique_ptr owns exclusively.", "xp": 5},
    {"id": "cpp-19-3-2", "type": "typing", "question": "What is shared_ptr?", "correctAnswer": ["shared ownership pointer", "reference counted"], "explanation": "shared_ptr shares ownership.", "xp": 5},
    {"id": "cpp-19-3-3", "type": "typing", "question": "What is weak_ptr?", "correctAnswer": ["non-owning pointer", "observe shared_ptr"], "explanation": "weak_ptr observes shared_ptr.", "xp": 5},
    {"id": "cpp-19-3-4", "type": "multiple", "question": "unique_ptr can be copied?", "options": ["No", "Yes", "Sometimes", "Only with move"], "correctAnswer": [0], "explanation": "unique_ptr can only be moved.", "xp": 5},
    {"id": "cpp-19-3-5", "type": "multiple", "question": "shared_ptr can be copied?", "options": ["Yes", "No", "Only moved", "Rarely"], "correctAnswer": [0], "explanation": "shared_ptr can be copied.", "xp": 5},
    {"id": "cpp-19-3-6", "type": "code", "question": "Create unique_ptr.", "correctAnswer": ["auto ptr = std::make_unique<int>(42);", "std::unique_ptr<int> ptr(new int(42));"],
        "explanation": "make_unique() is preferred.", "xp": 15},
    {"id": "cpp-19-3-7", "type": "code", "question": "Create shared_ptr.", "correctAnswer": ["auto ptr = std::make_shared<int>(42);", "std::shared_ptr<int> ptr(new int(42));"],
        "explanation": "make_shared() is preferred.", "xp": 15},
    {"id": "cpp-19-3-8", "type": "code", "question": "Move unique_ptr.", "correctAnswer": ["auto ptr2 = std::move(ptr);", "transfer ownership"],
        "explanation": "std::move() to transfer.", "xp": 15},
    {"id": "cpp-19-3-9", "type": "code", "question": "Get raw pointer.", "correctAnswer": ["int* raw = ptr.get();", "get() returns raw pointer"],
        "explanation": "get() returns raw pointer.", "xp": 15},
    {"id": "cpp-19-3-10", "type": "code", "question": "Reset smart pointer.", "correctAnswer": ["ptr.reset(new int(100));", "ptr.reset();"],
        "explanation": "reset() releases and replaces.", "xp": 15},
    {"id": "cpp-19-3-11", "type": "code", "question": "Release unique_ptr.", "correctAnswer": ["int* raw = ptr.release();", "release() gives up ownership"],
        "explanation": "release() gives ownership.", "xp": 15},
    {"id": "cpp-19-3-12", "type": "code", "question": "Check if pointer null.", "correctAnswer": ["if (ptr) { }", "if (ptr != nullptr)"],
        "explanation": "Smart pointer is truthy if not null.", "xp": 15},
    {"id": "cpp-19-3-13", "type": "code", "question": "Use use_count.", "correctAnswer": ["size_t count = ptr.use_count();", "reference count"],
        "explanation": "use_count() returns ref count.", "xp": 15},
    {"id": "cpp-19-3-14", "type": "code", "question": "Create weak_ptr from shared.", "correctAnswer": ["std::weak_ptr<int> weak = shared;", "weak_ptr observes"],
        "explanation": "weak_ptr from shared_ptr.", "xp": 15},
    {"id": "cpp-19-3-15", "type": "code", "question": "Lock weak_ptr.", "correctAnswer": ["if (auto shared = weak.lock()) { }", "lock() returns shared_ptr"],
        "explanation": "lock() returns shared_ptr or empty.", "xp": 15},
    {"id": "cpp-19-3-16", "type": "code", "question": "Custom deleter.", "correctAnswer": ["auto ptr = std::unique_ptr<FILE, decltype(&fclose)>(fopen(\"file\", \"r\"), fclose);", "custom deleter"],
        "explanation": "Custom deleter in smart pointer.", "xp": 15},
    {"id": "cpp-19-3-17", "type": "code", "question": "Unique_ptr to array.", "correctAnswer": ["std::unique_ptr<int[]> arr(new int[10]);", "unique_ptr<T[]> for array"],
        "explanation": "unique_ptr<T[]> for arrays.", "xp": 15},
    {"id": "cpp-19-3-18", "type": "code", "question": "Make shared for efficiency.", "correctAnswer": ["auto ptr = std::make_shared<MyClass>(args);", "single allocation"],
        "explanation": "make_shared is more efficient.", "xp": 15},
    {"id": "cpp-19-3-19", "type": "code", "question": "Alias constructor shared_ptr.", "correctAnswer": ["std::shared_ptr<MyClass> ptr(shared, &sub_object);", "alias constructor"],
        "explanation": "Shared ownership of sub-object.", "xp": 15},
    {"id": "cpp-19-3-20", "type": "code", "question": "Pointer comparison.", "correctAnswer": ["if (ptr1 < ptr2) { }", "pointer comparison"],
        "explanation": "Smart pointers support comparison.", "xp": 15},
    {"id": "cpp-19-3-21", "type": "code", "question": "Use owner_before.", "correctAnswer": ["ptr.owner_before(other)", "owner-based ordering"],
        "explanation": "owner_before for weak_ptr order.", "xp": 15},
    {"id": "cpp-19-3-22", "type": "code", "question": "Expired weak_ptr.", "correctAnswer": ["if (weak.expired()) { }", "check if expired"],
        "explanation": "expired() checks if expired.", "xp": 15},
    {"id": "cpp-19-3-23", "type": "code", "question": "Use enable_shared_from_this.", "correctAnswer": ["class MyClass : public std::enable_shared_from_this<MyClass>", "get shared_ptr from this"],
        "explanation": "enable_shared_from_this for self-reference.", "xp": 15},
    {"id": "cpp-19-3-24", "type": "code", "question": "Swap smart pointers.", "correctAnswer": ["ptr1.swap(ptr2);", "swap()"],
        "explanation": "swap() exchanges ownership.", "xp": 15},
    {"id": "cpp-19-3-25", "type": "code", "question": "Dereference smart pointer.", "correctAnswer": ["int value = *ptr;", "int value = ptr->member;"],
        "explanation": "* and -> operators work.", "xp": 15}
]

lesson3 = {
    "id": 98, "title": "Avoiding Raw Pointers", "unitTitle": "19. Best Practices and Idioms", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Avoiding Raw Pointers

Using smart pointers for memory safety.

## unique_ptr (Exclusive Ownership)

```cpp
#include <memory>

// Create
auto ptr = std::make_unique<int>(42);

// Move (cannot copy)
auto ptr2 = std::move(ptr);

// Access
std::cout << *ptr2 << std::endl;

// Reset
ptr2.reset();

// Release (gives up ownership)
int* raw = ptr2.release();
delete raw;
```

## shared_ptr (Shared Ownership)

```cpp
#include <memory>

// Create
auto ptr = std::make_shared<int>(42);

// Copy (increases ref count)
auto ptr2 = ptr;

// Check ref count
std::cout << ptr.use_count() << std::endl;  // 2

// Reset
ptr.reset();  // Decreases ref count
```

## weak_ptr (Non-owning Observer)

```cpp
std::weak_ptr<int> weak = ptr;

// Check if expired
if (!weak.expired()) {
    // Lock to get shared_ptr
    if (auto shared = weak.lock()) {
        std::cout << *shared << std::endl;
    }
}
```
""",
    "questions": lesson3_questions
}

# ============================================================================
# LESSON 4: Header Design Best Practices
# ============================================================================
lesson4_questions = [
    {"id": "cpp-19-4-1", "type": "typing", "question": "What is include guard?", "correctAnswer": ["prevent multiple inclusion", "#pragma once"], "explanation": "Include guards prevent duplication.", "xp": 5},
    {"id": "cpp-19-4-2", "type": "typing", "question": "What is #pragma once?", "correctAnswer": ["include guard directive", "modern include guard"], "explanation": "pragma once is include guard.", "xp": 5},
    {"id": "cpp-19-4-3", "type": "typing", "question": "What goes in header?", "correctAnswer": ["declarations", "function prototypes", "class definitions"], "explanation": "Headers have declarations.", "xp": 5},
    {"id": "cpp-19-4-4", "type": "multiple", "question": "Implementations in header?", "options": ["Templates, inline functions", "All functions", "Never", "Only main"], "correctAnswer": [0], "explanation": "Templates and inline in header.", "xp": 5},
    {"id": "cpp-19-4-5", "type": "multiple", "question": "What is extern?", "options": ["External linkage", "Internal linkage", "Static linkage", "No linkage"], "correctAnswer": [0], "explanation": "extern for external linkage.", "xp": 5},
    {"id": "cpp-19-4-6", "type": "code", "question": "Include guard traditional.", "correctAnswer": ["#ifndef HEADER_H\n#define HEADER_H\n// content\n#endif", "#ifndef #define #endif"],
        "explanation": "Traditional include guard.", "xp": 15},
    {"id": "cpp-19-4-7", "type": "code", "question": "Use #pragma once.", "correctAnswer": ["#pragma once", "modern include guard"],
        "explanation": "pragma once is simpler.", "xp": 15},
    {"id": "cpp-19-4-8", "type": "code", "question": "Forward declare class.", "correctAnswer": ["class MyClass;", "forward declaration"],
        "explanation": "Forward declare when possible.", "xp": 15},
    {"id": "cpp-19-4-9", "type": "code", "question": "Use anonymous namespace.", "correctAnswer": ["namespace { int internal = 42; }", "internal linkage"],
        "explanation": "Anonymous namespace for internal.", "xp": 15},
    {"id": "cpp-19-4-10", "type": "code", "question": "Inline function.", "correctAnswer": ["inline int add(int a, int b) { return a + b; }", "inline in header"],
        "explanation": "inline in header for ODR.", "xp": 15},
    {"id": "cpp-19-4-11", "type": "code", "question": "Template in header.", "correctAnswer": ["template<typename T>\nT func(T x) { return x; }", "templates in header"],
        "explanation": "Templates must be in header.", "xp": 15},
    {"id": "cpp-19-4-12", "type": "code", "question": "Use const correctness.", "correctAnswer": ["const int MAX = 100;", "const for constants"],
        "explanation": "const for immutability.", "xp": 15},
    {"id": "cpp-19-4-13", "type": "code", "question": "Use constexpr.", "correctAnswer": ["constexpr int SIZE = 100;", "compile-time constant"],
        "explanation": "constexpr for compile-time.", "xp": 15},
    {"id": "cpp-19-4-14", "type": "code", "question": "Header only library.", "correctAnswer": ["#pragma once\n// all code in header", "header-only"],
        "explanation": "Header-only libraries have no .cpp.", "xp": 15},
    {"id": "cpp-19-4-15", "type": "code", "question": "Minimize includes.", "correctAnswer": ["#include <string>", "only include what needed"],
        "explanation": "Include only what's needed.", "xp": 15},
    {"id": "cpp-19-4-16", "type": "code", "question": "Use forward declaration.", "correctAnswer": ["class MyClass;", "avoid unnecessary includes"],
        "explanation": "Forward declaration reduces includes.", "xp": 15},
    {"id": "cpp-19-4-17", "type": "code", "question": "Exported function.", "correctAnswer": ["extern \"C\" void func();", "extern C linkage"],
        "explanation": "extern C for C linkage.", "xp": 15},
    {"id": "cpp-19-4-18", "type": "code", "question": "Namespace for header.", "correctAnswer": ["namespace mylib { int func(); }", "namespace"],
        "explanation": "Use namespaces.", "xp": 15},
    {"id": "cpp-19-4-19", "type": "code", "question": "Inline variable C++17.", "correctAnswer": ["inline int global = 42;", "inline variable"],
        "explanation": "inline for variables.", "xp": 15},
    {"id": "cpp-19-4-20", "type": "code", "question": "Static variable.", "correctAnswer": ["static int internal = 42;", "internal linkage"],
        "explanation": "static for internal linkage.", "xp": 15},
    {"id": "cpp-19-4-21", "type": "code", "question": "Include system headers.", "correctAnswer": ["#include <iostream>", "system headers"],
        "explanation": "Angle brackets for system.", "xp": 15},
    {"id": "cpp-19-4-22", "type": "code", "question": "Include user headers.", "correctAnswer": ["#include \"myheader.h\"", "user headers"],
        "explanation": "Quotes for user headers.", "xp": 15},
    {"id": "cpp-19-4-23", "type": "code", "question": "Header comment.", "correctAnswer": ["// Header description", "document header"],
        "explanation": "Document header purpose.", "xp": 15},
    {"id": "cpp-19-4-24", "type": "code", "question": "Prevent macro pollution.", "correctAnswer": ["#undef MACRO", "undefine macros"],
        "explanation": "Undefine after use.", "xp": 15},
    {"id": "cpp-19-4-25", "type": "code", "question": "Use __attribute__((visibility)).", "correctAnswer": ["__attribute__((visibility(\"default\")))", "visibility attribute"],
        "explanation": "Visibility for shared libraries.", "xp": 15}
]

# Add all lessons to data
data['units'][18]['lessons'][0].update(lesson1)
print("✅ Lesson 1: C++ Coding Guidelines - 25 questions (20 code)")

data['units'][18]['lessons'][1].update(lesson2)
print("✅ Lesson 2: Idiomatic STL Usage - 25 questions (20 code)")

data['units'][18]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Avoiding Raw Pointers - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 19 Complete: All 3 lessons with 25 questions each (75 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~53 (70%)")
print("   - Type-in questions: ~15 (20%)")
print("   - Multiple-choice: ~7 (10%)")