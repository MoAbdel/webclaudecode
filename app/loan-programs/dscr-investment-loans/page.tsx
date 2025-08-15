import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'DSCR Investment Loans Orange County | No Income Verification Rental Property Loans',
  description: 'DSCR investment loans in Orange County. Qualify based on rental income, not personal income. No employment verification. Perfect for real estate investors. Call (949) 579-2057.',
};

export default function DSCRInvestmentLoansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-600 mb-4">Investment Property Program</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">DSCR Investment Loans</span> in Orange County
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Qualify for investment property loans based on the property's rental income, not your personal income. 
            No employment verification or tax returns required. Perfect for real estate investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get DSCR Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            What Are DSCR Investment Loans?
          </h2>
          <p className="text-lg text-slate-700 mb-6 text-center max-w-4xl mx-auto">
            DSCR (Debt Service Coverage Ratio) loans qualify borrowers based on the rental income 
            the property generates, not the borrower's personal income. The property must generate 
            enough rental income to cover the mortgage payment (typically 1.0+ DSCR ratio).
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Key Benefits</h3>
              <ul className="text-left space-y-2 text-slate-700">
                <li>• No income documentation required</li>
                <li>• No employment verification</li>
                <li>• Qualify based on rental income</li>
                <li>• Up to $2M loan amounts</li>
                <li>• Purchase or refinance</li>
                <li>• Portfolio lending available</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Requirements</h3>
              <ul className="text-left space-y-2 text-slate-700">
                <li>• 1.0+ DSCR ratio minimum</li>
                <li>• 20-25% down payment</li>
                <li>• 620+ credit score</li>
                <li>• 2-6 months reserves</li>
                <li>• Investment property experience preferred</li>
                <li>• Property appraisal and rent roll</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Perfect For</h3>
              <ul className="text-left space-y-2 text-slate-700">
                <li>• Real estate investors</li>
                <li>• Self-employed borrowers</li>
                <li>• Retirees with rental income</li>
                <li>• Foreign national investors</li>
                <li>• Portfolio property owners</li>
                <li>• 1031 exchange buyers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Investment Portfolio?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Get pre-approved for DSCR investment loans with no income documentation hassles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Start DSCR Application
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-blue-100 mt-4">
            Licensed wholesale mortgage broker with NEXA Mortgage • NMLS #1426884 • Investment Specialist
          </p>
        </div>
      </div>
    </div>
  );
}