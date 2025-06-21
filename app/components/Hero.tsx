"use client";

import { motion } from "framer-motion";
import { DownloadButtons } from "./DownloadButtons";

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
            className="space-y-8 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.p
                className="text-xs md:text-sm text-primary tracking-wide"
                variants={itemVariants}
              >
                One App. Every Payment. Zero Stress
              </motion.p>
              <motion.h1
                className="text-xl sm:text-3xl md:text-5xl font-semibold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Simplify Every Payment with One Powerful App
              </motion.h1>
            </div>

            <motion.p
              className="md:text-lg text-sm text-gray-600 leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              Billia lets you pay bills, top up Billia, buy data and manage your
              wallet — all in one place. Fast. Secure. Reliable.
            </motion.p>

            <motion.div className="w-full" variants={itemVariants}>
              <DownloadButtons />
            </motion.div>

            <motion.div className="pt-4" variants={itemVariants}>
              <div className="flex items-center flex-wrap flex-col justify-center md:justify-start md:flex-row space-x-2">
                <div className="flex">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`/ref${i}.svg`}
                      alt={`User ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover bg-gray-100"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  100,000+ beginners making payments smarter every day
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="relative px-6 flex justify-center lg:justify-end"
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/hero.png"
              alt="Phone Mockup"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
