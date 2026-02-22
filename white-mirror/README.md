# White Mirror

An AI-powered desktop application that uses vision models to analyze and control your computer screen.

## Features

- **Screen Capture & Analysis**: Continuously captures screenshots and feeds them to an Ollama vision model
- **Visual AI Agent Interface**: Split UI showing screen capture and a command chat channel
- **Rate-Controlled Capture**: Adjustable screenshot capture rate (500ms to 10s+)
- **Action Execution**: AI can click, type, scroll, and wait based on screen analysis
- **Chat Interface**: Communicate with the AI agent in real-time while it works
- **Easy On/Off**: Simple start/stop controls for immediate agent activation/deactivation

## Architecture

The app consists of:

1. **Main Process (Electron)**: Handles screen capture, Ollama API communication, and action execution
2. **Renderer Process (UI)**: Displays the screen viewer and chat interface
3. **Vision Model Integration**: Connects to Ollama's vision-capable models (llava, bakllava, etc.)
4. **Input/Output Control**: Uses robotjs for separate keyboard/mouse control

## Requirements

- Node.js (v16 or higher)
- Ollama installed and running locally (http://localhost:11434)
- A vision-capable Ollama model (e.g., llava, bakllava)
- Operating System: Windows, macOS, or Linux

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd white-mirror
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Ollama (if not already installed):**
   - Visit https://ollama.ai and download/install for your OS
   - Run `ollama serve` to start the Ollama server

4. **Pull a vision model:**
   ```bash
   ollama pull llava
   # or
   ollama pull bakllava
   ```

## Usage

1. **Start the application:**
   ```bash
   npm start
   ```

2. **Configure the app:**
   - Set the Ollama model name (default: llava)
   - Adjust the capture rate in milliseconds (default: 2000ms = 2 seconds)

3. **Start the AI agent:**
   - Click the "▶ Start" button to begin screen capture and analysis
   - The AI will continuously analyze your screen and suggest actions

4. **Interact with the AI:**
   - Use the chat panel on the right to give commands
   - The AI will respond and perform actions on your screen
   - Watch the screen viewer on the left to see what the AI sees

5. **Stop the agent:**
   - Click the "■ Stop" button to pause screen capture and analysis
   - The AI will stop taking actions

## How It Works

1. **Screen Capture**: The app captures screenshots at the configured rate
2. **Vision Analysis**: Screenshots are sent to Ollama with a prompt asking the AI to:
   - Describe what's visible
   - Suggest the next action
   - Format the response as JSON with action details
3. **Action Execution**: If the AI suggests an action, the app executes it:
   - Click at coordinates
   - Type text
   - Scroll in a direction
   - Wait for a specified duration
4. **User Communication**: The chat channel allows you to:
   - Give commands to the AI
   - Ask questions about what it sees
   - Redirect its focus

## Security & Privacy

⚠️ **Important**: This application has full control over your mouse and keyboard inputs.

- Only run this application on systems where you trust the AI model
- The AI will act autonomously based on its analysis of your screen
- Use the "Stop" button immediately if unwanted actions occur
- Consider using a dedicated testing environment first

## Troubleshooting

**Ollama connection error:**
- Make sure Ollama is running: `ollama serve`
- Check that the server is accessible at http://localhost:11434
- Verify the model name is correct

**Screen capture not working:**
- Ensure the app has screen capture permissions
- On macOS: Grant accessibility and screen recording permissions in System Privacy settings
- On Linux: May need additional dependencies for X11/Wayland screen capture

**Actions not executing:**
- Check that robotjs dependencies are installed correctly
- On Linux: May need libxtst-dev and other X11 libraries

## Configuration

Edit these values in the UI or modify `main.js`:

- `captureRate`: How often to capture the screen (ms)
- `ollamaModel`: Which vision model to use from Ollama
- Vision prompt: Modify the prompt sent to Ollama for different behavior

## Future Enhancements

- [ ] Multiple model support with easy switching
- [ ] Action history and undo capability
- [ ] Screen region selection
- [ ] Automated task scripts
- [ ] Integration with other AI providers
- [ ] Recording and playback of sessions
- [ ] Keyboard shortcuts for quick commands

## License

MIT

## Notes

- The app saves screenshots as `capture.png` in the application directory
- Screen captures are sent to Ollama with a prompt asking for JSON-formatted responses
- The AI's responses are parsed to extract actionable commands
- This is a safety-first implementation - the AI will wait before acting unless explicitly instructed