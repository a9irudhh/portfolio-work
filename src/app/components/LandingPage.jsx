import Image from "next/image"
import { Poppins } from "next/font/google";

import { User, Palette, Globe, Layers, Smartphone, Layout, ImportIcon } from "lucide-react"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import Statistics from "./Statistics"
import Content from "./Content"

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function PortfolioLanding() {
  return (
    <>
    <div className={`relative z-50 ${poppins.className} pt-[120px]`}>
      <Navbar />
      <HeroSection />
      <Statistics/>
      <Content/>
    </div>
    </>
  )
}
