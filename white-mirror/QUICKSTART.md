# White Mirror - Quick Start Guide

## Prerequisites Checklist

Before starting, ensure you have:

- [ ] Node.js v16+ installed
- [ ] Ollama installed (https://ollama.ai)
- [ ] A vision-capable Ollama model (llava, bakllava, or other)
- [ ] Screen capture permissions (macOS: System Preferences > Security & Privacy > Privacy > Screen Recording)

## 5-Minute Setup

### 1. Install White Mirror

```bash
cd white-mirror
npm install
```

### 2. Install Ollama and Model

Open a new terminal and:

```bash
# Start Ollama
ollama serve

# In another terminal, pull a vision model
ollama pull llava
```

### 3. Start White Mirror

```bash
npm start
```

## Basic Usage

### Start the AI Agent

1. When White Mirror opens, you'll see two panels:
   - **Left**: Screen Viewer (shows what the AI sees)
   - **Right**: Command Channel (chat with the AI)

2. Configure your settings:
   - Change "Capture Rate" if needed (default: 2000ms)
   - Set "Ollama Model" to your model (default: llava)

3. Click **▶ Start** to begin screen capture and AI analysis

4. Watch as the AI:
   - Captures your screen periodically
   - Analyzes what's happening
   - Suggests actions in the chat
   - Executs actions when appropriate

### Give Commands

Type commands in the chat panel:

```
Click on the button that says "Submit"
Open the file called document.txt
Navigate to the settings menu
```

### Stop the Agent

Click **■ Stop** to immediately halt all AI actions and screen capture.

## Common Commands to Try

### Navigation
- "Click the browser back button"
- "Scroll down to see more content"
- "Navigate to the file menu"

### File Operations
- "Open the Documents folder"
- "Select the first file in the list"
- "Click the Delete button"

### Web Interaction
- "Click the search bar"
- "Type 'electron tutorial'"
- "Click the first search result"

## Troubleshooting

### "Ollama connection failed"

**Solution**: Make sure Ollama is running:
```bash
ollama serve
```

### "Screen capture not working"

**Solution**: Grant screen capture permissions:
- **macOS**: System Preferences > Security & Privacy > Privacy > Screen Recording
- **Linux**: May need additional X11 libraries
- **Windows**: Usually works, but run as administrator if needed

### "AI is doing the wrong thing"

**Solution**:
1. Click **■ Stop** immediately
2. Give a more specific command in the chat
3. Reduce the capture rate (e.g., 5000ms) for more control

### "Model not found"

**Solution**: Pull a vision model:
```bash
ollama pull llava
# or
ollama pull bakllava
```

## Safety Tips

1. **Always start with slow capture rates** (3000-5000ms) to monitor behavior
2. **Use the Stop button** immediately if something goes wrong
3. **Test in a safe environment** first (not on important work)
4. **Give clear commands** to the AI to avoid confusion
5. **Watch the screen viewer** to see what the AI sees

## Advanced Configuration

### Change Capture Rate

Higher rates = faster AI response, but more CPU usage:
- 500ms: Very fast (CPU intensive)
- 1000ms: Fast
- 2000ms: Balanced (default)
- 5000ms: Slow but controlled
- 10000ms: Very slow

### Try Different Models

Different models have different strengths:
- `llava`: General purpose vision (good all-rounder)
- `bakllava`: Alternative vision model
- Custom models: Use any vision model you've trained or downloaded

### Monitor Performance

Watch these indicators:
- Capture rate in the UI
- Response time in chat timestamps
- System CPU usage in Activity Monitor/Task Manager

## Getting Help

1. **Check README.md** for detailed documentation
2. **Review TECHNICAL_NOTES.md** for implementation details
3. **Test connection**: `curl http://localhost:11434/api/generate -d '{"model":"llava","prompt":"test"}'`

## Next Steps

Once comfortable with basic usage:

1. Experiment with more complex commands
2. Try automating repetitive tasks
3. Create sequences of commands for workflows
4. Adjust the vision prompt in main.js for better results

Happy automating! 🚀