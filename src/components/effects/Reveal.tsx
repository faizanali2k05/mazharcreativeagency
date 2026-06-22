import { ReactNode } from 'react';
import { useInView } from '../../lib/useInView';

type Variant = 'up' | 'left' | 'right' | 'scale' | 'blur' | '3d';

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: 'div' | 'span' | 'section' | 'li';
}

const variantClass: Record<Variant, string> = {
  up: '',
  left: 'sr-left',
  right: 'sr-right',
  scale: 'sr-scale',
  blur: 'sr-blur',
  '3d': 'sr-3d',
};

/** Scroll-triggered reveal wrapper. Animates via CSS `.sr` + `.is-visible`. */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  threshold = 0.18,
  className = '',
  as = 'div',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });
  const Tag = as as 'div';
  return (
    <Tag
      ref={ref}
      className={`sr ${variantClass[variant]} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ ['--sr-delay' as string]: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
