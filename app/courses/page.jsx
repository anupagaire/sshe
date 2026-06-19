"use client";

import Link from "next/link";

const courses = [
  {
    code: "MAJ2603-CBS",
    name: "Bachelor of Business",
    major: "Major in Cybersecurity",
    duration: "3 Years",
    level: "AQF Level 7",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",
    description: "Defend. Detect. Protect. Build a career securing the digital world.",
    link: "/courses/Major-in-Cybersecurity",
  },
  
  
  
];

export default function AllCoursesPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      {/* HERO SECTION */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a97b0]/95 via-[#0a97b0]/90 to-gray-900/90"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white text-sm font-semibold mb-6">
            <span>📚</span>
            <span>Explore Our Programs</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Choose Your Path to<br />
            <span className="text-[#d4af37]">Success</span>
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-light">
            Discover our range of industry-focused courses designed to prepare you for tomorrow's challenges.
          </p>
        </div>
      </section>

      {/* COURSES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link 
              key={course.code}
              href={course.link}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={course.image} 
                  alt={course.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="inline-block px-3 py-1 bg-[#0a97b0] text-white text-xs font-bold rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6">
                <div className="text-xs font-bold text-[#0a97b0] uppercase tracking-wider mb-2">
                  {course.code}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#0a97b0] transition-colors">
                  {course.name}
                </h3>
                
                <p className="text-[#d4af37] font-semibold text-sm mb-3">
                  {course.major}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  
                  <span className="inline-flex items-center gap-1 text-[#0a97b0] font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our friendly admissions team is here to help you find the perfect program for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0a97b0] to-[#0d8fa3] text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Talk to an Advisor
            </a>
            <a 
              href="/apply" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0a97b0] text-[#0a97b0] font-bold rounded-full hover:bg-[#0a97b0]/5 transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}