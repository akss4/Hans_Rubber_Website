"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import QueryForm from "@/components/sections/QueryForm";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#0a0f2a_0%,transparent_50%)] opacity-40" />
      </div>

      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
        className="relative z-10 pt-20"
      >
        <QueryForm />
      </motion.div>

      <Footer />
    </main>
  );
}
