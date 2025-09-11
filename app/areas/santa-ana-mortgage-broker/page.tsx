import React from 'react';
import { CANONICAL_BASE, SHORT_BRAND, LOGO, TELEPHONE, AREA_SERVED, PROFILES } from "@/lib/seo-constants";
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, Building2, Users, TrendingUp, Heart, Briefcase } from 'lucide-react';

export async function generateMetadata() {
  const path = "/areas/santa-ana-mortgage-broker";
  const title = "Mortgage Broker in Santa Ana, CA | " + SHORT_BRAND;
  const description = "Looking for a trusted mortgage broker in Santa Ana, Orange County, CA? Compare rates, refinance, or get pre-approved today.";
  return {
    title,
    description,
    alternates: { canonical: CANONICAL_BASE + path },
    openGraph: {
      title,
      description: "Get expert mortgage help in Santa Ana, Orange County, CA. Contact us today.",
      url: CANONICAL_BASE + path,
      siteName: SHORT_BRAND,
      images: [LOGO],
    },
  };
}

export default function SantaAnaMortgageBrokerPage() {
  const santaAnaNeighborhoods = [
    {
      name: 'Downtown Santa Ana',
      avgPrice: '$550K',
      description: 'Urban core with historic buildings, arts district, and new development'
    },
    {
      name: 'Floral Park', 
      avgPrice: '$800K',
      description: 'Historic district with charming 1920s homes and tree-lined streets'
    },
    {
      name: 'French Park',
      avgPrice: '$700K',
      description: 'Family neighborhood with parks, schools, and community amenities'
    },
    {
      name: 'Park Santiago',
      avgPrice: '$650K',
      description: 'Established area with mid-century homes and mature landscaping'
    },
    {
      name: 'Willard',
      avgPrice: '$600K',
      description: 'Diverse community with affordable housing and growing development'
    },
    {
      name: 'Delhi',
      avgPrice: '$550K',
      description: 'Historic area with craftsman homes and cultural significance'
    },
  ];

const loanPrograms = [
    {
      title: 'FHA Loans for Santa Ana',
      description: 'Low down payment government-backed loans perfect for homeownership',
      benefits: ['3.5% down payment', 'Credit scores from 500+', 'Flexible qualification'],
      icon: <Heart className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'First-Time Buyer Programs',
      description: 'Special programs and down payment assistance for new homeowners',
      benefits: ['Down payment assistance', 'Reduced closing costs', 'Educational resources'],
      icon: <Home className="w-8 h-8 text-green-600" />
    },
    {
      title: 'HELOC for Improvements',
      description: 'Access your home equity for renovations and property improvements',
      benefits: ['Up to $500K credit lines', 'Prime + 0% intro rates', 'Tax-deductible interest'],
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />

    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Serving All Santa Ana Communities
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Santa Ana</span> Mortgage Broker: FHA Loans and VA Loans
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Competitive mortgage rates for Santa Ana homebuyers and homeowners. Specializing in 
            FHA loans, first-time buyer programs, and HELOC for Downtown, Floral Park, 
            French Park, and all Santa Ana communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Santa Ana Mortgage Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Santa Ana Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">$650K</h3>
            <p className="text-slate-600">Median Home Price</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">#2</h3>
            <p className="text-slate-600">Largest OC City</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">County</h3>
            <p className="text-slate-600">Seat of Orange</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">332K+</h3>
            <p className="text-slate-600">Population</p>
          </div>
        </div>

        {/* Specialized Loan Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Mortgage Solutions for Santa Ana Homeowners
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

        {/* Santa Ana Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Santa Ana Neighborhoods We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {santaAnaNeighborhoods.map((neighborhood, index) => (
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

        {/* Why Santa Ana Homeowners Choose Mo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Santa Ana Homeowners Choose Mo Abdel
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Affordable Homeownership Focus</h3>
                  <p className="text-slate-600">
                    Dedicated to helping Santa Ana families achieve homeownership with FHA loans, 
                    down payment assistance programs, and flexible qualification guidelines.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Community-Centered Service</h3>
                  <p className="text-slate-600">
                    Understanding of Santa Ana's diverse communities and cultural needs. 
                    Bilingual support and culturally sensitive mortgage guidance available.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Building2 className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Urban Development Expertise</h3>
                  <p className="text-slate-600">
                    Knowledge of Santa Ana's downtown revitalization and growing arts district. 
                    Lending solutions for condos, historic homes, and new developments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Santa Ana Market Expertise</h3>
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
                <span className="font-bold">$125K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Property Tax Rate:</span>
                <span className="font-bold">~0.73%</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">Popular Santa Ana Programs:</h4>
              <div className="space-y-1 text-sm text-slate-600">
                <div>• FHA loans for first-time buyers</div>
                <div>• Down payment assistance programs</div>
                <div>• HELOC for home improvements</div>
                <div>• Historic home renovation loans</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions - Santa Ana Mortgages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What down payment assistance is available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Orange County and Santa Ana offer various down payment assistance programs 
                  for first-time buyers and income-qualified families. We help identify and 
                  coordinate these programs with your mortgage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I buy a historic home in Floral Park?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! We have experience with historic district purchases and renovation loans. 
                  Historic homes may qualify for special renovation financing programs and 
                  tax credits for preservation efforts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there programs for low to moderate income buyers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Absolutely! FHA loans, USDA rural development loans (for eligible areas), 
                  and local first-time buyer programs offer flexible qualification and 
                  reduced down payment requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I qualify for a condo loan downtown?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Downtown condos require lender approval of the HOA and building financial 
                  health. We work with FHA-approved condo projects and have relationships 
                  with lenders experienced in urban condo financing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Santa Ana Mortgage?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized rates for your Santa Ana neighborhood and loan needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Get My Santa Ana Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Serving all Santa Ana neighborhoods
          </p>
        </div>
      </div>
    

</div>
  );

}
