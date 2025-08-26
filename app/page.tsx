import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import HeroSectionServer from '@/components/home/HeroSectionServer';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BrokerComparison from '@/components/home/BrokerComparison';
import QuickQuote from '@/components/home/QuickQuote';
import StructuredFAQ from '@/components/home/StructuredFAQ';
import PillarPageHub from '@/components/seo/PillarPageHub';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import IndexingOptimization from '@/components/seo/IndexingOptimization';

export const metadata: Metadata = {
  title: 'Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
  description: 'Mortgage broker in Orange County. 200+ lenders. Better rates. Fast closing. FHA, VA, conventional loans. NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com',
  },
};

// Lazy load below-the-fold components to reduce initial bundle size
const RateDisplay = dynamic(() => import('@/components/home/RateDisplay'), {
  loading: () => <div className="h-32 bg-slate-50 animate-pulse rounded-lg" />
});
const LocalMarketInsights = dynamic(() => import('@/components/home/LocalMarketInsights'), {
  loading: () => <div className="h-32 bg-slate-50 animate-pulse rounded-lg" />
});
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), {
  loading: () => <div className="h-32 bg-slate-50 animate-pulse rounded-lg" />
});
const NewsletterSignup = dynamic(() => import('@/components/home/NewsletterSignup'), {
  loading: () => <div className="h-32 bg-slate-50 animate-pulse rounded-lg" />
});

export default function HomePage() {
  const homePageContent = {
    mainTopic: "Orange County Mortgage Broker Services",
    quickAnswer: "Mo Abdel is a mortgage broker. NMLS #1426884. Serves Orange County. 200+ lenders. Better rates. Home loans, refinancing, FHA, VA, jumbo loans.",
    keyFacts: [
      "Mortgage broker NMLS #1426884",
      "200+ lenders available",
      "18-day average closing", 
      "All Orange County served",
      "FHA, VA, Conventional, Jumbo loans",
      "NEXA Mortgage—America's largest wholesale brokerage"
    ],
    statistics: [
      {
        stat: "Brokers save borrowers $10,662 average. Based on loan lifetime.",
        source: "HMDA data analysis",
        year: "2024"
      },
      {
        stat: "Wholesale rates: 6.58%. Retail rates: 6.60%. Brokers win.",
        source: "HMDA Mortgage Data",
        year: "2024"
      },
      {
        stat: "Broker market share: 24.3%. Highest since 2009.",
        source: "UWM Analysis",
        year: "2023"
      }
    ]
  };

  return (
    <>
      {/* AI Optimization Components */}
      <AIOOptimization
        title="Orange County Mortgage Broker | Mo Abdel NMLS #1426884"
        description="Mortgage broker in Orange County. 200+ lenders. Better rates. Fast closing. FHA, VA, conventional loans. NMLS #1426884."
        keywords={["Orange County mortgage broker", "home loans", "mortgage rates", "FHA loans", "VA loans", "refinancing"]}
        canonicalUrl="https://www.mothebroker.com"
        content={homePageContent}
      />
      <EnhancedLocalSchema page_type="home" />
      <IndexingOptimization 
        page="/" 
        priority="high" 
        lastModified="2025-01-24"
      />
      
      {/* Main Page Content - Cache Bust 2025-08-22 */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <HeroSectionServer />
        <BrokerComparison />
        <WhyChooseUs />
        <QuickQuote />
        <LocalMarketInsights />
        <RateDisplay />
        <PillarPageHub />
        <StructuredFAQ />
        <Testimonials />
        <NewsletterSignup />
      </div>
    </>
  );
}