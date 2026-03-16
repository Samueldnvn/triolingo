#!/usr/bin/env python3
"""
Build Unit 20: C and C++ Interoperability (Lessons 7-9)
3 lessons with 25 questions each (75 total)
Heavy emphasis on code questions (~70% = 52.5 code questions)
"""
import json

print("🚀 Building C++ Unit 20: C and C++ Interoperability (Lessons 7-9)")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 7: C++ Standard Library Compatibility
# ============================================================================
lesson7_questions = [
    {"id": "cpp-20-7-1", "type": "typing", "question": "Can C use STL?", "correctAnswer": ["no", "cannot"], "explanation": "STL is C++ only.", "xp": 5},
    {"id": "cpp-20-7-2", "type": "typing", "question": "What header for printf?", "correctAnswer": ["<cstdio>", "<stdio.h>"], "explanation": "cstdio for C in C++.", "xp": 5},
    {"id": "cpp-20-7-3", "type": "typing", "question": "What header for malloc?", "correctAnswer": ["<cstdlib>", "<stdlib.h>"], "explanation": "cstdlib for C in C++.", "xp": 5},
    {"id": "cpp-20-7-4", "type": "multiple", "question": ".h vs no .h?", "options": ["no .h for C++", "use .h", "same", "depends"], "correctAnswer": [0], "explanation": "Use <cname> in C++.", "xp": 5},
    {"id": "cpp-20-7-5", "type": "multiple", "question": "std namespace?", "options": ["C headers use std", "no namespace", "both", "never"], "correctAnswer": [0], "explanation": "C headers in std.", "xp": 5},
    {"id": "cpp-20-7-6", "type": "code", "question": "Include stdio.", "correctAnswer": ["#include <cstdio>", "C header in C++"],
        "explanation": "#include <cstdio>", "xp": 15},
    {"id": "cpp-20-7-7", "type": "code", "question": "Use printf in C++.", "correctAnswer": ["std::printf(\"hello\");", "printf in std"],
        "explanation": "std::printf()", "xp": 15},
    {"id": "cpp-20-7-8", "type": "code", "question": "Use malloc in C++.", "correctAnswer": ["void* ptr = std::malloc(size);", "std::malloc"],
        "explanation": "std::malloc()", "xp": 15},
    {"id": "cpp-20-7-9", "type": "code", "question": "Use free in C++.", "correctAnswer": ["std::free(ptr);", "std::free"],
        "explanation": "std::free()", "xp": 15},
    {"id": "cpp-20-7-10", "type": "code", "question": "Use qsort in C++.", "correctAnswer": ["std::qsort(arr, n, sizeof(int), compare);", "std::qsort"],
        "explanation": "std::qsort()", "xp": 15},
    {"id": "cpp-20-7-11", "type": "code", "question": "Use string.h functions.", "correctAnswer": ["#include <cstring>\nstd::strlen(s);", "cstring header"],
        "explanation": "#include <cstring>", "xp": 15},
    {"id": "cpp-20-7-12", "type": "code", "question": "Use math.h functions.", "correctAnswer": ["#include <cmath>\nstd::sin(x);", "cmath header"],
        "explanation": "#include <cmath>", "xp": 15},
    {"id": "cpp-20-7-13", "type": "code", "question": "Use assert.", "correctAnswer": ["#include <cassert>\nassert(condition);", "cassert header"],
        "explanation": "#include <cassert>", "xp": 15},
    {"id": "cpp-20-7-14", "type": "code", "question": "Use time functions.", "correctAnswer": ["#include <ctime>\nstd::time(nullptr);", "ctime header"],
        "explanation": "#include <ctime>", "xp": 15},
    {"id": "cpp-20-7-15", "type": "code", "question": "FILE* in C++.", "correctAnswer": ["std::FILE* fp = std::fopen(\"file\", \"r\");", "std::FILE"],
        "explanation": "std::FILE*", "xp": 15},
    {"id": "cpp-20-7-16", "type": "code", "question": "memcpy in C++.", "correctAnswer": ["std::memcpy(dest, src, size);", "std::memcpy"],
        "explanation": "std::memcpy()", "xp": 15},
    {"id": "cpp-20-7-17", "type": "code", "question": "memset in C++.", "correctAnswer": ["std::memset(ptr, 0, size);", "std::memset"],
        "explanation": "std::memset()", "xp": 15},
    {"id": "cpp-20-7-18", "type": "code", "question": "memcmp in C++.", "correctAnswer": ["std::memcmp(a, b, size);", "std::memcmp"],
        "explanation": "std::memcmp()", "xp": 15},
    {"id": "cpp-20-7-19", "type": "code", "question": "exit in C++.", "correctAnswer": ["std::exit(0);", "std::exit"],
        "explanation": "std::exit()", "xp": 15},
    {"id": "cpp-20-7-20", "type": "code", "question": "atoi in C++.", "correctAnswer": ["int x = std::atoi(\"123\");", "std::atoi"],
        "explanation": "std::atoi()", "xp": 15},
    {"id": "cpp-20-7-21", "type": "code", "question": "strlen in C++.", "correctAnswer": ["size_t len = std::strlen(s);", "std::strlen"],
        "explanation": "std::strlen()", "xp": 15},
    {"id": "cpp-20-7-22", "type": "code", "question": "strcpy in C++.", "correctAnswer": ["std::strcpy(dest, src);", "std::strcpy"],
        "explanation": "std::strcpy()", "xp": 15},
    {"id": "cpp-20-7-23", "type": "code", "question": "strcmp in C++.", "correctAnswer": ["std::strcmp(a, b);", "std::strcmp"],
        "explanation": "std::strcmp()", "xp": 15},
    {"id": "cpp-20-7-24", "type": "code", "question": "size_t in C++.", "correctAnswer": ["std::size_t", "size_t in std"],
        "explanation": "std::size_t", "xp": 15},
    {"id": "cpp-20-7-25", "type": "code", "question": "NULL in C++.", "correctAnswer": ["// Use nullptr instead", "prefer nullptr"],
        "explanation": "Use nullptr, not NULL.", "xp": 15}
]

lesson7 = {
    "id": "cpp-U20-L7", "title": "C++ Standard Library Compatibility", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# C++ Standard Library Compatibility

Using C standard library in C++.

## C Headers in C++

```cpp
// Old C style (still works but deprecated in C++)
#include <stdio.h>
#include <stdlib.h>

// Modern C++ style (preferred)
#include <cstdio>   // std::printf, std::scanf
#include <cstdlib>  // std::malloc, std::free
#include <cstring>  // std::strlen, std::strcmp
#include <cmath>    // std::sin, std::cos
```

## Namespace

When using `<cname>` headers, functions are in the `std` namespace:

```cpp
#include <cstdio>

// C style
printf("hello\n");

// C++ style (in std namespace)
std::printf("hello\n");
```

## Common C Functions in C++

```cpp
#include <cstdlib>
void* ptr = std::malloc(sizeof(int));
std::free(ptr);
std::exit(0);

#include <cstring>
size_t len = std::strlen("hello");
std::strcpy(dest, src);
std::memcmp(a, b, size);

#include <cmath>
double result = std::sin(1.0);
```
""",
    "questions": lesson7_questions
}

# ============================================================================
# LESSON 8: Template Interoperability
# ============================================================================
lesson8_questions = [
    {"id": "cpp-20-8-1", "type": "typing", "question": "Can C use templates?", "correctAnswer": ["no", "cannot"], "explanation": "Templates are C++ only.", "xp": 5},
    {"id": "cpp-20-8-2", "type": "typing", "question": "Can C call template functions?", "correctAnswer": ["yes with extern C", "explicit instantiation"], "explanation": "Export explicit instantiation.", "xp": 5},
    {"id": "cpp-20-8-3", "type": "typing", "question": "What is explicit instantiation?", "correctAnswer": ["generate specific type", "template instantiation"], "explanation": "Generate specific type.", "xp": 5},
    {"id": "cpp-20-8-4", "type": "multiple", "question": "Template function in header?", "options": ["yes", "no", "rarely", "never"], "correctAnswer": [0], "explanation": "Templates in header.", "xp": 5},
    {"id": "cpp-20-8-5", "type": "multiple", "question": "Template in .cpp?", "options": ["no", "yes", "always", "never"], "correctAnswer": [0], "explanation": "Template definitions in header.", "xp": 5},
    {"id": "cpp-20-8-6", "type": "code", "question": "Define template.", "correctAnswer": ["template<typename T>\nT add(T a, T b) { return a + b; }", "template function"],
        "explanation": "template<typename T>", "xp": 15},
    {"id": "cpp-20-8-7", "type": "code", "question": "Explicit instantiation.", "correctAnswer": ["template int add<int>(int, int);", "explicit instantiation"],
        "explanation": "template Type Func(params);", "xp": 15},
    {"id": "cpp-20-8-8", "type": "code", "question": "extern template.", "correctAnswer": ["extern template int add<int>(int, int);", "extern template"],
        "explanation": "extern template", "xp": 15},
    {"id": "cpp-20-8-9", "type": "code", "question": "Template class.", "correctAnswer": ["template<typename T>\nclass Vector { T* data; };", "template class"],
        "explanation": "template<typename T> class", "xp": 15},
    {"id": "cpp-20-8-10", "type": "code", "question": "Template with extern C.", "correctAnswer": ["extern \"C\" int add_int(int a, int b) { return a + b; }", "non-template for C"],
        "explanation": "Use wrapper for C.", "xp": 15},
    {"id": "cpp-20-8-11", "type": "code", "question": "Template specialisation.", "correctAnswer": ["template<>\nint add<int>(int a, int b) { return a + b; }", "full specialisation"],
        "explanation": "template<> Type...", "xp": 15},
    {"id": "cpp-20-8-12", "type": "code", "question": "Type template parameter.", "correctAnswer": ["template<typename T>", "typename T"],
        "explanation": "template<typename T>", "xp": 15},
    {"id": "cpp-20-8-13", "type": "code", "question": "Nontype template parameter.", "correctAnswer": ["template<int N>", "nontype parameter"],
        "explanation": "template<int N>", "xp": 15},
    {"id": "cpp-20-8-14", "type": "code", "question": "Template parameter pack.", "correctAnswer": ["template<typename... Args>", "parameter pack"],
        "explanation": "typename...", "xp": 15},
    {"id": "cpp-20-8-15", "type": "code", "question": "Fold expression.", "correctAnswer": ["return (args + ...);", "fold expression"],
        "explanation": "(args + ...)", "xp": 15},
    {"id": "cpp-20-8-16", "type": "code", "question": "SFINAE.", "correctAnswer": ["template<typename T, typename = std::enable_if_t<condition>>", "enable_if SFINAE"],
        "explanation": "std::enable_if_t", "xp": 15},
    {"id": "cpp-20-8-17", "type": "code", "question": "constexpr template.", "correctAnswer": ["template<typename T>\nconstexpr T square(T x) { return x * x; }", "constexpr template"],
        "explanation": "constexpr template function.", "xp": 15},
    {"id": "cpp-20-8-18", "type": "code", "question": "Concept C++20.", "correctAnswer": ["template<typename T>\nconcept Integral = std::is_integral_v<T>;", "concept definition"],
        "explanation": "concept Name = condition", "xp": 15},
    {"id": "cpp-20-8-19", "type": "code", "question": "Use concept.", "correctAnswer": ["template<Integral T>", "template constraint"],
        "explanation": "template<Concept>", "xp": 15},
    {"id": "cpp-20-8-20", "type": "code", "question": "Requires clause.", "correctAnswer": ["template<typename T>\nrequires Integral<T>", "requires clause"],
        "explanation": "requires Concept", "xp": 15},
    {"id": "cpp-20-8-21", "type": "code", "question": "Variadic template.", "correctAnswer": ["template<typename... Args>\nvoid func(Args... args)", "variadic template"],
        "explanation": "typename...", "xp": 15},
    {"id": "cpp-20-8-22", "type": "code", "question": "Perfect forwarding.", "correctAnswer": ["template<typename T>\nvoid wrapper(T&& arg)", "forwarding reference"],
        "explanation": "T&& forward reference.", "xp": 15},
    {"id": "cpp-20-8-23", "type": "code", "question": "std::forward.", "correctAnswer": ["std::forward<T>(arg)", "forward value category"],
        "explanation": "std::forward<T>", "xp": 15},
    {"id": "cpp-20-8-24", "type": "code", "question": "Template in separate .tpp.", "correctAnswer": ["// include .tpp at end of header", "tpp file"],
        "explanation": "Include .tpp in header.", "xp": 15},
    {"id": "cpp-20-8-25", "type": "code", "question": "Export template for C.", "correctAnswer": ["// Use explicit instantiation and extern C wrapper", "export template"],
        "explanation": "Instantiate and wrap.", "xp": 15}
]

lesson8 = {
    "id": "cpp-U20-L8", "title": "Template Interoperability", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Template Interoperability

Using templates across C and C++.

## Templates Cannot Be Used Directly from C

Templates are a C++ feature and cannot be called from C. However, you can export specific instantiations:

```cpp
// Template definition (in header)
template<typename T>
T add(T a, T b) {
    return a + b;
}

// Explicit instantiation (in .cpp file)
template int add<int>(int, int);
template double add<double>(double, double);

// C-compatible wrapper
extern "C" int add_int(int a, int b) {
    return add<int>(a, b);
}
```

## Extern Template

```cpp
// header.h
template<typename T>
T compute(T value);

// Tell compiler not to instantiate for these types
extern template int compute<int>(int);
extern template double compute<double>(double);

// cpp.cpp
template int compute<int>(int);
template double compute<double>(double);
```

## Using Templates from C

```c
// C code can only call non-template functions
extern int add_int(int a, int b);

int result = add_int(5, 3);
```
""",
    "questions": lesson8_questions
}

# ============================================================================
# LESSON 9: Cross-Platform Development
# ============================================================================
lesson9_questions = [
    {"id": "cpp-20-9-1", "type": "typing", "question": "What is cross-platform?", "correctAnswer": ["multiple OS", "platform independent"], "explanation": "Runs on multiple platforms.", "xp": 5},
    {"id": "cpp-20-9-2", "type": "typing", "question": "What is _WIN32?", "correctAnswer": ["Windows define", "Windows macro"], "explanation": "_WIN32 for Windows.", "xp": 5},
    {"id": "cpp-20-9-3", "type": "typing", "question": "What is __linux__?", "correctAnswer": ["Linux define", "Linux macro"], "explanation": "__linux__ for Linux.", "xp": 5},
    {"id": "cpp-20-9-4", "type": "multiple", "question": "Check Windows?", "options": ["_WIN32", "WIN32", "WINDOWS", "all"], "correctAnswer": [0], "explanation": "_WIN32 macro.", "xp": 5},
    {"id": "cpp-20-9-5", "type": "multiple", "question": "Check macOS?", "options": ["__APPLE__", "MAC", "MACOS", "Darwin"], "correctAnswer": [0], "explanation": "__APPLE__ for macOS.", "xp": 5},
    {"id": "cpp-20-9-6", "type": "code", "question": "Check Windows.", "correctAnswer": ["#ifdef _WIN32\n// Windows code\n#endif", "#ifdef _WIN32"],
        "explanation": "#ifdef _WIN32", "xp": 15},
    {"id": "cpp-20-9-7", "type": "code", "question": "Check Linux.", "correctAnswer": ["#ifdef __linux__\n// Linux code\n#endif", "#ifdef __linux__"],
        "explanation": "#ifdef __linux__", "xp": 15},
    {"id": "cpp-20-9-8", "type": "code", "question": "Check macOS.", "correctAnswer": ["#ifdef __APPLE__\n// macOS code\n#endif", "#ifdef __APPLE__"],
        "explanation": "#ifdef __APPLE__", "xp": 15},
    {"id": "cpp-20-9-9", "type": "code", "question": "Check POSIX.", "correctAnswer": ["#ifdef __unix__\n// POSIX code\n#endif", "#ifdef __unix__"],
        "explanation": "#ifdef __unix__", "xp": 15},
    {"id": "cpp-20-9-10", "type": "code", "question": "Path separator.", "correctAnswer": ["#ifdef _WIN32\n#define SEP '\\\\'\n#else\n#define SEP '/'\n#endif", "path separator"],
        "explanation": "\\ on Windows, / on Unix.", "xp": 15},
    {"id": "cpp-20-9-11", "type": "code", "question": "Library extension.", "correctAnswer": ["#ifdef _WIN32\nconst char* EXT = \".dll\";\n#else\nconst char* EXT = \".so\";\n#endif", "library extension"],
        "explanation": ".dll .so .dylib", "xp": 15},
    {"id": "cpp-20-9-12", "type": "code", "question": "Windows DLL loading.", "correctAnswer": ["#ifdef _WIN32\nHMODULE h = LoadLibraryA(\"lib.dll\");\n#else\nvoid* h = dlopen(\"lib.so\", RTLD_LAZY);\n#endif", "load library"],
        "explanation": "LoadLibrary vs dlopen.", "xp": 15},
    {"id": "cpp-20-9-13", "type": "code", "question": "Platform-specific include.", "correctAnswer": ["#ifdef _WIN32\n#include <windows.h>\n#else\n#include <unistd.h>\n#endif", "platform includes"],
        "explanation": "Different headers per platform.", "xp": 15},
    {"id": "cpp-20-9-14", "type": "code", "question": "Endianness check.", "correctAnswer": ["#if __BYTE_ORDER__ == __ORDER_LITTLE_ENDIAN__", "endianness"],
        "explanation": "__BYTE_ORDER__", "xp": 15},
    {"id": "cpp-20-9-15", "type": "code", "question": "Thread sleep.", "correctAnswer": ["#ifdef _WIN32\nSleep(1000);\n#else\nusleep(1000000);\n#endif", "sleep functions"],
        "explanation": "Sleep() vs usleep().", "xp": 15},
    {"id": "cpp-20-9-16", "type": "code", "question": "Get env var.", "correctAnswer": ["#ifdef _WIN32\ngetenv_s(&len, buf, size);\n#else\nchar* val = getenv(name);\n#endif", "getenv"],
        "explanation": "getenv_s vs getenv.", "xp": 15},
    {"id": "cpp-20-9-17", "type": "code", "question": "File access.", "correctAnswer": ["#ifdef _WIN32\n_access(path, 0)\n#else\naccess(path, F_OK)\n#endif", "file access check"],
        "explanation": "_access vs access().", "xp": 15},
    {"id": "cpp-20-9-18", "type": "code", "question": "Mutex type.", "correctAnswer": ["#ifdef _WIN32\nCRITICAL_SECTION\n#else\npthread_mutex_t\n#endif", "mutex type"],
        "explanation": "CRITICAL_SECTION vs pthread_mutex.", "xp": 15},
    {"id": "cpp-20-9-19", "type": "code", "question": "Thread type.", "correctAnswer": ["#ifdef _WIN32\nHANDLE\n#else\npthread_t\n#endif", "thread type"],
        "explanation": "HANDLE vs pthread_t.", "xp": 15},
    {"id": "cpp-20-9-20", "type": "code", "question": "Socket include.", "correctAnswer": ["#ifdef _WIN32\n#include <winsock2.h>\n#else\n#include <sys/socket.h>\n#endif", "socket headers"],
        "explanation": "winsock2 vs sys/socket.", "xp": 15},
    {"id": "cpp-20-9-21", "type": "code", "question": "Compiler define.", "correctAnswer": ["#ifdef _MSC_VER\n// MSVC\n#elif __GNUC__\n// GCC/Clang\n#endif", "compiler"],
        "explanation": "_MSC_VER __GNUC__", "xp": 15},
    {"id": "cpp-20-9-22", "type": "code", "question": "Cross-platform build.", "correctAnswer": ["// Use CMake for cross-platform", "CMake build"],
        "explanation": "Use CMake.", "xp": 15},
    {"id": "cpp-20-9-23", "type": "code", "question": "Platform abstraction.", "correctAnswer": ["class Platform { public: static void sleep(int ms); };", "abstraction layer"],
        "explanation": "Abstract platform differences.", "xp": 15},
    {"id": "cpp-20-9-24", "type": "code", "question": "64-bit check.", "correctAnswer": ["#if defined(_WIN64) || defined(__x86_64__)", "64-bit"],
        "explanation": "_WIN64 __x86_64__", "xp": 15},
    {"id": "cpp-20-9-25", "type": "code", "question": "Debug macro.", "correctAnswer": ["#ifdef _DEBUG\n// Debug code\n#endif", "_DEBUG macro"],
        "explanation": "#ifdef _DEBUG", "xp": 15}
]

lesson9 = {
    "id": "cpp-U20-L9", "title": "Cross-Platform Development", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Cross-Platform Development

Writing code that works on multiple platforms.

## Platform Detection

```cpp
// Windows
#ifdef _WIN32
    // Windows-specific code
#elif defined(__linux__)
    // Linux-specific code
#elif defined(__APPLE__)
    // macOS-specific code
#endif
```

## Common Platform Differences

```cpp
// Sleep
#ifdef _WIN32
    Sleep(1000);  // milliseconds
#else
    usleep(1000000);  // microseconds
#endif

// Dynamic loading
#ifdef _WIN32
    HMODULE h = LoadLibraryA("lib.dll");
#else
    void* h = dlopen("lib.so", RTLD_LAZY);
#endif

// File access
#ifdef _WIN32
    if (_access(path, 0) == 0)
#else
    if (access(path, F_OK) == 0)
#endif
```

## Path Separators

```cpp
// Define platform-specific separator
#ifdef _WIN32
    #define PATH_SEPARATOR '\\'
    #define LIB_EXTENSION ".dll"
#else
    #define PATH_SEPARATOR '/'
    #define LIB_EXTENSION ".so"
#endif
```

## Best Practices

- Use CMake for cross-platform builds
- Create platform abstraction layers
- Minimize platform-specific code
- Test on all target platforms
""",
    "questions": lesson9_questions
}

# Update lesson titles and add lessons
data['units'][19]['lessons'][6]['title'] = lesson7['title']
data['units'][19]['lessons'][7]['title'] = lesson8['title']
data['units'][19]['lessons'][8]['title'] = lesson9['title']

# Add all lessons to data
data['units'][19]['lessons'][6].update(lesson7)
print("✅ Lesson 7: C++ Standard Library Compatibility - 25 questions (20 code)")

data['units'][19]['lessons'][7].update(lesson8)
print("✅ Lesson 8: Template Interoperability - 25 questions (20 code)")

data['units'][19]['lessons'][8].update(lesson9)
print("✅ Lesson 9: Cross-Platform Development - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 20 (Lessons 7-9) Complete: 3 lessons with 25 questions each (75 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~53 (70%)")
print("   - Type-in questions: ~15 (20%)")
print("   - Multiple-choice: ~7 (10%)")
print("\nUnit 20 now has 9 complete lessons (225 questions total)")