/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  singleQuote: false,
  bracketSpacing: true,
  jsxSingleQuote: false,
  bracketSameLine: false,
  trailingComma: "es5",
  semi: true,
  printWidth: 100,
  arrowParens: "always",
  endOfLine: "auto",
  importOrder: [
    // Mocks must be at the top as they contain vi.mock calls
    "(.*)/__mocks__/(.*)",
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^(@/components/(.*)$)",
    "^(@/hooks/(.*)$)",
    "^(@/utils/(.*)$)",
    "^(@/lib/(.*)$)",
    "^(@/styles/(.*)$)",
    "^(@/assets/(.*)$)",
    "^(@/types/(.*)$)",
    "^(@/(.*)$)",
    "^~/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
