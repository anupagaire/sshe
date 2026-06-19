"use client";
import React from "react";

const campusFeatures = [
  { icon: "🛡️", title: "Cyber Security Lab",     desc: "Hands-on lab environments simulating real-world threats, penetration testing, and incident response scenarios." },
  { icon: "💻", title: "Tech & IT Suites",        desc: "24/7 access to modern computing suites with industry-standard security tools and software licences." },
  { icon: "📖", title: "Digital Library",         desc: "Access to thousands of e-books, academic journals, cybersecurity databases, and research publications." },
  { icon: "🏢", title: "Collaborative Spaces",    desc: "Open learning areas, project rooms, and innovation hubs designed for group work and ideation." },
  { icon: "🎓", title: "Student Support Hub",     desc: "Dedicated academic advisors, career counsellors, and wellbeing services all under one roof." },
  { icon: "🌐", title: "Industry Connect Room",   desc: "Video-conferencing suites for live sessions with global industry partners, guest lecturers, and recruiters." },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Cybersecurity Analyst, IBM Security",
    batch: "BBus (Cybersecurity), AIE 2027",
    avatar: "SM",
    quote: "AIE gave me the technical foundation and business mindset to walk into IBM on day one and contribute meaningfully. The cybersecurity major is genuinely industry-grade.",
    color: "#2563eb",
  },
  {
    name: "James Nguyen",
    role: "SOC Analyst, CrowdStrike",
    batch: "BBus (Cybersecurity), AIE 2027",
    avatar: "JN",
    quote: "The Digital Forensics and Ethical Hacking subjects were unlike anything I'd studied before — practical, challenging, and directly relevant to what I do every day at work.",
    color: "#b8922a",
  },
  {
    name: "Aisha Rahman",
    role: "GRC Analyst, Deloitte Australia",
    batch: "BUS + CBS Major, AIE 2027",
    avatar: "AR",
    quote: "The combination of Business Law, Cyber Risk Management, and Governance gave me the edge in landing my GRC role. AIE bridges the gap between security and business like no other.",
    color: "#16a34a",
  },
];


// ─── CAMPUS LIFE ───────────────────────────────────────────────────────────────
export function CampusLife() {
  return (
    <section id="campus" className=" py-4 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-blue-600 font-bold text-[11px] tracking-[3px] uppercase mb-3">
            Campus Life
          </p>
          <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] font-bold text-slate-900 leading-tight mb-4">
            Beyond the <span className="text-blue-600">Classroom</span>
          </h2>
          <p className="text-slate-500 text-base max-w-[520px] mx-auto leading-relaxed">
            Located in Petersham NSW, AIE&apos;s campus is equipped with everything you need
            to learn, grow, and thrive in your studies.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {campusFeatures.map((f) => (
            <div
              key={f.title}
              className="group bg-white border border-slate-200 rounded-2xl p-8
                         hover:border-blue-300 hover:bg-blue-50/40 hover:-translate-y-1.5
                         hover:shadow-lg hover:shadow-blue-100/60 transition-all duration-300
                         relative overflow-hidden"
            >
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px]
                              bg-gradient-to-r from-transparent via-blue-500 to-transparent
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <span className="text-4xl mb-5 block">{f.icon}</span>
              <div className="font-serif text-[18px] font-bold text-slate-900 mb-3">{f.title}</div>
              <div className="text-[14px] text-slate-500 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PARALLAX STATS BANNER ─────────────────────────────────────────────────────
export function StatsBanner() {
  const stats = [
    { num: "144",   label: "Credit Points",        icon: "📚" },
    { num: "24",    label: "Total Subjects",        icon: "📋" },
    { num: "3",     label: "Intakes Per Year",      icon: "📅" },
    { num: "10+",   label: "Career Pathways",       icon: "💼" },
    { num: "AQF 7", label: "Qualification Level",   icon: "🎓" },
    { num: "100%",  label: "Hybrid Delivery Yr 2–3",icon: "🌐" },
  ];

  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(15,33,87,0.93) 0%, rgba(29,78,216,0.88) 100%),
          url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",   /* parallax effect */
      }}
    >
      {/* Decorative ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] border border-white/5 rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-blue-300 font-bold text-[11px] tracking-[3px] uppercase mb-3">
            Program Snapshot
          </p>
          <h2 className="font-serif text-[clamp(26px,3.5vw,44px)] font-bold text-white leading-tight">
            The Numbers Behind <span className="text-blue-300">AIE&apos;s Cybersecurity Degree</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 bg-white/8 backdrop-blur-sm border border-white/15
                         rounded-2xl hover:bg-white/15 hover:border-white/30
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-serif text-[28px] font-bold text-white leading-none mb-2">
                {s.num}
              </div>
              <div className="text-[11.5px] text-blue-200 uppercase tracking-wide font-medium leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ──────────────────────────────────────────────────────────────
export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 px-6 border-t border-slate-100">
      <div className="max-w-[1300px] mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 font-bold text-[11px] tracking-[3px] uppercase mb-3">
            Alumni Voices
          </p>
          <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] font-bold text-slate-900 leading-tight mb-4">
            Stories of <span className="text-amber-600">Success</span>
          </h2>
          <p className="text-slate-500 text-base max-w-[480px] mx-auto leading-relaxed">
            Hear from graduates who launched their cybersecurity careers with an AIE degree.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 rounded-3xl p-9 relative
                         border hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              style={{ borderColor: `${t.color}33` }}
            >
              {/* Big quote mark */}
              <div
                className="absolute top-5 right-7 font-serif text-[72px] leading-none opacity-10 select-none"
                style={{ color: t.color }}
              >
                &quot;
              </div>

              <p className="text-slate-600 text-[15px] leading-[1.85] italic mb-8 relative z-10">
                {t.quote}
              </p>

              <div
                className="flex items-center gap-4 pt-6 border-t"
                style={{ borderColor: `${t.color}22` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center
                              text-white font-bold text-[13px] flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-serif text-[15px] font-bold text-slate-900">{t.name}</div>
                  <div className="text-[12.5px] text-slate-500">{t.role}</div>
                  <div
                    className="text-[11.5px] font-semibold mt-0.5"
                    style={{ color: t.color }}
                  >
                    {t.batch}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ADMISSIONS CTA (with bg image + parallax) ─────────────────────────────────
export function AdmissionsCTA() {
  return (
    <section
  id="admissions"
  className="relative py-28 px-6 overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.9)
      ),
      url('2.jpg')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/5 rounded-full pointer-events-none" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">

        <p className="text-amber-200 font-bold text-[11px] tracking-[3px] uppercase mb-5">
          🎓 Admissions 2027 — Now Open
        </p>

        <h2 className="font-serif text-[clamp(32px,5vw,60px)] font-bold text-white leading-[1.1] mb-6">
          Begin Your Journey<br />at <span className="text-amber-200">AIE</span>
        </h2>

        <p className="text-white/75 text-[17px] max-w-[540px] mx-auto leading-relaxed mb-10">
          Applications for the 2027 academic year are open across three intake periods.
          Join the next generation of cybersecurity and business leaders.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          <a
            href="/admissions"
            className="px-10 py-4 bg-white text-amber-800 font-bold text-[15px] rounded-full
                       hover:bg-amber-50 hover:-translate-y-1 hover:shadow-xl
                       transition-all duration-200 shadow-lg shadow-black/20"
          >
            Start Application →
          </a>
          
        </div>

       

      </div>
    </section>
  );
}