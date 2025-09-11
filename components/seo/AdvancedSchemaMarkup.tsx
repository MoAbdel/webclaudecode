'use client';

import React from 'react';
import Head from 'next/head';

interface SchemaProps {
  type: 'Organization' | 'MortgageBroker' | 'FinancialService' | 'LocalBusiness';
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed?: string[];
  services?: string[];
  priceRange?: string;
  openingHours?: string[];
  sameAs?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  founder?: {
    name: string;
    jobTitle: string;
    sameAs?: string[];
  };
}

export default function AdvancedSchemaMarkup({
  type,
  name = "Mo Abdel - Orange County Mortgage Expert",
  description = "Mortgage broker serving Orange County with access to 200+ lenders for competitive wholesale rates, fast closings. FHA, VA, conventional loans. Licensed NMLS #1426884.",
  url = "https://mothebroker.com",
  telephone = "(949) 579-2057",
  address = {
    streetAddress: "",
    addressLocality: "Lake Forest",
    addressRegion: "CA",
    postalCode: "92630",
    addressCountry: "US"
  },
  areaServed = [
    "Irvine, CA", "Newport Beach, CA", "Huntington Beach, CA", "Costa Mesa, CA",
    "Mission Viejo, CA", "Anaheim, CA", "Santa Ana, CA", "Fullerton, CA",
    "Westminster, CA", "Garden Grove, CA", "Orange, CA", "Fountain Valley, CA",
    "Laguna Beach, CA", "Yorba Linda, CA", "Dana Point, CA", "Laguna Niguel, CA",
    "Laguna Woods, CA", "Seal Beach, CA"
  ],
  services = [
    "Mortgage Broker Services", "Home Purchase Loans", "Refinancing",
    "FHA Loans", "VA Loans", "Conventional Loans", "Jumbo Loans",
    "HELOC", "Cash-Out Refi", "First-Time Buyer Programs",
    "Investment Property Loans", "Non-QM Loans", "Bank Statement Loans"
  ],
  priceRange = "$0 - No cost consultations",
  openingHours = [
    "Mo-Fr 09:00-18:00",
    "Sa 10:00-16:00"
  ],
  sameAs = [
    "https://www.linkedin.com/in/moabdel",
    "https://www.nexamortgage.com"
  ],
  aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 127
  },
  founder = {
    name: "Mo Abdel",
    jobTitle: "Senior Mortgage Loan Officer",
    sameAs: ["https://www.linkedin.com/in/moabdel"]
  }
}: SchemaProps) {
  
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type,
      name,
      description,
      url,
      telephone,
      address: {
        "@type": "PostalAddress",
        ...address
      },
      areaServed: areaServed.map(area => ({
        "@type": "City",
        name: area
      })),
      openingHours,
      sameAs,
      aggregateRating: {
        "@type": "AggregateRating",
        ...aggregateRating
      }
    };

    // Add specific schema properties based on type
    switch (type) {
      case 'Organization':
        return {
          ...baseSchema,
          founder: {
            "@type": "Person",
            ...founder
          },
          memberOf: {
            "@type": "Organization",
            name: "NEXA Mortgage",
            url: "https://www.nexamortgage.com"
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "NMLS License",
            recognizedBy: {
              "@type": "Organization",
              name: "Nationwide Multistate Licensing System"
            }
          }
        };

      case 'MortgageBroker':
      case 'FinancialService':
        return {
          ...baseSchema,
          "@type": ["FinancialService", "MortgageBroker"],
          serviceType: "Mortgage Broker Services",
          serviceOutput: services.map(service => ({
            "@type": "Service",
            name: service
          })),
          priceRange,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Mortgage Loan Programs",
            itemListElement: services.map((service, index) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service
              },
              position: index + 1
            }))
          },
          broker: {
            "@type": "Person",
            name: founder.name,
            jobTitle: founder.jobTitle,
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "NMLS #1426884"
            }
          }
        };

      case 'LocalBusiness':
        return {
          ...baseSchema,
          "@type": ["LocalBusiness", "FinancialService"],
          priceRange,
          paymentAccepted: ["Cash", "Check", "Wire Transfer"],
          currenciesAccepted: "USD",
          servesCuisine: undefined, // Remove restaurant-specific fields
          hasMap: `https://maps.google.com/?q=${encodeURIComponent(
            `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`
          )}`
        };

      default:
        return baseSchema;
    }
  };

  const schema = generateSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}



