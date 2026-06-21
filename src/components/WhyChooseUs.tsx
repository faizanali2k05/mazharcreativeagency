import { useEffect, useRef, useState } from 'react';
import { Award, Tag, Globe2, Zap, Gem, Heart } from 'lucide-react';

const REASONS = [
  { icon: Award,  title: 'Creative Excellence', desc: 'Every project is a masterpiece. We push creative boundaries to deliver work that sets new industry standards.' },
  { icon: Tag,    title: 'Affordable Pricing',  desc: 'World-class design quality made accessible. Premium results without compromise on your budget.' },
  { icon: Globe2, title: 'Global Reach',         desc: 'We work with clients across continents, bringing diverse perspectives and international design sensibility.' },
  { icon: Zap,    title: 'Fast Delivery',         desc: 'Agile workflows and a dedicated team mean your projects are delivered on time, every time.' },
  { icon: Gem,    title: 'Premium Quality',       desc: 'Meticulous attention to detail at every stage ensures the final output consistently exceeds expectations.' },
  { icon: Heart,  title: 'Client Satisfaction',   desc: 'Your success is our success. We are committed to long-term partnerships built on trust and results.' },
];

function ReasonCard({
  icon: Icon,
  title,
  desc,
  index,
  visible,
}: {
  icon: typeof Award;
  title: string;
  desc: string;
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(45px)',
        transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${(index % 3) * 110}ms`,
      }}
    >
      <div
        style={{
          borderRadius: '18px',
          padding: '32px 28px',
          height: '100%',
          position: 'relative',
          cursor: 'default',
          background: hovered
            ? 'linear-gradient(155deg, #0f1f32 0%, #091625 60%, #060e1c 100%)'
            : 'linear-gradient(155deg, #0c1a2c 0%, #07111d 60%, #050b18 100%)',
          border: `1px solid ${hovered ? 'rgba(212,175,55,0.25)' : 'rgba(212,175,55,0.08)'}`,
          borderTop: `2px solid ${hovered ? 'rgba(255,215,0,0.55)' : 'rgba(212,175,55,0.25)'}`,
          boxShadow: hovered
            ? '14px 14px 45px rgba(0,0,0,0.7), 0 0 35px rgba(212,175,55,0.1)'
            : '10px 10px 32px rgba(0,0,0,0.58)',
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Large background number */}
        <div
          className="font-display font-bold"
          style={{
            position: 'absolute',
            top: '12px',
            right: '18px',
            fontSize: '4rem',
            lineHeight: 1,
            color: hovered ? 'rgba(212,175,55,0.07)' : 'rgba(212,175,55,0.04)',
            transition: 'color 0.4s ease',
            userSelect: 'none',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Icon */}
        <div
          style={{
            width: '50px', height: '50px',
            borderRadius: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: hovered
              ? 'linear-gradient(145deg, rgba(212,175,55,0.18), rgba(212,175,55,0.06))'
              : 'linear-gradient(145deg, rgba(212,175,55,0.08), rgba(212,175,55,0.03))',
            border: '1px solid rgba(212,175,55,0.16)',
            boxShadow: hovered ? '0 0 18px rgba(212,175,55,0.2)' : 'none',
            marginBottom: '22px',
            transition: 'all 0.4s ease',
          }}
        >
          <Icon
            size={20}
            strokeWidth={1.5}
            style={{
              color: hovered ? '#FFD700' : '#D4AF37',
              filter: hovered ? 'drop-shadow(0 0 4px rgba(255,215,0,0.5))' : 'none',
              transition: 'all 0.4s ease',
            }}
          />
        </div>

        {/* Title */}
        <h3
          className="font-display font-semibold mb-3"
          style={{ fontSize: '1.15rem', color: hovered ? '#FFD700' : '#f2e9d8', lineHeight: 1.25, transition: 'color 0.35s ease' }}
        >
          {title}
        </h3>

        {/* Desc */}
        <p
          className="font-body"
          style={{ fontSize: '0.85rem', color: 'rgba(242,233,216,0.48)', lineHeight: '1.65', fontWeight: 300 }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
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
      id="why"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060d1a 0%, #08111F 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div
          ref={titleRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.9s cubic-bezier(0.23,1,0.32,1)',
          }}
        >
          <div>
            <div className="section-label mb-4 flex items-center gap-3">
              <div className="gold-divider" style={{ width: '36px' }} />
              Why Choose Us
            </div>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', color: '#f2e9d8', lineHeight: 1.1 }}
            >
              The difference that defines{' '}
              <em className="gold-text not-italic">us</em>
            </h2>
          </div>

          <p
            className="font-body"
            style={{ maxWidth: '340px', color: 'rgba(242,233,216,0.45)', fontSize: '0.95rem', lineHeight: '1.75', fontWeight: 300 }}
          >
            We combine creative innovation, strategic thinking, and relentless
            dedication to deliver results that truly matter.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {REASONS.map((r, i) => (
            <ReasonCard key={r.title} {...r} index={i} visible={gridVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
