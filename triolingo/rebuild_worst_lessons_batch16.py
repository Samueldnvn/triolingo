#!/usr/bin/env python3
"""
Rebuild Batch 16 - Continue systematic rebuild
"""
import json
import os

print("🚀 BATCH 16: Continuing systematic rebuild")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 41, Lesson 2: Thread Synchronization
lesson41_2 = {
    "id": "cpp-U41-L2",
    "title": "Thread Synchronization",
    "unitTitle": "41. Multithreading",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Thread Synchronization

Coordinating access to shared resources among threads.

## Why Synchronize?

- **Race conditions**: Multiple threads access shared data
- **Data corruption**: Unpredictable results
- **Deadlocks**: Threads wait forever
- **Performance**: Minimize contention

## Synchronization Primitives

### Mutex (std::mutex)
- Exclusive lock on resource
- One thread at a time
- Use for critical sections

```cpp
std::mutex mtx;
mtx.lock();
// Critical section
mtx.unlock();
```

### Lock Guard (std::lock_guard)
- RAII wrapper for mutex
- Automatic unlock on scope exit
- Exception safe

```cpp
std::lock_guard<std::mutex> lock(mtx);
// Critical section
```

### Unique Lock (std::unique_lock)
- More flexible than lock_guard
- Manual lock/unlock
- Moveable

```cpp
std::unique_lock<std::mutex> lock(mtx);
// Critical section
lock.unlock();
```

### Condition Variable (std::condition_variable)
- Wait for condition
- Notify waiting threads
- Efficient waiting

```cpp
std::condition_variable cv;
std::mutex mtx;
cv.wait(lock, predicate);
cv.notify_one();
```

## Best Practices

1. Minimize lock scope
2. Avoid nested locks (deadlock risk)
3. Use lock_guard for RAII
4. Keep critical sections small
5. Avoid holding locks during I/O
6. Consider lock-free algorithms when possible

## Common Issues

- **Deadlock**: Circular wait for locks
- **Livelock**: Threads keep retrying
- **Priority inversion**: Low priority holds lock
- **Starvation**: Thread never gets lock
""",
    "questions": [
        {"id": "cpp-41-2-1", "type": "typing", "question": "Why synchronize threads?", "correctAnswer": ["prevent race conditions and data corruption"], "explanation": "Synchronization prevents concurrent access issues.", "xp": 5},
        {"id": "cpp-41-2-2", "type": "multiple", "question": "What is mutex?", "options": ["Exclusive lock for mutual exclusion", "Thread scheduler", "Memory barrier", "Spin lock"], "correctAnswer": [0], "explanation": "Mutex provides exclusive lock for critical sections.", "xp": 5},
        {"id": "cpp-41-2-3", "type": "code", "question": "Create std::mutex.", "correctAnswer": ["std::mutex mtx"], "explanation": "std::mutex creates mutex object.", "xp": 15},
        {"id": "cpp-41-2-4", "type": "code", "question": "Lock mutex.", "correctAnswer": ["mtx.lock()"], "explanation": "lock() acquires mutex lock.", "xp": 15},
        {"id": "cpp-41-2-5", "type": "code", "question": "Unlock mutex.", "correctAnswer": ["mtx.unlock()"], "explanation": "unlock() releases mutex lock.", "xp": 15},
        {"id": "cpp-41-2-6", "type": "code", "question": "Use lock_guard.", "correctAnswer": ["std::lock_guard<std::mutex> lock(mtx)"], "explanation": "lock_guard provides RAII lock management.", "xp": 15},
        {"id": "cpp-41-2-7", "type": "code", "question": "Use unique_lock.", "correctAnswer": ["std::unique_lock<std::mutex> lock(mtx)"], "explanation": "unique_lock provides flexible lock management.", "xp": 15},
        {"id": "cpp-41-2-8", "type": "typing", "question": "What is RAII?", "correctAnswer": ["resource acquisition is initialization"], "explanation": "RAII manages resources through object lifetime.", "xp": 5},
        {"id": "cpp-41-2-9", "type": "code", "question": "Create condition variable.", "correctAnswer": ["std::condition_variable cv"], "explanation": "condition_variable enables thread waiting.", "xp": 15},
        {"id": "cpp-41-2-10", "type": "code", "question": "Wait on condition variable.", "correctAnswer": ["cv.wait(lock, predicate)"], "explanation": "wait() blocks until condition is true.", "xp": 15},
        {"id": "cpp-41-2-11", "type": "code", "question": "Notify one waiting thread.", "correctAnswer": ["cv.notify_one()"], "explanation": "notify_one() wakes one waiting thread.", "xp": 15},
        {"id": "cpp-41-2-12", "type": "code", "question": "Notify all waiting threads.", "correctAnswer": ["cv.notify_all()"], "explanation": "notify_all() wakes all waiting threads.", "xp": 15},
        {"id": "cpp-41-2-13", "type": "typing", "question": "What is deadlock?", "correctAnswer": ["threads wait forever for locks"], "explanation": "Deadlock occurs when threads wait circularly for locks.", "xp": 5},
        {"id": "cpp-41-2-14", "type": "typing", "question": "What is race condition?", "correctAnswer": ["unpredictable results from concurrent access"], "explanation": "Race condition causes unpredictable behavior.", "xp": 5},
        {"id": "cpp-41-2-15", "type": "code", "question": "Minimize lock scope.", "correctAnswer": ["keep critical sections small", "minimize scope", "small critical section"], "explanation": "Keep critical sections as small as possible.", "xp": 15},
        {"id": "cpp-41-2-16", "type": "typing", "question": "Why avoid nested locks?", "correctAnswer": ["deadlock risk", "nested locks", "circular wait"], "explanation": "Nested locks increase deadlock risk.", "xp": 5},
        {"id": "cpp-41-2-17", "type": "code", "question": "Try to lock mutex.", "correctAnswer": ["mtx.try_lock()"], "explanation": "try_lock() attempts to lock without blocking.", "xp": 15},
        {"id": "cpp-41-2-18", "type": "typing", "question": "What is livelock?", "correctAnswer": ["threads keep retrying without progress"], "explanation": "Livelock occurs when threads constantly retry.", "xp": 5},
        {"id": "cpp-41-2-19", "type": "typing", "question": "What is starvation?", "correctAnswer": ["thread never gets lock"], "explanation": "Starvation occurs when thread cannot acquire lock.", "xp": 5},
        {"id": "cpp-41-2-20", "type": "code", "question": "Use recursive mutex.", "correctAnswer": ["std::recursive_mutex"], "explanation": "recursive_mutex allows multiple locks by same thread.", "xp": 15},
        {"id": "cpp-41-2-21", "type": "code", "question": "Shared mutex for reading.", "correctAnswer": ["std::shared_mutex", "shared lock", "read-write lock"], "explanation": "shared_mutex allows multiple readers.", "xp": 15},
        {"id": "cpp-41-2-22", "type": "code", "question": "Lock shared mutex for reading.", "correctAnswer": ["std::shared_lock<std::shared_mutex> lock(mtx)"], "explanation": "shared_lock acquires shared read lock.", "xp": 15},
        {"id": "cpp-41-2-23", "type": "code", "question": "Lock shared mutex for writing.", "correctAnswer": ["std::unique_lock<std::shared_mutex> lock(mtx)"], "explanation": "unique_lock acquires exclusive write lock.", "xp": 15},
        {"id": "cpp-41-2-24", "type": "typing", "question": "What is critical section?", "correctAnswer": ["code accessing shared resource"], "explanation": "Critical section accesses shared data.", "xp": 5},
        {"id": "cpp-41-2-25", "type": "code", "question": "Avoid holding locks during I/O.", "correctAnswer": ["release lock before I/O operations", "I/O", "release lock"], "explanation": "Avoid holding locks during slow I/O operations.", "xp": 15}
    ]
}

data['units'][40]['lessons'][1].update(lesson41_2)
print("✅ Unit 41, Lesson 2: Thread Synchronization - 25 detailed questions")

# Unit 43, Lesson 3: TCP Server
lesson43_3 = {
    "id": "cpp-U43-L3",
    "title": "TCP Server",
    "unitTitle": "43. Network Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# TCP Server

Implementing TCP server for handling client connections.

## Server Lifecycle

```cpp
1. socket()     - Create socket
2. bind()       - Bind to address and port
3. listen()     - Start listening
4. accept()     - Accept connections (loop)
5. recv()/send()- Communicate with client
6. close()      - Close connection
```

## Server Implementation

```cpp
int server_fd, client_fd;
struct sockaddr_in address;
int opt = 1;

// Create socket
server_fd = socket(AF_INET, SOCK_STREAM, 0);

// Set socket options
setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));

// Bind
address.sin_family = AF_INET;
address.sin_addr.s_addr = INADDR_ANY;
address.sin_port = htons(PORT);
bind(server_fd, (struct sockaddr *)&address, sizeof(address));

// Listen
listen(server_fd, 3);

// Accept connections
while(1) {
    client_fd = accept(server_fd, NULL, NULL);
    // Handle client
    close(client_fd);
}
```

## Multiple Clients

### Fork
```cpp
if (fork() == 0) {
    // Child handles client
    close(server_fd);
    // Handle client
    close(client_fd);
    exit(0);
}
close(client_fd);
```

### Select/Poll
```cpp
fd_set readfds;
FD_ZERO(&readfds);
FD_SET(server_fd, &readfds);
select(server_fd + 1, &readfds, NULL, NULL, NULL);
```

### Threads
```cpp
std::thread client_handler(handle_client, client_fd);
client_handler.detach();
```

## Best Practices

1. Handle signals gracefully
2. Set timeouts on socket operations
3. Validate client input
4. Limit concurrent connections
5. Close sockets properly
6. Use SO_REUSEADDR for quick restart
7. Implement backpressure
8. Log important events
""",
    "questions": [
        {"id": "cpp-43-3-1", "type": "typing", "question": "What is TCP server lifecycle?", "correctAnswer": ["socket bind listen accept send recv close"], "explanation": "TCP server follows socket creation lifecycle.", "xp": 5},
        {"id": "cpp-43-3-2", "type": "code", "question": "Create server socket.", "correctAnswer": ["socket(AF_INET, SOCK_STREAM, 0)"], "explanation": "Create socket with SOCK_STREAM for TCP.", "xp": 15},
        {"id": "cpp-43-3-3", "type": "code", "question": "Set SO_REUSEADDR.", "correctAnswer": ["setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt))"], "explanation": "Set SO_REUSEADDR to reuse address after restart.", "xp": 15},
        {"id": "cpp-43-3-4", "type": "code", "question": "Bind to all interfaces.", "correctAnswer": ["INADDR_ANY"], "explanation": "INADDR_ANY binds to all interfaces.", "xp": 15},
        {"id": "cpp-43-3-5", "type": "code", "question": "Convert port to network byte order.", "correctAnswer": ["htons(PORT)"], "explanation": "htons converts port to network byte order.", "xp": 15},
        {"id": "cpp-43-3-6", "type": "code", "question": "Start listening.", "correctAnswer": ["listen(server_fd, backlog)"], "explanation": "listen() starts listening for connections.", "xp": 15},
        {"id": "cpp-43-3-7", "type": "code", "question": "Accept connection.", "correctAnswer": ["accept(server_fd, NULL, NULL)"], "explanation": "accept() accepts incoming connection.", "xp": 15},
        {"id": "cpp-43-3-8", "type": "code", "question": "Handle multiple clients with fork.", "correctAnswer": ["fork() == 0 child handles client"], "explanation": "Fork creates child process for each client.", "xp": 15},
        {"id": "cpp-43-3-9", "type": "code", "question": "Handle multiple clients with threads.", "correctAnswer": ["std::thread detach"], "explanation": "Create detached thread for each client.", "xp": 15},
        {"id": "cpp-43-3-10", "type": "code", "question": "Use select for multiple sockets.", "correctAnswer": ["select(max_fd, &readfds, NULL, NULL, NULL)"], "explanation": "select() monitors multiple sockets.", "xp": 15},
        {"id": "cpp-43-3-11", "type": "code", "question": "Set socket timeout.", "correctAnswer": ["SO_RCVTIMEO or SO_SNDTIMEO"], "explanation": "Set timeout for socket operations.", "xp": 15},
        {"id": "cpp-43-3-12", "type": "typing", "question": "What is backlog parameter?", "correctAnswer": ["maximum pending connections"], "explanation": "backlog specifies maximum pending connections.", "xp": 5},
        {"id": "cpp-43-3-13", "type": "code", "question": "Get client address.", "correctAnswer": ["accept(sock, (sockaddr*)&client_addr, &addr_len)"], "explanation": "accept() fills client address structure.", "xp": 15},
        {"id": "cpp-43-3-14", "type": "code", "question": "Close client socket.", "correctAnswer": ["close(client_fd)"], "explanation": "close() closes client socket.", "xp": 15},
        {"id": "cpp-43-3-15", "type": "code", "question": "Close server socket.", "correctAnswer": ["close(server_fd)"], "explanation": "close() closes server socket.", "xp": 15},
        {"id": "cpp-43-3-16", "type": "typing", "question": "Why use SO_REUSEADDR?", "correctAnswer": ["quick server restart"], "explanation": "SO_REUSEADDR allows immediate address reuse.", "xp": 5},
        {"id": "cpp-43-3-17", "type": "typing", "question": "What is backpressure?", "correctAnswer": ["slow down when client cannot keep up"], "explanation": "Backpressure slows server when client lags.", "xp": 5},
        {"id": "cpp-43-3-18", "type": "code", "question": "Handle SIGINT gracefully.", "correctAnswer": ["signal handler close sockets"], "explanation": "Handle signals to close sockets properly.", "xp": 15},
        {"id": "cpp-43-3-19", "type": "code", "question": "Limit concurrent connections.", "correctAnswer": ["track active connections and limit"], "explanation": "Limit connections to prevent overload.", "xp": 15},
        {"id": "cpp-43-3-20", "type": "typing", "question": "Why validate client input?", "correctAnswer": ["prevent injection attacks"], "explanation": "Validate input to prevent security issues.", "xp": 5},
        {"id": "cpp-43-3-21", "type": "code", "question": "Log server events.", "correctAnswer": ["log connections errors important events"], "explanation": "Log important events for debugging.", "xp": 15},
        {"id": "cpp-43-3-22", "type": "code", "question": "Handle partial recv.", "correctAnswer": ["loop until all data received"], "explanation": "Handle partial receives with loop.", "xp": 15},
        {"id": "cpp-43-3-23", "type": "code", "question": "Handle partial send.", "correctAnswer": ["loop until all data sent"], "explanation": "Handle partial sends with loop.", "xp": 15},
        {"id": "cpp-43-3-24", "type": "typing", "question": "What is INADDR_ANY?", "correctAnswer": ["bind to all network interfaces"], "explanation": "INADDR_ANY binds to all interfaces.", "xp": 5},
        {"id": "cpp-43-3-25", "type": "code", "question": "Convert IP to string.", "correctAnswer": ["inet_ntoa"], "explanation": "inet_ntoa converts IP to string.", "xp": 15}
    ]
}

data['units'][42]['lessons'][2].update(lesson43_3)
print("✅ Unit 43, Lesson 3: TCP Server - 25 detailed questions")

# Unit 30, Lesson 1: Trie Basics
lesson30_1 = {
    "id": "cpp-U30-L1",
    "title": "Trie Basics",
    "unitTitle": "30. Trie Data Structure",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Trie (Prefix Tree)

Tree-like data structure for storing strings.

## Core Concept

Trie stores strings character by character, enabling efficient prefix-based operations.

## Structure

- **Root**: Empty node, starting point
- **Edges**: Characters (a-z)
- **Nodes**: Represent characters
- **End marker**: Indicates complete word

## Operations

- **Insert**: O(L) where L is string length
- **Search**: O(L) where L is string length
- **Delete**: O(L) where L is string length
- **Prefix search**: O(L) + collect results

## Trie Node

```cpp
struct TrieNode {
    TrieNode* children[26];
    bool isEndOfWord;
};
```

## Advantages

- **Fast search**: O(L) time complexity
- **Prefix search**: Efficient prefix queries
- **Space efficient**: Common prefixes shared
- **Autocomplete**: Perfect for suggestions
- **Spell check**: Quick word validation

## Uses

- **Autocomplete**: Search suggestions
- **Spell checking**: Dictionary lookups
- **IP routing**: Longest prefix match
- **Text prediction**: Word suggestions
- **Dictionary**: Word storage and lookup

## Best Practices

1. Use arrays for small alphabets
2. Use maps for large character sets
3. Mark end of word clearly
4. Handle case sensitivity
5. Consider memory overhead
6. Delete nodes carefully

## Common Issues

- **Memory overhead**: Many nodes for sparse data
- **Cache performance**: Poor for scattered data
- **Implementation complexity**: More than hash table
""",
    "questions": [
        {"id": "cpp-30-1-1", "type": "typing", "question": "What is trie?", "correctAnswer": ["tree-like structure for storing strings"], "explanation": "Trie stores strings character by character.", "xp": 5},
        {"id": "cpp-30-1-2", "type": "multiple", "question": "What is main advantage of trie?", "options": ["Efficient prefix search", "Faster than hash table", "Less memory", "Simpler implementation"], "correctAnswer": [0], "explanation": "Trie enables efficient prefix-based operations.", "xp": 5},
        {"id": "cpp-30-1-3", "type": "typing", "question": "What is time complexity of trie insert?", "correctAnswer": ["O(L) where L is string length"], "explanation": "Trie insert is O(L) where L is string length.", "xp": 5},
        {"id": "cpp-30-1-4", "type": "code", "question": "Create trie node.", "correctAnswer": ["struct TrieNode { TrieNode* children[26]; bool isEndOfWord; };"], "explanation": "Trie node has children array and end marker.", "xp": 15},
        {"id": "cpp-30-1-5", "type": "code", "question": "Initialize trie node.", "correctAnswer": ["initialize children to NULL and isEndOfWord to false"], "explanation": "Initialize all children to NULL and end to false.", "xp": 15},
        {"id": "cpp-30-1-6", "type": "code", "question": "Insert word into trie.", "correctAnswer": ["iterate characters create nodes as needed"], "explanation": "Traverse trie, create nodes as needed.", "xp": 15},
        {"id": "cpp-30-1-7", "type": "code", "question": "Search word in trie.", "correctAnswer": ["traverse trie check if path exists and isEndOfWord"], "explanation": "Traverse trie and verify end marker.", "xp": 15},
        {"id": "cpp-30-1-8", "type": "code", "question": "Check prefix in trie.", "correctAnswer": ["traverse trie check if path exists"], "explanation": "Traverse trie and verify prefix path.", "xp": 15},
        {"id": "cpp-30-1-9", "type": "code", "question": "Mark end of word.", "correctAnswer": ["set isEndOfWord to true"], "explanation": "Set isEndOfWord to mark complete word.", "xp": 15},
        {"id": "cpp-30-1-10", "type": "code", "question": "Delete word from trie.", "correctAnswer": ["traverse trie remove unused nodes"], "explanation": "Remove nodes that are not part of other words.", "xp": 15},
        {"id": "cpp-30-1-11", "type": "typing", "question": "What is prefix search?", "correctAnswer": ["find all words with given prefix"], "explanation": "Prefix search finds all words starting with prefix.", "xp": 5},
        {"id": "cpp-30-1-12", "type": "typing", "question": "What is autocomplete?", "correctAnswer": ["suggest completions based on prefix"], "explanation": "Autocomplete suggests word completions.", "xp": 5},
        {"id": "cpp-30-1-13", "type": "typing", "question": "Why use trie for dictionary?", "correctAnswer": ["efficient prefix-based lookups"], "explanation": "Trie enables efficient prefix queries for dictionary.", "xp": 5},
        {"id": "cpp-30-1-14", "type": "typing", "question": "What is longest prefix matching?", "correctAnswer": ["find longest matching prefix"], "explanation": "Used in IP routing for longest prefix match.", "xp": 5},
        {"id": "cpp-30-1-15", "type": "code", "question": "Count words with prefix.", "correctAnswer": ["count all words under prefix node"], "explanation": "Traverse subtree and count end markers.", "xp": 15},
        {"id": "cpp-30-1-16", "type": "code", "question": "Use map for children.", "correctAnswer": ["std::map<char, TrieNode*> children"], "explanation": "Use map for large character sets.", "xp": 15},
        {"id": "cpp-30-1-17", "type": "typing", "question": "What is main disadvantage of trie?", "correctAnswer": ["memory overhead"], "explanation": "Trie uses more memory than hash table.", "xp": 5},
        {"id": "cpp-30-1-18", "type": "code", "question": "Compress trie.", "correctAnswer": ["merge nodes with single child"], "explanation": "Compressed trie merges nodes with single child.", "xp": 15},
        {"id": "cpp-30-1-19", "type": "code", "question": "Iterate trie words.", "correctAnswer": ["DFS traversal collect words"], "explanation": "Depth-first traversal to collect words.", "xp": 15},
        {"id": "cpp-30-1-20", "type": "typing", "question": "What is cache performance of trie?", "correctAnswer": ["poor for scattered data"], "explanation": "Trie has poor cache performance due to scattered access.", "xp": 5},
        {"id": "cpp-30-1-21", "type": "code", "question": "Handle case sensitivity.", "correctAnswer": ["convert to lowercase or uppercase"], "explanation": "Normalize case for case-insensitive trie.", "xp": 15},
        {"id": "cpp-30-1-22", "type": "code", "question": "Check if trie is empty.", "correctAnswer": ["check if root has no children"], "explanation": "Trie is empty if root has no children.", "xp": 15},
        {"id": "cpp-30-1-23", "type": "code", "question": "Find all words in trie.", "correctAnswer": ["DFS from root collect all words"], "explanation": "DFS traversal from root to collect all words.", "xp": 15},
        {"id": "cpp-30-1-24", "type": "typing", "question": "What is suffix tree?", "correctAnswer": ["trie of all suffixes"], "explanation": "Suffix tree stores all suffixes of a string.", "xp": 5},
        {"id": "cpp-30-1-25", "type": "typing", "question": "When to use trie over hash table?", "correctAnswer": ["need prefix-based operations"], "explanation": "Use trie when prefix operations are needed.", "xp": 5}
    ]
}

data['units'][29]['lessons'][0].update(lesson30_1)
print("✅ Unit 30, Lesson 1: Trie Basics - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 16 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 41, Lesson 2: Thread Synchronization")
print("  - Unit 43, Lesson 3: TCP Server")
print("  - Unit 30, Lesson 1: Trie Basics")
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
