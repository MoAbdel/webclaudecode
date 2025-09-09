import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Home, DollarSign, GraduationCap, MapPin, Clock, Star, TrendingUp, Users, Car, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orange County Neighborhoods Comparison Guide 2025 | Best Places to Buy Homes OC',
  description: 'Complete guide to Orange County neighborhoods: Irvine, Newport Beach, Laguna Beach, Mission Viejo, Costa Mesa. Home prices, schools, commutes, and mortgage options compared.',
  openGraph: {
    title: 'Orange County Neighborhoods Comparison Guide 2025 | Best Places to Buy Homes OC',
    description: 'Complete guide to Orange County neighborhoods: Irvine, Newport Beach, Laguna Beach, Mission Viejo, Costa Mesa. Home prices, schools, commutes, and mortgage options compared.',
    type: 'article',
    publishedTime: '2025-06-05T16:20:00Z',
  },
};

const neighborhoods = [
  {
    name: 'Irvine',
    medianPrice: '$1,400,000',
    pricePerSqFt: '$650-$850',
    schoolRating: '9-10/10',
    commuteLA: '45-60 min',
    crimeRating: 'Very High',
    familyFriendly: 5,
    nightlife: 2,
    beachAccess: 3,
    color: 'green',
    highlights: ['Top schools', 'Master planned', 'Safest city', 'Tech jobs nearby'],
    bestFor: 'Families with school-age children'
  },
  {
    name: 'Newport Beach',
    medianPrice: '$2,800,000',
    pricePerSqFt: '$1,200-$2,500',
    schoolRating: '8-9/10',
    commuteLA: '50-70 min',
    crimeRating: 'High',
    familyFriendly: 4,
    nightlife: 4,
    beachAccess: 5,
    color: 'blue',
    highlights: ['Luxury lifestyle', 'Oceanfront', 'High-end dining', 'Boating'],
    bestFor: 'Luxury seekers and beach lovers'
  },
  {
    name: 'Laguna Beach',
    medianPrice: '$2,200,000',
    pricePerSqFt: '$1,100-$2,000',
    schoolRating: '7-8/10',
    commuteLA: '60-75 min',
    crimeRating: 'High',
    familyFriendly: 3,
    nightlife: 3,
    beachAccess: 5,
    color: 'purple',
    highlights: ['Artist community', 'Scenic beauty', 'Unique character', 'Art galleries'],
    bestFor: 'Artists, retirees, and nature lovers'
  },
  {
    name: 'Mission Viejo',
    medianPrice: '$950,000',
    pricePerSqFt: '$500-$650',
    schoolRating: '8-9/10',
    commuteLA: '50-65 min',
    crimeRating: 'Very High',
    familyFriendly: 5,
    nightlife: 2,
    beachAccess: 3,
    color: 'orange',
    highlights: ['Affordable luxury', 'Family-oriented', 'Lake community', 'Safe'],
    bestFor: 'Growing families seeking value'
  },
  {
    name: 'Costa Mesa',
    medianPrice: '$850,000',
    pricePerSqFt: '$650-$800',
    schoolRating: '6-8/10',
    commuteLA: '45-60 min',
    crimeRating: 'Very High',
    familyFriendly: 3,
    nightlife: 4,
    beachAccess: 4,
    color: 'blue',
    highlights: ['Urban vibe', 'Arts district', 'Dining scene', 'Central location'],
    bestFor: 'Young professionals and urban lifestyle seekers'
  },
  {
    name: 'Huntington Beach',
    medianPrice: '$1,100,000',
    pricePerSqFt: '$600-$900',
    schoolRating: '7-8/10',
    commuteLA: '45-65 min',
    crimeRating: 'Very High',
    familyFriendly: 4,
    nightlife: 4,
    beachAccess: 5,
    color: 'green',
    highlights: ['Surf City USA', 'Beach lifestyle', 'Family beaches', 'Pier'],
    bestFor: 'Surfers and beach lifestyle enthusiasts'
  }
];

export default function OCNeighborhoodsGuide() {
  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-600 mb-4">Complete Neighborhood Analysis</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Orange County Mortgage Broker Guide: Best Neighborhoods for Home Loans 2025
          </h1>
          <div className="flex items-center justify-center text-sm text-slate-500 mb-4">
            <span>Published June 5, 2025 • By Mo Abdel, Orange County Mortgage Broker</span>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Compare home prices, schools, commutes, and lifestyle factors across Orange County's top neighborhoods. Get personalized mortgage advice for each area from your local OC broker. Explore our city-specific services including <Link href="/areas/irvine-mortgage-broker" className="text-blue-600 hover:text-blue-700 font-medium">Irvine mortgage broker</Link> and <Link href="/areas/newport-beach-mortgage-broker" className="text-blue-600 hover:text-blue-700 font-medium">Newport Beach home loans</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Get Neighborhood-Specific Rates
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Discuss Your Needs: (949) 579-2057
              </Button>
            </a>
          </div>
        </div>

        {/* Neighborhood Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {neighborhoods.map((neighborhood, index) => (
            <div key={neighborhood.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-${neighborhood.color}-100 rounded-full flex items-center justify-center mr-4`}>
                  <MapPin className={`w-6 h-6 text-${neighborhood.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{neighborhood.name}</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-600">Median Price:</span>
                  <span className="font-semibold text-slate-900">{neighborhood.medianPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Per Sq Ft:</span>
                  <span className="font-semibold text-slate-900">{neighborhood.pricePerSqFt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Schools:</span>
                  <span className="font-semibold text-green-600">{neighborhood.schoolRating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">LA Commute:</span>
                  <span className="font-semibold text-slate-900">{neighborhood.commuteLA}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Lifestyle Ratings</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Family Friendly:</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < neighborhood.familyFriendly ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Nightlife:</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < neighborhood.nightlife ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Beach Access:</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < neighborhood.beachAccess ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Highlights</h4>
                <div className="flex flex-wrap gap-1">
                  {neighborhood.highlights.map((highlight, i) => (
                    <Badge key={i} className={`bg-${neighborhood.color}-100 text-${neighborhood.color}-600 text-xs`}>
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className={`bg-${neighborhood.color}-50 p-3 rounded-lg mb-4`}>
                <p className="text-sm font-medium text-slate-700">
                  <strong>Best For:</strong> {neighborhood.bestFor}
                </p>
              </div>

              <Link href={`/areas/${neighborhood.name.toLowerCase().replace(' ', '-')}-mortgage-broker`}>
                <Button className={`w-full bg-${neighborhood.color}-600 hover:bg-${neighborhood.color}-700 text-white`}>
                  Learn More About {neighborhood.name}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 overflow-x-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Side-by-Side Comparison</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 font-semibold">Neighborhood</th>
                <th className="text-center py-3 px-2 font-semibold">Median Price</th>
                <th className="text-center py-3 px-2 font-semibold">$/Sq Ft</th>
                <th className="text-center py-3 px-2 font-semibold">Schools</th>
                <th className="text-center py-3 px-2 font-semibold">Commute</th>
                <th className="text-center py-3 px-2 font-semibold">Safety</th>
              </tr>
            </thead>
            <tbody>
              {neighborhoods.map((neighborhood, index) => (
                <tr key={neighborhood.name} className="border-b border-slate-100">
                  <td className="py-3 px-2 font-semibold text-slate-900">{neighborhood.name}</td>
                  <td className="py-3 px-2 text-center">{neighborhood.medianPrice}</td>
                  <td className="py-3 px-2 text-center">{neighborhood.pricePerSqFt}</td>
                  <td className="py-3 px-2 text-center text-green-600 font-semibold">{neighborhood.schoolRating}</td>
                  <td className="py-3 px-2 text-center">{neighborhood.commuteLA}</td>
                  <td className="py-3 px-2 text-center">
                    <Badge className={neighborhood.crimeRating === 'Very High' ? 'bg-green-100 text-green-600' : 
                                   neighborhood.crimeRating === 'High' ? 'bg-yellow-100 text-yellow-600' : 'bg-orange-100 text-orange-600'}>
                      {neighborhood.crimeRating}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mortgage Considerations by Price Range */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Mortgage Options by Price Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Entry Level ($800K-$1.2M)</h3>
              <p className="text-blue-100 mb-3">Costa Mesa, Parts of Huntington Beach</p>
              <ul className="space-y-2 text-blue-100">
                <li>• Conventional loans available</li>
                <li>• FHA possible in some areas</li>
                <li>• 5-10% down payment options</li>
                <li>• First-time buyer programs</li>
              </ul>
            </div>

            <div className="bg-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Mid-Range ($1.2M-$2M)</h3>
              <p className="text-blue-100 mb-3">Irvine, Mission Viejo, Huntington Beach</p>
              <ul className="space-y-2 text-blue-100">
                <li>• Jumbo loans required</li>
                <li>• 10-20% down typical</li>
                <li>• Portfolio loan options</li>
                <li>• Investment property financing</li>
              </ul>
            </div>

            <div className="bg-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Luxury ($2M+)</h3>
              <p className="text-blue-100 mb-3">Newport Beach, Laguna Beach</p>
              <ul className="space-y-2 text-blue-100">
                <li>• Super jumbo specialists</li>
                <li>• 20-30% down required</li>
                <li>• Bank statement programs</li>
                <li>• International buyer options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Local Market Insights */}
        <div className="bg-slate-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">2025 Market Insights by Area</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Trending Up</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Irvine:</strong> New Great Park developments driving demand
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Costa Mesa:</strong> Arts district gentrification accelerating
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Market Stability</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Newport Beach:</strong> Luxury market showing resilience
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Mission Viejo:</strong> Consistent family demand maintaining values
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Orange County Neighborhood</h2>
          <p className="text-xl mb-6 text-blue-100">
            Get personalized recommendations and mortgage pre-approval based on your budget, lifestyle, and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Start Neighborhood Analysis
              </Button>
            </Link>
            <a href="tel:(949) 579-2057">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Call Mo: (949) 579-2057
              </Button>
            </a>
          </div>
          <p className="text-blue-100">
            Local Orange County Expert | NMLS #1426884 | 200+ Lender Network
          </p>
        </div>
      </div>
    </div>
  );
}



