// app/future-students/fees/page.tsx
"use client";

import Link from "next/link";

export default function FeesPage() {
  const sideLinks = [
    { label: "Student Information", href: "/future-students/student-information" },
    { label: "Brochure", href: "/future-students/brochure" },
    { label: "Fees", href: "/future-students/fees", active: true },
    { label: "Apply Now", href: "/apply" },
    { label: "Agents", href: "/agents" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a97b0]/95 via-[#0a97b0]/90 to-gray-900/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider mb-6">
            <span>💰</span>
            <span>Future Students</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Tuition <span className="text-[#d4af37]">Fees</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Understand the investment you're making in the future you.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0a97b0] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/future-students" className="hover:text-[#0a97b0] transition-colors">Future Students</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Fees</span>
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
                Future Students
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Fees for Future Students</h1>
            
            {/* Introduction */}
            <div className="bg-gradient-to-br from-[#0a97b0]/5 to-[#d4af37]/5 border border-[#0a97b0]/20 rounded-2xl p-8 mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">
                All relevant tuition fees and charges associated with the different course levels offered by atlas are provided below. All fees are expressed in <strong className="text-[#0a97b0]">Australian Dollars</strong>.
              </p>
            </div>

            {/* IT Requirements */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💻</span>
                IT Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed">
                atlas provides focused IT for learning, such as computers on campus for student use and access to essential online systems or applications, and it is expected that all students will have access to personal computers to support ongoing study.
              </p>
            </div>

            {/* Fee Review Notice */}
            <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Fee Review Notice
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tuition fees are subject to review and may change during your course. Currently enrolled students will be advised in writing of any change in tuition fees for the following calendar year by November in the year prior.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You have been provided with our <a href="#" className="text-[#0a97b0] font-semibold hover:underline">Statement of Tuition Protection</a>.
              </p>
            </div>

            {/* Per Unit Fees */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">💵</span>
                Per Unit Fees
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Domestic */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="text-xs font-bold text-[#0a97b0] uppercase tracking-wider mb-3">
                    Domestic Students
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Per unit (10 CP)</span>
                      <span className="text-xl font-bold text-gray-900">$2,426.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Capstone (20 CP)</span>
                      <span className="text-xl font-bold text-gray-900">$4,852.00</span>
                    </div>
                  </div>
                </div>

                {/* International */}
                <div className="bg-gradient-to-br from-[#0a97b0]/5 to-[#0a97b0]/10 border border-[#0a97b0]/20 rounded-xl p-6">
                  <div className="text-xs font-bold text-[#0a97b0] uppercase tracking-wider mb-3">
                    International Students
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Per unit (10 CP)</span>
                      <span className="text-xl font-bold text-gray-900">$2,911.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Capstone (20 CP)</span>
                      <span className="text-xl font-bold text-gray-900">$5,822.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Additional fees for international students:</strong> A non-refundable application fee of <strong>$250</strong> and a materials fee of <strong>$250</strong> apply.
                </p>
              </div>
            </div>

            {/* Total Course Fees */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Total Course Fees — Bachelor of Business (BBus)
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-3">
                    Domestic Students
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">$58,224</div>
                  <div className="text-sm text-white/60">Total course fee</div>
                </div>
                
                <div className="bg-gradient-to-br from-[#0a97b0]/20 to-[#0a97b0]/10 border border-[#0a97b0]/30 rounded-xl p-6">
                  <div className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-3">
                    International Students
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">$69,864</div>
                  <div className="text-sm text-white/60">Total course fee</div>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💳</span>
                Payment Options
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                atlas offers flexible payment options to help you manage your tuition fees. Contact our admissions team to discuss payment plans and scholarship opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0a97b0] text-white font-bold rounded-full hover:bg-[#0d8fa3] transition-all no-underline"
                >
                  Apply Now →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-[#0a97b0] text-[#0a97b0] font-bold rounded-full hover:bg-[#0a97b0]/5 transition-all no-underline"
                >
                  Contact Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0a97b0] to-[#0d8fa3] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to invest in your future?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Start your application today and take the first step toward a rewarding career.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a97b0] font-bold rounded-full hover:shadow-xl transition-all no-underline"
          >
            Apply Now →
          </Link>
        </div>
      </section>
    </div>
  );
}