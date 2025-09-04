// Chatbot injection script - runs after DOM is loaded
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
  
  function initChatbot() {
    // Don't inject if already exists
    if (document.getElementById('mo-chatbot-widget')) return;
    
    // Create chatbot container
    const chatbotWidget = document.createElement('div');
    chatbotWidget.id = 'mo-chatbot-widget';
    chatbotWidget.innerHTML = `
      <div id="mo-chatbot-button" style="
        position: fixed !important;
        bottom: 24px !important;
        right: 24px !important;
        z-index: 2147483647 !important;
        background-color: #2563eb !important;
        color: white !important;
        width: 64px !important;
        height: 64px !important;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2) !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        border: none !important;
        outline: none !important;
      " onclick="toggleChat()">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.3 0 .6-.1.8-.3L14.1 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12H7v-2h6v2zm3-4H7V8h9v2z"/>
        </svg>
      </div>
      
      <div id="mo-chatbot-window" style="
        position: fixed !important;
        bottom: 24px !important;
        right: 24px !important;
        width: 384px !important;
        height: 600px !important;
        z-index: 2147483647 !important;
        background: white !important;
        border-radius: 16px !important;
        box-shadow: 0 20px 25px rgba(0,0,0,0.3) !important;
        display: none !important;
        flex-direction: column !important;
        overflow: hidden !important;
      ">
        <div style="
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%) !important;
          color: white !important;
          padding: 16px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
        ">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="
              width: 40px !important;
              height: 40px !important;
              background: rgba(255,255,255,0.2) !important;
              border-radius: 50% !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              position: relative !important;
            ">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.3 0 .6-.1.8-.3L14.1 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              <div style="
                position: absolute !important;
                bottom: -2px !important;
                right: -2px !important;
                width: 12px !important;
                height: 12px !important;
                background: #10b981 !important;
                border: 2px solid #1d4ed8 !important;
                border-radius: 50% !important;
              "></div>
            </div>
            <div>
              <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Mo's AI Assistant</h3>
              <p style="margin: 0; font-size: 12px; opacity: 0.8;">Always here to help</p>
            </div>
          </div>
          <button onclick="toggleChat()" style="
            background: rgba(255,255,255,0.2) !important;
            border: none !important;
            color: white !important;
            width: 32px !important;
            height: 32px !important;
            border-radius: 6px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: pointer !important;
          ">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.3 5.71L12 12.01 5.7 5.71 4.29 7.12 10.59 13.42 4.29 19.72 5.7 21.13 12 14.83 18.3 21.13 19.71 19.72 13.41 13.42 19.71 7.12z"/>
            </svg>
          </button>
        </div>
        
        <div style="
          background: #f0fdf4 !important;
          border-bottom: 1px solid #dcfce7 !important;
          padding: 12px 16px !important;
          text-align: center !important;
        ">
          <a href="tel:9495792057" style="
            color: #166534 !important;
            text-decoration: none !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 8px !important;
          ">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call Mo directly: (949) 579-2057
          </a>
        </div>
        
        <div id="mo-chat-messages" style="
          flex: 1 !important;
          overflow-y: auto !important;
          padding: 16px !important;
        ">
          <div style="
            background: #f3f4f6 !important;
            padding: 12px !important;
            border-radius: 16px !important;
            border-bottom-left-radius: 4px !important;
            margin-bottom: 16px !important;
          ">
            <p style="margin: 0; font-size: 14px; line-height: 1.5;">
              👋 Hi! I'm Mo's AI assistant. I can help you with:<br>
              • Current mortgage rates and programs<br>
              • Loan qualifications and requirements<br>
              • First-time buyer information<br>
              • Refinancing options<br>
              • Or connect you directly with Mo<br><br>
              What can I help you with today?
            </p>
          </div>
        </div>
        
        <div style="
          padding: 16px !important;
          border-top: 1px solid #e5e7eb !important;
        ">
          <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
            <button onclick="sendQuickMessage('What are current rates?')" style="
              background: #f3f4f6 !important;
              border: none !important;
              color: #374151 !important;
              font-size: 12px !important;
              padding: 6px 12px !important;
              border-radius: 16px !important;
              cursor: pointer !important;
            ">Get Rate Quote</button>
            <button onclick="sendQuickMessage('How can I contact Mo?')" style="
              background: #f3f4f6 !important;
              border: none !important;
              color: #374151 !important;
              font-size: 12px !important;
              padding: 6px 12px !important;
              border-radius: 16px !important;
              cursor: pointer !important;
            ">Contact Mo</button>
            <button onclick="sendQuickMessage('Do you help first-time buyers?')" style="
              background: #f3f4f6 !important;
              border: none !important;
              color: #374151 !important;
              font-size: 12px !important;
              padding: 6px 12px !important;
              border-radius: 16px !important;
              cursor: pointer !important;
            ">First-Time Buyer</button>
          </div>
          
          <form onsubmit="sendMessage(event)" style="display: flex; gap: 8px;">
            <input 
              id="mo-chat-input" 
              type="text" 
              placeholder="Type your question..." 
              style="
                flex: 1 !important;
                padding: 8px 16px !important;
                border: 1px solid #d1d5db !important;
                border-radius: 20px !important;
                outline: none !important;
                font-size: 14px !important;
              "
            />
            <button type="submit" style="
              background: #2563eb !important;
              color: white !important;
              border: none !important;
              width: 40px !important;
              height: 40px !important;
              border-radius: 50% !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              cursor: pointer !important;
            ">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    `;
    
    // Append directly to body
    document.body.appendChild(chatbotWidget);
    
    // Add mobile responsiveness
    if (window.innerWidth <= 640) {
      const chatWindow = document.getElementById('mo-chatbot-window');
      if (chatWindow) {
        chatWindow.style.bottom = '0px';
        chatWindow.style.right = '0px';
        chatWindow.style.width = '100%';
        chatWindow.style.height = '100%';
        chatWindow.style.borderRadius = '0px';
      }
    }
  }
  
  // Chat functionality
  window.toggleChat = function() {
    const button = document.getElementById('mo-chatbot-button');
    const window_el = document.getElementById('mo-chatbot-window');
    
    if (window_el.style.display === 'none' || !window_el.style.display) {
      window_el.style.display = 'flex';
      button.style.display = 'none';
      // Focus input
      setTimeout(() => {
        document.getElementById('mo-chat-input').focus();
      }, 100);
    } else {
      window_el.style.display = 'none';
      button.style.display = 'flex';
    }
  };
  
  window.sendQuickMessage = function(message) {
    sendChatMessage(message);
  };
  
  window.sendMessage = function(event) {
    event.preventDefault();
    const input = document.getElementById('mo-chat-input');
    const message = input.value.trim();
    if (message) {
      sendChatMessage(message);
      input.value = '';
    }
  };
  
  function sendChatMessage(message) {
    const messagesContainer = document.getElementById('mo-chat-messages');
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.style.cssText = `
      display: flex !important;
      justify-content: flex-end !important;
      margin-bottom: 16px !important;
    `;
    userMessage.innerHTML = `
      <div style="
        background: #2563eb !important;
        color: white !important;
        padding: 12px !important;
        border-radius: 16px !important;
        border-bottom-right-radius: 4px !important;
        max-width: 80% !important;
        font-size: 14px !important;
      ">${message}</div>
    `;
    messagesContainer.appendChild(userMessage);
    
    // Simple response logic
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.style.cssText = `
        display: flex !important;
        justify-content: flex-start !important;
        margin-bottom: 16px !important;
      `;
      
      let response = getResponse(message);
      
      botMessage.innerHTML = `
        <div style="
          background: #f3f4f6 !important;
          color: #374151 !important;
          padding: 12px !important;
          border-radius: 16px !important;
          border-bottom-left-radius: 4px !important;
          max-width: 80% !important;
          font-size: 14px !important;
          line-height: 1.5 !important;
        ">${response}</div>
      `;
      messagesContainer.appendChild(botMessage);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  function getResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('rate') || msg.includes('interest')) {
      return `Current rates vary by loan type and credit score. Today's rates are approximately: 30-year fixed at 6.53%, 15-year fixed at 5.88%, FHA at 6.09%. With my wholesale lender access, I consistently secure competitive rates. Call Mo at <a href="tel:9495792057" style="color: #2563eb;">(949) 579-2057</a> for your personalized rate quote.`;
    }
    
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('call')) {
      return `You can reach Mo Abdel directly at <a href="tel:9495792057" style="color: #2563eb;">(949) 579-2057</a> (call or text anytime). He's available 24/7 and typically responds within 1 business day. Mo is a licensed mortgage broker (NMLS #1426884) with NEXA Mortgage.`;
    }
    
    if (msg.includes('first time') || msg.includes('first-time')) {
      return `Absolutely! First-time buyers are a specialty. I offer: low down payment options (3-3.5%), first-time buyer programs and grants, gift fund assistance, step-by-step guidance. Many first-time buyers are surprised they qualify. Call Mo at <a href="tel:9495792057" style="color: #2563eb;">(949) 579-2057</a> for a free consultation.`;
    }
    
    if (msg.includes('program') || msg.includes('loan')) {
      return `I offer all major programs: FHA (3.5% down, 580+ credit), VA ($0 down for veterans), Conventional (3-20% down), Jumbo (for loans over $1,089,300), HELOC (access home equity), Non-QM (bank statement/asset-based), and Investment Property loans. Each has unique benefits - let's discuss which fits your needs.`;
    }
    
    if (msg.includes('qualify') || msg.includes('credit')) {
      return `I have options for all credit situations through my 200+ lenders: FHA accepts scores as low as 580, VA is flexible for veterans, Conventional typically needs 620+, best rates available for 740+. Don't let credit concerns stop you - let's explore your options. Call <a href="tel:9495792057" style="color: #2563eb;">(949) 579-2057</a>.`;
    }
    
    return `That's a great question! Mo can provide detailed information about your specific situation. Call or text <a href="tel:9495792057" style="color: #2563eb;">(949) 579-2057</a> for immediate assistance, or use the contact form for a personalized response. He's available 24/7!`;
  }
})();