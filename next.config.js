/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
            }
        ]
    },
    experimental: {
        serverActions:true,
    },
}

module.exports = nextConfig
