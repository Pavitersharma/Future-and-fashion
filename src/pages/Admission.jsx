import React from "react";
import Navbar from "../component/ui/Navbar";
import Footer from "../component/ui/Footer";

export default function Admission() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-4 py-12 md:py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm md:text-lg font-semibold tracking-widest text-gray-500 uppercase">
            Join Our Community
          </h2>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Start Your Fashion Journey
          </h1>

          <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
            Take the first step towards your dream career. Apply now and join a
            community of passionate fashion innovators.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-[#e8dcc3] py-12 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT FORM */}
          <div className="bg-[#f8f8f8] rounded-xl p-6 md:p-8 border border-gray-200 max-w-md">

  <h2 className="text-xl font-serif mb-6 text-gray-800">
    Apply Now
  </h2>

  {/* NAME */}
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div>
      <label className="text-sm text-gray-600 mb-1 block">First Name</label>
      <input
        type="text"
        placeholder="John"
        className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm 
        placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>

    <div>
      <label className="text-sm text-gray-600 mb-1 block">Last Name</label>
      <input
        type="text"
        placeholder="Doe"
        className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm 
        placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
  </div>

  {/* EMAIL */}
  <div className="mb-4">
    <label className="text-sm text-gray-600 mb-1 block">Email</label>
    <input
      type="email"
      placeholder="john@example.com"
      className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm 
      placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
    />
  </div>

  {/* PHONE */}
  <div className="mb-4">
    <label className="text-sm text-gray-600 mb-1 block">Phone</label>
    <input
      type="text"
      placeholder="+91 (555) 000-0000"
      className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm 
      placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
    />
  </div>

  {/* PROGRAM */}
  <div className="mb-4">
    <label className="text-sm text-gray-600 mb-1 block">Program of Interest</label>
    <select
      className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm 
      focus:outline-none focus:ring-1 focus:ring-black"
    >
      <option>Select a program</option>
      <option>Fashion Design</option>
      <option>Fashion Marketing</option>
      <option>Textile Design</option>
    </select>
  </div>

  {/* EDUCATION */}
  <div className="mb-4">
    <label className="text-sm text-gray-600 mb-1 block">Educational Background</label>
    <select
      className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm 
      focus:outline-none focus:ring-1 focus:ring-black"
    >
      <option>Select your education level</option>
      <option>High School</option>
      <option>Bachelor’s Degree</option>
      <option>Master’s Degree</option>
    </select>
  </div>

  {/* TEXTAREA */}
  <div className="mb-5">
    <label className="text-sm text-gray-600 mb-1 block">Tell Us About Yourself</label>
    <textarea
      placeholder="Share your passion for fashion and career goals..."
      className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-sm 
      placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black resize-none h-28"
    ></textarea>
  </div>

  {/* BUTTON */}
  <button className="w-full bg-[#111827] text-white py-3 rounded-md text-sm font-medium 
  flex items-center justify-center gap-2 hover:bg-black transition">
     Submit Application
  </button>

</div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* REQUIREMENTS */}
            <div>
              <h3 className="text-xl font-serif mb-4">Admission Requirements</h3>

              <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
                {[
                  "High school diploma or equivalent",
                  "Portfolio of creative work (5-10 pieces)",
                  "Personal statement (500 words)",
                  "Two letters of recommendation",
                  "English proficiency test",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-green-600 mt-1">✔</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* DATES */}
            <div className="bg-[#d8ccb1] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-serif mb-4">Important Dates</h3>

              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <span>Early Deadline</span>
                  <span className="font-medium">March 15, 2025</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span>Regular Deadline</span>
                  <span className="font-medium">June 1, 2025</span>
                </div>

                <div className="flex justify-between">
                  <span>Semester Begins</span>
                  <span className="font-medium">September 8, 2025</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}