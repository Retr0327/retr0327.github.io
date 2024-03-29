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
};

module.exports = withBundleAnalyzer(nextConfig);
