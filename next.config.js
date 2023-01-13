/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withYaml = require("next-yaml");

module.exports = nextConfig;
module.exports = withYaml();
