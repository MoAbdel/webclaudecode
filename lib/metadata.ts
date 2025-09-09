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
  const baseUrl = 'https://www.mothebroker.com';
  const canonicalUrl = `${baseUrl}${path}`;
  
  const ensureSuffix = (t: string) => {
    const trimmed = t.trim().replace(/\s+\|\s*Mo Abdel.*$/i, '').replace(/\s+/g, ' ');
    return `${trimmed} | Mo Abdel`;
  };
  const pxEstimate = (t: string) => Math.round((t || '').length * 7); // rough visual width estimate
  const trimToPx = (t: string, maxPx = 600) => {
    if (pxEstimate(t) <= maxPx) return t;
    // Trim preserving whole words
    const maxChars = Math.max(0, Math.floor(maxPx / 7) - 1);
    const cut = t.slice(0, maxChars);
    const safe = cut.replace(/[,;:!\-\s]+\S*$/, '').trim();
    return safe.length ? `${safe}…` : t.slice(0, maxChars);
  };
  const normalizeTitle = (t: string) => trimToPx(ensureSuffix(t));

  const ensureOCandCTA = (d: string) => {
    let out = d.replace(/Orange County(?!,\s*CA)/g, 'Orange County, CA');
    const hasCTA = /(call|get started|compare|contact|schedule)/i.test(out);
    if (!hasCTA) out = `${out.replace(/[\s.]+$/, '')}. Get started today.`;
    if (out.length > 160) out = out.slice(0, 160).replace(/[\s,;:]+\S*$/, '').trim();
    return out;
  };

  const finalTitle = normalizeTitle(title);
  const finalDescription = ensureOCandCTA(description);
  const fullImageUrl = `${baseUrl}${image}`;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: 'Mo Abdel - Mortgage Broker',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: finalTitle
        }
      ],
      locale: 'en_US',
      type
    },
    twitter: {
      card: 'summary_large_image',
    title: finalTitle,
    description: finalDescription,
      images: [fullImageUrl]
    },
    alternates: {
      canonical: canonicalUrl
    },
    other: {
      'og:image:width': '1200',
      'og:image:height': '630',
      'article:author': 'Mo Abdel',
      'article:publisher': 'https://www.mothebroker.com'
    }
  };
}

// Helper function to generate consistent page URLs
export function createCanonicalUrl(path: string): string {
  const baseUrl = 'https://www.mothebroker.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
