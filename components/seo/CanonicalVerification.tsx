import React from 'react';
import Head from 'next/head';

interface CanonicalVerificationProps {
  canonicalUrl: string;
  alternateUrls?: Array<{
    url: string;
    hreflang?: string;
    media?: string;
    type?: string;
  }>;
  noIndex?: boolean;
}

export default function CanonicalVerification({ 
  canonicalUrl, 
  alternateUrls = [],
  noIndex = false 
}: CanonicalVerificationProps) {
  
  // Clean and validate canonical URL
  const cleanCanonicalUrl = canonicalUrl.replace(/\/+$/, ''); // Remove trailing slashes
  
  return (
    <Head>
      {/* Primary canonical URL */}
      <link rel="canonical" href={cleanCanonicalUrl} />
      
      {/* Self-referencing canonical for duplicate detection */}
      <link rel="alternate" href={cleanCanonicalUrl} hrefLang="en" />
      
      {/* Alternate URLs with proper canonical relationship */}
      {alternateUrls.map((alternate, index) => (
        <React.Fragment key={index}>
          <link 
            rel="alternate" 
            href={alternate.url}
            hrefLang={alternate.hreflang}
            media={alternate.media}
            type={alternate.type}
          />
          {/* Each alternate should also reference the canonical */}
          <meta property="og:url" content={cleanCanonicalUrl} />
        </React.Fragment>
      ))}
      
      {/* Additional canonical signals */}
      <meta property="og:url" content={cleanCanonicalUrl} />
      <meta name="twitter:url" content={cleanCanonicalUrl} />
      
      {/* Prevent indexing of alternate versions if specified */}
      {noIndex && (
        <meta name="robots" content="noindex,follow" />
      )}
      
      {/* JSON-LD with canonical URL */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": cleanCanonicalUrl,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": cleanCanonicalUrl
            },
            "sameAs": alternateUrls.map(alt => alt.url)
          })
        }}
      />
    </Head>
  );
}



