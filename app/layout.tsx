import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { structuredData, mortgageLoanSchema } from '@/lib/seo';
import './globals-simple.css';

export const metadata: Metadata = {
  title: 'Mo The Broker | Wholesale Mortgage Broker in Orange County, CA',
  description: 'Get wholesale mortgage rates from 200+ lenders. Serving Orange County & beyond with fast closings, unbiased advice, and flexible home loan programs.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Mo The Broker | Wholesale Mortgage Broker in Orange County, CA',
    description: 'Get wholesale mortgage rates from 200+ lenders. Serving Orange County & beyond with fast closings, unbiased advice, and flexible home loan programs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mo The Broker - Wholesale Mortgage',
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P8RJLQYRVE"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P8RJLQYRVE');
            `,
          }}
        />
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
      </body>
    </html>
  );
}