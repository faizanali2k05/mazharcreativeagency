import { ReactNode, useRef, useState } from 'react';

interface Tilt3DProps {
  children: ReactNode;
  max?: number;
  glare?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Interactive 3D parallax tilt driven by pointer position.
 * Uses Pointer Events so it responds to BOTH mouse (desktop) and touch
 * (mobile). `touch-action: pan-y` keeps vertical page-scroll working — a
 * vertical scroll-drag fires pointercancel and eases the tilt back, while a
 * horizontal drag / tap tilts the card.
 */
export default function Tilt3D({
  children,
  max = 12,
  glare = true,
  className = '',
  style,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({
      rx: (0.5 - py) * max * 2,
      ry: (px - 0.5) * max * 2,
      gx: px * 100,
      gy: py * 100,
      active: true,
    });
  };

  const reset = () => setT({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerUp={reset}
      onPointerCancel={reset}
      style={{
        transform: `perspective(1000px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) translateZ(0)`,
        transformStyle: 'preserve-3d',
        transition: t.active ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        position: 'relative',
        touchAction: 'pan-y',
        ...style,
      }}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            background: `radial-gradient(circle at ${t.gx}% ${t.gy}%, rgba(240,217,140,0.18), transparent 45%)`,
            opacity: t.active ? 1 : 0,
            transition: 'opacity 0.4s ease',
            zIndex: 2,
          }}
        />
      )}
    </div>
  );
}
