"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  ThermometerSnowflake, 
  ShieldCheck, 
  X, 
  CheckCircle2, 
  Building2, 
  Microscope, 
  HardHat, 
  RefreshCcw, 
  ClipboardCheck, 
  ArrowUpRight
} from 'lucide-react';

import FadeUp from '../../components/FadeUp'; 

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<any>(null);

  // 🟦 FIX: Prevent background body scroll and manage overflow for mobile
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeService]);

  const colors = {
    primary: "#3B82F6",
    accent: "#22C55E",
    text: "#111827",
    background: "#F9FAFB"
  };

  const services = [
    { 
      id: "01",
      title: "Cleanroom EPC", 
      icon: <Layers size={32} />,
      image: "https://images.pexels.com/photos/9574418/pexels-photo-9574418.jpeg",
      desc: "ISO-classified environments featuring modular systems and HEPA/ULPA filtration.", 
      passage: "NovaHelix Labs specializes in the design and construction of cleanroom environments that meet international standards. Key features include modular cleanroom wall and ceiling systems, HEPA/ULPA filtration, and precise airflow management for pharmaceutical and semiconductor manufacturing.",
      tag: "ISO 14644 Compliant"
    },
    { 
      id: "02",
      title: "Laboratory Infrastructure", 
      icon: <Microscope size={32} />,
      image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg",
      desc: "Advanced research facilities tailored for safety, adaptability, and scientific accuracy.", 
      passage: "We develop advanced laboratory facilities for research institutions, hospitals, and biotech companies. Solutions include biosafety infrastructure, chemical-resistant surfaces, environmental monitoring, and specialized modular workstations to support safe scientific operations.",
      tag: "BSL-2/3 Ready"
    },
    { 
      id: "03",
      title: "Sterile Facility Engineering", 
      icon: <ShieldCheck size={32} />,
      image: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg",
      desc: "Aseptic production zones and isolation rooms engineered for maximum hygiene.", 
      passage: "Our sterile facility solutions support aseptic production, sterile compounding, and healthcare isolation rooms. We integrate positive/negative pressure control and high-efficiency filtration to ensure the highest levels of safety and operational reliability.",
      tag: "Aseptic Design"
    },
    { 
      id: "04",
      title: "Technical HVAC", 
      icon: <ThermometerSnowflake size={32} />,
      image: "https://images.pexels.com/photos/13820151/pexels-photo-13820151.jpeg",
      desc: "Precision climate and contamination control systems for sensitive environments.", 
      passage: "We develop specialized HVAC systems designed specifically for cleanrooms and laboratories. These systems provide precise temperature and humidity control, energy-efficient ventilation, and pressure cascade management to maintain stable environmental conditions.",
      tag: "Precision Climate"
    },
    { 
      id: "05",
      title: "Turnkey EPC Services", 
      icon: <HardHat size={32} />,
      image: "https://images.pexels.com/photos/9629674/pexels-photo-9629674.jpeg",
      desc: "Complete project lifecycle management from feasibility analysis to commissioning.", 
      passage: "NovaHelix Labs offers comprehensive Engineering, Procurement, and Construction services. Our integrated approach manages every stage—technical planning, procurement, construction, and validation—through a single, reliable engineering partner.",
      tag: "Lifecycle Support"
    },
    { 
      id: "06",
      title: "Upgrades & Modernization", 
      icon: <RefreshCcw size={32} />,
      image: "https://images.pexels.com/photos/9574410/pexels-photo-9574410.jpeg",
      desc: "Enhancing existing infrastructure to meet new regulatory standards and efficiency.", 
      passage: "We provide modernization solutions that enhance facility performance while minimizing disruption. Services include cleanroom expansion, HVAC upgrades, and energy efficiency improvements to ensure infrastructure remains competitive and compliant.",
      tag: "Regulatory Updates"
    },
    { 
      id: "07",
      title: "Testing & Validation", 
      icon: <ClipboardCheck size={32} />,
      image: "https://images.pexels.com/photos/7230835/pexels-photo-7230835.jpeg",
      desc: "Comprehensive performance verification and regulatory compliance testing.", 
      passage: "Before operation, we perform rigorous airflow testing, filter integrity checks (DOP), and pressure validation. These commissioning procedures ensure that all infrastructure systems meet regulatory standards and operate safely from day one.",
      tag: "GMP Validation"
    }
  ];

  return (
    <main className="min-h-screen pt-20 overflow-x-hidden" style={{ backgroundColor: colors.background }}>
      
      {/* 🟦 1. Hero Section - Mobile Optimized Typography */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-white border-b border-slate-100 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
           <div className="text-[8rem] md:text-[25rem] font-black text-[#111827] select-none uppercase tracking-tighter">EXPERT</div>
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(${colors.primary} 1px, transparent 1px), linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#3B82F6] font-bold text-[10px] md:text-xs uppercase tracking-[0.8em] mb-4 block">Technical Solutions</span>
            <h1 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter text-[#111827] leading-[0.9] md:leading-[0.8]">
              Our <br className="md:hidden" /> <span className="text-[#3B82F6]">Services.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 🟦 2. Service Grid - Responsive Stacking */}
      <section className="py-16 md:py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div 
                onClick={() => setActiveService(service)}
                className="group relative bg-white rounded-[2rem] border border-slate-100 hover:border-[#3B82F6]/30 transition-all cursor-pointer shadow-sm hover:shadow-xl overflow-hidden"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#111827]/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#F9FAFB] text-[#3B82F6] flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:text-white transition-all">{service.icon}</div>
                    <span className="text-3xl font-black text-slate-50 group-hover:text-[#3B82F6]/5 transition-colors">{service.id}</span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#111827] mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6 line-clamp-2">{service.desc}</p>
                  <div className="flex items-center justify-between">
                     <span className="text-[8px] font-black uppercase tracking-widest text-[#22C55E] bg-[#22C55E]/5 px-3 py-1 rounded-full">{service.tag}</span>
                     <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity">View Details <ArrowUpRight size={14} /></div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* 🟦 3. Technical Modal - FIXED Z-INDEX & SCROLL FOR MOBILE */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[#111827]/90 backdrop-blur-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-6xl w-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button - Fixed/Sticky for mobile visibility */}
              <button 
                onClick={() => setActiveService(null)} 
                className="fixed md:absolute top-6 right-6 z-[250] text-white md:text-slate-400 hover:text-red-500 bg-[#111827]/60 md:bg-transparent p-3 rounded-full backdrop-blur-md md:backdrop-blur-none transition-all shadow-lg md:shadow-none"
              >
                <X size={28} strokeWidth={3} />
              </button>

              <div className="md:w-2/5 bg-[#F9FAFB] flex flex-col border-r border-slate-100 shrink-0 h-[300px] md:h-auto relative">
                <Image src={activeService.image} alt={activeService.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F9FAFB] via-transparent" />
                <div className="p-8 md:p-10 relative mt-auto">
                  <div className="w-16 h-16 rounded-2xl bg-white text-[#3B82F6] flex items-center justify-center shadow-sm mb-6">{activeService.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#111827]">{activeService.title}</h3>
                </div>
              </div>

              <div className="flex-1 p-8 md:p-16 relative bg-white flex flex-col justify-center">
                <div className="space-y-6 md:space-y-8">
                  <div className="w-12 h-1 bg-[#22C55E]" />
                  <p className="text-slate-600 text-base md:text-xl leading-relaxed font-medium">{activeService.passage}</p>
                  <div className="pt-6 flex flex-wrap gap-4">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <button className="w-full bg-[#3B82F6] text-white px-8 md:px-10 py-4 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg hover:opacity-90">Technical Inquiry</button>
                    </Link>
                    <button onClick={() => setActiveService(null)} className="w-full sm:w-auto border-2 border-slate-100 px-8 md:px-10 py-4 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-slate-50 transition-colors">Return to List</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}