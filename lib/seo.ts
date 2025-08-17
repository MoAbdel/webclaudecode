export const seoData = {
  Home: { 
    title: "Mo Abdel | Mortgage Broker Orange County | NMLS #1426884", 
    description: "Get competitive mortgage rates from 200+ lenders. Serving Orange County & beyond with fast closings, unbiased advice, and flexible home loan programs. Expert guidance on FHA, VA, jumbo loans, and HELOC options." 
  },
  About: { 
    title: "About Mo Abdel | NEXA Mortgage Broker", 
    description: "Meet Mo Abdel – licensed mortgage broker helping clients in CA, WA, VA & CO get better rates, faster approvals, and more loan options. Specializing in Orange County home loans with access to 200+ lenders." 
  },
  Programs: { 
    title: "Loan Programs | FHA, VA, Jumbo & HELOC – Orange County Mortgage Broker", 
    description: "Explore FHA, VA, Jumbo, and HELOC options. Mo Abdel finds the right mortgage for your goals with competitive rates & flexible terms." 
  },
  Calculator: { 
    title: "Mortgage Rate Calculator | Compare Loan Options in Orange County", 
    description: "Use our free mortgage rate calculator to estimate your monthly payments, compare loan types, and explore refinancing options." 
  },
  Contact: { 
    title: "Contact Mo Abdel | Apply for a Home Loan in Orange County", 
    description: "Start your mortgage application with Mo Abdel. Serving Orange County & beyond with personalized loan solutions and competitive rates." 
  }
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": ["FinancialService", "LocalBusiness", "MortgageBroker"],
  "name": "Mo Abdel - Mortgage Broker",
  "alternateName": "Mo The Broker",
  "serviceType": ["Mortgage Broker", "Home Loan Specialist", "Mortgage Consultant"],
  "hasCredential": "NMLS #1426884",
  "provider": {
    "@type": "Person",
    "name": "Mo Abdel",
    "jobTitle": "Licensed Mortgage Broker",
    "hasCredential": "NMLS #1426884",
    "worksFor": {
      "@type": "Organization",
      "name": "NEXA Mortgage",
      "hasCredential": "Licensed Mortgage Company"
    }
  },
  "areaServed": [
    {
      "@type": "City", 
      "name": "Irvine, CA"
    },
    {
      "@type": "City", 
      "name": "Newport Beach, CA"
    },
    {
      "@type": "City", 
      "name": "Costa Mesa, CA"
    },
    {
      "@type": "City", 
      "name": "Huntington Beach, CA"
    },
    {
      "@type": "City", 
      "name": "Mission Viejo, CA"
    },
    {
      "@type": "City", 
      "name": "Anaheim, CA"
    },
    {
      "@type": "City", 
      "name": "Santa Ana, CA"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Orange County, CA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "California"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA",
    "addressCountry": "US",
    "postalCode": "92602"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.6846",
    "longitude": "-117.8265"
  },
  "telephone": "+1-949-579-2057",
  "url": "https://mothebroker.com",
  "sameAs": [
    "https://www.linkedin.com/in/moabdel",
    "https://www.facebook.com/profile.php?id=61573517340174",
    "https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest",
    "https://mothebroker.com"
  ],
  "priceRange": "$$",
  "description": "Licensed mortgage broker near me in Orange County, CA. Serving local homebuyers with access to over 200 lenders for competitive mortgage rates on home loans and refinancing. NMLS #1426884. Call (949) 579-2057 for local mortgage expertise.",
  "image": "https://mothebroker.com/images/moabdel-headshot-final.png",
  "logo": "https://mothebroker.com/images/mo-logo-white.webp",
  "openingHours": ["Mo 08:00-20:00", "Tu 08:00-20:00", "We 08:00-20:00", "Th 08:00-20:00", "Fr 08:00-20:00", "Sa 09:00-18:00", "Su 10:00-16:00"],
  "paymentAccepted": ["Cash", "Check", "Wire Transfer", "ACH"],
  "currenciesAccepted": "USD",
  "keywords": "mortgage broker near me, Orange County mortgage broker, home loans, refinancing, FHA loans, VA loans, competitive mortgage rates"
};

export const mortgageLoanSchema = {
  "@context": "https://schema.org",
  "@type": "LoanOrCredit",
  "name": "Orange County Mortgage Loans",
  "description": "FHA, VA, Conventional, Jumbo, and HELOC loans with competitive rates in Orange County, CA",
  "provider": {
    "@type": "FinancialService",
    "name": "Mo Abdel - Mortgage Broker",
    "serviceType": "Mortgage Broker"
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
    },
    {
      "@type": "Offer",
      "name": "Conventional Loans",
      "description": "Traditional home financing with down payments as low as 3%",
      "url": "/conventional-loans-orange-county"
    },
    {
      "@type": "Offer",
      "name": "Non-QM Loans",
      "description": "Alternative documentation loans for self-employed and investors",
      "url": "/non-qm-loans-orange-county"
    },
    {
      "@type": "Offer",
      "name": "HELOAN",
      "description": "Fixed-rate home equity loan with lump sum funding",
      "url": "/heloan-orange-county"
    },
    {
      "@type": "Offer",
      "name": "Rate & Term Refinance",
      "description": "Lower your mortgage rate or eliminate PMI with refinancing",
      "url": "/rate-term-refinance-orange-county"
    }
  ]
};

export type PageName = keyof typeof seoData;