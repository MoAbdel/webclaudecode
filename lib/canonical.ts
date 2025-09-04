/**
 * Utility functions for generating canonical URLs and dynamic metadata
 */

const BASE_URL = 'https://www.mothebroker.com';

/**
 * Generate a canonical URL for the current page
 */
export function generateCanonicalUrl(pathname: string): string {
  // Remove trailing slash except for root
  const cleanPath = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${BASE_URL}${cleanPath}`;
}

/**
 * Generate page-specific metadata with dynamic canonical URL
 */
export function generatePageMetadata(config: {
  title: string;
  description: string;
  pathname: string;
  keywords?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
  };
}) {
  const { title, description, pathname, keywords, openGraph } = config;
  
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: generateCanonicalUrl(pathname),
    },
    openGraph: {
      title: openGraph?.title || title,
      description: openGraph?.description || description,
      type: openGraph?.type || 'website',
      url: generateCanonicalUrl(pathname),
      siteName: 'Mo Abdel - Orange County Mortgage Broker',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraph?.title || title,
      description: openGraph?.description || description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Common page templates for consistent metadata generation
 */
export const PAGE_TEMPLATES = {
  loanProgram: (program: string, pathname: string) => ({
    title: `${program} | Mo Abdel - Orange County Mortgage Broker`,
    description: `${program} in Orange County with competitive rates and fast closing. Licensed mortgage broker NMLS #1426884 serving all of Orange County.`,
    pathname,
  }),
  
  cityPage: (city: string, pathname: string) => ({
    title: `${city} Mortgage Broker | Mo Abdel NMLS #1426884`,
    description: `Mortgage broker serving ${city}. Access 200+ lenders for competitive rates on home loans, refinancing, FHA, VA loans. Licensed NMLS #1426884.`,
    pathname,
  }),
  
  guide: (topic: string, pathname: string) => ({
    title: `${topic} | Mo Abdel - Orange County Mortgage Broker`,
    description: `Complete guide to ${topic.toLowerCase()} in Orange County. Expert insights from licensed mortgage broker Mo Abdel, NMLS #1426884.`,
    pathname,
  }),
  
  calculator: (type: string, pathname: string) => ({
    title: `${type} Calculator | Orange County Mortgage Tools`,
    description: `Free ${type.toLowerCase()} calculator for Orange County home buyers. Get accurate estimates from licensed mortgage broker Mo Abdel, NMLS #1426884.`,
    pathname,
  }),
  
  resource: (resource: string, pathname: string) => ({
    title: `${resource} | Orange County Mortgage Resources`,
    description: `${resource} for Orange County homebuyers and homeowners. Professional guidance from licensed mortgage broker Mo Abdel, NMLS #1426884.`,
    pathname,
  }),
};

/**
 * Generate metadata for area/city pages
 */
export function generateCityMetadata(city: string, pathname: string, type: 'broker' | 'rates' = 'broker') {
  const baseTitle = type === 'rates' 
    ? `${city} Mortgage Rates | Current Rates & Programs`
    : `${city} Mortgage Broker | Mo Abdel NMLS #1426884`;
    
  const baseDescription = type === 'rates'
    ? `Current mortgage rates in ${city}. Compare FHA, VA, conventional and jumbo loan rates. Licensed broker Mo Abdel, NMLS #1426884.`
    : `Mortgage broker serving ${city}. Access 200+ lenders for competitive rates on home loans, refinancing, FHA, VA loans. Licensed NMLS #1426884.`;

  return generatePageMetadata({
    title: baseTitle,
    description: baseDescription,
    pathname,
    keywords: `${city} mortgage broker, ${city} mortgage rates, ${city} home loans, Orange County mortgage broker`,
  });
}