"use client";

import React, { useState, useEffect } from "react";
import { GiBookshelf } from "react-icons/gi";
import { FaCloudArrowDown } from "react-icons/fa6";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import ThemeToggle from "@/components/Helper/ThemeToggle";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  // Ferme le menu mobile si l'écran dépasse 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1284) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Benefits",
    "Courses",
    "Testimonials",
    "Contact",
  ];

 

  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] w-full">
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <GiBookshelf size={32} className="text-orange-600" />
          <h1 className="text-xl sm:block md:text-2xl font-bold">
            Books_
            <span className="text-orange-500">Vibes</span>
          </h1>
        </div>

        {/* Desktop Navigation et Boutons */}
        <div className="hidden xl:flex items-center justify-between w-full">
          {/* Navlinks centrés */}
          <div className="flex-1 flex justify-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="navlink hover:text-orange-500 transition font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Boutons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition">
              <FaCloudArrowDown className="mr-2" />
              Download
            </button>
            <ThemeToggle/>
          </div>
        </div>

        {/* Icônes pour mobile */}
        <div className="xl:hidden flex items-center space-x-4">
            <ThemeToggle/>
          <CgMenu
            size={28}
            className="text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        //<div className="fixed inset-0 bg-white z-50 flex flex-col items-start px-6 py-4">
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-start px-6 py-4">
          {/* En-tête du menu mobile */}
          <div className="flex items-center justify-between w-full mb-8">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:block md:text-2xl font-bold text-black dark:text-white">
                Books_
                <span className="text-orange-500">Vibes</span>
              </h1>
            </div>
            <IoClose
              size={28}
              className="text-gray-700 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          {/* Liens de navigation */}
          <div className="flex flex-col space-y-4 w-full">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-100 hover:text-orange-500 transition font-medium border-b border-gray-300 pb-2 w-full"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Bouton Download centré */}
          <div className="w-full flex justify-center mt-8">
            <button className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition w-[60%]">
              <FaCloudArrowDown className="mr-2" />
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
