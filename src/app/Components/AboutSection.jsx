'use client';

import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const logos = [
    { name: 'awwwards.', rotate: 'rotate-[15deg]', x: 'lg:translate-x-[10px]', y: 'lg:-translate-y-[5px]', dark: true },
    { name: 'facebook', rotate: 'rotate-[-10deg]', x: 'lg:translate-x-[40px]', y: 'lg:translate-y-[10px]' },
    { name: 'CSS Design Awards', rotate: 'rotate-[20deg]', x: 'lg:translate-x-[60px]', y: 'lg:-translate-y-[2px]' },
    { name: 'CSS WINNER', rotate: 'rotate-[-15deg]', x: 'lg:translate-x-[20px]', y: 'lg:translate-y-[7px]' },
    { name: '/thoughtworks', rotate: 'rotate-[25deg]', x: 'lg:translate-x-[50px]', y: 'lg:translate-y-[5px]' },
    { name: 'AUTODESK', rotate: 'rotate-[-20deg]', x: 'lg:translate-x-[70px]', y: 'lg:translate-y-[12px]' },
    { name: 'Behance', rotate: 'rotate-[18deg]', x: 'lg:translate-x-[90px]', y: 'lg:translate-y-[0px]' },
    { name: 'Dribbble', rotate: 'rotate-[-12deg]', x: 'lg:translate-x-[110px]', y: 'lg:translate-y-[8px]' },
    { name: 'LinkedIn', rotate: 'rotate-[22deg]', x: 'lg:translate-x-[130px]', y: 'lg:-translate-y-[6px]' },
    { name: 'Twitter', rotate: 'rotate-[-17deg]', x: 'lg:translate-x-[150px]', y: 'lg:translate-y-[10px]' },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-12 py-10 bg-gradient-to-b from-lime-300 via-[#D3FFD3] to-white flex flex-col items-center justify-center text-black relative overflow-hidden select-none">
      
      {/* About Button */}
      <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
        <button className="flex items-center gap-2 px-5 py-2 border-2 border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition duration-300 ease-in-out shadow-md">
          <FaArrowDown className="animate-bounce" />
          About
        </button>
      </div>

      {/* Headline */}
      <div className="p-4 sm:p-6 md:p-10 rounded-md mt-10 text-center max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          I’ve been{' '}
          <span className="bg-black text-white px-3 py-1 rounded-md shadow-lg inline-block">
            Developing
          </span>{' '}
          <br />
          Websites since{' '}
          <span className="inline-block bg-black text-white px-3 py-1 mt-2 rounded-md shadow-lg">
            2013
          </span>
        </h1>
      </div>

      {/* Subtext */}
      <p className="mt-4 mb-2 text-center text-sm sm:text-base max-w-xl text-gray-700 tracking-wide">
        We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.
      </p>

      {/* Logos Section */}
      <div className="mt-12 w-full pt-6 max-w-7xl relative">
        <h2 className="text-xl font-semibold text-left px-4 sm:px-6 md:px-12 mb-6 tracking-wide">
          PREVIOUSLY <br /> WORKED ON
        </h2>

        <div className="relative flex flex-wrap gap-6 justify-center sm:justify-end px-4 sm:px-6 md:px-12">
          {/* Background layer */}
          <div className="absolute inset-0 top-8 bg-white opacity-20 rotate-[-5deg] rounded-lg z-0" />

          {/* Logo Items */}
          {logos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: idx * 0.18,
                ease: 'easeOut',
                type: 'tween',
              }}
              viewport={{ once: false }} // ✅ animate every time in view
              className={`z-10 px-7 py-3 rounded-full text-sm whitespace-nowrap shadow-lg border-2 cursor-pointer select-none
                ${item.dark
                  ? 'bg-black text-white border-white border-dashed'
                  : 'bg-white text-black border-gray-400 border-dashed'}
                transform ${item.rotate} ${item.x} ${item.y}
                hover:scale-110 hover:shadow-2xl hover:z-20 transition-transform duration-300`}
            >
              {item.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
