#!/usr/bin/env python3
"""
Build Unit 8: Templates and Metaprogramming
5 lessons with 25 questions each (125 total)
Heavy emphasis on code questions (~70% = 87 code questions)
"""
import json

print("🚀 Building C++ Unit 8: Templates and Metaprogramming")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: Function Templates
# ============================================================================
lesson1_questions = [
    {
        "id": "cpp-8-1-1", "type": "typing", "question": "What is a function template?", "correctAnswer": ["function that works with multiple types", "generic function"], "explanation": "Function templates work with multiple data types.", "xp": 5
    },
    {
        "id": "cpp-8-1-2", "type": "typing", "question": "What keyword declares function template?", "correctAnswer": ["template", "template<typename T>"], "explanation": "Use template keyword with type parameters.", "xp": 5
    },
    {
        "id": "cpp-8-1-3", "type": "typing", "question": "What is template parameter?", "correctAnswer": ["placeholder for type", "typename T", "type parameter"], "explanation": "Template parameter is type placeholder like T.", "xp": 5
    },
    {
        "id": "cpp-8-1-4", "type": "multiple", "question": "Can function template have multiple parameters?", "options": ["Yes", "No", "Only one", "Only two"], "correctAnswer": [0], "explanation": "Function templates can have multiple type parameters.", "xp": 5
    },
    {
        "id": "cpp-8-1-5", "type": "multiple", "question": "What is template instantiation?", "options": ["Generating function for specific type", "Calling template", "Template parameter", "Type deduction"], "correctAnswer": [0], "explanation": "Template instantiation generates function for specific type.", "xp": 5
    },
    {
        "id": "cpp-8-1-6", "type": "code", "question": "Create function template to find maximum.",
        "correctAnswer": ["template<typename T> T max(T a, T b) { return (a > b) ? a : b; }"],
        "explanation": "template<typename T> T max(T a, T b) { return (a > b) ? a : b; }", "xp": 15
    },
    {
        "id": "cpp-8-1-7", "type": "code", "question": "Create function template to swap values.",
        "correctAnswer": ["template<typename T> void swap(T& a, T& b) { T temp = a; a = b; b = temp; }"],
        "explanation": "Swap template works with any type.", "xp": 15
    },
    {
        "id": "cpp-8-1-8", "type": "code", "question": "Create function template with two type parameters.",
        "correctAnswer": ["template<typename T, typename U> void func(T t, U u) {}"],
        "explanation": "Multiple type parameters: template<typename T, typename U>", "xp": 15
    },
    {
        "id": "cpp-8-1-9", "type": "code", "question": "Create function template to print value.",
        "correctAnswer": ["template<typename T> void print(T value) { cout << value; }"],
        "explanation": "Print template works with any type supporting <<.", "xp": 15
    },
    {
        "id": "cpp-8-1-10", "type": "code", "question": "Create function template for absolute value.",
        "correctAnswer": ["template<typename T> T abs(T value) { return (value < 0) ? -value : value; }"],
        "explanation": "Absolute value template.", "xp": 15
    },
    {
        "id": "cpp-8-1-11", "type": "code", "question": "Create function template with default type.",
        "correctAnswer": ["template<typename T = int> void func(T val) {}"],
        "explanation": "Default type: template<typename T = int>", "xp": 15
    },
    {
        "id": "cpp-8-1-12", "type": "code", "question": "Use explicit template instantiation.",
        "correctAnswer": ["max<int>(10, 20);", "func<double>(3.14);"],
        "explanation": "Explicit instantiation: func<int>(value)", "xp": 15
    },
    {
        "id": "cpp-8-1-13", "type": "code", "question": "Create function template to add values.",
        "correctAnswer": ["template<typename T> T add(T a, T b) { return a + b; }"],
        "explanation": "Add template requires + operator.", "xp": 15
    },
    {
        "id": "cpp-8-1-14", "type": "code", "question": "Create function template to compare values.",
        "correctAnswer": ["template<typename T> bool equals(T a, T b) { return a == b; }"],
        "explanation": "Comparison template requires == operator.", "xp": 15
    },
    {
        "id": "cpp-8-1-15", "type": "code", "question": "Create function template with non-type parameter.",
        "correctAnswer": ["template<typename T, int N> void func(T arr[N]) {}"],
        "explanation": "Non-type parameter: template<typename T, int N>", "xp": 15
    },
    {
        "id": "cpp-8-1-16", "type": "code", "question": "Use class template in function template.",
        "correctAnswer": ["template<typename T> void func(vector<T>& v) {}"],
        "explanation": "Function template accepting class template parameter.", "xp": 15
    },
    {
        "id": "cpp-8-1-17", "type": "code", "question": "Create function template returning pointer.",
        "correctAnswer": ["template<typename T> T* create() { return new T(); }"],
        "explanation": "Function template returning pointer to T.", "xp": 15
    },
    {
        "id": "cpp-8-1-18", "type": "code", "question": "Create function template with auto return (C++14).",
        "correctAnswer": ["template<typename T> auto func(T t) -> decltype(t) { return t; }"],
        "explanation": "auto return type deduction.", "xp": 15
    },
    {
        "id": "cpp-8-1-19", "type": "code", "question": "Use constexpr with function template.",
        "correctAnswer": ["template<typename T> constexpr T square(T x) { return x * x; }"],
        "explanation": "constexpr template evaluated at compile time if possible.", "xp": 15
    },
    {
        "id": "cpp-8-1-20", "type": "code", "question": "Create function template for sorting.",
        "correctAnswer": ["template<typename T> void sort(T arr[], int size) { for (int i = 0; i < size-1; i++) for (int j = i+1; j < size; j++) if (arr[i] > arr[j]) { T temp = arr[i]; arr[i] = arr[j]; arr[j] = temp; } }"],
        "explanation": "Sort template requires comparison operator.", "xp": 15
    },
    {
        "id": "cpp-8-1-21", "type": "code", "question": "Use function template with lambda.",
        "correctAnswer": ["template<typename F> void apply(F f, T t) { f(t); }"],
        "explanation": "Function template accepting function object.", "xp": 15
    },
    {
        "id": "cpp-8-1-22", "type": "code", "question": "Create function template with constraints (C++20).",
        "correctAnswer": ["template<typename T> requires integral<T> T func(T t) { return t; }"],
        "explanation": "Concepts constrain template parameters.", "xp": 15
    },
    {
        "id": "cpp-8-1-23", "type": "code", "question": "Use typename vs class in template.",
        "correctAnswer": ["template<typename T>", "template<class T>"], "explanation": "typename and class are equivalent in function templates.", "xp": 15
    },
    {
        "id": "cpp-8-1-24", "type": "code", "question": "Create function template with variadic parameters (C++11).",
        "correctAnswer": ["template<typename... Args> void print(Args... args) { (cout << ... << args) << endl; }"],
        "explanation": "Variadic templates accept any number of arguments.", "xp": 15
    },
    {
        "id": "cpp-8-1-25", "type": "code", "question": "Use std::forward in function template.",
        "correctAnswer": ["template<typename T> void func(T&& t) { std::forward<T>(t); }"],
        "explanation": "Forward preserves value category in templates.", "xp": 15
    }
]

lesson1 = {
    "id": 41, "title": "Function Templates", "unitTitle": "8. Templates and Metaprogramming", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Function Templates

Function templates create generic functions that work with multiple types.

## Basic Syntax

```cpp
template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}
```

## Usage

```cpp
// Type deduction
max(10, 20);        // int
max(3.14, 2.71);    // double

// Explicit instantiation
max<int>(10, 20);
max<double>(3.14, 2.71);
```

## Multiple Type Parameters

```cpp
template<typename T, typename U>
void print(T t, U u) {
    std::cout << t << " " << u;
}

print(10, 3.14);  // int, double
print("hi", 42);   // string, int
```

## Default Type Parameters

```cpp
template<typename T = int>
void print(T value) {
    std::cout << value;
}

print(42);        // int (default)
print(3.14);     // double
```

## Non-Type Parameters

```cpp
template<typename T, int N>
void printArray(T (&arr)[N]) {
    for (int i = 0; i < N; i++) {
        std::cout << arr[i] << " ";
    }
}

int arr[5] = {1, 2, 3, 4, 5};
printArray(arr);  // N is deduced as 5
```

## constexpr Function Templates

```cpp
template<typename T>
constexpr T square(T x) {
    return x * x;
}

constexpr int result = square(5);  // Computed at compile time
```

## Perfect Forwarding

```cpp
template<typename T>
void wrapper(T&& arg) {
    func(std::forward<T>(arg));
}
```
""",
    "questions": lesson1_questions
}

data['units'][7]['lessons'][0].update(lesson1)
print("✅ Lesson 1: Function Templates - 25 questions (20 code)")

# Due to length, save and continue
print("\n📊 Progress: 1 of 5 lessons complete (25 of 125 questions)")
print("🔄 Continuing with remaining 4 lessons...")

with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n✅ Checkpoint saved. Continue with Lessons 2-5...")