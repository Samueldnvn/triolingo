#!/usr/bin/env python3
"""
Build Unit 21: Data Structures (Lessons 1-3)
3 lessons with 25 questions each (75 total)
Heavy emphasis on code questions (~70% = 52.5 code questions)
"""
import json

print("🚀 Building C++ Unit 21: Data Structures (Lessons 1-3)")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: Static Arrays
# ============================================================================
lesson1_questions = [
    {"id": "cpp-21-1-1", "type": "typing", "question": "What is a static array?", "correctAnswer": ["fixed size", "compile time size", "stack allocated"], "explanation": "Static arrays have fixed size.", "xp": 5},
    {"id": "cpp-21-1-2", "type": "typing", "question": "Where are static arrays allocated?", "correctAnswer": ["stack", "automatic storage"], "explanation": "Static arrays on stack.", "xp": 5},
    {"id": "cpp-21-1-3", "type": "typing", "question": "Can static array size change?", "correctAnswer": ["no", "cannot"], "explanation": "Static array size is fixed.", "xp": 5},
    {"id": "cpp-21-1-4", "type": "multiple", "question": "Array size known at?", "options": ["compile time", "runtime", "both", "never"], "correctAnswer": [0], "explanation": "Size known at compile time.", "xp": 5},
    {"id": "cpp-21-1-5", "type": "multiple", "question": "Array bounds checking?", "options": ["no", "yes", "sometimes", "always"], "correctAnswer": [0], "explanation": "No bounds checking.", "xp": 5},
    {"id": "cpp-21-1-6", "type": "code", "question": "Declare static array.", "correctAnswer": ["int arr[10];", "static array"],
        "explanation": "type name[size]", "xp": 15},
    {"id": "cpp-21-1-7", "type": "code", "question": "Initialize static array.", "correctAnswer": ["int arr[5] = {1, 2, 3, 4, 5};", "initialize array"],
        "explanation": "arr[size] = {values}", "xp": 15},
    {"id": "cpp-21-1-8", "type": "code", "question": "Zero initialize array.", "correctAnswer": ["int arr[10] = {0};", "zero init"],
        "explanation": "{0} zeroes all.", "xp": 15},
    {"id": "cpp-21-1-9", "type": "code", "question": "Access array element.", "correctAnswer": ["int x = arr[0];", "access element"],
        "explanation": "arr[index]", "xp": 15},
    {"id": "cpp-21-1-10", "type": "code", "question": "Modify array element.", "correctAnswer": ["arr[0] = 42;", "modify element"],
        "explanation": "arr[index] = value", "xp": 15},
    {"id": "cpp-21-1-11", "type": "code", "question": "Loop through array.", "correctAnswer": ["for (int i = 0; i < 10; i++) { arr[i] = i; }", "loop array"],
        "explanation": "for loop with index.", "xp": 15},
    {"id": "cpp-21-1-12", "type": "code", "question": "Range-based for.", "correctAnswer": ["for (int x : arr) { cout << x << endl; }", "range for"],
        "explanation": "for (type item : array)", "xp": 15},
    {"id": "cpp-21-1-13", "type": "code", "question": "Get array size.", "correctAnswer": ["int size = sizeof(arr) / sizeof(arr[0]);", "array size"],
        "explanation": "sizeof(arr)/sizeof(type)", "xp": 15},
    {"id": "cpp-21-1-14", "type": "code", "question": "std::array.", "correctAnswer": ["std::array<int, 10> arr;", "std::array"],
        "explanation": "std::array<T, N>", "xp": 15},
    {"id": "cpp-21-1-15", "type": "code", "question": "std::array size.", "correctAnswer": ["int size = arr.size();", "std::array size"],
        "explanation": "arr.size()", "xp": 15},
    {"id": "cpp-21-1-16", "type": "code", "question": "std::array data.", "correctAnswer": ["int* ptr = arr.data();", "std::array data"],
        "explanation": "arr.data() returns pointer.", "xp": 15},
    {"id": "cpp-21-1-17", "type": "code", "question": "std::array at.", "correctAnswer": ["int x = arr.at(0);", "bounds checked"],
        "explanation": "arr.at() bounds checked.", "xp": 15},
    {"id": "cpp-21-1-18", "type": "code", "question": "std::array fill.", "correctAnswer": ["arr.fill(0);", "fill array"],
        "explanation": "arr.fill(value)", "xp": 15},
    {"id": "cpp-21-1-19", "type": "code", "question": "std::array swap.", "correctAnswer": ["arr1.swap(arr2);", "swap arrays"],
        "explanation": "arr1.swap(arr2)", "xp": 15},
    {"id": "cpp-21-1-20", "type": "code", "question": "Const array.", "correctAnswer": ["const int arr[10] = {1, 2, 3};", "const array"],
        "explanation": "const prevents modification.", "xp": 15},
    {"id": "cpp-21-1-21", "type": "code", "question": "Array as parameter.", "correctAnswer": ["void func(int arr[], int size)", "array parameter"],
        "explanation": "type arr[] or type* arr", "xp": 15},
    {"id": "cpp-21-1-22", "type": "code", "question": "Return array pointer.", "correctAnswer": ["int* func() { static int arr[10]; return arr; }", "return array"],
        "explanation": "Return static array pointer.", "xp": 15},
    {"id": "cpp-21-1-23", "type": "code", "question": "Array decay to pointer.", "correctAnswer": ["int* ptr = arr;", "array to pointer"],
        "explanation": "Array decays to pointer.", "xp": 15},
    {"id": "cpp-21-1-24", "type": "code", "question": "constexpr array.", "correctAnswer": ["constexpr int arr[5] = {1, 2, 3, 4, 5};", "constexpr array"],
        "explanation": "constexpr for compile-time.", "xp": 15},
    {"id": "cpp-21-1-25", "type": "code", "question": "Alignas array.", "correctAnswer": ["alignas(64) int arr[16];", "aligned array"],
        "explanation": "alignas(N) type", "xp": 15}
]

lesson1 = {
    "id": "cpp-U21-L1", "title": "Static Arrays", "unitTitle": "21. Data Structures", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Static Arrays

Arrays with fixed size known at compile time.

## C-Style Static Arrays

```cpp
// Declaration
int arr[10];  // 10 integers

// Initialization
int arr[5] = {1, 2, 3, 4, 5};
int arr[] = {1, 2, 3, 4, 5};  // Size inferred

// Zero initialization
int arr[10] = {0};  // All elements set to 0

// Access
int x = arr[0];  // First element
arr[0] = 42;     // Modify element
```

## Array Size

```cpp
// Get size of C-style array
int size = sizeof(arr) / sizeof(arr[0]);

// Loop through array
for (int i = 0; i < size; i++) {
    arr[i] = i * 2;
}

// Range-based for loop
for (int x : arr) {
    std::cout << x << std::endl;
}
```

## std::array

```cpp
#include <array>

// Declaration
std::array<int, 10> arr;

// Initialization
std::array<int, 5> arr = {1, 2, 3, 4, 5};

// Access
int x = arr[0];       // No bounds checking
int y = arr.at(0);    // Bounds checking

// Methods
int size = arr.size();        // Returns 10
int* ptr = arr.data();        // Raw pointer
arr.fill(0);                  // Fill with value
arr1.swap(arr2);              // Swap arrays
```

## Arrays in Functions

```cpp
// C-style (decays to pointer)
void func(int arr[], int size);
void func(int* arr, int size);

// std::array by reference
void func(std::array<int, 10>& arr);

// Template for any std::array
template<size_t N>
void func(std::array<int, N>& arr);
```
""",
    "questions": lesson1_questions
}

# ============================================================================
# LESSON 2: Dynamic Arrays
# ============================================================================
lesson2_questions = [
    {"id": "cpp-21-2-1", "type": "typing", "question": "What is a dynamic array?", "correctAnswer": ["runtime size", "heap allocated"], "explanation": "Dynamic array size set at runtime.", "xp": 5},
    {"id": "cpp-21-2-2", "type": "typing", "question": "Where are dynamic arrays allocated?", "correctAnswer": ["heap", "free store", "dynamic storage"], "explanation": "Dynamic arrays on heap.", "xp": 5},
    {"id": "cpp-21-2-3", "type": "typing", "question": "How to allocate dynamic array?", "correctAnswer": ["new", "malloc"], "explanation": "Use new or malloc.", "xp": 5},
    {"id": "cpp-21-2-4", "type": "multiple", "question": "Must deallocate?", "options": ["yes", "no", "sometimes", "never"], "correctAnswer": [0], "explanation": "Must free memory.", "xp": 5},
    {"id": "cpp-21-2-5", "type": "multiple", "question": "std::vector is?", "options": ["dynamic array", "static array", "linked list", "stack"], "correctAnswer": [0], "explanation": "vector is dynamic array.", "xp": 5},
    {"id": "cpp-21-2-6", "type": "code", "question": "Allocate dynamic array.", "correctAnswer": ["int* arr = new int[10];", "new array"],
        "explanation": "new type[size]", "xp": 15},
    {"id": "cpp-21-2-7", "type": "code", "question": "Free dynamic array.", "correctAnswer": ["delete[] arr;", "delete array"],
        "explanation": "delete[] arr", "xp": 15},
    {"id": "cpp-21-2-8", "type": "code", "question": "Initialize dynamic array.", "correctAnswer": ["int* arr = new int[5]{1, 2, 3, 4, 5};", "initialize new"],
        "explanation": "new type[size]{values}", "xp": 15},
    {"id": "cpp-21-2-9", "type": "code", "question": "Allocate with malloc.", "correctAnswer": ["int* arr = (int*)malloc(sizeof(int) * 10);", "malloc array"],
        "explanation": "malloc(sizeof(type) * size)", "xp": 15},
    {"id": "cpp-21-2-10", "type": "code", "question": "Free with free.", "correctAnswer": ["free(arr);", "free malloc"],
        "explanation": "free(ptr)", "xp": 15},
    {"id": "cpp-21-2-11", "type": "code", "question": "Realloc array.", "correctAnswer": ["arr = (int*)realloc(arr, new_size * sizeof(int));", "realloc"],
        "explanation": "realloc(ptr, new_size)", "xp": 15},
    {"id": "cpp-21-2-12", "type": "code", "question": "Check malloc.", "correctAnswer": ["if (arr == nullptr) { /* handle */ }", "check null"],
        "explanation": "Check for nullptr.", "xp": 15},
    {"id": "cpp-21-2-13", "type": "code", "question": "std::vector declaration.", "correctAnswer": ["std::vector<int> vec;", "vector"],
        "explanation": "std::vector<type>", "xp": 15},
    {"id": "cpp-21-2-14", "type": "code", "question": "Vector with size.", "correctAnswer": ["std::vector<int> vec(10);", "vector size"],
        "explanation": "vector(size)", "xp": 15},
    {"id": "cpp-21-2-15", "type": "code", "question": "Vector with init.", "correctAnswer": ["std::vector<int> vec(10, 0);", "vector init"],
        "explanation": "vector(size, value)", "xp": 15},
    {"id": "cpp-21-2-16", "type": "code", "question": "Vector push_back.", "correctAnswer": ["vec.push_back(42);", "push back"],
        "explanation": "push_back(value)", "xp": 15},
    {"id": "cpp-21-2-17", "type": "code", "question": "Vector pop_back.", "correctAnswer": ["vec.pop_back();", "pop back"],
        "explanation": "pop_back()", "xp": 15},
    {"id": "cpp-21-2-18", "type": "code", "question": "Vector size.", "correctAnswer": ["size_t size = vec.size();", "vector size"],
        "explanation": "size()", "xp": 15},
    {"id": "cpp-21-2-19", "type": "code", "question": "Vector capacity.", "correctAnswer": ["size_t cap = vec.capacity();", "vector capacity"],
        "explanation": "capacity()", "xp": 15},
    {"id": "cpp-21-2-20", "type": "code", "question": "Vector reserve.", "correctAnswer": ["vec.reserve(100);", "reserve capacity"],
        "explanation": "reserve(n)", "xp": 15},
    {"id": "cpp-21-2-21", "type": "code", "question": "Vector resize.", "correctAnswer": ["vec.resize(20);", "resize"],
        "explanation": "resize(n)", "xp": 15},
    {"id": "cpp-21-2-22", "type": "code", "question": "Vector clear.", "correctAnswer": ["vec.clear();", "clear vector"],
        "explanation": "clear()", "xp": 15},
    {"id": "cpp-21-2-23", "type": "code", "question": "Vector empty.", "correctAnswer": ["if (vec.empty())", "check empty"],
        "explanation": "empty()", "xp": 15},
    {"id": "cpp-21-2-24", "type": "code", "question": "Vector access.", "correctAnswer": ["int x = vec[0];", "vector access"],
        "explanation": "vec[index]", "xp": 15},
    {"id": "cpp-21-2-25", "type": "code", "question": "Vector at.", "correctAnswer": ["int x = vec.at(0);", "vector at"],
        "explanation": "vec.at() bounds checked.", "xp": 15}
]

lesson2 = {
    "id": "cpp-U21-L2", "title": "Dynamic Arrays", "unitTitle": "21. Data Structures", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Dynamic Arrays

Arrays with size determined at runtime.

## Manual Dynamic Arrays (C-style)

```cpp
// Allocate
int* arr = new int[10];  // Using new
int* arr = (int*)malloc(sizeof(int) * 10);  // Using malloc

// Initialize
int* arr = new int[5]{1, 2, 3, 4, 5};

// Check allocation
if (arr == nullptr) {
    // Handle allocation failure
}

// Use
arr[0] = 42;

// Resize (using realloc)
arr = (int*)realloc(arr, new_size * sizeof(int));

// Deallocate
delete[] arr;   // Using delete[]
free(arr);      // Using free
```

## std::vector

```cpp
#include <vector>

// Create vector
std::vector<int> vec;              // Empty
std::vector<int> vec(10);          // 10 elements, default initialized
std::vector<int> vec(10, 0);       // 10 elements, all 0
std::vector<int> vec = {1, 2, 3};  // Initialize list

// Add elements
vec.push_back(42);     // Add to end
vec.emplace_back(42);  // Construct in place

// Remove elements
vec.pop_back();        // Remove last

// Size and capacity
size_t size = vec.size();      // Number of elements
size_t cap = vec.capacity();   // Allocated capacity

// Reserve space (avoid reallocations)
vec.reserve(100);

// Resize
vec.resize(20);      // Resize, default fill
vec.resize(20, 0);   // Resize, fill with 0

// Access
int x = vec[0];      // No bounds check
int y = vec.at(0);   // Bounds check

// Clear
vec.clear();         // Remove all elements
bool empty = vec.empty();
```

## RAII Wrapper for Dynamic Array

```cpp
class DynamicArray {
    int* data;
    size_t capacity;
    size_t size;

public:
    DynamicArray(size_t cap) : capacity(cap), size(0) {
        data = new int[cap];
    }

    ~DynamicArray() {
        delete[] data;
    }

    void push_back(int value) {
        if (size < capacity) {
            data[size++] = value;
        }
    }
};
```
""",
    "questions": lesson2_questions
}

# ============================================================================
# LESSON 3: Multidimensional Arrays
# ============================================================================
lesson3_questions = [
    {"id": "cpp-21-3-1", "type": "typing", "question": "What is 2D array?", "correctAnswer": ["array of arrays", "matrix", "grid"], "explanation": "2D array is array of arrays.", "xp": 5},
    {"id": "cpp-21-3-2", "type": "typing", "question": "2D array memory?", "correctAnswer": ["row-major", "contiguous"], "explanation": "Row-major order.", "xp": 5},
    {"id": "cpp-21-3-3", "type": "typing", "question": "Access 2D element?", "correctAnswer": ["arr[i][j]", "arr[row][col]"], "explanation": "arr[row][col]", "xp": 5},
    {"id": "cpp-21-3-4", "type": "multiple", "question": "2D array size?", "options": ["rows x cols", "rows + cols", "rows * cols", "both"], "correctAnswer": [0], "explanation": "rows x columns.", "xp": 5},
    {"id": "cpp-21-3-5", "type": "multiple", "question": "Dynamic 2D array?", "options": ["pointer to pointer", "2D new", "vector of vectors", "all"], "correctAnswer": [3], "explanation": "Multiple ways.", "xp": 5},
    {"id": "cpp-21-3-6", "type": "code", "question": "Declare 2D array.", "correctAnswer": ["int arr[3][4];", "2D array"],
        "explanation": "type rows[cols]", "xp": 15},
    {"id": "cpp-21-3-7", "type": "code", "question": "Initialize 2D array.", "correctAnswer": ["int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};", "init 2D"],
        "explanation": "{{row1}, {row2}}", "xp": 15},
    {"id": "cpp-21-3-8", "type": "code", "question": "Access 2D element.", "correctAnswer": ["int x = arr[1][2];", "2D access"],
        "explanation": "arr[row][col]", "xp": 15},
    {"id": "cpp-21-3-9", "type": "code", "question": "Modify 2D element.", "correctAnswer": ["arr[0][1] = 42;", "2D modify"],
        "explanation": "arr[row][col] = value", "xp": 15},
    {"id": "cpp-21-3-10", "type": "code", "question": "Loop 2D array.", "correctAnswer": ["for (int i = 0; i < rows; i++) { for (int j = 0; j < cols; j++) { arr[i][j] = i * j; } }", "nested loop"],
        "explanation": "Nested for loops.", "xp": 15},
    {"id": "cpp-21-3-11", "type": "code", "question": "Pass 2D array to function.", "correctAnswer": ["void func(int arr[][4], int rows)", "2D parameter"],
        "explanation": "type arr[][cols], rows", "xp": 15},
    {"id": "cpp-21-3-12", "type": "code", "question": "Dynamic 2D array new.", "correctAnswer": ["int** arr = new int*[rows];\nfor (int i = 0; i < rows; i++) arr[i] = new int[cols];", "dynamic 2D"],
        "explanation": "new type*[rows], new type[cols]", "xp": 15},
    {"id": "cpp-21-3-13", "type": "code", "question": "Free dynamic 2D.", "correctAnswer": ["for (int i = 0; i < rows; i++) delete[] arr[i];\ndelete[] arr;", "free 2D"],
        "explanation": "Delete each row, then array.", "xp": 15},
    {"id": "cpp-21-3-14", "type": "code", "question": "Flatten 2D to 1D.", "correctAnswer": ["int index = i * cols + j;", "flatten index"],
        "explanation": "index = row * cols + col", "xp": 15},
    {"id": "cpp-21-3-15", "type": "code", "question": "1D to 2D index.", "correctAnswer": ["int row = index / cols;\nint col = index % cols;", "unflatten"],
        "explanation": "row = index/cols, col = index%cols", "xp": 15},
    {"id": "cpp-21-3-16", "type": "code", "question": "Vector of vectors.", "correctAnswer": ["std::vector<std::vector<int>> arr;", "vector 2D"],
        "explanation": "vector<vector<type>>", "xp": 15},
    {"id": "cpp-21-3-17", "type": "code", "question": "Resize vector 2D.", "correctAnswer": ["arr.resize(rows);\nfor (auto& row : arr) row.resize(cols);", "resize 2D"],
        "explanation": "Resize outer and inner.", "xp": 15},
    {"id": "cpp-21-3-18", "type": "code", "question": "3D array.", "correctAnswer": ["int arr[2][3][4];", "3D array"],
        "explanation": "type dims[d3][d2][d1]", "xp": 15},
    {"id": "cpp-21-3-19", "type": "code", "question": "Access 3D element.", "correctAnswer": ["int x = arr[0][1][2];", "3D access"],
        "explanation": "arr[d1][d2][d3]", "xp": 15},
    {"id": "cpp-21-3-20", "type": "code", "question": "Row major calculation.", "correctAnswer": ["int offset = row * cols + col;", "row major"],
        "explanation": "row * cols + col", "xp": 15},
    {"id": "cpp-21-3-21", "type": "code", "question": "Get 2D size.", "correctAnswer": ["size_t rows = sizeof(arr) / sizeof(arr[0]);\nsize_t cols = sizeof(arr[0]) / sizeof(arr[0][0]);", "2D size"],
        "explanation": "Calculate rows and cols.", "xp": 15},
    {"id": "cpp-21-3-22", "type": "code", "question": "Transposed access.", "correctAnswer": ["int x = arr[j][i];", "transpose"],
        "explanation": "Swap row/col index.", "xp": 15},
    {"id": "cpp-21-3-23", "type": "code", "question": "Diagonal access.", "correctAnswer": ["if (i == j) arr[i][j];", "diagonal"],
        "explanation": "row == col for diagonal.", "xp": 15},
    {"id": "cpp-21-3-24", "type": "code", "question": "Jagged array.", "correctAnswer": ["std::vector<std::vector<int>> jagged = {{1, 2}, {3, 4, 5}};", "jagged"],
        "explanation": "Different row lengths.", "xp": 15},
    {"id": "cpp-21-3-25", "type": "code", "question": "Contiguous 2D allocate.", "correctAnswer": ["int* arr = new int[rows * cols];\nint x = arr[i * cols + j];", "contiguous 2D"],
        "explanation": "1D array with 2D indexing.", "xp": 15}
]

lesson3 = {
    "id": "cpp-U21-L3", "title": "Multidimensional Arrays", "unitTitle": "21. Data Structures", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Multidimensional Arrays

Arrays with multiple dimensions (2D, 3D, etc.).

## Static 2D Arrays

```cpp
// Declaration
int matrix[3][4];  // 3 rows, 4 columns

// Initialization
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

// Access
int x = matrix[0][1];  // Row 0, Column 1
matrix[1][2] = 42;

// Loop through
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        matrix[i][j] = i * j;
    }
}
```

## Dynamic 2D Arrays

```cpp
// Allocate
int** matrix = new int*[rows];
for (int i = 0; i < rows; i++) {
    matrix[i] = new int[cols];
}

// Free
for (int i = 0; i < rows; i++) {
    delete[] matrix[i];
}
delete[] matrix;
```

## std::vector 2D

```cpp
// Create jagged 2D array
std::vector<std::vector<int>> matrix = {
    {1, 2, 3},
    {4, 5},
    {6, 7, 8, 9}
};

// Resize
matrix.resize(rows);
for (auto& row : matrix) {
    row.resize(cols);
}
```

## Contiguous 2D Array

```cpp
// Allocate as 1D, access as 2D
int* matrix = new int[rows * cols];

// Access row-major order
int x = matrix[row * cols + col];

// 3D example
int* cube = new int[dims[0] * dims[1] * dims[2]];
int x = cube[(i * dims[1] + j) * dims[2] + k];
```
""",
    "questions": lesson3_questions
}

# Update lesson titles and add lessons
data['units'][20]['lessons'][0]['title'] = lesson1['title']
data['units'][20]['lessons'][1]['title'] = lesson2['title']
data['units'][20]['lessons'][2]['title'] = lesson3['title']

# Add all lessons to data
data['units'][20]['lessons'][0].update(lesson1)
print("✅ Lesson 1: Static Arrays - 25 questions (20 code)")

data['units'][20]['lessons'][1].update(lesson2)
print("✅ Lesson 2: Dynamic Arrays - 25 questions (20 code)")

data['units'][20]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Multidimensional Arrays - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 21 (Lessons 1-3) Complete: 3 lessons with 25 questions each (75 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~53 (70%)")
print("   - Type-in questions: ~15 (20%)")
print("   - Multiple-choice: ~7 (10%)")
print("\nUnit 21 now has 3 complete lessons (75 questions total)")