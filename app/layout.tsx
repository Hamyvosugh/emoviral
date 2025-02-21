import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'highlight.js/styles/github-dark.css';
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
  metadataBase: new URL("https://emoviral.com"),
  title: {
    default: "Emoviral",
    template: "%s | Emoviral",
  },
  description: "Web/App Entwicklung, Automatisierung, Ki, Digitales Merketing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emoviral.com",
    siteName: "Emoviral",
    images: [
      {
        url: "/images/logos/emoviral-logo-s.webp",
        width: 800,
        height: 600,
        alt: "Emoviral Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourusername",
    creator: "@yourusername",
    images: ["/images/logos/emoviral-logo-s.webp"],
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
  icons: {
    icon: "/images/logos/emoviral-logo-s.webp",
    shortcut: "/images/logos/emoviral-logo-s.webp",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <Header />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}