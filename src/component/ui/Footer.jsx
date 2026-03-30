export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-gray-300 px-6 py-16">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Left - Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://via.placeholder.com/40"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-white font-semibold text-lg">
              Fashion & Future
            </h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Where creativity meets excellence. Shaping tomorrow’s fashion
            leaders since 2008.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {["F", "I", "T", "L", "Y"].map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-yellow-500 hover:text-black cursor-pointer transition"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Middle - Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-400 cursor-pointer">Programs</li>
            <li className="hover:text-yellow-400 cursor-pointer">Admissions</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-sm">
            <p>Fashion District</p>
            <p>New York, NY 10001</p>
            <p>+1 (555) 123-4567</p>
            <p>admissions@fashionandfuture.edu</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

        <p>© 2026 Fashion & Future Institute. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <span className="hover:text-yellow-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-yellow-400 cursor-pointer">Terms of Service</span>
          <span className="hover:text-yellow-400 cursor-pointer">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}