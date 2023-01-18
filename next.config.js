/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig

module.exports = {
    webpack(config, options) {
        return config
    },
}

const withYAML = require('next-yaml')
module.exports = withYAML(module.exports)
