import { useState } from 'react';
import {
  Monitor, Palette, Layers, Share2,
  BookOpen, Megaphone, Smartphone, BarChart2,
} from 'lucide-react';
import Reveal from './effects/Reveal';
import Tilt3D from './effects/Tilt3D';

const SERVICES = [
  { icon: Monitor, title: 'Website Design & Redesign', desc: 'Bespoke websites built for performance, beauty, and conversion — from concept to launch.' },
  { icon: Palette, title: 'Graphic Design', desc: 'Striking visuals crafted to communicate your brand story with clarity and lasting impact.' },
  { icon: Layers, title: 'Brand Identity Optimization', desc: 'Refine and elevate your brand identity to stand apart in competitive markets.' },
  { icon: Share2, title: 'Branding & Social Media Templates', desc: 'Consistent, on-brand templates that make your social presence unmistakable.' },
  { icon: BookOpen, title: 'Digital Catalog & Promotional Materials', desc: 'Premium catalogs and marketing collateral designed to captivate and convert.' },
  { icon: Megaphone, title: 'Marketing Materials & Brand Experience', desc: 'End-to-end brand experience materials that tell your story at every touchpoint.' },
  { icon: Smartphone, title: 'App Development & UI/UX Design', desc: 'Intuitive, beautiful interfaces and powerful apps built for modern users.' },
  { icon: BarChart2, title: 'Social Media & Ads Management', desc: 'Data-driven campaigns and content strategies that grow your audience and ROI.' },
];

function ServiceCard({ icon: Icon, title, desc, index }: { icon: typeof Monitor; title: string; desc: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal variant="up" delay={(index % 4) * 0.08} className="h-full">
      <Tilt3D
        max={10}
        className="border-card light-sweep p-7 cursor-default h-full"
        style={{ borderTop: `1px solid ${hovered ? 'rgba(240,217,140,0.7)' : 'rgba(240,217,140,0.3)'}` }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ position: 'relative' }}
        >
          <div className="font-display font-bold absolute top-0 right-0" style={{ fontSize: '0.7rem', color: 'rgba(212,175,55,0.3)', letterSpacing: '0.05em' }}>
            {String(index + 1).padStart(2, '0')}
          </div>

          <div
            style={{
              width: '52px', height: '52px', borderRadius: '14px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: hovered
                ? 'linear-gradient(145deg, rgba(212,175,55,0.25), rgba(212,175,55,0.08))'
                : 'linear-gradient(145deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04))',
              border: '1px solid rgba(212,175,55,0.22)',
              boxShadow: hovered ? '0 0 24px rgba(212,175,55,0.3)' : 'none',
              marginBottom: '20px',
              transition: 'all 0.4s ease',
            }}
          >
            <Icon size={21} strokeWidth={1.5} style={{ color: hovered ? '#F0D98C' : '#D4AF37', transition: 'all 0.4s ease' }} />
          </div>

          <h3 className="font-display font-semibold mb-3" style={{ fontSize: '1.18rem', color: hovered ? '#F0D98C' : '#F6F1E7', lineHeight: 1.3, transition: 'color 0.3s ease' }}>
            {title}
          </h3>

          <p className="font-body" style={{ fontSize: '0.86rem', color: 'rgba(246,241,231,0.5)', lineHeight: 1.65, fontWeight: 300 }}>
            {desc}
          </p>
        </div>
      </Tilt3D>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #07070b 0%, #040406 100%)' }}>
      <div className="absolute pointer-events-none" style={{ top: 0, right: 0, width: '450px', height: '450px', background: 'radial-gradient(ellipse at top right, rgba(212,175,55,0.07) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="mb-16">
          <Reveal>
            <div className="section-label mb-5 flex items-center gap-3">
              <div className="gold-divider" style={{ width: '36px' }} />
              What We Do
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)', color: '#F6F1E7', lineHeight: 1.08, fontWeight: 600 }}>
              Services built for{' '}
              <em className="gold-text not-italic">excellence</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-body" style={{ maxWidth: '600px', color: 'rgba(246,241,231,0.55)', fontSize: '1.04rem', lineHeight: 1.8, fontWeight: 300 }}>
              Every service we offer is delivered with premium craftsmanship,
              strategic thinking, and an obsessive attention to detail.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
