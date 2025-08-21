import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  BookOpen,
  Search,
  Home,
  DollarSign,
  FileText,
  Calculator,
  Shield,
  TrendingUp,
  Users,
  Building,
  Percent,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mortgage Glossary | Complete Guide to Home Loan Terms & Definitions',
  description: 'Comprehensive mortgage glossary for Orange County home buyers. Understand loan terms, definitions, and mortgage vocabulary. Over 100 terms explained simply.',
  keywords: 'mortgage glossary, home loan terms, real estate definitions, mortgage vocabulary, lending terms, Orange County mortgage broker, mortgage terminology',
};

export default function GlossaryPage() {
  const glossaryTerms = [
    {
      term: 'Adjustable Rate Mortgage (ARM)',
      definition: 'A mortgage loan where the interest rate can change periodically based on market conditions. Common types include 5/1, 7/1, and 10/1 ARMs.',
      category: 'Loan Types',
      related: ['Fixed Rate Mortgage', 'Interest Rate', 'Rate Adjustment']
    },
    {
      term: 'Amortization',
      definition: 'The process of paying off a debt over time through regular payments. Each payment covers both principal and interest, with the principal portion increasing over time.',
      category: 'Payments',
      related: ['Principal', 'Interest', 'Payment Schedule']
    },
    {
      term: 'Annual Percentage Rate (APR)',
      definition: 'The yearly cost of a mortgage including interest rate, points, broker fees, and other costs. APR provides a more complete picture of loan costs than interest rate alone.',
      category: 'Rates & Fees',
      related: ['Interest Rate', 'Points', 'Closing Costs']
    },
    {
      term: 'Appraisal',
      definition: 'A professional estimate of a property\'s market value conducted by a licensed appraiser. Required by lenders to ensure the loan amount doesn\'t exceed property value.',
      category: 'Process',
      related: ['Home Value', 'Loan-to-Value Ratio', 'Property Value']
    },
    {
      term: 'Closing',
      definition: 'The final step in the home buying process where ownership is officially transferred from seller to buyer and the mortgage loan is finalized.',
      category: 'Process',
      related: ['Closing Costs', 'Settlement', 'Title Transfer']
    },
    {
      term: 'Closing Costs',
      definition: 'Fees and expenses paid at closing, typically 2-5% of the loan amount. Includes appraisal fees, title insurance, attorney fees, and lender charges.',
      category: 'Costs',
      related: ['Closing', 'Origination Fee', 'Title Insurance']
    },
    {
      term: 'Conforming Loan',
      definition: 'A mortgage that meets the criteria to be purchased by Fannie Mae or Freddie Mac. For 2025, the limit is $1,089,300 in Orange County.',
      category: 'Loan Types',
      related: ['Jumbo Loan', 'Loan Limits', 'GSE']
    },
    {
      term: 'Conventional Loan',
      definition: 'A mortgage not insured by a government agency (FHA, VA, USDA). Typically requires higher credit scores but offers competitive rates and terms.',
      category: 'Loan Types',
      related: ['FHA Loan', 'VA Loan', 'Government Loans']
    },
    {
      term: 'Credit Score',
      definition: 'A numerical representation of creditworthiness, typically ranging from 300-850. Higher scores generally qualify for better mortgage rates and terms.',
      category: 'Credit',
      related: ['FICO Score', 'Credit Report', 'Credit History']
    },
    {
      term: 'Debt-to-Income Ratio (DTI)',
      definition: 'The percentage of gross monthly income that goes toward debt payments. Most lenders prefer DTI below 43% for conventional loans.',
      category: 'Qualification',
      related: ['Income', 'Debt', 'Qualifying Ratios']
    },
    {
      term: 'Down Payment',
      definition: 'The upfront cash payment made when purchasing a home, typically expressed as a percentage of the purchase price. Can range from 0% to 20% or more.',
      category: 'Payments',
      related: ['Loan-to-Value', 'PMI', 'Cash to Close']
    },
    {
      term: 'Earnest Money',
      definition: 'A deposit made to demonstrate serious intent to purchase a home. Typically 1-3% of purchase price, held in escrow and applied toward down payment at closing.',
      category: 'Process',
      related: ['Purchase Contract', 'Escrow', 'Good Faith Deposit']
    },
    {
      term: 'Escrow',
      definition: 'A neutral third party that holds funds or documents until certain conditions are met. Also refers to the account for property taxes and insurance payments.',
      category: 'Process',
      related: ['Escrow Account', 'Property Taxes', 'Insurance']
    },
    {
      term: 'FHA Loan',
      definition: 'A mortgage insured by the Federal Housing Administration, allowing lower down payments (3.5%) and credit scores (580+) but requiring mortgage insurance.',
      category: 'Loan Types',
      related: ['Government Loans', 'MIP', 'Down Payment']
    },
    {
      term: 'Fixed Rate Mortgage',
      definition: 'A mortgage where the interest rate remains the same for the entire loan term, providing predictable monthly payments.',
      category: 'Loan Types',
      related: ['ARM', 'Interest Rate', 'Payment Stability']
    },
    {
      term: 'HELOC',
      definition: 'Home Equity Line of Credit - a revolving credit line secured by home equity, allowing borrowers to access funds as needed up to a credit limit.',
      category: 'Loan Types',
      related: ['Home Equity', 'Second Mortgage', 'Credit Line']
    },
    {
      term: 'Home Equity',
      definition: 'The difference between a home\'s current market value and the outstanding mortgage balance. Equity builds through payments and property appreciation.',
      category: 'Ownership',
      related: ['Property Value', 'Mortgage Balance', 'Appreciation']
    },
    {
      term: 'Interest Rate',
      definition: 'The percentage charged by a lender for borrowing money, typically expressed as an annual rate. Affects monthly payment amount.',
      category: 'Rates & Fees',
      related: ['APR', 'Rate Lock', 'Market Rates']
    },
    {
      term: 'Jumbo Loan',
      definition: 'A mortgage that exceeds conforming loan limits. In Orange County for 2025, any loan over $1,089,300 is considered jumbo.',
      category: 'Loan Types',
      related: ['Conforming Loan', 'Loan Limits', 'High-Balance']
    },
    {
      term: 'Loan-to-Value Ratio (LTV)',
      definition: 'The percentage of a property\'s value that is financed. Calculated by dividing loan amount by property value. Lower LTV typically means better rates.',
      category: 'Qualification',
      related: ['Down Payment', 'Property Value', 'Risk Assessment']
    },
    {
      term: 'Mortgage Insurance',
      definition: 'Insurance that protects lenders if borrowers default. Required for conventional loans with less than 20% down (PMI) and all FHA loans (MIP).',
      category: 'Insurance',
      related: ['PMI', 'MIP', 'Down Payment']
    },
    {
      term: 'NMLS',
      definition: 'Nationwide Multistate Licensing System - the system that licenses and tracks mortgage loan originators. All MLOs must have an NMLS number.',
      category: 'Regulation',
      related: ['License', 'MLO', 'Compliance']
    },
    {
      term: 'Origination Fee',
      definition: 'A fee charged by lenders for processing a mortgage application, typically 0.5% to 1% of the loan amount.',
      category: 'Fees',
      related: ['Lender Fees', 'Closing Costs', 'Points']
    },
    {
      term: 'PITI',
      definition: 'Principal, Interest, Taxes, and Insurance - the four components of a typical monthly mortgage payment.',
      category: 'Payments',
      related: ['Monthly Payment', 'Escrow', 'Housing Costs']
    },
    {
      term: 'Points',
      definition: 'Fees paid to lenders at closing to reduce the interest rate. One point equals 1% of the loan amount and typically reduces the rate by 0.25%.',
      category: 'Rates & Fees',
      related: ['Discount Points', 'Interest Rate', 'Buy Down']
    },
    {
      term: 'Pre-approval',
      definition: 'A lender\'s conditional commitment to loan money based on preliminary review of finances. More reliable than pre-qualification.',
      category: 'Process',
      related: ['Pre-qualification', 'Approval', 'Credit Check']
    },
    {
      term: 'Principal',
      definition: 'The original amount of money borrowed or the remaining balance on a loan, not including interest.',
      category: 'Loan Terms',
      related: ['Interest', 'Balance', 'Amortization']
    },
    {
      term: 'Private Mortgage Insurance (PMI)',
      definition: 'Insurance required on conventional loans with less than 20% down payment. Can be removed once equity reaches 20%.',
      category: 'Insurance',
      related: ['Mortgage Insurance', 'Down Payment', 'LTV']
    },
    {
      term: 'Rate Lock',
      definition: 'An agreement that guarantees a specific interest rate for a certain period, typically 30-60 days, protecting against rate increases during processing.',
      category: 'Rates & Fees',
      related: ['Interest Rate', 'Lock Period', 'Rate Protection']
    },
    {
      term: 'Refinancing',
      definition: 'Replacing an existing mortgage with a new loan, typically to get a better interest rate, change loan terms, or access home equity.',
      category: 'Loan Types',
      related: ['Rate and Term Refi', 'Cash-Out Refi', 'Current Loan']
    },
    {
      term: 'Title Insurance',
      definition: 'Insurance that protects buyers and lenders against losses from defects in property title, such as liens or ownership disputes.',
      category: 'Insurance',
      related: ['Title Search', 'Closing Costs', 'Property Ownership']
    },
    {
      term: 'Underwriting',
      definition: 'The process where lenders evaluate a borrower\'s creditworthiness and the property\'s value to determine loan approval and terms.',
      category: 'Process',
      related: ['Approval Process', 'Risk Assessment', 'Documentation']
    },
    {
      term: 'VA Loan',
      definition: 'A mortgage guaranteed by the Department of Veterans Affairs for eligible veterans, active military, and surviving spouses. Offers 0% down payment.',
      category: 'Loan Types',
      related: ['Government Loans', 'Military Benefits', 'No Down Payment']
    }
  ];

  const categories = [
    { name: 'Loan Types', icon: Home, count: glossaryTerms.filter(term => term.category === 'Loan Types').length },
    { name: 'Process', icon: FileText, count: glossaryTerms.filter(term => term.category === 'Process').length },
    { name: 'Rates & Fees', icon: Percent, count: glossaryTerms.filter(term => term.category === 'Rates & Fees').length },
    { name: 'Payments', icon: DollarSign, count: glossaryTerms.filter(term => term.category === 'Payments').length },
    { name: 'Qualification', icon: CheckCircle, count: glossaryTerms.filter(term => term.category === 'Qualification').length },
    { name: 'Insurance', icon: Shield, count: glossaryTerms.filter(term => term.category === 'Insurance').length },
    { name: 'Credit', icon: TrendingUp, count: glossaryTerms.filter(term => term.category === 'Credit').length },
    { name: 'Other', icon: BookOpen, count: glossaryTerms.filter(term => !['Loan Types', 'Process', 'Rates & Fees', 'Payments', 'Qualification', 'Insurance', 'Credit'].includes(term.category)).length }
  ];

  // Show all terms by default for better SEO - all content visible to search engines
  const allTerms = glossaryTerms;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4">Complete Reference Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mortgage & Real Estate Glossary
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Understand mortgage terminology with our comprehensive glossary. Clear definitions 
              and examples to help Orange County home buyers navigate the loan process confidently.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Ask About Terms
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                  <Calculator className="w-5 h-5 mr-2" />
                  Mortgage Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Complete Mortgage Glossary
            </h2>
            <p className="text-xl text-slate-600 mb-4">
              {allTerms.length}+ essential mortgage and real estate terms with clear definitions
            </p>
            <p className="text-slate-600">
              All terms are organized alphabetically below. Use your browser's search (Ctrl+F) to find specific terms quickly.
            </p>
          </div>

          {/* Glossary Terms */}
          <div className="grid gap-6">
            {allTerms.map((termData, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-600 mb-2">
                        {termData.term}
                      </CardTitle>
                      <Badge variant="secondary">{termData.category}</Badge>
                    </div>
                    <BookOpen className="w-6 h-6 text-slate-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {termData.definition}
                  </p>
                  {termData.related && termData.related.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm text-slate-800 mb-2">Related Terms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {termData.related.map((related, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {related}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Quick Reference Guide
            </h2>
            <p className="text-xl text-slate-600">
              Essential terms every home buyer should know
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                  Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><strong>PITI:</strong> Principal, Interest, Taxes, Insurance</div>
                  <div><strong>PMI:</strong> Private Mortgage Insurance</div>
                  <div><strong>Escrow:</strong> Account for taxes and insurance</div>
                  <div><strong>Down Payment:</strong> Upfront cash payment</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="w-6 h-6 mr-2 text-blue-600" />
                  Loan Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><strong>Conventional:</strong> Non-government loan</div>
                  <div><strong>FHA:</strong> Government-insured loan</div>
                  <div><strong>VA:</strong> Veterans Affairs loan</div>
                  <div><strong>Jumbo:</strong> High-balance loan</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Percent className="w-6 h-6 mr-2 text-orange-600" />
                  Rates & Ratios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><strong>APR:</strong> Annual Percentage Rate</div>
                  <div><strong>LTV:</strong> Loan-to-Value Ratio</div>
                  <div><strong>DTI:</strong> Debt-to-Income Ratio</div>
                  <div><strong>Rate Lock:</strong> Guaranteed rate period</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-blue-800 mb-6">
                Don't see a term you're looking for? Our glossary is constantly growing, and I'm here 
                to explain any mortgage concept in plain English. No question is too small!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Ask a Question
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:(949) 579-2057">
                  <Button variant="ghost" className="text-blue-600 border-blue-600">
                    <Phone className="w-4 h-4 mr-2" />
                    Call for Explanation
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Official Authority Reference */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Official Financial Terms & Definitions
              </h2>
              <p className="text-slate-600 mb-6">
                For additional mortgage terms and official definitions, visit the Consumer Financial Protection Bureau's 
                comprehensive financial terminology database. The CFPB provides authoritative definitions for all 
                financial and mortgage-related terms.
              </p>
              <a 
                href="https://www.consumerfinance.gov/consumer-tools/mortgages/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Visit CFPB Mortgage Resources
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Put Your Knowledge to Work?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Understanding mortgage terms is the first step. Now let's find the perfect loan program 
            for your Orange County home purchase. I'll guide you through every term and process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Application
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/calculator">
              <Button size="lg" variant="ghost" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Payments
              </Button>
            </Link>
          </div>
          <div className="mt-8">
            <p className="text-sm text-slate-600">
              Mo Abdel, NMLS #1426884 | Making Mortgage Terms Simple for Orange County
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}