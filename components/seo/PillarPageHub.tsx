import Link from 'next/link';
import { ArrowRight, BookOpen, MapPin, Calculator, FileText } from 'lucide-react';

export default function PillarPageHub() {
  const pillarPages = [
    {
      title: 'Loan Programs',
      href: '/loan-programs',
      icon: BookOpen,
      description: 'Complete guide to all mortgage loan types',
      subPages: 8,
      keyTopics: ['FHA Loans', 'VA Loans', 'Conventional', 'Jumbo', 'HELOC', 'Refinancing']
    },
    {
      title: 'Service Areas',
      href: '/areas',
      icon: MapPin,
      description: 'Orange County cities and neighborhoods',
      subPages: 35,
      keyTopics: ['Irvine', 'Newport Beach', 'Mission Viejo', 'Anaheim', 'Costa Mesa', '30+ More']
    },
    {
      title: 'Guides & Education',
      href: '/guides',
      icon: FileText,
      description: 'Complete home buying and refinancing guides',
      subPages: 8,
      keyTopics: ['Home Buyer Guide', 'Refinancing Guide', 'Market Forecast', 'School Districts']
    },
    {
      title: 'Resources & Tools',
      href: '/resources',
      icon: Calculator,
      description: 'Calculators, assistance programs, and data',
      subPages: 6,
      keyTopics: ['Down Payment Help', 'Credit Repair', 'Market Data', 'Glossary']
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Complete Mortgage Resource Hub
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Navigate our comprehensive library of mortgage education, local market insights, and professional tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillarPages.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.href}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-blue-100 p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 mb-3">
                      {pillar.description}
                    </p>
                    <div className="text-sm text-blue-600 font-medium">
                      {pillar.subPages} detailed pages
                    </div>
                  </div>
                </div>

                {/* Key Topics */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-3">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pillar.keyTopics.map((topic) => (
                      <span
                        key={topic}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <Link
                  href={pillar.href}
                  className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors group-hover:shadow-md"
                >
                  Explore {pillar.title}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Cross-Linking Call to Action */}
        <div className="mt-12 text-center bg-slate-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Start Your Mortgage Journey?
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Use our tools and guides to prepare, then get your personalized rate quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="inline-flex items-center bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Payments
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Rate Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



