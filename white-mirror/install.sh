#!/bin/bash

# White Mirror Installation Script

echo "🔧 Installing White Mirror..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Check if Ollama is installed
if ! command -v ollama &> /dev/null; then
    echo "⚠️  Ollama is not installed."
    echo "Please install Ollama from https://ollama.ai"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    echo "✅ Ollama version: $(ollama --version)"
    echo ""

    # Ask if user wants to pull a vision model
    read -p "Do you want to pull the llava vision model? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📥 Pulling llava model... (this may take a while)"
        ollama pull llava
    fi
fi

# Install dependencies
echo "📦 Installing Node.js dependencies..."
npm install

echo ""
echo "✅ Installation complete!"
echo ""
echo "To start White Mirror:"
echo "  npm start"
echo ""
echo "Make sure Ollama is running:"
echo "  ollama serve"
echo ""
echo "For more information, see README.md"