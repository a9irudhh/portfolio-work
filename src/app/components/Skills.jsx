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
  const rows = [];
  for (let i = 0; i < cardDetails.length; i += 3) {
    rows.push(cardDetails.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap justify-center gap-4"
        >
          {row.map((card, index) => (
            <div
              key={index}
              className="relative w-[400px] h-[380px] border border-[#D1C4E9] rounded-[20px] bg-[#EDE7F6] px-6 py-6 overflow-visible"
            >
              <div className="absolute top-4 left-4 right-4 h-[180px] bg-white border border-[#D1C4E9] rounded-[20px] z-10"></div>

              <div className="relative mt-[200px] z-20">
                <h3 className="text-[#7E57C2] font-poppins font-semibold text-[18px] md:text-[20px] text-left">
                  {card.heading}
                </h3>
                <p className="mt-4 text-[#7E57C2] font-poppins font-normal text-[14px] md:text-[16px] text-left">
                  {card.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
