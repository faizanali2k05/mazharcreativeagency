import { useState } from 'react';
import { Wallet, Layers, Rocket, ArrowRight } from 'lucide-react';
import Reveal from './effects/Reveal';
import Tilt3D from './effects/Tilt3D';
import Magnetic from './effects/Magnetic';
import { useI18n } from '../i18n';

const STEP_ICONS = [Wallet, Layers, Rocket];

function StepCard({ icon: Icon, title, desc, index, stepLabel }: {
  icon: typeof Wallet; title: string; desc: string; index: number; stepLabel: string;
}) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <Reveal variant="3d" delay={index * 0.12} className="h-full">
      <div className="flex flex-col items-center h-full">
        {/* Numbered node — sits on the connecting line */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '-32px',
            background: 'linear-gradient(180deg, #ffffff 0%, #f6efe1 100%)',
            border: `1px solid ${hovered ? 'rgba(184,144,31,0.65)' : 'rgba(184,144,31,0.3)'}`,
            boxShadow: hovered
              ? '0 0 30px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.95)'
              : '0 10px 24px -12px rgba(60,45,15,0.3), inset 0 1px 0 rgba(255,255,255,0.95)',
            transition: 'all 0.4s ease',
          }}
        >
          <span
            className="font-display font-bold gold-text"
            style={{ fontSize: '1.35rem', lineHeight: 1 }}
          >
            {num}
          </span>
        </div>

        <Tilt3D max={10} className="h-full w-full">
          <div
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            style={{
              borderRadius: '20px',
              padding: '54px 30px 34px',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
              background:
                'radial-gradient(120% 80% at 50% -10%, rgba(212,175,55,0.08) 0%, transparent 55%), linear-gradient(160deg, #ffffff 0%, #fdfbf6 55%, #f7f1e6 100%)',
              border: `1px solid ${hovered ? 'rgba(212,175,55,0.4)' : 'rgba(212,175,55,0.12)'}`,
              borderTop: `1px solid ${hovered ? 'rgba(240,217,140,0.65)' : 'rgba(240,217,140,0.28)'}`,
              boxShadow: hovered
                ? '0 40px 90px -28px rgba(60,45,15,0.30), 0 0 50px -12px rgba(212,175,55,0.22)'
                : '0 24px 60px -24px rgba(60,45,15,0.18)',
              transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
            }}
          >
            {/* Ghost number watermark */}
            <div
              className="font-display font-bold"
              style={{
                position: 'absolute', bottom: '-18px', right: '8px', fontSize: '6rem', lineHeight: 1,
                color: hovered ? 'rgba(212,175,55,0.1)' : 'rgba(212,175,55,0.05)',
                transition: 'color 0.4s ease', userSelect: 'none', pointerEvents: 'none',
              }}
            >
              {num}
            </div>

            <div className="flex flex-col items-center" style={{ position: 'relative', zIndex: 1, transform: 'translateZ(28px)' }}>
              <div
                style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
                  background: hovered
                    ? 'linear-gradient(145deg, rgba(212,175,55,0.28), rgba(212,175,55,0.1))'
                    : 'linear-gradient(145deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04))',
                  border: '1px solid rgba(212,175,55,0.22)',
                  boxShadow: hovered ? '0 0 24px rgba(212,175,55,0.3)' : 'none',
                  transition: 'all 0.4s ease',
                }}
              >
                <Icon size={24} strokeWidth={1.5} style={{ color: hovered ? '#B8901F' : '#D4AF37', transition: 'color 0.4s ease' }} />
              </div>

              <div
                className="font-label"
                style={{ fontSize: '0.58rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(184,144,31,0.75)', marginBottom: '10px' }}
              >
                {stepLabel} {num}
              </div>

              <h3 className="font-display font-semibold mb-3" style={{ fontSize: '1.22rem', color: hovered ? '#B8901F' : '#1c1a16', lineHeight: 1.25, transition: 'color 0.35s ease' }}>
                {title}
              </h3>

              <p className="font-body" style={{ fontSize: '0.88rem', color: 'rgba(28,26,22,0.5)', lineHeight: 1.7, fontWeight: 300, maxWidth: '300px' }}>
                {desc}
              </p>
            </div>
          </div>
        </Tilt3D>
      </div>
    </Reveal>
  );
}

export default function Process() {
  const { t } = useI18n();
  const steps = t.process.steps.map((s, i) => ({ ...s, icon: STEP_ICONS[i] }));

  return (
    <section id="process" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #faf6ee 0%, #ffffff 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 45% at 50% 35%, rgba(212,175,55,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal>
            <div className="section-label mb-4 flex items-center justify-center gap-3">
              <div className="gold-divider" style={{ width: '36px' }} />
              {t.process.label}
              <div className="gold-divider" style={{ width: '36px' }} />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)', color: '#1c1a16', lineHeight: 1.08, fontWeight: 600 }}>
              {t.process.headingLead}
              <em className="gold-text not-italic">{t.process.headingAccent}</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-body mx-auto" style={{ maxWidth: '540px', color: 'rgba(28,26,22,0.55)', fontSize: '1.04rem', lineHeight: 1.8, fontWeight: 300 }}>
              {t.process.intro}
            </p>
          </Reveal>
        </div>

        {/* Steps with connecting timeline */}
        <div className="relative">
          {/* Horizontal connector line (desktop) — sits behind the numbered nodes */}
          <div
            className="hidden md:block absolute pointer-events-none"
            style={{
              top: '31px', left: '16.6%', right: '16.6%', height: '2px', zIndex: 0,
              background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.55) 12%, rgba(184,144,31,0.85) 50%, rgba(201,162,39,0.55) 88%, transparent)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-6 relative z-10">
            {steps.map((s, i) => (
              <StepCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} index={i} stepLabel={t.process.stepLabel} />
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <Reveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-20">
            <span className="font-display" style={{ fontSize: '1.15rem', color: '#1c1a16', fontWeight: 500 }}>
              {t.process.ctaText}
            </span>
            <Magnetic strength={0.4}>
              <a href="#contact" className="btn-gold rounded-full inline-flex items-center gap-2" style={{ padding: '13px 28px', fontSize: '0.66rem' }}>
                {t.process.ctaButton}
                <ArrowRight size={15} strokeWidth={2} />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
