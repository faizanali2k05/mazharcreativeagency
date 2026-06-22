import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { cn } from '@/lib/utils';

export type Logo = {
  src: string;
  alt: string;
  /** Optional per-logo height classes to even out visual size. */
  sizeClass?: string;
};

/**
 * Infinite auto-scrolling client logo strip (adapted from a 21st.dev component
 * to our light/gold theme). Logos keep their original colours on a recessed
 * skeuomorphic panel; edges fade + progressively blur.
 */
export function LogoCloud({ logos }: { logos: Logo[] }) {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-6">
      <InfiniteSlider
        gap={56}
        reverse
        speed={55}
        speedOnHover={18}
        className="[mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
      >
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            title={logo.alt}
            className={cn('pointer-events-none w-auto select-none object-contain', logo.sizeClass ?? 'h-8 md:h-10')}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[110px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[110px]"
        direction="right"
      />
    </div>
  );
}
