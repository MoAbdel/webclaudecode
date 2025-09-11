import React from 'react';

export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "https://www.mothebroker.com";
  const title = "Mortgage Broker in Orange County, CA | Mo Abdel";
  const description = "Local mortgage expertise in Orange County, CA. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "/loan-programs/bank-statement-loans-irvine" },
    openGraph: { title, description, url: BASE + "/loan-programs/bank-statement-loans-irvine", siteName: "Mo Abdel — Mortgage Broker", images: ["https://www.mothebroker.com/logo.png"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { DollarSign, FileText, TrendingUp, Users, Check, AlertCircle, Calculator, Phone, MapPin } from 'lucide-react';



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

        {/* SEO Content */}
        <div className="mt-12 prose prose-lg max-w-4xl mx-auto">
          <h2>Bank Statement Loans for Irvine Self-Employed Professionals</h2>
          <p>
            Irvine's thriving business community includes thousands of self-employed professionals, entrepreneurs, 
            and small business owners. Traditional mortgage approval can be challenging when your income doesn't 
            fit conventional documentation requirements. Bank statement loans provide the perfect solution for 
            Irvine residents with non-traditional income streams.
          </p>
          
          <h3>Why Irvine Professionals Choose Bank Statement Loans</h3>
          <p>
            With Irvine's median home prices exceeding $1.4 million, self-employed buyers need financing solutions 
            that match their earning potential rather than their tax returns. Bank statement loans allow you to 
            qualify based on actual cash flow, making homeownership achievable for:
          </p>
          
          <ul>
            <li>Technology consultants and startup founders</li>
            <li>Medical and dental practice owners</li>
            <li>Real estate professionals and investors</li>
            <li>Independent contractors and freelancers</li>
            <li>Small business owners across various industries</li>
          </ul>

          <h3>Irvine Market Advantages</h3>
          <p>
            Bank statement loans are particularly valuable in Irvine's competitive market where:
          </p>
          <ul>
            <li>Quick approval times help you compete with cash offers</li>
            <li>Higher loan limits accommodate premium pricing</li>
            <li>Flexible qualification helps secure dream homes in top neighborhoods</li>
            <li>Professional underwriting understands complex business income</li>
          </ul>
        </div>
      </div>
    </div>
  );
}





<section className="mt-12">
  <h2 className="text-2xl font-bold mb-4">Related Options</h2>
  <ul className="list-disc list-inside text-blue-700 space-y-1">
    <li><a href="/loan-programs/conventional-loans">Conventional Loans</a></li>
    <li><a href="/loan-programs/jumbo-loans">Jumbo Loans</a></li>
  </ul>
</section>

<section className="my-8 bg-slate-50 p-4 rounded-lg">
  <h3 className="text-xl font-semibold mb-2">Orange County 2025 Loan Limits</h3>
  <ul className="list-disc list-inside">
    <li>Conforming (1-unit): <strong>$1,209,750</strong></li>
    <li>FHA (1-unit): <strong>$1,089,300</strong></li>
    <li>Jumbo: <strong>above $1,209,750</strong></li>
  </ul>

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"FinancialService","name":"Mo Abdel — Mortgage Broker","serviceType":"Mortgage Service","areaServed":"Orange County, CA","url":"https://www.mothebroker.com/loan-programs/bank-statement-loans-irvine","telephone":"(949) 579-2057","address":{"@type":"PostalAddress","addressLocality":"Orange County","addressRegion":"CA","addressCountry":"US"}})
}} />
</section>