import React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils/classes";
import { truncateOnWord } from "@/lib/utils/string";
import { JosephinFont, fontDisplay, geistMono, geistSans } from "@/styles/fonts";
import "@/styles/globals.css";
import { siteConfig } from "@/config";
import { Providers } from "./providers";
import { SiteBanner } from "@/components/marketing/site-banner";

const config = siteConfig.global;

export const metadata: Metadata = {
  title: { default: config.title, template: `%s - ${config.name}` },
  description: truncateOnWord(config.description, 148, true),
  keywords: config.keywords,
  authors: config.authors,
  creator: config.creator,
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.url,
    title: config.title,
    description: truncateOnWord(config.description, 148, true),
    siteName: config.name,
    images: [config.thumbnail],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: truncateOnWord(config.description, 148, true),
    images: [config.thumbnail],
    creator: config.twitter.creator,
  },
  metadataBase: new URL(config.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans",
          geistMono.variable,
          geistSans.variable,
          fontDisplay.variable,
          JosephinFont.variable
        )}
        suppressHydrationWarning
      >
        <Analytics />
        <Providers>
          <SiteBanner/>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
