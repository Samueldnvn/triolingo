#!/usr/bin/env python3
"""
Rebuild Top 10 Worst Lessons - Batch 3 Part 2 (Lessons 13-15)
"""
import json
import os

print("🚀 BATCH 3 PART 2: Lessons 13-15")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 48, Lesson 4: GUI Applications
lesson48_4 = {
    "id": "cpp-U48-L4",
    "title": "GUI Applications",
    "unitTitle": "48. Projects and Applications",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# GUI Applications with C++

Building graphical user interfaces using C++ frameworks.

## Popular GUI Frameworks

- **Qt**: Cross-platform, feature-rich
- **wxWidgets**: Native look and feel
- **GTK**: GNOME toolkit
- **FLTK**: Lightweight
- **Dear ImGui**: Immediate mode

## Key Concepts

1. **Widgets**: UI elements (buttons, labels, text boxes)
2. **Signals/Slots**: Qt's event handling mechanism
3. **Event Loop**: Processing user input
4. **Layouts**: Arranging widgets
5. **Resources**: Icons, images, styles

## Qt Basics

```cpp
#include <QApplication>
#include <QMainWindow>
#include <QPushButton>

int main(int argc, char* argv[]) {
    QApplication app(argc, argv);
    QMainWindow window;
    QPushButton button("Click me", &window);
    window.show();
    return app.exec();
}
```

## Best Practices

1. Separate UI from logic
2. Use layouts for responsive design
3. Handle events properly
4. Resource management
""",
    "questions": [
        {"id": "cpp-48-4-1", "type": "typing", "question": "What is a GUI application?", "correctAnswer": ["graphical user interface application", "visual interface", "windows and controls"], "explanation": "A GUI application provides a graphical interface with windows, buttons, menus for user interaction.", "xp": 5},
        {"id": "cpp-48-4-2", "type": "typing", "question": "What is Qt framework?", "correctAnswer": ["cross-platform GUI framework", "C++ framework", "GUI toolkit"], "explanation": "Qt is a cross-platform C++ framework for developing GUI applications and embedded systems.", "xp": 5},
        {"id": "cpp-48-4-3", "type": "multiple", "question": "Which is a popular C++ GUI framework?", "options": ["Qt", "React", "Angular", "Electron"], "correctAnswer": [0], "explanation": "Qt is one of the most popular C++ frameworks for building cross-platform GUI applications.", "xp": 5},
        {"id": "cpp-48-4-4", "type": "typing", "question": "What is a widget in GUI programming?", "correctAnswer": ["UI element like button or label", "interface component", "control"], "explanation": "A widget is a basic building block of a GUI, such as buttons, labels, text boxes, or sliders.", "xp": 5},
        {"id": "cpp-48-4-5", "type": "typing", "question": "What is the event loop in GUI applications?", "correctAnswer": ["processes user input and events", "event processing", "main loop"], "explanation": "The event loop continuously processes user input and system events, updating the UI.", "xp": 5},
        {"id": "cpp-48-4-6", "type": "typing", "question": "What are signals and slots in Qt?", "correctAnswer": ["Qt's event handling mechanism", "observer pattern", "callback system"], "explanation": "Signals and slots are Qt's mechanism for communication between objects, implementing the observer pattern.", "xp": 5},
        {"id": "cpp-48-4-7", "type": "code", "question": "Create basic Qt application with window.", "correctAnswer": ["QApplication", "QMainWindow", "show", "exec"], "explanation": "Create QApplication, QMainWindow, call show(), and run event loop with exec().", "xp": 15},
        {"id": "cpp-48-4-8", "type": "code", "question": "Add button to Qt window.", "correctAnswer": ["QPushButton", "parent widget", "connect signals"], "explanation": "Create QPushButton with text, set parent to window, optionally connect signals.", "xp": 15},
        {"id": "cpp-48-4-9", "type": "code", "question": "Connect button click to function.", "correctAnswer": ["connect()", "SIGNAL/SLOT", "lambda"], "explanation": "Use connect() to link button's clicked signal to a slot function or lambda.", "xp": 15},
        {"id": "cpp-48-4-10", "type": "typing", "question": "What is wxWidgets?", "correctAnswer": ["cross-platform GUI toolkit", "native look and feel", "C++ framework"], "explanation": "wxWidgets is a C++ library for cross-platform GUI development with native look and feel.", "xp": 5},
        {"id": "cpp-48-4-11", "type": "typing", "question": "What is GTK?", "correctAnswer": ["GNOME GUI toolkit", "Linux GUI", "multi-platform toolkit"], "explanation": "GTK is a multi-platform toolkit for creating graphical user interfaces, primarily used with GNOME.", "xp": 5},
        {"id": "cpp-48-4-12", "type": "code", "question": "Use layouts in Qt to arrange widgets.", "correctAnswer": ["QVBoxLayout", "QHBoxLayout", "add widget"], "explanation": "Use layout managers like QVBoxLayout and QHBoxLayout to arrange widgets responsively.", "xp": 15},
        {"id": "cpp-48-4-13", "type": "code", "question": "Create menu bar in Qt application.", "correctAnswer": ["QMenuBar", "QMenu", "addAction", "setMenuBar"], "explanation": "Create QMenuBar with QMenu items, add actions, and set it on the main window.", "xp": 15},
        {"id": "cpp-48-4-14", "type": "code", "question": "Handle window close event.", "correctAnswer": ["closeEvent", "override function", "event handler"], "explanation": "Override the closeEvent() function in your QMainWindow subclass to handle window closing.", "xp": 15},
        {"id": "cpp-48-4-15", "type": "typing", "question": "What is Dear ImGui?", "correctAnswer": ["immediate mode GUI library", "debug UI", "game UI"], "explanation": "Dear ImGui is an immediate mode GUI library popular in game development and debug tools.", "xp": 5},
        {"id": "cpp-48-4-16", "type": "code", "question": "Add text input field in Qt.", "correctAnswer": ["QLineEdit", "QTextEdit", "input widget"], "explanation": "Use QLineEdit for single-line input or QTextEdit for multi-line text input.", "xp": 15},
        {"id": "cpp-48-4-17", "type": "code", "question": "Display image in Qt application.", "correctAnswer": ["QLabel with QPixmap", "load image", "display"], "explanation": "Load image into QPixmap, then display it using QLabel with setPixmap().", "xp": 15},
        {"id": "cpp-48-4-18", "type": "code", "question": "Implement timer in Qt application.", "correctAnswer": ["QTimer", "timeout signal", "start/stop"], "explanation": "Create QTimer, connect timeout signal to slot, and start the timer.", "xp": 15},
        {"id": "cpp-48-4-19", "type": "code", "question": "Handle keyboard input in Qt.", "correctAnswer": ["keyPressEvent", "override", "event handler"], "explanation": "Override keyPressEvent() in your widget to handle keyboard input events.", "xp": 15},
        {"id": "cpp-48-4-20", "type": "code", "question": "Use dialogs in Qt application.", "correctAnswer": ["QDialog", "QMessageBox", "QFileDialog"], "explanation": "Use QDialog, QMessageBox, or QFileDialog for standard dialog boxes.", "xp": 15},
        {"id": "cpp-48-4-21", "type": "typing", "question": "What is FLTK?", "correctAnswer": ["Fast Light Toolkit", "lightweight GUI", "C++ toolkit"], "explanation": "FLTK (Fast Light Toolkit) is a lightweight, cross-platform C++ GUI toolkit.", "xp": 5},
        {"id": "cpp-48-4-22", "type": "code", "question": "Create status bar in Qt window.", "correctAnswer": ["QStatusBar", "showMessage", "setStatusBar"], "explanation": "Create QStatusBar and set it on the main window with setStatusBar().", "xp": 15},
        {"id": "cpp-48-4-23", "type": "code", "question": "Customize widget appearance with stylesheets.", "correctAnswer": ["setStyleSheet", "CSS-like syntax", "styling"], "explanation": "Use setStyleSheet() with CSS-like syntax to customize widget appearance.", "xp": 15},
        {"id": "cpp-48-4-24", "type": "code", "question": "Handle mouse events in Qt.", "correctAnswer": ["mousePressEvent", "mouseMoveEvent", "event handlers"], "explanation": "Override mouse event handlers like mousePressEvent() and mouseMoveEvent().", "xp": 15},
        {"id": "cpp-48-4-25", "type": "code", "question": "Create tabbed interface in Qt.", "correctAnswer": ["QTabWidget", "addTab", "pages"], "explanation": "Use QTabWidget to create a tabbed interface with multiple pages.", "xp": 15}
    ]
}

data['units'][47]['lessons'][3].update(lesson48_4)
print("✅ Unit 48, Lesson 4: GUI Applications - 25 detailed questions")

# Unit 49, Lesson 3: STL & Algorithms Review
lesson49_3 = {
    "id": "cpp-U49-L3",
    "title": "STL & Algorithms Review",
    "unitTitle": "49. Course Completion & Final Summary",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# STL and Algorithms Review

Comprehensive review of C++ Standard Template Library and algorithms.

## STL Components

1. **Containers**: vector, list, map, set, etc.
2. **Iterators**: Traversing containers
3. **Algorithms**: sort, find, transform, etc.
4. **Functors**: Function objects
5. **Allocators**: Memory management

## Common Containers

- **vector**: Dynamic array
- **deque**: Double-ended queue
- **list**: Doubly linked list
- **map**: Key-value pairs (sorted)
- **unordered_map**: Key-value pairs (hash)
- **set**: Unique elements (sorted)
- **unordered_set**: Unique elements (hash)

## Common Algorithms

```cpp
std::sort(v.begin(), v.end());
std::find(v.begin(), v.end(), value);
std::for_each(v.begin(), v.end(), func);
std::transform(v.begin(), v.end(), out, func);
std::count(v.begin(), v.end(), value);
```

## Best Practices

1. Use appropriate container for task
2. Prefer algorithms over raw loops
3. Use range-based for loops
4. Understand complexity
""",
    "questions": [
        {"id": "cpp-49-3-1", "type": "typing", "question": "What is the STL in C++?", "correctAnswer": ["Standard Template Library", "collection of containers and algorithms", "C++ library"], "explanation": "STL is a set of C++ template classes providing containers, iterators, algorithms, and function objects.", "xp": 5},
        {"id": "cpp-49-3-2", "type": "typing", "question": "What are the main components of STL?", "correctAnswer": ["containers, iterators, algorithms, functors", "four main parts", "STL components"], "explanation": "STL consists of containers, iterators, algorithms, and function objects (functors).", "xp": 5},
        {"id": "cpp-49-3-3", "type": "multiple", "question": "Which STL container is a dynamic array?", "options": ["vector", "list", "map", "set"], "correctAnswer": [0], "explanation": "vector is a dynamic array that can resize automatically as elements are added or removed.", "xp": 5},
        {"id": "cpp-49-3-4", "type": "multiple", "question": "Which container stores key-value pairs in sorted order?", "options": ["map", "unordered_map", "vector", "list"], "correctAnswer": [0], "explanation": "map stores key-value pairs sorted by key, providing O(log n) lookup complexity.", "xp": 5},
        {"id": "cpp-49-3-5", "type": "typing", "question": "What is the time complexity of std::sort?", "correctAnswer": ["O(n log n)", "loglinear", "sort complexity"], "explanation": "std::sort has O(n log n) time complexity, typically using an introsort algorithm.", "xp": 5},
        {"id": "cpp-49-3-6", "type": "typing", "question": "What does std::find do?", "correctAnswer": ["search for element in range", "find value", "search algorithm"], "explanation": "std::find searches for a value in a range and returns an iterator to the first occurrence.", "xp": 5},
        {"id": "cpp-49-3-7", "type": "code", "question": "Use std::vector and add elements.", "correctAnswer": ["push_back", "emplace_back", "vector operations"], "explanation": "Use push_back() or emplace_back() to add elements to the end of a vector.", "xp": 15},
        {"id": "cpp-49-3-8", "type": "code", "question": "Sort vector using std::sort.", "correctAnswer": ["std::sort(v.begin(), v.end())", "sort vector", "algorithm"], "explanation": "std::sort(v.begin(), v.end()) sorts the elements in ascending order.", "xp": 15},
        {"id": "cpp-49-3-9", "type": "code", "question": "Find element using std::find.", "correctAnswer": ["std::find(v.begin(), v.end(), value)", "find element", "search"], "explanation": "std::find(v.begin(), v.end(), value) returns iterator to element or end() if not found.", "xp": 15},
        {"id": "cpp-49-3-10", "type": "code", "question": "Use std::map for key-value storage.", "correctAnswer": ["map[key] = value", "insert", "map operations"], "explanation": "Use map[key] = value or map.insert({key, value}) to store key-value pairs.", "xp": 15},
        {"id": "cpp-49-3-11", "type": "code", "question": "Iterate over vector using iterator.", "correctAnswer": ["for (auto it = v.begin(); it != v.end(); ++it)", "iterator loop", "iteration"], "explanation": "Use begin() and end() iterators with a for loop to iterate over vector elements.", "xp": 15},
        {"id": "cpp-49-3-12", "type": "code", "question": "Use range-based for loop.", "correctAnswer": ["for (auto& elem : container)", "range-based for", "modern C++"], "explanation": "for (const auto& elem : container) iterates over all elements in the container.", "xp": 15},
        {"id": "cpp-49-3-13", "type": "typing", "question": "What is the difference between vector and list?", "correctAnswer": ["vector contiguous, list linked", "memory layout", "performance trade-offs"], "explanation": "vector stores elements contiguously for fast random access; list is linked for fast insertions/deletions.", "xp": 5},
        {"id": "cpp-49-3-14", "type": "typing", "question": "What is unordered_map?", "correctAnswer": ["hash-based key-value container", "hash map", "O(1) average lookup"], "explanation": "unordered_map stores key-value pairs using a hash table for O(1) average lookup.", "xp": 5},
        {"id": "cpp-49-3-15", "type": "code", "question": "Use std::set for unique elements.", "correctAnswer": ["set.insert(value)", "set operations", "unique container"], "explanation": "set automatically stores only unique elements, ignoring duplicates.", "xp": 15},
        {"id": "cpp-49-3-16", "type": "code", "question": "Use std::for_each algorithm.", "correctAnswer": ["std::for_each(v.begin(), v.end(), func)", "for_each", "algorithm"], "explanation": "std::for_each applies a function to each element in a range.", "xp": 15},
        {"id": "cpp-49-3-17", "type": "code", "question": "Use std::transform algorithm.", "correctAnswer": ["std::transform(in.begin(), in.end(), out.begin(), func)", "transform", "map"], "explanation": "std::transform applies a function to each element and stores results in output range.", "xp": 15},
        {"id": "cpp-49-3-18", "type": "code", "question": "Count elements using std::count.", "correctAnswer": ["std::count(v.begin(), v.end(), value)", "count occurrences", "algorithm"], "explanation": "std::count returns the number of elements equal to a given value.", "xp": 15},
        {"id": "cpp-49-3-19", "type": "code", "question": "Remove elements from vector.", "correctAnswer": ["v.erase()", "remove-erase idiom", "erase elements"], "explanation": "Use v.erase() with iterators, or the remove-erase idiom to remove specific values.", "xp": 15},
        {"id": "cpp-49-3-20", "type": "code", "question": "Use std::unordered_set for fast lookup.", "correctAnswer": ["unordered_set", "hash set", "O(1) find"], "explanation": "unordered_set provides O(1) average lookup for checking element existence.", "xp": 15},
        {"id": "cpp-49-3-21", "type": "typing", "question": "What are iterators used for?", "correctAnswer": ["traversing container elements", "access elements", "iteration"], "explanation": "Iterators provide a uniform way to access and traverse elements in containers.", "xp": 5},
        {"id": "cpp-49-3-22", "type": "code", "question": "Use std::accumulate algorithm.", "correctAnswer": ["std::accumulate(v.begin(), v.end(), initial)", "sum elements", "accumulate"], "explanation": "std::accumulate computes the sum of elements in a range starting from an initial value.", "xp": 15},
        {"id": "cpp-49-3-23", "type": "code", "question": "Use std::copy algorithm.", "correctAnswer": ["std::copy(src.begin(), src.end(), dst.begin())", "copy range", "copy"], "explanation": "std::copy copies elements from source range to destination range.", "xp": 15},
        {"id": "cpp-49-3-24", "type": "typing", "question": "What is a functor in STL?", "correctAnswer": ["function object", "callable object", "overloaded operator()"], "explanation": "A functor is an object that can be called like a function, typically by overloading operator().", "xp": 5},
        {"id": "cpp-49-3-25", "type": "code", "question": "Use lambda with STL algorithm.", "correctAnswer": ["[](auto& x) { return x * 2; }", "lambda function", "algorithm parameter"], "explanation": "Pass a lambda expression as a function argument to STL algorithms like std::for_each or std::transform.", "xp": 15}
    ]
}

data['units'][48]['lessons'][2].update(lesson49_3)
print("✅ Unit 49, Lesson 3: STL & Algorithms Review - 25 detailed questions")

# Unit 47, Lesson 8: CI/CD
lesson47_8 = {
    "id": "cpp-U47-L8",
    "title": "CI/CD",
    "unitTitle": "47. Development Tools",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Continuous Integration and Continuous Deployment

Automating build, test, and deployment processes.

## CI (Continuous Integration)

- Automatically build on every commit
- Run automated tests
- Detect integration issues early
- Provide fast feedback

## CD (Continuous Deployment)

- Automatically deploy to production
- Automate release process
- Zero-downtime deployments
- Rollback capabilities

## Popular CI/CD Tools

- **GitHub Actions**: GitHub's built-in CI/CD
- **GitLab CI/CD**: GitLab's integrated CI/CD
- **Jenkins**: Open-source automation server
- **Travis CI**: Cloud-based CI service
- **CircleCI**: Cloud-based CI/CD platform

## CI/CD Pipeline

1. **Build**: Compile code
2. **Test**: Run tests
3. **Package**: Create distributable
4. **Deploy**: Deploy to servers

## Best Practices

1. Keep pipelines fast
2. Use caching
3. Parallelize when possible
4. Monitor pipeline performance
5. Secure secrets properly
""",
    "questions": [
        {"id": "cpp-47-8-1", "type": "typing", "question": "What is CI (Continuous Integration)?", "correctAnswer": ["automatically integrate and test code changes", "frequent integration", "automated testing"], "explanation": "CI is the practice of merging all developers' working copies to a shared mainline frequently, with automated testing.", "xp": 5},
        {"id": "cpp-47-8-2", "type": "typing", "question": "What is CD (Continuous Deployment)?", "correctAnswer": ["automatically deploy to production", "automated deployment", "release automation"], "explanation": "CD is the practice of automatically deploying code changes to production environments after passing tests.", "xp": 5},
        {"id": "cpp-47-8-3", "type": "multiple", "question": "Which is GitHub's CI/CD platform?", "options": ["GitHub Actions", "GitLab CI", "Jenkins", "Travis CI"], "correctAnswer": [0], "explanation": "GitHub Actions is GitHub's built-in CI/CD platform for automating workflows.", "xp": 5},
        {"id": "cpp-47-8-4", "type": "multiple", "question": "Which is an open-source CI/CD server?", "options": ["Jenkins", "GitHub Actions", "CircleCI", "Travis CI"], "correctAnswer": [0], "explanation": "Jenkins is an open-source automation server for CI/CD.", "xp": 5},
        {"id": "cpp-47-8-5", "type": "typing", "question": "What is the purpose of CI/CD?", "correctAnswer": ["automate build, test, and deployment", "automation", "efficiency"], "explanation": "CI/CD automates the software development process, from building to testing and deployment.", "xp": 5},
        {"id": "cpp-47-8-6", "type": "typing", "question": "What is a CI/CD pipeline?", "correctAnswer": ["sequence of automated stages", "workflow", "pipeline stages"], "explanation": "A CI/CD pipeline is a sequence of automated stages that code goes through from commit to deployment.", "xp": 5},
        {"id": "cpp-47-8-7", "type": "code", "question": "Create GitHub Actions workflow for C++.", "correctAnswer": [".github/workflows/ci.yml", "workflow file", "CMake build"], "explanation": "Create .github/workflows/ci.yml with steps to checkout, setup C++, build, and test.", "xp": 15},
        {"id": "cpp-47-8-8", "type": "code", "question": "Configure CMake in CI pipeline.", "correctAnswer": ["cmake", "build configuration", "setup build"], "explanation": "Use cmake commands to configure the build in the CI environment.", "xp": 15},
        {"id": "cpp-47-8-9", "type": "code", "question": "Run automated tests in CI.", "correctAnswer": ["ctest", "run tests", "test execution"], "explanation": "Use ctest or custom test commands to run automated tests in the CI pipeline.", "xp": 15},
        {"id": "cpp-47-8-10", "type": "typing", "question": "What is the benefit of CI?", "correctAnswer": ["detect integration issues early", "early bug detection", "fast feedback"], "explanation": "CI helps detect integration issues early by automatically testing each code change.", "xp": 5},
        {"id": "cpp-47-8-11", "type": "typing", "question": "What is caching in CI?", "correctAnswer": ["store build artifacts for reuse", "speed up builds", "dependency cache"], "explanation": "Caching stores build artifacts and dependencies to speed up subsequent pipeline runs.", "xp": 5},
        {"id": "cpp-47-8-12", "type": "code", "question": "Setup caching in GitHub Actions.", "correctAnswer": ["actions/cache", "cache dependencies", "speed up"], "explanation": "Use the actions/cache action to cache dependencies and build artifacts between runs.", "xp": 15},
        {"id": "cpp-47-8-13", "type": "typing", "question": "What is a deployment pipeline?", "correctAnswer": ["automated deployment to production", "deployment workflow", "CD pipeline"], "explanation": "A deployment pipeline automates the process of deploying code to production environments.", "xp": 5},
        {"id": "cpp-47-8-14", "type": "code", "question": "Deploy to server using SSH in CI.", "correctAnswer": ["ssh commands", "deploy script", "remote deployment"], "explanation": "Use SSH commands or deployment scripts to deploy artifacts to remote servers.", "xp": 15},
        {"id": "cpp-47-8-15", "type": "typing", "question": "What is GitLab CI/CD?", "correctAnswer": ["GitLab's integrated CI/CD platform", "GitLab automation", "built-in CI/CD"], "explanation": "GitLab CI/CD is integrated directly into GitLab for automated build, test, and deployment.", "xp": 5},
        {"id": "cpp-47-8-16", "type": "code", "question": "Trigger pipeline on specific branches.", "correctAnswer": ["branch filters", "triggers", "workflow conditions"], "explanation": "Configure branch filters to trigger pipelines only on specific branches like main or develop.", "xp": 15},
        {"id": "cpp-47-8-17", "type": "code", "question": "Handle secrets in CI/CD.", "correctAnswer": ["encrypted secrets", "environment variables", "secret management"], "explanation": "Use platform-specific secret management to store and use sensitive data securely.", "xp": 15},
        {"id": "cpp-47-8-18", "type": "typing", "question": "What is zero-downtime deployment?", "correctAnswer": ["deploy without service interruption", "seamless deployment", "no downtime"], "explanation": "Zero-downtime deployment updates applications without interrupting service to users.", "xp": 5},
        {"id": "cpp-47-8-19", "type": "code", "question": "Parallelize CI jobs for speed.", "correctAnswer": ["matrix strategy", "parallel jobs", "concurrent execution"], "explanation": "Use matrix strategy or parallel job configuration to run multiple jobs concurrently.", "xp": 15},
        {"id": "cpp-47-8-20", "type": "typing", "question": "What is Travis CI?", "correctAnswer": ["cloud-based CI service", "CI platform", "continuous integration"], "explanation": "Travis CI is a cloud-based continuous integration service for testing and building projects.", "xp": 5},
        {"id": "cpp-47-8-21", "type": "code", "question": "Create deployment stage in pipeline.", "correctAnswer": ["deploy stage", "conditional deployment", "stage configuration"], "explanation": "Configure a deploy stage that runs only after tests pass, deploying to production or staging.", "xp": 15},
        {"id": "cpp-47-8-22", "type": "code", "question": "Monitor CI/CD pipeline performance.", "correctAnswer": ["logs", "metrics", "dashboard"], "explanation": "Monitor build times, success rates, and resource usage to optimize pipeline performance.", "xp": 15},
        {"id": "cpp-47-8-23", "type": "typing", "question": "What is CircleCI?", "correctAnswer": ["cloud-based CI/CD platform", "CI/CD service", "automation"], "explanation": "CircleCI is a cloud-based CI/CD platform for automating build, test, and deployment.", "xp": 5},
        {"id": "cpp-47-8-24", "type": "code", "question": "Implement rollback in deployment.", "correctAnswer": ["rollback strategy", "previous version", "quick revert"], "explanation": "Store previous deployments and implement rollback mechanism to revert if issues occur.", "xp": 15},
        {"id": "cpp-47-8-25", "type": "code", "question": "Create multi-stage pipeline.", "correctAnswer": ["build, test, deploy stages", "multiple stages", "workflow stages"], "explanation": "Configure pipeline with build, test, and deploy stages that run sequentially.", "xp": 15}
    ]
}

data['units'][46]['lessons'][7].update(lesson47_8)
print("✅ Unit 47, Lesson 8: CI/CD - 25 detailed questions")

# Write final
output_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(output_path, 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n" + "="*70)
print("✅ BATCH 3 COMPLETE: 5 lessons rebuilt")
print("="*70)
print("Lessons completed:")
print("  - Unit 47, Lesson 6: IDE & Editors")
print("  - Unit 47, Lesson 7: Version Control")
print("  - Unit 48, Lesson 4: GUI Applications")
print("  - Unit 49, Lesson 3: STL & Algorithms Review")
print("  - Unit 47, Lesson 8: CI/CD")
print("\nTotal questions: 125 (25 per lesson)")
print("="*70)
print("✅ Saved to cppCombined.js")
