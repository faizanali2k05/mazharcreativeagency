import { useState } from 'react';
import Reveal from './effects/Reveal';
import Tilt3D from './effects/Tilt3D';
import { useI18n } from '../i18n';

const MEMBER_META = [
  { name: 'Abdul Hanan', primary: true, initial: 'AH', photo: '' },
  { name: 'Faizan Ali', primary: false, initial: 'FA', photo: '/assets/images/team/faizan.jpg' },
  { name: 'Ahmad Raza', primary: false, initial: 'AR', photo: '/assets/images/team/ahmad.jpg' },
];

function Avatar({ photo, initial, primary, hovered, photoLabel }: {
  photo: string; initial: string; primary: boolean; hovered: boolean; photoLabel: string;
}) {
  const [imgError, setImgError] = useState(false);
  const size = primary ? 100 : 88;
  const showPhoto = photo && !imgError;

  return (
    <div style={{ position: 'relative', marginBottom: '20px' }}>
      <div style={{
        width: `${size}px`, height: `${size}px`, borderRadius: '50%',
        background: hovered ? 'linear-gradient(135deg, #D4AF37, #B8901F, #D4AF37)' : primary ? 'linear-gradient(135deg, rgba(212,175,55,0.7), rgba(212,175,55,0.3))' : 'linear-gradient(135deg, rgba(212,175,55,0.45), rgba(212,175,55,0.18))',
        padding: '2px',
        boxShadow: hovered ? '0 0 34px rgba(212,175,55,0.55)' : primary ? '0 0 20px rgba(212,175,55,0.3)' : '0 0 12px rgba(212,175,55,0.16)',
        transition: 'all 0.4s ease',
      }}>
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: 'linear-gradient(145deg, #24201a, #16130f)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
          {showPhoto ? (
            <img
              src={photo}
              alt=""
              onError={() => setImgError(true)}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          ) : (
            <>
              <span className="font-display font-semibold" style={{ fontSize: primary ? '1.5rem' : '1.2rem', color: hovered ? '#B8901F' : 'rgba(212,175,55,0.7)', lineHeight: 1, transition: 'color 0.3s ease' }}>{initial}</span>
              <span className="font-label" style={{ fontSize: '0.42rem', color: 'rgba(212,175,55,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{photoLabel}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function TeamCard({ name, role, bio, primary, initial, photo, index, photoLabel, brandLabel }: {
  name: string; role: string; bio: string; primary: boolean; initial: string; photo: string; index: number; photoLabel: string; brandLabel: string;
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
            background: 'radial-gradient(120% 80% at 50% -10%, rgba(212,175,55,0.08) 0%, transparent 55%), linear-gradient(160deg, #ffffff 0%, #fdfbf6 55%, #f7f1e6 100%)',
            border: `1px solid ${hovered ? 'rgba(212,175,55,0.4)' : 'rgba(212,175,55,0.12)'}`,
            borderTop: primary ? '1px solid rgba(240,217,140,0.55)' : '1px solid rgba(212,175,55,0.18)',
            boxShadow: hovered ? '0 40px 90px -28px rgba(60,45,15,0.30), 0 0 50px -10px rgba(212,175,55,0.22)' : '0 24px 60px -24px rgba(60,45,15,0.18)',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="flex flex-col items-center text-center" style={{ position: 'relative', zIndex: 1, transform: 'translateZ(30px)' }}>
            <Avatar photo={photo} initial={initial} primary={primary} hovered={hovered} photoLabel={photoLabel} />

            <h3 className="font-display font-semibold" style={{ fontSize: primary ? '1.5rem' : '1.2rem', color: '#1c1a16', marginBottom: '8px' }}>{name}</h3>

            <div className="font-label" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '100px', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B6914', background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)', marginBottom: '16px' }}>{role}</div>

            <p className="font-body" style={{ fontSize: '0.86rem', color: 'rgba(28,26,22,0.5)', lineHeight: 1.65, fontWeight: 300 }}>{bio}</p>

            {primary && (
              <div className="font-label mt-6 pt-5" style={{ borderTop: '1px solid rgba(212,175,55,0.18)', width: '100%', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(184,144,31,0.7)' }}>
                {brandLabel}
              </div>
            )}
          </div>
        </div>
      </Tilt3D>
    </Reveal>
  );
}

export default function Team() {
  const { t } = useI18n();
  const members = MEMBER_META.map((m, i) => ({ ...m, ...t.team.members[i] }));
  return (
    <section id="team" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #faf6ee 0%, #ffffff 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(212,175,55,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="mb-16">
          <Reveal>
            <div className="section-label mb-5 flex items-center gap-3">
              <div className="gold-divider" style={{ width: '36px' }} />
              {t.team.label}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)', color: '#1c1a16', lineHeight: 1.08, fontWeight: 600 }}>
              {t.team.headingLead}
              <em className="gold-text not-italic">{t.team.headingAccent}</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-body" style={{ maxWidth: '540px', color: 'rgba(28,26,22,0.55)', fontSize: '1.04rem', lineHeight: 1.8, fontWeight: 300 }}>
              {t.team.intro}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <TeamCard key={m.name} {...m} index={i} photoLabel={t.team.photo} brandLabel="Mazhar Creative Agency" />
          ))}
        </div>
      </div>
    </section>
  );
}
