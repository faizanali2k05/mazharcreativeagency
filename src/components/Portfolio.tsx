import { useState } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import Reveal from './effects/Reveal';
import Tilt3D from './effects/Tilt3D';
import Magnetic from './effects/Magnetic';

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

function ProjectCard({ index, title, category, desc, image, url, side }: {
  index: string; title: string; category: string; desc: string; image: string; url: string; side: 'left' | 'right';
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal variant={side}>
      <Tilt3D max={7} glare={false} className="project-card">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            background: 'linear-gradient(165deg, #12121b, #08080d)',
            border: `1px solid ${hovered ? 'rgba(212,175,55,0.4)' : 'rgba(212,175,55,0.12)'}`,
            boxShadow: hovered
              ? '0 40px 90px -28px rgba(0,0,0,0.95), 0 0 60px -10px rgba(212,175,55,0.22)'
              : '0 24px 60px -24px rgba(0,0,0,0.9)',
            transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: '1px', background: hovered ? 'linear-gradient(90deg, transparent, rgba(240,217,140,0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)', zIndex: 3, transition: 'all 0.5s ease' }} />

          {/* Browser chrome */}
          <div className="browser-chrome" style={{ padding: '11px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
              {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
                <div key={i} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c, opacity: 0.85 }} />
              ))}
            </div>
            <div style={{ flex: 1, height: '24px', borderRadius: '12px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', gap: '7px', padding: '0 10px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(39,201,63,0.8)', flexShrink: 0 }} />
              <span className="font-label" style={{ fontSize: '0.58rem', color: 'rgba(246,241,231,0.4)', letterSpacing: '0.03em', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{url}</span>
            </div>
            <ExternalLink size={12} strokeWidth={1.5} style={{ color: 'rgba(212,175,55,0.4)', flexShrink: 0 }} />
          </div>

          {/* Screenshot */}
          <div className="project-img-wrap">
            <img src={image} alt={`${title} — ${category}`} style={{ width: '100%', height: 'auto', display: 'block', transform: hovered ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)', transformOrigin: 'top center' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '90px', background: 'linear-gradient(transparent, rgba(8,8,13,0.85))', pointerEvents: 'none' }} />
          </div>

          {/* Info bar */}
          <div style={{ padding: '22px 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', background: 'linear-gradient(135deg, #0e0e16, #08080d)', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
            <div style={{ flex: 1 }}>
              <div className="font-label" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: 'rgba(212,175,55,0.65)', marginBottom: '6px' }}>{index} — {category}</div>
              <h3 className="font-display font-semibold" style={{ fontSize: '1.5rem', color: '#F6F1E7', lineHeight: 1.2, marginBottom: '8px' }}>{title}</h3>
              <p className="font-body" style={{ fontSize: '0.84rem', color: 'rgba(246,241,231,0.45)', lineHeight: 1.55, fontWeight: 300 }}>{desc}</p>
            </div>
            <div style={{ flexShrink: 0, width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: hovered ? 'linear-gradient(135deg, #D4AF37, #F0D98C)' : 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)', boxShadow: hovered ? '0 0 28px rgba(212,175,55,0.5)' : 'none', transition: 'all 0.4s ease', marginTop: '4px' }}>
              <ExternalLink size={15} strokeWidth={2} style={{ color: hovered ? '#1a1306' : '#D4AF37', transition: 'color 0.4s ease' }} />
            </div>
          </div>
        </div>
      </Tilt3D>
    </Reveal>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #040406 0%, #07070b 100%)' }}>
      <div className="aurora" style={{ opacity: 0.35 }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="mb-16">
          <Reveal>
            <div className="section-label mb-4 flex items-center gap-3">
              <div className="gold-divider" style={{ width: '36px' }} />
              Featured Work
            </div>
          </Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <Reveal delay={0.08}>
              <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)', color: '#F6F1E7', lineHeight: 1.08, fontWeight: 600 }}>
                Stories told through{' '}
                <em className="gold-text not-italic">design</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="font-body" style={{ fontSize: '0.96rem', color: 'rgba(246,241,231,0.5)', maxWidth: '320px', lineHeight: 1.7, fontWeight: 300 }}>
                Designed for clients across the globe — each project a unique story
                crafted with intent and precision.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} {...p} side={i === 0 ? 'left' : 'right'} />
          ))}
        </div>

        {/* Instagram CTA */}
        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-center text-center">
            <div style={{ width: '1px', height: '55px', background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.6))', marginBottom: '22px' }} />
            <p className="font-label mb-2" style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(246,241,231,0.42)' }}>Explore More</p>
            <Magnetic strength={0.4}>
              <a href="https://www.instagram.com/mazhars_designs/" target="_blank" rel="noopener noreferrer" className="btn-gold rounded-full px-9 py-4 mt-4 gap-3" style={{ fontSize: '0.68rem' }}>
                <Instagram size={15} />
                View Full Portfolio on Instagram
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
