#!/usr/bin/env python3
"""
Complete Unit 2 Lessons 3-6: Expand to 25 questions each
"""
import json

print("🚀 Completing Unit 2 Lessons 3-6...")
print("=" * 60)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 3: Strings and String Manipulation (expand to 25 questions)
# ============================================================================
existing_lesson3 = data['units'][1]['lessons'][2]['questions']

# Add 5 more questions to reach 25
additional_lesson3 = [
    {
        "id": "cpp-2-3-21",
        "type": "code",
        "question": "Append a character to a string.",
        "correctAnswer": ["s += 'x';", "s.append('x');", "s.push_back('x');"],
        "explanation": "Use +=, append(), or push_back() to add characters to string.",
        "xp": 15
    },
    {
        "id": "cpp-2-3-22",
        "type": "code",
        "question": "Convert string to uppercase.",
        "correctAnswer": ["transform(s.begin(), s.end(), s.begin(), ::toupper);"],
        "explanation": "Use transform with toupper from <algorithm>.",
        "xp": 15
    },
    {
        "id": "cpp-2-3-23",
        "type": "code",
        "question": "Find position of substring in string.",
        "correctAnswer": ["size_t pos = s.find(substring);", "int pos = s.find(sub);"],
        "explanation": "find() returns position of substring or string::npos if not found.",
        "xp": 15
    },
    {
        "id": "cpp-2-3-24",
        "type": "code",
        "question": "Replace all occurrences of 'a' with 'b' in string.",
        "correctAnswer": ["while (s.find('a') != string::npos) { s.replace(s.find('a'), 1, \"b\"); }"],
        "explanation": "Find and replace in loop. (In practice, use replace() with appropriate parameters)",
        "xp": 15
    },
    {
        "id": "cpp-2-3-25",
        "type": "code",
        "question": "Convert integer to string.",
        "correctAnswer": ["string s = to_string(42);", "string s = std::to_string(num);"],
        "explanation": "Use to_string() function to convert numeric types to string.",
        "xp": 15
    }
]

lesson3_questions = existing_lesson3 + additional_lesson3

lesson3 = {
    "id": 9,
    "title": "Strings and String Manipulation",
    "unitTitle": "2. Functions and Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": data['units'][1]['lessons'][2]['lessonText'],
    "questions": lesson3_questions
}

data['units'][1]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Strings - 25 questions complete")

# ============================================================================
# LESSON 4: References and Pointers (expand to 25 questions)
# ============================================================================
existing_lesson4 = data['units'][1]['lessons'][3]['questions']

additional_lesson4 = [
    {
        "id": "cpp-2-4-21",
        "type": "code",
        "question": "Create reference to array element.",
        "correctAnswer": ["int& ref = arr[0];"],
        "explanation": "Reference to array element allows modification.",
        "xp": 15
    },
    {
        "id": "cpp-2-4-22",
        "type": "code",
        "question": "Pass array to function using pointer.",
        "correctAnswer": ["void func(int* arr, int size)", "void func(int arr[], int size)"],
        "explanation": "Arrays decay to pointers when passed to functions.",
        "xp": 15
    },
    {
        "id": "cpp-2-4-23",
        "type": "code",
        "question": "Increment value through pointer.",
        "correctAnswer": ["(*p)++;", "++(*p);"],
        "explanation": "Dereference first with parentheses, then increment.",
        "xp": 15
    },
    {
        "id": "cpp-2-4-24",
        "type": "code",
        "question": "Check if pointer points to same location as another.",
        "correctAnswer": ["if (p1 == p2)", "p1 == p2"],
        "explanation": "Compare pointers to check if they point to same location.",
        "xp": 15
    },
    {
        "id": "cpp-2-4-25",
        "type": "code",
        "question": "Create pointer to pointer (double pointer).",
        "correctAnswer": ["int** pp = &p;", "int **pp = &p;"],
        "explanation": "Pointer to pointer: type** name",
        "xp": 15
    }
]

lesson4_questions = existing_lesson4 + additional_lesson4

lesson4 = {
    "id": 10,
    "title": "References and Pointers",
    "unitTitle": "2. Functions and Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": data['units'][1]['lessons'][3]['lessonText'],
    "questions": lesson4_questions
}

data['units'][1]['lessons'][3].update(lesson4)
print("✅ Lesson 4: References and Pointers - 25 questions complete")

# ============================================================================
# LESSON 5: Basic Algorithms (expand to 25 questions)
# ============================================================================
existing_lesson5 = data['units'][1]['lessons'][4]['questions']

additional_lesson5 = [
    {
        "id": "cpp-2-5-21",
        "type": "code",
        "question": "Use STL sort to sort vector.",
        "correctAnswer": ["sort(vec.begin(), vec.end());"],
        "explanation": "STL sort: sort(begin, end)",
        "xp": 15
    },
    {
        "id": "cpp-2-5-22",
        "type": "code",
        "question": "Use STL find to search vector.",
        "correctAnswer": ["auto it = find(vec.begin(), vec.end(), target);"],
        "explanation": "find returns iterator to found element or end().",
        "xp": 15
    },
    {
        "id": "cpp-2-5-23",
        "type": "code",
        "question": "Use STL count to count occurrences.",
        "correctAnswer": ["int c = count(vec.begin(), vec.end(), value);"],
        "explanation": "count returns number of occurrences of value.",
        "xp": 15
    },
    {
        "id": "cpp-2-5-24",
        "type": "code",
        "question": "Find max element using STL max_element.",
        "correctAnswer": ["auto it = max_element(vec.begin(), vec.end());"],
        "explanation": "max_element returns iterator to maximum element.",
        "xp": 15
    },
    {
        "id": "cpp-2-5-25",
        "type": "code",
        "question": "Use reverse to reverse vector.",
        "correctAnswer": ["reverse(vec.begin(), vec.end());"],
        "explanation": "reverse reverses elements in range.",
        "xp": 15
    }
]

lesson5_questions = existing_lesson5 + additional_lesson5

lesson5 = {
    "id": 11,
    "title": "Basic Algorithms",
    "unitTitle": "2. Functions and Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": data['units'][1]['lessons'][4]['lessonText'],
    "questions": lesson5_questions
}

data['units'][1]['lessons'][4].update(lesson5)
print("✅ Lesson 5: Basic Algorithms - 25 questions complete")

# ============================================================================
# LESSON 6: Advanced Control Flow (expand to 25 questions)
# ============================================================================
existing_lesson6 = data['units'][1]['lessons'][5]['questions']

additional_lesson6 = [
    {
        "id": "cpp-2-6-21",
        "type": "code",
        "question": "Use break to exit inner loop in nested loop.",
        "correctAnswer": ["for (int i = 0; i < 5; i++) {\\n    for (int j = 0; j < 5; j++) {\\n        if (found) break;\\n    }\\n}"],
        "explanation": "break only exits the innermost loop.",
        "xp": 15
    },
    {
        "id": "cpp-2-6-22",
        "type": "code",
        "question": "Use labeled goto to exit nested loops.",
        "correctAnswer": ["outer: for (int i = 0; i < 5; i++) {\\n    for (int j = 0; j < 5; j++) {\\n        if (found) goto outer;\\n    }\\n}"],
        "explanation": "goto with label can exit multiple loops (but avoid when possible).",
        "xp": 15
    },
    {
        "id": "cpp-2-6-23",
        "type": "code",
        "question": "Use continue to skip even numbers.",
        "correctAnswer": ["for (int i = 0; i < 10; i++) {\\n    if (i % 2 == 0) continue;\\n    cout << i;\\n}"],
        "explanation": "continue skips to next iteration.",
        "xp": 15
    },
    {
        "id": "cpp-2-6-24",
        "type": "code",
        "question": "Use ternary operator for conditional assignment.",
        "correctAnswer": ["int max = (a > b) ? a : b;", "int max = a > b ? a : b;"],
        "explanation": "Ternary: condition ? expr1 : expr2",
        "xp": 15
    },
    {
        "id": "cpp-2-6-25",
        "type": "code",
        "question": "Use switch with fall-through.",
        "correctAnswer": ["switch (x) {\\n    case 1:\\n    case 2:\\n        cout << \"1 or 2\";\\n        break;\\n    default:\\n        cout << \"other\";\\n}"],
        "explanation": "Multiple cases can share same code (fall-through).",
        "xp": 15
    }
]

lesson6_questions = existing_lesson6 + additional_lesson6

lesson6 = {
    "id": 12,
    "title": "Advanced Control Flow",
    "unitTitle": "2. Functions and Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": data['units'][1]['lessons'][5]['lessonText'],
    "questions": lesson6_questions
}

data['units'][1]['lessons'][5].update(lesson6)
print("✅ Lesson 6: Advanced Control Flow - 25 questions complete")

# Write progress
print(f"\n📊 Unit 2 Complete: All 6 lessons with 25 questions each (150 total)")

# Write to file
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n')
    f.write('// Generated from C++ outline\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n✅ Written to questions/cppCombined.js")