#!/usr/bin/env python3
"""
Rebuild Top 10 Worst Lessons - Batch 2 (Lessons 6-10)
"""
import json
import os

print("🚀 BATCH 2: Lessons 6-10")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 40, Lesson 1: Socket Basics
lesson40_1 = {
    "id": "cpp-U40-L1",
    "title": "Socket Basics",
    "unitTitle": "40. Socket Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Socket Basics

Fundamentals of network programming with sockets in C++.

## Core Concept

Sockets are endpoints for sending and receiving data across a network. They provide a standardized interface for network communication.

## Socket Types

- **SOCK_STREAM**: Connection-oriented (TCP)
- **SOCK_DGRAM**: Connectionless (UDP)
- **SOCK_RAW**: Raw protocol access

## Key Functions

```cpp
#include <sys/socket.h>

int socket(int domain, int type, int protocol);
int bind(int sockfd, const sockaddr* addr, socklen_t addrlen);
int listen(int sockfd, int backlog);
int accept(int sockfd, sockaddr* addr, socklen_t* addrlen);
int connect(int sockfd, const sockaddr* addr, socklen_t addrlen);
```

## Address Families

- **AF_INET**: IPv4
- **AF_INET6**: IPv6
- **AF_UNIX**: Unix domain sockets

## Best Practices

1. Always check return values for errors
2. Close sockets when done
3. Handle network failures gracefully
4. Use proper buffer sizes
""",
    "questions": [
        {"id": "cpp-40-1-1", "type": "typing", "question": "What is a socket in network programming?", "correctAnswer": ["endpoint for network communication", "network interface", "communication channel"], "explanation": "A socket is an endpoint for sending and receiving data across a network, providing a standard API.", "xp": 5},
        {"id": "cpp-40-1-2", "type": "multiple", "question": "What socket type is used for TCP connections?", "options": ["SOCK_STREAM", "SOCK_DGRAM", "SOCK_RAW", "SOCK_SEQPACKET"], "correctAnswer": [0], "explanation": "SOCK_STREAM provides connection-oriented, reliable byte stream communication (TCP).", "xp": 5},
        {"id": "cpp-40-1-3", "type": "multiple", "question": "What socket type is used for UDP communication?", "options": ["SOCK_STREAM", "SOCK_DGRAM", "SOCK_RAW", "SOCK_PACKET"], "correctAnswer": [1], "explanation": "SOCK_DGRAM provides connectionless, unreliable datagram communication (UDP).", "xp": 5},
        {"id": "cpp-40-1-4", "type": "typing", "question": "What does the socket() function create?", "correctAnswer": ["new socket endpoint", "socket descriptor", "communication endpoint"], "explanation": "socket() creates a new socket endpoint and returns a file descriptor for it.", "xp": 5},
        {"id": "cpp-40-1-5", "type": "typing", "question": "What is the purpose of the bind() function?", "correctAnswer": ["assign address and port to socket", "bind to address", "assign local address"], "explanation": "bind() assigns a local address and port to a socket, making it accessible to remote connections.", "xp": 5},
        {"id": "cpp-40-1-6", "type": "typing", "question": "What does the listen() function do?", "correctAnswer": ["prepare socket for incoming connections", "listen for connections", "accept mode"], "explanation": "listen() marks a socket as passive, ready to accept incoming connection requests.", "xp": 5},
        {"id": "cpp-40-1-7", "type": "typing", "question": "What is the purpose of the accept() function?", "correctAnswer": ["accept incoming connection request", "establish connection", "create new socket"], "explanation": "accept() waits for and accepts an incoming connection, creating a new socket for the connection.", "xp": 5},
        {"id": "cpp-40-1-8", "type": "typing", "question": "What does the connect() function do?", "correctAnswer": ["establish connection to remote socket", "connect to server", "initiate connection"], "explanation": "connect() initiates a connection to a remote socket on a specified address and port.", "xp": 5},
        {"id": "cpp-40-1-9", "type": "multiple", "question": "What address family is used for IPv4?", "options": ["AF_INET", "AF_INET6", "AF_UNIX", "AF_LOCAL"], "correctAnswer": [0], "explanation": "AF_INET is used for IPv4 addresses in socket programming.", "xp": 5},
        {"id": "cpp-40-1-10", "type": "multiple", "question": "What address family is used for IPv6?", "options": ["AF_INET", "AF_INET6", "AF_UNIX", "AF_UNSPEC"], "correctAnswer": [1], "explanation": "AF_INET6 is used for IPv6 addresses in socket programming.", "xp": 5},
        {"id": "cpp-40-1-11", "type": "code", "question": "Create a TCP socket.", "correctAnswer": ["socket(AF_INET, SOCK_STREAM, 0)", "TCP socket creation", "SOCK_STREAM"], "explanation": "socket(AF_INET, SOCK_STREAM, 0) creates a TCP socket for IPv4.", "xp": 15},
        {"id": "cpp-40-1-12", "type": "code", "question": "Create a UDP socket.", "correctAnswer": ["socket(AF_INET, SOCK_DGRAM, 0)", "UDP socket", "SOCK_DGRAM"], "explanation": "socket(AF_INET, SOCK_DGRAM, 0) creates a UDP socket for IPv4.", "xp": 15},
        {"id": "cpp-40-1-13", "type": "code", "question": "Bind socket to address and port.", "correctAnswer": ["bind(sockfd, (sockaddr*)&addr, sizeof(addr))", "bind function", "assign address"], "explanation": "bind() assigns the specified address and port to the socket.", "xp": 15},
        {"id": "cpp-40-1-14", "type": "code", "question": "Configure socket for listening.", "correctAnswer": ["listen(sockfd, backlog)", "listen for connections", "passive socket"], "explanation": "listen() prepares the socket to accept incoming connections with specified backlog.", "xp": 15},
        {"id": "cpp-40-1-15", "type": "code", "question": "Accept incoming connection.", "correctAnswer": ["accept(sockfd, (sockaddr*)&client_addr, &addr_len)", "accept connection", "wait for connection"], "explanation": "accept() blocks until a connection arrives, returning a new socket for the connection.", "xp": 15},
        {"id": "cpp-40-1-16", "type": "code", "question": "Connect to remote server.", "correctAnswer": ["connect(sockfd, (sockaddr*)&server_addr, sizeof(addr))", "connect to server", "establish connection"], "explanation": "connect() initiates a connection to the server at the specified address and port.", "xp": 15},
        {"id": "cpp-40-1-17", "type": "typing", "question": "What is the difference between TCP and UDP sockets?", "correctAnswer": ["TCP is reliable and ordered, UDP is not", "connection vs connectionless", "reliability"], "explanation": "TCP provides reliable, ordered delivery; UDP is faster but unreliable and unordered.", "xp": 5},
        {"id": "cpp-40-1-18", "type": "typing", "question": "Why check socket function return values?", "correctAnswer": ["detect errors and handle failures", "error handling", "robust code"], "explanation": "Socket functions return -1 on error; checking return values allows proper error handling.", "xp": 5},
        {"id": "cpp-40-1-19", "type": "code", "question": "Close socket when done.", "correctAnswer": ["close(sockfd)", "shutdown", "cleanup"], "explanation": "close() closes the socket descriptor, releasing resources.", "xp": 15},
        {"id": "cpp-40-1-20", "type": "code", "question": "Configure socket address for IPv4.", "correctAnswer": ["sockaddr_in struct", "set sin_family, sin_addr, sin_port", "address configuration"], "explanation": "Configure sockaddr_in structure with AF_INET, IP address, and port number.", "xp": 15},
        {"id": "cpp-40-1-21", "type": "typing", "question": "What is a socket descriptor?", "correctAnswer": ["file descriptor for socket", "integer handle", "socket identifier"], "explanation": "A socket descriptor is an integer file descriptor used to reference a socket.", "xp": 5},
        {"id": "cpp-40-1-22", "type": "typing", "question": "What is the backlog parameter in listen()?", "correctAnswer": ["maximum pending connections", "connection queue length", "pending requests"], "explanation": "backlog specifies the maximum number of pending connections in the queue.", "xp": 5},
        {"id": "cpp-40-1-23", "type": "code", "question": "Handle socket creation errors.", "correctAnswer": ["if (sockfd < 0) perror and handle", "error checking", "error handling"], "explanation": "Check if socket() returns -1, use perror to print error and handle appropriately.", "xp": 15},
        {"id": "cpp-40-1-24", "type": "code", "question": "Set socket to non-blocking mode.", "correctAnswer": ["fcntl with O_NONBLOCK", "ioctl FIONBIO", "non-blocking"], "explanation": "Use fcntl(sockfd, F_SETFL, O_NONBLOCK) to set socket to non-blocking mode.", "xp": 15},
        {"id": "cpp-40-1-25", "type": "code", "question": "Get socket local address.", "correctAnswer": ["getsockname", "retrieve bound address", "local address"], "explanation": "getsockname() retrieves the local address to which the socket is bound.", "xp": 15}
    ]
}

data['units'][39]['lessons'][0].update(lesson40_1)
print("✅ Unit 40, Lesson 1: Socket Basics - 25 detailed questions")

# Unit 48, Lesson 2: CLI Applications
lesson48_2 = {
    "id": "cpp-U48-L2",
    "title": "CLI Applications",
    "unitTitle": "48. Projects and Applications",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# CLI Applications

Building Command Line Interface applications in C++.

## Core Concepts

CLI applications interact with users through terminal commands, supporting arguments, options, and flags.

## Command Line Arguments

```cpp
int main(int argc, char* argv[]) {
    // argc: argument count
    // argv: argument values
}
```

## Argument Parsing Libraries

- **getopt**: POSIX standard for parsing options
- **CLI11**: Modern C++ library for CLI
- **Boost.Program_options**: Boost library for option parsing

## Best Practices

1. Provide --help and --version options
2. Use descriptive option names
3. Validate arguments
4. Handle errors gracefully
5. Provide clear error messages

## Common Patterns

- Subcommands (git clone, git push)
- Flags (--verbose, --quiet)
- Key-value pairs (--port=8080)
- Positional arguments
""",
    "questions": [
        {"id": "cpp-48-2-1", "type": "typing", "question": "What is a CLI application?", "correctAnswer": ["command line interface application", "terminal application", "text-based program"], "explanation": "A CLI application interacts with users through text commands in a terminal or command prompt.", "xp": 5},
        {"id": "cpp-48-2-2", "type": "typing", "question": "What does argc represent in main()?", "correctAnswer": ["argument count including program name", "number of arguments", "argv size"], "explanation": "argc is the number of command-line arguments, including the program name.", "xp": 5},
        {"id": "cpp-48-2-3", "type": "typing", "question": "What does argv represent in main()?", "correctAnswer": ["array of argument strings", "argument values", "string array"], "explanation": "argv is an array of C-style strings containing the command-line arguments.", "xp": 5},
        {"id": "cpp-48-2-4", "type": "typing", "question": "What is argv[0]?", "correctAnswer": ["program name or path", "first argument", "executable name"], "explanation": "argv[0] contains the name or path of the program being executed.", "xp": 5},
        {"id": "cpp-48-2-5", "type": "typing", "question": "What is a command-line flag?", "correctAnswer": ["boolean option that enables/disables feature", "--verbose flag", "switch"], "explanation": "Flags are options like --verbose that enable or disable features without values.", "xp": 5},
        {"id": "cpp-48-2-6", "type": "typing", "question": "What is the purpose of --help option?", "correctAnswer": ["display usage information and help", "show help", "usage guide"], "explanation": "--help displays usage information, available options, and examples for the program.", "xp": 5},
        {"id": "cpp-48-2-7", "type": "typing", "question": "What is the purpose of --version option?", "correctAnswer": ["display program version information", "show version", "version string"], "explanation": "--version displays the version number and build information of the program.", "xp": 5},
        {"id": "cpp-48-2-8", "type": "typing", "question": "What is getopt used for?", "correctAnswer": ["parse command-line options", "argument parsing", "option handling"], "explanation": "getopt is a POSIX function for parsing command-line options and arguments.", "xp": 5},
        {"id": "cpp-48-2-9", "type": "code", "question": "Parse command-line arguments with getopt.", "correctAnswer": ["getopt loop", "optchar switch", "option parsing"], "explanation": "Use getopt() in a while loop to parse options and their arguments.", "xp": 15},
        {"id": "cpp-48-2-10", "type": "code", "question": "Handle required arguments in CLI.", "correctAnswer": ["check argc", "validate arguments", "error if missing"], "explanation": "Check argc for minimum required arguments and display error if missing.", "xp": 15},
        {"id": "cpp-48-2-11", "type": "code", "question": "Implement --help option.", "correctAnswer": ["check for help flag", "print usage", "exit after help"], "explanation": "Check for --help or -h, print usage information, and exit.", "xp": 15},
        {"id": "cpp-48-2-12", "type": "code", "question": "Implement --version option.", "correctAnswer": ["check for version flag", "print version", "exit after version"], "explanation": "Check for --version or -v, print version string, and exit.", "xp": 15},
        {"id": "cpp-48-2-13", "type": "typing", "question": "What is a subcommand in CLI?", "correctAnswer": ["command after main program name like git commit", "command grouping", "git style"], "explanation": "Subcommands like 'git commit' provide different functionality under the main program.", "xp": 5},
        {"id": "cpp-48-2-14", "type": "typing", "question": "What are positional arguments?", "correctAnswer": ["arguments not preceded by flags", "ordered arguments", "required arguments"], "explanation": "Positional arguments are specified by their position on the command line, not by flags.", "xp": 5},
        {"id": "cpp-48-2-15", "type": "code", "question": "Validate numeric arguments.", "correctAnswer": ["convert with stoi/stol", "check for errors", "validate range"], "explanation": "Use std::stoi or std::stol to convert and handle conversion errors.", "xp": 15},
        {"id": "cpp-48-2-16", "type": "code", "question": "Handle file path arguments.", "correctAnswer": ["validate path exists", "check extension", "file validation"], "explanation": "Use std::filesystem to check if file exists and is accessible.", "xp": 15},
        {"id": "cpp-48-2-17", "type": "typing", "question": "Why provide clear error messages?", "correctAnswer": ["help users understand and fix issues", "user experience", "debugging aid"], "explanation": "Clear error messages help users understand what went wrong and how to fix it.", "xp": 5},
        {"id": "cpp-48-2-18", "type": "code", "question": "Implement verbose flag (--verbose).", "correctAnswer": ["boolean verbose flag", "check flag", "print extra info"], "explanation": "Set a boolean flag when --verbose is specified, and print extra information.", "xp": 15},
        {"id": "cpp-48-2-19", "type": "code", "question": "Implement quiet flag (--quiet).", "correctAnswer": ["boolean quiet flag", "suppress output", "minimal output"], "explanation": "Set a flag to suppress non-essential output when --quiet is specified.", "xp": 15},
        {"id": "cpp-48-2-20", "type": "code", "question": "Parse key-value arguments (--port=8080).", "correctAnswer": ["split on =", "parse key and value", "assignment syntax"], "explanation": "Parse --key=value format by splitting on '=' and handling both parts.", "xp": 15},
        {"id": "cpp-48-2-21", "type": "typing", "question": "What is CLI11 library?", "correctAnswer": ["modern C++ CLI parsing library", "argument parsing", "CLI framework"], "explanation": "CLI11 is a modern, header-only C++ library for parsing command-line arguments.", "xp": 5},
        {"id": "cpp-48-2-22", "type": "code", "question": "Use std::filesystem for path operations.", "correctAnswer": ["filesystem path", "exists, is_file", "path validation"], "explanation": "Use std::filesystem::path and its methods to validate and manipulate file paths.", "xp": 15},
        {"id": "cpp-48-2-23", "type": "code", "question": "Handle invalid arguments gracefully.", "correctAnswer": ["try-catch", "print error message", "exit with error code"], "explanation": "Use try-catch blocks and print descriptive error messages before exiting.", "xp": 15},
        {"id": "cpp-48-2-24", "type": "code", "question": "Create usage message.", "correctAnswer": ["format with arguments", "show options", "usage template"], "explanation": "Create a formatted string showing program name, usage pattern, and available options.", "xp": 15},
        {"id": "cpp-48-2-25", "type": "code", "question": "Build CLI application with multiple subcommands.", "correctAnswer": ["command registry", "command dispatcher", "subcommand handling"], "explanation": "Create a registry of subcommands with their handlers and dispatch to the appropriate one.", "xp": 15}
    ]
}

data['units'][47]['lessons'][1].update(lesson48_2)
print("✅ Unit 48, Lesson 2: CLI Applications - 25 detailed questions")

# Unit 48, Lesson 7: Machine Learning
lesson48_7 = {
    "id": "cpp-U48-L7",
    "title": "Machine Learning",
    "unitTitle": "48. Projects and Applications",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Machine Learning with C++

Using C++ for machine learning and AI applications.

## Core Concepts

C++ provides performance-critical ML through libraries like TensorFlow, PyTorch, and custom implementations.

## ML Libraries

- **TensorFlow C++ API**: Google's ML framework
- **PyTorch LibTorch**: Facebook's ML framework
- **MLPACK**: C++ ML library
- **Dlib**: General-purpose ML library
- **Eigen**: Linear algebra library

## Common Tasks

1. Data preprocessing
2. Model training
3. Inference/prediction
4. Model evaluation
5. Hyperparameter tuning

## Advantages of C++ for ML

- High performance
- Low-level control
- Memory efficiency
- Deployment to edge devices
- Integration with existing C++ systems

## Best Practices

1. Use optimized linear algebra libraries
2. Minimize data copies
3. Parallelize when possible
4. Profile and optimize hot paths
""",
    "questions": [
        {"id": "cpp-48-7-1", "type": "typing", "question": "What is machine learning?", "correctAnswer": ["AI that learns from data", "data-driven AI", "pattern recognition"], "explanation": "Machine learning is a subset of AI where systems learn patterns from data without explicit programming.", "xp": 5},
        {"id": "cpp-48-7-2", "type": "typing", "question": "Why use C++ for machine learning?", "correctAnswer": ["high performance and efficiency", "speed", "low-level control"], "explanation": "C++ provides high performance, memory efficiency, and low-level control for ML applications.", "xp": 5},
        {"id": "cpp-48-7-3", "type": "typing", "question": "What is TensorFlow C++ API?", "correctAnswer": ["Google's ML framework C++ interface", "TensorFlow for C++", "ML library"], "explanation": "TensorFlow C++ API provides C++ bindings for Google's machine learning framework.", "xp": 5},
        {"id": "cpp-48-7-4", "type": "typing", "question": "What is LibTorch?", "correctAnswer": ["PyTorch C++ API", "Facebook's ML library", "C++ PyTorch"], "explanation": "LibTorch is the C++ API for PyTorch, Facebook's machine learning framework.", "xp": 5},
        {"id": "cpp-48-7-5", "type": "typing", "question": "What is MLPACK?", "correctAnswer": ["C++ machine learning library", "ML library", "native C++ ML"], "explanation": "MLPACK is a native C++ library for machine learning with algorithms for classification, regression, and more.", "xp": 5},
        {"id": "cpp-48-7-6", "type": "typing", "question": "What is Dlib used for?", "correctAnswer": ["general-purpose ML library", "computer vision", "machine learning"], "explanation": "Dlib is a modern C++ toolkit containing ML algorithms, computer vision tools, and optimization.", "xp": 5},
        {"id": "cpp-48-7-7", "type": "typing", "question": "What is the purpose of data preprocessing?", "correctAnswer": ["prepare data for ML models", "clean data", "feature engineering"], "explanation": "Data preprocessing cleans, transforms, and prepares raw data for ML model training.", "xp": 5},
        {"id": "cpp-48-7-8", "type": "typing", "question": "What is model training?", "correctAnswer": ["learning patterns from data", "fitting model", "training process"], "explanation": "Model training is the process of teaching ML algorithms to recognize patterns from data.", "xp": 5},
        {"id": "cpp-48-7-9", "type": "typing", "question": "What is inference in machine learning?", "correctAnswer": ["making predictions with trained model", "prediction", "using model"], "explanation": "Inference is using a trained ML model to make predictions on new, unseen data.", "xp": 5},
        {"id": "cpp-48-7-10", "type": "typing", "question": "What is model evaluation?", "correctAnswer": ["assessing model performance", "testing accuracy", "metrics"], "explanation": "Model evaluation measures how well a trained model performs using metrics like accuracy, precision, recall.", "xp": 5},
        {"id": "cpp-48-7-11", "type": "code", "question": "Load training data from CSV file.", "correctAnswer": ["parse CSV", "read file", "data loading"], "explanation": "Read CSV file line by line, parse values, and store in data structures for training.", "xp": 15},
        {"id": "cpp-48-7-12", "type": "code", "question": "Normalize numerical data.", "correctAnswer": ["scale to 0-1", "z-score normalization", "data normalization"], "explanation": "Normalize data to range [0,1] or standardize using mean and standard deviation.", "xp": 15},
        {"id": "cpp-48-7-13", "type": "code", "question": "Split data into training and test sets.", "correctAnswer": ["random shuffle", "80-20 split", "train test split"], "explanation": "Shuffle data randomly, then split into training (e.g., 80%) and test (e.g., 20%) sets.", "xp": 15},
        {"id": "cpp-48-7-14", "type": "code", "question": "Implement simple linear regression.", "correctAnswer": ["least squares", "fit line", "regression"], "explanation": "Use least squares to find best-fit line through data points.", "xp": 15},
        {"id": "cpp-48-7-15", "type": "code", "question": "Implement k-nearest neighbors classifier.", "correctAnswer": ["find k nearest points", "majority vote", "classification"], "explanation": "Find k nearest neighbors in training data and use majority vote for classification.", "xp": 15},
        {"id": "cpp-48-7-16", "type": "typing", "question": "Why minimize data copies in ML?", "correctAnswer": ["improve performance", "reduce memory", "efficiency"], "explanation": "Minimizing copies reduces memory usage and improves performance by avoiding unnecessary data movement.", "xp": 5},
        {"id": "cpp-48-7-17", "type": "code", "question": "Use Eigen for matrix operations.", "correctAnswer": ["Eigen MatrixXd", "matrix multiplication", "linear algebra"], "explanation": "Use Eigen library for efficient matrix operations and linear algebra computations.", "xp": 15},
        {"id": "cpp-48-7-18", "type": "code", "question": "Parallelize ML computations.", "correctAnswer": ["OpenMP", "threading", "parallel processing"], "explanation": "Use OpenMP or C++ threads to parallelize independent computations in ML algorithms.", "xp": 15},
        {"id": "cpp-48-7-19", "type": "typing", "question": "What is hyperparameter tuning?", "correctAnswer": ["optimizing model parameters", "parameter search", "model tuning"], "explanation": "Hyperparameter tuning finds optimal configuration parameters for ML models.", "xp": 5},
        {"id": "cpp-48-7-20", "type": "code", "question": "Calculate model accuracy.", "correctAnswer": ["compare predictions to labels", "accuracy metric", "correct/total"], "explanation": "Compare model predictions to actual labels and calculate the percentage of correct predictions.", "xp": 15},
        {"id": "cpp-48-7-21", "type": "typing", "question": "What are edge devices in ML deployment?", "correctAnswer": ["devices with limited resources", "IoT devices", "embedded systems"], "explanation": "Edge devices are resource-constrained devices where ML models are deployed locally.", "xp": 5},
        {"id": "cpp-48-7-22", "type": "code", "question": "Load trained model from file.", "correctAnswer": ["deserialize model", "load parameters", "model loading"], "explanation": "Read model parameters from file and reconstruct the model structure.", "xp": 15},
        {"id": "cpp-48-7-23", "type": "code", "question": "Save trained model to file.", "correctAnswer": ["serialize model", "save parameters", "model persistence"], "explanation": "Serialize model parameters and structure to file for later use.", "xp": 15},
        {"id": "cpp-48-7-24", "type": "typing", "question": "What is feature engineering?", "correctAnswer": ["creating features from raw data", "data transformation", "feature creation"], "explanation": "Feature engineering creates new, meaningful features from raw data to improve model performance.", "xp": 5},
        {"id": "cpp-48-7-25", "type": "code", "question": "Implement simple neural network layer.", "correctAnswer": ["forward propagation", "weights and biases", "activation function"], "explanation": "Implement forward pass with weights, biases, and activation function.", "xp": 15}
    ]
}

data['units'][47]['lessons'][6].update(lesson48_7)
print("✅ Unit 48, Lesson 7: Machine Learning - 25 detailed questions")

# Write partial save
output_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(output_path, 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n" + "="*70)
print("✅ BATCH 2 PARTIAL COMPLETE: 3/5 lessons")
print("="*70)
print("Continuing with remaining 2 lessons...")
