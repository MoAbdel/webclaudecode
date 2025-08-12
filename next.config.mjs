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
  },
  output: 'standalone',
  
  // Performance optimizations  
  experimental: {
    optimizePackageImports: ['lucide-react'],
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