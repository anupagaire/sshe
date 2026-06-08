export default function About() {
  const pillars = [
    { icon: "🎓", title: "Academic Rigor", desc: "Cutting-edge curriculum designed with industry and academic leaders." },
    { icon: "🔬", title: "Research Focus", desc: "₹50Cr+ annual research funding across 12 dedicated research centres." },
    { icon: "🌐", title: "Global Network", desc: "Alumni in 60+ countries and partnerships with top global universities." },
    { icon: "💡", title: "Innovation Hub", desc: "Startup incubator with 80+ ventures launched in the last decade." },
  ];

  const highlights = [
    { icon: "🏛️", title: "Heritage Campus", desc: "36-acre lush green campus in the heart of the city" },
    { icon: "👨‍🏫", title: "Distinguished Faculty", desc: "800+ faculty including 400+ PhDs from top universities" },
    { icon: "🎯", title: "Outcome-Based Learning", desc: "Curriculum mapped to real-world skills and career outcomes" },
  ];

  return (
    <>
      <style>{`
        .about-section::before {
          content: '';
          position: absolute;
          top: -100px;
          left: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(184,146,42,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .section-label-line::before {
          content: '';
          display: inline-block;
          width: 30px;
          height: 2px;
          background: #b8922a;
          border-radius: 2px;
          margin-right: 10px;
          vertical-align: middle;
        }
        .pillar-card {
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .pillar-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #b8922a, transparent);
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .pillar-card:hover {
          transform: translateY(-4px);
          border-color: rgba(184,146,42,0.35) !important;
          background: #fffbf2 !important;
          box-shadow: 0 12px 40px rgba(184,146,42,0.1);
        }
        .pillar-card:hover::after { transform: scaleX(1); }
        .about-cta-link {
          transition: all 0.25s;
        }
        .about-cta-link:hover {
          background: rgba(184,146,42,0.08);
          border-color: #b8922a;
          transform: translateX(4px);
        }
      `}</style>

      <section id="about" className="about-section relative bg-amber-50 py-24 px-8 overflow-hidden">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Left column */}
          <div>
            <div className="section-label-line text-[11px] tracking-[3px] uppercase text-[#b8922a] font-bold mb-4 inline-flex items-center">
              Our Story
            </div>

            <h2 className="font-serif text-[clamp(32px,3.5vw,52px)] font-bold text-slate-900 leading-[1.12] mb-5">
              Built on <span className="text-[#b8922a]">Tradition</span>,<br />
              Driven by Innovation
            </h2>

            <p className="text-slate-500 text-base leading-[1.8] mb-8">
              Founded in 1985, SSHE has stood as a beacon of higher learning in the region.
              Our commitment to transformative education blends classical values with contemporary
              academic excellence.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-4 mb-10">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 flex-shrink-0 mt-0.5 bg-amber-100 border border-amber-200 rounded-[10px] flex items-center justify-center text-base">
                    {h.icon}
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-[14.5px] mb-0.5 font-semibold">
                      {h.title}
                    </strong>
                    <span className="text-slate-500 text-[13.5px]">{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="about-cta-link inline-flex items-center gap-2.5 px-7 py-3 border-2 border-amber-400 rounded-full text-[#b8922a] text-[14px] font-semibold no-underline"
            >
              Discover Our History →
            </a>
          </div>

          {/* Right column — pillars grid */}
          <div className="grid grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="pillar-card bg-white border border-slate-200 rounded-[20px] p-7"
              >
                <span className="text-[28px] mb-3.5 block">{p.icon}</span>
                <div className="font-serif text-[17px] text-slate-900 font-bold mb-2.5">
                  {p.title}
                </div>
                <div className="text-[13.5px] text-slate-500 leading-[1.65]">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}