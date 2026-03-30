import React, { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
       <nav className="bg-[#4b4b4b] text-white px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-lg font-semibold">Fashion & Future</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li className="text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Programs</li>
          <li className="hover:text-yellow-400 cursor-pointer">Admissions</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="hover:text-yellow-400">Login</button>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 pb-4">
          <p className="text-yellow-400">Home</p>
          <p>About</p>
          <p>Programs</p>
          <p>Admissions</p>
          <p>Contact</p>

          <div className="flex flex-col gap-3 mt-3">
            <button className="text-left">Login</button>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-full">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
       


    </>
  )
}
