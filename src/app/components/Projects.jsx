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
		mainImages: ['/m3.png'],
		thumbnails: ['/t31.png', '/t32.png', '/t33.png', '/t34.png'],
	},
];

const Card = ({ title, tags, mainImages, centerText, thumbnails }) => {
	return (
		<div className="w-[422px] h-[500px] rounded-[20px] border border-[#D1C4E9] bg-[#EDE7F6] p-4 box-border flex flex-col shadow-md justify-between">
			{/* Title and Tags */}
			<div className="flex justify-between items-center mb-[px]">
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

			{/* Main Image Area */}
			<div className="relative w-[395px] h-[305px] rounded-[20px] border border-[#D1C4E9] bg-white overflow-hidden mx-auto flex items-center justify-center">
				{/* Main Image */}
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
			<div className="w-full flex gap-2 overflow-x-auto mt-2 mb-0">
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
							className=""
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
		<div className="flex flex-wrap gap-6 justify-center p-6">
			{cardData.map((card, index) => (
				<Card key={index} {...card} />
			))}
		</div>
	);
};

export default Projects;
