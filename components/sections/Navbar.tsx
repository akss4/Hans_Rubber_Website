"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Products", href: "#products" },
  { name: "Certifications", href: "/certifications" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "About us", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  
  const { scrollY } = useScroll();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  
  // Smooth spring for background and blur transitions
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const bgOpacity = useTransform(smoothScrollY, [0, 50], [0, 0.85]);
  const backdropBlur = useTransform(smoothScrollY, [0, 50], [0, 12]);
  const navPadding = useTransform(smoothScrollY, [0, 50], ["40px", "16px"]);
  const borderOpacity = useTransform(smoothScrollY, [0, 50], [0, 0.05]);

  const lastScrollY = useRef(0);
  const accumulatedDistance = useRef(0);
  const HIDE_THRESHOLD = 80; // Distance to scroll before hiding
  const SHOW_THRESHOLD = 40; // Distance to scroll before showing

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastScrollY.current;
    const direction = delta > 0 ? "down" : "up";
    
    // Check if at top
    const atTop = latest < 10;
    if (atTop !== isAtTop) setIsAtTop(atTop);

    if (atTop) {
      setIsVisible(true);
      accumulatedDistance.current = 0;
    } else {
      // Accumulate distance in the current direction
      if ((direction === "down" && accumulatedDistance.current < 0) || 
          (direction === "up" && accumulatedDistance.current > 0)) {
        accumulatedDistance.current = 0;
      }
      accumulatedDistance.current += delta;

      // Logic: Only hide/show after meaningful movement
      if (direction === "down" && accumulatedDistance.current > HIDE_THRESHOLD && latest > 200) {
        if (isVisible) setIsVisible(false);
      } else if (direction === "up" && Math.abs(accumulatedDistance.current) > SHOW_THRESHOLD) {
        if (!isVisible) setIsVisible(true);
      }
    }

    lastScrollY.current = latest;
  });

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Announcement Bar: Scroll-reactive Visibility */}
      <motion.div 
        initial={false}
        animate={{ 
          height: isAtTop ? "auto" : 0,
          opacity: isAtTop ? 1 : 0,
          y: isAtTop ? 0 : -20
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white/[0.01] border-b border-white/[0.03] overflow-hidden pointer-events-auto"
      >
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-2.5 flex justify-center items-center">
          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
            <span>Global Industrial Logistics</span>
            <span className="w-1 h-1 rounded-full bg-blue-500/40" />
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              Connect with Hans
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Main Navbar: Cinematic Momentum-aware Visibility */}
      <motion.nav 
        initial={false}
        animate={{ 
          y: isVisible ? 0 : "-110%",
          opacity: isVisible ? 1 : 0,
        }}
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(2, 6, 23, ${v})`),
          backdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
          borderBottomColor: useTransform(borderOpacity, (v) => `rgba(255, 255, 255, ${v})`),
          paddingTop: navPadding,
          paddingBottom: navPadding,
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1], // Cinematic ease-out
        }}
        className="w-full border-b flex items-center pointer-events-auto shadow-2xl shadow-black/0 data-[scrolled=true]:shadow-black/20"
        data-scrolled={!isAtTop}
      >
        <div className="container mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => {
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-4 group relative z-10 cursor-pointer outline-none"
          >
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-lg rounded-sm transition-transform duration-500 group-hover:scale-[0.9]">
              H
            </div>
            <div className="flex flex-col items-start">
              <span className="text-base font-bold tracking-[-0.03em] text-white leading-none">HANS</span>
              <span className="text-[7px] tracking-[0.4em] text-slate-600 uppercase font-black leading-none mt-1.5 transition-colors group-hover:text-blue-400">Industries</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 hover:text-white transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-4 opacity-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-8 relative z-10">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-500 hover:bg-blue-50 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]"
            >
              Contact Sales
              <div className="w-6 h-6 bg-black/[0.08] rounded-full flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-10 p-2 text-white hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 bg-[#020617]/98 backdrop-blur-2xl z-40 flex flex-col pt-32 px-12 pointer-events-auto"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      handleScroll(e, item.href);
                      setIsOpen(false);
                    }}
                    className="text-3xl font-bold tracking-tight text-white/40 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-20 pt-10 border-t border-white/5"
            >
              <Link
                href="/contact"
                className="w-full flex items-center justify-between bg-white text-black px-8 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Talk
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
