#!/usr/bin/env python3
"""
Build Unit 12: Modern C++ Features (Practical Applications)
6 lessons with 25 questions each (150 total)
Heavy emphasis on code questions (~70% = 105 code questions)
This unit focuses on practical applications of modern C++ features
"""
import json

print("🚀 Building C++ Unit 12: Modern C++ Features (Practical Applications)")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: auto and Type Deduction
# ============================================================================
lesson1_questions = [
    {
        "id": "cpp-12-1-1", "type": "typing", "question": "When to use auto?", "correctAnswer": ["when type is obvious", "to simplify code", "complex types"], "explanation": "Use auto when type is obvious or complex.", "xp": 5
    },
    {
        "id": "cpp-12-1-2", "type": "typing", "question": "What is type deduction?", "correctAnswer": ["compiler determines type", "automatic type"], "explanation": "Compiler deduces type from initializer.", "xp": 5
    },
    {
        "id": "cpp-12-1-3", "type": "typing", "question": "What does decltype do?", "correctAnswer": ["get type from expression", "type of expression"], "explanation": "decltype returns type of expression.", "xp": 5
    },
    {
        "id": "cpp-12-1-4", "type": "multiple", "question": "Does auto strip references?", "options": ["Yes", "No", "Only for pointers", "Only for const"], "correctAnswer": [0], "explanation": "auto by default strips references.", "xp": 5
    },
    {
        "id": "cpp-12-1-5", "type": "multiple", "question": "How to preserve reference with auto?", "options": ["auto&", "auto&&", "const auto", "auto"], "correctAnswer": [0], "explanation": "auto& preserves reference.", "xp": 5
    },
    {
        "id": "cpp-12-1-6", "type": "code", "question": "Use auto with iterator.",
        "correctAnswer": ["auto it = v.begin();", "for (auto it = container.begin(); it != container.end(); ++it)"],
        "explanation": "auto simplifies iterator type declaration.", "xp": 15
    },
    {
        "id": "cpp-12-1-7", "type": "code", "question": "Use auto with range-based for.",
        "correctAnswer": ["for (auto& x : v)", "for (const auto& elem : container)"],
        "explanation": "auto deduces element type in range-based for.", "xp": 15
    },
    {
        "id": "cpp-12-1-8", "type": "code", "question": "Use auto with complex type.",
        "correctAnswer": ["auto result = std::make_tuple(1, 'a', 3.14);", "auto lambda = [](int x) { return x * 2; };"],
        "explanation": "auto simplifies complex type declarations.", "xp": 15
    },
    {
        "id": "cpp-12-1-9", "type": "code", "question": "Preserve reference with auto.",
        "correctAnswer": ["auto& ref = value;", "for (auto& element : container)"],
        "explanation": "auto& preserves reference.", "xp": 15
    },
    {
        "id": "cpp-12-1-10", "type": "code", "question": "Preserve const with auto.",
        "correctAnswer": ["const auto& cref = value;", "for (const auto& elem : container)"],
        "explanation": "const auto& preserves const reference.", "xp": 15
    },
    {
        "id": "cpp-12-1-11", "type": "code", "question": "Use decltype for type.",
        "correctAnswer": ["decltype(x) y = 5;", "using VecType = decltype(v);"],
        "explanation": "decltype gets type from expression.", "xp": 15
    },
    {
        "id": "cpp-12-1-12", "type": "code", "question": "Use auto with function return.",
        "correctAnswer": ["auto func() -> int { return 42; }", "auto get() { return value; }"],
        "explanation": "auto with trailing return type.", "xp": 15
    },
    {
        "id": "cpp-12-1-13", "type": "code", "question": "Use auto&& with universal reference.",
        "correctAnswer": ["template<typename T> void func(T&& arg)", "auto&& ref = expr;"],
        "explanation": "auto&& is universal reference.", "xp": 15
    },
    {
        "id": "cpp-12-1-14", "type": "code", "question": "Deduced type in template.",
        "correctAnswer": ["template<typename T> T func(T t)", "template<auto N> void func()"],
        "explanation": "Auto can be used in non-type template parameters.", "xp": 15
    },
    {
        "id": "cpp-12-1-15", "type": "code", "question": "Use auto with unique_ptr.",
        "correctAnswer": ["auto ptr = std::make_unique<int>(42);"],
        "explanation": "auto simplifies unique_ptr type.", "xp": 15
    },
    {
        "id": "cpp-12-1-16", "type": "code", "question": "Auto with pair return.",
        "correctAnswer": ["auto result = map.insert({key, value});", "auto [it, success] = map.insert({k, v});"],
        "explanation": "auto with pair from map insert.", "xp": 15
    },
    {
        "id": "cpp-12-1-17", "type": "code", "question": "Use auto in generic lambda.",
        "correctAnswer": ["[](auto x) { return x * 2; }", "auto lambda = [](auto&& x) { return x; };"],
        "explanation": "auto in generic lambda parameters.", "xp": 15
    },
    {
        "id": "cpp-12-1-18", "type": "code", "question": "decltype(auto) for perfect forwarding.",
        "correctAnswer": ["decltype(auto) func() { return value; }"],
        "explanation": "decltype(auto) preserves value category.", "xp": 15
    },
    {
        "id": "cpp-12-1-19", "type": "code", "question": "Use auto with struct.",
        "correctAnswer": ["auto result = Struct{1, 2, 3};", "struct S { int a, b; }; auto s = S{1, 2};"],
        "explanation": "auto with struct initialization.", "xp": 15
    },
    {
        "id": "cpp-12-1-20", "type": "code", "question": "Auto with const pointer.",
        "correctAnswer": ["auto ptr = &value;", "const auto* ptr = &value;"],
        "explanation": "auto deduces pointer type.", "xp": 15
    },
    {
        "id": "cpp-12-1-21", "type": "code", "question": "Use auto in for_each.",
        "correctAnswer": ["std::for_each(v.begin(), v.end(), [](auto& x) { x *= 2; });"],
        "explanation": "auto in algorithm lambda.", "xp": 15
    },
    {
        "id": "cpp-12-1-22", "type": "code", "question": "Auto with nested type.",
        "correctAnswer": ["auto it = container.begin();", "auto value = map.find(key)->second;"],
        "explanation": "auto with nested types simplifies code.", "xp": 15
    },
    {
        "id": "cpp-12-1-23", "type": "code", "question": "Use auto with make_tuple.",
        "correctAnswer": ["auto t = std::make_tuple(1, 'a', 3.14);"],
        "explanation": "auto with tuple simplifies type.", "xp": 15
    },
    {
        "id": "cpp-12-1-24", "type": "code", "question": "Deduced type with initializer list.",
        "correctAnswer": ["auto list = {1, 2, 3, 4, 5};"],
        "explanation": "auto deduces initializer_list<int>.", "xp": 15
    },
    {
        "id": "cpp-12-1-25", "type": "code", "question": "Auto with function pointer.",
        "correctAnswer": ["auto funcPtr = &myFunction;", "auto lambda = [](int x) { return x; };"],
        "explanation": "auto with function pointer/lambda.", "xp": 15
    }
]

lesson1 = {
    "id": 62, "title": "auto and Type Deduction", "unitTitle": "12. Modern C++ Features", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# auto and Type Deduction in Practice

Practical uses of automatic type deduction.

## When to Use auto

```cpp
// Complex types
auto it = container.begin();
auto result = std::make_tuple(1, 'a', 3.14);

// Range-based for
for (auto& element : container) {
    element *= 2;
}

// Generic code
template<typename T>
void process(T&& value) {
    auto&& ref = value;  // Universal reference
}
```

## Preserving Qualifiers

```cpp
// Preserve reference
auto& ref = value;

// Preserve const
const auto& cref = value;

// Perfect forwarding
auto&& uref = expr;

// decltype(auto) for return types
decltype(auto) get() {
    return value;  // Preserves reference
}
```

## Best Practices

```cpp
// ✓ Good: Type is obvious
auto count = v.size();

// ✓ Good: Complex type
auto it = std::find(v.begin(), v.end(), target);

// ✗ Avoid: Type not clear
auto result = someFunction();  // What does this return?
```
""",
    "questions": lesson1_questions
}

data['units'][11]['lessons'][0].update(lesson1)
print("✅ Lesson 1: auto and Type Deduction - 25 questions (20 code)")

print("\n📊 Progress: 1 of 6 lessons complete (25 of 150 questions)")
print("⏳ Due to token limits, building remaining lessons in next batch...")

with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n✅ Checkpoint saved. This unit focuses on practical applications of modern C++ features.")