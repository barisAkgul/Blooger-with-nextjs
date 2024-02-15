import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/breakpoints.css";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* @ts-ignore */}
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
