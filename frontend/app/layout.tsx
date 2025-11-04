import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import BackgroundEffects from "../components/BackgroundEffects";
import FacebookPixel from "../components/FacebookPixel";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Adpion | Advertising Solutions",
  description:
    "Get verified, stable Meta ad accounts with transparent funding, 24/7 support, and tailored solutions for agencies, e-commerce, and cross-border sellers.",
  openGraph: {
    title: "Adpion - Premium Meta Ad Accounts",
    description: "Meta ad accounts with transparent funding and 24/7 support",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/brand/full-logo-adpion.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adpion",
    url: "https://adpion.com",
    logo: "https://adpion.com/brand/logo.png",
    description:
      "Premium Meta/Facebook ad accounts with transparent funding and 24/7 support.",
    sameAs: [],
  };

  return (
    <html lang="vi">
      <body className={inter.variable}>
        {/* Facebook Pixel */}
        <FacebookPixel />

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/* Background Effects */}
        <BackgroundEffects />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Contact */}
        <FloatingContact />

        {/* Toast Notifications */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
