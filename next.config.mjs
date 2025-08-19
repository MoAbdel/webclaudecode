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
            value: 'public, max-age=31536000'
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