"use client";

import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  Clock, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Facebook, 
  Microscope, 
  Send
} from 'lucide-react';

export default function Footer() {
  const colors = {
    primary: "#3B82F6",    
    background: "#111827", 
  };

  const navCol1 = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" }
  ];

  const navCol2 = [
    { name: "Industries", href: "/industries" },
    { name: "Compliance", href: "/compliance" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <footer className="bg-[#111827] text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(${colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* 🟦 1. Brand Identity Panel */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Microscope size={28} className="text-[#3B82F6]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter uppercase">NovaHelix</span>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#3B82F6]">Labs</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Innovative engineering and infrastructure solutions for the pharmaceutical, biotechnology, and healthcare industries across India.
            </p>
            <div className="flex gap-4 pt-4">
              {[Linkedin, Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* 🟦 2. Navigation Hub - UPDATED 2-LINE SPACING */}
          <div className="lg:col-span-4">
            {/* mb-12 creates the required visual gap (approx 2 lines) between header and links */}
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3B82F6] mb-20">
              Navigation 
            </h4>
            <div className="grid grid-cols-2 gap-4 md:gap-8 mt-8">
              <ul className="space-y-6 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                {navCol1.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] scale-0 group-hover:scale-100 transition-transform shrink-0" />
                      <span className="whitespace-nowrap">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-6 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                {navCol2.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] scale-0 group-hover:scale-100 transition-transform shrink-0" />
                      <span className="whitespace-nowrap">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 🟦 3. Technical Gateway - UPDATED SPACING */}
          <div className="lg:col-span-4 mt-12 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-none border-white/5">
            {/* Consistent mb-12 applied here for the Technical Gateway section */}
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3B82F6] mb-12">
              Technical Gateway
            </h4>
            
            <div className="space-y-8 mt-8">
              <a href="https://wa.me/918248230071" className="flex items-center gap-6 p-7 rounded-[1.75rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all shadow-lg">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">WhatsApp Support</p>
                  <p className="text-base font-bold tracking-tight text-white">+91 8248230071</p>
                </div>
              </a>

              <a href="mailto:aukustin03@gmail.com" className="flex items-center gap-6 p-7 rounded-[1.75rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all shadow-lg">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Email Inquiry</p>
                  <p className="text-base font-bold lowercase text-white">aukustin03@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 px-7 pt-4">
                <div className="w-12 h-12 flex items-center justify-center text-slate-500">
                  <Clock size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Operational Hours</p>
                  <p className="text-sm font-bold text-slate-300">Mon — Fri: 9:00 AM — 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🟦 4. Bottom Footer Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center text-center gap-8">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] max-w-[280px] md:max-w-none leading-relaxed">
              © 2026 NovaHelix Labs. Precision Infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="w-full max-w-[450px] relative group">
            <input 
              type="email" 
              placeholder="ENTER EMAIL FOR INDUSTRY UPDATES" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 pr-24 text-[10px] font-bold tracking-[0.2em] focus:outline-none focus:border-[#3B82F6]/50 uppercase transition-all"
            />
            <button className="absolute right-3 top-3 bottom-3 bg-[#3B82F6] text-white px-8 rounded-xl hover:opacity-90 active:scale-95 transition-all flex items-center justify-center">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}