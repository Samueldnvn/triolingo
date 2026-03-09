/**
 * CONVERSATION LESSONS DATABASE
 * Roleplay and concept explanation lessons for each course
 */

const ConversationLessons = {
  french: [
    {
      id: 'french_conv_1',
      title: 'Café Conversation',
      description: 'Order at a French café',
      roleplay: 'customer',
      scenario: 'You are at a charming Parisian café. The server (the LLM) will greet you. Order a drink and a pastry in French. Be polite and natural.',
      llmRole: 'server',
      llmInstructions: 'You are a friendly French server at a Parisian café. Greet the customer warmly in French. Wait for them to order, then respond appropriately. Help them if needed, but encourage them to speak French. Keep responses in French.',
      topics: ['greetings', 'ordering', 'politeness'],
      difficulty: 'beginner',
      estimatedTime: 5,
      icon: '☕'
    },
    {
      id: 'french_conv_2',
      title: 'Market Adventure',
      description: 'Shop at a French market',
      roleplay: 'shopper',
      scenario: 'You are at a lively French market. Browse the stalls and buy some fresh produce or cheese. Ask the vendor questions about prices and recommendations.',
      llmRole: 'vendor',
      llmInstructions: 'You are a friendly French market vendor selling fresh produce. Greet the customer, describe your products in French, and help them with their purchase. Be patient and encouraging.',
      topics: ['shopping', 'numbers', 'food'],
      difficulty: 'intermediate',
      estimatedTime: 7,
      icon: '🥖'
    },
    {
      id: 'french_conv_3',
      title: 'Train Travel',
      description: 'Ask for train information',
      roleplay: 'traveler',
      scenario: 'You are at a French train station. Ask the ticket agent about schedules, prices, and destinations. Book a ticket or get information about your journey.',
      llmRole: 'ticket agent',
      llmInstructions: 'You are a helpful French train station ticket agent. Assist the customer with train schedules, prices, and destinations. Use formal but friendly French. Help them understand the options.',
      topics: ['travel', 'numbers', 'directions'],
      difficulty: 'intermediate',
      estimatedTime: 6,
      icon: '🚂'
    },
    {
      id: 'french_conv_4',
      title: 'Restaurant Dinner',
      description: 'Dine at a French restaurant',
      roleplay: 'diner',
      scenario: 'You are at a nice French restaurant. Review the menu, ask the waiter about dishes, order your meal, and request the check. Make conversation about the food.',
      llmRole: 'waiter',
      llmInstructions: 'You are a professional French waiter at a nice restaurant. Greet the customer, explain menu items, take their order, and check on them during the meal. Use polite French.',
      topics: ['food', 'ordering', 'politeness'],
      difficulty: 'advanced',
      estimatedTime: 8,
      icon: '🍽️'
    },
    {
      id: 'french_conv_5',
      title: 'City Directions',
      description: 'Ask for directions in Paris',
      roleplay: 'tourist',
      scenario: 'You are lost in Paris. Stop a local to ask for directions to famous landmarks like the Eiffel Tower or Louvre. Ask for recommendations nearby.',
      llmRole: 'local',
      llmInstructions: 'You are a friendly Parisian local. Help the lost tourist with directions to landmarks. Be helpful and provide simple, clear instructions. You can mention interesting places nearby.',
      topics: ['directions', 'landmarks', 'conversation'],
      difficulty: 'intermediate',
      estimatedTime: 5,
      icon: '🗼'
    },
    {
      id: 'french_conv_6',
      title: 'Shopping Spree',
      description: 'Buy clothes at a French boutique',
      roleplay: 'customer',
      scenario: 'You are shopping at a stylish French clothing boutique. Browse clothes, ask for sizes, try things on, and make a purchase. Compliment the shop assistant.',
      llmRole: 'shop assistant',
      llmInstructions: 'You are a helpful French shop assistant at a clothing boutique. Help the customer find clothes, suggest sizes, and make recommendations. Be encouraging about their choices.',
      topics: ['shopping', 'clothes', 'colors'],
      difficulty: 'advanced',
      estimatedTime: 8,
      icon: '👗'
    }
  ],

  spanish: [
    {
      id: 'spanish_conv_1',
      title: 'Taquería Talk',
      description: 'Order at a Mexican restaurant',
      roleplay: 'customer',
      scenario: 'You are at a vibrant Mexican taquería. Order tacos, ask about spicy levels, and make small talk with the server. Use polite Spanish.',
      llmRole: 'server',
      llmInstructions: 'You are a friendly Mexican taquería server. Greet the customer warmly in Spanish, explain the menu, take their order, and engage in friendly conversation. Use common Mexican expressions.',
      topics: ['greetings', 'food', 'ordering'],
      difficulty: 'beginner',
      estimatedTime: 5,
      icon: '🌮'
    },
    {
      id: 'spanish_conv_2',
      title: 'Mercado Mexicano',
      description: 'Shop at a Mexican market',
      roleplay: 'shopper',
      scenario: 'You are at a bustling Mexican market. Browse colorful stalls, buy fresh ingredients, and chat with vendors about prices and recommendations.',
      llmRole: 'vendor',
      llmInstructions: 'You are a friendly Mexican market vendor selling fresh produce and local goods. Greet the customer, describe your products enthusiastically, and help them with their shopping. Use Mexican Spanish expressions.',
      topics: ['shopping', 'numbers', 'food'],
      difficulty: 'intermediate',
      estimatedTime: 7,
      icon: '🥑'
    },
    {
      id: 'spanish_conv_3',
      title: 'Plaza Chit-Chat',
      description: 'Chat with a local in the plaza',
      roleplay: 'traveler',
      scenario: 'You are relaxing in a Spanish plaza. Strike up a conversation with a local about the weather, local attractions, or cultural differences.',
      llmRole: 'local',
      llmInstructions: 'You are a friendly Spanish local enjoying time in the plaza. Engage in natural conversation with the tourist. Ask about their trip, share local knowledge, and be patient with their Spanish.',
      topics: ['conversation', 'weather', 'culture'],
      difficulty: 'intermediate',
      estimatedTime: 6,
      icon: '🌴'
    },
    {
      id: 'spanish_conv_4',
      title: 'Tapas Time',
      description: 'Order tapas at a Spanish bar',
      roleplay: 'diner',
      scenario: 'You are at a traditional Spanish tapas bar. Browse the menu, ask the bartender about different tapas, order several dishes, and enjoy the atmosphere.',
      llmRole: 'bartender',
      llmInstructions: 'You are a knowledgeable Spanish bartender at a tapas bar. Explain the different tapas, make recommendations, and create a lively atmosphere. Use authentic Spanish expressions.',
      topics: ['food', 'ordering', 'culture'],
      difficulty: 'advanced',
      estimatedTime: 8,
      icon: '🍷'
    },
    {
      id: 'spanish_conv_5',
      title: 'Farmacia Help',
      description: 'Ask for help at a pharmacy',
      roleplay: 'customer',
      scenario: 'You need to visit a Spanish pharmacy. Explain your symptoms or what you need to the pharmacist. Ask about medications and follow-up care.',
      llmRole: 'pharmacist',
      llmInstructions: 'You are a professional Spanish pharmacist. Listen to the customer\'s needs carefully, ask appropriate questions, and provide helpful advice. Use formal but warm Spanish.',
      topics: ['health', 'symptoms', 'politeness'],
      difficulty: 'advanced',
      estimatedTime: 6,
      icon: '💊'
    },
    {
      id: 'spanish_conv_6',
      title: 'Hotel Check-In',
      description: 'Check into a Spanish hotel',
      roleplay: 'guest',
      scenario: 'You are arriving at a Spanish hotel. Check in with the receptionist, ask about amenities, your room, and local recommendations.',
      llmRole: 'receptionist',
      llmInstructions: 'You are a professional hotel receptionist in Spain. Greet the guest warmly, handle check-in efficiently, answer questions about the hotel, and provide helpful local recommendations.',
      topics: ['travel', 'politeness', 'directions'],
      difficulty: 'intermediate',
      estimatedTime: 6,
      icon: '🏨'
    }
  ],

  calculus: [
    {
      id: 'calc_conv_1',
      title: 'Explain Limits',
      description: 'Teach someone about limits',
      type: 'explain',
      scenario: 'Explain the concept of limits in calculus to a student who has never studied calculus before. Start from the basics, use examples, and make it intuitive.',
      llmRole: 'student',
      llmInstructions: 'You are a curious student who has never studied calculus. Ask clear questions about limits, request clarification when confused, and show genuine interest in understanding. Challenge the explanation when something seems unclear.',
      topics: ['limits', 'foundations', 'teaching'],
      difficulty: 'beginner',
      estimatedTime: 8,
      icon: '📊'
    },
    {
      id: 'calc_conv_2',
      title: 'Derivatives Explained',
      description: 'Explain derivatives intuitively',
      type: 'explain',
      scenario: 'Teach a non-math person what derivatives are and why they\'re useful. Use real-world examples and avoid overly technical language at first.',
      llmRole: 'learner',
      llmInstructions: 'You are someone interested in learning about calculus but without a strong math background. Ask practical questions, request concrete examples, and connect the concepts to real life. Be curious about applications.',
      topics: ['derivatives', 'applications', 'intuition'],
      difficulty: 'beginner',
      estimatedTime: 8,
      icon: '📈'
    },
    {
      id: 'calc_conv_3',
      title: 'Chain Rule Tutorial',
      description: 'Explain the chain rule clearly',
      type: 'explain',
      scenario: 'A student is struggling with the chain rule. Explain it step by step, use the "inside function, outside function" analogy, and work through examples together.',
      llmRole: 'student',
      llmInstructions: 'You are a calculus student who understands basic derivatives but is confused about the chain rule. Ask for clarification on why we do each step, request more examples, and express confusion honestly.',
      topics: ['chain rule', 'derivatives', 'teaching'],
      difficulty: 'intermediate',
      estimatedTime: 10,
      icon: '🔗'
    },
    {
      id: 'calc_conv_4',
      title: 'Integration Concepts',
      description: 'Explain integration as area',
      type: 'explain',
      scenario: 'Teach someone what integration means geometrically. Focus on the concept of area under curves, Riemann sums, and the fundamental theorem of calculus.',
      llmRole: 'learner',
      llmInstructions: 'You are a visual learner trying to understand integration. Ask about how rectangles approximate curves, why we take limits, and what the area represents. Request visual explanations.',
      topics: ['integration', 'area', 'fundamental theorem'],
      difficulty: 'intermediate',
      estimatedTime: 10,
      icon: '∫'
    },
    {
      id: 'calc_conv_5',
      title: 'Series Convergence',
      description: 'Explain infinite series',
      type: 'explain',
      scenario: 'Explain the concept of infinite series and convergence to someone who knows basic algebra but not calculus. Use examples like geometric series and why they might or might not sum to infinity.',
      llmRole: 'student',
      llmInstructions: 'You are a student fascinated by the idea of infinite sums but confused about how they work. Ask about why some infinite sums converge while others diverge, and request concrete examples.',
      topics: ['series', 'convergence', 'infinity'],
      difficulty: 'advanced',
      estimatedTime: 12,
      icon: '∑'
    },
    {
      id: 'calc_conv_6',
      title: 'Multivariable Overview',
      description: 'Explain multivariable calculus',
      type: 'explain',
      scenario: 'Introduce the concept of multivariable calculus to someone who knows single-variable calculus. Explain partial derivatives, gradients, and how they differ from ordinary derivatives.',
      llmRole: 'student',
      llmInstructions: 'You are a calculus student who has learned single-variable calculus and is curious about multivariable calculus. Ask about how partial derivatives work, what the gradient represents, and how 3D affects the concepts.',
      topics: ['partial derivatives', 'gradient', 'multivariable'],
      difficulty: 'advanced',
      estimatedTime: 12,
      icon: '📐'
    },
    {
      id: 'calc_conv_7',
      title: 'Real-World Optimization',
      description: 'Teach optimization problems',
      type: 'explain',
      scenario: 'Explain how calculus is used in real-world optimization problems to someone interested in engineering or economics. Use business or engineering examples.',
      llmRole: 'student',
      llmInstructions: 'You are an engineering/economics student wanting to understand practical applications. Ask about how to set up problems, what the derivative tells us, and how to interpret results in real contexts.',
      topics: ['optimization', 'applications', 'derivatives'],
      difficulty: 'intermediate',
      estimatedTime: 10,
      icon: '🎯'
    },
    {
      id: 'calc_conv_8',
      title: 'Taylor Series Magic',
      description: 'Explain Taylor series intuitively',
      type: 'explain',
      scenario: 'Explain Taylor series as approximating functions with polynomials. Show how more terms give better approximations and why this is useful.',
      llmRole: 'learner',
      llmInstructions: 'You are curious about how computers calculate things like sine and cosine. Ask about why polynomials can approximate any function, how the series is built, and what makes the approximation better.',
      topics: ['Taylor series', 'approximation', 'polynomials'],
      difficulty: 'advanced',
      estimatedTime: 12,
      icon: '🔮'
    }
  ]
};

/**
 * Export for use in app
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ConversationLessons;
} else {
  window.ConversationLessons = ConversationLessons;
}