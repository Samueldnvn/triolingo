// C++ Unit 16 - Performance and Low-Level Concepts
// Generated from cppCombined.js

window.cppUnit16 = {
  "unitId": "16",
  "unitName": "16. Performance and Low-Level Concepts",
  "lessons": [
    {
      "id": 81,
      "title": "Value vs Reference Semantics",
      "unitTitle": "16. Performance and Low-Level Concepts",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-16-1-1",
          "type": "typing",
          "question": "What is value semantics?",
          "correctAnswer": [
            "copy value",
            "pass by value"
          ],
          "explanation": "Value semantics copies data.",
          "xp": 5
        },
        {
          "id": "cpp-16-1-2",
          "type": "typing",
          "question": "What is reference semantics?",
          "correctAnswer": [
            "reference to original",
            "pass by reference"
          ],
          "explanation": "Reference semantics refers to original.",
          "xp": 5
        },
        {
          "id": "cpp-16-1-3",
          "type": "typing",
          "question": "When use pass by value?",
          "correctAnswer": [
            "small types",
            "primitive types"
          ],
          "explanation": "Use value for small, cheap-to-copy types.",
          "xp": 5
        },
        {
          "id": "cpp-16-1-4",
          "type": "multiple",
          "question": "Which is cheaper for large objects?",
          "options": [
            "Reference",
            "Value",
            "Same",
            "Depends"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Reference avoids copying large objects.",
          "xp": 5
        },
        {
          "id": "cpp-16-1-5",
          "type": "multiple",
          "question": "What does const& do?",
          "options": [
            "Prevents modification",
            "Allows modification",
            "Creates copy",
            "Creates pointer"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "const& prevents modifying referenced object.",
          "xp": 5
        },
        {
          "id": "cpp-16-1-6",
          "type": "code",
          "question": "Pass by value.",
          "correctAnswer": [
            "void func(int value)",
            "void process(Type data)"
          ],
          "explanation": "void func(Type value)",
          "xp": 15
        },
        {
          "id": "cpp-16-1-7",
          "type": "code",
          "question": "Pass by reference.",
          "correctAnswer": [
            "void func(int& value)",
            "void process(Type& data)"
          ],
          "explanation": "void func(Type& value)",
          "xp": 15
        },
        {
          "id": "cpp-16-1-8",
          "type": "code",
          "question": "Pass by const reference.",
          "correctAnswer": [
            "void func(const int& value)",
            "void process(const Type& data)"
          ],
          "explanation": "void func(const Type& value)",
          "xp": 15
        },
        {
          "id": "cpp-16-1-9",
          "type": "code",
          "question": "Return by value.",
          "correctAnswer": [
            "int func()",
            "Type compute()"
          ],
          "explanation": "Type func() returns by value.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-10",
          "type": "code",
          "question": "Return by reference.",
          "correctAnswer": [
            "int& func()",
            "Type& get()"
          ],
          "explanation": "Type& func() returns reference.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-11",
          "type": "code",
          "question": "Pass by rvalue reference.",
          "correctAnswer": [
            "void func(int&& value)",
            "void process(Type&& data)"
          ],
          "explanation": "Type&& accepts rvalues.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-12",
          "type": "code",
          "question": "Perfect forwarding.",
          "correctAnswer": [
            "template<typename T> void func(T&& arg)",
            "template<typename T> void process(T&& value)"
          ],
          "explanation": "T&& forwards lvalues/rvalues.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-13",
          "type": "code",
          "question": "Forward reference.",
          "correctAnswer": [
            "std::forward<T>(arg)",
            "std::move(value)"
          ],
          "explanation": "std::forward preserves value category.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-14",
          "type": "code",
          "question": "Avoid copying large vector.",
          "correctAnswer": [
            "void func(const std::vector<int>& v)",
            "void process(const std::vector<Type>& data)"
          ],
          "explanation": "Pass vector by const reference.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-15",
          "type": "code",
          "question": "Return local variable by value.",
          "correctAnswer": [
            "std::vector<int> func() { return {1, 2, 3}; }",
            "int compute() { int x = 42; return x; }"
          ],
          "explanation": "Return local by value (RVO/NRVO).",
          "xp": 15
        },
        {
          "id": "cpp-16-1-16",
          "type": "code",
          "question": "Member variable initialization.",
          "correctAnswer": [
            "class MyClass { Type member; public: MyClass(const Type& val) : member(val) { } };",
            "MyClass(const Type& val) : data(val) {}"
          ],
          "explanation": "Initialize members in initializer list.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-17",
          "type": "code",
          "question": "Copy vs move semantics.",
          "correctAnswer": [
            "// Copy: copies data\n// Move: transfers ownership",
            "void func(Type value) { /* copy */ } void func(Type&& value) { /* move */ }"
          ],
          "explanation": "Move transfers ownership.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-18",
          "type": "code",
          "question": "Use std::move.",
          "correctAnswer": [
            "func(std::move(obj));",
            "auto result = std::move(value);"
          ],
          "explanation": "std::move casts to rvalue reference.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-19",
          "type": "code",
          "question": "Pass string efficiently.",
          "correctAnswer": [
            "void func(const std::string& str)",
            "void process(std::string_view str)"
          ],
          "explanation": "Pass string by const reference or string_view.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-20",
          "type": "code",
          "question": "Return string efficiently.",
          "correctAnswer": [
            "std::string func()",
            "std::string compute()"
          ],
          "explanation": "Return string by value (NRVO).",
          "xp": 15
        },
        {
          "id": "cpp-16-1-21",
          "type": "code",
          "question": "Accept both lvalue and rvalue.",
          "correctAnswer": [
            "template<typename T> void func(T&& arg)",
            "void process(const Type& lvalue)",
            "void process(Type&& rvalue)"
          ],
          "explanation": "Use template with forwarding reference.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-22",
          "type": "code",
          "question": "Reference wrapper.",
          "correctAnswer": [
            "std::ref(obj)",
            "std::reference_wrapper<Type>"
          ],
          "explanation": "std::ref creates reference wrapper.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-23",
          "type": "code",
          "question": "std::move for unique_ptr.",
          "correctAnswer": [
            "std::unique_ptr<int> ptr = std::make_unique<int>(42); auto ptr2 = std::move(ptr);",
            "transfer ownership with std::move"
          ],
          "explanation": "Move unique_ptr to transfer ownership.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-24",
          "type": "code",
          "question": "Copy elision with return.",
          "correctAnswer": [
            "std::vector<int> func() { return std::vector<int>{1, 2, 3}; }",
            "// NRVO eliminates copy"
          ],
          "explanation": "Named Return Value Optimization.",
          "xp": 15
        },
        {
          "id": "cpp-16-1-25",
          "type": "code",
          "question": "std::forward in perfect forwarding.",
          "correctAnswer": [
            "template<typename T> void wrapper(T&& arg) { func(std::forward<T>(arg)); }",
            "std::forward<T>(arg)"
          ],
          "explanation": "Forward with original value category.",
          "xp": 15
        }
      ],
      "lessonText": "# Value vs Reference Semantics\n\nUnderstanding when to copy vs reference.\n\n## Pass by Value\n\n```cpp\n// Small types: int, double, pointer\nvoid func(int value) {\n    // Copies value (cheap for small types)\n}\n\n// Use for types cheap to copy\nvoid process(int x, double y, bool flag) {\n}\n```\n\n## Pass by Reference\n\n```cpp\n// Large types: vectors, strings\nvoid func(const std::vector<int>& v) {\n    // No copy, just reference\n}\n\n// Mutable reference\nvoid increment(int& value) {\n    ++value;\n}\n```\n\n## Perfect Forwarding\n\n```cpp\ntemplate<typename T>\nvoid wrapper(T&& arg) {\n    target(std::forward<T>(arg));\n}\n\nint x = 42;\nwrapper(x);          // Passes lvalue\nwrapper(42);         // Passes rvalue\n```\n"
    },
    {
      "id": 82,
      "title": "Cache and Memory Layout",
      "unitTitle": "16. Performance and Low-Level Concepts",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-16-2-1",
          "type": "typing",
          "question": "What is cache locality?",
          "correctAnswer": [
            "data in cache",
            "memory proximity"
          ],
          "explanation": "Cache locality means accessing nearby memory.",
          "xp": 5
        },
        {
          "id": "cpp-16-2-2",
          "type": "typing",
          "question": "What is false sharing?",
          "correctAnswer": [
            "cache line contention",
            "threads share cache line"
          ],
          "explanation": "False sharing degrades performance.",
          "xp": 5
        },
        {
          "id": "cpp-16-2-3",
          "type": "typing",
          "question": "What is alignment?",
          "correctAnswer": [
            "memory address multiple",
            "data positioning"
          ],
          "explanation": "Alignment affects access speed.",
          "xp": 5
        },
        {
          "id": "cpp-16-2-4",
          "type": "multiple",
          "question": "Which layout improves cache?",
          "options": [
            "Contiguous array",
            "Linked list",
            "Tree",
            "Hash"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Contiguous memory improves cache locality.",
          "xp": 5
        },
        {
          "id": "cpp-16-2-5",
          "type": "multiple",
          "question": "What is cache line size?",
          "options": [
            "Typically 64 bytes",
            "Always 32 bytes",
            "128 bytes",
            "16 bytes"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Cache lines typically 64 bytes.",
          "xp": 5
        },
        {
          "id": "cpp-16-2-6",
          "type": "code",
          "question": "Use array for cache locality.",
          "correctAnswer": [
            "std::vector<int> data(size);",
            "int arr[1000];"
          ],
          "explanation": "Contiguous memory improves cache.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-7",
          "type": "code",
          "question": "Avoid false sharing with padding.",
          "correctAnswer": [
            "struct Padded { alignas(64) int value; char padding[60]; };",
            "// Align to cache line size"
          ],
          "explanation": "Pad to cache line size.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-8",
          "type": "code",
          "question": "Specify alignment.",
          "correctAnswer": [
            "alignas(16) int data[4];",
            "struct alignas(32) Aligned { };"
          ],
          "explanation": "alignas(specifier) aligns data.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-9",
          "type": "code",
          "question": "Get alignment of type.",
          "correctAnswer": [
            "alignof(int)",
            "std::alignment_of_v<int>"
          ],
          "explanation": "alignof(Type) returns alignment.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-10",
          "type": "code",
          "question": "Allocate aligned memory.",
          "correctAnswer": [
            "auto ptr = aligned_alloc(64, size);",
            "void* mem = _mm_malloc(size, alignment);"
          ],
          "explanation": "aligned_alloc for aligned memory.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-11",
          "type": "code",
          "question": "Use std::array for fixed size.",
          "correctAnswer": [
            "std::array<int, 100> data;",
            "std::array<double, 50> values;"
          ],
          "explanation": "std::array is contiguous.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-12",
          "type": "code",
          "question": "Reserve vector capacity.",
          "correctAnswer": [
            "v.reserve(1000);",
            "v.reserve(expected_size);"
          ],
          "explanation": "Reserve prevents reallocations.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-13",
          "type": "code",
          "question": "Structure of arrays.",
          "correctAnswer": [
            "struct SoA { std::vector<float> x, y, z; };",
            "// Separate arrays for each field"
          ],
          "explanation": "SoA improves vectorization.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-14",
          "type": "code",
          "question": "Array of structures.",
          "correctAnswer": [
            "struct Point { float x, y, z; }; std::vector<Point> points;",
            "// Contiguous objects"
          ],
          "explanation": "AoS is more cache-friendly for object access.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-15",
          "type": "code",
          "question": "Prefetch memory.",
          "correctAnswer": [
            "_mm_prefetch(ptr, _MM_HINT_T0);",
            "__builtin_prefetch(addr);"
          ],
          "explanation": "Prefetch loads data into cache.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-16",
          "type": "code",
          "question": "Check if pointer aligned.",
          "correctAnswer": [
            "if (reinterpret_cast<uintptr_t>(ptr) % 16 == 0)",
            "bool aligned = (addr & 0xF) == 0;"
          ],
          "explanation": "Check address alignment.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-17",
          "type": "code",
          "question": "Allocate on stack for speed.",
          "correctAnswer": [
            "int buffer[1024];",
            "char data[size]; // stack allocation"
          ],
          "explanation": "Stack allocation is faster than heap.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-18",
          "type": "code",
          "question": "Use local variables.",
          "correctAnswer": [
            "int temp = value;",
            "// Keep data on stack"
          ],
          "explanation": "Local variables on stack.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-19",
          "type": "code",
          "question": "Small object optimization.",
          "correctAnswer": [
            "// Store small data inline",
            "std::string uses SSO for small strings"
          ],
          "explanation": "Small objects stored in value.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-20",
          "type": "code",
          "question": "Cache-friendly loop order.",
          "correctAnswer": [
            "for (int i = 0; i < rows; ++i) for (int j = 0; j < cols; ++j) data[i][j];",
            "// Row-major access"
          ],
          "explanation": "Access memory sequentially.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-21",
          "type": "code",
          "question": "Use aligned vector.",
          "correctAnswer": [
            "using AlignedVector = std::vector<int, aligned_allocator<int>>;",
            "std::vector<float, AlignedAllocator<float>> v;"
          ],
          "explanation": "Custom allocator for alignment.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-22",
          "type": "code",
          "question": "Memory pool allocation.",
          "correctAnswer": [
            "class Pool { void* allocate(size_t size) { /* from pool */ } };",
            "// Pre-allocate memory blocks"
          ],
          "explanation": "Pool reduces allocation overhead.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-23",
          "type": "code",
          "question": "Avoid pointer chasing.",
          "correctAnswer": [
            "// Use array instead of linked list",
            "std::vector<int> data; // not linked list"
          ],
          "explanation": "Pointers hurt cache locality.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-24",
          "type": "code",
          "question": "Compact struct layout.",
          "correctAnswer": [
            "struct Compact { int a; int b; char c; char d; };",
            "// Order by size for compactness"
          ],
          "explanation": "Order fields to reduce padding.",
          "xp": 15
        },
        {
          "id": "cpp-16-2-25",
          "type": "code",
          "question": "Use memcpy for bulk copy.",
          "correctAnswer": [
            "std::memcpy(dest, src, size);",
            "// Faster than loop"
          ],
          "explanation": "memcpy optimized for speed.",
          "xp": 15
        }
      ],
      "lessonText": "# Cache and Memory Layout\n\nUnderstanding memory access patterns.\n\n## Cache Locality\n\n```cpp\n// Good: Contiguous access\nstd::vector<int> data(1000);\nfor (size_t i = 0; i < data.size(); ++i) {\n    sum += data[i];  // Sequential access\n}\n\n// Bad: Random access\nstd::list<int> data;\nfor (auto& item : data) {\n    sum += item;  // Poor locality\n}\n```\n\n## Memory Alignment\n\n```cpp\n// Align to cache line (64 bytes)\nstruct alignas(64) CacheLine {\n    int value;\n    // Padding to 64 bytes\n};\n```\n\n## Structure of Arrays\n\n```cpp\n// Array of Structures (AoS)\nstruct Point { float x, y, z; };\nstd::vector<Point> points;\n\n// Structure of Arrays (SoA)\nstruct Points {\n    std::vector<float> x, y, z;\n};\n```\n"
    },
    {
      "id": 83,
      "title": "Inline vs Virtual Costs",
      "unitTitle": "16. Performance and Low-Level Concepts",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-16-3-1",
          "type": "typing",
          "question": "What does inline do?",
          "correctAnswer": [
            "function substitution",
            "avoid call overhead"
          ],
          "explanation": "Inline replaces call with code.",
          "xp": 5
        },
        {
          "id": "cpp-16-3-2",
          "type": "typing",
          "question": "What is virtual function overhead?",
          "correctAnswer": [
            "vtable lookup",
            "indirect call"
          ],
          "explanation": "Virtual requires vtable lookup.",
          "xp": 5
        },
        {
          "id": "cpp-16-3-3",
          "type": "typing",
          "question": "When use inline?",
          "correctAnswer": [
            "small functions",
            "performance critical"
          ],
          "explanation": "Inline small, frequently called functions.",
          "xp": 5
        },
        {
          "id": "cpp-16-3-4",
          "type": "multiple",
          "question": "Are inline functions guaranteed inline?",
          "options": [
            "No",
            "Yes",
            "Always",
            "Never"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Inline is hint, not guarantee.",
          "xp": 5
        },
        {
          "id": "cpp-16-3-5",
          "type": "multiple",
          "question": "Can virtual be inlined?",
          "options": [
            "Sometimes",
            "Never",
            "Always",
            "Only static"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Virtual can be inlined if known type.",
          "xp": 5
        },
        {
          "id": "cpp-16-3-6",
          "type": "code",
          "question": "Mark function inline.",
          "correctAnswer": [
            "inline int add(int a, int b)",
            "inline double calculate()"
          ],
          "explanation": "inline before return type.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-7",
          "type": "code",
          "question": "Define inline in header.",
          "correctAnswer": [
            "// header.h\ninline int func() { return 42; }",
            "inline functions must be in headers"
          ],
          "explanation": "Inline in header for ODR.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-8",
          "type": "code",
          "question": "Virtual function in class.",
          "correctAnswer": [
            "virtual void func()",
            "virtual int compute() override"
          ],
          "explanation": "virtual for runtime dispatch.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-9",
          "type": "code",
          "question": "Final to prevent override.",
          "correctAnswer": [
            "virtual void func() final",
            "void func() override final"
          ],
          "explanation": "final prevents overriding.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-10",
          "type": "code",
          "question": "Call virtual function directly.",
          "correctAnswer": [
            "obj.Base::func()",
            "obj.BaseClass::method()"
          ],
          "explanation": "Scope resolution bypasses virtual.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-11",
          "type": "code",
          "question": "Non-virtual interface.",
          "correctAnswer": [
            "class Base { public: void func() { funcImpl(); } private: virtual void funcImpl() { } };",
            "// NVI pattern"
          ],
          "explanation": "Public non-virtual calls private virtual.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-12",
          "type": "code",
          "question": "Inline lambda.",
          "correctAnswer": [
            "auto lambda = []() { return 42; };",
            "auto l = [] { /* code */ };"
          ],
          "explanation": "Lambdas are inline by default.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-13",
          "type": "code",
          "question": "Inline variable (C++17).",
          "correctAnswer": [
            "inline constexpr int MAX = 100;",
            "inline std::string global = \"value\";"
          ],
          "explanation": "inline for variable ODR.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-14",
          "type": "code",
          "question": "Force inline (compiler hint).",
          "correctAnswer": [
            "__attribute__((always_inline))",
            "#pragma inline"
          ],
          "explanation": "Compiler-specific attributes.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-15",
          "type": "code",
          "question": "Prevent inline.",
          "correctAnswer": [
            "__attribute__((noinline))",
            "#pragma noinline"
          ],
          "explanation": "Prevent function inlining.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-16",
          "type": "code",
          "question": "CRTP for static polymorphism.",
          "correctAnswer": [
            "template<typename Derived> class Base { public: void interface() { static_cast<Derived*>(this)->implementation(); } };",
            "// Curiously Recurring Template Pattern"
          ],
          "explanation": "CRTP avoids virtual dispatch.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-17",
          "type": "code",
          "question": "Virtual destructor.",
          "correctAnswer": [
            "virtual ~Base() = default;",
            "virtual ~Base() { }"
          ],
          "explanation": "Virtual destructor for polymorphic base.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-18",
          "type": "code",
          "question": "Pure virtual function.",
          "correctAnswer": [
            "virtual void func() = 0;",
            "virtual int compute() = 0;"
          ],
          "explanation": "= 0 makes pure virtual.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-19",
          "type": "code",
          "question": "Override specifier.",
          "correctAnswer": [
            "void func() override",
            "int compute() override"
          ],
          "explanation": "override ensures virtual override.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-20",
          "type": "code",
          "question": "Inline member function.",
          "correctAnswer": [
            "class MyClass { inline int func() { return 42; } };",
            "// or define in class definition"
          ],
          "explanation": "Define in class for inline.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-21",
          "type": "code",
          "question": "Constexpr for compile-time.",
          "correctAnswer": [
            "constexpr int square(int x) { return x * x; }",
            "// Constexpr functions are inline candidates"
          ],
          "explanation": "constexpr enables compile-time.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-22",
          "type": "code",
          "question": "Call base virtual.",
          "correctAnswer": [
            "Base::func()",
            "BaseClass::method()"
          ],
          "explanation": "Scope resolution for base.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-23",
          "type": "code",
          "question": "Virtual with default implementation.",
          "correctAnswer": [
            "virtual void func() { /* default */ }",
            "// Can be overridden"
          ],
          "explanation": "Virtual with implementation.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-24",
          "type": "code",
          "question": "Avoid virtual in tight loop.",
          "correctAnswer": [
            "// Use template or CRTP instead",
            "template<typename T> void process(T& obj) { obj.func(); }"
          ],
          "explanation": "Templates avoid virtual overhead.",
          "xp": 15
        },
        {
          "id": "cpp-16-3-25",
          "type": "code",
          "question": "Final class.",
          "correctAnswer": [
            "class MyClass final : public Base",
            "// Cannot be inherited"
          ],
          "explanation": "final prevents inheritance.",
          "xp": 15
        }
      ],
      "lessonText": "# Inline vs Virtual Costs\n\nUnderstanding function call overhead.\n\n## Inline Functions\n\n```cpp\n// Inline function (hint to compiler)\ninline int add(int a, int b) {\n    return a + b;\n}\n\n// May be inlined at call site\nint result = add(5, 3);\n// Becomes: int result = 5 + 3;\n```\n\n## Virtual Function Overhead\n\n```cpp\nclass Base {\npublic:\n    virtual void func() { }  // vtable lookup\n};\n\nclass Derived : public Base {\npublic:\n    void func() override { }\n};\n\nBase* ptr = new Derived();\nptr->func();  // Virtual dispatch (indirect call)\n```\n\n## CRTP (Static Polymorphism)\n\n```cpp\ntemplate<typename Derived>\nclass Base {\npublic:\n    void interface() {\n        // Static cast, no virtual overhead\n        static_cast<Derived*>(this)->implementation();\n    }\n};\n```\n"
    },
    {
      "id": 84,
      "title": "Move Semantics and Performance",
      "unitTitle": "16. Performance and Low-Level Concepts",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-16-4-1",
          "type": "typing",
          "question": "What is move semantics?",
          "correctAnswer": [
            "transfer ownership",
            "avoid copy"
          ],
          "explanation": "Move transfers instead of copying.",
          "xp": 5
        },
        {
          "id": "cpp-16-4-2",
          "type": "typing",
          "question": "What does std::move do?",
          "correctAnswer": [
            "cast to rvalue",
            "enable move"
          ],
          "explanation": "std::move casts to rvalue reference.",
          "xp": 5
        },
        {
          "id": "cpp-16-4-3",
          "type": "typing",
          "question": "What is rvalue reference?",
          "correctAnswer": [
            "&&",
            "temporary object"
          ],
          "explanation": "rvalue reference binds to temporaries.",
          "xp": 5
        },
        {
          "id": "cpp-16-4-4",
          "type": "multiple",
          "question": "When does move happen?",
          "options": [
            "Temporary objects",
            "Always",
            "Never",
            "Only copy"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Move happens with temporaries.",
          "xp": 5
        },
        {
          "id": "cpp-16-4-5",
          "type": "multiple",
          "question": "Can move be noexcept?",
          "options": [
            "Yes",
            "No",
            "Only default",
            "Only inline"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Move should be noexcept.",
          "xp": 5
        },
        {
          "id": "cpp-16-4-6",
          "type": "code",
          "question": "Move constructor.",
          "correctAnswer": [
            "MyClass(MyClass&& other) noexcept : data(std::move(other.data)) { }",
            "MyClass(MyClass&&) noexcept"
          ],
          "explanation": "Move constructor takes rvalue.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-7",
          "type": "code",
          "question": "Move assignment operator.",
          "correctAnswer": [
            "MyClass& operator=(MyClass&& other) noexcept { data = std::move(other.data); return *this; }",
            "MyClass& operator=(MyClass&&) noexcept"
          ],
          "explanation": "Move assignment transfers ownership.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-8",
          "type": "code",
          "question": "Use std::move.",
          "correctAnswer": [
            "auto result = std::move(obj);",
            "v.push_back(std::move(item));"
          ],
          "explanation": "std::move enables move.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-9",
          "type": "code",
          "question": "Return by move.",
          "correctAnswer": [
            "std::vector<int> func() { return std::vector<int>{1, 2, 3}; }",
            "// RVO applies"
          ],
          "explanation": "Return local by value (RVO).",
          "xp": 15
        },
        {
          "id": "cpp-16-4-10",
          "type": "code",
          "question": "Move with unique_ptr.",
          "correctAnswer": [
            "std::unique_ptr<int> ptr2 = std::move(ptr1);",
            "transfer unique_ptr ownership"
          ],
          "explanation": "Move unique_ptr transfers ownership.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-11",
          "type": "code",
          "question": "Move with vector.",
          "correctAnswer": [
            "std::vector<int> v2 = std::move(v1);",
            "// O(1) move"
          ],
          "explanation": "Vector move is O(1).",
          "xp": 15
        },
        {
          "id": "cpp-16-4-12",
          "type": "code",
          "question": "emplace_back vs push_back.",
          "correctAnswer": [
            "v.emplace_back(args);",
            "// construct in place"
          ],
          "explanation": "emplace_back constructs in-place.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-13",
          "type": "code",
          "question": "std::swap uses move.",
          "correctAnswer": [
            "std::swap(a, b);",
            "// Efficient swap using move"
          ],
          "explanation": "swap uses move semantics.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-14",
          "type": "code",
          "question": "Move string.",
          "correctAnswer": [
            "std::string s2 = std::move(s1);",
            "// Steal buffer"
          ],
          "explanation": "Move steals string buffer.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-15",
          "type": "code",
          "question": "Pass by rvalue reference.",
          "correctAnswer": [
            "void func(MyClass&& obj)",
            "void process(Type&& data)"
          ],
          "explanation": "Type&& accepts rvalues.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-16",
          "type": "code",
          "question": "std::forward for perfect forwarding.",
          "correctAnswer": [
            "template<typename T> void wrapper(T&& arg) { func(std::forward<T>(arg)); }",
            "std::forward<T>(arg)"
          ],
          "explanation": "Forward preserves value category.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-17",
          "type": "code",
          "question": "Noexcept move.",
          "correctAnswer": [
            "MyClass(MyClass&& other) noexcept",
            "MyClass& operator=(MyClass&&) noexcept"
          ],
          "explanation": "Move should be noexcept.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-18",
          "type": "code",
          "question": "Move with map.",
          "correctAnswer": [
            "auto node = m.extract(key); m2.insert(std::move(node));",
            "// Efficient map transfer"
          ],
          "explanation": "Move map nodes efficiently.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-19",
          "type": "code",
          "question": "std::make_unique.",
          "correctAnswer": [
            "auto ptr = std::make_unique<MyClass>(args);",
            "// Exception-safe unique_ptr"
          ],
          "explanation": "make_unique is exception-safe.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-20",
          "type": "code",
          "question": "std::make_shared.",
          "correctAnswer": [
            "auto ptr = std::make_shared<MyClass>(args);",
            "// Allocate control block and object"
          ],
          "explanation": "make_shared is more efficient.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-21",
          "type": "code",
          "question": "Move with tuple.",
          "correctAnswer": [
            "std::tuple<int, string> t2 = std::move(t1);",
            "// Move tuple elements"
          ],
          "explanation": "Move transfers tuple elements.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-22",
          "type": "code",
          "question": "Copy and swap idiom.",
          "correctAnswer": [
            "MyClass& operator=(MyClass other) { swap(*this, other); return *this; }",
            "// Use copy/move and swap"
          ],
          "explanation": "Copy/move then swap.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-23",
          "type": "code",
          "question": "Default move operations.",
          "correctAnswer": [
            "MyClass(MyClass&&) = default;",
            "MyClass& operator=(MyClass&&) = default;"
          ],
          "explanation": "= default for compiler-generated.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-24",
          "type": "code",
          "question": "Delete copy operations.",
          "correctAnswer": [
            "MyClass(const MyClass&) = delete;",
            "MyClass& operator=(const MyClass&) = delete;"
          ],
          "explanation": "= delete prevents copying.",
          "xp": 15
        },
        {
          "id": "cpp-16-4-25",
          "type": "code",
          "question": "Move with initializer_list.",
          "correctAnswer": [
            "std::vector<int> v = {1, 2, 3};",
            "// initializer_list does not move"
          ],
          "explanation": "initializer_list doesn't support move.",
          "xp": 15
        }
      ],
      "lessonText": "# Move Semantics\n\nEfficiently transferring resources.\n\n## Move vs Copy\n\n```cpp\n// Copy: Expensive\nstd::vector<int> v1 = {1, 2, 3};\nstd::vector<int> v2 = v1;  // Copies all elements\n\n// Move: Cheap\nstd::vector<int> v3 = std::move(v1);  // Just swaps pointers\n```\n\n## Move Constructor\n\n```cpp\nclass Buffer {\n    int* data;\n    size_t size;\npublic:\n    // Move constructor\n    Buffer(Buffer&& other) noexcept\n        : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n    }\n};\n```\n\n## emplace_back\n\n```cpp\nstd::vector<std::string> v;\n\n// Copy/move push_back\nv.push_back(\"hello\");\n\n// Construct in-place (no copy/move)\nv.emplace_back(\"hello\");\n```\n"
    },
    {
      "id": 85,
      "title": "Profiling and Optimization",
      "unitTitle": "16. Performance and Low-Level Concepts",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-16-5-1",
          "type": "typing",
          "question": "What is profiling?",
          "correctAnswer": [
            "measure performance",
            "analyze runtime"
          ],
          "explanation": "Profiling measures execution time.",
          "xp": 5
        },
        {
          "id": "cpp-16-5-2",
          "type": "typing",
          "question": "What is hotspot?",
          "correctAnswer": [
            "slow code",
            "performance bottleneck"
          ],
          "explanation": "Hotspots are slow code sections.",
          "xp": 5
        },
        {
          "id": "cpp-16-5-3",
          "type": "typing",
          "question": "What is benchmarking?",
          "correctAnswer": [
            "compare performance",
            "measure speed"
          ],
          "explanation": "Benchmarking compares performance.",
          "xp": 5
        },
        {
          "id": "cpp-16-5-4",
          "type": "multiple",
          "question": "Should optimize prematurely?",
          "options": [
            "No",
            "Yes",
            "Always",
            "Never"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Measure before optimizing.",
          "xp": 5
        },
        {
          "id": "cpp-16-5-5",
          "type": "multiple",
          "question": "What is -O2 flag?",
          "options": [
            "Optimization level 2",
            "Debug mode",
            "Link time",
            "Runtime"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "-O2 enables optimizations.",
          "xp": 5
        },
        {
          "id": "cpp-16-5-6",
          "type": "code",
          "question": "Measure execution time.",
          "correctAnswer": [
            "auto start = std::chrono::high_resolution_clock::now(); /* code */ auto end = std::chrono::high_resolution_clock::now(); auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();",
            "std::chrono for timing"
          ],
          "explanation": "Use chrono for timing.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-7",
          "type": "code",
          "question": "Use __builtin_expect.",
          "correctAnswer": [
            "if (__builtin_expect(condition, 0)) { /* unlikely */ }",
            "if (__builtin_expect(condition, 1)) { /* likely */ }"
          ],
          "explanation": "Hint branch prediction.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-8",
          "type": "code",
          "question": "Likely/unlikely attributes.",
          "correctAnswer": [
            "if (likely(condition)) { }",
            "if (unlikely(error)) { }"
          ],
          "explanation": "[[likely]]/[[unlikely]] hints.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-9",
          "type": "code",
          "question": "Restrict pointer aliasing.",
          "correctAnswer": [
            "void func(int* __restrict ptr1, int* __restrict ptr2)",
            "void process(T* __restrict a, T* __restrict b)"
          ],
          "explanation": "restrict prevents aliasing.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-10",
          "type": "code",
          "question": "Loop unrolling hint.",
          "correctAnswer": [
            "#pragma unroll 4",
            "#pragma GCC unroll 4"
          ],
          "explanation": "Hint to unroll loop.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-11",
          "type": "code",
          "question": "Vectorization hint.",
          "correctAnswer": [
            "#pragma omp simd",
            "#pragma GCC ivdep"
          ],
          "explanation": "Hint to vectorize.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-12",
          "type": "code",
          "question": "Enable link-time optimization.",
          "correctAnswer": [
            "-flto",
            "// GCC/Clang flag"
          ],
          "explanation": "LTO optimizes across translation units.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-13",
          "type": "code",
          "question": "Profile guided optimization.",
          "correctAnswer": [
            "-fprofile-generate / -fprofile-use",
            "// PGO flags"
          ],
          "explanation": "PGO uses runtime profile.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-14",
          "type": "code",
          "question": "Release build flags.",
          "correctAnswer": [
            "-O2 -DNDEBUG",
            "-O3 -march=native"
          ],
          "explanation": "Release optimizations.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-15",
          "type": "code",
          "question": "Debug build flags.",
          "correctAnswer": [
            "-g -O0 -DDEBUG",
            "// Debug symbols"
          ],
          "explanation": "Debug build options.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-16",
          "type": "code",
          "question": "Use constexpr.",
          "correctAnswer": [
            "constexpr int MAX = 100;",
            "constexpr double PI = 3.14159;"
          ],
          "explanation": "constexpr compile-time.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-17",
          "type": "code",
          "question": "Enable asserts in debug.",
          "correctAnswer": [
            "assert(condition);",
            "assert(ptr != nullptr);"
          ],
          "explanation": "assert checks invariants.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-18",
          "type": "code",
          "question": "Avoid virtual in hot path.",
          "correctAnswer": [
            "// Use template or CRTP",
            "template<typename T> inline void process(T& obj)"
          ],
          "explanation": "Templates avoid virtual.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-19",
          "type": "code",
          "question": "Use std::array over raw array.",
          "correctAnswer": [
            "std::array<int, 10> arr;",
            "// Type-safe bounds checked"
          ],
          "explanation": "std::array is safer.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-20",
          "type": "code",
          "question": "Reserve vector capacity.",
          "correctAnswer": [
            "v.reserve(expected_size);",
            "// Pre-allocate"
          ],
          "explanation": "Reserve prevents reallocation.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-21",
          "type": "code",
          "question": "Use string_view.",
          "correctAnswer": [
            "void func(std::string_view str)",
            "// Non-owning string view"
          ],
          "explanation": "string_view avoids allocation.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-22",
          "type": "code",
          "question": "Avoid exceptions in hot path.",
          "correctAnswer": [
            "// Use error codes",
            "std::optional<Result> func()"
          ],
          "explanation": "Exceptions have overhead.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-23",
          "type": "code",
          "question": "Use cache-friendly containers.",
          "correctAnswer": [
            "std::vector<int> data;",
            "// Contiguous memory"
          ],
          "explanation": "Vector is cache-friendly.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-24",
          "type": "code",
          "question": "Parallel execution.",
          "correctAnswer": [
            "#pragma omp parallel for",
            "std::for_each(std::execution::par, ...)"
          ],
          "explanation": "Parallel for loops.",
          "xp": 15
        },
        {
          "id": "cpp-16-5-25",
          "type": "code",
          "question": "Benchmark with google benchmark.",
          "correctAnswer": [
            "BENCHMARK(Func)->Iterations(1000000);",
            "// Benchmark macro"
          ],
          "explanation": "Use benchmark library.",
          "xp": 15
        }
      ],
      "lessonText": "# Profiling and Optimization\n\nMeasuring and improving performance.\n\n## Timing Code\n\n```cpp\n#include <chrono>\n\nauto start = std::chrono::high_resolution_clock::now();\n\n// Code to measure\n\nauto end = std::chrono::high_resolution_clock::now();\nauto duration = std::chrono::duration_cast<std::chrono::milliseconds>(end - start);\n```\n\n## Compiler Optimization Flags\n\n```bash\n# Release build\ng++ -O2 -DNDEBUG -march=native program.cpp\n\n# Debug build\ng++ -g -O0 -DDEBUG program.cpp\n```\n\n## Optimization Tips\n\n```cpp\n// Reserve capacity\nv.reserve(1000);\n\n// Use string_view to avoid allocations\nvoid func(std::string_view str);\n\n// Move instead of copy\nauto result = std::move(data);\n\n// Avoid virtual in hot paths\ntemplate<typename T>\ninline void process(T& obj);\n```\n"
    }
  ]
};
