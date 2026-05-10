import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TwoLego — SAP Implementation Partner | North America",
    template: "%s | TwoLego",
  },
  description:
    "North America's most trusted SAP implementation partner. 25+ years transforming businesses with SAP S/4HANA, Business One, SuccessFactors, and more across 70+ countries.",
  keywords: ["SAP", "ERP", "SAP S/4HANA", "SAP Business One", "ERP implementation", "North America", "Orange County", "California"],
  openGraph: {
    type: "website",
    siteName: "TwoLego",
    title: "TwoLego — SAP Implementation Partner | North America",
    description:
      "North America's most trusted SAP implementation partner. 25+ years transforming businesses with SAP S/4HANA, Business One, SuccessFactors, and more.",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ background: "var(--bg)", color: "var(--ink)" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
