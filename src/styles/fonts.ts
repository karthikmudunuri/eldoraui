import { Inter, Josefin_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const fontDisplay = Inter({
  variable: "--font-display",
  subsets: ["latin"],
});
export const JosephinFont = Josefin_Sans({
  variable: "--font-josephin",
  subsets: ["latin"],
});

export const geistSans = GeistSans;
export const geistMono = GeistMono;
