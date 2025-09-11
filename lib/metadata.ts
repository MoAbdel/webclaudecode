import type { Metadata } from 'next';

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords,
  path,
  image = '/images/moabdel-headshot-final.png',
  type = 'website',
  noindex = false
}: SEOMetadata): Metadata {
  const baseUrl = 'https://mothebroker.com';
  const canonicalUrl = `${baseUrl}${path}`;
  const fullImageUrl = `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Mo Abdel - Mortgage Broker',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'en_US',
      type
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl]
    },
    alternates: {
      canonical: canonicalUrl
    },
    other: {
      'og:image:width': '1200',
      'og:image:height': '630',
      'article:author': 'Mo Abdel',
      'article:publisher': 'https://mothebroker.com'
    }
  };
}

// Helper function to generate consistent page URLs
export function createCanonicalUrl(path: string): string {
  const baseUrl = 'https://mothebroker.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}



