/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export", // Removed this line
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        serverActions: {
            allowedOrigins: ["*"], // Or specify your allowed origins
        },
    },
    images: { unoptimized: true },
};

module.exports = nextConfig;
