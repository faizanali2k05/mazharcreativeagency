import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Magnetic from './effects/Magnetic';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(7, 7, 11, 0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(22px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(22px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.14)' : '1px solid transparent',
        boxShadow: scrolled ? '0 12px 50px rgba(0,0,0,0.6)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
          <img
            src="/assets/images/download.png"
            alt="Mazhar Creative Agency"
            className="logo-blend"
            style={{ width: '42px', height: '42px', objectFit: 'contain' }}
          />
          <div style={{ lineHeight: 1 }}>
            <div
              className="font-display"
              style={{ fontSize: '1.25rem', color: '#F6F1E7', letterSpacing: '0.02em', fontWeight: 600 }}
            >
              Mazhar
            </div>
            <div
              className="font-label"
              style={{ fontSize: '0.52rem', color: 'rgba(212,175,55,0.7)', letterSpacing: '0.34em', textTransform: 'uppercase', marginTop: '2px' }}
            >
              Creative Agency
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <Magnetic strength={0.5} className="hidden md:block">
          <a
            href="#contact"
            className="btn-gold px-5 py-2.5 rounded-full"
            style={{ fontSize: '0.62rem' }}
          >
            Start a Project
          </a>
        </Magnetic>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: '#D4AF37' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? '420px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s cubic-bezier(0.16,1,0.3,1)',
          background: 'rgba(7,7,11,0.97)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          borderTop: menuOpen ? '1px solid rgba(212,175,55,0.14)' : 'none',
        }}
      >
        <nav className="px-6 py-7 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gold rounded-full py-3 text-center mt-2"
            style={{ fontSize: '0.65rem' }}
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
}
