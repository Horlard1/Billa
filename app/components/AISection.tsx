"use client";

import { motion } from "framer-motion";
import {
  Bot,
  MessageCircle,
  CheckCircle,
  FileText,
  Lightbulb,
  MessagesSquare,
} from "lucide-react";

export default function AISection() {
  const features = [
    {
      text: "Pay Bills by Typing a Command",
      icon: FileText,
    },
    {
      text: "One-Tap Requests",
      icon: Lightbulb,
    },
    {
      text: "AI-Powered Assistance",
      icon: MessageCircle,
    },
  ];

  return (
    <div className="max-w-7xl py-20 mx-auto px-4 sm:px-6 lg:px-8 relative">
      <section className=" bg-[#ff3b301a] pt-5 md:pt-20 pb-5 lg:pb-0 rounded-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content - AI Image */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/ai.png"
                alt="AI Illustration"
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
                Introducing Billia AI: Smarter, Faster, Personal
              </motion.h2>

              <motion.p
                className="text-sm md:text-base font-normal text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                From paying phone bills to buying airtime or electricity, Billia
                AI makes every payment simpler, faster, and stress-free — just
                by asking.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-6 h-6 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon && (
                        <feature.icon className="w-5 h-5 text-primary" />
                      )}
                    </motion.div>
                    <span className="text-gray-700 text-xs sm:text-sm font-normal">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                className="bg-gradient-to-b from-[#f28211] to-[#c93106] mx-auto md:ml-0 text-white text-sm md:text-base px-8 min-w-60 text-center justify-center py-2.5 rounded-full font-semibold flex items-center space-x-2 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Try It Now</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
