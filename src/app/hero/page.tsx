"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Star, Heart, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-rose-50 to-white overflow-hidden min-h-screen flex items-center">
      {/* Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Floating Accent Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-10 text-rose-400"
      >
        <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: -20 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-16 right-8 sm:right-12 text-rose-300"
      >
        <Heart className="w-10 h-10 sm:w-12 sm:h-12" />
      </motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* LEFT → Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug sm:leading-tight"
          >
            Radiant <span className="text-rose-600">Skin</span>,<br />
            Confident <span className="text-rose-600">You</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-base sm:text-lg text-gray-600 max-w-md sm:max-w-xl"
          >
            At{" "}
            <span className="font-semibold text-rose-600">Dermacare Clinic</span>
            , we combine advanced dermatology with personalized care to reveal
            your natural glow.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a
              href="/contact"
              className="px-5 py-3 sm:px-6 sm:py-3 rounded-full bg-rose-600 text-white font-medium shadow-lg hover:bg-rose-700 transition text-center"
            >
              Book Consultation
            </a>
            <a
              href="/services"
              className="px-5 py-3 sm:px-6 sm:py-3 rounded-full border border-rose-600 text-rose-600 font-medium hover:bg-rose-50 transition text-center"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-5 sm:mt-6 flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-full shadow-md"
          >
            <Star className="w-5 h-5 text-rose-500" />
            <span className="text-sm font-medium">
              Trusted by 500+ happy patients
            </span>
          </motion.div>

          {/* Highlights - only visible on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden lg:grid mt-10 grid-cols-2 gap-4"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm">
              <CheckCircle className="w-5 h-5 text-rose-500" />
              <span className="text-sm font-medium text-gray-700">
                Advanced Care
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm">
              <CheckCircle className="w-5 h-5 text-rose-500" />
              <span className="text-sm font-medium text-gray-700">
                Certified Experts
              </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT → Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl flex items-center justify-center mx-auto my-6 sm:my-8 w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[650px] h-[280px] sm:h-[350px] lg:h-[450px]"
          >
            <Image
              src="/images/hero.jpg"
              alt="Dermatology Specialist"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
