"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Top bar links
  const topBarLinks = [
    { label: "Student Admin Portal", href: "/portal" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Main nav links with dropdown
  const navLinks = [
    { label: "About Us", href: "/about" },
    { 
      label: "Courses", 
      href: "/courses",
      children: [
        { label: "Bachelor of Business (Cybersecurity)", href: "/courses/Major-in-Cybersecurity" },
        
      ]
    },
    { label: "Current Students", href: "/current-students",
       children: [
        { label: "Student Information", href: "/current-students/student-information" },
        { label: "Moodle", href: "https://moodle.org/" },
         { label: "On-Campus Facilities", href: "/current-students/facilities"},
                  { label: "Library", href: "/current-students/library"},

        
      ]
     },
    { label: "Future Students", href: "/future-students",
       children: [
                { label: "Fees", href: "/future-students/fees" },

        
      ]
     },
    { label: "Our People", href: "/our-people" },
  ];

  return (
    <>
      {/* Top Bar - Disappears on scroll */}
      <div className={`fixed top-0 left-0 right-0 z-[1001] bg-[#0a97b0] transition-transform duration-300 ease-in-out ${scrolled ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end py-2">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {topBarLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-white/90 text-sm font-normal no-underline hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navbar - Always visible */}
      <nav className={`fixed left-0 right-0 z-[1000] bg-white transition-all duration-400 ease-in-out px-4 sm:px-6 lg:px-8 ${scrolled ? "top-0 bg-white/98 backdrop-blur-md shadow-md" : "top-10 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-20" : "h-24"}`}>
            
            {/* Logo */}
            <Link href="/" className="flex items-center no-underline">
              <Image
                src="/logo.png"
                alt="atlas Institute"
                width={scrolled ? 160 : 180}
                height={scrolled ? 50 : 60}
                priority
                className="transition-all duration-300"
                style={{
                  height: "auto",
                }}
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setHoveredItem(link.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link 
                    href={link.href} 
                    className={`block px-4 py-2.5 text-gray-700 no-underline text-sm font-medium rounded-lg transition-all duration-200 hover:text-[#0a97b0] hover:bg-[#0a97b0]/8 ${link.children ? "flex items-center gap-1" : ""}`}
                  >
                    {link.label}
                    {link.children && (
                      <svg 
                        width="12" 
                        height="12" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        className={`inline-block transition-transform duration-200 ${hoveredItem === link.label ? "rotate-180" : ""}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.children && (
                    <div className={`absolute top-full left-0 min-w-[300px] bg-white rounded-xl shadow-xl border border-gray-100 p-2 transition-all duration-250 ease-out ${hoveredItem === link.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2.5"}`}>
                      {link.children.map((child) => (
                        <Link 
                          key={child.href} 
                          href={child.href} 
                          className="block px-4 py-3 text-gray-700 no-underline text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[#0a97b0]/8 hover:text-[#0a97b0] hover:pl-5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button & Search */}
            <div className="hidden lg:flex items-center gap-4">
              <Link 
                href="/apply" 
                className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-[#0a97b0] to-[#0d8fa3] text-white font-bold text-sm rounded-full no-underline transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                APPLY NOW
              </Link>
              
            
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col gap-1.5 cursor-pointer bg-none border-none p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[999] bg-white/98 backdrop-blur-md shadow-xl transition-all duration-300 lg:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="pt-24 px-6 pb-6 h-full overflow-y-auto">
          {/* Top bar links in mobile */}
          <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-gray-200">
            {topBarLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 bg-gray-100 text-gray-600 no-underline rounded-full text-xs hover:bg-[#0a97b0]/10 hover:text-[#0a97b0] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Main nav links */}
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <div 
                      className="flex items-center justify-between px-4 py-3.5 text-gray-800 text-base font-medium rounded-lg cursor-pointer hover:bg-[#0a97b0]/8 hover:text-[#0a97b0] transition-colors"
                      onClick={() => setHoveredItem(hoveredItem === link.label ? null : link.label)}
                    >
                      <span>{link.label}</span>
                      <svg 
                        width="16" 
                        height="16" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        className={`transition-transform duration-200 ${hoveredItem === link.label ? "rotate-180" : ""}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    {/* Mobile dropdown */}
                    {hoveredItem === link.label && (
                      <div className="pl-6 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-gray-600 text-sm rounded-lg hover:bg-[#0a97b0]/8 hover:text-[#0a97b0] transition-colors"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3.5 text-gray-800 text-base font-medium rounded-lg hover:bg-[#0a97b0]/8 hover:text-[#0a97b0] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            href="/apply"
            className="block w-full text-center px-6 py-3.5 mt-6 bg-gradient-to-r from-[#0a97b0] to-[#0d8fa3] text-white font-bold rounded-full no-underline hover:shadow-lg transition-all"
            onClick={() => setMenuOpen(false)}
          >
            APPLY NOW
          </Link>
        </div>
      </div>
    </>
  );
}