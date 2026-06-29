"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = {
    Campus: ["Facilities", "Library", "Sports", "Health Centre", "Transport"],
    Connect: ["Contact Us", "Campus Map"],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Top Section - Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                Σ
              </div>
              <span className="font-serif font-bold text-gray-900">Atlas</span>
            </Link>
            
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">
              Shaping minds, building futures. Atlas is committed to transformative education and research excellence since 1985.
            </p>

            <div className="space-y-1.5 text-xs text-gray-500">
              <div className="flex items-start gap-2">
                <span>📍</span>
                <span>586-590 Parramatta Road, Petersham, NSW 2049</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+61298765432" className="hover:text-cyan-600 transition-colors">+61 2 9876 5432</a>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:admissions@atlas.edu" className="hover:text-cyan-600 transition-colors">admissions@atlas.edu</a>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              {["𝕏", "in", "f", "▶", "📷"].map((icon, i) => (
                <a key={i} href="#" className="w-7 h-7 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500 hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-600 transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 mb-3">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-gray-500 hover:text-cyan-600 transition-colors inline-flex items-center gap-1 group">
                      <span className="text-cyan-600 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all text-[10px]">→</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section - Accreditation & Acknowledgement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
          
          {/* Accreditation */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-600 to-teal-600" />
            <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 rounded-full mb-2">
              Accredited
            </div>
            <h3 className="text-sm font-bold text-cyan-600 mb-1">Accreditation</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Atlas Institute of Education is on progress by the Tertiary Education Quality and Standards Agency (TEQSA) and delivers courses under the Australian Qualifications Framework (AQF). Provider Code: *****
            </p>
          </div>

          {/* Acknowledgement */}
          <div className="bg-red-900 rounded-lg p-4">
            <h3 className="text-sm font-bold text-white mb-2">Acknowledgement of Country</h3>
            <p className="text-xs text-white/80 leading-relaxed mb-3">
              Atlas Institute of Education&apos;s campus is located on the unceded territory of the Gadigal people of the Eora Nation, who are the traditional owners of the land where the campus is situated. We pay our respects to their Elders, past, present, and emerging. We extend that respect to Aboriginal and Torres Strait Islander peoples in Australia and Indigenous peoples globally who are presently studying, working, or contributing to Atlas.
            </p>
            
            {/* Flags */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-1">
                <div className="relative w-16 h-9 rounded overflow-hidden border border-white/20 shadow-lg">
                  <Image
                    src="/Flag-s.avif"
                    alt="Aboriginal Flag"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[9px] text-white/50 text-center leading-tight">Aboriginal Flag</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="relative w-16 h-9 rounded overflow-hidden border border-white/20 shadow-lg">
                  <Image
                    src="/flag.avif"
                    alt="Torres Strait Islander Flag"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[9px] text-white/50 text-center leading-tight">Torres Strait Islander Flag</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © 2025 Atlas Institute of Education. All rights reserved. Designed with <span className="text-cyan-600">♥</span> for knowledge.
          </p>
          <ul className="flex gap-4">
            <li><a href="#" className="hover:text-cyan-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan-600 transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-cyan-600 transition-colors">Sitemap</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}