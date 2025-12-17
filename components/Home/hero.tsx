"use client";

import React from "react";
import Button from "@/components/ui/Button"
import Typography from "@/theme/Typography"
import Image from "next/image";
import eigen from "@/assets/eigenai.webp"
import { CountUp } from "../ui/CountUp";


// Animated Title
const AnimatedTitle = () => {
  return (
    <div className="text-center max-w-4xl mx-auto relative ">
      <Typography variant="h1" weight="bold" align="center">
        <span className="block">
          {["Insights", "that", "Lead"].map((word, index) => (
            <span
              key={word}
              className="inline-block animate-blur-reveal text-[#F5F5F0]"
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "forwards" }}
            >
              {word}&nbsp;
            </span>
          ))}
        </span>
        <span className="block mt-2">
          <span
            className="inline-block animate-blur-reveal text-[#F5F5F0]"
            style={{ animationDelay: "0.24s", animationFillMode: "forwards" }}
          >
            with&nbsp;
          </span>
          <span
            className="inline-block animate-blur-reveal text-[#F5F5F0]"
            style={{ animationDelay: "0.32s", animationFillMode: "forwards" }}
          >
            <span className="text-[#00FF88] italic">
              Proven
            </span>
          </span>
          &nbsp;
          <span
            className="inline-block animate-blur-reveal text-[#F5F5F0]"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Intelligence
          </span>
        </span>
      </Typography>
    </div>
  );
};

export default function Hero() {
  const text ="THE DECENTRALIZED TRADING ECONOMY"
  return (
    <section className="relative min-h-screen overflow-hidden ">
      {/* Subtle gradient background */}
      
    

      {/* Main Content */}
      <div className=" mx-auto  px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-start items-center">
        <div className="text-center py-20">
          <div className="mb-5 flex gap-3 items-center justify-center border rounded-full border-white/60 mx-auto p-2 w-1/3 bg-white">
        <span className="text-sm md:text-base text-black/70">
              Powered by{" "}
            </span>
            <div className="bg-white">
            <Image
              src={eigen}
              alt="Eigen AI"
              width={100}
              height={100}
              className="object-contain"
            />
            </div></div>
          {/* Title */}
          <AnimatedTitle />

          {/* Subtitle */}
          <div 
            className="mt-6 lg:mt-8 max-w-2xl mx-auto animate-blur-reveal "
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <Typography variant="body" align="center" className="text-[#8A8A80]" weight="normal">
            Three AI agents work together: one finds the best alpha from research institutes and crypto Twitter, one becomes your 24/7 trading clone that sets position size and leverage, and one routes trades to the optimal venue for gasless, non-custodial execution.


            </Typography>
           
          </div>

          {/* CTA Buttons */}
          <div
            className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center gap-4 animate-blur-reveal "
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            <Button variant="black">Launch App</Button>
            <Button variant="white">Share Your Signals</Button>
          </div>

          <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-xl overflow-hidden bg-black/40 backdrop-blur">
      
      {/* Stat 1 */}
      <div className="p-8 text-center border-b md:border-b-0 md:border-r border-white/10">
        <div className="text-4xl font-semibold text-white">
          <CountUp end={261} suffix="+" />
        </div>
        <p className="mt-2 text-sm text-gray-400">
        TRADING PAIRS        </p>
      </div>

      {/* Stat 2 */}
      <div className="p-8 text-center border-b md:border-b-0 md:border-r border-white/10">
        <div className="text-4xl font-semibold text-white">
      24/7  
        </div>
        <p className="mt-2 text-sm text-gray-400">
        AUTOMATED        </p>
      </div>

      {/* Stat 3 */}
      <div className="p-8 text-center">
        <div className="text-4xl font-semibold text-white">
          <CountUp end={100} suffix="%" />
        </div>
        <p className="mt-2 text-sm text-gray-400">
        NON-CUSTODIAL        </p>
      </div>

    </div>
   
        {/* </div>
        <div className="relative py-20 overflow-hidden">
  
  <div className="relative rotate-[-5deg] bg-white overflow-hidden">
    
    <div
      className="flex whitespace-nowrap "
      style={{ animation: "marquee 25s linear infinite" }}
    >
      <span className="px-8 py-6 text-black text-xl font-bold tracking-wide">
{text.repeat(4)}      </span>
      <span className="px-8 py-6 text-black text-xl font-bold tracking-wide">
        {text}
      </span>
    </div>

  </div> */}


    
    </div>
      </div>
    </section>
  );
}
