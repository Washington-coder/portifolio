/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/portifolio',
    assetPrefix: '/portifolio/',
}

module.exports = nextConfig