"use client";

import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Dna, 
  Hospital, 
  Stethoscope, 
  Activity, 
  Apple,
  ArrowUpRight 
} from 'lucide-react';

const Industries = () => {
  // Palette Constants
  const colors = {
    primary: "#3B82F6",
    secondary: "#93C5FD",
    background: "#F9FAFB",
    accent: "#22C55E",
    text: "#111827"
  };

  const industries = [
    { title: "Pharmaceutical", icon: <FlaskConical size={32} />, delay: 0.1 },
    { title: "Biotechnology", icon: <Dna size={32} />, delay: 0.2 },
    { title: "Healthcare", icon: <Hospital size={32} />, delay: 0.3 },
    { title: "Medical Devices", icon: <Stethoscope size={32} />, delay: 0.4 },
    { 
      title: "Diagnostic Labs", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
        </svg>
      ), 
      delay: 0.5 
    },
    { title: "Nutraceuticals", icon: <Apple size={32} />, delay: 0.6 }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none">
        <Dna size={500} className="rotate-45 text-[#3B82F6]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#3B82F6] font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block"
          >
            Engineering Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-[#111827] uppercase tracking-tighter"
          >
            Industries We Serve
          </motion.h2>
          <div className="w-20 h-1 bg-[#22C55E] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: ind.delay }}
              whileHover={{ y: -8 }}
              className="group bg-white p-10 rounded-2xl shadow-[0_15px_40px_-20px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-[#3B82F6]/30 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all group-hover:bg-[#3B82F6] group-hover:text-white bg-[#3B82F6]/10 text-[#3B82F6]"
                >
                  {ind.icon}
                </div>
                <ArrowUpRight size={20} className="text-slate-300 group-hover:text-[#3B82F6] transition-colors" />
              </div>

              <h3 className="text-xl font-black text-[#111827] uppercase tracking-tight mb-3">
                {ind.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Tailored infrastructure solutions for {ind.title.toLowerCase()} environments, ensuring absolute compliance and operational precision.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;