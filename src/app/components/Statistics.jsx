import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Statistics() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto">
      {/* Scrollable Tag Bar */}
      <div className="mt-[30px] w-full h-auto bg-[#EDE7F6] rounded-[70px] flex items-center justify-start overflow-x-auto gap-2 py-4 px-4">
        {[
          "Prototyping",
          "Ux design",
          "Ui design",
          "Prototyping",
          "Storyboarding",
          "Visual interaction",
          "Usability testing",
        ].map((item, index) => (
          <div
            key={index}
            className="min-w-[129px] h-[60px] bg-[#EDE7F6] rounded-[20px] border border-[#7E57C2] flex items-center justify-center px-4 flex-shrink-0"
          >
            <span className="font-[400] text-[16px] sm:text-[18px] text-[#000000] text-center whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Statistic Cards */}
      <div className="mt-[30px] flex flex-wrap justify-center gap-6 sm:gap-8">
        {[
          { number: "3,000+", text: "Hours spent" },
          { number: "200+", text: "Cups of chai consumed" },
          { number: "3+", text: "Years of problem solving" },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[260px] md:w-[293px] h-[153px] bg-[#EDE7F6] rounded-[20px] shadow-md flex flex-col items-center justify-center"
          >
            <span className="font-poppins font-[600] text-[36px] sm:text-[48px] md:text-[60px] text-[#7E57C2] leading-none">
              {item.number}
            </span>
            <span className="mt-3 font-[400] text-[14px] sm:text-[16px] md:text-[18px] text-[#7E57C2] text-center leading-snug">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
