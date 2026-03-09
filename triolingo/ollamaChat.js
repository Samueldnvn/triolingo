/**
 * OLLAMA CHAT MANAGER
 * Handles communication with local Ollama LLM for conversations
 */

class OllamaChat {
  constructor() {
    this.baseUrl = 'http://localhost:11434/api';
    this.model = 'qwen3:8b'; // Fast, good for roleplay and concepts (installed on your system)
    this.currentConversation = [];
    this.isStreaming = false;
    this.abortController = null;
  }

  /**
   * Check if Ollama is available
   */
  async checkOllama() {
    try {
      const response = await fetch(`${this.baseUrl}/tags`);
      return response.ok;
    } catch (error) {
      console.error('Ollama not available:', error);
      return false;
    }
  }

  /**
   * Get available models
   */
  async getModels() {
    try {
      const response = await fetch(`${this.baseUrl}/tags`);
      const data = await response.json();
      return data.models || [];
    } catch (error) {
      console.error('Failed to get models:', error);
      return [];
    }
  }

  /**
   * Send a message to Ollama and get response
   */
  async sendMessage(userMessage, systemPrompt, conversationHistory = []) {
    if (this.isStreaming) {
      throw new Error('Already generating a response');
    }

    this.isStreaming = true;
    this.abortController = new AbortController();

    try {
      // Build the messages array
      const messages = [
        { role: 'system', content: systemPrompt },
        ...conversationHistory,
        { role: 'user', content: userMessage }
      ];

      const response = await fetch(`${this.baseUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.model,
          messages: messages,
          stream: false, // We'll use streaming in a future update
          options: {
            temperature: 0.8, // Good balance for roleplay
            top_p: 0.9,
            max_tokens: 500
          }
        }),
        signal: this.abortController.signal
      });

      if (!response.ok) {
        throw new Error(`Ollama error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = data.message?.content || '';

      // Add to conversation history
      this.currentConversation.push({ role: 'user', content: userMessage });
      this.currentConversation.push({ role: 'assistant', content: assistantMessage });

      return {
        message: assistantMessage,
        done: data.done || false
      };
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Generation aborted');
        return { message: '', done: true, aborted: true };
      }
      console.error('Chat error:', error);
      throw error;
    } finally {
      this.isStreaming = false;
      this.abortController = null;
    }
  }

  /**
   * Abort current generation
   */
  abort() {
    if (this.abortController) {
      this.abortController.abort();
    }
  }

  /**
   * Get conversation evaluation and feedback
   */
  async getEvaluation(conversation, lessonType, topics) {
    const systemPrompt = this.buildEvaluationPrompt(lessonType, topics);

    try {
      const response = await fetch(`${this.baseUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: this.formatConversationForEvaluation(conversation) }
          ],
          stream: false,
          options: {
            temperature: 0.5, // Lower for more consistent evaluation
            max_tokens: 400
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Evaluation error: ${response.status}`);
      }

      const data = await response.json();
      return this.parseEvaluation(data.message?.content || '');
    } catch (error) {
      console.error('Evaluation error:', error);
      return this.getDefaultEvaluation();
    }
  }

  /**
   * Build evaluation system prompt
   */
  buildEvaluationPrompt(lessonType, topics) {
    if (lessonType === 'roleplay') {
      return `You are a language instructor evaluating a conversation practice session.

Evaluate the user's performance on:
1. ${topics.join(', ')}
2. Fluency and naturalness
3. Cultural appropriateness
4. Response accuracy and relevance

Provide:
- A score from 1-10 (1 = needs work, 10 = excellent)
- 2-3 specific strengths
- 2-3 specific areas for improvement

Be constructive and encouraging. Keep your response concise and structured.`;
    } else {
      return `You are a math instructor evaluating a teaching session.

Evaluate the user's explanation on:
1. ${topics.join(', ')}
2. Clarity and accessibility
3. Accuracy and completeness
4. Use of examples and analogies

Provide:
- A score from 1-10 (1 = needs work, 10 = excellent)
- 2-3 specific strengths
- 2-3 specific areas for improvement

Be constructive and encouraging. Keep your response concise and structured.`;
    }
  }

  /**
   * Format conversation for evaluation
   */
  formatConversationForEvaluation(conversation) {
    return conversation.map(msg => {
      const role = msg.role === 'user' ? 'Student' : 'Instructor/Partner';
      return `${role}: ${msg.content}`;
    }).join('\n\n');
  }

  /**
   * Parse evaluation response
   */
  parseEvaluation(content) {
    // Try to extract structured data
    const scoreMatch = content.match(/(?:score|rating)[:\s]*(\d+(?:\.\d+)?|\d+\/10)/i);
    const score = scoreMatch ? parseInt(scoreMatch[1]) : null;

    // Extract strengths
    const strengthsSection = content.match(/strengths?[:\s]*([\s\S]*?)(?:improvements?|areas? for improvement|[\n]{2,})/i);
    const strengths = strengthsSection
      ? strengthsSection[1].split(/[•\-\n]/).filter(s => s.trim()).slice(0, 3)
      : [];

    // Extract improvements
    const improvementsSection = content.match(/improvements?|areas? for improvement[:\s]*([\s\S]*)/i);
    const improvements = improvementsSection
      ? improvementsSection[1].split(/[•\-\n]/).filter(s => s.trim()).slice(0, 3)
      : [];

    return {
      score: score || 7,
      strengths: strengths.length > 0 ? strengths : ['Good effort'],
      improvements: improvements.length > 0 ? improvements : ['Keep practicing'],
      feedback: content
    };
  }

  /**
   * Get default evaluation if parsing fails
   */
  getDefaultEvaluation() {
    return {
      score: 7,
      strengths: ['Participated in the conversation'],
      improvements: ['Continue practicing'],
      feedback: 'Unable to generate detailed feedback. Keep practicing!'
    };
  }

  /**
   * Set model
   */
  setModel(modelName) {
    this.model = modelName;
  }

  /**
   * Clear conversation history
   */
  clearConversation() {
    this.currentConversation = [];
  }

  /**
   * Get conversation history
   */
  getConversation() {
    return [...this.currentConversation];
  }
}

// Create global instance
const ollamaChat = new OllamaChat();

/**
 * Export for use in app
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { OllamaChat, ollamaChat };
} else {
  window.OllamaChat = OllamaChat;
  window.ollamaChat = ollamaChat;
}