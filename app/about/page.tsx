"use client";

import Image from "next/image";

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
    <div className="min-h-screen bg-white text-gray-900 py-20">
      {/* HERO SECTION */}
     <section
  className="relative min-h-[600px] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: "url('/sydney.jpg')",
  }}

      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a97b0]/85 via-[#0a97b0]/85 to-gray-900/90"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <span>🏛️</span>
              <span>About AIE</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Atlas Institute of <span className="text-[#d4af37]">Education</span>
            </h1>

            <p className="text-lg text-white/90 leading-relaxed mb-4 max-w-2xl">
              AIE seeks to produce students with the knowledge, competencies, and values necessary to develop critical, analytical, and evaluative skills essential for a fulfilling career in business. We prepare students to be work-ready business professionals from day one.
            </p>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              Leveraging emerging fields of artificial intelligence, machine learning, and cybersecurity, our courses produce practical pathways that help graduates stay abreast of the technologies of the future.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <div>
              <div className="text-[#0a97b0] text-xs font-bold uppercase tracking-widest mb-3">
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Education Built for the <span className="text-[#0a97b0]">Future of Work</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Bachelor of Business at AIE has been designed as a comprehensive academic program providing foundation skills in traditional business disciplines — leadership, management, marketing, finance, economics, and accounting.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Unlike traditional business courses, AIE additionally provides intensive instruction and practical experience in the application of technologies and data analytics, ensuring graduates are equipped for a rapidly changing digital economy.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "🏢", title: "Petersham Campus", desc: "Level 4/590 Parramatta Rd, Petersham NSW 2049" },
                  { icon: "📅", title: "First Offering", desc: "Trimester 1, 2027 — Three intakes per year" },
                  { icon: "🎓", title: "AQF Level 7", desc: "Fully recognised Bachelor degree qualification" },
                ].map((h) => (
                  <div
                    key={h.title}
                    className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#0a97b0]/30 hover:bg-[#0a97b0]/5 transition-all"
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5">{h.icon}</span>
                    <div>
                      <strong className="block text-gray-900 text-sm mb-1">{h.title}</strong>
                      <span className="text-gray-500 text-sm">{h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Side */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#0a97b0] to-transparent"></div>
              {[
                { num: "3", lbl: "Year Bachelor Degree" },
                { num: "3", lbl: "Intakes Per Year" },
                { num: "24", lbl: "Subjects Total" },
                { num: "144", lbl: "Credit Points" },
              ].map((s, i) => (
                <div
                  key={s.lbl}
                  className={`text-center py-6 ${i < 3 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="text-5xl font-bold text-[#0a97b0] leading-none mb-2">
                    {s.num}
                  </div>
                  <div className="text-sm text-gray-500 tracking-wide">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGE FROM THE DEAN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Dean Photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-gradient-to-br from-[#0a97b0] to-[#0d8fa3]">
                  <Image
                    src="/dean-photo.jpg"
                    alt="Dean of AIE"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Fallback if no image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-8xl font-bold">
                    👤
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">Professor John Smith</h3>
                  <p className="text-[#0a97b0] font-semibold text-sm mt-1">Dean of AIE</p>
                  <p className="text-gray-500 text-xs mt-1">PhD, MBA, FHEA</p>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <div className="text-[#0a97b0] text-xs font-bold uppercase tracking-widest mb-3">
                Message from the Dean
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                A Welcome from <span className="text-[#0a97b0]">Our Leadership</span>
              </h2>

              <div className="prose prose-lg max-w-none space-y-5 text-gray-700 leading-relaxed">
                <p>
                  <span className="text-5xl font-serif text-[#0a97b0] float-left mr-3 mt-1 leading-none">"</span>
                  Welcome to Atlas Institute of Education. It is my privilege to lead an institution that is redefining business education for the digital age.
                </p>
                <p>
                  At AIE, we believe that the future belongs to those who can blend traditional business acumen with cutting-edge technological skills. Our Bachelor of Business program has been thoughtfully designed to equip students with both the foundational knowledge and the innovative capabilities they need to thrive in today's rapidly evolving professional landscape.
                </p>
                <p>
                  What sets AIE apart is our commitment to practical, industry-aligned education. We don't just teach theory — we immerse our students in real-world scenarios, emerging technologies like artificial intelligence and cybersecurity, and hands-on projects that prepare them for the challenges they'll face in their careers.
                </p>
                <p>
                  Our faculty brings together decades of industry experience and academic excellence. We are passionate about mentoring the next generation of business leaders, and we take pride in the success of our graduates who are making meaningful contributions across industries in Australia and beyond.
                </p>
                <p>
                  Whether you are a domestic or international student, I invite you to explore what AIE has to offer. We are more than an educational institution — we are a community dedicated to your growth, your success, and your future.
                </p>
                <p className="text-gray-900 font-semibold">
                  I look forward to welcoming you to AIE and being part of your journey.
                </p>
                <div className="pt-4">
                  <p className="text-gray-900 font-semibold mb-0">Professor John Smith</p>
                  <p className="text-[#0a97b0] text-sm">Dean, Atlas Institute of Education</p>
                </div>
              </div>

              {/* Signature Style Element */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4">
                <div className="w-16 h-0.5 bg-[#0a97b0]"></div>
                <p className="text-sm text-gray-500 italic">
                  "Education is not preparation for life; education is life itself."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#0a97b0] text-xs font-bold uppercase tracking-widest mb-3">
              Strategic Alignment
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-[#0a97b0]">Pillars</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every program at AIE is designed in alignment with our strategic plan and the needs of modern industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#0a97b0]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRADUATE ATTRIBUTES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#0a97b0] text-xs font-bold uppercase tracking-widest mb-3">
              Graduate Attributes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Graduates <span className="text-[#0a97b0]">Stand For</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through study and professional interactions at AIE, graduates develop nine core attributes that define their professional character.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gaList.map((g) => (
              <div
                key={g.code}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#0a97b0]/30 hover:bg-[#0a97b0]/5 transition-all duration-300"
              >
                <span className="text-[#0a97b0] font-extrabold text-xs tracking-widest uppercase block mb-3">
                  {g.code}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="text-[#0a97b0] text-xs font-bold uppercase tracking-widest mb-3">
              Our Campus
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Where You'll <span className="text-[#0a97b0]">Study</span>
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-10 lg:p-12 grid lg:grid-cols-2 gap-12 items-center shadow-sm">
            {/* Info */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                AIE is located in the inner-west suburb of Petersham, Sydney — one of Australia's most connected and culturally vibrant neighbourhoods. The campus is easily accessible by public transport from the Greater Sydney area.
              </p>

              <div className="space-y-3">
                {[
                  ["📍", "Level 4/590 Parramatta Rd, Petersham NSW 2049"],
                  ["🚉", "5-minute walk from Petersham Station"],
                  ["🕐", "First year: Full face-to-face delivery"],
                  ["💻", "Years 2–3: Hybrid (on-campus + online)"],
                  ["📞", "admissions@aie.edu.au"],
                ].map(([icon, text]) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="flex-shrink-0 text-lg">{icon}</span>
                    <span className="text-gray-700 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-[#0a97b0]/10 to-[#d4af37]/5 border border-[#0a97b0]/20 rounded-2xl h-80 flex items-center justify-center flex-col gap-3">
              <span className="text-6xl">📍</span>
              <p className="text-gray-700 font-medium">590 Parramatta Rd, Petersham NSW</p>
              <a
                href="https://maps.google.com/?q=590+Parramatta+Rd+Petersham+NSW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#0a97b0] hover:underline font-medium"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}