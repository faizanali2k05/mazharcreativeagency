import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useI18n } from '../i18n';
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from '../lib/contact';

export default function WhatsAppButton() {
  const { t } = useI18n();
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', bottom: '28px', right: '24px', zIndex: 50, display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* Tooltip */}
      <div style={{
        background: 'linear-gradient(145deg, #ffffff, #faf6ee)',
        border: '1px solid rgba(37,211,102,0.25)', borderRadius: '12px', padding: '10px 16px',
        boxShadow: '0 16px 40px rgba(60,45,15,0.18)',
        opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0) scale(1)' : 'translateX(12px) scale(0.94)',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)', pointerEvents: 'none', whiteSpace: 'nowrap',
      }}>
        <div className="font-label" style={{ fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(28,26,22,0.45)', marginBottom: '2px' }}>{t.whatsapp.tooltip}</div>
        <div className="font-body" style={{ fontSize: '0.82rem', color: '#1FA855' }}>{WHATSAPP_DISPLAY}</div>
      </div>

      {/* Main button */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid rgba(37,211,102,0.5)', animation: 'waPulse 2.5s ease-out infinite' }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid rgba(37,211,102,0.3)', animation: 'waPulse 2.5s ease-out infinite 0.75s' }} />

        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', width: '54px', height: '54px', borderRadius: '50%',
            background: hovered ? 'linear-gradient(135deg, #1da84d, #25D366)' : 'linear-gradient(135deg, #25D366, #1da84d)',
            boxShadow: hovered ? '0 10px 35px rgba(37,211,102,0.65), inset 0 1px 0 rgba(255,255,255,0.3)' : '0 4px 22px rgba(37,211,102,0.45), inset 0 1px 0 rgba(255,255,255,0.25)',
            transform: hovered ? 'translateY(-4px) scale(1.08)' : 'translateY(0) scale(1)',
            transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)', textDecoration: 'none', position: 'relative', zIndex: 1,
          }}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        >
          <MessageCircle size={23} style={{ color: '#fff' }} />
        </a>

        <button onClick={() => setVisible(false)} aria-label="Dismiss"
          style={{ position: 'absolute', top: '-7px', right: '-7px', width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.96)', border: '1px solid rgba(212,175,55,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(28,26,22,0.55)', zIndex: 2, transition: 'all 0.2s ease' }}>
          <X size={10} />
        </button>
      </div>
    </div>
  );
}
