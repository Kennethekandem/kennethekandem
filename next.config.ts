import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-f036ac7395dc44b3a3817480654264f1.r2.dev",
      },
    ],
  },
};

export default nextConfig;
