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
    <div className="flex flex-wrap gap-5 justify-center mt-[50px]">
      {toolsData.map((tool, index) => (
        <div
          key={index}
          className="w-[415px] h-[230px] bg-[#EDE7F6] border border-[#D1C4E9] rounded-[20px] p-[15px] box-border flex flex-col"
        >
          {/* Row: Image + Heading */}
          <div className="flex items-center mb-[35px] ml-[5px]">
            {/* Image */}
            <Image
              src={tool.image}
              alt={tool.name}
              width={88}
              height={88}
              className={`w-[88px] h-[88px] rounded-[20px] mr-[20px] ${tool.name === 'Spotify' ? 'object-cover scale-120' : 'object-contain'}`}
              style={tool.name === 'Spotify' ? { objectFit: 'cover', transform: 'scale(1.2)' } : { objectFit: 'contain' }}
            />

            {/* Heading */}
            <h2 className="font-poppins font-semibold text-[25px] leading-[30px] tracking-[0.04em] text-[#7E57C2]">
              {tool.name}
            </h2>
          </div>

          {/* Paragraph */}
          <p className="font-poppins font-normal text-[18px] text-[#7E57C2] text-left">
            My dynamic design playground, fostering collaboration to ideate,
            prototype, and craft stunning UI.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tools;
