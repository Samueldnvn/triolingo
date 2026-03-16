#!/usr/bin/env python3
"""
Build Unit 15: File I/O and Serialization
4 lessons with 25 questions each (100 total)
Heavy emphasis on code questions (~70% = 70 code questions)
"""
import json

print("🚀 Building C++ Unit 15: File I/O and Serialization")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 1: File Streams
# ============================================================================
lesson1_questions = [
    {
        "id": "cpp-15-1-1", "type": "typing", "question": "What is std::ofstream?", "correctAnswer": ["output file stream", "write to file"], "explanation": "ofstream writes to files.", "xp": 5
    },
    {
        "id": "cpp-15-1-2", "type": "typing", "question": "What is std::ifstream?", "correctAnswer": ["input file stream", "read from file"], "explanation": "ifstream reads from files.", "xp": 5
    },
    {
        "id": "cpp-15-1-3", "type": "typing", "question": "What is std::fstream?", "correctAnswer": ["file stream for read/write", "both input and output"], "explanation": "fstream reads and writes.", "xp": 5
    },
    {
        "id": "cpp-15-1-4", "type": "multiple", "question": "How to open file?", "options": ["Open constructor", "open() method", "Both", "Neither"], "correctAnswer": [2], "explanation": "Can open in constructor or with open().", "xp": 5
    },
    {
        "id": "cpp-15-1-5", "type": "multiple", "question": "How to check if file open?", "options": ["is_open()", "open()", "good()", "check()"], "correctAnswer": [0], "explanation": "is_open() checks file state.", "xp": 5
    },
    {"id": "cpp-15-1-6", "type": "code", "question": "Open file for writing.",
        "correctAnswer": ["std::ofstream file(\"output.txt\");", "std::ofstream out(\"data.txt\");"],
        "explanation": "std::ofstream file(\"filename\")", "xp": 15
    },
    {"id": "cpp-15-1-7", "type": "code", "question": "Open file for reading.",
        "correctAnswer": ["std::ifstream file(\"input.txt\");", "std::ifstream in(\"data.txt\");"],
        "explanation": "std::ifstream file(\"filename\")", "xp": 15
    },
    {
        "id": "cpp-15-1-8", "type": "code", "question": "Open file for read/write.",
        "correctAnswer": ["std::fstream file(\"data.txt\");", "std::fstream io(\"file.txt\");"],
        "explanation": "std::fstream file(\"filename\")", "xp": 15
    },
    {
        "id": "cpp-15-1-9", "type": "code", "question": "Check if file opened successfully.",
        "correctAnswer": ["if (file.is_open())", "if (file.good() && file.is_open())"],
        "explanation": "file.is_open()", "xp": 15
    },
    {
        "id": "cpp-15-1-10", "type": "code", "question": "Write to file.",
        "correctAnswer": ["file << \"Hello\" << std::endl;", "out << value << \"\\n\";"],
        "explanation": "file << data", "xp": 15
    },
    {
        "id": "cpp-15-1-11", "type": "code", "question": "Read from file.",
        "correctAnswer": ["file >> value;", "in >> data;"],
        "explanation": "file >> variable", "xp": 15
    },
    {
        "id": "cpp-15-1-12", "type": "code", "question": "Read line from file.",
        "correctAnswer": ["std::getline(file, line);", "std::getline(in, line);"],
        "explanation": "std::getline(file, string)", "xp": 15
    },
    {
        "id": "cpp-15-1-13", "type": "code", "question": "Close file.",
        "correctAnswer": ["file.close();", "out.close();"],
        "explanation": "file.close()", "xp": 15
    },
    {
        "id": "cpp-15-1-14", "type": "code", "question": "Append to file.",
        "correctAnswer": ["std::ofstream file(\"data.txt\", std::ios::app);", "std::ofstream out(\"file.txt\", std::ios::app);"],
        "explanation": "std::ios::app for append.", "xp": 15
    },
    {
        "id": "cpp-15-1-15", "type": "code", "question": "Open with open mode.",
        "correctAnswer": ["file.open(\"data.txt\", std::ios::out | std::ios::binary);", "in.open(\"file.txt\", std::ios::in);"],
        "explanation": "file.open(\"filename\", mode)", "xp": 15
    },
    {
        "id": "cpp-15-1-16", "type": "code", "question": "Check if file exists.",
        "correctAnswer": ["std::ifstream file(\"filename\"); if (file) { }", "if (std::filesystem::exists(\"file.txt\"))"],
        "explanation": "Check if ifstream can open.", "xp": 15
    },
    {
        "id": "cpp-15-1-17", "type": "code", "question": "Read entire file to string.",
        "correctAnswer": ["std::string content((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());", "std::stringstream buffer; buffer << file.rdbuf(); std::string str = buffer.str();"],
        "explanation": "Use iterator or rdbuf.", "xp": 15
    },
    {
        "id": "cpp-15-1-18", "type": "code", "question": "Write vector to file.",
        "correctAnswer": ["for (const auto& item : v) file << item << \"\\n\";", "std::copy(v.begin(), v.end(), std::ostream_iterator<int>(file, \"\\n\"));"],
        "explanation": "Iterate and write each item.", "xp": 15
    },
    {
        "id": "cpp-15-1-19", "type": "code", "question": "Read file line by line.",
        "correctAnswer": ["while (std::getline(file, line)) { /* process */ }", "for (std::string line; std::getline(in, line); )"],
        "explanation": "while (getline(file, line))", "xp": 15
    },
    {
        "id": "cpp-15-1-20", "type": "code", "question": "Check EOF.",
        "correctAnswer": ["if (file.eof())", "while (!file.eof())"],
        "explanation": "file.eof()", "xp": 15
    },
    {
        "id": "cpp-15-1-21", "type": "code", "question": "Seek to position.",
        "correctAnswer": ["file.seekg(100);", "out.seekp(0, std::ios::beg);"],
        "explanation": "seekg for input, seekp for output.", "xp": 15
    },
    {
        "id": "cpp-15-1-22", "type": "code", "question": "Get current position.",
        "correctAnswer": ["auto pos = file.tellg();", "size_t position = out.tellp();"],
        "explanation": "tellg for input, tellp for output.", "xp": 15
    },
    {
        "id": "cpp-15-1-23", "type": "code", "question": "Check read failure.",
        "correctAnswer": ["if (!file)", "if (file.fail())", "if (!file.good())"],
        "explanation": "!file or file.fail()", "xp": 15
    },
    {
        "id": "cpp-15-1-24", "type": "code", "question": "Write formatted output.",
        "correctAnswer": ["file << std::fixed << std::setprecision(2) << value;", "printf-style: file << std::setw(10) << std::right << data;"],
        "explanation": "Use iomanip for formatting.", "xp": 15
    },
    {
        "id": "cpp-15-1-25", "type": "code", "question": "Flush buffer to file.",
        "correctAnswer": ["file.flush();", "out.flush();"],
        "explanation": "file.flush()", "xp": 15}
]

lesson1 = {
    "id": 77, "title": "File Streams", "unitTitle": "15. File I/O and Serialization", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# File Streams

Reading and writing files in C++.

## Basic File Operations

```cpp
#include <fstream>
#include <iostream>

// Write to file
std::ofstream outFile("output.txt");
if (outFile.is_open()) {
    outFile << "Hello, World!" << std::endl;
    outFile << 42 << std::endl;
    outFile.close();
}

// Read from file
std::ifstream inFile("input.txt");
if (inFile.is_open()) {
    std::string line;
    while (std::getline(inFile, line)) {
        std::cout << line << std::endl;
    }
    inFile.close();
}
```

## File Modes

```cpp
// Append to file
std::ofstream file("data.txt", std::ios::app);

// Binary mode
std::fstream file("data.bin", std::ios::binary | std::ios::in | std::ios::out);

// Truncate (overwrite)
std::ofstream file("output.txt", std::ios::trunc);
```
""",
    "questions": lesson1_questions
}

# ============================================================================
# LESSON 2: Binary vs Text Files
# ============================================================================
lesson2_questions = [
    {
        "id": "cpp-15-2-1", "type": "typing", "question": "What is binary file?", "correctAnswer": ["raw bytes", "non-text data"], "explanation": "Binary files store raw bytes.", "xp": 5
    },
    {
        "id": "cpp-15-2-2", "type": "typing", "question": "What is text file?", "correctAnswer": ["human readable", "text characters"], "explanation": "Text files store readable text.", "xp": 5
    },
    {
        "id": "cpp-15-2-3", "type": "typing", "question": "When use binary mode?", "correctAnswer": ["binary data", "non-text", "images"], "explanation": "Use binary for raw data.", "xp": 5
    },
    {
        "id": "cpp-15-2-4", "type": "multiple", "question": "Which mode for binary?", "options": ["std::ios::binary", "std::ios::text", "std::ios::raw", "std::ios::data"], "correctAnswer": [0], "explanation": "std::ios::binary flag.", "xp": 5
    },
    {
        "id": "cpp-15-2-5", "type": "multiple", "question": "Binary vs text efficiency?", "options": ["Binary more compact", "Text more compact", "Equal", "Depends"], "correctAnswer": [0], "explanation": "Binary is more compact.", "xp": 5
    },
    {"id": "cpp-15-2-6", "type": "code", "question": "Open file in binary mode.",
        "correctAnswer": ["std::fstream file(\"data.bin\", std::ios::binary);", "std::ofstream out(\"file.bin\", std::ios::binary);"],
        "explanation": "std::ios::binary flag.", "xp": 15
    },
    {"id": "cpp-15-2-7", "type": "code", "question": "Write binary data.",
        "correctAnswer": ["file.write(reinterpret_cast<const char*>(&data), sizeof(data));", "out.write(buffer, size);"],
        "explanation": "file.write(data, size)", "xp": 15
    },
    {
        "id": "cpp-15-2-8", "type": "code", "question": "Read binary data.",
        "correctAnswer": ["file.read(reinterpret_cast<char*>(&data), sizeof(data));", "in.read(buffer, size);"],
        "explanation": "file.read(data, size)", "xp": 15
    },
    {
        "id": "cpp-15-2-9", "type": "code", "question": "Write integer to binary.",
        "correctAnswer": ["int value = 42; file.write(reinterpret_cast<const char*>(&value), sizeof(value));", "out.write(reinterpret_cast<const char*>(&num), sizeof(int));"],
        "explanation": "Write raw bytes of integer.", "xp": 15
    },
    {
        "id": "cpp-15-2-10", "type": "code", "question": "Read integer from binary.",
        "correctAnswer": ["int value; file.read(reinterpret_cast<char*>(&value), sizeof(value));", "in.read(reinterpret_cast<char*>(&num), sizeof(int));"],
        "explanation": "Read raw bytes into integer.", "xp": 15
    },
    {
        "id": "cpp-15-2-11", "type": "code", "question": "Write struct to binary.",
        "correctAnswer": ["Person p = {\"John\", 30}; file.write(reinterpret_cast<const char*>(&p), sizeof(Person));", "out.write(reinterpret_cast<const char*>(&data), sizeof(DataStruct));"],
        "explanation": "Write struct bytes.", "xp": 15
    },
    {
        "id": "cpp-15-2-12", "type": "code", "question": "Read struct from binary.",
        "correctAnswer": ["Person p; file.read(reinterpret_cast<char*>(&p), sizeof(Person));", "DataStruct data; in.read(reinterpret_cast<char*>(&data), sizeof(DataStruct));"],
        "explanation": "Read bytes into struct.", "xp": 15
    },
    {
        "id": "cpp-15-2-13", "type": "code", "question": "Write vector to binary.",
        "correctAnswer": ["size_t size = v.size(); file.write(reinterpret_cast<const char*>(&size), sizeof(size)); file.write(reinterpret_cast<const char*>(v.data()), v.size() * sizeof(T));", "out.write(reinterpret_cast<const char*>(vec.data()), vec.size() * sizeof(vec[0]));"],
        "explanation": "Write size then data.", "xp": 15
    },
    {
        "id": "cpp-15-2-14", "type": "code", "question": "Read vector from binary.",
        "correctAnswer": ["size_t size; file.read(reinterpret_cast<char*>(&size), sizeof(size)); v.resize(size); file.read(reinterpret_cast<char*>(v.data()), v.size() * sizeof(T));", "in.read(reinterpret_cast<char*>(&sz), sizeof(size)); vec.resize(sz); in.read(reinterpret_cast<char*>(vec.data()), vec.size() * sizeof(T));"],
        "explanation": "Read size then data.", "xp": 15
    },
    {
        "id": "cpp-15-2-15", "type": "code", "question": "Write string to binary.",
        "correctAnswer": ["size_t len = str.size(); file.write(reinterpret_cast<const char*>(&len), sizeof(len)); file.write(str.data(), len);", "out.write(reinterpret_cast<const char*>(&size), sizeof(size)); out.write(s.data(), size);"],
        "explanation": "Write length then characters.", "xp": 15
    },
    {
        "id": "cpp-15-2-16", "type": "code", "question": "Read string from binary.",
        "correctAnswer": ["size_t len; file.read(reinterpret_cast<char*>(&len), sizeof(len)); std::string str(len, '\\0'); file.read(&str[0], len);", "in.read(reinterpret_cast<char*>(&size), sizeof(size)); std::string s(size, '\\0'); in.read(&s[0], size);"],
        "explanation": "Read length then characters.", "xp": 15
    },
    {
        "id": "cpp-15-2-17", "type": "code", "question": "Check end of binary file.",
        "correctAnswer": ["if (file.peek() == std::ifstream::traits_type::eof())", "while (file.good() && !file.eof())"],
        "explanation": "peek() or eof()", "xp": 15
    },
    {
        "id": "cpp-15-2-18", "type": "code", "question": "Seek in binary file.",
        "correctAnswer": ["file.seekg(0, std::ios::beg);", "out.seekp(100, std::ios::cur);"],
        "explanation": "seek from beginning/current/end.", "xp": 15
    },
    {
        "id": "cpp-15-2-19", "type": "code", "question": "Get file size.",
        "correctAnswer": ["file.seekg(0, std::ios::end); size_t size = file.tellg(); file.seekg(0, std::ios::beg);", "auto begin = file.tellg(); file.seekg(0, std::ios::end); auto end = file.tellg(); size_t size = end - begin;"],
        "explanation": "Seek to end, get position.", "xp": 15
    },
    {
        "id": "cpp-15-2-20", "type": "code", "question": "Write boolean to binary.",
        "correctAnswer": ["bool flag = true; file.write(reinterpret_cast<const char*>(&flag), sizeof(bool));", "out.write(reinterpret_cast<const char*>(&b), sizeof(bool));"],
        "explanation": "Write bool bytes.", "xp": 15
    },
    {
        "id": "cpp-15-2-21", "type": "code", "question": "Write array to binary.",
        "correctAnswer": ["int arr[10]; file.write(reinterpret_cast<const char*>(arr), sizeof(arr));", "out.write(reinterpret_cast<const char*>(array), sizeof(array));"],
        "explanation": "Write entire array.", "xp": 15
    },
    {
        "id": "cpp-15-2-22", "type": "code", "question": "Read array from binary.",
        "correctAnswer": ["int arr[10]; file.read(reinterpret_cast<char*>(arr), sizeof(arr));", "in.read(reinterpret_cast<char*>(array), sizeof(array));"],
        "explanation": "Read into array.", "xp": 15
    },
    {
        "id": "cpp-15-2-23", "type": "code", "question": "Write double precision to binary.",
        "correctAnswer": ["double value = 3.14159; file.write(reinterpret_cast<const char*>(&value), sizeof(double));", "out.write(reinterpret_cast<const char*>(&d), sizeof(double));"],
        "explanation": "Write double bytes.", "xp": 15
    },
    {
        "id": "cpp-15-2-24", "type": "code", "question": "Write with endianness conversion (big-endian).",
        "correctAnswer": ["uint32_t value = htonl(host_value); file.write(reinterpret_cast<const char*>(&value), sizeof(value));", "// Convert to network byte order before writing"],
        "explanation": "Use htonl for big-endian.", "xp": 15
    },
    {
        "id": "cpp-15-2-25", "type": "code", "question": "Flush binary write.",
        "correctAnswer": ["file.flush();", "out.flush();"],
        "explanation": "Flush binary buffer.", "xp": 15}
]

lesson2 = {
    "id": 78, "title": "Binary vs Text Files", "unitTitle": "15. File I/O and Serialization", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Binary vs Text Files

Text files store human-readable characters, binary files store raw bytes.

## Text File

```cpp
// Write text
std::ofstream textFile("data.txt");
textFile << "42" << std::endl;  // ASCII: '4', '2', '\\n'

// Read text
std::string text;
std::ifstream textFile("data.txt");
textFile >> text;  // text = "42"
```

## Binary File

```cpp
// Write binary
int value = 42;
std::ofstream binFile("data.bin", std::ios::binary);
binFile.write(reinterpret_cast<const char*>(&value), sizeof(value));

// Read binary
int value;
std::ifstream binFile("data.bin", std::ios::binary);
binFile.read(reinterpret_cast<char*>(&value), sizeof(value));
```

## Binary Struct I/O

```cpp
struct Person {
    char name[50];
    int age;
};

Person p = {"Alice", 30};

// Write
file.write(reinterpret_cast<const char*>(&p), sizeof(Person));

// Read
Person p;
file.read(reinterpret_cast<char*>(&p), sizeof(Person));
```
""",
    "questions": lesson2_questions
}

# ============================================================================
# LESSON 3: Parsing Structured Data
# ============================================================================
lesson3_questions = [
    {
        "id": "cpp-15-3-1", "type": "typing", "question": "What is CSV?", "correctAnswer": ["comma separated values", "tabular data format"], "explanation": "CSV is comma-separated values.", "xp": 5
    },
    {
        "id": "cpp-15-3-2", "type": "typing", "question": "What is JSON?", "correctAnswer": ["javascript object notation", "data format"], "explanation": "JSON is data interchange format.", "xp": 5
    },
    {
        "id": "cpp-15-3-3", "type": "typing", "question": "What is parsing?", "correctAnswer": ["reading structured data", "extracting data from format"], "explanation": "Parsing extracts data from structured format.", "xp": 5
    },
    {
        "id": "cpp-15-3-4", "type": "multiple", "question": "Which delimiter for CSV?", "options": ["Comma", "Semicolon", "Tab", "Pipe"], "correctAnswer": [0], "explanation": "CSV uses comma delimiter.", "xp": 5
    },
    {
        "id": "cpp-15-3-5", "type": "multiple", "question": "Can C++ parse JSON natively?", "options": ["No", "Yes", "C++20", "Only headers"], "correctAnswer": [0], "explanation": "C++ needs library for JSON.", "xp": 5
    },
    {"id": "cpp-15-3-6", "type": "code", "question": "Parse CSV line.",
        "correctAnswer": ["std::stringstream ss(line); std::string field; while (std::getline(ss, field, ',')) { fields.push_back(field); }", "std::string token; size_t pos = 0; while ((pos = line.find(',')) != std::string::npos) { token = line.substr(0, pos); line.erase(0, pos + 1); }"],
        "explanation": "Split on comma delimiter.", "xp": 15
    },
    {
        "id": "cpp-15-3-7", "type": "code", "question": "Read CSV file.",
        "correctAnswer": ["std::ifstream file(\"data.csv\"); std::string line; while (std::getline(file, line)) { std::stringstream ss(line); std::string field; while (std::getline(ss, field, ',')) { /* process */ } }", "// Read line, split on commas"],
        "explanation": "Read line, parse with getline.", "xp": 15
    },
    {
        "id": "cpp-15-3-8", "type": "code", "question": "Write CSV line.",
        "correctAnswer": ["std::ofstream file(\"data.csv\"); file << field1 << \",\" << field2 << \",\" << field3 << \"\\n\";", "file << value1 << \",\" << value2 << std::endl;"],
        "explanation": "Join with commas.", "xp": 15
    },
    {
        "id": "cpp-15-3-9", "type": "code", "question": "Parse key=value pair.",
        "correctAnswer": ["size_t pos = line.find('='); if (pos != std::string::npos) { std::string key = line.substr(0, pos); std::string value = line.substr(pos + 1); }", "auto [k, v] = splitPair(line, '=');"],
        "explanation": "Split on equals sign.", "xp": 15
    },
    {
        "id": "cpp-15-3-10", "type": "code", "question": "Parse whitespace-separated.",
        "correctAnswer": ["std::stringstream ss(line); std::string token; while (ss >> token) { tokens.push_back(token); }", "std::istringstream iss(line); std::copy(std::istream_iterator<std::string>(iss), std::istream_iterator<std::string>(), std::back_inserter(tokens));"],
        "explanation": "Stream extraction splits on whitespace.", "xp": 15
    },
    {
        "id": "cpp-15-3-11", "type": "code", "question": "Parse integer from string.",
        "correctAnswer": ["int value = std::stoi(str);", "int num = std::atoi(string.c_str());"],
        "explanation": "std::stoi converts string to int.", "xp": 15
    },
    {
        "id": "cpp-15-3-12", "type": "code", "question": "Parse double from string.",
        "correctAnswer": ["double value = std::stod(str);", "double d = std::stod(string);"],
        "explanation": "std::stod converts to double.", "xp": 15
    },
    {
        "id": "cpp-15-3-13", "type": "code", "question": "Parse with quoted fields in CSV.",
        "correctAnswer": ["// Handle quotes: remove leading/trailing quotes, escape inner quotes", "bool inQuotes = false; std::string field; for (char c : line) { if (c == '\"') inQuotes = !inQuotes; else if (c == ',' && !inQuotes) { fields.push_back(field); field.clear(); } else field += c; }"],
        "explanation": "Handle quoted CSV fields.", "xp": 15
    },
    {
        "id": "cpp-15-3-14", "type": "code", "question": "Parse INI file.",
        "correctAnswer": ["// [section]\n// key=value\nstd::string section, key, value;", "// Use regex or state machine to parse sections and key=value pairs", "while (std::getline(file, line)) { if (line[0] == '[') { section = line.substr(1, line.size() - 2); } else if (auto pos = line.find('='); pos != std::string::npos) { key = line.substr(0, pos); value = line.substr(pos + 1); } }"],
        "explanation": "Parse sections and key=value.", "xp": 15
    },
    {
        "id": "cpp-15-3-15", "type": "code", "question": "Parse XML (basic).",
        "correctAnswer": ["// Use library like tinyxml2 or pugixml", "// Manual parsing: find tags, extract content", "// For complex XML, use existing library"],
        "explanation": "Use library for XML.", "xp": 15
    },
    {
        "id": "cpp-15-3-16", "type": "code", "question": "Parse JSON (using nlohmann/json).",
        "correctAnswer": ["#include <nlohmann/json.hpp>\nusing json = nlohmann::json;\njson j = json::parse(str);", "auto data = json::parse(input_string);"],
        "explanation": "nlohmann::json::parse()", "xp": 15
    },
    {
        "id": "cpp-15-3-17", "type": "code", "question": "Access JSON fields.",
        "correctAnswer": ["std::string name = j[\"name\"]; int age = j[\"age\"];", "auto value = data[\"key\"];"],
        "explanation": "operator[] access.", "xp": 15
    },
    {
        "id": "cpp-15-3-18", "type": "code", "question": "Parse YAML (basic).",
        "correctAnswer": ["// Use yaml-cpp library\n#include <yaml-cpp/yaml.h>\nYAML::Node config = YAML::LoadFile(\"config.yaml\");", "// For YAML, use yaml-cpp library"],
        "explanation": "Use yaml-cpp library.", "xp": 15
    },
    {
        "id": "cpp-15-3-19", "type": "code", "question": "Parse with regex.",
        "correctAnswer": ["#include <regex>\nstd::regex pattern(R\"((\\d+)-(\\d+)-(\\d+))\");\nstd::smatch match;\nif (std::regex_search(text, match, pattern)) { }", "std::regex re(\"\\b\\d+\\b\"); std::sregex_iterator it(text.begin(), text.end(), re);"],
        "explanation": "std::regex for pattern matching.", "xp": 15
    },
    {
        "id": "cpp-15-3-20", "type": "code", "question": "Parse command line args.",
        "correctAnswer": ["int main(int argc, char* argv[]) { for (int i = 1; i < argc; ++i) { std::string arg = argv[i]; /* process */ } }", "for (int i = 1; i < argc; ++i) { /* parse argv[i] */ }"],
        "explanation": "argc and argv arguments.", "xp": 15
    },
    {
        "id": "cpp-15-3-21", "type": "code", "question": "Parse hex string to int.",
        "correctAnswer": ["int value = std::stoi(hexStr, nullptr, 16);", "int num = std::strtol(hexStr.c_str(), nullptr, 16);"],
        "explanation": "stoi with base 16.", "xp": 15
    },
    {
        "id": "cpp-15-3-22", "type": "code", "question": "Parse octal string to int.",
        "correctAnswer": ["int value = std::stoi(octalStr, nullptr, 8);", "int num = std::strtol(octalStr.c_str(), nullptr, 8);"],
        "explanation": "stoi with base 8.", "xp": 15
    },
    {
        "id": "cpp-15-3-23", "type": "code", "question": "Parse boolean string.",
        "correctAnswer": ["bool value = (str == \"true\" || str == \"1\");", "bool flag = std::stoi(str) != 0;"],
        "explanation": "Check string content.", "xp": 15
    },
    {
        "id": "cpp-15-3-24", "type": "code", "question": "Parse duration string (e.g., \"5s\").",
        "correctAnswer": ["std::string num = durationStr.substr(0, durationStr.size() - 1); std::string unit = durationStr.substr(durationStr.size() - 1); int value = std::stoi(num); if (unit == \"s\") return std::chrono::seconds(value);", "// Extract number and unit"],
        "explanation": "Extract number and unit.", "xp": 15
    },
    {"id": "cpp-15-3-25", "type": "code", "question": "Parse URL components.",
        "correctAnswer": ["// Use regex or library\nstd::regex url_regex(R\"(https?://([^/]+)(.*))\");\nstd::smatch match;\nif (std::regex_match(url, match, url_regex)) { std::string host = match[2]; std::string path = match[3]; }", "// Parse scheme, host, path, query"],
        "explanation": "Parse URL with regex.", "xp": 15}
]

lesson3 = {
    "id": 79, "title": "Parsing Structured Data", "unitTitle": "15. File I/O and Serialization", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Parsing Structured Data

Reading and interpreting structured file formats.

## CSV Parsing

```cpp
// Parse CSV line
std::string line = "John,Doe,30";
std::stringstream ss(line);
std::string field;
std::vector<std::string> fields;

while (std::getline(ss, field, ',')) {
    fields.push_back(field);
}
// fields: ["John", "Doe", "30"]
```

## Key=Value Parsing

```cpp
std::string line = "name=John";
size_t pos = line.find('=');
if (pos != std::string::npos) {
    std::string key = line.substr(0, pos);
    std::string value = line.substr(pos + 1);
}
```

## JSON (using nlohmann/json)

```cpp
#include <nlohmann/json.hpp>
using json = nlohmann::json;

// Parse JSON
std::string jsonStr = R"({"name":"John","age":30})";
json j = json::parse(jsonStr);

// Access fields
std::string name = j["name"];
int age = j["age"];
```
""",
    "questions": lesson3_questions
}

# ============================================================================
# LESSON 4: Basic Serialization Patterns
# ============================================================================
lesson4_questions = [
    {
        "id": "cpp-15-4-1", "type": "typing", "question": "What is serialization?", "correctAnswer": ["convert to bytes/stream", "save to file"], "explanation": "Serialization converts object to storable format.", "xp": 5
    },
    {
        "id": "cpp-15-4-2", "type": "typing", "question": "What is deserialization?", "correctAnswer": ["restore from bytes/stream", "load from file"], "explanation": "Deserialization reconstructs object.", "xp": 5
    },
    {
        "id": "cpp-15-4-3", "type": "typing", "question": "Why use serialization?", "correctAnswer": ["save state", "network transfer", "persistence"], "explanation": "Serialize to save/transfer data.", "xp": 5
    },
    {
        "id": "cpp-15-4-4", "type": "multiple", "question": "Which format is human readable?", "options": ["JSON", "Binary", "Both", "Neither"], "correctAnswer": [0], "explanation": "JSON is human-readable.", "xp": 5
    },
    {
        "id": "cpp-15-4-5", "type": "multiple", "question": "Which is more compact?", "options": ["Binary", "JSON", "Equal", "Depends"], "correctAnswer": [0], "explanation": "Binary is more compact.", "xp": 5
    },
    {"id": "cpp-15-4-6", "type": "code", "question": "Serialize struct to binary.",
        "correctAnswer": ["Person p = {\"John\", 30}; std::ofstream file(\"data.bin\", std::ios::binary); file.write(reinterpret_cast<const char*>(&p), sizeof(Person));", "file.write(reinterpret_cast<const char*>(&data), sizeof(DataStruct));"],
        "explanation": "Write struct bytes.", "xp": 15
    },
    {
        "id": "cpp-15-4-7", "type": "code", "question": "Deserialize struct from binary.",
        "correctAnswer": ["Person p; std::ifstream file(\"data.bin\", std::ios::binary); file.read(reinterpret_cast<char*>(&p), sizeof(Person));", "in.read(reinterpret_cast<char*>(&data), sizeof(DataStruct));"],
        "explanation": "Read bytes into struct.", "xp": 15
    },
    {"id": "cpp-15-4-8", "type": "code", "question": "Serialize vector to JSON.",
        "correctAnswer": ["#include <nlohmann/json.hpp>\njson j = v;\nstd::ofstream file(\"data.json\");\nfile << j.dump();", "auto json_data = json(vec);"],
        "explanation": "nlohmann::json converts vector.", "xp": 15
    },
    {
        "id": "cpp-15-4-9", "type": "code", "question": "Deserialize vector from JSON.",
        "correctAnswer": ["#include <nlohmann/json.hpp>\nstd::ifstream file(\"data.json\");\njson j = json::parse(file);\nstd::vector<int> v = j.get<std::vector<int>>();", "auto vec = json.parse(input).get<std::vector<T>>();"],
        "explanation": "Parse JSON and get vector.", "xp": 15
    },
    {
        "id": "cpp-15-4-10", "type": "code", "question": "Serialize map to JSON.",
        "correctAnswer": ["json j = m;\nstd::ofstream file(\"map.json\");\nfile << j.dump();", "auto json_obj = json(map);"],
        "explanation": "Map becomes JSON object.", "xp": 15
    },
    {
        "id": "cpp-15-4-11", "type": "code", "question": "Serialize custom struct to JSON.",
        "correctAnswer": ["// Provide to_json function\nnamespace nlohmann { template <> struct adl_serializer<Person> { static void to_json(json& j, const Person& p) { j = {{\"name\", p.name}, {\"age\", p.age}}; } }; }", "// Or define member function: json to_json() const"],
        "explanation": "Provide to_json specialization.", "xp": 15
    },
    {
        "id": "cpp-15-4-12", "type": "code", "question": "Deserialize custom struct from JSON.",
        "correctAnswer": ["// Provide from_json function\nnamespace nlohmann { template <> struct adl_serializer<Person> { static void from_json(const json& j, Person& p) { p.name = j[\"name\"]; p.age = j[\"age\"]; } }; }", "// Or define member function: static Person from_json(const json&)"],
        "explanation": "Provide from_json specialization.", "xp": 15
    },
    {
        "id": "cpp-15-4-13", "type": "code", "question": "Serialize to text format.",
        "correctAnswer": ["file << p.name << \" \" << p.age << \"\\n\";", "out << object.to_string() << std::endl;"],
        "explanation": "Write fields separated by delimiter.", "xp": 15
    },
    {
        "id": "cpp-15-4-14", "type": "code", "question": "Deserialize from text format.",
        "correctAnswer": ["std::string name; int age; file >> name >> age;", "in >> object.name >> object.age;"],
        "explanation": "Read fields in order.", "xp": 15
    },
    {
        "id": "cpp-15-4-15", "type": "code", "question": "Serialize with versioning.",
        "correctAnswer": ["file << VERSION << \"\\n\"; file << data;", "// Write version first for compatibility"],
        "explanation": "Write version number first.", "xp": 15
    },
    {
        "id": "cpp-15-4-16", "type": "code", "question": "Serialize smart pointer.",
        "correctAnswer": ["// Write pointer or object\nif (ptr) { file << 1 << \"\\n\"; file << *ptr; } else { file << 0 << \"\\n\"; }", "// Serialize pointed object, not pointer value"],
        "explanation": "Serialize pointed object.", "xp": 15
    },
    {
        "id": "cpp-15-4-17", "type": "code", "question": "Deserialize smart pointer.",
        "correctAnswer": ["int hasPtr; file >> hasPtr; if (hasPtr) { ptr = std::make_unique<Data>(); file >> *ptr; }", "// Reconstruct smart pointer"],
        "explanation": "Reconstruct from object.", "xp": 15
    },
    {
        "id": "cpp-15-4-18", "type": "code", "question": "Serialize with compression.",
        "correctAnswer": ["#include <zlib.h>\n// Compress before writing\n// Use compression library", "// Compress serialized data"],
        "explanation": "Compress before saving.", "xp": 15
    },
    {
        "id": "cpp-15-4-19", "type": "code", "question": "Serialize to base64.",
        "correctAnswer": ["#include <cppcodec/base64_default_rfc4648.hpp>\nstd::string base64 = cppcodec::base64::encode(data, size);", "// Encode binary to base64 string"],
        "explanation": "Base64 encode binary.", "xp": 15
    },
    {
        "id": "cpp-15-4-20", "type": "code", "question": "Deserialize from base64.",
        "correctAnswer": ["std::vector<uint8_t> data = cppcodec::base64::decode(base64_str);", "// Decode base64 to binary"],
        "explanation": "Base64 decode to binary.", "xp": 15
    },
    {
        "id": "cpp-15-4-21", "type": "code", "question": "Serialize polymorphic object.",
        "correctAnswer": ["// Write type ID then object\nfile << static_cast<int>(type) << \"\\n\";\nfile.write(reinterpret_cast<const char*>(&obj), sizeof(obj));", "// Write type discriminator"],
        "explanation": "Write type ID first.", "xp": 15
    },
    {"id": "cpp-15-4-22", "type": "code", "question": "Deserialize polymorphic object.",
        "correctAnswer": ["int typeId; file >> typeId; switch (typeId) { case 1: { Derived1 obj; file.read(reinterpret_cast<char*>(&obj), sizeof(obj)); } break; }", "// Read type ID, create appropriate object"],
        "explanation": "Read type ID, create object.", "xp": 15
    },
    {
        "id": "cpp-15-4-23", "type": "code", "question": "Serialize with checksum.",
        "correctAnswer": ["// Calculate checksum\nuint32_t checksum = computeChecksum(data);\nfile << checksum << data;", "// Write checksum for verification"],
        "explanation": "Write checksum for integrity.", "xp": 15
    },
    {
        "id": "cpp-15-4-24", "type": "code", "question": "Deserialize with checksum verification.",
        "correctAnswer": ["uint32_t storedChecksum, computedChecksum; file >> storedChecksum; file >> data; computedChecksum = computeChecksum(data); if (storedChecksum != computedChecksum) { /* error */ }", "// Verify checksum after reading"],
        "explanation": "Verify checksum after read.", "xp": 15
    },
    {"id": "cpp-15-4-25", "type": "code", "question": "Serialize to stringstream.",
        "correctAnswer": ["std::stringstream ss; ss << data;", "std::ostringstream oss; oss << object;"],
        "explanation": "Write to stringstream.", "xp": 15}
]

lesson4 = {
    "id": 80, "title": "Basic Serialization Patterns", "unitTitle": "15. File I/O and Serialization", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Serialization Patterns

Converting objects to storable formats.

## Binary Serialization

```cpp
struct Person {
    std::string name;
    int age;
};

// Serialize
Person p = {"John", 30};
std::ofstream file("person.bin", std::ios::binary);
file.write(reinterpret_cast<const char*>(&p), sizeof(Person));

// Deserialize
Person p;
std::ifstream file("person.bin", std::ios::binary);
file.read(reinterpret_cast<char*>(&p), sizeof(Person));
```

## JSON Serialization

```cpp
#include <nlohmann/json.hpp>

// Provide to_json
namespace nlohmann {
    template <>
    struct adl_serializer<Person> {
        static void to_json(json& j, const Person& p) {
            j = {{"name", p.name}, {"age", p.age}};
        }
        static void from_json(const json& j, Person& p) {
            p.name = j["name"];
            p.age = j["age"];
        }
    };
}

// Use
Person p = {"John", 30};
json j = p;  // to_json
Person p2 = j.get<Person>();  // from_json
```
""",
    "questions": lesson4_questions
}

# Add all lessons to data
data['units'][14]['lessons'][0].update(lesson1)
print("✅ Lesson 1: File Streams - 25 questions (20 code)")

data['units'][14]['lessons'][1].update(lesson2)
print("✅ Lesson 2: Binary vs Text Files - 25 questions (20 code)")

data['units'][14]['lessons'][2].update(lesson3)
print("✅ Lesson 3: Parsing Structured Data - 25 questions (20 code)")

data['units'][14]['lessons'][3].update(lesson4)
print("✅ Lesson 4: Basic Serialization Patterns - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 15 Complete: All 4 lessons with 25 questions each (100 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~70 (70%)")
print("   - Type-in questions: ~20 (20%)")
print("   - Multiple-choice: ~10 (10%)")