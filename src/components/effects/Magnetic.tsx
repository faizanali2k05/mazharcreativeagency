import { ReactNode, useRef } from 'react';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Wraps content so it is gently pulled toward the pointer.
 * Pointer Events mean it works for mouse (desktop) and touch (mobile);
 * `touch-action: pan-y` keeps vertical scrolling intact and resets the pull
 * on pointer up / cancel so taps still register normally.
 */
export default function Magnetic({ children, strength = 0.4, className = '' }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      className={`magnetic ${className}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerUp={reset}
      onPointerCancel={reset}
      style={{ touchAction: 'pan-y' }}
    >
      {children}
    </div>
  );
}
