import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500", "700", "900"],
});

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500", "700", "600"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Scriptive",
    default: "Scriptive",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space.className} antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
