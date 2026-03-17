#!/usr/bin/env python3
"""
Rebuild Batch 11 - Continue systematic rebuild
"""
import json
import os

print("🚀 BATCH 11: Continuing systematic rebuild")
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
# Unit 40, Lesson 4: Socket Options
lesson40_4 = {
    "id": "cpp-U40-L4",
    "title": "Socket Options",
    "unitTitle": "40. Network Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Socket Options

Configure socket behavior and parameters.

## Core Concept

Socket options control various aspects of socket behavior like timeouts, buffer sizes, and reuse settings.

## Common Options

- **SO_REUSEADDR**: Allow bind to address in TIME_WAIT
- **SO_REUSEPORT**: Allow multiple binds to same port
- **SO_RCVBUF**: Receive buffer size
- **SO_SNDBUF**: Send buffer size
- **SO_RCVTIMEO**: Receive timeout
- **SO_SNDTIMEO**: Send timeout
- **SO_KEEPALIVE**: Enable keepalive probes
- **TCP_NODELAY**: Disable Nagle's algorithm

## Setting Options

```cpp
int opt = 1;
setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
```

## Getting Options

```cpp
int opt;
socklen_t len = sizeof(opt);
getsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &opt, &len);
```

## Levels

- **SOL_SOCKET**: Socket-level options
- **IPPROTO_TCP**: TCP-specific options
- **IPPROTO_IP**: IP-specific options
- **IPPROTO_IPV6**: IPv6-specific options

## Best Practices

1. Set SO_REUSEADDR for servers
2. Configure appropriate buffer sizes
3. Use timeouts to prevent hangs
4. Enable keepalive for long connections
5. Test option behavior on different platforms
""",
    "questions": [
        {"id": "cpp-40-4-1", "type": "typing", "question": "What are socket options?", "correctAnswer": ["configure socket behavior parameters", "socket settings", "options"], "explanation": "Socket options control various socket behavior parameters.", "xp": 5},
        {"id": "cpp-40-4-2", "type": "typing", "question": "What does SO_REUSEADDR do?", "correctAnswer": ["allow bind to address in TIME_WAIT", "reuse address", "bind immediately"], "explanation": "SO_REUSEADDR allows binding to address in TIME_WAIT state.", "xp": 5},
        {"id": "cpp-40-4-3", "type": "multiple", "question": "What function sets socket option?", "options": ["setsockopt", "getsockopt", "socket", "bind"], "correctAnswer": [0], "explanation": "setsockopt() sets socket option value.", "xp": 5},
        {"id": "cpp-40-4-4", "type": "code", "question": "Set SO_REUSEADDR option.", "correctAnswer": ["setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt))", "reuse address", "socket option"], "explanation": "Use setsockopt with SO_REUSEADDR to enable address reuse.", "xp": 15},
        {"id": "cpp-40-4-5", "type": "code", "question": "Set receive buffer size.", "correctAnswer": ["setsockopt(sock, SOL_SOCKET, SO_RCVBUF, &size, sizeof(size))", "receive buffer", "buffer size"], "explanation": "Set SO_RCVBUF to control receive buffer size.", "xp": 15},
        {"id": "cpp-40-4-6", "type": "code", "question": "Set send buffer size.", "correctAnswer": ["setsockopt(sock, SOL_SOCKET, SO_SNDBUF, &size, sizeof(size))", "send buffer", "buffer size"], "explanation": "Set SO_SNDBUF to control send buffer size.", "xp": 15},
        {"id": "cpp-40-4-7", "type": "code", "question": "Set receive timeout.", "correctAnswer": ["setsockopt(sock, SOL_SOCKET, SO_RCVTIMEO, &tv, sizeof(tv))", "receive timeout", "timeout"], "explanation": "Set SO_RCVTIMEO with timeval structure.", "xp": 15},
        {"id": "cpp-40-4-8", "type": "code", "question": "Set send timeout.", "correctAnswer": ["setsockopt(sock, SOL_SOCKET, SO_SNDTIMEO, &tv, sizeof(tv))", "send timeout", "timeout"], "explanation": "Set SO_SNDTIMEO with timeval structure.", "xp": 15},
        {"id": "cpp-40-4-9", "type": "code", "question": "Enable TCP_NODELAY.", "correctAnswer": ["setsockopt(sock, IPPROTO_TCP, TCP_NODELAY, &opt, sizeof(opt))", "disable Nagle", "no delay"], "explanation": "TCP_NODELAY disables Nagle's algorithm for low latency.", "xp": 15},
        {"id": "cpp-40-4-10", "type": "code", "question": "Enable keepalive.", "correctAnswer": ["setsockopt(sock, SOL_SOCKET, SO_KEEPALIVE, &opt, sizeof(opt))", "keepalive", "connection health"], "explanation": "SO_KEEPALIVE sends probes to detect dead connections.", "xp": 15},
        {"id": "cpp-40-4-11", "type": "code", "question": "Get socket option value.", "correctAnswer": ["getsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &opt, &len)", "get option", "read setting"], "explanation": "getsockopt() retrieves current option value.", "xp": 15},
        {"id": "cpp-40-4-12", "type": "typing", "question": "What is SOL_SOCKET?", "correctAnswer": ["socket-level options", "socket level", "option level"], "explanation": "SOL_SOCKET is level for general socket options.", "xp": 5},
        {"id": "cpp-40-4-13", "type": "code", "question": "Set SO_LINGER option.", "correctAnswer": ["linger structure", "close behavior", "linger time"], "explanation": "SO_LINGER controls close() behavior with unsent data.", "xp": 15},
        {"id": "cpp-40-4-14", "type": "code", "question": "Set SO_BROADCAST option.", "correctAnswer": ["enable broadcast", "broadcast option", "UDP broadcast"], "explanation": "SO_BROADCAST allows sending broadcast packets.", "xp": 15},
        {"id": "cpp-40-4-15", "type": "code", "question": "Set IP_MULTICAST_TTL.", "correctAnswer": ["setsockopt(sock, IPPROTO_IP, IP_MULTICAST_TTL, &ttl, sizeof(ttl))", "multicast TTL", "TTL"], "explanation": "IP_MULTICAST_TTL sets multicast time-to-live.", "xp": 15},
        {"id": "cpp-40-4-16", "type": "code", "question": "Set SO_ERROR option.", "correctAnswer": ["retrieve pending socket error", "socket error", "error status"], "explanation": "SO_ERROR retrieves and clears pending error.", "xp": 15},
        {"id": "cpp-40-4-17", "type": "typing", "question": "What is Nagle's algorithm?", "correctAnswer": ["buffers small packets for efficiency", "TCP optimization", "delayed transmission"], "explanation": "Nagle's algorithm buffers small packets to send together.", "xp": 5},
        {"id": "cpp-40-4-18", "type": "code", "question": "Configure keepalive parameters.", "correctAnswer": ["TCP_KEEPIDLE, TCP_KEEPINTVL, TCP_KEEPCNT", "keepalive settings", "probe intervals"], "explanation": "Configure keepalive idle time, interval, and count.", "xp": 15},
        {"id": "cpp-40-4-19", "type": "code", "question": "Set SO_RCVLOWAT option.", "correctAnswer": ["minimum receive bytes", "low water mark", "receive threshold"], "explanation": "SO_RCVLOWAT sets minimum bytes for readable notification.", "xp": 15},
        {"id": "cpp-40-4-20", "type": "code", "question": "Set SO_SNDLOWAT option.", "correctAnswer": ["minimum send bytes", "low water mark", "send threshold"], "explanation": "SO_SNDLOWAT sets minimum bytes for writable notification.", "xp": 15},
        {"id": "cpp-40-4-21", "type": "code", "question": "Debug socket options.", "correctAnswer": ["print option values", "debug", "verify settings"], "explanation": "Print option values to verify configuration.", "xp": 15},
        {"id": "cpp-40-4-22", "type": "code", "question": "Platform-specific socket options.", "correctAnswer": ["check platform documentation", "platform-specific", "non-standard"], "explanation": "Some options are platform-specific, check documentation.", "xp": 15},
        {"id": "cpp-40-4-23", "type": "code", "question": "Reset socket to default options.", "correctAnswer": ["create new socket", "reset options", "defaults"], "explanation": "Create new socket to get default options.", "xp": 15},
        {"id": "cpp-40-4-24", "type": "typing", "question": "Why use socket options?", "correctAnswer": ["customize socket behavior", "configure", "optimization"], "explanation": "Socket options allow customizing behavior for specific needs.", "xp": 5},
        {"id": "cpp-40-4-25", "type": "code", "question": "Handle option errors.", "correctAnswer": ["check return value and errno", "error handling", "check errno"], "explanation": "Check return value and errno for option errors.", "xp": 15}
    ]
}

data['units'][39]['lessons'][3].update(lesson40_4)
print("✅ Unit 40, Lesson 4: Socket Options - 25 detailed questions")

# Unit 27, Lesson 5: Splay Tree
lesson27_5 = {
    "id": "cpp-U27-L5",
    "title": "Splay Tree",
    "unitTitle": "27. Advanced Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Splay Tree

Self-adjusting binary search tree with splaying operations.

## Core Concept

Splay tree moves recently accessed elements to root via splaying, optimizing for access patterns.

## Splaying Operations

- **Zig**: Single rotation (root is parent)
- **Zig-zig**: Two rotations in same direction
- **Zig-zag**: Two rotations in opposite directions

## Access Pattern Optimization

- **Temporal locality**: Recently accessed items near root
- **No explicit balancing**: Self-adjusting on access
- **Amortized O(log n)**: Individual operations may be O(n)

## Operations

- **Search**: O(log n) amortized
- **Insert**: O(log n) amortized
- **Delete**: O(log n) amortized
- **Splay**: Move element to root

## Advantages

- **Simple**: No balance factors or colors
- **Cache-friendly**: Frequent items at root
- **Adaptive**: Optimizes for access patterns
- **No extra memory**: No balance info stored

## Best Uses

- **Non-uniform access**: Some items accessed frequently
- **Cache simulation**: Frequently used items
- **Local searches**: Searches tend to cluster
- **Memory constrained**: No extra balance storage

## Best Practices

1. Use for non-uniform access patterns
2. Consider amortized vs worst-case
3. Implement carefully to avoid degeneration
4. Test with various access patterns
""",
    "questions": [
        {"id": "cpp-27-5-1", "type": "typing", "question": "What is a splay tree?", "correctAnswer": ["self-adjusting binary search tree", "splay tree", "self-balancing"], "explanation": "Splay tree is self-adjusting BST that moves accessed items to root.", "xp": 5},
        {"id": "cpp-27-5-2", "type": "typing", "question": "What is splaying?", "correctAnswer": ["move element to root via rotations", "splay operation", "move to root"], "explanation": "Splaying moves accessed element to root using rotations.", "xp": 5},
        {"id": "cpp-27-5-3", "type": "multiple", "question": "What is zig operation?", "options": ["Single rotation", "Double rotation", "Triple rotation", "No rotation"], "correctAnswer": [0], "explanation": "Zig is single rotation when node is child of root.", "xp": 5},
        {"id": "cpp-27-5-4", "type": "code", "question": "Perform zig rotation.", "correctAnswer": ["single rotation on root", "zig", "rotate"], "explanation": "Zig rotates node to root position.", "xp": 15},
        {"id": "cpp-27-5-5", "type": "code", "question": "Perform zig-zig rotation.", "correctAnswer": ["two rotations in same direction", "zig-zig", "double rotation"], "explanation": "Zig-zig performs two rotations in same direction.", "xp": 15},
        {"id": "cpp-27-5-6", "type": "code", "question": "Perform zig-zag rotation.", "correctAnswer": ["two rotations in opposite directions", "zig-zag", "double rotation"], "explanation": "Zig-zag performs two rotations in opposite directions.", "xp": 15},
        {"id": "cpp-27-5-7", "type": "code", "question": "Search in splay tree.", "correctAnswer": ["BST search then splay", "search and splay", "find"], "explanation": "Search as in BST, then splay found node or last visited.", "xp": 15},
        {"id": "cpp-27-5-8", "type": "code", "question": "Insert into splay tree.", "correctAnswer": ["BST insert then splay", "insert and splay", "add"], "explanation": "Insert as in BST, then splay the new node.", "xp": 15},
        {"id": "cpp-27-5-9", "type": "code", "question": "Delete from splay tree.", "correctAnswer": ["splay node then remove and merge", "delete and splay", "remove"], "explanation": "Splay node, remove it, then merge subtrees.", "xp": 15},
        {"id": "cpp-27-5-10", "type": "code", "question": "Find minimum in splay tree.", "correctAnswer": ["leftmost then splay", "find min", "minimum"], "explanation": "Find leftmost node, then splay it to root.", "xp": 15},
        {"id": "cpp-27-5-11", "type": "code", "question": "Find maximum in splay tree.", "correctAnswer": ["rightmost then splay", "find max", "maximum"], "explanation": "Find rightmost node, then splay it to root.", "xp": 15},
        {"id": "cpp-27-5-12", "type": "typing", "question": "What is amortized complexity of splay operations?", "correctAnswer": ["O(log n)", "logarithmic", "amortized"], "explanation": "Splay tree operations are O(log n) amortized.", "xp": 5},
        {"id": "cpp-27-5-13", "type": "code", "question": "Splay node to root.", "correctAnswer": ["zig, zig-zig, or zig-zag rotations", "splay operation", "move to root"], "explanation": "Apply appropriate rotation pattern to splay node.", "xp": 15},
        {"id": "cpp-27-5-14", "type": "code", "question": "Merge two splay trees.", "correctAnswer": ["splay max of left, set right child", "merge", "combine"], "explanation": "Splay max of left tree, set its right to right tree.", "xp": 15},
        {"id": "cpp-27-5-15", "type": "code", "question": "Split splay tree.", "correctAnswer": ["split at key into two trees", "split", "divide"], "explanation": "Splay key, split into left and right subtrees.", "xp": 15},
        {"id": "cpp-27-5-16", "type": "typing", "question": "What is temporal locality in splay trees?", "correctAnswer": ["recently accessed items near root", "locality", "cache friendly"], "explanation": "Splay tree keeps recently accessed items near root.", "xp": 5},
        {"id": "cpp-27-5-17", "type": "code", "question": "Compare splay vs AVL tree.", "correctAnswer": ["splay self-adjusting, AVL balanced", "comparison", "trade-offs"], "explanation": "Splay optimizes for access pattern, AVL maintains balance.", "xp": 15},
        {"id": "cpp-27-5-18", "type": "code", "question": "Splay tree for cache simulation.", "correctAnswer": ["frequent items at root", "cache", "frequently used"], "explanation": "Splay tree keeps frequently accessed items at root.", "xp": 15},
        {"id": "cpp-27-5-19", "type": "code", "question": "Debug splay tree structure.", "correctAnswer": ["print tree and verify splay", "debug", "verify"], "explanation": "Print tree structure and verify splay operation.", "xp": 15},
        {"id": "cpp-27-5-20", "type": "code", "question": "Iterate splay tree in-order.", "correctAnswer": ["left-root-right traversal", "in-order", "traverse"], "explanation": "In-order traversal visits nodes in sorted order.", "xp": 15},
        {"id": "cpp-27-5-21", "type": "code", "question": "Range search in splay tree.", "correctAnswer": ["in-order with range check", "range query", "search range"], "explanation": "Traverse in-order, output nodes within range.", "xp": 15},
        {"id": "cpp-27-5-22", "type": "code", "question": "Test splay tree with access patterns.", "correctAnswer": ["repeated access to same keys", "access pattern", "test"], "explanation": "Test with non-uniform access patterns to verify optimization.", "xp": 15},
        {"id": "cpp-27-5-23", "type": "code", "question": "Splay tree for frequently accessed data.", "correctAnswer": ["recently used items fast", "frequent access", "hot data"], "explanation": "Splay tree optimizes for frequently accessed items.", "xp": 15},
        {"id": "cpp-27-5-24", "type": "typing", "question": "When to use splay tree?", "correctAnswer": ["non-uniform access patterns", "frequent access", "cache"], "explanation": "Use splay tree when access patterns are non-uniform.", "xp": 5},
        {"id": "cpp-27-5-25", "type": "code", "question": "Worst case in splay tree.", "correctAnswer": ["O(n) for single operation", "worst case", "degenerate"], "explanation": "Single operation can be O(n), but amortized is O(log n).", "xp": 15}
    ]
}

data['units'][26]['lessons'][4].update(lesson27_5)
print("✅ Unit 27, Lesson 5: Splay Tree - 25 detailed questions")

# Unit 47, Lesson 6: IDE & Editors
lesson47_6 = {
    "id": "cpp-U47-L6",
    "title": "IDE & Editors",
    "unitTitle": "47. Development Environment Setup",
    "xp": 85,
    "type": "lesson",
    "difficulty": "beginner",
    "lessonText": """# IDE & Editors for C++ Development

Choosing and configuring development tools for C++ programming.

## Popular IDEs

- **Visual Studio**: Full-featured, Windows-focused
- **VS Code**: Lightweight, cross-platform, extensible
- **CLion**: JetBrains IDE, powerful refactoring
- **Code::Blocks**: Simple, open-source
- **Qt Creator**: Excellent for Qt development

## Popular Editors

- **Vim/Neovim**: Modal, keyboard-driven, highly customizable
- **Emacs**: Extensible, powerful, steep learning curve
- **Sublime Text**: Fast, beautiful, plugin ecosystem

## Key Features

- **Code completion**: IntelliSense, autocomplete
- **Syntax highlighting**: Color-coded syntax
- **Debugging**: Integrated debugger
- **Build system**: Compile and run
- **Version control**: Git integration
- **Refactoring**: Rename, extract, inline

## Extensions & Plugins

- **C/C++**: Microsoft C/C++ extension for VS Code
- **Clang-Format**: Code formatting
- **CMake**: Build system support
- **GitLens**: Git supercharged
- **Better Comments**: Enhanced comments

## Best Practices

1. Choose tool matching your workflow
2. Configure for your coding style
3. Learn keyboard shortcuts
4. Use integrated tools
5. Customize for productivity

## Setup Tips

- Install compiler (GCC, Clang, MSVC)
- Configure build system (CMake, Make)
- Set up debugger (GDB, LLDB)
- Enable linters and formatters
- Configure version control
""",
    "questions": [
        {"id": "cpp-47-6-1", "type": "typing", "question": "What is an IDE?", "correctAnswer": ["Integrated Development Environment", "IDE", "development tool"], "explanation": "IDE is software for writing, compiling, and debugging code.", "xp": 5},
        {"id": "cpp-47-6-2", "type": "multiple", "question": "Which is popular cross-platform IDE?", "options": ["VS Code", "Visual Studio only", "CLion only", "Code::Blocks"], "correctAnswer": [0], "explanation": "VS Code is popular cross-platform code editor.", "xp": 5},
        {"id": "cpp-47-6-3", "type": "typing", "question": "What does VS Code stand for?", "correctAnswer": ["Visual Studio Code", "VS Code", "editor"], "explanation": "VS Code is Visual Studio Code by Microsoft.", "xp": 5},
        {"id": "cpp-47-6-4", "type": "code", "question": "Install C/C++ extension in VS Code.", "correctAnswer": ["install from marketplace", "extension install", "C/C++"], "explanation": "Install Microsoft C/C++ extension from VS Code marketplace.", "xp": 15},
        {"id": "cpp-47-6-5", "type": "code", "question": "Configure compiler in VS Code.", "correctAnswer": ["settings.json compiler path", "configure compiler", "settings"], "explanation": "Set compiler path in settings.json or c_cpp_properties.json.", "xp": 15},
        {"id": "cpp-47-6-6", "type": "code", "question": "Enable IntelliSense in VS Code.", "correctAnswer": ["C/C++ extension", "IntelliSense", "autocomplete"], "explanation": "C/C++ extension provides IntelliSense for code completion.", "xp": 15},
        {"id": "cpp-47-6-7", "type": "typing", "question": "What is code completion?", "correctAnswer": ["suggests code as you type", "autocomplete", "IntelliSense"], "explanation": "Code completion suggests code based on context as you type.", "xp": 5},
        {"id": "cpp-47-6-8", "type": "code", "question": "Use debugger in IDE.", "correctAnswer": ["set breakpoints and step through code", "debug", "breakpoint"], "explanation": "Set breakpoints and step through code to debug.", "xp": 15},
        {"id": "cpp-47-6-9", "type": "code", "question": "Format code with Clang-Format.", "correctAnswer": ["clang-format", "format code", "style"], "explanation": "Use clang-format to format C++ code consistently.", "xp": 15},
        {"id": "cpp-47-6-10", "type": "code", question": "Use Git integration in IDE.", "correctAnswer": ["commit, push, pull from IDE", "Git", "version control"], "explanation": "Use IDE's Git integration for version control operations.", "xp": 15},
        {"id": "cpp-47-6-11", "type": "typing", "question": "What is syntax highlighting?", "correctAnswer": ["color-coded code display", "syntax highlighting", "colors"], "explanation": "Syntax highlighting colors code elements for readability.", "xp": 5},
        {"id": "cpp-47-6-12", "type": "code", "question": "Configure CMake in IDE.", "correctAnswer": ["CMake Tools extension", "CMake", "build system"], "explanation": "Use CMake Tools extension for CMake support in IDE.", "xp": 15},
        {"id": "cpp-47-6-13", "type": "code", "question": "Use terminal in VS Code.", "correctAnswer": ["open integrated terminal", "terminal", "command line"], "explanation": "Open integrated terminal in VS Code for command-line operations.", "xp": 15},
        {"id": "cpp-47-6-14", "type": "code", "question": "Install Visual Studio Community.", "correctAnswer": ["download from Microsoft", "Visual Studio", "IDE"], "explanation": "Download Visual Studio Community from Microsoft website.", "xp": 15},
        {"id": "cpp-47-6-15", "type": "code", "question": "Use snippets in VS Code.", "correctAnswer": ["type snippet prefix and tab", "snippet", "code template"], "explanation": "Type snippet prefix and press tab to insert code template.", "xp": 15},
        {"id": "cpp-47-6-16", "type": "typing", "question": "What is refactoring?", "correctAnswer": ["improving code structure without changing behavior", "refactor", "code improvement"], "explanation": "Refactoring improves code structure while maintaining functionality.", "xp": 5},
        {"id": "cpp-47-6-17", "type": "code", "question": "Rename symbol in IDE.", "correctAnswer": ["F2 or rename command", "rename", "refactor"], "explanation": "Use F2 or rename refactoring to rename symbols.", "xp": 15},
        {"id": "cpp-47-6-18", "type": "code", "question": "Install CLion.", "correctAnswer": ["download from JetBrains", "CLion", "JetBrains IDE"], "explanation": "Download CLion from JetBrains website.", "xp": 15},
        {"id": "cpp-47-6-19", "type": "code", "question": "Configure CLion with CMake.", "correctAnswer": ["CMakeLists.txt file", "configure CMake", "setup"], "explanation": "Create CMakeLists.txt to configure build in CLion.", "xp": 15},
        {"id": "cpp-47-6-20", "type": "code", "question": "Use code navigation in IDE.", "correctAnswer": ["Go to Definition", "navigation", "jump"], "explanation": "Use Go to Definition to navigate to symbol definitions.", "xp": 15},
        {"id": "cpp-47-6-21", "type": "code", "question": "Configure keyboard shortcuts.", "correctAnswer": ["keybindings.json", "shortcuts", "customize"], "explanation": "Customize keyboard shortcuts in keybindings.json.", "xp": 15},
        {"id": "cpp-47-6-22", "type": "code", "question": "Use multiple cursors in VS Code.", "correctAnswer": ["Alt+click or Ctrl+Alt+down", "multiple cursors", "edit multiple"], "explanation": "Use Alt+click or Ctrl+Alt+down arrow for multiple cursors.", "xp": 15},
        {"id": "cpp-47-6-23", "type": "code", "question": "Install Code::Blocks.", "correctAnswer": ["download and install", "Code::Blocks", "IDE"], "explanation": "Download Code::Blocks installer and run setup.", "xp": 15},
        {"id": "cpp-47-6-24", "type": "typing", "question": "Why use IDE instead of text editor?", "correctAnswer": ["integrated tools for development", "productivity", "all-in-one"], "explanation": "IDE provides integrated tools for coding, building, debugging.", "xp": 5},
        {"id": "cpp-47-6-25", "type": "code", "question": "Customize IDE theme.", "correctAnswer": ["settings or preferences", "theme", "color scheme"], "explanation": "Change theme in settings or preferences.", "xp": 15}
    ]
}

data['units'][46]['lessons'][5].update(lesson47_6)
print("✅ Unit 47, Lesson 6: IDE & Editors - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 11 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 40, Lesson 4: Socket Options")
print("  - Unit 27, Lesson 5: Splay Tree")
print("  - Unit 47, Lesson 6: IDE & Editors")
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
