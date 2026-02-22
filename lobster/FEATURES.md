# Lobster - Feature Overview

## What is Lobster?

Lobster is a desktop Ollama client that provides a clean, modern interface for interacting with any Ollama model. Unlike other clients, Lobster is configured entirely through the UI - no command-line setup required.

## Core Features

### UI-Only Configuration
- No CLI configuration needed
- All settings accessible through the Settings panel
- Automatic configuration file (config.json) management
- User-friendly interface for all configuration options

### Model Support
- Works with ANY Ollama model
- Free models: llama2, mistral, codellama, phi, etc.
- Paid models: Fully supported
- Custom models: Automatically detected and available
- Automatic model list refresh

### Chat Management
- Create new chats with one click
- Persisted chat history (all conversations saved)
- Switch between chats instantly
- Auto-titling based on first message
- Export chats to text files
- Delete individual chats

### Configuration Options
- **Ollama Server URL**: Connect to local or remote Ollama instances
- **Model Selection**: Choose from all installed models
- **Temperature**: 0 to 2 (creative to focused)
- **Max Tokens**: 100 to 32768 (response length control)
- Port input for custom Ollama configurations

### User Interface
- Sidebar with chat history
- Expandable Settings panel
- Real-time connection testing
- Model size display
- Message formatting (code blocks, inline code)
- Responsive design
- Dark theme with lobster-inspired colors

### Technical Features
- Electron-based (cross-platform)
- Async message handling
- Loading states and error handling
- Auto-scroll to latest message
- Keyboard shortcuts (Enter to send)
- Configuration persistence

## File Structure

```
lobster/
├── main.js          - Electron main process
├── renderer.js      - UI logic and IPC handlers
├── index.html       - Main interface
├── styles.css       - Styling and theme
├── package.json     - Dependencies and scripts
├── config.json      - Auto-generated with settings
├── README.md        - Documentation
├── install.sh       - Setup script
└── .gitignore       - Version control exclusions
```

## Quick Start

1. Save in the current directory: `/home/samueldnvn4/.openclaw/workspace/lobster`
2. Run: `npm install`
3. Run: `npm start`
4. Open Lobster's Settings (⚙️ button)
5. Test connection to Ollama
6. Select a model
7. Save configuration
8. Start chatting!

## Configuration Details

Lobster stores all settings in `config.json`:

```json
{
  "ollamaUrl": "http://localhost:11434",
  "model": "llama2",
  "temperature": 0.7,
  "maxTokens": 2048,
  "chats": [
    {
      "id": "1234567890",
      "title": "About Lobster",
      "messages": [
        { "role": "user", "content": "What is Lobster?" },
        { "role": "assistant", "content": "..." }
      ],
      "timestamp": "2026-02-19T00:00:00.000Z"
    }
  ]
}
```

## Integration with Ollama

Lobster uses Ollama's REST API:
- `/api/tags` - List available models
- `/api/chat` - Send chat messages

No special configuration needed - just point Lobster at your Ollama instance.

## Design Philosophy

1. **Simplicity First**: Clean, intuitive interface
2. **No CLI Required**: Everything configurable via UI
3. **Model Agnostic**: Works with any Ollama model
4. **Privacy**: All data stored locally
5. **Cross-Platform**: Works on Windows, macOS, Linux

## Current Version

**Version 0.1.0** (Initial Release)
- Core chat functionality
- Model management
- Chat history
- Configuration UI
- Export capabilities

## Future Enhancements

Potential additions for future versions:
- Markdown rendering
- Code syntax highlighting
- Multiple chat windows
- Custom themes
- Voice input/output
- Image support (multimodal models)
- Chat search
- Chat folders/organization
- Plugin system

## Why Lobster?

- **Pairs perfectly with Ollama** - lobster and ollama complement each other linguistically
- **Red/coral theme** - like a cooked lobster
- **Simple and reliable** - just wants to help you chat
- **Fully UI-configured** - for those who prefer graphical interfaces

Enjoy lobster-ing with Ollama! 🦞