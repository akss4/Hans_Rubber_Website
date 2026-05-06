"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Megaphone, 
  Globe, 
  MessageSquare, 
  Link, 
  PlayCircle, 
  MessageCircle,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  usefulLinks: [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Pricing", href: "#" },
  ],
  support: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Condition", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#" },
  { icon: MessageSquare, href: "#" },
  { icon: Link, href: "#" },
  { icon: PlayCircle, href: "#" },
  { icon: MessageCircle, href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      
      {/* PART 1 — TOP CTA SECTION: Black to Blue Transition */}
      <div className="relative bg-[#050505] pt-24 pb-32 md:pt-32 md:pb-40">
        {/* Cinematic Gradient Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f2a]/30 to-[#0c1440]" />
        
        {/* Atmospheric Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-10"
          >
            <div className="inline-flex items-center gap-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full shadow-2xl">
              <Megaphone size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-200/60">
                We Ready 24 Hours
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-[-0.03em] leading-[1.05]">
              Have a project in mind? <br />
              <span className="text-white/40 italic font-light">Let&apos;s Talk</span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-medium antialiased">
              Turn your vision into reality with industry-leading rubber solutions tailored to your needs.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full text-[13px] font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] flex items-center gap-4"
            >
              +91 99100 83791
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Phone size={14} className="text-white fill-white" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* PART 2 — MAIN FOOTER GRID: Industrial Navy */}
      <div className="bg-[#0c1440] border-t border-white/5 py-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Column 1: Brand */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-xl">
                   <div className="w-8 h-8 bg-[#0c1440] rounded-sm flex items-center justify-center">
                     <span className="text-white font-black text-xs">H</span>
                   </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white tracking-tighter uppercase leading-none">Hans</span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Rubber Industries</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-medium antialiased max-w-xs">
                A trusted leader in innovative and high-quality rubber solutions.
              </p>
            </div>

            {/* Column 2: Useful Links */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Useful Links</h4>
              <ul className="space-y-3">
                {footerLinks.usefulLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-blue-400 text-[14px] font-medium transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-blue-400 text-[14px] font-medium transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Detail */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Find Us</h4>
              <div className="space-y-5">
                <div className="space-y-1">
                  <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Operation Hours</p>
                  <p className="text-slate-300 text-sm font-medium">Mon - Sat : 8am - 9pm</p>
                </div>
                <div className="space-y-1">
                  <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Headquarters</p>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed">
                    Plot No. 1233 HSIIDC Rai Sonipat, <br />
                    Sonipat, Haryana 131029
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 space-y-1">
                  <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Project offers</p>
                  <a href="mailto:info@hansrubber.com" className="text-white text-lg font-bold hover:text-blue-400 transition-colors">
                    info@hansrubber.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PART 3 — BOTTOM BAR */}
      <div className="bg-[#0a0f2a] py-10 border-t border-white/5">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:row items-center justify-between gap-8 md:flex-row">
            <span className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em]">
              ©2026 ITxSential • Hans Rubber Industries
            </span>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/5 transition-all duration-500 group"
                >
                  <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
