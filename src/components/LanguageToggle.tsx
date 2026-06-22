import { Globe } from 'lucide-react';
import { useI18n, Lang } from '../i18n';

const OPTIONS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

/**
 * Compact EN / ES segmented switch. English is the default; the choice is
 * persisted in localStorage by the LanguageProvider.
 */
export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className={`flex items-center gap-1.5 ${className}`}
      role="group"
      aria-label={t.nav.langLabel}
    >
      <Globe size={13} strokeWidth={1.8} style={{ color: 'rgba(212,175,55,0.7)', flexShrink: 0 }} />
      <div
        className="flex items-center"
        style={{
          padding: '2px',
          borderRadius: '100px',
          background: 'rgba(212,175,55,0.06)',
          border: '1px solid rgba(212,175,55,0.22)',
        }}
      >
        {OPTIONS.map((o) => {
          const active = lang === o.code;
          return (
            <button
              key={o.code}
              type="button"
              onClick={() => setLang(o.code)}
              aria-pressed={active}
              className="font-label"
              style={{
                appearance: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 10px',
                borderRadius: '100px',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                lineHeight: 1,
                transition: 'all 0.3s ease',
                color: active ? '#1a1306' : 'rgba(28,26,22,0.55)',
                background: active
                  ? 'linear-gradient(135deg, #D4AF37, #B8901F)'
                  : 'transparent',
                boxShadow: active ? '0 2px 10px rgba(212,175,55,0.4)' : 'none',
              }}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
