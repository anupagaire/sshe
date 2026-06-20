"use client";

import Link from "next/link";

export default function Footer() {
  const links = {
    Campus: ["Facilities", "Library", "Sports", "Health Centre", "Transport"],
    Connect: ["Contact Us", "Campus Map"],
  };

  return (
    <footer className="bg-white border-t border-gray-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-200">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 no-underline">
              <div className="w-11 h-11 bg-gradient-to-br from-[#0a97b0] to-[#0d8fa3] rounded-xl flex items-center justify-center text-white text-xl font-black font-serif shadow-md">
                Σ
              </div>
              <span className="text-lg font-bold text-gray-900 font-serif">Atlas</span>
            </Link>
            
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm">
              Shaping minds, building futures. Atlas is committed to transformative
              education and research excellence since 1985.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-start gap-2.5 text-sm text-gray-600">
                <span className="flex-shrink-0">📍</span>
                <span>586-590 Parramatta Road, Petersham, NSW 2049</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="flex-shrink-0">📞</span>
                <a href="tel:+61298765432" className="text-gray-600 no-underline hover:text-[#0a97b0] transition-colors">
                  +61 2 9876 5432
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="flex-shrink-0">✉️</span>
                <a href="mailto:admissions@atlas.edu" className="text-gray-600 no-underline hover:text-[#0a97b0] transition-colors">
                  admissions@atlas.edu
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2.5">
              {[
                { icon: "𝕏", label: "Twitter" },
                { icon: "in", label: "LinkedIn" },
                { icon: "f", label: "Facebook" },
                { icon: "▶", label: "YouTube" },
                { icon: "📷", label: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 no-underline text-sm hover:bg-[#0a97b0]/10 hover:border-[#0a97b0]/30 hover:text-[#0a97b0] transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#0a97b0] mb-5">
                {title}
              </h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 no-underline inline-block transition-all duration-200 hover:text-[#0a97b0] hover:translate-x-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accreditation Banner */}
        <div className="flex flex-col md:flex-row items-center gap-5 mt-8 mb-10 p-5 bg-gray-50 border border-gray-200 rounded-xl">
          {/* <div className="px-4 py-1.5 bg-[#0a97b0]/10 border border-[#0a97b0]/25 rounded-lg text-xs font-bold text-[#0a97b0] whitespace-nowrap">
            TEQSA Accredited
          </div> */}
          <p className="text-xs text-gray-500 leading-relaxed text-center md:text-left">
            Atlas Institute of Education is on progress by the Tertiary Education Quality and Standards Agency (TEQSA) 
            and delivers courses under the Australian Qualifications Framework (AQF). Provider Code: *****
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2025 Atlas Institute of Education. All rights reserved. Designed with{" "}
            <span className="text-[#0a97b0]">♥</span> for knowledge.
          </p>
          <ul className="flex gap-6 list-none m-0 p-0">
            <li>
              <a href="#" className="text-xs text-gray-500 no-underline hover:text-[#0a97b0] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-gray-500 no-underline hover:text-[#0a97b0] transition-colors">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-gray-500 no-underline hover:text-[#0a97b0] transition-colors">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}