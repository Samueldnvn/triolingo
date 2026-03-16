#!/usr/bin/env python3
"""
Build Unit 7: Resource Management
5 lessons with 25 questions each (125 total)
Heavy emphasis on code questions (~70% = 87 code questions)
"""
import json

print("🚀 Building C++ Unit 7: Resource Management")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: RAII (Resource Acquisition Is Initialization)
# ============================================================================
lesson1_questions = [
    {
        "id": "cpp-7-1-1", "type": "typing", "question": "What does RAII stand for?", "correctAnswer": ["Resource Acquisition Is Initialization"], "explanation": "RAII is a C++ idiom where resource acquisition is tied to object lifetime.", "xp": 5
    },
    {
        "id": "cpp-7-1-2", "type": "typing", "question": "When are resources released in RAII?", "correctAnswer": ["in destructor", "when object is destroyed", "out of scope"], "explanation": "Resources are automatically released in destructor when object goes out of scope.", "xp": 5
    },
    {
        "id": "cpp-7-1-3", "type": "typing", "question": "What is the benefit of RAII?", "correctAnswer": ["automatic resource cleanup", "no memory leaks", "exception safety"], "explanation": "RAII ensures automatic cleanup even when exceptions occur.", "xp": 5
    },
    {
        "id": "cpp-7-1-4", "type": "multiple", "question": "Does RAII work with exceptions?", "options": ["Yes", "No", "Only with try-catch", "Only with noexcept"], "correctAnswer": [0], "explanation": "RAII works correctly with exceptions - destructor is called during stack unwinding.", "xp": 5
    },
    {
        "id": "cpp-7-1-5", "type": "multiple", "question": "What happens when exception is thrown in RAII class?", "options": ["Destructor is called", "Resource is leaked", "Program crashes", "Undefined"], "correctAnswer": [0], "explanation": "Destructor is automatically called during stack unwinding, releasing resources.", "xp": 5
    },
    {
        "id": "cpp-7-1-6", "type": "code", "question": "Create RAII class managing file handle.",
        "correctAnswer": ["class FileHandle { FILE* f; public: FileHandle(const char* path) { f = fopen(path, \"r\"); } ~FileHandle() { if (f) fclose(f); } };"],
        "explanation": "RAII class acquires resource in constructor, releases in destructor.", "xp": 15
    },
    {
        "id": "cpp-7-1-7", "type": "code", "question": "Create RAII class managing dynamic array.",
        "correctAnswer": ["class Array { int* data; size_t size; public: Array(size_t n) : size(n) { data = new int[n]; } ~Array() { delete[] data; } };"],
        "explanation": "RAII ensures array is deleted when object goes out of scope.", "xp": 15
    },
    {
        "id": "cpp-7-1-8", "type": "code", "question": "Create RAII class with lock using mutex.",
        "correctAnswer": ["class LockGuard { mutex& m; public: LockGuard(mutex& mtx) : m(mtx) { m.lock(); } ~LockGuard() { m.unlock(); } };"],
        "explanation": "RAII lock guard ensures mutex is unlocked even with exceptions.", "xp": 15
    },
    {
        "id": "cpp-7-1-9", "type": "code", "question": "Use RAII to open file and ensure it's closed.",
        "correctAnswer": ["{ FileHandle file(\"data.txt\"); /* use file */ } // file automatically closed"],
        "explanation": "Scope-based RAII ensures resource cleanup.", "xp": 15
    },
    {
        "id": "cpp-7-1-10", "type": "code", "question": "Create RAII wrapper for socket.",
        "correctAnswer": ["class Socket { int sock; public: Socket() { sock = socket(AF_INET, SOCK_STREAM, 0); } ~Socket() { close(sock); } };"],
        "explanation": "RAII wrapper ensures socket is closed when object destroyed.", "xp": 15
    },
    {
        "id": "cpp-7-1-11", "type": "code", "question": "Create RAII class managing database connection.",
        "correctAnswer": ["class DBConnection { Connection* conn; public: DBConnection() { conn = new Connection(); } ~DBConnection() { delete conn; } };"],
        "explanation": "RAII ensures database connection is properly closed.", "xp": 15
    },
    {
        "id": "cpp-7-1-12", "type": "code", "question": "Create RAII buffer with custom cleanup.",
        "correctAnswer": ["class Buffer { void* buf; public: Buffer(size_t size) { buf = malloc(size); } ~Buffer() { free(buf); } };"],
        "explanation": "RAII can wrap any resource with cleanup function.", "xp": 15
    },
    {
        "id": "cpp-7-1-13", "type": "code", "question": "Use RAII with std::unique_ptr.",
        "correctAnswer": ["std::unique_ptr<int, void(*)(int*)> ptr(malloc(sizeof(int)), free);"],
        "explanation": "unique_ptr with custom deleter implements RAII for any resource.", "xp": 15
    },
    {
        "id": "cpp-7-1-14", "type": "code", "question": "Create RAII timer measuring scope duration.",
        "correctAnswer": ["class Timer { clock_t start; public: Timer() : start(clock()) {} ~Timer() { cout << clock() - start << \" ms\" << endl; } };"],
        "explanation": "RAII timer automatically prints duration when scope ends.", "xp": 15
    },
    {
        "id": "cpp-7-1-15", "type": "code", "question": "Create RAII class with move-only semantics.",
        "correctAnswer": ["class Resource { int* data; public: Resource() { data = new int; } ~Resource() { delete data; } Resource(const Resource&) = delete; Resource& operator=(const Resource&) = delete; Resource(Resource&& other) noexcept; };"],
        "explanation": "Move-only RAII prevents accidental copying of unique resources.", "xp": 15
    },
    {
        "id": "cpp-7-1-16", "type": "code", "question": "Use RAII to manage temporary file.",
        "correctAnswer": ["class TempFile { string path; public: TempFile() { path = \"/tmp/\" + to_string(getpid()); } ~TempFile() { remove(path.c_str()); } const char* getPath() const { return path.c_str(); } };"],
        "explanation": "RAII ensures temporary file is deleted when object destroyed.", "xp": 15
    },
    {
        "id": "cpp-7-1-17", "type": "code", "question": "Create RAII class changing directory.",
        "correctAnswer": ["class DirGuard { string old; public: DirGuard(const string& newDir) { old = getcwd(nullptr, 0); chdir(newDir.c_str()); } ~DirGuard() { chdir(old.c_str()); } };"],
        "explanation": "RAII directory guard restores original directory when scope ends.", "xp": 15
    },
    {
        "id": "cpp-7-1-18", "type": "code", "question": "Implement RAII for OpenGL buffer.",
        "correctAnswer": ["class GLBuffer { GLuint id; public: GLBuffer() { glGenBuffers(1, &id); } ~GLBuffer() { glDeleteBuffers(1, &id); } GLuint get() const { return id; } };"],
        "explanation": "RAII wrapper ensures OpenGL resources are released.", "xp": 15
    },
    {
        "id": "cpp-7-1-19", "type": "code", "question": "Create RAII class with disabled copy and assignment.",
        "correctAnswer": ["class Resource { public: Resource(const Resource&) = delete; Resource& operator=(const Resource&) = delete; };"],
        "explanation": "Delete copy constructor and assignment to prevent issues.", "xp": 15
    },
    {
        "id": "cpp-7-1-20", "type": "code", "question": "Use RAII to measure function execution time.",
        "correctAnswer": ["void myFunc() { Timer timer; /* function code */ } // Timer destructor prints time"],
        "explanation": "RAII timer automatically measures function duration.", "xp": 15
    },
    {
        "id": "cpp-7-1-21", "type": "code", "question": "Create RAII wrapper for C library resource.",
        "correctAnswer": ["class CResource { void* handle; public: CResource() { handle = create_resource(); } ~CResource() { destroy_resource(handle); } };"],
        "explanation": "RAII can wrap any C resource with create/destroy functions.", "xp": 15
    },
    {
        "id": "cpp-7-1-22", "type": "code", "question": "Implement RAII with acquire/release functions.",
        "correctAnswer": ["class Resource { void* r; public: Resource() { r = acquire(); } ~Resource() { release(r); } };"],
        "explanation": "RAII pattern works with any acquire/release pair.", "xp": 15
    },
    {
        "id": "cpp-7-1-23", "type": "code", "question": "Create RAII class managing thread.",
        "correctAnswer": ["class ThreadGuard { thread t; public: ThreadGuard(thread&& th) : t(std::move(th)) {} ~ThreadGuard() { if (t.joinable()) t.join(); } };"],
        "explanation": "RAII thread guard ensures thread is joined when destroyed.", "xp": 15
    },
    {
        "id": "cpp-7-1-24", "type": "code", "question": "Use RAII to temporarily change state.",
        "correctAnswer": ["class StateGuard { int& state; int old; public: StateGuard(int& s, int val) : state(s), old(state) { state = val; } ~StateGuard() { state = old; } };"],
        "explanation": "RAII state guard restores original state when scope ends.", "xp": 15
    },
    {
        "id": "cpp-7-1-25", "type": "code", "question": "Create RAII wrapper with custom deleter function.",
        "correctAnswer": ["class Resource { void* r; void(*del)(void*); public: Resource(void* p, void(*d)(void*)) : r(p), del(d) {} ~Resource() { del(r); } };"],
        "explanation": "Custom deleter function allows RAII for any resource type.", "xp": 15
    }
]

lesson1 = {
    "id": 36, "title": "RAII (Resource Acquisition Is Initialization)", "unitTitle": "7. Resource Management", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# RAII: Resource Acquisition Is Initialization

RAII is a C++ idiom that ties resource lifetime to object lifetime.

## What is RAII?

RAII stands for **Resource Acquisition Is Initialization**. The core idea:

- Acquire resource in **constructor**
- Release resource in **destructor**

```cpp
class FileHandle {
private:
    FILE* file;
    
public:
    // Acquire resource
    FileHandle(const char* filename) {
        file = fopen(filename, "r");
        if (!file) {
            throw std::runtime_error("Failed to open file");
        }
    }
    
    // Release resource
    ~FileHandle() {
        if (file) {
            fclose(file);
        }
    }
    
    // Disable copying
    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;
};

// Usage
{
    FileHandle f("data.txt");
    // Use file...
} // Automatically closed when f goes out of scope
```

## Exception Safety

RAII provides strong exception safety:

```cpp
void processData() {
    FileHandle input("input.txt");
    FileHandle output("output.txt");
    
    // Process data...
    
    // Even if exception is thrown here,
    // both files are automatically closed
}
```

## Common RAII Patterns

### 1. Smart Pointers

```cpp
// unique_ptr - exclusive ownership
std::unique_ptr<int> ptr(new int(42));

// shared_ptr - shared ownership
std::shared_ptr<int> shared = std::make_shared<int>(42);
```

### 2. Lock Guard

```cpp
class LockGuard {
private:
    std::mutex& mutex;
    
public:
    LockGuard(std::mutex& m) : mutex(m) {
        mutex.lock();
    }
    
    ~LockGuard() {
        mutex.unlock();
    }
};

// Or use std::lock_guard
std::mutex mtx;
{
    std::lock_guard<std::mutex> lock(mtx);
    // Critical section...
} // Automatically unlocked
```

### 3. Scope Timer

```cpp
class Timer {
private:
    std::chrono::time_point<std::chrono::high_resolution_clock> start;
    
public:
    Timer() : start(std::chrono::high_resolution_clock::now()) {}
    
    ~Timer() {
        auto end = std::chrono::high_resolution_clock::now();
        auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(end - start);
        std::cout << "Time: " << duration.count() << "ms\\n";
    }
};

// Usage
void myFunction() {
    Timer timer;  // Starts timing
    // Do work...
} // Automatically prints time when function ends
```

## RAII Benefits

✅ **Automatic cleanup** - No need to remember to free resources
✅ **Exception safe** - Resources released even when exceptions occur
✅ **Prevents leaks** - Guaranteed cleanup in all code paths
✅ **Clear ownership** - Resource lifetime is explicit
✅ **Thread safe** - Proper locking and unlocking

## Move Semantics with RAII

```cpp
class Resource {
private:
    int* data;
    
public:
    // Constructor
    Resource(size_t size) : data(new int[size]) {}
    
    // Destructor
    ~Resource() {
        delete[] data;
    }
    
    // Move constructor
    Resource(Resource&& other) noexcept : data(other.data) {
        other.data = nullptr;
    }
    
    // Move assignment
    Resource& operator=(Resource&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            other.data = nullptr;
        }
        return *this;
    }
    
    // Disable copy
    Resource(const Resource&) = delete;
    Resource& operator=(const Resource&) = delete;
};
```

## RAII for C Resources

```cpp
class CResourceWrapper {
private:
    void* handle;
    
public:
    CResourceWrapper() {
        handle = create_c_resource();
    }
    
    ~CResourceWrapper() {
        if (handle) {
            destroy_c_resource(handle);
        }
    }
    
    // Prevent copying
    CResourceWrapper(const CResourceWrapper&) = delete;
    CResourceWrapper& operator=(const CResourceWrapper&) = delete;
};
```
""",
    "questions": lesson1_questions
}

data['units'][6]['lessons'][0].update(lesson1)
print("✅ Lesson 1: RAII - 25 questions (20 code)")

# Due to length, I'll create summary and save
print("\n📊 Progress: 1 of 5 lessons complete (25 of 125 questions)")
print("🔄 Continuing with remaining 4 lessons in next batch...")

# Write checkpoint
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n✅ Checkpoint saved. Continuing with Unit 7 Lessons 2-5...")
print("⏳ Due to length, building remaining lessons...")