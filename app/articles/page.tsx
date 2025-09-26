import { Metadata } from 'next';
import Link from 'next/link';
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
  alternates: {
    canonical: 'https://www.mothebroker.com/articles',
  },
};

export default function ArticlesPage() {
  const articles = [
    {
      title: '5 Common Mortgage Mistakes and How to Avoid Them',
      slug: 'common-mortgage-mistakes-avoid',
      description: 'Learn about 5 common mortgage mistakes and how to avoid them to ensure a smooth and successful home-buying experience.',
      category: 'Blog',
      readTime: '4 min read',
      publishDate: 'Jan 5, 2025',
      featured: true,
      image: '/images/blog-1.jpg',
    },
    {
      title: 'How to Refinance Your Mortgage and Save Money',
      slug: 'refinance-mortgage-save-money',
      description: 'Discover how refinancing can help you lower your monthly payments and save thousands over the life of your loan.',
      category: 'Blog',
      readTime: '6 min read',
      publishDate: 'Dec 28, 2024',
      featured: false,
      image: '/images/blog-2.jpg',
    },
    {
      title: 'The Importance of Getting Pre-Approved for a Mortgage',
      slug: 'importance-mortgage-preapproval',
      description: 'Understanding why mortgage pre-approval is crucial in today\'s competitive housing market.',
      category: 'Blog',
      readTime: '5 min read',
      publishDate: 'Dec 13, 2024',
      featured: false,
      image: '/images/blog-3.jpg',
    },
    {
      title: 'How Your Credit Score Impacts Your Mortgage Rate',
      slug: 'credit-score-mortgage-rate-impact',
      description: 'Learn how your credit score directly affects your mortgage interest rate and monthly payments.',
      category: 'Blog',
      readTime: '7 min read',
      publishDate: 'Dec 9, 2024',
      featured: false,
      image: '/images/blog-4.jpg',
    },
  ];

  const categories = ['All', 'Mortgage Brokers', 'Refinancing', 'Jumbo Loans', 'First-Time Buyers', 'VA Loans'];

  return (
    <>
      <AdvancedSchemaMarkup type="FinancialService" />

      <main className="min-h-screen bg-white">
        {/* Clean Header */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Blog
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Mortgage News, Tips, and Insights
              </h1>
              <div className="flex justify-end">
                <Link
                  href="/articles"
                  className="text-slate-600 border border-slate-300 px-4 py-2 rounded-full text-sm hover:bg-slate-50 transition"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="text-slate-600 text-sm">
                  {articles[0].publishDate}
                </div>

                <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                  {articles[0].title}
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {articles[0].description}
                </p>

                <Link
                  href={`/articles/${articles[0].slug}`}
                  className="inline-flex items-center text-slate-900 font-semibold hover:text-blue-600 transition group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* All Articles Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {articles.slice(1).map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group"
                >
                  <article className="space-y-4">
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-slate-500"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="text-slate-500 text-sm">
                        {article.publishDate}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {article.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed line-clamp-3">
                        {article.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}