export default function Skills() {
  const cardDetails = [
    {
      heading: "User Experience (UX) Design",
      subheading:
        "Understanding of user behaviour and psychology to design seamless and enjoyable user experiences",
    },
    {
      heading: "User Interface (UI) Design",
      subheading:
        "Understanding of user behaviour and psychology to design seamless and enjoyable user experiences",
    },
    {
      heading: "Web Design Principles",
      subheading:
        "Understanding of user behaviour and psychology to design seamless and enjoyable user experiences",
    },
    {
      heading: "Wireframing & Prototyping",
      subheading:
        "Understanding of user behaviour and psychology to design seamless and enjoyable user experiences",
    },
    {
      heading: "Mobile-Friendly Optimization",
      subheading:
        "Understanding of user behaviour and psychology to design seamless and enjoyable user experiences",
    },
    {
      heading: "Web Design Principles",
      subheading:
        "Understanding of user behaviour and psychology to design seamless and enjoyable user experiences",
    },
  ];

  // Break into rows of 3
  const rows = [];
  for (let i = 0; i < cardDetails.length; i += 3) {
    rows.push(cardDetails.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12 px-4 sm:px-8 md:px-16">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12"
        >
          {row.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] md:w-[350px] h-auto border border-[#D1C4E9] rounded-[20px] flex flex-col items-start text-left relative bg-[#EDE7F6] px-6 py-4 overflow-hidden z-0"
            >
              <div className="absolute top-[10px] left-[8px] w-[90%] sm:w-[280px] md:w-[331px] h-[150px] sm:h-[180px] md:h-[198px] border border-[#D1C4E9] rounded-[20px] bg-[#FFFFFF] z-[-1]"></div>
              <div className="relative top-[-22px]">
                <div className="mt-[150px] sm:mt-[177px] md:mt-[227px]">
                  <h3 className="text-[#7E57C2] font-poppins font-[600] text-[16px] sm:text-[18px] md:text-[20px]">
                    {card.heading}
                  </h3>
                  <p className="mt-5 text-[#7E57C2] font-poppins font-[400] text-[14px] sm:text-[16px]">
                    {card.subheading}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
