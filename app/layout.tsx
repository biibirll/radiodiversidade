import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rádio Diversidade – Aqui toca o seu som!",
  description: "Aqui toca o seu som!",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-gray-900 text-white`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
