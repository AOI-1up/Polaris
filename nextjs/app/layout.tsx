"use client";
import { Inter } from "next/font/google";
import { Provider as JotaiProvider } from "jotai";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <JotaiProvider>
        <body className={inter.className}>{children}</body>
      </JotaiProvider>
    </html>
  );
}
