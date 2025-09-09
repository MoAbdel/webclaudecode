import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Home, Shield, DollarSign, TrendingUp, Users, CheckCircle, Calculator, Heart, CreditCard, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FHA Loans in Orange County, CA | Low Down Payment Options',
  description: 'Buy a home in Orange County with as little as 3.5% down. FHA loans available through Mo The Broker.',
  keywords: 'FHA loans orange county, low down payment home loans, first time buyer FHA, 3.5% down payment, mortgage insurance orange county',
  openGraph: {
    title: 'FHA Loans in Orange County, CA | Low Down Payment Options',
    description: 'Buy a home in Orange County with as little as 3.5% down. FHA loans available through Mo The Broker.',
    url: 'https://www.mothebroker.com/fha-loans-orange-county',
  }
};

// JSON-LD Schema for LocalBusiness
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mo The Broker - Orange County Mortgage",
  "serviceType": "FHA Loans",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA"
  },
  "telephone": "(949) 579-2057",
  "url": "https://www.mothebroker.com/fha-loans-orange-county",
  "description": "Expert FHA loan services in Orange County, CA",
  "areaServed": "Orange County, CA",
  "additionalType": "https://schema.org/MortgageBroker"
};

const fhaBenefits = [
  {
    title: 'Low Down Payment',
    icon: DollarSign,
    description: 'As little as 3.5% down payment required',
    details: [
      'Just 3.5% down with credit score 580+',
      'Down payment can come from gifts',
      'More affordable than conventional 20% down',
      'Perfect for first-time buyers in Orange County'
    ]
  },
  {
    title: 'Flexible Credit Requirements',
    icon: CreditCard,
    description: 'More lenient credit score requirements',
    details: [
      'Credit scores as low as 500 with 10% down',
      'Credit scores as low as 580 with 3.5% down',
      'Consider alternative credit histories',
      'Recent financial difficulties may be acceptable'
    ]
  },
  {
    title: 'Assumable Mortgages',
    icon: Users,
    description: 'Transferable loan benefits for future buyers',
    details: [
      'Future buyers can assume your FHA loan',
      'Maintain original interest rate',
      'Adds value when selling your home',
      'Competitive advantage in Orange County market'
    ]
  },
  {
    title: 'Competitive Interest Rates',
    icon: TrendingUp,
    description: 'Government-backed loan program rates',
    details: [
      'Often competitive with conventional loans',
      'Government backing reduces lender risk',
      'Stable rate environment',
      'Multiple lender options through broker network'
    ]
  }
];

const fhaRequirements = [
  {
    category: 'Credit & Income',
    requirements: [
      'Minimum credit score 580 (3.5% down) or 500 (10% down)',
      'Steady employment history (2 years preferred)',
      'Debt-to-income ratio typically under 43%',
      'Sufficient income to support mortgage payments'
    ]
  },
  {
    category: 'Property Standards',
    requirements: [
      'Primary residence only (no investment properties)',
      'Property must meet FHA standards',
      'FHA appraisal required',
      'Home must be move-in ready condition'
    ]
  },
  {
    category: 'Down Payment & Funding',
    requirements: [
      '3.5% minimum down payment',
      'Down payment can be gifted funds',
      'Closing costs can be financed or paid by seller',
      'Mortgage insurance required for life of loan'
    ]
  },
  {
    category: 'Orange County Specific',
    requirements: [
      'Loan amount cannot exceed $1,089,300 (2025 limit)',
      'Property must be within Orange County boundaries',
      'Competitive market requires strong pre-approval',
      'Local market knowledge essential for success'
    ]
  }
];

const faqs = [
  {
    question: "What are the 2025 FHA loan limits in Orange County?",
    answer: "The 2025 FHA loan limit for Orange County is $1,089,300 for single-family homes. This is slightly below the conforming high-cost limit of $1,209,750. This means you can purchase homes up to approximately $1.13 million with 3.5% down, assuming you meet other FHA requirements."
  },
  {
    question: "What's the difference between FHA and conventional loans in Orange County?",
    answer: "FHA loans require just 3.5% down vs 3-20% for conventional, have more flexible credit requirements (580+ vs 620+), but require mortgage insurance for the loan's life. Conventional loans allow PMI removal at 20% equity. In Orange County's expensive market, FHA loans help more buyers qualify with lower down payments."
  },
  {
    question: "Do I have to be a first-time buyer to get an FHA loan?",
    answer: "No, you don't have to be a first-time buyer. However, FHA loans are limited to primary residences, so you can't use them for investment properties or vacation homes. In Orange County's competitive market, FHA loans are popular with both first-time and repeat buyers due to the low down payment requirement."
  },
  {
    question: "How does FHA mortgage insurance work?",
    answer: "FHA loans require both an upfront mortgage insurance premium (1.75% of loan amount) and annual mortgage insurance premiums (0.45-1.05% annually). Unlike conventional PMI, FHA mortgage insurance typically stays for the life of the loan. However, the low down payment often makes this worthwhile for Orange County buyers."
  },
  {
    question: "Can I use an FHA loan for condos or townhomes in Orange County?",
    answer: "Yes, but the condo project must be FHA-approved. Many Orange County developments are FHA-approved, but it's important to verify before making an offer. I can help you identify FHA-approved properties and navigate the condo approval process."
  }
];

const comparisonData = [
  {
    feature: 'Down Payment',
    fha: '3.5% minimum',
    conventional: '3-20%',
    va: '0% (veterans only)'
  },
  {
    feature: 'Credit Score',
    fha: '580+ (3.5% down), 500+ (10% down)',
    conventional: '620+ typically',
    va: 'No minimum (lender discretion)'
  },
  {
    feature: 'Loan Limits (Orange County)',
    fha: '$1,089,300',
    conventional: '$1,209,750',
    va: 'No limit (with down payment)'
  },
  {
    feature: 'Mortgage Insurance',
    fha: 'Required for life of loan',
    conventional: 'Removable at 20% equity',
    va: 'No PMI (funding fee only)'
  },
  {
    feature: 'Property Type',
    fha: 'Primary residence only',
    conventional: 'Primary, second, investment',
    va: 'Primary residence only'
  }
];

export default function FHALoansOrangeCountyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              FHA Loans in <span className="text-blue-600">Orange County, CA</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Make homeownership affordable in Orange County with FHA loans requiring as little as 3.5% down. 
              Perfect for first-time buyers and those with less-than-perfect credit, FHA loans provide a path to 
              homeownership in one of California's most desirable markets. With flexible qualification requirements 
              and competitive rates, FHA financing opens doors that might otherwise remain closed.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-green-800 font-semibold text-lg">
                💰 Buy a $500K Orange County home with just $17,500 down (3.5%)
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057" className="flex items-center">
                  <Home className="w-5 h-5 mr-2" />
                  Get Pre-Approved for FHA
                </a>
              </Button>
              <Link href="/calculator">
                <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Calculate FHA Payments
                </Button>
              </Link>
            </div>
          </div>

          {/* 2025 FHA Loan Limits */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              2025 FHA Loan Limits in Orange County
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-700 mb-6 text-center">
                The 2025 FHA loan limit for Orange County is <strong>$1,089,300</strong> for single-family homes. 
                This is slightly below the conforming high-cost limit of <strong>$1,209,750</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">$1,089,300</h3>
                  <p className="text-slate-700">2025 FHA Loan Limit</p>
                  <p className="text-sm text-slate-600 mt-2">Single-family homes</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">3.5%</h3>
                  <p className="text-slate-700">Minimum Down Payment</p>
                  <p className="text-sm text-slate-600 mt-2">With 580+ credit score</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">580+</h3>
                  <p className="text-slate-700">Minimum Credit Score</p>
                  <p className="text-sm text-slate-600 mt-2">For 3.5% down payment</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of FHA Loans */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Benefits of FHA Loans in Orange County
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {fhaBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
                  <div className="flex items-center mb-6">
                    <benefit.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FHA vs Conventional vs VA Comparison */}
          <section className="mb-16 bg-slate-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              FHA vs Conventional vs VA Loans
            </h2>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-6 py-4 text-left font-bold text-slate-900">Feature</th>
                    <th className="px-6 py-4 text-center font-bold text-blue-600">FHA Loan</th>
                    <th className="px-6 py-4 text-center font-bold text-slate-600">Conventional</th>
                    <th className="px-6 py-4 text-center font-bold text-slate-600">VA Loan</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-slate-200">
                      <td className="px-6 py-4 font-medium text-slate-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-medium">{row.fha}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{row.conventional}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{row.va}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-600 mb-4">
                Not sure which loan type is best for you? I can help you compare options based on your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/conventional-loans-orange-county">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
                    Compare Conventional Loans
                  </Button>
                </Link>
                <Link href="/va-loans-orange-county">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
                    Explore VA Loans
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Who Qualifies for FHA */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Who Qualifies for FHA Loans in Orange County?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {fhaRequirements.map((req, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">{req.category}</h3>
                  <ul className="space-y-3">
                    {req.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FHA Loan Process */}
          <section className="mb-16 bg-green-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              FHA Loan Process in Orange County
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Pre-Approval</h3>
                <p className="text-slate-600">
                  Get pre-approved to understand your budget and show sellers you're serious 
                  in Orange County's competitive market.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Home Shopping</h3>
                <p className="text-slate-600">
                  Search for FHA-eligible homes within the $1,089,300 loan limit. 
                  I'll help identify suitable properties.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">FHA Appraisal</h3>
                <p className="text-slate-600">
                  FHA requires a special appraisal to ensure the property meets 
                  standards and is worth the purchase price.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Closing</h3>
                <p className="text-slate-600">
                  Final underwriting, closing preparation, and keys to your 
                  new Orange County home!
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              FAQs About FHA Loans in Orange County
            </h2>
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Explore Related Orange County Mortgage Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/purchase-loans" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Purchase Loans</span>
              </Link>
              <Link href="/conventional-loans-orange-county" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Conventional Loans</span>
              </Link>
              <Link href="/va-loans-orange-county" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">VA Loans</span>
              </Link>
              <Link href="/areas/irvine" className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-medium">Irvine FHA Loans</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Buy Your Orange County Home?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Get pre-approved for an FHA loan with just 3.5% down and start your homeownership journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                <a href="tel:(949) 579-2057">
                  Call (949) 579-2057
                </a>
              </Button>
              <Link href="/contact">
                <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                  Get Pre-Approved for FHA Loan
                </Button>
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Mo Abdel - NMLS #1426884 | Licensed Orange County Mortgage Broker
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
