import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 365,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
                port: "",
                pathname: "/**",
            },
        ],
    },
    output: "standalone",
    transpilePackages: ["motion"],
    async headers() {
        return [
            {
                source: "/videos/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                    {
                        key: "Content-Type",
                        value: "video/mp4",
                    },
                ],
            },
        ];
    },
    webpack: (config, { dev }) => {
        // HMR is disabled in AI Studio via DISABLE_HMR env var.
        // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
        if (dev && process.env.DISABLE_HMR === "true") {
            config.watchOptions = {
                ignored: /.*/,
            };
        }
        return config;
    },
};

export default nextConfig;
