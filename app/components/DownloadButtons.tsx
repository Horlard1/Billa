import { motion } from "framer-motion";

export function DownloadButtons({ isAboutPage = false }) {
  return (
    <div
      className={`flex w-full ${
        isAboutPage ? "justify-center items-center" : ""
      } flex-row gap-4`}
    >
      <motion.a
        href="#"
        className="block w-1/2 bg-black rounded-lg outline-none appearance-none  sm:w-auto"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img
          src="/google_badge.png"
          alt="Get it on Google Play"
          className="h-12 w-full sm:w-auto"
        />
      </motion.a>
      <motion.a
        href="#"
        className="block w-1/2  bg-black rounded-lg outline-none appearance-none sm:w-auto"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img
          src="/apple_badge.svg"
          alt="Download on the App Store"
          className="h-12 outline-none appearance-none w-full sm:w-auto"
        />
      </motion.a>
    </div>
  );
}
