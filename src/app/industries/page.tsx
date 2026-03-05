"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Dna, 
  Pill, 
  Hospital, 
  Microscope, 
  ShieldCheck, 
  ArrowRight,
  FlaskConical,
  Activity,
  Building2,
  CheckCircle2,
  Settings,
  Stethoscope,
  GraduationCap
} from 'lucide-react';

import FadeUp from '../../components/FadeUp'; 

export default function IndustriesPage() {
  const colors = {
    primary: "#3B82F6",    // Medical Blue
    accent: "#22C55E",     // Healing Green
    text: "#111827",       // Deep Slate
    background: "#F9FAFB"  // Soft Gray
  };

  const industries = [
    {
      title: "Pharmaceutical Industry",
      icon: <Pill size={32} />,
      image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
      desc: "Highly controlled GMP environments for drug manufacturing, testing, and packaging.",
      benefits: ["Ensures product safety", "Supports GMP compliance", "Improves efficiency"],
      points: ["Cleanroom Infrastructure", "Sterile Production", "Pharmaceutical HVAC"]
    },
    {
      title: "Biotechnology Industry",
      icon: <Dna size={32} />,
      image: "https://images.pexels.com/photos/3735757/pexels-photo-3735757.jpeg",
      desc: "Modern facilities supporting genetic engineering, vaccine development, and testing.",
      benefits: ["Safe research spaces", "Biosafety compliance", "Equipment integration"],
      points: ["Biosafety Laboratories", "Controlled Research Zones", "Advanced Ventilation"]
    },
    {
      title: "Healthcare Infrastructure",
      icon: <Hospital size={32} />,
      image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
      desc: "Sterile medical environments optimized for patient safety and infection control.",
      benefits: ["Improved patient safety", "Sterile surgical zones", "Infection control"],
      points: ["Modular OT Complexes", "Isolation Rooms", "Medical HVAC Systems"]
    },
    {
      title: "Diagnostic Laboratories",
      icon: <Stethoscope size={32} />,
      image: "https://images.pexels.com/photos/7230835/pexels-photo-7230835.jpeg",
      desc: "Contamination-free environments for high-precision medical testing and diagnostics.",
      benefits: ["Accurate test results", "Safe sample handling", "Reduced contamination"],
      points: ["Sample Processing Labs", "Molecular PCR Setup", "Environmental Monitoring"]
    },
    {
      title: "Medical Device Manufacturing",
      icon: <Settings size={32} />,
      image: "https://images.pexels.com/photos/13820151/pexels-photo-13820151.jpeg",
      desc: "Controlled manufacturing zones for sensitive medical equipment and instruments.",
      benefits: ["Product quality protection", "Manufacturing precision", "Regulatory alignment"],
      points: ["Cleanroom Assembly", "Contamination Control", "Precision HVAC"]
    },
    {
      title: "Research & Academic",
      icon: <GraduationCap size={32} />,
      image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg",
      desc: "Advanced laboratory environments tailored for scientific experimentation and innovation.",
      benefits: ["Supports innovation", "Safe experimentation", "Tailored lab layouts"],
      points: ["Scientific Lab Design", "Infrastructure Planning", "Safety Systems"]
    }
  ];

  return (
    <main className="min-h-screen pt-20 overflow-x-hidden" style={{ backgroundColor: colors.background }}>
      
      {/* 🟦 1. Hero Section */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-white border-b border-slate-100 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
           <div className="text-[8rem] md:text-[25rem] font-black text-[#111827] select-none uppercase tracking-tighter">
             SECTORS
           </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(${colors.primary} 1px, transparent 1px), linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#3B82F6] font-bold text-[10px] md:text-xs uppercase tracking-[0.6em] md:tracking-[0.8em] mb-6 md:mb-8 block">
              Global Industry Reach
            </span>
            <h1 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter text-[#111827] leading-[0.9] md:leading-[0.8]">
              Industries <br className="md:hidden" /> <span className="text-[#3B82F6]">We Serve.</span>
            </h1>
            <p className="text-slate-500 mt-8 md:mt-12 max-w-2xl mx-auto text-base md:text-xl font-medium tracking-wide leading-relaxed px-4">
              NovaHelix Labs delivers specialized engineering for India's most critical scientific and medical infrastructure projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🟦 2. Industry Matrix Grid - ALIGNMENT FIX APPLIED */}
      <section className="py-16 md:py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {industries.map((item, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-[#3B82F6]/30 transition-all shadow-sm hover:shadow-2xl flex flex-col h-full">
                <div className="relative h-56 md:h-64 overflow-hidden shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute bottom-4 md:bottom-6 left-6 md:left-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* 🟦 Content Container - Fixed Padding & Flex Growth */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#111827] mb-3 md:mb-4 min-h-[3.5rem] flex items-center">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium mb-6 md:mb-8 flex-grow">
                    {item.desc}
                  </p>

                  <div className="space-y-2 md:space-y-3 mb-8 md:mb-10 border-t border-slate-50 pt-6 md:pt-8">
                    <p className="text-[8px] md:text-[9px] font-black uppercase text-slate-400 tracking-widest mb-3 md:mb-4">Facility Solutions:</p>
                    {item.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 md:gap-3 text-[11px] md:text-xs font-bold text-slate-600">
                        <CheckCircle2 size={14} className="text-[#22C55E] shrink-0" />
                        <span className="leading-tight">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/projects" className="inline-flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#3B82F6] hover:gap-6 transition-all mt-auto">
                    View Sector Portfolio <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* 🟦 3. Technical Strength Summary */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#111827] mb-6 md:mb-8 leading-none">
                  Our Engineering <br /><span className="text-[#3B82F6]">Expertise.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
                   {[
                     "Controlled Environment Engineering",
                     "Compliance-Focused Design",
                     "Modern Technologies",
                     "Reliable Project Delivery"
                   ].map((strength, i) => (
                     <div key={strength} className="flex items-center gap-3 md:gap-4">
                       <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/5 flex items-center justify-center text-[#3B82F6] shrink-0">
                         <span className="text-[10px] md:text-xs font-black">0{i+1}</span>
                       </div>
                       <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-600 leading-tight">{strength}</p>
                     </div>
                   ))}
                </div>
              </div>
              <div className="lg:w-1/3 p-8 md:p-10 rounded-[2rem] bg-[#111827] text-white">
                <ShieldCheck className="text-[#22C55E] mb-6 w-10 h-10 md:w-12 md:h-12" />
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-4">Compliance Driven</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  We work closely with clients to understand their operational requirements and deliver infrastructure that meets all international regulatory standards.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* 🟦 4. Final CTA */}
      <section className="py-16 md:py-24 bg-[#111827] text-center px-6 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight px-2">
            Building Infrastructure That <br className="hidden md:block" /><span style={{ color: colors.accent }}>Supports Operational Success</span>
          </h2>
          <Link href="/contact">
            <button className="bg-[#3B82F6] text-white px-8 md:px-12 py-4 md:py-5 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-[#111827] transition-all shadow-xl">
              Discuss Your Sector Requirements
            </button>
          </Link>
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(${colors.primary} 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      </section>
    </main>
  );
}