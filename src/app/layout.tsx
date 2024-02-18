import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/breakpoints.css";
import "./globals.css";

import Header from "@/components/layouts/Header";

import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-oxford-blue", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToasterProvider />
          {/* @ts-ignore */}
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
