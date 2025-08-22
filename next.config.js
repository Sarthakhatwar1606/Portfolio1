/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/Portfolio1" : "",
  assetPrefix: isProd ? "/Portfolio1/" : "",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};