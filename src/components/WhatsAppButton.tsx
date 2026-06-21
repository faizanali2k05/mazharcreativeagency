import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '24px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {/* Tooltip */}
      <div
        style={{
          background: 'linear-gradient(145deg, #0d1c2e, #08111F)',
          border: '1px solid rgba(37,211,102,0.2)',
          borderRadius: '12px',
          padding: '10px 16px',
          boxShadow: '8px 8px 24px rgba(0,0,0,0.6)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0) scale(1)' : 'translateX(12px) scale(0.94)',
          transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          className="font-label"
          style={{ fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(242,233,216,0.4)', marginBottom: '2px' }}
        >
          Chat on WhatsApp
        </div>
        <div
          className="font-body"
          style={{ fontSize: '0.82rem', color: '#25D366' }}
        >
          +92 304 8603377
        </div>
      </div>

      {/* Main button */}
      <div style={{ position: 'relative' }}>
        {/* Pulse rings */}
        <div
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '2px solid rgba(37,211,102,0.45)',
            animation: 'waPulse 2.5s ease-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '2px solid rgba(37,211,102,0.25)',
            animation: 'waPulse 2.5s ease-out infinite 0.75s',
          }}
        />

        <a
          href="https://wa.me/923048603377"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: hovered
              ? 'linear-gradient(135deg, #1da84d, #25D366)'
              : 'linear-gradient(135deg, #25D366, #1da84d)',
            boxShadow: hovered
              ? '0 10px 35px rgba(37,211,102,0.65), 0 4px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)'
              : '0 4px 22px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)',
            transform: hovered ? 'translateY(-4px) scale(1.08)' : 'translateY(0) scale(1)',
            transition: 'all 0.35s cubic-bezier(0.23,1,0.32,1)',
            textDecoration: 'none',
            position: 'relative',
            zIndex: 1,
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <MessageCircle size={23} style={{ color: '#fff' }} />
        </a>

        {/* Dismiss */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
          style={{
            position: 'absolute',
            top: '-7px', right: '-7px',
            width: '20px', height: '20px',
            borderRadius: '50%',
            background: 'rgba(8,17,31,0.95)',
            border: '1px solid rgba(212,175,55,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            color: 'rgba(242,233,216,0.5)',
            zIndex: 2,
            transition: 'all 0.2s ease',
          }}
        >
          <X size={10} />
        </button>
      </div>
    </div>
  );
}
