/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/SentinelRank-Responsible-ML",
  assetPrefix: "/SentinelRank-Responsible-ML/",
};

module.exports = nextConfig;
