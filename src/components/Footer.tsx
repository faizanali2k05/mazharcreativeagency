import { Instagram, MessageCircle } from 'lucide-react';

const QUICK = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LIST = [
  'Website Design',
  'Graphic Design',
  'Brand Identity',
  'Social Media Templates',
  'App Development',
  'Ads Management',
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #050b14 0%, #020810 100%)',
        borderTop: '1px solid rgba(212,175,55,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top gold line */}
      <div className="gold-divider" style={{ opacity: 0.5 }} />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '700px', height: '300px',
          background: 'radial-gradient(ellipse at bottom, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-18" style={{ paddingTop: '72px', paddingBottom: '40px' }}>

        {/* Top: brand + links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/images/download.png"
                alt="Mazhar Creative Agency"
                className="logo-blend"
                style={{ width: '44px', height: '44px', objectFit: 'contain' }}
              />
              <div>
                <div
                  className="font-display font-semibold"
                  style={{ fontSize: '1.05rem', color: '#D4AF37', letterSpacing: '0.04em' }}
                >
                  Mazhar
                </div>
                <div
                  className="font-label"
                  style={{ fontSize: '0.52rem', color: 'rgba(212,175,55,0.45)', letterSpacing: '0.22em', textTransform: 'uppercase' }}
                >
                  Creative Agency
                </div>
              </div>
            </div>

            <p
              className="font-body"
              style={{ fontSize: '0.9rem', color: 'rgba(242,233,216,0.38)', lineHeight: '1.7', maxWidth: '280px', fontWeight: 300, marginBottom: '28px' }}
            >
              Crafting visuals that make brands unforgettable. Premium creative excellence
              delivered to clients worldwide.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                {
                  href: 'https://www.instagram.com/mazhars_designs/',
                  icon: Instagram,
                  color: '#D4AF37',
                  bg: 'rgba(212,175,55,0.08)',
                  border: 'rgba(212,175,55,0.2)',
                  label: 'Instagram',
                },
                {
                  href: 'https://wa.me/923048603377',
                  icon: MessageCircle,
                  color: '#25D366',
                  bg: 'rgba(37,211,102,0.08)',
                  border: 'rgba(37,211,102,0.2)',
                  label: 'WhatsApp',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 18px ${s.color}44`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = '';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}
                >
                  <s.icon size={15} style={{ color: s.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <div
              className="font-label font-semibold mb-6"
              style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D4AF37' }}
            >
              Navigation
            </div>
            <div className="flex flex-col gap-3">
              {QUICK.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-body"
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(242,233,216,0.4)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(242,233,216,0.4)'; }}
                >
                  <span style={{ width: '14px', height: '1px', background: 'rgba(212,175,55,0.35)', display: 'inline-block', flexShrink: 0 }} />
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <div
              className="font-label font-semibold mb-6"
              style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D4AF37' }}
            >
              Services
            </div>
            <div className="flex flex-col gap-3">
              {SERVICE_LIST.map((s) => (
                <a
                  key={s}
                  href="#services"
                  className="font-body"
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(242,233,216,0.38)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(242,233,216,0.38)'; }}
                >
                  <span style={{ width: '14px', height: '1px', background: 'rgba(212,175,55,0.3)', display: 'inline-block', flexShrink: 0 }} />
                  {s}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="gold-divider mb-7" style={{ opacity: 0.25 }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="font-label"
            style={{ fontSize: '0.65rem', color: 'rgba(242,233,216,0.28)', letterSpacing: '0.08em' }}
          >
            &copy; {new Date().getFullYear()} Mazhar Creative Agency. All rights reserved.
          </p>
          <p
            className="font-display italic"
            style={{ fontSize: '0.85rem', color: 'rgba(212,175,55,0.3)' }}
          >
            Crafting visuals that make brands unforgettable
          </p>
        </div>
      </div>
    </footer>
  );
}
