import React from 'react';

export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "https://www.mothebroker.com";
  const title = "Mortgage Broker in Orange County, CA | Mo Abdel";
  const description = "Local mortgage expertise in Orange County, CA. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "/guides/orange-county-va-loans" },
    openGraph: { title, description, url: BASE + "/guides/orange-county-va-loans", siteName: "Mo Abdel — Mortgage Broker", images: ["https://www.mothebroker.com/logo.png"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
import Link from 'next/link';
import { Shield, Star, Home, MapPin, Calculator, Phone, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function OrangeCountyVALoansGuide() {
  const vaLoanBenefits = [
    {
      benefit: "No Down Payment Required",
      description: "Buy a home with $0 down payment, even in Orange County's expensive market",
      savings: "Save $200,000+ on typical OC home"
    },
    {
      benefit: "No Private Mortgage Insurance", 
      description: "No monthly PMI payments, unlike conventional loans with less than 20% down",
      savings: "Save $300-800/month"
    },
    {
      benefit: "Competitive Interest Rates",
      description: "VA loans typically offer rates 0.125-0.25% below conventional loans",
      savings: "Save $50-150/month"
    },
    {
      benefit: "No Prepayment Penalties",
      description: "Pay off your loan early without any fees or penalties",
      savings: "Freedom to refinance anytime"
    },
    {
      benefit: "Assumable Loans",
      description: "Future buyers can assume your VA loan, making your home more attractive to sell",
      savings: "Competitive advantage when selling"
    },
    {
      benefit: "Foreclosure Protection",
      description: "VA provides additional support and resources if you face financial hardship",
      savings: "Peace of mind protection"
    }
  ];

  const militaryResources = [
    {
      base: "Marine Corps Base Camp Pendleton",
      location: "Oceanside/San Clemente border",
      personnel: "~42,000",
      nearbyAreas: ["San Clemente", "Dana Point", "San Juan Capistrano"],
      avgCommute: "15-30 minutes"
    },
    {
      base: "Naval Base Coronado (North Island)",
      location: "San Diego County", 
      personnel: "~25,000",
      nearbyAreas: ["South Orange County", "San Clemente", "Dana Point"],
      avgCommute: "45-60 minutes"
    },
    {
      base: "Los Alamitos Joint Forces",
      location: "Los Alamitos",
      personnel: "~3,000",
      nearbyAreas: ["Los Alamitos", "Cypress", "Seal Beach"],
      avgCommute: "5-15 minutes"
    },
    {
      base: "Joint Forces Training Base",
      location: "Los Alamitos", 
      personnel: "~2,500",
      nearbyAreas: ["Garden Grove", "Westminster", "Huntington Beach"],
      avgCommute: "10-20 minutes"
    }
  ];

  const popularVAHomes = [
    {
      area: "San Clemente",
      medianPrice: "$1,200,000",
      vaLoanLimit: "$1,089,300",
      jumpoCoverage: "85%",
      militaryFriendly: true,
      highlights: ["Beach city", "Military discounts", "Family neighborhoods"]
    },
    {
      area: "Dana Point",
      medianPrice: "$1,400,000", 
      vaLoanLimit: "$1,089,300",
      jumpoCoverage: "75%",
      militaryFriendly: true,
      highlights: ["Harbor views", "Resort lifestyle", "Top schools"]
    },
    {
      area: "Mission Viejo",
      medianPrice: "$950,000",
      vaLoanLimit: "$1,089,300",
      jumpoCoverage: "100%",
      militaryFriendly: true,
      highlights: ["Master planned", "Family oriented", "Great value"]
    },
    {
      area: "Huntington Beach",
      medianPrice: "$1,300,000",
      vaLoanLimit: "$1,089,300", 
      jumpoCoverage: "80%",
      militaryFriendly: true,
      highlights: ["Surf city", "Beach lifestyle", "Military community"]
    },
    {
      area: "Costa Mesa",
      medianPrice: "$950,000",
      vaLoanLimit: "$1,089,300",
      jumpoCoverage: "100%",
      militaryFriendly: false,
      highlights: ["Urban living", "Job centers", "Nightlife"]
    }
  ];

  const vaLoanProcess = [
    {
      step: 1,
      title: "Obtain Certificate of Eligibility",
      description: "Get your COE through VA.gov or we can help you obtain it during the application process",
      timeframe: "1-3 days online",
      tips: ["Can be done electronically", "Need DD-214 or current service info", "Spouse benefits may apply"]
    },
    {
      step: 2,
      title: "Get Pre-Approved",
      description: "Complete loan application and get pre-approval letter for house hunting",
      timeframe: "1-2 days",
      tips: ["Strengthen offers in competitive market", "Know exact budget", "Shows sellers you're serious"]
    },
    {
      step: 3,
      title: "Find VA-Approved Home",
      description: "Shop for homes within VA loan limits or consider VA jumbo options",
      timeframe: "Varies",
      tips: ["Work with military-friendly agents", "Consider resale value", "Check HOA restrictions"]
    },
    {
      step: 4, 
      title: "VA Appraisal & Inspection",
      description: "VA requires special appraisal to ensure property meets minimum standards",
      timeframe: "7-14 days",
      tips: ["VA protects your interests", "May require repairs", "Can negotiate with seller"]
    },
    {
      step: 5,
      title: "Final Approval & Closing",
      description: "Complete underwriting and close on your new Orange County home",
      timeframe: "7-14 days",
      tips: ["Review all documents", "Bring ID and cashier's check", "Get keys to your new home!"]
    }
  ];

  const eligibilityRequirements = [
    {
      category: "Service Requirements",
      requirements: [
        "90+ days active duty during wartime",
        "181+ days during peacetime", 
        "6+ years National Guard or Reserves",
        "Current active duty (any length)",
        "Surviving spouse of service member"
      ]
    },
    {
      category: "Credit & Income",
      requirements: [
        "Credit score typically 580+",
        "Stable employment history",
        "Sufficient income for payments",
        "Debt-to-income ratio under 41%",
        "No specific down payment required"
      ]
    },
    {
      category: "Property Requirements", 
      requirements: [
        "Primary residence only",
        "Meet VA Minimum Property Requirements",
        "Pass VA appraisal process",
        "Must be move-in ready condition",
        "No investment or vacation homes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              VA Loans for Orange County Veterans
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Complete guide to using your VA home loan benefits in Orange County. Buy with $0 down, 
              no PMI, and competitive rates. Honor your service with homeownership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(949) 579-2057">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 579-2057
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="border border-slate-300 px-8 py-4 text-lg font-semibold">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get VA Loan Pre-Approval
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* VA Loan Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Exclusive Benefits for Orange County Veterans
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              VA loans offer unmatched benefits that make Orange County homeownership more accessible for our veterans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vaLoanBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">{benefit.benefit}</h3>
                </div>
                <p className="text-slate-600 mb-4">{benefit.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-green-800">Potential Savings: </span>
                  <span className="text-sm font-bold text-green-600">{benefit.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Military Bases & Communities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Military Bases & Orange County Communities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic locations for military families to consider when buying in Orange County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {militaryResources.map((base, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">{base.base}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-slate-600">Location:</span>
                    <div className="font-medium text-slate-800">{base.location}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Personnel:</span>
                    <div className="font-medium text-slate-800">{base.personnel}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">Avg Commute:</span>
                    <div className="font-medium text-green-600">{base.avgCommute}</div>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm text-slate-600 font-medium">Nearby Orange County Areas:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {base.nearbyAreas.map((area, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Areas for VA Loans */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Best Orange County Areas for VA Home Loans
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Popular communities where veterans are buying homes with VA loans in Orange County.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Area</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Median Price</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">VA Coverage</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Military Friendly</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Key Features</th>
                </tr>
              </thead>
              <tbody>
                {popularVAHomes.map((area, index) => (
                  <tr key={index} className="border-t border-slate-200">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{area.area}</div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-green-600">{area.medianPrice}</td>
                    <td className="px-6 py-4">
                      <div className="text-slate-600">{area.jumpoCoverage} of homes</div>
                      <div className="text-xs text-slate-500">under ${area.vaLoanLimit.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        area.militaryFriendly 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {area.militaryFriendly ? 'Yes' : 'Limited'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {area.highlights.map((highlight, idx) => (
                          <div key={idx} className="text-xs text-slate-600">• {highlight}</div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VA Loan Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your VA Loan Process in Orange County
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Step-by-step guide to using your VA benefits to buy a home in Orange County.
            </p>
          </div>

          <div className="space-y-8">
            {vaLoanProcess.map((step, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {step.timeframe}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Pro Tips:</h4>
                      <ul className="space-y-1">
                        {step.tips.map((tip, idx) => (
                          <li key={idx} className="text-sm text-slate-600">• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              VA Loan Eligibility Requirements
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understand the qualifications needed to use your VA home loan benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eligibilityRequirements.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.requirements.map((req, idx) => (
                    <li key={idx} className="text-slate-600 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VA Loan Limits & Jumbo Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              2025 VA Loan Limits for Orange County
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding loan limits and options for high-cost Orange County market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Standard VA Loan</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-blue-700 font-medium">2025 Loan Limit:</span>
                  <div className="text-3xl font-bold text-blue-600">$1,089,300</div>
                </div>
                <div>
                  <span className="text-blue-700 font-medium">Down Payment:</span>
                  <div className="text-xl font-semibold text-blue-600">$0 Required</div>
                </div>
                <ul className="space-y-2 text-blue-700">
                  <li>• No PMI required</li>
                  <li>• Competitive interest rates</li>
                  <li>• Covers ~70% of OC homes</li>
                  <li>• Primary residence only</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4">VA Jumbo Loans</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-green-700 font-medium">Above Loan Limit:</span>
                  <div className="text-3xl font-bold text-green-600">$1,089,301+</div>
                </div>
                <div>
                  <span className="text-green-700 font-medium">Down Payment:</span>
                  <div className="text-xl font-semibold text-green-600">25% on excess amount</div>
                </div>
                <ul className="space-y-2 text-green-700">
                  <li>• Still no PMI required</li>
                  <li>• Competitive jumbo rates</li>
                  <li>• Access to luxury markets</li>
                  <li>• Partial VA guarantee</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">Example: VA Jumbo Loan</h4>
            <p className="text-yellow-700 mb-2">
              Home Price: $1,400,000 | VA Loan Portion: $1,089,300 | Amount Above Limit: $310,700
            </p>
            <p className="text-yellow-700">
              <strong>Required Down Payment:</strong> $77,675 (25% of $310,700) + funding fee
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Honor Your Service with Orange County Homeownership
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to use your VA benefits? Get pre-approved for a VA loan and start your 
            Orange County home search today. Mo Abdel specializes in VA loans for veterans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(949) 579-2057">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                Get VA Loan Pre-Approval
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-500">
            <p className="text-blue-100">
              <strong>Mo Abdel</strong> • NMLS #1426884 • Proudly serving Orange County veterans and military families since 2015
            </p>
          </div>
        </div>
      </section>
    
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Orange County Va Loans | Mo Abdel","mainEntityOfPage":"https://www.mothebroker.com/guides/orange-county-va-loans","author":{"@type":"Person","name":"Mo Abdel"},"publisher":{"@type":"Organization","name":"Mo Abdel — Mortgage Broker","logo":{"@type":"ImageObject","url":"https://www.mothebroker.com/logo.png"}},"image":"https://www.mothebroker.com/logo.png"})
}} />
</div>
  );
}



