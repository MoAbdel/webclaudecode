// Simple chatbot - direct DOM injection with debugging
console.log('Chatbot script loading...');

// Wait for page to fully load
window.addEventListener('load', function() {
  console.log('Page loaded, injecting chatbot...');
  
  // Remove any existing chatbot
  const existing = document.getElementById('mo-simple-chatbot');
  if (existing) {
    existing.remove();
  }
  
  // Create the chatbot HTML as a string
  const chatbotHTML = `
    <div id="mo-simple-chatbot" style="position: fixed !important; bottom: 20px !important; right: 20px !important; z-index: 999999 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <!-- Chat Button -->
      <div id="chat-btn" style="
        width: 60px !important;
        height: 60px !important;
        background: #2563eb !important;
        color: white !important;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
        position: relative !important;
      " onclick="toggleChat()">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.3 0 .6-.1.8-.3L14.1 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </div>
      
      <!-- Chat Window -->
      <div id="chat-window" style="
        position: absolute !important;
        bottom: 70px !important;
        right: 0 !important;
        width: 350px !important;
        height: 500px !important;
        background: white !important;
        border-radius: 12px !important;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3) !important;
        display: none !important;
        flex-direction: column !important;
        overflow: hidden !important;
      ">
        <!-- Header -->
        <div style="
          background: linear-gradient(135deg, #2563eb, #1d4ed8) !important;
          color: white !important;
          padding: 16px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
        ">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 35px; height: 35px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.3 0 .6-.1.8-.3L14.1 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <div>
              <div style="font-size: 14px; font-weight: 600;">Mo's Assistant</div>
              <div style="font-size: 11px; opacity: 0.8;">Online now</div>
            </div>
          </div>
          <button onclick="toggleChat()" style="
            background: rgba(255,255,255,0.2) !important;
            border: none !important;
            color: white !important;
            width: 28px !important;
            height: 28px !important;
            border-radius: 4px !important;
            cursor: pointer !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          ">×</button>
        </div>
        
        <!-- Call Banner -->
        <div style="
          background: #f0fdf4 !important;
          color: #166534 !important;
          padding: 10px 16px !important;
          text-align: center !important;
          font-size: 13px !important;
        ">
          📞 <a href="tel:9495792057" style="color: #166534; font-weight: 600; text-decoration: none;">Call Mo: (949) 579-2057</a>
        </div>
        
        <!-- Messages -->
        <div id="messages" style="
          flex: 1 !important;
          overflow-y: auto !important;
          padding: 16px !important;
          background: #f9fafb !important;
        ">
          <div style="
            background: white !important;
            padding: 12px !important;
            border-radius: 12px !important;
            margin-bottom: 12px !important;
            border-left: 3px solid #2563eb !important;
            font-size: 14px !important;
            line-height: 1.4 !important;
          ">
            Hi! I'm Mo's AI assistant. I can help with:<br>
            • Current mortgage rates<br>
            • Loan programs & qualifications<br>
            • First-time buyer info<br>
            • Contact Mo directly<br><br>
            What can I help you with?
          </div>
        </div>
        
        <!-- Input -->
        <div style="
          padding: 16px !important;
          border-top: 1px solid #e5e7eb !important;
          background: white !important;
        ">
          <div style="display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
            <button onclick="sendMsg('rates')" style="
              background: #f3f4f6 !important;
              border: none !important;
              padding: 4px 8px !important;
              border-radius: 12px !important;
              font-size: 11px !important;
              cursor: pointer !important;
            ">Rates</button>
            <button onclick="sendMsg('contact')" style="
              background: #f3f4f6 !important;
              border: none !important;
              padding: 4px 8px !important;
              border-radius: 12px !important;
              font-size: 11px !important;
              cursor: pointer !important;
            ">Contact</button>
            <button onclick="sendMsg('programs')" style="
              background: #f3f4f6 !important;
              border: none !important;
              padding: 4px 8px !important;
              border-radius: 12px !important;
              font-size: 11px !important;
              cursor: pointer !important;
            ">Programs</button>
          </div>
          <div style="display: flex; gap: 8px;">
            <input id="chat-input" type="text" placeholder="Type here..." style="
              flex: 1 !important;
              border: 1px solid #d1d5db !important;
              border-radius: 20px !important;
              padding: 8px 12px !important;
              font-size: 13px !important;
              outline: none !important;
            " onkeypress="if(event.key==='Enter') sendMsg()">
            <button onclick="sendMsg()" style="
              background: #2563eb !important;
              color: white !important;
              border: none !important;
              border-radius: 50% !important;
              width: 36px !important;
              height: 36px !important;
              cursor: pointer !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            ">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Insert into body
  document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  console.log('Chatbot injected successfully');
});

// Global functions
window.toggleChat = function() {
  const btn = document.getElementById('chat-btn');
  const window_el = document.getElementById('chat-window');
  
  if (window_el.style.display === 'none' || !window_el.style.display) {
    window_el.style.display = 'flex';
    btn.style.transform = 'scale(0.9)';
  } else {
    window_el.style.display = 'none';
    btn.style.transform = 'scale(1)';
  }
};

window.sendMsg = function(preset) {
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('messages');
  
  let message = preset || input.value.trim();
  if (!message) return;
  
  // Add user message
  const userMsg = document.createElement('div');
  userMsg.style.cssText = `
    text-align: right !important;
    margin: 8px 0 !important;
  `;
  userMsg.innerHTML = \`<div style="
    display: inline-block !important;
    background: #2563eb !important;
    color: white !important;
    padding: 8px 12px !important;
    border-radius: 12px !important;
    font-size: 13px !important;
    max-width: 70% !important;
  ">\${message}</div>\`;
  messages.appendChild(userMsg);
  
  // Clear input
  input.value = '';
  
  // Add bot response
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.style.cssText = 'margin: 8px 0 !important;';
    
    let response = '';
    if (message.includes('rate') || message === 'rates') {
      response = 'Current rates: 30-year fixed ~6.53%, 15-year ~5.88%, FHA ~6.09%. Call Mo at (949) 579-2057 for personalized quotes!';
    } else if (message.includes('contact') || message === 'contact') {
      response = 'Reach Mo directly: (949) 579-2057 (call/text). NMLS #1426884. Available 24/7!';
    } else if (message.includes('program') || message === 'programs') {
      response = 'Available: FHA (3.5% down), VA ($0 down), Conventional, Jumbo, HELOC, Non-QM. What fits your needs?';
    } else {
      response = 'Great question! Mo can help with that. Call (949) 579-2057 for personalized assistance!';
    }
    
    botMsg.innerHTML = \`<div style="
      background: white !important;
      padding: 8px 12px !important;
      border-radius: 12px !important;
      border-left: 3px solid #2563eb !important;
      font-size: 13px !important;
      max-width: 80% !important;
      line-height: 1.3 !important;
    ">\${response}</div>\`;
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 1000);
  
  messages.scrollTop = messages.scrollHeight;
};

console.log('Chatbot script loaded completely');