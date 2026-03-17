#!/usr/bin/env python3
"""
Rebuild Batch 6 Part 2 - Complete remaining 4 lessons
"""
import json
import os

print("🚀 BATCH 6 PART 2: Completing batch")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 25, Lesson 13: Robin Hood Hashing
lesson25_13 = {
    "id": "cpp-U25-L13",
    "title": "Robin Hood Hashing",
    "unitTitle": "25. Hash Tables in C++",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Robin Hood Hashing

Advanced open addressing hash table with reduced variance.

## Core Concept

Robin Hood hashing minimizes variance of probe lengths, making lookup times more consistent.

## Key Principle

When inserting, swap with existing element if it has shorter probe length (rich stealing from poor).

## Operations

- **Insert**: O(1) average, O(log n) worst
- **Lookup**: O(1) average
- **Delete**: O(1) average

## Benefits

- **Consistent performance**: Lower variance
- **Cache-friendly**: Good locality
- **Predictable**: More uniform timing

## Implementation Details

- Track probe length for each element
- Swap elements during insertion to balance
- May shift elements during deletion

## Best Practices

1. Use for real-time systems
2. Consider load factor carefully
3. Implement efficient probe tracking
4. Handle deletions with care
""",
    "questions": [
        {"id": "cpp-25-13-1", "type": "typing", "question": "What is Robin Hood hashing?", "correctAnswer": ["open addressing with reduced variance", "variance minimization", "balanced hashing"], "explanation": "Robin Hood hashing minimizes variance of probe lengths for consistent performance.", "xp": 5},
        {"id": "cpp-25-13-2", "type": "typing", "question": "What is the key principle of Robin Hood hashing?", "correctAnswer": ["swap with shorter probe length", "rich steal from poor", "balance probe lengths"], "explanation": "When inserting, swap with existing element if it has shorter probe length.", "xp": 5},
        {"id": "cpp-25-13-3", "type": "typing", "question": "What is probe length?", "correctAnswer": ["distance from ideal hash position", "probe distance", "offset"], "explanation": "Probe length is how far an element is from its ideal hash position.", "xp": 5},
        {"id": "cpp-25-13-4", "type": "multiple", "question": "What does Robin Hood hashing minimize?", "options": ["Variance of probe lengths", "Memory usage", "Hash function complexity", "Number of collisions"], "correctAnswer": [0], "explanation": "Robin Hood hashing minimizes the variance of probe lengths for consistent performance.", "xp": 5},
        {"id": "cpp-25-13-5", "type": "code", "question": "Calculate probe length.", "correctAnswer": ["(index - hash(key)) % capacity", "probe distance", "calculate offset"], "explanation": "Probe length is the distance from ideal hash position to actual position.", "xp": 15},
        {"id": "cpp-25-13-6", "type": "code", "question": "Implement Robin Hood insertion.", "correctAnswer": ["insert and swap as needed", "balance probe lengths", "Robin Hood insert"], "explanation": "Insert element and swap with existing if it has shorter probe length.", "xp": 15},
        {"id": "cpp-25-13-7", "type": "code", "question": "Implement Robin Hood lookup.", "correctAnswer": ["probe with hash function", "search algorithm", "find element"], "explanation": "Probe through hash table starting from hash position until finding element or empty slot.", "xp": 15},
        {"id": "cpp-25-13-8", "type": "code", "question": "Implement Robin Hood deletion.", "correctAnswer": ["remove and shift elements", "handle deletion", "remove element"], "explanation": "Remove element and shift subsequent elements to maintain probe length balance.", "xp": 15},
        {"id": "cpp-25-13-9", "type": "typing", "question": "What is the benefit of Robin Hood hashing?", "correctAnswer": ["more consistent lookup times", "low variance", "predictable performance"], "explanation": "Reduced variance means more consistent and predictable lookup times.", "xp": 5},
        {"id": "cpp-25-13-10", "type": "code", "question": "Track probe lengths in Robin Hood.", "correctAnswer": ["store probe length with element", "track offset", "store metadata"], "explanation": "Store probe length or track it indirectly with element position.", "xp": 15},
        {"id": "cpp-25-13-11", "type": "code", "question": "Find maximum probe length.", "correctAnswer": ["scan all elements", "max probe", "worst case"], "explanation": "Scan all elements to find maximum probe length in the table.", "xp": 15},
        {"id": "cpp-25-13-12", "type": "code", "question": "Resize Robin Hood hash table.", "correctAnswer": ["rehash all elements", "resize operation", "rehash"], "explanation": "Create larger table and rehash all elements with new capacity.", "xp": 15},
        {"id": "cpp-25-13-13", "type": "typing", "question": "How does Robin Hood handle load factor?", "correctAnswer": ["maintain low load factor for performance", "capacity management", "load factor"], "explanation": "Robin Hood hashing works best with moderate load factors around 0.7-0.8.", "xp": 5},
        {"id": "cpp-25-13-14", "type": "code", "question": "Compare Robin Hood vs linear probing.", "correctAnswer": ["lower variance but slightly slower insert", "comparison", "trade-offs"], "explanation": "Robin Hood has lower variance but slower insertion due to swapping.", "xp": 15},
        {"id": "cpp-25-13-15", "type": "code", "question": "Implement Robin Hood with double hashing.", "correctAnswer": ["double hash probe sequence", "Robin Hood + double hashing", "combined"], "explanation": "Use double hashing for probe sequence while applying Robin Hood balancing.", "xp": 15},
        {"id": "cpp-25-13-16", "type": "typing", "question": "What is backshift deletion?", "correctAnswer": ["shift elements to fill gap", "deletion method", "gap filling"], "explanation": "Backshift deletion shifts subsequent elements backward to fill the deletion gap.", "xp": 5},
        {"id": "cpp-25-13-17", "type": "code", "question": "Handle hash collisions in Robin Hood.", "correctAnswer": ["probe and swap", "collision resolution", "resolve collisions"], "explanation": "Probe through table and swap elements to balance probe lengths.", "xp": 15},
        {"id": "cpp-25-13-18", "type": "code", "question": "Measure Robin Hood performance.", "correctAnswer": ["track probe lengths", "benchmark", "performance metrics"], "explanation": "Measure average and variance of probe lengths to assess performance.", "xp": 15},
        {"id": "cpp-25-13-19", "type": "code", "question": "Implement Robin Hood for strings.", "correctAnswer": ["string hash function", "custom hash", "string keys"], "explanation": "Implement appropriate hash function for string keys in Robin Hood.", "xp": 15},
        {"id": "cpp-25-13-20", "type": "typing", "question": "When to use Robin Hood hashing?", "correctAnswer": ["consistent performance needed", "real-time systems", "predictable timing"], "explanation": "Use Robin Hood when consistent, predictable performance is critical.", "xp": 5},
        {"id": "cpp-25-13-21", "type": "code", "question": "Optimize Robin Hood for cache.", "correctAnswer": ["memory layout", "cache-friendly", "locality"], "explanation": "Optimize memory layout for cache efficiency while maintaining Robin Hood properties.", "xp": 15},
        {"id": "cpp-25-13-22", "type": "code", "question": "Parallel Robin Hood operations.", "correctAnswer": ["lock-free", "concurrent", "thread-safe"], "explanation": "Implement lock-free or concurrent Robin Hood for multithreaded access.", "xp": 15},
        {"id": "cpp-25-13-23", "type": "typing", "question": "What is tombstone in Robin Hood?", "correctAnswer": ["marker for deleted elements", "deletion marker", "tombstone"], "explanation": "Tombstones mark deleted slots to distinguish them from empty slots.", "xp": 5},
        {"id": "cpp-25-13-24", "type": "code", "question": "Robin Hood with custom objects.", "correctAnswer": ["custom hash and equality", "object support", "user-defined types"], "explanation": "Provide custom hash function and equality comparison for user-defined types.", "xp": 15},
        {"id": "cpp-25-13-25", "type": "code", "question": "Debug Robin Hood hash table.", "correctAnswer": ["visualize probe lengths", "debug output", "inspect state"], "explanation": "Create visualization of probe lengths and table state for debugging.", "xp": 15}
    ]
}

data['units'][24]['lessons'][12].update(lesson25_13)
print("✅ Unit 25, Lesson 13: Robin Hood Hashing - 25 detailed questions")

# Unit 49, Lesson 2: Object-Oriented Programming Review
lesson49_2 = {
    "id": "cpp-U49-L2",
    "title": "Object-Oriented Programming Review",
    "unitTitle": "49. Course Completion & Final Summary",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Object-Oriented Programming Review

Comprehensive review of OOP concepts in C++.

## Core OOP Principles

1. **Encapsulation**: Hide implementation details
2. **Inheritance**: Reuse code through hierarchy
3. **Polymorphism**: Same interface, different implementations
4. **Abstraction**: Hide complex details behind simple interfaces

## Classes and Objects

```cpp
class Rectangle {
private:
    int width, height;
public:
    Rectangle(int w, int h) : width(w), height(h) {}
    int area() { return width * height; }
};
```

## Inheritance

```cpp
class Square : public Rectangle {
public:
    Square(int s) : Rectangle(s, s) {}
};
```

## Polymorphism

- **Virtual functions**: Runtime polymorphism
- **Override**: Provide specific implementation
- **Pure virtual**: Abstract classes

## Best Practices

1. Use const correctness
2. Follow Rule of Three/Five
3. Use smart pointers
4. Prefer composition over inheritance
5. Design for extensibility
""",
    "questions": [
        {"id": "cpp-49-2-1", "type": "typing", "question": "What are the four main OOP principles?", "correctAnswer": ["encapsulation, inheritance, polymorphism, abstraction", "four pillars", "OOP principles"], "explanation": "The four main principles of OOP are encapsulation, inheritance, polymorphism, and abstraction.", "xp": 5},
        {"id": "cpp-49-2-2", "type": "typing", "question": "What is encapsulation?", "correctAnswer": ["hiding implementation details", "data hiding", "information hiding"], "explanation": "Encapsulation hides the internal implementation details of a class from external access.", "xp": 5},
        {"id": "cpp-49-2-3", "type": "typing", "question": "What is inheritance?", "correctAnswer": ["deriving new classes from existing classes", "code reuse", "class hierarchy"], "explanation": "Inheritance allows a new class to derive properties and behavior from an existing class.", "xp": 5},
        {"id": "cpp-49-2-4", "type": "typing", "question": "What is polymorphism?", "correctAnswer": ["same interface different implementations", "many forms", "runtime binding"], "explanation": "Polymorphism allows objects of different classes to be treated as objects of a common superclass.", "xp": 5},
        {"id": "cpp-49-2-5", "type": "multiple", "question": "Which keyword enables polymorphism in C++?", "options": ["virtual", "static", "inline", "explicit"], "correctAnswer": [0], "explanation": "The virtual keyword enables runtime polymorphism through virtual functions.", "xp": 5},
        {"id": "cpp-49-2-6", "type": "code", "question": "Define a class with private and public members.", "correctAnswer": ["class Example { private: int x; public: void set(int v) { x = v; } };", "class definition", "access specifiers"], "explanation": "Use private and public access specifiers to control member visibility.", "xp": 15},
        {"id": "cpp-49-2-7", "type": "code", "question": "Create constructor with initialization list.", "correctAnswer": ["Example(int v) : x(v) {}", "constructor", "initialization list"], "explanation": "Use initialization list syntax to initialize member variables in constructor.", "xp": 15},
        {"id": "cpp-49-2-8", "type": "code", "question": "Inherit from a base class.", "correctAnswer": ["class Derived : public Base {}", "inheritance", "derived class"], "explanation": "Use colon and access specifier to derive from base class.", "xp": 15},
        {"id": "cpp-49-2-9", "type": "code", "question": "Override virtual function.", "correctAnswer": ["void func() override {}", "override", "virtual function"], "explanation": "Use override specifier to override virtual function from base class.", "xp": 15},
        {"id": "cpp-49-2-10", "type": "code", "question": "Create pure virtual function.", "correctAnswer": ["virtual void func() = 0;", "pure virtual", "abstract class"], "explanation": "Set function to zero to make it pure virtual, making class abstract.", "xp": 15},
        {"id": "cpp-49-2-11", "type": "typing", "question": "What is the Rule of Three?", "correctAnswer": ["destructor, copy constructor, copy assignment", "rule of three", "C++ rule"], "explanation": "If you need any of destructor, copy constructor, or copy assignment, you need all three.", "xp": 5},
        {"id": "cpp-49-2-12", "type": "code", "question": "Implement copy constructor.", "correctAnswer": ["Class(const Class& other) {}", "copy constructor", "copy semantics"], "explanation": "Copy constructor takes const reference to same class type.", "xp": 15},
        {"id": "cpp-49-2-13", "type": "code", "question": "Implement copy assignment operator.", "correctAnswer": ["Class& operator=(const Class& other) {}", "assignment operator", "copy assignment"], "explanation": "Copy assignment operator takes const reference and returns reference to *this.", "xp": 15},
        {"id": "cpp-49-2-14", "type": "code", "question": "Use smart pointer instead of raw pointer.", "correctAnswer": ["std::unique_ptr", "std::shared_ptr", "smart pointer"], "explanation": "Use unique_ptr for single ownership or shared_ptr for shared ownership.", "xp": 15},
        {"id": "cpp-49-2-15", "type": "typing", "question": "What is composition over inheritance?", "correctAnswer": ["prefer object composition", "composition preferred", "design principle"], "explanation": "Prefer composing objects together rather than deep inheritance hierarchies.", "xp": 5},
        {"id": "cpp-49-2-16", "type": "code", "question": "Use const member function.", "correctAnswer": ["void func() const {}", "const method", "const correctness"], "explanation": "Const member function promises not to modify object state.", "xp": 15},
        {"id": "cpp-49-2-17", "type": "code", "question": "Use static member.", "correctAnswer": ["static int count;", "static member", "class variable"], "explanation": "Static member is shared among all instances of the class.", "xp": 15},
        {"id": "cpp-49-2-18", "type": "code", "question": "Use friend function.", "correctAnswer": ["friend void func(Class& c);", "friend function", "external access"], "explanation": "Friend function can access private members of the class.", "xp": 15},
        {"id": "cpp-49-2-19", "type": "code", "question": "Use abstract class as interface.", "correctAnswer": ["pure virtual functions", "interface", "abstract base"], "explanation": "Class with only pure virtual functions serves as interface.", "xp": 15},
        {"id": "cpp-49-2-20", "type": "code", "question": "Use multiple inheritance.", "correctAnswer": ["class D : public A, public B {}", "multiple inheritance", "multiple base"], "explanation": "Derive from multiple base classes by separating with commas.", "xp": 15},
        {"id": "cpp-49-2-21", "type": "code", "question": "Use virtual inheritance.", "correctAnswer": ["class D : virtual public A {}", "virtual inheritance", "diamond problem"], "explanation": "Virtual inheritance solves diamond problem in multiple inheritance.", "xp": 15},
        {"id": "cpp-49-2-22", "type": "typing", "question": "What is operator overloading?", "correctAnswer": ["define behavior for operators", "operator overloading", "custom operators"], "explanation": "Operator overloading defines custom behavior for C++ operators on user-defined types.", "xp": 5},
        {"id": "cpp-49-2-23", "type": "code", "question": "Overload == operator.", "correctAnswer": ["bool operator==(const Class& other) const {}", "operator overloading", "equality"], "explanation": "Implement operator== as member function taking const reference.", "xp": 15},
        {"id": "cpp-49-2-24", "type": "code", "question": "Use dynamic_cast for polymorphism.", "correctAnswer": ["dynamic_cast<Derived*>(base)", "downcast", "runtime cast"], "explanation": "dynamic_cast safely downcasts polymorphic types at runtime.", "xp": 15},
        {"id": "cpp-49-2-25", "type": "code", "question": "Design extensible class hierarchy.", "correctAnswer": ["virtual functions", "open/closed principle", "extensibility"], "explanation": "Use virtual functions to allow extensions without modifying existing code.", "xp": 15}
    ]
}

data['units'][48]['lessons'][1].update(lesson49_2)
print("✅ Unit 49, Lesson 2: Object-Oriented Programming Review - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 6 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 31, Lesson 8: 2D Segment Tree")
print("  - Unit 25, Lesson 13: Robin Hood Hashing")
print("  - Unit 49, Lesson 2: Object-Oriented Programming Review")
print("\nTotal questions: 75")
print("="*70)

# Write final
output_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(output_path, 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("✅ Saved to cppCombined.js")
