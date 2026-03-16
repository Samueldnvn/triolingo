// C++ Unit 12 - Modern C++ Features (Practical Applications)
// Generated from cppCombined.js

window.cppUnit12 = {
  "unitId": "12",
  "unitName": "12. Modern C++ Features",
  "lessons": [
    {
      "id": 62,
      "title": "auto and Type Deduction",
      "unitTitle": "12. Modern C++ Features",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-12-1-1",
          "type": "typing",
          "question": "When to use auto?",
          "correctAnswer": [
            "when type is obvious",
            "to simplify code",
            "complex types"
          ],
          "explanation": "Use auto when type is obvious or complex.",
          "xp": 5
        },
        {
          "id": "cpp-12-1-2",
          "type": "typing",
          "question": "What is type deduction?",
          "correctAnswer": [
            "compiler determines type",
            "automatic type"
          ],
          "explanation": "Compiler deduces type from initializer.",
          "xp": 5
        },
        {
          "id": "cpp-12-1-3",
          "type": "typing",
          "question": "What does decltype do?",
          "correctAnswer": [
            "get type from expression",
            "type of expression"
          ],
          "explanation": "decltype returns type of expression.",
          "xp": 5
        },
        {
          "id": "cpp-12-1-4",
          "type": "multiple",
          "question": "Does auto strip references?",
          "options": [
            "Yes",
            "No",
            "Only for pointers",
            "Only for const"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "auto by default strips references.",
          "xp": 5
        },
        {
          "id": "cpp-12-1-5",
          "type": "multiple",
          "question": "How to preserve reference with auto?",
          "options": [
            "auto&",
            "auto&&",
            "const auto",
            "auto"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "auto& preserves reference.",
          "xp": 5
        },
        {
          "id": "cpp-12-1-6",
          "type": "code",
          "question": "Use auto with iterator.",
          "correctAnswer": [
            "auto it = v.begin();",
            "for (auto it = container.begin(); it != container.end(); ++it)"
          ],
          "explanation": "auto simplifies iterator type declaration.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-7",
          "type": "code",
          "question": "Use auto with range-based for.",
          "correctAnswer": [
            "for (auto& x : v)",
            "for (const auto& elem : container)"
          ],
          "explanation": "auto deduces element type in range-based for.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-8",
          "type": "code",
          "question": "Use auto with complex type.",
          "correctAnswer": [
            "auto result = std::make_tuple(1, 'a', 3.14);",
            "auto lambda = [](int x) { return x * 2; };"
          ],
          "explanation": "auto simplifies complex type declarations.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-9",
          "type": "code",
          "question": "Preserve reference with auto.",
          "correctAnswer": [
            "auto& ref = value;",
            "for (auto& element : container)"
          ],
          "explanation": "auto& preserves reference.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-10",
          "type": "code",
          "question": "Preserve const with auto.",
          "correctAnswer": [
            "const auto& cref = value;",
            "for (const auto& elem : container)"
          ],
          "explanation": "const auto& preserves const reference.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-11",
          "type": "code",
          "question": "Use decltype for type.",
          "correctAnswer": [
            "decltype(x) y = 5;",
            "using VecType = decltype(v);"
          ],
          "explanation": "decltype gets type from expression.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-12",
          "type": "code",
          "question": "Use auto with function return.",
          "correctAnswer": [
            "auto func() -> int { return 42; }",
            "auto get() { return value; }"
          ],
          "explanation": "auto with trailing return type.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-13",
          "type": "code",
          "question": "Use auto&& with universal reference.",
          "correctAnswer": [
            "template<typename T> void func(T&& arg)",
            "auto&& ref = expr;"
          ],
          "explanation": "auto&& is universal reference.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-14",
          "type": "code",
          "question": "Deduced type in template.",
          "correctAnswer": [
            "template<typename T> T func(T t)",
            "template<auto N> void func()"
          ],
          "explanation": "Auto can be used in non-type template parameters.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-15",
          "type": "code",
          "question": "Use auto with unique_ptr.",
          "correctAnswer": [
            "auto ptr = std::make_unique<int>(42);"
          ],
          "explanation": "auto simplifies unique_ptr type.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-16",
          "type": "code",
          "question": "Auto with pair return.",
          "correctAnswer": [
            "auto result = map.insert({key, value});",
            "auto [it, success] = map.insert({k, v});"
          ],
          "explanation": "auto with pair from map insert.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-17",
          "type": "code",
          "question": "Use auto in generic lambda.",
          "correctAnswer": [
            "[](auto x) { return x * 2; }",
            "auto lambda = [](auto&& x) { return x; };"
          ],
          "explanation": "auto in generic lambda parameters.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-18",
          "type": "code",
          "question": "decltype(auto) for perfect forwarding.",
          "correctAnswer": [
            "decltype(auto) func() { return value; }"
          ],
          "explanation": "decltype(auto) preserves value category.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-19",
          "type": "code",
          "question": "Use auto with struct.",
          "correctAnswer": [
            "auto result = Struct{1, 2, 3};",
            "struct S { int a, b; }; auto s = S{1, 2};"
          ],
          "explanation": "auto with struct initialization.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-20",
          "type": "code",
          "question": "Auto with const pointer.",
          "correctAnswer": [
            "auto ptr = &value;",
            "const auto* ptr = &value;"
          ],
          "explanation": "auto deduces pointer type.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-21",
          "type": "code",
          "question": "Use auto in for_each.",
          "correctAnswer": [
            "std::for_each(v.begin(), v.end(), [](auto& x) { x *= 2; });"
          ],
          "explanation": "auto in algorithm lambda.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-22",
          "type": "code",
          "question": "Auto with nested type.",
          "correctAnswer": [
            "auto it = container.begin();",
            "auto value = map.find(key)->second;"
          ],
          "explanation": "auto with nested types simplifies code.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-23",
          "type": "code",
          "question": "Use auto with make_tuple.",
          "correctAnswer": [
            "auto t = std::make_tuple(1, 'a', 3.14);"
          ],
          "explanation": "auto with tuple simplifies type.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-24",
          "type": "code",
          "question": "Deduced type with initializer list.",
          "correctAnswer": [
            "auto list = {1, 2, 3, 4, 5};"
          ],
          "explanation": "auto deduces initializer_list<int>.",
          "xp": 15
        },
        {
          "id": "cpp-12-1-25",
          "type": "code",
          "question": "Auto with function pointer.",
          "correctAnswer": [
            "auto funcPtr = &myFunction;",
            "auto lambda = [](int x) { return x; };"
          ],
          "explanation": "auto with function pointer/lambda.",
          "xp": 15
        }
      ],
      "lessonText": "# auto and Type Deduction in Practice\n\nPractical uses of automatic type deduction.\n\n## When to Use auto\n\n```cpp\n// Complex types\nauto it = container.begin();\nauto result = std::make_tuple(1, 'a', 3.14);\n\n// Range-based for\nfor (auto& element : container) {\n    element *= 2;\n}\n\n// Generic code\ntemplate<typename T>\nvoid process(T&& value) {\n    auto&& ref = value;  // Universal reference\n}\n```\n\n## Preserving Qualifiers\n\n```cpp\n// Preserve reference\nauto& ref = value;\n\n// Preserve const\nconst auto& cref = value;\n\n// Perfect forwarding\nauto&& uref = expr;\n\n// decltype(auto) for return types\ndecltype(auto) get() {\n    return value;  // Preserves reference\n}\n```\n\n## Best Practices\n\n```cpp\n// ✓ Good: Type is obvious\nauto count = v.size();\n\n// ✓ Good: Complex type\nauto it = std::find(v.begin(), v.end(), target);\n\n// ✗ Avoid: Type not clear\nauto result = someFunction();  // What does this return?\n```\n"
    },
    {
      "id": 63,
      "title": "Range-Based Loops",
      "unitTitle": "12. Modern C++ Features",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-12-2-1",
          "type": "typing",
          "question": "What is range-based for loop?",
          "correctAnswer": [
            "iterates over container elements",
            "for each loop"
          ],
          "explanation": "Range-based for iterates over container elements.",
          "xp": 5
        },
        {
          "id": "cpp-12-2-2",
          "type": "typing",
          "question": "How to iterate by reference?",
          "correctAnswer": [
            "for (auto& x : v)",
            "for (Type& elem : container)"
          ],
          "explanation": "Use auto& to iterate by reference.",
          "xp": 5
        },
        {
          "id": "cpp-12-2-3",
          "type": "typing",
          "question": "How to iterate by const reference?",
          "correctAnswer": [
            "for (const auto& x : v)",
            "for (const Type& elem : container)"
          ],
          "explanation": "Use const auto& for read-only iteration.",
          "xp": 5
        },
        {
          "id": "cpp-12-2-4",
          "type": "multiple",
          "question": "Can range-based for work with arrays?",
          "options": [
            "Yes",
            "No",
            "Only with vector",
            "Only with iterators"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Range-based for works with arrays.",
          "xp": 5
        },
        {
          "id": "cpp-12-2-5",
          "type": "multiple",
          "question": "When use by value in range-based for?",
          "options": [
            "Small types, read-only",
            "Large types, modify",
            "Always",
            "Never"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "By value for small read-only types.",
          "xp": 5
        },
        {
          "id": "cpp-12-2-6",
          "type": "code",
          "question": "Range-based for by value.",
          "correctAnswer": [
            "for (int x : v)",
            "for (auto elem : container)"
          ],
          "explanation": "for (auto x : container)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-7",
          "type": "code",
          "question": "Range-based for by reference.",
          "correctAnswer": [
            "for (auto& x : v)",
            "for (Type& elem : container)"
          ],
          "explanation": "for (auto& x : container)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-8",
          "type": "code",
          "question": "Range-based for by const reference.",
          "correctAnswer": [
            "for (const auto& x : v)",
            "for (const Type& elem : container)"
          ],
          "explanation": "for (const auto& x : container)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-9",
          "type": "code",
          "question": "Iterate over map.",
          "correctAnswer": [
            "for (auto& [key, value] : map)",
            "for (const auto& [k, v] : m)"
          ],
          "explanation": "for (const auto& [key, value] : map)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-10",
          "type": "code",
          "question": "Iterate over array.",
          "correctAnswer": [
            "for (int x : arr)",
            "for (auto& elem : array)"
          ],
          "explanation": "for (auto x : array)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-11",
          "type": "code",
          "question": "Iterate with index counter.",
          "correctAnswer": [
            "for (auto [i, elem] : std::views::enumerate(v))",
            "int i = 0; for (auto& x : v) { /* use i */ ++i; }"
          ],
          "explanation": "Need manual counter or C++23 enumerate.",
          "xp": 15
        },
        {
          "id": "cpp-12-2-12",
          "type": "code",
          "question": "Modify elements in loop.",
          "correctAnswer": [
            "for (auto& x : v) { x *= 2; }"
          ],
          "explanation": "Use reference to modify.",
          "xp": 15
        },
        {
          "id": "cpp-12-2-13",
          "type": "code",
          "question": "Iterate over initializer_list.",
          "correctAnswer": [
            "for (auto x : {1, 2, 3, 4, 5})"
          ],
          "explanation": "for (auto x : {1, 2, 3})",
          "xp": 15
        },
        {
          "id": "cpp-12-2-14",
          "type": "code",
          "question": "Iterate over string.",
          "correctAnswer": [
            "for (char c : str)",
            "for (auto& ch : string)"
          ],
          "explanation": "for (auto c : string)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-15",
          "type": "code",
          "question": "Use range-based for with vector.",
          "correctAnswer": [
            "for (auto& x : v)"
          ],
          "explanation": "for (auto& x : vector)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-16",
          "type": "code",
          "question": "Iterate over set.",
          "correctAnswer": [
            "for (auto& x : set)",
            "for (const auto& elem : s)"
          ],
          "explanation": "for (auto x : set)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-17",
          "type": "code",
          "question": "Iterate over deque.",
          "correctAnswer": [
            "for (auto& x : deque)",
            "for (auto& elem : d)"
          ],
          "explanation": "for (auto x : deque)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-18",
          "type": "code",
          "question": "Use structured binding in loop.",
          "correctAnswer": [
            "for (auto& [a, b] : pairs)",
            "for (auto& [key, val] : map)"
          ],
          "explanation": "for (auto& [a, b] : container)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-19",
          "type": "code",
          "question": "Iterate with const.",
          "correctAnswer": [
            "for (const auto& x : v)"
          ],
          "explanation": "for (const auto& x : container)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-20",
          "type": "code",
          "question": "Break from range-based for.",
          "correctAnswer": [
            "for (auto x : v) { if (condition) break; }"
          ],
          "explanation": "break works in range-based for.",
          "xp": 15
        },
        {
          "id": "cpp-12-2-21",
          "type": "code",
          "question": "Continue in range-based for.",
          "correctAnswer": [
            "for (auto x : v) { if (skip) continue; }"
          ],
          "explanation": "continue works in range-based for.",
          "xp": 15
        },
        {
          "id": "cpp-12-2-22",
          "type": "code",
          "question": "Iterate over pair vector.",
          "correctAnswer": [
            "for (auto& [a, b] : pairs)",
            "for (const auto& p : vecOfPairs)"
          ],
          "explanation": "for (auto& [first, second] : vector)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-23",
          "type": "code",
          "question": "Range-based for with temporary.",
          "correctAnswer": [
            "for (auto x : getVector())",
            "for (const auto& x : func())"
          ],
          "explanation": "Works with temporary, binds to const auto&",
          "xp": 15
        },
        {
          "id": "cpp-12-2-24",
          "type": "code",
          "question": "Iterate over list.",
          "correctAnswer": [
            "for (auto& x : list)",
            "for (const auto& elem : l)"
          ],
          "explanation": "for (auto x : list)",
          "xp": 15
        },
        {
          "id": "cpp-12-2-25",
          "type": "code",
          "question": "Nested range-based for.",
          "correctAnswer": [
            "for (auto& row : matrix) { for (auto& elem : row) { } }"
          ],
          "explanation": "Nested loops with range-based for.",
          "xp": 15
        }
      ],
      "lessonText": "# Range-Based Loops\n\nClean iteration over containers.\n\n```cpp\nstd::vector<int> v = {1, 2, 3, 4, 5};\n\n// By value (copy)\nfor (int x : v) {\n    std::cout << x;\n}\n\n// By reference (modify)\nfor (auto& x : v) {\n    x *= 2;\n}\n\n// By const reference (read)\nfor (const auto& x : v) {\n    std::cout << x;\n}\n```"
    },
    {
      "id": 64,
      "title": "Lambda Functions",
      "unitTitle": "12. Modern C++ Features",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-12-3-1",
          "type": "typing",
          "question": "What is lambda?",
          "correctAnswer": [
            "anonymous function",
            "function object"
          ],
          "explanation": "Lambda is anonymous function.",
          "xp": 5
        },
        {
          "id": "cpp-12-3-2",
          "type": "typing",
          "question": "What is capture list?",
          "correctAnswer": [
            "variables captured from scope",
            "[variables to capture]"
          ],
          "explanation": "Capture list specifies variables to capture.",
          "xp": 5
        },
        {
          "id": "cpp-12-3-3",
          "type": "typing",
          "question": "How to capture by value?",
          "correctAnswer": [
            "[x]",
            "[=]",
            "capture by copy"
          ],
          "explanation": "[x] captures by value.",
          "xp": 5
        },
        {
          "id": "cpp-12-3-4",
          "type": "multiple",
          "question": "Can lambda have return type?",
          "options": [
            "Yes",
            "No",
            "Only with auto",
            "Only with ->"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Lambda can have explicit return type.",
          "xp": 5
        },
        {
          "id": "cpp-12-3-5",
          "type": "multiple",
          "question": "What does mutable do?",
          "options": [
            "Allows modifying captured by value",
            "Captures by reference",
            "Const lambda",
            "Static lambda"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "mutable allows modifying captured-by-value variables.",
          "xp": 5
        },
        {
          "id": "cpp-12-3-6",
          "type": "code",
          "question": "Simple lambda returning value.",
          "correctAnswer": [
            "[]() { return 42; }",
            "auto lambda = []() { return value; };"
          ],
          "explanation": "[]() { return 42; }",
          "xp": 15
        },
        {
          "id": "cpp-12-3-7",
          "type": "code",
          "question": "Lambda with parameter.",
          "correctAnswer": [
            "[](int x) { return x * 2; }",
            "auto lambda = [](Type param) { };"
          ],
          "explanation": "[](int x) { return x * 2; }",
          "xp": 15
        },
        {
          "id": "cpp-12-3-8",
          "type": "code",
          "question": "Capture by value.",
          "correctAnswer": [
            "[x]() { return x; }",
            "[x, y]() { return x + y; }"
          ],
          "explanation": "[x] captures by value.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-9",
          "type": "code",
          "question": "Capture by reference.",
          "correctAnswer": [
            "[&x]() { x++; }",
            "[&]() { x++; y++; }"
          ],
          "explanation": "[&x] captures by reference.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-10",
          "type": "code",
          "question": "Capture all by value.",
          "correctAnswer": [
            "[=]() { return x + y; }",
            "[=]() { /* use all vars */ }"
          ],
          "explanation": "[=] captures all by value.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-11",
          "type": "code",
          "question": "Capture all by reference.",
          "correctAnswer": [
            "[&]() { x++; }",
            "[&]() { /* modify all vars */ }"
          ],
          "explanation": "[&] captures all by reference.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-12",
          "type": "code",
          "question": "Lambda with return type.",
          "correctAnswer": [
            "[]() -> int { return 42; }",
            "[](auto x) -> decltype(x) { return x; }"
          ],
          "explanation": "-> type specifies return type.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-13",
          "type": "code",
          "question": "Mutable lambda.",
          "correctAnswer": [
            "[x]() mutable { x++; return x; }"
          ],
          "explanation": "mutable allows modifying captured by value.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-14",
          "type": "code",
          "question": "Generic lambda.",
          "correctAnswer": [
            "[](auto x) { return x * 2; }",
            "auto lambda = [](auto&&... args) { };"
          ],
          "explanation": "auto in parameter makes lambda generic.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-15",
          "type": "code",
          "question": "Lambda in algorithm.",
          "correctAnswer": [
            "std::for_each(v.begin(), v.end(), [](int x) { cout << x; });"
          ],
          "explanation": "Pass lambda to algorithm.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-16",
          "type": "code",
          "question": "Capture this pointer.",
          "correctAnswer": [
            "[this]() { member = 5; }",
            "[this]() { method(); }"
          ],
          "explanation": "[this] captures this pointer.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-17",
          "type": "code",
          "question": "Lambda with multiple captures.",
          "correctAnswer": [
            "[x, &y, z]() { return x + y + z; }"
          ],
          "explanation": "Mix of value and reference captures.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-18",
          "type": "code",
          "question": "Noexcept lambda.",
          "correctAnswer": [
            "[]() noexcept { return 42; }"
          ],
          "explanation": "noexcept lambda doesn't throw.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-19",
          "type": "code",
          "question": "Constexpr lambda.",
          "correctAnswer": [
            "constexpr auto lambda = []() { return 42; }"
          ],
          "explanation": "constexpr lambda can be evaluated at compile time.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-20",
          "type": "code",
          "question": "Lambda as function parameter.",
          "correctAnswer": [
            "void func(std::function<int(int)> lambda)",
            "template<typename F> void func(F f)"
          ],
          "explanation": "Pass lambda as parameter.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-21",
          "type": "code",
          "question": "Capture with initializer.",
          "correctAnswer": [
            "[y = x * 2]() { return y; }",
            "[value = expr]() { }"
          ],
          "explanation": "Capture with init expression.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-22",
          "type": "code",
          "question": "Variadic lambda.",
          "correctAnswer": [
            "[](auto... args) { (cout << ... << args); }",
            "template<typename... Args> auto lambda = [](Args... args) { };"
          ],
          "explanation": "Variadic lambda with fold expression.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-23",
          "type": "code",
          "question": "Lambda returning lambda.",
          "correctAnswer": [
            "[]() { return []() { return 42; }; }"
          ],
          "explanation": "Lambda returning another lambda.",
          "xp": 15
        },
        {
          "id": "cpp-12-3-24",
          "type": "code",
          "question": "Immediate lambda invocation.",
          "correctAnswer": [
            "[]() { return 42; }()",
            "([]() { /* code */ })()"
          ],
          "explanation": "Call lambda immediately with ().",
          "xp": 15
        },
        {
          "id": "cpp-12-3-25",
          "type": "code",
          "question": "Lambda in sort.",
          "correctAnswer": [
            "std::sort(v.begin(), v.end(), [](int a, int b) { return a < b; });"
          ],
          "explanation": "Lambda as comparator.",
          "xp": 15
        }
      ],
      "lessonText": "# Lambda Functions\n\nAnonymous functions for concise code.\n\n```cpp\n// Simple lambda\nauto lambda = []() { return 42; };\n\n// With capture\nint x = 10;\nauto capture = [x]() { return x * 2; };\n\n// With reference capture\nauto refCapture = [&x]() { x++; };\n\n// Generic lambda\nauto generic = [](auto x) { return x * 2; };\n```"
    },
    {
      "id": 65,
      "title": "enum class",
      "unitTitle": "12. Modern C++ Features",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-12-4-1",
          "type": "typing",
          "question": "What is enum class?",
          "correctAnswer": [
            "scoped enum",
            "strongly typed enum"
          ],
          "explanation": "enum class is scoped, strongly-typed enum.",
          "xp": 5
        },
        {
          "id": "cpp-12-4-2",
          "type": "typing",
          "question": "How to access enum class value?",
          "correctAnswer": [
            "Enum::Value",
            "Scope::Value"
          ],
          "explanation": "Use Enum::Value syntax.",
          "xp": 5
        },
        {
          "id": "cpp-12-4-3",
          "type": "typing",
          "question": "What underlying type does enum class use?",
          "correctAnswer": [
            "int by default",
            "can specify",
            "usually int"
          ],
          "explanation": "Default is int, can specify other types.",
          "xp": 5
        },
        {
          "id": "cpp-12-4-4",
          "type": "multiple",
          "question": "Can enum class values be compared?",
          "options": [
            "Yes",
            "No",
            "Only same type",
            "Only with cast"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Enum class values can be compared.",
          "xp": 5
        },
        {
          "id": "cpp-12-4-5",
          "type": "multiple",
          "question": "Can enum class be forward declared?",
          "options": [
            "Yes",
            "No",
            "Only with underlying type",
            "Only in header"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Enum class can be forward declared with underlying type.",
          "xp": 5
        },
        {
          "id": "cpp-12-4-6",
          "type": "code",
          "question": "Define enum class.",
          "correctAnswer": [
            "enum class Color { Red, Green, Blue };",
            "enum class ErrorCode { None, Invalid, NotFound };"
          ],
          "explanation": "enum class Name { Value1, Value2 };",
          "xp": 15
        },
        {
          "id": "cpp-12-4-7",
          "type": "code",
          "question": "Use enum class value.",
          "correctAnswer": [
            "Color c = Color::Red;",
            "ErrorCode err = ErrorCode::Invalid;"
          ],
          "explanation": "Name::Value syntax.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-8",
          "type": "code",
          "question": "Specify underlying type.",
          "correctAnswer": [
            "enum class Color : uint8_t { Red, Green, Blue };",
            "enum class Status : int { OK, Error };"
          ],
          "explanation": "enum class Name : type {}",
          "xp": 15
        },
        {
          "id": "cpp-12-4-9",
          "type": "code",
          "question": "Compare enum class values.",
          "correctAnswer": [
            "if (c == Color::Red)",
            "if (status == Status::OK)"
          ],
          "explanation": "if (value == Enum::Value)",
          "xp": 15
        },
        {
          "id": "cpp-12-4-10",
          "type": "code",
          "question": "Switch on enum class.",
          "correctAnswer": [
            "switch (color) { case Color::Red: break; case Color::Green: break; }"
          ],
          "explanation": "switch on enum class value.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-11",
          "type": "code",
          "question": "Cast enum class to int.",
          "correctAnswer": [
            "int val = static_cast<int>(c);",
            "auto value = static_cast<underlying_type<Color>::type>(c);"
          ],
          "explanation": "static_cast<int>(enum_value)",
          "xp": 15
        },
        {
          "id": "cpp-12-4-12",
          "type": "code",
          "question": "Use enum class in function parameter.",
          "correctAnswer": [
            "void func(Color c)",
            "Status process(ErrorCode err)"
          ],
          "explanation": "Parameter with enum class type.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-13",
          "type": "code",
          "question": "Return enum class from function.",
          "correctAnswer": [
            "Color getColor() { return Color::Red; }",
            "ErrorCode validate() { return ErrorCode::None; }"
          ],
          "explanation": "Return enum class value.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-14",
          "type": "code",
          "question": "Enum class with custom values.",
          "correctAnswer": [
            "enum class Priority : int { Low = 1, Medium = 5, High = 10 };"
          ],
          "explanation": "Assign custom values to enum class.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-15",
          "type": "code",
          "question": "Forward declare enum class.",
          "correctAnswer": [
            "enum class Color : int;",
            "enum class Status : uint8_t;"
          ],
          "explanation": "Forward declare with underlying type.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-16",
          "type": "code",
          "question": "Iterate enum class values.",
          "correctAnswer": [
            "for (Color c : {Color::Red, Color::Green, Color::Blue})",
            "using enum Color; for (auto c : {Red, Green, Blue})"
          ],
          "explanation": "Iterate over enum values using brace list.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-17",
          "type": "code",
          "question": "Use enum class as map key.",
          "correctAnswer": [
            "std::map<Color, std::string> colors;",
            "std::unordered_map<ErrorCode, std::function<void()>> handlers;"
          ],
          "explanation": "Enum class as key in associative container.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-18",
          "type": "code",
          "question": "Increment enum class.",
          "correctAnswer": [
            "c = static_cast<Color>(static_cast<int>(c) + 1);",
            "enum class C { A, B, C }; auto val = static_cast<int>(C::A);"
          ],
          "explanation": "Cast to int, increment, cast back.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-19",
          "type": "code",
          "question": "Enum class in vector.",
          "correctAnswer": [
            "std::vector<Color> colors;",
            "std::vector<Status> statuses = {Status::OK, Status::Error};"
          ],
          "explanation": "Vector of enum class values.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-20",
          "type": "code",
          "question": "Bitwise enum class.",
          "correctAnswer": [
            "enum class Flags : uint32_t { Read = 1, Write = 2, Execute = 4 }; auto f = static_cast<uint32_t>(Flags::Read) | static_cast<uint32_t>(Flags::Write);"
          ],
          "explanation": "Bitwise operations on enum class.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-21",
          "type": "code",
          "question": "Using enum declaration.",
          "correctAnswer": [
            "using enum Color;",
            "using enum std::byte;"
          ],
          "explanation": "Bring enum values into scope.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-22",
          "type": "code",
          "question": "Enum class in class.",
          "correctAnswer": [
            "class MyClass { public: enum class Status { OK, Error }; };",
            "struct S { enum class Type { A, B }; };"
          ],
          "explanation": "Nested enum class in class.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-23",
          "type": "code",
          "question": "Get enum class size.",
          "correctAnswer": [
            "sizeof(Color)",
            "static_cast<int>(Color::Red)"
          ],
          "explanation": "Size of enum class type.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-24",
          "type": "code",
          "question": "Stream enum class.",
          "correctAnswer": [
            "std::ostream& operator<<(std::ostream& os, Color c) { return os << static_cast<int>(c); }"
          ],
          "explanation": "Overload << for enum class.",
          "xp": 15
        },
        {
          "id": "cpp-12-4-25",
          "type": "code",
          "question": "Enum class from string.",
          "correctAnswer": [
            "Color fromString(const std::string& s) { if (s == \"Red\") return Color::Red; }"
          ],
          "explanation": "Convert string to enum class.",
          "xp": 15
        }
      ],
      "lessonText": "# enum class\n\nScoped enums for type-safe enumerations.\n\n```cpp\nenum class Color {\n    Red,\n    Green,\n    Blue\n};\n\nColor c = Color::Red;  // Must use Color::\nif (c == Color::Red) {\n    // Handle red\n}\n```\n\n**Benefits:**\n- Scoped (no name pollution)\n- Strongly typed\n- Can specify underlying type"
    },
    {
      "id": 66,
      "title": "Structured Bindings",
      "unitTitle": "12. Modern C++ Features",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-12-5-1",
          "type": "typing",
          "question": "What are structured bindings?",
          "correctAnswer": [
            "unpack tuple/pair into variables",
            "decompose types"
          ],
          "explanation": "Structured bindings unpack composites into variables.",
          "xp": 5
        },
        {
          "id": "cpp-12-5-2",
          "type": "typing",
          "question": "What types work with structured bindings?",
          "correctAnswer": [
            "arrays, tuples, pairs, structs",
            "composite types"
          ],
          "explanation": "Arrays, tuples, pairs, structs with get() work.",
          "xp": 5
        },
        {
          "id": "cpp-12-5-3",
          "type": "typing",
          "question": "How to unpack pair?",
          "correctAnswer": [
            "auto [a, b] = pair;",
            "auto [first, second] = pair;"
          ],
          "explanation": "auto [a, b] = pair;",
          "xp": 5
        },
        {
          "id": "cpp-12-5-4",
          "type": "multiple",
          "question": "Can structured bindings work with custom structs?",
          "options": [
            "Yes",
            "No",
            "Only with tuples",
            "Only with pairs"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Custom structs with tuple_size and get() work.",
          "xp": 5
        },
        {
          "id": "cpp-12-5-5",
          "type": "multiple",
          "question": "Can you use const with structured bindings?",
          "options": [
            "Yes",
            "No",
            "Only with auto",
            "Only with reference"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "const auto [a, b] works.",
          "xp": 5
        },
        {
          "id": "cpp-12-5-6",
          "type": "code",
          "question": "Unpack pair.",
          "correctAnswer": [
            "auto [a, b] = pair;",
            "auto [first, second] = std::make_pair(1, 2);"
          ],
          "explanation": "auto [a, b] = pair;",
          "xp": 15
        },
        {
          "id": "cpp-12-5-7",
          "type": "code",
          "question": "Unpack tuple.",
          "correctAnswer": [
            "auto [a, b, c] = tuple;",
            "auto [i, d, s] = std::make_tuple(1, 2.0, \"hi\");"
          ],
          "explanation": "auto [a, b, c] = tuple;",
          "xp": 15
        },
        {
          "id": "cpp-12-5-8",
          "type": "code",
          "question": "Unpack array.",
          "correctAnswer": [
            "auto [x, y, z] = arr;",
            "int arr[3] = {1, 2, 3}; auto [a, b, c] = arr;"
          ],
          "explanation": "auto [a, b, c] = array;",
          "xp": 15
        },
        {
          "id": "cpp-12-5-9",
          "type": "code",
          "question": "Unpack with reference.",
          "correctAnswer": [
            "auto& [a, b] = pair;",
            "auto& [key, value] = map_elem;"
          ],
          "explanation": "auto& [a, b] captures by reference.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-10",
          "type": "code",
          "question": "Unpack with const.",
          "correctAnswer": [
            "const auto [a, b] = pair;",
            "const auto& [x, y] = tuple;"
          ],
          "explanation": "const auto [a, b] for read-only.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-11",
          "type": "code",
          "question": "Structured binding in for loop.",
          "correctAnswer": [
            "for (auto [key, value] : map)",
            "for (auto [a, b] : pairs)"
          ],
          "explanation": "for (auto [k, v] : map)",
          "xp": 15
        },
        {
          "id": "cpp-12-5-12",
          "type": "code",
          "question": "Ignore value with _.",
          "correctAnswer": [
            "auto [_, val] = pair;",
            "auto [key, _] = std::make_tuple(1, 2);"
          ],
          "explanation": "Use _ to ignore binding.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-13",
          "type": "code",
          "question": "Unpack map iteration.",
          "correctAnswer": [
            "for (auto [key, value] : map)",
            "for (const auto& [k, v] : m)"
          ],
          "explanation": "for (auto [key, val] : map)",
          "xp": 15
        },
        {
          "id": "cpp-12-5-14",
          "type": "code",
          "question": "Unpack from function returning pair.",
          "correctAnswer": [
            "auto [success, result] = func();",
            "auto [ok, value] = tryParse(str);"
          ],
          "explanation": "Unpack function return directly.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-15",
          "type": "code",
          "question": "Unpack nested tuple.",
          "correctAnswer": [
            "auto [[a, b], c] = nested;",
            "auto [x, [y, z]] = tuple;"
          ],
          "explanation": "Nested structured bindings.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-16",
          "type": "code",
          "question": "Structured binding with const&.",
          "correctAnswer": [
            "const auto& [a, b] = pair;",
            "for (const auto& [k, v] : map)"
          ],
          "explanation": "const auto& for efficiency.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-17",
          "type": "code",
          "question": "Unpack array initializer.",
          "correctAnswer": [
            "auto [x, y, z] = std::array{1, 2, 3};",
            "auto [a, b, c] = std::array<int, 3>{1, 2, 3};"
          ],
          "explanation": "Unpack std::array.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-18",
          "type": "code",
          "question": "Structured binding with auto.",
          "correctAnswer": [
            "auto [a, b, c] = tuple;",
            "auto [first, second] = pair;"
          ],
          "explanation": "auto deduces each binding type.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-19",
          "type": "code",
          "question": "Unpack pair from vector.",
          "correctAnswer": [
            "for (auto [a, b] : vecOfPairs)",
            "for (const auto& [x, y] : pairs)"
          ],
          "explanation": "Unpack in range-based for.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-20",
          "type": "code",
          "question": "Make custom struct work with structured bindings.",
          "correctAnswer": [
            "struct Point { int x, y; }; template<> struct std::tuple_size<Point> : std::integral_constant<size_t, 2> {}; template<size_t I> struct std::tuple_element<I, Point>; template<> struct std::tuple_element<0, Point> { using type = int; }; template<> struct std::tuple_element<1, Point> { using type = int; }; template<size_t I> auto get(Point& p) { if constexpr (I == 0) return p.x; else return p.y; }"
          ],
          "explanation": "Specialize tuple_size, tuple_element, and get.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-21",
          "type": "code",
          "question": "Structured binding with move.",
          "correctAnswer": [
            "auto [a, b] = std::move(pair);",
            "auto&& [x, y] = std::move(tuple);"
          ],
          "explanation": "Move into bindings.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-22",
          "type": "code",
          "question": "Unpack from tie.",
          "correctAnswer": [
            "auto [a, b] = std::tie(x, y);"
          ],
          "explanation": "Unpack from std::tie.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-23",
          "type": "code",
          "question": "Structured binding with explicit types.",
          "correctAnswer": [
            "int [a, b] = pair;",
            "double [x, y, z] = tuple;"
          ],
          "explanation": "Explicit types in bindings.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-24",
          "type": "code",
          "question": "Unpack from initializer_list.",
          "correctAnswer": [
            "auto [a, b, c] = std::initializer_list{1, 2, 3};"
          ],
          "explanation": "Structured bindings don't work with initializer_list directly.",
          "xp": 15
        },
        {
          "id": "cpp-12-5-25",
          "type": "code",
          "question": "Unpack in lambda capture.",
          "correctAnswer": [
            "[pair]() { auto [a, b] = pair; }();"
          ],
          "explanation": "Use structured binding inside lambda.",
          "xp": 15
        }
      ],
      "lessonText": "# Structured Bindings\n\nUnpack tuples, pairs, and structs.\n\n```cpp\nstd::pair<int, string> p = {42, \"hello\"};\nauto [num, str] = p;  // Unpack pair\n\nstd::tuple<int, double, string> t = {1, 3.14, \"world\"};\nauto [i, d, s] = t;  // Unpack tuple\n\nfor (auto [key, value] : map) {\n    // Access key and value directly\n}\n```"
    },
    {
      "id": 67,
      "title": "std::optional, std::variant, std::any",
      "unitTitle": "12. Modern C++ Features",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-12-6-1",
          "type": "typing",
          "question": "What is std::optional?",
          "correctAnswer": [
            "may contain value or be empty",
            "optional value"
          ],
          "explanation": "optional either has value or is empty.",
          "xp": 5
        },
        {
          "id": "cpp-12-6-2",
          "type": "typing",
          "question": "What is std::variant?",
          "correctAnswer": [
            "type-safe union",
            "holds one of types"
          ],
          "explanation": "variant holds one of specified types.",
          "xp": 5
        },
        {
          "id": "cpp-12-6-3",
          "type": "typing",
          "question": "What is std::any?",
          "correctAnswer": [
            "type-erased value",
            "holds any type"
          ],
          "explanation": "any can hold any type.",
          "xp": 5
        },
        {
          "id": "cpp-12-6-4",
          "type": "multiple",
          "question": "Can optional be empty?",
          "options": [
            "Yes",
            "No",
            "Only with nullptr",
            "Only with std::nullopt"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "optional can be empty.",
          "xp": 5
        },
        {
          "id": "cpp-12-6-5",
          "type": "multiple",
          "question": "How to check if optional has value?",
          "options": [
            "if (opt)",
            "opt.has()",
            "opt != null",
            "opt.exists()"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "if (opt) checks if has value.",
          "xp": 5
        },
        {
          "id": "cpp-12-6-6",
          "type": "code",
          "question": "Create optional with value.",
          "correctAnswer": [
            "std::optional<int> opt = 42;",
            "auto opt = std::make_optional(42);"
          ],
          "explanation": "std::optional<T> opt = value;",
          "xp": 15
        },
        {
          "id": "cpp-12-6-7",
          "type": "code",
          "question": "Create empty optional.",
          "correctAnswer": [
            "std::optional<int> opt;",
            "std::optional<int> opt = std::nullopt;"
          ],
          "explanation": "Default constructed or std::nullopt.",
          "xp": 15
        },
        {
          "id": "cpp-12-6-8",
          "type": "code",
          "question": "Access optional value.",
          "correctAnswer": [
            "*opt",
            "opt.value()",
            "opt.value_or(0)"
          ],
          "explanation": "*opt or opt.value()",
          "xp": 15
        },
        {
          "id": "cpp-12-6-9",
          "type": "code",
          "question": "Check optional has value.",
          "correctAnswer": [
            "if (opt)",
            "if (opt.has_value())"
          ],
          "explanation": "if (opt) or opt.has_value()",
          "xp": 15
        },
        {
          "id": "cpp-12-6-10",
          "type": "code",
          "question": "Optional with value_or.",
          "correctAnswer": [
            "int val = opt.value_or(0);",
            "auto x = opt.value_or(default);"
          ],
          "explanation": "opt.value_or(default)",
          "xp": 15
        },
        {
          "id": "cpp-12-6-11",
          "type": "code",
          "question": "Create variant.",
          "correctAnswer": [
            "std::variant<int, string> v = 42;",
            "auto v = std::variant<int, double>{3.14};"
          ],
          "explanation": "std::variant<T1, T2...> v = value;",
          "xp": 15
        },
        {
          "id": "cpp-12-6-12",
          "type": "code",
          "question": "Visit variant.",
          "correctAnswer": [
            "std::visit([](auto&& arg) { cout << arg; }, variant)",
            "std::visit(Visitor{}, v)"
          ],
          "explanation": "std::visit(visitor, variant)",
          "xp": 15
        },
        {
          "id": "cpp-12-6-13",
          "type": "code",
          "question": "Get variant value.",
          "correctAnswer": [
            "std::get<int>(v)",
            "std::get<0>(v)"
          ],
          "explanation": "std::get<T>(variant)",
          "xp": 15
        },
        {
          "id": "cpp-12-6-14",
          "type": "code",
          "question": "Check variant index.",
          "correctAnswer": [
            "size_t index = v.index();",
            "if (v.index() == 0)"
          ],
          "explanation": "variant.index()",
          "xp": 15
        },
        {
          "id": "cpp-12-6-15",
          "type": "code",
          "question": "Holds_alternative check.",
          "correctAnswer": [
            "if (std::holds_alternative<int>(v))"
          ],
          "explanation": "std::holds_alternative<T>(variant)",
          "xp": 15
        },
        {
          "id": "cpp-12-6-16",
          "type": "code",
          "question": "Create any.",
          "correctAnswer": [
            "std::any a = 42;",
            "std::any a = \"hello\";"
          ],
          "explanation": "std::any a = value;",
          "xp": 15
        },
        {
          "id": "cpp-12-6-17",
          "type": "code",
          "question": "Get any value.",
          "correctAnswer": [
            "int val = std::any_cast<int>(a);",
            "auto x = std::any_cast<T>(&a)"
          ],
          "explanation": "std::any_cast<T>(any)",
          "xp": 15
        },
        {
          "id": "cpp-12-6-18",
          "type": "code",
          "question": "Check any type.",
          "correctAnswer": [
            "if (a.type() == typeid(int))",
            "if (std::any_cast<int>(&a))"
          ],
          "explanation": "a.type() == typeid(T)",
          "xp": 15
        },
        {
          "id": "cpp-12-6-19",
          "type": "code",
          "question": "Optional emplace.",
          "correctAnswer": [
            "opt.emplace(42);",
            "opt.emplace(args...);"
          ],
          "explanation": "opt.emplace(value)",
          "xp": 15
        },
        {
          "id": "cpp-12-6-20",
          "type": "code",
          "question": "Optional reset.",
          "correctAnswer": [
            "opt.reset();"
          ],
          "explanation": "opt.reset() clears optional.",
          "xp": 15
        },
        {
          "id": "cpp-12-6-21",
          "type": "code",
          "question": "Variant emplace.",
          "correctAnswer": [
            "v.emplace<int>(42);",
            "v.emplace<0>(args...);"
          ],
          "explanation": "variant.emplace<T>(value)",
          "xp": 15
        },
        {
          "id": "cpp-12-6-22",
          "type": "code",
          "question": "Optional has_value.",
          "correctAnswer": [
            "bool has = opt.has_value();",
            "if (opt.has_value())"
          ],
          "explanation": "opt.has_value()",
          "xp": 15
        },
        {
          "id": "cpp-12-6-23",
          "type": "code",
          "question": "Any reset.",
          "correctAnswer": [
            "a.reset();"
          ],
          "explanation": "any.reset() clears any.",
          "xp": 15
        },
        {
          "id": "cpp-12-6-24",
          "type": "code",
          "question": "Optional with reference.",
          "correctAnswer": [
            "std::optional<std::reference_wrapper<int>> opt = ref;",
            "std::optional<int&> opt = std::ref(value);"
          ],
          "explanation": "Use reference_wrapper for references.",
          "xp": 15
        },
        {
          "id": "cpp-12-6-25",
          "type": "code",
          "question": "Monadic operations on optional.",
          "correctAnswer": [
            "auto result = opt.transform([](int x) { return x * 2; });",
            "auto val = opt.and_then([](int x) { return std::optional<int>{x}; });"
          ],
          "explanation": "transform, and_then, or_else (C++23).",
          "xp": 15
        }
      ],
      "lessonText": "# std::optional, std::variant, std::any\n\n**std::optional** - May contain a value or not\n```cpp\nstd::optional<int> opt = 42;\nif (opt) {\n    std::cout << *opt;  // Access value\n}\n```\n\n**std::variant** - Type-safe union\n```cpp\nstd::variant<int, string, double> v = 42;\nstd::visit([](auto&& arg) { std::cout << arg; }, v);\n```\n\n**std::any** - Type-erased value\n```cpp\nstd::any a = 42;\na = \"hello\";\na = 3.14;\n```"
    }
  ]
};
