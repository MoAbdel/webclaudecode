'use client';

import React from 'react';
import Head from 'next/head';

interface SchemaData {
  type: 'review' | 'howto' | 'faq' | 'product' | 'article' | 'calculator' | 'mortgage-program';
  title?: string;
  name?: string;
  description: string;
  url: string;
  data?: any;
}

interface AdvancedSchemaGeneratorProps {
  schemas: SchemaData[];
}

export default function AdvancedSchemaGenerator({ schemas }: AdvancedSchemaGeneratorProps) {
  
  const generateReviewSchema = (data: any) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "FinancialService",
      "name": "Mo Abdel Mortgage Broker Services",
      "provider": {
        "@type": "Person",
        "name": "Mo Abdel",
        "identifier": "NMLS #1426884"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": data.rating || 5,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": data.authorName || "Anonymous Client"
    },
    "reviewBody": data.reviewText,
    "datePublished": data.datePublished || new Date().toISOString()
  });

  const generateHowToSchema = (data: any, schemaData: SchemaData) => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": schemaData.title || schemaData.name || data.title,
    "description": data.description,
    "image": data.image || "https://mothebroker.com/images/moabdel-headshot-final.png",
    "totalTime": data.totalTime || "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": data.cost || "0"
    },
    "supply": data.supplies || [],
    "tool": data.tools || [],
    "step": data.steps?.map((step: any, index: number) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image
    })) || []
  });

  const generateFAQSchema = (data: any) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.questions?.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Person",
          "name": "Mo Abdel",
          "identifier": "NMLS #1426884"
        }
      }
    })) || []
  });

  const generateProductSchema = (data: any) => ({
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": data.name,
    "description": data.description,
    "provider": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": data.price || "0",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Person",
        "name": "Mo Abdel"
      }
    },
    "category": "Mortgage Loan",
    "brand": {
      "@type": "Brand",
      "name": "NEXA Mortgage"
    },
    "additionalProperty": data.features?.map((feature: string) => ({
      "@type": "PropertyValue",
      "name": "Feature",
      "value": feature
    })) || []
  });

  const generateArticleSchema = (data: any) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.description,
    "image": data.image || "https://mothebroker.com/images/moabdel-headshot-final.png",
    "author": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884",
      "jobTitle": "Licensed Mortgage Broker"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mo Abdel Mortgage Broker",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mothebroker.com/images/mo-logo-white.webp"
      }
    },
    "datePublished": data.datePublished || new Date().toISOString(),
    "dateModified": data.dateModified || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.url
    },
    "articleSection": data.section || "Mortgage Advice",
    "wordCount": data.wordCount || 1000,
    "keywords": data.keywords || ["mortgage", "home loans", "Orange County"]
  });

  const generateCalculatorSchema = (data: any, schemaData: SchemaData) => ({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": schemaData.name || schemaData.title || data.name,
    "description": data.description,
    "url": data.url,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": data.features || [
      "Monthly payment calculation",
      "Interest rate comparison",
      "Loan term analysis",
      "Down payment scenarios"
    ],
    "provider": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884"
    }
  });

  const generateMortgageProgramSchema = (data: any) => ({
    "@context": "https://schema.org",
    "@type": ["LoanOrCredit", "Service"],
    "name": data.name,
    "description": data.description,
    "provider": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884"
    },
    "serviceType": "Mortgage Loan",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Orange County, CA"
    },
    "offers": {
      "@type": "Offer",
      "name": data.name,
      "description": data.description,
      "eligibility": data.eligibility || "Varies by program",
      "price": data.price || "Market rates",
      "priceCurrency": "USD"
    },
    "additionalType": "https://schema.org/LoanOrCredit",
    "category": data.category || "Mortgage Loan",
    "audience": {
      "@type": "Audience",
      "audienceType": data.audienceType || "Home Buyers"
    }
  });

  const generateSchema = (schemaData: SchemaData) => {
    switch (schemaData.type) {
      case 'review':
        return generateReviewSchema(schemaData.data);
      case 'howto':
        return generateHowToSchema(schemaData.data, schemaData);
      case 'faq':
        return generateFAQSchema(schemaData.data);
      case 'product':
        return generateProductSchema(schemaData.data);
      case 'article':
        return generateArticleSchema(schemaData.data);
      case 'calculator':
        return generateCalculatorSchema(schemaData.data, schemaData);
      case 'mortgage-program':
        return generateMortgageProgramSchema(schemaData.data);
      default:
        return null;
    }
  };

  return (
    <Head>
      {schemas.map((schema, index) => {
        const generatedSchema = generateSchema(schema);
        if (!generatedSchema) return null;
        
        return (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generatedSchema, null, 2)
            }}
          />
        );
      })}
    </Head>
  );
}

