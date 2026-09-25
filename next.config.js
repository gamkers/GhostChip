/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Required for GitHub Pages static hosting
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js server-side image optimization
  },
};

module.exports = nextConfig;
