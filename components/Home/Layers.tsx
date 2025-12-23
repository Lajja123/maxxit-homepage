"use client"
import React, { useState, useRef } from 'react';
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
      description:
        'Signal selection. Benchmarks and scores your trusted sources by realized performance, then converts messy human alpha (tweets, Telegram, research notes) into objective, tradable parameters using deterministic AI.',
      rightContent: (
        <div className="w-full h-full flex flex-col p-10 gap-6">
          <div className="flex items-center justify-between mb-4">
            <Typography
              variant="span"
              color="white"
              className="text-[10px] tracking-[0.2em] uppercase text-white/60"
            >
              What it does
            </Typography>
            <Typography
              variant="span"
              color="#00ff88"
              className="text-[10px] tracking-[0.18em] uppercase"
            >
              Deterministic AI · Signal Selection
            </Typography>
          </div>

          <Typography
            variant="span"
            color="white"
            className="text-xs md:text-sm text-white/80 leading-relaxed max-w-md"
          >
            AGENT WHAT is the <span className="font-semibold">signal selection layer</span>. It takes
            the messy stream of content you already follow — research institutes, crypto Twitter,
            private Telegram channels — and turns it into structured, benchmarked trading intent.
          </Typography>

          <div className="space-y-3 text-xs text-white/80">
            <div className="flex items-start gap-3 border border-white/10 rounded-lg p-3 bg-white/5">
              <div className="mt-0.5 h-5 w-5 rounded-full border border-[#00ff88] flex items-center justify-center text-[10px] text-[#00ff88]">
                1
              </div>
              <div>
                <Typography
                  variant="span"
                  color="white"
                  className="text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1"
                >
                  Benchmarked Sources
                </Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="leading-relaxed text-[11px]"
                >
                  Tracks outcomes over time and scores each source by realized P&amp;L impact so you
                  see <span className="font-semibold">who&apos;s right often enough to matter</span>.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-white/10 rounded-lg p-3 bg-white/5">
              <div className="mt-0.5 h-5 w-5 rounded-full border border-[#00ff88] flex items-center justify-center text-[10px] text-[#00ff88]">
                2
              </div>
              <div>
                <Typography
                  variant="span"
                  color="white"
                  className="text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1"
                >
                  Structured Trade Intent
                </Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="leading-relaxed text-[11px]"
                >
                  Converts human alpha into objective trade parameters:{' '}
                  <span className="text-[#00ff88]">
                    asset + direction, strength / conviction, horizon, risk cues
                  </span>{' '}
                  plus a confidence score for downstream sizing.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-white/10 rounded-lg p-3 bg-white/5">
              <div className="mt-0.5 h-5 w-5 rounded-full border border-[#00ff88] flex items-center justify-center text-[10px] text-[#00ff88]">
                3
              </div>
              <div>
                <Typography
                  variant="span"
                  color="white"
                  className="text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1"
                >
                  Deterministic Behavior
                </Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="leading-relaxed text-[11px]"
                >
                  Same input, same output — deterministic AI keeps decisions{' '}
                  <span className="font-semibold">reproducible, predictable, and debuggable</span>,
                  without AI &quot;moods&quot;.
                </Typography>
              </div>
            </div>
          </div>

          <Typography
            variant="span"
            color="white"
            className="mt-2 text-[11px] text-white/40 uppercase tracking-[0.18em]"
          >
            FEEDS THE &quot;HOW&quot; AND &quot;WHERE&quot; AGENTS WITH CLEAN, OBJECTIVE SIGNALS.
          </Typography>
        </div>
      )
    },
    {
      number: '02',
      title: 'AGENT HOW',
      subtitle: 'Your Trading Clone',
      description:
        'Your trading clone. Takes each validated signal and executes it in your style — tuning position sizing, leverage, and risk management to your preferences so you copy the edge, not someone else’s exact trade.',
      rightContent: (
        <div className="w-full h-full flex flex-col p-10 gap-6">
          <div className="flex items-center justify-between mb-4">
            <Typography
              variant="span"
              color="white"
              className="text-[10px] tracking-[0.2em] uppercase text-white/60"
            >
              What it does
            </Typography>
            <Typography
              variant="span"
              color="#00ff88"
              className="text-[10px] tracking-[0.18em] uppercase"
            >
              Risk Engine · Trading Clone
            </Typography>
          </div>

          <Typography
            variant="span"
            color="white"
            className="text-xs md:text-sm text-white/80 leading-relaxed max-w-md"
          >
            AGENT HOW is your <span className="font-semibold">24/7 trading presence</span>. It takes
            structured intent from AGENT WHAT and expresses it according to{' '}
            <span className="font-semibold">your</span> risk style — not the signal source&apos;s.
          </Typography>

          <div className="space-y-3 text-xs text-white/80">
            <div className="flex items-start gap-3 border border-white/10 rounded-lg p-3 bg-white/5">
              <div className="mt-0.5 h-5 w-5 rounded-full border border-[#00ff88] flex items-center justify-center text-[10px] text-[#00ff88]">
                1
              </div>
              <div>
                <Typography
                  variant="span"
                  color="white"
                  className="text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1"
                >
                  Position Sizing
                </Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="leading-relaxed text-[11px]"
                >
                  Sizes each trade to your configured risk tolerance — for example 1–2% per idea vs
                  5–10% for higher conviction — using conviction, horizon, and market context.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-white/10 rounded-lg p-3 bg-white/5">
              <div className="mt-0.5 h-5 w-5 rounded-full border border-[#00ff88] flex items-center justify-center text-[10px] text-[#00ff88]">
                2
              </div>
              <div>
                <Typography
                  variant="span"
                  color="white"
                  className="text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1"
                >
                  Leverage &amp; Exposure
                </Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="leading-relaxed text-[11px]"
                >
                  Applies leverage and exposure limits you set: max leverage, per-trade caps, and
                  portfolio constraints, while still expressing the edge.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-white/10 rounded-lg p-3 bg-white/5">
              <div className="mt-0.5 h-5 w-5 rounded-full border border-[#00ff88] flex items-center justify-center text-[10px] text-[#00ff88]">
                3
              </div>
              <div>
                <Typography
                  variant="span"
                  color="white"
                  className="text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1"
                >
                  Risk Parameters
                </Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="leading-relaxed text-[11px]"
                >
                  Turns risk cues into concrete stop-loss and take-profit rules so execution stays
                  consistent and emotionless.
                </Typography>
              </div>
            </div>
          </div>

          <Typography
            variant="span"
            color="white"
            className="mt-2 text-[11px] text-white/40 uppercase tracking-[0.18em]"
          >
            YOU COPY THE EDGE, BUT TRADE IT LIKE YOU — NOT LIKE THE ORIGINAL SOURCE.
          </Typography>
        </div>
      )
    },
    {
      number: '03',
      title: 'AGENT WHERE',
      subtitle: 'Best Execution',
      description:
        'Venue selection and monitoring. Routes trades to the best non-custodial venue, executes on-chain, and then watches positions 24/7 to manage exits, liquidations, and risk — without ever taking custody of your funds.',
      rightContent: (
        <div className="w-full h-full flex flex-col p-10 gap-6">
          <div className="flex items-center justify-between mb-4">
            <Typography
              variant="span"
              color="white"
              className="text-[10px] tracking-[0.2em] uppercase text-white/60"
            >
              What it does
            </Typography>
            <Typography
              variant="span"
              color="#00ff88"
              className="text-[10px] tracking-[0.18em] uppercase"
            >
              Venue Routing · 24/7 Monitoring
            </Typography>
          </div>

          <Typography
            variant="span"
            color="white"
            className="text-xs md:text-sm text-white/80 leading-relaxed max-w-md"
          >
            AGENT WHERE is the <span className="font-semibold">execution and monitoring layer</span>
            . It picks the best non-custodial venue (primarily Ostium on Arbitrum) and then watches
            positions continuously to manage exits and liquidation risk — while your funds stay in
            your wallet.
          </Typography>

          <div className="space-y-3 text-xs text-white/80">
            <div className="flex items-start gap-3 border border-white/10 rounded-lg p-3 bg-white/5">
              <div className="mt-0.5 h-5 w-5 rounded-full border border-[#00ff88] flex items-center justify-center text-[10px] text-[#00ff88]">
                1
              </div>
              <div>
                <Typography
                  variant="span"
                  color="white"
                  className="text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1"
                >
                  Venue Selection
                </Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="leading-relaxed text-[11px]"
                >
                  Routes orders to venues like <span className="text-[#00ff88]">Ostium</span> based
                  on liquidity, fees, pairs, and on-chain conditions to target best execution.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-white/10 rounded-lg p-3 bg-white/5">
              <div className="mt-0.5 h-5 w-5 rounded-full border border-[#00ff88] flex items-center justify-center text-[10px] text-[#00ff88]">
                2
              </div>
              <div>
                <Typography
                  variant="span"
                  color="white"
                  className="text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1"
                >
                  Non-Custodial Perps
                </Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="leading-relaxed text-[11px]"
                >
                  Uses Ostium&apos;s delegation model so the agent can open and close perpetual
                  positions but <span className="font-semibold">can&apos;t withdraw your funds</span>
                  — assets stay in your wallet.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-white/10 rounded-lg p-3 bg-white/5">
              <div className="mt-0.5 h-5 w-5 rounded-full border border-[#00ff88] flex items-center justify-center text-[10px] text-[#00ff88]">
                3
              </div>
              <div>
                <Typography
                  variant="span"
                  color="white"
                  className="text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1"
                >
                  24/7 Monitoring
                </Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="leading-relaxed text-[11px]"
                >
                  Watches prices and funding in real time to execute stops, take-profit, and manage
                  liquidation risk — even when you&apos;re offline.
                </Typography>
              </div>
            </div>
          </div>

          <Typography
            variant="span"
            color="white"
            className="mt-2 text-[11px] text-white/40 uppercase tracking-[0.18em]"
          >
            FULLY ON-CHAIN, FULLY NON-CUSTODIAL — YOU CAN REVOKE ACCESS AT ANY TIME.
          </Typography>
        </div>
      )
    }
  ];

  // Scroll, touch and key interactions removed: interaction is now hover/click based

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
    <div className="relative py-20">
      <div
        ref={containerRef}
        className="sticky top-0 bg-black text-white font-mono flex overflow-hidden z-50 py-5"
      >
        {/* Left Section */}
        <div className="w-1/2 flex flex-col border-r border-gray-800 relative">
          {/* Vertical divider with tick marks and progress line - show for all steps */}
          <div className="absolute right-0 top-0 bottom-0 w-px">
            {/* Background line (grey) */}
            <div className="absolute top-0 bottom-0 w-px bg-white/20"></div>

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
            <div className="absolute bottom-24 right-4 text-white text-sm z-10">
              {currentData.number}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col p-10 pt-20 space-y-8">
            {/* Header */}
            <div>
              <Typography
                variant="span"
                color="white"
                className="text-[10px] tracking-[0.3em] text-white/60 uppercase mb-3 block"
              >
                HOW MAXXIT TRADES FOR YOU
              </Typography>
              <Typography
                variant="h4"
                color="white"
                className="uppercase mb-3"
              >
                THREE AGENTS · ONE FLOW
              </Typography>
              <Typography
                variant="span"
                color="white"
                className="text-[12px] text-white/60 max-w-md"
              >
                Think of this as a 3-step pipeline. Hover or tap an agent row below to expand it and
                see how it fits into the trading flow.
              </Typography>
            </div>

            {/* Accordion */}
            <div className="flex-1 flex flex-col gap-3">
              {steps.map((step, index) => {
                const isActive = index === currentStep;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onMouseEnter={() => setCurrentStep(index)}
                    onFocus={() => setCurrentStep(index)}
                    onClick={() => setCurrentStep(index)}
                    className={`w-full text-left border rounded-lg px-4 py-3 transition-colors ${
                      isActive
                        ? 'border-[#00ff88] bg-[#00ff88]/10'
                        : 'border-white/15 bg-transparent hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="span"
                          color="#00ff88"
                          className="text-[10px] tracking-[0.25em] uppercase"
                        >
                          {step.number}
                        </Typography>
                        <Typography
                          variant="span"
                          color="white"
                          className="text-sm font-semibold tracking-wide"
                        >
                          {step.title}
                        </Typography>
                      </div>
                      <span className="text-xs text-white/40 tracking-[0.2em] uppercase">
                        {isActive ? 'OPEN' : 'VIEW'}
                      </span>
                    </div>
                    {isActive && (
                      <div className="mt-3 border-t border-[#00ff88]/40 pt-3">
                        <Typography
                          variant="span"
                          color="black"
                          className="bg-[#00ff88] px-3 py-1 mb-3 inline-block text-[10px] tracking-[0.18em]"
                        >
                          {step.subtitle}
                        </Typography>
                        
                        <p className="text-md    text-white/80 leading-relaxed max-w-md">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </button>
                );
              })}
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