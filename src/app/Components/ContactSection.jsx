'use client';

import { motion } from 'framer-motion';
import { FiPhoneCall, FiSend } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-[#88bee1] to-[#a2d629] py-20 px-4 sm:px-8 md:px-16 rounded-t-3xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Content */}
        <motion.div
          className="flex-1"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <button className="mb-4 text-black border border-black px-4 py-1 rounded-full flex items-center gap-2 text-sm font-medium">
            ↓ Contact
          </button>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black">
            Interested in <br />
            <span className="bg-black text-white px-2 inline-block">work</span>{' '}
            together?
          </h2>

          <p className="mt-6 text-gray-700 text-sm sm:text-base max-w-md">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>

          <button className="mt-6 border border-black rounded-full px-5 py-2 flex items-center gap-2 text-black hover:bg-black hover:text-white transition-all duration-300">
            <FiPhoneCall className="text-lg" />
            Schedule a Call
          </button>
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="flex-1 w-full lg:max-w-md bg-black text-white rounded-3xl p-6 sm:p-8 space-y-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-black border-b border-lime-400 py-2 placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-black border-b border-gray-600 py-2 placeholder-gray-400 focus:outline-none"
          />
          <textarea
            placeholder="Describe your project"
            rows="3"
            className="w-full bg-black border-b border-gray-600 py-2 placeholder-gray-400 focus:outline-none resize-none"
          ></textarea>

          <div className="flex items-center gap-4 pt-2">
            <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
              <FiSend className="text-md" />
              Send
            </button>
            <span className="text-gray-400 text-sm">or</span>
            <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
              <MdOutlineMail className="text-lg" />
              Contact me
            </button>
          </div>

          <div className="pt-4 flex items-center justify-between text-sm text-gray-400">
            <p>@williamrey</p>
            <div className="flex items-center gap-4 text-white">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
