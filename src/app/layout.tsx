import "./globals.css";
import type { Metadata } from "next";

import { Public_Sans } from "next/font/google";

const PublicSans = Public_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "abc Digital",
  description: "Digital solutions for your demand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={PublicSans.className}>{children}</body>
    </html>
  );
}
