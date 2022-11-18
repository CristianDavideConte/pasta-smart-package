/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /**/
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/pasta-smart-package", //Uncomment when pushing to github 
  assetPrefix: "/pasta-smart-package", //Uncomment when pushing to 
}

module.exports = nextConfig;