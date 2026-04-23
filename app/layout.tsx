import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tobams Group – Transforming Businesses Through Digital Excellence",
  description:
    "Tobams Group provides world-class tech training, talent sourcing, and digital solutions. Explore our academy, projects, and strategic partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${nunito.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-white text-[#1a1a1a]">
    
        <header id="site-header">
          <Navbar />
        </header>

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <footer id="site-footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
