import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ff_logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#4b4b4b] text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* 🔹 Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-lg font-semibold tracking-wide">
            Fashion & Future
          </h1>
        </div>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/program" className="hover:text-yellow-400 transition">
              Programs
            </Link>
          </li>
          <li>
            <Link to="/admissions" className="hover:text-yellow-400 transition">
              Admissions
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* 🔹 Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="hover:text-yellow-400 transition">
            Login
          </button>

          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition">
            Apply Now
          </button>
        </div>

        {/* 🔹 Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 pb-4 space-y-3 bg-[#4b4b4b]">
          <Link to="/" className="block hover:text-yellow-400">Home</Link>
          <Link to="/about" className="block hover:text-yellow-400">About</Link>
          <Link to="/program" className="block hover:text-yellow-400">Programs</Link>
          <Link to="/admissions" className="block hover:text-yellow-400">Admissions</Link>
          <Link to="/contact" className="block hover:text-yellow-400">Contact</Link>

          <div className="pt-3 space-y-2">
            <button className="block w-full text-left hover:text-yellow-400">
              Login
            </button>

            <button className="w-full bg-yellow-500 text-black py-2 rounded-full">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}