'use client';

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";

interface LenisProviderProps {
  children: ReactNode;
}

/**
 * Provides smooth scrolling via Lenis.
 * It binds to the document scroller and cleans up on unmount.
 */
const LenisProvider = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Bail out during SSR
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      // syncTouch keeps touch scrolling in sync without deprecated smoothTouch
      syncTouch: true,
    });
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      frameRef.current = requestAnimationFrame(raf);
    };

    frameRef.current = requestAnimationFrame(raf);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;

