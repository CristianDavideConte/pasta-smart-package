/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //images: {
  //  loader: "imgix",
  //  path: "/",
    //unoptimized: true, //Comment when pushing to github
  //},
  //basePath: "/pasta-smart-package", //Uncomment when pushing to github 
  //assetPrefix: "/pasta-smart-package", //Uncomment when pushing to github
}

/*
module.exports = withPlugins([
  [optimizedImages, {
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  }],
  nextConfig
]);
*/
module.exports = nextConfig;