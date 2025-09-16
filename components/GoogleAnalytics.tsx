'use client';

import Script from 'next/script';

const GA_TRACKING_ID = 'G-P8RJLQYRVE';

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) - Optimized for FID performance */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize GA after script loads to minimize blocking
          if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) { 
              window.dataLayer?.push(args);
            }
            gtag('js', new Date());
            gtag('config', GA_TRACKING_ID, {
              page_title: document.title,
              page_location: window.location.href
            });
          }
        }}
      />
    </>
  );
}

// Extend Window interface for TypeScript
