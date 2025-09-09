import React from 'react';
import Link from 'next/link';
import { GraduationCap, Home, TrendingUp, MapPin, Star, Phone, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function OrangeCountySchoolDistrictsGuide() {
  const topSchoolDistricts = [
    {
      name: "Irvine Unified School District",
      rating: "10/10",
      medianHomePrice: "$1,400,000",
      topSchools: ["University High", "Northwood High", "Irvine High"],
      neighborhoods: ["University Park", "Woodbridge", "Turtle Rock"],
      highlights: ["Top-rated STEM programs", "95%+ graduation rate", "National Blue Ribbon schools"]
    },
    {
      name: "Newport-Mesa Unified",
      rating: "9/10", 
      medianHomePrice: "$1,800,000",
      topSchools: ["Newport Harbor High", "Corona del Mar High"],
      neighborhoods: ["Newport Coast", "Corona del Mar", "Eastbluff"],
      highlights: ["Ocean-view campuses", "Strong arts programs", "High college acceptance rates"]
    },
    {
      name: "Capistrano Unified",
      rating: "9/10",
      medianHomePrice: "$1,200,000", 
      topSchools: ["Dana Hills High", "San Clemente High", "Tesoro High"],
      neighborhoods: ["Dana Point", "San Clemente", "Mission Viejo"],
      highlights: ["Large district with variety", "Strong athletics", "Advanced placement programs"]
    },
    {
      name: "Laguna Beach Unified",
      rating: "9/10",
      medianHomePrice: "$2,200,000",
      topSchools: ["Laguna Beach High School"],
      neighborhoods: ["Village Laguna", "Top of the World", "Three Arch Bay"],
      highlights: ["Small class sizes", "Arts focus", "Coastal lifestyle"]
    },
    {
      name: "Los Alamitos Unified",
      rating: "9/10",
      medianHomePrice: "$1,100,000",
      topSchools: ["Los Alamitos High School"],
      neighborhoods: ["Los Alamitos", "Rossmoor"],
      highlights: ["High test scores", "Strong community support", "Excellent facilities"]
    }
  ];

  const schoolSearchTips = [
    {
      title: "Start with GreatSchools.org",
      description: "Research school ratings, test scores, and parent reviews before house hunting"
    },
    {
      title: "Visit Schools in Person", 
      description: "Tour campuses, meet principals, and observe the school environment"
    },
    {
      title: "Consider Future Growth",
      description: "Look at enrollment trends and planned developments that may affect schools"
    },
    {
      title: "Check Boundary Maps",
      description: "Verify the exact school boundaries - they can change and affect home values"
    }
  ];

  const mortgageConsiderations = [
    {
      title: "Higher Home Prices",
      description: "Top school districts command premium prices - budget accordingly",
      impact: "May need jumbo loans for luxury school districts"
    },
    {
      title: "Property Tax Impact",
      description: "School district taxes vary significantly across Orange County",
      impact: "Affects monthly payment calculations"
    },
    {
      title: "Resale Value Protection",
      description: "Homes in top school districts hold value better during market downturns",
      impact: "Better long-term investment potential"
    },
    {
      title: "Competition for Homes",
      description: "Popular school districts see multiple offers and bidding wars",
      impact: "May need higher down payments or faster closings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Orange County School District Home Buying Guide
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
              Find the perfect home in Orange County's top-rated school districts. Learn how school ratings 
              impact home values and mortgage considerations for families.
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
                  Get Pre-Approved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top School Districts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orange County's Top-Rated School Districts
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These districts consistently rank among California's best and command premium home prices.
            </p>
          </div>

          <div className="space-y-8">
            {topSchoolDistricts.map((district, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{district.name}</h3>
                      <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-green-600 mr-1" />
                        <span className="font-semibold text-green-600">{district.rating}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Top Schools</h4>
                        <ul className="space-y-1">
                          {district.topSchools.map((school, idx) => (
                            <li key={idx} className="text-slate-600">• {school}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Key Neighborhoods</h4>
                        <ul className="space-y-1">
                          {district.neighborhoods.map((neighborhood, idx) => (
                            <li key={idx} className="text-slate-600">• {neighborhood}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">District Highlights</h4>
                      <ul className="space-y-1">
                        {district.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-slate-600">• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-slate-50 rounded-lg p-6">
                      <div className="text-center">
                        <h4 className="font-semibold text-slate-800 mb-2">Median Home Price</h4>
                        <p className="text-3xl font-bold text-blue-600 mb-4">{district.medianHomePrice}</p>
                        
                        <div className="space-y-2">
                          <Link href="/calculator/affordability">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                              Calculate Affordability
                            </Button>
                          </Link>
                          <Link href="/contact">
                            <Button variant="ghost" className="w-full border border-slate-300">
                              View Available Homes
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Search Tips */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How to Research Schools Before House Hunting
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Smart strategies for evaluating schools and their impact on your home purchase decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schoolSearchTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{tip.title}</h3>
                <p className="text-slate-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Considerations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mortgage Considerations for School District Homes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How school district choices affect your mortgage options and long-term financial planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mortgageConsiderations.map((consideration, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{consideration.title}</h3>
                <p className="text-slate-600 mb-4">{consideration.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-600 pl-4">
                  <p className="text-sm font-medium text-blue-800">Impact: {consideration.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Programs for School District Homes */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Best Loan Programs for Orange County School Districts
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right financing for your school district home purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Conventional Loans</h3>
              <div className="space-y-3">
                <p className="text-slate-600">Best for established districts like Irvine and Newport-Mesa</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Up to $1,089,300 (2025 limit)</li>
                  <li>• 3% down payment options</li>
                  <li>• Competitive rates</li>
                  <li>• Fast approval process</li>
                </ul>
                <Link href="/loan-programs/conventional-loans">
                  <Button className="w-full mt-4">Learn More</Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Jumbo Loans</h3>
              <div className="space-y-3">
                <p className="text-slate-600">For luxury districts like Laguna Beach and Newport Coast</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Above $1,089,300</li>
                  <li>• 10-20% down payment</li>
                  <li>• Competitive jumbo rates</li>
                  <li>• Flexible terms</li>
                </ul>
                <Link href="/loan-programs/jumbo-loans">
                  <Button className="w-full mt-4">Learn More</Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">FHA Loans</h3>
              <div className="space-y-3">
                <p className="text-slate-600">For affordable districts with good schools</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• 3.5% down payment</li>
                  <li>• Flexible credit requirements</li>
                  <li>• Up to $1,089,300 in OC</li>
                  <li>• Great for first-time buyers</li>
                </ul>
                <Link href="/loan-programs/fha-loans">
                  <Button className="w-full mt-4">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Education Resources */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Official Education Resources
            </h2>
            <p className="text-xl text-slate-600">
              Access official information from education authorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">California Department of Education</h3>
              <p className="text-slate-600 mb-6">
                Official state education authority with school performance data, accountability reports, and education policies
              </p>
              <a 
                href="https://www.cde.ca.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit CDE.ca.gov
                <MapPin className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Orange County Department of Education</h3>
              <p className="text-slate-600 mb-6">
                Local education authority serving Orange County with district information, programs, and educational services
              </p>
              <a 
                href="https://www.ocde.us/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit OCDE.us
                <MapPin className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Buy in Your Dream School District?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get pre-approved and start your search in Orange County's top-rated school districts. 
            Mo Abdel specializes in school district home financing.
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
                Get Pre-Approved Today
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-500">
            <p className="text-blue-100">
              <strong>Mo Abdel</strong> • NMLS #1426884 • Licensed Mortgage Broker serving Orange County families since 2015
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

