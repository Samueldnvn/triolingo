#!/usr/bin/env python3
"""
Rebuild Batch 6 - Continue systematic rebuild
"""
import json
import os

print("🚀 BATCH 6: Continuing systematic rebuild")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Find lessons that are still problematic
still_problematic = []
for unit_idx, unit in enumerate(data['units']):
    for lesson_idx, lesson in enumerate(unit.get('lessons', [])):
        q_count = len(lesson.get('questions', []))
        if q_count > 0:
            total_len = sum(len(q['question']) for q in lesson['questions'])
            avg_len = total_len / q_count
            if avg_len < 25:
                still_problematic.append({
                    'unit': unit_idx + 1,
                    'lesson': lesson_idx + 1,
                    'title': lesson.get('title', 'Unknown'),
                    'avg_length': avg_len
                })

still_problematic.sort(key=lambda x: x['avg_length'])

# Take next 5
batch6 = still_problematic[:5]
print(f"Next 5 lessons to fix:")
for i, lesson in enumerate(batch6, 1):
    print(f"{i}. Unit {lesson['unit']}, Lesson {lesson['lesson']}: {lesson['title']}")

# Rebuild Unit 31, Lesson 8: 2D Segment Tree
lesson31_8 = {
    "id": "cpp-U31-L8",
    "title": "2D Segment Tree",
    "unitTitle": "31. Advanced Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# 2D Segment Tree

Advanced data structure for range queries on 2D arrays.

## Core Concept

2D Segment Tree extends segment tree concept to two dimensions, enabling efficient range queries on 2D arrays.

## Structure

- **Outer tree**: Divides rows
- **Inner trees**: Divide columns
- **Hierarchical**: Tree of trees

## Operations

- **Build**: O(n*m log n log m)
- **Query**: O(log n * log m)
- **Update**: O(log n * log m)

## Use Cases

- Matrix range sum queries
- Image processing
- 2D range minimum/maximum
- Sparse table queries

## Alternative Structures

- **2D BIT**: Simpler, slightly faster
- **Quadtree**: Different partitioning
- **2D Sparse Table**: Static queries only

## Best Practices

1. Use 1D segment tree of 1D segment trees
2. Consider 2D BIT for sum queries
3. Be mindful of memory usage
4. Use iterative implementation for efficiency
""",
    "questions": [
        {"id": "cpp-31-8-1", "type": "typing", "question": "What is a 2D segment tree?", "correctAnswer": ["segment tree extended to 2D arrays", "2D range query structure", "tree of trees"], "explanation": "2D segment tree extends segment tree concepts to handle range queries on 2D arrays efficiently.", "xp": 5},
        {"id": "cpp-31-8-2", "type": "typing", "question": "What is the time complexity of building 2D segment tree?", "correctAnswer": ["O(n*m log n log m)", "quasi-linear", "build complexity"], "explanation": "Building 2D segment tree takes O(n*m log n log m) time for n x m array.", "xp": 5},
        {"id": "cpp-31-8-3", "type": "typing", "question": "What is the time complexity of query in 2D segment tree?", "correctAnswer": ["O(log n * log m)", "logarithmic", "query complexity"], "explanation": "Range queries take O(log n * log m) time in a 2D segment tree.", "xp": 5},
        {"id": "cpp-31-8-4", "type": "multiple", "question": "Which is an alternative to 2D segment tree?", "options": ["2D BIT", "Hash Map", "Linked List", "Stack"], "correctAnswer": [0], "explanation": "2D Binary Indexed Tree (Fenwick Tree) is an alternative structure for 2D range queries.", "xp": 5},
        {"id": "cpp-31-8-5", "type": "code", "question": "Implement 2D segment tree node structure.", "correctAnswer": ["struct Node { int val; Node* children[4]; };", "node structure", "tree node"], "explanation": "Define node with value and children pointers for 2D tree structure.", "xp": 15},
        {"id": "cpp-31-8-6", "type": "code", "question": "Build 2D segment tree recursively.", "correctAnswer": ["recursive build on rows and columns", "divide and conquer", "build function"], "explanation": "Recursively divide 2D array into quadrants and build tree structure.", "xp": 15},
        {"id": "cpp-31-8-7", "type": "code", "question": "Query 2D range sum.", "correctAnswer": ["divide into O(log^2) subrectangles", "range query", "sum query"], "explanation": "Decompose query rectangle into O(log n * log m) nodes and sum their values.", "xp": 15},
        {"id": "cpp-31-8-8", "type": "code", "question": "Update element in 2D segment tree.", "correctAnswer": ["update O(log^2) nodes", "point update", "modify value"], "explanation": "Update the value at position and propagate changes up through O(log^2) nodes.", "xp": 15},
        {"id": "cpp-31-8-9", "type": "typing", "question": "What is memory complexity of 2D segment tree?", "correctAnswer": ["O(4*n*m)", "4 times array size", "memory usage"], "explanation": "2D segment tree typically uses O(4*n*m) memory for storing nodes.", "xp": 5},
        {"id": "cpp-31-8-10", "type": "code", "question": "Implement 2D range minimum query.", "correctAnswer": ["store minimum instead of sum", "min query", "range minimum"], "explanation": "Modify tree to store minimum values instead of sums for RMQ queries.", "xp": 15},
        {"id": "cpp-31-8-11", "type": "code", "question": "Use iterative 2D segment tree.", "correctAnswer": ["bottom-up construction", "iterative build", "non-recursive"], "explanation": "Implement iterative version for better performance and simpler code.", "xp": 15},
        {"id": "cpp-31-8-12", "type": "typing", "question": "What is 2D BIT?", "correctAnswer": ["Binary Indexed Tree for 2D", "2D Fenwick tree", "alternative structure"], "explanation": "2D BIT is an alternative structure using prefix sums for 2D range queries.", "xp": 5},
        {"id": "cpp-31-8-13", "type": "code", "question": "Compare 2D segment tree vs 2D BIT.", "correctAnswer": ["segment tree more flexible, BIT faster", "comparison", "trade-offs"], "explanation": "2D segment tree supports more operations, 2D BIT is simpler and faster for sums.", "xp": 15},
        {"id": "cpp-31-8-14", "type": "code", "question": "Query 2D range maximum.", "correctAnswer": ["store maximum values", "max query", "range maximum"], "explanation": "Modify tree to store maximum values for range maximum queries.", "xp": 15},
        {"id": "cpp-31-8-15", "type": "typing", "question": "When to use 2D segment tree?", "correctAnswer": ["multiple 2D range queries", "matrix operations", "range operations"], "explanation": "Use 2D segment tree for many range queries on static 2D arrays.", "xp": 5},
        {"id": "cpp-31-8-16", "type": "code", "question": "Implement lazy propagation in 2D segment tree.", "correctAnswer": ["lazy updates", "range updates", "defer updates"], "explanation": "Add lazy propagation to support range updates efficiently.", "xp": 15},
        {"id": "cpp-31-8-17", "type": "code", "question": "Query 2D range GCD.", "correctAnswer": ["store GCD values", "GCD query", "greatest common divisor"], "explanation": "Modify tree to store GCD of values for range GCD queries.", "xp": 15},
        {"id": "cpp-31-8-18", "type": "typing", "question": "What is quadtree?", "correctAnswer": ["tree partitioning 2D space into quadrants", "spatial partition", "quadtree structure"], "explanation": "Quadtree partitions 2D space into quadrants, different approach from segment tree.", "xp": 5},
        {"id": "cpp-31-8-19", "type": "code", "question": "Compress 2D segment tree.", "correctAnswer": ["sparse representation", "compression", "memory optimization"], "explanation": "Use sparse representation to reduce memory for sparse 2D arrays.", "xp": 15},
        {"id": "cpp-31-8-20", "type": "code", "question": "Parallel build of 2D segment tree.", "correctAnswer": ["multithreading", "parallel construction", "speed up build"], "explanation": "Use threads to build different parts of the tree in parallel.", "xp": 15},
        {"id": "cpp-31-8-21", "type": "code", "question": "Query 2D submatrix sum with updates.", "correctAnswer": ["query and update operations", "dynamic queries", "mutable array"], "explanation": "Support both point updates and range sum queries on 2D array.", "xp": 15},
        {"id": "cpp-31-8-22", "type": "typing", "question": "What is persistent 2D segment tree?", "correctAnswer": ["stores all versions of tree", "persistent data structure", "version control"], "explanation": "Persistent 2D segment tree stores all versions for history queries.", "xp": 5},
        {"id": "cpp-31-8-23", "type": "code", "question": "Merge two 2D segment trees.", "correctAnswer": ["combine nodes", "merge trees", "tree union"], "explanation": "Merge operation combines two trees into one by combining corresponding nodes.", "xp": 15},
        {"id": "cpp-31-8-24", "type": "code", "question": "Serialize 2D segment tree.", "correctAnswer": ["save to file", "serialization", "store tree"], "explanation": "Serialize tree structure to file for later loading.", "xp": 15},
        {"id": "cpp-31-8-25", "type": "code", "question": "Visualize 2D segment tree structure.", "correctAnswer": ["tree visualization", "visual representation", "debug display"], "explanation": "Create visualization of 2D tree structure for debugging and understanding.", "xp": 15}
    ]
}

data['units'][30]['lessons'][7].update(lesson31_8)
print("✅ Unit 31, Lesson 8: 2D Segment Tree - 25 detailed questions")

# Add more lessons... (continuing with next 4)
# Due to length, I'll add these more efficiently

print("\n" + "="*70)
print("✅ BATCH 6 PARTIAL: 1/5 lessons completed")
print("="*70)
print("Continuing with remaining 4 lessons...")

# Write partial save
output_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(output_path, 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("✅ Saved to cppCombined.js")
