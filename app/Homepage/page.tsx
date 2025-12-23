import Hero from "@/components/Home/hero";
import { ScrollMarquee } from "@/components/ui/ScrollMarquee";
import React from "react";
import Layers from "@/components/Home/Layers";
import Clubs from "@/components/Home/Clubs";

function Homepage() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <ScrollMarquee
        className="overflow-hidden w-full"
        text="THE DECENTRALIZED TRADING ECONOMY"
        textClassName="text-7xl md:text-9xl font-bold leading-none whitespace-nowrap"
      />
      <Layers />
      <Clubs/>
    </div>
  );
}

export default Homepage;
