import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import EnhancedContactForm from '@/components/EnhancedContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Orange County Mortgage Broker | Mo Abdel NMLS #1426884',
  description: 'Contact Mo Abdel, licensed Orange County mortgage broker with 200+ lenders access. Free consultation, 18-day closings. Call (949) 579-2057 or apply online.',
  alternates: {
    canonical: 'https://www.mothebroker.com/contact-orange-county-mortgage-broker',
  },
};

// JSON-LD Schema for LocalBusiness Contact
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mo Abdel - Orange County Mortgage Broker",
  "alternateName": "Mo The Broker",
  "description": "Licensed mortgage broker serving Orange County with access to 200+ lenders",
  "identifier": "NMLS #1426884",
  "telephone": "(949) 579-2057",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lake Forest",
    "addressRegion": "CA",
    "postalCode": "92630",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Irvine",
      "addressRegion": "CA"
    },
    {
      "@type": "City", 
      "name": "Newport Beach",
      "addressRegion": "CA"
    },
    {
      "@type": "City",
      "name": "Mission Viejo", 
      "addressRegion": "CA"
    },
    {
      "@type": "State",
      "name": "Orange County",
      "addressRegion": "CA"
    }
  ],
  "serviceType": [
    "Mortgage Loans",
    "Home Refinancing", 
    "FHA Loans",
    "VA Loans",
    "Jumbo Loans",
    "First Time Home Buyer Programs"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mortgage Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Purchase Loans",
          "description": "Home purchase financing with competitive rates"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Refinancing",
          "description": "Lower your rate or access equity with refinancing"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50+"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(949) 579-2057",
    "contactType": "customer service",
    "areaServed": "Orange County, CA",
    "availableLanguage": "English",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "opens": "00:00",
      "closes": "23:59",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ]
    }
  },
  "url": "https://www.mothebroker.com",
  "logo": "https://www.mothebroker.com/MoAbdelLogo.png",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61573517340174",
    "https://www.instagram.com/mo_thebroker",
    "https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest"
  ]
};

export default function ContactOrangeCountyMortgageBrokerPage() {
  return (
    <>
      {/* LocalBusiness Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      
      <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500">Contact</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Licensed NMLS #1426884
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Contact Your Orange County Mortgage Broker
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-6">
              Ready to start your mortgage journey? Get your free consultation and rate quote from a licensed broker with access to 200+ lenders. Available 24/7 for your convenience.
            </p>
            
            {/* Quick Contact Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 579-2057" className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700">
                <Phone className="w-6 h-6 mr-2" />
                (949) 579-2057
              </a>
              <div className="inline-flex items-center text-slate-600 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Serving All Orange County
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <Card className="text-center shadow-lg">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">200+</div>
                <div className="text-sm text-slate-600">Lender Partners</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-600 mb-1">18 Days</div>
                <div className="text-sm text-slate-600">Avg Closing</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                <div className="text-sm text-slate-600">Availability</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">4.9★</div>
                <div className="text-sm text-slate-600">Client Rating</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Phone className="w-6 h-6 mr-3 text-blue-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Call or Text</h3>
                      <a href="tel:(949) 579-2057" className="text-blue-600 hover:text-blue-700 text-xl font-bold">
                        (949) 579-2057
                      </a>
                      <p className="text-sm text-slate-600">Available 24/7 - Call anytime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Email Response</h3>
                      <p className="text-green-600 font-semibold">Use form below for detailed inquiries</p>
                      <p className="text-sm text-slate-600">Response within 1 business day</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Service Area</h3>
                      <p className="text-purple-600 font-semibold">All Orange County, California</p>
                      <p className="text-sm text-slate-600">Based in Lake Forest • Serving all OC cities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Office Hours</h3>
                      <p className="text-orange-600 font-semibold">24/7 Availability</p>
                      <p className="text-sm text-slate-600">Evening & weekend appointments available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Call Direct */}
              <Card className="shadow-xl mt-8">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-600" />
                    Why Contact Me Directly?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Direct access</strong> - No call centers or middlemen</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700"><strong>200+ lenders</strong> competing for your business</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700"><strong>18-day average</strong> closing time</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700"><strong>15+ years</strong> Orange County experience</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700"><strong>Licensed broker</strong> NMLS #1426884</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="shadow-xl mt-8">
                <CardHeader>
                  <CardTitle className="text-xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://www.facebook.com/profile.php?id=61573517340174" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="flex items-center justify-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                      <span className="text-blue-600 font-medium">Facebook</span>
                    </a>
                    <a href="https://www.yelp.com/biz/mo-abdel-nexa-mortgage-lake-forest" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center justify-center p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                      <span className="text-red-600 font-medium">Yelp Reviews</span>
                    </a>
                    <a href="https://share.google/wFT7ePRJSrCjZ6KAg" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center justify-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                      <span className="text-green-600 font-medium">Google</span>
                    </a>
                    <a href="https://www.instagram.com/mo_thebroker" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center justify-center p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                      <span className="text-purple-600 font-medium">Instagram</span>
                    </a>
                  </div>
                  <p className="text-sm text-slate-600 mt-4 text-center">
                    Follow for Orange County market updates and mortgage tips
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Get Your Free Rate Quote
                  </CardTitle>
                  <p className="text-slate-600 text-center">
                    Fill out the form below and I'll get back to you within hours with a personalized rate quote and loan options.
                  </p>
                </CardHeader>
                <CardContent>
                  <EnhancedContactForm />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Service Areas - Enhanced with local SEO */}
          <div className="mt-16">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-center">
                  Orange County Cities We Serve
                </CardTitle>
                <p className="text-slate-600 text-center">
                  Licensed to serve all Orange County communities with local market expertise
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    'Irvine', 'Newport Beach', 'Mission Viejo', 'Huntington Beach',
                    'Costa Mesa', 'Orange', 'Anaheim', 'Santa Ana', 
                    'Fullerton', 'Laguna Beach', 'Yorba Linda', 'Tustin',
                    'Aliso Viejo', 'Dana Point', 'Lake Forest', 'Fountain Valley',
                    'Garden Grove', 'Laguna Hills', 'Rancho Santa Margarita', 'Seal Beach',
                    'Westminster', 'Laguna Niguel', 'Buena Park', 'Cypress',
                    'Los Alamitos', 'Placentia', 'San Clemente', 'San Juan Capistrano',
                    'Villa Park', 'Stanton', 'La Habra', 'Brea'
                  ].map((city) => (
                    <div key={city} className="text-center p-3 bg-slate-50 hover:bg-blue-50 rounded-lg transition-colors">
                      <span className="text-slate-700 hover:text-blue-600 font-medium">{city}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-slate-600 mt-6 text-lg">
                  <strong>Complete Orange County Coverage</strong> - Every city, every neighborhood, every community
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contact CTA */}
          <div className="mt-12">
            <Card className="shadow-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Time-sensitive mortgage questions? I'm available 24/7 for urgent inquiries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:(949) 579-2057">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: (949) 579-2057
                    </Button>
                  </a>
                  <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                    <Clock className="w-5 h-5 mr-2" />
                    Available 24/7
                  </Button>
                </div>
                <p className="text-sm text-blue-200 mt-4">
                  Licensed mortgage broker NMLS #1426884 • NEXA Mortgage LLC
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}