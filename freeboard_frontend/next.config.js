/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: isProd ? 'https://pick-pick.shop' : undefined,

}

module.exports = nextConfig
