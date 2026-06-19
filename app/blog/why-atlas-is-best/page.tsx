// app/blog/why-atlas-is-best/page.tsx
"use client";

import Link from "next/link";

export default function WhyAtlasIsBestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a97b0]/95 via-[#0a97b0]/90 to-gray-900/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider mb-6">
            <span>🏆</span>
            <span>Institutional News</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Why Atlas Institute of Education is the <span className="text-[#d4af37]">Best Choice</span> for Your Future
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
                PS
              </div>
              Professor John Smith
            </span>
            <span>•</span>
            <span>📅 June 15, 2026</span>
            <span>•</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0a97b0] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-[#0a97b0] transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Why Atlas is Best</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Author Card */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0a97b0] to-[#0d8fa3] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              PS
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg">Professor John Smith</div>
              <div className="text-sm text-gray-500">Dean, Atlas Institute of Education</div>
              <div className="text-xs text-gray-400 mt-1">PhD, MBA, FHEA</div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              In a world where education is rapidly evolving, choosing the right institution can shape your entire career trajectory. At Atlas Institute of Education, we believe that exceptional education goes beyond textbooks — it&apos;s about preparing students for the real challenges of tomorrow.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              🎯 1. Future-Focused Curriculum
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our programs are designed with the future in mind. While traditional business schools focus solely on conventional disciplines, Atlas integrates cutting-edge fields like <strong className="text-[#0a97b0]">cybersecurity, artificial intelligence, machine learning, and data analytics</strong> into our business curriculum.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This means our graduates don&apos;t just understand business — they understand the technology that&apos;s reshaping it. In an era where digital transformation is happening at unprecedented speed, this dual expertise is invaluable.
            </p>

            <div className="bg-gradient-to-br from-[#0a97b0]/5 to-[#d4af37]/5 border border-[#0a97b0]/20 rounded-2xl p-8 my-8">
              <p className="text-lg text-gray-800 leading-relaxed italic">
                &quot;At Atlas, we don&apos;t just teach business — we prepare business leaders who can navigate the digital landscape with confidence and competence.&quot;
              </p>
              <p className="text-sm text-[#0a97b0] font-semibold mt-3">— Professor John Smith, Dean</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              💼 2. Industry-Aligned Education
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our curriculum is developed in consultation with industry leaders to ensure that what you learn is what employers need. Every course is mapped to real-world applications, giving you practical skills from day one.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our faculty brings decades of industry experience into the classroom, bridging the gap between academic theory and professional practice. You&apos;ll learn from people who have actually done the work, not just studied it.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              🏛️ 3. State-of-the-Art Facilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Petersham campus is designed for the modern learner. With smart classrooms, 5G connectivity, VR/AR technology, and a sunlit library, every space is optimized for your success.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {[
                { icon: "🖥️", title: "Smart Classrooms", desc: "Latest teaching technology" },
                { icon: "📶", title: "5G Campus WiFi", desc: "Seamless connectivity" },
                { icon: "🥽", title: "VR/AR Equipment", desc: "Apple Vision Pro & Meta Quest" },
                { icon: "📚", title: "Modern Library", desc: "Extensive digital resources" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-bold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              🌍 4. Diverse & Inclusive Community
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Atlas welcomes students from around the world, creating a vibrant, multicultural learning environment. This diversity enriches classroom discussions and prepares you for global business careers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our support services ensure every student — domestic or international — has the resources they need to thrive. From academic support to wellbeing services, we&apos;re with you every step of the way.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              🎓 5. Proven Graduate Outcomes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our graduates are work-ready from day one. With nine core graduate attributes embedded in every program, Atlas students develop the professional character that employers value:
            </p>

            <div className="grid md:grid-cols-3 gap-3 my-8">
              {[
                "Communicate",
                "Think Critically",
                "Engage",
                "Integrity",
                "Community",
                "Global Mindset",
                "Sustainability",
                "Equality",
                "Wellbeing",
              ].map((attr) => (
                <div key={attr} className="px-4 py-3 bg-[#0a97b0]/5 border border-[#0a97b0]/20 rounded-lg text-center">
                  <span className="text-sm font-bold text-[#0a97b0] uppercase tracking-wider">{attr}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              ⚖️ 6. Fully Accredited & Recognized
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Atlas is registered with TEQSA (Tertiary Education Quality and Standards Agency) and all our courses meet the Australian Qualifications Framework (AQF) standards. Your qualification will be recognized nationally and internationally.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              💡 7. Flexible Learning Options
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              With three intakes per year (January, May, September) and hybrid learning options in later years, Atlas offers the flexibility you need to balance study with other commitments.
            </p>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 my-12 text-white">
              <h3 className="text-2xl font-bold mb-4">📊 Atlas by the Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { num: "3", label: "Year Degree" },
                  { num: "3", label: "Intakes/Year" },
                  { num: "24", label: "Subjects" },
                  { num: "144", label: "Credit Points" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold text-[#d4af37] mb-1">{stat.num}</div>
                    <div className="text-xs text-white/70 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              🚀 Your Future Starts Here
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choosing Atlas means choosing an institution that&apos;s invested in your success. We combine academic excellence with practical skills, cutting-edge technology with timeless business principles, and global perspectives with local relevance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you&apos;re a domestic student looking to advance your career or an international student seeking a world-class education in Australia, Atlas provides the foundation you need to build a successful, fulfilling future.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed font-medium mt-8">
              The question isn&apos;t whether you should invest in your education — it&apos;s whether you can afford not to. At Atlas, that investment pays dividends for a lifetime.
            </p>
          </div>

          {/* Share & Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {["Education", "Business", "Cybersecurity", "Future Skills"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Share:</span>
                {["𝕏", "in", "f"].map((icon, i) => (
                  <button
                    key={i}
                    className="w-8 h-8 bg-gray-100 hover:bg-[#0a97b0] hover:text-white rounded-full flex items-center justify-center text-sm transition-colors"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-gray-50 border border-gray-200 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0a97b0] to-[#0d8fa3] rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                PS
              </div>
              <div>
                <div className="text-xs font-bold text-[#0a97b0] uppercase tracking-widest mb-1">
                  About the Author
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professor John Smith</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Professor John Smith is the Dean of Atlas Institute of Education, bringing over 25 years of experience in higher education and business leadership. He holds a PhD in Business Administration, an MBA, and is a Fellow of the Higher Education Academy (FHEA).
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Under his leadership, Atlas has become known for its innovative approach to business education, integrating emerging technologies with traditional business principles to prepare students for the digital age.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#0a97b0] font-semibold hover:underline"
            >
              ← Back to Blog
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a97b0] text-white font-bold rounded-full hover:bg-[#0d8fa3] transition-all no-underline"
            >
              Apply to Atlas →
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cybersecurity: The Career of the Future",
                excerpt: "Why cybersecurity skills are in high demand and how Atlas prepares you.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",
                date: "June 10, 2026",
              },
              {
                title: "Student Success Story: From Classroom to CEO",
                excerpt: "Meet our alumni who are making waves in the business world.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800",
                date: "June 5, 2026",
              },
              {
                title: "New Campus Facilities Opening in 2027",
                excerpt: "Exciting upgrades coming to our Petersham campus.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800",
                date: "May 28, 2026",
              },
            ].map((post) => (
              <Link
                key={post.title}
                href="#"
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">📅 {post.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0a97b0] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0a97b0] to-[#0d8fa3] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to join the Atlas community?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Start your application today and take the first step toward a rewarding career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a97b0] font-bold rounded-full hover:shadow-xl transition-all no-underline"
            >
              Apply Now →
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all no-underline"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}