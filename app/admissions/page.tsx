"use client";


const steps = [
  { num: "01", title: "Check Eligibility", desc: "Review academic and English language requirements for your chosen program.", icon: "📋" },
  { num: "02", title: "Prepare Documents", desc: "Gather your transcripts, English test results, passport, and any supporting documents.", icon: "📁" },
  { num: "03", title: "Submit Application", desc: "Complete the online application form. Applications are free of charge.", icon: "📝" },
  { num: "04", title: "Receive Offer", desc: "If eligible, you'll receive a Conditional or Unconditional Letter of Offer.", icon: "📨" },
  { num: "05", title: "Accept & Pay", desc: "Accept your offer and pay the tuition deposit to confirm enrolment.", icon: "✅" },
  { num: "06", title: "Student Visa (Intl)", desc: "International students apply for an Australian Student Visa (Subclass 500).", icon: "🛂" },
  { num: "07", title: "Orientation", desc: "Attend orientation week to settle in, meet your cohort, and prepare for classes.", icon: "🎓" },
];

const intakes = [
  { term: "Term 1", date: "March 2027", status: "Open Soon", color: "#4dc87a" },
  { term: "Term 2", date: "July 2027", status: "Open Soon", color: "#5b9cf6" },
  { term: "Term 3", date: "November 2027", status: "Open Soon", color: "#d4af37" },
];

const faqs = [
  {
    q: "What is the minimum ATAR required?",
    a: "The minimum ATAR (or equivalent) is 65. Alternative entry pathways exist for mature-age applicants and those with Certificate IV or VET qualifications.",
  },
  {
    q: "Can I get credit for my previous studies?",
    a: "Yes. AIE recognises prior learning and may award credit in accordance with the Credit for Prior Learning Policy. Submit your transcripts for assessment.",
  },
  {
    q: "Is the degree delivered fully online?",
    a: "First year subjects are delivered face-to-face at Petersham NSW. Second and third year subjects use a hybrid model (on-campus + online).",
  },
  {
    q: "What are the tuition fees?",
    a: "Fee information is published on the AIE website and in the course prospectus. Commonwealth-Supported Places (CSP) may be available for eligible domestic students.",
  },
  {
    q: "How long does the application process take?",
    a: "Domestic applications are typically processed within 5–10 business days. International applications may take 2–4 weeks depending on document verification.",
  },
  {
    q: "What English tests are accepted?",
    a: "AIE accepts IELTS Academic, IBT TOEFL, Cambridge CPE/CAE, PTE Academic, Language Cert, and English for Academic Purposes (EAP 2). Results must be less than 2 years old.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #040810; color: #fff; font-family: sans-serif; }

        .page-hero {
          background: linear-gradient(135deg, #040810 0%, #0c1640 60%, #040810 100%);
          padding: 140px 2rem 90px;
          border-bottom: 1px solid rgba(212,175,55,0.12);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .page-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 80%, rgba(212,175,55,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
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
          margin-bottom: 18px;
        }
        .page-title span { color: #d4af37; }
        .page-sub {
          font-size: 18px;
          color: rgba(255,255,255,0.55);
          max-width: 580px;
          margin: 0 auto 40px;
          line-height: 1.75;
        }
        .page-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btn-gold {
          padding: 15px 36px;
          background: linear-gradient(135deg, #d4af37, #f0d060);
          color: #0a0f28;
          font-weight: 800;
          font-size: 15px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(212,175,55,0.35);
          transition: all 0.25s;
        }
        .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(212,175,55,0.5); }
        .btn-ghost {
          padding: 15px 36px;
          background: rgba(255,255,255,0.06);
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          border-radius: 50px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.18);
          transition: all 0.25s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.12); }

        .section { padding: 90px 2rem; }
        .section-inner { max-width: 1300px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 60px; }
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
          line-height: 1.1;
        }
        .section-title span { color: #d4af37; }
        .section-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.5);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* INTAKES */
        .intakes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 60px;
        }
        .intake-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 36px;
          text-align: center;
          transition: all 0.3s;
        }
        .intake-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.3); }
        .intake-term {
          font-family: Georgia, serif;
          font-size: 22px;
          color: #fff;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .intake-date {
          font-size: 26px;
          font-family: Georgia, serif;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .intake-status {
          display: inline-block;
          padding: 5px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }
        .intake-cta {
          display: block;
          padding: 12px 24px;
          background: rgba(255,255,255,0.06);
          border-radius: 10px;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .intake-cta:hover { background: rgba(255,255,255,0.12); }

        /* STEPS */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .step-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px;
          position: relative;
          transition: all 0.3s;
        }
        .step-card:hover {
          background: rgba(212,175,55,0.04);
          border-color: rgba(212,175,55,0.2);
          transform: translateY(-4px);
        }
        .step-num {
          font-family: Georgia, serif;
          font-size: 40px;
          font-weight: 700;
          color: rgba(212,175,55,0.2);
          position: absolute;
          top: 20px;
          right: 24px;
        }
        .step-icon { font-size: 28px; margin-bottom: 14px; display: block; }
        .step-title {
          font-family: Georgia, serif;
          font-size: 17px;
          color: #fff;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .step-desc { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.7; }

        /* REQUIREMENTS */
        .req-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .req-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
        }
        .req-card-title {
          font-family: Georgia, serif;
          font-size: 19px;
          color: #fff;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .req-item {
          display: flex;
          gap: 10px;
          padding: 11px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-size: 14px;
          color: rgba(255,255,255,0.65);
          line-height: 1.5;
        }
        .req-item:last-child { border-bottom: none; }
        .req-check { color: #4dc87a; flex-shrink: 0; }

        /* FAQ */
        .faq-list { max-width: 820px; margin: 0 auto; }
        .faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 24px 0;
        }
        .faq-q {
          font-family: Georgia, serif;
          font-size: 17px;
          color: #fff;
          font-weight: 700;
          margin-bottom: 12px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .faq-q::before {
          content: 'Q';
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          color: #d4af37;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 6px;
          padding: 2px 8px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .faq-a { font-size: 14.5px; color: rgba(255,255,255,0.55); line-height: 1.75; padding-left: 36px; }

        /* CTA BANNER */
        .cta-banner {
          background: #040810;
          padding: 0 2rem 90px;
        }
        .cta-inner {
          max-width: 1100px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(212,175,55,0.1), rgba(16,28,80,0.7), rgba(212,175,55,0.05));
          border: 1px solid rgba(212,175,55,0.22);
          border-radius: 28px;
          padding: 64px 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-inner::before {
          content: '';
          position: absolute;
          top: -1px; left: 15%; right: 15%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }
        .cta-title { font-family: Georgia, serif; font-size: clamp(28px,4vw,48px); color: #fff; font-weight: 700; margin-bottom: 16px; }
        .cta-title span { color: #d4af37; }
        .cta-desc { font-size: 16px; color: rgba(255,255,255,0.55); max-width: 500px; margin: 0 auto 36px; line-height: 1.75; }
        .cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }

        @media (max-width: 900px) {
          .intakes-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto 48px; }
          .req-grid { grid-template-columns: 1fr; }
          .cta-inner { padding: 40px 24px; }
        }
      `}</style>



      <section className="page-hero">
        <div className="hero-label">🎓 Admissions 2027</div>
        <h1 className="page-title">Begin Your Journey at <span>AIE</span></h1>
        <p className="page-sub">
          Applications for the 2027 academic year are now open. Three intake periods.
          Your future in cybersecurity and business starts here.
        </p>
        <div className="page-actions">
          <a href="#apply" className="btn-gold">Apply Now →</a>
          <a href="/courses" className="btn-ghost">View All Courses</a>
        </div>
      </section>

      {/* INTAKES */}
      <section className="section" style={{background:"#06090f"}}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">📅 Intake Periods</div>
            <h2 className="section-title">Choose Your <span>Start Date</span></h2>
            <p className="section-sub">Three trimesters per year — find the one that fits your timeline.</p>
          </div>
          <div className="intakes-grid">
            {intakes.map((i) => (
              <div className="intake-card" key={i.term} style={{borderColor: `${i.color}22`}}>
                <div className="intake-term">{i.term}</div>
                <div className="intake-date" style={{color: i.color}}>{i.date}</div>
                <div className="intake-status" style={{
                  color: i.color,
                  background: `${i.color}18`,
                  border: `1px solid ${i.color}40`
                }}>
                  {i.status}
                </div>
                <a href="#apply" className="intake-cta">Register Interest</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="section" style={{background:"#040810"}}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">🗺️ Application Process</div>
            <h2 className="section-title">How to <span>Apply</span></h2>
            <p className="section-sub">Seven simple steps from eligibility check to your first day on campus.</p>
          </div>
          <div className="steps-grid">
            {steps.map((s) => (
              <div className="step-card" key={s.num}>
                <span className="step-num">{s.num}</span>
                <span className="step-icon">{s.icon}</span>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="section" style={{background:"#06090f"}}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">📜 Entry Requirements</div>
            <h2 className="section-title">Admission <span>Requirements</span></h2>
            <p className="section-sub">Academic and English language requirements for the Bachelor of Business (Cybersecurity).</p>
          </div>
          <div className="req-grid">
            <div className="req-card">
              <div className="req-card-title">🎓 Academic Requirements</div>
              {[
                "Year 12 with minimum ATAR of 65 or equivalent",
                "Equivalent international secondary qualification",
                "Certificate IV (AQF 4) or higher",
                "GCE Advanced Level with three or more C Grades",
                "Global Assessment Certificate — average 65% or higher",
                "International Baccalaureate (IB) diploma",
                "Relevant work experience (mature-age applicants — assessed case-by-case)",
              ].map((r) => (
                <div className="req-item" key={r}><span className="req-check">✓</span><span>{r}</span></div>
              ))}
            </div>
            <div className="req-card">
              <div className="req-card-title">🌐 English Language Requirements</div>
              {[
                "IELTS Academic: overall 6.0 (no band below 5.5)",
                "IBT TOEFL: overall 75 (writing minimum 17)",
                "Cambridge CPE: Grades A, B, or C1",
                "Cambridge CAE: total score 52 or over",
                "PTE Academic: score over 51",
                "EAP Level 2: Grade A or B",
                "Certificate IV in ESL",
              ].map((r) => (
                <div className="req-item" key={r}><span className="req-check">✓</span><span>{r}</span></div>
              ))}
              <div style={{
                marginTop: 16, padding: "12px 14px",
                background: "rgba(91,156,246,0.07)",
                borderRadius: 10, fontSize: 13, color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(91,156,246,0.15)"
              }}>
                📌 Domestic students are exempt from English language requirements. Citizens of UK, USA, Canada, NZ, and Ireland are also exempt.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{background:"#040810"}}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">❓ FAQ</div>
            <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <div className="faq-item" key={f.q}>
                <div className="faq-q">{f.q}</div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to Join <span>AIE?</span></h2>
          <p className="cta-desc">
            Applications for March 2027 intake open soon. Register your interest and we'll be in touch with updates.
          </p>
          <div className="cta-btns">
            <a href="#apply" className="btn-gold">Start Application →</a>
            <a href="/contact" className="btn-ghost">📞 Speak to Admissions</a>
          </div>
        </div>
      </div>

     
    </>
  );
}