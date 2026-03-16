#!/usr/bin/env python3
"""
Build Unit 2 Lesson 2: Arrays and Vectors (25 questions)
"""
import json

# Read current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Lesson 2: Arrays and Vectors with 25 questions
lesson2_questions = [
    # Basic concepts (5 typing)
    {
        "id": "cpp-2-2-1",
        "type": "typing",
        "question": "What is an array?",
        "correctAnswer": ["fixed-size collection of same-type elements", "collection of same type elements"],
        "explanation": "An array is a fixed-size collection of elements of the same type.",
        "xp": 5
    },
    {
        "id": "cpp-2-2-2",
        "type": "typing",
        "question": "How do you access array elements?",
        "correctAnswer": ["using index with square brackets", "array[index]"],
        "explanation": "Array elements are accessed using square brackets with an index: arr[i]",
        "xp": 5
    },
    {
        "id": "cpp-2-2-3",
        "type": "typing",
        "question": "What is std::vector?",
        "correctAnswer": ["dynamic array that can grow and shrink", " resizable array"],
        "explanation": "std::vector is a dynamic array that can automatically resize.",
        "xp": 5
    },
    {
        "id": "cpp-2-2-4",
        "type": "typing",
        "question": "How do you add elements to a vector?",
        "correctAnswer": ["push_back", "using push_back method"],
        "explanation": "Use push_back() to add elements to the end of a vector.",
        "xp": 5
    },
    {
        "id": "cpp-2-2-5",
        "type": "typing",
        "question": "What happens if you access an array out of bounds?",
        "correctAnswer": ["undefined behavior", "may crash"],
        "explanation": "Accessing arrays out of bounds results in undefined behavior.",
        "xp": 5
    },
    
    # Multiple choice (5 questions)
    {
        "id": "cpp-2-2-6",
        "type": "multiple",
        "question": "Which is a correct array declaration?",
        "options": ["int arr[5];", "int arr[];", "arr[5];", "Both A and B"],
        "correctAnswer": [0],
        "explanation": "Array declaration must specify type, name, and size.",
        "xp": 5
    },
    {
        "id": "cpp-2-2-7",
        "type": "multiple",
        "question": "What is the first index of a C++ array?",
        "options": ["0", "1", "-1", "Depends on declaration"],
        "correctAnswer": [0],
        "explanation": "C++ arrays are zero-indexed, so the first element is at index 0.",
        "xp": 5
    },
    {
        "id": "cpp-2-2-8",
        "type": "multiple",
        "question": "What method gets the size of a vector?",
        "options": ["size()", "length()", "count()", "getSize()"],
        "correctAnswer": [0],
        "explanation": "size() returns the number of elements in a vector.",
        "xp": 5
    },
    {
        "id": "cpp-2-2-9",
        "type": "multiple",
        "question": "Can vector change its size after creation?",
        "options": ["Yes", "No", "Only if declared dynamic", "Only with special functions"],
        "correctAnswer": [0],
        "explanation": "Vectors can grow and shrink dynamically using push_back, pop_back, etc.",
        "xp": 5
    },
    {
        "id": "cpp-2-2-10",
        "type": "multiple",
        "question": "What is a multidimensional array?",
        "options": ["Array of arrays", "Array with multiple types", "Vector of vectors", "Both A and D"],
        "correctAnswer": [3],
        "explanation": "Multidimensional arrays are arrays of arrays (or vectors of vectors).",
        "xp": 5
    },
    
    # Code challenges (15 questions)
    {
        "id": "cpp-2-2-11",
        "type": "code",
        "question": "Declare an array of 10 integers.",
        "correctAnswer": ["int arr[10];"],
        "explanation": "Array declaration: type name[size];",
        "xp": 15
    },
    {
        "id": "cpp-2-2-12",
        "type": "code",
        "question": "Declare and initialize an array with values 1, 2, 3, 4, 5.",
        "correctAnswer": ["int arr[] = {1, 2, 3, 4, 5};", "int arr[5] = {1, 2, 3, 4, 5};"],
        "explanation": "Arrays can be initialized with an initializer list.",
        "xp": 15
    },
    {
        "id": "cpp-2-2-13",
        "type": "code",
        "question": "Set the first element of array arr to 100.",
        "correctAnswer": ["arr[0] = 100;"],
        "explanation": "Access array element with index and assign value.",
        "xp": 15
    },
    {
        "id": "cpp-2-2-14",
        "type": "code",
        "question": "Create a vector of integers.",
        "correctAnswer": ["vector<int> vec;", "#include <vector>"],
        "explanation": "Vector is a template class: vector<type> name;",
        "xp": 15
    },
    {
        "id": "cpp-2-2-15",
        "type": "code",
        "question": "Add 5 to a vector named vec.",
        "correctAnswer": ["vec.push_back(5);"],
        "explanation": "push_back adds element to the end of the vector.",
        "xp": 15
    },
    {
        "id": "cpp-2-2-16",
        "type": "code",
        "question": "Print all elements of an array arr of size 5 using a loop.",
        "correctAnswer": ["for (int i = 0; i < 5; i++) { cout << arr[i] << \" \"; }"],
        "explanation": "Use for loop with index to iterate through array.",
        "xp": 15
    },
    {
        "id": "cpp-2-2-17",
        "type": "code",
        "question": "Print all elements of a vector using range-based for loop.",
        "correctAnswer": ["for (int x : vec) { cout << x << \" \"; }"],
        "explanation": "Range-based for loop iterates through all elements.",
        "xp": 15
    },
    {
        "id": "cpp-2-2-18",
        "type": "code",
        "question": "Create a 2D array (3x3) of integers.",
        "correctAnswer": ["int arr[3][3];"],
        "explanation": "2D array: type name[rows][cols];",
        "xp": 15
    },
    {
        "id": "cpp-2-2-19",
        "type": "code",
        "question": "Access element at row 2, column 3 of 2D array arr.",
        "correctAnswer": ["arr[1][2]", "arr[1][2];"],
        "explanation": "2D array access: arr[row][col] (indices start at 0).",
        "xp": 15
    },
    {
        "id": "cpp-2-2-20",
        "type": "code",
        "question": "Remove the last element from a vector.",
        "correctAnswer": ["vec.pop_back();"],
        "explanation": "pop_back removes the last element from the vector.",
        "xp": 15
    },
    {
        "id": "cpp-2-2-21",
        "type": "code",
        "question": "Check if a vector is empty.",
        "correctAnswer": ["if (vec.empty())", "vec.empty()"],
        "explanation": "empty() returns true if vector has no elements.",
        "xp": 15
    },
    {
        "id": "cpp-2-2-22",
        "type": "code",
        "question": "Get the size of a vector and store it in a variable.",
        "correctAnswer": ["int size = vec.size();"],
        "explanation": "size() returns number of elements as size_t.",
        "xp": 15
    },
    {
        "id": "cpp-2-2-23",
        "type": "code",
        "question": "Access the last element of a vector without removing it.",
        "correctAnswer": ["vec.back()", "int last = vec.back();"],
        "explanation": "back() returns reference to the last element.",
        "xp": 15
    },
    {
        "id": "cpp-2-2-24",
        "type": "code",
        "question": "Clear all elements from a vector.",
        "correctAnswer": ["vec.clear();"],
        "explanation": "clear() removes all elements, making size 0.",
        "xp": 15
    },
    {
        "id": "cpp-2-2-25",
        "type": "code",
        "question": "Find the sum of all elements in an array arr of size 5.",
        "correctAnswer": ["int sum = 0;\\nfor (int i = 0; i < 5; i++) {\\n    sum += arr[i];\\n}"],
        "explanation": "Iterate through array and accumulate sum.",
        "xp": 15
    }
]

# Update lesson
lesson_data = {
    "id": 8,
    "title": "Arrays and Vectors",
    "unitTitle": "2. Functions and Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": data['units'][1]['lessons'][1]['lessonText'],
    "questions": lesson2_questions
}

data['units'][1]['lessons'][1].update(lesson_data)

# Write back
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n')
    f.write('// Generated from C++ outline\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("✅ Unit 2 Lesson 2: Arrays and Vectors - 25 questions complete")
print(f"   - Code questions: 15")
print(f"   - Multiple choice: 5")
print(f"   - Type-in: 5")
print("\nWritten to questions/cppCombined.js")