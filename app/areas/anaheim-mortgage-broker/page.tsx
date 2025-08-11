import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, Castle, Users, TrendingUp, Building, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anaheim Wholesale Mortgage Broker | Home Loans & HELOC | Mo The Broker NMLS #1426884',
  description: 'Anaheim wholesale mortgage broker with wholesale rates. HELOC, refinancing, FHA, VA, and conventional loans. Serving Disneyland area, Anaheim Hills, Downtown. Call (949) 579-2057.',
  keywords: 'Anaheim wholesale mortgage broker, Anaheim home loans, Anaheim HELOC, Disneyland area mortgage, Anaheim Hills loans, Downtown Anaheim wholesale mortgage broker'
};

export default function AnaheimMortgageBrokerPage() {
  const anaheimNeighborhoods = [
    {
      name: 'Anaheim Hills',
      avgPrice: '$1.2M',
      description: 'Upscale master-planned community with canyon views and luxury amenities'
    },
    {
      name: 'Downtown Anaheim', 
      avgPrice: '$600K',
      description: 'Urban revitalization area with new condos, dining, and entertainment'
    },
    {
      name: 'Resort District',
      avgPrice: '$700K',
      description: 'Near Disneyland with family-friendly communities and tourism benefits'
    },
    {
      name: 'West Anaheim',
      avgPrice: '$650K',
      description: 'Diverse neighborhoods with affordable family homes and growing amenities'
    },
    {
      name: 'East Anaheim',
      avgPrice: '$750K',
      description: 'Established residential areas with parks, schools, and community centers'
    },
    {
      name: 'Canyon Hills',
      avgPrice: '$900K',
      description: 'Hillside community with custom homes and scenic canyon views'
    }
  ];

  const loanPrograms = [
    {
      title: 'FHA Loans for Anaheim',
      description: 'Low down payment government-backed loans perfect for first-time buyers',
      benefits: ['3.5% down payment', 'Credit scores from 500+', 'Assumable loans'],
      icon: <Heart className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'HELOC for Family Homes',
      description: 'Access your home equity for Disney trips, education, or improvements',
      benefits: ['Up to $500K credit lines', 'Prime + 0% intro rates', 'No closing costs available'],
      icon: <TrendingUp className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Conventional Loans',
      description: 'Flexible financing options for Anaheim homes with competitive rates',
      benefits: ['As low as 3% down payment', 'No PMI with 20% down', 'Various loan terms'],
      icon: <Building className="w-8 h-8 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Serving All Anaheim Communities
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Anaheim</span> Wholesale Mortgage Broker
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Wholesale mortgage rates for Anaheim homebuyers and homeowners. Specializing in 
            FHA loans, HELOC, and refinancing for Disneyland area, Anaheim Hills, Downtown, 
            and all Anaheim communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Anaheim Mortgage Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Anaheim Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">$750K</h3>
            <p className="text-slate-600">Median Home Price</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Castle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">#1</h3>
            <p className="text-slate-600">Tourist Destination</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">1955</h3>
            <p className="text-slate-600">Disneyland Opening</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">346K+</h3>
            <p className="text-slate-600">Population</p>
          </div>
        </div>

        {/* Specialized Loan Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Mortgage Solutions for Anaheim Homeowners
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
                  <Link href="/programs">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Anaheim Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Anaheim Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {anaheimNeighborhoods.map((neighborhood, index) => (
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

        {/* Why Anaheim Homeowners Choose Mo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Anaheim Homeowners Choose Mo The Broker
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">First-Time Buyer Specialist</h3>
                  <p className="text-slate-600">
                    Extensive experience helping Anaheim families achieve homeownership with 
                    FHA loans, down payment assistance, and first-time buyer programs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Castle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Tourism Industry Understanding</h3>
                  <p className="text-slate-600">
                    Knowledge of Anaheim's tourism-driven economy and seasonal employment patterns. 
                    Flexible lending solutions for hospitality industry professionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Diverse Community Focus</h3>
                  <p className="text-slate-600">
                    Multilingual support and cultural understanding. Experience serving Anaheim's 
                    diverse population with tailored mortgage solutions and programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Anaheim Market Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">FHA Loan Limit:</span>
                <span className="font-bold">$1,089,300</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Conventional Limit:</span>
                <span className="font-bold">$1,089,300</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Average HELOC Amount:</span>
                <span className="font-bold">$150K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Property Tax Rate:</span>
                <span className="font-bold">~0.75%</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">Popular Anaheim Programs:</h4>
              <div className="space-y-1 text-sm text-slate-600">
                <div>• FHA loans for first-time buyers</div>
                <div>• HELOC for family vacations & education</div>
                <div>• Down payment assistance programs</div>
                <div>• Refinancing for better rates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl text-blue-600 mb-4">"</div>
            <p className="text-lg text-slate-700 mb-6 italic">
              "As first-time buyers in Anaheim, Mo's FHA loan expertise was perfect for us. 
              With only 3.5% down, we were able to buy our family home near the schools we wanted. 
              The Disney employee discounts were an added bonus we didn't expect!"
            </p>
            <div className="font-bold text-slate-900">Maria & Carlos R.</div>
            <div className="text-slate-600">West Anaheim</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions - Anaheim Mortgages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there special programs for Disney employees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! Disney offers employee homebuying assistance programs, and we're familiar 
                  with these benefits. We can help coordinate Disney's assistance with our 
                  wholesale mortgage programs for maximum savings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What credit score do I need for FHA in Anaheim?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  FHA loans in Anaheim accept credit scores as low as 500+ with higher down 
                  payments, or 580+ with 3.5% down. We work with borrowers to improve credit 
                  and find the best loan program available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How does tourism affect Anaheim property values?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Tourism generally supports property values through job creation and economic 
                  activity. Properties near attractions may have rental income potential, 
                  and we offer investment property loans for this opportunity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I buy in Anaheim Hills with a conventional loan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Absolutely! Most Anaheim Hills properties qualify for conventional loans. 
                  Some higher-priced homes may require jumbo financing, but we offer 
                  competitive rates for both conventional and jumbo loans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Anaheim Mortgage?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized rates for your Anaheim neighborhood and loan needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Get My Anaheim Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed wholesale mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving all Anaheim neighborhoods
          </p>
        </div>
      </div>
    </div>
  );
}