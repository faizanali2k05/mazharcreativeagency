'use client';

import { useCallback, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

/* -----------------------------------------------------------------------------
 * Pixel ripple canvas — adapted from the "pixel-perfect-hero" component.
 *
 * Performance notes (this is intentionally lighter than the original):
 *  - The expensive perpetual "shimmer" loop was removed. Pixels ripple in once
 *    and then go idle, so the rAF loop STOPS — no continuous full-canvas redraw.
 *  - Pixel count is capped (gap widens automatically) so we never animate tens
 *    of thousands of cells.
 *  - Honors prefers-reduced-motion (renders one static frame) and pauses while
 *    the tab is hidden.
 * -------------------------------------------------------------------------- */

type Pixel = {
  x: number;
  y: number;
  color: string;
  size: number;
  sizeStep: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
};

type PixelCanvasProps = {
  /** Squares pick randomly from these colors. */
  colors: string[];
  /** Spacing between cells in px (smaller = denser = heavier). */
  gap?: number;
  /** Ripple growth speed. */
  speed?: number;
  /** Hard cap on cell count; gap widens automatically to respect it. */
  maxPixels?: number;
  className?: string;
};

export function PixelCanvas({
  colors,
  gap = 14,
  speed = 35,
  maxPixels = 7000,
  className,
}: PixelCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const rafRef = useRef(0);
  const lastFrameRef = useRef(0);
  const lastWidthRef = useRef(0);
  const reducedRef = useRef(false);

  const build = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || colors.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = wrap.getBoundingClientRect();
    const w = Math.floor(width);
    const h = Math.floor(height);
    if (w === 0 || h === 0) return;
    canvas.width = w;
    canvas.height = h;
    lastWidthRef.current = w;

    // Widen the gap if the naive grid would exceed the cap.
    let g = gap;
    if ((w / g) * (h / g) > maxPixels) {
      g = Math.ceil(Math.sqrt((w * h) / maxPixels));
    }

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const baseSpeed = Math.min(speed, 100) * 0.001;
    const pixels: Pixel[] = [];

    for (let x = 0; x < w; x += g) {
      for (let y = 0; y < h; y += g) {
        const dx = x - w / 2;
        const dy = y - h / 2;
        pixels.push({
          x,
          y,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 0,
          sizeStep: rand(0.12, 0.28),
          maxSize: rand(0.5, 2),
          delay: reducedRef.current ? 0 : Math.sqrt(dx * dx + dy * dy) * 0.6,
          counter: 0,
          counterStep: rand(1.8, 3.2) + (w + h) * 0.008,
          isIdle: false,
        });
        void baseSpeed;
      }
    }
    pixelsRef.current = pixels;
  }, [colors, gap, maxPixels, speed]);

  const drawStatic = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of pixelsRef.current) {
      const offset = 1 - p.maxSize * 0.5;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x + offset, p.y + offset, p.maxSize, p.maxSize);
    }
  }, []);

  const animate = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const frameInterval = 1000 / 60;

    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);
      const now = performance.now();
      const elapsed = now - lastFrameRef.current;
      if (elapsed < frameInterval) return;
      lastFrameRef.current = now - (elapsed % frameInterval);

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pixels = pixelsRef.current;
      for (const p of pixels) {
        if (p.counter <= p.delay) {
          p.counter += p.counterStep;
          continue;
        }
        if (p.size >= p.maxSize) {
          p.size = p.maxSize;
          p.isIdle = true;
        } else {
          p.size += p.sizeStep;
        }
        const offset = 1 - p.size * 0.5;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x + offset, p.y + offset, p.size, p.size);
      }

      // Once every cell has grown in, stop the loop entirely (static field).
      if (pixels.length && pixels.every((p) => p.isIdle)) {
        cancelAnimationFrame(rafRef.current);
      }
    };
    rafRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    build();
    if (reducedRef.current) drawStatic();
    else animate();

    // Re-init only on meaningful WIDTH changes — avoids replaying the ripple
    // every time a mobile browser shows/hides its URL bar (height-only change).
    const ro = new ResizeObserver(() => {
      const w = Math.floor(wrapRef.current?.getBoundingClientRect().width || 0);
      if (Math.abs(w - lastWidthRef.current) < 48) return;
      build();
      if (reducedRef.current) drawStatic();
      else animate();
    });
    if (wrapRef.current) ro.observe(wrapRef.current);

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current);
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [build, animate, drawStatic]);

  return (
    <div ref={wrapRef} className={cn('absolute inset-0 overflow-hidden', className)}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
