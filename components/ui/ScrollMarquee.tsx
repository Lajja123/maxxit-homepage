'use client'
import React, { useEffect, useRef, useState } from "react";

type Mode = "unidirectional" | "bidirectional";

interface ScrollMarqueeProps {
  text: string;
  mode?: Mode;
  /** Optional class to style the marquee text itself (e.g. font size, weight) */
  textClassName?: string;
  /** Base speed in px/second when scrolling moderately */
  baseSpeed?: number;
  /** Maximum speed multiplier applied from scroll velocity */
  maxMultiplier?: number;
  /** Direction for unidirectional mode: 1 (left) or -1 (right) */
  uniDirection?: 1 | -1;
  className?: string;
}

export const ScrollMarquee: React.FC<ScrollMarqueeProps> = ({
  text,
  mode = "bidirectional",
  textClassName,
  baseSpeed = 50,
  maxMultiplier = 4,
  uniDirection = 1,
  className,
}) => {
  const [offset, setOffset] = useState(0); // current x offset
  const lastScrollYRef = useRef<number | null>(null);
  const velocityRef = useRef(0); // scroll velocity (px per event, signed)
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentWidthRef = useRef<number>(0);

  // Measure content width for seamless looping
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const content = containerRef.current.querySelector(
          "[data-marquee-content]"
        ) as HTMLElement | null;
        if (content) {
          contentWidthRef.current = content.offsetWidth;
        }
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Track scroll velocity
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (lastScrollYRef.current !== null) {
        const delta = y - lastScrollYRef.current;
        // Simple low-pass filter to smooth velocity
        velocityRef.current = velocityRef.current * 0.8 + delta * 0.2;
      }
      lastScrollYRef.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = time;
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const dt = (time - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = time;

      const v = velocityRef.current;

      // Map scroll velocity -> speed multiplier [0, maxMultiplier]
      const intensity = Math.min(Math.abs(v) / 10, 1); // tweak divisor for sensitivity
      const multiplier = 1 + intensity * (maxMultiplier - 1);

      // Determine direction
      let dir = 1; // left by default
      if (mode === "unidirectional") {
        dir = uniDirection;
      } else {
        // bidirectional: direction follows scroll (down -> left, up -> right)
        if (v > 0) dir = 1;
        else if (v < 0) dir = -1;
      }

      const speed = baseSpeed * multiplier * dir; // px per second, signed

      setOffset((prev) => {
        const width = contentWidthRef.current || 1;
        let next = prev - speed * dt;

        // Wrap within [0, width)
        if (next <= -width) next += width;
        if (next >= 0) next = next % -width;

        return next;
      });

      // Gradually decay velocity so it slows when scrolling stops
      velocityRef.current *= 0.95;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [baseSpeed, maxMultiplier, mode, uniDirection]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: "100%",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          transform: `translate3d(${offset}px, 0, 0)`,
          willChange: "transform",
        }}
      >
        <div
          data-marquee-content
          style={{
            paddingRight: "2rem",
            display: "inline-block",
          }}
          className={textClassName}
        >
          {text}
        </div>
        {/* duplicate for seamless loop */}
        <div
          style={{
            paddingRight: "2rem",
            display: "inline-block",
          }}
          className={textClassName}
        >
          {text}
        </div>
      </div>
    </div>
  );
};