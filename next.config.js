/*
/** @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    // Exclude test files from being included in the build
    config.module.rules.push({
      test: /\.test\.js$/,
      use: 'ignore-loader',
      include: /pages\/tests/,
    });
    return config;
  },
}

module.exports = nextConfig;