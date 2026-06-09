export default function Footer() {
  const links = {
    Academics: ["Undergraduate", "Postgraduate", "PhD Programs", "Online Courses", "Academic Calendar"],
    Admissions: ["How to Apply", "Scholarships", "Fee Structure", "Hostel Application", "FAQs"],
    Campus: ["Facilities", "Library", "Sports", "Health Centre", "Transport"],
    Connect: ["Contact Us", "Campus Map", "Career Portal", "Media Centre", "Alumni Network"],
  };

  return (
    <>
      <style>{`
        .footer {
          background: #37063f;
          border-top: 1px solid rgba(212,175,55,0.15);
          padding: 80px 2rem 0;
          font-family: sans-serif;
        }
        .footer-inner {
          max-width: 1300px;
          margin: 0 auto;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 64px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .footer-brand {}
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          text-decoration: none;
        }
        .footer-emblem {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #d4af37, #f0d060);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 900;
          color: #0a0f28;
          font-family: Georgia, serif;
        }
        .footer-name {
          font-family: Georgia, serif;
          font-size: 17px;
          font-weight: 700;
          color: #fff;
        }
        .footer-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.4);
          line-height: 1.75;
          margin-bottom: 28px;
          max-width: 300px;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 13px;
          color: rgba(255,255,255,0.45);
        }
        .footer-contact-item a {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-item a:hover { color: #d4af37; }
        .social-links {
          display: flex;
          gap: 10px;
          margin-top: 24px;
        }
        .social-link {
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 15px;
          transition: all 0.2s;
        }
        .social-link:hover {
          background: rgba(212,175,55,0.12);
          border-color: rgba(212,175,55,0.3);
          color: #d4af37;
        }
        .footer-col-title {
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #d4af37;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .footer-col-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col-links a {
          font-size: 13.5px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
        }
        .footer-col-links a:hover {
          color: #d4af37;
          transform: translateX(4px);
        }
        .footer-bottom {
          padding: 28px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
        }
        .footer-copy span { color: rgba(212,175,55,0.7); }
        .footer-legal {
          display: flex;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .footer-legal a {
          font-size: 12.5px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal a:hover { color: #d4af37; }
        .accreditation {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 32px;
          padding: 20px 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px;
          margin-bottom: 40px;
        }
        .accreditation-text {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          line-height: 1.6;
        }
        .accreditation-badge {
          padding: 6px 14px;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          color: #d4af37;
          white-space: nowrap;
        }
        @media (max-width: 1100px) {
          .footer-top { grid-template-columns: 1fr 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 600px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <div className="footer-emblem">Σ</div>
                <span className="footer-name">Atlas</span>
              </a>
              <p className="footer-desc">
                Shaping minds, building futures. Atlas is committed to transformative
                education and research excellence since 1985.
              </p>
              <div className="footer-contact-item">📍 <span>586-590 Parramatta Road, Petersham, NSW 2049</span></div>
              <div className="footer-contact-item">📞 <a href="tel:+61298765432">+61 2 9876 5432</a></div>
              <div className="footer-contact-item">✉️ <a href="mailto:admissions@Atlas.edu">admissions@Atlas.edu</a></div>
              <div className="social-links">
                {["𝕏", "in", "f", "▶", "📷"].map((s, i) => (
                  <a key={i} href="#" className="social-link">{s}</a>
                ))}
              </div>

            
            </div>

            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <div className="footer-col-title">{title}</div>
                <ul className="footer-col-links">
                  {items.map((item) => (
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © 2025 Atlas. All rights reserved. Designed with <span>♥</span> for knowledge.
            </p>
            <ul className="footer-legal">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}