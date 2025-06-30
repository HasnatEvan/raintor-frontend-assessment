'use client';

import React, { useEffect, useState } from "react";
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma, FaArrowDown,
} from "react-icons/fa";
import { SiWebflow, SiNextdotjs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from 'react-parallax-tilt';

const ApiSection = () => {
    const [skills, setSkills] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;

    useEffect(() => {
        fetch("/api.json")
            .then((res) => res.json())
            .then((data) => setSkills(data))
            .catch((err) => console.error("Failed to load skills:", err));
    }, []);

    const handleNext = () => {
        if ((currentPage + 1) * cardsPerPage < skills.length) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const getIcon = (title) => {
        const lower = title.toLowerCase();
        if (lower.includes("html") || lower.includes("css")) return <FaHtml5 size={40} />;
        if (lower.includes("javascript")) return <FaJsSquare size={40} />;
        if (lower.includes("react")) return <FaReact size={40} />;
        if (lower.includes("webflow")) return <SiWebflow size={40} />;
        if (lower.includes("figma")) return <FaFigma size={40} />;
        if (lower.includes("next")) return <SiNextdotjs size={40} />;
        return <FaReact size={40} />;
    };

    const paginatedSkills = skills.slice(
        currentPage * cardsPerPage,
        currentPage * cardsPerPage + cardsPerPage
    );

    return (
        <div className="bg-black text-white py-16 px-8 md:px-20 min-h-screen overflow-hidden">

            <div className="relative ">
               
                <div className="absolute -top-14  left-0 z-10">
                    <button className="flex items-center gap-2 px-5 py-2 border-2 border-gray-400  text-gray-400 rounded-full text-sm font-semibold hover:bg-black  transition duration-300 ease-in-out shadow-md">
                        <FaArrowDown className="animate-bounce" />
                        Why Choose me
                    </button>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mt-8">
                    My Extensive <br /> List of Skills
                </h2>

            </div>



            {/* Subtext & Pagination */}
            <div className="flex flex-col items-end mb-6 mt-5 text-right">
                <div className="relative w-fit">
                    <p className="max-w-md text-gray-400">
                        Building the world’s best marketing. Your trusted partner for strategy, design, and dev.
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-600 mt-1"></div>
                </div>

                <div className="flex gap-4 mt-4">
                    <button
                        onClick={handlePrev}
                        className="border rounded-full p-3 hover:bg-gray-800"
                    >
                        ←
                    </button>
                    <button
                        onClick={handleNext}
                        className="border rounded-full p-3 hover:bg-gray-800"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* Cards Section with Animation and Tilt */}
         <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {paginatedSkills.map((skill, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={false}
                className="bg-[#111] rounded-2xl p-6 shadow-md transition-all duration-300 hover:scale-105 flex flex-col justify-between"
              >
                <div>
                  <div className="text-green-400 mb-4">{getIcon(skill.title)}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{skill.excerpt}</p>
                </div>

                <div className="mt-auto flex justify-end">
                  <div className="flex items-center gap-2 text-sm text-white hover:underline cursor-pointer transition-all duration-200">
                    <span>Read More</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </Tilt>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
        </div>
    );
};

export default ApiSection;
