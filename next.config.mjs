/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.68.197",
        port: "8000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
