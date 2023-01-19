/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const debug = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: !debug ? '/retr0327.github.io/' : '/',
  exportPathMap: () => ({
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/blog': { page: '/blog' },
  }),
};

module.exports = withBundleAnalyzer(nextConfig);
