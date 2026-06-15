"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const stats = [
    { number: "15,000+", label: "Students Enrolled" },
    { number: "200+", label: "Academic Programs" },
    { number: "98%", label: "Placement Rate" },
    { number: "100+", label: "Faculty Members" },
  ];

  const features = [
    { icon: "🏆", text: "NAAC Grade A++ Accredited Institution" },
    { icon: "🌍", text: "International Exchange with 40+ Universities" },
    { icon: "💼", text: "500+ Recruiters Visit Campus Annually" },
  ];

  return (
    <>
      <style>{`
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 60% 40%, rgba(16,28,80,0.9) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(212,175,55,0.08) 0%, transparent 60%),
            url('https://images.unsplash.com/photo-1562774053-701939374585?w=1800&q=80') center/cover no-repeat;
        }
        .title-accent {
          background: linear-gradient(90deg, #d4af37, #f0d060, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card-top-line::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 30px;
          right: 30px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }
        .badge-dot {
          width: 7px;
          height: 7px;
          background: #d4af37;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, #d4af37, transparent);
          animation: scrollLine 2s ease infinite;
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeSlideUp 0.8s 0.00s ease both; }
        .anim-2 { animation: fadeSlideUp 0.8s 0.15s ease both; }
        .anim-3 { animation: fadeSlideUp 0.8s 0.30s ease both; }
        .anim-4 { animation: fadeSlideUp 0.8s 0.45s ease both; }
        .anim-5 { animation: fadeSlideUp 0.8s 0.20s ease both; }
        .anim-6 { animation: fadeSlideUp 1.0s 1.00s ease both; }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#040810" }}
      >
        {/* Background */}
        <div className="hero-bg absolute inset-0" />

        {/* Particle canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(4,8,16,0.85) 0%, rgba(10,15,40,0.7) 50%, rgba(4,8,16,0.5) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-8 pt-[120px] pb-20 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">

          {/* Left */}
          <div>
            {/* Badge */}
            <div
              className="anim-1 inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
              style={{
                background: "rgba(212,175,55,0.12)",
                borderColor: "rgba(212,175,55,0.35)",
              }}
            >
              <span className="badge-dot" />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#d4af37", fontFamily: "sans-serif" }}
              >
                Admissions Open 2026
              </span>
            </div>

            {/* Title */}
            <h1
              className="anim-2 font-serif font-bold leading-[1.08] mb-6"
              style={{ fontSize: "clamp(42px, 5vw, 72px)", color: "#ffffff" }}
            >
              Shape Your Future at{" "}
              <span className="title-accent">Atlas</span>
            </h1>

            {/* Description */}
            <p
              className="anim-3 text-[17px] leading-[1.75] mb-10 max-w-[500px]"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "sans-serif" }}
            >
              A century of academic excellence, world-class faculty, and a vibrant campus community.
              Join thousands of students who chose to begin their journey here.
            </p>

            {/* Actions */}
            <div className="anim-4 flex flex-wrap gap-4">
              <a
                href="#admissions"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[15px] transition-all duration-250 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #d4af37, #f0d060)",
                  color: "#0a0f28",
                  boxShadow: "0 8px 24px rgba(212,175,55,0.35)",
                  fontFamily: "sans-serif",
                }}
              >
                Apply for 2026 →
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] text-white transition-all duration-250 hover:-translate-y-1 hover:bg-white/10"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "sans-serif",
                }}
              >
                ▶ Explore Programs
              </a>
            </div>
          </div>

          {/* Right — hidden on mobile */}
          <div className="anim-5 hidden md:block">
            <div
              className="card-top-line relative rounded-[24px] p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-5 mb-7">
                
              </div>

              {/* Feature rows */}
              {features.map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl mb-3"
                  style={{
                    background: "rgba(212,175,55,0.06)",
                    border: "1px solid rgba(212,175,55,0.15)",
                  }}
                >
                  <span className="text-[20px] flex-shrink-0">{f.icon}</span>
                  <span
                    className="text-[13.5px]"
                    style={{ color: "rgba(255,255,255,0.8)", fontFamily: "sans-serif" }}
                  >
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="anim-6 absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
        </div>
      </section>
    </>
  );
}