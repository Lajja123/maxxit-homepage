import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import Typography from '@/theme/Typography';

const Layers = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const steps = [
    {
      number: '01',
      title: 'AGENT WHAT',
      subtitle: 'The Alpha Layer',
      description: 'Consumes signals from curated research institutes, crypto Twitter accounts, and private Telegram channels. Uses deterministic AI to filter noise and convert high-conviction calls into executable signals. Alpha creators are ranked and paid based on realized P&L of their signals.',
      rightContent: (
        <div className="w-full h-full flex flex-col">
         <div className="w-full h-full relative">
          {/* Plus signs in corners */}
          <div className="absolute top-8 left-8 text-white text-2xl">+</div>
          <div className="absolute top-8 right-8 text-white text-2xl">+</div>
          
          {/* Central neon green cross/connector shape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="320" height="320" viewBox="0 0 320 320" className="w-80 h-80">
              {/* Central circular body */}
              <circle cx="160" cy="160" r="60" fill="#00ff88" />
              
              {/* Top arm with cutout */}
              <path
                d="M 140 0 L 180 0 L 180 120 L 160 140 L 140 120 Z"
                fill="#00ff88"
              />
              <rect x="148" y="90" width="24" height="20" fill="#000" rx="2" />
              
              {/* Bottom arm with cutout */}
              <path
                d="M 140 320 L 180 320 L 180 200 L 160 180 L 140 200 Z"
                fill="#00ff88"
              />
              <rect x="148" y="210" width="24" height="20" fill="#000" rx="2" />
              
              {/* Left arm with cutout */}
              <path
                d="M 0 140 L 0 180 L 120 180 L 140 160 L 120 140 Z"
                fill="#00ff88"
              />
              <rect x="90" y="148" width="20" height="24" fill="#000" rx="2" />
              
              {/* Right arm with cutout */}
              <path
                d="M 320 140 L 320 180 L 200 180 L 180 160 L 200 140 Z"
                fill="#00ff88"
              />
              <rect x="210" y="148" width="20" height="24" fill="#000" rx="2" />
            </svg>
          </div>
        </div>
        </div>
      )
    },
    {
      number: '02',
      title: 'AGENT HOW',
      subtitle: 'Your Trading Clone',
      description: 'A personalized AI that becomes your 24/7 trading presence. For each signal, it analyzes current market conditions, determines optimal position size, sets appropriate leverage, and manages risk parameters — all tuned to your preferences and risk tolerance.',
      rightContent: (
        <div className="w-full h-full relative">
          {/* Plus signs in corners */}
          <div className="absolute top-8 left-8 text-white text-2xl">+</div>
          <div className="absolute top-8 right-8 text-white text-2xl">+</div>
          
          {/* Central neon green cross/connector shape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="320" height="320" viewBox="0 0 320 320" className="w-80 h-80">
              {/* Central circular body */}
              <circle cx="160" cy="160" r="60" fill="#00ff88" />
              
              {/* Top arm with cutout */}
              <path
                d="M 140 0 L 180 0 L 180 120 L 160 140 L 140 120 Z"
                fill="#00ff88"
              />
              <rect x="148" y="90" width="24" height="20" fill="#000" rx="2" />
              
              {/* Bottom arm with cutout */}
              <path
                d="M 140 320 L 180 320 L 180 200 L 160 180 L 140 200 Z"
                fill="#00ff88"
              />
              <rect x="148" y="210" width="24" height="20" fill="#000" rx="2" />
              
              {/* Left arm with cutout */}
              <path
                d="M 0 140 L 0 180 L 120 180 L 140 160 L 120 140 Z"
                fill="#00ff88"
              />
              <rect x="90" y="148" width="20" height="24" fill="#000" rx="2" />
              
              {/* Right arm with cutout */}
              <path
                d="M 320 140 L 320 180 L 200 180 L 180 160 L 200 140 Z"
                fill="#00ff88"
              />
              <rect x="210" y="148" width="20" height="24" fill="#000" rx="2" />
            </svg>
          </div>
        </div>
      )
    },
    {
      number: '03',
      title: 'AGENT WHERE',
      subtitle: 'Best Execution',
      description: 'Routes each trade to the optimal venue based on liquidity, fees, and available pairs. Currently supports Hyperliquid (200+ pairs) and Ostium (61 RWA pairs including forex and commodities). Executes non-custodially through Gnosis Safe modules.',
      rightContent: (
        <div className="w-full h-full flex flex-col items-center justify-center px-12">
          <div className="w-full h-full relative">
          {/* Plus signs in corners */}
          <div className="absolute top-8 left-8 text-white text-2xl">+</div>
          <div className="absolute top-8 right-8 text-white text-2xl">+</div>
          
          {/* Central neon green cross/connector shape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="320" height="320" viewBox="0 0 320 320" className="w-80 h-80">
              {/* Central circular body */}
              <circle cx="160" cy="160" r="60" fill="#00ff88" />
              
              {/* Top arm with cutout */}
              <path
                d="M 140 0 L 180 0 L 180 120 L 160 140 L 140 120 Z"
                fill="#00ff88"
              />
              <rect x="148" y="90" width="24" height="20" fill="#000" rx="2" />
              
              {/* Bottom arm with cutout */}
              <path
                d="M 140 320 L 180 320 L 180 200 L 160 180 L 140 200 Z"
                fill="#00ff88"
              />
              <rect x="148" y="210" width="24" height="20" fill="#000" rx="2" />
              
              {/* Left arm with cutout */}
              <path
                d="M 0 140 L 0 180 L 120 180 L 140 160 L 120 140 Z"
                fill="#00ff88"
              />
              <rect x="90" y="148" width="20" height="24" fill="#000" rx="2" />
              
              {/* Right arm with cutout */}
              <path
                d="M 320 140 L 320 180 L 200 180 L 180 160 L 200 140 Z"
                fill="#00ff88"
              />
              <rect x="210" y="148" width="20" height="24" fill="#000" rx="2" />
            </svg>
          </div>
        </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      
      e.preventDefault();
      
      if (e.deltaY > 0 && currentStep < steps.length - 1) {
        isScrolling.current = true;
        setCurrentStep(prev => prev + 1);
        setTimeout(() => { isScrolling.current = false; }, 800);
      } else if (e.deltaY < 0 && currentStep > 0) {
        isScrolling.current = true;
        setCurrentStep(prev => prev - 1);
        setTimeout(() => { isScrolling.current = false; }, 800);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentStep, steps.length]);

  useEffect(() => {
    let touchStart = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      
      const touchEnd = e.changedTouches[0].clientY;
      const diff = touchStart - touchEnd;

      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentStep < steps.length - 1) {
          isScrolling.current = true;
          setCurrentStep(prev => prev + 1);
          setTimeout(() => { isScrolling.current = false; }, 800);
        } else if (diff < 0 && currentStep > 0) {
          isScrolling.current = true;
          setCurrentStep(prev => prev - 1);
          setTimeout(() => { isScrolling.current = false; }, 800);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentStep, steps.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentStep > 0) {
        setCurrentStep(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, steps.length]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentData = steps[currentStep];
  
  // Calculate progress: fill dots progressively based on step
  // Step 0: 0-2 (3 dots), Step 1: 0-5 (6 dots), Step 2: 0-8 (all 9 dots)
  const totalDots = 9;
  const dotsPerStep = Math.ceil(totalDots / steps.length);
  const filledDots = Math.min((currentStep + 1) * dotsPerStep, totalDots);
  
  // Calculate progress percentage for the center line (0 to 100)
  // Fill based on step position: step 0 = 33%, step 1 = 66%, step 2 = 100%
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="relative " >
      <div 
        ref={containerRef}
        className="sticky top-0 h-screen bg-black text-white font-mono flex overflow-hidden z-50"
      >
      {/* Left Section */}
      <div className="w-1/2 flex flex-col border-r border-gray-800 relative">
        {/* Vertical divider with tick marks and progress line - show for all steps */}
        <div className="absolute right-0 top-0 bottom-0 w-px">
          {/* Background line (grey) */}
          <div className="absolute top-0 bottom-0 w-px bg-white/30"></div>
          
          {/* Progress line (green) that fills from top */}
          <div 
            className="absolute top-0 w-px bg-[#00ff88] transition-all duration-500 ease-out"
            style={{ height: `${progressPercentage}%` }}
          ></div>
          
          {/* Tick marks */}
          <div className="absolute top-1/4 right-0 w-2 h-px bg-white z-10"></div>
          <div className="absolute top-1/2 right-0 w-2 h-px bg-white z-10"></div>
          <div className="absolute top-3/4 right-0 w-2 h-px bg-white z-10"></div>
          {/* Step number */}
          <div className="absolute bottom-24 right-4 text-white text-sm z-10">{currentData.number}</div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-12 pt-24">
          {/* "HOW DOES IT WORK?" heading */}
          <div className="mb-12">
            <h3 className="text-lg tracking-wider text-white uppercase mb-6">THREE AGENTS
            ONE SYSTEM.</h3>
            {/* 3x3 dots grid - fill progressively based on scroll */}
            <div className="grid grid-cols-3 gap-2 w-15 mb-12">
              {[...Array(totalDots)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i < filledDots ? 'bg-[#00ff88]' : 'bg-gray-700'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="mb-3">
              <div className="flex items-baseline gap-4 mb-4 border-b border-[#00ff88] pb-2">
                <h2 
                  key={currentData.title}
                  className="text-6xl font-bold animate-fadeIn"
                >
                  {currentData.title}
                </h2>
              </div>
              {/* Green box with subtitle */}
              <Typography variant='span' color='black' className='bg-[#00ff88] px-4 py-1 mb-6 inline-block'>
              {currentData.subtitle}
              </Typography>
              
            </div>

            <p 
              key={currentData.description}
              className="text-sm leading-relaxed max-w-lg uppercase animate-fadeIn"
            >
              {currentData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 relative">
        
          
        
        {/* Dynamic Content */}
        <div 
          key={currentStep}
          className="w-full h-full animate-fadeIn"
        >
          {currentData.rightContent}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
      </div>
    </div>
  );
};

export default Layers;