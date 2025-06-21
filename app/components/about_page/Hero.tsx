"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-hero-bg pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            className="relative px-6 flex justify-center lg:justify-end"
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/about_hero.png"
              alt="User"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="space-y-8 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-xl text-center md:text-3xl font-semibold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Reimagining How Nigerians Pay, One Bill at a Time
              </motion.h1>
            </div>

            <motion.p
              className="text-sm md:text-lg text-gray-600 text-center leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              At Billa, we're building more than just a payment app; we're
              creating a smarter, simpler way for everryday Nigerians to stay
              connected, pay their bills and take control of their financial
              lives.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
