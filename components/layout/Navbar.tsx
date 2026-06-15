"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Admissions", href: "/admissions" },
    { label: "Courses", href: "/courses" },
    { label: "Contact", href: "/contact" },
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
          text-decoration: none;
        }

        .logo-image {
          height: 50px;
          width: auto;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          padding: 8px 14px;
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .nav-link:hover {
          color: #d4af37;
          background: rgba(212,175,55,0.08);
        }

        .nav-cta {
          padding: 10px 22px;
          background: linear-gradient(135deg, #d4af37, #f0d060);
          color: #0a0f28;
          font-weight: 700;
          font-size: 13px;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.2s;
        }

        .nav-cta:hover {
          transform: translateY(-2px);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .hamburger span {
          width: 24px;
          height: 2px;
          background: white;
          transition: all 0.3s;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: rgba(10,15,40,0.98);
          backdrop-filter: blur(20px);
          padding: 16px;
          flex-direction: column;
          gap: 6px;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-link {
          padding: 12px 16px;
          color: white;
          text-decoration: none;
          border-radius: 8px;
        }

        .mobile-link:hover {
          background: rgba(212,175,55,0.08);
          color: #d4af37;
        }

        @media (max-width: 900px) {
          .nav-links,
          .nav-cta {
            display: none;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? "scrolled" : "top"}`}>
        <div className="nav-inner">

         <Link href="/" className="nav-logo">
  <Image
    src="/logo.png"
    alt="University Logo"
    width={300}
    height={80}
    priority
    style={{
      width: "140px",
      height: "auto",
    }}
  />
</Link>

          {/* Desktop Menu */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/admissions" className="nav-cta">
            Apply Now →
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translateY(7px)"
                  : "none",
              }}
            />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/admissions"
          className="nav-cta"
          style={{ textAlign: "center", marginTop: "8px" }}
        >
          Apply Now →
        </Link>
      </div>
    </>
  );
}