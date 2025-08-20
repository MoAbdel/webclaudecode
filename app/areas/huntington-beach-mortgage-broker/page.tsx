import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, Waves, Sun, TrendingUp, Users, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Huntington Beach HELOC Rates | Huntington Beach Mortgage Broker | Mo Abdel NMLS #1426884',
  description: 'Best Huntington Beach HELOC rates and mortgage broker services. Competitive HELOC rates, refinancing, FHA, VA, and jumbo loans. Serving Surf City, Main Street, Bella Terra. Call (949) 579-2057.',
  keywords: 'Huntington Beach HELOC rates, huntington heloc rates, Huntington Beach HELOC, Huntington Beach mortgage broker, Huntington Beach home loans, Surf City HELOC, Main Street HELOC'
};

export default function HuntingtonBeachMortgageBrokerPage() {
  const huntingtonBeachNeighborhoods = [
    {
      name: 'Main Street/Downtown',
      avgPrice: '$1.3M',
      description: 'Historic downtown with pier proximity and beachside lifestyle'
    },
    {
      name: 'Surf City', 
      avgPrice: '$1.2M',
      description: 'Classic beach community with vintage charm and surf culture'
    },
    {
      name: 'Bella Terra',
      avgPrice: '$1.0M',
      description: 'Newer development with shopping, dining, and family amenities'
    },
    {
      name: 'Oak View',
      avgPrice: '$900K',
      description: 'Inland neighborhood with larger lots and family-friendly atmosphere'
    },
    {
      name: 'Seacliff',
      avgPrice: '$1.5M',
      description: 'Upscale oceanfront community with luxury beach properties'
    },
    {
      name: 'Brightwater',
      avgPrice: '$2.5M',
      description: 'Luxury gated community with waterfront homes and resort amenities'
    }
  ];

  const loanPrograms = [
    {
      title: 'HELOC for Beach Properties',
      description: 'Access your coastal home equity for improvements, investment, or lifestyle',
      benefits: ['Up to $500K credit lines', 'Prime + 0% intro rates', 'No closing costs available'],
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Jumbo Loans',
      description: 'Financing for Huntington Beach luxury and oceanfront properties',
      benefits: ['Competitive jumbo rates', 'Up to $3M+ loan amounts', 'Flexible down payments'],
      icon: <Building className="w-8 h-8 text-green-600" />
    },
    {
      title: 'VA Loans',
      description: 'No down payment loans for veterans and active military',
      benefits: ['0% down payment', 'No PMI required', 'Competitive interest rates'],
      icon: <Home className="w-8 h-8 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Serving All Huntington Beach Areas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Huntington Beach</span> Mortgage Broker: Beach Home Loans and Refinancing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Competitive mortgage rates for Huntington Beach homebuyers and homeowners. Specializing in 
            HELOC, jumbo loans, and refinancing for Main Street, Surf City, Bella Terra, 
            and all Huntington Beach communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get HB Mortgage Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Huntington Beach Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">$1.1M</h3>
            <p className="text-slate-600">Median Home Price</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Waves className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">10</h3>
            <p className="text-slate-600">Miles of Beach</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">280+</h3>
            <p className="text-slate-600">Sunny Days/Year</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">198K+</h3>
            <p className="text-slate-600">Population</p>
          </div>
        </div>

        {/* Specialized Loan Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Mortgage Solutions for Huntington Beach Homeowners
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {loanPrograms.map((program, index) => (
              <Card key={index} className="border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {program.icon}
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </div>
                  <p className="text-slate-600">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {program.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <Link href="/loan-programs">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Huntington Beach Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Huntington Beach Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {huntingtonBeachNeighborhoods.map((neighborhood, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    {neighborhood.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-600">Avg Home Price:</span>
                    <span className="font-bold text-green-600">{neighborhood.avgPrice}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{neighborhood.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Huntington Beach Homeowners Choose Mo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Huntington Beach Homeowners Choose Mo Abdel
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Waves className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Coastal Property Expertise</h3>
                  <p className="text-slate-600">
                    Specialized expertise with beachfront properties, flood insurance requirements, 
                    and coastal zone regulations. Understanding of Surf City lifestyle financing needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Sun className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Beach Lifestyle Lending</h3>
                  <p className="text-slate-600">
                    HELOC options for beach home improvements, pier proximity property investments, 
                    and vacation rental financing. Understanding the unique HB market dynamics.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Military-Friendly Programs</h3>
                  <p className="text-slate-600">
                    Strong military community support with VA loan expertise. Understanding of 
                    deployment schedules and military family unique lending requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Huntington Beach Market Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Loan Limits (Conforming):</span>
                <span className="font-bold">$1,089,300</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Jumbo Loan Minimum:</span>
                <span className="font-bold">$1,089,301+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Average HELOC Amount:</span>
                <span className="font-bold">$250K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Flood Insurance:</span>
                <span className="font-bold">Required in zones</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">Popular HB Programs:</h4>
              <div className="space-y-1 text-sm text-slate-600">
                <div>• VA loans for military families</div>
                <div>• HELOC for beach home improvements</div>
                <div>• Jumbo loans for oceanfront properties</div>
                <div>• Cash-out refi for investment opportunities</div>
              </div>
            </div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions - Huntington Beach Mortgages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do beachfront properties require special insurance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, properties in certain coastal zones require flood insurance. We help navigate 
                  FEMA flood zone requirements and connect you with appropriate insurance providers 
                  to ensure complete financing approval.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the average home price near the pier?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Properties within walking distance of the Huntington Pier typically range from 
                  $1.2M to $2M+, depending on size and ocean proximity. These often require 
                  jumbo financing due to premium locations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can military families use VA loans for beach properties?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Absolutely! VA loans can be used for primary residences in Huntington Beach, 
                  including properties near the beach. We specialize in helping military families 
                  achieve their coastal living dreams with 0% down.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there programs for vacation rental properties?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, we offer investment property loans for vacation rentals and short-term rental 
                  properties. HELOCs can also provide flexible funding for property improvements 
                  and furnishing vacation rentals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Huntington Beach Mortgage?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized rates for your Surf City neighborhood and loan needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Get My HB Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving all Huntington Beach neighborhoods
          </p>
        </div>
      </div>
    </div>
  );
}