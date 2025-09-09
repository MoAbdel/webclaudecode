import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Home, MapPin, Crown, TrendingUp, Phone, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orange County Luxury Real Estate & Mortgage Financing | High-End Home Loans',
  description: 'Specialized luxury mortgage financing for Orange County\'s most exclusive properties. Jumbo loans, portfolio lending, and white-glove service for ultra-luxury homes.',
  keywords: 'luxury mortgage broker Orange County, jumbo loans, ultra-luxury home financing, Newport Beach luxury mortgages, high-end property loans'
};

const luxuryMarkets = [
  {
    title: 'Waterfront Homes',
    description: 'Exclusive oceanfront and bay-front properties with stunning water views',
    priceRange: '$3M - $50M+',
    slug: 'waterfront-homes-mortgage-broker',
    locations: ['Newport Beach', 'Corona Del Mar', 'Laguna Beach', 'Dana Point'],
    highlights: ['Ocean views', 'Private docks', 'Beach access', 'Rare inventory']
  },
  {
    title: 'Golf Course Estates',
    description: 'Premier golf course communities with resort-style amenities',
    priceRange: '$2M - $20M+',
    slug: 'golf-course-homes-mortgage-broker',
    locations: ['Newport Beach Country Club', 'Shady Canyon', 'Pelican Hill', 'Bear Brand Ranch'],
    highlights: ['Golf course views', 'Exclusive clubs', 'Resort amenities', 'Privacy']
  },
  {
    title: 'Ultra-Luxury Estates',
    description: 'Exceptional custom estates with unparalleled luxury amenities',
    priceRange: '$5M - $100M+',
    slug: 'ultra-luxury-estates-mortgage-broker',
    locations: ['Crystal Cove', 'Shady Canyon', 'Pelican Hill', 'Emerald Bay'],
    highlights: ['Custom architecture', 'Luxury amenities', 'Prime locations', 'Investment grade']
  }
];

const luxuryLoanPrograms = [
  {
    program: 'Jumbo Mortgages',
    limit: '$1.09M - $3M+',
    features: ['Competitive rates', 'Flexible terms', 'Fast closing'],
    icon: TrendingUp
  },
  {
    program: 'Portfolio Lending',
    limit: '$3M - No Limit',
    features: ['Asset-based qualifying', 'Bank statements', 'Investment properties'],
    icon: Crown
  },
  {
    program: 'Interest-Only Options',
    limit: 'Up to $20M',
    features: ['Payment flexibility', 'Cash flow optimization', 'Investment strategies'],
    icon: Star
  }
];

export default function LuxuryMarketsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Orange County <span className="text-blue-600">Luxury Real Estate</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Specialized mortgage financing for Orange County's most exclusive properties. 
            From oceanfront estates to golf course communities, we provide white-glove service 
            for high-end home purchases and refinancing.
          </p>
          <div className="flex items-center justify-center text-slate-700 mb-8">
            <Crown className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-lg">Expert in luxury mortgage financing up to $100M+</span>
          </div>
        </div>

        {/* Luxury Market Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {luxuryMarkets.map((market, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:border-blue-200 group">
              <CardHeader>
                <CardTitle className="flex items-center text-xl group-hover:text-blue-600 transition-colors">
                  <Home className="w-6 h-6 text-blue-600 mr-3" />
                  {market.title}
                </CardTitle>
                <p className="text-slate-600">{market.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-600">Price Range:</span>
                    <span className="font-bold text-green-600">{market.priceRange}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Locations:</h4>
                  <div className="space-y-1">
                    {market.locations.map((location, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-600">
                        <MapPin className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {location}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-slate-600">
                    {market.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href={`/luxury-markets/${market.slug}`}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                    {market.title} Financing
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Luxury Loan Programs */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Luxury Mortgage Programs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized lending solutions designed for high-net-worth individuals and luxury properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {luxuryLoanPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2">{program.program}</h3>
                    <p className="text-blue-600 font-semibold text-lg mb-4">{program.limit}</p>
                    <div className="space-y-2">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-center justify-center text-sm text-slate-600">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us for Luxury Properties */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              White-Glove Service for Luxury Properties
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Crown className="w-7 h-7 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Exclusive Lender Network</h3>
                  <p className="text-slate-600">Access to private banks and portfolio lenders specializing in luxury properties and high-net-worth clients</p>
                </div>
              </div>
              <div className="flex items-start">
                <Star className="w-7 h-7 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Personalized Service</h3>
                  <p className="text-slate-600">Dedicated support throughout the process with discretion and attention to detail expected by luxury clients</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-7 h-7 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Competitive Terms</h3>
                  <p className="text-slate-600">Negotiate the best possible rates and terms for luxury properties with flexible underwriting guidelines</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-7 h-7 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Fast Closings</h3>
                  <p className="text-slate-600">Expedited processing and closing timelines to meet tight luxury property transaction deadlines</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Luxury Mortgage Expertise</h3>
            <p className="text-slate-700 mb-6">
              With access to specialized lenders and portfolio loan programs, I help clients 
              secure financing for Orange County's most exclusive properties. From $3M oceanfront 
              homes to $50M+ estates, I provide the expertise and service level you expect.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm">Jumbo loans up to $3M with competitive rates</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm">Portfolio lending for properties above $3M</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm">Asset-based underwriting for high-net-worth clients</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm">Interest-only and custom loan structures</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm">Confidential and discreet service</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Luxury Mortgage FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                What loan amount limits apply to luxury properties?
              </h3>
              <p className="text-slate-600">
                For properties above the conforming limit ($1.09M in Orange County), we offer jumbo mortgages. 
                For properties above $3M, portfolio lending provides more flexibility with no upper limits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                How do luxury property appraisals work?
              </h3>
              <p className="text-slate-600">
                Luxury properties require specialized appraisers familiar with high-end features and comparable sales. 
                We work with a network of certified luxury property appraisers throughout Orange County.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                What documentation is required for luxury mortgages?
              </h3>
              <p className="text-slate-600">
                Documentation varies by loan type. Traditional jumbo loans require full documentation, while 
                portfolio loans may accept bank statements, asset verification, or other alternative documentation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Can you finance investment luxury properties?
              </h3>
              <p className="text-slate-600">
                Yes, we offer financing for luxury investment properties including vacation rentals, 
                multi-family properties, and investment estates with specialized loan programs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Finance Your Luxury Property?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized luxury mortgage solutions and white-glove service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Get Luxury Mortgage Quote
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed mortgage broker • NEXA Mortgage • NMLS #1426884 • Luxury property specialist
          </p>
        </div>
      </div>
    </div>
  );
}



