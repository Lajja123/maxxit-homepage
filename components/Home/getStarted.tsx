import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import favicon from "@/assets/favicon.png";
import Image from 'next/image';
import Typography from '@/theme/Typography';

export default function GetStartedSection() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-8">
      <div className="w-full ">
        
        {/* Main Container with Border */}
        <div className="bg-black relative border border-white/10 rounded-[3rem] p-16 md:p-24 ">
          
          {/* Top Center Logo/Icon */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center">
            <Image src={favicon} alt="Maxxit" width={100} height={100} className="w-1/3 object-cover quality-100" />

            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-white/20 rounded-tl-3xl" />
          <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-white/20 rounded-tr-3xl" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-white/20 rounded-bl-3xl" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-white/20 rounded-br-3xl" />

          {/* Content */}
          <div className="text-center space-y-12">
            
            {/* Main Heading */}
          
            <Typography variant='h1' color='white' align='center'>
            _Get started_Get started

            </Typography>

            {/* Subheading */}
            <div className="max-w-3xl mx-auto space-y-2">
                <Typography variant='body' align='center' color='green'> TRADE LIKE AN
                INSTITUTION</Typography>
                <Typography variant='body' align='center' color='white'>Best-in-class alpha. 24/7 automated execution. Non-custodial. Transparent. Decentralized.

GET STARTED →</Typography>
             
            </div>

            {/* CTA Button */}
            <div className="pt-8">
             <Button>
                Get Started
             </Button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}