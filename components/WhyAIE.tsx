export default function WhyAIE() {
  return (
    <>
      <style>{`
        .why-image-blob {
          position: relative;
          width: 100%;
          max-width: 520px;
        }
        .blob-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1e3a8a 60%, #1d4ed8 100%);
          border-radius: 48% 52% 40% 60% / 45% 40% 60% 55%;
          z-index: 0;
        }
        .blob-img {
          position: relative;
          z-index: 1;
          width: 100%;
          object-fit: cover;
          border-radius: 48% 52% 40% 60% / 45% 40% 60% 55%;
          display: block;
        }
        .dot-teal {
          position: absolute;
          top: 10%;
          right: 8%;
          width: 52px;
          height: 52px;
          background: #14b8a6;
          border-radius: 50%;
          z-index: 2;
        }
        .dot-green {
          position: absolute;
          bottom: 18%;
          left: 2%;
          width: 38px;
          height: 38px;
          background: #4ade80;
          border-radius: 50%;
          z-index: 2;
        }
        .badge-books {
          position: absolute;
          bottom: 8%;
          right: 4%;
          z-index: 3;
          background: #fff;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          font-size: 36px;
        }
        .find-out-btn {
          transition: all 0.25s;
        }
        .find-out-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37,99,235,0.35);
        }
      `}</style>

      <section className="bg-slate-50 py-24 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* ── LEFT: image blob ── */}
          <div className="why-image-blob flex-shrink-0 mx-auto md:mx-0">
            <div className="blob-bg" />

            {/* Decorative dots */}
            <div className="dot-teal" />
            <div className="dot-green" />

            {/* Main image — replace src with your own */}
            <img
              src="/1.jpg"
              alt="Student with VR headset"
              className="blob-img"
              style={{ minHeight: 380 }}
            />

            {/* Books badge */}
            <div className="badge-books">📚</div>
          </div>

          {/* ── RIGHT: text ── */}
          <div className="flex-1 max-w-[580px]">

            {/* Eyebrow */}
            <p className="text-blue-600 font-bold text-[11px] tracking-[3px] uppercase mb-4">
              Is AIE Right for Me?
            </p>

            {/* Heading */}
            <h2 className="font-serif text-[clamp(28px,3.5vw,46px)] font-bold text-[#0f2157] leading-[1.15] mb-6">
              Your future starts here,<br className="hidden lg:block" />
              which means ours does too.
            </h2>

            {/* Body paragraphs */}
            <p className="text-slate-500 text-[16px] leading-[1.85] mb-5">
              At AIE, we believe in enquiring minds and their capacity to shape the future of business
              and society in the most impactful ways. We welcome those ready to realise their intellectual
              and professional potential — building careers that protect and empower the digital world.
            </p>

            <p className="text-slate-500 text-[16px] leading-[1.85] mb-8">
              Our <span className="text-slate-700 font-semibold">Bachelor of Business (Major in Cybersecurity)</span> is
              driven by a commitment to academic excellence, practical skill-building, and ongoing
              industry engagement — providing a launchpad for the next generation of cybersecurity leaders.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-10 flex-wrap">
              {[
                { num: "3 Yrs", label: "Full-Time Degree" },
                { num: "AQF 7", label: "Qualification" },
                { num: "24", label: "Subjects" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-[26px] font-bold text-blue-700 leading-none mb-1">
                    {s.num}
                  </div>
                  <div className="text-[12px] text-slate-400 uppercase tracking-wide font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/about"
              className="find-out-btn inline-block bg-blue-600 text-white text-[13px] font-bold tracking-[2px] uppercase px-10 py-4 rounded-full no-underline"
            >
              Find Out More
            </a>
          </div>

        </div>
      </section>
    </>
  );
}