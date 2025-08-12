import React from 'react';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle, TrendingUp, Users, FileText, Calculator, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Non-QM Loans in Orange County, CA | Alternative Documentation Loans',
  description: 'Get Non-QM loans in Orange County with flexible income verification. Perfect for self-employed, investors, and non-traditional borrowers. Apply today with Mo The Broker.',
  openGraph: {
    title: 'Non-QM Loans in Orange County, CA | Alternative Documentation Loans',
    description: 'Get Non-QM loans in Orange County with flexible income verification. Perfect for self-employed, investors, and non-traditional borrowers. Apply today with Mo The Broker.',
    type: 'website',
  },
};

const benefits = [
  {
    icon: FileText,
    title: 'Flexible Income Documentation',
    description: 'Bank statements, profit & loss statements, or asset-based qualification instead of traditional W-2s.'
  },
  {
    icon: Users,
    title: 'Perfect for Self-Employed',
    description: 'Designed for entrepreneurs, contractors, and business owners with non-traditional income streams.'
  },
  {
    icon: TrendingUp,
    title: 'Higher Loan Amounts',
    description: 'Access jumbo loan amounts with more flexible qualification requirements than traditional programs.'
  },
  {
    icon: Shield,
    title: 'Alternative Credit Evaluation',
    description: 'Credit evaluation based on overall financial picture, not just traditional credit scores.'
  },
  {
    icon: Calculator,
    title: 'Asset-Based Lending',
    description: 'Qualify based on liquid assets and investment portfolios rather than employment income.'
  },
  {
    icon: Zap,
    title: 'Faster Approval Process',
    description: 'Streamlined underwriting with fewer documentation requirements than conventional loans.'
  }
];

const whoQualifies = [
  'Self-employed borrowers and business owners',
  'Real estate investors with multiple properties',
  'Foreign nationals purchasing U.S. real estate',
  'Borrowers with recent credit events but strong assets',
  'High-net-worth individuals with complex finances',
  'Retirees with substantial asset portfolios',
  'Commission-based or seasonal workers',
  'Borrowers seeking privacy in loan documentation'
];

const loanTypes = [
  {
    type: 'Bank Statement Loans',
    description: 'Qualify using 12-24 months of business or personal bank statements',
    features: ['No tax returns required', 'Up to 90% LTV available', 'Purchase or refinance']
  },
  {
    type: 'Asset-Based Loans',
    description: 'Qualification based on liquid assets and investment accounts',
    features: ['Perfect for retirees', 'No employment verification', 'Quick approval process']
  },
  {
    type: 'Foreign National Loans',
    description: 'Designed for non-U.S. citizens purchasing American real estate',
    features: ['No U.S. credit required', 'International income accepted', 'Competitive rates']
  },
  {
    type: 'Interest-Only Loans',
    description: 'Lower initial payments with interest-only options available',
    features: ['Maximum cash flow flexibility', 'Various amortization terms', 'Investor-friendly']
  }
];

const cities = [
  'Irvine', 'Newport Beach', 'Mission Viejo', 'Anaheim', 'Costa Mesa', 'Huntington Beach', 'Santa Ana'
];

export default function NonQMLoansOrangeCounty() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 border-white/30">
              Alternative Documentation Loans
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Non-QM Loans in Orange County – Flexible Financing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Break free from traditional lending restrictions. Non-QM loans offer flexible income verification and creative qualification methods for Orange County's diverse borrowers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
                  Apply for Non-QM Loan
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Calculate Payments
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
              Why Choose Non-QM Loans?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Non-QM (Non-Qualified Mortgage) loans provide flexible lending solutions for borrowers who don't fit traditional lending criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Qualifies Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who Qualifies for Non-QM Loans?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Non-QM loans are designed for borrowers with unique financial situations that don't fit traditional lending boxes.
              </p>
              <div className="space-y-4">
                {whoQualifies.map((qualifier, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{qualifier}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Non-QM Loan Features</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Loan Amounts</span>
                  <span className="text-xl font-bold text-green-600">Up to $5M+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Down Payment</span>
                  <span className="text-xl font-bold text-purple-600">10-25%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="font-semibold text-slate-700">Documentation</span>
                  <span className="text-xl font-bold text-indigo-600">Alternative</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-slate-700">Processing Time</span>
                  <span className="text-xl font-bold text-blue-600">3-5 Weeks</span>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3">
                    Get Pre-Qualified Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Non-QM Loan Program Options
            </h2>
            <p className="text-xl text-slate-600">
              Multiple Non-QM programs designed to meet different borrower needs and financial situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{loan.type}</h3>
                  <p className="text-slate-600 mb-4">{loan.description}</p>
                  <div className="space-y-2">
                    {loan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Non-QM Loan Application Process
            </h2>
            <p className="text-xl text-slate-600">
              Our streamlined process is designed for borrowers with unique financial circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Initial Consultation', desc: 'Discuss your unique situation and determine the best Non-QM program' },
              { step: 2, title: 'Alternative Documentation', desc: 'Submit bank statements, P&L, or asset documentation' },
              { step: 3, title: 'Customized Underwriting', desc: 'Flexible underwriting based on your complete financial picture' },
              { step: 4, title: 'Quick Closing', desc: 'Faster approval and closing process than traditional loans' }
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Non-QM Loans Throughout Orange County
            </h2>
            <p className="text-xl text-slate-600">
              Serving self-employed borrowers and investors across all major Orange County cities.
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Non-QM Loan FAQ
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'What does Non-QM stand for and what makes it different?',
                answer: 'Non-QM stands for Non-Qualified Mortgage. These loans don\'t meet the strict federal guidelines of QM loans, allowing for more flexible underwriting and alternative income documentation methods.'
              },
              {
                question: 'Can self-employed borrowers qualify for Non-QM loans?',
                answer: 'Absolutely! Non-QM loans are perfect for self-employed borrowers who can use bank statements, profit & loss statements, or asset documentation instead of traditional W-2s and tax returns.'
              },
              {
                question: 'What are the typical down payment requirements for Non-QM loans?',
                answer: 'Down payments typically range from 10-25% depending on the loan program, borrower profile, and property type. Some programs may allow lower down payments with compensating factors.'
              },
              {
                question: 'How much can I borrow with a Non-QM loan in Orange County?',
                answer: 'Non-QM loans can go well above traditional conforming limits, often up to $5M or more depending on the lender and your qualification factors.'
              },
              {
                question: 'What documentation do I need for a Non-QM loan?',
                answer: 'Documentation varies by program but may include: 12-24 months of bank statements, profit & loss statements, asset statements, CPA letters, or other alternative income verification methods.'
              },
              {
                question: 'Are interest rates higher on Non-QM loans?',
                answer: 'Non-QM loans typically have slightly higher rates than traditional loans due to the additional flexibility and risk. However, they often provide access to financing that wouldn\'t otherwise be available.'
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
      <section className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Non-QM Loan Options in Orange County?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Break free from traditional lending restrictions. Get flexible financing solutions 
            designed for your unique financial situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
                Start Your Application
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