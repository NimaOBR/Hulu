/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.example.com','image.tmdb.org'],
  },
  
}

module.exports = nextConfig
