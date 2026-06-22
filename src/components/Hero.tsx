import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Magnetic from './effects/Magnetic';
import { PixelCanvas } from '@/components/ui/pixel-canvas';
import { useI18n } from '../i18n';
import { useIsMobile, usePrefersReducedMotion } from '../lib/useMediaQuery';
import { WHATSAPP_LINK } from '../lib/contact';

// Gold-on-white pixel palette with a single ink accent for contrast.
const PIXEL_COLORS = ['#E6C879', '#D4AF37', '#C9A227', '#B8901F', '#1C1A16'];

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
  const { t } = useI18n();
  const isMobile = useIsMobile();
  const reduceMotion = usePrefersReducedMotion();
  const logoRef = useRef<HTMLDivElement>(null);

  // Pointer parallax on the logo — applied directly to the DOM node via a ref
  // (rAF-throttled) so it never triggers a React re-render of the hero.
  useEffect(() => {
    if (isMobile || reduceMotion) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 6;
        if (logoRef.current) logoRef.current.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [isMobile, reduceMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain isolate"
      style={{ background: 'radial-gradient(125% 125% at 50% 0%, #ffffff 0%, #faf6ee 55%, #f1e9d9 100%)' }}
    >
      {/* Pixel ripple background (replaces the old 3D robot) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PixelCanvas colors={PIXEL_COLORS} gap={isMobile ? 24 : 16} speed={35} maxPixels={4200} />
        {/* keep the center clean for the headline + fade pixels into the page */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 45%, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.35) 45%, transparent 75%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 50%, transparent 55%, #ffffff 100%)' }}
        />
      </div>

      {/* faint aurora warmth */}
      <div className="aurora" style={{ opacity: 0.28 }} />

      {/* — MAIN CONTENT (centered) — */}
      <div className="relative z-10 w-full px-6 lg:px-14 pt-28 sm:pt-24 pb-24 flex flex-col items-center text-center pointer-events-none">

        {/* Logo */}
        <div
          ref={logoRef}
          className="reveal-up reveal-delay-1 mb-6"
          style={{ display: 'inline-block', transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <img
            src="/assets/images/download.png"
            alt="Mazhar Creative Agency"
            className="logo-blend"
            style={{ width: '66px', height: '66px', objectFit: 'contain' }}
          />
        </div>

        {/* Eyebrow */}
        <div className="reveal-up reveal-delay-2 flex items-center justify-center gap-4 mb-5">
          <div className="gold-divider" style={{ width: '36px' }} />
          <div className="section-label">{t.hero.eyebrow}</div>
          <span className="glow-dot" />
        </div>

        {/* Headline — black, kinetic, gold accent */}
        <h1
          className="font-display skeu-emboss"
          style={{ fontSize: 'clamp(2.5rem, 7.2vw, 6.4rem)', lineHeight: 1.04, fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.035em', maxWidth: '15ch' }}
        >
          <KineticLine delay={0}>{t.hero.line1}</KineticLine>{' '}
          <KineticLine delay={120}>{t.hero.line2}</KineticLine>{' '}
          {/* Same gold as "passion & precision" in the About section — the
              gradient must sit on the element holding the text (not an ancestor
              of a transformed span) or background-clip:text paints nothing.
              textShadow:none cancels the inherited white .skeu-emboss halo, which
              otherwise bleeds through the transparent fill and washes the gold to
              cream — About's heading has no emboss, so this matches it exactly. */}
          <span className="reveal-up reveal-delay-3" style={{ display: 'inline-block' }}>
            <em className="gold-text not-italic" style={{ fontWeight: 800, display: 'inline-block', textShadow: 'none' }}>
              {t.hero.line3}
            </em>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="reveal-up reveal-delay-4 font-body mx-auto"
          style={{ marginTop: '26px', fontSize: 'clamp(0.98rem, 1.8vw, 1.14rem)', color: 'rgba(28,26,22,0.66)', maxWidth: '600px', lineHeight: 1.8, fontWeight: 300 }}
        >
          {t.hero.subtitle}
        </p>

        {/* Stats row */}
        <div className="reveal-up reveal-delay-5 flex flex-wrap justify-center gap-x-10 gap-y-6 mt-10">
          {t.hero.stats.map((s) => (
            <div key={s.l} className="flex flex-col items-center gap-1">
              <span className="counter" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', lineHeight: 1 }}>{s.v}</span>
              <span className="font-label" style={{ fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(28,26,22,0.45)' }}>{s.l}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="reveal-up reveal-delay-6 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center gap-4 sm:gap-5 mt-11 w-full">
          <Magnetic strength={0.4} className="pointer-events-auto w-full sm:w-auto">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-full px-8 py-4 gap-2 w-full sm:w-auto"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </Magnetic>
          <Magnetic strength={0.3} className="pointer-events-auto w-full sm:w-auto">
            <a href="#work" className="btn-outline rounded-full px-8 py-4 gap-2 w-full sm:w-auto">
              {t.hero.ctaSecondary}
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Bottom vignette into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(transparent, #ffffff)', zIndex: 2 }} />
    </section>
  );
}
