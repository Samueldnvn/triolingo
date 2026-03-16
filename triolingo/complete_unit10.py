#!/usr/bin/env python3
"""
Complete Unit 10 Lessons 2-5
Heavy emphasis on code questions
"""
import json

print("🚀 Completing C++ Unit 10 Lessons 2-5...")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 2: C++14 Features
# ============================================================================
lesson2 = {
    "id": 53, "title": "C++14 Features", "unitTitle": "10. Modern C++ Features", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": "# C++14 Features\n\nC++14 is a minor update with useful improvements.\n\n**Generic lambdas:**\n```cpp\nauto lambda = [](auto x) { return x * 2; };  // Works with any type\nlambda(5);       // int\nlambda(3.14);    // double\n```\n\n**Relaxed constexpr:**\n```cpp\nconstexpr int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);  // Now allowed in C++14\n}\n```\n\n**Binary literals:**\n```cpp\nint value = 0b1010;  // Binary literal\n```",
    "questions": [
        {"id": "cpp-10-2-1", "type": "typing", "question": "What are generic lambdas in C++14?", "correctAnswer": ["lambdas with auto parameters", "type parameterized lambdas"], "explanation": "Generic lambdas use auto for parameters to work with any type.", "xp": 5},
        {"id": "cpp-10-2-2", "type": "typing", "question": "What are binary literals?", "correctAnswer": ["literals in base 2", "binary notation"], "explanation": "Binary literals use 0b prefix for base-2 numbers.", "xp": 5},
        {"id": "cpp-10-2-3", "type": "typing", "question": "What is relaxed constexpr in C++14?", "correctAnswer": ["constexpr with more allowed features", "less restrictions on constexpr"], "explanation": "C++14 relaxes constexpr restrictions allowing loops and conditionals.", "xp": 5},
        {"id": "cpp-10-2-4", "type": "multiple", "question": "Can constexpr functions have multiple statements in C++14?", "options": ["Yes", "No", "Only with return", "Only with const"], "correctAnswer": [0], "explanation": "C++14 allows multiple statements in constexpr.", "xp": 5},
        {"id": "cpp-10-2-5", "type": "multiple", "question": "How to write binary literal?", "options": ["0b1010", "1010b", "0x1010", "B1010"], "correctAnswer": [0], "explanation": "Binary literals use 0b prefix.", "xp": 5},
        {"id": "cpp-10-2-6", "type": "code", "question": "Create generic lambda.", "correctAnswer": ["[](auto x) { return x * 2; }", "auto lambda = [](auto x) { return x * 2; };"], "xp": 15},
        {"id": "cpp-10-2-7", "type": "code", "question": "Use binary literal.", "correctAnswer": ["int x = 0b1010;", "0b11111111"], "xp": 15},
        {"id": "cpp-10-2-8", "type": "code", "question": "Create constexpr with if statement.", "correctAnswer": ["constexpr int abs(int x) { if (x < 0) return -x; return x; }"], "xp": 15},
        {"id": "cpp-10-2-9", "type": "code", "question": "Use auto lambda return type.", "correctAnswer": ["[]() -> auto { return 42; }"], "xp": 15},
        {"id": "cpp-10-2-10", "type": "code", "question": "Make lambda variable template.", "correctAnswer": ["template<typename T> constexpr auto lambda = [](T x) { return x * 2; };"], "xp": 15},
        {"id": "cpp-10-2-11", "type": "code", "question": "Use std::make_unique.", "correctAnswer": ["auto ptr = std::make_unique<int>(42);"], "xp": 15},
        {"id": "cpp-10-2-12", "type": "code", "question": "Use digit separator.", "correctAnswer": ["int million = 1'000'000;", "double pi = 3.14159'26535'89793;"], "xp": 15},
        {"id": "cpp-10-2-13", "type": "code", "question": "Generic lambda with multiple parameters.", "correctAnswer": ["[](auto x, auto y) { return x + y; }"], "xp": 15},
        {"id": "cpp-10-2-14", "type": "code", "question": "constexpr function with loop.", "correctAnswer": ["constexpr int sum(int n) { int s = 0; for (int i = 1; i <= n; ++i) s += i; return s; }"], "xp": 15},
        {"id": "cpp-10-2-15", "type": "code", "question": "Use auto in lambda capture.", "correctAnswer": ["[auto& x]() { x++; }", "[auto x = value]() { return x; }"], "xp": 15},
        {"id": "cpp-10-2-16", "type": "code", "question": "Binary literal for 255.", "correctAnswer": ["int x = 0b11111111;"], "xp": 15},
        {"id": "cpp-10-2-17", "type": "code", "question": "constexpr fibonacci.", "correctAnswer": ["constexpr int fib(int n) { if (n <= 1) return n; return fib(n-1) + fib(n-2); }"], "xp": 15},
        {"id": "cpp-10-2-18", "type": "code", "question": "Use std::cbegin/cend.", "correctAnswer": ["for (auto it = std::cbegin(v); it != std::cend(v); ++it)"], "xp": 15},
        {"id": "cpp-10-2-19", "type": "code", "question": "Generic lambda with decltype.", "correctAnswer": ["[](auto&& x) -> decltype(auto) { return x; }"], "xp": 15},
        {"id": "cpp-10-2-20", "type": "code", "question": "Use std::quoted.", "correctAnswer": ["std::cout << std::quoted(str);"], "xp": 15},
        {"id": "cpp-10-2-21", "type": "code", "question": "constexpr member function.", "correctAnswer": ["constexpr int getValue() const { return value; }"], "xp": 15},
        {"id": "cpp-10-2-22", "type": "code", "question": "Binary literal for 16.", "correctAnswer": ["int x = 0b10000;"], "xp": 15},
        {"id": "cpp-10-2-23", "type": "code", "question": "Variable template.", "correctAnswer": ["template<typename T> constexpr T pi = T(3.14159);"], "xp": 15},
        {"id": "cpp-10-2-24", "type": "code", "question": "Generic lambda in algorithm.", "correctAnswer": ["std::sort(v.begin(), v.end(), [](auto a, auto b) { return a < b; });"], "xp": 15},
        {"id": "cpp-10-2-25", "type": "code", "question": "constexpr with switch.", "correctAnswer": ["constexpr int toInt(char c) { switch (c) { case '0': return 0; } }"], "xp": 15},
        {"id": "cpp-10-2-26", "type": "code", "question": "Use std::exchange.", "correctAnswer": ["auto old = std::exchange(value, new_value);"], "xp": 15},
        {"id": "cpp-10-2-27", "type": "code", "question": "Generic lambda perfect forwarding.", "correctAnswer": ["[](auto&&... args) { func(std::forward<decltype(args)>(args)...); }"], "xp": 15},
        {"id": "cpp-10-2-28", "type": "code", "question": "Binary literal with hex.", "correctAnswer": ["int x = 0b1010 | 0xF0F0;"], "xp": 15},
        {"id": "cpp-10-2-29", "type": "code", "question": "constexpr variable.", "correctAnswer": ["constexpr int max = 100;", "constexpr double pi = 3.14159;"], "xp": 15},
        {"id": "cpp-10-2-30", "type": "code", "question": "Generic lambda with return.", "correctAnswer": ["[](auto x, auto y) { if (x > y) return x; return y; }"], "xp": 15}
    ]
}

# ============================================================================
# LESSON 3: C++17 Features
# ============================================================================
lesson3 = {
    "id": 54, "title": "C++17 Features", "unitTitle": "10. Modern C++ Features", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": "# C++17 Features\n\nC++17 adds significant language and library improvements.\n\n**Structured bindings:**\n```cpp\nstd::pair<int, string> p = {42, \"hello\"};\nauto [num, str] = p;  // Unpack pair\n\nstd::map<string, int> m;\nfor (auto [key, value] : m) {\n    // Access key and value directly\n}\n```\n\n**if constexpr:**\n```cpp\ntemplate<typename T>\nauto get_value(T t) {\n    if constexpr (std::is_pointer_v<T>) {\n        return *t;  // Only compiled if T is pointer\n    } else {\n        return t;\n    }\n}\n```\n\n**Fold expressions:**\n```cpp\ntemplate<typename... Args>\nauto sum(Args... args) {\n    return (args + ... + 0);  // Binary left fold\n}\n```",
    "questions": [
        {"id": "cpp-10-3-1", "type": "typing", "question": "What are structured bindings in C++17?", "correctAnswer": ["unpack tuple/pair into variables", "decompose composite types"], "explanation": "Structured bindings unpack tuple/pair into separate variables.", "xp": 5},
        {"id": "cpp-10-3-2", "type": "typing", "question": "What is if constexpr?", "correctAnswer": ["compile-time conditional", "constexpr if statement"], "explanation": "if constexpr evaluates condition at compile time.", "xp": 5},
        {"id": "cpp-10-3-3", "type": "typing", "question": "What are fold expressions?", "correctAnswer": ["operate on parameter pack", "variadic template expansion"], "explanation": "Fold expressions apply binary operator over parameter pack.", "xp": 5},
        {"id": "cpp-10-3-4", "type": "multiple", "question": "Can structured bindings work with custom types?", "options": ["Yes", "No", "Only with tuples", "Only with pairs"], "correctAnswer": [0], "explanation": "Any type with std::tuple_size and get() works.", "xp": 5},
        {"id": "cpp-10-3-5", "type": "multiple", "question": "What is std::optional?", "options": ["May contain value or not", "Always contains value", "Always empty", "Pointer wrapper"], "correctAnswer": [0], "explanation": "optional may contain a value or be empty.", "xp": 5},
        {"id": "cpp-10-3-6", "type": "code", "question": "Use structured binding with pair.", "correctAnswer": ["auto [a, b] = std::make_pair(1, 2);", "auto [key, value] = pair;"], "xp": 15},
        {"id": "cpp-10-3-7", "type": "code", "question": "Use structured binding with tuple.", "correctAnswer": ["auto [x, y, z] = std::make_tuple(1, 2, 3);"], "xp": 15},
        {"id": "cpp-10-3-8", "type": "code", "question": "Use if constexpr.", "correctAnswer": ["if constexpr (condition) { } else { }"], "xp": 15},
        {"id": "cpp-10-3-9", "type": "code", "question": "Create fold expression.", "correctAnswer": ["(args + ... + 0)", "(args * ... * 1)"], "xp": 15},
        {"id": "cpp-10-3-10", "type": "code", "question": "Use std::optional.", "correctAnswer": ["std::optional<int> opt = 42;", "if (opt) { }"], "xp": 15},
        {"id": "cpp-10-3-11", "type": "code", "question": "Use std::variant.", "correctAnswer": ["std::variant<int, string> v = 42;", "std::get<int>(v);"], "xp": 15},
        {"id": "cpp-10-3-12", "type": "code", "question": "Use std::any.", "correctAnswer": ["std::any a = 42;", "auto val = std::any_cast<int>(a);"], "xp": 15},
        {"id": "cpp-10-3-13", "type": "code", "question": "Structured binding with map iteration.", "correctAnswer": ["for (auto [key, value] : map)", "for (const auto& [key, value] : m)"], "xp": 15},
        {"id": "cpp-10-3-14", "type": "code", "question": "if constexpr with type check.", "correctAnswer": ["if constexpr (std::is_integral_v<T>)"], "xp": 15},
        {"id": "cpp-10-3-15", "type": "code", "question": "Right fold expression.", "correctAnswer": ["(0 + ... + args)", "(1 * ... * args)"], "xp": 15},
        {"id": "cpp-10-3-16", "type": "code", "question": "Optional with value_or.", "correctAnswer": ["int val = opt.value_or(0);"], "xp": 15},
        {"id": "cpp-10-3-17", "type": "code", "question": "Variant with visit.", "correctAnswer": ["std::visit([](auto&& arg) { }, variant);"], "xp": 15},
        {"id": "cpp-10-3-18", "type": "code", "question": "Structured binding with array.", "correctAnswer": ["auto [x, y, z] = arr;", "int arr[3] = {1, 2, 3}; auto [a, b, c] = arr;"], "xp": 15},
        {"id": "cpp-10-3-19", "type": "code", "question": "Fold expression with lambda.", "correctAnswer": ["(lambda(args), ...)", "(print(args), ...)"], "xp": 15},
        {"id": "cpp-10-3-20", "type": "code", "question": "Optional has_value.", "correctAnswer": ["if (opt.has_value())", "bool has = opt.has_value();"], "xp": 15},
        {"id": "cpp-10-3-21", "type": "code", "question": "Variant holds_alternative.", "correctAnswer": ["if (std::holds_alternative<int>(v))"], "xp": 15},
        {"id": "cpp-10-3-22", "type": "code", "question": "Structured binding reference.", "correctAnswer": ["auto& [x, y] = pair;", "auto& [first, second] = std::tie(a, b);"], "xp": 15},
        {"id": "cpp-10-3-23", "type": "code", "question": "std::optional with emplace.", "correctAnswer": ["opt.emplace(42);"], "xp": 15},
        {"id": "cpp-10-3-24", "type": "code", "question": "if constexpr with else.", "correctAnswer": ["if constexpr (condition) { } else if constexpr (other) { } else { }"], "xp": 15},
        {"id": "cpp-10-3-25", "type": "code", "question": "Fold expression with comparison.", "correctAnswer": ["((args < others) && ...)", "(args > ...)", "((args == 0) || ...)"], "xp": 15},
        {"id": "cpp-10-3-26", "type": "code", "question": "std::nullopt.", "correctAnswer": ["std::optional<int> opt = std::nullopt;"], "xp": 15},
        {"id": "cpp-10-3-27", "type": "code", "question": "Structured binding with const.", "correctAnswer": ["const auto [x, y] = pair;", "for (const auto& [k, v] : m)"], "xp": 15},
        {"id": "cpp-10-3-28", "type": "code", "question": "std::make_optional.", "correctAnswer": ["auto opt = std::make_optional(42);"], "xp": 15},
        {"id": "cpp-10-3-29", "type": "code", "question": "Fold expression unary.", "correctAnswer": ["(... || args)", "(... && args)"], "xp": 15},
        {"id": "cpp-10-3-30", "type": "code", "question": "Variant with index.", "correctAnswer": ["size_t index = v.index();"], "xp": 15}
    ]
}

# ============================================================================
# LESSON 4: C++20 Features
# ============================================================================
lesson4 = {
    "id": 55, "title": "C++20 Features", "unitTitle": "10. Modern C++ Features", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": "# C++20 Features\n\nC++20 is a major update with four new features.\n\n**Concepts:**\n```cpp\ntemplate<typename T>\nconcept Integral = std::is_integral_v<T>;\n\ntemplate<Integral T>\nT add(T a, T b) {\n    return a + b;\n}\n```\n\n**Ranges:**\n```cpp\n#include <ranges>\nstd::vector<int> v = {1, 2, 3, 4, 5};\nauto result = v | std::views::filter([](int x) { return x % 2 == 0; })\n                 | std::views::transform([](int x) { return x * 2; });\n```\n\n**Modules:**\n```cpp\n// module.cppm\nexport module mymodule;\nexport int func() { return 42; }\n\n// main.cpp\nimport mymodule;\n```\n\n**Coroutines:**\n```cpp\n#include <coroutine>\n\nGenerator range(int start, int end) {\n    while (start < end) {\n        co_yield start++;\n    }\n}\n```",
    "questions": [
        {"id": "cpp-10-4-1", "type": "typing", "question": "What are concepts in C++20?", "correctAnswer": ["named constraints for templates", "template requirements"], "explanation": "Concepts name template constraints for better error messages.", "xp": 5},
        {"id": "cpp-10-4-2", "type": "typing", "question": "What are ranges in C++20?", "correctAnswer": ["composable view algorithms", "pipeline operations"], "explanation": "Ranges allow composable pipeline operations on sequences.", "xp": 5},
        {"id": "cpp-10-4-3", "type": "typing", "question": "What are modules in C++20?", "correctAnswer": ["replacement for header files", "import system"], "explanation": "Modules replace header file includes.", "xp": 5},
        {"id": "cpp-10-4-4", "type": "multiple", "question": "What keyword starts a coroutine?", "options": ["co_await", "co_return", "co_yield", "All of these"], "correctAnswer": [3], "explanation": "Coroutines use co_await, co_return, co_yield keywords.", "xp": 5},
        {"id": "cpp-10-4-5", "type": "multiple", "question": "What is the spaceship operator?", "options": ["<=>", "=:=", "===", "<==>"], "correctAnswer": [0], "explanation": "<=> is three-way comparison operator.", "xp": 5},
        {"id": "cpp-10-4-6", "type": "code", "question": "Define concept.", "correctAnswer": ["template<typename T> concept Integral = std::is_integral_v<T>;"], "xp": 15},
        {"id": "cpp-10-4-7", "type": "code", "question": "Use concept with template.", "correctAnswer": ["template<Integral T>", "template<typename T> requires Integral<T>"], "xp": 15},
        {"id": "cpp-10-4-8", "type": "code", "question": "Use ranges filter.", "correctAnswer": ["auto filtered = v | std::views::filter([](int x) { return x > 0; });"], "xp": 15},
        {"id": "cpp-10-4-9", "type": "code", "question": "Use ranges transform.", "correctAnswer": ["auto transformed = v | std::views::transform([](int x) { return x * 2; });"], "xp": 15},
        {"id": "cpp-10-4-10", "type": "code", "question": "Import module.", "correctAnswer": ["import mymodule;", "import std;"], "xp": 15},
        {"id": "cpp-10-4-11", "type": "code", "question": "Export module.", "correctAnswer": ["export module mymodule;", "export int func();"], "xp": 15},
        {"id": "cpp-10-4-12", "type": "code", "question": "Use co_yield.", "correctAnswer": ["co_yield value;", "while (i < 10) { co_yield i++; }"], "xp": 15},
        {"id": "cpp-10-4-13", "type": "code", "question": "Use co_await.", "correctAnswer": ["auto result = co_await async_func();"], "xp": 15},
        {"id": "cpp-10-4-14", "type": "code", "question": "Use co_return.", "correctAnswer": ["co_return 42;", "co_return value;"], "xp": 15},
        {"id": "cpp-10-4-15", "type": "code", "question": "Define spaceship operator.", "correctAnswer": ["auto operator<=>(const MyClass&) const = default;"], "xp": 15},
        {"id": "cpp-10-4-16", "type": "code", "question": "Use requires clause.", "correctAnswer": ["template<typename T> requires std::integral<T> void func(T t);"], "xp": 15},
        {"id": "cpp-10-4-17", "type": "code", "question": "Ranges take.", "correctAnswer": ["auto first5 = v | std::views::take(5);"], "xp": 15},
        {"id": "cpp-10-4-18", "type": "code", "question": "Ranges drop.", "correctAnswer": ["auto skip5 = v | std::views::drop(5);"], "xp": 15},
        {"id": "cpp-10-4-19", "type": "code", "question": "Concept with requires expression.", "correctAnswer": ["template<typename T> concept Addable = requires(T t) { t + t; };"], "xp": 15},
        {"id": "cpp-10-4-20", "type": "code", "question": "std::span.", "correctAnswer": ["std::span<int> s(arr);", "void func(std::span<int> s)"], "xp": 15},
        {"id": "cpp-10-4-21", "type": "code", "question": "std::format.", "correctAnswer": ["std::format(\"{}\", 42)", "std::format(\"{} = {}\", key, value)"], "xp": 15},
        {"id": "cpp-10-4-22", "type": "code", "question": "consteval function.", "correctAnswer": ["consteval int square(int x) { return x * x; }"], "xp": 15},
        {"id": "cpp-10-4-23", "type": "code", "question": "constinit variable.", "correctAnswer": ["constinit int value = 42;", "static constinit std::string s = \"hello\";"], "xp": 15},
        {"id": "cpp-10-4-24", "type": "code", "question": "requires in function signature.", "correctAnswer": ["void func(auto x) requires std::integral<decltype(x)>"], "xp": 15},
        {"id": "cpp-10-4-25", "type": "code", "question": "Ranges zip.", "correctAnswer": ["auto zipped = std::views::zip(v1, v2);"], "xp": 15},
        {"id": "cpp-10-4-26", "type": "code", "question": "Concept combination.", "correctAnswer": ["template<typename T> concept Number = std::integral<T> || std::floating_point<T>;"], "xp": 15},
        {"id": "cpp-10-4-27", "type": "code", "question": "std::jthread.", "correctAnswer": ["std::jthread t(func, args);", "t.join();"], "xp": 15},
        {"id": "cpp-10-4-28", "type": "code", "question": "Designated initializers.", "correctAnswer": ["Point p = {.x = 10, .y = 20};"], "xp": 15},
        {"id": "cpp-10-4-29", "type": "code", "question": "using enum.", "correctAnswer": ["using enum Color;", "using enum std::byte;"], "xp": 15},
        {"id": "cpp-10-4-30", "type": "code", "question": "Three-way comparison with custom.", "correctAnswer": ["std::strong_ordering operator<=>(const MyClass& other) const"], "xp": 15}
    ]
}

# ============================================================================
# LESSON 5: Best Practices and Idioms
# ============================================================================
lesson5 = {
    "id": 56, "title": "Best Practices and Idioms", "unitTitle": "10. Modern C++ Features", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": "# Modern C++ Best Practices\n\n**Prefer:**\n- `auto` over explicit types\n- `make_unique`/`make_shared` over `new`\n- Range-based for over index loops\n- `const`/`constexpr` where possible\n- `std::string_view` over `const string&`\n- `std::span` over pointer+size\n\n**RAII:**\n```cpp\n{\n    std::lock_guard<std::mutex> lock(mtx);\n    // Critical section\n}  // Automatically unlocked\n```\n\n**Rule of Zero:**\n```cpp\nclass MyClass {\n    std::vector<int> data;  // Manages itself\n    std::unique_ptr<Resource> res;  // Manages itself\n};\n```",
    "questions": [
        {"id": "cpp-10-5-1", "type": "typing", "question": "What is Rule of Zero?", "correctAnswer": ["use smart pointers to avoid manual resource management", "no need for custom destructors"], "explanation": "Rule of Zero: use smart pointers, no manual management.", "xp": 5},
        {"id": "cpp-10-5-2", "type": "typing", "question": "When prefer make_unique over new?", "correctAnswer": ["always", "for exception safety", "for unique_ptr"], "explanation": "make_unique is exception-safe and more efficient.", "xp": 5},
        {"id": "cpp-10-5-3", "type": "typing", "question": "What is string_view?", "correctAnswer": ["non-owning string reference", "string view wrapper"], "explanation": "string_view is non-owning reference to string data.", "xp": 5},
        {"id": "cpp-10-5-4", "type": "multiple", "question": "Should you use new in modern C++?", "options": ["Rarely, use smart pointers", "Always", "Never", "Only for arrays"], "correctAnswer": [0], "explanation": "Prefer smart pointers over raw new.", "xp": 5},
        {"id": "cpp-10-5-5", "type": "multiple", "question": "When use consteval?", "options": ["Must be compile-time", "Can be runtime", "Never", "Only for lambdas"], "correctAnswer": [0], "explanation": "consteval requires compile-time evaluation.", "xp": 5},
        {"id": "cpp-10-5-6", "type": "code", "question": "Use make_unique.", "correctAnswer": ["auto ptr = std::make_unique<int>(42);"], "xp": 15},
        {"id": "cpp-10-5-7", "type": "code", "question": "Use make_shared.", "correctAnswer": ["auto ptr = std::make_shared<int>(42);"], "xp": 15},
        {"id": "cpp-10-5-8", "type": "code", "question": "Use string_view parameter.", "correctAnswer": ["void func(std::string_view str)", "void print(std::string_view text)"], "xp": 15},
        {"id": "cpp-10-5-9", "type": "code", "question": "Use span parameter.", "correctAnswer": ["void func(std::span<int> data)", "void process(std::span<const double> values)"], "xp": 15},
        {"id": "cpp-10-5-10", "type": "code", "question": "Range-based for with auto&.", "correctAnswer": ["for (auto& x : v)", "for (auto& element : container)"], "xp": 15},
        {"id": "cpp-10-5-11", "type": "code", "question": "Use const where possible.", "correctAnswer": ["const int value = 42;", "const auto& ref = value;"], "xp": 15},
        {"id": "cpp-10-5-12", "type": "code", "question": "Use constexpr where possible.", "correctAnswer": ["constexpr int max = 100;", "constexpr double pi = 3.14159;"], "xp": 15},
        {"id": "cpp-10-5-13", "type": "code", "question": "Use lock_guard for RAII.", "correctAnswer": ["std::lock_guard<std::mutex> lock(mtx);"], "xp": 15},
        {"id": "cpp-10-5-14", "type": "code", "question": "Use unique_lock.", "correctAnswer": ["std::unique_lock<std::mutex> lock(mtx);"], "xp": 15},
        {"id": "cpp-10-5-15", "type": "code", "question": "Avoid raw pointers with smart pointer.", "correctAnswer": ["std::unique_ptr<int> ptr = std::make_unique<int>(42);"], "xp": 15},
        {"id": "cpp-10-5-16", "type": "code", "question": "Use std::array over C array.", "correctAnswer": ["std::array<int, 10> arr;", "std::array<double, 5> values;"], "xp": 15},
        {"id": "cpp-10-5-17", "type": "code", "question": "Pass by const reference.", "correctAnswer": ["void func(const std::string& str)", "void process(const std::vector<int>& v)"], "xp": 15},
        {"id": "cpp-10-5-18", "type": "code", "question": "Use emplace_back.", "correctAnswer": ["v.emplace_back(1, 2, 3);", "v.emplace_back(args);"], "xp": 15},
        {"id": "cpp-10-5-19", "type": "code", "question": "Use std::chrono for time.", "correctAnswer": ["auto now = std::chrono::system_clock::now();"], "xp": 15},
        {"id": "cpp-10-5-20", "type": "code", "question": "Use std::filesystem.", "correctAnswer": ["std::filesystem::path p(\"file.txt\");", "if (std::filesystem::exists(p))"], "xp": 15},
        {"id": "cpp-10-5-21", "type": "code", "question": "Use enum class over enum.", "correctAnswer": ["enum class Color { Red, Green, Blue };"], "xp": 15},
        {"id": "cpp-10-5-22", "type": "code", "question": "Use nullptr over NULL.", "correctAnswer": ["int* ptr = nullptr;"], "xp": 15},
        {"id": "cpp-10-5-23", "type": "code", "question": "Use std::optional for maybe values.", "correctAnswer": ["std::optional<int> find(const std::vector<int>& v, int target)"], "xp": 15},
        {"id": "cpp-10-5-24", "type": "code", "question": "Use std::variant for alternatives.", "correctAnswer": ["std::variant<int, std::string, double> value;"], "xp": 15},
        {"id": "cpp-10-5-25", "type": "code", "question": "Use consteval for compile-time only.", "correctAnswer": ["consteval int square(int x) { return x * x; }"], "xp": 15},
        {"id": "cpp-10-5-26", "type": "code", "question": "Use std::string_view for temporary strings.", "correctAnswer": ["std::string_view sv = \"temporary\";"], "xp": 15},
        {"id": "cpp-10-5-27", "type": "code", "question": "Use std::move for large objects.", "correctAnswer": ["result = std::move(temp);", "return std::move(obj);"], "xp": 15},
        {"id": "cpp-10-5-28", "type": "code", "question": "Use [[nodiscard]] for important returns.", "correctAnswer": ["[[nodiscard]] int get_value();"], "xp": 15},
        {"id": "cpp-10-5-29", "type": "code", "question": "Use explicit for constructors.", "correctAnswer": ["explicit MyClass(int value);"], "xp": 15},
        {"id": "cpp-10-5-30", "type": "code", "question": "Use noexcept for no-throw functions.", "correctAnswer": ["void func() noexcept;", "int getValue() const noexcept;"], "xp": 15}
    ]
}

# Add all lessons to data
data['units'][9]['lessons'][1].update(lesson2)
print("✅ Lesson 2: C++14 Features - 30 questions (21 code)")

data['units'][9]['lessons'][2].update(lesson3)
print("✅ Lesson 3: C++17 Features - 30 questions (21 code)")

data['units'][9]['lessons'][3].update(lesson4)
print("✅ Lesson 4: C++20 Features - 30 questions (21 code)")

data['units'][9]['lessons'][4].update(lesson5)
print("✅ Lesson 5: Best Practices and Idioms - 30 questions (21 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 10 Complete: All 5 lessons with 30 questions each (150 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~105 (70%)")
print("   - Type-in questions: ~30 (20%)")
print("   - Multiple-choice: ~15 (10%)")