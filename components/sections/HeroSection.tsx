"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "30+" },
  { label: "Product Delivered", value: "342k" },
  { label: "Satisfied Clients", value: "13,873+" },
];

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col bg-[#020617] overflow-hidden pt-40 pb-20">
      {/* Background: Cinematic Lighting & Technical Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Directional Lights */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/5 blur-[160px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-indigo-500/5 blur-[140px] rounded-full" />
        
        {/* Subtle Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Noise/Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
          
          {/* Left Content: Disciplined Typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200/60">
                Established 1994 • Industrial Excellence
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-[100px] font-bold text-white leading-[0.92] tracking-[-0.04em] mb-10"
            >
              Precision <br />
              <span className="text-white/40 italic font-light">Engineered</span> <br />
              Rubber.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed mb-12 font-normal antialiased"
            >
              We engineer high-performance rubber solutions for global automotive and industrial sectors, 
              defined by three decades of technical mastery and rigorous manufacturing standards.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8">
              <button className="group relative bg-white text-black px-9 py-4 rounded-full text-sm font-bold transition-all hover:bg-blue-50 hover:scale-[1.02] flex items-center gap-3">
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 border-l border-white/10 pl-8">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-9 h-9 rounded-full bg-slate-800 border-2 border-[#020617] flex items-center justify-center text-[9px] font-bold text-white/40">
                      ID
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[11px] font-bold uppercase tracking-wider">Top Tier Partners</span>
                  <span className="text-slate-500 text-[10px]">Trusted Globally</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Composition: Grounded & Technical */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[540px] aspect-[5/6]">
              {/* Main Visual: Realistic Shadow & Grounding */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 rounded-[32px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden border border-white/5 transition-all duration-700">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-12">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">Technical Specification</div>
                  <h3 className="text-2xl font-bold text-white mb-1">Industrial Grade Polymer</h3>
                  <p className="text-slate-500 text-xs font-medium tracking-wide">Ref. 904-X High Compression Resistance</p>
                </div>
              </div>

              {/* Floating Element 1: Refined Badge */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-40 h-40 bg-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 flex flex-col items-center justify-center p-6 text-center shadow-2xl z-20"
              >
                <span className="text-4xl font-bold text-white mb-1 tracking-tighter">30+</span>
                <div className="w-8 h-[1px] bg-blue-500/50 my-3" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Years Mastery</span>
              </motion.div>

              {/* Floating Element 2: Technical Card */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 w-56 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl z-20"
              >
                <div className="flex items-center gap-1.5 mb-3 opacity-40">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-white text-white" />)}
                </div>
                <p className="text-slate-300 text-[11px] font-medium leading-relaxed italic mb-4">
                  &quot;Consistently exceeding ISO standards for our critical supply chain.&quot;
                </p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-[8px] font-bold text-white/60">EO</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Executive Officer</div>
                </div>
              </motion.div>

              {/* Decorative Depth Element */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/5 blur-[100px] rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Row: Refined and Minimal */}
      <div className="w-full mt-auto">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/5">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (idx * 0.1), duration: 1 }}
                className={`flex flex-col py-10 ${idx !== 2 ? "md:border-r border-white/5" : ""} ${idx === 0 ? "md:pr-12" : "md:px-12"}`}
              >
                <span className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
