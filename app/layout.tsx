import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import AdvancedSchemaMarkup from '@/components/seo/AdvancedSchemaMarkup';
import { structuredData, mortgageLoanSchema } from '@/lib/seo';
import './globals-simple.css';

export const metadata: Metadata = {
  title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
  description: 'Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884.',
  keywords: 'Orange County mortgage broker, home loans, refinancing, FHA loans, VA loans, mortgage rates, NMLS licensed, lender access, competitive rates',
  icons: {
    icon: [
      { url: '/favicon.ico?v=5', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/favicon-32x32.png?v=5', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=5', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png?v=3', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png?v=3', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=5',
    apple: [
      { url: '/apple-touch-icon-180x180.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/moabdel-headshot-final.png', color: '#1e40af' },
    ],
  },
  openGraph: {
    title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
    description: 'Get competitive mortgage rates from 200+ lenders. Serving Orange County & beyond with fast closings, unbiased advice, and flexible home loan programs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mo Abdel | Mortgage Broker',
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
        <meta name="google-site-verification" content="gje53lhRpuQPVaMLhtYAUYdO8ciKzx8APLNwNVhcT1A" />
        <link rel="canonical" href="https://mothebroker.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=5" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=5" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=5" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mothebroker.com" />
        <meta property="og:title" content="Mo Abdel - Mortgage Broker | Orange County Mortgage NMLS #1426884" />
        <meta property="og:description" content="Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884." />
        <meta property="og:image" content="https://mothebroker.com/images/moabdel-headshot-final.png" />
        <meta property="og:site_name" content="Mo Abdel" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mothebroker.com" />
        <meta name="twitter:title" content="Mo Abdel | Mortgage Broker Orange County" />
        <meta name="twitter:description" content="Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884." />
        <meta name="twitter:image" content="https://mothebroker.com/images/moabdel-headshot-final.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mortgageLoanSchema) }}
        />
        <AdvancedSchemaMarkup type="Organization" />
        <meta name="build-timestamp" content={new Date().toISOString()} />
        <meta name="deployment-id" content="BGDyiFiyb-rollback" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}