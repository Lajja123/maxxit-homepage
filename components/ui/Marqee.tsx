"use client";

import Image from "next/image";
import eigen from "@/assets/eigenai.webp"

const EigenMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black py-4 border-y border-white/10">
      <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 opacity-80 hover:opacity-100 transition"
          >
            
            <span className="text-sm md:text-base text-white/70">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EigenMarquee;
