import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "800", "900"],
});

// UPDATED METADATA HERE
export const metadata: Metadata = {
  title: "NovaHelix Labs | Engineering Solutions",
  description: "Specialist Engineering Services for Controlled Environments across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white antialiased text-[#1a1a1a] flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}