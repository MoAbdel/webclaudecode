/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qtrypzzcjebvfcihiynt.supabase.co',
        pathname: '/storage/v1/object/public/base44-prod/public/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  output: 'standalone',
  
  // HTTP/2+ and Performance optimizations  
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Mobile performance settings
  poweredByHeader: false,
  
  // Headers for HTTP/2+ optimization and SEO
  async headers() {
    return [
      // CSS files - fix MIME type issues
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/css; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // JavaScript files - ensure proper MIME type
      {
        source: '/_next/static/js/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Chunk files - ensure proper MIME type
      {
        source: '/_next/static/chunks/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
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
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(favicon\\.ico|favicon-.*\\.png|android-chrome-.*\\.png|apple-touch-icon.*\\.png|manifest\\.json)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400' // Cache for 24 hours
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          }
        ]
      },
      {
        source: '/(.*)\\.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*)\\.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*)\\.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*)\\.woff',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
  
  // Reduce bundle size by targeting modern browsers
  transpilePackages: [],
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    emotion: false,
    reactRemoveProperties: process.env.NODE_ENV === 'production',
    styledComponents: false,
  },
  
  
  // Webpack optimizations for ultra-modern browsers
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Target ES2022 to eliminate all polyfills
      config.target = ['web', 'es2022'];
      
      config.optimization = {
        ...config.optimization,
        sideEffects: false,
        providedExports: true,
        usedExports: true,
        concatenateModules: true,
        innerGraph: true,
        mangleExports: 'size',
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            default: false,
            vendors: false,
            // React and core libs
            react: {
              name: 'react',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40,
              enforce: true
            },
            // Icons - separate chunk for better caching
            icons: {
              name: 'icons',
              chunks: 'all', 
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              priority: 35,
              enforce: true
            },
            // Other vendor libraries
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
              minChunks: 1
            },
            // Common code across pages
            common: {
              name: 'common',
              chunks: 'all',
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
      };
      
      // Remove any polyfills
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        stream: false,
        assert: false,
        http: false,
        https: false,
        os: false,
        url: false,
        zlib: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;