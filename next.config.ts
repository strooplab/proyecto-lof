import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config();
const nextConfig: NextConfig = {
  allowedDevOrigins: [process.env.LOCAL_ORIGIN || "localhost"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        port: "",
        pathname: "/plus-assets/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;
