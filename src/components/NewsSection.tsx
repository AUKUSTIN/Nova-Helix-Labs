"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FadeUp from './FadeUp';

export default function NewsSection() {
  const newsItems = [
    {
      date: "Jan 2026",
      title: "India Expands Biotech Infrastructure Investment",
      desc: "Supporting India's growing biotech and medtech sectors with advanced engineering solutions."
    },
    {
      date: "Feb 2026",
      title: "New GMP Standards for Sterile Facilities",
      desc: "NovaHelix Labs ensures all current projects exceed the latest revised CDSCO regulatory guidelines."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-[#3B82F6] font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Insights</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] uppercase tracking-tighter">News & Events</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((news, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="bg-[#F9FAFB] p-10 md:p-12 rounded-[2.5rem] border border-slate-100 h-full flex flex-col justify-between group hover:border-[#3B82F6]/30 transition-all">
                <div>
                  <span className="text-[#3B82F6] font-bold text-xs uppercase tracking-widest mb-6 block">{news.date}</span>
                  <h3 className="text-2xl font-black text-[#111827] uppercase tracking-tight leading-tight mb-4 group-hover:text-[#3B82F6] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    {news.desc}
                  </p>
                </div>

                {/* 🟦 REDIRECT LOGIC: Links updated to point to the About page */}
                <Link href="/about">
                  <button className="flex items-center gap-3 text-red-500 font-black text-[10px] uppercase tracking-[0.3em] group/btn hover:gap-5 transition-all">
                    Read More 
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}