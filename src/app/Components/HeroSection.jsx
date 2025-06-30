'use client';

import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const animatedText = 'Your Website Develop';
  const cleanText = animatedText.replace(/\.$/, '');

  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < cleanText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + cleanText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCharIndex(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  const formatText = (text) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      // হাইলাইট করার জন্য এখানে পরিবর্তন করতে পারো
      const isHighlighted = word === 'Partner' || word === 'Develop';
      return (
        <span
          key={index}
          className={isHighlighted ? 'bg-black text-white px-2 rounded-sm' : ''}
        >
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <section className="relative mt-16 min-h-[60vh] sm:min-h-[85vh] px-2 sm:px-6 md:px-10 flex items-center justify-center text-black overflow-hidden ">
      {/* Background Image */}
      <Image
        src="/assets/image/Banner.png"
        alt="Banner"
        fill
        className="object-cover z-0"
        quality={100}
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
      />

      {/* Social Icons */}
      <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col items-start gap-4 z-30 text-black">
        <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
          <FaTwitter className="text-xl" />
          <span className="text-sm">@williamnoy</span>
        </div>
        <div className="flex items-center gap-2 hover:text-pink-500 cursor-pointer">
          <FaInstagram className="text-xl" />
          <span className="text-sm">@williamnoy</span>
        </div>
        <div className="flex items-center gap-2 hover:text-blue-700 cursor-pointer">
          <FaFacebook className="text-xl" />
          <span className="text-sm">@williamnoy</span>
        </div>
        <div className="w-px h-10 bg-black mt-2 ml-2" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center sm:text-left max-w-md sm:max-w-2xl md:max-w-3xl px-2 sm:px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black min-h-[4rem]">
          {/* প্রথম লাইন: fixed */}
          {formatText('Trusted Partner For')}
          <br />
          {/* দ্বিতীয় লাইন: টাইপিং এনিমেশন */}
          {formatText(displayText)}
          {/* টাইপিং শেষ হলে '.' যোগ করবে */}
          {charIndex === cleanText.length && '.'}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700">
          Building the world’s best marketing websites for over a decade.
          <br />
          <span className="text-black/80">
            Your trusted partner for strategy, design, and dev.
          </span>
        </p>

        {/* CTA Button */}
        <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start sm:justify-start justify-center gap-3">
          <button className="border-2 border-gray-200 px-4 py-2 rounded-2xl flex items-center gap-2 bg-white transition font-medium hover:bg-black hover:text-white text-sm sm:text-base">
            <FiPhoneCall className="text-lg" />
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
