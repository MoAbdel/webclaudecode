'use client';

import { useEffect } from 'react';

export default function ChatbotHardReset() {
  useEffect(() => {
    const s = document.createElement('style');
    s.textContent = `
      html, body, #__next, #root, main, .site, .layout, .page, .site-wrapper {
        transform: none !important;
        filter: none !important;
        backdrop-filter: none !important;
        perspective: none !important;
        contain: none !important;
      }
    `;
    document.documentElement.appendChild(s);
    return () => s.remove();
  }, []);
  return null;
}