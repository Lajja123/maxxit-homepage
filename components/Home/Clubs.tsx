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
  const [scrollProgress, setScrollProgress] = useState(0);
  const maxTranslateRef = useRef(0);

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
    // Calculate max translate once on mount and resize
    const calculateMaxTranslate = () => {
      if (scrollContainerRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = scrollContainerRef.current.scrollWidth;
        maxTranslateRef.current = Math.max(0, contentWidth - containerWidth);
      }
    };

    calculateMaxTranslate();

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = container.offsetHeight;
      
      // Calculate scroll progress as container scrolls through viewport
      const containerTop = rect.top;
      const scrollStart = windowHeight * 0.8; // Start translating earlier
      const scrollEnd = -containerHeight; // End when container bottom leaves viewport
      const scrollRange = scrollStart - scrollEnd;
      
      let progress = 0;
      if (containerTop <= scrollStart && containerTop >= scrollEnd) {
        progress = (scrollStart - containerTop) / scrollRange;
        progress = Math.max(0, Math.min(1, progress));
      } else if (containerTop < scrollEnd) {
        progress = 1;
      }
      
      setScrollProgress(progress);
    };

    const handleResize = () => {
      calculateMaxTranslate();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate horizontal translation based on scroll progress
  const translateX = -scrollProgress * maxTranslateRef.current;

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8 min-h-[100vh] flex flex-col justify-center"
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
        <div className="overflow-x-hidden w-full">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 pb-4"
            style={{
              transform: `translateX(${translateX}px)`,
              willChange: 'transform',
            }}
          >
            {clubs.map((club) => (
              <ClubCard key={club.id} {...club} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;

