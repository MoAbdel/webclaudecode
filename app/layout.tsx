import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import FacebookPixel from '@/components/FacebookPixel';
import AdvancedSchemaMarkup from '@/components/seo/AdvancedSchemaMarkup';
import GEOTracking from '@/components/GEOTracking';
import FixedChatbot from '@/components/FixedChatbot';
import ChatbotHardReset from '@/components/ChatbotHardReset';
import Script from 'next/script';
import { structuredData, mortgageLoanSchema } from '@/lib/seo';
import './globals-simple.css';

export const metadata: Metadata = {
  title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
  description: 'Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884.',
  metadataBase: new URL('https://www.mothebroker.com'),
  alternates: {
    canonical: 'https://www.mothebroker.com',
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
        
        {/* Critical CSS and JavaScript preloading */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
        
        {/* CRITICAL: Preload key interactive JavaScript for FID optimization */}
        <link rel="modulepreload" href="/_next/static/chunks/framework.js" />
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        <link rel="preload" href="/_next/static/chunks/pages/_app.js" as="script" />
        
        {/* CRITICAL: Optimize resource loading to prevent render blocking */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        
        {/* CRITICAL: Preload hero section fonts to prevent CLS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" 
        />
        
        {/* CRITICAL: Preload key images for LCP optimization with dimensions for CLS prevention */}
        <link rel="preload" href="/images/moabdel-headshot-final.png" as="image" type="image/png" media="(min-width: 640px)" />
        
        {/* Critical: Image dimension hints to prevent CLS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-image-container { width: 100%; height: 400px; }
            @media (min-width: 768px) { .hero-image-container { height: 500px; } }
            @media (min-width: 1024px) { .hero-image-container { height: 600px; } }
          `
        }} />
        
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
      <body className="min-h-screen">
        <main className="flex-1">
          {children}
        </main>
        <GoogleAnalytics />
        <FacebookPixel />
        <GEOTracking />
        <ChatbotHardReset />

        {/* Combined structured data - single script for better performance */}
        <Script
          id="combined-structured-data"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([structuredData, mortgageLoanSchema])
          }}
        />
      </body>
    </html>
  );
}