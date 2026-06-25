"use client";
import { useState } from "react";

const programs = [
  { code: "BUS101", title: "Business Communication",         dept: "Common Core",   trim: "Tri 1", icon: "💬" },
  { code: "BUS102", title: "Introduction to Marketing",      dept: "Common Core",   trim: "Tri 1", icon: "📣" },
  { code: "BUS103", title: "Financial Literacy",             dept: "Common Core",   trim: "Tri 1", icon: "💰" },
  { code: "BUS104", title: "Business Economics",             dept: "Common Core",   trim: "Tri 1", icon: "📈" },
  { code: "BUS105", title: "Introduction to Management",     dept: "Common Core",   trim: "Tri 2", icon: "🏢" },
  { code: "BUS106", title: "Organisational Behaviour",       dept: "Common Core",   trim: "Tri 2", icon: "🧩" },
  { code: "BUS107", title: "Accounting for Decision Making", dept: "Common Core",   trim: "Tri 2", icon: "🧾" },
  { code: "BUS108", title: "Business Law",                   dept: "Common Core",   trim: "Tri 2", icon: "⚖️" },
  { code: "CBS201", title: "Foundation of Cybersecurity",                  dept: "Cybersecurity", trim: "Tri 3", icon: "🛡️", tag: "Core" },
  { code: "CBS202", title: "Network Security and Infrastructure",           dept: "Cybersecurity", trim: "Tri 3", icon: "🌐", tag: "Core" },
  { code: "CBS203", title: "Cyber Risk Management",                        dept: "Cybersecurity", trim: "Tri 4", icon: "⚠️", tag: "Core" },
  { code: "CBS204", title: "Digital Forensics and Incident Response",      dept: "Cybersecurity", trim: "Tri 4", icon: "🔍", tag: "Core" },
  { code: "CBS301", title: "Cybersecurity Governance and Compliance",      dept: "Cybersecurity", trim: "Tri 5", icon: "📋", tag: "Core" },
  { code: "CBS302", title: "Ethical Hacking and Vulnerability Assessment", dept: "Cybersecurity", trim: "Tri 5", icon: "💻", tag: "Core" },
  { code: "CBS303", title: "Cloud Security Strategy and Leadership",       dept: "Cybersecurity", trim: "Tri 5", icon: "☁️", tag: "Core" },
  { code: "CBS304", title: "Cybersecurity Project (Capstone)",             dept: "Cybersecurity", trim: "Tri 6", icon: "🏆", tag: "Capstone" },
  { code: "INF205", title: "Cloud Computing for Business",                 dept: "Electives",     trim: "Elective", icon: "☁️" },
  { code: "INF305", title: "Artificial Intelligence & Machine Learning",   dept: "Electives",     trim: "Elective", icon: "🤖", tag: "New" },
  { code: "CBS205", title: "Artificial Intelligence for Cybersecurity",    dept: "Electives",     trim: "Elective", icon: "🧠", tag: "New" },
  { code: "CBS305", title: "Blockchain and Distributed Security Systems",  dept: "Electives",     trim: "Elective", icon: "🔗" },
  { code: "HTM205", title: "Digital Marketing & Social Media Strategy",    dept: "Electives",     trim: "Elective", icon: "📱" },
  { code: "HTM305", title: "Customer Experiences and Services",            dept: "Electives",     trim: "Elective", icon: "🤝" },
];

const categories = ["All", "Common Core", "Cybersecurity", "Electives"];

// Show only 6 cards on homepage — enough to entice, not overwhelm
const PREVIEW_COUNT = 6;
const PREVIEW_PICK = [
  "CBS201","CBS202","CBS302","CBS304","INF305","CBS205"
];

export default function Programs() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? programs : programs.filter((p) => p.dept === active);

  return (
    <>
      <style>{`
        .prog-section {
          background: #eff6ff;
          padding: 80px 2rem 64px;
          position: relative;
          overflow: hidden;
        }
        .prog-section::before {
          content:'';
          position:absolute;
          right:-80px; top:50%;
          transform:translateY(-50%);
          width:420px; height:420px;
          background:radial-gradient(circle,rgba(59,130,246,0.07) 0%,transparent 70%);
          pointer-events:none;
        }
        .prog-inner { max-width:1200px; margin:0 auto; }

        /* ── HEADER ── */
        .prog-header { text-align:center; margin-bottom:36px; }
        .prog-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:11px; letter-spacing:3px; text-transform:uppercase;
          color:#1d4ed8; font-weight:700; margin-bottom:12px;
          font-family:sans-serif;
        }
        .prog-h2 {
          font-family:Georgia,serif;
          font-size:clamp(26px,3vw,42px);
          font-weight:700; color:#0f172a; line-height:1.12; margin-bottom:10px;
        }
        .prog-h2 span { color:#2563eb; }
        .prog-sub {
          color:#64748b; font-size:15px; max-width:480px;
          margin:0 auto; line-height:1.7; font-family:sans-serif;
        }

        /* ── STAT STRIP ── */
        .stat-strip {
          display:flex; justify-content:center; flex-wrap:wrap;
          gap:0; margin-bottom:40px;
          background:#fff; border:1px solid #e2e8f0;
          border-radius:16px; overflow:hidden;
        }
        .stat-strip-item {
          flex:1; min-width:120px; text-align:center;
          padding:18px 20px;
          border-right:1px solid #e2e8f0;
        }
        .stat-strip-item:last-child { border-right:none; }
        .stat-num {
          font-family:Georgia,serif; font-size:26px;
          font-weight:700; color:#1d4ed8; line-height:1; margin-bottom:3px;
        }
        .stat-lbl { font-size:11px; color:#94a3b8; letter-spacing:1px; text-transform:uppercase; font-family:sans-serif; }

        /* ── TABS ── */
        .tabs {
          display:flex; justify-content:center; flex-wrap:wrap;
          gap:8px; margin-bottom:36px;
        }
        .tab-btn {
          padding:7px 20px; border-radius:50px;
          border:1.5px solid #e2e8f0; background:#fff;
          color:#64748b; font-size:13px; font-weight:500;
          font-family:sans-serif; cursor:pointer; transition:all 0.2s;
        }
        .tab-btn:hover { border-color:#93c5fd; color:#1d4ed8; }
        .tab-btn.on { background:#dbeafe; border-color:#93c5fd; color:#1d4ed8; font-weight:700; }

        /* ── GRID ── */
        .prog-grid {
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
          gap:16px;
          margin-bottom:36px;
        }

        /* ── CARD ── */
        .prog-card {
          background:#fff; border:1.5px solid #e2e8f0;
          border-radius:18px; padding:22px;
          transition:all 0.25s; position:relative; overflow:hidden;
          cursor:default;
        }
        .prog-card::after {
          content:''; position:absolute;
          bottom:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#2563eb,#60a5fa);
          transform:scaleX(0); transition:transform 0.3s;
          transform-origin:left;
        }
        .prog-card:hover {
          transform:translateY(-4px);
          box-shadow:0 16px 48px rgba(59,130,246,0.11);
          border-color:#93c5fd; background:#f8fbff;
        }
        .prog-card:hover::after { transform:scaleX(1); }

        .card-top { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:14px; }
        .card-icon {
          width:46px; height:46px; background:#eff6ff;
          border:1px solid #bfdbfe; border-radius:12px;
          display:flex; align-items:center; justify-content:center; font-size:22px;
        }
        .ctag {
          padding:3px 10px; border-radius:20px;
          font-size:10px; font-weight:700; letter-spacing:0.5px;
          text-transform:uppercase; font-family:sans-serif;
        }
        .ctag-core     { background:#eff6ff; color:#1d4ed8; border:1px solid #bfdbfe; }
        .ctag-capstone { background:#fefce8; color:#92400e; border:1px solid #fde68a; }
        .ctag-new      { background:#f0fdf4; color:#166534; border:1px solid #86efac; }

        .card-code {
          font-size:11px; color:#2563eb; letter-spacing:1.2px;
          font-weight:700; font-family:monospace; margin-bottom:3px; text-transform:uppercase;
        }
        .card-title {
          font-family:Georgia,serif; font-size:15.5px;
          color:#0f172a; font-weight:700; line-height:1.3; margin-bottom:14px;
        }
        .card-foot {
          display:flex; gap:12px; padding-top:12px;
          border-top:1px solid #f1f5f9;
        }
        .card-chip {
          font-size:11.5px; color:#94a3b8; font-family:sans-serif;
          display:flex; align-items:center; gap:4px;
        }
        .card-chip b { color:#475569; }

        /* ── FOOTER ROW ── */
        .prog-footer {
          display:flex; align-items:center; justify-content:space-between;
          flex-wrap:wrap; gap:16px;
          background:#fff; border:1px solid #e2e8f0; border-radius:16px;
          padding:20px 28px;
        }
        .prog-footer-left { font-size:14px; color:#475569; font-family:sans-serif; }
        .prog-footer-left strong { color:#0f172a; }
        .view-btn {
          display:inline-flex; align-items:center; gap:8px;
          padding:11px 28px; border-radius:50px;
          border:2px solid #3b82f6; color:#2563eb;
          text-decoration:none; font-size:13.5px; font-weight:600;
          font-family:sans-serif; transition:all 0.2s; background:transparent;
        }
        .view-btn:hover { background:#2563eb; color:#fff; }
      `}</style>

      <section className="prog-section" id="programs">
        <div className="prog-inner">

          {/* Header */}
          <div className="prog-header">
            <div className="prog-eyebrow">📚 MAJ2603-CBS · AQF Level 7</div>
            <h2 className="prog-h2">
              Bachelor of Business<br />
              <span>Major in Cybersecurity</span>
            </h2>
            <p className="prog-sub">
              24 subjects · 6 trimesters · Build your career at the intersection
              of business strategy and digital security.
            </p>
          </div>

          {/* Stat strip */}
          <div className="stat-strip">
            {[
              { num: "24",     lbl: "Total Subjects"   },
              { num: "144",    lbl: "Credit Points"    },
              { num: "3",      lbl: "Intakes / Year"   },
              { num: "AQF 7",  lbl: "Qualification"    },
              { num: "2027",   lbl: "First Intake"     },
            ].map(s => (
              <div className="stat-strip-item" key={s.lbl}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Filter tabs */}
          <div className="tabs">
            {categories.map(c => (
              <button
                key={c}
                className={`tab-btn ${active === c ? "on" : ""}`}
                onClick={() => setActive(c)}
              >
                {c === "All" && `All (${programs.length})`}
                {c === "Common Core" && `📚 Core Business (8)`}
                {c === "Cybersecurity" && `🛡️ Cybersecurity (8)`}
                {c === "Electives" && `⚡ Electives (6)`}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="prog-grid">
            {filtered.map(p => (
              <div className="prog-card" key={p.code}>
                <div className="card-top">
                  <div className="card-icon">{p.icon}</div>
                  {p.tag && (
                    <span className={`ctag ${
                      p.tag === "Core" ? "ctag-core" :
                      p.tag === "Capstone" ? "ctag-capstone" : "ctag-new"
                    }`}>{p.tag}</span>
                  )}
                </div>
                <div className="card-code">{p.code}</div>
                <div className="card-title">{p.title}</div>
                <div className="card-foot">
                  <div className="card-chip">📅 <b>{p.trim}</b></div>
                  <div className="card-chip">🏷️ <b>{p.dept}</b></div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer row */}
          <div className="prog-footer">
            <div className="prog-footer-left">
              Showing <strong>{filtered.length} of {programs.length}</strong> subjects ·
              Start date: <strong>March 2027</strong> ·
              Campus: <strong>Petersham NSW</strong>
            </div>
            <a href="/courses" className="view-btn">View Full Curriculum →</a>
          </div>

        </div>
      </section>
    </>
  );
}