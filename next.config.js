/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/pasta-smart-package", //Uncomment when pushing to github 
  assetPrefix: "/pasta-smart-package", //Uncomment when pushing to github
  
  images: {
    unoptimized: true
    //loader: "akamai",
    //path: ""
  },
}

module.exports = nextConfig
