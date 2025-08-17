import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Home, Calculator, FileText, Users, TrendingUp, Shield, MapPin, DollarSign, Clock, RefreshCw, PiggyBank, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orange County Refinancing Guide 2025 | HELOC, HELOAN & Rate-Term Refi | Mo Abdel',
  description: 'Complete Orange County refinancing guide covering rate-and-term refinancing, cash-out refinance, HELOC, and HELOAN options. Expert mortgage broker insights for homeowners.',
  keywords: 'Orange County refinancing, HELOC Orange County, HELOAN, cash out refinance, rate and term refinance, mortgage refinancing, home equity',
  openGraph: {
    title: 'Orange County Refinancing Guide 2025 | HELOC, HELOAN & Rate-Term Refi',
    description: 'Complete Orange County refinancing guide covering rate-and-term refinancing, cash-out refinance, HELOC, and HELOAN options.',
    type: 'article',
    publishedTime: '2025-01-15T08:00:00.000Z',
  },
};

const refinancingOptions = [
  {
    type: 'Rate-and-Term Refinance',
    purpose: 'Lower rate or change loan terms',
    cashOut: 'No',
    timeframe: '2-3 weeks',
    bestFor: 'Reducing monthly payments or shortening loan term',
    description: 'Replace your current mortgage with a new loan at better terms without taking cash out',
    link: '/rate-term-refinance-orange-county',
    minEquity: '20%'
  },
  {
    type: 'Cash-Out Refinance',
    purpose: 'Access home equity',
    cashOut: 'Yes',
    timeframe: '3-4 weeks',
    bestFor: 'Home improvements, debt consolidation, investments',
    description: 'Refinance for more than you owe and receive the difference in cash',
    link: '/loan-programs/cash-out-refinance',
    minEquity: '20%'
  },
  {
    type: 'HELOC (Line of Credit)',
    purpose: 'Flexible access to equity',
    cashOut: 'As needed',
    timeframe: '2-3 weeks',
    bestFor: 'Ongoing expenses, variable funding needs',
    description: 'Revolving credit line secured by your home equity with variable rates',
    link: '/heloc-orange-county',
    minEquity: '15%'
  },
  {
    type: 'HELOAN (Fixed Loan)',
    purpose: 'Lump sum home equity',
    cashOut: 'Lump sum',
    timeframe: '2-3 weeks',
    bestFor: 'Large one-time expenses, fixed-rate preference',
    description: 'Fixed-rate second mortgage with predictable monthly payments',
    link: '/heloan-orange-county',
    minEquity: '15%'
  }
];

const whenToRefinance = [
  {
    scenario: 'Interest Rates Drop',
    description: 'When market rates are 0.5-1% lower than your current rate',
    icon: TrendingUp,
    color: 'blue'
  },
  {
    scenario: 'Improved Credit Score',
    description: 'Your credit has improved since your original loan',
    icon: Shield,
    color: 'green'
  },
  {
    scenario: 'Remove PMI',
    description: 'You have 20% equity and want to eliminate mortgage insurance',
    icon: Home,
    color: 'purple'
  },
  {
    scenario: 'Change Loan Terms',
    description: 'Switch from ARM to fixed rate or change loan duration',
    icon: RefreshCw,
    color: 'orange'
  },
  {
    scenario: 'Access Home Equity',
    description: 'Fund home improvements, education, or debt consolidation',
    icon: PiggyBank,
    color: 'red'
  },
  {
    scenario: 'Consolidate Debt',
    description: 'Pay off high-interest credit cards or other debts',
    icon: CreditCard,
    color: 'indigo'
  }
];

const refinancingProcess = [
  {
    step: 1,
    title: 'Check Current Market Rates',
    description: 'Compare current rates to your existing mortgage rate and terms',
    timeframe: 'Same day',
    action: 'Get rate quotes'
  },
  {
    step: 2,
    title: 'Calculate Break-Even Point',
    description: 'Determine how long it takes to recoup closing costs through savings',
    timeframe: '1 day',
    action: 'Use calculator'
  },
  {
    step: 3,
    title: 'Apply for Refinancing',
    description: 'Submit application with income, asset, and property documentation',
    timeframe: '1-2 days',
    action: 'Complete application'
  },
  {
    step: 4,
    title: 'Home Appraisal',
    description: 'Lender orders appraisal to confirm current property value',
    timeframe: '1-2 weeks',
    action: 'Schedule appraisal'
  },
  {
    step: 5,
    title: 'Underwriting Review',
    description: 'Lender reviews application, credit, income, and appraisal',
    timeframe: '1-2 weeks',
    action: 'Provide documents'
  },
  {
    step: 6,
    title: 'Close Your Refinance',
    description: 'Sign final documents and fund your new loan',
    timeframe: '1 day',
    action: 'Closing meeting'
  }
];

const costAnalysis = [
  {
    cost: 'Closing Costs',
    typical: '2-5% of loan amount',
    description: 'Lender fees, title insurance, recording fees, prepaid items'
  },
  {
    cost: 'Appraisal Fee',
    typical: '$500-$800',
    description: 'Required for most refinances to confirm property value'
  },
  {
    cost: 'Title Insurance',
    typical: '$1,000-$3,000',
    description: 'Protects lender and borrower against title defects'
  },
  {
    cost: 'Origination Fee',
    typical: '0.5-1% of loan',
    description: 'Lender fee for processing and underwriting the loan'
  }
];

const faqs = [
  {
    question: 'Should I refinance my Orange County home in 2025?',
    answer: 'Refinancing makes sense if you can reduce your rate by 0.5-1%, remove PMI, access equity for improvements, or consolidate high-interest debt. With Orange County home values remaining strong, many homeowners have significant equity to leverage. Consider your break-even point and how long you plan to stay in the home.'
  },
  {
    question: 'What\'s the difference between HELOC and HELOAN?',
    answer: 'A HELOC is a revolving credit line with variable rates, similar to a credit card secured by your home. You can draw funds as needed during a 10-year draw period. A HELOAN is a fixed-rate second mortgage with a lump sum payout and fixed monthly payments over 5-30 years. HELOCs offer flexibility, while HELOANs provide payment predictability.'
  },
  {
    question: 'How much equity do I need to refinance in Orange County?',
    answer: 'For rate-and-term refinancing, you typically need 20% equity (80% loan-to-value). For cash-out refinancing, you need 20% equity and can typically cash out up to 80% of your home\'s value. HELOCs and HELOANs usually require 15-20% equity, allowing you to borrow up to 80-90% combined loan-to-value.'
  },
  {
    question: 'What are current refinancing rates in Orange County?',
    answer: 'Refinancing rates vary daily based on market conditions, loan type, and borrower qualifications. Rate-and-term refinances typically offer the best rates, while cash-out refinances are slightly higher. HELOC rates are variable and tied to prime rate, while HELOAN rates are fixed. Contact Mo Abdel at (949) 579-2057 for current rates and personalized quotes.'
  },
  {
    question: 'How long does refinancing take in Orange County?',
    answer: 'Rate-and-term refinances typically take 2-3 weeks, while cash-out refinances may take 3-4 weeks due to additional documentation requirements. HELOCs and HELOANs usually close in 2-3 weeks. Factors affecting timeline include appraisal scheduling, document submission speed, and lender processing times.'
  },
  {
    question: 'Can I refinance if I have poor credit?',
    answer: 'Credit requirements vary by loan type and lender. Conventional refinances typically require 620+ credit scores, while FHA streamline refinances may accept lower scores. If your credit has improved since your original loan, you may qualify for better rates. Non-QM loans offer alternatives for borrowers with unique credit situations.'
  },
  {
    question: 'What documents do I need for Orange County refinancing?',
    answer: 'Typical documents include: recent pay stubs, tax returns (2 years), bank statements, current mortgage statement, homeowners insurance policy, and property tax records. Self-employed borrowers may need additional documentation. Your mortgage broker will provide a complete checklist based on your specific situation and loan type.'
  }
];

const orangeCountyMarketInsights = [
  {
    metric: 'Average Home Value',
    value: '$1.1M',
    change: '+5.2%',
    insight: 'Strong equity growth for refinancing opportunities'
  },
  {
    metric: 'Average Equity',
    value: '$400K',
    change: '+12%',
    insight: 'Significant HELOC and cash-out potential'
  },
  {
    metric: 'Refinance Activity',
    value: '35%',
    change: '+8%',
    insight: 'High refinancing activity in the market'
  },
  {
    metric: 'Rate Improvement',
    value: '0.75%',
    change: 'avg savings',
    insight: 'Typical rate reduction for qualified borrowers'
  }
];

export default function OrangeCountyRefinancingGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 border-white/30">
              Complete Refinancing Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Orange County Refinancing Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to refinancing your Orange County home. Explore rate-and-term refinancing, 
              cash-out options, HELOCs, and HELOANs with expert insights from mortgage broker Mo Abdel, NMLS #1426884.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
                  Check Refinance Rates
                </Button>
              </Link>
              <Link href="tel:+19495792057">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Call (949) 579-2057
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Orange County Market Insights */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Orange County Refinancing Market 2025
            </h2>
            <p className="text-slate-600">Current market conditions creating refinancing opportunities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {orangeCountyMarketInsights.map((insight, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{insight.metric}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-1">{insight.value}</div>
                  <div className="text-sm text-blue-600 font-medium mb-2">{insight.change}</div>
                  <p className="text-xs text-slate-600">{insight.insight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Refinancing Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Refinancing Options
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right refinancing solution for your goals. Access competitive rates from 200+ lenders 
              with personalized guidance from experienced Orange County mortgage broker Mo Abdel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {refinancingOptions.map((option, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-slate-900">{option.type}</h3>
                    <Badge className="bg-green-100 text-green-800">{option.timeframe}</Badge>
                  </div>
                  <p className="text-slate-600 mb-4">{option.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Purpose:</span>
                      <span className="text-slate-700">{option.purpose}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Cash Out:</span>
                      <span className="text-slate-700">{option.cashOut}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Min Equity:</span>
                      <span className="text-slate-700">{option.minEquity}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4"><strong>Best for:</strong> {option.bestFor}</p>
                  <Link href={option.link}>
                    <Button className="w-full">Learn More About {option.type}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Refinance */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              When Should You Refinance Your Orange County Home?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Recognize the right timing and situations that make refinancing beneficial for Orange County homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whenToRefinance.map((scenario, index) => {
              const IconComponent = scenario.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                orange: 'bg-orange-100 text-orange-600',
                red: 'bg-red-100 text-red-600',
                indigo: 'bg-indigo-100 text-indigo-600'
              };
              
              return (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${colorClasses[scenario.color]} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{scenario.scenario}</h3>
                    <p className="text-slate-600">{scenario.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Refinancing Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Refinancing Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Step-by-step guide to refinancing your Orange County home with experienced mortgage broker guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {refinancingProcess.map((step, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">{step.timeframe}</span>
                    <span className="text-slate-500">{step.action}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Refinancing Costs in Orange County
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding typical refinancing costs helps you calculate your break-even point and potential savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {costAnalysis.map((cost, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-slate-900">{cost.cost}</h3>
                    <Badge className="bg-blue-100 text-blue-800">{cost.typical}</Badge>
                  </div>
                  <p className="text-slate-600">{cost.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              <strong>Note:</strong> Many Orange County homeowners choose no-closing-cost refinances where 
              lender credits offset fees in exchange for a slightly higher rate.
            </p>
            <Link href="/calculator">
              <Button size="lg">
                Calculate Your Refinance Savings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County Refinancing FAQ
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about refinancing your Orange County home.
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
              Refinancing Resources
            </h2>
            <p className="text-xl text-slate-600">
              Helpful tools and resources for Orange County homeowners considering refinancing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Refinance Calculator</h3>
                <p className="text-slate-600 mb-4">Calculate potential savings</p>
                <Link href="/calculator">
                  <Button className="w-full">Calculate</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <Home className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">HELOC Options</h3>
                <p className="text-slate-600 mb-4">Explore home equity lines</p>
                <Link href="/heloc-orange-county">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <PiggyBank className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">HELOAN Guide</h3>
                <p className="text-slate-600 mb-4">Fixed-rate equity loans</p>
                <Link href="/heloan-orange-county">
                  <Button className="w-full">Explore</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Freddie Mac</h3>
                <p className="text-slate-600 mb-4">Official rate information</p>
                <a href="http://www.freddiemac.com/pmms/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Visit Site</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 via-green-700 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Refinance Your Orange County Home?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get personalized refinancing advice and competitive rates from experienced Orange County mortgage broker Mo Abdel, NMLS #1426884. 
            Access 200+ lenders for the best terms on rate-and-term refinancing, cash-out refinancing, HELOCs, and HELOANs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
                Get Refinance Quote
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