import Link from 'next/link';
import { Home, Calculator, Phone, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Error */}
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-slate-600 mb-8">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Helpful Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Home Page
          </Link>
          
          <Link
            href="/calculator"
            className="flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Calculator className="w-5 h-5" />
            Rate Calculator
          </Link>
          
          <a
            href="tel:(949) 579-2057"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>

        {/* Popular Pages */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-left">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Popular Pages</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/loan-programs" className="text-blue-600 hover:underline">
                → Loan Programs (FHA, VA, Conventional)
              </Link>
            </li>
            <li>
              <Link href="/areas" className="text-blue-600 hover:underline">
                → Service Areas in Orange County
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-blue-600 hover:underline">
                → Home Buying & Refinancing Guides
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-blue-600 hover:underline">
                → Down Payment Assistance & Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-600 hover:underline">
                → Get Your Free Rate Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-slate-700">
            Need immediate assistance? Call Mo directly at{' '}
            <a href="tel:(949) 579-2057" className="font-bold text-blue-600 hover:underline">
              (949) 579-2057
            </a>
          </p>
          <p className="text-sm text-slate-600 mt-2">
            NMLS #1426884 | Serving all of Orange County
          </p>
        </div>
      </div>
    </div>
  );
}