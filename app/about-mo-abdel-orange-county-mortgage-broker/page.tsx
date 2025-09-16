import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Phone, MapPin, Star, Shield, Award, Clock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Mo Abdel | Licensed Orange County Mortgage Broker NMLS #1426884',
  description: 'Meet Mo Abdel, your trusted Orange County mortgage broker with NMLS #1426884. Access 200+ lenders, 18-day average closings, and expert local knowledge.',
  alternates: {
    canonical: 'https://www.mothebroker.com/about-mo-abdel-orange-county-mortgage-broker',
  },
};

// JSON-LD Schema for Mo Abdel (Person Schema)
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mo Abdel",
  "jobTitle": "Licensed Mortgage Broker",
  "worksFor": {
    "@type": "Organization",
    "name": "NEXA Mortgage LLC",
    "identifier": "NMLS #1660690"
  },
  "identifier": "NMLS #1426884",
  "telephone": "(949) 579-2057",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lake Forest",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": [
    "Orange County, CA",
    "Irvine, CA",
    "Newport Beach, CA",
    "Mission Viejo, CA",
    "Lake Forest, CA",
    "Laguna Beach, CA",
    "Dana Point, CA"
  ],
  "knowsAbout": [
    "FHA Loans",
    "VA Loans",
    "Conventional Loans",
    "Jumbo Loans",
    "Refinancing",
    "First-time home buyer programs"
  ],
  "award": "NEXA Mortgage Top Producer",
  "alumniOf": "Licensed Professional",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Nationwide Multistate Licensing System",
      "url": "https://www.nmlsconsumeraccess.org/"
    },
    "identifier": "NMLS #1426884"
  }
};

export default function AboutMoAbdelPage() {
  return (
    <>
      {/* Person Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500">About Mo Abdel</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/images/moabdel-headshot-final.png"
                alt="Mo Abdel - Licensed Orange County Mortgage Broker NMLS #1426884"
                fill
                className="object-cover scale-110"
                priority
              />
            </div>
            
            <div className="flex justify-center mb-4">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Licensed NMLS #1426884
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Mo Abdel
            </h1>
            <p className="text-xl text-slate-600 mb-2">
              Your Trusted Orange County Mortgage Broker
            </p>
            <p className="text-lg text-blue-600 font-semibold">
              Orange County Mortgage Broker • 200+ Lender Access
            </p>
            
            {/* Quick Contact Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a href="tel:(949) 579-2057" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (949) 579-2057
              </a>
              <div className="inline-flex items-center text-slate-600">
                <MapPin className="w-5 h-5 mr-2" />
                Lake Forest, CA
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-sm text-slate-600">Lender Partners</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">18</div>
                <div className="text-sm text-slate-600">Avg Closing Days</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">NMLS</div>
                <div className="text-sm text-slate-600">Licensed Professional</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600">Availability</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Story */}
          <Card className="shadow-xl mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Your Partner in Orange County Home Financing
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  As a licensed mortgage broker serving Orange County, I specialize in helping homeowners unlock the power of their home's equity and secure better mortgage terms through strategic refinancing. <strong>According to 2025 HMDA data analysis, research shows that mortgage brokers save borrowers an average of $10,662 over the life of their loan compared to retail lenders.</strong> With access to over 200 lenders, I can offer you rates and equity programs that traditional banks simply cannot match.
                </p>
                <p className="mb-4">
                  Your home is likely your largest asset—let's make it work harder for you. Unlike big banks that push their own products, I work exclusively for you, comparing rates and terms from hundreds of lenders to find the perfect solution for your unique situation.
                </p>
                <p className="mb-4">
                  Whether you're looking to lower your monthly payments, eliminate PMI, consolidate high-interest debt, or access cash for home improvements, I have the expertise and lender relationships to deliver results. My average closing time of just 18 days means you can start saving sooner.
                </p>
                <p className="mb-4">
                  What sets me apart is my commitment to transparency and education. I believe you should understand every aspect of your loan, which is why I take the time to explain options and answer questions throughout the process. My clients appreciate my data-driven approach and the fact that I'm available 24/7 to guide you through every step.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Professional Credentials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Left Column - Licenses & Credentials */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Award className="w-6 h-6 mr-3 text-blue-600" />
                  Professional Credentials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-semibold">NMLS #1426884</div>
                      <div className="text-sm text-slate-600">Nationwide Multistate Licensing System</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-semibold">California Licensed Mortgage Broker</div>
                      <div className="text-sm text-slate-600">Department of Financial Protection</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-semibold">NEXA Mortgage LLC</div>
                      <div className="text-sm text-slate-600">NMLS #1660690 - Licensed Brokerage</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-semibold">Continuing Education Current</div>
                      <div className="text-sm text-slate-600">Annual Requirements Met</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-800">
                    <strong>Verify My License:</strong> Visit 
                    <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                      NMLS Consumer Access
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Specializations */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Star className="w-6 h-6 mr-3 text-yellow-600" />
                  Loan Specializations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>First-Time Homebuyers</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Refinancing Specialists</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>FHA & VA Loans</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Jumbo & High-Balance Loans</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Investment Properties</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Non-QM & Bank Statement Loans</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose a Broker Section */}
          <Card className="shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Why Choose a Mortgage Broker Over a Bank?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">200+ Lender Access</h3>
                  <p className="text-slate-600">
                    Unlike banks that only offer their products, I shop your loan with hundreds of lenders to find the best rates and terms.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">18-Day Average Closing</h3>
                  <p className="text-slate-600">
                    Streamlined process and strong lender relationships mean faster closings and less stress for you.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
                  <p className="text-slate-600">
                    Licensed professional with deep Orange County market knowledge to guide your decision.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Orange County Expertise */}
          <Card className="shadow-xl mb-12 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
                Deep Orange County Market Knowledge
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 text-center mb-8">
                <p>
                  As a Lake Forest resident serving Orange County, I understand the unique aspects of our local market—from Irvine's master-planned communities to Newport Beach's luxury coastal properties.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  'Irvine', 'Newport Beach', 'Mission Viejo', 'Lake Forest',
                  'Laguna Beach', 'Dana Point', 'Costa Mesa', 'Huntington Beach'
                ].map((city, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow">
                    <span className="text-sm font-medium text-slate-700">{city}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="shadow-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-xl mb-6 text-blue-100">
                Let's discuss your mortgage needs and find the perfect loan program for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                    Start My Application
                  </Button>
                </Link>
                <a href="tel:(949) 579-2057">
                  <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    (949) 579-2057
                  </Button>
                </a>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                Licensed mortgage broker NMLS #1426884 • Available 24/7
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}