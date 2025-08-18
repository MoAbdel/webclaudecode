import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  DollarSign, 
  Home, 
  CheckCircle, 
  AlertCircle, 
  Download,
  Users,
  Building,
  Calculator,
  FileText,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orange County Down Payment Assistance Programs 2025 | Complete Guide',
  description: 'Complete guide to down payment assistance programs in Orange County, CA. Find grants, loans, and programs to help with your home purchase. Updated for 2025.',
  keywords: 'down payment assistance Orange County, first time buyer programs, CalHFA, FHA grants, home buyer assistance, Orange County housing programs',
};

export default function DownPaymentAssistancePage() {
  const statePrograms = [
    {
      name: 'CalHFA MyHome Assistance',
      provider: 'California Housing Finance Agency',
      amount: 'Up to 3.5% of purchase price',
      type: 'Deferred loan',
      requirements: [
        'First-time buyer (or haven\'t owned in 3 years)',
        'Complete homebuyer education',
        'Meet income limits for Orange County',
        'Primary residence only'
      ],
      link: 'https://www.calhfa.ca.gov/homebuyer/programs/myhome.htm',
      incomeLimit: '$146,350 for 1-2 persons',
      bestFor: 'First-time buyers with stable income'
    },
    {
      name: 'CalHFA Zero Interest Program (ZIP)',
      provider: 'California Housing Finance Agency',
      amount: 'Up to 3% of purchase price',
      type: 'Zero-interest deferred loan',
      requirements: [
        'Must use CalHFA first mortgage',
        'Complete homebuyer counseling',
        'Meet CalHFA income limits',
        'Minimum 640 credit score'
      ],
      link: 'https://www.calhfa.ca.gov/homebuyer/programs/zip.htm',
      incomeLimit: '$210,000 maximum',
      bestFor: 'Buyers who qualify for CalHFA loans'
    },
    {
      name: 'CalPLUS Conventional',
      provider: 'California Housing Finance Agency',
      amount: 'Up to 3% of purchase price',
      type: 'Zero-interest loan',
      requirements: [
        'Minimum 660 credit score',
        'Maximum 45% debt-to-income ratio',
        'Complete education course',
        'Primary residence only'
      ],
      link: 'https://www.calhfa.ca.gov/homebuyer/programs/calplus.htm',
      incomeLimit: 'Varies by area',
      bestFor: 'Buyers with good credit scores'
    }
  ];

  const localPrograms = [
    {
      name: 'Orange County Housing Finance Trust',
      provider: 'OC Community Resources',
      amount: 'Up to $40,000',
      type: 'Deferred payment loan',
      requirements: [
        'Income at or below 80% AMI',
        'Live in property for 15 years',
        'Complete 8-hour homebuyer course',
        'Contribute minimum $2,000'
      ],
      link: 'https://www.occr.ocgov.com/hcd/community/housing',
      incomeLimit: '$92,450 for family of 4',
      bestFor: 'Low-moderate income families'
    },
    {
      name: 'Neighborhood Stabilization Program',
      provider: 'Various OC Cities',
      amount: 'Up to 20% of purchase price',
      type: 'Forgivable loan over 5-15 years',
      requirements: [
        'Purchase in designated areas',
        'Income below 120% AMI',
        'Owner-occupied commitment',
        'Property condition requirements'
      ],
      link: 'Contact city housing department',
      incomeLimit: 'Varies by city',
      bestFor: 'Buyers in targeted neighborhoods'
    },
    {
      name: 'City-Specific Programs',
      provider: 'Individual Cities',
      amount: 'Varies by city',
      type: 'Various loan types',
      requirements: [
        'Must buy in specific city',
        'Meet city income requirements',
        'Primary residence only',
        'Various other requirements'
      ],
      link: 'Check with city housing office',
      incomeLimit: 'Varies by program',
      bestFor: 'Targeted city residents'
    }
  ];

  const specialPrograms = [
    {
      name: 'Good Neighbor Next Door',
      provider: 'HUD',
      amount: '50% discount on list price',
      type: 'Purchase discount',
      eligibility: 'Law enforcement, teachers, firefighters, EMTs',
      requirement: 'Live in home for 3 years minimum',
      link: 'https://www.hud.gov/program_offices/housing/sfh/reo/goodn/gnndabot'
    },
    {
      name: 'VA Loan Program',
      provider: 'Department of Veterans Affairs',
      amount: '0% down payment',
      type: 'Loan guarantee',
      eligibility: 'Veterans, active military, eligible spouses',
      requirement: 'Meet VA service requirements',
      link: 'https://www.va.gov/housing-assistance/home-loans/'
    },
    {
      name: 'USDA Rural Development',
      provider: 'USDA',
      amount: '0% down payment',
      type: 'Direct loan or guarantee',
      eligibility: 'Rural area buyers under income limits',
      requirement: 'Property in USDA-eligible area',
      link: 'https://www.rd.usda.gov/programs-services/single-family-housing-programs'
    }
  ];

  const cityPrograms = [
    { city: 'Anaheim', program: 'Anaheim HOME Investment', amount: 'Up to $75,000', contact: '(714) 765-4300' },
    { city: 'Santa Ana', program: 'Santa Ana Homeownership Program', amount: 'Up to $80,000', contact: '(714) 667-2200' },
    { city: 'Irvine', program: 'Irvine Inclusionary Housing', amount: 'Below-market units', contact: '(949) 724-6460' },
    { city: 'Huntington Beach', program: 'HB Home Ownership Program', amount: 'Varies', contact: '(714) 536-5582' },
    { city: 'Garden Grove', program: 'Garden Grove HOME', amount: 'Up to $60,000', contact: '(714) 741-5150' },
    { city: 'Fullerton', program: 'Fullerton Housing Assistance', amount: 'Up to $50,000', contact: '(714) 738-6897' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4">2025 Updated Resource</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Orange County Down Payment Assistance Programs
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive guide to grants, loans, and assistance programs available for Orange County home buyers. 
              Find programs that can help you save thousands on your home purchase.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Check Your Eligibility
                </Button>
              </Link>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                <Download className="w-5 h-5 mr-2" />
                Download Guide (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">$40K+</div>
              <div className="text-sm text-slate-600">Max Assistance Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-slate-600">Programs Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">0%</div>
              <div className="text-sm text-slate-600">Down for VA/USDA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">580+</div>
              <div className="text-sm text-slate-600">Min Credit Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* State Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              California State Programs
            </h2>
            <p className="text-xl text-slate-600">
              Statewide assistance programs available to Orange County residents
            </p>
          </div>

          <div className="grid gap-6">
            {statePrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{program.name}</CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="default">{program.type}</Badge>
                        <Badge variant="secondary">{program.amount}</Badge>
                      </div>
                      <p className="text-sm text-slate-600">{program.provider}</p>
                    </div>
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Requirements
                      </h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        {program.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Income Limit</h4>
                        <p className="text-sm text-slate-600">{program.incomeLimit}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Best For</h4>
                        <p className="text-sm text-slate-600">{program.bestFor}</p>
                      </div>
                      <a 
                        href={program.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        Learn More <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Programs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Orange County Local Programs
            </h2>
            <p className="text-xl text-slate-600">
              County and city-specific assistance programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {localPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Home className="w-8 h-8 text-orange-600 mb-2" />
                  <CardTitle className="text-lg">{program.name}</CardTitle>
                  <Badge className="mt-2">{program.amount}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">Type:</p>
                      <p className="text-sm text-slate-600">{program.type}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">Requirements:</p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {program.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-3 h-3 mr-1 text-green-600 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">Income Limit:</p>
                      <p className="text-sm text-slate-600">{program.incomeLimit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* City-Specific Programs Table */}
          <Card>
            <CardHeader>
              <CardTitle>City-Specific Programs</CardTitle>
              <p className="text-sm text-slate-600">Contact each city directly for current availability</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">City</th>
                      <th className="text-left py-2">Program</th>
                      <th className="text-left py-2">Assistance</th>
                      <th className="text-left py-2">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cityPrograms.map((city, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{city.city}</td>
                        <td className="py-2">{city.program}</td>
                        <td className="py-2">{city.amount}</td>
                        <td className="py-2">
                          <a href={`tel:${city.contact}`} className="text-blue-600 hover:text-blue-700">
                            {city.contact}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Special Eligibility Programs
            </h2>
            <p className="text-xl text-slate-600">
              Programs for veterans, teachers, first responders, and rural buyers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">{program.name}</CardTitle>
                  <Badge variant="secondary">{program.amount}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold">Eligibility:</p>
                      <p className="text-sm text-slate-600">{program.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Requirement:</p>
                      <p className="text-sm text-slate-600">{program.requirement}</p>
                    </div>
                    <a 
                      href={program.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
                    >
                      Official Website <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Calculator */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Quick Eligibility Check</CardTitle>
              <p className="text-slate-600">Answer a few questions to see which programs you may qualify for</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-yellow-800">
                        <strong>Important:</strong> This is a preliminary check only. Final eligibility depends on 
                        complete application review and current program availability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Calculator className="w-5 h-5 mr-2" />
                      Check My Eligibility
                    </Button>
                  </Link>
                  <p className="text-sm text-slate-600 mt-4">
                    I'll help you navigate all available programs and maximize your assistance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources & Tips */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Additional Resources & Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <FileText className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                    Last 2 years tax returns
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                    Last 30 days pay stubs
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                    Bank statements (2 months)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                    Photo ID and Social Security card
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                    Proof of any additional income
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertCircle className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>Important Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Apply early - some programs have limited funding
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Complete homebuyer education before applying
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Don't make large purchases before closing
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Keep all financial documents organized
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Consider multiple programs - you may qualify for several
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I combine multiple assistance programs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, many programs can be combined or "layered." For example, you might use a CalHFA first mortgage 
                  with MyHome assistance for down payment, plus a city program for additional help. However, some 
                  programs have restrictions on combining with others. I'll help you identify which programs work together.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I have to be a first-time buyer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Not for all programs. While many are designed for first-time buyers, "first-time" often means you 
                  haven't owned a home in the past 3 years. Some programs like VA loans and certain local programs 
                  don't have first-time buyer requirements at all.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are the income limits for Orange County?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Income limits vary by program and household size. For 2025, Orange County Area Median Income (AMI) 
                  is approximately $116,000 for a family of four. Most programs serve those earning 80-120% of AMI. 
                  Some CalHFA programs go up to $210,000+ for larger households.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does the application process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The timeline varies by program. State programs like CalHFA can be incorporated into your regular 
                  mortgage process (30-45 days). Local programs may require separate applications and can add 2-4 
                  weeks. Starting early and having all documents ready speeds up the process significantly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I have to pay back the assistance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  It depends on the program type. Some are grants (no repayment), others are deferred loans (pay back 
                  when you sell/refinance), and some are forgivable over time (5-15 years). Silent second mortgages 
                  typically have no monthly payment but are due upon sale. I'll explain each program's terms clearly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Explore Your Assistance Options?
          </h2>
          <p className="text-xl mb-8">
            I'll help you navigate all available programs and maximize your down payment assistance. 
            With access to 200+ lenders and expertise in all assistance programs, I'll find the perfect combination for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <DollarSign className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm mt-6 opacity-90">
            Mo Abdel, NMLS #1426884 | Orange County Mortgage Broker
          </p>
        </div>
      </section>
    </div>
  );
}