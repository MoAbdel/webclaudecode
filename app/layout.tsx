import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import FacebookPixel from '@/components/FacebookPixel';
import AdvancedSchemaMarkup from '@/components/seo/AdvancedSchemaMarkup';
import GEOTracking from '@/components/GEOTracking';
import Script from 'next/script';
import { structuredData, mortgageLoanSchema } from '@/lib/seo';
import './globals-simple.css';

export const metadata: Metadata = {
  title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
  description: 'Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884.',
  keywords: 'Orange County mortgage broker, home loans, refinancing, FHA loans, VA loans, mortgage rates, NMLS licensed, lender access, competitive rates',
  metadataBase: new URL('https://www.mothebroker.com'),
  alternates: {
    canonical: 'https://www.mothebroker.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/MoAbdel-Favicon.png', color: '#1e40af' },
    ],
  },
  openGraph: {
    title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
    description: 'Get competitive mortgage rates from 200+ lenders. Serving Orange County & beyond with fast closings, unbiased advice, and flexible home loan programs.',
    url: 'https://www.mothebroker.com',
    siteName: 'Mo Abdel | Mortgage Broker',
    images: [
      {
        url: 'https://www.mothebroker.com/images/og-image-mothebroker.png',
        width: 1200,
        height: 630,
        alt: 'Orange County Mortgage Broker - Mo Abdel NMLS #1426884',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
    description: 'Get competitive mortgage rates from 200+ lenders. Fast closings, unbiased advice, flexible home loan programs.',
    images: ['https://www.mothebroker.com/images/og-image-mothebroker.png'],
    creator: '@mothebroker',
    site: '@mothebroker',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="base44">
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="gje53lhRpuQPVaMLhtYAUYdO8ciKzx8APLNwNVhcT1A" />
        <meta name="msvalidate.01" content="F9E3BEE43DFA5A2B0676F3881B448BCA" />
        {/* Canonical URL will be handled by individual pages */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Prevent www redirect issues */}
        <meta name="robots" content="index, follow" />
        
        {/* Optimized resource hints for critical path */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Critical CSS preload for above-the-fold content */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
        
        {/* Non-critical stylesheets with media="print" then switch to all */}
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        
        {/* Critical mobile viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* Additional best practices meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mothebroker.com" />
        <meta property="og:title" content="Mo Abdel - Mortgage Broker | Orange County Mortgage NMLS #1426884" />
        <meta property="og:description" content="Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884." />
        <meta property="og:image" content="https://www.mothebroker.com/images/moabdel-headshot-final.png" />
        <meta property="og:site_name" content="Mo Abdel" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.mothebroker.com" />
        <meta name="twitter:title" content="Mo Abdel | Mortgage Broker Orange County" />
        <meta name="twitter:description" content="Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884." />
        <meta name="twitter:image" content="https://www.mothebroker.com/images/moabdel-headshot-final.png" />
        
        <AdvancedSchemaMarkup type="Organization" />
        <meta name="deployment-id" content="BGDyiFiyb-rollback" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <Breadcrumbs />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
        <FacebookPixel />
        <GEOTracking />
        
        {/* Combined structured data - single script for better performance */}
        <Script 
          id="combined-structured-data"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify([structuredData, mortgageLoanSchema])
          }}
        />
        
        
        {/* Embedded JavaScript Chatbot - Direct Implementation */}
        <Script id="embedded-chatbot" strategy="afterInteractive">
          {`
            // Chatbot initialization - runs completely independent of React
            (function() {
              'use strict';
              
              // Wait for DOM and React to be fully loaded
              function initializeChatbot() {
                // Remove any existing chatbot
                const existing = document.getElementById('ai-chatbot-root');
                if (existing) {
                  existing.remove();
                }
                
                // Create completely independent root element
                const chatbotRoot = document.createElement('div');
                chatbotRoot.id = 'ai-chatbot-root';
                chatbotRoot.style.cssText = \`
                  position: fixed !important;
                  bottom: 24px !important;
                  right: 24px !important;
                  z-index: 2147483647 !important;
                  pointer-events: none !important;
                \`;
                
                // Create the chatbot button
                const chatButton = document.createElement('button');
                chatButton.id = 'independent-chat-button';
                chatButton.innerHTML = \`
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.3 0 .6-.1.8-.3L14.1 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                \`;
                chatButton.style.cssText = \`
                  width: 64px !important;
                  height: 64px !important;
                  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%) !important;
                  color: white !important;
                  border-radius: 50% !important;
                  border: none !important;
                  cursor: pointer !important;
                  display: flex !important;
                  align-items: center !important;
                  justify-content: center !important;
                  box-shadow: 0 8px 24px rgba(0,0,0,0.2) !important;
                  transition: all 0.3s ease !important;
                  pointer-events: auto !important;
                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
                \`;
                
                // Add hover effect
                chatButton.addEventListener('mouseenter', function() {
                  this.style.transform = 'scale(1.1)';
                  this.style.boxShadow = '0 12px 32px rgba(0,0,0,0.3)';
                });
                
                chatButton.addEventListener('mouseleave', function() {
                  this.style.transform = 'scale(1)';
                  this.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
                });
                
                // Add elements to root
                chatbotRoot.appendChild(chatButton);
                
                // Click handler for chat button
                chatButton.addEventListener('click', function() {
                  alert('Chatbot clicked! Contact Mo at (949) 579-2057');
                });
                
                // Append to body - completely independent
                document.body.appendChild(chatbotRoot);
                console.log('Independent chatbot initialized successfully');
              }
              
              // Initialize when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initializeChatbot);
              } else if (document.readyState === 'interactive') {
                setTimeout(initializeChatbot, 100);
              } else {
                initializeChatbot();
              }
              
              // Backup initialization
              setTimeout(initializeChatbot, 1000);
              setTimeout(initializeChatbot, 3000);
              
            })();
          `}
        </Script>
      </body>
    </html>
  );
}