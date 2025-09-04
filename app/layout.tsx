import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import FacebookPixel from '@/components/FacebookPixel';
import AdvancedSchemaMarkup from '@/components/seo/AdvancedSchemaMarkup';
import GEOTracking from '@/components/GEOTracking';
import Script from 'next/script';
import { structuredData, mortgageLoanSchema } from '@/lib/seo';
import './globals-simple.css';

export const metadata: Metadata = {
  title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
  description: 'Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884.',
  keywords: 'Orange County mortgage broker, home loans, refinancing, FHA loans, VA loans, mortgage rates, NMLS licensed, lender access, competitive rates',
  metadataBase: new URL('https://www.mothebroker.com'),
  alternates: {
    canonical: 'https://www.mothebroker.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/MoAbdel-Favicon.png', color: '#1e40af' },
    ],
  },
  openGraph: {
    title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
    description: 'Get competitive mortgage rates from 200+ lenders. Serving Orange County & beyond with fast closings, unbiased advice, and flexible home loan programs.',
    url: 'https://www.mothebroker.com',
    siteName: 'Mo Abdel | Mortgage Broker',
    images: [
      {
        url: 'https://www.mothebroker.com/images/og-image-mothebroker.png',
        width: 1200,
        height: 630,
        alt: 'Orange County Mortgage Broker - Mo Abdel NMLS #1426884',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
    description: 'Get competitive mortgage rates from 200+ lenders. Fast closings, unbiased advice, flexible home loan programs.',
    images: ['https://www.mothebroker.com/images/og-image-mothebroker.png'],
    creator: '@mothebroker',
    site: '@mothebroker',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="base44">
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="gje53lhRpuQPVaMLhtYAUYdO8ciKzx8APLNwNVhcT1A" />
        <meta name="msvalidate.01" content="F9E3BEE43DFA5A2B0676F3881B448BCA" />
        {/* Canonical URL will be handled by individual pages */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Prevent www redirect issues */}
        <meta name="robots" content="index, follow" />
        
        {/* Optimized resource hints for critical path */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Critical CSS preload for above-the-fold content */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
        
        {/* Non-critical stylesheets with media="print" then switch to all */}
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        
        {/* Critical mobile viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* Additional best practices meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mothebroker.com" />
        <meta property="og:title" content="Mo Abdel - Mortgage Broker | Orange County Mortgage NMLS #1426884" />
        <meta property="og:description" content="Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884." />
        <meta property="og:image" content="https://www.mothebroker.com/images/moabdel-headshot-final.png" />
        <meta property="og:site_name" content="Mo Abdel" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.mothebroker.com" />
        <meta name="twitter:title" content="Mo Abdel | Mortgage Broker Orange County" />
        <meta name="twitter:description" content="Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884." />
        <meta name="twitter:image" content="https://www.mothebroker.com/images/moabdel-headshot-final.png" />
        
        <AdvancedSchemaMarkup type="Organization" />
        <meta name="deployment-id" content="BGDyiFiyb-rollback" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <Breadcrumbs />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
        <FacebookPixel />
        <GEOTracking />
        
        {/* Combined structured data - single script for better performance */}
        <Script 
          id="combined-structured-data"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify([structuredData, mortgageLoanSchema])
          }}
        />
        
        
        {/* Original Full-Featured Chatbot - Embedded */}
        <div id="embedded-chatbot-root"></div>
        <Script id="full-chatbot" strategy="afterInteractive">
          {`
            (function() {
              'use strict';
              
              // Chatbot responses data
              const welcomeMessage = "👋 Hi! I'm Mo's AI assistant. I can help you with:\\n• Current mortgage rates and programs\\n• Loan qualifications and requirements\\n• First-time buyer information\\n• Refinancing options\\n• Or connect you directly with Mo\\n\\nWhat can I help you with today?";
              
              const quickActions = [
                { label: "Get Rate Quote", action: "What are current rates?" },
                { label: "Contact Mo", action: "How can I contact Mo?" },
                { label: "First-Time Buyer", action: "Do you help first-time buyers?" },
                { label: "Calculator", action: "calculator" }
              ];
              
              function findBestResponse(message) {
                const msg = message.toLowerCase();
                
                if (msg.includes('rate') || msg.includes('interest')) {
                  return {
                    answer: "Current rates vary by loan type and credit score. Today's rates are approximately: 30-year fixed at 6.53%, 15-year fixed at 5.88%, FHA at 6.09%. With my wholesale lender access, I consistently secure competitive rates. Call me at (949) 579-2057 for your personalized rate quote.",
                    followUp: ["What affects my rate?", "How to lock my rate?", "Compare loan programs"]
                  };
                }
                
                if (msg.includes('contact') || msg.includes('phone') || msg.includes('call')) {
                  return {
                    answer: "You can reach Mo Abdel directly at (949) 579-2057 (call or text anytime). He's available 24/7 and typically responds within 1 business day. Mo is a licensed mortgage broker (NMLS #1426884) with NEXA Mortgage.",
                    followUp: ["What are your hours?", "Can I text you?", "Schedule a call"]
                  };
                }
                
                if (msg.includes('first time') || msg.includes('first-time')) {
                  return {
                    answer: "Absolutely! First-time buyers are a specialty. I offer: low down payment options (3-3.5%), first-time buyer programs and grants, gift fund assistance, step-by-step guidance. Many first-time buyers are surprised they qualify. Call Mo at (949) 579-2057 for a free consultation.",
                    followUp: ["What down payment do I need?", "First-time buyer programs", "Check my eligibility"]
                  };
                }
                
                return {
                  answer: "That's a great question! Mo can provide detailed information about your specific situation. Call or text (949) 579-2057 for immediate assistance. He's available 24/7!"
                };
              }
              
              let isOpen = false;
              let messages = [
                {
                  id: '1',
                  text: welcomeMessage,
                  isUser: false,
                  timestamp: new Date()
                }
              ];
              let inputValue = '';
              let isTyping = false;
              
              function formatTime(date) {
                return date.toLocaleTimeString('en-US', { 
                  hour: 'numeric', 
                  minute: '2-digit',
                  hour12: true 
                });
              }
              
              function scrollToBottom() {
                const messagesEl = document.getElementById('chat-messages');
                if (messagesEl) {
                  messagesEl.scrollTop = messagesEl.scrollHeight;
                }
              }
              
              async function handleSend(text) {
                const messageText = text || inputValue.trim();
                if (!messageText) return;
                
                // Add user message
                const userMessage = {
                  id: Date.now().toString(),
                  text: messageText,
                  isUser: true,
                  timestamp: new Date()
                };
                messages.push(userMessage);
                inputValue = '';
                renderMessages();
                
                const input = document.getElementById('chat-input');
                if (input) input.value = '';
                
                isTyping = true;
                renderMessages();
                
                // Simulate typing delay
                await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
                
                // Find response
                const response = findBestResponse(messageText);
                
                const botResponse = {
                  id: (Date.now() + 1).toString(),
                  text: response.answer,
                  isUser: false,
                  timestamp: new Date(),
                  followUp: response.followUp
                };
                
                isTyping = false;
                messages.push(botResponse);
                renderMessages();
              }
              
              function renderMessages() {
                const messagesEl = document.getElementById('chat-messages');
                if (!messagesEl) return;
                
                messagesEl.innerHTML = '';
                
                messages.forEach((message) => {
                  const messageDiv = document.createElement('div');
                  messageDiv.style.cssText = \`
                    display: flex;
                    justify-content: \${message.isUser ? 'flex-end' : 'flex-start'};
                    margin-bottom: 16px;
                  \`;
                  
                  const bubbleDiv = document.createElement('div');
                  bubbleDiv.style.cssText = \`
                    max-width: 80%;
                    padding: 12px 16px;
                    border-radius: 16px;
                    background-color: \${message.isUser ? '#2563eb' : '#f3f4f6'};
                    color: \${message.isUser ? 'white' : '#374151'};
                    border-bottom-right-radius: \${message.isUser ? '4px' : '16px'};
                    border-bottom-left-radius: \${message.isUser ? '16px' : '4px'};
                  \`;
                  
                  const textDiv = document.createElement('div');
                  textDiv.style.cssText = 'font-size: 14px; line-height: 1.4; white-space: pre-wrap;';
                  textDiv.innerHTML = message.text.replace(/\\n/g, '<br>');
                  
                  const timeDiv = document.createElement('div');
                  timeDiv.style.cssText = 'font-size: 11px; margin-top: 4px; opacity: 0.7;';
                  timeDiv.textContent = formatTime(message.timestamp);
                  
                  bubbleDiv.appendChild(textDiv);
                  bubbleDiv.appendChild(timeDiv);
                  
                  // Follow-up questions
                  if (message.followUp && message.followUp.length > 0) {
                    const followUpDiv = document.createElement('div');
                    followUpDiv.style.cssText = 'margin-top: 12px;';
                    
                    const labelDiv = document.createElement('div');
                    labelDiv.style.cssText = 'font-size: 11px; margin-bottom: 6px; opacity: 0.8;';
                    labelDiv.textContent = 'Related questions:';
                    followUpDiv.appendChild(labelDiv);
                    
                    message.followUp.forEach((question) => {
                      const button = document.createElement('button');
                      button.style.cssText = \`
                        display: block;
                        width: 100%;
                        text-align: left;
                        font-size: 11px;
                        background-color: rgba(255,255,255,0.9);
                        border: 1px solid rgba(255,255,255,0.3);
                        border-radius: 6px;
                        padding: 6px 8px;
                        margin-bottom: 4px;
                        color: #2563eb;
                        cursor: pointer;
                      \`;
                      button.textContent = question;
                      button.onclick = () => handleSend(question);
                      followUpDiv.appendChild(button);
                    });
                    
                    bubbleDiv.appendChild(followUpDiv);
                  }
                  
                  messageDiv.appendChild(bubbleDiv);
                  messagesEl.appendChild(messageDiv);
                });
                
                // Typing indicator
                if (isTyping) {
                  const typingDiv = document.createElement('div');
                  typingDiv.style.cssText = 'display: flex; justify-content: flex-start; margin-bottom: 16px;';
                  
                  const typingBubble = document.createElement('div');
                  typingBubble.style.cssText = \`
                    background-color: #f3f4f6;
                    padding: 12px 16px;
                    border-radius: 16px;
                    border-bottom-left-radius: 4px;
                  \`;
                  
                  const dotsDiv = document.createElement('div');
                  dotsDiv.style.cssText = 'display: flex; gap: 4px;';
                  
                  for (let i = 0; i < 3; i++) {
                    const dot = document.createElement('div');
                    dot.style.cssText = \`
                      width: 8px;
                      height: 8px;
                      background-color: #9ca3af;
                      border-radius: 50%;
                      animation: bounce 1.4s ease-in-out \${i * 0.2}s infinite both;
                    \`;
                    dotsDiv.appendChild(dot);
                  }
                  
                  typingBubble.appendChild(dotsDiv);
                  typingDiv.appendChild(typingBubble);
                  messagesEl.appendChild(typingDiv);
                }
                
                scrollToBottom();
              }
              
              function createChatbot() {
                const rootEl = document.getElementById('embedded-chatbot-root');
                if (!rootEl) return;
                
                rootEl.innerHTML = \`
                  <div id="chatbot-container" style="
                    position: fixed !important;
                    bottom: 24px !important;
                    right: 24px !important;
                    z-index: 2147483647 !important;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                  ">
                    <!-- Chat Button -->
                    <button id="chat-toggle-btn" style="
                      width: 64px;
                      height: 64px;
                      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      border: none;
                      cursor: pointer;
                      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
                      transition: all 0.3s ease;
                      position: relative;
                    ">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.3 0 .6-.1.8-.3L14.1 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                      </svg>
                    </button>

                    <!-- Chat Window -->
                    <div id="chat-window" style="
                      position: absolute;
                      bottom: 0px;
                      right: 0px;
                      width: 384px;
                      height: 600px;
                      background: white;
                      border-radius: 16px;
                      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                      display: none;
                      flex-direction: column;
                      overflow: hidden;
                      border: 1px solid #e5e7eb;
                    ">
                      <!-- Header -->
                      <div style="
                        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                        color: white;
                        padding: 16px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                      ">
                        <div style="display: flex; align-items: center; gap: 12px;">
                          <div style="
                            width: 40px;
                            height: 40px;
                            background: rgba(255,255,255,0.2);
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: relative;
                          ">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.3 0 .6-.1.8-.3L14.1 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                            </svg>
                            <div style="
                              position: absolute;
                              bottom: -2px;
                              right: -2px;
                              width: 12px;
                              height: 12px;
                              background: #10b981;
                              border-radius: 50%;
                              border: 2px solid #1d4ed8;
                            "></div>
                          </div>
                          <div>
                            <div style="font-size: 16px; font-weight: 600;">Mo's AI Assistant</div>
                            <div style="font-size: 12px; opacity: 0.8;">Always here to help</div>
                          </div>
                        </div>
                        <button id="chat-close-btn" style="
                          background: rgba(255,255,255,0.2);
                          border: none;
                          color: white;
                          width: 32px;
                          height: 32px;
                          border-radius: 6px;
                          cursor: pointer;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        ">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.3 5.71L12 12.01 5.7 5.71 4.29 7.12 10.59 13.42 4.29 19.72 5.7 21.13 12 14.83 18.3 21.13 19.71 19.72 13.41 13.42 19.71 7.12z"/>
                          </svg>
                        </button>
                      </div>

                      <!-- Call Mo Banner -->
                      <div style="
                        background: #f0fdf4;
                        border-bottom: 1px solid #dcfce7;
                        padding: 12px 16px;
                        text-align: center;
                      ">
                        <a href="tel:9495792057" style="
                          color: #166534;
                          text-decoration: none;
                          font-size: 14px;
                          font-weight: 500;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          gap: 8px;
                        ">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                          Call Mo directly: (949) 579-2057
                        </a>
                      </div>

                      <!-- Messages Area -->
                      <div id="chat-messages" style="
                        flex: 1;
                        overflow-y: auto;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                      ">
                      </div>

                      <!-- Quick Actions -->
                      <div style="padding: 0 16px 8px 16px;">
                        <div id="quick-actions" style="display: flex; flex-wrap: wrap; gap: 6px;">
                        </div>
                      </div>

                      <!-- Input Area -->
                      <div style="
                        padding: 16px;
                        border-top: 1px solid #e5e7eb;
                        background: white;
                      ">
                        <div style="display: flex; gap: 8px;">
                          <input
                            id="chat-input"
                            type="text"
                            placeholder="Type your question..."
                            style="
                              flex: 1;
                              padding: 8px 16px;
                              border: 1px solid #d1d5db;
                              border-radius: 20px;
                              font-size: 14px;
                              outline: none;
                            "
                          />
                          <button id="send-btn" style="
                            background: #2563eb;
                            color: white;
                            border: none;
                            border-radius: 50%;
                            width: 40px;
                            height: 40px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                          ">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <style>
                    @keyframes bounce {
                      0%, 80%, 100% {
                        transform: scale(0);
                      } 40% {
                        transform: scale(1);
                      }
                    }
                  </style>
                \`;
                
                // Event listeners
                const toggleBtn = document.getElementById('chat-toggle-btn');
                const closeBtn = document.getElementById('chat-close-btn');
                const chatWindow = document.getElementById('chat-window');
                const sendBtn = document.getElementById('send-btn');
                const chatInput = document.getElementById('chat-input');
                const quickActionsEl = document.getElementById('quick-actions');
                
                toggleBtn.addEventListener('click', () => {
                  isOpen = !isOpen;
                  chatWindow.style.display = isOpen ? 'flex' : 'none';
                  toggleBtn.style.display = isOpen ? 'none' : 'flex';
                  if (isOpen) {
                    renderMessages();
                    renderQuickActions();
                    setTimeout(() => {
                      chatInput.focus();
                    }, 100);
                  }
                });
                
                closeBtn.addEventListener('click', () => {
                  isOpen = false;
                  chatWindow.style.display = 'none';
                  toggleBtn.style.display = 'flex';
                });
                
                sendBtn.addEventListener('click', () => {
                  inputValue = chatInput.value;
                  handleSend();
                });
                
                chatInput.addEventListener('keypress', (e) => {
                  if (e.key === 'Enter') {
                    inputValue = chatInput.value;
                    handleSend();
                  }
                });
                
                // Hover effects
                toggleBtn.addEventListener('mouseenter', () => {
                  toggleBtn.style.transform = 'scale(1.1)';
                });
                
                toggleBtn.addEventListener('mouseleave', () => {
                  toggleBtn.style.transform = 'scale(1)';
                });
                
                function renderQuickActions() {
                  quickActionsEl.innerHTML = '';
                  quickActions.slice(0, 4).forEach((action) => {
                    const button = document.createElement('button');
                    button.style.cssText = \`
                      font-size: 11px;
                      background: #f3f4f6;
                      border: none;
                      color: #374151;
                      padding: 6px 10px;
                      border-radius: 12px;
                      cursor: pointer;
                    \`;
                    button.textContent = action.label;
                    button.onclick = () => {
                      if (action.action === 'calculator') {
                        window.location.href = '/calculator';
                      } else {
                        handleSend(action.action);
                      }
                    };
                    quickActionsEl.appendChild(button);
                  });
                }
              }
              
              // Initialize
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', createChatbot);
              } else {
                createChatbot();
              }
              
            })();
          `}
        </Script>
      </body>
    </html>
  );
}