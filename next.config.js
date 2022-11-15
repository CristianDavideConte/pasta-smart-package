/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/pasta-smart-package",
  assetPrefix: "/pasta-smart-package"
}

module.exports = nextConfig
