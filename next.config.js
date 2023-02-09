/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imageio.forbes.com', 'api.lorem.space'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);
