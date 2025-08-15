import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { BookOpen, Clock, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mortgage Guides | Home Buying Tips & Loan Advice - Orange County',
  description: 'Expert mortgage guides and home buying tips from Mo Abdel. Learn about loan programs, market insights, and get professional advice for Orange County homebuyers.',
};

const guides = [
  {
    title: 'Why Choose a Local Orange County Mortgage Broker',
    description: 'Discover the advantages of working with a local mortgage broker who understands the Orange County market and can provide personalized service.',
    url: '/guides/why-choose-local-mortgage-broker',
    category: 'Local Expertise',
    readTime: '5 min read',
    featured: true
  }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Mortgage <span className="text-blue-600">Guides</span>
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

        {/* Coming Soon */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">More Guides Coming Soon</h2>
            <p className="text-slate-600 mb-6">
              I'm working on more comprehensive guides covering FHA loans, VA loans, 
              first-time homebuyer tips, and Orange County market insights.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Personalized Advice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}