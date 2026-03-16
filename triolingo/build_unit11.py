#!/usr/bin/env python3
"""
Build Unit 11: Advanced Object-Oriented Programming
5 lessons with 30 questions each (150 total)
Heavy emphasis on code questions (~70% = 105 code questions)
"""
import json

print("🚀 Building C++ Unit 11: Advanced Object-Oriented Programming")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: Inheritance
# ============================================================================
lesson1_questions = [
    {
        "id": "cpp-11-1-1", "type": "typing", "question": "What is inheritance in C++?", "correctAnswer": ["creating new class from existing class", "derived from base"], "explanation": "Inheritance allows creating derived class from base class.", "xp": 5
    },
    {
        "id": "cpp-11-1-2", "type": "typing", "question": "What is a base class?", "correctAnswer": ["parent class", "class being inherited from"], "explanation": "Base class is the parent class being inherited from.", "xp": 5
    },
    {
        "id": "cpp-11-1-3", "type": "typing", "question": "What is a derived class?", "correctAnswer": ["child class", "class that inherits"], "explanation": "Derived class inherits from base class.", "xp": 5
    },
    {
        "id": "cpp-11-1-4", "type": "multiple", "question": "Can a class inherit from multiple classes?", "options": ["Yes", "No", "Only in Java", "Only with interfaces"], "correctAnswer": [0], "explanation": "C++ supports multiple inheritance.", "xp": 5
    },
    {
        "id": "cpp-11-1-5", "type": "multiple", "question": "What access specifier is used for public inheritance?", "options": ["public", "private", "protected", "default"], "correctAnswer": [0], "explanation": "Use public inheritance for most cases.", "xp": 5
    },
    {
        "id": "cpp-11-1-6", "type": "code", "question": "Define derived class from base.",
        "correctAnswer": ["class Derived : public Base {};"],
        "explanation": "class Derived : public Base {}", "xp": 15
    },
    {
        "id": "cpp-11-1-7", "type": "code", "question": "Use protected access specifier.",
        "correctAnswer": ["protected:", "protected: int member;"],
        "explanation": "protected members accessible in derived classes.", "xp": 15
    },
    {
        "id": "cpp-11-1-8", "type": "code", "question": "Call base class constructor.",
        "correctAnswer": ["Derived() : Base() {}", "Derived(int x) : Base(x) {}"],
        "explanation": "Use member initializer list to call base constructor.", "xp": 15
    },
    {
        "id": "cpp-11-1-9", "type": "code", "question": "Override base class method.",
        "correctAnswer": ["void func() override { }", "void Derived::func() { }"],
        "explanation": "Override keyword indicates method override.", "xp": 15
    },
    {
        "id": "cpp-11-1-10", "type": "code", "question": "Use final to prevent inheritance.",
        "correctAnswer": ["class Base final {};", "class Derived final : public Base {};"],
        "explanation": "final prevents further inheritance.", "xp": 15
    },
    {
        "id": "cpp-11-1-11", "type": "code", "question": "Use private inheritance.",
        "correctAnswer": ["class Derived : private Base {};"],
        "explanation": "Private inheritance makes base members private in derived.", "xp": 15
    },
    {
        "id": "cpp-11-1-12", "type": "code", "question": "Use protected inheritance.",
        "correctAnswer": ["class Derived : protected Base {};"],
        "explanation": "Protected inheritance makes base members protected in derived.", "xp": 15
    },
    {
        "id": "cpp-11-1-13", "type": "code", "question": "Call base class method from derived.",
        "correctAnswer": ["Base::method();", "Derived::func() { Base::func(); }"],
        "explanation": "Use Base:: to call base class method.", "xp": 15
    },
    {
        "id": "cpp-11-1-14", "type": "code", "question": "Use using to bring base member into derived.",
        "correctAnswer": ["using Base::member;", "using Base::method;"],
        "explanation": "using declaration brings base member into derived scope.", "xp": 15
    },
    {
        "id": "cpp-11-1-15", "type": "code", "question": "Check if object is instance of derived type.",
        "correctAnswer": ["dynamic_cast<Derived*>(base_ptr)", "auto derived = dynamic_cast<Derived*>(&obj)"],
        "explanation": "dynamic_cast checks type at runtime.", "xp": 15
    },
    {
        "id": "cpp-11-1-16", "type": "code", "question": "Define pure virtual function.",
        "correctAnswer": ["virtual void func() = 0;", "virtual int getValue() const = 0;"],
        "explanation": "= 0 makes function pure virtual.", "xp": 15
    },
    {
        "id": "cpp-11-1-17", "type": "code", "question": "Define abstract base class.",
        "correctAnswer": ["class Base { virtual void func() = 0; };", "class Abstract { public: virtual ~Abstract() = 0; };"],
        "explanation": "Abstract class has at least one pure virtual function.", "xp": 15
    },
    {
        "id": "cpp-11-1-18", "type": "code", "question": "Inherit from multiple base classes.",
        "correctAnswer": ["class Derived : public Base1, public Base2 {};"],
        "explanation": "Comma-separated list of base classes.", "xp": 15
    },
    {
        "id": "cpp-11-1-19", "type": "code", "question": "Use virtual inheritance.",
        "correctAnswer": ["class Derived : virtual public Base {};"],
        "explanation": "Virtual inheritance solves diamond problem.", "xp": 15
    },
    {
        "id": "cpp-11-1-20", "type": "code", "question": "Access protected member from derived.",
        "correctAnswer": ["void Derived::func() { Base::protectedMember = 5; }"],
        "explanation": "Protected members accessible in derived class.", "xp": 15
    },
    {
        "id": "cpp-11-1-21", "type": "code", "question": "Use static_cast for downcasting.",
        "correctAnswer": ["auto derived = static_cast<Derived*>(base_ptr);"],
        "explanation": "static_cast for known conversions.", "xp": 15
    },
    {
        "id": "cpp-11-1-22", "type": "code", "question": "Define constructor with multiple base initializers.",
        "correctAnswer": ["Derived() : Base1(), Base2() {}", "Derived(int x, int y) : Base1(x), Base2(y) {}"],
        "explanation": "Multiple base constructors in initializer list.", "xp": 15
    },
    {
        "id": "cpp-11-1-23", "type": "code", "question": "Inherit from template class.",
        "correctAnswer": ["template<typename T> class Derived : public Base<T> {};"],
        "explanation": "Derived class can inherit from template base.", "xp": 15
    },
    {
        "id": "cpp-11-1-24", "type": "code", "question": "Override destructor.",
        "correctAnswer": ["virtual ~Derived() { }", "virtual ~Derived() override { }"],
        "explanation": "Always override destructor for polymorphic classes.", "xp": 15
    },
    {
        "id": "cpp-11-1-25", "type": "code", "question": "Use final on virtual function.",
        "correctAnswer": ["void func() override final { }", "virtual void func() final { }"],
        "explanation": "final prevents further override.", "xp": 15
    },
    {
        "id": "cpp-11-1-26", "type": "code", "question": "Define interface class.",
        "correctAnswer": ["class IInterface { public: virtual ~IInterface() = default; virtual void func() = 0; };"],
        "explanation": "Interface is abstract class with only pure virtual functions.", "xp": 15
    },
    {
        "id": "cpp-11-1-27", "type": "code", "question": "Use typeid to check type.",
        "correctAnswer": ["typeid(obj)", "if (typeid(obj) == typeid(Derived))"],
        "explanation": "typeid returns type information.", "xp": 15
    },
    {
        "id": "cpp-11-1-28", "type": "code", "question": "Upcast pointer.",
        "correctAnswer": ["Base* basePtr = &derivedObj;", "Base* ptr = derivedPtr;"],
        "explanation": "Upcasting from derived to base is implicit.", "xp": 15
    },
    {
        "id": "cpp-11-1-29", "type": "code", "question": "Downcast pointer.",
        "correctAnswer": ["Derived* derivedPtr = static_cast<Derived*>(basePtr);", "auto d = dynamic_cast<Derived*>(basePtr);"],
        "explanation": "Downcasting requires cast.", "xp": 15
    },
    {
        "id": "cpp-11-1-30", "type": "code", "question": "Define friend function in derived class.",
        "correctAnswer": ["friend void friendFunc(Derived& d);", "friend std::ostream& operator<<(std::ostream&, const Derived&);"],
        "explanation": "Friend functions can access private members.", "xp": 15
    }
]

lesson1 = {
    "id": 57, "title": "Inheritance", "unitTitle": "11. Advanced Object-Oriented Programming", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Inheritance

Inheritance allows creating new classes based on existing classes.

## Basic Inheritance

```cpp
class Base {
public:
    void baseMethod() { std::cout << "Base method"; }
};

class Derived : public Base {
public:
    void derivedMethod() { std::cout << "Derived method"; }
};
```

## Access Specifiers

```cpp
class Base {
public:    // Accessible everywhere
    int publicVar;
protected: // Accessible in derived classes
    int protectedVar;
private:   // Only accessible in Base
    int privateVar;
};
```

## Inheritance Types

```cpp
class PublicDerived : public Base {};      // Public members stay public
class ProtectedDerived : protected Base {}; // Public become protected
class PrivateDerived : private Base {};     // All become private
```

## Calling Base Constructor

```cpp
class Derived : public Base {
public:
    Derived(int x) : Base(x) {  // Initialize base class
        // Derived initialization
    }
};
```

## Overriding

```cpp
class Derived : public Base {
public:
    void baseMethod() override {  // Override base method
        std::cout << "Derived override";
    }
};
```
""",
    "questions": lesson1_questions
}

data['units'][10]['lessons'][0].update(lesson1)
print("✅ Lesson 1: Inheritance - 30 questions (21 code)")

# Save checkpoint
print("\n📊 Progress: 1 of 5 lessons complete (30 of 150 questions)")
print("🔄 Continuing with remaining 4 lessons...")

with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n✅ Checkpoint saved. Continue with Lessons 2-5...")