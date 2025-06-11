import React from 'react';
import Image from 'next/image';

const toolsData = [
  { name: 'Figma', image: '/figma.png' },
  { name: 'Framer', image: '/framer.png' },
  { name: 'Webflow', image: '/webflow.png' },
  { name: 'Notion', image: '/notion.png' },
  { name: 'Spotify', image: '/spotify.png' },
  { name: 'Shopify', image: '/shopify.png' },
];

const Tools = () => {
  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center mt-[40px] px-4">
      {toolsData.map((tool, index) => (
        <div
          key={index}
          className="w-full sm:w-[350px] md:w-[415px] bg-[#EDE7F6] border border-[#D1C4E9] rounded-[20px] p-4 sm:p-5 md:p-[15px] box-border flex flex-col"
        >
          {/* Row: Image + Heading */}
          <div className="flex items-center mb-[25px]">
            <Image
              src={tool.image}
              alt={tool.name}
              width={88}
              height={88}
              className={`rounded-[20px] mr-[15px] ${
                tool.name === 'Spotify'
                  ? 'object-cover scale-110'
                  : 'object-contain'
              }`}
              style={
                tool.name === 'Spotify'
                  ? { objectFit: 'cover', transform: 'scale(1.1)' }
                  : { objectFit: 'contain' }
              }
            />

            <h2 className="font-poppins font-semibold text-[20px] sm:text-[22px] md:text-[25px] leading-[28px] sm:leading-[30px] tracking-[0.04em] text-[#7E57C2]">
              {tool.name}
            </h2>
          </div>

          {/* Paragraph */}
          <p className="font-poppins font-normal text-[16px] sm:text-[17px] md:text-[18px] text-[#7E57C2] text-left leading-[1.4]">
            My dynamic design playground, fostering collaboration to ideate,
            prototype, and craft stunning UI.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tools;
