import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Home, Calculator, FileText, Users, TrendingUp, Shield, MapPin, DollarSign, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orange County Home Buyer Guide 2025 | Complete Mortgage Process | Mo Abdel',
  description: 'Complete Orange County home buying guide covering mortgage pre-approval, down payments, neighborhoods, and closing costs. Expert mortgage broker insights for first-time and repeat buyers.',
  keywords: 'Orange County home buying guide, mortgage pre-approval, down payment assistance, home buying process, first time home buyer, Orange County real estate',
  openGraph: {
    title: 'Orange County Home Buyer Guide 2025 | Complete Mortgage Process',
    description: 'Complete Orange County home buying guide covering mortgage pre-approval, down payments, neighborhoods, and closing costs.',
    type: 'article',
    publishedTime: '2025-01-10T08:00:00.000Z',
  },
};

const homeTypes = [
  {
    type: 'Single Family Homes',
    priceRange: '$800K - $3M+',
    description: 'Detached homes in established neighborhoods with yards and privacy',
    bestFor: 'Families seeking space and long-term investment'
  },
  {
    type: 'Condominiums',
    priceRange: '$500K - $1.5M',
    description: 'Low-maintenance living with community amenities',
    bestFor: 'First-time buyers and those wanting amenities'
  },
  {
    type: 'Townhomes',
    priceRange: '$600K - $2M',
    description: 'Multi-level living with some private outdoor space',
    bestFor: 'Balance of space and maintenance convenience'
  },
  {
    type: 'Luxury Properties',
    priceRange: '$2M - $10M+',
    description: 'Premium homes in exclusive communities',
    bestFor: 'High-net-worth buyers seeking luxury amenities'
  }
];

const loanOptions = [
  {
    name: 'Conventional Loans',
    downPayment: '3-20%',
    maxAmount: '$1,089,300',
    description: 'Traditional financing with competitive rates and flexible terms',
    link: '/conventional-loans-orange-county'
  },
  {
    name: 'FHA Loans',
    downPayment: '3.5%',
    maxAmount: '$1,089,300',
    description: 'Government-backed loans with lower down payment requirements',
    link: '/fha-loans-orange-county'
  },
  {
    name: 'VA Loans',
    downPayment: '0%',
    maxAmount: '$1,089,300',
    description: 'Zero down payment loans for eligible veterans and military',
    link: '/va-loans-orange-county'
  },
  {
    name: 'Jumbo Loans',
    downPayment: '10-20%',
    maxAmount: 'No limit',
    description: 'High-value loans for luxury and expensive properties',
    link: '/loan-programs/jumbo-loans'
  }
];

const neighborhoods = [
  { name: 'Irvine', medianPrice: '$1.2M', highlight: 'Top schools, master-planned', link: '/areas/irvine-mortgage-broker' },
  { name: 'Newport Beach', medianPrice: '$2.1M', highlight: 'Coastal luxury, beaches', link: '/areas/newport-beach-mortgage-broker' },
  { name: 'Mission Viejo', medianPrice: '$950K', highlight: 'Family-friendly, safe', link: '/areas/mission-viejo-mortgage-broker' },
  { name: 'Costa Mesa', medianPrice: '$800K', highlight: 'Central location, diverse', link: '/areas/costa-mesa-mortgage-broker' },
  { name: 'Anaheim', medianPrice: '$750K', highlight: 'Affordable, growing', link: '/areas/anaheim-mortgage-broker' },
  { name: 'Huntington Beach', medianPrice: '$1.1M', highlight: 'Beach lifestyle, active', link: '/areas/huntington-beach-mortgage-broker' }
];

const buyingProcess = [
  {
    step: 1,
    title: 'Get Pre-Approved',
    description: 'Secure mortgage pre-approval to understand your budget and show sellers you\'re serious',
    timeframe: '1-3 days',
    action: 'Contact mortgage broker'
  },
  {
    step: 2,
    title: 'Find Your Agent',
    description: 'Choose an experienced Orange County real estate agent who knows local markets',
    timeframe: '1-2 weeks',
    action: 'Interview agents'
  },
  {
    step: 3,
    title: 'House Hunting',
    description: 'Search for homes within your budget in preferred neighborhoods',
    timeframe: '2-8 weeks',
    action: 'View properties'
  },
  {
    step: 4,
    title: 'Make an Offer',
    description: 'Submit competitive offers with appropriate contingencies',
    timeframe: '1-3 days',
    action: 'Negotiate terms'
  },
  {
    step: 5,
    title: 'Complete Inspections',
    description: 'Conduct home inspection, appraisal, and finalize mortgage approval',
    timeframe: '2-3 weeks',
    action: 'Review reports'
  },
  {
    step: 6,
    title: 'Close Escrow',
    description: 'Sign final documents, transfer funds, and receive keys',
    timeframe: '1-2 days',
    action: 'Closing meeting'
  }
];

const faqs = [
  {
    question: 'How much do I need for a down payment in Orange County?',
    answer: 'Down payment requirements vary by loan type. FHA loans require as little as 3.5%, conventional loans can be as low as 3%, and VA loans offer 0% down for eligible veterans. For jumbo loans (over $1,089,300), expect 10-20% down. Many Orange County buyers put down 10-20% to remain competitive.'
  },
  {
    question: 'What are typical closing costs in Orange County?',
    answer: 'Closing costs in Orange County typically range from 2-5% of the home purchase price. This includes loan origination fees, title insurance, escrow fees, recording fees, and prepaid items like property taxes and insurance. For a $1M home, expect $20,000-$50,000 in closing costs.'
  },
  {
    question: 'How long does the home buying process take?',
    answer: 'The typical Orange County home buying process takes 30-60 days from offer acceptance to closing. Pre-approval should be obtained before house hunting (1-3 days). Finding the right home can take 2-8 weeks depending on market conditions and your requirements.'
  },
  {
    question: 'Should I buy or rent in Orange County?',
    answer: 'The buy vs. rent decision depends on your financial situation, lifestyle, and long-term plans. With median home prices over $1M, renting may make sense short-term. However, Orange County real estate has historically appreciated well, making buying advantageous for long-term residents who can afford the initial costs.'
  },
  {
    question: 'What credit score do I need to buy a home in Orange County?',
    answer: 'Minimum credit scores vary by loan type: FHA loans accept scores as low as 580, conventional loans typically require 620+, and VA loans are flexible. For the best rates on Orange County\'s high-value homes, aim for 740+. Higher scores also help in competitive bidding situations.'
  },
  {
    question: 'Are there first-time buyer programs in Orange County?',
    answer: 'Yes, several programs assist first-time buyers including CalHFA conventional and FHA loans with down payment assistance, local city programs, and employer assistance programs. Many offer reduced rates, down payment help, or closing cost assistance for qualified buyers.'
  }
];

export default function OrangeCountyHomeBuyerGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 border-white/30">
              Complete Home Buying Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Orange County Home Buyer Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Your complete guide to buying a home in Orange County. From mortgage pre-approval to closing, 
              navigate the process with confidence using expert insights from local mortgage broker Mo Abdel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Get Pre-Approved Today
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Calculate Payment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">$1.1M</h3>
                <p className="text-slate-600">Median Home Price</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">3.5%</h3>
                <p className="text-slate-600">Min Down Payment</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">45 Days</h3>
                <p className="text-slate-600">Avg. Closing Time</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">200+</h3>
                <p className="text-slate-600">Lender Options</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Home Buying Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Home Buying Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Follow these essential steps to successfully purchase your Orange County home with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyingProcess.map((step, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{step.timeframe}</span>
                    <span className="text-slate-500">{step.action}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Options */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Mortgage Loan Options
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right financing option for your Orange County home purchase with access to 200+ lenders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanOptions.map((loan, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-slate-900">{loan.name}</h3>
                    <Badge className="bg-green-100 text-green-800">{loan.downPayment} down</Badge>
                  </div>
                  <p className="text-slate-600 mb-4">{loan.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Max: {loan.maxAmount}</span>
                    <Link href={loan.link}>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Popular Orange County Neighborhoods
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore Orange County's diverse communities and find the perfect neighborhood for your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-slate-900">{neighborhood.name}</h3>
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-green-600 mb-2">{neighborhood.medianPrice}</p>
                  <p className="text-slate-600 mb-4">{neighborhood.highlight}</p>
                  <Link href={neighborhood.link}>
                    <Button variant="outline" className="w-full">
                      View {neighborhood.name} Mortgages
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Home Types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Types of Homes in Orange County
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding different property types helps you make informed decisions about location, pricing, and financing options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeTypes.map((type, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-slate-900">{type.type}</h3>
                    <Badge className="bg-blue-100 text-blue-800">{type.priceRange}</Badge>
                  </div>
                  <p className="text-slate-600 mb-3">{type.description}</p>
                  <p className="text-sm text-slate-500"><strong>Best for:</strong> {type.bestFor}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Home Buying FAQ
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about buying a home in Orange County.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-slate-600">
              Helpful tools and external resources for Orange County home buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Mortgage Calculator</h3>
                <p className="text-slate-600 mb-4">Calculate monthly payments for Orange County home prices</p>
                <Link href="/calculator">
                  <Button className="w-full">Calculate Payments</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Neighborhood Comparisons</h3>
                <p className="text-slate-600 mb-4">Compare Orange County cities and neighborhoods</p>
                <Link href="/neighborhood-guide">
                  <Button className="w-full">Compare Areas</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">California Housing Finance</h3>
                <p className="text-slate-600 mb-4">First-time buyer programs and assistance</p>
                <a href="https://www.calhfa.ca.gov/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Visit CalHFA</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">CFPB Home Buying Guide</h3>
                <p className="text-slate-600 mb-4">Official federal guidance for home buyers</p>
                <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Visit CFPB Guide</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <Home className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">HUD Housing Counseling</h3>
                <p className="text-slate-600 mb-4">Find certified housing counselors near you</p>
                <a href="https://www.hud.gov/findacounselor" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Find HUD Counselor</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Orange County Home Buying Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get pre-approved today and start shopping with confidence. Access competitive rates from 200+ lenders 
            with personalized service from experienced Orange County mortgage broker Mo Abdel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Get Pre-Approved Now
              </Button>
            </Link>
            <Link href="tel:+19495792057">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Call (949) 579-2057
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



