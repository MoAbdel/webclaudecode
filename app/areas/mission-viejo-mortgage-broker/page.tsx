import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, GraduationCap, Shield, TrendingUp, Users, Building, TreePine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mission Viejo Wholesale Mortgage Broker | Home Loans & HELOC | Mo The Broker NMLS #1426884',
  description: 'Mission Viejo wholesale mortgage broker with wholesale rates. HELOC, refinancing, FHA, VA, and conventional loans. Serving Saddleback Valley, Lake Mission Viejo area. Call (949) 579-2057.',
  keywords: 'Mission Viejo wholesale mortgage broker, Mission Viejo home loans, Mission Viejo HELOC, Saddleback Valley mortgage, Lake Mission Viejo loans, wholesale mortgage broker'
};

export default function MissionViejoMortgageBrokerPage() {
  const missionViejoNeighborhoods = [
    {
      name: 'Lake Mission Viejo',
      avgPrice: '$1.1M',
      description: 'Exclusive lakefront community with private beach and water activities'
    },
    {
      name: 'Saddleback Valley', 
      avgPrice: '$950K',
      description: 'Master-planned neighborhoods with mountain views and family amenities'
    },
    {
      name: 'Alicia',
      avgPrice: '$900K',
      description: 'Established area with mature trees and close to town center'
    },
    {
      name: 'Castille',
      avgPrice: '$850K',
      description: 'Family-friendly community with parks and top-rated schools'
    },
    {
      name: 'La Paz',
      avgPrice: '$800K',
      description: 'Convenient location with shopping and freeway access'
    },
    {
      name: 'Marguerite',
      avgPrice: '$920K',
      description: 'Hillside community with canyon views and hiking trails'
    }
  ];

  const loanPrograms = [
    {
      title: 'HELOC for Mission Viejo Homes',
      description: 'Access your home equity for education, improvements, or investments',
      benefits: ['Up to $500K credit lines', 'Prime + 0% intro rates', 'No closing costs available'],
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Conventional Loans',
      description: 'Standard financing for Mission Viejo master-planned communities',
      benefits: ['As low as 3% down payment', 'No PMI with 20% down', 'Competitive interest rates'],
      icon: <Building className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Refinancing Solutions',
      description: 'Lower payments or access equity from your Mission Viejo home',
      benefits: ['Rate & term refinancing', 'Cash-out options', 'PMI removal'],
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
            Serving All Mission Viejo Areas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Mission Viejo</span> Wholesale Mortgage Broker
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Wholesale mortgage rates for Mission Viejo homebuyers and homeowners. Specializing in 
            HELOC, conventional loans, and refinancing for Lake Mission Viejo, Saddleback Valley, 
            and all Mission Viejo master-planned communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Mission Viejo Mortgage Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Mission Viejo Market Stats */}
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
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">10/10</h3>
            <p className="text-slate-600">School Ratings</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Top 5</h3>
            <p className="text-slate-600">Safest Cities CA</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">95K+</h3>
            <p className="text-slate-600">Population</p>
          </div>
        </div>

        {/* Specialized Loan Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Mortgage Solutions for Mission Viejo Homeowners
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

        {/* Mission Viejo Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Mission Viejo Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionViejoNeighborhoods.map((neighborhood, index) => (
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

        {/* Why Mission Viejo Homeowners Choose Mo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Mission Viejo Homeowners Choose Mo The Broker
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Education-Focused Lending</h3>
                  <p className="text-slate-600">
                    Understanding of families who prioritize top-rated schools. HELOC options for 
                    private school tuition, college expenses, and educational investments.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <TreePine className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Master-Planned Community Expertise</h3>
                  <p className="text-slate-600">
                    Specialized expertise with Mission Viejo Company properties, HOA requirements, 
                    and the unique aspects of planned communities with amenities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Family-Oriented Solutions</h3>
                  <p className="text-slate-600">
                    Tailored lending for growing families in safe communities. Understanding of 
                    recreation amenities, lake access, and family lifestyle financing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission Viejo Market Expertise</h3>
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
                <span className="font-bold">$220K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Property Tax Rate:</span>
                <span className="font-bold">~0.68%</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">Popular Mission Viejo Programs:</h4>
              <div className="space-y-1 text-sm text-slate-600">
                <div>• HELOC for education & home improvements</div>
                <div>• Conventional loans for family homes</div>
                <div>• Cash-out refi for investment opportunities</div>
                <div>• Rate & term refi to eliminate PMI</div>
              </div>
            </div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions - Mission Viejo Mortgages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I get lake access with my home purchase?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Lake Mission Viejo access requires membership, which can be included in some 
                  home purchases or purchased separately. We help structure financing to 
                  include lake membership fees when needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do HOA fees affect my mortgage qualification?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Mission Viejo's master-planned communities have HOA fees that lenders include 
                  in debt-to-income calculations. We ensure HOA fees don't prevent qualification 
                  and help optimize your loan structure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there programs for families with school-age children?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  While there aren't specific school-based mortgage programs, we offer HELOCs 
                  for education expenses and understand the importance of school district 
                  boundaries in Mission Viejo home selection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the average home price in Saddleback Valley?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The Saddleback Valley area of Mission Viejo averages around $950K, with 
                  variations based on specific neighborhood, home size, and amenities. 
                  Most fall within conforming loan limits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Mission Viejo Mortgage?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized rates for your Mission Viejo neighborhood and loan needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Get My Mission Viejo Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed wholesale mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving all Mission Viejo neighborhoods
          </p>
        </div>
      </div>
    </div>
  );
}