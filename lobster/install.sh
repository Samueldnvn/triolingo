#!/bin/bash

echo "🦞 Installing Lobster..."
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js found: $(node -v)"

# Install dependencies
echo ""
echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error installing dependencies"
    exit 1
fi

echo "✓ Dependencies installed successfully!"
echo ""
echo "🎉 Lobster is ready!"
echo ""
echo "To start Lobster:"
echo "  npm start"
echo ""
echo "Make sure Ollama is running first:"
echo "  ollama serve"
echo ""
echo "Then open Lobster, click Settings (⚙️), and test your connection!"
echo ""
echo "Happy chatting! 🦞"