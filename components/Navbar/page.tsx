'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import logo from "@/assets/logo.webp";
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: 'About', href: '/' },
  { label: 'Analyst', href: '/' },
  { label: 'Pricing', href: '/' },

];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="bg-black border border-gray-800 relative z-50 rounded-full m-5">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="Maxxit" width={100} height={100} />            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <a
                  onClick={() => item.hasDropdown && toggleDropdown(item.label)}
                  className=" cursor-pointer
    relative overflow-hidden
    px-2 py-1
    text-gray-300 hover:text-black
    transition-colors duration-300
    flex items-center space-x-1 text-sm font-medium

    after:absolute after:left-0 after:bottom-0
    after:w-full after:h-[2px]
    after:bg-[#00FF88]
    after:transition-all after:duration-300
    after:z-[-1]

    hover:after:h-full
  "
                >
                  <span className="relative z-10 font-bohemian text-lg">{item.label}</span>

                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </a>


                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                        Documentation
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                        Tutorials
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                        Resources
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>LAUNCH APP</Button>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.hasDropdown && toggleDropdown(item.label)}
                  className="w-full text-left text-gray-300 hover:text-white transition-colors flex items-center justify-between py-2"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#" className="block text-sm text-gray-400 hover:text-white py-1">
                      Documentation
                    </a>
                    <a href="#" className="block text-sm text-gray-400 hover:text-white py-1">
                      Tutorials
                    </a>
                    <a href="#" className="block text-sm text-gray-400 hover:text-white py-1">
                      Resources
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button>Luanch App</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;