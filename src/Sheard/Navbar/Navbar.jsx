import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = (
    <>
      <a href="#home" className="hover:text-yellow-500">
        Home
      </a>
      <a href="#contact" className="hover:text-yellow-500">
        Contact Us
      </a>
      <a href="#dashboard" className="hover:text-yellow-500">
        Dashboard
      </a>
      <a href="#menu" className="hover:text-yellow-500">
        Our Menu
      </a>
      <a href="#shop" className="hover:text-yellow-500">
        Our Shop
      </a>
      <div className="relative">
        <a href="#cart" className="hover:text-yellow-500">
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            1
          </span>
          🛒
        </a>
      </div>
      <a href="#logout" className="hover:text-yellow-500">
        Sign Out
      </a>
    </>
  );
  return (
    <div>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">Bistro Boss</div>
          <div className="hidden md:flex space-x-6">{items}</div>
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden bg-gray-700">{items}</div>}
      </nav>
    </div>
  );
};

export default Navbar;
