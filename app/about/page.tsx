"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/about_page/Hero";
import Mission from "../components/about_page/Mission";
import CoreValues from "../components/about_page/CoreValues";
import DownloadAbout from "../components/about_page/DownloadAbout";

export default function AboutUs() {
  return (
    <motion.main
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      <Mission />
      <CoreValues />
      <DownloadAbout />
      <Footer />
    </motion.main>
  );
}
