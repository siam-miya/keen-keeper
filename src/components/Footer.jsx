import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';
const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#244d40] text-white py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h1>

        <p className="text-gray-300 text-center max-w-2xl text-sm leading-relaxed mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>
          <div className="flex gap-4">

            <a href="#" className="w-10 h-10 bg-white rounded-full flex justify-center items-center text-[#244d40] hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex justify-center items-center text-[#244d40] hover:bg-gray-200 transition-colors">
              <FaFacebookF size={20} />
            </a>

            <a href="#" className="w-10 h-10 bg-white rounded-full flex justify-center items-center text-[#244d40] hover:bg-gray-200 transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>

        </div>

        <div className="w-full border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to={"/"} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to={"/"} className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to={"/"} className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;