#!/usr/bin/env python3
"""
Rebuild Batch 14 - Continue systematic rebuild
"""
import json
import os

print("🚀 BATCH 14: Continuing systematic rebuild")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 46, Lesson 8: Documentation
lesson46_8 = {
    "id": "cpp-U46-L8",
    "title": "Documentation",
    "unitTitle": "46. Best Practices & Tools",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Documentation in C++

Writing clear, comprehensive documentation for code.

## Why Document?

- **Maintainability**: Understand code later
- **Collaboration**: Help others understand
- **Onboarding**: Speed up new developers
- **API usage**: Guide library users
- **Debugging**: Document behavior and edge cases

## Doxygen

Industry-standard documentation generator.

## Best Practices

1. **Comment why, not what**: Code shows what
2. **Keep comments current**: Update with code
3. **Document interfaces**: Public APIs need docs
4. **Use meaningful names**: Self-documenting code
5. **Include examples**: Show usage
""",
    "questions": [
        {"id": "cpp-46-8-1", "type": "typing", "question": "Why is documentation important?", "correctAnswer": ["improves maintainability and collaboration"], "explanation": "Documentation helps maintain and understand code over time.", "xp": 5},
        {"id": "cpp-46-8-2", "type": "multiple", "question": "What is Doxygen?", "options": ["C++ documentation generator", "Testing framework", "Build system", "Code formatter"], "correctAnswer": [0], "explanation": "Doxygen is documentation generator for C++ and other languages.", "xp": 5},
        {"id": "cpp-46-8-3", "type": "code", "question": "Write single-line comment.", "correctAnswer": ["// comment"], "explanation": "Use // for single-line comments.", "xp": 15},
        {"id": "cpp-46-8-4", "type": "code", "question": "Write multi-line comment.", "correctAnswer": ["/* comment */"], "explanation": "Use /* */ for multi-line comments.", "xp": 15},
        {"id": "cpp-46-8-5", "type": "code", "question": "Document function with Doxygen.", "correctAnswer": ["/** Brief description @param x parameter @return return */"], "explanation": "Use Doxygen style comments for function documentation.", "xp": 15},
        {"id": "cpp-46-8-6", "type": "code", "question": "Use @brief tag.", "correctAnswer": ["@brief short description"], "explanation": "@brief provides short description of function or class.", "xp": 15},
        {"id": "cpp-46-8-7", "type": "code", "question": "Document parameter.", "correctAnswer": ["@param name description"], "explanation": "@param documents function parameter.", "xp": 15},
        {"id": "cpp-46-8-8", "type": "code", "question": "Document return value.", "correctAnswer": ["@return description"], "explanation": "@return documents return value.", "xp": 15},
        {"id": "cpp-46-8-9", "type": "code", "question": "Document exception.", "correctAnswer": ["@throw ExceptionType description"], "explanation": "@throw documents exceptions thrown by function.", "xp": 15},
        {"id": "cpp-46-8-10", "type": "typing", "question": "What should README.md contain?", "correctAnswer": ["project overview and usage"], "explanation": "README.md should contain project overview and usage instructions.", "xp": 5},
        {"id": "cpp-46-8-11", "type": "code", "question": "Generate documentation with Doxygen.", "correctAnswer": ["doxygen Doxyfile"], "explanation": "Run doxygen with configuration file to generate docs.", "xp": 15},
        {"id": "cpp-46-8-12", "type": "typing", "question": "What is the golden rule of commenting?", "correctAnswer": ["comment why not what"], "explanation": "Comment why code exists, not what it does.", "xp": 5},
        {"id": "cpp-46-8-13", "type": "code", "question": "Document class with Doxygen.", "correctAnswer": ["/** Class description */"], "explanation": "Use Doxygen comments before class definition.", "xp": 15},
        {"id": "cpp-46-8-14", "type": "code", "question": "Add example to documentation.", "correctAnswer": ["@code ... @endcode"], "explanation": "Use @code and @endcode for code examples.", "xp": 15},
        {"id": "cpp-46-8-15", "type": "code", "question": "Document file header.", "correctAnswer": ["/** @file filename.h @brief description */"], "explanation": "Document file with @file and @brief tags.", "xp": 15},
        {"id": "cpp-46-8-16", "type": "code", "question": "Create changelog.", "correctAnswer": ["document version history"], "explanation": "Maintain changelog documenting changes between versions.", "xp": 15},
        {"id": "cpp-46-8-17", "type": "typing", "question": "What is self-documenting code?", "correctAnswer": ["clear names reduce need for comments"], "explanation": "Self-documenting code uses clear names that explain purpose.", "xp": 5},
        {"id": "cpp-46-8-18", "type": "code", "question": "Document edge case.", "correctAnswer": ["document special behavior"], "explanation": "Document behavior for edge cases and special conditions.", "xp": 15},
        {"id": "cpp-46-8-19", "type": "code", "question": "Document TODO.", "correctAnswer": ["@todo description"], "explanation": "Use @todo tag for tasks to be completed.", "xp": 15},
        {"id": "cpp-46-8-20", "type": "code", "question": "Document deprecated function.", "correctAnswer": ["@deprecated description"], "explanation": "Use @deprecated to mark function as deprecated.", "xp": 15},
        {"id": "cpp-46-8-21", "type": "code", "question": "Document complexity.", "correctAnswer": ["explain algorithm complexity"], "explanation": "Document time and space complexity of algorithms.", "xp": 15},
        {"id": "cpp-46-8-22", "type": "typing", "question": "What is API documentation?", "correctAnswer": ["documents public interface"], "explanation": "API documentation describes how to use public interface.", "xp": 5},
        {"id": "cpp-46-8-23", "type": "code", "question": "Review documentation.", "correctAnswer": ["peer review docs for accuracy"], "explanation": "Review documentation with peers for accuracy and clarity.", "xp": 15},
        {"id": "cpp-46-8-24", "type": "code", "question": "Keep documentation current.", "correctAnswer": ["update docs when code changes"], "explanation": "Update documentation when modifying code.", "xp": 15},
        {"id": "cpp-46-8-25", "type": "typing", "question": "Why use examples in docs?", "correctAnswer": ["show how to use code"], "explanation": "Examples demonstrate proper usage of code.", "xp": 5}
    ]
}

data['units'][45]['lessons'][7].update(lesson46_8)
print("✅ Unit 46, Lesson 8: Documentation - 25 detailed questions")

# Unit 47, Lesson 9: Development Tools Summary
lesson47_9 = {
    "id": "cpp-U47-L9",
    "title": "Development Tools Summary",
    "unitTitle": "47. Development Environment Setup",
    "xp": 85,
    "type": "lesson",
    "difficulty": "beginner",
    "lessonText": """# Development Tools Summary

Overview of essential C++ development tools.

## Compilers

- **GCC**: GNU Compiler Collection, widely used
- **Clang**: Fast, modern, great diagnostics
- **MSVC**: Microsoft Visual C++, Windows

## Build Systems

- **CMake**: Cross-platform build system generator
- **Make**: Traditional Unix build tool

## IDEs

- **Visual Studio**: Windows, full-featured
- **VS Code**: Lightweight, cross-platform
- **CLion**: JetBrains, powerful features

## Debuggers

- **GDB**: GNU Debugger, Linux standard
- **LLDB**: LLVM Debugger, modern alternative
""",
    "questions": [
        {"id": "cpp-47-9-1", "type": "typing", "question": "What are essential C++ development tools?", "correctAnswer": ["compiler, debugger, build system, IDE"], "explanation": "Essential tools include compiler, debugger, build system, and IDE.", "xp": 5},
        {"id": "cpp-47-9-2", "type": "multiple", "question": "Which is most popular C++ compiler?", "options": ["GCC", "Only MSVC", "Only Clang", "Only ICC"], "correctAnswer": [0], "explanation": "GCC is widely used C++ compiler.", "xp": 5},
        {"id": "cpp-47-9-3", "type": "typing", "question": "What is CMake?", "correctAnswer": ["cross-platform build system generator"], "explanation": "CMake generates build files for various platforms.", "xp": 5},
        {"id": "cpp-47-9-4", "type": "typing", "question": "What is GDB?", "correctAnswer": ["GNU Debugger"], "explanation": "GDB is GNU Debugger for debugging programs.", "xp": 5},
        {"id": "cpp-47-9-5", "type": "code", "question": "Compile with GCC.", "correctAnswer": ["g++ file.cpp -o output"], "explanation": "Use g++ to compile C++ files with GCC.", "xp": 15},
        {"id": "cpp-47-9-6", "type": "code", "question": "Compile with Clang.", "correctAnswer": ["clang++ file.cpp -o output"], "explanation": "Use clang++ to compile C++ files with Clang.", "xp": 15},
        {"id": "cpp-47-9-7", "type": "code", "question": "Create CMakeLists.txt.", "correctAnswer": ["cmake_minimum_required(VERSION 3.10)"], "explanation": "Start CMakeLists.txt with cmake_minimum_required.", "xp": 15},
        {"id": "cpp-47-9-8", "type": "code", "question": "Build with CMake.", "correctAnswer": ["cmake . && make"], "explanation": "Configure with cmake and build with make.", "xp": 15},
        {"id": "cpp-47-9-9", "type": "code", "question": "Debug with GDB.", "correctAnswer": ["gdb ./program"], "explanation": "Run program under GDB for debugging.", "xp": 15},
        {"id": "cpp-47-9-10", "type": "code", "question": "Set breakpoint in GDB.", "correctAnswer": ["break function"], "explanation": "Use break command to set breakpoint.", "xp": 15},
        {"id": "cpp-47-9-11", "type": "code", "question": "Step through code in GDB.", "correctAnswer": ["step or next"], "explanation": "Use step or next to step through code.", "xp": 15},
        {"id": "cpp-47-9-12", "type": "code", "question": "Initialize Git repository.", "correctAnswer": ["git init"], "explanation": "git init initializes new Git repository.", "xp": 15},
        {"id": "cpp-47-9-13", "type": "code", "question": "Run Clang-Tidy.", "correctAnswer": ["clang-tidy file.cpp"], "explanation": "Run Clang-Tidy for code quality checks.", "xp": 15},
        {"id": "cpp-47-9-14", "type": "code", "question": "Profile with Valgrind.", "correctAnswer": ["valgrind ./program"], "explanation": "Run program under Valgrind for memory analysis.", "xp": 15},
        {"id": "cpp-47-9-15", "type": "code", "question": "Write test with Google Test.", "correctAnswer": ["TEST(TestName, TestCase) {}"], "explanation": "Use TEST macro to define Google Test test case.", "xp": 15},
        {"id": "cpp-47-9-16", "type": "code", "question": "Generate documentation with Doxygen.", "correctAnswer": ["doxygen Doxyfile"], "explanation": "Run doxygen with configuration to generate docs.", "xp": 15},
        {"id": "cpp-47-9-17", "type": "typing", "question": "What is vcpkg?", "correctAnswer": ["Microsoft C++ package manager"], "explanation": "vcpkg is Microsoft's C++ package manager.", "xp": 5},
        {"id": "cpp-47-9-18", "type": "code", "question": "Install package with vcpkg.", "correctAnswer": ["vcpkg install package"], "explanation": "Use vcpkg install to install packages.", "xp": 15},
        {"id": "cpp-47-9-19", "type": "typing", "question": "What is Catch2?", "correctAnswer": ["header-only testing framework"], "explanation": "Catch2 is modern, header-only testing framework.", "xp": 5},
        {"id": "cpp-47-9-20", "type": "code", "question": "Check memory leaks.", "correctAnswer": ["Valgrind or address sanitizer"], "explanation": "Use Valgrind or address sanitizer to check leaks.", "xp": 15},
        {"id": "cpp-47-9-21", "type": "typing", "question": "What is static analysis?", "correctAnswer": ["analyze code without running"], "explanation": "Static analysis analyzes code without executing it.", "xp": 5},
        {"id": "cpp-47-9-22", "type": "code", "question": "Profile performance.", "correctAnswer": ["use profiler tool"], "explanation": "Use profiler to identify performance bottlenecks.", "xp": 15},
        {"id": "cpp-47-9-23", "type": "typing", "question": "Why use version control?", "correctAnswer": ["track history and collaborate"], "explanation": "Version control tracks changes and enables collaboration.", "xp": 5},
        {"id": "cpp-47-9-24", "type": "code", "question": "Choose development tools.", "correctAnswer": ["consider platform and project needs"], "explanation": "Consider platform, project size, and team when choosing tools.", "xp": 15},
        {"id": "cpp-47-9-25", "type": "typing", "question": "What is integrated development environment?", "correctAnswer": ["IDE combines multiple tools"], "explanation": "IDE combines editor, compiler, debugger in one application.", "xp": 5}
    ]
}

data['units'][46]['lessons'][8].update(lesson47_9)
print("✅ Unit 47, Lesson 9: Development Tools Summary - 25 detailed questions")

# Unit 43, Lesson 9: C++ Networking Summary
lesson43_9 = {
    "id": "cpp-U43-L9",
    "title": "C++ Networking Summary",
    "unitTitle": "43. Network Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# C++ Networking Summary

Comprehensive overview of network programming concepts in C++.

## Core Concepts

- **Client-Server**: Request-response model
- **Protocols**: TCP (reliable) and UDP (fast)
- **Sockets**: Communication endpoints

## TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| Reliability | Guaranteed | No guarantee |
| Order | Preserved | Not preserved |
| Connection | Required | Connectionless |
""",
    "questions": [
        {"id": "cpp-43-9-1", "type": "typing", "question": "What is client-server model?", "correctAnswer": ["request-response communication model"], "explanation": "Client-server is request-response model for network communication.", "xp": 5},
        {"id": "cpp-43-9-2", "type": "multiple", "question": "What is main difference between TCP and UDP?", "options": ["TCP reliable, UDP fast", "TCP fast, UDP reliable", "Same protocol", "No difference"], "correctAnswer": [0], "explanation": "TCP provides reliability, UDP provides speed.", "xp": 5},
        {"id": "cpp-43-9-3", "type": "typing", "question": "What is socket?", "correctAnswer": ["communication endpoint"], "explanation": "Socket is endpoint for sending and receiving data.", "xp": 5},
        {"id": "cpp-43-9-4", "type": "code", "question": "Create socket.", "correctAnswer": ["socket(AF_INET, SOCK_STREAM, 0)"], "explanation": "socket() creates new socket endpoint.", "xp": 15},
        {"id": "cpp-43-9-5", "type": "code", "question": "Bind socket to address.", "correctAnswer": ["bind(sock, (sockaddr*)&addr, sizeof(addr))"], "explanation": "bind() assigns address to socket.", "xp": 15},
        {"id": "cpp-43-9-6", "type": "code", "question": "Listen for connections.", "correctAnswer": ["listen(sock, backlog)"], "explanation": "listen() marks socket as passive for accepting connections.", "xp": 15},
        {"id": "cpp-43-9-7", "type": "code", "question": "Accept incoming connection.", "correctAnswer": ["accept(sock, (sockaddr*)&addr, &len)"], "explanation": "accept() accepts incoming connection on listening socket.", "xp": 15},
        {"id": "cpp-43-9-8", "type": "code", "question": "Connect to server.", "correctAnswer": ["connect(sock, (sockaddr*)&addr, sizeof(addr))"], "explanation": "connect() establishes connection to server.", "xp": 15},
        {"id": "cpp-43-9-9", "type": "code", "question": "Send data over TCP.", "correctAnswer": ["send(sock, buffer, size, 0)"], "explanation": "send() transmits data over connected TCP socket.", "xp": 15},
        {"id": "cpp-43-9-10", "type": "code", "question": "Receive data from TCP.", "correctAnswer": ["recv(sock, buffer, size, 0)"], "explanation": "recv() receives data from connected TCP socket.", "xp": 15},
        {"id": "cpp-43-9-11", "type": "code", "question": "Send data over UDP.", "correctAnswer": ["sendto(sock, buffer, size, 0, &addr, sizeof(addr))"], "explanation": "sendto() sends datagram to specified address.", "xp": 15},
        {"id": "cpp-43-9-12", "type": "code", "question": "Receive data from UDP.", "correctAnswer": ["recvfrom(sock, buffer, size, 0, &addr, &len)"], "explanation": "recvfrom() receives datagram and sender address.", "xp": 15},
        {"id": "cpp-43-9-13", "type": "typing", "question": "What is HTTP port?", "correctAnswer": ["port 80"], "explanation": "HTTP uses port 80 by default.", "xp": 5},
        {"id": "cpp-43-9-14", "type": "typing", "question": "What is HTTPS port?", "correctAnswer": ["port 443"], "explanation": "HTTPS uses port 443 by default.", "xp": 5},
        {"id": "cpp-43-9-15", "type": "code", "question": "Close socket.", "correctAnswer": ["close(sock)"], "explanation": "close() closes socket and releases resources.", "xp": 15},
        {"id": "cpp-43-9-16", "type": "code", "question": "Handle socket errors.", "correctAnswer": ["check return value == -1"], "explanation": "Socket functions return -1 on error.", "xp": 15},
        {"id": "cpp-43-9-17", "type": "code", "question": "Set socket timeout.", "correctAnswer": ["SO_RCVTIMEO or SO_SNDTIMEO"], "explanation": "Set SO_RCVTIMEO or SO_SNDTIMEO for timeout.", "xp": 15},
        {"id": "cpp-43-9-18", "type": "typing", "question": "What is TLS?", "correctAnswer": ["Transport Layer Security"], "explanation": "TLS provides encrypted communication over network.", "xp": 5},
        {"id": "cpp-43-9-19", "type": "code", "question": "Implement echo server.", "correctAnswer": ["receive and send back same data"], "explanation": "Echo server sends back received data.", "xp": 15},
        {"id": "cpp-43-9-20", "type": "code", "question": "Handle multiple clients.", "correctAnswer": ["use select/poll or threading"], "explanation": "Use select, poll, or threading for multiple clients.", "xp": 15},
        {"id": "cpp-43-9-21", "type": "code", "question": "Debug network communication.", "correctAnswer": ["use Wireshark or logging"], "explanation": "Use packet capture or logging to debug networking.", "xp": 15},
        {"id": "cpp-43-9-22", "type": "typing", "question": "When to use TCP?", "correctAnswer": ["reliable communication needed"], "explanation": "Use TCP when reliable communication is required.", "xp": 5},
        {"id": "cpp-43-9-23", "type": "typing", "question": "When to use UDP?", "correctAnswer": ["speed more important than reliability"], "explanation": "Use UDP when speed is more important than reliability.", "xp": 5},
        {"id": "cpp-43-9-24", "type": "code", "question": "Implement simple HTTP server.", "correctAnswer": ["parse HTTP request and send response"], "explanation": "Parse HTTP request and send appropriate response.", "xp": 15},
        {"id": "cpp-43-9-25", "type": "typing", "question": "Why validate network input?", "correctAnswer": ["prevent injection attacks"], "explanation": "Validate input to prevent injection and attacks.", "xp": 5}
    ]
}

data['units'][42]['lessons'][8].update(lesson43_9)
print("✅ Unit 43, Lesson 9: C++ Networking Summary - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 14 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 46, Lesson 8: Documentation")
print("  - Unit 47, Lesson 9: Development Tools Summary")
print("  - Unit 43, Lesson 9: C++ Networking Summary")
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
