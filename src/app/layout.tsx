import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "./components/navbar";
import Header from "./components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steven Portfolio Page👨‍💻",
  description: "Portfolio page made by Steven",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <Navbar />
        <main className="pt-40 pb-20 px-4 max-w-6xl mx-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
