#!/bin/bash

# ============================================
# Memory Palace Practice - macOS Shortcut Creator
# ============================================

APP_NAME="Memory Palace Practice"
APP_DIR="$(pwd)"
APP_SCRIPT="$APP_DIR/$APP_NAME.app"

echo "🧠 Creating macOS app bundle for Memory Palace Practice..."
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the memory-palace-app directory"
    exit 1
fi

# Create app bundle structure
mkdir -p "$APP_SCRIPT/Contents/MacOS"
mkdir -p "$APP_SCRIPT/Contents/Resources"

# Create Info.plist
cat > "$APP_SCRIPT/Contents/Info.plist" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleExecutable</key>
    <string>launch.sh</string>
    <key>CFBundleIdentifier</key>
    <string>com.memorypalace.practice</string>
    <key>CFBundleName</key>
    <string>$APP_NAME</string>
    <key>CFBundlePackageType</key>
    <string>APPL</string>
    <key>CFBundleShortVersionString</key>
    <string>1.0.0</string>
    <key>CFBundleVersion</key>
    <string>1</string>
    <key>NSHighResolutionCapable</key>
    <true/>
</dict>
</plist>
EOF

# Copy icon if exists
if [ -f "$APP_DIR/assets/icon.icns" ]; then
    cp "$APP_DIR/assets/icon.icns" "$APP_SCRIPT/Contents/Resources/AppIcon.icns"
else
    echo "ℹ️  No icon.icns found. You can add one later."
fi

# Create launch script
cat > "$APP_SCRIPT/Contents/MacOS/launch.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")"
cd "$(pwd)/../../.."
npm start
EOF
chmod +x "$APP_SCRIPT/Contents/MacOS/launch.sh"

# Move to Applications folder (optional)
read -p "Copy app to Applications folder? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [ -d "/Applications/$APP_NAME.app" ]; then
        echo "Removing existing app..."
        rm -rf "/Applications/$APP_NAME.app"
    fi
    cp -R "$APP_SCRIPT" "/Applications/$APP_NAME.app"
    echo "✅ App installed to Applications folder!"
    echo "   Launch it from Launchpad or Applications folder."
else
    echo "✅ App bundle created: $APP_SCRIPT"
    echo "   You can move it to Applications folder manually."
fi

echo ""
echo "📋 Quick Start:"
echo "   1. Install dependencies: npm install"
echo "   2. Run the app from Applications or: npm start"
echo ""
echo "💡 Features:"
echo "   - Random sequences (numbers, letters, custom)"
echo "   - Timed and untimed modes"
echo "   - ASMR sound effects"
echo "   - Practice history and statistics"