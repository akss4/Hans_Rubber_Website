"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const features = [
  {
    title: "Audit & Quality Assurance",
    description: "Ensuring superior rubber products through rigorous testing and compliance.",
  },
  {
    title: "Custom Rubber Solutions",
    description: "Tailored rubber manufacturing to meet diverse industry needs.",
  },
  {
    title: "Advanced Material Engineering",
    description: "Innovating with high-performance rubber compounds for durability and efficiency.",
  },
  {
    title: "Sustainable Manufacturing",
    description: "Eco-friendly processes for responsible and long-lasting rubber production.",
  },
];

const AboutManufacturing = () => {
  return (
    <section className="relative bg-[#050505] overflow-hidden py-32 md:py-48">
      {/* Subtle Technical Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* PART 1 — EDITORIAL ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end mb-40">
          
          {/* Header Block: Restrained & Premium */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-blue-500/50" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">Corporate Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Advancing Rubber <br />
                Manufacturing <br />
                <span className="text-slate-500 italic font-light">with Precision Innovation.</span>
              </h2>
            </div>
          </motion.div>

          {/* Narrative: Refined Typography Scaling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 }}
            className="lg:col-span-5 space-y-10"
          >
            <p className="text-base md:text-lg text-slate-400 leading-relaxed font-normal antialiased max-w-lg">
              Hans Rubber Industries has been delivering high-performance rubber solutions for 
              automotive, industrial, and OEM applications for over 30 years. Defined by 
              technical mastery and rigorous manufacturing standards.
            </p>
            <button className="group flex items-center gap-4 text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all">
              <span className="border-b border-white/10 group-hover:border-white py-1 transition-all">
                The Technical Heritage
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* PART 2 — CINEMATIC VISUAL COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-40">
          
          {/* Main Visual: Darkened, Atmospheric */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:col-span-8 relative aspect-video bg-[#0a0a0a] overflow-hidden rounded-2xl border border-white/[0.03] group shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
            
            {/* Play Interaction: Minimalist */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <Play className="text-white fill-white ml-1" size={18} />
              </div>
            </div>

            {/* Depth Labels */}
            <div className="absolute top-8 left-8">
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/20">Ref. Production_Line_01</span>
            </div>
            <div className="absolute bottom-8 right-8">
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/20">Sector — Precision Molding</span>
            </div>
          </motion.div>

          {/* Side Context: Architectural Detail */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-12">
            <div className="space-y-8 pl-8 border-l border-white/5">
              <p className="text-[13px] leading-relaxed text-slate-500 font-medium">
                Integrating cutting-edge technology and precision engineering 
                to manufacture high-performance rubber solutions.
              </p>
              <div className="w-8 h-px bg-white/5" />
              <p className="text-[13px] leading-relaxed text-slate-500 font-medium">
                Innovative manufacturing processes and a commitment to continuous improvement 
                drive our success in delivering custom rubber solutions.
              </p>
            </div>
            
            {/* Abstract Secondary Visual */}
            <div className="relative aspect-video lg:aspect-square w-full lg:w-48 lg:self-end bg-[#111111] overflow-hidden rounded-xl border border-white/[0.03] opacity-40 group grayscale">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-6xl font-black text-white/5">H</span>
               </div>
            </div>
          </div>
        </div>

        {/* PART 3 — REFINED FEATURE GRID: Dark Cinematic */}
        <div className="space-y-16 border-t border-white/[0.03] pt-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-blue-500/60">02 — TECHNICAL SCOPE</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">Standardizing Excellence.</h3>
            </div>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em]">Operational Precision Across 4 Critical Segments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
                className="group space-y-6"
              >
                {/* Minimal Card Image Placeholder */}
                <div className="relative aspect-[3/4] bg-[#0a0a0a] overflow-hidden rounded-xl border border-white/[0.03] group-hover:border-white/10 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-normal antialiased">
                    {feature.description}
                  </p>
                  <div className="w-0 group-hover:w-8 h-[1px] bg-blue-500/50 transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutManufacturing;
