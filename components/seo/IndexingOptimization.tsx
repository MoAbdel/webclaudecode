import React from 'react';
import Script from 'next/script';

interface IndexingOptimizationProps {
  page: string;
  priority?: 'high' | 'medium' | 'low';
  lastModified?: string;
}

export default function IndexingOptimization({ 
  page, 
  priority = 'medium',
  lastModified 
}: IndexingOptimizationProps) {
  
  // Generate structured data optimized for indexing
  const generateIndexingSchema = () => {
    const baseUrl = 'https://mothebroker.com';
    const currentDate = new Date().toISOString();
    
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": page,
      "url": `${baseUrl}${page.startsWith('/') ? page : `/${page}`}`,
      "dateModified": lastModified || currentDate,
      "datePublished": currentDate,
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "publisher": {
        "@type": "Organization",
        "name": "Mo Abdel - Mortgage Broker",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/mo-logo-white.webp`
        }
      },
      "author": {
        "@type": "Person",
        "name": "Mo Abdel",
        "jobTitle": "Licensed Mortgage Broker",
        "identifier": "NMLS #1426884"
      },
      "mainEntity": {
        "@type": "FinancialService",
        "name": "Mortgage Broker Services",
        "provider": {
          "@type": "Organization",
          "name": "Mo Abdel - Mortgage Broker"
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": {
              "@id": baseUrl,
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": page.replace(/[\/\-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            "item": {
              "@id": `${baseUrl}${page.startsWith('/') ? page : `/${page}`}`,
              "name": page.replace(/[\/\-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
            }
          }
        ]
      }
    };
  };

  return (
    <>
      {/* Enhanced meta tags for better indexing */}
      <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <meta name="slurp" content="index,follow" />
      
      {/* Additional SEO signals */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="doc-class" content="living document" />
      
      {/* Priority hints for crawlers */}
      <meta name="importance" content={priority} />
      
      {/* Enhanced structured data for better understanding */}
      <Script
        id={`indexing-optimization-${page.replace(/[\/\-]/g, '_')}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateIndexingSchema())
        }}
      />
    </>
  );
}



