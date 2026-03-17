#!/usr/bin/env python3
"""
Rebuild Batch 13 - Continue systematic rebuild
"""
import json
import os

print("🚀 BATCH 13: Continuing systematic rebuild")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 38, Lesson 3: UDP Programming
lesson38_3 = {
    "id": "cpp-U38-L3",
    "title": "UDP Programming",
    "unitTitle": "38. Network Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# UDP Programming

User Datagram Protocol for fast, connectionless communication.

## Core Concepts

- **Connectionless**: No handshake before sending
- **Unreliable**: No guaranteed delivery
- **Fast**: Low overhead, no connection state
- **Message-oriented**: Preserves message boundaries

## UDP vs TCP

- **UDP**: Fast, unreliable, connectionless
- **TCP**: Reliable, ordered, connection-oriented
- **Use UDP**: Real-time, speed over reliability
- **Use TCP**: File transfer, reliability needed

## UDP Socket Creation

```cpp
sockfd = socket(AF_INET, SOCK_DGRAM, 0);
```

## Sending Data

```cpp
sendto(sockfd, buffer, len, 0, (sockaddr*)&addr, sizeof(addr));
```

## Receiving Data

```cpp
recvfrom(sockfd, buffer, len, 0, (sockaddr*)&addr, &addr_len);
```

## Common Uses

- **Streaming**: Audio and video
- **Gaming**: Real-time multiplayer
- **DNS**: Domain name lookups
- **VoIP**: Voice over IP
- **Broadcast**: Send to all on network

## Best Practices

1. Handle packet loss at application level
2. Implement sequence numbers for ordering
3. Add checksums for integrity
4. Use timeouts for retransmission
5. Limit packet size to avoid fragmentation
6. Consider congestion control

## UDP Options

- **SO_BROADCAST**: Enable broadcast
- **IP_MULTICAST_TTL**: Set multicast TTL
- **SO_RCVBUF/SO_SNDBUF**: Buffer sizes
- **SO_REUSEADDR**: Reuse address
""",
    "questions": [
        {"id": "cpp-38-3-1", "type": "typing", "question": "What is UDP?", "correctAnswer": ["User Datagram Protocol", "UDP", "connectionless protocol"], "explanation": "UDP is connectionless, unreliable datagram protocol.", "xp": 5},
        {"id": "cpp-38-3-2", "type": "multiple", "question": "What is main difference between UDP and TCP?", "options": ["UDP is connectionless, TCP is connection-oriented", "UDP uses different ports", "UDP is encrypted", "UDP is slower"], "correctAnswer": [0], "explanation": "UDP is connectionless while TCP requires connection.", "xp": 5},
        {"id": "cpp-38-3-3", "type": "typing", "question": "Is UDP reliable?", "correctAnswer": ["no, delivery not guaranteed", "unreliable", "no guarantees"], "explanation": "UDP does not guarantee packet delivery or ordering.", "xp": 5},
        {"id": "cpp-38-3-4", "type": "code", "question": "Create UDP socket.", "correctAnswer": ["socket(AF_INET, SOCK_DGRAM, 0)", "UDP socket", "create socket"], "explanation": "Use SOCK_DGRAM for UDP datagram socket.", "xp": 15},
        {"id": "cpp-38-3-5", "type": "code", "question": "Send UDP packet.", "correctAnswer": ["sendto(sockfd, buffer, len, 0, &addr, sizeof(addr))", "sendto", "UDP send"], "explanation": "sendto sends datagram to specified address.", "xp": 15},
        {"id": "cpp-38-3-6", "type": "code", "question": "Receive UDP packet.", "correctAnswer": ["recvfrom(sockfd, buffer, len, 0, &addr, &len)", "recvfrom", "UDP receive"], "explanation": "recvfrom receives datagram and sender address.", "xp": 15},
        {"id": "cpp-38-3-7", "type": "code", "question": "Bind UDP socket.", "correctAnswer": ["bind(sockfd, (sockaddr*)&addr, sizeof(addr))", "bind", "UDP bind"], "explanation": "bind assigns address to UDP socket.", "xp": 15},
        {"id": "cpp-38-3-8", "type": "code", "question": "Enable UDP broadcast.", "correctAnswer": ["setsockopt with SO_BROADCAST", "broadcast", "enable"], "explanation": "Set SO_BROADCAST option to enable broadcast.", "xp": 15},
        {"id": "cpp-38-3-9", "type": "code", "question": "Send broadcast UDP.", "correctAnswer": ["sendto to 255.255.255.255", "broadcast address", "send"], "explanation": "Send to 255.255.255.255 for broadcast.", "xp": 15},
        {"id": "cpp-38-3-10", "type": "code", "question": "Set multicast TTL.", "correctAnswer": ["IP_MULTICAST_TTL", "TTL", "multicast"], "explanation": "Set IP_MULTICAST_TTL option for multicast.", "xp": 15},
        {"id": "cpp-38-3-11", "type": "code", "question": "Join multicast group.", "correctAnswer": ["IP_ADD_MEMBERSHIP", "join multicast", "group"], "explanation": "Use IP_ADD_MEMBERSHIP to join multicast group.", "xp": 15},
        {"id": "cpp-38-3-12", "type": "code", "question": "Handle UDP packet loss.", "correctAnswer": ["application-level retransmission", "handle loss", "retransmit"], "explanation": "Implement retransmission at application level.", "xp": 15},
        {"id": "cpp-38-3-13", "type": "code", "question": "Add sequence numbers to UDP.", "correctAnswer": ["include sequence in packet", "sequence number", "ordering"], "explanation": "Add sequence number to detect and reorder packets.", "xp": 15},
        {"id": "cpp-38-3-14", "type": "code", "question": "Calculate UDP checksum.", "correctAnswer": ["calculate checksum of data", "checksum", "integrity"], "explanation": "Calculate and include checksum for data integrity.", "xp": 15},
        {"id": "cpp-38-3-15", "type": "typing", "question": "What is default UDP port range?", "correctAnswer": ["ephemeral ports 49152-65535", "port range", "dynamic ports"], "explanation": "UDP uses ephemeral port range 49152-65535 for clients.", "xp": 5},
        {"id": "cpp-38-3-16", "type": "code", "question": "UDP for DNS query.", "correctAnswer": ["send query and wait for response", "DNS", "domain name"], "explanation": "Send DNS query via UDP and wait for response.", "xp": 15},
        {"id": "cpp-38-3-17", "type": "code", "question": "UDP for gaming.", "correctAnswer": ["send frequent small packets", "gaming", "real-time"], "explanation": "UDP is good for gaming due to low latency.", "xp": 15},
        {"id": "cpp-38-3-18", "type": "code", "question": "UDP timeout handling.", "correctAnswer": ["set socket timeout", "timeout", "SO_RCVTIMEO"], "explanation": "Set SO_RCVTIMEO for receive timeout.", "xp": 15},
        {"id": "cpp-38-3-19", "type": "code", "question": "UDP buffer size.", "correctAnswer": ["SO_RCVBUF and SO_SNDBUF", "buffer", "socket options"], "explanation": "Set buffer sizes with SO_RCVBUF/SO_SNDBUF.", "xp": 15},
        {"id": "cpp-38-3-20", "type": "code", "question": "UDP packet fragmentation.", "correctAnswer": ["keep packets under MTU", "fragmentation", "MTU"], "explanation": "Keep packets under MTU to avoid fragmentation.", "xp": 15},
        {"id": "cpp-38-3-21", "type": "code", "question": "UDP congestion control.", "correctAnswer": ["implement rate limiting", "congestion", "throttle"], "explanation": "Implement rate limiting to avoid congestion.", "xp": 15},
        {"id": "cpp-38-3-22", "type": "code", "question": "Debug UDP communication.", "correctAnswer": ["use Wireshark or packet capture", "debug", "sniff"], "explanation": "Use packet capture tools to debug UDP.", "xp": 15},
        {"id": "cpp-38-3-23", "type": "typing", "question": "When to use UDP over TCP?", "correctAnswer": ["speed more important than reliability", "real-time", "gaming"], "explanation": "Use UDP when speed and low latency are more important.", "xp": 5},
        {"id": "cpp-38-3-24", "type": "typing", "question": "What is multicast?", "correctAnswer": ["send to multiple recipients efficiently", "multicast", "group communication"], "explanation": "Multicast sends to multiple recipients efficiently.", "xp": 5},
        {"id": "cpp-38-3-25", "type": "code", "question": "Leave multicast group.", "correctAnswer": ["IP_DROP_MEMBERSHIP", "leave multicast", "leave group"], "explanation": "Use IP_DROP_MEMBERSHIP to leave multicast group.", "xp": 15}
    ]
}

data['units'][37]['lessons'][2].update(lesson38_3)
print("✅ Unit 38, Lesson 3: UDP Programming - 25 detailed questions")

# Unit 27, Lesson 2: Red-Black Tree
lesson27_2 = {
    "id": "cpp-U27-L2",
    "title": "Red-Black Tree",
    "unitTitle": "27. Advanced Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Red-Black Tree

Self-balancing binary search tree with color-based balancing.

## Core Concept

Red-Black tree maintains balance using red/black colors on nodes, ensuring O(log n) operations.

## Properties

1. **Red or Black**: Every node is red or black
2. **Black root**: Root is always black
3. **Black leaves**: NIL leaves are black
4. **Red children**: Red node's children are black
5. **Black height**: All paths have same black node count

## Rotations

- **Left rotation**: Fix right-leaning red links
- **Right rotation**: Fix left-leaning red links

## Operations

- **Insert**: O(log n) with recoloring and rotations
- **Delete**: O(log n) with complex rebalancing
- **Search**: O(log n) standard BST search
- **Minimum/Maximum**: O(log n)

## Advantages

- **Balanced**: Always balanced structure
- **Efficient**: O(log n) guaranteed
- **Few rotations**: Fewer rotations than AVL
- **Widely used**: Many implementations (std::map, std::set)

## Uses

- **Associative containers**: map, set
- **Databases**: Index structures
- **Filesystems**: Directory structures
- **Language runtimes**: Symbol tables

## Best Practices

1. Use standard library containers (std::map, std::set)
2. Understand rebalancing for debugging
3. Consider alternatives for specific use cases
4. Test with various insert/delete patterns
""",
    "questions": [
        {"id": "cpp-27-2-1", "type": "typing", "question": "What is red-black tree?", "correctAnswer": ["self-balancing binary search tree", "RBT", "balanced BST"], "explanation": "Red-black tree is self-balancing BST using colors.", "xp": 5},
        {"id": "cpp-27-2-2", "type": "typing", "question": "What are the two node colors?", "correctAnswer": ["red and black", "colors", "RBT colors"], "explanation": "Nodes are colored red or black.", "xp": 5},
        {"id": "cpp-27-2-3", "type": "multiple", "question": "What is always true about root?", "options": ["Always black", "Always red", "Can be either", "Always NULL"], "correctAnswer": [0], "explanation": "Root node is always black.", "xp": 5},
        {"id": "cpp-27-2-4", "type": "code", "question": "Perform left rotation.", "correctAnswer": ["rotate left to fix right-heavy", "left rotation", "rotate"], "explanation": "Left rotation fixes right-leaning red links.", "xp": 15},
        {"id": "cpp-27-2-5", "type": "code", "question": "Perform right rotation.", "correctAnswer": ["rotate right to fix left-heavy", "right rotation", "rotate"], "explanation": "Right rotation fixes left-leaning red links.", "xp": 15},
        {"id": "cpp-27-2-6", "type": "code", "question": "Insert into red-black tree.", "correctAnswer": ["BST insert then rebalance", "insert", "add"], "explanation": "Insert as in BST, then recolor and rotate.", "xp": 15},
        {"id": "cpp-27-2-7", "type": "code", "question": "Delete from red-black tree.", "correctAnswer": ["BST delete then rebalance", "delete", "remove"], "explanation": "Delete from BST, then rebalance tree.", "xp": 15},
        {"id": "cpp-27-2-8", "type": "code", "question": "Search in red-black tree.", "correctAnswer": ["standard BST search", "search", "find"], "explanation": "Search works like standard BST search.", "xp": 15},
        {"id": "cpp-27-2-9", "type": "code", "question": "Find minimum in red-black tree.", "correctAnswer": ["leftmost node", "minimum", "min"], "explanation": "Minimum is leftmost node in tree.", "xp": 15},
        {"id": "cpp-27-2-10", "type": "code", "question": "Find maximum in red-black tree.", "correctAnswer": ["rightmost node", "maximum", "max"], "explanation": "Maximum is rightmost node in tree.", "xp": 15},
        {"id": "cpp-27-2-11", "type": "code", "question": "Check red-black tree properties.", "correctAnswer": ["verify all RBT properties", "check", "validate"], "explanation": "Verify all red-black tree invariants.", "xp": 15},
        {"id": "cpp-27-2-12", "type": "code", "question": "Recolor red-black tree nodes.", "correctAnswer": ["flip colors", "recolor", "color change"], "explanation": "Recolor nodes during rebalancing.", "xp": 15},
        {"id": "cpp-27-2-13", "type": "typing", "question": "What is time complexity of RBT operations?", "correctAnswer": ["O(log n)", "logarithmic", "balanced"], "explanation": "All operations are O(log n) due to balance.", "xp": 5},
        {"id": "cpp-27-2-14", "type": "code", "question": "Compare red-black vs AVL tree.", "correctAnswer": ["RBT fewer rotations, AVL more balanced", "comparison", "trade-offs"], "explanation": "RBT has fewer rotations but AVL is more balanced.", "xp": 15},
        {"id": "cpp-27-2-15", "type": "code", "question": "Use std::map (red-black tree).", "correctAnswer": ["std::map container", "map", "associative"], "explanation": "std::map is typically implemented as red-black tree.", "xp": 15},
        {"id": "cpp-27-2-16", "type": "code", "question": "Use std::set (red-black tree).", "correctAnswer": ["std::set container", "set", "associative"], "explanation": "std::set is typically implemented as red-black tree.", "xp": 15},
        {"id": "cpp-27-2-17", "type": "code", "question": "Iterate red-black tree in-order.", "correctAnswer": ["left-root-right traversal", "in-order", "traverse"], "explanation": "In-order traversal visits nodes in sorted order.", "xp": 15},
        {"id": "cpp-27-2-18", "type": "code", "question": "Range search in red-black tree.", "correctAnswer": ["in-order with range check", "range query", "search range"], "explanation": "Traverse in-order, output nodes within range.", "xp": 15},
        {"id": "cpp-27-2-19", "type": "code", "question": "Red-black tree for databases.", "correctAnswer": ["index structure", "database", "indexing"], "explanation": "Red-black trees used as database indexes.", "xp": 15},
        {"id": "cpp-27-2-20", "type": "code", "question": "Debug red-black tree structure.", "correctAnswer": ["print tree with colors", "debug", "visualize"], "explanation": "Print tree showing colors and structure.", "xp": 15},
        {"id": "cpp-27-2-21", "type": "code", "question": "Red-black tree with duplicates.", "correctAnswer": ["allow duplicates or use multiset", "duplicates", "same keys"], "explanation": "RBT can handle duplicates appropriately.", "xp": 15},
        {"id": "cpp-27-2-22", "type": "code", "question": "Bulk insert into red-black tree.", "correctAnswer": ["insert sequentially", "bulk load", "batch"], "explanation": "Insert elements one by one and rebalance.", "xp": 15},
        {"id": "cpp-27-2-23", "type": "code", "question": "Serialize red-black tree.", "correctAnswer": ["save structure to file", "serialize", "persistence"], "explanation": "Save tree structure for later loading.", "xp": 15},
        {"id": "cpp-27-2-24", "type": "typing", "question": "When to use red-black tree?", "correctAnswer": ["need balanced BST with efficient operations", "RBT", "balanced tree"], "explanation": "Use RBT when you need balanced BST operations.", "xp": 5},
        {"id": "cpp-27-2-25", "type": "typing", "question": "What is black height?", "correctAnswer": ["number of black nodes on path", "black height", "property"], "explanation": "Black height is count of black nodes to any leaf.", "xp": 5}
    ]
}

data['units'][26]['lessons'][1].update(lesson27_2)
print("✅ Unit 27, Lesson 2: Red-Black Tree - 25 detailed questions")

# Unit 29, Lesson 1: Binary Heap Basics
lesson29_1 = {
    "id": "cpp-U29-L1",
    "title": "Binary Heap Basics",
    "unitTitle": "29. Heaps and Priority Queues",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Binary Heap Basics

Complete binary tree with heap property for priority queues.

## Core Concepts

- **Complete binary tree**: All levels filled except possibly last
- **Heap property**: Parent >= children (max heap) or parent <= children (min heap)
- **Array representation**: Efficient storage using indices

## Heap Types

- **Max heap**: Parent >= all children
- **Min heap**: Parent <= all children
- **Index relationship**: Parent at i, children at 2i+1 and 2i+2

## Operations

- **Insert**: O(log n) - add and bubble up
- **Extract max/min**: O(log n) - remove and bubble down
- **Peek**: O(1) - view top element
- **Build heap**: O(n) - heapify array

## Array Representation

```cpp
parent(i) = (i-1) / 2
left_child(i) = 2*i + 1
right_child(i) = 2*i + 2
```

## Applications

- **Priority queues**: Efficient element access
- **Heap sort**: In-place sorting algorithm
- **Graph algorithms**: Dijkstra, Prim
- **Selection algorithms**: Find kth smallest/largest
- **Median maintenance**: Track running median

## Best Practices

1. Use std::priority_queue when possible
2. Understand heap property for debugging
3. Consider min vs max heap for use case
4. Use heap sort for in-place sorting
5. Combine with other data structures as needed

## STL Priority Queue

```cpp
std::priority_queue<int> max_heap;  // Max heap
std::priority_queue<int, vector<int>, greater<int>> min_heap;  // Min heap
```
""",
    "questions": [
        {"id": "cpp-29-1-1", "type": "typing", "question": "What is binary heap?", "correctAnswer": ["complete binary tree with heap property", "heap", "priority queue"], "explanation": "Binary heap is complete binary tree satisfying heap property.", "xp": 5},
        {"id": "cpp-29-1-2", "type": "multiple", "question": "What is max heap property?", "options": ["Parent >= children", "Parent <= children", "Parent = children", "No property"], "correctAnswer": [0], "explanation": "In max heap, parent is >= all children.", "xp": 5},
        {"id": "cpp-29-1-3", "type": "typing", "question": "What is min heap property?", "correctAnswer": ["parent <= children", "min heap", "smallest at root"], "explanation": "In min heap, parent is <= all children.", "xp": 5},
        {"id": "cpp-29-1-4", "type": "code", "question": "Calculate parent index.", "correctAnswer": ["(i-1) / 2", "parent", "index"], "explanation": "Parent of node at index i is at (i-1)/2.", "xp": 15},
        {"id": "cpp-29-1-5", "type": "code", "question": "Calculate left child index.", "correctAnswer": ["2*i + 1", "left child", "index"], "explanation": "Left child of node at index i is at 2*i+1.", "xp": 15},
        {"id": "cpp-29-1-6", "type": "code", "question": "Calculate right child index.", "correctAnswer": ["2*i + 2", "right child", "index"], "explanation": "Right child of node at index i is at 2*i+2.", "xp": 15},
        {"id": "cpp-29-1-7", "type": "code", "question": "Insert into heap.", "correctAnswer": ["add element and bubble up", "insert", "push"], "explanation": "Add element and bubble up to maintain heap property.", "xp": 15},
        {"id": "cpp-29-1-8", "type": "code", "question": "Extract max from max heap.", "correctAnswer": ["remove root and bubble down", "extract max", "pop"], "explanation": "Remove root and bubble down to maintain heap.", "xp": 15},
        {"id": "cpp-29-1-9", "type": "code", "question": "Peek at heap top.", "correctAnswer": ["return root element", "peek", "top"], "explanation": "Return root element without removing.", "xp": 15},
        {"id": "cpp-29-1-10", "type": "code", "question": "Bubble up (heapify up).", "correctAnswer": ["swap with parent if violates property", "bubble up", "sift up"], "explanation": "Swap with parent until heap property satisfied.", "xp": 15},
        {"id": "cpp-29-1-11", "type": "code", "question": "Bubble down (heapify down).", "correctAnswer": ["swap with largest child if violates property", "bubble down", "sift down"], "explanation": "Swap with largest child until heap property satisfied.", "xp": 15},
        {"id": "cpp-29-1-12", "type": "code", "question": "Build heap from array.", "correctAnswer": ["heapify from bottom up", "build heap", "heapify"], "explanation": "Start from last parent and heapify down.", "xp": 15},
        {"id": "cpp-29-1-13", "type": "typing", "question": "What is time complexity of heap insert?", "correctAnswer": ["O(log n)", "logarithmic", "O(log n)"], "explanation": "Heap insert is O(log n) due to bubble up.", "xp": 5},
        {"id": "cpp-29-1-14", "type": "typing", "question": "What is time complexity of heap extract?", "correctAnswer": ["O(log n)", "logarithmic", "O(log n)"], "explanation": "Heap extract is O(log n) due to bubble down.", "xp": 5},
        {"id": "cpp-29-1-15", "type": "code", "question": "Use std::priority_queue.", "correctAnswer": ["std::priority_queue<int>", "priority queue", "STL"], "explanation": "std::priority_queue implements max heap.", "xp": 15},
        {"id": "cpp-29-1-16", "type": "code", "question": "Create min heap with STL.", "correctAnswer": ["std::priority_queue<int, vector<int>, greater<int>>", "min heap", "priority queue"], "explanation": "Use greater comparator for min heap.", "xp": 15},
        {"id": "cpp-29-1-17", "type": "code", "question": "Heap sort algorithm.", "correctAnswer": ["build heap then extract repeatedly", "heap sort", "sorting"], "explanation": "Heap sort builds heap and extracts repeatedly.", "xp": 15},
        {"id": "cpp-29-1-18", "type": "code", "question": "Find kth smallest using heap.", "correctAnswer": ["use max heap of size k", "kth smallest", "selection"], "explanation": "Maintain max heap of k smallest elements.", "xp": 15},
        {"id": "cpp-29-1-19", "type": "code", "question": "Find kth largest using heap.", "correctAnswer": ["use min heap of size k", "kth largest", "selection"], "explanation": "Maintain min heap of k largest elements.", "xp": 15},
        {"id": "cpp-29-1-20", "type": "code", "question": "Maintain running median.", "correctAnswer": ["use two heaps", "running median", "median"], "explanation": "Use max heap for lower half, min heap for upper half.", "xp": 15},
        {"id": "cpp-29-1-21", "type": "code", "question": "Merge two heaps.", "correctAnswer": ["insert all elements into new heap", "merge", "combine"], "explanation": "Merge by inserting all elements into new heap.", "xp": 15},
        {"id": "cpp-29-1-22", "type": "code", "question": "Check if array is valid heap.", "correctAnswer": ["verify heap property", "check", "validate"], "explanation": "Verify heap property for all nodes.", "xp": 15},
        {"id": "cpp-29-1-23", "type": "code", "question": "Debug heap structure.", "correctAnswer": ["print heap array", "debug", "visualize"], "explanation": "Print heap array to verify structure.", "xp": 15},
        {"id": "cpp-29-1-24", "type": "typing", "question": "What is heap used for?", "correctAnswer": ["priority queue and heap sort", "priority queue", "sorting"], "explanation": "Heap is used for priority queues and heap sort.", "xp": 5},
        {"id": "cpp-29-1-25", "type": "typing", "question": "Why use heap for priority queue?", "correctAnswer": ["efficient O(log n) insert and extract", "efficiency", "performance"], "explanation": "Heap provides efficient priority queue operations.", "xp": 5}
    ]
}

data['units'][28]['lessons'][0].update(lesson29_1)
print("✅ Unit 29, Lesson 1: Binary Heap Basics - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 13 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 38, Lesson 3: UDP Programming")
print("  - Unit 27, Lesson 2: Red-Black Tree")
print("  - Unit 29, Lesson 1: Binary Heap Basics")
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
