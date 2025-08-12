'use client';

import { useEffect } from 'react';

export default function CriticalCSS() {
  useEffect(() => {
    // Preload and defer non-critical CSS after initial render
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = '/_next/static/css/app/layout.css';
    link.onload = () => {
      link.onload = null;
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'stylesheet';
    fallbackLink.href = '/_next/static/css/app/layout.css';
    noscript.appendChild(fallbackLink);
    document.head.appendChild(noscript);
  }, []);

  return null;
}