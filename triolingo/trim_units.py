#!/usr/bin/env python3
"""
Fix units that have more than 9 lessons - trim them down to 9
"""
import json
import re

print("=" * 70)
print("Trimming units with more than 9 lessons down to 9 lessons")
print("=" * 70)

# Load the data
with open('questions/cppCombined.js', 'r') as f:
    content = f.read()

json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Units to trim (keep first 9 lessons)
units_to_trim = [20, 21, 25, 29, 31, 44, 46, 49]

total_trimmed = 0
for unit in data['units']:
    unit_id = int(unit['unitId'])
    if unit_id in units_to_trim:
        current_lessons = len(unit.get('lessons', []))
        if current_lessons > 9:
            unit['lessons'] = unit['lessons'][:9]
            total_trimmed += current_lessons - 9
            print(f"✅ Trimmed Unit {unit_id}: {current_lessons} → 9 lessons (removed {current_lessons - 9})")

# Write the updated data
with open('questions/cppCombined.js', 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n" + "=" * 70)
print(f"Trimmed {total_trimmed} lessons to ensure all units have exactly 9 lessons!")
print("=" * 70)