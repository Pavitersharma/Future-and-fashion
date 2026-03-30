import React from 'react'
import bgimg from "../../assets/images/hero.webp"

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="logo"
            className="w-24 h-24 rounded-full border-2 border-yellow-500"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight">
          Shape Your Fashion
          <br />
          <span className="text-yellow-400 italic">Future</span>
        </h1>

        {/* Text */}
        <p className="mt-4 text-sm md:text-lg text-gray-300">
          Where creativity meets excellence...
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-400 transition">
            Explore Programs →
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Book a Tour
          </button>
        </div>
      </div>
    </section>
  )
}