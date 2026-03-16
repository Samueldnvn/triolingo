#!/usr/bin/env python3
"""
Build Unit 24: Queues (Lessons 1-4)
4 lessons with 25 questions each (100 total)
Heavy emphasis on code questions (~70% = 70 code questions)
"""
import json

print("🚀 Building C++ Unit 24: Queues (Lessons 1-4)")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: Array Queue
# ============================================================================
lesson1_questions = [
    {"id": "cpp-24-1-1", "type": "typing", "question": "Queue is?", "correctAnswer": ["FIFO", "first in first out"], "explanation": "First in, first out.", "xp": 5},
    {"id": "cpp-24-1-2", "type": "typing", "question": "Enqueue at?", "correctAnswer": ["back", "rear", "end"], "explanation": "Add to back.", "xp": 5},
    {"id": "cpp-24-1-3", "type": "typing", "question": "Dequeue from?", "correctAnswer": ["front", "head", "beginning"], "explanation": "Remove from front.", "xp": 5},
    {"id": "cpp-24-1-4", "type": "multiple", "question": "Enqueue O?", "options": ["1", "n", "log n", "constant"], "correctAnswer": [0], "explanation": "O(1).", "xp": 5},
    {"id": "cpp-24-1-5", "type": "multiple", "question": "Dequeue O?", "options": ["1", "n", "log n", "constant"], "correctAnswer": [0], "explanation": "O(1).", "xp": 5},
    {"id": "cpp-24-1-6", "type": "code", "question": "Queue class.", "correctAnswer": ["class Queue { vector<int> data; public: void enqueue(int val); void dequeue(); int front(); bool empty(); int size(); };", "queue"],
        "explanation": "Vector-based queue.", "xp": 15},
    {"id": "cpp-24-1-7", "type": "code", "question": "Enqueue implementation.", "correctAnswer": ["void enqueue(int val) { data.push_back(val); }", "enqueue"],
        "explanation": "push_back to vector.", "xp": 15},
    {"id": "cpp-24-1-8", "type": "code", "question": "Dequeue implementation.", "correctAnswer": ["void dequeue() { if (!data.empty()) data.erase(data.begin()); }", "dequeue"],
        "explanation": "Erase front element.", "xp": 15},
    {"id": "cpp-24-1-9", "type": "code", "question": "Front implementation.", "correctAnswer": ["int front() { if (data.empty()) throw exception; return data.front(); }", "front"],
        "explanation": "Return front.", "xp": 15},
    {"id": "cpp-24-1-10", "type": "code", "question": "Empty implementation.", "correctAnswer": ["bool empty() { return data.empty(); }", "empty"],
        "explanation": "Check if empty.", "xp": 15},
    {"id": "cpp-24-1-11", "type": "code", "question": "Size implementation.", "correctAnswer": ["int size() { return data.size(); }", "size"],
        "explanation": "Return size.", "xp": 15},
    {"id": "cpp-24-1-12", "type": "code", "question": "Back implementation.", "correctAnswer": ["int back() { if (data.empty()) throw exception; return data.back(); }", "back"],
        "explanation": "Return back.", "xp": 15},
    {"id": "cpp-24-1-13", "type": "code", "question": "Queue with deque.", "correctAnswer": ["class Queue { deque<int> data; public: void enqueue(int val); void dequeue(); int front(); };", "deque queue"],
        "explanation": "Deque for O(1) at both ends.", "xp": 15},
    {"id": "cpp-24-1-14", "type": "code", "question": "Enqueue deque.", "correctAnswer": ["void enqueue(int val) { data.push_back(val); }", "enqueue deque"],
        "explanation": "push_back to deque.", "xp": 15},
    {"id": "cpp-24-1-15", "type": "code", "question": "Dequeue deque.", "correctAnswer": ["void dequeue() { if (!data.empty()) data.pop_front(); }", "dequeue deque"],
        "explanation": "pop_front from deque.", "xp": 15},
    {"id": "cpp-24-1-16", "type": "code", "question": "Generic queue.", "correctAnswer": ["template<typename T> class Queue { deque<T> data; public: void enqueue(const T& val); void dequeue(); T& front(); bool empty(); int size(); };", "generic"],
        "explanation": "Template queue.", "xp": 15},
    {"id": "cpp-24-1-17", "type": "code", "question": "Clear queue.", "correctAnswer": ["void clear() { data.clear(); }", "clear"],
        "explanation": "Clear all elements.", "xp": 15},
    {"id": "cpp-24-1-18", "type": "code", "question": "Queue destructor.", "correctAnswer": ["~Queue() { data.clear(); }", "destructor"],
        "explanation": "Clear on destroy.", "xp": 15},
    {"id": "cpp-24-1-19", "type": "code", "question": "Queue copy constructor.", "correctAnswer": ["Queue(const Queue& other) : data(other.data) {}", "copy"],
        "explanation": "Copy data.", "xp": 15},
    {"id": "cpp-24-1-20", "type": "code", "question": "Queue assignment.", "correctAnswer": ["Queue& operator=(const Queue& other) { if (this != &other) { data = other.data; } return *this; }", "assignment"],
        "explanation": "Assign data.", "xp": 15},
    {"id": "cpp-24-1-21", "type": "code", "question": "Queue move constructor.", "correctAnswer": ["Queue(Queue&& other) noexcept : data(std::move(other.data)) {}", "move"],
        "explanation": "Move data.", "xp": 15},
    {"id": "cpp-24-1-22", "type": "code", "question": "Queue move assignment.", "correctAnswer": ["Queue& operator=(Queue&& other) noexcept { if (this != &other) { data = std::move(other.data); } return *this; }", "move assign"],
        "explanation": "Move assign.", "xp": 15},
    {"id": "cpp-24-1-23", "type": "code", "question": "std::queue usage.", "correctAnswer": ["std::queue<int> q; q.push(1); q.pop(); int f = q.front();", "std queue"],
        "explanation": "STL queue.", "xp": 15},
    {"id": "cpp-24-1-24", "type": "code", "question": "Queue comparison.", "correctAnswer": ["bool operator==(const Queue& other) { return data == other.data; }", "compare"],
        "explanation": "Compare queues.", "xp": 15},
    {"id": "cpp-24-1-25", "type": "code", "question": "Queue swap.", "correctAnswer": ["void swap(Queue& other) { data.swap(other.data); }", "swap"],
        "explanation": "Swap queues.", "xp": 15}
]

lesson1 = {
    "id": "cpp-U24-L1", "title": "Array Queue", "unitTitle": "24. Queues", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Array Queue

Queue implementation using dynamic array.

## Concept

Queue is a FIFO (First In First Out) data structure where the first element added is the first one removed.

## Implementation (Vector)

```cpp
#include <vector>
#include <stdexcept>

class Queue {
    std::vector<int> data;
    
public:
    // Add element to back
    void enqueue(int val) {
        data.push_back(val);
    }
    
    // Remove front element
    void dequeue() {
        if (data.empty()) {
            throw std::runtime_error("Queue is empty");
        }
        data.erase(data.begin());
    }
    
    // Get front element
    int front() {
        if (data.empty()) {
            throw std::runtime_error("Queue is empty");
        }
        return data.front();
    }
    
    // Get back element
    int back() {
        if (data.empty()) {
            throw std::runtime_error("Queue is empty");
        }
        return data.back();
    }
    
    // Check if empty
    bool empty() const {
        return data.empty();
    }
    
    // Get size
    size_t size() const {
        return data.size();
    }
};
```

## Implementation (Deque)

```cpp
#include <deque>

class Queue {
    std::deque<int> data;
    
public:
    void enqueue(int val) { data.push_back(val); }
    void dequeue() { if (!data.empty()) data.pop_front(); }
    int front() { return data.front(); }
    int back() { return data.back(); }
    bool empty() const { return data.empty(); }
    size_t size() const { return data.size(); }
};
```

## STL Queue

```cpp
#include <queue>

std::queue<int> q;
q.push(1);
q.push(2);
q.push(3);

while (!q.empty()) {
    std::cout << q.front() << std::endl;
    q.pop();
}
```

## Complexity

- Enqueue: O(1) with deque, O(n) with vector
- Dequeue: O(1) with deque, O(n) with vector
- Front: O(1)
- Back: O(1)
""",
    "questions": lesson1_questions
}

# ============================================================================
# LESSON 2: Circular Queue
# ============================================================================
lesson2_questions = [
    {"id": "cpp-24-2-1", "type": "typing", "question": "Circular queue uses?", "correctAnswer": ["wrap around", "modulo", "circular buffer"], "explanation": "Wrap around to beginning.", "xp": 5},
    {"id": "cpp-24-2-2", "type": "typing", "question": "Fixed size?", "correctAnswer": ["yes", "pre-allocated", "constant"], "explanation": "Fixed capacity.", "xp": 5},
    {"id": "cpp-24-2-3", "type": "typing", "question": "Enqueue O?", "correctAnswer": ["1", "constant", "O(1)"], "explanation": "O(1).", "xp": 5},
    {"id": "cpp-24-2-4", "type": "multiple", "question": "Dequeue O?", "options": ["1", "n", "log n", "constant"], "correctAnswer": [0], "explanation": "O(1).", "xp": 5},
    {"id": "cpp-24-2-5", "type": "multiple", "question": "Full condition?", "options": ["(rear+1)%size == front", "front == rear", "both", "neither"], "correctAnswer": [0], "explanation": "Check wrap.", "xp": 5},
    {"id": "cpp-24-2-6", "type": "code", "question": "Circular queue class.", "correctAnswer": ["class CircularQueue { vector<int> arr; int front, rear, size; public: CircularQueue(int cap); void enqueue(int val); void dequeue(); int frontVal(); bool empty(); bool full(); };", "circular"],
        "explanation": "Fixed array with wrap.", "xp": 15},
    {"id": "cpp-24-2-7", "type": "code", "question": "Constructor.", "correctAnswer": ["CircularQueue(int cap) : arr(cap), front(0), rear(-1), size(0) {}", "constructor"],
        "explanation": "Initialize array and indices.", "xp": 15},
    {"id": "cpp-24-2-8", "type": "code", "question": "Enqueue circular.", "correctAnswer": ["void enqueue(int val) { if (full()) throw exception; rear = (rear + 1) % arr.size(); arr[rear] = val; size++; }", "enqueue"],
        "explanation": "Wrap rear, add element.", "xp": 15},
    {"id": "cpp-24-2-9", "type": "code", "question": "Dequeue circular.", "correctAnswer": ["void dequeue() { if (empty()) throw exception; front = (front + 1) % arr.size(); size--; }", "dequeue"],
        "explanation": "Wrap front.", "xp": 15},
    {"id": "cpp-24-2-10", "type": "code", "question": "Front circular.", "correctAnswer": ["int frontVal() { if (empty()) throw exception; return arr[front]; }", "front"],
        "explanation": "Return front element.", "xp": 15},
    {"id": "cpp-24-2-11", "type": "code", "question": "Empty circular.", "correctAnswer": ["bool empty() { return size == 0; }", "empty"],
        "explanation": "Size is zero.", "xp": 15},
    {"id": "cpp-24-2-12", "type": "code", "question": "Full circular.", "correctAnswer": ["bool full() { return size == arr.size(); }", "full"],
        "explanation": "Size equals capacity.", "xp": 15},
    {"id": "cpp-24-2-13", "type": "code", "question": "Back circular.", "correctAnswer": ["int back() { if (empty()) throw exception; return arr[rear]; }", "back"],
        "explanation": "Return rear element.", "xp": 15},
    {"id": "cpp-24-2-14", "type": "code", "question": "Size circular.", "correctAnswer": ["int getSize() { return size; }", "size"],
        "explanation": "Return size.", "xp": 15},
    {"id": "cpp-24-2-15", "type": "code", "question": "Clear circular.", "correctAnswer": ["void clear() { front = 0; rear = -1; size = 0; }", "clear"],
        "explanation": "Reset indices.", "xp": 15},
    {"id": "cpp-24-2-16", "type": "code", "question": "Reserve circular.", "correctAnswer": ["// Cannot resize, fixed size", "reserve"],
        "explanation": "Fixed capacity.", "xp": 15},
    {"id": "cpp-24-2-17", "type": "code", "question": "Generic circular.", "correctAnswer": ["template<typename T> class CircularQueue { vector<T> arr; int front, rear, size; public: void enqueue(const T& val); void dequeue(); T& frontVal(); };", "generic"],
        "explanation": "Template circular.", "xp": 15},
    {"id": "cpp-24-2-18", "type": "code", "question": "Circular buffer.", "correctAnswer": ["// Use as buffer for streams", "buffer"],
        "explanation": "Buffer applications.", "xp": 15},
    {"id": "cpp-24-2-19", "type": "code", "question": "Peek circular.", "correctAnswer": ["// Same as front", "peek"],
        "explanation": "Peek at front.", "xp": 15},
    {"id": "cpp-24-2-20", "type": "code", "question": "Circular to array.", "correctAnswer": ["vector<int> toArray() { vector<int> v; for (int i = 0; i < size; i++) v.push_back(arr[(front + i) % arr.size()]); return v; }", "to array"],
        "explanation": "Convert to vector.", "xp": 15},
    {"id": "cpp-24-2-21", "type": "code", "question": "Array to circular.", "correctAnswer": ["void fromArray(const vector<int>& v) { clear(); for (int val : v) enqueue(val); }", "from array"],
        "explanation": "Build from array.", "xp": 15},
    {"id": "cpp-24-2-22", "type": "code", "question": "Circular copy.", "correctAnswer": ["CircularQueue(const CircularQueue& other) : arr(other.arr), front(other.front), rear(other.rear), size(other.size) {}", "copy"],
        "explanation": "Copy all fields.", "xp": 15},
    {"id": "cpp-24-2-23", "type": "code", "question": "Circular move.", "correctAnswer": ["CircularQueue(CircularQueue&& other) noexcept : arr(std::move(other.arr)), front(other.front), rear(other.rear), size(other.size) {}", "move"],
        "explanation": "Move fields.", "xp": 15},
    {"id": "cpp-24-2-24", "type": "code", "question": "Circular swap.", "correctAnswer": ["void swap(CircularQueue& other) { arr.swap(other.arr); std::swap(front, other.front); std::swap(rear, other.rear); std::swap(size, other.size); }", "swap"],
        "explanation": "Swap all fields.", "xp": 15},
    {"id": "cpp-24-2-25", "type": "code", "question": "Circular iterator.", "correctAnswer": ["// Iterate from front to rear", "iterator"],
        "explanation": "Iterate circular.", "xp": 15}
]

lesson2 = {
    "id": "cpp-U24-L2", "title": "Circular Queue", "unitTitle": "24. Queues", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Circular Queue

Fixed-size queue that wraps around when reaching the end.

## Concept

Uses modulo arithmetic to reuse space, eliminating memory shifting.

## Implementation

```cpp
#include <vector>
#include <stdexcept>

class CircularQueue {
    std::vector<int> arr;
    int front, rear, size;
    
public:
    CircularQueue(int capacity) 
        : arr(capacity), front(0), rear(-1), size(0) {}
    
    // Enqueue
    void enqueue(int val) {
        if (full()) {
            throw std::runtime_error("Queue is full");
        }
        rear = (rear + 1) % arr.size();
        arr[rear] = val;
        size++;
    }
    
    // Dequeue
    void dequeue() {
        if (empty()) {
            throw std::runtime_error("Queue is empty");
        }
        front = (front + 1) % arr.size();
        size--;
    }
    
    // Get front
    int frontVal() {
        if (empty()) {
            throw std::runtime_error("Queue is empty");
        }
        return arr[front];
    }
    
    // Get back
    int back() {
        if (empty()) {
            throw std::runtime_error("Queue is empty");
        }
        return arr[rear];
    }
    
    bool empty() const { return size == 0; }
    bool full() const { return size == arr.size(); }
    int getSize() const { return size; }
};
```

## Complexity

- Enqueue: O(1)
- Dequeue: O(1)
- Front: O(1)
- Space: O(capacity)

## Applications

- Buffers
- Resource pools
- Task scheduling
""",
    "questions": lesson2_questions
}

# ============================================================================
# LESSON 3: Deque
# ============================================================================
lesson3_questions = [
    {"id": "cpp-24-3-1", "type": "typing", "question": "Deque stands for?", "correctAnswer": ["double ended queue", "double-ended"], "explanation": "Double-ended queue.", "xp": 5},
    {"id": "cpp-24-3-2", "type": "typing", "question": "Insert at both ends?", "correctAnswer": ["yes", "true"], "explanation": "Can add to front and back.", "xp": 5},
    {"id": "cpp-24-3-3", "type": "typing", "question": "Remove from both ends?", "correctAnswer": ["yes", "true"], "explanation": "Can remove from front and back.", "xp": 5},
    {"id": "cpp-24-3-4", "type": "multiple", "question": "All operations O?", "options": ["1", "n", "log n", "constant"], "correctAnswer": [0], "explanation": "O(1).", "xp": 5},
    {"id": "cpp-24-3-5", "type": "multiple", "question": "Random access O?", "options": ["1", "n", "log n", "constant"], "correctAnswer": [0], "explanation": "O(1) random access.", "xp": 5},
    {"id": "cpp-24-3-6", "type": "code", "question": "Deque class.", "correctAnswer": ["class Deque { vector<int> data; public: void pushFront(int val); void pushBack(int val); void popFront(); void popBack(); int front(); int back(); };", "deque"],
        "explanation": "Double-ended queue.", "xp": 15},
    {"id": "cpp-24-3-7", "type": "code", "question": "Push front.", "correctAnswer": ["void pushFront(int val) { data.insert(data.begin(), val); }", "push front"],
        "explanation": "Insert at front.", "xp": 15},
    {"id": "cpp-24-3-8", "type": "code", "question": "Push back.", "correctAnswer": ["void pushBack(int val) { data.push_back(val); }", "push back"],
        "explanation": "Push to back.", "xp": 15},
    {"id": "cpp-24-3-9", "type": "code", "question": "Pop front.", "correctAnswer": ["void popFront() { if (!data.empty()) data.erase(data.begin()); }", "pop front"],
        "explanation": "Erase front.", "xp": 15},
    {"id": "cpp-24-3-10", "type": "code", "question": "Pop back.", "correctAnswer": ["void popBack() { if (!data.empty()) data.pop_back(); }", "pop back"],
        "explanation": "Pop back.", "xp": 15},
    {"id": "cpp-24-3-11", "type": "code", "question": "Front deque.", "correctAnswer": ["int front() { if (data.empty()) throw exception; return data.front(); }", "front"],
        "explanation": "Return front.", "xp": 15},
    {"id": "cpp-24-3-12", "type": "code", "question": "Back deque.", "correctAnswer": ["int back() { if (data.empty()) throw exception; return data.back(); }", "back"],
        "explanation": "Return back.", "xp": 15},
    {"id": "cpp-24-3-13", "type": "code", "question": "Empty deque.", "correctAnswer": ["bool empty() { return data.empty(); }", "empty"],
        "explanation": "Check empty.", "xp": 15},
    {"id": "cpp-24-3-14", "type": "code", "question": "Size deque.", "correctAnswer": ["int size() { return data.size(); }", "size"],
        "explanation": "Return size.", "xp": 15},
    {"id": "cpp-24-3-15", "type": "code", "question": "Index access.", "correctAnswer": ["int& operator[](int index) { return data[index]; }", "index"],
        "explanation": "Random access.", "xp": 15},
    {"id": "cpp-24-3-16", "type": "code", "question": "At deque.", "correctAnswer": ["int& at(int index) { return data.at(index); }", "at"],
        "explanation": "Bounds-checked access.", "xp": 15},
    {"id": "cpp-24-3-17", "type": "code", "question": "Clear deque.", "correctAnswer": ["void clear() { data.clear(); }", "clear"],
        "explanation": "Clear all.", "xp": 15},
    {"id": "cpp-24-3-18", "type": "code", "question": "Resize deque.", "correctAnswer": ["void resize(int newSize) { data.resize(newSize); }", "resize"],
        "explanation": "Change size.", "xp": 15},
    {"id": "cpp-24-3-19", "type": "code", "question": "Reserve deque.", "correctAnswer": ["void reserve(int capacity) { data.reserve(capacity); }", "reserve"],
        "explanation": "Reserve capacity.", "xp": 15},
    {"id": "cpp-24-3-20", "type": "code", "question": "Generic deque.", "correctAnswer": ["template<typename T> class Deque { vector<T> data; public: void pushFront(const T& val); void pushBack(const T& val); T& front(); T& back(); };", "generic"],
        "explanation": "Template deque.", "xp": 15},
    {"id": "cpp-24-3-21", "type": "code", "question": "std::deque usage.", "correctAnswer": ["std::deque<int> d; d.push_front(1); d.push_back(2); d.pop_front(); int f = d.front();", "std deque"],
        "explanation": "STL deque.", "xp": 15},
    {"id": "cpp-24-3-22", "type": "code", "question": "Deque copy.", "correctAnswer": ["Deque(const Deque& other) : data(other.data) {}", "copy"],
        "explanation": "Copy data.", "xp": 15},
    {"id": "cpp-24-3-23", "type": "code", "question": "Deque move.", "correctAnswer": ["Deque(Deque&& other) noexcept : data(std::move(other.data)) {}", "move"],
        "explanation": "Move data.", "xp": 15},
    {"id": "cpp-24-3-24", "type": "code", "question": "Deque swap.", "correctAnswer": ["void swap(Deque& other) { data.swap(other.data); }", "swap"],
        "explanation": "Swap deques.", "xp": 15},
    {"id": "cpp-24-3-25", "type": "code", "question": "Deque comparison.", "correctAnswer": ["bool operator==(const Deque& other) { return data == other.data; }", "compare"],
        "explanation": "Compare deques.", "xp": 15}
]

lesson3 = {
    "id": "cpp-U24-L3", "title": "Deque", "unitTitle": "24. Queues", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Deque (Double-Ended Queue)

Queue that allows insertion and removal at both ends.

## Concept

Deque combines features of stack and queue - can add/remove from both front and back.

## Implementation

```cpp
#include <vector>
#include <stdexcept>

class Deque {
    std::vector<int> data;
    
public:
    // Add to front
    void pushFront(int val) {
        data.insert(data.begin(), val);
    }
    
    // Add to back
    void pushBack(int val) {
        data.push_back(val);
    }
    
    // Remove from front
    void popFront() {
        if (data.empty()) {
            throw std::runtime_error("Deque is empty");
        }
        data.erase(data.begin());
    }
    
    // Remove from back
    void popBack() {
        if (data.empty()) {
            throw std::runtime_error("Deque is empty");
        }
        data.pop_back();
    }
    
    // Get front
    int front() {
        if (data.empty()) {
            throw std::runtime_error("Deque is empty");
        }
        return data.front();
    }
    
    // Get back
    int back() {
        if (data.empty()) {
            throw std::runtime_error("Deque is empty");
        }
        return data.back();
    }
    
    // Random access
    int& operator[](int index) {
        return data[index];
    }
    
    bool empty() const { return data.empty(); }
    size_t size() const { return data.size(); }
};
```

## STL Deque

```cpp
#include <deque>

std::deque<int> d;
d.push_front(1);
d.push_back(2);
d.push_front(3);

while (!d.empty()) {
    std::cout << d.front() << std::endl;
    d.pop_front();
}
```

## Complexity

- Push Front/Back: O(1)
- Pop Front/Back: O(1)
- Front/Back: O(1)
- Random Access: O(1)
""",
    "questions": lesson3_questions
}

# ============================================================================
# LESSON 4: Monotonic Queue
# ============================================================================
lesson4_questions = [
    {"id": "cpp-24-4-1", "type": "typing", "question": "Monotonic queue maintains?", "correctAnswer": ["sorted order", "increasing", "decreasing"], "explanation": "Elements in sorted order.", "xp": 5},
    {"id": "cpp-24-4-2", "type": "typing", "question": "Sliding window max?", "correctAnswer": ["yes", "common use", "application"], "explanation": "Perfect for sliding window.", "xp": 5},
    {"id": "cpp-24-4-3", "type": "typing", "question": "Remove smaller elements?", "correctAnswer": ["yes", "true"], "explanation": "Maintain order.", "xp": 5},
    {"id": "cpp-24-4-4", "type": "multiple", "question": "Push complexity?", "options": ["1", "n", "log n", "amortized O(1)"], "correctAnswer": [3], "explanation": "Amortized O(1).", "xp": 5},
    {"id": "cpp-24-4-5", "type": "multiple", "question": "Pop complexity?", "options": ["1", "n", "log n", "constant"], "correctAnswer": [0], "explanation": "O(1).", "xp": 5},
    {"id": "cpp-24-4-6", "type": "code", "question": "Monotonic queue class.", "correctAnswer": ["class MonotonicQueue { deque<int> dq; public: void push(int val); void pop(int val); int front(); };", "class"],
        "explanation": "Deque-based monotonic.", "xp": 15},
    {"id": "cpp-24-4-7", "type": "code", "question": "Push monotonic.", "correctAnswer": ["void push(int val) { while (!dq.empty() && dq.back() < val) dq.pop_back(); dq.push_back(val); }", "push"],
        "explanation": "Remove smaller, push.", "xp": 15},
    {"id": "cpp-24-4-8", "type": "code", "question": "Pop monotonic.", "correctAnswer": ["void pop(int val) { if (!dq.empty() && dq.front() == val) dq.pop_front(); }", "pop"],
        "explanation": "Pop front if match.", "xp": 15},
    {"id": "cpp-24-4-9", "type": "code", "question": "Front monotonic.", "correctAnswer": ["int front() { return dq.front(); }", "front"],
        "explanation": "Return max.", "xp": 15},
    {"id": "cpp-24-4-10", "type": "code", "question": "Empty monotonic.", "correctAnswer": ["bool empty() { return dq.empty(); }", "empty"],
        "explanation": "Check empty.", "xp": 15},
    {"id": "cpp-24-4-11", "type": "code", "question": "Sliding window max.", "correctAnswer": ["vector<int> maxSlidingWindow(vector<int>& nums, int k) { deque<int> dq; vector<int> result; for (int i = 0; i < nums.size(); i++) { while (!dq.empty() && dq.back() < nums[i]) dq.pop_back(); dq.push_back(i); if (dq.front() <= i - k) dq.pop_front(); if (i >= k - 1) result.push_back(nums[dq.front()]); } return result; }", "sliding"],
        "explanation": "Sliding window max.", "xp": 15},
    {"id": "cpp-24-4-12", "type": "code", "question": "Sliding window min.", "correctAnswer": ["// Use > instead of < for min", "min"],
        "explanation": "Reverse comparison.", "xp": 15},
    {"id": "cpp-24-4-13", "type": "code", "question": "Generic monotonic.", "correctAnswer": ["template<typename T, typename Compare> class MonotonicQueue { deque<T> dq; Compare comp; public: void push(const T& val); void pop(const T& val); T front(); };", "generic"],
        "explanation": "Template with comparator.", "xp": 15},
    {"id": "cpp-24-4-14", "type": "code", "question": "Decreasing monotonic.", "correctAnswer": ["class DecreasingQueue : public MonotonicQueue<int, greater<int>> {};", "decreasing"],
        "explanation": "Decreasing order.", "xp": 15},
    {"id": "cpp-24-4-15", "type": "code", "question": "Increasing monotonic.", "correctAnswer": ["class IncreasingQueue : public MonotonicQueue<int, less<int>> {};", "increasing"],
        "explanation": "Increasing order.", "xp": 15},
    {"id": "cpp-24-4-16", "type": "code", "question": "Clear monotonic.", "correctAnswer": ["void clear() { dq.clear(); }", "clear"],
        "explanation": "Clear deque.", "xp": 15},
    {"id": "cpp-24-4-17", "type": "code", "question": "Size monotonic.", "correctAnswer": ["int size() { return dq.size(); }", "size"],
        "explanation": "Return size.", "xp": 15},
    {"id": "cpp-24-4-18", "type": "code", "question": "Get max monotonic.", "correctAnswer": ["int getMax() { return dq.front(); }", "getMax"],
        "explanation": "Front is max.", "xp": 15},
    {"id": "cpp-24-4-19", "type": "code", "question": "Get min monotonic.", "correctAnswer": ["int getMin() { return dq.back(); }", "getMin"],
        "explanation": "Back is min.", "xp": 15},
    {"id": "cpp-24-4-20", "type": "code", "question": "Index-based monotonic.", "correctAnswer": ["// Store indices instead of values", "index"],
        "explanation": "Track indices.", "xp": 15},
    {"id": "cpp-24-4-21", "type": "code", "question": "Pair monotonic.", "correctAnswer": ["// Store (value, index) pairs", "pair"],
        "explanation": "Value and index.", "xp": 15},
    {"id": "cpp-24-4-22", "type": "code", "question": "Monotonic stack.", "correctAnswer": ["// Same concept with stack", "stack"],
        "explanation": "Stack variant.", "xp": 15},
    {"id": "cpp-24-4-23", "type": "code", "question": "Next greater element.", "correctAnswer": ["// Use monotonic stack", "nge"],
        "explanation": "Find next greater.", "xp": 15},
    {"id": "cpp-24-4-24", "type": "code", "question": "Previous greater element.", "correctAnswer": ["// Use monotonic stack", "pge"],
        "explanation": "Find previous greater.", "xp": 15},
    {"id": "cpp-24-4-25", "type": "code", "question": "Applications.", "correctAnswer": ["// Sliding window, stock prices", "applications"],
        "explanation": "Use cases.", "xp": 15}
]

lesson4 = {
    "id": "cpp-U24-L4", "title": "Monotonic Queue", "unitTitle": "24. Queues", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Monotonic Queue

Queue that maintains elements in monotonic order.

## Concept

Elements in the queue are always in sorted order (increasing or decreasing). Used for sliding window problems.

## Implementation

```cpp
#include <deque>
#include <vector>

class MonotonicQueue {
    std::deque<int> dq;
    
public:
    // Push element
    void push(int val) {
        // Remove elements smaller than val
        while (!dq.empty() && dq.back() < val) {
            dq.pop_back();
        }
        dq.push_back(val);
    }
    
    // Pop element
    void pop(int val) {
        if (!dq.empty() && dq.front() == val) {
            dq.pop_front();
        }
    }
    
    // Get max (front)
    int front() {
        return dq.front();
    }
    
    bool empty() const {
        return dq.empty();
    }
};
```

## Sliding Window Maximum

```cpp
std::vector<int> maxSlidingWindow(std::vector<int>& nums, int k) {
    std::deque<int> dq;
    std::vector<int> result;
    
    for (int i = 0; i < nums.size(); i++) {
        // Remove elements smaller than current
        while (!dq.empty() && dq.back() < nums[i]) {
            dq.pop_back();
        }
        
        // Add current index
        dq.push_back(i);
        
        // Remove elements outside window
        if (dq.front() <= i - k) {
            dq.pop_front();
        }
        
        // Add to result
        if (i >= k - 1) {
            result.push_back(nums[dq.front()]);
        }
    }
    
    return result;
}
```

## Complexity

- Push: Amortized O(1)
- Pop: O(1)
- Front: O(1)
- Space: O(k) for window

## Applications

- Sliding window maximum/minimum
- Stock price problems
- Range queries
""",
    "questions": lesson4_questions
}

# Update lesson titles and add lessons
data['units'][23]['lessons'][0]['title'] = lesson1['title']
data['units'][23]['lessons'][1]['title'] = lesson2['title']
data['units'][23]['lessons'][2]['title'] = lesson3['title']
data['units'][23]['lessons'][3]['title'] = lesson4['title']

# Add all lessons to data
data['units'][23]['lessons'][0].update(lesson1)
print("✅ Lesson 1: Array Queue - 25 questions (20 code)")

data['units'][23]['lessons'][1].update(lesson2)
print("✅ Lesson 2: Circular Queue - 25 questions (20 code)")

data['units'][23]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Deque - 25 questions (20 code)")

data['units'][23]['lessons'][3].update(lesson4)
print("✅ Lesson 4: Monotonic Queue - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 24 (Lessons 1-4) Complete: 4 lessons with 25 questions each (100 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~70 (70%)")
print("   - Type-in questions: ~20 (20%)")
print("   - Multiple-choice: ~10 (10%)")
print("\nUnit 24 now has 4 complete lessons (100 questions total)")