"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, Clock, Building2, Send, 
  Globe, Zap, UploadCloud, ChevronRight 
} from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const colors = {
    primary: "#3B82F6",    
    text: "#111827",       
    background: "#F9FAFB"  
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      setSubmitted(true);
      setIsSubmitting(false);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 overflow-x-hidden" style={{ backgroundColor: colors.background }}>
      
      {/* 🟦 1. Hero Section */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-white border-b border-slate-100 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
           <div className="text-[8rem] md:text-[25rem] font-black text-[#111827] select-none uppercase tracking-tighter">
             CONNECT
           </div>
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#3B82F6] font-bold text-[10px] md:text-xs uppercase tracking-[0.8em] mb-8 block">
              Technical Support Gateway
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter text-[#111827] leading-[0.9] md:leading-[0.8] mb-8">
              Get in <br className="md:hidden" /> <span className="text-[#3B82F6]">Touch.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 🟦 2. Command Center Dashboard */}
      <section className="py-12 md:py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column Panels */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <a href="https://wa.me/918248230071" target="_blank" className="block p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
               <div className="flex justify-between items-start mb-6 md:mb-8">
                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#3B82F6]/5 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
                   <Phone size={24} />
                 </div>
                 <Zap className="text-[#22C55E] animate-pulse" size={20} />
               </div>
               <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight">WhatsApp Us</h3>
               <p className="text-slate-500 mt-2 md:mt-4 font-bold text-sm md:text-base">+91 8248230071</p>
            </a>

            <a href="mailto:aukustin03@gmail.com" className="block p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-[#111827] text-white shadow-xl group">
               <div className="flex justify-between items-start mb-6 md:mb-8">
                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-[#3B82F6]">
                   <Mail size={24} />
                 </div>
                 <ChevronRight className="text-slate-500 group-hover:translate-x-2 transition-transform" />
               </div>
               <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Email Support</h3>
               <p className="text-slate-400 mt-2 md:mt-4 font-medium italic text-sm md:text-base">aukustin03@gmail.com</p>
            </a>
          </div>

          {/* 🟦 Right Column: FIXED FORM BUTTON */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 md:py-20">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 text-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-[#111827] mb-4">Transmission Sent</h3>
                  <p className="text-slate-500 font-medium text-sm md:text-base">Your request has been routed to our engineers.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                  <div className="mb-10 md:mb-16">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#111827] mb-4">Consultation Request</h3>
                    <div className="w-20 h-1.5 bg-[#3B82F6] rounded-full" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="space-y-2 border-b border-slate-100 pb-2">
                      <label className="text-[9px] font-black uppercase text-[#3B82F6] tracking-[0.2em]">Full Name</label>
                      <input name="name" required type="text" className="w-full bg-transparent border-none p-0 focus:ring-0 font-bold text-base md:text-lg text-[#111827]" placeholder="Aukustin" />
                    </div>
                    <div className="space-y-2 border-b border-slate-100 pb-2">
                      <label className="text-[9px] font-black uppercase text-[#3B82F6] tracking-[0.2em]">Email Address</label>
                      <input name="email" required type="email" className="w-full bg-transparent border-none p-0 focus:ring-0 font-bold text-base md:text-lg text-[#111827]" placeholder="aukustin03@gmail.com" />
                    </div>
                  </div>

                  <div className="space-y-2 border-b border-slate-100 pb-2">
                    <label className="text-[9px] font-black uppercase text-[#3B82F6] tracking-[0.2em]">Facility Specifications</label>
                    <textarea name="message" required rows={4} className="w-full bg-transparent border-none p-0 focus:ring-0 font-bold text-base md:text-lg text-[#111827] resize-none" placeholder="Describe your requirements..."></textarea>
                  </div>

                  {/* 🟦 BUTTON FIX: Responsive Padding & Font Scale */}
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-[#3B82F6] text-white py-5 md:py-8 rounded-[1.25rem] md:rounded-[2rem] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] shadow-2xl shadow-blue-500/30 hover:opacity-90 transition-all flex items-center justify-center gap-3 md:gap-6"
                  >
                    {isSubmitting ? "Processing..." : "Initialize Transmission"} <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}