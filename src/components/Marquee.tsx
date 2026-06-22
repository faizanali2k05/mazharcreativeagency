import { useI18n } from '../i18n';

export default function Marquee() {
  const { t } = useI18n();
  const row = [...t.marquee, ...t.marquee];
  return (
    <section
      aria-hidden
      style={{
        background: 'linear-gradient(180deg, #0c0c0e 0%, #050505 100%)',
        borderTop: '1px solid rgba(212,175,55,0.22)',
        borderBottom: '1px solid rgba(212,175,55,0.22)',
        padding: '26px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="marquee-mask">
        <div className="marquee">
          {row.map((item, i) => (
            <div key={i} className="flex items-center" style={{ flexShrink: 0 }}>
              <span
                className="font-display"
                style={{
                  fontSize: 'clamp(1.4rem, 3vw, 2.4rem)',
                  color: i % 2 === 0 ? '#F6F1E7' : 'transparent',
                  WebkitTextStroke: i % 2 === 0 ? '0' : '1px rgba(212,175,55,0.7)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  padding: '0 32px',
                  whiteSpace: 'nowrap',
                }}
              >
                {item}
              </span>
              <span className="glow-dot" style={{ flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
