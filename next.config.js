const fs = require('fs');
const path = require('path');

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProduction ? 'https://retr0327.github.io/' : '/',
  exportPathMap: (defaultPathMap, ctx) => {
    const pathMap = {
      ...defaultPathMap,
      '/blog/[page]': {
        page: '/blog',
        query: { page: '[page]' },
      },
      '/blog/p/[slug]': {
        page: '/blog/p',
        query: { slug: '[slug]' },
      },
    };

    const files = fs.readdirSync(path.join(ctx.dir, 'src/posts'));

    files.forEach((file) => {
      const slug = file.replace('.mdx', '');
      pathMap[`/blog/p/${slug}`] = {
        page: '/blog/p',
        query: { slug },
      };
    });

    return pathMap;
  },
  images: { unoptimized: true },
};

module.exports = withBundleAnalyzer(nextConfig);
