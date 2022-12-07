/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.jatinsoni.in",
      "lh3.googleusercontent.com",
      "cdn.pixabay.com",
      "p16-amd-va.tiktokcdn.com",
      "image.shutterstock.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
