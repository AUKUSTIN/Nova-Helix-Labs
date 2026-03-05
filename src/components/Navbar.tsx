"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Microscope, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const colors = {
    primary: "#3B82F6",    // Medical Blue
    text: "#111827",       // Deep Slate
    background: "#F9FAFB"  // Soft Gray
  };

  // 🟦 Updated Navigation Links to include Careers
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" }, // NEW LINK ADDED
    { name: "Compliance", href: "/compliance" }
  ];

  return (
    <header className="fixed top-0 z-[150] w-full bg-white border-b border-gray-100 shadow-sm">
      {/* 🟦 1. Top Contact Bar - Mobile Friendly Flex-Wrap */}
      <div className="bg-[#111827] text-white py-2 px-4 md:px-10 text-[9px] md:text-[10px] tracking-widest uppercase flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <div className="flex items-center gap-2">
          <MapPin size={10} style={{ color: colors.primary }} />
          <span>Bengaluru, India</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-90 font-medium items-center">
          <div className="flex items-center gap-2">
            <Phone size={10} style={{ color: colors.primary }} />
            <span>+91 8248230071</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={10} style={{ color: colors.primary }} />
            <span className="lowercase font-normal">aukustin03@gmail.com</span>
          </div>
        </div>
      </div>

      {/* 🟦 2. Main Navigation Bar */}
      <div className="flex justify-between items-center py-4 px-6 md:px-10 max-w-7xl mx-auto w-full relative">
        <Link href="/" className="flex items-center gap-3 shrink-0 group z-50">
          <div className="p-2 rounded-lg bg-[#F3F4F6] transition-colors group-hover:bg-[#93C5FD]/20">
            <Microscope size={24} color={colors.primary} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-black tracking-tighter" style={{ color: colors.text }}>
              NOVAHELIX
            </span>
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: colors.primary }}>
              LABS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400 items-center ml-auto pr-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#3B82F6] transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link 
          href="/contact" 
          className="hidden lg:block text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all shadow-md rounded-sm active:scale-95"
          style={{ backgroundColor: colors.primary }}
        >
          Contact Us
        </Link>

        {/* 🟦 3. Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 z-50 text-[#111827]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🟦 4. Mobile Overlay - Updated with Careers Link */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="fixed inset-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center p-10 xl:hidden"
            >
              <div className="flex flex-col items-center gap-6 w-full overflow-y-auto">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-black uppercase tracking-tighter text-[#111827] hover:text-[#3B82F6] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full max-w-xs text-center text-white py-5 text-xs font-black uppercase tracking-[0.3em] shadow-xl rounded-xl mt-4"
                  style={{ backgroundColor: colors.primary }}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}