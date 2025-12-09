const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '/NextJS-Tailwind-Course-Landing-Page/' : '',
  basePath: isProd ? '/NextJS-Tailwind-Course-Landing-Page' : '',
  images: {
    unoptimized: true,
  },

  // ✅ Allow production build even if TypeScript errors exist
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Allow production build even if ESLint errors exist
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
