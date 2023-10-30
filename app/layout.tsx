import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import Image from "next/image";

export const rubik = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500", "700", "900"],
});

const space = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500", "400", "700", "600", "900"],
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
