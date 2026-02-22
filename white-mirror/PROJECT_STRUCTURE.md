# White Mirror - Project Structure

```
white-mirror/
├── main.js                 # Electron main process entry point
├── index.html              # Main UI (HTML/CSS/JS all-in-one)
├── package.json            # Project dependencies and scripts
├── install.sh              # Installation script for Linux/macOS
├── .gitignore              # Git ignore patterns
├── LICENSE                 # MIT License
├── README.md               # Main documentation
├── QUICKSTART.md           # 5-minute setup guide
├── TECHNICAL_NOTES.md      # Implementation details
├── TROUBLESHOOTING.md      # Common issues and fixes
├── DEVELOPMENT_ROADMAP.md  # Future development plans
├── PROJECT_STRUCTURE.md    # This file
└── node_modules/           # Installed dependencies (gitignored)
```

## File Descriptions

### Core Application Files

#### main.js (5853 bytes)
- **Purpose**: Electron main process
- **Responsibilities**:
  - Create and manage BrowserWindow
  - Handle screen capture using `screenshot-desktop`
  - Communicate with Ollama API
  - Execute actions using `robotjs`
  - Manage IPC communication with renderer
- **Key Functions**:
  - `createWindow()`: Initialize main window
  - `captureAndAnalyze()`: Capture screen and query AI
  - `queryOllama()`: Send image to Ollama vision model
  - `executeAction()`: Perform click, type, scroll, wait
  - IPC handlers: `start-capture`, `stop-capture`, `set-rate`, `set-model`

#### index.html (12197 bytes)
- **Purpose**: Application UI
- **Components**:
  - Screen viewer panel (left)
  - Chat/command panel (right)
  - Control buttons (Start/Stop)
  - Configuration inputs (rate, model)
  - Status indicators
- **Technologies**:
  - HTML5
  - CSS3 (modern flexbox, animations)
  - Vanilla JavaScript (no frameworks)
  - Electron IPC integration
- **Key Features**:
  - Real-time screen capture display
  - Chat interface with timestamps
  - Configurable capture rate
  - Model selection input
  - Visual status indicators

### Configuration Files

#### package.json
- **Dependencies**:
  - `electron`: Desktop app framework
  - `@electron/remote`: Remote module access
  - `robotjs`: Mouse/keyboard automation
  - `screenshot-desktop`: Screen capture
- **Scripts**:
  - `start`: Run in production mode
  - `dev`: Run with DevTools enabled
  - `install`: Run installation script
  - `test-robotjs`: Test robotjs functionality

### Documentation Files

#### README.md (4916 bytes)
- **Audience**: New users
- **Contents**:
  - Feature overview
  - System requirements
  - Installation instructions
  - usage guide
  - Architecture description
  - Security considerations
  - Troubleshooting basics

#### QUICKSTART.md (3982 bytes)
- **Audience**: Users wanting to get started fast
- **Contents**:
  - Prerequisites checklist
  - 5-minute setup guide
  - Basic usage walkthrough
  - Common commands to try
  - Safety tips
  - Advanced configuration

#### TECHNICAL_NOTES.md (6339 bytes)
- **Audience**: Developers
- **Contents**:
  - How virtual input works
  - Second keyboard/mouse separation
  - Implementation choices
  - Future improvement approaches
  - Performance considerations
  - Debugging guides

#### TROUBLESHOOTING.md (6562 bytes)
- **Audience**: Users encountering issues
- **Contents**:
  - Installation issues
  - Running issues
  - Screen capture problems
  - Action execution failures
  - UI issues
  - Performance problems
  - Ollama-specific issues
  - Debug mode instructions

#### DEVELOPMENT_ROADMAP.md (9440 bytes)
- **Audience**: Developers, contributors
- **Contents**:
  - Current status (v0.1.0)
  - Planned versions (v0.2.0 - v1.0.0)
  - Future enhancements
  - Technical debt items
  - Testing strategy
  - Timeline estimates
  - Contribution guidelines

#### PROJECT_STRUCTURE.md (this file)
- **Audience**: New developers
- **Contents**:
  - Directory structure
  - File descriptions
  - Component relationships
  - Data flow

### Utility Files

#### install.sh
- **Purpose**: Automated installation
- **Checks**:
  - Node.js availability
  - npm availability
  - Ollama installation
- **Actions**:
  - Install npm dependencies
  - Optionally pull Ollama model
  - Print setup instructions

#### .gitignore
- **Excludes**:
  - node_modules/
  - Build outputs (dist/, build/)
  - OS files (.DS_Store, Thumbs.db)
  - Screenshots (*.png, *.jpg)
  - Logs (*.log)
  - Electron builds (out/)
  - Environment files (.env)

#### LICENSE
- **Type**: MIT License
- **Permissions**:
  - Commercial use
  - Modification
  - Distribution
  - Private use
- **Conditions**:
  - License and copyright notice
- **Limitations**:
  - Liability
  - Warranty

## Component Relationships

```
┌─────────────────────────────────────────────────────────────┐
│                        User                                  │
└────────┬────────────────────────────────────────────────────┘
         │
         │ Interacts with
         ▼
┌─────────────────────────────────────────────────────────────┐
│                    index.html (UI)                         │
│  ┌──────────────────────┐  ┌──────────────────────────┐  │
│  │   Screen Viewer      │  │    Chat Panel            │  │
│  │  - Shows captures    │  │  - User commands         │  │
│  │  - Updates in real-  │  │  - AI responses          │  │
│  │    time              │  │  - Status messages       │  │
│  └──────────────────────┘  └──────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐ │
│  │              Controls (Start/Stop/Config)             │ │
│  └──────────────────────────────────────────────────────┘ │
└────────┬────────────────────────────────────────────────────┘
         │
         │ IPC (Inter-Process Communication)
         ▼
┌─────────────────────────────────────────────────────────────┐
│                   main.js (Main Process)                   │
│  ┌──────────────────────┐  ┌──────────────────────────┐  │
│  │  Screen Capture      │  │  Action Execution        │  │
│  │  - screenshot-desktop│  │  - robotjs              │  │
│  │  - Saves capture.png  │  │  - Click/Type           │  │
│  └──────────────────────┘  │  - Scroll                │  │
│                            └──────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐ │
│  │              Ollama Integration                        │ │
│  │  - HTTP requests to localhost:11434                  │ │
│  │  - Sends base64 images                               │ │
│  │  - Receives JSON action suggestions                  │ │
│  └──────────────────────────────────────────────────────┘ │
└────────┬────────────────────────────────────────────────────┘
         │
         │ HTTP API
         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Ollama Server                           │
│  - Vision models (llava, bakllava, etc.)                   │
│  - Image + prompt → action JSON                            │
│  - Runs on localhost:11434                                │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### Capture → Analyze → Act

```
1. User clicks "Start"
   └─> main.js: start-capture IPC handler
       └─> setInterval(captureAndAnalyze, rate)

2. every X ms:
   captureAndAnalyze()
   ├─> screenshot({ filename: 'capture.png' })
   ├─> fs.readFileSync('capture.png') → base64
   ├─> queryOllama(base64Image)
   │   └─> HTTP POST to localhost:11434/api/generate
   │       ├─> Body: { model, prompt, images: [base64] }
   │       └─> Response: JSON with action
   ├─> mainWindow.webContents.send('analysis-result', data)
   │   └─> Renderer updates UI with:
   │       - New screenshot image
   │       - AI analysis text
   └─> executeAction(action)
       └─> robotjs: moveMouse(), typeString(), etc.

3. User types command in chat
   └─> sendMessage()
       └─> (Future: send to Ollama for processing)
```

## Key Technologies

### Electron
- Framework for cross-platform desktop apps
- Main process: Node.js environment
- Renderer process: Chromium (web technologies)
- IPC: Message passing between processes

### screenshot-desktop
- Captures screenshots from all displays
- Cross-platform (Windows, macOS, Linux)
- Saves to file or returns buffer
- Used for periodic screen capture

### robotjs
- Keyboard and mouse automation
- Cross-platform support
- Low-level input injection
- Used for executing AI actions

### Ollama
- Local LLM API server
- Vision model support (llava, bakllava)
- HTTP API on localhost:11434
- Handles image + text prompts

## Configuration Points

### Capture Rate
- **Location**: UI input + main.js variable
- **Default**: 2000ms (2 seconds)
- **Range**: 500ms - 10000ms
- **Impact**: Higher rate = faster AI but more CPU usage

### Vision Model
- **Location**: UI input + main.js variable
- **Default**: 'llava'
- **Options**: Any vision model installed in Ollama
- **Examples**: 'llava', 'bakllava', 'custom-model'

### Vision Prompt
- **Location**: main.js `queryOllama()` function
- **Format**: Text prompt instructing model what to do
- **Output format**: JSON with description + action
- **Customization**: Modify for different behaviors

## Security Considerations

### Risk Areas
1. **Full input control**: AI can click/type anywhere
2. **No authentication**: Anyone local can control
3. **No action limits**: Could loop infinitely
4. **No sandbox**: Runs with user permissions

### Mitigations
1. Manual start/stop button
2. User can monitor actions in real-time
3. Emergency stop planned (keyboard shortcut)
4. Action confirmation planned (v0.2.0)
5. Virtual display planned (v0.3.0)

## Testing Checklist

### Manual Testing
- [ ] Install on fresh system
- [ ] Start app and see UI
- [ ] Connect to Ollama successfully
- [ ] Start capture and see screenshots
- [ ] Send command and see response
- [ ] Execute click action
- [ ] Execute type action
- [ ] Execute scroll action
- [ ] Stop capture cleanly
- [ ] Adjust capture rate
- [ ] Change model

### Automated Testing (Future)
- [ ] Unit tests for screenshot
- [ ] Unit tests for Ollama integration
- [ ] Unit tests for action execution
- [ ] Integration tests for full workflow
- [ ] E2E tests with various models

## Performance Characteristics

### Resource Usage
- **Memory**: ~150-200MB idle, +50MB per capture
- **CPU**: 5-10% idle, 20-30% during capture
- **Disk**: 1-5MB per screenshot (saved temporarily)
- **Network**: localhost only (no external calls)

### Latency
- **Screenshot capture**: 100-300ms
- **Ollama inference**: 1-3s (first time), 0.5-2s (cached)
- **Action execution**: <100ms
- **Total cycle**: 2-4s at 2s rate

## Extensibility Points

### Customizing Vision Prompt
Edit `main.js` in `queryOllama()`:

```javascript
const prompt = `Custom instructions here...`;
```

### Adding New Actions
Add to `executeAction()` in `main.js`:

```javascript
case 'drag':
  robot.dragMouse(x, y);
  break;
```

### Custom UI Styling
Edit CSS in `index.html` to change colors, layout, etc.

### Integrating Other AI Providers
Modify `queryOllama()` to call different APIs (OpenAI, Anthropic, etc.).