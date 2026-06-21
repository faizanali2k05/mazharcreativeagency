import { useState } from 'react';
import { Award, Tag, Globe2, Zap, Gem, Heart } from 'lucide-react';
import Reveal from './effects/Reveal';
import Tilt3D from './effects/Tilt3D';

const REASONS = [
  { icon: Award, title: 'Creative Excellence', desc: 'Every project is a masterpiece. We push creative boundaries to deliver work that sets new industry standards.' },
  { icon: Tag, title: 'Affordable Pricing', desc: 'World-class design quality made accessible. Premium results without compromise on your budget.' },
  { icon: Globe2, title: 'Global Reach', desc: 'We work with clients across continents, bringing diverse perspectives and international design sensibility.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Agile workflows and a dedicated team mean your projects are delivered on time, every time.' },
  { icon: Gem, title: 'Premium Quality', desc: 'Meticulous attention to detail at every stage ensures the final output consistently exceeds expectations.' },
  { icon: Heart, title: 'Client Satisfaction', desc: 'Your success is our success. We are committed to long-term partnerships built on trust and results.' },
];

function ReasonCard({ icon: Icon, title, desc, index }: { icon: typeof Award; title: string; desc: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal variant="up" delay={(index % 3) * 0.1} className="h-full">
      <Tilt3D max={10} className="h-full">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            borderRadius: '18px', padding: '32px 28px', height: '100%', position: 'relative', cursor: 'default', overflow: 'hidden',
            background: 'radial-gradient(120% 80% at 50% -10%, rgba(212,175,55,0.07) 0%, transparent 55%), linear-gradient(160deg, #12121b 0%, #0b0b12 55%, #08080d 100%)',
            border: `1px solid ${hovered ? 'rgba(212,175,55,0.35)' : 'rgba(212,175,55,0.1)'}`,
            borderTop: `1px solid ${hovered ? 'rgba(240,217,140,0.65)' : 'rgba(240,217,140,0.28)'}`,
            boxShadow: hovered ? '0 36px 80px -28px rgba(0,0,0,0.95), 0 0 45px -12px rgba(212,175,55,0.2)' : '0 24px 60px -24px rgba(0,0,0,0.9)',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          <div className="font-display font-bold" style={{ position: 'absolute', top: '12px', right: '20px', fontSize: '4.5rem', lineHeight: 1, color: hovered ? 'rgba(212,175,55,0.12)' : 'rgba(212,175,55,0.06)', transition: 'color 0.4s ease', userSelect: 'none' }}>
            {String(index + 1).padStart(2, '0')}
          </div>

          <div style={{ width: '50px', height: '50px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: hovered ? 'linear-gradient(145deg, rgba(212,175,55,0.25), rgba(212,175,55,0.08))' : 'linear-gradient(145deg, rgba(212,175,55,0.1), rgba(212,175,55,0.04))', border: '1px solid rgba(212,175,55,0.2)', boxShadow: hovered ? '0 0 22px rgba(212,175,55,0.28)' : 'none', marginBottom: '22px', transition: 'all 0.4s ease', position: 'relative', zIndex: 1 }}>
            <Icon size={20} strokeWidth={1.5} style={{ color: hovered ? '#F0D98C' : '#D4AF37', transition: 'all 0.4s ease' }} />
          </div>

          <h3 className="font-display font-semibold mb-3" style={{ fontSize: '1.2rem', color: hovered ? '#F0D98C' : '#F6F1E7', lineHeight: 1.25, transition: 'color 0.35s ease', position: 'relative', zIndex: 1 }}>{title}</h3>

          <p className="font-body" style={{ fontSize: '0.86rem', color: 'rgba(246,241,231,0.5)', lineHeight: 1.65, fontWeight: 300, position: 'relative', zIndex: 1 }}>{desc}</p>
        </div>
      </Tilt3D>
    </Reveal>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #040406 0%, #07070b 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <div className="section-label mb-4 flex items-center gap-3">
                <div className="gold-divider" style={{ width: '36px' }} />
                Why Choose Us
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)', color: '#F6F1E7', lineHeight: 1.08, fontWeight: 600 }}>
                The difference that defines{' '}
                <em className="gold-text not-italic">us</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="font-body" style={{ maxWidth: '340px', color: 'rgba(246,241,231,0.5)', fontSize: '0.96rem', lineHeight: 1.75, fontWeight: 300 }}>
              We combine creative innovation, strategic thinking, and relentless
              dedication to deliver results that truly matter.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => (
            <ReasonCard key={r.title} {...r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
