#!/usr/bin/env python3
"""
Build Unit 6: Object-Oriented Programming in C++
6 lessons with 25 questions each (150 total)
Emphasis on code questions (~70% = 105 code questions)
"""
import json

print("🚀 Building C++ Unit 6: Object-Oriented Programming in C++")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: Structs vs Classes
# ============================================================================
lesson1_questions = [
    # Type-in (3 questions)
    {
        "id": "cpp-6-1-1",
        "type": "typing",
        "question": "What is the main difference between struct and class in C++?",
        "correctAnswer": ["default access is public for struct, private for class", "access specifiers default differently"],
        "explanation": "The only difference is default access: struct=public, class=private.",
        "xp": 5
    },
    {
        "id": "cpp-6-1-2",
        "type": "typing",
        "question": "What is a struct in C++?",
        "correctAnswer": ["user-defined type with members", "data structure"],
        "explanation": "Struct is a user-defined type that groups related data members.",
        "xp": 5
    },
    {
        "id": "cpp-6-1-3",
        "type": "typing",
        "question": "When should you use struct vs class?",
        "correctAnswer": ["struct for data-only, class for objects with behavior", "use struct for POD types"],
        "explanation": "Use struct for data structures (POD), class for objects with methods and invariants.",
        "xp": 5
    },
    
    # Multiple choice (2 questions)
    {
        "id": "cpp-6-1-4",
        "type": "multiple",
        "question": "Can structs have member functions?",
        "options": ["Yes", "No", "Only in C++", "Only with special keyword"],
        "correctAnswer": [0],
        "explanation": "In C++, structs can have member functions just like classes.",
        "xp": 5
    },
    {
        "id": "cpp-6-1-5",
        "type": "multiple",
        "question": "What is the default inheritance for struct?",
        "options": ["public", "private", "protected", "No inheritance"],
        "correctAnswer": [0],
        "explanation": "Structs default to public inheritance, classes to private.",
        "xp": 5
    },
    
    # Code (20 questions)
    {
        "id": "cpp-6-1-6",
        "type": "code",
        "question": "Declare a struct Point with x and y members.",
        "correctAnswer": ["struct Point { int x; int y; };", "struct Point {\\n    int x;\\n    int y;\\n};"],
        "explanation": "Struct declaration with public data members by default.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-7",
        "type": "code",
        "question": "Initialize a struct using brace initialization.",
        "correctAnswer": ["Point p = {10, 20};", "Point p{10, 20};"],
        "explanation": "Structs can be initialized with braced lists.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-8",
        "type": "code",
        "question": "Access struct member x.",
        "correctAnswer": ["p.x", "int value = p.x;"],
        "explanation": "Use dot operator to access struct members.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-9",
        "type": "code",
        "question": "Declare a struct with member function.",
        "correctAnswer": ["struct Point { int x; int y; void print() { cout << x << y; } };"],
        "explanation": "Structs can have member functions.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-10",
        "type": "code",
        "question": "Declare a class with private data members.",
        "correctAnswer": ["class Point { private: int x; int y; };", "class Point {\\nprivate:\\n    int x;\\n    int y;\\n};"],
        "explanation": "Classes have private members by default.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-11",
        "type": "code",
        "question": "Make struct member private.",
        "correctAnswer": ["struct Point { private: int x; int y; };"],
        "explanation": "Use private: access specifier to make members private even in struct.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-12",
        "type": "code",
        "question": "Make class member public.",
        "correctAnswer": ["class Point { public: int x; int y; };"],
        "explanation": "Use public: access specifier to make members public even in class.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-13",
        "type": "code",
        "question": "Create array of structs.",
        "correctAnswer": ["Point points[5];", "Point points[5] = {{0,0}, {1,1}};"],
        "explanation": "Arrays work with structs just like built-in types.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-14",
        "type": "code",
        "question": "Pass struct by value to function.",
        "correctAnswer": ["void printPoint(Point p)", "void printPoint(Point p) { cout << p.x << p.y; }"],
        "explanation": "Structs can be passed by value (copies all members).",
        "xp": 15
    },
    {
        "id": "cpp-6-1-15",
        "type": "code",
        "question": "Pass struct by reference to function.",
        "correctAnswer": ["void modifyPoint(Point& p)", "void modifyPoint(Point& p) { p.x = 10; }"],
        "explanation": "Pass by reference to avoid copy and allow modification.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-16",
        "type": "code",
        "question": "Return struct from function.",
        "correctAnswer": ["Point createPoint() { return {10, 20}; }", "Point createPoint() { Point p{10, 20}; return p; }"],
        "explanation": "Functions can return structs by value.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-17",
        "type": "code",
        "question": "Compare two structs for equality.",
        "correctAnswer": ["if (p1.x == p2.x && p1.y == p2.y)", "bool equal = (p1.x == p2.x && p1.y == p2.y);"],
        "explanation": "Structs don't have built-in comparison, compare members manually.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-18",
        "type": "code",
        "question": "Copy struct to another.",
        "correctAnswer": ["Point p2 = p1;", "p2 = p1;"],
        "explanation": "Structs can be copied with assignment operator.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-19",
        "type": "code",
        "question": "Use pointer to struct member with arrow operator.",
        "correctAnswer": ["p->x", "int value = p->x;"],
        "explanation": "Use -> operator to access struct members through pointer.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-20",
        "type": "code",
        "question": "Declare struct with default values (C++11).",
        "correctAnswer": ["struct Point { int x = 0; int y = 0; };"],
        "explanation": "C++11 allows default member initializers.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-21",
        "type": "code",
        "question": "Initialize struct with designated initializers (C++20).",
        "correctAnswer": ["Point p{.x = 10, .y = 20};"],
        "explanation": "C++20 designated initializers specify member names.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-22",
        "type": "code",
        "question": "Create struct inside function and return it.",
        "correctAnswer": ["Point create() { Point p{1, 2}; return p; }"],
        "explanation": "Return by value (RVO may optimize).",
        "xp": 15
    },
    {
        "id": "cpp-6-1-23",
        "type": "code",
        "question": "Use struct as map key.",
        "correctAnswer": ["map<Point, string> m;", "std::map<Point, int> points;"],
        "explanation": "Structs can be used as keys if they have comparison operator.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-24",
        "type": "code",
        "question": "Define struct with constructor.",
        "correctAnswer": ["struct Point { Point(int x, int y) : x(x), y(y) {} int x, y; };"],
        "explanation": "Structs can have constructors.",
        "xp": 15
    },
    {
        "id": "cpp-6-1-25",
        "type": "code",
        "question": "Make struct aggregate (no user-defined constructor).",
        "correctAnswer": ["struct Point { int x; int y; };", "struct Point { int x = 0; int y = 0; };"],
        "explanation": "Aggregate struct allows brace initialization and no constructors.",
        "xp": 15
    }
]

lesson1 = {
    "id": 30,
    "title": "Structs vs Classes",
    "unitTitle": "6. Object-Oriented Programming in C++",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Structs vs Classes

In C++, `struct` and `class` are almost identical, with one key difference.

## The Only Difference

```cpp
struct MyStruct {
    int x;        // public by default
    void func() {} // public by default
};

class MyClass {
    int x;        // private by default
    void func() {} // private by default
};
```

- **struct:** Default access is **public**
- **class:** Default access is **private**

## When to Use struct

✅ **Use struct for:**
- Plain Old Data (POD) types
- Data structures without invariants
- Public interfaces
- C interop
- Simple data containers

```cpp
struct Point {
    double x, y;
};

struct Color {
    int r, g, b, a;
};

struct Vertex {
    Point position;
    Color color;
    Vector2 uv;
};
```

## When to Use class

✅ **Use class for:**
- Objects with behavior
- Encapsulation needed
- Invariants to maintain
- Complex types with constructors/destructors

```cpp
class BankAccount {
private:
    double balance;
    
public:
    void deposit(double amount) {
        balance += amount;
    }
    
    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        }
    }
    
    double getBalance() const {
        return balance;
    }
};
```

## Struct Features

### Initialization
```cpp
struct Point {
    int x, y;
};

// Brace initialization
Point p1 = {10, 20};
Point p2{10, 20};

// Default initialization (C++11)
struct Point2 {
    int x = 0;
    int y = 0;
};

Point2 p3;  // {0, 0}
```

### Member Access
```cpp
Point p = {10, 20};

// Dot operator
p.x = 15;
int y = p.y;

// Pointer to struct
Point* ptr = &p;
ptr->x = 20;  // Arrow operator
```

### Member Functions
```cpp
struct Point {
    int x, y;
    
    void print() {
        std::cout << "(" << x << ", " << y << ")";
    }
    
    void move(int dx, int dy) {
        x += dx;
        y += dy;
    }
};
```

### Constructors
```cpp
struct Point {
    int x, y;
    
    // Default constructor
    Point() : x(0), y(0) {}
    
    // Parameterized constructor
    Point(int x, int y) : x(x), y(y) {}
    
    // Copy constructor
    Point(const Point& other) : x(other.x), y(other.y) {}
};
```

## Struct as Function Parameters

```cpp
struct Point {
    int x, y;
};

// By value (copy)
void printPoint(Point p) {
    std::cout << p.x << ", " << p.y;
}

// By reference (no copy, can modify)
void movePoint(Point& p, int dx, int dy) {
    p.x += dx;
    p.y += dy;
}

// By const reference (no copy, read-only)
void readPoint(const Point& p) {
    std::cout << p.x << ", " << p.y;
}
```

## Struct Return Values

```cpp
Point createPoint(int x, int y) {
    Point p{x, y};
    return p;  // Return by value (may use RVO)
}

// Usage
Point p = createPoint(10, 20);
```

## Struct Arrays

```cpp
Point points[5] = {
    {0, 0},
    {1, 1},
    {2, 2},
    {3, 3},
    {4, 4}
};

for (int i = 0; i < 5; i++) {
    std::cout << points[i].x << ", " << points[i].y << "\\n";
}
```

## Struct Comparison

Structs don't have built-in comparison operators:

```cpp
struct Point {
    int x, y;
};

Point p1{1, 2};
Point p2{1, 2};

// Manual comparison
bool equal = (p1.x == p2.x && p1.y == p2.y);

// Or define operator==
bool operator==(const Point& lhs, const Point& rhs) {
    return lhs.x == rhs.x && lhs.y == rhs.y;
}

if (p1 == p2) { }  // Now works
```

## Struct Inheritance

Structs can inherit (public by default):

```cpp
struct Shape {
    int x, y;
};

struct Circle : Shape {
    int radius;
};

struct Rectangle : Shape {
    int width, height;
};
```

## Best Practices

✅ **DO:**
- Use struct for simple data containers
- Use class for objects with behavior and invariants
- Initialize structs with braces
- Pass large structs by const reference

❌ **DON'T:**
- Use struct when you need encapsulation
- Assume structs are always simple
- Forget that structs can have methods
- Overuse structs for complex logic

## Struct vs Class Summary

| Feature | struct | class |
|---------|--------|-------|
| Default member access | public | private |
| Default inheritance | public | private |
| Can have methods | ✅ Yes | ✅ Yes |
| Can have constructors | ✅ Yes | ✅ Yes |
| Can have destructors | ✅ Yes | ✅ Yes |
| Can inherit | ✅ Yes | ✅ Yes |
| Use case | Data containers | Objects with behavior |
""",
    "questions": lesson1_questions
}

data['units'][5]['lessons'][0].update(lesson1)
print("✅ Lesson 1: Structs vs Classes - 25 questions (20 code)")

# Write checkpoint
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n')
    f.write('// Generated from C++ outline\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n📊 Checkpoint: 1 of 6 lessons complete (25 of 150 questions)")
print("   - Code questions: 20 (80%)")
print("🔄 Continue with Lessons 2-6...")

print("\n⏳ Due to message length, I'll continue with remaining lessons...")
print("Would you like me to continue building Units 6-10 now?")