import withMDX from '@next/mdx';
import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
});

const withMDXConfig = withMDX({
  // MDX configuration options here (if any)
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js configuration options here
};

const combinedConfig = {
  ...withNextra(nextConfig),
  ...withMDXConfig,
};

export default combinedConfig;
