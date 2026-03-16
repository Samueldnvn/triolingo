#!/usr/bin/env python3
"""
Build Unit 22: Linked Lists (Lessons 1-4)
4 lessons with 25 questions each (100 total)
Heavy emphasis on code questions (~70% = 70 code questions)
Note: Unit 22 skeleton has linked list lessons despite being titled "Hash Tables"
"""
import json

print("🚀 Building C++ Unit 22: Linked Lists (Lessons 1-4)")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: Singly Linked List
# ============================================================================
lesson1_questions = [
    {"id": "cpp-22-1-1", "type": "typing", "question": "What is linked list?", "correctAnswer": ["dynamic data structure", "nodes with pointers", "sequential"], "explanation": "Nodes with next pointers.", "xp": 5},
    {"id": "cpp-22-1-2", "type": "typing", "question": "Singly linked list has?", "correctAnswer": ["next pointer", "one pointer", "forward only"], "explanation": "Points to next node.", "xp": 5},
    {"id": "cpp-22-1-3", "type": "typing", "question": "Insert at front O?", "correctAnswer": ["1", "constant", "O(1)"], "explanation": "O(1) to insert.", "xp": 5},
    {"id": "cpp-22-1-4", "type": "multiple", "question": "Random access O?", "options": ["n", "1", "log n", "n^2"], "correctAnswer": [0], "explanation": "O(n) to access.", "xp": 5},
    {"id": "cpp-22-1-5", "type": "multiple", "question": "Delete head O?", "options": ["1", "n", "log n", "constant"], "correctAnswer": [0], "explanation": "O(1) to delete head.", "xp": 5},
    {"id": "cpp-22-1-6", "type": "code", "question": "Node struct.", "correctAnswer": ["struct Node { int data; Node* next; };", "node struct"],
        "explanation": "data + next pointer.", "xp": 15},
    {"id": "cpp-22-1-7", "type": "code", "question": "Create node.", "correctAnswer": ["Node* newNode = new Node{data, nullptr};", "create node"],
        "explanation": "new Node{data, nullptr}", "xp": 15},
    {"id": "cpp-22-1-8", "type": "code", "question": "Insert at front.", "correctAnswer": ["newNode->next = head;\nhead = newNode;", "insert front"],
        "explanation": "Link to head, update head.", "xp": 15},
    {"id": "cpp-22-1-9", "type": "code", "question": "Insert at end.", "correctAnswer": ["if (!head) head = newNode;\nelse { Node* curr = head; while (curr->next) curr = curr->next; curr->next = newNode; }", "insert end"],
        "explanation": "Traverse to end, link.", "xp": 15},
    {"id": "cpp-22-1-10", "type": "code", "question": "Delete head.", "correctAnswer": ["if (head) { Node* temp = head; head = head->next; delete temp; }", "delete head"],
        "explanation": "Save head, move to next, delete.", "xp": 15},
    {"id": "cpp-22-1-11", "type": "code", "question": "Search value.", "correctAnswer": ["Node* curr = head; while (curr && curr->data != val) curr = curr->next;", "search"],
        "explanation": "Traverse until found.", "xp": 15},
    {"id": "cpp-22-1-12", "type": "code", "question": "Find nth node.", "correctAnswer": ["for (int i = 0; i < n && curr; i++) curr = curr->next;", "find nth"],
        "explanation": "Move n times.", "xp": 15},
    {"id": "cpp-22-1-13", "type": "code", "question": "Reverse list.", "correctAnswer": ["Node* prev = nullptr;\nwhile (head) { Node* next = head->next; head->next = prev; prev = head; head = next; }\nhead = prev;", "reverse"],
        "explanation": "Reverse pointers iteratively.", "xp": 15},
    {"id": "cpp-22-1-14", "type": "code", "question": "Traverse list.", "correctAnswer": ["Node* curr = head; while (curr) { cout << curr->data << endl; curr = curr->next; }", "traverse"],
        "explanation": "Loop through nodes.", "xp": 15},
    {"id": "cpp-22-1-15", "type": "code", "question": "Count nodes.", "correctAnswer": ["int count = 0; Node* curr = head; while (curr) { count++; curr = curr->next; }", "count"],
        "explanation": "Traverse and count.", "xp": 15},
    {"id": "cpp-22-1-16", "type": "code", "question": "Find middle.", "correctAnswer": ["Node* slow = head, *fast = head; while (fast && fast->next) { slow = slow->next; fast = fast->next->next; }", "middle"],
        "explanation": "Slow/fast pointers.", "xp": 15},
    {"id": "cpp-22-1-17", "type": "code", "question": "Detect cycle.", "correctAnswer": ["Node* slow = head, *fast = head; while (fast && fast->next) { slow = slow->next; fast = fast->next->next; if (slow == fast) return true; }", "floyd"],
        "explanation": "Floyd's cycle detection.", "xp": 15},
    {"id": "cpp-22-1-18", "type": "code", "question": "Find cycle start.", "correctAnswer": ["slow = head; while (slow != fast) { slow = slow->next; fast = fast->next; }", "cycle start"],
        "explanation": "Move head and meet point.", "xp": 15},
    {"id": "cpp-22-1-19", "type": "code", "question": "Remove cycle.", "correctAnswer": ["Node* ptr = meet; while (ptr->next != meet) ptr = ptr->next; ptr->next = nullptr;", "remove cycle"],
        "explanation": "Find last node in cycle.", "xp": 15},
    {"id": "cpp-22-1-20", "type": "code", "question": "Delete node with pointer.", "correctAnswer": ["Node* temp = node->next; node->data = temp->data; node->next = temp->next; delete temp;", "delete with ptr"],
        "explanation": "Copy next, delete next.", "xp": 15},
    {"id": "cpp-22-1-21", "type": "code", "question": "Sorted insert.", "correctAnswer": ["if (!head || val < head->data) { newNode->next = head; head = newNode; } else { Node* curr = head; while (curr->next && curr->next->data < val) curr = curr->next; newNode->next = curr->next; curr->next = newNode; }", "sorted"],
        "explanation": "Find position, insert.", "xp": 15},
    {"id": "cpp-22-1-22", "type": "code", "question": "Remove duplicates sorted.", "correctAnswer": ["Node* curr = head; while (curr && curr->next) { if (curr->data == curr->next->data) { Node* temp = curr->next; curr->next = temp->next; delete temp; } else curr = curr->next; }", "duplicates"],
        "explanation": "Skip duplicates.", "xp": 15},
    {"id": "cpp-22-1-23", "type": "code", "question": "Delete list.", "correctAnswer": ["while (head) { Node* temp = head; head = head->next; delete temp; }", "delete all"],
        "explanation": "Delete all nodes.", "xp": 15},
    {"id": "cpp-22-1-24", "type": "code", "question": "Recursive reverse.", "correctAnswer": ["Node* reverse(Node* head) { if (!head || !head->next) return head; Node* rest = reverse(head->next); head->next->next = head; head->next = nullptr; return rest; }", "recursive"],
        "explanation": "Reverse recursively.", "xp": 15},
    {"id": "cpp-22-1-25", "type": "code", "question": "Linked list class.", "correctAnswer": ["class LinkedList { Node* head; public: LinkedList() : head(nullptr) {} void insert(int val); };", "class"],
        "explanation": "Wrap in class.", "xp": 15}
]

lesson1 = {
    "id": "cpp-U22-L1", "title": "Singly Linked List", "unitTitle": "22. Linked Lists", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Singly Linked List

Linear data structure with nodes pointing to next node.

## Node Structure

```cpp
struct Node {
    int data;
    Node* next;
    
    Node(int val) : data(val), next(nullptr) {}
};
```

## Basic Operations

```cpp
// Insert at front
void insertFront(Node*& head, int val) {
    Node* newNode = new Node(val);
    newNode->next = head;
    head = newNode;
}

// Insert at end
void insertEnd(Node*& head, int val) {
    Node* newNode = new Node(val);
    if (!head) {
        head = newNode;
        return;
    }
    Node* curr = head;
    while (curr->next) {
        curr = curr->next;
    }
    curr->next = newNode;
}

// Delete head
void deleteHead(Node*& head) {
    if (head) {
        Node* temp = head;
        head = head->next;
        delete temp;
    }
}

// Search
Node* search(Node* head, int val) {
    Node* curr = head;
    while (curr && curr->data != val) {
        curr = curr->next;
    }
    return curr;
}
```

## Advanced Operations

```cpp
// Reverse linked list
Node* reverse(Node* head) {
    Node* prev = nullptr;
    while (head) {
        Node* next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

// Find middle node
Node* findMiddle(Node* head) {
    Node* slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

// Detect cycle (Floyd's algorithm)
bool hasCycle(Node* head) {
    Node* slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}
```
""",
    "questions": lesson1_questions
}

# ============================================================================
# LESSON 2: Doubly Linked List
# ============================================================================
lesson2_questions = [
    {"id": "cpp-22-2-1", "type": "typing", "question": "Doubly linked list has?", "correctAnswer": ["next and prev", "two pointers", "bidirectional"], "explanation": "Points both directions.", "xp": 5},
    {"id": "cpp-22-2-2", "type": "typing", "question": "Can traverse backwards?", "correctAnswer": ["yes", "true"], "explanation": "Prev allows reverse traversal.", "xp": 5},
    {"id": "cpp-22-2-3", "type": "typing", "question": "More memory than singly?", "correctAnswer": ["yes", "true"], "explanation": "Extra prev pointer.", "xp": 5},
    {"id": "cpp-22-2-4", "type": "multiple", "question": "Insert at end O?", "options": ["1 with tail", "n without tail", "both", "neither"], "correctAnswer": [0], "explanation": "O(1) with tail pointer.", "xp": 5},
    {"id": "cpp-22-2-5", "type": "multiple", "question": "Delete node O?", "options": ["1", "n", "log n", "constant"], "correctAnswer": [0], "explanation": "O(1) with node pointer.", "xp": 5},
    {"id": "cpp-22-2-6", "type": "code", "question": "Doubly node struct.", "correctAnswer": ["struct Node { int data; Node* next; Node* prev; };", "doubly node"],
        "explanation": "data + next + prev.", "xp": 15},
    {"id": "cpp-22-2-7", "type": "code", "question": "Create doubly node.", "correctAnswer": ["Node* newNode = new Node{data, nullptr, nullptr};", "create doubly"],
        "explanation": "new Node{data, next, prev}", "xp": 15},
    {"id": "cpp-22-2-8", "type": "code", "question": "Insert front doubly.", "correctAnswer": ["newNode->next = head;\nif (head) head->prev = newNode;\nhead = newNode;", "insert front doubly"],
        "explanation": "Link both directions.", "xp": 15},
    {"id": "cpp-22-2-9", "type": "code", "question": "Insert end doubly.", "correctAnswer": ["if (!head) { head = newNode; tail = newNode; } else { tail->next = newNode; newNode->prev = tail; tail = newNode; }", "insert end doubly"],
        "explanation": "Update tail.", "xp": 15},
    {"id": "cpp-22-2-10", "type": "code", "question": "Delete node doubly.", "correctAnswer": ["if (node->prev) node->prev->next = node->next;\nif (node->next) node->next->prev = node->prev;\ndelete node;", "delete doubly"],
        "explanation": "Unlink from both sides.", "xp": 15},
    {"id": "cpp-22-2-11", "type": "code", "question": "Delete head doubly.", "correctAnswer": ["if (head) { Node* temp = head; head = head->next; if (head) head->prev = nullptr; else tail = nullptr; delete temp; }", "delete head doubly"],
        "explanation": "Update head and tail.", "xp": 15},
    {"id": "cpp-22-2-12", "type": "code", "question": "Delete tail doubly.", "correctAnswer": ["if (tail) { Node* temp = tail; tail = tail->prev; if (tail) tail->next = nullptr; else head = nullptr; delete temp; }", "delete tail doubly"],
        "explanation": "Update tail and head.", "xp": 15},
    {"id": "cpp-22-2-13", "type": "code", "question": "Traverse forward.", "correctAnswer": ["Node* curr = head; while (curr) { cout << curr->data << endl; curr = curr->next; }", "forward"],
        "explanation": "Follow next pointers.", "xp": 15},
    {"id": "cpp-22-2-14", "type": "code", "question": "Traverse backward.", "correctAnswer": ["Node* curr = tail; while (curr) { cout << curr->data << endl; curr = curr->prev; }", "backward"],
        "explanation": "Follow prev pointers.", "xp": 15},
    {"id": "cpp-22-2-15", "type": "code", "question": "Insert before node.", "correctAnswer": ["newNode->next = node;\nnewNode->prev = node->prev;\nif (node->prev) node->prev->next = newNode;\nelse head = newNode;\nnode->prev = newNode;", "insert before"],
        "explanation": "Link before target.", "xp": 15},
    {"id": "cpp-22-2-16", "type": "code", "question": "Insert after node.", "correctAnswer": ["newNode->next = node->next;\nnewNode->prev = node;\nif (node->next) node->next->prev = newNode;\nelse tail = newNode;\nnode->next = newNode;", "insert after"],
        "explanation": "Link after target.", "xp": 15},
    {"id": "cpp-22-2-17", "type": "code", "question": "Reverse doubly.", "correctAnswer": ["Node* curr = head; while (curr) { Node* temp = curr->next; curr->next = curr->prev; curr->prev = temp; curr = temp; } std::swap(head, tail);", "reverse doubly"],
        "explanation": "Swap next/prev, swap head/tail.", "xp": 15},
    {"id": "cpp-22-2-18", "type": "code", "question": "Doubly list class.", "correctAnswer": ["class DoublyLinkedList { Node* head, *tail; public: DoublyLinkedList() : head(nullptr), tail(nullptr) {} };", "class"],
        "explanation": "Head and tail pointers.", "xp": 15},
    {"id": "cpp-22-2-19", "type": "code", "question": "Get size.", "correctAnswer": ["int size = 0; Node* curr = head; while (curr) { size++; curr = curr->next; }", "size"],
        "explanation": "Traverse and count.", "xp": 15},
    {"id": "cpp-22-2-20", "type": "code", "question": "Get nth node.", "correctAnswer": ["Node* curr = head; for (int i = 0; i < n && curr; i++) curr = curr->next;", "nth"],
        "explanation": "Move n times.", "xp": 15},
    {"id": "cpp-22-2-21", "type": "code", "question": "Get nth from end.", "correctAnswer": ["Node* slow = head, *fast = head; for (int i = 0; i < n && fast; i++) fast = fast->next; while (fast) { slow = slow->next; fast = fast->next; }", "from end"],
        "explanation": "Move fast n steps, then both.", "xp": 15},
    {"id": "cpp-22-2-22", "type": "code", "question": "Empty check.", "correctAnswer": ["bool empty = (head == nullptr);", "empty"],
        "explanation": "head == nullptr", "xp": 15},
    {"id": "cpp-22-2-23", "type": "code", "question": "Clear list.", "correctAnswer": ["while (head) { Node* temp = head; head = head->next; delete temp; } tail = nullptr;", "clear"],
        "explanation": "Delete all, reset tail.", "xp": 15},
    {"id": "cpp-22-2-24", "type": "code", "question": "Remove value.", "correctAnswer": ["Node* curr = head; while (curr && curr->data != val) curr = curr->next; if (curr) { if (curr->prev) curr->prev->next = curr->next; else head = curr->next; if (curr->next) curr->next->prev = curr->prev; else tail = curr->prev; delete curr; }", "remove value"],
        "explanation": "Find and unlink.", "xp": 15},
    {"id": "cpp-22-2-25", "type": "code", "question": "Move to front.", "correctAnswer": ["if (node != head) { if (node->prev) node->prev->next = node->next; else tail = node->next; if (node->next) node->next->prev = node->prev; else tail = node->prev; node->next = head; node->prev = nullptr; if (head) head->prev = node; head = node; }", "move front"],
        "explanation": "Unlink, reinsert at front.", "xp": 15}
]

lesson2 = {
    "id": "cpp-U22-L2", "title": "Doubly Linked List", "unitTitle": "22. Linked Lists", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Doubly Linked List

Linked list with nodes pointing both forward and backward.

## Node Structure

```cpp
struct Node {
    int data;
    Node* next;
    Node* prev;
    
    Node(int val) : data(val), next(nullptr), prev(nullptr) {}
};
```

## Basic Operations

```cpp
class DoublyLinkedList {
    Node* head;
    Node* tail;
    
public:
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}
    
    // Insert at front
    void insertFront(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        if (head) {
            head->prev = newNode;
        }
        head = newNode;
        if (!tail) {
            tail = newNode;
        }
    }
    
    // Insert at end (O(1) with tail)
    void insertEnd(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = tail = newNode;
            return;
        }
        tail->next = newNode;
        newNode->prev = tail;
        tail = newNode;
    }
    
    // Delete node (O(1) with pointer)
    void deleteNode(Node* node) {
        if (node->prev) {
            node->prev->next = node->next;
        } else {
            head = node->next;
        }
        if (node->next) {
            node->next->prev = node->prev;
        } else {
            tail = node->prev;
        }
        delete node;
    }
};
```

## Advantages Over Singly

- Bidirectional traversal
- O(1) deletion with node pointer
- O(1) insertion at both ends (with tail)
- Easy to implement deque

## Disadvantages

- More memory (extra pointer)
- More complex operations
- Slightly slower due to extra pointer maintenance
""",
    "questions": lesson2_questions
}

# ============================================================================
# LESSON 3: Circular Linked List
# ============================================================================
lesson3_questions = [
    {"id": "cpp-22-3-1", "type": "typing", "question": "Circular list end points?", "correctAnswer": ["head", "start", "first node"], "explanation": "Last node points to head.", "xp": 5},
    {"id": "cpp-22-3-2", "type": "typing", "question": "No null pointers?", "correctAnswer": ["yes", "true"], "explanation": "All nodes have valid next.", "xp": 5},
    {"id": "cpp-22-3-3", "type": "typing", "question": "Good for round-robin?", "correctAnswer": ["yes", "true"], "explanation": "Perfect for cycling.", "xp": 5},
    {"id": "cpp-22-3-4", "type": "multiple", "question": "Check end condition?", "options": ["node == head", "node == nullptr", "both", "neither"], "correctAnswer": [0], "explanation": "Stop when back at head.", "xp": 5},
    {"id": "cpp-22-3-5", "type": "multiple", "question": "Insert at front O?", "options": ["1", "n", "log n", "constant"], "correctAnswer": [0], "explanation": "O(1) with tail.", "xp": 5},
    {"id": "cpp-22-3-6", "type": "code", "question": "Create circular.", "correctAnswer": ["Node* head = new Node(data);\nhead->next = head;", "create circular"],
        "explanation": "Node points to itself.", "xp": 15},
    {"id": "cpp-22-3-7", "type": "code", "question": "Insert front circular.", "correctAnswer": ["if (!head) { newNode->next = newNode; head = newNode; } else { Node* curr = head; while (curr->next != head) curr = curr->next; curr->next = newNode; newNode->next = head; head = newNode; }", "insert front circular"],
        "explanation": "Find last, link to new.", "xp": 15},
    {"id": "cpp-22-3-8", "type": "code", "question": "Insert end circular.", "correctAnswer": ["if (!head) { newNode->next = newNode; head = newNode; } else { Node* curr = head; while (curr->next != head) curr = curr->next; curr->next = newNode; newNode->next = head; }", "insert end circular"],
        "explanation": "Find last, link new.", "xp": 15},
    {"id": "cpp-22-3-9", "type": "code", "question": "Delete head circular.", "correctAnswer": ["if (!head) return;\nif (head->next == head) { delete head; head = nullptr; } else { Node* curr = head; while (curr->next != head) curr = curr->next; curr->next = head->next; Node* temp = head; head = head->next; delete temp; }", "delete head circular"],
        "explanation": "Handle single node case.", "xp": 15},
    {"id": "cpp-22-3-10", "type": "code", "question": "Traverse circular.", "correctAnswer": ["if (!head) return;\nNode* curr = head;\ndo { cout << curr->data << endl; curr = curr->next; } while (curr != head);", "traverse circular"],
        "explanation": "do-while loop.", "xp": 15},
    {"id": "cpp-22-3-11", "type": "code", "question": "Count nodes circular.", "correctAnswer": ["if (!head) return 0;\nint count = 1;\nNode* curr = head->next;\nwhile (curr != head) { count++; curr = curr->next; }", "count circular"],
        "explanation": "Count until back at head.", "xp": 15},
    {"id": "cpp-22-3-12", "type": "code", "question": "Search circular.", "correctAnswer": ["if (!head) return nullptr;\nNode* curr = head;\ndo { if (curr->data == val) return curr; curr = curr->next; } while (curr != head);", "search circular"],
        "explanation": "Search do-while.", "xp": 15},
    {"id": "cpp-22-3-13", "type": "code", "question": "Split circular.", "correctAnswer": ["// Find middle, split into two lists", "split"],
        "explanation": "Split at middle.", "xp": 15},
    {"id": "cpp-22-3-14", "type": "code", "question": "Sorted insert circular.", "correctAnswer": ["if (!head) { newNode->next = newNode; head = newNode; } else if (val < head->data) { Node* curr = head; while (curr->next != head) curr = curr->next; curr->next = newNode; newNode->next = head; head = newNode; } else { Node* curr = head; while (curr->next != head && curr->next->data < val) curr = curr->next; newNode->next = curr->next; curr->next = newNode; }", "sorted insert circular"],
        "explanation": "Find position, insert.", "xp": 15},
    {"id": "cpp-22-3-15", "type": "code", "question": "Delete node circular.", "correctAnswer": ["if (!head) return;\nNode* curr = head;\nNode* prev = nullptr;\nwhile (curr->next != head) { if (curr->data == val) { if (prev) prev->next = curr->next; else { Node* temp = head; while (temp->next != head) temp = temp->next; temp->next = curr->next; head = curr->next; } delete curr; return; } prev = curr; curr = curr->next; }", "delete node circular"],
        "explanation": "Find and unlink.", "xp": 15},
    {"id": "cpp-22-3-16", "type": "code", "question": "Reverse circular.", "correctAnswer": ["if (!head) return;\nNode* prev = nullptr;\nNode* curr = head;\nNode* first = head;\ndo { Node* next = curr->next; curr->next = prev; prev = curr; curr = next; } while (curr != first);\nhead->next = prev;\nhead = prev;", "reverse circular"],
        "explanation": "Reverse, reconnect.", "xp": 15},
    {"id": "cpp-22-3-17", "type": "code", "question": "Check single node.", "correctAnswer": ["bool single = (head && head->next == head);", "single node"],
        "explanation": "next points to itself.", "xp": 15},
    {"id": "cpp-22-3-18", "type": "code", "question": "Get last node.", "correctAnswer": ["Node* curr = head; while (curr->next != head) curr = curr->next;", "last"],
        "explanation": "Traverse to last.", "xp": 15},
    {"id": "cpp-22-3-19", "type": "code", "question": "Josephus problem.", "correctAnswer": ["// Remove every kth node", "josephus"],
        "explanation": "Circular elimination.", "xp": 15},
    {"id": "cpp-22-3-20", "type": "code", "question": "Circular buffer.", "correctAnswer": ["// Use circular list for buffer", "buffer"],
        "explanation": "Wrap around.", "xp": 15},
    {"id": "cpp-22-3-21", "type": "code", "question": "Round robin scheduler.", "correctAnswer": ["// Use circular list for scheduling", "scheduler"],
        "explanation": "Cycle through tasks.", "xp": 15},
    {"id": "cpp-22-3-22", "type": "code", "question": "Merge circular lists.", "correctAnswer": ["// Connect end of first to head of second", "merge"],
        "explanation": "Link two circles.", "xp": 15},
    {"id": "cpp-22-3-23", "type": "code", "question": "Detect cycle in circular.", "correctAnswer": ["if (!head) return false;\nNode* curr = head;\ndo { curr = curr->next; if (curr == head) return true; } while (curr);", "detect"],
        "explanation": "Always circular.", "xp": 15},
    {"id": "cpp-22-3-24", "type": "code", "question": "Circular doubly linked.", "correctAnswer": ["struct Node { int data; Node* next; Node* prev; };", "circular doubly"],
        "explanation": "Doubly circular.", "xp": 15},
    {"id": "cpp-22-3-25", "type": "code", "question": "Circular list class.", "correctAnswer": ["class CircularLinkedList { Node* head; public: void insert(int val); void remove(int val); };", "class"],
        "explanation": "Wrap in class.", "xp": 15}
]

lesson3 = {
    "id": "cpp-U22-L3", "title": "Circular Linked List", "unitTitle": "22. Linked Lists", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Circular Linked List

Linked list where last node points back to first node.

## Structure

```cpp
struct Node {
    int data;
    Node* next;
    
    Node(int val) : data(val), next(nullptr) {}
};
```

## Basic Operations

```cpp
// Create circular list (single node)
Node* createCircular(int val) {
    Node* head = new Node(val);
    head->next = head;
    return head;
}

// Insert at front
void insertFront(Node*& head, int val) {
    Node* newNode = new Node(val);
    if (!head) {
        newNode->next = newNode;
        head = newNode;
        return;
    }
    // Find last node
    Node* curr = head;
    while (curr->next != head) {
        curr = curr->next;
    }
    curr->next = newNode;
    newNode->next = head;
    head = newNode;
}

// Insert at end
void insertEnd(Node*& head, int val) {
    Node* newNode = new Node(val);
    if (!head) {
        newNode->next = newNode;
        head = newNode;
        return;
    }
    Node* curr = head;
    while (curr->next != head) {
        curr = curr->next;
    }
    curr->next = newNode;
    newNode->next = head;
}
```

## Traversal

```cpp
void traverse(Node* head) {
    if (!head) return;
    
    Node* curr = head;
    do {
        std::cout << curr->data << std::endl;
        curr = curr->next;
    } while (curr != head);
}
```

## Applications

- Round-robin scheduling
- Circular buffers
- Josephus problem
- Multi-player games
""",
    "questions": lesson3_questions
}

# ============================================================================
# LESSON 4: XOR Linked List
# ============================================================================
lesson4_questions = [
    {"id": "cpp-22-4-1", "type": "typing", "question": "XOR list uses?", "correctAnswer": ["xor of pointers", "single pointer", "memory efficient"], "explanation": "Store XOR of prev/next.", "xp": 5},
    {"id": "cpp-22-4-2", "type": "typing", "question": "Saves memory?", "correctAnswer": ["yes", "true"], "explanation": "One pointer instead of two.", "xp": 5},
    {"id": "cpp-22-4-3", "type": "typing", "question": "Can traverse?", "correctAnswer": ["yes with prev", "need previous", "bidirectional"], "explanation": "Need previous node.", "xp": 5},
    {"id": "cpp-22-4-4", "type": "multiple", "question": "XOR of same pointer?", "options": ["0", "null", "pointer", "undefined"], "correctAnswer": [0], "explanation": "ptr XOR ptr = 0.", "xp": 5},
    {"id": "cpp-22-4-5", "type": "multiple", "question": "Traverse direction?", "options": ["both", "forward only", "backward only", "neither"], "correctAnswer": [0], "explanation": "Can go both ways.", "xp": 5},
    {"id": "cpp-22-4-6", "type": "code", "question": "XOR node struct.", "correctAnswer": ["struct Node { int data; uintptr_t both; };", "xor node"],
        "explanation": "uintptr_t for XOR.", "xp": 15},
    {"id": "cpp-22-4-7", "type": "code", "question": "XOR macro.", "correctAnswer": ["#define XOR(a, b) ((uintptr_t)(a) ^ (uintptr_t)(b))", "xor macro"],
        "explanation": "Cast to uintptr_t.", "xp": 15},
    {"id": "cpp-22-4-8", "type": "code", "question": "Get next from head.", "correctAnswer": ["Node* next = (Node*)head->both;", "next from head"],
        "explanation": "both XOR 0 = next.", "xp": 15},
    {"id": "cpp-22-4-9", "type": "code", "question": "Get next from middle.", "correctAnswer": ["Node* next = (Node*)(curr->both ^ (uintptr_t)prev);", "next"],
        "explanation": "both XOR prev = next.", "xp": 15},
    {"id": "cpp-22-4-10", "type": "code", "question": "Get prev from middle.", "correctAnswer": ["Node* prev = (Node*)(curr->both ^ (uintptr_t)next);", "prev"],
        "explanation": "both XOR next = prev.", "xp": 15},
    {"id": "cpp-22-4-11", "type": "code", "question": "Insert after.", "correctAnswer": ["newNode->both = XOR(curr, currNext);\ncurr->both = XOR(newNode, XOR(curr->both, currNext));\ncurrNext->both = XOR(newNode, XOR(currNext->both, curr));", "insert after"],
        "explanation": "Update XORs.", "xp": 15},
    {"id": "cpp-22-4-12", "type": "code", "question": "Traverse forward.", "correctAnswer": ["Node* prev = nullptr;\nNode* curr = head;\nwhile (curr) { cout << curr->data << endl; Node* next = (Node*)(curr->both ^ (uintptr_t)prev); prev = curr; curr = next; }", "traverse"],
        "explanation": "Keep prev, compute next.", "xp": 15},
    {"id": "cpp-22-4-13", "type": "code", "question": "Insert at front.", "correctAnswer": ["if (!head) { newNode->both = 0; head = newNode; } else { newNode->both = XOR(0, head); head->both = XOR(newNode, head->both); head = newNode; }", "insert front"],
        "explanation": "XOR with 0.", "xp": 15},
    {"id": "cpp-22-4-14", "type": "code", "question": "Insert at end.", "correctAnswer": ["// Traverse to end, insert after", "insert end"],
        "explanation": "Find last, insert.", "xp": 15},
    {"id": "cpp-22-4-15", "type": "code", "question": "Delete node.", "correctAnswer": ["Node* prev = (Node*)(node->both ^ (uintptr_t)next);\nNode* nnext = (Node*)(node->both ^ (uintptr_t)prev);\nprev->both = XOR(prev->both ^ (uintptr_t)node, nnext);\nnnext->both = XOR(nnext->both ^ (uintptr_t)node, prev);\ndelete node;", "delete"],
        "explanation": "Recompute XORs.", "xp": 15},
    {"id": "cpp-22-4-16", "type": "code", "question": "Reverse XOR list.", "correctAnswer": ["// Reverse by swapping head and tail", "reverse"],
        "explanation": "Reverse direction.", "xp": 15},
    {"id": "cpp-22-4-17", "type": "code", "question": "Circular XOR list.", "correctAnswer": ["// XOR list where last XOR first", "circular"],
        "explanation": "Circular XOR.", "xp": 15},
    {"id": "cpp-22-4-18", "type": "code", "question": "Check empty XOR.", "correctAnswer": ["bool empty = (head == nullptr);", "empty"],
        "explanation": "Same as regular.", "xp": 15},
    {"id": "cpp-22-4-19", "type": "code", "question": "Get size.", "correctAnswer": ["int size = 0; Node* prev = nullptr; Node* curr = head; while (curr) { size++; Node* next = (Node*)(curr->both ^ (uintptr_t)prev); prev = curr; curr = next; }", "size"],
        "explanation": "Traverse and count.", "xp": 15},
    {"id": "cpp-22-4-20", "type": "code", "question": "Search XOR.", "correctAnswer": ["Node* prev = nullptr; Node* curr = head; while (curr && curr->data != val) { Node* next = (Node*)(curr->both ^ (uintptr_t)prev); prev = curr; curr = next; }", "search"],
        "explanation": "Search with prev.", "xp": 15},
    {"id": "cpp-22-4-21", "type": "code", "question": "Memory savings.", "correctAnswer": ["// Saves one pointer per node", "memory"],
        "explanation": "Single vs two pointers.", "xp": 15},
    {"id": "cpp-22-4-22", "type": "code", "question": "Tradeoff.", "correctAnswer": ["// More complex traversal", "tradeoff"],
        "explanation": "Complexity vs memory.", "xp": 15},
    {"id": "cpp-22-4-23", "type": "code", "question": "Debugging XOR.", "correctAnswer": ["// Harder to debug due to XOR", "debug"],
        "explanation": "Harder debugging.", "xp": 15},
    {"id": "cpp-22-4-24", "type": "code", "question": "XOR list class.", "correctAnswer": ["class XORLinkedList { Node* head; public: void insert(int val); void remove(int val); };", "class"],
        "explanation": "Wrap in class.", "xp": 15},
    {"id": "cpp-22-4-25", "type": "code", "question": "std::bit_cast.", "correctAnswer": ["// Use bit_cast for XOR", "bit_cast"],
        "explanation": "C++20 bit_cast.", "xp": 15}
]

lesson4 = {
    "id": "cpp-U22-L4", "title": "XOR Linked List", "unitTitle": "22. Linked Lists", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# XOR Linked List

Memory-efficient doubly linked list using XOR of pointers.

## Concept

Instead of storing `prev` and `next` pointers, XOR linked list stores:
- `both = prev XOR next`

This allows bidirectional traversal with just one pointer!

## Node Structure

```cpp
#include <cstdint>

struct Node {
    int data;
    uintptr_t both;  // XOR of prev and next pointers
    
    Node(int val) : data(val), both(0) {}
};

// Helper macro
#define XOR(a, b) ((uintptr_t)(a) ^ (uintptr_t)(b))
```

## Traversal

```cpp
void traverse(Node* head) {
    Node* prev = nullptr;
    Node* curr = head;
    
    while (curr) {
        std::cout << curr->data << std::endl;
        
        // Get next node: both XOR prev
        Node* next = (Node*)(curr->both ^ (uintptr_t)prev);
        
        prev = curr;
        curr = next;
    }
}
```

## Insertion

```cpp
void insertAfter(Node* curr, Node* newNode, Node* next) {
    newNode->both = XOR(curr, next);
    curr->both = XOR(newNode, XOR(curr->both, next));
    if (next) {
        next->both = XOR(newNode, XOR(next->both, curr));
    }
}
```

## Advantages

- **Memory efficient**: One pointer instead of two
- **Bidirectional**: Can traverse both ways
- **Same operations**: Like doubly linked list

## Disadvantages

- **Complex**: Harder to understand and debug
- **Slower**: Extra XOR operations
- **No random access**: Still O(n) traversal
""",
    "questions": lesson4_questions
}

# Update lesson titles and add lessons
data['units'][21]['lessons'][0]['title'] = lesson1['title']
data['units'][21]['lessons'][1]['title'] = lesson2['title']
data['units'][21]['lessons'][2]['title'] = lesson3['title']
data['units'][21]['lessons'][3]['title'] = lesson4['title']

# Add all lessons to data
data['units'][21]['lessons'][0].update(lesson1)
print("✅ Lesson 1: Singly Linked List - 25 questions (20 code)")

data['units'][21]['lessons'][1].update(lesson2)
print("✅ Lesson 2: Doubly Linked List - 25 questions (20 code)")

data['units'][21]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Circular Linked List - 25 questions (20 code)")

data['units'][21]['lessons'][3].update(lesson4)
print("✅ Lesson 4: XOR Linked List - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 22 (Lessons 1-4) Complete: 4 lessons with 25 questions each (100 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~70 (70%)")
print("   - Type-in questions: ~20 (20%)")
print("   - Multiple-choice: ~10 (10%)")
print("\nUnit 22 now has 4 complete lessons (100 questions total)")