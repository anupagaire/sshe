export default function About() {
  const pillars = [
    {
      icon: "🛡️",
      title: "Cybersecurity Focus",
      desc: "Specialised major covering risk management, digital forensics, network security, ethical hacking and governance frameworks.",
    },
    {
      icon: "💼",
      title: "Work-Ready Graduates",
      desc: "Progressive approach producing professionals ready from day one — roles include Cybersecurity Analyst, IT Auditor, GRC Analyst and more.",
    },
    {
      icon: "🌐",
      title: "Business + Technology",
      desc: "Foundation in leadership, management, marketing, finance, economics and accounting — plus intensive data analytics and emerging tech.",
    },
    {
      icon: "💡",
      title: "Innovation & AI",
      desc: "Electives in AI & Machine Learning, Cloud Computing, Blockchain and Distributed Security keep graduates ahead of industry trends.",
    },
  ];

  const highlights = [
    {
      icon: "📍",
      title: "Petersham Campus",
      desc: "Level 4/590 Parramatta Rd, Petersham NSW 2049 — central and accessible. First intake: Trimester 1, March 2027.",
    },
    {
      icon: "🎓",
      title: "AQF Level 7 Bachelor Degree",
      desc: "TEQSA-accredited Bachelor of Business (Major in Cybersecurity) — 3 years full-time across 6 trimesters, 24 subjects total.",
    },
    {
      icon: "🎯",
      title: "Outcome-Based Curriculum",
      desc: "9 Graduate Attributes — COMMUNICATE, THINK, ENGAGE, INTEGRITY, GLOBAL and more — mapped to real-world career outcomes.",
    },
  ];

  const clos = [
    "Broad knowledge of business theories, concepts and principles",
    "Working knowledge of emerging technologies in business contexts",
    "Ethics and corporate governance standards",
    "Application of technology for decision-making and innovation",
    "Cognitive skills to research, analyse and evaluate information",
    "Communication for professional relationships across diverse stakeholders",
    "Leadership and ethical decision-making in unpredictable contexts",
    "Accountability for professional practice and lifelong learning",
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
        .clo-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 7px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-size: 13px;
          color: #475569;
          line-height: 1.5;
        }
        .clo-item:last-child { border-bottom: none; }
        .clo-num {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          background: #fef3c7;
          border: 1px solid #fcd34d;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 700;
          color: #b8922a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .delivery-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: #fef9ee;
          border: 1px solid #fcd34d;
          border-radius: 20px;
          font-size: 12px;
          color: #b8922a;
          font-weight: 600;
        }
      `}</style>

      <section id="about" className="about-section relative bg-amber-50 py-20 px-8 overflow-hidden">
        <div className="max-w-[1300px] mx-auto">

          {/* ── TOP: main 2-col layout ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-20">

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

              <p className="text-slate-500 text-base leading-[1.8] mb-5">
                Our <strong className="text-slate-700">Bachelor of Business (Major in Cybersecurity)</strong> prepares
                students for the growing demand for professionals who can protect organisations in an
                increasingly digital and interconnected world — combining core business foundations with
                specialised cybersecurity expertise.
              </p>

              {/* Delivery mode badges */}
              <div className="flex flex-wrap gap-2 mb-7">
                <span className="delivery-badge">🏫 Face-to-Face — Year 1</span>
                <span className="delivery-badge">💻 Hybrid — Years 2 & 3</span>
                <span className="delivery-badge">📅 3 Intakes Per Year</span>
                <span className="delivery-badge">⏱ 12-Week Trimesters</span>
              </div>

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
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
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

          {/* ── BOTTOM: Course Learning Outcomes ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-[24px] border border-amber-100 p-10"
            style={{ boxShadow: "0 4px 24px rgba(184,146,42,0.08)" }}>

            {/* CLOs list */}
            <div>
              <div className="section-label-line text-[11px] tracking-[3px] uppercase text-[#b8922a] font-bold mb-4 inline-flex items-center">
                Course Learning Outcomes
              </div>
              <h3 className="font-serif text-[22px] font-bold text-slate-900 mb-5">
                What Graduates Will Achieve
              </h3>
              <div>
                {clos.map((clo, i) => (
                  <div key={i} className="clo-item">
                    <span className="clo-num">{i + 1}</span>
                    <span>{clo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course structure summary */}
            <div>
              <div className="section-label-line text-[11px] tracking-[3px] uppercase text-[#b8922a] font-bold mb-4 inline-flex items-center">
                Course Structure
              </div>
              <h3 className="font-serif text-[22px] font-bold text-slate-900 mb-5">
                Your 3-Year Journey
              </h3>

              {[
                {
                  term: "Year 1 — Core Business",
                  subjects: ["Business Communication", "Intro to Marketing", "Financial Literacy", "Business Economics", "Intro to Management", "Organisational Behaviour", "Accounting for Decision Making", "Business Law"],
                  color: "#fef3c7",
                  border: "#fcd34d",
                },
                {
                  term: "Year 2 — Cybersecurity Core",
                  subjects: ["Foundation of Cybersecurity", "Network Security & Infrastructure", "Cyber Risk Management", "Digital Forensics & Incident Response", "+ Elective subjects"],
                  color: "#e0f2fe",
                  border: "#7dd3fc",
                },
                {
                  term: "Year 3 — Advanced & Capstone",
                  subjects: ["Cybersecurity Governance & Compliance", "Ethical Hacking & Vulnerability Assessment", "Cloud Security Strategy & Leadership", "Cybersecurity Project (Capstone)", "+ Elective subjects"],
                  color: "#dcfce7",
                  border: "#86efac",
                },
              ].map(({ term, subjects, color, border }) => (
                <div key={term} className="mb-5 rounded-[14px] p-4"
                  style={{ background: color, border: `1px solid ${border}` }}>
                  <p className="font-bold text-slate-800 text-[13px] mb-2">{term}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {subjects.map((s) => (
                      <span key={s} className="text-[11px] px-2 py-0.5 rounded-full bg-white text-slate-600"
                        style={{ border: `1px solid ${border}` }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 mt-4">
                <a href="/courses/Major-in-Cybersecurity"
                  className="flex-1 text-center px-5 py-3 rounded-full text-[13px] font-bold no-underline transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg,#b8922a,#d4af37)", color: "#fff", boxShadow: "0 4px 16px rgba(184,146,42,0.3)" }}>
                  View Full Course →
                </a>
                <a href="/admissions"
                  className="flex-1 text-center px-5 py-3 rounded-full text-[13px] font-semibold no-underline border-2 border-amber-400 text-[#b8922a] transition-all hover:bg-amber-50">
                  How to Apply
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}