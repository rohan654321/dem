// components/UI/ChatBot.jsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Bot,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import Button from './Button';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AutoParts Zone assistant. How can I help you find the right engine or transmission today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Looking for an engine",
    "Need a transmission",
    "Warranty information",
    "Shipping details",
    "Talk to a specialist"
  ];

  const botResponses = {
    "looking for an engine": "Great! I can help you find the perfect engine. Could you tell me the year, make, and model of your vehicle?",
    "need a transmission": "I can assist with transmission options! What's your vehicle's year, make, and model?",
    "warranty information": "All our parts come with a 90-day comprehensive warranty. This covers manufacturing defects and functional failures. Would you like more specific details?",
    "shipping details": "We offer nationwide shipping with 3-4 day delivery. Expedited options are available. All shipments include tracking and insurance.",
    "talk to a specialist": "I'll connect you with our parts specialist. They can provide expert advice and check specific inventory. Please hold a moment...",
    "default": "I understand you're looking for auto parts. At AutoParts Zone, we specialize in quality used engines and transmissions with 90-day warranty. How can I assist you further?"
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const lowerMessage = inputMessage.toLowerCase();
      let response = botResponses.default;

      Object.keys(botResponses).forEach(key => {
        if (lowerMessage.includes(key)) {
          response = botResponses[key];
        }
      });

      const botMessage = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Bot Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#e01919] to-[#ff3b3b] text-white rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-secondary flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">AutoParts Assistant</h3>
                  <p className="text-white/80 text-xs">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-accent text-white' 
                          : 'bg-primary text-white'
                      }`}
                    >
                      {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-accent text-white rounded-br-none'
                          : 'bg-white text-primary border border-secondary rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-white border border-secondary rounded-2xl rounded-bl-none px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-2 bg-white border border-secondary text-primary text-xs rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-secondary">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-secondary rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-primary placeholder-gray-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-4 pb-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <a
                  href="tel:5551234567"
                  className="flex flex-col items-center p-2 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-all group"
                >
                  <Phone size={14} />
                  <span className="text-xs mt-1">Call</span>
                </a>
                <a
                  href="mailto:support@autopartszone.com"
                  className="flex flex-col items-center p-2 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-all group"
                >
                  <Mail size={14} />
                  <span className="text-xs mt-1">Email</span>
                </a>
                <a
                  href="/contact"
                  className="flex flex-col items-center p-2 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-all group"
                >
                  <Clock size={14} />
                  <span className="text-xs mt-1">Contact</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;