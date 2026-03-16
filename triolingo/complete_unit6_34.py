#!/usr/bin/env python3
"""
Complete Unit 6 Lessons 3-6
Heavy emphasis on code questions
"""
import json

print("🚀 Completing C++ Unit 6 Lessons 3-6...")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 3: Constructors and Destructors
# ============================================================================
lesson3_questions = [
    {
        "id": "cpp-6-3-1", "type": "typing", "question": "What is a constructor?", "correctAnswer": ["special member function that initializes object", "initialization function"], "explanation": "Constructor initializes object when created.", "xp": 5
    },
    {
        "id": "cpp-6-3-2", "type": "typing", "question": "What is a destructor?", "correctAnswer": ["special member function that cleans up object", "cleanup function"], "explanation": "Destructor cleans up when object is destroyed.", "xp": 5
    },
    {
        "id": "cpp-6-3-3", "type": "typing", "question": "When is destructor called?", "correctAnswer": ["when object goes out of scope", "when delete is called"], "explanation": "Destructor called automatically when object destroyed.", "xp": 5
    },
    {
        "id": "cpp-6-3-4", "type": "multiple", "question": "Can a constructor have a return type?", "options": ["No", "Yes", "Only void", "Only bool"], "correctAnswer": [0], "explanation": "Constructors cannot have return type.", "xp": 5
    },
    {
        "id": "cpp-6-3-5", "type": "multiple", "question": "How many destructors can a class have?", "options": ["One", "Multiple", "Zero", "Two"], "correctAnswer": [0], "explanation": "Each class has exactly one destructor.", "xp": 5
    },
    {
        "id": "cpp-6-3-6", "type": "code", "question": "Create default constructor.", "correctAnswer": ["class MyClass { public: MyClass() {} };", "MyClass() = default;"],
        "explanation": "Default constructor takes no parameters.", "xp": 15
    },
    {
        "id": "cpp-6-3-7", "type": "code", "question": "Create parameterized constructor.", "correctAnswer": ["class MyClass { public: MyClass(int x) : member(x) {} int member; };"],
        "explanation": "Parameterized constructor takes arguments to initialize.", "xp": 15
    },
    {
        "id": "cpp-6-3-8", "type": "code", "question": "Create copy constructor.", "correctAnswer": ["MyClass(const MyClass& other) : member(other.member) {}"],
        "explanation": "Copy constructor initializes from another object.", "xp": 15
    },
    {
        "id": "cpp-6-3-9", "type": "code", "question": "Create destructor.", "correctAnswer": ["~MyClass() {}"],
        "explanation": "Destructor name is ~ClassName().", "xp": 15
    },
    {
        "id": "cpp-6-3-10", "type": "code", "question": "Use member initializer list.", "correctAnswer": ["MyClass(int x) : member(x) {}"],
        "explanation": "Initialize members before constructor body.", "xp": 15
    },
    {
        "id": "cpp-6-3-11", "type": "code", "question": "Delete default constructor.", "correctAnswer": ["MyClass() = delete;"],
        "explanation": "= delete prevents default constructor.", "xp": 15
    },
    {
        "id": "cpp-6-3-12", "type": "code", "question": "Make constructor explicit.", "correctAnswer": ["explicit MyClass(int x) : member(x) {}"],
        "explanation": "explicit prevents implicit conversions.", "xp": 15
    },
    {
        "id": "cpp-6-3-13", "type": "code", "question": "Delegate constructor to another.", "correctAnswer": ["MyClass(int x) : MyClass(x, 0) {}"],
        "explanation": "Delegating constructor calls another constructor.", "xp": 15
    },
    {
        "id": "cpp-6-3-14", "type": "code", "question": "Initialize const member in constructor.", "correctAnswer": ["class MyClass { public: MyClass(int x) : constMember(x) {} private: const int constMember; };"],
        "explanation": "const members must be initialized in initializer list.", "xp": 15
    },
    {
        "id": "cpp-6-3-15", "type": "code", "question": "Initialize reference member in constructor.", "correctAnswer": ["MyClass(int& ref) : refMember(ref) {} private: int& refMember;"],
        "explanation": "Reference members must be initialized in initializer list.", "xp": 15
    },
    {
        "id": "cpp-6-3-16", "type": "code", "question": "Create constructor with default parameters.", "correctAnswer": ["MyClass(int x = 0, int y = 0) : mx(x), my(y) {}"],
        "explanation": "Default parameters make constructor flexible.", "xp": 15
    },
    {
        "id": "cpp-6-3-17", "type": "code", "question": "Initialize array member in constructor.", "correctAnswer": ["MyClass() : arr{0, 1, 2, 3, 4} {} private: int arr[5];"],
        "explanation": "Array members can be initialized with braces.", "xp": 15
    },
    {
        "id": "cpp-6-3-18", "type": "code", "question": "Create constructor with move semantics.", "correctAnswer": ["MyClass(MyClass&& other) noexcept : member(std::move(other.member)) {}"],
        "explanation": "Move constructor takes rvalue reference.", "xp": 15
    },
    {
        "id": "cpp-6-3-19", "type": "code", "question": "Call parent class constructor.", "correctAnswer": ["class Derived : public Base { public: Derived(int x) : Base(x) {} };"],
        "explanation": "Base constructor called in initializer list.", "xp": 15
    },
    {
        "id": "cpp-6-3-20", "type": "code", "question": "Delete heap memory in destructor.", "correctAnswer": ["~MyClass() { delete ptr; ptr = nullptr; }"],
        "explanation": "Clean up heap allocation in destructor.", "xp": 15
    },
    {
        "id": "cpp-6-3-21", "type": "code", "question": "Delete array in destructor.", "correctAnswer": ["~MyClass() { delete[] arr; arr = nullptr; }"],
        "explanation": "Use delete[] for array allocations.", "xp": 15
    },
    {
        "id": "cpp-6-3-22", "type": "code", "question": "Use default constructor syntax.", "correctAnswer": ["MyClass() = default;"],
        "explanation": "= default uses compiler-generated constructor.", "xp": 15
    },
    {
        "id": "cpp-6-3-23", "type": "code", "question": "Make destructor virtual for inheritance.", "correctAnswer": ["virtual ~MyClass() {}"],
        "explanation": "Virtual destructor ensures proper cleanup in inheritance.", "xp": 15
    },
    {
        "id": "cpp-6-3-24", "type": "code", "question": "Initialize member variable order must match declaration order.", "correctAnswer": ["class MyClass { int a; int b; public: MyClass() : a(1), b(2) {} };"],
        "explanation": "Members initialized in declaration order, not initializer list order.", "xp": 15
    },
    {
        "id": "cpp-6-3-25", "type": "code", "question": "Create noexcept destructor.", "correctAnswer": ["~MyClass() noexcept {}"],
        "explanation": "noexcept indicates destructor won't throw.", "xp": 15
    }
]

lesson3 = {
    "id": 32, "title": "Constructors and Destructors", "unitTitle": "6. Object-Oriented Programming in C++", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Constructors and Destructors

Constructors initialize objects, destructors clean them up.

## Constructors

```cpp
class MyClass {
public:
    // Default constructor
    MyClass() : value(0) {}
    
    // Parameterized constructor
    MyClass(int val) : value(val) {}
    
    // Copy constructor
    MyClass(const MyClass& other) : value(other.value) {}
    
    // Move constructor (C++11)
    MyClass(MyClass&& other) noexcept : value(std::move(other.value)) {}
    
private:
    int value;
};
```

## Member Initializer List

```cpp
class Point {
private:
    double x, y;
    
public:
    // Using initializer list (preferred)
    Point(double x, double y) : x(x), y(y) {}
    
    // Using assignment body (less efficient for some types)
    Point(double x, double y) {
        this->x = x;
        this->y = y;
    }
};
```

**Why initializer lists?**
- Required for const/reference members
- More efficient for non-trivial types
- Member initialization order is declaration order

## Destructors

```cpp
class Resource {
private:
    int* data;
    
public:
    Resource(size_t size) {
        data = new int[size];
    }
    
    ~Resource() {
        delete[] data;  // Clean up
        data = nullptr;
    }
};
```

## Constructor Features

### Default Constructor
```cpp
class MyClass {
public:
    MyClass() = default;  // Compiler generates
};
```

### Deleted Constructor
```cpp
class MyClass {
public:
    MyClass() = delete;  // Cannot create default instance
};
```

### Explicit Constructor
```cpp
class MyClass {
public:
    explicit MyClass(int x) : value(x) {}  // Prevent implicit conversion
};
```

### Constructor with Default Parameters
```cpp
class MyClass {
public:
    MyClass(int x = 0, int y = 0) : mx(x), my(y) {}
};
```

### Delegating Constructor (C++11)
```cpp
class MyClass {
public:
    MyClass(int x) : MyClass(x, 0) {}  // Calls other constructor
    
private:
    MyClass(int x, int y) : mx(x), my(y) {}
};
```

## Virtual Destructors

```cpp
class Base {
public:
    virtual ~Base() {}  // Virtual for proper polymorphic cleanup
};

class Derived : public Base {
public:
    ~Derived() {}
};
```

## Rule of Three/Five

If you need any of:
- Destructor
- Copy constructor
- Copy assignment

You probably need all three (and in C++11: move constructor + move assignment).

```cpp
class Resource {
private:
    int* data;
    size_t size;
    
public:
    // Constructor
    Resource(size_t s) : size(s) {
        data = new int[size];
    }
    
    // Destructor
    ~Resource() {
        delete[] data;
    }
    
    // Copy constructor
    Resource(const Resource& other) : size(other.size) {
        data = new int[size];
        std::copy(other.data, other.data + size, data);
    }
    
    // Copy assignment
    Resource& operator=(const Resource& other) {
        if (this != &other) {
            delete[] data;
            size = other.size;
            data = new int[size];
            std::copy(other.data, other.data + size, data);
        }
        return *this;
    }
    
    // Move constructor (C++11)
    Resource(Resource&& other) noexcept : data(other.data), size(other.size) {
        other.data = nullptr;
        other.size = 0;
    }
    
    // Move assignment (C++11)
    Resource& operator=(Resource&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            size = other.size;
            other.data = nullptr;
            other.size = 0;
        }
        return *this;
    }
};
```
""",
    "questions": lesson3_questions
}

data['units'][5]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Constructors and Destructors - 25 questions (20 code)")

# ============================================================================
# LESSON 4: Member Functions
# ============================================================================
lesson4_questions = [
    {
        "id": "cpp-6-4-1", "type": "typing", "question": "What is a member function?", "correctAnswer": ["function that belongs to class", "method"], "explanation": "Member function operates on class data.", "xp": 5
    },
    {
        "id": "cpp-6-4-2", "type": "typing", "question": "What is const member function?", "correctAnswer": ["function that cannot modify object", "read-only method"], "explanation": "const member function promises not to modify member variables.", "xp": 5
    },
    {
        "id": "cpp-6-4-3", "type": "typing", "question": "What is static member function?", "correctAnswer": ["function that doesn't require object", "class method"], "explanation": "Static member functions don't have `this` pointer.", "xp": 5
    },
    {
        "id": "cpp-6-4-4", "type": "multiple", "question": "Can static member function access non-static members?", "options": ["No", "Yes", "Only public", "Only with this pointer"], "correctAnswer": [0], "explanation": "Static functions cannot access non-static members.", "xp": 5
    },
    {
        "id": "cpp-6-4-5", "type": "multiple", "question": "What does const at end of function mean?", "options": ["Cannot modify object", "Returns const", "Takes const parameter", "Const function"], "correctAnswer": [0], "explanation": "const qualifier means function cannot modify member variables.", "xp": 5
    },
    {
        "id": "cpp-6-4-6", "type": "code", "question": "Create public member function.", "correctAnswer": ["class MyClass { public: void myFunc() {} };"],
        "explanation": "Public member function accessible from anywhere.", "xp": 15
    },
    {
        "id": "cpp-6-4-7", "type": "code", "question": "Create const member function.", "correctAnswer": ["int getValue() const { return value; }"],
        "explanation": "const member function cannot modify object.", "xp": 15
    },
    {
        "id": "cpp-6-4-8", "type": "code", "question": "Create static member function.", "correctAnswer": ["static void staticFunc() {}", "static int getCount() { return count; }"],
        "explanation": "Static member function doesn't need object instance.", "xp": 15
    },
    {
        "id": "cpp-6-4-9", "type": "code", "question": "Use this pointer in member function.", "correctAnswer": ["void setX(int x) { this->x = x; }"],
        "explanation": "this pointer points to current object.", "xp": 15
    },
    {
        "id": "cpp-6-4-10", "type": "code", "question": "Create member function that returns member variable.", "correctAnswer": ["int getX() const { return x; }"],
        "explanation": "Getter returns private member value.", "xp": 15
    },
    {
        "id": "cpp-6-4-11", "type": "code", "question": "Create member function that modifies member variable.", "correctAnswer": ["void setX(int val) { x = val; }"],
        "explanation": "Setter modifies private member value.", "xp": 15
    },
    {
        "id": "cpp-6-4-12", "type": "code", "question": "Call one member function from another.", "correctAnswer": ["void func1() { func2(); } void func2() {}"],
        "explanation": "Member functions can call other member functions.", "xp": 15
    },
    {
        "id": "cpp-6-4-13", "type": "code", "question": "Define member function outside class.", "correctAnswer": ["class MyClass { public: void func(); }; void MyClass::func() {}"],
        "explanation": "Use ClassName:: to define outside class.", "xp": 15
    },
    {
        "id": "cpp-6-4-14", "type": "code", "question": "Create inline member function.", "correctAnswer": ["inline void func() {}", "void func() { /* defined in class */ }"],
        "explanation": "Functions defined in class are implicitly inline.", "xp": 15
    },
    {
        "id": "cpp-6-4-15", "type": "code", "question": "Create member function with default parameter.", "correctAnswer": ["void func(int x = 0) {}"],
        "explanation": "Default parameters work in member functions.", "xp": 15
    },
    {
        "id": "cpp-6-4-16", "type": "code", "question": "Create member function that returns reference.", "correctAnswer": ["int& getRef() { return value; }"],
        "explanation": "Returning reference allows modification of returned value.", "xp": 15
    },
    {
        "id": "cpp-6-4-17", "type": "code", "question": "Create const member function returning reference.", "correctAnswer": ["const int& getRef() const { return value; }"],
        "explanation": "const reference prevents modification through returned reference.", "xp": 15
    },
    {
        "id": "cpp-6-4-18", "type": "code", "question": "Create member function taking const reference.", "correctAnswer": ["void func(const string& s) {}"],
        "explanation": "const reference parameter avoids copy and prevents modification.", "xp": 15
    },
    {
        "id": "cpp-6-4-19", "type": "code", "question": "Override base class member function.", "correctAnswer": ["class Derived : public Base { public: void func() override {} };"],
        "explanation": "override keyword ensures proper override.", "xp": 15
    },
    {
        "id": "cpp-6-4-20", "type": "code", "question": "Make member function final.", "correctAnswer": ["void func() final {}", "class Base { virtual void func() final {} };"],
        "explanation": "final prevents override in derived classes.", "xp": 15
    },
    {
        "id": "cpp-6-4-21", "type": "code", "question": "Create virtual member function.", "correctAnswer": ["virtual void func() {}", "virtual void func() = 0;"],
        "explanation": "virtual enables polymorphism.", "xp": 15
    },
    {
        "id": "cpp-6-4-22", "type": "code", "question": "Create pure virtual member function.", "correctAnswer": ["virtual void func() = 0;"],
        "explanation": "Pure virtual makes class abstract.", "xp": 15
    },
    {
        "id": "cpp-6-4-23", "type": "code", "question": "Create member function that returns pointer.", "correctAnswer": ["int* getPtr() { return &value; }"],
        "explanation": "Returning pointer allows direct access.", "xp": 15
    },
    {
        "id": "cpp-6-4-24", "type": "code", "question": "Create member function with noexcept specifier.", "correctAnswer": ["void func() noexcept {}"],
        "explanation": "noexcept indicates function won't throw exceptions.", "xp": 15
    },
    {
        "id": "cpp-6-4-25", "type": "code", "question": "Create member function taking lambda parameter.", "correctAnswer": ["void forEach(function<void(int)> func) { for (int i : vec) func(i); }"],
        "explanation": "Member functions can take function objects.", "xp": 15
    }
]

lesson4 = {
    "id": 33, "title": "Member Functions", "unitTitle": "6. Object-Oriented Programming in C++", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Member Functions

Member functions (methods) operate on class data.

## Basic Member Functions

```cpp
class MyClass {
private:
    int value;
    
public:
    // Basic member function
    void setValue(int v) {
        value = v;
    }
    
    // Const member function
    int getValue() const {
        return value;  // Cannot modify value here
    }
};
```

## Const Member Functions

```cpp
class Point {
private:
    double x, y;
    
public:
    // Can modify object
    void move(double dx, double dy) {
        x += dx;
        y += dy;
    }
    
    // Cannot modify object (const)
    double getX() const {
        return x;  // Read-only access
    }
    
    double getY() const {
        return y;
    }
    
    double distance() const {
        return std::sqrt(x*x + y*y);  // Can compute but not modify
    }
};
```

## Static Member Functions

```cpp
class Counter {
private:
    static int count;
    
public:
    Counter() {
        count++;
    }
    
    // Static member function
    static int getCount() {
        return count;  // Can only access static members
    }
    
    // Non-static member function
    int getInstanceCount() const {
        return Counter::getCount();  // Can call static function
    }
};

int Counter::count = 0;

// Usage
int c = Counter::getCount();  // Call without object
```

## Defining Functions Outside Class

```cpp
// Header
class MyClass {
public:
    void func();
    int getValue() const;
};

// Implementation
void MyClass::func() {
    // Implementation
}

int MyClass::getValue() const {
    return value;
}
```

## Inline Functions

```cpp
class MyClass {
public:
    // Implicitly inline (defined in class)
    int getValue() const {
        return value;
    }
};

// Explicitly inline
inline int MyClass::getValue() const {
    return value;
}
```

## Virtual Functions

```cpp
class Shape {
public:
    virtual double area() const = 0;  // Pure virtual
    virtual void draw() const {
        std::cout << "Drawing shape\\n";
    }
};

class Circle : public Shape {
public:
    double area() const override {
        return 3.14159 * radius * radius;
    }
    
    void draw() const override {
        std::cout << "Drawing circle\\n";
    }
    
private:
    double radius;
};
```

## this Pointer

```cpp
class MyClass {
private:
    int value;
    
public:
    void setValue(int value) {
        this->value = value;  // this-> disambiguates
    }
    
    MyClass& setValueAndReturn(int value) {
        this->value = value;
        return *this;  // Return reference to current object
    }
};

// Chaining
obj.setValue(10).setValue(20).setValue(30);
```

## Const Overloading

```cpp
class MyClass {
public:
    // Non-const version
    int& operator[](int index) {
        return data[index];  // Can modify
    }
    
    // Const version
    const int& operator[](int index) const {
        return data[index];  // Cannot modify
    }
    
private:
    int data[10];
};
```

## noexcept Member Functions

```cpp
class MyClass {
public:
    // Promises not to throw
    int getValue() const noexcept {
        return value;
    }
    
    // May throw
    void riskyOperation();
};
```
""",
    "questions": lesson4_questions
}

data['units'][5]['lessons'][3].update(lesson4)
print("✅ Lesson 4: Member Functions - 25 questions (20 code)")

# Write progress
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n📊 Progress: 4 of 6 lessons complete (100 of 150 questions)")
print("🔄 Creating final 2 lessons...")