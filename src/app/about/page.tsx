"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Target, 
  Settings, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Building2,
  Zap,
  ClipboardCheck,
  X,
  Search,
  Truck,
  FlaskConical,
  HardHat
} from 'lucide-react';

import FadeUp from '../../components/FadeUp'; 

export default function AboutPage() {
  const [activeDetail, setActiveDetail] = useState<any>(null);

  const colors = {
    primary: "#3B82F6",    // Medical Blue
    accent: "#22C55E",     // Healing Green
    text: "#111827",       // Deep Slate
    background: "#F9FAFB"  // Soft Gray
  };

  const coreValues = [
    { 
      title: "Excellence in Engineering", 
      icon: <Settings size={24} />,
      passage: "We maintain the highest standards in design and construction, ensuring precision in industries where environmental control is critical."
    },
    { 
      title: "Integrity & Transparency", 
      icon: <ShieldCheck size={24} />,
      passage: "Trust is our foundation. We operate with honesty and accountability in every aspect of our work."
    },
    { 
      title: "Innovation & Technology", 
      icon: <Zap size={24} />,
      passage: "We adopt modern engineering techniques and intelligent systems to deliver future-ready facilities."
    },
    { 
      title: "Client Partnership", 
      icon: <Users size={24} />,
      passage: "We work closely with clients to deliver infrastructure solutions specifically customized to their operational needs."
    },
    { 
      title: "Quality & Compliance", 
      icon: <CheckCircle2 size={24} />,
      passage: "Our facilities align with ISO standards, GMP guidelines, and WHO recommendations."
    }
  ];

  const engineeringSteps = [
    { id: "01", title: "Consultation & Planning", icon: <Search size={20} />, passage: "Our team works closely with organizations to understand their operational requirements and translate them into practical engineering solutions." },
    { id: "02", title: "Facility Design", icon: <FlaskConical size={20} />, passage: "We specialize in the development of controlled environments such as cleanrooms, laboratory facilities, and sterile production areas designed for contamination control." },
    { id: "03", title: "Technical HVAC", icon: <Zap size={20} />, passage: "Our specialized HVAC systems maintain strict temperature, humidity, air pressure, and contamination control necessary for pharmaceutical and biotech sectors." },
    { id: "04", title: "Construction", icon: <HardHat size={20} />, passage: "We follow a structured engineering approach that focuses on precision planning, high-quality materials, and modern construction methods." },
    { id: "05", title: "Commissioning", icon: <ClipboardCheck size={20} />, passage: "From concept to final commissioning, we provide end-to-end support to ensure every project is delivered with accuracy, efficiency, and quality." }
  ];

  return (
    <main className="min-h-screen pt-20 overflow-x-hidden" style={{ backgroundColor: colors.background }}>
      
      {/* 🟦 1. Centered Hero - Mobile Optimized */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-white border-b border-slate-100 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
           <div className="text-[10rem] md:text-[25rem] font-black text-[#111827] select-none uppercase tracking-tighter">
             ABOUT
           </div>
        </div>
        
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(${colors.primary} 1px, transparent 1px), linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#3B82F6] font-bold text-[10px] md:text-xs uppercase tracking-[0.8em] mb-4 md:mb-8 block">
              NovaHelix Identity
            </span>
            <h1 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter text-[#111827] leading-[0.9] md:leading-[0.8]">
              Our <br className="md:hidden" /> <span className="text-[#3B82F6]">Story.</span>
            </h1>
            <p className="mt-8 md:mt-12 text-slate-500 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Building the infrastructure that powers India's scientific and healthcare revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🟦 2. Identity Section - Responsive Grid */}
      <section className="py-16 md:py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <FadeUp delay={0.2}>
            <div className="flex flex-col justify-center h-full space-y-8 md:space-y-10 text-center lg:text-left">
              <div className="space-y-6">
                <div className="w-16 h-1.5 rounded-full mx-auto lg:mx-0" style={{ backgroundColor: colors.accent }} />
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-[#111827]">
                  Engineering <br /><span style={{ color: colors.primary }}>Reliability.</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                  <p>NovaHelix Labs is a specialized engineering and infrastructure company dedicated to designing and delivering advanced controlled environments.</p>
                  <p>In industries where precision and contamination control are essential, infrastructure plays a critical role in maintaining operational reliability.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm relative overflow-hidden group">
                  <h4 className="font-black text-[#3B82F6] uppercase text-[10px] tracking-widest mb-3">Our Vision</h4>
                  <p className="text-[11px] text-slate-500 font-bold uppercase leading-relaxed">To become a trusted leader in world-class biotech infrastructure.</p>
                </div>
                <div className="p-6 md:p-8 rounded-3xl bg-[#111827] text-white shadow-xl relative overflow-hidden group">
                  <h4 className="font-black text-[#22C55E] uppercase text-[10px] tracking-widest mb-3">Our Mission</h4>
                  <p className="text-[11px] text-slate-300 font-bold uppercase leading-relaxed">Designing scalable solutions supporting India's scientific growth.</p>
                </div>
              </div>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <div className="relative h-[300px] md:h-full min-h-[400px] w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white group">
              <Image src="https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg" alt="Engineering" fill className="object-cover" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 🟦 3. Approach - Mobile Optimized List */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#111827] mb-6">Our Structured Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-3 md:space-y-4">
              {engineeringSteps.map((step, i) => (
                <div key={i} onClick={() => setActiveDetail(step)} className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all cursor-pointer group shadow-sm">
                  <span className="text-xl md:text-2xl font-black text-slate-200 group-hover:text-[#3B82F6]">{step.id}</span>
                  <div className="p-2 md:p-3 rounded-lg bg-white text-slate-400 group-hover:bg-[#3B82F6] group-hover:text-white transition-all">{step.icon}</div>
                  <h4 className="font-black uppercase text-xs md:text-sm tracking-widest text-[#111827]">{step.title}</h4>
                  <ArrowRight size={16} className="ml-auto text-slate-200 group-hover:text-[#3B82F6]" />
                </div>
              ))}
            </div>
            
            <div className="bg-[#111827] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden">
               <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-6 text-[#3B82F6]">Contributing to Growth</h3>
               <p className="text-slate-300 text-sm md:text-base leading-relaxed">As India expands its healthcare sectors, NovaHelix Labs provides engineering solutions that strengthen research capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟦 4. Values - Responsive Grid */}
      <section className="py-16 md:py-24 text-center px-6 container mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 md:mb-16 text-[#111827]">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {coreValues.map((val, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div onClick={() => setActiveDetail(val)} className="p-6 md:p-8 h-full rounded-2xl bg-white border border-slate-100 group hover:shadow-xl transition-all cursor-pointer">
                <div className="mx-auto mb-6 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-slate-50 text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all">{val.icon}</div>
                <h3 className="text-[10px] font-black uppercase tracking-widest mb-3 text-[#111827]">{val.title}</h3>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* 🟦 Technical Modal - Fully Responsive Scrollable Content */}
      <AnimatePresence>
        {activeDetail && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#111827]/80 backdrop-blur-xl">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-5xl w-full bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
              
              <div className="md:w-1/3 bg-[#F9FAFB] p-8 md:p-10 flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white text-[#3B82F6] flex items-center justify-center shadow-sm mb-6 md:mb-8">{activeDetail.icon}</div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#111827]">{activeDetail.title}</h3>
              </div>

              <div className="flex-1 p-8 md:p-16 relative flex flex-col justify-center">
                <button onClick={() => setActiveDetail(null)} className="absolute top-4 right-4 md:top-8 md:right-8 text-slate-300 hover:text-red-500"><X size={28} /></button>
                <div className="space-y-6 md:space-y-8">
                  <div className="w-12 h-1 bg-[#22C55E]" />
                  <p className="text-slate-600 text-base md:text-xl leading-relaxed font-medium">{activeDetail.passage}</p>
                  <button onClick={() => setActiveDetail(null)} className="flex items-center gap-4 text-[#111827] font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:text-[#3B82F6]">Return to Overview <ArrowRight size={16} /></button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 🟦 5. Final CTA */}
      <section className="py-16 md:py-24 bg-[#111827] text-center px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Supporting India’s <span style={{ color: colors.accent }}>Scientific</span> Growth</h2>
          <Link href="/contact">
            <button className="bg-[#3B82F6] text-white px-10 md:px-12 py-4 md:py-5 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-[#111827] transition-all flex items-center gap-3 mx-auto shadow-xl">
              Partner With Our Engineers <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}