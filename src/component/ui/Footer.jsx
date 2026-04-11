import logo from "../../assets/images/ff_logo.webp";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-gray-300 px-6 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* 🔹 LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
            <h2 className="text-white font-semibold text-lg">
              Fashion & Future
            </h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Where creativity meets excellence. Shaping tomorrow’s fashion
            leaders with innovation and passion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-yellow-500 hover:text-black transition"
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>
        </div>

        {/* 🔹 MIDDLE */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-yellow-400 transition">
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
        </div>

        {/* 🔹 RIGHT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-sm">

            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=2nd+Floor+Railway+Road+Sonipat+Haryana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-yellow-400 transition"
            >
              <FaMapMarkerAlt className="mt-1" />
              <span>
                2nd Floor, Railway Rd,<br />
                Above Durga Medical Store,<br />
                Opp. Parshvnath City,<br />
                Geeta Colony, Indira Colony,<br />
                Sonipat, Haryana 131001
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <FaPhoneAlt />
              +91 98765 43210
            </a>

            {/* Email */}
            <a
              href="mailto:admissions@fashionandfuture.edu"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <FaEnvelope />
              admissions@fashionandfuture.edu
            </a>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

        <p>© {year} Fashion & Future Institute. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="/privacy" className="hover:text-yellow-400">Privacy</Link>
          <Link to="/terms" className="hover:text-yellow-400">Terms</Link>
          <Link to="/cookies" className="hover:text-yellow-400">Cookies</Link>
        </div>
      </div>



      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
         {/* WhatsApp Button */}
         <a
           href="https://wa.me/917015231649"
           target="_blank"
           rel="noopener noreferrer"
           className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
           title="Chat on WhatsApp"
         >
           <FaWhatsapp className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
         </a>
       
         {/* Call Button */}
         <a
           href="tel:+917015231649"
           className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
           title="Call Us"
         >
           <FaPhone className="text-black w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
         </a>
       </div>
    </footer>
  );
}