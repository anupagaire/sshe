"use client";
import { useState } from "react";

const categories = ["All", "Engineering", "Science", "Commerce", "Arts", "Management"];

const programs = [
  { title: "B.Tech Computer Science", dept: "Engineering", duration: "4 Years", seats: 120, icon: "💻", tag: "Hot" },
  { title: "B.Tech Electronics", dept: "Engineering", duration: "4 Years", seats: 60, icon: "⚡", tag: "" },
  { title: "M.Tech AI & ML", dept: "Engineering", duration: "2 Years", seats: 40, icon: "🤖", tag: "New" },
  { title: "B.Sc Data Science", dept: "Science", duration: "3 Years", seats: 80, icon: "📊", tag: "" },
  { title: "B.Sc Cybersecurity", dept: "Science", duration: "3 Years", seats: 50, icon: "🛡️", tag: "Hot" },
];

export default function Programs() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? programs : programs.filter((p) => p.dept === active);

  return (
    <>
      <style>{`
        .programs-section::before {
          content: '';
          position: absolute;
          right: -100px;
          top: 50%;
          transform: translateY(-50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .program-card {
          transition: all 0.3s;
        }
        .program-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(59,130,246,0.1);
          border-color: rgba(59,130,246,0.35) !important;
          background: #eff6ff !important;
        }
        .filter-tab-btn {
          transition: all 0.2s;
        }
        .filter-tab-btn:hover {
          border-color: rgba(59,130,246,0.5);
          color: #1d4ed8;
        }
      `}</style>

      <section
        id="programs"
        className="programs-section relative bg-blue-50 py-24 px-8"
      >
        <div className="max-w-[1300px] mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[3px] uppercase text-blue-600 font-bold mb-4">
              Academics
            </div>
            <h2 className="font-serif text-[clamp(30px,3.5vw,50px)] font-bold text-slate-900 leading-[1.12] mb-4">
              Find Your <span className="text-blue-600">Perfect Program</span>
            </h2>
            <p className="text-slate-500 text-base max-w-[520px] mx-auto leading-[1.7]">
              Explore 200+ courses across 8 schools of study, each designed to launch exceptional careers.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex justify-center flex-wrap gap-2.5 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`filter-tab-btn px-5 py-2 rounded-full text-[13.5px] font-medium border cursor-pointer
                  ${active === c
                    ? "bg-blue-100 border-blue-400 text-blue-700 font-bold"
                    : "bg-white border-slate-200 text-slate-500"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
            {filtered.map((prog) => (
              <div
                key={prog.title}
                className="program-card bg-white border border-slate-200 rounded-[20px] p-7 cursor-pointer"
              >
                {/* Top row: icon + tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-[52px] h-[52px] bg-blue-50 border border-blue-100 rounded-[14px] flex items-center justify-center text-2xl">
                    {prog.icon}
                  </div>
                  {prog.tag && (
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border
                        ${prog.tag === "Hot"
                          ? "bg-red-50 text-red-500 border-red-200"
                          : "bg-green-50 text-green-600 border-green-200"
                        }`}
                    >
                      {prog.tag}
                    </span>
                  )}
                </div>

                {/* Dept */}
                <div className="text-[12px] text-blue-600 uppercase tracking-[1px] font-semibold mb-2">
                  {prog.dept}
                </div>

                {/* Title */}
                <div className="font-serif text-[17px] text-slate-900 font-bold leading-snug mb-4">
                  {prog.title}
                </div>

                {/* Meta */}
                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-[12.5px] text-slate-400">
                    ⏱ <span className="text-slate-600 font-medium">{prog.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[12.5px] text-slate-400">
                    🎓 <span className="text-slate-600 font-medium">{prog.seats} Seats</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-9 py-3 rounded-full border-2 border-blue-400 text-blue-600 text-[14px] font-semibold transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              View All 200+ Programs →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}