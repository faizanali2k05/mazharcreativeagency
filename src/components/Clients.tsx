import Reveal from './effects/Reveal';
import { useI18n } from '../i18n';
import { LogoCloud, type Logo } from './ui/logo-cloud';

/** Client logos live in public/assets/images/clients/. */
// Aman, Wymara and South Bank read smaller at a uniform height, so they get a
// slightly taller size class to balance the row visually.
const LOGOS: Logo[] = [
  { src: '/assets/images/clients/montage.png', alt: 'Montage International' },
  { src: '/assets/images/clients/sessa.png', alt: 'Sessa Design & Sourcing' },
  { src: '/assets/images/clients/wymara.webp', alt: 'Wymara Resort + Villas', sizeClass: 'h-12 md:h-14' },
  { src: '/assets/images/clients/beach-enclave.png', alt: 'Beach Enclave' },
  { src: '/assets/images/clients/south-bank.png', alt: 'South Bank', sizeClass: 'h-12 md:h-14' },
  { src: '/assets/images/clients/ambergris-cay.png', alt: 'Ambergris Cay' },
  { src: '/assets/images/clients/aman.png', alt: 'Aman', sizeClass: 'h-11 md:h-[3.1rem]' },
];

export default function Clients() {
  const { t } = useI18n();

  return (
    <section
      id="clients"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf6ee 0%, #ffffff 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-14 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <Reveal>
            <div className="section-label mb-5 flex items-center justify-center gap-3">
              <div className="gold-divider" style={{ width: '36px' }} />
              {t.clients.label}
              <div className="gold-divider" style={{ width: '36px' }} />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.6rem)', color: '#1c1a16', lineHeight: 1.1, fontWeight: 700 }}>
              {t.clients.headingLead}
              <em className="gold-text gold-emboss not-italic">{t.clients.headingAccent}</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-body mx-auto" style={{ maxWidth: '560px', marginTop: '16px', color: 'rgba(28,26,22,0.55)', fontSize: '0.98rem', lineHeight: 1.75, fontWeight: 300 }}>
              {t.clients.intro}
            </p>
          </Reveal>
        </div>

        {/* Infinite logo slider */}
        <Reveal delay={0.1}>
          <LogoCloud logos={LOGOS} />
        </Reveal>
      </div>
    </section>
  );
}
