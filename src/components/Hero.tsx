import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

function generateParticles(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 14}s`,
    duration: `${Math.random() * 8 + 10}s`,
    opacity: Math.random() * 0.5 + 0.15,
  }));
}

const PARTICLES = generateParticles(28);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - r.left) / r.width - 0.5,
        y: (e.clientY - r.top) / r.height - 0.5,
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ background: 'linear-gradient(155deg, #08111F 0%, #050c18 55%, #020810 100%)' }}
    >
      {/* Ambient light blobs — mouse reactive */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '5%', left: '10%',
          width: '700px', height: '700px',
          background: 'radial-gradient(ellipse, rgba(212,175,55,0.065) 0%, transparent 65%)',
          transform: `translate(${mouse.x * 35}px, ${mouse.y * 25}px)`,
          transition: 'transform 1s cubic-bezier(0.23,1,0.32,1)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '0%', right: '5%',
          width: '550px', height: '550px',
          background: 'radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 65%)',
          transform: `translate(${-mouse.x * 25}px, ${-mouse.y * 18}px)`,
          transition: 'transform 1.2s cubic-bezier(0.23,1,0.32,1)',
          borderRadius: '50%',
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size, height: p.size,
              left: p.left, bottom: '-8px',
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Decorative rings */}
      <div
        className="absolute pointer-events-none float-b"
        style={{
          top: '14%', right: '6%',
          width: '220px', height: '220px', borderRadius: '50%',
          border: '1px solid rgba(212,175,55,0.07)',
          boxShadow: '0 0 50px rgba(212,175,55,0.04), inset 0 0 50px rgba(212,175,55,0.02)',
        }}
      />
      <div
        className="absolute pointer-events-none float-a"
        style={{
          bottom: '15%', left: '5%',
          width: '140px', height: '140px', borderRadius: '50%',
          border: '1px solid rgba(212,175,55,0.07)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', right: '20%',
          width: '60px', height: '60px', borderRadius: '50%',
          border: '1px solid rgba(212,175,55,0.14)',
          boxShadow: '0 0 25px rgba(212,175,55,0.08)',
          animation: 'floatB 6s ease-in-out infinite 0.8s',
        }}
      />

      {/* — MAIN CONTENT — */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-14 pt-28 pb-20">
        <div className="max-w-4xl">

          {/* Logo */}
          <div
            className="reveal-up reveal-delay-1 mb-10"
            style={{
              display: 'inline-block',
              transform: `translate(${mouse.x * 7}px, ${mouse.y * 5}px)`,
              transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            <img
              src="/assets/images/download.png"
              alt="Mazhar Creative Agency"
              className="logo-blend"
              style={{
                width: '90px',
                height: '90px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 28px rgba(212,175,55,0.45)) drop-shadow(0 0 60px rgba(212,175,55,0.15))',
              }}
            />
          </div>

          {/* Eyebrow */}
          <div className="reveal-up reveal-delay-2 flex items-center gap-4 mb-5">
            <div className="section-label" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Mazhar Creative Agency
            </div>
            <span className="glow-dot" />
          </div>

          {/* Headline */}
          <h1
            className="reveal-up reveal-delay-3 font-display"
            style={{
              fontSize: 'clamp(3rem, 6.5vw, 6rem)',
              lineHeight: 1.05,
              fontWeight: 600,
              color: '#f2e9d8',
              letterSpacing: '-0.01em',
            }}
          >
            Crafting visuals that make{' '}
            <br className="hidden lg:block" />
            <em className="gold-text not-italic">brands unforgettable.</em>
          </h1>

          {/* Subheadline */}
          <p
            className="reveal-up reveal-delay-4 font-body"
            style={{
              marginTop: '28px',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
              color: 'rgba(242,233,216,0.55)',
              maxWidth: '560px',
              lineHeight: '1.75',
              fontWeight: 300,
            }}
          >
            We create exceptional websites, branding systems, digital experiences,
            and creative assets for businesses around the globe.
          </p>

          {/* Stats row */}
          <div
            className="reveal-up reveal-delay-5 flex flex-wrap gap-10 mt-12"
          >
            {[
              { v: '7+', l: 'Years Experience' },
              { v: '200+', l: 'Satisfied Clients' },
              { v: 'Global', l: 'Reach' },
            ].map((s) => (
              <div key={s.l} className="flex flex-col gap-1">
                <span className="counter" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', lineHeight: 1 }}>
                  {s.v}
                </span>
                <span
                  className="font-label"
                  style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(242,233,216,0.38)' }}
                >
                  {s.l}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="reveal-up reveal-delay-5"
            style={{
              marginTop: '28px',
              width: '220px',
              height: '1px',
              background: 'linear-gradient(90deg, rgba(212,175,55,0.4), transparent)',
            }}
          />

          {/* CTA Buttons */}
          <div className="reveal-up reveal-delay-6 flex flex-wrap items-center gap-4 mt-10">
            <a
              href="https://wa.me/923048603377"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-full px-8 py-4 gap-2"
            >
              Book Free Consultation
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
            <a href="#work" className="btn-outline rounded-full px-8 py-4 gap-2">
              View Our Work
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, #08111F)' }}
      />
    </section>
  );
}
