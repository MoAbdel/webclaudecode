// Chatbot initialization - runs completely independent of React
(function() {
  'use strict';
  
  // Wait for DOM and React to be fully loaded
  function initializeChatbot() {
    // Remove any existing chatbot
    const existing = document.getElementById('ai-chatbot-root');
    if (existing) {
      existing.remove();
    }
    
    // Create completely independent root element
    const chatbotRoot = document.createElement('div');
    chatbotRoot.id = 'ai-chatbot-root';
    chatbotRoot.style.cssText = `
      position: fixed !important;
      bottom: 24px !important;
      right: 24px !important;
      z-index: 2147483647 !important;
      pointer-events: none !important;
    `;
    
    // Create the chatbot button
    const chatButton = document.createElement('button');
    chatButton.id = 'independent-chat-button';
    chatButton.innerHTML = \`
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.3 0 .6-.1.8-.3L14.1 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    \`;
    chatButton.style.cssText = \`
      width: 64px !important;
      height: 64px !important;
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%) !important;
      color: white !important;
      border-radius: 50% !important;
      border: none !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2) !important;
      transition: all 0.3s ease !important;
      pointer-events: auto !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
    \`;
    
    // Add hover effect
    chatButton.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
      this.style.boxShadow = '0 12px 32px rgba(0,0,0,0.3)';
    });
    
    chatButton.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
    });
    
    // Create chat window (initially hidden)
    const chatWindow = document.createElement('div');
    chatWindow.id = 'independent-chat-window';
    chatWindow.style.cssText = \`
      position: absolute !important;
      bottom: 0px !important;
      right: 0px !important;
      width: 384px !important;
      height: 600px !important;
      background: white !important;
      border-radius: 16px !important;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
      display: none !important;
      flex-direction: column !important;
      overflow: hidden !important;
      border: 1px solid #e5e7eb !important;
      pointer-events: auto !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
    \`;
    
    // Chat window HTML content
    chatWindow.innerHTML = \`
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
        <button onclick="toggleIndependentChat()" style="
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
      
      <div id="independent-chat-messages" style="
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      ">
        <div style="
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 16px;
          background: #f3f4f6;
          color: #374151;
          border-bottom-left-radius: 4px;
          font-size: 14px;
          line-height: 1.4;
        ">
          👋 Hi! I'm Mo's AI assistant. I can help you with:<br>
          • Current mortgage rates and programs<br>
          • Loan qualifications and requirements<br>
          • First-time buyer information<br>
          • Refinancing options<br>
          • Or connect you directly with Mo<br><br>
          What can I help you with today?
        </div>
      </div>
      
      <div style="padding: 0 16px 8px 16px;">
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          <button onclick="sendIndependentMessage('What are current rates?')" style="
            font-size: 11px;
            background: #f3f4f6;
            border: none;
            color: #374151;
            padding: 6px 10px;
            border-radius: 12px;
            cursor: pointer;
          ">Get Rate Quote</button>
          <button onclick="sendIndependentMessage('How can I contact Mo?')" style="
            font-size: 11px;
            background: #f3f4f6;
            border: none;
            color: #374151;
            padding: 6px 10px;
            border-radius: 12px;
            cursor: pointer;
          ">Contact Mo</button>
          <button onclick="sendIndependentMessage('Do you help first-time buyers?')" style="
            font-size: 11px;
            background: #f3f4f6;
            border: none;
            color: #374151;
            padding: 6px 10px;
            border-radius: 12px;
            cursor: pointer;
          ">First-Time Buyer</button>
        </div>
      </div>
      
      <div style="
        padding: 16px;
        border-top: 1px solid #e5e7eb;
        background: white;
      ">
        <div style="display: flex; gap: 8px;">
          <input 
            id="independent-chat-input" 
            type="text" 
            placeholder="Type your question..." 
            onkeypress="if(event.key==='Enter') sendIndependentMessage()"
            style="
              flex: 1;
              padding: 8px 16px;
              border: 1px solid #d1d5db;
              border-radius: 20px;
              font-size: 14px;
              outline: none;
            "
          />
          <button onclick="sendIndependentMessage()" style="
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
    \`;
    
    // Add elements to root
    chatbotRoot.appendChild(chatButton);
    chatbotRoot.appendChild(chatWindow);
    
    // Click handler for chat button
    chatButton.addEventListener('click', function() {
      const window_el = document.getElementById('independent-chat-window');
      if (window_el.style.display === 'none' || !window_el.style.display) {
        window_el.style.display = 'flex';
        chatButton.style.display = 'none';
        setTimeout(() => {
          const input = document.getElementById('independent-chat-input');
          if (input) input.focus();
        }, 100);
      }
    });
    
    // Append to body - completely independent
    document.body.appendChild(chatbotRoot);
    console.log('Independent chatbot initialized successfully');
  }
  
  // Global functions for chat functionality
  window.toggleIndependentChat = function() {
    const button = document.getElementById('independent-chat-button');
    const window_el = document.getElementById('independent-chat-window');
    
    if (window_el && button) {
      window_el.style.display = 'none';
      button.style.display = 'flex';
    }
  };
  
  window.sendIndependentMessage = function(presetMessage) {
    const input = document.getElementById('independent-chat-input');
    const messages = document.getElementById('independent-chat-messages');
    
    if (!messages) return;
    
    let message = presetMessage || (input ? input.value.trim() : '');
    if (!message) return;
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.style.cssText = 'display: flex; justify-content: flex-end;';
    userMsg.innerHTML = \`
      <div style="
        max-width: 80%;
        padding: 12px 16px;
        border-radius: 16px;
        background: #2563eb;
        color: white;
        border-bottom-right-radius: 4px;
        font-size: 14px;
      ">\${message}</div>
    \`;
    messages.appendChild(userMsg);
    
    if (input) input.value = '';
    
    // Scroll to bottom
    messages.scrollTop = messages.scrollHeight;
    
    // Add bot response after delay
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.style.cssText = 'display: flex; justify-content: flex-start;';
      
      let response = getIndependentResponse(message);
      
      botMsg.innerHTML = \`
        <div style="
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 16px;
          background: #f3f4f6;
          color: #374151;
          border-bottom-left-radius: 4px;
          font-size: 14px;
          line-height: 1.4;
        ">\${response}</div>
      \`;
      messages.appendChild(botMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 1200);
  };
  
  function getIndependentResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('rate') || msg.includes('interest')) {
      return 'Current rates vary by loan type and credit score. Today\\'s rates are approximately: 30-year fixed at 6.53%, 15-year fixed at 5.88%, FHA at 6.09%. With my wholesale lender access, I consistently secure competitive rates. Call me at <a href="tel:9495792057" style="color: #2563eb;">(949) 579-2057</a> for your personalized rate quote.';
    }
    
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('call')) {
      return 'You can reach Mo Abdel directly at <a href="tel:9495792057" style="color: #2563eb;">(949) 579-2057</a> (call or text anytime). He\\'s available 24/7 and typically responds within 1 business day. Mo is a licensed mortgage broker (NMLS #1426884) with NEXA Mortgage.';
    }
    
    if (msg.includes('first time') || msg.includes('first-time')) {
      return 'Absolutely! First-time buyers are a specialty. I offer: low down payment options (3-3.5%), first-time buyer programs and grants, gift fund assistance, step-by-step guidance. Many first-time buyers are surprised they qualify. Call Mo at <a href="tel:9495792057" style="color: #2563eb;">(949) 579-2057</a> for a free consultation.';
    }
    
    if (msg.includes('program') || msg.includes('loan')) {
      return 'I offer all major programs: FHA (3.5% down, 580+ credit), VA ($0 down for veterans), Conventional (3-20% down), Jumbo (for loans over $1,089,300), HELOC (access home equity), Non-QM (bank statement/asset-based), and Investment Property loans. Each has unique benefits.';
    }
    
    return 'That\\'s a great question! Mo can provide detailed information about your specific situation. Call or text <a href="tel:9495792057" style="color: #2563eb;">(949) 579-2057</a> for immediate assistance. He\\'s available 24/7!';
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeChatbot);
  } else if (document.readyState === 'interactive') {
    setTimeout(initializeChatbot, 100);
  } else {
    initializeChatbot();
  }
  
  // Backup initialization
  setTimeout(initializeChatbot, 1000);
  setTimeout(initializeChatbot, 3000);
  
})();