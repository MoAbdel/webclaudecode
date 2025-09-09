/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mothebroker.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/admin/*',
    '/api/*',
    '/dashboard/*',
    '/_not-found',
    '/draft*',
    '/temp*',
    '/staging*',
    '/thank-you*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/']
      }
    ],
    additionalSitemaps: [
      'https://www.mothebroker.com/sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    // Custom priority and change frequency based on page type
    let priority = 0.7;
    let changefreq = 'weekly';

    // Home page - highest priority
    if (path === '/' || path === '') {
      priority = 1.0;
      changefreq = 'daily';
    }
    
    // Main loan program pages - high priority
    else if (path.startsWith('/loan-programs/') || path.startsWith('/programs/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    
    // City/area pages - high priority for local SEO
    else if (path.startsWith('/areas/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    
    // Guides and resources - high priority content
    else if (path.startsWith('/guides/') || path.startsWith('/resources/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    
    // Profile pages - important brand content
    else if (path === '/Mo' || path === '/cookie-policy') {
      priority = 0.7;
      changefreq = 'monthly';
    }
    
    // Tools/calculators - medium-high priority
    else if (path.startsWith('/calculator') || path.startsWith('/tools/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    
    // Contact and about pages - important
    else if (path === '/contact' || path === '/about') {
      priority = 0.8;
      changefreq = 'monthly';
    }
    
    // Neighborhood guides and luxury markets
    else if (path.startsWith('/neighborhood-guide/') || path.startsWith('/luxury-markets/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }
    
    // Zip code pages - lower priority
    else if (path.startsWith('/zip-codes/')) {
      priority = 0.6;
      changefreq = 'monthly';
    }
    
    // City-specific loan program pages (e.g., fha-loans-irvine)
    else if (path.includes('-irvine') || path.includes('orange-county')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    // Set last modification date for key pages
    let lastmod = undefined;
    const currentDate = new Date().toISOString();
    
    // High-priority pages get current date
    if (priority >= 0.8) {
      lastmod = currentDate;
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod,
      alternateRefs: []
    };
  },
  
  // Additional static paths that might not be automatically discovered
  additionalPaths: async (config) => {
    const additionalPaths = [
      // Home page - ensure it's included
      '/',
      
      // Area pages
      '/areas/irvine',
      '/areas/mission-viejo',
      '/areas/newport-beach',
      '/areas/newport-beach-neighborhoods',
      '/areas/irvine-neighborhoods',
      
      // Program pages
      '/programs/heloc',
      '/programs/heloan',
      '/programs/fix-flip-loans',
      '/programs/non-qm-bank-statement',
      '/programs/usda-rural-loans',
      '/programs/dscr-investment-loans',
      '/programs/non-qm-asset-depletion',
      '/programs/foreign-national-loans',
      
      // Resources
      '/resources/mortgage-glossary',
      
      // Utility pages
      '/cookie-policy',
      '/Mo',
      
      // Main loan program redirects
      '/fha-loans-orange-county',
      '/va-loans-orange-county',
      '/conventional-loans-orange-county',
      '/heloc-orange-county',
      '/heloan-orange-county',
      '/non-qm-loans-orange-county',
      '/rate-term-refinance-orange-county',
      
      // Privacy and legal pages
      '/privacy-policy',
      '/terms-of-service'
    ];

    return additionalPaths.map((path) => ({
      loc: path,
      changefreq: path === '/' ? 'daily' : 'monthly',
      priority: path === '/' ? 1.0 : 0.6,
      lastmod: new Date().toISOString(),
    }));
  }
};
