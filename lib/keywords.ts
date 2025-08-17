// Comprehensive keyword list for Orange County mortgage broker SEO optimization

export const PRIMARY_KEYWORDS = [
  // Core mortgage broker terms
  'mortgage broker',
  'home loans',
  'refinancing',
  'mortgage rates',
  'loan officer',
  
  // Geographic terms  
  'Orange County mortgage',
  'OC mortgage broker',
  'Southern California loans',
  'Irvine mortgage',
  'Newport Beach loans',
  
  // Loan type keywords
  'FHA loans',
  'VA loans', 
  'conventional loans',
  'jumbo loans',
  'first time buyer loans'
];

export const SECONDARY_KEYWORDS = [
  // Process-related
  'mortgage pre-approval',
  'home buying process',
  'refinance rates',
  'cash out refinance',
  'rate and term refinance',
  
  // Competitive advantage
  'competitive lender access',
  'competitive mortgage rates',
  'fast closing',
  'no lender fees',
  'NMLS licensed broker',
  
  // Local market
  'Orange County housing market',
  'CA home prices',
  'local mortgage expert',
  'neighborhood lending specialist',
  'OC real estate financing'
];

export const LONG_TAIL_KEYWORDS = [
  // Question-based (voice search optimization)
  'best mortgage broker Orange County',
  'how to get pre-approved for mortgage',
  'what are current mortgage rates',
  'should I refinance my home',
  'first time home buyer programs California',
  
  // City-specific long tail
  'mortgage broker near me Irvine',
  'home loans Newport Beach CA', 
  'refinancing Huntington Beach',
  'FHA loans Costa Mesa',
  'VA loans Mission Viejo',
  
  // Service-specific
  'investment property loans Orange County',
  'self employed mortgage broker',
  'bank statement loans California',
  'non-QM loans OC',
  'HELOC Orange County'
];

export const BRAND_KEYWORDS = [
  'Mo The Broker',
  'Mo Abdel mortgage',
  'NEXA Mortgage Orange County',
  'NMLS 1426884',
  'mortgage hacker',
  'better rates faster closing'
];

// Combined keyword arrays for different use cases
export const ALL_KEYWORDS = [
  ...PRIMARY_KEYWORDS,
  ...SECONDARY_KEYWORDS, 
  ...LONG_TAIL_KEYWORDS,
  ...BRAND_KEYWORDS
];

export const SEO_OPTIMIZED_KEYWORDS = [
  ...PRIMARY_KEYWORDS,
  ...SECONDARY_KEYWORDS.slice(0, 10), // Top 10 secondary
  ...LONG_TAIL_KEYWORDS.slice(0, 5)   // Top 5 long tail
];

// City-specific keyword generator
export const generateCityKeywords = (cityName: string) => {
  return [
    `${cityName} mortgage broker`,
    `mortgage broker ${cityName}`,
    `home loans ${cityName}`,
    `${cityName} refinancing`, 
    `FHA loans ${cityName}`,
    `VA loans ${cityName}`,
    `mortgage rates ${cityName}`,
    `first time buyer ${cityName}`,
    `${cityName} home financing`,
    `${cityName} loan officer`,
    `best mortgage broker ${cityName}`,
    `${cityName} mortgage expert`
  ];
};

// Keyword density optimization helpers
export const getKeywordDensity = (content: string, keyword: string): number => {
  const words = content.toLowerCase().split(/\s+/);
  const keywordWords = keyword.toLowerCase().split(/\s+/);
  let count = 0;
  
  for (let i = 0; i <= words.length - keywordWords.length; i++) {
    const slice = words.slice(i, i + keywordWords.length).join(' ');
    if (slice === keyword.toLowerCase()) {
      count++;
    }
  }
  
  return (count / words.length) * 100;
};

export const optimizeKeywordPlacement = (title: string, keywords: string[]): string => {
  // Ensure primary keyword appears in first 60 characters of title
  const primaryKeyword = keywords[0];
  if (!title.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    return `${primaryKeyword} | ${title}`;
  }
  return title;
};

// Meta description optimization
export const optimizeMetaDescription = (description: string, keywords: string[]): string => {
  let optimized = description;
  
  // Ensure it includes 2-3 primary keywords naturally
  keywords.slice(0, 3).forEach(keyword => {
    if (!optimized.toLowerCase().includes(keyword.toLowerCase())) {
      optimized = optimized.replace('.', `, ${keyword}.`);
    }
  });
  
  // Keep under 160 characters
  if (optimized.length > 160) {
    optimized = optimized.substring(0, 157) + '...';
  }
  
  return optimized;
};