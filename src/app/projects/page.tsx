"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MapPin, 
  ArrowRight,
  Search, 
  Settings,
  HardHat, 
  Building2,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [filter, setFilter] = useState("All");

  // 🟦 FIX: Prevent background scrolling when technical modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeProject]);

  const colors = {
    primary: "#3B82F6",    
    accent: "#22C55E",     
    text: "#111827",       
    background: "#F9FAFB"  
  };

  const projectData = [
    // 🟦 PHARMACEUTICAL
    {
      id: "NH-P1",
      title: "GMP Manufacturing Facility",
      location: "Hyderabad",
      category: "Pharmaceutical",
      image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
      desc: "GMP-compliant facility supporting large-scale drug production.",
      highlights: ["ISO Cleanrooms", "Pressure Control", "Modular Panels", "GMP Infrastructure"],
      passage: "Designed and constructed to support large-scale drug production, featuring advanced air filtration and pharmaceutical-grade modular wall panels with integrated climate monitoring."
    },
    {
      id: "NH-P2",
      title: "Sterile Injectable Unit",
      location: "Ahmedabad",
      category: "Pharmaceutical",
      image: "https://images.pexels.com/photos/3631711/pexels-photo-3631711.jpeg",
      desc: "Sterile injectable manufacturing unit for high-precision safety.",
      highlights: ["Aseptic Cleanrooms", "HEPA Filtration", "Sterile Filling", "Pressure Cascade"],
      passage: "A high-precision facility designed for aseptic production and sterile filling, featuring a controlled air pressure cascade to meet strict pharmaceutical safety standards."
    },
    {
      id: "NH-P3",
      title: "Packaging Cleanroom",
      location: "Mumbai",
      category: "Pharmaceutical",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg",
      desc: "Contamination-controlled environments for pharmaceutical packaging.",
      highlights: ["ISO Packaging Cleanrooms", "Static-Resistant Flooring", "Controlled Airflow"],
      passage: "Equipped with contamination-controlled environments and static-resistant flooring to maintain product quality during critical packaging operations."
    },
    {
      id: "NH-P4",
      title: "Vaccine Production Facility",
      location: "Pune",
      category: "Pharmaceutical",
      image: "https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg",
      desc: "Facility designed for vaccine research and manufacturing support.",
      highlights: ["Sterile Environments", "HEPA Filtration", "Lab Integration"],
      passage: "Constructed to support vaccine research and early-stage manufacturing processes within a controlled pharmaceutical-grade environment."
    },

    // 🟦 BIOTECHNOLOGY
    {
      id: "NH-B5",
      title: "Biotech Research Lab",
      location: "Bengaluru",
      category: "Biotechnology",
      image: "https://images.pexels.com/photos/8442544/pexels-photo-8442544.jpeg", 
      desc: "State-of-the-art laboratory for biological and genetic research.",
      highlights: ["Biosafety Design", "Specialized Ventilation", "Chemical-Resistant"],
      passage: "A high-performance research lab featuring specialized ventilation, modular workstations, and safety monitoring systems to support advanced experimental work."
    },
    {
      id: "NH-B6",
      title: "Biotech Innovation Centre",
      location: "Hyderabad",
      category: "Biotechnology",
      image: "https://images.pexels.com/photos/5430755/pexels-photo-5430755.jpeg",
      desc: "Collaborative research space for biotechnology startups.",
      highlights: ["Flexible Infrastructure", "Advanced Ventilation", "Modular Spaces"],
      passage: "Engineered as a scalable laboratory layout to support multiple research teams and startups in a well-equipped collaborative environment."
    },
    {
      id: "NH-B7",
      title: "Genetic Research Lab",
      location: "Delhi NCR",
      category: "Biotechnology",
      image: "https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg",
      desc: "Advanced facility for genomic research and biosafety containment.",
      highlights: ["Contamination Zones", "Biosafety Containment", "Precision Climate"],
      passage: "Constructed to maintain the strict environmental conditions required for advanced genomic research and containment."
    },
    {
      id: "NH-B8",
      title: "Vaccine Research Hub",
      location: "Pune",
      category: "Biotechnology",
      image: "https://images.pexels.com/photos/8413187/pexels-photo-8413187.jpeg", 
      desc: "Dedicated facility for vaccine development and testing.",
      highlights: ["Biosafety Environments", "Advanced Filtration", "Sample Handling"],
      passage: "A safety-focused laboratory design engineered specifically for biological testing and critical vaccine research activities."
    },

    // 🟦 HEALTHCARE
    {
      id: "NH-H9",
      title: "Modular OT Complex",
      location: "Bengaluru",
      category: "Healthcare",
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
      desc: "Modular operating theatres with sterile surgical environments.",
      highlights: ["OT Infrastructure", "Antimicrobial Surfaces", "Surgical Monitoring"],
      passage: "Engineered sterile surgical environments for a leading hospital, focusing on modular wall systems and infection control."
    },
    {
      id: "NH-H10",
      title: "Cancer Treatment Centre",
      location: "Mumbai",
      category: "Healthcare",
      image: "https://images.pexels.com/photos/7088528/pexels-photo-7088528.jpeg",
      desc: "Specialized oncology center with radiation protection design.",
      highlights: ["Sterile Environments", "Radiation Protection", "Patient-Safe"],
      passage: "A specialized facility equipped with sterile medical environments and controlled ventilation for advanced oncology treatments."
    },
    {
      id: "NH-H11",
      title: "ICU Environmental Control",
      location: "Chennai",
      category: "Healthcare",
      image: "https://images.pexels.com/photos/11782003/pexels-photo-11782003.jpeg", 
      desc: "Infection control infrastructure for critical care units.",
      highlights: ["Airflow Management", "Infection Design", "Advanced Filtration"],
      passage: "Enhanced infection control through ICU airflow management and sterile room infrastructure to support critical care."
    },
    {
      id: "NH-H12",
      title: "Medical Assembly Facility",
      location: "Bengaluru",
      category: "Healthcare",
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
      desc: "Sterile assembly zone for medical and surgical equipment.",
      highlights: ["Cleanroom Assembly", "Anti-Static Flooring", "Precision HVAC"],
      passage: "Designed for assembling sterile medical instruments, featuring medical-grade infrastructure and contamination-controlled workspaces."
    },

    // 🟦 DIAGNOSTIC LABS
    {
      id: "NH-D13",
      title: "Central Diagnostic Lab",
      location: "Chennai",
      category: "Diagnostic Labs",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
      desc: "High-capacity laboratory processing thousands of samples daily.",
      highlights: ["Sample Processing Labs", "Biosafety Containment", "Sample Storage"],
      passage: "A high-capacity diagnostic facility built with laboratory ventilation infrastructure to handle high-volume medical testing safely."
    },
    {
      id: "NH-D14",
      title: "Molecular Testing Lab",
      location: "Delhi NCR",
      category: "Diagnostic Labs",
      image: "https://images.pexels.com/photos/3735754/pexels-photo-3735754.jpeg",
      desc: "Specialized diagnostics facility for PCR testing.",
      highlights: ["PCR Infrastructure", "Contamination Zones", "Precision Climate"],
      passage: "A specialized diagnostics facility featuring controlled air pressure environments for advanced analysis and PCR testing."
    },
    {
      id: "NH-D15",
      title: "Pathology Testing Centre",
      location: "Hyderabad",
      category: "Diagnostic Labs",
      image: "https://images.pexels.com/photos/4033144/pexels-photo-4033144.jpeg",
      desc: "Modern pathology lab for clinical diagnostics and research.",
      highlights: ["Sample Prep Labs", "Chemical-Resistant", "Biosafety Infrastructure"],
      passage: "Designed to support clinical diagnostics with chemical-resistant workstations and controlled environmental conditions."
    },
    {
      id: "NH-D16",
      title: "Public Health Lab",
      location: "Kolkata",
      category: "Diagnostic Labs",
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg", 
      desc: "Large-scale facility for disease monitoring programs.",
      highlights: ["High-Capacity Testing", "Secure Sample Handling", "Disease Monitoring"],
      passage: "A large-scale diagnostic facility built to support public health monitoring with advanced filtration and secure handling areas."
    }
  ];

  const categories = ["All", "Pharmaceutical", "Biotechnology", "Healthcare", "Diagnostic Labs"];
  const filteredProjects = filter === "All" ? projectData : projectData.filter(p => p.category === filter);

  return (
    <main className="min-h-screen pt-20 overflow-x-hidden" style={{ backgroundColor: colors.background }}>
      
      {/* 🟦 1. Centered Hero Section */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-white border-b border-slate-100 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
           <div className="text-[8rem] md:text-[25rem] font-black text-[#111827] select-none uppercase tracking-tighter">PROJECTS</div>
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(${colors.primary} 1px, transparent 1px), linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#3B82F6] font-bold text-[10px] md:text-xs uppercase tracking-[0.8em] mb-4 md:mb-8 block">NovaHelix Labs Portfolio</span>
            <h1 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter text-[#111827] leading-[0.9] md:leading-[0.8]">
              Project <br className="md:hidden" /> <span className="text-[#3B82F6]">Portfolio.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 🟦 2. Sticky Filter Bar */}
      <section className="bg-white border-b border-slate-100 sticky top-20 z-40 shadow-sm overflow-x-auto no-scrollbar">
        <div className="container mx-auto px-6 py-6 flex flex-nowrap md:flex-wrap gap-3 items-center min-w-max md:min-w-0">
           <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mr-2">Select Sector:</p>
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-5 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${
                 filter === cat ? "bg-[#3B82F6] text-white shadow-lg" : "bg-[#F9FAFB] text-slate-400 hover:bg-slate-100"
               }`}
             >
               {cat}
             </button>
           ))}
        </div>
      </section>

      {/* 🟦 3. Project Grid - TITLES UPDATED TO WHITE */}
      <section className="py-16 md:py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative h-[350px] md:h-[400px] w-full rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all bg-white border border-slate-100">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Enhanced Dark Overlay for Text Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="space-y-1">
                       {/* 🟦 All overlay text explicitly set to Pure White */}
                       <p className="text-white font-bold text-[8px] md:text-[9px] uppercase tracking-widest opacity-90 drop-shadow-md">
                         {project.category}
                       </p>
                      <h3 className="text-xl md:text-2xl font-black tracking-tight uppercase leading-tight !text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                       <div className="flex items-center gap-2 text-white/80 text-[10px] drop-shadow-md">
                         <MapPin size={12} className="text-white" /> {project.location}
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 🟦 4. Technical Modal - MOBILE FIXES */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[#111827]/90 backdrop-blur-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-6xl w-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-h-[90vh] overflow-y-auto scrollbar-hide"
            >
              {/* High-priority close button for mobile accessibility */}
              <button 
                onClick={() => setActiveProject(null)} 
                className="fixed md:absolute top-6 right-6 z-[250] text-white md:text-slate-400 hover:text-red-500 bg-[#111827]/60 md:bg-transparent p-3 rounded-full backdrop-blur-md md:backdrop-blur-none transition-all"
              >
                <X size={28} strokeWidth={3} />
              </button>

              <div className="w-full md:w-1/2 relative h-[300px] md:h-auto shrink-0">
                <Image src={activeProject.image} alt={activeProject.title} fill className="object-cover" />
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                   <div className="bg-[#3B82F6] text-white px-4 md:px-6 py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-xl">
                      Project ID: {activeProject.id}
                   </div>
                </div>
              </div>

              <div className="flex-1 p-8 md:p-16 relative bg-white flex flex-col justify-center">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <p className="text-[#3B82F6] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-2">Technical Case Study</p>
                    <h2 className="text-2xl md:text-4xl font-black text-[#111827] uppercase tracking-tighter mb-4">{activeProject.title}</h2>
                    <div className="w-12 h-1 bg-[#22C55E]" />
                  </div>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">{activeProject.passage}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2">
                    {activeProject.highlights.map((h: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-[#111827] font-bold text-[9px] md:text-[10px] uppercase">
                        <CheckCircle2 size={16} className="text-[#22C55E] shrink-0" /> {h}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 md:pt-6">
                    <Link href="/contact" className="w-full">
                      <button className="w-full bg-[#3B82F6] text-white py-4 md:py-6 rounded-xl md:rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-lg hover:opacity-90 flex items-center justify-center gap-3">
                         Request Facility Proposal <ArrowRight size={18} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 🟦 5. Process Roadmap */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#111827] mb-10 md:mb-12">Project Delivery Process</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              { t: "Consultation", i: <Search size={20} /> },
              { t: "Engineering", i: <Settings size={20} /> },
              { t: "Procurement", i: <Building2 size={20} /> },
              { t: "Construction", i: <HardHat size={20} /> },
              { t: "Validation", i: <ShieldCheck size={20} /> }
            ].map((step, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl bg-[#F9FAFB] border border-slate-50 group hover:bg-white hover:shadow-xl transition-all">
                <div className="text-[#3B82F6] mb-4 mx-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-white shadow-sm group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
                  {step.i}
                </div>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#111827]">{step.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}