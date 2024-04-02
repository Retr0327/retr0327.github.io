import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import createMDX from '@next/mdx';
import NextBundleAnalyzer from '@next/bundle-analyzer';

const isProduction = process.env.NODE_ENV === 'production';

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx'],
  swcMinify: true,
  assetPrefix: isProduction ? 'https://retr0327.github.io/' : '/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  images: { unoptimized: true },
  poweredByHeader: false,
  output: 'export',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
          'builtin-modules': false,
          worker_threads: false,
        },
      };
    }

    return config;
  },
};

export default withMDX(withBundleAnalyzer(nextConfig));
