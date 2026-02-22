# 🦞 Lobster

**Desktop Ollama Client with Full UI Configuration**

A clean, modern desktop application for interacting with any Ollama model. Configure everything through the UI - no command line needed.

## Features

- Full UI-based configuration (no CLI required)
- Works with any Ollama model (free or paid)
- Chat history with export
- Model selection and management
- Adjustable temperature and token limits
- Beautiful dark theme with lobster-inspired colors
- Cross-platform (Windows, macOS, Linux)

## Installation

### Prerequisites

1. **Node.js** (v16 or higher): https://nodejs.org/
2. **Ollama** installed and running: https://ollama.ai/

### Setup

```bash
cd lobster
npm install
npm start
```

That's it! Lobster will launch automatically.

## First-Time Setup

1. Launch Lobster via `npm start`
2. Click **⚙️ Settings** in the sidebar
3. Verify the Ollama URL (default: `http://localhost:11434`)
4. Click **Test Connection** to verify Ollama is running
5. Click **Refresh Models** to load your available models
6. Select a model from the dropdown
7. Adjust temperature and max tokens if desired
8. Click **Save Configuration**

You're ready to chat!

## Using Lobster

### Starting a Chat

- Click **+ New Chat** for a fresh conversation
- Type in the message box at the bottom
- Press Enter to send, Shift+Enter for a line break

### Managing Chats

- Chat history appears in the sidebar
- Click any chat to resume it
- Export chat to text file with the **Export Chat** button
- Delete chats with the **Delete Chat** button

### Configuration Settings

- **Ollama Server URL**: Point to your Ollama instance
- **Model**: Choose from your installed Ollama models
- **Temperature** (0-2): Higher = more creative, Lower = more focused
- **Max Tokens**: Maximum response length

## Keyboard Shortcuts

- `Enter`: Send message
- `Shift+Enter`: Line break in message

## Configuration File

Lobster stores configuration in `Lobster/config.json`:
- Ollama URL and model selection
- Temperature and token settings
- Chat history (all conversations)

This file is automatically managed by the UI - no manual editing needed.

## Theme

Lobster uses a dark theme with lobster-inspired colors:
- Primary: Red/coral (like a cooked lobster)
- Background: Dark grays
- Accents: Blue for connections, green for success

## FAQ

**Q: Can I use custom Ollama models?**
A: Yes! Any model installed in Ollama will appear in Lobster.

**Q: What about paid Ollama models?**
A: Lobster works with any Ollama model - free, paid, or custom.

**Q: Is my chat history private?**
A: Yes, everything is stored locally in `config.json`. Nothing is sent to external servers except to Ollama.

**Q: Can I use Lobster with remote Ollama servers?**
A: Yes! Just set the Ollama Server URL in Settings to your remote instance.

**Q: How do I migrate to a new computer?**
A: Copy `config.json` from your old Lobster directory to the new one.

## Troubleshooting

**"Test Connection" fails**
- Ensure Ollama is running: `ollama serve`
- Verify the URL matches Ollama's address
- Check your firewall settings

**No models appearing**
- Ensure you have models installed: `ollama pull <model-name>`
- Click **Refresh Models** in Settings

**Messages not sending**
- Verify a model is selected in Settings
- Check Ollama is responding: `curl http://localhost:11434/api/tags`

## Development

To build Lobster from source:

```bash
npm install
npm start  # Run in development mode
```

To package for distribution:

```bash
npm install electron-builder -D
```

## License

MIT License - feel free to use, modify, and distribute.

## Why "Lobster"?

Because lobster is delicious and this app pairs perfectly with Ollama. Also, lobsters are red, which matches the primary color scheme.

Enjoy chatting! 🦞