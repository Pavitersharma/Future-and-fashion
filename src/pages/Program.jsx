import React from 'react'
import Navbar from '../component/ui/Navbar'
import Footer from '../component/ui/Footer'




const programs = [
  {
    tag: "Diploma",
    title: "Fashion Design Diploma",
    desc: "A comprehensive program covering all aspects of fashion design, from concept development to final production.",
    duration: "2 Years",
    date: "September 2025",
    modules: ["Pattern Making", "Textile Science", "Fashion Illustration"],
  },
  {
    tag: "Certificate",
    title: "Sustainable Fashion",
    desc: "Learn to create fashion that respects the environment while meeting modern consumer demands.",
    duration: "1 Year",
    date: "January 2025",
    modules: ["Eco-Friendly Materials", "Circular Design", "Ethical Sourcing"],
  },
  {
    tag: "Advanced Diploma",
    title: "Fashion Business & Marketing",
    desc: "Master the business side of fashion, from brand building to global marketing strategies.",
    duration: "18 Months",
    date: "September 2025",
    modules: ["Brand Strategy", "Digital Marketing", "Fashion Retail"],
  },
  {
    tag: "Certificate",
    title: "Digital Fashion & Technology",
    desc: "Explore the intersection of fashion and technology, including 3D design and virtual fashion.",
    duration: "1 Year",
    date: "March 2025",
    modules: ["3D Modeling", "Virtual Fashion", "AR/VR in Fashion"],
  },
  {
    tag: "Certificate",
    title: "Fashion Styling",
    desc: "Develop your eye for fashion styling for editorial, commercial, and personal clients.",
    duration: "6 Months",
    date: "January 2025",
    modules: ["Editorial Styling", "Personal Styling", "Wardrobe Consulting"],
  },
  {
    tag: "Certificate",
    title: "Textile Design",
    desc: "Create innovative textiles using traditional techniques and cutting-edge technologies.",
    duration: "1 Year",
    date: "September 2025",
    modules: ["Print Design", "Weaving", "Textile Manipulation"],
  },
];

export default function Program() {

  
  return (
    <>
      <Navbar/>

      <section className="bg-[#e8dfcc] py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    
    <p className="text-sm tracking-[0.2em] text-gray-700 uppercase">
      Academic Programs
    </p>

    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mt-4 leading-tight text-gray-900">
      Shape Your Future in Fashion
    </h2>

    <p className="max-w-2xl mx-auto text-gray-600 mt-6 text-base md:text-lg">
      Choose from our range of specialized programs designed to prepare you
      for a successful career in the fashion industry.
    </p>

  </div>
</section>

    <section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {programs.map((item, index) => (
        <ProgramCard key={index} {...item} />
      ))}
    </div>

  </div>
</section>




<section className=''>
    <div className="bg-blue-900 p-5 text-white  items-center max-w-full mx-a ">
        <div className="mx-auto ">
            <h2 className='py-10 text-5xl  text-center'>Not Sure Which Program Is Right for You?</h2>
        <p className='text-center text-xl'>Schedule a free consultation with our admissions team to discuss your goals and find <br /> the perfect program for your career aspirations.</p>
        <div className="flex items-center justify-center mt-5 ">
            <a href="" className='text-black px-4 py-2 rounded-2xl bg-amber-400 '>Book a consultation</a>
        </div>
        </div>
    </div>
</section>
    
      <Footer/>


    </>
  )
}
const ProgramCard = ({ tag, title, desc, duration, date, modules }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col">

      {/* Tag */}
      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full w-fit mb-3">
        {tag}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{desc}</p>

      {/* Duration + Date */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span>⏱ {duration}</span>
        <span>📅 {date}</span>
      </div>

      <hr className="mb-4" />

      {/* Modules */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">Key Modules:</p>
        <div className="flex flex-wrap gap-2">
          {modules.map((mod, i) => (
            <span
              key={i}
              className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-md"
            >
              {mod}
            </span>
          ))}
          <span className="text-xs text-gray-500">+2 more</span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-auto bg-gray-900 text-white py-3 rounded-lg hover:bg-black transition">
        Apply Now →
      </button>
    </div>
  );
};

