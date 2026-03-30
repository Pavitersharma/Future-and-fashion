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
  {
    id: 1,
    icon: "🎨",
    title: "Fashion Design",
    duration: "3 Years",
    desc: "Master the art of creating innovative designs.",
    tags: ["Drawing", "Garments", "Textile"],
  },
  {
    id: 2,
    icon: "✨",
    title: "Fashion Styling",
    duration: "2 Years",
    desc: "Develop your eye for style.",
    tags: ["Styling", "Shopping", "Trends"],
  },
  {
    id: 3,
    icon: "📈",
    title: "Fashion Business",
    duration: "2 Years",
    desc: "Understand business side of fashion.",
    tags: ["Marketing", "Retail", "Brand"],
  },
  {
    id: 4,
    icon: "✂️",
    title: "Pattern Making",
    duration: "1 Year",
    desc: "Learn technical pattern making.",
    tags: ["CAD", "Fit", "Design"],
  },
  {
    id: 5,
    icon: "📸",
    title: "Fashion Photography",
    duration: "1.5 Years",
    desc: "Capture fashion through lens.",
    tags: ["Lighting", "Editing"],
    featured: true,
  },
  {
    id: 6,
    icon: "🛍️",
    title: "Merchandising",
    duration: "2 Years",
    desc: "Master retail & planning.",
    tags: ["Buying", "Inventory"],
  },
];




export default function FFInstitute() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);






  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      alt: "Fashion runway show",
      style: {
        gridColumn: "1 / 3",
        gridRow: "1 / 2",
        height: "340px",
      },
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
      alt: "Sewing machine craftsmanship",
      style: {
        gridColumn: "3 / 4",
        gridRow: "1 / 2",
        height: "340px",
      },
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80",
      alt: "Students collaborating on designs",
      style: {
        gridColumn: "1 / 2",
        gridRow: "2 / 3",
        height: "300px",
      },
    },
  ];

  return (
    <>
    
    <div
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{
        background: "#faf9f7",
        fontFamily: "'Georgia', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.25s; }
        .delay-3 { transition-delay: 0.4s; }
        .delay-4 { transition-delay: 0.55s; }
        .delay-5 { transition-delay: 0.7s; }

        .img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.14);
        }
        .img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(196,150,70,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }
        .img-wrap:hover img {
          transform: scale(1.03);
        }

        .gold-line {
          width: 36px;
          height: 2px;
          background: #c49646;
          margin: 10px 0 28px 0;
        }

        .feature-item {
          padding: 0;
        }
        .feature-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          color: #1a1a1a;
          letter-spacing: 0.01em;
          margin-bottom: 3px;
        }
        .feature-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: #888;
          font-weight: 300;
        }

        .learn-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #c49646;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.02em;
          border-bottom: 1px solid transparent;
          padding-bottom: 1px;
          transition: border-color 0.2s, gap 0.2s;
        }
        .learn-link:hover {
          border-color: #c49646;
          gap: 10px;
        }

        .about-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c49646;
          font-weight: 500;
        }

        .heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          line-height: 1.18;
          color: #111;
          font-weight: 700;
          margin: 0;
        }
        .heading-italic {
          font-style: italic;
          color: #c49646;
          font-weight: 700;
        }

        .body-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.925rem;
          color: #555;
          line-height: 1.78;
          font-weight: 300;
        }

        .divider {
          border: none;
          border-top: 1px solid #e8e3da;
          margin: 32px 0;
        }
      `}</style>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "72px",
          maxWidth: "1100px",
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* Left: Image */}
        <div
          className={`img-wrap fade-up delay-1 ${visible ? "visible" : ""}`}
          style={{ height: "520px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
            alt="Fashion students collaborating"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&q=80";
            }}
          />
        </div>

        {/* Right: Content */}
        <div>
          {/* Label */}
          <div className={`fade-up delay-1 ${visible ? "visible" : ""}`}>
            <span className="about-label">About F&F Institute</span>
            <div className="gold-line" />
          </div>

          {/* Heading */}
          <div className={`fade-up delay-2 ${visible ? "visible" : ""}`}>
            <h2 className="heading">
              Empowering the Next
              <br />
              Generation of{" "}
              <span className="heading-italic">Fashion Leaders</span>
            </h2>
          </div>

          {/* Body */}
          <div
            className={`fade-up delay-3 ${visible ? "visible" : ""}`}
            style={{ marginTop: "28px" }}
          >
            <p className="body-text">
              Fashion & Future Institute has been at the forefront of fashion
              education for over 15 years. We combine traditional craftsmanship
              with cutting-edge industry practices.
            </p>
            <p className="body-text" style={{ marginTop: "16px" }}>
              Our comprehensive programs are designed by industry experts and
              taught by accomplished professionals who bring real-world
              experience into the classroom.
            </p>
          </div>

          <hr className="divider" />

          {/* Features Grid */}
          <div
            className={`fade-up delay-4 ${visible ? "visible" : ""}`}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px 40px",
            }}
          >
            {features.map((f) => (
              <div key={f.title} className="feature-item">
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`fade-up delay-5 ${visible ? "visible" : ""}`}
            style={{ marginTop: "32px" }}
          >
            <a href="#" className="learn-link">
              Learn more about us
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
                  stroke="#c49646"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>


    
<section className="bg-[#faf9f7] py-20 px-6">
      
      {/* Header */}
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

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {programs.map((p) => (
          <div
            key={p.id}
            className={`p-6 rounded-xl border transition hover:-translate-y-1 hover:shadow-xl
            ${
              p.featured
                ? "bg-yellow-50 border-yellow-300 shadow-md"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Top */}
            <div className="flex justify-between mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg">
                {p.icon}
              </div>
              <span className="text-xs text-yellow-600 border px-2 py-1 rounded-full bg-yellow-50">
                {p.duration}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`font-serif font-semibold text-lg ${
                p.featured ? "text-yellow-600" : ""
              }`}
            >
              {p.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-gray-500 mt-2">{p.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>


<section className="bg-[#f5f4f1] py-24 px-6">
      
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-yellow-600">
          Why Choose Us
        </p>

        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">
          Excellence in Fashion{" "}
          <span className="text-yellow-600 italic">Education</span>
        </h2>

        <p className="text-gray-500 mt-4 text-sm md:text-base">
          We provide everything you need to succeed in fashion
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {featureData.map((f) => (
          <div
            key={f.id}
            className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
            ${
              f.featured
                ? "bg-yellow-50 border-yellow-300 shadow-md"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg mb-4">
              {f.icon}
            </div>

            <h3 className={`font-serif font-semibold text-lg ${f.featured ? "text-yellow-600" : ""}`}>
              {f.title}
            </h3>

            <p className="text-sm text-gray-500 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>


    <section className="bg-[#f5f4f1] py-24 px-6">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-yellow-600">
          Campus Life
        </p>

        <div className="w-10 h-[2px] bg-yellow-600 mx-auto mt-2"></div>

        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4">
          Experience F&amp;F
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Step into our world of creativity and innovation
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {/* Big Image */}
        <div className="sm:col-span-2 h-[300px] md:h-[340px] overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
            alt="runway"
          />
        </div>

        {/* Right Top */}
        <div className="h-[300px] md:h-[340px] overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
            alt="sewing"
          />
        </div>

        {/* Bottom */}
        <div className="h-[260px] md:h-[300px] overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
            alt="students"
          />
        </div>

      </div>
    </section>



    </>
  );
}