import React from 'react';

export const dynamic = "force-static";
export async function generateMetadata() {
  const BASE = "https://www.mothebroker.com";
  const title = "Mortgage Broker in Orange County, CA | Mo Abdel";
  const description = "Local mortgage expertise in Orange County, CA. Get started today.";
  return {
    title,
    description,
    alternates: { canonical: BASE + "/neighborhood-guide" },
    openGraph: { title, description, url: BASE + "/neighborhood-guide", siteName: "Mo Abdel — Mortgage Broker", images: ["https://www.mothebroker.com/logo.png"] },
    twitter: { card: "summary_large_image", title, description },
  };
}
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, TrendingUp, Phone, BookOpen, BarChart3 } from 'lucide-react';



const comparisonGuides = [
  {
    title: 'Irvine vs Newport Beach',
    description: 'Complete comparison of Orange County\'s top family-friendly city against luxury coastal living',
    features: ['Home Prices & Market Data', 'School Ratings Comparison', 'Lifestyle & Amenities', 'Mortgage Considerations'],
    url: '/neighborhood-guide/irvine-vs-newport-beach-home-buying-guide',
    color: 'blue',
    highlight: 'Most Popular'
  },
  {
    title: 'Complete OC Neighborhoods Analysis',
    description: 'Side-by-side comparison of 6+ Orange County neighborhoods with ratings and market insights',
    features: ['Multiple Neighborhood Ratings', 'Market Trends Analysis', 'Commute Comparisons', 'Investment Potential'],
    url: '/neighborhood-guide/orange-county-neighborhoods-comparison-guide',
    color: 'purple',
    highlight: 'Comprehensive'
  }
];

export default function NeighborhoodGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Orange County <span className="text-blue-600">Neighborhood Guides</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Expert buying guides and market analysis to help you choose the perfect Orange County neighborhood. 
            Compare home prices, schools, lifestyle factors, and mortgage options with data-driven insights.
          </p>
          <div className="flex items-center justify-center text-slate-700 mb-8">
            <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-lg">Data-driven neighborhood analysis by local mortgage expert</span>
          </div>
        </div>

        {/* Featured Comparison Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Featured Neighborhood Comparison Guides
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {comparisonGuides.map((guide, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                {guide.highlight && (
                  <div className={`absolute top-4 right-4 bg-${guide.color}-600 text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {guide.highlight}
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-3">
                    {guide.title}
                  </CardTitle>
                  <p className="text-slate-600 text-lg">
                    {guide.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      {guide.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <BarChart3 className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={guide.url}>
                    <Button className={`w-full bg-${guide.color}-600 hover:bg-${guide.color}-700 text-white py-3 text-lg`}>
                      Read Full Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Makes Our Guides Different */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Why Our Neighborhood Guides Are Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Real Market Data</h3>
              <p className="text-slate-600">
                Current home prices, market trends, and neighborhood statistics from reliable sources.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Mortgage Insights</h3>
              <p className="text-slate-600">
                Financing considerations, loan programs, and down payment requirements for each area.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Local Expertise</h3>
              <p className="text-slate-600">
                Written by a local mortgage broker who understands Orange County market nuances.
              </p>
            </div>
          </div>
        </div>

        {/* All Neighborhood Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            All Neighborhood Comparison Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/neighborhood-guide/irvine-vs-newport-beach-home-buying-guide" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border hover:border-blue-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Irvine vs Newport Beach</h3>
                  <p className="text-slate-600 text-sm mb-3">Family-friendly planned community vs luxury coastal living comparison</p>
                  <div className="text-xs text-blue-600 font-medium">Most Popular Guide →</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/neighborhood-guide/mission-viejo-vs-irvine-home-buying-guide" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border hover:border-blue-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Mission Viejo vs Irvine</h3>
                  <p className="text-slate-600 text-sm mb-3">Compare two top-rated Orange County family communities</p>
                  <div className="text-xs text-blue-600 font-medium">Read Comparison →</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/neighborhood-guide/newport-beach-vs-laguna-beach-home-buying-guide" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border hover:border-blue-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Newport Beach vs Laguna Beach</h3>
                  <p className="text-slate-600 text-sm mb-3">Luxury coastal living and investment potential analysis</p>
                  <div className="text-xs text-blue-600 font-medium">Read Comparison →</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/neighborhood-guide/huntington-beach-vs-costa-mesa-home-buying-guide" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border hover:border-blue-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Huntington Beach vs Costa Mesa</h3>
                  <p className="text-slate-600 text-sm mb-3">Beach access, schools, and community amenities compared</p>
                  <div className="text-xs text-blue-600 font-medium">Read Comparison →</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/neighborhood-guide/orange-county-neighborhoods-comparison-guide" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border hover:border-blue-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Complete OC Neighborhoods</h3>
                  <p className="text-slate-600 text-sm mb-3">Comprehensive analysis of 6+ Orange County areas</p>
                  <div className="text-xs text-purple-600 font-medium">Most Comprehensive →</div>
                </CardContent>
              </Card>
            </Link>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 flex flex-col justify-center items-center text-center border-2 border-dashed border-blue-300">
              <h3 className="text-lg font-bold text-slate-900 mb-2">More Guides Coming Soon</h3>
              <p className="text-slate-600 text-sm mb-3">Additional neighborhood comparisons in development</p>
              <Link href="/contact" className="text-xs text-blue-600 font-medium hover:underline">
                Request Specific Comparison →
              </Link>
            </div>
          </div>
        </div>

        {/* Individual Area Information */}
        <div className="bg-slate-100 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
            Need Information on Specific Areas?
          </h2>
          <p className="text-xl text-slate-600 text-center mb-8 max-w-3xl mx-auto">
            Looking for detailed mortgage and market information for a specific Orange County city? 
            Check out our individual service area pages with local lending programs and market insights.
          </p>
          <div className="text-center">
            <Link href="/areas">
              <Button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 text-lg">
                Browse All Service Areas
              </Button>
            </Link>
          </div>
        </div>

        {/* Why Choose Mo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Get Expert Mortgage Advice for Any OC Neighborhood
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Market Analysis Expertise</h3>
                  <p className="text-slate-600">Deep understanding of Orange County market trends and neighborhood dynamics</p>
                </div>
              </div>
              <div className="flex items-start">
                <Home className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Neighborhood-Specific Programs</h3>
                  <p className="text-slate-600">Access to loan programs and lenders that specialize in different OC areas</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Personal Consultation</h3>
                  <p className="text-slate-600">One-on-one guidance to match your budget with the right neighborhood</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Free Neighborhood Consultation</h3>
            <p className="text-slate-700 mb-6">
              Not sure which Orange County neighborhood fits your budget and lifestyle? 
              Schedule a free consultation to discuss your goals and get personalized recommendations.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm">Budget analysis and pre-approval</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm">Neighborhood recommendations based on your needs</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-sm">Market timing and strategy advice</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Orange County Neighborhood?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized neighborhood recommendations and mortgage pre-approval
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Start Your Neighborhood Analysis
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884
          </p>
        </div>
      </div>
    </div>
  );
}



