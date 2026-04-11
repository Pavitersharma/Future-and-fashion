import React, { useState } from "react";
import logo from "../assets/images/ff_logo.webp";
import { Link } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative items-center justify-center px-12">

        {/* Back */}
        <Link to="/" className="absolute top-6 left-6 text-sm text-gray-300 hover:text-white">
          ← Back to Home
        </Link>

        <div className="max-w-md">
          <img src={logo} alt="logo" className="w-16 mb-6 rounded-full" />

          <h1 className="text-3xl font-semibold mb-4">
            Join Our Community
          </h1>

          <p className="text-gray-300 leading-relaxed">
            Create an account to start your journey in fashion education. 
            Join thousands of aspiring designers and innovators.
          </p>
        </div>

        {/* Decorative circles */}
        <div className="absolute w-40 h-40 bg-white/5 rounded-full top-1/4 left-1/3"></div>
        <div className="absolute w-60 h-60 bg-white/5 rounded-full bottom-10 right-10"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">

        <div className="w-full max-w-md">

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-6 text-sm">
            Fill in your details to get started
          </p>

          {/* Full Name */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 block mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 block mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
              >
                👁
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="text-sm text-gray-600 block mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-[#0f172a] text-white py-2 rounded-md hover:bg-[#1e293b] transition">
            Create Account
          </button>

          {/* Footer */}
          <p className="text-sm text-gray-500 mt-6 text-center">
            Already have an account?{" "}
            <span className="text-black font-medium cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}