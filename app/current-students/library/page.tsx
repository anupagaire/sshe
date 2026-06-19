"use client";

import Link from "next/link";

export default function LibraryPage() {
  const sideLinks = [
    { label: "Student Information", href: "/current-students/student-information" },
    { label: "Library", href: "/current-students/library", active: true },
    { label: "On-Campus Facilities", href: "/current-students/facilities" },
    { label: "Student Support Services", href: "/current-students/support" },
    { label: "Accreditation", href: "/current-students/accreditation" },
    { label: "Fees", href: "/current-students/fees" },
  ];

  const academicSkills = [
    { skill: "Academic Writing", icon: "✍️" },
    { skill: "Referencing", icon: "📎" },
    { skill: "Information Literacy", icon: "🔍" },
    { skill: "Research Management", icon: "📊" },
    { skill: "Academic Integrity Awareness", icon: "⚖️" },
    { skill: "Generative AI Literacy", icon: "🤖" },
  ];

  const bookTopics = [
    "Emotional Intelligence",
    "Leadership",
    "Building Good Habits",
    "Communication",
    "Biographies",
  ];

  const otherTopics = [
    "Young Adult Life",
    "Mental Health & Wellbeing",
    "Relationships",
  ];

  const externalResources = [
    {
      title: "State Library of NSW",
      description: "Cultural events, exhibitions, workshops, and an extensive digital collection.",
      icon: "🏛️",
      link: "https://www.sl.nsw.gov.au",
    },
    {
      title: "Art Gallery of NSW",
      description: "Take a stroll through art exhibitions to recharge your study brain.",
      icon: "🎨",
      link: "https://www.artgallery.nsw.gov.au",
    },
    {
      title: "Parramatta Library",
      description: "Popular novels, classics, mystery, romance, graphic novels, crafts, and hobbies. Free membership with Sydney address.",
      icon: "📚",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a97b0]/95 via-[#0a97b0]/90 to-gray-900/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider mb-6">
            <span>📖</span>
            <span>Current Students</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            The Astra <span className="text-[#d4af37]">Library</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            A beautifully sunlit space featuring an extensive collection of academic and technology resources to support your learning journey.
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
            <span className="text-gray-900 font-medium">Library</span>
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
          <div className="lg:col-span-3 space-y-10">
            <h1 className="text-4xl font-bold text-gray-900">The Astra Library</h1>
            
            {/* Introduction */}
            <div className="bg-gradient-to-br from-[#0a97b0]/5 to-[#d4af37]/5 border border-[#0a97b0]/20 rounded-2xl p-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                Situated in a beautifully sunlit area of the campus, the Astra Library features an extensive collection of academic and technology resources. These resources are curated to support you in developing a foundational knowledge in your areas of study, while empowering you to be at the forefront of the latest technologies.
              </p>
            </div>

            {/* e-Resources */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">💻</span>
                <h2 className="text-3xl font-bold text-gray-900">e-Resources</h2>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">EBSCOhost Research Database</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our EBSCOhost research database gives you access to thousands of journal articles, magazines, newspapers, reports, white papers, and case studies from anywhere with an internet connection.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a97b0] text-white font-bold rounded-full hover:bg-[#0d8fa3] transition-all no-underline"
                >
                  Access EBSCOhost →
                </Link>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  💡 <strong>Workshops</strong> on how to use EBSCOhost, how to research, how to manage and organise your research (and more) are held regularly in the Astra Library.
                </p>
              </div>
            </section>

            {/* e-Publications */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📰</span>
                <h2 className="text-3xl font-bold text-gray-900">e-Publications</h2>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  For a well-rounded perspective of the world we live, study, and work in, the below e-publications are also available to you via on-campus library technology.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-200 rounded-xl">
                    <span className="text-3xl flex-shrink-0">📰</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Digital News Subscriptions</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Sydney Morning Herald", "Australian Financial Review", "The Australian"].map((pub) => (
                          <span key={pub} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700">
                            {pub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#0a97b0]/5 to-[#0a97b0]/10 border border-[#0a97b0]/20 rounded-xl">
                    <span className="text-3xl flex-shrink-0">🍎</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Apple News+</h4>
                      <p className="text-sm text-gray-600">
                        Wide selection of news and digital magazines across business, technology, current affairs, and other topics including cooking, travel, fashion, and health.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Library Technology */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🥽</span>
                <h2 className="text-3xl font-bold text-gray-900">Library Technology</h2>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Astra, we aim to be at the forefront of mainstream technology so you can build competitive tech skills alongside your education. The below technology – and more as we build the collection – is available for you to use on campus, whether to study, or to play and de-stress with. Your librarian will be happy to guide you through how to use the various devices.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#0a97b0]/10 to-[#0a97b0]/5 border border-[#0a97b0]/20 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="text-4xl mb-3">🥽</div>
                    <h4 className="font-bold text-gray-900 mb-2">Apple Vision Pro</h4>
                    <p className="text-sm text-gray-600">Augmented reality · Immersive experiences · Spatial computing</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#0a97b0]/10 to-[#0a97b0]/5 border border-[#0a97b0]/20 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="text-4xl mb-3">🎮</div>
                    <h4 className="font-bold text-gray-900 mb-2">Meta Quest 3</h4>
                    <p className="text-sm text-gray-600">Virtual reality · Augmented reality</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <p className="text-sm text-gray-700">
                    💻 We also have the <strong>latest mobile devices</strong> and <strong>desktop computers</strong> available for your study needs.
                  </p>
                </div>
              </div>
            </section>

            {/* Workshops and Appointments */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📅</span>
                <h2 className="text-3xl font-bold text-gray-900">Workshops & Appointments</h2>
              </div>

              {/* Opening Hours */}
              <div className="bg-gradient-to-br from-[#d4af37]/5 to-[#d4af37]/10 border border-[#d4af37]/20 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🕐</span>
                  <h3 className="text-lg font-bold text-gray-900">Library Hours</h3>
                </div>
                <p className="text-gray-700">
                  <strong>9am – 5pm</strong>, Monday to Friday (except public holidays and end-of-year campus closure)
                </p>
              </div>

              {/* Academic Skills */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🎓</span>
                  Academic Skills Support
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your librarian can support you in building the below skills:
                </p>

                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {academicSkills.map((item) => (
                    <div key={item.skill} className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#0a97b0]/30 hover:bg-[#0a97b0]/5 transition-all">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-gray-800 font-medium">{item.skill}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a97b0] text-white font-bold rounded-full hover:bg-[#0d8fa3] transition-all no-underline"
                >
                  Book an Appointment →
                </Link>
              </div>

              {/* Workshops */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>📚</span>
                  Workshops
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Workshops to boost your academic skills and personal skills are run regularly throughout the trimester.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#0a97b0] font-semibold hover:underline"
                >
                  View Library Workshop Calendar →
                </Link>
              </div>
            </section>

            {/* Hardcopy Textbooks */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📖</span>
                <h2 className="text-3xl font-bold text-gray-900">Hardcopy Textbooks</h2>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed">
                  Some of us prefer to read hardcopies of text, so we have copies of the prescribed textbooks of each Unit available for you to borrow.
                </p>
              </div>
            </section>

            {/* Other Types of Books */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📚</span>
                <h2 className="text-3xl font-bold text-gray-900">Other Types of Books</h2>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Also available in hardcopy is a collection of classic and new business and self-development books on topics such as:
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {bookTopics.map((topic) => (
                    <span key={topic} className="px-4 py-2 bg-[#0a97b0]/10 border border-[#0a97b0]/20 rounded-full text-sm font-medium text-[#0a97b0]">
                      {topic}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  You can also borrow books about:
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {otherTopics.map((topic) => (
                    <span key={topic} className="px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full text-sm font-medium text-gray-700">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-[#0a97b0]/5 to-[#d4af37]/5 border border-[#0a97b0]/20 rounded-xl p-6 flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🎲</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">For Fun & De-Stressing</h4>
                    <p className="text-sm text-gray-600">
                      We also have light-hearted graphic novels and boardgames for you and your fellow classmates to de-stress with.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Other Resources Around Astra */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🌐</span>
                <h2 className="text-3xl font-bold text-gray-900">Other Resources Around Astra</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {externalResources.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#0a97b0]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline group"
                  >
                    <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">
                      {resource.icon}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0a97b0] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {resource.description}
                    </p>
                    <span className="text-xs text-[#0a97b0] font-semibold">
                      Visit →
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0a97b0] to-[#0d8fa3] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need help navigating our library resources?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our friendly librarians are here to support you throughout your studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a97b0] font-bold rounded-full hover:shadow-xl transition-all no-underline"
            >
              Book an Appointment →
            </Link>
            <a
              href="mailto:library@astra.edu.au"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all no-underline"
            >
              ✉️ Email Library
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}