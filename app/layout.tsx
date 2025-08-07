import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { structuredData } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mo Abdel | Mortgage Broker in Orange County, CA | NMLS #1426884',
  description: 'Looking for competitive mortgage rates in Orange County? Mo Abdel offers personalized home loan solutions with expert guidance. Get pre-approved today!',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Mo Abdel | Mortgage Broker in Orange County, CA',
    description: 'Looking for competitive mortgage rates in Orange County? Mo Abdel offers personalized home loan solutions with expert guidance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mo The Broker',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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