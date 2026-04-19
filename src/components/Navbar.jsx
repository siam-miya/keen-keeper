import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { NavLink } from 'react-router'; // Note: react-router-dom kora uchit
import { CiHome, CiMenuBurger } from 'react-icons/ci';
import { TfiStatsUp } from 'react-icons/tfi';
import { MdOutlineWatchLater, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home", icon: <CiHome /> },
    { path: "/timeline", name: "Timeline", icon: <MdOutlineWatchLater /> },
    { path: "/stats", name: "Stats", icon: <TfiStatsUp /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </div>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 font-medium transition-colors ${
                      isActive ? "bg-[#244D3F] text-white py-2 px-4 rounded-2xl" : "text-gray-600 hover:text-blue-500"
                    }`
                  }
                >
                  <span className="text-xl">{link.icon}</span>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-gray-700 focus:outline-none"
            >
              {isOpen ? <MdClose /> : <CiMenuBurger />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden absolute w-full bg-white border-t transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)} // Click korle menu bondho hoye jabe
                className={({ isActive }) =>
                  `flex items-center gap-3 text-lg font-medium ${
                    isActive ? "text-blue-600" : "text-gray-600"
                  }`
                }
              >
                <span className="text-2xl">{link.icon}</span>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;