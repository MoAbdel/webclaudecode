import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { DollarSign, FileText, TrendingUp, Users, Check, AlertCircle, Calculator, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bank Statement Loans Irvine CA | Self-Employed Mortgage | No Income Documentation | Mo Abdel NMLS #1426884',
  description: 'Bank statement loans in Irvine CA for self-employed borrowers. Qualify using 12-24 months bank statements. Up to $3M loan amounts. Expert Non-QM lender serving Irvine. Call (949) 579-2057.',
  alternates: {
    canonical: 'https://www.mothebroker.com/loan-programs/bank-statement-loans-irvine',
  },
};

export default function BankStatementLoansIrvinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge className="bg-orange-100 text-orange-600">Non-QM Specialty Program</Badge>
            <Badge className="bg-blue-100 text-blue-600 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Irvine CA
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-orange-600">Bank Statement Loans</span> in Irvine CA
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Self-employed professionals in Irvine can qualify for mortgages using 12-24 months of bank statements 
            instead of tax returns. Perfect for business owners, contractors, and entrepreneurs buying in Irvine's premium neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                Get Irvine Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Irvine Market Overview */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">
            Why Bank Statement Loans Work Perfect for Irvine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">High Home Values</h3>
              <p className="text-slate-600 text-sm">Median home price $1.4M+ requires flexible financing for self-employed buyers</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Entrepreneur Hub</h3>
              <p className="text-slate-600 text-sm">Many tech professionals and business owners with complex income structures</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Fast Approval</h3>
              <p className="text-slate-600 text-sm">Streamlined documentation perfect for Irvine's competitive market</p>
            </div>
          </div>
        </div>

        {/* Perfect For Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Perfect for Irvine Self-Employed Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Who Qualifies:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Tech entrepreneurs and consultants</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Real estate investors and agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Medical practice owners</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Small business owners</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Contractors and freelancers</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Program Features:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Loan amounts up to $3M+</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">12 or 24 month bank statements</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">No tax returns required</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calculator className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Down payments from 10%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Purchase or refinance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Popular Irvine Neighborhoods */}
        <div className="bg-slate-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Popular Irvine Neighborhoods for Bank Statement Loans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Turtle Rock', price: '$1.8M+' },
              { name: 'Quail Hill', price: '$1.6M+' },
              { name: 'Shady Canyon', price: '$3M+' },
              { name: 'University Park', price: '$1.4M+' },
              { name: 'Woodbridge', price: '$1.3M+' },
              { name: 'Northwood', price: '$1.5M+' },
              { name: 'Cypress Village', price: '$1.2M+' },
              { name: 'Great Park', price: '$1.1M+' }
            ].map((neighborhood) => (
              <Card key={neighborhood.name} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-slate-900">{neighborhood.name}</h3>
                  <p className="text-slate-600 text-sm">Avg: {neighborhood.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            How Bank Statement Loans Work in Irvine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Submit Bank Statements</h3>
              <p className="text-slate-600">Provide 12-24 months of personal or business bank statements</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Income Calculation</h3>
              <p className="text-slate-600">We calculate qualifying income from your deposits and cash flow</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Fast Approval</h3>
              <p className="text-slate-600">Get approved quickly to compete in Irvine's fast-moving market</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Buy Your Irvine Home?</h2>
          <p className="text-xl mb-6">
            Don't let complex income documentation delay your Irvine home purchase. 
            Get pre-approved with bank statement loans today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-3 text-lg">
                Start Your Application
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Frequently Asked Questions - Bank Statement Loans Irvine
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  Who qualifies for bank statement loans in Irvine?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Bank statement loans are perfect for Irvine's self-employed professionals, including technology consultants, startup founders, 
                  medical and dental practice owners, real estate professionals and investors, independent contractors, freelancers, 
                  and small business owners across various industries who have difficulty documenting income through traditional tax returns.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  Why are bank statement loans popular in Irvine's market?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  With Irvine's median home prices exceeding $1.4 million, self-employed buyers need financing solutions that match their 
                  earning potential rather than their tax returns. Bank statement loans allow you to qualify based on actual cash flow, 
                  with quick approval times to compete with cash offers, higher loan limits for premium pricing, and flexible qualification 
                  to secure dream homes in top neighborhoods.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  What documentation is needed for Irvine bank statement loans?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  You'll need to provide 12-24 months of personal or business bank statements. We calculate qualifying income from your deposits 
                  and cash flow rather than requiring tax returns. This streamlined documentation process is perfect for Irvine residents with 
                  non-traditional income streams and helps speed up the approval process.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  What are the advantages for Irvine homebuyers?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Bank statement loans offer significant advantages in Irvine's competitive market: quick approval times help you compete with cash offers, 
                  higher loan limits accommodate Irvine's premium home pricing, flexible qualification helps secure homes in top neighborhoods like 
                  Turtle Rock and Quail Hill, and professional underwriting that understands complex business income structures.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  Which Irvine neighborhoods work best with bank statement loans?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Bank statement loans work excellently for all Irvine neighborhoods, especially premium areas like Turtle Rock ($1.8M+), 
                  Quail Hill ($1.6M+), Shady Canyon ($3M+), University Park ($1.4M+), Woodbridge ($1.3M+), Northwood ($1.5M+), 
                  Cypress Village ($1.2M+), and Great Park ($1.1M+). The flexible qualification helps buyers access these desirable communities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  How does the bank statement loan process work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  The process is straightforward: First, submit 12-24 months of personal or business bank statements. Then, we calculate 
                  your qualifying income from deposits and cash flow rather than tax returns. Finally, get fast approval to compete 
                  effectively in Irvine's fast-moving real estate market with loan amounts up to $3M+ and down payments starting at 10%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}