// Comprehensive Q&A database for Mo Abdel Mortgage Broker AI Chatbot

export interface ChatResponse {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
  followUp?: string[];
}

export const chatbotResponses: ChatResponse[] = [
  // Contact & General Info
  {
    question: "How can I contact Mo?",
    answer: "You can reach Mo Abdel directly at (949) 579-2057 (call or text anytime). He's available 24/7 and typically responds within 1 business day. You can also use the contact form on the website. Mo is a licensed mortgage broker (NMLS #1426884) with NEXA Mortgage.",
    category: "contact",
    keywords: ["contact", "phone", "call", "reach", "number", "text", "email"],
    followUp: ["What are Mo's business hours?", "Can I text instead of call?"]
  },
  {
    question: "What areas do you serve?",
    answer: "I serve all of Orange County including Irvine, Newport Beach, Huntington Beach, Costa Mesa, Mission Viejo, Anaheim, Santa Ana, Fullerton, Laguna Beach, Lake Forest, and all surrounding communities. I'm based in Lake Forest but work with clients throughout Orange County.",
    category: "general",
    keywords: ["areas", "serve", "location", "cities", "orange county", "irvine", "newport"],
    followUp: ["Do you work with out-of-state buyers?", "Can you help with investment properties?"]
  },
  {
    question: "What makes you different from banks?",
    answer: "As a mortgage broker, I work for you, not a bank. I have access to 200+ lenders and can shop for the best rates and terms. Banks can only offer their own products. I typically close loans in 18 days (vs 30-45 at banks) and save clients an average of $10,000+ over the loan life through wholesale rates.",
    category: "general",
    keywords: ["different", "bank", "broker", "vs", "better", "advantage"],
    followUp: ["How much can I save?", "How fast can you close?"]
  },

  // Rates & Pricing
  {
    question: "What are current mortgage rates?",
    answer: "Current rates vary by loan type and credit score. Today's rates are approximately: 30-year fixed at 6.00%, 15-year fixed at 5.46%, FHA at 5.74%, VA at 5.76%, and Jumbo at 6.00%. These are sample rates - your actual rate depends on credit score, down payment, and loan specifics. Call (949) 579-2057 for your personalized rate quote with no obligation.",
    category: "rates",
    keywords: ["rates", "interest", "current", "today", "apr", "percentage"],
    followUp: ["What affects my rate?", "Can I lock my rate?"]
  },
  {
    question: "What affects my mortgage rate?",
    answer: "Key factors include: Credit score (740+ gets best rates), down payment amount (larger = better rates), loan type (conventional, FHA, VA, jumbo), property type (primary home gets best rates), and debt-to-income ratio. I'll help optimize these factors to get you the best rate possible.",
    category: "rates",
    keywords: ["affects", "rate", "factors", "credit", "down payment"],
    followUp: ["What credit score do I need?", "How much down payment is required?"]
  },

  // Loan Programs
  {
    question: "What loan programs do you offer?",
    answer: "I offer all major programs: FHA (3.5% down, 580+ credit), VA ($0 down for veterans), Conventional (3-20% down), Jumbo (for loans over $1,089,300), HELOC (access home equity), Non-QM (bank statement/asset-based), and Investment Property loans (DSCR, fix & flip). Each has unique benefits - let's discuss which fits your needs.",
    category: "programs",
    keywords: ["programs", "loans", "types", "offer", "fha", "va", "conventional", "jumbo"],
    followUp: ["What's the minimum down payment?", "Which program is best for me?"]
  },
  {
    question: "What is an FHA loan?",
    answer: "FHA loans are government-backed mortgages perfect for first-time buyers or those with less-than-perfect credit. Benefits include: 3.5% minimum down payment, credit scores as low as 580 accepted, flexible qualification requirements, and competitive interest rates. The 2025 FHA loan limit in Orange County is $1,089,300.",
    category: "programs",
    keywords: ["fha", "first time", "3.5", "government"],
    followUp: ["Do I qualify for FHA?", "What are FHA loan limits?"]
  },
  {
    question: "What are VA loan benefits?",
    answer: "VA loans offer incredible benefits for veterans and active military: $0 down payment required, no PMI (mortgage insurance), competitive interest rates, flexible credit requirements, and assumable loans. The 2025 VA loan limit in Orange County is $1,089,300 with no down payment required.",
    category: "programs",
    keywords: ["va", "veteran", "military", "zero down", "0 down"],
    followUp: ["Am I eligible for VA?", "Can I use VA loan twice?"]
  },
  {
    question: "What is a jumbo loan?",
    answer: "Jumbo loans are for amounts exceeding $1,089,300 in Orange County. Given our median home price of $1.2M, many buyers need jumbo financing. I specialize in jumbo loans up to $3M with competitive rates, often better than big banks. Typically require 10-20% down and strong credit (700+).",
    category: "programs",
    keywords: ["jumbo", "luxury", "high", "million", "expensive"],
    followUp: ["What's the jumbo loan limit?", "What down payment for jumbo?"]
  },
  {
    question: "What is a HELOC?",
    answer: "A HELOC (Home Equity Line of Credit) lets you access your home's equity as a flexible credit line. Borrow what you need, when you need it, and only pay interest on what you use. Current rates start at Prime + 0%. You can access up to 80-90% of your home's value minus existing mortgage. Perfect for renovations, debt consolidation, or investments.",
    category: "programs",
    keywords: ["heloc", "equity", "line of credit", "second mortgage", "cash out"],
    followUp: ["How much can I borrow with HELOC?", "What are HELOC rates?"]
  },

  // Down Payment & Qualification
  {
    question: "What's the minimum down payment?",
    answer: "Minimum down payment varies by program: VA loans = 0% down for eligible veterans, FHA = 3.5% down with 580+ credit score, Conventional = 3% for first-time buyers (5% standard), Jumbo = typically 10-20% down, Non-QM = 10-30% depending on program. Down payment assistance programs may be available for qualified buyers. Gift funds from family are often acceptable.",
    category: "qualification",
    keywords: ["down payment", "minimum", "deposit", "upfront", "cash"],
    followUp: ["Can I use gift funds?", "Are there down payment assistance programs?"]
  },
  {
    question: "What credit score do I need?",
    answer: "I have options for all credit situations through my 200+ lenders: FHA accepts scores as low as 580, VA is flexible for veterans, Conventional typically needs 620+, best rates available for 740+, and Non-QM programs can work with scores as low as 500. Don't let credit concerns stop you - let's explore your options.",
    category: "qualification",
    keywords: ["credit score", "fico", "credit", "minimum", "required"],
    followUp: ["Can you help improve my credit?", "What if I have bad credit?"]
  },
  {
    question: "Can I qualify if self-employed?",
    answer: "Absolutely! I specialize in self-employed borrowers with multiple options: Bank Statement loans (use 12-24 months statements instead of tax returns), P&L Statement loans (CPA-prepared), Asset-Based loans (qualify using liquid assets), and DSCR loans for investment properties. Many self-employed clients find better options through brokers than banks.",
    category: "qualification",
    keywords: ["self employed", "business owner", "1099", "contractor", "freelance"],
    followUp: ["What documents do I need?", "How is income calculated?"]
  },
  {
    question: "What documents do I need?",
    answer: "Standard documents include: 2 recent pay stubs (W-2 employees), 2 years tax returns, 2 months bank statements, ID and Social Security card. Self-employed may need 12-24 months bank statements or P&L statements. I'll provide a detailed checklist and help gather everything needed.",
    category: "qualification",
    keywords: ["documents", "paperwork", "needed", "require", "application"],
    followUp: ["When do I need documents?", "Can I submit electronically?"]
  },

  // Process & Timeline
  {
    question: "How long does the process take?",
    answer: "My average closing time is just 18 days, much faster than the 30-45 days at most banks. Timeline: Pre-approval in 24 hours or less, full application in 1-2 days, processing/underwriting in 10-14 days, and closing appointment. My dedicated team and 200+ lender network enable this speed.",
    category: "process",
    keywords: ["how long", "timeline", "days", "closing", "process", "fast"],
    followUp: ["Can you close faster?", "What causes delays?"]
  },
  {
    question: "What is pre-approval?",
    answer: "Pre-approval is a lender's commitment to loan you a specific amount based on verified financial information. It shows sellers you're a serious, qualified buyer and strengthens your offer. I can pre-approve you in 24 hours or less. Pre-approval is free and gives you a competitive edge in Orange County's market.",
    category: "process",
    keywords: ["preapproval", "pre-approval", "prequalified", "approved"],
    followUp: ["How do I get pre-approved?", "Is pre-approval guaranteed?"]
  },
  {
    question: "Is pre-approval guaranteed?",
    answer: "Pre-approval is a conditional commitment based on the information you provide and initial underwriting review. Final loan approval requires: property appraisal meeting value requirements, no significant changes to your financial situation, verification of all documentation, and clear title on the property. While not 100% guaranteed, my pre-approvals have a very high success rate because I thoroughly verify everything upfront. I'll be transparent about any potential issues early in the process.",
    category: "process",
    keywords: ["preapproval", "guaranteed", "final", "approval", "conditional"],
    followUp: ["What could cause denial after pre-approval?", "How solid is pre-approval?"]
  },
  {
    question: "What are closing costs?",
    answer: "Closing costs in Orange County typically range from 2-5% of the loan amount. This includes appraisal ($500-800), title insurance, escrow fees, lender fees, and recording fees. I provide detailed estimates upfront with no hidden surprises. Some programs like HELOCs may have no closing costs.",
    category: "process",
    keywords: ["closing costs", "fees", "settlement", "escrow"],
    followUp: ["Can seller pay closing costs?", "Can I roll costs into loan?"]
  },

  // Refinancing
  {
    question: "Should I refinance?",
    answer: "Refinancing makes sense if you can lower your rate by 0.5% or more, want to eliminate PMI, need to access equity (cash-out), or want to change loan terms. With current rates, many homeowners can benefit. I'll analyze your situation free - a 10-minute call could save you thousands. Call (949) 579-2057.",
    category: "refinance",
    keywords: ["refinance", "refi", "lower rate", "cash out"],
    followUp: ["What are refinance rates?", "How much can I cash out?"]
  },
  {
    question: "What refinance options exist?",
    answer: "Main refinance options: Rate-and-term (lower your rate/change terms), Cash-out (access up to 80% of home value), HELOC (flexible credit line), and FHA/VA Streamline (simplified for existing FHA/VA loans). Each serves different needs - let's discuss which maximizes your benefit.",
    category: "refinance",
    keywords: ["refinance options", "types", "cash out", "rate term"],
    followUp: ["Which refinance is best?", "What are requirements?"]
  },

  // Investment Properties
  {
    question: "Do you finance investment properties?",
    answer: "Yes! I specialize in investment property financing: DSCR loans (qualify on rental income, not personal income), Conventional investment (25% down), Fix & Flip loans (short-term, fast closing), Portfolio loans for multiple properties. Many investors prefer brokers for better rates and creative financing options.",
    category: "investment",
    keywords: ["investment", "rental", "property", "dscr", "investor"],
    followUp: ["What is a DSCR loan?", "How much down for investment?"]
  },
  {
    question: "What is a DSCR loan?",
    answer: "DSCR (Debt Service Coverage Ratio) loans qualify based on the property's rental income covering the mortgage payment, not your personal income. Perfect for real estate investors building portfolios. No tax returns or employment verification needed. I offer DSCR loans with 20-25% down for qualified properties.",
    category: "investment",
    keywords: ["dscr", "debt service", "rental income", "investment"],
    followUp: ["Do I qualify for DSCR?", "What properties qualify?"]
  },

  // Non-QM & Special Programs
  {
    question: "What are Non-QM loans?",
    answer: "Non-QM (Non-Qualified Mortgage) loans use alternative documentation for those who don't fit traditional lending. Perfect for: self-employed, complex income, recent credit events, foreign nationals, or high net worth individuals. Options include bank statement, asset-based, and P&L programs. These fill the gap when traditional loans don't work.",
    category: "special",
    keywords: ["non-qm", "non qm", "alternative", "bank statement", "stated"],
    followUp: ["Do I qualify for Non-QM?", "What are Non-QM rates?"]
  },
  {
    question: "Can foreign nationals get mortgages?",
    answer: "Yes! I offer Foreign National loan programs requiring: 30-40% down payment, no US credit required, international income acceptable, and ITIN or passport for ID. Many international buyers invest in Orange County real estate. These programs make it possible without US credit history.",
    category: "special",
    keywords: ["foreign", "national", "international", "non-resident", "visa"],
    followUp: ["What documents for foreign nationals?", "What down payment needed?"]
  },

  // Orange County Specific
  {
    question: "What are Orange County loan limits?",
    answer: "2025 Orange County loan limits: Conventional/FHA/VA conforming limit is $1,089,300 for single-family homes. Loans above this are jumbo loans. With Orange County's median home price at $1.2M, many buyers need jumbo financing. I specialize in both conforming and jumbo loans with excellent rates.",
    category: "local",
    keywords: ["loan limits", "orange county", "conforming", "maximum", "2025"],
    followUp: ["What if I need more?", "What are jumbo requirements?"]
  },
  {
    question: "Why use a local Orange County broker?",
    answer: "Local expertise matters: I understand Orange County's unique market ($1.2M median price), have relationships with local agents and escrow, know area-specific programs and grants, understand local employment/income patterns, and can meet in person when needed. Big banks and online lenders can't match this local advantage.",
    category: "local",
    keywords: ["local", "orange county", "area", "regional"],
    followUp: ["What areas do you know best?", "Do you work with local agents?"]
  },

  // First-Time Buyers
  {
    question: "Do you help first-time buyers?",
    answer: "Absolutely! First-time buyers are a specialty. I offer: low down payment options (3-3.5%), first-time buyer programs and grants, gift fund assistance, step-by-step guidance, and educational support. Many first-time buyers are surprised they qualify. Free consultation to explore your options - call (949) 579-2057.",
    category: "firsttime",
    keywords: ["first time", "first-time", "new buyer", "never bought"],
    followUp: ["What programs for first-time buyers?", "How much do I need?"]
  },
  {
    question: "What first-time buyer programs exist?",
    answer: "Several programs help first-time buyers: FHA (3.5% down, flexible credit), Conventional 97 (3% down), VA (0% down for veterans), CalHFA programs (down payment assistance), and local Orange County grants. I'll identify all programs you qualify for and maximize your benefits.",
    category: "firsttime",
    keywords: ["first time programs", "assistance", "grants", "help"],
    followUp: ["Do I qualify as first-time?", "What's CalHFA?"]
  },

  // Quick Answers
  {
    question: "What's your NMLS number?",
    answer: "My NMLS number is 1426884. I'm a licensed mortgage broker with NEXA Mortgage LLC, the nation's largest mortgage brokerage. You can verify my license at www.nmlsconsumeraccess.org.",
    category: "contact",
    keywords: ["nmls", "license", "number", "1426884"],
    followUp: ["How can I verify your license?", "What is NEXA Mortgage?"]
  },
  {
    question: "Do you charge fees?",
    answer: "Initial consultations and rate quotes are completely FREE. I'm compensated by the lender at closing, so there's no upfront cost for my services. My wholesale rates often result in lower overall costs than going directly to a bank.",
    category: "general",
    keywords: ["fees", "charge", "cost", "free", "consultation"],
    followUp: ["What are typical closing costs?", "When do I pay?"]
  },
  {
    question: "Can you beat my bank's rate?",
    answer: "I often find better rates through my 200+ wholesale lenders compared to retail banks. However, rates depend on many factors including credit score, down payment, and loan type. I'd be happy to provide a free rate comparison to see if I can save you money. No obligation to proceed. Call (949) 579-2057 for your personalized comparison.",
    category: "rates",
    keywords: ["beat", "match", "better", "lower", "compete"],
    followUp: ["How much can I save?", "Will you match rates?"]
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Call or text me at (949) 579-2057 for a free consultation. I'll discuss your goals, review your situation, provide rate quotes, and get you pre-approved if ready. The whole process starts with a simple phone call. I'm available 24/7 and respond quickly.",
    category: "process",
    keywords: ["start", "begin", "get started", "apply", "first step"],
    followUp: ["What information do you need?", "How long for pre-approval?"]
  },

  // Additional follow-up questions that were missing
  {
    question: "Can I lock my rate?",
    answer: "Yes, you can lock your interest rate once you have an accepted offer on a property. Rate locks typically range from 30-60 days, with some lenders offering up to 90 days. Locking protects you from rate increases during the loan process. I'll advise on the best timing based on market conditions and your closing timeline.",
    category: "rates",
    keywords: ["lock", "rate lock", "guarantee", "fixed", "protect"],
    followUp: ["How long can I lock?", "What if rates drop after locking?"]
  },
  {
    question: "Can I use gift funds?",
    answer: "Yes, most loan programs allow gift funds for down payment and closing costs. FHA and VA accept 100% gift funds, Conventional loans allow gifts with proper documentation, and gifts must come from acceptable sources (family, employer, close friend). I'll help you document the gift properly with a gift letter and proof of transfer.",
    category: "qualification",
    keywords: ["gift", "funds", "family", "help", "down payment gift"],
    followUp: ["Who can give gift funds?", "How do I document gifts?"]
  },
  {
    question: "What could cause denial after pre-approval?",
    answer: "Common reasons for denial after pre-approval include: major purchases affecting debt-to-income ratio, job loss or income changes, new credit inquiries or accounts, property appraisal coming in low, issues discovered during underwriting, or undisclosed financial information. I help clients avoid these pitfalls by providing clear guidance on what not to do during the loan process.",
    category: "process",
    keywords: ["denial", "denied", "rejected", "pre-approval", "fail"],
    followUp: ["How to avoid denial?", "What if appraisal is low?"]
  },
  {
    question: "What are your business hours?",
    answer: "I'm available 24/7 to serve your needs! While standard business hours are Monday-Friday 9 AM to 6 PM, I understand buying a home doesn't follow a 9-5 schedule. Feel free to call or text (949) 579-2057 anytime. I typically respond within 1 hour during business hours and within 24 hours on weekends.",
    category: "contact",
    keywords: ["hours", "available", "when", "time", "schedule", "open"],
    followUp: ["Best time to call?", "Do you meet on weekends?"]
  },
  {
    question: "Will you match rates?",
    answer: "I'm committed to getting you the best rate possible. If you have a Loan Estimate from another lender, I'll review it and work to find equal or better terms through my 200+ lenders. Often, I can beat both the rate AND fees. Bring me any written quote for a free, no-obligation comparison.",
    category: "rates",
    keywords: ["match", "beat", "compete", "comparison", "lower"],
    followUp: ["What do you need to match?", "How to compare offers?"]
  },
  {
    question: "Do I qualify as first-time buyer?",
    answer: "You're considered a first-time buyer if you haven't owned a home in the past 3 years. This includes: never owning before, divorced individuals who haven't owned in 3+ years, and single parents who only owned with ex-spouse. First-time buyer status unlocks special programs with lower down payments and assistance options.",
    category: "firsttime",
    keywords: ["qualify", "first-time", "eligible", "count", "considered"],
    followUp: ["What first-time benefits exist?", "What if spouse owned before?"]
  },
  {
    question: "How much can I save with you?",
    answer: "Typical savings range from $5,000-$15,000 over the loan life through better rates and lower fees. On a $800,000 loan, just 0.25% rate difference saves $40,000+ over 30 years. Plus, my wholesale lender fees are often $2,000-$5,000 less than retail banks. I'll provide a detailed comparison showing your exact savings.",
    category: "rates",
    keywords: ["save", "savings", "money", "cost", "cheaper"],
    followUp: ["Can you guarantee savings?", "Show me the math?"]
  }
];

// Helper function to find best matching response
export function findBestResponse(query: string): ChatResponse | null {
  const normalizedQuery = query.toLowerCase();
  
  // First, try exact question match
  const exactMatch = chatbotResponses.find(
    r => r.question.toLowerCase() === normalizedQuery
  );
  if (exactMatch) return exactMatch;
  
  // Then, search by keywords
  let bestMatch: ChatResponse | null = null;
  let highestScore = 0;
  
  chatbotResponses.forEach(response => {
    let score = 0;
    
    // Check if query contains any keywords
    response.keywords.forEach(keyword => {
      if (normalizedQuery.includes(keyword)) {
        score += keyword.split(' ').length; // Multi-word keywords score higher
      }
    });
    
    // Check if query contains words from the question
    const questionWords = response.question.toLowerCase().split(' ');
    questionWords.forEach(word => {
      if (normalizedQuery.includes(word) && word.length > 3) {
        score += 0.5;
      }
    });
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = response;
    }
  });
  
  return highestScore > 0 ? bestMatch : null;
}

// Categories for organized display
export const chatCategories = [
  { id: 'general', name: 'General Information', icon: 'info' },
  { id: 'rates', name: 'Rates & Pricing', icon: 'dollar' },
  { id: 'programs', name: 'Loan Programs', icon: 'home' },
  { id: 'qualification', name: 'Qualification', icon: 'check' },
  { id: 'process', name: 'Process & Timeline', icon: 'clock' },
  { id: 'refinance', name: 'Refinancing', icon: 'refresh' },
  { id: 'investment', name: 'Investment Properties', icon: 'building' },
  { id: 'special', name: 'Special Programs', icon: 'star' },
  { id: 'local', name: 'Orange County', icon: 'map' },
  { id: 'firsttime', name: 'First-Time Buyers', icon: 'user' },
  { id: 'contact', name: 'Contact Info', icon: 'phone' }
];

// Quick action buttons for chatbot
export const quickActions = [
  { label: "Get Rate Quote", action: "What are current rates?" },
  { label: "Contact Mo", action: "How can I contact Mo?" },
  { label: "Loan Programs", action: "What loan programs do you offer?" },
  { label: "Get Pre-Approved", action: "How do I get pre-approved?" },
  { label: "Calculate Payment", action: "calculator" },
  { label: "First-Time Buyer", action: "Do you help first-time buyers?" }
];

// Fallback responses when no match found
export const fallbackResponses = [
  "I'd be happy to help with that! For personalized assistance, please call Mo directly at (949) 579-2057. He's available 24/7 and can answer your specific questions.",
  "That's a great question! Mo can provide detailed information about your specific situation. Call or text (949) 579-2057 for immediate assistance.",
  "I don't have specific information about that, but Mo would love to help! Reach out at (949) 579-2057 or use the contact form for a personalized response."
];

// Welcome message
export const welcomeMessage = `👋 Hi! I'm Mo's AI assistant. I can help you with:
• Current mortgage rates and programs
• Loan qualifications and requirements  
• First-time buyer information
• Refinancing options
• Or connect you directly with Mo

What can I help you with today?

📞 For personalized assistance: (949) 579-2057

*This is an automated assistant. Information provided is for educational purposes only and not a commitment to lend. All loans subject to underwriting approval. Rates and terms subject to change without notice.*`;