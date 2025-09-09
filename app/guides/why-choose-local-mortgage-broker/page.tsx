import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  MapPin, 
  Phone, 
  Users, 
  Clock, 
  Home, 
  TrendingUp, 
  Shield, 
  Award,
  MessageCircle,
  Building,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Choose a Local Orange County Mortgage Broker | Mo Abdel Guide',
  description: 'Discover why working with a local Orange County mortgage broker like Mo Abdel provides better rates, personalized service, and market expertise for your home loan.',
  keywords: 'local mortgage broker Orange County, mortgage broker near me, Orange County home loans, local lending expert, Mo Abdel mortgage broker',
  openGraph: {
    title: 'Why Choose a Local Orange County Mortgage Broker | Mo Abdel Guide',
    description: 'Discover why working with a local Orange County mortgage broker like Mo Abdel provides better rates, personalized service, and market expertise for your home loan.',
    type: 'article',
    publishedTime: '2025-07-18T08:30:00Z',
  },
};

export default function WhyChooseLocalMortgageBrokerGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: 'Why Choose a Local Orange County Mortgage Broker | Mo Abdel',
              description: 'Discover why working with a local Orange County, CA mortgage broker provides better rates, personal service, and market expertise. Get started today.',
              author: { "@type": "Person", name: 'Mo Abdel' },
              publisher: { "@type": "Organization", name: 'Mo Abdel — Mortgage Broker', logo: { "@type": "ImageObject", url: 'https://www.mothebroker.com/images/mo-logo-white.webp' } },
              datePublished: '2025-07-18',
              dateModified: '2025-07-18',
              mainEntityOfPage: { "@type": "WebPage", "@id": 'https://www.mothebroker.com/guides/why-choose-local-mortgage-broker' }
            })
          }}
        />
        
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/guides"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <Badge className="bg-blue-100 text-blue-600 mb-4">Local Expertise</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose a Local Orange County Mortgage Broker: Home Loans and Refinancing Guide
          </h1>
          <div className="flex items-center justify-center text-sm text-slate-500 mb-4">
            <span>Published July 18, 2025 • By Mo Abdel, Orange County Mortgage Broker</span>
          </div>
          <p className="text-xl text-slate-600 mb-6">
            When you're buying a home in Orange County, working with a local mortgage broker 
            who understands the market can make all the difference in your loan experience. 
            Whether you're looking at <Link href="/areas/irvine-mortgage-broker" className="text-blue-600 hover:text-blue-700 font-medium">Irvine home loans</Link>, 
            <Link href="/areas/newport-beach-mortgage-broker" className="text-blue-600 hover:text-blue-700 font-medium">Newport Beach mortgage rates</Link>, 
            or <Link href="/areas/costa-mesa-mortgage-broker" className="text-blue-600 hover:text-blue-700 font-medium">Costa Mesa refinancing</Link>, 
            local expertise makes the difference.
          </p>
          <div className="flex items-center text-sm text-slate-500">
            <Clock className="w-4 h-4 mr-1" />
            5 min read • Updated July 18, 2025 • NMLS #1426884
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-slate-700 mb-0">
              <strong>As a licensed mortgage broker serving Orange County, 
              I've seen firsthand how local expertise can save homebuyers time, money, and stress. 
              Here's why choosing a local mortgage broker matters for your Orange County home purchase.</strong>
            </p>
          </div>

          {/* Main Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Local Market Knowledge */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Deep Local Market Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  I know Orange County's neighborhoods inside and out - from Irvine's planned communities 
                  to Newport Beach's luxury market. This local knowledge helps me recommend the right 
                  loan programs for specific areas and property types.
                </p>
              </CardContent>
            </Card>

            {/* Personal Service */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Personalized, Face-to-Face Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Unlike big banks or online lenders, I'm available for in-person meetings, 
                  can answer your calls directly, and provide the personal attention your 
                  home purchase deserves.
                </p>
              </CardContent>
            </Card>

            {/* Local Connections */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Established Local Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  I work with trusted Orange County real estate agents, appraisers, title companies, 
                  and inspectors. These relationships help ensure smooth transactions and faster closings.
                </p>
              </CardContent>
            </Card>

            {/* Market Timing */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Real-Time Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  I track Orange County market trends daily, helping you time your purchase 
                  and choose loan programs that align with local market conditions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why Me Specifically */}
          <div className="bg-slate-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Mo Abdel as Your Local Orange County Broker</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Competitive Access to 200+ Lenders</strong>
                  <p className="text-slate-600 text-sm mt-1">
                    I shop your loan with hundreds of lenders to find the best rates and terms
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Licensed in Multiple States</strong>
                  <p className="text-slate-600 text-sm mt-1">
                    NMLS #1426884 - Licensed in CA, WA, VA, and CO for relocating clients
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Orange County Specialist</strong>
                  <p className="text-slate-600 text-sm mt-1">
                    Focused on OC market since beginning my career - I know the challenges
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Fast Communication</strong>
                  <p className="text-slate-600 text-sm mt-1">
                    Direct phone line (949) 579-2057 - I answer personally
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Specialized Loan Programs</strong>
                  <p className="text-slate-600 text-sm mt-1">
                    Expert in Non-QM, Bank Statement, Asset Depletion, and Jumbo loans
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Flexible Meeting Options</strong>
                  <p className="text-slate-600 text-sm mt-1">
                    Available evenings and weekends to accommodate your schedule
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Local vs National Comparison */}
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Local Broker vs. National Lender: What's the Difference?</h2>
          
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">Aspect</th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-green-700">Local Broker (Mo Abdel)</th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-600">National Lender</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-4 py-3 font-medium">Market Knowledge</td>
                  <td className="border border-slate-300 px-4 py-3 text-green-700">Deep Orange County expertise</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">Generic, one-size-fits-all</td>
                </tr>
                <tr className="bg-slate-25">
                  <td className="border border-slate-300 px-4 py-3 font-medium">Communication</td>
                  <td className="border border-slate-300 px-4 py-3 text-green-700">Direct phone line, personal service</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">Call centers, different reps</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-3 font-medium">Lender Options</td>
                  <td className="border border-slate-300 px-4 py-3 text-green-700">200+ lenders</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">Limited to their products</td>
                </tr>
                <tr className="bg-slate-25">
                  <td className="border border-slate-300 px-4 py-3 font-medium">Availability</td>
                  <td className="border border-slate-300 px-4 py-3 text-green-700">Evenings & weekends</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">Business hours only</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-3 font-medium">Local Connections</td>
                  <td className="border border-slate-300 px-4 py-3 text-green-700">Established OC network</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">Limited local partnerships</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Orange County Specific Benefits */}
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Orange County Market Expertise That Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">High-Value Properties</h3>
              <p className="text-sm text-slate-600">
                Experience with Orange County's luxury market and jumbo loan requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Market Timing</h3>
              <p className="text-sm text-slate-600">
                Knowledge of OC seasonal trends and optimal timing for purchases
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Regulatory Knowledge</h3>
              <p className="text-sm text-slate-600">
                Up-to-date on California lending laws and Orange County requirements
              </p>
            </div>
          </div>


          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Local Expertise?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Let's discuss your Orange County home loan needs and find the perfect financing solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                  Get Pre-Approved Today
                </Button>
              </Link>
              <a href="tel:(949) 579-2057">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                  Call (949) 579-2057
                </Button>
              </a>
            </div>
            <p className="text-blue-200 mt-4">
              Licensed mortgage broker with NEXA Mortgage • NMLS #1426884
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
