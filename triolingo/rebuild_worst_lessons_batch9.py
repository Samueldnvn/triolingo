#!/usr/bin/env python3
"""
Rebuild Batch 9 - Continue systematic rebuild
"""
import json
import os

print("🚀 BATCH 9: Continuing systematic rebuild")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Rebuild 3 more lessons
# Unit 45, Lesson 7: std::span
lesson45_7 = {
    "id": "cpp-U45-L7",
    "title": "std::span",
    "unitTitle": "45. Modern C++ Features",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# std::span

Non-owning view over a contiguous sequence of elements.

## Core Concept

std::span provides a view over contiguous data without ownership, similar to pointer + size but safer and more feature-rich.

## Key Properties

- **Non-owning**: Does not own the data
- **Contiguous**: Works with arrays, vectors, strings
- **Lightweight**: Just a pointer and size
- **Copyable**: Can be passed by value

## Common Use Cases

- **Function parameters**: Accept any contiguous container
- **Subranges**: View portion of larger container
- **Zero-copy**: Work with data without copying
- **Interoperability**: Between different containers

## Operations

- **size()**: Number of elements
- **data()**: Pointer to first element
- **front()/back()**: First/last element
- **operator[]**: Random access
- **subspan()**: Create subrange view

## Best Practices

1. Use span for function parameters accepting contiguous data
2. Prefer span<T> over T* + size parameters
3. Pass by value (span is lightweight)
4. Use const_span<T> for read-only views
5. Beware of dangling references
""",
    "questions": [
        {"id": "cpp-45-7-1", "type": "typing", "question": "What is std::span?", "correctAnswer": ["non-owning view over contiguous data", "view", "span"], "explanation": "std::span provides a non-owning view over contiguous data without copying.", "xp": 5},
        {"id": "cpp-45-7-2", "type": "typing", "question": "What does std::span own?", "correctAnswer": ["does not own data", "non-owning", "no ownership"], "explanation": "std::span does not own the data it views.", "xp": 5},
        {"id": "cpp-45-7-3", "type": "multiple", "question": "What containers work with std::span?", "options": ["Arrays, vectors, strings", "Maps, sets", "Lists, deques", "All containers"], "correctAnswer": [0], "explanation": "std::span works with any contiguous container like arrays, vectors, and strings.", "xp": 5},
        {"id": "cpp-45-7-4", "type": "code", "question": "Create span from vector.", "correctAnswer": ["std::span<int> s(vec)", "span from vector", "create span"], "explanation": "Construct span from vector for non-owning view.", "xp": 15},
        {"id": "cpp-45-7-5", "type": "code", "question": "Create span from C array.", "correctAnswer": ["std::span<int> s(arr, size)", "span from array", "C array"], "explanation": "Create span from C array with pointer and size.", "xp": 15},
        {"id": "cpp-45-7-6", "type": "code", "question": "Get size of span.", "correctAnswer": ["s.size()", "size", "element count"], "explanation": "size() returns number of elements in span.", "xp": 15},
        {"id": "cpp-45-7-7", "type": "code", "question": "Access element by index.", "correctAnswer": ["s[index]", "operator[]", "element access"], "explanation": "Use operator[] for random access to elements.", "xp": 15},
        {"id": "cpp-45-7-8", "type": "code", "question": "Get pointer to data.", "correctAnswer": ["s.data()", "data pointer", "raw pointer"], "explanation": "data() returns pointer to first element.", "xp": 15},
        {"id": "cpp-45-7-9", "type": "code", "question": "Iterate over span.", "correctAnswer": ["for (auto& x : s)", "range for", "iteration"], "explanation": "Use range-based for loop to iterate over span.", "xp": 15},
        {"id": "cpp-45-7-10", "type": "code", "question": "Create subrange with subspan.", "correctAnswer": ["s.subspan(offset, count)", "subrange", "subspan"], "explanation": "subspan() creates view of portion of original span.", "xp": 15},
        {"id": "cpp-45-7-11", "type": "code", "question": "Use span as function parameter.", "correctAnswer": ["void func(std::span<int> data)", "parameter", "function argument"], "explanation": "Use span as parameter to accept any contiguous container.", "xp": 15},
        {"id": "cpp-45-7-12", "type": "code", "question": "Create const span.", "correctAnswer": ["std::span<const int>", "const span", "read-only"], "explanation": "Use const span for read-only view.", "xp": 15},
        {"id": "cpp-45-7-13", "type": "code", "question": "Get first element.", "correctAnswer": ["s.front()", "first element", "front"], "explanation": "front() returns reference to first element.", "xp": 15},
        {"id": "cpp-45-7-14", "type": "code", "question": "Get last element.", "correctAnswer": ["s.back()", "last element", "back"], "explanation": "back() returns reference to last element.", "xp": 15},
        {"id": "cpp-45-7-15", "type": "code", "question": "Check if span is empty.", "correctAnswer": ["s.empty()", "empty check", "is empty"], "explanation": "empty() returns true if span has no elements.", "xp": 15},
        {"id": "cpp-45-7-16", "type": "code", "question": "Span with dynamic extent.", "correctAnswer": ["std::span<int>", "dynamic extent", "runtime size"], "explanation": "Span with dynamic extent has size known at runtime.", "xp": 15},
        {"id": "cpp-45-7-17", "type": "code", "question": "Span with fixed extent.", "correctAnswer": ["std::span<int, N>", "fixed extent", "compile-time size"], "explanation": "Span with fixed extent has size known at compile-time.", "xp": 15},
        {"id": "cpp-45-7-18", "type": "code", "question": "Convert vector to span.", "correctAnswer": ["std::span<int>(vec)", "convert", "cast"], "explanation": "Implicit conversion from vector to span.", "xp": 15},
        {"id": "cpp-45-7-19", "type": "code", "question": "Span from string literal.", "correctAnswer": ["std::span<char> s = \"hello\"", "string span", "literal"], "explanation": "Create span from string literal for character data.", "xp": 15},
        {"id": "cpp-45-7-20", "type": "code", "question": "Find element in span.", "correctAnswer": ["std::find(s.begin(), s.end(), value)", "find", "search"], "explanation": "Use std::find to search for element in span.", "xp": 15},
        {"id": "cpp-45-7-21", "type": "code", "question": "Span and algorithms.", "correctAnswer": ["pass span to algorithms", "STL algorithms", "algorithms"], "explanation": "Spans work seamlessly with STL algorithms.", "xp": 15},
        {"id": "cpp-45-7-22", "type": "code", "question": "Span for byte data.", "correctAnswer": ["std::span<std::byte>", "byte span", "raw data"], "explanation": "Use span of byte for raw binary data.", "xp": 15},
        {"id": "cpp-45-7-23", "type": "code", "question": "Span for serialization.", "correctAnswer": ["view contiguous data for writing", "serialize", "data view"], "explanation": "Use span to view data for serialization without copying.", "xp": 15},
        {"id": "cpp-45-7-24", "type": "code", "question": "Debug span contents.", "correctAnswer": ["print elements", "debug", "display"], "explanation": "Iterate and print span elements for debugging.", "xp": 15},
        {"id": "cpp-45-7-25", "type": "typing", "question": "When to use std::span?", "correctAnswer": ["function parameters accepting contiguous data", "zero-copy view", "non-owning view"], "explanation": "Use span when you need to accept any contiguous container without copying.", "xp": 5}
    ]
}

data['units'][44]['lessons'][6].update(lesson45_7)
print("✅ Unit 45, Lesson 7: std::span - 25 detailed questions")

# Unit 46, Lesson 7: Testing
lesson46_7 = {
    "id": "cpp-U46-L7",
    "title": "Testing",
    "unitTitle": "46. Best Practices & Tools",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Testing in C++

Writing and running tests to ensure code quality.

## Testing Types

- **Unit tests**: Test individual functions/classes
- **Integration tests**: Test component interactions
- **Regression tests**: Catch bugs that return
- **Performance tests**: Measure speed and resources

## Testing Frameworks

- **Catch2**: Header-only, easy to use
- **Google Test**: Full-featured, industry standard
- **Boost.Test**: Part of Boost libraries
- **CppUTest**: Lightweight, embedded-friendly

## Best Practices

1. **Test-driven development**: Write tests first
2. **Arrange-Act-Assert**: Clear test structure
3. **Independence**: Tests should not depend on each other
4. **Fast**: Tests should run quickly
5. **Descriptive**: Test names should explain what they test

## Test Coverage

- **Statement coverage**: Lines of code executed
- **Branch coverage**: Decision points tested
- **Condition coverage**: Boolean conditions tested
- **Path coverage**: All possible paths tested

## Continuous Integration

- **Automated**: Run tests on every commit
- **Fast feedback**: Quick failure detection
- **Coverage reports**: Track test coverage
- **CI/CD**: Integrate with deployment pipeline
""",
    "questions": [
        {"id": "cpp-46-7-1", "type": "typing", "question": "What is unit testing?", "correctAnswer": ["testing individual functions or classes", "unit test", "isolate testing"], "explanation": "Unit testing tests individual functions or classes in isolation.", "xp": 5},
        {"id": "cpp-46-7-2", "type": "typing", "question": "What is test-driven development?", "correctAnswer": ["write tests before code", "TDD", "test first"], "explanation": "TDD is writing tests before implementing code.", "xp": 5},
        {"id": "cpp-46-7-3", "type": "multiple", "question": "What is Arrange-Act-Assert?", "options": ["Test structure pattern", "Testing framework", "Assertion method", "Test runner"], "correctAnswer": [0], "explanation": "Arrange-Act-Assert is a pattern for structuring tests.", "xp": 5},
        {"id": "cpp-46-7-4", "type": "code", "question": "Write simple unit test with Catch2.", "correctAnswer": ["TEST_CASE(\"test name\") { REQUIRE(x == y); }", "Catch2 test", "unit test"], "explanation": "Catch2 uses TEST_CASE macro and REQUIRE for assertions.", "xp": 15},
        {"id": "cpp-46-7-5", "type": "code", "question": "Write unit test with Google Test.", "correctAnswer": ["TEST(TestName, TestCase) { EXPECT_EQ(x, y); }", "Google Test", "gtest"], "explanation": "Google Test uses TEST macro and EXPECT_EQ for assertions.", "xp": 15},
        {"id": "cpp-46-7-6", "type": "code", "question": "Assert equality in test.", "correctAnswer": ["REQUIRE(a == b) or EXPECT_EQ(a, b)", "assert equal", "equality check"], "explanation": "Use REQUIRE or EXPECT_EQ to check equality in tests.", "xp": 15},
        {"id": "cpp-46-7-7", "type": "code", "question": "Test exception handling.", "correctAnswer": ["REQUIRE_THROWS(expr) or EXPECT_THROW(expr)", "exception test", "throw"], "explanation": "Test that code throws expected exception.", "xp": 15},
        {"id": "cpp-46-7-8", "type": "code", "question": "Test floating point values.", "correctAnswer": ["REQUIRE_APPROX(a) == b", "floating point", "approximate"], "explanation": "Use approximate comparison for floating point values.", "xp": 15},
        {"id": "cpp-46-7-9", "type": "code", "question": "Setup and teardown in tests.", "correctAnswer": ["use fixtures or setup/teardown methods", "fixture", "setup"], "explanation": "Use fixtures or setup/teardown methods for test initialization.", "xp": 15},
        {"id": "cpp-46-7-10", "type": "typing", "question": "What is integration testing?", "correctAnswer": ["testing component interactions", "integration", "component testing"], "explanation": "Integration testing tests how components work together.", "xp": 5},
        {"id": "cpp-46-7-11", "type": "code", "question": "Mock dependencies in tests.", "correctAnswer": ["use mock objects or fakes", "mock", "fake"], "explanation": "Use mock objects to isolate code under test.", "xp": 15},
        {"id": "cpp-46-7-12", "type": "code", "question": "Parametrized tests.", "correctAnswer": ["run same test with multiple inputs", "parametrized", "data-driven"], "explanation": "Parametrized tests run same logic with different inputs.", "xp": 15},
        {"id": "cpp-46-7-13", "type": "code", "question": "Test coverage analysis.", "correctAnswer": ["use gcov or similar tool", "coverage", "gcov"], "explanation": "Use coverage tools to measure test coverage.", "xp": 15},
        {"id": "cpp-46-7-14", "type": "typing", "question": "What is statement coverage?", "correctAnswer": ["percentage of code lines executed", "line coverage", "code coverage"], "explanation": "Statement coverage measures what percentage of code lines are executed.", "xp": 5},
        {"id": "cpp-46-7-15", "type": "code", "question": "Run tests in CI/CD.", "correctAnswer": ["GitHub Actions or similar", "CI", "continuous integration"], "explanation": "Integrate tests into CI/CD pipeline for automation.", "xp": 15},
        {"id": "cpp-46-7-16", "type": "code", "question": "Debug failing tests.", "correctAnswer": ["use debug output and breakpoints", "debug", "troubleshoot"], "explanation": "Use debug output and breakpoints to investigate failures.", "xp": 15},
        {"id": "cpp-46-7-17", "type": "code", "question": "Performance testing.", "correctAnswer": ["measure execution time", "benchmark", "performance"], "explanation": "Measure execution time to ensure performance requirements.", "xp": 15},
        {"id": "cpp-46-7-18", "type": "code", "question": "Test for edge cases.", "correctAnswer": ["empty, null, boundary values", "edge case", "boundary"], "explanation": "Test edge cases like empty inputs and boundary values.", "xp": 15},
        {"id": "cpp-46-7-19", "type": "code", "question": "Regression testing.", "correctAnswer": ["ensure old bugs don't return", "regression", "prevent reoccurrence"], "explanation": "Regression tests ensure fixed bugs don't reappear.", "xp": 15},
        {"id": "cpp-46-7-20", "type": "typing", "question": "What is flaky test?", "correctAnswer": ["test that passes/fails inconsistently", "flaky", "non-deterministic"], "explanation": "Flaky tests have inconsistent results across runs.", "xp": 5},
        {"id": "cpp-46-7-21", "type": "code", "question": "Fix flaky tests.", "correctAnswer": ["eliminate external dependencies", "fix flaky", "deterministic"], "explanation": "Remove external dependencies and non-deterministic behavior.", "xp": 15},
        {"id": "cpp-46-7-22", "type": "code", "question": "Test fixtures.", "correctAnswer": ["shared test setup", "fixture", "test context"], "explanation": "Fixtures provide shared setup for multiple tests.", "xp": 15},
        {"id": "cpp-46-7-23", "type": "code", "question": "Organize test suites.", "correctAnswer": ["group related tests", "test suite", "organization"], "explanation": "Group related tests into test suites for organization.", "xp": 15},
        {"id": "cpp-46-7-24", "type": "code", "question": "Test logging.", "correctAnswer": ["output test progress and results", "logging", "verbose output"], "explanation": "Log test execution for debugging and reporting.", "xp": 15},
        {"id": "cpp-46-7-25", "type": "typing", "question": "Why test?", "correctAnswer": ["ensure code quality and catch bugs early", "quality assurance", "bug prevention"], "explanation": "Testing ensures code quality and catches bugs early.", "xp": 5}
    ]
}

data['units'][45]['lessons'][6].update(lesson46_7)
print("✅ Unit 46, Lesson 7: Testing - 25 detailed questions")

# Unit 26, Lesson 5: B-Trees
lesson26_5 = {
    "id": "cpp-U26-L5",
    "title": "B-Trees",
    "unitTitle": "26. Advanced Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# B-Trees

Balanced tree data structure optimized for disk storage.

## Core Concept

B-trees are balanced search trees with high branching factor, minimizing disk I/O for large datasets.

## Properties

- **Balanced**: All leaves at same depth
- **M-way**: Each node has up to m-1 keys
- **Sorted**: Keys within nodes are sorted
- **Multi-level**: Multiple levels between root and leaves

## Node Structure

- **Internal nodes**: Pointers to children + keys
- **Leaf nodes**: All actual data
- **Order m**: Maximum number of children

## Operations

- **Search**: O(log_m n)
- **Insert**: O(log_m n)
- **Delete**: O(log_m n)
- **Range query**: O(log_m n + k)

## Applications

- **Databases**: Index structures
- **Filesystems**: Directory structures
- **Databases**: Database tables
- **Caches**: Multi-level caches

## Variants

- **B+ Tree**: Data only in leaves
- **B* Tree**: Better space utilization
- **2-3 Tree**: Specific case of B-tree
""",
    "questions": [
        {"id": "cpp-26-5-1", "type": "typing", "question": "What is a B-tree?", "correctAnswer": ["balanced tree optimized for disk storage", "m-way tree", "balanced search tree"], "explanation": "B-tree is balanced tree with high branching factor, optimized for disk storage.", "xp": 5},
        {"id": "cpp-26-5-2", "type": "typing", "question": "What is order of B-tree?", "correctAnswer": ["maximum number of children", "m", "branching factor"], "explanation": "Order m is maximum number of children a node can have.", "xp": 5},
        {"id": "cpp-26-5-3", "type": "multiple", "question": "Where is data stored in B+ tree?", "options": ["Only in leaf nodes", "All nodes", "Only root", "Internal nodes"], "correctAnswer": [0], "explanation": "B+ tree stores all data only in leaf nodes.", "xp": 5},
        {"id": "cpp-26-5-4", "type": "typing", "question": "What is time complexity of B-tree operations?", "correctAnswer": ["O(log_m n)", "logarithmic", "O(log n)"], "explanation": "B-tree operations are O(log_m n) where m is order.", "xp": 5},
        {"id": "cpp-26-5-5", "type": "code", "question": "Search in B-tree.", "correctAnswer": ["search internal nodes then leaves", "search operation", "find key"], "explanation": "Start at root, traverse internal nodes, reach leaf for data.", "xp": 15},
        {"id": "cpp-26-5-6", "type": "code", "question": "Insert into B-tree.", "correctAnswer": ["insert then split if needed", "insert operation", "add key"], "explanation": "Insert key and split node if it exceeds capacity.", "xp": 15},
        {"id": "cpp-26-5-7", "type": "code", "question": "Delete from B-tree.", "correctAnswer": ["remove then rebalance", "delete operation", "remove key"], "explanation": "Delete key and rebalance tree if needed.", "xp": 15},
        {"id": "cpp-26-5-8", "type": "code", "question": "Split node in B-tree.", "correctAnswer": ["divide into two nodes", "split", "node splitting"], "explanation": "Split node by promoting middle key to parent.", "xp": 15},
        {"id": "cpp-26-5-9", "type": "code", "question": "Find minimum in B-tree.", "correctAnswer": ["traverse leftmost path", "find min", "minimum"], "explanation": "Go to leftmost leaf to find minimum value.", "xp": 15},
        {"id": "cpp-26-5-10", "type": "code", "question": "Find maximum in B-tree.", "correctAnswer": ["traverse rightmost path", "find max", "maximum"], "explanation": "Go to rightmost leaf to find maximum value.", "xp": 15},
        {"id": "cpp-26-5-11", "type": "code", "question": "Range query in B-tree.", "correctAnswer": ["in-order traversal", "range search", "query"], "explanation": "Use in-order traversal to get keys in range.", "xp": 15},
        {"id": "cpp-26-5-12", "type": "typing", "question": "Why B-trees for databases?", "correctAnswer": ["minimize disk I/O", "efficient storage", "disk optimized"], "explanation": "B-trees minimize disk I/O by reducing tree height.", "xp": 5},
        {"id": "cpp-26-5-13", "type": "code", "question": "Compare B-tree vs B+ tree.", "correctAnswer": ["B+ has data only in leaves", "comparison", "variant"], "explanation": "B+ tree stores all data only in leaves, B-tree stores in all nodes.", "xp": 15},
        {"id": "cpp-26-5-14", "type": "code", "question": "Calculate B-tree height.", "correctAnswer": ["O(log_m n)", "height calculation", "tree height"], "explanation": "Height is logarithmic in number of elements.", "xp": 15},
        {"id": "cpp-26-5-15", "type": "code", "question": "Balance B-tree.", "correctAnswer": ["maintain node capacity limits", "balance", "rebalance"], "explanation": "Ensure nodes are between minimum and maximum capacity.", "xp": 15},
        {"id": "cpp-26-5-16", "type": "code", "question": "B-tree for filesystem.", "correctAnswer": ["directory structure", "filesystem", "index"], "explanation": "B-trees organize directories in filesystems.", "xp": 15},
        {"id": "cpp-26-5-17", "type": "code", "question": "Disk block size and B-tree.", "correctAnswer": ["match node size to block", "disk block", "block size"], "explanation": "Size B-tree nodes to match disk block size.", "xp": 15},
        {"id": "cpp-26-5-18", "type": "code", "question": "Visualize B-tree structure.", "correctAnswer": ["print tree levels", "visualize", "display"], "explanation": "Print tree showing keys and connections at each level.", "xp": 15},
        {"id": "cpp-26-5-19", "type": "code", "question": "B-tree iterator.", "correctAnswer": ["in-order traversal", "iterator", "traverse"], "explanation": "Iterator performs in-order traversal of tree.", "xp": 15},
        {"id": "cpp-26-5-20", "type": "typing", "question": "What is 2-3 tree?", "correctAnswer": ["B-tree with order 3", "specific B-tree", "2-3"], "explanation": "2-3 tree is B-tree where each node has 2 or 3 children.", "xp": 5},
        {"id": "cpp-26-5-21", "type": "code", "question": "Debug B-tree insertion.", "correctAnswer": ["track node splits", "debug", "verify"], "explanation": "Track node splits during insertion for debugging.", "xp": 15},
        {"id": "cpp-26-5-22", "type": "code", "question": "Bulk insert into B-tree.", "correctAnswer": ["sort then insert", "bulk load", "batch"], "explanation": "Sort data first for efficient bulk insertion.", "xp": 15},
        {"id": "cpp-26-5-23", "type": "code", "question": "B-tree caching.", "correctAnswer": ["cache frequently accessed nodes", "cache", "optimize"], "explanation": "Cache internal nodes in memory for faster access.", "xp": 15},
        {"id": "cpp-26-5-24", "type": "code", "question": "Persistence of B-tree.", "correctAnswer": ["write to disk", "persist", "save"], "explanation": "Write tree structure to disk for persistence.", "xp": 15},
        {"id": "cpp-26-5-25", "type": "typing", "question": "When to use B-tree?", "correctAnswer": ["large datasets on disk", "databases", "filesystems"], "explanation": "Use B-tree for large datasets stored on disk.", "xp": 5}
    ]
}

data['units'][25]['lessons'][4].update(lesson26_5)
print("✅ Unit 26, Lesson 5: B-Trees - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 9 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 45, Lesson 7: std::span")
print("  - Unit 46, Lesson 7: Testing")
print("  - Unit 26, Lesson 5: B-Trees")
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
