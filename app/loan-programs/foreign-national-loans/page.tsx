import React from 'react';


export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "https://www.mothebroker.com";
  const title = "Mortgage Broker in Orange County, CA | Mo Abdel";
  const description = "Local mortgage expertise in Orange County, CA. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "/loan-programs/foreign-national-loans" },
    openGraph: { title, description, url: BASE + "/loan-programs/foreign-national-loans", siteName: "Mo Abdel â€” Mortgage Broker", images: ["https://www.mothebroker.com/logo.png"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
import type { Metadata } from 'next';

import Link from 'next/link';

import { Button } from '@/components/ui/Button';

import { Badge } from '@/components/ui/Badge';







export default function ForeignNationalLoansPage() {

  return (

    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        

        <div className="text-center mb-16">

          <Badge className="bg-red-100 text-red-600 mb-4">International Buyer Program</Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">

            <span className="text-red-600">Foreign National Loans</span> in Orange County

          </h1>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">

            Non-US citizens can purchase Orange County real estate with specialized foreign national loans. 

            No US credit history or Social Security number required. Ideal for international investors.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link href="/contact">

              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">

                Get Foreign National Pre-Approval

              </Button>

            </Link>

            <a href="tel:(949) 579-2057">

              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg">

                Call (949) 579-2057

              </Button>

            </a>

          </div>

        </div>



        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">

          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">

            Foreign National Loan Features

          </h2>

          

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="text-center">

              <h3 className="text-xl font-bold text-red-600 mb-4">No US Requirements</h3>

              <ul className="text-left space-y-2 text-slate-700">

                <li>â€¢ No US credit history required</li>

                <li>â€¢ No Social Security number needed</li>

                <li>â€¢ No US income documentation</li>

                <li>â€¢ Foreign credit reports accepted</li>

                <li>â€¢ International bank statements OK</li>

              </ul>

            </div>

            

            <div className="text-center">

              <h3 className="text-xl font-bold text-red-600 mb-4">Loan Terms</h3>

              <ul className="text-left space-y-2 text-slate-700">

                <li>â€¢ 25-40% down payment required</li>

                <li>â€¢ Loan amounts up to $3M</li>

                <li>â€¢ 15, 20, 25, 30 year terms</li>

                <li>â€¢ Fixed and ARM options</li>

                <li>â€¢ Purchase and refinance available</li>

              </ul>

            </div>

            

            <div className="text-center">

              <h3 className="text-xl font-bold text-red-600 mb-4">Property Types</h3>

              <ul className="text-left space-y-2 text-slate-700">

                <li>â€¢ Primary residences</li>

                <li>â€¢ Second/vacation homes</li>

                <li>â€¢ Investment properties</li>

                <li>â€¢ Condos and single-family homes</li>

                <li>â€¢ Orange County focus</li>

              </ul>

            </div>

          </div>

        </div>



        <div className="bg-red-600 text-white rounded-lg p-8 text-center">

          <h2 className="text-3xl font-bold mb-4">Invest in Orange County Real Estate</h2>

          <p className="text-xl mb-6 text-red-100">

            Specialized lending for international buyers and foreign nationals

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link href="/contact">

              <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-semibold">

                Start International Application

              </Button>

            </Link>

            <a href="tel:(949) 579-2057">

              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg">

                Call (949) 579-2057

              </Button>

            </a>

          </div>

          <p className="text-red-100 mt-4">

            Licensed mortgage broker with NEXA Mortgage â€¢ NMLS #1426884 â€¢ International Specialist

          </p>

        </div>



        {/* Required Disclaimers */}

        <div className="bg-slate-100 rounded-lg p-6 mt-8">

          <h3 className="text-lg font-semibold text-slate-900 mb-3">Important Disclaimers</h3>

          <div className="text-sm text-slate-700 space-y-2">

            <p>

              <strong>This is not a commitment to lend.</strong> All information contained herein is subject to change without notice. 

              All loans are subject to credit approval, income verification, and property appraisal. Equal Housing Lender.

            </p>

            <p>

              This material is not from HUD or FHA and has not been approved by HUD or any government agency. 

              The information provided is for informational purposes only and is not an advertisement for products or services.

            </p>

            <p>

              Interest rates and loan terms are subject to change without notice. All information must be verified prior to loan approval. 

              Mo Abdel - NMLS #1426884, Licensed Mortgage Loan Originator with NEXA Mortgage.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}





