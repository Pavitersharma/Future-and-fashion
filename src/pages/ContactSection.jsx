import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Navbar from '../component/ui/Navbar';
import Footer from '../component/ui/Footer';

const ContactSection = () => {
  return (

    <>

      <Navbar/>


    <section className="bg-[#fdf8e9] py-16 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-4 text-[#1a1a1a]">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs or admissions? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-serif mb-8 italic">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us more about your inquiry..." 
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-600 resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-[#1a1c23] text-white py-4 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Info & Map */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif italic mb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Visit Us */}
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start">
  <div className="mb-4">
    <MapPin size={24} strokeWidth={1.5} />
  </div>

  <h4 className="font-bold text-sm mb-2 text-gray-800">Visit Us</h4>

  <p className="text-sm text-gray-500 leading-relaxed">
    2nd Floor, Railway Rd,<br />
    Above Durga Medical Store,<br />
    Opp. Parshvnath City,<br />
    Geeta Colony, Indira Colony,<br />
    Sonipat, Haryana 131001
  </p>
</div>

              {/* Call Us */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start">
                <div className="mb-4"><Phone size={24} strokeWidth={1.5} /></div>
                <h4 className="font-bold text-sm mb-2 text-gray-800">Call Us</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  +1 (555) 123-4567<br />+1 (555) 987-6543
                </p>
              </div>

              {/* Email Us */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start">
                <div className="mb-4"><Mail size={24} strokeWidth={1.5} /></div>
                <h4 className="font-bold text-sm mb-2 text-gray-800">Email Us</h4>
                <p className="text-sm text-gray-500 leading-relaxed truncate w-full">
                  info@fashionandfuture.edu<br />admissions@fashionandfuture.edu
                </p>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start">
                <div className="mb-4"><Clock size={24} strokeWidth={1.5} /></div>
                <h4 className="font-bold text-sm mb-2 text-gray-800">Office Hours</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 2PM
                </p>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-sm border border-gray-100 mt-4">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.85685164108!2d77.01963429999999!3d28.99161260000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db11ad8d302f3%3A0xb4409c06fa3847ad!2sFashion%20and%20future%20institute!5e0!3m2!1sen!2sin!4v1775728892323!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          </div>

        </div>
      </div>
    </section>


    <Footer/>
    
    </>
    
  );
};

export default ContactSection;