import { Metadata } from "next";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./layout.css";
import { ReactNode } from "react";
import siteData from "../data/siteData";
import Providers from "./_components/Providers";
import { Analytics } from "../components/Third-Parties/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: siteData.siteName,
    template: `%s | ${siteData.siteName}`,
  },
  applicationName: siteData.siteName,
  description: siteData.siteDesc,
  keywords: [
    siteData.siteName,
    "Revived Witch",
    "Rw",
    "Revived Witch Wiki",
    "Wiki",
  ],
  icons: {
    icon: "/icon.webp",
  },
  openGraph: {
    url: "./",
    siteName: siteData.siteName,
    images: siteData.shareImage,
    locale: "en_US",
    type: "website",
  },
  appleWebApp: {
    title: siteData.siteName,
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-color min-w-screen text-default-alt antialiased">
        <Providers>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
