#!/usr/bin/env python3
"""
Rebuild Batch 8 - Continue systematic rebuild
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

# Find lessons that are still problematic
still_problematic = []
for unit_idx, unit in enumerate(data['units']):
    for lesson_idx, lesson in enumerate(unit.get('lessons', [])):
        q_count = len(lesson.get('questions', []))
        if q_count > 0:
            total_len = sum(len(q['question']) for q in lesson['questions'])
            avg_len = total_len / q_count
            if avg_len < 25:
                still_problematic.append({
                    'unit': unit_idx + 1,
                    'lesson': lesson_idx + 1,
                    'title': lesson.get('title', 'Unknown'),
                    'avg_length': avg_len
                })

still_problematic.sort(key=lambda x: x['avg_length'])

# Take next 5
batch8 = still_problematic[:5]
print(f"Next 5 lessons to fix:")
for i, lesson in enumerate(batch8, 1):
    print(f"{i}. Unit {lesson['unit']}, Lesson {lesson['lesson']}: {lesson['title']}")

# Rebuild 3 lessons efficiently
# Unit 19, Lesson 6: Bitwise XOR
lesson19_6 = {
    "id": "cpp-U19-L6",
    "title": "Bitwise XOR",
    "unitTitle": "19. Bit Manipulation",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Bitwise XOR

Bitwise exclusive OR operation for comparing and flipping bits.

## Core Concept

XOR (^) returns 1 when bits are different, 0 when bits are same.

## Truth Table

| A | B | A^B |
|---|---|-----|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

## Key Properties

- **Commutative**: A^B = B^A
- **Associative**: (A^B)^C = A^(B^C)
- **Identity**: A^0 = A
- **Self-inverse**: A^A = 0

## Applications

- **Toggle bits**: Flip specific bits
- **Swap values**: Exchange without temp
- **Parity**: Check odd/even bits
- **Encryption**: Simple XOR cipher
- **Find single**: Find unique element

## Common Tricks

- Find different bits: A^B
- Toggle all bits: A^~0
- Swap a,b: a^=b; b^=a; a^=b

## Best Practices

1. Use for comparing bit patterns
2. Leverage self-inverse property
3. Document bit operations clearly
4. Test with known inputs
""",
    "questions": [
        {"id": "cpp-19-6-1", "type": "typing", "question": "What does XOR do?", "correctAnswer": ["returns 1 when bits differ", "exclusive OR", "bitwise XOR"], "explanation": "XOR returns 1 when bits are different, 0 when bits are same.", "xp": 5},
        {"id": "cpp-19-6-2", "type": "multiple", "question": "What is 1 ^ 1?", "options": ["0", "1", "2", "Error"], "correctAnswer": [0], "explanation": "1 XOR 1 equals 0 because bits are same.", "xp": 5},
        {"id": "cpp-19-6-3", "type": "multiple", "question": "What is 1 ^ 0?", "options": ["1", "0", "2", "Error"], "correctAnswer": [0], "explanation": "1 XOR 0 equals 1 because bits are different.", "xp": 5},
        {"id": "cpp-19-6-4", "type": "typing", "question": "What is A ^ 0?", "correctAnswer": ["A", "identity", "unchanged"], "explanation": "XOR with 0 is identity operation; A ^ 0 = A.", "xp": 5},
        {"id": "cpp-19-6-5", "type": "code", "question": "Toggle a bit using XOR.", "correctAnswer": ["x ^= (1 << n)", "toggle bit", "flip bit"], "explanation": "XOR with 1 at bit position toggles that bit.", "xp": 15},
        {"id": "cpp-19-6-6", "type": "code", "question": "Swap two numbers using XOR.", "correctAnswer": ["a ^= b; b ^= a; a ^= b;", "XOR swap", "swap"], "explanation": "XOR swap exchanges values without temporary variable.", "xp": 15},
        {"id": "cpp-19-6-7", "type": "code", "question": "Find different bits between numbers.", "correctAnswer": ["x ^ y", "XOR difference", "bitwise XOR"], "explanation": "XOR two numbers to find bits that are different.", "xp": 15},
        {"id": "cpp-19-6-8", "type": "code", "question": "Find unique element in array.", "correctAnswer": ["XOR all elements", "unique element", "find single"], "explanation": "XOR all elements to find the one appearing odd times.", "xp": 15},
        {"id": "cpp-19-6-9", "type": "typing", "question": "What is A ^ A?", "correctAnswer": ["0", "zero", "self-inverse"], "explanation": "XOR is self-inverse; A ^ A = 0.", "xp": 5},
        {"id": "cpp-19-6-10", "type": "code", "question": "Flip all bits using XOR.", "correctAnswer": ["x ^= ~0", "flip all", "complement"], "explanation": "XOR with ~0 flips all bits.", "xp": 15},
        {"id": "cpp-19-6-11", "type": "code", "question": "Toggle multiple bits.", "correctAnswer": ["x ^= mask", "toggle bits", "bitmask"], "explanation": "XOR with mask containing 1s at positions to toggle.", "xp": 15},
        {"id": "cpp-19-6-12", "type": "code", "question": "Check if two numbers have opposite parity.", "correctAnswer": ["(x ^ y) & 1", "parity check", "odd/even"], "explanation": "XOR and check LSB to determine if parity differs.", "xp": 15},
        {"id": "cpp-19-6-13", "type": "typing", "question": "What is commutative property of XOR?", "correctAnswer": ["A^B = B^A", "order doesn't matter", "commutative"], "explanation": "XOR is commutative; order of operands doesn't matter.", "xp": 5},
        {"id": "cpp-19-6-14", "type": "code", "question": "Implement simple XOR cipher.", "correctAnswer": ["x ^ key", "XOR encryption", "cipher"], "explanation": "XOR with key for both encryption and decryption.", "xp": 15},
        {"id": "cpp-19-6-15", "type": "code", "question": "Find first different bit.", "correctAnswer": ["ffs(x ^ y)", "find first set", "bit position"], "explanation": "Find position of first set bit in XOR of two numbers.", "xp": 15},
        {"id": "cpp-19-6-16", "type": "code", "question": "XOR associativity in code.", "correctAnswer": ["(a ^ b) ^ c == a ^ (b ^ c)", "associative", "grouping"], "explanation": "XOR is associative; grouping doesn't matter.", "xp": 15},
        {"id": "cpp-19-6-17", "type": "code", "question": "Check if bit pattern is same.", "correctAnswer": ["(x ^ y) == 0", "equality check", "same pattern"], "explanation": "XOR result is 0 if bit patterns are identical.", "xp": 15},
        {"id": "cpp-19-6-18", "type": "code", "question": "Generate alternating bits.", "correctAnswer": ["n ^ (n >> 1)", "alternating", "pattern"], "explanation": "XOR with right-shifted value creates alternating pattern.", "xp": 15},
        {"id": "cpp-19-6-19", "type": "typing", "question": "How does XOR work in grayscale images?", "correctAnswer": ["pixel blending", "image processing", "blending"], "explanation": "XOR blends pixel values for special effects.", "xp": 5},
        {"id": "cpp-19-6-20", "type": "code", "question": "XOR for checksums.", "correctAnswer": ["XOR all bytes", "checksum", "error detection"], "explanation": "XOR all bytes to compute simple checksum.", "xp": 15},
        {"id": "cpp-19-6-21", "type": "code", "question": "Reverse using XOR property.", "correctAnswer": ["A ^ B ^ B = A", "reverse operation", "self-inverse"], "explanation": "XOR twice with same value returns original.", "xp": 15},
        {"id": "cpp-19-6-22", "type": "code", "question": "XOR in parity generation.", "correctAnswer": ["parity bit calculation", "error detection", "parity"], "explanation": "XOR bits to generate parity bit for error detection.", "xp": 15},
        {"id": "cpp-19-6-23", "type": "code", "question": "Find missing number.", "correctAnswer": ["XOR with 1..n", "missing element", "find missing"], "explanation": "XOR array with 1..n to find missing number.", "xp": 15},
        {"id": "cpp-19-6-24", "type": "typing", "question": "What is XOR used for in networking?", "correctAnswer": ["checksum", "error detection", "data integrity"], "explanation": "XOR is commonly used for checksums in networking.", "xp": 5},
        {"id": "cpp-19-6-25", "type": "code", "question": "Debug XOR operations.", "correctAnswer": ["print binary output", "debug", "binary display"], "explanation": "Print binary representation to debug XOR operations.", "xp": 15}
    ]
}

data['units'][18]['lessons'][5].update(lesson19_6)
print("✅ Unit 19, Lesson 6: Bitwise XOR - 25 detailed questions")

# Unit 22, Lesson 7: C++ Bit Manipulation Features
lesson22_7 = {
    "id": "cpp-U22-L7",
    "title": "C++ Bit Manipulation Features",
    "unitTitle": "22. Bit Manipulation",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# C++ Bit Manipulation Features

Built-in features and functions for bit manipulation in C++.

## Built-in Functions

C++20 and later provide built-in bit manipulation functions.

### Count Functions

- **std::popcount**: Count set bits
- **std::countl_zero**: Count leading zeros
- **std::countr_zero**: Count trailing zeros
- **std::countl_one**: Count leading ones
- **std::countr_one**: Count trailing ones

### Bit Operations

- **std::bit_cast**: Reinterpret bits
- **std::rotl**: Rotate left
- **std::rotr**: Rotate right
- **std::has_single_bit**: Check power of two
- **std::bit_width**: Bits needed to represent

## Type Traits

- **std::is_signed_v**: Check if type is signed
- **std::make_unsigned_t**: Get unsigned version
- **std::is_integral_v**: Check if integral type

## Bitset

```cpp
std::bitset<32> flags;
flags.set(5);
flags.test(3);
```

## Best Practices

1. Use built-in functions over manual bit tricks
2. Include <bit> header for C++20 functions
3. Use std::bitset for fixed-size bit arrays
4. Leverage constexpr for compile-time bit ops
""",
    "questions": [
        {"id": "cpp-22-7-1", "type": "typing", "question": "What does std::popcount do?", "correctAnswer": ["counts set bits", "population count", "bit count"], "explanation": "std::popcount returns the number of set bits in a value.", "xp": 5},
        {"id": "cpp-22-7-2", "type": "typing", "question": "What header contains C++20 bit functions?", "correctAnswer": ["<bit>", "bit header", "C++20 bit"], "explanation": "Include <bit> header for C++20 bit manipulation functions.", "xp": 5},
        {"id": "cpp-22-7-3", "type": "code", "question": "Use std::popcount.", "correctAnswer": ["std::popcount(x)", "count bits", "popcount"], "explanation": "Call std::popcount to count set bits in integer.", "xp": 15},
        {"id": "cpp-22-7-4", "type": "code", "question": "Use std::countl_zero.", "correctAnswer": ["std::countl_zero(x)", "leading zeros", "count zeros"], "explanation": "std::countl_zero counts leading zero bits.", "xp": 15},
        {"id": "cpp-22-7-5", "type": "code", "question": "Use std::countr_zero.", "correctAnswer": ["std::countr_zero(x)", "trailing zeros", "count zeros"], "explanation": "std::countr_zero counts trailing zero bits.", "xp": 15},
        {"id": "cpp-22-7-6", "type": "multiple", "question": "What checks if number is power of two?", "options": ["std::has_single_bit", "std::is_power_of_two", "std::check_power", "std::test_pow2"], "correctAnswer": [0], "explanation": "std::has_single_bit checks if value has exactly one set bit (power of two).", "xp": 5},
        {"id": "cpp-22-7-7", "type": "code", "question": "Use std::bit_width.", "correctAnswer": ["std::bit_width(x)", "bits needed", "bit width"], "explanation": "std::bit_width returns number of bits needed to represent value.", "xp": 15},
        {"id": "cpp-22-7-8", "type": "code", "question": "Use std::rotl.", "correctAnswer": ["std::rotl(x, n)", "rotate left", "bit rotation"], "explanation": "std::rotl rotates bits left by n positions.", "xp": 15},
        {"id": "cpp-22-7-9", "type": "code", "question": "Use std::rotr.", "correctAnswer": ["std::rotr(x, n)", "rotate right", "bit rotation"], "explanation": "std::rotr rotates bits right by n positions.", "xp": 15},
        {"id": "cpp-22-7-10", "type": "code", "question": "Use std::bitset.", "correctAnswer": ["std::bitset<N> b", "bitset", "bit array"], "explanation": "Create bitset with template parameter for size.", "xp": 15},
        {"id": "cpp-22-7-11", "type": "code", "question": "Set bit in std::bitset.", "correctAnswer": ["b.set(n)", "set bit", "bitset set"], "explanation": "set() method sets bit at specified position.", "xp": 15},
        {"id": "cpp-22-7-12", "type": "code", "question": "Test bit in std::bitset.", "correctAnswer": ["b.test(n)", "test bit", "bitset test"], "explanation": "test() method returns true if bit is set.", "xp": 15},
        {"id": "cpp-22-7-13", "type": "code", "question": "Count set bits before C++20.", "correctAnswer": ["__builtin_popcount", "builtin popcount", "GCC builtin"], "explanation": "Use __builtin_popcount for pre-C++20 code on GCC/Clang.", "xp": 15},
        {"id": "cpp-22-7-14", "type": "typing", "question": "What is std::bit_cast?", "correctAnswer": ["reinterprets bits as another type", "bit cast", "type punning"], "explanation": "std::bit_cast reinterprets object representation as another type.", "xp": 5},
        {"id": "cpp-22-7-15", "type": "code", "question": "Check if type is signed.", "correctAnswer": ["std::is_signed_v<T>", "type trait", "signed check"], "explanation": "std::is_signed_v is type trait to check if type is signed.", "xp": 15},
        {"id": "cpp-22-7-16", "type": "code", "question": "Get unsigned type.", "correctAnswer": ["std::make_unsigned_t<T>", "unsigned type", "type alias"], "explanation": "std::make_unsigned_t gets unsigned version of type.", "xp": 15},
        {"id": "cpp-22-7-17", "type": "code", "question": "Use constexpr bit operations.", "correctAnswer": ["constexpr int x = a | b", "constexpr", "compile-time"], "explanation": "Use constexpr for compile-time bit operations.", "xp": 15},
        {"id": "cpp-22-7-18", "type": "typing", "question": "Why use built-in functions?", "correctAnswer": ["optimized by compiler", "faster", "portable"], "explanation": "Built-in functions are optimized by compiler and portable.", "xp": 5},
        {"id": "cpp-22-7-19", "type": "code", "question": "Bitset to integer conversion.", "correctAnswer": ["b.to_ulong()", "convert", "to integer"], "explanation": "to_ulong() converts bitset to unsigned long.", "xp": 15},
        {"id": "cpp-22-7-20", "type": "code", "question": "String to bitset.", "correctAnswer": ["std::bitset<N>(str)", "string conversion", "parse"], "explanation": "Construct bitset from binary string.", "xp": 15},
        {"id": "cpp-22-7-21", "type": "code", "question": "Bitset to string.", "correctAnswer": ["b.to_string()", "string conversion", "to string"], "explanation": "to_string() converts bitset to binary string.", "xp": 15},
        {"id": "cpp-22-7-22", "type": "code", "question": "Find next power of two.", "correctAnswer": ["std::bit_ceil(x)", "next pow2", "bit ceil"], "explanation": "std::bit_ceil finds smallest power of two >= x.", "xp": 15},
        {"id": "cpp-22-7-23", "type": "code", "question": "Find previous power of two.", "correctAnswer": ["std::bit_floor(x)", "prev pow2", "bit floor"], "explanation": "std::bit_floor finds largest power of two <= x.", "xp": 15},
        {"id": "cpp-22-7-24", "type": "typing", "question": "What is endian in bit manipulation?", "correctAnswer": ["byte ordering", "endianness", "byte order"], "explanation": "Endian determines byte ordering in multi-byte values.", "xp": 5},
        {"id": "cpp-22-7-25", "type": "code", "question": "Debug bit operations.", "correctAnswer": ["print in binary", "debug", "hex output"], "explanation": "Use std::bitset to print binary for debugging.", "xp": 15}
    ]
}

data['units'][21]['lessons'][6].update(lesson22_7)
print("✅ Unit 22, Lesson 7: C++ Bit Manipulation Features - 25 detailed questions")

# Unit 20, Lesson 6: Bitwise Shift Operations
lesson20_6 = {
    "id": "cpp-U20-L6",
    "title": "Bitwise Shift Operations",
    "unitTitle": "20. Bit Manipulation",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Bitwise Shift Operations

Shift bits left or right to multiply, divide, or manipulate values.

## Left Shift (<<)

Shifts bits left, filling with zeros.

```
5 << 1  // 10  (multiply by 2)
5 << 2  // 20  (multiply by 4)
```

## Right Shift (>>)

Shifts bits right.

**For unsigned:**
- Fills with zeros (logical shift)

**For signed:**
- Implementation-defined (usually arithmetic shift)

## Multiplication/Division

- **Left shift by n**: Multiply by 2^n
- **Right shift by n**: Divide by 2^n (floor)

## Common Uses

- **Fast math**: Multiply/divide by powers of two
- **Extract bits**: Isolate specific bit ranges
- **Bit packing**: Combine multiple values
- **Alignment**: Ensure proper alignment

## Overflow

Shifting beyond bit width is undefined behavior.

## Best Practices

1. Use for powers of two only
2. Be careful with signed types
3. Watch for overflow
4. Document intent clearly
""",
    "questions": [
        {"id": "cpp-20-6-1", "type": "typing", "question": "What does left shift do?", "correctAnswer": ["shifts bits left filling with zeros", "multiply by 2", "bit shift"], "explanation": "Left shift moves bits left, filling empty positions with zeros.", "xp": 5},
        {"id": "cpp-20-6-2", "type": "typing", "question": "What is 5 << 1?", "correctAnswer": ["10", "multiply by 2", "left shift"], "explanation": "5 << 1 shifts bits left by 1, equivalent to multiplying by 2.", "xp": 5},
        {"id": "cpp-20-6-3", "type": "multiple", "question": "What is 8 >> 1?", "options": ["4", "2", "16", "8"], "correctAnswer": [0], "explanation": "8 >> 1 shifts bits right by 1, equivalent to dividing by 2.", "xp": 5},
        {"id": "cpp-20-6-4", "type": "typing", "question": "What does x << n calculate?", "correctAnswer": ["x * 2^n", "multiply by power of two", "left shift math"], "explanation": "Left shift by n multiplies by 2^n.", "xp": 5},
        {"id": "cpp-20-6-5", "type": "code", "question": "Multiply by 8 using shift.", "correctAnswer": ["x << 3", "multiply by 8", "shift"], "explanation": "x << 3 multiplies by 2^3 = 8.", "xp": 15},
        {"id": "cpp-20-6-6", "type": "code", "question": "Divide by 16 using shift.", "correctAnswer": ["x >> 4", "divide by 16", "shift"], "explanation": "x >> 4 divides by 2^4 = 16.", "xp": 15},
        {"id": "cpp-20-6-7", "type": "code", "question": "Extract low 4 bits.", "correctAnswer": ["x & 0xF", "mask", "bit extraction"], "explanation": "AND with 0xF (binary 1111) extracts lowest 4 bits.", "xp": 15},
        {"id": "cpp-20-6-8", "type": "code", "question": "Extract high 4 bits of 8-bit value.", "correctAnswer": ["(x >> 4) & 0xF", "extract high bits", "shift and mask"], "explanation": "Shift right by 4, then mask to get high 4 bits.", "xp": 15},
        {"id": "cpp-20-6-9", "type": "typing", "question": "What happens when shifting beyond width?", "correctAnswer": ["undefined behavior", "overflow", "undefined"], "explanation": "Shifting beyond bit width causes undefined behavior.", "xp": 5},
        {"id": "cpp-20-6-10", "type": "code", "question": "Pack two 4-bit values.", "correctAnswer": ["(high << 4) | low", "bit packing", "combine"], "explanation": "Shift high nibble left, OR with low nibble.", "xp": 15},
        {"id": "cpp-20-6-11", "type": "code", "question": "Unpack high nibble.", "correctAnswer": ["x >> 4", "unpack", "extract"], "explanation": "Shift right to get high nibble.", "xp": 15},
        {"id": "cpp-20-6-12", "type": "code", "question": "Unpack low nibble.", "correctAnswer": ["x & 0xF", "unpack", "extract"], "explanation": "Mask with 0xF to get low nibble.", "xp": 15},
        {"id": "cpp-20-6-13", "type": "typing", "question": "What is arithmetic right shift?", "correctAnswer": ["preserves sign bit", "signed shift", "sign extension"], "explanation": "Arithmetic right shift preserves sign bit for signed types.", "xp": 5},
        {"id": "cpp-20-6-14", "type": "code", "question": "Rotate bits (without roll instruction).", "correctAnswer": ["(x << n) | (x >> (bits-n))", "rotate", "bit rotation"], "explanation": "Combine left and right shifts to rotate bits.", "xp": 15},
        {"id": "cpp-20-6-15", "type": "code", "question": "Check if bit is set after shift.", "correctAnswer": ["(x >> n) & 1", "check bit", "bit test"], "explanation": "Shift and mask to check if specific bit is set.", "xp": 15},
        {"id": "cpp-20-6-16", "type": "code", "question": "Shift with overflow detection.", "correctAnswer": ["check result against expected", "overflow check", "detect overflow"], "explanation": "Compare result with expected to detect overflow.", "xp": 15},
        {"id": "cpp-20-6-17", "type": "code", "question": "Shift by variable amount.", "correctAnswer": ["x << n", "variable shift", "dynamic shift"], "explanation": "Shift amount can be variable expression.", "xp": 15},
        {"id": "cpp-20-6-18", "type": "typing", "question": "What is logical right shift?", "correctAnswer": ["fills with zeros", "unsigned shift", "logical shift"], "explanation": "Logical right shift always fills with zeros regardless of sign.", "xp": 5},
        {"id": "cpp-20-6-19", "type": "code", "question": "Align to next power of two.", "correctAnswer": ["(x + N-1) & ~(N-1)", "alignment", "round up"], "explanation": "Round up to next multiple of power of two.", "xp": 15},
        {"id": "cpp-20-6-20", "type": "code", "question": "Create mask for n bits.", "correctAnswer": ["(1 << n) - 1", "mask", "bitmask"], "explanation": "(1 << n) - 1 creates mask with n low bits set.", "xp": 15},
        {"id": "cpp-20-6-21", "type": "code", "question": "Shift with signed vs unsigned.", "correctAnswer": ["unsigned for predictable behavior", "signed shift", "type choice"], "explanation": "Use unsigned types for predictable shift behavior.", "xp": 15},
        {"id": "cpp-20-6-22", "type": "code", "question": "Debug shift operations.", "correctAnswer": ["print in binary", "debug output", "visualize"], "explanation": "Print binary representation to debug shifts.", "xp": 15},
        {"id": "cpp-20-6-23", "type": "code", "question": "Shift for bit manipulation patterns.", "correctAnswer": ["pattern creation", "generate pattern", "bit pattern"], "explanation": "Use shifts to create bit patterns efficiently.", "xp": 15},
        {"id": "cpp-20-6-24", "type": "typing", "question": "Why use shift instead of multiply?", "correctAnswer": ["faster for powers of two", "performance", "optimization"], "explanation": "Shift is faster than multiply for powers of two.", "xp": 5},
        {"id": "cpp-20-6-25", "type": "code", "question": "Shift for endianness conversion.", "correctAnswer": ["shift bytes", "endianness", "byte swap"], "explanation": "Use shifts to handle endianness in multi-byte values.", "xp": 15}
    ]
}

data['units'][19]['lessons'][5].update(lesson20_6)
print("✅ Unit 20, Lesson 6: Bitwise Shift Operations - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 8 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 19, Lesson 6: Bitwise XOR")
print("  - Unit 22, Lesson 7: C++ Bit Manipulation Features")
print("  - Unit 20, Lesson 6: Bitwise Shift Operations")
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
