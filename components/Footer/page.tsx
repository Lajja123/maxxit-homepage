import Image from "next/image";
import favicon from "@/assets/favicon.png";

export default function Footer() {
    return (
      <footer className="bg-black text-white border border-white/20 ">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/20 bg-black relative z-50">
          {/* Column 1 */}
          <div className="p-6 border-r border-white/20 space-y-3">
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">Work</p>
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">Services</p>
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">About</p>
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">Contact</p>
          </div>
  
          {/* Column 2 */}
          <div className="p-6 border-r border-white/20 space-y-3">
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">Instagram</p>
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">Dribbble</p>
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">Behance</p>
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">LinkedIn</p>
          </div>
  
          <div className="p-6 border-r border-white/20 space-y-3">
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">Instagram</p>
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">Dribbble</p>
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">Behance</p>
            <p className="text-sm text-[#f5f5f0] hover:text-white cursor-pointer">LinkedIn</p>
          </div>
  
          {/* Column 4 */}
          <div className="p-6 space-y-3">
            <p className="text-sm text-[#f5f5f0]">+91 xxxxxxxxxx</p>
            <p className="text-sm text-[#f5f5f0]">hello@maxxit.io</p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row border-b border-white/20 ">
          {/* Diagonal box (left) */}
          <div className="relative w-1/3 border-r border-white/20 flex items-center justify-center">
            <Image src={favicon} alt="Maxxit" width={100} height={100} className="w-1/3 object-cover quality-100" />
            <div className="absolute bottom-4 left-6 text-xs text-[#f5f5f0]">
              © Maxxit {new Date().getFullYear()} All rights reserved
            </div>
            
          </div>
          {/* Brand */}
          <div className=" relative w-full mx-auto flex items-center justify-center">
            <h1 className="text-[22vw] leading-none font-bold tracking-tight">
              Maxxit
            </h1>
          </div>
  
          
        </div>
      </footer>
    );
  }
  