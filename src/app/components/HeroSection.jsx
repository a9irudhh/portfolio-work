import Image from 'next/image';
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function HeroSection() {
  return (
    <div className={`relative ${poppins.className} px-6 sm:px-8 md:px-16 lg:px-24`}>
      <div className=" md:pt-8 flex justify-top items-center">
        <div className="pt-10 relative flex flex-col items-center w-full">
          {/* Profile Image */}
          <div className="relative mb-4">
            <div className="absolute w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] md:w-[143px] md:h-[143px] bg-[#EBEBEB] rounded-full opacity-50 border-[1px] border-[#EBEBEB]"></div>
            <Image
              src="/user.jpg"
              alt="User Image"
              width={143}
              height={143}
              className="relative z-10 rounded-full border-[4px] border-[#EBEBEB] object-cover w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] md:w-[143px] md:h-[143px]"
            />
          </div>

          {/* Hello badge */}
          <div className="mt-[20px] md:mt-[30px] w-[180px] h-[60px] sm:w-[200px] sm:h-[66px] md:w-[248px] md:h-[82px] rounded-[40px] border-[1px] flex items-center bg-[#EDE7F6] border-[#D1C4E9]">
            <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[61px] md:h-[61px] rounded-full bg-white flex-shrink-0 ml-[8px] flex justify-center items-center">
              <Image
                src="/shake.gif"
                alt="Shake Animation"
                width={40}
                height={40}
                className="rounded-full"
                unoptimized
              />
            </div>
            <p className="ml-[4px] font-poppins font-[400] text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] text-black text-center">
              Hello! Im Shradha
            </p>
          </div>

          {/* Main Heading */}
          <div className="mt-[20px] text-[#7E57C2] font-poppins font-[550] 
            text-[24px] sm:text-[28px] md:text-[60px] 
            leading-[32px] sm:leading-[38px] md:leading-[70px] 
            tracking-[-0.02em] text-center 
            w-full max-w-[90%] sm:max-w-[600px] md:max-w-[898px] px-2">
            Creating Compelling Designs That Drive Business Outcomes
          </div>

          {/* Subheading */}
          <div className="mt-[20px] md:mt-[30px] text-[#7E57C2] font-poppins font-[400] 
            text-[12px] sm:text-[14px] md:text-[18px] 
            leading-[18px] sm:leading-[22px] md:leading-[28px] 
            text-center w-full max-w-[90%] sm:max-w-[650px] md:max-w-[940px] px-2">
            I specialize in crafting user experiences that not only look great but also perform exceptionally, driving engagement and profitability for your business
          </div>

          {/* Button */}
          <button className="mt-[20px] sm:mt-[30px] px-4 sm:px-6 h-[40px] sm:h-[50px] md:w-[258px] md:h-[61px] bg-[#7E57C2] rounded-[10px] text-white font-poppins font-[400] text-[14px] sm:text-[15px] leading-none flex items-center justify-center">
            Let’s work together
          </button>
        </div>
      </div>
    </div>
  );
}
