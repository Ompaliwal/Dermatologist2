import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import global components
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import WhatsAppButton from "./components/WhatsAppButton"; // ✅ Import WhatsApp Button

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Dermacare Clinic",
  description: "Advanced dermatology & personalized skincare treatments.",
  icons: {
    icon: "/favicon.png", // ✅ use favicon.png from public/
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Navbar */}
        <Navbar />

        {/* Page-specific content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* ✅ Sticky WhatsApp Button - always visible */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
