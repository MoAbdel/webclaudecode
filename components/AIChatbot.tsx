'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { 
  chatbotResponses, 
  findBestResponse, 
  quickActions, 
  welcomeMessage,
  fallbackResponses,
  ChatResponse 
} from '@/lib/chatbot-data';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  followUp?: string[];
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: welcomeMessage,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle sending a message
  const handleSend = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    // Find response
    const response = findBestResponse(messageText);
    
    let botResponse: Message;
    if (response) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: response.answer,
        isUser: false,
        timestamp: new Date(),
        followUp: response.followUp
      };
    } else {
      // Use fallback response
      const fallback = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: fallback,
        isUser: false,
        timestamp: new Date()
      };
    }

    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);
  };

  // Handle quick actions
  const handleQuickAction = (action: string) => {
    if (action === 'calculator') {
      window.location.href = '/calculator';
    } else {
      handleSend(action);
    }
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="fixed bottom-0 right-0 z-[99999]">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
          aria-label="Open chat"
          style={{ zIndex: 99999 }}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden group-hover:inline-block bg-blue-700 text-white px-3 py-1 rounded-lg absolute right-full mr-2 whitespace-nowrap">
            Chat with AI Assistant
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-0 right-0 w-full h-full sm:bottom-6 sm:right-6 sm:w-96 sm:h-[600px] bg-white sm:rounded-2xl shadow-2xl flex flex-col"
          style={{ zIndex: 99999 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sm:rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-700"></div>
              </div>
              <div>
                <h3 className="font-semibold">Mo's AI Assistant</h3>
                <p className="text-xs text-blue-100">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-lg p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Call Mo Banner */}
          <div className="bg-green-50 border-b border-green-200 px-4 py-2">
            <a 
              href="tel:9495792057"
              className="flex items-center justify-center gap-2 text-green-700 hover:text-green-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Mo directly: (949) 579-2057</span>
            </a>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isUser
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isUser ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                  
                  {/* Follow-up questions */}
                  {message.followUp && message.followUp.length > 0 && (
                    <div className="mt-3 space-y-1">
                      <p className="text-xs text-gray-600 mb-1">Related questions:</p>
                      {message.followUp.map((question, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(question)}
                          className="block w-full text-left text-xs bg-white hover:bg-gray-50 rounded-lg px-2 py-1 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-3 rounded-bl-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickActions.slice(0, 4).map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickAction(action.action)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}