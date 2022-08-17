const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { loader: "akamai", path: "" },
  assetPrefix: isProduction ? "/" : "",
  basePath: isProduction ? "/" : "",
};

module.exports = nextConfig;
