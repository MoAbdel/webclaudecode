const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns'],
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Compression and caching
  compress: true,
  poweredByHeader: false,

  // URL Redirects for SEO
  async redirects() {
    return [
      // Programs redirects with SEO-appropriate destinations
      { source: '/programs/heloc', destination: '/heloc-orange-county', permanent: true },
      { source: '/programs/heloan', destination: '/heloan-orange-county', permanent: true },
      { source: '/programs/fix-flip-loans', destination: '/loan-programs/fix-flip-loans', permanent: true },
      { source: '/programs/usda-rural-loans', destination: '/loan-programs/usda-rural-loans', permanent: true },
      { source: '/programs/dscr-investment-loans', destination: '/loan-programs', permanent: true },
      { source: '/programs/non-qm-bank-statement', destination: '/loan-programs/bank-statement-loans', permanent: true },
      { source: '/programs/non-qm-asset-depletion', destination: '/non-qm-loans-orange-county', permanent: true },
      { source: '/programs/foreign-national-loans', destination: '/non-qm-loans-orange-county', permanent: true },
      { source: '/Mo', destination: '/about', permanent: true },
      // Remove trailing slashes for clean URLs
      { source: '/loan-programs/heloc/', destination: '/loan-programs/heloc', permanent: true },
      { source: '/loan-programs/heloan/', destination: '/loan-programs/heloan', permanent: true },
      { source: '/loan-programs/fha-loans/', destination: '/loan-programs/fha-loans', permanent: true },
      { source: '/loan-programs/va-loans/', destination: '/loan-programs/va-loans', permanent: true },
      { source: '/loan-programs/conventional-loans/', destination: '/loan-programs/conventional-loans', permanent: true },
      { source: '/loan-programs/jumbo-loans/', destination: '/loan-programs/jumbo-loans', permanent: true },
      { source: '/loan-programs/cash-out-refinance/', destination: '/loan-programs/cash-out-refinance', permanent: true },
      { source: '/loan-programs/bank-statement-loans/', destination: '/loan-programs/bank-statement-loans', permanent: true },
      { source: '/loan-programs/dscr-investment-loans/', destination: '/loan-programs/dscr-investment-loans', permanent: true },
      { source: '/loan-programs/asset-depletion-loans/', destination: '/loan-programs/asset-depletion-loans', permanent: true },
      { source: '/loan-programs/fix-flip-loans/', destination: '/loan-programs/fix-flip-loans', permanent: true },
      { source: '/loan-programs/usda-rural-loans/', destination: '/loan-programs/usda-rural-loans', permanent: true },
      { source: '/loan-programs/non-qm-loans/', destination: '/loan-programs/non-qm-loans', permanent: true },
      { source: '/areas/irvine-mortgage-broker/', destination: '/areas/irvine-mortgage-broker', permanent: true },
      { source: '/areas/newport-beach-mortgage-broker/', destination: '/areas/newport-beach-mortgage-broker', permanent: true },
      { source: '/areas/huntington-beach-mortgage-broker/', destination: '/areas/huntington-beach-mortgage-broker', permanent: true },
      { source: '/areas/costa-mesa-mortgage-broker/', destination: '/areas/costa-mesa-mortgage-broker', permanent: true },
      { source: '/areas/anaheim-mortgage-broker/', destination: '/areas/anaheim-mortgage-broker', permanent: true },
      { source: '/guides/', destination: '/guides', permanent: true },
      { source: '/resources/', destination: '/resources', permanent: true },
      { source: '/calculator/', destination: '/calculator', permanent: true },
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true }
    ];
  },

  // HTTP Headers for caching
  async headers() {
    return [
      // Cache static assets for 1 year
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images for 1 year
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache favicon and manifest files
      {
        source: '/(favicon.ico|manifest.json|robots.txt|sitemap.xml)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400', // 1 day
          },
        ],
      },
      // Cache API responses briefly
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, stale-while-revalidate=600', // 5 min cache, 10 min stale
          },
        ],
      },
      // Prevent indexing of favicon and manifest files
      {
        source: '/(favicon\\.ico|manifest\\.json)$',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]
      },
      // Security headers
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },

  // Bundle optimization
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Create vendor chunk for React/Next
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Create chunk for common libraries
            lib: {
              test(module) {
                return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
              },
              chunks: 'all',
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            // Create chunk for Lucide icons
            lucide: {
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              name: 'lucide',
              chunks: 'all',
              priority: 20,
            },
            // Default chunk
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    return config;
  },

  // Clean URLs without trailing slashes
  trailingSlash: false,
};

module.exports = withBundleAnalyzer(nextConfig);