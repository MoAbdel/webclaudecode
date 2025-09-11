import React from 'react';


export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "https://www.mothebroker.com";
  const title = "Mortgage Broker in Orange County, CA | Mo Abdel";
  const description = "Local mortgage expertise in Orange County, CA. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "/rate-term-refinance-orange-county" },
    openGraph: { title, description, url: BASE + "/rate-term-refinance-orange-county", siteName: "Mo Abdel â€” Mortgage Broker", images: ["https://www.mothebroker.com/logo.png"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
import type { Metadata } from 'next';

import { Card, CardContent } from '@/components/ui/Card';

import { Badge } from '@/components/ui/Badge';

import { Button } from '@/components/ui/Button';

import { CheckCircle, TrendingDown, Calendar, Shield, Calculator, Users, Zap } from 'lucide-react';

import Link from 'next/link';







const benefits = [

  {

    icon: TrendingDown,

    title: 'Lower Interest Rate',

    description: 'Reduce your monthly payment and total interest paid over the life of your loan with better rates.'

  },

  {

    icon: Calendar,

    title: 'Shorter Loan Term',

    description: 'Pay off your home faster by refinancing to a 15-year loan and build equity more quickly.'

  },

  {

    icon: Shield,

    title: 'Eliminate PMI',

    description: 'Remove private mortgage insurance when you have 20% equity, reducing your monthly payment.'

  },

  {

    icon: Calculator,

    title: 'Predictable Payments',

    description: 'Switch from an adjustable-rate mortgage to a fixed rate for payment stability.'

  },

  {

    icon: Users,

    title: 'Better Loan Terms',

    description: 'Access improved loan features and terms that weren\'t available with your original mortgage.'

  },

  {

    icon: Zap,

    title: 'No Cash Out',

    description: 'Keep your loan balance the same or lower while improving your loan terms and rate.'

  }

];



const whenToRefinance = [

  {

    scenario: 'Rates Have Dropped',

    description: 'When market rates are 0.5% or more below your current rate',

    savings: 'Monthly payment reduction'

  },

  {

    scenario: 'Credit Score Improved',

    description: 'Your credit score has increased significantly since your original loan',

    savings: 'Better rate qualification'

  },

  {

    scenario: 'Home Value Increased',

    description: 'Your home has appreciated, giving you 20%+ equity to eliminate PMI',

    savings: 'Remove mortgage insurance'

  },

  {

    scenario: 'ARM Rate Adjusting',

    description: 'Your adjustable-rate mortgage is set to increase',

    savings: 'Fixed payment stability'

  }

];



const refinanceTypes = [

  {

    type: 'Rate Reduction',

    description: 'Lower your interest rate to reduce monthly payments',

    bestFor: 'When rates have dropped significantly'

  },

  {

    type: 'Term Change',

    description: 'Switch to a different loan term (15-year, 20-year, 30-year)',

    bestFor: 'Building equity faster or lowering payments'

  },

  {

    type: 'PMI Removal',

    description: 'Eliminate private mortgage insurance with 20% equity',

    bestFor: 'Homes that have appreciated in value'

  },

  {

    type: 'ARM to Fixed',

    description: 'Convert adjustable-rate mortgage to fixed-rate stability',

    bestFor: 'Rate certainty and predictable payments'

  }

];



const requirements = [

  'Current mortgage in good standing',

  'Credit score: 620+ (better rates with 740+)',

  'Debt-to-income ratio: 43% or lower',

  'Sufficient home equity (typically 20%+)',

  'Employment and income verification',

  'Home appraisal to confirm current value'

];



const cities = [

  'Irvine', 'Newport Beach', 'Mission Viejo', 'Anaheim', 'Costa Mesa', 'Huntington Beach', 'Santa Ana'

];



export default function RateTermRefinanceOrangeCounty() {

  return (

    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero Section */}

      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 text-white py-20">

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <Badge className="bg-white/20 text-white mb-4 border-white/30">

              Mortgage Refinancing

            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">

              Rate-Term Refinance in Orange County â€“ Lower Your Payment

            </h1>

            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-4xl mx-auto leading-relaxed">

              Reduce your mortgage payment, eliminate PMI, or switch to better loan terms. Access competitive refinance rates from 200+ lenders for your Orange County home.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link href="/contact">

                <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold">

                  Get Refinance Quote

                </Button>

              </Link>

              <Link href="/calculator">

                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">

                  Calculate Savings

                </Button>

              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* Benefits Section */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">

              Benefits of Rate & Term Refinancing

            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">

              Rate and term refinancing can improve your mortgage terms without taking cash out of your home.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {benefits.map((benefit, index) => (

              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">

                <CardContent className="p-6">

                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">

                    <benefit.icon className="w-6 h-6 text-indigo-600" />

                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>

                  <p className="text-slate-600">{benefit.description}</p>

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

              When Should You Refinance in Orange County?

            </h2>

            <p className="text-xl text-slate-600">

              Consider refinancing when these market conditions or personal situations apply to you.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {whenToRefinance.map((scenario, index) => (

              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">

                <CardContent className="p-6">

                  <div className="flex justify-between items-start mb-4">

                    <h3 className="text-xl font-bold text-slate-900">{scenario.scenario}</h3>

                    <Badge className="bg-indigo-100 text-indigo-800">{scenario.savings}</Badge>

                  </div>

                  <p className="text-slate-600">{scenario.description}</p>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>



      {/* Refinance Types */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">

              Types of Rate & Term Refinancing

            </h2>

            <p className="text-xl text-slate-600">

              Different refinancing strategies to meet your specific financial goals.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {refinanceTypes.map((type, index) => (

              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">

                <CardContent className="p-6">

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{type.type}</h3>

                  <p className="text-slate-600 mb-4">{type.description}</p>

                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-3 rounded-lg">

                    <p className="text-sm font-medium text-indigo-700">

                      <strong>Best for:</strong> {type.bestFor}

                    </p>

                  </div>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>



      {/* Requirements & Calculator */}

      <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">

                Refinance Requirements in California

              </h2>

              <p className="text-lg text-slate-600 mb-8">

                Rate and term refinancing has similar qualification requirements to your original mortgage.

              </p>

              <div className="space-y-4">

                {requirements.map((requirement, index) => (

                  <div key={index} className="flex items-start gap-3">

                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />

                    <span className="text-slate-700">{requirement}</span>

                  </div>

                ))}

              </div>

            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">

              <h3 className="text-2xl font-bold text-slate-900 mb-6">Refinance Savings Calculator</h3>

              <div className="space-y-6">

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Rate</label>

                  <div className="text-2xl font-bold text-red-600">6.5%</div>

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">New Rate</label>

                  <div className="text-2xl font-bold text-green-600">5.5%</div>

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Savings</label>

                  <div className="text-2xl font-bold text-indigo-600">$250+</div>

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-2">Annual Savings</label>

                  <div className="text-2xl font-bold text-purple-600">$3,000+</div>

                </div>

              </div>

              <div className="mt-6">

                <Link href="/contact">

                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-3">

                    Get Your Exact Savings Quote

                  </Button>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Process Steps */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">

              Rate-Term Refinance Process

            </h2>

            <p className="text-xl text-slate-600">

              Our streamlined refinancing process makes improving your mortgage terms simple and fast.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[

              { step: 1, title: 'Rate Comparison', desc: 'Compare your current rate with available competitive rates' },

              { step: 2, title: 'Application Submission', desc: 'Complete refinance application with income verification' },

              { step: 3, title: 'Home Appraisal', desc: 'Property appraisal confirms current value and equity' },

              { step: 4, title: 'Closing & Funding', desc: 'Sign new loan documents and enjoy lower payments' }

            ].map((item, index) => (

              <Card key={index} className="text-center shadow-lg border-0">

                <CardContent className="p-6">

                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">

                    {item.step}

                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>

                  <p className="text-slate-600 text-sm">{item.desc}</p>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>



      {/* Cities Served */}

      <section className="py-16 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">

              Refinancing Throughout Orange County

            </h2>

            <p className="text-xl text-slate-600">

              Helping homeowners refinance and save money across all major Orange County cities.

            </p>

          </div>



          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">

            {cities.map((city, index) => (

              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">

                <span className="text-slate-700 font-medium">{city}</span>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* FAQ Section */}

      <section className="py-16">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">

              Rate-Term Refinance FAQ

            </h2>

          </div>



          <div className="space-y-8">

            {[

              {

                question: 'How much can I save by refinancing in Orange County?',

                answer: 'Savings depend on the rate difference, loan amount, and remaining term. A 1% rate reduction on a $500,000 loan could save $400+ monthly and $100,000+ over the loan term.'

              },

              {

                question: 'What are the closing costs for a refinance?',

                answer: 'Refinance closing costs typically range from 2-5% of the loan amount. However, the monthly savings often offset closing costs within 12-24 months.'

              },

              {

                question: 'Can I refinance if I have PMI on my current loan?',

                answer: 'Yes! If your home has appreciated to give you 20% equity, refinancing can eliminate PMI entirely, providing significant monthly savings.'

              },

              {

                question: 'How long does the refinance process take?',

                answer: 'Most refinances close within 2-3 weeks from start to finish. Our lender network and streamlined process allows for faster closings than traditional lenders.'

              },

              {

                question: 'Should I refinance from a 30-year to a 15-year loan?',

                answer: 'A 15-year loan builds equity faster and saves interest long-term, but has higher monthly payments. We\'ll help you determine what works best for your budget and goals.'

              },

              {

                question: 'What happens to my current mortgage when I refinance?',

                answer: 'Your new loan pays off the existing mortgage completely. You\'ll have just one mortgage payment to the new lender with your improved terms.'

              }

            ].map((faq, index) => (

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



      {/* CTA Section */}

      <section className="py-16 bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-600 text-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">

            Ready to Lower Your Orange County Mortgage Payment?

          </h2>

          <p className="text-xl mb-8 text-indigo-100">

            Access competitive refinance rates from 200+ lenders and start saving money every month. 

            Mo Abdel makes refinancing simple and profitable.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link href="/contact">

              <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold">

                Start Your Refinance

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





