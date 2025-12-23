"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';

interface ClubCardProps {
  id: string;
  name: string;
  return30d: number | null;
  sharpe: number | null;
  activeVenues: string[];
}

const ClubCard: React.FC<ClubCardProps> = ({ id, name, return30d, sharpe, activeVenues }) => {
  const returnValue = return30d !== null ? return30d.toFixed(1) : '-';
  const returnColor = return30d !== null 
    ? (return30d >= 0 ? 'text-[#00ff88]' : 'text-red-500')
    : 'text-white/50';
  
  const sharpeValue = sharpe !== null ? sharpe.toFixed(2) : null;
  const sharpeColor = sharpe !== null
    ? (sharpe >= 0 ? 'text-[#00ff88]' : 'text-red-500')
    : 'text-white/50';

  return (
    <div className="border border-white/20 bg-black/40 backdrop-blur-sm p-6 rounded-lg min-w-[320px] sm:min-w-[380px] flex flex-col hover:border-[#00ff88]/50 transition-colors duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold font-mono text-white">{name}</h3>
        <span className="text-xs text-white/40 font-mono">{id}</span>
      </div>

      {/* Multi-Venue Tag */}
      <div className="mb-6">
        <span className="inline-block bg-[#00ff88] text-black text-xs font-mono px-2 py-1 rounded">
          MULTI-VENUE
        </span>
      </div>

      {/* Metrics */}
      <div className="flex-1 space-y-4 mb-6">
        {/* 30D Return */}
        <div>
          <p className="text-xs text-white/60 font-mono mb-1">30D RETURN</p>
          <p className={`text-2xl font-bold font-mono ${returnColor}`}>
            {return30d !== null && return30d >= 0 ? '+' : ''}{returnValue}%
          </p>
        </div>

        {/* Sharpe */}
        <div>
          <p className="text-xs text-white/60 font-mono mb-1">SHARPE</p>
          {sharpeValue !== null ? (
            <p className={`text-2xl font-bold font-mono ${sharpeColor}`}>
              {sharpeValue}
            </p>
          ) : (
            <p className="text-white/50 font-mono">-</p>
          )}
        </div>

        {/* Active Venues */}
        <div>
          <p className="text-xs text-white/60 font-mono mb-2">ACTIVE VENUES</p>
          <div className="flex flex-wrap gap-2">
            {activeVenues.length > 0 ? (
              activeVenues.map((venue, idx) => (
                <span key={idx} className="text-xs bg-white/10 text-white font-mono px-2 py-1 rounded">
                  {venue}
                </span>
              ))
            ) : (
              <span className="text-xs bg-white/10 text-white font-mono px-2 py-1 rounded">
                NONE
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Join Club Button */}
      <button className="w-full border border-white/20 text-white font-mono text-sm py-3 px-4 rounded hover:border-[#00ff88] hover:text-[#00ff88] transition-colors duration-300 flex items-center justify-center gap-2 group">
        <span>JOIN CLUB</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

const Clubs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const contentWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);
  const lastScrollYRef = useRef<number | null>(null);
  const velocityRef = useRef(0); // tracks vertical scroll velocity from Lenis
  const lastTimeRef = useRef<number | null>(null);

  const clubs: ClubCardProps[] = [
    {
      id: '#01',
      name: 'crypto-alpha',
      return30d: null,
      sharpe: null,
      activeVenues: [],
    },
    {
      id: '#02',
      name: 'Eleven',
      return30d: null,
      sharpe: null,
      activeVenues: [],
    },
    {
      id: '#03',
      name: 'Port',
      return30d: 0.0,
      sharpe: 0.38,
      activeVenues: [],
    },
    {
      id: '#04',
      name: 'Darshit Bhalodi',
      return30d: 0.0,
      sharpe: -0.35,
      activeVenues: [],
    },
    {
      id: '#05',
      name: 'crypto-sage',
      return30d: -0.0,
      sharpe: -1.20,
      activeVenues: [],
    },
  ];

  useEffect(() => {
    // Measure content width for seamless looping
    const measure = () => {
      if (scrollContainerRef.current && containerRef.current) {
        const contentWidth = scrollContainerRef.current.scrollWidth / 2; // single set width
        contentWidthRef.current = contentWidth;
      }
    };

    measure();
    window.addEventListener('resize', measure);

    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    // Capture vertical scroll velocity (Lenis keeps native scroll events firing)
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (lastScrollYRef.current !== null) {
        const delta = y - lastScrollYRef.current;
        // low-pass filter to smooth sudden spikes
        velocityRef.current = velocityRef.current * 0.85 + delta * 0.15;
      }
      lastScrollYRef.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const baseSpeed = 60; // px per second when scrolling gently
    const maxMultiplier = 4; // speed boost when scrolling fast

    const tick = (timestamp: number) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = timestamp;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const dt = (timestamp - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = timestamp;

      if (!isHoveredRef.current) {
        const v = velocityRef.current;
        const intensity = Math.min(Math.abs(v) / 12, 1); // tune sensitivity
        const direction = v >= 0 ? 1 : -1; // scroll down -> move left
        const speed = baseSpeed * (1 + intensity * (maxMultiplier - 1)) * direction;

        setOffset((prev) => {
          const width = contentWidthRef.current || 1;
          let next = prev - speed * dt;
          if (next <= -width) next += width;
          if (next >= 0) next = next % -width;
          return next;
        });

        // Gradual decay so slider slows if scrolling stops
        velocityRef.current *= 0.93;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative text-white py-20 px-4 sm:px-6 lg:px-8 min-h-[100vh] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono text-[#00ff88] mb-4">
                ALPHA CLUBS
              </h2>
              <p className="text-white/70 font-mono text-sm md:text-base">
                Each club has unique alpha sources and trading strategies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="border border-white/20 text-white font-mono text-sm px-4 py-2 rounded flex items-center">
                5 AVAILABLE
              </div>
              <button className="border border-white/20 text-white font-mono text-sm px-4 py-2 rounded hover:border-[#00ff88] hover:text-[#00ff88] transition-colors duration-300 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                CREATE CLUB
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          className=" w-full"
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => (isHoveredRef.current = false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-6 pb-4 will-change-transform"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {[...clubs, ...clubs].map((club, idx) => (
              <ClubCard key={club.id} {...club} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;

