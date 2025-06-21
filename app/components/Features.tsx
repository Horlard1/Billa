"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Smartphone, Calendar } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "All-in-One Bill Payments",
      description:
        "Pay for electricity, TV, internet, education, and betting — all in seconds!",
      icon: CreditCard,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      image: "👩‍💼",
    },
    {
      title: "Airtime & Data Top-Up",
      description:
        "Buy airtime and mobile data for yourself or others — Instant and reliable.",
      icon: Smartphone,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      image: "📱",
    },
    {
      title: "Virtual Dollar Card",
      description:
        "Shop globally with your own secure virtual dollar card — perfect for subscriptions and online payments.",
      icon: Calendar,
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      image: "💳",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-3xl font-semibold text-gray-900 mb-4">
            Everything You Need to Pay Smarter
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Top Left: All-in-One Bill Payments */}
          <motion.div
            key={features[0].title}
            className={`${features[0].bgColor} rounded-xl p-8 pb-0 card-hover relative overflow-hidden group flex flex-col justify-end`}
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10 flex flex-col  justify-end h-full">
              {/* Content */}
              <h3 className="text-base md:text-xl text-center sm:text-left  font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {features[0].title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed ">
                {features[0].description}
              </p>
              {/* Image bottom center */}
              <img
                src="/bills.svg"
                alt="Bills"
                className="w-60 h-40 object-contain self-center"
              />
            </div>
            {/* Floating Elements */}
            <motion.div
              className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full opacity-60"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
            />
            <motion.div
              className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full opacity-40"
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
            />
            {/* Hover Effect Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>

          {/* Top Right: Airtime & Data Top-Up */}
          <motion.div
            key={features[1].title}
            className={`${features[1].bgColor} rounded-xl p-8 pb-0 card-hover relative overflow-hidden group flex flex-col justify-end`}
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              {/* Content */}
              <h3 className="text-base md:text-xl text-center sm:text-left font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {features[1].title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base  leading-relaxed">
                {features[1].description}
              </p>
              {/* Image bottom center */}
              <img
                src="/airtime.svg"
                alt="Airtime"
                className="w-72 h-40 object-contain self-center"
              />
            </div>
            {/* Floating Elements */}
            <motion.div
              className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full opacity-60"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
            <motion.div
              className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full opacity-40"
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
            {/* Hover Effect Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>

          {/* Bottom: Virtual Dollar Card spanning both columns */}
          <motion.div
            key={features[2].title}
            className={`${features[2].bgColor} rounded-xl p-8 card-hover relative overflow-hidden group md:col-span-2 flex flex-col md:flex-row items-center md:items-stretch`}
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10 w-full md:w-2/5 flex flex-col justify-center">
              {/* Content */}
              <h3 className="md:text-xl text-center sm:text-left text-base font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {features[2].title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {features[2].description}
              </p>
            </div>
            {/* Card image right aligned on desktop, below on mobile */}
            <div className="relative z-10 flex-shrink-0 flex justify-center md:justify-end w-full flex-1 ">
              <img
                src="/card.svg"
                alt="Virtual Dollar Card"
                className="w-full h-60 object-contain"
              />
            </div>
            {/* Floating Elements */}
            <motion.div
              className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full opacity-60"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            />
            <motion.div
              className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full opacity-40"
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
            {/* Hover Effect Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
