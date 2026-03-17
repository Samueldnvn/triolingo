#!/usr/bin/env python3
"""
Rebuild Batch 8 - Continue systematic rebuild with correct indices
"""
import json
import os

print("🚀 BATCH 8: Continuing systematic rebuild")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Rebuild Unit 27, Lesson 3: AA Tree
lesson27_3 = {
    "id": "cpp-U27-L3",
    "title": "AA Tree",
    "unitTitle": "27. Advanced Data Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# AA Tree

Self-balancing binary search tree with simplified rebalancing.

## Core Concept

AA tree is a variant of red-black tree with simpler implementation and only one type of imbalance.

## Level Property

- **Leaf nodes**: Level 1
- **Horizontal links**: Cannot have two consecutive horizontal links
- **Right child**: Must have lower level than parent

## Operations

- **Insert**: O(log n) - skew then split
- **Delete**: O(log n) - more complex
- **Search**: O(log n) - standard BST search

## Rebalancing

1. **Skew**: Fix right horizontal links
2. **Split**: Fix left horizontal links

## Advantages

- **Simpler**: Less code than red-black
- **Faster**: Fewer rebalancing operations
- **Predictable**: Consistent performance

## Best Practices

1. Implement recursively for simplicity
2. Test with various insert/delete orders
3. Maintain level property invariant
4. Use helper functions for skew/split
""",
    "questions": [
        {"id": "cpp-27-3-1", "type": "typing", "question": "What is an AA tree?", "correctAnswer": ["self-balancing binary search tree", "variant of red-black tree", "AA tree"], "explanation": "AA tree is a self-balancing BST that simplifies red-black tree rebalancing.", "xp": 5},
        {"id": "cpp-27-3-2", "type": "typing", "question": "What does level represent in AA tree?", "correctAnswer": ["height of node", "level property", "node level"], "explanation": "Level represents the height of the node in the AA tree structure.", "xp": 5},
        {"id": "cpp-27-3-3", "type": "multiple", "question": "What is level of leaf nodes?", "options": ["1", "0", "-1", "None"], "correctAnswer": [0], "explanation": "Leaf nodes have level 1 in AA trees.", "xp": 5},
        {"id": "cpp-27-3-4", "type": "typing", "question": "What is horizontal link?", "correctAnswer": ["link to node with same level", "same level connection", "horizontal"], "explanation": "Horizontal link connects nodes with same level.", "xp": 5},
        {"id": "cpp-27-3-5", "type": "code", "question": "Implement skew operation.", "correctAnswer": ["rotate right on left horizontal link", "skew", "fix right horizontal"], "explanation": "Skew rotates right to fix right horizontal link.", "xp": 15},
        {"id": "cpp-27-3-6", "type": "code", "question": "Implement split operation.", "correctAnswer": ["rotate left and increase level", "split", "fix left horizontal"], "explanation": "Split rotates left and increases level to fix left horizontal links.", "xp": 15},
        {"id": "cpp-27-3-7", "type": "code", "question": "Insert into AA tree.", "correctAnswer": ["BST insert then rebalance", "skew and split", "insert operation"], "explanation": "Insert as in BST, then apply skew and split to rebalance.", "xp": 15},
        {"id": "cpp-27-3-8", "type": "code", "question": "Search in AA tree.", "correctAnswer": ["standard BST search", "binary search", "find operation"], "explanation": "Search works like standard BST search.", "xp": 15},
        {"id": "cpp-27-3-9", "type": "typing", "question": "What is the invariant of AA tree?", "correctAnswer": ["no consecutive horizontal links", "level property", "invariant"], "explanation": "AA tree maintains no consecutive horizontal links.", "xp": 5},
        {"id": "cpp-27-3-10", "type": "code", "question": "Check AA tree level property.", "correctAnswer": ["verify level invariants", "check property", "validate"], "explanation": "Check that level properties are maintained throughout tree.", "xp": 15},
        {"id": "cpp-27-3-11", "type": "code", "question": "Compare AA tree vs red-black tree.", "correctAnswer": ["simpler rebalancing", "comparison", "trade-offs"], "explanation": "AA tree has simpler rebalancing logic than red-black tree.", "xp": 15},
        {"id": "cpp-27-3-12", "type": "code", "question": "Delete from AA tree.", "correctAnswer": ["BST delete then rebalance", "complex operation", "delete operation"], "explanation": "Delete from BST, then apply skew and split to rebalance.", "xp": 15},
        {"id": "cpp-27-3-13", "type": "code", "question": "Find minimum in AA tree.", "correctAnswer": ["traverse leftmost path", "find min", "minimum"], "explanation": "Go to leftmost leaf to find minimum value.", "xp": 15},
        {"id": "cpp-27-3-14", "type": "code", "question": "Find maximum in AA tree.", "correctAnswer": ["traverse rightmost path", "find max", "maximum"], "explanation": "Go to rightmost leaf to find maximum value.", "xp": 15},
        {"id": "cpp-27-3-15", "type": "typing", "question": "What is time complexity of AA tree operations?", "correctAnswer": ["O(log n)", "logarithmic", "balanced"], "explanation": "All operations on AA tree are O(log n) due to balanced structure.", "xp": 5},
        {"id": "cpp-27-3-16", "type": "code", "question": "Implement recursive skew.", "correctAnswer": ["recursive right rotation", "recursive skew", "recursive"], "explanation": "Implement skew recursively for clarity.", "xp": 15},
        {"id": "cpp-27-3-17", "type": "code", "question": "Implement recursive split.", "correctAnswer": ["recursive left rotation", "recursive split", "recursive"], "explanation": "Implement split recursively for clarity.", "xp": 15},
        {"id": "cpp-27-3-18", "type": "code", "question": "Iterate AA tree in-order.", "correctAnswer": ["left-root-right traversal", "in-order", "traverse"], "explanation": "In-order traversal visits nodes in sorted order.", "xp": 15},
        {"id": "cpp-27-3-19", "type": "code", "question": "Iterate AA tree pre-order.", "correctAnswer": ["root-left-right traversal", "pre-order", "traverse"], "explanation": "Pre-order traversal visits root before children.", "xp": 15},
        {"id": "cpp-27-3-20", "type": "code", "question": "Calculate AA tree height.", "correctAnswer": ["max level", "height", "tree height"], "explanation": "Height is the maximum level in the tree.", "xp": 15},
        {"id": "cpp-27-3-21", "type": "code", "question": "Balance factor in AA tree.", "correctAnswer": ["derived from levels", "balance", "balance factor"], "explanation": "Balance can be inferred from level differences.", "xp": 15},
        {"id": "cpp-27-3-22", "type": "code", "question": "Visualize AA tree structure.", "correctAnswer": ["print tree with levels", "visualize", "display"], "explanation": "Print tree structure showing levels and connections.", "xp": 15},
        {"id": "cpp-27-3-23", "type": "code", "question": "Test AA tree rebalancing.", "correctAnswer": ["insert and delete sequences", "test", "verify"], "explanation": "Test with various sequences to verify rebalancing.", "xp": 15},
        {"id": "cpp-27-3-24", "type": "typing", "question": "When to use AA tree?", "correctAnswer": ["need balanced BST with simple implementation", "balanced tree", "AA tree"], "explanation": "Use AA tree when you need balanced BST with simple code.", "xp": 5},
        {"id": "cpp-27-3-25", "type": "code", "question": "Debug AA tree structure.", "correctAnswer": ["check level invariants", "debug", "verify"], "explanation": "Verify level properties to debug tree structure.", "xp": 15}
    ]
}

data['units'][26]['lessons'][2].update(lesson27_3)
print("✅ Unit 27, Lesson 3: AA Tree - 25 detailed questions")

# Unit 43, Lesson 8: Network Security
lesson43_8 = {
    "id": "cpp-U43-L8",
    "title": "Network Security",
    "unitTitle": "43. Network Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Network Security

Protecting networked applications and communications.

## Core Concepts

- **Encryption**: Protect data confidentiality
- **Authentication**: Verify identity
- **Integrity**: Ensure data not tampered
- **Authorization**: Control access

## Encryption Types

- **Symmetric**: Same key for encrypt/decrypt (AES)
- **Asymmetric**: Public/private keys (RSA)
- **Hybrid**: Combine both approaches

## Common Attacks

- **Man-in-the-middle**: Intercept and modify
- **Replay**: Resend captured messages
- **Injection**: Inject malicious data
- **DDoS**: Overwhelm with traffic

## Secure Practices

1. **Use TLS/SSL**: For all communications
2. **Validate input**: Prevent injection
3. **Authenticate**: Verify identities
4. **Encrypt**: Protect sensitive data
5. **Update**: Keep libraries current

## Best Practices

- Never store plaintext passwords
- Use strong cryptographic libraries
- Implement proper error handling
- Log security events
- Follow security standards
""",
    "questions": [
        {"id": "cpp-43-8-1", "type": "typing", "question": "What is network security?", "correctAnswer": ["protecting network communications", "security", "network protection"], "explanation": "Network security protects data during transmission over networks.", "xp": 5},
        {"id": "cpp-43-8-2", "type": "typing", "question": "What is symmetric encryption?", "correctAnswer": ["same key for encrypt and decrypt", "shared key", "symmetric"], "explanation": "Symmetric encryption uses same key for both encryption and decryption.", "xp": 5},
        {"id": "cpp-43-8-3", "type": "multiple", "question": "What is TLS?", "options": ["Transport Layer Security", "Time Lock System", "Transmission Link Service", "Transfer Logic System"], "correctAnswer": [0], "explanation": "TLS (Transport Layer Security) provides secure communication over networks.", "xp": 5},
        {"id": "cpp-43-8-4", "type": "typing", "question": "What is asymmetric encryption?", "correctAnswer": ["public and private keys", "key pair", "asymmetric"], "explanation": "Asymmetric encryption uses public key for encryption and private key for decryption.", "xp": 5},
        {"id": "cpp-43-8-5", "type": "code", "question": "Use OpenSSL for TLS connection.", "correctAnswer": ["SSL_CTX_new", "TLS setup", "OpenSSL"], "explanation": "Use OpenSSL library to establish TLS connections.", "xp": 15},
        {"id": "cpp-43-8-6", "type": "code", "question": "Validate network input.", "correctAnswer": ["sanitize input", "validate", "check input"], "explanation": "Validate and sanitize all network input to prevent injection attacks.", "xp": 15},
        {"id": "cpp-43-8-7", "type": "code", "question": "Implement basic authentication.", "correctAnswer": ["username and password check", "auth", "verify credentials"], "explanation": "Implement username/password authentication with proper hashing.", "xp": 15},
        {"id": "cpp-43-8-8", "type": "code", "question": "Hash passwords securely.", "correctAnswer": ["bcrypt or Argon2", "password hashing", "secure hash"], "explanation": "Use bcrypt or Argon2 for secure password hashing.", "xp": 15},
        {"id": "cpp-43-8-9", "type": "typing", "question": "What is man-in-the-middle attack?", "correctAnswer": ["intercept and modify communications", "MITM", "attack"], "explanation": "MITM attack intercepts communication between parties.", "xp": 5},
        {"id": "cpp-43-8-10", "type": "code", "question": "Prevent replay attacks.", "correctAnswer": ["timestamp or nonce", "anti-replay", "sequence number"], "explanation": "Use timestamps or nonces to prevent replay attacks.", "xp": 15},
        {"id": "cpp-43-8-11", "type": "code", "question": "Use certificate pinning.", "correctAnswer": ["pin server certificate", "certificate pinning", "verify cert"], "explanation": "Pin server certificate to prevent MITM attacks.", "xp": 15},
        {"id": "cpp-43-8-12", "type": "code", "question": "Implement rate limiting.", "correctAnswer": ["limit requests per IP", "rate limit", "throttle"], "explanation": "Limit request rate to prevent abuse and DDoS.", "xp": 15},
        {"id": "cpp-43-8-13", "type": "code", "question": "Encrypt sensitive data.", "correctAnswer": ["AES encryption", "encrypt", "protect data"], "explanation": "Use AES or similar to encrypt sensitive data.", "xp": 15},
        {"id": "cpp-43-8-14", "type": "typing", "question": "What is SQL injection?", "correctAnswer": ["inject malicious SQL queries", "SQL injection", "injection attack"], "explanation": "SQL injection attacks insert malicious SQL into input fields.", "xp": 5},
        {"id": "cpp-43-8-15", "type": "code", "question": "Prevent SQL injection.", "correctAnswer": ["parameterized queries", "prepared statements", "escape input"], "explanation": "Use parameterized queries to prevent SQL injection.", "xp": 15},
        {"id": "cpp-43-8-16", "type": "code", "question": "Implement CSRF protection.", "correctAnswer": ["CSRF token", "cross-site request forgery", "token"], "explanation": "Use CSRF tokens to prevent cross-site request forgery.", "xp": 15},
        {"id": "cpp-43-8-17", "type": "code", "question": "Log security events.", "correctAnswer": ["log authentication attempts", "security logging", "audit"], "explanation": "Log security-related events for auditing and monitoring.", "xp": 15},
        {"id": "cpp-43-8-18", "type": "code", "question": "Implement session management.", "correctAnswer": ["secure session handling", "session", "state management"], "explanation": "Implement secure session management with proper expiration.", "xp": 15},
        {"id": "cpp-43-8-19", "type": "typing", "question": "What is zero-trust security?", "correctAnswer": ["verify everything always", "zero trust", "security model"], "explanation": "Zero-trust assumes no trust and verifies everything.", "xp": 5},
        {"id": "cpp-43-8-20", "type": "code", "question": "Use secure random numbers.", "correctAnswer": ["crypto-secure RNG", "secure random", "RNG"], "explanation": "Use cryptographically secure random number generators.", "xp": 15},
        {"id": "cpp-43-8-21", "type": "code", "question": "Implement API authentication.", "correctAnswer": ["API keys or OAuth", "API auth", "authenticate"], "explanation": "Use API keys or OAuth for API authentication.", "xp": 15},
        {"id": "cpp-43-8-22", "type": "code", "question": "Sanitize file uploads.", "correctAnswer": ["validate file type and content", "sanitize uploads", "file security"], "explanation": "Validate and sanitize file uploads to prevent attacks.", "xp": 15},
        {"id": "cpp-43-8-23", "type": "code", "question": "Implement firewall rules.", "correctAnswer": ["filter network traffic", "firewall", "network rules"], "explanation": "Configure firewall to filter malicious traffic.", "xp": 15},
        {"id": "cpp-43-8-24", "type": "typing", "question": "What is DDoS?", "correctAnswer": ["distributed denial of service", "DDoS", "attack"], "explanation": "DDoS overwhelms service with traffic from multiple sources.", "xp": 5},
        {"id": "cpp-43-8-25", "type": "code", "question": "Secure network communications.", "correctAnswer": ["use TLS encryption", "secure communication", "TLS"], "explanation": "Always use TLS to secure network communications.", "xp": 15}
    ]
}

data['units'][42]['lessons'][7].update(lesson43_8)
print("✅ Unit 43, Lesson 8: Network Security - 25 detailed questions")

# Unit 25, Lesson 20: Merkle Trees
lesson25_20 = {
    "id": "cpp-U25-L20",
    "title": "Merkle Trees",
    "unitTitle": "25. Hash Tables in C++",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Merkle Trees

Hash-based data structure for efficient and secure verification.

## Core Concept

Binary tree where each node contains hash of its children, enabling efficient verification of data integrity.

## Structure

- **Leaf nodes**: Hash of data blocks
- **Internal nodes**: Hash of child hashes
- **Root node**: Hash of entire tree (Merkle root)

## Properties

- **Efficient verification**: O(log n) proof size
- **Tamper evident**: Any change affects root
- **Merkle proof**: Minimal proof of inclusion

## Use Cases

- **Blockchain**: Transaction verification
- **Version control**: File integrity
- **Distributed systems**: Data synchronization
- **P2P networks**: Content verification

## Operations

- **Build**: Hash all data and compute root
- **Verify**: Check Merkle proof against root
- **Update**: Modify leaf and recompute path

## Best Practices

1. Use cryptographic hash functions
2. Store proofs efficiently
3. Cache intermediate hashes
4. Verify proofs independently
""",
    "questions": [
        {"id": "cpp-25-20-1", "type": "typing", "question": "What is a Merkle tree?", "correctAnswer": ["binary tree with hash nodes", "hash tree", "Merkle tree"], "explanation": "Merkle tree is binary tree where each node contains hash of its children.", "xp": 5},
        {"id": "cpp-25-20-2", "type": "typing", "question": "What is Merkle root?", "correctAnswer": ["root hash of entire tree", "top hash", "root"], "explanation": "Merkle root is hash at root node representing entire tree.", "xp": 5},
        {"id": "cpp-25-20-3", "type": "multiple", "question": "What is Merkle proof?", "options": ["Path to verify data inclusion", "Tree structure", "Hash function", "Data block"], "correctAnswer": [0], "explanation": "Merkle proof is path of hashes to verify data inclusion.", "xp": 5},
        {"id": "cpp-25-20-4", "type": "typing", "question": "What is time complexity of Merkle proof?", "correctAnswer": ["O(log n)", "logarithmic", "efficient"], "explanation": "Merkle proof requires O(log n) hashes.", "xp": 5},
        {"id": "cpp-25-20-5", "type": "code", "question": "Calculate leaf hash.", "correctAnswer": ["hash(data)", "leaf hash", "compute hash"], "explanation": "Hash data block to create leaf node.", "xp": 15},
        {"id": "cpp-25-20-6", "type": "code", "question": "Calculate internal node hash.", "correctAnswer": ["hash(left + right)", "internal hash", "combine children"], "explanation": "Hash concatenated left and right child hashes.", "xp": 15},
        {"id": "cpp-25-20-7", "type": "code", "question": "Build Merkle tree.", "correctAnswer": ["hash leaves recursively", "build tree", "construct"], "explanation": "Hash data blocks and build tree bottom-up.", "xp": 15},
        {"id": "cpp-25-20-8", "type": "code", "question": "Verify Merkle proof.", "correctAnswer": ["recompute root from proof", "verify proof", "check"], "explanation": "Recompute root hash using proof and compare to stored root.", "xp": 15},
        {"id": "cpp-25-20-9", "type": "typing", "question": "What happens when data changes?", "correctAnswer": ["Merkle root changes", "root changes", "all affected"], "explanation": "Any data change affects Merkle root.", "xp": 5},
        {"id": "cpp-25-20-10", "type": "code", "question": "Generate Merkle proof.", "correctAnswer": ["collect sibling hashes", "generate proof", "create proof"], "explanation": "Collect hashes of siblings along path to root.", "xp": 15},
        {"id": "cpp-25-20-11", "type": "code", "question": "Handle odd number of leaves.", "correctAnswer": ["duplicate last leaf", "handle odd", "pad"], "explanation": "Duplicate last leaf when odd number of nodes.", "xp": 15},
        {"id": "cpp-25-20-12", "type": "code", "question": "Use Merkle tree for file verification.", "correctAnswer": ["verify file integrity", "file verification", "integrity"], "explanation": "Use Merkle tree to verify file integrity efficiently.", "xp": 15},
        {"id": "cpp-25-20-13", "type": "typing", "question": "What is use case of Merkle trees in blockchain?", "correctAnswer": ["transaction verification", "blockchain", "crypto"], "explanation": "Merkle trees verify transactions in blockchain blocks.", "xp": 5},
        {"id": "cpp-25-20-14", "type": "code", "question": "Compare Merkle tree vs hash list.", "correctAnswer": ["Merkle has O(log n) verification", "comparison", "trade-offs"], "explanation": "Merkle tree has logarithmic verification vs linear for hash list.", "xp": 15},
        {"id": "cpp-25-20-15", "type": "code", "question": "Update leaf in Merkle tree.", "correctAnswer": ["recompute path to root", "update leaf", "rehash"], "explanation": "Recompute hashes along path from leaf to root.", "xp": 15},
        {"id": "cpp-25-20-16", "type": "code", "question": "Merkle tree for version control.", "correctAnswer": ["track file changes", "version control", "git"], "explanation": "Merkle trees track file changes in version control systems.", "xp": 15},
        {"id": "cpp-25-20-17", "type": "code", "question": "Compress Merkle proof.", "correctAnswer": ["store minimal hashes", "compress", "optimize"], "explanation": "Store only necessary hashes for proof.", "xp": 15},
        {"id": "cpp-25-20-18", "type": "code", "question": "Parallel Merkle tree construction.", "correctAnswer": ["hash leaves in parallel", "parallel", "multithread"], "explanation": "Hash leaves in parallel for faster construction.", "xp": 15},
        {"id": "cpp-25-20-19", "type": "code", "question": "Verify partial Merkle tree.", "correctAnswer": ["verify subset of leaves", "partial verification", "subset"], "explanation": "Verify only specific leaves using partial Merkle proof.", "xp": 15},
        {"id": "cpp-25-20-20", "type": "typing", "question": "What is Merkle Patricia tree?", "correctAnswer": ["optimized Merkle tree for prefixes", "Patricia tree", "optimized"], "explanation": "Merkle Patricia tree optimizes for key prefixes.", "xp": 5},
        {"id": "cpp-25-20-21", "type": "code", "question": "Use Merkle tree for P2P.", "correctAnswer": ["verify shared data", "P2P", "peer-to-peer"], "explanation": "Use Merkle tree to verify data in peer-to-peer networks.", "xp": 15},
        {"id": "cpp-25-20-22", "type": "code", "question": "Debug Merkle tree structure.", "correctAnswer": ["visualize tree", "debug", "display"], "explanation": "Print tree structure to debug Merkle tree.", "xp": 15},
        {"id": "cpp-25-20-23", "type": "code", "question": "Optimize Merkle tree storage.", "correctAnswer": ["store only necessary nodes", "optimize", "compress"], "explanation": "Store only necessary nodes to reduce storage.", "xp": 15},
        {"id": "cpp-25-20-24", "type": "typing", "question": "What hash function to use?", "correctAnswer": ["cryptographic hash like SHA-256", "hash function", "crypto hash"], "explanation": "Use cryptographic hash function like SHA-256.", "xp": 5},
        {"id": "cpp-25-20-25", "type": "code", "question": "Implement Merkle tree class.", "correctAnswer": ["tree with hash computation", "class", "implement"], "explanation": "Implement class with build, verify, and update methods.", "xp": 15}
    ]
}

data['units'][24]['lessons'][19].update(lesson25_20)
print("✅ Unit 25, Lesson 20: Merkle Trees - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 8 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 27, Lesson 3: AA Tree")
print("  - Unit 43, Lesson 8: Network Security")
print("  - Unit 25, Lesson 20: Merkle Trees")
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
