"use client";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, QuoteIcon } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial-slick-fix.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alanna McCray",
      role: "Six months",

      rating: 5,
      text: "Before Billia, I always struggled with home payment delays, failed transactions, and poor customer service. With Billia, paying bills is efficient, secure, and perfect for people like me.",
      date: "4 June 2023",
      avatar: "👩‍💼",
    },
    {
      name: "Savannah Nguyen",
      role: "One year",

      rating: 5,
      text: "I was surprised how fast Billia made financial services. I recommend it to anyone who wants to pay their bills and financial transactions. The user experience is amazing.",
      date: "24 April 2023",
      avatar: "👨‍💻",
    },
    {
      name: "John Anderson",
      role: "Five years",

      rating: 5,
      text: "Billia has revolutionized how I handle my monthly payments. The AI assistant is incredibly intuitive and saves me hours every month. Highly recommended!",
      date: "15 May 2023",
      avatar: "👨‍🔬",
    },
  ];

  // Custom Arrow Components
  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <motion.button
        className="flex absolute left-0 md:left-auto md:right-full border border-primary md:border-transparent mr-0 md:mr-10 w-12 h-12 bg-white outline-none text-gray-500 rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300 z-30"
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <ArrowLeft className="w-6 h-6" />
      </motion.button>
    );
  }
  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <motion.button
        className="flex absolute right-0 md:right-auto md:left-full border border-primary md:border-transparent ml-0 md:ml-10 w-12 h-12 bg-white outline-none text-gray-500 rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300 z-30"
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ right: 0, top: "50%", transform: "translateY(-50%)" }}
      >
        <ArrowRight className="w-6 h-6" />
      </motion.button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-[#f28211] to-[#c93106] relative overflow-hidden">
      <img
        src="/footer_background.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs2 w-max mx-auto border border-white px-2 py-0.5 rounded-full bg-transparent text-white">
            Testimonials
          </p>
          <h2 className="text-xl md:text-3xl font-semibold text-white mb-4">
            What Our Customers Says
          </h2>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <Slider {...settings} className="testimonial-slider bg-transparent">
            {testimonials.map((t, idx) => {
              const userImages = ["/user_1.svg", "/user_2.svg", "/user_1.svg"];
              const userImg = userImages[idx % userImages.length];
              return (
                <div key={idx} className="px-2 h-full">
                  <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl flex flex-col h-full min-h-[250px] md:min-h-[300px]  justify-between">
                    {/* Top: User Image/Info left, Quote right */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className="flex-shrink-0 flex items-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        <img
                          src={userImg}
                          alt={t.name}
                          className=" w-10 md:w-16 h-10 md:h-16 rounded-full object-cover mr-4 border-2 border-orange-200 bg-orange-50"
                        />
                        <div className="text-left">
                          <h4 className="font-semiboldbold text-gray-900 text-sm md:text-base">
                            {t.name}
                          </h4>
                          <p className="text-gray-600 text-xs2 md:text-xs">
                            {t.role} of using Billa
                          </p>
                        </div>
                      </motion.div>
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <QuoteIcon className="w-8 h-8 text-orange-500" />
                      </motion.div>
                    </div>
                    {/* Middle: Testimonial Text */}
                    <motion.p
                      className="text-gray-700 text-sm leading-relaxed mb-6 flex-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {t.text}
                    </motion.p>
                    {/* Bottom: Date left, Rating right */}
                    <div className="flex items-center justify-between mt-auto">
                      <motion.p
                        className="text-gray-500 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        {t.date}
                      </motion.p>
                      <motion.div
                        className="flex items-center space-x-1"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-700 text-sm font-semibold ml-1">
                          4.5/5.0
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
