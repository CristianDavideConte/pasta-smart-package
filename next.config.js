/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/pasta-smart-package", //Uncomment when pushing to github 
  assetPrefix: "/pasta-smart-package", //Uncomment when pushing to github
  
  images: {
    //loader: "akamai",
    unoptimized: true,
    path: ""
  },
}

module.exports = nextConfig
