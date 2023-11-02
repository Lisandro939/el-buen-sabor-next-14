/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.infrastructureLogging = {
            level: "error",
        };

        return config;
    },
    images: {
        domains: ['*'],
    },
};

module.exports = nextConfig
