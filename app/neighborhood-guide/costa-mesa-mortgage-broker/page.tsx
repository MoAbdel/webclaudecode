import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, ShoppingBag, Palette, TrendingUp, Users, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Costa Mesa Wholesale Mortgage Broker | Home Loans & HELOC | Mo The Broker NMLS #1426884',
  description: 'Costa Mesa wholesale mortgage broker with wholesale rates. HELOC, refinancing, FHA, VA, and conventional loans. Serving South Coast Plaza area, Mesa Verde, Eastside. Call (949) 579-2057.',
  keywords: 'Costa Mesa wholesale mortgage broker, Costa Mesa home loans, Costa Mesa HELOC, South Coast Plaza mortgage, Mesa Verde loans, Eastside Costa Mesa wholesale mortgage broker'
};

export default function CostaMesaMortgageBrokerPage() {
  const costaMesaNeighborhoods = [
    {
      name: 'South Coast Metro',
      avgPrice: '$1.1M',
      description: 'Business district near South Coast Plaza with luxury condos and townhomes'
    },
    {
      name: 'Mesa Verde', 
      avgPrice: '$950K',
      description: 'Established neighborhood with tree-lined streets and family homes'
    },
    {
      name: 'Eastside Costa Mesa',
      avgPrice: '$850K',
      description: 'Diverse area with cultural attractions and growing arts scene'
    },
    {
      name: 'Newport Heights',
      avgPrice: '$1.2M',
      description: 'Upscale area bordering Newport Beach with custom homes'
    },
    {
      name: 'Harbor View Hills',
      avgPrice: '$900K',
      description: 'Hillside community with views and newer construction'
    },
    {
      name: 'College Park',
      avgPrice: '$800K',
      description: 'Affordable area near Orange Coast College with starter homes'
    }
  ];

  const loanPrograms = [
    {
      title: 'HELOC for Costa Mesa Homes',
      description: 'Access your home equity for improvements, education, or business ventures',
      benefits: ['Up to $500K credit lines', 'Prime + 0% intro rates', 'No closing costs available'],
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Conventional Loans',
      description: 'Standard financing for Costa Mesa homes with competitive rates',
      benefits: ['As low as 3% down payment', 'No PMI with 20% down', 'Flexible loan terms'],
      icon: <Building className="w-8 h-8 text-green-600" />
    },
    {
      title: 'FHA Loans',
      description: 'Government-backed loans with low down payment requirements',
      benefits: ['3.5% down payment', 'Credit scores from 500+', 'Assumable loans'],
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
            Serving All Costa Mesa Neighborhoods
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Costa Mesa</span> Wholesale Mortgage Broker
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Wholesale mortgage rates for Costa Mesa homebuyers and homeowners. Specializing in 
            HELOC, conventional loans, and refinancing for South Coast Plaza, Mesa Verde, 
            Eastside, and all Costa Mesa communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Costa Mesa Mortgage Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Costa Mesa Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">$950K</h3>
            <p className="text-slate-600">Median Home Price</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">#1</h3>
            <p className="text-slate-600">Shopping Destination</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">50+</h3>
            <p className="text-slate-600">Art Galleries</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">113K+</h3>
            <p className="text-slate-600">Population</p>
          </div>
        </div>

        {/* Specialized Loan Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Mortgage Solutions for Costa Mesa Homeowners
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

        {/* Costa Mesa Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Costa Mesa Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costaMesaNeighborhoods.map((neighborhood, index) => (
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

        {/* Why Costa Mesa Homeowners Choose Mo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Costa Mesa Homeowners Choose Mo The Broker
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Arts District Expertise</h3>
                  <p className="text-slate-600">
                    Understanding of Costa Mesa's unique blend of business district, arts scene, 
                    and residential communities. HELOC options for art investments and business ventures.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <ShoppingBag className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">South Coast Plaza Proximity</h3>
                  <p className="text-slate-600">
                    Specialized lending for properties near Orange County's premier shopping and 
                    business destination. Understanding of luxury condo and townhome markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Palette className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Creative Community Focus</h3>
                  <p className="text-slate-600">
                    Supporting Costa Mesa's vibrant arts community with flexible lending solutions. 
                    Understanding of self-employed artists and creative professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Costa Mesa Market Expertise</h3>
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
                <span className="font-bold">$200K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Property Tax Rate:</span>
                <span className="font-bold">~0.75%</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">Popular Costa Mesa Programs:</h4>
              <div className="space-y-1 text-sm text-slate-600">
                <div>• HELOC for home improvements & art investments</div>
                <div>• Conventional loans for first-time buyers</div>
                <div>• Cash-out refi for business opportunities</div>
                <div>• FHA loans for affordable homeownership</div>
              </div>
            </div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions - Costa Mesa Mortgages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the average home price in Costa Mesa?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The median home price in Costa Mesa is approximately $950K, with variations by 
                  neighborhood. South Coast Metro tends to be higher, while College Park and 
                  some Eastside areas offer more affordable options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do Costa Mesa homes require jumbo loans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Many Costa Mesa homes fall within conforming loan limits of $1,089,300, 
                  making them eligible for conventional financing. However, luxury properties 
                  near South Coast Plaza may require jumbo loans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use a HELOC for art or business investments?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! Many Costa Mesa residents use HELOCs for art investments, gallery spaces, 
                  or starting creative businesses. Home equity can be a flexible funding source 
                  for various investment opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What loan programs work best for first-time buyers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  FHA loans with 3.5% down and conventional loans with as little as 3% down 
                  are popular in Costa Mesa. We also offer down payment assistance programs 
                  for qualified buyers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Costa Mesa Mortgage?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized rates for your Costa Mesa neighborhood and loan needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Get My Costa Mesa Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed wholesale mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving all Costa Mesa neighborhoods
          </p>
        </div>
      </div>
    </div>
  );
}