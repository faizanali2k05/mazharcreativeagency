import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Magnetic from './effects/Magnetic';
import LanguageToggle from './LanguageToggle';
import { useI18n } from '../i18n';

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.work, href: '#work' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(140%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.14)' : '1px solid transparent',
        boxShadow: scrolled ? '0 12px 40px rgba(60,45,15,0.12)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-3.5 sm:py-4 flex items-center justify-between gap-2 sm:gap-3">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0" style={{ textDecoration: 'none' }}>
          <img
            src="/assets/images/download.png"
            alt="Mazhar Creative Agency"
            className="logo-blend"
            style={{ width: '36px', height: '36px', objectFit: 'contain', flexShrink: 0 }}
          />
          <div style={{ lineHeight: 1 }} className="flex-shrink-0">
            <div
              className="font-display whitespace-nowrap"
              style={{ fontSize: 'clamp(1rem, 4.4vw, 1.18rem)', color: '#1c1a16', letterSpacing: '0.02em', fontWeight: 600 }}
            >
              Mazhar
            </div>
            <div
              className="font-label whitespace-nowrap"
              style={{ fontSize: 'clamp(0.46rem, 1.9vw, 0.5rem)', color: '#6E520F', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '2px' }}
            >
              {t.nav.tagline}
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 flex-shrink-0">
          <LanguageToggle className="hidden sm:flex" />

          <Magnetic strength={0.5}>
            <a
              href="#contact"
              className="btn-gold rounded-full whitespace-nowrap px-3 py-1.5 sm:px-5 sm:py-2.5"
              style={{ fontSize: 'clamp(0.48rem, 1.7vw, 0.62rem)', letterSpacing: '0.1em' }}
            >
              {t.nav.cta}
            </a>
          </Magnetic>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            style={{ color: '#D4AF37' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? '460px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s cubic-bezier(0.16,1,0.3,1)',
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderTop: menuOpen ? '1px solid rgba(212,175,55,0.14)' : 'none',
        }}
      >
        <nav className="px-6 py-7 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <LanguageToggle />
          </div>
          <a
            href="#contact"
            className="btn-gold rounded-full py-3 text-center mt-1"
            style={{ fontSize: '0.65rem' }}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
