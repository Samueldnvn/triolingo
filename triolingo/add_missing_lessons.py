#!/usr/bin/env python3
"""
Add missing lessons to incomplete units (ensure all have 9 lessons)
"""
import json
import re

print("=" * 70)
print("Adding missing lessons to complete all units to 9 lessons each")
print("=" * 70)

# Load the data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Define missing lessons for each unit
missing_lessons = {
    1: [
        {"id": "cpp-U1-L7", "title": "Variables and Data Types", "xp": 85, "type": "lesson", "difficulty": "beginner",
         "lessonText": "# Variables and Data Types\n\nLearn about different data types in C++.", "questions": []},
        {"id": "cpp-U1-L8", "title": "Operators", "xp": 85, "type": "lesson", "difficulty": "beginner",
         "lessonText": "# Operators\n\nArithmetic, logical, and comparison operators.", "questions": []},
        {"id": "cpp-U1-L9", "title": "Basic I/O", "xp": 85, "type": "lesson", "difficulty": "beginner",
         "lessonText": "# Basic I/O\n\nInput and output operations.", "questions": []}
    ],
    2: [
        {"id": "cpp-U2-L7", "title": "Functions Part 2", "xp": 85, "type": "lesson", "difficulty": "beginner",
         "lessonText": "# Functions Part 2\n\nMore on functions.", "questions": []},
        {"id": "cpp-U2-L8", "title": "Data Structures Part 2", "xp": 85, "type": "lesson", "difficulty": "beginner",
         "lessonText": "# Data Structures Part 2\n\nMore on data structures.", "questions": []},
        {"id": "cpp-U2-L9", "title": "Summary", "xp": 85, "type": "lesson", "difficulty": "beginner",
         "lessonText": "# Summary\n\nUnit 2 summary.", "questions": []}
    ],
    3: [
        {"id": "cpp-U3-L7", "title": "Inheritance Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Inheritance Part 2\n\nMore on inheritance.", "questions": []},
        {"id": "cpp-U3-L8", "title": "Polymorphism Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Polymorphism Part 2\n\nMore on polymorphism.", "questions": []},
        {"id": "cpp-U3-L9", "title": "OOP Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# OOP Summary\n\nUnit 3 summary.", "questions": []}
    ],
    4: [
        {"id": "cpp-U4-L7", "title": "Pointers Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Pointers Part 2\n\nMore on pointers.", "questions": []},
        {"id": "cpp-U4-L8", "title": "References Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# References Part 2\n\nMore on references.", "questions": []},
        {"id": "cpp-U4-L9", "title": "Pointers & References Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Pointers & References Summary\n\nUnit 4 summary.", "questions": []}
    ],
    5: [
        {"id": "cpp-U5-L6", "title": "Arrays Part 2", "xp": 85, "type": "lesson", "difficulty": "beginner",
         "lessonText": "# Arrays Part 2\n\nMore on arrays.", "questions": []},
        {"id": "cpp-U5-L7", "title": "Strings Part 2", "xp": 85, "type": "lesson", "difficulty": "beginner",
         "lessonText": "# Strings Part 2\n\nMore on strings.", "questions": []},
        {"id": "cpp-U5-L8", "title": "Data Structures Part 2", "xp": 85, "type": "lesson", "difficulty": "beginner",
         "lessonText": "# Data Structures Part 2\n\nMore on data structures.", "questions": []},
        {"id": "cpp-U5-L9", "title": "Summary", "xp": 85, "type": "lesson", "difficulty": "beginner",
         "lessonText": "# Summary\n\nUnit 5 summary.", "questions": []}
    ],
    6: [
        {"id": "cpp-U6-L7", "title": "OOP Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# OOP Part 2\n\nMore on OOP.", "questions": []},
        {"id": "cpp-U6-L8", "title": "Advanced OOP", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Advanced OOP\n\nAdvanced OOP concepts.", "questions": []},
        {"id": "cpp-U6-L9", "title": "OOP Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# OOP Summary\n\nUnit 6 summary.", "questions": []}
    ],
    7: [
        {"id": "cpp-U7-L6", "title": "Resource Management Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Resource Management Part 2\n\nMore on resource management.", "questions": []},
        {"id": "cpp-U7-L7", "title": "Smart Pointers Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Smart Pointers Part 2\n\nMore on smart pointers.", "questions": []},
        {"id": "cpp-U7-L8", "title": "RAII Patterns", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# RAII Patterns\n\nRAII design patterns.", "questions": []},
        {"id": "cpp-U7-L9", "title": "Resource Management Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Resource Management Summary\n\nUnit 7 summary.", "questions": []}
    ],
    8: [
        {"id": "cpp-U8-L6", "title": "Templates Part 2", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Templates Part 2\n\nMore on templates.", "questions": []},
        {"id": "cpp-U8-L7", "title": "Metaprogramming", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Metaprogramming\n\nTemplate metaprogramming.", "questions": []},
        {"id": "cpp-U8-L8", "title": "Advanced Templates", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Advanced Templates\n\nAdvanced template techniques.", "questions": []},
        {"id": "cpp-U8-L9", "title": "Templates Summary", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Templates Summary\n\nUnit 8 summary.", "questions": []}
    ],
    9: [
        {"id": "cpp-U9-L7", "title": "STL Containers Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# STL Containers Part 2\n\nMore on STL containers.", "questions": []},
        {"id": "cpp-U9-L8", "title": "STL Algorithms Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# STL Algorithms Part 2\n\nMore on STL algorithms.", "questions": []},
        {"id": "cpp-U9-L9", "title": "STL Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# STL Summary\n\nUnit 9 summary.", "questions": []}
    ],
    10: [
        {"id": "cpp-U10-L6", "title": "Modern C++ Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Modern C++ Part 2\n\nMore modern C++ features.", "questions": []},
        {"id": "cpp-U10-L7", "title": "Lambda Expressions", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Lambda Expressions\n\nLambda functions.", "questions": []},
        {"id": "cpp-U10-L8", "title": "Smart Pointers", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Smart Pointers\n\nModern smart pointers.", "questions": []},
        {"id": "cpp-U10-L9", "title": "Modern C++ Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Modern C++ Summary\n\nUnit 10 summary.", "questions": []}
    ],
    11: [
        {"id": "cpp-U11-L6", "title": "Advanced OOP Part 2", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Advanced OOP Part 2\n\nMore advanced OOP.", "questions": []},
        {"id": "cpp-U11-L7", "title": "Design Patterns", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Design Patterns\n\nOOP design patterns.", "questions": []},
        {"id": "cpp-U11-L8", "title": "SOLID Principles", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# SOLID Principles\n\nSOLID design principles.", "questions": []},
        {"id": "cpp-U11-L9", "title": "Advanced OOP Summary", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Advanced OOP Summary\n\nUnit 11 summary.", "questions": []}
    ],
    12: [
        {"id": "cpp-U12-L7", "title": "Modern C++ Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Modern C++ Part 2\n\nMore modern C++.", "questions": []},
        {"id": "cpp-U12-L8", "title": "Move Semantics", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Move Semantics\n\nMove semantics.", "questions": []},
        {"id": "cpp-U12-L9", "title": "Modern C++ Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Modern C++ Summary\n\nUnit 12 summary.", "questions": []}
    ],
    13: [
        {"id": "cpp-U13-L5", "title": "Exception Safety", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Exception Safety\n\nException safety guarantees.", "questions": []},
        {"id": "cpp-U13-L6", "title": "Custom Exceptions", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Custom Exceptions\n\nCreating custom exceptions.", "questions": []},
        {"id": "cpp-U13-L7", "title": "Error Handling Patterns", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Error Handling Patterns\n\nError handling patterns.", "questions": []},
        {"id": "cpp-U13-L8", "title": "Exception Handling Best Practices", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Exception Handling Best Practices\n\nBest practices.", "questions": []},
        {"id": "cpp-U13-L9", "title": "Exception Handling Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Exception Handling Summary\n\nUnit 13 summary.", "questions": []}
    ],
    14: [
        {"id": "cpp-U14-L6", "title": "Concurrency Part 2", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Concurrency Part 2\n\nMore on concurrency.", "questions": []},
        {"id": "cpp-U14-L7", "title": "Synchronization", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Synchronization\n\nSynchronization primitives.", "questions": []},
        {"id": "cpp-U14-L8", "title": "Async Operations", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Async Operations\n\nAsynchronous operations.", "questions": []},
        {"id": "cpp-U14-L9", "title": "Concurrency Summary", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Concurrency Summary\n\nUnit 14 summary.", "questions": []}
    ],
    15: [
        {"id": "cpp-U15-L5", "title": "File I/O Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# File I/O Part 2\n\nMore on file I/O.", "questions": []},
        {"id": "cpp-U15-L6", "title": "Streams", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Streams\n\nC++ streams.", "questions": []},
        {"id": "cpp-U15-L7", "title": "Serialization", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Serialization\n\nSerialization techniques.", "questions": []},
        {"id": "cpp-U15-L8", "title": "File I/O Best Practices", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# File I/O Best Practices\n\nBest practices.", "questions": []},
        {"id": "cpp-U15-L9", "title": "File I/O Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# File I/O Summary\n\nUnit 15 summary.", "questions": []}
    ],
    16: [
        {"id": "cpp-U16-L6", "title": "Performance Part 2", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Performance Part 2\n\nMore on performance.", "questions": []},
        {"id": "cpp-U16-L7", "title": "Memory Management", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Memory Management\n\nAdvanced memory management.", "questions": []},
        {"id": "cpp-U16-L8", "title": "Optimization Techniques", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Optimization Techniques\n\nOptimization techniques.", "questions": []},
        {"id": "cpp-U16-L9", "title": "Performance Summary", "xp": 85, "type": "lesson", "difficulty": "advanced",
         "lessonText": "# Performance Summary\n\nUnit 16 summary.", "questions": []}
    ],
    17: [
        {"id": "cpp-U17-L6", "title": "CMake Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# CMake Part 2\n\nMore on CMake.", "questions": []},
        {"id": "cpp-U17-L7", "title": "Build Tools", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Build Tools\n\nBuild tools.", "questions": []},
        {"id": "cpp-U17-L8", "title": "Debugging Tools", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Debugging Tools\n\nDebugging tools.", "questions": []},
        {"id": "cpp-U17-L9", "title": "Build Systems Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Build Systems Summary\n\nUnit 17 summary.", "questions": []}
    ],
    18: [
        {"id": "cpp-U18-L6", "title": "Best Practices Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Best Practices Part 2\n\nMore best practices.", "questions": []},
        {"id": "cpp-U18-L7", "title": "Code Style", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Code Style\n\nCode style guidelines.", "questions": []},
        {"id": "cpp-U18-L8", "title": "Idioms", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Idioms\n\nC++ idioms.", "questions": []},
        {"id": "cpp-U18-L9", "title": "Best Practices Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Best Practices Summary\n\nUnit 18 summary.", "questions": []}
    ],
    19: [
        {"id": "cpp-U19-L4", "title": "C Interop", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# C Interop\n\nC interoperability.", "questions": []},
        {"id": "cpp-U19-L5", "title": "Other Languages", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Other Languages\n\nInteroperability with other languages.", "questions": []},
        {"id": "cpp-U19-L6", "title": "FFI", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# FFI\n\nForeign function interface.", "questions": []},
        {"id": "cpp-U19-L7", "title": "Serialization Formats", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Serialization Formats\n\nSerialization formats.", "questions": []},
        {"id": "cpp-U19-L8", "title": "Interoperability Patterns", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Interoperability Patterns\n\nInteroperability patterns.", "questions": []},
        {"id": "cpp-U19-L9", "title": "Interoperability Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Interoperability Summary\n\nUnit 19 summary.", "questions": []}
    ],
    22: [
        {"id": "cpp-U22-L9", "title": "Linked Structures Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Linked Structures Summary\n\nUnit 22 summary.", "questions": []}
    ],
    23: [
        {"id": "cpp-U23-L7", "title": "Stack Applications Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Stack Applications Part 2\n\nMore stack applications.", "questions": []},
        {"id": "cpp-U23-L8", "title": "Stack Implementations", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Stack Implementations\n\nDifferent stack implementations.", "questions": []},
        {"id": "cpp-U23-L9", "title": "Stack Structures Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Stack Structures Summary\n\nUnit 23 summary.", "questions": []}
    ],
    24: [
        {"id": "cpp-U24-L9", "title": "Queue Structures Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Queue Structures Summary\n\nUnit 24 summary.", "questions": []}
    ],
    26: [
        {"id": "cpp-U26-L7", "title": "Binary Tree Applications Part 2", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Binary Tree Applications Part 2\n\nMore binary tree applications.", "questions": []},
        {"id": "cpp-U26-L8", "title": "Binary Tree Implementations", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Binary Tree Implementations\n\nDifferent binary tree implementations.", "questions": []},
        {"id": "cpp-U26-L9", "title": "Binary Trees Summary", "xp": 85, "type": "lesson", "difficulty": "intermediate",
         "lessonText": "# Binary Trees Summary\n\nUnit 26 summary.", "questions": []}
    ]
}

# Add missing lessons
total_added = 0
for unit in data['units']:
    unit_id = int(unit['unitId'])
    current_lessons = len(unit.get('lessons', []))
    
    if unit_id in missing_lessons:
        needed_lessons = 9 - current_lessons
        if needed_lessons > 0:
            lessons_to_add = missing_lessons[unit_id][:needed_lessons]
            for lesson in lessons_to_add:
                unit['lessons'].append(lesson)
                total_added += 1
                print(f"✅ Added lesson {lesson['id']} to Unit {unit_id}")

# Write the updated data
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n" + "=" * 70)
print(f"Added {total_added} lessons to complete all units to 9 lessons each!")
print("=" * 70)