"use client";

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  FileCheck, 
  ClipboardCheck, 
  Award, 
  Activity, 
  CheckCircle2, 
  Building2, 
  Settings,
  HardHat,
  Search,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import FadeUp from '../../components/FadeUp';

export default function CompliancePage() {
  const colors = {
    primary: "#3B82F6",    // Medical Blue (Used for Primary Accents)
    text: "#111827",       // Deep Slate
    background: "#F9FAFB"  // Soft Gray
  };

  const standards = [
    {
      title: "ISO 14644 Standards",
      desc: "Comprehensive airborne particulate cleanliness classification for cleanroom engineering and construction.",
      tag: "International Quality",
      icon: <Settings size={28} />
    },
    {
      title: "WHO-GMP Compliance",
      desc: "Good Manufacturing Practice standards ensuring consistent production and control of pharmaceutical products.",
      tag: "Global Pharma",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "BSL-2 & BSL-3 Safety",
      desc: "Strict biosafety level protocols for laboratory infrastructure and containment air management.",
      tag: "Bio-Containment",
      icon: <Activity size={28} />
    },
    {
      title: "NABH Hospital Standards",
      desc: "Infrastructure requirements for medical facility safety, focusing on sterile environments and infection control.",
      tag: "Healthcare Reliability",
      icon: <Award size={28} />
    }
  ];

  return (
    <main className="min-h-screen pt-20 overflow-x-hidden" style={{ backgroundColor: colors.background }}>
      
      {/* 🟦 1. UPDATED: Centered Large-Scale Hero Section - Mobile Optimized Typography */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-white border-b border-slate-100 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center">
        
        {/* Ghost Typography Backdrop - Scaled for Mobile */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
           <div className="text-[8rem] md:text-[20rem] font-black text-[#111827] select-none uppercase tracking-tighter">
             VALIDATED
           </div>
        </div>

        {/* Technical Blueprint Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(${colors.primary} 1px, transparent 1px), linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#3B82F6] font-bold text-[10px] md:text-xs uppercase tracking-[0.6em] md:tracking-[0.8em] mb-6 md:mb-8 block">
              Safety & Regulatory Framework
            </span>
            <h1 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter text-[#111827] leading-[0.9] md:leading-[0.8]">
              Compliance <br className="md:hidden" /> <span className="text-[#3B82F6]">& Standards.</span>
            </h1>
            <p className="mt-8 md:mt-12 text-slate-500 text-base md:text-xl font-medium max-w-3xl mx-auto leading-relaxed px-4">
              NovaHelix Labs adheres to strict international engineering protocols to ensure your facility meets every regulatory audit requirement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🟦 2. Standards Grid - Responsive Stacking */}
      <section className="py-16 md:py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {standards.map((s, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:border-[#3B82F6]/30 transition-all shadow-sm hover:shadow-xl group h-full flex flex-col">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#F9FAFB] text-[#3B82F6] flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#3B82F6] mb-3 md:mb-4">
                  {s.tag}
                </span>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#111827] mb-3 md:mb-4">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* 🟦 3. Technical Validation List - Mobile Friendly Layout */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
             <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#111827]">Controlled Environment Protocols</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
             <div className="bg-[#111827] p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] text-white">
                <ShieldCheck className="text-[#3B82F6] mb-6 md:mb-8 w-12 h-12 md:w-16 md:h-16" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 md:mb-6">Built for Audit Success</h3>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-0 lg:mb-10">
                   Our multidisciplinary team understands the specific regulatory challenges of each sector, ensuring project delivery that is efficient and audit-ready.
                </p>
             </div>
             <div className="px-2 md:px-0">
                <ul className="space-y-4">
                  {["Air Filtration Systems", "HVAC Validation", "Pressure Control Systems", "Environmental Monitoring"].map(item => (
                    <li key={item} className="flex items-center justify-between border-b border-slate-100 pb-4 text-sm font-bold text-[#111827] gap-4">
                      <span className="leading-tight">{item}</span>
                      <ArrowRight size={16} className="text-[#3B82F6] shrink-0" />
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}