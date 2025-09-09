import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import HeroSectionServer from '@/components/home/HeroSectionServer';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BrokerComparison from '@/components/home/BrokerComparison';
import EnhancedQuickQuote from '@/components/home/EnhancedQuickQuote';
import StructuredFAQ from '@/components/home/StructuredFAQ';
import PillarPageHub from '@/components/seo/PillarPageHub';
import AIOOptimization from '@/components/seo/AIOOptimization';
import EnhancedLocalSchema from '@/components/seo/EnhancedLocalSchema';
import IndexingOptimization from '@/components/seo/IndexingOptimization';

export const metadata: Metadata = {
  title: 'Orange County, CA Mortgage Broker | Home Loans & Refinance | Mo Abdel — Mortgage Broker',
  description: 'Mortgage broker serving Orange County, CA. Get competitive options, fast closings, and local guidance. Call (949) 579-2057 to get started.',
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
        stat: "According to 2024 HMDA data analysis, mortgage brokers save borrowers an average of $10,662 over the life of their loan",
        source: "Polygon Research study using HMDA data",
        year: "2024"
      },
      {
        stat: "Industry research shows wholesale mortgage rates averaged 6.58% versus 6.60% retail rates",
        source: "2024 HMDA Mortgage Origination Data",
        year: "2024"
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
        title="Orange County Mortgage Broker | Mo Abdel NMLS #1426884"
        description="Mortgage broker serving Orange County. Access 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884."
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
        <EnhancedQuickQuote />
        <LocalMarketInsights />
        <RateDisplay />
        <PillarPageHub />
        <StructuredFAQ />
        <Testimonials />
        <NewsletterSignup />
      </div>

      {/* JSON-LD: Person (E-E-A-T) */}
      {(() => {
        const personSchema = {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mo Abdel",
          "jobTitle": "Mortgage Broker",
          "identifier": [
            { "@type": "PropertyValue", "name": "NMLS", "value": "1426884" }
          ],
          "worksFor": { "@type": "Organization", "name": "NEXA Mortgage" },
          "brand": "Mo Abdel — Mortgage Broker",
          "telephone": "(949) 579-2057",
          "areaServed": "Orange County, CA",
          "knowsAbout": [
            "Conventional Mortgage",
            "Rate and Term Refinance",
            "Cash-Out Refinance",
            "Home Equity Line of Credit (HELOC)",
            "Home Equity Loan (HELOAN)",
            "FHA Loan",
            "VA Loan",
            "Jumbo Mortgage"
          ],
          "sameAs": [
            "https://share.google/KsoqAEbkqoKiBVjgz",
            "https://www.facebook.com/profile.php?id=61573517340174",
            "https://www.instagram.com/mo_thebroker/",
            "https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest",
            "https://www.zillow.com/lender-profile/mabdel0/"
          ]
        };
        return (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
        );
      })()}

      {/* JSON-LD: Organization (E-E-A-T) */}
      {(() => {
        const orgSchema = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Mo Abdel — Mortgage Broker",
          "url": "https://mothebroker.com",
          "telephone": "(949) 579-2057",
          "logo": "https://mothebroker.com/logo.png",
          "sameAs": [
            "https://share.google/KsoqAEbkqoKiBVjgz",
            "https://www.facebook.com/profile.php?id=61573517340174",
            "https://www.instagram.com/mo_thebroker/",
            "https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest",
            "https://www.zillow.com/lender-profile/mabdel0/"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Orange County",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        };
        return (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
          />
        );
      })()}

      {/* JSON-LD: WebSite with SearchAction */}
      {(() => {
        const siteSchema = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Mo Abdel — Mortgage Broker",
          "url": "https://mothebroker.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mothebroker.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
        return (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        );
      })()}
    </>
  );
}
