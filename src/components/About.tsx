import { useEffect, useRef, useState } from 'react';

function useVisible(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const { ref, visible } = useVisible(0.5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
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
  }, [visible, target]);

  return (
    <span ref={ref} className="counter" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', lineHeight: 1 }}>
      {count}{suffix}
    </span>
  );
}

const STATS = [
  {
    target: 7, suffix: '+', label: 'Years Experience',
    desc: 'Over seven years delivering creative excellence across industries and continents.',
  },
  {
    target: 200, suffix: '+', label: 'Satisfied Clients',
    desc: 'Trusted by over two hundred businesses who rely on us for their visual identity.',
  },
];

const PILLARS = [
  { label: 'International Projects', text: 'Delivering premium creative solutions to clients across the globe.' },
  { label: 'Affordable Premium',     text: 'World-class design quality without the world-class price tag.' },
];

export default function About() {
  const { ref: titleRef, visible: titleVisible } = useVisible(0.25);

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #08111F 0%, #060d1a 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 65% 45% at 50% 50%, rgba(212,175,55,0.035) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header — description directly under heading */}
        <div
          ref={titleRef}
          className="mb-14"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.9s cubic-bezier(0.23,1,0.32,1)',
          }}
        >
          <div className="section-label mb-5 flex items-center gap-3">
            <div className="gold-divider" style={{ width: '36px' }} />
            About Us
          </div>

          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', color: '#f2e9d8', lineHeight: 1.1, maxWidth: '700px' }}
          >
            A studio built on{' '}
            <em className="gold-text not-italic">passion & precision</em>
          </h2>

          {/* Description directly under heading */}
          <p
            className="font-body"
            style={{
              maxWidth: '620px',
              color: 'rgba(242,233,216,0.52)',
              fontSize: '1.02rem',
              lineHeight: '1.75',
              fontWeight: 300,
            }}
          >
            We are a creative agency dedicated to building extraordinary visual
            identities, digital experiences, and brand systems that leave
            lasting impressions.
          </p>
        </div>

        <div className="gold-divider mb-14" style={{ opacity: 0.25 }} />

        {/* Body — counters left, pillar cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: animated counters */}
          <div className="flex flex-col gap-12">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  opacity: titleVisible ? 1 : 0,
                  transform: titleVisible ? 'translateX(0)' : 'translateX(-40px)',
                  transition: `all 0.9s cubic-bezier(0.23,1,0.32,1) ${0.15 + i * 0.18}s`,
                }}
              >
                <AnimatedCounter target={s.target} suffix={s.suffix} />
                <div
                  className="font-label font-semibold mt-2 mb-2"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D4AF37' }}
                >
                  {s.label}
                </div>
                <p
                  className="font-body"
                  style={{ fontSize: '0.9rem', color: 'rgba(242,233,216,0.45)', lineHeight: '1.65', fontWeight: 300 }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: pillar cards + quote */}
          <div className="flex flex-col gap-5">
            {PILLARS.map((p, i) => (
              <div
                key={p.label}
                className="border-card p-8 light-sweep"
                style={{
                  opacity: titleVisible ? 1 : 0,
                  transform: titleVisible ? 'translateX(0)' : 'translateX(50px)',
                  transition: `all 0.9s cubic-bezier(0.23,1,0.32,1) ${0.3 + i * 0.18}s`,
                }}
              >
                <div
                  className="font-label font-semibold mb-3"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D4AF37' }}
                >
                  {p.label}
                </div>
                <p
                  className="font-body"
                  style={{ fontSize: '0.92rem', color: 'rgba(242,233,216,0.52)', lineHeight: '1.65', fontWeight: 300 }}
                >
                  {p.text}
                </p>
              </div>
            ))}

            {/* Quote card */}
            <div
              className="border-card p-8"
              style={{
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 0.9s cubic-bezier(0.23,1,0.32,1) 0.66s',
                borderTop: '2px solid rgba(212,175,55,0.25)',
              }}
            >
              <p
                className="font-display italic"
                style={{ fontSize: '1.35rem', color: 'rgba(242,233,216,0.72)', lineHeight: '1.5', fontWeight: 400 }}
              >
                "Premium quality is not a luxury — it is the standard every brand deserves."
              </p>
              <div
                className="font-label mt-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.5)' }}
              >
                — Abdul Hanan, Founder & CEO
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
