'use client';

import React from 'react';
import Image from 'next/image';

const cardData = [
  {
    title: 'Pets Care',
    tags: ['2022', 'Personal Care'],
    centerText: 'PETS CARE',
    mainImages: ['/m1.png'],
    thumbnails: ['/t11.png', '/t12.png', '/t13.png', '/t14.png'],
  },
  {
    title: 'Elite',
    tags: ['2023', 'Personal Care'],
    centerText: 'HEALTH',
    mainImages: ['/m2.png'],
    thumbnails: ['/t21.png', '/t22.png', '/t23.png', '/t24.png'],
  },
  {
    title: 'Redesign',
    tags: ['2024', 'Personal Care'],
    centerText: '',
    mainImages: ['/m2.png'],
    thumbnails: ['/t31.png', '/t32.png', '/t33.png', '/t34.png'],
  },
];

const Card = ({ title, tags, mainImages, centerText, thumbnails }) => {
  return (
    <div className="w-[400px] h-[500px] rounded-[20px] border border-[#D1C4E9] bg-[#EDE7F6] p-4 box-border flex flex-col shadow-md justify-between">
      {/* Title and Tags */}
      <div className="flex justify-between items-center">
        <h2 className="font-poppins font-semibold text-[25px] leading-[40px] tracking-[0.04em] text-[#7E57C2] w-[188px] h-[30px] text-left">
          {title}
        </h2>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`bg-[#7E57C2] text-white text-[14px] px-3 py-1 rounded-[10px] h-[38px] flex items-center justify-center ${
                index === 0 ? 'w-[75px]' : 'w-[139px]'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-[305px] rounded-[20px] border border-[#D1C4E9] bg-white overflow-hidden mt-4 flex items-center justify-center">
        {mainImages.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`main-${i}`}
            width={395}
            height={305}
            className="rounded-[20px]"
            style={{ objectFit: 'contain' }}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="w-full flex items-center justify-between overflow-x-auto mt-2">
        {thumbnails.map((src, i) => (
          <div
            key={i}
            className="w-[85px] h-[79px] border border-[#D1C4E9] rounded-[20px] overflow-hidden flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`thumb-${i}`}
              width={85}
              height={79}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-4 justify-center py-12">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
