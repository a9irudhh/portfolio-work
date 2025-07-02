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
    <div className="flex flex-wrap gap-4 justify-center mt-[40px] px-4 w-full max-w-[1280px] mx-auto">
      {toolsData.map((tool, index) => (
        <div
          key={index}
          className="w-[400px] bg-[#EDE7F6] border border-[#D1C4E9] rounded-[20px] p-4 box-border flex flex-col"
        >
          {/* Image + Heading */}
          <div className="flex items-center mb-[25px]">
            <div className="w-[88px] h-[88px] rounded-[20px] overflow-hidden mr-[15px] flex items-center justify-center">
              <Image
                src={tool.image}
                alt={tool.name}
                width={88}
                height={88}
                className={`${
                  tool.name === 'Spotify' ? 'object-cover' : 'object-contain'
                } w-full h-full`}
              />
            </div>
            <h2 className="font-poppins font-semibold text-[22px] md:text-[25px] leading-[30px] tracking-[0.04em] text-[#7E57C2]">
              {tool.name}
            </h2>
          </div>

          {/* Description */}
          <p className="font-poppins font-normal text-[16px] md:text-[18px] text-[#7E57C2] text-left leading-[1.4]">
            My dynamic design playground, fostering collaboration to ideate,
            prototype, and craft stunning UI.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tools;
