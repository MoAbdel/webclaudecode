import { Metadata } from 'next';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generateEnhancedMetadata({
  title = 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
  description = 'Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884.',
  keywords = 'Orange County mortgage broker, home loans, refinancing, FHA loans, VA loans, mortgage rates, NMLS licensed, lender access, competitive rates',
  canonicalUrl = 'https://mothebroker.com',
  ogImage = 'https://mothebroker.com/images/og-image-mothebroker.png',
  noindex = false
}: EnhancedSEOProps): Metadata {
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  
  return {
    title,
    description,
    keywords,
    robots,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Mo Abdel | Mortgage Broker',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@mothebroker',
      site: '@mothebroker',
    },
    other: {
      'author': 'Mo Abdel',
      'theme-color': '#1e40af',
      'msapplication-TileColor': '#1e40af',
      'application-name': 'Mo The Broker',
      'apple-mobile-web-app-title': 'Mo The Broker',
      'format-detection': 'telephone=yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'geo.region': 'US-CA',
      'geo.placename': 'Orange County, California',
      'geo.position': '33.7175;-117.8311',
      'ICBM': '33.7175, -117.8311',
    },
  };
}

// Common SEO improvement component
export default function EnhancedSEO({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage, 
  noindex 
}: EnhancedSEOProps) {
  // This component is used for client-side SEO enhancements
  // Most SEO is handled by generateEnhancedMetadata for server-side rendering
  return null;
}