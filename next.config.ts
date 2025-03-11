import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Позволяет использовать все изображения из этого хоста
      },
      {
        protocol: "https",
        hostname: "static.staff-clothes.com",
        pathname: "/**", // Позволяет использовать все изображения из этого хоста
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
