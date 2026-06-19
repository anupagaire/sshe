// app/current-students/student-information/page.tsx
"use client";

import Link from "next/link";

export default function StudentInformationPage() {
  const sideLinks = [
    { label: "Student Information", href: "/current-students/student-information", active: true },
    { label: "Library", href: "/current-students/library" },
    { label: "On-Campus Facilities", href: "/current-students/facilities" },
    { label: "Student Support Services", href: "/current-students/support" },
    { label: "Accreditation", href: "/current-students/accreditation" },
    { label: "Fees", href: "/current-students/fees" },
  ];

  const quickLinks = [
    { label: "Academic Calendar", href: "/academic-calendar", icon: "📅" },
    { label: "Orientation", href: "/orientation", icon: "🎓" },
    { label: "Policies & Forms", href: "/policies", icon: "📋" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a97b0]/95 via-[#0a97b0]/90 to-gray-900/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider mb-6">
            <span>📚</span>
            <span>Current Students</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Student <span className="text-[#d4af37]">Information</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Explore more about what we do and when we do it, to help you plan your atlas experience.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0a97b0] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/current-students" className="hover:text-[#0a97b0] transition-colors">Current Students</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Student Information</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Side Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32">
              <h3 className="text-xs font-bold text-[#0a97b0] uppercase tracking-widest mb-4">
                Current Students
              </h3>
              <nav className="space-y-1">
                {sideLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all no-underline ${
                      link.active
                        ? 'bg-[#0a97b0] text-white'
                        : 'text-gray-700 hover:bg-[#0a97b0]/10 hover:text-[#0a97b0]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Student Information</h1>
            
            {/* Introduction */}
            <div className="bg-gradient-to-br from-[#0a97b0]/5 to-[#d4af37]/5 border border-[#0a97b0]/20 rounded-2xl p-8 mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">
                The atlas Student orientation is available as a guide for learners commencing their studies and will provide key information to prepare you with the knowledge and skills to be successful in your studies. To access, please click through the link below – we hope you find this information useful and supportive of your studies!
              </p>
            </div>

            {/* Intake Dates */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">📅</span>
                Intake Dates
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our intake dates are <strong className="text-[#0a97b0]">January, May and September</strong>. For further information on key dates see the atlas calendar below.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { month: "January", trimester: "T1" },
                  { month: "May", trimester: "T2" },
                  { month: "September", trimester: "T3" },
                ].map((intake) => (
                  <div key={intake.month} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                    <div className="text-xs font-bold text-[#0a97b0] uppercase tracking-wider mb-1">{intake.trimester}</div>
                    <div className="text-lg font-bold text-gray-900">{intake.month}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Contact */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                Student Support
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team are always here to help you, so if you need any extra understanding or guidance, don't hesitate to consult one of our Student Support Officers.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="mailto:support@atlas.edu.au"
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#0a97b0]/30 hover:bg-[#0a97b0]/5 transition-all no-underline group"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Email</div>
                    <div className="text-[#0a97b0] font-semibold group-hover:underline">support@atlas.edu.au</div>
                  </div>
                </a>
                <a
                  href="tel:1800027872"
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#0a97b0]/30 hover:bg-[#0a97b0]/5 transition-all no-underline group"
                >
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Phone</div>
                    <div className="text-[#0a97b0] font-semibold group-hover:underline">1800 0 atlas</div>
                  </div>
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Available 9am – 5pm, Monday to Friday. Phone appointments also available by arrangement.
              </p>
            </div>

            {/* International Students */}
            <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🌐</span>
                International Students
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Important policy documents and information for International Students. These policies apply specifically to International Students studying in Australia on a student study visa.
              </p>
              <ul className="space-y-3">
                {[
                  "International Student Transfer Between Registered Providers Policy and Procedure",
                  "Student Deferment, Suspension and Cancellation of Study Policy and Procedure",
                  "Information on the Education Services for Overseas Students (ESOS) Framework",
                ].map((policy, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    <a href="#" className="text-gray-700 hover:text-[#0a97b0] transition-colors no-underline">
                      {policy}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-[#0a97b0]/5 to-[#0a97b0]/10 border border-[#0a97b0]/20 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline group"
                  >
                    <span className="text-5xl group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="text-gray-900 font-bold text-center group-hover:text-[#0a97b0] transition-colors">
                      {link.label}
                    </span>
                    <span className="text-[#0a97b0] text-sm font-medium">Learn more →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0a97b0] to-[#0d8fa3] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A transformative education experience, tailored to you.
          </h2>
          <p className="text-lg text-white/90 mb-8">
            In-person or online, atlas is committed to delivering truly valuable, forward-thinking programs to enquiring minds everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a97b0] font-bold rounded-full hover:shadow-xl transition-all no-underline"
            >
              Apply Now →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}