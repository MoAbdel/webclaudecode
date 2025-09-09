import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { BookOpen, Clock, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mortgage Blog | Home Buying Tips & Loan Advice - Orange County',
  description: 'Expert mortgage blog and home buying tips from Mo Abdel. Learn about loan programs, market insights, and get professional advice for Orange County homebuyers.',
};

const guides = [
  {
    title: 'Why Choose a Local Orange County Mortgage Broker',
    description: 'Discover the advantages of working with a local mortgage broker who understands the Orange County market and can provide personalized service.',
    url: '/guides/why-choose-local-mortgage-broker',
    category: 'Local Expertise',
    readTime: '5 min read',
    featured: true
  },
  {
    title: 'Irvine vs Newport Beach: Home Buying Guide',
    description: 'Compare two of Orange County\'s most desirable cities. Learn about home prices, schools, lifestyle, and which area fits your homebuying goals.',
    url: '/neighborhood-guide/irvine-vs-newport-beach-home-buying-guide',
    category: 'Neighborhood Guide',
    readTime: '8 min read',
    featured: false
  },
  {
    title: 'Mission Viejo vs Irvine: Complete Comparison',
    description: 'Detailed comparison of Mission Viejo and Irvine for homebuyers. Explore housing costs, amenities, schools, and community features.',
    url: '/neighborhood-guide/mission-viejo-vs-irvine-home-buying-guide',
    category: 'Neighborhood Guide',
    readTime: '7 min read',
    featured: false
  },
  {
    title: 'Newport Beach vs Laguna Beach Guide',
    description: 'Coastal living comparison between Newport Beach and Laguna Beach. Learn about luxury real estate, lifestyle, and investment potential.',
    url: '/neighborhood-guide/newport-beach-vs-laguna-beach-home-buying-guide',
    category: 'Neighborhood Guide',
    readTime: '6 min read',
    featured: false
  },
  {
    title: 'Huntington Beach vs Costa Mesa Comparison',
    description: 'Compare these two popular Orange County cities for homebuyers. Analyze home prices, beach access, schools, and community amenities.',
    url: '/neighborhood-guide/huntington-beach-vs-costa-mesa-home-buying-guide',
    category: 'Neighborhood Guide',
    readTime: '7 min read',
    featured: false
  },
  {
    title: 'Orange County Neighborhoods: Complete Guide',
    description: 'Comprehensive guide to Orange County\'s best neighborhoods for homebuyers. Compare cities, prices, schools, and find your perfect match.',
    url: '/neighborhood-guide/orange-county-neighborhoods-comparison-guide',
    category: 'Neighborhood Guide',
    readTime: '12 min read',
    featured: false
  }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Mortgage <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert insights and practical advice for Orange County homebuyers, 
            from loan programs to market trends.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                  {guide.featured && (
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                  {guide.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {guide.readTime}
                  </div>
                  <Link 
                    href={guide.url}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    Read Guide
                    <BookOpen className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Need More Specific Guidance?</h2>
            <p className="text-slate-600 mb-6">
              Have questions about Orange County neighborhoods, loan programs, or market conditions? 
              Get personalized advice tailored to your specific situation and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Personalized Advice
              </Link>
              <Link 
                href="/neighborhood-guide"
                className="inline-flex items-center bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Explore All Neighborhood Guides
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

