/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProduction ? 'https://retr0327.github.io/' : '/',
  images: { unoptimized: true },
  rewrites: () => [
    {
      source: '/tags/tag/:tag/:tagPage(\\d{1,})',
      destination: '/tags/tag/:tag/:tagPage', // Matched parameters can be used in the destination
    },
  ],
};

module.exports = withBundleAnalyzer(nextConfig);
