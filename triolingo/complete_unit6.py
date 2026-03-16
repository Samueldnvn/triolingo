#!/usr/bin/env python3
"""
Complete Unit 6 Lessons 2-6
Emphasis on code questions (~70% = 105 code questions total)
"""
import json

print("🚀 Completing C++ Unit 6 Lessons 2-6...")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 2: Encapsulation and Access Specifiers
# ============================================================================
lesson2_questions = [
    {
        "id": "cpp-6-2-1", "type": "typing", "question": "What is encapsulation?", "correctAnswer": ["hiding implementation details", "bundling data and methods"], "explanation": "Encapsulation hides implementation and exposes only necessary interface.", "xp": 5
    },
    {
        "id": "cpp-6-2-2", "type": "typing", "question": "What are the three access specifiers?", "correctAnswer": ["public, private, protected"], "explanation": "Public: accessible everywhere. Private: only class. Protected: class and derived.", "xp": 5
    },
    {
        "id": "cpp-6-2-3", "type": "typing", "question": "What is the default access for class members?", "correctAnswer": ["private"], "explanation": "Class members are private by default.", "xp": 5
    },
    {
        "id": "cpp-6-2-4", "type": "multiple", "question": "What access specifier allows derived classes to access?", "options": ["protected", "private", "public", "internal"], "correctAnswer": [0], "explanation": "Protected allows class and derived class access.", "xp": 5
    },
    {
        "id": "cpp-6-2-5", "type": "multiple", "question": "Can private members be accessed from outside the class?", "options": ["No", "Yes", "Only with friend", "Only if static"], "correctAnswer": [0], "explanation": "Private members are only accessible within the class.", "xp": 5
    },
    {
        "id": "cpp-6-2-6", "type": "code", "question": "Create class with private member variable.", "correctAnswer": ["class MyClass { private: int x; };"], "explanation": "Use private: specifier for private members.", "xp": 15
    },
    {
        "id": "cpp-6-2-7", "type": "code", "question": "Add public getter for private member x.", "correctAnswer": ["class MyClass { private: int x; public: int getX() { return x; } };"], "explanation": "Public getter provides read access to private member.", "xp": 15
    },
    {
        "id": "cpp-6-2-8", "type": "code", "question": "Add public setter for private member x.", "correctAnswer": ["void setX(int val) { x = val; }"], "explanation": "Public setter provides write access to private member.", "xp": 15
    },
    {
        "id": "cpp-6-2-9", "type": "code", "question": "Create class with multiple access specifiers.", "correctAnswer": ["class MyClass { public: int a; private: int b; protected: int c; };"], "explanation": "Access specifiers can be used multiple times.", "xp": 15
    },
    {
        "id": "cpp-6-2-10", "type": "code", "question": "Create friend function to access private members.", "correctAnswer": ["class MyClass { private: int x; friend void friendFunc(MyClass& obj); };", "friend void friendFunc(MyClass& obj) { obj.x = 10; }"], "explanation": "friend function can access private members.", "xp": 15
    },
    {
        "id": "cpp-6-2-11", "type": "code", "question": "Create friend class.", "correctAnswer": ["class MyClass { private: int x; friend class FriendClass; };"], "explanation": "Friend class can access all private members.", "xp": 15
    },
    {
        "id": "cpp-6-2-12", "type": "code", "question": "Make method private.", "correctAnswer": ["class MyClass { private: void helper(); };"], "explanation": "Use private: specifier before method declaration.", "xp": 15
    },
    {
        "id": "cpp-6-2-13", "type": "code", "question": "Make method protected.", "correctAnswer": ["class MyClass { protected: void helper(); };"], "explanation": "Protected methods accessible in derived classes.", "xp": 15
    },
    {
        "id": "cpp-6-2-14", "type": "code", "question": "Create class with const public member.", "correctAnswer": ["class MyClass { public: const int MAX = 100; };"], "explanation": "const public member cannot be modified.", "xp": 15
    },
    {
        "id": "cpp-6-2-15", "type": "code", "question": "Create static private member.", "correctAnswer": ["class MyClass { private: static int count; };"], "explanation": "Static member shared across all instances.", "xp": 15
    },
    {
        "id": "cpp-6-2-16", "type": "code", "question": "Create class with read-only property.", "correctAnswer": ["class MyClass { private: int _x; public: int getX() const { return _x; } };"], "explanation": "const getter provides read-only access.", "xp": 15
    },
    {
        "id": "cpp-6-2-17", "type": "code", "question": "Create class with validation in setter.", "correctAnswer": ["void setX(int val) { if (val >= 0) x = val; }"], "explanation": "Setters can validate input before assigning.", "xp": 15
    },
    {
        "id": "cpp-6-2-18", "type": "code", "question": "Create class with constructor that sets private member.", "correctAnswer": ["class MyClass { private: int x; public: MyClass(int val) : x(val) {} };"], "explanation": "Constructor initializes private members.", "xp": 15
    },
    {
        "id": "cpp-6-2-19", "type": "code", "question": "Create class with mutable private member.", "correctAnswer": ["class MyClass { private: mutable int cache; public: int get() const { return cache; } };"], "explanation": "mutable can be modified even in const methods.", "xp": 15
    },
    {
        "id": "cpp-6-2-20", "type": "code", "question": "Create class with public static method.", "correctAnswer": ["class MyClass { public: static int getCount() { return count; } };"], "explanation": "Static methods don't require object instance.", "xp": 15
    },
    {
        "id": "cpp-6-2-21", "type": "code", "question": "Access protected member from derived class.", "correctAnswer": ["class Derived : public Base { public: void use() { protectedMember = 10; } };"], "explanation": "Derived classes can access protected members.", "xp": 15
    },
    {
        "id": "cpp-6-2-22", "type": "code", "question": "Create class with private nested class.", "correctAnswer": ["class Outer { private: class Inner {}; };"], "explanation": "Nested class can have different access.", "xp": 15
    },
    {
        "id": "cpp-6-2-23", "type": "code", "question": "Use using to make private type public.", "correctAnswer": ["class MyClass { private: using Value = int; };"], "explanation": "using declarations can be controlled by access specifiers.", "xp": 15
    },
    {
        "id": "cpp-6-2-24", "type": "code", "question": "Create class with private typedef.", "correctAnswer": ["class MyClass { private: typedef int ID; };"], "explanation": "typedefs can be private.", "xp": 15
    },
    {
        "id": "cpp-6-2-25", "type": "code", "question": "Create class with explicit conversion operator.", "correctAnswer": ["explicit operator int() const { return value; }"], "explanation": "explicit prevents implicit conversions.", "xp": 15
    }
]

lesson2 = {
    "id": 31, "title": "Encapsulation and Access Specifiers", "unitTitle": "6. Object-Oriented Programming in C++", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Encapsulation and Access Specifiers

Encapsulation is bundling data and methods that operate on that data, restricting access to internal details.

## Access Specifiers

```cpp
class MyClass {
public:     // Accessible from anywhere
    int publicVar;
    void publicMethod();

private:    // Only accessible within class
    int privateVar;
    void privateMethod();

protected:  // Class and derived classes
    int protectedVar;
    void protectedMethod();
};
```

## Default Access

- **class:** `private`
- **struct:** `public`

## Public Members

```cpp
class BankAccount {
public:
    void deposit(double amount) {
        balance += amount;
    }
    
    double getBalance() const {
        return balance;
    }

private:
    double balance;
};
```

## Private Members

```cpp
class Rectangle {
private:
    double width, height;
    
    double calculateArea() {
        return width * height;
    }

public:
    void setDimensions(double w, double h) {
        if (w > 0 && h > 0) {
            width = w;
            height = h;
        }
    }
    
    double getArea() {
        return calculateArea();
    }
};
```

## Protected Members

```cpp
class Animal {
protected:
    std::string name;
    
public:
    Animal(const std::string& n) : name(n) {}
};

class Dog : public Animal {
public:
    Dog(const std::string& n) : Animal(n) {}
    
    void bark() {
        std::cout << name << " says Woof!";  // Can access protected name
    }
};
```

## Getters and Setters

```cpp
class Person {
private:
    std::string name;
    int age;

public:
    // Getter
    std::string getName() const { return name; }
    int getAge() const { return age; }
    
    // Setter with validation
    void setAge(int a) {
        if (a >= 0 && a <= 150) {
            age = a;
        }
    }
};
```

## Friend Functions

```cpp
class Vector {
private:
    double x, y;
    
public:
    Vector(double x, double y) : x(x), y(y) {}
    
    // Friend function can access private members
    friend double dotProduct(const Vector& v1, const Vector& v2);
};

double dotProduct(const Vector& v1, const Vector& v2) {
    return v1.x * v2.x + v1.y * v2.y;
}
```

## Friend Classes

```cpp
class Node {
private:
    int data;
    
    friend class BinaryTree;  // BinaryTree can access private members
};

class BinaryTree {
    // Can access Node::data
};
```

## Mutable Members

```cpp
class Cache {
private:
    mutable int accessCount;  // Can be modified in const methods
    int cachedValue;
    
public:
    int getValue() const {
        accessCount++;  // OK even though method is const
        return cachedValue;
    }
};
```

## Best Practices

✅ **DO:**
- Make data members private
- Provide getters/setters when needed
- Use protected for inheritance
- Keep public interface minimal
- Validate in setters

❌ **DON'T:**
- Make everything public
- Break encapsulation unnecessarily
- Expose internal representation
- Skip validation in setters
""",
    "questions": lesson2_questions
}

data['units'][5]['lessons'][1].update(lesson2)
print("✅ Lesson 2: Encapsulation and Access Specifiers - 25 questions (20 code)")

# Write progress
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n📊 Progress: 2 of 6 lessons complete (50 of 150 questions)")
print("🔄 Creating comprehensive lessons 3-6...")

# Due to length, I'll create a summary script
summary = """
Unit 6 Progress: 2/6 lessons complete
Remaining lessons:
3. Constructors and Destructors
4. Member Functions  
5. this Pointer
6. Operator Overloading

Each will have 25 questions with ~20 code questions each.
Total: 150 questions, ~105 code questions (70%)
"""

print(summary)
print("\n✅ Checkpoint saved. Ready to continue with Lessons 3-6.")