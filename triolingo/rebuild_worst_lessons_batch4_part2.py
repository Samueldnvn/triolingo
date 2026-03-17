#!/usr/bin/env python3
"""
Rebuild Top 10 Worst Lessons - Batch 4 Part 2 (Lessons 18-20)
"""
import json
import os

print("🚀 BATCH 4 PART 2: Lessons 18-20")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 40, Lesson 3: UDP Communication
lesson40_3 = {
    "id": "cpp-U40-L3",
    "title": "UDP Communication",
    "unitTitle": "40. Socket Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# UDP Communication

Connectionless, unreliable datagram communication.

## Core Concepts

UDP (User Datagram Protocol) provides lightweight, fast communication without connection overhead.

## UDP Characteristics

- **Connectionless**: No connection establishment
- **Unreliable**: No guaranteed delivery
- **Unordered**: Packets may arrive out of order
- **No congestion control**: Fast but can overwhelm network
- **Lightweight**: Minimal overhead

## When to Use UDP

- Real-time applications (gaming, streaming)
- DNS queries
- IoT communications
- Speed is more important than reliability

## Key Functions

```cpp
socket(AF_INET, SOCK_DGRAM, 0);  // Create UDP socket
sendto(sockfd, data, size, 0, &addr, len);  // Send datagram
recvfrom(sockfd, buf, size, 0, &from, &len);  // Receive datagram
```

## Best Practices

1. Implement application-level reliability if needed
2. Use sequence numbers for ordering
3. Handle packet loss gracefully
4. Set appropriate buffer sizes
5. Use timeouts for recvfrom
""",
    "questions": [
        {"id": "cpp-40-3-1", "type": "typing", "question": "What is UDP?", "correctAnswer": ["User Datagram Protocol, connectionless", "unreliable protocol", "datagram protocol"], "explanation": "UDP is a connectionless, unreliable transport protocol that sends datagrams without connection setup.", "xp": 5},
        {"id": "cpp-40-3-2", "type": "typing", "question": "What is the main advantage of UDP over TCP?", "correctAnswer": ["faster, lower overhead", "speed", "performance"], "explanation": "UDP has lower overhead and is faster than TCP because it doesn't establish connections.", "xp": 5},
        {"id": "cpp-40-3-3", "type": "typing", "question": "Does UDP guarantee message delivery?", "correctAnswer": ["no, delivery is not guaranteed", "unreliable", "best effort"], "explanation": "UDP does not guarantee message delivery; packets can be lost without notification.", "xp": 5},
        {"id": "cpp-40-3-4", "type": "typing", "question": "Does UDP maintain message order?", "correctAnswer": ["no, order is not guaranteed", "unordered", "may be out of order"], "explanation": "UDP packets can arrive in any order; the protocol doesn't guarantee sequencing.", "xp": 5},
        {"id": "cpp-40-3-5", "type": "code", "question": "Create UDP socket.", "correctAnswer": ["socket(AF_INET, SOCK_DGRAM, 0)", "UDP socket", "SOCK_DGRAM"], "explanation": "socket(AF_INET, SOCK_DGRAM, 0) creates a UDP socket for IPv4.", "xp": 15},
        {"id": "cpp-40-3-6", "type": "code", "question": "Send UDP datagram.", "correctAnswer": ["sendto(sockfd, data, size, 0, &addr, addr_len)", "sendto", "send datagram"], "explanation": "sendto() sends a datagram to a specific destination address and port.", "xp": 15},
        {"id": "cpp-40-3-7", "type": "code", "question": "Receive UDP datagram.", "correctAnswer": ["recvfrom(sockfd, buffer, size, 0, &from_addr, &addr_len)", "recvfrom", "receive datagram"], "explanation": "recvfrom() receives a UDP datagram and provides the sender's address.", "xp": 15},
        {"id": "cpp-40-3-8", "type": "code", "question": "Bind UDP socket to address.", "correctAnswer": ["bind(sockfd, &addr, sizeof(addr))", "bind UDP", "assign address"], "explanation": "bind() assigns a local address and port to the UDP socket for receiving.", "xp": 15},
        {"id": "cpp-40-3-9", "type": "typing", "question": "Does UDP need connect() like TCP?", "correctAnswer": ["no, connectionless protocol", "no connect needed", "send directly"], "explanation": "UDP doesn't establish connections; send datagrams directly to destinations.", "xp": 5},
        {"id": "cpp-40-3-10", "type": "code", "question": "Implement UDP echo server.", "correctAnswer": ["recvfrom, sendto same data", "echo", "reflect"], "explanation": "Receive datagram with recvfrom, then send it back to sender with sendto.", "xp": 15},
        {"id": "cpp-40-3-11", "type": "code", "question": "Implement UDP echo client.", "correctAnswer": ["sendto, recvfrom", "echo client", "test UDP"], "explanation": "Send datagram with sendto, receive response with recvfrom.", "xp": 15},
        {"id": "cpp-40-3-12", "type": "code", "question": "Set timeout for UDP receive.", "correctAnswer": ["setsockopt SO_RCVTIMEO", "timeout", "receive timeout"], "explanation": "Use setsockopt() with SO_RCVTIMEO to set timeout for recvfrom().", "xp": 15},
        {"id": "cpp-40-3-13", "type": "typing", "question": "How to handle packet loss in UDP?", "correctAnswer": ["implement retransmission", "application-level reliability", "ACK/NACK"], "explanation": "Implement application-level reliability with acknowledgments and retransmissions.", "xp": 5},
        {"id": "cpp-40-3-14", "type": "code", "question": "Implement sequence numbers for UDP.", "correctAnswer": ["add sequence to packet", "track order", "reorder"], "explanation": "Add sequence number to each packet to track and reorder them at receiver.", "xp": 15},
        {"id": "cpp-40-3-15", "type": "code", "question": "Get sender address from recvfrom().", "correctAnswer": ["recvfrom fills sockaddr", "sender info", "peer address"], "explanation": "recvfrom() fills the sockaddr structure with the sender's address and port.", "xp": 15},
        {"id": "cpp-40-3-16", "type": "typing", "question": "What is multicast in UDP?", "correctAnswer": ["send to multiple recipients", "one-to-many", "multicast group"], "explanation": "Multicast allows sending one datagram to multiple recipients who joined a multicast group.", "xp": 5},
        {"id": "cpp-40-3-17", "type": "code", "question": "Join multicast group.", "correctAnswer": ["IP_ADD_MEMBERSHIP", "join multicast", "multicast group"], "explanation": "Use setsockopt() with IP_ADD_MEMBERSHIP to join a multicast group.", "xp": 15},
        {"id": "cpp-40-3-18", "type": "typing", "question": "What is broadcast in UDP?", "correctAnswer": ["send to all hosts on network", "one-to-all", "broadcast address"], "explanation": "Broadcast sends datagram to all hosts on the network using broadcast address.", "xp": 5},
        {"id": "cpp-40-3-19", "type": "code", "question": "Send broadcast UDP packet.", "correctAnswer": ["sendto to broadcast address", "255.255.255.255", "broadcast"], "explanation": "Use sendto() with broadcast address (e.g., 255.255.255.255) to send to all hosts.", "xp": 15},
        {"id": "cpp-40-3-20", "type": "code", "question": "Handle fragmented UDP packets.", "correctAnswer": ["reassemble fragments", "fragmentation", "IP fragments"], "explanation": "Handle IP fragmentation by reassembling fragments or limiting packet size.", "xp": 15},
        {"id": "cpp-40-3-21", "type": "code", "question": "Implement reliable UDP with ACKs.", "correctAnswer": ["acknowledgments", "retransmission", "reliable protocol"], "explanation": "Implement acknowledgments and retransmissions to create reliable UDP protocol.", "xp": 15},
        {"id": "cpp-40-3-22", "type": "typing", "question": "What is the maximum UDP packet size?", "correctAnswer": ["65507 bytes (minus IP header)", "65KB limit", "MTU"], "explanation": "Maximum UDP payload is 65507 bytes (65535 minus 28 bytes for IP+UDP headers).", "xp": 5},
        {"id": "cpp-40-3-23", "type": "code", "question": "Use UDP with multiple destinations.", "correctAnswer": ["connect to multiple", "sendto each", "multiple peers"], "explanation": "Use sendto() with different destination addresses for each recipient.", "xp": 15},
        {"id": "cpp-40-3-24", "type": "code", "question": "Calculate UDP checksum.", "correctAnswer": ["one's complement sum", "checksum calculation", "integrity"], "explanation": "Calculate one's complement sum of pseudo-header, UDP header, and data.", "xp": 15},
        {"id": "cpp-40-3-25", "type": "code", "question": "Handle UDP network errors.", "correctAnswer": ["check return values", "ICMP errors", "error handling"], "explanation": "Check sendto/recvfrom return values and handle ICMP errors if needed.", "xp": 15}
    ]
}

data['units'][39]['lessons'][2].update(lesson40_3)
print("✅ Unit 40, Lesson 3: UDP Communication - 25 detailed questions")

# Unit 47, Lesson 3: Debugging Tools
lesson47_3 = {
    "id": "cpp-U47-L3",
    "title": "Debugging Tools",
    "unitTitle": "47. Development Tools",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Debugging Tools

Tools and techniques for debugging C++ code.

## Essential Debuggers

- **gdb**: GNU Debugger (Linux)
- **lldb**: LLVM Debugger (macOS, cross-platform)
- **Visual Studio Debugger**: Windows IDE debugger
- **WinDbg**: Windows kernel/user mode debugger

## Static Analysis Tools

- **Clang Static Analyzer**: Find bugs at compile time
- **Cppcheck**: Open-source static analysis
- **SonarQube**: Code quality analysis
- **Coverity**: Commercial static analysis

## Dynamic Analysis Tools

- **Valgrind**: Memory debugging (Linux)
- **AddressSanitizer**: Memory error detection
- **UndefinedBehaviorSanitizer**: UB detection
- **Dr. Memory**: Memory debugging (Windows)

## Profiling Tools

- **gprof**: GNU profiler
- **perf**: Linux performance tool
- **Visual Studio Profiler**: Windows profiler
- **Google Benchmark**: Benchmarking framework

## Best Practices

1. Use debugger for runtime issues
2. Enable compiler warnings
3. Use static analysis before committing
4. Profile to find bottlenecks
5. Use sanitizers in development builds
""",
    "questions": [
        {"id": "cpp-47-3-1", "type": "typing", "question": "What is the primary purpose of a debugger?", "correctAnswer": ["find and fix runtime errors", "debug code", "runtime analysis"], "explanation": "Debuggers allow you to pause execution, inspect variables, and trace program flow to find bugs.", "xp": 5},
        {"id": "cpp-47-3-2", "type": "multiple", "question": "Which is a popular debugger for Linux?", "options": ["gdb", "Visual Studio Debugger", "WinDbg", "Xcode Debugger"], "correctAnswer": [0], "explanation": "gdb (GNU Debugger) is the standard debugger for Linux C++ development.", "xp": 5},
        {"id": "cpp-47-3-3", "type": "multiple", "question": "Which is a memory debugging tool for Linux?", "options": ["Valgrind", "Visual Studio Debugger", "gprof", "WinDbg"], "correctAnswer": [0], "explanation": "Valgrind is a powerful tool for memory debugging, leak detection, and profiling on Linux.", "xp": 5},
        {"id": "cpp-47-3-4", "type": "typing", "question": "What does a breakpoint do?", "correctAnswer": ["pause program execution", "stop execution", "debugging stop"], "explanation": "A breakpoint pauses program execution at a specific location, allowing you to inspect state.", "xp": 5},
        {"id": "cpp-47-3-5", "type": "typing", "question": "What is step-through debugging?", "correctAnswer": ["execute code line by line", "line-by-line execution", "step debugging"], "explanation": "Step-through debugging executes code one line at a time to understand program flow.", "xp": 5},
        {"id": "cpp-47-3-6", "type": "code", "question": "Set breakpoint in gdb.", "correctAnswer": ["break main", "break function_name", "break file.c:line"], "explanation": "Use 'break' command in gdb followed by function name or file:line to set breakpoint.", "xp": 15},
        {"id": "cpp-47-3-7", "type": "code", "question": "Run program in gdb.", "correctAnswer": ["run", "start program", "execute"], "explanation": "Use 'run' command in gdb to start executing the program.", "xp": 15},
        {"id": "cpp-47-3-8", "type": "code", "question": "Inspect variable in gdb.", "correctAnswer": ["print variable", "p variable", "inspect value"], "explanation": "Use 'print' or 'p' command in gdb to display variable values.", "xp": 15},
        {"id": "cpp-47-3-9", "type": "code", "question": "Step to next line in gdb.", "correctAnswer": ["next", "n", "step over"], "explanation": "Use 'next' or 'n' command to step to the next line without stepping into functions.", "xp": 15},
        {"id": "cpp-47-3-10", "type": "code", "question": "Step into function in gdb.", "correctAnswer": ["step", "s", "step into"], "explanation": "Use 'step' or 's' command to step into function calls.", "xp": 15},
        {"id": "cpp-47-3-11", "type": "typing", "question": "What is Valgrind used for?", "correctAnswer": ["memory debugging and leak detection", "memory analysis", "find memory errors"], "explanation": "Valgrind detects memory leaks, invalid memory access, and other memory-related errors.", "xp": 5},
        {"id": "cpp-47-3-12", "type": "code", "question": "Run Valgrind on program.", "correctAnswer": ["valgrind ./program", "memory check", "leak check"], "explanation": "Run program with valgrind to detect memory errors and leaks.", "xp": 15},
        {"id": "cpp-47-3-13", "type": "typing", "question": "What is AddressSanitizer?", "correctAnswer": ["memory error detection tool", "ASan", "sanitizer"], "explanation": "AddressSanitizer detects memory errors like use-after-free, buffer overflows at runtime.", "xp": 5},
        {"id": "cpp-47-3-14", "type": "code", "question": "Enable AddressSanitizer in GCC.", "correctAnswer": ["-fsanitize=address", "ASan flag", "compile with sanitizer"], "explanation": "Compile with -fsanitize=address -g to enable AddressSanitizer.", "xp": 15},
        {"id": "cpp-47-3-15", "type": "typing", "question": "What is static analysis?", "correctAnswer": ["analyze code without executing", "static code analysis", "compile-time analysis"], "explanation": "Static analysis examines code for errors without running it, finding bugs early.", "xp": 5},
        {"id": "cpp-47-3-16", "type": "code", "question": "Use Clang Static Analyzer.", "correctAnswer": ["clang-tidy", "scan-build", "static analysis"], "explanation": "Use clang-tidy or scan-build to run Clang Static Analyzer on your code.", "xp": 15},
        {"id": "cpp-47-3-17", "type": "typing", "question": "What is profiling?", "correctAnswer": ["measure program performance", "performance analysis", "timing"], "explanation": "Profiling measures program performance to identify bottlenecks and optimize code.", "xp": 5},
        {"id": "cpp-47-3-18", "type": "code", "question": "Profile program with gprof.", "correctAnswer": ["-pg flag", "gmon.out", "gprof analysis"], "explanation": "Compile with -pg flag, run program to generate gmon.out, then analyze with gprof.", "xp": 15},
        {"id": "cpp-47-3-19", "type": "code", "question": "Use watchpoint in gdb.", "correctAnswer": ["watch variable", "break on change", "variable watch"], "explanation": "Use 'watch' command to break when a variable's value changes.", "xp": 15},
        {"id": "cpp-47-3-20", "type": "code", "question": "Continue execution in gdb.", "correctAnswer": ["continue", "c", "resume"], "explanation": "Use 'continue' or 'c' command to resume program execution.", "xp": 15},
        {"id": "cpp-47-3-21", "type": "code", "question": "Enable compiler warnings.", "correctAnswer": ["-Wall -Wextra", "warning flags", "compiler warnings"], "explanation": "Compile with -Wall -Wextra to enable comprehensive warnings.", "xp": 15},
        {"id": "cpp-47-3-22", "type": "typing", "question": "What is core dump?", "correctAnswer": ["snapshot of program memory", "memory dump", "crash dump"], "explanation": "A core dump is a file containing the memory state of a crashed program for post-mortem analysis.", "xp": 5},
        {"id": "cpp-47-3-23", "type": "code", "question": "Analyze core dump with gdb.", "correctAnswer": ["gdb core program", "post-mortem", "crash analysis"], "explanation": "Run gdb with core file and executable to analyze crash.", "xp": 15},
        {"id": "cpp-47-3-24", "type": "code", "question": "Use conditional breakpoint.", "correctAnswer": ["break if condition", "conditional break", "break with condition"], "explanation": "Set breakpoint with condition to break only when expression is true.", "xp": 15},
        {"id": "cpp-47-3-25", "type": "code", "question": "Debug multithreaded program.", "correctAnswer": ["thread commands", "thread switching", "gdb threads"], "explanation": "Use gdb's thread commands (info threads, thread N) to debug multithreaded programs.", "xp": 15}
    ]
}

data['units'][46]['lessons'][2].update(lesson47_3)
print("✅ Unit 47, Lesson 3: Debugging Tools - 25 detailed questions")

# Unit 43, Lesson 6: Asynchronous I/O
lesson43_6 = {
    "id": "cpp-U43-L6",
    "title": "Asynchronous I/O",
    "unitTitle": "43. C++ Networking",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Asynchronous I/O

Non-blocking I/O for high-performance network applications.

## Core Concepts

Asynchronous I/O allows operations to proceed without blocking, enabling efficient handling of many connections.

## I/O Models

1. **Blocking I/O**: Waits for operation to complete
2. **Non-blocking I/O**: Returns immediately, may retry
3. **I/O Multiplexing**: Monitor multiple file descriptors
4. **Signal-driven I/O**: Use signals to notify readiness
5. **Asynchronous I/O**: Kernel notifies when complete

## I/O Multiplexing

- **select**: Oldest, portable, limited to 1024 FDs
- **poll**: Similar to select, no limit
- **epoll**: Linux-specific, scalable
- **kqueue**: BSD/macOS scalable alternative
- **IOCP**: Windows I/O completion ports

## Async C++20

C++20 introduces coroutines and co_await for async programming.

## Use Cases

- Web servers
- Chat applications
- Game servers
- High-throughput systems
""",
    "questions": [
        {"id": "cpp-43-6-1", "type": "typing", "question": "What is asynchronous I/O?", "correctAnswer": ["non-blocking operations", "async I/O", "non-blocking"], "explanation": "Asynchronous I/O initiates operations and returns immediately without waiting for completion.", "xp": 5},
        {"id": "cpp-43-6-2", "type": "typing", "question": "What is the advantage of async I/O?", "correctAnswer": ["handle many connections efficiently", "scalability", "non-blocking"], "explanation": "Async I/O allows handling many concurrent connections without thread-per-connection overhead.", "xp": 5},
        {"id": "cpp-43-6-3", "type": "multiple", "question": "Which is an I/O multiplexing mechanism?", "options": ["select", "poll", "epoll", "All of the above"], "correctAnswer": [3], "explanation": "select, poll, and epoll are all mechanisms for I/O multiplexing.", "xp": 5},
        {"id": "cpp-43-6-4", "type": "multiple", "question": "Which I/O mechanism is Linux-specific?", "options": ["select", "poll", "epoll", "kqueue"], "correctAnswer": [2], "explanation": "epoll is Linux-specific and provides scalable I/O event notification.", "xp": 5},
        {"id": "cpp-43-6-5", "type": "typing", "question": "What is the limitation of select?", "correctAnswer": ["maximum 1024 file descriptors", "FD_SETSIZE limit", "scalability"], "explanation": "select is limited to FD_SETSIZE (typically 1024) file descriptors.", "xp": 5},
        {"id": "cpp-43-6-6", "type": "code", "question": "Set socket to non-blocking mode.", "correctAnswer": ["fcntl with O_NONBLOCK", "non-blocking socket", "non-blocking I/O"], "explanation": "Use fcntl(sockfd, F_SETFL, O_NONBLOCK) to set socket to non-blocking mode.", "xp": 15},
        {"id": "cpp-43-6-7", "type": "code", "question": "Use select to monitor sockets.", "correctAnswer": ["FD_SET", "select()", "FD_ISSET", "multiplexing"], "explanation": "Use FD_SET to add sockets to sets, call select(), then check with FD_ISSET.", "xp": 15},
        {"id": "cpp-43-6-8", "type": "code", "question": "Use poll for I/O multiplexing.", "correctAnswer": ["poll()", "struct pollfd", "monitor FDs"], "explanation": "Use poll() with array of pollfd structures to monitor file descriptors.", "xp": 15},
        {"id": "cpp-43-6-9", "type": "code", "question": "Use epoll on Linux.", "correctAnswer": ["epoll_create", "epoll_ctl", "epoll_wait", "epoll API"], "explanation": "Create epoll instance with epoll_create, add FDs with epoll_ctl, wait with epoll_wait.", "xp": 15},
        {"id": "cpp-43-6-10", "type": "code", "question": "Handle EAGAIN on non-blocking operations.", "correctAnswer": ["retry later", "check error", "EAGAIN handling"], "explanation": "When operation returns EAGAIN, operation would block, retry later when ready.", "xp": 15},
        {"id": "cpp-43-6-11", "type": "typing", "question": "What is IOCP?", "correctAnswer": ["Windows I/O Completion Ports", "async I/O", "Windows async"], "explanation": "IOCP is Windows' high-performance async I/O mechanism using completion ports.", "xp": 5},
        {"id": "cpp-43-6-12", "type": "code", "question": "Implement event loop with select.", "correctAnswer": ["while loop", "select timeout", "handle events"], "explanation": "Create loop calling select with timeout, process ready FDs each iteration.", "xp": 15},
        {"id": "cpp-43-6-13", "type": "code", "question": "Use kqueue on BSD/macOS.", "correctAnswer": ["kqueue", "kevent", "BSD async"], "explanation": "Use kqueue() to create queue, kevent() to add events, kevent() to wait.", "xp": 15},
        {"id": "cpp-43-6-14", "type": "typing", "question": "What is edge-triggered vs level-triggered?", "correctAnswer": ["epoll event notification modes", "notification style", "epoll modes"], "explanation": "Edge-triggered notifies on state change, level-triggered notifies while condition exists.", "xp": 5},
        {"id": "cpp-43-6-15", "type": "code", "question": "Implement non-blocking socket server.", "correctAnswer": ["non-blocking accept", "event loop", "async server"], "explanation": "Set socket non-blocking, use event loop to handle multiple clients concurrently.", "xp": 15},
        {"id": "cpp-43-6-16", "type": "code", "question": "Use async/await with C++20.", "correctAnswer": ["co_await", "coroutines", "async functions"], "explanation": "Use co_await with coroutines for asynchronous code in C++20.", "xp": 15},
        {"id": "cpp-43-6-17", "type": "typing", "question": "What is Reactor pattern?", "correctAnswer": ["event-driven architecture", "handler registration", "reactor design"], "explanation": "Reactor pattern handles multiple I/O events by registering handlers and dispatching events.", "xp": 5},
        {"id": "cpp-43-6-18", "type": "code", "question": "Use Boost.Asio for async I/O.", "correctAnswer": ["boost::asio::io_context", "async operations", "Boost async"], "explanation": "Use Boost.Asio's io_context and async operations for cross-platform async I/O.", "xp": 15},
        {"id": "cpp-43-6-19", "type": "code", "question": "Implement async read with callback.", "correctAnswer": ["async_read", "callback", "completion handler"], "explanation": "Use async_read with callback function to handle completion asynchronously.", "xp": 15},
        {"id": "cpp-43-6-20", "type": "code", "question": "Handle partial reads/writes in async I/O.", "correctAnswer": ["track bytes transferred", "continue operation", "partial handling"], "explanation": "Track bytes read/written and continue until full operation complete.", "xp": 15},
        {"id": "cpp-43-6-21", "type": "typing", "question": "What is Proactor pattern?", "correctAnswer": ["completion-based async pattern", "async completion", "proactor design"], "explanation": "Proactor pattern initiates async operations and dispatches handlers on completion.", "xp": 5},
        {"id": "cpp-43-6-22", "type": "code", "question": "Cancel async operation.", "correctAnswer": ["cancel operation", "cancellation", "abort"], "explanation": "Use library-specific cancellation functions to cancel pending async operations.", "xp": 15},
        {"id": "cpp-43-6-23", "type": "code", "question": "Handle async operation timeout.", "correctAnswer": ["timer", "deadline timer", "timeout handling"], "explanation": "Use async timers to implement timeouts for async operations.", "xp": 15},
        {"id": "cpp-43-6-24", "type": "typing", "question": "What is the benefit of async over threads?", "correctAnswer": ["lower overhead", "scalability", "fewer resources"], "explanation": "Async I/O has lower overhead than thread-per-connection models, scaling better.", "xp": 5},
        {"id": "cpp-43-6-25", "type": "code", "question": "Implement async echo server.", "correctAnswer": ["accept async", "read async", "write async"], "explanation": "Use async accept, read, and write operations to implement async echo server.", "xp": 15}
    ]
}

data['units'][42]['lessons'][5].update(lesson43_6)
print("✅ Unit 43, Lesson 6: Asynchronous I/O - 25 detailed questions")

# Write final
output_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(output_path, 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n" + "="*70)
print("✅ BATCH 4 COMPLETE: 5 lessons rebuilt")
print("="*70)
print("Lessons completed:")
print("  - Unit 48, Lesson 5: Game Development")
print("  - Unit 38, Lesson 5: HTTP Protocol")
print("  - Unit 40, Lesson 3: UDP Communication")
print("  - Unit 47, Lesson 3: Debugging Tools")
print("  - Unit 43, Lesson 6: Asynchronous I/O")
print("\nTotal questions: 125 (25 per lesson)")
print("="*70)
print("✅ Saved to cppCombined.js")
