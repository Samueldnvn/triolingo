#!/usr/bin/env python3
"""
Rebuild Top 10 Worst Lessons - Batch 3 (Lessons 11-15)
"""
import json
import os

print("🚀 BATCH 3: Lessons 11-15")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 47, Lesson 6: IDE & Editors
lesson47_6 = {
    "id": "cpp-U47-L6",
    "title": "IDE & Editors",
    "unitTitle": "47. Development Tools",
    "xp": 85,
    "type": "lesson",
    "difficulty": "beginner",
    "lessonText": """# IDEs and Editors for C++ Development

Tools and environments for C++ programming.

## Popular IDEs

- **Visual Studio**: Full-featured IDE for Windows
- **CLion**: JetBrains cross-platform IDE
- **Code::Blocks**: Lightweight, open-source
- **Eclipse CDT**: Eclipse-based C++ IDE
- **Xcode**: Apple's IDE for macOS

## Popular Editors

- **VS Code**: Lightweight, extensible editor
- **Sublime Text**: Fast, customizable
- **Vim/Neovim**: Modal, keyboard-driven
- **Emacs**: Highly customizable
- **Atom**: Hackable text editor

## Key Features

- Syntax highlighting
- Code completion (IntelliSense)
- Debugging integration
- Build system integration
- Version control integration
- Refactoring tools

## Choosing the Right Tool

Consider:
- Platform compatibility
- Project size
- Team preferences
- Learning curve
- Budget (free vs paid)
""",
    "questions": [
        {"id": "cpp-47-6-1", "type": "typing", "question": "What is an IDE?", "correctAnswer": ["Integrated Development Environment", "development suite", "all-in-one tool"], "explanation": "An IDE is a software suite that provides comprehensive facilities for programming, including editor, compiler, debugger.", "xp": 5},
        {"id": "cpp-47-6-2", "type": "typing", "question": "What is the main advantage of using an IDE?", "correctAnswer": ["all tools in one interface", "integrated environment", "unified workflow"], "explanation": "IDEs integrate editor, compiler, debugger, and other tools into a single interface for streamlined development.", "xp": 5},
        {"id": "cpp-47-6-3", "type": "multiple", "question": "Which IDE is developed by Microsoft for Windows?", "options": ["Visual Studio", "CLion", "Code::Blocks", "Eclipse CDT"], "correctAnswer": [0], "explanation": "Visual Studio is Microsoft's flagship IDE for C++ development on Windows.", "xp": 5},
        {"id": "cpp-47-6-4", "type": "multiple", "question": "Which IDE is developed by JetBrains?", "options": ["Visual Studio", "CLion", "Code::Blocks", "VS Code"], "correctAnswer": [1], "explanation": "CLion is JetBrains' cross-platform C++ IDE with intelligent code assistance.", "xp": 5},
        {"id": "cpp-47-6-5", "type": "multiple", "question": "What is VS Code?", "options": ["Lightweight code editor by Microsoft", "Full IDE", "Operating system", "Compiler"], "correctAnswer": [0], "explanation": "VS Code is a lightweight, extensible code editor that can be enhanced with C++ extensions.", "xp": 5},
        {"id": "cpp-47-6-6", "type": "typing", "question": "What is syntax highlighting?", "correctAnswer": ["colorizing code for readability", "code coloring", "syntax colors"], "explanation": "Syntax highlighting colors different parts of code (keywords, strings, comments) for better readability.", "xp": 5},
        {"id": "cpp-47-6-7", "type": "typing", "question": "What is code completion (IntelliSense)?", "correctAnswer": ["suggesting code as you type", "autocomplete", "smart suggestions"], "explanation": "Code completion suggests variable names, function names, and other code elements as you type.", "xp": 5},
        {"id": "cpp-47-6-8", "type": "typing", "question": "What is debugging integration in IDEs?", "correctAnswer": ["built-in debugger support", "debug from IDE", "step through code"], "explanation": "IDEs include debuggers that let you set breakpoints, step through code, and inspect variables.", "xp": 5},
        {"id": "cpp-47-6-9", "type": "typing", "question": "What is version control integration?", "correctAnswer": ["Git integration within IDE", "source control", "VCS support"], "explanation": "IDEs integrate with version control systems like Git, allowing commits, branches, and merges from within the IDE.", "xp": 5},
        {"id": "cpp-47-6-10", "type": "typing", "question": "What is refactoring in IDEs?", "correctAnswer": ["automated code restructuring", "code transformation", "improve code structure"], "explanation": "Refactoring tools automatically restructure code to improve quality while preserving behavior.", "xp": 5},
        {"id": "cpp-47-6-11", "type": "typing", "question": "What is Xcode?", "correctAnswer": ["Apple's IDE for macOS and iOS", "macOS IDE", "Apple development"], "explanation": "Xcode is Apple's integrated development environment for macOS and iOS development.", "xp": 5},
        {"id": "cpp-47-6-12", "type": "typing", "question": "What is Code::Blocks?", "correctAnswer": ["open-source C++ IDE", "free IDE", "lightweight IDE"], "explanation": "Code::Blocks is a free, open-source C++ IDE that supports multiple compilers.", "xp": 5},
        {"id": "cpp-47-6-13", "type": "typing", "question": "What is Eclipse CDT?", "correctAnswer": ["C++ Development Tooling for Eclipse", "Eclipse C++ plugin", "C++ IDE"], "explanation": "Eclipse CDT is a C/C++ development tooling project that provides a C++ IDE within Eclipse.", "xp": 5},
        {"id": "cpp-47-6-14", "type": "typing", "question": "What are Vim and Neovim?", "correctAnswer": ["modal text editors", "keyboard-driven editors", "powerful editors"], "explanation": "Vim and Neovim are modal, keyboard-driven text editors popular with developers for their efficiency.", "xp": 5},
        {"id": "cpp-47-6-15", "type": "typing", "question": "What is Emacs?", "correctAnswer": ["highly customizable text editor", "extensible editor", "Lisp-based editor"], "explanation": "Emacs is a highly customizable text editor built on Emacs Lisp, supporting thousands of extensions.", "xp": 5},
        {"id": "cpp-47-6-16", "type": "code", "question": "Set up C++ development in VS Code.", "correctAnswer": ["install C++ extension", "configure tasks.json", "set up build"], "explanation": "Install the Microsoft C/C++ extension and configure tasks.json for building and debugging.", "xp": 15},
        {"id": "cpp-47-6-17", "type": "code", "question": "Configure build system in Visual Studio.", "correctAnswer": ["create solution and project", "configure properties", "set up compiler"], "explanation": "Create a Visual Studio solution and project, then configure build properties and compiler settings.", "xp": 15},
        {"id": "cpp-47-6-18", "type": "code", "question": "Set breakpoint and debug in IDE.", "correctAnswer": ["click in margin", "F5 to debug", "inspect variables"], "explanation": "Click in the left margin to set breakpoints, then press F5 to start debugging and step through code.", "xp": 15},
        {"id": "cpp-47-6-19", "type": "typing", "question": "What factors should you consider when choosing an IDE?", "correctAnswer": ["platform, project size, budget, learning curve", "multiple factors", "requirements"], "explanation": "Consider platform compatibility, project complexity, cost, learning curve, and team preferences.", "xp": 5},
        {"id": "cpp-47-6-20", "type": "code", "question": "Use VS Code extensions for C++.", "correctAnswer": ["C/C++ extension", "CMake Tools", "debugger extensions"], "explanation": "Install the C/C++ extension for IntelliSense, CMake Tools for build system, and CodeLLDB for debugging.", "xp": 15},
        {"id": "cpp-47-6-21", "type": "typing", "question": "What is project management in IDEs?", "correctAnswer": ["organizing source files and dependencies", "file organization", "project structure"], "explanation": "IDEs provide project management features to organize source files, headers, and build configurations.", "xp": 5},
        {"id": "cpp-47-6-22", "type": "code", "question": "Configure code formatting in IDE.", "correctAnswer": ["formatting settings", "clang-format", "style configuration"], "explanation": "Configure formatting preferences or use clang-format for consistent code style.", "xp": 15},
        {"id": "cpp-47-6-23", "type": "typing", "question": "What is IntelliSense?", "correctAnswer": ["Microsoft's code completion technology", "smart autocomplete", "code intelligence"], "explanation": "IntelliSense is Microsoft's code completion and suggestion technology in Visual Studio and VS Code.", "xp": 5},
        {"id": "cpp-47-6-24", "type": "code", "question": "Set up remote development in VS Code.", "correctAnswer": ["Remote - SSH extension", "remote containers", "remote development"], "explanation": "Use the Remote - SSH extension to develop on remote machines directly from VS Code.", "xp": 15},
        {"id": "cpp-47-6-25", "type": "code", "question": "Customize IDE shortcuts and settings.", "correctAnswer": ["keybindings", "settings.json", "preferences"], "explanation": "Customize keyboard shortcuts and editor settings to match your workflow preferences.", "xp": 15}
    ]
}

data['units'][46]['lessons'][5].update(lesson47_6)
print("✅ Unit 47, Lesson 6: IDE & Editors - 25 detailed questions")

# Unit 47, Lesson 7: Version Control
lesson47_7 = {
    "id": "cpp-U47-L7",
    "title": "Version Control",
    "unitTitle": "47. Development Tools",
    "xp": 85,
    "type": "lesson",
    "difficulty": "intermediate",
    "lessonText": """# Version Control with Git

Managing code changes and collaboration with version control systems.

## Core Concepts

Version control tracks changes to files over time, enabling collaboration and history management.

## Git Commands

```bash
git init           # Initialize repository
git add            # Stage changes
git commit         # Commit changes
git push           # Push to remote
git pull           # Pull from remote
git branch         # Manage branches
git merge          # Merge branches
```

## Workflow

1. Create/clone repository
2. Make changes
3. Stage changes (git add)
4. Commit changes (git commit)
5. Push to remote (git push)

## Branching

- **main/master**: Primary branch
- **feature**: New features
- **bugfix**: Bug fixes
- **hotfix**: Urgent fixes

## Best Practices

1. Commit frequently with clear messages
2. Use branches for features
3. Write meaningful commit messages
4. Pull before pushing
5. Resolve conflicts promptly
""",
    "questions": [
        {"id": "cpp-47-7-1", "type": "typing", "question": "What is version control?", "correctAnswer": ["system for tracking file changes", "code management", "change tracking"], "explanation": "Version control is a system that records changes to files over time, allowing you to recall specific versions.", "xp": 5},
        {"id": "cpp-47-7-2", "type": "typing", "question": "What is Git?", "correctAnswer": ["distributed version control system", "VCS", "version control tool"], "explanation": "Git is a distributed version control system for tracking changes in source code during software development.", "xp": 5},
        {"id": "cpp-47-7-3", "type": "typing", "question": "What does git init do?", "correctAnswer": ["initialize new Git repository", "create repo", "start version control"], "explanation": "git init creates a new Git repository in the current directory.", "xp": 5},
        {"id": "cpp-47-7-4", "type": "typing", "question": "What does git add do?", "correctAnswer": ["stage changes for commit", "add to staging area", "prepare for commit"], "explanation": "git add moves file changes to the staging area, preparing them for the next commit.", "xp": 5},
        {"id": "cpp-47-7-5", "type": "typing", "question": "What does git commit do?", "correctAnswer": ["save staged changes to repository", "create commit", "save changes"], "explanation": "git commit creates a new commit containing all staged changes with a descriptive message.", "xp": 5},
        {"id": "cpp-47-7-6", "type": "typing", "question": "What does git push do?", "correctAnswer": ["send commits to remote repository", "upload changes", "sync to remote"], "explanation": "git push uploads local commits to a remote repository, sharing changes with others.", "xp": 5},
        {"id": "cpp-47-7-7", "type": "typing", "question": "What does git pull do?", "correctAnswer": ["fetch and merge from remote", "download changes", "update from remote"], "explanation": "git pull fetches changes from remote and merges them into the current branch.", "xp": 5},
        {"id": "cpp-47-7-8", "type": "typing", "question": "What is a Git branch?", "correctAnswer": ["parallel line of development", "independent development", "separate version"], "explanation": "A branch is an independent line of development, allowing work on features without affecting main code.", "xp": 5},
        {"id": "cpp-47-7-9", "type": "typing", "question": "What does git branch do?", "correctAnswer": ["create or list branches", "branch management", "list/create branches"], "explanation": "git branch creates new branches or lists existing branches.", "xp": 5},
        {"id": "cpp-47-7-10", "type": "typing", "question": "What does git checkout do?", "correctAnswer": ["switch to different branch", "change branch", "switch branches"], "explanation": "git checkout switches to a different branch or restores files from a specific commit.", "xp": 5},
        {"id": "cpp-47-7-11", "type": "typing", "question": "What does git merge do?", "correctAnswer": ["combine branches together", "merge changes", "combine branches"], "explanation": "git merge integrates changes from one branch into another, combining their histories.", "xp": 5},
        {"id": "cpp-47-7-12", "type": "code", "question": "Initialize Git repository and make first commit.", "correctAnswer": ["git init, git add, git commit", "initial commit", "setup repo"], "explanation": "git init, then git add ., then git commit -m 'Initial commit' to create initial repository.", "xp": 15},
        {"id": "cpp-47-7-13", "type": "code", "question": "Clone remote Git repository.", "correctAnswer": ["git clone url", "clone repository", "download repo"], "explanation": "git clone <repository-url> copies a remote repository to your local machine.", "xp": 15},
        {"id": "cpp-47-7-14", "type": "code", "question": "Create and switch to new branch.", "correctAnswer": ["git checkout -b branchname", "git branch and checkout", "create and switch"], "explanation": "git checkout -b branchname creates a new branch and switches to it immediately.", "xp": 15},
        {"id": "cpp-47-7-15", "type": "code", "question": "Stage all modified files.", "correctAnswer": ["git add .", "git add -A", "stage all"], "explanation": "git add . or git add -A stages all modified and new files in the current directory.", "xp": 15},
        {"id": "cpp-47-7-16", "type": "code", "question": "View commit history.", "correctAnswer": ["git log", "view history", "show commits"], "explanation": "git log displays the commit history with commit hashes, messages, and metadata.", "xp": 15},
        {"id": "cpp-47-7-17", "type": "code", "question": "Check current branch status.", "correctAnswer": ["git status", "check status", "view changes"], "explanation": "git status shows the current branch, staged files, and unstaged changes.", "xp": 15},
        {"id": "cpp-47-7-18", "type": "typing", "question": "What is a merge conflict?", "correctAnswer": ["when Git cannot automatically merge changes", "conflicting changes", "merge failure"], "explanation": "A merge conflict occurs when Git cannot automatically reconcile changes from different branches.", "xp": 5},
        {"id": "cpp-47-7-19", "type": "code", "question": "Resolve merge conflict.", "correctAnswer": ["edit conflicted files", "git add resolved", "commit merge"], "explanation": "Edit files to resolve conflicts, then git add and git commit to complete the merge.", "xp": 15},
        {"id": "cpp-47-7-20", "type": "typing", "question": "What is the purpose of .gitignore?", "correctAnswer": ["exclude files from Git tracking", "ignore files", "prevent tracking"], "explanation": ".gitignore specifies files and patterns that Git should ignore and not track.", "xp": 5},
        {"id": "cpp-47-7-21", "type": "code", "question": "Undo last commit (keep changes).", "correctAnswer": ["git reset HEAD~1", "undo commit", "soft reset"], "explanation": "git reset HEAD~1 undoes the last commit while keeping the changes staged.", "xp": 15},
        {"id": "cpp-47-7-22", "type": "code", "question": "View differences between commits.", "correctAnswer": ["git diff commit1 commit2", "compare commits", "show differences"], "explanation": "git diff <commit1> <commit2> shows differences between two commits.", "xp": 15},
        {"id": "cpp-47-7-23", "type": "typing", "question": "What is a pull request?", "correctAnswer": ["request to merge branch", "merge request", "code review"], "explanation": "A pull request is a proposal to merge changes from one branch into another, enabling code review.", "xp": 5},
        {"id": "cpp-47-7-24", "type": "code", "question": "Stash changes temporarily.", "correctAnswer": ["git stash", "save changes temporarily", "store uncommitted changes"], "explanation": "git stash temporarily saves uncommitted changes, allowing you to switch branches or work on something else.", "xp": 15},
        {"id": "cpp-47-7-25", "type": "code", "question": "Apply stashed changes.", "correctAnswer": ["git stash pop", "restore stash", "apply changes"], "explanation": "git stash pop restores the most recently stashed changes and removes them from the stash.", "xp": 15}
    ]
}

data['units'][46]['lessons'][6].update(lesson47_7)
print("✅ Unit 47, Lesson 7: Version Control - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 3 PARTIAL COMPLETE: 2/5 lessons")
print("="*70)
print("Continuing with remaining 3 lessons...")
