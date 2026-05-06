"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";

const QueryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  description: "",
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data);

    setIsSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      description: "",
    });

  } catch (error) {
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="bg-[#050505] py-32 md:py-48 relative overflow-hidden">
      {/* Cinematic Depth & Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0a0f2a_0%,transparent_70%)] opacity-20" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Block */}
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full mb-8"
            >
              <div className="w-1 h-1 rounded-full bg-blue-500" />
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-blue-200/60">
                Inquiry Portal
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
            >
              Request a Technical <br />
              <span className="text-white/40 italic font-light">Consultation & Quote</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium"
            >
              Provide your project specifications below. Our engineering team will review your 
              requirements and provide a detailed industrial solution.
            </motion.p>
          </div>

          {/* Form Surface */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative p-1 md:p-1.5 rounded-[40px] bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent shadow-2xl"
          >
            <div className="bg-[#0a0a0a] rounded-[38px] p-8 md:p-16 relative overflow-hidden">
              {/* Subtle Technical Grid Inside Form */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="space-y-8 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Full Name */}
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                            value={formData.name}
                            onChange={(e) =>
                               setFormData({
                                ...formData,
                                name: e.target.value,
                                })
                               }
                          placeholder="Akash Singh"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-500"
                        />
                      </div>
                      
                      {/* Contact Number */}
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Contact Number</label>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) =>
                             setFormData({
                            ...formData,
                            phone: e.target.value,
                             })
                            }
                          placeholder="0000000000"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-500"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Email Address</label>
                      <input 
                        required
                        type="email"
                        value={formData.email}
                          onChange={(e) =>
                               setFormData({
                               ...formData,
                               email: e.target.value,
                                })
                               }
                        placeholder="aksofworks@gmail.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-500"
                      />
                    </div>

                    {/* Description / Requirements */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-1">Project Specifications</label>
                      <textarea 
                        required
                        rows={5}
                          value={formData.description}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                description: e.target.value,
                              })
                            }
                        placeholder="Detail your rubber component requirements, dimensions, and material preferences..."
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-500 resize-none"
                      />
                    </div>

                    <div className="pt-6">
                      <motion.button 
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Processing..." : "Get Quote Now"}
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-500">
                          <ArrowRight size={14} className="text-white" />
                        </div>
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center space-y-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                      <CheckCircle2 size={40} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-white tracking-tight">Technical Request Received</h3>
                      <p className="text-slate-400 text-lg font-medium max-w-sm mx-auto">
                        We will contact you soon with a detailed solution and quotation.
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors"
                    >
                      Send another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QueryForm;
