"use client";
import { useState } from "react";

const categories = ["All", "Common Core", "Cybersecurity", "Electives"];

const programs = [
  // Common Core — Year 1
  { code: "BUS101", title: "Business Communication",         dept: "Common Core",   duration: "Trimester 1", icon: "💬", tag: "" },
  { code: "BUS102", title: "Introduction to Marketing",      dept: "Common Core",   duration: "Trimester 1", icon: "📣", tag: "" },
  { code: "BUS103", title: "Financial Literacy",             dept: "Common Core",   duration: "Trimester 1", icon: "💰", tag: "" },
  { code: "BUS104", title: "Business Economics",             dept: "Common Core",   duration: "Trimester 1", icon: "📈", tag: "" },
  { code: "BUS105", title: "Introduction to Management",     dept: "Common Core",   duration: "Trimester 2", icon: "🏢", tag: "" },
  { code: "BUS106", title: "Organisational Behaviour",       dept: "Common Core",   duration: "Trimester 2", icon: "🧩", tag: "" },
  { code: "BUS107", title: "Accounting for Decision Making", dept: "Common Core",   duration: "Trimester 2", icon: "🧾", tag: "" },
  { code: "BUS108", title: "Business Law",                   dept: "Common Core",   duration: "Trimester 2", icon: "⚖️", tag: "" },
  // Cybersecurity Major
  { code: "CBS201", title: "Foundation of Cybersecurity",                  dept: "Cybersecurity", duration: "Trimester 3", icon: "🛡️", tag: "Core" },
  { code: "CBS202", title: "Network Security and Infrastructure",           dept: "Cybersecurity", duration: "Trimester 3", icon: "🌐", tag: "Core" },
  { code: "CBS203", title: "Cyber Risk Management",                        dept: "Cybersecurity", duration: "Trimester 4", icon: "⚠️", tag: "Core" },
  { code: "CBS204", title: "Digital Forensics and Incident Report",        dept: "Cybersecurity", duration: "Trimester 4", icon: "🔍", tag: "Core" },
  { code: "CBS301", title: "Cybersecurity Governance and Compliance",      dept: "Cybersecurity", duration: "Trimester 5", icon: "📋", tag: "Core" },
  { code: "CBS302", title: "Ethical Hacking and Vulnerability Assessment", dept: "Cybersecurity", duration: "Trimester 5", icon: "💻", tag: "Core" },
  { code: "CBS303", title: "Cloud Security Strategy and Leadership",       dept: "Cybersecurity", duration: "Trimester 5", icon: "☁️", tag: "Core" },
  { code: "CBS304", title: "Cybersecurity Project (Capstone)",             dept: "Cybersecurity", duration: "Trimester 6", icon: "🏆", tag: "Capstone" },
  // Electives
  { code: "INF205", title: "Cloud Computing for Business",                              dept: "Electives", duration: "Elective", icon: "☁️", tag: "" },
  { code: "INF305", title: "Artificial Intelligence and Machine Learning",              dept: "Electives", duration: "Elective", icon: "🤖", tag: "New" },
  { code: "HTM205", title: "Digital Marketing & Social Media Strategy",                dept: "Electives", duration: "Elective", icon: "📱", tag: "" },
  { code: "HTM305", title: "Customer Experiences and Services",                        dept: "Electives", duration: "Elective", icon: "🤝", tag: "" },
  { code: "CBS205", title: "Artificial Intelligence for Cybersecurity",                dept: "Electives", duration: "Elective", icon: "🧠", tag: "New" },
  { code: "CBS305", title: "Blockchain and Distributed Security Systems",              dept: "Electives", duration: "Elective", icon: "🔗", tag: "" },
];

export default function Programs() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? programs : programs.filter((p) => p.dept === active);

  return (
    <>
      <style>{`
        .programs-section {
          position: relative;
          background: #eff6ff;
          padding: 96px 2rem;
          overflow: hidden;
        }
        .programs-section::before {
          content: '';
          position: absolute;
          right: -100px;
          top: 50%;
          transform: translateY(-50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .prog-inner { max-width: 1300px; margin: 0 auto; }

        /* Header */
        .prog-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #1d4ed8;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .prog-title {
          font-family: Georgia, serif;
          font-size: clamp(28px, 3.5vw, 48px);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.12;
          margin-bottom: 14px;
        }
        .prog-title span { color: #2563eb; }
        .prog-sub {
          color: #64748b;
          font-size: 16px;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
          font-family: sans-serif;
        }

        /* Filters */
        .filter-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 48px;
        }
        .filter-tab-btn {
          padding: 8px 22px;
          border-radius: 50px;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          color: #64748b;
          font-size: 13.5px;
          font-weight: 500;
          font-family: sans-serif;
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-tab-btn:hover {
          border-color: rgba(59,130,246,0.5);
          color: #1d4ed8;
        }
        .filter-tab-btn.active {
          background: #dbeafe;
          border-color: #93c5fd;
          color: #1d4ed8;
          font-weight: 700;
        }

        /* Grid */
        .prog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        /* Card */
        .program-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .program-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0);
          transition: transform 0.3s;
          transform-origin: left;
        }
        .program-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(59,130,246,0.12);
          border-color: #93c5fd;
          background: #f8fbff;
        }
        .program-card:hover::after { transform: scaleX(1); }

        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .card-icon {
          width: 52px; height: 52px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        .card-tag {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-family: sans-serif;
        }
        .tag-core     { background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; }
        .tag-capstone { background: #fefce8; color: #92400e; border: 1px solid #fde68a; }
        .tag-new      { background: #f0fdf4; color: #166534; border: 1px solid #86efac; }

        .card-code {
          font-size: 11.5px;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-weight: 700;
          font-family: monospace;
          margin-bottom: 4px;
        }
        .card-title {
          font-family: Georgia, serif;
          font-size: 16.5px;
          color: #0f172a;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 16px;
        }
        .card-meta {
          display: flex;
          gap: 16px;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }
        .card-meta-item {
          font-size: 12.5px;
          color: #94a3b8;
          font-family: sans-serif;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .card-meta-item span { color: #475569; font-weight: 600; }

        /* Bottom CTA */
        .prog-bottom { text-align: center; margin-top: 48px; }
        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 36px;
          border-radius: 50px;
          border: 2px solid #3b82f6;
          color: #2563eb;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          font-family: sans-serif;
          transition: all 0.2s;
          background: transparent;
        }
        .view-all-btn:hover {
          background: #2563eb;
          color: #fff;
        }

        /* Stat bar */
        .stat-bar {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .stat-bar-item { text-align: center; }
        .stat-bar-num {
          font-family: Georgia, serif;
          font-size: 32px;
          font-weight: 700;
          color: #1d4ed8;
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-bar-lbl { font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-family: sans-serif; }
      `}</style>

      <section className="programs-section" id="programs">
        <div className="prog-inner">

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="prog-label">📚 Academics — MAJ2603-CBS</div>
            <h2 className="prog-title">
              Bachelor of Business —<br /><span>Major in Cybersecurity</span>
            </h2>
            <p className="prog-sub">
              24 subjects across 6 trimesters. Build your career at the intersection
              of business strategy and digital security.
            </p>
          </div>

          {/* Stat bar */}
          <div className="stat-bar">
            {[
              { num: "24", lbl: "Total Subjects" },
              { num: "144", lbl: "Credit Points" },
              { num: "3", lbl: "Intakes Per Year" },
              { num: "AQF 7", lbl: "Qualification" },
            ].map((s) => (
              <div className="stat-bar-item" key={s.lbl}>
                <div className="stat-bar-num">{s.num}</div>
                <div className="stat-bar-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Filter tabs */}
          <div className="filter-tabs">
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-tab-btn ${active === c ? "active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="prog-grid">
            {filtered.map((prog) => (
              <div className="program-card" key={prog.code}>
                <div className="card-top">
                  <div className="card-icon">{prog.icon}</div>
                  {prog.tag && (
                    <span className={`card-tag ${
                      prog.tag === "Core" ? "tag-core" :
                      prog.tag === "Capstone" ? "tag-capstone" :
                      "tag-new"
                    }`}>
                      {prog.tag}
                    </span>
                  )}
                </div>
                <div className="card-code">{prog.code}</div>
                <div className="card-title">{prog.title}</div>
                <div className="card-meta">
                  <div className="card-meta-item">📅 <span>{prog.duration}</span></div>
                  <div className="card-meta-item">🏷️ <span>{prog.dept}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="prog-bottom">
            <a href="/courses" className="view-all-btn">View Full Curriculum →</a>
          </div>

        </div>
      </section>
    </>
  );
}