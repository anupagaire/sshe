"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Academics",
      href: "#",
      dropdown: ["Undergraduate", "Postgraduate", "PhD Programs", "Online Courses"],
    },
    {
      label: "Admissions",
      href: "#",
      dropdown: ["How to Apply", "Scholarships", "Fee Structure", "Important Dates"],
    },
    {
      label: "Campus",
      href: "#",
      dropdown: ["Facilities", "Hostel", "Library", "Sports"],
    },
    { label: "Research", href: "#" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s ease;
          padding: 0 2rem;
        }
        .navbar.scrolled {
          background: rgba(10, 15, 40, 0.97);
          backdrop-filter: blur(20px);
          box-shadow: 0 2px 40px rgba(0,0,0,0.4);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }
        .navbar.top {
          background: transparent;
        }
        .nav-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-emblem {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #d4af37, #f0d060);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 900;
          color: #0a0f28;
          font-family: 'Georgia', serif;
          letter-spacing: -1px;
          box-shadow: 0 4px 16px rgba(212,175,55,0.4);
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .logo-name {
          font-family: 'Georgia', serif;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: 0.5px;
        }
        .logo-tagline {
          font-size: 10px;
          color: #d4af37;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: sans-serif;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 14px;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.3px;
          border-radius: 8px;
          transition: all 0.2s;
          font-family: sans-serif;
          cursor: pointer;
          border: none;
          background: none;
        }
        .nav-link:hover, .nav-link.active {
          color: #d4af37;
          background: rgba(212, 175, 55, 0.08);
        }
        .chevron {
          font-size: 10px;
          transition: transform 0.2s;
        }
        .nav-item:hover .chevron { transform: rotate(180deg); }
        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background: rgba(10, 15, 40, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          padding: 8px;
          min-width: 200px;
          opacity: 0;
          pointer-events: none;
          transition: all 0.25s;
          list-style: none;
          margin: 0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .nav-item:hover .dropdown {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown li a {
          display: block;
          padding: 9px 16px;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 13.5px;
          border-radius: 8px;
          transition: all 0.15s;
          font-family: sans-serif;
        }
        .dropdown li a:hover {
          color: #d4af37;
          background: rgba(212,175,55,0.1);
          padding-left: 22px;
        }
        .nav-cta {
          padding: 10px 22px;
          background: linear-gradient(135deg, #d4af37, #f0d060);
          color: #0a0f28;
          font-weight: 700;
          font-size: 13.5px;
          border-radius: 30px;
          text-decoration: none;
          font-family: sans-serif;
          letter-spacing: 0.3px;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(212,175,55,0.3);
        }
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,55,0.45);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: rgba(10,15,40,0.99);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(212,175,55,0.2);
          padding: 16px;
          flex-direction: column;
          gap: 4px;
          z-index: 999;
        }
        .mobile-menu.open { display: flex; }
        .mobile-link {
          display: block;
          padding: 12px 16px;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 15px;
          border-radius: 8px;
          font-family: sans-serif;
        }
        .mobile-link:hover { color: #d4af37; background: rgba(212,175,55,0.08); }

        @media (max-width: 900px) {
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? "scrolled" : "top"}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="logo-emblem">Σ</div>
            <div className="logo-text">
              <span className="logo-name">SSHE</span>
              <span className="logo-tagline">Est. 2026 · Excellence</span>
            </div>
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                  {link.dropdown && <span className="chevron">▾</span>}
                </a>
                {link.dropdown && (
                  <ul className="dropdown">
                    {link.dropdown.map((item) => (
                      <li key={item}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <a href="#admissions" className="nav-cta">Apply Now →</a>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#admissions" className="nav-cta" style={{ marginTop: 8, textAlign: "center" }}>
          Apply Now →
        </a>
      </div>
    </>
  );
}