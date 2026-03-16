#!/usr/bin/env python3
"""
Build Unit 9: Standard Template Library (STL)
6 lessons with 25 questions each (150 total)
Heavy emphasis on code questions (~70% = 105 code questions)
"""
import json

print("🚀 Building C++ Unit 9: Standard Template Library (STL)")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: Overview of STL Components
# ============================================================================
lesson1_questions = [
    {
        "id": "cpp-9-1-1", "type": "typing", "question": "What does STL stand for?", "correctAnswer": ["Standard Template Library"], "explanation": "STL is Standard Template Library.", "xp": 5
    },
    {
        "id": "cpp-9-1-2", "type": "typing", "question": "What are the three main components of STL?", "correctAnswer": ["containers, algorithms, iterators"], "explanation": "STL has containers, algorithms, and iterators.", "xp": 5
    },
    {
        "id": "cpp-9-1-3", "type": "typing", "question": "What are STL containers?", "correctAnswer": ["data structures that store data", "collections of objects"], "explanation": "Containers are data structures that store collections of objects.", "xp": 5
    },
    {
        "id": "cpp-9-1-4", "type": "multiple", "question": "What do STL algorithms do?", "options": ["Operate on ranges", "Define data structures", "Iterate over containers", "Manage memory"], "correctAnswer": [0], "explanation": "Algorithms operate on ranges of elements.", "xp": 5
    },
    {
        "id": "cpp-9-1-5", "type": "multiple", "question": "What do iterators provide?", "options": ["Way to traverse containers", "Memory management", "Algorithm implementation", "Type safety"], "correctAnswer": [0], "explanation": "Iterators provide a way to traverse containers.", "xp": 5
    },
    {
        "id": "cpp-9-1-6", "type": "code", "question": "Include vector header.",
        "correctAnswer": ["#include <vector>"],
        "explanation": "Include <vector> to use vector container.", "xp": 15
    },
    {
        "id": "cpp-9-1-7", "type": "code", "question": "Include algorithm header.",
        "correctAnswer": ["#include <algorithm>"],
        "explanation": "Include <algorithm> to use STL algorithms.", "xp": 15
    },
    {
        "id": "cpp-9-1-8", "type": "code", "question": "Create vector of integers.",
        "correctAnswer": ["std::vector<int> v;", "vector<int> v;"],
        "explanation": "Create vector of type int.", "xp": 15
    },
    {
        "id": "cpp-9-1-9", "type": "code", "question": "Include iostream header.",
        "correctAnswer": ["#include <iostream>"],
        "explanation": "Include <iostream> for input/output.", "xp": 15
    },
    {
        "id": "cpp-9-1-10", "type": "code", "question": "Use std namespace.",
        "correctAnswer": ["using namespace std;", "std::cout", "std::vector"],
        "explanation": "Use namespace std to avoid std:: prefix.", "xp": 15
    },
    {
        "id": "cpp-9-1-11", "type": "code", "question": "Include string header.",
        "correctAnswer": ["#include <string>"],
        "explanation": "Include <string> to use std::string.", "xp": 15
    },
    {
        "id": "cpp-9-1-12", "type": "code", "question": "Include map header.",
        "correctAnswer": ["#include <map>"],
        "explanation": "Include <map> for associative containers.", "xp": 15
    },
    {
        "id": "cpp-9-1-13", "type": "code", "question": "Create deque of strings.",
        "correctAnswer": ["std::deque<std::string> d;", "deque<string> d;"],
        "explanation": "Create deque of type string.", "xp": 15
    },
    {
        "id": "cpp-9-1-14", "type": "code", "question": "Include list header.",
        "correctAnswer": ["#include <list>"],
        "explanation": "Include <list> for doubly linked list.", "xp": 15
    },
    {
        "id": "cpp-9-1-15", "type": "code", "question": "Include set header.",
        "correctAnswer": ["#include <set>"],
        "explanation": "Include <set> for set container.", "xp": 15
    },
    {
        "id": "cpp-9-1-16", "type": "code", "question": "Create stack of integers.",
        "correctAnswer": ["std::stack<int> s;", "stack<int> s;"],
        "explanation": "Create stack of type int.", "xp": 15
    },
    {
        "id": "cpp-9-1-17", "type": "code", "question": "Create queue of strings.",
        "correctAnswer": ["std::queue<std::string> q;", "queue<string> q;"],
        "explanation": "Create queue of type string.", "xp": 15
    },
    {
        "id": "cpp-9-1-18", "type": "code", "question": "Include iterator header.",
        "correctAnswer": ["#include <iterator>"],
        "explanation": "Include <iterator> for iterator utilities.", "xp": 15
    },
    {
        "id": "cpp-9-1-19", "type": "code", "question": "Use begin() on vector.",
        "correctAnswer": ["v.begin()", "auto it = v.begin();"],
        "explanation": "begin() returns iterator to first element.", "xp": 15
    },
    {
        "id": "cpp-9-1-20", "type": "code", "question": "Use end() on vector.",
        "correctAnswer": ["v.end()", "auto it = v.end();"],
        "explanation": "end() returns iterator past last element.", "xp": 15
    },
    {
        "id": "cpp-9-1-21", "type": "code", "question": "Use size() on container.",
        "correctAnswer": ["v.size()", "size_t sz = v.size();"],
        "explanation": "size() returns number of elements.", "xp": 15
    },
    {
        "id": "cpp-9-1-22", "type": "code", "question": "Use empty() on container.",
        "correctAnswer": ["v.empty()", "if (v.empty())"],
        "explanation": "empty() returns true if container is empty.", "xp": 15
    },
    {
        "id": "cpp-9-1-23", "type": "code", "question": "Clear container.",
        "correctAnswer": ["v.clear()", "v.clear();"],
        "explanation": "clear() removes all elements from container.", "xp": 15
    },
    {
        "id": "cpp-9-1-24", "type": "code", "question": "Push back to vector.",
        "correctAnswer": ["v.push_back(5);", "v.push_back(value);"],
        "explanation": "push_back() adds element to end.", "xp": 15
    },
    {
        "id": "cpp-9-1-25", "type": "code", "question": "Pop back from vector.",
        "correctAnswer": ["v.pop_back();", "v.pop_back();"],
        "explanation": "pop_back() removes last element.", "xp": 15
    }
]

lesson1 = {
    "id": 46, "title": "Overview of STL Components", "unitTitle": "9. Standard Template Library (STL)", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Standard Template Library (STL)

STL is a collection of powerful C++ template classes and algorithms.

## Three Main Components

### 1. Containers
Data structures that store objects:
- **Sequence containers**: vector, deque, list
- **Associative containers**: map, set, multimap, multiset
- **Container adaptors**: stack, queue, priority_queue

### 2. Algorithms
Functions that operate on ranges of elements:
- Sorting: `sort()`, `stable_sort()`
- Searching: `find()`, `binary_search()`
- Modifying: `transform()`, `copy()`, `remove()`
- Numeric: `accumulate()`, `inner_product()`

### 3. Iterators
Objects that traverse and access container elements:
- **Input iterators**: read-only
- **Output iterators**: write-only
- **Forward iterators**: read/write forward
- **Bidirectional iterators**: read/write both directions
- **Random access iterators**: direct access

## Basic Usage

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

int main() {
    std::vector<int> v = {5, 2, 8, 1, 9};
    
    // Sort
    std::sort(v.begin(), v.end());
    
    // Print
    for (int x : v) {
        std::cout << x << ' ';
    }
}
```

## Common Operations

```cpp
v.push_back(10);      // Add element
v.pop_back();          // Remove last
v.size();              // Get size
v.empty();             // Check if empty
v.clear();             // Remove all
v.begin();             // First element iterator
v.end();               // Past-end iterator
```
""",
    "questions": lesson1_questions
}

data['units'][8]['lessons'][0].update(lesson1)
print("✅ Lesson 1: Overview of STL Components - 25 questions (20 code)")

# Due to length, save and continue
print("\n📊 Progress: 1 of 6 lessons complete (25 of 150 questions)")
print("🔄 Continuing with remaining 5 lessons...")

with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n✅ Checkpoint saved. Continue with Lessons 2-6...")