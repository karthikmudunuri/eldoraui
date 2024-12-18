import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ["localhost", "randomuser.me","images.unsplash.com","res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/x5nMCkfqcy",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/docs/components/bentogrid",
        permanent: true,
      },
      {
        source: "/components/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/bentogrid",
        permanent: true,
      },
      {
        source: "/registry/:name",
        destination: "/registry/styles/default/:name.json",
        permanent: true,
      },
    ];
  },
};

export default withContentCollections(nextConfig);
