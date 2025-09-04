'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

function ChatbotUI() {
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
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 2147483647,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <MessageCircle size={24} />
          {/* Tooltip */}
          <div 
            style={{
              position: 'absolute',
              right: '70px',
              backgroundColor: '#1f2937',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '8px',
              fontSize: '14px',
              whiteSpace: 'nowrap',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Chat with Mo's AI Assistant
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          style={{
            position: 'absolute',
            bottom: '0px',
            right: '0px',
            width: '384px',
            height: '600px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #e5e7eb'
          }}
        >
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            color: 'white',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <MessageCircle size={20} />
                <div style={{
                  position: 'absolute',
                  bottom: '-2px',
                  right: '-2px',
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  border: '2px solid #1d4ed8'
                }}></div>
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>Mo's AI Assistant</div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>Always here to help</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Call Mo Banner */}
          <div style={{
            backgroundColor: '#f0fdf4',
            borderBottom: '1px solid #dcfce7',
            padding: '12px 16px',
            textAlign: 'center'
          }}>
            <a 
              href="tel:9495792057"
              style={{
                color: '#166534',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Phone size={16} />
              Call Mo directly: (949) 579-2057
            </a>
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: 'flex',
                  justifyContent: message.isUser ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    backgroundColor: message.isUser ? '#2563eb' : '#f3f4f6',
                    color: message.isUser ? 'white' : '#374151',
                    borderBottomRightRadius: message.isUser ? '4px' : '16px',
                    borderBottomLeftRadius: message.isUser ? '16px' : '4px'
                  }}
                >
                  <div style={{ fontSize: '14px', lineHeight: '1.4', whiteSpace: 'pre-wrap' }}>
                    {message.text}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    marginTop: '4px',
                    opacity: 0.7
                  }}>
                    {formatTime(message.timestamp)}
                  </div>
                  
                  {/* Follow-up questions */}
                  {message.followUp && message.followUp.length > 0 && (
                    <div style={{ marginTop: '12px' }}>
                      <div style={{ fontSize: '11px', marginBottom: '6px', opacity: 0.8 }}>
                        Related questions:
                      </div>
                      {message.followUp.map((question, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(question)}
                          style={{
                            display: 'block',
                            width: '100%',
                            textAlign: 'left',
                            fontSize: '11px',
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '6px',
                            padding: '6px 8px',
                            marginBottom: '4px',
                            color: '#2563eb',
                            cursor: 'pointer'
                          }}
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
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  backgroundColor: '#f3f4f6',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  borderBottomLeftRadius: '4px'
                }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#9ca3af',
                      borderRadius: '50%',
                      animation: 'bounce 1.4s ease-in-out infinite both'
                    }}></div>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#9ca3af',
                      borderRadius: '50%',
                      animation: 'bounce 1.4s ease-in-out 0.2s infinite both'
                    }}></div>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#9ca3af',
                      borderRadius: '50%',
                      animation: 'bounce 1.4s ease-in-out 0.4s infinite both'
                    }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div style={{ padding: '0 16px 8px 16px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {quickActions.slice(0, 4).map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickAction(action.action)}
                  style={{
                    fontSize: '11px',
                    backgroundColor: '#f3f4f6',
                    border: 'none',
                    color: '#374151',
                    padding: '6px 10px',
                    borderRadius: '12px',
                    cursor: 'pointer'
                  }}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div style={{
            padding: '16px',
            borderTop: '1px solid #e5e7eb',
            backgroundColor: 'white'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Type your question..."
                disabled={isTyping}
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '20px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isTyping}
                style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: (!inputValue.trim() || isTyping) ? 0.5 : 1
                }}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
            } 40% {
              transform: scale(1);
            }
          }
        `
      }} />
    </div>
  );
}

export default function FixedChatbot() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted on client
  if (!mounted) return null;

  // Use portal to render directly to document.body, bypassing all layout constraints
  return createPortal(<ChatbotUI />, document.body);
}