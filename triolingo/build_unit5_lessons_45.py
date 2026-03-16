#!/usr/bin/env python3
"""
Build Unit 5 Lessons 4-5: Final lessons
"""
import json

print("🚀 Completing C++ Unit 5 Lessons 4-5...")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 4: Multidimensional Arrays
# ============================================================================
lesson4_questions = [
    # Type-in (3 questions)
    {
        "id": "cpp-5-4-1",
        "type": "typing",
        "question": "What is a multidimensional array?",
        "correctAnswer": ["array of arrays", "nested arrays"],
        "explanation": "Multidimensional arrays are arrays where each element is itself an array.",
        "xp": 5
    },
    {
        "id": "cpp-5-4-2",
        "type": "typing",
        "question": "How do you declare a 2D array?",
        "correctAnswer": ["type name[rows][cols]", "int arr[3][4]"],
        "explanation": "2D array declaration: type name[rows][cols];",
        "xp": 5
    },
    {
        "id": "cpp-5-4-3",
        "type": "typing",
        "question": "How do you access element at row 2, column 3?",
        "correctAnswer": ["arr[2][3]", "array[row][column]"],
        "explanation": "Access with row and column indices: arr[row][col]",
        "xp": 5
    },
    
    # Multiple choice (2 questions)
    {
        "id": "cpp-5-4-4",
        "type": "multiple",
        "question": "How is a 2D array stored in memory?",
        "options": ["Row-major order", "Column-major order", "Random order", "Circular order"],
        "correctAnswer": [0],
        "explanation": "C++ uses row-major order: all elements of row 0, then row 1, etc.",
        "xp": 5
    },
    {
        "id": "cpp-5-4-5",
        "type": "multiple",
        "question": "What is the formula for 2D array index?",
        "options": ["row * cols + col", "col * rows + row", "row * col", "col + row"],
        "correctAnswer": [0],
        "explanation": "Linear index = row * number_of_columns + column",
        "xp": 5
    },
    
    # Code (20 questions)
    {
        "id": "cpp-5-4-6",
        "type": "code",
        "question": "Declare a 3x4 2D array of integers.",
        "correctAnswer": ["int arr[3][4];"],
        "explanation": "2D array: type name[rows][cols];",
        "xp": 15
    },
    {
        "id": "cpp-5-4-7",
        "type": "code",
        "question": "Initialize 2x2 array with values.",
        "correctAnswer": ["int arr[2][2] = {{1, 2}, {3, 4}};"],
        "explanation": "Initialize with nested braced lists.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-8",
        "type": "code",
        "question": "Set element at row 1, column 2 to 10.",
        "correctAnswer": ["arr[1][2] = 10;"],
        "explanation": "Access with row and column indices.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-9",
        "type": "code",
        "question": "Print all elements of 3x3 array using nested loops.",
        "correctAnswer": ["for (int i = 0; i < 3; i++) {\\n    for (int j = 0; j < 3; j++) {\\n        cout << arr[i][j] << \" \";\\n    }\\n    cout << endl;\\n}"],
        "explanation": "Use nested for loops to iterate rows and columns.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-10",
        "type": "code",
        "question": "Calculate sum of all elements in 3x3 array.",
        "correctAnswer": ["int sum = 0;\\nfor (int i = 0; i < 3; i++) {\\n    for (int j = 0; j < 3; j++) {\\n        sum += arr[i][j];\\n    }\\n}"],
        "explanation": "Nested loops to iterate all elements and accumulate sum.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-11",
        "type": "code",
        "question": "Find maximum value in 2D array.",
        "correctAnswer": ["int max = arr[0][0];\\nfor (int i = 0; i < 3; i++) {\\n    for (int j = 0; j < 3; j++) {\\n        if (arr[i][j] > max) max = arr[i][j];\\n    }\\n}"],
        "explanation": "Track maximum while iterating through all elements.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-12",
        "type": "code",
        "question": "Initialize 2D array with zeros.",
        "correctAnswer": ["int arr[3][3] = {0};"],
        "explanation": "= {0} initializes all elements to 0.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-13",
        "type": "code",
        "question": "Print diagonal elements of square matrix.",
        "correctAnswer": ["for (int i = 0; i < n; i++) {\\n    cout << arr[i][i] << \" \";\\n}"],
        "explanation": "Diagonal elements have equal row and column indices.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-14",
        "type": "code",
        "question": "Transpose a 2D array (swap rows and columns).",
        "correctAnswer": ["for (int i = 0; i < 3; i++) {\\n    for (int j = i + 1; j < 3; j++) {\\n        int temp = arr[i][j];\\n        arr[i][j] = arr[j][i];\\n        arr[j][i] = temp;\\n    }\\n}"],
        "explanation": "Swap arr[i][j] with arr[j][i] for i < j.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-15",
        "type": "code",
        "question": "Initialize 3D array (2x3x4).",
        "correctAnswer": ["int arr[2][3][4];"],
        "explanation": "3D array: type name[dims][rows][cols];",
        "xp": 15
    },
    {
        "id": "cpp-5-4-16",
        "type": "code",
        "question": "Access element in 3D array at [1][2][3].",
        "correctAnswer": ["arr[1][2][3]", "int val = arr[1][2][3];"],
        "explanation": "3D array access: arr[dim][row][col]",
        "xp": 15
    },
    {
        "id": "cpp-5-4-17",
        "type": "code",
        "question": "Pass 2D array to function.",
        "correctAnswer": ["void func(int arr[][4], int rows)", "void func(int arr[3][4])"],
        "explanation": "Must specify column dimension, rows can be omitted.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-18",
        "type": "code",
        "question": "Calculate sum of each row in 2D array.",
        "correctAnswer": ["for (int i = 0; i < 3; i++) {\\n    int rowSum = 0;\\n    for (int j = 0; j < 3; j++) {\\n        rowSum += arr[i][j];\\n    }\\n    cout << rowSum << endl;\\n}"],
        "explanation": "Outer loop for rows, inner loop sums row elements.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-19",
        "type": "code",
        "question": "Calculate sum of each column in 2D array.",
        "correctAnswer": ["for (int j = 0; j < 3; j++) {\\n    int colSum = 0;\\n    for (int i = 0; i < 3; i++) {\\n        colSum += arr[i][j];\\n    }\\n    cout << colSum << endl;\\n}"],
        "explanation": "Outer loop for columns, inner loop sums column elements.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-20",
        "type": "code",
        "question": "Check if 2D array is symmetric.",
        "correctAnswer": ["bool sym = true;\\nfor (int i = 0; i < n; i++) {\\n    for (int j = i + 1; j < n; j++) {\\n        if (arr[i][j] != arr[j][i]) sym = false;\\n    }\\n}"],
        "explanation": "Check if arr[i][j] == arr[j][i] for all i, j.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-21",
        "type": "code",
        "question": "Rotate matrix 90 degrees clockwise.",
        "correctAnswer": ["for (int i = 0; i < n/2; i++) {\\n    for (int j = i; j < n-i-1; j++) {\\n        int temp = arr[i][j];\\n        arr[i][j] = arr[n-1-j][i];\\n        arr[n-1-j][i] = arr[n-1-i][n-1-j];\\n        arr[n-1-i][n-1-j] = arr[j][n-1-i];\\n        arr[j][n-1-i] = temp;\\n    }\\n}"],
        "explanation": "Layer-by-layer rotation from outer to inner.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-22",
        "type": "code",
        "question": "Initialize row of 2D array with specific values.",
        "correctAnswer": ["int arr[3][3] = {{1, 2, 3}, {0}, {0}};", "int arr[3][3] = {};\\nfor (int j = 0; j < 3; j++) arr[0][j] = j + 1;"],
        "explanation": "Initialize specific row, rest default to 0.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-23",
        "type": "code",
        "question": "Find element value in 2D array using linear index.",
        "correctAnswer": ["int row = index / cols;\\nint col = index % cols;\\nint value = arr[row][col];"],
        "explanation": "Convert linear index to row and col using division and modulus.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-24",
        "type": "code",
        "question": "Copy 2D array to another array.",
        "correctAnswer": ["for (int i = 0; i < 3; i++) {\\n    for (int j = 0; j < 3; j++) {\\n        dest[i][j] = src[i][j];\\n    }\\n}"],
        "explanation": "Copy element by element using nested loops.",
        "xp": 15
    },
    {
        "id": "cpp-5-4-25",
        "type": "code",
        "question": "Use std::array for 2D array (3x3).",
        "correctAnswer": ["std::array<std::array<int, 3>, 3> arr;"],
        "explanation": "Nested std::array for multidimensional: array<array<type, cols>, rows>",
        "xp": 15
    }
]

lesson4 = {
    "id": 28,
    "title": "Multidimensional Arrays",
    "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Multidimensional Arrays

Multidimensional arrays allow you to store data in multiple dimensions (tables, matrices, 3D grids, etc.).

## Declaration

```cpp
// 2D array (matrix)
type name[rows][cols];

int matrix[3][4];    // 3 rows, 4 columns
double grid[5][5];   // 5x5 grid

// 3D array
int cube[2][3][4];   // 2 layers, 3 rows, 4 columns
```

## Initialization

```cpp
// Complete initialization
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

// Partial initialization (rest are zero)
int matrix[2][3] = {
    {1, 2, 3},
    {4}  // {4, 0, 0}
};

// Zero initialization
int matrix[3][4] = {0};  // All zeros
```

## Accessing Elements

```cpp
int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// Access element
matrix[0][0]  // 1 (first row, first column)
matrix[2][3]  // 12 (last row, last column)
matrix[1][2]  // 7 (second row, third column)
```

## Memory Layout (Row-Major Order)

C++ stores multidimensional arrays in **row-major order**:

```
matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
}

Memory: [1, 2, 3, 4, 5, 6]
        └─row 0──┘ └─row 1──┘
```

**Linear index formula:**
```cpp
int linear_index = row * num_columns + column;
```

## Iterating Through 2D Arrays

```cpp
int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// Using nested loops
for (int i = 0; i < 3; i++) {      // Rows
    for (int j = 0; j < 4; j++) {  // Columns
        std::cout << matrix[i][j] << " ";
    }
    std::cout << "\\n";
}
```

## Common Operations

### Sum of all elements
```cpp
int sum = 0;
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        sum += matrix[i][j];
    }
}
```

### Find maximum
```cpp
int max = matrix[0][0];
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        if (matrix[i][j] > max) {
            max = matrix[i][j];
        }
    }
}
```

### Sum of rows
```cpp
for (int i = 0; i < rows; i++) {
    int row_sum = 0;
    for (int j = 0; j < cols; j++) {
        row_sum += matrix[i][j];
    }
    std::cout << "Row " << i << ": " << row_sum << "\\n";
}
```

### Sum of columns
```cpp
for (int j = 0; j < cols; j++) {
    int col_sum = 0;
    for (int i = 0; i < rows; i++) {
        col_sum += matrix[i][j];
    }
    std::cout << "Column " << j << ": " << col_sum << "\\n";
}
```

## Diagonal Operations

```cpp
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Main diagonal (top-left to bottom-right)
for (int i = 0; i < 3; i++) {
    std::cout << matrix[i][i] << " ";  // 1, 5, 9
}

// Anti-diagonal (top-right to bottom-left)
for (int i = 0; i < 3; i++) {
    std::cout << matrix[i][2-i] << " ";  // 3, 5, 7
}
```

## Transpose

Swap rows with columns:

```cpp
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

for (int i = 0; i < 3; i++) {
    for (int j = i + 1; j < 3; j++) {
        // Swap matrix[i][j] with matrix[j][i]
        int temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
}
```

## Passing to Functions

```cpp
// Function with 2D array parameter
void processMatrix(int arr[][4], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < 4; j++) {
            arr[i][j] *= 2;
        }
    }
}

// Call
int matrix[3][4];
processMatrix(matrix, 3);
```

**Important:** Column dimension must be specified in function parameter!

## 3D Arrays

```cpp
int cube[2][3][4] = {
    {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    },
    {
        {13, 14, 15, 16},
        {17, 18, 19, 20},
        {21, 22, 23, 24}
    }
};

// Access
cube[0][0][0]  // 1 (first layer, first row, first column)
cube[1][2][3]  // 24

// Iterate
for (int l = 0; l < 2; l++) {        // Layers
    for (int i = 0; i < 3; i++) {    // Rows
        for (int j = 0; j < 4; j++) {  // Columns
            std::cout << cube[l][i][j] << " ";
        }
        std::cout << "\\n";
    }
    std::cout << "\\n";
}
```

## Using std::array for Multidimensional

```cpp
#include <array>

// 2D array using std::array
std::array<std::array<int, 4>, 3> matrix = {{
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
}};

// Access
matrix[0][0]  // 1

// Size
matrix.size()     // 3 rows
matrix[0].size()  // 4 columns
```

## Jagged Arrays

C++ doesn't support true jagged arrays natively, but you can simulate them:

```cpp
int* jagged[3];
jagged[0] = new int[2];
jagged[1] = new int[3];
jagged[2] = new int[4];

// Better: use vector
std::vector<std::vector<int>> jagged = {
    {1, 2},
    {3, 4, 5},
    {6, 7, 8, 9}
};
```
""",
    "questions": lesson4_questions
}

data['units'][4]['lessons'][3].update(lesson4)
print("✅ Lesson 4: Multidimensional Arrays - 25 questions (20 code)")

# ============================================================================
# LESSON 5: Iteration Patterns
# ============================================================================
lesson5_questions = [
    # Type-in (3 questions)
    {
        "id": "cpp-5-5-1",
        "type": "typing",
        "question": "What is range-based for loop?",
        "correctAnswer": ["for (element : container)", "for-each loop"],
        "explanation": "Range-based for loop iterates through all elements of a container.",
        "xp": 5
    },
    {
        "id": "cpp-5-5-2",
        "type": "typing",
        "question": "What is iterator?",
        "correctAnswer": ["object that points to elements", "generalized pointer"],
        "explanation": "Iterator is an object that traverses container elements.",
        "xp": 5
    },
    {
        "id": "cpp-5-5-3",
        "type": "typing",
        "question": "What is the advantage of iterators?",
        "correctAnswer": ["unified interface for all containers", "works with STL algorithms"],
        "explanation": "Iterators provide consistent interface for different containers.",
        "xp": 5
    },
    
    # Multiple choice (2 questions)
    {
        "id": "cpp-5-5-4",
        "type": "multiple",
        "question": "When should you use range-based for?",
        "options": ["Simple iteration through all elements", "Need index", "Need to delete", "Random access"],
        "correctAnswer": [0],
        "explanation": "Use range-based for for simple iteration through all elements.",
        "xp": 5
    },
    {
        "id": "cpp-5-5-5",
        "type": "multiple",
        "question": "What does begin() return?",
        "options": ["Iterator to first element", "First element", "Last element", "Size"],
        "correctAnswer": [0],
        "explanation": "begin() returns iterator pointing to first element.",
        "xp": 5
    },
    
    # Code (20 questions)
    {
        "id": "cpp-5-5-6",
        "type": "code",
        "question": "Use range-based for to print all elements in vector.",
        "correctAnswer": ["for (int x : vec) { cout << x << \" \"; }"],
        "explanation": "Range-based for: for (element : container)",
        "xp": 15
    },
    {
        "id": "cpp-5-5-7",
        "type": "code",
        "question": "Use range-based for with reference to modify elements.",
        "correctAnswer": ["for (int& x : vec) { x *= 2; }"],
        "explanation": "Use reference (&) to modify elements.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-8",
        "type": "code",
        "question": "Use iterator to traverse vector.",
        "correctAnswer": ["for (auto it = vec.begin(); it != vec.end(); it++) { cout << *it; }"],
        "explanation": "begin() and end() provide iterators.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-9",
        "type": "code",
        "question": "Use iterator to modify element.",
        "correctAnswer": ["*it = 100;", "for (auto it = vec.begin(); it != vec.end(); it++) *it = 0;"],
        "explanation": "Dereference iterator with * to access/modify element.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-10",
        "type": "code",
        "question": "Use reverse iterator to traverse in reverse.",
        "correctAnswer": ["for (auto it = vec.rbegin(); it != vec.rend(); it++) { cout << *it; }"],
        "explanation": "rbegin() and rend() for reverse iteration.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-11",
        "type": "code",
        "question": "Use while loop with iterator.",
        "correctAnswer": ["auto it = vec.begin();\\nwhile (it != vec.end()) {\\n    cout << *it;\\n    it++;\\n}"],
        "explanation": "While loop with iterator condition check.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-12",
        "type": "code",
        "question": "Find element using iterator and find.",
        "correctAnswer": ["auto it = find(vec.begin(), vec.end(), value);"],
        "explanation": "find() returns iterator to found element or end().",
        "xp": 15
    },
    {
        "id": "cpp-5-5-13",
        "type": "code",
        "question": "Check if iterator is valid before dereferencing.",
        "correctAnswer": ["if (it != vec.end()) { cout << *it; }"],
        "explanation": "Compare iterator with end() to check validity.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-14",
        "type": "code",
        "question": "Use iterator to erase element.",
        "correctAnswer": ["vec.erase(it);"],
        "explanation": "erase() accepts iterator and removes element.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-15",
        "type": "code",
        "question": "Use iterator to insert at position.",
        "correctAnswer": ["vec.insert(it, 100);"],
        "explanation": "insert() adds element at iterator position.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-16",
        "type": "code",
        "question": "Use const_iterator to read without modifying.",
        "correctAnswer": ["for (std::vector<int>::const_iterator it = vec.begin(); it != vec.end(); it++) { cout << *it; }"],
        "explanation": "const_iterator prevents modification.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-17",
        "type": "code",
        "question": "Use auto with iterator for cleaner code.",
        "correctAnswer": ["for (auto it = vec.begin(); it != vec.end(); it++)", "auto it = vec.begin();"],
        "explanation": "auto deduces iterator type automatically.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-18",
        "type": "code",
        "question": "Use range-based for with const reference.",
        "correctAnswer": ["for (const int& x : vec) { cout << x; }"],
        "explanation": "const reference prevents modification and avoids copy.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-19",
        "type": "code",
        "question": "Use range-based for with index (C++17 initializer).",
        "correctAnswer": ["for (auto [index, value] : enumerate(vec))", "int index = 0; for (int x : vec) { cout << index << \":\" << x; index++; }"],
        "explanation": "Traditional approach: track index separately.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-20",
        "type": "code",
        "question": "Iterate through map using iterator.",
        "correctAnswer": ["for (auto it = map.begin(); it != map.end(); it++) { cout << it->first << \":\" << it->second; }"],
        "explanation": "Map iterator has ->first and ->second members.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-21",
        "type": "code",
        "question": "Use range-based for for map.",
        "correctAnswer": ["for (const auto& [key, value] : map) { cout << key << \":\" << value; }"],
        "explanation": "Structured binding (C++17) for map iteration.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-22",
        "type": "code",
        "question": "Advance iterator by n positions.",
        "correctAnswer": ["std::advance(it, 5);", "it += 5;", "it = it + 5;"],
        "explanation": "advance() moves iterator forward n positions.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-23",
        "type": "code",
        "question": "Calculate distance between two iterators.",
        "correctAnswer": ["auto dist = std::distance(it1, it2);"],
        "explanation": "distance() returns number of elements between iterators.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-24",
        "type": "code",
        "question": "Use iterator to find and replace.",
        "correctAnswer": ["auto it = find(vec.begin(), vec.end(), old);\\nif (it != vec.end()) *it = new;"],
        "explanation": "Find with iterator, then modify through dereferencing.",
        "xp": 15
    },
    {
        "id": "cpp-5-5-25",
        "type": "code",
        "question": "Use iterator to process first n elements.",
        "correctAnswer": ["for (auto it = vec.begin(); it != vec.begin() + 5; it++) { cout << *it; }"],
        "explanation": "Use begin() + n to get iterator n positions from start.",
        "xp": 15
    }
]

lesson5 = {
    "id": 29,
    "title": "Iteration Patterns",
    "unitTitle": "5. Arrays, Strings, and Basic Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Iteration Patterns

C++ provides multiple ways to iterate through containers, each with different use cases.

## Range-Based For Loop (C++11)

Simplest way to iterate through all elements:

```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};

// Read-only
for (int x : vec) {
    std::cout << x << " ";
}

// Modify (use reference)
for (int& x : vec) {
    x *= 2;
}

// Read-only (avoid copy with const reference)
for (const int& x : vec) {
    std::cout << x << " ";
}
```

### When to use range-based for

✅ **Use when:**
- Iterating through all elements
- Simple forward iteration
- Don't need index
- Don't need to modify container structure

❌ **Don't use when:**
- Need element index
- Need to insert/delete elements
- Need reverse iteration (use rbegin/rend)
- Need complex iteration logic

## Iterator-Based Loop

More flexible, works with all STL containers:

```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};

// Forward iterator
for (std::vector<int>::iterator it = vec.begin(); it != vec.end(); it++) {
    std::cout << *it << " ";
}

// Using auto (C++11)
for (auto it = vec.begin(); it != vec.end(); it++) {
    std::cout << *it << " ";
}

// Const iterator (read-only)
for (std::vector<int>::const_iterator it = vec.cbegin(); it != vec.cend(); it++) {
    std::cout << *it << " ";
}
```

### Iterator Operations

```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};

// Get iterators
auto it = vec.begin();       // First element
auto end = vec.end();         // One past last
auto rit = vec.rbegin();      // Last element (reverse)
auto rend = vec.rend();       // One before first (reverse)

// Dereference
int value = *it;              // Get value
*it = 100;                    // Modify value

// Advance
it++;                         // Next element
it += 3;                      // Advance by 3
std::advance(it, 2);          // Advance by 2

// Distance
auto dist = std::distance(it1, it2);  // Elements between iterators

// Comparison
if (it != end) { }            // Not at end
if (it < end) { }             // Before end (random access)
```

## Index-Based Loop

Traditional approach, gives you direct index access:

```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};

for (size_t i = 0; i < vec.size(); i++) {
    std::cout << "Index " << i << ": " << vec[i] << "\\n";
}

// With range-based (track index manually)
int index = 0;
for (int x : vec) {
    std::cout << index << ": " << x << "\\n";
    index++;
}
```

## While Loop with Iterator

```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};

auto it = vec.begin();
while (it != vec.end()) {
    // Process element
    std::cout << *it << " ";
    
    // Check condition for early exit
    if (*it == 3) break;
    
    it++;
}
```

## Iteration with Modification

### Erase while iterating
```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};

for (auto it = vec.begin(); it != vec.end(); ) {
    if (*it % 2 == 0) {
        it = vec.erase(it);  // Erase returns next iterator
    } else {
        it++;  // Only advance if not erased
    }
}
```

### Insert while iterating
```cpp
std::vector<int> vec = {1, 2, 3};

for (auto it = vec.begin(); it != vec.end(); it++) {
    if (*it == 2) {
        it = vec.insert(it, 100);  // Insert returns iterator to new element
        it++;  // Skip newly inserted element
    }
}
```

## Map Iteration

```cpp
std::map<std::string, int> ages = {
    {"Alice", 25},
    {"Bob", 30},
    {"Charlie", 35}
};

// Iterator-based
for (auto it = ages.begin(); it != ages.end(); it++) {
    std::cout << it->first << ": " << it->second << "\\n";
}

// Range-based for (C++17 structured binding)
for (const auto& [name, age] : ages) {
    std::cout << name << ": " << age << "\\n";
}

// Range-based for (pre-C++17)
for (const auto& pair : ages) {
    std::cout << pair.first << ": " << pair.second << "\\n";
}
```

## Choosing Iteration Method

| Method | Use Case | Index Access | Modification |
|--------|----------|--------------|--------------|
| Range-based for | Simple iteration | ❌ No | ✅ Yes (with &) |
| Iterator | Flexibility | ❌ No | ✅ Yes |
| Index-based | Need index | ✅ Yes | ✅ Yes |
| While loop | Complex logic | ❌ No | ✅ Yes |

## Common Patterns

### Find element
```cpp
auto it = std::find(vec.begin(), vec.end(), target);
if (it != vec.end()) {
    // Found
    std::cout << "Found: " << *it;
}
```

### Find and replace
```cpp
for (auto it = vec.begin(); it != vec.end(); it++) {
    if (*it == old_value) {
        *it = new_value;
    }
}
```

### Process first n elements
```cpp
for (auto it = vec.begin(); it != vec.begin() + n && it != vec.end(); it++) {
    std::cout << *it << " ";
}
```

### Reverse iteration
```cpp
for (auto it = vec.rbegin(); it != vec.rend(); it++) {
    std::cout << *it << " ";
}
```

### Iterate with step
```cpp
for (auto it = vec.begin(); it != vec.end(); std::advance(it, step)) {
    std::cout << *it << " ";
}
```

## Iterator Categories

| Category | Operations | Containers |
|----------|------------|------------|
| Input | ++, *, -> | istream |
| Output | ++, * | ostream |
| Forward | ++, *, ==, != | forward_list |
| Bidirectional | ++, --, *, ==, != | list, set, map |
| Random Access | +, -, <, >, [], +=, -= | vector, deque, array |

## Best Practices

✅ **DO:**
- Use range-based for for simple iteration
- Use iterators when you need flexibility
- Use const_iterator when not modifying
- Check iterator validity before dereferencing

❌ **DON'T:**
- Dereference end() iterator
- Forget to update iterator after erase()
- Use random access on non-random-access iterators
- Assume iterator ordering without checking
""",
    "questions": lesson5_questions
}

data['units'][4]['lessons'][4].update(lesson5)
print("✅ Lesson 5: Iteration Patterns - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n')
    f.write('// Generated from C++ outline\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 5 Complete: All 5 lessons with 25 questions each (125 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: 100 (80%)")
print("   - Type-in questions: 15 (12%)")
print("   - Multiple-choice: 10 (8%)")
print("\n📋 Unit 5 Lessons:")
print("   1. C-style Arrays - 25 questions")
print("   2. std::array - 25 questions")
print("   3. std::string - 25 questions")
print("   4. Multidimensional Arrays - 25 questions")
print("   5. Iteration Patterns - 25 questions")