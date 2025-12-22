"use client";

import React, { useState, useRef, MouseEvent } from 'react';
import Typography from '@/theme/Typography';

interface SpotlightCardProps {
  title: string;
  keyword: string;
  description: string;
  index: number;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ title, keyword, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className="relative group border border-white/10 bg-black/40 backdrop-blur-sm p-8 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#00ff88]/50 hover:bg-black/60"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 136, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Glow effect on hover */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 136, 0.4), transparent 50%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        <p className="text-sm md:text-base uppercase tracking-wider mb-4 text-white/80 font-semibold">
          {title}
        </p>
        
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono text-[#00ff88]">
          {keyword}
        </h3>
        
        <p className="text-sm md:text-base text-[#8A8A80] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-lg border border-[#00ff88]/50 shadow-[0_0_20px_rgba(0,255,136,0.3)]" />
      </div>
    </div>
  );
};

const Performance = () => {
  const cards = [
    {
      title: 'ALPHA CREATORS',
      keyword: 'EARN %',
      description: 'Alpha creators receive a percentage of the realized P&L from signals that generate profits. The more profitable your signals, the more you earn.',
    },
    {
      title: 'TRADERS',
      keyword: 'PAY %',
      description: 'Traders pay a performance fee only on profitable trades. If a signal doesn\'t perform, you don\'t pay. Aligned incentives ensure quality.',
    },
    {
      title: 'PLATFORM',
      keyword: 'TAKE %',
      description: 'The platform takes a small fee from successful trades, ensuring sustainable operations while keeping the ecosystem aligned with performance.',
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
            <span className="text-white">EVERYONE GETS </span>
            <span className="text-[#00ff88]">PAID</span>
            <span className="text-white"> FOR PERFORMANCE</span>
          </h2>
          
          <p className="text-sm md:text-base text-[#8A8A80] max-w-3xl mx-auto leading-relaxed">
            A performance-based economy where all participants are rewarded based on actual results. 
            Alpha creators earn from profitable signals, traders pay only for success, and the platform 
            thrives on shared value creation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {cards.map((card, index) => (
            <SpotlightCard
              key={index}
              title={card.title}
              keyword={card.keyword}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Performance;

