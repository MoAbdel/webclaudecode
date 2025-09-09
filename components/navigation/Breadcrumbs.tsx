'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Fragment } from 'react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page or if no pathname
  if (!pathname || pathname === '/') return null;

  // Generate breadcrumb items from pathname
  const segments = pathname.split('/').filter(Boolean);
  
  const breadcrumbItems = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    
    // Convert URL segments to readable names
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(/\b(Fha|Va|Heloc|Heloan|Nmls|Dti|Dscr)\b/gi, (match) => match.toUpperCase())
      .replace(/\bOc\b/gi, 'Orange County')
      .replace(/\bMortgage Broker\b/gi, 'Mortgage Broker');
    
    return { name, href, isLast: index === segments.length - 1 };
  });

  // Schema markup for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": {
          "@id": "https://www.mothebroker.com",
          "name": "Home"
        }
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": {
          "@id": `https://www.mothebroker.com${item.href}`,
          "name": item.name
        }
      }))
    ]
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav className="bg-slate-50 border-b border-slate-200" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 py-3 text-sm">
            {/* Home */}
            <li>
              <Link 
                href="/" 
                className="text-slate-500 hover:text-blue-600 transition-colors flex items-center"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            
            {/* Breadcrumb items */}
            {breadcrumbItems.map((item, index) => (
              <Fragment key={item.href}>
                <li>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </li>
                <li>
                  {item.isLast ? (
                    <span className="text-slate-900 font-medium" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link 
                      href={item.href} 
                      className="text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              </Fragment>
            ))}
          </ol>
        </div>
      </nav>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
