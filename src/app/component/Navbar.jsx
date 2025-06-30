'use client';
import { useState } from "react";
import { FaArrowRight, FaBars, FaTimes, FaHome, FaUserAlt, FaBriefcase, FaBlog } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
                {/* Logo */}
                <div className="relative inline-block">
                    {/* Gradient BG behind text */}
                    <div className="absolute -left-8 -bottom-2 w-40 h-16 bg-[#C5FFEE] blur-2xl opacity-80 rounded-full z-0"></div>

                    {/* Logo Text */}
                    <Link href="/" className="relative z-10 text-3xl font-extrabold text-black">
                        <span>DEV</span>
                        <span className="text-black/80">LOP.</span>
                        <span>ME</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-black font-medium">
                    <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                        <FaHome /> Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-600 flex items-center gap-1">
                        <FaUserAlt /> About
                    </Link>
                    <Link href="/portfolio" className="hover:text-gray-600 flex items-center gap-1">
                        <FaBriefcase /> Portfolio
                    </Link>
                    <Link href="/blog" className="hover:text-gray-600 flex items-center gap-1">
                        <FaBlog /> Blog
                    </Link>

                    {/* Button */}
                    <Link
                        href="/contact"
                        className="flex items-center border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition"
                    >
                        Start Project
                        <FaArrowRight className="ml-2" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <FaTimes size={20} className="text-black" />
                        ) : (
                            <FaBars size={20} className="text-black" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white px-6 pb-4 space-y-4 text-black font-medium">
                    <Link href="/" className="block hover:text-gray-600 flex items-center gap-2">
                        <FaHome /> Home
                    </Link>
                    <Link href="/about" className="block hover:text-gray-600 flex items-center gap-2">
                        <FaUserAlt /> About
                    </Link>
                    <Link href="/portfolio" className="block hover:text-gray-600 flex items-center gap-2">
                        <FaBriefcase /> Portfolio
                    </Link>
                    <Link href="/blog" className="block hover:text-gray-600 flex items-center gap-2">
                        <FaBlog /> Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full flex items-center justify-center border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition"
                    >
                        <MdContactPage className="mr-2" />
                        Start Project
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
