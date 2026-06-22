import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { useI18n } from '../i18n';
import { WHATSAPP_LINK, EMAIL_LINK, INSTAGRAM_LINK } from '../lib/contact';

export default function Footer() {
  const { t } = useI18n();
  const quick = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.work, href: '#work' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.contact, href: '#contact' },
  ];
  return (
    <footer style={{ background: 'linear-gradient(180deg, #0d0d0f 0%, #050505 100%)', borderTop: '1px solid rgba(212,175,55,0.28)', position: 'relative', overflow: 'hidden' }}>
      <div className="gold-divider" style={{ opacity: 0.6 }} />

      <div className="absolute pointer-events-none" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '760px', height: '320px', background: 'radial-gradient(ellipse at bottom, rgba(212,175,55,0.12) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: '72px', paddingBottom: '40px', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src="/assets/images/download.png" alt="Mazhar Creative Agency" className="logo-blend" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
              <div>
                <div className="font-display" style={{ fontSize: '1.3rem', color: '#F6F1E7', letterSpacing: '0.02em', fontWeight: 600 }}>Mazhar</div>
                <div className="font-label" style={{ fontSize: '0.52rem', color: 'rgba(212,175,55,0.8)', letterSpacing: '0.34em', textTransform: 'uppercase', marginTop: '2px' }}>{t.nav.tagline}</div>
              </div>
            </div>

            <p className="font-body" style={{ fontSize: '0.9rem', color: 'rgba(246,241,231,0.5)', lineHeight: 1.7, maxWidth: '280px', fontWeight: 300, marginBottom: '28px' }}>
              {t.footer.desc}
            </p>

            <div className="flex items-center gap-3">
              {[
                { href: INSTAGRAM_LINK, icon: Instagram, color: '#E6C879', bg: 'rgba(212,175,55,0.12)', border: 'rgba(212,175,55,0.35)', label: 'Instagram' },
                { href: WHATSAPP_LINK, icon: MessageCircle, color: '#25D366', bg: 'rgba(37,211,102,0.12)', border: 'rgba(37,211,102,0.35)', label: 'WhatsApp' },
                { href: EMAIL_LINK, icon: Mail, color: '#E6C879', bg: 'rgba(212,175,55,0.12)', border: 'rgba(212,175,55,0.35)', label: 'Email' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', background: s.bg, border: `1px solid ${s.border}`, transition: 'all 0.3s ease', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 18px ${s.color}55`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
                >
                  <s.icon size={15} style={{ color: s.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <div className="font-label font-semibold mb-6" style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#E6C879' }}>{t.footer.navTitle}</div>
            <div className="flex flex-col gap-3">
              {quick.map((l) => (
                <a key={l.href} href={l.href} className="font-body" style={{ fontSize: '0.875rem', color: 'rgba(246,241,231,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#E6C879'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(246,241,231,0.5)'; }}
                >
                  <span style={{ width: '14px', height: '1px', background: 'rgba(212,175,55,0.5)', display: 'inline-block', flexShrink: 0 }} />
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <div className="font-label font-semibold mb-6" style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#E6C879' }}>{t.footer.servicesTitle}</div>
            <div className="flex flex-col gap-3">
              {t.footer.serviceList.map((s) => (
                <a key={s} href="#services" className="font-body" style={{ fontSize: '0.875rem', color: 'rgba(246,241,231,0.48)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#E6C879'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(246,241,231,0.48)'; }}
                >
                  <span style={{ width: '14px', height: '1px', background: 'rgba(212,175,55,0.45)', display: 'inline-block', flexShrink: 0 }} />
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider mb-7" style={{ opacity: 0.3 }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-label" style={{ fontSize: '0.65rem', color: 'rgba(246,241,231,0.4)', letterSpacing: '0.08em' }}>
            &copy; {new Date().getFullYear()} Mazhar Creative Agency. {t.footer.rights}
          </p>
          <p className="font-display" style={{ fontSize: '0.9rem', color: 'rgba(212,175,55,0.75)', fontWeight: 500, letterSpacing: '-0.005em' }}>
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
