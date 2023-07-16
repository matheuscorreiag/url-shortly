import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Contexts from "../src/components/atomic/atoms/Contexts";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Short.ly",
  description: "A simple and quick URL shortener",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-900">
      <body className={"h-screen w-screen" + inter.className}>
        <Toaster />
        <Contexts>{children}</Contexts>
      </body>
    </html>
  );
}
