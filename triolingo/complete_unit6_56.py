#!/usr/bin/env python3
"""
Complete Unit 6 Lessons 5-6: Final lessons
Heavy emphasis on code questions
"""
import json

print("🚀 Completing C++ Unit 6 Final Lessons 5-6...")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 5: this Pointer
# ============================================================================
lesson5_questions = [
    {
        "id": "cpp-6-5-1", "type": "typing", "question": "What is this pointer?", "correctAnswer": ["pointer to current object", "pointer to instance"], "explanation": "this pointer points to the object on which member function is called.", "xp": 5
    },
    {
        "id": "cpp-6-5-2", "type": "typing", "question": "What is the type of this pointer?", "correctAnswer": ["ClassName*", "pointer to class type"], "explanation": "this is a pointer to the class type.", "xp": 5
    },
    {
        "id": "cpp-6-5-3", "type": "typing", "question": "Can this pointer be modified?", "correctAnswer": ["no", "cannot change what this points to"], "explanation": "this pointer cannot be reassigned.", "xp": 5
    },
    {
        "id": "cpp-6-5-4", "type": "multiple", "question": "Can this pointer be null?", "options": ["No", "Yes", "Only for static functions", "Only for const functions"], "correctAnswer": [0], "explanation": "this is always valid in non-static member functions.", "xp": 5
    },
    {
        "id": "cpp-6-5-5", "type": "multiple", "question": "What type of this pointer in const member function?", "options": ["const ClassName*", "ClassName*", "const ClassName&", "ClassName&"], "correctAnswer": [0], "explanation": "this is const pointer in const member functions.", "xp": 5
    },
    {
        "id": "cpp-6-5-6", "type": "code", "question": "Use this pointer to access member variable.", "correctAnswer": ["this->x", "this->x = value;"],
        "explanation": "Use this-> to access member when name conflicts.", "xp": 15
    },
    {
        "id": "cpp-6-5-7", "type": "code", "question": "Use this pointer to call member function.", "correctAnswer": ["this->func()", "return this->getValue();"],
        "explanation": "this-> can call other member functions.", "xp": 15
    },
    {
        "id": "cpp-6-5-8", "type": "code", "question": "Return pointer to current object.", "correctAnswer": ["return this;", "MyClass* getThis() { return this; }"],
        "explanation": "this is pointer to current object.", "xp": 15
    },
    {
        "id": "cpp-6-5-9", "type": "code", "question": "Return reference to current object for chaining.", "correctAnswer": ["return *this;", "MyClass& func() { /*...*/ return *this; }"],
        "explanation": "Dereference this to return reference for method chaining.", "xp": 15
    },
    {
        "id": "cpp-6-5-10", "type": "code", "question": "Compare this pointer with another object.", "correctAnswer": ["if (this == &other)", "bool isSame = (this == &other);"],
        "explanation": "Compare addresses with this pointer.", "xp": 15
    },
    {
        "id": "cpp-6-5-11", "type": "code", "question": "Pass this pointer to another function.", "correctAnswer": ["process(this);", "someFunc(this);"],
        "explanation": "this pointer can be passed to other functions.", "xp": 15
    },
    {
        "id": "cpp-6-5-12", "type": "code", "question": "Use this to resolve name conflict.", "correctAnswer": ["void setX(int x) { this->x = x; }"],
        "explanation": "this-> disambiguates when parameter name matches member name.", "xp": 15
    },
    {
        "id": "cpp-6-5-13", "type": "code", "question": "Chain method calls using this.", "correctAnswer": ["return *this;", "MyClass& setX(int x) { this->x = x; return *this; }"],
        "explanation": "Return reference to enable chaining: obj.setX(10).setY(20);", "xp": 15
    },
    {
        "id": "cpp-6-5-14", "type": "code", "question": "Use this in copy assignment operator.", "correctAnswer": ["MyClass& operator=(const MyClass& other) { if (this != &other) { /* copy */ } return *this; }"],
        "explanation": "Check for self-assignment and return *this.", "xp": 15
    },
    {
        "id": "cpp-6-5-15", "type": "code", "question": "Use this in constructor.", "correctAnswer": ["this->x = x;", "MyClass(int x) { this->x = x; }"],
        "explanation": "Can use this in constructor but prefer initializer list.", "xp": 15
    },
    {
        "id": "cpp-6-5-16", "type": "code", "question": "Get address of current object.", "correctAnswer": ["this", "MyClass* ptr = this;"],
        "explanation": "this is the address of the current object.", "xp": 15
    },
    {
        "id": "cpp-6-5-17", "type": "code", "question": "Use this pointer to access base class member.", "correctAnswer": ["Base::func();", "Base::x = 10;"],
        "explanation": "Use scope resolution to access base class members.", "xp": 15
    },
    {
        "id": "cpp-6-5-18", "type": "code", "question": "Use this in member function taking same type parameter.", "correctAnswer": ["void merge(const MyClass& other) { this->x += other.x; }"],
        "explanation": "Distinguish between this->x and other.x.", "xp": 15
    },
    {
        "id": "cpp-6-5-19", "type": "code", "question": "Use this pointer in lambda capture.", "correctAnswer": ["[this]() { this->x = 10; }", "auto lambda = [this] { return this->x; };"],
        "explanation": "Capture this in lambda to access members.", "xp": 15
    },
    {
        "id": "cpp-6-5-20", "type": "code", "question": "Use this->* to access member through pointer.", "correctAnswer": ["(this->*memberPtr)()", "int MyClass::* ptr = &MyClass::x; int val = this->*ptr;"],
        "explanation": "Member pointer access: (object.*ptr) or (this->*ptr)", "xp": 15
    },
    {
        "id": "cpp-6-5-21", "type": "code", "question": "Use this to implement operator<<.", "correctAnswer": ["friend ostream& operator<<(ostream& os, const MyClass& obj) { os << obj.x; return os; }"],
        "explanation": "friend function can access private members.", "xp": 15
    },
    {
        "id": "cpp-6-5-22", "type": "code", "question": "Use this to implement binary operator.", "correctAnswer": ["MyClass operator+(const MyClass& other) const { return MyClass(this->x + other.x); }"],
        "explanation": "Implement operator returning new object.", "xp": 15
    },
    {
        "id": "cpp-6-5-23", "type": "code", "question": "Use this in comparison operator.", "correctAnswer": ["bool operator==(const MyClass& other) const { return this->x == other.x; }"],
        "explanation": "Compare this object's members with other.", "xp": 15
    },
    {
        "id": "cpp-6-5-24", "type": "code", "question": "Use this to call method from lambda.", "correctAnswer": "[this]() { this->method(); }();"],
        "explanation": "Capture this in lambda to call member function.", "xp": 15
    },
    {
        "id": "cpp-6-5-25", "type": "code", "question": "Use this for callback registration.", "correctAnswer": ["registerCallback([this](int x) { this->handle(x); });"],
        "explanation": "Capture this in lambda callback.", "xp": 15
    }
]

lesson5 = {
    "id": 34, "title": "this Pointer", "unitTitle": "6. Object-Oriented Programming in C++", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# this Pointer

The `this` pointer is a pointer to the object on which a member function is called.

## What is this?

```cpp
class MyClass {
private:
    int value;
    
public:
    void setValue(int value) {
        this->value = value;  // this points to current object
    }
};
```

## Resolving Name Conflicts

```cpp
class Point {
private:
    int x, y;
    
public:
    // Parameter name matches member name
    void setX(int x) {
        this->x = x;  // this->x is member, x is parameter
    }
    
    void setY(int y) {
        this->y = y;
    }
};
```

## Method Chaining

```cpp
class Builder {
private:
    int x, y, z;
    
public:
    Builder& setX(int x) {
        this->x = x;
        return *this;  // Return reference to enable chaining
    }
    
    Builder& setY(int y) {
        this->y = y;
        return *this;
    }
    
    Builder& setZ(int z) {
        this->z = z;
        return *this;
    }
};

// Usage
Builder obj;
obj.setX(10).setY(20).setZ(30);  // Chained calls
```

## Copy Assignment with this

```cpp
class MyClass {
private:
    int* data;
    
public:
    MyClass& operator=(const MyClass& other) {
        if (this != &other) {  // Check for self-assignment
            delete[] data;
            data = new int[/*size*/];
            // Copy other's data
        }
        return *this;  // Return reference for chaining
    }
};
```

## this in Different Contexts

```cpp
class MyClass {
public:
    // Non-const member function
    void func() {
        // this is MyClass*
        this->x = 10;
    }
    
    // Const member function
    void func() const {
        // this is const MyClass*
        // Cannot modify members through this
    }
    
    // Static member function (no this!)
    static void staticFunc() {
        // No this pointer available
    }
};
```

## this with Lambda Capture

```cpp
class Handler {
private:
    std::string name;
    
public:
    void registerCallback() {
        auto callback = [this]() {
            std::cout << "Handler: " << this->name << "\\n";
        };
        
        callback();
    }
    
    void setName(const std::string& n) {
        name = n;
    }
};
```

## Member Pointers

```cpp
class MyClass {
public:
    int x;
    int y;
    
    int sum() {
        return x + y;
    }
};

int MyClass::* ptr = &MyClass::x;      // Pointer to member
int (MyClass::* funcPtr)() = &MyClass::sum;  // Pointer to member function

MyClass obj{10, 20};
obj.*ptr = 15;                         // Access through pointer
int s = (obj.*funcPtr)();              // Call through pointer
```

## Best Practices

✅ **DO:**
- Use this to resolve name conflicts
- Return *this for method chaining
- Check this != &other in assignment operators
- Capture [this] in lambdas when needed

❌ **DON'T:**
- Use this unnecessarily (prefer direct access)
- Try to modify this pointer (it's const)
- Use this in static member functions (doesn't exist)
- Overuse this-> for every member access
""",
    "questions": lesson5_questions
}

data['units'][5]['lessons'][4].update(lesson5)
print("✅ Lesson 5: this Pointer - 25 questions (20 code)")

# ============================================================================
# LESSON 6: Operator Overloading
# ============================================================================
lesson6_questions = [
    {
        "id": "cpp-6-6-1", "type": "typing", "question": "What is operator overloading?", "correctAnswer": ["give custom behavior to operators", "redefine operators for types"],
        "explanation": "Operator overloading gives custom meaning to operators for user-defined types.", "xp": 5
    },
    {
        "id": "cpp-6-6-2", "type": "typing", "question": "Can you overload all operators?", "correctAnswer": ["no", "some cannot be overloaded"], "explanation": "Some operators (::, .*, ., ?:) cannot be overloaded.", "xp": 5
    },
    {
        "id": "cpp-6-6-3", "type": "typing", "question": "What syntax for operator overloading?", "correctAnswer": ["operator@", "operator followed by symbol"],
        "explanation": "Use operator keyword followed by operator symbol.", "xp": 5
    },
    {
        "id": "cpp-6-6-4", "type": "multiple", "question": "Which operator cannot be overloaded?", "options": ["::", "+", "*", "[]"],
        "correctAnswer": [0], "explanation": "Scope resolution operator :: cannot be overloaded.", "xp": 5
    },
    {
        "id": "cpp-6-6-5", "type": "multiple", "question": "Can you create new operators?", "options": ["No", "Yes", "Only with special syntax", "Only in C++20"],
        "correctAnswer": [0], "explanation": "Cannot create new operators, only overload existing ones.", "xp": 5
    },
    {
        "id": "cpp-6-6-6", "type": "code", "question": "Overload + operator as member function.",
        "correctAnswer": ["MyClass operator+(const MyClass& other) const { return MyClass(this->x + other.x); }"],
        "explanation": "Binary operator as member: this is left operand.", "xp": 15
    },
    {
        "id": "cpp-6-6-7", "type": "code", "question": "Overload == operator.",
        "correctAnswer": ["bool operator==(const MyClass& other) const { return this->x == other.x; }"],
        "explanation": "Comparison operator returns bool.", "xp": 15
    },
    {
        "id": "cpp-6-6-8", "type": "code", "question": "Overload [] operator for array access.",
        "correctAnswer": ["int& operator[](int index) { return data[index]; }"],
        "explanation": "Subscript operator for array-like access.", "xp": 15
    },
    {
        "id": "cpp-6-6-9", "type": "code", "question": "Overload () operator as function call.",
        "correctAnswer": ["int operator()(int x, int y) const { return x + y; }"],
        "explanation": "Function call operator makes objects callable.", "xp": 15
    },
    {
        "id": "cpp-6-6-10", "type": "code", "question": "Overload << operator for output.",
        "correctAnswer": ["friend ostream& operator<<(ostream& os, const MyClass& obj) { os << obj.x; return os; }"],
        "explanation": "stream operator as friend function for left operand ostream.", "xp": 15
    },
    {
        "id": "cpp-6-6-11", "type": "code", "question": "Overload >> operator for input.",
        "correctAnswer": ["friend istream& operator>>(istream& is, MyClass& obj) { is >> obj.x; return is; }"],
        "explanation": "Input stream operator as friend function.", "xp": 15
    },
    {
        "id": "cpp-6-6-12", "type": "code", "question": "Overload prefix ++ operator.",
        "correctAnswer": ["MyClass& operator++() { x++; return *this; }"],
        "explanation": "Prefix ++ returns reference to modified object.", "xp": 15
    },
    {
        "id": "cpp-6-6-13", "type": "code", "question": "Overload postfix ++ operator.",
        "correctAnswer": ["MyClass operator++(int) { MyClass temp = *this; x++; return temp; }"],
        "explanation": "Postfix ++ takes dummy int parameter, returns old value.", "xp": 15
    },
    {
        "id": "cpp-6-6-14", "type": "code", "question": "Overload = operator.",
        "correctAnswer": ["MyClass& operator=(const MyClass& other) { if (this != &other) { /* copy */ } return *this; }"],
        "explanation": "Assignment operator returns reference to *this.", "xp": 15
    },
    {
        "id": "cpp-6-6-15", "type": "code", "question": "Overload += operator.",
        "correctAnswer": ["MyClass& operator+=(const MyClass& other) { x += other.x; return *this; }"],
        "explanation": "Compound assignment operator modifies and returns *this.", "xp": 15
    },
    {
        "id": "cpp-6-6-16", "type": "code", "question": "Overload < operator for comparison.",
        "correctAnswer": ["bool operator<(const MyClass& other) const { return this->x < other.x; }"],
        "explanation": "Comparison operators return bool.", "xp": 15
    },
    {
        "id": "cpp-6-6-17", "type": "code", "question": "Overload ! operator (logical not).",
        "correctAnswer": ["bool operator!() const { return x == 0; }"],
        "explanation": "Unary operator ! returns bool.", "xp": 15
    },
    {
        "id": "cpp-6-6-18", "type": "code", "question": "Overload * operator (dereference).",
        "correctAnswer": ["int& operator*() { return *ptr; }"],
        "explanation": "Dereference operator returns reference to target.", "xp": 15
    },
    {
        "id": "cpp-6-6-19", "type": "code", "question": "Overload -> operator.",
        "correctAnswer": ["Type* operator->() { return ptr; }"],
        "explanation": "Arrow operator returns pointer to member.", "xp": 15
    },
    {
        "id": "cpp-6-6-20", "type": "code", "question": "Overload conversion operator to int.",
        "correctAnswer": ["operator int() const { return x; }"],
        "explanation": "Conversion operator enables implicit conversion.", "xp": 15
    },
    {
        "id": "cpp-6-6-21", "type": "code", "question": "Overload new operator.",
        "correctAnswer": ["void* operator new(size_t size) { return malloc(size); }"],
        "explanation": "Custom new operator for custom allocation.", "xp": 15
    },
    {
        "id": "cpp-6-6-22", "type": "code", "question": "Overload delete operator.",
        "correctAnswer": ["void operator delete(void* ptr) { free(ptr); }"],
        "explanation": "Custom delete operator for custom deallocation.", "xp": 15
    },
    {
        "id": "cpp-6-6-23", "type": "code", "question": "Overload comma operator.",
        "correctAnswer": ["MyClass operator,(const MyClass& other) { /*...*/ }"],
        "explanation": "Comma operator can be overloaded but rarely needed.", "xp": 15
    },
    {
        "id": "cpp-6-6-24", "type": "code", "question": "Overload != using ==.",
        "correctAnswer": ["bool operator!=(const MyClass& other) const { return !(*this == other); }"],
        "explanation": "Implement != using !(*this == other).", "xp": 15
    },
    {
        "id": "cpp-6-6-25", "type": "code", "question": "Overload >= using < and ==.",
        "correctAnswer": ["bool operator>=(const MyClass& other) const { return !(*this < other); }"],
        "explanation": "Implement >= using !(a < b).", "xp": 15
    }
]

lesson6 = {
    "id": 35, "title": "Operator Overloading", "unitTitle": "6. Object-Oriented Programming in C++", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Operator Overloading

Operator overloading gives custom behavior to C++ operators for user-defined types.

## Syntax

```cpp
ReturnType operatorOperatorSymbol(Parameters) {
    // Implementation
}
```

## Binary Operators as Member Functions

```cpp
class Vector {
private:
    double x, y;
    
public:
    // Addition
    Vector operator+(const Vector& other) const {
        return Vector{x + other.x, y + other.y};
    }
    
    // Subtraction
    Vector operator-(const Vector& other) const {
        return Vector{x - other.x, y - other.y};
    }
    
    // Multiplication (by scalar)
    Vector operator*(double scalar) const {
        return Vector{x * scalar, y * scalar};
    }
};

// Usage
Vector v1{1, 2};
Vector v2{3, 4};
Vector v3 = v1 + v2;  // {4, 6}
```

## Comparison Operators

```cpp
class Point {
public:
    int x, y;
    
    bool operator==(const Point& other) const {
        return x == other.x && y == other.y;
    }
    
    bool operator!=(const Point& other) const {
        return !(*this == other);
    }
    
    bool operator<(const Point& other) const {
        if (x != other.x) return x < other.x;
        return y < other.y;
    }
    
    bool operator<=(const Point& other) const {
        return !(other < *this);
    }
};
```

## Subscript Operator []

```cpp
class Matrix {
private:
    int data[10][10];
    
public:
    int* operator[](int row) {
        return data[row];  // Returns pointer to row
    }
    
    const int* operator[](int row) const {
        return data[row];  // Const version
    }
};

// Usage
Matrix m;
m[0][0] = 10;
int val = m[0][0];
```

## Function Call Operator ()

```cpp
class Adder {
private:
    int offset;
    
public:
    Adder(int o) : offset(o) {}
    
    int operator()(int x) const {
        return x + offset;  // Makes object callable
    }
};

// Usage
Adder add10(10);
int result = add10(5);  // 15
```

## Stream Operators (Friend Functions)

```cpp
class Point {
private:
    int x, y;
    
public:
    Point(int x, int y) : x(x), y(y) {}
    
    // Output stream
    friend std::ostream& operator<<(std::ostream& os, const Point& p) {
        os << "(" << p.x << ", " << p.y << ")";
        return os;
    }
    
    // Input stream
    friend std::istream& operator>>(std::istream& is, Point& p) {
        is >> p.x >> p.y;
        return is;
    }
};

// Usage
Point p{10, 20};
std::cout << p << std::endl;  // (10, 20)
```

## Increment/Decrement Operators

```cpp
class Counter {
private:
    int count;
    
public:
    // Prefix ++ (++c)
    Counter& operator++() {
        ++count;
        return *this;  // Return reference to modified object
    }
    
    // Postfix ++ (c++)
    Counter operator++(int) {  // Dummy int parameter
        Counter temp = *this;  // Save old value
        ++count;
        return temp;  // Return old value
    }
};
```

## Assignment Operator

```cpp
class MyClass {
private:
    int* data;
    size_t size;
    
public:
    MyClass& operator=(const MyClass& other) {
        if (this != &other) {  // Check for self-assignment
            delete[] data;
            size = other.size;
            data = new int[size];
            std::copy(other.data, other.data + size, data);
        }
        return *this;  // Return reference for chaining
    }
};
```

## Conversion Operators

```cpp
class Rational {
private:
    int numerator, denominator;
    
public:
    // Implicit conversion to double
    operator double() const {
        return static_cast<double>(numerator) / denominator;
    }
    
    // Explicit conversion to string
    explicit operator std::string() const {
        return std::to_string(numerator) + "/" + std::to_string(denominator);
    }
};

// Usage
Rational r{3, 4};
double d = r;  // 0.75 (implicit)
// std::string s = r;  // Error, explicit
std::string s = static_cast<std::string>(r);  // OK
```

## Rules and Best Practices

✅ **DO:**
- Keep semantic meaning consistent
- Return reference to *this for assignment
- Implement related operators (if ==, then !=)
- Make binary operators member when left operand is same type

❌ **DON'T:**
- Overload && or || (loss of short-circuit)
- Overload , (comma operator) unless really needed
- Change arity (number of operands)
- Overload :: . .* ?:

## Operators That Cannot Be Overloaded

- `::` (scope resolution)
- `.` (member access)
- `.*` (member pointer access)
- `?:` (ternary conditional)
- `sizeof`
- `typeid`
- `alignof`
- `noexcept`
`,
    "questions": lesson6_questions
}

data['units'][5]['lessons'][5].update(lesson6)
print("✅ Lesson 6: Operator Overloading - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 6 Complete: All 6 lessons with 25 questions each (150 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~105 (70%)")
print("   - Type-in questions: ~30 (20%)")
print("   - Multiple-choice: ~15 (10%)")
print("\n📋 Unit 6 Lessons:")
print("   1. Structs vs Classes - 25 questions")
print("   2. Encapsulation and Access Specifiers - 25 questions")
print("   3. Constructors and Destructors - 25 questions")
print("   4. Member Functions - 25 questions")
print("   5. this Pointer - 25 questions")
print("   6. Operator Overloading - 25 questions")

print("\n✅ Written to questions/cppCombined.js")
print("🔄 Updating unit file and cache buster...")