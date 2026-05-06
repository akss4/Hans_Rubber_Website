"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqData = [
  {
    question: "How long has your company been established?",
    answer: "Insert answer later.",
  },
  {
    question: "How much does it cost for one design?",
    answer: "Insert answer later.",
  },
  {
    question: "How many people work at your company?",
    answer: "Insert answer later.",
  },
  {
    question: "Does your company open job vacancies?",
    answer: "Insert answer later.",
  },
  {
    question: "How do I contact Hans Rubber Industries for an appointment?",
    answer: "Insert answer later.",
  },
  {
    question: "What kind of contracts do you provide?",
    answer: "Insert answer later.",
  },
];

const AccordionItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg md:text-xl font-bold transition-colors duration-500 ${isOpen ? "text-blue-400" : "text-white/90 group-hover:text-white"}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-8 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-blue-600 border-blue-600 text-white rotate-180" : "border-white/20 text-white/40 group-hover:border-white/40 group-hover:text-white"}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-16 text-slate-400 text-base md:text-lg leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#050505] py-32 md:py-56 relative overflow-hidden">
      {/* Cinematic Depth & Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#080808] to-transparent opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#111111_0%,transparent_80%)] opacity-40" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0a0a0a] blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full mb-10"
          >
            <div className="w-1 h-1 rounded-full bg-blue-500" />
            <span className="text-[8px] font-black uppercase tracking-[0.5em] text-blue-200/60">
              FAQS
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Accordion List */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-32 md:mb-48"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Support CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-12"
        >
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Still have questions?
            </h3>
            <p className="text-slate-400 text-base md:text-lg font-medium antialiased">
              Reach out to our team for more details or to discuss your specific requirements.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] flex items-center gap-4"
          >
            Contact Us
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-500">
              <ArrowRight size={14} className="text-white" />
            </div>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQSection;
