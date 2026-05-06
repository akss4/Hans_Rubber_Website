"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  Dumbbell, 
  Settings, 
  ShieldCheck, 
  Lightbulb, 
  Recycle,
  MessageSquare
} from "lucide-react";

const bestSellers = [
  {
    id: 1,
    name: "HONDA ELEVATE LIFE LONG MATS For Model 2023 ONWARDS (GLLM-080) CAR FLOOR MATS",
    price: "Rs. 5,250.00",
  },
  {
    id: 2,
    name: "HONDA ELEVATE LIFE LONG MATS For Model 2023 ONWARDS (GLLM-080 A) CAR FLOOR MATS",
    price: "Rs. 5,250.00",
  },
  {
    id: 3,
    name: "HYUNDAI I-10 GRAND LIFE LONG MATS For Model 2017 ONWARDS (GLLM-084) CAR FLOOR MATS",
    price: "Rs. 4,500.00",
  },
  {
    id: 4,
    name: "HYUNDAI I-20 MAGNA LIFE LONG MATS For Model 2014 ONWARDS (GLLM-088) CAR FLOOR MATS",
    price: "Rs. 4,800.00",
  },
];

const solutions = [
  {
    title: "Industrial-Grade Durability",
    description: "Engineered for resilience and long-lasting performance.",
    icon: Dumbbell,
    color: "text-blue-400",
  },
  {
    title: "Custom Solutions",
    description: "Tailored rubber components to meet unique industry requirements.",
    icon: Settings,
    color: "text-orange-400",
  },
  {
    title: "Safety & Compliance",
    description: "Meeting the highest industry and environmental standards.",
    icon: ShieldCheck,
    color: "text-green-400",
  },
  {
    title: "Innovative Manufacturing",
    description: "Integrating advanced technology for precision and efficiency.",
    icon: Lightbulb,
    color: "text-red-400",
  },
  {
    title: "Sustainable Solutions",
    description: "Eco-friendly materials for durability and minimal impact.",
    icon: Recycle,
    color: "text-purple-400",
  },
];

const BestSellerAndSolutions = () => {
  return (
    <section className="relative bg-[#050505] overflow-hidden">
      
      {/* PART 1 — BEST SELLER SECTION */}
      <div className="py-32 border-t border-white/[0.03]">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="space-y-16">
            <div className="flex items-center gap-8">
              <h2 className="text-xl font-black uppercase tracking-[0.4em] text-white whitespace-nowrap">
                Best Seller
              </h2>
              <div className="h-[px] w-full bg-gradient-to-r from-blue-500/30 to-transparent" />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {bestSellers.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-square rounded-2xl bg-[#0a0a0a] border border-white/[0.03] overflow-hidden mb-8 transition-all duration-700 group-hover:border-blue-500/30 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-transparent opacity-50" />
                    
                    {/* Placeholder Content */}
                    <div className="absolute inset-10 border border-white/[0.02] rounded-xl flex items-center justify-center transition-transform duration-1000 group-hover:scale-110">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-700">Product Image</span>
                    </div>

                    {/* Top Right Label */}
                    <div className="absolute top-6 right-6">
                      <span className="text-[8px] font-black uppercase tracking-widest text-blue-500/40">Bestseller</span>
                    </div>
                  </div>

                  <div className="space-y-4 px-1">
                    <h4 className="text-[11px] font-bold text-slate-400 leading-relaxed min-h-[3rem] group-hover:text-white transition-colors duration-500">
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between pt-6 border-t border-white/[0.03]">
                      <span className="text-xs font-bold text-white tracking-tighter">{product.price}</span>
                      <button className="text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-blue-400 transition-all flex items-center gap-2 group/btn">
                        Details <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center pt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-blue-600 hover:bg-blue-500 text-white px-12 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center gap-3"
              >
                View All
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2 — ADVANCED RUBBER SOLUTIONS */}
      <div className="py-48 bg-[#0a0a0a] border-t border-white/[0.03]">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Discover the Power of Our <br />
                Advanced Rubber Solutions
              </h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-5"
            >
              <p className="text-base text-slate-500 leading-relaxed font-medium antialiased max-w-lg">
                Hans Rubber Industries delivers cutting-edge rubber solutions tailored for 
                diverse industries. With a commitment to quality, durability, and innovation, 
                our products ensure superior performance in demanding applications.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="group p-10 bg-[#050505] rounded-[32px] border border-white/[0.03] transition-all duration-700 hover:border-blue-500/20 hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.15)] relative overflow-hidden"
              >
                {/* Subtle Hover Glow Backdrop */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-500/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 space-y-8">
                  <div className={`w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500`}>
                    <item.icon size={24} className={`${item.color} group-hover:text-blue-400 transition-colors`} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-slate-500 leading-relaxed font-medium antialiased">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 bg-gradient-to-br from-blue-900/40 to-blue-950/40 backdrop-blur-xl rounded-[32px] border border-blue-500/20 flex flex-col justify-between items-start transition-all duration-700 hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.3)]"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MessageSquare size={24} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-black text-white tracking-tight">
                    Request a Service Consultation
                  </h4>
                  <p className="text-[13px] text-blue-100/60 leading-relaxed font-medium antialiased">
                    Get expert guidance on choosing the right rubber solutions for your needs.
                  </p>
                </div>
              </div>
              
              <button className="mt-10 group/btn bg-white text-blue-900 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all hover:bg-blue-50 flex items-center gap-3">
                Request Service
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BestSellerAndSolutions;
