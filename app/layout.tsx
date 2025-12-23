import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import DotGrid from "@/components/DotGrid";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Maxxit",
};

const AeonikBold = localFont({
  src: "./fonts/Aeonik-Bold.ttf",
  display: "optional",
  variable: "--font-Aeonik-Bold",
  adjustFontFallback: false,
  
  preload: true,
});

const AeonikRegular = localFont({
  src: "./fonts/fonnts.com-Aeonik-Regular.ttf",
  display: "optional",
  variable: "--font-Aeonik-Regular",
  adjustFontFallback: false,
 
  preload: true,
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AeonikBold.variable} ${AeonikRegular.variable} `}>
        <LenisProvider>
          <DotGrid />
          <Navbar />
            {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
