export default function Partners() {
  const partners = [
    { name: "Microsoft", logo: "🪟", category: "Technology" },
    { name: "IBM Security", logo: "🔵", category: "Cybersecurity" },
    { name: "Cisco", logo: "🌐", category: "Networking" },
    { name: "AWS", logo: "☁️", category: "Cloud" },
    { name: "Palo Alto Networks", logo: "🛡️", category: "Cybersecurity" },
    { name: "Deloitte", logo: "🏢", category: "Consulting" },
    { name: "PwC Australia", logo: "🔷", category: "Consulting" },
    { name: "CrowdStrike", logo: "🦅", category: "Cybersecurity" },
    { name: "CompTIA", logo: "📜", category: "Certification" },
    { name: "ISACA", logo: "🎓", category: "Governance" },
    { name: "Fortinet", logo: "🔐", category: "Security" },
    { name: "Google Cloud", logo: "🌩️", category: "Cloud" },
  ];

  const stats = [
    { num: "40+",  label: "Industry Partners" },
    { num: "98%",  label: "Graduate Employment" },
    { num: "500+", label: "Job Placements" },
    { num: "3",    label: "Intake Periods/Year" },
  ];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-bold text-[11px] tracking-[3px] uppercase mb-3">
            Industry Connections
          </p>
          <h2 className="font-serif text-[clamp(28px,3.5vw,46px)] font-bold text-slate-900 leading-tight mb-4">
            Our <span className="text-blue-600">Industry Partners</span>
          </h2>
          <p className="text-slate-500 text-base max-w-[520px] mx-auto leading-relaxed">
            AIE graduates are sought after by leading organisations across cybersecurity,
            technology, consulting, and finance. Our partnerships open real doors.
          </p>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 bg-blue-50 border border-blue-100 rounded-2xl"
            >
              <div className="font-serif text-[36px] font-bold text-blue-700 leading-none mb-2">
                {s.num}
              </div>
              <div className="text-[12px] text-slate-500 uppercase tracking-wide font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Partner logos grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col items-center justify-center gap-3 p-5
                         bg-slate-50 border border-slate-200 rounded-2xl
                         hover:bg-blue-50 hover:border-blue-300 hover:shadow-md
                         transition-all duration-200 cursor-pointer"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-200">
                {p.logo}
              </span>
              <span className="text-[12.5px] font-semibold text-slate-700 text-center leading-tight">
                {p.name}
              </span>
              <span className="text-[10px] font-medium text-blue-500 bg-blue-50 border border-blue-100
                               px-2 py-0.5 rounded-full uppercase tracking-wide">
                {p.category}
              </span>
            </div>
          ))}
        </div>

        {/* ── Bottom banner ── */}
        <div className="relative bg-gradient-to-br from-[#0f2157] to-[#1d4ed8] rounded-3xl p-10 md:p-14 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-52 h-52 bg-white/5 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-white/5 rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-blue-300 text-[11px] font-bold tracking-[2px] uppercase mb-2">
                Career Outcomes
              </p>
              <h3 className="font-serif text-[clamp(22px,3vw,36px)] font-bold text-white leading-tight mb-3">
                Graduate into a Role That Matters
              </h3>
              <p className="text-blue-100/80 text-[15px] max-w-lg leading-relaxed">
                Our industry partnerships translate into real internships, graduate programs,
                and full-time roles for AIE graduates — from day one.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="/courses"
                className="px-8 py-4 bg-white text-blue-700 font-bold text-[14px] rounded-full
                           hover:bg-blue-50 transition-all duration-200 text-center
                           shadow-lg shadow-black/20 whitespace-nowrap"
              >
                View Courses →
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold
                           text-[14px] rounded-full hover:bg-white/20 transition-all duration-200
                           text-center whitespace-nowrap"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}