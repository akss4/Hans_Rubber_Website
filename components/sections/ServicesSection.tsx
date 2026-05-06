"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Precision Engineering & Custom Rubber Molding",
    description: "Delivering high-performance rubber components tailored to meet diverse industrial demands. Each product is designed for durability, flexibility, and superior resistance.",
  },
  {
    id: "02",
    title: "Scalable & Efficient Manufacturing",
    description: "Equipped with advanced production capabilities, ensuring high-volume output without compromising quality. Streamlined processes enhance efficiency across various applications.",
  },
  {
    id: "03",
    title: "Industrial Rubber Sheets & Gaskets",
    description: "Manufacturing premium-quality rubber sheets and gaskets for various industrial applications, ensuring excellent sealing, insulation, and resilience against extreme conditions.",
  },
  {
    id: "04",
    title: "Specialized Rubber Coatings & Lining",
    description: "Providing cutting-edge rubber coating and lining solutions to enhance the durability and longevity of industrial equipment, protecting against wear, abrasion, and corrosion.",
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-[#ece8e1] py-32 md:py-56 relative overflow-hidden">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-5xl mx-auto mb-32 md:mb-48"
        >
          <div className="inline-flex items-center gap-3 bg-black/[0.04] px-4 py-1.5 rounded-full mb-10">
            <div className="w-1 h-1 rounded-full bg-blue-600" />
            <span className="text-[8px] font-black uppercase tracking-[0.5em] text-black/40">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-[#1a1a1a] leading-[1.05] tracking-tight">
            Advancing Industry Standards with <br />
            <span className="text-black/20 font-light italic text-[0.9em]">Innovative Rubber Solutions</span>
          </h2>
        </motion.div>

        {/* Services List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`group relative py-16 md:py-24 border-b border-black/[0.08] last:border-0 transition-all duration-700`}
            >
              {/* Animated Row Background */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/40 transition-colors duration-700 -mx-8 md:-mx-16 px-8 md:px-16" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                
                {/* ID & Title */}
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-[10px] font-black tracking-[0.3em] text-blue-600/50 block">
                    {service.id}.
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] tracking-tight leading-tight group-hover:text-blue-600 transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-6 flex flex-col items-start justify-center">
                  <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium antialiased max-w-xl">
                    {service.description}
                  </p>
                </div>

              </div>

              {/* Cinematic Border Glow */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 transition-all duration-1000" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Area: Atmospheric */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="mt-32 md:mt-48 text-center"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20 mb-12">
            Ready to optimize your industrial infrastructure?
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-blue-600 text-white px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:bg-blue-500 hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] flex items-center gap-4 mx-auto"
          >
            Request Full Service Catalog
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
