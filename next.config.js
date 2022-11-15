/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "/",
    //unoptimized: true, //Comment when pushing to github
  },
  basePath: "/pasta-smart-package", //Uncomment when pushing to github 
  assetPrefix: "/pasta-smart-package", //Uncomment when pushing to github
}

module.exports = nextConfig
