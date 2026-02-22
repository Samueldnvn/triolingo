# White Mirror - Technical Notes

## Second Keyboard and Mouse Control System

### Overview

The "second keyboard and mouse" functionality in White Mirror is achieved through virtual input injection using the `robotjs` library. This allows the AI agent to control the system without interfering with the user's physical input devices.

### How It Works

#### Virtual Input Injection

Instead of physically connecting a second keyboard and mouse, the application:

1. **Injects input events directly into the operating system** at the driver level
2. **Simulates keyboard and mouse events** programmatically
3. **Bypasses the physical input layer** by sending commands directly to the OS input queue

This approach has several advantages:
- No additional hardware required
- Works across different operating systems (Windows, macOS, Linux)
- Can be controlled programmatically by the AI
- Minimal latency

#### Implementation with RobotJS

```javascript
const robot = require('robotjs');

// Mouse control
robot.moveMouse(x, y);           // Move mouse cursor
robot.mouseClick();              // Left click
robot.mouseClick('right');       // Right click
robot.scrollMouse(0, -100);      // Scroll down

// Keyboard control
robot.typeString('hello world'); // Type text
robot.keyTap('enter');           // Press a key
robot.keyToggle('ctrl', 'down'); // Hold a key
```

### Separation from User Input

The key concept is that the AI's inputs are **programmatic**, not physical:

- **User's keyboard/mouse**: Physical devices connected to the computer
- **AI's keyboard/mouse**: Virtual inputs injected by the application

While both ultimately affect the same system, they operate through different paths:
- User input → Physical device → OS driver → Application
- AI input → Node.js application → robotjs → OS input queue → Application

### Potential Conflict Points

**Note**: Currently, both user and AI inputs share the same OS input queue, which means:

1. **Mouse position conflicts**: When the AI moves the mouse, it updates the actual cursor position visible on screen
2. **Keyboard input conflicts**: AI typing can interfere with user typing
3. **Focus issues**: Both compete for window focus and input events

### Advanced Approaches for True Separation

For complete separation between user and AI inputs, more advanced techniques would be needed:

#### Approach 1: Virtual Display (Recommended for Production)

Create a virtual display where the AI operates separately:

```javascript
// Pseudo-code for virtual display
const virtualDisplay = createVirtualDisplay(width, height);

// Capture only the AI's virtual display
screenshot({ display: virtualDisplay.id });

// Inject inputs only into the virtual display
robot.moveMouseVirtual(x, y, display: virtualDisplay.id);
```

**Tools:**
- Linux: Xvfb (X Virtual Framebuffer)
- Windows: Virtual desktop APIs
- macOS: Multiple desktop spaces

#### Approach 2: Input Device Filtering

Use OS-level input filtering to distinguish between physical and virtual inputs:

```javascript
// Inject with special flags to mark as AI-generated
robot.moveMouse(x, y, { deviceType: 'virtual' });

// Applications can choose to filter these inputs
```

#### Approach 3: Hardware-Level Separation (Experimental)

Connect actual second keyboard/mouse and use low-level USB device protocols to route them separately:

```javascript
// Would require kernel modules or special drivers
const virtualUSB = createVirtualUSBDevice('keyboard');
```

### Current Implementation Choice

The current implementation uses **virtual input injection** because:

1. **Simplicity**: No additional hardware or complex virtualization required
2. **Cross-platform**: Works consistently across Windows, macOS, and Linux
3. **Fast development**: Allows focusing on AI capabilities first
4. **Sufficient for many use cases**: AI operates while user watches, then pauses for user input

### User Experience Considerations

To make this practical for users:

1. **Clear visual feedback**: The user can see what the AI is doing via the screen viewer
2. **Easy stop mechanism**: Large stop button to immediately halt AI actions
3. **Rate control**: Adjust how quickly AI acts (slower = more control for user)
4. **Command-based operation**: User gives commands via chat, AI executes, then waits

### Safety Measures

The application includes several safety features:

1. **Manual start/stop**: AI only acts when explicitly started
2. **Rate limiting**: Configurable capture rate prevents too-rapid actions
3. **"none" action AI option**: AI can choose to take no action if uncertain
4. **User command channel**: Can override AI behavior via the chat interface

### Future Improvements

For a production system with complete input separation:

1. **Implement virtual display support**: AI operates on a separate virtual screen
2. **Input device filtering**: Mark AI injections as virtual, allow apps to filter
3. **Dual-monitor setup**: AI controls one monitor, user uses the other
4. **User confirmation**: Ask user before executing high-risk actions
5. **Action queue and review**: Queue actions for user approval before executing

### Debugging Input Issues

If inputs aren't working:

1. **Check permissions**:
   - macOS: Accessibility and screen recording permissions in System Preferences
   - Linux: May need to run with sudo or configure X11 permissions

2. **Test robotjs**:
   ```bash
   cd white-mirror
   node -e "const robot = require('robotjs'); robot.moveMouse(100, 100);"
   ```

3. **Check Ollama**:
   ```bash
   curl http://localhost:11434/api/generate -d '{"model":"llava","prompt":"test"}'
   ```

4. **Verify model**:
   ```bash
   ollama list
   # Make sure llava or similar vision model is installed
   ```

### Performance Considerations

- **Screenshot capture**: Can be CPU intensive, adjust rate based on system
- **Ollama inference**: Depends on GPU/CPU, can take 1-5 seconds per analysis
- **Network latency**: Local Ollama (localhost) is fastest
- **Action execution**: Nearly instantaneous once decided

### Conclusion

The current implementation provides a functional proof-of-concept for AI-driven screen control using virtual input injection. For production use with complete separation between user and AI inputs, implementing virtual display support would be the recommended next step.