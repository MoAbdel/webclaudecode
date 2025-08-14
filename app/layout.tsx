import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { structuredData, mortgageLoanSchema } from '@/lib/seo';
import './globals-simple.css';

export const metadata: Metadata = {
  title: 'Mo Abdel | Wholesale Mortgage Broker',
  description: 'Get wholesale mortgage rates from 200+ lenders. Serving Orange County & beyond with fast closings, unbiased advice, and flexible home loan programs.',
  icons: {
    icon: [
      { url: '/images/moabdel-headshot-final.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/moabdel-headshot-final.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/moabdel-headshot-final.png',
    apple: '/images/moabdel-headshot-final.png',
  },
  openGraph: {
    title: 'Mo Abdel | Wholesale Mortgage Broker in Orange County, CA',
    description: 'Get wholesale mortgage rates from 200+ lenders. Serving Orange County & beyond with fast closings, unbiased advice, and flexible home loan programs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mo Abdel - Wholesale Mortgage',
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
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mothebroker.com" />
        <meta property="og:title" content="Mo Abdel | Wholesale Mortgage Broker Orange County | NMLS #1426884" />
        <meta property="og:description" content="Get wholesale mortgage rates from 200+ lenders. Serving Orange County & beyond with fast closings, unbiased advice, and flexible home loan programs. Expert guidance on FHA, VA, jumbo loans, and HELOC options." />
        <meta property="og:image" content="https://mothebroker.com/images/moabdel-headshot-final.png" />
        <meta property="og:site_name" content="Mo Abdel" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mothebroker.com" />
        <meta name="twitter:title" content="Mo Abdel | Wholesale Mortgage Broker Orange County" />
        <meta name="twitter:description" content="Get wholesale mortgage rates from 200+ lenders. Expert guidance on FHA, VA, jumbo loans, and HELOC options." />
        <meta name="twitter:image" content="https://mothebroker.com/images/moabdel-headshot-final.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mortgageLoanSchema) }}
        />
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