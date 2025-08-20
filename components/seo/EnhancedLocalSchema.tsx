'use client';

import React from 'react';
import Head from 'next/head';

interface EnhancedLocalSchemaProps {
  city?: string;
  page_type?: 'home' | 'city' | 'service' | 'resource';
  service_focus?: string;
}

export default function EnhancedLocalSchema({
  city,
  page_type = 'home',
  service_focus
}: EnhancedLocalSchemaProps) {

  // Generate location-specific schema
  const generateLocationSchema = () => {
    const baseLocation = {
      "@type": "Place",
      "name": city ? `${city}, Orange County, CA` : "Orange County, CA",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city || "Orange County",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.6846",
        "longitude": "-117.8265"
      }
    };

    return baseLocation;
  };

  // Enhanced mortgage broker schema
  const mortgageBrokerSchema = {
    "@context": "https://schema.org",
    "@type": ["MortgageLoan", "FinancialProduct", "Service"],
    "name": `${city ? city + ' ' : 'Orange County '}Mortgage Broker Services`,
    "description": `Professional mortgage broker services in ${city ? city + ', ' : ''}Orange County. Access to 200+ lenders for competitive rates on home loans, refinancing, FHA, VA, and jumbo loans.`,
    "provider": {
      "@type": ["Person", "FinancialService"],
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884",
      "jobTitle": "Licensed Mortgage Broker",
      "telephone": "(949) 579-2057",
      "email": "mo@mothebroker.com",
      "url": "https://mothebroker.com",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "NMLS License",
        "identifier": "1426884",
        "issuedBy": {
          "@type": "Organization",
          "name": "Nationwide Multistate Licensing System"
        }
      },
      "memberOf": {
        "@type": "Organization",
        "name": "NEXA Mortgage LLC",
        "identifier": "Company NMLS #1660690",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5559 S Sossaman Rd, Bldg 1 Ste 101",
          "addressLocality": "Mesa",
          "addressRegion": "AZ",
          "postalCode": "85212",
          "addressCountry": "US"
        }
      }
    },
    "serviceArea": generateLocationSchema(),
    "offers": [
      {
        "@type": "Offer",
        "name": "FHA Loans",
        "description": "Low down payment FHA loans with as little as 3.5% down payment",
        "category": "Mortgage Loan",
        "eligibility": "Owner-occupied primary residence",
        "url": "https://mothebroker.com/fha-loans-orange-county"
      },
      {
        "@type": "Offer",
        "name": "VA Loans",
        "description": "Zero down payment VA loans for veterans and active military",
        "category": "Mortgage Loan",
        "eligibility": "Veterans and active military",
        "url": "https://mothebroker.com/va-loans-orange-county"
      },
      {
        "@type": "Offer",
        "name": "Conventional Loans",
        "description": "Traditional home financing with down payments as low as 3%",
        "category": "Mortgage Loan",
        "url": "https://mothebroker.com/conventional-loans-orange-county"
      },
      {
        "@type": "Offer",
        "name": "HELOC",
        "description": "Home Equity Line of Credit with flexible access to funds",
        "category": "Home Equity Loan",
        "url": "https://mothebroker.com/heloc-orange-county"
      },
      {
        "@type": "Offer",
        "name": "Jumbo Loans",
        "description": "High-balance loans for luxury homes exceeding conforming loan limits",
        "category": "Mortgage Loan",
        "url": "https://mothebroker.com/loan-programs/jumbo-loans"
      }
    ],
    "additionalType": "https://schema.org/FinancialService",
    "category": "Mortgage Broker",
    "audience": {
      "@type": "Audience",
      "geographicArea": {
        "@type": "Place",
        "name": city ? `${city}, Orange County, CA` : "Orange County, CA"
      }
    }
  };

  // Local business schema for city pages
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${city ? city + ' ' : 'Orange County '}Mortgage Broker | Mo Abdel`,
    "image": "https://mothebroker.com/images/moabdel-headshot-final.png",
    "telephone": "(949) 579-2057",
    "email": "mo@mothebroker.com",
    "url": city ? `https://mothebroker.com/areas/${city.toLowerCase().replace(/\s+/g, '-')}-mortgage-broker` : "https://mothebroker.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city || "Orange County",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6846",
      "longitude": "-117.8265"
    },
    "openingHours": [
      "Mo 08:00-20:00",
      "Tu 08:00-20:00", 
      "We 08:00-20:00",
      "Th 08:00-20:00",
      "Fr 08:00-20:00",
      "Sa 09:00-18:00",
      "Su 10:00-16:00"
    ],
    "priceRange": "$$",
    "description": `Licensed mortgage broker serving ${city ? city + ' and ' : ''}Orange County, CA. Access to 200+ lenders for competitive mortgage rates, fast closings, and personalized service. NMLS #1426884.`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mortgage Loan Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "FHA Loans",
            "description": "Low down payment home loans with flexible credit requirements"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "VA Loans",
            "description": "Zero down payment loans for military veterans"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit", 
            "name": "Conventional Loans",
            "description": "Traditional home financing with competitive rates"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": city ? `${city}, CA` : "Orange County, CA",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Orange County, CA"
      }
    },
    "knowsAbout": [
      "Mortgage Lending",
      "Home Loans", 
      "Refinancing",
      "FHA Loans",
      "VA Loans",
      "HELOC",
      city ? `${city} Real Estate Market` : "Orange County Real Estate Market",
      "First Time Home Buyers",
      "Investment Property Loans"
    ],
    "makesOffer": {
      "@type": "Offer",
      "name": "Free Mortgage Consultation",
      "description": "Complimentary mortgage consultation and rate comparison",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  // Professional license schema
  const licenseSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Licensed Mortgage Broker",
    "provider": {
      "@type": "Person",
      "name": "Mo Abdel",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "NMLS Mortgage License",
          "identifier": "1426884",
          "issuedBy": {
            "@type": "Organization",
            "name": "Nationwide Multistate Licensing System",
            "url": "https://www.nmlsconsumeraccess.org/"
          },
          "validIn": {
            "@type": "AdministrativeArea",
            "name": "California"
          }
        }
      ]
    },
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Orange County, CA"
    },
    "license": "NMLS #1426884"
  };

  return (
    <Head>
      {/* Enhanced Mortgage Broker Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mortgageBrokerSchema, null, 2)
        }}
      />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema, null, 2)
        }}
      />
      
      {/* Professional License Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(licenseSchema, null, 2)
        }}
      />

      {/* Geographic targeting for local SEO */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content={city ? `${city}, Orange County` : "Orange County"} />
      <meta name="geo.position" content="33.6846;-117.8265" />
      <meta name="ICBM" content="33.6846, -117.8265" />
      
      {/* Local business meta */}
      <meta name="business.hours" content="M-F 8:00-20:00, Sa 9:00-18:00, Su 10:00-16:00" />
      <meta name="business.phone" content="(949) 579-2057" />
      <meta name="business.license" content="NMLS #1426884" />
      <meta name="business.service_area" content={city ? `${city}, Orange County, CA` : "Orange County, CA"} />
      
      {/* Professional certification meta */}
      <meta name="professional.license" content="NMLS #1426884" />
      <meta name="professional.type" content="Mortgage Broker" />
      <meta name="professional.jurisdiction" content="California" />
    </Head>
  );
}