// next.config.js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React's Strict Mode for better error handling
  swcMinify: true, // Use SWC for minification, which is faster
  images: {
    // Optional: Add image domains if using external images
    domains: ['aenzbi.bi'],
  },
  experimental: {
    // Optional: Enable experimental features
    appDir: true, // For the new app directory feature in Next.js
  },
  // Other configuration options can be added here
};

export default nextConfig;
