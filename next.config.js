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
  webpack: (config) => {
    // Lägg till regler för att ignorera testfiler
    config.module.rules.push({
      test: /\.test\.js$/,
      use: 'ignore-loader',
    });
    return config;
  },
}

module.exports = nextConfig
