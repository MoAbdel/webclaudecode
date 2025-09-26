'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Calendar, ArrowRight, TrendingUp, DollarSign, Home } from 'lucide-react';

export default function NewsInsights() {
  const articles = [
    {
      category: "Expert Guide",
      icon: TrendingUp,
      title: "Best Mortgage Broker in Orange County",
      excerpt: "Discover what makes Mo Abdel the top choice for Orange County homebuyers and refinancers, with expert insights and proven results.",
      date: "September 25, 2025",
      readTime: "4 min read",
      image: "/images/oc-market-update.jpg",
      link: "/articles/best-mortgage-broker-orange-county"
    },
    {
      category: "First-Time Buyers",
      icon: Home,
      title: "First-Time Homebuyer Mortgage Guide",
      excerpt: "Complete guide for first-time homebuyers in Orange County, including loan programs, down payment assistance, and expert tips.",
      date: "September 20, 2025",
      readTime: "6 min read",
      image: "/images/rate-impact-analysis.jpg",
      link: "/articles/first-time-homebuyer-mortgage-orange-county"
    },
    {
      category: "Refinancing",
      icon: DollarSign,
      title: "Orange County Mortgage Refinance Specialist",
      excerpt: "Learn about refinancing options in Orange County with expert guidance on rates, timing, and maximizing your savings.",
      date: "September 18, 2025",
      readTime: "5 min read",
      image: "/images/competitive-offer-tips.jpg",
      link: "/articles/orange-county-mortgage-refinance-specialist"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Mortgage News & Market Insights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed with the latest mortgage rates, market trends, and expert tips
            to help you make confident homebuying and refinancing decisions.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = article.link}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white text-sm font-medium">{article.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-sm text-slate-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="pt-2">
                    <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Stay Updated with Market Insights
            </h3>
            <p className="text-slate-600">
              Get weekly market updates, rate alerts, and expert mortgage tips delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-slate-500">
              No spam, unsubscribe at any time. Your privacy is protected.
            </p>
          </div>
        </div>

        {/* View All Articles */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 hover:bg-slate-50"
            onClick={() => window.location.href = '/articles'}
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}