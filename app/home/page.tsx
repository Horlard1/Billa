"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AISection from "../components/AISection";
import Testimonials from "../components/Testimonials";
import Download from "../components/Download";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      <Features />
      <AISection />
      <Testimonials />
      <Download />
      <Footer />
    </motion.main>
  );
}
