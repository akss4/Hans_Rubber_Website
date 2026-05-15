"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Factory, 
  Settings, 
  Zap, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

const categories = [
  {
    title: "Custom Automotive Mats",
    icon: Layers,
  },
  {
    title: "Industrial Rubber Sheets",
    icon: Factory,
  },
  {
    title: "OEM Rubber Components",
    icon: Settings,
  },
  {
    title: "Electrical Insulated Mats",
    icon: Zap,
  },
];

const products = [
  {
    id: 1,
    name: "HONDA ELEVATE LIFE LONG MATS For Model 2023 ONWARDS (GLLM-080) CAR FLOOR MATS",
    price: "Rs. 5,250.00",
    category: "Automotive",
  },
  {
    id: 2,
    name: "HONDA ELEVATE LIFE LONG MATS For Model 2023 ONWARDS (GLLM-080 A) CAR FLOOR MATS",
    price: "Rs. 5,250.00",
    category: "Automotive",
  },
  {
    id: 3,
    name: "HYUNDAI I-10 GRAND LIFE LONG MATS For Model 2017 ONWARDS (GLLM-084) CAR FLOOR MATS",
    price: "Rs. 4,500.00",
    category: "Automotive",
  },
  {
    id: 4,
    name: "HYUNDAI I-20 MAGNA LIFE LONG MATS For Model 2014 ONWARDS (GLLM-088) CAR FLOOR MATS",
    price: "Rs. 4,800.00",
    category: "Automotive",
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="bg-black relative">
      {/* Cinematic Transition from Hero */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#020617] to-black pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10 py-48">
        
        {/* PART 1 — CATEGORY FEATURES: Refined & Minimal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-32 border-y border-white/[0.03]">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1.2 }}
              className={`group flex flex-col items-start p-12 transition-all duration-700 ${
                idx !== categories.length - 1 ? "lg:border-r border-white/[0.03]" : ""
              }`}
            >
              <div className="mb-10 text-slate-500 group-hover:text-white transition-colors duration-500">
                <cat.icon size={32} strokeWidth={1} />
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed">
                {cat.title}
              </h3>
              <div className="mt-6 w-0 group-hover:w-8 h-[1px] bg-blue-500/50 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* PART 2 — CENTER CTA: Premium Neutrality */}
        <div className="flex justify-center mb-48">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative px-12 py-5 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-[0.25em] transition-all hover:bg-slate-100 flex items-center gap-4"
          >
            Explore All Products
            <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ChevronRight size={12} />
            </div>
          </motion.button>
        </div>

        {/* PART 3 — NEW PRODUCTS: Art-Directed Composition */}
        <div className="space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.03] pb-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500/60">The New Standard</span>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Recent Engineering.
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed font-medium">
              Discover our latest advancements in polymer technology and industrial design.
            </p>
          </div>

          {/* Product Grid: Disciplined & Dark */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col"
              >
                {/* Image Container: High Contrast / Deep Shadow */}
                <div className="relative aspect-[4/5] rounded-3xl bg-[#0a0a0a] border border-white/[0.03] overflow-hidden mb-8 transition-all duration-700 group-hover:border-white/10 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                  {/* Subtle Technical Backdrop */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,transparent_100%)] opacity-30" />
                  
                  {/* Product Visual Area */}
                  <div className="absolute inset-10 border border-white/[0.02] rounded-2xl flex items-center justify-center transition-transform duration-1000 group-hover:scale-110">
                    <div className="w-24 h-32 bg-gradient-to-b from-slate-800 to-slate-900 rounded shadow-2xl relative">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    </div>
                  </div>

                  {/* Minimal Metadata Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-blue-500/50 transition-colors">Ref. {product.id}00X</span>
                  </div>
                </div>

                {/* Typography: Premium Sizing */}
                <div className="space-y-4 px-1">
                  <h4 className="text-[12px] font-bold text-slate-400 leading-relaxed tracking-tight group-hover:text-white transition-colors duration-500">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between pt-6">
                    <span className="text-xs font-bold text-white tracking-tighter">{product.price}</span>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-all flex items-center gap-2 group/btn">
                      View
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All: Minimalist & Restrained */}
          <div className="flex justify-center pt-24">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-16 py-4 border-b border-white/10 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 hover:text-white hover:border-white transition-all"
            >
              Browse Full Collection
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
