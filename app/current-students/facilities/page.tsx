
"use client";

import Link from "next/link";

export default function FacilitiesPage() {
  const sideLinks = [
    { label: "Student Information", href: "/current-students/student-information" },
    { label: "Library", href: "/current-students/library" },
    { label: "On-Campus Facilities", href: "/current-students/facilities", active: true },
    { label: "Student Support Services", href: "/current-students/support" },
    { label: "Accreditation", href: "/current-students/accreditation" },
    { label: "Fees", href: "/current-students/fees" },
  ];

  const facilities = [
    {
      icon: "🖥️",
      title: "Smart Classrooms",
      description: "Classrooms equipped with the latest technology for teaching and learning, students can immerse themselves into interactive lectures and tutorials powered by seamless 5G wifi connection.",
    },
    {
      icon: "📶",
      title: "5G Campus WiFi",
      description: "Campus-wide 5G wifi connection to support your educational engagements with our industry-leading teachers.",
    },
    {
      icon: "🛋️",
      title: "Student Lounge",
      description: "Sunlit student lounge furnished with relaxing sofas, inspiring artwork, and campus 5G wifi — perfect for solo decompression or social engagements with fellow students.",
    },
    {
      icon: "🍽️",
      title: "Kitchenette & Balcony",
      description: "Refrigerator and adjacent kitchenette for lunches and preferred sustenance, plus a balcony to enjoy the view.",
    },
    {
      icon: "🖨️",
      title: "Print & Scan Services",
      description: "Printing, scanning, and copying services available on campus. Simply scan a QR code and print from your phone or device — no app required.",
    },
    {
      icon: "🥽",
      title: "VR/AR Technology",
      description: "State of the art technology including VR/AR headsets available for loan from the library, whether to support learning or for stress-busting activities.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a97b0]/95 via-[#0a97b0]/90 to-gray-900/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider mb-6">
            <span>🏛️</span>
            <span>Current Students</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            On-Campus <span className="text-[#d4af37]">Facilities</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            The atlas campus was built to cater for the needs of the atlas student.
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
            <span className="text-gray-900 font-medium">On-Campus Facilities</span>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">On-Campus Facilities</h1>
            
            {/* Introduction */}
            <div className="bg-gradient-to-br from-[#0a97b0]/5 to-[#d4af37]/5 border border-[#0a97b0]/20 rounded-2xl p-8 mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">
                The atlas campus was built to cater for the needs of the atlas student, with modern facilities designed to enhance your learning experience.
              </p>
            </div>

            {/* Classrooms Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🖥️</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Smart Classrooms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    With classrooms equipped with the latest technology for teaching and learning, students can immerse themselves into interactive lectures and tutorials powered by seamless 5G wifi connection to support their educational engagements with our industry-leading teachers.
                  </p>
                </div>
              </div>
            </div>

            {/* Student Lounge */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🛋️</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Student Lounge</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For downtime between classes, our students can enjoy the sunlit Student Lounge, furnished with relaxing sofas, the ubiquitous campus 5G wifi, and inspiring artwork, to allow for time and space for solo decompression, or for more social engagements with fellow students.
                  </p>
                </div>
              </div>
            </div>

            {/* Kitchenette */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🍽️</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Kitchenette & Balcony</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We also provide a refrigerator and an adjacent kitchenette for lunches and preferred sustenance, and a balcony to enjoy the view.
                  </p>
                </div>
              </div>
            </div>

            {/* Print Services */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🖨️</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Print & Scan Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Printing, scanning, and copying services are also available for students on campus. Easy to navigate, no app required, students can simply scan a QR code and print from their phone or from a webpage from their own device.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <div className="text-sm font-bold text-gray-900">QR Code Printing</div>
                      <div className="text-xs text-gray-500">Scan and print from any device</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VR/AR Technology */}
            <div className="bg-gradient-to-br from-[#0a97b0]/5 to-[#0a97b0]/10 border border-[#0a97b0]/20 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🥽</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">VR/AR Technology</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    State of the art technology including VR/AR headsets are available for loan from the library, whether to support learning, or for stress-busting activities.
                  </p>
                  <Link
                    href="/library/tech-loan"
                    className="inline-flex items-center gap-2 text-[#0a97b0] font-semibold hover:underline"
                  >
                    More information on tech for loan →
                  </Link>
                </div>
              </div>
            </div>

            {/* All Facilities Grid */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">All Campus Facilities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {facilities.map((facility) => (
                  <div
                    key={facility.title}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#0a97b0]/30 hover:bg-[#0a97b0]/5 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl flex-shrink-0">{facility.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{facility.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{facility.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-gradient-to-br from-[#d4af37]/5 to-[#d4af37]/10 border border-[#d4af37]/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🌳</span>
                Nearby Attractions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Neighbouring the atlas campus, students can dive into the plethora of facilities around Parramatta, including parks, riverside bike-hire, theatre, markets, ferries, buses, and trains to explore the rest of Sydney, and the abundance of retail and restaurants, all just few minutes' walk from campus.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {["🌳 Parks", "🚲 Bike Hire", "🎭 Theatre", "🛍️ Markets", "⛴️ Ferries", "🚌 Buses", "🚆 Trains", "🍽️ Restaurants"].map((item) => (
                  <div key={item} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-center text-sm text-gray-700">
                    {item}
                  </div>
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