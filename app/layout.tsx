import { fontSans } from "@/lib/fonts";
import { absoluteUrl, cn, constructMetadata } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@/components/analytics";
import { PHProvider } from "@/components/posthog-provider";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";
import "@/styles/mdx.css";

import type { Viewport } from "next";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Eldora UI",
  description:
    "Beautiful UI components and templates to make your landing page look stunning.",
  image: absoluteUrl("/thumbnail.png"),
  icons: {
    icon: "/android-chrome-512x512.png",
    shortcut: "/android-chrome-192x192.png",
    apple: "/android-chrome-192x192.png",
  },
  manifest: "/site.webmanifest",
  creator: "karthikmudunuri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eldoraui.site",
    title: "EldoraUI",
    description: "Beautiful UI components and templates to make your landing page look stunning.",
    siteName: "Eldora UI",
    images: "/thumbnail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "EldoraUI",
    description: "Beautiful UI components and templates to make your landing page look stunning.",
    images: "/thumbnail.png",
    creator: "@karthikmudunuri_"
  },
  metadataBase: new URL("https://www.eldoraui.site/"),
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <PHProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider>
              {children}
              <Toaster />
              <Analytics />
            </TooltipProvider>
          </ThemeProvider>
        </PHProvider>
      </body>
    </html>
  );
}
