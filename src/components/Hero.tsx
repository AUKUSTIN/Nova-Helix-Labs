"use client";

import { motion } from 'framer-motion';
import { Microscope, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link'; // Added for button functionality

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#F9FAFB] pt-20">
      {/* 🟦 Background Image Layer with Blur Effect */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.pexels.com/photos/3735782/pexels-photo-3735782.jpeg')] bg-cover bg-center opacity-30 grayscale-[20%]"
        aria-hidden="true"
      />
      {/* Glassmorphism Blur Overlay */}
      <div className="absolute inset-0 z-0 backdrop-blur-[6px] bg-[#F9FAFB]/60" />

      {/* 🟦 Background Ghost Typography */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none z-0">
        <div className="absolute top-20 left-10 text-[15rem] font-black leading-none select-none text-[#3B82F6]">
          EPC
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* 🟦 Left Content Column */}
        <div className="lg:col-span-7 border-l-4 border-[#22C55E] pl-8 md:pl-12 py-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#93C5FD]/20 text-[#3B82F6] text-[10px] font-bold uppercase tracking-widest mb-6">
              Precision Engineering Solutions
            </span>
            
            <h1 className="text-5xl md:text-8xl font-black text-[#111827] leading-[1.05] mb-8 tracking-tighter">
              Engineering <br />
              <span className="text-[#3B82F6]">Controlled</span> <br />
              Environments
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[#111827]/70 text-lg md:text-xl font-medium max-w-xl mb-10 leading-relaxed"
          >
            Building safe, compliant, and high-performance infrastructure for India's healthcare and biotechnology future.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5"
          >
            {/* 🟦 FUNCTIONAL BUTTON: EXPLORE SERVICES */}
            <Link href="/services">
              <button className="group relative bg-[#3B82F6] text-white px-10 py-5 text-xs font-black uppercase tracking-widest rounded-sm transition-all shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.6)] hover:-translate-y-1">
                <span className="flex items-center gap-3">
                  Explore Services <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                </span>
              </button>
            </Link>
            
            {/* 🟦 FUNCTIONAL BUTTON: CONSULTATION */}
            <Link href="/contact">
              <button className="bg-white/80 backdrop-blur-md border-2 border-[#111827] text-[#111827] px-10 py-5 text-xs font-black uppercase tracking-widest rounded-sm transition-all hover:bg-[#111827] hover:text-white">
                Consultation
              </button>
            </Link>
          </motion.div>
        </div>

        {/* 🟦 Right Visual Column */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative"
          >
            {/* Main Interactive Card */}
            <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-white/20 relative z-20 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Microscope size={120} color="#3B82F6" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E]">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[#111827] uppercase text-sm">Compliance Ready</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">ISO & GMP Certified</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="h-full bg-[#3B82F6]" 
                  />
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                  <span>Validation Check</span>
                  <span className="text-[#3B82F6]">85% Complete</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#93C5FD] rounded-full blur-[80px] opacity-30 z-10" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#22C55E] rounded-full blur-[80px] opacity-20 z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;