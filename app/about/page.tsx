"use client";
const values = [
  { icon: "🎯", title: "Academic Excellence", desc: "Delivering a contemporary, high-quality business curriculum designed to meet evolving industry standards, regulatory requirements, and AQF quality frameworks." },
  { icon: "💼", title: "Student Employability", desc: "Enhancing graduate career readiness through practical knowledge, digital capabilities, leadership development, and industry-aligned specialisations." },
  { icon: "🤝", title: "Industry Engagement", desc: "Responding to growing market demand for business professionals equipped with strategic, operational, and technological competencies." },
  { icon: "💡", title: "Innovation", desc: "Integrating emerging business trends, digital transformation, and interdisciplinary learning into every program we offer." },
  { icon: "⚖️", title: "Governance & Compliance", desc: "Fully aligned with TEQSA standards, institutional governance requirements, and continuous improvement objectives." },
  { icon: "🌍", title: "Sustainable Growth", desc: "Strengthening AIE's academic portfolio and enhancing institutional differentiation within the Australian higher education sector." },
];

const gaList = [
  { code: "COMMUNICATE", desc: "Apply effective communication skills with others in diverse contexts and through multiple modalities." },
  { code: "SUSTAIN", desc: "Maintain an intentional commitment to develop knowledge and skills over a lifetime." },
  { code: "THINK", desc: "Apply critical, creative, and flexible thinking to contribute and respond across diverse settings." },
  { code: "ENGAGE", desc: "Engage effectively with contemporary and traditional knowledge across multiple contexts." },
  { code: "WELLBEING", desc: "Utilise skills to maintain resilience and professional wellbeing when responding to challenges." },
  { code: "EQUALITY", desc: "Enact inclusive practices that deliver social justice and equality of opportunity." },
  { code: "INTEGRITY", desc: "Apply integrity and ethical standards to study, research, and professional practice." },
  { code: "COMMUNITY", desc: "Use teamwork and leadership skills to advance teams, groups, and communities." },
  { code: "GLOBAL", desc: "Apply culturally sensitive knowledge and skills to contribute to a sustainable global future." },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #040810; color: #fff; font-family: sans-serif; }

        .page-hero {
          background: linear-gradient(135deg, #040810 0%, #0a1540 60%, #040810 100%);
          padding: 10px 2rem 90px;
          border-bottom: 1px solid rgba(212,175,55,0.12);
          position: relative;
          overflow: hidden;
        }
        .page-hero::before {
          content: '';
          position: absolute;
          left: -100px; top: 50%;
          transform: translateY(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner { max-width: 1300px; margin: 0 auto; }
        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.3);
          border-radius: 20px;
          padding: 5px 14px;
          font-size: 11px;
          color: #d4af37;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .page-title {
          font-family: Georgia, serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
          max-width: 700px;
        }
        .page-title span { color: #d4af37; }
        .page-desc {
          font-size: 17px;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          max-width: 660px;
          margin-bottom: 20px;
        }

        .section { padding: 90px 2rem; }
        .section-inner { max-width: 1300px; margin: 0 auto; }
        .section-header { margin-bottom: 56px; }
        .section-header.center { text-align: center; }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #d4af37;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .section-title {
          font-family: Georgia, serif;
          font-size: clamp(28px, 3vw, 46px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
          line-height: 1.12;
        }
        .section-title span { color: #d4af37; }
        .section-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.5);
          max-width: 600px;
          line-height: 1.7;
        }
        .section-header.center .section-sub { margin: 0 auto; }

        /* MISSION */
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .mission-text p {
          font-size: 15.5px;
          color: rgba(255,255,255,0.6);
          line-height: 1.85;
          margin-bottom: 20px;
        }
        .mission-highlights {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;
        }
        .mh-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          transition: all 0.2s;
        }
        .mh-item:hover { background: rgba(212,175,55,0.04); border-color: rgba(212,175,55,0.18); }
        .mh-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
        .mh-text strong { display: block; font-size: 14.5px; color: #fff; margin-bottom: 3px; }
        .mh-text span { font-size: 13.5px; color: rgba(255,255,255,0.45); }
        .mission-visual {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
        }
        .mission-visual::before {
          content: '';
          position: absolute;
          top: -1px; left: 20%; right: 20%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }
        .stat-block { text-align: center; padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .stat-block:last-child { border-bottom: none; }
        .stat-num { font-family: Georgia, serif; font-size: 48px; font-weight: 700; color: #d4af37; line-height: 1; margin-bottom: 6px; }
        .stat-lbl { font-size: 13px; color: rgba(255,255,255,0.45); letter-spacing: 0.5px; }

        /* VALUES */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .value-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s;
        }
        .value-card:hover {
          background: rgba(212,175,55,0.04);
          border-color: rgba(212,175,55,0.2);
          transform: translateY(-5px);
        }
        .value-icon { font-size: 30px; margin-bottom: 16px; display: block; }
        .value-title { font-family: Georgia, serif; font-size: 18px; color: #fff; font-weight: 700; margin-bottom: 10px; }
        .value-desc { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.7; }

        /* GRADUATE ATTRIBUTES */
        .ga-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .ga-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.25s;
        }
        .ga-card:hover { border-color: rgba(212,175,55,0.2); background: rgba(212,175,55,0.03); }
        .ga-code {
          font-size: 11px;
          font-weight: 800;
          color: #d4af37;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
          display: block;
        }
        .ga-desc { font-size: 13.5px; color: rgba(255,255,255,0.55); line-height: 1.65; }

        /* LOCATION */
        .location-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .location-info p { font-size: 15.5px; color: rgba(255,255,255,0.6); line-height: 1.8; margin-bottom: 24px; }
        .location-detail {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }
        .location-detail:last-child { border-bottom: none; }
        .location-detail span { flex-shrink: 0; }
        .map-placeholder {
          background: linear-gradient(135deg, rgba(10,21,64,0.8), rgba(212,175,55,0.05));
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 16px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
        }
        .map-placeholder span { font-size: 40px; }
        .map-placeholder p { font-size: 14px; color: rgba(255,255,255,0.4); }

        @media (max-width: 900px) {
          .mission-grid, .location-card { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: 1fr 1fr; }
          .ga-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 550px) {
          .values-grid, .ga-grid { grid-template-columns: 1fr; }
        }
      `}</style>



      <section className="page-hero">
        <div className="hero-inner">
          <div className="hero-label">🏛️ About AIE</div>
          <h1 className="page-title">
            Atlas Institute of <span>Education</span>
          </h1>
          <p className="page-desc">
            AIE seeks to produce students with the knowledge, competencies, and values necessary to develop critical, analytical, and evaluative skills essential for a fulfilling career in business. We prepare students to be work-ready business professionals from day one.
          </p>
          <p className="page-desc">
            Leveraging emerging fields of artificial intelligence, machine learning, and cybersecurity, our courses produce practical pathways that help graduates stay abreast of the technologies of the future.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section" style={{background:"#06090f"}}>
        <div className="section-inner">
          <div className="mission-grid">
            <div className="mission-text">
              <div className="section-label">Our Mission</div>
              <h2 className="section-title">Education Built for the <span>Future of Work</span></h2>
              <p>
                The Bachelor of Business at AIE has been designed as a comprehensive academic program providing foundation skills in traditional business disciplines — leadership, management, marketing, finance, economics, and accounting.
              </p>
              <p>
                Unlike traditional business courses, AIE additionally provides intensive instruction and practical experience in the application of technologies and data analytics, ensuring graduates are equipped for a rapidly changing digital economy.
              </p>
              <div className="mission-highlights">
                {[
                  { icon: "🏢", title: "Petersham Campus", desc: "Level 4/590 Parramatta Rd, Petersham NSW 2049" },
                  { icon: "📅", title: "First Offering", desc: "Trimester 1, 2027 — Three intakes per year" },
                  { icon: "🎓", title: "AQF Level 7", desc: "Fully recognised Bachelor degree qualification" },
                ].map((h) => (
                  <div className="mh-item" key={h.title}>
                    <span className="mh-icon">{h.icon}</span>
                    <div className="mh-text">
                      <strong>{h.title}</strong>
                      <span>{h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mission-visual">
              {[
                { num: "3", lbl: "Year Bachelor Degree" },
                { num: "3", lbl: "Intakes Per Year" },
                { num: "24", lbl: "Subjects Total" },
                { num: "144", lbl: "Credit Points" },
              ].map((s) => (
                <div className="stat-block" key={s.lbl}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{background:"#040810"}}>
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Strategic Alignment</div>
            <h2 className="section-title">Our Core <span>Pillars</span></h2>
            <p className="section-sub">
              Every program at AIE is designed in alignment with our strategic plan and the needs of modern industry.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <span className="value-icon">{v.icon}</span>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRADUATE ATTRIBUTES */}
      <section className="section" style={{background:"#06090f"}}>
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Graduate Attributes</div>
            <h2 className="section-title">What Our Graduates <span>Stand For</span></h2>
            <p className="section-sub">
              Through study and professional interactions at AIE, graduates develop nine core attributes that define their professional character.
            </p>
          </div>
          <div className="ga-grid">
            {gaList.map((g) => (
              <div className="ga-card" key={g.code}>
                <span className="ga-code">{g.code}</span>
                <div className="ga-desc">{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section" style={{background:"#040810"}}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Our Campus</div>
            <h2 className="section-title">Where You'll <span>Study</span></h2>
          </div>
          <div className="location-card">
            <div className="location-info">
              <p>
                AIE is located in the inner-west suburb of Petersham, Sydney — one of Australia's most connected and culturally vibrant neighbourhoods. The campus is easily accessible by public transport from the Greater Sydney area.
              </p>
              {[
                ["📍", "Level 4/590 Parramatta Rd, Petersham NSW 2049"],
                ["🚉", "5-minute walk from Petersham Station"],
                ["🕐", "First year: Full face-to-face delivery"],
                ["💻", "Years 2–3: Hybrid (on-campus + online)"],
                ["📞", "admissions@aie.edu.au"],
              ].map(([icon, text]) => (
                <div className="location-detail" key={text}>
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="map-placeholder">
              <span>📍</span>
              <p>590 Parramatta Rd, Petersham NSW</p>
              <p style={{fontSize:12}}>Open in Google Maps →</p>
            </div>
          </div>
        </div>
      </section>

  
    </>
  );
}