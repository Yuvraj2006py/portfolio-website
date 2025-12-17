import type { Metadata } from "next";
import "../styles/globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Yuvraj Sharma | Portfolio",
  description:
    "Portfolio of Yuvraj Sharma – CS @ Western (Data Science minor), building data-driven products and systems.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-purple-950">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}


