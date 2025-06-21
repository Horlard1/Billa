"use client";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <div className="max-w-7xl py-20 space-y-10 mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-16 ">
          {/* Left Content - Texts*/}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-xl text-center md:text-left md:text-3xl font-semibold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Why We Started
            </motion.h2>

            <motion.p
              className="text-sm md:text-base font-normal text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              We created Billa because we saw a real problem: people struggling
              with too many apps, missed due dayes, and unreliable payment
              platforms. <br /> <br />
              So we built one app that brings it all together - electricity,
              internet, school fees, airtime and even a virtual dollar card. Add
              Billa AI, and you've got the smartest payment experience available
              today.
            </motion.p>
          </motion.div>

          {/* Right Content - Started Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/started.png"
              alt="started image"
              className="w-full max-w-md h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-16 ">
          {/* Left Content - Mission Image*/}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/mission.png"
              alt="mission image"
              className="w-full max-w-md h-auto object-contain"
            />
          </motion.div>

          {/* Right Content - Texts */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-xl text-center md:text-left md:text-3xl font-semibold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our Mission & Vision
            </motion.h2>

            <motion.p
              className="text-sm md:text-base font-normal text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <strong>Mission: </strong> To make bills payment effortless,
              intelligent, and accessible for everyone across Nigeria - no
              matter their background or tech level <br /> <br />
              <strong>Vision: </strong> A future where anyone can manage their
              financial life from one simple, secure platform - powered by smart
              automation and trust.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
