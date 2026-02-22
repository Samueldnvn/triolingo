# White Mirror - Troubleshooting Guide

## Common Issues and Solutions

### Installation Issues

#### npm install fails
```
Error: Cannot find module 'electron'
```

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm cache clean --force
```

#### robotjs build fails
```
Error: pre-build install failed
```

**Solution**:

**macOS**:
```bash
xcode-select --install
npm install --build-from-source robotjs
```

**Ubuntu/Debian**:
```bash
sudo apt-get install libxtst-dev libpng-dev
npm install --build-from-source robotjs
```

**Windows**:
- Install Visual Studio Build Tools
- Reinstall with: `npm install --build-from-source robotjs`

### Running Issues

#### Electron window doesn't open

**Check**:
```bash
# Test electron is installed
npm list electron

# Reinstall if needed
npm install electron --save-dev
```

#### "Ollama connection failed" error

**Verify Ollama is running**:
```bash
curl http://localhost:11434/api/version
```

Should return: `{"version":"0.1.x"}`

**If not running**:
```bash
ollama serve
```

**If port is different**:
```bash
# Check what port Ollama is using
lsof -i :11434

# Or check Ollama config
cat ~/.ollama/config.json
```

#### "Model not found" error

**List available models**:
```bash
ollama list
```

**Pull a vision model**:
```bash
ollama pull llava
# or
ollama pull bakllava
```

**Verify model works**:
```bash
ollama run llava "describe this image" < image.jpg
```

### Screen Capture Issues

#### Capture fails with permission error

**macOS**:
1. Open System Preferences > Security & Privacy
2. Go to Privacy > Screen Recording
3. Find Terminal (or your terminal app)
4. Click the checkbox to enable
5. Restart Terminal and the app

**Linux (Wayland)**:
```bash
# Try X11 backend
export DISPLAY=:0
npm start
```

**Linux (X11)**:
```bash
# Check X11 permissions
xhost +

# If still failing, run as:
sudo npm start
```

#### Capture is very slow

**Solutions**:
- Increase capture rate in the UI (e.g., to 5000ms)
- Reduce screenshot resolution by modifying main.js
- Close other applications consuming CPU
- Check system resources with Activity Monitor/Task Manager

### Action Execution Issues

#### Mouse clicks not working

**Test robotjs**:
```bash
cd white-mirror
npm run test-robotjs
```

If test fails:
- Reinstall robotjs (see Installation Issues above)
- Check permissions (macOS: Accessibility, Linux: X permissions)

#### Typing not working

**Test typing**:
```bash
node -e "const robot = require('robotjs'); robot.typeString('test');"
```

**If test fails**:
- Ensure no text field is focused during test
- Check keyboard shortcuts aren't interfering
- Try: `robot.typeString('test', { delay: 100 })` for slower typing

#### Actions happen too fast

**Solution**: Increase capture rate and add delays in main.js:
```javascript
// Add delay between screen capture and action
await new Promise(resolve => setTimeout(resolve, 1000));
```

### UI Issues

#### Chat messages not appearing

**Check**:
1. Open DevTools with `npm run dev`
2. Check Console for JavaScript errors
3. Verify IPC communication is working

#### Screen viewer stays black

**Check**:
1. Is capture running? (status indicator should be green)
2. Check if capture.png is being created
3. Verify screenshot-desktop is working:
```bash
node -e "const screenshot = require('screenshot-desktop'); screenshot({ filename: 'test.png' }).then(() => console.log('OK')).catch(e => console.error(e));"
```

### Performance Issues

#### High CPU usage

**Diagnose**:
```bash
# Check what's using CPU
top  # macOS/Linux
# or
tasklist  # Windows
```

**Solutions**:
- Increase capture rate (slower = less CPU)
- Use a smaller vision model (e.g., bakllava instead of llava)
- Reduce image resolution in main.js
- Close other applications

#### High memory usage

**Diagnose**:
```bash
# Check Electron memory in Activity Monitor/Task Manager
```

**Solutions**:
- Restart the app periodically
- Clear captured images: `rm -f white-mirror/*.png`
- Reduce capture rate to create fewer temporary files

### Ollama-Specific Issues

#### Responses are very slow

**Typical causes**:
- First inference on a model (takes longer)
- Running on CPU vs GPU
- Large image sizes

**Solutions**:
- Be patient for the first few inferences
- Check if GPU is being used:
```bash
ollama --verbose run llava "test"
```
- Reduce image resolution

#### Model gives unclear or wrong answers

**Solutions**:
1. Try a different model (llava vs bakllava)
2. Modify the prompt in main.js for better instructions
3. Lower capture rate to see more context
4. Give the AI more specific commands via chat

#### Ollama crashes or hangs

**Restart Ollama**:
```bash
# Kill Ollama
pkill ollama

# Start again
ollama serve
```

**Check Ollama logs**:
```bash
# Ollama logs are in:
~/.ollama/logs/

# Check for errors
tail -f ~/.ollama/logs/server.log
```

### Network Issues

#### Connection timeout to Ollama

**Test connection**:
```bash
time curl http://localhost:11434/api/version
```

**If timeout**:
1. Check if Ollama is running: `ps aux | grep ollama`
2. Restart Ollama: `pkill -9 ollama && ollama serve`
3. Check firewall settings aren't blocking localhost:11434

### Debug Mode

To get detailed logging:

1. **Start with dev mode**:
```bash
npm run dev
```

2. **Open DevTools** (automatic in dev mode)

3. **Check Console tab** for:
   - JavaScript errors
   - IPC communication logs
   - Network requests to Ollama

4. **Main process logs**:
   查看 terminal where you ran `npm start`

### Getting Help

If issues persist:

1. **Collect information**:
```bash
node --version
npm --version
ollama --version
npm list
```

2. **Check error messages** in:
   - Electron DevTools Console
   - Terminal where app started
   - Browser Console (if testing Ollama directly)

3. **Try a fresh install**:
```bash
cd white-mirror
rm -rf node_modules package-lock.json
npm install
```

4. **Verify components individually**:
```bash
# Test Electron
npm start

# Test screen capture
npm run test-robotjs

# Test Ollama
curl http://localhost:11434/api/generate -d '{"model":"llava","prompt":"hello"}'
```

### When to File an Issue

Report issues if:
- Crash with stack trace
- Feature works incorrectly (not just suboptimal behavior)
- Installation completely fails on a supported platform
- Documentation is unclear or incorrect

**Before filing**:
- Search existing issues
- Try all troubleshooting steps above
- Provide:
  - OS and version
  - Node.js and npm version
  - Electron version
  - Ollama version
  - Exact error messages and steps to reproduce