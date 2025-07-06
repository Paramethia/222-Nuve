import type { Metadata } from "next";
import { Inter } from "next/font/google"
import ClientLayout from './client-layout';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "222 Nuve™ - Professional Music Production & Sound Design",
  description: "Quality sound engineering and networking at competitive rates. Professional music production services including mixing, mastering, vocal coaching, and artistic direction.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
