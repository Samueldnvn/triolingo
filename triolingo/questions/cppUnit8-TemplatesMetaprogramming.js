// C++ Unit 8 - TemplatesMetaprogramming
// Generated from cppCombined.js

window.cppUnit8 = {
  "unitId": "9",
  "unitName": "9. Standard Template Library (STL)",
  "lessons": [
    {
      "id": 46,
      "title": "Overview of STL Components",
      "unitTitle": "9. Standard Template Library (STL)",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-9-1-1",
          "type": "typing",
          "question": "What does STL stand for?",
          "correctAnswer": [
            "Standard Template Library"
          ],
          "explanation": "STL is Standard Template Library.",
          "xp": 5
        },
        {
          "id": "cpp-9-1-2",
          "type": "typing",
          "question": "What are the three main components of STL?",
          "correctAnswer": [
            "containers, algorithms, iterators"
          ],
          "explanation": "STL has containers, algorithms, and iterators.",
          "xp": 5
        },
        {
          "id": "cpp-9-1-3",
          "type": "typing",
          "question": "What are STL containers?",
          "correctAnswer": [
            "data structures that store data",
            "collections of objects"
          ],
          "explanation": "Containers are data structures that store collections of objects.",
          "xp": 5
        },
        {
          "id": "cpp-9-1-4",
          "type": "multiple",
          "question": "What do STL algorithms do?",
          "options": [
            "Operate on ranges",
            "Define data structures",
            "Iterate over containers",
            "Manage memory"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Algorithms operate on ranges of elements.",
          "xp": 5
        },
        {
          "id": "cpp-9-1-5",
          "type": "multiple",
          "question": "What do iterators provide?",
          "options": [
            "Way to traverse containers",
            "Memory management",
            "Algorithm implementation",
            "Type safety"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Iterators provide a way to traverse containers.",
          "xp": 5
        },
        {
          "id": "cpp-9-1-6",
          "type": "code",
          "question": "Include vector header.",
          "correctAnswer": [
            "#include <vector>"
          ],
          "explanation": "Include <vector> to use vector container.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-7",
          "type": "code",
          "question": "Include algorithm header.",
          "correctAnswer": [
            "#include <algorithm>"
          ],
          "explanation": "Include <algorithm> to use STL algorithms.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-8",
          "type": "code",
          "question": "Create vector of integers.",
          "correctAnswer": [
            "std::vector<int> v;",
            "vector<int> v;"
          ],
          "explanation": "Create vector of type int.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-9",
          "type": "code",
          "question": "Include iostream header.",
          "correctAnswer": [
            "#include <iostream>"
          ],
          "explanation": "Include <iostream> for input/output.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-10",
          "type": "code",
          "question": "Use std namespace.",
          "correctAnswer": [
            "using namespace std;",
            "std::cout",
            "std::vector"
          ],
          "explanation": "Use namespace std to avoid std:: prefix.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-11",
          "type": "code",
          "question": "Include string header.",
          "correctAnswer": [
            "#include <string>"
          ],
          "explanation": "Include <string> to use std::string.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-12",
          "type": "code",
          "question": "Include map header.",
          "correctAnswer": [
            "#include <map>"
          ],
          "explanation": "Include <map> for associative containers.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-13",
          "type": "code",
          "question": "Create deque of strings.",
          "correctAnswer": [
            "std::deque<std::string> d;",
            "deque<string> d;"
          ],
          "explanation": "Create deque of type string.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-14",
          "type": "code",
          "question": "Include list header.",
          "correctAnswer": [
            "#include <list>"
          ],
          "explanation": "Include <list> for doubly linked list.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-15",
          "type": "code",
          "question": "Include set header.",
          "correctAnswer": [
            "#include <set>"
          ],
          "explanation": "Include <set> for set container.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-16",
          "type": "code",
          "question": "Create stack of integers.",
          "correctAnswer": [
            "std::stack<int> s;",
            "stack<int> s;"
          ],
          "explanation": "Create stack of type int.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-17",
          "type": "code",
          "question": "Create queue of strings.",
          "correctAnswer": [
            "std::queue<std::string> q;",
            "queue<string> q;"
          ],
          "explanation": "Create queue of type string.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-18",
          "type": "code",
          "question": "Include iterator header.",
          "correctAnswer": [
            "#include <iterator>"
          ],
          "explanation": "Include <iterator> for iterator utilities.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-19",
          "type": "code",
          "question": "Use begin() on vector.",
          "correctAnswer": [
            "v.begin()",
            "auto it = v.begin();"
          ],
          "explanation": "begin() returns iterator to first element.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-20",
          "type": "code",
          "question": "Use end() on vector.",
          "correctAnswer": [
            "v.end()",
            "auto it = v.end();"
          ],
          "explanation": "end() returns iterator past last element.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-21",
          "type": "code",
          "question": "Use size() on container.",
          "correctAnswer": [
            "v.size()",
            "size_t sz = v.size();"
          ],
          "explanation": "size() returns number of elements.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-22",
          "type": "code",
          "question": "Use empty() on container.",
          "correctAnswer": [
            "v.empty()",
            "if (v.empty())"
          ],
          "explanation": "empty() returns true if container is empty.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-23",
          "type": "code",
          "question": "Clear container.",
          "correctAnswer": [
            "v.clear()",
            "v.clear();"
          ],
          "explanation": "clear() removes all elements from container.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-24",
          "type": "code",
          "question": "Push back to vector.",
          "correctAnswer": [
            "v.push_back(5);",
            "v.push_back(value);"
          ],
          "explanation": "push_back() adds element to end.",
          "xp": 15
        },
        {
          "id": "cpp-9-1-25",
          "type": "code",
          "question": "Pop back from vector.",
          "correctAnswer": [
            "v.pop_back();",
            "v.pop_back();"
          ],
          "explanation": "pop_back() removes last element.",
          "xp": 15
        }
      ],
      "lessonText": "# Standard Template Library (STL)\n\nSTL is a collection of powerful C++ template classes and algorithms.\n\n## Three Main Components\n\n### 1. Containers\nData structures that store objects:\n- **Sequence containers**: vector, deque, list\n- **Associative containers**: map, set, multimap, multiset\n- **Container adaptors**: stack, queue, priority_queue\n\n### 2. Algorithms\nFunctions that operate on ranges of elements:\n- Sorting: `sort()`, `stable_sort()`\n- Searching: `find()`, `binary_search()`\n- Modifying: `transform()`, `copy()`, `remove()`\n- Numeric: `accumulate()`, `inner_product()`\n\n### 3. Iterators\nObjects that traverse and access container elements:\n- **Input iterators**: read-only\n- **Output iterators**: write-only\n- **Forward iterators**: read/write forward\n- **Bidirectional iterators**: read/write both directions\n- **Random access iterators**: direct access\n\n## Basic Usage\n\n```cpp\n#include <vector>\n#include <algorithm>\n#include <iostream>\n\nint main() {\n    std::vector<int> v = {5, 2, 8, 1, 9};\n    \n    // Sort\n    std::sort(v.begin(), v.end());\n    \n    // Print\n    for (int x : v) {\n        std::cout << x << ' ';\n    }\n}\n```\n\n## Common Operations\n\n```cpp\nv.push_back(10);      // Add element\nv.pop_back();          // Remove last\nv.size();              // Get size\nv.empty();             // Check if empty\nv.clear();             // Remove all\nv.begin();             // First element iterator\nv.end();               // Past-end iterator\n```\n"
    },
    {
      "id": 47,
      "title": "Iterators",
      "unitTitle": "9. Standard Template Library (STL)",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-9-2-1",
          "type": "typing",
          "question": "What is an iterator?",
          "correctAnswer": [
            "object that traverses container",
            "pointer to container elements"
          ],
          "explanation": "Iterator provides uniform way to access container elements.",
          "xp": 5
        },
        {
          "id": "cpp-9-2-2",
          "type": "typing",
          "question": "What does begin() return?",
          "correctAnswer": [
            "iterator to first element"
          ],
          "explanation": "begin() returns iterator to first element.",
          "xp": 5
        },
        {
          "id": "cpp-9-2-3",
          "type": "typing",
          "question": "What does end() return?",
          "correctAnswer": [
            "iterator past last element",
            "one past end"
          ],
          "explanation": "end() returns iterator past last element.",
          "xp": 5
        },
        {
          "id": "cpp-9-2-4",
          "type": "multiple",
          "question": "How to dereference iterator?",
          "options": [
            "*it",
            "it->",
            "it*",
            "&it"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Dereference with * operator.",
          "xp": 5
        },
        {
          "id": "cpp-9-2-5",
          "type": "multiple",
          "question": "How to advance iterator?",
          "options": [
            "++it",
            "it++",
            "next(it)",
            "advance(it)"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Use ++ to advance iterator.",
          "xp": 5
        },
        {
          "id": "cpp-9-2-6",
          "type": "code",
          "question": "Create iterator loop.",
          "correctAnswer": [
            "for (auto it = v.begin(); it != v.end(); ++it)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-7",
          "type": "code",
          "question": "Dereference iterator.",
          "correctAnswer": [
            "*it",
            "int value = *it;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-8",
          "type": "code",
          "question": "Use range-based for loop.",
          "correctAnswer": [
            "for (int x : v)",
            "for (auto x : v)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-9",
          "type": "code",
          "question": "Access member through iterator.",
          "correctAnswer": [
            "it->member",
            "it->method();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-10",
          "type": "code",
          "question": "Use rbegin() and rend().",
          "correctAnswer": [
            "for (auto it = v.rbegin(); it != v.rend(); ++it)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-11",
          "type": "code",
          "question": "Use cbegin() for const iterator.",
          "correctAnswer": [
            "auto it = v.cbegin();",
            "for (auto it = v.cbegin(); it != v.cend(); ++it)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-12",
          "type": "code",
          "question": "Advance iterator by n.",
          "correctAnswer": [
            "it + n",
            "std::advance(it, n)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-13",
          "type": "code",
          "question": "Get distance between iterators.",
          "correctAnswer": [
            "std::distance(begin, end)",
            "auto dist = end - begin;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-14",
          "type": "code",
          "question": "Use std::next().",
          "correctAnswer": [
            "auto next_it = std::next(it);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-15",
          "type": "code",
          "question": "Use std::prev().",
          "correctAnswer": [
            "auto prev_it = std::prev(it);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-16",
          "type": "code",
          "question": "Insert at iterator position.",
          "correctAnswer": [
            "v.insert(it, value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-17",
          "type": "code",
          "question": "Erase at iterator position.",
          "correctAnswer": [
            "v.erase(it);",
            "it = v.erase(it);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-18",
          "type": "code",
          "question": "Use reverse iterator.",
          "correctAnswer": [
            "for (auto it = v.rbegin(); it != v.rend(); ++it)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-19",
          "type": "code",
          "question": "Compare iterators for equality.",
          "correctAnswer": [
            "it1 == it2",
            "if (it1 != it2)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-20",
          "type": "code",
          "question": "Use iterator with algorithm.",
          "correctAnswer": [
            "std::find(v.begin(), v.end(), value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-21",
          "type": "code",
          "question": "Get iterator to element.",
          "correctAnswer": [
            "auto it = v.begin() + index;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-22",
          "type": "code",
          "question": "Use std::advance with negative.",
          "correctAnswer": [
            "std::advance(it, -n);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-23",
          "type": "code",
          "question": "Use iterator with map.",
          "correctAnswer": [
            "for (auto it = m.begin(); it != m.end(); ++it) { cout << it->first << \"=\" << it->second; }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-24",
          "type": "code",
          "question": "Create const_iterator.",
          "correctAnswer": [
            "std::vector<int>::const_iterator it;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-2-25",
          "type": "code",
          "question": "Use std::lower_bound.",
          "correctAnswer": [
            "auto it = std::lower_bound(v.begin(), v.end(), value);"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Iterators\n\nIterators provide a uniform way to traverse containers.\n\n```cpp\nstd::vector<int> v = {1, 2, 3, 4, 5};\n\n// Iterator loop\nfor (auto it = v.begin(); it != v.end(); ++it) {\n    std::cout << *it << ' ';\n}\n\n// Range-based for (C++11)\nfor (int x : v) {\n    std::cout << x << ' ';\n}\n```\n\n**Iterator operations:**\n- `*it` - dereference\n- `++it` - advance\n- `it->member` - member access\n- `it + n` - random access (some iterators)"
    },
    {
      "id": 48,
      "title": "Sequence Containers (vector, deque, list)",
      "unitTitle": "9. Standard Template Library (STL)",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-9-3-1",
          "type": "typing",
          "question": "What is vector?",
          "correctAnswer": [
            "dynamic array",
            "resizable array"
          ],
          "explanation": "Vector is dynamic array with fast random access.",
          "xp": 5
        },
        {
          "id": "cpp-9-3-2",
          "type": "typing",
          "question": "What is deque?",
          "correctAnswer": [
            "double-ended queue",
            "double ended queue"
          ],
          "explanation": "Deque is double-ended queue for fast front/back operations.",
          "xp": 5
        },
        {
          "id": "cpp-9-3-3",
          "type": "typing",
          "question": "What is list?",
          "correctAnswer": [
            "doubly linked list",
            "linked list"
          ],
          "explanation": "List is doubly linked list with fast insertions.",
          "xp": 5
        },
        {
          "id": "cpp-9-3-4",
          "type": "multiple",
          "question": "Which has fastest random access?",
          "options": [
            "vector",
            "deque",
            "list",
            "All same"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Vector has O(1) random access.",
          "xp": 5
        },
        {
          "id": "cpp-9-3-5",
          "type": "multiple",
          "question": "Which has fastest front insertion?",
          "options": [
            "deque and list",
            "vector only",
            "All same",
            "None"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Deque and list have O(1) front insertion.",
          "xp": 5
        },
        {
          "id": "cpp-9-3-6",
          "type": "code",
          "question": "Create vector of integers.",
          "correctAnswer": [
            "std::vector<int> v;",
            "vector<int> v;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-7",
          "type": "code",
          "question": "Push back to vector.",
          "correctAnswer": [
            "v.push_back(5);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-8",
          "type": "code",
          "question": "Access vector element with operator[].",
          "correctAnswer": [
            "v[0]",
            "int x = v[2];"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-9",
          "type": "code",
          "question": "Use at() for bounds checking.",
          "correctAnswer": [
            "v.at(0)",
            "int x = v.at(i);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-10",
          "type": "code",
          "question": "Create deque of strings.",
          "correctAnswer": [
            "std::deque<std::string> d;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-11",
          "type": "code",
          "question": "Push front to deque.",
          "correctAnswer": [
            "d.push_front(1);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-12",
          "type": "code",
          "question": "Create list of doubles.",
          "correctAnswer": [
            "std::list<double> l;",
            "list<double> l;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-13",
          "type": "code",
          "question": "Insert in list.",
          "correctAnswer": [
            "l.insert(it, value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-14",
          "type": "code",
          "question": "Resize vector.",
          "correctAnswer": [
            "v.resize(10);",
            "v.resize(newSize, defaultValue);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-15",
          "type": "code",
          "question": "Reserve capacity for vector.",
          "correctAnswer": [
            "v.reserve(100);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-16",
          "type": "code",
          "question": "Get vector capacity.",
          "correctAnswer": [
            "v.capacity();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-17",
          "type": "code",
          "question": "Pop front from deque.",
          "correctAnswer": [
            "d.pop_front();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-18",
          "type": "code",
          "question": "Sort list.",
          "correctAnswer": [
            "l.sort();",
            "l.sort(std::greater<int>());"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-19",
          "type": "code",
          "question": "Merge two lists.",
          "correctAnswer": [
            "l1.merge(l2);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-20",
          "type": "code",
          "question": "Erase element from vector.",
          "correctAnswer": [
            "v.erase(v.begin() + index);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-21",
          "type": "code",
          "question": "Clear vector.",
          "correctAnswer": [
            "v.clear();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-22",
          "type": "code",
          "question": "Check if vector empty.",
          "correctAnswer": [
            "v.empty();",
            "if (v.empty())"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-23",
          "type": "code",
          "question": "Get vector size.",
          "correctAnswer": [
            "v.size();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-24",
          "type": "code",
          "question": "Use initializer list.",
          "correctAnswer": [
            "std::vector<int> v = {1, 2, 3, 4, 5};"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-3-25",
          "type": "code",
          "question": "Use emplace_back.",
          "correctAnswer": [
            "v.emplace_back(args...);"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Sequence Containers\n\n**vector** - Dynamic array with fast random access\n```cpp\nstd::vector<int> v = {1, 2, 3};\nv.push_back(4);        // Add to end\nv[0] = 10;            // Random access\n```\n\n**deque** - Double-ended queue\n```cpp\nstd::deque<int> d;\nd.push_front(1);        // Add to front\nd.push_back(2);         // Add to end\n```\n\n**list** - Doubly linked list\n```cpp\nstd::list<int> l = {1, 2, 3};\nl.push_front(0);       // Add to front\nl.insert(it, 5);       // Insert at position\n```"
    },
    {
      "id": 49,
      "title": "Associative Containers (map, set)",
      "unitTitle": "9. Standard Template Library (STL)",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-9-4-1",
          "type": "typing",
          "question": "What is map?",
          "correctAnswer": [
            "key-value pairs",
            "associative array",
            "dictionary"
          ],
          "explanation": "Map stores key-value pairs sorted by key.",
          "xp": 5
        },
        {
          "id": "cpp-9-4-2",
          "type": "typing",
          "question": "What is set?",
          "correctAnswer": [
            "unique sorted elements",
            "sorted collection"
          ],
          "explanation": "Set stores unique elements sorted.",
          "xp": 5
        },
        {
          "id": "cpp-9-4-3",
          "type": "typing",
          "question": "What is time complexity for map insert?",
          "correctAnswer": [
            "O(log n)",
            "logarithmic"
          ],
          "explanation": "Map insert is O(log n) due to tree structure.",
          "xp": 5
        },
        {
          "id": "cpp-9-4-4",
          "type": "multiple",
          "question": "Can set contain duplicates?",
          "options": [
            "No",
            "Yes",
            "Only with multiset",
            "Depends"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Set cannot contain duplicates.",
          "xp": 5
        },
        {
          "id": "cpp-9-4-5",
          "type": "multiple",
          "question": "What does map[key] do if key not found?",
          "options": [
            "Creates default value",
            "Throws exception",
            "Returns null",
            "Returns -1"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "map[key] creates element with default value if not found.",
          "xp": 5
        },
        {
          "id": "cpp-9-4-6",
          "type": "code",
          "question": "Create map of string to int.",
          "correctAnswer": [
            "std::map<std::string, int> m;",
            "map<string, int> m;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-7",
          "type": "code",
          "question": "Insert into map.",
          "correctAnswer": [
            "m[\"key\"] = value;",
            "m.insert({\"key\", value});"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-8",
          "type": "code",
          "question": "Create set of integers.",
          "correctAnswer": [
            "std::set<int> s;",
            "set<int> s;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-9",
          "type": "code",
          "question": "Insert into set.",
          "correctAnswer": [
            "s.insert(5);",
            "s.insert(value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-10",
          "type": "code",
          "question": "Find in map.",
          "correctAnswer": [
            "auto it = m.find(key);",
            "if (m.find(key) != m.end())"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-11",
          "type": "code",
          "question": "Find in set.",
          "correctAnswer": [
            "auto it = s.find(value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-12",
          "type": "code",
          "question": "Erase from map.",
          "correctAnswer": [
            "m.erase(key);",
            "m.erase(it);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-13",
          "type": "code",
          "question": "Erase from set.",
          "correctAnswer": [
            "s.erase(value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-14",
          "type": "code",
          "question": "Iterate over map.",
          "correctAnswer": [
            "for (auto& p : m) { cout << p.first << \"=\" << p.second; }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-15",
          "type": "code",
          "question": "Iterate over set.",
          "correctAnswer": [
            "for (int x : s)",
            "for (auto& x : s)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-16",
          "type": "code",
          "question": "Use count() on map.",
          "correctAnswer": [
            "m.count(key)",
            "if (m.count(key) > 0)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-17",
          "type": "code",
          "question": "Check if map empty.",
          "correctAnswer": [
            "m.empty();",
            "if (m.empty())"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-18",
          "type": "code",
          "question": "Get map size.",
          "correctAnswer": [
            "m.size();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-19",
          "type": "code",
          "question": "Create unordered_map.",
          "correctAnswer": [
            "std::unordered_map<std::string, int> m;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-20",
          "type": "code",
          "question": "Create unordered_set.",
          "correctAnswer": [
            "std::unordered_set<int> s;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-21",
          "type": "code",
          "question": "Use lower_bound on map.",
          "correctAnswer": [
            "auto it = m.lower_bound(key);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-22",
          "type": "code",
          "question": "Use upper_bound on map.",
          "correctAnswer": [
            "auto it = m.upper_bound(key);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-23",
          "type": "code",
          "question": "Create multiset.",
          "correctAnswer": [
            "std::multiset<int> ms;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-24",
          "type": "code",
          "question": "Use emplace on map.",
          "correctAnswer": [
            "m.emplace(key, value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-4-25",
          "type": "code",
          "question": "Access map element safely.",
          "correctAnswer": [
            "auto it = m.find(key); if (it != m.end()) { value = it->second; }"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Associative Containers\n\n**map** - Key-value pairs sorted by key\n```cpp\nstd::map<std::string, int> ages;\nages[\"Alice\"] = 25;\nages[\"Bob\"] = 30;\n\n// Access\nint aliceAge = ages[\"Alice\"];\n```\n\n**set** - Unique sorted elements\n```cpp\nstd::set<int> s = {5, 2, 8, 2, 5};  // {2, 5, 8}\ns.insert(10);\n\n// Find\nif (s.find(5) != s.end()) {\n    // Found\n}\n```\n\n**unordered_map/set** - Hash-based, O(1) average"
    },
    {
      "id": 50,
      "title": "Container Adaptors (stack, queue)",
      "unitTitle": "9. Standard Template Library (STL)",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-9-5-1",
          "type": "typing",
          "question": "What is stack?",
          "correctAnswer": [
            "LIFO",
            "last in first out"
          ],
          "explanation": "Stack is Last In First Out structure.",
          "xp": 5
        },
        {
          "id": "cpp-9-5-2",
          "type": "typing",
          "question": "What is queue?",
          "correctAnswer": [
            "FIFO",
            "first in first out"
          ],
          "explanation": "Queue is First In First Out structure.",
          "xp": 5
        },
        {
          "id": "cpp-9-5-3",
          "type": "typing",
          "question": "What does stack.top() return?",
          "correctAnswer": [
            "top element",
            "element on top"
          ],
          "explanation": "top() returns top element without removing.",
          "xp": 5
        },
        {
          "id": "cpp-9-5-4",
          "type": "multiple",
          "question": "What does queue.pop() do?",
          "options": [
            "Removes front element",
            "Returns front",
            "Removes back",
            "Returns back"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "queue.pop() removes front element.",
          "xp": 5
        },
        {
          "id": "cpp-9-5-5",
          "type": "multiple",
          "question": "What does priority_queue return on pop?",
          "options": [
            "Highest priority element",
            "First element",
            "Random",
            "Lowest"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "priority_queue returns highest priority.",
          "xp": 5
        },
        {
          "id": "cpp-9-5-6",
          "type": "code",
          "question": "Create stack of integers.",
          "correctAnswer": [
            "std::stack<int> s;",
            "stack<int> s;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-7",
          "type": "code",
          "question": "Push to stack.",
          "correctAnswer": [
            "s.push(5);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-8",
          "type": "code",
          "question": "Get top of stack.",
          "correctAnswer": [
            "s.top();",
            "int top = s.top();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-9",
          "type": "code",
          "question": "Pop from stack.",
          "correctAnswer": [
            "s.pop();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-10",
          "type": "code",
          "question": "Create queue of strings.",
          "correctAnswer": [
            "std::queue<std::string> q;",
            "queue<string> q;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-11",
          "type": "code",
          "question": "Push to queue.",
          "correctAnswer": [
            "q.push(5);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-12",
          "type": "code",
          "question": "Get front of queue.",
          "correctAnswer": [
            "q.front();",
            "int front = q.front();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-13",
          "type": "code",
          "question": "Get back of queue.",
          "correctAnswer": [
            "q.back();",
            "int back = q.back();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-14",
          "type": "code",
          "question": "Pop from queue.",
          "correctAnswer": [
            "q.pop();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-15",
          "type": "code",
          "question": "Create priority_queue.",
          "correctAnswer": [
            "std::priority_queue<int> pq;",
            "priority_queue<int> pq;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-16",
          "type": "code",
          "question": "Push to priority_queue.",
          "correctAnswer": [
            "pq.push(5);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-17",
          "type": "code",
          "question": "Get top of priority_queue.",
          "correctAnswer": [
            "pq.top();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-18",
          "type": "code",
          "question": "Pop from priority_queue.",
          "correctAnswer": [
            "pq.pop();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-19",
          "type": "code",
          "question": "Create min priority_queue.",
          "correctAnswer": [
            "std::priority_queue<int, vector<int>, greater<int>> pq;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-20",
          "type": "code",
          "question": "Check if stack empty.",
          "correctAnswer": [
            "s.empty();",
            "if (s.empty())"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-21",
          "type": "code",
          "question": "Get stack size.",
          "correctAnswer": [
            "s.size();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-22",
          "type": "code",
          "question": "Swap two stacks.",
          "correctAnswer": [
            "s1.swap(s2);",
            "swap(s1, s2);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-23",
          "type": "code",
          "question": "Create priority_queue with custom comparator.",
          "correctAnswer": [
            "std::priority_queue<Type, vector<Type>, Compare> pq;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-24",
          "type": "code",
          "question": "Emplace in stack.",
          "correctAnswer": [
            "s.emplace(args...);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-5-25",
          "type": "code",
          "question": "Use queue with pair.",
          "correctAnswer": [
            "std::queue<pair<int, int>> q;"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Container Adaptors\n\n**stack** - LIFO (Last In, First Out)\n```cpp\nstd::stack<int> s;\ns.push(10);     // Push\nint top = s.top();  // Peek\ns.pop();           // Pop\n```\n\n**queue** - FIFO (First In, First Out)\n```cpp\nstd::queue<int> q;\nq.push(10);      // Enqueue\nint front = q.front();  // Front\nq.pop();               // Dequeue\n```\n\n**priority_queue** - Highest priority first\n```cpp\nstd::priority_queue<int> pq;\npq.push(10);  // O(log n)\npq.pop();     // O(log n)\n```"
    },
    {
      "id": 51,
      "title": "STL Algorithms",
      "unitTitle": "9. Standard Template Library (STL)",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-9-6-1",
          "type": "typing",
          "question": "What does std::sort do?",
          "correctAnswer": [
            "sorts range",
            "orders elements"
          ],
          "explanation": "sort() sorts elements in ascending order.",
          "xp": 5
        },
        {
          "id": "cpp-9-6-2",
          "type": "typing",
          "question": "What does std::find do?",
          "correctAnswer": [
            "finds element in range",
            "searches for value"
          ],
          "explanation": "find() searches for element in range.",
          "xp": 5
        },
        {
          "id": "cpp-9-6-3",
          "type": "typing",
          "question": "What does std::fill do?",
          "correctAnswer": [
            "fills range with value",
            "sets all elements"
          ],
          "explanation": "fill() sets all elements to given value.",
          "xp": 5
        },
        {
          "id": "cpp-9-6-4",
          "type": "multiple",
          "question": "What is complexity of sort?",
          "options": [
            "O(n log n)",
            "O(n)",
            "O(n^2)",
            "O(1)"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "sort() has O(n log n) complexity.",
          "xp": 5
        },
        {
          "id": "cpp-9-6-5",
          "type": "multiple",
          "question": "What does std::transform do?",
          "options": [
            "Applies function to each element",
            "Sorts elements",
            "Finds element",
            "Counts elements"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "transform() applies function to each element.",
          "xp": 5
        },
        {
          "id": "cpp-9-6-6",
          "type": "code",
          "question": "Sort vector in ascending order.",
          "correctAnswer": [
            "std::sort(v.begin(), v.end());"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-7",
          "type": "code",
          "question": "Sort vector in descending order.",
          "correctAnswer": [
            "std::sort(v.begin(), v.end(), std::greater<int>());"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-8",
          "type": "code",
          "question": "Find element in vector.",
          "correctAnswer": [
            "auto it = std::find(v.begin(), v.end(), value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-9",
          "type": "code",
          "question": "Binary search in sorted vector.",
          "correctAnswer": [
            "std::binary_search(v.begin(), v.end(), value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-10",
          "type": "code",
          "question": "Count occurrences of value.",
          "correctAnswer": [
            "std::count(v.begin(), v.end(), value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-11",
          "type": "code",
          "question": "Fill vector with value.",
          "correctAnswer": [
            "std::fill(v.begin(), v.end(), value);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-12",
          "type": "code",
          "question": "Copy vector to another.",
          "correctAnswer": [
            "std::copy(src.begin(), src.end(), dest.begin());"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-13",
          "type": "code",
          "question": "Transform vector with lambda.",
          "correctAnswer": [
            "std::transform(v.begin(), v.end(), result.begin(), [](int x) { return x * 2; });"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-14",
          "type": "code",
          "question": "Remove elements by value.",
          "correctAnswer": [
            "v.erase(std::remove(v.begin(), v.end(), value), v.end());"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-15",
          "type": "code",
          "question": "Generate sequence with iota.",
          "correctAnswer": [
            "std::iota(v.begin(), v.end(), 0);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-16",
          "type": "code",
          "question": "Shuffle vector.",
          "correctAnswer": [
            "std::random_shuffle(v.begin(), v.end());",
            "std::shuffle(v.begin(), v.end(), rng);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-17",
          "type": "code",
          "question": "Reverse vector.",
          "correctAnswer": [
            "std::reverse(v.begin(), v.end());"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-18",
          "type": "code",
          "question": "Accumulate values.",
          "correctAnswer": [
            "std::accumulate(v.begin(), v.end(), 0);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-19",
          "type": "code",
          "question": "Find min element.",
          "correctAnswer": [
            "auto it = std::min_element(v.begin(), v.end());"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-20",
          "type": "code",
          "question": "Find max element.",
          "correctAnswer": [
            "auto it = std::max_element(v.begin(), v.end());"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-21",
          "type": "code",
          "question": "Sort with custom comparator.",
          "correctAnswer": [
            "std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-22",
          "type": "code",
          "question": "Partition vector.",
          "correctAnswer": [
            "auto it = std::partition(v.begin(), v.end(), [](int x) { return x > 0; });"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-23",
          "type": "code",
          "question": "Rotate vector.",
          "correctAnswer": [
            "std::rotate(v.begin(), v.begin() + k, v.end());"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-24",
          "type": "code",
          "question": "Use for_each algorithm.",
          "correctAnswer": [
            "std::for_each(v.begin(), v.end(), [](int x) { cout << x; });"
          ],
          "xp": 15
        },
        {
          "id": "cpp-9-6-25",
          "type": "code",
          "question": "Unique elements in sorted vector.",
          "correctAnswer": [
            "v.erase(std::unique(v.begin(), v.end()), v.end());"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# STL Algorithms\n\nPowerful algorithms that work on ranges.\n\n**Sorting:**\n```cpp\nstd::sort(v.begin(), v.end());           // Ascending\nstd::sort(v.begin(), v.end(), std::greater<int>());  // Descending\n```\n\n**Searching:**\n```cpp\nauto it = std::find(v.begin(), v.end(), value);\nbool found = std::binary_search(v.begin(), v.end(), value);\n```\n\n**Modifying:**\n```cpp\nstd::fill(v.begin(), v.end(), 0);\nstd::transform(v.begin(), v.end(), result.begin(), [](int x) { return x * 2; });\nstd::copy(src.begin(), src.end(), dest.begin());\n```"
    }
  ]
};
