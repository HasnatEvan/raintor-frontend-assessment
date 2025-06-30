'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaEthereum,
  FaPalette,
  FaLaptopHouse,
  FaUniversalAccess
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const blogData = [
  { id: 1, title: "html", icon: <FaHtml5 />, color: "bg-orange-500 text-white" },
  { id: 2, title: "js", icon: <FaJs />, color: "bg-yellow-400 text-black" },
  { id: 3, title: "css", icon: <FaCss3Alt />, color: "bg-blue-500 text-white" },
  { id: 4, title: "nextjs", icon: <SiNextdotjs />, color: "bg-gray-800 text-white" },
  { id: 5, title: "react", icon: <FaReact />, color: "bg-cyan-500 text-white" },
  { id: 6, title: "web3", icon: <FaEthereum />, color: "bg-purple-600 text-white" },
  { id: 7, title: "design", icon: <FaPalette />, color: "bg-pink-400 text-white" },
  { id: 8, title: "remote", icon: <FaLaptopHouse />, color: "bg-green-500 text-white" },
  { id: 9, title: "typescript", icon: <SiTypescript />, color: "bg-blue-700 text-white" },
  { id: 10, title: "accessibility", icon: <FaUniversalAccess />, color: "bg-indigo-500 text-white" },
];

const SliderSection = () => {
  return (
    <div className="w-full py-6 bg-gradient-to-b from-lime-300 via-[#D3FFD3] to-lime-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          <div className="flex gap-4">
            {blogData.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition cursor-pointer ${item.color} hover:scale-105 duration-200`}
              >
                <span className="text-lg sm:text-xl">{item.icon}</span>
                #{item.title}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SliderSection;
