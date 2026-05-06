"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const whyChooseUs = [
  {
    title: "Industry-Leading Expertise",
    description: "Decades of experience in advanced rubber solutions and high-performance polymer engineering.",
  },
  {
    title: "Custom Engineering",
    description: "Tailored products designed for specific industrial applications and demanding technical environments.",
  },
  {
    title: "Uncompromised Quality",
    description: "Strict adherence to global safety and performance standards with rigorous testing protocols.",
  },
];

const InnovationQuality = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="w-full flex flex-col overflow-hidden bg-[#f5f3f0]">
      
      {/* PART 1 — EDITORIAL INDUSTRIAL CONTENT SECTION */}
      <div className="py-32 md:py-56 relative overflow-hidden">
        {/* Subtle Architectural Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
        
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left: Cinematic Placeholder Composition */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative group"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] border border-black/[0.04] bg-[#1a1a1a]">
                {/* Cinematic Surface Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a]" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.01)_50%,transparent_75%)] bg-[size:200%_200%] transition-transform duration-[3s] group-hover:translate-x-10 group-hover:translate-y-10" />
                
                {/* Internal Framing / Detail */}
                <div className="absolute inset-10 border border-white/[0.02] rounded-[24px] pointer-events-none" />
                
                {/* Technical Metadata Overlay */}
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex flex-col gap-5 bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-7 rounded-3xl shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <span className="text-[8px] font-black tracking-widest uppercase">HRI</span>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em] leading-none">Resource Module</p>
                        <p className="text-white/70 text-[10px] font-bold tracking-tight">Industrial Manufacturing_01</p>
                      </div>
                    </div>
                    <div className="h-px w-full bg-white/[0.05]" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-0.5">
                        <p className="text-[7px] font-bold text-white/20 uppercase tracking-widest">Efficiency</p>
                        <p className="text-white text-[10px] font-medium">99.9%</p>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[7px] font-bold text-white/20 uppercase tracking-widest">Status</p>
                        <p className="text-blue-400 text-[10px] font-medium">Optimal</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lighting Flare */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full" />
              </div>
            </motion.div>

            {/* Right: Editorial Content Area */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col items-start lg:pl-16"
            >
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-3 bg-black/[0.03] px-4 py-1.5 rounded-full mb-10"
              >
                <div className="w-1 h-1 rounded-full bg-blue-600" />
                <span className="text-[8px] font-black uppercase tracking-[0.5em] text-black/40">
                  Precision Engineering
                </span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] leading-[0.95] tracking-[-0.03em] mb-12"
              >
                Innovation, <br />
                Durability, <br />
                <span className="text-black/20 font-light italic">and Precision.</span>
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-16 font-medium antialiased"
              >
                For three decades, Hans Rubber Industries has defined the frontier of high-performance 
                polymer solutions. We bridge the gap between complex engineering requirements 
                and large-scale industrial manufacturing with absolute technical mastery.
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-8 w-full mb-16 border-t border-black/[0.03] pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-12 gap-y-8">
                  {whyChooseUs.map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="mt-1 shrink-0">
                        <div className="w-5 h-5 rounded-full bg-blue-600/5 border border-blue-600/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-700">
                          <CheckCircle2 size={12} className="text-blue-600 group-hover:text-white transition-colors duration-700" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-[13px] font-bold text-[#1a1a1a] tracking-tight group-hover:text-blue-600 transition-colors duration-500">{item.title}</h5>
                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed max-w-[280px]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] flex items-center gap-3"
              >
                Get Quote Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>

      {/* PART 2 — FULL-WIDTH ENTERPRISE CTA SECTION */}
      <div className="relative py-48 md:py-64 flex items-center justify-center overflow-hidden bg-[#020617]">
        {/* Cinematic Placeholder Surface */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050b1a] to-[#020617]" />
          
          {/* Refined Surface Texture */}
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
          
          {/* Cinematic Lighting Nodes */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />
          
          {/* Technical Grid Architecture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:80px_80px] z-10" />
        </div>

        <div className="container mx-auto px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-4 bg-white/[0.03] backdrop-blur-2xl border border-white/10 px-6 py-2 rounded-full mb-16 shadow-2xl">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-200/60">
                Operational Excellence
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-white tracking-[-0.04em] leading-[0.95] mb-16">
              Uncompromising Quality <br />
              <span className="text-white/20 font-light italic">in Global Manufacturing.</span>
            </h2>

            <p className="text-slate-400 text-base md:text-xl max-w-3xl leading-relaxed font-medium antialiased mb-20">
              Hans Rubber Industries delivers high-performance rubber solutions designed for 
              durability, reliability, and total technical compliance. Our advanced technology 
              ecosystem ensures every component exceeds the world's most rigorous industry standards.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center gap-4"
              >
                Get Quote Now
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-500">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default InnovationQuality;
