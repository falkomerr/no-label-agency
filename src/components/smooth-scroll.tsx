'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useMediaQuery } from 'usehooks-ts';

interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
}

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  // Memoized scroll configuration
  const config = useMemo(
    () => ({
      mass: 0.08,
      tension: 210,
      friction: 20,
    }),
    [],
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  // Debounced resize handler
  const debouncedResizeHandler = useCallback(
    (entries: ResizeObserverEntry[]) => {
      requestAnimationFrame(() => {
        for (const entry of entries) {
          setPageHeight(entry.contentRect.height);
        }
      });
    },
    [],
  );

  // Optimized ResizeObserver setup
  useEffect(() => {
    const resizeObserver = new ResizeObserver(debouncedResizeHandler);

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);

      // Initial measurement
      requestAnimationFrame(() => {
        setPageHeight(scrollRef.current?.scrollHeight || 0);
      });
    }

    return () => resizeObserver.disconnect();
  }, [debouncedResizeHandler]);

  // Scroll animation logic
  const { scrollY } = useScroll({ target: scrollRef });
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const spring = useSpring(transform, config);

  const isMobile = useMediaQuery('(max-width: 560px)');

  if (isMobile) {
    return children;
  }

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="fixed left-0 right-0 top-0 overflow-hidden will-change-transform"
        initial={false}>
        {children}
      </motion.div>

      <div style={{ height: pageHeight }} />
    </>
  );
};
