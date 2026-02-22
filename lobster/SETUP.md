# Lobster - Setup Guide

## Quick Setup (3 steps, 2 minutes)

```bash
cd lobster
npm install
npm start
```

That's it! Lobster will launch automatically.

## Prerequisites

1. **Node.js** (v16 or higher)
   - Check: `node -v`
   - Download: https://nodejs.org/

2. **Ollama** (any version)
   - Check: `ollama --version`
   - Download: https://ollama.ai/
   - Ensure Ollama is running: `ollama serve`

3. **At least one Ollama model**
   - List models: `ollama list`
   - Install a model: `ollama pull llama2`
   - Other free models: `mistral`, `codellama`, `phi`, `gemma`

## First-Time Configuration

1. Launch Lobster: `npm start`
2. Click **⚙️ Settings** in the sidebar
3. Verify Ollama URL (default: `http://localhost:11434`)
4. Click **Test Connection**
   - Should show: "Connected! Found X models"
5. Click **Refresh Models**
   - Models will appear in dropdown
6. Select a model
7. (Optional) Adjust temperature and max tokens
8. Click **Save Configuration**

You're ready to chat!

## Troubleshooting

### "Test Connection" fails

**Solution 1**: Ensure Ollama is running
```bash
ollama serve
```

**Solution 2**: Verify Ollama works
```bash
curl http://localhost:11434/api/tags
```

**Solution 3**: Check firewall settings
- Allow connections to port 11434

### No models appearing

**Check installed models:**
```bash
ollama list
```

**Install a free model:**
```bash
ollama pull llama2
```

**Refresh models in Lobster:**
- Click Settings → Refresh Models

### Messages not sending

**Verify model is selected:**
- Open Settings and select a model

**Check Ollama logs:**
```bash
ollama logs
```

### Port already in use

**Check what's using port 11434:**
```bash
lsof -i :11434  # macOS/Linux
netstat -ano | findstr :11434  # Windows
```

**Kill the process if needed, then restart Ollama**

## Advanced Configuration

### Remote Ollama Server

To connect to a remote Ollama instance:

1. Open Settings
2. Change Ollama Server URL to your remote address
3. Example: `http://192.168.1.100:11434`
4. Test Connection

### Custom Port

If Ollama runs on a different port:

1. Open Settings
2. Update the URL with custom port: `http://localhost:8080`
3. Test Connection

### Temperature Settings

- **0.0 - 0.3**: Very focused, deterministic
- **0.4 - 0.7**: Balanced (recommended for most use)
- **0.8 - 1.0**: More creative, varied
- **1.1 - 2.0**: Very creative (can be unpredictable)

### Max Tokens

- **100 - 500**: Short responses, faster
- **1000 - 2000**: Balanced (default)
- **4000 - 8000**: Long responses
- **8000+**: Maximum length (may be slower)

## File Location

After first launch, Lobster creates `config.json`:
- Location: `lobster/config.json`
- Contains: All settings and chat history
- Backup regularly if chat history is important

## Keyboard Shortcuts

- `Enter` - Send message
- `Shift+Enter` - Add line break

## Platform-Specific Notes

### Windows
- Run from Command Prompt or PowerShell
- May need to run as Administrator for network access
- Antivirus may flag Electron - add exception

### macOS
- Run from Terminal
- Gatekeeper may warn - allow in System Preferences
- Works natively on both Intel and Apple Silicon

### Linux
- Run from any terminal
- Ensure Electron can access network ports
- May need additional dependencies on some distributions

## Updating

To update Lobster to a new version:

```bash
git pull  # If using git
# OR download new version

cd lobster
rm -rf node_modules
npm install
npm start
```

Your `config.json` (settings and chat history) will be preserved.

## Support

If issues persist:
1. Check README.md for FAQ
2. Verify Ollama installation: `ollama --version`
3. Check Node.js version: `node -v`
4. Review Ollama logs: `ollama logs`

Enjoy chatting with Lobster! 🦞