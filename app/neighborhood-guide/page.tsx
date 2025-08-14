import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, TrendingUp, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orange County Neighborhood Guide | Home Buying Guide by Area | Local Mortgage Expert',
  description: 'Complete Orange County neighborhood buying guides: Irvine, Newport Beach, Mission Viejo, Costa Mesa. Home prices, schools, market trends, and mortgage advice by area.',
  keywords: 'Orange County neighborhood guide, home buying guide OC, Irvine vs Newport Beach, best neighborhoods Orange County'
};

const serviceAreas = [
  {
    city: 'Irvine',
    description: 'Master-planned community with top schools and family-friendly neighborhoods',
    medianHome: '$1.2M',
    slug: 'irvine-mortgage-broker',
    highlights: ['Great Pacific Elementary', 'Irvine Spectrum', 'UCI proximity', 'Safe neighborhoods']
  },
  {
    city: 'Mission Viejo',
    description: 'Master-planned city with excellent schools and resort-style amenities',
    medianHome: '$950K',
    slug: 'mission-viejo-mortgage-broker',
    highlights: ['Saddleback Valley', 'Lake Mission Viejo', 'Top schools', 'Family community']
  },
  {
    city: 'Anaheim',
    description: 'Home to Disneyland with diverse neighborhoods and growing downtown',
    medianHome: '$750K',
    slug: 'anaheim-mortgage-broker',
    highlights: ['Disneyland Resort', 'Angel Stadium', 'Downtown growth', 'Family areas']
  },
  {
    city: 'Newport Beach',
    description: 'Luxury coastal living with world-class beaches and upscale amenities',
    medianHome: '$2.8M',
    slug: 'newport-beach-mortgage-broker', 
    highlights: ['Balboa Island', 'Fashion Island', 'Harbor views', 'Luxury properties']
  },
  {
    city: 'Costa Mesa',
    description: 'Arts district with shopping, dining, and convenient freeway access',
    medianHome: '$950K',
    slug: 'costa-mesa-mortgage-broker',
    highlights: ['South Coast Plaza', 'OC Fair', 'Arts scene', 'Central location']
  },
  {
    city: 'Huntington Beach',
    description: 'Surf City USA with beach lifestyle and family communities',
    medianHome: '$1.1M',
    slug: 'huntington-beach-mortgage-broker',
    highlights: ['Beach proximity', 'Main Street', 'Surf culture', 'Pier area']
  },
  {
    city: 'Laguna Beach',
    description: 'Artist community with stunning coastal scenery and unique architecture',
    medianHome: '$2.2M',
    slug: 'laguna-beach-mortgage-broker',
    highlights: ['Art galleries', 'Pageant of Masters', 'Coastal views', 'Unique homes']
  },
  {
    city: 'Santa Ana',
    description: 'Orange County seat with diverse neighborhoods and growing downtown',
    medianHome: '$650K',
    slug: 'santa-ana-mortgage-broker',
    highlights: ['Downtown arts district', 'Floral Park', 'French Park', 'Affordable housing']
  },
  {
    city: 'Tustin',
    description: 'Historic charm meets modern development in this central OC location',
    medianHome: '$900K',
    slug: 'tustin-mortgage-broker',
    highlights: ['The District', 'Tustin Legacy', 'Historic Old Town', 'Great schools']
  }
];

export default function NeighborhoodGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Orange County <span className="text-blue-600">Neighborhood Guide</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Your complete guide to buying homes in Orange County. Compare neighborhoods, 
            understand market trends, and get expert mortgage advice for each area.
          </p>
          <div className="flex items-center justify-center text-slate-700 mb-8">
            <MapPin className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-lg">Licensed to serve all Orange County cities</span>
          </div>
        </div>

        {/* Featured Comparison Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Featured Neighborhood Comparisons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Irvine vs Newport Beach
              </h3>
              <p className="text-slate-600 mb-6">
                Compare Orange County's top family-friendly city against luxury coastal living. 
                Home prices, schools, lifestyle, and mortgage considerations.
              </p>
              <Link href="/neighborhood-guide/irvine-vs-newport-beach-home-buying-guide">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Read Full Comparison
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-2xl border border-purple-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Complete OC Neighborhoods Guide
              </h3>
              <p className="text-slate-600 mb-6">
                Side-by-side comparison of 6+ Orange County neighborhoods including 
                home prices, schools, commutes, and lifestyle ratings.
              </p>
              <Link href="/neighborhood-guide/orange-county-neighborhoods-comparison-guide">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Compare All Areas
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Individual Neighborhood Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Home className="w-5 h-5 text-blue-600 mr-2" />
                  {area.city}
                </CardTitle>
                <p className="text-slate-600">{area.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Median Home Price:</span>
                    <span className="font-bold text-green-600">{area.medianHome}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Area Highlights:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-slate-600">
                    {area.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href={`/neighborhood-guide/${area.slug}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {area.city} Mortgage Info
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Cities */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
            Additional Orange County Cities We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Aliso Viejo', 'Brea', 'Buena Park', 'Cypress', 'Dana Point', 'Fountain Valley',
              'Fullerton', 'Garden Grove', 'La Habra', 'La Palma', 'Lake Forest', 'Los Alamitos',
              'Newport Coast', 'Orange', 'Placentia', 'Rancho Santa Margarita', 'San Clemente',
              'San Juan Capistrano', 'Santa Ana', 'Seal Beach', 'Stanton', 'Villa Park', 'Westminster', 'Yorba Linda'
            ].map((city, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                <span className="text-slate-700 font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Mo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Mo for Your Orange County Mortgage?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">NEXA Mortgage Wholesale Access</h3>
                  <p className="text-slate-600">Access to 200+ lenders means better rates and terms than retail banks</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Local Market Expertise</h3>
                  <p className="text-slate-600">Deep knowledge of Orange County neighborhoods and wholesale mortgage market</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Remote Convenience</h3>
                  <p className="text-slate-600">Complete your mortgage process remotely with digital tools and personal service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Serving Orange County Remotely</h3>
            <p className="text-slate-700 mb-6">
              While my brokerage office is located in Mesa, Arizona, I work remotely to serve 
              Orange County clients with the same personalized attention and competitive rates. 
              Modern technology allows us to complete your entire mortgage process efficiently and securely.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Digital document upload and e-signatures</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Video consultations and phone support</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Local Orange County market knowledge</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Competitive wholesale rates and terms</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started in Your Orange County City?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized rates and programs for your specific area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Get Area-Specific Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed wholesale mortgage broker with NEXA Mortgage • NMLS #1426884
          </p>
        </div>
      </div>
    </div>
  );
}