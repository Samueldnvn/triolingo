#!/usr/bin/env python3
"""
Rebuild Top 10 Worst Lessons - Batch 4 (Lessons 16-20)
"""
import json
import os

print("🚀 BATCH 4: Lessons 16-20")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Unit 48, Lesson 5: Game Development
lesson48_5 = {
    "id": "cpp-U48-L5",
    "title": "Game Development",
    "unitTitle": "48. Projects and Applications",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Game Development with C++

Building games using C++ frameworks and engines.

## Popular Game Engines

- **Unreal Engine**: AAA game engine with C++ support
- **Godot**: Free, open-source with C# and GDScript (C++ bindings)
- **Unity**: Primarily C#, supports C++ plugins
- **CryEngine**: C++ game engine
- **Custom Engines**: Built from scratch using C++

## Game Development Concepts

1. **Game Loop**: Core loop that updates and renders
2. **Game States**: Menu, playing, paused, game over
3. **Entities**: Objects in the game world
4. **Components**: Modular pieces of functionality
5. **Systems**: Process entities with components

## Libraries

- **SDL**: Cross-platform multimedia
- **SFML**: Simple and Fast Multimedia Library
- **OpenGL**: Graphics rendering
- **Vulkan**: Modern graphics API

## Best Practices

1. Decouple logic from rendering
2. Use ECS (Entity-Component-System)
3. Optimize performance-critical code
4. Handle frame rate consistently
5. Manage memory carefully
""",
    "questions": [
        {"id": "cpp-48-5-1", "type": "typing", "question": "What is a game loop?", "correctAnswer": ["repeatedly update and render game", "main loop", "game cycle"], "explanation": "The game loop continuously processes input, updates game state, and renders graphics.", "xp": 5},
        {"id": "cpp-48-5-2", "type": "typing", "question": "What is Unreal Engine?", "correctAnswer": ["AAA game engine with C++", "popular game engine", "Epic Games"], "explanation": "Unreal Engine is a powerful game engine developed by Epic Games, primarily using C++.", "xp": 5},
        {"id": "cpp-48-5-3", "type": "multiple", "question": "Which library provides cross-platform multimedia support?", "options": ["SDL", "OpenGL", "Vulkan", "DirectX"], "correctAnswer": [0], "explanation": "SDL (Simple DirectMedia Layer) provides cross-platform access to audio, keyboard, mouse, joystick, and graphics.", "xp": 5},
        {"id": "cpp-48-5-4", "type": "multiple", "question": "What is SFML?", "options": ["Simple and Fast Multimedia Library", "Game engine", "Physics engine", "AI library"], "correctAnswer": [0], "explanation": "SFML is a simple and fast multimedia library for C++ with graphics, audio, and networking modules.", "xp": 5},
        {"id": "cpp-48-5-5", "type": "typing", "question": "What is ECS in game development?", "correctAnswer": ["Entity-Component-System architecture", "game design pattern", "architecture"], "explanation": "ECS is a design pattern where games are built from entities, components, and systems for flexibility and performance.", "xp": 5},
        {"id": "cpp-48-5-6", "type": "code", "question": "Implement basic game loop.", "correctAnswer": ["while running, process input, update, render", "game loop structure", "main loop"], "explanation": "Create a while loop that processes input, updates game state, and renders graphics each frame.", "xp": 15},
        {"id": "cpp-48-5-7", "type": "code", "question": "Handle keyboard input with SDL.", "correctAnswer": ["SDL_Event", "SDL_PollEvent", "keyboard events"], "explanation": "Use SDL_Event structure and SDL_PollEvent to handle keyboard input.", "xp": 15},
        {"id": "cpp-48-5-8", "type": "code", "question": "Initialize SDL window.", "correctAnswer": ["SDL_Init", "SDL_CreateWindow", "window creation"], "explanation": "Call SDL_Init to initialize SDL, then SDL_CreateWindow to create a window.", "xp": 15},
        {"id": "cpp-48-5-9", "type": "code", "question": "Render graphics with SDL.", "correctAnswer": ["SDL_Renderer", "SDL_RenderClear", "SDL_RenderPresent", "draw"], "explanation": "Use SDL_Renderer functions to clear, draw, and present graphics.", "xp": 15},
        {"id": "cpp-48-5-10", "type": "typing", "question": "What is frame rate in games?", "correctAnswer": ["frames rendered per second", "FPS", "refresh rate"], "explanation": "Frame rate (FPS) is the number of frames rendered per second, affecting smoothness.", "xp": 5},
        {"id": "cpp-48-5-11", "type": "code", "question": "Control game frame rate.", "correctAnswer": ["delta time", "sleep", "frame limiting"], "explanation": "Use delta time and sleep functions to maintain consistent frame rate.", "xp": 15},
        {"id": "cpp-48-5-12", "type": "code", "question": "Implement simple sprite rendering.", "correctAnswer": ["load texture", "render texture", "sprite"], "explanation": "Load image into SDL_Texture, then render it with SDL_RenderCopy.", "xp": 15},
        {"id": "cpp-48-5-13", "type": "typing", "question": "What are game states?", "correctAnswer": ["different modes like menu, playing, paused", "state management", "game modes"], "explanation": "Game states represent different modes of the game such as menu, playing, paused, or game over.", "xp": 5},
        {"id": "cpp-48-5-14", "type": "code", "question": "Implement state machine for game.", "correctAnswer": ["state pattern", "enum states", "switch between states"], "explanation": "Use state pattern or enum to manage transitions between different game states.", "xp": 15},
        {"id": "cpp-48-5-15", "type": "code", "question": "Handle mouse input.", "correctAnswer": ["SDL_MouseButtonEvent", "mouse position", "click handling"], "explanation": "Process SDL mouse events to get position and handle clicks.", "xp": 15},
        {"id": "cpp-48-5-16", "type": "typing", "question": "What is OpenGL?", "correctAnswer": ["graphics rendering API", "3D graphics", "rendering library"], "explanation": "OpenGL is a cross-language API for rendering 2D and 3D graphics.", "xp": 5},
        {"id": "cpp-48-5-17", "type": "code", "question": "Load and display image with SFML.", "correctAnswer": ["sf::Texture", "sf::Sprite", "loadFromFile"], "explanation": "Load image into sf::Texture, create sf::Sprite, and draw it to render window.", "xp": 15},
        {"id": "cpp-48-5-18", "type": "code", "question": "Implement collision detection.", "correctAnswer": ["AABB collision", "bounding box", "intersection test"], "explanation": "Check if axis-aligned bounding boxes intersect to detect collisions.", "xp": 15},
        {"id": "cpp-48-5-19", "type": "code", "question": "Implement movement with delta time.", "correctAnswer": ["position += velocity * deltaTime", "smooth movement", "time-based"], "explanation": "Multiply velocity by delta time for frame-rate independent movement.", "xp": 15},
        {"id": "cpp-48-5-20", "type": "typing", "question": "What is a sprite sheet?", "correctAnswer": ["single image with multiple sprites", "sprite collection", "texture atlas"], "explanation": "A sprite sheet is a single image containing multiple sprites for animation.", "xp": 5},
        {"id": "cpp-48-5-21", "type": "code", "question": "Implement sprite animation.", "correctAnswer": ["frame counter", "update animation", "switch frames"], "explanation": "Track current frame and update periodically to cycle through sprite sheet frames.", "xp": 15},
        {"id": "cpp-48-5-22", "type": "code", "question": "Handle game events and callbacks.", "correctAnswer": ["event system", "observer pattern", "callbacks"], "explanation": "Implement event system with callbacks to handle game events like collisions, pickups, etc.", "xp": 15},
        {"id": "cpp-48-5-23", "type": "typing", "question": "What is Vulkan?", "correctAnswer": ["modern graphics API", "next-gen graphics", "low-level graphics"], "explanation": "Vulkan is a modern, low-level graphics API providing direct GPU control.", "xp": 5},
        {"id": "cpp-48-5-24", "type": "code", "question": "Implement particle system.", "correctAnswer": ["particle array", "update particles", "render particles"], "explanation": "Create array of particles with position, velocity, and lifetime, update and render each frame.", "xp": 15},
        {"id": "cpp-48-5-25", "type": "code", "question": "Save and load game state.", "correctAnswer": ["serialize state", "save to file", "load from file"], "explanation": "Implement serialization to save game state to file and load it back.", "xp": 15}
    ]
}

data['units'][47]['lessons'][4].update(lesson48_5)
print("✅ Unit 48, Lesson 5: Game Development - 25 detailed questions")

# Unit 38, Lesson 5: HTTP Protocol
lesson38_5 = {
    "id": "cpp-U38-L5",
    "title": "HTTP Protocol",
    "unitTitle": "38. C++ Networking",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# HTTP Protocol

Hypertext Transfer Protocol fundamentals for C++ networking.

## HTTP Overview

HTTP is a request-response protocol for transmitting hypermedia documents over the internet.

## HTTP Request Structure

```
METHOD /path HTTP/1.1
Host: example.com
Header: Value

Body
```

## HTTP Response Structure

```
HTTP/1.1 STATUS_CODE Reason
Header: Value

Body
```

## Common Methods

- **GET**: Retrieve data
- **POST**: Submit data
- **PUT**: Update resource
- **DELETE**: Remove resource
- **HEAD**: Headers only

## Status Codes

- **200 OK**: Success
- **301 Moved Permanently**: Redirect
- **400 Bad Request**: Client error
- **404 Not Found**: Resource missing
- **500 Internal Server Error**: Server error

## Headers

Host, User-Agent, Content-Type, Content-Length, Authorization
""",
    "questions": [
        {"id": "cpp-38-5-1", "type": "typing", "question": "What does HTTP stand for?", "correctAnswer": ["Hypertext Transfer Protocol", "web protocol", "HTTP"], "explanation": "HTTP is the protocol used for transmitting hypertext documents over the web.", "xp": 5},
        {"id": "cpp-38-5-2", "type": "typing", "question": "What is the primary purpose of HTTP?", "correctAnswer": ["transfer web resources", "web communication", "resource transfer"], "explanation": "HTTP transfers web resources like HTML, images, and other data between clients and servers.", "xp": 5},
        {"id": "cpp-38-5-3", "type": "multiple", "question": "Which HTTP method retrieves data?", "options": ["GET", "POST", "PUT", "DELETE"], "correctAnswer": [0], "explanation": "GET is used to request data from a specified resource.", "xp": 5},
        {"id": "cpp-38-5-4", "type": "multiple", "question": "Which HTTP method submits data?", "options": ["GET", "POST", "HEAD", "OPTIONS"], "correctAnswer": [1], "explanation": "POST is used to submit data to a server to create or update a resource.", "xp": 5},
        {"id": "cpp-38-5-5", "type": "typing", "question": "What is the difference between HTTP and HTTPS?", "correctAnswer": ["HTTPS is encrypted, HTTP is not", "secure vs insecure", "SSL/TLS"], "explanation": "HTTPS uses SSL/TLS encryption to secure communication, while HTTP is unencrypted.", "xp": 5},
        {"id": "cpp-38-5-6", "type": "code", "question": "Parse HTTP request line.", "correctAnswer": ["split by spaces", "method, path, version", "parse request"], "explanation": "Split request line by spaces to extract method, path, and HTTP version.", "xp": 15},
        {"id": "cpp-38-5-7", "type": "code", "question": "Parse HTTP headers.", "correctAnswer": ["split by newline", "key-value pairs", "header parsing"], "explanation": "Parse headers line by line, splitting each by colon to get key-value pairs.", "xp": 15},
        {"id": "cpp-38-5-8", "type": "code", "question": "Construct HTTP GET request.", "correctAnswer": ["GET /path HTTP/1.1\\r\\nHost: example.com", "build request", "HTTP request string"], "explanation": "Build HTTP GET request with method, path, version, and Host header.", "xp": 15},
        {"id": "cpp-38-5-9", "type": "code", "question": "Construct HTTP POST request with body.", "correctAnswer": ["POST /path HTTP/1.1", "Content-Length", "body"], "explanation": "Build POST request with headers including Content-Length and request body.", "xp": 15},
        {"id": "cpp-38-5-10", "type": "typing", "question": "What does status code 200 mean?", "correctAnswer": ["OK - request succeeded", "success", "200 OK"], "explanation": "200 OK indicates that the HTTP request was successful.", "xp": 5},
        {"id": "cpp-38-5-11", "type": "typing", "question": "What does status code 404 mean?", "correctAnswer": ["Not Found - resource missing", "resource not found", "error"], "explanation": "404 Not Found means the requested resource could not be found on the server.", "xp": 5},
        {"id": "cpp-38-5-12", "type": "code", "question": "Parse HTTP response status code.", "correctAnswer": ["split first line", "extract status", "parse response"], "explanation": "Parse the first line of response to extract HTTP version, status code, and reason phrase.", "xp": 15},
        {"id": "cpp-38-5-13", "type": "typing", "question": "What is the Host header used for?", "correctAnswer": ["specify target server", "server identification", "virtual hosting"], "explanation": "Host header specifies the domain name of the server, enabling virtual hosting.", "xp": 5},
        {"id": "cpp-38-5-14", "type": "code", "question": "Handle HTTP redirection.", "correctAnswer": ["check 3xx status", "Location header", "follow redirect"], "explanation": "Check for 3xx status codes and follow the Location header to the new URL.", "xp": 15},
        {"id": "cpp-38-5-15", "type": "code", "question": "Set User-Agent header.", "correctAnswer": ["User-Agent: appname/version", "identify client", "custom user agent"], "explanation": "Set User-Agent header to identify your application making the request.", "xp": 15},
        {"id": "cpp-38-5-16", "type": "typing", "question": "What is Content-Type header?", "correctAnswer": ["specifies media type", "MIME type", "data format"], "explanation": "Content-Type header specifies the media type (MIME type) of the request or response body.", "xp": 5},
        {"id": "cpp-38-5-17", "type": "code", "question": "Handle chunked transfer encoding.", "correctAnswer": ["parse chunk size", "read chunks", "reassemble body"], "explanation": "Parse chunk sizes and read chunks until zero-length chunk, reassembling the full body.", "xp": 15},
        {"id": "cpp-38-5-18", "type": "typing", "question": "What is Connection header?", "correctAnswer": ["control connection persistence", "keep-alive", "close"], "explanation": "Connection header controls whether connection should be kept alive or closed after request.", "xp": 5},
        {"id": "cpp-38-5-19", "type": "code", "question": "Implement HTTP persistent connection.", "correctAnswer": ["Connection: keep-alive", "reuse connection", "multiple requests"], "explanation": "Set Connection: keep-alive header to reuse connection for multiple requests.", "xp": 15},
        {"id": "cpp-38-5-20", "type": "code", "question": "Handle HTTP authentication.", "correctAnswer": ["Authorization header", "Basic/Digest auth", "credentials"], "explanation": "Implement Basic or Digest authentication by adding Authorization header.", "xp": 15},
        {"id": "cpp-38-5-21", "type": "typing", "question": "What is query string in URL?", "correctAnswer": ["parameters after ?", "URL parameters", "GET parameters"], "explanation": "Query string contains parameters appended to URL after ? character, separated by &.", "xp": 5},
        {"id": "cpp-38-5-22", "type": "code", "question": "Parse query string.", "correctAnswer": ["split by & and =", "extract parameters", "URL parsing"], "explanation": "Parse query string by splitting on & to get parameter pairs, then on = to get key and value.", "xp": 15},
        {"id": "cpp-38-5-23", "type": "typing", "question": "What is URL encoding?", "correctAnswer": ["encoding special characters", "percent encoding", "safe characters"], "explanation": "URL encoding replaces special characters with %XX format to make them safe for URLs.", "xp": 5},
        {"id": "cpp-38-5-24", "type": "code", "question": "Encode URL parameters.", "correctAnswer": ["percent encoding", "encode special chars", "URL encoding"], "explanation": "Replace spaces with + or %20 and encode other special characters as %XX.", "xp": 15},
        {"id": "cpp-38-5-25", "type": "code", "question": "Handle HTTP cookies.", "correctAnswer": ["Cookie header", "Set-Cookie", "cookie management"], "explanation": "Send cookies via Cookie header, store Set-Cookie headers from responses.", "xp": 15}
    ]
}

data['units'][37]['lessons'][4].update(lesson38_5)
print("✅ Unit 38, Lesson 5: HTTP Protocol - 25 detailed questions")

print("\n" + "="*70)
print("✅ BATCH 4 PARTIAL COMPLETE: 2/5 lessons")
print("="*70)
print("Continuing with remaining 3 lessons...")
