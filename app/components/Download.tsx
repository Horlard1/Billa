"use client";

import { motion } from "framer-motion";
import { DownloadButtons } from "./DownloadButtons";

export default function Download() {
  return (
    <div className="max-w-7xl py-20 mx-auto px-4 sm:px-6 lg:px-8 relative">
      <section className="bg-[#ff3b301a] pt-5 md:pt-20 pb-5 md:pb-0 rounded-2xl relative  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content: Texts */}
            <motion.div
              className=" space-y-5 md:space-y-8  order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-xl text-center md:text-left md:text-3xl font-semibold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Download Billia <br className="hidden md:block" /> Today
              </motion.h2>

              <motion.p
                className="md:text-lg text-sm text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Fast payments, smart reminders, and secure wallet tools — all
                inside Billia.
              </motion.p>

              {/* Download Buttons */}
              <DownloadButtons />
            </motion.div>

            {/* Right Content: Download Image */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/download.svg"
                alt="Download Billia App"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
