import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Home, TrendingUp, Users, Star, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Newport Beach Mortgage Brokers | Best Luxury Home Loans | Mo Abdel NMLS #1426884',
  description: 'Top-rated Newport Beach mortgage brokers specializing in luxury home financing. Licensed mortgage broker Mo Abdel offers jumbo loans, refinancing, and investment property loans. Call (949) 579-2057.',
  keywords: 'Newport Beach mortgage brokers, mortgage brokers in newport beach, Newport Beach mortgage broker, luxury home loans Newport Beach, jumbo loans Newport Beach'
};

export default function NewportBeachMortgageBrokerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🏖️ Luxury Coastal Community
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-blue-600">Newport Beach Mortgage Brokers</span> | Luxury Home Financing Expert
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Specializing in luxury home financing for Newport Beach's prestigious waterfront 
            properties, luxury condos, and investment opportunities. Expert knowledge of local 
            market conditions and jumbo loan programs. Compare Newport Beach with other coastal communities in our 
            <Link href="/neighborhood-guide/newport-beach-vs-laguna-beach-home-buying-guide" className="text-blue-600 hover:text-blue-700 font-medium">Newport Beach vs Laguna Beach comparison guide</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Pre-Approved Today
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Local Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Local Expert</h3>
            <p className="text-slate-600">Deep knowledge of Newport Beach neighborhoods and pricing</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Luxury Focus</h3>
            <p className="text-slate-600">Specializing in high-value properties and jumbo loans</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Investment Properties</h3>
            <p className="text-slate-600">Financing for Newport Beach rental and investment homes</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Concierge Service</h3>
            <p className="text-slate-600">White-glove service for discerning Newport Beach clients</p>
          </div>
        </div>

        {/* Newport Beach Market Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Newport Beach Mortgage Rates and Market Insights</h2>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Market Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Median Home Price:</span>
                    <span className="font-bold text-blue-600">$3,200,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Average Price per Sq Ft:</span>
                    <span className="font-bold">$1,400 - $2,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Waterfront Properties:</span>
                    <span className="font-bold">$5M - $50M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Luxury Condos:</span>
                    <span className="font-bold">$1.5M - $10M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Days on Market:</span>
                    <span className="font-bold text-green-600">35-65 days</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  *Market data as of 2025. Prices vary significantly by neighborhood and proximity to water. 
                  Compare with <Link href="/areas/irvine-mortgage-broker" className="text-blue-600 hover:text-blue-700 underline">Irvine market conditions</Link> or 
                  explore <Link href="/loan-programs/jumbo-loans" className="text-blue-600 hover:text-blue-700 underline">jumbo loan options</Link> for luxury properties.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Newport Beach Financing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Jumbo Loans Required:</span>
                    <span className="font-bold text-blue-600">95%+ of sales</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Typical Down Payment:</span>
                    <span className="font-bold">20-30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Cash Purchases:</span>
                    <span className="font-bold">~40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Investment Properties:</span>
                    <span className="font-bold">~25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Foreign Buyers:</span>
                    <span className="font-bold text-purple-600">~15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newport Beach Neighborhoods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Newport Beach Home Loans by Neighborhood</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏖️ Balboa Peninsula</h3>
                <p className="text-slate-600 mb-3">Beachfront living with luxury condos and vacation rentals</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $2.5M - $8M</div>
                  <div>• Beachfront condos and homes</div>
                  <div>• Strong rental income potential</div>
                  <div>• Tourist destination appeal</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏝️ Balboa Island</h3>
                <p className="text-slate-600 mb-3">Exclusive island community with waterfront estates</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $4M - $15M</div>
                  <div>• Waterfront estates and bayfront lots</div>
                  <div>• Private docks and boat slips</div>
                  <div>• Ultra-exclusive community</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">⛵ Newport Harbor</h3>
                <p className="text-slate-600 mb-3">Marina living with luxury high-rise condos</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $1.8M - $6M</div>
                  <div>• High-rise luxury condominiums</div>
                  <div>• Harbor and city views</div>
                  <div>• Resort-style amenities</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🌊 Corona del Mar</h3>
                <p className="text-slate-600 mb-3">Prestigious coastal neighborhood with ocean views</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $3.5M - $20M</div>
                  <div>• Ocean view estates</div>
                  <div>• Top-rated schools</div>
                  <div>• Upscale shopping and dining</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏡 Newport Coast</h3>
                <p className="text-slate-600 mb-3">Gated communities with custom luxury homes</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $4M - $25M</div>
                  <div>• Custom estate homes</div>
                  <div>• Golf course communities</div>
                  <div>• Gated and guard-gated options</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">🏢 Fashion Island Area</h3>
                <p className="text-slate-600 mb-3">Urban luxury with shopping and dining nearby</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <div>• Median Price: $2M - $8M</div>
                  <div>• Luxury condos and townhomes</div>
                  <div>• Walking distance to Fashion Island</div>
                  <div>• Urban convenience</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Choosing Newport Beach Mortgage Brokers */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
            How to Choose the Best Newport Beach Mortgage Brokers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Luxury Market Experience</h3>
              <p className="text-slate-600 text-sm">Look for brokers with proven track record in high-value Newport Beach transactions</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Local Network</h3>
              <p className="text-slate-600 text-sm">Choose brokers with strong relationships in Newport Beach real estate community</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Jumbo Loan Expertise</h3>
              <p className="text-slate-600 text-sm">Ensure your broker specializes in jumbo loans for Newport Beach's premium pricing</p>
            </div>
          </div>
        </div>

        {/* Why Choose Mo for Newport Beach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Mo Abdel Stands Out Among Newport Beach Mortgage Brokers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🏆 Luxury Market Expertise</h3>
                <p className="text-slate-600 mb-3">Extensive experience with high-value Newport Beach properties, jumbo loans, and complex financing scenarios for luxury real estate.</p>
                <p className="text-sm font-semibold text-blue-600">Specialized in $1M+ transactions</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🤝 Local Relationships</h3>
                <p className="text-slate-600 mb-3">Strong relationships with Newport Beach real estate agents, wealth managers, and other professionals serving high-net-worth clients.</p>
                <p className="text-sm font-semibold text-blue-600">Connected to your success team</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">💎 Concierge-Level Service</h3>
                <p className="text-slate-600 mb-3">White-glove service including coordinated closings, flexible meeting locations, and dedicated support throughout your transaction.</p>
                <p className="text-sm font-semibold text-blue-600">Service that matches your lifestyle</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🌍 International Client Experience</h3>
                <p className="text-slate-600 mb-3">Experience working with foreign nationals, international income documentation, and cross-border wealth management situations.</p>
                <p className="text-sm font-semibold text-blue-600">Global perspective, local expertise</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">⚡ Complex Situation Solutions</h3>
                <p className="text-slate-600 mb-3">Navigate complex scenarios including multiple properties, asset-based lending, and unique income structures common with high-net-worth clients.</p>
                <p className="text-sm font-semibold text-blue-600">Solutions for sophisticated borrowers</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">📱 Technology & Efficiency</h3>
                <p className="text-slate-600 mb-3">Modern technology platform for document sharing, status updates, and streamlined processing while maintaining personal service.</p>
                <p className="text-sm font-semibold text-blue-600">Efficiency without losing the personal touch</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Loan Programs for Newport Beach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Newport Beach Mortgage Specialist: Popular Loan Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">👑 Jumbo Loans</h3>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div>• No loan amount limits</div>
                  <div>• 10-20% down payment options</div>
                  <div>• Competitive rates for luxury properties</div>
                  <div>• Primary, second homes, and investment</div>
                </div>
                <p className="text-sm font-semibold text-purple-600">Perfect for Newport Beach luxury homes</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">⚡ Non-QM Programs</h3>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div>• Bank statement loans</div>
                  <div>• Asset-based qualification</div>
                  <div>• DSCR investor loans</div>
                  <div>• Foreign national programs</div>
                </div>
                <p className="text-sm font-semibold text-orange-600">Alternative documentation options</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">🔄 Refinancing</h3>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div>• Cash-out refinancing</div>
                  <div>• Rate and term improvements</div>
                  <div>• Portfolio optimization</div>
                  <div>• Investment property refinancing</div>
                </div>
                <p className="text-sm font-semibold text-green-600">Optimize your Newport Beach investments</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment Property Focus */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Newport Beach Investment Property Loans and DSCR Financing</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Strong Rental Market</h3>
                    <p className="text-slate-600">
                      Newport Beach vacation rentals and luxury long-term rentals command 
                      premium rates, making investment properties highly attractive.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">DSCR Loan Programs</h3>
                    <p className="text-slate-600">
                      Qualify based on property cash flow rather than personal income. 
                      Perfect for building your Newport Beach rental portfolio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Portfolio Building</h3>
                    <p className="text-slate-600">
                      Strategies for acquiring multiple Newport Beach properties and 
                      leveraging equity for continued portfolio growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Investment Property Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Avg. Rental Yield:</span>
                  <span className="font-bold">3-5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Vacation Rental Premium:</span>
                  <span className="font-bold text-green-600">2-3x monthly</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Typical Investment Down:</span>
                  <span className="font-bold">25-30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Appreciation (10-year avg):</span>
                  <span className="font-bold text-blue-600">6-8% annually</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Best Investment Areas:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                  <div>• Balboa Peninsula (vacation rentals)</div>
                  <div>• Newport Harbor (luxury condos)</div>
                  <div>• Corona del Mar (long-term rentals)</div>
                  <div>• Lido Isle (waterfront properties)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Newport Beach Mortgage Questions & Answers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the average home price in Newport Beach?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Newport Beach median home prices range from $2.1M to $5M+ depending on location. 
                  Waterfront properties and The Island command premium prices, while inland areas 
                  like Newport Heights offer relatively more affordable luxury options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I need a jumbo loan for Newport Beach homes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, virtually all Newport Beach homes require jumbo financing above $1,089,300. 
                  We specialize in super jumbo loans up to $5M+ with competitive rates and 
                  flexible terms for luxury properties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What down payment do I need for a Newport Beach home?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Jumbo loans typically require 10-20% down payment. For luxury properties over $3M, 
                  expect 20-25% down. Asset-based programs and portfolio loans offer alternatives 
                  for high-net-worth borrowers with unique financial profiles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I get financing for Newport Beach investment properties?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Absolutely! Newport Beach rental properties are excellent investments. DSCR loans 
                  qualify based on rental income, while portfolio lenders offer flexible terms for 
                  vacation rentals and luxury investment properties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newport Beach City Resources */}
        <div className="mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">
              Official Newport Beach City Resources
            </h2>
            <p className="text-center text-slate-600 mb-8">
              Access official city services and information for Newport Beach residents
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">City of Newport Beach</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Official city website with services, permits, and community information
                  </p>
                  <a 
                    href="https://www.newportbeachca.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit NewportBeachCA.gov →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Newport Beach Planning</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Planning department for zoning, permits, and development information
                  </p>
                  <a 
                    href="https://www.newportbeachca.gov/government/departments/community-development/planning" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit Planning Department →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Finance Your Newport Beach Dream Home?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get expert guidance and competitive rates for Newport Beach luxury properties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Start My Newport Beach Pre-Approval
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Licensed mortgage broker with NEXA Mortgage • NMLS #1426884 • Newport Beach luxury home specialist
          </p>
        </div>
      </div>
    </div>
  );
}

