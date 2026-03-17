#!/usr/bin/env python3
"""
Rebuild Top 10 Worst Lessons - Batch 5 (Lessons 21-25)
"""
import json
import os

print("🚀 BATCH 5: Lessons 21-25")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 38, Lesson 3: UDP Programming (Note: we did Lesson 5 in batch 4, this is different)
lesson38_3 = {
    "id": "cpp-U38-L3",
    "title": "UDP Programming",
    "unitTitle": "38. C++ Networking",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# UDP Programming

Practical UDP programming with C++ sockets.

## Core Concepts

UDP provides connectionless, unreliable datagram communication. Essential for real-time applications.

## UDP Server Architecture

1. Create UDP socket
2. Bind to address and port
3. Receive datagrams with recvfrom
4. Process requests
5. Send responses with sendto

## UDP Client Architecture

1. Create UDP socket
2. Send datagrams with sendto
3. Receive responses with recvfrom

## Common Applications

- DNS servers
- Real-time gaming
- Video streaming
- IoT communication
- VOIP

## Key Differences from TCP

- No connection establishment
- No guaranteed delivery
- No ordering
- Lower overhead
- Faster transmission

## Best Practices

1. Handle packet loss gracefully
2. Implement checksums for data integrity
3. Use sequence numbers for ordering
4. Set appropriate timeouts
5. Implement application-level reliability if needed
""",
    "questions": [
        {"id": "cpp-38-3-1", "type": "typing", "question": "What is the main characteristic of UDP?", "correctAnswer": ["connectionless and unreliable", "no connection", "unreliable"], "explanation": "UDP is connectionless and unreliable, providing fast but not guaranteed delivery.", "xp": 5},
        {"id": "cpp-38-3-2", "type": "typing", "question": "Which function sends UDP datagrams?", "correctAnswer": ["sendto", "send datagram", "UDP send"], "explanation": "sendto() sends datagrams to a specific destination address and port.", "xp": 5},
        {"id": "cpp-38-3-3", "type": "typing", "question": "Which function receives UDP datagrams?", "correctAnswer": ["recvfrom", "receive datagram", "UDP receive"], "explanation": "recvfrom() receives datagrams and provides the sender's address.", "xp": 5},
        {"id": "cpp-38-3-4", "type": "multiple", "question": "Which socket type is used for UDP?", "options": ["SOCK_DGRAM", "SOCK_STREAM", "SOCK_RAW", "SOCK_SEQPACKET"], "correctAnswer": [0], "explanation": "SOCK_DGRAM creates a datagram socket for UDP communication.", "xp": 5},
        {"id": "cpp-38-3-5", "type": "code", "question": "Create UDP socket in C++.", "correctAnswer": ["socket(AF_INET, SOCK_DGRAM, 0)", "UDP socket creation", "socket call"], "explanation": "socket(AF_INET, SOCK_DGRAM, 0) creates a UDP socket for IPv4.", "xp": 15},
        {"id": "cpp-38-3-6", "type": "code", "question": "Bind UDP socket to address.", "correctAnswer": ["bind(sockfd, &addr, sizeof(addr))", "bind socket", "assign address"], "explanation": "bind() assigns a local address and port to the UDP socket.", "xp": 15},
        {"id": "cpp-38-3-7", "type": "code", "question": "Send data with UDP.", "correctAnswer": ["sendto(sockfd, data, len, 0, &dest, dest_len)", "sendto", "send datagram"], "explanation": "sendto() sends data to a specific destination address via UDP.", "xp": 15},
        {"id": "cpp-38-3-8", "type": "code", "question": "Receive data with UDP.", "correctAnswer": ["recvfrom(sockfd, buf, len, 0, &src, &src_len)", "recvfrom", "receive datagram"], "explanation": "recvfrom() receives data and captures the sender's address.", "xp": 15},
        {"id": "cpp-38-3-9", "type": "typing", "question": "Does UDP guarantee message delivery?", "correctAnswer": ["no, delivery is not guaranteed", "unreliable", "best effort"], "explanation": "UDP does not guarantee message delivery; packets can be lost.", "xp": 5},
        {"id": "cpp-38-3-10", "type": "typing", "question": "Does UDP maintain message order?", "correctAnswer": ["no, order is not guaranteed", "unordered", "may be out of order"], "explanation": "UDP packets can arrive in any order; the protocol doesn't guarantee sequencing.", "xp": 5},
        {"id": "cpp-38-3-11", "type": "code", "question": "Implement UDP echo server.", "correctAnswer": ["recvfrom then sendto back", "echo server", "UDP echo"], "explanation": "Receive datagram with recvfrom, then send it back to sender with sendto.", "xp": 15},
        {"id": "cpp-38-3-12", "type": "code", "question": "Implement UDP echo client.", "correctAnswer": ["sendto then recvfrom", "echo client", "test UDP"], "explanation": "Send datagram with sendto, receive response with recvfrom.", "xp": 15},
        {"id": "cpp-38-3-13", "type": "typing", "question": "What is a common use case for UDP?", "correctAnswer": ["DNS queries", "real-time applications", "streaming"], "explanation": "DNS uses UDP because queries are small and speed is important.", "xp": 5},
        {"id": "cpp-38-3-14", "type": "code", "question": "Set timeout for UDP receive.", "correctAnswer": ["setsockopt SO_RCVTIMEO", "timeout", "receive timeout"], "explanation": "Use setsockopt() with SO_RCVTIMEO to set timeout for recvfrom().", "xp": 15},
        {"id": "cpp-38-3-15", "type": "typing", "question": "How to handle packet loss in UDP?", "correctAnswer": ["implement retransmission", "ACK/NACK", "application-level reliability"], "explanation": "Implement acknowledgments and retransmissions for reliable UDP if needed.", "xp": 5},
        {"id": "cpp-38-3-16", "type": "code", "question": "Get sender address from recvfrom.", "correctAnswer": ["recvfrom fills sockaddr structure", "sender info", "peer address"], "explanation": "recvfrom() fills the sockaddr structure with the sender's address.", "xp": 15},
        {"id": "cpp-38-3-17", "type": "typing", "question": "What is multicast in UDP?", "correctAnswer": ["send to multiple recipients simultaneously", "one-to-many", "multicast group"], "explanation": "Multicast allows sending one datagram to multiple recipients.", "xp": 5},
        {"id": "cpp-38-3-18", "type": "code", "question": "Join multicast group.", "correctAnswer": ["IP_ADD_MEMBERSHIP", "join multicast", "multicast group"], "explanation": "Use setsockopt() with IP_ADD_MEMBERSHIP to join a multicast group.", "xp": 15},
        {"id": "cpp-38-3-19", "type": "typing", "question": "What is broadcast in UDP?", "correctAnswer": ["send to all hosts on network", "one-to-all", "broadcast address"], "explanation": "Broadcast sends a datagram to all hosts on the network.", "xp": 5},
        {"id": "cpp-38-3-20", "type": "code", "question": "Send broadcast datagram.", "correctAnswer": ["sendto to broadcast address", "255.255.255.255", "broadcast"], "explanation": "Use sendto() with broadcast address to send to all hosts.", "xp": 15},
        {"id": "cpp-38-3-21", "type": "code", "question": "Handle fragmented UDP packets.", "correctAnswer": ["reassemble fragments", "fragmentation", "IP fragments"], "explanation": "Handle IP fragmentation by reassembling or limiting packet size.", "xp": 15},
        {"id": "cpp-38-3-22", "type": "code", "question": "Implement sequence numbers.", "correctAnswer": ["add sequence to packet", "track order", "reorder"], "explanation": "Add sequence number to each packet to track and reorder at receiver.", "xp": 15},
        {"id": "cpp-38-3-23", "type": "code", "question": "Calculate UDP checksum.", "correctAnswer": ["one's complement sum", "checksum calculation", "integrity"], "explanation": "Calculate one's complement sum of pseudo-header, UDP header, and data.", "xp": 15},
        {"id": "cpp-38-3-24", "type": "code", "question": "Handle multiple UDP clients.", "correctAnswer": ["track client addresses", "multiple peers", "client map"], "explanation": "Maintain map of client addresses to handle multiple concurrent clients.", "xp": 15},
        {"id": "cpp-38-3-25", "type": "code", "question": "Implement reliable UDP with ACKs.", "correctAnswer": ["acknowledgments", "retransmission", "reliable protocol"], "explanation": "Implement acknowledgments and retransmissions for reliable UDP.", "xp": 15}
    ]
}

data['units'][37]['lessons'][2].update(lesson38_3)
print("✅ Unit 38, Lesson 3: UDP Programming - 25 detailed questions")

print("\n" + "="*70)
print("⚠️  Batch 5 will continue with more lessons...")
print("Note: Unit 20, Lesson 12 (Debugging Mixed Code) already done in Batch 1")
print("Note: Unit 40, Lesson 1 (Socket Basics) already done in Batch 2")
print("Moving to next undon lessons from the problematic list...")
