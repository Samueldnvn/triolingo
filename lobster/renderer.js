const { ipcRenderer } = require('electron');

let config = {};
let currentChat = null;
let chatHistory = [];
let isConfigPanelOpen = false;

// Initialize on load
window.onload = async () => {
    config = await ipcRenderer.invoke('get-config');
    document.getElementById('ollama-url').value = config.ollamaUrl || 'http://localhost:11434';
    document.getElementById('temperature').value = config.temperature || 0.7;
    document.getElementById('max-tokens').value = config.maxTokens || 2048;
    document.getElementById('temperature-value').textContent = config.temperature || 0.7;

    // Load chat history
    chatHistory = config.chats || [];

    if (chatHistory.length > 0) {
        loadChat(chatHistory[0].id);
    } else {
        startNewChat();
    }

    renderChatList();

    // Auto-refresh models
    refreshModels();
};

// Configuration panel
function toggleConfigPanel() {
    isConfigPanelOpen = !isConfigPanelOpen;
    const panel = document.getElementById('config-panel');
    panel.classList.toggle('hidden', !isConfigPanelOpen);
}

async function testConnection() {
    const url = document.getElementById('ollama-url').value;
    const status = document.getElementById('connection-status');
    status.textContent = 'Testing...';
    status.className = 'connection-status loading';

    const result = await ipcRenderer.invoke('test-ollama-connection', url);

    if (result.success) {
        status.textContent = `Connected! Found ${result.models.length} models`;
        status.className = 'connection-status connected';
        updateModelList(result.models);
    } else {
        status.textContent = `Error: ${result.error}`;
        status.className = 'connection-status error';
    }
}

async function refreshModels() {
    const url = document.getElementById('ollama-url').value;
    const result = await ipcRenderer.invoke('test-ollama-connection', url);

    if (result.success) {
        updateModelList(result.models);
    }
}

function updateModelList(models) {
    const select = document.getElementById('model-select');
    const list = document.getElementById('models-list');

    // Update dropdown
    select.innerHTML = models.length > 0
        ? models.map(m => `<option value="${m.name}">${m.name}</option>`).join('')
        : '<option value="" disabled selected>No models found</option>';

    // Update list
    list.innerHTML = models.map(m => `
        <div class="model-item">
            <span class="model-name">${m.name}</span>
            <span class="model-size">${(m.size / 1024**3).toFixed(1)} GB</span>
        </div>
    `).join('');

    // Select previously saved model if available
    if (config.model && models.find(m => m.name === config.model)) {
        select.value = config.model;
    }
}

async function saveConfig() {
    config.ollamaUrl = document.getElementById('ollama-url').value;
    config.model = document.getElementById('model-select').value;
    config.temperature = parseFloat(document.getElementById('temperature').value);
    config.maxTokens = parseInt(document.getElementById('max-tokens').value);
    config.chats = chatHistory;

    await ipcRenderer.invoke('save-config', config);
    alert('Configuration saved!');
}

// Temperature slider
document.getElementById('temperature').addEventListener('input', (e) => {
    document.getElementById('temperature-value').textContent = e.target.value;
});

// Chat management
function startNewChat() {
    currentChat = {
        id: Date.now().toString(),
        title: 'New Chat',
        messages: [],
        timestamp: new Date().toISOString()
    };
    chatHistory.unshift(currentChat);
    renderMessages();
    renderChatList();
    document.getElementById('chat-title').textContent = 'New Chat';
}

function renderChatList() {
    const list = document.getElementById('chat-list');
    list.innerHTML = chatHistory.map(chat => `
        <div class="chat-item ${chat.id === currentChat?.id ? 'active' : ''}" onclick="loadChat('${chat.id}')">
            <div class="chat-title-display">${chat.title}</div>
            <div class="chat-preview">${chat.messages[0]?.content || 'No messages'}</div>
        </div>
    `).join('');
}

function loadChat(chatId) {
    currentChat = chatHistory.find(c => c.id === chatId);
    if (currentChat) {
        renderMessages();
        renderChatList();
        document.getElementById('chat-title').textContent = currentChat.title;
    }
}

function renderMessages() {
    const container = document.getElementById('messages-container');
    container.innerHTML = (currentChat?.messages || []).map(msg => `
        <div class="message ${msg.role}">
            ${formatMessage(msg.content)}
        </div>
    `).join('');

    container.scrollTop = container.scrollHeight;
}

function formatMessage(content) {
    // Simple formatting - could be enhanced with markdown
    content = content.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
    content = content.replace(/`([^`]+)`/g, '<code>$1</code>');
    content = content.replace(/\n/g, '<br>');
    return content;
}

function autoTitleChat() {
    if (currentChat && currentChat.messages.length >= 1) {
        const firstMessage = currentChat.messages.find(m => m.role === 'user');
        if (firstMessage) {
            let title = firstMessage.content.substring(0, 40);
            title += firstMessage.content.length > 40 ? '...' : '';
            currentChat.title = title;
            renderChatList();
            document.getElementById('chat-title').textContent = title;
        }
    }
}

// Send message
async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();

    if (!message) return;

    if (!config.model) {
        alert('Please select a model in Settings first!');
        toggleConfigPanel();
        return;
    }

    // Add user message
    currentChat.messages.push({
        role: 'user',
        content: message
    });

    input.value = '';
    autoTitleChat();
    renderMessages();

    // Add loading message
    const loadingId = Date.now();
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'message assistant';
    loadingMessage.id = `loading-${loadingId}`;
    loadingMessage.textContent = 'Thinking...';
    document.getElementById('messages-container').appendChild(loadingMessage);
    document.getElementById('messages-container').scrollTop = document.getElementById('messages-container').scrollHeight;

    // Send to Ollama
    const messages = currentChat.messages.map(m => ({
        role: m.role,
        content: m.content
    }));

    const result = await ipcRenderer.invoke('send-ollama-message', config.ollamaUrl, config.model, messages);

    // Remove loading message
    document.getElementById(`loading-${loadingId}`)?.remove();

    if (result.success) {
        currentChat.messages.push({
            role: 'assistant',
            content: result.message.content
        });
        renderMessages();
    } else {
        alert(`Error: ${result.error}`);
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// Export chat
function exportChat() {
    if (!currentChat || currentChat.messages.length === 0) {
        alert('No messages to export');
        return;
    }

    const content = currentChat.messages.map(m =>
        `[${m.role.toUpperCase()}]\n${m.content}\n\n`
    ).join('\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lobster-chat-${currentChat.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// Delete chat
function deleteCurrentChat() {
    if (!currentChat) return;

    if (confirm('Delete this chat? This cannot be undone.')) {
        chatHistory = chatHistory.filter(c => c.id !== currentChat.id);
        config.chats = chatHistory;
        ipcRenderer.invoke('save-config', config);

        if (chatHistory.length > 0) {
            loadChat(chatHistory[0].id);
        } else {
            startNewChat();
        }
    }
}