/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com/**",
      },
      {
        protocol: "https",
        hostname: "icon-library.com/**",
      },
      {
        protocol: "https",
        hostname: "www.marswebsolution.com/**",
      },
    ],
  },
};

module.exports = nextConfig;
