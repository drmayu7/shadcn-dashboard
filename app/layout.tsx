import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"

const poppins = Poppins({
  subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"],
});

// const geistMono = Poppins({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "MyHarmony | MyHDW",
  description: "MyHarmony Apps for MyHDW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(poppins.className,"dark")}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
