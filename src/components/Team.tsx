import { useEffect, useRef, useState } from 'react';

const MEMBERS = [
  {
    name: 'Abdul Hanan',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 7+ years driving creative excellence and strategic growth for clients worldwide.',
    primary: true,
    initial: 'AH',
  },
  {
    name: 'Faizan Ali',
    role: 'Developer',
    bio: 'Full-stack developer crafting powerful, performant digital experiences from code to deployment.',
    primary: false,
    initial: 'FA',
  },
  {
    name: 'Ahmad Raza',
    role: 'Graphics & UI/UX Designer',
    bio: 'Creative designer specializing in intuitive interfaces and stunning visual identities.',
    primary: false,
    initial: 'AR',
  },
];

function TeamCard({
  name, role, bio, primary, initial, index, visible,
}: {
  name: string; role: string; bio: string;
  primary: boolean; initial: string; index: number; visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * 10,
      y: ((e.clientX - r.left) / r.width - 0.5) * -10,
    });
  };

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        transition: `all 0.8s cubic-bezier(0.23,1,0.32,1) ${index * 0.14}s`,
      }}
    >
      <div
        style={{
          borderRadius: '20px',
          padding: primary ? '40px 32px' : '32px 28px',
          background: primary
            ? 'linear-gradient(155deg, #0f1e33 0%, #081422 60%, #060e1c 100%)'
            : 'linear-gradient(155deg, #0c1928 0%, #07111e 60%, #050d18 100%)',
          border: `1px solid ${hovered
            ? primary ? 'rgba(212,175,55,0.35)' : 'rgba(212,175,55,0.2)'
            : primary ? 'rgba(212,175,55,0.2)' : 'rgba(212,175,55,0.09)'}`,
          borderTop: primary
            ? '2px solid rgba(212,175,55,0.55)'
            : '1px solid rgba(212,175,55,0.12)',
          boxShadow: hovered
            ? '20px 20px 60px rgba(0,0,0,0.75), 0 0 40px rgba(212,175,55,0.12)'
            : '12px 12px 40px rgba(0,0,0,0.6)',
          transform: hovered
            ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(12px) translateY(-8px)`
            : 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)',
          transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
        }}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
      >
        {/* Top glow */}
        <div
          style={{
            position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
            background: hovered
              ? 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)'
              : 'transparent',
            transition: 'all 0.5s ease', zIndex: 2,
          }}
        />

        <div className="flex flex-col items-center text-center" style={{ position: 'relative', zIndex: 1 }}>
          {/* Avatar */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <div
              style={{
                width: primary ? '100px' : '82px',
                height: primary ? '100px' : '82px',
                borderRadius: '50%',
                background: hovered
                  ? 'linear-gradient(135deg, #D4AF37, #FFD700, #D4AF37)'
                  : primary
                    ? 'linear-gradient(135deg, rgba(212,175,55,0.6), rgba(212,175,55,0.25))'
                    : 'linear-gradient(135deg, rgba(212,175,55,0.25), rgba(212,175,55,0.1))',
                padding: '2px',
                boxShadow: hovered
                  ? '0 0 30px rgba(212,175,55,0.5), 0 0 60px rgba(212,175,55,0.18)'
                  : primary ? '0 0 20px rgba(212,175,55,0.3)' : '0 0 10px rgba(212,175,55,0.12)',
                transition: 'all 0.4s ease',
              }}
            >
              <div
                style={{
                  width: '100%', height: '100%', borderRadius: '50%',
                  background: 'linear-gradient(145deg, #0d1c2e, #060e1c)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: '3px',
                }}
              >
                <span
                  className="font-display font-semibold"
                  style={{ fontSize: primary ? '1.4rem' : '1.1rem', color: 'rgba(212,175,55,0.5)', lineHeight: 1 }}
                >
                  {initial}
                </span>
                <span
                  className="font-label"
                  style={{ fontSize: '0.42rem', color: 'rgba(212,175,55,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  Photo
                </span>
              </div>
            </div>
          </div>

          {/* Name */}
          <h3
            className="font-display font-semibold"
            style={{ fontSize: primary ? '1.4rem' : '1.15rem', color: '#f2e9d8', marginBottom: '6px' }}
          >
            {name}
          </h3>

          {/* Role pill */}
          <div
            className="font-label"
            style={{
              display: 'inline-block', padding: '4px 14px', borderRadius: '100px',
              fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#D4AF37', background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.2)', marginBottom: '16px',
            }}
          >
            {role}
          </div>

          {/* Bio */}
          <p
            className="font-body"
            style={{ fontSize: '0.85rem', color: 'rgba(242,233,216,0.45)', lineHeight: '1.65', fontWeight: 300 }}
          >
            {bio}
          </p>

          {primary && (
            <div
              className="font-label mt-6 pt-5"
              style={{ borderTop: '1px solid rgba(212,175,55,0.12)', width: '100%', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.4)' }}
            >
              Mazhar Creative Agency
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const t = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTitleVisible(true); }, { threshold: 0.3 });
    if (titleRef.current) t.observe(titleRef.current);
    const g = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGridVisible(true); }, { threshold: 0.1 });
    if (gridRef.current) g.observe(gridRef.current);
    return () => { t.disconnect(); g.disconnect(); };
  }, []);

  return (
    <section
      id="team"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #08111F 0%, #060c17 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(212,175,55,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-14">

        {/* Header — description directly under heading */}
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
            The Team
          </div>

          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', color: '#f2e9d8', lineHeight: 1.1 }}
          >
            Creative minds behind{' '}
            <em className="gold-text not-italic">the magic</em>
          </h2>

          {/* Description directly under heading */}
          <p
            className="font-body"
            style={{
              maxWidth: '540px',
              color: 'rgba(242,233,216,0.52)',
              fontSize: '1.02rem',
              lineHeight: '1.75',
              fontWeight: 300,
            }}
          >
            A tight-knit team of specialists united by a singular obsession:
            creating work that makes brands stand apart.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEMBERS.map((m, i) => (
            <TeamCard key={m.name} {...m} index={i} visible={gridVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
