import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Statistics() {
  return (
    <div>
      <div className="mt-[30px] w-full max-w-[1200px] h-[85px] bg-[#EDE7F6] rounded-[70px] mx-auto flex items-center justify-center overflow-x-auto">
        {["Prototyping", "Ux design", "Ui design", "Prototyping", "Storyboarding", "Visual interaction", "Usability testing"].map((item, index) => (
          <div
            key={index}
            className="min-w-[129px] h-[60px] bg-[#EDE7F6] rounded-[20px] border-[1px] border-[#7E57C2] flex items-center justify-center px-4 mx-2"
          >
            <span className="font-[400] text-[18px] leading-[100%] text-[#000000] text-center">
              {item}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-[30px] flex flex-wrap justify-center gap-8 px-4">
        {[
          { number: "3,000 + ", text: "Hours spent" },
          { number: "200 +", text: "Cups of chai consumed" },
          { number: "3 +", text: "Years of problem solving" },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[293px] h-[153px] bg-[#EDE7F6] rounded-[20px] shadow-md flex flex-col items-center justify-center"
          >
            <span className="font-poppins font-[600] text-[40px] sm:text-[60px] leading-[50px] sm:leading-[70px] tracking-[-0.03em] text-[#7E57C2]">
              {item.number}
            </span>
            <span className="mt-[10px] font-[400] text-[14px] sm:text-[18px] leading-[100%] text-[#7E57C2] text-center">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}