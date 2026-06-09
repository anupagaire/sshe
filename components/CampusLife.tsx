// Campus Life Section
export function CampusLife() {
  const features = [
    { icon: "🏟️", title: "Sports Complex", desc: "Olympic-size pool, courts for 15+ sports, and fully-equipped gym." },
    { icon: "📖", title: "Central Library", desc: "Over 2 lakh books, digital journals, and 24/7 study spaces." },
    { icon: "🎭", title: "Cultural Centre", desc: "Auditorium, art gallery, and dedicated spaces for 50+ clubs." },
    { icon: "🏠", title: "Residences", desc: "Separate hostels for 5,000+ students with modern amenities." },
    { icon: "🍽️", title: "Food Courts", desc: "8 cafeterias serving diverse cuisines, including dietary options." },
    { icon: "💻", title: "Tech Labs", desc: "24/7 access to 1,000+ workstations with high-speed internet." },
  ];

  return (
    <>
      <style>{`
        .campus {
          background: #fdf8f0;
          padding: 100px 2rem;
        }
        .campus-inner { max-width: 1300px; margin: 0 auto; }
        .campus-header { text-align: center; margin-bottom: 64px; }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #b8922a;
          font-weight: 700;
          font-family: sans-serif;
          margin-bottom: 16px;
        }
        .section-title {
          font-family: 'Georgia', serif;
          font-size: clamp(30px, 3.5vw, 50px);
          font-weight: 700;
          color: #1a1208;
          margin: 0 0 16px;
          line-height: 1.12;
        }
        .section-title span { color: #b8922a; }
        .section-sub {
          color: #6b5c3e;
          font-size: 16px;
          font-family: sans-serif;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .campus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .campus-card {
          background: #fff;
          border: 1px solid rgba(184,146,42,0.15);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .campus-card:hover {
          background: #fffbf2;
          border-color: rgba(184,146,42,0.4);
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(184,146,42,0.12);
        }
        .campus-card-icon {
          font-size: 32px;
          margin-bottom: 18px;
          display: block;
        }
        .campus-card-title {
          font-family: 'Georgia', serif;
          font-size: 18px;
          color: #1a1208;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .campus-card-desc {
          font-size: 14px;
          color: #6b5c3e;
          line-height: 1.7;
          font-family: sans-serif;
        }
        @media (max-width: 900px) { .campus-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 550px) { .campus-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="campus" id="campus">
        <div className="campus-inner">
          <div className="campus-header">
            <div className="section-label">Campus Life</div>
            <h2 className="section-title">Beyond the <span>Classroom</span></h2>
            <p className="section-sub">
              Our campus is alive with opportunity. Explore world-class facilities built to inspire every student.
            </p>
          </div>
          <div className="campus-grid">
            {features.map((f) => (
              <div className="campus-card" key={f.title}>
                <span className="campus-card-icon">{f.icon}</span>
                <div className="campus-card-title">{f.title}</div>
                <div className="campus-card-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Testimonials Section
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Google",
    batch: "B.Tech CSE, 2021",
    avatar: "PS",
    quote:
      "Atlas didn't just teach me to code — it taught me to think. The faculty and labs here gave me an edge that I felt on day one at Google.",
    color: "#2563eb",
  },
  {
    name: "Arjun Mehta",
    role: "Founder, TechVenture",
    batch: "MBA, 2019",
    avatar: "AM",
    quote:
      "The entrepreneurship incubator at Everest was where I built my first product. The mentorship network here is genuinely world-class.",
    color: "#b8922a",
  },
  {
    name: "Sneha Patel",
    role: "Research Scientist, ISRO",
    batch: "M.Sc Physics, 2020",
    avatar: "SP",
    quote:
      "The research culture here is exceptional. I published my first paper in my second year, thanks to the incredible guidance from my professors.",
    color: "#16a34a",
  },
];

export function Testimonials() {
  return (
    <>
      <style>{`
        .testimonials {
          background: #fdf8f0;
          padding: 100px 2rem;
          border-top: 1px solid rgba(184,146,42,0.12);
        }
        .testimonials-inner { max-width: 1300px; margin: 0 auto; }
        .testimonials-header { text-align: center; margin-bottom: 64px; }
        .t-section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #b8922a;
          font-weight: 700;
          font-family: sans-serif;
          margin-bottom: 16px;
        }
        .t-section-title {
          font-family: 'Georgia', serif;
          font-size: clamp(30px, 3.5vw, 50px);
          font-weight: 700;
          color: #1a1208;
          margin: 0 0 16px;
          line-height: 1.12;
        }
        .t-section-title span { color: #b8922a; }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .testimonial-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px;
          position: relative;
          transition: all 0.3s;
          border: 1px solid rgba(184,146,42,0.15);
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.08);
        }
        .quote-mark {
          font-size: 64px;
          line-height: 1;
          opacity: 0.15;
          font-family: Georgia, serif;
          position: absolute;
          top: 20px;
          right: 28px;
          color: #1a1208;
        }
        .testimonial-text {
          font-size: 15px;
          color: #4a3c28;
          line-height: 1.8;
          font-family: sans-serif;
          font-style: italic;
          margin-bottom: 28px;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 20px;
          border-top: 1px solid rgba(184,146,42,0.15);
        }
        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 14px;
          color: #fff;
          flex-shrink: 0;
          font-family: sans-serif;
        }
        .author-name {
          font-size: 15px;
          font-weight: 700;
          color: #1a1208;
          font-family: 'Georgia', serif;
          margin-bottom: 2px;
        }
        .author-role {
          font-size: 12.5px;
          color: #6b5c3e;
          font-family: sans-serif;
        }
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
        }
      `}</style>

      <section className="testimonials" id="testimonials">
        <div className="testimonials-inner">
          <div className="testimonials-header">
            <div className="t-section-label">Alumni Voices</div>
            <h2 className="t-section-title">Stories of <span>Success</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div
                className="testimonial-card"
                key={t.name}
                style={{
                  borderColor: `${t.color}33`,
                } as React.CSSProperties}
              >
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-author">
                  <div
                    className="author-avatar"
                    style={{
                      background: t.color,
                    } as React.CSSProperties}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                    <div style={{ fontSize: "11.5px", color: t.color, fontFamily: "sans-serif", fontWeight: 600, marginTop: 2 }}>
                      {t.batch}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Admissions CTA Section
export function AdmissionsCTA() {
  return (
    <>
      <style>{`
        .admissions-cta {
          background: #fdf8f0;
          padding: 100px 2rem;
          border-top: 1px solid rgba(184,146,42,0.12);
        }
        .cta-inner {
          max-width: 1100px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(184,146,42,0.08) 0%, rgba(255,251,240,0.9) 50%, rgba(184,146,42,0.05) 100%);
          border: 1px solid rgba(184,146,42,0.3);
          border-radius: 32px;
          padding: 72px 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-inner::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 15%;
          right: 15%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #b8922a, transparent);
        }
        .cta-inner::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 15%;
          right: 15%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(184,146,42,0.4), transparent);
        }
        .cta-title {
          font-family: 'Georgia', serif;
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 700;
          color: #1a1208;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .cta-title span { color: #b8922a; }
        .cta-desc {
          font-size: 17px;
          color: #6b5c3e;
          max-width: 540px;
          margin: 0 auto 40px;
          line-height: 1.75;
          font-family: sans-serif;
        }
        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .cta-btn-primary {
          padding: 16px 40px;
          background: linear-gradient(135deg, #b8922a, #d4af37);
          color: #fff;
          font-weight: 800;
          font-size: 16px;
          border-radius: 50px;
          text-decoration: none;
          font-family: sans-serif;
          transition: all 0.25s;
          box-shadow: 0 8px 32px rgba(184,146,42,0.3);
        }
        .cta-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(184,146,42,0.45);
        }
        .cta-btn-secondary {
          padding: 16px 40px;
          border: 1.5px solid rgba(26,18,8,0.2);
          border-radius: 50px;
          color: #1a1208;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          font-family: sans-serif;
          transition: all 0.25s;
          background: transparent;
        }
        .cta-btn-secondary:hover {
          background: rgba(26,18,8,0.05);
          border-color: rgba(26,18,8,0.4);
        }
        .cta-deadline {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .deadline-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #6b5c3e;
          font-family: sans-serif;
        }
        .deadline-item span {
          color: #1a1208;
          font-weight: 600;
        }
        @media (max-width: 700px) {
          .cta-inner { padding: 48px 24px; }
        }
      `}</style>

      <section className="admissions-cta" id="admissions">
        <div className="cta-inner">
          <h2 className="cta-title">
            Begin Your Journey<br />at <span>Atlas</span>
          </h2>
          <p className="cta-desc">
            Applications for the 2025–26 academic year are now open.
            Don't miss your chance to be part of something exceptional.
          </p>
          <div className="cta-actions">
            <a href="#" className="cta-btn-primary">Start Application →</a>
            <a href="#" className="cta-btn-secondary">Download Prospectus</a>
          </div>
          <div className="cta-deadline">
            {[
              { label: "Application Deadline", value: "March 31, 2025" },
              { label: "Entrance Exam", value: "April 20, 2025" },
              { label: "Results", value: "May 10, 2025" },
            ].map((d) => (
              <div className="deadline-item" key={d.label}>
                📅 {d.label}: <span>{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}