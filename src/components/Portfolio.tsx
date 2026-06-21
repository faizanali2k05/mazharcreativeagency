import { useEffect, useRef, useState } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    index: '01',
    title: 'William Cely',
    category: 'Photography',
    desc: 'Elegant photography portfolio capturing stories through cinematic light and authentic emotion.',
    image: '/assets/images/portfolio/screencapture-williamcelyphotography-2026-06-21-16_29_32 copy.png',
    url: 'williamcelyphotography.com',
  },
  {
    index: '02',
    title: 'Maie Ibarra',
    category: 'Beauty Studio',
    desc: 'Sophisticated beauty studio website blending luxury aesthetics with a seamless booking experience.',
    image: '/assets/images/portfolio/screencapture-maiebeautymx-2026-06-21-16_29_03 copy.png',
    url: 'maiebeautymx.com',
  },
];

function ProjectCard({
  index,
  title,
  category,
  desc,
  image,
  url,
  side,
}: {
  index: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  url: string;
  side: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="project-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : side === 'left' ? 'translateX(-70px)' : 'translateX(70px)',
        transition: 'all 1s cubic-bezier(0.23,1,0.32,1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          background: 'linear-gradient(165deg, #0d1c2e, #070f1c)',
          border: `1px solid ${hovered ? 'rgba(212,175,55,0.3)' : 'rgba(212,175,55,0.1)'}`,
          boxShadow: hovered
            ? '24px 24px 70px rgba(0,0,0,0.8), -5px -5px 18px rgba(255,255,255,0.02), 0 0 55px rgba(212,175,55,0.14)'
            : '14px 14px 50px rgba(0,0,0,0.7), -3px -3px 12px rgba(255,255,255,0.015)',
          transform: hovered ? 'translateY(-14px)' : 'translateY(0)',
          transition: 'all 0.5s cubic-bezier(0.23,1,0.32,1)',
          position: 'relative',
        }}
      >
        {/* Top edge gold line */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: '8%', right: '8%',
            height: '1px',
            background: hovered
              ? 'linear-gradient(90deg, transparent, rgba(212,175,55,0.75), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)',
            zIndex: 3,
            transition: 'all 0.5s ease',
          }}
        />

        {/* Browser chrome */}
        <div
          style={{
            padding: '11px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(180deg, #0d1a2c 0%, #091422 100%)',
            borderBottom: '1px solid rgba(212,175,55,0.1)',
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
            {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
              <div key={i} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c, opacity: 0.75 }} />
            ))}
          </div>
          {/* URL bar */}
          <div
            style={{
              flex: 1, height: '24px', borderRadius: '12px',
              background: 'rgba(0,0,0,0.35)',
              border: '1px solid rgba(212,175,55,0.07)',
              display: 'flex', alignItems: 'center', gap: '7px', padding: '0 10px',
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(39,201,63,0.7)', flexShrink: 0 }} />
            <span
              className="font-label"
              style={{ fontSize: '0.58rem', color: 'rgba(242,233,216,0.32)', letterSpacing: '0.03em', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            >
              {url}
            </span>
          </div>
          {/* External link icon */}
          <ExternalLink
            size={12}
            strokeWidth={1.5}
            style={{ color: 'rgba(212,175,55,0.3)', flexShrink: 0 }}
          />
        </div>

        {/* Screenshot — natural aspect ratio, full width */}
        <div style={{ position: 'relative', overflow: 'hidden', background: '#f5f5f5' }}>
          <img
            src={image}
            alt={`${title} — ${category}`}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transform: hovered ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1)',
              transformOrigin: 'top center',
            }}
          />
          {/* Bottom gradient overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '80px',
              background: 'linear-gradient(transparent, rgba(7,15,28,0.7))',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Info bar */}
        <div
          style={{
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '12px',
            background: 'linear-gradient(135deg, #0c1928, #08111F)',
            borderTop: '1px solid rgba(212,175,55,0.08)',
          }}
        >
          <div style={{ flex: 1 }}>
            {/* Index / category */}
            <div
              className="font-label"
              style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: 'rgba(212,175,55,0.55)', marginBottom: '5px' }}
            >
              {index} — {category}
            </div>

            {/* Title */}
            <h3
              className="font-display font-semibold"
              style={{ fontSize: '1.4rem', color: '#f2e9d8', lineHeight: 1.2, marginBottom: '7px' }}
            >
              {title}
            </h3>

            {/* Desc */}
            <p
              className="font-body"
              style={{ fontSize: '0.82rem', color: 'rgba(242,233,216,0.42)', lineHeight: '1.55', fontWeight: 300 }}
            >
              {desc}
            </p>
          </div>

          {/* Arrow button */}
          <div
            style={{
              flexShrink: 0,
              width: '40px', height: '40px',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: hovered
                ? 'linear-gradient(135deg, #D4AF37, #FFD700)'
                : 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.25)',
              boxShadow: hovered ? '0 0 24px rgba(212,175,55,0.45)' : 'none',
              transition: 'all 0.4s ease',
              marginTop: '4px',
            }}
          >
            <ExternalLink
              size={14}
              strokeWidth={2}
              style={{ color: hovered ? '#06101c' : '#D4AF37', transition: 'color 0.4s ease' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const t = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTitleVisible(true); }, { threshold: 0.3 });
    if (titleRef.current) t.observe(titleRef.current);
    const c = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCtaVisible(true); }, { threshold: 0.4 });
    if (ctaRef.current) c.observe(ctaRef.current);
    return () => { t.disconnect(); c.disconnect(); };
  }, []);

  return (
    <section
      id="work"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060c17 0%, #08111F 100%)' }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div
          ref={titleRef}
          className="mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.9s cubic-bezier(0.23,1,0.32,1)',
          }}
        >
          <div className="section-label mb-4 flex items-center gap-3">
            <div className="gold-divider" style={{ width: '36px' }} />
            Featured Work
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', color: '#f2e9d8', lineHeight: 1.1 }}
            >
              Stories told through{' '}
              <em className="gold-text not-italic">design</em>
            </h2>
            <p
              className="font-body"
              style={{ fontSize: '0.95rem', color: 'rgba(242,233,216,0.45)', maxWidth: '320px', lineHeight: '1.7', fontWeight: 300 }}
            >
              Designed for clients across the globe — each project a unique story
              crafted with intent and precision.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} {...p} side={i === 0 ? 'left' : 'right'} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div
          ref={ctaRef}
          className="mt-20 flex flex-col items-center text-center"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1) 0.25s',
          }}
        >
          <div
            style={{
              width: '1px', height: '55px',
              background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.5))',
              marginBottom: '22px',
            }}
          />

          <p
            className="font-label mb-2"
            style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(242,233,216,0.38)' }}
          >
            Explore More
          </p>

          <a
            href="https://www.instagram.com/mazhars_designs/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold rounded-full px-9 py-4 mt-4 gap-3"
            style={{ fontSize: '0.68rem' }}
          >
            <Instagram size={15} />
            View Full Portfolio on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
