export default function About() {
  const pillars = [
    { icon: "🛡️", title: "Cybersecurity Focus", desc: "Specialised major combining business strategy with hands-on cybersecurity skills for a digital-first economy." },
    { icon: "💼", title: "Work-Ready Graduates", desc: "Curriculum designed to produce professionals ready for roles from day one — not just theory, but practical skills." },
    { icon: "🌐", title: "Industry Alignment", desc: "Responding to growing market demand for professionals who can protect organisations in an interconnected world." },
    { icon: "💡", title: "Innovation & AI", desc: "Electives in AI, Machine Learning, Cloud Computing and Blockchain keep graduates ahead of emerging technologies." },
  ];

  const highlights = [
    { icon: "📍", title: "Petersham Campus", desc: "Level 4/590 Parramatta Rd, Petersham NSW 2049 — central and accessible" },
    { icon: "🎓", title: "AQF Level 7 Degree", desc: "Fully accredited Bachelor of Business — recognised across Australia and internationally" },
    { icon: "🎯", title: "Outcome-Based Learning", desc: "9 Graduate Attributes mapped to real-world skills, ethics, and career outcomes" },
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
              About AIE
            </div>

            <h2 className="font-serif text-[clamp(32px,3.5vw,52px)] font-bold text-slate-900 leading-[1.12] mb-5">
              Built for the <span className="text-[#b8922a]">Future of Work</span>,<br />
              Grounded in Business
            </h2>

            <p className="text-slate-500 text-base leading-[1.8] mb-4">
              The <strong className="text-slate-700">Atlas Institute of Education (AIE)</strong> seeks
              to produce students with the knowledge, competencies and values necessary to develop
              critical, analytical and evaluative skills essential for a fulfilling career in business.
            </p>

            <p className="text-slate-500 text-base leading-[1.8] mb-8">
              Our <strong className="text-slate-700">Bachelor of Business (Major in Cybersecurity)</strong> is
              designed to prepare students for the growing demand for professionals who can protect
              organisations in an increasingly digital and interconnected world — combining core
              business foundations with specialised cybersecurity expertise.
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
              href="/about"
              className="about-cta-link inline-flex items-center gap-2.5 px-7 py-3 border-2 border-amber-400 rounded-full text-[#b8922a] text-[14px] font-semibold no-underline"
            >
              Discover AIE →
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