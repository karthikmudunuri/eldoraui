import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./registry/**/*", "./content/**/*"],
  },
  reactStrictMode: true,
  images: {
    domains: ["localhost", "cdn.eldoraui.site", "images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/X4BBMBjHNf",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/docs/components",
        permanent: true,
      },
      {
        source: "/showcase/:path*.mdx",
        destination: "/showcase/:path*.md",
        permanent: true,
      },
      {
        source: "/blog/:path*.mdx",
        destination: "/blog/:path*.md",
        permanent: true,
      },
      {
        source: "/docs/:path*.mdx",
        destination: "/docs/:path*.md",
        permanent: true,
      },
    ];
  },
  rewrites() {
    return [
      {
        source: "/docs/:path*.md",
        destination: "/llm/:path*",
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
