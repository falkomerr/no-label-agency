'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useMediaQuery } from 'usehooks-ts';

interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
}

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(
      (entries: ResizeObserverEntry[]) => resizePageHeight(entries),
    );
    scrollRef && resizeObserver.observe(scrollRef.current as Element);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { mass: 0.08 };
  const spring = useSpring(transform, physics);

  const isMobile = useMediaQuery('(max-width: 560px)');

  if (isMobile) {
    return children;
  }

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="fixed left-0 right-0 top-0 overflow-hidden will-change-transform">
        {children}
      </motion.div>

      <div style={{ height: pageHeight }} />
    </>
  );
};
