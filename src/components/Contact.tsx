import { useState } from 'react';
import { MessageCircle, Instagram, ChevronDown } from 'lucide-react';
import Reveal from './effects/Reveal';
import Magnetic from './effects/Magnetic';

const SERVICES = [
  'Website Design & Redesign',
  'Graphic Design',
  'Brand Identity Optimization',
  'Branding & Social Media Templates',
  'Digital Catalog & Promotional Materials',
  'Marketing Materials & Brand Experience',
  'App Development & UI/UX Design',
  'Social Media & Ads Management',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: '', details: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) return;
    const msg = [
      `*New Project Inquiry — Mazhar Creative Agency*`, ``,
      `*Name:* ${form.name}`, `*Email:* ${form.email}`,
      `*Selected Service:* ${form.service}`, `*Message:* ${form.details || 'N/A'}`,
    ].join('\n');
    window.open(`https://wa.me/923048603377?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  const contactLinks = [
    { href: 'https://wa.me/923048603377', icon: MessageCircle, label: 'WhatsApp', value: '+92 304 8603377', color: '#25D366', bg: 'rgba(37,211,102,0.12)', border: 'rgba(37,211,102,0.25)' },
    { href: 'https://www.instagram.com/mazhars_designs/', icon: Instagram, label: 'Instagram', value: '@mazhars_designs', color: '#D4AF37', bg: 'rgba(212,175,55,0.12)', border: 'rgba(212,175,55,0.25)' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #07070b 0%, #040406 100%)' }}>
      <div className="aurora" style={{ opacity: 0.4 }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="mb-16">
          <Reveal>
            <div className="section-label mb-4 flex items-center gap-3">
              <div className="gold-divider" style={{ width: '36px' }} />
              Get In Touch
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)', color: '#F6F1E7', lineHeight: 1.08, marginBottom: '18px', fontWeight: 600 }}>
              Let's Build Something{' '}
              <em className="gold-text not-italic">Extraordinary</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-body" style={{ color: 'rgba(246,241,231,0.5)', fontSize: '0.96rem', lineHeight: 1.75, fontWeight: 300, maxWidth: '520px' }}>
              Tell us about your project and let's create something that makes
              your brand truly unforgettable.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Info panel */}
          <Reveal variant="left" className="lg:col-span-2">
            <div className="glass-panel" style={{ padding: '32px 28px' }}>
              <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.5rem', color: '#F6F1E7' }}>Start Your Project</h3>
              <p className="font-body mb-6" style={{ fontSize: '0.875rem', color: 'rgba(246,241,231,0.5)', lineHeight: 1.65, fontWeight: 300 }}>
                Fill out the form and your message will be sent directly to our
                WhatsApp. We respond within 24 hours.
              </p>
              <div className="gold-divider mb-6" style={{ opacity: 0.3 }} />
              <div className="flex flex-col gap-5">
                {contactLinks.map((c) => (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: c.bg, border: `1px solid ${c.border}`, boxShadow: `0 0 14px ${c.color}22` }}>
                      <c.icon size={16} style={{ color: c.color }} />
                    </div>
                    <div>
                      <div className="font-label" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(246,241,231,0.4)', marginBottom: '2px' }}>{c.label}</div>
                      <div className="font-body" style={{ fontSize: '0.875rem', color: '#F6F1E7' }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
                <div className="font-label" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.6)', marginBottom: '8px' }}>How it works</div>
                <p className="font-body" style={{ fontSize: '0.78rem', color: 'rgba(246,241,231,0.4)', lineHeight: 1.6, fontWeight: 300 }}>
                  Submitting the form will open WhatsApp with your details
                  pre-filled, ready to send directly to our team.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal variant="right" delay={0.12} className="lg:col-span-3">
            <div className="glass-panel" style={{ padding: '36px 32px' }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center gap-5">
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #D4AF37, #F0D98C)', boxShadow: '0 0 35px rgba(212,175,55,0.5)' }}>
                    <MessageCircle size={26} style={{ color: '#1a1306' }} />
                  </div>
                  <h3 className="font-display font-semibold" style={{ fontSize: '1.7rem', color: '#F6F1E7' }}>WhatsApp Opened!</h3>
                  <p className="font-body" style={{ color: 'rgba(246,241,231,0.55)', fontSize: '0.92rem', maxWidth: '320px', lineHeight: 1.65, fontWeight: 300 }}>
                    Your message has been pre-filled in WhatsApp. Just hit send
                    and we'll get back to you within 24 hours.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', details: '' }); }} className="btn-outline rounded-full px-6 py-2.5 mt-2" style={{ fontSize: '0.65rem' }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-label" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(246,241,231,0.45)' }}>Your Name</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Full name" className="input-skeu rounded-xl px-4 py-3" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-label" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(246,241,231,0.45)' }}>Email Address</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="input-skeu rounded-xl px-4 py-3" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="font-label" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(246,241,231,0.45)' }}>Selected Service</label>
                    <div style={{ position: 'relative' }}>
                      <select id="service" name="service" required value={form.service} onChange={handleChange} className="input-skeu rounded-xl px-4 py-3 w-full appearance-none cursor-pointer" style={{ paddingRight: '42px' }}>
                        <option value="" disabled style={{ background: '#0b0b11' }}>Select a service…</option>
                        {SERVICES.map((s) => (<option key={s} value={s} style={{ background: '#0b0b11' }}>{s}</option>))}
                      </select>
                      <ChevronDown size={14} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#D4AF37', pointerEvents: 'none' }} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="details" className="font-label" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(246,241,231,0.45)' }}>Message</label>
                    <textarea id="details" name="details" rows={5} value={form.details} onChange={handleChange} placeholder="Tell us about your project, goals, and timeline…" className="input-skeu rounded-xl px-4 py-3 resize-none" />
                  </div>

                  <Magnetic strength={0.25}>
                    <button type="submit" className="btn-gold rounded-full py-4 gap-3 mt-2 w-full" style={{ fontSize: '0.68rem' }}>
                      <MessageCircle size={15} strokeWidth={2} />
                      Send Message via WhatsApp
                    </button>
                  </Magnetic>

                  <p className="font-body text-center" style={{ fontSize: '0.72rem', color: 'rgba(246,241,231,0.3)', marginTop: '-4px' }}>
                    Your message will open pre-filled in WhatsApp
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
