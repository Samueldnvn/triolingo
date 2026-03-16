#!/usr/bin/env python3
"""
Complete Unit 8 Lessons 2-5
Heavy emphasis on code questions
"""
import json

print("🚀 Completing C++ Unit 8 Lessons 2-5...")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 2: Class Templates
# ============================================================================
lesson2 = {
    "id": 42, "title": "Class Templates", "unitTitle": "8. Templates and Metaprogramming", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": "# Class Templates\n\nClass templates create generic classes that work with multiple types.\n\n```cpp\ntemplate<typename T>\nclass Stack {\nprivate:\n    std::vector<T> data;\npublic:\n    void push(const T& value) { data.push_back(value); }\n    T pop() { T val = data.back(); data.pop_back(); return val; }\n};\n\nStack<int> intStack;\nStack<std::string> stringStack;\n```\n\n**Key points:**\n- Template syntax: `template<typename T>` before class\n- Type deduction from usage\n- Can have multiple type parameters\n- Member functions can be defined inside or outside class",
    "questions": [
        {"id": "cpp-8-2-1", "type": "typing", "question": "What is a class template?", "correctAnswer": ["class that works with multiple types", "generic class"], "explanation": "Class templates create classes that work with multiple data types.", "xp": 5},
        {"id": "cpp-8-2-2", "type": "typing", "question": "Where is template declaration placed?", "correctAnswer": ["before class definition", "before class"], "explanation": "Template declaration goes before class definition.", "xp": 5},
        {"id": "cpp-8-2-3", "type": "typing", "question": "How to instantiate class template?", "correctAnswer": ["ClassName<Type> object", "Stack<int> s"], "explanation": "Specify type in angle brackets.", "xp": 5},
        {"id": "cpp-8-2-4", "type": "multiple", "question": "Can class template have multiple type parameters?", "options": ["Yes", "No", "Only one", "Only two"], "correctAnswer": [0], "explanation": "Class templates can have multiple type parameters.", "xp": 5},
        {"id": "cpp-8-2-5", "type": "multiple", "question": "Where are member functions defined?", "options": ["Inside or outside class", "Only inside", "Only outside", "In separate file"], "correctAnswer": [0], "explanation": "Member functions can be defined inside or outside the class.", "xp": 5},
        {"id": "cpp-8-2-6", "type": "code", "question": "Create class template for pair.", "correctAnswer": ["template<typename T1, typename T2> class Pair { T1 first; T2 second; };"], "xp": 15},
        {"id": "cpp-8-2-7", "type": "code", "question": "Create class template for array wrapper.", "correctAnswer": ["template<typename T, size_t N> class Array { T data[N]; };"], "xp": 15},
        {"id": "cpp-8-2-8", "type": "code", "question": "Define member function outside class template.", "correctAnswer": ["template<typename T> void Stack<T>::push(const T& value) {}"], "xp": 15},
        {"id": "cpp-8-2-9", "question": "Create class template with default type.", "correctAnswer": ["template<typename T = int> class Box { T data; };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-10", "question": "Instantiate class template with int.", "correctAnswer": ["Box<int> b;", "Stack<int> s;"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-11", "question": "Use template member variable.", "correctAnswer": ["template<typename T> class MyClass { T value; };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-12", "question": "Create class template with vector member.", "correctAnswer": ["template<typename T> class Container { vector<T> items; };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-13", "question": "Define constructor for class template.", "correctAnswer": ["template<typename T> MyClass<T>::MyClass() {}"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-14", "question": "Use template friend function.", "correctAnswer": ["template<typename T> friend void func(MyClass<T>& obj);"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-15", "question": "Create class template with iterator.", "correctAnswer": ["template<typename T> class Vector { T* begin(); T* end(); };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-16", "question": "Use static member in class template.", "correctAnswer": ["template<typename T> class MyClass { static T value; };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-17", "question": "Create class template with const method.", "correctAnswer": ["template<typename T> class MyClass { T get() const; };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-18", "question": "Use nested class template.", "correctAnswer": ["template<typename T> class Outer { template<typename U> class Inner {}; };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-19", "question": "Create class template with non-type parameter.", "correctAnswer": ["template<typename T, int Size> class Buffer { T data[Size]; };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-20", "question": "Use template alias for class template.", "correctAnswer": ["template<typename T> using Vec = vector<T>;"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-21", "question": "Create class template with move semantics.", "correctAnswer": ["template<typename T> class MyClass { MyClass(MyClass&&) noexcept; };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-22", "question": "Use explicit instantiation declaration.", "correctAnswer": ["extern template class MyClass<int>;"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-23", "question": "Create class template with constructor template.", "correctAnswer": ["template<typename T> class MyClass { template<typename U> MyClass(U); };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-24", "question": "Use decltype in class template.", "correctAnswer": ["template<typename T> class MyClass { decltype(T()) value; };"], "type": "code", "xp": 15},
        {"id": "cpp-8-2-25", "question": "Create class template with destructor.", "correctAnswer": ["template<typename T> class MyClass { ~MyClass(); };"], "type": "code", "xp": 15}
    ]
}

# ============================================================================
# LESSON 3: Template Specialization
# ============================================================================
lesson3 = {
    "id": 43, "title": "Template Specialization", "unitTitle": "8. Templates and Metaprogramming", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": "# Template Specialization\n\nTemplate specialization provides custom implementation for specific types.\n\n```cpp\ntemplate<typename T>\nclass Printer {\npublic:\n    void print(const T& value) {\n        std::cout << value;\n    }\n};\n\n// Full specialization for bool\ntemplate<>\nclass Printer<bool> {\npublic:\n    void print(bool value) {\n        std::cout << (value ? \"true\" : \"false\");\n    }\n};\n```\n\n**Types:**\n- Full specialization: All parameters specified\n- Partial specialization: Some parameters specified (class templates only)",
    "questions": [
        {"id": "cpp-8-3-1", "type": "typing", "question": "What is template specialization?", "correctAnswer": ["custom implementation for specific type", "override for specific type"], "explanation": "Specialization provides custom implementation for specific types.", "xp": 5},
        {"id": "cpp-8-3-2", "type": "typing", "question": "What is full specialization?", "correctAnswer": ["all template parameters specified", "complete specialization"], "explanation": "Full specialization specifies all template parameters.", "xp": 5},
        {"id": "cpp-8-3-3", "type": "typing", "question": "What is partial specialization?", "correctAnswer": ["some template parameters specified", "partial override"], "explanation": "Partial specialization specifies only some parameters.", "xp": 5},
        {"id": "cpp-8-3-4", "type": "multiple", "question": "Can function templates be partially specialized?", "options": ["No", "Yes", "Only with C++20", "Only with C++17"], "correctAnswer": [0], "explanation": "Only class templates support partial specialization.", "xp": 5},
        {"id": "cpp-8-3-5", "type": "multiple", "question": "Which can be fully specialized?", "options": ["Function and class templates", "Only class templates", "Only function templates", "Neither"], "correctAnswer": [0], "explanation": "Both function and class templates support full specialization.", "xp": 5},
        {"id": "cpp-8-3-6", "type": "code", "question": "Create full specialization for const char*.", "correctAnswer": ["template<> void func<const char*>(const char* str);"], "xp": 15},
        {"id": "cpp-8-3-7", "type": "code", "question": "Create full specialization for bool.", "correctAnswer": ["template<> void func<bool>(bool value);"], "xp": 15},
        {"id": "cpp-8-3-8", "type": "code", "question": "Create partial specialization for pointer types.", "correctAnswer": ["template<typename T> class MyClass<T*> {};"], "xp": 15},
        {"id": "cpp-8-3-9", "type": "code", "question": "Create partial specialization for reference types.", "correctAnswer": ["template<typename T> class MyClass<T&> {};"], "xp": 15},
        {"id": "cpp-8-3-10", "type": "code", "question": "Specialize function template for string.", "correctAnswer": ["template<> void func<std::string>(const std::string& s);"], "xp": 15},
        {"id": "cpp-8-3-11", "type": "code", "question": "Create partial specialization for const types.", "correctAnswer": ["template<typename T> class MyClass<const T> {};"], "xp": 15},
        {"id": "cpp-8-3-12", "type": "code", "question": "Specialize class template for array.", "correctAnswer": ["template<typename T, int N> class MyClass<T[N]> {};"], "xp": 15},
        {"id": "cpp-8-3-13", "type": "code", "question": "Create specialization for vector.", "correctAnswer": ["template<typename T> class MyClass<std::vector<T>> {};"], "xp": 15},
        {"id": "cpp-8-3-14", "type": "code", "question": "Use enable_if for SFINAE.", "correctAnswer": ["template<typename T, typename = typename std::enable_if<std::is_integral<T>::value>::type> void func(T t);"], "xp": 15},
        {"id": "cpp-8-3-15", "type": "code", "question": "Create specialization for pointers.", "correctAnswer": ["template<typename T> void func(T* ptr);"], "xp": 15},
        {"id": "cpp-8-3-16", "type": "code", "question": "Use std::true_type/std::false_type in specialization.", "correctAnswer": ["template<typename T> void func(T t, std::true_type);"], "xp": 15},
        {"id": "cpp-8-3-17", "type": "code", "question": "Create specialization for shared_ptr.", "correctAnswer": ["template<typename T> class MyClass<std::shared_ptr<T>> {};"], "xp": 15},
        {"id": "cpp-8-3-18", "type": "code", "question": "Use constexpr if for specialization (C++17).", "correctAnswer": ["template<typename T> void func(T t) { if constexpr (std::is_integral_v<T>) {} else {} }"], "xp": 15},
        {"id": "cpp-8-3-19", "type": "code", "question": "Create explicit specialization for int.", "correctAnswer": ["template<> void func<int>(int value);"], "xp": 15},
        {"id": "cpp-8-3-20", "type": "code", "question": "Use partial specialization with two parameters.", "correctAnswer": ["template<typename T, typename U> class MyClass<T, U*> {};"], "xp": 15},
        {"id": "cpp-8-3-21", "type": "code", "question": "Specialize for rvalue reference.", "correctAnswer": ["template<typename T> class MyClass<T&&> {};"], "xp": 15},
        {"id": "cpp-8-3-22", "type": "code", "question": "Create specialization for tuple.", "correctAnswer": ["template<typename... Args> class MyClass<std::tuple<Args...>> {};"], "xp": 15},
        {"id": "cpp-8-3-23", "type": "code", "question": "Use concepts for specialization (C++20).", "correctAnswer": ["template<typename T> requires integral<T> void func(T t);"], "xp": 15},
        {"id": "cpp-8-3-24", "type": "code", "question": "Create partial specialization with default parameter.", "correctAnswer": ["template<typename T, typename U = int> class MyClass<T, U*> {};"], "xp": 15},
        {"id": "cpp-8-3-25", "type": "code", "question": "Override member in specialized class.", "correctAnswer": ["template<> void MyClass<int>::func() {}"], "xp": 15}
    ]
}

# ============================================================================
# LESSON 4: Variadic Templates
# ============================================================================
lesson4 = {
    "id": 44, "title": "Variadic Templates", "unitTitle": "8. Templates and Metaprogramming", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": "# Variadic Templates\n\nVariadic templates accept any number of arguments.\n\n```cpp\ntemplate<typename... Args>\nvoid print(Args... args) {\n    (std::cout << ... << args) << '\\n';\n}\n\nprint(1, 2.0, \"hello\", 'a');\n```\n\n**Fold expressions (C++17):**\n```cpp\ntemplate<typename... Args>\nauto sum(Args... args) {\n    return (args + ... + 0);\n}\n```\n\n**Parameter pack:**\n- `Args...` - type parameter pack\n- `args...` - function parameter pack",
    "questions": [
        {"id": "cpp-8-4-1", "type": "typing", "question": "What are variadic templates?", "correctAnswer": ["templates with variable number of arguments", "accept any number of arguments"], "explanation": "Variadic templates accept variable number of template arguments.", "xp": 5},
        {"id": "cpp-8-4-2", "type": "typing", "question": "What is parameter pack?", "correctAnswer": ["collection of template parameters", "Args...", "args..."], "explanation": "Parameter pack collects zero or more template parameters.", "xp": 5},
        {"id": "cpp-8-4-3", "type": "typing", "question": "What is fold expression?", "correctAnswer": ["operator over parameter pack", "expand and combine"], "explanation": "Fold expressions apply binary operator over parameter pack.", "xp": 5},
        {"id": "cpp-8-4-4", "type": "multiple", "question": "When were fold expressions introduced?", "options": ["C++17", "C++11", "C++14", "C++20"], "correctAnswer": [0], "explanation": "Fold expressions introduced in C++17.", "xp": 5},
        {"id": "cpp-8-4-5", "type": "multiple", "question": "What is ... (ellipsis) used for in variadic templates?", "options": ["Expand parameter pack", "End of list", "Pointer", "Range"], "correctAnswer": [0], "explanation": "Ellipsis expands parameter pack.", "xp": 5},
        {"id": "cpp-8-4-6", "type": "code", "question": "Create variadic template function.", "correctAnswer": ["template<typename... Args> void func(Args... args) {}"], "xp": 15},
        {"id": "cpp-8-4-7", "type": "code", "question": "Create fold expression for sum.", "correctAnswer": ["template<typename... Args> auto sum(Args... args) { return (args + ... + 0); }"], "xp": 15},
        {"id": "cpp-8-4-8", "type": "code", "question": "Create fold expression for product.", "correctAnswer": ["template<typename... Args> auto product(Args... args) { return (args * ... * 1); }"], "xp": 15},
        {"id": "cpp-8-4-9", "type": "code", "question": "Print all variadic arguments.", "correctAnswer": ["template<typename... Args> void print(Args... args) { (cout << ... << args) << endl; }"], "xp": 15},
        {"id": "cpp-8-4-10", "type": "code", "question": "Count variadic arguments.", "correctAnswer": ["template<typename... Args> constexpr size_t count = sizeof...(Args);"], "xp": 15},
        {"id": "cpp-8-4-11", "type": "code", "question": "Create variadic template class.", "correctAnswer": ["template<typename... Ts> class Tuple {};"], "xp": 15},
        {"id": "cpp-8-4-12", "type": "code", "question": "Use std::forward with variadic templates.", "correctAnswer": ["template<typename... Args> void func(Args&&... args) { std::forward<Args>(args)...; }"], "xp": 15},
        {"id": "cpp-8-4-13", "type": "code", "question": "Pass variadic args to another function.", "correctAnswer": ["template<typename... Args> void wrapper(Args... args) { func(args...); }"], "xp": 15},
        {"id": "cpp-8-4-14", "type": "code", "question": "Create fold expression with comma operator.", "correctAnswer": ["template<typename... Args> void print(Args... args) { (process(args), ...); }"], "xp": 15},
        {"id": "cpp-8-4-15", "type": "code", "question": "Use variadic constructor.", "correctAnswer": ["template<typename... Args> MyClass(Args... args) {}"], "xp": 15},
        {"id": "cpp-8-4-16", "type": "code", "question": "Create fold expression for AND.", "correctAnswer": ["template<typename... Args> bool all(Args... args) { return (args && ...); }"], "xp": 15},
        {"id": "cpp-8-4-17", "type": "code", "question": "Create fold expression for OR.", "correctAnswer": ["template<typename... Args> bool any(Args... args) { return (args || ...); }"], "xp": 15},
        {"id": "cpp-8-4-18", "type": "code", "question": "Use index_sequence with variadic templates.", "correctAnswer": ["template<typename... Ts, size_t... Is> void func(std::index_sequence<Is...>);"], "xp": 15},
        {"id": "cpp-8-4-19", "type": "code", "question": "Create variadic lambda capture (C++20).", "correctAnswer": ["auto lambda = [...args = std::move(args)]() {};"], "xp": 15},
        {"id": "cpp-8-4-20", "type": "code", "question": "Pass variadic args to printf.", "correctAnswer": ["template<typename... Args> void print(const char* fmt, Args... args) { printf(fmt, args...); }"], "xp": 15},
        {"id": "cpp-8-4-21", "type": "code", "question": "Create make_tuple with variadic templates.", "correctAnswer": ["template<typename... Args> auto make(Args... args) { return std::make_tuple(args...); }"], "xp": 15},
        {"id": "cpp-8-4-22", "type": "code", "question": "Use requires with variadic templates (C++20).", "correctAnswer": ["template<typename... Args> requires (integral<Args> && ...) void func(Args... args);"], "xp": 15},
        {"id": "cpp-8-4-23", "type": "code", "question": "Expand variadic template in array.", "correctAnswer": ["template<typename... Ts> auto toArray(Ts... args) { return std::array<int, sizeof...(Ts)>{args...}; }"], "xp": 15},
        {"id": "cpp-8-4-24", "type": "code", "question": "Create variadic template friend.", "correctAnswer": ["template<typename... Args> friend void func(MyClass<Args...>&);"], "xp": 15},
        {"id": "cpp-8-4-25", "type": "code", "question": "Use declval with variadic templates.", "correctAnswer": ["template<typename... Ts> void func() { (std::declval<Ts>(), ...); }"], "xp": 15}
    ]
}

# ============================================================================
# LESSON 5: Compile-Time Programming
# ============================================================================
lesson5 = {
    "id": 45, "title": "Compile-Time Programming", "unitTitle": "8. Templates and Metaprogramming", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": "# Compile-Time Programming\n\nCompute values and make decisions at compile time.\n\n**constexpr functions:**\n```cpp\nconstexpr int factorial(int n) {\n    return (n <= 1) ? 1 : n * factorial(n - 1);\n}\n\nconstexpr int result = factorial(5);  // Computed at compile time\n```\n\n**Type traits:**\n```cpp\nstatic_assert(std::is_integral_v<int>, \"Must be integral\");\n```\n\n**Compile-time conditionals:**\n```cpp\ntemplate<typename T>\nvoid process(T value) {\n    if constexpr (std::is_pointer_v<T>) {\n        // Pointer handling\n    } else {\n        // Value handling\n    }\n}\n```",
    "questions": [
        {"id": "cpp-8-5-1", "type": "typing", "question": "What is compile-time programming?", "correctAnswer": ["code executed during compilation", "computed at compile time"], "explanation": "Compile-time programming runs during compilation, not runtime.", "xp": 5},
        {"id": "cpp-8-5-2", "type": "typing", "question": "What does constexpr do?", "correctAnswer": ["evaluates at compile time if possible", "compile-time evaluation"], "explanation": "constexpr functions can be evaluated at compile time.", "xp": 5},
        {"id": "cpp-8-5-3", "type": "typing", "question": "What are type traits?", "correctAnswer": ["compile-time type information", "query type properties"], "explanation": "Type traits provide compile-time type information.", "xp": 5},
        {"id": "cpp-8-5-4", "type": "multiple", "question": "What does static_assert do?", "options": ["Compile-time assertion", "Runtime assertion", "Warning", "Optimization"], "correctAnswer": [0], "explanation": "static_assert is compile-time assertion that fails if condition is false.", "xp": 5},
        {"id": "cpp-8-5-5", "type": "multiple", "question": "When is constexpr function evaluated?", "options": ["At compile time if possible", "Always at compile time", "Always at runtime", "Never"], "correctAnswer": [0], "explanation": "constexpr evaluated at compile time if all arguments are constant expressions.", "xp": 5},
        {"id": "cpp-8-6", "type": "code", "question": "Create constexpr factorial function.", "correctAnswer": ["constexpr int factorial(int n) { return (n <= 1) ? 1 : n * factorial(n - 1); }"], "xp": 15},
        {"id": "cpp-8-5-7", "type": "code", "question": "Create constexpr fibonacci function.", "correctAnswer": ["constexpr int fib(int n) { return (n <= 1) ? n : fib(n-1) + fib(n-2); }"], "xp": 15},
        {"id": "cpp-8-5-8", "type": "code", "question": "Use static_assert for type check.", "correctAnswer": ["static_assert(std::is_integral_v<T>, \"T must be integral\");"], "xp": 15},
        {"id": "cpp-8-5-9", "type": "code", "question": "Use if constexpr for conditional code.", "correctAnswer": ["if constexpr (std::is_pointer_v<T>) { }"], "xp": 15},
        {"id": "cpp-8-5-10", "type": "code", "question": "Create constexpr power function.", "correctAnswer": ["constexpr int power(int base, int exp) { return (exp == 0) ? 1 : base * power(base, exp - 1); }"], "xp": 15},
        {"id": "cpp-8-5-11", "type": "code", "question": "Check if type is integral.", "correctAnswer": ["std::is_integral<T>::value", "std::is_integral_v<T>"], "xp": 15},
        {"id": "cpp-8-5-12", "type": "code", "question": "Check if type is pointer.", "correctAnswer": ["std::is_pointer<T>::value", "std::is_pointer_v<T>"], "xp": 15},
        {"id": "cpp-8-5-13", "type": "code", "question": "Get type size at compile time.", "correctAnswer": ["sizeof(T)", "constexpr size_t size = sizeof(T);"], "xp": 15},
        {"id": "cpp-8-5-14", "type": "code", "question": "Use enable_if with SFINAE.", "correctAnswer": ["template<typename T, typename = typename std::enable_if<std::is_integral<T>::value>::type> void func(T t);"], "xp": 15},
        {"id": "cpp-8-5-15", "type": "code", "question": "Create constexpr constructor.", "correctAnswer": ["constexpr MyClass(int x) : value(x) {}"], "xp": 15},
        {"id": "cpp-8-5-16", "type": "code", "question": "Use decltype for type deduction.", "correctAnswer": ["decltype(expr)", "auto x = decltype(expr){};"], "xp": 15},
        {"id": "cpp-8-5-17", "type": "code", "question": "Get common type of multiple types.", "correctAnswer": ["std::common_type<T, U>::type", "std::common_type_t<T, U>"], "xp": 15},
        {"id": "cpp-8-5-18", "type": "code", "question": "Remove reference from type.", "correctAnswer": ["std::remove_reference<T>::type", "std::remove_reference_t<T>"], "xp": 15},
        {"id": "cpp-8-5-19", "type": "code", "question": "Remove const from type.", "correctAnswer": ["std::remove_const<T>::type", "std::remove_const_t<T>"], "xp": 15},
        {"id": "cpp-8-5-20", "type": "code", "question": "Add const to type.", "correctAnswer": ["std::add_const<T>::type", "std::add_const_t<T>"], "xp": 15},
        {"id": "cpp-8-5-21", "type": "code", "question": "Create constexpr member function.", "correctAnswer": ["constexpr int getValue() const { return value; }"], "xp": 15},
        {"id": "cpp-8-5-22", "type": "code", "question": "Use static_assert with message.", "correctAnswer": ["static_assert(sizeof(int) == 4, \"int must be 4 bytes\");"], "xp": 15},
        {"id": "cpp-8-5-23", "type": "code", "question": "Create template recursion for compile-time computation.", "correctAnswer": ["template<int N> struct Factorial { static constexpr int value = N * Factorial<N-1>::value; }; template<> struct Factorial<0> { static constexpr int value = 1; };"], "xp": 15},
        {"id": "cpp-8-5-24", "type": "code", "question": "Use std::true_type/std::false_type.", "correctAnswer": ["template<typename T> void func(T t, std::true_type) {}"], "xp": 15},
        {"id": "cpp-8-5-25", "type": "code", "question": "Create constexpr variable template.", "correctAnswer": ["template<typename T> constexpr T pi = T(3.14159);"], "xp": 15}
    ]
}

# Add all lessons to data
data['units'][7]['lessons'][1].update(lesson2)
print("✅ Lesson 2: Class Templates - 25 questions (20 code)")

data['units'][7]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Template Specialization - 25 questions (20 code)")

data['units'][7]['lessons'][3].update(lesson4)
print("✅ Lesson 4: Variadic Templates - 25 questions (20 code)")

data['units'][7]['lessons'][4].update(lesson5)
print("✅ Lesson 5: Compile-Time Programming - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 8 Complete: All 5 lessons with 25 questions each (125 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~87 (70%)")
print("   - Type-in questions: ~25 (20%)")
print("   - Multiple-choice: ~13 (10%)")