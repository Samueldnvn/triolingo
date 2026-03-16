#!/usr/bin/env python3
"""
Build Unit 20: C and C++ Interoperability
3 lessons with 25 questions each (75 total)
Heavy emphasis on code questions (~70% = 52.5 code questions)
"""
import json

print("🚀 Building C++ Unit 20: C and C++ Interoperability")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: C and C++ Interoperability
# ============================================================================
lesson1_questions = [
    {"id": "cpp-20-1-1", "type": "typing", "question": "What is extern \"C\"?", "correctAnswer": ["C linkage", "disable name mangling"], "explanation": "extern C disables name mangling.", "xp": 5},
    {"id": "cpp-20-1-2", "type": "typing", "question": "What is name mangling?", "correctAnswer": ["encode function names", "function name encoding"], "explanation": "C++ mangles names for overloading.", "xp": 5},
    {"id": "cpp-20-1-3", "type": "typing", "question": "Can C call C++ functions?", "correctAnswer": ["yes with extern C", "need C linkage"], "explanation": "C can call extern C functions.", "xp": 5},
    {"id": "cpp-20-1-4", "type": "multiple", "question": "C++ can call C functions?", "options": ["Yes", "No", "Only static", "Only inline"], "correctAnswer": [0], "explanation": "C++ can call C functions directly.", "xp": 5},
    {"id": "cpp-20-1-5", "type": "multiple", "question": "Can extern C contain templates?", "options": ["No", "Yes", "Only with special", "Always"], "correctAnswer": [0], "explanation": "extern C cannot have templates.", "xp": 5},
    {"id": "cpp-20-1-6", "type": "code", "question": "Declare extern C function.", "correctAnswer": ["extern \"C\" void func();", "extern C linkage"],
        "explanation": "extern \"C\" for C linkage.", "xp": 15},
    {"id": "cpp-20-1-7", "type": "code", "question": "Define extern C function.", "correctAnswer": ["extern \"C\" void func() { }", "extern C definition"],
        "explanation": "extern C for definition.", "xp": 15},
    {"id": "cpp-20-1-8", "type": "code", "question": "Block extern C.", "correctAnswer": ["extern \"C\" { void func1(); void func2(); }", "extern C block"],
        "explanation": "Multiple declarations in block.", "xp": 15},
    {"id": "cpp-20-1-9", "type": "code", "question": "Conditional extern C for C++.", "correctAnswer": ["#ifdef __cplusplus\nextern \"C\" {\n#endif\nvoid func();\n#ifdef __cplusplus\n}\n#endif", "conditional extern C"],
        "explanation": "Use __cplusplus macro.", "xp": 15},
    {"id": "cpp-20-1-10", "type": "code", "question": "Call C function from C++.", "correctAnswer": ["#include \"c_header.h\"\nvoid func();", "include C header"],
        "explanation": "Include C header normally.", "xp": 15},
    {"id": "cpp-20-1-11", "type": "code", "question": "C++ struct with C compatibility.", "correctAnswer": ["struct MyStruct { int value; };\nextern \"C\" void process(struct MyStruct* s);", "POD struct"],
        "explanation": "POD struct for compatibility.", "xp": 15},
    {"id": "cpp-20-1-12", "type": "code", "question": "C linkage for variable.", "correctAnswer": ["extern \"C\" int global_var;", "extern C variable"],
        "explanation": "extern C for variables.", "xp": 15},
    {"id": "cpp-20-1-13", "type": "code", "question": "Avoid C++ features in extern C.", "correctAnswer": ["extern \"C\" void func(int x);", "no overloading"],
        "explanation": "No overloading or templates.", "xp": 15},
    {"id": "cpp-20-1-14", "type": "code", "question": "Include C++ header in C.", "correctAnswer": ["#ifdef __cplusplus\nextern \"C\" {\n#endif\n#include \"interface.h\"\n#ifdef __cplusplus\n}\n#endif", "wrap includes"],
        "explanation": "Wrap header with extern C.", "xp": 15},
    {"id": "cpp-20-1-15", "type": "code", "question": "C++ callback to C.", "correctAnswer": ["extern \"C\" void callback(void* data) { }", "C-compatible callback"],
        "explanation": "Callback must be C-compatible.", "xp": 15},
    {"id": "cpp-20-1-16", "type": "code", "question": "Pass C++ object to C.", "correctAnswer": ["extern \"C\" void process(void* obj) { static_cast<MyClass*>(obj)->method(); }", "opaque pointer"],
        "explanation": "Pass as void* opaque pointer.", "xp": 15},
    {"id": "cpp-20-1-17", "type": "code", "question": "Check __cplusplus macro.", "correctAnswer": ["#ifdef __cplusplus\n// C++ code\n#endif", "__cplusplus macro"],
        "explanation": "Check if compiling C++.", "xp": 15},
    {"id": "cpp-20-1-18", "type": "code", "question": "Static assert C++11 compatibility.", "correctAnswer": ["#if __cplusplus >= 201103L\nstatic_assert(sizeof(int) == 4, \"...\");\n#endif", "version check"],
        "explanation": "Check C++ version.", "xp": 15},
    {"id": "cpp-20-1-19", "type": "code", "question": "C-compatible class.", "correctAnswer": ["extern \"C\" class CppClass { public: void method(); };", "class with C linkage"],
        "explanation": "Class can have C linkage.", "xp": 15},
    {"id": "cpp-20-1-20", "type": "code", "question": "Link C++ object file from C.", "correctAnswer": ["gcc main.c -o app lib.o -lstdc++", "link with C++ library"],
        "explanation": "Link with libstdc++.", "xp": 15},
    {"id": "cpp-20-1-21", "type": "code", "question": "Mix C and C++ files.", "correctAnswer": ["// Link with g++ to resolve C++ symbols", "g++ main.c cppfile.cpp -o app"],
        "explanation": "Use g++ to link.", "xp": 15},
    {"id": "cpp-20-1-22", "type": "code", "question": "C++ new/delete in extern C.", "correctAnswer": ["extern \"C\" void* alloc(size_t n) { return new char[n]; }", "new in extern C"],
        "explanation": "new/delete work in extern C.", "xp": 15},
    {"id": "cpp-20-1-23", "type": "code", "question": "Exception crossing extern C.", "correctAnswer": ["extern \"C\" void func() try { /* code */ } catch (...) { /* handle */ }", "catch exceptions"],
        "explanation": "Catch exceptions before C.", "xp": 15},
    {"id": "cpp-20-1-24", "type": "code", "question": "ABI compatibility.", "correctAnswer": ["// Ensure struct layout matches C", "packed struct"],
        "explanation": "Match C ABI for structs.", "xp": 15},
    {"id": "cpp-20-1-25", "type": "code", "question": "C linkage for function pointer.", "correctAnswer": ["typedef void (*Callback)(void*);\nextern \"C\" void set_callback(Callback cb);", "function pointer"],
        "explanation": "Function pointers work with C.", "xp": 15}
]

lesson1 = {
    "id": 101, "title": "C and C++ Interoperability", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# C and C++ Interoperability

Calling C from C++ and vice versa.

## extern "C"

```cpp
// C++ file
extern "C" {
    // These functions have C linkage (no name mangling)
    void c_function();
    int c_library_call(int arg);
}

// Define C-compatible function
extern "C" void cpp_callable() {
    std::cout << "C++ called from C" << std::endl;
}
```

## Compatibility Header

```c
// header.h (can be included from both C and C++)
#ifdef __cplusplus
extern "C" {
#endif

void api_function();
int calculate_value(int x, int y);

#ifdef __cplusplus
}
#endif
```

## Key Points

- **Name mangling**: C++ mangles names for overloading, C doesn't
- **extern "C"**: Disables name mangling for C linkage
- **Conditional compilation**: Use `#ifdef __cplusplus` for mixed headers
- **No C++ features in extern "C"**: No overloading, templates, or classes with virtual functions

## Calling Conventions

- C and C++ typically use same calling convention
- Stack layout must match
- Struct layout must be compatible (POD types)
""",
    "questions": lesson1_questions
}

# ============================================================================
# LESSON 2: Calling Native Libraries
# ============================================================================
lesson2_questions = [
    {"id": "cpp-20-2-1", "type": "typing", "question": "What is shared library?", "correctAnswer": [".so .dll .dylib", "dynamic library"], "explanation": "Shared library at runtime.", "xp": 5},
    {"id": "cpp-20-2-2", "type": "typing", "question": "What is dlopen?", "correctAnswer": ["load shared library", "dynamic loading"], "explanation": "dlopen loads library.", "xp": 5},
    {"id": "cpp-20-2-3", "type": "typing", "question": "What is dlsym?", "correctAnswer": ["get symbol address", "get function pointer"], "explanation": "dlsym resolves symbols.", "xp": 5},
    {"id": "cpp-20-2-4", "type": "multiple", "question": "What does dlclose do?", "options": ["Close library", "Open library", "Load symbol", "Get error"], "correctAnswer": [0], "explanation": "dlclose unloads library.", "xp": 5},
    {"id": "cpp-20-2-5", "type": "multiple", "question": "What does dlerror return?", "options": ["Error string", "Error code", "NULL on success", "True/false"], "correctAnswer": [0], "explanation": "dlerror returns error string.", "xp": 5},
    {"id": "cpp-20-2-6", "type": "code", "question": "Load shared library.", "correctAnswer": ["void* handle = dlopen(\"./lib.so\", RTLD_LAZY);", "dlopen()"],
        "explanation": "dlopen(path, flags)", "xp": 15},
    {"id": "cpp-20-2-7", "type": "code", "question": "Get symbol from library.", "correctAnswer": ["void* func = dlsym(handle, \"function_name\");", "dlsym()"],
        "explanation": "dlsym(handle, symbol)", "xp": 15},
    {"id": "cpp-20-2-8", "type": "code", "question": "Close library.", "correctAnswer": ["dlclose(handle);", "dlclose()"],
        "explanation": "dlclose(handle)", "xp": 15},
    {"id": "cpp-20-2-9", "type": "code", "question": "Check dlopen error.", "correctAnswer": ["if (!handle) { fprintf(stderr, \"%s\\n\", dlerror()); }", "dlerror()"],
        "explanation": "Check return and use dlerror.", "xp": 15},
    {"id": "cpp-20-2-10", "type": "code", "question": "Cast dlsym to function pointer.", "correctAnswer": ["typedef int (*FuncType)(int);\nFuncType func = (FuncType)dlsym(handle, \"func\");", "function pointer cast"],
        "explanation": "Cast to function pointer type.", "xp": 15},
    {"id": "cpp-20-2-11", "type": "code", "question": "RTLD_NOW flag.", "correctAnswer": ["dlopen(\"lib.so\", RTLD_NOW);", "resolve symbols now"],
        "explanation": "RTLD_NOW resolves immediately.", "xp": 15},
    {"id": "cpp-20-2-12", "type": "code", "question": "RTLD_LAZY flag.", "correctAnswer": ["dlopen(\"lib.so\", RTLD_LAZY);", "resolve symbols on demand"],
        "explanation": "RTLD_LAZY resolves on use.", "xp": 15},
    {"id": "cpp-20-2-13", "type": "code", "question": "RTLD_GLOBAL flag.", "correctAnswer": ["dlopen(\"lib.so\", RTLD_GLOBAL);", "export symbols"],
        "explanation": "RTLD_GLOBAL makes symbols available.", "xp": 15},
    {"id": "cpp-20-2-14", "type": "code", "question": "LoadLibrary on Windows.", "correctAnswer": ["HMODULE handle = LoadLibraryA(\"lib.dll\");", "Windows API"],
        "explanation": "LoadLibrary on Windows.", "xp": 15},
    {"id": "cpp-20-2-15", "type": "code", "question": "GetProcAddress on Windows.", "correctAnswer": ["void* func = GetProcAddress(handle, \"func_name\");", "GetProcAddress()"],
        "explanation": "GetProcAddress to get symbol.", "xp": 15},
    {"id": "cpp-20-2-16", "type": "code", "question": "FreeLibrary on Windows.", "correctAnswer": ["FreeLibrary(handle);", "FreeLibrary()"],
        "explanation": "FreeLibrary to unload.", "xp": 15},
    {"id": "cpp-20-2-17", "type": "code", "question": "Preprocessor for platform.", "correctAnswer": ["#ifdef _WIN32\nHMODULE handle = LoadLibraryA(\"lib.dll\");\n#else\nvoid* handle = dlopen(\"lib.so\", RTLD_LAZY);\n#endif", "platform specific"],
        "explanation": "Check platform macros.", "xp": 15},
    {"id": "cpp-20-2-18", "type": "code", "question": "Define function pointer type.", "correctAnswer": ["typedef int (*CalcFunc)(int, int);", "function pointer typedef"],
        "explanation": "typedef for function pointer.", "xp": 15},
    {"id": "cpp-20-2-19", "type": "code", "question": "Call loaded function.", "correctAnswer": ["int result = func(arg1, arg2);", "call through pointer"],
        "explanation": "Call like normal function.", "xp": 15},
    {"id": "cpp-20-2-20", "type": "code", "question": "RAII wrapper for dlopen.", "correctAnswer": ["class Library { void* handle; public: Library(const char* path) : handle(dlopen(path, RTLD_LAZY)) { } ~Library() { if (handle) dlclose(handle); } };", "RAII"],
        "explanation": "Use RAII for resources.", "xp": 15},
    {"id": "cpp-20-2-21", "type": "code", "question": "Check if symbol found.", "correctAnswer": ["if (!func) { fprintf(stderr, \"%s\\n\", dlerror()); }", "check dlsym"],
        "explanation": "dlsym returns NULL on failure.", "xp": 15},
    {"id": "cpp-20-2-22", "type": "code", "question": "Get global variable.", "correctAnswer": ["int* global = (int*)dlsym(handle, \"global_var\");", "dlsym for variables"],
        "explanation": "dlsym works for variables.", "xp": 15},
    {"id": "cpp-20-2-23", "type": "code", "question": "dlopen relative path.", "correctAnswer": ["dlopen(\"./lib.so\", RTLD_LAZY);", "relative path"],
        "explanation": "./ for current directory.", "xp": 15},
    {"id": "cpp-20-2-24", "type": "code", "question": "dlopen absolute path.", "correctAnswer": ["dlopen(\"/usr/lib/lib.so\", RTLD_LAZY);", "absolute path"],
        "explanation": "Full path to library.", "xp": 15},
    {"id": "cpp-20-2-25", "type": "code", "question": "Handle NULL dlsym.", "correctAnswer": ["void* func = dlsym(handle, \"func\");\nif (!func) return ERROR;", "check for NULL"],
        "explanation": "Always check dlsym result.", "xp": 15}
]

lesson2 = {
    "id": 102, "title": "Calling Native Libraries", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Calling Native Libraries

Dynamic loading of shared libraries.

## Unix/Linux (dlopen)

```cpp
#include <dlfcn.h>

// Load library
void* handle = dlopen("./libexample.so", RTLD_LAZY);
if (!handle) {
    fprintf(stderr, "%s\n", dlerror());
    return;
}

// Get symbol
typedef int (*AddFunc)(int, int);
AddFunc add = (AddFunc)dlsym(handle, "add");
if (!add) {
    fprintf(stderr, "%s\n", dlerror());
    dlclose(handle);
    return;
}

// Use function
int result = add(5, 3);

// Close library
dlclose(handle);
```

## Windows (LoadLibrary)

```cpp
#include <windows.h>

// Load library
HMODULE handle = LoadLibraryA("example.dll");
if (!handle) {
    return;
}

// Get symbol
typedef int (*AddFunc)(int, int);
AddFunc add = (AddFunc)GetProcAddress(handle, "add");
if (!add) {
    FreeLibrary(handle);
    return;
}

// Use function
int result = add(5, 3);

// Free library
FreeLibrary(handle);
```

## Flags

- `RTLD_LAZY`: Resolve symbols as needed
- `RTLD_NOW`: Resolve all symbols immediately
- `RTLD_GLOBAL`: Export symbols to other libraries
""",
    "questions": lesson2_questions
}

# ============================================================================
# LESSON 3: ABI and Binary Compatibility
# ============================================================================
lesson3_questions = [
    {"id": "cpp-20-3-1", "type": "typing", "question": "What is ABI?", "correctAnswer": ["Application Binary Interface", "binary compatibility"], "explanation": "ABI defines binary interface.", "xp": 5},
    {"id": "cpp-20-3-2", "type": "typing", "question": "What breaks ABI?", "correctAnswer": ["changing struct layout", "adding virtual", "member order"], "explanation": "Layout changes break ABI.", "xp": 5},
    {"id": "cpp-20-3-3", "type": "typing", "question": "What is Pimpl?", "correctAnswer": ["Pointer to Implementation", "hide implementation"], "explanation": "Pimpl hides implementation.", "xp": 5},
    {"id": "cpp-20-3-4", "type": "multiple", "question": "Does adding member break ABI?", "options": ["Yes", "No", "Sometimes", "Never"], "correctAnswer": [0], "explanation": "Adding members changes layout.", "xp": 5},
    {"id": "cpp-20-3-5", "type": "multiple", "question": "Does adding virtual function break ABI?", "options": ["Yes", "No", "Only first", "Only last"], "correctAnswer": [0], "explanation": "Adding virtual adds vptr.", "xp": 5},
    {"id": "cpp-20-3-6", "type": "code", "question": "Pimpl idiom.", "correctAnswer": ["class MyClass { std::unique_ptr<Impl> impl; public: void method(); };", "hide implementation"],
        "explanation": "Use opaque pointer.", "xp": 15},
    {"id": "cpp-20-3-7", "type": "code", "question": "Forward declare Pimpl.", "correctAnswer": ["class MyClass { struct Impl; std::unique_ptr<Impl> impl; };", "forward declaration"],
        "explanation": "Forward declare Impl.", "xp": 15},
    {"id": "cpp-20-3-8", "type": "code", "question": "Define Pimpl in cpp.", "correctAnswer": ["struct MyClass::Impl { int value; };", "definition in cpp file"],
        "explanation": "Define in source file.", "xp": 15},
    {"id": "cpp-20-3-9", "type": "code", "question": "Maintain ABI with versioning.", "correctAnswer": ["// Use versioned library names", "lib.so.1.0.0"],
        "explanation": "Version library files.", "xp": 15},
    {"id": "cpp-20-3-10", "type": "code", "question": "Use opaque pointer.", "correctAnswer": ["typedef struct MyClass* MyClassHandle;", "opaque handle"],
        "explanation": "Hide struct definition.", "xp": 15},
    {"id": "cpp-20-3-11", "type": "code", "question": "Packed struct.", "correctAnswer": ["struct __attribute__((packed)) Data { char c; int i; };", "packed struct"],
        "explanation": "packed for specific layout.", "xp": 15},
    {"id": "cpp-20-3-12", "type": "code", "question": "ABI-stable interface.", "correctAnswer": ["class Interface { public: virtual ~Interface() = default; virtual void method() = 0; };", "abstract interface"],
        "explanation": "Pure virtual interface.", "xp": 15},
    {"id": "cpp-20-3-13", "type": "code", "question": "Add virtual to existing class.", "correctAnswer": ["// Breaks ABI! Changes vtable layout", "adding virtual breaks ABI"],
        "explanation": "Cannot add virtual.", "xp": 15},
    {"id": "cpp-20-3-14", "type": "code", "question": "Reorder struct members.", "correctAnswer": ["// Breaks ABI! Changes layout", "reordering breaks ABI"],
        "explanation": "Cannot change order.", "xp": 15},
    {"id": "cpp-20-3-15", "type": "code", "question": "Versioned soname.", "correctAnswer": ["libmylib.so.1", "soname versioning"],
        "explanation": "Version in soname.", "xp": 15},
    {"id": "cpp-20-3-16", "type": "code", "question": "Export symbols.", "correctAnswer": ["__attribute__((visibility(\"default\")))", "exported symbols"],
        "explanation": "Mark exported symbols.", "xp": 15},
    {"id": "cpp-20-3-17", "type": "code", "question": "Hide symbols.", "correctAnswer": ["__attribute__((visibility(\"hidden\")))", "hidden symbols"],
        "explanation": "Hide internal symbols.", "xp": 15},
    {"id": "cpp-20-3-18", "type": "code", "question": "Symbol versioning script.", "correctAnswer": ["{ global: func; local: *; };", "version script"],
        "explanation": "Define exported symbols.", "xp": 15},
    {"id": "cpp-20-3-19", "type": "code", "question": "C-compatible struct.", "correctAnswer": ["struct Data { int a; int b; };\nstatic_assert(std::is_standard_layout<Data>::value, \"\");", "POD struct"],
        "explanation": "Use POD for compatibility.", "xp": 15},
    {"id": "cpp-20-3-20", "type": "code", "question": "Check struct layout.", "correctAnswer": ["static_assert(sizeof(Data) == 8, \"wrong size\");", "static_assert size"],
        "explanation": "Assert on struct size.", "xp": 15},
    {"id": "cpp-20-3-21", "type": "code", "question": "Binary compatibility across compilers.", "correctAnswer": ["// Same compiler required", "different compilers incompatible"],
        "explanation": "ABI varies by compiler.", "xp": 15},
    {"id": "cpp-20-3-22", "type": "code", "question": "Calling convention.", "correctAnswer": ["__attribute__((stdcall))", "__cdecl __stdcall"],
        "explanation": "Specify calling convention.", "xp": 15},
    {"id": "cpp-20-3-23", "type": "code", "question": "Vtable layout.", "correctAnswer": ["// Compiler specific", "don't rely on vtable order"],
        "explanation": "Vtable is compiler-specific.", "xp": 15},
    {"id": "cpp-20-3-24", "type": "code", "question": "RTTI across ABI boundary.", "correctAnswer": ["// RTTI may not work", "disable RTTI for ABI"],
        "explanation": "RTTI is not portable.", "xp": 15},
    {"id": "cpp-20-3-25", "type": "code", "question": "Exception across ABI boundary.", "correctAnswer": ["// Catch exceptions at boundary", "convert to error codes"],
        "explanation": "Don't let exceptions cross.", "xp": 15}
]

lesson3 = {
    "id": 103, "title": "ABI and Binary Compatibility", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# ABI and Binary Compatibility

Maintaining stable binary interfaces.

## What is ABI?

ABI (Application Binary Interface) defines how binaries interact:

- Data structure layout
- Calling conventions
- Name mangling
- Virtual table layout
- Exception handling

## Pimpl Idiom (Pointer to Implementation)

```cpp
// Header (stable ABI)
class MyClass {
    struct Impl;
    std::unique_ptr<Impl> impl;
public:
    MyClass();
    ~MyClass();
    void method();
};

// Source (implementation)
struct MyClass::Impl {
    int data;
};

MyClass::MyClass() : impl(new Impl()) {}
void MyClass::method() {
    impl->data = 42;
}
```

## ABI-Breaking Changes

❌ **Breaks ABI:**
- Adding/removing members
- Reordering members
- Adding virtual functions
- Changing virtual function order
- Changing base class
- Adding new base class

✅ **Safe Changes:**
- Adding non-virtual functions
- Changing private members (with Pimpl)
- Changing inline functions
- Adding overloaded functions
""",
    "questions": lesson3_questions
}

# Update lesson titles in data to match C/C++ interoperability topics
data['units'][19]['lessons'][0]['title'] = lesson1['title']
data['units'][19]['lessons'][1]['title'] = lesson2['title']
data['units'][19]['lessons'][2]['title'] = lesson3['title']

# Add all lessons to data
data['units'][19]['lessons'][0].update(lesson1)
print("✅ Lesson 1: C and C++ Interoperability - 25 questions (20 code)")

data['units'][19]['lessons'][1].update(lesson2)
print("✅ Lesson 2: Calling Native Libraries - 25 questions (20 code)")

data['units'][19]['lessons'][2].update(lesson3)
print("✅ Lesson 3: ABI and Binary Compatibility - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 20 Complete: All 3 lessons with 25 questions each (75 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~53 (70%)")
print("   - Type-in questions: ~15 (20%)")
print("   - Multiple-choice: ~7 (10%)")