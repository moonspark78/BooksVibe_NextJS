"use client";

import React, { useState, useEffect } from "react";
import { GrTechnology } from "react-icons/gr";
import { FaCloudArrowDown } from "react-icons/fa6";
import { CgMenu } from "react-icons/cg";
import { IoClose, IoMoonOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ferme le menu mobile si l'écran dépasse 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = ["Home", "About", "Benefits", "Courses", "Testimonials", "Contact"];

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg px-6 py-3 flex items-center justify-between z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <GrTechnology size={24} className="text-blue-500" />
          <span className="font-bold text-blue-500 text-lg">Books_Vibes</span>
        </div>

        {/* Desktop Navigation et Boutons */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Liens de navigation */}
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-500 transition font-medium"
              >
                {link}
              </a>
            ))}
          </div>
          {/* Boutons Download et Moon */}
          <div className="flex items-center">
            <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition">
              <FaCloudArrowDown className="mr-2" />
              Download
            </button>
            <button className="ml-4 bg-gray-500 text-white p-2 rounded-full">
              <IoMoonOutline size={20} />
            </button>
          </div>
        </div>

        {/* Icônes pour mobile */}
        <div className="lg:hidden flex items-center space-x-4">
          <button className="bg-gray-500 text-white p-2 rounded-full">
            <IoMoonOutline size={20} />
          </button>
          <CgMenu
            size={28}
            className="text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-start px-6 py-4">
          {/* En-tête du menu mobile */}
          <div className="flex items-center justify-between w-full mb-8">
            <div className="flex items-center space-x-2">
              <GrTechnology size={24} className="text-blue-500" />
              <span className="font-bold text-blue-500 text-lg">Books_Vibes</span>
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
                className="text-gray-700 hover:text-blue-500 transition font-medium border-b border-gray-300 pb-2 w-full"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Bouton Download centré */}
          <button className="mt-8 flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition self-center">
            <FaCloudArrowDown className="mr-2" />
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
