/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
  images: {
    domains: ['luxcare.es']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  output: 'export',
  trailingSlash: true,
}