#!/usr/bin/env python3
"""
Rebuild Batch 12 - Continue systematic rebuild
"""
import json
import os

print("🚀 BATCH 12: Continuing systematic rebuild")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 47, Lesson 7: Version Control
lesson47_7 = {
    "id": "cpp-U47-L7",
    "title": "Version Control",
    "unitTitle": "47. Development Environment Setup",
    "xp": 85,
    "type": "lesson",
    "difficulty": "beginner",
    "lessonText": """# Version Control with Git

Track changes, collaborate, and manage code history.

## Core Concepts

- **Repository**: Storage for your project and history
- **Commit**: Save point in project history
- **Branch**: Independent line of development
- **Merge**: Combine changes from different branches
- **Pull**: Update local with remote changes
- **Push**: Upload local changes to remote

## Git Basics

```bash
git init              # Initialize repository
git add .             # Stage all changes
git commit -m "msg"   # Commit staged changes
git status            # Check repository status
git log               # View commit history
```

## Branching

```bash
git branch feature    # Create branch
git checkout feature  # Switch to branch
git checkout -b new   # Create and switch
git merge feature     # Merge branch
git branch -d feature # Delete branch
```

## Remote Operations

```bash
git remote add origin url    # Add remote
git push -u origin master    # Push to remote
git pull origin master       # Pull from remote
git clone url                # Clone repository
```

## Best Practices

1. Commit frequently with clear messages
2. Use branches for features and fixes
3. Pull before pushing to avoid conflicts
4. Write meaningful commit messages
5. Use .gitignore for untracked files
6. Review changes before committing

## Common Workflows

- **Feature branch**: Create branch, develop, merge
- **Pull request**: Request code review before merge
- **Fork workflow**: Fork, clone, push, pull request
""",
    "questions": [
        {"id": "cpp-47-7-1", "type": "typing", "question": "What is version control?", "correctAnswer": ["system for tracking code changes", "version control", "Git"], "explanation": "Version control tracks changes to code over time.", "xp": 5},
        {"id": "cpp-47-7-2", "type": "typing", "question": "What is Git?", "correctAnswer": ["distributed version control system", "Git", "version control"], "explanation": "Git is distributed version control system for tracking changes.", "xp": 5},
        {"id": "cpp-47-7-3", "type": "multiple", "question": "What does git init do?", "options": ["Initialize repository", "Create branch", "Commit changes", "Push to remote"], "correctAnswer": [0], "explanation": "git init initializes a new Git repository.", "xp": 5},
        {"id": "cpp-47-7-4", "type": "code", "question": "Stage all changes.", "correctAnswer": ["git add .", "stage", "git add"], "explanation": "git add . stages all changes for commit.", "xp": 15},
        {"id": "cpp-47-7-5", "type": "code", "question": "Commit staged changes.", "correctAnswer": ["git commit -m message", "commit", "save changes"], "explanation": "git commit -m creates commit with message.", "xp": 15},
        {"id": "cpp-47-7-6", "type": "code", "question": "Check repository status.", "correctAnswer": ["git status", "status", "check state"], "explanation": "git status shows working directory state.", "xp": 15},
        {"id": "cpp-47-7-7", "type": "code", "question": "View commit history.", "correctAnswer": ["git log", "history", "log"], "explanation": "git log shows commit history.", "xp": 15},
        {"id": "cpp-47-7-8", "type": "code", "question": "Create new branch.", "correctAnswer": ["git branch name", "create branch", "git branch"], "explanation": "git branch creates new branch.", "xp": 15},
        {"id": "cpp-47-7-9", "type": "code", "question": "Switch to branch.", "correctAnswer": ["git checkout name", "switch branch", "checkout"], "explanation": "git checkout switches to specified branch.", "xp": 15},
        {"id": "cpp-47-7-10", "type": "code", "question": "Create and switch to branch.", "correctAnswer": ["git checkout -b name", "create and switch", "checkout -b"], "explanation": "git checkout -b creates and switches to branch.", "xp": 15},
        {"id": "cpp-47-7-11", "type": "code", "question": "Merge branch.", "correctAnswer": ["git merge branch", "merge", "combine branches"], "explanation": "git merge combines changes from specified branch.", "xp": 15},
        {"id": "cpp-47-7-12", "type": "code", "question": "Add remote repository.", "correctAnswer": ["git remote add origin url", "add remote", "remote"], "explanation": "git remote add adds remote repository.", "xp": 15},
        {"id": "cpp-47-7-13", "type": "code", "question": "Push to remote.", "correctAnswer": ["git push origin master", "push", "upload"], "explanation": "git push uploads commits to remote repository.", "xp": 15},
        {"id": "cpp-47-7-14", "type": "code", "question": "Pull from remote.", "correctAnswer": ["git pull origin master", "pull", "download"], "explanation": "git pull fetches and merges remote changes.", "xp": 15},
        {"id": "cpp-47-7-15", "type": "code", "question": "Clone repository.", "correctAnswer": ["git clone url", "clone", "copy"], "explanation": "git clone creates copy of remote repository.", "xp": 15},
        {"id": "cpp-47-7-16", "type": "typing", "question": "What is .gitignore?", "correctAnswer": ["file specifying untracked files", "ignore file", "gitignore"], "explanation": ".gitignore specifies files to not track.", "xp": 5},
        {"id": "cpp-47-7-17", "type": "code", "question": "Create .gitignore.", "correctAnswer": ["create .gitignore file", "gitignore", "ignore files"], "explanation": "Create .gitignore file in repository root.", "xp": 15},
        {"id": "cpp-47-7-18", "type": "code", "question": "View differences.", "correctAnswer": ["git diff", "diff", "view changes"], "explanation": "git diff shows unstaged changes.", "xp": 15},
        {"id": "cpp-47-7-19", "type": "code", "question": "Stash changes.", "correctAnswer": ["git stash", "stash", "save changes"], "explanation": "git stash temporarily saves changes.", "xp": 15},
        {"id": "cpp-47-7-20", "type": "code", "question": "Restore stashed changes.", "correctAnswer": ["git stash pop", "restore stash", "unstash"], "explanation": "git stash pop restores stashed changes.", "xp": 15},
        {"id": "cpp-47-7-21", "type": "code", "question": "Resolve merge conflict.", "correctAnswer": ["edit conflicted files then commit", "resolve conflict", "merge conflict"], "explanation": "Edit conflicted files, stage, and commit to resolve.", "xp": 15},
        {"id": "cpp-47-7-22", "type": "code", "question": "Undo last commit.", "correctAnswer": ["git reset --soft HEAD~1", "undo commit", "reset"], "explanation": "git reset --soft HEAD~1 undoes last commit keeping changes.", "xp": 15},
        {"id": "cpp-47-7-23", "type": "code", "question": "View remote branches.", "correctAnswer": ["git branch -r", "remote branches", "list remotes"], "explanation": "git branch -r lists remote branches.", "xp": 15},
        {"id": "cpp-47-7-24", "type": "typing", "question": "What is pull request?", "correctAnswer": ["request to merge changes", "PR", "merge request"], "explanation": "Pull request requests merge of changes after review.", "xp": 5},
        {"id": "cpp-47-7-25", "type": "typing", "question": "Why use version control?", "correctAnswer": ["track history and collaborate", "version control benefits", "Git advantages"], "explanation": "Version control tracks history and enables collaboration.", "xp": 5}
    ]
}

data['units'][46]['lessons'][6].update(lesson47_7)
print("✅ Unit 47, Lesson 7: Version Control - 25 detailed questions")

# Unit 48, Lesson 5: Game Development
lesson48_5 = {
    "id": "cpp-U48-L5",
    "title": "Game Development",
    "unitTitle": "48. Real-World Applications",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Game Development in C++

Building games and interactive applications with C++.

## Why C++ for Games

- **Performance**: Essential for real-time applications
- **Control**: Low-level memory and hardware access
- **Ecosystem**: Mature game development libraries
- **Industry standard**: Most game engines use C++

## Game Engines

- **Unreal Engine**: AAA game development
- **Unity**: Cross-platform (C# scripting)
- **Godot**: Open-source, lightweight
- **Custom engines**: Built for specific needs

## Key Concepts

- **Game loop**: Continuous update and render cycle
- **Entities**: Objects in game world
- **Components**: Modular functionality
- **Systems**: Process components
- **ECS**: Entity Component System architecture

## Rendering

- **Graphics APIs**: OpenGL, DirectX, Vulkan
- **Shaders**: GPU programs for rendering
- **Framebuffers**: Off-screen rendering
- **Textures**: 2D images for surfaces

## Physics

- **Collision detection**: Detect object overlaps
- **Physics simulation**: Rigid body dynamics
- **Physics engines**: Box2D, PhysX, Bullet
- **Integration methods**: Euler, Verlet

## Audio

- **Sound effects**: Short audio clips
- **Music**: Background audio
- **Audio engines**: FMOD, Wwise, SDL_mixer
- **3D audio**: Spatial sound positioning

## Input

- **Keyboard**: Key events and polling
- **Mouse**: Position and button events
- **Gamepad**: Controller input
- **Touch**: Mobile touch events

## Best Practices

1. Use delta time for frame-independent movement
2. Separate update and render phases
3. Use object pooling for frequently spawned objects
4. Optimize draw calls and batch similar objects
5. Profile and optimize hot code paths
""",
    "questions": [
        {"id": "cpp-48-5-1", "type": "typing", "question": "Why is C++ used for game development?", "correctAnswer": ["high performance and control", "performance", "industry standard"], "explanation": "C++ provides performance and control needed for games.", "xp": 5},
        {"id": "cpp-48-5-2", "type": "multiple", "question": "What is game loop?", "options": ["Continuous update and render cycle", "Single frame rendering", "Level loading system", "AI decision making"], "correctAnswer": [0], "explanation": "Game loop continuously updates and renders game state.", "xp": 5},
        {"id": "cpp-48-5-3", "type": "typing", "question": "What is delta time?", "correctAnswer": ["time between frames", "frame time", "dt"], "explanation": "Delta time is time elapsed between frames.", "xp": 5},
        {"id": "cpp-48-5-4", "type": "code", "question": "Implement basic game loop.", "correctAnswer": ["while running { update(dt); render(); }", "game loop", "while loop"], "explanation": "Game loop repeatedly calls update and render functions.", "xp": 15},
        {"id": "cpp-48-5-5", "type": "code", "question": "Use delta time for movement.", "correctAnswer": ["position += velocity * dt", "delta time", "frame-independent"], "explanation": "Multiply by delta time for frame-independent movement.", "xp": 15},
        {"id": "cpp-48-5-6", "type": "code", "question": "Initialize SDL window.", "correctAnswer": ["SDL_CreateWindow", "SDL window", "initialize"], "explanation": "SDL_CreateWindow creates window for rendering.", "xp": 15},
        {"id": "cpp-48-5-7", "type": "code", "question": "Handle keyboard input.", "correctAnswer": ["SDL_Event loop with key events", "keyboard input", "SDL event"], "explanation": "Process SDL events to handle keyboard input.", "xp": 15},
        {"id": "cpp-48-5-8", "type": "code", "question": "Handle mouse input.", "correctAnswer": ["SDL mouse motion and button events", "mouse input", "SDL mouse"], "explanation": "Process mouse events for input handling.", "xp": 15},
        {"id": "cpp-48-5-9", "type": "code", "question": "Render texture to screen.", "correctAnswer": ["SDL_RenderCopy", "render texture", "SDL render"], "explanation": "SDL_RenderCopy draws texture to screen.", "xp": 15},
        {"id": "cpp-48-5-10", "type": "code", "question": "Load image as texture.", "correctAnswer": ["IMG_LoadTexture", "load texture", "image loading"], "explanation": "IMG_LoadTexture loads image as SDL texture.", "xp": 15},
        {"id": "cpp-48-5-11", "type": "code", "question": "Implement collision detection.", "correctAnswer": ["AABB collision", "bounding box", "check overlap"], "explanation": "Axis-aligned bounding box collision detects overlaps.", "xp": 15},
        {"id": "cpp-48-5-12", "type": "code", "question": "Move game object.", "correctAnswer": ["position += velocity * dt", "move object", "update position"], "explanation": "Update position based on velocity and delta time.", "xp": 15},
        {"id": "cpp-48-5-13", "type": "code", "question": "Rotate game object.", "correctAnswer": ["rotation += angular_velocity * dt", "rotate", "angle"], "explanation": "Update rotation based on angular velocity.", "xp": 15},
        {"id": "cpp-48-5-14", "type": "code", "question": "Scale game object.", "correctAnswer": ["scale *= factor", "scale", "resize"], "explanation": "Multiply scale by factor to resize object.", "xp": 15},
        {"id": "cpp-48-5-15", "type": "code", "question": "Play sound effect.", "correctAnswer": ["Mix_PlayChannel", "play sound", "audio"], "explanation": "Mix_PlayChannel plays sound on channel.", "xp": 15},
        {"id": "cpp-48-5-16", "type": "code", "question": "Load sound effect.", "correctAnswer": ["Mix_LoadWAV", "load sound", "audio loading"], "explanation": "Mix_LoadWAV loads WAV sound file.", "xp": 15},
        {"id": "cpp-48-5-17", "type": "code", "question": "Object pooling optimization.", "correctAnswer": ["reuse objects instead of creating", "object pool", "memory pool"], "explanation": "Object pooling reuses objects to avoid allocation overhead.", "xp": 15},
        {"id": "cpp-48-5-18", "type": "code", "question": "Implement sprite animation.", "correctAnswer": ["cycle through frames based on time", "animation", "sprite frames"], "explanation": "Cycle through sprite frames based on elapsed time.", "xp": 15},
        {"id": "cpp-48-5-19", "type": "code", "question": "Camera follow player.", "correctAnswer": ["camera position = player position", "camera", "follow"], "explanation": "Update camera position to follow player.", "xp": 15},
        {"id": "cpp-48-5-20", "type": "code", "question": "Parallax scrolling.", "correctAnswer": ["different scroll speeds for layers", "parallax", "depth effect"], "explanation": "Move background layers at different speeds for depth.", "xp": 15},
        {"id": "cpp-48-5-21", "type": "code", "question": "Implement simple AI.", "correctAnswer": ["state machine for behavior", "AI", "enemy behavior"], "explanation": "Use state machine for simple enemy AI.", "xp": 15},
        {"id": "cpp-48-5-22", "type": "code", "question": "Save game state.", "correctAnswer": ["serialize to file", "save game", "persistence"], "explanation": "Serialize game state to file for saving.", "xp": 15},
        {"id": "cpp-48-5-23", "type": "code", "question": "Load game state.", "correctAnswer": ["deserialize from file", "load game", "restore state"], "explanation": "Deserialize game state from file for loading.", "xp": 15},
        {"id": "cpp-48-5-24", "type": "typing", "question": "What is AABB collision?", "correctAnswer": ["axis-aligned bounding box collision", "AABB", "bounding box"], "explanation": "AABB is simple collision detection using rectangles.", "xp": 5},
        {"id": "cpp-48-5-25", "type": "typing", "question": "Why use ECS architecture?", "correctAnswer": ["flexible and efficient entity management", "ECS", "entity component system"], "explanation": "ECS provides flexible, efficient entity management.", "xp": 5}
    ]
}

data['units'][47]['lessons'][4].update(lesson48_5)
print("✅ Unit 48, Lesson 5: Game Development - 25 detailed questions")

# Unit 38, Lesson 5: HTTP Protocol
lesson38_5 = {
    "id": "cpp-U38-L5",
    "title": "HTTP Protocol",
    "unitTitle": "38. Network Programming",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# HTTP Protocol

Hypertext Transfer Protocol for web communication.

## Core Concepts

- **Client-Server**: Request-response model
- **Stateless**: Each request independent
- **Text-based**: Human-readable protocol
- **TCP**: Reliable transport layer

## HTTP Methods

- **GET**: Retrieve resource
- **POST**: Submit data
- **PUT**: Update resource
- **DELETE**: Remove resource
- **HEAD**: Retrieve headers only
- **PATCH**: Partial update

## HTTP Status Codes

- **2xx**: Success (200 OK, 201 Created)
- **3xx**: Redirection (301, 302)
- **4xx**: Client error (404, 403)
- **5xx**: Server error (500, 503)

## HTTP Headers

- **Content-Type**: MIME type of body
- **Content-Length**: Size of body in bytes
- **User-Agent**: Client identification
- **Authorization**: Authentication credentials
- **Cache-Control**: Caching directives

## HTTPS

- **TLS/SSL**: Encrypted HTTP
- **Port 443**: Default HTTPS port
- **Certificates**: Server authentication
- **Secure**: Data encryption in transit

## Best Practices

1. Use HTTPS for all communication
2. Validate and sanitize all inputs
3. Implement proper error handling
4. Use appropriate status codes
5. Cache responses when appropriate
6. Limit request size to prevent abuse
""",
    "questions": [
        {"id": "cpp-38-5-1", "type": "typing", "question": "What is HTTP?", "correctAnswer": ["Hypertext Transfer Protocol", "HTTP", "web protocol"], "explanation": "HTTP is protocol for transferring hypertext on web.", "xp": 5},
        {"id": "cpp-38-5-2", "type": "multiple", "question": "What is default HTTP port?", "options": ["80", "443", "8080", "3000"], "correctAnswer": [0], "explanation": "HTTP uses port 80 by default.", "xp": 5},
        {"id": "cpp-38-5-3", "type": "typing", "question": "What does GET method do?", "correctAnswer": ["retrieve resource", "GET", "fetch"], "explanation": "GET method retrieves resource from server.", "xp": 5},
        {"id": "cpp-38-5-4", "type": "typing", "question": "What does POST method do?", "correctAnswer": ["submit data to server", "POST", "create"], "explanation": "POST method submits data to server for processing.", "xp": 5},
        {"id": "cpp-38-5-5", "type": "code", "question": "Send HTTP GET request.", "correctAnswer": ["send request to server with GET method", "HTTP GET", "fetch"], "explanation": "Send GET request to retrieve resource.", "xp": 15},
        {"id": "cpp-38-5-6", "type": "code", "question": "Send HTTP POST request.", "correctAnswer": ["send request with POST method and body", "HTTP POST", "submit"], "explanation": "Send POST request with data in body.", "xp": 15},
        {"id": "cpp-38-5-7", "type": "code", "question": "Parse HTTP response.", "correctAnswer": ["parse status line and headers", "parse response", "HTTP parsing"], "explanation": "Parse HTTP response to extract status and headers.", "xp": 15},
        {"id": "cpp-38-5-8", "type": "code", "question": "Check HTTP status code.", "correctAnswer": ["check response status line", "status code", "HTTP status"], "explanation": "Extract status code from response status line.", "xp": 15},
        {"id": "cpp-38-5-9", "type": "code", "question": "Extract HTTP headers.", "correctAnswer": ["parse headers from response", "headers", "HTTP headers"], "explanation": "Extract headers from HTTP response.", "xp": 15},
        {"id": "cpp-38-5-10", "type": "code", "question": "Extract HTTP body.", "correctAnswer": ["read body after headers", "body", "content"], "explanation": "Read body content after empty line following headers.", "xp": 15},
        {"id": "cpp-38-5-11", "type": "typing", "question": "What is status code 200?", "correctAnswer": ["OK", "success", "200 OK"], "explanation": "Status code 200 indicates successful request.", "xp": 5},
        {"id": "cpp-38-5-12", "type": "typing", "question": "What is status code 404?", "correctAnswer": ["Not Found", "404", "error"], "explanation": "Status code 404 indicates resource not found.", "xp": 5},
        {"id": "cpp-38-5-13", "type": "typing", "question": "What is status code 500?", "correctAnswer": ["Internal Server Error", "500", "server error"], "explanation": "Status code 500 indicates server error.", "xp": 5},
        {"id": "cpp-38-5-14", "type": "code", "question": "Set Content-Type header.", "correctAnswer": ["Content-Type: application/json", "header", "MIME type"], "explanation": "Set Content-Type header to specify body format.", "xp": 15},
        {"id": "cpp-38-5-15", "type": "code", "question": "Set User-Agent header.", "correctAnswer": ["User-Agent: MyClient/1.0", "User-Agent", "client identification"], "explanation": "Set User-Agent header to identify client.", "xp": 15},
        {"id": "cpp-38-5-16", "type": "code", "question": "Handle HTTP redirects.", "correctAnswer": ["follow 3xx status codes", "redirect", "location header"], "explanation": "Follow Location header for 3xx redirect responses.", "xp": 15},
        {"id": "cpp-38-5-17", "type": "code", "question": "Use HTTPS instead of HTTP.", "correctAnswer": ["connect on port 443 with TLS", "HTTPS", "encrypted"], "explanation": "HTTPS uses TLS encryption on port 443.", "xp": 15},
        {"id": "cpp-38-5-18", "type": "code", "question": "Validate SSL certificate.", "correctAnswer": ["verify certificate chain", "SSL", "certificate validation"], "explanation": "Verify SSL certificate to prevent MITM attacks.", "xp": 15},
        {"id": "cpp-38-5-19", "type": "code", "question": "Handle HTTP authentication.", "correctAnswer": ["Authorization header with credentials", "auth", "authentication"], "explanation": "Set Authorization header with credentials.", "xp": 15},
        {"id": "cpp-38-5-20", "type": "code", "question": "Use cookies with HTTP.", "correctAnswer": ["Cookie header", "cookies", "session"], "explanation": "Send cookies in Cookie header for session tracking.", "xp": 15},
        {"id": "cpp-38-5-21", "type": "code", "question": "Implement HTTP keep-alive.", "correctAnswer": ["Connection: keep-alive header", "keep-alive", "persistent connection"], "explanation": "Use Connection header to enable persistent connections.", "xp": 15},
        {"id": "cpp-38-5-22", "type": "code", "question": "Handle HTTP errors gracefully.", "correctAnswer": ["check status code and handle errors", "error handling", "graceful degradation"], "explanation": "Check status code and handle errors appropriately.", "xp": 15},
        {"id": "cpp-38-5-23", "type": "code", "question": "Set timeout for HTTP request.", "correctAnswer": ["socket timeout", "timeout", "time limit"], "explanation": "Set socket timeout to prevent hanging.", "xp": 15},
        {"id": "cpp-38-5-24", "type": "typing", "question": "What is HTTPS?", "correctAnswer": ["encrypted HTTP with TLS", "HTTPS", "secure HTTP"], "explanation": "HTTPS is HTTP secured with TLS encryption.", "xp": 5},
        {"id": "cpp-38-5-25", "type": "typing", "question": "Why use HTTPS?", "correctAnswer": ["encrypt data in transit", "security", "privacy"], "explanation": "HTTPS encrypts data for security and privacy.", "xp": 5}
    ]
}

data['units'][37]['lessons'][4].update(lesson38_5)
print("✅ Unit 38, Lesson 5: HTTP Protocol - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 12 COMPLETE: 3 lessons")
print("="*70)
print("Lessons completed:")
print("  - Unit 47, Lesson 7: Version Control")
print("  - Unit 48, Lesson 5: Game Development")
print("  - Unit 38, Lesson 5: HTTP Protocol")
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
