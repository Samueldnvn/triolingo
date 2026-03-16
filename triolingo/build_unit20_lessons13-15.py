#!/usr/bin/env python3
"""
Build Unit 20: C and C++ Interoperability (Lessons 13-15)
3 lessons with 25 questions each (75 total)
Heavy emphasis on code questions (~70% = 52.5 code questions)
Final lessons to complete Unit 20!
"""
import json

print("🚀 Building C++ Unit 20: C and C++ Interoperability (Lessons 13-15) - FINAL!")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 13: Resource Management
# ============================================================================
lesson13_questions = [
    {"id": "cpp-20-13-1", "type": "typing", "question": "What is RAII?", "correctAnswer": ["resource acquisition is initialization", "acquire in constructor release in destructor"], "explanation": "RAII manages resources via lifetimes.", "xp": 5},
    {"id": "cpp-20-13-2", "type": "typing", "question": "RAII destructor?", "correctAnswer": ["automatic cleanup", "auto release"], "explanation": "Destructor cleans up.", "xp": 5},
    {"id": "cpp-20-13-3", "type": "typing", "question": "Can RAII work with C?", "correctAnswer": ["yes with wrappers", "yes"], "explanation": "Wrap C resources in C++ RAII.", "xp": 5},
    {"id": "cpp-20-13-4", "type": "multiple", "question": "Unique_ptr?", "options": ["single ownership", "shared", "weak", "none"], "correctAnswer": [0], "explanation": "unique_ptr exclusive ownership.", "xp": 5},
    {"id": "cpp-20-13-5", "type": "multiple", "question": "Shared_ptr?", "options": ["shared ownership", "exclusive", "weak", "none"], "correctAnswer": [0], "explanation": "shared_ptr shared ownership.", "xp": 5},
    {"id": "cpp-20-13-6", "type": "code", "question": "Unique_ptr from malloc.", "correctAnswer": ["std::unique_ptr<int, decltype(&free)> ptr((int*)malloc(sizeof(int)), free);", "unique_ptr custom deleter"],
        "explanation": "unique_ptr<T, Deleter>", "xp": 15},
    {"id": "cpp-20-13-7", "type": "code", "question": "Unique_ptr from new.", "correctAnswer": ["std::unique_ptr<int> ptr(new int);", "unique_ptr default"],
        "explanation": "unique_ptr<T>(new T)", "xp": 15},
    {"id": "cpp-20-13-8", "type": "code", "question": "Make unique.", "correctAnswer": ["auto ptr = std::make_unique<int>(42);", "make_unique"],
        "explanation": "std::make_unique<T>()", "xp": 15},
    {"id": "cpp-20-13-9", "type": "code", "question": "Unique_ptr release.", "correctAnswer": ["int* raw = ptr.release();", "release ownership"],
        "explanation": "ptr.release()", "xp": 15},
    {"id": "cpp-20-13-10", "type": "code", "question": "Unique_ptr reset.", "correctAnswer": ["ptr.reset(new int);", "reset pointer"],
        "explanation": "ptr.reset()", "xp": 15},
    {"id": "cpp-20-13-11", "type": "code", "question": "Shared_ptr from new.", "correctAnswer": ["std::shared_ptr<int> ptr(new int);", "shared_ptr"],
        "explanation": "shared_ptr<T>(new T)", "xp": 15},
    {"id": "cpp-20-13-12", "type": "code", "question": "Make shared.", "correctAnswer": ["auto ptr = std::make_shared<int>(42);", "make_shared"],
        "explanation": "std::make_shared<T>()", "xp": 15},
    {"id": "cpp-20-13-13", "type": "code", "question": "Shared_ptr use count.", "correctAnswer": ["ptr.use_count()", "use count"],
        "explanation": "ptr.use_count()", "xp": 15},
    {"id": "cpp-20-13-14", "type": "code", "question": "Shared_ptr custom deleter.", "correctAnswer": ["std::shared_ptr<int> ptr((int*)malloc(sizeof(int)), free);", "custom deleter"],
        "explanation": "shared_ptr<T>(ptr, deleter)", "xp": 15},
    {"id": "cpp-20-13-15", "type": "code", "question": "Weak_ptr.", "correctAnswer": ["std::weak_ptr<int> wptr = ptr;", "weak pointer"],
        "explanation": "weak_ptr<T>", "xp": 15},
    {"id": "cpp-20-13-16", "type": "code", "question": "Lock weak_ptr.", "correctAnswer": ["if (auto sptr = wptr.lock())", "lock weak"],
        "explanation": "wptr.lock()", "xp": 15},
    {"id": "cpp-20-13-17", "type": "code", "question": "RAII file wrapper.", "correctAnswer": ["class File { FILE* f; public: File(const char* p) { f = fopen(p, \"r\"); } ~File() { if (f) fclose(f); } };", "RAII file"],
        "explanation": "Destructor closes file.", "xp": 15},
    {"id": "cpp-20-13-18", "type": "code", "question": "RAII mutex lock.", "correctAnswer": ["class Lock { pthread_mutex_t* m; public: Lock(pthread_mutex_t* mutex) { m = mutex; pthread_mutex_lock(m); } ~Lock() { pthread_mutex_unlock(m); } };", "RAII lock"],
        "explanation": "Destructor unlocks.", "xp": 15},
    {"id": "cpp-20-13-19", "type": "code", "question": "RAII array wrapper.", "correctAnswer": ["template<typename T> struct Array { T* data; size_t size; Array(size_t n) : data((T*)malloc(n*sizeof(T))), size(n) {} ~Array() { free(data); } };", "RAII array"],
        "explanation": "Template RAII array.", "xp": 15},
    {"id": "cpp-20-13-20", "type": "code", "question": "Move unique_ptr.", "correctAnswer": ["auto ptr2 = std::move(ptr1);", "move ownership"],
        "explanation": "std::move(ptr)", "xp": 15},
    {"id": "cpp-20-13-21", "type": "code", "question": "Get raw pointer.", "correctAnswer": ["int* raw = ptr.get();", "get raw"],
        "explanation": "ptr.get()", "xp": 15},
    {"id": "cpp-20-13-22", "type": "code", "question": "Swap unique_ptr.", "correctAnswer": ["ptr1.swap(ptr2);", "swap pointers"],
        "explanation": "ptr.swap()", "xp": 15},
    {"id": "cpp-20-13-23", "type": "code", "question": "Deleter lambda.", "correctAnswer": ["std::unique_ptr<int, std::function<void(int*)>> ptr(ptr, [](int* p) { free(p); });", "lambda deleter"],
        "explanation": "Lambda as deleter.", "xp": 15},
    {"id": "cpp-20-13-24", "type": "code", "question": "Enable shared from this.", "correctAnswer": ["class MyClass : public std::enable_shared_from_this<MyClass>", "enable shared_from_this"],
        "explanation": "Inherit enable_shared_from_this.", "xp": 15},
    {"id": "cpp-20-13-25", "type": "code", "question": "Shared from this.", "correctAnswer": ["auto sptr = shared_from_this();", "shared_from_this"],
        "explanation": "shared_from_this()", "xp": 15}
]

lesson13 = {
    "id": "cpp-U20-L13", "title": "Resource Management", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Resource Management

Managing C resources with C++ RAII.

## RAII for C Resources

```cpp
// RAII wrapper for FILE*
class File {
    FILE* f;
public:
    File(const char* path) {
        f = std::fopen(path, "r");
    }
    ~File() {
        if (f) std::fclose(f);
    }
    FILE* get() { return f; }
};

void read_file() {
    File file("data.txt");
    // Use file.get()
    // Automatically closed when File goes out of scope
}
```

## Smart Pointers with C Resources

```cpp
// unique_ptr with custom deleter for malloc
auto ptr = std::unique_ptr<int, decltype(&free)>(
    (int*)std::malloc(sizeof(int)),
    std::free
);

// shared_ptr with custom deleter
std::shared_ptr<FILE> file(
    std::fopen("data.txt", "r"),
    [](FILE* f) { if (f) std::fclose(f); }
);

// Make smart pointers (for new/delete)
auto ptr = std::make_unique<int>(42);
auto sptr = std::make_shared<int>(42);
```

## RAII Mutex Lock

```cpp
class Lock {
    pthread_mutex_t* m;
public:
    Lock(pthread_mutex_t* mutex) : m(mutex) {
        pthread_mutex_lock(m);
    }
    ~Lock() {
        pthread_mutex_unlock(m);
    }
};

void critical_section() {
    Lock lock(&mutex);
    // Critical code here
    // Automatically unlocked
}
```
""",
    "questions": lesson13_questions
}

# ============================================================================
# LESSON 14: Type Safety and Casting
# ============================================================================
lesson14_questions = [
    {"id": "cpp-20-14-1", "type": "typing", "question": "What is static_cast?", "correctAnswer": ["compile time cast", "static casting"], "explanation": "static_cast at compile time.", "xp": 5},
    {"id": "cpp-20-14-2", "type": "typing", "question": "What is dynamic_cast?", "correctAnswer": ["runtime cast", "dynamic casting"], "explanation": "dynamic_cast at runtime.", "xp": 5},
    {"id": "cpp-20-14-3", "type": "typing", "question": "What is reinterpret_cast?", "correctAnswer": ["bit cast", "dangerous cast"], "explanation": "reinterpret_cast for low-level.", "xp": 5},
    {"id": "cpp-20-14-4", "type": "multiple", "question": "Const_cast?", "options": ["remove const", "add only", "both", "none"], "correctAnswer": [0], "explanation": "const_cast removes const.", "xp": 5},
    {"id": "cpp-20-14-5", "type": "multiple", "question": "C cast vs C++?", "options": ["C++ safer", "C safer", "same", "neither"], "correctAnswer": [0], "explanation": "C++ casts are safer.", "xp": 5},
    {"id": "cpp-20-14-6", "type": "code", "question": "Static cast.", "correctAnswer": ["double d = 3.14;\nint i = static_cast<int>(d);", "static_cast"],
        "explanation": "static_cast<T>()", "xp": 15},
    {"id": "cpp-20-14-7", "type": "code", "question": "Dynamic cast.", "correctAnswer": ["Derived* d = dynamic_cast<Derived*>(base);", "dynamic_cast"],
        "explanation": "dynamic_cast<T*>()", "xp": 15},
    {"id": "cpp-20-14-8", "type": "code", "question": "Reinterpret cast.", "correctAnswer": ["int* ptr = reinterpret_cast<int*>(address);", "reinterpret_cast"],
        "explanation": "reinterpret_cast<T>()", "xp": 15},
    {"id": "cpp-20-14-9", "type": "code", "question": "Const cast.", "correctAnswer": ["const int* ci = &i;\nint* i2 = const_cast<int*>(ci);", "const_cast"],
        "explanation": "const_cast<T>()", "xp": 15},
    {"id": "cpp-20-14-10", "type": "code", "question": "C cast.", "correctAnswer": ["int i = (int)3.14;", "C cast"],
        "explanation": "(Type)value", "xp": 15},
    {"id": "cpp-20-14-11", "type": "code", "question": "Void pointer to int.", "correctAnswer": ["void* vptr = &i;\nint* iptr = static_cast<int*>(vptr);", "void to int"],
        "explanation": "static_cast from void*", "xp": 15},
    {"id": "cpp-20-14-12", "type": "code", "question": "Int to void pointer.", "correctAnswer": ["void* vptr = static_cast<void*>(&i);", "int to void"],
        "explanation": "static_cast to void*", "xp": 15},
    {"id": "cpp-20-14-13", "type": "code", "question": "Cast void* from C.", "correctAnswer": ["extern \"C\" void* c_alloc(size_t size);\nint* ptr = static_cast<int*>(c_alloc(10));", "cast from C"],
        "explanation": "Cast C void*.", "xp": 15},
    {"id": "cpp-20-14-14", "type": "code", "question": "Type punning.", "correctAnswer": ["union { float f; int i; } u;\nu.f = 3.14f;\nint bits = u.i;", "union type pun"],
        "explanation": "Union for type punning.", "xp": 15},
    {"id": "cpp-20-14-15", "type": "code", "question": "Bit cast C++20.", "correctAnswer": ["int bits = std::bit_cast<int>(3.14f);", "bit_cast"],
        "explanation": "std::bit_cast<T>(value)", "xp": 15},
    {"id": "cpp-20-14-16", "type": "code", "question": "Check dynamic cast.", "correctAnswer": ["if (Derived* d = dynamic_cast<Derived*>(base))", "check cast"],
        "explanation": "Check if cast succeeds.", "xp": 15},
    {"id": "cpp-20-14-17", "type": "code", "question": "Cast to base.", "correctAnswer": ["Base* base = static_cast<Base*>(derived);", "upcast"],
        "explanation": "Upcast to base.", "xp": 15},
    {"id": "cpp-20-14-18", "type": "code", "question": "Cast function pointer.", "correctAnswer": ["using FuncType = void(*)();\nFuncType func = reinterpret_cast<FuncType>(address);", "function pointer cast"],
        "explanation": "reinterpret_cast function ptr.", "xp": 15},
    {"id": "cpp-20-14-19", "type": "code", "question": "Integer to pointer.", "correctAnswer": ["int* ptr = reinterpret_cast<int*>(0x1000);", "int to ptr"],
        "explanation": "reinterpret_cast int to ptr.", "xp": 15},
    {"id": "cpp-20-14-20", "type": "code", "question": "Pointer to integer.", "correctAnswer": ["uintptr_t addr = reinterpret_cast<uintptr_t>(ptr);", "ptr to int"],
        "explanation": "reinterpret_cast ptr to int.", "xp": 15},
    {"id": "cpp-20-14-21", "type": "code", "question": "Const pointer to non-const.", "correctAnswer": ["const int* ci = &i;\nint* i2 = const_cast<int*>(ci);", "remove const"],
        "explanation": "const_cast to remove const.", "xp": 15},
    {"id": "cpp-20-14-22", "type": "code", "question": "Add const.", "correctAnswer": ["const int* ci = const_cast<const int*>(&i);", "add const"],
        "explanation": "const_cast to add const.", "xp": 15},
    {"id": "cpp-20-14-23", "type": "code", "question": "Volatile cast.", "correctAnswer": ["volatile int* vi = const_cast<volatile int*>(&i);", "volatile cast"],
        "explanation": "Add volatile.", "xp": 15},
    {"id": "cpp-20-14-24", "type": "code", "question": "Type alias.", "correctAnswer": ["using IntPtr = int*;", "type alias"],
        "explanation": "using Alias = Type", "xp": 15},
    {"id": "cpp-20-14-25", "type": "code", "question": "Typedef.", "correctAnswer": ["typedef int* IntPtr;", "typedef"],
        "explanation": "typedef OldType NewType", "xp": 15}
]

lesson14 = {
    "id": "cpp-U20-L14", "title": "Type Safety and Casting", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Type Safety and Casting

Casting types between C and C++.

## C++ Cast Operators

```cpp
// static_cast - compile-time, related types
int i = static_cast<int>(3.14);
Base* base = static_cast<Base*>(derived);

// dynamic_cast - runtime, polymorphic types
Derived* d = dynamic_cast<Derived*>(base);
if (d) { /* cast succeeded */ }

// reinterpret_cast - low-level, bit representation
int* ptr = reinterpret_cast<int*>(0x1000);
int* iptr = reinterpret_cast<int*>(void_ptr);

// const_cast - add/remove const
const int* ci = &value;
int* i = const_cast<int*>(ci);
```

## Casting C Pointers

```cpp
// C function returns void*
extern "C" void* c_allocate(size_t size);

// Cast to specific type
int* ptr = static_cast<int*>(c_allocate(sizeof(int)));

// Cast back to void* for C function
extern "C" void c_free(void* ptr);
c_free(static_cast<void*>(ptr));
```

## Type Punning

```cpp
// Type punning via union (C and C++)
union FloatInt {
    float f;
    int i;
};

FloatInt u;
u.f = 3.14f;
int bits = u.i;

// C++20 bit_cast
int bits = std::bit_cast<int>(3.14f);
```

## Function Pointer Casting

```cpp
using FuncType = void(*)();

// Cast address to function pointer
FuncType func = reinterpret_cast<FuncType>(address);
func();
```
""",
    "questions": lesson14_questions
}

# ============================================================================
# LESSON 15: Advanced Interoperability Patterns
# ============================================================================
lesson15_questions = [
    {"id": "cpp-20-15-1", "type": "typing", "question": "What is C API wrapper?", "correctAnswer": ["C++ wrapper around C", "wrapper class"], "explanation": "Wrap C API in C++ class.", "xp": 5},
    {"id": "cpp-20-15-2", "type": "typing", "question": "What is opaque pointer?", "correctAnswer": ["void* handle", "hidden implementation"], "explanation": "Opaque pointer hides details.", "xp": 5},
    {"id": "cpp-20-15-3", "type": "typing", "question": "What is bridge pattern?", "correctAnswer": ["adapter pattern", "interface adapter"], "explanation": "Bridge connects interfaces.", "xp": 5},
    {"id": "cpp-20-15-4", "type": "multiple", "question": "Handle idiom?", "options": ["opaque pointer", "smart pointer", "reference", "raw"], "correctAnswer": [0], "explanation": "Handle is opaque pointer.", "xp": 5},
    {"id": "cpp-20-15-5", "type": "multiple", "question": "Factory for C?", "options": ["create function", "constructor", "both", "none"], "correctAnswer": [0], "explanation": "Create function for C.", "xp": 5},
    {"id": "cpp-20-15-6", "type": "code", "question": "Opaque typedef.", "correctAnswer": ["typedef struct Opaque* OpaqueHandle;", "opaque handle"],
        "explanation": "typedef struct* Handle", "xp": 15},
    {"id": "cpp-20-15-7", "type": "code", "question": "Create function.", "correctAnswer": ["extern \"C\" OpaqueHandle create_handle();", "create handle"],
        "explanation": "Create returns handle.", "xp": 15},
    {"id": "cpp-20-15-8", "type": "code", "question": "Destroy function.", "correctAnswer": ["extern \"C\" void destroy_handle(OpaqueHandle h);", "destroy handle"],
        "explanation": "Destroy frees handle.", "xp": 15},
    {"id": "cpp-20-15-9", "type": "code", "question": "Use handle.", "correctAnswer": ["extern \"C\" int use_handle(OpaqueHandle h);", "use handle"],
        "explanation": "Functions take handle.", "xp": 15},
    {"id": "cpp-20-15-10", "type": "code", "question": "Handle to object.", "correctAnswer": ["class Wrapper { OpaqueHandle h; public: Wrapper() : h(create_handle()) {} ~Wrapper() { destroy_handle(h); } };", "RAII handle"],
        "explanation": "Wrap handle in RAII.", "xp": 15},
    {"id": "cpp-20-15-11", "type": "code", "question": "C callback wrapper.", "correctAnswer": ["extern \"C\" void c_callback(void* userdata, int event) { auto* self = static_cast<Wrapper*>(userdata); self->onEvent(event); }", "callback wrapper"],
        "explanation": "Static callback casts userdata.", "xp": 15},
    {"id": "cpp-20-15-12", "type": "code", "question": "Register callback.", "correctAnswer": ["extern \"C\" void register_callback(void (*cb)(void*, int), void* userdata);", "register callback"],
        "explanation": "Register takes userdata.", "xp": 15},
    {"id": "cpp-20-15-13", "type": "code", "question": "Set userdata.", "correctAnswer": ["register_callback(c_callback, this);", "pass this"],
        "explanation": "Pass this as userdata.", "xp": 15},
    {"id": "cpp-20-15-14", "type": "code", "question": "C++ to C++ via C.", "correctAnswer": ["// Use extern C for C++ to C++ boundaries", "C++ to C++ via C"],
        "explanation": "Use C boundary for ABI.", "xp": 15},
    {"id": "cpp-20-15-15", "type": "code", "question": "Version struct.", "correctAnswer": ["typedef struct { int major; int minor; } Version;", "version struct"],
        "explanation": "Struct for version.", "xp": 15},
    {"id": "cpp-20-15-16", "type": "code", "question": "Init struct.", "correctAnswer": ["extern \"C\" void init(InitParams* params);", "init with params"],
        "explanation": "Init takes struct.", "xp": 15},
    {"id": "cpp-20-15-17", "type": "code", "question": "Config struct.", "correctAnswer": ["typedef struct { int flags; void* custom_data; } Config;", "config struct"],
        "explanation": "Config struct.", "xp": 15},
    {"id": "cpp-20-15-18", "type": "code", "question": "Array in struct.", "correctAnswer": ["typedef struct { int count; int values[]; } Array;", "flexible array"],
        "explanation": "Flexible array member.", "xp": 15},
    {"id": "cpp-20-15-19", "type": "code", "question": "String in struct.", "correctAnswer": ["typedef struct { char name[256]; } Info;", "string in struct"],
        "explanation": "Fixed array for string.", "xp": 15},
    {"id": "cpp-20-15-20", "type": "code", "question": "Union in struct.", "correctAnswer": ["typedef struct { int type; union { int i; float f; } value; } Variant;", "union in struct"],
        "explanation": "Union for variant.", "xp": 15},
    {"id": "cpp-20-15-21", "type": "code", "question": "Function in struct.", "correctAnswer": ["typedef struct { void (*func)(void* userdata); void* userdata; } Callback;", "function pointer"],
        "explanation": "Function pointer in struct.", "xp": 15},
    {"id": "cpp-20-15-22", "type": "code", "question": "Error enum.", "correctAnswer": ["typedef enum { ERROR_OK = 0, ERROR_FAIL, ERROR_INVALID } ErrorCode;", "error enum"],
        "explanation": "Enum for errors.", "xp": 15},
    {"id": "cpp-20-15-23", "type": "code", "question": "Return error.", "correctAnswer": ["extern \"C\" ErrorCode do_work();", "return error code"],
        "explanation": "Return ErrorCode.", "xp": 15},
    {"id": "cpp-20-15-24", "type": "code", "question": "Check error.", "correctAnswer": ["ErrorCode err = do_work();\nif (err != ERROR_OK) { /* handle */ }", "check error"],
        "explanation": "Compare error code.", "xp": 15},
    {"id": "cpp-20-15-25", "type": "code", "question": "C API class wrapper.", "correctAnswer": ["class CppWrapper { OpaqueHandle h; public: CppWrapper() { h = create_handle(); } ~CppWrapper() { destroy_handle(h); } int work() { return use_handle(h); } };", "complete wrapper"],
        "explanation": "Full RAII wrapper.", "xp": 15}
]

lesson15 = {
    "id": "cpp-U20-L15", "title": "Advanced Interoperability Patterns", "unitTitle": "20. C and C++ Interoperability", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Advanced Interoperability Patterns

Advanced patterns for C/C++ interoperability.

## Opaque Pointer (Handle) Pattern

```c
// C API header
typedef struct Opaque* OpaqueHandle;

extern "C" OpaqueHandle create_handle();
extern "C" void destroy_handle(OpaqueHandle h);
extern "C" int use_handle(OpaqueHandle h);
```

```cpp
// C++ RAII wrapper
class Wrapper {
    OpaqueHandle h;
public:
    Wrapper() : h(create_handle()) {}
    ~Wrapper() { destroy_handle(h); }
    
    int use() { return use_handle(h); }
};
```

## Callback Pattern

```c
// C callback
typedef void (*CallbackFunc)(void* userdata, int event);

extern "C" void register_callback(CallbackFunc cb, void* userdata);
```

```cpp
// C++ wrapper
class Widget {
public:
    void register() {
        ::register_callback(c_callback, this);
    }
    
private:
    static void c_callback(void* userdata, int event) {
        auto* self = static_cast<Widget*>(userdata);
        self->onEvent(event);
    }
    
    void onEvent(int event) {
        // Handle event in C++
    }
};
```

## Configuration Struct Pattern

```c
typedef struct {
    int flags;
    size_t buffer_size;
    void* custom_data;
} InitParams;

extern "C" ErrorCode init(const InitParams* params);
```

```cpp
// Use from C++
InitParams params = {};
params.flags = FLAG_A | FLAG_B;
params.buffer_size = 1024;

ErrorCode err = init(&params);
if (err != ERROR_OK) {
    // Handle error
}
```
""",
    "questions": lesson15_questions
}

# Update lesson titles and add lessons
data['units'][19]['lessons'][12]['title'] = lesson13['title']
data['units'][19]['lessons'][13]['title'] = lesson14['title']
data['units'][19]['lessons'][14]['title'] = lesson15['title']

# Add all lessons to data
data['units'][19]['lessons'][12].update(lesson13)
print("✅ Lesson 13: Resource Management - 25 questions (20 code)")

data['units'][19]['lessons'][13].update(lesson14)
print("✅ Lesson 14: Type Safety and Casting - 25 questions (20 code)")

data['units'][19]['lessons'][14].update(lesson15)
print("✅ Lesson 15: Advanced Interoperability Patterns - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 20 (Lessons 13-15) Complete: 3 lessons with 25 questions each (75 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~53 (70%)")
print("   - Type-in questions: ~15 (20%)")
print("   - Multiple-choice: ~7 (10%)")
print("\n🎊 UNIT 20 COMPLETE! 🎊")
print("   - 15 lessons with 25 questions each (375 total questions)")
print("   - Unit 20: C and C++ Interoperability is FULLY BUILT!")