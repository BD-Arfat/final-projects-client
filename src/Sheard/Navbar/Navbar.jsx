import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
        }
      >
        Our Shop
      </NavLink>
      <div className="relative">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
          }
        >
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            1
          </span>
          🛒
        </NavLink>
      </div>
      <NavLink
        to="/logout"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
        }
      >
        Sign Out
      </NavLink>
    </>
  );

  return (
    <div>
      <nav className="bg-gray-800 text-white">
        <div className="w-full fixed z-30 bg-gray-800 mx-auto flex justify-between items-center py-4 px-6">
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
