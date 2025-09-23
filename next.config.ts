import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.s3.*.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'wydexbucket.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'wydexbucket.s3.eu-north-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
