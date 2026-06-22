import { useEffect, useRef, useState } from 'react';

/**
 * Observe an element and report when it scrolls into view.
 * `once` keeps it visible after the first intersection (default true).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.18 },
  once = true,
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Defensive: if IntersectionObserver is unavailable, reveal immediately so
    // content is never left stuck at opacity:0.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) obs.disconnect();
      } else if (!once) {
        setInView(false);
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once]);

  return { ref, inView };
}
