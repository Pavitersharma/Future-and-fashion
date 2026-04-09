import { useState, useEffect } from "react";

const features = [
  { title: "Expert Faculty", desc: "Learn from industry leaders" },
  { title: "Modern Facilities", desc: "State-of-the-art studios" },
  { title: "Industry Connect", desc: "Network with top brands" },
  { title: "Career Support", desc: "Placement assistance" },
];

const featureData = [
  { id: 1, icon: "🏅", title: "Industry Recognition", desc: "Accredited programs worldwide." },
  { id: 2, icon: "👥", title: "Expert Mentorship", desc: "Learn from industry experts.", featured: true },
  { id: 3, icon: "💼", title: "Career Placement", desc: "95% placement rate." },
  { id: 4, icon: "🌐", title: "Global Exposure", desc: "International opportunities." },
  { id: 5, icon: "📖", title: "Comprehensive Curriculum", desc: "Creative + technical skills." },
  { id: 6, icon: "⭐", title: "Modern Facilities", desc: "Studios, labs, resources." },
];

const programs = [
  { id: 1, icon: "🎨", title: "Fashion Design", duration: "3 Years", desc: "Master the art of creating innovative designs.", tags: ["Drawing", "Garments", "Textile"] },
  { id: 2, icon: "✨", title: "Fashion Styling", duration: "2 Years", desc: "Develop your eye for style.", tags: ["Styling", "Shopping", "Trends"] },
  { id: 3, icon: "📈", title: "Fashion Business", duration: "2 Years", desc: "Understand business side of fashion.", tags: ["Marketing", "Retail", "Brand"] },
  { id: 4, icon: "✂️", title: "Pattern Making", duration: "1 Year", desc: "Learn technical pattern making.", tags: ["CAD", "Fit", "Design"] },
  { id: 5, icon: "📸", title: "Fashion Photography", duration: "1.5 Years", desc: "Capture fashion through lens.", tags: ["Lighting", "Editing"], featured: true },
  { id: 6, icon: "🛍️", title: "Merchandising", duration: "2 Years", desc: "Master retail & planning.", tags: ["Buying", "Inventory"] },
];

export default function FFInstitute() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-[#faf9f7] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className={`rounded-xl overflow-hidden shadow-xl fade-up ${visible ? "visible" : ""} h-[320px] sm:h-[400px] md:h-[500px]`}>
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
              className="w-full h-full object-cover"
              alt="fashion"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <p className="text-xs tracking-widest uppercase text-yellow-600">
              About F&F Institute
            </p>

            <div className="w-10 h-[2px] bg-yellow-600 my-3 mx-auto md:mx-0"></div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              Empowering the Next <br />
              Generation of{" "}
              <span className="text-yellow-600 italic">
                Fashion Leaders
              </span>
            </h2>

            <p className="text-gray-500 mt-6">
              Fashion & Future Institute has been at the forefront of fashion education for over 15 years.
            </p>

            <p className="text-gray-500 mt-3">
              Our programs are designed by industry experts with real-world experience.
            </p>

            <hr className="my-6 border-gray-200" />

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title}>
                  <h4 className="text-sm font-medium">{f.title}</h4>
                  <p className="text-xs text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="text-yellow-600 border-b border-transparent hover:border-yellow-600 transition">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="bg-[#faf9f7] py-20 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-widest text-yellow-600 uppercase">
              Our Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Discover Your Path in{" "}
              <span className="text-yellow-600 italic">Fashion</span>
            </h2>
          </div>

          <button className="border px-5 py-2 rounded-md hover:border-yellow-500 hover:text-yellow-600 transition">
            View All →
          </button>
        </div>

        <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div
              key={p.id}
              className={`p-6 rounded-xl border transition hover:-translate-y-1 hover:shadow-xl ${
                p.featured
                  ? "bg-yellow-50 border-yellow-300"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded-lg">
                  {p.icon}
                </div>
                <span className="text-xs text-yellow-600 border px-2 py-1 rounded-full bg-yellow-50">
                  {p.duration}
                </span>
              </div>

              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-[#f5f4f1] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-yellow-600">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">
            Excellence in Fashion{" "}
            <span className="text-yellow-600 italic">Education</span>
          </h2>

          <p className="text-gray-500 mt-4">
            We provide everything you need to succeed in fashion
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {featureData.map((f) => (
            <div
              key={f.id}
              className={`p-6 rounded-xl border hover:shadow-xl ${
                f.featured
                  ? "bg-yellow-50 border-yellow-300"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="bg-[#f5f4f1] py-20 px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-yellow-600">
            Campus Life
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4">
            Experience F&F
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" className="rounded-xl h-[300px] w-full object-cover" />
          <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80" className="rounded-xl h-[300px] w-full object-cover" />
          <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80" className="rounded-xl h-[300px] w-full object-cover" />
        </div>
      </section>
    </>
  );
}