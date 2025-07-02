import Navbar from "../../components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function AboutPage() {
  return (
    <div className={`relative ${poppins.className} min-h-screen bg-white`}>
      <Navbar />
      <main className="sm:pt-[100px] md:pt-[120px] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7E57C2] mb-6">This is About page</h1>
      </main>
    </div>
  );
}
