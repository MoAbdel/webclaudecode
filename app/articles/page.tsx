import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdvancedSchemaMarkup from '@/components/seo/AdvancedSchemaMarkup';

export const metadata: Metadata = {
  title: 'Orange County Mortgage Articles & Expert Insights | Mo Abdel',
  description: 'Expert mortgage broker insights on Orange County real estate financing. In-depth articles covering FHA loans, VA loans, jumbo mortgages, refinancing, and first-time homebuyer strategies.',
  openGraph: {
    title: 'Orange County Mortgage Articles | Expert Real Estate Financing Insights',
    description: 'Professional insights on Orange County mortgage markets, loan programs, and homebuying strategies from experienced broker Mo Abdel.',
    images: ['/images/mo-headshot.webp'],
    url: 'https://www.mothebroker.com/articles',
    type: 'website',
  },
};

export default function ArticlesPage() {
  const articles = [
    {
      title: 'Best Mortgage Broker in Orange County',
      slug: 'best-mortgage-broker-orange-county',
      description: 'Discover what makes a top mortgage broker in Orange County\'s competitive market. Learn how expert guidance can save you thousands on your home purchase.',
      category: 'Mortgage Brokers',
      readTime: '12 min read',
      publishDate: 'January 9, 2025',
      featured: true,
      color: 'blue',
    },
    {
      title: 'Orange County Mortgage Refinance Specialist',
      slug: 'orange-county-mortgage-refinance-specialist',
      description: 'Learn when refinancing makes sense in Orange County\'s market. Explore rate-and-term refinancing, cash-out options, and strategies to maximize savings.',
      category: 'Refinancing',
      readTime: '10 min read',
      publishDate: 'January 9, 2025',
      featured: true,
      color: 'green',
    },
    {
      title: 'Jumbo Loan Broker Orange County',
      slug: 'jumbo-loan-broker-orange-county',
      description: 'Navigate luxury property financing with expert jumbo loan guidance. Understand qualification requirements, rates, and strategies for high-value purchases.',
      category: 'Jumbo Loans',
      readTime: '11 min read',
      publishDate: 'January 9, 2025',
      featured: true,
      color: 'purple',
    },
    {
      title: 'First-Time Homebuyer Mortgage Orange County',
      slug: 'first-time-homebuyer-mortgage-orange-county',
      description: 'Your complete guide to buying your first home in Orange County. Explore loan programs, down payment assistance, and winning strategies for competitive markets.',
      category: 'First-Time Buyers',
      readTime: '13 min read',
      publishDate: 'January 9, 2025',
      featured: false,
      color: 'emerald',
    },
    {
      title: 'VA Loan Mortgage Broker Orange County',
      slug: 'va-loan-mortgage-broker-orange-county',
      description: 'Honor your military service with VA loan benefits. Learn about zero down payment options, eligibility requirements, and competitive financing for veterans.',
      category: 'VA Loans',
      readTime: '12 min read',
      publishDate: 'January 9, 2025',
      featured: false,
      color: 'red',
    },
  ];

  const categories = ['All', 'Mortgage Brokers', 'Refinancing', 'Jumbo Loans', 'First-Time Buyers', 'VA Loans'];

  return (
    <>
      <Header />
      <AdvancedSchemaMarkup type="FinancialService" />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Orange County Mortgage Insights & Expert Guidance
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional insights on Orange County real estate financing, loan programs, and homebuying strategies from experienced mortgage broker Mo Abdel (NMLS #1426884).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Get Expert Consultation
                </Link>
                <Link href="/calculator" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Calculate Payments
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {articles.filter(article => article.featured).map((article, index) => (
                  <Link 
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="group"
                  >
                    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                      <div className={`h-2 bg-${article.color}-600`}></div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 text-xs font-semibold bg-${article.color}-100 text-${article.color}-800 rounded-full`}>
                            {article.category}
                          </span>
                          <span className="text-sm text-gray-500">{article.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{article.publishDate}</span>
                          <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 text-sm font-semibold bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                  <Link 
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="group"
                  >
                    <article className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 text-xs font-semibold bg-${article.color}-100 text-${article.color}-800 rounded-full`}>
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{article.publishDate}</span>
                        <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                          Read Article →
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated on Orange County Market Trends</h2>
              <p className="text-lg text-gray-600 mb-8">
                Get the latest insights on Orange County real estate financing, market trends, and homebuying opportunities delivered to your inbox.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Get Expert Market Updates</h3>
                <p className="text-gray-700 mb-6">
                  Join hundreds of Orange County homebuyers and homeowners who rely on our market insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Schedule Consultation
                  </Link>
                  <a href="tel:949-579-2057" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    Call (949) 579-2057
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore More Resources</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Loan Programs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><Link href="/fha-loans-orange-county" className="hover:text-blue-600 transition">FHA Loans</Link></li>
                    <li><Link href="/va-loans-orange-county" className="hover:text-blue-600 transition">VA Loans</Link></li>
                    <li><Link href="/conventional-loans-orange-county" className="hover:text-blue-600 transition">Conventional Loans</Link></li>
                    <li><Link href="/non-qm-loans-orange-county" className="hover:text-blue-600 transition">Non-QM Loans</Link></li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Tools & Calculators</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><Link href="/calculator" className="hover:text-blue-600 transition">Mortgage Calculator</Link></li>
                    <li><Link href="/resources/down-payment-assistance" className="hover:text-blue-600 transition">Down Payment Assistance</Link></li>
                    <li><Link href="/resources/document-checklist" className="hover:text-blue-600 transition">Document Checklist</Link></li>
                    <li><Link href="/resources/mortgage-glossary" className="hover:text-blue-600 transition">Mortgage Glossary</Link></li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Market Areas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><Link href="/areas/irvine" className="hover:text-blue-600 transition">Irvine</Link></li>
                    <li><Link href="/areas/newport-beach" className="hover:text-blue-600 transition">Newport Beach</Link></li>
                    <li><Link href="/areas/mission-viejo" className="hover:text-blue-600 transition">Mission Viejo</Link></li>
                    <li><Link href="/areas" className="hover:text-blue-600 transition">View All Areas</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start gap-6">
                  <img 
                    src="/images/mo-headshot.webp" 
                    alt="Mo Abdel - Orange County Mortgage Broker" 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Mo Abdel, NMLS #1426884</h3>
                    <p className="text-gray-600 mb-4">
                      <strong>Orange County Mortgage Broker & Real Estate Finance Expert</strong>
                    </p>
                    <p className="text-gray-700 mb-4">
                      Mo Abdel specializes in helping clients navigate Orange County's competitive housing market. From first-time homebuyers to luxury property investors, Mo provides expert guidance on FHA loans, VA loans, jumbo mortgages, and complex financing scenarios.
                    </p>
                    <div className="flex gap-4">
                      <Link href="/about" className="text-blue-600 hover:underline font-semibold">
                        Learn More About Mo
                      </Link>
                      <Link href="/contact" className="text-blue-600 hover:underline font-semibold">
                        Schedule Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}