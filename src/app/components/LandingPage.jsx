import Image from "next/image";
import { Poppins } from "next/font/google";
import { User, Palette, Globe, Layers, Smartphone, Layout, ImportIcon } from "lucide-react";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Statistics from "./Statistics";
import Content from "./Content";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function PortfolioLanding() {
  return (
    <div className={`relative ${poppins.className} min-h-screen bg-white`}>
      {/* Navbar remains fixed above content */}
        <Navbar />

      {/* Main content below navbar */}
      <main className="pt-[80px] sm:pt-[100px] md:pt-[120px] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <section className="mb-12 sm:mb-16 md:mb-20">
          <HeroSection />
        </section>

        <section className="mb-12 sm:mb-16 md:mb-20">
          <Statistics />
        </section>

        <section className="mb-12 sm:mb-16 md:mb-20">
          <Content />
        </section>
      </main>
    </div>
  );
}
