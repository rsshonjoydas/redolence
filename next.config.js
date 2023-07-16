const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'firebasestorage.googleapis.com',
      'graph.facebook.com',
      'image.tmdb.org',
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};

module.exports = nextConfig;
