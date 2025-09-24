import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle, XCircle, Building, Users, DollarSign, Clock, Shield, Target, Phone, Calculator, TrendingDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mortgage Broker vs Bank: Complete Comparison Guide 2025',
  description: 'Comprehensive comparison of mortgage brokers vs banks by licensed broker Mo Abdel (NMLS #1426884). Rates, service, options, and expert guidance for Orange County buyers.',
  alternates: {
    canonical: 'https://www.mothebroker.com/guides/mortgage-broker-vs-bank-complete-comparison',
  },
};

export default function MortgageBrokerVsBankComparison() {
  const comparisonData = [
    {
      category: "Interest Rates",
      broker: {
        advantage: "Wholesale rates typically 0.125-0.25% lower",
        details: "Access to wholesale pricing from 200+ lenders, can shop for best rates",
        rating: "excellent"
      },
      bank: {
        advantage: "Retail rates only from their institution",
        details: "Limited to their own rate sheet, no shopping comparison",
        rating: "good"
      }
    },
    {
      category: "Loan Options",
      broker: {
        advantage: "200+ lenders with diverse programs",
        details: "Conventional, FHA, VA, USDA, Non-QM, jumbo, and specialty programs",
        rating: "excellent"
      },
      bank: {
        advantage: "Limited to bank's loan products",
        details: "Typically conventional, FHA, VA, and some jumbo loans only",
        rating: "limited"
      }
    },
    {
      category: "Service & Guidance",
      broker: {
        advantage: "Personalized guidance throughout process",
        details: "Licensed professional guides you from application to closing",
        rating: "excellent"
      },
      bank: {
        advantage: "Varies by institution and loan officer",
        details: "Service quality depends on individual banker and branch",
        rating: "variable"
      }
    },
    {
      category: "Closing Speed",
      broker: {
        advantage: "18-25 days average",
        details: "Efficient processing with established lender relationships",
        rating: "fast"
      },
      bank: {
        advantage: "21-30 days average",
        details: "Internal processing but may have capacity constraints",
        rating: "moderate"
      }
    },
    {
      category: "Qualification Flexibility",
      broker: {
        advantage: "Multiple lenders = more options",
        details: "Can match borrowers with lenders for their specific situation",
        rating: "flexible"
      },
      bank: {
        advantage: "One set of guidelines",
        details: "Either qualify for their programs or don't",
        rating: "rigid"
      }
    },
    {
      category: "Costs & Fees",
      broker: {
        advantage: "Often lower total costs",
        details: "Wholesale pricing and competitive origination fees",
        rating: "competitive"
      },
      bank: {
        advantage: "Retail pricing with standard fees",
        details: "Published fee schedules, limited negotiation",
        rating: "standard"
      }
    }
  ];

  const brokerAdvantages = [
    {
      title: "Wholesale Rate Access",
      description: "Direct access to wholesale pricing typically 0.125-0.25% lower than retail bank rates",
      savings: "Save $40,000+ over 30 years on $1M loan",
      icon: DollarSign
    },
    {
      title: "Multiple Lender Options",
      description: "Choose from 200+ lenders to find the best rate and terms for your situation",
      savings: "Better loan programs and qualification options",
      icon: Target
    },
    {
      title: "Personalized Service",
      description: "Licensed professional guides you through the entire process",
      savings: "Faster closings and fewer issues",
      icon: Users
    },
    {
      title: "Market Expertise",
      description: "Deep knowledge of Orange County market conditions and lender preferences",
      savings: "Smoother transactions in competitive market",
      icon: TrendingUp
    }
  ];

  const bankAdvantages = [
    {
      title: "Existing Relationship",
      description: "If you already bank with them, may offer relationship pricing",
      limitation: "Usually minimal discount, still retail rates"
    },
    {
      title: "One-Stop Shopping",
      description: "Banking and mortgage services in one location",
      limitation: "Limited to their loan products only"
    },
    {
      title: "Brand Recognition",
      description: "Well-known national or regional bank names",
      limitation: "Name recognition doesn't guarantee best rates"
    },
    {
      title: "Branch Locations",
      description: "Physical branches for in-person service",
      limitation: "Most mortgage business now done electronically"
    }
  ];

  const detailedComparison = [
    {
      aspect: "Rate Shopping",
      broker: "Compares rates from 200+ lenders to find lowest rate",
      bank: "Offers only their current rate sheet",
      winner: "broker"
    },
    {
      aspect: "Loan Programs",
      broker: "Access to conventional, FHA, VA, USDA, Non-QM, jumbo, and specialty programs from multiple lenders",
      bank: "Limited to their approved loan products, typically fewer options",
      winner: "broker"
    },
    {
      aspect: "Qualification Help",
      broker: "Can shop your scenario to multiple lenders to find approval",
      bank: "Either qualify for their guidelines or you don't",
      winner: "broker"
    },
    {
      aspect: "Closing Costs",
      broker: "Wholesale pricing often results in lower total costs",
      bank: "Retail pricing with standard fee schedules",
      winner: "broker"
    },
    {
      aspect: "Processing Speed",
      broker: "18-25 days with efficient lender relationships",
      bank: "21-30 days, may have capacity constraints during busy periods",
      winner: "broker"
    },
    {
      aspect: "Communication",
      broker: "Direct access to licensed loan officer throughout process",
      bank: "May work with different people at different stages",
      winner: "broker"
    },
    {
      aspect: "Problem Resolution",
      broker: "Can switch lenders if issues arise, multiple backup options",
      bank: "Limited to their internal processes and guidelines",
      winner: "broker"
    },
    {
      aspect: "Market Knowledge",
      broker: "Specialized knowledge of local market and lender preferences",
      bank: "General market knowledge, less specialization",
      winner: "broker"
    }
  ];

  const orangeCountyConsiderations = [
    {
      factor: "High Home Prices",
      broker: "Access to multiple jumbo lenders with competitive rates",
      bank: "Limited jumbo options, often higher rates"
    },
    {
      factor: "Competitive Market",
      broker: "Fast pre-approval and closing capabilities to strengthen offers",
      bank: "May have slower processing during busy periods"
    },
    {
      factor: "Property Types",
      broker: "Lenders specializing in condos, luxury homes, unique properties",
      bank: "Standard property guidelines, may not handle unique situations"
    },
    {
      factor: "Self-Employed Borrowers",
      broker: "Multiple Non-QM options for business owners and entrepreneurs",
      bank: "Limited alternative documentation programs"
    }
  ];

  const costComparison = {
    scenario: "$1,000,000 Orange County Home Purchase",
    broker: {
      rate: "6.00%",
      payment: "$5,996",
      costs: "$18,000",
      totalInterest: "$1,158,560"
    },
    bank: {
      rate: "6.25%",
      payment: "$6,145",
      costs: "$22,000",
      totalInterest: "$1,212,200"
    },
    savings: {
      monthly: "$149",
      upfront: "$4,000",
      lifetime: "$53,640"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-8 mb-6">
              <Users className="w-16 h-16 text-blue-200" />
              <span className="text-4xl font-bold text-white self-center">VS</span>
              <Building className="w-16 h-16 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mortgage Broker vs Bank: Complete Comparison
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Comprehensive analysis of mortgage brokers vs banks. Licensed broker insights
              to help Orange County buyers make informed decisions.
            </p>
            <Badge className="bg-white text-blue-600 px-4 py-2 text-lg">
              Expert Analysis • Licensed NMLS #1426884
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Bottom Line</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mortgage brokers typically offer better rates, more options, and personalized service
              compared to traditional banks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl text-green-800">Mortgage Broker Advantages</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Wholesale rates (0.125-0.25% lower)",
                  "200+ lender options",
                  "Better loan program variety",
                  "Personalized expert guidance",
                  "Faster closing times",
                  "More qualification flexibility"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">{advantage}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl text-blue-800">Bank Advantages</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Existing banking relationship",
                  "One-stop shopping convenience",
                  "Brand name recognition",
                  "Physical branch locations",
                  "Established internal processes",
                  "Relationship pricing (limited)"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700">{advantage}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Side-by-Side Comparison</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Detailed analysis of key factors in mortgage lending
            </p>
          </div>

          <div className="space-y-6">
            {comparisonData.map((item, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{item.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-800">Mortgage Broker</span>
                        <Badge className={`ml-auto ${
                          item.broker.rating === 'excellent' ? 'bg-green-100 text-green-800' :
                          item.broker.rating === 'fast' ? 'bg-blue-100 text-blue-800' :
                          item.broker.rating === 'flexible' ? 'bg-purple-100 text-purple-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {item.broker.rating}
                        </Badge>
                      </div>
                      <p className="font-medium text-slate-900">{item.broker.advantage}</p>
                      <p className="text-sm text-slate-600">{item.broker.details}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Building className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Bank</span>
                        <Badge className={`ml-auto ${
                          item.bank.rating === 'good' ? 'bg-blue-100 text-blue-800' :
                          item.bank.rating === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                          item.bank.rating === 'variable' ? 'bg-gray-100 text-gray-800' :
                          item.bank.rating === 'limited' ? 'bg-red-100 text-red-800' :
                          item.bank.rating === 'rigid' ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {item.bank.rating}
                        </Badge>
                      </div>
                      <p className="font-medium text-slate-900">{item.bank.advantage}</p>
                      <p className="text-sm text-slate-600">{item.bank.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Real Cost Comparison</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Orange County home purchase example showing potential savings
            </p>
          </div>

          <Card className="shadow-xl border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-center">{costComparison.scenario}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-green-800">Mortgage Broker</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Interest Rate:</span>
                      <span className="font-bold text-green-600">{costComparison.broker.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Payment:</span>
                      <span className="font-bold">{costComparison.broker.payment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Closing Costs:</span>
                      <span className="font-bold">{costComparison.broker.costs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Interest (30 years):</span>
                      <span className="font-bold">{costComparison.broker.totalInterest}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-800">Bank</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Interest Rate:</span>
                      <span className="font-bold text-red-600">{costComparison.bank.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Payment:</span>
                      <span className="font-bold">{costComparison.bank.payment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Closing Costs:</span>
                      <span className="font-bold">{costComparison.bank.costs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Interest (30 years):</span>
                      <span className="font-bold">{costComparison.bank.totalInterest}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-lg font-bold text-green-800 mb-4 text-center">Your Potential Savings with a Broker</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{costComparison.savings.monthly}</div>
                    <div className="text-sm text-slate-600">Monthly Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{costComparison.savings.upfront}</div>
                    <div className="text-sm text-slate-600">Upfront Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{costComparison.savings.lifetime}</div>
                    <div className="text-sm text-slate-600">Lifetime Savings</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Orange County Specific */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Orange County Market Considerations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Why brokers have advantages in Orange County's unique market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orangeCountyConsiderations.map((consideration, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{consideration.factor}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-green-800">Broker Advantage</span>
                      </div>
                      <p className="text-sm text-slate-700">{consideration.broker}</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Building className="w-4 h-4 text-red-600" />
                        <span className="font-semibold text-red-800">Bank Limitation</span>
                      </div>
                      <p className="text-sm text-slate-700">{consideration.bank}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">When to Choose Each Option</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specific scenarios where each option might be preferred
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg border-green-200">
              <CardHeader className="bg-green-50">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl text-green-800">Choose a Mortgage Broker When:</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "You want the lowest possible rate",
                    "You need specialized loan programs",
                    "Your situation requires flexibility",
                    "You're self-employed or have complex income",
                    "You want expert guidance throughout",
                    "Time is critical (competitive market)",
                    "You're buying a unique property",
                    "You want multiple lender options"
                  ].map((scenario, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-slate-700">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-blue-200">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center space-x-3">
                  <Building className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl text-blue-800">Choose a Bank When:</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "You have a strong existing relationship",
                    "They offer meaningful relationship pricing",
                    "You prefer familiar institutions",
                    "Your situation is very straightforward",
                    "You don't mind potentially higher rates",
                    "You want all services in one place",
                    "You're not rate-shopping",
                    "You have simple loan needs"
                  ].map((scenario, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-slate-700">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Recommendation */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Professional Recommendation</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            As a licensed mortgage broker (NMLS #1426884) serving Orange County, I provide unbiased
            guidance to help you choose the best financing option for your situation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-2" />
              <span className="font-semibold">Licensed Professional</span>
              <span className="text-blue-100">NMLS #1426884</span>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-8 h-8 mb-2" />
              <span className="font-semibold">200+ Lenders</span>
              <span className="text-blue-100">Best Rate Guarantee</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-2" />
              <span className="font-semibold">Fast Closing</span>
              <span className="text-blue-100">18-25 Day Average</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-orange-county-mortgage-broker">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="w-5 h-5 mr-2" />
                Get Personalized Advice
              </Button>
            </Link>
            <Link href="/calculator">
              <Button size="lg" variant="ghost" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Calculator className="w-5 h-5 mr-2" />
                Compare Your Options
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-slate-600 space-y-2">
            <p>
              <strong>Professional Analysis:</strong> Comparison provided by Mo Abdel, Licensed Mortgage Broker, NMLS #1426884.
            </p>
            <p>
              Information based on typical market conditions and may vary by individual lender and borrower situation.
              Actual rates, terms, and costs subject to credit approval and market conditions.
            </p>
            <p>
              Equal Housing Opportunity. Licensed to originate mortgages in California, Washington, Virginia, and Colorado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}