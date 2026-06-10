import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ALivingLegacy from "@/src/components/ALivingLegacy/ALivingLegacy";
import Footer from "@/src/components/Footer/Footer";
import HeaderDesktop from "@/src/components/Header/HeaderDesktop";
import HeaderMobile from "@/src/components/Header/HeaderMobile";
import {
  siteName,
  siteDescription,
  defaultOpenGraph,
} from "@/src/constants/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: defaultOpenGraph,
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>
          <HeaderMobile />
          <HeaderDesktop />
        </div>
        {children}
        <div className="py-[80px]">
          <ALivingLegacy />
        </div>
        <div className="py-[80px]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
