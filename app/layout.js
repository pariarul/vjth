import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VjTH Market Research | Data-Driven Business Insights",
  description:
    "VjTH Market Research provides data-driven market analysis, field insights, and business intelligence to help organizations make smarter decisions and achieve sustainable growth.",

 keywords: [
    "VjTH Market Research",
    "Market Research Company in India",
    "Business Intelligence Services",
    "Market Analysis",
    "Data Driven Insights",
    "Field Research",
    "Consumer Research",
    "Strategic Market Research",
  ],


  icons: {
    icon: "/vjth-logo.png",
  },

  /* 🔹 Open Graph (Facebook, Instagram, LinkedIn) */
  openGraph: {
    title: "VjTH Market Research | Data-Driven Business Insights",
    description:
      "VjTH Market Research provides data-driven market analysis, field insights, and business intelligence to help organizations make smarter decisions and achieve sustainable growth.",
    url: "https://www.vithmr.com", // change to your domain
    siteName: "VjTH Market Research",
    images: [
      {
        url: "/vjth-logo.png", // best: 1200x630 image
        width: 1200,
        height: 630,
        alt: "VjTH Market Research - Data-Driven Business Insights",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* 🔹 Twitter (also helps Instagram preview indirectly) */
  twitter: {
    card: "summary_large_image",
    title: "VjTH Market Research | Data-Driven Business Insights",
    description:
      "VjTH Market Research provides data-driven market analysis, field insights, and business intelligence to help organizations make smarter decisions and achieve sustainable growth.",
    images: ["/vjth-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
