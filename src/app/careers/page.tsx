"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  GraduationCap, 
  Heart, 
  MapPin, 
  Clock, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Mail, 
  Zap,
  Users,
  Phone,
  ArrowUpRight
} from 'lucide-react';
import FadeUp from '../../components/FadeUp';

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<any>(null);

  // 🟦 Mobile Fix: Prevent background scroll when job modal is open
  useEffect(() => {
    if (activeJob) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeJob]);

  const colors = {
    primary: "#3B82F6",    
    text: "#111827",       
    background: "#F9FAFB", 
    white: "#FFFFFF"       
  };

  const jobOpenings = [
    {
      title: "Project Engineer – Pharmaceutical Infrastructure",
      location: "Bengaluru",
      experience: "3–5 Years",
      dept: "Engineering",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pill-bottle">
          <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"/><path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"/><rect width="16" height="5" x="4" y="2" rx="1"/>
        </svg>
      ),
      responsibilities: [
        "Manage pharmaceutical facility engineering projects",
        "Coordinate with architects, contractors, and engineers",
        "Ensure compliance with industry standards and regulations"
      ]
    },
    {
      title: "Cleanroom Design Engineer",
      location: "Hyderabad",
      experience: "2–4 Years",
      dept: "Design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brush">
          <path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/>
        </svg>
      ),
      responsibilities: [
        "Design and develop cleanroom layouts for pharmaceutical facilities",
        "Ensure ISO and GMP compliance",
        "Work with HVAC teams to optimize airflow systems"
      ]
    },
    {
      title: "Laboratory Infrastructure Specialist",
      location: "Chennai",
      experience: "4–6 Years",
      dept: "Infrastructure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-cloud">
          <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z"/><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/>
        </svg>
      ),
      responsibilities: [
        "Design advanced laboratory environments for research and diagnostics",
        "Implement safety and contamination control systems",
        "Support biotech and diagnostic laboratory infrastructure projects"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-20 overflow-x-hidden" style={{ backgroundColor: colors.background }}>
      
      {/* 🟦 1. Careers Hero */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-white border-b border-slate-100 flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
           <div className="text-[8rem] md:text-[25rem] font-black text-[#111827] select-none uppercase tracking-tighter">TALENT</div>
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#3B82F6] font-bold text-[10px] md:text-xs uppercase tracking-[0.8em] mb-6 block">Join NovaHelix Labs</span>
            <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter text-[#111827] leading-[0.9] md:leading-[0.8] mb-8">
              Build the <br /> <span className="text-[#3B82F6]">Future.</span>
            </h1>
            <p className="text-slate-500 text-base md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-12">
              Join our team of engineering specialists building the next generation of scientific facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="#positions" className="bg-[#3B82F6] text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:opacity-90 transition-all">View Open Positions</a>
               <a href="mailto:careers@novahelixlabs.com" className="border-2 border-slate-100 px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">Join Our Team</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🟦 2. Benefits Section - Optimized Light Design */}
      <section className="py-24 bg-white border-y border-slate-100 container mx-auto rounded-[3rem] my-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#111827] bg-[#3B82F6]/5 inline-block px-10 py-4 rounded-2xl">
              EMPLOYEE BENEFITS
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Competitive Pay", i: <Zap />, d: "Premium compensation packages." },
              { t: "Training Programs", i: <GraduationCap />, d: "Expert technical workshops." },
              { t: "Health & Wellness", i: <Heart />, d: "Comprehensive care plans." },
              { t: "Global Projects", i: <Rocket />, d: "High-impact infrastructure." }
            ].map((b, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col items-center gap-6 shadow-sm hover:shadow-xl transition-all overflow-hidden">
                <div className="relative w-16 h-16 bg-blue-50 text-[#3B82F6] rounded-2xl flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:text-white transition-all shadow-lg">
                  {b.i}
                </div>
                <h4 className="font-black uppercase text-[12px] tracking-widest text-[#111827]">{b.t}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟦 3. Open Positions - High-Contrast Design */}
      <section id="positions" className="py-24 px-6 container mx-auto">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-[#111827] mb-16 text-center">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpenings.map((job, i) => (
            <div key={i} onClick={() => setActiveJob(job)} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#3B82F6] transition-all cursor-pointer group shadow-sm hover:shadow-2xl">
               <div className="flex justify-between items-start mb-8">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#3B82F6] bg-blue-50 px-4 py-1.5 rounded-full">{job.dept}</span>
                  <div className="text-slate-300 group-hover:text-[#3B82F6] transition-colors">{job.icon}</div>
               </div>
               <h3 className="text-xl font-black uppercase text-[#111827] mb-4 group-hover:text-[#3B82F6] transition-colors leading-tight">{job.title}</h3>
               <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase mb-8">
                  <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#3B82F6]" /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#3B82F6]" /> {job.experience}</span>
               </div>
               <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#3B82F6] group-hover:gap-5 transition-all">Apply Now <ArrowRight size={14} /></button>
            </div>
          ))}
        </div>
      </section>

      {/* 🟦 4. JOIN OUR TEAM - UPDATED FOR MOBILE */}
      <section className="py-24 px-6 container mx-auto">
        <div className="bg-white border border-slate-100 p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] shadow-xl text-center relative overflow-hidden group">
          {/* Blueprint background accent */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
               style={{ backgroundImage: `linear-gradient(${colors.primary} 1px, transparent 1px), linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[#3B82F6] font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">Opportunity Gateway</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111827] mb-8 leading-tight">Don't see a <br /> matching role?</h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">We are always looking for talented professionals. Send your resume transmission to our team.</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
               <a href="mailto:careers@novahelixlabs.com" className="flex items-center justify-center gap-4 bg-[#3B82F6] text-white px-10 py-5 rounded-full shadow-2xl active:scale-95 transition-all group">
                  <Mail size={20} className="group-hover:translate-y-[-2px] transition-transform" /> 
                  <span className="text-[10px] font-black uppercase tracking-widest">careers@novahelixlabs.com</span>
               </a>
               <a href="https://wa.me/918248230071" className="flex items-center justify-center gap-4 bg-[#111827] text-white px-10 py-5 rounded-full hover:bg-[#1f2937] transition-all shadow-xl">
                  <Phone size={18} className="text-[#3B82F6]" /> 
                  <span className="text-[10px] font-black uppercase tracking-widest">+91 8248230071</span>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🟦 Technical Job Modal */}
      <AnimatePresence>
        {activeJob && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[#111827]/90 backdrop-blur-xl">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
              
              {/* FIXED SCROLL CONTAINER */}
              <div className="overflow-y-auto p-8 md:p-16 scrollbar-hide">
                 <button onClick={() => setActiveJob(null)} className="fixed md:absolute top-6 right-6 z-[250] text-white md:text-slate-400 bg-[#111827]/50 md:bg-transparent p-3 rounded-full transition-all">
                    <X size={28} />
                 </button>

                 <div className="flex items-center gap-4 mb-6 pt-8 md:pt-0">
                    <div className="w-12 h-12 bg-blue-50 text-[#3B82F6] rounded-xl flex items-center justify-center">{activeJob.icon}</div>
                    <p className="text-[#3B82F6] font-black text-[10px] uppercase tracking-[0.5em]">Technical Specification</p>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#111827] mb-8 leading-tight">{activeJob.title}</h2>
                 
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 border-y border-slate-100 py-8">
                    <div><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Location</p><p className="font-bold text-[#111827]">{activeJob.location}</p></div>
                    <div><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Exp. Level</p><p className="font-bold text-[#111827]">{activeJob.experience}</p></div>
                    <div><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Department</p><p className="font-bold text-[#111827]">{activeJob.dept}</p></div>
                 </div>

                 <div className="space-y-6 mb-12">
                    <h4 className="text-lg font-black uppercase tracking-tight text-[#111827]">Key Responsibilities</h4>
                    <ul className="space-y-4">
                       {activeJob.responsibilities.map((r: string, i: number) => (
                         <li key={i} className="flex items-start gap-4 text-slate-600 font-medium leading-relaxed">
                            <CheckCircle2 size={18} className="text-[#22C55E] mt-1 shrink-0" /> {r}
                         </li>
                       ))}
                    </ul>
                 </div>

                 <a href="mailto:careers@novahelixlabs.com" className="block w-full bg-[#3B82F6] text-white text-center py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-xl hover:opacity-90 transition-all active:scale-[0.98]">
                   Initialize Application Sequence
                 </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}