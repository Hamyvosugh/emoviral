import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'highlight.js/styles/github-dark.css'; // or any other style you prefer
import BackToTop from '@/components/sides/backtotop'; 
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Emoviral",
    template: "%s | Emoviral",
  },
  description: "Your blog description for SEO",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Emoviral",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emoviral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourusername",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} overflow-x-hidden="true"
      >
        <Header />
        {children}
        <BackToTop />
        <Footer />
      </body>
      
    </html>
  );
}
