import { useEffect, useRef, useState } from 'react';
import { useInView } from '../lib/useInView';
import Reveal from './effects/Reveal';
import Tilt3D from './effects/Tilt3D';
import { useI18n } from '../i18n';

const STAT_TARGETS = [7, 200];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="counter" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.6rem)', lineHeight: 1 }}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const stats = t.about.stats.map((s, i) => ({ ...s, target: STAT_TARGETS[i] }));

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #faf6ee 100%)' }}
    >
      <div className="aurora" style={{ opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <Reveal>
            <div className="section-label mb-5 flex items-center gap-3">
              <div className="gold-divider" style={{ width: '36px' }} />
              {t.about.label}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)', color: '#1c1a16', lineHeight: 1.08, maxWidth: '760px', fontWeight: 600 }}>
              {t.about.headingLead}
              <em className="gold-text not-italic">{t.about.headingAccent}</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-body" style={{ maxWidth: '620px', color: 'rgba(28,26,22,0.55)', fontSize: '1.04rem', lineHeight: 1.8, fontWeight: 300 }}>
              {t.about.intro}
            </p>
          </Reveal>
        </div>

        <div className="gold-divider mb-16" style={{ opacity: 0.25 }} />

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Counters */}
          <div className="flex flex-col gap-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} variant="left" delay={0.1 + i * 0.15}>
                <AnimatedCounter target={s.target} suffix={s.suffix} />
                <div className="font-label font-semibold mt-2 mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#D4AF37' }}>
                  {s.label}
                </div>
                <p className="font-body" style={{ fontSize: '0.92rem', color: 'rgba(28,26,22,0.45)', lineHeight: 1.65, fontWeight: 300 }}>
                  {s.desc}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Pillar cards */}
          <div className="flex flex-col gap-5">
            {t.about.pillars.map((p, i) => (
              <Reveal key={p.label} variant="right" delay={0.1 + i * 0.12}>
                <Tilt3D max={8} className="border-card p-8 light-sweep">
                  <div className="font-label font-semibold mb-3" style={{ fontSize: '0.65rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#D4AF37' }}>
                    {p.label}
                  </div>
                  <p className="font-body" style={{ fontSize: '0.94rem', color: 'rgba(28,26,22,0.55)', lineHeight: 1.65, fontWeight: 300 }}>
                    {p.text}
                  </p>
                </Tilt3D>
              </Reveal>
            ))}

            <Reveal variant="right" delay={0.34}>
              <div className="border-card p-8" style={{ borderTop: '1px solid rgba(240,217,140,0.45)' }}>
                <p className="font-display" style={{ fontSize: '1.4rem', color: 'rgba(28,26,22,0.82)', lineHeight: 1.5, fontWeight: 400, letterSpacing: '-0.01em' }}>
                  {t.about.quote}
                </p>
                <div className="font-label mt-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.6)' }}>
                  {t.about.quoteAuthor}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
