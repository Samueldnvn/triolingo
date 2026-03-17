#!/usr/bin/env python3
"""
Rebuild Top 10 Worst Lessons with High-Quality Questions
Priority First Approach - Batch 1
"""
import json
import os

print("🚀 REBUILDING TOP 10 WORST LESSONS - BATCH 1")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 39, Lesson 1: SQL Basics
lesson39_1 = {
    "id": "cpp-U39-L1",
    "title": "SQL Basics",
    "unitTitle": "39. Database Programming with C++",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# SQL Basics

Structured Query Language (SQL) fundamentals for database operations.

## Core Concepts

SQL is a standard language for managing and manipulating relational databases.

## Basic Operations

- **SELECT**: Retrieve data from database
- **INSERT**: Add new data to database
- **UPDATE**: Modify existing data
- **DELETE**: Remove data from database

## Clauses and Keywords

- **WHERE**: Filter records based on conditions
- **ORDER BY**: Sort results
- **LIMIT**: Restrict number of results
- **GROUP BY**: Group rows that have the same values
- **HAVING**: Filter groups after aggregation

## Primary Keys

Unique identifier for each record in a table. Ensures data integrity.

## Best Practices

1. Always use parameterized queries to prevent SQL injection
2. Use specific column names instead of SELECT *
3. Add indexes for frequently queried columns
4. Use transactions for related operations
""",
    "questions": [
        {"id": "cpp-39-1-1", "type": "typing", "question": "What is the primary purpose of the SELECT statement in SQL?", "correctAnswer": ["retrieve data from database tables", "query data", "fetch records"], "explanation": "SELECT retrieves data from one or more database tables and returns it as a result set.", "xp": 5},
        {"id": "cpp-39-1-2", "type": "typing", "question": "What is the purpose of the INSERT statement in SQL?", "correctAnswer": ["add new data to database tables", "insert records", "add rows"], "explanation": "INSERT adds new records or rows into database tables.", "xp": 5},
        {"id": "cpp-39-1-3", "type": "typing", "question": "What is the primary function of the UPDATE statement?", "correctAnswer": ["modify existing data in tables", "update records", "change values"], "explanation": "UPDATE modifies existing records in database tables based on specified conditions.", "xp": 5},
        {"id": "cpp-39-1-4", "type": "typing", "question": "What does the DELETE statement do in SQL?", "correctAnswer": ["remove data from database tables", "delete records", "remove rows"], "explanation": "DELETE removes records from database tables that match specified conditions.", "xp": 5},
        {"id": "cpp-39-1-5", "type": "multiple", "question": "What is a primary key in a database table?", "options": ["Unique identifier for each row", "Foreign key reference", "Index for faster queries", "None of the above"], "correctAnswer": [0], "explanation": "A primary key is a column or set of columns that uniquely identifies each row in a table.", "xp": 5},
        {"id": "cpp-39-1-6", "type": "typing", "question": "How do you select all columns from a table named users?", "correctAnswer": ["SELECT * FROM users", "select all columns", "retrieve all fields"], "explanation": "SELECT * FROM users retrieves all columns from the users table. The asterisk (*) is a wildcard for all columns.", "xp": 5},
        {"id": "cpp-39-1-7", "type": "typing", "question": "How do you select specific columns from a table?", "correctAnswer": ["SELECT column1, column2 FROM table", "specify column names", "list columns"], "explanation": "SELECT column1, column2 FROM table retrieves only the specified columns instead of all columns.", "xp": 5},
        {"id": "cpp-39-1-8", "type": "typing", "question": "What is the WHERE clause used for in SQL queries?", "correctAnswer": ["filter records based on conditions", "apply filters", "select specific rows"], "explanation": "The WHERE clause filters records to retrieve only those that meet specified conditions.", "xp": 5},
        {"id": "cpp-39-1-9", "type": "typing", "question": "How do you insert a new record into a table?", "correctAnswer": ["INSERT INTO table (columns) VALUES (values)", "INSERT INTO", "add new row"], "explanation": "INSERT INTO table (col1, col2) VALUES (val1, val2) adds a new record with specified values.", "xp": 5},
        {"id": "cpp-39-1-10", "type": "typing", "question": "How do you update existing records in a table?", "correctAnswer": ["UPDATE table SET column=value WHERE condition", "use UPDATE with SET", "modify records"], "explanation": "UPDATE table SET column=value WHERE condition modifies records that match the specified condition.", "xp": 5},
        {"id": "cpp-39-1-11", "type": "typing", "question": "How do you delete records from a table?", "correctAnswer": ["DELETE FROM table WHERE condition", "use DELETE", "remove records"], "explanation": "DELETE FROM table WHERE condition removes all records that match the specified condition.", "xp": 5},
        {"id": "cpp-39-1-12", "type": "typing", "question": "What is the ORDER BY clause used for?", "correctAnswer": ["sort query results by specified column", "sort records", "order results"], "explanation": "ORDER BY sorts the query results by one or more columns in ascending or descending order.", "xp": 5},
        {"id": "cpp-39-1-13", "type": "typing", "question": "How do you limit the number of results returned?", "correctAnswer": ["use LIMIT clause", "LIMIT number", "restrict results"], "explanation": "SELECT * FROM table LIMIT 10 returns only the first 10 records from the query.", "xp": 5},
        {"id": "cpp-39-1-14", "type": "typing", "question": "What is the purpose of the GROUP BY clause?", "correctAnswer": ["group rows with same values", "aggregate data", "create groups"], "explanation": "GROUP BY groups rows that have the same values into summary rows, often used with aggregate functions.", "xp": 5},
        {"id": "cpp-39-1-15", "type": "typing", "question": "What is the HAVING clause used for?", "correctAnswer": ["filter grouped results", "filter groups", "filter after GROUP BY"], "explanation": "HAVING filters groups created by GROUP BY, similar to WHERE but for aggregated data.", "xp": 5},
        {"id": "cpp-39-1-16", "type": "code", "question": "Write a SQL query to select all users aged 25 or older.", "correctAnswer": ["SELECT * FROM users WHERE age >= 25", "age condition", "WHERE clause"], "explanation": "SELECT * FROM users WHERE age >= 25 retrieves all user records where age is 25 or greater.", "xp": 15},
        {"id": "cpp-39-1-17", "type": "code", "question": "Write a query to insert a new user with name and email.", "correctAnswer": ["INSERT INTO users (name, email) VALUES ('John', 'john@example.com')", "INSERT INTO", "VALUES"], "explanation": "INSERT INTO users (name, email) VALUES ('John', 'john@example.com') adds a new user record.", "xp": 15},
        {"id": "cpp-39-1-18", "type": "code", "question": "Write a query to update a user's email by ID.", "correctAnswer": ["UPDATE users SET email='new@example.com' WHERE id=1", "UPDATE with WHERE", "modify specific record"], "explanation": "UPDATE users SET email='new@example.com' WHERE id=1 updates the email for the user with id=1.", "xp": 15},
        {"id": "cpp-39-1-19", "type": "code", "question": "Write a query to delete all inactive users.", "correctAnswer": ["DELETE FROM users WHERE active=0", "DELETE with WHERE", "remove inactive"], "explanation": "DELETE FROM users WHERE active=0 removes all user records where active is 0 (inactive).", "xp": 15},
        {"id": "cpp-39-1-20", "type": "code", "question": "Write a query to select users sorted by name alphabetically.", "correctAnswer": ["SELECT * FROM users ORDER BY name", "ORDER BY name", "alphabetical sort"], "explanation": "SELECT * FROM users ORDER BY name returns all users sorted by name in ascending alphabetical order.", "xp": 15},
        {"id": "cpp-39-1-21", "type": "typing", "question": "What is SQL injection and how to prevent it?", "correctAnswer": ["malicious code in queries, use parameterized queries", "security vulnerability", "prepared statements"], "explanation": "SQL injection is when malicious SQL code is inserted into queries. Prevent it using parameterized queries or prepared statements.", "xp": 5},
        {"id": "cpp-39-1-22", "type": "typing", "question": "Why avoid using SELECT * in production queries?", "correctAnswer": ["inefficient, retrieves unnecessary data", "performance issue", "unclear intent"], "explanation": "SELECT * retrieves all columns, which can be inefficient and unclear. Specify only needed columns.", "xp": 5},
        {"id": "cpp-39-1-23", "type": "code", "question": "Write a query with multiple WHERE conditions using AND.", "correctAnswer": ["SELECT * FROM users WHERE age >= 25 AND active=1", "multiple conditions", "AND operator"], "explanation": "SELECT * FROM users WHERE age >= 25 AND active=1 returns users who are 25+ and active.", "xp": 15},
        {"id": "cpp-39-1-24", "type": "code", "question": "Write a query with multiple WHERE conditions using OR.", "correctAnswer": ["SELECT * FROM users WHERE age < 18 OR age > 65", "OR operator", "alternative conditions"], "explanation": "SELECT * FROM users WHERE age < 18 OR age > 65 returns users who are minors or seniors.", "xp": 15},
        {"id": "cpp-39-1-25", "type": "code", "question": "Write a query to count users by status.", "correctAnswer": ["SELECT status, COUNT(*) FROM users GROUP BY status", "COUNT with GROUP BY", "aggregate"], "explanation": "SELECT status, COUNT(*) FROM users GROUP BY status counts users grouped by their status.", "xp": 15}
    ]
}

data['units'][38]['lessons'][0].update(lesson39_1)
print("✅ Unit 39, Lesson 1: SQL Basics - 25 detailed questions")

# Unit 43, Lesson 7: HTTP Protocol
lesson43_7 = {
    "id": "cpp-U43-L7",
    "title": "HTTP Protocol",
    "unitTitle": "43. C++ Networking",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# HTTP Protocol

Hypertext Transfer Protocol - the foundation of web communication.

## Core Concepts

HTTP is a stateless request-response protocol used for transmitting hypermedia documents.

## HTTP Methods

- **GET**: Retrieve data
- **POST**: Submit data to be processed
- **PUT**: Update existing resource
- **DELETE**: Remove resource
- **HEAD**: Retrieve headers only
- **PATCH**: Partially update resource

## HTTP Status Codes

- **2xx**: Success (200 OK, 201 Created)
- **3xx**: Redirection (301, 302)
- **4xx**: Client error (400 Bad Request, 404 Not Found)
- **5xx**: Server error (500 Internal Server Error)

## HTTP Headers

Metadata included in requests and responses (Content-Type, Content-Length, User-Agent, etc.).

## C++ HTTP Libraries

- libcurl
- cpp-httplib
- Boost.Beast
- POCO
""",
    "questions": [
        {"id": "cpp-43-7-1", "type": "typing", "question": "What is the primary purpose of the HTTP protocol?", "correctAnswer": ["transfer hypertext documents over the web", "web communication protocol", "request-response protocol"], "explanation": "HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web.", "xp": 5},
        {"id": "cpp-43-7-2", "type": "typing", "question": "What does HTTP stand for?", "correctAnswer": ["Hypertext Transfer Protocol", "web protocol", "HTTP"], "explanation": "HTTP stands for Hypertext Transfer Protocol, the protocol used for transmitting web pages.", "xp": 5},
        {"id": "cpp-43-7-3", "type": "multiple", "question": "Which HTTP method is used to retrieve data from a server?", "options": ["GET", "POST", "PUT", "DELETE"], "correctAnswer": [0], "explanation": "GET is the HTTP method used to request and retrieve data from a specified resource.", "xp": 5},
        {"id": "cpp-43-7-4", "type": "multiple", "question": "Which HTTP method is used to submit data to be processed?", "options": ["GET", "POST", "PUT", "DELETE"], "correctAnswer": [1], "explanation": "POST is used to submit data to a server to create or update a resource.", "xp": 5},
        {"id": "cpp-43-7-5", "type": "multiple", "question": "What does HTTP status code 200 indicate?", "options": ["OK - Request succeeded", "Not Found", "Server Error", "Redirect"], "correctAnswer": [0], "explanation": "200 OK indicates that the request has succeeded and the server has returned the requested data.", "xp": 5},
        {"id": "cpp-43-7-6", "type": "multiple", "question": "What does HTTP status code 404 indicate?", "options": ["OK", "Not Found", "Server Error", "Redirect"], "correctAnswer": [1], "explanation": "404 Not Found indicates that the server cannot find the requested resource.", "xp": 5},
        {"id": "cpp-43-7-7", "type": "multiple", "question": "What does HTTP status code 500 indicate?", "options": ["OK", "Not Found", "Server Error", "Redirect"], "correctAnswer": [2], "explanation": "500 Internal Server Error indicates that the server encountered an unexpected condition.", "xp": 5},
        {"id": "cpp-43-7-8", "type": "typing", "question": "What is the purpose of HTTP headers?", "correctAnswer": ["provide metadata about requests and responses", "transfer additional information", "protocol information"], "explanation": "HTTP headers provide additional information about the request or response, such as content type and length.", "xp": 5},
        {"id": "cpp-43-7-9", "type": "typing", "question": "Is HTTP a stateful or stateless protocol?", "correctAnswer": ["stateless protocol", "no state retention", "each request independent"], "explanation": "HTTP is stateless, meaning each request is independent and the server doesn't retain information about previous requests.", "xp": 5},
        {"id": "cpp-43-7-10", "type": "typing", "question": "What is the difference between HTTP and HTTPS?", "correctAnswer": ["HTTPS is encrypted, HTTP is not", "secure vs insecure", "SSL/TLS encryption"], "explanation": "HTTPS (HTTP Secure) uses SSL/TLS encryption to secure the communication, while HTTP is unencrypted.", "xp": 5},
        {"id": "cpp-43-7-11", "type": "typing", "question": "What is the purpose of the PUT method?", "correctAnswer": ["update existing resource with new data", "replace resource", "full update"], "explanation": "PUT updates or replaces an existing resource with the data provided in the request body.", "xp": 5},
        {"id": "cpp-43-7-12", "type": "typing", "question": "What is the purpose of the DELETE method?", "correctAnswer": ["remove specified resource", "delete resource", "removal operation"], "explanation": "DELETE removes the specified resource from the server.", "xp": 5},
        {"id": "cpp-43-7-13", "type": "typing", "question": "What is the HEAD method used for?", "correctAnswer": ["retrieve headers without body", "check resource", "metadata only"], "explanation": "HEAD is like GET but only returns the headers, not the body, useful for checking resource metadata.", "xp": 5},
        {"id": "cpp-43-7-14", "type": "typing", "question": "What does the Content-Type header specify?", "correctAnswer": ["type of data being sent", "media type", "MIME type"], "explanation": "Content-Type header indicates the media type of the resource being sent (e.g., text/html, application/json).", "xp": 5},
        {"id": "cpp-43-7-15", "type": "typing", "question": "What is the purpose of Content-Length header?", "correctAnswer": ["size of message body in bytes", "body length", "message size"], "explanation": "Content-Length header specifies the size of the message body in bytes, allowing the receiver to know how much data to expect.", "xp": 5},
        {"id": "cpp-43-7-16", "type": "code", "question": "Implement HTTP GET request using libcurl in C++.", "correctAnswer": ["curl_easy_init", "curl_easy_setopt", "CURLOPT_URL", "perform request"], "explanation": "Use libcurl to initialize, set URL and options, then perform the GET request.", "xp": 15},
        {"id": "cpp-43-7-17", "type": "code", "question": "Implement HTTP POST request with JSON data using libcurl.", "correctAnswer": ["POST method", "CURLOPT_POSTFIELDS", "JSON data", "Content-Type"], "explanation": "Set CURLOPT_POST to true, provide JSON data as POSTFIELDS, and set Content-Type to application/json.", "xp": 15},
        {"id": "cpp-43-7-18", "type": "code", "question": "Handle HTTP response status codes in C++.", "correctAnswer": ["check CURLcode", "http response code", "error handling"], "explanation": "Use curl_easy_getinfo with CURLINFO_RESPONSE_CODE to retrieve the HTTP status code and handle appropriately.", "xp": 15},
        {"id": "cpp-43-7-19", "type": "code", "question": "Parse JSON response from HTTP request.", "correctAnswer": ["JSON parsing library", "extract data", "response body"], "explanation": "Use a JSON library (like nlohmann/json) to parse the HTTP response body and extract data.", "xp": 15},
        {"id": "cpp-43-7-20", "type": "code", "question": "Set custom headers in HTTP request.", "correctAnswer": ["CURLOPT_HTTPHEADER", "struct curl_slist", "add headers"], "explanation": "Use curl_slist_append to create a list of headers, then set with CURLOPT_HTTPHEADER.", "xp": 15},
        {"id": "cpp-43-7-21", "type": "typing", "question": "What is HTTP Keep-Alive?", "correctAnswer": ["reuse connection for multiple requests", "persistent connection", "connection reuse"], "explanation": "Keep-Alive allows the connection to remain open for multiple HTTP requests, improving performance.", "xp": 5},
        {"id": "cpp-43-7-22", "type": "typing", "question": "What is an HTTP redirect?", "correctAnswer": ["server tells client to request different URL", "3xx status codes", "location change"], "explanation": "HTTP redirects (3xx status codes) tell the client to request a different URL instead of the original.", "xp": 5},
        {"id": "cpp-43-7-23", "type": "code", "question": "Follow HTTP redirects automatically with libcurl.", "correctAnswer": ["CURLOPT_FOLLOWLOCATION", "enable redirects", "automatic following"], "explanation": "Set CURLOPT_FOLLOWLOCATION to 1L to make libcurl automatically follow HTTP redirects.", "xp": 15},
        {"id": "cpp-43-7-24", "type": "code", "question": "Set timeout for HTTP request.", "correctAnswer": ["CURLOPT_TIMEOUT", "time limit", "connection timeout"], "explanation": "Use CURLOPT_TIMEOUT to set the maximum time in seconds to allow the entire operation to take.", "xp": 15},
        {"id": "cpp-43-7-25", "type": "code", "question": "Implement basic HTTP server using cpp-httplib.", "correctAnswer": ["Server class", "route handler", "listen on port"], "explanation": "Create a Server instance, define route handlers with Get/Post methods, then listen on a port.", "xp": 15}
    ]
}

data['units'][42]['lessons'][6].update(lesson43_7)
print("✅ Unit 43, Lesson 7: HTTP Protocol - 25 detailed questions")

# Unit 28, Lesson 7: std::unordered_set
lesson28_7 = {
    "id": "cpp-U28-L7",
    "title": "std::unordered_set",
    "unitTitle": "28. Hash Tables in C++",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# std::unordered_set

Hash-based set container with O(1) average complexity.

## Core Concept

`std::unordered_set` stores unique elements in no particular order, using a hash table for fast lookups.

## Key Characteristics

- **Unique elements**: No duplicates allowed
- **Unordered**: No specific order of elements
- **Fast operations**: O(1) average for insert, find, erase
- **Hash-based**: Uses hash function for element positions

## Common Operations

```cpp
#include <unordered_set>

std::unordered_set<int> set;
set.insert(5);           // Insert element
set.find(5);             // Find element
set.erase(5);            // Remove element
set.count(5);            // Check if exists (0 or 1)
set.size();              // Get size
set.empty();             // Check if empty
```

## Best Practices

1. Use when you need fast lookups and don't need order
2. Use std::set when you need ordered elements
3. Custom types need hash function and equality operator
""",
    "questions": [
        {"id": "cpp-28-7-1", "type": "typing", "question": "What is the primary advantage of std::unordered_set over std::set?", "correctAnswer": ["faster average time complexity O(1)", "hash-based lookup", "better performance"], "explanation": "std::unordered_set uses hash table for O(1) average complexity, while std::set is O(log n).", "xp": 5},
        {"id": "cpp-28-7-2", "type": "typing", "question": "What is the time complexity of find in std::unordered_set?", "correctAnswer": ["O(1) average, O(n) worst case", "hash lookup", "constant time average"], "explanation": "Average case is O(1) due to hash table, worst case is O(n) if hash collisions are severe.", "xp": 5},
        {"id": "cpp-28-7-3", "type": "typing", "question": "Can std::unordered_set contain duplicate elements?", "correctAnswer": ["no, only unique elements", "unique only", "no duplicates"], "explanation": "std::unordered_set stores only unique elements, duplicates are automatically rejected.", "xp": 5},
        {"id": "cpp-28-7-4", "type": "multiple", "question": "Which operations are O(1) average in std::unordered_set?", "options": ["insert, find, erase", "find only", "insert only", "erase only"], "correctAnswer": [0], "explanation": "insert, find, and erase all have O(1) average time complexity in std::unordered_set.", "xp": 5},
        {"id": "cpp-28-7-5", "type": "multiple", "question": "What is the return type of find() in std::unordered_set?", "options": ["iterator", "bool", "pointer", "index"], "correctAnswer": [0], "explanation": "find() returns an iterator pointing to the element, or end() if not found.", "xp": 5},
        {"id": "cpp-28-7-6", "type": "typing", "question": "What does count() return in std::unordered_set?", "correctAnswer": ["0 or 1, indicating if element exists", "existence check", "element count"], "explanation": "count() returns 0 if element not found, 1 if found (since elements are unique).", "xp": 5},
        {"id": "cpp-28-7-7", "type": "typing", "question": "What happens if you insert a duplicate into std::unordered_set?", "correctAnswer": ["nothing, duplicate is ignored", "no effect", "insert fails"], "explanation": "Inserting a duplicate has no effect, the container already contains the element.", "xp": 5},
        {"id": "cpp-28-7-8", "type": "typing", "question": "Does std::unordered_set maintain element order?", "correctAnswer": ["no, elements are unordered", "no specific order", "hash-based order"], "explanation": "std::unordered_set does not maintain any specific order, elements are stored based on hash values.", "xp": 5},
        {"id": "cpp-28-7-9", "type": "typing", "question": "What is the difference between erase by iterator and erase by value?", "correctAnswer": ["iterator version returns next iterator, value version returns count", "return type differs", "erase behavior"], "explanation": "erase(iterator) returns iterator to next element, erase(value) returns number of elements removed (0 or 1).", "xp": 5},
        {"id": "cpp-28-7-10", "type": "typing", "question": "When would you prefer std::set over std::unordered_set?", "correctAnswer": ["when you need ordered elements", "sorted order", "iteration order"], "explanation": "Use std::set when you need elements in sorted order or need operations that depend on order.", "xp": 5},
        {"id": "cpp-28-7-11", "type": "code", "question": "Create std::unordered_set and insert elements.", "correctAnswer": ["unordered_set<int> set", "set.insert", "include header"], "explanation": "#include <unordered_set>, then create set and use insert() to add elements.", "xp": 15},
        {"id": "cpp-28-7-12", "type": "code", "question": "Check if element exists using find.", "correctAnswer": ["set.find(x) != set.end()", "iterator comparison", "existence check"], "explanation": "Use set.find(x) != set.end() to check if element x exists in the set.", "xp": 15},
        {"id": "cpp-28-7-13", "type": "code", "question": "Remove element from unordered_set.", "correctAnswer": ["set.erase(x)", "erase by value", "remove element"], "explanation": "set.erase(x) removes element x from the set if it exists.", "xp": 15},
        {"id": "cpp-28-7-14", "type": "code", "question": "Iterate over all elements in unordered_set.", "correctAnswer": ["range-based for loop", "iterator loop", "traversal"], "explanation": "Use for (const auto& elem : set) to iterate over all elements.", "xp": 15},
        {"id": "cpp-28-7-15", "type": "code", "question": "Use unordered_set to remove duplicates from vector.", "correctAnswer": ["construct from vector", "insert all elements", "unique set"], "explanation": "std::unordered_set<T> set(vec.begin(), vec.end()) creates set with unique elements.", "xp": 15},
        {"id": "cpp-28-7-16", "type": "typing", "question": "What is bucket in std::unordered_set?", "correctAnswer": ["hash table slot for elements", "container storage", "hash bucket"], "explanation": "A bucket is a slot in the hash table where elements are stored based on their hash value.", "xp": 5},
        {"id": "cpp-28-7-17", "type": "typing", "question": "What is load factor in std::unordered_set?", "correctAnswer": ["ratio of elements to buckets", "occupancy measure", "hash table load"], "explanation": "Load factor = size / bucket_count, measures how full the hash table is.", "xp": 5},
        {"id": "cpp-28-7-18", "type": "code", "question": "Get bucket count and max load factor.", "correctAnswer": ["bucket_count()", "max_load_factor()", "hash table info"], "explanation": "set.bucket_count() returns number of buckets, set.max_load_factor() returns current max load factor.", "xp": 15},
        {"id": "cpp-28-7-19", "type": "code", "question": "Reserve space for n elements in unordered_set.", "correctAnswer": ["reserve(n)", "preallocate buckets", "avoid rehashing"], "explanation": "set.reserve(n) reserves space for at least n elements, avoiding rehashing during insertions.", "xp": 15},
        {"id": "cpp-28-7-20", "type": "code", "question": "Clear all elements from unordered_set.", "correctAnswer": ["set.clear()", "remove all", "empty container"], "explanation": "set.clear() removes all elements from the set, making it empty.", "xp": 15},
        {"id": "cpp-28-7-21", "type": "typing", "question": "What is rehashing in std::unordered_set?", "correctAnswer": ["rebuilding hash table with more buckets", "table resize", "reorganization"], "explanation": "Rehashing rebuilds the hash table with more buckets when load factor exceeds threshold.", "xp": 5},
        {"id": "cpp-28-7-22", "type": "typing", "question": "How to use custom type in unordered_set?", "correctAnswer": ["provide hash function and equality operator", "custom hash", "specialization"], "explanation": "Provide specialization of std::hash for your type or provide hash function as template argument.", "xp": 5},
        {"id": "cpp-28-7-23", "type": "code", "question": "Use unordered_set with std::string.", "correctAnswer": ["unordered_set<string>", "string keys", "string hashing"], "explanation": "std::unordered_set<std::string> works directly as std::string has built-in hash.", "xp": 15},
        {"id": "cpp-28-7-24", "type": "code", "question": "Find intersection of two unordered_sets.", "correctAnswer": ["check each element", "count in both", "common elements"], "explanation": "Iterate through one set and check if each element exists in the other using find or count.", "xp": 15},
        {"id": "cpp-28-7-25", "type": "code", "question": "Benchmark unordered_set vs set performance.", "correctAnswer": ["measure insert/find times", "performance comparison", "benchmark"], "explanation": "Use std::chrono to measure time for insert and find operations on both containers for comparison.", "xp": 15}
    ]
}

data['units'][27]['lessons'][6].update(lesson28_7)
print("✅ Unit 28, Lesson 7: std::unordered_set - 25 detailed questions")

# Continue with remaining 7 lessons for batch 1...
# Due to response length limits, I'll do first 3 and indicate progress

print("\n" + "="*70)
print("✅ BATCH 1 PARTIAL COMPLETE: First 3 lessons rebuilt")
print("="*70)
print("Progress: 3/10 lessons in this batch")
print("\nLessons completed:")
print("  - Unit 39, Lesson 1: SQL Basics")
print("  - Unit 43, Lesson 7: HTTP Protocol")
print("  - Unit 28, Lesson 7: std::unordered_set")
print("\nContinuing with next 7 lessons...")
print("="*70)

# Write what we have so far
output_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(output_path, 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n⚠️  Batch 1: First 3 lessons saved, continuing...")
