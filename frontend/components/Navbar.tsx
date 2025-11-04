'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import ScrollLink from './ScrollLink';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3" aria-label="Adpion home">
            <Image src="/brand/logo.png" alt="Adpion" width={160} height={48} priority />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink targetId="services" className="text-gray-300 hover:text-primary-400 text-sm font-medium">Services</ScrollLink>
            <ScrollLink targetId="how-it-works" className="text-gray-300 hover:text-primary-400 text-sm font-medium">How It Works</ScrollLink>
            <ScrollLink targetId="contact" className="text-gray-300 hover:text-primary-400 text-sm font-medium">Contact</ScrollLink>
            
            <a href="https://akms.bluemediagroup.cn/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 text-sm font-medium transition-colors">
              Login
            </a>

            <a href="https://wa.me/+84762866888" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-primary-600 hover:to-secondary-600 transition-all">
              Get Started
            </a>
          </div>
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setOpen(v => !v)} aria-label="Open menu">
            <FaBars />
          </button>
        </div>
      </div>
      {open ? (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <ScrollLink onClick={() => setOpen(false)} targetId="services" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Services</ScrollLink>
            <ScrollLink onClick={() => setOpen(false)} targetId="how-it-works" className="block px-3 py-2 text-gray-300 hover:text-primary-400">How It Works</ScrollLink>
            <ScrollLink onClick={() => setOpen(false)} targetId="contact" className="block px-3 py-2 text-gray-300 hover:text-primary-400">Contact</ScrollLink>
            
            <a 
              href="https://akms.bluemediagroup.cn/" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 text-gray-300 hover:text-primary-400 font-medium"
            >
              Login
            </a>
            
            <a 
              href="https://wa.me/+84762866888" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg text-center font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
