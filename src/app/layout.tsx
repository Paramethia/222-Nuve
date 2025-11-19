import type { Metadata } from "next";
import { Inter } from "next/font/google"
import ClientLayout from './client-layout';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://222-nuve.vercel.app"),

  title: {
    default: "222 Nuve™ - Professional Music Production & Sound Design",
    template: "%s | 222 Nuve™",
  },

  description: "Quality sound engineering and networking at competitive rates. Professional music production services including mixing, mastering, vocal coaching, and artistic direction.",

  keywords: [
    "music production",
    "sound design",
    "mixing",
    "mastering",
    "vocal coaching",
    "audio engineering",
    "studio services",
  ],

  openGraph: {
    title: "222 Nuve™ - Professional Music Production & Sound Design",
    description:
      "High-quality music production and audio engineering services tailored to your sound.",
    url: "https://222-nuve.vercel.app",
    siteName: "222 Nuve™",
    type: "website",
    images: [
      {
        url: "https://222-nuve.vercel.app/222_Nuve_logo.png",
        width: 512,
        height: 512,
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://222-nuve.com",
  },
};

// Not adding structured data 'cause this is just a practice website

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
