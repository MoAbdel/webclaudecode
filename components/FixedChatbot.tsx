// components/FixedChatbot.tsx
'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
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

function useBodyPortal(id = 'ai-chatbot-root') {
  const [el, setEl] = useState<HTMLElement | null>(null);
  useEffect(() => {
    let node = document.getElementById(id) as HTMLElement | null;
    if (!node) {
      node = document.createElement('div');
      node.id = id;
      document.body.appendChild(node);
    } else if (node.parentElement !== document.body) {
      document.body.appendChild(node);
    }
    // Ensure the portal root itself cannot create containing blocks
    node.style.position = 'static';
    node.style.transform = 'none';
    node.style.filter = 'none';
    node.style.contain = 'none';
    setEl(node);
    return () => {
      // optional: keep it for subsequent mounts; remove if you prefer cleanup
      // node.remove();
    };
  }, [id]);
  return el;
}

function ChatbotUI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: welcomeMessage, isUser: false, timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { scrollToBottom(); }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      const t = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const messageText = (text ?? inputValue).trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    await new Promise(r => setTimeout(r, 500 + Math.random() * 1000));

    const response = findBestResponse(messageText);
    const botResponse: Message = response
      ? {
          id: (Date.now() + 1).toString(),
          text: response.answer,
          isUser: false,
          timestamp: new Date(),
          followUp: response.followUp
        }
      : {
          id: (Date.now() + 1).toString(),
          text: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
          isUser: false,
          timestamp: new Date()
        };

    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);
  };

  const handleQuickAction = (action: string) => {
    if (action === 'calculator') window.location.href = '/calculator';
    else handleSend(action);
  };

  const formatTime = (d: Date) =>
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  // Lock background scroll when chat is open
  useEffect(() => {
    if (isOpen) document.documentElement.classList.add('chatbot-no-scroll');
    else document.documentElement.classList.remove('chatbot-no-scroll');
    return () => document.documentElement.classList.remove('chatbot-no-scroll');
  }, [isOpen]);

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            right: 'max(16px, env(safe-area-inset-right, 16px))',
            bottom: 'max(16px, env(safe-area-inset-bottom, 16px))',
            zIndex: 2147483647,
            width: '56px',
            height: '56px',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 24px rgba(0,0,0,0.22)',
            transition: 'transform 0.2s ease',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            WebkitTapHighlightColor: 'transparent'
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          aria-label="Open chat"
        >
          <MessageCircle size={22} />
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Mo's AI Assistant"
          style={{
            position: 'fixed',
            right: 'max(12px, env(safe-area-inset-right, 12px))',
            bottom: 'max(12px, env(safe-area-inset-bottom, 12px))',
            zIndex: 2147483647,
            // Mobile-first sizing with dvh for iOS URL bar handling
            width: 'min(92vw, 420px)',
            height: 'min(80dvh, 640px)',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.28)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            // Prevent parent CSS interference
            transform: 'translateZ(0)'
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: 'white',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <MessageCircle size={20} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    right: '-2px',
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    border: '2px solid #1d4ed8'
                  }}
                />
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 600 }}>Mo&apos;s AI Assistant</div>
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
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Call Mo Banner */}
          <div
            style={{
              backgroundColor: '#f0fdf4',
              borderBottom: '1px solid #dcfce7',
              padding: '12px 16px',
              textAlign: 'center'
            }}
          >
            <a
              href="tel:9495792057"
              style={{
                color: '#166534',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
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

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {messages.map(m => (
              <div key={m.id} style={{ display: 'flex', justifyContent: m.isUser ? 'flex-end' : 'flex-start' }}>
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    backgroundColor: m.isUser ? '#2563eb' : '#f3f4f6',
                    color: m.isUser ? 'white' : '#374151',
                    borderBottomRightRadius: m.isUser ? '4px' : '16px',
                    borderBottomLeftRadius: m.isUser ? '16px' : '4px'
                  }}
                >
                  <div style={{ fontSize: '14px', lineHeight: '1.4', whiteSpace: 'pre-wrap' }}>
                    {m.text}
                  </div>
                  <div style={{ fontSize: '11px', marginTop: '4px', opacity: 0.7 }}>
                    {formatTime(m.timestamp)}
                  </div>

                  {m.followUp && m.followUp.length > 0 && (
                    <div style={{ marginTop: '12px' }}>
                      <div style={{ fontSize: '11px', marginBottom: '6px', opacity: 0.8 }}>
                        Related questions:
                      </div>
                      {m.followUp.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(q)}
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
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    backgroundColor: '#f3f4f6',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    borderBottomLeftRadius: '4px'
                  }}
                >
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#9ca3af',
                        borderRadius: '50%',
                        animation: 'bounce 1.4s ease-in-out infinite both'
                      }}
                    />
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#9ca3af',
                        borderRadius: '50%',
                        animation: 'bounce 1.4s ease-in-out 0.2s infinite both'
                      }}
                    />
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#9ca3af',
                        borderRadius: '50%',
                        animation: 'bounce 1.4s ease-in-out 0.4s infinite both'
                      }}
                    />
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

          {/* Input */}
          <div style={{ 
            padding: '16px', 
            borderTop: '1px solid #e5e7eb', 
            backgroundColor: 'white',
            paddingBottom: 'max(16px, env(safe-area-inset-bottom, 16px))'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                ref={inputRef}
                type="text"
                inputMode="text"
                autoCapitalize="sentences"
                autoComplete="off"
                autoCorrect="on"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={e => {
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
                  opacity: !inputValue.trim() || isTyping ? 0.5 : 1
                }}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes and Mobile Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
          @media (min-width: 768px) {
            /* Desktop/tablet: give it more real estate */
            [role="dialog"][aria-label="Mo's AI Assistant"] {
              width: 384px !important;
              height: 600px !important;
              right: 24px !important;
              bottom: 24px !important;
            }
          }
          /* Prevent body scroll hijack when panel open */
          .chatbot-no-scroll { 
            overflow: hidden !important; 
            touch-action: none !important; 
            overscroll-behavior: contain !important; 
          }
        `
        }}
      />
    </>
  );
}

export default function FixedChatbot() {
  const portalEl = useBodyPortal('ai-chatbot-root');
  if (!portalEl) return null; // SSR-safe: render only on client
  return createPortal(<ChatbotUI />, portalEl);
}