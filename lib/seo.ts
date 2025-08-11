export const seoData = {
  Home: { 
    title: "Mo Abdel | Wholesale Mortgage Broker in Orange County, CA | NMLS #1426884", 
    description: "Looking for competitive wholesale mortgage rates in Orange County? Mo Abdel offers personalized home loan solutions with expert wholesale mortgage guidance. Get pre-approved today!" 
  },
  About: { 
    title: "About Mo Abdel | Trusted Orange County Wholesale Mortgage Professional", 
    description: "As a wholesale mortgage broker, Mo Abdel helps Orange County residents strategize their home financial goals. Learn about my commitment to excellence." 
  },
  Programs: { 
    title: "Wholesale Mortgage Loan Programs | FHA, VA & Conventional Loans | Orange County", 
    description: "Explore a wide range of wholesale mortgage loan programs in Orange County, including FHA, VA, Jumbo, and Conventional loans. Find the perfect fit for your needs." 
  },
  Calculator: { 
    title: "Wholesale Mortgage Calculators | Estimate Payments & Affordability | Orange County", 
    description: "Use our free wholesale mortgage calculators to estimate your monthly payments, home affordability, and potential refinance savings in the Orange County market." 
  },
  Contact: { 
    title: "Contact Mo Abdel | Orange County Wholesale Mortgage Expert | (949) 579-2057", 
    description: "Ready to discuss your wholesale mortgage options? Contact Mo Abdel, your local Orange County wholesale mortgage expert, for a free consultation. Call (949) 579-2057 today." 
  }
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Mo The Broker - Wholesale Mortgage",
  "serviceType": "Wholesale Mortgage Broker",
  "provider": {
    "@type": "Person",
    "name": "Mo Abdel"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Orange County",
    "sameAs": "https://en.wikipedia.org/wiki/Orange_County,_California"
  },
  "telephone": "+1-949-579-2057",
  "url": "/",
  "priceRange": "$$",
  "description": "Wholesale mortgage broker serving Orange County, CA, providing access to over 200 lenders for competitive wholesale mortgage rates on home loans and refinancing.",
  "image": "/images/mo-headshot.webp"
};

export type PageName = keyof typeof seoData;