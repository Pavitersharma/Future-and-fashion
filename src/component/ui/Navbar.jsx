import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ff_logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#4b4b4b] text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* 🔹 Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-lg font-semibold tracking-wide">
            Fashion & Future
          </h1>
        </Link>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/program">Programs</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* 🔹 Apply Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full">
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

      {/* 🔥 Animated Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-3 bg-[#4b4b4b]">

          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
            Home
          </Link>

          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
            About
          </Link>

          <Link to="/program" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
            Programs
          </Link>

          <Link to="/admissions" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
            Admissions
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
            Contact
          </Link>

          <div className="pt-3">
            <button className="w-full bg-yellow-500 text-black py-2 rounded-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}