import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const monstserrat = Montserrat({
  variable: "--font-monstserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Africa Business Radio",
  description: "This is a business radio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monstserrat.className} antialiased bg-white`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
