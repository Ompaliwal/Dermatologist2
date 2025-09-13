"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Star, CheckCircle, Users } from "lucide-react";

// Animation variants for stagger effect
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-rose-50 to-white overflow-hidden min-h-screen flex items-center py-20">
      {/* Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-16">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            About <span className="text-rose-600">Dermacare Clinic</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Combining science, care, and trust – we are here to help you
            discover the confidence of healthy skin.
          </p>
        </motion.div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT → Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl w-full h-[400px]"
          >
            <Image
              src="/images/story.jpg"
              alt="Dermacare Clinic"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT → Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 text-gray-700"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Story
            </h2>
            <p>
              At <span className="font-semibold text-rose-600">Dermacare</span>,
              we believe skin health is more than just beauty—it’s about
              confidence, comfort, and self-love. Our clinic was founded with
              the mission to provide cutting-edge dermatology treatments while
              ensuring every patient feels heard, cared for, and valued.
            </p>
            <p>
              With state-of-the-art technology and a team of certified
              dermatologists, we specialize in advanced skincare solutions that
              bring long-lasting results.
            </p>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {[
            {
              icon: <Star className="w-8 h-8 text-rose-500 mb-3" />,
              title: "500+ Happy Patients",
              desc: "Trusted by patients across the region for reliable dermatology care.",
            },
            {
              icon: <CheckCircle className="w-8 h-8 text-rose-500 mb-3" />,
              title: "Certified Experts",
              desc: "Our dermatologists are certified professionals with years of experience.",
            },
            {
              icon: <Heart className="w-8 h-8 text-rose-500 mb-3" />,
              title: "Patient-Centric",
              desc: "We listen first, then design personalized treatments for your skin.",
            },
            {
              icon: <Users className="w-8 h-8 text-rose-500 mb-3" />,
              title: "Community Care",
              desc: "Beyond treatments, we educate and empower people about skincare.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
