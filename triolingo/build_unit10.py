#!/usr/bin/env python3
"""
Build Unit 10: Modern C++ Features
5 lessons with 30 questions each (150 total)
Heavy emphasis on code questions (~70% = 105 code questions)
"""
import json

print("🚀 Building C++ Unit 10: Modern C++ Features")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: C++11 Features
# ============================================================================
lesson1_questions = [
    {
        "id": "cpp-10-1-1", "type": "typing", "question": "What does auto do in C++11?", "correctAnswer": ["deduces type automatically", "automatic type deduction"], "explanation": "auto automatically deduces variable type from initializer.", "xp": 5
    },
    {
        "id": "cpp-10-1-2", "type": "typing", "question": "What is a lambda in C++11?", "correctAnswer": ["anonymous function", "function object"], "explanation": "Lambda is anonymous function that can capture variables.", "xp": 5
    },
    {
        "id": "cpp-10-1-3", "type": "typing", "question": "What does range-based for loop do?", "correctAnswer": ["iterates over container", "for each element"], "explanation": "Range-based for iterates over container elements.", "xp": 5
    },
    {
        "id": "cpp-10-1-4", "type": "multiple", "question": "What is nullptr used for?", "options": ["Null pointer literal", "Zero value", "Empty string", "False value"], "correctAnswer": [0], "explanation": "nullptr is null pointer literal in C++11.", "xp": 5
    },
    {
        "id": "cpp-10-1-5", "type": "multiple", "question": "What does decltype do?", "options": ["Deduces expression type", "Declares type", "Defines type", "Deletes type"], "correctAnswer": [0], "explanation": "decltype deduces type from expression.", "xp": 5
    },
    {
        "id": "cpp-10-1-6", "type": "code", "question": "Use auto for variable.",
        "correctAnswer": ["auto x = 42;", "auto s = \"hello\";"],
        "explanation": "auto x = 42; deduces x as int.", "xp": 15
    },
    {
        "id": "cpp-10-1-7", "type": "code", "question": "Create simple lambda.",
        "correctAnswer": ["[]() { return 42; }", "auto func = []() { return 42; };"],
        "explanation": "Empty capture list, no parameters, returns 42.", "xp": 15
    },
    {
        "id": "cpp-10-1-8", "type": "code", "question": "Lambda with parameter.",
        "correctAnswer": ["[](int x) { return x * 2; }", "auto func = [](int x) { return x * 2; };"],
        "explanation": "Lambda taking int parameter.", "xp": 15
    },
    {
        "id": "cpp-10-1-9", "type": "code", "question": "Capture variable by value.",
        "correctAnswer": ["[x]() { return x * 2; }", "[=]() { return x * 2; }"],
        "explanation": "Capture x by value in lambda.", "xp": 15
    },
    {
        "id": "cpp-10-1-10", "type": "code", "question": "Capture by reference.",
        "correctAnswer": ["[&x]() { x++; }", "[&]() { x++; }"],
        "explanation": "Capture by reference allows modification.", "xp": 15
    },
    {
        "id": "cpp-10-1-11", "type": "code", "question": "Use range-based for loop.",
        "correctAnswer": ["for (int x : v)", "for (auto& x : v)"],
        "explanation": "Range-based for iterates over container.", "xp": 15
    },
    {
        "id": "cpp-10-1-12", "type": "code", "question": "Use nullptr.",
        "correctAnswer": ["int* ptr = nullptr;", "ptr = nullptr;"],
        "explanation": "nullptr is type-safe null pointer.", "xp": 15
    },
    {
        "id": "cpp-10-1-13", "type": "code", "question": "Use decltype.",
        "correctAnswer": ["decltype(x) y = 5;", "auto y = decltype(x){5};"],
        "explanation": "decltype gets type of expression.", "xp": 15
    },
    {
        "id": "cpp-10-1-14", "type": "code", "question": "Lambda with return type.",
        "correctAnswer": ["[]() -> int { return 42; }", "[]() -> decltype(x) { return x; }"],
        "explanation": "Specify return type after parameters.", "xp": 15
    },
    {
        "id": "cpp-10-1-15", "type": "code", "question": "Capture all by value.",
        "correctAnswer": ["[=]() { return x + y; }"],
        "explanation": "[=] captures all local variables by value.", "xp": 15
    },
    {
        "id": "cpp-10-1-16", "type": "code", "question": "Capture all by reference.",
        "correctAnswer": ["[&]() { x++; y++; }"],
        "explanation": "[&] captures all local variables by reference.", "xp": 15
    },
    {
        "id": "cpp-10-1-17", "type": "code", "question": "Use auto with range-based for.",
        "correctAnswer": ["for (auto x : v)", "for (auto& x : v)"],
        "explanation": "auto deduces element type.", "xp": 15
    },
    {
        "id": "cpp-10-1-18", "type": "code", "question": "Lambda with mutable.",
        "correctAnswer": ["[x]() mutable { x++; }"],
        "explanation": "mutable allows modifying captured by value variables.", "xp": 15
    },
    {
        "id": "cpp-10-1-19", "type": "code", "question": "Use auto with iterator.",
        "correctAnswer": ["auto it = v.begin();", "for (auto it = v.begin(); it != v.end(); ++it)"],
        "explanation": "auto simplifies iterator type declaration.", "xp": 15
    },
    {
        "id": "cpp-10-1-20", "type": "code", "question": "Use initializer_list.",
        "correctAnswer": ["std::initializer_list<int> list = {1, 2, 3};", "void func(std::initializer_list<int> list)"],
        "explanation": "initializer_list for braced initialization.", "xp": 15
    },
    {
        "id": "cpp-10-1-21", "type": "code", "question": "Use enum class.",
        "correctAnswer": ["enum class Color { Red, Green, Blue };", "Color c = Color::Red;"],
        "explanation": "enum class is scoped enum.", "xp": 15
    },
    {
        "id": "cpp-10-1-22", "type": "code", "question": "Use noexcept.",
        "correctAnswer": ["void func() noexcept", "void func() noexcept(true)"],
        "explanation": "noexcept indicates function doesn't throw.", "xp": 15
    },
    {
        "id": "cpp-10-1-23", "type": "code", "question": "Use constexpr.",
        "correctAnswer": ["constexpr int square(int x) { return x * x; }", "constexpr int result = square(5);"],
        "explanation": "constexpr for compile-time evaluation.", "xp": 15
    },
    {
        "id": "cpp-10-1-24", "type": "code", "question": "Use static_assert.",
        "correctAnswer": ["static_assert(sizeof(int) == 4, \"int must be 4 bytes\");"],
        "explanation": "static_assert for compile-time assertion.", "xp": 15
    },
    {
        "id": "cpp-10-1-25", "type": "code", "question": "Use std::function.",
        "correctAnswer": ["std::function<int(int)> func = [](int x) { return x * 2; };"],
        "explanation": "std::function wraps callable objects.", "xp": 15},
    {
        "id": "cpp-10-1-26", "type": "code", "question": "Use std::bind.",
        "correctAnswer": ["auto bound = std::bind(func, _1, 42);", "auto bound = std::bind(&Class::method, this, _1);"],
        "explanation": "std::bind binds arguments to function.", "xp": 15},
    {
        "id": "cpp-10-1-27", "type": "code", "question": "Use unique_ptr.",
        "correctAnswer": ["std::unique_ptr<int> ptr = std::make_unique<int>(42);", "auto ptr = std::make_unique<int>(42);"],
        "explanation": "unique_ptr for exclusive ownership.", "xp": 15},
    {
        "id": "cpp-10-1-28", "type": "code", "question": "Use shared_ptr.",
        "correctAnswer": ["std::shared_ptr<int> ptr = std::make_shared<int>(42);"],
        "explanation": "shared_ptr for shared ownership.", "xp": 15},
    {
        "id": "cpp-10-1-29", "type": "code", "question": "Use weak_ptr.",
        "correctAnswer": ["std::weak_ptr<Node> ptr;", "auto locked = ptr.lock();"],
        "explanation": "weak_ptr breaks circular references.", "xp": 15},
    {
        "id": "cpp-10-1-30", "type": "code", "question": "Use std::move.",
        "correctAnswer": ["str2 = std::move(str1);", "return std::move(obj);"],
        "explanation": "std::move casts to rvalue reference.", "xp": 15}
]

lesson1 = {
    "id": 52, "title": "C++11 Features", "unitTitle": "10. Modern C++ Features", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# C++11 Features

C++11 introduced major modernization of C++.

## Type Deduction

```cpp
auto x = 42;                    // x is int
auto s = "hello";              // s is const char*
auto& ref = x;                 // reference
auto* ptr = &x;                // pointer

decltype(x) y = 5;             // same type as x
```

## Lambda Expressions

```cpp
// Simple lambda
[]() { return 42; }

// With parameters
[](int x) { return x * 2; }

// Capture by value
[x]() { return x * 2; }
[=]() { return x + y; }

// Capture by reference
[&x]() { x++; }
[&]() { x++; y++; }

// With return type
[]() -> int { return 42; }

// Mutable
[x]() mutable { x++; }  // Can modify captured by value
```

## Range-Based For Loop

```cpp
std::vector<int> v = {1, 2, 3};

// By value
for (int x : v) {
    std::cout << x;
}

// By reference
for (auto& x : v) {
    x *= 2;
}
```

## Other C++11 Features

```cpp
// nullptr
int* ptr = nullptr;

// enum class
enum class Color { Red, Green, Blue };

// noexcept
void func() noexcept;

// constexpr
constexpr int square(int x) { return x * x; }

// static_assert
static_assert(sizeof(int) == 4, "int must be 4 bytes");

// std::function
std::function<int(int)> f = [](int x) { return x * 2; };
```
""",
    "questions": lesson1_questions
}

data['units'][9]['lessons'][0].update(lesson1)
print("✅ Lesson 1: C++11 Features - 30 questions (21 code)")

# Due to length, save and continue
print("\n📊 Progress: 1 of 5 lessons complete (30 of 150 questions)")
print("🔄 Continuing with remaining 4 lessons...")

with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n✅ Checkpoint saved. Continue with Lessons 2-5...")