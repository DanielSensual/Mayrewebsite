import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reelestateorlando.com",
      },
      {
        protocol: "https",
        hostname: "www.reelestateorlando.com",
      },
      {
        protocol: "https",
        hostname: "pub-03f7bc79b2ab4f189f32839f34d6fd24.r2.dev",
      },
    ],
  },
};

export default nextConfig;
