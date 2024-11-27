"use client";

import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-sky-400 p-4 font-bold">
      <div className="flex items-center justify-between">
        <div className="text-blue-800 text-2xl p-4 font-bold">
          Shoe Galleria..!
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-blue-800 text-2xl ">
            Home
          </a>
          <a href="#collections" className="text-blue-800 text-2xl ">
            Collections
          </a>
          <a href="#contact" className="text-blue-800 text-2xl ">
            Contact
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <IoMdClose className="text-3xl text-blue-800" />
            ) : (
              <IoMdMenu className="text-3xl text-blue-800" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-6 right-0 bg-sky-400 text-white p-4 rounded-md shadow-lg w-full mt-12">
            <a href="#home" className="block py-2 px-4 hover:text-blue-700">
              Home
            </a>
            <a href="#collections" className="block py-2 px-4 hover:text-blue-700">
              Collections
            </a>
            <a href="#contact" className="block py-2 px-4 hover:text-blue-700">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
