"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../navbar/page";

const services = [
  {
    title: "Acne & Scar Treatment",
    desc: "Clear skin with our advanced acne therapies and scar reduction solutions.",
    icon: "/images/services1.jpg",
  },
  {
    title: "Laser Hair Removal",
    desc: "Smooth, hair-free skin using safe and effective laser technology.",
    icon: "/images/services2.jpg",
  },
  {
    title: "Skin Rejuvenation",
    desc: "Revitalize your skin with peels, facials, and anti-aging treatments.",
    icon: "/images/services3.jpg",
  },
  {
    title: "Pigmentation Solutions",
    desc: "Target dark spots, melasma, and uneven skin tone for a radiant glow.",
    icon: "/images/services4.jpg",
  },
  {
    title: "Hair Restoration",
    desc: "Regain confidence with modern hair regrowth and PRP treatments.",
    icon: "/images/services5.jpg",
  },
  {
    title: "Botox & Fillers",
    desc: "Look youthful with minimally invasive anti-wrinkle and filler solutions.",
    icon: "/images/services6.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
    <section className="relative min-h-screen  bg-gradient-to-b from-rose-50 to-white px-6 sm:px-8 lg:px-12 py-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our <span className="text-rose-600">Services</span>
        </h1>
        <p className="mt-3 text-gray-600 text-base max-w-md mx-auto">
          Personalized dermatology treatments designed to bring out your natural glow.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex border-b-4 border-rose-500
 rounded-2xl bg-white shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {/* Left: Text */}
            <div className="w-1/2 flex flex-col justify-center p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
            </div>

            {/* Right: Image */}
            <div className="w-1/2 relative">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    
</>
  );
}
