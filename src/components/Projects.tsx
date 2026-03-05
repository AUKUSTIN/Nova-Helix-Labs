"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Multi-Specialty Hospital Operating Theatres",
      location: "Bengaluru",
      image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
      desc: "Modular panelling fit-out with infection-controlled air systems."
    },
    {
      title: "Advanced Cancer Treatment Centre",
      location: "Mumbai",
      image: "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg",
      desc: "Sterile compounding room with pressure-controlled airflow environment."
    }
  ];

  return (
    <section className="py-24 bg-[#3B82F6] relative overflow-hidden">
      {/* Decorative Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-white/80 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Proven Engineering</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              Validated <br /> Infrastructure.
            </h2>
          </div>
          <Link href="/projects">
            <button className="bg-white text-[#3B82F6] px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#111827] hover:text-white transition-all shadow-xl">
              View All Projects
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <MapPin size={12} className="text-[#3B82F6]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#111827]">{project.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-12 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#111827] uppercase tracking-tight leading-tight mb-4 group-hover:text-[#3B82F6] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                {/* 🟦 REDIRECT LOGIC: Clicking this area now routes to /services */}
                <Link href="/services" className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center group/btn">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3B82F6] group-hover/btn:tracking-[0.3em] transition-all">
                    Technical Case Study
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F9FAFB] flex items-center justify-center text-[#3B82F6] group-hover/btn:bg-[#3B82F6] group-hover/btn:text-white transition-all shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}