'use client';

import { useEffect } from 'react';

const GA_TRACKING_ID = 'G-P8RJLQYRVE';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Only load GA after user interaction or after 3 seconds
    let hasLoaded = false;
    
    const loadGA = () => {
      if (hasLoaded) return;
      hasLoaded = true;
      
      // Create gtag script element
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      script.defer = true;
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
          send_page_view: false, // Manual page view to reduce initial load
        });
        
        // Send page view after everything is loaded
        setTimeout(() => {
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
          });
        }, 100);
        
        // Make gtag globally available
        (window as any).gtag = gtag;
      };
    };

    // Load on user interaction
    const interactionEvents = ['mousedown', 'touchstart', 'keydown', 'scroll'];
    const onInteraction = () => {
      loadGA();
      interactionEvents.forEach(event => {
        window.removeEventListener(event, onInteraction, true);
      });
    };

    // Add interaction listeners
    interactionEvents.forEach(event => {
      window.addEventListener(event, onInteraction, true);
    });

    // Fallback: load after 3 seconds if no interaction
    const timeoutId = setTimeout(loadGA, 3000);
    
    return () => {
      clearTimeout(timeoutId);
      interactionEvents.forEach(event => {
        window.removeEventListener(event, onInteraction, true);
      });
    };
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