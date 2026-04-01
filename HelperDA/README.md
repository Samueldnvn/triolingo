# HelperDA - Screenshot OCR App

An Electron desktop application that captures screenshots and extracts text using OCR (Optical Character Recognition).

## Features

- 📸 Capture screenshots of any screen or window
- 🔤 Extract text from screenshots using Tesseract.js
- 📋 Copy extracted text to clipboard
- 💾 Save extracted text to files
- 🔄 Multi-screenshot mode for scroll capture (piece together content)
- 🎨 Modern, responsive UI

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd HelperDA
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm start
   ```

**Note:** When you run the app, a permission dialog may appear asking for screen capture access. This is normal — grant the permission to allow HelperDA to capture screenshots.

## Usage

### Single Screenshot Mode
1. Select a screen or window from the dropdown
2. Click "Take Screenshot"
3. The app will capture the screen and extract text automatically
4. Extracted text appears in the text area (editable)
5. Copy to clipboard or save to file

### Multi-Screenshot Mode (Scroll Capture)
1. Check the "Multi-screenshot mode" checkbox
2. Select a screen/window
3. Take multiple screenshots as you scroll through content
4. Text from each screenshot is accumulated in the text area
5. Clear when done to start fresh

## System Requirements

- Node.js (v16 or higher)
- npm
- Electron will be automatically installed via npm

## Dependencies

- **Electron** - Desktop application framework
- **Tesseract.js** - OCR engine for text extraction

## How It Works

1. Uses Electron's `desktopCapturer` API to capture screen/window content
2. Sends screenshot data to the renderer process
3. Processes the image with Tesseract.js OCR
4. Displays extracted text in an editable textarea
5. Allows saving or copying the result

## Troubleshooting

### OCR not working well?
- Ensure the screenshot has good lighting and contrast
- Text should be clear and legible
- Try adjusting window size to focus on text areas

### App won't start?
- Make sure all dependencies are installed (`npm install`)
- Check Node.js version (v16+ recommended)
- Look at the console for error messages

## Building for Distribution

To build a distributable package:
```bash
npm install -D electron-builder
npm run build
```

This will create installable packages for your platform.

## License

MIT