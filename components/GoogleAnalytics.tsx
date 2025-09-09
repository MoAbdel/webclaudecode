'use client';

import Script from 'next/script';

const GA_TRACKING_ID = 'G-P8RJLQYRVE';

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) - Optimized for mobile performance */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
}

// Extend Window interface for TypeScript


