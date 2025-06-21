"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CoreValues() {
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
          className="text-left mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-3xl font-semibold text-gray-900 mb-4">
            Our Core Values
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            key={"simplicity"}
            className={`bg-yellow-50 rounded-xl p-8 pb-0 card-hover relative overflow-hidden group flex flex-col justify-end`}
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10 flex flex-col  justify-end h-full">
              <h3 className="text-base md:text-xl text-center sm:text-left  font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                Simplicity
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed ">
                Payments should be fast, clear, and easy - no stress.
              </p>

              <img
                src="/simplicity.png"
                alt="simplicity"
                className="w-20 h-20 sm:w-28 sm:h-28 object-contain self-end"
              />
            </div>

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

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>

          <motion.div
            key={"trust"}
            className={`bg-green-50 rounded-xl p-8 pb-0 card-hover relative overflow-hidden group flex flex-col justify-end`}
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <h3 className="text-base md:text-xl text-center sm:text-left font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                Trust
              </h3>
              <p className="text-gray-600 text-sm md:text-base  leading-relaxed">
                Your data and money are protected by real-time security and
                compliance.
              </p>
              <img
                src="/trust.png"
                alt="trust"
                className="w-20 h-20 sm:w-28 sm:h-28 object-contain self-end"
              />
            </div>
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

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>

          <motion.div
            key={"innovation"}
            className={`bg-red-50 rounded-xl p-8 pb-0 card-hover relative overflow-hidden group flex flex-col justify-end`}
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <h3 className="text-base md:text-xl text-center sm:text-left font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm md:text-base  leading-relaxed">
                We use smart tools like Billa AI to make bill payments smarter
                everyday.
              </p>
              <img
                src="/innovation.png"
                alt="innovation"
                className="w-20 h-20 sm:w-28 sm:h-28 object-contain self-end"
              />
            </div>
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

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>

          <motion.div
            key={"people"}
            className={`bg-blue-50 rounded-xl p-8 pb-0 card-hover relative overflow-hidden group flex flex-col justify-end`}
            variants={cardVariants}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <h3 className="text-base md:text-xl text-center sm:text-left font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                People First
              </h3>
              <p className="text-gray-600 text-sm md:text-base  leading-relaxed">
                Everything we build starts with our users' needs and experience
                in mind.
              </p>
              <img
                src="/people.png"
                alt="people"
                className="w-20 h-20 sm:w-28 sm:h-28 object-contain self-end"
              />
            </div>
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
