#!/usr/bin/env python3
"""
Rebuild Top 10 Worst Lessons - Batch 2 Part 2 (Lessons 9-10)
"""
import json
import os

print("🚀 BATCH 2 PART 2: Lessons 9-10")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 40, Lesson 2: TCP Client-Server
lesson40_2 = {
    "id": "cpp-U40-L2",
    "title": "TCP Client-Server",
    "unitTitle": "40. Socket Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# TCP Client-Server

Building TCP client-server applications in C++.

## Core Concept

TCP provides reliable, connection-oriented communication between clients and servers.

## Server Architecture

1. Create socket
2. Bind to address and port
3. Listen for connections
4. Accept incoming connections
5. Handle client requests
6. Close connections

## Client Architecture

1. Create socket
2. Connect to server
3. Send requests
4. Receive responses
5. Close connection

## Key Functions

```cpp
// Server
socket() -> bind() -> listen() -> accept()
send(), recv()

// Client
socket() -> connect()
send(), recv()
```

## Best Practices

1. Handle multiple clients (fork, threads, select)
2. Use proper buffer sizes
3. Handle partial sends/receives
4. Implement timeouts
5. Clean up resources properly
""",
    "questions": [
        {"id": "cpp-40-2-1", "type": "typing", "question": "What is the main difference between TCP server and client?", "correctAnswer": ["server listens and accepts, client connects", "active vs passive", "initiation"], "explanation": "Servers listen for incoming connections, while clients initiate connections to servers.", "xp": 5},
        {"id": "cpp-40-2-2", "type": "typing", "question": "What does the listen() function do on a TCP server?", "correctAnswer": ["prepares socket to accept incoming connections", "listen mode", "passive mode"], "explanation": "listen() marks the socket as passive, ready to accept incoming connection requests.", "xp": 5},
        {"id": "cpp-40-2-3", "type": "typing", "question": "What does the accept() function return?", "correctAnswer": ["new socket for the client connection", "client socket", "connection socket"], "explanation": "accept() returns a new socket descriptor specifically for the accepted client connection.", "xp": 5},
        {"id": "cpp-40-2-4", "type": "typing", "question": "What is the purpose of the connect() function?", "correctAnswer": ["initiate connection to server", "connect client", "establish connection"], "explanation": "connect() initiates a TCP connection from the client to a server address and port.", "xp": 5},
        {"id": "cpp-40-2-5", "type": "typing", "question": "What does send() do?", "correctAnswer": ["send data over socket", "transmit data", "write to socket"], "explanation": "send() transmits data over an established socket connection.", "xp": 5},
        {"id": "cpp-40-2-6", "type": "typing", "question": "What does recv() do?", "correctAnswer": ["receive data from socket", "read from socket", "get data"], "explanation": "recv() receives data from an established socket connection.", "xp": 5},
        {"id": "cpp-40-2-7", "type": "code", "question": "Create TCP server socket.", "correctAnswer": ["socket(AF_INET, SOCK_STREAM, 0)", "TCP socket", "SOCK_STREAM"], "explanation": "socket(AF_INET, SOCK_STREAM, 0) creates a TCP socket for IPv4.", "xp": 15},
        {"id": "cpp-40-2-8", "type": "code", "question": "Bind server to address and port.", "correctAnswer": ["bind(sockfd, &addr, sizeof(addr))", "bind socket", "assign address"], "explanation": "bind() assigns the specified address and port to the server socket.", "xp": 15},
        {"id": "cpp-40-2-9", "type": "code", "question": "Configure server to listen for connections.", "correctAnswer": ["listen(sockfd, backlog)", "listen", "passive socket"], "explanation": "listen() prepares the socket to accept incoming connections with specified backlog.", "xp": 15},
        {"id": "cpp-40-2-10", "type": "code", "question": "Accept incoming client connection.", "correctAnswer": ["client_sock = accept(sockfd, &client_addr, &addr_len)", "accept connection", "wait for client"], "explanation": "accept() blocks until a connection arrives and returns a new socket for that connection.", "xp": 15},
        {"id": "cpp-40-2-11", "type": "code", "question": "Create TCP client socket and connect.", "correctAnswer": ["socket(), then connect()", "client connection", "connect to server"], "explanation": "Create socket with socket(), then use connect() to establish connection to server.", "xp": 15},
        {"id": "cpp-40-2-12", "type": "code", "question": "Send data from server to client.", "correctAnswer": ["send(client_sock, data, size, 0)", "send data", "transmit"], "explanation": "send() transmits data over the client socket from server to client.", "xp": 15},
        {"id": "cpp-40-2-13", "type": "code", "question": "Send data from client to server.", "correctAnswer": ["send(sockfd, data, size, 0)", "send request", "client to server"], "explanation": "send() transmits data from client socket to the connected server.", "xp": 15},
        {"id": "cpp-40-2-14", "type": "code", "question": "Receive data from server on client.", "correctAnswer": ["recv(sockfd, buffer, size, 0)", "receive data", "get response"], "explanation": "recv() receives data from the server into the specified buffer.", "xp": 15},
        {"id": "cpp-40-2-15", "type": "code", "question": "Receive data from client on server.", "correctAnswer": ["recv(client_sock, buffer, size, 0)", "receive request", "get client data"], "explanation": "recv() receives data from the client socket into the specified buffer.", "xp": 15},
        {"id": "cpp-40-2-16", "type": "typing", "question": "How to handle multiple clients simultaneously?", "correctAnswer": ["fork, threads, or select/multiplexing", "concurrency", "multiple connections"], "explanation": "Use fork, threads, or select/poll to handle multiple clients concurrently.", "xp": 5},
        {"id": "cpp-40-2-17", "type": "code", "question": "Handle partial send/recv calls.", "correctAnswer": ["loop until all data sent/received", "partial transmission", "handle incomplete"], "explanation": "Loop send/recv until all specified bytes are transmitted or an error occurs.", "xp": 15},
        {"id": "cpp-40-2-18", "type": "code", "question": "Set socket timeout for recv().", "correctAnswer": ["setsockopt SO_RCVTIMEO", "timeout option", "receive timeout"], "explanation": "Use setsockopt() with SO_RCVTIMEO to set timeout for receive operations.", "xp": 15},
        {"id": "cpp-40-2-19", "type": "code", "question": "Get client address from accept().", "correctAnswer": ["accept returns client address in sockaddr", "client info", "peer address"], "explanation": "accept() fills the sockaddr structure with the client's address information.", "xp": 15},
        {"id": "cpp-40-2-20", "type": "code", "question": "Close client connection properly.", "correctAnswer": ["close(client_sock)", "shutdown", "cleanup"], "explanation": "close() releases the client socket resources and terminates the connection.", "xp": 15},
        {"id": "cpp-40-2-21", "type": "typing", "question": "What is connection backlog?", "correctAnswer": ["maximum pending connections queue", "connection queue", "pending requests"], "explanation": "Backlog specifies the maximum number of pending connections waiting to be accepted.", "xp": 5},
        {"id": "cpp-40-2-22", "type": "code", "question": "Implement echo server.", "correctAnswer": ["receive and send back same data", "echo", "reflect data"], "explanation": "Receive data from client and send the same data back to the client.", "xp": 15},
        {"id": "cpp-40-2-23", "type": "code", "question": "Implement echo client.", "correctAnswer": ["send data, receive response", "echo client", "test connection"], "explanation": "Send data to server and receive the echoed response.", "xp": 15},
        {"id": "cpp-40-2-24", "type": "code", "question": "Handle connection errors gracefully.", "correctAnswer": ["check return values, log errors", "error handling", "graceful failure"], "explanation": "Check socket function return values and handle errors with appropriate logging and cleanup.", "xp": 15},
        {"id": "cpp-40-2-25", "type": "code", "question": "Get server local address.", "correctAnswer": ["getsockname", "local address", "bound address"], "explanation": "getsockname() retrieves the local address to which the socket is bound.", "xp": 15}
    ]
}

data['units'][39]['lessons'][1].update(lesson40_2)
print("✅ Unit 40, Lesson 2: TCP Client-Server - 25 detailed questions")

# Unit 43, Lesson 5: UDP Socket
lesson43_5 = {
    "id": "cpp-U43-L5",
    "title": "UDP Socket",
    "unitTitle": "43. C++ Networking",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# UDP Socket Programming

Connectionless, unreliable datagram communication with UDP.

## Core Concept

UDP (User Datagram Protocol) provides fast, lightweight communication without connection overhead.

## UDP vs TCP

- **UDP**: No connection, unreliable, unordered, no congestion control
- **TCP**: Connection-oriented, reliable, ordered, flow control

## Key Functions

```cpp
// Create UDP socket
int sockfd = socket(AF_INET, SOCK_DGRAM, 0);

// Send datagram
sendto(sockfd, data, size, 0, &addr, addr_len);

// Receive datagram
recvfrom(sockfd, buffer, size, 0, &from_addr, &addr_len);
```

## Use Cases

- DNS queries
- Streaming media
- Real-time gaming
- IoT communications
- Where speed > reliability

## Best Practices

1. Handle packet loss gracefully
2. Implement sequence numbers if ordering matters
3. Add checksums for data integrity
4. Use timeouts
""",
    "questions": [
        {"id": "cpp-43-5-1", "type": "typing", "question": "What is UDP?", "correctAnswer": ["User Datagram Protocol, connectionless transport", "unreliable protocol", "datagram protocol"], "explanation": "UDP is a connectionless, unreliable transport protocol that sends datagrams without establishing connections.", "xp": 5},
        {"id": "cpp-43-5-2", "type": "multiple", "question": "What is the main difference between UDP and TCP?", "options": ["UDP is connectionless, TCP is connection-oriented", "UDP is faster", "UDP has checksum"], "correctAnswer": [0], "explanation": "UDP doesn't establish connections, while TCP requires connection establishment before data transfer.", "xp": 5},
        {"id": "cpp-43-5-3", "type": "typing", "question": "Does UDP guarantee message delivery?", "correctAnswer": ["no, delivery is not guaranteed", "unreliable", "best effort"], "explanation": "UDP does not guarantee delivery; packets can be lost without notification.", "xp": 5},
        {"id": "cpp-43-5-4", "type": "typing", "question": "Does UDP maintain message order?", "correctAnswer": ["no, order is not guaranteed", "unordered", "may arrive out of order"], "explanation": "UDP packets can arrive in any order; the protocol doesn't guarantee sequencing.", "xp": 5},
        {"id": "cpp-43-5-5", "type": "typing", "question": "Why use UDP over TCP?", "correctAnswer": ["faster, lower latency, less overhead", "speed", "performance"], "explanation": "UDP has lower overhead and latency, making it faster than TCP for applications where speed is critical.", "xp": 5},
        {"id": "cpp-43-5-6", "type": "typing", "question": "What socket type is used for UDP?", "correctAnswer": ["SOCK_DGRAM", "datagram", "UDP socket type"], "explanation": "SOCK_DGRAM creates a socket for datagram-based communication (UDP).", "xp": 5},
        {"id": "cpp-43-5-7", "type": "typing", "question": "What does sendto() do?", "correctAnswer": ["send datagram to specific address", "send UDP packet", "transmit datagram"], "explanation": "sendto() sends a datagram to a specific destination address and port.", "xp": 5},
        {"id": "cpp-43-5-8", "type": "typing", "question": "What does recvfrom() do?", "correctAnswer": ["receive datagram and sender address", "receive UDP packet", "get datagram"], "explanation": "recvfrom() receives a datagram and fills in the sender's address information.", "xp": 5},
        {"id": "cpp-43-5-9", "type": "code", "question": "Create UDP socket.", "correctAnswer": ["socket(AF_INET, SOCK_DGRAM, 0)", "UDP socket", "SOCK_DGRAM"], "explanation": "socket(AF_INET, SOCK_DGRAM, 0) creates a UDP socket for IPv4.", "xp": 15},
        {"id": "cpp-43-5-10", "type": "code", "question": "Send UDP datagram.", "correctAnswer": ["sendto(sockfd, data, size, 0, &addr, addr_len)", "sendto", "send datagram"], "explanation": "sendto() sends data to a specific destination address and port via UDP.", "xp": 15},
        {"id": "cpp-43-5-11", "type": "code", "question": "Receive UDP datagram.", "correctAnswer": ["recvfrom(sockfd, buffer, size, 0, &from_addr, &addr_len)", "recvfrom", "receive datagram"], "explanation": "recvfrom() receives a UDP datagram and provides the sender's address.", "xp": 15},
        {"id": "cpp-43-5-12", "type": "code", "question": "Bind UDP socket to address.", "correctAnswer": ["bind(sockfd, &addr, sizeof(addr))", "bind UDP", "assign address"], "explanation": "bind() assigns a local address and port to the UDP socket for receiving datagrams.", "xp": 15},
        {"id": "cpp-43-5-13", "type": "typing", "question": "Does UDP need connect() like TCP?", "correctAnswer": ["no, connectionless protocol", "no connect needed", "different model"], "explanation": "UDP doesn't establish connections; you send datagrams directly to destinations.", "xp": 5},
        {"id": "cpp-43-5-14", "type": "typing", "question": "What is a common use case for UDP?", "correctAnswer": ["DNS queries", "streaming", "real-time applications"], "explanation": "DNS uses UDP because queries are small and speed is important.", "xp": 5},
        {"id": "cpp-43-5-15", "type": "code", "question": "Implement UDP echo server.", "correctAnswer": ["receive with recvfrom, send back with sendto", "echo server", "reflect datagrams"], "explanation": "Receive datagram, then send the same datagram back to the sender's address.", "xp": 15},
        {"id": "cpp-43-5-16", "type": "code", "question": "Implement UDP echo client.", "correctAnswer": ["sendto to server, recvfrom response", "echo client", "test UDP"], "explanation": "Send datagram to server and receive the echoed response.", "xp": 15},
        {"id": "cpp-43-5-17", "type": "typing", "question": "How to handle packet loss in UDP?", "correctAnswer": ["implement retransmission, use sequence numbers", "application-level reliability", "error handling"], "explanation": "Implement application-level mechanisms like acknowledgments and retransmissions if reliability is needed.", "xp": 5},
        {"id": "cpp-43-5-18", "type": "code", "question": "Implement timeout for UDP receive.", "correctAnswer": ["setsockopt SO_RCVTIMEO", "timeout", "receive timeout"], "explanation": "Use setsockopt() with SO_RCVTIMEO to set timeout for recvfrom() operations.", "xp": 15},
        {"id": "cpp-43-5-19", "type": "code", "question": "Get sender address from recvfrom().", "correctAnswer": ["recvfrom fills sockaddr structure", "sender info", "peer address"], "explanation": "recvfrom() fills the sockaddr structure with the sender's address and port.", "xp": 15},
        {"id": "cpp-43-5-20", "type": "typing", "question": "What is multicast in UDP?", "correctAnswer": ["send to multiple recipients simultaneously", "one-to-many", "multicast group"], "explanation": "Multicast allows sending one datagram to multiple recipients who have joined a multicast group.", "xp": 5},
        {"id": "cpp-43-5-21", "type": "code", "question": "Implement simple DNS query client.", "correctAnswer": ["send DNS packet to port 53", "DNS query", "UDP to DNS server"], "explanation": "Send a properly formatted DNS query packet to DNS server on port 53 via UDP.", "xp": 15},
        {"id": "cpp-43-5-22", "type": "typing", "question": "What is broadcast in UDP?", "correctAnswer": ["send to all hosts on network", "one-to-all", "broadcast address"], "explanation": "Broadcast sends a datagram to all hosts on the local network using the broadcast address.", "xp": 5},
        {"id": "cpp-43-5-23", "type": "code", "question": "Set up multicast UDP socket.", "correctAnswer": ["IP_ADD_MEMBERSHIP", "join multicast group", "multicast"], "explanation": "Use setsockopt() with IP_ADD_MEMBERSHIP to join a multicast group.", "xp": 15},
        {"id": "cpp-43-5-24", "type": "code", "question": "Calculate UDP checksum.", "correctAnswer": ["one's complement sum", "checksum calculation", "integrity check"], "explanation": "UDP checksum is calculated using one's complement sum of the pseudo-header and data.", "xp": 15},
        {"id": "cpp-43-5-25", "type": "code", "question": "Handle fragmented UDP packets.", "correctAnswer": ["reassemble fragments", "fragmentation", "IP fragmentation"], "explanation": "Handle IP fragmentation by reassembling fragments or limiting packet size to avoid fragmentation.", "xp": 15}
    ]
}

data['units'][42]['lessons'][4].update(lesson43_5)
print("✅ Unit 43, Lesson 5: UDP Socket - 25 detailed questions")

# Write final
output_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(output_path, 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n" + "="*70)
print("✅ BATCH 2 COMPLETE: 5 lessons rebuilt")
print("="*70)
print("Lessons completed:")
print("  - Unit 40, Lesson 1: Socket Basics")
print("  - Unit 48, Lesson 2: CLI Applications")
print("  - Unit 48, Lesson 7: Machine Learning")
print("  - Unit 40, Lesson 2: TCP Client-Server")
print("  - Unit 43, Lesson 5: UDP Socket")
print("\nTotal questions: 125 (25 per lesson)")
print("="*70)
print("✅ Saved to cppCombined.js")
