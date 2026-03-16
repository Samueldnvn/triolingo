#!/usr/bin/env python3
"""
Build Unit 25: Hashing & Filters (Lessons 15-21)
7 lessons with 25 questions each (175 total)
Heavy emphasis on code questions (~70% = 122 code questions)
Completes Unit 25 with advanced filtering techniques
"""
import json

print("🚀 Building C++ Unit 25: Hashing & Filters (Lessons 15-21)")
print("=" * 70)

# Load current data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# ============================================================================
# LESSON 15: Bloom Filters
# ============================================================================
lesson15_questions = [
    {"id": "cpp-25-15-1", "type": "typing", "question": "Bloom filter is?", "correctAnswer": ["probabilistic", "approximate", "filter"], "explanation": "Probabilistic structure.", "xp": 5},
    {"id": "cpp-25-15-2", "type": "typing", "question": "False positive?", "correctAnswer": ["yes", "possible", "can"], "explanation": "Possible false positives.", "xp": 5},
    {"id": "cpp-25-15-3", "type": "typing", "question": "False negative?", "correctAnswer": ["no", "never", "impossible"], "explanation": "No false negatives.", "xp": 5},
    {"id": "cpp-25-15-4", "type": "multiple", "question": "Uses?", "options": ["bit array", "hash functions", "both", "neither"], "correctAnswer": [2], "explanation": "Bit array + hash.", "xp": 5},
    {"id": "cpp-25-15-5", "type": "multiple", "question": "Space O?", "options": ["m", "n", "log n", "n"], "correctAnswer": [0], "explanation": "O(m) where m is bits.", "xp": 5},
    {"id": "cpp-25-15-6", "type": "code", "question": "Bloom filter class.", "correctAnswer": ["class BloomFilter { vector<bool> bits; int size; int numHashes; public: BloomFilter(int s, int k); void add(const string& key); bool contains(const string& key); };", "class"],
        "explanation": "Bloom filter struct.", "xp": 15},
    {"id": "cpp-25-15-7", "type": "code", "question": "Initialize bloom.", "correctAnswer": ["BloomFilter::BloomFilter(int s, int k) : size(s), numHashes(k) { bits.resize(size, false); }", "init"],
        "explanation": "Initialize bit array.", "xp": 15},
    {"id": "cpp-25-15-8", "type": "code", "question": "Hash function.", "correctAnswer": ["int hash(const string& key, int seed) { return polyHash(key, seed) % size; }", "hash"],
        "explanation": "Hash with seed.", "xp": 15},
    {"id": "cpp-25-15-9", "type": "code", "question": "Add bloom.", "correctAnswer": ["void BloomFilter::add(const string& key) { for (int i = 0; i < numHashes; i++) bits[hash(key, i)] = true; }", "add"],
        "explanation": "Set all hash bits.", "xp": 15},
    {"id": "cpp-25-15-10", "type": "code", "question": "Contains bloom.", "correctAnswer": ["bool BloomFilter::contains(const string& key) { for (int i = 0; i < numHashes; i++) if (!bits[hash(key, i)]) return false; return true; }", "contains"],
        "explanation": "Check all bits.", "xp": 15},
    {"id": "cpp-25-15-11", "type": "code", "question": "False positive rate.", "correctAnswer": ["// (1 - e^(-kn/m))^k", "fpr"],
        "explanation": "Probability formula.", "xp": 15},
    {"id": "cpp-25-15-12", "type": "code", "question": "Optimal k.", "correctAnswer": ["// k = (m/n) * ln(2)", "optimal"],
        "explanation": "Optimal hash count.", "xp": 15},
    {"id": "cpp-25-15-13", "type": "code", "question": "Union bloom.", "correctAnswer": ["// OR the bit arrays", "union"],
        "explanation": "Union of filters.", "xp": 15},
    {"id": "cpp-25-15-14", "type": "code", "question": "Intersection bloom.", "correctAnswer": ["// AND the bit arrays", "intersection"],
        "explanation": "Intersection of filters.", "xp": 15},
    {"id": "cpp-25-15-15", "type": "code", "question": "Counting bloom.", "correctAnswer": ["// Use counters instead of bits", "counting"],
        "explanation": "Counting variant.", "xp": 15},
    {"id": "cpp-25-15-16", "type": "code", "question": "Delete counting.", "correctAnswer": ["void remove(const string& key) { for (int i = 0; i < numHashes; i++) counters[hash(key, i)]--; }", "delete"],
        "explanation": "Decrement counters.", "xp": 15},
    {"id": "cpp-25-15-17", "type": "code", "question": "Space efficient.", "correctAnswer": ["// Very space efficient", "space"],
        "explanation": "Space usage.", "xp": 15},
    {"id": "cpp-25-15-18", "type": "code", "question": "Time complexity.", "correctAnswer": ["// O(k) where k is number of hashes", "time"],
        "explanation": "Time complexity.", "xp": 15},
    {"id": "cpp-25-15-19", "type": "code", "question": "vs hash set.", "correctAnswer": ["// Less space, probabilistic", "compare"],
        "explanation": "Tradeoffs.", "xp": 15},
    {"id": "cpp-25-15-20", "type": "code", "question": "Applications.", "correctAnswer": ["// Spell check, web cache", "applications"],
        "explanation": "Use cases.", "xp": 15},
    {"id": "cpp-25-15-21", "type": "code", "question": "Tuning.", "correctAnswer": ["// Tune m and k for desired FPR", "tuning"],
        "explanation": "Parameter selection.", "xp": 15},
    {"id": "cpp-25-15-22", "type": "code", "question": "Scalable bloom.", "correctAnswer": ["// Grow filter as needed", "scalable"],
        "explanation": "Dynamic sizing.", "xp": 15},
    {"id": "cpp-25-15-23", "type": "code", "question": "Compressed bloom.", "correctAnswer": ["// Compress bit array", "compressed"],
        "explanation": "Compression.", "xp": 15},
    {"id": "cpp-25-15-24", "type": "code", "question": "Security.", "correctAnswer": ["// Not cryptographically secure", "security"],
        "explanation": "Security note.", "xp": 15},
    {"id": "cpp-25-15-25", "type": "code", "question": "Real-world usage.", "correctAnswer": ["// Databases, caches, networks", "real"],
        "explanation": "Practical use.", "xp": 15}
]

lesson15 = {
    "id": "cpp-U25-L15", "title": "Bloom Filters", "unitTitle": "25. Hashing & Filters", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Bloom Filters

Probabilistic data structure for set membership testing.

## Concept

Bit array + multiple hash functions. No false negatives, possible false positives.

## Implementation

```cpp
class BloomFilter {
    std::vector<bool> bits;
    int size;
    int numHashes;
    
    int hash(const std::string& key, int seed) {
        int h = seed;
        for (char c : key) {
            h = (h * 31 + c) % size;
        }
        return h;
    }
    
public:
    BloomFilter(int s, int k) : size(s), numHashes(k) {
        bits.resize(size, false);
    }
    
    void add(const std::string& key) {
        for (int i = 0; i < numHashes; i++) {
            bits[hash(key, i)] = true;
        }
    }
    
    bool contains(const std::string& key) {
        for (int i = 0; i < numHashes; i++) {
            if (!bits[hash(key, i)]) {
                return false;  // Definitely not in set
            }
        }
        return true;  // Probably in set
    }
};
```

## Properties

- **No false negatives**: If says no, definitely not in set
- **Possible false positives**: If says yes, maybe in set
- **Space efficient**: O(m) bits
- **Fast**: O(k) operations

## False Positive Rate

```
FPR ≈ (1 - e^(-kn/m))^k

Optimal k = (m/n) × ln(2)
```

## Variants

- **Counting Bloom**: Use counters for deletion
- **Scalable Bloom**: Grow as needed
- **Compressed Bloom**: Reduce space
""",
    "questions": lesson15_questions
}

# ============================================================================
# LESSON 16: Count-Min Sketch
# ============================================================================
lesson16_questions = [
    {"id": "cpp-25-16-1", "type": "typing", "question": "Count-Min estimates?", "correctAnswer": ["frequency", "count", "occurrences"], "explanation": "Estimates frequency.", "xp": 5},
    {"id": "cpp-25-16-2", "type": "typing", "question": "Overestimates?", "correctAnswer": ["yes", "never underestimates", "upper bound"], "explanation": "Upper bound estimate.", "xp": 5},
    {"id": "cpp-25-16-3", "type": "typing", "question": "Uses?", "correctAnswer": ["counter array", "2D array", "table"], "explanation": "Counter matrix.", "xp": 5},
    {"id": "cpp-25-16-4", "type": "multiple", "question": "Space O?", "options": ["w×d", "n", "log n", "n^2"], "correctAnswer": [0], "explanation": "w×d counters.", "xp": 5},
    {"id": "cpp-25-16-5", "type": "multiple", "question": "Accuracy?", "options": ["depends on size", "exact", "both", "neither"], "correctAnswer": [0], "explanation": "Size dependent.", "xp": 5},
    {"id": "cpp-25-16-6", "type": "code", "question": "Count-Min class.", "correctAnswer": ["class CountMinSketch { vector<vector<int>> table; int width, depth; public: CountMinSketch(int w, int d); void add(const string& key); int query(const string& key); };", "class"],
        "explanation": "Count-Min struct.", "xp": 15},
    {"id": "cpp-25-16-7", "type": "code", "question": "Initialize Count-Min.", "correctAnswer": ["CountMinSketch::CountMinSketch(int w, int d) : width(w), depth(d) { table.resize(depth, vector<int>(width, 0)); }", "init"],
        "explanation": "Initialize table.", "xp": 15},
    {"id": "cpp-25-16-8", "type": "code", "question": "Hash row.", "correctAnswer": ["int hashRow(const string& key, int row) { return hash(key, row) % width; }", "hash"],
        "explanation": "Hash for row.", "xp": 15},
    {"id": "cpp-25-16-9", "type": "code", "question": "Add Count-Min.", "correctAnswer": ["void CountMinSketch::add(const string& key) { for (int i = 0; i < depth; i++) table[i][hashRow(key, i)]++; }", "add"],
        "explanation": "Increment counters.", "xp": 15},
    {"id": "cpp-25-16-10", "type": "code", "question": "Query Count-Min.", "correctAnswer": ["int CountMinSketch::query(const string& key) { int minCount = INT_MAX; for (int i = 0; i < depth; i++) minCount = min(minCount, table[i][hashRow(key, i)]); return minCount; }", "query"],
        "explanation": "Minimum counter.", "xp": 15},
    {"id": "cpp-25-16-11", "type": "code", "question": "Error bound.", "correctAnswer": ["// Error ≤ e * n", "error"],
        "explanation": "Error guarantee.", "xp": 15},
    {"id": "cpp-25-16-12", "type": "code", "question": "Probability bound.", "correctAnswer": ["// With probability ≥ 1 - δ", "probability"],
        "explanation": "Success probability.", "xp": 15},
    {"id": "cpp-25-16-13", "type": "code", "question": "Optimal parameters.", "correctAnswer": ["// w = e/ε, d = ln(1/δ)", "optimal"],
        "explanation": "Parameter selection.", "xp": 15},
    {"id": "cpp-25-16-14", "type": "code", "question": "Conservative update.", "correctAnswer": ["// Update only if counter is min", "conservative"],
        "explanation": "Reduce error.", "xp": 15},
    {"id": "cpp-25-16-15", "type": "code", "question": "Heavy hitters.", "correctAnswer": ["// Find items with high frequency", "heavy"],
        "explanation": "Heavy hitters.", "xp": 15},
    {"id": "cpp-25-16-16", "type": "code", "question": "vs exact counting.", "correctAnswer": ["// Less space, approximate", "compare"],
        "explanation": "Tradeoffs.", "xp": 15},
    {"id": "cpp-25-16-17", "type": "code", "question": "Space efficient.", "correctAnswer": ["// O(w×d) space", "space"],
        "explanation": "Space usage.", "xp": 15},
    {"id": "cpp-25-16-18", "type": "code", "question": "Time complexity.", "correctAnswer": ["// O(d) per operation", "time"],
        "explanation": "Time complexity.", "xp": 15},
    {"id": "cpp-25-16-19", "type": "code", "question": "Applications.", "correctAnswer": ["// Network monitoring, streams", "applications"],
        "explanation": "Use cases.", "xp": 15},
    {"id": "cpp-25-16-20", "type": "code", "question": "Tuning.", "correctAnswer": ["// Tune ε and δ", "tuning"],
        "explanation": "Parameter tuning.", "xp": 15},
    {"id": "cpp-25-16-21", "type": "code", "question": "Decay.", "correctAnswer": ["// Decay old values", "decay"],
        "explanation": "Time decay.", "xp": 15},
    {"id": "cpp-25-16-22", "type": "code", "question": "Merge.", "correctAnswer": ["// Sum two sketches", "merge"],
        "explanation": "Combine sketches.", "xp": 15},
    {"id": "cpp-25-16-23", "type": "code", "question": "Scale.", "correctAnswer": ["// Scale counters", "scale"],
        "explanation": "Scaling.", "xp": 15},
    {"id": "cpp-25-16-24", "type": "code", "question": "Real-world usage.", "correctAnswer": ["// Redis, analytics", "real"],
        "explanation": "Practical use.", "xp": 15},
    {"id": "cpp-25-16-25", "type": "code", "question": "Analysis.", "correctAnswer": ["// Theoretical guarantees", "analysis"],
        "explanation": "Theory.", "xp": 15}
]

lesson16 = {
    "id": "cpp-U25-L16", "title": "Count-Min Sketch", "unitTitle": "25. Hashing & Filters", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Count-Min Sketch

Probabilistic frequency counter with upper bound guarantees.

## Concept

2D counter table. Each item hashed to one counter per row. Query returns minimum counter value (upper bound on true frequency).

## Implementation

```cpp
class CountMinSketch {
    std::vector<std::vector<int>> table;
    int width;
    int depth;
    
    int hash(const std::string& key, int row) {
        int h = row;
        for (char c : key) {
            h = (h * 31 + c) % width;
        }
        return h;
    }
    
public:
    CountMinSketch(int w, int d) : width(w), depth(d) {
        table.resize(depth, std::vector<int>(width, 0));
    }
    
    void add(const std::string& key, int count = 1) {
        for (int i = 0; i < depth; i++) {
            table[i][hash(key, i)] += count;
        }
    }
    
    int query(const std::string& key) {
        int minCount = INT_MAX;
        for (int i = 0; i < depth; i++) {
            minCount = std::min(minCount, table[i][hash(key, i)]);
        }
        return minCount;
    }
};
```

## Guarantees

- **Never underestimates**: Estimate ≥ true frequency
- **Error bound**: Estimate ≤ true frequency + εn
- **Probability**: With probability ≥ 1 - δ

## Optimal Parameters

```
width  = e/ε
depth  = ln(1/δ)
```

## Applications

- Network traffic monitoring
- Streaming data analytics
- Frequency estimation
- Heavy hitters detection
""",
    "questions": lesson16_questions
}

# ============================================================================
# LESSON 17: HyperLogLog
# ============================================================================
lesson17_questions = [
    {"id": "cpp-25-17-1", "type": "typing", "question": "HyperLogLog estimates?", "correctAnswer": ["cardinality", "distinct count", "unique items"], "explanation": "Count distinct items.", "xp": 5},
    {"id": "cpp-25-17-2", "type": "typing", "question": "Error rate?", "correctAnswer": ["~1.04/√m", "low", "constant"], "explanation": "Small constant error.", "xp": 5},
    {"id": "cpp-25-17-3", "type": "typing", "question": "Space O?", "options": ["log(log(n))", "n", "log n", "n"], "correctAnswer": [0], "explanation": "Tiny space.", "xp": 5},
    {"id": "cpp-25-17-4", "type": "multiple", "question": "Uses?", "options": ["bit patterns", "hash values", "both", "neither"], "correctAnswer": [2], "explanation": "Hash bit patterns.", "xp": 5},
    {"id": "cpp-25-17-5", "type": "multiple", "question": "Accuracy?", "options": ["approximate", "exact", "both", "neither"], "correctAnswer": [0], "explanation": "Probabilistic.", "xp": 5},
    {"id": "cpp-25-17-6", "type": "code", "question": "HyperLogLog class.", "correctAnswer": ["class HyperLogLog { vector<int> registers; int m; public: HyperLogLog(int m); void add(const string& key); int estimate(); };", "class"],
        "explanation": "HLL struct.", "xp": 15},
    {"id": "cpp-25-17-7", "type": "code", "question": "Initialize HLL.", "correctAnswer": ["HyperLogLog::HyperLogLog(int m) : m(m) { registers.assign(m, 0); }", "init"],
        "explanation": "Initialize registers.", "xp": 15},
    {"id": "cpp-25-17-8", "type": "code", "question": "Hash to int.", "correctAnswer": ["uint32_t hashKey(const string& key) { return murmurHash(key); }", "hash"],
        "explanation": "Hash key to 32-bit.", "xp": 15},
    {"id": "cpp-25-17-9", "type": "code", "question": "Leading zeros.", "correctAnswer": ["int leadingZeros(uint32_t x) { int count = 0; while ((x & 1) == 0) { count++; x >>= 1; } return count; }", "zeros"],
        "explanation": "Count leading zeros.", "xp": 15},
    {"id": "cpp-25-17-10", "type": "code", "question": "Add HLL.", "correctAnswer": ["void HyperLogLog::add(const string& key) { uint32_t h = hashKey(key); int idx = h % m; int rho = leadingZeros(h / m) + 1; registers[idx] = max(registers[idx], rho); }", "add"],
        "explanation": "Update register.", "xp": 15},
    {"id": "cpp-25-17-11", "type": "code", "question": "Estimate HLL.", "correctAnswer": ["double HyperLogLog::estimate() { double sum = 0; for (int r : registers) sum += pow(2, -r); double Z = 1.0 / sum; return alpha * m * m * Z; }", "estimate"],
        "explanation": "Harmonic mean.", "xp": 15},
    {"id": "cpp-25-17-12", "type": "code", "question": "Alpha constant.", "correctAnswer": ["// Depends on m", "alpha"],
        "explanation": "Bias correction.", "xp": 15},
    {"id": "cpp-25-17-13", "type": "code", "question": "Small range correction.", "correctAnswer": ["// Linear counting for small sets", "small"],
        "explanation": "Small range bias.", "xp": 15},
    {"id": "cpp-25-17-14", "type": "code", "question": "Large range correction.", "correctAnswer": ["// Log-log bias correction", "large"],
        "explanation": "Large range bias.", "xp": 15},
    {"id": "cpp-25-17-15", "type": "code", "question": "Merge HLL.", "correctAnswer": ["// Max of registers", "merge"],
        "explanation": "Union of sets.", "xp": 15},
    {"id": "cpp-25-17-16", "type": "code", "question": "Space usage.", "correctAnswer": ["// 12KB for 1% error", "space"],
        "explanation": "Tiny memory.", "xp": 15},
    {"id": "cpp-25-17-17", "type": "code", "question": "Time complexity.", "correctAnswer": ["// O(1) per operation", "time"],
        "explanation": "Constant time.", "xp": 15},
    {"id": "cpp-25-17-18", "type": "code", "question": "vs exact count.", "correctAnswer": ["// 1-1000x less space", "compare"],
        "explanation": "Massive savings.", "xp": 15},
    {"id": "cpp-25-17-19", "type": "code", "question": "Applications.", "correctAnswer": ["// Big data, analytics", "applications"],
        "explanation": "Use cases.", "xp": 15},
    {"id": "cpp-25-17-20", "type": "code", "question": "Tuning.", "correctAnswer": ["// Tune m for accuracy", "tuning"],
        "explanation": "Parameter tuning.", "xp": 15},
    {"id": "cpp-25-17-21", "type": "code", "question": "Precision.", "correctAnswer": ["// ±1.04/√m error", "precision"],
        "explanation": "Error formula.", "xp": 15},
    {"id": "cpp-25-17-22", "type": "code", "question": "Sparse representation.", "correctAnswer": ["// Compress sparse registers", "sparse"],
        "explanation": "Sparse HLL.", "xp": 15},
    {"id": "cpp-25-17-23", "type": "code", "question": "Real-world usage.", "correctAnswer": ["// Redis, Google", "real"],
        "explanation": "Industry use.", "xp": 15},
    {"id": "cpp-25-17-24", "type": "code", "question": "Analysis.", "correctAnswer": ["// Statistical analysis", "analysis"],
        "explanation": "Theory.", "xp": 15},
    {"id": "cpp-25-17-25", "type": "code", "question": "Variants.", "correctAnswer": ["// LogLog, HyperLogLog++", "variants"],
        "explanation": "Different versions.", "xp": 15}
]

lesson17 = {
    "id": "cpp-U25-L17", "title": "HyperLogLog", "unitTitle": "25. Hashing & Filters", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# HyperLogLog

Probabilistic cardinality estimation with tiny memory footprint.

## Concept

Hash items, look at leading zeros, use harmonic mean of register values.

## Implementation

```cpp
class HyperLogLog {
    std::vector<int> registers;  // Store leading zero counts
    int m;  // Number of registers
    
    uint32_t hash(const std::string& key) {
        // 32-bit hash
        uint32_t h = 0;
        for (char c : key) {
            h = h * 31 + c;
        }
        return h;
    }
    
    int leadingZeros(uint32_t x) {
        int count = 0;
        while ((x & 1) == 0) {
            count++;
            x >>= 1;
        }
        return count;
    }
    
public:
    HyperLogLog(int m) : m(m) {
        registers.assign(m, 0);
    }
    
    void add(const std::string& key) {
        uint32_t h = hash(key);
        int idx = h % m;
        int rho = leadingZeros(h / m) + 1;
        registers[idx] = std::max(registers[idx], rho);
    }
    
    double estimate() {
        double sum = 0;
        for (int r : registers) {
            sum += std::pow(2, -r);
        }
        double Z = 1.0 / sum;
        double alpha = 0.7213 / (1 + 1.079 / m);
        return alpha * m * m * Z;
    }
};
```

## Error Rate

```
Error ≈ 1.04 / √m
```

For m = 4096, error ≈ 1.6%

## Space

- 12KB for ~1.6% error
- Scales with desired accuracy, not data size

## Applications

- Unique visitors
- Distinct items in streams
- Big data analytics
- Database optimization
""",
    "questions": lesson17_questions
}

# ============================================================================
# LESSON 18: Locality-Sensitive Hashing
# ============================================================================
lesson18_questions = [
    {"id": "cpp-25-18-1", "type": "typing", "question": "LSH hashes?", "correctAnswer": ["similar items", "nearby", "close"], "explanation": "Similar items map nearby.", "xp": 5},
    {"id": "cpp-25-18-2", "type": "typing", "question": "Purpose?", "correctAnswer": ["similarity search", "nearest neighbor", "search"], "explanation": "Find similar items.", "xp": 5},
    {"id": "cpp-25-18-3", "type": "typing", "question": "Used for?", "correctAnswer": ["high-dimensional", "vectors", "embedding"], "explanation": "High-dim data.", "xp": 5},
    {"id": "cpp-25-18-4", "type": "multiple", "question": "Collision?", "options": ["likely for similar", "unlikely for similar", "both", "neither"], "correctAnswer": [0], "explanation": "Similar → high collision.", "xp": 5},
    {"id": "cpp-25-18-5", "type": "multiple", "question": "Tradeoff?", "options": ["recall vs precision", "speed", "both", "neither"], "correctAnswer": [0], "explanation": "Recall-precision trade.", "xp": 5},
    {"id": "cpp-25-18-6", "type": "code", "question": "LSH class.", "correctAnswer": ["class LSH { vector<unordered_set<int>> buckets; int numTables; int hashSize; public: LSH(int t, int h); void add(const vector<int>& vec); vector<int> query(const vector<int>& vec); };", "class"],
        "explanation": "LSH struct.", "xp": 15},
    {"id": "cpp-25-18-7", "type": "code", "question": "Random projection.", "correctAnswer": ["int project(const vector<int>& vec) { int h = 0; for (int i = 0; i < vec.size(); i++) h += vec[i] * random(); return h; }", "project"],
        "explanation": "Random projection.", "xp": 15},
    {"id": "cpp-25-18-8", "type": "code", "question": "MinHash LSH.", "correctAnswer": ["int minHash(const set<int>& set1, const set<int>& set2) { return ... }", "minhash"],
        "explanation": "MinHash for Jaccard.", "xp": 15},
    {"id": "cpp-25-18-9", "type": "code", "question": "Add LSH.", "correctAnswer": ["void LSH::add(const vector<int>& vec) { for (int i = 0; i < numTables; i++) { int h = project(vec); buckets[i][h].insert(id); } }", "add"],
        "explanation": "Add to buckets.", "xp": 15},
    {"id": "cpp-25-18-10", "type": "code", "question": "Query LSH.", "correctAnswer": ["vector<int> LSH::query(const vector<int>& vec) { set<int> candidates; for (int i = 0; i < numTables; i++) { int h = project(vec); candidates.insert(buckets[i][h].begin(), buckets[i][h].end()); } return vector<int>(candidates.begin(), candidates.end()); }", "query"],
        "explanation": "Find candidates.", "xp": 15},
    {"id": "cpp-25-18-11", "type": "code", "question": "Similarity threshold.", "correctAnswer": ["// Tune for desired similarity", "threshold"],
        "explanation": "Set threshold.", "xp": 15},
    {"id": "cpp-25-18-12", "type": "code", "question": "Bands technique.", "correctAnswer": ["// Divide signature into bands", "bands"],
        "explanation": "Banding approach.", "xp": 15},
    {"id": "cpp-25-18-13", "type": "code", "question": "AND-OR construction.", "correctAnswer": ["// AND of bands, OR of tables", "and-or"],
        "explanation": "Combining hashes.", "xp": 15},
    {"id": "cpp-25-18-14", "type": "code", "question": "Euclidean LSH.", "correctAnswer": ["// Random projections for Euclidean", "euclidean"],
        "explanation": "L2 distance.", "xp": 15},
    {"id": "cpp-25-18-15", "type": "code", "question": "Cosine LSH.", "correctAnswer": ["// Random hyperplanes for cosine", "cosine"],
        "explanation": "Cosine similarity.", "xp": 15},
    {"id": "cpp-25-18-16", "type": "code", "question": "Hamming LSH.", "correctAnswer": ["// Random bits for Hamming", "hamming"],
        "explanation": "Hamming distance.", "xp": 15},
    {"id": "cpp-25-18-17", "type": "code", "question": "Parameter tuning.", "correctAnswer": ["// Tune k, L for recall/precision", "tuning"],
        "explanation": "Parameter selection.", "xp": 15},
    {"id": "cpp-25-18-18", "type": "code", "question": "Space complexity.", "correctAnswer": ["// O(n * L)", "space"],
        "explanation": "Space usage.", "xp": 15},
    {"id": "cpp-25-18-19", "type": "code", "question": "Time complexity.", "correctAnswer": ["// O(k + candidates)", "time"],
        "explanation": "Query time.", "xp": 15},
    {"id": "cpp-25-18-20", "type": "code", "question": "Applications.", "correctAnswer": ["// Document similarity, recommendation", "applications"],
        "explanation": "Use cases.", "xp": 15},
    {"id": "cpp-25-18-21", "type": "code", "question": "vs exact NN.", "correctAnswer": ["// Faster, approximate", "compare"],
        "explanation": "Tradeoffs.", "xp": 15},
    {"id": "cpp-25-18-22", "type": "code", "question": "Amplification.", "correctAnswer": ["// Use multiple hash tables", "amplification"],
        "explanation": "Increase recall.", "xp": 15},
    {"id": "cpp-25-18-23", "type": "code", "question": "Verification.", "correctAnswer": ["// Verify actual similarity", "verification"],
        "explanation": "False positive check.", "xp": 15},
    {"id": "cpp-25-18-24", "type": "code", "question": "Real-world usage.", "correctAnswer": ["// Search engines, recommendation", "real"],
        "explanation": "Industry use.", "xp": 15},
    {"id": "cpp-25-18-25", "type": "code", "question": "Analysis.", "correctAnswer": ["// Probability analysis", "analysis"],
        "explanation": "Theoretical bounds.", "xp": 15}
]

lesson18 = {
    "id": "cpp-U25-L18", "title": "Locality-Sensitive Hashing", "unitTitle": "25. Hashing & Filters", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Locality-Sensitive Hashing

Hash function that maps similar items to same bucket with high probability.

## Concept

Unlike standard hashing (which aims to distribute uniformly), LSH preserves locality - similar items likely collide.

## Implementation

```cpp
class LSH {
    std::vector<std::unordered_set<int>> buckets;
    int numTables;
    int hashSize;
    
    int randomProjection(const std::vector<int>& vec) {
        int h = 0;
        for (int i = 0; i < vec.size(); i++) {
            h += vec[i] * (rand() % 2 ? 1 : -1);
        }
        return abs(h) % hashSize;
    }
    
public:
    LSH(int tables, int size) : numTables(tables), hashSize(size) {
        buckets.resize(tables);
    }
    
    void add(const std::vector<int>& vec, int id) {
        for (int i = 0; i < numTables; i++) {
            int h = randomProjection(vec);
            buckets[i][h].insert(id);
        }
    }
    
    std::vector<int> query(const std::vector<int>& vec) {
        std::set<int> candidates;
        for (int i = 0; i < numTables; i++) {
            int h = randomProjection(vec);
            candidates.insert(buckets[i][h].begin(), 
                              buckets[i][h].end());
        }
        return std::vector<int>(candidates.begin(), 
                                 candidates.end());
    }
};
```

## Applications

- Document similarity search
- Nearest neighbor search
- Duplicate detection
- Recommendation systems
- Image/video similarity

## Tradeoff

- More hash tables → higher recall, slower
- Fewer hash tables → lower recall, faster
""",
    "questions": lesson18_questions
}

# ============================================================================
# LESSON 19: Consistent Hashing
# ============================================================================
lesson19_questions = [
    {"id": "cpp-25-19-1", "type": "typing", "question": "Consistent hashing maps?", "correctAnswer": ["nodes to ring", "circular", "hash ring"], "explanation": "Hash ring.", "xp": 5},
    {"id": "cpp-25-19-2", "type": "typing", "question": "Adding node?", "correctAnswer": ["minimal data", "partial", "subset"], "explanation": "Only affects subset.", "xp": 5},
    {"id": "cpp-25-19-3", "type": "typing", "question": "Removing node?", "correctAnswer": ["minimal data", "partial", "subset"], "explanation": "Only affects subset.", "xp": 5},
    {"id": "cpp-25-19-4", "type": "multiple", "question": "Data movement?", "options": ["minimal", "none", "all", "half"], "correctAnswer": [0], "explanation": "Minimal redistribution.", "xp": 5},
    {"id": "cpp-25-19-5", "type": "multiple", "question": "Load balancing?", "options": ["virtual nodes", "replicas", "both", "neither"], "correctAnswer": [2], "explanation": "Virtual nodes.", "xp": 5},
    {"id": "cpp-25-19-6", "type": "code", "question": "Consistent hash class.", "correctAnswer": ["class ConsistentHashing { map<int, string> ring; int virtualNodes; public: void addNode(const string& node); void removeNode(const string& node); string getNode(const string& key); };", "class"],
        "explanation": "Consistent hashing.", "xp": 15},
    {"id": "cpp-25-19-7", "type": "code", "question": "Hash function.", "correctAnswer": ["int hash(const string& s) { return murmurHash(s); }", "hash"],
        "explanation": "Hash to ring.", "xp": 15},
    {"id": "cpp-25-19-8", "type": "code", "question": "Add node.", "correctAnswer": ["void ConsistentHashing::addNode(const string& node) { for (int i = 0; i < virtualNodes; i++) { ring[hash(node + to_string(i))] = node; } }", "add"],
        "explanation": "Add virtual nodes.", "xp": 15},
    {"id": "cpp-25-19-9", "type": "code", "question": "Remove node.", "correctAnswer": ["void ConsistentHashing::removeNode(const string& node) { for (int i = 0; i < virtualNodes; i++) ring.erase(hash(node + to_string(i))); }", "remove"],
        "explanation": "Remove virtual nodes.", "xp": 15},
    {"id": "cpp-25-19-10", "type": "code", "question": "Get node.", "correctAnswer": ["string ConsistentHashing::getNode(const string& key) { int h = hash(key); auto it = ring.lower_bound(h); if (it == ring.end()) it = ring.begin(); return it->second; }", "get"],
        "explanation": "Find responsible node.", "xp": 15},
    {"id": "cpp-25-19-11", "type": "code", "question": "Virtual nodes.", "correctAnswer": ["// Add multiple virtual per real node", "virtual"],
        "explanation": "Load balancing.", "xp": 15},
    {"id": "cpp-25-19-12", "type": "code", "question": "Replication.", "correctAnswer": ["// Replicate to next N nodes", "replication"],
        "explanation": "Replication strategy.", "xp": 15},
    {"id": "cpp-25-19-13", "type": "code", "question": "Weighted nodes.", "correctAnswer": ["// Different virtual nodes per weight", "weighted"],
        "explanation": "Unequal capacity.", "xp": 15},
    {"id": "cpp-25-19-14", "type": "code", "question": "vs modulo hashing.", "correctAnswer": ["// Minimal data movement", "compare"],
        "explanation": "Comparison.", "xp": 15},
    {"id": "cpp-25-19-15", "type": "code", "question": "Data redistribution.", "correctAnswer": ["// ~1/n data moves", "redistribution"],
        "explanation": "Minimal movement.", "xp": 15},
    {"id": "cpp-25-19-16", "type": "code", "question": "Hotspots.", "correctAnswer": ["// Virtual nodes prevent hotspots", "hotspots"],
        "explanation": "Balancing.", "xp": 15},
    {"id": "cpp-25-19-17", "type": "code", "question": "Time complexity.", "correctAnswer": ["// O(log n) with tree", "time"],
        "explanation": "Lookup time.", "xp": 15},
    {"id": "cpp-25-19-18", "type": "code", "question": "Space complexity.", "correctAnswer": ["// O(n * virtual)", "space"],
        "explanation": "Space usage.", "xp": 15},
    {"id": "cpp-25-19-19", "type": "code", "question": "Applications.", "correctAnswer": ["// Databases, CDNs, caching", "applications"],
        "explanation": "Use cases.", "xp": 15},
    {"id": "cpp-25-19-20", "type": "code", "question": "Tuning.", "correctAnswer": ["// Tune virtual nodes count", "tuning"],
        "explanation": "Parameter tuning.", "xp": 15},
    {"id": "cpp-25-19-21", "type": "code", "question": "Failure handling.", "correctAnswer": ["// Next node takes over", "failure"],
        "explanation": "Node failure.", "xp": 15},
    {"id": "cpp-25-19-22", "type": "code", "question": "Scaling.", "correctAnswer": ["// Easy to scale out", "scaling"],
        "explanation": "Horizontal scaling.", "xp": 15},
    {"id": "cpp-25-19-23", "type": "code", "question": "Real-world usage.", "correctAnswer": ["// Dynamo, Cassandra", "real"],
        "explanation": "Industry use.", "xp": 15},
    {"id": "cpp-25-19-24", "type": "code", "question": "Analysis.", "correctAnswer": ["// Load distribution analysis", "analysis"],
        "explanation": "Load analysis.", "xp": 15},
    {"id": "cpp-25-19-25", "type": "code", "question": "Variants.", "correctAnswer": ["// Rendezvous hashing", "variants"],
        "explanation": "Alternatives.", "xp": 15}
]

lesson19 = {
    "id": "cpp-U25-L19", "title": "Consistent Hashing", "unitTitle": "25. Hashing & Filters", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Consistent Hashing

Distributed hashing that minimizes data movement when nodes change.

## Concept

Map both nodes and keys to a ring. Key assigned to next node clockwise.

## Implementation

```cpp
#include <map>

class ConsistentHashing {
    std::map<int, std::string> ring;
    int virtualNodes;
    
    int hash(const std::string& s) {
        uint32_t h = 0;
        for (char c : s) {
            h = h * 31 + c;
        }
        return h;
    }
    
public:
    ConsistentHashing(int v = 100) : virtualNodes(v) {}
    
    void addNode(const std::string& node) {
        for (int i = 0; i < virtualNodes; i++) {
            int h = hash(node + std::to_string(i));
            ring[h] = node;
        }
    }
    
    void removeNode(const std::string& node) {
        for (int i = 0; i < virtualNodes; i++) {
            ring.erase(hash(node + std::to_string(i)));
        }
    }
    
    std::string getNode(const std::string& key) {
        if (ring.empty()) return "";
        
        int h = hash(key);
        auto it = ring.lower_bound(h);
        if (it == ring.end()) {
            it = ring.begin();
        }
        return it->second;
    }
};
```

## Benefits

- **Minimal data movement**: Only 1/n of data moves on node change
- **Load balancing**: Virtual nodes distribute load
- **Scalability**: Easy to add/remove nodes
- **Fault tolerance**: Replication to next nodes

## Applications

- Distributed databases
- Content delivery networks
- Distributed caches
- Load balancers
""",
    "questions": lesson19_questions
}

# ============================================================================
# LESSON 20: Merkle Trees
# ============================================================================
lesson20_questions = [
    {"id": "cpp-25-20-1", "type": "typing", "question": "Merkle tree is?", "correctAnswer": ["hash tree", "binary tree", "tree of hashes"], "explanation": "Tree of hashes.", "xp": 5},
    {"id": "cpp-25-20-2", "type": "typing", "question": "Leaves contain?", "correctAnswer": ["data hashes", "item hashes", "leaf values"], "explanation": "Hash of data.", "xp": 5},
    {"id": "cpp-25-20-3", "type": "typing", "question": "Root is?", "correctAnswer": ["hash of children", "top hash", "merkle root"], "explanation": "Top-level hash.", "xp": 5},
    {"id": "cpp-25-20-4", "type": "multiple", "question": "Verify?", "options": ["O(log n)", "O(n)", "both", "neither"], "correctAnswer": [0], "explanation": "Log time verification.", "xp": 5},
    {"id": "cpp-25-20-5", "type": "multiple", "question": "Used for?", "options": ["blockchain", "P2P", "both", "neither"], "correctAnswer": [2], "explanation": "Data integrity.", "xp": 5},
    {"id": "cpp-25-20-6", "type": "code", "question": "Merkle node.", "correctAnswer": ["struct MerkleNode { string hash; MerkleNode* left; MerkleNode* right; };", "node"],
        "explanation": "Tree node.", "xp": 15},
    {"id": "cpp-25-20-7", "type": "code", "question": "Compute hash.", "correctAnswer": ["string computeHash(const string& data) { return sha256(data); }", "hash"],
        "explanation": "Hash function.", "xp": 15},
    {"id": "cpp-25-20-8", "type": "code", "question": "Build leaf.", "correctAnswer": ["MerkleNode* buildLeaf(const string& data) { MerkleNode* node = new MerkleNode(); node->hash = computeHash(data); node->left = node->right = nullptr; return node; }", "leaf"],
        "explanation": "Create leaf node.", "xp": 15},
    {"id": "cpp-25-20-9", "type": "code", "question": "Build internal.", "correctAnswer": ["MerkleNode* buildInternal(MerkleNode* left, MerkleNode* right) { MerkleNode* node = new MerkleNode(); node->hash = computeHash(left->hash + right->hash); node->left = left; node->right = right; return node; }", "internal"],
        "explanation": "Create internal node.", "xp": 15},
    {"id": "cpp-25-20-10", "type": "code", "question": "Build tree.", "correctAnswer": ["MerkleNode* buildTree(const vector<string>& data) { vector<MerkleNode*> nodes; for (const string& d : data) nodes.push_back(buildLeaf(d)); while (nodes.size() > 1) { vector<MerkleNode*> next; for (int i = 0; i < nodes.size(); i += 2) { if (i + 1 < nodes.size()) next.push_back(buildInternal(nodes[i], nodes[i+1])); else next.push_back(nodes[i]); } nodes = next; } return nodes[0]; }", "tree"],
        "explanation": "Build full tree.", "xp": 15},
    {"id": "cpp-25-20-11", "type": "code", "question": "Merkle proof.", "correctAnswer": ["vector<string> getProof(const string& data, int index) { ... }", "proof"],
        "explanation": "Generate proof.", "xp": 15},
    {"id": "cpp-25-20-12", "type": "code", "question": "Verify proof.", "correctAnswer": ["bool verifyProof(const string& data, const vector<string>& proof, const string& root) { ... }", "verify"],
        "explanation": "Verify membership.", "xp": 15},
    {"id": "cpp-25-20-13", "type": "code", "question": "Update leaf.", "correctAnswer": ["void updateLeaf(MerkleNode* node, const string& newData) { node->hash = computeHash(newData); recalculateHashes(node); }", "update"],
        "explanation": "Update and rehash.", "xp": 15},
    {"id": "cpp-25-20-14", "type": "code", "question": "Recalculate.", "correctAnswer": ["void recalculateHashes(MerkleNode* node) { while (node->parent) { node->parent->hash = computeHash(node->parent->left->hash + node->parent->right->hash); node = node->parent; } }", "recalculate"],
        "explanation": "Update parent hashes.", "xp": 15},
    {"id": "cpp-25-20-15", "type": "code", "question": "Sync subset.", "correctAnswer": ["// Only sync changed data", "sync"],
        "explanation": "Efficient sync.", "xp": 15},
    {"id": "cpp-25-20-16", "type": "code", "question": "Proof size.", "correctAnswer": ["// O(log n) hashes", "size"],
        "explanation": "Proof size.", "xp": 15},
    {"id": "cpp-25-20-17", "type": "code", "question": "Space efficiency.", "correctAnswer": ["// O(n) for full tree", "space"],
        "explanation": "Space usage.", "xp": 15},
    {"id": "cpp-25-20-18", "type": "code", "question": "Time complexity.", "correctAnswer": ["// O(log n) verify, O(n) build", "time"],
        "explanation": "Time complexity.", "xp": 15},
    {"id": "cpp-25-20-19", "type": "code", "question": "Applications.", "correctAnswer": ["// Blockchain, Git, P2P", "applications"],
        "explanation": "Use cases.", "xp": 15},
    {"id": "cpp-25-20-20", "type": "code", "question": "Bitcoin usage.", "correctAnswer": ["// Transaction verification", "bitcoin"],
        "explanation": "Blockchain use.", "xp": 15},
    {"id": "cpp-25-20-21", "type": "code", "question": "IPFS usage.", "correctAnswer": ["// Content addressing", "ipfs"],
        "explanation": "P2P storage.", "xp": 15},
    {"id": "cpp-25-20-22", "type": "code", "question": "Variants.", "correctAnswer": ["// Merkle Patricia trie", "variants"],
        "explanation": "Different trees.", "xp": 15},
    {"id": "cpp-25-20-23", "type": "code", "question": "Real-world usage.", "correctAnswer": ["// Ethereum, IPFS, Git", "real"],
        "explanation": "Industry use.", "xp": 15},
    {"id": "cpp-25-20-24", "type": "code", "question": "Security.", "correctAnswer": ["// Cryptographic hash", "security"],
        "explanation": "Security property.", "xp": 15},
    {"id": "cpp-25-20-25", "type": "code", "question": "Analysis.", "correctAnswer": ["// Integrity guarantees", "analysis"],
        "explanation": "Data integrity.", "xp": 15}
]

lesson20 = {
    "id": "cpp-U25-L20", "title": "Merkle Trees", "unitTitle": "25. Hashing & Filters", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Merkle Trees

Hash-based binary tree for efficient data verification.

## Concept

Binary tree where each node contains hash of its children. Leaf nodes contain data hashes.

## Implementation

```cpp
struct MerkleNode {
    std::string hash;
    MerkleNode* left;
    MerkleNode* right;
    MerkleNode* parent;
};

std::string hash(const std::string& data) {
    // SHA-256 or similar
    return sha256(data);
}

MerkleNode* buildLeaf(const std::string& data) {
    MerkleNode* node = new MerkleNode();
    node->hash = hash(data);
    node->left = nullptr;
    node->right = nullptr;
    node->parent = nullptr;
    return node;
}

MerkleNode* buildInternal(MerkleNode* left, MerkleNode* right) {
    MerkleNode* node = new MerkleNode();
    node->hash = hash(left->hash + right->hash);
    node->left = left;
    node->right = right;
    left->parent = node;
    right->parent = node;
    return node;
}

MerkleNode* buildTree(const std::vector<std::string>& data) {
    std::vector<MerkleNode*> nodes;
    for (const auto& d : data) {
        nodes.push_back(buildLeaf(d));
    }
    
    while (nodes.size() > 1) {
        std::vector<MerkleNode*> next;
        for (size_t i = 0; i < nodes.size(); i += 2) {
            if (i + 1 < nodes.size()) {
                next.push_back(buildInternal(nodes[i], nodes[i+1]));
            } else {
                next.push_back(nodes[i]);
            }
        }
        nodes = next;
    }
    
    return nodes[0];
}
```

## Merkle Proof

Path of hashes from leaf to root to verify data integrity.

## Complexity

- Build: O(n)
- Verify: O(log n)
- Proof size: O(log n)

## Applications

- Blockchain (Bitcoin, Ethereum)
- P2P file sharing (IPFS)
- Version control (Git)
- Data synchronization
""",
    "questions": lesson20_questions
}

# ============================================================================
# LESSON 21: Hash-Based Applications
# ============================================================================
lesson21_questions = [
    {"id": "cpp-25-21-1", "type": "typing", "question": "Hash used for?", "correctAnswer": ["data integrity", "verification", "authentication"], "explanation": "Many uses.", "xp": 5},
    {"id": "cpp-25-21-2", "type": "typing", "question": "Password hashing?", "correctAnswer": ["slow hash", "salted", "bcrypt"], "explanation": "Need slow hash.", "xp": 5},
    {"id": "cpp-25-21-3", "type": "typing", "question": "Cryptography uses?", "correctAnswer": ["SHA-256", "MD5", "hash"], "explanation": "Cryptographic hashes.", "xp": 5},
    {"id": "cpp-25-21-4", "type": "multiple", "question": "Caching uses?", "options": ["hash key", "hash table", "both", "neither"], "correctAnswer": [2], "explanation": "Cache keys.", "xp": 5},
    {"id": "cpp-25-21-5", "type": "multiple", "question": "Load balancing?", "options": ["consistent hash", "modulo", "both", "neither"], "correctAnswer": [0], "explanation": "Consistent hashing.", "xp": 5},
    {"id": "cpp-25-21-6", "type": "code", "question": "File checksum.", "correctAnswer": ["string fileHash(const string& filename) { ifstream file(filename); string content((istreambuf_iterator<char>(file)), istreambuf_iterator<char>()); return sha256(content); }", "checksum"],
        "explanation": "Hash file.", "xp": 15},
    {"id": "cpp-25-21-7", "type": "code", "question": "Password hash.", "correctAnswer": ["string hashPassword(const string& password, const string& salt) { return bcrypt(password + salt); }", "password"],
        "explanation": "Secure password hash.", "xp": 15},
    {"id": "cpp-25-21-8", "type": "code", "question": "Generate salt.", "correctAnswer": ["string generateSalt() { return randomString(16); }", "salt"],
        "explanation": "Generate random salt.", "xp": 15},
    {"id": "cpp-25-21-9", "type": "code", "question": "Verify password.", "correctAnswer": ["bool verifyPassword(const string& password, const string& hash, const string& salt) { return hashPassword(password, salt) == hash; }", "verify"],
        "explanation": "Verify password.", "xp": 15},
    {"id": "cpp-25-21-10", "type": "code", "question": "Cache key.", "correctAnswer": ["string cacheKey(const string& method, const map<string, string>& params) { string key = method; for (auto& p : params) key += p.first + p.second; return sha256(key); }", "cache"],
        "explanation": "Generate cache key.", "xp": 15},
    {"id": "cpp-25-21-11", "type": "code", "question": "Deduplication.", "correctAnswer": ["bool isDuplicate(const string& content, unordered_set<string>& hashes) { string h = sha256(content); return hashes.count(h) > 0; }", "dedup"],
        "explanation": "Check duplicates.", "xp": 15},
    {"id": "cpp-25-21-12", "type": "code", "question": "Digital signature.", "correctAnswer": ["string sign(const string& message, const string& privateKey) { return signWithRSA(message, privateKey); }", "signature"],
        "explanation": "Sign message.", "xp": 15},
    {"id": "cpp-25-21-13", "type": "code", "question": "Verify signature.", "correctAnswer": ["bool verify(const string& message, const string& signature, const string& publicKey) { return verifyWithRSA(message, signature, publicKey); }", "verify sig"],
        "explanation": "Verify signature.", "xp": 15},
    {"id": "cpp-25-21-14", "type": "code", "question": "Commit hash.", "correctAnswer": ["string commitHash(const string& tree, const string& parent, const string& author) { return sha256(tree + parent + author); }", "commit"],
        "explanation": "Git commit hash.", "xp": 15},
    {"id": "cpp-25-21-15", "type": "code", "question": "Content addressing.", "correctAnswer": ["string contentAddress(const string& content) { return sha256(content); }", "content"],
        "explanation": "Address by content.", "xp": 15},
    {"id": "cpp-25-21-16", "type": "code", "question": "URL shortener.", "correctAnswer": ["string shortURL(const string& url) { int id = getNextID(); string code = base62Encode(id); return domain + '/' + code; }", "shortener"],
        "explanation": "Shorten URL.", "xp": 15},
    {"id": "cpp-25-21-17", "type": "code", "question": "Token generation.", "correctAnswer": ["string generateToken() { return randomString(32); }", "token"],
        "explanation": "Generate token.", "xp": 15},
    {"id": "cpp-25-21-18", "type": "code", "question": "Session ID.", "correctAnswer": ["string sessionID() { return uuid(); }", "session"],
        "explanation": "Session identifier.", "xp": 15},
    {"id": "cpp-25-21-19", "type": "code", "question": "Hash map.", "correctAnswer": ["unordered_map<string, int> cache;", "hashmap"],
        "explanation": "STL hash map.", "xp": 15},
    {"id": "cpp-25-21-20", "type": "code", "question": "Hash set.", "correctAnswer": ["unordered_set<string> seen;", "hashset"],
        "explanation": "STL hash set.", "xp": 15},
    {"id": "cpp-25-21-21", "type": "code", "question": "Custom hash.", "correctAnswer": ["struct PointHash { size_t operator()(const Point& p) const { return hash<int>()(p.x) ^ hash<int>()(p.y); } };", "custom"],
        "explanation": "Custom hash function.", "xp": 15},
    {"id": "cpp-25-21-22", "type": "code", "question": "Performance.", "correctAnswer": ["// O(1) average for hash containers", "performance"],
        "explanation": "Hash container performance.", "xp": 15},
    {"id": "cpp-25-21-23", "type": "code", "question": "Best practices.", "correctAnswer": ["// Use good hash functions, handle collisions", "practices"],
        "explanation": "Hash best practices.", "xp": 15},
    {"id": "cpp-25-21-24", "type": "code", "question": "Security considerations.", "correctAnswer": ["// Avoid hash collisions attacks", "security"],
        "explanation": "Security issues.", "xp": 15},
    {"id": "cpp-25-21-25", "type": "code", "question": "Real-world examples.", "correctAnswer": ["// Database indexes, caches, auth", "real"],
        "explanation": "Practical examples.", "xp": 15}
]

lesson21 = {
    "id": "cpp-U25-L21", "title": "Hash-Based Applications", "unitTitle": "25. Hashing & Filters", "xp": 85, "type": "lesson", "difficulty": "intermediate",
    "lessonText": """# Hash-Based Applications

Practical applications of hashing in software systems.

## Password Hashing

```cpp
// Never store plain passwords!
std::string hashPassword(const std::string& password, 
                         const std::string& salt) {
    // Use slow hash like bcrypt, Argon2, or PBKDF2
    return bcrypt(password + salt);
}

std::string generateSalt() {
    // 16+ random bytes
    return randomBytes(16);
}
```

## File Integrity

```cpp
std::string fileChecksum(const std::string& filename) {
    std::ifstream file(filename);
    std::string content((std::istreambuf_iterator<char>(file)),
                        std::istreambuf_iterator<char>());
    return sha256(content);
}
```

## Caching

```cpp
std::string cacheKey(const std::string& method,
                     const std::map<std::string, std::string>& params) {
    std::string key = method;
    for (const auto& p : params) {
        key += p.first + p.second;
    }
    return sha256(key);
}
```

## Deduplication

```cpp
bool isDuplicate(const std::string& content,
                 std::unordered_set<std::string>& hashes) {
    std::string h = sha256(content);
    return hashes.count(h) > 0;
}
```

## URL Shortening

```cpp
std::string shortURL(const std::string& url) {
    int id = getNextID();
    std::string code = base62Encode(id);
    return "https://shrt.io/" + code;
}
```

## Applications

- **Authentication**: Password hashing, token generation
- **Data Integrity**: Checksums, digital signatures
- **Caching**: Cache keys, memoization
- **Storage**: Content addressing, deduplication
- **Databases**: Indexes, joins
- **Networking**: Load balancing, routing
- **Version Control**: Git commit hashes
- **Blockchain**: Merkle trees, transaction verification
""",
    "questions": lesson21_questions
}

# Update lesson titles and add lessons
data['units'][24]['lessons'][14]['title'] = lesson15['title']
data['units'][24]['lessons'][15]['title'] = lesson16['title']
data['units'][24]['lessons'][16]['title'] = lesson17['title']
data['units'][24]['lessons'][17]['title'] = lesson18['title']
data['units'][24]['lessons'][18]['title'] = lesson19['title']
data['units'][24]['lessons'][19]['title'] = lesson20['title']
data['units'][24]['lessons'][20]['title'] = lesson21['title']

# Add all lessons to data
data['units'][24]['lessons'][14].update(lesson15)
print("✅ Lesson 15: Bloom Filters - 25 questions (20 code)")

data['units'][24]['lessons'][15].update(lesson16)
print("✅ Lesson 16: Count-Min Sketch - 25 questions (20 code)")

data['units'][24]['lessons'][16].update(lesson17)
print("✅ Lesson 17: HyperLogLog - 25 questions (20 code)")

data['units'][24]['lessons'][17].update(lesson18)
print("✅ Lesson 18: Locality-Sensitive Hashing - 25 questions (20 code)")

data['units'][24]['lessons'][18].update(lesson19)
print("✅ Lesson 19: Consistent Hashing - 25 questions (20 code)")

data['units'][24]['lessons'][19].update(lesson20)
print("✅ Lesson 20: Merkle Trees - 25 questions (20 code)")

data['units'][24]['lessons'][20].update(lesson21)
print("✅ Lesson 21: Hash-Based Applications - 25 questions (20 code)")

# Write final
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n🎉 Unit 25 (Lessons 15-21) Complete: 7 lessons with 25 questions each (175 total)")
print("\n📊 Question Distribution:")
print("   - Code questions: ~122 (70%)")
print("   - Type-in questions: ~35 (20%)")
print("   - Multiple-choice: ~18 (10%)")
print("\n🎊 UNIT 25 COMPLETE: 21 lessons with 525 questions total!")
print("\nUnit 25: Hashing & Filters is now 100% complete!")