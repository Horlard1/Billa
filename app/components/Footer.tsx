"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  FacebookIcon,
} from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Features", "Testimonials", "Services", "FAQ"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
    {
      title: "Contact Us",
      links: [
        { icon: Mail, text: "Billainfo@gmail.com" },
        { icon: Phone, text: "08023437727" },
      ],
    },
  ];

  // Only show Facebook (solid), Instagram, and X (Twitter as X)
  const socialLinks = [
    { icon: FacebookIcon, href: "#", color: "hover:text-blue-600" }, // solid Facebook
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Twitter, href: "#", color: "hover:text-black", label: "X" }, // Twitter as X
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <footer className="bg-gradient-to-b from-[#f28211] to-[#c93106] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        <img
          src="/footer_background.svg"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-40"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
            {/* Brand Section */}
            <motion.div className="col-span-2" variants={itemVariants}>
              <motion.div
                className="flex items-center space-x-2 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="/footer_logo.svg"
                  alt="Billia Logo"
                  className="h-10 w-auto"
                />
              </motion.div>

              <p className="text-orange-100 w-full md:w-4/5 text-sm leading-relaxed mb-6">
                Our all-in-one app for bills, airtime, data, and smart payments
                — powered by Billia AI
              </p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="text-base font-medium mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.7 + sectionIndex * 0.1 + linkIndex * 0.05,
                      }}
                    >
                      {typeof link === "string" ? (
                        <motion.a
                          href="#"
                          className="text-orange-100 text-sm hover:text-white transition-colors duration-200 block"
                          whileHover={{ x: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          {link}
                        </motion.a>
                      ) : (
                        <motion.div
                          className="flex items-center text-sm space-x-3 text-orange-100"
                          whileHover={{ x: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <link.icon className="w-4 h-4" />
                          <span>{link.text}</span>
                        </motion.div>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/20 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-orange-100 text-xs2 sm:text-xs"
              whileHover={{ scale: 1.02 }}
            >
              © 2024 Billia Technologies. All rights reserved.
            </motion.p>
            <motion.p
              className="text-orange-100 text-xs2 sm:text-xs"
              whileHover={{ scale: 1.02 }}
            >
              Product of SmartRob Technologies Limited
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
