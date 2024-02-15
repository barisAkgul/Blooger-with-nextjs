import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/breakpoints.css";
import "./globals.css";

import Header from "@/components/layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog website",
  description: "Generated post witt this blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* @ts-ignore */}
        <Header />
        {children}
      </body>
    </html>
  );
}
