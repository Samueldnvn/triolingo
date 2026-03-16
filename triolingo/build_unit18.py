#!/usr/bin/env python3
"""
Build Unit 18: Networking Basics
5 lessons with 25 questions each (125 total)
Heavy emphasis on code questions (~70% = 87.5 code questions)
"""
import json

print("🚀 Building C++ Unit 18: Networking Basics")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: Socket Programming Basics
# ============================================================================
lesson1_questions = [
    {"id": "cpp-18-1-1", "type": "typing", "question": "What is socket?", "correctAnswer": ["network endpoint", "communication endpoint"], "explanation": "Socket is network endpoint.", "xp": 5},
    {"id": "cpp-18-1-2", "type": "typing", "question": "What header for sockets?", "correctAnswer": ["<sys/socket.h>", "<socket.h>", "<winsock2.h>"], "explanation": "sys/socket.h on Unix.", "xp": 5},
    {"id": "cpp-18-1-3", "type": "typing", "question": "What is AF_INET?", "correctAnswer": ["IPv4 address family", "address family"], "explanation": "AF_INET for IPv4.", "xp": 5},
    {"id": "cpp-18-1-4", "type": "multiple", "question": "What is SOCK_STREAM?", "options": ["TCP", "UDP", "IPv4", "IPv6"], "correctAnswer": [0], "explanation": "SOCK_STREAM is TCP.", "xp": 5},
    {"id": "cpp-18-1-5", "type": "multiple", "question": "What is SOCK_DGRAM?", "options": ["UDP", "TCP", "Stream", "File"], "correctAnswer": [0], "explanation": "SOCK_DGRAM is UDP.", "xp": 5},
    {"id": "cpp-18-1-6", "type": "code", "question": "Create socket.", "correctAnswer": ["int sock = socket(AF_INET, SOCK_STREAM, 0);", "socket(AF_INET, SOCK_STREAM, IPPROTO_TCP)"],
        "explanation": "socket(domain, type, protocol)", "xp": 15},
    {"id": "cpp-18-1-7", "type": "code", "question": "Bind socket.", "correctAnswer": ["struct sockaddr_in addr;\naddr.sin_family = AF_INET;\naddr.sin_port = htons(8080);\naddr.sin_addr.s_addr = INADDR_ANY;\nbind(sock, (struct sockaddr*)&addr, sizeof(addr));", "bind()"],
        "explanation": "bind(sock, address, size)", "xp": 15},
    {"id": "cpp-18-1-8", "type": "code", "question": "Listen on socket.", "correctAnswer": ["listen(sock, 5);", "listen(sock, 128);"],
        "explanation": "listen(socket, backlog)", "xp": 15},
    {"id": "cpp-18-1-9", "type": "code", "question": "Accept connection.", "correctAnswer": ["int client = accept(sock, NULL, NULL);", "int conn = accept(sock, (struct sockaddr*)&client_addr, &addr_len);"],
        "explanation": "accept() returns client socket.", "xp": 15},
    {"id": "cpp-18-1-10", "type": "code", "question": "Connect to server.", "correctAnswer": ["connect(sock, (struct sockaddr*)&addr, sizeof(addr));", "connect()"],
        "explanation": "connect(sock, address, size)", "xp": 15},
    {"id": "cpp-18-1-11", "type": "code", "question": "htons function.", "correctAnswer": ["htons(port)", "htons(8080)"],
        "explanation": "htons converts to network byte order.", "xp": 15},
    {"id": "cpp-18-1-12", "type": "code", "question": "htonl function.", "correctAnswer": ["htonl(INADDR_ANY)", "htonl(IP)"],
        "explanation": "htonl converts long to network order.", "xp": 15},
    {"id": "cpp-18-1-13", "type": "code", "question": "Close socket.", "correctAnswer": ["close(sock);", "closesocket(sock);"],
        "explanation": "close() closes socket.", "xp": 15},
    {"id": "cpp-18-1-14", "type": "code", "question": "Send data.", "correctAnswer": ["send(sock, buffer, size, 0);", "send(client, msg, len, 0);"],
        "explanation": "send() sends data.", "xp": 15},
    {"id": "cpp-18-1-15", "type": "code", "question": "Receive data.", "correctAnswer": ["recv(sock, buffer, size, 0);", "recv(client, buf, len, 0);"],
        "explanation": "recv() receives data.", "xp": 15},
    {"id": "cpp-18-1-16", "type": "code", "question": "Set socket option.", "correctAnswer": ["int opt = 1;\nsetsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));", "setsockopt()"],
        "explanation": "setsockopt() sets options.", "xp": 15},
    {"id": "cpp-18-1-17", "type": "code", "question": "SO_REUSEADDR.", "correctAnswer": ["setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));", "reuse address option"],
        "explanation": "SO_REUSEADDR allows address reuse.", "xp": 15},
    {"id": "cpp-18-1-18", "type": "code", "question": "Check socket error.", "correctAnswer": ["if (sock < 0) { perror(\"socket\"); }", "if (sock == INVALID_SOCKET)"],
        "explanation": "Check socket() return value.", "xp": 15},
    {"id": "cpp-18-1-19", "type": "code", "question": "Shutdown socket.", "correctAnswer": ["shutdown(sock, SHUT_RDWR);", "shutdown(sock, SHUT_WR);"],
        "explanation": "shutdown() closes connection.", "xp": 15},
    {"id": "cpp-18-1-20", "type": "code", "question": "INET_ADDR_ANY.", "correctAnswer": ["addr.sin_addr.s_addr = INADDR_ANY;", "bind to all interfaces"],
        "explanation": "INADDR_ANY binds to all interfaces.", "xp": 15},
    {"id": "cpp-18-1-21", "type": "code", "question": "Get hostname.", "correctAnswer": ["char hostname[256];\ngethostname(hostname, sizeof(hostname));", "gethostname()"],
        "explanation": "gethostname() gets hostname.", "xp": 15},
    {"id": "cpp-18-1-22", "type": "code", "question": "Socket timeout.", "correctAnswer": ["struct timeval tv;\ntv.tv_sec = 5;\nsetsockopt(sock, SOL_SOCKET, SO_RCVTIMEO, &tv, sizeof(tv));", "SO_RCVTIMEO"],
        "explanation": "Set receive timeout.", "xp": 15},
    {"id": "cpp-18-1-23", "type": "code", "question": "Non-blocking socket.", "correctAnswer": ["int flags = fcntl(sock, F_GETFL, 0);\nfcntl(sock, F_SETFL, flags | O_NONBLOCK);", "O_NONBLOCK"],
        "explanation": "fcntl() for non-blocking.", "xp": 15},
    {"id": "cpp-18-1-24", "type": "code", "question": "getsockname.", "correctAnswer": ["struct sockaddr_in addr;\nsocklen_t len = sizeof(addr);\ngetsockname(sock, (struct sockaddr*)&addr, &len);", "getsockname()"],
        "explanation": "getsockname() gets local address.", "xp": 15},
    {"id": "cpp-18-1-25", "type": "code", "question": "getpeername.", "correctAnswer": ["struct sockaddr_in peer;\nsocklen_t len = sizeof(peer);\ngetpeername(sock, (struct sockaddr*)&peer, &len);", "getpeername()"],
        "explanation": "getpeername() gets peer address.", "xp": 15}
]

lesson1 = {
    "id": 91, "title": "Socket Programming Basics", "unitTitle": "18. Networking Basics", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Socket Programming Basics

Network communication with sockets.

## Creating a Socket

```cpp
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

// Create socket
int sock = socket(AF_INET, SOCK_STREAM, 0);
if (sock < 0) {
    perror("socket");
    return -1;
}
```

## Server

```cpp
struct sockaddr_in addr;
addr.sin_family = AF_INET;
addr.sin_port = htons(8080);
addr.sin_addr.s_addr = INADDR_ANY;

bind(sock, (struct sockaddr*)&addr, sizeof(addr));
listen(sock, 5);

int client = accept(sock, NULL, NULL);
```

## Client

```cpp
connect(sock, (struct sockaddr*)&addr, sizeof(addr));
send(sock, "Hello", 5, 0);
recv(sock, buffer, size, 0);
```
""",
    "questions": lesson1_questions
}

# ============================================================================
# LESSON 2: HTTP with C++
# ============================================================================
lesson2_questions = [
    {"id": "cpp-18-2-1", "type": "typing", "question": "What is HTTP?", "correctAnswer": ["HyperText Transfer Protocol", "web protocol"], "explanation": "HTTP is web protocol.", "xp": 5},
    {"id": "cpp-18-2-2", "type": "typing", "question": "What is GET request?", "correctAnswer": ["retrieve data", "fetch resource"], "explanation": "GET retrieves data.", "xp": 5},
    {"id": "cpp-18-2-3", "type": "typing", "question": "What is POST request?", "correctAnswer": ["send data", "submit data"], "explanation": "POST sends data.", "xp": 5},
    {"id": "cpp-18-2-4", "type": "multiple", "question": "Default HTTP port?", "options": ["80", "443", "8080", "21"], "correctAnswer": [0], "explanation": "Port 80 for HTTP.", "xp": 5},
    {"id": "cpp-18-2-5", "type": "multiple", "question": "HTTPS default port?", "options": ["443", "80", "8080", "21"], "correctAnswer": [0], "explanation": "Port 443 for HTTPS.", "xp": 5},
    {"id": "cpp-18-2-6", "type": "code", "question": "Simple HTTP GET request.", "correctAnswer": ["send(sock, \"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\", 37, 0);", "GET / HTTP/1.1"],
        "explanation": "HTTP GET request format.", "xp": 15},
    {"id": "cpp-18-2-7", "type": "code", "question": "HTTP POST request.", "correctAnswer": ["send(sock, \"POST /api HTTP/1.1\\r\\nHost: example.com\\r\\nContent-Length: 13\\r\\n\\r\\nHello, World!\", ...)", "POST request format"],
        "explanation": "POST with Content-Length.", "xp": 15},
    {"id": "cpp-18-2-8", "type": "code", "question": "Parse HTTP response.", "correctAnswer": ["// Read first line: HTTP/1.1 200 OK", "// Parse headers", "// Read body"],
        "explanation": "Parse status line and headers.", "xp": 15},
    {"id": "cpp-18-2-9", "type": "code", "question": "HTTP status code 200.", "correctAnswer": ["HTTP/1.1 200 OK", "200 OK"],
        "explanation": "200 OK for success.", "xp": 15},
    {"id": "cpp-18-2-10", "type": "code", "question": "HTTP status code 404.", "correctAnswer": ["HTTP/1.1 404 Not Found", "404 Not Found"],
        "explanation": "404 Not Found.", "xp": 15},
    {"id": "cpp-18-2-11", "type": "code", "question": "HTTP status code 500.", "correctAnswer": ["HTTP/1.1 500 Internal Server Error", "500 Internal Server Error"],
        "explanation": "500 for server error.", "xp": 15},
    {"id": "cpp-18-2-12", "type": "code", "question": "HTTP headers.", "correctAnswer": ["Content-Type: text/html", "Content-Length: 1234", "Host: example.com"],
        "explanation": "Header: value format.", "xp": 15},
    {"id": "cpp-18-2-13", "type": "code", "question": "User-Agent header.", "correctAnswer": ["User-Agent: MyClient/1.0", "User-Agent: Mozilla/5.0"],
        "explanation": "User-Agent identifies client.", "xp": 15},
    {"id": "cpp-18-2-14", "type": "code", "question": "Content-Type header.", "correctAnswer": ["Content-Type: application/json", "Content-Type: text/html"],
        "explanation": "Content-Type specifies data type.", "xp": 15},
    {"id": "cpp-18-2-15", "type": "code", "question": "HTTP/1.1 request line.", "correctAnswer": ["GET /path HTTP/1.1", "POST /api HTTP/1.1"],
        "explanation": "METHOD path HTTP/1.1", "xp": 15},
    {"id": "cpp-18-2-16", "type": "code", "question": "HTTP response line.", "correctAnswer": ["HTTP/1.1 200 OK", "HTTP/1.1 404 Not Found"],
        "explanation": "HTTP/1.1 CODE Message", "xp": 15},
    {"id": "cpp-18-2-17", "type": "code", "question": "HTTP request with JSON.", "correctAnswer": ["POST /api HTTP/1.1\\r\\nHost: api.com\\r\\nContent-Type: application/json\\r\\nContent-Length: 13\\r\\n\\r\\n{\"key\":123}", "JSON content"],
        "explanation": "Content-Type: application/json.", "xp": 15},
    {"id": "cpp-18-2-18", "type": "code", "question": "HTTP keep-alive.", "correctAnswer": ["Connection: keep-alive", "keep connection open"],
        "explanation": "Connection: keep-alive header.", "xp": 15},
    {"id": "cpp-18-2-19", "type": "code", "question": "HTTP authentication.", "correctAnswer": ["Authorization: Bearer token", "Authorization: Basic credentials"],
        "explanation": "Authorization header.", "xp": 15},
    {"id": "cpp-18-2-20", "type": "code", "question": "HTTP redirect.", "correctAnswer": ["HTTP/1.1 301 Moved Permanently\\r\\nLocation: /new-path", "302 Found"],
        "explanation": "3xx status codes redirect.", "xp": 15},
    {"id": "cpp-18-2-21", "type": "code", "question": "HTTP PUT request.", "correctAnswer": ["PUT /resource/1 HTTP/1.1", "PUT creates/updates resource"],
        "explanation": "PUT creates/updates resource.", "xp": 15},
    {"id": "cpp-18-2-22", "type": "code", "question": "HTTP DELETE request.", "correctAnswer": ["DELETE /resource/1 HTTP/1.1", "DELETE removes resource"],
        "explanation": "DELETE removes resource.", "xp": 15},
    {"id": "cpp-18-2-23", "type": "code", "question": "Read HTTP headers.", "correctAnswer": ["while (getline(&line, &len, file)) { if (line == \"\\r\\n\") break; parse_header(line); }", "read until blank line"],
        "explanation": "Headers end with blank line.", "xp": 15},
    {"id": "cpp-18-2-24", "type": "code", "question": "HTTP chunked encoding.", "correctAnswer": ["Transfer-Encoding: chunked", "chunked response format"],
        "explanation": "Transfer-Encoding: chunked.", "xp": 15},
    {"id": "cpp-18-2-25", "type": "code", "question": "HTTP/2 upgrade.", "correctAnswer": ["Upgrade: h2c", "HTTP/2 cleartext"],
        "explanation": "Upgrade header for HTTP/2.", "xp": 15}
]

lesson2 = {
    "id": 92, "title": "HTTP with C++", "unitTitle": "18. Networking Basics", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# HTTP with C++

Building HTTP clients and servers.

## HTTP Request

```cpp
const char* request =
    "GET / HTTP/1.1\r\n"
    "Host: example.com\r\n"
    "User-Agent: MyClient/1.0\r\n"
    "\r\n";

send(sock, request, strlen(request), 0);
```

## HTTP Response

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234

<html>...</html>
```

## POST Request

```cpp
const char* body = "{\"name\":\"John\"}";
char request[1024];
snprintf(request, sizeof(request),
    "POST /api HTTP/1.1\r\n"
    "Host: api.example.com\r\n"
    "Content-Type: application/json\r\n"
    "Content-Length: %zu\r\n"
    "\r\n%s",
    strlen(body), body);
```
""",
    "questions": lesson2_questions
}

# ============================================================================
# LESSON 3: Asynchronous I/O and Select
# ============================================================================
lesson3_questions = [
    {"id": "cpp-18-3-1", "type": "typing", "question": "What is select?", "correctAnswer": ["monitor file descriptors", "I/O multiplexing"], "explanation": "select monitors multiple sockets.", "xp": 5},
    {"id": "cpp-18-3-2", "type": "typing", "question": "What header for select?", "correctAnswer": ["<sys/select.h>", "<sys/types.h>", "<unistd.h>"], "explanation": "sys/select.h for select.", "xp": 5},
    {"id": "cpp-18-3-3", "type": "typing", "question": "What is fd_set?", "correctAnswer": ["file descriptor set", "socket set"], "explanation": "fd_set holds file descriptors.", "xp": 5},
    {"id": "cpp-18-3-4", "type": "multiple", "question": "What does FD_ZERO do?", "options": ["Clear fd_set", "Add fd", "Remove fd", "Check fd"], "correctAnswer": [0], "explanation": "FD_ZERO clears set.", "xp": 5},
    {"id": "cpp-18-3-5", "type": "multiple", "question": "What does FD_SET do?", "options": ["Add fd to set", "Remove fd", "Clear set", "Check fd"], "correctAnswer": [0], "explanation": "FD_SET adds descriptor.", "xp": 5},
    {"id": "cpp-18-3-6", "type": "code", "question": "Clear fd_set.", "correctAnswer": ["FD_ZERO(&read_fds);", "FD_ZERO(&write_fds);"],
        "explanation": "FD_ZERO(&set)", "xp": 15},
    {"id": "cpp-18-3-7", "type": "code", "question": "Add to fd_set.", "correctAnswer": ["FD_SET(sock, &read_fds);", "FD_SET(fd, &write_fds);"],
        "explanation": "FD_SET(fd, &set)", "xp": 15},
    {"id": "cpp-18-3-8", "type": "code", "question": "Check if fd in set.", "correctAnswer": ["if (FD_ISSET(sock, &read_fds))", "FD_ISSET(fd, &set)"],
        "explanation": "FD_ISSET(fd, &set)", "xp": 15},
    {"id": "cpp-18-3-9", "type": "code", "question": "Remove from fd_set.", "correctAnswer": ["FD_CLR(sock, &read_fds);", "FD_CLR(fd, &set);"],
        "explanation": "FD_CLR(fd, &set)", "xp": 15},
    {"id": "cpp-18-3-10", "type": "code", "question": "Use select.", "correctAnswer": ["int ready = select(max_fd + 1, &read_fds, NULL, NULL, NULL);", "select(max, read, write, except, timeout)"],
        "explanation": "select(nfds, readfds, writefds, exceptfds, timeout)", "xp": 15},
    {"id": "cpp-18-3-11", "type": "code", "question": "Select with timeout.", "correctAnswer": ["struct timeval tv;\ntv.tv_sec = 5;\ntv.tv_usec = 0;\nselect(max_fd + 1, &read_fds, NULL, NULL, &tv);", "timeval"],
        "explanation": "Set timeout for select.", "xp": 15},
    {"id": "cpp-18-3-12", "type": "code", "question": "Find max fd.", "correctAnswer": ["int max_fd = sock;", "max_fd = std::max(max_fd, new_fd);"],
        "explanation": "Track max file descriptor.", "xp": 15},
    {"id": "cpp-18-3-13", "type": "code", "question": "FD_SETSIZE.", "correctAnswer": ["if (sock >= FD_SETSIZE) { error }", "FD_SETSIZE is limit"],
        "explanation": "FD_SETSIZE is max descriptors.", "xp": 15},
    {"id": "cpp-18-3-14", "type": "code", "question": "Select for write ready.", "correctAnswer": ["select(max_fd + 1, NULL, &write_fds, NULL, NULL);", "write fds"],
        "explanation": "NULL for unused sets.", "xp": 15},
    {"id": "cpp-18-3-15", "type": "code", "question": "Select for exception.", "correctAnswer": ["select(max_fd + 1, NULL, NULL, &except_fds, NULL);", "exception fds"],
        "explanation": "Monitor for exceptions.", "xp": 15},
    {"id": "cpp-18-3-16", "type": "code", "question": "Select returns -1.", "correctAnswer": ["if (ready < 0) { perror(\"select\"); }", "error occurred"],
        "explanation": "-1 indicates error.", "xp": 15},
    {"id": "cpp-18-3-17", "type": "code", "question": "Select returns 0.", "correctAnswer": ["if (ready == 0) { /* timeout */ }", "timeout occurred"],
        "explanation": "0 indicates timeout.", "xp": 15},
    {"id": "cpp-18-3-18", "type": "code", "question": "Multiple clients with select.", "correctAnswer": ["FD_SET(server, &read_fds);\nfor (auto client : clients) FD_SET(client, &read_fds);", "manage multiple fds"],
        "explanation": "Add all sockets to fd_set.", "xp": 15},
    {"id": "cpp-18-3-19", "type": "code", "question": "Poll instead of select.", "correctAnswer": ["struct pollfd fds[MAX_FDS];\nfds[0].fd = sock;\nfds[0].events = POLLIN;\npoll(fds, MAX_FDS, timeout);", "poll()"],
        "explanation": "poll is alternative to select.", "xp": 15},
    {"id": "cpp-18-3-20", "type": "code", "question": "epoll on Linux.", "correctAnswer": ["int epoll_fd = epoll_create1(0);\nstruct epoll_event ev;\nev.events = EPOLLIN;\nepoll_ctl(epoll_fd, EPOLL_CTL_ADD, sock, &ev);", "epoll_create1"],
        "explanation": "epoll is efficient on Linux.", "xp": 15},
    {"id": "cpp-18-3-21", "type": "code", "question": "kqueue on BSD/macOS.", "correctAnswer": ["int kq = kqueue();\nstruct kevent change;\nEV_SET(&change, sock, EVFILT_READ, EV_ADD, 0, 0, NULL);", "kqueue"],
        "explanation": "kqueue on BSD systems.", "xp": 15},
    {"id": "cpp-18-3-22", "type": "code", "question": "IOCP on Windows.", "correctAnswer": ["HANDLE iocp = CreateIoCompletionPort(...);", "Windows async I/O"],
        "explanation": "IOCP for Windows async.", "xp": 15},
    {"id": "cpp-18-3-23", "type": "code", "question": "Non-blocking read.", "correctAnswer": ["ssize_t n = recv(sock, buf, size, 0);\nif (n < 0 && errno == EAGAIN) { /* try later */ }", "EAGAIN"],
        "explanation": "EAGAIN would block.", "xp": 15},
    {"id": "cpp-18-3-24", "type": "code", "question": "Reset fd_set before select.", "correctAnswer": ["FD_ZERO(&read_fds);\nFD_SET(sock, &read_fds);\nselect(max_fd + 1, &read_fds, NULL, NULL, NULL);", "reset each call"],
        "explanation": "Select modifies fd_set.", "xp": 15},
    {"id": "cpp-18-3-25", "type": "code", "question": "Accept new connection in select.", "correctAnswer": ["if (FD_ISSET(server, &read_fds)) { int client = accept(server, NULL, NULL); FD_SET(client, &read_fds); }", "check server fd"],
        "explanation": "Server fd becomes readable.", "xp": 15}
]

lesson3 = {
    "id": 93, "title": "Asynchronous I/O and Select", "unitTitle": "18. Networking Basics", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Asynchronous I/O and Select

Monitoring multiple sockets.

## Using select

```cpp
fd_set read_fds;
FD_ZERO(&read_fds);
FD_SET(server_sock, &read_fds);
FD_SET(client_sock, &read_fds);

int max_fd = std::max(server_sock, client_sock);
int ready = select(max_fd + 1, &read_fds, NULL, NULL, NULL);

if (FD_ISSET(server_sock, &read_fds)) {
    // New connection
    int client = accept(server_sock, NULL, NULL);
}

if (FD_ISSET(client_sock, &read_fds)) {
    // Data available
    recv(client_sock, buffer, size, 0);
}
```

## select Functions

- `FD_ZERO(&set)` - Clear set
- `FD_SET(fd, &set)` - Add fd
- `FD_CLR(fd, &set)` - Remove fd
- `FD_ISSET(fd, &set)` - Check if fd is in set
""",
    "questions": lesson3_questions
}

# ============================================================================
# LESSON 4: DNS Resolution
# ============================================================================
lesson4_questions = [
    {"id": "cpp-18-4-1", "type": "typing", "question": "What is DNS?", "correctAnswer": ["Domain Name System", "hostname to IP"], "explanation": "DNS resolves hostnames.", "xp": 5},
    {"id": "cpp-18-4-2", "type": "typing", "question": "What function resolves hostname?", "correctAnswer": ["getaddrinfo", "gethostbyname"], "explanation": "getaddrinfo resolves hostname.", "xp": 5},
    {"id": "cpp-18-4-3", "type": "typing", "question": "What header for getaddrinfo?", "correctAnswer": ["<netdb.h>", "<sys/socket.h>"], "explanation": "netdb.h for DNS.", "xp": 5},
    {"id": "cpp-18-4-4", "type": "multiple", "question": "getaddrinfo returns?", "options": ["addrinfo linked list", "single IP", "hostname", "port"], "correctAnswer": [0], "explanation": "Returns linked list of addrinfo.", "xp": 5},
    {"id": "cpp-18-4-5", "type": "multiple", "question": "Free addrinfo?", "options": ["freeaddrinfo", "free", "delete", "close"], "correctAnswer": [0], "explanation": "freeaddrinfo() frees memory.", "xp": 5},
    {"id": "cpp-18-4-6", "type": "code", "question": "Resolve hostname.", "correctAnswer": ["struct addrinfo hints = {}, *result;\nhints.ai_family = AF_INET;\nhints.ai_socktype = SOCK_STREAM;\ngetaddrinfo(\"example.com\", \"80\", &hints, &result);", "getaddrinfo()"],
        "explanation": "getaddrinfo(hostname, service, hints, result)", "xp": 15},
    {"id": "cpp-18-4-7", "type": "code", "question": "Free addrinfo.", "correctAnswer": ["freeaddrinfo(result);", "freeaddrinfo(res)"],
        "explanation": "freeaddrinfo(result)", "xp": 15},
    {"id": "cpp-18-4-8", "type": "code", "question": "Get IP from addrinfo.", "correctAnswer": ["struct sockaddr_in* addr = (struct sockaddr_in*)result->ai_addr;\ninet_ntop(AF_INET, &addr->sin_addr, ip, sizeof(ip));", "inet_ntop()"],
        "explanation": "Extract sockaddr from addrinfo.", "xp": 15},
    {"id": "cpp-18-4-9", "type": "code", "question": "inet_ntop.", "correctAnswer": ["inet_ntop(AF_INET, &addr->sin_addr, ip_str, INET_ADDRSTRLEN);", "convert binary to string"],
        "explanation": "inet_ntop() converts IP to string.", "xp": 15},
    {"id": "cpp-18-4-10", "type": "code", "question": "inet_pton.", "correctAnswer": ["inet_pton(AF_INET, \"192.168.1.1\", &addr->sin_addr);", "convert string to binary"],
        "explanation": "inet_pton() converts string to IP.", "xp": 15},
    {"id": "cpp-18-4-11", "type": "code", "question": "Resolve IPv4 only.", "correctAnswer": ["hints.ai_family = AF_INET;", "AF_INET for IPv4"],
        "explanation": "Set ai_family to AF_INET.", "xp": 15},
    {"id": "cpp-18-4-12", "type": "code", "question": "Resolve IPv6.", "correctAnswer": ["hints.ai_family = AF_INET6;", "AF_INET6 for IPv6"],
        "explanation": "Set ai_family to AF_INET6.", "xp": 15},
    {"id": "cpp-18-4-13", "type": "code", "question": "Resolve any address family.", "correctAnswer": ["hints.ai_family = AF_UNSPEC;", "AF_UNSPEC for any"],
        "explanation": "AF_UNSPEC allows any.", "xp": 15},
    {"id": "cpp-18-4-14", "type": "code", "question": "Get hostname from IP.", "correctAnswer": ["getnameinfo(addr, addrlen, host, hostlen, NULL, 0, NI_NAMEREQD);", "reverse DNS"],
        "explanation": "getnameinfo() for reverse DNS.", "xp": 15},
    {"id": "cpp-18-4-15", "type": "code", "question": "Check getaddrinfo error.", "correctAnswer": ["if (status != 0) { fprintf(stderr, \"getaddrinfo: %s\\n\", gai_strerror(status)); }", "gai_strerror()"],
        "explanation": "gai_strerror() for error string.", "xp": 15},
    {"id": "cpp-18-4-16", "type": "code", "question": "AI_PASSIVE.", "correctAnswer": ["hints.ai_flags |= AI_PASSIVE;", "for bind()"],
        "explanation": "AI_PASSIVE for server.", "xp": 15},
    {"id": "cpp-18-4-17", "type": "code", "question": "gethostbyname (deprecated).", "correctAnswer": ["struct hostent* he = gethostbyname(\"example.com\");", "legacy function"],
        "explanation": "gethostbyname() is deprecated.", "xp": 15},
    {"id": "cpp-18-4-18", "type": "code", "question": "Iterate addrinfo list.", "correctAnswer": ["for (struct addrinfo* p = result; p != NULL; p = p->ai_next) { /* use p */ }", "ai_next"],
        "explanation": "Follow ai_next pointer.", "xp": 15},
    {"id": "cpp-18-4-19", "type": "code", "question": "Connect with addrinfo.", "correctAnswer": ["for (struct addrinfo* p = result; p != NULL; p = p->ai_next) { int sock = socket(p->ai_family, p->ai_socktype, p->ai_protocol); if (connect(sock, p->ai_addr, p->ai_addrlen) == 0) break; }", "try each address"],
        "explanation": "Try each address until success.", "xp": 15},
    {"id": "cpp-18-4-20", "type": "code", "question": "inet_addr.", "correctAnswer": ["in_addr_t addr = inet_addr(\"192.168.1.1\");", "string to IP (deprecated)"],
        "explanation": "inet_addr() converts string.", "xp": 15},
    {"id": "cpp-18-4-21", "type": "code", "question": "inet_ntoa.", "correctAnswer": ["char* ip = inet_ntoa(addr->sin_addr);", "binary to string (deprecated)"],
        "explanation": "inet_ntoa() is deprecated.", "xp": 15},
    {"id": "cpp-18-4-22", "type": "code", "question": "NI_NUMERICHOST.", "correctAnswer": ["getnameinfo(addr, len, host, hostlen, NULL, 0, NI_NUMERICHOST);", "numeric hostname"],
        "explanation": "NI_NUMERICHOST returns numeric IP.", "xp": 15},
    {"id": "cpp-18-4-23", "type": "code", "question": "AI_CANONNAME.", "correctAnswer": ["hints.ai_flags |= AI_CANONNAME;", "canonical name"],
        "explanation": "AI_CANONNAME returns canonical name.", "xp": 15},
    {"id": "cpp-18-4-24", "type": "code", "question": "Set port in hints.", "correctAnswer": ["getaddrinfo(\"example.com\", \"8080\", &hints, &result);", "service parameter"],
        "explanation": "Service parameter for port.", "xp": 15},
    {"id": "cpp-18-4-25", "type": "code", "question": "NULL service.", "correctAnswer": ["getaddrinfo(\"example.com\", NULL, &hints, &result);", "no port specified"],
        "explanation": "NULL for unspecified port.", "xp": 15}
]

lesson4 = {
    "id": 94, "title": "DNS Resolution", "unitTitle": "18. Networking Basics", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# DNS Resolution

Resolving hostnames to IP addresses.

## getaddrinfo

```cpp
#include <netdb.h>
#include <sys/socket.h>

struct addrinfo hints = {};
hints.ai_family = AF_INET;       // IPv4
hints.ai_socktype = SOCK_STREAM; // TCP

struct addrinfo* result;
int status = getaddrinfo("example.com", "80", &hints, &result);

if (status != 0) {
    fprintf(stderr, "getaddrinfo: %s\n", gai_strerror(status));
    return -1;
}

// Use result
int sock = socket(result->ai_family, result->ai_socktype, result->ai_protocol);
connect(sock, result->ai_addr, result->ai_addrlen);

freeaddrinfo(result);
```

## IP Conversion

```cpp
// Binary to string
char ip_str[INET_ADDRSTRLEN];
inet_ntop(AF_INET, &addr->sin_addr, ip_str, sizeof(ip_str));

// String to binary
inet_pton(AF_INET, "192.168.1.1", &addr->sin_addr);
```
""",
    "questions": lesson4_questions
}

# ============================================================================
# LESSON 5: JSON and Web APIs
# ============================================================================
lesson5_questions = [
    {"id": "cpp-18-5-1", "type": "typing", "question": "What is JSON?", "correctAnswer": ["JavaScript Object Notation", "data format"], "explanation": "JSON is data format.", "xp": 5},
    {"id": "cpp-18-5-2", "type": "typing", "question": "What is REST API?", "correctAnswer": ["Representational State Transfer", "web API"], "explanation": "REST is web API style.", "xp": 5},
    {"id": "cpp-18-5-3", "type": "typing", "question": "What is nlohmann/json?", "correctAnswer": ["JSON library", "nlohmann JSON"], "explanation": "nlohmann/json is popular library.", "xp": 5},
    {"id": "cpp-18-5-4", "type": "multiple", "question": "JSON data types?", "options": ["Object, Array, String, Number, Boolean, Null", "Only strings", "Only numbers", "Only objects"], "correctAnswer": [0], "explanation": "6 JSON data types.", "xp": 5},
    {"id": "cpp-18-5-5", "type": "multiple", "question": "HTTP method for REST create?", "options": ["POST", "GET", "PUT", "DELETE"], "correctAnswer": [0], "explanation": "POST creates resource.", "xp": 5},
    {"id": "cpp-18-5-6", "type": "code", "question": "Parse JSON string.", "correctAnswer": ["#include <nlohmann/json.hpp>\nusing json = nlohmann::json;\njson j = json::parse(\"{\\\"key\\\": \\\"value\\\"}\");", "json::parse()"],
        "explanation": "json::parse() parses JSON.", "xp": 15},
    {"id": "cpp-18-5-7", "type": "code", "question": "Create JSON object.", "correctAnswer": ["json j;\nj[\"key\"] = \"value\";\nj[\"number\"] = 42;", "j[\"key\"] = value"],
        "explanation": "Assign to json object.", "xp": 15},
    {"id": "cpp-18-5-8", "type": "code", "question": "Get JSON value.", "correctAnswer": ["std::string value = j[\"key\"];\nint num = j[\"number\"];", "j[key]"],
        "explanation": "Access with key.", "xp": 15},
    {"id": "cpp-18-5-9", "type": "code", "question": "Serialize to JSON.", "correctAnswer": ["std::string json_str = j.dump();", "j.dump()"],
        "explanation": "dump() serializes JSON.", "xp": 15},
    {"id": "cpp-18-5-10", "type": "code", "question": "Pretty print JSON.", "correctAnswer": ["std::string pretty = j.dump(4);", "j.dump(indent)"],
        "explanation": "dump(indent) formats JSON.", "xp": 15},
    {"id": "cpp-18-5-11", "type": "code", "question": "JSON array.", "correctAnswer": ["json arr = json::array();\narr.push_back(1);\narr.push_back(\"two\");", "json::array()"],
        "explanation": "json::array() creates array.", "xp": 15},
    {"id": "cpp-18-5-12", "type": "code", "question": "Iterate JSON object.", "correctAnswer": ["for (auto& [key, value] : j.items()) { std::cout << key << \": \" << value << std::endl; }", "j.items()"],
        "explanation": "j.items() for iteration.", "xp": 15},
    {"id": "cpp-18-5-13", "type": "code", "question": "Check if key exists.", "correctAnswer": ["if (j.contains(\"key\"))", "if (j.count(\"key\") > 0)"],
        "explanation": "contains() or count().", "xp": 15},
    {"id": "cpp-18-5-14", "type": "code", "question": "HTTP GET with JSON response.", "correctAnswer": ["send(sock, \"GET /api HTTP/1.1\\r\\nHost: api.com\\r\\nAccept: application/json\\r\\n\\r\\n\", ...)", "Accept: application/json"],
        "explanation": "Accept header for JSON.", "xp": 15},
    {"id": "cpp-18-5-15", "type": "code", "question": "HTTP POST JSON body.", "correctAnswer": ["const char* body = \"{\\\"name\\\":\\\"John\\\"}\";\nsend(sock, body, strlen(body), 0);", "send JSON body"],
        "explanation": "Send JSON as body.", "xp": 15},
    {"id": "cpp-18-5-16", "type": "code", "question": "Parse API JSON response.", "correctAnswer": ["// Read HTTP body\nstd::string body = read_http_body(sock);\njson response = json::parse(body);", "parse response"],
        "explanation": "Parse body as JSON.", "xp": 15},
    {"id": "cpp-18-5-17", "type": "code", "question": "REST GET request.", "correctAnswer": ["GET /resource/1 HTTP/1.1", "GET retrieves data"],
        "explanation": "GET for retrieval.", "xp": 15},
    {"id": "cpp-18-5-18", "type": "code", "question": "REST POST request.", "correctAnswer": ["POST /resource HTTP/1.1\\r\\nContent-Type: application/json", "POST creates resource"],
        "explanation": "POST creates resource.", "xp": 15},
    {"id": "cpp-18-5-19", "type": "code", "question": "REST PUT request.", "correctAnswer": ["PUT /resource/1 HTTP/1.1", "PUT updates resource"],
        "explanation": "PUT updates resource.", "xp": 15},
    {"id": "cpp-18-5-20", "type": "code", "question": "REST DELETE request.", "correctAnswer": ["DELETE /resource/1 HTTP/1.1", "DELETE removes resource"],
        "explanation": "DELETE removes resource.", "xp": 15},
    {"id": "cpp-18-5-21", "type": "code", "question": "JSON null value.", "correctAnswer": ["j[\"key\"] = nullptr;", "json null"],
        "explanation": "nullptr for JSON null.", "xp": 15},
    {"id": "cpp-18-5-22", "type": "code", "question": "JSON boolean.", "correctAnswer": ["j[\"active\"] = true;", "j[\"flag\"] = false;"],
        "explanation": "bool becomes JSON boolean.", "xp": 15},
    {"id": "cpp-18-5-23", "type": "code", "question": "Parse JSON from file.", "correctAnswer": ["std::ifstream f(\"data.json\");\njson j = json::parse(f);", "parse from file"],
        "explanation": "json::parse(file)", "xp": 15},
    {"id": "cpp-18-5-24", "type": "code", "question": "Write JSON to file.", "correctAnswer": ["std::ofstream o(\"data.json\");\no << j.dump(4);", "dump to file"],
        "explanation": "Write dump() to file.", "xp": 15},
    {"id": "cpp-18-5-25", "type": "code", "question": "Handle JSON parse error.", "correctAnswer": ["try { json j = json::parse(str); } catch (json::parse_error& e) { std::cerr << e.what(); }", "json::parse_error"],
        "explanation": "Catch parse_error exception.", "xp": 15}
]

lesson5 = {
    "id": 95, "title": "JSON and Web APIs", "unitTitle": "18. Networking Basics", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# JSON and Web APIs

Working with JSON and REST APIs.

## nlohmann/json

```cpp
#include <nlohmann/json.hpp>
using json = nlohmann::json;

// Parse JSON
json j = json::parse("{\"name\":\"John\", \"age\":30}");

// Access values
std::string name = j["name"];
int age = j["age"];

// Create JSON
json data;
data["name"] = "Jane";
data["age"] = 25;
data["active"] = true;

// Serialize
std::string json_str = data.dump(4); // Pretty print
```

## REST API Client

```cpp
// GET request
send(sock, "GET /api/users/1 HTTP/1.1\r\n"
          "Host: api.example.com\r\n"
          "Accept: application/json\r\n"
          "\r\n");

// POST JSON
const char* body = "{\"name\":\"John\"}";
send(sock, "POST /api/users HTTP/1.1\r\n"
          "Host: api.example.com\r\n"
          "Content-Type: application/json\r\n"
          "Content-Length: 17\r\n"
          "\r\n");
send(sock, body, strlen(body), 0);
```
""",
    "questions": lesson5_questions
}

# Update lesson titles in data to match networking topics
data['units'][17]['lessons'][0]['title'] = lesson1['title']
data['units'][17]['lessons'][1]['title'] = lesson2['title']
data['units'][17]['lessons'][2]['title'] = lesson3['title']
data['units'][17]['lessons'][3]['title'] = lesson4['title']
data['units'][17]['lessons'][4]['title'] = lesson5['title']

# Add all lessons to data
data['units'][17]['lessons'][0].update(lesson1)
print("✅ Lesson 1: Socket Programming Basics - 25 questions (20 code)")

data['units'][17]['lessons'][1].update(lesson2)
print("✅ Lesson 2: HTTP with C++ - 25 questions (20 code)")

data['units'][17]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Asynchronous I/O and Select - 25 questions (20 code)")

data['units'][17]['lessons'][3].update(lesson4)
print("✅ Lesson 4: DNS Resolution - 25 questions (20 code)")

data['units'][17]['lessons'][4].update(lesson5)
print("✅ Lesson 5: JSON and Web APIs - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 18 Complete: All 5 lessons with 25 questions each (125 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~88 (70%)")
print("   - Type-in questions: ~25 (20%)")
print("   - Multiple-choice: ~12 (10%)")