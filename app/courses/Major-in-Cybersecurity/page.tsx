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
    <div className="min-h-screen bg-white text-gray-900 py-30">
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a97b0]/95 via-[#0a97b0]/90 to-gray-900/90"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                <a href="/" className="hover:text-[#0a97b0] transition">Home</a>
                <span>›</span>
                <a href="/courses" className="hover:text-[#0a97b0] transition">Courses</a>
                <span>›</span>
                <span>{course.name}</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider mb-6">
                <span>🛡️</span>
                <span>{course.aqf} · {course.code}</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                {course.name}<br />
                <span className="text-[#d4af37]">{course.major}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-white/90 mb-8 font-light">
                Defend. Detect. Protect. Build a career securing the digital world.
              </p>

              {/* Meta Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
                  🗓️ {course.duration}
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
                  📚 {course.subjects} Subjects
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
                  🏛️ {course.delivery.split("+")[0].trim()}
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
                  📍 Petersham NSW
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
                  🚀 {course.firstOffering}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <a 
                href="/apply" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-gray-900 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Apply Now →
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-base rounded-full hover:bg-white/20 transition-all duration-300"
              >
                📥 Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TABS NAVIGATION */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium text-sm capitalize whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab
                    ? 'border-[#0a97b0] text-[#0a97b0]'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About This Course</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  AIE's Bachelor of Business (Cybersecurity) combines core business knowledge with specialised cybersecurity skills.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Bachelor of Business (Cybersecurity) at AIE is designed to prepare students for the growing demand for professionals who can protect organisations in an increasingly digital and interconnected world. Students develop competencies in cybersecurity fundamentals, risk management, digital forensics, network security, and governance frameworks.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With cyber threats becoming more sophisticated and businesses relying heavily on secure digital systems, AIE equips graduates with the practical skills and analytical mindset needed to address current industry challenges and emerging opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Graduate Outcomes</h3>
                <div className="space-y-4">
                  {[
                    { code: "GA-CBS.01", text: "Professional Communication — Communicate cybersecurity concepts, risks and recommendations to both technical and non-technical stakeholders." },
                    { code: "GA-CBS.02", text: "Critical & Analytical Thinking — Analyse threats, assess vulnerabilities, and evaluate security data to solve complex cybersecurity problems." },
                    { code: "GA-CBS.03", text: "Ethical & Responsible Practice — Demonstrate integrity, confidentiality, and ethical judgement in digital investigations and security operations." },
                    { code: "GA-CBS.04", text: "Digital & Information Literacy — Use cybersecurity tools, digital platforms, and security frameworks to protect information assets." },
                    { code: "GA-CBS.05", text: "Teamwork & Collaboration — Work effectively in cross-functional teams on incident response and organisational security projects." },
                    { code: "GA-CBS.06", text: "Adaptability & Innovation — Respond to evolving cyber threats with agility, creativity, and a commitment to continuous learning." },
                  ].map((outcome) => (
                    <div key={outcome.code} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#0a97b0]/5 transition-colors">
                      <span className="flex-shrink-0 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-bold rounded">
                        {outcome.code}
                      </span>
                      <span className="text-gray-700 leading-relaxed">{outcome.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  📋 Course At a Glance
                </h3>
                <div className="space-y-4">
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
                    <div key={label} className="flex justify-between items-start py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-500 text-sm">{label}</span>
                      <span className="font-semibold text-gray-900 text-sm text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CURRICULUM TAB */}
        {activeTab === "curriculum" && (
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Course Structure</h2>
            <p className="text-lg text-gray-600 mb-12">
              144 credit points across 6 trimesters — 8 common core + 8 major + 8 elective subjects.
            </p>

            {/* Trimester Cards */}
            <div className="space-y-6">
              {/* T1 */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                  <span className="font-bold text-gray-900">Trimester 1 — Year 1</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full border border-blue-200">
                    Common Core
                  </span>
                </div>
                {coreSubjects.slice(0, 4).map((subject) => (
                  <div key={subject.code} className="flex items-center gap-4 px-6 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <span className="font-mono font-bold text-[#0a97b0] text-sm min-w-[80px]">{subject.code}</span>
                    <span className="flex-1 text-gray-700">{subject.name}</span>
                    <span className="text-gray-400 text-sm">10 CP</span>
                  </div>
                ))}
              </div>

              {/* T2 */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                  <span className="font-bold text-gray-900">Trimester 2 — Year 1</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full border border-blue-200">
                    Common Core
                  </span>
                </div>
                {coreSubjects.slice(4).map((subject) => (
                  <div key={subject.code} className="flex items-center gap-4 px-6 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <span className="font-mono font-bold text-[#0a97b0] text-sm min-w-[80px]">{subject.code}</span>
                    <span className="flex-1 text-gray-700">{subject.name}</span>
                    <span className="text-gray-400 text-sm">10 CP</span>
                  </div>
                ))}
              </div>

              <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                  <span className="font-bold text-gray-900">Trimester 3 — Year 2</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full border border-blue-200">
                    Major + Electives
                  </span>
                </div>
                {coreSubjects.slice(4).map((subject) => (
                  <div key={subject.code} className="flex items-center gap-4 px-6 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <span className="font-mono font-bold text-[#0a97b0] text-sm min-w-[80px]">{subject.code}</span>
                    <span className="flex-1 text-gray-700">{subject.name}</span>
                    <span className="text-gray-400 text-sm">10 CP</span>
                  </div>
                ))}
              </div>


 <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                  <span className="font-bold text-gray-900">Trimester 4 — Year 2</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full border border-blue-200">
                    Major + Electives
                  </span>
                </div>
                {coreSubjects.slice(4).map((subject) => (
                  <div key={subject.code} className="flex items-center gap-4 px-6 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <span className="font-mono font-bold text-[#0a97b0] text-sm min-w-[80px]">{subject.code}</span>
                    <span className="flex-1 text-gray-700">{subject.name}</span>
                    <span className="text-gray-400 text-sm">10 CP</span>
                  </div>
                ))}
              </div>



 <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                  <span className="font-bold text-gray-900">Trimester 5 — Year 3</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full border border-blue-200">
                    Advanced Major
                  </span>
                </div>
                {coreSubjects.slice(4).map((subject) => (
                  <div key={subject.code} className="flex items-center gap-4 px-6 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <span className="font-mono font-bold text-[#0a97b0] text-sm min-w-[80px]">{subject.code}</span>
                    <span className="flex-1 text-gray-700">{subject.name}</span>
                    <span className="text-gray-400 text-sm">10 CP</span>
                  </div>
                ))}
              </div>


 <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                  <span className="font-bold text-gray-900">Trimester 6 — Year 3 (Final)</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full border border-blue-200">
                   Capstone + Electives
                  </span>
                </div>
                {coreSubjects.slice(4).map((subject) => (
                  <div key={subject.code} className="flex items-center gap-4 px-6 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <span className="font-mono font-bold text-[#0a97b0] text-sm min-w-[80px]">{subject.code}</span>
                    <span className="flex-1 text-gray-700">{subject.name}</span>
                    <span className="text-gray-400 text-sm">10 CP</span>
                  </div>
                ))}
              </div>









    

            {/* T3-T6 similar pattern... */}
              {/* Add remaining trimesters following the same pattern */}
            </div>

            {/* Electives Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Available Electives</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {electives.map((elective) => (
                  <div key={elective.code} className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#0a97b0]/30 hover:bg-[#0a97b0]/5 transition-all">
                    <span className="font-mono font-bold text-[#d4af37] text-sm min-w-[70px]">{elective.code}</span>
                    <span className="text-gray-700 text-sm">{elective.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CAREERS TAB */}
        {activeTab === "careers" && (
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Outcomes</h2>
            <p className="text-lg text-gray-600 mb-12">
              Graduates are work-ready for roles across cybersecurity operations, risk management, and digital protection.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {careers.map((career, index) => (
                <div 
                  key={career} 
                  className="flex items-center gap-4 p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#0a97b0]/30 hover:bg-[#0a97b0]/5 hover:shadow-lg hover:transform hover:-translate-x-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#0a97b0]/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {["🔍","🛡️","📊","🔒","","🔎","","📋","","🏢"][index % 10]}
                  </div>
                  <span className="text-gray-800 font-medium">{career}</span>
                </div>
              ))}
            </div>

            {/* Graduate Attributes */}
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Graduate Attributes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              ].map((attr) => (
                <div key={attr.label} className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-[#0a97b0] font-bold text-xs uppercase tracking-wider mb-2">{attr.label}</div>
                  <div className="text-gray-700 text-sm leading-relaxed">{attr.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADMISSIONS TAB */}
        {activeTab === "admissions" && (
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
            <p className="text-lg text-gray-600 mb-12">
              Entry into the Bachelor of Business (Cybersecurity) for the 2027 intake — Domestic & International students.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Academic Requirements */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200 flex items-center gap-2">
                  🎓 Academic Requirements
                </h3>
                <ul className="space-y-3">
                  {[
                    "Year 12 in Australia with a minimum ATAR of 65 or equivalent",
                    "Recognised international secondary qualification at equivalent level",
                    "Certificate IV (AQF 4) or higher from a recognised institution",
                    "General Certificate of Education Advanced Level (GCE A) with three or more C Grades",
                    "Global Assessment Certificate with an average grade of 65% or higher",
                    "International Baccalaureate (IB) diploma",
                  ].map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-sm leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* English Requirements */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200 flex items-center gap-2">
                  🌐 English Language Requirements
                </h3>
                <ul className="space-y-3 mb-4">
                  {[
                    "IELTS Academic: overall 6.0 (no band below 5.5)",
                    "IBT TOEFL: overall score of 75 (writing minimum 17)",
                    "Cambridge CPE: Grades A, B, or C1",
                    "Cambridge CAE: total score of 52 or over",
                    "PTE Academic: score over 51",
                    "English for Academic Purposes (EAP 2): Grade A or B",
                    "Certificate IV in ESL",
                  ].map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-sm leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg text-xs text-gray-600">
                  English qualification must be less than 2 years old. UK, USA, Canada, NZ, and Ireland passport holders are exempt.
                </div>
              </div>

              {/* Key Dates */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200 flex items-center gap-2">
                  📅 Key Dates — 2027
                </h3>
                <div className="space-y-3">
                  {[
                    ["Term 1", "March 2027"],
                    ["Term 2", "July 2027"],
                    ["Term 3", "November 2027"],
                    ["Trimester Length", "14 weeks"],
                    ["Contact Hours/Week", "3 hrs/subject"],
                    ["Private Study/Week", "7 hrs/subject"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-500 text-sm">{label}</span>
                      <span className="font-semibold text-gray-900 text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RPL Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-200 flex items-center gap-2">
                    💡 RPL & Credit Transfer
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    AIE recognises prior studies where relevant and may award credit in accordance with the Credit for Prior Learning Policy. Applicants with relevant work experience may also be assessed under alternative entry provisions.
                  </p>
                </div>
                <a 
                  href="/apply" 
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-gray-900 font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  Start Your Application →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}