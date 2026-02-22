#!/bin/bash

# ============================================
# Memory Palace Practice - Desktop Shortcut Creator
# ============================================

APP_NAME="Memory Palace Practice"
APP_DIR="$(pwd)"
ICON_PATH="$APP_DIR/assets/icon.png"

echo "🧠 Creating desktop shortcut for Memory Palace Practice..."
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the memory-palace-app directory"
    exit 1
fi

# Create temporary run script
RUN_SCRIPT="$APP_DIR/run.sh"
cat > "$RUN_SCRIPT" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")"
npm start
EOF
chmod +x "$RUN_SCRIPT"

# Create .desktop file
DESKTOP_FILE="$HOME/Desktop/$APP_NAME.desktop"
cat > "$DESKTOP_FILE" << EOF
[Desktop Entry]
Version=1.0
Type=Application
Name=$APP_NAME
Comment=Practice memory palace techniques with ASMR sounds
Exec=$RUN_SCRIPT
Icon=$ICON_PATH
Terminal=false
Categories=Education;Utility;
EOF
chmod +x "$DESKTOP_FILE"

echo "✅ Desktop shortcut created: $DESKTOP_FILE"
echo ""
echo "📋 Quick Start Instructions:"
echo "   1. Install dependencies: npm install"
echo "   2. Run app: npm start"
echo "   3. Or double-click the desktop shortcut!"
echo ""
echo "🎨 Features:"
echo "   - Random sequences (numbers, letters, custom)"
echo "   - Timed and untimed modes"
echo "   - ASMR sound effects"
echo "   - Practice history and statistics"
echo ""
echo "💡 Tip: Double-click the shortcut on your desktop to launch!"
echo ""
echo "⚠️  Note: Make sure you have Node.js installed (https://nodejs.org)"