import { useState } from 'react';
import Reveal from './effects/Reveal';
import Tilt3D from './effects/Tilt3D';

const MEMBERS = [
  { name: 'Abdul Hanan', role: 'Founder & CEO', bio: 'Visionary leader with 7+ years driving creative excellence and strategic growth for clients worldwide.', primary: true, initial: 'AH' },
  { name: 'Faizan Ali', role: 'Developer', bio: 'Full-stack developer crafting powerful, performant digital experiences from code to deployment.', primary: false, initial: 'FA' },
  { name: 'Ahmad Raza', role: 'Graphics & UI/UX Designer', bio: 'Creative designer specializing in intuitive interfaces and stunning visual identities.', primary: false, initial: 'AR' },
];

function TeamCard({ name, role, bio, primary, initial, index }: {
  name: string; role: string; bio: string; primary: boolean; initial: string; index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.12} className="h-full">
      <Tilt3D max={12} className="h-full">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            borderRadius: '20px',
            padding: primary ? '40px 32px' : '32px 28px',
            height: '100%',
            background: 'radial-gradient(120% 80% at 50% -10%, rgba(212,175,55,0.08) 0%, transparent 55%), linear-gradient(160deg, #12121b 0%, #0b0b12 55%, #08080d 100%)',
            border: `1px solid ${hovered ? 'rgba(212,175,55,0.4)' : 'rgba(212,175,55,0.12)'}`,
            borderTop: primary ? '1px solid rgba(240,217,140,0.55)' : '1px solid rgba(212,175,55,0.18)',
            boxShadow: hovered ? '0 40px 90px -28px rgba(0,0,0,0.95), 0 0 50px -10px rgba(212,175,55,0.22)' : '0 24px 60px -24px rgba(0,0,0,0.9)',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="flex flex-col items-center text-center" style={{ position: 'relative', zIndex: 1, transform: 'translateZ(30px)' }}>
            {/* Avatar */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <div style={{
                width: primary ? '100px' : '82px', height: primary ? '100px' : '82px', borderRadius: '50%',
                background: hovered ? 'linear-gradient(135deg, #D4AF37, #F0D98C, #D4AF37)' : primary ? 'linear-gradient(135deg, rgba(212,175,55,0.7), rgba(212,175,55,0.3))' : 'linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.12))',
                padding: '2px',
                boxShadow: hovered ? '0 0 34px rgba(212,175,55,0.55)' : primary ? '0 0 20px rgba(212,175,55,0.3)' : '0 0 10px rgba(212,175,55,0.12)',
                transition: 'all 0.4s ease',
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'linear-gradient(145deg, #14141d, #0a0a10)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                  <span className="font-display font-semibold" style={{ fontSize: primary ? '1.5rem' : '1.2rem', color: hovered ? '#F0D98C' : 'rgba(212,175,55,0.7)', lineHeight: 1, transition: 'color 0.3s ease' }}>{initial}</span>
                  <span className="font-label" style={{ fontSize: '0.42rem', color: 'rgba(212,175,55,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Photo</span>
                </div>
              </div>
            </div>

            <h3 className="font-display font-semibold" style={{ fontSize: primary ? '1.5rem' : '1.2rem', color: '#F6F1E7', marginBottom: '8px' }}>{name}</h3>

            <div className="font-label" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '100px', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4AF37', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', marginBottom: '16px' }}>{role}</div>

            <p className="font-body" style={{ fontSize: '0.86rem', color: 'rgba(246,241,231,0.5)', lineHeight: 1.65, fontWeight: 300 }}>{bio}</p>

            {primary && (
              <div className="font-label mt-6 pt-5" style={{ borderTop: '1px solid rgba(212,175,55,0.15)', width: '100%', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.5)' }}>
                Mazhar Creative Agency
              </div>
            )}
          </div>
        </div>
      </Tilt3D>
    </Reveal>
  );
}

export default function Team() {
  return (
    <section id="team" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #07070b 0%, #040406 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(212,175,55,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="mb-16">
          <Reveal>
            <div className="section-label mb-5 flex items-center gap-3">
              <div className="gold-divider" style={{ width: '36px' }} />
              The Team
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)', color: '#F6F1E7', lineHeight: 1.08, fontWeight: 600 }}>
              Creative minds behind{' '}
              <em className="gold-text not-italic">the magic</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-body" style={{ maxWidth: '540px', color: 'rgba(246,241,231,0.55)', fontSize: '1.04rem', lineHeight: 1.8, fontWeight: 300 }}>
              A tight-knit team of specialists united by a singular obsession:
              creating work that makes brands stand apart.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEMBERS.map((m, i) => (
            <TeamCard key={m.name} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
