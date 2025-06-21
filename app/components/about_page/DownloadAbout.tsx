import { motion } from "framer-motion";
import { DownloadButtons } from "../DownloadButtons";

export default function DownloadAbout() {
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
  return (
    <div className="max-w-7xl py-20 space-y-8 mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-base text-center md:text-xl font-semibold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Ready to simplify your biils?
          <br />
          Download Billa and experirence the smarter way to pay
        </motion.h2>
        <motion.div
          className="w-full flex justify-center items-center"
          variants={itemVariants}
        >
          <DownloadButtons isAboutPage />
        </motion.div>
      </motion.div>
    </div>
  );
}
