import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, GraduationCap, Shield, TrendingUp, Users, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Irvine Wholesale Mortgage Broker | Home Loans & HELOC | Mo The Broker NMLS #1426884',
  description: 'Irvine wholesale mortgage broker with wholesale rates. HELOC, refinancing, FHA, VA, and jumbo loans. Serving University Park, Woodbridge, Northwood. Call (949) 579-2057.',
  keywords: 'Irvine wholesale mortgage broker, Irvine home loans, Irvine HELOC, University Park mortgage, Woodbridge loans, Northwood wholesale mortgage broker'
};

export default function IrvineMortgageBrokerPage() {
  const irvineNeighborhoods = [
    {
      name: 'University Park',
      avgPrice: '$1.4M',
      description: 'Luxury homes near UCI with top schools and family amenities'
    },
    {
      name: 'Woodbridge',
      avgPrice: '$1.2M', 
      description: 'Established community with lakes, parks, and excellent schools'
    },
    {
      name: 'Northwood',
      avgPrice: '$1.3M',
      description: 'Family-friendly with newer construction and great amenities'
    },
    {
      name: 'Turtle Rock',
      avgPrice: '$1.5M',
      description: 'Prestigious area with canyon views and luxury properties'
    },
    {
      name: 'Quail Hill',
      avgPrice: '$1.6M',
      description: 'Newer master-planned community with modern homes'
    },
    {
      name: 'Portola Springs',
      avgPrice: '$1.1M',
      description: 'Newer development with family-friendly amenities'
    }
  ];

  const loanPrograms = [
    {
      title: 'HELOC for Irvine Homes',
      description: 'Access your home equity for renovations, education, or investment',
      benefits: ['Up to $2M+ credit lines', 'Prime + 0% intro rates', 'No closing costs available'],
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Jumbo Loans',
      description: 'Financing for Irvine\'s higher-priced homes above $766,550',
      benefits: ['Competitive jumbo rates', 'Up to $3M+ loan amounts', 'Flexible down payments'],
      icon: <Building className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Refinancing',
      description: 'Lower payments or access equity from your Irvine home',
      benefits: ['Rate & term refinancing', 'Cash-out options', 'No PMI removal'],
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
            Serving All Irvine Neighborhoods
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Irvine</span> Mortgage Broker
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Wholesale mortgage rates for Irvine homebuyers and homeowners. Specializing in 
            HELOC, jumbo loans, and refinancing for University Park, Woodbridge, Northwood, 
            and all Irvine communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Irvine Mortgage Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Irvine Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">$1.2M</h3>
            <p className="text-slate-600">Median Home Price</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">10/10</h3>
            <p className="text-slate-600">School Ratings</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">#1</h3>
            <p className="text-slate-600">Safest City in CA</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">280K+</h3>
            <p className="text-slate-600">Population</p>
          </div>
        </div>

        {/* Specialized Loan Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Mortgage Solutions for Irvine Homeowners
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

        {/* Irvine Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Irvine Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {irvineNeighborhoods.map((neighborhood, index) => (
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

        {/* Why Irvine Homeowners Choose Mo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Irvine Homeowners Choose Mo The Broker
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Wholesale Rates for High-Value Homes</h3>
                  <p className="text-slate-600">
                    Access to 200+ lenders through NEXA Mortgage means competitive rates 
                    on Irvine's higher-priced homes and jumbo loan amounts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Education-Focused Lending</h3>
                  <p className="text-slate-600">
                    Understanding of UCI families and professionals who value education. 
                    HELOC options for private school tuition and college expenses.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Master-Planned Community Expertise</h3>
                  <p className="text-slate-600">
                    Specialized expertise with Irvine Company properties, HOA requirements, 
                    and the unique aspects of master-planned communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Irvine Market Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Loan Limits (Conforming):</span>
                <span className="font-bold">$766,550</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Jumbo Loan Minimum:</span>
                <span className="font-bold">$766,551+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Average HELOC Amount:</span>
                <span className="font-bold">$350K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Property Tax Rate:</span>
                <span className="font-bold">~0.7%</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">Popular Irvine Programs:</h4>
              <div className="space-y-1 text-sm text-slate-600">
                <div>• HELOC for home improvements & education</div>
                <div>• Jumbo loans for luxury properties</div>
                <div>• Cash-out refi for investment opportunities</div>
                <div>• Rate & term refi to eliminate PMI</div>
              </div>
            </div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions - Irvine Mortgages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the average home price in Irvine?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The median home price in Irvine is approximately $1.2M, with variations by 
                  neighborhood. University Park and Turtle Rock tend to be higher, while 
                  newer developments like Portola Springs may be more accessible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do most Irvine homes require jumbo loans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, many Irvine homes exceed the 2024 conforming loan limit of $766,550, 
                  requiring jumbo financing. We specialize in competitive jumbo loan rates 
                  through our wholesale lender network.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use a HELOC for my child's college tuition?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Absolutely! Many Irvine families use HELOCs for education expenses, 
                  including UCI tuition, private schools, and out-of-state colleges. 
                  HELOC rates are typically lower than student loans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How does HOA affect my mortgage in Irvine?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Irvine's master-planned communities have HOA fees that lenders include 
                  in debt-to-income calculations. We help ensure HOA fees don't prevent 
                  qualification and work with Irvine Company requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Irvine Mortgage?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized rates for your Irvine neighborhood and loan needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Get My Irvine Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed wholesale mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving all Irvine neighborhoods
          </p>
        </div>
      </div>
    </div>
  );
}