import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Climbing Hut Helper",
  description: "Helper application for CHS tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen bg-white dark:bg-slate-800">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
