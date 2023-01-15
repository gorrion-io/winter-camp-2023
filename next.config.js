/** @type {import('next').NextConfig} */
const withYAML = require("next-yaml");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = nextConfig;
module.exports = withYAML();
