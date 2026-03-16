#!/usr/bin/env python3
"""
Build Unit 13: Exception Handling
4 lessons with 25 questions each (100 total)
Heavy emphasis on code questions (~70% = 70 code questions)
"""
import json

print("🚀 Building C++ Unit 13: Exception Handling")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: try, catch, throw
# ============================================================================
lesson1_questions = [
    {
        "id": "cpp-13-1-1", "type": "typing", "question": "What is try-catch block?", "correctAnswer": ["handles exceptions", "error handling"], "explanation": "try-catch handles exceptions.", "xp": 5
    },
    {
        "id": "cpp-13-1-2", "type": "typing", "question": "What keyword throws exception?", "correctAnswer": ["throw", "throw exception;"], "explanation": "throw keyword raises exception.", "xp": 5
    },
    {
        "id": "cpp-13-1-3", "type": "typing", "question": "What keyword catches exception?", "correctAnswer": ["catch", "catch block"], "explanation": "catch handles exception.", "xp": 5
    },
    {
        "id": "cpp-13-1-4", "type": "multiple", "question": "Can multiple catch blocks follow try?", "options": ["Yes", "No", "Only one", "Only derived"], "correctAnswer": [0], "explanation": "Multiple catch blocks can follow try.", "xp": 5
    },
    {
        "id": "cpp-13-1-5", "type": "multiple", "question": "What happens if exception not caught?", "options": ["Program terminates", "Ignored", "Handled automatically", "Continue"], "correctAnswer": [0], "explanation": "Uncaught exception terminates program.", "xp": 5
    },
    {"id": "cpp-13-1-6", "type": "code", "question": "Basic try-catch block.",
        "correctAnswer": ["try { /* code */ } catch (const std::exception& e) { /* handle */ }", "try { risky_code(); } catch (const std::runtime_error& e) { }"],
        "explanation": "try { } catch (const exception& e) { }", "xp": 15
    },
    {"id": "cpp-13-1-7", "type": "code", "question": "Throw exception.",
        "correctAnswer": ["throw std::runtime_error(\"message\");", "throw std::invalid_argument(\"error\");"],
        "explanation": "throw exception_type(\"message\")", "xp": 15
    },
    {"id": "cpp-13-1-8", "type": "code", "question": "Catch specific exception.",
        "correctAnswer": ["catch (const std::runtime_error& e)", "catch (const std::invalid_argument& e)"],
        "explanation": "catch (const exception_type& e)", "xp": 15
    },
    {"id": "cpp-13-1-9", "type": "code", "question": "Catch all exceptions.",
        "correctAnswer": ["catch (...)", "try { } catch (...) { }"],
        "explanation": "catch (...) catches all.", "xp": 15
    },
    {"id": "cpp-13-1-10", "type": "code", "question": "Multiple catch blocks.",
        "correctAnswer": ["try { } catch (const std::runtime_error& e) { } catch (const std::invalid_argument& e) { }", "try { } catch (const exception& e) { } catch (...) { }"],
        "explanation": "Multiple catch blocks for different types.", "xp": 15
    },
    {"id": "cpp-13-1-11", "type": "code", "question": "Rethrow exception.",
        "correctAnswer": ["throw;", "catch (const std::exception& e) { throw; }"],
        "explanation": "throw; rethrows current exception.", "xp": 15
    },
    {"id": "cpp-13-1-12", "type": "code", "question": "Throw with new.",
        "correctAnswer": ["throw new std::runtime_error(\"error\");", "throw std::make_exception_ptr(std::runtime_error(\"msg\"));"],
        "explanation": "throw new exception_type();", "xp": 15
    },
    {"id": "cpp-13-1-13", "type": "code", "question": "Catch by value vs reference.",
        "correctAnswer": ["catch (const std::exception& e)", "catch (std::exception e)"],
        "explanation": "Prefer catch by const reference.", "xp": 15
    },
    {"id": "cpp-13-1-14", "type": "code", "question": "Noexcept function with throw.",
        "correctAnswer": ["void func() noexcept { throw std::runtime_error(\"\"); }"],
        "explanation": "Throwing in noexcept calls std::terminate.", "xp": 15
    },
    {"id": "cpp-13-1-15", "type": "code", "question": "Nested try-catch.",
        "correctAnswer": ["try { try { } catch (const std::exception& e) { } } catch (...) { }", "try { outer_func(); } catch (const std::exception& e) { }"],
        "explanation": "Nested try-catch blocks.", "xp": 15
    },
    {"id": "cpp-13-1-16", "type": "code", "question": "Throw with custom message.",
        "correctAnswer": ["throw std::runtime_error(\"Custom error message\");", "throw std::invalid_argument(\"Invalid argument: \" + arg);"],
        "explanation": "Include descriptive message in exception.", "xp": 15
    },
    {"id": "cpp-13-1-17", "type": "code", "question": "Catch and access what().",
        "correctAnswer": ["catch (const std::exception& e) { std::cout << e.what(); }", "catch (const std::runtime_error& e) { std::cerr << e.what(); }"],
        "explanation": "e.what() returns error message.", "xp": 15
    },
    {"id": "cpp-13-1-18", "type": "code", "question": "Throw std::logic_error.",
        "correctAnswer": ["throw std::logic_error(\"logic error\");", "throw std::domain_error(\"domain error\");"],
        "explanation": "std::logic_error family for logic errors.", "xp": 15
    },
    {"id": "cpp-13-1-19", "type": "code", "question": "Throw std::runtime_error.",
        "correctAnswer": ["throw std::runtime_error(\"runtime error\");", "throw std::range_error(\"range error\");"],
        "explanation": "std::runtime_error for runtime errors.", "xp": 15
    },
    {"id": "cpp-13-1-20", "type": "code", "question": "Catch and throw new.",
        "correctAnswer": ["catch (const std::exception& e) { throw std::runtime_error(std::string(\"Wrapped: \") + e.what()); }"],
        "explanation": "Wrap and throw new exception.", "xp": 15
    },
    {"id": "cpp-13-1-21", "type": "code", "question": "Function try block.",
        "correctAnswer": ["int func() try { return risky(); } catch (...) { return -1; }", "MyClass() try : member(init) { } catch (...) { }"],
        "explanation": "Function-try-block for constructors.", "xp": 15
    },
    {"id": "cpp-13-1-22", "type": "code", "question": "Throw with std::current_exception.",
        "correctAnswer": ["std::rethrow_exception(std::current_exception());", "auto ptr = std::current_exception();"],
        "explanation": "Store and rethrow current exception.", "xp": 15
    },
    {"id": "cpp-13-1-23", "type": "code", "question": "Exception specification.",
        "correctAnswer": ["void func() throw(std::runtime_error)", "void func() noexcept(false)"],
        "explanation": "Dynamic exception specification (deprecated).", "xp": 15
    },
    {"id": "cpp-13-1-24", "type": "code", "question": "Catch with if-else logic.",
        "correctAnswer": ["catch (const std::exception& e) { if (dynamic_cast<const std::runtime_error*>(&e)) { } }", "catch (const auto& e) { if (typeid(e) == typeid(std::runtime_error)) { } }"],
        "explanation": "Type check in catch block.", "xp": 15
    },
    {"id": "cpp-13-1-25", "type": "code", "question": "Throw in destructor (warning).",
        "correctAnswer": ["~MyClass() noexcept { if (error) throw std::runtime_error(\"\"); }"],
        "explanation": "Avoid throwing in destructors.", "xp": 15}
]

lesson1 = {
    "id": 68, "title": "try, catch, throw", "unitTitle": "13. Exception Handling", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# try, catch, throw

Basic exception handling in C++.

## Try-Catch Syntax

```cpp
try {
    // Code that may throw
    riskyFunction();
} catch (const std::exception& e) {
    // Handle exception
    std::cerr << "Error: " << e.what() << std::endl;
} catch (...) {
    // Catch all other exceptions
    std::cerr << "Unknown error" << std::endl;
}
```

## Throwing Exceptions

```cpp
// Throw standard exception
throw std::runtime_error("Something went wrong");

// Throw with custom message
throw std::invalid_argument("Invalid argument: " + arg);

// Rethrow caught exception
catch (const std::exception& e) {
    throw;  // Re-throw same exception
}
```

## Best Practices

```cpp
// Catch by const reference
catch (const std::exception& e) {
    std::cout << e.what();
}

// Prefer specific exception types
catch (const std::runtime_error& e) {
    // Handle runtime error
}
```
""",
    "questions": lesson1_questions
}

# ============================================================================
# LESSON 2: Exception Safety Levels
# ============================================================================
lesson2_questions = [
    {
        "id": "cpp-13-2-1", "type": "typing", "question": "What is no-throw guarantee?", "correctAnswer": ["never throws", "operation cannot fail"], "explanation": "No-throw means operation never throws.", "xp": 5
    },
    {
        "id": "cpp-13-2-2", "type": "typing", "question": "What is strong guarantee?", "correctAnswer": ["operation succeeds completely or no effect", "rollback on failure"], "explanation": "Strong guarantee: all or nothing.", "xp": 5
    },
    {
        "id": "cpp-13-2-3", "type": "typing", "question": "What is basic guarantee?", "correctAnswer": ["object in valid state", "no resource leaks"], "explanation": "Basic guarantee: object valid after exception.", "xp": 5
    },
    {
        "id": "cpp-13-2-4", "type": "multiple", "question": "What is noexcept used for?", "options": ["Indicate no-throw", "Throw exception", "Catch all", "Type check"], "correctAnswer": [0], "explanation": "noexcept indicates function doesn't throw.", "xp": 5
    },
    {
        "id": "cpp-13-2-5", "type": "multiple", "question": "What happens if noexcept throws?", "options": ["std::terminate called", "Caught normally", "Ignored", "Program continues"], "correctAnswer": [0], "explanation": "std::terminate called if noexcept throws.", "xp": 5
    },
    {"id": "cpp-13-2-6", "type": "code", "question": "Mark function noexcept.",
        "correctAnswer": ["void func() noexcept { }", "int calculate() noexcept { return 42; }"],
        "explanation": "void func() noexcept { }", "xp": 15
    },
    {"id": "cpp-13-2-7", "type": "code", "question": "Conditional noexcept.",
        "correctAnswer": ["void func() noexcept(std::is_nothrow_constructible_v<T>)", "void push(const T& value) noexcept(noexcept(std::declval<T&>().operator=(std::declval<const T&>())))"],
        "explanation": "noexcept(condition)", "xp": 15
    },
    {"id": "cpp-13-2-8", "type": "code", "question": "Check if noexcept.",
        "correctAnswer": ["noexcept(expr)", "if constexpr (noexcept(func()))"],
        "explanation": "noexcept(expression) evaluates to bool.", "xp": 15
    },
    {"id": "cpp-13-2-9", "type": "code", "question": "Strong guarantee with copy-and-swap.",
        "correctAnswer": ["void swap(MyClass& other) noexcept { std::swap(data, other.data); }", "MyClass operator+(const MyClass& other) const { MyClass temp = *this; temp += other; return temp; }"],
        "explanation": "Copy-and-swap provides strong guarantee.", "xp": 15
    },
    {"id": "cpp-13-2-10", "type": "code", "question": "Basic guarantee with resource cleanup.",
        "correctAnswer": ["~MyClass() noexcept { delete[] data; }", "void clear() { data.reset(); }"],
        "explanation": "Destructors should be noexcept.", "xp": 15
    },
    {"id": "cpp-13-2-11", "type": "code", "question": "No-throw move operations.",
        "correctAnswer": ["MyClass(MyClass&& other) noexcept : data(std::move(other.data)) { }", "MyClass& operator=(MyClass&& other) noexcept { data = std::move(other.data); return *this; }"],
        "explanation": "Move operations should be noexcept for containers.", "xp": 15
    },
    {"id": "cpp-13-2-12", "type": "code", "question": "Exception-safe swap.",
        "correctAnswer": ["void swap(T& a, T& b) noexcept { T temp = std::move(a); a = std::move(b); b = std::move(temp); }", "friend void swap(MyClass& a, MyClass& b) noexcept { std::swap(a.data, b.data); }"],
        "explanation": "Swap should be noexcept.", "xp": 15
    },
    {"id": "cpp-13-2-13", "type": "code", "question": "Use unique_ptr for exception safety.",
        "correctAnswer": ["std::unique_ptr<int[]> data(new int[size]);", "void func() { std::unique_ptr<Resource> ptr(new Resource()); }"],
        "explanation": "unique_ptr provides automatic cleanup.", "xp": 15
    },
    {"id": "cpp-13-2-14", "type": "code", "question": "Exception-safe constructor.",
        "correctAnswer": ["MyClass(int size) : data(size) { }", "explicit MyClass(T arg) : member(std::move(arg)) { }"],
        "explanation": "Member initializer list provides safety.", "xp": 15
    },
    {"id": "cpp-13-2-15", "type": "code", "question": "Raii wrapper pattern.",
        "correctAnswer": ["class ScopedLock { public: ScopedLock(Mutex& m) : mutex(m) { mutex.lock(); } ~ScopedLock() { mutex.unlock(); } private: Mutex& mutex; };"],
        "explanation": "RAII wrapper for resource management.", "xp": 15
    },
    {"id": "cpp-13-2-16", "type": "code", "question": "Exception-safe assignment.",
        "correctAnswer": ["MyClass& operator=(const MyClass& other) { if (this != &other) { MyClass temp(other); swap(*this, temp); } return *this; }"],
        "explanation": "Copy-and-swap for strong guarantee.", "xp": 15
    },
    {"id": "cpp-13-2-17", "type": "code", "question": "Noexcept in vector resize.",
        "correctAnswer": ["struct Item { Item() noexcept = default; Item(Item&&) noexcept = default; };"],
        "explanation": "Noexcept moves enable vector optimizations.", "xp": 15
    },
    {"id": "cpp-13-2-18", "type": "code", "question": "Exception-safe factory.",
        "correctAnswer": ["std::unique_ptr<MyClass> create() { return std::make_unique<MyClass>(); }", "auto ptr = std::unique_ptr<MyClass>(new MyClass());"],
        "explanation": "Return unique_ptr from factory.", "xp": 15
    },
    {"id": "cpp-13-2-19", "type": "code", "question": "Basic guarantee with std::vector.",
        "correctAnswer": ["std::vector<int> v; v.reserve(size); for (int i = 0; i < size; ++i) v.push_back(i);"],
        "explanation": "Vector maintains valid state on exception.", "xp": 15
    },
    {"id": "cpp-13-2-20", "type": "code", "question": "Noexcept with std::move.",
        "correctAnswer": ["void func(T&& arg) noexcept(std::is_nothrow_move_constructible_v<T>)", "noexcept(std::is_nothrow_move_assignable_v<T>)"],
        "explanation": "Check move operations are noexcept.", "xp": 15
    },
    {"id": "cpp-13-2-21", "type": "code", "question": "Exception-safe emplace_back.",
        "correctAnswer": ["v.emplace_back(args...)", "v.emplace_back(std::move(item))"],
        "explanation": "emplace_back is exception-safe.", "xp": 15
    },
    {"id": "cpp-13-2-22", "type": "code", "question": "Strong guarantee with transactions.",
        "correctAnswer": ["void update() { backup = state; try { modify(); } catch (...) { state = backup; throw; } }"],
        "explanation": "Transaction-like rollback on exception.", "xp": 15
    },
    {"id": "cpp-13-2-23", "type": "code", "question": "Exception-safe pointer reset.",
        "correctAnswer": ["ptr.reset(new Resource());", "ptr = std::make_unique<Resource>();"],
        "explanation": "Reset pointer safely deletes old resource.", "xp": 15
    },
    {"id": "cpp-13-2-24", "type": "code", "question": "Noexcept with lambda.",
        "correctAnswer": ["[]() noexcept { return 42; }", "auto lambda = []() noexcept { };"],
        "explanation": "noexcept lambda.", "xp": 15
    },
    {"id": "cpp-13-2-25", "type": "code", "question": "Exception-safe initialization.",
        "correctAnswer": ["MyClass obj = construct();", "auto ptr = std::unique_ptr<MyClass>(new MyClass());"],
        "explanation": "Initialize in single statement.", "xp": 15}
]

lesson2 = {
    "id": 69, "title": "Exception Safety Levels", "unitTitle": "13. Exception Handling", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Exception Safety Levels

Understanding exception safety guarantees.

## Safety Guarantees

**No-throw guarantee:** Operation never throws
```cpp
void swap(T& a, T& b) noexcept {
    T temp = std::move(a);
    a = std::move(b);
    b = std::move(temp);
}
```

**Strong guarantee:** All or nothing
```cpp
MyClass& operator=(const MyClass& other) {
    MyClass temp(other);  // May throw
    swap(*this, temp);    // No-throw
    return *this;
}
```

**Basic guarantee:** Object in valid state
```cpp
void push(const T& value) {
    // May throw but leaves container valid
    data.push_back(value);
}
```

## noexcept

```cpp
// Function never throws
void func() noexcept;

// Conditional noexcept
void func() noexcept(noexcept(std::declval<T&>().swap(std::declval<T&>())));
```
""",
    "questions": lesson2_questions
}

# ============================================================================
# LESSON 3: Custom Exceptions
# ============================================================================
lesson3_questions = [
    {
        "id": "cpp-13-3-1", "type": "typing", "question": "What base class for custom exceptions?", "correctAnswer": ["std::exception", "exception"], "explanation": "Derive from std::exception.", "xp": 5
    },
    {
        "id": "cpp-13-3-2", "type": "typing", "question": "What method to override?", "correctAnswer": ["what()", "virtual const char* what() const"], "explanation": "Override what() method.", "xp": 5
    },
    {
        "id": "cpp-13-3-3", "type": "typing", "question": "What should what() return?", "correctAnswer": ["error message", "const char*"], "explanation": "what() returns error message string.", "xp": 5
    },
    {
        "id": "cpp-13-3-4", "type": "multiple", "question": "Can custom exception store data?", "options": ["Yes", "No", "Only strings", "Only integers"], "correctAnswer": [0], "explanation": "Custom exceptions can store any data.", "xp": 5
    },
    {
        "id": "cpp-13-3-5", "type": "multiple", "question": "Should custom exception be noexcept?", "options": ["Yes", "No", "Only what()", "Only constructor"], "correctAnswer": [0], "explanation": "Destructors should be noexcept.", "xp": 5
    },
    {"id": "cpp-13-3-6", "type": "code", "question": "Define custom exception.",
        "correctAnswer": ["class MyException : public std::exception { public: const char* what() const noexcept override { return \"My error\"; } };", "class CustomError : public std::runtime_error { public: CustomError(const std::string& msg) : std::runtime_error(msg) { } };"],
        "explanation": "Derive from std::exception.", "xp": 15
    },
    {"id": "cpp-13-3-7", "type": "code", "question": "Override what() method.",
        "correctAnswer": ["const char* what() const noexcept override { return message.c_str(); }", "virtual const char* what() const noexcept { return error.c_str(); }"],
        "explanation": "Override virtual const char* what() const noexcept", "xp": 15
    },
    {"id": "cpp-13-3-8", "type": "code", "question": "Store message in exception.",
        "correctAnswer": ["class MyException : public std::exception { std::string msg; public: MyException(const std::string& m) : msg(m) { } const char* what() const noexcept override { return msg.c_str(); } };"],
        "explanation": "Store message in std::string.", "xp": 15
    },
    {"id": "cpp-13-3-9", "type": "code", "question": "Inherit from std::runtime_error.",
        "correctAnswer": ["class MyError : public std::runtime_error { public: MyError(const std::string& msg) : std::runtime_error(msg) { } };"],
        "explanation": "std::runtime_error has built-in message.", "xp": 15
    },
    {"id": "cpp-13-3-10", "type": "code", "question": "Custom exception with error code.",
        "correctAnswer": ["class ErrorCodeException : public std::exception { int code; public: ErrorCodeException(int c, const std::string& msg) : code(c), msg(msg) { } const char* what() const noexcept override { return msg.c_str(); } int getCode() const { return code; } private: std::string msg; };"],
        "explanation": "Store error code and message.", "xp": 15
    },
    {"id": "cpp-13-3-11", "type": "code", "question": "Throw custom exception.",
        "correctAnswer": ["throw MyException(\"Custom error\");", "throw CustomError(\"Something failed\");"],
        "explanation": "throw CustomException(args);", "xp": 15
    },
    {"id": "cpp-13-3-12", "type": "code", "question": "Catch custom exception.",
        "correctAnswer": ["catch (const MyException& e) { std::cout << e.what(); }", "catch (const CustomError& e) { handle(e); }"],
        "explanation": "catch (const CustomException& e)", "xp": 15
    },
    {"id": "cpp-13-3-13", "type": "code", "question": "Nested exception hierarchy.",
        "correctAnswer": ["class BaseException : public std::exception { }; class DerivedException : public BaseException { };", "class NetworkError : public std::runtime_error { }; class HttpError : public NetworkError { };"],
        "explanation": "Exception class hierarchy.", "xp": 15
    },
    {"id": "cpp-13-3-14", "type": "code", "question": "Noexcept what() override.",
        "correctAnswer": ["const char* what() const noexcept override { return \"error\"; }"],
        "explanation": "what() should be noexcept.", "xp": 15
    },
    {"id": "cpp-13-3-15", "type": "code", "question": "Custom exception with enum.",
        "correctAnswer": ["enum class ErrorCode { Invalid, NotFound }; class EnumException : public std::exception { ErrorCode code; public: EnumException(ErrorCode c) : code(c) { } const char* what() const noexcept override { return codeToString(code); } };"],
        "explanation": "Exception with enum error code.", "xp": 15
    },
    {"id": "cpp-13-3-16", "type": "code", "question": "Exception with file and line.",
        "correctAnswer": ["class LocationException : public std::exception { std::string msg; std::string file; int line; public: LocationException(const std::string& m, const std::string& f, int l) : msg(m), file(f), line(l) { } };"],
        "explanation": "Store source location in exception.", "xp": 15
    },
    {"id": "cpp-13-3-17", "type": "code", "question": "Derive from logic_error.",
        "correctAnswer": ["class ValidationError : public std::logic_error { public: ValidationError(const std::string& msg) : std::logic_error(msg) { } };"],
        "explanation": "std::logic_error for logic errors.", "xp": 15
    },
    {"id": "cpp-13-3-18", "type": "code", "question": "Exception with timestamp.",
        "correctAnswer": ["class TimestampedException : public std::exception { std::chrono::system_clock::time_point time; public: TimestampedException() : time(std::chrono::system_clock::now()) { } };"],
        "explanation": "Store timestamp in exception.", "xp": 15
    },
    {"id": "cpp-13-3-19", "type": "code", "question": "Catch base exception, handle derived.",
        "correctAnswer": ["catch (const std::exception& e) { if (auto de = dynamic_cast<const DerivedException*>(&e)) { } }", "catch (const BaseException& e) { if (typeid(e) == typeid(DerivedException)) { } }"],
        "explanation": "Use dynamic_cast to check type.", "xp": 15
    },
    {"id": "cpp-13-3-20", "type": "code", "question": "Copy construct custom exception.",
        "correctAnswer": ["MyException(const MyException& other) = default;", "class MyException { public: MyException(const MyException& other) noexcept : msg(other.msg) { } };"],
        "explanation": "Custom exception should be copyable.", "xp": 15
    },
    {"id": "cpp-13-3-21", "type": "code", "question": "Exception with stack trace.",
        "correctAnswer": ["class StackTraceException : public std::exception { std::vector<std::string> stack; public: StackTraceException() { stack = getCurrentStackTrace(); } };"],
        "explanation": "Capture stack trace in exception.", "xp": 15
    },
    {"id": "cpp-13-3-22", "type": "code", "question": "Move construct custom exception.",
        "correctAnswer": ["MyException(MyException&& other) noexcept = default;", "MyException(MyException&& other) noexcept : msg(std::move(other.msg)) { }"],
        "explanation": "Move constructor for efficiency.", "xp": 15
    },
    {"id": "cpp-13-3-23", "type": "code", "question": "Exception with context data.",
        "correctAnswer": ["class ContextException : public std::exception { std::map<std::string, std::string> context; public: void addContext(const std::string& key, const std::string& value) { context[key] = value; } };"],
        "explanation": "Store key-value context in exception.", "xp": 15
    },
    {"id": "cpp-13-3-24", "type": "code", "question": "Re-throw with custom wrapper.",
        "correctAnswer": ["catch (const std::exception& e) { throw WrappedException(std::string(\"Context: \") + e.what()); }", "catch (...) { throw MyException(\"Unknown error in context\"); }"],
        "explanation": "Wrap exception in custom type.", "xp": 15
    },
    {"id": "cpp-13-3-25", "type": "code", "question": "Exception factory function.",
        "correctAnswer": ["MyException createException(const std::string& msg) { return MyException(msg); }", "template<typename T> T createException(const std::string& msg) { return T(msg); }"],
        "explanation": "Factory to create exceptions with context.", "xp": 15}
]

lesson3 = {
    "id": 70, "title": "Custom Exceptions", "unitTitle": "13. Exception Handling", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Custom Exceptions

Creating your own exception types.

## Basic Custom Exception

```cpp
class MyException : public std::exception {
public:
    const char* what() const noexcept override {
        return "My custom error";
    }
};
```

## Exception with Message

```cpp
class CustomError : public std::runtime_error {
public:
    CustomError(const std::string& msg)
        : std::runtime_error(msg) {}
};
```

## Exception with Additional Data

```cpp
class FileError : public std::exception {
    std::string filename;
    int errorCode;
public:
    FileError(const std::string& file, int code)
        : filename(file), errorCode(code) {}

    const char* what() const noexcept override {
        return message.c_str();
    }

    int getCode() const { return errorCode; }
};
```
""",
    "questions": lesson3_questions
}

# ============================================================================
# LESSON 4: Alternatives to Exceptions
# ============================================================================
lesson4_questions = [
    {
        "id": "cpp-13-4-1", "type": "typing", "question": "What is std::optional for?", "correctAnswer": ["optional return value", "may return value or empty"], "explanation": "optional for optional returns.", "xp": 5
    },
    {
        "id": "cpp-13-4-2", "type": "typing", "question": "What is std::expected for?", "correctAnswer": ["success or error result", "expected value or error"], "explanation": "expected for expected/unexpected result.", "xp": 5
    },
    {
        "id": "cpp-13-4-3", "type": "typing", "question": "What is error code pattern?", "correctAnswer": ["return error code", "check return value"], "explanation": "Return error code and handle.", "xp": 5
    },
    {
        "id": "cpp-13-4-4", "type": "multiple", "question": "When use std::optional?", "options": ["Optional value", "Critical errors", "Always", "Never"], "correctAnswer": [0], "explanation": "Use optional for optional values.", "xp": 5
    },
    {
        "id": "cpp-13-4-5", "type": "multiple", "question": "What is benefit of error codes?", "options": ["Explicit handling", "Implicit", "Automatic", "Magic"], "correctAnswer": [0], "explanation": "Error codes require explicit handling.", "xp": 5
    },
    {"id": "cpp-13-4-6", "type": "code", "question": "Return std::optional on failure.",
        "correctAnswer": ["std::optional<int> divide(int a, int b) { if (b == 0) return std::nullopt; return a / b; }", "auto result = func(); if (!result) { }"],
        "explanation": "Return std::nullopt on failure.", "xp": 15
    },
    {"id": "cpp-13-4-7", "type": "code", "question": "Check optional result.",
        "correctAnswer": ["if (result) { }", "if (result.has_value()) { }", "auto value = result.value_or(default);"],
        "explanation": "if (opt) or opt.has_value()", "xp": 15
    },
    {"id": "cpp-13-4-8", "type": "code", "question": "Use value_or with optional.",
        "correctAnswer": ["int value = result.value_or(0);", "auto val = opt.value_or(default_value);"],
        "explanation": "opt.value_or(default)", "xp": 15
    },
    {"id": "cpp-13-4-9", "type": "code", "question": "Expected-like with pair.",
        "correctAnswer": ["std::pair<bool, int> result = {false, 0};", "std::pair<std::string, int> errorOrValue = {\"error\", 0};"],
        "explanation": "Pair for error status and value.", "xp": 15
    },
    {"id": "cpp-13-4-10", "type": "code", "question": "Error code enum.",
        "correctAnswer": ["enum class ErrorCode { OK, Invalid, NotFound }; ErrorCode func();", "enum class Error { None, InvalidArg }; Error process();"],
        "explanation": "Enum for error codes.", "xp": 15
    },
    {"id": "cpp-13-4-11", "type": "code", "question": "Return error code.",
        "correctAnswer": ["ErrorCode process() { if (error) return ErrorCode::Invalid; return ErrorCode::OK; }", "int calculate() { return -1; }"],
        "explanation": "Return error code value.", "xp": 15
    },
    {"id": "cpp-13-4-12", "type": "code", "question": "Output parameter for error.",
        "correctAnswer": ["bool func(Result& out, Error& error) { if (fail) { error = Error::Invalid; return false; } out = value; return true; }", "int try_get(int& output, int& error_code);"],
        "explanation": "Output parameter for error info.", "xp": 15
    },
    {"id": "cpp-13-4-13", "type": "code", "question": "Global error variable.",
        "correctAnswer": ["thread_local Error lastError;", "static std::string error_message;"],
        "explanation": "thread_local for thread-safe error.", "xp": 15
    },
    {"id": "cpp-13-4-14", "type": "code", "question": "Result type with variant.",
        "correctAnswer": ["using Result = std::variant<Value, Error>; Result func();", "std::variant<int, std::string> result = error;", "auto result = std::variant<Value, ErrorCode>{value};"],
        "explanation": "variant for value or error.", "xp": 15
    },
    {"id": "cpp-13-4-15", "type": "code", "question": "Expected-like struct.",
        "correctAnswer": ["template<typename T, typename E> struct Expected { std::variant<T, E> value; bool hasValue() const; T& get(); const E& error() const; };", "struct Result { bool success; std::string error; int value; };"],
        "explanation": "Custom expected type.", "xp": 15
    },
    {"id": "cpp-13-4-16", "type": "code", "question": "Optional with reference.",
        "correctAnswer": ["std::optional<std::reference_wrapper<int>> find(const std::string& key);", "auto opt = std::optional<int&>{};"],
        "explanation": "Use reference_wrapper for optional references.", "xp": 15
    },
    {"id": "cpp-13-4-17", "type": "code", "question": "Error code with string message.",
        "correctAnswer": ["struct Error { int code; std::string message; };", "struct Result { Error error; int value; };"],
        "explanation": "Error struct with code and message.", "xp": 15
    },
    {"id": "cpp-13-4-18", "type": "code", "question": "Monadic optional operations.",
        "correctAnswer": ["auto result = opt.transform([](int x) { return x * 2; });", "auto value = opt.and_then([](int x) { return std::optional<int>{x + 1}; });"],
        "explanation": "transform and and_then on optional.", "xp": 15
    },
    {"id": "cpp-13-4-19", "type": "code", "question": "Check error code.",
        "correctAnswer": ["if (result != ErrorCode::OK) { }", "if (code == ErrorCode::NotFound) { }"],
        "explanation": "Compare error code value.", "xp": 15
    },
    {"id": "cpp-13-4-20", "type": "code", "question": "Optional with lambda.",
        "correctAnswer": ["auto result = opt.and_then([](int x) { return std::optional<int>{x * 2}; });", "opt.transform([](auto&& x) { return f(x); });"],
        "explanation": "Lambda with monadic operations.", "xp": 15
    },
    {"id": "cpp-13-4-21", "type": "code", "question": "Result with bool.",
        "correctAnswer": ["struct Result { bool success; int value; };", "struct Outcome { bool ok; T data; };"],
        "explanation": "Simple bool result type.", "xp": 15
    },
    {"id": "cpp-13-4-22", "type": "code", "question": "Visit variant result.",
        "correctAnswer": ["std::visit([](auto&& arg) { if constexpr (std::is_same_v<decltype(arg), Value>) { } else { } }, result);", "std::visit(overloaded{ [](Value v) { }, [](Error e) { } }, result);"],
        "explanation": "Visit variant to handle value or error.", "xp": 15
    },
    {"id": "cpp-13-4-23", "type": "code", "question": "Assert for invariants.",
        "correctAnswer": ["assert(condition && \"message\");", "assert(ptr != nullptr && \"Pointer is null\");"],
        "explanation": "assert for debugging invariants.", "xp": 15
    },
    {"id": "cpp-13-4-24", "type": "code", "question": "Optional emplace.",
        "correctAnswer": ["opt.emplace(value);", "result.emplace(args...);"],
        "explanation": "emplace sets optional value.", "xp": 15
    },
    {"id": "cpp-13-4-25", "type": "code", "question": "Error code in output parameter.",
        "correctAnswer": ["int func(int& errorCode) { errorCode = -1; return value; }", "Result compute(Error& err);"],
        "explanation": "Output parameter for error code.", "xp": 15}
]

lesson4 = {
    "id": 71, "title": "Alternatives to Exceptions", "unitTitle": "13. Exception Handling", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Alternatives to Exceptions

Error handling without exceptions.

## std::optional

```cpp
std::optional<int> divide(int a, int b) {
    if (b == 0) return std::nullopt;
    return a / b;
}

auto result = divide(10, 2);
if (result) {
    std::cout << *result;
} else {
    std::cout << "Division by zero";
}
```

## Error Codes

```cpp
enum class ErrorCode {
    OK,
    Invalid,
    NotFound
};

ErrorCode process(int& result) {
    if (invalid) return ErrorCode::Invalid;
    result = value;
    return ErrorCode::OK;
}
```

## std::variant for Result

```cpp
using Result = std::variant<Value, Error>;

Result func() {
    if (error) return Error("message");
    return Value(42);
}
```
""",
    "questions": lesson4_questions
}

# Add all lessons to data
data['units'][12]['lessons'][0].update(lesson1)
print("✅ Lesson 1: try, catch, throw - 25 questions (20 code)")

data['units'][12]['lessons'][1].update(lesson2)
print("✅ Lesson 2: Exception Safety Levels - 25 questions (20 code)")

data['units'][12]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Custom Exceptions - 25 questions (20 code)")

data['units'][12]['lessons'][3].update(lesson4)
print("✅ Lesson 4: Alternatives to Exceptions - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 13 Complete: All 4 lessons with 25 questions each (100 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~70 (70%)")
print("   - Type-in questions: ~20 (20%)")
print("   - Multiple-choice: ~10 (10%)")