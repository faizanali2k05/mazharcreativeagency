import { useEffect, useRef, useState } from 'react';
import {
  Monitor, Palette, Layers, Share2,
  BookOpen, Megaphone, Smartphone, BarChart2,
} from 'lucide-react';

const SERVICES = [
  { icon: Monitor,    title: 'Website Design & Redesign',              desc: 'Bespoke websites built for performance, beauty, and conversion — from concept to launch.' },
  { icon: Palette,    title: 'Graphic Design',                         desc: 'Striking visuals crafted to communicate your brand story with clarity and lasting impact.' },
  { icon: Layers,     title: 'Brand Identity Optimization',            desc: 'Refine and elevate your brand identity to stand apart in competitive markets.' },
  { icon: Share2,     title: 'Branding & Social Media Templates',      desc: 'Consistent, on-brand templates that make your social presence unmistakable.' },
  { icon: BookOpen,   title: 'Digital Catalog & Promotional Materials', desc: 'Premium catalogs and marketing collateral designed to captivate and convert.' },
  { icon: Megaphone,  title: 'Marketing Materials & Brand Experience', desc: 'End-to-end brand experience materials that tell your story at every touchpoint.' },
  { icon: Smartphone, title: 'App Development & UI/UX Design',         desc: 'Intuitive, beautiful interfaces and powerful apps built for modern users.' },
  { icon: BarChart2,  title: 'Social Media & Ads Management',          desc: 'Data-driven campaigns and content strategies that grow your audience and ROI.' },
];

function ServiceCard({
  icon: Icon, title, desc, index, visible,
}: {
  icon: typeof Monitor; title: string; desc: string; index: number; visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="border-card light-sweep p-7 cursor-default h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(45px)',
        transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${(index % 4) * 90}ms`,
        position: 'relative',
        borderTop: `2px solid ${hovered ? 'rgba(255,215,0,0.6)' : 'rgba(212,175,55,0.3)'}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number */}
      <div
        className="font-display font-bold absolute top-5 right-6"
        style={{ fontSize: '0.7rem', color: 'rgba(212,175,55,0.2)', letterSpacing: '0.05em' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div
        style={{
          width: '52px', height: '52px', borderRadius: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: hovered
            ? 'linear-gradient(145deg, rgba(212,175,55,0.18), rgba(212,175,55,0.06))'
            : 'linear-gradient(145deg, rgba(212,175,55,0.09), rgba(212,175,55,0.03))',
          border: '1px solid rgba(212,175,55,0.18)',
          boxShadow: hovered ? '0 0 20px rgba(212,175,55,0.2)' : 'none',
          marginBottom: '20px',
          transition: 'all 0.4s ease',
        }}
      >
        <Icon
          size={21} strokeWidth={1.5}
          style={{
            color: hovered ? '#FFD700' : '#D4AF37',
            filter: hovered ? 'drop-shadow(0 0 5px rgba(255,215,0,0.5))' : 'none',
            transition: 'all 0.4s ease',
          }}
        />
      </div>

      {/* Title */}
      <h3
        className="font-display font-semibold mb-3"
        style={{ fontSize: '1.1rem', color: hovered ? '#f2e9d8' : '#e8dcc8', lineHeight: 1.3, transition: 'color 0.3s ease' }}
      >
        {title}
      </h3>

      {/* Desc */}
      <p className="font-body" style={{ fontSize: '0.85rem', color: 'rgba(242,233,216,0.48)', lineHeight: '1.65', fontWeight: 300 }}>
        {desc}
      </p>

      {/* Left accent bar */}
      <div
        style={{
          position: 'absolute', left: 0, top: '18%', bottom: '18%',
          width: '2px',
          background: 'linear-gradient(180deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          borderRadius: '2px',
        }}
      />
    </div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const t = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTitleVisible(true); }, { threshold: 0.3 });
    if (titleRef.current) t.observe(titleRef.current);
    const g = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGridVisible(true); }, { threshold: 0.05 });
    if (gridRef.current) g.observe(gridRef.current);
    return () => { t.disconnect(); g.disconnect(); };
  }, []);

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060d1a 0%, #08111F 100%)' }}
    >
      {/* Corner glows */}
      <div
        className="absolute pointer-events-none"
        style={{ top: 0, right: 0, width: '450px', height: '450px', background: 'radial-gradient(ellipse at top right, rgba(212,175,55,0.045) 0%, transparent 65%)' }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: 0, left: 0, width: '350px', height: '350px', background: 'radial-gradient(ellipse at bottom left, rgba(212,175,55,0.03) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header with description directly under heading */}
        <div
          ref={titleRef}
          className="mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.9s cubic-bezier(0.23,1,0.32,1)',
          }}
        >
          <div className="section-label mb-5 flex items-center gap-3">
            <div className="gold-divider" style={{ width: '36px' }} />
            What We Do
          </div>

          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', color: '#f2e9d8', lineHeight: 1.1 }}
          >
            Services built for{' '}
            <em className="gold-text not-italic">excellence</em>
          </h2>

          {/* Description directly under heading */}
          <p
            className="font-body"
            style={{
              maxWidth: '600px',
              color: 'rgba(242,233,216,0.52)',
              fontSize: '1.02rem',
              lineHeight: '1.75',
              fontWeight: 300,
            }}
          >
            Every service we offer is delivered with premium craftsmanship,
            strategic thinking, and an obsessive attention to detail.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} visible={gridVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
