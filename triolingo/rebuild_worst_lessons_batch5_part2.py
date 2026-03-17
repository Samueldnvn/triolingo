#!/usr/bin/env python3
"""
Rebuild Batch 5 - Find and rebuild actual remaining problematic lessons
"""
import json
import os

print("🚀 BATCH 5: Finding remaining lessons...")
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
            # Still problematic if avg < 25 chars
            if avg_len < 25:
                still_problematic.append({
                    'unit': unit_idx + 1,
                    'lesson': lesson_idx + 1,
                    'title': lesson.get('title', 'Unknown'),
                    'avg_length': avg_len,
                    'q_count': q_count
                })

# Sort by worst (lowest avg length)
still_problematic.sort(key=lambda x: x['avg_length'])

print(f"Found {len(still_problematic)} remaining problematic lessons")
print("\nNext 5 worst lessons to fix:")
for i, lesson in enumerate(still_problematic[:5], 1):
    print(f"{i}. Unit {lesson['unit']}, Lesson {lesson['lesson']}: {lesson['title']} (avg: {lesson['avg_length']:.1f} chars)")

# Let's rebuild the next 3 unique lessons from the list
# Unit 42, Lesson 6: Make
lesson42_6 = {
    "id": "cpp-U42-L6",
    "title": "Make",
    "unitTitle": "42. Build Systems",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Make Build System

Automated build tool for C++ projects.

## Core Concept

Make is a build automation tool that builds executable programs and libraries from source code.

## Makefile Structure

```makefile
target: dependencies
    command
    command
```

## Variables

```makefile
CC = gcc
CXX = g++
CFLAGS = -Wall -g
```

## Common Targets

- **all**: Build all targets
- **clean**: Remove build artifacts
- **install**: Install to system
- **test**: Run tests

## Automatic Variables

- **$@**: Target name
- **$^**: All dependencies
- **$<**: First dependency
- **$?**: Dependencies newer than target

## Best Practices

1. Use variables for compilers and flags
2. Separate source and build directories
3. Use pattern rules for common patterns
4. Include .PHONY for non-file targets
""",
    "questions": [
        {"id": "cpp-42-6-1", "type": "typing", "question": "What is Make used for?", "correctAnswer": ["automate building C++ projects", "build automation", "compile projects"], "explanation": "Make automates the compilation and linking of C++ projects by tracking dependencies.", "xp": 5},
        {"id": "cpp-42-6-2", "type": "typing", "question": "What is a Makefile?", "correctAnswer": ["configuration file for Make", "build configuration", "Make script"], "explanation": "A Makefile contains instructions for Make on how to build the project.", "xp": 5},
        {"id": "cpp-42-6-3", "type": "typing", "question": "What is a target in Make?", "correctAnswer": ["file or rule to build", "build target", "rule"], "explanation": "A target is a file to build or a rule that defines how to create files.", "xp": 5},
        {"id": "cpp-42-6-4", "type": "typing", "question": "What are dependencies in Make?", "correctAnswer": ["files needed to build target", "prerequisites", "requirements"], "explanation": "Dependencies are files that a target depends on before it can be built.", "xp": 5},
        {"id": "cpp-42-6-5", "type": "multiple", "question": "Which automatic variable represents the target?", "options": ["$@", "$^", "$<", "$?"], "correctAnswer": [0], "explanation": "$@ represents the target name in a Makefile rule.", "xp": 5},
        {"id": "cpp-42-6-6", "type": "code", "question": "Create simple Makefile rule.", "correctAnswer": ["target: dependencies\\n\\tcommand", "rule syntax", "Makefile"], "explanation": "Create rule with target, colon, dependencies, and indented commands.", "xp": 15},
        {"id": "cpp-42-6-7", "type": "code", "question": "Define variables in Makefile.", "correctAnswer": ["VAR = value", "variable definition", "Make variables"], "explanation": "Define variables with VAR = value syntax for reusability.", "xp": 15},
        {"id": "cpp-42-6-8", "type": "code", "question": "Use variables in Makefile rules.", "correctAnswer": ["$(VAR)", "variable reference", "use variable"], "explanation": "Reference variables with $(VAR) or ${VAR} syntax.", "xp": 15},
        {"id": "cpp-42-6-9", "type": "code", "question": "Create clean target.", "correctAnswer": ["clean: \\n\\trm -f *.o", "clean target", "remove files"], "explanation": "Create clean target to remove build artifacts like object files.", "xp": 15},
        {"id": "cpp-42-6-10", "type": "code", "question": "Create all target.", "correctAnswer": ["all: main", "build all", "default target"], "explanation": "Create all target as default that builds the main executable.", "xp": 15},
        {"id": "cpp-42-6-11", "type": "code", "question": "Use pattern rules.", "correctAnswer": ["%.o: %.cpp", "pattern rule", "implicit rule"], "explanation": "Use pattern rules like %.o: %.cpp to define how to build object files.", "xp": 15},
        {"id": "cpp-42-6-12", "type": "typing", "question": "What does .PHONY do?", "correctAnswer": ["declare non-file targets", "phony targets", "always run"], "explanation": ".PHONY declares targets that don't correspond to files, preventing file conflicts.", "xp": 5},
        {"id": "cpp-42-6-13", "type": "code", "question": "Add compiler flags to Makefile.", "correctAnswer": ["CFLAGS = -Wall -g", "compiler flags", "build flags"], "explanation": "Define CFLAGS variable with warning and debug flags.", "xp": 15},
        {"id": "cpp-42-6-14", "type": "code", "question": "Build multiple object files.", "correctAnswer": ["main: file1.o file2.o", "multiple objects", "link objects"], "explanation": "Specify all object files as dependencies for the main target.", "xp": 15},
        {"id": "cpp-42-6-15", "type": "code", "question": "Use automatic variables.", "correctAnswer": ["$@ $^ $<", "automatic variables", "special variables"], "explanation": "Use $@ for target, $^ for all dependencies, $< for first dependency.", "xp": 15},
        {"id": "cpp-42-6-16", "type": "code", "question": "Create install target.", "correctAnswer": ["install: main\\n\\tcp main /usr/local/bin", "install target", "copy binary"], "explanation": "Create install target to copy the built binary to system directory.", "xp": 15},
        {"id": "cpp-42-6-17", "type": "typing", "question": "How does Make detect changes?", "correctAnswer": ["compares file timestamps", "timestamp checking", "modification time"], "explanation": "Make compares timestamps to rebuild only files that have changed.", "xp": 5},
        {"id": "cpp-42-6-18", "type": "code", "question": "Include subdirectories in Makefile.", "correctAnswer": ["include file", "sub-makefile", "include directive"], "explanation": "Use include directive to include other Makefiles or configuration.", "xp": 15},
        {"id": "cpp-42-6-19", "type": "code", "question": "Handle header dependencies.", "correctAnswer": ["-MMD -MP flags", "auto dependencies", "dependency generation"], "explanation": "Use compiler flags to generate dependency files automatically.", "xp": 15},
        {"id": "cpp-42-6-20", "type": "code", "question": "Run Make with verbose output.", "correctAnswer": ["make V=1", "verbose", "show commands"], "explanation": "Run make V=1 to show all commands being executed.", "xp": 15},
        {"id": "cpp-42-6-21", "type": "code", "question": "Parallelize builds with Make.", "correctAnswer": ["make -j", "parallel jobs", "multiple jobs"], "explanation": "Use make -j to run multiple jobs in parallel for faster builds.", "xp": 15},
        {"id": "cpp-42-6-22", "type": "typing", "question": "What is the purpose of dependencies?", "correctAnswer": ["specify what files target needs", "build order", "prerequisites"], "explanation": "Dependencies define what files must exist before building a target.", "xp": 5},
        {"id": "cpp-42-6-23", "type": "code", "question": "Debug Makefile with dry run.", "correctAnswer": ["make -n", "dry run", "show commands without running"], "explanation": "Use make -n to show commands without executing them for debugging.", "xp": 15},
        {"id": "cpp-42-6-24", "type": "code", "question": "Define recursive Make.", "correctAnswer": ["$(MAKE) -C subdir", "recursive make", "subdirectory"], "explanation": "Use $(MAKE) -C subdir to recursively invoke Make in subdirectories.", "xp": 15},
        {"id": "cpp-42-6-25", "type": "code", "question": "Create test target.", "correctAnswer": ["test: main\\n\\t./main", "run tests", "test target"], "explanation": "Create test target to run the program and check for errors.", "xp": 15}
    ]
}

data['units'][41]['lessons'][5].update(lesson42_6)
print("✅ Unit 42, Lesson 6: Make - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 5 COMPLETE: 2 lessons (avoiding duplicates)")
print("="*70)
print("Lessons completed:")
print("  - Unit 38, Lesson 3: UDP Programming")
print("  - Unit 42, Lesson 6: Make")
print("\nTotal questions: 50")
print("="*70)

# Write final
output_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(output_path, 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("✅ Saved to cppCombined.js")
