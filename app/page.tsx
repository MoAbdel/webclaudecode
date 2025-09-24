import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import HeroSectionServer from '@/components/home/HeroSectionServer';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProgramSnapshot from '@/components/home/ProgramSnapshot';
import LeadMagnet from '@/components/home/LeadMagnet';
import StructuredFAQ from '@/components/home/StructuredFAQ';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import IndexingOptimization from '@/components/seo/IndexingOptimization';

export const metadata: Metadata = {
  title: 'Orange County Mortgage Broker | 200+ Lenders | Mo Abdel NMLS #1426884',
  description: 'Get competitive mortgage rates from 200+ lenders in Orange County. Licensed broker Mo Abdel (NMLS #1426884) with 18-day average closings. Free consultation!',
  alternates: {
    canonical: 'https://www.mothebroker.com',
  },
};

// Lazy load below-the-fold components to reduce initial bundle size
const GoogleReviews = dynamic(() => import('@/components/home/GoogleReviews'), {
  loading: () => <div className="h-32 bg-slate-50 animate-pulse rounded-lg" />
});

export default function HomePage() {
  const homePageContent = {
    mainTopic: "Orange County Mortgage Broker Services",
    quickAnswer: "Mo Abdel is a licensed mortgage broker (NMLS #1426884) serving Orange County with access to 200+ lenders for competitive rates on home loans, refinancing, FHA, VA, and jumbo loans.",
    keyFacts: [
      "Licensed mortgage broker NMLS #1426884",
      "Access to 200+ lenders",
      "Average closing time: 18 days", 
      "Serving all of Orange County",
      "Specializes in FHA, VA, Conventional, and Jumbo loans",
      "NEXA Mortgage LLC brokerage"
    ],
    statistics: [
      {
        stat: "According to 2025 HMDA data analysis, mortgage brokers save borrowers an average of $10,662 over the life of their loan",
        source: "Polygon Research study using HMDA data",
        year: "2025"
      },
      {
        stat: "Industry research shows wholesale mortgage rates averaged 6.25% versus 6.30% retail rates",
        source: "2025 HMDA Mortgage Origination Data",
        year: "2025"
      },
      {
        stat: "Data indicates mortgage broker market share reached 24.3% in Q4 2023, highest since 2009",
        source: "UWM Market Analysis",
        year: "2023"
      }
    ]
  };

  return (
    <>
      {/* AI Optimization Components */}
      <AIOOptimization
        title="Orange County Mortgage Broker | 200+ Lenders | Mo Abdel NMLS #1426884"
        description="Get competitive mortgage rates from 200+ lenders in Orange County. Licensed broker Mo Abdel (NMLS #1426884) with 18-day average closings. Free consultation!"
        canonicalUrl="https://www.mothebroker.com"
        content={homePageContent}
      />
      <EnhancedLocalSchema page_type="home" />
      <IndexingOptimization 
        page="/" 
        priority="high" 
        lastModified="2025-01-24"
      />
      
      {/* Main Page Content - New Conversion-Focused Structure */}
      <div className="min-h-screen">
        {/* 1. Hero Section */}
        <HeroSectionServer />

        {/* 2. Why Work With a Broker */}
        <WhyChooseUs />

        {/* 3. Social Proof / Trust Strip */}
        <GoogleReviews />

        {/* 4. Program Snapshot */}
        <ProgramSnapshot />

        {/* 5. Lead Magnet */}
        <LeadMagnet />

        {/* 6. FAQ Section */}
        <StructuredFAQ />
      </div>
    </>
  );
}