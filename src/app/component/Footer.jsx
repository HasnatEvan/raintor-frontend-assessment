import { MdEmail, MdCall } from "react-icons/md";
import { FaTwitter, FaInstagram, FaFacebookF, FaBehance, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-8 md:px-10 rounded-t-3xl">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left">
          <h1 className="text-[#D3FF57] text-xl sm:text-2xl font-bold">
            DEV<span className="text-white">L</span>OP.
            <span className="text-[#D3FF57]">ME</span>
          </h1>
        </div>

        {/* Grid section right aligned */}
        <div className="w-full flex justify-around md:justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm sm:text-base text-gray-300 max-w-full sm:max-w-xl md:max-w-5xl text-center md:text-left">
            {/* Column 1 */}
            <div>
              <h3 className="text-gray-400 font-semibold mb-2 flex items-center justify-center md:justify-start gap-2 text-base sm:text-lg">
                <MdEmail className="text-[#D3FF57]" /> Say hello
              </h3>
              <p className="mb-1 break-words">HELLO@DEVLOP.ME.COM</p>
              <p className="break-words">MAHBUBUL@ME.COM</p>
              <h3 className="text-gray-400 font-semibold mt-5 mb-2 flex items-center justify-center md:justify-start gap-2 text-base sm:text-lg">
                <MdCall className="text-[#D3FF57]" /> Call
              </h3>
              <p className="mb-1">+784549 4981 00</p>
              <p>+8845 0100 211</p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-gray-400 font-semibold mb-2 text-base sm:text-lg">Menu</h3>
              <ul className="space-y-1">
                <li className="hover:text-[#D3FF57] cursor-pointer transition">HOME</li>
                <li className="hover:text-[#D3FF57] cursor-pointer transition">ABOUT</li>
                <li className="hover:text-[#D3FF57] cursor-pointer transition">PORTFOLIO</li>
                <li className="hover:text-[#D3FF57] cursor-pointer transition">BLOG</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-gray-400 font-semibold mb-2 flex items-center justify-center md:justify-start gap-2 text-base sm:text-lg">Social</h3>
              <ul className="space-y-1 flex flex-col">
                <li className="flex items-center gap-2 justify-center md:justify-start hover:text-[#1DA1F2] cursor-pointer transition">
                  <FaTwitter /> TWITTER
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start hover:text-[#E1306C] cursor-pointer transition">
                  <FaInstagram /> INSTAGRAM
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start hover:text-[#1877F2] cursor-pointer transition">
                  <FaFacebookF /> FACEBOOK
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start hover:text-[#1769FF] cursor-pointer transition">
                  <FaBehance /> BEHANCE
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start hover:text-[#EA4C89] cursor-pointer transition">
                  <FaDribbble /> DRIBBBLE
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-10 text-xs sm:text-sm text-gray-400 space-y-2 md:space-y-0 text-center md:text-left">
          <p>© devlop.me 2022</p>
          <p>BESNIK</p>
          <p>PRIVACY - TERMS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
