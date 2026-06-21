import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ParticleField from './effects/ParticleField';
import Magnetic from './effects/Magnetic';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

function KineticLine({ children, delay = 0 }: { children: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 250 + delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <span className={`kinetic ${vis ? 'is-visible' : ''}`} style={{ ['--k-delay' as string]: `${delay}ms` }}>
      <span ref={ref}>{children}</span>
    </span>
  );
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grain"
      style={{ background: 'radial-gradient(120% 120% at 70% 20%, #0d0d16 0%, #07070b 45%, #040406 100%)' }}
    >
      {/* Cinematic spotlight sweep */}
      <Spotlight className="-top-40 left-0 md:-top-24 md:left-1/3" fill="rgba(212,175,55,0.55)" />

      {/* Aurora + grid + particles */}
      <div className="aurora" />
      <div className="absolute inset-0 grid-bg" style={{ opacity: 0.55 }} />
      <ParticleField className="absolute inset-0" style={{ opacity: 0.5 }} density={55} />

      {/* Interactive 3D scene (right side) */}
      <div className="absolute top-0 right-0 h-full hidden md:block" style={{ width: '56%', zIndex: 1 }}>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* — MAIN CONTENT — */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-14 pt-32 pb-24 pointer-events-none">
        <div className="max-w-3xl">

          {/* Logo */}
          <div
            className="reveal-up reveal-delay-1 mb-8"
            style={{
              display: 'inline-block',
              transform: `translate(${mouse.x * 10}px, ${mouse.y * 8}px)`,
              transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <img
              src="/assets/images/download.png"
              alt="Mazhar Creative Agency"
              className="logo-blend"
              style={{ width: '78px', height: '78px', objectFit: 'contain' }}
            />
          </div>

          {/* Eyebrow */}
          <div className="reveal-up reveal-delay-2 flex items-center gap-4 mb-6">
            <div className="gold-divider" style={{ width: '44px' }} />
            <div className="section-label">Mazhar Creative Agency</div>
            <span className="glow-dot" />
          </div>

          {/* Headline — kinetic Vision Sans */}
          <h1
            className="font-display"
            style={{ fontSize: 'clamp(2.9rem, 7vw, 6.5rem)', lineHeight: 1.02, fontWeight: 700, color: '#F6F1E7', letterSpacing: '-0.035em', textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
          >
            <KineticLine delay={0}>Crafting visuals</KineticLine>{' '}
            <KineticLine delay={120}>that make</KineticLine>
            <br />
            <em className="gold-text not-italic" style={{ fontWeight: 800 }}>
              <KineticLine delay={260}>brands unforgettable.</KineticLine>
            </em>
          </h1>

          {/* Subheadline */}
          <p
            className="reveal-up reveal-delay-4 font-body"
            style={{ marginTop: '30px', fontSize: 'clamp(0.98rem, 1.8vw, 1.12rem)', color: 'rgba(246,241,231,0.6)', maxWidth: '540px', lineHeight: 1.8, fontWeight: 300, textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            We create exceptional websites, branding systems, digital experiences,
            and creative assets for businesses around the globe.
          </p>

          {/* Stats row */}
          <div className="reveal-up reveal-delay-5 flex flex-wrap gap-10 mt-12">
            {[
              { v: '7+', l: 'Years Experience' },
              { v: '200+', l: 'Satisfied Clients' },
              { v: 'Global', l: 'Reach' },
            ].map((s) => (
              <div key={s.l} className="flex flex-col gap-1">
                <span className="counter" style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)', lineHeight: 1 }}>{s.v}</span>
                <span className="font-label" style={{ fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(246,241,231,0.42)' }}>{s.l}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="reveal-up reveal-delay-6 flex flex-wrap items-center gap-5 mt-12">
            <Magnetic strength={0.4} className="pointer-events-auto">
              <a
                href="https://wa.me/923048603377"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold rounded-full px-8 py-4 gap-2"
              >
                Book Free Consultation
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </Magnetic>
            <Magnetic strength={0.3} className="pointer-events-auto">
              <a href="#work" className="btn-outline rounded-full px-8 py-4 gap-2">
                View Our Work
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute left-1/2 hidden sm:flex flex-col items-center gap-2"
        style={{ bottom: '28px', transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <span className="font-label" style={{ fontSize: '0.5rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(246,241,231,0.4)' }}>Scroll</span>
        <div style={{ width: '1px', height: '46px', background: 'linear-gradient(180deg, rgba(212,175,55,0.7), transparent)' }} />
      </div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(transparent, #040406)', zIndex: 2 }} />
    </section>
  );
}
