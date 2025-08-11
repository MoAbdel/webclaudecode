export const seoData = {
  Home: { 
    title: "Mo Abdel | Wholesale Mortgage Broker in Orange County, CA | NMLS #1426884", 
    description: "Looking for competitive wholesale mortgage rates in Orange County? Mo Abdel offers personalized home loan solutions with expert wholesale mortgage guidance. Get pre-approved today!" 
  },
  About: { 
    title: "About Mo The Broker | NEXA Wholesale Mortgage Broker in California", 
    description: "Meet Mo The Broker – licensed wholesale mortgage broker helping clients in CA, WA, VA & CO get better rates, faster approvals, and more loan options." 
  },
  Programs: { 
    title: "Loan Programs | FHA, VA, Jumbo & HELOC – Orange County Mortgage Broker", 
    description: "Explore FHA, VA, Jumbo, and HELOC options. Mo The Broker finds the right mortgage for your goals with wholesale rates & flexible terms." 
  },
  Calculator: { 
    title: "Mortgage Rate Calculator | Compare Loan Options in Orange County", 
    description: "Use our free mortgage rate calculator to estimate your monthly payments, compare loan types, and explore refinancing options." 
  },
  Contact: { 
    title: "Contact Mo The Broker | Apply for a Home Loan in Orange County", 
    description: "Start your mortgage application with Mo The Broker. Serving Orange County & beyond with personalized loan solutions and competitive wholesale rates." 
  }
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": ["FinancialService", "LocalBusiness"],
  "name": "Mo The Broker - Wholesale Mortgage",
  "serviceType": "Wholesale Mortgage Broker",
  "provider": {
    "@type": "Person",
    "name": "Mo Abdel",
    "jobTitle": "Wholesale Mortgage Broker",
    "worksFor": {
      "@type": "Organization",
      "name": "NEXA Mortgage"
    }
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea", 
      "name": "Orange County, CA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "California"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Washington"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Virginia" 
    },
    {
      "@type": "AdministrativeArea",
      "name": "Colorado"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "telephone": "+1-949-579-2057",
  "url": "https://mothebroker.com",
  "priceRange": "$$",
  "description": "Licensed wholesale mortgage broker serving Orange County, CA and beyond, providing access to over 200 lenders for competitive wholesale mortgage rates on home loans and refinancing. NMLS #1426884.",
  "image": "/images/mo-headshot.webp",
  "openingHours": "Mo-Su 08:00-20:00",
  "paymentAccepted": ["Cash", "Check", "Wire Transfer"],
  "currenciesAccepted": "USD"
};

export const mortgageLoanSchema = {
  "@context": "https://schema.org",
  "@type": "LoanOrCredit",
  "name": "Orange County Wholesale Mortgage Loans",
  "description": "FHA, VA, Conventional, Jumbo, and HELOC loans with wholesale rates in Orange County, CA",
  "provider": {
    "@type": "FinancialService",
    "name": "Mo The Broker - Wholesale Mortgage",
    "serviceType": "Wholesale Mortgage Broker"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "FHA Loans",
      "description": "Low down payment FHA loans with as little as 3.5% down",
      "url": "/fha-loans-orange-county"
    },
    {
      "@type": "Offer", 
      "name": "VA Loans",
      "description": "Zero down VA loans for veterans and military families",
      "url": "/va-loans-orange-county"
    },
    {
      "@type": "Offer",
      "name": "HELOC",
      "description": "Home Equity Line of Credit with flexible access to funds",
      "url": "/heloc-orange-county"
    }
  ]
};

export type PageName = keyof typeof seoData;