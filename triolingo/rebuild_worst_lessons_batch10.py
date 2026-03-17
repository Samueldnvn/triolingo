#!/usr/bin/env python3
"""
Rebuild Batch 10 - Continue systematic rebuild
"""
import json
import os

print("🚀 BATCH 10: Continuing systematic rebuild")
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
# Unit 49, Lesson 7: Modern C++ Features Review
lesson49_7 = {
    "id": "cpp-U49-L7",
    "title": "Modern C++ Features Review",
    "unitTitle": "49. Course Completion & Final Summary",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Modern C++ Features Review

Comprehensive review of modern C++ features introduced in C++11 through C++20.

## C++11 Features

- **Auto**: Type deduction
- **Lambda**: Anonymous functions
- **Smart pointers**: unique_ptr, shared_ptr, weak_ptr
- **Move semantics**: Rvalue references
- **Range-based for loops**: Simplified iteration
- **nullptr**: Type-safe null pointer
- **enum class**: Scoped enumerations
- **constexpr**: Compile-time evaluation

## C++14 Features

- **Generic lambdas**: Auto parameters
- **Make_unique**: Create unique_ptr
- **Relaxed constexpr**: More flexible compile-time
- **Binary literals**: 0b prefix
- **Digit separators**: Single quotes in numbers

## C++17 Features

- **Structured bindings**: auto [a,b] = pair
- **if/switch with initializer**: if (auto x = get())
- **std::optional**: Optional values
- **std::variant**: Type-safe union
- **std::filesystem**: File system operations
- **fold expressions**: Parameter pack operations

## C++20 Features

- **Concepts**: Constraints on templates
- **Ranges**: Lazy sequences
- **Coroutines**: Suspendable functions
- **Modules**: Better than headers
- **std::span**: Non-owning view
- **Three-way comparison**: <=> operator
- **std::format**: Type-safe formatting

## Best Practices

1. Prefer modern features over legacy code
2. Use smart pointers instead of raw pointers
3. Leverage type deduction when clear
4. Use constexpr for compile-time constants
5. Apply RAII consistently
""",
    "questions": [
        {"id": "cpp-49-7-1", "type": "typing", "question": "What does auto do in C++11?", "correctAnswer": ["type deduction", "automatic type", "auto"], "explanation": "auto deduces type from initializer automatically.", "xp": 5},
        {"id": "cpp-49-7-2", "type": "typing", "question": "What is a lambda in C++?", "correctAnswer": ["anonymous function", "lambda function", "closure"], "explanation": "Lambda is anonymous function that can capture variables.", "xp": 5},
        {"id": "cpp-49-7-3", "type": "multiple", "question": "What smart pointer owns exclusively?", "options": ["unique_ptr", "shared_ptr", "weak_ptr", "raw_ptr"], "correctAnswer": [0], "explanation": "unique_ptr has exclusive ownership of resource.", "xp": 5},
        {"id": "cpp-49-7-4", "type": "code", "question": "Use auto for type deduction.", "correctAnswer": ["auto x = value;", "auto", "type deduction"], "explanation": "Use auto to let compiler deduce type.", "xp": 15},
        {"id": "cpp-49-7-5", "type": "code", "question": "Write lambda function.", "correctAnswer": ["[](int x) { return x*2; }", "lambda", "anonymous function"], "explanation": "Lambda syntax: [captures](params) { body }", "xp": 15},
        {"id": "cpp-49-7-6", "type": "code", "question": "Use unique_ptr.", "correctAnswer": ["std::unique_ptr<int> ptr(new int(5));", "unique_ptr", "smart pointer"], "explanation": "unique_ptr manages exclusive ownership.", "xp": 15},
        {"id": "cpp-49-7-7", "type": "code", "question": "Use range-based for loop.", "correctAnswer": ["for (auto& x : vec)", "range for", "for loop"], "explanation": "Range-based for iterates over container elements.", "xp": 15},
        {"id": "cpp-49-7-8", "type": "code", "question": "Use nullptr instead of NULL.", "correctAnswer": ["nullptr", "null pointer", "type-safe null"], "explanation": "nullptr is type-safe null pointer literal.", "xp": 15},
        {"id": "cpp-49-7-9", "type": "code", "question": "Define enum class.", "correctAnswer": ["enum class Color { Red, Blue };", "enum class", "scoped enum"], "explanation": "enum class creates scoped enumeration.", "xp": 15},
        {"id": "cpp-49-7-10", "type": "code", "question": "Use constexpr.", "correctAnswer": ["constexpr int x = 5 * 5;", "constexpr", "compile-time"], "explanation": "constexpr evaluates at compile time.", "xp": 15},
        {"id": "cpp-49-7-11", "type": "code", "question": "Use generic lambda.", "correctAnswer": ["[](auto x) { return x; }", "generic lambda", "auto parameter"], "explanation": "Generic lambda uses auto for parameters.", "xp": 15},
        {"id": "cpp-49-7-12", "type": "code", "question": "Use make_unique.", "correctAnswer": ["auto ptr = std::make_unique<int>(5);", "make_unique", "create unique_ptr"], "explanation": "make_unique creates unique_ptr safely.", "xp": 15},
        {"id": "cpp-49-7-13", "type": "code", "question": "Use binary literal.", "correctAnswer": ["0b1010", "binary literal", "0b prefix"], "explanation": "0b prefix creates binary literal.", "xp": 15},
        {"id": "cpp-49-7-14", "type": "code", "question": "Use digit separator.", "correctAnswer": ["int x = 1'000'000;", "digit separator", "single quote"], "explanation": "Single quotes separate digits for readability.", "xp": 15},
        {"id": "cpp-49-7-15", "type": "code", "question": "Use structured binding.", "correctAnswer": ["auto [a, b] = pair;", "structured binding", "unpack"], "explanation": "Structured binding unpacks tuple/pair.", "xp": 15},
        {"id": "cpp-49-7-16", "type": "code", "question": "Use if with initializer.", "correctAnswer": ["if (auto x = get(); x)", "if initializer", "scoped variable"], "explanation": "If with initializer creates scoped variable.", "xp": 15},
        {"id": "cpp-49-7-17", "type": "code", "question": "Use std::optional.", "correctAnswer": ["std::optional<int> opt = value;", "optional", "maybe value"], "explanation": "optional represents value that may not exist.", "xp": 15},
        {"id": "cpp-49-7-18", "type": "code", "question": "Use std::variant.", "correctAnswer": ["std::variant<int, string> v;", "variant", "type-safe union"], "explanation": "variant holds one of several types safely.", "xp": 15},
        {"id": "cpp-49-7-19", "type": "code", "question": "Use concept in template.", "correctAnswer": ["template<typename T> concept Integral = ...", "concept", "template constraint"], "explanation": "Concept constrains template parameters.", "xp": 15},
        {"id": "cpp-49-7-20", "type": "code", "question": "Use ranges.", "correctAnswer": ["std::views::transform", "ranges", "lazy sequence"], "explanation": "Ranges provide composable, lazy operations.", "xp": 15},
        {"id": "cpp-49-7-21", "type": "code", "question": "Use three-way comparison.", "correctAnswer": ["a <=> b", "three-way", "spaceship operator"], "explanation": "<=> returns strong ordering type.", "xp": 15},
        {"id": "cpp-49-7-22", "type": "code", "question": "Use std::format.", "correctAnswer": ["std::format(\"{}\", value)", "format", "string formatting"], "explanation": "std::format provides type-safe formatting.", "xp": 15},
        {"id": "cpp-49-7-23", "type": "code", "question": "Use std::span.", "correctAnswer": ["std::span<int> s(vec)", "span", "non-owning view"], "explanation": "span provides non-owning view of contiguous data.", "xp": 15},
        {"id": "cpp-49-7-24", "type": "typing", "question": "What is RAII?", "correctAnswer": ["Resource Acquisition Is Initialization", "RAII", "resource management"], "explanation": "RAII ties resource lifetime to object lifetime.", "xp": 5},
        {"id": "cpp-49-7-25", "type": "typing", "question": "Why use modern C++ features?", "correctAnswer": ["safer, more expressive, efficient", "modern C++", "benefits"], "explanation": "Modern features improve safety, expressiveness, and efficiency.", "xp": 5}
    ]
}

data['units'][48]['lessons'][6].update(lesson49_7)
print("✅ Unit 49, Lesson 7: Modern C++ Features Review - 25 detailed questions")

# Unit 27, Lesson 1: AVL Tree
lesson27_1 = {
    "id": "cpp-U27-L1",
    "title": "AVL Tree",
    "unitTitle": "27. Advanced Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# AVL Tree

Self-balancing binary search tree with guaranteed O(log n) operations.

## Core Concept

AVL tree maintains balance by ensuring height difference between left and right subtrees is at most 1.

## Balance Factor

- **Balance factor**: height(left) - height(right)
- **Valid range**: -1, 0, or +1
- **Imbalance**: Balance factor outside [-1, 1]

## Rotations

- **Right rotation**: Fix left-heavy
- **Left rotation**: Fix right-heavy
- **Left-right rotation**: Fix left-right case
- **Right-left rotation**: Fix right-left case

## Operations

- **Insert**: O(log n) with rotations
- **Delete**: O(log n) with rotations
- **Search**: O(log n) standard BST
- **Height**: O(1) stored in nodes

## Properties

- **Balanced**: Always balanced
- **Guaranteed**: O(log n) operations
- **More rotations**: More frequent than red-black
- **Faster lookups**: More balanced than red-black

## Best Practices

1. Store height in each node
2. Update height after modifications
3. Check balance factor after insert/delete
4. Rotate as needed to restore balance
5. Use recursive implementation for simplicity
""",
    "questions": [
        {"id": "cpp-27-1-1", "type": "typing", "question": "What is an AVL tree?", "correctAnswer": ["self-balancing binary search tree", "balanced BST", "AVL"], "explanation": "AVL tree is self-balancing BST maintaining height balance.", "xp": 5},
        {"id": "cpp-27-1-2", "type": "typing", "question": "What is balance factor in AVL tree?", "correctAnswer": ["height difference between subtrees", "balance", "height diff"], "explanation": "Balance factor is height(left) - height(right).", "xp": 5},
        {"id": "cpp-27-1-3", "type": "multiple", "question": "What is valid balance factor range?", "options": ["-1 to 1", "0 to 1", "-2 to 2", "Any value"], "correctAnswer": [0], "explanation": "Valid balance factors are -1, 0, or +1.", "xp": 5},
        {"id": "cpp-27-1-4", "type": "code", "question": "Calculate balance factor.", "correctAnswer": ["height(left) - height(right)", "balance factor", "calculate"], "explanation": "Subtract right subtree height from left subtree height.", "xp": 15},
        {"id": "cpp-27-1-5", "type": "code", "question": "Perform right rotation.", "correctAnswer": ["rotate right to fix left-heavy", "right rotation", "LL case"], "explanation": "Right rotation fixes left-left imbalance.", "xp": 15},
        {"id": "cpp-27-1-6", "type": "code", "question": "Perform left rotation.", "correctAnswer": ["rotate left to fix right-heavy", "left rotation", "RR case"], "explanation": "Left rotation fixes right-right imbalance.", "xp": 15},
        {"id": "cpp-27-1-7", "type": "code", "question": "Perform left-right rotation.", "correctAnswer": ["left rotation on left child, right rotation", "LR rotation", "left-right case"], "explanation": "LR case: rotate left on left child, then right on node.", "xp": 15},
        {"id": "cpp-27-1-8", "type": "code", "question": "Perform right-left rotation.", "correctAnswer": ["right rotation on right child, left rotation", "RL rotation", "right-left case"], "explanation": "RL case: rotate right on right child, then left on node.", "xp": 15},
        {"id": "cpp-27-1-9", "type": "code", "question": "Insert into AVL tree.", "correctAnswer": ["BST insert then balance", "insert and rebalance", "insert operation"], "explanation": "Insert as in BST, then update heights and rebalance.", "xp": 15},
        {"id": "cpp-27-1-10", "type": "code", "question": "Delete from AVL tree.", "correctAnswer": ["BST delete then balance", "delete and rebalance", "delete operation"], "explanation": "Delete from BST, then update heights and rebalance.", "xp": 15},
        {"id": "cpp-27-1-11", "type": "code", "question": "Update node height.", "correctAnswer": ["height = 1 + max(left.height, right.height)", "update height", "recalculate"], "explanation": "Height is 1 plus maximum of children heights.", "xp": 15},
        {"id": "cpp-27-1-12", "type": "code", "question": "Check if tree is balanced.", "correctAnswer": ["check balance factors", "verify balance", "balanced"], "explanation": "Verify all nodes have balance factor in valid range.", "xp": 15},
        {"id": "cpp-27-1-13", "type": "code", "question": "Find height of AVL tree.", "correctAnswer": ["O(log n)", "logarithmic", "tree height"], "explanation": "AVL tree height is always O(log n).", "xp": 15},
        {"id": "cpp-27-1-14", "type": "typing", "question": "What is time complexity of AVL operations?", "correctAnswer": ["O(log n)", "logarithmic", "balanced"], "explanation": "All operations are O(log n) due to balance.", "xp": 5},
        {"id": "cpp-27-1-15", "type": "code", "question": "Compare AVL vs red-black tree.", "correctAnswer": ["AVL more rotations, faster lookups", "comparison", "trade-offs"], "explanation": "AVL has more rotations but faster lookups than red-black.", "xp": 15},
        {"id": "cpp-27-1-16", "type": "code", "question": "AVL tree for caching.", "correctAnswer": ["faster lookups", "cache", "performance"], "explanation": "Use AVL when read operations dominate writes.", "xp": 15},
        {"id": "cpp-27-1-17", "type": "code", "question": "Debug AVL tree structure.", "correctAnswer": ["print tree with heights and balances", "debug", "visualize"], "explanation": "Print tree showing heights and balance factors.", "xp": 15},
        {"id": "cpp-27-1-18", "type": "code", "question": "Iterate AVL tree in-order.", "correctAnswer": ["left-root-right traversal", "in-order", "traverse"], "explanation": "In-order traversal visits nodes in sorted order.", "xp": 15},
        {"id": "cpp-27-1-19", "type": "code", "question": "Find minimum in AVL tree.", "correctAnswer": ["leftmost node", "find min", "minimum"], "explanation": "Minimum is leftmost node in tree.", "xp": 15},
        {"id": "cpp-27-1-20", "type": "code", "question": "Find maximum in AVL tree.", "correctAnswer": ["rightmost node", "find max", "maximum"], "explanation": "Maximum is rightmost node in tree.", "xp": 15},
        {"id": "cpp-27-1-21", "type": "code", "question": "Range search in AVL tree.", "correctAnswer": ["in-order traversal with range check", "range query", "search range"], "explanation": "Traverse in-order, output nodes within range.", "xp": 15},
        {"id": "cpp-27-1-22", "type": "code", "question": "AVL tree with duplicates.", "correctAnswer": ["handle duplicate keys", "duplicates", "same values"], "explanation": "Decide policy: reject, store count, or allow.", "xp": 15},
        {"id": "cpp-27-1-23", "type": "code", "question": "Bulk insert into AVL tree.", "correctAnswer": ["insert sequentially and rebalance", "bulk load", "batch"], "explanation": "Insert each element and rebalance after each.", "xp": 15},
        {"id": "cpp-27-1-24", "type": "code", "question": "Serialize AVL tree.", "correctAnswer": ["save structure to file", "serialize", "persistence"], "explanation": "Save tree structure for later loading.", "xp": 15},
        {"id": "cpp-27-1-25", "type": "typing", "question": "When to use AVL tree?", "correctAnswer": ["need guaranteed balanced BST", "AVL", "balanced tree"], "explanation": "Use AVL when you need guaranteed balanced operations.", "xp": 5}
    ]
}

data['units'][26]['lessons'][0].update(lesson27_1)
print("✅ Unit 27, Lesson 1: AVL Tree - 25 detailed questions")

# Unit 43, Lesson 1: Networking Basics
lesson43_1 = {
    "id": "cpp-U43-L1",
    "title": "Networking Basics",
    "unitTitle": "43. Network Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Networking Basics

Fundamental concepts of network programming in C++.

## Core Concepts

- **IP Address**: Unique identifier for device on network
- **Port**: Logical endpoint for communication
- **Socket**: Endpoint for sending/receiving data
- **Protocol**: Rules for communication

## IP Addresses

- **IPv4**: 32-bit address (192.168.1.1)
- **IPv6**: 128-bit address (2001:db8::1)
- **Loopback**: 127.0.0.1 or ::1 (local host)
- **Private**: 10.x.x.x, 172.16-31.x.x, 192.168.x.x

## Ports

- **Well-known**: 0-1023 (HTTP 80, HTTPS 443)
- **Registered**: 1024-49151
- **Dynamic**: 49152-65535
- **Ephemeral**: Temporary ports for clients

## Protocols

- **TCP**: Reliable, connection-oriented
- **UDP**: Unreliable, connectionless
- **HTTP**: Web communication
- **HTTPS**: Secure HTTP

## Socket Types

- **Stream socket**: TCP (SOCK_STREAM)
- **Datagram socket**: UDP (SOCK_DGRAM)
- **Raw socket**: Direct IP access

## Network Functions

- **socket()**: Create socket
- **bind()**: Assign address to socket
- **listen()**: Wait for connections
- **accept()**: Accept incoming connection
- **connect()**: Connect to server
- **send()/recv()**: Send/receive data
""",
    "questions": [
        {"id": "cpp-43-1-1", "type": "typing", "question": "What is an IP address?", "correctAnswer": ["unique identifier for network device", "IP", "address"], "explanation": "IP address uniquely identifies device on network.", "xp": 5},
        {"id": "cpp-43-1-2", "type": "typing", "question": "What is a port?", "correctAnswer": ["logical communication endpoint", "port number", "endpoint"], "explanation": "Port identifies specific application or service.", "xp": 5},
        {"id": "cpp-43-1-3", "type": "multiple", "question": "What is loopback address?", "options": ["127.0.0.1", "192.168.1.1", "8.8.8.8", "0.0.0.0"], "correctAnswer": [0], "explanation": "127.0.0.1 is loopback address for local host.", "xp": 5},
        {"id": "cpp-43-1-4", "type": "typing", "question": "What is difference between TCP and UDP?", "correctAnswer": ["TCP reliable, UDP unreliable", "connection vs connectionless", "reliability"], "explanation": "TCP is reliable connection-oriented, UDP is unreliable connectionless.", "xp": 5},
        {"id": "cpp-43-1-5", "type": "code", "question": "Create socket.", "correctAnswer": ["socket(AF_INET, SOCK_STREAM, 0)", "socket", "create"], "explanation": "socket() creates new socket endpoint.", "xp": 15},
        {"id": "cpp-43-1-6", "type": "code", "question": "Bind socket to address.", "correctAnswer": ["bind(sock, (sockaddr*)&addr, sizeof(addr))", "bind", "assign address"], "explanation": "bind() assigns address to socket.", "xp": 15},
        {"id": "cpp-43-1-7", "type": "code", "question": "Listen for connections.", "correctAnswer": ["listen(sock, backlog)", "listen", "wait for connections"], "explanation": "listen() marks socket as passive to accept connections.", "xp": 15},
        {"id": "cpp-43-1-8", "type": "code", "question": "Accept incoming connection.", "correctAnswer": ["accept(sock, (sockaddr*)&addr, &len)", "accept", "accept connection"], "explanation": "accept() accepts incoming connection on listening socket.", "xp": 15},
        {"id": "cpp-43-1-9", "type": "code", "question": "Connect to server.", "correctAnswer": ["connect(sock, (sockaddr*)&addr, sizeof(addr))", "connect", "establish connection"], "explanation": "connect() establishes connection to server.", "xp": 15},
        {"id": "cpp-43-1-10", "type": "code", "question": "Send data over socket.", "correctAnswer": ["send(sock, buffer, size, 0)", "send", "transmit"], "explanation": "send() transmits data over connected socket.", "xp": 15},
        {"id": "cpp-43-1-11", "type": "code", "question": "Receive data from socket.", "correctAnswer": ["recv(sock, buffer, size, 0)", "recv", "receive"], "explanation": "recv() receives data from connected socket.", "xp": 15},
        {"id": "cpp-43-1-12", "type": "typing", "question": "What is HTTP port?", "correctAnswer": ["port 80", "HTTP", "web"], "explanation": "HTTP uses port 80 by default.", "xp": 5},
        {"id": "cpp-43-1-13", "type": "typing", "question": "What is HTTPS port?", "correctAnswer": ["port 443", "HTTPS", "secure web"], "explanation": "HTTPS uses port 443 by default.", "xp": 5},
        {"id": "cpp-43-1-14", "type": "code", "question": "Create UDP socket.", "correctAnswer": ["socket(AF_INET, SOCK_DGRAM, 0)", "UDP socket", "datagram"], "explanation": "SOCK_DGRAM creates UDP datagram socket.", "xp": 15},
        {"id": "cpp-43-1-15", "type": "code", "question": "Set socket options.", "correctAnswer": ["setsockopt(sock, level, optname, value, len)", "setsockopt", "socket options"], "explanation": "setsockopt() configures socket options.", "xp": 15},
        {"id": "cpp-43-1-16", "type": "code", "question": "Close socket.", "correctAnswer": ["close(sock)", "close", "shutdown"], "explanation": "close() closes socket and releases resources.", "xp": 15},
        {"id": "cpp-43-1-17", "type": "code", "question": "IPv6 address structure.", "correctAnswer": ["sockaddr_in6", "IPv6", "address structure"], "explanation": "sockaddr_in6 structure holds IPv6 address.", "xp": 15},
        {"id": "cpp-43-1-18", "type": "code", "question": "Convert string to IP address.", "correctAnswer": ["inet_pton", "parse address", "convert"], "explanation": "inet_pton() converts string to IP address.", "xp": 15},
        {"id": "cpp-43-1-19", "type": "code", "question": "Convert IP address to string.", "correctAnswer": ["inet_ntop", "format address", "convert"], "explanation": "inet_ntop() converts IP address to string.", "xp": 15},
        {"id": "cpp-43-1-20", "type": "code", "question": "Handle socket errors.", "correctAnswer": ["check return value == -1", "error handling", "check errno"], "explanation": "Socket functions return -1 on error.", "xp": 15},
        {"id": "cpp-43-1-21", "type": "code", "question": "Non-blocking socket.", "correctAnswer": ["fcntl or ioctl", "non-blocking", "async"], "explanation": "Use fcntl or ioctl to set non-blocking mode.", "xp": 15},
        {"id": "cpp-43-1-22", "type": "code", "question": "TCP three-way handshake.", "correctAnswer": ["SYN, SYN-ACK, ACK", "handshake", "connection"], "explanation": "TCP uses SYN, SYN-ACK, ACK to establish connection.", "xp": 15},
        {"id": "cpp-43-1-23", "type": "code", "question": "Broadcast UDP message.", "correctAnswer": ["sendto with broadcast address", "broadcast", "multicast"], "explanation": "Send to 255.255.255.255 for broadcast.", "xp": 15},
        {"id": "cpp-43-1-24", "type": "code", "question": "Debug network communication.", "correctAnswer": ["print data and addresses", "debug", "logging"], "explanation": "Log addresses and data for debugging.", "xp": 15},
        {"id": "cpp-43-1-25", "type": "typing", "question": "Why use sockets?", "correctAnswer": ["standard network programming interface", "networking API", "communication"], "explanation": "Sockets provide standard interface for network programming.", "xp": 5}
    ]
}

data['units'][42]['lessons'][0].update(lesson43_1)
print("✅ Unit 43, Lesson 1: Networking Basics - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 10 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 49, Lesson 7: Modern C++ Features Review")
print("  - Unit 27, Lesson 1: AVL Tree")
print("  - Unit 43, Lesson 1: Networking Basics")
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
