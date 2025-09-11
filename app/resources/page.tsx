import React from 'react';


export const dynamic = "force-static";
import type { Metadata } from 'next';

import Link from 'next/link';

import { generateMetadata } from '@/lib/metadata';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

import { Button } from '@/components/ui/Button';

import { Badge } from '@/components/ui/Badge';

import { 

  DollarSign, 

  Calculator, 

  FileText, 

  Users, 

  Building, 

  CreditCard,

  Home,

  TrendingUp,

  BookOpen,

  Download,

  CheckSquare,

  Map,

  Award,

  Phone,

  ArrowRight

} from 'lucide-react';



export const metadata: Metadata = generateMetadata({

  title: 'Mortgage Resources & Tools | Orange County Home Buyer Guides',

  description: 'Complete mortgage resources for Orange County home buyers. Down payment assistance, calculators, market data, guides, and tools to help you buy or refinance.',

  keywords: 'mortgage resources, home buyer tools, down payment assistance, mortgage calculators, Orange County housing data, first time buyer guide, mortgage broker resources',

  path: '/resources',

  type: 'website'

});



export default function ResourcesPage() {

  const resources = [

    {

      title: 'Down Payment Assistance Programs',

      description: 'Complete guide to grants, loans, and assistance programs in Orange County. Find programs that can save you thousands.',

      icon: DollarSign,

      link: '/resources/down-payment-assistance',

      badge: 'Most Popular',

      color: 'text-green-600',

      bgColor: 'bg-green-50',

      features: ['25+ Programs Listed', 'Income Calculators', 'Eligibility Guide', '2025 Updated']

    },

    {

      title: 'Mortgage Calculators Suite',

      description: 'Professional mortgage calculators for payments, affordability, refinancing, and more. Get accurate estimates instantly.',

      icon: Calculator,

      link: '/calculator',

      badge: 'Interactive',

      color: 'text-blue-600',

      bgColor: 'bg-blue-50',

      features: ['Payment Calculator', 'Affordability Tool', 'Refinance Analysis', 'Real-Time Rates']

    },

    {

      title: 'Orange County Market Data',

      description: 'Current housing market data, trends, and analysis for Orange County neighborhoods. Make informed decisions.',

      icon: TrendingUp,

      link: '/resources/market-data',

      badge: 'Live Data',

      color: 'text-purple-600',

      bgColor: 'bg-purple-50',

      features: ['Price Trends', 'Inventory Levels', 'Days on Market', 'Neighborhood Stats']

    },

    {

      title: 'First-Time Buyer Guide',

      description: 'Step-by-step guide for first-time home buyers in Orange County. Everything you need to know.',

      icon: Home,

      link: '/guides/orange-county-home-buyer-guide',

      badge: 'Comprehensive',

      color: 'text-orange-600',

      bgColor: 'bg-orange-50',

      features: ['Step-by-Step Process', 'Required Documents', 'Timeline Guide', 'Cost Breakdown']

    },

    {

      title: 'Credit Repair Resources',

      description: 'Tools and guides to improve your credit score for better mortgage rates. Expert tips and strategies.',

      icon: CreditCard,

      link: '/resources/credit-repair',

      badge: 'Essential',

      color: 'text-red-600',

      bgColor: 'bg-red-50',

      features: ['Credit Reports', 'Score Improvement', 'Dispute Letters', 'Timeline Planning']

    },

    {

      title: 'Document Checklist & Templates',

      description: 'Complete checklist of required documents for your mortgage application plus downloadable templates.',

      icon: CheckSquare,

      link: '/resources/document-checklist',

      badge: 'Downloads',

      color: 'text-indigo-600',

      bgColor: 'bg-indigo-50',

      features: ['Application Checklist', 'Income Templates', 'Asset Documentation', 'PDF Downloads']

    },

    {

      title: 'Mortgage Glossary',

      description: 'Comprehensive glossary of mortgage terms and definitions. Understand the language of home buying.',

      icon: BookOpen,

      link: '/resources/glossary',

      badge: 'Reference',

      color: 'text-teal-600',

      bgColor: 'bg-teal-50',

      features: ['500+ Terms', 'Simple Explanations', 'Search Function', 'Examples']

    },

    {

      title: 'Local Service Providers',

      description: 'Trusted Orange County real estate agents, home inspectors, contractors, and other professionals.',

      icon: Users,

      link: '/resources/service-providers',

      badge: 'Directory',

      color: 'text-amber-600',

      bgColor: 'bg-amber-50',

      features: ['Vetted Professionals', 'Contact Info', 'Reviews', 'Service Areas']

    }

  ];



  const quickTools = [

    {

      title: 'Rate Comparison Tool',

      description: 'Compare rates from multiple lenders',

      icon: TrendingUp,

      action: 'Compare Rates'

    },

    {

      title: 'Pre-Approval Checklist',

      description: 'Get ready for your application',

      icon: FileText,

      action: 'View Checklist'

    },

    {

      title: 'Neighborhood Guide',

      description: 'Explore Orange County areas',

      icon: Map,

      action: 'Explore Areas'

    },

    {

      title: 'Closing Cost Estimator',

      description: 'Calculate your closing costs',

      icon: Calculator,

      action: 'Estimate Costs'

    }

  ];



  const featuredGuides = [

    {

      title: 'How to Get the Best Mortgage Rate',

      readTime: '5 min read',

      category: 'Rate Shopping'

    },

    {

      title: 'FHA vs Conventional Loans',

      readTime: '7 min read',

      category: 'Loan Types'

    },

    {

      title: 'Avoiding Common Mortgage Mistakes',

      readTime: '6 min read',

      category: 'Tips'

    },

    {

      title: 'Understanding Closing Costs',

      readTime: '8 min read',

      category: 'Process'

    }

  ];



  return (

    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <Badge className="bg-white/20 text-white mb-4">Free Resources & Tools</Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">

              Orange County Mortgage Resources Center

            </h1>

            <p className="text-xl mb-8 max-w-3xl mx-auto">

              Everything you need to navigate the home buying process. From down payment assistance 

              to market data, calculators to guides - all free and updated for 2025.

            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link href="/resources/down-payment-assistance">

                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">

                  <DollarSign className="w-5 h-5 mr-2" />

                  Down Payment Help

                </Button>

              </Link>

              <Link href="/calculator">

                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">

                  <Calculator className="w-5 h-5 mr-2" />

                  Mortgage Calculators

                </Button>

              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* Main Resources Grid */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">

              Complete Resource Library

            </h2>

            <p className="text-xl text-slate-600">

              Professional tools and guides to help you make informed decisions

            </p>

          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {resources.map((resource, index) => (

              <Card 

                key={index} 

                className="hover:shadow-xl transition-all duration-300"

              >

                <CardHeader>

                  <div className="flex justify-between items-start mb-4">

                    <div className={`p-3 rounded-lg ${resource.bgColor}`}>

                      <resource.icon className={`w-8 h-8 ${resource.color}`} />

                    </div>

                    <Badge variant="secondary">{resource.badge}</Badge>

                  </div>

                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>

                </CardHeader>

                <CardContent>

                  <p className="text-slate-600 mb-4">{resource.description}</p>

                  <div className="space-y-2 mb-4">

                    {resource.features.map((feature, idx) => (

                      <div key={idx} className="flex items-center text-sm text-slate-600">

                        <CheckSquare className="w-4 h-4 mr-2 text-green-600" />

                        {feature}

                      </div>

                    ))}

                  </div>

                  <Link href={resource.link}>

                    <Button className="w-full">

                      Access Resource

                      <ArrowRight className="w-4 h-4 ml-2" />

                    </Button>

                  </Link>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>



      {/* Government Resources Section */}

      <section className="py-16 bg-slate-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">

              Official Government Resources

            </h2>

            <p className="text-xl text-slate-600">

              Trusted government agencies providing authoritative guidance and information

            </p>

          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card className="hover:shadow-lg transition-shadow">

              <CardContent className="p-6">

                <div className="flex items-center mb-4">

                  <Building className="w-8 h-8 text-blue-600 mr-3" />

                  <div>

                    <h3 className="font-semibold text-lg">Consumer Financial Protection Bureau</h3>

                    <Badge variant="secondary">CFPB</Badge>

                  </div>

                </div>

                <p className="text-slate-600 mb-4">

                  Official federal agency protecting consumers in financial transactions including mortgages.

                </p>

                <a 

                  href="https://www.consumerfinance.gov/owning-a-home/" 

                  target="_blank" 

                  rel="noopener noreferrer"

                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"

                >

                  Visit CFPB Home Buying Guide

                  <ArrowRight className="w-4 h-4 ml-1" />

                </a>

              </CardContent>

            </Card>



            <Card className="hover:shadow-lg transition-shadow">

              <CardContent className="p-6">

                <div className="flex items-center mb-4">

                  <Building className="w-8 h-8 text-green-600 mr-3" />

                  <div>

                    <h3 className="font-semibold text-lg">Federal Housing Finance Agency</h3>

                    <Badge variant="secondary">FHFA</Badge>

                  </div>

                </div>

                <p className="text-slate-600 mb-4">

                  Federal agency overseeing Fannie Mae and Freddie Mac, ensuring mortgage market stability.

                </p>

                <a 

                  href="https://www.fhfa.gov/homeownerspage" 

                  target="_blank" 

                  rel="noopener noreferrer"

                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"

                >

                  Visit FHFA Homeowner Resources

                  <ArrowRight className="w-4 h-4 ml-1" />

                </a>

              </CardContent>

            </Card>



            <Card className="hover:shadow-lg transition-shadow">

              <CardContent className="p-6">

                <div className="flex items-center mb-4">

                  <Award className="w-8 h-8 text-red-600 mr-3" />

                  <div>

                    <h3 className="font-semibold text-lg">VA Housing Assistance</h3>

                    <Badge variant="secondary">Veterans Affairs</Badge>

                  </div>

                </div>

                <p className="text-slate-600 mb-4">

                  Official VA home loan benefits and housing assistance programs for veterans and service members.

                </p>

                <a 

                  href="https://www.va.gov/housing-assistance/" 

                  target="_blank" 

                  rel="noopener noreferrer"

                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"

                >

                  Visit VA Housing Resources

                  <ArrowRight className="w-4 h-4 ml-1" />

                </a>

              </CardContent>

            </Card>



            <Card className="hover:shadow-lg transition-shadow">

              <CardContent className="p-6">

                <div className="flex items-center mb-4">

                  <Home className="w-8 h-8 text-purple-600 mr-3" />

                  <div>

                    <h3 className="font-semibold text-lg">HUD Housing Counseling</h3>

                    <Badge variant="secondary">HUD</Badge>

                  </div>

                </div>

                <p className="text-slate-600 mb-4">

                  Find HUD-approved housing counselors for free guidance on buying, renting, or avoiding foreclosure.

                </p>

                <a 

                  href="https://www.hud.gov/findacounselor" 

                  target="_blank" 

                  rel="noopener noreferrer"

                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"

                >

                  Find a HUD Counselor

                  <ArrowRight className="w-4 h-4 ml-1" />

                </a>

              </CardContent>

            </Card>



            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">

              <CardContent className="p-6">

                <div className="flex items-center mb-4">

                  <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />

                  <div>

                    <h3 className="font-semibold text-lg">Mortgage Bankers Association</h3>

                    <Badge variant="secondary">MBA</Badge>

                  </div>

                </div>

                <p className="text-slate-600 mb-4">

                  Leading national association providing consumer education and mortgage industry insights.

                </p>

                <a 

                  href="https://www.mba.org/consumers" 

                  target="_blank" 

                  rel="noopener noreferrer"

                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"

                >

                  Visit MBA Consumer Resources

                  <ArrowRight className="w-4 h-4 ml-1" />

                </a>

              </CardContent>

            </Card>

          </div>

        </div>

      </section>



      {/* Quick Tools */}

      <section className="py-16 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">

              Quick Tools & Calculators

            </h2>

          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {quickTools.map((tool, index) => (

              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">

                <CardContent className="p-6">

                  <tool.icon className="w-8 h-8 text-blue-600 mb-3" />

                  <h3 className="font-semibold mb-2">{tool.title}</h3>

                  <p className="text-sm text-slate-600 mb-3">{tool.description}</p>

                  <Button size="sm" variant="ghost" className="text-blue-600">

                    {tool.action} â†’

                  </Button>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>



      {/* Featured Guides */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">

              Popular Guides & Articles

            </h2>

          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {featuredGuides.map((guide, index) => (

              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">

                <CardContent className="p-6">

                  <Badge variant="secondary" className="mb-3">{guide.category}</Badge>

                  <h3 className="font-semibold mb-2">{guide.title}</h3>

                  <p className="text-sm text-slate-600">{guide.readTime}</p>

                </CardContent>

              </Card>

            ))}

          </div>



          <div className="text-center mt-8">

            <Link href="/guides">

              <Button variant="ghost" className="text-blue-600">

                View All Guides

                <ArrowRight className="w-4 h-4 ml-2" />

              </Button>

            </Link>

          </div>

        </div>

      </section>



      {/* Statistics */}

      <section className="py-16 bg-blue-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>

              <div className="text-3xl font-bold text-blue-600">25+</div>

              <div className="text-sm text-slate-600">Assistance Programs</div>

            </div>

            <div>

              <div className="text-3xl font-bold text-blue-600">500+</div>

              <div className="text-sm text-slate-600">Glossary Terms</div>

            </div>

            <div>

              <div className="text-3xl font-bold text-blue-600">18</div>

              <div className="text-sm text-slate-600">OC Cities Covered</div>

            </div>

            <div>

              <div className="text-3xl font-bold text-blue-600">200+</div>

              <div className="text-sm text-slate-600">Lenders Available</div>

            </div>

          </div>

        </div>

      </section>



      {/* Newsletter Signup */}

      <section className="py-16">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">

            <CardContent className="p-8 text-center">

              <Award className="w-12 h-12 mx-auto mb-4" />

              <h2 className="text-2xl font-bold mb-4">

                Get Weekly Market Updates & Rate Alerts

              </h2>

              <p className="mb-6">

                Stay informed about Orange County housing market trends, rate changes, and new assistance programs.

              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">

                <input

                  type="email"

                  placeholder="Enter your email"

                  className="flex-1 px-4 py-2 rounded-lg text-slate-900"

                />

                <Button className="bg-white text-blue-600 hover:bg-gray-100">

                  Subscribe Free

                </Button>

              </div>

              <p className="text-sm mt-4 opacity-90">

                No spam, unsubscribe anytime. Your info is secure.

              </p>

            </CardContent>

          </Card>

        </div>

      </section>



      {/* CTA Section */}

      <section className="py-16 bg-slate-50">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl font-bold text-slate-900 mb-6">

            Need Personalized Guidance?

          </h2>

          <p className="text-xl text-slate-600 mb-8">

            While these resources are helpful, nothing beats personalized advice for your specific situation. 

            I'm here to help you navigate every step of your mortgage journey.

          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link href="/contact">

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">

                Get Free Consultation

                <ArrowRight className="w-4 h-4 ml-2" />

              </Button>

            </Link>

            <a href="tel:(949) 579-2057">

              <Button size="lg" variant="ghost" className="text-blue-600 border-blue-600 hover:bg-blue-50">

                <Phone className="w-5 h-5 mr-2" />

                Call (949) 579-2057

              </Button>

            </a>

          </div>

          <div className="mt-8">

            <p className="text-sm text-slate-600">

              Mo Abdel, NMLS #1426884 | Your Orange County Mortgage Expert

            </p>

          </div>

        </div>

      </section>

    
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Resources | Mo Abdel","mainEntityOfPage":"https://www.mothebroker.com/resources","author":{"@type":"Person","name":"Mo Abdel"},"publisher":{"@type":"Organization","name":"Mo Abdel â€” Mortgage Broker","logo":{"@type":"ImageObject","url":"https://www.mothebroker.com/logo.png"}},"image":"https://www.mothebroker.com/logo.png"})
}} />
</div>

  );

}



