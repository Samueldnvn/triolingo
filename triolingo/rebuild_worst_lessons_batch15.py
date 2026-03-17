#!/usr/bin/env python3
"""
Rebuild Batch 15 - Continue systematic rebuild
"""
import json
import os

print("🚀 BATCH 15: Continuing systematic rebuild")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 21, Lesson 6: Bit Arrays
lesson21_6 = {
    "id": "cpp-U21-L6",
    "title": "Bit Arrays",
    "unitTitle": "21. Advanced Bit Manipulation",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Bit Arrays

Efficient storage of boolean values using bits.

## Core Concept

Bit arrays pack multiple boolean values into single integer, saving memory.

## Advantages

- **Memory efficient**: 8 bools per byte
- **Cache friendly**: Compact storage
- **Fast bit operations**: Bitwise operators

## Basic Operations

```cpp
// Set bit
flags |= (1 << n);

// Clear bit
flags &= ~(1 << n);

// Toggle bit
flags ^= (1 << n);

// Check bit
if (flags & (1 << n)) { /* bit is set */ }
```

## std::bitset

C++ standard library bit array container.

```cpp
std::bitset<8> flags;
flags.set(3);        // Set bit 3
flags.reset(2);      // Clear bit 2
flags.flip(1);       // Toggle bit 1
bool bit = flags.test(0);  // Check bit 0
```

## Bit Array Uses

- **Flags**: Boolean option storage
- **Sets**: Small element sets
- **Masks**: Bit filtering operations
- **Compression**: Space-efficient storage

## Best Practices

1. Use std::bitset when possible
2. Document bit meanings
3. Use named constants for bit positions
4. Consider bitsets for many boolean flags
5. Use vectors of bytes for large bit arrays

## std::vector<bool>

Specialization for bit storage, but has some limitations.
""",
    "questions": [
        {"id": "cpp-21-6-1", "type": "typing", "question": "What is bit array?", "correctAnswer": ["efficient storage of boolean values using bits"], "explanation": "Bit arrays pack multiple bools into single integer.", "xp": 5},
        {"id": "cpp-21-6-2", "type": "multiple", "question": "What is main advantage of bit array?", "options": ["Memory efficiency", "Faster access", "Easier to read", "Thread safety"], "correctAnswer": [0], "explanation": "Bit arrays are memory efficient by storing 8 bools per byte.", "xp": 5},
        {"id": "cpp-21-6-3", "type": "code", "question": "Set bit at position n.", "correctAnswer": ["flags |= (1 << n)"], "explanation": "OR with shifted bit to set specific bit.", "xp": 15},
        {"id": "cpp-21-6-4", "type": "code", "question": "Clear bit at position n.", "correctAnswer": ["flags &= ~(1 << n)"], "explanation": "AND with inverted bit to clear specific bit.", "xp": 15},
        {"id": "cpp-21-6-5", "type": "code", "question": "Toggle bit at position n.", "correctAnswer": ["flags ^= (1 << n)"], "explanation": "XOR with shifted bit to toggle specific bit.", "xp": 15},
        {"id": "cpp-21-6-6", "type": "code", "question": "Check if bit is set.", "correctAnswer": ["if (flags & (1 << n))"], "explanation": "AND with shifted bit to check if bit is set.", "xp": 15},
        {"id": "cpp-21-6-7", "type": "code", "question": "Create std::bitset.", "correctAnswer": ["std::bitset<8> flags"], "explanation": "Create bitset with specified number of bits.", "xp": 15},
        {"id": "cpp-21-6-8", "type": "code", "question": "Set bit in std::bitset.", "correctAnswer": ["flags.set(3)"], "explanation": "set() method sets specified bit.", "xp": 15},
        {"id": "cpp-21-6-9", "type": "code", "question": "Reset bit in std::bitset.", "correctAnswer": ["flags.reset(2)"], "explanation": "reset() method clears specified bit.", "xp": 15},
        {"id": "cpp-21-6-10", "type": "code", "question": "Flip bit in std::bitset.", "correctAnswer": ["flags.flip(1)"], "explanation": "flip() method toggles specified bit.", "xp": 15},
        {"id": "cpp-21-6-11", "type": "code", "question": "Test bit in std::bitset.", "correctAnswer": ["flags.test(0)"], "explanation": "test() method returns true if bit is set.", "xp": 15},
        {"id": "cpp-21-6-12", "type": "code", "question": "Count set bits.", "correctAnswer": ["flags.count()"], "explanation": "count() returns number of set bits.", "xp": 15},
        {"id": "cpp-21-6-13", "type": "code", "question": "Check if any bit is set.", "correctAnswer": ["flags.any()"], "explanation": "any() returns true if any bit is set.", "xp": 15},
        {"id": "cpp-21-6-14", "type": "code", "question": "Check if all bits are set.", "correctAnswer": ["flags.all()"], "explanation": "all() returns true if all bits are set.", "xp": 15},
        {"id": "cpp-21-6-15", "type": "code", "question": "Check if no bits are set.", "correctAnswer": ["flags.none()"], "explanation": "none() returns true if no bits are set.", "xp": 15},
        {"id": "cpp-21-6-16", "type": "typing", "question": "How many bools per byte in bit array?", "correctAnswer": ["eight booleans per byte", "8 bools", "8"], "explanation": "Bit array stores 8 boolean values in one byte.", "xp": 5},
        {"id": "cpp-21-6-17", "type": "code", "question": "Print std::bitset as binary.", "correctAnswer": ["std::cout << flags"], "explanation": "Bitset outputs as binary string when printed.", "xp": 15},
        {"id": "cpp-21-6-18", "type": "code", "question": "Convert bitset to string.", "correctAnswer": ["flags.to_string()"], "explanation": "to_string() converts bitset to string.", "xp": 15},
        {"id": "cpp-21-6-19", "type": "code", "question": "Convert bitset to unsigned long.", "correctAnswer": ["flags.to_ulong()"], "explanation": "to_ulong() converts bitset to unsigned long.", "xp": 15},
        {"id": "cpp-21-6-20", "type": "typing", "question": "What is bit mask?", "correctAnswer": ["bit pattern used for filtering", "mask", "filter"], "explanation": "Bit mask is pattern used for bit filtering operations.", "xp": 5},
        {"id": "cpp-21-6-21", "type": "code", "question": "Use bit array for flags.", "correctAnswer": ["store multiple boolean flags efficiently", "flags", "boolean options"], "explanation": "Bit arrays efficiently store multiple boolean flags.", "xp": 15},
        {"id": "cpp-21-6-22", "type": "code", "question": "Define bit position constants.", "correctAnswer": ["const int FLAG_A = 0"], "explanation": "Use constants for bit position documentation.", "xp": 15},
        {"id": "cpp-21-6-23", "type": "typing", "question": "What is std::vector<bool>?", "correctAnswer": ["specialization for bit storage", "vector<bool>", "bit vector"], "explanation": "std::vector<bool> is specialization for bit storage.", "xp": 5},
        {"id": "cpp-21-6-24", "type": "code", "question": "Large bit array storage.", "correctAnswer": ["use vector of bytes or vector<uint8_t>", "large array", "many bits"], "explanation": "Use vector of bytes for large bit arrays.", "xp": 15},
        {"id": "cpp-21-6-25", "type": "typing", "question": "When to use bit arrays?", "correctAnswer": ["need efficient boolean storage", "memory efficiency", "many flags"], "explanation": "Use bit arrays when memory efficiency is important.", "xp": 5}
    ]
}

data['units'][20]['lessons'][5].update(lesson21_6)
print("✅ Unit 21, Lesson 6: Bit Arrays - 25 detailed questions")

# Unit 38, Lesson 1: Network Basics
lesson38_1 = {
    "id": "cpp-U38-L1",
    "title": "Network Basics",
    "unitTitle": "38. Network Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Network Basics

Fundamentals of network programming and communication.

## Core Concepts

- **IP Address**: Unique device identifier on network
- **Port**: Logical communication channel (0-65535)
- **Protocol**: Rules for communication
- **Socket**: Endpoint for sending/receiving data
- **Client-Server**: Request-response communication model

## IP Addresses

### IPv4
- Format: 192.168.1.1
- 32-bit address
- 4 billion addresses

### IPv6
- Format: 2001:0db8:85a3::8a2e:0370:7334
- 128-bit address
- Virtually unlimited addresses

## Port Numbers

- **0-1023**: Well-known (system services)
- **1024-49151**: Registered
- **49152-65535**: Dynamic (ephemeral)

## Common Protocols

- **HTTP/HTTPS**: Web traffic
- **FTP**: File transfer
- **SMTP**: Email sending
- **POP3/IMAP**: Email receiving
- **SSH**: Secure shell
- **TCP**: Reliable transport
- **UDP**: Fast transport

## Sockets

Sockets provide API for network communication.

```cpp
// Create socket
int sockfd = socket(AF_INET, SOCK_STREAM, 0);
```

## Best Practices

1. Always handle errors
2. Validate addresses and ports
3. Use appropriate protocol for use case
4. Implement timeouts
5. Close sockets properly
6. Use encryption for sensitive data
""",
    "questions": [
        {"id": "cpp-38-1-1", "type": "typing", "question": "What is IP address?", "correctAnswer": ["unique device identifier on network"], "explanation": "IP address uniquely identifies device on network.", "xp": 5},
        {"id": "cpp-38-1-2", "type": "multiple", "question": "What is port?", "options": ["logical communication channel", "Physical connector", "Network cable", "Protocol"], "correctAnswer": [0], "explanation": "Port is logical channel for communication.", "xp": 5},
        {"id": "cpp-38-1-3", "type": "typing", "question": "What is socket?", "correctAnswer": ["endpoint for sending and receiving data"], "explanation": "Socket is endpoint for network communication.", "xp": 5},
        {"id": "cpp-38-1-4", "type": "typing", "question": "What is client-server model?", "correctAnswer": ["request-response communication model"], "explanation": "Client-server model uses request-response pattern.", "xp": 5},
        {"id": "cpp-38-1-5", "type": "code", "question": "Create socket.", "correctAnswer": ["socket(AF_INET, SOCK_STREAM, 0)"], "explanation": "socket() creates new socket endpoint.", "xp": 15},
        {"id": "cpp-38-1-6", "type": "code", "question": "Bind socket to address.", "correctAnswer": ["bind(sock, (sockaddr*)&addr, sizeof(addr))"], "explanation": "bind() assigns address to socket.", "xp": 15},
        {"id": "cpp-38-1-7", "type": "typing", "question": "What is IPv4 format?", "correctAnswer": ["192.168.1.1 format"], "explanation": "IPv4 uses dotted decimal notation.", "xp": 5},
        {"id": "cpp-38-1-8", "type": "typing", "question": "What is IPv4 address size?", "correctAnswer": ["32-bit address", "4 bytes", "32 bits"], "explanation": "IPv4 uses 32-bit addresses.", "xp": 5},
        {"id": "cpp-38-1-9", "type": "typing", "question": "What is IPv6 address size?", "correctAnswer": ["128-bit address", "16 bytes", "128 bits"], "explanation": "IPv6 uses 128-bit addresses.", "xp": 5},
        {"id": "cpp-38-1-10", "type": "typing", "question": "What is well-known port range?", "correctAnswer": ["ports 0-1023", "well-known", "system ports"], "explanation": "Well-known ports are 0-1023.", "xp": 5},
        {"id": "cpp-38-1-11", "type": "typing", "question": "What is HTTP port?", "correctAnswer": ["port 80", "HTTP", "web port"], "explanation": "HTTP uses port 80 by default.", "xp": 5},
        {"id": "cpp-38-1-12", "type": "typing", "question": "What is HTTPS port?", "correctAnswer": ["port 443", "HTTPS", "secure web port"], "explanation": "HTTPS uses port 443 by default.", "xp": 5},
        {"id": "cpp-38-1-13", "type": "typing", "question": "What is FTP port?", "correctAnswer": ["port 21", "FTP", "file transfer"], "explanation": "FTP uses port 21 by default.", "xp": 5},
        {"id": "cpp-38-1-14", "type": "typing", "question": "What is SSH port?", "correctAnswer": ["port 22", "SSH", "secure shell"], "explanation": "SSH uses port 22 by default.", "xp": 5},
        {"id": "cpp-38-1-15", "type": "typing", "question": "What is ephemeral port range?", "correctAnswer": ["ports 49152-65535", "dynamic ports", "ephemeral"], "explanation": "Ephemeral ports are 49152-65535.", "xp": 5},
        {"id": "cpp-38-1-16", "type": "typing", "question": "What is TCP?", "correctAnswer": ["reliable transport protocol"], "explanation": "TCP provides reliable data transport.", "xp": 5},
        {"id": "cpp-38-1-17", "type": "typing", "question": "What is UDP?", "correctAnswer": ["fast unreliable transport protocol"], "explanation": "UDP provides fast but unreliable transport.", "xp": 5},
        {"id": "cpp-38-1-18", "type": "code", "question": "Close socket.", "correctAnswer": ["close(sock)"], "explanation": "close() closes socket and releases resources.", "xp": 15},
        {"id": "cpp-38-1-19", "type": "code", "question": "Handle socket errors.", "correctAnswer": ["check return value == -1"], "explanation": "Socket functions return -1 on error.", "xp": 15},
        {"id": "cpp-38-1-20", "type": "typing", "question": "Why validate network input?", "correctAnswer": ["prevent injection attacks"], "explanation": "Validate input to prevent security issues.", "xp": 5},
        {"id": "cpp-38-1-21", "type": "code", "question": "Set socket timeout.", "correctAnswer": ["SO_RCVTIMEO or SO_SNDTIMEO"], "explanation": "Set timeout options for socket operations.", "xp": 15},
        {"id": "cpp-38-1-22", "type": "typing", "question": "What is DNS?", "correctAnswer": ["Domain Name System", "domain names", "name resolution"], "explanation": "DNS resolves domain names to IP addresses.", "xp": 5},
        {"id": "cpp-38-1-23", "type": "code", "question": "Resolve hostname to IP.", "correctAnswer": ["gethostbyname"], "explanation": "gethostbyname resolves hostname to IP address.", "xp": 15},
        {"id": "cpp-38-1-24", "type": "typing", "question": "What is network protocol?", "correctAnswer": ["rules for communication", "protocol", "communication rules"], "explanation": "Protocol defines rules for network communication.", "xp": 5},
        {"id": "cpp-38-1-25", "type": "code", "question": "Use IPv6 address.", "correctAnswer": ["AF_INET6", "IPv6", "socket family"], "explanation": "Use AF_INET6 for IPv6 addresses.", "xp": 15}
    ]
}

data['units'][37]['lessons'][0].update(lesson38_1)
print("✅ Unit 38, Lesson 1: Network Basics - 25 detailed questions")

# Unit 43, Lesson 2: Sockets
lesson43_2 = {
    "id": "cpp-U43-L2",
    "title": "Sockets",
    "unitTitle": "43. Network Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Sockets

Communication endpoints for network programming.

## Socket Types

- **SOCK_STREAM**: TCP, connection-oriented, reliable
- **SOCK_DGRAM**: UDP, connectionless, unreliable
- **SOCK_RAW**: Raw IP packets

## Address Families

- **AF_INET**: IPv4 addresses
- **AF_INET6**: IPv6 addresses

## Socket Lifecycle

```cpp
// Server
socket() -> bind() -> listen() -> accept() -> recv()/send() -> close()

// Client
socket() -> connect() -> send()/recv() -> close()
```

## Socket Functions

### socket()
Creates new socket endpoint.

```cpp
int socket(int domain, int type, int protocol);
```

### bind()
Assigns address to socket.

```cpp
int bind(int sockfd, const sockaddr *addr, socklen_t addrlen);
```

### listen()
Marks socket as passive for accepting connections.

```cpp
int listen(int sockfd, int backlog);
```

### accept()
Accepts incoming connection.

```cpp
int accept(int sockfd, sockaddr *addr, socklen_t *addrlen);
```

### connect()
Establishes connection to server.

```cpp
int connect(int sockfd, const sockaddr *addr, socklen_t addrlen);
```

### send()/recv()
Transfers data.

```cpp
ssize_t send(int sockfd, const void *buf, size_t len, int flags);
ssize_t recv(int sockfd, void *buf, size_t len, int flags);
```

### close()
Closes socket.

```cpp
int close(int sockfd);
```

## Address Structure

```cpp
struct sockaddr_in {
    short sin_family;    // AF_INET
    unsigned short sin_port;  // Port
    struct in_addr sin_addr;  // IP address
};
```

## Best Practices

1. Always check return values
2. Handle EINTR gracefully
3. Use appropriate timeouts
4. Close sockets properly
5. Validate addresses
6. Handle partial sends/recvs
""",
    "questions": [
        {"id": "cpp-43-2-1", "type": "typing", "question": "What is socket?", "correctAnswer": ["communication endpoint for network programming"], "explanation": "Socket is endpoint for sending and receiving data.", "xp": 5},
        {"id": "cpp-43-2-2", "type": "multiple", "question": "What socket type for TCP?", "options": ["SOCK_STREAM", "SOCK_DGRAM", "SOCK_RAW", "SOCK_SEQPACKET"], "correctAnswer": [0], "explanation": "SOCK_STREAM is used for TCP connections.", "xp": 5},
        {"id": "cpp-43-2-3", "type": "multiple", "question": "What socket type for UDP?", "options": ["SOCK_DGRAM", "SOCK_STREAM", "SOCK_RAW", "SOCK_SEQPACKET"], "correctAnswer": [0], "explanation": "SOCK_DGRAM is used for UDP datagrams.", "xp": 5},
        {"id": "cpp-43-2-4", "type": "code", "question": "Create TCP socket.", "correctAnswer": ["socket(AF_INET, SOCK_STREAM, 0)"], "explanation": "Use SOCK_STREAM for TCP socket.", "xp": 15},
        {"id": "cpp-43-2-5", "type": "code", "question": "Create UDP socket.", "correctAnswer": ["socket(AF_INET, SOCK_DGRAM, 0)"], "explanation": "Use SOCK_DGRAM for UDP socket.", "xp": 15},
        {"id": "cpp-43-2-6", "type": "code", "question": "Create IPv6 socket.", "correctAnswer": ["socket(AF_INET6, SOCK_STREAM, 0)"], "explanation": "Use AF_INET6 for IPv6 addresses.", "xp": 15},
        {"id": "cpp-43-2-7", "type": "code", "question": "Bind socket to address.", "correctAnswer": ["bind(sock, (sockaddr*)&addr, sizeof(addr))"], "explanation": "bind() assigns address to socket.", "xp": 15},
        {"id": "cpp-43-2-8", "type": "code", "question": "Listen for connections.", "correctAnswer": ["listen(sock, backlog)"], "explanation": "listen() marks socket as accepting connections.", "xp": 15},
        {"id": "cpp-43-2-9", "type": "code", "question": "Accept incoming connection.", "correctAnswer": ["accept(sock, (sockaddr*)&addr, &len)"], "explanation": "accept() accepts incoming connection.", "xp": 15},
        {"id": "cpp-43-2-10", "type": "code", "question": "Connect to server.", "correctAnswer": ["connect(sock, (sockaddr*)&addr, sizeof(addr))"], "explanation": "connect() establishes connection.", "xp": 15},
        {"id": "cpp-43-2-11", "type": "code", "question": "Send data.", "correctAnswer": ["send(sock, buffer, size, 0)"], "explanation": "send() transmits data over socket.", "xp": 15},
        {"id": "cpp-43-2-12", "type": "code", "question": "Receive data.", "correctAnswer": ["recv(sock, buffer, size, 0)"], "explanation": "recv() receives data from socket.", "xp": 15},
        {"id": "cpp-43-2-13", "type": "code", "question": "Close socket.", "correctAnswer": ["close(sock)"], "explanation": "close() closes socket.", "xp": 15},
        {"id": "cpp-43-2-14", "type": "code", "question": "Handle socket error.", "correctAnswer": ["check return value == -1"], "explanation": "Socket functions return -1 on error.", "xp": 15},
        {"id": "cpp-43-2-15", "type": "typing", "question": "What is address family?", "correctAnswer": ["address type like IPv4 or IPv6"], "explanation": "Address family specifies address type.", "xp": 5},
        {"id": "cpp-43-2-16", "type": "code", "question": "Set socket option.", "correctAnswer": ["setsockopt(sock, level, optname, optval, optlen)"], "explanation": "setsockopt sets socket options.", "xp": 15},
        {"id": "cpp-43-2-17", "type": "code", "question": "Get socket option.", "correctAnswer": ["getsockopt(sock, level, optname, optval, optlen)"], "explanation": "getsockopt retrieves socket options.", "xp": 15},
        {"id": "cpp-43-2-18", "type": "code", "question": "Set socket timeout.", "correctAnswer": ["SO_RCVTIMEO or SO_SNDTIMEO"], "explanation": "Set timeout for receive or send.", "xp": 15},
        {"id": "cpp-43-2-19", "type": "code", "question": "Enable address reuse.", "correctAnswer": ["SO_REUSEADDR"], "explanation": "SO_REUSEADDR allows address reuse.", "xp": 15},
        {"id": "cpp-43-2-20", "type": "typing", "question": "What is EINTR?", "correctAnswer": ["interrupted system call"], "explanation": "EINTR indicates interrupted system call.", "xp": 5},
        {"id": "cpp-43-2-21", "type": "code", "question": "Handle partial send.", "correctAnswer": ["loop until all data sent", "partial send", "send loop"], "explanation": "Handle partial sends with loop.", "xp": 15},
        {"id": "cpp-43-2-22", "type": "code", "question": "Handle partial recv.", "correctAnswer": ["loop until all data received", "partial recv", "recv loop"], "explanation": "Handle partial recvs with loop.", "xp": 15},
        {"id": "cpp-43-2-23", "type": "typing", "question": "What is backlog parameter?", "correctAnswer": ["maximum pending connections"], "explanation": "backlog specifies maximum pending connections.", "xp": 5},
        {"id": "cpp-43-2-24", "type": "code", "question": "Get peer address.", "correctAnswer": ["getpeername"], "explanation": "getpeername gets connected peer address.", "xp": 15},
        {"id": "cpp-43-2-25", "type": "code", "question": "Get socket address.", "correctAnswer": ["getsockname"], "explanation": "getsockname gets socket's local address.", "xp": 15}
    ]
}

data['units'][42]['lessons'][1].update(lesson43_2)
print("✅ Unit 43, Lesson 2: Sockets - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 15 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 21, Lesson 6: Bit Arrays")
print("  - Unit 38, Lesson 1: Network Basics")
print("  - Unit 43, Lesson 2: Sockets")
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
