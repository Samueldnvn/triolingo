#!/usr/bin/env python3
"""
Build Unit 20: C and C++ Interoperability (Lessons 10-12)
3 lessons with 25 questions each (75 total)
Heavy emphasis on code questions (~70% = 52.5 code questions)
"""
import json

print("🚀 Building C++ Unit 20: C and C++ Interoperability (Lessons 10-12)")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 10: C++ and Other Languages
# ============================================================================
lesson10_questions = [
    {"id": "cpp-20-10-1", "type": "typing", "question": "Can C++ call C?", "correctAnswer": ["yes", "can"], "explanation": "C++ can call C via extern C.", "xp": 5},
    {"id": "cpp-20-10-2", "type": "typing", "question": "Can C call C++?", "correctAnswer": ["yes with wrapper", "yes"], "explanation": "C can call C++ via extern C wrapper.", "xp": 5},
    {"id": "cpp-20-10-3", "type": "typing", "question": "Can C++ call Python?", "correctAnswer": ["yes via Python API", "yes"], "explanation": "Python C API for C++.", "xp": 5},
    {"id": "cpp-20-10-4", "type": "multiple", "question": "Java JNI?", "options": ["Java Native Interface", "Java Native Integration", "Java Native Internet", "none"], "correctAnswer": [0], "explanation": "JNI is Java Native Interface.", "xp": 5},
    {"id": "cpp-20-10-5", "type": "multiple", "question": "C# interop?", "options": ["P/Invoke", "DLLImport", "extern", "both"], "correctAnswer": [0], "explanation": "P/Invoke for C# interop.", "xp": 5},
    {"id": "cpp-20-10-6", "type": "code", "question": "Python include.", "correctAnswer": ["#include <Python.h>", "Python C API"],
        "explanation": "#include <Python.h>", "xp": 15},
    {"id": "cpp-20-10-7", "type": "code", "question": "Python interpreter init.", "correctAnswer": ["Py_Initialize();", "init Python"],
        "explanation": "Py_Initialize()", "xp": 15},
    {"id": "cpp-20-10-8", "type": "code", "question": "Python finalise.", "correctAnswer": ["Py_Finalize();", "finalise Python"],
        "explanation": "Py_Finalize()", "xp": 15},
    {"id": "cpp-20-10-9", "type": "code", "question": "Python import module.", "correctAnswer": ["PyObject* module = PyImport_ImportModule(\"module\");", "import module"],
        "explanation": "PyImport_ImportModule()", "xp": 15},
    {"id": "cpp-20-10-10", "type": "code", "question": "Python call function.", "correctAnswer": ["PyObject* result = PyObject_CallObject(func, args);", "call Python function"],
        "explanation": "PyObject_CallObject()", "xp": 15},
    {"id": "cpp-20-10-11", "type": "code", "question": "JNI include.", "correctAnswer": ["#include <jni.h>", "JNI header"],
        "explanation": "#include <jni.h>", "xp": 15},
    {"id": "cpp-20-10-12", "type": "code", "question": "JNI method signature.", "correctAnswer": ["JNIEXPORT jint JNICALL Java_Class_method(JNIEnv*, jobject)", "JNI function"],
        "explanation": "JNIEXPORT Type JNICALL Java_Class_method", "xp": 15},
    {"id": "cpp-20-10-13", "type": "code", "question": "JNI get method ID.", "correctAnswer": ["jmethodID mid = env->GetMethodID(clazz, \"method\", \"(I)V\");", "GetMethodID"],
        "explanation": "env->GetMethodID()", "xp": 15},
    {"id": "cpp-20-10-14", "type": "code", "question": "JNI call method.", "correctAnswer": ["env->CallVoidMethod(obj, mid, arg);", "CallVoidMethod"],
        "explanation": "env->CallVoidMethod()", "xp": 15},
    {"id": "cpp-20-10-15", "type": "code", "question": "C# P/Invoke.", "correctAnswer": ["[DllImport(\"lib.dll\")]\nstatic extern int Function(int arg);", "DllImport"],
        "explanation": "[DllImport(\"lib.dll\")]", "xp": 15},
    {"id": "cpp-20-10-16", "type": "code", "question": "C# extern C.", "correctAnswer": ["[DllImport(\"lib\", CallingConvention=CallingConvention.Cdecl)]", "Cdecl calling"],
        "explanation": "CallingConvention.Cdecl", "xp": 15},
    {"id": "cpp-20-10-17", "type": "code", "question": "Rust extern C.", "correctAnswer": ["extern \"C\" fn c_function() {}", "extern C in Rust"],
        "explanation": "extern \"C\" fn", "xp": 15},
    {"id": "cpp-20-10-18", "type": "code", "question": "Go cgo include.", "correctAnswer": ["/* #include <header.h> */", "cgo include"],
        "explanation": "/* #include */ in Go", "xp": 15},
    {"id": "cpp-20-10-19", "type": "code", "question": "Go cgo function.", "correctAnswer": ["/*\nimport \"C\"\n*/\nfunc GoFunction() int {\n    return C.c_function()\n}", "cgo call"],
        "explanation": "C.c_function() in Go", "xp": 15},
    {"id": "cpp-20-10-20", "type": "code", "question": "Node.js N-API.", "correctAnswer": ["#include <node_api.h>", "Node.js API"],
        "explanation": "#include <node_api.h>", "xp": 15},
    {"id": "cpp-20-10-21", "type": "code", "question": "Node.js init.", "correctAnswer": ["napi_value Init(napi_env env, napi_value exports)", "NAPI init"],
        "explanation": "napi_value Init()", "xp": 15},
    {"id": "cpp-20-10-22", "type": "code", "question": "Node.js register.", "correctAnswer": ["NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)", "NAPI_MODULE"],
        "explanation": "NAPI_MODULE()", "xp": 15},
    {"id": "cpp-20-10-23", "type": "code", "question": "Lua include.", "correctAnswer": ["#include <lua.h>", "Lua header"],
        "explanation": "#include <lua.h>", "xp": 15},
    {"id": "cpp-20-10-24", "type": "code", "question": "Lua state.", "correctAnswer": ["lua_State* L = luaL_newstate();", "Lua state"],
        "explanation": "lua_State* L", "xp": 15},
    {"id": "cpp-20-10-25", "type": "code", "question": "Language boundary.", "correctAnswer": ["// Use extern C at language boundaries", "extern C"],
        "explanation": "extern \"C\" for interop.", "xp": 15}
]

lesson10 = {
    "id": "cpp-U20-L10", "title": "C++ and Other Languages", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# C++ and Other Languages

Interoperating C++ with Python, Java, C#, Rust, Go, and more.

## Python C API

```cpp
#include <Python.h>

void call_python() {
    // Initialize Python interpreter
    Py_Initialize();

    // Import module
    PyObject* module = PyImport_ImportModule("mymodule");

    // Get function
    PyObject* func = PyObject_GetAttrString(module, "myfunction");

    // Call function
    PyObject* result = PyObject_CallObject(func, NULL);

    // Cleanup
    Py_DECREF(result);
    Py_Finalize();
}
```

## Java JNI

```cpp
#include <jni.h>

JNIEXPORT jint JNICALL Java_MyClass_nativeMethod(JNIEnv* env, jobject obj, jint value) {
    return value * 2;
}
```

## C# P/Invoke

```csharp
using System.Runtime.InteropServices;

class Native {
    [DllImport("mylib.dll", CallingConvention = CallingConvention.Cdecl)]
    public static extern int MyFunction(int arg);
}
```

## Rust

```rust
#[no_mangle]
pub extern "C" fn c_function(x: i32) -> i32 {
    x * 2
}
```

## Go cgo

```go
/*
#include <header.h>
*/
import "C"

func CallC() int {
    return C.c_function()
}
```
""",
    "questions": lesson10_questions
}

# ============================================================================
# LESSON 11: Performance Considerations
# ============================================================================
lesson11_questions = [
    {"id": "cpp-20-11-1", "type": "typing", "question": "extern C overhead?", "correctAnswer": ["minimal", "none", "very small"], "explanation": "Minimal overhead for extern C.", "xp": 5},
    {"id": "cpp-20-11-2", "type": "typing", "question": "ABI vs API?", "correctAnswer": ["binary vs application", "interface level"], "explanation": "ABI is binary, API is source.", "xp": 5},
    {"id": "cpp-20-11-3", "type": "typing", "question": "Inline across boundaries?", "correctAnswer": ["no", "cannot"], "explanation": "Inline functions can't cross extern C.", "xp": 5},
    {"id": "cpp-20-11-4", "type": "multiple", "question": "Pass by value vs pointer?", "options": ["pointer faster for large", "value always faster", "same", "depends"], "correctAnswer": [0], "explanation": "Pointer faster for large objects.", "xp": 5},
    {"id": "cpp-20-11-5", "type": "multiple", "question": "Calling convention?", "options": ["stdcall cdecl fastcall", "only cdecl", "only stdcall", "auto"], "correctAnswer": [0], "explanation": "Multiple calling conventions.", "xp": 5},
    {"id": "cpp-20-11-6", "type": "code", "question": "stdcall.", "correctAnswer": ["void __stdcall func()", "stdcall convention"],
        "explanation": "__stdcall", "xp": 15},
    {"id": "cpp-20-11-7", "type": "code", "question": "cdecl.", "correctAnswer": ["void __cdecl func()", "cdecl convention"],
        "explanation": "__cdecl", "xp": 15},
    {"id": "cpp-20-11-8", "type": "code", "question": "fastcall.", "correctAnswer": ["void __fastcall func(int a, int b)", "fastcall convention"],
        "explanation": "__fastcall", "xp": 15},
    {"id": "cpp-20-11-9", "type": "code", "question": "Naked function.", "correctAnswer": ["void __declspec(naked) func()", "naked no prolog"],
        "explanation": "__declspec(naked)", "xp": 15},
    {"id": "cpp-20-11-10", "type": "code", "question": "Inline assembly.", "correctAnswer": ["__asm { mov eax, 1 }", "inline asm"],
        "explanation": "__asm {}", "xp": 15},
    {"id": "cpp-20-11-11", "type": "code", "question": "Restrict pointer.", "correctAnswer": ["void func(int* __restrict ptr)", "restrict no alias"],
        "explanation": "__restrict", "xp": 15},
    {"id": "cpp-20-11-12", "type": "code", "question": "Const correctness.", "correctAnswer": ["void func(const int* ptr)", "const pointer"],
        "explanation": "const for read-only.", "xp": 15},
    {"id": "cpp-20-11-13", "type": "code", "question": "Noinline.", "correctAnswer": ["void __attribute__((noinline)) func()", "prevent inlining"],
        "explanation": "__attribute__((noinline))", "xp": 15},
    {"id": "cpp-20-11-14", "type": "code", "question": "Always inline.", "correctAnswer": ["void __attribute__((always_inline)) func()", "force inline"],
        "explanation": "__attribute__((always_inline))", "xp": 15},
    {"id": "cpp-20-11-15", "type": "code", "question": "Hot attribute.", "correctAnswer": ["void __attribute__((hot)) func()", "hot path"],
        "explanation": "__attribute__((hot))", "xp": 15},
    {"id": "cpp-20-11-16", "type": "code", "question": "Cold attribute.", "correctAnswer": ["void __attribute__((cold)) func()", "cold path"],
        "explanation": "__attribute__((cold))", "xp": 15},
    {"id": "cpp-20-11-17", "type": "code", "question": "Flatten.", "correctAnswer": ["void __attribute__((flatten)) func()", "flatten calls"],
        "explanation": "__attribute__((flatten))", "xp": 15},
    {"id": "cpp-20-11-18", "type": "code", "question": "Pure attribute.", "correctAnswer": ["int __attribute__((pure)) func()", "pure function"],
        "explanation": "__attribute__((pure))", "xp": 15},
    {"id": "cpp-20-11-19", "type": "code", "question": "Const attribute.", "correctAnswer": ["int __attribute__((const)) func()", "const pure"],
        "explanation": "__attribute__((const))", "xp": 15},
    {"id": "cpp-20-11-20", "type": "code", "question": "Optimize attribute.", "correctAnswer": ["void __attribute__((optimize(\"O3\"))) func()", "optimize level"],
        "explanation": "__attribute__((optimize))", "xp": 15},
    {"id": "cpp-20-11-21", "type": "code", "question": "Likely macro.", "correctAnswer": ["#if __builtin_expect(condition, 1)", "likely branch"],
        "explanation": "__builtin_expect()", "xp": 15},
    {"id": "cpp-20-11-22", "type": "code", "question": "Unlikely macro.", "correctAnswer": ["#if __builtin_expect(condition, 0)", "unlikely branch"],
        "explanation": "__builtin_expect(0)", "xp": 15},
    {"id": "cpp-20-11-23", "type": "code", "question": "Prefetch.", "correctAnswer": ["__builtin_prefetch(ptr);", "prefetch memory"],
        "explanation": "__builtin_prefetch()", "xp": 15},
    {"id": "cpp-20-11-24", "type": "code", "question": "Cache line size.", "correctAnswer": ["constexpr int CACHE_LINE = 64;", "cache align"],
        "explanation": "Align to cache line.", "xp": 15},
    {"id": "cpp-20-11-25", "type": "code", "question": "Minimize calls.", "correctAnswer": ["// Batch operations to reduce boundary crossings", "batch calls"],
        "explanation": "Reduce crossing frequency.", "xp": 15}
]

lesson11 = {
    "id": "cpp-U20-L11", "title": "Performance Considerations", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Performance Considerations

Optimizing performance across language boundaries.

## Minimal Overhead

```cpp
extern "C" {
    // Direct function call - no overhead
    int fast_function(int a, int b) {
        return a + b;
    }
}
```

## Calling Conventions

```cpp
// __cdecl - caller cleans stack (default C)
int __cdecl cdecl_func(int a, int b);

// __stdcall - callee cleans stack (Windows API)
int __stdcall stdcall_func(int a, int b);

// __fastcall - first args in registers
int __fastcall fastcall_func(int a, int b);
```

## Compiler Attributes

```cpp
// Prevent inlining
void __attribute__((noinline)) dont_inline();

// Force inlining
void __attribute__((always_inline)) force_inline();

// Mark hot/cold paths
void __attribute__((hot)) hot_function();
void __attribute__((cold)) error_handler();

// Pure/const functions
int __attribute__((pure)) compute(int x);
int __attribute__((const)) constant_time(int x);
```

## Performance Tips

- Use `__restrict` for non-aliasing pointers
- Batch operations to minimize boundary crossings
- Pass large objects by pointer, not value
- Use `const` for read-only data
- Align data to cache lines
- Prefer `__builtin_expect` for branch hints
""",
    "questions": lesson11_questions
}

# ============================================================================
# LESSON 12: Debugging Mixed Code
# ============================================================================
lesson12_questions = [
    {"id": "cpp-20-12-1", "type": "typing", "question": "GDB C++?", "correctAnswer": ["gdb", "can"], "explanation": "GDB works for C++.", "xp": 5},
    {"id": "cpp-20-12-2", "type": "typing", "question": "GDB C?", "correctAnswer": ["gdb", "can"], "explanation": "GDB works for C.", "xp": 5},
    {"id": "cpp-20-12-3", "type": "typing", "question": "Demangle names?", "correctAnswer": ["c++filt", "demangle", "gdb does"], "explanation": "c++filt demangles names.", "xp": 5},
    {"id": "cpp-20-12-4", "type": "multiple", "question": "Debug symbols?", "options": ["-g", "-O0", "-d", "both"], "correctAnswer": [0], "explanation": "-g for debug symbols.", "xp": 5},
    {"id": "cpp-20-12-5", "type": "multiple", "question": "Break in extern C?", "options": ["yes", "no", "sometimes", "never"], "correctAnswer": [0], "explanation": "Can breakpoint extern C.", "xp": 5},
    {"id": "cpp-20-12-6", "type": "code", "question": "Compile debug.", "correctAnswer": ["g++ -g -O0 file.cpp", "debug compile"],
        "explanation": "g++ -g -O0", "xp": 15},
    {"id": "cpp-20-12-7", "type": "code", "question": "Run GDB.", "correctAnswer": ["gdb ./program", "start GDB"],
        "explanation": "gdb ./program", "xp": 15},
    {"id": "cpp-20-12-8", "type": "code", "question": "GDB break.", "correctAnswer": ["(gdb) break function", "breakpoint"],
        "explanation": "(gdb) break function", "xp": 15},
    {"id": "cpp-20-12-9", "type": "code", "question": "GDB run.", "correctAnswer": ["(gdb) run", "run program"],
        "explanation": "(gdb) run", "xp": 15},
    {"id": "cpp-20-12-10", "type": "code", "question": "GDB step.", "correctAnswer": ["(gdb) step", "step into"],
        "explanation": "(gdb) step", "xp": 15},
    {"id": "cpp-20-12-11", "type": "code", "question": "GDB next.", "correctAnswer": ["(gdb) next", "step over"],
        "explanation": "(gdb) next", "xp": 15},
    {"id": "cpp-20-12-12", "type": "code", "question": "GDB print.", "correctAnswer": ["(gdb) print variable", "print value"],
        "explanation": "(gdb) print var", "xp": 15},
    {"id": "cpp-20-12-13", "type": "code", "question": "GDB backtrace.", "correctAnswer": ["(gdb) backtrace", "stack trace"],
        "explanation": "(gdb) backtrace", "xp": 15},
    {"id": "cpp-20-12-14", "type": "code", "question": "GDB continue.", "correctAnswer": ["(gdb) continue", "continue execution"],
        "explanation": "(gdb) continue", "xp": 15},
    {"id": "cpp-20-12-15", "type": "code", "question": "Demangle symbol.", "correctAnswer": ["c++filt _Z3funcv", "demangle name"],
        "explanation": "c++filt symbol", "xp": 15},
    {"id": "cpp-20-12-16", "type": "code", "question": "Valgrind.", "correctAnswer": ["valgrind --leak-check=full ./program", "memory check"],
        "explanation": "valgrind", "xp": 15},
    {"id": "cpp-20-12-17", "type": "code", "question": "Strace.", "correctAnswer": ["strace ./program", "system calls"],
        "explanation": "strace", "xp": 15},
    {"id": "cpp-20-12-18", "type": "code", "question": "Ltrace.", "correctAnswer": ["ltrace ./program", "library calls"],
        "explanation": "ltrace", "xp": 15},
    {"id": "cpp-20-12-19", "type": "code", "question": "Addr2line.", "correctAnswer": ["addr2line -e program address", "address to line"],
        "explanation": "addr2line", "xp": 15},
    {"id": "cpp-20-12-20", "type": "code", "question": "Objdump.", "correctAnswer": ["objdump -d program", "disassemble"],
        "explanation": "objdump -d", "xp": 15},
    {"id": "cpp-20-12-21", "type": "code", "question": "Readelf.", "correctAnswer": ["readelf -h program", "elf header"],
        "explanation": "readelf", "xp": 15},
    {"id": "cpp-20-12-22", "type": "code", "question": "Nm symbols.", "correctAnswer": ["nm program", "list symbols"],
        "explanation": "nm", "xp": 15},
    {"id": "cpp-20-12-23", "type": "code", "question": "GDB attach.", "correctAnswer": ["gdb -p <pid>", "attach to process"],
        "explanation": "gdb -p", "xp": 15},
    {"id": "cpp-20-12-24", "type": "code", "question": "Core dump.", "correctAnswer": ["gdb core program", "debug core"],
        "explanation": "gdb core", "xp": 15},
    {"id": "cpp-20-12-25", "type": "code", "question": "Mixed debugging.", "correctAnswer": ["// Use GDB with debug symbols for both C and C++", "debug both"],
        "explanation": "GDB handles both.", "xp": 15}
]

lesson12 = {
    "id": "cpp-U20-L12", "title": "Debugging Mixed Code", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Debugging Mixed Code

Debugging C and C++ code together.

## Compile with Debug Symbols

```bash
# C++ with debug info
g++ -g -O0 -o program program.cpp

# C with debug info
gcc -g -O0 -o program program.c
```

## GDB Commands

```bash
# Start GDB
gdb ./program

# Common commands
(gdb) break function      # Set breakpoint
(gdb) break file.cpp:42   # Set breakpoint at line
(gdb) run                 # Run program
(gdb) step                # Step into
(gdb) next                # Step over
(gdb) continue            # Continue execution
(gdb) print var           # Print variable
(gdb) backtrace           # Show stack
(gdb) frame 3             # Switch frame
(gdb) quit                # Exit GDB
```

## Debugging Tools

```bash
# Check for memory leaks
valgrind --leak-check=full ./program

# Trace system calls
strace ./program

# Trace library calls
ltrace ./program

# Demangle C++ symbols
c++filt _Z3funcv

# Convert address to line
addr2line -e program 0x400500
```

## Mixed Code Debugging

```cpp
// Set breakpoints in both C and C++ code
extern "C" void c_function() {
    // Can breakpoint here
}

void cpp_function() {
    c_function();  // Can step from C++ to C
}
```

GDB handles both C and C++ seamlessly!
""",
    "questions": lesson12_questions
}

# Update lesson titles and add lessons
data['units'][19]['lessons'][9]['title'] = lesson10['title']
data['units'][19]['lessons'][10]['title'] = lesson11['title']
data['units'][19]['lessons'][11]['title'] = lesson12['title']

# Add all lessons to data
data['units'][19]['lessons'][9].update(lesson10)
print("✅ Lesson 10: C++ and Other Languages - 25 questions (20 code)")

data['units'][19]['lessons'][10].update(lesson11)
print("✅ Lesson 11: Performance Considerations - 25 questions (20 code)")

data['units'][19]['lessons'][11].update(lesson12)
print("✅ Lesson 12: Debugging Mixed Code - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 20 (Lessons 10-12) Complete: 3 lessons with 25 questions each (75 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~53 (70%)")
print("   - Type-in questions: ~15 (20%)")
print("   - Multiple-choice: ~7 (10%)")
print("\nUnit 20 now has 12 complete lessons (300 questions total)")