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
    config.module.rules.push({
      test: /\.test\.js$/,
      use: 'null-loader', 
      include: /pages\/tests/,
    });
    return config;
  },
}

module.exports = nextConfig;