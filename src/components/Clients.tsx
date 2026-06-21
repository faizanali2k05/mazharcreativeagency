import { useState } from 'react';
import Reveal from './effects/Reveal';

/**
 * Client logos. Drop each transparent-background logo into
 * public/assets/images/clients/ with the matching filename below.
 * Until a file exists, a clean text wordmark is shown as a fallback.
 */
const CLIENTS = [
  { name: 'Montage International', file: '/assets/images/clients/montage.png' },
  { name: 'Sessa Design & Sourcing', file: '/assets/images/clients/sessa.png' },
  { name: 'Wymara Resort + Villas', file: '/assets/images/clients/wymara.png' },
  { name: 'Beach Enclave', file: '/assets/images/clients/beach-enclave.png' },
  { name: 'South Bank', file: '/assets/images/clients/south-bank.png' },
  { name: 'Ambergris Cay', file: '/assets/images/clients/ambergris-cay.png' },
  { name: 'Aman', file: '/assets/images/clients/aman.png' },
];

function LogoItem({ name, file }: { name: string; file: string }) {
  const [error, setError] = useState(false);

  return (
    <div className="h-12 md:h-14 flex items-center justify-center px-2">
      {error ? (
        <span
          className="font-display text-center"
          style={{ color: 'rgba(246,241,231,0.72)', fontSize: '0.95rem', letterSpacing: '0.01em', lineHeight: 1.15 }}
        >
          {name}
        </span>
      ) : (
        <img
          src={file}
          alt={name}
          title={name}
          onError={() => setError(true)}
          loading="lazy"
          className="max-h-full w-auto max-w-[160px] object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-500"
        />
      )}
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #07070b 0%, #040406 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <Reveal>
            <div className="section-label mb-5 flex items-center justify-center gap-3">
              <div className="gold-divider" style={{ width: '36px' }} />
              Our Clients
              <div className="gold-divider" style={{ width: '36px' }} />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', color: '#F6F1E7', lineHeight: 1.1, fontWeight: 700 }}>
              Trusted by the world's{' '}
              <em className="gold-text not-italic">finest brands</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-body mx-auto" style={{ maxWidth: '560px', marginTop: '16px', color: 'rgba(246,241,231,0.5)', fontSize: '0.98rem', lineHeight: 1.75, fontWeight: 300 }}>
              We're proud to craft visuals for leading hospitality and lifestyle
              names across the globe.
            </p>
          </Reveal>
        </div>

        {/* Logo wall — perfectly aligned, evenly spaced */}
        <Reveal delay={0.1}>
          <div className="border-card" style={{ padding: '44px 32px' }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-x-8 gap-y-12 items-center">
              {CLIENTS.map((c) => (
                <LogoItem key={c.name} {...c} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
