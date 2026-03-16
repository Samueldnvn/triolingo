// C++ Unit 7 - Resource Management
// Generated from cppCombined.js

window.cppUnit7 = {
  "unitId": "7",
  "unitName": "7. Resource Management",
  "lessons": [
    {
      "id": 36,
      "title": "RAII (Resource Acquisition Is Initialization)",
      "unitTitle": "7. Resource Management",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-7-1-1",
          "type": "typing",
          "question": "What does RAII stand for?",
          "correctAnswer": [
            "Resource Acquisition Is Initialization"
          ],
          "explanation": "RAII is a C++ idiom where resource acquisition is tied to object lifetime.",
          "xp": 5
        },
        {
          "id": "cpp-7-1-2",
          "type": "typing",
          "question": "When are resources released in RAII?",
          "correctAnswer": [
            "in destructor",
            "when object is destroyed",
            "out of scope"
          ],
          "explanation": "Resources are automatically released in destructor when object goes out of scope.",
          "xp": 5
        },
        {
          "id": "cpp-7-1-3",
          "type": "typing",
          "question": "What is the benefit of RAII?",
          "correctAnswer": [
            "automatic resource cleanup",
            "no memory leaks",
            "exception safety"
          ],
          "explanation": "RAII ensures automatic cleanup even when exceptions occur.",
          "xp": 5
        },
        {
          "id": "cpp-7-1-4",
          "type": "multiple",
          "question": "Does RAII work with exceptions?",
          "options": [
            "Yes",
            "No",
            "Only with try-catch",
            "Only with noexcept"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "RAII works correctly with exceptions - destructor is called during stack unwinding.",
          "xp": 5
        },
        {
          "id": "cpp-7-1-5",
          "type": "multiple",
          "question": "What happens when exception is thrown in RAII class?",
          "options": [
            "Destructor is called",
            "Resource is leaked",
            "Program crashes",
            "Undefined"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Destructor is automatically called during stack unwinding, releasing resources.",
          "xp": 5
        },
        {
          "id": "cpp-7-1-6",
          "type": "code",
          "question": "Create RAII class managing file handle.",
          "correctAnswer": [
            "class FileHandle { FILE* f; public: FileHandle(const char* path) { f = fopen(path, \"r\"); } ~FileHandle() { if (f) fclose(f); } };"
          ],
          "explanation": "RAII class acquires resource in constructor, releases in destructor.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-7",
          "type": "code",
          "question": "Create RAII class managing dynamic array.",
          "correctAnswer": [
            "class Array { int* data; size_t size; public: Array(size_t n) : size(n) { data = new int[n]; } ~Array() { delete[] data; } };"
          ],
          "explanation": "RAII ensures array is deleted when object goes out of scope.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-8",
          "type": "code",
          "question": "Create RAII class with lock using mutex.",
          "correctAnswer": [
            "class LockGuard { mutex& m; public: LockGuard(mutex& mtx) : m(mtx) { m.lock(); } ~LockGuard() { m.unlock(); } };"
          ],
          "explanation": "RAII lock guard ensures mutex is unlocked even with exceptions.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-9",
          "type": "code",
          "question": "Use RAII to open file and ensure it's closed.",
          "correctAnswer": [
            "{ FileHandle file(\"data.txt\"); /* use file */ } // file automatically closed"
          ],
          "explanation": "Scope-based RAII ensures resource cleanup.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-10",
          "type": "code",
          "question": "Create RAII wrapper for socket.",
          "correctAnswer": [
            "class Socket { int sock; public: Socket() { sock = socket(AF_INET, SOCK_STREAM, 0); } ~Socket() { close(sock); } };"
          ],
          "explanation": "RAII wrapper ensures socket is closed when object destroyed.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-11",
          "type": "code",
          "question": "Create RAII class managing database connection.",
          "correctAnswer": [
            "class DBConnection { Connection* conn; public: DBConnection() { conn = new Connection(); } ~DBConnection() { delete conn; } };"
          ],
          "explanation": "RAII ensures database connection is properly closed.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-12",
          "type": "code",
          "question": "Create RAII buffer with custom cleanup.",
          "correctAnswer": [
            "class Buffer { void* buf; public: Buffer(size_t size) { buf = malloc(size); } ~Buffer() { free(buf); } };"
          ],
          "explanation": "RAII can wrap any resource with cleanup function.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-13",
          "type": "code",
          "question": "Use RAII with std::unique_ptr.",
          "correctAnswer": [
            "std::unique_ptr<int, void(*)(int*)> ptr(malloc(sizeof(int)), free);"
          ],
          "explanation": "unique_ptr with custom deleter implements RAII for any resource.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-14",
          "type": "code",
          "question": "Create RAII timer measuring scope duration.",
          "correctAnswer": [
            "class Timer { clock_t start; public: Timer() : start(clock()) {} ~Timer() { cout << clock() - start << \" ms\" << endl; } };"
          ],
          "explanation": "RAII timer automatically prints duration when scope ends.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-15",
          "type": "code",
          "question": "Create RAII class with move-only semantics.",
          "correctAnswer": [
            "class Resource { int* data; public: Resource() { data = new int; } ~Resource() { delete data; } Resource(const Resource&) = delete; Resource& operator=(const Resource&) = delete; Resource(Resource&& other) noexcept; };"
          ],
          "explanation": "Move-only RAII prevents accidental copying of unique resources.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-16",
          "type": "code",
          "question": "Use RAII to manage temporary file.",
          "correctAnswer": [
            "class TempFile { string path; public: TempFile() { path = \"/tmp/\" + to_string(getpid()); } ~TempFile() { remove(path.c_str()); } const char* getPath() const { return path.c_str(); } };"
          ],
          "explanation": "RAII ensures temporary file is deleted when object destroyed.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-17",
          "type": "code",
          "question": "Create RAII class changing directory.",
          "correctAnswer": [
            "class DirGuard { string old; public: DirGuard(const string& newDir) { old = getcwd(nullptr, 0); chdir(newDir.c_str()); } ~DirGuard() { chdir(old.c_str()); } };"
          ],
          "explanation": "RAII directory guard restores original directory when scope ends.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-18",
          "type": "code",
          "question": "Implement RAII for OpenGL buffer.",
          "correctAnswer": [
            "class GLBuffer { GLuint id; public: GLBuffer() { glGenBuffers(1, &id); } ~GLBuffer() { glDeleteBuffers(1, &id); } GLuint get() const { return id; } };"
          ],
          "explanation": "RAII wrapper ensures OpenGL resources are released.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-19",
          "type": "code",
          "question": "Create RAII class with disabled copy and assignment.",
          "correctAnswer": [
            "class Resource { public: Resource(const Resource&) = delete; Resource& operator=(const Resource&) = delete; };"
          ],
          "explanation": "Delete copy constructor and assignment to prevent issues.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-20",
          "type": "code",
          "question": "Use RAII to measure function execution time.",
          "correctAnswer": [
            "void myFunc() { Timer timer; /* function code */ } // Timer destructor prints time"
          ],
          "explanation": "RAII timer automatically measures function duration.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-21",
          "type": "code",
          "question": "Create RAII wrapper for C library resource.",
          "correctAnswer": [
            "class CResource { void* handle; public: CResource() { handle = create_resource(); } ~CResource() { destroy_resource(handle); } };"
          ],
          "explanation": "RAII can wrap any C resource with create/destroy functions.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-22",
          "type": "code",
          "question": "Implement RAII with acquire/release functions.",
          "correctAnswer": [
            "class Resource { void* r; public: Resource() { r = acquire(); } ~Resource() { release(r); } };"
          ],
          "explanation": "RAII pattern works with any acquire/release pair.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-23",
          "type": "code",
          "question": "Create RAII class managing thread.",
          "correctAnswer": [
            "class ThreadGuard { thread t; public: ThreadGuard(thread&& th) : t(std::move(th)) {} ~ThreadGuard() { if (t.joinable()) t.join(); } };"
          ],
          "explanation": "RAII thread guard ensures thread is joined when destroyed.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-24",
          "type": "code",
          "question": "Use RAII to temporarily change state.",
          "correctAnswer": [
            "class StateGuard { int& state; int old; public: StateGuard(int& s, int val) : state(s), old(state) { state = val; } ~StateGuard() { state = old; } };"
          ],
          "explanation": "RAII state guard restores original state when scope ends.",
          "xp": 15
        },
        {
          "id": "cpp-7-1-25",
          "type": "code",
          "question": "Create RAII wrapper with custom deleter function.",
          "correctAnswer": [
            "class Resource { void* r; void(*del)(void*); public: Resource(void* p, void(*d)(void*)) : r(p), del(d) {} ~Resource() { del(r); } };"
          ],
          "explanation": "Custom deleter function allows RAII for any resource type.",
          "xp": 15
        }
      ],
      "lessonText": "# RAII: Resource Acquisition Is Initialization\n\nRAII is a C++ idiom that ties resource lifetime to object lifetime.\n\n## What is RAII?\n\nRAII stands for **Resource Acquisition Is Initialization**. The core idea:\n\n- Acquire resource in **constructor**\n- Release resource in **destructor**\n\n```cpp\nclass FileHandle {\nprivate:\n    FILE* file;\n    \npublic:\n    // Acquire resource\n    FileHandle(const char* filename) {\n        file = fopen(filename, \"r\");\n        if (!file) {\n            throw std::runtime_error(\"Failed to open file\");\n        }\n    }\n    \n    // Release resource\n    ~FileHandle() {\n        if (file) {\n            fclose(file);\n        }\n    }\n    \n    // Disable copying\n    FileHandle(const FileHandle&) = delete;\n    FileHandle& operator=(const FileHandle&) = delete;\n};\n\n// Usage\n{\n    FileHandle f(\"data.txt\");\n    // Use file...\n} // Automatically closed when f goes out of scope\n```\n\n## Exception Safety\n\nRAII provides strong exception safety:\n\n```cpp\nvoid processData() {\n    FileHandle input(\"input.txt\");\n    FileHandle output(\"output.txt\");\n    \n    // Process data...\n    \n    // Even if exception is thrown here,\n    // both files are automatically closed\n}\n```\n\n## Common RAII Patterns\n\n### 1. Smart Pointers\n\n```cpp\n// unique_ptr - exclusive ownership\nstd::unique_ptr<int> ptr(new int(42));\n\n// shared_ptr - shared ownership\nstd::shared_ptr<int> shared = std::make_shared<int>(42);\n```\n\n### 2. Lock Guard\n\n```cpp\nclass LockGuard {\nprivate:\n    std::mutex& mutex;\n    \npublic:\n    LockGuard(std::mutex& m) : mutex(m) {\n        mutex.lock();\n    }\n    \n    ~LockGuard() {\n        mutex.unlock();\n    }\n};\n\n// Or use std::lock_guard\nstd::mutex mtx;\n{\n    std::lock_guard<std::mutex> lock(mtx);\n    // Critical section...\n} // Automatically unlocked\n```\n\n### 3. Scope Timer\n\n```cpp\nclass Timer {\nprivate:\n    std::chrono::time_point<std::chrono::high_resolution_clock> start;\n    \npublic:\n    Timer() : start(std::chrono::high_resolution_clock::now()) {}\n    \n    ~Timer() {\n        auto end = std::chrono::high_resolution_clock::now();\n        auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(end - start);\n        std::cout << \"Time: \" << duration.count() << \"ms\\n\";\n    }\n};\n\n// Usage\nvoid myFunction() {\n    Timer timer;  // Starts timing\n    // Do work...\n} // Automatically prints time when function ends\n```\n\n## RAII Benefits\n\n✅ **Automatic cleanup** - No need to remember to free resources\n✅ **Exception safe** - Resources released even when exceptions occur\n✅ **Prevents leaks** - Guaranteed cleanup in all code paths\n✅ **Clear ownership** - Resource lifetime is explicit\n✅ **Thread safe** - Proper locking and unlocking\n\n## Move Semantics with RAII\n\n```cpp\nclass Resource {\nprivate:\n    int* data;\n    \npublic:\n    // Constructor\n    Resource(size_t size) : data(new int[size]) {}\n    \n    // Destructor\n    ~Resource() {\n        delete[] data;\n    }\n    \n    // Move constructor\n    Resource(Resource&& other) noexcept : data(other.data) {\n        other.data = nullptr;\n    }\n    \n    // Move assignment\n    Resource& operator=(Resource&& other) noexcept {\n        if (this != &other) {\n            delete[] data;\n            data = other.data;\n            other.data = nullptr;\n        }\n        return *this;\n    }\n    \n    // Disable copy\n    Resource(const Resource&) = delete;\n    Resource& operator=(const Resource&) = delete;\n};\n```\n\n## RAII for C Resources\n\n```cpp\nclass CResourceWrapper {\nprivate:\n    void* handle;\n    \npublic:\n    CResourceWrapper() {\n        handle = create_c_resource();\n    }\n    \n    ~CResourceWrapper() {\n        if (handle) {\n            destroy_c_resource(handle);\n        }\n    }\n    \n    // Prevent copying\n    CResourceWrapper(const CResourceWrapper&) = delete;\n    CResourceWrapper& operator=(const CResourceWrapper&) = delete;\n};\n```\n"
    },
    {
      "id": 37,
      "title": "Copy Constructor and Copy Assignment",
      "unitTitle": "7. Resource Management",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-7-2-1",
          "type": "typing",
          "question": "What is copy constructor?",
          "correctAnswer": [
            "creates new object from existing"
          ],
          "explanation": "Copy constructor initializes new object from existing one.",
          "xp": 5
        },
        {
          "id": "cpp-7-2-2",
          "type": "typing",
          "question": "When is copy constructor called?",
          "correctAnswer": [
            "when object is passed by value",
            "when object is copied"
          ],
          "explanation": "Copy constructor called when object is copied.",
          "xp": 5
        },
        {
          "id": "cpp-7-2-3",
          "type": "typing",
          "question": "What is copy assignment operator?",
          "correctAnswer": [
            "assigns values from one object to another",
            "operator="
          ],
          "explanation": "Copy assignment assigns one object's values to another.",
          "xp": 5
        },
        {
          "id": "cpp-7-2-4",
          "type": "multiple",
          "question": "Should copy assignment check for self-assignment?",
          "options": [
            "Yes",
            "No",
            "Only for pointers",
            "Only for references"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Always check for self-assignment to prevent issues.",
          "xp": 5
        },
        {
          "id": "cpp-7-2-5",
          "type": "multiple",
          "question": "What does copy assignment return?",
          "options": [
            "reference to *this",
            "void",
            "copy of object",
            "pointer"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Copy assignment should return reference to *this.",
          "xp": 5
        },
        {
          "id": "cpp-7-2-6",
          "type": "code",
          "question": "Define copy constructor.",
          "correctAnswer": [
            "MyClass(const MyClass& other) { /* copy */ }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-7",
          "type": "code",
          "question": "Define copy assignment operator.",
          "correctAnswer": [
            "MyClass& operator=(const MyClass& other)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-8",
          "type": "code",
          "question": "Check self-assignment in copy assignment.",
          "correctAnswer": [
            "if (this != &other)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-9",
          "type": "code",
          "question": "Return *this from copy assignment.",
          "correctAnswer": [
            "return *this;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-10",
          "type": "code",
          "question": "Deep copy array in copy constructor.",
          "correctAnswer": [
            "data = new int[size]; std::copy(other.data, other.data + size, data);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-11",
          "type": "code",
          "question": "Delete old data before copy in assignment.",
          "correctAnswer": [
            "delete[] data; data = new int[size];"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-12",
          "type": "code",
          "question": "Use member initializer list in copy constructor.",
          "correctAnswer": [
            "MyClass(const MyClass& other) : size(other.size), data(new int[size]) {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-13",
          "type": "code",
          "question": "Delete copy constructor.",
          "correctAnswer": [
            "MyClass(const MyClass&) = delete;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-14",
          "type": "code",
          "question": "Delete copy assignment operator.",
          "correctAnswer": [
            "MyClass& operator=(const MyClass&) = delete;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-15",
          "type": "code",
          "question": "Copy string in copy constructor.",
          "correctAnswer": [
            "str = new char[strlen(other.str) + 1]; strcpy(str, other.str);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-16",
          "type": "code",
          "question": "Copy vector in copy constructor.",
          "correctAnswer": [
            "vec = other.vec;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-17",
          "type": "code",
          "question": "Handle nullptr in copy constructor.",
          "correctAnswer": [
            "if (other.data) { data = new int[size]; copy... } else { data = nullptr; }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-18",
          "type": "code",
          "question": "Implement swap function for copy assignment.",
          "correctAnswer": [
            "void swap(MyClass& other) { std::swap(data, other.data); std::swap(size, other.size); }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-19",
          "type": "code",
          "question": "Use copy-and-swap idiom.",
          "correctAnswer": [
            "MyClass& operator=(MyClass other) { swap(other); return *this; }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-20",
          "type": "code",
          "question": "Copy constructor with exception safety.",
          "correctAnswer": [
            "MyClass(const MyClass& other) try : size(other.size) { data = new int[size]; } catch (...) { data = nullptr; size = 0; throw; }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-21",
          "type": "code",
          "question": "Copy multiple members in copy constructor.",
          "correctAnswer": [
            "MyClass(const MyClass& other) : a(other.a), b(other.b), c(other.c) {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-22",
          "type": "code",
          "question": "Assign multiple members in copy assignment.",
          "correctAnswer": [
            "a = other.a; b = other.b; c = other.c; return *this;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-23",
          "type": "code",
          "question": "Make copy assignment noexcept.",
          "correctAnswer": [
            "MyClass& operator=(const MyClass& other) noexcept"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-24",
          "type": "code",
          "question": "Use std::copy for array copy.",
          "correctAnswer": [
            "std::copy(other.data, other.data + size, data);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-2-25",
          "type": "code",
          "question": "Copy with move semantics fallback.",
          "correctAnswer": [
            "MyClass(const MyClass& other) : data(new int[other.size]) {}"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Copy Constructor and Copy Assignment\n\nCopy operations control how objects are copied.\n\n```cpp\nclass MyClass {\nprivate:\n    int* data;\n    size_t size;\npublic:\n    // Copy constructor\n    MyClass(const MyClass& other) : size(other.size) {\n        data = new int[size];\n        std::copy(other.data, other.data + size, data);\n    }\n    \n    // Copy assignment\n    MyClass& operator=(const MyClass& other) {\n        if (this != &other) {\n            delete[] data;\n            size = other.size;\n            data = new int[size];\n            std::copy(other.data, other.data + size, data);\n        }\n        return *this;\n    }\n};\n```\n\n**Key points:**\n- Copy constructor: `ClassName(const ClassName& other)`\n- Copy assignment: `operator=(const ClassName& other)`\n- Check self-assignment: `if (this != &other)`\n- Return `*this` from assignment"
    },
    {
      "id": 38,
      "title": "Move Constructor and Move Assignment",
      "unitTitle": "7. Resource Management",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-7-3-1",
          "type": "typing",
          "question": "What is move constructor?",
          "correctAnswer": [
            "transfers ownership from temporary object"
          ],
          "explanation": "Move constructor transfers ownership from temporary.",
          "xp": 5
        },
        {
          "id": "cpp-7-3-2",
          "type": "typing",
          "question": "What parameter type for move constructor?",
          "correctAnswer": [
            "rvalue reference",
            "ClassName&&",
            "T&&"
          ],
          "explanation": "Move constructor takes rvalue reference.",
          "xp": 5
        },
        {
          "id": "cpp-7-3-3",
          "type": "typing",
          "question": "Why use move semantics?",
          "correctAnswer": [
            "avoid unnecessary copies",
            "transfer ownership",
            "performance"
          ],
          "explanation": "Move semantics avoid copying by transferring ownership.",
          "xp": 5
        },
        {
          "id": "cpp-7-3-4",
          "type": "multiple",
          "question": "Should move operations be noexcept?",
          "options": [
            "Yes",
            "No",
            "Only for simple types",
            "Only for built-in"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Move operations should be noexcept for optimal performance.",
          "xp": 5
        },
        {
          "id": "cpp-7-3-5",
          "type": "multiple",
          "question": "What happens to source after move?",
          "options": [
            "Left in valid but unspecified state",
            "Destroyed",
            "Null",
            "Unchanged"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Source is left in valid state but value is unspecified.",
          "xp": 5
        },
        {
          "id": "cpp-7-3-6",
          "type": "code",
          "question": "Define move constructor.",
          "correctAnswer": [
            "MyClass(MyClass&& other) noexcept"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-7",
          "type": "code",
          "question": "Define move assignment operator.",
          "correctAnswer": [
            "MyClass& operator=(MyClass&& other) noexcept"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-8",
          "type": "code",
          "question": "Transfer pointer in move constructor.",
          "correctAnswer": [
            "data = other.data; other.data = nullptr;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-9",
          "type": "code",
          "question": "Check self-assignment in move assignment.",
          "correctAnswer": [
            "if (this != &other)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-10",
          "type": "code",
          "question": "Return *this from move assignment.",
          "correctAnswer": [
            "return *this;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-11",
          "type": "code",
          "question": "Use std::move to force move.",
          "correctAnswer": [
            "obj2 = std::move(obj1);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-12",
          "type": "code",
          "question": "Move string in move constructor.",
          "correctAnswer": [
            "str = other.str; other.str = nullptr;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-13",
          "type": "code",
          "question": "Move vector in move constructor.",
          "correctAnswer": [
            "vec = std::move(other.vec);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-14",
          "type": "code",
          "question": "Delete move constructor.",
          "correctAnswer": [
            "MyClass(MyClass&&) = delete;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-15",
          "type": "code",
          "question": "Delete move assignment operator.",
          "correctAnswer": [
            "MyClass& operator=(MyClass&&) = delete;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-16",
          "type": "code",
          "question": "Move unique_ptr.",
          "correctAnswer": [
            "ptr = std::move(other.ptr);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-17",
          "type": "code",
          "question": "Set source to null after move.",
          "correctAnswer": [
            "other.data = nullptr;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-18",
          "type": "code",
          "question": "Use std::exchange in move.",
          "correctAnswer": [
            "data = std::exchange(other.data, nullptr);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-19",
          "type": "code",
          "question": "Move with member initializer list.",
          "correctAnswer": [
            "MyClass(MyClass&& other) noexcept : data(std::exchange(other.data, nullptr)) {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-20",
          "type": "code",
          "question": "Move assignment with self-check.",
          "correctAnswer": [
            "if (this != &other) { delete[] data; data = std::exchange(other.data, nullptr); } return *this;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-21",
          "type": "code",
          "question": "Pass by rvalue reference.",
          "correctAnswer": [
            "void func(MyClass&& obj)",
            "MyClass&& param"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-22",
          "type": "code",
          "question": "Return by move.",
          "correctAnswer": [
            "return std::move(*this);",
            "return std::move(result);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-23",
          "type": "code",
          "question": "Make move constructor noexcept.",
          "correctAnswer": [
            "MyClass(MyClass&& other) noexcept"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-24",
          "type": "code",
          "question": "Use std::move in return statement.",
          "correctAnswer": [
            "return std::move(local_obj);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-3-25",
          "type": "code",
          "question": "Implement both copy and move.",
          "correctAnswer": [
            "MyClass(const MyClass& other); MyClass(MyClass&& other) noexcept;"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Move Constructor and Move Assignment\n\nMove operations transfer ownership of resources.\n\n```cpp\nclass MyClass {\nprivate:\n    int* data;\npublic:\n    // Move constructor\n    MyClass(MyClass&& other) noexcept : data(other.data) {\n        other.data = nullptr;  // Leave source in valid state\n    }\n    \n    // Move assignment\n    MyClass& operator=(MyClass&& other) noexcept {\n        if (this != &other) {\n            delete[] data;\n            data = other.data;\n            other.data = nullptr;\n        }\n        return *this;\n    }\n};\n```\n\n**Key points:**\n- Takes rvalue reference: `ClassName(ClassName&& other)`\n- Transfer ownership, don't copy\n- Leave source in valid state\n- Mark noexcept when possible"
    },
    {
      "id": 39,
      "title": "Rule of Three / Five / Zero",
      "unitTitle": "7. Resource Management",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-7-4-1",
          "type": "typing",
          "question": "What is Rule of Three?",
          "correctAnswer": [
            "need destructor, copy constructor, copy assignment together"
          ],
          "explanation": "If you need one, you need all three.",
          "xp": 5
        },
        {
          "id": "cpp-7-4-2",
          "type": "typing",
          "question": "What is Rule of Five?",
          "correctAnswer": [
            "Rule of Three plus move constructor and move assignment"
          ],
          "explanation": "Rule of Five adds move operations to Rule of Three.",
          "xp": 5
        },
        {
          "id": "cpp-7-4-3",
          "type": "typing",
          "question": "What is Rule of Zero?",
          "correctAnswer": [
            "use smart pointers, avoid manual resource management"
          ],
          "explanation": "Rule of Zero prefers using smart pointers over manual management.",
          "xp": 5
        },
        {
          "id": "cpp-7-4-4",
          "type": "multiple",
          "question": "When should you follow Rule of Zero?",
          "options": [
            "When using smart pointers",
            "When using raw pointers",
            "Always",
            "Never"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Rule of Zero when using smart pointers or standard containers.",
          "xp": 5
        },
        {
          "id": "cpp-7-4-5",
          "type": "multiple",
          "question": "Which rule is preferred in modern C++?",
          "options": [
            "Rule of Zero",
            "Rule of Three",
            "Rule of Five",
            "All equal"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Rule of Zero is preferred - use smart pointers.",
          "xp": 5
        },
        {
          "id": "cpp-7-4-6",
          "type": "code",
          "question": "Delete copy operations (Rule of Five).",
          "correctAnswer": [
            "MyClass(const MyClass&) = delete; MyClass& operator=(const MyClass&) = delete;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-7",
          "type": "code",
          "question": "Implement Rule of Five.",
          "correctAnswer": [
            "~MyClass(); MyClass(const MyClass&); MyClass& operator=(const MyClass&); MyClass(MyClass&&) noexcept; MyClass& operator=(MyClass&&) noexcept;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-8",
          "type": "code",
          "question": "Use Rule of Zero with unique_ptr.",
          "correctAnswer": [
            "class MyClass { unique_ptr<int> ptr; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-9",
          "type": "code",
          "question": "Use Rule of Zero with vector.",
          "correctAnswer": [
            "class MyClass { vector<int> vec; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-10",
          "type": "code",
          "question": "Make class move-only (Rule of Five).",
          "correctAnswer": [
            "MyClass(const MyClass&) = delete; MyClass& operator=(const MyClass&) = delete; MyClass(MyClass&&) noexcept; MyClass& operator=(MyClass&&) noexcept;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-11",
          "type": "code",
          "question": "Disable copy operations.",
          "correctAnswer": [
            "MyClass(const MyClass&) = delete; MyClass& operator=(const MyClass&) = delete;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-12",
          "type": "code",
          "question": "Use = default for copy operations.",
          "correctAnswer": [
            "MyClass(const MyClass&) = default; MyClass& operator=(const MyClass&) = default;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-13",
          "type": "code",
          "question": "Use = default for move operations.",
          "correctAnswer": [
            "MyClass(MyClass&&) noexcept = default; MyClass& operator=(MyClass&&) noexcept = default;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-14",
          "type": "code",
          "question": "Implement Rule of Three for raw pointer.",
          "correctAnswer": [
            "~MyClass() { delete ptr; } MyClass(const MyClass& other) : ptr(new int(*other.ptr)) {} MyClass& operator=(const MyClass& other) { if (this != &other) { delete ptr; ptr = new int(*other.ptr); } return *this; }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-15",
          "type": "code",
          "question": "Replace Rule of Three with smart pointer.",
          "correctAnswer": [
            "class MyClass { unique_ptr<int> ptr; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-16",
          "type": "code",
          "question": "Make class copy-only (no moves).",
          "correctAnswer": [
            "MyClass(MyClass&&) = delete; MyClass& operator=(MyClass&&) = delete;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-17",
          "type": "code",
          "question": "Use shared_ptr in Rule of Zero.",
          "correctAnswer": [
            "class MyClass { shared_ptr<int> ptr; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-18",
          "type": "code",
          "question": "Implement destructor only (not Rule of Three).",
          "correctAnswer": [
            "~MyClass() { /* cleanup */ } MyClass(const MyClass&) = default; MyClass& operator=(const MyClass&) = default;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-19",
          "type": "code",
          "question": "Check if class needs Rule of Five.",
          "correctAnswer": [
            "// Needs if: has raw pointer, manages file/socket, new/delete used"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-20",
          "type": "code",
          "question": "Use std::string (Rule of Zero).",
          "correctAnswer": [
            "class MyClass { string str; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-21",
          "type": "code",
          "question": "Refactor raw pointer to unique_ptr.",
          "correctAnswer": [
            "// Old: int* ptr; // New: unique_ptr<int> ptr;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-22",
          "type": "code",
          "question": "Use std::array (Rule of Zero).",
          "correctAnswer": [
            "class MyClass { array<int, 10> arr; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-23",
          "type": "code",
          "question": "Mix Rule of Zero with custom destructor.",
          "correctAnswer": [
            "class MyClass { vector<int> vec; ~MyClass() { /* custom cleanup */ } };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-24",
          "type": "code",
          "question": "Document Rule of Zero decision.",
          "correctAnswer": [
            "// Rule of Zero: uses smart pointers, no custom copy/move needed"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-4-25",
          "type": "code",
          "question": "Prefer composition over Rule of Five.",
          "correctAnswer": [
            "class MyClass { std::vector<Custom> items; }; // Composition handles copy/move"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Rule of Three/Five/Zero\n\nGuidelines for resource management.\n\n**Rule of Three:** If you need any of destructor, copy constructor, or copy assignment, you need all three.\n\n**Rule of Five:** Add move constructor and move assignment to Rule of Three.\n\n**Rule of Zero:** If you don't manage resources directly, use smart pointers and avoid manual management.\n\n```cpp\n// Rule of Zero (preferred)\nclass MyClass {\n    std::unique_ptr<int> data;  // Automatically managed\n    std::vector<int> vec;      // Automatically managed\n};\n```\n\n```cpp\n// Rule of Five (when needed)\nclass Resource {\npublic:\n    ~Resource();  // Destructor\n    Resource(const Resource&);  // Copy\n    Resource& operator=(const Resource&);\n    Resource(Resource&&) noexcept;  // Move\n    Resource& operator=(Resource&&) noexcept;\n};\n```"
    },
    {
      "id": 40,
      "title": "Managing Resources Safely",
      "unitTitle": "7. Resource Management",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-7-5-1",
          "type": "typing",
          "question": "What is the safest way to manage memory?",
          "correctAnswer": [
            "smart pointers",
            "unique_ptr, shared_ptr",
            "RAII"
          ],
          "explanation": "Smart pointers provide automatic memory management.",
          "xp": 5
        },
        {
          "id": "cpp-7-5-2",
          "type": "typing",
          "question": "What is make_unique?",
          "correctAnswer": [
            "creates unique_ptr safely",
            "smart pointer factory function"
          ],
          "explanation": "make_unique is exception-safe way to create unique_ptr.",
          "xp": 5
        },
        {
          "id": "cpp-7-5-3",
          "type": "typing",
          "question": "What is make_shared?",
          "correctAnswer": [
            "creates shared_ptr efficiently",
            "shared_ptr factory function"
          ],
          "explanation": "make_shared allocates control block and object together.",
          "xp": 5
        },
        {
          "id": "cpp-7-5-4",
          "type": "multiple",
          "question": "Why prefer make_unique over new?",
          "options": [
            "Exception safety",
            "Faster",
            "Less code",
            "No difference"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "make_unique is exception-safe, doesn't leak on allocation failure.",
          "xp": 5
        },
        {
          "id": "cpp-7-5-5",
          "type": "multiple",
          "question": "When should you use raw pointer?",
          "options": [
            "Never",
            "Only with smart pointer ownership",
            "For everything",
            "For arrays only"
          ],
          "correctAnswer": [
            1
          ],
          "explanation": "Only use raw pointers as non-owning observers.",
          "xp": 5
        },
        {
          "id": "cpp-7-5-6",
          "type": "code",
          "question": "Create unique_ptr with make_unique.",
          "correctAnswer": [
            "auto ptr = std::make_unique<int>(42);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-7",
          "type": "code",
          "question": "Create shared_ptr with make_shared.",
          "correctAnswer": [
            "auto ptr = std::make_shared<int>(42);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-8",
          "type": "code",
          "question": "Use vector instead of array.",
          "correctAnswer": [
            "std::vector<int> vec(size);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-9",
          "type": "code",
          "question": "Use string instead of char*.",
          "correctAnswer": [
            "std::string str = \"text\";"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-10",
          "type": "code",
          "question": "Pass unique_ptr to function.",
          "correctAnswer": [
            "void func(std::unique_ptr<int> ptr)",
            "void func(unique_ptr<int>& ptr)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-11",
          "type": "code",
          "question": "Create unique_ptr with custom deleter.",
          "correctAnswer": [
            "std::unique_ptr<int, void(*)(int*)> ptr(malloc(sizeof(int)), free);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-12",
          "type": "code",
          "question": "Reset unique_ptr.",
          "correctAnswer": [
            "ptr.reset();",
            "ptr.reset(new int(10));"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-13",
          "type": "code",
          "question": "Get raw pointer from unique_ptr.",
          "correctAnswer": [
            "ptr.get()",
            "int* raw = ptr.get();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-14",
          "type": "code",
          "question": "Use unique_ptr for array.",
          "correctAnswer": [
            "std::unique_ptr<int[]> ptr(new int[10]);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-15",
          "type": "code",
          "question": "Move unique_ptr.",
          "correctAnswer": [
            "auto ptr2 = std::move(ptr1);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-16",
          "type": "code",
          "question": "Use weak_ptr to break cycle.",
          "correctAnswer": [
            "std::weak_ptr<Node> ptr;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-17",
          "type": "code",
          "question": "Lock weak_ptr to access.",
          "correctAnswer": [
            "if (auto locked = weak.lock()) { /* use */ }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-18",
          "type": "code",
          "question": "Use lock_guard for mutex.",
          "correctAnswer": [
            "std::lock_guard<std::mutex> lock(mtx);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-19",
          "type": "code",
          "question": "Use unique_lock with timeout.",
          "correctAnswer": [
            "std::unique_lock<std::mutex> lock(mtx, std::defer_lock); lock.try_lock_for(ms);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-20",
          "type": "code",
          "question": "Use vector instead of new[].",
          "correctAnswer": [
            "std::vector<int> vec(10);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-21",
          "type": "code",
          "question": "Use shared_ptr for shared ownership.",
          "correctAnswer": [
            "auto ptr = std::make_shared<int>(42);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-22",
          "type": "code",
          "question": "Check use_count of shared_ptr.",
          "correctAnswer": [
            "ptr.use_count()",
            "long count = ptr.use_count();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-23",
          "type": "code",
          "question": "Use std::array for fixed-size array.",
          "correctAnswer": [
            "std::array<int, 10> arr;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-24",
          "type": "code",
          "question": "Use deque for front/back operations.",
          "correctAnswer": [
            "std::deque<int> dq;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-7-5-25",
          "type": "code",
          "question": "Use map instead of manual key-value.",
          "correctAnswer": [
            "std::map<string, int> m;"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Managing Resources Safely\n\nBest practices for resource management in C++.\n\n**Use smart pointers:**\n```cpp\nstd::unique_ptr<int> ptr1(new int(42));\nstd::unique_ptr<int> ptr2 = std::make_unique<int>(42);  // Better\nstd::shared_ptr<int> shared = std::make_shared<int>(42);\n```\n\n**RAII for custom resources:**\n```cpp\nclass Resource {\n    void* handle;\npublic:\n    Resource() : handle(acquire()) {}\n    ~Resource() { release(handle); }\n    // Disable copy, enable move\n};\n```\n\n**Standard containers:**\n```cpp\nstd::vector<int> vec;  // Automatic memory management\nstd::string str;        // Automatic string management\n```"
    }
  ]
};
