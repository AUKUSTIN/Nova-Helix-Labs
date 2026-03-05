"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Icons
import { 
  Dna, 
  FlaskConical, 
  Stethoscope, 
  Hospital, 
  Activity, 
  Apple, 
  ShieldCheck, 
  Layers, 
  ThermometerSnowflake,
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight,
  Building2,
  X 
} from 'lucide-react';

// Component Imports
import Hero from '../components/Hero';
import Projects from '../components/Projects'; 
import NewsSection from '../components/NewsSection';
import FadeUp from '../components/FadeUp';

export default function Home() {
  const [activeModal, setActiveModal] = useState<any>(null);

  const colors = {
    primary: "#3B82F6",    // Medical Blue
    secondary: "#93C5FD",  // Light Blue
    background: "#F9FAFB", // Soft Gray/White
    cardBg: "#FFFFFF",     // Pure White
    accent: "#22C55E",     // Healing Green
    text: "#111827"        // Deep Slate
  };

  const industryData = [
    { title: "Pharmaceutical", icon: <FlaskConical size={32} />, delay: 0.1, passage: "Supporting OSD and sterile manufacturing with validation-ready infrastructure." },
    { title: "Biotechnology", icon: <Dna size={32} />, delay: 0.2, passage: "Scalable laboratory environments for biotech product development and containment." },
    { title: "Healthcare", icon: <Hospital size={32} />, delay: 0.3, passage: "Modular operating theatres and isolation rooms engineered for sterile conditions." },
    { title: "Medical Devices", icon: <Stethoscope size={32} />, delay: 0.4, passage: "Particle-controlled assembly zones and ESD flooring for medical instruments." },
    { 
      title: "Diagnostic Labs", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
        </svg>
      ), 
      delay: 0.5,
      passage: "Infrastructure optimized for diagnostic accuracy and safe sample handling." 
    },
    { title: "Nutraceuticals", icon: <Apple size={32} />, delay: 0.6, passage: "Hygienic clean production zones ensuring quality through airflow management." }
  ];

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden" style={{ backgroundColor: colors.background, color: colors.text }}>
      
      {/* 🟦 TOP CONTACT BAR - Fixed for Mobile wrapping */}
      <div className="bg-[#111827] text-white py-3 px-4 md:px-10 border-b border-white/10 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] tracking-widest uppercase font-bold gap-3 md:gap-0">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-[#3B82F6]" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
            <a href="https://wa.me/918248230071" target="_blank" className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors">
              <Phone size={12} className="text-[#3B82F6]" />
              <span>+91 8248230071</span>
            </a>
            <a href="mailto:aukustin03@gmail.com" className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors">
              <Mail size={12} className="text-[#3B82F6]" />
              <span className="lowercase font-normal text-slate-300">aukustin03@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <Hero />
      
      <FadeUp delay={0.1}>
        <section style={{ backgroundColor: colors.secondary }} className="py-4 md:py-6 text-center px-4 shadow-sm border-y border-blue-400/20 relative z-20">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 text-[8px] md:text-xs font-black tracking-[0.2em] uppercase" style={{ color: colors.primary }}>
            <span>ISO 14644 Guidelines</span> <span className="hidden md:inline">•</span> <span>GMP Standards</span> <span className="hidden md:inline">•</span> <span>CDSCO Regulations</span>
          </div>
        </section>
      </FadeUp>

      <section className="py-16 md:py-24 px-4 md:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeUp delay={0.2}>
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="w-16 h-1 bg-[#22C55E] mx-auto lg:mx-0" />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              ABOUT <br /> <span style={{ color: colors.primary }}>NOVAHELIX</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              NovaHelix Labs is a premier Turnkey EPC provider specializing in precision infrastructure for the Life Sciences. Based in Bengaluru, we bridge the gap between regulatory requirements and high-performance engineering.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <Link href="/about" className="w-full md:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: colors.primary }}
                  className="relative overflow-hidden group w-full md:min-w-[320px] h-14 md:h-16 rounded-xl flex items-center justify-center text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em] shadow-xl transition-all"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Discover Us <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <motion.div 
                    initial={{ x: "-100%" }} animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.4}>
          <div className="relative h-[350px] md:h-[550px] w-full overflow-hidden shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem] border-4 md:border-8 border-white group">
            <Image src="https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg" alt="Engineering Team" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </FadeUp>
      </section>

      {/* 🟦 Industries Served Section - Fixed line 146 build error */}
      <section className="py-16 md:py-24 bg-[#F9FAFB] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none">
          {/* FIXED: Removed invalid md:size prop */}
          <Dna size={400} className="rotate-45 text-[#3B82F6]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-[#3B82F6] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-4 block">Engineering Excellence</span>
            <h2 className="text-3xl md:text-6xl font-black text-[#111827] uppercase tracking-tighter">Industries We Serve</h2>
            <div className="w-20 h-1 bg-[#22C55E] mx-auto mt-4 md:mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {industryData.map((ind, idx) => (
              <motion.div
                key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: ind.delay }} whileHover={{ y: -8 }}
                onClick={() => setActiveModal(ind)}
                className="group bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-[#3B82F6]/30 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all group-hover:bg-[#3B82F6] group-hover:text-white bg-[#3B82F6]/10 text-[#3B82F6]">
                    {ind.icon}
                  </div>
                  <ArrowUpRight size={20} className="text-slate-300 group-hover:text-[#3B82F6] transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-[#111827] uppercase tracking-tight mb-3">{ind.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                  Tailored infrastructure solutions for {ind.title.toLowerCase()} environments.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-2 relative z-20" style={{ backgroundColor: colors.primary }}><Projects /></div>
      <NewsSection />

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="max-w-xl w-full p-8 md:p-12 shadow-2xl relative border-t-8 rounded-2xl bg-white overflow-y-auto max-h-[90vh]" 
              style={{ borderTopColor: colors.primary }}
            >
              <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-2">
                <X size={24} />
              </button>
              <p style={{ color: colors.accent }} className="font-bold text-[9px] uppercase mb-2">Technical Specification</p>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-none" style={{ color: colors.primary }}>{activeModal.title}</h3>
              <div className="w-12 h-1 bg-slate-100 mb-6" />
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-base">{activeModal.passage}</p>
              <Link href="/services">
                <button style={{ backgroundColor: colors.primary }} className="text-white px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all rounded-md shadow-lg w-full">
                  Full Service Scope
                </button>
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}