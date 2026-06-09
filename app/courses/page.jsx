"use client";
import { useState } from "react";


const course = {
  code: "MAJ2603-CBS",
  name: "Bachelor of Business",
  major: "Major in Cybersecurity",
  aqf: "AQF Level 7",
  duration: "3 Years Full-Time",
  trimesters: "3 Trimesters/Year",
  subjects: 24,
  creditPoints: 144,
  delivery: "Face-to-Face (Year 1) + Hybrid (Year 2 & 3)",
  intake: "March, July, November",
  firstOffering: "T1 / 2027",
  location: "Level 4/590 Parramatta Rd, Petersham NSW 2049",
  atar: "65",
  ielts: "6.0 overall (no band below 5.5)",
};

const coreSubjects = [
  { code: "BUS101", name: "Business Communication", year: 1 },
  { code: "BUS102", name: "Introduction to Marketing", year: 1 },
  { code: "BUS103", name: "Financial Literacy", year: 1 },
  { code: "BUS104", name: "Business Economics", year: 1 },
  { code: "BUS105", name: "Introduction to Management", year: 1 },
  { code: "BUS106", name: "Organisational Behaviour", year: 1 },
  { code: "BUS107", name: "Accounting for Decision Making", year: 1 },
  { code: "BUS108", name: "Business Law", year: 1 },
];

const majorSubjects = [
  { code: "CBS201", name: "Foundation of Cybersecurity", year: 2 },
  { code: "CBS202", name: "Network Security and Infrastructure", year: 2 },
  { code: "CBS203", name: "Cyber Risk Management", year: 2 },
  { code: "CBS204", name: "Digital Forensics and Incident Report", year: 2 },
  { code: "CBS301", name: "Cybersecurity Governance and Compliance", year: 3 },
  { code: "CBS302", name: "Ethical Hacking and Vulnerability Assessment", year: 3 },
  { code: "CBS303", name: "Cloud Security Strategy and Leadership", year: 3 },
  { code: "CBS304", name: "Cybersecurity Project (Capstone)", year: 3 },
];

const electives = [
  { code: "INF205", name: "Cloud Computing for Business" },
  { code: "INF305", name: "Artificial Intelligence and Machine Learning" },
  { code: "HTM205", name: "Digital Marketing & Social Media Strategy" },
  { code: "HTM305", name: "Customer Experiences and Services" },
  { code: "CBS205", name: "Artificial Intelligence for Cybersecurity" },
  { code: "CBS305", name: "Blockchain and Distributed Security Systems" },
];

const careers = [
  "Cybersecurity Analyst",
  "Security Operations Centre Analyst",
  "Governance, Risk & Compliance Analyst",
  "Privacy & Data Protection Officer",
  "Cybersecurity Consultant",
  "IT Auditor",
  "Identity & Access Management Analyst",
  "Cybersecurity Project Coordinator",
  "Security Awareness & Training Specialist",
  "Security Officer",
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = ["overview", "curriculum", "careers", "admissions"];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #040810; color: #fff; font-family: sans-serif; }

        /* PAGE HERO */
        .course-hero {
          background: linear-gradient(135deg, #040810 0%, #0a1540 60%, #040810 100%);
          padding: 140px 2rem 80px;
          border-bottom: 1px solid rgba(212,175,55,0.15);
          position: relative;
          overflow: hidden;
        }
        .course-hero::before {
          content: '';
          position: absolute;
          right: -100px; top: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .course-hero-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 60px;
          align-items: start;
        }
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 20px;
        }
        .breadcrumb a { color: #d4af37; text-decoration: none; }
        .course-badge {
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
          margin-bottom: 16px;
        }
        .course-title {
          font-family: Georgia, serif;
          font-size: clamp(32px, 4vw, 58px);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 12px;
        }
        .course-title span { color: #d4af37; }
        .course-subtitle {
          font-size: 20px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 32px;
        }
        .course-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .course-meta-chip {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 30px;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
        }
        .course-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 220px;
        }
        .btn-apply {
          padding: 15px 28px;
          background: linear-gradient(135deg, #d4af37, #f0d060);
          color: #0a0f28;
          font-weight: 800;
          font-size: 15px;
          border-radius: 12px;
          text-decoration: none;
          text-align: center;
          transition: all 0.25s;
          box-shadow: 0 8px 24px rgba(212,175,55,0.35);
        }
        .btn-apply:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(212,175,55,0.5); }
        .btn-brochure {
          padding: 14px 28px;
          background: transparent;
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          border-radius: 12px;
          text-decoration: none;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.25s;
        }
        .btn-brochure:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.4); }

        /* TABS */
        .tabs-bar {
          background: rgba(6,9,15,0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          position: sticky;
          top: 80px;
          z-index: 100;
        }
        .tabs-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          gap: 4px;
        }
        .tab-btn {
          padding: 18px 24px;
          background: none;
          border: none;
          color: rgba(255,255,255,0.5);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
          text-transform: capitalize;
          letter-spacing: 0.3px;
        }
        .tab-btn:hover { color: rgba(255,255,255,0.85); }
        .tab-btn.active { color: #d4af37; border-bottom-color: #d4af37; }

        /* CONTENT */
        .course-body {
          max-width: 1300px;
          margin: 0 auto;
          padding: 60px 2rem;
        }
        .section-title {
          font-family: Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .section-sub {
          color: rgba(255,255,255,0.5);
          font-size: 15px;
          margin-bottom: 36px;
          line-height: 1.6;
        }

        /* OVERVIEW */
        .overview-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }
        .overview-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.65);
          line-height: 1.85;
          margin-bottom: 32px;
        }
        .outcomes-title {
          font-family: Georgia, serif;
          font-size: 20px;
          color: #fff;
          margin-bottom: 16px;
        }
        .outcome-item {
          display: flex;
          gap: 12px;
          margin-bottom: 14px;
        }
        .outcome-code {
          font-size: 11px;
          font-weight: 700;
          color: #d4af37;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.2);
          border-radius: 6px;
          padding: 3px 8px;
          white-space: nowrap;
          height: fit-content;
          margin-top: 2px;
        }
        .outcome-text { font-size: 13.5px; color: rgba(255,255,255,0.6); line-height: 1.6; }
        .quick-facts {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 28px;
          height: fit-content;
          position: sticky;
          top: 160px;
        }
        .qf-title {
          font-family: Georgia, serif;
          font-size: 18px;
          color: #fff;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .qf-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-size: 13px;
        }
        .qf-label { color: rgba(255,255,255,0.4); flex-shrink: 0; }
        .qf-value { color: #fff; font-weight: 600; text-align: right; }

        /* CURRICULUM */
        .trimester-card {
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
        }
        .trimester-header {
          padding: 16px 24px;
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .trimester-label {
          font-family: Georgia, serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }
        .trimester-tag {
          font-size: 11px;
          padding: 3px 12px;
          border-radius: 20px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .tag-core { background: rgba(91,156,246,0.15); color: #5b9cf6; border: 1px solid rgba(91,156,246,0.25); }
        .tag-major { background: rgba(212,175,55,0.12); color: #d4af37; border: 1px solid rgba(212,175,55,0.25); }
        .subject-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: background 0.15s;
        }
        .subject-row:last-child { border-bottom: none; }
        .subject-row:hover { background: rgba(255,255,255,0.02); }
        .subject-code {
          font-size: 12px;
          font-weight: 700;
          color: #d4af37;
          font-family: monospace;
          min-width: 72px;
        }
        .subject-name { font-size: 14px; color: rgba(255,255,255,0.8); flex: 1; }
        .subject-cps {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          white-space: nowrap;
        }

        /* CAREERS */
        .careers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 48px;
        }
        .career-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.25s;
        }
        .career-card:hover {
          background: rgba(212,175,55,0.05);
          border-color: rgba(212,175,55,0.2);
          transform: translateX(4px);
        }
        .career-icon {
          width: 40px; height: 40px;
          background: rgba(212,175,55,0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .career-name { font-size: 14px; color: rgba(255,255,255,0.8); line-height: 1.4; }
        .ga-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
        }
        .ga-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 22px;
        }
        .ga-label {
          font-size: 11px;
          font-weight: 700;
          color: #d4af37;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .ga-desc { font-size: 13.5px; color: rgba(255,255,255,0.55); line-height: 1.65; }

        /* ADMISSIONS */
        .admit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .admit-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 28px;
        }
        .admit-card-title {
          font-family: Georgia, serif;
          font-size: 18px;
          color: #fff;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .req-item {
          display: flex;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-size: 13.5px;
          color: rgba(255,255,255,0.6);
          line-height: 1.5;
          align-items: flex-start;
        }
        .req-item:last-child { border-bottom: none; }
        .req-check { color: #4dc87a; flex-shrink: 0; margin-top: 1px; }

        @media (max-width: 900px) {
          .course-hero-inner { grid-template-columns: 1fr; }
          .course-actions { flex-direction: row; }
          .overview-grid { grid-template-columns: 1fr; }
          .admit-grid { grid-template-columns: 1fr; }
          .quick-facts { position: static; }
        }
      `}</style>

      {/* HERO */}
      <section className="course-hero">
        <div className="course-hero-inner">
          <div>
            <div className="breadcrumb">
              <a href="/">Home</a> › <a href="/courses">Courses</a> › {course.name}
            </div>
            <div className="course-badge">🛡️ {course.aqf} · {course.code}</div>
            <h1 className="course-title">
              {course.name}<br />
              <span>{course.major}</span>
            </h1>
            <p className="course-subtitle">
              Defend. Detect. Protect. Build a career securing the digital world.
            </p>
            <div className="course-meta-row">
              <span className="course-meta-chip">🗓️ {course.duration}</span>
              <span className="course-meta-chip">📚 {course.subjects} Subjects</span>
              <span className="course-meta-chip">🏛️ {course.delivery.split("+")[0].trim()}</span>
              <span className="course-meta-chip">📍 Petersham NSW</span>
              <span className="course-meta-chip">🚀 First Intake: {course.firstOffering}</span>
            </div>
          </div>
          <div className="course-actions">
            <a href="/apply" className="btn-apply">Apply Now →</a>
            <a href="#" className="btn-brochure">📥 Download Brochure</a>
          </div>
        </div>
      </section>

      {/* TABS */}
      <div className="tabs-bar">
        <div className="tabs-inner">
          {tabs.map((t) => (
            <button
              key={t}
              className={`tab-btn ${activeTab === t ? "active" : ""}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ background: "#040810", minHeight: "60vh" }}>
        <div className="course-body">

          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="overview-grid">
              <div>
                <h2 className="section-title">About This Course</h2>
                <p className="section-sub">
                  AIE's Bachelor of Business (Cybersecurity) combines core business knowledge with specialised cybersecurity skills.
                </p>
                <p className="overview-desc">
                  The Bachelor of Business (Cybersecurity) at AIE is designed to prepare students for the growing demand for professionals who can protect organisations in an increasingly digital and interconnected world. Students develop competencies in cybersecurity fundamentals, risk management, digital forensics, network security, and governance frameworks.
                </p>
                <p className="overview-desc">
                  With cyber threats becoming more sophisticated and businesses relying heavily on secure digital systems, AIE equips graduates with the practical skills and analytical mindset needed to address current industry challenges and emerging opportunities.
                </p>

                <h3 className="outcomes-title">Graduate Outcomes</h3>
                {[
                  { code: "GA-CBS.01", text: "Professional Communication — Communicate cybersecurity concepts, risks and recommendations to both technical and non-technical stakeholders." },
                  { code: "GA-CBS.02", text: "Critical & Analytical Thinking — Analyse threats, assess vulnerabilities, and evaluate security data to solve complex cybersecurity problems." },
                  { code: "GA-CBS.03", text: "Ethical & Responsible Practice — Demonstrate integrity, confidentiality, and ethical judgement in digital investigations and security operations." },
                  { code: "GA-CBS.04", text: "Digital & Information Literacy — Use cybersecurity tools, digital platforms, and security frameworks to protect information assets." },
                  { code: "GA-CBS.05", text: "Teamwork & Collaboration — Work effectively in cross-functional teams on incident response and organisational security projects." },
                  { code: "GA-CBS.06", text: "Adaptability & Innovation — Respond to evolving cyber threats with agility, creativity, and a commitment to continuous learning." },
                ].map((o) => (
                  <div className="outcome-item" key={o.code}>
                    <span className="outcome-code">{o.code}</span>
                    <span className="outcome-text">{o.text}</span>
                  </div>
                ))}
              </div>

              <div>
                <div className="quick-facts">
                  <div className="qf-title">📋 Course At a Glance</div>
                  {[
                    ["Course Code", course.code],
                    ["Award", "Bachelor of Business"],
                    ["AQF Level", "7"],
                    ["Duration", course.duration],
                    ["Credit Points", "144 CP"],
                    ["Subjects", "24 total"],
                    ["Trimesters", "3 per year"],
                    ["First Offering", course.firstOffering],
                    ["Intakes", "March, July, November"],
                    ["Location", "Petersham NSW"],
                    ["Delivery", "Face-to-Face + Hybrid"],
                    ["Min ATAR", course.atar],
                    ["IELTS", course.ielts],
                  ].map(([label, value]) => (
                    <div className="qf-item" key={label}>
                      <span className="qf-label">{label}</span>
                      <span className="qf-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CURRICULUM TAB */}
          {activeTab === "curriculum" && (
            <div>
              <h2 className="section-title">Course Structure</h2>
              <p className="section-sub">
                144 credit points across 6 trimesters — 8 common core + 8 major + 8 elective subjects.
              </p>

              {/* T1 */}
              <div className="trimester-card">
                <div className="trimester-header">
                  <span className="trimester-label">Trimester 1 — Year 1</span>
                  <span className="trimester-tag tag-core">Common Core</span>
                </div>
                {coreSubjects.slice(0, 4).map((s) => (
                  <div className="subject-row" key={s.code}>
                    <span className="subject-code">{s.code}</span>
                    <span className="subject-name">{s.name}</span>
                    <span className="subject-cps">10 CP</span>
                  </div>
                ))}
              </div>

              {/* T2 */}
              <div className="trimester-card">
                <div className="trimester-header">
                  <span className="trimester-label">Trimester 2 — Year 1</span>
                  <span className="trimester-tag tag-core">Common Core</span>
                </div>
                {coreSubjects.slice(4).map((s) => (
                  <div className="subject-row" key={s.code}>
                    <span className="subject-code">{s.code}</span>
                    <span className="subject-name">{s.name}</span>
                    <span className="subject-cps">10 CP</span>
                  </div>
                ))}
              </div>

              {/* T3 */}
              <div className="trimester-card">
                <div className="trimester-header">
                  <span className="trimester-label">Trimester 3 — Year 2</span>
                  <span className="trimester-tag tag-major">Major + Electives</span>
                </div>
                {majorSubjects.slice(0, 2).map((s) => (
                  <div className="subject-row" key={s.code}>
                    <span className="subject-code">{s.code}</span>
                    <span className="subject-name">{s.name}</span>
                    <span className="subject-cps">10 CP</span>
                  </div>
                ))}
                <div className="subject-row"><span className="subject-code" style={{color:"rgba(255,255,255,0.3)"}}>ELECTIVE</span><span className="subject-name" style={{color:"rgba(255,255,255,0.35)"}}>Elective Subject 1</span><span className="subject-cps">10 CP</span></div>
                <div className="subject-row"><span className="subject-code" style={{color:"rgba(255,255,255,0.3)"}}>ELECTIVE</span><span className="subject-name" style={{color:"rgba(255,255,255,0.35)"}}>Elective Subject 2</span><span className="subject-cps">10 CP</span></div>
              </div>

              {/* T4 */}
              <div className="trimester-card">
                <div className="trimester-header">
                  <span className="trimester-label">Trimester 4 — Year 2</span>
                  <span className="trimester-tag tag-major">Major + Electives</span>
                </div>
                {majorSubjects.slice(2, 4).map((s) => (
                  <div className="subject-row" key={s.code}>
                    <span className="subject-code">{s.code}</span>
                    <span className="subject-name">{s.name}</span>
                    <span className="subject-cps">10 CP</span>
                  </div>
                ))}
                <div className="subject-row"><span className="subject-code" style={{color:"rgba(255,255,255,0.3)"}}>ELECTIVE</span><span className="subject-name" style={{color:"rgba(255,255,255,0.35)"}}>Elective Subject 3</span><span className="subject-cps">10 CP</span></div>
                <div className="subject-row"><span className="subject-code" style={{color:"rgba(255,255,255,0.3)"}}>ELECTIVE</span><span className="subject-name" style={{color:"rgba(255,255,255,0.35)"}}>Elective Subject 4</span><span className="subject-cps">10 CP</span></div>
              </div>

              {/* T5 */}
              <div className="trimester-card">
                <div className="trimester-header">
                  <span className="trimester-label">Trimester 5 — Year 3</span>
                  <span className="trimester-tag tag-major">Advanced Major</span>
                </div>
                {majorSubjects.slice(4, 7).map((s) => (
                  <div className="subject-row" key={s.code}>
                    <span className="subject-code">{s.code}</span>
                    <span className="subject-name">{s.name}</span>
                    <span className="subject-cps">10 CP</span>
                  </div>
                ))}
                <div className="subject-row"><span className="subject-code" style={{color:"rgba(255,255,255,0.3)"}}>ELECTIVE</span><span className="subject-name" style={{color:"rgba(255,255,255,0.35)"}}>Elective Subject 5</span><span className="subject-cps">10 CP</span></div>
              </div>

              {/* T6 */}
              <div className="trimester-card">
                <div className="trimester-header">
                  <span className="trimester-label">Trimester 6 — Year 3 (Final)</span>
                  <span className="trimester-tag tag-major">Capstone + Electives</span>
                </div>
                <div className="subject-row">
                  <span className="subject-code">CBS304</span>
                  <span className="subject-name">⭐ Cybersecurity Project (Capstone)</span>
                  <span className="subject-cps">10 CP</span>
                </div>
                {["6","7","8"].map(n => (
                  <div className="subject-row" key={n}><span className="subject-code" style={{color:"rgba(255,255,255,0.3)"}}>ELECTIVE</span><span className="subject-name" style={{color:"rgba(255,255,255,0.35)"}}>Elective Subject {n}</span><span className="subject-cps">10 CP</span></div>
                ))}
              </div>

              {/* ELECTIVES */}
              <h3 style={{fontFamily:"Georgia,serif", color:"#fff", fontSize:22, margin:"40px 0 20px"}}>Available Electives</h3>
              <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:16}}>
                {electives.map((e) => (
                  <div key={e.code} style={{
                    background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)",
                    borderRadius:14, padding:"18px 22px", display:"flex", gap:14, alignItems:"center"
                  }}>
                    <span style={{fontSize:12, fontWeight:700, color:"#d4af37", fontFamily:"monospace", minWidth:60}}>{e.code}</span>
                    <span style={{fontSize:14, color:"rgba(255,255,255,0.75)"}}>{e.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CAREERS TAB */}
          {activeTab === "careers" && (
            <div>
              <h2 className="section-title">Career Outcomes</h2>
              <p className="section-sub">
                Graduates are work-ready for roles across cybersecurity operations, risk management, and digital protection.
              </p>
              <div className="careers-grid">
                {careers.map((c, i) => (
                  <div className="career-card" key={c}>
                    <div className="career-icon">
                      {["🔍","🛡️","📊","🔒","💼","🔎","🆔","📋","📢","🏢"][i % 10]}
                    </div>
                    <span className="career-name">{c}</span>
                  </div>
                ))}
              </div>

              <h3 style={{fontFamily:"Georgia,serif", color:"#fff", fontSize:22, margin:"48px 0 24px"}}>
                Graduate Attributes
              </h3>
              <div className="ga-grid">
                {[
                  { label: "COMMUNICATE", desc: "Apply effective communication skills in diverse contexts and through multiple modalities." },
                  { label: "THINK", desc: "Apply critical, creative and flexible thinking to contribute across diverse settings." },
                  { label: "ENGAGE", desc: "Engage effectively with contemporary and traditional knowledge across multiple contexts." },
                  { label: "INTEGRITY", desc: "Apply integrity and ethical standards to study, research, and professional practice." },
                  { label: "COMMUNITY", desc: "Use teamwork and leadership knowledge to advance teams, groups, and communities." },
                  { label: "GLOBAL", desc: "Apply culturally sensitive professional knowledge to contribute to a sustainable global future." },
                  { label: "SUSTAIN", desc: "Maintain currency and further develop knowledge and skills over a professional lifetime." },
                  { label: "EQUALITY", desc: "Enact inclusive practices that deliver social justice and equality of opportunity." },
                  { label: "WELLBEING", desc: "Maintain resilience and personal wellbeing when responding to challenges and opportunities." },
                ].map((g) => (
                  <div className="ga-card" key={g.label}>
                    <div className="ga-label">{g.label}</div>
                    <div className="ga-desc">{g.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADMISSIONS TAB */}
          {activeTab === "admissions" && (
            <div>
              <h2 className="section-title">Admission Requirements</h2>
              <p className="section-sub">
                Entry into the Bachelor of Business (Cybersecurity) for the 2027 intake — Domestic & International students.
              </p>
              <div className="admit-grid">
                <div className="admit-card">
                  <div className="admit-card-title">🎓 Academic Requirements</div>
                  {[
                    "Year 12 in Australia with a minimum ATAR of 65 or equivalent",
                    "Recognised international secondary qualification at equivalent level",
                    "Certificate IV (AQF 4) or higher from a recognised institution",
                    "General Certificate of Education Advanced Level (GCE A) with three or more C Grades",
                    "Global Assessment Certificate with an average grade of 65% or higher",
                    "International Baccalaureate (IB) diploma",
                  ].map((r) => (
                    <div className="req-item" key={r}><span className="req-check">✓</span><span>{r}</span></div>
                  ))}
                </div>

                <div className="admit-card">
                  <div className="admit-card-title">🌐 English Language Requirements</div>
                  {[
                    "IELTS Academic: overall 6.0 (no band below 5.5)",
                    "IBT TOEFL: overall score of 75 (writing minimum 17)",
                    "Cambridge CPE: Grades A, B, or C1",
                    "Cambridge CAE: total score of 52 or over",
                    "PTE Academic: score over 51",
                    "English for Academic Purposes (EAP 2): Grade A or B",
                    "Certificate IV in ESL",
                  ].map((r) => (
                    <div className="req-item" key={r}><span className="req-check">✓</span><span>{r}</span></div>
                  ))}
                  <div style={{marginTop:16, padding:"12px 14px", background:"rgba(212,175,55,0.07)", borderRadius:10, fontSize:12.5, color:"rgba(255,255,255,0.5)", border:"1px solid rgba(212,175,55,0.15)"}}>
                    English qualification must be less than 2 years old. UK, USA, Canada, NZ, and Ireland passport holders are exempt.
                  </div>
                </div>

                <div className="admit-card">
                  <div className="admit-card-title">📅 Key Dates — 2027</div>
                  {[
                    ["Term 1", "March 2027"],
                    ["Term 2", "July 2027"],
                    ["Term 3", "November 2027"],
                    ["Trimester Length", "14 weeks"],
                    ["Contact Hours/Week", "3 hrs/subject"],
                    ["Private Study/Week", "7 hrs/subject"],
                  ].map(([label, value]) => (
                    <div className="req-item" key={label} style={{justifyContent:"space-between"}}>
                      <span style={{color:"rgba(255,255,255,0.45)"}}>{label}</span>
                      <span style={{color:"#fff", fontWeight:600}}>{value}</span>
                    </div>
                  ))}
                </div>

                <div className="admit-card">
                  <div className="admit-card-title">💡 RPL & Credit Transfer</div>
                  <p style={{fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.7, marginBottom:16}}>
                    AIE recognises prior studies where relevant and may award credit in accordance with the Credit for Prior Learning Policy. Applicants with relevant work experience may also be assessed under alternative entry provisions.
                  </p>
                  <a href="/apply" className="btn-apply" style={{
                    display:"block", textAlign:"center", padding:"13px 20px",
                    background:"linear-gradient(135deg,#d4af37,#f0d060)",
                    color:"#0a0f28", fontWeight:800, borderRadius:10, textDecoration:"none", fontSize:14
                  }}>
                    Start Your Application →
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

    </>
  );
}