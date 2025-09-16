'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const FACEBOOK_PIXEL_ID = '1655523845205220';

export default function FacebookPixel() {
  useEffect(() => {
    // Initialize Facebook Pixel
    if (typeof window !== 'undefined') {
      window.fbq = window.fbq || function() {
        (window.fbq.q = window.fbq.q || []).push(arguments);
      };
      
      if (!window._fbq) {
        window._fbq = window.fbq;
      }
      
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq('init', FACEBOOK_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <>
      {/* Facebook Pixel Code - Optimized for FID performance */}
      <Script
        src="https://connect.facebook.net/en_US/fbevents.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize Facebook Pixel after script loads, non-blocking
          if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('init', FACEBOOK_PIXEL_ID);
            window.fbq('track', 'PageView');
          }
        }}
      />
      
      {/* Noscript fallback */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

// Facebook Pixel tracking functions for use in components
export const fbTrack = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const fbTrackCustom = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};