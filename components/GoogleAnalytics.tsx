'use client';

import { useEffect } from 'react';

const GA_TRACKING_ID = 'G-P8RJLQYRVE';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Load Google Analytics after initial render
    const loadGA = () => {
      // Create gtag script element
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize gtag after script loads
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
        
        // Make gtag globally available
        (window as any).gtag = gtag;
      };
    };

    // Load GA after a short delay to not block initial render
    const timeoutId = setTimeout(loadGA, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}