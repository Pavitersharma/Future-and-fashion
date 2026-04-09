import React from "react";
import Navbar from "../component/ui/Navbar";
import Footer from "../component/ui/Footer";

export default function About() {
  const values = [
    {
      title: "Innovation",
      desc: "We embrace cutting-edge technology and forward-thinking design methodologies to prepare students for the future of fashion.",
    },
    {
      title: "Sustainability",
      desc: "Environmental responsibility is woven into every aspect of our curriculum, from material selection to production processes.",
    },
    {
      title: "Excellence",
      desc: "We maintain the highest standards in fashion education, pushing our students to achieve their full creative potential.",
    },
    {
      title: "Diversity",
      desc: "Our global community celebrates diverse perspectives, cultures, and approaches to fashion design and innovation.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* SECTION 1 */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mt-2">
              About Fashion & Future
            </h2>
            <p className="text-gray-600 mt-4">
              For over two decades, we have been shaping the next generation of
              fashion innovators, blending traditional craftsmanship with modern
              technology.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            
            {/* Image */}
            <div className="relative flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2"
                alt="fashion students"
                className="rounded-xl shadow-lg w-full max-w-md"
              />

              {/* Badge */}
              <div className="absolute bottom-4 right-4 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">25+</h3>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                At Fashion & Future Institute, we believe that fashion is more
                than clothing—it’s a powerful form of expression, innovation,
                and cultural dialogue.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to empower aspiring designers with the skills,
                vision, and industry connections they need to shape the future
                of fashion.
              </p>
              <p className="text-gray-600">
                We combine rigorous academic training with hands-on experience,
                ensuring our graduates are prepared to lead in an ever-evolving
                industry.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "2,500+", label: "Alumni Worldwide" },
              { number: "25+", label: "Years of Excellence" },
              { number: "40+", label: "Partner Brands" },
              { number: "15", label: "Specialized Programs" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-sm border"
              >
                <h4 className="text-2xl font-bold">{item.number}</h4>
                <p className="text-gray-500 mt-2 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2">
              Our Core Values
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 h-full"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}